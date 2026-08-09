// QR 코드 SVG 생성 (외부 서비스 호출 없이 브라우저 안에서만 처리).
// 초기 로딩을 가볍게 유지하려고 실제로 QR이 필요한 화면에서만 동적으로 불러온다.

const QRCODE_URL = new URL('./vendor/qrcode.mjs', import.meta.url);

export async function renderQrSvg(text, { cellSize = 4, margin = 2 } = {}) {
  const { qrcode } = await import(QRCODE_URL.href);
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  return qr.createSvgTag(cellSize, margin);
}
