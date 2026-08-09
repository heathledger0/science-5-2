// 업로드한 파일에서 텍스트를 뽑아내는 모듈.
// .txt는 즉시 처리하고, .pdf/.hwp/.hwpx는 필요할 때만 해당 라이브러리를
// 동적으로 불러온다(초기 페이지 로딩을 무겁게 하지 않기 위함).
// 모든 처리는 브라우저 안에서만 일어나고 외부 서버로 전송되지 않는다.

const PDFJS_URL = new URL('./vendor/pdfjs/pdf.min.mjs', import.meta.url);
const PDFJS_WORKER_URL = new URL('./vendor/pdfjs/pdf.worker.min.mjs', import.meta.url);
const HWP_CONVERT_URL = new URL('./vendor/hwp-convert.browser.mjs', import.meta.url);

export function getFileKind(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith('.txt') || file.type === 'text/plain') return 'txt';
  if (name.endsWith('.pdf')) return 'pdf';
  if (name.endsWith('.hwpx')) return 'hwpx';
  if (name.endsWith('.hwp')) return 'hwp';
  return null;
}

export async function extractTextFromFile(file) {
  const kind = getFileKind(file);
  if (kind === 'txt') return file.text();
  if (kind === 'pdf') return extractPdf(file);
  if (kind === 'hwp' || kind === 'hwpx') return extractHwp(file);
  throw new Error('지원하지 않는 파일 형식이에요. .txt, .pdf, .hwp, .hwpx 파일만 올릴 수 있어요.');
}

async function extractPdf(file) {
  let pdfjsLib;
  try {
    pdfjsLib = await import(PDFJS_URL.href);
  } catch (e) {
    throw new Error('PDF 처리 도구를 불러오지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.');
  }
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL.href;

  const buf = await file.arrayBuffer();
  let doc;
  try {
    doc = await pdfjsLib.getDocument({ data: buf }).promise;
  } catch (e) {
    throw new Error('PDF 파일을 열지 못했어요. 암호가 걸려 있거나 손상된 파일일 수 있어요. (' + e.message + ')');
  }

  const pageTexts = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((it) => it.str).join(' ').replace(/[ \t]{2,}/g, ' ');
    pageTexts.push(pageText);
  }
  const text = pageTexts.join('\n\n').trim();
  if (!text) {
    throw new Error('PDF에서 글자를 찾지 못했어요. 스캔한 이미지로 만든 PDF는 글자 인식이 되지 않아요. 교과서 내용을 복사해서 붙여넣어 주세요.');
  }
  return text;
}

async function extractHwp(file) {
  let mod;
  try {
    mod = await import(HWP_CONVERT_URL.href);
  } catch (e) {
    throw new Error('한글(HWP) 처리 도구를 불러오지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.');
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const format = mod.detectFormat(bytes);

  if (format === 'hwp3') {
    throw new Error('HWP 3.0 형식은 지원하지 않아요. 한글 프로그램에서 최신 버전(.hwp 5.0 이상 또는 .hwpx)으로 다시 저장한 뒤 올려 주세요.');
  }
  if (format !== 'hwp' && format !== 'hwpx') {
    throw new Error('한글 파일 형식을 인식하지 못했어요. 파일이 손상되지 않았는지 확인하거나, 내용을 복사해서 붙여넣어 주세요.');
  }

  try {
    let text;
    if (format === 'hwpx') {
      const reader = new mod.HwpxReader();
      const ab = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
      await reader.loadFromArrayBuffer(ab);
      text = await reader.extractText();
    } else {
      text = await mod.hwpToText(bytes);
    }
    text = (text || '').trim();
    if (!text) {
      throw new Error('EMPTY');
    }
    return text;
  } catch (e) {
    if (e instanceof mod.HwpEncryptedError || e instanceof mod.HwpxEncryptedDocumentError) {
      throw new Error('암호가 걸린 문서는 열 수 없어요. 한글 프로그램에서 암호를 해제한 뒤 다시 올려 주세요.');
    }
    if (e instanceof mod.HwpUnsupportedError) {
      throw new Error('지원하지 않는 한글 문서 형식이에요. (' + e.message + ') 내용을 복사해서 붙여넣어 주세요.');
    }
    throw new Error('한글 파일에서 글자를 뽑아내지 못했어요. 이 도구는 100% 완벽하지 않을 수 있어요 — 내용을 복사해서 붙여넣어 주세요.');
  }
}
