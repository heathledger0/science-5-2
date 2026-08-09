var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn, res, err2) => function __init() {
  if (err2) throw err2[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err2 = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/jszip/dist/jszip.min.js
var require_jszip_min = __commonJS({
  "node_modules/jszip/dist/jszip.min.js"(exports2, module) {
    !(function(e) {
      if ("object" == typeof exports2 && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
      }
    })(function() {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t) return t(r, true);
              if (l3) return l3(r, true);
              var n = new Error("Cannot find module '" + r + "'");
              throw n.code = "MODULE_NOT_FOUND", n;
            }
            var i = o[r] = { exports: {} };
            a[r][0].call(i.exports, function(e3) {
              var t2 = a[r][1][e3];
              return u(t2 || e3);
            }, i, i.exports, s, a, o, h);
          }
          return o[r].exports;
        }
        for (var l3 = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
        return u;
      })({ 1: [function(e, t, r) {
        "use strict";
        var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e2) {
          for (var t2, r2, n, i, s, a, o, h = [], u = 0, l3 = e2.length, f2 = l3, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f2 = l3 - u, n = c2 ? (t2 = e2[u++], r2 = u < l3 ? e2[u++] : 0, u < l3 ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l3 ? e2.charCodeAt(u++) : 0, u < l3 ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f2 ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f2 ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
          return h.join("");
        }, r.decode = function(e2) {
          var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
          if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
          var l3, f2 = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e2.charAt(e2.length - 1) === p.charAt(64) && f2--, e2.charAt(e2.length - 2) === p.charAt(64) && f2--, f2 % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l3 = c.uint8array ? new Uint8Array(0 | f2) : new Array(0 | f2); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l3[h++] = t2, 64 !== s && (l3[h++] = r2), 64 !== a && (l3[h++] = n);
          return l3;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
        "use strict";
        var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
        function o(e2, t2, r2, n2, i2) {
          this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
        }
        o.prototype = { getContentWorker: function() {
          var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
          return e2.on("end", function() {
            if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e2;
        }, getCompressedWorker: function() {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o.createWorkerFrom = function(e2, t2, r2) {
          return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
        }, t.exports = o;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
        "use strict";
        var n = e("./stream/GenericWorker");
        r.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, r.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
        "use strict";
        var n = e("./utils");
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2) {
          return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, t, r) {
        "use strict";
        r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
      }, {}], 6: [function(e, t, r) {
        "use strict";
        var n = null;
        n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
        function h(e2, t2) {
          a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
        }
        r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
          this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
        }, h.prototype.flush = function() {
          a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this._pako = null;
        }, h.prototype._createPako = function() {
          this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t2 = this;
          this._pako.onData = function(e2) {
            t2.push({ data: e2, meta: t2.meta });
          };
        }, r.compressWorker = function(e2) {
          return new h("Deflate", e2);
        }, r.uncompressWorker = function() {
          return new h("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
        "use strict";
        function A2(e2, t2) {
          var r2, n2 = "";
          for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
          return n2;
        }
        function n(e2, t2, r2, n2, i2, s2) {
          var a, o, h = e2.file, u = e2.compression, l3 = s2 !== O2.utf8encode, f2 = I2.transformTo("string", s2(h.name)), c = I2.transformTo("string", O2.utf8encode(h.name)), d = h.comment, p = I2.transformTo("string", s2(d)), m2 = I2.transformTo("string", O2.utf8encode(d)), _2 = c.length !== h.name.length, g = m2.length !== d.length, b2 = "", v2 = "", y2 = "", w = h.dir, k2 = h.date, x2 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t2 && !r2 || (x2.crc32 = e2.crc32, x2.compressedSize = e2.compressedSize, x2.uncompressedSize = e2.uncompressedSize);
          var S2 = 0;
          t2 && (S2 |= 8), l3 || !_2 && !g || (S2 |= 2048);
          var z2 = 0, C2 = 0;
          w && (z2 |= 16), "UNIX" === i2 ? (C2 = 798, z2 |= (function(e3, t3) {
            var r3 = e3;
            return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
          })(h.unixPermissions, w)) : (C2 = 20, z2 |= (function(e3) {
            return 63 & (e3 || 0);
          })(h.dosPermissions)), a = k2.getUTCHours(), a <<= 6, a |= k2.getUTCMinutes(), a <<= 5, a |= k2.getUTCSeconds() / 2, o = k2.getUTCFullYear() - 1980, o <<= 4, o |= k2.getUTCMonth() + 1, o <<= 5, o |= k2.getUTCDate(), _2 && (v2 = A2(1, 1) + A2(B2(f2), 4) + c, b2 += "up" + A2(v2.length, 2) + v2), g && (y2 = A2(1, 1) + A2(B2(p), 4) + m2, b2 += "uc" + A2(y2.length, 2) + y2);
          var E2 = "";
          return E2 += "\n\0", E2 += A2(S2, 2), E2 += u.magic, E2 += A2(a, 2), E2 += A2(o, 2), E2 += A2(x2.crc32, 4), E2 += A2(x2.compressedSize, 4), E2 += A2(x2.uncompressedSize, 4), E2 += A2(f2.length, 2), E2 += A2(b2.length, 2), { fileRecord: R2.LOCAL_FILE_HEADER + E2 + f2 + b2, dirRecord: R2.CENTRAL_FILE_HEADER + A2(C2, 2) + E2 + A2(p.length, 2) + "\0\0\0\0" + A2(z2, 4) + A2(n2, 4) + f2 + b2 + p };
        }
        var I2 = e("../utils"), i = e("../stream/GenericWorker"), O2 = e("../utf8"), B2 = e("../crc32"), R2 = e("../signature");
        function s(e2, t2, r2, n2) {
          i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I2.inherits(s, i), s.prototype.push = function(e2) {
          var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
        }, s.prototype.openedSource = function(e2) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
          var t2 = this.streamFiles && !e2.file.dir;
          if (t2) {
            var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r2.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s.prototype.closedSource = function(e2) {
          this.accumulate = false;
          var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
            return R2.DATA_DESCRIPTOR + A2(e3.crc32, 4) + A2(e3.compressedSize, 4) + A2(e3.uncompressedSize, 4);
          })(e2), meta: { percent: 100 } });
          else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s.prototype.flush = function() {
          for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
          var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
            var s2 = I2.transformTo("string", i2(n3));
            return R2.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A2(e3, 2) + A2(e3, 2) + A2(t3, 4) + A2(r3, 4) + A2(s2.length, 2) + s2;
          })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
          this.push({ data: n2, meta: { percent: 100 } });
        }, s.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s.prototype.registerPrevious = function(e2) {
          this._sources.push(e2);
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s.prototype.error = function(e2) {
          var t2 = this._sources;
          if (!i.prototype.error.call(this, e2)) return false;
          for (var r2 = 0; r2 < t2.length; r2++) try {
            t2[r2].error(e2);
          } catch (e3) {
          }
          return true;
        }, s.prototype.lock = function() {
          i.prototype.lock.call(this);
          for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
        }, t.exports = s;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
        "use strict";
        var u = e("../compressions"), n = e("./ZipFileWorker");
        r.generateWorker = function(e2, a, t2) {
          var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
          try {
            e2.forEach(function(e3, t3) {
              h++;
              var r2 = (function(e4, t4) {
                var r3 = e4 || t4, n3 = u[r3];
                if (!n3) throw new Error(r3 + " is not a valid compression method !");
                return n3;
              })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
              t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
            }), o.entriesCount = h;
          } catch (e3) {
            o.error(e3);
          }
          return o;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
        "use strict";
        function n() {
          if (!(this instanceof n)) return new n();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e2 = new n();
            for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
            return e2;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
          return new n().loadAsync(e2, t2);
        }, n.external = e("./external"), t.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
        "use strict";
        var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l3 = e("./nodejsUtils");
        function f2(n2) {
          return new i.Promise(function(e2, t2) {
            var r2 = n2.decompressed.getContentWorker().pipe(new a());
            r2.on("error", function(e3) {
              t2(e3);
            }).on("end", function() {
              r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
            }).resume();
          });
        }
        t.exports = function(e2, o) {
          var h = this;
          return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l3.isNode && l3.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
            var t2 = new s(o);
            return t2.load(e3), t2;
          }).then(function(e3) {
            var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
            if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f2(r2[n2]));
            return i.Promise.all(t2);
          }).then(function(e3) {
            for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
              h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
            }
            return t2.zipComment.length && (h.comment = t2.zipComment), h;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../stream/GenericWorker");
        function s(e2, t2) {
          i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
        }
        n.inherits(s, i), s.prototype._bindStream = function(e2) {
          var t2 = this;
          (this._stream = e2).pause(), e2.on("data", function(e3) {
            t2.push({ data: e3, meta: { percent: 0 } });
          }).on("error", function(e3) {
            t2.isPaused ? this.generatedError = e3 : t2.error(e3);
          }).on("end", function() {
            t2.isPaused ? t2._upstreamEnded = true : t2.end();
          });
        }, s.prototype.pause = function() {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
        "use strict";
        var i = e("readable-stream").Readable;
        function n(e2, t2, r2) {
          i.call(this, t2), this._helper = e2;
          var n2 = this;
          e2.on("data", function(e3, t3) {
            n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
          }).on("error", function(e3) {
            n2.emit("error", e3);
          }).on("end", function() {
            n2.push(null);
          });
        }
        e("../utils").inherits(n, i), n.prototype._read = function() {
          this._helper.resume();
        }, t.exports = n;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
        "use strict";
        t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
          if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
          return new Buffer(e2, t2);
        }, allocBuffer: function(e2) {
          if (Buffer.alloc) return Buffer.alloc(e2);
          var t2 = new Buffer(e2);
          return t2.fill(0), t2;
        }, isBuffer: function(e2) {
          return Buffer.isBuffer(e2);
        }, isStream: function(e2) {
          return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
        } };
      }, {}], 15: [function(e, t, r) {
        "use strict";
        function s(e2, t2, r2) {
          var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f2);
          s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _2(e2)) && b2.call(this, n2, true);
          var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
          r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
          var o2 = null;
          o2 = t2 instanceof c || t2 instanceof l3 ? t2 : p.isNode && p.isStream(t2) ? new m2(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
          var h2 = new d(e2, o2, s2);
          this.files[e2] = h2;
        }
        var i = e("./utf8"), u = e("./utils"), l3 = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f2 = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m2 = e("./nodejs/NodejsStreamInputAdapter"), _2 = function(e2) {
          "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
          var t2 = e2.lastIndexOf("/");
          return 0 < t2 ? e2.substring(0, t2) : "";
        }, g = function(e2) {
          return "/" !== e2.slice(-1) && (e2 += "/"), e2;
        }, b2 = function(e2, t2) {
          return t2 = void 0 !== t2 ? t2 : f2.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
        };
        function h(e2) {
          return "[object RegExp]" === Object.prototype.toString.call(e2);
        }
        var n = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e2) {
          var t2, r2, n2;
          for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
        }, filter: function(r2) {
          var n2 = [];
          return this.forEach(function(e2, t2) {
            r2(e2, t2) && n2.push(t2);
          }), n2;
        }, file: function(e2, t2, r2) {
          if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
          if (h(e2)) {
            var n2 = e2;
            return this.filter(function(e3, t3) {
              return !t3.dir && n2.test(e3);
            });
          }
          var i2 = this.files[this.root + e2];
          return i2 && !i2.dir ? i2 : null;
        }, folder: function(r2) {
          if (!r2) return this;
          if (h(r2)) return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
          var e2 = this.root + r2, t2 = b2.call(this, e2), n2 = this.clone();
          return n2.root = t2.name, n2;
        }, remove: function(r2) {
          r2 = this.root + r2;
          var e2 = this.files[r2];
          if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
          else for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e2) {
          var t2, r2 = {};
          try {
            if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
            u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
            var n2 = r2.comment || this.comment || "";
            t2 = o.generateWorker(this, r2, n2);
          } catch (e3) {
            (t2 = new l3("error")).error(e3);
          }
          return new a(t2, r2.type || "string", r2.mimeType);
        }, generateAsync: function(e2, t2) {
          return this.generateInternalStream(e2).accumulate(t2);
        }, generateNodeStream: function(e2, t2) {
          return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
        } };
        t.exports = n;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
        "use strict";
        t.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
          for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data[this.zero + e2];
        }, i.prototype.lastIndexOfSignature = function(e2) {
          for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
          return -1;
        }, i.prototype.readAndCheckSignature = function(e2) {
          var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
          return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
        }, i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return [];
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
        "use strict";
        var n = e("../utils");
        function i(e2) {
          this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
        }
        i.prototype = { checkOffset: function(e2) {
          this.checkIndex(this.index + e2);
        }, checkIndex: function(e2) {
          if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
        }, setIndex: function(e2) {
          this.checkIndex(e2), this.index = e2;
        }, skip: function(e2) {
          this.setIndex(this.index + e2);
        }, byteAt: function() {
        }, readInt: function(e2) {
          var t2, r2 = 0;
          for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
          return this.index += e2, r2;
        }, readString: function(e2) {
          return n.transformTo("string", this.readData(e2));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e2 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
        } }, t.exports = i;
      }, { "../utils": 32 }], 19: [function(e, t, r) {
        "use strict";
        var n = e("./Uint8ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data.charCodeAt(this.zero + e2);
        }, i.prototype.lastIndexOfSignature = function(e2) {
          return this.data.lastIndexOf(e2) - this.zero;
        }, i.prototype.readAndCheckSignature = function(e2) {
          return e2 === this.readData(4);
        }, i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
        "use strict";
        var n = e("./ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
          var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
        t.exports = function(e2) {
          var t2 = n.getTypeOf(e2);
          return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
        "use strict";
        r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../utils");
        function s(e2) {
          n.call(this, "ConvertWorker to " + e2), this.destType = e2;
        }
        i.inherits(s, n), s.prototype.processChunk = function(e2) {
          this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../crc32");
        function s() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
          this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
        }, t.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
        }
        n.inherits(s, i), s.prototype.processChunk = function(e2) {
          if (e2) {
            var t2 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t2 + e2.data.length;
          }
          i.prototype.processChunk.call(this, e2);
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataWorker");
          var t2 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
            t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
          }, function(e3) {
            t2.error(e3);
          });
        }
        n.inherits(s, i), s.prototype.cleanUp = function() {
          i.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e2 = null, t2 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e2 = this.data.substring(this.index, t2);
              break;
            case "uint8array":
              e2 = this.data.subarray(this.index, t2);
              break;
            case "array":
            case "nodebuffer":
              e2 = this.data.slice(this.index, t2);
          }
          return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
        "use strict";
        function n(e2) {
          this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(e2) {
          this.emit("data", e2);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e2) {
            this.emit("error", e2);
          }
          return true;
        }, error: function(e2) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
        }, on: function(e2, t2) {
          return this._listeners[e2].push(t2), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e2, t2) {
          if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
        }, pipe: function(e2) {
          return e2.registerPrevious(this);
        }, registerPrevious: function(e2) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e2 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
        }, flush: function() {
        }, processChunk: function(e2) {
          this.push(e2);
        }, withStreamInfo: function(e2, t2) {
          return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e2 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e2 : e2;
        } }, t.exports = n;
      }, {}], 29: [function(e, t, r) {
        "use strict";
        var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
        if (n.nodestream) try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
        function l3(e2, o2) {
          return new a.Promise(function(t2, r2) {
            var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
            e2.on("data", function(e3, t3) {
              n2.push(e3), o2 && o2(t3);
            }).on("error", function(e3) {
              n2 = [], r2(e3);
            }).on("end", function() {
              try {
                var e3 = (function(e4, t3, r3) {
                  switch (e4) {
                    case "blob":
                      return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                    case "base64":
                      return u.encode(t3);
                    default:
                      return h.transformTo(e4, t3);
                  }
                })(s2, (function(e4, t3) {
                  var r3, n3 = 0, i3 = null, s3 = 0;
                  for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                  switch (e4) {
                    case "string":
                      return t3.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t3);
                    case "uint8array":
                      for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                      return i3;
                    case "nodebuffer":
                      return Buffer.concat(t3);
                    default:
                      throw new Error("concat : unsupported type '" + e4 + "'");
                  }
                })(i2, n2), a2);
                t2(e3);
              } catch (e4) {
                r2(e4);
              }
              n2 = [];
            }).resume();
          });
        }
        function f2(e2, t2, r2) {
          var n2 = t2;
          switch (t2) {
            case "blob":
            case "arraybuffer":
              n2 = "uint8array";
              break;
            case "base64":
              n2 = "string";
          }
          try {
            this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
          } catch (e3) {
            this._worker = new s("error"), this._worker.error(e3);
          }
        }
        f2.prototype = { accumulate: function(e2) {
          return l3(this, e2);
        }, on: function(e2, t2) {
          var r2 = this;
          return "data" === e2 ? this._worker.on(e2, function(e3) {
            t2.call(r2, e3.data, e3.meta);
          }) : this._worker.on(e2, function() {
            h.delay(t2, arguments, r2);
          }), this;
        }, resume: function() {
          return h.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e2) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
        } }, t.exports = f2;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
        "use strict";
        if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
        else {
          var n = new ArrayBuffer(0);
          try {
            r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
          } catch (e2) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
            } catch (e3) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e2) {
          r.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e, t, s) {
        "use strict";
        for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
        u[254] = u[254] = 1;
        function a() {
          n.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l3() {
          n.call(this, "utf-8 encode");
        }
        s.utf8encode = function(e2) {
          return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
            for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          })(e2);
        }, s.utf8decode = function(e2) {
          return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
            for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
            else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
            }
            return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
          })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
        }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
          var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
          if (this.leftOver && this.leftOver.length) {
            if (h.uint8array) {
              var r2 = t2;
              (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
            } else t2 = this.leftOver.concat(t2);
            this.leftOver = null;
          }
          var n2 = (function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
          })(t2), i2 = t2;
          n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
        }, a.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s.Utf8DecodeWorker = a, o.inherits(l3, n), l3.prototype.processChunk = function(e2) {
          this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
        }, s.Utf8EncodeWorker = l3;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
        "use strict";
        var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
        function n(e2) {
          return e2;
        }
        function l3(e2, t2) {
          for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
          return t2;
        }
        e("setimmediate"), a.newBlob = function(t2, r2) {
          a.checkSupport("blob");
          try {
            return new Blob([t2], { type: r2 });
          } catch (e2) {
            try {
              var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n2.append(t2), n2.getBlob(r2);
            } catch (e3) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i = { stringifyByChunk: function(e2, t2, r2) {
          var n2 = [], i2 = 0, s2 = e2.length;
          if (s2 <= r2) return String.fromCharCode.apply(null, e2);
          for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
          return n2.join("");
        }, stringifyByChar: function(e2) {
          for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
          return t2;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e2) {
            return false;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
          } catch (e2) {
            return false;
          }
        })() } };
        function s(e2) {
          var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
          if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
            return i.stringifyByChunk(e2, r2, t2);
          } catch (e3) {
            t2 = Math.floor(t2 / 2);
          }
          return i.stringifyByChar(e2);
        }
        function f2(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
          return t2;
        }
        a.applyFromCharCode = s;
        var c = {};
        c.string = { string: n, array: function(e2) {
          return l3(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.string.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return l3(e2, new Uint8Array(e2.length));
        }, nodebuffer: function(e2) {
          return l3(e2, r.allocBuffer(e2.length));
        } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
          return new Uint8Array(e2).buffer;
        }, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.arraybuffer = { string: function(e2) {
          return s(new Uint8Array(e2));
        }, array: function(e2) {
          return f2(new Uint8Array(e2), new Array(e2.byteLength));
        }, arraybuffer: n, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(new Uint8Array(e2));
        } }, c.uint8array = { string: s, array: function(e2) {
          return f2(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return e2.buffer;
        }, uint8array: n, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.nodebuffer = { string: s, array: function(e2) {
          return f2(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.nodebuffer.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return f2(e2, new Uint8Array(e2.length));
        }, nodebuffer: n }, a.transformTo = function(e2, t2) {
          if (t2 = t2 || "", !e2) return t2;
          a.checkSupport(e2);
          var r2 = a.getTypeOf(t2);
          return c[r2][e2](t2);
        }, a.resolve = function(e2) {
          for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
          }
          return r2.join("/");
        }, a.getTypeOf = function(e2) {
          return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(e2) {
          if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
          var t2, r2, n2 = "";
          for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
          return n2;
        }, a.delay = function(e2, t2, r2) {
          setImmediate(function() {
            e2.apply(r2 || null, t2 || []);
          });
        }, a.inherits = function(e2, t2) {
          function r2() {
          }
          r2.prototype = t2.prototype, e2.prototype = new r2();
        }, a.extend = function() {
          var e2, t2, r2 = {};
          for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
          return r2;
        }, a.prepareContent = function(r2, e2, n2, i2, s2) {
          return u.Promise.resolve(e2).then(function(n3) {
            return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
              var e3 = new FileReader();
              e3.onload = function(e4) {
                t2(e4.target.result);
              }, e3.onerror = function(e4) {
                r3(e4.target.error);
              }, e3.readAsArrayBuffer(n3);
            }) : n3;
          }).then(function(e3) {
            var t2 = a.getTypeOf(e3);
            return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
              return l3(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
            })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
        function h(e2) {
          this.files = [], this.loadOptions = e2;
        }
        h.prototype = { checkSignature: function(e2) {
          if (!this.reader.readAndCheckSignature(e2)) {
            this.reader.index -= 4;
            var t2 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
          }
        }, isSignature: function(e2, t2) {
          var r2 = this.reader.index;
          this.reader.setIndex(e2);
          var n2 = this.reader.readString(4) === t2;
          return this.reader.setIndex(r2), n2;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
          this.zipComment = this.loadOptions.decodeFileName(r2);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e2, t2;
          for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
        }, readCentralDir: function() {
          var e2;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e2);
          var t2 = e2;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r2 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
          var n2 = t2 - r2;
          if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
          else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
        }, prepareReader: function(e2) {
          this.reader = n(e2);
        }, load: function(e2) {
          this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t.exports = h;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
        function l3(e2, t2) {
          this.options = e2, this.loadOptions = t2;
        }
        l3.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e2) {
          var t2, r2;
          if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t2 = (function(e3) {
            for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
            return null;
          })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
        }, readCentralPart: function(e2) {
          this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
          var t2 = e2.readInt(2);
          if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e2 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e2 = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
          }
        }, readExtraFields: function(e2) {
          var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
          e2.setIndex(i2);
        }, handleUTF8: function() {
          var e2 = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
          else {
            var t2 = this.findExtraFieldUnicodePath();
            if (null !== t2) this.fileNameStr = t2;
            else {
              var r2 = s.transformTo(e2, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r2);
            }
            var n2 = this.findExtraFieldUnicodeComment();
            if (null !== n2) this.fileCommentStr = n2;
            else {
              var i2 = s.transformTo(e2, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i2);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e2 = this.extraFields[28789];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e2 = this.extraFields[25461];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        } }, t.exports = l3;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
        "use strict";
        function n(e2, t2, r2) {
          this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
        n.prototype = { internalStream: function(e2) {
          var t2 = null, r2 = "string";
          try {
            if (!e2) throw new Error("No output type specified.");
            var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
            "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
            var i2 = !this._dataBinary;
            i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
          } catch (e3) {
            (t2 = new h("error")).error(e3);
          }
          return new s(t2, r2, "");
        }, async: function(e2, t2) {
          return this.internalStream(e2).accumulate(t2);
        }, nodeStream: function(e2, t2) {
          return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
        }, _compressWorker: function(e2, t2) {
          if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
          var r2 = this._decompressWorker();
          return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
        }, _decompressWorker: function() {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        } };
        for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l3 = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f2 = 0; f2 < u.length; f2++) n.prototype[u[f2]] = l3;
        t.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l3, t) {
        (function(t2) {
          "use strict";
          var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
          if (e2) {
            var i = 0, s = new e2(u), a = t2.document.createTextNode("");
            s.observe(a, { characterData: true }), r = function() {
              a.data = i = ++i % 2;
            };
          } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
          else {
            var o = new t2.MessageChannel();
            o.port1.onmessage = u, r = function() {
              o.port2.postMessage(0);
            };
          }
          var h = [];
          function u() {
            var e3, t3;
            n = true;
            for (var r2 = h.length; r2; ) {
              for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
              r2 = h.length;
            }
            n = false;
          }
          l3.exports = function(e3) {
            1 !== h.push(e3) || n || r();
          };
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e, t, r) {
        "use strict";
        var i = e("immediate");
        function u() {
        }
        var l3 = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
        function o(e2) {
          if ("function" != typeof e2) throw new TypeError("resolver must be a function");
          this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
        }
        function h(e2, t2, r2) {
          this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
        }
        function f2(t2, r2, n2) {
          i(function() {
            var e2;
            try {
              e2 = r2(n2);
            } catch (e3) {
              return l3.reject(t2, e3);
            }
            e2 === t2 ? l3.reject(t2, new TypeError("Cannot resolve promise with itself")) : l3.resolve(t2, e2);
          });
        }
        function c(e2) {
          var t2 = e2 && e2.then;
          if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
            t2.apply(e2, arguments);
          };
        }
        function d(t2, e2) {
          var r2 = false;
          function n2(e3) {
            r2 || (r2 = true, l3.reject(t2, e3));
          }
          function i2(e3) {
            r2 || (r2 = true, l3.resolve(t2, e3));
          }
          var s2 = p(function() {
            e2(i2, n2);
          });
          "error" === s2.status && n2(s2.value);
        }
        function p(e2, t2) {
          var r2 = {};
          try {
            r2.value = e2(t2), r2.status = "success";
          } catch (e3) {
            r2.status = "error", r2.value = e3;
          }
          return r2;
        }
        (t.exports = o).prototype.finally = function(t2) {
          if ("function" != typeof t2) return this;
          var r2 = this.constructor;
          return this.then(function(e2) {
            return r2.resolve(t2()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t2()).then(function() {
              throw e2;
            });
          });
        }, o.prototype.catch = function(e2) {
          return this.then(null, e2);
        }, o.prototype.then = function(e2, t2) {
          if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
          var r2 = new this.constructor(u);
          this.state !== n ? f2(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
          return r2;
        }, h.prototype.callFulfilled = function(e2) {
          l3.resolve(this.promise, e2);
        }, h.prototype.otherCallFulfilled = function(e2) {
          f2(this.promise, this.onFulfilled, e2);
        }, h.prototype.callRejected = function(e2) {
          l3.reject(this.promise, e2);
        }, h.prototype.otherCallRejected = function(e2) {
          f2(this.promise, this.onRejected, e2);
        }, l3.resolve = function(e2, t2) {
          var r2 = p(c, t2);
          if ("error" === r2.status) return l3.reject(e2, r2.value);
          var n2 = r2.value;
          if (n2) d(e2, n2);
          else {
            e2.state = a, e2.outcome = t2;
            for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
          }
          return e2;
        }, l3.reject = function(e2, t2) {
          e2.state = s, e2.outcome = t2;
          for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
          return e2;
        }, o.resolve = function(e2) {
          if (e2 instanceof this) return e2;
          return l3.resolve(new this(u), e2);
        }, o.reject = function(e2) {
          var t2 = new this(u);
          return l3.reject(t2, e2);
        }, o.all = function(e2) {
          var r2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var n2 = e2.length, i2 = false;
          if (!n2) return this.resolve([]);
          var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
          for (; ++t2 < n2; ) h2(e2[t2], t2);
          return o2;
          function h2(e3, t3) {
            r2.resolve(e3).then(function(e4) {
              s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l3.resolve(o2, s2));
            }, function(e4) {
              i2 || (i2 = true, l3.reject(o2, e4));
            });
          }
        }, o.race = function(e2) {
          var t2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var r2 = e2.length, n2 = false;
          if (!r2) return this.resolve([]);
          var i2 = -1, s2 = new this(u);
          for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n2 || (n2 = true, l3.resolve(s2, e3));
          }, function(e3) {
            n2 || (n2 = true, l3.reject(s2, e3));
          });
          var a2;
          return s2;
        };
      }, { immediate: 36 }], 38: [function(e, t, r) {
        "use strict";
        var n = {};
        (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
        "use strict";
        var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l3 = 0, f2 = -1, c = 0, d = 8;
        function p(e2) {
          if (!(this instanceof p)) return new p(e2);
          this.options = o.assign({ level: f2, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
          var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
          if (r2 !== l3) throw new Error(i[r2]);
          if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
            var n2;
            if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l3) throw new Error(i[r2]);
            this._dict_set = true;
          }
        }
        function n(e2, t2) {
          var r2 = new p(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
          return r2.result;
        }
        p.prototype.push = function(e2, t2) {
          var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
          do {
            if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l3) return this.onEnd(r2), !(this.ended = true);
            0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
          } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
          return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l3) : 2 !== n2 || (this.onEnd(l3), !(i2.avail_out = 0));
        }, p.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, p.prototype.onEnd = function(e2) {
          e2 === l3 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, n(e2, t2);
        }, r.gzip = function(e2, t2) {
          return (t2 = t2 || {}).gzip = true, n(e2, t2);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
        "use strict";
        var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m2 = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _2 = Object.prototype.toString;
        function a(e2) {
          if (!(this instanceof a)) return new a(e2);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
          var r2 = c.inflateInit2(this.strm, t2.windowBits);
          if (r2 !== m2.Z_OK) throw new Error(n[r2]);
          this.header = new s(), c.inflateGetHeader(this.strm, this.header);
        }
        function o(e2, t2) {
          var r2 = new a(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
          return r2.result;
        }
        a.prototype.push = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l3 = this.options.dictionary, f2 = false;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? m2.Z_FINISH : m2.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _2.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
          do {
            if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m2.Z_NO_FLUSH)) === m2.Z_NEED_DICT && l3 && (o2 = "string" == typeof l3 ? p.string2buf(l3) : "[object ArrayBuffer]" === _2.call(l3) ? new Uint8Array(l3) : l3, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m2.Z_BUF_ERROR && true === f2 && (r2 = m2.Z_OK, f2 = false), r2 !== m2.Z_STREAM_END && r2 !== m2.Z_OK) return this.onEnd(r2), !(this.ended = true);
            h.next_out && (0 !== h.avail_out && r2 !== m2.Z_STREAM_END && (0 !== h.avail_in || n2 !== m2.Z_FINISH && n2 !== m2.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f2 = true);
          } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m2.Z_STREAM_END);
          return r2 === m2.Z_STREAM_END && (n2 = m2.Z_FINISH), n2 === m2.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m2.Z_OK) : n2 !== m2.Z_SYNC_FLUSH || (this.onEnd(m2.Z_OK), !(h.avail_out = 0));
        }, a.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, a.prototype.onEnd = function(e2) {
          e2 === m2.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, o(e2, t2);
        }, r.ungzip = o;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r.assign = function(e2) {
          for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
            var r2 = t2.shift();
            if (r2) {
              if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
              for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
            }
          }
          return e2;
        }, r.shrinkBuf = function(e2, t2) {
          return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
        };
        var i = { arraySet: function(e2, t2, r2, n2, i2) {
          if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
          else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          var t2, r2, n2, i2, s2, a;
          for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
          for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
          return a;
        } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
          for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          return [].concat.apply([], e2);
        } };
        r.setTyped = function(e2) {
          e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
        }, r.setTyped(n);
      }, {}], 42: [function(e, t, r) {
        "use strict";
        var h = e("./common"), i = true, s = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e2) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e2) {
          s = false;
        }
        for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
        function l3(e2, t2) {
          if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
          for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
          return r2;
        }
        u[254] = u[254] = 1, r.string2buf = function(e2) {
          var t2, r2, n2, i2, s2, a = e2.length, o = 0;
          for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }, r.buf2binstring = function(e2) {
          return l3(e2, e2.length);
        }, r.binstring2buf = function(e2) {
          for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
          return t2;
        }, r.buf2string = function(e2, t2) {
          var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
          for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
          else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
          }
          return l3(o, n2);
        }, r.utf8border = function(e2, t2) {
          var r2;
          for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
          return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
        };
      }, { "./common": 41 }], 43: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2, r2, n) {
          for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
            for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
            i %= 65521, s %= 65521;
          }
          return i | s << 16 | 0;
        };
      }, {}], 44: [function(e, t, r) {
        "use strict";
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, t, r) {
        "use strict";
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2, r2, n) {
          var i = o, s = n + r2;
          e2 ^= -1;
          for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
          return -1 ^ e2;
        };
      }, {}], 46: [function(e, t, r) {
        "use strict";
        var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l3 = 0, f2 = 4, m2 = 0, _2 = -2, g = -1, b2 = 4, i = 2, v2 = 8, y2 = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k2 = 15, x2 = 3, S2 = 258, z2 = S2 + x2 + 1, C2 = 42, E2 = 113, A2 = 1, I2 = 2, O2 = 3, B2 = 4;
        function R2(e2, t2) {
          return e2.msg = n[t2], t2;
        }
        function T(e2) {
          return (e2 << 1) - (4 < e2 ? 9 : 0);
        }
        function D(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        function F2(e2) {
          var t2 = e2.state, r2 = t2.pending;
          r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
        }
        function N(e2, t2) {
          u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F2(e2.strm);
        }
        function U2(e2, t2) {
          e2.pending_buf[e2.pending++] = t2;
        }
        function P2(e2, t2) {
          e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
        }
        function L2(e2, t2) {
          var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z2 ? e2.strstart - (e2.w_size - z2) : 0, u2 = e2.window, l4 = e2.w_mask, f3 = e2.prev, c2 = e2.strstart + S2, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
          e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
          do {
            if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
              s2 += 2, r2++;
              do {
              } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
              if (n2 = S2 - (c2 - s2), s2 = c2 - S2, a2 < n2) {
                if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
              }
            }
          } while ((t2 = f3[t2 & l4]) > h2 && 0 != --i2);
          return a2 <= e2.lookahead ? a2 : e2.lookahead;
        }
        function j2(e2) {
          var t2, r2, n2, i2, s2, a2, o2, h2, u2, l4, f3 = e2.w_size;
          do {
            if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f3 + (f3 - z2)) {
              for (c.arraySet(e2.window, e2.window, f3, f3, 0), e2.match_start -= f3, e2.strstart -= f3, e2.block_start -= f3, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f3 <= n2 ? n2 - f3 : 0, --r2; ) ;
              for (t2 = r2 = f3; n2 = e2.prev[--t2], e2.prev[t2] = f3 <= n2 ? n2 - f3 : 0, --r2; ) ;
              i2 += f3;
            }
            if (0 === e2.strm.avail_in) break;
            if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l4 = void 0, l4 = a2.avail_in, u2 < l4 && (l4 = u2), r2 = 0 === l4 ? 0 : (a2.avail_in -= l4, c.arraySet(o2, a2.input, a2.next_in, l4, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l4, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l4, h2)), a2.next_in += l4, a2.total_in += l4, l4), e2.lookahead += r2, e2.lookahead + e2.insert >= x2) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x2 - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x2)); ) ;
          } while (e2.lookahead < z2 && 0 !== e2.strm.avail_in);
        }
        function Z2(e2, t2) {
          for (var r2, n2; ; ) {
            if (e2.lookahead < z2) {
              if (j2(e2), e2.lookahead < z2 && t2 === l3) return A2;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x2 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z2 && (e2.match_length = L2(e2, r2)), e2.match_length >= x2) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x2), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x2) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x2 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
              e2.strstart++;
            } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
            else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
            if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A2;
          }
          return e2.insert = e2.strstart < x2 - 1 ? e2.strstart : x2 - 1, t2 === f2 ? (N(e2, true), 0 === e2.strm.avail_out ? O2 : B2) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A2 : I2;
        }
        function W2(e2, t2) {
          for (var r2, n2, i2; ; ) {
            if (e2.lookahead < z2) {
              if (j2(e2), e2.lookahead < z2 && t2 === l3) return A2;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x2 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x2 - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z2 && (e2.match_length = L2(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x2 && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x2 - 1)), e2.prev_length >= x2 && e2.match_length <= e2.prev_length) {
              for (i2 = e2.strstart + e2.lookahead - x2, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x2), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x2 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
              if (e2.match_available = 0, e2.match_length = x2 - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A2;
            } else if (e2.match_available) {
              if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A2;
            } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
          }
          return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x2 - 1 ? e2.strstart : x2 - 1, t2 === f2 ? (N(e2, true), 0 === e2.strm.avail_out ? O2 : B2) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A2 : I2;
        }
        function M(e2, t2, r2, n2, i2) {
          this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
        }
        function H2() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k2 + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G2(e2) {
          var t2;
          return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C2 : E2, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l3, u._tr_init(t2), m2) : R2(e2, _2);
        }
        function K2(e2) {
          var t2 = G2(e2);
          return t2 === m2 && (function(e3) {
            e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x2 - 1, e3.match_available = 0, e3.ins_h = 0;
          })(e2.state), t2;
        }
        function Y2(e2, t2, r2, n2, i2, s2) {
          if (!e2) return _2;
          var a2 = 1;
          if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y2 < i2 || r2 !== v2 || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b2 < s2) return R2(e2, _2);
          8 === n2 && (n2 = 9);
          var o2 = new H2();
          return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x2 - 1) / x2), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K2(e2);
        }
        h = [new M(0, 0, 0, 0, function(e2, t2) {
          var r2 = 65535;
          for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
            if (e2.lookahead <= 1) {
              if (j2(e2), 0 === e2.lookahead && t2 === l3) return A2;
              if (0 === e2.lookahead) break;
            }
            e2.strstart += e2.lookahead, e2.lookahead = 0;
            var n2 = e2.block_start + r2;
            if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A2;
            if (e2.strstart - e2.block_start >= e2.w_size - z2 && (N(e2, false), 0 === e2.strm.avail_out)) return A2;
          }
          return e2.insert = 0, t2 === f2 ? (N(e2, true), 0 === e2.strm.avail_out ? O2 : B2) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A2);
        }), new M(4, 4, 8, 4, Z2), new M(4, 5, 16, 8, Z2), new M(4, 6, 32, 32, Z2), new M(4, 4, 16, 16, W2), new M(8, 16, 32, 32, W2), new M(8, 16, 128, 128, W2), new M(8, 32, 128, 256, W2), new M(32, 128, 258, 1024, W2), new M(32, 258, 258, 4096, W2)], r.deflateInit = function(e2, t2) {
          return Y2(e2, t2, v2, 15, 8, 0);
        }, r.deflateInit2 = Y2, r.deflateReset = K2, r.deflateResetKeep = G2, r.deflateSetHeader = function(e2, t2) {
          return e2 && e2.state ? 2 !== e2.state.wrap ? _2 : (e2.state.gzhead = t2, m2) : _2;
        }, r.deflate = function(e2, t2) {
          var r2, n2, i2, s2;
          if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R2(e2, _2) : _2;
          if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f2) return R2(e2, 0 === e2.avail_out ? -5 : _2);
          if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C2) if (2 === n2.wrap) e2.adler = 0, U2(n2, 31), U2(n2, 139), U2(n2, 8), n2.gzhead ? (U2(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U2(n2, 255 & n2.gzhead.time), U2(n2, n2.gzhead.time >> 8 & 255), U2(n2, n2.gzhead.time >> 16 & 255), U2(n2, n2.gzhead.time >> 24 & 255), U2(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U2(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U2(n2, 255 & n2.gzhead.extra.length), U2(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U2(n2, 0), U2(n2, 0), U2(n2, 0), U2(n2, 0), U2(n2, 0), U2(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U2(n2, 3), n2.status = E2);
          else {
            var a2 = v2 + (n2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E2, P2(n2, a2), 0 !== n2.strstart && (P2(n2, e2.adler >>> 16), P2(n2, 65535 & e2.adler)), e2.adler = 1;
          }
          if (69 === n2.status) if (n2.gzhead.extra) {
            for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F2(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U2(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
          } else n2.status = 73;
          if (73 === n2.status) if (n2.gzhead.name) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F2(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U2(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
          } else n2.status = 91;
          if (91 === n2.status) if (n2.gzhead.comment) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F2(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U2(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
          } else n2.status = 103;
          if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F2(e2), n2.pending + 2 <= n2.pending_buf_size && (U2(n2, 255 & e2.adler), U2(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E2)) : n2.status = E2), 0 !== n2.pending) {
            if (F2(e2), 0 === e2.avail_out) return n2.last_flush = -1, m2;
          } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f2) return R2(e2, -5);
          if (666 === n2.status && 0 !== e2.avail_in) return R2(e2, -5);
          if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l3 && 666 !== n2.status) {
            var o2 = 2 === n2.strategy ? (function(e3, t3) {
              for (var r3; ; ) {
                if (0 === e3.lookahead && (j2(e3), 0 === e3.lookahead)) {
                  if (t3 === l3) return A2;
                  break;
                }
                if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A2;
              }
              return e3.insert = 0, t3 === f2 ? (N(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
            })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
              for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                if (e3.lookahead <= S2) {
                  if (j2(e3), e3.lookahead <= S2 && t3 === l3) return A2;
                  if (0 === e3.lookahead) break;
                }
                if (e3.match_length = 0, e3.lookahead >= x2 && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                  s3 = e3.strstart + S2;
                  do {
                  } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                  e3.match_length = S2 - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                }
                if (e3.match_length >= x2 ? (r3 = u._tr_tally(e3, 1, e3.match_length - x2), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A2;
              }
              return e3.insert = 0, t3 === f2 ? (N(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
            })(n2, t2) : h[n2.level].func(n2, t2);
            if (o2 !== O2 && o2 !== B2 || (n2.status = 666), o2 === A2 || o2 === O2) return 0 === e2.avail_out && (n2.last_flush = -1), m2;
            if (o2 === I2 && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F2(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m2;
          }
          return t2 !== f2 ? m2 : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U2(n2, 255 & e2.adler), U2(n2, e2.adler >> 8 & 255), U2(n2, e2.adler >> 16 & 255), U2(n2, e2.adler >> 24 & 255), U2(n2, 255 & e2.total_in), U2(n2, e2.total_in >> 8 & 255), U2(n2, e2.total_in >> 16 & 255), U2(n2, e2.total_in >> 24 & 255)) : (P2(n2, e2.adler >>> 16), P2(n2, 65535 & e2.adler)), F2(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m2 : 1);
        }, r.deflateEnd = function(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state.status) !== C2 && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E2 && 666 !== t2 ? R2(e2, _2) : (e2.state = null, t2 === E2 ? R2(e2, -3) : m2) : _2;
        }, r.deflateSetDictionary = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l4 = t2.length;
          if (!e2 || !e2.state) return _2;
          if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C2 || r2.lookahead) return _2;
          for (1 === s2 && (e2.adler = d(e2.adler, t2, l4, 0)), r2.wrap = 0, l4 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l4 - r2.w_size, r2.w_size, 0), t2 = u2, l4 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l4, e2.next_in = 0, e2.input = t2, j2(r2); r2.lookahead >= x2; ) {
            for (n2 = r2.strstart, i2 = r2.lookahead - (x2 - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x2 - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
            r2.strstart = n2, r2.lookahead = x2 - 1, j2(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x2 - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m2;
        }, r.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2) {
          var r2, n, i, s, a, o, h, u, l3, f2, c, d, p, m2, _2, g, b2, v2, y2, w, k2, x2, S2, z2, C2;
          r2 = e2.state, n = e2.next_in, z2 = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C2 = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l3 = r2.whave, f2 = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m2 = r2.lencode, _2 = r2.distcode, g = (1 << r2.lenbits) - 1, b2 = (1 << r2.distbits) - 1;
          e: do {
            p < 15 && (d += z2[n++] << p, p += 8, d += z2[n++] << p, p += 8), v2 = m2[d & g];
            t: for (; ; ) {
              if (d >>>= y2 = v2 >>> 24, p -= y2, 0 === (y2 = v2 >>> 16 & 255)) C2[s++] = 65535 & v2;
              else {
                if (!(16 & y2)) {
                  if (0 == (64 & y2)) {
                    v2 = m2[(65535 & v2) + (d & (1 << y2) - 1)];
                    continue t;
                  }
                  if (32 & y2) {
                    r2.mode = 12;
                    break e;
                  }
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break e;
                }
                w = 65535 & v2, (y2 &= 15) && (p < y2 && (d += z2[n++] << p, p += 8), w += d & (1 << y2) - 1, d >>>= y2, p -= y2), p < 15 && (d += z2[n++] << p, p += 8, d += z2[n++] << p, p += 8), v2 = _2[d & b2];
                r: for (; ; ) {
                  if (d >>>= y2 = v2 >>> 24, p -= y2, !(16 & (y2 = v2 >>> 16 & 255))) {
                    if (0 == (64 & y2)) {
                      v2 = _2[(65535 & v2) + (d & (1 << y2) - 1)];
                      continue r;
                    }
                    e2.msg = "invalid distance code", r2.mode = 30;
                    break e;
                  }
                  if (k2 = 65535 & v2, p < (y2 &= 15) && (d += z2[n++] << p, (p += 8) < y2 && (d += z2[n++] << p, p += 8)), h < (k2 += d & (1 << y2) - 1)) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (d >>>= y2, p -= y2, (y2 = s - a) < k2) {
                    if (l3 < (y2 = k2 - y2) && r2.sane) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (S2 = c, (x2 = 0) === f2) {
                      if (x2 += u - y2, y2 < w) {
                        for (w -= y2; C2[s++] = c[x2++], --y2; ) ;
                        x2 = s - k2, S2 = C2;
                      }
                    } else if (f2 < y2) {
                      if (x2 += u + f2 - y2, (y2 -= f2) < w) {
                        for (w -= y2; C2[s++] = c[x2++], --y2; ) ;
                        if (x2 = 0, f2 < w) {
                          for (w -= y2 = f2; C2[s++] = c[x2++], --y2; ) ;
                          x2 = s - k2, S2 = C2;
                        }
                      }
                    } else if (x2 += f2 - y2, y2 < w) {
                      for (w -= y2; C2[s++] = c[x2++], --y2; ) ;
                      x2 = s - k2, S2 = C2;
                    }
                    for (; 2 < w; ) C2[s++] = S2[x2++], C2[s++] = S2[x2++], C2[s++] = S2[x2++], w -= 3;
                    w && (C2[s++] = S2[x2++], 1 < w && (C2[s++] = S2[x2++]));
                  } else {
                    for (x2 = s - k2; C2[s++] = C2[x2++], C2[s++] = C2[x2++], C2[s++] = C2[x2++], 2 < (w -= 3); ) ;
                    w && (C2[s++] = C2[x2++], 1 < w && (C2[s++] = C2[x2++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n < i && s < o);
          n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
        };
      }, {}], 49: [function(e, t, r) {
        "use strict";
        var I2 = e("../utils/common"), O2 = e("./adler32"), B2 = e("./crc32"), R2 = e("./inffast"), T = e("./inftrees"), D = 1, F2 = 2, N = 0, U2 = -2, P2 = 1, n = 852, i = 592;
        function L2(e2) {
          return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
        }
        function s() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I2.Buf16(320), this.work = new I2.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P2, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I2.Buf32(n), t2.distcode = t2.distdyn = new I2.Buf32(i), t2.sane = 1, t2.back = -1, N) : U2;
        }
        function o(e2) {
          var t2;
          return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U2;
        }
        function h(e2, t2) {
          var r2, n2;
          return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U2 : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U2;
        }
        function u(e2, t2) {
          var r2, n2;
          return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U2;
        }
        var l3, f2, c = true;
        function j2(e2) {
          if (c) {
            var t2;
            for (l3 = new I2.Buf32(512), f2 = new I2.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
            for (; t2 < 256; ) e2.lens[t2++] = 9;
            for (; t2 < 280; ) e2.lens[t2++] = 7;
            for (; t2 < 288; ) e2.lens[t2++] = 8;
            for (T(D, e2.lens, 0, 288, l3, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
            T(F2, e2.lens, 0, 32, f2, 0, e2.work, { bits: 5 }), c = false;
          }
          e2.lencode = l3, e2.lenbits = 9, e2.distcode = f2, e2.distbits = 5;
        }
        function Z2(e2, t2, r2, n2) {
          var i2, s2 = e2.state;
          return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I2.Buf8(s2.wsize)), n2 >= s2.wsize ? (I2.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I2.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I2.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
        }
        r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
          return u(e2, 15);
        }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l4, f3, c2, d, p, m2, _2, g, b2, v2, y2, w, k2, x2, S2, z2, C2 = 0, E2 = new I2.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U2;
          12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l4 = r2.bits, f3 = o2, c2 = h2, x2 = N;
          e: for (; ; ) switch (r2.mode) {
            case P2:
              if (0 === r2.wrap) {
                r2.mode = 13;
                break;
              }
              for (; l4 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              if (2 & r2.wrap && 35615 === u2) {
                E2[r2.check = 0] = 255 & u2, E2[1] = u2 >>> 8 & 255, r2.check = B2(r2.check, E2, 2, 0), l4 = u2 = 0, r2.mode = 2;
                break;
              }
              if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                e2.msg = "incorrect header check", r2.mode = 30;
                break;
              }
              if (8 != (15 & u2)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (l4 -= 4, k2 = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k2;
              else if (k2 > r2.wbits) {
                e2.msg = "invalid window size", r2.mode = 30;
                break;
              }
              r2.dmax = 1 << k2, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l4 = u2 = 0;
              break;
            case 2:
              for (; l4 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              if (r2.flags = u2, 8 != (255 & r2.flags)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (57344 & r2.flags) {
                e2.msg = "unknown header flags set", r2.mode = 30;
                break;
              }
              r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E2[0] = 255 & u2, E2[1] = u2 >>> 8 & 255, r2.check = B2(r2.check, E2, 2, 0)), l4 = u2 = 0, r2.mode = 3;
            case 3:
              for (; l4 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              r2.head && (r2.head.time = u2), 512 & r2.flags && (E2[0] = 255 & u2, E2[1] = u2 >>> 8 & 255, E2[2] = u2 >>> 16 & 255, E2[3] = u2 >>> 24 & 255, r2.check = B2(r2.check, E2, 4, 0)), l4 = u2 = 0, r2.mode = 4;
            case 4:
              for (; l4 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E2[0] = 255 & u2, E2[1] = u2 >>> 8 & 255, r2.check = B2(r2.check, E2, 2, 0)), l4 = u2 = 0, r2.mode = 5;
            case 5:
              if (1024 & r2.flags) {
                for (; l4 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E2[0] = 255 & u2, E2[1] = u2 >>> 8 & 255, r2.check = B2(r2.check, E2, 2, 0)), l4 = u2 = 0;
              } else r2.head && (r2.head.extra = null);
              r2.mode = 6;
            case 6:
              if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k2 = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I2.arraySet(r2.head.extra, n2, s2, d, k2)), 512 & r2.flags && (r2.check = B2(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
              r2.length = 0, r2.mode = 7;
            case 7:
              if (2048 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k2 = n2[s2 + d++], r2.head && k2 && r2.length < 65536 && (r2.head.name += String.fromCharCode(k2)), k2 && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B2(r2.check, n2, d, s2)), o2 -= d, s2 += d, k2) break e;
              } else r2.head && (r2.head.name = null);
              r2.length = 0, r2.mode = 8;
            case 8:
              if (4096 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k2 = n2[s2 + d++], r2.head && k2 && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k2)), k2 && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B2(r2.check, n2, d, s2)), o2 -= d, s2 += d, k2) break e;
              } else r2.head && (r2.head.comment = null);
              r2.mode = 9;
            case 9:
              if (512 & r2.flags) {
                for (; l4 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                if (u2 !== (65535 & r2.check)) {
                  e2.msg = "header crc mismatch", r2.mode = 30;
                  break;
                }
                l4 = u2 = 0;
              }
              r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
              break;
            case 10:
              for (; l4 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              e2.adler = r2.check = L2(u2), l4 = u2 = 0, r2.mode = 11;
            case 11:
              if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l4, 2;
              e2.adler = r2.check = 1, r2.mode = 12;
            case 12:
              if (5 === t2 || 6 === t2) break e;
            case 13:
              if (r2.last) {
                u2 >>>= 7 & l4, l4 -= 7 & l4, r2.mode = 27;
                break;
              }
              for (; l4 < 3; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              switch (r2.last = 1 & u2, l4 -= 1, 3 & (u2 >>>= 1)) {
                case 0:
                  r2.mode = 14;
                  break;
                case 1:
                  if (j2(r2), r2.mode = 20, 6 !== t2) break;
                  u2 >>>= 2, l4 -= 2;
                  break e;
                case 2:
                  r2.mode = 17;
                  break;
                case 3:
                  e2.msg = "invalid block type", r2.mode = 30;
              }
              u2 >>>= 2, l4 -= 2;
              break;
            case 14:
              for (u2 >>>= 7 & l4, l4 -= 7 & l4; l4 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                e2.msg = "invalid stored block lengths", r2.mode = 30;
                break;
              }
              if (r2.length = 65535 & u2, l4 = u2 = 0, r2.mode = 15, 6 === t2) break e;
            case 15:
              r2.mode = 16;
            case 16:
              if (d = r2.length) {
                if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                I2.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                break;
              }
              r2.mode = 12;
              break;
            case 17:
              for (; l4 < 14; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l4 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l4 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l4 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                e2.msg = "too many length or distance symbols", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 18;
            case 18:
              for (; r2.have < r2.ncode; ) {
                for (; l4 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                r2.lens[A2[r2.have++]] = 7 & u2, u2 >>>= 3, l4 -= 3;
              }
              for (; r2.have < 19; ) r2.lens[A2[r2.have++]] = 0;
              if (r2.lencode = r2.lendyn, r2.lenbits = 7, S2 = { bits: r2.lenbits }, x2 = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S2), r2.lenbits = S2.bits, x2) {
                e2.msg = "invalid code lengths set", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 19;
            case 19:
              for (; r2.have < r2.nlen + r2.ndist; ) {
                for (; g = (C2 = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l4); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                if (b2 < 16) u2 >>>= _2, l4 -= _2, r2.lens[r2.have++] = b2;
                else {
                  if (16 === b2) {
                    for (z2 = _2 + 2; l4 < z2; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l4, l4 += 8;
                    }
                    if (u2 >>>= _2, l4 -= _2, 0 === r2.have) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    k2 = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l4 -= 2;
                  } else if (17 === b2) {
                    for (z2 = _2 + 3; l4 < z2; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l4, l4 += 8;
                    }
                    l4 -= _2, k2 = 0, d = 3 + (7 & (u2 >>>= _2)), u2 >>>= 3, l4 -= 3;
                  } else {
                    for (z2 = _2 + 7; l4 < z2; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l4, l4 += 8;
                    }
                    l4 -= _2, k2 = 0, d = 11 + (127 & (u2 >>>= _2)), u2 >>>= 7, l4 -= 7;
                  }
                  if (r2.have + d > r2.nlen + r2.ndist) {
                    e2.msg = "invalid bit length repeat", r2.mode = 30;
                    break;
                  }
                  for (; d--; ) r2.lens[r2.have++] = k2;
                }
              }
              if (30 === r2.mode) break;
              if (0 === r2.lens[256]) {
                e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                break;
              }
              if (r2.lenbits = 9, S2 = { bits: r2.lenbits }, x2 = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S2), r2.lenbits = S2.bits, x2) {
                e2.msg = "invalid literal/lengths set", r2.mode = 30;
                break;
              }
              if (r2.distbits = 6, r2.distcode = r2.distdyn, S2 = { bits: r2.distbits }, x2 = T(F2, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S2), r2.distbits = S2.bits, x2) {
                e2.msg = "invalid distances set", r2.mode = 30;
                break;
              }
              if (r2.mode = 20, 6 === t2) break e;
            case 20:
              r2.mode = 21;
            case 21:
              if (6 <= o2 && 258 <= h2) {
                e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l4, R2(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l4 = r2.bits, 12 === r2.mode && (r2.back = -1);
                break;
              }
              for (r2.back = 0; g = (C2 = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l4); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              if (g && 0 == (240 & g)) {
                for (v2 = _2, y2 = g, w = b2; g = (C2 = r2.lencode[w + ((u2 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_2 = C2 >>> 24) <= l4); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                u2 >>>= v2, l4 -= v2, r2.back += v2;
              }
              if (u2 >>>= _2, l4 -= _2, r2.back += _2, r2.length = b2, 0 === g) {
                r2.mode = 26;
                break;
              }
              if (32 & g) {
                r2.back = -1, r2.mode = 12;
                break;
              }
              if (64 & g) {
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break;
              }
              r2.extra = 15 & g, r2.mode = 22;
            case 22:
              if (r2.extra) {
                for (z2 = r2.extra; l4 < z2; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l4 -= r2.extra, r2.back += r2.extra;
              }
              r2.was = r2.length, r2.mode = 23;
            case 23:
              for (; g = (C2 = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l4); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l4, l4 += 8;
              }
              if (0 == (240 & g)) {
                for (v2 = _2, y2 = g, w = b2; g = (C2 = r2.distcode[w + ((u2 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_2 = C2 >>> 24) <= l4); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                u2 >>>= v2, l4 -= v2, r2.back += v2;
              }
              if (u2 >>>= _2, l4 -= _2, r2.back += _2, 64 & g) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break;
              }
              r2.offset = b2, r2.extra = 15 & g, r2.mode = 24;
            case 24:
              if (r2.extra) {
                for (z2 = r2.extra; l4 < z2; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l4 -= r2.extra, r2.back += r2.extra;
              }
              if (r2.offset > r2.dmax) {
                e2.msg = "invalid distance too far back", r2.mode = 30;
                break;
              }
              r2.mode = 25;
            case 25:
              if (0 === h2) break e;
              if (d = c2 - h2, r2.offset > d) {
                if ((d = r2.offset - d) > r2.whave && r2.sane) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m2 = r2.window;
              } else m2 = i2, p = a2 - r2.offset, d = r2.length;
              for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m2[p++], --d; ) ;
              0 === r2.length && (r2.mode = 21);
              break;
            case 26:
              if (0 === h2) break e;
              i2[a2++] = r2.length, h2--, r2.mode = 21;
              break;
            case 27:
              if (r2.wrap) {
                for (; l4 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 |= n2[s2++] << l4, l4 += 8;
                }
                if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B2(r2.check, i2, c2, a2 - c2) : O2(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L2(u2)) !== r2.check) {
                  e2.msg = "incorrect data check", r2.mode = 30;
                  break;
                }
                l4 = u2 = 0;
              }
              r2.mode = 28;
            case 28:
              if (r2.wrap && r2.flags) {
                for (; l4 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l4, l4 += 8;
                }
                if (u2 !== (4294967295 & r2.total)) {
                  e2.msg = "incorrect length check", r2.mode = 30;
                  break;
                }
                l4 = u2 = 0;
              }
              r2.mode = 29;
            case 29:
              x2 = 1;
              break e;
            case 30:
              x2 = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U2;
          }
          return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l4, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z2(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f3 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f3, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B2(r2.check, i2, c2, e2.next_out - c2) : O2(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f3 && 0 === c2 || 4 === t2) && x2 === N && (x2 = -5), x2);
        }, r.inflateEnd = function(e2) {
          if (!e2 || !e2.state) return U2;
          var t2 = e2.state;
          return t2.window && (t2.window = null), e2.state = null, N;
        }, r.inflateGetHeader = function(e2, t2) {
          var r2;
          return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U2 : ((r2.head = t2).done = false, N) : U2;
        }, r.inflateSetDictionary = function(e2, t2) {
          var r2, n2 = t2.length;
          return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U2 : 11 === r2.mode && O2(1, t2, n2, 0) !== r2.check ? -3 : Z2(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U2;
        }, r.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
        "use strict";
        var D = e("../utils/common"), F2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U2 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(e2, t2, r2, n, i, s, a, o) {
          var h, u, l3, f2, c, d, p, m2, _2, g = o.bits, b2 = 0, v2 = 0, y2 = 0, w = 0, k2 = 0, x2 = 0, S2 = 0, z2 = 0, C2 = 0, E2 = 0, A2 = null, I2 = 0, O2 = new D.Buf16(16), B2 = new D.Buf16(16), R2 = null, T = 0;
          for (b2 = 0; b2 <= 15; b2++) O2[b2] = 0;
          for (v2 = 0; v2 < n; v2++) O2[t2[r2 + v2]]++;
          for (k2 = g, w = 15; 1 <= w && 0 === O2[w]; w--) ;
          if (w < k2 && (k2 = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
          for (y2 = 1; y2 < w && 0 === O2[y2]; y2++) ;
          for (k2 < y2 && (k2 = y2), b2 = z2 = 1; b2 <= 15; b2++) if (z2 <<= 1, (z2 -= O2[b2]) < 0) return -1;
          if (0 < z2 && (0 === e2 || 1 !== w)) return -1;
          for (B2[1] = 0, b2 = 1; b2 < 15; b2++) B2[b2 + 1] = B2[b2] + O2[b2];
          for (v2 = 0; v2 < n; v2++) 0 !== t2[r2 + v2] && (a[B2[t2[r2 + v2]]++] = v2);
          if (d = 0 === e2 ? (A2 = R2 = a, 19) : 1 === e2 ? (A2 = F2, I2 -= 257, R2 = N, T -= 257, 256) : (A2 = U2, R2 = P2, -1), b2 = y2, c = s, S2 = v2 = E2 = 0, l3 = -1, f2 = (C2 = 1 << (x2 = k2)) - 1, 1 === e2 && 852 < C2 || 2 === e2 && 592 < C2) return 1;
          for (; ; ) {
            for (p = b2 - S2, _2 = a[v2] < d ? (m2 = 0, a[v2]) : a[v2] > d ? (m2 = R2[T + a[v2]], A2[I2 + a[v2]]) : (m2 = 96, 0), h = 1 << b2 - S2, y2 = u = 1 << x2; i[c + (E2 >> S2) + (u -= h)] = p << 24 | m2 << 16 | _2 | 0, 0 !== u; ) ;
            for (h = 1 << b2 - 1; E2 & h; ) h >>= 1;
            if (0 !== h ? (E2 &= h - 1, E2 += h) : E2 = 0, v2++, 0 == --O2[b2]) {
              if (b2 === w) break;
              b2 = t2[r2 + a[v2]];
            }
            if (k2 < b2 && (E2 & f2) !== l3) {
              for (0 === S2 && (S2 = k2), c += y2, z2 = 1 << (x2 = b2 - S2); x2 + S2 < w && !((z2 -= O2[x2 + S2]) <= 0); ) x2++, z2 <<= 1;
              if (C2 += 1 << x2, 1 === e2 && 852 < C2 || 2 === e2 && 592 < C2) return 1;
              i[l3 = E2 & f2] = k2 << 24 | x2 << 16 | c - s | 0;
            }
          }
          return 0 !== E2 && (i[c + E2] = b2 - S2 << 24 | 64 << 16 | 0), o.bits = k2, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, t, r) {
        "use strict";
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, t, r) {
        "use strict";
        var i = e("../utils/common"), o = 0, h = 1;
        function n(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        var s = 0, a = 29, u = 256, l3 = u + 1 + a, f2 = 30, c = 19, _2 = 2 * l3 + 1, g = 15, d = 16, p = 7, m2 = 256, b2 = 16, v2 = 17, y2 = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k2 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z2 = new Array(2 * (l3 + 2));
        n(z2);
        var C2 = new Array(2 * f2);
        n(C2);
        var E2 = new Array(512);
        n(E2);
        var A2 = new Array(256);
        n(A2);
        var I2 = new Array(a);
        n(I2);
        var O2, B2, R2, T = new Array(f2);
        function D(e2, t2, r2, n2, i2) {
          this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
        }
        function F2(e2, t2) {
          this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
        }
        function N(e2) {
          return e2 < 256 ? E2[e2] : E2[256 + (e2 >>> 7)];
        }
        function U2(e2, t2) {
          e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
        }
        function P2(e2, t2, r2) {
          e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U2(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
        }
        function L2(e2, t2, r2) {
          P2(e2, r2[2 * t2], r2[2 * t2 + 1]);
        }
        function j2(e2, t2) {
          for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
          return r2 >>> 1;
        }
        function Z2(e2, t2, r2) {
          var n2, i2, s2 = new Array(g + 1), a2 = 0;
          for (n2 = 1; n2 <= g; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
          for (i2 = 0; i2 <= t2; i2++) {
            var o2 = e2[2 * i2 + 1];
            0 !== o2 && (e2[2 * i2] = j2(s2[o2]++, o2));
          }
        }
        function W2(e2) {
          var t2;
          for (t2 = 0; t2 < l3; t2++) e2.dyn_ltree[2 * t2] = 0;
          for (t2 = 0; t2 < f2; t2++) e2.dyn_dtree[2 * t2] = 0;
          for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
          e2.dyn_ltree[2 * m2] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
        }
        function M(e2) {
          8 < e2.bi_valid ? U2(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
        }
        function H2(e2, t2, r2, n2) {
          var i2 = 2 * t2, s2 = 2 * r2;
          return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
        }
        function G2(e2, t2, r2) {
          for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H2(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H2(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
          e2.heap[r2] = n2;
        }
        function K2(e2, t2, r2) {
          var n2, i2, s2, a2, o2 = 0;
          if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L2(e2, i2, t2) : (L2(e2, (s2 = A2[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P2(e2, i2 -= I2[s2], a2), L2(e2, s2 = N(--n2), r2), 0 !== (a2 = k2[s2]) && P2(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; ) ;
          L2(e2, m2, t2);
        }
        function Y2(e2, t2) {
          var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
          for (e2.heap_len = 0, e2.heap_max = _2, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
          for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
          for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G2(e2, s2, r2);
          for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G2(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G2(e2, s2, 1), 2 <= e2.heap_len; ) ;
          e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l4 = t3.stat_desc.static_tree, f3 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m3 = 0;
            for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
            for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _2; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m3++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f3 && (e3.static_len += o3 * (l4[2 * n3 + 1] + a3)));
            if (0 !== m3) {
              do {
                for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m3 -= 2;
              } while (0 < m3);
              for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
            }
          })(e2, t2), Z2(s2, u2, e2.bl_count);
        }
        function X2(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b2]++) : o2 <= 10 ? e2.bl_tree[2 * v2]++ : e2.bl_tree[2 * y2]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
        }
        function V2(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2) for (; L2(e2, i2, e2.bl_tree), 0 != --o2; ) ;
            else 0 !== i2 ? (i2 !== s2 && (L2(e2, i2, e2.bl_tree), o2--), L2(e2, b2, e2.bl_tree), P2(e2, o2 - 3, 2)) : o2 <= 10 ? (L2(e2, v2, e2.bl_tree), P2(e2, o2 - 3, 3)) : (L2(e2, y2, e2.bl_tree), P2(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
        }
        n(T);
        var q2 = false;
        function J2(e2, t2, r2, n2) {
          P2(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            M(e3), n3 && (U2(e3, r3), U2(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
          })(e2, t2, r2, true);
        }
        r._tr_init = function(e2) {
          q2 || ((function() {
            var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
            for (n2 = r2 = 0; n2 < a - 1; n2++) for (I2[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A2[r2++] = n2;
            for (A2[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T[n2] = i2, e3 = 0; e3 < 1 << k2[n2]; e3++) E2[i2++] = n2;
            for (i2 >>= 7; n2 < f2; n2++) for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k2[n2] - 7; e3++) E2[256 + i2++] = n2;
            for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
            for (e3 = 0; e3 <= 143; ) z2[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (; e3 <= 255; ) z2[2 * e3 + 1] = 9, e3++, s2[9]++;
            for (; e3 <= 279; ) z2[2 * e3 + 1] = 7, e3++, s2[7]++;
            for (; e3 <= 287; ) z2[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (Z2(z2, l3 + 1, s2), e3 = 0; e3 < f2; e3++) C2[2 * e3 + 1] = 5, C2[2 * e3] = j2(e3, 5);
            O2 = new D(z2, w, u + 1, l3, g), B2 = new D(C2, k2, 0, f2, g), R2 = new D(new Array(0), x2, 0, c, p);
          })(), q2 = true), e2.l_desc = new F2(e2.dyn_ltree, O2), e2.d_desc = new F2(e2.dyn_dtree, B2), e2.bl_desc = new F2(e2.bl_tree, R2), e2.bi_buf = 0, e2.bi_valid = 0, W2(e2);
        }, r._tr_stored_block = J2, r._tr_flush_block = function(e2, t2, r2, n2) {
          var i2, s2, a2 = 0;
          0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
            var t3, r3 = 4093624447;
            for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
            if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
            for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
            return o;
          })(e2)), Y2(e2, e2.l_desc), Y2(e2, e2.d_desc), a2 = (function(e3) {
            var t3;
            for (X2(e3, e3.dyn_ltree, e3.l_desc.max_code), X2(e3, e3.dyn_dtree, e3.d_desc.max_code), Y2(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S2[t3] + 1]; t3--) ;
            return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
          })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J2(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P2(e2, 2 + (n2 ? 1 : 0), 3), K2(e2, z2, C2)) : (P2(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            var i3;
            for (P2(e3, t3 - 257, 5), P2(e3, r3 - 1, 5), P2(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P2(e3, e3.bl_tree[2 * S2[i3] + 1], 3);
            V2(e3, e3.dyn_ltree, t3 - 1), V2(e3, e3.dyn_dtree, r3 - 1);
          })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K2(e2, e2.dyn_ltree, e2.dyn_dtree)), W2(e2), n2 && M(e2);
        }, r._tr_tally = function(e2, t2, r2) {
          return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A2[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
        }, r._tr_align = function(e2) {
          P2(e2, 2, 3), L2(e2, m2, z2), (function(e3) {
            16 === e3.bi_valid ? (U2(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
          })(e2);
        };
      }, { "../utils/common": 41 }], 53: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, t, r) {
        (function(e2) {
          !(function(r2, n) {
            "use strict";
            if (!r2.setImmediate) {
              var i, s, t2, a, o = 1, h = {}, u = false, l3 = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
              e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                process.nextTick(function() {
                  c(e4);
                });
              } : (function() {
                if (r2.postMessage && !r2.importScripts) {
                  var e4 = true, t3 = r2.onmessage;
                  return r2.onmessage = function() {
                    e4 = false;
                  }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                }
              })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                r2.postMessage(a + e4, "*");
              }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                c(e4.data);
              }, function(e4) {
                t2.port2.postMessage(e4);
              }) : l3 && "onreadystatechange" in l3.createElement("script") ? (s = l3.documentElement, function(e4) {
                var t3 = l3.createElement("script");
                t3.onreadystatechange = function() {
                  c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                }, s.appendChild(t3);
              }) : function(e4) {
                setTimeout(c, 0, e4);
              }, e3.setImmediate = function(e4) {
                "function" != typeof e4 && (e4 = new Function("" + e4));
                for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                var n2 = { callback: e4, args: t3 };
                return h[o] = n2, i(o), o++;
              }, e3.clearImmediate = f2;
            }
            function f2(e4) {
              delete h[e4];
            }
            function c(e4) {
              if (u) setTimeout(c, 0, e4);
              else {
                var t3 = h[e4];
                if (t3) {
                  u = true;
                  try {
                    !(function(e5) {
                      var t4 = e5.callback, r3 = e5.args;
                      switch (r3.length) {
                        case 0:
                          t4();
                          break;
                        case 1:
                          t4(r3[0]);
                          break;
                        case 2:
                          t4(r3[0], r3[1]);
                          break;
                        case 3:
                          t4(r3[0], r3[1], r3[2]);
                          break;
                        default:
                          t4.apply(n, r3);
                      }
                    })(t3);
                  } finally {
                    f2(e4), u = false;
                  }
                }
              }
            }
            function d(e4) {
              e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
            }
          })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }
});

// scripts/empty.mjs
var empty_exports = {};
__export(empty_exports, {
  default: () => empty_default,
  readFileSync: () => readFileSync,
  writeFileSync: () => writeFileSync
});
var empty_default, readFileSync, writeFileSync;
var init_empty = __esm({
  "scripts/empty.mjs"() {
    "use strict";
    empty_default = {};
    readFileSync = () => {
      throw new Error("fs not available in browser");
    };
    writeFileSync = () => {
      throw new Error("fs not available in browser");
    };
  }
});

// node_modules/cfb/cfb.js
var require_cfb = __commonJS({
  "node_modules/cfb/cfb.js"(exports2, module) {
    var Base64_map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Base64_encode(input) {
      var o = "";
      var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
      for (var i = 0; i < input.length; ) {
        c1 = input.charCodeAt(i++);
        e1 = c1 >> 2;
        c2 = input.charCodeAt(i++);
        e2 = (c1 & 3) << 4 | c2 >> 4;
        c3 = input.charCodeAt(i++);
        e3 = (c2 & 15) << 2 | c3 >> 6;
        e4 = c3 & 63;
        if (isNaN(c2)) e3 = e4 = 64;
        else if (isNaN(c3)) e4 = 64;
        o += Base64_map.charAt(e1) + Base64_map.charAt(e2) + Base64_map.charAt(e3) + Base64_map.charAt(e4);
      }
      return o;
    }
    function Base64_decode(input) {
      var o = "";
      var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
      input = input.replace(/[^\w\+\/\=]/g, "");
      for (var i = 0; i < input.length; ) {
        e1 = Base64_map.indexOf(input.charAt(i++));
        e2 = Base64_map.indexOf(input.charAt(i++));
        c1 = e1 << 2 | e2 >> 4;
        o += String.fromCharCode(c1);
        e3 = Base64_map.indexOf(input.charAt(i++));
        c2 = (e2 & 15) << 4 | e3 >> 2;
        if (e3 !== 64) o += String.fromCharCode(c2);
        e4 = Base64_map.indexOf(input.charAt(i++));
        c3 = (e3 & 3) << 6 | e4;
        if (e4 !== 64) o += String.fromCharCode(c3);
      }
      return o;
    }
    var has_buf = (function() {
      return typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && !!process.versions.node;
    })();
    var Buffer_from = (function() {
      if (typeof Buffer !== "undefined") {
        var nbfs = !Buffer.from;
        if (!nbfs) try {
          Buffer.from("foo", "utf8");
        } catch (e) {
          nbfs = true;
        }
        return nbfs ? function(buf, enc) {
          return enc ? new Buffer(buf, enc) : new Buffer(buf);
        } : Buffer.from.bind(Buffer);
      }
      return function() {
      };
    })();
    function new_raw_buf(len) {
      if (has_buf) {
        if (Buffer.alloc) return Buffer.alloc(len);
        var b2 = new Buffer(len);
        b2.fill(0);
        return b2;
      }
      return typeof Uint8Array != "undefined" ? new Uint8Array(len) : new Array(len);
    }
    function new_unsafe_buf(len) {
      if (has_buf) return Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : new Buffer(len);
      return typeof Uint8Array != "undefined" ? new Uint8Array(len) : new Array(len);
    }
    var s2a = function s2a2(s) {
      if (has_buf) return Buffer_from(s, "binary");
      return s.split("").map(function(x2) {
        return x2.charCodeAt(0) & 255;
      });
    };
    var chr0 = /\u0000/g;
    var chr1 = /[\u0001-\u0006]/g;
    var __toBuffer = function(bufs) {
      var x2 = [];
      for (var i = 0; i < bufs[0].length; ++i) {
        x2.push.apply(x2, bufs[0][i]);
      }
      return x2;
    };
    var ___toBuffer = __toBuffer;
    var __utf16le = function(b2, s, e) {
      var ss = [];
      for (var i = s; i < e; i += 2) ss.push(String.fromCharCode(__readUInt16LE(b2, i)));
      return ss.join("").replace(chr0, "");
    };
    var ___utf16le = __utf16le;
    var __hexlify = function(b2, s, l3) {
      var ss = [];
      for (var i = s; i < s + l3; ++i) ss.push(("0" + b2[i].toString(16)).slice(-2));
      return ss.join("");
    };
    var ___hexlify = __hexlify;
    var __bconcat = function(bufs) {
      if (Array.isArray(bufs[0])) return [].concat.apply([], bufs);
      var maxlen = 0, i = 0;
      for (i = 0; i < bufs.length; ++i) maxlen += bufs[i].length;
      var o = new Uint8Array(maxlen);
      for (i = 0, maxlen = 0; i < bufs.length; maxlen += bufs[i].length, ++i) o.set(bufs[i], maxlen);
      return o;
    };
    var bconcat = __bconcat;
    if (has_buf) {
      __utf16le = function(b2, s, e) {
        if (!Buffer.isBuffer(b2)) return ___utf16le(b2, s, e);
        return b2.toString("utf16le", s, e).replace(chr0, "");
      };
      __hexlify = function(b2, s, l3) {
        return Buffer.isBuffer(b2) ? b2.toString("hex", s, s + l3) : ___hexlify(b2, s, l3);
      };
      __toBuffer = function(bufs) {
        return bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0]) ? Buffer.concat(bufs[0]) : ___toBuffer(bufs);
      };
      s2a = function(s) {
        return Buffer_from(s, "binary");
      };
      bconcat = function(bufs) {
        return Buffer.isBuffer(bufs[0]) ? Buffer.concat(bufs) : __bconcat(bufs);
      };
    }
    var __readUInt8 = function(b2, idx) {
      return b2[idx];
    };
    var __readUInt16LE = function(b2, idx) {
      return b2[idx + 1] * (1 << 8) + b2[idx];
    };
    var __readInt16LE = function(b2, idx) {
      var u = b2[idx + 1] * (1 << 8) + b2[idx];
      return u < 32768 ? u : (65535 - u + 1) * -1;
    };
    var __readUInt32LE = function(b2, idx) {
      return b2[idx + 3] * (1 << 24) + (b2[idx + 2] << 16) + (b2[idx + 1] << 8) + b2[idx];
    };
    var __readInt32LE = function(b2, idx) {
      return (b2[idx + 3] << 24) + (b2[idx + 2] << 16) + (b2[idx + 1] << 8) + b2[idx];
    };
    function ReadShift(size, t) {
      var oI, oS, type = 0;
      switch (size) {
        case 1:
          oI = __readUInt8(this, this.l);
          break;
        case 2:
          oI = (t !== "i" ? __readUInt16LE : __readInt16LE)(this, this.l);
          break;
        case 4:
          oI = __readInt32LE(this, this.l);
          break;
        case 16:
          type = 2;
          oS = __hexlify(this, this.l, size);
      }
      this.l += size;
      if (type === 0) return oI;
      return oS;
    }
    var __writeUInt32LE = function(b2, val, idx) {
      b2[idx] = val & 255;
      b2[idx + 1] = val >>> 8 & 255;
      b2[idx + 2] = val >>> 16 & 255;
      b2[idx + 3] = val >>> 24 & 255;
    };
    var __writeInt32LE = function(b2, val, idx) {
      b2[idx] = val & 255;
      b2[idx + 1] = val >> 8 & 255;
      b2[idx + 2] = val >> 16 & 255;
      b2[idx + 3] = val >> 24 & 255;
    };
    function WriteShift(t, val, f2) {
      var size = 0, i = 0;
      switch (f2) {
        case "hex":
          for (; i < t; ++i) {
            this[this.l++] = parseInt(val.slice(2 * i, 2 * i + 2), 16) || 0;
          }
          return this;
        case "utf16le":
          var end = this.l + t;
          for (i = 0; i < Math.min(val.length, t); ++i) {
            var cc = val.charCodeAt(i);
            this[this.l++] = cc & 255;
            this[this.l++] = cc >> 8;
          }
          while (this.l < end) this[this.l++] = 0;
          return this;
      }
      switch (t) {
        case 1:
          size = 1;
          this[this.l] = val & 255;
          break;
        case 2:
          size = 2;
          this[this.l] = val & 255;
          val >>>= 8;
          this[this.l + 1] = val & 255;
          break;
        case 4:
          size = 4;
          __writeUInt32LE(this, val, this.l);
          break;
        case -4:
          size = 4;
          __writeInt32LE(this, val, this.l);
          break;
      }
      this.l += size;
      return this;
    }
    function CheckField(hexstr, fld) {
      var m2 = __hexlify(this, this.l, hexstr.length >> 1);
      if (m2 !== hexstr) throw new Error(fld + "Expected " + hexstr + " saw " + m2);
      this.l += hexstr.length >> 1;
    }
    function prep_blob(blob, pos) {
      blob.l = pos;
      blob.read_shift = ReadShift;
      blob.chk = CheckField;
      blob.write_shift = WriteShift;
    }
    function new_buf(sz) {
      var o = new_raw_buf(sz);
      prep_blob(o, 0);
      return o;
    }
    var CRC32 = (function() {
      var CRC322 = {};
      CRC322.version = "1.2.1";
      function signed_crc_table() {
        var c = 0, table = new Array(256);
        for (var n = 0; n != 256; ++n) {
          c = n;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          table[n] = c;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
      }
      var T0 = signed_crc_table();
      function slice_by_16_tables(T) {
        var c = 0, v2 = 0, n = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
        for (n = 0; n != 256; ++n) table[n] = T[n];
        for (n = 0; n != 256; ++n) {
          v2 = T[n];
          for (c = 256 + n; c < 4096; c += 256) v2 = table[c] = v2 >>> 8 ^ T[v2 & 255];
        }
        var out = [];
        for (n = 1; n != 16; ++n) out[n - 1] = typeof Int32Array !== "undefined" ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);
        return out;
      }
      var TT = slice_by_16_tables(T0);
      var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
      var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9];
      var Tb = TT[10], Tc = TT[11], Td = TT[12], Te2 = TT[13], Tf = TT[14];
      function crc32_bstr(bstr, seed) {
        var C2 = seed ^ -1;
        for (var i = 0, L2 = bstr.length; i < L2; ) C2 = C2 >>> 8 ^ T0[(C2 ^ bstr.charCodeAt(i++)) & 255];
        return ~C2;
      }
      function crc32_buf(B2, seed) {
        var C2 = seed ^ -1, L2 = B2.length - 15, i = 0;
        for (; i < L2; ) C2 = Tf[B2[i++] ^ C2 & 255] ^ Te2[B2[i++] ^ C2 >> 8 & 255] ^ Td[B2[i++] ^ C2 >> 16 & 255] ^ Tc[B2[i++] ^ C2 >>> 24] ^ Tb[B2[i++]] ^ Ta[B2[i++]] ^ T9[B2[i++]] ^ T8[B2[i++]] ^ T7[B2[i++]] ^ T6[B2[i++]] ^ T5[B2[i++]] ^ T4[B2[i++]] ^ T3[B2[i++]] ^ T2[B2[i++]] ^ T1[B2[i++]] ^ T0[B2[i++]];
        L2 += 15;
        while (i < L2) C2 = C2 >>> 8 ^ T0[(C2 ^ B2[i++]) & 255];
        return ~C2;
      }
      function crc32_str(str, seed) {
        var C2 = seed ^ -1;
        for (var i = 0, L2 = str.length, c = 0, d = 0; i < L2; ) {
          c = str.charCodeAt(i++);
          if (c < 128) {
            C2 = C2 >>> 8 ^ T0[(C2 ^ c) & 255];
          } else if (c < 2048) {
            C2 = C2 >>> 8 ^ T0[(C2 ^ (192 | c >> 6 & 31)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c & 63)) & 255];
          } else if (c >= 55296 && c < 57344) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i++) & 1023;
            C2 = C2 >>> 8 ^ T0[(C2 ^ (240 | c >> 8 & 7)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c >> 2 & 63)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | d & 63)) & 255];
          } else {
            C2 = C2 >>> 8 ^ T0[(C2 ^ (224 | c >> 12 & 15)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c >> 6 & 63)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c & 63)) & 255];
          }
        }
        return ~C2;
      }
      CRC322.table = T0;
      CRC322.bstr = crc32_bstr;
      CRC322.buf = crc32_buf;
      CRC322.str = crc32_str;
      return CRC322;
    })();
    var CFB2 = (function _CFB() {
      var exports3 = {};
      exports3.version = "1.2.2";
      function namecmp(l3, r) {
        var L2 = l3.split("/"), R2 = r.split("/");
        for (var i2 = 0, c = 0, Z2 = Math.min(L2.length, R2.length); i2 < Z2; ++i2) {
          if (c = L2[i2].length - R2[i2].length) return c;
          if (L2[i2] != R2[i2]) return L2[i2] < R2[i2] ? -1 : 1;
        }
        return L2.length - R2.length;
      }
      function dirname(p) {
        if (p.charAt(p.length - 1) == "/") return p.slice(0, -1).indexOf("/") === -1 ? p : dirname(p.slice(0, -1));
        var c = p.lastIndexOf("/");
        return c === -1 ? p : p.slice(0, c + 1);
      }
      function filename(p) {
        if (p.charAt(p.length - 1) == "/") return filename(p.slice(0, -1));
        var c = p.lastIndexOf("/");
        return c === -1 ? p : p.slice(c + 1);
      }
      function write_dos_date(buf, date) {
        if (typeof date === "string") date = new Date(date);
        var hms = date.getHours();
        hms = hms << 6 | date.getMinutes();
        hms = hms << 5 | date.getSeconds() >>> 1;
        buf.write_shift(2, hms);
        var ymd = date.getFullYear() - 1980;
        ymd = ymd << 4 | date.getMonth() + 1;
        ymd = ymd << 5 | date.getDate();
        buf.write_shift(2, ymd);
      }
      function parse_dos_date(buf) {
        var hms = buf.read_shift(2) & 65535;
        var ymd = buf.read_shift(2) & 65535;
        var val = /* @__PURE__ */ new Date();
        var d = ymd & 31;
        ymd >>>= 5;
        var m2 = ymd & 15;
        ymd >>>= 4;
        val.setMilliseconds(0);
        val.setFullYear(ymd + 1980);
        val.setMonth(m2 - 1);
        val.setDate(d);
        var S2 = hms & 31;
        hms >>>= 5;
        var M = hms & 63;
        hms >>>= 6;
        val.setHours(hms);
        val.setMinutes(M);
        val.setSeconds(S2 << 1);
        return val;
      }
      function parse_extra_field(blob) {
        prep_blob(blob, 0);
        var o = {};
        var flags = 0;
        while (blob.l <= blob.length - 4) {
          var type = blob.read_shift(2);
          var sz = blob.read_shift(2), tgt = blob.l + sz;
          var p = {};
          switch (type) {
            /* UNIX-style Timestamps */
            case 21589:
              {
                flags = blob.read_shift(1);
                if (flags & 1) p.mtime = blob.read_shift(4);
                if (sz > 5) {
                  if (flags & 2) p.atime = blob.read_shift(4);
                  if (flags & 4) p.ctime = blob.read_shift(4);
                }
                if (p.mtime) p.mt = new Date(p.mtime * 1e3);
              }
              break;
          }
          blob.l = tgt;
          o[type] = p;
        }
        return o;
      }
      var fs;
      function get_fs() {
        return fs || (fs = (init_empty(), __toCommonJS(empty_exports)));
      }
      function parse(file, options) {
        if (file[0] == 80 && file[1] == 75) return parse_zip(file, options);
        if ((file[0] | 32) == 109 && (file[1] | 32) == 105) return parse_mad(file, options);
        if (file.length < 512) throw new Error("CFB file size " + file.length + " < 512");
        var mver = 3;
        var ssz = 512;
        var nmfs = 0;
        var difat_sec_cnt = 0;
        var dir_start = 0;
        var minifat_start = 0;
        var difat_start = 0;
        var fat_addrs = [];
        var blob = file.slice(0, 512);
        prep_blob(blob, 0);
        var mv = check_get_mver(blob);
        mver = mv[0];
        switch (mver) {
          case 3:
            ssz = 512;
            break;
          case 4:
            ssz = 4096;
            break;
          case 0:
            if (mv[1] == 0) return parse_zip(file, options);
          /* falls through */
          default:
            throw new Error("Major Version: Expected 3 or 4 saw " + mver);
        }
        if (ssz !== 512) {
          blob = file.slice(0, ssz);
          prep_blob(
            blob,
            28
            /* blob.l */
          );
        }
        var header = file.slice(0, ssz);
        check_shifts(blob, mver);
        var dir_cnt = blob.read_shift(4, "i");
        if (mver === 3 && dir_cnt !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + dir_cnt);
        blob.l += 4;
        dir_start = blob.read_shift(4, "i");
        blob.l += 4;
        blob.chk("00100000", "Mini Stream Cutoff Size: ");
        minifat_start = blob.read_shift(4, "i");
        nmfs = blob.read_shift(4, "i");
        difat_start = blob.read_shift(4, "i");
        difat_sec_cnt = blob.read_shift(4, "i");
        for (var q3 = -1, j2 = 0; j2 < 109; ++j2) {
          q3 = blob.read_shift(4, "i");
          if (q3 < 0) break;
          fat_addrs[j2] = q3;
        }
        var sectors = sectorify(file, ssz);
        sleuth_fat(difat_start, difat_sec_cnt, sectors, ssz, fat_addrs);
        var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);
        sector_list[dir_start].name = "!Directory";
        if (nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
        sector_list[fat_addrs[0]].name = "!FAT";
        sector_list.fat_addrs = fat_addrs;
        sector_list.ssz = ssz;
        var files = {}, Paths = [], FileIndex = [], FullPaths = [];
        read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, minifat_start);
        build_full_paths(FileIndex, FullPaths, Paths);
        Paths.shift();
        var o = {
          FileIndex,
          FullPaths
        };
        if (options && options.raw) o.raw = { header, sectors };
        return o;
      }
      function check_get_mver(blob) {
        if (blob[blob.l] == 80 && blob[blob.l + 1] == 75) return [0, 0];
        blob.chk(HEADER_SIGNATURE, "Header Signature: ");
        blob.l += 16;
        var mver = blob.read_shift(2, "u");
        return [blob.read_shift(2, "u"), mver];
      }
      function check_shifts(blob, mver) {
        var shift = 9;
        blob.l += 2;
        switch (shift = blob.read_shift(2)) {
          case 9:
            if (mver != 3) throw new Error("Sector Shift: Expected 9 saw " + shift);
            break;
          case 12:
            if (mver != 4) throw new Error("Sector Shift: Expected 12 saw " + shift);
            break;
          default:
            throw new Error("Sector Shift: Expected 9 or 12 saw " + shift);
        }
        blob.chk("0600", "Mini Sector Shift: ");
        blob.chk("000000000000", "Reserved: ");
      }
      function sectorify(file, ssz) {
        var nsectors = Math.ceil(file.length / ssz) - 1;
        var sectors = [];
        for (var i2 = 1; i2 < nsectors; ++i2) sectors[i2 - 1] = file.slice(i2 * ssz, (i2 + 1) * ssz);
        sectors[nsectors - 1] = file.slice(nsectors * ssz);
        return sectors;
      }
      function build_full_paths(FI, FP, Paths) {
        var i2 = 0, L2 = 0, R2 = 0, C2 = 0, j2 = 0, pl = Paths.length;
        var dad = [], q3 = [];
        for (; i2 < pl; ++i2) {
          dad[i2] = q3[i2] = i2;
          FP[i2] = Paths[i2];
        }
        for (; j2 < q3.length; ++j2) {
          i2 = q3[j2];
          L2 = FI[i2].L;
          R2 = FI[i2].R;
          C2 = FI[i2].C;
          if (dad[i2] === i2) {
            if (L2 !== -1 && dad[L2] !== L2) dad[i2] = dad[L2];
            if (R2 !== -1 && dad[R2] !== R2) dad[i2] = dad[R2];
          }
          if (C2 !== -1) dad[C2] = i2;
          if (L2 !== -1 && i2 != dad[i2]) {
            dad[L2] = dad[i2];
            if (q3.lastIndexOf(L2) < j2) q3.push(L2);
          }
          if (R2 !== -1 && i2 != dad[i2]) {
            dad[R2] = dad[i2];
            if (q3.lastIndexOf(R2) < j2) q3.push(R2);
          }
        }
        for (i2 = 1; i2 < pl; ++i2) if (dad[i2] === i2) {
          if (R2 !== -1 && dad[R2] !== R2) dad[i2] = dad[R2];
          else if (L2 !== -1 && dad[L2] !== L2) dad[i2] = dad[L2];
        }
        for (i2 = 1; i2 < pl; ++i2) {
          if (FI[i2].type === 0) continue;
          j2 = i2;
          if (j2 != dad[j2]) do {
            j2 = dad[j2];
            FP[i2] = FP[j2] + "/" + FP[i2];
          } while (j2 !== 0 && -1 !== dad[j2] && j2 != dad[j2]);
          dad[i2] = -1;
        }
        FP[0] += "/";
        for (i2 = 1; i2 < pl; ++i2) {
          if (FI[i2].type !== 2) FP[i2] += "/";
        }
      }
      function get_mfat_entry(entry, payload, mini) {
        var start = entry.start, size = entry.size;
        var o = [];
        var idx = start;
        while (mini && size > 0 && idx >= 0) {
          o.push(payload.slice(idx * MSSZ, idx * MSSZ + MSSZ));
          size -= MSSZ;
          idx = __readInt32LE(mini, idx * 4);
        }
        if (o.length === 0) return new_buf(0);
        return bconcat(o).slice(0, entry.size);
      }
      function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
        var q3 = ENDOFCHAIN;
        if (idx === ENDOFCHAIN) {
          if (cnt !== 0) throw new Error("DIFAT chain shorter than expected");
        } else if (idx !== -1) {
          var sector = sectors[idx], m2 = (ssz >>> 2) - 1;
          if (!sector) return;
          for (var i2 = 0; i2 < m2; ++i2) {
            if ((q3 = __readInt32LE(sector, i2 * 4)) === ENDOFCHAIN) break;
            fat_addrs.push(q3);
          }
          if (cnt >= 1) sleuth_fat(__readInt32LE(sector, ssz - 4), cnt - 1, sectors, ssz, fat_addrs);
        }
      }
      function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
        var buf = [], buf_chain = [];
        if (!chkd) chkd = [];
        var modulus = ssz - 1, j2 = 0, jj = 0;
        for (j2 = start; j2 >= 0; ) {
          chkd[j2] = true;
          buf[buf.length] = j2;
          buf_chain.push(sectors[j2]);
          var addr = fat_addrs[Math.floor(j2 * 4 / ssz)];
          jj = j2 * 4 & modulus;
          if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j2 + " 4 " + ssz);
          if (!sectors[addr]) break;
          j2 = __readInt32LE(sectors[addr], jj);
        }
        return { nodes: buf, data: __toBuffer([buf_chain]) };
      }
      function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
        var sl = sectors.length, sector_list = [];
        var chkd = [], buf = [], buf_chain = [];
        var modulus = ssz - 1, i2 = 0, j2 = 0, k2 = 0, jj = 0;
        for (i2 = 0; i2 < sl; ++i2) {
          buf = [];
          k2 = i2 + dir_start;
          if (k2 >= sl) k2 -= sl;
          if (chkd[k2]) continue;
          buf_chain = [];
          var seen = [];
          for (j2 = k2; j2 >= 0; ) {
            seen[j2] = true;
            chkd[j2] = true;
            buf[buf.length] = j2;
            buf_chain.push(sectors[j2]);
            var addr = fat_addrs[Math.floor(j2 * 4 / ssz)];
            jj = j2 * 4 & modulus;
            if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j2 + " 4 " + ssz);
            if (!sectors[addr]) break;
            j2 = __readInt32LE(sectors[addr], jj);
            if (seen[j2]) break;
          }
          sector_list[k2] = { nodes: buf, data: __toBuffer([buf_chain]) };
        }
        return sector_list;
      }
      function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, mini) {
        var minifat_store = 0, pl = Paths.length ? 2 : 0;
        var sector = sector_list[dir_start].data;
        var i2 = 0, namelen = 0, name;
        for (; i2 < sector.length; i2 += 128) {
          var blob = sector.slice(i2, i2 + 128);
          prep_blob(blob, 64);
          namelen = blob.read_shift(2);
          name = __utf16le(blob, 0, namelen - pl);
          Paths.push(name);
          var o = {
            name,
            type: blob.read_shift(1),
            color: blob.read_shift(1),
            L: blob.read_shift(4, "i"),
            R: blob.read_shift(4, "i"),
            C: blob.read_shift(4, "i"),
            clsid: blob.read_shift(16),
            state: blob.read_shift(4, "i"),
            start: 0,
            size: 0
          };
          var ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
          if (ctime !== 0) o.ct = read_date(blob, blob.l - 8);
          var mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
          if (mtime !== 0) o.mt = read_date(blob, blob.l - 8);
          o.start = blob.read_shift(4, "i");
          o.size = blob.read_shift(4, "i");
          if (o.size < 0 && o.start < 0) {
            o.size = o.type = 0;
            o.start = ENDOFCHAIN;
            o.name = "";
          }
          if (o.type === 5) {
            minifat_store = o.start;
            if (nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
          } else if (o.size >= 4096) {
            o.storage = "fat";
            if (sector_list[o.start] === void 0) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
            sector_list[o.start].name = o.name;
            o.content = sector_list[o.start].data.slice(0, o.size);
          } else {
            o.storage = "minifat";
            if (o.size < 0) o.size = 0;
            else if (minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN && sector_list[minifat_store]) {
              o.content = get_mfat_entry(o, sector_list[minifat_store].data, (sector_list[mini] || {}).data);
            }
          }
          if (o.content) prep_blob(o.content, 0);
          files[name] = o;
          FileIndex.push(o);
        }
      }
      function read_date(blob, offset) {
        return new Date((__readUInt32LE(blob, offset + 4) / 1e7 * Math.pow(2, 32) + __readUInt32LE(blob, offset) / 1e7 - 11644473600) * 1e3);
      }
      function read_file(filename2, options) {
        get_fs();
        return parse(fs.readFileSync(filename2), options);
      }
      function read2(blob, options) {
        var type = options && options.type;
        if (!type) {
          if (has_buf && Buffer.isBuffer(blob)) type = "buffer";
        }
        switch (type || "base64") {
          case "file":
            return read_file(blob, options);
          case "base64":
            return parse(s2a(Base64_decode(blob)), options);
          case "binary":
            return parse(s2a(blob), options);
        }
        return parse(blob, options);
      }
      function init_cfb(cfb, opts) {
        var o = opts || {}, root = o.root || "Root Entry";
        if (!cfb.FullPaths) cfb.FullPaths = [];
        if (!cfb.FileIndex) cfb.FileIndex = [];
        if (cfb.FullPaths.length !== cfb.FileIndex.length) throw new Error("inconsistent CFB structure");
        if (cfb.FullPaths.length === 0) {
          cfb.FullPaths[0] = root + "/";
          cfb.FileIndex[0] = { name: root, type: 5 };
        }
        if (o.CLSID) cfb.FileIndex[0].clsid = o.CLSID;
        seed_cfb(cfb);
      }
      function seed_cfb(cfb) {
        var nm = "Sh33tJ5";
        if (CFB2.find(cfb, "/" + nm)) return;
        var p = new_buf(4);
        p[0] = 55;
        p[1] = p[3] = 50;
        p[2] = 54;
        cfb.FileIndex.push({ name: nm, type: 2, content: p, size: 4, L: 69, R: 69, C: 69 });
        cfb.FullPaths.push(cfb.FullPaths[0] + nm);
        rebuild_cfb(cfb);
      }
      function rebuild_cfb(cfb, f2) {
        init_cfb(cfb);
        var gc = false, s = false;
        for (var i2 = cfb.FullPaths.length - 1; i2 >= 0; --i2) {
          var _file = cfb.FileIndex[i2];
          switch (_file.type) {
            case 0:
              if (s) gc = true;
              else {
                cfb.FileIndex.pop();
                cfb.FullPaths.pop();
              }
              break;
            case 1:
            case 2:
            case 5:
              s = true;
              if (isNaN(_file.R * _file.L * _file.C)) gc = true;
              if (_file.R > -1 && _file.L > -1 && _file.R == _file.L) gc = true;
              break;
            default:
              gc = true;
              break;
          }
        }
        if (!gc && !f2) return;
        var now = new Date(1987, 1, 19), j2 = 0;
        var fullPaths = Object.create ? /* @__PURE__ */ Object.create(null) : {};
        var data = [];
        for (i2 = 0; i2 < cfb.FullPaths.length; ++i2) {
          fullPaths[cfb.FullPaths[i2]] = true;
          if (cfb.FileIndex[i2].type === 0) continue;
          data.push([cfb.FullPaths[i2], cfb.FileIndex[i2]]);
        }
        for (i2 = 0; i2 < data.length; ++i2) {
          var dad = dirname(data[i2][0]);
          s = fullPaths[dad];
          while (!s) {
            while (dirname(dad) && !fullPaths[dirname(dad)]) dad = dirname(dad);
            data.push([dad, {
              name: filename(dad).replace("/", ""),
              type: 1,
              clsid: HEADER_CLSID,
              ct: now,
              mt: now,
              content: null
            }]);
            fullPaths[dad] = true;
            dad = dirname(data[i2][0]);
            s = fullPaths[dad];
          }
        }
        data.sort(function(x2, y2) {
          return namecmp(x2[0], y2[0]);
        });
        cfb.FullPaths = [];
        cfb.FileIndex = [];
        for (i2 = 0; i2 < data.length; ++i2) {
          cfb.FullPaths[i2] = data[i2][0];
          cfb.FileIndex[i2] = data[i2][1];
        }
        for (i2 = 0; i2 < data.length; ++i2) {
          var elt = cfb.FileIndex[i2];
          var nm = cfb.FullPaths[i2];
          elt.name = filename(nm).replace("/", "");
          elt.L = elt.R = elt.C = -(elt.color = 1);
          elt.size = elt.content ? elt.content.length : 0;
          elt.start = 0;
          elt.clsid = elt.clsid || HEADER_CLSID;
          if (i2 === 0) {
            elt.C = data.length > 1 ? 1 : -1;
            elt.size = 0;
            elt.type = 5;
          } else if (nm.slice(-1) == "/") {
            for (j2 = i2 + 1; j2 < data.length; ++j2) if (dirname(cfb.FullPaths[j2]) == nm) break;
            elt.C = j2 >= data.length ? -1 : j2;
            for (j2 = i2 + 1; j2 < data.length; ++j2) if (dirname(cfb.FullPaths[j2]) == dirname(nm)) break;
            elt.R = j2 >= data.length ? -1 : j2;
            elt.type = 1;
          } else {
            if (dirname(cfb.FullPaths[i2 + 1] || "") == dirname(nm)) elt.R = i2 + 1;
            elt.type = 2;
          }
        }
      }
      function _write(cfb, options) {
        var _opts = options || {};
        if (_opts.fileType == "mad") return write_mad(cfb, _opts);
        rebuild_cfb(cfb);
        switch (_opts.fileType) {
          case "zip":
            return write_zip(cfb, _opts);
        }
        var L2 = (function(cfb2) {
          var mini_size = 0, fat_size = 0;
          for (var i3 = 0; i3 < cfb2.FileIndex.length; ++i3) {
            var file2 = cfb2.FileIndex[i3];
            if (!file2.content) continue;
            var flen2 = file2.content.length;
            if (flen2 > 0) {
              if (flen2 < 4096) mini_size += flen2 + 63 >> 6;
              else fat_size += flen2 + 511 >> 9;
            }
          }
          var dir_cnt = cfb2.FullPaths.length + 3 >> 2;
          var mini_cnt = mini_size + 7 >> 3;
          var mfat_cnt = mini_size + 127 >> 7;
          var fat_base = mini_cnt + fat_size + dir_cnt + mfat_cnt;
          var fat_cnt = fat_base + 127 >> 7;
          var difat_cnt = fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
          while (fat_base + fat_cnt + difat_cnt + 127 >> 7 > fat_cnt) difat_cnt = ++fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
          var L3 = [1, difat_cnt, fat_cnt, mfat_cnt, dir_cnt, fat_size, mini_size, 0];
          cfb2.FileIndex[0].size = mini_size << 6;
          L3[7] = (cfb2.FileIndex[0].start = L3[0] + L3[1] + L3[2] + L3[3] + L3[4] + L3[5]) + (L3[6] + 7 >> 3);
          return L3;
        })(cfb);
        var o = new_buf(L2[7] << 9);
        var i2 = 0, T = 0;
        {
          for (i2 = 0; i2 < 8; ++i2) o.write_shift(1, HEADER_SIG[i2]);
          for (i2 = 0; i2 < 8; ++i2) o.write_shift(2, 0);
          o.write_shift(2, 62);
          o.write_shift(2, 3);
          o.write_shift(2, 65534);
          o.write_shift(2, 9);
          o.write_shift(2, 6);
          for (i2 = 0; i2 < 3; ++i2) o.write_shift(2, 0);
          o.write_shift(4, 0);
          o.write_shift(4, L2[2]);
          o.write_shift(4, L2[0] + L2[1] + L2[2] + L2[3] - 1);
          o.write_shift(4, 0);
          o.write_shift(4, 1 << 12);
          o.write_shift(4, L2[3] ? L2[0] + L2[1] + L2[2] - 1 : ENDOFCHAIN);
          o.write_shift(4, L2[3]);
          o.write_shift(-4, L2[1] ? L2[0] - 1 : ENDOFCHAIN);
          o.write_shift(4, L2[1]);
          for (i2 = 0; i2 < 109; ++i2) o.write_shift(-4, i2 < L2[2] ? L2[1] + i2 : -1);
        }
        if (L2[1]) {
          for (T = 0; T < L2[1]; ++T) {
            for (; i2 < 236 + T * 127; ++i2) o.write_shift(-4, i2 < L2[2] ? L2[1] + i2 : -1);
            o.write_shift(-4, T === L2[1] - 1 ? ENDOFCHAIN : T + 1);
          }
        }
        var chainit = function(w) {
          for (T += w; i2 < T - 1; ++i2) o.write_shift(-4, i2 + 1);
          if (w) {
            ++i2;
            o.write_shift(-4, ENDOFCHAIN);
          }
        };
        T = i2 = 0;
        for (T += L2[1]; i2 < T; ++i2) o.write_shift(-4, consts.DIFSECT);
        for (T += L2[2]; i2 < T; ++i2) o.write_shift(-4, consts.FATSECT);
        chainit(L2[3]);
        chainit(L2[4]);
        var j2 = 0, flen = 0;
        var file = cfb.FileIndex[0];
        for (; j2 < cfb.FileIndex.length; ++j2) {
          file = cfb.FileIndex[j2];
          if (!file.content) continue;
          flen = file.content.length;
          if (flen < 4096) continue;
          file.start = T;
          chainit(flen + 511 >> 9);
        }
        chainit(L2[6] + 7 >> 3);
        while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
        T = i2 = 0;
        for (j2 = 0; j2 < cfb.FileIndex.length; ++j2) {
          file = cfb.FileIndex[j2];
          if (!file.content) continue;
          flen = file.content.length;
          if (!flen || flen >= 4096) continue;
          file.start = T;
          chainit(flen + 63 >> 6);
        }
        while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
        for (i2 = 0; i2 < L2[4] << 2; ++i2) {
          var nm = cfb.FullPaths[i2];
          if (!nm || nm.length === 0) {
            for (j2 = 0; j2 < 17; ++j2) o.write_shift(4, 0);
            for (j2 = 0; j2 < 3; ++j2) o.write_shift(4, -1);
            for (j2 = 0; j2 < 12; ++j2) o.write_shift(4, 0);
            continue;
          }
          file = cfb.FileIndex[i2];
          if (i2 === 0) file.start = file.size ? file.start - 1 : ENDOFCHAIN;
          var _nm = i2 === 0 && _opts.root || file.name;
          if (_nm.length > 32) {
            console.error("Name " + _nm + " will be truncated to " + _nm.slice(0, 32));
            _nm = _nm.slice(0, 32);
          }
          flen = 2 * (_nm.length + 1);
          o.write_shift(64, _nm, "utf16le");
          o.write_shift(2, flen);
          o.write_shift(1, file.type);
          o.write_shift(1, file.color);
          o.write_shift(-4, file.L);
          o.write_shift(-4, file.R);
          o.write_shift(-4, file.C);
          if (!file.clsid) for (j2 = 0; j2 < 4; ++j2) o.write_shift(4, 0);
          else o.write_shift(16, file.clsid, "hex");
          o.write_shift(4, file.state || 0);
          o.write_shift(4, 0);
          o.write_shift(4, 0);
          o.write_shift(4, 0);
          o.write_shift(4, 0);
          o.write_shift(4, file.start);
          o.write_shift(4, file.size);
          o.write_shift(4, 0);
        }
        for (i2 = 1; i2 < cfb.FileIndex.length; ++i2) {
          file = cfb.FileIndex[i2];
          if (file.size >= 4096) {
            o.l = file.start + 1 << 9;
            if (has_buf && Buffer.isBuffer(file.content)) {
              file.content.copy(o, o.l, 0, file.size);
              o.l += file.size + 511 & -512;
            } else {
              for (j2 = 0; j2 < file.size; ++j2) o.write_shift(1, file.content[j2]);
              for (; j2 & 511; ++j2) o.write_shift(1, 0);
            }
          }
        }
        for (i2 = 1; i2 < cfb.FileIndex.length; ++i2) {
          file = cfb.FileIndex[i2];
          if (file.size > 0 && file.size < 4096) {
            if (has_buf && Buffer.isBuffer(file.content)) {
              file.content.copy(o, o.l, 0, file.size);
              o.l += file.size + 63 & -64;
            } else {
              for (j2 = 0; j2 < file.size; ++j2) o.write_shift(1, file.content[j2]);
              for (; j2 & 63; ++j2) o.write_shift(1, 0);
            }
          }
        }
        if (has_buf) {
          o.l = o.length;
        } else {
          while (o.l < o.length) o.write_shift(1, 0);
        }
        return o;
      }
      function find2(cfb, path) {
        var UCFullPaths = cfb.FullPaths.map(function(x2) {
          return x2.toUpperCase();
        });
        var UCPaths = UCFullPaths.map(function(x2) {
          var y2 = x2.split("/");
          return y2[y2.length - (x2.slice(-1) == "/" ? 2 : 1)];
        });
        var k2 = false;
        if (path.charCodeAt(0) === 47) {
          k2 = true;
          path = UCFullPaths[0].slice(0, -1) + path;
        } else k2 = path.indexOf("/") !== -1;
        var UCPath = path.toUpperCase();
        var w = k2 === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
        if (w !== -1) return cfb.FileIndex[w];
        var m2 = !UCPath.match(chr1);
        UCPath = UCPath.replace(chr0, "");
        if (m2) UCPath = UCPath.replace(chr1, "!");
        for (w = 0; w < UCFullPaths.length; ++w) {
          if ((m2 ? UCFullPaths[w].replace(chr1, "!") : UCFullPaths[w]).replace(chr0, "") == UCPath) return cfb.FileIndex[w];
          if ((m2 ? UCPaths[w].replace(chr1, "!") : UCPaths[w]).replace(chr0, "") == UCPath) return cfb.FileIndex[w];
        }
        return null;
      }
      var MSSZ = 64;
      var ENDOFCHAIN = -2;
      var HEADER_SIGNATURE = "d0cf11e0a1b11ae1";
      var HEADER_SIG = [208, 207, 17, 224, 161, 177, 26, 225];
      var HEADER_CLSID = "00000000000000000000000000000000";
      var consts = {
        /* 2.1 Compund File Sector Numbers and Types */
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN,
        FREESECT: -1,
        /* 2.2 Compound File Header */
        HEADER_SIGNATURE,
        HEADER_MINOR_VERSION: "3e00",
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID,
        /* 2.6.1 Compound File Directory Entry */
        EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
      };
      function write_file(cfb, filename2, options) {
        get_fs();
        var o = _write(cfb, options);
        fs.writeFileSync(filename2, o);
      }
      function a2s(o) {
        var out = new Array(o.length);
        for (var i2 = 0; i2 < o.length; ++i2) out[i2] = String.fromCharCode(o[i2]);
        return out.join("");
      }
      function write(cfb, options) {
        var o = _write(cfb, options);
        switch (options && options.type || "buffer") {
          case "file":
            get_fs();
            fs.writeFileSync(options.filename, o);
            return o;
          case "binary":
            return typeof o == "string" ? o : a2s(o);
          case "base64":
            return Base64_encode(typeof o == "string" ? o : a2s(o));
          case "buffer":
            if (has_buf) return Buffer.isBuffer(o) ? o : Buffer_from(o);
          /* falls through */
          case "array":
            return typeof o == "string" ? s2a(o) : o;
        }
        return o;
      }
      var _zlib;
      function use_zlib(zlib) {
        try {
          var InflateRaw = zlib.InflateRaw;
          var InflRaw = new InflateRaw();
          InflRaw._processChunk(new Uint8Array([3, 0]), InflRaw._finishFlushFlag);
          if (InflRaw.bytesRead) _zlib = zlib;
          else throw new Error("zlib does not expose bytesRead");
        } catch (e) {
          console.error("cannot use native zlib: " + (e.message || e));
        }
      }
      function _inflateRawSync(payload, usz) {
        if (!_zlib) return _inflate(payload, usz);
        var InflateRaw = _zlib.InflateRaw;
        var InflRaw = new InflateRaw();
        var out = InflRaw._processChunk(payload.slice(payload.l), InflRaw._finishFlushFlag);
        payload.l += InflRaw.bytesRead;
        return out;
      }
      function _deflateRawSync(payload) {
        return _zlib ? _zlib.deflateRawSync(payload) : _deflate(payload);
      }
      var CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      var LEN_LN = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
      var DST_LN = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
      function bit_swap_8(n) {
        var t = (n << 1 | n << 11) & 139536 | (n << 5 | n << 15) & 558144;
        return (t >> 16 | t >> 8 | t) & 255;
      }
      var use_typed_arrays = typeof Uint8Array !== "undefined";
      var bitswap8 = use_typed_arrays ? new Uint8Array(1 << 8) : [];
      for (var q2 = 0; q2 < 1 << 8; ++q2) bitswap8[q2] = bit_swap_8(q2);
      function bit_swap_n(n, b2) {
        var rev = bitswap8[n & 255];
        if (b2 <= 8) return rev >>> 8 - b2;
        rev = rev << 8 | bitswap8[n >> 8 & 255];
        if (b2 <= 16) return rev >>> 16 - b2;
        rev = rev << 8 | bitswap8[n >> 16 & 255];
        return rev >>> 24 - b2;
      }
      function read_bits_2(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 6 ? 0 : buf[h + 1] << 8)) >>> w & 3;
      }
      function read_bits_3(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 5 ? 0 : buf[h + 1] << 8)) >>> w & 7;
      }
      function read_bits_4(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 4 ? 0 : buf[h + 1] << 8)) >>> w & 15;
      }
      function read_bits_5(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 3 ? 0 : buf[h + 1] << 8)) >>> w & 31;
      }
      function read_bits_7(buf, bl) {
        var w = bl & 7, h = bl >>> 3;
        return (buf[h] | (w <= 1 ? 0 : buf[h + 1] << 8)) >>> w & 127;
      }
      function read_bits_n(buf, bl, n) {
        var w = bl & 7, h = bl >>> 3, f2 = (1 << n) - 1;
        var v2 = buf[h] >>> w;
        if (n < 8 - w) return v2 & f2;
        v2 |= buf[h + 1] << 8 - w;
        if (n < 16 - w) return v2 & f2;
        v2 |= buf[h + 2] << 16 - w;
        if (n < 24 - w) return v2 & f2;
        v2 |= buf[h + 3] << 24 - w;
        return v2 & f2;
      }
      function write_bits_3(buf, bl, v2) {
        var w = bl & 7, h = bl >>> 3;
        if (w <= 5) buf[h] |= (v2 & 7) << w;
        else {
          buf[h] |= v2 << w & 255;
          buf[h + 1] = (v2 & 7) >> 8 - w;
        }
        return bl + 3;
      }
      function write_bits_1(buf, bl, v2) {
        var w = bl & 7, h = bl >>> 3;
        v2 = (v2 & 1) << w;
        buf[h] |= v2;
        return bl + 1;
      }
      function write_bits_8(buf, bl, v2) {
        var w = bl & 7, h = bl >>> 3;
        v2 <<= w;
        buf[h] |= v2 & 255;
        v2 >>>= 8;
        buf[h + 1] = v2;
        return bl + 8;
      }
      function write_bits_16(buf, bl, v2) {
        var w = bl & 7, h = bl >>> 3;
        v2 <<= w;
        buf[h] |= v2 & 255;
        v2 >>>= 8;
        buf[h + 1] = v2 & 255;
        buf[h + 2] = v2 >>> 8;
        return bl + 16;
      }
      function realloc(b2, sz) {
        var L2 = b2.length, M = 2 * L2 > sz ? 2 * L2 : sz + 5, i2 = 0;
        if (L2 >= sz) return b2;
        if (has_buf) {
          var o = new_unsafe_buf(M);
          if (b2.copy) b2.copy(o);
          else for (; i2 < b2.length; ++i2) o[i2] = b2[i2];
          return o;
        } else if (use_typed_arrays) {
          var a = new Uint8Array(M);
          if (a.set) a.set(b2);
          else for (; i2 < L2; ++i2) a[i2] = b2[i2];
          return a;
        }
        b2.length = M;
        return b2;
      }
      function zero_fill_array(n) {
        var o = new Array(n);
        for (var i2 = 0; i2 < n; ++i2) o[i2] = 0;
        return o;
      }
      function build_tree2(clens, cmap, MAX) {
        var maxlen = 1, w = 0, i2 = 0, j2 = 0, ccode = 0, L2 = clens.length;
        var bl_count = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
        for (i2 = 0; i2 < 32; ++i2) bl_count[i2] = 0;
        for (i2 = L2; i2 < MAX; ++i2) clens[i2] = 0;
        L2 = clens.length;
        var ctree = use_typed_arrays ? new Uint16Array(L2) : zero_fill_array(L2);
        for (i2 = 0; i2 < L2; ++i2) {
          bl_count[w = clens[i2]]++;
          if (maxlen < w) maxlen = w;
          ctree[i2] = 0;
        }
        bl_count[0] = 0;
        for (i2 = 1; i2 <= maxlen; ++i2) bl_count[i2 + 16] = ccode = ccode + bl_count[i2 - 1] << 1;
        for (i2 = 0; i2 < L2; ++i2) {
          ccode = clens[i2];
          if (ccode != 0) ctree[i2] = bl_count[ccode + 16]++;
        }
        var cleni = 0;
        for (i2 = 0; i2 < L2; ++i2) {
          cleni = clens[i2];
          if (cleni != 0) {
            ccode = bit_swap_n(ctree[i2], maxlen) >> maxlen - cleni;
            for (j2 = (1 << maxlen + 4 - cleni) - 1; j2 >= 0; --j2)
              cmap[ccode | j2 << cleni] = cleni & 15 | i2 << 4;
          }
        }
        return maxlen;
      }
      var fix_lmap = use_typed_arrays ? new Uint16Array(512) : zero_fill_array(512);
      var fix_dmap = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
      if (!use_typed_arrays) {
        for (var i = 0; i < 512; ++i) fix_lmap[i] = 0;
        for (i = 0; i < 32; ++i) fix_dmap[i] = 0;
      }
      (function() {
        var dlens = [];
        var i2 = 0;
        for (; i2 < 32; i2++) dlens.push(5);
        build_tree2(dlens, fix_dmap, 32);
        var clens = [];
        i2 = 0;
        for (; i2 <= 143; i2++) clens.push(8);
        for (; i2 <= 255; i2++) clens.push(9);
        for (; i2 <= 279; i2++) clens.push(7);
        for (; i2 <= 287; i2++) clens.push(8);
        build_tree2(clens, fix_lmap, 288);
      })();
      var _deflateRaw = (function _deflateRawIIFE() {
        var DST_LN_RE = use_typed_arrays ? new Uint8Array(32768) : [];
        var j2 = 0, k2 = 0;
        for (; j2 < DST_LN.length - 1; ++j2) {
          for (; k2 < DST_LN[j2 + 1]; ++k2) DST_LN_RE[k2] = j2;
        }
        for (; k2 < 32768; ++k2) DST_LN_RE[k2] = 29;
        var LEN_LN_RE = use_typed_arrays ? new Uint8Array(259) : [];
        for (j2 = 0, k2 = 0; j2 < LEN_LN.length - 1; ++j2) {
          for (; k2 < LEN_LN[j2 + 1]; ++k2) LEN_LN_RE[k2] = j2;
        }
        function write_stored(data, out) {
          var boff = 0;
          while (boff < data.length) {
            var L2 = Math.min(65535, data.length - boff);
            var h = boff + L2 == data.length;
            out.write_shift(1, +h);
            out.write_shift(2, L2);
            out.write_shift(2, ~L2 & 65535);
            while (L2-- > 0) out[out.l++] = data[boff++];
          }
          return out.l;
        }
        function write_huff_fixed(data, out) {
          var bl = 0;
          var boff = 0;
          var addrs = use_typed_arrays ? new Uint16Array(32768) : [];
          while (boff < data.length) {
            var L2 = (
              /* data.length - boff; */
              Math.min(65535, data.length - boff)
            );
            if (L2 < 10) {
              bl = write_bits_3(out, bl, +!!(boff + L2 == data.length));
              if (bl & 7) bl += 8 - (bl & 7);
              out.l = bl / 8 | 0;
              out.write_shift(2, L2);
              out.write_shift(2, ~L2 & 65535);
              while (L2-- > 0) out[out.l++] = data[boff++];
              bl = out.l * 8;
              continue;
            }
            bl = write_bits_3(out, bl, +!!(boff + L2 == data.length) + 2);
            var hash = 0;
            while (L2-- > 0) {
              var d = data[boff];
              hash = (hash << 5 ^ d) & 32767;
              var match = -1, mlen = 0;
              if (match = addrs[hash]) {
                match |= boff & ~32767;
                if (match > boff) match -= 32768;
                if (match < boff) while (data[match + mlen] == data[boff + mlen] && mlen < 250) ++mlen;
              }
              if (mlen > 2) {
                d = LEN_LN_RE[mlen];
                if (d <= 22) bl = write_bits_8(out, bl, bitswap8[d + 1] >> 1) - 1;
                else {
                  write_bits_8(out, bl, 3);
                  bl += 5;
                  write_bits_8(out, bl, bitswap8[d - 23] >> 5);
                  bl += 3;
                }
                var len_eb = d < 8 ? 0 : d - 4 >> 2;
                if (len_eb > 0) {
                  write_bits_16(out, bl, mlen - LEN_LN[d]);
                  bl += len_eb;
                }
                d = DST_LN_RE[boff - match];
                bl = write_bits_8(out, bl, bitswap8[d] >> 3);
                bl -= 3;
                var dst_eb = d < 4 ? 0 : d - 2 >> 1;
                if (dst_eb > 0) {
                  write_bits_16(out, bl, boff - match - DST_LN[d]);
                  bl += dst_eb;
                }
                for (var q3 = 0; q3 < mlen; ++q3) {
                  addrs[hash] = boff & 32767;
                  hash = (hash << 5 ^ data[boff]) & 32767;
                  ++boff;
                }
                L2 -= mlen - 1;
              } else {
                if (d <= 143) d = d + 48;
                else bl = write_bits_1(out, bl, 1);
                bl = write_bits_8(out, bl, bitswap8[d]);
                addrs[hash] = boff & 32767;
                ++boff;
              }
            }
            bl = write_bits_8(out, bl, 0) - 1;
          }
          out.l = (bl + 7) / 8 | 0;
          return out.l;
        }
        return function _deflateRaw2(data, out) {
          if (data.length < 8) return write_stored(data, out);
          return write_huff_fixed(data, out);
        };
      })();
      function _deflate(data) {
        var buf = new_buf(50 + Math.floor(data.length * 1.1));
        var off = _deflateRaw(data, buf);
        return buf.slice(0, off);
      }
      var dyn_lmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
      var dyn_dmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
      var dyn_cmap = use_typed_arrays ? new Uint16Array(128) : zero_fill_array(128);
      var dyn_len_1 = 1, dyn_len_2 = 1;
      function dyn(data, boff) {
        var _HLIT = read_bits_5(data, boff) + 257;
        boff += 5;
        var _HDIST = read_bits_5(data, boff) + 1;
        boff += 5;
        var _HCLEN = read_bits_4(data, boff) + 4;
        boff += 4;
        var w = 0;
        var clens = use_typed_arrays ? new Uint8Array(19) : zero_fill_array(19);
        var ctree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var maxlen = 1;
        var bl_count = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
        var next_code = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
        var L2 = clens.length;
        for (var i2 = 0; i2 < _HCLEN; ++i2) {
          clens[CLEN_ORDER[i2]] = w = read_bits_3(data, boff);
          if (maxlen < w) maxlen = w;
          bl_count[w]++;
          boff += 3;
        }
        var ccode = 0;
        bl_count[0] = 0;
        for (i2 = 1; i2 <= maxlen; ++i2) next_code[i2] = ccode = ccode + bl_count[i2 - 1] << 1;
        for (i2 = 0; i2 < L2; ++i2) if ((ccode = clens[i2]) != 0) ctree[i2] = next_code[ccode]++;
        var cleni = 0;
        for (i2 = 0; i2 < L2; ++i2) {
          cleni = clens[i2];
          if (cleni != 0) {
            ccode = bitswap8[ctree[i2]] >> 8 - cleni;
            for (var j2 = (1 << 7 - cleni) - 1; j2 >= 0; --j2) dyn_cmap[ccode | j2 << cleni] = cleni & 7 | i2 << 3;
          }
        }
        var hcodes = [];
        maxlen = 1;
        for (; hcodes.length < _HLIT + _HDIST; ) {
          ccode = dyn_cmap[read_bits_7(data, boff)];
          boff += ccode & 7;
          switch (ccode >>>= 3) {
            case 16:
              w = 3 + read_bits_2(data, boff);
              boff += 2;
              ccode = hcodes[hcodes.length - 1];
              while (w-- > 0) hcodes.push(ccode);
              break;
            case 17:
              w = 3 + read_bits_3(data, boff);
              boff += 3;
              while (w-- > 0) hcodes.push(0);
              break;
            case 18:
              w = 11 + read_bits_7(data, boff);
              boff += 7;
              while (w-- > 0) hcodes.push(0);
              break;
            default:
              hcodes.push(ccode);
              if (maxlen < ccode) maxlen = ccode;
              break;
          }
        }
        var h1 = hcodes.slice(0, _HLIT), h2 = hcodes.slice(_HLIT);
        for (i2 = _HLIT; i2 < 286; ++i2) h1[i2] = 0;
        for (i2 = _HDIST; i2 < 30; ++i2) h2[i2] = 0;
        dyn_len_1 = build_tree2(h1, dyn_lmap, 286);
        dyn_len_2 = build_tree2(h2, dyn_dmap, 30);
        return boff;
      }
      function inflate2(data, usz) {
        if (data[0] == 3 && !(data[1] & 3)) {
          return [new_raw_buf(usz), 2];
        }
        var boff = 0;
        var header = 0;
        var outbuf = new_unsafe_buf(usz ? usz : 1 << 18);
        var woff = 0;
        var OL = outbuf.length >>> 0;
        var max_len_1 = 0, max_len_2 = 0;
        while ((header & 1) == 0) {
          header = read_bits_3(data, boff);
          boff += 3;
          if (header >>> 1 == 0) {
            if (boff & 7) boff += 8 - (boff & 7);
            var sz = data[boff >>> 3] | data[(boff >>> 3) + 1] << 8;
            boff += 32;
            if (sz > 0) {
              if (!usz && OL < woff + sz) {
                outbuf = realloc(outbuf, woff + sz);
                OL = outbuf.length;
              }
              while (sz-- > 0) {
                outbuf[woff++] = data[boff >>> 3];
                boff += 8;
              }
            }
            continue;
          } else if (header >> 1 == 1) {
            max_len_1 = 9;
            max_len_2 = 5;
          } else {
            boff = dyn(data, boff);
            max_len_1 = dyn_len_1;
            max_len_2 = dyn_len_2;
          }
          for (; ; ) {
            if (!usz && OL < woff + 32767) {
              outbuf = realloc(outbuf, woff + 32767);
              OL = outbuf.length;
            }
            var bits = read_bits_n(data, boff, max_len_1);
            var code = header >>> 1 == 1 ? fix_lmap[bits] : dyn_lmap[bits];
            boff += code & 15;
            code >>>= 4;
            if ((code >>> 8 & 255) === 0) outbuf[woff++] = code;
            else if (code == 256) break;
            else {
              code -= 257;
              var len_eb = code < 8 ? 0 : code - 4 >> 2;
              if (len_eb > 5) len_eb = 0;
              var tgt = woff + LEN_LN[code];
              if (len_eb > 0) {
                tgt += read_bits_n(data, boff, len_eb);
                boff += len_eb;
              }
              bits = read_bits_n(data, boff, max_len_2);
              code = header >>> 1 == 1 ? fix_dmap[bits] : dyn_dmap[bits];
              boff += code & 15;
              code >>>= 4;
              var dst_eb = code < 4 ? 0 : code - 2 >> 1;
              var dst = DST_LN[code];
              if (dst_eb > 0) {
                dst += read_bits_n(data, boff, dst_eb);
                boff += dst_eb;
              }
              if (!usz && OL < tgt) {
                outbuf = realloc(outbuf, tgt + 100);
                OL = outbuf.length;
              }
              while (woff < tgt) {
                outbuf[woff] = outbuf[woff - dst];
                ++woff;
              }
            }
          }
        }
        if (usz) return [outbuf, boff + 7 >>> 3];
        return [outbuf.slice(0, woff), boff + 7 >>> 3];
      }
      function _inflate(payload, usz) {
        var data = payload.slice(payload.l || 0);
        var out = inflate2(data, usz);
        payload.l += out[1];
        return out[0];
      }
      function warn_or_throw(wrn, msg) {
        if (wrn) {
          if (typeof console !== "undefined") console.error(msg);
        } else throw new Error(msg);
      }
      function parse_zip(file, options) {
        var blob = file;
        prep_blob(blob, 0);
        var FileIndex = [], FullPaths = [];
        var o = {
          FileIndex,
          FullPaths
        };
        init_cfb(o, { root: options.root });
        var i2 = blob.length - 4;
        while ((blob[i2] != 80 || blob[i2 + 1] != 75 || blob[i2 + 2] != 5 || blob[i2 + 3] != 6) && i2 >= 0) --i2;
        blob.l = i2 + 4;
        blob.l += 4;
        var fcnt = blob.read_shift(2);
        blob.l += 6;
        var start_cd = blob.read_shift(4);
        blob.l = start_cd;
        for (i2 = 0; i2 < fcnt; ++i2) {
          blob.l += 20;
          var csz = blob.read_shift(4);
          var usz = blob.read_shift(4);
          var namelen = blob.read_shift(2);
          var efsz = blob.read_shift(2);
          var fcsz = blob.read_shift(2);
          blob.l += 8;
          var offset = blob.read_shift(4);
          var EF = parse_extra_field(blob.slice(blob.l + namelen, blob.l + namelen + efsz));
          blob.l += namelen + efsz + fcsz;
          var L2 = blob.l;
          blob.l = offset + 4;
          parse_local_file(blob, csz, usz, o, EF);
          blob.l = L2;
        }
        return o;
      }
      function parse_local_file(blob, csz, usz, o, EF) {
        blob.l += 2;
        var flags = blob.read_shift(2);
        var meth = blob.read_shift(2);
        var date = parse_dos_date(blob);
        if (flags & 8257) throw new Error("Unsupported ZIP encryption");
        var crc322 = blob.read_shift(4);
        var _csz = blob.read_shift(4);
        var _usz = blob.read_shift(4);
        var namelen = blob.read_shift(2);
        var efsz = blob.read_shift(2);
        var name = "";
        for (var i2 = 0; i2 < namelen; ++i2) name += String.fromCharCode(blob[blob.l++]);
        if (efsz) {
          var ef = parse_extra_field(blob.slice(blob.l, blob.l + efsz));
          if ((ef[21589] || {}).mt) date = ef[21589].mt;
          if (((EF || {})[21589] || {}).mt) date = EF[21589].mt;
        }
        blob.l += efsz;
        var data = blob.slice(blob.l, blob.l + _csz);
        switch (meth) {
          case 8:
            data = _inflateRawSync(blob, _usz);
            break;
          case 0:
            break;
          // TODO: scan for magic number
          default:
            throw new Error("Unsupported ZIP Compression method " + meth);
        }
        var wrn = false;
        if (flags & 8) {
          crc322 = blob.read_shift(4);
          if (crc322 == 134695760) {
            crc322 = blob.read_shift(4);
            wrn = true;
          }
          _csz = blob.read_shift(4);
          _usz = blob.read_shift(4);
        }
        if (_csz != csz) warn_or_throw(wrn, "Bad compressed size: " + csz + " != " + _csz);
        if (_usz != usz) warn_or_throw(wrn, "Bad uncompressed size: " + usz + " != " + _usz);
        var _crc32 = CRC32.buf(data, 0);
        if (crc322 >> 0 != _crc32 >> 0) warn_or_throw(wrn, "Bad CRC32 checksum: " + crc322 + " != " + _crc32);
        cfb_add(o, name, data, { unsafe: true, mt: date });
      }
      function write_zip(cfb, options) {
        var _opts = options || {};
        var out = [], cdirs = [];
        var o = new_buf(1);
        var method = _opts.compression ? 8 : 0, flags = 0;
        var desc = false;
        if (desc) flags |= 8;
        var i2 = 0, j2 = 0;
        var start_cd = 0, fcnt = 0;
        var root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0];
        var crcs = [];
        var sz_cd = 0;
        for (i2 = 1; i2 < cfb.FullPaths.length; ++i2) {
          fp = cfb.FullPaths[i2].slice(root.length);
          fi = cfb.FileIndex[i2];
          if (!fi.size || !fi.content || fp == "Sh33tJ5") continue;
          var start = start_cd;
          var namebuf = new_buf(fp.length);
          for (j2 = 0; j2 < fp.length; ++j2) namebuf.write_shift(1, fp.charCodeAt(j2) & 127);
          namebuf = namebuf.slice(0, namebuf.l);
          crcs[fcnt] = CRC32.buf(fi.content, 0);
          var outbuf = fi.content;
          if (method == 8) outbuf = _deflateRawSync(outbuf);
          o = new_buf(30);
          o.write_shift(4, 67324752);
          o.write_shift(2, 20);
          o.write_shift(2, flags);
          o.write_shift(2, method);
          if (fi.mt) write_dos_date(o, fi.mt);
          else o.write_shift(4, 0);
          o.write_shift(-4, flags & 8 ? 0 : crcs[fcnt]);
          o.write_shift(4, flags & 8 ? 0 : outbuf.length);
          o.write_shift(4, flags & 8 ? 0 : fi.content.length);
          o.write_shift(2, namebuf.length);
          o.write_shift(2, 0);
          start_cd += o.length;
          out.push(o);
          start_cd += namebuf.length;
          out.push(namebuf);
          start_cd += outbuf.length;
          out.push(outbuf);
          if (flags & 8) {
            o = new_buf(12);
            o.write_shift(-4, crcs[fcnt]);
            o.write_shift(4, outbuf.length);
            o.write_shift(4, fi.content.length);
            start_cd += o.l;
            out.push(o);
          }
          o = new_buf(46);
          o.write_shift(4, 33639248);
          o.write_shift(2, 0);
          o.write_shift(2, 20);
          o.write_shift(2, flags);
          o.write_shift(2, method);
          o.write_shift(4, 0);
          o.write_shift(-4, crcs[fcnt]);
          o.write_shift(4, outbuf.length);
          o.write_shift(4, fi.content.length);
          o.write_shift(2, namebuf.length);
          o.write_shift(2, 0);
          o.write_shift(2, 0);
          o.write_shift(2, 0);
          o.write_shift(2, 0);
          o.write_shift(4, 0);
          o.write_shift(4, start);
          sz_cd += o.l;
          cdirs.push(o);
          sz_cd += namebuf.length;
          cdirs.push(namebuf);
          ++fcnt;
        }
        o = new_buf(22);
        o.write_shift(4, 101010256);
        o.write_shift(2, 0);
        o.write_shift(2, 0);
        o.write_shift(2, fcnt);
        o.write_shift(2, fcnt);
        o.write_shift(4, sz_cd);
        o.write_shift(4, start_cd);
        o.write_shift(2, 0);
        return bconcat([bconcat(out), bconcat(cdirs), o]);
      }
      var ContentTypeMap = {
        "htm": "text/html",
        "xml": "text/xml",
        "gif": "image/gif",
        "jpg": "image/jpeg",
        "png": "image/png",
        "mso": "application/x-mso",
        "thmx": "application/vnd.ms-officetheme",
        "sh33tj5": "application/octet-stream"
      };
      function get_content_type(fi, fp) {
        if (fi.ctype) return fi.ctype;
        var ext = fi.name || "", m2 = ext.match(/\.([^\.]+)$/);
        if (m2 && ContentTypeMap[m2[1]]) return ContentTypeMap[m2[1]];
        if (fp) {
          m2 = (ext = fp).match(/[\.\\]([^\.\\])+$/);
          if (m2 && ContentTypeMap[m2[1]]) return ContentTypeMap[m2[1]];
        }
        return "application/octet-stream";
      }
      function write_base64_76(bstr) {
        var data = Base64_encode(bstr);
        var o = [];
        for (var i2 = 0; i2 < data.length; i2 += 76) o.push(data.slice(i2, i2 + 76));
        return o.join("\r\n") + "\r\n";
      }
      function write_quoted_printable(text) {
        var encoded = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(c) {
          var w = c.charCodeAt(0).toString(16).toUpperCase();
          return "=" + (w.length == 1 ? "0" + w : w);
        });
        encoded = encoded.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");
        if (encoded.charAt(0) == "\n") encoded = "=0D" + encoded.slice(1);
        encoded = encoded.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, "\n=0A").replace(/([^\r\n])\n/mg, "$1=0A");
        var o = [], split = encoded.split("\r\n");
        for (var si = 0; si < split.length; ++si) {
          var str = split[si];
          if (str.length == 0) {
            o.push("");
            continue;
          }
          for (var i2 = 0; i2 < str.length; ) {
            var end = 76;
            var tmp = str.slice(i2, i2 + end);
            if (tmp.charAt(end - 1) == "=") end--;
            else if (tmp.charAt(end - 2) == "=") end -= 2;
            else if (tmp.charAt(end - 3) == "=") end -= 3;
            tmp = str.slice(i2, i2 + end);
            i2 += end;
            if (i2 < str.length) tmp += "=";
            o.push(tmp);
          }
        }
        return o.join("\r\n");
      }
      function parse_quoted_printable(data) {
        var o = [];
        for (var di = 0; di < data.length; ++di) {
          var line = data[di];
          while (di <= data.length && line.charAt(line.length - 1) == "=") line = line.slice(0, line.length - 1) + data[++di];
          o.push(line);
        }
        for (var oi = 0; oi < o.length; ++oi) o[oi] = o[oi].replace(/[=][0-9A-Fa-f]{2}/g, function($$) {
          return String.fromCharCode(parseInt($$.slice(1), 16));
        });
        return s2a(o.join("\r\n"));
      }
      function parse_mime(cfb, data, root) {
        var fname = "", cte = "", ctype = "", fdata;
        var di = 0;
        for (; di < 10; ++di) {
          var line = data[di];
          if (!line || line.match(/^\s*$/)) break;
          var m2 = line.match(/^(.*?):\s*([^\s].*)$/);
          if (m2) switch (m2[1].toLowerCase()) {
            case "content-location":
              fname = m2[2].trim();
              break;
            case "content-type":
              ctype = m2[2].trim();
              break;
            case "content-transfer-encoding":
              cte = m2[2].trim();
              break;
          }
        }
        ++di;
        switch (cte.toLowerCase()) {
          case "base64":
            fdata = s2a(Base64_decode(data.slice(di).join("")));
            break;
          case "quoted-printable":
            fdata = parse_quoted_printable(data.slice(di));
            break;
          default:
            throw new Error("Unsupported Content-Transfer-Encoding " + cte);
        }
        var file = cfb_add(cfb, fname.slice(root.length), fdata, { unsafe: true });
        if (ctype) file.ctype = ctype;
      }
      function parse_mad(file, options) {
        if (a2s(file.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
        var root = options && options.root || "";
        var data = (has_buf && Buffer.isBuffer(file) ? file.toString("binary") : a2s(file)).split("\r\n");
        var di = 0, row = "";
        for (di = 0; di < data.length; ++di) {
          row = data[di];
          if (!/^Content-Location:/i.test(row)) continue;
          row = row.slice(row.indexOf("file"));
          if (!root) root = row.slice(0, row.lastIndexOf("/") + 1);
          if (row.slice(0, root.length) == root) continue;
          while (root.length > 0) {
            root = root.slice(0, root.length - 1);
            root = root.slice(0, root.lastIndexOf("/") + 1);
            if (row.slice(0, root.length) == root) break;
          }
        }
        var mboundary = (data[1] || "").match(/boundary="(.*?)"/);
        if (!mboundary) throw new Error("MAD cannot find boundary");
        var boundary = "--" + (mboundary[1] || "");
        var FileIndex = [], FullPaths = [];
        var o = {
          FileIndex,
          FullPaths
        };
        init_cfb(o);
        var start_di, fcnt = 0;
        for (di = 0; di < data.length; ++di) {
          var line = data[di];
          if (line !== boundary && line !== boundary + "--") continue;
          if (fcnt++) parse_mime(o, data.slice(start_di, di), root);
          start_di = di;
        }
        return o;
      }
      function write_mad(cfb, options) {
        var opts = options || {};
        var boundary = opts.boundary || "SheetJS";
        boundary = "------=" + boundary;
        var out = [
          "MIME-Version: 1.0",
          'Content-Type: multipart/related; boundary="' + boundary.slice(2) + '"',
          "",
          "",
          ""
        ];
        var root = cfb.FullPaths[0], fp = root, fi = cfb.FileIndex[0];
        for (var i2 = 1; i2 < cfb.FullPaths.length; ++i2) {
          fp = cfb.FullPaths[i2].slice(root.length);
          fi = cfb.FileIndex[i2];
          if (!fi.size || !fi.content || fp == "Sh33tJ5") continue;
          fp = fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(c) {
            return "_x" + c.charCodeAt(0).toString(16) + "_";
          }).replace(/[\u0080-\uFFFF]/g, function(u) {
            return "_u" + u.charCodeAt(0).toString(16) + "_";
          });
          var ca = fi.content;
          var cstr = has_buf && Buffer.isBuffer(ca) ? ca.toString("binary") : a2s(ca);
          var dispcnt = 0, L2 = Math.min(1024, cstr.length), cc = 0;
          for (var csl = 0; csl <= L2; ++csl) if ((cc = cstr.charCodeAt(csl)) >= 32 && cc < 128) ++dispcnt;
          var qp = dispcnt >= L2 * 4 / 5;
          out.push(boundary);
          out.push("Content-Location: " + (opts.root || "file:///C:/SheetJS/") + fp);
          out.push("Content-Transfer-Encoding: " + (qp ? "quoted-printable" : "base64"));
          out.push("Content-Type: " + get_content_type(fi, fp));
          out.push("");
          out.push(qp ? write_quoted_printable(cstr) : write_base64_76(cstr));
        }
        out.push(boundary + "--\r\n");
        return out.join("\r\n");
      }
      function cfb_new(opts) {
        var o = {};
        init_cfb(o, opts);
        return o;
      }
      function cfb_add(cfb, name, content, opts) {
        var unsafe = opts && opts.unsafe;
        if (!unsafe) init_cfb(cfb);
        var file = !unsafe && CFB2.find(cfb, name);
        if (!file) {
          var fpath = cfb.FullPaths[0];
          if (name.slice(0, fpath.length) == fpath) fpath = name;
          else {
            if (fpath.slice(-1) != "/") fpath += "/";
            fpath = (fpath + name).replace("//", "/");
          }
          file = { name: filename(name), type: 2 };
          cfb.FileIndex.push(file);
          cfb.FullPaths.push(fpath);
          if (!unsafe) CFB2.utils.cfb_gc(cfb);
        }
        file.content = content;
        file.size = content ? content.length : 0;
        if (opts) {
          if (opts.CLSID) file.clsid = opts.CLSID;
          if (opts.mt) file.mt = opts.mt;
          if (opts.ct) file.ct = opts.ct;
        }
        return file;
      }
      function cfb_del(cfb, name) {
        init_cfb(cfb);
        var file = CFB2.find(cfb, name);
        if (file) {
          for (var j2 = 0; j2 < cfb.FileIndex.length; ++j2) if (cfb.FileIndex[j2] == file) {
            cfb.FileIndex.splice(j2, 1);
            cfb.FullPaths.splice(j2, 1);
            return true;
          }
        }
        return false;
      }
      function cfb_mov(cfb, old_name, new_name) {
        init_cfb(cfb);
        var file = CFB2.find(cfb, old_name);
        if (file) {
          for (var j2 = 0; j2 < cfb.FileIndex.length; ++j2) if (cfb.FileIndex[j2] == file) {
            cfb.FileIndex[j2].name = filename(new_name);
            cfb.FullPaths[j2] = new_name;
            return true;
          }
        }
        return false;
      }
      function cfb_gc(cfb) {
        rebuild_cfb(cfb, true);
      }
      exports3.find = find2;
      exports3.read = read2;
      exports3.parse = parse;
      exports3.write = write;
      exports3.writeFile = write_file;
      exports3.utils = {
        cfb_new,
        cfb_add,
        cfb_del,
        cfb_mov,
        cfb_gc,
        ReadShift,
        CheckField,
        prep_blob,
        bconcat,
        use_zlib,
        _deflateRaw: _deflate,
        _inflateRaw: _inflate,
        consts
      };
      return exports3;
    })();
    if (typeof __require !== "undefined" && typeof module !== "undefined" && typeof DO_NOT_EXPORT_CFB === "undefined") {
      module.exports = CFB2;
    }
  }
});

// node_modules/fast-xml-parser/src/util.js
var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
var regexName = new RegExp("^" + nameRegexp + "$");
function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
var isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === "undefined");
};
function isExist(v2) {
  return typeof v2 !== "undefined";
}
var DANGEROUS_PROPERTY_NAMES = [
  // '__proto__',
  // 'constructor',
  // 'prototype',
  "hasOwnProperty",
  "toString",
  "valueOf",
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__"
];
var criticalProperties = ["__proto__", "constructor", "prototype"];

// node_modules/fast-xml-parser/src/validator.js
var defaultOptions = {
  allowBooleanAttributes: false,
  //A tag can have attributes without any value
  unpairedTags: []
};
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions, options);
  const tags = [];
  let tagFound = false;
  let reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    xmlData = xmlData.substr(1);
  }
  for (let i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
      i += 2;
      i = readPI(xmlData, i);
      if (i.err) return i;
    } else if (xmlData[i] === "<") {
      let tagStartPos = i;
      i++;
      if (xmlData[i] === "!") {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === "/") {
          closingTag = true;
          i++;
        }
        let tagName2 = "";
        for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
          tagName2 += xmlData[i];
        }
        tagName2 = tagName2.trim();
        if (tagName2[tagName2.length - 1] === "/") {
          tagName2 = tagName2.substring(0, tagName2.length - 1);
          i--;
        }
        if (!validateTagName(tagName2)) {
          let msg;
          if (tagName2.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName2 + "' is an invalid name.";
          }
          return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
        }
        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject("InvalidAttr", "Attributes for '" + tagName2 + "' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;
        if (attrStr[attrStr.length - 1] === "/") {
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
          } else {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName2 + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName2 + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else if (tags.length === 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName2 + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName2 !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject(
                "InvalidTag",
                "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName2 + "'.",
                getLineNumberForPosition(xmlData, tagStartPos)
              );
            }
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
          if (reachedRoot === true) {
            return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
          } else if (options.unpairedTags.indexOf(tagName2) !== -1) {
          } else {
            tags.push({ tagName: tagName2, tagStartPos });
          }
          tagFound = true;
        }
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            if (xmlData[i + 1] === "!") {
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i + 1] === "?") {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === "&") {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        }
        if (xmlData[i] === "<") {
          i--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }
  if (!tagFound) {
    return getErrorObject("InvalidXml", "Start tag expected.", 1);
  } else if (tags.length == 1) {
    return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  }
  return true;
}
function isWhiteSpace(char) {
  return char === " " || char === "	" || char === "\n" || char === "\r";
}
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == "?" || xmlData[i] == " ") {
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === "xml") {
        return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}
function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "<") {
        angleBracketsCount++;
      } else if (xmlData[i] === ">") {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  }
  return i;
}
var doubleQuote = '"';
var singleQuote = "'";
function readAttributeStr(xmlData, i) {
  let attrStr = "";
  let startChar = "";
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === "") {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
      } else {
        startChar = "";
      }
    } else if (xmlData[i] === ">") {
      if (startChar === "") {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== "") {
    return false;
  }
  return {
    value: attrStr,
    index: i,
    tagClosed
  };
}
var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function validateAttributeString(attrStr, options) {
  const matches = getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
      return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
    }
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
      attrNames[attrName] = 1;
    } else {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === "x") {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ";")
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}
function validateAmpersand(xmlData, i) {
  i++;
  if (xmlData[i] === ";")
    return -1;
  if (xmlData[i] === "#") {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ";")
      break;
    return -1;
  }
  return i;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
function validateAttrName(attrName) {
  return isName(attrName);
}
function validateTagName(tagname) {
  return isName(tagname);
}
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}

// node_modules/@nodable/entities/src/entities.js
var CURRENCY = {
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  euro: "\u20AC",
  dollar: "$",
  fnof: "\u0192",
  inr: "\u20B9",
  af: "\u060B",
  birr: "\u1265\u122D",
  peso: "\u20B1",
  rub: "\u20BD",
  won: "\u20A9",
  yuan: "\xA5",
  cedil: "\xB8"
};
var XML = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
};
var COMMON_HTML = {
  nbsp: "\xA0",
  copy: "\xA9",
  reg: "\xAE",
  trade: "\u2122",
  mdash: "\u2014",
  ndash: "\u2013",
  hellip: "\u2026",
  laquo: "\xAB",
  raquo: "\xBB",
  lsquo: "\u2018",
  rsquo: "\u2019",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bull: "\u2022",
  para: "\xB6",
  sect: "\xA7",
  deg: "\xB0",
  frac12: "\xBD",
  frac14: "\xBC",
  frac34: "\xBE"
};

// node_modules/@nodable/entities/src/EntityDecoder.js
var ENTITY_ACTION = Object.freeze({
  /** Resolve and expand the entity normally. */
  ALLOW: "allow",
  /** Silently skip this entity — it will not be registered. */
  BLOCK: "block",
  /** Throw an error, aborting entity registration entirely. */
  THROW: "throw"
});
var SPECIAL_CHARS = new Set("!?\\\\/[]$%{}^&*()<>|+");
function validateEntityName(name) {
  if (name[0] === "#") {
    throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${name}"`);
  }
  for (const ch of name) {
    if (SPECIAL_CHARS.has(ch)) {
      throw new Error(`[EntityReplacer] Invalid character '${ch}' in entity name: "${name}"`);
    }
  }
  return name;
}
function mergeEntityMaps(...maps) {
  const out = /* @__PURE__ */ Object.create(null);
  for (const map of maps) {
    if (!map) continue;
    for (const key of Object.keys(map)) {
      const raw = map[key];
      if (typeof raw === "string") {
        out[key] = raw;
      } else if (raw && typeof raw === "object" && raw.val !== void 0) {
        const val = raw.val;
        if (typeof val === "string") {
          out[key] = val;
        }
      }
    }
  }
  return out;
}
var LIMIT_TIER_EXTERNAL = "external";
var LIMIT_TIER_BASE = "base";
var LIMIT_TIER_ALL = "all";
function parseLimitTiers(raw) {
  if (!raw || raw === LIMIT_TIER_EXTERNAL) return /* @__PURE__ */ new Set([LIMIT_TIER_EXTERNAL]);
  if (raw === LIMIT_TIER_ALL) return /* @__PURE__ */ new Set([LIMIT_TIER_ALL]);
  if (raw === LIMIT_TIER_BASE) return /* @__PURE__ */ new Set([LIMIT_TIER_BASE]);
  if (Array.isArray(raw)) return new Set(raw);
  return /* @__PURE__ */ new Set([LIMIT_TIER_EXTERNAL]);
}
var NCR_LEVEL = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 });
var XML10_ALLOWED_C0 = /* @__PURE__ */ new Set([9, 10, 13]);
function parseNCRConfig(ncr) {
  if (!ncr) {
    return { xmlVersion: 1, onLevel: NCR_LEVEL.allow, nullLevel: NCR_LEVEL.remove };
  }
  const xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1;
  const onLevel = NCR_LEVEL[ncr.onNCR] ?? NCR_LEVEL.allow;
  const nullLevel = NCR_LEVEL[ncr.nullNCR] ?? NCR_LEVEL.remove;
  const clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
  return { xmlVersion, onLevel, nullLevel: clampedNull };
}
var EntityDecoder = class {
  /**
   * @param {object} [options]
   * @param {object|null}  [options.namedEntities]        — extra named entities merged into base map
   * @param {object}  [options.limit]                 — security limits
   * @param {number}       [options.limit.maxTotalExpansions=0]  — 0 = unlimited
   * @param {number}       [options.limit.maxExpandedLength=0]   — 0 = unlimited
   * @param {'external'|'base'|'all'|string[]} [options.limit.applyLimitsTo='external']
   *   Which entity tiers count against the security limits:
   *   - 'external' (default) — only input/runtime + persistent external entities
   *   - 'base'               — only DEFAULT_XML_ENTITIES + namedEntities
   *   - 'all'                — every entity regardless of tier
   *   - string[]             — explicit combination, e.g. ['external', 'base']
   * @param {((resolved: string, original: string) => string)|null} [options.postCheck=null]
   * @param {string[]} [options.remove=[]] — entity names (e.g. ['nbsp', '#13']) to delete (replace with empty string)
   * @param {string[]} [options.leave=[]]  — entity names to keep as literal (unchanged in output)
   * @param {object}   [options.ncr]       — Numeric Character Reference controls
   * @param {1.0|1.1}  [options.ncr.xmlVersion=1.0]
   *   XML version governing which codepoint ranges are restricted:
   *   - 1.0 — C0 controls U+0001–U+001F (except U+0009/000A/000D) are prohibited
   *   - 1.1 — C0 controls are allowed when written as NCRs; C1 (U+007F–U+009F) decoded as-is
   * @param {'allow'|'leave'|'remove'|'throw'} [options.ncr.onNCR='allow']
   *   Base action for numeric references. Severity order: allow < leave < remove < throw.
   *   For codepoint ranges that carry a minimum level (surrogates → remove, XML 1.0 C0 → remove),
   *   the effective action is max(onNCR, rangeMinimum).
   * @param {'remove'|'throw'} [options.ncr.nullNCR='remove']
   *   Action for U+0000 (null). 'allow' and 'leave' are clamped to 'remove' since null is never safe.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onExternalEntity=null]
   *   Hook called when an external entity is registered via `setExternalEntities()` or
   *   `addExternalEntity()`. Return `ENTITY_ACTION.ALLOW` to accept the entity,
   *   `ENTITY_ACTION.BLOCK` to silently skip it, or `ENTITY_ACTION.THROW` to abort with an error.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onInputEntity=null]
   *   Hook called when an input entity is registered via `addInputEntities()`. Return
   *   `ENTITY_ACTION.ALLOW` to accept, `ENTITY_ACTION.BLOCK` to silently skip, or
   *   `ENTITY_ACTION.THROW` to abort with an error.
   */
  constructor(options = {}) {
    this._limit = options.limit || {};
    this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
    this._maxExpandedLength = this._limit.maxExpandedLength || 0;
    this._postCheck = typeof options.postCheck === "function" ? options.postCheck : (r) => r;
    this._limitTiers = parseLimitTiers(this._limit.applyLimitsTo ?? LIMIT_TIER_EXTERNAL);
    this._numericAllowed = options.numericAllowed ?? true;
    this._baseMap = mergeEntityMaps(XML, options.namedEntities || null);
    this._externalMap = /* @__PURE__ */ Object.create(null);
    this._inputMap = /* @__PURE__ */ Object.create(null);
    this._totalExpansions = 0;
    this._expandedLength = 0;
    this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
    this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);
    const ncrCfg = parseNCRConfig(options.ncr);
    this._ncrXmlVersion = ncrCfg.xmlVersion;
    this._ncrOnLevel = ncrCfg.onLevel;
    this._ncrNullLevel = ncrCfg.nullLevel;
    this._onExternalEntity = typeof options.onExternalEntity === "function" ? options.onExternalEntity : null;
    this._onInputEntity = typeof options.onInputEntity === "function" ? options.onInputEntity : null;
  }
  // -------------------------------------------------------------------------
  // Private: registration hook dispatch
  // -------------------------------------------------------------------------
  /**
   * Invoke a registration hook for a single entity name/value pair.
   * Returns true when the entity should be accepted, false when it should be
   * silently skipped (BLOCK), and throws when the hook returns THROW.
   *
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} hook
   * @param {string} name
   * @param {string} value
   * @param {string} context  — used in error messages ('external' | 'input')
   * @returns {boolean}  true = accept, false = skip
   */
  _applyRegistrationHook(hook, name, value, context) {
    if (!hook) return true;
    const action = hook(name, value);
    if (action === ENTITY_ACTION.BLOCK) return false;
    if (action === ENTITY_ACTION.THROW) {
      throw new Error(
        `[EntityDecoder] Registration of ${context} entity "&${name};" was rejected by hook`
      );
    }
    return true;
  }
  // -------------------------------------------------------------------------
  // Persistent external entity registration
  // -------------------------------------------------------------------------
  /**
   * Replace the full set of persistent external entities.
   * All keys are validated — throws on invalid characters.
   * If `onExternalEntity` is set, it is called once per entry; entries that
   * return `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW`
   * aborts the whole call.
   * @param {Record<string, string | { regex?: RegExp, val: string }>} map
   */
  setExternalEntities(map) {
    if (map) {
      for (const key of Object.keys(map)) {
        validateEntityName(key);
      }
    }
    if (!this._onExternalEntity) {
      this._externalMap = mergeEntityMaps(map);
      return;
    }
    const flat = mergeEntityMaps(map);
    const filtered = /* @__PURE__ */ Object.create(null);
    for (const [name, value] of Object.entries(flat)) {
      if (this._applyRegistrationHook(this._onExternalEntity, name, value, "external")) {
        filtered[name] = value;
      }
    }
    this._externalMap = filtered;
  }
  /**
   * Add a single persistent external entity.
   * If `onExternalEntity` is set it is called before the entity is stored;
   * `ENTITY_ACTION.BLOCK` silently skips storage, `ENTITY_ACTION.THROW` raises.
   * @param {string} key
   * @param {string} value
   */
  addExternalEntity(key, value) {
    validateEntityName(key);
    if (typeof value === "string" && value.indexOf("&") === -1) {
      if (this._applyRegistrationHook(this._onExternalEntity, key, value, "external")) {
        this._externalMap[key] = value;
      }
    }
  }
  // -------------------------------------------------------------------------
  // Input / runtime entity registration (per document)
  // -------------------------------------------------------------------------
  /**
   * Inject DOCTYPE entities for the current document.
   * Also resets per-document expansion counters.
   * If `onInputEntity` is set it is called once per entry; entries returning
   * `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW` aborts.
   * @param {Record<string, string | { regx?: RegExp, regex?: RegExp, val: string }>} map
   */
  addInputEntities(map) {
    this._totalExpansions = 0;
    this._expandedLength = 0;
    if (!this._onInputEntity) {
      this._inputMap = mergeEntityMaps(map);
      return;
    }
    const flat = mergeEntityMaps(map);
    const filtered = /* @__PURE__ */ Object.create(null);
    for (const [name, value] of Object.entries(flat)) {
      if (this._applyRegistrationHook(this._onInputEntity, name, value, "input")) {
        filtered[name] = value;
      }
    }
    this._inputMap = filtered;
  }
  // -------------------------------------------------------------------------
  // Per-document reset
  // -------------------------------------------------------------------------
  /**
   * Wipe input/runtime entities and reset counters.
   * Call this before processing each new document.
   * @returns {this}
   */
  reset() {
    this._inputMap = /* @__PURE__ */ Object.create(null);
    this._totalExpansions = 0;
    this._expandedLength = 0;
    return this;
  }
  // -------------------------------------------------------------------------
  // XML version (can be set after construction, e.g. once parser reads <?xml?>)
  // -------------------------------------------------------------------------
  /**
   * Update the XML version used for NCR classification.
   * Call this as soon as the document's `<?xml version="...">` declaration is parsed.
   * @param {1.0|1.1|number} version
   */
  setXmlVersion(version) {
    this._ncrXmlVersion = version === 1.1 ? 1.1 : 1;
  }
  // -------------------------------------------------------------------------
  // Primary API
  // -------------------------------------------------------------------------
  /**
   * Replace all entity references in `str` in a single pass.
   *
   * @param {string} str
   * @returns {string}
   */
  decode(str) {
    if (typeof str !== "string" || str.length === 0) return str;
    if (str.indexOf("&") === -1) return str;
    const original = str;
    const chunks = [];
    const len = str.length;
    let last = 0;
    let i = 0;
    const limitExpansions = this._maxTotalExpansions > 0;
    const limitLength = this._maxExpandedLength > 0;
    const checkLimits = limitExpansions || limitLength;
    while (i < len) {
      if (str.charCodeAt(i) !== 38) {
        i++;
        continue;
      }
      let j2 = i + 1;
      while (j2 < len && str.charCodeAt(j2) !== 59 && j2 - i <= 32) j2++;
      if (j2 >= len || str.charCodeAt(j2) !== 59) {
        i++;
        continue;
      }
      const token = str.slice(i + 1, j2);
      if (token.length === 0) {
        i++;
        continue;
      }
      let replacement;
      let tier;
      if (this._removeSet.has(token)) {
        replacement = "";
        if (tier === void 0) {
          tier = LIMIT_TIER_EXTERNAL;
        }
      } else if (this._leaveSet.has(token)) {
        i++;
        continue;
      } else if (token.charCodeAt(0) === 35) {
        const ncrResult = this._resolveNCR(token);
        if (ncrResult === void 0) {
          i++;
          continue;
        }
        replacement = ncrResult;
        tier = LIMIT_TIER_BASE;
      } else {
        const resolved = this._resolveName(token);
        replacement = resolved?.value;
        tier = resolved?.tier;
      }
      if (replacement === void 0) {
        i++;
        continue;
      }
      if (i > last) chunks.push(str.slice(last, i));
      chunks.push(replacement);
      last = j2 + 1;
      i = last;
      if (checkLimits && this._tierCounts(tier)) {
        if (limitExpansions) {
          this._totalExpansions++;
          if (this._totalExpansions > this._maxTotalExpansions) {
            throw new Error(
              `[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`
            );
          }
        }
        if (limitLength) {
          const delta = replacement.length - (token.length + 2);
          if (delta > 0) {
            this._expandedLength += delta;
            if (this._expandedLength > this._maxExpandedLength) {
              throw new Error(
                `[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`
              );
            }
          }
        }
      }
    }
    if (last < len) chunks.push(str.slice(last));
    const result = chunks.length === 0 ? str : chunks.join("");
    return this._postCheck(result, original);
  }
  // -------------------------------------------------------------------------
  // Private: limit tier check
  // -------------------------------------------------------------------------
  /**
   * Returns true if a resolved entity of the given tier should count
   * against the expansion/length limits.
   * @param {string} tier  — LIMIT_TIER_EXTERNAL | LIMIT_TIER_BASE
   * @returns {boolean}
   */
  _tierCounts(tier) {
    if (this._limitTiers.has(LIMIT_TIER_ALL)) return true;
    return this._limitTiers.has(tier);
  }
  // -------------------------------------------------------------------------
  // Private: entity resolution
  // -------------------------------------------------------------------------
  /**
   * Resolve a named entity token (without & and ;).
   * Priority: inputMap > externalMap > baseMap
   * Returns the resolved value tagged with its limit tier.
   *
   * @param {string} name
   * @returns {{ value: string, tier: string }|undefined}
   */
  _resolveName(name) {
    if (name in this._inputMap) return { value: this._inputMap[name], tier: LIMIT_TIER_EXTERNAL };
    if (name in this._externalMap) return { value: this._externalMap[name], tier: LIMIT_TIER_EXTERNAL };
    if (name in this._baseMap) return { value: this._baseMap[name], tier: LIMIT_TIER_BASE };
    return void 0;
  }
  /**
   * Classify a codepoint and return the minimum action level that must be applied.
   * Returns -1 when no minimum is imposed (normal allow path).
   *
   * Ranges checked (in priority order):
   *   1. U+0000            — null, governed by nullNCR (always ≥ remove)
   *   2. U+D800–U+DFFF     — surrogates, always prohibited (min: remove)
   *   3. U+0001–U+001F \ {0x09,0x0A,0x0D}  — XML 1.0 restricted C0 (min: remove)
   *      (skipped in XML 1.1 — C0 controls are allowed when written as NCRs)
   *
   * @param {number} cp  — codepoint
   * @returns {number}   — minimum NCR_LEVEL value, or -1 for no restriction
   */
  _classifyNCR(cp) {
    if (cp === 0) return this._ncrNullLevel;
    if (cp >= 55296 && cp <= 57343) return NCR_LEVEL.remove;
    if (this._ncrXmlVersion === 1) {
      if (cp >= 1 && cp <= 31 && !XML10_ALLOWED_C0.has(cp)) return NCR_LEVEL.remove;
    }
    return -1;
  }
  /**
   * Execute a resolved NCR action.
   *
   * @param {number} action   — NCR_LEVEL value
   * @param {string} token    — raw token (e.g. '#38') for error messages
   * @param {number} cp       — codepoint, used only for error messages
   * @returns {string|undefined}
   *   - decoded character string  → 'allow'
   *   - ''                        → 'remove'
   *   - undefined                 → 'leave' (caller must skip past '&' only)
   *   - throws Error              → 'throw'
   */
  _applyNCRAction(action, token, cp) {
    switch (action) {
      case NCR_LEVEL.allow:
        return String.fromCodePoint(cp);
      case NCR_LEVEL.remove:
        return "";
      case NCR_LEVEL.leave:
        return void 0;
      // signal: keep literal
      case NCR_LEVEL.throw:
        throw new Error(
          `[EntityDecoder] Prohibited numeric character reference &${token}; (U+${cp.toString(16).toUpperCase().padStart(4, "0")})`
        );
      default:
        return String.fromCodePoint(cp);
    }
  }
  /**
   * Full NCR resolution pipeline for a numeric token.
   *
   * Steps:
   *   1. Parse the codepoint (decimal or hex).
   *   2. Validate the raw codepoint range (NaN, <0, >0x10FFFF).
   *   3. If numericAllowed is false and no minimum restriction applies → leave as-is.
   *   4. Classify the codepoint to find the minimum required action level.
   *   5. Resolve effective action = max(onNCR, minimum).
   *   6. Apply and return.
   *
   * @param {string} token  — e.g. '#38', '#x26', '#X26'
   * @returns {string|undefined}
   *   - string (incl. '')  — replacement ('' = remove)
   *   - undefined          — leave original &token; as-is
   */
  _resolveNCR(token) {
    const second = token.charCodeAt(1);
    let cp;
    if (second === 120 || second === 88) {
      cp = parseInt(token.slice(2), 16);
    } else {
      cp = parseInt(token.slice(1), 10);
    }
    if (Number.isNaN(cp) || cp < 0 || cp > 1114111) return void 0;
    const minimum = this._classifyNCR(cp);
    if (!this._numericAllowed && minimum < NCR_LEVEL.remove) return void 0;
    const effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);
    return this._applyNCRAction(effective, token, cp);
  }
};

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var defaultOnDangerousProperty = (name) => {
  if (DANGEROUS_PROPERTY_NAMES.includes(name)) {
    return "__" + name;
  }
  return name;
};
var defaultOptions2 = {
  preserveOrder: false,
  attributeNamePrefix: "@_",
  attributesGroupName: false,
  textNodeName: "#text",
  ignoreAttributes: true,
  removeNSPrefix: false,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: false,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
  //Trim string values of tag and attributes
  cdataPropName: false,
  numberParseOptions: {
    hex: true,
    leadingZeros: true,
    eNotation: true,
    unicode: false
  },
  tagValueProcessor: function(tagName2, val) {
    return val;
  },
  attributeValueProcessor: function(attrName, val) {
    return val;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: false,
  isArray: () => false,
  commentPropName: false,
  unpairedTags: [],
  processEntities: true,
  htmlEntities: false,
  entityDecoder: null,
  ignoreDeclaration: false,
  ignorePiTags: false,
  transformTagName: false,
  transformAttributeName: false,
  updateTag: function(tagName2, jPath, attrs) {
    return tagName2;
  },
  // skipEmptyListItem: false
  captureMetaData: false,
  maxNestedTags: 100,
  strictReservedNames: true,
  jPath: true,
  // if true, pass jPath string to callbacks; if false, pass matcher instance
  onDangerousProperty: defaultOnDangerousProperty
};
function validatePropertyName(propertyName, optionName) {
  if (typeof propertyName !== "string") {
    return;
  }
  const normalized = propertyName.toLowerCase();
  if (DANGEROUS_PROPERTY_NAMES.some((dangerous) => normalized === dangerous.toLowerCase())) {
    throw new Error(
      `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
  }
  if (criticalProperties.some((dangerous) => normalized === dangerous.toLowerCase())) {
    throw new Error(
      `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
  }
}
function normalizeProcessEntities(value, htmlEntities) {
  if (typeof value === "boolean") {
    return {
      enabled: value,
      // true or false
      maxEntitySize: 1e4,
      maxExpansionDepth: 1e4,
      maxTotalExpansions: Infinity,
      maxExpandedLength: 1e5,
      maxEntityCount: 1e3,
      allowedTags: null,
      tagFilter: null,
      appliesTo: "all"
    };
  }
  if (typeof value === "object" && value !== null) {
    return {
      enabled: value.enabled !== false,
      maxEntitySize: Math.max(1, value.maxEntitySize ?? 1e4),
      maxExpansionDepth: Math.max(1, value.maxExpansionDepth ?? 1e4),
      maxTotalExpansions: Math.max(1, value.maxTotalExpansions ?? Infinity),
      maxExpandedLength: Math.max(1, value.maxExpandedLength ?? 1e5),
      maxEntityCount: Math.max(1, value.maxEntityCount ?? 1e3),
      allowedTags: value.allowedTags ?? null,
      tagFilter: value.tagFilter ?? null,
      appliesTo: value.appliesTo ?? "all"
    };
  }
  return normalizeProcessEntities(true);
}
var buildOptions = function(options) {
  const built = Object.assign({}, defaultOptions2, options);
  const propertyNameOptions = [
    { value: built.attributeNamePrefix, name: "attributeNamePrefix" },
    { value: built.attributesGroupName, name: "attributesGroupName" },
    { value: built.textNodeName, name: "textNodeName" },
    { value: built.cdataPropName, name: "cdataPropName" },
    { value: built.commentPropName, name: "commentPropName" }
  ];
  for (const { value, name } of propertyNameOptions) {
    if (value) {
      validatePropertyName(value, name);
    }
  }
  if (built.onDangerousProperty === null) {
    built.onDangerousProperty = defaultOnDangerousProperty;
  }
  built.processEntities = normalizeProcessEntities(built.processEntities, built.htmlEntities);
  built.unpairedTagsSet = new Set(built.unpairedTags);
  if (built.stopNodes && Array.isArray(built.stopNodes)) {
    built.stopNodes = built.stopNodes.map((node) => {
      if (typeof node === "string" && node.startsWith("*.")) {
        return ".." + node.substring(2);
      }
      return node;
    });
  }
  return built;
};

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var METADATA_SYMBOL;
if (typeof Symbol !== "function") {
  METADATA_SYMBOL = "@@xmlMetadata";
} else {
  METADATA_SYMBOL = /* @__PURE__ */ Symbol("XML Node Metadata");
}
var XmlNode = class {
  constructor(tagname) {
    this.tagname = tagname;
    this.child = [];
    this[":@"] = /* @__PURE__ */ Object.create(null);
  }
  add(key, val) {
    if (key === "__proto__") key = "#__proto__";
    this.child.push({ [key]: val });
  }
  addChild(node, startIndex) {
    if (node.tagname === "__proto__") node.tagname = "#__proto__";
    if (node[":@"] && Object.keys(node[":@"]).length > 0) {
      this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
    } else {
      this.child.push({ [node.tagname]: node.child });
    }
    if (startIndex !== void 0) {
      this.child[this.child.length - 1][METADATA_SYMBOL] = { startIndex };
    }
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return METADATA_SYMBOL;
  }
};

// node_modules/xml-naming/src/index.js
var nameStartChar10 = ":A-Za-z_\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u0486\u0488-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
var nameChar10 = nameStartChar10 + "\\-\\.\\d\xB7\u0300-\u036F\u203F-\u2040";
var nameStartChar11 = ":A-Za-z_\xC0-\u02FF\u0370-\u037D\u037F-\u0486\u0488-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}";
var nameChar11 = nameStartChar11 + "\\-\\.\\d\xB7\u0300-\u036F\u0487\u203F-\u2040";
var buildRegexes = (startChar, char, flags = "") => {
  const ncStart = startChar.replace(":", "");
  const ncChar = char.replace(":", "");
  const ncNamePat = `[${ncStart}][${ncChar}]*`;
  return {
    name: new RegExp(`^[${startChar}][${char}]*$`, flags),
    ncName: new RegExp(`^${ncNamePat}$`, flags),
    qName: new RegExp(`^${ncNamePat}(?::${ncNamePat})?$`, flags),
    nmToken: new RegExp(`^[${char}]+$`, flags),
    nmTokens: new RegExp(`^[${char}]+(?:\\s+[${char}]+)*$`, flags)
  };
};
var regexes10 = buildRegexes(nameStartChar10, nameChar10);
var regexes11 = buildRegexes(nameStartChar11, nameChar11, "u");
var nameStartCharAscii = ":A-Za-z_";
var nameCharAscii = nameStartCharAscii + "\\-\\.\\d";
var regexesAscii = buildRegexes(nameStartCharAscii, nameCharAscii);
var getRegexes = (xmlVersion = "1.0", asciiOnly = false) => {
  if (asciiOnly) return regexesAscii;
  return xmlVersion === "1.1" ? regexes11 : regexes10;
};
var qName = (str, { xmlVersion = "1.0", asciiOnly = false } = {}) => getRegexes(xmlVersion, asciiOnly).qName.test(str);

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var DocTypeReader = class {
  constructor(options, xmlVersion) {
    this.suppressValidationErr = !options;
    this.options = options;
    this.xmlVersion = xmlVersion || 1;
  }
  setXmlVersion(xmlVersion = 1) {
    this.xmlVersion = xmlVersion;
  }
  readDocType(xmlData, i) {
    const entities = /* @__PURE__ */ Object.create(null);
    let entityCount = 0;
    if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
      i = i + 9;
      let angleBracketsCount = 1;
      let hasBody = false, comment = false;
      let exp = "";
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && !comment) {
          if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
            i += 7;
            let entityName, val;
            [entityName, val, i] = this.readEntityExp(xmlData, i + 1, this.suppressValidationErr);
            if (val.indexOf("&") === -1) {
              if (this.options.enabled !== false && this.options.maxEntityCount != null && entityCount >= this.options.maxEntityCount) {
                throw new Error(
                  `Entity count (${entityCount + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`
                );
              }
              entities[entityName] = val;
              entityCount++;
            }
          } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
            i += 8;
            const { index } = this.readElementExp(xmlData, i + 1);
            i = index;
          } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
            i += 8;
          } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
            i += 9;
            const { index } = this.readNotationExp(xmlData, i + 1, this.suppressValidationErr);
            i = index;
          } else if (hasSeq(xmlData, "!--", i)) comment = true;
          else throw new Error(`Invalid DOCTYPE`);
          angleBracketsCount++;
          exp = "";
        } else if (xmlData[i] === ">") {
          if (comment) {
            if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
              comment = false;
              angleBracketsCount--;
            }
          } else {
            angleBracketsCount--;
          }
          if (angleBracketsCount === 0) {
            break;
          }
        } else if (xmlData[i] === "[") {
          hasBody = true;
        } else {
          exp += xmlData[i];
        }
      }
      if (angleBracketsCount !== 0) {
        throw new Error(`Unclosed DOCTYPE`);
      }
    } else {
      throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return { entities, i };
  }
  readEntityExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    const startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
      i++;
    }
    let entityName = xmlData.substring(startIndex, i);
    validateEntityName2(entityName, { xmlVersion: this.xmlVersion });
    i = skipWhitespace(xmlData, i);
    if (!this.suppressValidationErr) {
      if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
        throw new Error("External entities are not supported");
      } else if (xmlData[i] === "%") {
        throw new Error("Parameter entities are not supported");
      }
    }
    let entityValue = "";
    [i, entityValue] = this.readIdentifierVal(xmlData, i, "entity");
    if (this.options.enabled !== false && this.options.maxEntitySize != null && entityValue.length > this.options.maxEntitySize) {
      throw new Error(
        `Entity "${entityName}" size (${entityValue.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`
      );
    }
    i--;
    return [entityName, entityValue, i];
  }
  readNotationExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    const startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let notationName = xmlData.substring(startIndex, i);
    !this.suppressValidationErr && validateEntityName2(notationName, { xmlVersion: this.xmlVersion });
    i = skipWhitespace(xmlData, i);
    const identifierType = xmlData.substring(i, i + 6).toUpperCase();
    if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
      throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
    }
    i += identifierType.length;
    i = skipWhitespace(xmlData, i);
    let publicIdentifier = null;
    let systemIdentifier = null;
    if (identifierType === "PUBLIC") {
      [i, publicIdentifier] = this.readIdentifierVal(xmlData, i, "publicIdentifier");
      i = skipWhitespace(xmlData, i);
      if (xmlData[i] === '"' || xmlData[i] === "'") {
        [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
      }
    } else if (identifierType === "SYSTEM") {
      [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
      if (!this.suppressValidationErr && !systemIdentifier) {
        throw new Error("Missing mandatory system identifier for SYSTEM notation");
      }
    }
    return { notationName, publicIdentifier, systemIdentifier, index: --i };
  }
  readIdentifierVal(xmlData, i, type) {
    let identifierVal = "";
    const startChar = xmlData[i];
    if (startChar !== '"' && startChar !== "'") {
      throw new Error(`Expected quoted string, found "${startChar}"`);
    }
    i++;
    const startIndex = i;
    while (i < xmlData.length && xmlData[i] !== startChar) {
      i++;
    }
    identifierVal = xmlData.substring(startIndex, i);
    if (xmlData[i] !== startChar) {
      throw new Error(`Unterminated ${type} value`);
    }
    i++;
    return [i, identifierVal];
  }
  readElementExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    const startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let elementName = xmlData.substring(startIndex, i);
    if (!this.suppressValidationErr && !qName(elementName, { xmlVersion: this.xmlVersion })) {
      throw new Error(`Invalid element name: "${elementName}"`);
    }
    i = skipWhitespace(xmlData, i);
    let contentModel = "";
    if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;
    else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;
    else if (xmlData[i] === "(") {
      i++;
      const startIndex2 = i;
      while (i < xmlData.length && xmlData[i] !== ")") {
        i++;
      }
      contentModel = xmlData.substring(startIndex2, i);
      if (xmlData[i] !== ")") {
        throw new Error("Unterminated content model");
      }
    } else if (!this.suppressValidationErr) {
      throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
    }
    return {
      elementName,
      contentModel: contentModel.trim(),
      index: i
    };
  }
  readAttlistExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    let startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let elementName = xmlData.substring(startIndex, i);
    validateEntityName2(elementName, { xmlVersion: this.xmlVersion });
    i = skipWhitespace(xmlData, i);
    startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let attributeName = xmlData.substring(startIndex, i);
    if (!validateEntityName2(attributeName, { xmlVersion: this.xmlVersion })) {
      throw new Error(`Invalid attribute name: "${attributeName}"`);
    }
    i = skipWhitespace(xmlData, i);
    let attributeType = "";
    if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
      attributeType = "NOTATION";
      i += 8;
      i = skipWhitespace(xmlData, i);
      if (xmlData[i] !== "(") {
        throw new Error(`Expected '(', found "${xmlData[i]}"`);
      }
      i++;
      let allowedNotations = [];
      while (i < xmlData.length && xmlData[i] !== ")") {
        const startIndex2 = i;
        while (i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")") {
          i++;
        }
        let notation = xmlData.substring(startIndex2, i);
        notation = notation.trim();
        if (!validateEntityName2(notation, { xmlVersion: this.xmlVersion })) {
          throw new Error(`Invalid notation name: "${notation}"`);
        }
        allowedNotations.push(notation);
        if (xmlData[i] === "|") {
          i++;
          i = skipWhitespace(xmlData, i);
        }
      }
      if (xmlData[i] !== ")") {
        throw new Error("Unterminated list of notations");
      }
      i++;
      attributeType += " (" + allowedNotations.join("|") + ")";
    } else {
      const startIndex2 = i;
      while (i < xmlData.length && !/\s/.test(xmlData[i])) {
        i++;
      }
      attributeType += xmlData.substring(startIndex2, i);
      const validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
        throw new Error(`Invalid attribute type: "${attributeType}"`);
      }
    }
    i = skipWhitespace(xmlData, i);
    let defaultValue = "";
    if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
      defaultValue = "#REQUIRED";
      i += 8;
    } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
      defaultValue = "#IMPLIED";
      i += 7;
    } else {
      [i, defaultValue] = this.readIdentifierVal(xmlData, i, "ATTLIST");
    }
    return {
      elementName,
      attributeName,
      attributeType,
      defaultValue,
      index: i
    };
  }
};
var skipWhitespace = (data, index) => {
  while (index < data.length && /\s/.test(data[index])) {
    index++;
  }
  return index;
};
function hasSeq(data, seq, i) {
  for (let j2 = 0; j2 < seq.length; j2++) {
    if (seq[j2] !== data[i + j2 + 1]) return false;
  }
  return true;
}
function validateEntityName2(name, xmlVersion) {
  if (qName(name, { xmlVersion }))
    return name;
  else
    throw new Error(`Invalid entity name ${name}`);
}

// node_modules/anynum/digitTable.js
var SCRIPT_ZEROS = [
  // Basic Latin (ASCII) — included for completeness / pass-through
  48,
  // 0-9
  // Arabic scripts
  1632,
  // Arabic-Indic ٠١٢٣٤٥٦٧٨٩
  1776,
  // Extended Arabic-Indic (Urdu/Persian/Sindhi) ۰۱۲۳
  // Indic scripts
  2406,
  // Devanagari ०१२३४५६७८९
  2534,
  // Bengali ০১২৩৪৫৬৭৮৯
  2662,
  // Gurmukhi ੦੧੨੩੪੫੬੭੮੯
  2790,
  // Gujarati ૦૧૨૩૪૫૬૭૮૯
  2918,
  // Odia ୦୧୨୩୪୫୬୭୮୯
  3046,
  // Tamil ௦௧௨௩௪௫௬௭௮௯
  3174,
  // Telugu ౦౧౨౩౪౫౬౭౮౯
  3302,
  // Kannada ೦೧೨೩೪೫೬೭೮೯
  3430,
  // Malayalam ൦൧൨൩൪൫൬൭൮൯
  3558,
  // Sinhala Archaic ෦෧෨෩෪෫෬෭෮෯
  // Southeast Asian scripts
  3664,
  // Thai ๐๑๒๓๔๕๖๗๘๙
  3792,
  // Lao ໐໑໒໓໔໕໖໗໘໙
  3872,
  // Tibetan ༠༡༢༣༤༥༦༧༨༩
  4160,
  // Myanmar ၀၁၂၃၄၅၆၇၈၉
  4240,
  // Myanmar Shan ႐႑႒႓႔႕႖႗႘႙
  6112,
  // Khmer ០១២៣៤៥៦៧៨៩
  6160,
  // Mongolian ᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙
  6470,
  // Limbu ᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏
  6608,
  // New Tai Lue ᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙
  6784,
  // Tai Tham Hora ᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉
  6800,
  // Tai Tham Tham ᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙
  6992,
  // Balinese ᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙
  7088,
  // Sundanese ᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹
  7232,
  // Lepcha ᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉
  7248,
  // Ol Chiki ᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙
  // Fullwidth (CJK context)
  65296,
  // Fullwidth ０１２３４５６７８９
  // Mathematical digit variants (Unicode math block)
  120782,
  // Mathematical Bold
  120792,
  // Mathematical Double-Struck
  120802,
  // Mathematical Sans-Serif
  120812,
  // Mathematical Sans-Serif Bold
  120822,
  // Mathematical Monospace
  // Other scripts
  66720,
  // Osmanya 𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩
  68912,
  // Hanifi Rohingya 𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹
  69734,
  // Brahmi 𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯
  69872,
  // Sora Sompeng 𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹
  69942,
  // Chakma 𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿
  70096,
  // Sharada 𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙
  70384,
  // Khudawadi 𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹
  70736,
  // Newa 𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙
  70864,
  // Tirhuta 𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙
  71248,
  // Modi 𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙
  71360,
  // Takri 𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉
  71472,
  // Ahom 𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹
  71904,
  // Warang Citi 𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩
  72016,
  // Dives Akuru 𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙
  72688,
  // Khitan Small Script 𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹
  72784,
  // Bhaiksuki 𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙
  73040,
  // Masaram Gondi 𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙
  73120,
  // Gunjala Gondi 𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩
  73552,
  // Kawi 𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙
  92768,
  // Mro 𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩
  92864,
  // Tangsa 𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉
  93008,
  // Pahawh Hmong 𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙
  123200,
  // Nyiakeng Puachue Hmong 𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉
  123632,
  // Wancho 𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹
  124144,
  // Nag Mundari 𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹
  125264,
  // Adlam 𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙
  130032
  // Segmented digit symbols 🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹
];
var NOT_DIGIT = 255;
var HIGH_MAP = /* @__PURE__ */ new Map();
var LOW_MAX = 65535;
var LOW_MIN = 1632;
var TABLE_OFFSET = LOW_MIN;
var TABLE_SIZE = LOW_MAX - LOW_MIN + 1;
var TABLE = new Uint8Array(TABLE_SIZE).fill(NOT_DIGIT);
for (const zero2 of SCRIPT_ZEROS) {
  for (let d = 0; d < 10; d++) {
    const cp = zero2 + d;
    if (cp <= LOW_MAX) {
      TABLE[cp - TABLE_OFFSET] = d;
    } else {
      HIGH_MAP.set(cp, d);
    }
  }
}

// node_modules/anynum/anynum.js
var CHAR_0 = 48;
var CHAR_9 = 57;
var CHAR_MINUS = 45;
var MINUS_SET = /* @__PURE__ */ new Set([8722, 65293, 65123]);
function anynum(str) {
  if (typeof str !== "string") return str;
  const len = str.length;
  if (len === 0) return str;
  let firstHit = -1;
  for (let i = 0; i < len; i++) {
    const cc = str.charCodeAt(i);
    if (cc >= CHAR_0 && cc <= CHAR_9 || cc === CHAR_MINUS) continue;
    if (cc < TABLE_OFFSET) {
      if (MINUS_SET.has(cc)) {
        firstHit = i;
        break;
      }
      continue;
    }
    if (cc >= 55296 && cc <= 56319) {
      if (i + 1 < len) {
        const low = str.charCodeAt(i + 1);
        if (low >= 56320 && low <= 57343) {
          const cp = 65536 + (cc - 55296 << 10) + (low - 56320);
          if (HIGH_MAP.has(cp)) {
            firstHit = i;
            break;
          }
        }
      }
      continue;
    }
    if (TABLE[cc - TABLE_OFFSET] !== NOT_DIGIT || MINUS_SET.has(cc)) {
      firstHit = i;
      break;
    }
  }
  if (firstHit === -1) return str;
  const chars = [];
  if (firstHit > 0) chars.push(str.slice(0, firstHit));
  for (let i = firstHit; i < len; i++) {
    const cc = str.charCodeAt(i);
    if (cc >= CHAR_0 && cc <= CHAR_9 || cc === CHAR_MINUS) {
      chars.push(str[i]);
      continue;
    }
    if (cc < TABLE_OFFSET) {
      chars.push(MINUS_SET.has(cc) ? "-" : str[i]);
      continue;
    }
    if (cc >= 55296 && cc <= 56319) {
      if (i + 1 < len) {
        const low = str.charCodeAt(i + 1);
        if (low >= 56320 && low <= 57343) {
          const cp = 65536 + (cc - 55296 << 10) + (low - 56320);
          const d2 = HIGH_MAP.get(cp);
          if (d2 !== void 0) {
            chars.push(String.fromCharCode(d2 + 48));
            i++;
            continue;
          }
        }
      }
      chars.push(str[i]);
      continue;
    }
    if (MINUS_SET.has(cc)) {
      chars.push("-");
      continue;
    }
    const d = TABLE[cc - TABLE_OFFSET];
    chars.push(d !== NOT_DIGIT ? String.fromCharCode(d + 48) : str[i]);
  }
  return chars.join("");
}
var anynum_default = anynum;

// node_modules/strnum/strnum.js
var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
var binRegex = /^0b[01]+$/;
var octRegex = /^0o[0-7]+$/;
var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
var consider = {
  hex: true,
  binary: false,
  octal: false,
  leadingZeros: true,
  decimalPoint: ".",
  eNotation: true,
  //skipLike: /regex/,
  infinity: "original",
  // "null", "infinity" (Infinity type), "string" ("Infinity" (the string literal))
  unicode: false
};
function toNumber(str, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string") return str;
  let trimmedStr = str.trim();
  if (trimmedStr.length === 0) return str;
  else if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
  else if (trimmedStr === "0") return 0;
  if (options.unicode) {
    trimmedStr = anynum_default(trimmedStr);
    if (trimmedStr === "0") return 0;
  }
  if (options.hex && hexRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 16);
  } else if (options.binary && binRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 2);
  } else if (options.octal && octRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 8);
  } else if (!isFinite(trimmedStr)) {
    return handleInfinity(str, Number(trimmedStr), options);
  } else if (trimmedStr.includes("e") || trimmedStr.includes("E")) {
    return resolveEnotation(str, trimmedStr, options);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1] || "";
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const decimalAdjacentToLeadingZeros = sign ? (
        // 0., -00., 000.
        str[leadingZeros.length + 1] === "."
      ) : str[leadingZeros.length] === ".";
      if (!options.leadingZeros && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
        return str;
      } else {
        const num = Number(trimmedStr);
        const parsedStr = String(num);
        if (num === 0) return num;
        if (parsedStr.search(/[eE]/) !== -1) {
          if (options.eNotation) return num;
          else return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (parsedStr === "0") return num;
          else if (parsedStr === numTrimmedByZeros) return num;
          else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num;
          else return str;
        }
        let n = leadingZeros ? numTrimmedByZeros : trimmedStr;
        if (leadingZeros) {
          return n === parsedStr || sign + n === parsedStr ? num : str;
        } else {
          return n === parsedStr || n === sign + parsedStr ? num : str;
        }
      }
    } else {
      return str;
    }
  }
}
var eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str, trimmedStr, options) {
  if (!options.eNotation) return str;
  const notation = trimmedStr.match(eNotationRegx);
  if (notation) {
    let sign = notation[1] || "";
    const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
    const leadingZeros = notation[2];
    const eAdjacentToLeadingZeros = sign ? (
      // 0E.
      str[leadingZeros.length + 1] === eChar
    ) : str[leadingZeros.length] === eChar;
    if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
    else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
      return Number(trimmedStr);
    } else if (leadingZeros.length > 0) {
      if (options.leadingZeros && !eAdjacentToLeadingZeros) {
        trimmedStr = (notation[1] || "") + notation[3];
        return Number(trimmedStr);
      } else return str;
    } else {
      return Number(trimmedStr);
    }
  } else {
    return str;
  }
}
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    numStr = numStr.replace(/0+$/, "");
    if (numStr === ".") numStr = "0";
    else if (numStr[0] === ".") numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
function parse_int(numStr, base) {
  const str = numStr.trim();
  if (base === 2 || base === 8) numStr = str.substring(2);
  if (parseInt) return parseInt(numStr, base);
  else if (Number.parseInt) return Number.parseInt(numStr, base);
  else if (window && window.parseInt) return window.parseInt(numStr, base);
  else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function handleInfinity(str, num, options) {
  const isPositive = num === Infinity;
  switch (options.infinity.toLowerCase()) {
    case "null":
      return null;
    case "infinity":
      return num;
    // Return Infinity or -Infinity
    case "string":
      return isPositive ? "Infinity" : "-Infinity";
    case "original":
    default:
      return str;
  }
}

// node_modules/fast-xml-parser/src/ignoreAttributes.js
function getIgnoreAttributesFn(ignoreAttributes) {
  if (typeof ignoreAttributes === "function") {
    return ignoreAttributes;
  }
  if (Array.isArray(ignoreAttributes)) {
    return (attrName) => {
      for (const pattern of ignoreAttributes) {
        if (typeof pattern === "string" && attrName === pattern) {
          return true;
        }
        if (pattern instanceof RegExp && pattern.test(attrName)) {
          return true;
        }
      }
    };
  }
  return () => false;
}

// node_modules/path-expression-matcher/src/Expression.js
var Expression = class {
  /**
   * Create a new Expression
   * @param {string} pattern - Pattern string (e.g., "root.users.user", "..user[id]")
   * @param {Object} options - Configuration options
   * @param {string} options.separator - Path separator (default: '.')
   */
  constructor(pattern, options = {}, data) {
    this.pattern = pattern;
    this.separator = options.separator || ".";
    this.segments = this._parse(pattern);
    this.data = data;
    this._hasDeepWildcard = this.segments.some((seg) => seg.type === "deep-wildcard");
    this._hasAttributeCondition = this.segments.some((seg) => seg.attrName !== void 0);
    this._hasPositionSelector = this.segments.some((seg) => seg.position !== void 0);
  }
  /**
   * Parse pattern string into segments
   * @private
   * @param {string} pattern - Pattern to parse
   * @returns {Array} Array of segment objects
   */
  _parse(pattern) {
    const segments = [];
    let i = 0;
    let currentPart = "";
    while (i < pattern.length) {
      if (pattern[i] === this.separator) {
        if (i + 1 < pattern.length && pattern[i + 1] === this.separator) {
          if (currentPart.trim()) {
            segments.push(this._parseSegment(currentPart.trim()));
            currentPart = "";
          }
          segments.push({ type: "deep-wildcard" });
          i += 2;
        } else {
          if (currentPart.trim()) {
            segments.push(this._parseSegment(currentPart.trim()));
          }
          currentPart = "";
          i++;
        }
      } else {
        currentPart += pattern[i];
        i++;
      }
    }
    if (currentPart.trim()) {
      segments.push(this._parseSegment(currentPart.trim()));
    }
    return segments;
  }
  /**
   * Parse a single segment
   * @private
   * @param {string} part - Segment string (e.g., "user", "ns::user", "user[id]", "ns::user:first")
   * @returns {Object} Segment object
   */
  _parseSegment(part) {
    const segment = { type: "tag" };
    let bracketContent = null;
    let withoutBrackets = part;
    const bracketMatch = part.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
    if (bracketMatch) {
      withoutBrackets = bracketMatch[1] + bracketMatch[3];
      if (bracketMatch[2]) {
        const content = bracketMatch[2].slice(1, -1);
        if (content) {
          bracketContent = content;
        }
      }
    }
    let namespace = void 0;
    let tagAndPosition = withoutBrackets;
    if (withoutBrackets.includes("::")) {
      const nsIndex = withoutBrackets.indexOf("::");
      namespace = withoutBrackets.substring(0, nsIndex).trim();
      tagAndPosition = withoutBrackets.substring(nsIndex + 2).trim();
      if (!namespace) {
        throw new Error(`Invalid namespace in pattern: ${part}`);
      }
    }
    let tag = void 0;
    let positionMatch = null;
    if (tagAndPosition.includes(":")) {
      const colonIndex = tagAndPosition.lastIndexOf(":");
      const tagPart = tagAndPosition.substring(0, colonIndex).trim();
      const posPart = tagAndPosition.substring(colonIndex + 1).trim();
      const isPositionKeyword = ["first", "last", "odd", "even"].includes(posPart) || /^nth\(\d+\)$/.test(posPart);
      if (isPositionKeyword) {
        tag = tagPart;
        positionMatch = posPart;
      } else {
        tag = tagAndPosition;
      }
    } else {
      tag = tagAndPosition;
    }
    if (!tag) {
      throw new Error(`Invalid segment pattern: ${part}`);
    }
    segment.tag = tag;
    if (namespace) {
      segment.namespace = namespace;
    }
    if (bracketContent) {
      if (bracketContent.includes("=")) {
        const eqIndex = bracketContent.indexOf("=");
        segment.attrName = bracketContent.substring(0, eqIndex).trim();
        segment.attrValue = bracketContent.substring(eqIndex + 1).trim();
      } else {
        segment.attrName = bracketContent.trim();
      }
    }
    if (positionMatch) {
      const nthMatch = positionMatch.match(/^nth\((\d+)\)$/);
      if (nthMatch) {
        segment.position = "nth";
        segment.positionValue = parseInt(nthMatch[1], 10);
      } else {
        segment.position = positionMatch;
      }
    }
    return segment;
  }
  /**
   * Get the number of segments
   * @returns {number}
   */
  get length() {
    return this.segments.length;
  }
  /**
   * Check if expression contains deep wildcard
   * @returns {boolean}
   */
  hasDeepWildcard() {
    return this._hasDeepWildcard;
  }
  /**
   * Check if expression has attribute conditions
   * @returns {boolean}
   */
  hasAttributeCondition() {
    return this._hasAttributeCondition;
  }
  /**
   * Check if expression has position selectors
   * @returns {boolean}
   */
  hasPositionSelector() {
    return this._hasPositionSelector;
  }
  /**
   * Get string representation
   * @returns {string}
   */
  toString() {
    return this.pattern;
  }
};

// node_modules/path-expression-matcher/src/ExpressionSet.js
var ExpressionSet = class {
  constructor() {
    this._byDepthAndTag = /* @__PURE__ */ new Map();
    this._wildcardByDepth = /* @__PURE__ */ new Map();
    this._deepWildcards = [];
    this._deepByTerminalTag = /* @__PURE__ */ new Map();
    this._patterns = /* @__PURE__ */ new Set();
    this._sealed = false;
  }
  /**
   * Add an Expression to the set.
   * Duplicate patterns (same pattern string) are silently ignored.
   *
   * @param {import('./Expression.js').default} expression - A pre-constructed Expression instance
   * @returns {this} for chaining
   * @throws {TypeError} if called after seal()
   *
   * @example
   * set.add(new Expression('root.users.user'));
   * set.add(new Expression('..script'));
   */
  add(expression) {
    if (this._sealed) {
      throw new TypeError(
        "ExpressionSet is sealed. Create a new ExpressionSet to add more expressions."
      );
    }
    if (this._patterns.has(expression.pattern)) return this;
    this._patterns.add(expression.pattern);
    if (expression.hasDeepWildcard()) {
      const lastSeg2 = expression.segments[expression.segments.length - 1];
      if (lastSeg2 && lastSeg2.type !== "deep-wildcard" && lastSeg2.tag !== "*") {
        const tag2 = lastSeg2.tag;
        if (!this._deepByTerminalTag.has(tag2)) this._deepByTerminalTag.set(tag2, []);
        this._deepByTerminalTag.get(tag2).push(expression);
      } else {
        this._deepWildcards.push(expression);
      }
      return this;
    }
    const depth = expression.length;
    const lastSeg = expression.segments[expression.segments.length - 1];
    const tag = lastSeg?.tag;
    if (!tag || tag === "*") {
      if (!this._wildcardByDepth.has(depth)) this._wildcardByDepth.set(depth, []);
      this._wildcardByDepth.get(depth).push(expression);
    } else {
      const key = `${depth}:${tag}`;
      if (!this._byDepthAndTag.has(key)) this._byDepthAndTag.set(key, []);
      this._byDepthAndTag.get(key).push(expression);
    }
    return this;
  }
  /**
   * Add multiple expressions at once.
   *
   * @param {import('./Expression.js').default[]} expressions - Array of Expression instances
   * @returns {this} for chaining
   *
   * @example
   * set.addAll([
   *   new Expression('root.users.user'),
   *   new Expression('root.config.setting'),
   * ]);
   */
  addAll(expressions) {
    for (const expr of expressions) this.add(expr);
    return this;
  }
  /**
   * Check whether a pattern string is already present in the set.
   *
   * @param {import('./Expression.js').default} expression
   * @returns {boolean}
   */
  has(expression) {
    return this._patterns.has(expression.pattern);
  }
  /**
   * Number of expressions in the set.
   * @type {number}
   */
  get size() {
    return this._patterns.size;
  }
  /**
   * Seal the set against further modifications.
   * Useful to prevent accidental mutations after config is built.
   * Calling add() or addAll() on a sealed set throws a TypeError.
   *
   * @returns {this}
   */
  seal() {
    this._sealed = true;
    return this;
  }
  /**
   * Whether the set has been sealed.
   * @type {boolean}
   */
  get isSealed() {
    return this._sealed;
  }
  /**
   * Test whether the matcher's current path matches any expression in the set.
   *
   * Evaluation order (cheapest → most expensive):
   *  1. Exact depth + tag bucket  — O(1) lookup, typically 0–2 expressions
   *  2. Depth-only wildcard bucket — O(1) lookup, rare
   *  3. Deep-wildcard list         — always checked, but usually small
   *
   * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
   * @returns {boolean} true if any expression matches the current path
   *
   * @example
   * if (stopNodes.matchesAny(matcher)) {
   *   // handle stop node
   * }
   */
  matchesAny(matcher) {
    return this.findMatch(matcher) !== null;
  }
  /**
  * Find and return the first Expression that matches the matcher's current path.
  *
  * Uses the same evaluation order as matchesAny (cheapest → most expensive):
  *  1. Exact depth + tag bucket
  *  2. Depth-only wildcard bucket
  *  3. Deep-wildcard list
  *
  * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
  * @returns {import('./Expression.js').default | null} the first matching Expression, or null
  *
  * @example
  * const expr = stopNodes.findMatch(matcher);
  * if (expr) {
  *   // access expr.config, expr.pattern, etc.
  * }
  */
  findMatch(matcher) {
    const depth = matcher.getDepth();
    const tag = matcher.getCurrentTag();
    const exactKey = `${depth}:${tag}`;
    const exactBucket = this._byDepthAndTag.get(exactKey);
    if (exactBucket) {
      for (let i = 0; i < exactBucket.length; i++) {
        if (matcher.matches(exactBucket[i])) return exactBucket[i];
      }
    }
    const wildcardBucket = this._wildcardByDepth.get(depth);
    if (wildcardBucket) {
      for (let i = 0; i < wildcardBucket.length; i++) {
        if (matcher.matches(wildcardBucket[i])) return wildcardBucket[i];
      }
    }
    const deepBucket = this._deepByTerminalTag.get(tag);
    if (deepBucket) {
      for (let i = 0; i < deepBucket.length; i++) {
        if (matcher.matches(deepBucket[i])) return deepBucket[i];
      }
    }
    for (let i = 0; i < this._deepWildcards.length; i++) {
      if (matcher.matches(this._deepWildcards[i])) return this._deepWildcards[i];
    }
    return null;
  }
};

// node_modules/path-expression-matcher/src/Matcher.js
var MatcherView = class {
  /**
   * @param {Matcher} matcher - The parent Matcher instance to read from.
   */
  constructor(matcher) {
    this._matcher = matcher;
  }
  /**
   * Get the path separator used by the parent matcher.
   * @returns {string}
   */
  get separator() {
    return this._matcher.separator;
  }
  /**
   * Get current tag name.
   * @returns {string|undefined}
   */
  getCurrentTag() {
    const path = this._matcher.path;
    return path.length > 0 ? path[path.length - 1].tag : void 0;
  }
  /**
   * Get current namespace.
   * @returns {string|undefined}
   */
  getCurrentNamespace() {
    const path = this._matcher.path;
    return path.length > 0 ? path[path.length - 1].namespace : void 0;
  }
  /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */
  getAttrValue(attrName) {
    const path = this._matcher.path;
    if (path.length === 0) return void 0;
    return path[path.length - 1].values?.[attrName];
  }
  /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAttr(attrName) {
    const path = this._matcher.path;
    if (path.length === 0) return false;
    const current = path[path.length - 1];
    return current.values !== void 0 && attrName in current.values;
  }
  /**
   * Get the value of a "kept" attribute from the nearest ancestor (or
   * current node) that declared it via `push(tag, attrs, ns, { keep: [...] })`.
   * @param {string} attrName
   * @returns {*}
   */
  getAnyParentAttr(attrName) {
    return this._matcher.getAnyParentAttr(attrName);
  }
  /**
   * Check whether any ancestor (or the current node) kept the given
   * attribute via `push(tag, attrs, ns, { keep: [...] })`.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAnyParentAttr(attrName) {
    return this._matcher.hasAnyParentAttr(attrName);
  }
  /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */
  getPosition() {
    const path = this._matcher.path;
    if (path.length === 0) return -1;
    return path[path.length - 1].position ?? 0;
  }
  /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */
  getCounter() {
    const path = this._matcher.path;
    if (path.length === 0) return -1;
    return path[path.length - 1].counter ?? 0;
  }
  /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */
  getIndex() {
    return this.getPosition();
  }
  /**
   * Get current path depth.
   * @returns {number}
   */
  getDepth() {
    return this._matcher.path.length;
  }
  /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */
  toString(separator, includeNamespace = true) {
    return this._matcher.toString(separator, includeNamespace);
  }
  /**
   * Get path as array of tag names.
   * @returns {string[]}
   */
  toArray() {
    return this._matcher.path.map((n) => n.tag);
  }
  /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */
  matches(expression) {
    return this._matcher.matches(expression);
  }
  /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */
  matchesAny(exprSet) {
    return exprSet.matchesAny(this._matcher);
  }
};
var Matcher = class {
  /**
   * Create a new Matcher.
   * @param {Object} [options={}]
   * @param {string} [options.separator='.'] - Default path separator
   */
  constructor(options = {}) {
    this.separator = options.separator || ".";
    this.path = [];
    this.siblingStacks = [];
    this._pathStringCache = null;
    this._view = new MatcherView(this);
    this._keptAttrs = [];
  }
  /**
   * Push a new tag onto the path.
   * @param {string} tagName
   * @param {Object|null} [attrValues=null]
   * @param {string|null} [namespace=null]
   * @param {Object|null} [options=null]
   * @param {string[]} [options.keep] - Names of attributes (from attrValues)
   */
  push(tagName2, attrValues = null, namespace = null, options = null) {
    this._pathStringCache = null;
    if (this.path.length > 0) {
      this.path[this.path.length - 1].values = void 0;
    }
    const currentLevel = this.path.length;
    let level = this.siblingStacks[currentLevel];
    if (!level) {
      level = { counts: /* @__PURE__ */ new Map(), total: 0 };
      this.siblingStacks[currentLevel] = level;
    }
    const siblingKey = namespace ? `${namespace}:${tagName2}` : tagName2;
    const counter = level.counts.get(siblingKey) || 0;
    const position = level.total;
    level.counts.set(siblingKey, counter + 1);
    level.total++;
    const node = {
      tag: tagName2,
      position,
      counter
    };
    if (namespace !== null && namespace !== void 0) {
      node.namespace = namespace;
    }
    if (attrValues !== null && attrValues !== void 0) {
      node.values = attrValues;
    }
    this.path.push(node);
    const depth = this.path.length;
    const keep = options !== null ? options.keep : null;
    if (keep !== null && keep !== void 0 && keep.length > 0 && attrValues) {
      for (let i = 0; i < keep.length; i++) {
        const name = keep[i];
        if (attrValues[name] !== void 0) {
          this._keptAttrs.push({ depth, name, value: attrValues[name] });
        }
      }
    }
  }
  /**
   * Pop the last tag from the path.
   * @returns {Object|undefined} The popped node
   */
  pop() {
    if (this.path.length === 0) return void 0;
    this._pathStringCache = null;
    const node = this.path.pop();
    if (this.siblingStacks.length > this.path.length + 1) {
      this.siblingStacks.length = this.path.length + 1;
    }
    const poppedDepth = this.path.length + 1;
    while (this._keptAttrs.length > 0 && this._keptAttrs[this._keptAttrs.length - 1].depth >= poppedDepth) {
      this._keptAttrs.pop();
    }
    return node;
  }
  /**
   * Update current node's attribute values.
   * Useful when attributes are parsed after push.
   * @param {Object} attrValues
   */
  updateCurrent(attrValues) {
    if (this.path.length > 0) {
      const current = this.path[this.path.length - 1];
      if (attrValues !== null && attrValues !== void 0) {
        current.values = attrValues;
      }
    }
  }
  /**
   * Get current tag name.
   * @returns {string|undefined}
   */
  getCurrentTag() {
    return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
  }
  /**
   * Get current namespace.
   * @returns {string|undefined}
   */
  getCurrentNamespace() {
    return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
  }
  /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */
  getAttrValue(attrName) {
    if (this.path.length === 0) return void 0;
    return this.path[this.path.length - 1].values?.[attrName];
  }
  /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAttr(attrName) {
    if (this.path.length === 0) return false;
    const current = this.path[this.path.length - 1];
    return current.values !== void 0 && attrName in current.values;
  }
  /**
   * Get the value of a "kept" attribute from the nearest ancestor (or
   * current node) that declared it via `push(tag, attrs, ns, { keep: [...] })`.
   * Unlike getAttrValue(), this works regardless of how deep the path has
   * gone since the attribute was pushed — but only for attribute names that
   * were explicitly marked with `keep` at push time. Cost is proportional to
   * the number of currently-kept attributes (typically 0-3), not path depth.
   * @param {string} attrName
   * @returns {*} the value, or undefined if no ancestor kept this attribute
   */
  getAnyParentAttr(attrName) {
    const kept = this._keptAttrs;
    for (let i = kept.length - 1; i >= 0; i--) {
      if (kept[i].name === attrName) return kept[i].value;
    }
    return void 0;
  }
  /**
   * Check whether any ancestor (or the current node) kept the given
   * attribute via `push(tag, attrs, ns, { keep: [...] })`.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAnyParentAttr(attrName) {
    const kept = this._keptAttrs;
    for (let i = kept.length - 1; i >= 0; i--) {
      if (kept[i].name === attrName) return true;
    }
    return false;
  }
  /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */
  getPosition() {
    if (this.path.length === 0) return -1;
    return this.path[this.path.length - 1].position ?? 0;
  }
  /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */
  getCounter() {
    if (this.path.length === 0) return -1;
    return this.path[this.path.length - 1].counter ?? 0;
  }
  /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */
  getIndex() {
    return this.getPosition();
  }
  /**
   * Get current path depth.
   * @returns {number}
   */
  getDepth() {
    return this.path.length;
  }
  /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */
  toString(separator, includeNamespace = true) {
    const sep2 = separator || this.separator;
    const isDefault = sep2 === this.separator && includeNamespace === true;
    if (isDefault) {
      if (this._pathStringCache !== null) {
        return this._pathStringCache;
      }
      const result = this.path.map(
        (n) => n.namespace ? `${n.namespace}:${n.tag}` : n.tag
      ).join(sep2);
      this._pathStringCache = result;
      return result;
    }
    return this.path.map(
      (n) => includeNamespace && n.namespace ? `${n.namespace}:${n.tag}` : n.tag
    ).join(sep2);
  }
  /**
   * Get path as array of tag names.
   * @returns {string[]}
   */
  toArray() {
    return this.path.map((n) => n.tag);
  }
  /**
   * Reset the path to empty.
   */
  reset() {
    this._pathStringCache = null;
    this.path = [];
    this.siblingStacks = [];
    this._keptAttrs = [];
  }
  /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */
  matches(expression) {
    const segments = expression.segments;
    if (segments.length === 0) {
      return false;
    }
    if (expression.hasDeepWildcard()) {
      return this._matchWithDeepWildcard(segments);
    }
    return this._matchSimple(segments);
  }
  /**
   * @private
   */
  _matchSimple(segments) {
    if (this.path.length !== segments.length) {
      return false;
    }
    for (let i = 0; i < segments.length; i++) {
      if (!this._matchSegment(segments[i], this.path[i], i === this.path.length - 1)) {
        return false;
      }
    }
    return true;
  }
  /**
   * @private
   */
  _matchWithDeepWildcard(segments) {
    let pathIdx = this.path.length - 1;
    let segIdx = segments.length - 1;
    while (segIdx >= 0 && pathIdx >= 0) {
      const segment = segments[segIdx];
      if (segment.type === "deep-wildcard") {
        segIdx--;
        if (segIdx < 0) {
          return true;
        }
        const nextSeg = segments[segIdx];
        let found = false;
        for (let i = pathIdx; i >= 0; i--) {
          if (this._matchSegment(nextSeg, this.path[i], i === this.path.length - 1)) {
            pathIdx = i - 1;
            segIdx--;
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      } else {
        if (!this._matchSegment(segment, this.path[pathIdx], pathIdx === this.path.length - 1)) {
          return false;
        }
        pathIdx--;
        segIdx--;
      }
    }
    return segIdx < 0;
  }
  /**
   * @private
   */
  _matchSegment(segment, node, isCurrentNode) {
    if (segment.tag !== "*" && segment.tag !== node.tag) {
      return false;
    }
    if (segment.namespace !== void 0) {
      if (segment.namespace !== "*" && segment.namespace !== node.namespace) {
        return false;
      }
    }
    if (segment.attrName !== void 0) {
      if (!isCurrentNode) {
        return false;
      }
      if (!node.values || !(segment.attrName in node.values)) {
        return false;
      }
      if (segment.attrValue !== void 0) {
        if (String(node.values[segment.attrName]) !== String(segment.attrValue)) {
          return false;
        }
      }
    }
    if (segment.position !== void 0) {
      if (!isCurrentNode) {
        return false;
      }
      const counter = node.counter ?? 0;
      if (segment.position === "first" && counter !== 0) {
        return false;
      } else if (segment.position === "odd" && counter % 2 !== 1) {
        return false;
      } else if (segment.position === "even" && counter % 2 !== 0) {
        return false;
      } else if (segment.position === "nth" && counter !== segment.positionValue) {
        return false;
      }
    }
    return true;
  }
  /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */
  matchesAny(exprSet) {
    return exprSet.matchesAny(this);
  }
  /**
   * Create a snapshot of current state.
   * @returns {Object}
   */
  snapshot() {
    return {
      path: this.path.map((node) => ({ ...node })),
      siblingStacks: this.siblingStacks.map((level) => level ? { counts: new Map(level.counts), total: level.total } : level),
      keptAttrs: this._keptAttrs.map((entry) => ({ ...entry }))
    };
  }
  /**
   * Restore state from snapshot.
   * @param {Object} snapshot
   */
  restore(snapshot) {
    this._pathStringCache = null;
    this.path = snapshot.path.map((node) => ({ ...node }));
    this.siblingStacks = snapshot.siblingStacks.map((level) => level ? { counts: new Map(level.counts), total: level.total } : level);
    this._keptAttrs = (snapshot.keptAttrs || []).map((entry) => ({ ...entry }));
  }
  /**
   * Return the read-only {@link MatcherView} for this matcher.
   *
   * The same instance is returned on every call — no allocation occurs.
   * It always reflects the current parser state and is safe to pass to
   * user callbacks without risk of accidental mutation.
   *
   * @returns {MatcherView}
   *
   * @example
   * const view = matcher.readOnly();
   * // pass view to callbacks — it stays in sync automatically
   * view.matches(expr);       // ✓
   * view.getCurrentTag();     // ✓
   * // view.push(...)         // ✗ method does not exist — caught by TypeScript
   */
  readOnly() {
    return this._view;
  }
};

// node_modules/is-unsafe/src/contexts/html.js
var HTML_PATTERNS = [
  {
    id: "html-script-open",
    description: "<script opening tag",
    pattern: /<script[\s>/]/i
  },
  {
    id: "html-script-close",
    description: "<\/script closing tag",
    pattern: /<\/script[\s>]/i
  },
  {
    id: "html-javascript-protocol",
    description: "javascript: URI scheme (with optional whitespace/encoding)",
    // Handles j&#x61;vascript:, j\u0061vascript:, and whitespace variants
    pattern: /j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i
  },
  {
    id: "html-vbscript-protocol",
    description: "vbscript: URI scheme",
    pattern: /vbscript[\t\n\r ]*:/i
  },
  {
    id: "html-data-html",
    description: "data:text/html URI \u2014 can execute scripts in browsers",
    pattern: /data[\t\n\r ]*:[\t\n\r ]*text\/html/i
  },
  {
    id: "html-data-xhtml",
    description: "data:application/xhtml+xml URI",
    pattern: /data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i
  },
  {
    id: "html-data-svg",
    description: "data:image/svg+xml URI \u2014 can execute scripts",
    pattern: /data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i
  },
  {
    id: "html-inline-event-handler",
    description: "Inline event handler attributes: onclick=, onerror=, onload=, etc.",
    // \bon ensures we match a word boundary so "phonetic=" is not caught
    pattern: /\bon\w{1,30}\s*=/i
  },
  {
    id: "html-entity-obfuscated-script",
    description: "HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)",
    // Entities include optional trailing semicolon: &#x3C; or &#x3C (both valid in HTML5)
    pattern: /(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i
  },
  {
    id: "html-entity-obfuscated-javascript",
    description: 'HTML-entity-encoded javascript: (partial \u2014 catches common &#106; or &#x6a; for "j")',
    pattern: /(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i
  },
  {
    id: "html-style-expression",
    description: "CSS expression() \u2014 IE-era code execution in style attributes",
    pattern: /style[\s\S]{0,20}expression\s*\(/i
  },
  {
    id: "html-object-embed",
    description: "<object or <embed tags that can load active content",
    pattern: /<(?:object|embed)[\s>/]/i
  },
  {
    id: "html-base-tag",
    description: "<base href= \u2014 can hijack all relative URLs on a page",
    pattern: /<base[\s>]/i
  },
  {
    id: "html-meta-refresh",
    description: '<meta http-equiv="refresh" \u2014 can redirect users',
    pattern: /<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i
  },
  {
    id: "html-srcdoc",
    description: "srcdoc= attribute on iframes \u2014 embeds HTML that can run scripts",
    pattern: /srcdoc\s*=/i
  },
  {
    id: "html-iframe",
    description: "<iframe tag",
    pattern: /<iframe[\s>/]/i
  },
  {
    id: "html-form",
    description: "<form tag \u2014 can be used for phishing / credential harvesting injection",
    pattern: /<form[\s>/]/i
  }
];
var html_default = HTML_PATTERNS;

// node_modules/is-unsafe/src/contexts/xml.js
var XML_PATTERNS = [
  {
    id: "xml-cdata-injection",
    description: "CDATA section injection: <![CDATA[ breaks out of text node context",
    pattern: /<!\[CDATA\[/i
  },
  {
    id: "xml-cdata-close",
    description: "CDATA close sequence: ]]> can terminate an enclosing CDATA section",
    pattern: /\]\]>/
  },
  {
    id: "xml-processing-instruction",
    description: "XML processing instruction: <?xml-stylesheet or <?php etc.",
    pattern: /<\?(?:xml[\- ]|php|asp)/i
  },
  {
    id: "xml-doctype-injection",
    description: "DOCTYPE declaration embedded in content \u2014 can define entities",
    // Match <!DOCTYPE followed by end-of-string, whitespace, or [ (internal subset)
    pattern: /<!DOCTYPE(?:[\s[]|$)/i
  },
  {
    id: "xml-entity-system",
    description: "SYSTEM keyword \u2014 used in external entity declarations (XXE)",
    pattern: /\bSYSTEM\s+["']/i
  },
  {
    id: "xml-entity-public",
    description: "PUBLIC keyword \u2014 used in external entity declarations (XXE)",
    pattern: /\bPUBLIC\s+["']/i
  },
  {
    id: "xml-entity-declaration",
    description: "<!ENTITY declaration \u2014 defines entities, potential XXE or entity expansion",
    pattern: /<!ENTITY[\s%]/i
  },
  {
    id: "xml-billion-laughs",
    description: "Entity reference chaining / billion laughs: repeated &eX; style references",
    // Heuristic: 3+ consecutive entity refs suggests expansion attack
    pattern: /(?:&\w{1,20};){3,}/
  },
  {
    id: "xml-namespace-confusion",
    description: "xmlns: attribute injection \u2014 can redefine namespaces to confuse parsers",
    pattern: /\bxmlns\s*(?::\w{1,40})?\s*=/i
  },
  {
    id: "xml-comment-injection",
    description: "<!-- comment injection \u2014 can hide content from some parsers",
    pattern: /<!--/
  },
  {
    id: "xml-comment-close",
    description: "--> closes an enclosing XML comment",
    pattern: /-->/
  },
  {
    id: "xml-pi-close",
    description: "?> closes an enclosing processing instruction",
    pattern: /\?>/
  }
];
var xml_default = XML_PATTERNS;

// node_modules/is-unsafe/src/contexts/svg.js
var SVG_PATTERNS = [
  {
    id: "svg-script-element",
    description: "<script element inside SVG executes JavaScript",
    pattern: /<script[\s>/]/i
  },
  {
    id: "svg-xlink-href-javascript",
    description: "xlink:href with javascript: \u2014 classic SVG XSS via <a> or <use>",
    pattern: /xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i
  },
  {
    id: "svg-href-javascript",
    description: "href= with javascript: in SVG context (<a>, <animate>, etc.)",
    pattern: /href\s*=\s*["']?\s*javascript\s*:/i
  },
  {
    id: "svg-foreignobject",
    description: "<foreignObject embeds HTML inside SVG \u2014 can execute scripts",
    pattern: /<foreignObject[\s>/]/i
  },
  {
    id: "svg-use-external",
    description: "<use xlink:href or href pointing to external resource (non-fragment URL)",
    // Match <use with href= where the value starts with a non-# character (external URL)
    // [\"'][^#] catches quoted values not starting with #; [^\"'#\s>] catches unquoted
    pattern: /<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i
  },
  {
    id: "svg-animate-href",
    description: '<animate attributeName="href" \u2014 can dynamically change href to javascript:',
    pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i
  },
  {
    id: "svg-animate-xlinkhref",
    description: '<animate attributeName="xlink:href"',
    pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i
  },
  {
    id: "svg-set-javascript",
    description: '<set to="javascript:..." \u2014 sets an attribute to a javascript: URI',
    pattern: /<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i
  },
  {
    id: "svg-event-handler",
    description: "SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.",
    pattern: /\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i
  },
  {
    id: "svg-handler-generic",
    description: "Generic on* handler catch-all for SVG attributes",
    pattern: /\bon\w{1,30}\s*=/i
  },
  {
    id: "svg-filter-feimage",
    description: "<feImage href= \u2014 filter primitive that can load external resources",
    pattern: /<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i
  },
  {
    id: "svg-image-external",
    description: "<image xlink:href with http/https or javascript protocol",
    pattern: /<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i
  },
  {
    id: "svg-style-javascript",
    description: "style= attribute containing javascript: (e.g. background:url(javascript:...))",
    pattern: /style\s*=[\s\S]{0,60}javascript\s*:/i
  }
];
var svg_default = SVG_PATTERNS;

// node_modules/is-unsafe/src/contexts/sql.js
var SQL_PATTERNS = [
  {
    id: "sql-block-comment-open",
    description: "SQL block comment open: /* ... */ \u2014 unusual in legitimate user text",
    pattern: /\/\*/
  },
  {
    id: "sql-union-select",
    description: "UNION SELECT \u2014 most common SQL injection aggregation attack",
    pattern: /\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i
  },
  {
    id: "sql-drop-table",
    description: "DROP TABLE \u2014 destructive DDL injection",
    pattern: /\bDROP\s{1,20}TABLE\b/i
  },
  {
    id: "sql-drop-database",
    description: "DROP DATABASE \u2014 destructive DDL injection",
    pattern: /\bDROP\s{1,20}DATABASE\b/i
  },
  {
    id: "sql-insert-into",
    description: "INSERT INTO \u2014 data injection",
    pattern: /\bINSERT\s{1,20}INTO\b/i
  },
  {
    id: "sql-delete-from",
    description: "DELETE FROM \u2014 data deletion injection",
    pattern: /\bDELETE\s{1,20}FROM\b/i
  },
  {
    id: "sql-update-set",
    description: "UPDATE ... SET \u2014 data modification injection",
    // Allows arbitrary content between UPDATE and SET (table name, alias, etc.)
    pattern: /\bUPDATE\b[\s\S]{1,60}\bSET\b/i
  },
  {
    id: "sql-exec-xp",
    description: "EXEC xp_ \u2014 MSSQL extended stored procedure execution",
    pattern: /\bEXEC(?:UTE)?\s{1,20}xp_/i
  },
  {
    id: "sql-tautology-string",
    description: `Classic string tautology: ' OR '1'='1 or " OR "1"="1"`,
    // Last quote is optional — injection may truncate it: ' OR '1'='1--
    pattern: /'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i
  },
  {
    id: "sql-tautology-numeric",
    description: "Numeric tautology: OR 1=1",
    pattern: /\bOR\s{1,10}1\s*=\s*1\b/i
  },
  {
    id: "sql-always-true-zero",
    description: "Numeric tautology: OR 0=0",
    pattern: /\bOR\s{1,10}0\s*=\s*0\b/i
  },
  {
    id: "sql-sleep-benchmark",
    description: "Time-based blind injection: SLEEP() or BENCHMARK()",
    pattern: /\b(?:SLEEP|BENCHMARK)\s*\(/i
  },
  {
    id: "sql-waitfor-delay",
    description: "MSSQL time-based blind injection: WAITFOR DELAY",
    pattern: /\bWAITFOR\s{1,20}DELAY\b/i
  },
  {
    id: "sql-char-function",
    description: "CHAR() function \u2014 used to obfuscate injected strings",
    pattern: /\bCHAR\s*\(\s*\d{1,3}/i
  },
  {
    id: "sql-information-schema",
    description: "INFORMATION_SCHEMA \u2014 reconnaissance query for table/column enumeration",
    pattern: /\bINFORMATION_SCHEMA\b/i
  }
];
var sql_default = SQL_PATTERNS;

// node_modules/is-unsafe/src/contexts/shell.js
var SHELL_PATTERNS = [
  {
    id: "shell-path-traversal-unix",
    description: "Unix path traversal: ../  \u2014 climbing the directory tree",
    pattern: /\.\.\//
  },
  {
    id: "shell-path-traversal-windows",
    description: "Windows path traversal: ..\\ \u2014 climbing the directory tree",
    pattern: /\.\.\\/
  },
  {
    id: "shell-path-traversal-encoded",
    description: "URL-encoded path traversal: %2e%2e or %2f variants",
    pattern: /%2e%2e|%2f\.\.|\.\.%2f/i
  },
  {
    id: "shell-null-byte",
    description: "Null byte injection: \\x00 or %00 \u2014 truncates strings in C-backed functions",
    pattern: /\x00|%00/
  },
  {
    id: "shell-semicolon",
    description: "Semicolon command separator: cmd1; cmd2",
    pattern: /;/
  },
  {
    id: "shell-pipe",
    description: "Pipe operator: cmd1 | cmd2",
    pattern: /\|/
  },
  {
    id: "shell-and-operator",
    description: "AND operator: cmd1 && cmd2",
    pattern: /&&/
  },
  {
    id: "shell-or-operator",
    description: "OR operator: cmd1 || cmd2",
    pattern: /\|\|/
  },
  {
    id: "shell-backtick",
    description: "Backtick command substitution: `cmd`",
    pattern: /`/
  },
  {
    id: "shell-dollar-paren",
    description: "Dollar-paren command substitution: $(cmd)",
    pattern: /\$\(/
  },
  {
    id: "shell-dollar-brace",
    description: "Dollar-brace variable expansion: ${var} \u2014 can be abused for injection",
    pattern: /\$\{/
  },
  {
    id: "shell-redirect-out",
    description: "Output redirection: cmd > file or cmd >> file",
    pattern: />{1,2}/
  },
  {
    id: "shell-redirect-in",
    description: "Input redirection: cmd < file",
    pattern: /</
  },
  {
    id: "shell-newline-injection",
    description: "Newline injection: \\n or \\r \u2014 can inject new shell commands",
    pattern: /[\n\r]/
  },
  {
    id: "shell-glob-star",
    description: "Glob expansion: * or ? \u2014 can expand to unintended files",
    // Only flag when combined with path separators to reduce false positives
    pattern: /[/\\][*?]/
  },
  {
    id: "shell-absolute-root",
    description: "Absolute root path injection: string starting with / or \\ (Windows UNC)",
    pattern: /^(?:\/|\\\\)/
  },
  {
    id: "shell-windows-drive",
    description: "Windows drive letter path injection: C:\\ or D:/",
    pattern: /^[a-zA-Z]:[/\\]/
  },
  {
    id: "shell-curl-wget",
    description: "curl/wget with URL or flags \u2014 can exfiltrate data or download payloads",
    // Require a URL scheme (http/https/ftp) or a flag (-) to reduce false positives
    // "curl is a tool" won't match; "curl http://..." or "curl -s ..." will
    pattern: /\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i
  }
];
var shell_default = SHELL_PATTERNS;

// node_modules/is-unsafe/src/contexts/redos.js
var REDOS_PATTERNS = [
  {
    id: "redos-nested-quantifier-plus",
    description: "Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.",
    // Matches any group containing a + quantifier, with an outer * or + — catches (a+)+, (.+b)*, etc.
    pattern: /\([^)]*\+[^)]*\)[+*]/
  },
  {
    id: "redos-nested-quantifier-star",
    description: "Nested * quantifier: (a*)* or (a*)+ \u2014 catastrophic backtracking",
    pattern: /\([^)]*\*[^)]*\)[*+]/
  },
  {
    id: "redos-nested-groups",
    description: "Doubly nested quantified groups: ((a+)+) \u2014 guaranteed catastrophic",
    pattern: /\(\([^)]{0,40}\)[+*]\)[+*]/
  },
  {
    id: "redos-alternation-overlap",
    description: "Overlapping alternation under quantifier: (a|a)+ \u2014 ambiguous NFA paths",
    // Detect repeated identical alternatives under a quantifier
    pattern: /\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/
  },
  {
    id: "redos-star-plus-concat",
    description: "(x*x)+ pattern \u2014 triggers super-linear backtracking",
    pattern: /\([^)]{0,10}\*[^)]{0,10}\)[+*]/
  },
  {
    id: "redos-dot-star-greedy",
    description: "(.*){n,} or (.+){n,} \u2014 repeated greedy dot quantifiers",
    pattern: /\(\.[*+]\)\{?\d/
  },
  {
    id: "redos-large-repetition",
    description: "Very large fixed or range repetition count {1000,} or {1000,n} \u2014 denial of service via backtracking",
    // Matches { followed by 4+ digits (≥1000), then optional ,digits }
    pattern: /\{\d{4,}(?:,\d*)?\}/
  },
  {
    id: "redos-catastrophic-alternation",
    description: "Long alternation with many similar branches \u2014 polynomial backtracking risk",
    // Heuristic: 10+ pipe-separated alternatives in a single group
    pattern: /\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/
  }
];
var redos_default = REDOS_PATTERNS;

// node_modules/is-unsafe/src/contexts/nosql.js
var sep = `["'\\s]*:`;
var NOSQL_PATTERNS = [
  // ─── MongoDB $ operator injection ────────────────────────────────────────
  {
    id: "nosql-where-operator",
    description: "$where \u2014 executes arbitrary JavaScript server-side in MongoDB",
    pattern: new RegExp(`\\$where${sep}`, "i")
  },
  {
    id: "nosql-ne-operator",
    description: '$ne \u2014 "not equal" operator used to bypass equality checks',
    pattern: new RegExp(`\\$ne${sep}`, "i")
  },
  {
    id: "nosql-gt-operator",
    description: '$gt \u2014 "greater than" used to bypass password/value checks',
    pattern: new RegExp(`\\$gte?${sep}`, "i")
  },
  {
    id: "nosql-lt-operator",
    description: '$lt / $lte \u2014 "less than" bypass variants',
    pattern: new RegExp(`\\$lte?${sep}`, "i")
  },
  {
    id: "nosql-regex-operator",
    description: "$regex \u2014 can be used to extract data character by character (blind injection)",
    pattern: new RegExp(`\\$regex${sep}`, "i")
  },
  {
    id: "nosql-or-operator",
    description: "$or \u2014 logical OR; used to create always-true conditions",
    pattern: new RegExp(`\\$or${sep}\\s*\\[`, "i")
  },
  {
    id: "nosql-and-operator",
    description: "$and \u2014 logical AND operator injection",
    pattern: new RegExp(`\\$and${sep}\\s*\\[`, "i")
  },
  {
    id: "nosql-nor-operator",
    description: "$nor \u2014 logical NOR operator injection",
    pattern: new RegExp(`\\$nor${sep}\\s*\\[`, "i")
  },
  {
    id: "nosql-exists-operator",
    description: "$exists \u2014 can enumerate fields to determine schema",
    pattern: new RegExp(`\\$exists${sep}`, "i")
  },
  {
    id: "nosql-in-operator",
    description: "$in \u2014 matches any value in a list; can enumerate values",
    pattern: new RegExp(`\\$in${sep}\\s*\\[`, "i")
  },
  {
    id: "nosql-expr-operator",
    description: "$expr \u2014 allows aggregation expressions in queries (MongoDB 3.6+)",
    pattern: new RegExp(`\\$expr${sep}`, "i")
  },
  {
    id: "nosql-function-operator",
    description: "$function \u2014 executes arbitrary JavaScript in MongoDB 4.4+",
    pattern: new RegExp(`\\$function${sep}`, "i")
  },
  {
    id: "nosql-accumulator-operator",
    description: "$accumulator \u2014 custom aggregation with arbitrary JS execution",
    pattern: new RegExp(`\\$accumulator${sep}`, "i")
  },
  // ─── Prototype pollution ─────────────────────────────────────────────────
  {
    id: "nosql-proto-pollution",
    description: "__proto__ \u2014 prototype pollution via object key injection",
    pattern: /__proto__/
  },
  {
    id: "nosql-constructor-prototype",
    description: "constructor.prototype \u2014 alternative prototype pollution vector (dot notation or JSON key)",
    // Matches dot-notation (obj.constructor.prototype) and JSON key adjacency
    // ("constructor": {"prototype": ...})
    pattern: /constructor[\s"':.,{\[]*prototype/i
  },
  {
    id: "nosql-proto-bracket",
    description: '["__proto__"] \u2014 bracket-notation prototype pollution',
    pattern: /\[["']__proto__["']\]/
  }
];
var nosql_default = NOSQL_PATTERNS;

// node_modules/is-unsafe/src/contexts/log.js
var LOG_PATTERNS = [
  // ─── CRLF / newline injection ─────────────────────────────────────────────
  {
    id: "log-crlf-injection",
    description: "CRLF injection: literal \\r or \\n embeds fake log lines",
    pattern: /[\r\n]/
  },
  {
    id: "log-url-encoded-crlf",
    description: "URL-encoded CRLF: %0d, %0a, %0D, %0A \u2014 decoded by some log parsers",
    pattern: /%0[dDaA]/
  },
  {
    id: "log-unicode-newline",
    description: "Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)",
    pattern: /[\u2028\u2029]/
  },
  // ─── Log4Shell / JNDI injection (CVE-2021-44228) ─────────────────────────
  {
    id: "log-log4shell-jndi",
    description: "Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j",
    pattern: /\$\{jndi\s*:/i
  },
  {
    id: "log-log4shell-obfuscated",
    description: "Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection",
    // ${::- is the Log4j lookup-bypass escape sequence; presence alone is suspicious
    pattern: /\$\{::-/
  },
  {
    id: "log-log4j-lookup",
    description: "Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} \u2014 data exfiltration",
    pattern: /\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i
  },
  // ─── Server-Side Template Injection (SSTI) in log messages ───────────────
  {
    id: "log-ssti-double-brace",
    description: "SSTI double-brace: {{expression}} \u2014 Jinja2, Twig, Handlebars, etc.",
    pattern: /\{\{[\s\S]{0,80}\}\}/
  },
  {
    id: "log-ssti-hash-brace",
    description: "SSTI hash-brace: #{expression} \u2014 Thymeleaf, Velocity, Ruby ERB",
    pattern: /#\{[\s\S]{0,80}\}/
  },
  {
    id: "log-ssti-dollar-brace",
    description: "SSTI/EL injection: ${expression with operators or method calls} \u2014 JSP EL, Freemarker, SpEL",
    // Require that the ${...} content looks like an expression, not a plain variable name.
    // Flags if the content contains: . ( * + operators, or known SSTI keywords.
    // This avoids flagging ${PATH}, ${HOME} etc. (plain shell variables).
    pattern: /\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i
  },
  {
    id: "log-ssti-percent-tag",
    description: "SSTI ERB/ASP tag: <%= expression %> \u2014 Ruby ERB, ASP",
    pattern: /<%=[\s\S]{0,80}%>/
  },
  // ─── Null byte ────────────────────────────────────────────────────────────
  {
    id: "log-null-byte",
    description: "Null byte: \\x00 or %00 \u2014 can truncate log entries in C-backed loggers",
    pattern: /\x00|%00/
  },
  // ─── ANSI escape injection ────────────────────────────────────────────────
  {
    id: "log-ansi-escape",
    description: "ANSI escape sequence: ESC[ \u2014 can manipulate terminal output when logs are tailed",
    pattern: /\x1b\[/
  }
];
var log_default = LOG_PATTERNS;

// node_modules/is-unsafe/src/contexts/sql-strict.js
var SQL_STRICT_EXTRA = [
  {
    id: "sql-line-comment",
    description: "SQL line comment: -- followed by whitespace or end of string",
    pattern: /--(?:\s|$)/
  },
  {
    id: "sql-stacked-query",
    description: "Stacked queries: semicolon immediately followed by a SQL keyword",
    pattern: /;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i
  },
  {
    id: "sql-hex-encoding",
    description: "Hex-encoded string injection: 0x41414141 style (MySQL)",
    pattern: /\b0x[0-9a-f]{4,}/i
  }
];
var SQL_STRICT_PATTERNS = [...sql_default, ...SQL_STRICT_EXTRA];
var sql_strict_default = SQL_STRICT_PATTERNS;

// node_modules/is-unsafe/src/index.js
html_default.label = "HTML";
xml_default.label = "XML";
svg_default.label = "SVG";
sql_default.label = "SQL";
sql_strict_default.label = "SQL-STRICT";
shell_default.label = "SHELL";
redos_default.label = "REDOS";
nosql_default.label = "NOSQL";
log_default.label = "LOG";
var VALID_CONTEXTS = Object.freeze({
  HTML: html_default,
  XML: xml_default,
  SVG: svg_default,
  SQL: sql_default,
  "SQL-STRICT": sql_strict_default,
  SHELL: shell_default,
  REDOS: redos_default,
  NOSQL: nosql_default,
  LOG: log_default
});
function assertString(value) {
  if (typeof value !== "string") {
    throw new TypeError(
      `is-unsafe: first argument must be a string, got ${typeof value}`
    );
  }
}
function assertContext(context) {
  if (context instanceof RegExp) return;
  if (Array.isArray(context)) {
    if (context.length === 0) {
      throw new TypeError("is-unsafe: context must not be an empty array");
    }
    if (Array.isArray(context[0])) {
      for (const list of context) {
        if (!Array.isArray(list) || list.length === 0) {
          throw new TypeError(
            "is-unsafe: each context in the array must be a non-empty pattern array (PatternList)"
          );
        }
      }
    }
    return;
  }
  throw new TypeError(
    `is-unsafe: second argument must be a PatternList (e.g. HTML), an array of PatternLists (e.g. [HTML, XML]), or a RegExp. Got: ${typeof context}`
  );
}
function normalise(context) {
  if (context instanceof RegExp) return { lists: null, regex: context };
  if (Array.isArray(context[0])) return { lists: context, regex: null };
  return { lists: [context], regex: null };
}
function matchList(value, list) {
  const label = list.label ?? "CUSTOM";
  for (const rule of list) {
    if (rule.pattern.test(value)) {
      return { context: label, id: rule.id, description: rule.description, pattern: rule.pattern };
    }
  }
  return null;
}
function isUnsafe(value, context) {
  assertString(value);
  assertContext(context);
  const { lists, regex } = normalise(context);
  if (regex) return regex.test(value);
  for (const list of lists) {
    if (matchList(value, list) !== null) return true;
  }
  return false;
}

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
function extractRawAttributes(prefixedAttrs, options) {
  if (!prefixedAttrs) return {};
  const attrs = options.attributesGroupName ? prefixedAttrs[options.attributesGroupName] : prefixedAttrs;
  if (!attrs) return {};
  const rawAttrs = {};
  for (const key in attrs) {
    if (key.startsWith(options.attributeNamePrefix)) {
      const rawName = key.substring(options.attributeNamePrefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}
function extractNamespace(rawTagName) {
  if (!rawTagName || typeof rawTagName !== "string") return void 0;
  const colonIndex = rawTagName.indexOf(":");
  if (colonIndex !== -1 && colonIndex > 0) {
    const ns = rawTagName.substring(0, colonIndex);
    if (ns !== "xmlns") {
      return ns;
    }
  }
  return void 0;
}
var OrderedObjParser = class {
  constructor(options, externalEntities) {
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
    this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
    this.entityExpansionCount = 0;
    this.currentExpandedLength = 0;
    this.doctypefound = false;
    let namedEntities = { ...XML };
    if (this.options.entityDecoder) {
      this.entityDecoder = this.options.entityDecoder;
    } else {
      if (typeof this.options.htmlEntities === "object") namedEntities = this.options.htmlEntities;
      else if (this.options.htmlEntities === true) namedEntities = { ...COMMON_HTML, ...CURRENCY };
      this.entityDecoder = new EntityDecoder({
        namedEntities: { ...namedEntities, ...externalEntities },
        numericAllowed: this.options.htmlEntities,
        limit: {
          maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
          maxExpandedLength: this.options.processEntities.maxExpandedLength,
          applyLimitsTo: this.options.processEntities.appliesTo
        },
        // onExternalEntity: (name, value) => isUnsafe(value) ? 'block' : 'allow',
        onInputEntity: (name, value) => (
          //TODO: VALID_CONTEXTS.HTML should be set only if this.options.htmlEntities
          isUnsafe(value, [html_default, xml_default]) ? ENTITY_ACTION.BLOCK : ENTITY_ACTION.ALLOW
        )
        //postCheck: resolved => resolved
      });
    }
    this.matcher = new Matcher();
    this.readonlyMatcher = this.matcher.readOnly();
    this.isCurrentNodeStopNode = false;
    this.stopNodeExpressionsSet = new ExpressionSet();
    const stopNodesOpts = this.options.stopNodes;
    if (stopNodesOpts && stopNodesOpts.length > 0) {
      for (let i = 0; i < stopNodesOpts.length; i++) {
        const stopNodeExp = stopNodesOpts[i];
        if (typeof stopNodeExp === "string") {
          this.stopNodeExpressionsSet.add(new Expression(stopNodeExp));
        } else if (stopNodeExp instanceof Expression) {
          this.stopNodeExpressionsSet.add(stopNodeExp);
        }
      }
      this.stopNodeExpressionsSet.seal();
    }
  }
};
function parseTextData(val, tagName2, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  const options = this.options;
  if (val !== void 0) {
    if (options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName2, jPath);
      const jPathOrMatcher = options.jPath ? jPath.toString() : jPath;
      const newval = options.tagValueProcessor(tagName2, val, jPathOrMatcher, hasAttributes, isLeafNode);
      if (newval === null || newval === void 0) {
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        return newval;
      } else if (options.trimValues) {
        return parseValue(val, options.parseTagValue, options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, options.parseTagValue, options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(":");
    const prefix = tagname.charAt(0) === "/" ? "/" : "";
    if (tags[0] === "xmlns") {
      return "";
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}
var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function buildAttributesMap(attrStr, jPath, tagName2, force = false) {
  const options = this.options;
  if (force === true || options.ignoreAttributes !== true && typeof attrStr === "string") {
    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    const attrs = {};
    const processedVals = new Array(len);
    let hasRawAttrs = false;
    const rawAttrsForMatcher = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      const oldVal = matches[i][4];
      if (attrName.length && oldVal !== void 0) {
        let val = oldVal;
        if (options.trimValues) val = val.trim();
        val = this.replaceEntitiesValue(val, tagName2, this.readonlyMatcher);
        processedVals[i] = val;
        rawAttrsForMatcher[attrName] = val;
        hasRawAttrs = true;
      }
    }
    if (hasRawAttrs && typeof jPath === "object" && jPath.updateCurrent) {
      jPath.updateCurrent(rawAttrsForMatcher);
    }
    const jPathStr = options.jPath ? jPath.toString() : this.readonlyMatcher;
    let hasAttrs = false;
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      if (this.ignoreAttributesFn(attrName, jPathStr)) continue;
      let aName = options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (options.transformAttributeName) {
          aName = options.transformAttributeName(aName);
        }
        aName = sanitizeName(aName, options);
        if (matches[i][4] !== void 0) {
          const oldVal = processedVals[i];
          const newVal = options.attributeValueProcessor(attrName, oldVal, jPathStr);
          if (newVal === null || newVal === void 0) {
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(oldVal, options.parseAttributeValue, options.numberParseOptions);
          }
          hasAttrs = true;
        } else if (options.allowBooleanAttributes) {
          attrs[aName] = true;
          hasAttrs = true;
        }
      }
    }
    if (!hasAttrs) return;
    if (options.attributesGroupName && !options.preserveOrder) {
      const attrCollection = {};
      attrCollection[options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
var parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  const xmlObj = new XmlNode("!xml");
  let currentNode = xmlObj;
  let textData = "";
  this.matcher.reset();
  this.entityDecoder.reset();
  this.entityExpansionCount = 0;
  this.currentExpandedLength = 0;
  this.doctypefound = false;
  const options = this.options;
  const docTypeReader = new DocTypeReader(options.processEntities);
  const xmlLen = xmlData.length;
  for (let i = 0; i < xmlLen; i++) {
    const ch = xmlData[i];
    if (ch === "<") {
      const c1 = xmlData.charCodeAt(i + 1);
      if (c1 === 47) {
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName2 = xmlData.substring(i + 2, closeIndex).trim();
        if (options.removeNSPrefix) {
          const colonIndex = tagName2.indexOf(":");
          if (colonIndex !== -1) {
            tagName2 = tagName2.substr(colonIndex + 1);
          }
        }
        tagName2 = transformTagName(options.transformTagName, tagName2, "", options).tagName;
        if (currentNode) {
          textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        }
        const lastTagName = this.matcher.getCurrentTag();
        if (tagName2 && options.unpairedTagsSet.has(tagName2)) {
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName2}>`);
        }
        if (lastTagName && options.unpairedTagsSet.has(lastTagName)) {
          this.matcher.pop();
          this.tagsNodeStack.pop();
        }
        this.matcher.pop();
        this.isCurrentNodeStopNode = false;
        currentNode = this.tagsNodeStack.pop();
        textData = "";
        i = closeIndex;
      } else if (c1 === 63) {
        let tagData = readTagExp(xmlData, i, false, "?>");
        if (!tagData) throw new Error("Pi Tag is not closed.");
        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        const attsMap = this.buildAttributesMap(tagData.tagExp, this.matcher, tagData.tagName, true);
        if (attsMap) {
          const ver = attsMap[this.options.attributeNamePrefix + "version"];
          this.entityDecoder.setXmlVersion(Number(ver) || 1);
          docTypeReader.setXmlVersion(Number(ver) || 1);
        }
        if (options.ignoreDeclaration && tagData.tagName === "?xml" || options.ignorePiTags) {
        } else {
          const childNode = new XmlNode(tagData.tagName);
          childNode.add(options.textNodeName, "");
          if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent && options.ignoreAttributes !== true) {
            childNode[":@"] = attsMap;
          }
          this.addChild(currentNode, childNode, this.readonlyMatcher, i);
        }
        i = tagData.closeIndex + 1;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
        const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
        if (options.commentPropName) {
          const comment = xmlData.substring(i + 4, endIndex - 2);
          textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
          currentNode.add(options.commentPropName, [{ [options.textNodeName]: comment }]);
        }
        i = endIndex;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 68) {
        if (this.doctypefound) throw new Error("Multiple DOCTYPE declarations found.");
        this.doctypefound = true;
        const result = docTypeReader.readDocType(xmlData, i);
        this.entityDecoder.addInputEntities(result.entities);
        i = result.i;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9, closeIndex);
        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        let val = this.parseTextData(tagExp, currentNode.tagname, this.readonlyMatcher, true, false, true, true);
        if (val == void 0) val = "";
        if (options.cdataPropName) {
          currentNode.add(options.cdataPropName, [{ [options.textNodeName]: tagExp }]);
        } else {
          currentNode.add(options.textNodeName, val);
        }
        i = closeIndex + 2;
      } else {
        let result = readTagExp(xmlData, i, options.removeNSPrefix);
        if (!result) {
          const context = xmlData.substring(Math.max(0, i - 50), Math.min(xmlLen, i + 50));
          throw new Error(`readTagExp returned undefined at position ${i}. Context: "${context}"`);
        }
        let tagName2 = result.tagName;
        const rawTagName = result.rawTagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;
        ({ tagName: tagName2, tagExp } = transformTagName(options.transformTagName, tagName2, tagExp, options));
        if (options.strictReservedNames && (tagName2 === options.commentPropName || tagName2 === options.cdataPropName || tagName2 === options.textNodeName || tagName2 === options.attributesGroupName)) {
          throw new Error(`Invalid tag name: ${tagName2}`);
        }
        if (currentNode && textData) {
          if (currentNode.tagname !== "!xml") {
            textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher, false);
          }
        }
        const lastTag = currentNode;
        if (lastTag && options.unpairedTagsSet.has(lastTag.tagname)) {
          currentNode = this.tagsNodeStack.pop();
          this.matcher.pop();
        }
        let isSelfClosing = false;
        if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
          isSelfClosing = true;
          if (tagName2[tagName2.length - 1] === "/") {
            tagName2 = tagName2.substr(0, tagName2.length - 1);
            tagExp = tagName2;
          } else {
            tagExp = tagExp.substr(0, tagExp.length - 1);
          }
          attrExpPresent = tagName2 !== tagExp;
        }
        let prefixedAttrs = null;
        let rawAttrs = {};
        let namespace = void 0;
        namespace = extractNamespace(rawTagName);
        if (tagName2 !== xmlObj.tagname) {
          this.matcher.push(tagName2, {}, namespace);
        }
        if (tagName2 !== tagExp && attrExpPresent) {
          prefixedAttrs = this.buildAttributesMap(tagExp, this.matcher, tagName2);
          if (prefixedAttrs) {
            rawAttrs = extractRawAttributes(prefixedAttrs, options);
          }
        }
        if (tagName2 !== xmlObj.tagname) {
          this.isCurrentNodeStopNode = this.isItStopNode();
        }
        const startIndex = i;
        if (this.isCurrentNodeStopNode) {
          let tagContent = "";
          if (isSelfClosing) {
            i = result.closeIndex;
          } else if (options.unpairedTagsSet.has(tagName2)) {
            i = result.closeIndex;
          } else {
            const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
            if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
            i = result2.i;
            tagContent = result2.tagContent;
          }
          const childNode = new XmlNode(tagName2);
          if (prefixedAttrs) {
            childNode[":@"] = prefixedAttrs;
          }
          childNode.add(options.textNodeName, tagContent);
          this.matcher.pop();
          this.isCurrentNodeStopNode = false;
          this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
        } else {
          if (isSelfClosing) {
            ({ tagName: tagName2, tagExp } = transformTagName(options.transformTagName, tagName2, tagExp, options));
            const childNode = new XmlNode(tagName2);
            if (prefixedAttrs) {
              childNode[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
            this.matcher.pop();
            this.isCurrentNodeStopNode = false;
          } else if (options.unpairedTagsSet.has(tagName2)) {
            const childNode = new XmlNode(tagName2);
            if (prefixedAttrs) {
              childNode[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
            this.matcher.pop();
            this.isCurrentNodeStopNode = false;
            i = result.closeIndex;
            continue;
          } else {
            const childNode = new XmlNode(tagName2);
            if (this.tagsNodeStack.length > options.maxNestedTags) {
              throw new Error("Maximum nested tags exceeded");
            }
            this.tagsNodeStack.push(currentNode);
            if (prefixedAttrs) {
              childNode[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    } else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};
function addChild(currentNode, childNode, matcher, startIndex) {
  if (!this.options.captureMetaData) startIndex = void 0;
  const jPathOrMatcher = this.options.jPath ? matcher.toString() : matcher;
  const result = this.options.updateTag(childNode.tagname, jPathOrMatcher, childNode[":@"]);
  if (result === false) {
  } else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  } else {
    currentNode.addChild(childNode, startIndex);
  }
}
function replaceEntitiesValue(val, tagName2, jPath) {
  const entityConfig = this.options.processEntities;
  if (!entityConfig || !entityConfig.enabled) {
    return val;
  }
  if (entityConfig.allowedTags) {
    const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    const allowed = Array.isArray(entityConfig.allowedTags) ? entityConfig.allowedTags.includes(tagName2) : entityConfig.allowedTags(tagName2, jPathOrMatcher);
    if (!allowed) {
      return val;
    }
  }
  if (entityConfig.tagFilter) {
    const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    if (!entityConfig.tagFilter(tagName2, jPathOrMatcher)) {
      return val;
    }
  }
  return this.entityDecoder.decode(val);
}
function saveTextToParentTag(textData, parentNode, matcher, isLeafNode) {
  if (textData) {
    if (isLeafNode === void 0) isLeafNode = parentNode.child.length === 0;
    textData = this.parseTextData(
      textData,
      parentNode.tagname,
      matcher,
      false,
      parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false,
      isLeafNode
    );
    if (textData !== void 0 && textData !== "")
      parentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}
function isItStopNode() {
  if (this.stopNodeExpressionsSet.size === 0) return false;
  return this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
  let attrBoundary = 0;
  const len = xmlData.length;
  const closeCode0 = closingChar.charCodeAt(0);
  const closeCode1 = closingChar.length > 1 ? closingChar.charCodeAt(1) : -1;
  let result = "";
  let segmentStart = i;
  for (let index = i; index < len; index++) {
    const code = xmlData.charCodeAt(index);
    if (attrBoundary) {
      if (code === attrBoundary) attrBoundary = 0;
    } else if (code === 34 || code === 39) {
      attrBoundary = code;
    } else if (code === closeCode0) {
      if (closeCode1 !== -1) {
        if (xmlData.charCodeAt(index + 1) === closeCode1) {
          result += xmlData.substring(segmentStart, index);
          return { data: result, index };
        }
      } else {
        result += xmlData.substring(segmentStart, index);
        return { data: result, index };
      }
    } else if (code === 9 && !attrBoundary) {
      result += xmlData.substring(segmentStart, index) + " ";
      segmentStart = index + 1;
    }
  }
}
function findClosingIndex(xmlData, str, i, errMsg) {
  const closingIndex = xmlData.indexOf(str, i);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
function findClosingChar(xmlData, char, i, errMsg) {
  const closingIndex = xmlData.indexOf(char, i);
  if (closingIndex === -1) throw new Error(errMsg);
  return closingIndex;
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
  if (!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName2 = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    tagName2 = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }
  const rawTagName = tagName2;
  if (removeNSPrefix) {
    const colonIndex = tagName2.indexOf(":");
    if (colonIndex !== -1) {
      tagName2 = tagName2.substr(colonIndex + 1);
      attrExpPresent = tagName2 !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName: tagName2,
    tagExp,
    closeIndex,
    attrExpPresent,
    rawTagName
  };
}
function readStopNodeData(xmlData, tagName2, i) {
  const startIndex = i;
  let openTagCount = 1;
  const xmllen = xmlData.length;
  for (; i < xmllen; i++) {
    if (xmlData[i] === "<") {
      const c1 = xmlData.charCodeAt(i + 1);
      if (c1 === 47) {
        const closeIndex = findClosingChar(xmlData, ">", i, `${tagName2} is not closed`);
        let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
        if (closeTagName === tagName2) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i),
              i: closeIndex
            };
          }
        }
        i = closeIndex;
      } else if (c1 === 63) {
        const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
        i = closeIndex;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
        const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
        i = closeIndex;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
        i = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i, false);
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName2 && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i = tagData.closeIndex;
        }
      }
    }
  }
}
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === "string") {
    const newval = val.trim();
    if (newval === "true") return true;
    else if (newval === "false") return false;
    else return toNumber(val, options);
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return "";
    }
  }
}
function transformTagName(fn, tagName2, tagExp, options) {
  if (fn) {
    const newTagName = fn(tagName2);
    if (tagExp === tagName2) {
      tagExp = newTagName;
    }
    tagName2 = newTagName;
  }
  tagName2 = sanitizeName(tagName2, options);
  return { tagName: tagName2, tagExp };
}
function sanitizeName(name, options) {
  if (criticalProperties.includes(name)) {
    throw new Error(`[SECURITY] Invalid name: "${name}" is a reserved JavaScript keyword that could cause prototype pollution`);
  } else if (DANGEROUS_PROPERTY_NAMES.includes(name)) {
    return options.onDangerousProperty(name);
  }
  return name;
}

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var METADATA_SYMBOL2 = XmlNode.getMetaDataSymbol();
function stripAttributePrefix(attrs, prefix) {
  if (!attrs || typeof attrs !== "object") return {};
  if (!prefix) return attrs;
  const rawAttrs = {};
  for (const key in attrs) {
    if (key.startsWith(prefix)) {
      const rawName = key.substring(prefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}
function prettify(node, options, matcher, readonlyMatcher) {
  return compress(node, options, matcher, readonlyMatcher);
}
function compress(arr, options, matcher, readonlyMatcher) {
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    if (property !== void 0 && property !== options.textNodeName) {
      const rawAttrs = stripAttributePrefix(
        tagObj[":@"] || {},
        options.attributeNamePrefix
      );
      matcher.push(property, rawAttrs);
    }
    if (property === options.textNodeName) {
      if (text === void 0) text = tagObj[property];
      else text += "" + tagObj[property];
    } else if (property === void 0) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, matcher, readonlyMatcher);
      const isLeaf = isLeafTag(val, options);
      if (Object.keys(val).length === 0 && options.alwaysCreateTextNode) {
        val[options.textNodeName] = "";
      }
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], readonlyMatcher, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }
      if (tagObj[METADATA_SYMBOL2] !== void 0 && typeof val === "object" && val !== null) {
        val[METADATA_SYMBOL2] = tagObj[METADATA_SYMBOL2];
      }
      if (compressedObj[property] !== void 0 && Object.prototype.hasOwnProperty.call(compressedObj, property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() : readonlyMatcher;
        if (options.isArray(property, jPathOrMatcher, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
      if (property !== void 0 && property !== options.textNodeName) {
        matcher.pop();
      }
    }
  }
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== void 0) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ":@") return key;
  }
}
function assignAttributes(obj, attrMap, readonlyMatcher, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      const rawAttrName = atrrName.startsWith(options.attributeNamePrefix) ? atrrName.substring(options.attributeNamePrefix.length) : atrrName;
      const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() + "." + rawAttrName : readonlyMatcher;
      if (options.isArray(atrrName, jPathOrMatcher, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var XMLParser = class {
  constructor(options) {
    this.externalEntities = {};
    this.options = buildOptions(options);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Uint8Array} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(xmlData, validationOption) {
    if (typeof xmlData !== "string" && xmlData.toString) {
      xmlData = xmlData.toString();
    } else if (typeof xmlData !== "string") {
      throw new Error("XML data is accepted in String or Bytes[] form.");
    }
    if (validationOption) {
      if (validationOption === true) validationOption = {};
      const result = validate(xmlData, validationOption);
      if (result !== true) {
        throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
      }
    }
    const orderedObjParser = new OrderedObjParser(this.options, this.externalEntities);
    const orderedResult = orderedObjParser.parseXml(xmlData);
    if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
    else return prettify(orderedResult, this.options, orderedObjParser.matcher, orderedObjParser.readonlyMatcher);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(key, value) {
    if (value.indexOf("&") !== -1) {
      throw new Error("Entity value can't have '&'");
    } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    } else if (value === "&") {
      throw new Error("An entity with value '&' is not permitted");
    } else {
      this.externalEntities[key] = value;
    }
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return XmlNode.getMetaDataSymbol();
  }
};

// src/lib/hwpxReader.ts
var import_jszip = __toESM(require_jszip_min(), 1);

// src/lib/errors.ts
var HwpxNotLoadedError = class extends Error {
  constructor() {
    super("HWPX\uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. loadFromArrayBuffer\uB97C \uBA3C\uC800 \uD638\uCD9C\uD558\uC138\uC694.");
    this.name = "HwpxNotLoadedError";
  }
};
var HwpxEncryptedDocumentError = class extends Error {
  constructor(message = "\uC554\uD638\uD654\uB41C HWPX \uBB38\uC11C\uB294 \uD604\uC7AC \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.") {
    super(message);
    this.name = "HwpxEncryptedDocumentError";
  }
};
var InvalidHwpxFormatError = class extends Error {
  constructor(message = "\uC720\uD6A8\uD55C HWPX(mimetype: application/hwp+zip) \uBB38\uC11C\uAC00 \uC544\uB2D9\uB2C8\uB2E4.") {
    super(message);
    this.name = "InvalidHwpxFormatError";
  }
};

// src/lib/hwpxReader.ts
var DECODER_UTF8 = new TextDecoder("utf-8");
var DECODER_UTF16LE = new TextDecoder("utf-16le");
var DECODER_UTF16BE = new TextDecoder("utf-16be");
function detectTextEncoding(bytes) {
  if (bytes.length >= 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191) return "utf-8";
  if (bytes.length >= 2 && bytes[0] === 255 && bytes[1] === 254) return "utf-16le";
  if (bytes.length >= 2 && bytes[0] === 254 && bytes[1] === 255) return "utf-16be";
  let zeroEven = 0, zeroOdd = 0, sample = Math.min(bytes.length, 1024);
  for (let i = 0; i < sample; i++) {
    if (bytes[i] === 0) i % 2 === 0 ? zeroEven++ : zeroOdd++;
  }
  if (zeroOdd > zeroEven * 2) return "utf-16le";
  if (zeroEven > zeroOdd * 2) return "utf-16be";
  return "utf-8";
}
function decodeBytesSmart(bytes) {
  const enc = detectTextEncoding(bytes);
  if (enc === "utf-8" && bytes.length >= 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191) {
    return DECODER_UTF8.decode(bytes.subarray(3));
  }
  if (enc === "utf-16le" && bytes.length >= 2 && bytes[0] === 255 && bytes[1] === 254) {
    return DECODER_UTF16LE.decode(bytes.subarray(2));
  }
  if (enc === "utf-16be" && bytes.length >= 2 && bytes[0] === 254 && bytes[1] === 255) {
    return DECODER_UTF16BE.decode(bytes.subarray(2));
  }
  if (enc === "utf-8") return DECODER_UTF8.decode(bytes);
  if (enc === "utf-16le") return DECODER_UTF16LE.decode(bytes);
  return DECODER_UTF16BE.decode(bytes);
}
function getOrEmpty(value) {
  return value ?? void 0;
}
function escapeMd(text) {
  return text.replace(/\\/g, "\\\\").replace(/([*_`~])/g, "\\$1").replace(/^([#>])/gm, "\\$1");
}
function pushTextNode(t, pieces) {
  if (t === void 0 || t === null) return;
  if (typeof t === "string") {
    pieces.push(t);
    return;
  }
  if (typeof t === "number" || typeof t === "boolean") {
    pieces.push(String(t));
    return;
  }
  if (Array.isArray(t)) {
    for (const item of t) pushTextNode(item, pieces);
    return;
  }
  if (typeof t === "object") {
    const inner = t["#text"];
    if (inner !== void 0) pushTextNode(inner, pieces);
  }
}
var HwpxReader = class {
  constructor() {
    __publicField(this, "zip", null);
    __publicField(this, "files", {});
    __publicField(this, "encryptedCache", null);
    __publicField(this, "characterProperties", /* @__PURE__ */ new Map());
    __publicField(this, "fontFaces", /* @__PURE__ */ new Map());
  }
  async loadFromArrayBuffer(buffer) {
    const zip = await import_jszip.default.loadAsync(buffer);
    this.zip = zip;
    this.files = {};
    const entries = Object.keys(zip.files);
    await Promise.all(
      entries.map(async (name) => {
        const file = zip.file(name);
        if (!file) return;
        this.files[name] = new Uint8Array(await file.async("uint8array"));
      })
    );
    const mime = this.getTextFile("mimetype")?.trim();
    if (mime && !this.isLikelyHwpxMime(mime)) {
    }
    const containerXml = this.getTextFile("META-INF/container.xml");
    if (containerXml) {
      const cx = this.parseXml(containerXml);
      void cx;
    }
    this.parseStyleDefinitions();
  }
  isLikelyHwpxMime(m2) {
    const s = m2.toLowerCase();
    return s === "application/hwp+zip" || s === "application/owpml" || s.includes("hwp+zip") || s.includes("owpml") || s.includes("hwpx");
  }
  getTextFile(path) {
    const bytes = this.files[path];
    if (!bytes) return null;
    return decodeBytesSmart(bytes);
  }
  findFilePathIgnoreCase(targetPath) {
    const lower = targetPath.toLowerCase();
    for (const key of Object.keys(this.files)) {
      if (key.toLowerCase() === lower) return key;
    }
    return null;
  }
  parseXml(xml) {
    try {
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@",
        // 텍스트 내부 공백 보존 — `<hp:t>이것은 </hp:t>` 같은 run 사이 공백이 사라지지 않도록
        trimValues: false,
        removeNSPrefix: true,
        // 텍스트 노드 자동 타입 변환 끄기 — "1", "true" 등이 number/boolean 으로 변환되는 것을 방지
        parseTagValue: false,
        parseAttributeValue: false
      });
      const obj = parser.parse(xml);
      return obj;
    } catch (_err) {
      return null;
    }
  }
  summarizePackage() {
    const hasEncryptionInfo = this.detectEncryption();
    const contentsFiles = Object.keys(this.files).filter((p) => p.startsWith("Contents/")).sort();
    const contentHpf = this.getTextFile("Contents/content.hpf");
    let manifest;
    let spine;
    if (contentHpf) {
      const xml = this.parseXml(contentHpf);
      const pkg = xml?.package ?? xml?.opf?.package;
      const man = pkg?.manifest?.item;
      if (man) {
        const items = Array.isArray(man) ? man : [man];
        manifest = items.map((it2) => ({
          id: it2?.["@id"],
          href: it2?.["@href"],
          mediaType: it2?.["@media-type"] ?? it2?.["@mediaType"]
        }));
      }
      const sp = pkg?.spine?.itemref ?? pkg?.spine?.itemRef;
      if (sp) {
        const refs = Array.isArray(sp) ? sp : [sp];
        spine = refs.map((r) => r?.["@idref"] ?? r?.["@idRef"]).filter(Boolean);
      }
    }
    return { hasEncryptionInfo, contentsFiles, manifest, spine };
  }
  getSectionPathsBySpine() {
    const contentHpf = this.getTextFile("Contents/content.hpf");
    if (!contentHpf) return null;
    const xml = this.parseXml(contentHpf);
    const pkg = xml?.package ?? xml?.opf?.package;
    const man = pkg?.manifest?.item;
    const map = /* @__PURE__ */ new Map();
    if (man) {
      const items = Array.isArray(man) ? man : [man];
      for (const it2 of items) {
        const id = it2?.["@id"];
        const href = it2?.["@href"];
        if (id && href && /Contents\/section\d+\.xml$/i.test(href)) map.set(id, href);
      }
    }
    const sp = pkg?.spine?.itemref ?? pkg?.spine?.itemRef;
    const refs = sp ? Array.isArray(sp) ? sp : [sp] : [];
    const paths = [];
    for (const r of refs) {
      const id = r?.["@idref"] ?? r?.["@idRef"];
      const href = id ? map.get(id) : void 0;
      if (href && this.files[href]) paths.push(href);
    }
    return paths.length ? paths : null;
  }
  detectEncryption() {
    if (this.encryptedCache !== null) return this.encryptedCache;
    const manifestXml = this.getTextFile("META-INF/manifest.xml");
    if (!manifestXml) {
      this.encryptedCache = false;
      return false;
    }
    const obj = this.parseXml(manifestXml);
    const has = this.containsEncryptionMarker(obj);
    this.encryptedCache = !!has;
    return this.encryptedCache;
  }
  containsEncryptionMarker(node) {
    if (!node) return false;
    if (typeof node === "string") {
      return /encrypt|cipher/i.test(node);
    }
    if (Array.isArray(node)) {
      for (const item of node) {
        if (this.containsEncryptionMarker(item)) return true;
      }
      return false;
    }
    if (typeof node === "object") {
      for (const [k2, v2] of Object.entries(node)) {
        if (/encrypt|cipher/i.test(k2)) return true;
        if (typeof v2 === "string" && /encrypt|cipher/i.test(v2)) return true;
        if (this.containsEncryptionMarker(v2)) return true;
      }
    }
    return false;
  }
  readMetadata() {
    const contentHpf = this.getTextFile("Contents/content.hpf");
    const metadata = {};
    if (contentHpf) {
      const xml = this.parseXml(contentHpf);
      const md = xml?.package?.metadata;
      if (md) {
        metadata.title = getOrEmpty(md["dc:title"] ?? md.title);
        metadata.creator = getOrEmpty(md["dc:creator"] ?? md.creator);
        metadata.created = getOrEmpty(md["dcterms:created"] ?? md.created);
        metadata.modified = getOrEmpty(md["dcterms:modified"] ?? md.modified);
      }
    }
    const versionXml = this.getTextFile("version.xml");
    if (versionXml) {
      const v2 = this.parseXml(versionXml);
      const ver = v2?.Version?.OWPMLVersion ?? v2?.version?.owpmlVersion;
      if (typeof ver === "string") {
        metadata.version = ver;
      }
    }
    const settingsXml = this.getTextFile("settings.xml");
    if (settingsXml) {
      const s = this.parseXml(settingsXml);
      const app = s?.HWPApplicationSetting ?? s?.Settings ?? s?.settings;
      const caret = app?.CaretPosition ?? app?.caretPosition;
      if (caret && (caret["@listIDRef"] || caret["@paraIDRef"] || caret["@pos"])) {
        const listId = caret["@listIDRef"] ?? "0";
        const paraId = caret["@paraIDRef"] ?? "0";
        const pos = caret["@pos"] ?? "0";
        metadata.caretPosition = `${listId}:${paraId}:${pos}`;
      }
    }
    return metadata;
  }
  async getDocumentInfo() {
    if (!this.zip) throw new HwpxNotLoadedError();
    const summary = this.summarizePackage();
    const metadata = this.readMetadata();
    return { metadata, summary };
  }
  async extractText(options) {
    if (!this.zip) throw new HwpxNotLoadedError();
    const summary = this.summarizePackage();
    if (summary.hasEncryptionInfo) {
      throw new HwpxEncryptedDocumentError();
    }
    const joiner = options?.joinParagraphs ?? "\n";
    let sectionPaths = this.getSectionPathsBySpine() ?? Object.keys(this.files).filter((p) => /^contents\/section\d+\.xml$/.test(p.toLowerCase())).sort((a, b2) => {
      const na = Number(a.match(/section(\d+)\.xml/)?.[1] ?? 0);
      const nb = Number(b2.match(/section(\d+)\.xml/)?.[1] ?? 0);
      return na - nb;
    });
    if (sectionPaths.length === 0) {
      const candidates = Object.keys(this.files).filter((p) => p.startsWith("Contents/") && p.toLowerCase().endsWith(".xml"));
      for (const p of candidates) {
        const xmlText = this.getTextFile(p);
        if (!xmlText) continue;
        const xml = this.parseXml(xmlText);
        if (xml && (xml.sec || xml.section || xml["hp:section"])) {
          sectionPaths.push(p);
        }
      }
      sectionPaths.sort((a, b2) => {
        const na = Number(a.match(/section(\d+)\.xml/)?.[1] ?? 0);
        const nb = Number(b2.match(/section(\d+)\.xml/)?.[1] ?? 0);
        return na - nb;
      });
    }
    const paragraphs = [];
    for (const path of sectionPaths) {
      const xmlText = this.getTextFile(path);
      if (!xmlText) continue;
      const xml = this.parseXml(xmlText);
      const section = xml?.sec ?? xml?.section ?? xml?.["hp:section"];
      if (!section) {
        const segs = [];
        this.collectAllText(xml, segs);
        if (segs.length) paragraphs.push(segs.join(""));
        continue;
      }
      const ps = section?.p ?? section?.["hp:p"];
      if (!ps) {
        const segs = [];
        this.collectAllText(section, segs);
        if (segs.length) paragraphs.push(segs.join(""));
        continue;
      }
      const paras = Array.isArray(ps) ? ps : [ps];
      for (const p of paras) {
        paragraphs.push(this.extractParagraphText(p));
      }
    }
    const combined = paragraphs.join(joiner);
    if (combined.trim().length > 0) return combined;
    const prvPath = this.findFilePathIgnoreCase("Preview/PrvText.txt") || this.findFilePathIgnoreCase("preview/prvtext.txt");
    if (prvPath) {
      const prv = this.getTextFile(prvPath);
      if (prv && prv.trim().length > 0) return prv;
    }
    return combined;
  }
  /**
   * 한 문단(<hp:p>)에서 텍스트를 추출. 표/이미지 등 인라인 컨트롤이 있으면 셀/내부 문단을 재귀 탐색.
   *
   * 표는 셀 단위로 텍스트를 모은 후 같은 행 내 셀은 공백으로, 행 사이는 줄바꿈으로 결합한다.
   */
  extractParagraphText(p) {
    const runs = p?.run ?? p?.["hp:run"];
    if (!runs) return "";
    const runArr = Array.isArray(runs) ? runs : [runs];
    const pieces = [];
    for (const run of runArr) {
      if (run?.secPr || run?.ctrl) continue;
      const t = run?.t ?? run?.["hp:t"];
      pushTextNode(t, pieces);
      const tbl = run?.tbl ?? run?.["hp:tbl"];
      if (tbl) {
        const tbls = Array.isArray(tbl) ? tbl : [tbl];
        for (const tb of tbls) {
          pieces.push(this.extractTableText(tb));
        }
      }
    }
    return pieces.join("");
  }
  extractTableText(tbl) {
    const trs = tbl?.tr ?? tbl?.["hp:tr"];
    if (!trs) return "";
    const trArr = Array.isArray(trs) ? trs : [trs];
    const rowTexts = [];
    for (const tr of trArr) {
      const tcs = tr?.tc ?? tr?.["hp:tc"];
      if (!tcs) continue;
      const tcArr = Array.isArray(tcs) ? tcs : [tcs];
      const cellTexts = [];
      for (const tc of tcArr) {
        cellTexts.push(this.extractCellText(tc));
      }
      rowTexts.push(cellTexts.join(" "));
    }
    return rowTexts.join("\n");
  }
  extractCellText(tc) {
    const sub = tc?.subList ?? tc?.["hp:subList"];
    if (!sub) return "";
    const ps = sub?.p ?? sub?.["hp:p"];
    if (!ps) return "";
    const paras = Array.isArray(ps) ? ps : [ps];
    return paras.map((q2) => this.extractParagraphText(q2)).join("\n");
  }
  /**
   * 문서 전체를 Markdown 으로 변환.
   * 표는 마크다운 표 (셀 병합은 평탄화), 이미지는 `![](BinData/...)`.
   */
  async extractMarkdown(options) {
    if (!this.zip) throw new HwpxNotLoadedError();
    const summary = this.summarizePackage();
    if (summary.hasEncryptionInfo) {
      throw new HwpxEncryptedDocumentError();
    }
    let sectionPaths = this.getSectionPathsBySpine() ?? Object.keys(this.files).filter((p) => /^contents\/section\d+\.xml$/.test(p.toLowerCase())).sort();
    if (sectionPaths.length === 0) {
      const candidates = Object.keys(this.files).filter((p) => p.startsWith("Contents/") && p.toLowerCase().endsWith(".xml"));
      for (const p of candidates) {
        const xmlText = this.getTextFile(p);
        if (!xmlText) continue;
        const xml = this.parseXml(xmlText);
        if (xml && (xml.sec || xml.section || xml["hp:section"])) sectionPaths.push(p);
      }
    }
    const blocks = [];
    for (const path of sectionPaths) {
      const xmlText = this.getTextFile(path);
      if (!xmlText) continue;
      const xml = this.parseXml(xmlText);
      const section = xml?.sec ?? xml?.section ?? xml?.["hp:section"];
      if (!section) continue;
      const ps = section?.p ?? section?.["hp:p"];
      if (!ps) continue;
      const paras = Array.isArray(ps) ? ps : [ps];
      for (const p of paras) {
        const md = this.extractParagraphMarkdown(p, options);
        if (md.trim().length > 0) blocks.push(md);
      }
    }
    return blocks.join("\n\n").trim() + "\n";
  }
  extractParagraphMarkdown(p, options) {
    const runs = p?.run ?? p?.["hp:run"];
    if (!runs) return "";
    const runArr = Array.isArray(runs) ? runs : [runs];
    const parts = [];
    let textBuf = "";
    for (const run of runArr) {
      if (run?.secPr || run?.ctrl) continue;
      const t = run?.t ?? run?.["hp:t"];
      const pieces = [];
      pushTextNode(t, pieces);
      let raw = pieces.join("");
      if (raw.length > 0) {
        const charPrId = run?.["@charPrIDRef"];
        if (charPrId !== void 0 && this.characterProperties.has(String(charPrId))) {
          const cs = this.characterProperties.get(String(charPrId));
          let s = escapeMd(raw);
          if (cs?.bold) s = `**${s}**`;
          if (cs?.italic) s = `*${s}*`;
          textBuf += s;
        } else {
          textBuf += escapeMd(raw);
        }
      }
      const tbl = run?.tbl ?? run?.["hp:tbl"];
      if (tbl) {
        if (textBuf) {
          parts.push(textBuf);
          textBuf = "";
        }
        const tbls = Array.isArray(tbl) ? tbl : [tbl];
        for (const tb of tbls) parts.push(this.extractTableMarkdown(tb, options));
      }
      const pic = run?.pic ?? run?.["hp:pic"];
      if (pic) {
        if (textBuf) {
          parts.push(textBuf);
          textBuf = "";
        }
        const href = pic?.["@href"];
        const linked = typeof href === "string" && href.length > 0 ? href : void 0;
        const binRef = linked ? void 0 : this.findBinRefInRun(run);
        const path = linked ?? (binRef ? this.resolveBinaryPath(binRef) : void 0);
        if (path) {
          if (options?.embedImages) {
            const data = this.files[path];
            if (data) {
              parts.push(`![](data:${this.detectMimeType(path)};base64,${this.toBase64(data)})`);
            } else {
              parts.push(`![](${path})`);
            }
          } else if (options?.imageSrcResolver) {
            parts.push(`![](${options.imageSrcResolver(path)})`);
          } else {
            parts.push(`![](${path})`);
          }
        }
      }
    }
    if (textBuf) parts.push(textBuf);
    return parts.join("\n\n");
  }
  extractTableMarkdown(tbl, options) {
    const trs = tbl?.tr ?? tbl?.["hp:tr"];
    if (!trs) return "";
    const trArr = Array.isArray(trs) ? trs : [trs];
    const rows = [];
    let maxCols = 0;
    for (const tr of trArr) {
      const tcs = tr?.tc ?? tr?.["hp:tc"];
      if (!tcs) continue;
      const tcArr = Array.isArray(tcs) ? tcs : [tcs];
      const cellTexts = [];
      for (const tc of tcArr) {
        const sub = tc?.subList ?? tc?.["hp:subList"];
        if (!sub) {
          cellTexts.push("");
          continue;
        }
        const cps = sub?.p ?? sub?.["hp:p"];
        if (!cps) {
          cellTexts.push("");
          continue;
        }
        const cellParas = Array.isArray(cps) ? cps : [cps];
        const inner = cellParas.map((q2) => this.extractParagraphMarkdown(q2, options)).join(" ").replace(/\n+/g, " ").replace(/\|/g, "\\|");
        cellTexts.push(inner);
      }
      if (cellTexts.length > maxCols) maxCols = cellTexts.length;
      rows.push(cellTexts);
    }
    if (rows.length === 0) return "";
    for (const r of rows) {
      while (r.length < maxCols) r.push("");
    }
    const fmt = (cells) => `| ${cells.map((c) => c || " ").join(" | ")} |`;
    const lines = [];
    lines.push(fmt(rows[0]));
    lines.push(fmt(new Array(maxCols).fill("---")));
    for (let i = 1; i < rows.length; i++) lines.push(fmt(rows[i]));
    return lines.join("\n");
  }
  // 아주 단순한 텍스트 템플릿 치환: {{key}} → value (문단 텍스트에만 적용)
  applyTemplateToText(raw, data) {
    return raw.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_m, key) => {
      const value = key.split(".").reduce((acc, k2) => acc && acc[k2] !== void 0 ? acc[k2] : void 0, data);
      return value === void 0 || value === null ? "" : String(value);
    });
  }
  async extractHtml(options) {
    if (!this.zip) throw new HwpxNotLoadedError();
    const summary = this.summarizePackage();
    if (summary.hasEncryptionInfo) {
      throw new HwpxEncryptedDocumentError();
    }
    const paragraphTag = options?.paragraphTag ?? "p";
    const enableImages = options?.renderImages ?? true;
    const enableTables = options?.renderTables ?? true;
    const enableStyles = options?.renderStyles ?? true;
    let sectionPaths = this.getSectionPathsBySpine() ?? Object.keys(this.files).filter((p) => /^contents\/section\d+\.xml$/.test(p.toLowerCase())).sort((a, b2) => {
      const na = Number(a.match(/section(\d+)\.xml/)?.[1] ?? 0);
      const nb = Number(b2.match(/section(\d+)\.xml/)?.[1] ?? 0);
      return na - nb;
    });
    if (sectionPaths.length === 0) {
      const candidates = Object.keys(this.files).filter((p) => p.startsWith("Contents/") && p.toLowerCase().endsWith(".xml"));
      for (const p of candidates) {
        const xmlText = this.getTextFile(p);
        if (!xmlText) continue;
        const xml = this.parseXml(xmlText);
        if (xml && (xml.sec || xml.section || xml["hp:section"])) {
          sectionPaths.push(p);
        }
      }
      sectionPaths.sort((a, b2) => {
        const na = Number(a.match(/section(\d+)\.xml/)?.[1] ?? 0);
        const nb = Number(b2.match(/section(\d+)\.xml/)?.[1] ?? 0);
        return na - nb;
      });
    }
    const tableClass = options?.tableClassName ?? "hwpx-table";
    const pieces = [];
    for (const path of sectionPaths) {
      const xmlText = this.getTextFile(path);
      if (!xmlText) continue;
      const xml = this.parseXml(xmlText);
      const section = xml?.sec ?? xml?.section ?? xml?.["hp:section"];
      if (!section) continue;
      const ps = section?.p ?? section?.["hp:p"];
      if (ps) {
        const paras = Array.isArray(ps) ? ps : [ps];
        for (const p of paras) {
          const inner = this.renderNodeToHtml(p, { enableImages, enableStyles }, options);
          const alignStyle = this.getAlignStyle(p);
          const styleAttr = alignStyle ? ` style="${alignStyle}"` : "";
          pieces.push(`<${paragraphTag}${styleAttr}>${inner}</${paragraphTag}>`);
          if (enableTables) {
            for (const tbl of this.collectTablesInParagraph(p)) {
              pieces.push(this.renderTableHtml(tbl, tableClass, options));
            }
          }
        }
      }
      const tbls = section?.tbl ?? section?.["hp:tbl"];
      if (tbls && enableTables) {
        const tables = Array.isArray(tbls) ? tbls : [tbls];
        for (const tbl of tables) {
          pieces.push(this.renderTableHtml(tbl, tableClass, options));
        }
      }
    }
    let html = pieces.join("");
    if (html.trim().length > 0) return html;
    const prvPath = this.findFilePathIgnoreCase("Preview/PrvText.txt") || this.findFilePathIgnoreCase("preview/prvtext.txt");
    if (prvPath) {
      const prv = this.getTextFile(prvPath);
      if (prv && prv.trim().length > 0) {
        const escaped = this.escapeHtml(prv);
        html = `<p>${escaped.replace(/\n+/g, "</p><p>")}</p>`;
      }
    }
    return html;
  }
  collectTablesInParagraph(p) {
    const out = [];
    const runs = p?.run ?? p?.["hp:run"];
    if (!runs) return out;
    const runArr = Array.isArray(runs) ? runs : [runs];
    for (const run of runArr) {
      if (run?.secPr || run?.ctrl) continue;
      const tbl = run?.tbl ?? run?.["hp:tbl"];
      if (!tbl) continue;
      if (Array.isArray(tbl)) out.push(...tbl);
      else out.push(tbl);
    }
    return out;
  }
  renderTableHtml(tbl, tableClass, options) {
    const trs = tbl?.tr ?? tbl?.["hp:tr"];
    const rows = trs ? Array.isArray(trs) ? trs : [trs] : [];
    const enableImages = options?.renderImages ?? true;
    const enableStyles = options?.renderStyles ?? true;
    const rowHtml = [];
    rows.forEach((tr, rowIndex) => {
      const tcs = tr?.tc ?? tr?.["hp:tc"];
      const cells = tcs ? Array.isArray(tcs) ? tcs : [tcs] : [];
      const cellHtml = [];
      for (const tc of cells) {
        const inner = this.renderCellContentHtml(tc, { enableImages, enableStyles }, options);
        const cellSpan = tc?.cellSpan ?? tc?.["hp:cellSpan"];
        const colSpan = tc?.["@colSpan"] ?? tc?.["@colspan"] ?? tc?.["@gridSpan"] ?? cellSpan?.["@colSpan"];
        const rowSpan = tc?.["@rowSpan"] ?? tc?.["@rowspan"] ?? cellSpan?.["@rowSpan"];
        const alignStyle = this.getAlignStyle(tc);
        const attrs = [];
        if (colSpan && String(colSpan) !== "1") attrs.push(` colspan="${String(colSpan)}"`);
        if (rowSpan && String(rowSpan) !== "1") attrs.push(` rowspan="${String(rowSpan)}"`);
        if (alignStyle) attrs.push(` style="${alignStyle}"`);
        const isHeader = options?.tableHeaderFirstRow && rowIndex === 0;
        const tag = isHeader ? "th" : "td";
        cellHtml.push(`<${tag}${attrs.join("")}>${inner}</${tag}>`);
      }
      rowHtml.push(`<tr>${cellHtml.join("")}</tr>`);
    });
    return `<table class="${tableClass}">${rowHtml.join("")}</table>`;
  }
  renderCellContentHtml(tc, flags, options) {
    const sub = tc?.subList ?? tc?.["hp:subList"];
    if (sub) return this.renderNodeToHtml(sub, flags, options);
    return this.renderNodeToHtml(tc, flags, options);
  }
  getAlignStyle(node) {
    const a = node?.["@align"] ?? node?.["@textAlign"] ?? node?.paraPr?.["@align"] ?? node?.cellPr?.["@align"];
    if (typeof a !== "string") return "";
    const v2 = a.toLowerCase();
    if (v2 === "center" || v2 === "right" || v2 === "left" || v2 === "justify") {
      return `text-align:${v2}`;
    }
    return "";
  }
  renderNodeToHtml(node, flags, options) {
    if (!node) return "";
    const ps = node?.["hp:p"] ?? node?.p;
    if (ps) {
      const paras = Array.isArray(ps) ? ps : [ps];
      return paras.map((p) => this.renderNodeToHtml(p, flags, options)).join("\n");
    }
    const runs = node?.["hp:run"] ?? node?.run;
    const runArr = runs ? Array.isArray(runs) ? runs : [runs] : [];
    if (runArr.length > 0) {
      return runArr.map((run) => this.renderRunToHtml(run, flags, options)).join("");
    }
    if (typeof node === "string") return this.escapeHtml(node);
    if (typeof node?.["#text"] === "string") return this.escapeHtml(node["#text"]);
    return "";
  }
  collectAllText(node, out) {
    if (node == null) return;
    if (typeof node === "object" && (node.secPr || node.ctrl || node.linesegarray)) {
      return;
    }
    if (typeof node === "string") {
      out.push(node);
      return;
    }
    if (typeof node === "object") {
      const text = node["#text"];
      if (typeof text === "string") out.push(text);
      const t = node.t;
      if (typeof t === "string") {
        out.push(t);
        return;
      }
      for (const [k2, v2] of Object.entries(node)) {
        if (k2 === "#text" || k2 === "t") continue;
        if (k2 === "secPr" || k2 === "ctrl" || k2 === "linesegarray") continue;
        this.collectAllText(v2, out);
      }
    }
  }
  renderRunToHtml(run, flags, options) {
    if (run?.secPr || run?.ctrl) return "";
    const t = run?.["hp:t"] ?? run?.t;
    const text = typeof t === "string" ? t : typeof t?.["#text"] === "string" ? t["#text"] : "";
    let html = this.escapeHtml(text);
    if (flags.enableImages) {
      const binRef = this.findBinRefInRun(run);
      if (typeof binRef === "string") {
        const binPath = this.resolveBinaryPath(binRef);
        if (binPath) {
          let src;
          if (options?.embedImages) {
            const data = this.files[binPath];
            if (data) {
              const mime = this.detectMimeType(binPath);
              const b64 = this.toBase64(data);
              src = `data:${mime};base64,${b64}`;
            } else {
              src = binPath;
            }
          } else if (options?.imageSrcResolver) {
            src = options.imageSrcResolver(binPath);
          } else {
            src = binPath;
          }
          html += `<img src="${this.escapeHtml(src)}" alt="" />`;
        }
      }
    }
    if (flags.enableStyles) {
      const charPrId = run?.["@charPrIDRef"];
      if (charPrId && this.characterProperties.has(charPrId)) {
        const charProps = this.characterProperties.get(charPrId);
        let open = "";
        let close = "";
        const styleParts = [];
        if (charProps?.bold) {
          open += "<strong>";
          close = "</strong>" + close;
        }
        if (charProps?.italic) {
          open += "<em>";
          close = "</em>" + close;
        }
        if (charProps?.underline && charProps.underline?.["@type"] !== "NONE") {
          styleParts.push("text-decoration:underline");
        }
        if (charProps?.textColor && charProps.textColor !== "#000000") {
          styleParts.push(`color:${this.normalizeColor(charProps.textColor)}`);
        }
        if (charProps?.height) {
          const sizeInPt = this.convertHwpUnitToPoints(charProps.height);
          styleParts.push(`font-size:${sizeInPt}pt`);
        }
        if (charProps?.shadeColor && charProps.shadeColor !== "none" && charProps.shadeColor !== "#FFFFFF") {
          styleParts.push(`background-color:${this.normalizeColor(charProps.shadeColor)}`);
        }
        const styleAttr = styleParts.length ? ` style="${styleParts.join(";")}"` : "";
        if (open || styleAttr) {
          html = `${open}<span${styleAttr}>${html}</span>${close}`;
        }
      }
    }
    return html;
  }
  findBinRefInRun(run) {
    const pic = run?.["hp:picture"] ?? run?.picture ?? run?.pic;
    const draw = run?.["hp:draw"] ?? run?.draw;
    const img = run?.["hp:img"] ?? run?.img;
    const hcImg = run?.["hc:img"] ?? run?.["hp:hc:img"];
    const tryExtract = (node) => {
      if (!node) return void 0;
      const binaryRef = node?.["@binaryItemIDRef"];
      if (typeof binaryRef === "string") return binaryRef;
      const nestedImg = node?.img;
      if (nestedImg && typeof nestedImg?.["@binaryItemIDRef"] === "string") {
        return nestedImg["@binaryItemIDRef"];
      }
      const ref = node?.["hp:binItem"]?.["@ref"] ?? node?.binItem?.["@ref"] ?? node?.["@ref"];
      if (typeof ref === "string") return ref;
      return void 0;
    };
    return tryExtract(pic) || tryExtract(draw) || tryExtract(img) || tryExtract(hcImg);
  }
  resolveBinaryPath(binRef) {
    const directPath = `BinData/${binRef}`;
    if (this.files[directPath]) {
      return directPath;
    }
    try {
      const summary = this.summarizePackage();
      if (summary.manifest) {
        const manifestItem = summary.manifest.find((item) => item.id === binRef);
        if (manifestItem?.href) {
          const resolvedPath = manifestItem.href.startsWith("BinData/") ? manifestItem.href : `BinData/${manifestItem.href}`;
          if (this.files[resolvedPath]) {
            return resolvedPath;
          }
          if (this.files[manifestItem.href]) {
            return manifestItem.href;
          }
        }
      }
    } catch (e) {
    }
    return directPath;
  }
  normalizeColor(c) {
    const s = c.trim();
    if (/^#?[0-9a-fA-F]{6}$/.test(s)) return s.startsWith("#") ? s : `#${s}`;
    return s;
  }
  normalizeSize(sz) {
    const n = typeof sz === "number" ? sz : Number(sz);
    if (!isNaN(n)) return `${n}pt`;
    return String(sz);
  }
  convertHwpUnitToPoints(hwpUnit) {
    const units = typeof hwpUnit === "number" ? hwpUnit : parseInt(String(hwpUnit), 10);
    return Math.round(units / 100 * 10) / 10;
  }
  parseStyleDefinitions() {
    this.characterProperties.clear();
    this.fontFaces.clear();
    const headerXml = this.getTextFile("Contents/header.xml");
    if (!headerXml) return;
    try {
      const header = this.parseXml(headerXml);
      const root = header?.head ?? header;
      if (!root) return;
      const refList = root?.refList;
      if (!refList) return;
      const fontfaces = refList?.fontfaces;
      if (fontfaces?.fontface) {
        const fonts = Array.isArray(fontfaces.fontface) ? fontfaces.fontface : [fontfaces.fontface];
        for (const font of fonts) {
          const id = font?.["@id"];
          if (id) {
            this.fontFaces.set(id, font);
          }
        }
      }
      const charProperties = refList?.charProperties;
      if (charProperties?.charPr) {
        const charPrs = Array.isArray(charProperties.charPr) ? charProperties.charPr : [charProperties.charPr];
        for (const charPr of charPrs) {
          const id = charPr?.["@id"];
          if (id) {
            this.characterProperties.set(id, this.processCharacterProperties(charPr));
          }
        }
      }
    } catch {
    }
  }
  processCharacterProperties(charPr) {
    const hasBold = charPr?.bold !== void 0;
    const hasItalic = charPr?.italic !== void 0;
    return {
      height: charPr?.["@height"],
      // Font size in HWPUNIT
      textColor: charPr?.["@textColor"],
      // Text color
      shadeColor: charPr?.["@shadeColor"],
      // Background color
      bold: hasBold,
      // Bold formatting (element presence)
      italic: hasItalic,
      // Italic formatting (element presence)
      underline: charPr?.underline,
      // Underline info
      strikeout: charPr?.strikeout,
      // Strikeout info
      fontRef: charPr?.fontRef,
      // Font reference
      raw: charPr
      // Keep original for debugging
    };
  }
  detectMimeType(path) {
    const lower = path.toLowerCase();
    if (lower.endsWith(".png")) return "image/png";
    if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
    if (lower.endsWith(".gif")) return "image/gif";
    if (lower.endsWith(".bmp")) return "image/bmp";
    if (lower.endsWith(".webp")) return "image/webp";
    return "application/octet-stream";
  }
  toBase64(bytes) {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(bytes).toString("base64");
    }
    let binary = "";
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
  extractTextFromNode(node) {
    if (!node) return "";
    const ps = node?.["hp:p"] ?? node?.p;
    if (ps) {
      const paras = Array.isArray(ps) ? ps : [ps];
      return paras.map((p) => this.extractTextFromNode(p)).join("\n");
    }
    const runs = node?.["hp:run"] ?? node?.run;
    const runArr = runs ? Array.isArray(runs) ? runs : [runs] : [];
    const textPieces = [];
    for (const run of runArr) {
      if (run?.secPr || run?.ctrl) continue;
      const t = run?.["hp:t"] ?? run?.t;
      if (t === void 0 || t === null) continue;
      if (typeof t === "string") textPieces.push(t);
      else if (typeof t?.["#text"] === "string") textPieces.push(t["#text"]);
    }
    if (textPieces.length > 0) return textPieces.join("");
    if (typeof node === "string") return node;
    if (typeof node?.["#text"] === "string") return node["#text"];
    return "";
  }
  escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  async listImages() {
    if (!this.zip) throw new HwpxNotLoadedError();
    return Object.keys(this.files).filter((p) => p.startsWith("BinData/") && !p.endsWith("/")).sort();
  }
};

// src/lib/writer.ts
var import_jszip2 = __toESM(require_jszip_min(), 1);

// src/lib/hwp/owpml.ts
var MIMETYPE = "application/hwp+zip";
var OWPML_NS = `xmlns:ha="http://www.hancom.co.kr/hwpml/2011/app" xmlns:hp="http://www.hancom.co.kr/hwpml/2011/paragraph" xmlns:hp10="http://www.hancom.co.kr/hwpml/2016/paragraph" xmlns:hs="http://www.hancom.co.kr/hwpml/2011/section" xmlns:hc="http://www.hancom.co.kr/hwpml/2011/core" xmlns:hh="http://www.hancom.co.kr/hwpml/2011/head" xmlns:hhs="http://www.hancom.co.kr/hwpml/2011/history" xmlns:hm="http://www.hancom.co.kr/hwpml/2011/master-page" xmlns:hpf="http://www.hancom.co.kr/schema/2011/hpf" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf/" xmlns:ooxmlchart="http://www.hancom.co.kr/hwpml/2016/ooxmlchart" xmlns:hwpunitchar="http://www.hancom.co.kr/hwpml/2016/HwpUnitChar" xmlns:epub="http://www.idpf.org/2007/ops" xmlns:config="urn:oasis:names:tc:opendocument:xmlns:config:1.0"`;
var DEFAULT_LINESEG = `<hp:linesegarray><hp:lineseg textpos="0" vertpos="0" vertsize="1000" textheight="1000" baseline="850" spacing="600" horzpos="0" horzsize="42520" flags="393216"/></hp:linesegarray>`;
function buildSecPr(pageDef, refs = { outline: 1, memo: 0 }) {
  const width = pageDef ? pageDef.width : 59528;
  const height = pageDef ? pageDef.height : 84186;
  const left = pageDef ? pageDef.left : 8504;
  const right = pageDef ? pageDef.right : 8504;
  const top = pageDef ? pageDef.top : 5668;
  const bottom = pageDef ? pageDef.bottom : 4252;
  const header = pageDef ? pageDef.header : 4252;
  const footer = pageDef ? pageDef.footer : 4252;
  const gutter = pageDef ? pageDef.gutter : 0;
  const landscape = pageDef?.landscape ? "NARROWLY" : "WIDELY";
  return `<hp:secPr id="" textDirection="HORIZONTAL" spaceColumns="1134" tabStop="8000" tabStopVal="4000" tabStopUnit="HWPUNIT" outlineShapeIDRef="${refs.outline}" memoShapeIDRef="${refs.memo}" textVerticalWidthHead="0" masterPageCnt="0"><hp:grid lineGrid="0" charGrid="0" wonggojiFormat="0"/><hp:startNum pageStartsOn="BOTH" page="0" pic="0" tbl="0" equation="0"/><hp:visibility hideFirstHeader="0" hideFirstFooter="0" hideFirstMasterPage="0" border="SHOW_ALL" fill="SHOW_ALL" hideFirstPageNum="0" hideFirstEmptyLine="0" showLineNumber="0"/><hp:lineNumberShape restartType="0" countBy="0" distance="0" startNumber="0"/><hp:pagePr landscape="${landscape}" width="${width}" height="${height}" gutterType="LEFT_ONLY"><hp:margin header="${header}" footer="${footer}" gutter="${gutter}" left="${left}" right="${right}" top="${top}" bottom="${bottom}"/></hp:pagePr><hp:footNotePr><hp:autoNumFormat type="DIGIT" userChar="" prefixChar="" suffixChar=")" supscript="0"/><hp:noteLine length="-1" type="SOLID" width="0.12 mm" color="#000000"/><hp:noteSpacing betweenNotes="283" belowLine="567" aboveLine="850"/><hp:numbering type="CONTINUOUS" newNum="1"/><hp:placement place="EACH_COLUMN" beneathText="0"/></hp:footNotePr><hp:endNotePr><hp:autoNumFormat type="DIGIT" userChar="" prefixChar="" suffixChar=")" supscript="0"/><hp:noteLine length="14692344" type="SOLID" width="0.12 mm" color="#000000"/><hp:noteSpacing betweenNotes="0" belowLine="567" aboveLine="850"/><hp:numbering type="CONTINUOUS" newNum="1"/><hp:placement place="END_OF_DOCUMENT" beneathText="0"/></hp:endNotePr><hp:pageBorderFill type="BOTH" borderFillIDRef="1" textBorder="PAPER" headerInside="0" footerInside="0" fillArea="PAPER"><hp:offset left="1417" right="1417" top="1417" bottom="1417"/></hp:pageBorderFill><hp:pageBorderFill type="EVEN" borderFillIDRef="1" textBorder="PAPER" headerInside="0" footerInside="0" fillArea="PAPER"><hp:offset left="1417" right="1417" top="1417" bottom="1417"/></hp:pageBorderFill><hp:pageBorderFill type="ODD" borderFillIDRef="1" textBorder="PAPER" headerInside="0" footerInside="0" fillArea="PAPER"><hp:offset left="1417" right="1417" top="1417" bottom="1417"/></hp:pageBorderFill></hp:secPr><hp:ctrl><hp:colPr id="" type="NEWSPAPER" layout="LEFT" colCount="1" sameSz="1" sameGap="0"/></hp:ctrl>`;
}
var SEC_PR_XML = buildSecPr();
var paraIdCounter = 0;
function makeParaId() {
  paraIdCounter = paraIdCounter + 1 >>> 0;
  return paraIdCounter;
}
function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

// src/lib/writer.ts
var NS_HA = "http://www.hancom.co.kr/hwpml/2011/app";
var NS_OASIS_CONTAINER = "urn:oasis:names:tc:opendocument:xmlns:container";
var NS_OASIS_MANIFEST = "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0";
var HwpxWriter = class {
  async createFromPlainText(text, options) {
    const zip = new import_jszip2.default();
    zip.file("mimetype", MIMETYPE, { compression: "STORE" });
    const containerXml = `<?xml version="1.0" encoding="UTF-8"?>
<container xmlns="${NS_OASIS_CONTAINER}"><rootfiles><rootfile full-path="Contents/content.hpf" media-type="application/hwpml-package+xml"/></rootfiles></container>`;
    zip.file("META-INF/container.xml", containerXml);
    const manifestXml = `<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest xmlns:manifest="${NS_OASIS_MANIFEST}"><manifest:file-entry manifest:full-path="/" manifest:media-type="application/hwpml-package+xml"/><manifest:file-entry manifest:full-path="version.xml" manifest:media-type="application/xml"/><manifest:file-entry manifest:full-path="settings.xml" manifest:media-type="application/xml"/><manifest:file-entry manifest:full-path="Contents/content.hpf" manifest:media-type="application/hwpml-package+xml"/><manifest:file-entry manifest:full-path="Contents/header.xml" manifest:media-type="application/xml"/><manifest:file-entry manifest:full-path="Contents/section0.xml" manifest:media-type="application/xml"/></manifest:manifest>`;
    zip.file("META-INF/manifest.xml", manifestXml);
    const version = `<?xml version="1.0" encoding="UTF-8"?>
<ha:HCFVersion xmlns:ha="${NS_HA}" ha:targetApplication="WORDPROCESSOR" ha:major="5" ha:minor="0" ha:micro="6" ha:buildNumber="0"/>`;
    zip.file("version.xml", version);
    const settings = `<?xml version="1.0" encoding="UTF-8"?>
<ha:HWPApplicationSetting xmlns:ha="${NS_HA}"><ha:CaretPosition ha:listIDRef="0" ha:paraIDRef="0" ha:pos="0"/></ha:HWPApplicationSetting>`;
    zip.file("settings.xml", settings);
    const contentHpf = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<opf:package ${OWPML_NS} version="" unique-identifier="" id=""><opf:metadata><dc:title>${escapeXml(options?.title ?? "")}</dc:title><dc:creator>${escapeXml(options?.creator ?? "")}</dc:creator><dc:format>application/hwpml-package+xml</dc:format></opf:metadata><opf:manifest><opf:item id="header" href="Contents/header.xml" media-type="application/xml"/><opf:item id="section0" href="Contents/section0.xml" media-type="application/xml"/><opf:item id="settings" href="settings.xml" media-type="application/xml"/></opf:manifest><opf:spine><opf:itemref idref="header" linear="yes"/><opf:itemref idref="section0" linear="yes"/></opf:spine></opf:package>`;
    zip.file("Contents/content.hpf", contentHpf);
    const header = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<hh:head ${OWPML_NS} version="1.5" secCnt="1"><hh:beginNum page="1" footnote="1" endnote="1" pic="1" tbl="1" equation="1"/><hh:refList><hh:fontfaces itemCnt="1"><hh:fontface lang="HANGUL" fontCnt="1"><hh:font id="0" face="\uD568\uCD08\uB86C\uBC14\uD0D5" type="TTF" isEmbedded="0"/></hh:fontface></hh:fontfaces><hh:borderFills itemCnt="1"><hh:borderFill id="0" threeD="0" shadow="0" centerLine="NONE" breakCellSeparateLine="0"><hh:slash type="NONE" Crooked="0" isCounter="0"/><hh:backSlash type="NONE" Crooked="0" isCounter="0"/><hh:leftBorder type="SOLID" width="0.1 mm" color="#000000"/><hh:rightBorder type="SOLID" width="0.1 mm" color="#000000"/><hh:topBorder type="SOLID" width="0.1 mm" color="#000000"/><hh:bottomBorder type="SOLID" width="0.1 mm" color="#000000"/><hh:diagonal type="NONE" width="0.1 mm" color="#000000"/></hh:borderFill></hh:borderFills><hh:charProperties itemCnt="1"><hh:charPr id="0" height="1000" textColor="#000000" shadeColor="none" useFontSpace="0" useKerning="0" symMark="NONE" borderFillIDRef="0"><hh:fontRef hangul="0" latin="0" hanja="0" japanese="0" other="0" symbol="0" user="0"/><hh:ratio hangul="100" latin="100" hanja="100" japanese="100" other="100" symbol="100" user="100"/><hh:spacing hangul="0" latin="0" hanja="0" japanese="0" other="0" symbol="0" user="0"/><hh:relSz hangul="100" latin="100" hanja="100" japanese="100" other="100" symbol="100" user="100"/><hh:offset hangul="0" latin="0" hanja="0" japanese="0" other="0" symbol="0" user="0"/></hh:charPr></hh:charProperties><hh:tabProperties itemCnt="1"><hh:tabPr id="0" autoTabLeft="1" autoTabRight="1"><hh:items itemCnt="0"/></hh:tabPr></hh:tabProperties><hh:numberings itemCnt="1"><hh:numbering id="0" start="1"><hh:paraHead level="1" start="1" numFormat="^1." textOffsetType="PERCENT" textOffset="50" numberingChar="false" charPrIDRef="0"><hh:autoNumberFormat type="DIGIT" userChar="" prefixChar="" suffixChar="."/></hh:paraHead></hh:numbering></hh:numberings><hh:paraProperties itemCnt="1"><hh:paraPr id="0" tabPrIDRef="0" condense="0" fontLineHeight="0" snapToGrid="0" suppressLineNumbers="0" checked="0"><hh:align horizontal="JUSTIFY" vertical="BASELINE"/><hh:heading type="NONE" idRef="0" level="0"/><hh:breakSetting breakLatinWord="KEEP_WORD" breakNonLatinWord="KEEP_WORD" widowOrphan="0" keepWithNext="0" keepLines="0" pageBreakBefore="0" lineWrap="BREAK"/><hh:margin><hh:intent value="0"/><hh:left value="0"/><hh:right value="0"/><hh:prev value="0"/><hh:next value="0"/></hh:margin><hh:lineSpacing type="PERCENT" value="160"/></hh:paraPr></hh:paraProperties><hh:styles itemCnt="1"><hh:style id="0" type="PARA" name="\uBC14\uD0D5\uAE00" engName="Normal" paraPrIDRef="0" charPrIDRef="0" nextStyleIDRef="0" langID="1042" lockForm="0"/></hh:styles></hh:refList></hh:head>`;
    zip.file("Contents/header.xml", header);
    const bodyParas = text.split(/\r?\n/).map(
      (line) => `<hp:p id="${makeParaId()}" paraPrIDRef="0" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0"><hp:run charPrIDRef="0"><hp:t>${escapeXml(line)}</hp:t></hp:run>` + DEFAULT_LINESEG + `</hp:p>`
    ).join("");
    const secPrPara = `<hp:p id="${makeParaId()}" paraPrIDRef="0" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0"><hp:run charPrIDRef="0">${SEC_PR_XML}</hp:run><hp:run charPrIDRef="0"><hp:t/></hp:run>` + DEFAULT_LINESEG + `</hp:p>`;
    const section0 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<hs:sec ${OWPML_NS}>` + secPrPara + bodyParas + `</hs:sec>`;
    zip.file("Contents/section0.xml", section0);
    return await zip.generateAsync({ type: "uint8array" });
  }
};

// src/lib/hwp/fileHeader.ts
var HWP_SIGNATURE = "HWP Document File";
var FILE_HEADER_SIZE = 256;
function versionToString(v2) {
  return `${v2.major}.${v2.minor}.${v2.build}.${v2.revision}`;
}
function isVersionSupported(v2) {
  return v2.major === 5 && (v2.minor === 0 || v2.minor === 1);
}
function parseFlags(raw) {
  return {
    raw,
    compressed: (raw & 1) !== 0,
    encrypted: (raw & 2) !== 0,
    distribution: (raw & 4) !== 0,
    script: (raw & 8) !== 0,
    drm: (raw & 16) !== 0,
    xmlTemplate: (raw & 32) !== 0,
    documentHistory: (raw & 64) !== 0,
    digitalSignature: (raw & 128) !== 0,
    publicKeyEncrypted: (raw & 256) !== 0,
    modifiedCertificate: (raw & 512) !== 0,
    prepareDistribution: (raw & 1024) !== 0
  };
}
var HwpHeaderError = class extends Error {
  constructor(msg) {
    super(msg);
    this.name = "HwpHeaderError";
  }
};
var ASCII = new TextDecoder("ascii");
function parseFileHeader(data) {
  if (data.byteLength < FILE_HEADER_SIZE) {
    throw new HwpHeaderError(`FileHeader \uD06C\uAE30 \uBD80\uC871: ${data.byteLength} (\uCD5C\uC18C ${FILE_HEADER_SIZE})`);
  }
  const sigArea = data.subarray(0, 32);
  let sigEnd = sigArea.indexOf(0);
  if (sigEnd === -1) sigEnd = 32;
  const sig = ASCII.decode(sigArea.subarray(0, sigEnd));
  if (!sig.startsWith(HWP_SIGNATURE)) {
    throw new HwpHeaderError(`HWP \uC2DC\uADF8\uB2C8\uCC98\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4: "${sig}"`);
  }
  const version = {
    revision: data[32],
    build: data[33],
    minor: data[34],
    major: data[35]
  };
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const flagsRaw = view.getUint32(36, true);
  const flags = parseFlags(flagsRaw);
  return { version, flags };
}

// src/lib/hwp/cfbReader.ts
var CFB = __toESM(require_cfb(), 1);

// node_modules/pako/dist/pako.esm.mjs
var Z_FIXED$1 = 4;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN$1 = 2;
function zero$1(buf) {
  let len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH$1 = 3;
var MAX_MATCH$1 = 258;
var LENGTH_CODES$1 = 29;
var LITERALS$1 = 256;
var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
var D_CODES$1 = 30;
var BL_CODES$1 = 19;
var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
var MAX_BITS$1 = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
);
var extra_dbits = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
);
var extra_blbits = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
);
var bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var DIST_CODE_LEN = 512;
var static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
var static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
var _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
var base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
var base_dist = new Array(D_CODES$1);
zero$1(base_dist);
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree;
  this.extra_bits = extra_bits;
  this.extra_base = extra_base;
  this.elems = elems;
  this.max_length = max_length;
  this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;
  this.max_code = 0;
  this.stat_desc = stat_desc;
}
var d_code = (dist) => {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
var put_short = (s, w) => {
  s.pending_buf[s.pending++] = w & 255;
  s.pending_buf[s.pending++] = w >>> 8 & 255;
};
var send_bits = (s, value, length) => {
  if (s.bi_valid > Buf_size - length) {
    s.bi_buf |= value << s.bi_valid & 65535;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> Buf_size - s.bi_valid;
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= value << s.bi_valid & 65535;
    s.bi_valid += length;
  }
};
var send_code = (s, c, tree) => {
  send_bits(
    s,
    tree[c * 2],
    tree[c * 2 + 1]
    /*.Len*/
  );
};
var bi_reverse = (code, len) => {
  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};
var bi_flush = (s) => {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;
  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 255;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};
var gen_bitlen = (s, desc) => {
  const tree = desc.dyn_tree;
  const max_code = desc.max_code;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const extra = desc.stat_desc.extra_bits;
  const base = desc.stat_desc.extra_base;
  const max_length = desc.stat_desc.max_length;
  let h;
  let n, m2;
  let bits;
  let xbits;
  let f2;
  let overflow = 0;
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }
  tree[s.heap[s.heap_max] * 2 + 1] = 0;
  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1] = bits;
    if (n > max_code) {
      continue;
    }
    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f2 = tree[n * 2];
    s.opt_len += f2 * (bits + xbits);
    if (has_stree) {
      s.static_len += f2 * (stree[n * 2 + 1] + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) {
      bits--;
    }
    s.bl_count[bits]--;
    s.bl_count[bits + 1] += 2;
    s.bl_count[max_length]--;
    overflow -= 2;
  } while (overflow > 0);
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m2 = s.heap[--h];
      if (m2 > max_code) {
        continue;
      }
      if (tree[m2 * 2 + 1] !== bits) {
        s.opt_len += (bits - tree[m2 * 2 + 1]) * tree[m2 * 2];
        tree[m2 * 2 + 1] = bits;
      }
      n--;
    }
  }
};
var gen_codes = (tree, max_code, bl_count) => {
  const next_code = new Array(MAX_BITS$1 + 1);
  let code = 0;
  let bits;
  let n;
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    code = code + bl_count[bits - 1] << 1;
    next_code[bits] = code;
  }
  for (n = 0; n <= max_code; n++) {
    let len = tree[n * 2 + 1];
    if (len === 0) {
      continue;
    }
    tree[n * 2] = bi_reverse(next_code[len]++, len);
  }
};
var tr_static_init = () => {
  let n;
  let bits;
  let length;
  let code;
  let dist;
  const bl_count = new Array(MAX_BITS$1 + 1);
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < 1 << extra_lbits[code]; n++) {
      _length_code[length++] = code;
    }
  }
  _length_code[length - 1] = code;
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < 1 << extra_dbits[code]; n++) {
      _dist_code[dist++] = code;
    }
  }
  dist >>= 7;
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }
  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1] = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1] = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1] = 5;
    static_dtree[n * 2] = bi_reverse(n, 5);
  }
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
};
var init_block = (s) => {
  let n;
  for (n = 0; n < L_CODES$1; n++) {
    s.dyn_ltree[n * 2] = 0;
  }
  for (n = 0; n < D_CODES$1; n++) {
    s.dyn_dtree[n * 2] = 0;
  }
  for (n = 0; n < BL_CODES$1; n++) {
    s.bl_tree[n * 2] = 0;
  }
  s.dyn_ltree[END_BLOCK * 2] = 1;
  s.opt_len = s.static_len = 0;
  s.sym_next = s.matches = 0;
};
var bi_windup = (s) => {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};
var smaller = (tree, n, m2, depth) => {
  const _n2 = n * 2;
  const _m2 = m2 * 2;
  return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m2];
};
var pqdownheap = (s, tree, k2) => {
  const v2 = s.heap[k2];
  let j2 = k2 << 1;
  while (j2 <= s.heap_len) {
    if (j2 < s.heap_len && smaller(tree, s.heap[j2 + 1], s.heap[j2], s.depth)) {
      j2++;
    }
    if (smaller(tree, v2, s.heap[j2], s.depth)) {
      break;
    }
    s.heap[k2] = s.heap[j2];
    k2 = j2;
    j2 <<= 1;
  }
  s.heap[k2] = v2;
};
var compress_block = (s, ltree, dtree) => {
  let dist;
  let lc;
  let sx = 0;
  let code;
  let extra;
  if (s.sym_next !== 0) {
    do {
      dist = s.pending_buf[s.sym_buf + sx++] & 255;
      dist += (s.pending_buf[s.sym_buf + sx++] & 255) << 8;
      lc = s.pending_buf[s.sym_buf + sx++];
      if (dist === 0) {
        send_code(s, lc, ltree);
      } else {
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree);
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);
        }
        dist--;
        code = d_code(dist);
        send_code(s, code, dtree);
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);
        }
      }
    } while (sx < s.sym_next);
  }
  send_code(s, END_BLOCK, ltree);
};
var build_tree = (s, desc) => {
  const tree = desc.dyn_tree;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems = desc.stat_desc.elems;
  let n, m2;
  let max_code = -1;
  let node;
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;
  for (n = 0; n < elems; n++) {
    if (tree[n * 2] !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;
    } else {
      tree[n * 2 + 1] = 0;
    }
  }
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2] = 1;
    s.depth[node] = 0;
    s.opt_len--;
    if (has_stree) {
      s.static_len -= stree[node * 2 + 1];
    }
  }
  desc.max_code = max_code;
  for (n = s.heap_len >> 1; n >= 1; n--) {
    pqdownheap(s, tree, n);
  }
  node = elems;
  do {
    n = s.heap[
      1
      /*SMALLEST*/
    ];
    s.heap[
      1
      /*SMALLEST*/
    ] = s.heap[s.heap_len--];
    pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    );
    m2 = s.heap[
      1
      /*SMALLEST*/
    ];
    s.heap[--s.heap_max] = n;
    s.heap[--s.heap_max] = m2;
    tree[node * 2] = tree[n * 2] + tree[m2 * 2];
    s.depth[node] = (s.depth[n] >= s.depth[m2] ? s.depth[n] : s.depth[m2]) + 1;
    tree[n * 2 + 1] = tree[m2 * 2 + 1] = node;
    s.heap[
      1
      /*SMALLEST*/
    ] = node++;
    pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    );
  } while (s.heap_len >= 2);
  s.heap[--s.heap_max] = s.heap[
    1
    /*SMALLEST*/
  ];
  gen_bitlen(s, desc);
  gen_codes(tree, max_code, s.bl_count);
};
var scan_tree = (s, tree, max_code) => {
  let n;
  let prevlen = -1;
  let curlen;
  let nextlen = tree[0 * 2 + 1];
  let count = 0;
  let max_count = 7;
  let min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] = 65535;
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s.bl_tree[curlen * 2] += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2]++;
      }
      s.bl_tree[REP_3_6 * 2]++;
    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]++;
    } else {
      s.bl_tree[REPZ_11_138 * 2]++;
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};
var send_tree = (s, tree, max_code) => {
  let n;
  let prevlen = -1;
  let curlen;
  let nextlen = tree[0 * 2 + 1];
  let count = 0;
  let max_count = 7;
  let min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);
    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);
    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};
var build_bl_tree = (s) => {
  let max_blindex;
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
  build_tree(s, s.bl_desc);
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
      break;
    }
  }
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  return max_blindex;
};
var send_all_trees = (s, lcodes, dcodes, blcodes) => {
  let rank2;
  send_bits(s, lcodes - 257, 5);
  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4);
  for (rank2 = 0; rank2 < blcodes; rank2++) {
    send_bits(s, s.bl_tree[bl_order[rank2] * 2 + 1], 3);
  }
  send_tree(s, s.dyn_ltree, lcodes - 1);
  send_tree(s, s.dyn_dtree, dcodes - 1);
};
var detect_data_type = (s) => {
  let block_mask = 4093624447;
  let n;
  for (n = 0; n <= 31; n++, block_mask >>>= 1) {
    if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
      return Z_BINARY;
    }
  }
  if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2] !== 0) {
      return Z_TEXT;
    }
  }
  return Z_BINARY;
};
var static_init_done = false;
var _tr_init$1 = (s) => {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }
  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
  s.bi_buf = 0;
  s.bi_valid = 0;
  init_block(s);
};
var _tr_stored_block$1 = (s, buf, stored_len, last) => {
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
  bi_windup(s);
  put_short(s, stored_len);
  put_short(s, ~stored_len);
  if (stored_len) {
    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
  }
  s.pending += stored_len;
};
var _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};
var _tr_flush_block$1 = (s, buf, stored_len, last) => {
  let opt_lenb, static_lenb;
  let max_blindex = 0;
  if (s.level > 0) {
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }
    build_tree(s, s.l_desc);
    build_tree(s, s.d_desc);
    max_blindex = build_bl_tree(s);
    opt_lenb = s.opt_len + 3 + 7 >>> 3;
    static_lenb = s.static_len + 3 + 7 >>> 3;
    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    opt_lenb = static_lenb = stored_len + 5;
  }
  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    _tr_stored_block$1(s, buf, stored_len, last);
  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);
  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  init_block(s);
  if (last) {
    bi_windup(s);
  }
};
var _tr_tally$1 = (s, dist, lc) => {
  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
  if (dist === 0) {
    s.dyn_ltree[lc * 2]++;
  } else {
    s.matches++;
    dist--;
    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
    s.dyn_dtree[d_code(dist) * 2]++;
  }
  return s.sym_next === s.sym_end;
};
var _tr_init_1 = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1 = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;
var trees = {
  _tr_init: _tr_init_1,
  _tr_stored_block: _tr_stored_block_1,
  _tr_flush_block: _tr_flush_block_1,
  _tr_tally: _tr_tally_1,
  _tr_align: _tr_align_1
};
var adler32 = (adler, buf, len, pos) => {
  let s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
  while (len !== 0) {
    n = len > 2e3 ? 2e3 : len;
    len -= n;
    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n);
    s1 %= 65521;
    s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;
var makeTable = () => {
  let c, table = [];
  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k2 = 0; k2 < 8; k2++) {
      c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
    }
    table[n] = c;
  }
  return table;
};
var crcTable = new Uint32Array(makeTable());
var crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;
  crc ^= -1;
  for (let i = pos; i < end; i++) {
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
  }
  return crc ^ -1;
};
var crc32_1 = crc32;
var messages = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
};
var constants$2 = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
var { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
var {
  Z_NO_FLUSH: Z_NO_FLUSH$2,
  Z_PARTIAL_FLUSH,
  Z_FULL_FLUSH: Z_FULL_FLUSH$1,
  Z_FINISH: Z_FINISH$3,
  Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3,
  Z_STREAM_END: Z_STREAM_END$3,
  Z_STREAM_ERROR: Z_STREAM_ERROR$2,
  Z_DATA_ERROR: Z_DATA_ERROR$2,
  Z_BUF_ERROR: Z_BUF_ERROR$2,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED,
  Z_HUFFMAN_ONLY,
  Z_RLE,
  Z_FIXED,
  Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;
var MAX_MEM_LEVEL = 9;
var MAX_WBITS$1 = 15;
var DEF_MEM_LEVEL = 8;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var GZIP_STATE = 57;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
var err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};
var rank = (f2) => {
  return f2 * 2 - (f2 > 4 ? 9 : 0);
};
var zero = (buf) => {
  let len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
};
var slide_hash = (s) => {
  let n, m2;
  let p;
  let wsize = s.w_size;
  n = s.hash_size;
  p = n;
  do {
    m2 = s.head[--p];
    s.head[p] = m2 >= wsize ? m2 - wsize : 0;
  } while (--n);
  n = wsize;
  p = n;
  do {
    m2 = s.prev[--p];
    s.prev[p] = m2 >= wsize ? m2 - wsize : 0;
  } while (--n);
};
var HASH = (s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask;
var INSERT_STRING = (s, str) => {
  let h;
  if (s.legacy_hash) {
    h = s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
  } else {
    const w = s.window;
    const value = w[str] | w[str + 1] << 8 | w[str + 2] << 16 | w[str + 3] << 24;
    h = s.ins_h = Math.imul(value, 66521) + 66521 >>> 16 & s.hash_mask;
  }
  const hash_head = s.prev[str & s.w_mask] = s.head[h];
  s.head[h] = str;
  return hash_head;
};
var flush_pending = (strm) => {
  const s = strm.state;
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }
  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};
var flush_block_only = (s, last) => {
  _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};
var put_byte = (s, b2) => {
  s.pending_buf[s.pending++] = b2;
};
var putShortMSB = (s, b2) => {
  s.pending_buf[s.pending++] = b2 >>> 8 & 255;
  s.pending_buf[s.pending++] = b2 & 255;
};
var read_buf = (strm, buf, start, size) => {
  let len = strm.avail_in;
  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }
  strm.avail_in -= len;
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }
  strm.next_in += len;
  strm.total_in += len;
  return len;
};
var longest_match = (s, cur_match) => {
  let chain_length = s.max_chain_length;
  let scan = s.strstart;
  let match;
  let len;
  let best_len = s.prev_length;
  let nice_match = s.nice_match;
  const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
  const _win = s.window;
  const wmask = s.w_mask;
  const prev = s.prev;
  const strend = s.strstart + MAX_MATCH;
  let scan_end1 = _win[scan + best_len - 1];
  let scan_end = _win[scan + best_len];
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  }
  do {
    match = cur_match;
    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }
    scan += 2;
    match++;
    do {
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;
    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};
var fill_window = (s) => {
  const _w_size = s.w_size;
  let n, more, str;
  do {
    more = s.window_size - s.lookahead - s.strstart;
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      s.block_start -= _w_size;
      if (s.insert > s.strstart) {
        s.insert = s.strstart;
      }
      slide_hash(s);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;
    if (!s.legacy_hash) {
      if (s.lookahead + s.insert > MIN_MATCH) {
        str = s.strstart - s.insert;
        while (s.insert) {
          INSERT_STRING(s, str);
          str++;
          s.insert--;
          if (s.lookahead + s.insert <= MIN_MATCH) {
            break;
          }
        }
      }
    } else if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
      while (s.insert) {
        INSERT_STRING(s, str);
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
};
var deflate_stored = (s, flush) => {
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
  let len, left, have, last = 0;
  let used = s.strm.avail_in;
  do {
    len = 65535;
    have = s.bi_valid + 42 >> 3;
    if (s.strm.avail_out < have) {
      break;
    }
    have = s.strm.avail_out - have;
    left = s.strstart - s.block_start;
    if (len > left + s.strm.avail_in) {
      len = left + s.strm.avail_in;
    }
    if (len > have) {
      len = have;
    }
    if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) {
      break;
    }
    last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
    _tr_stored_block(s, 0, 0, last);
    s.pending_buf[s.pending - 4] = len;
    s.pending_buf[s.pending - 3] = len >> 8;
    s.pending_buf[s.pending - 2] = ~len;
    s.pending_buf[s.pending - 1] = ~len >> 8;
    flush_pending(s.strm);
    if (left) {
      if (left > len) {
        left = len;
      }
      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
      s.strm.next_out += left;
      s.strm.avail_out -= left;
      s.strm.total_out += left;
      s.block_start += left;
      len -= left;
    }
    if (len) {
      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
      s.strm.next_out += len;
      s.strm.avail_out -= len;
      s.strm.total_out += len;
    }
  } while (last === 0);
  used -= s.strm.avail_in;
  if (used) {
    if (used >= s.w_size) {
      s.matches = 2;
      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
      s.strstart = s.w_size;
      s.insert = s.strstart;
    } else {
      if (s.window_size - s.strstart <= used) {
        s.strstart -= s.w_size;
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;
        }
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
      s.strstart += used;
      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
    }
    s.block_start = s.strstart;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }
  if (last) {
    return BS_FINISH_DONE;
  }
  if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) {
    return BS_BLOCK_DONE;
  }
  have = s.window_size - s.strstart;
  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
    s.block_start -= s.w_size;
    s.strstart -= s.w_size;
    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
    if (s.matches < 2) {
      s.matches++;
    }
    have += s.w_size;
    if (s.insert > s.strstart) {
      s.insert = s.strstart;
    }
  }
  if (have > s.strm.avail_in) {
    have = s.strm.avail_in;
  }
  if (have) {
    read_buf(s.strm, s.window, s.strstart, have);
    s.strstart += have;
    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }
  have = s.bi_valid + 42 >> 3;
  have = s.pending_buf_size - have > 65535 ? 65535 : s.pending_buf_size - have;
  min_block = have > s.w_size ? s.w_size : have;
  left = s.strstart - s.block_start;
  if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
    len = left > have ? have : left;
    last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
    _tr_stored_block(s, s.block_start, len, last);
    s.block_start += len;
    flush_pending(s.strm);
  }
  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};
var deflate_fast = (s, flush) => {
  let hash_head;
  let bflush;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH) {
      hash_head = INSERT_STRING(s, s.strstart);
    }
    if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
    }
    if (s.match_length >= MIN_MATCH) {
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;
      if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
        s.match_length--;
        do {
          s.strstart++;
          hash_head = INSERT_STRING(s, s.strstart);
        } while (--s.match_length !== 0);
        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        if (s.legacy_hash) {
          s.ins_h = s.window[s.strstart];
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
        }
      }
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
var deflate_slow = (s, flush) => {
  let hash_head;
  let bflush;
  let max_insert;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH) {
      hash_head = INSERT_STRING(s, s.strstart);
    }
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;
    if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
      if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
        s.match_length = MIN_MATCH - 1;
      }
    }
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          hash_head = INSERT_STRING(s, s.strstart);
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    } else if (s.match_available) {
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
      if (bflush) {
        flush_block_only(s, false);
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  if (s.match_available) {
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
var deflate_rle = (s, flush) => {
  let bflush;
  let prev;
  let scan, strend;
  const _win = s.window;
  for (; ; ) {
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
    }
    if (s.match_length >= MIN_MATCH) {
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
var deflate_huff = (s, flush) => {
  let bflush;
  for (; ; ) {
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break;
      }
    }
    s.match_length = 0;
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}
var configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),
  /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),
  /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),
  /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),
  /* 3 */
  new Config(4, 4, 16, 16, deflate_slow),
  /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),
  /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),
  /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),
  /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),
  /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)
  /* 9 max compression */
];
var lm_init = (s) => {
  s.window_size = 2 * s.w_size;
  zero(s.head);
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;
  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};
function DeflateState() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Z_DEFLATED$2;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.legacy_hash = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  this.heap = new Uint16Array(2 * L_CODES + 1);
  zero(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(2 * L_CODES + 1);
  zero(this.depth);
  this.sym_buf = 0;
  this.lit_bufsize = 0;
  this.sym_next = 0;
  this.sym_end = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
var deflateStateCheck = (strm) => {
  if (!strm) {
    return 1;
  }
  const s = strm.state;
  if (!s || s.strm !== strm || s.status !== INIT_STATE && //#ifdef GZIP
  s.status !== GZIP_STATE && //#endif
  s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) {
    return 1;
  }
  return 0;
};
var deflateResetKeep = (strm) => {
  if (deflateStateCheck(strm)) {
    return err(strm, Z_STREAM_ERROR$2);
  }
  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;
  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;
  if (s.wrap < 0) {
    s.wrap = -s.wrap;
  }
  s.status = //#ifdef GZIP
  s.wrap === 2 ? GZIP_STATE : (
    //#endif
    s.wrap ? INIT_STATE : BUSY_STATE
  );
  strm.adler = s.wrap === 2 ? 0 : 1;
  s.last_flush = -2;
  _tr_init(s);
  return Z_OK$3;
};
var deflateReset = (strm) => {
  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};
var deflateSetHeader = (strm, head) => {
  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
    return Z_STREAM_ERROR$2;
  }
  strm.state.gzhead = head;
  return Z_OK$3;
};
var deflateInit2 = (strm, level, method, windowBits, memLevel, strategy, legacyHash) => {
  if (!strm) {
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;
  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap = 2;
    windowBits -= 16;
  }
  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) {
    return err(strm, Z_STREAM_ERROR$2);
  }
  if (windowBits === 8) {
    windowBits = 9;
  }
  const s = new DeflateState();
  strm.state = s;
  s.strm = strm;
  s.status = INIT_STATE;
  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.legacy_hash = legacyHash ? 1 : 0;
  s.hash_bits = memLevel + 7;
  if (!s.legacy_hash && s.hash_bits < 15) {
    s.hash_bits = 15;
  }
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);
  s.lit_bufsize = 1 << memLevel + 6;
  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);
  s.sym_buf = s.lit_bufsize;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  s.level = level;
  s.strategy = strategy;
  s.method = method;
  return deflateReset(strm);
};
var deflateInit = (strm, level) => {
  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};
var deflate$2 = (strm, flush) => {
  if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }
  const s = strm.state;
  if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$2 : Z_STREAM_ERROR$2);
  }
  const old_flush = s.last_flush;
  s.last_flush = flush;
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$2);
  }
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$2);
  }
  if (s.status === INIT_STATE && s.wrap === 0) {
    s.status = BUSY_STATE;
  }
  if (s.status === INIT_STATE) {
    let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
    let level_flags = -1;
    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
      level_flags = 0;
    } else if (s.level < 6) {
      level_flags = 1;
    } else if (s.level === 6) {
      level_flags = 2;
    } else {
      level_flags = 3;
    }
    header |= level_flags << 6;
    if (s.strstart !== 0) {
      header |= PRESET_DICT;
    }
    header += 31 - header % 31;
    putShortMSB(s, header);
    if (s.strstart !== 0) {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 65535);
    }
    strm.adler = 1;
    s.status = BUSY_STATE;
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
  if (s.status === GZIP_STATE) {
    strm.adler = 0;
    put_byte(s, 31);
    put_byte(s, 139);
    put_byte(s, 8);
    if (!s.gzhead) {
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
      put_byte(s, OS_CODE);
      s.status = BUSY_STATE;
      flush_pending(strm);
      if (s.pending !== 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    } else {
      put_byte(
        s,
        (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
      );
      put_byte(s, s.gzhead.time & 255);
      put_byte(s, s.gzhead.time >> 8 & 255);
      put_byte(s, s.gzhead.time >> 16 & 255);
      put_byte(s, s.gzhead.time >> 24 & 255);
      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
      put_byte(s, s.gzhead.os & 255);
      if (s.gzhead.extra && s.gzhead.extra.length) {
        put_byte(s, s.gzhead.extra.length & 255);
        put_byte(s, s.gzhead.extra.length >> 8 & 255);
      }
      if (s.gzhead.hcrc) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
      }
      s.gzindex = 0;
      s.status = EXTRA_STATE;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra) {
      let beg = s.pending;
      let left = (s.gzhead.extra.length & 65535) - s.gzindex;
      while (s.pending + left > s.pending_buf_size) {
        let copy = s.pending_buf_size - s.pending;
        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
        s.pending = s.pending_buf_size;
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        s.gzindex += copy;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
        beg = 0;
        left -= copy;
      }
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
      s.pending += left;
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name) {
      let beg = s.pending;
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment) {
      let beg = s.pending;
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
    }
    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
      }
      put_byte(s, strm.adler & 255);
      put_byte(s, strm.adler >> 8 & 255);
      strm.adler = 0;
    }
    s.status = BUSY_STATE;
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
      }
      return Z_OK$3;
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      } else if (flush !== Z_BLOCK$1) {
        _tr_stored_block(s, 0, 0, false);
        if (flush === Z_FULL_FLUSH$1) {
          zero(s.head);
          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    }
  }
  if (flush !== Z_FINISH$3) {
    return Z_OK$3;
  }
  if (s.wrap <= 0) {
    return Z_STREAM_END$3;
  }
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 255);
    put_byte(s, strm.adler >> 8 & 255);
    put_byte(s, strm.adler >> 16 & 255);
    put_byte(s, strm.adler >> 24 & 255);
    put_byte(s, strm.total_in & 255);
    put_byte(s, strm.total_in >> 8 & 255);
    put_byte(s, strm.total_in >> 16 & 255);
    put_byte(s, strm.total_in >> 24 & 255);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 65535);
  }
  flush_pending(strm);
  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
var deflateEnd = (strm) => {
  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }
  const status = strm.state.status;
  strm.state = null;
  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};
var deflateSetDictionary = (strm, dictionary) => {
  let dictLength = dictionary.length;
  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }
  const s = strm.state;
  const wrap = s.wrap;
  if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }
  if (wrap === 1) {
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }
  s.wrap = 0;
  if (dictLength >= s.w_size) {
    if (wrap === 0) {
      zero(s.head);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      INSERT_STRING(s, str);
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};
var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = "pako deflate (from Nodeca project)";
var deflate_1$2 = {
  deflateInit: deflateInit_1,
  deflateInit2: deflateInit2_1,
  deflateReset: deflateReset_1,
  deflateResetKeep: deflateResetKeep_1,
  deflateSetHeader: deflateSetHeader_1,
  deflate: deflate_2$1,
  deflateEnd: deflateEnd_1,
  deflateSetDictionary: deflateSetDictionary_1,
  deflateInfo
};
var _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign = function(obj) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) {
      continue;
    }
    if (typeof source !== "object") {
      throw new TypeError(source + "must be non-object");
    }
    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }
  return obj;
};
var flattenChunks = (chunks) => {
  let len = 0;
  for (let i = 0, l3 = chunks.length; i < l3; i++) {
    len += chunks[i].length;
  }
  const result = new Uint8Array(len);
  for (let i = 0, pos = 0, l3 = chunks.length; i < l3; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }
  return result;
};
var common = {
  assign,
  flattenChunks
};
var STR_APPLY_UIA_OK = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
  STR_APPLY_UIA_OK = false;
}
var _utf8len = new Uint8Array(256);
for (let q2 = 0; q2 < 256; q2++) {
  _utf8len[q2] = q2 >= 252 ? 6 : q2 >= 248 ? 5 : q2 >= 240 ? 4 : q2 >= 224 ? 3 : q2 >= 192 ? 2 : 1;
}
_utf8len[254] = _utf8len[255] = 1;
var string2buf = (str) => {
  if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }
  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 64512) === 56320) {
        c = 65536 + (c - 55296 << 10) + (c2 - 56320);
        m_pos++;
      }
    }
    buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
  }
  buf = new Uint8Array(buf_len);
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 64512) === 56320) {
        c = 65536 + (c - 55296 << 10) + (c2 - 56320);
        m_pos++;
      }
    }
    if (c < 128) {
      buf[i++] = c;
    } else if (c < 2048) {
      buf[i++] = 192 | c >>> 6;
      buf[i++] = 128 | c & 63;
    } else if (c < 65536) {
      buf[i++] = 224 | c >>> 12;
      buf[i++] = 128 | c >>> 6 & 63;
      buf[i++] = 128 | c & 63;
    } else {
      buf[i++] = 240 | c >>> 18;
      buf[i++] = 128 | c >>> 12 & 63;
      buf[i++] = 128 | c >>> 6 & 63;
      buf[i++] = 128 | c & 63;
    }
  }
  return buf;
};
var buf2binstring = (buf, len) => {
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }
  let result = "";
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};
var buf2string = (buf, max) => {
  const len = max || buf.length;
  if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }
  let i, out;
  const utf16buf = new Array(len * 2);
  for (out = 0, i = 0; i < len; ) {
    let c = buf[i++];
    if (c < 128) {
      utf16buf[out++] = c;
      continue;
    }
    let c_len = _utf8len[c];
    if (c_len > 4) {
      utf16buf[out++] = 65533;
      i += c_len - 1;
      continue;
    }
    c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
    while (c_len > 1 && i < len) {
      c = c << 6 | buf[i++] & 63;
      c_len--;
    }
    if (c_len > 1) {
      utf16buf[out++] = 65533;
      continue;
    }
    if (c < 65536) {
      utf16buf[out++] = c;
    } else {
      c -= 65536;
      utf16buf[out++] = 55296 | c >> 10 & 1023;
      utf16buf[out++] = 56320 | c & 1023;
    }
  }
  return buf2binstring(utf16buf, out);
};
var utf8border = (buf, max) => {
  max = max || buf.length;
  if (max > buf.length) {
    max = buf.length;
  }
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 192) === 128) {
    pos--;
  }
  if (pos < 0) {
    return max;
  }
  if (pos === 0) {
    return max;
  }
  return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
  string2buf,
  buf2string,
  utf8border
};
function ZStream() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
var zstream = ZStream;
var toString$1 = Object.prototype.toString;
var {
  Z_NO_FLUSH: Z_NO_FLUSH$1,
  Z_SYNC_FLUSH,
  Z_FULL_FLUSH,
  Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2,
  Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;
var defaultOptions$1 = {
  level: Z_DEFAULT_COMPRESSION,
  method: Z_DEFLATED$1,
  chunkSize: 16384,
  windowBits: 15,
  memLevel: 8,
  strategy: Z_DEFAULT_STRATEGY,
  legacyHash: true
};
function Deflate$1(options) {
  this.options = common.assign({}, defaultOptions$1, options || {});
  let opt = this.options;
  if (opt.raw && opt.windowBits > 0) {
    opt.windowBits = -opt.windowBits;
  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
    opt.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new zstream();
  this.strm.avail_out = 0;
  let status = deflate_1$2.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy,
    opt.legacyHash
  );
  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }
  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }
  if (opt.dictionary) {
    let dict;
    if (typeof opt.dictionary === "string") {
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }
    status = deflate_1$2.deflateSetDictionary(this.strm, dict);
    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }
    this._dict_set = true;
  }
}
Deflate$1.prototype.push = function(data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;
  if (this.ended) {
    return false;
  }
  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
  if (typeof data === "string") {
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  for (; ; ) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }
    status = deflate_1$2.deflate(strm, _flush_mode);
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }
    if (strm.avail_in === 0) break;
  }
  return true;
};
Deflate$1.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Deflate$1.prototype.onEnd = function(status) {
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function deflate$1(input, options) {
  const deflator = new Deflate$1(options);
  deflator.push(input, true);
  if (deflator.err) {
    throw deflator.msg || messages[deflator.err];
  }
  return deflator.result;
}
function deflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}
function gzip$1(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}
var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;
var deflate_1$1 = {
  Deflate: Deflate_1$1,
  deflate: deflate_2,
  deflateRaw: deflateRaw_1$1,
  gzip: gzip_1$1,
  constants: constants$1
};
var BAD$1 = 16209;
var TYPE$1 = 16191;
var inffast = function inflate_fast(strm, start) {
  let _in;
  let last;
  let _out;
  let beg;
  let end;
  let dmax;
  let wsize;
  let whave;
  let wnext;
  let s_window;
  let hold;
  let bits;
  let lcode;
  let dcode;
  let lmask;
  let dmask;
  let here;
  let op;
  let len;
  let dist;
  let from;
  let from_source;
  let input, output;
  const state = strm.state;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
  dmax = state.dmax;
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;
  top:
    do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }
      here = lcode[hold & lmask];
      dolen:
        for (; ; ) {
          op = here >>> 24;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 255;
          if (op === 0) {
            output[_out++] = here & 65535;
          } else if (op & 16) {
            len = here & 65535;
            op &= 15;
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & (1 << op) - 1;
              hold >>>= op;
              bits -= op;
            }
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];
            dodist:
              for (; ; ) {
                op = here >>> 24;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 255;
                if (op & 16) {
                  dist = here & 65535;
                  op &= 15;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  if (dist > dmax) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD$1;
                    break top;
                  }
                  hold >>>= op;
                  bits -= op;
                  op = _out - beg;
                  if (dist > op) {
                    op = dist - op;
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD$1;
                        break top;
                      }
                    }
                    from = 0;
                    from_source = s_window;
                    if (wnext === 0) {
                      from += wsize - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                    } else {
                      from += wnext - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist;
                    do {
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = "invalid distance code";
                  state.mode = BAD$1;
                  break top;
                }
                break;
              }
          } else if ((op & 64) === 0) {
            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
            continue dolen;
          } else if (op & 32) {
            state.mode = TYPE$1;
            break top;
          } else {
            strm.msg = "invalid literal/length code";
            state.mode = BAD$1;
            break top;
          }
          break;
        }
    } while (_in < last && _out < end);
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
};
var MAXBITS = 15;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;
var lbase = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]);
var lext = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  199,
  75
]);
var dbase = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]);
var dext = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]);
var inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
  const bits = opts.bits;
  let len = 0;
  let sym = 0;
  let min = 0, max = 0;
  let root = 0;
  let curr = 0;
  let drop = 0;
  let left = 0;
  let used = 0;
  let huff = 0;
  let incr;
  let fill;
  let low;
  let mask;
  let next;
  let base = null;
  let match;
  const count = new Uint16Array(MAXBITS + 1);
  const offs = new Uint16Array(MAXBITS + 1);
  let extra = null;
  let here_bits, here_op, here_val;
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0;
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;
  }
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }
  if (type === CODES$1) {
    base = extra = work;
    match = 20;
  } else if (type === LENS$1) {
    base = lbase;
    extra = lext;
    match = 257;
  } else {
    base = dbase;
    extra = dext;
    match = 0;
  }
  huff = 0;
  sym = 0;
  len = min;
  next = table_index;
  curr = root;
  drop = 0;
  low = -1;
  used = 1 << root;
  mask = used - 1;
  if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
    return 1;
  }
  for (; ; ) {
    here_bits = len - drop;
    if (work[sym] + 1 < match) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] >= match) {
      here_op = extra[work[sym] - match];
      here_val = base[work[sym] - match];
    } else {
      here_op = 32 + 64;
      here_val = 0;
    }
    incr = 1 << len - drop;
    fill = 1 << curr;
    min = fill;
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill !== 0);
    incr = 1 << len - 1;
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }
    if (len > root && (huff & mask) !== low) {
      if (drop === 0) {
        drop = root;
      }
      next += min;
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }
      used += 1 << curr;
      if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
        return 1;
      }
      low = huff & mask;
      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  if (huff !== 0) {
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }
  opts.bits = root;
  return 0;
};
var inftrees = inflate_table;
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var {
  Z_FINISH: Z_FINISH$1,
  Z_BLOCK,
  Z_TREES,
  Z_OK: Z_OK$1,
  Z_STREAM_END: Z_STREAM_END$1,
  Z_NEED_DICT: Z_NEED_DICT$1,
  Z_STREAM_ERROR: Z_STREAM_ERROR$1,
  Z_DATA_ERROR: Z_DATA_ERROR$1,
  Z_MEM_ERROR: Z_MEM_ERROR$1,
  Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFLATED
} = constants$2;
var HEAD = 16180;
var FLAGS = 16181;
var TIME = 16182;
var OS = 16183;
var EXLEN = 16184;
var EXTRA = 16185;
var NAME = 16186;
var COMMENT = 16187;
var HCRC = 16188;
var DICTID = 16189;
var DICT = 16190;
var TYPE = 16191;
var TYPEDO = 16192;
var STORED = 16193;
var COPY_ = 16194;
var COPY = 16195;
var TABLE2 = 16196;
var LENLENS = 16197;
var CODELENS = 16198;
var LEN_ = 16199;
var LEN = 16200;
var LENEXT = 16201;
var DIST = 16202;
var DISTEXT = 16203;
var MATCH = 16204;
var LIT = 16205;
var CHECK = 16206;
var LENGTH = 16207;
var DONE = 16208;
var BAD = 16209;
var MEM = 16210;
var SYNC = 16211;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var MAX_WBITS = 15;
var DEF_WBITS = MAX_WBITS;
var zswap32 = (q2) => {
  return (q2 >>> 24 & 255) + (q2 >>> 8 & 65280) + ((q2 & 65280) << 8) + ((q2 & 255) << 24);
};
function InflateState() {
  this.strm = null;
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Uint16Array(320);
  this.work = new Uint16Array(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
var inflateStateCheck = (strm) => {
  if (!strm) {
    return 1;
  }
  const state = strm.state;
  if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) {
    return 1;
  }
  return 0;
};
var inflateResetKeep = (strm) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = "";
  if (state.wrap) {
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.flags = -1;
  state.dmax = 32768;
  state.head = null;
  state.hold = 0;
  state.bits = 0;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
  state.sane = 1;
  state.back = -1;
  return Z_OK$1;
};
var inflateReset = (strm) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
};
var inflateReset2 = (strm, windowBits) => {
  let wrap;
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else {
    wrap = (windowBits >> 4) + 5;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};
var inflateInit2 = (strm, windowBits) => {
  if (!strm) {
    return Z_STREAM_ERROR$1;
  }
  const state = new InflateState();
  strm.state = state;
  state.strm = strm;
  state.window = null;
  state.mode = HEAD;
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null;
  }
  return ret;
};
var inflateInit = (strm) => {
  return inflateInit2(strm, DEF_WBITS);
};
var virgin = true;
var lenfix;
var distfix;
var fixedtables = (state) => {
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);
    let sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }
    inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }
    inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
    virgin = false;
  }
  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};
var updatewindow = (strm, src, end, copy) => {
  let dist;
  const state = strm.state;
  if (state.window === null) {
    state.window = new Uint8Array(1 << state.wbits);
  }
  if (state.wsize === 0) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
  }
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
};
var inflate$2 = (strm, flush) => {
  let state;
  let input, output;
  let next;
  let put;
  let have, left;
  let hold;
  let bits;
  let _in, _out;
  let copy;
  let from;
  let from_source;
  let here = 0;
  let here_bits, here_op, here_val;
  let last_bits, last_op, last_val;
  let len;
  let ret;
  const hbuf = new Uint8Array(4);
  let opts;
  let n;
  const order = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.mode === TYPE) {
    state.mode = TYPEDO;
  }
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  _in = have;
  _out = left;
  ret = Z_OK$1;
  inf_leave:
    for (; ; ) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.wrap & 2 && hold === 35615) {
            if (state.wbits === 0) {
              state.wbits = 15;
            }
            state.check = 0;
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            hold = 0;
            bits = 0;
            state.mode = FLAGS;
            break;
          }
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) || /* check if zlib header allowed */
          (((hold & 255) << 8) + (hold >> 8)) % 31) {
            strm.msg = "incorrect header check";
            state.mode = BAD;
            break;
          }
          if ((hold & 15) !== Z_DEFLATED) {
            strm.msg = "unknown compression method";
            state.mode = BAD;
            break;
          }
          hold >>>= 4;
          bits -= 4;
          len = (hold & 15) + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          }
          if (len > 15 || len > state.wbits) {
            strm.msg = "invalid window size";
            state.mode = BAD;
            break;
          }
          state.dmax = 1 << state.wbits;
          state.flags = 0;
          strm.adler = state.check = 1;
          state.mode = hold & 512 ? DICTID : TYPE;
          hold = 0;
          bits = 0;
          break;
        case FLAGS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.flags = hold;
          if ((state.flags & 255) !== Z_DEFLATED) {
            strm.msg = "unknown compression method";
            state.mode = BAD;
            break;
          }
          if (state.flags & 57344) {
            strm.msg = "unknown header flags set";
            state.mode = BAD;
            break;
          }
          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }
          if (state.flags & 512 && state.wrap & 4) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_1(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = TIME;
        /* falls through */
        case TIME:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 512 && state.wrap & 4) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            hbuf[2] = hold >>> 16 & 255;
            hbuf[3] = hold >>> 24 & 255;
            state.check = crc32_1(state.check, hbuf, 4, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = OS;
        /* falls through */
        case OS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.xflags = hold & 255;
            state.head.os = hold >> 8;
          }
          if (state.flags & 512 && state.wrap & 4) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_1(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = EXLEN;
        /* falls through */
        case EXLEN:
          if (state.flags & 1024) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 512 && state.wrap & 4) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32_1(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
          } else if (state.head) {
            state.head.extra = null;
          }
          state.mode = EXTRA;
        /* falls through */
        case EXTRA:
          if (state.flags & 1024) {
            copy = state.length;
            if (copy > have) {
              copy = have;
            }
            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  state.head.extra = new Uint8Array(state.head.extra_len);
                }
                state.head.extra.set(
                  input.subarray(
                    next,
                    // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    next + copy
                  ),
                  /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                  len
                );
              }
              if (state.flags & 512 && state.wrap & 4) {
                state.check = crc32_1(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              state.length -= copy;
            }
            if (state.length) {
              break inf_leave;
            }
          }
          state.length = 0;
          state.mode = NAME;
        /* falls through */
        case NAME:
          if (state.flags & 2048) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512 && state.wrap & 4) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
        /* falls through */
        case COMMENT:
          if (state.flags & 4096) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512 && state.wrap & 4) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
        /* falls through */
        case HCRC:
          if (state.flags & 512) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 4 && hold !== (state.check & 65535)) {
              strm.msg = "header crc mismatch";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }
          strm.adler = state.check = 0;
          state.mode = TYPE;
          break;
        case DICTID:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          strm.adler = state.check = zswap32(hold);
          hold = 0;
          bits = 0;
          state.mode = DICT;
        /* falls through */
        case DICT:
          if (state.havedict === 0) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            return Z_NEED_DICT$1;
          }
          strm.adler = state.check = 1;
          state.mode = TYPE;
        /* falls through */
        case TYPE:
          if (flush === Z_BLOCK || flush === Z_TREES) {
            break inf_leave;
          }
        /* falls through */
        case TYPEDO:
          if (state.last) {
            hold >>>= bits & 7;
            bits -= bits & 7;
            state.mode = CHECK;
            break;
          }
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.last = hold & 1;
          hold >>>= 1;
          bits -= 1;
          switch (hold & 3) {
            case 0:
              state.mode = STORED;
              break;
            case 1:
              fixedtables(state);
              state.mode = LEN_;
              if (flush === Z_TREES) {
                hold >>>= 2;
                bits -= 2;
                break inf_leave;
              }
              break;
            case 2:
              state.mode = TABLE2;
              break;
            case 3:
              strm.msg = "invalid block type";
              state.mode = BAD;
          }
          hold >>>= 2;
          bits -= 2;
          break;
        case STORED:
          hold >>>= bits & 7;
          bits -= bits & 7;
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
            strm.msg = "invalid stored block lengths";
            state.mode = BAD;
            break;
          }
          state.length = hold & 65535;
          hold = 0;
          bits = 0;
          state.mode = COPY_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        /* falls through */
        case COPY_:
          state.mode = COPY;
        /* falls through */
        case COPY:
          copy = state.length;
          if (copy) {
            if (copy > have) {
              copy = have;
            }
            if (copy > left) {
              copy = left;
            }
            if (copy === 0) {
              break inf_leave;
            }
            output.set(input.subarray(next, next + copy), put);
            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          }
          state.mode = TYPE;
          break;
        case TABLE2:
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.nlen = (hold & 31) + 257;
          hold >>>= 5;
          bits -= 5;
          state.ndist = (hold & 31) + 1;
          hold >>>= 5;
          bits -= 5;
          state.ncode = (hold & 15) + 4;
          hold >>>= 4;
          bits -= 4;
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = "too many length or distance symbols";
            state.mode = BAD;
            break;
          }
          state.have = 0;
          state.mode = LENLENS;
        /* falls through */
        case LENLENS:
          while (state.have < state.ncode) {
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.lens[order[state.have++]] = hold & 7;
            hold >>>= 3;
            bits -= 3;
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = { bits: state.lenbits };
          ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid code lengths set";
            state.mode = BAD;
            break;
          }
          state.have = 0;
          state.mode = CODELENS;
        /* falls through */
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (; ; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_val < 16) {
              hold >>>= here_bits;
              bits -= here_bits;
              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                n = here_bits + 2;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                if (state.have === 0) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD;
                  break;
                }
                len = state.lens[state.have - 1];
                copy = 3 + (hold & 3);
                hold >>>= 2;
                bits -= 2;
              } else if (here_val === 17) {
                n = here_bits + 3;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 3 + (hold & 7);
                hold >>>= 3;
                bits -= 3;
              } else {
                n = here_bits + 7;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 11 + (hold & 127);
                hold >>>= 7;
                bits -= 7;
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = "invalid bit length repeat";
                state.mode = BAD;
                break;
              }
              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
          if (state.mode === BAD) {
            break;
          }
          if (state.lens[256] === 0) {
            strm.msg = "invalid code -- missing end-of-block";
            state.mode = BAD;
            break;
          }
          state.lenbits = 9;
          opts = { bits: state.lenbits };
          ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid literal/lengths set";
            state.mode = BAD;
            break;
          }
          state.distbits = 6;
          state.distcode = state.distdyn;
          opts = { bits: state.distbits };
          ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          state.distbits = opts.bits;
          if (ret) {
            strm.msg = "invalid distances set";
            state.mode = BAD;
            break;
          }
          state.mode = LEN_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        /* falls through */
        case LEN_:
          state.mode = LEN;
        /* falls through */
        case LEN:
          if (have >= 6 && left >= 258) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            inffast(strm, _out);
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            if (state.mode === TYPE) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (; ; ) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (here_op && (here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            state.back = -1;
            state.mode = TYPE;
            break;
          }
          if (here_op & 64) {
            strm.msg = "invalid literal/length code";
            state.mode = BAD;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
        /* falls through */
        case LENEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          state.was = state.length;
          state.mode = DIST;
        /* falls through */
        case DIST:
          for (; ; ) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = "invalid distance code";
            state.mode = BAD;
            break;
          }
          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;
        /* falls through */
        case DISTEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.offset += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          if (state.offset > state.dmax) {
            strm.msg = "invalid distance too far back";
            state.mode = BAD;
            break;
          }
          state.mode = MATCH;
        /* falls through */
        case MATCH:
          if (left === 0) {
            break inf_leave;
          }
          copy = _out - left;
          if (state.offset > copy) {
            copy = state.offset - copy;
            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
            }
            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            } else {
              from = state.wnext - copy;
            }
            if (copy > state.length) {
              copy = state.length;
            }
            from_source = state.window;
          } else {
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }
          if (copy > left) {
            copy = left;
          }
          left -= copy;
          state.length -= copy;
          do {
            output[put++] = from_source[from++];
          } while (--copy);
          if (state.length === 0) {
            state.mode = LEN;
          }
          break;
        case LIT:
          if (left === 0) {
            break inf_leave;
          }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold |= input[next++] << bits;
              bits += 8;
            }
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (state.wrap & 4 && _out) {
              strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
              state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
            }
            _out = left;
            if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = "incorrect data check";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = LENGTH;
        /* falls through */
        case LENGTH:
          if (state.wrap && state.flags) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
              strm.msg = "incorrect length check";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = DONE;
        /* falls through */
        case DONE:
          ret = Z_STREAM_END$1;
          break inf_leave;
        case BAD:
          ret = Z_DATA_ERROR$1;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR$1;
        case SYNC:
        /* falls through */
        default:
          return Z_STREAM_ERROR$1;
      }
    }
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap & 4 && _out) {
    strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
    state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR$1;
  }
  return ret;
};
var inflateEnd = (strm) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};
var inflateGetHeader = (strm, head) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  if ((state.wrap & 2) === 0) {
    return Z_STREAM_ERROR$1;
  }
  state.head = head;
  head.done = false;
  return Z_OK$1;
};
var inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;
  let state;
  let dictid;
  let ret;
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }
  if (state.mode === DICT) {
    dictid = 1;
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  return Z_OK$1;
};
var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = "pako inflate (from Nodeca project)";
var inflate_1$2 = {
  inflateReset: inflateReset_1,
  inflateReset2: inflateReset2_1,
  inflateResetKeep: inflateResetKeep_1,
  inflateInit: inflateInit_1,
  inflateInit2: inflateInit2_1,
  inflate: inflate_2$1,
  inflateEnd: inflateEnd_1,
  inflateGetHeader: inflateGetHeader_1,
  inflateSetDictionary: inflateSetDictionary_1,
  inflateInfo
};
function GZheader() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
var gzheader = GZheader;
var toString = Object.prototype.toString;
var {
  Z_NO_FLUSH,
  Z_FINISH,
  Z_OK,
  Z_STREAM_END,
  Z_NEED_DICT,
  Z_STREAM_ERROR,
  Z_DATA_ERROR,
  Z_MEM_ERROR,
  Z_BUF_ERROR
} = constants$2;
var defaultOptions3 = {
  chunkSize: 1024 * 64,
  windowBits: 15,
  to: ""
};
function Inflate$1(options) {
  this.options = common.assign({}, defaultOptions3, options || {});
  const opt = this.options;
  if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) {
      opt.windowBits = -15;
    }
  }
  if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
    opt.windowBits += 32;
  }
  if (opt.windowBits > 15 && opt.windowBits < 48) {
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new zstream();
  this.strm.avail_out = 0;
  let status = inflate_1$2.inflateInit2(
    this.strm,
    opt.windowBits
  );
  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }
  this.header = new gzheader();
  inflate_1$2.inflateGetHeader(this.strm, this.header);
  if (opt.dictionary) {
    if (typeof opt.dictionary === "string") {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) {
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}
Inflate$1.prototype.push = function(data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;
  if (this.ended) return false;
  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
  if (toString.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  for (; ; ) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = inflate_1$2.inflate(strm, _flush_mode);
    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);
      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        status = Z_NEED_DICT;
      }
    }
    while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap & 2 && strm.state.flags !== 0 && strm.input[strm.next_in] !== 0) {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }
    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }
    last_avail_out = strm.avail_out;
    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END || _flush_mode > 0) {
        if (this.options.to === "string") {
          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
          this.onData(utf8str);
        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
          strm.avail_out = 0;
          strm.next_out = 0;
        }
      }
    }
    if ((status === Z_OK || status === Z_BUF_ERROR) && last_avail_out === 0) continue;
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }
    if (strm.avail_in === 0) {
      if (_flush_mode === Z_FINISH) {
        status = inflate_1$2.inflateEnd(this.strm);
        this.onEnd(status === Z_OK ? Z_BUF_ERROR : status);
        this.ended = true;
        return false;
      }
      break;
    }
  }
  return true;
};
Inflate$1.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Inflate$1.prototype.onEnd = function(status) {
  if (status === Z_OK) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function inflate$1(input, options) {
  const inflator = new Inflate$1(options);
  inflator.push(input, true);
  if (inflator.err) throw inflator.msg || messages[inflator.err];
  return inflator.result;
}
function inflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}
var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;
var inflate_1$1 = {
  Inflate: Inflate_1$1,
  inflate: inflate_2,
  inflateRaw: inflateRaw_1$1,
  ungzip: ungzip$1,
  constants
};
var { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
var { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var inflateRaw_1 = inflateRaw;

// src/lib/hwp/cfbReader.ts
var CfbError = class extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CfbError";
  }
};
var HwpCfbReader = class _HwpCfbReader {
  constructor(data) {
    __publicField(this, "container");
    try {
      this.container = CFB.read(data, { type: "buffer" });
    } catch (e) {
      throw new CfbError(`CFB \uD30C\uC2F1 \uC2E4\uD328: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  /** path 정확히 일치하는 stream 의 raw bytes (압축/암호화 그대로) */
  readStreamRaw(path) {
    const norm = path.startsWith("/") ? path : `/${path}`;
    const entry = CFB.find(this.container, norm);
    if (!entry || entry.type !== 2) return null;
    return toUint8Array(entry.content);
  }
  /** 디플레이트 압축 해제. raw deflate (zlib 헤더 없음). */
  static decompress(data) {
    if (data.byteLength === 0) return data;
    try {
      return inflateRaw_1(data);
    } catch (e) {
      throw new CfbError(`deflate \uD574\uC81C \uC2E4\uD328: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  /** FileHeader (256바이트, 비압축) */
  readFileHeader() {
    const data = this.readStreamRaw("/FileHeader");
    if (!data) throw new CfbError("/FileHeader \uC2A4\uD2B8\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
    return data;
  }
  /** DocInfo (compressed 플래그에 따라 자동 해제) */
  readDocInfo(compressed) {
    const raw = this.readStreamRaw("/DocInfo");
    if (!raw) throw new CfbError("/DocInfo \uC2A4\uD2B8\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
    return compressed ? _HwpCfbReader.decompress(raw) : raw;
  }
  /** /BodyText/SectionN 또는 /ViewText/SectionN (배포용) */
  readBodySection(index, compressed, distribution) {
    const folder = distribution ? "ViewText" : "BodyText";
    const raw = this.readStreamRaw(`/${folder}/Section${index}`);
    if (!raw) return null;
    if (distribution) {
      return raw;
    }
    return compressed ? _HwpCfbReader.decompress(raw) : raw;
  }
  /** BodyText 섹션 개수 (Section0 ~ SectionN-1) */
  sectionCount(distribution = false) {
    const folder = distribution ? "ViewText" : "BodyText";
    const re = new RegExp(`(?:^|/)${folder}/Section\\d+$`);
    let n = 0;
    for (const path of this.container.FullPaths) {
      if (re.test(path)) n++;
    }
    return n;
  }
  /** /BinData/BIN{XXXX}.{ext} 모두 나열 */
  listBinData() {
    const result = [];
    const re = /(?:^|\/)BinData\/BIN([0-9A-Fa-f]{4})\.([^/]+)$/;
    for (const path of this.container.FullPaths) {
      const m2 = re.exec(path);
      if (!m2) continue;
      result.push({
        name: path,
        storageId: parseInt(m2[1], 16),
        extension: m2[2].toLowerCase()
      });
    }
    return result;
  }
  /** /BinData/BIN{XXXX}.{ext} 의 데이터 (압축되어 있으면 해제 시도) */
  readBinData(path) {
    const raw = this.readStreamRaw(path);
    if (!raw) return null;
    try {
      return _HwpCfbReader.decompress(raw);
    } catch {
      return raw;
    }
  }
  /** 디버그 — 모든 stream 경로 */
  listStreams() {
    const out = [];
    for (let i = 0; i < this.container.FileIndex.length; i++) {
      if (this.container.FileIndex[i].type === 2) out.push(this.container.FullPaths[i]);
    }
    return out;
  }
};
function toUint8Array(content) {
  if (content instanceof Uint8Array) return content;
  return Uint8Array.from(content);
}

// src/lib/hwp/byteReader.ts
var UTF16_LE = new TextDecoder("utf-16le");
var ByteReader = class {
  constructor(data, offset = 0, length) {
    __publicField(this, "view");
    __publicField(this, "offset");
    __publicField(this, "end");
    this.view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    this.offset = offset;
    this.end = length === void 0 ? data.byteLength : offset + length;
  }
  /** 현재 위치 (바이트 오프셋, 시작점 기준) */
  position() {
    return this.offset;
  }
  /** 남은 바이트 */
  remaining() {
    return Math.max(0, this.end - this.offset);
  }
  isEmpty() {
    return this.remaining() === 0;
  }
  setPosition(pos) {
    if (pos < 0 || pos > this.end) {
      throw new RangeError(`setPosition out of range: ${pos} (end=${this.end})`);
    }
    this.offset = pos;
  }
  skip(n) {
    if (this.offset + n > this.end) {
      throw new RangeError(`skip exceeds end: pos=${this.offset}+${n} > ${this.end}`);
    }
    this.offset += n;
  }
  readU8() {
    this.ensure(1);
    return this.view.getUint8(this.offset++);
  }
  readU16() {
    this.ensure(2);
    const v2 = this.view.getUint16(this.offset, true);
    this.offset += 2;
    return v2;
  }
  readU32() {
    this.ensure(4);
    const v2 = this.view.getUint32(this.offset, true);
    this.offset += 4;
    return v2;
  }
  readI8() {
    this.ensure(1);
    return this.view.getInt8(this.offset++);
  }
  readI16() {
    this.ensure(2);
    const v2 = this.view.getInt16(this.offset, true);
    this.offset += 2;
    return v2;
  }
  readI32() {
    this.ensure(4);
    const v2 = this.view.getInt32(this.offset, true);
    this.offset += 4;
    return v2;
  }
  /** i64 (BigInt). HWP에서는 거의 등장하지 않지만 호환을 위해. */
  readI64() {
    this.ensure(8);
    const v2 = this.view.getBigInt64(this.offset, true);
    this.offset += 8;
    return v2;
  }
  /** 지정 길이 바이트를 복사하지 않고 sub-view 반환 (Uint8Array) */
  readBytes(len) {
    this.ensure(len);
    const out = new Uint8Array(this.view.buffer, this.view.byteOffset + this.offset, len);
    this.offset += len;
    return new Uint8Array(out);
  }
  /** 남은 전부 */
  readRemaining() {
    return this.readBytes(this.remaining());
  }
  /**
   * HWP 문자열: [u16 charCount] + [UTF-16LE bytes * charCount].
   */
  readHwpString() {
    const charCount = this.readU16();
    if (charCount === 0) return "";
    return this.readUtf16(charCount);
  }
  /** 지정 글자 수의 UTF-16LE 문자열 */
  readUtf16(charCount) {
    const byteLen = charCount * 2;
    this.ensure(byteLen);
    const slice = new Uint8Array(this.view.buffer, this.view.byteOffset + this.offset, byteLen);
    this.offset += byteLen;
    return UTF16_LE.decode(slice);
  }
  /** ColorRef (0x00BBGGRR) — u32 그대로 */
  readColorRef() {
    return this.readU32();
  }
  ensure(n) {
    if (this.offset + n > this.end) {
      throw new RangeError(
        `ByteReader: not enough bytes. need=${n}, have=${this.end - this.offset}, pos=${this.offset}`
      );
    }
  }
};

// src/lib/hwp/tags.ts
var HWPTAG_BEGIN = 16;
var HWPTAG_DOCUMENT_PROPERTIES = HWPTAG_BEGIN + 0;
var HWPTAG_ID_MAPPINGS = HWPTAG_BEGIN + 1;
var HWPTAG_BIN_DATA = HWPTAG_BEGIN + 2;
var HWPTAG_FACE_NAME = HWPTAG_BEGIN + 3;
var HWPTAG_BORDER_FILL = HWPTAG_BEGIN + 4;
var HWPTAG_CHAR_SHAPE = HWPTAG_BEGIN + 5;
var HWPTAG_TAB_DEF = HWPTAG_BEGIN + 6;
var HWPTAG_NUMBERING = HWPTAG_BEGIN + 7;
var HWPTAG_BULLET = HWPTAG_BEGIN + 8;
var HWPTAG_PARA_SHAPE = HWPTAG_BEGIN + 9;
var HWPTAG_STYLE = HWPTAG_BEGIN + 10;
var HWPTAG_DOC_DATA = HWPTAG_BEGIN + 11;
var HWPTAG_DISTRIBUTE_DOC_DATA = HWPTAG_BEGIN + 12;
var HWPTAG_COMPATIBLE_DOCUMENT = HWPTAG_BEGIN + 14;
var HWPTAG_LAYOUT_COMPATIBILITY = HWPTAG_BEGIN + 15;
var HWPTAG_TRACKCHANGE = HWPTAG_BEGIN + 16;
var HWPTAG_PARA_HEADER = HWPTAG_BEGIN + 50;
var HWPTAG_PARA_TEXT = HWPTAG_BEGIN + 51;
var HWPTAG_PARA_CHAR_SHAPE = HWPTAG_BEGIN + 52;
var HWPTAG_PARA_LINE_SEG = HWPTAG_BEGIN + 53;
var HWPTAG_PARA_RANGE_TAG = HWPTAG_BEGIN + 54;
var HWPTAG_CTRL_HEADER = HWPTAG_BEGIN + 55;
var HWPTAG_LIST_HEADER = HWPTAG_BEGIN + 56;
var HWPTAG_PAGE_DEF = HWPTAG_BEGIN + 57;
var HWPTAG_FOOTNOTE_SHAPE = HWPTAG_BEGIN + 58;
var HWPTAG_PAGE_BORDER_FILL = HWPTAG_BEGIN + 59;
var HWPTAG_SHAPE_COMPONENT = HWPTAG_BEGIN + 60;
var HWPTAG_TABLE = HWPTAG_BEGIN + 61;
var HWPTAG_SHAPE_COMPONENT_LINE = HWPTAG_BEGIN + 62;
var HWPTAG_SHAPE_COMPONENT_RECTANGLE = HWPTAG_BEGIN + 63;
var HWPTAG_SHAPE_COMPONENT_ELLIPSE = HWPTAG_BEGIN + 64;
var HWPTAG_SHAPE_COMPONENT_ARC = HWPTAG_BEGIN + 65;
var HWPTAG_SHAPE_COMPONENT_POLYGON = HWPTAG_BEGIN + 66;
var HWPTAG_SHAPE_COMPONENT_CURVE = HWPTAG_BEGIN + 67;
var HWPTAG_SHAPE_COMPONENT_OLE = HWPTAG_BEGIN + 68;
var HWPTAG_SHAPE_COMPONENT_PICTURE = HWPTAG_BEGIN + 69;
var HWPTAG_SHAPE_COMPONENT_CONTAINER = HWPTAG_BEGIN + 70;
var HWPTAG_CTRL_DATA = HWPTAG_BEGIN + 71;
var HWPTAG_EQEDIT = HWPTAG_BEGIN + 72;
var HWPTAG_SHAPE_COMPONENT_TEXTART = HWPTAG_BEGIN + 74;
var HWPTAG_FORM_OBJECT = HWPTAG_BEGIN + 75;
var HWPTAG_MEMO_SHAPE = HWPTAG_BEGIN + 76;
var HWPTAG_MEMO_LIST = HWPTAG_BEGIN + 77;
var HWPTAG_FORBIDDEN_CHAR = HWPTAG_BEGIN + 78;
var HWPTAG_CHART_DATA = HWPTAG_BEGIN + 79;
function ctrlId(s) {
  if (s.length !== 4) throw new Error(`ctrlId requires 4 chars, got "${s}"`);
  return (s.charCodeAt(0) << 24 | s.charCodeAt(1) << 16 | s.charCodeAt(2) << 8 | s.charCodeAt(3)) >>> 0;
}
var CTRL_SECTION_DEF = ctrlId("secd");
var CTRL_COLUMN_DEF = ctrlId("cold");
var CTRL_TABLE = ctrlId("tbl ");
var CTRL_EQUATION = ctrlId("eqed");
var CTRL_GEN_SHAPE = ctrlId("gso ");
var SHAPE_PICTURE_ID = ctrlId("$pic");
var SHAPE_RECT_ID = ctrlId("$rec");
var SHAPE_LINE_ID = ctrlId("$lin");
var SHAPE_ELLIPSE_ID = ctrlId("$ell");
var SHAPE_POLYGON_ID = ctrlId("$pol");
var SHAPE_ARC_ID = ctrlId("$arc");
var SHAPE_CURVE_ID = ctrlId("$cur");
var SHAPE_CONNECTOR_ID = ctrlId("$col");
var CTRL_HEADER = ctrlId("head");
var CTRL_FOOTER = ctrlId("foot");
var CTRL_FOOTNOTE = ctrlId("fn  ");
var CTRL_ENDNOTE = ctrlId("en  ");
var CTRL_AUTO_NUMBER = ctrlId("atno");
var CTRL_NEW_NUMBER = ctrlId("nwno");
var CTRL_PAGE_NUM_POS = ctrlId("pgnp");
var CTRL_PAGE_HIDE = ctrlId("pghd");
var CTRL_INDEX_MARK = ctrlId("idxm");
var CTRL_BOOKMARK = ctrlId("bokm");
var CTRL_TCPS = ctrlId("tcps");
var CTRL_FORM = ctrlId("form");
var CTRL_CHAR_OVERLAP = ctrlId("tdut");
var CTRL_HIDDEN_COMMENT = ctrlId("tcmt");
var FIELD_CLICKHERE = ctrlId("%clk");
var FIELD_HYPERLINK = ctrlId("%hlk");
var FIELD_BOOKMARK = ctrlId("%bmk");
var FIELD_DATE = ctrlId("%dte");
var FIELD_DOCDATE = ctrlId("%ddt");
var FIELD_PATH = ctrlId("%pat");
var FIELD_MAILMERGE = ctrlId("%mmg");
var FIELD_CROSSREF = ctrlId("%xrf");
var FIELD_FORMULA = ctrlId("%fmu");
var FIELD_SUMMARY = ctrlId("%smr");
var FIELD_USERINFO = ctrlId("%usr");
function isFieldCtrlId(id) {
  return (id >>> 24 & 255) === 37;
}
var TAG_NAMES = {
  [HWPTAG_DOCUMENT_PROPERTIES]: "DOCUMENT_PROPERTIES",
  [HWPTAG_ID_MAPPINGS]: "ID_MAPPINGS",
  [HWPTAG_BIN_DATA]: "BIN_DATA",
  [HWPTAG_FACE_NAME]: "FACE_NAME",
  [HWPTAG_BORDER_FILL]: "BORDER_FILL",
  [HWPTAG_CHAR_SHAPE]: "CHAR_SHAPE",
  [HWPTAG_TAB_DEF]: "TAB_DEF",
  [HWPTAG_NUMBERING]: "NUMBERING",
  [HWPTAG_BULLET]: "BULLET",
  [HWPTAG_PARA_SHAPE]: "PARA_SHAPE",
  [HWPTAG_STYLE]: "STYLE",
  [HWPTAG_DOC_DATA]: "DOC_DATA",
  [HWPTAG_DISTRIBUTE_DOC_DATA]: "DISTRIBUTE_DOC_DATA",
  [HWPTAG_COMPATIBLE_DOCUMENT]: "COMPATIBLE_DOCUMENT",
  [HWPTAG_LAYOUT_COMPATIBILITY]: "LAYOUT_COMPATIBILITY",
  [HWPTAG_TRACKCHANGE]: "TRACKCHANGE",
  [HWPTAG_PARA_HEADER]: "PARA_HEADER",
  [HWPTAG_PARA_TEXT]: "PARA_TEXT",
  [HWPTAG_PARA_CHAR_SHAPE]: "PARA_CHAR_SHAPE",
  [HWPTAG_PARA_LINE_SEG]: "PARA_LINE_SEG",
  [HWPTAG_PARA_RANGE_TAG]: "PARA_RANGE_TAG",
  [HWPTAG_CTRL_HEADER]: "CTRL_HEADER",
  [HWPTAG_LIST_HEADER]: "LIST_HEADER",
  [HWPTAG_PAGE_DEF]: "PAGE_DEF",
  [HWPTAG_FOOTNOTE_SHAPE]: "FOOTNOTE_SHAPE",
  [HWPTAG_PAGE_BORDER_FILL]: "PAGE_BORDER_FILL",
  [HWPTAG_SHAPE_COMPONENT]: "SHAPE_COMPONENT",
  [HWPTAG_TABLE]: "TABLE",
  [HWPTAG_SHAPE_COMPONENT_LINE]: "SHAPE_LINE",
  [HWPTAG_SHAPE_COMPONENT_RECTANGLE]: "SHAPE_RECTANGLE",
  [HWPTAG_SHAPE_COMPONENT_ELLIPSE]: "SHAPE_ELLIPSE",
  [HWPTAG_SHAPE_COMPONENT_ARC]: "SHAPE_ARC",
  [HWPTAG_SHAPE_COMPONENT_POLYGON]: "SHAPE_POLYGON",
  [HWPTAG_SHAPE_COMPONENT_CURVE]: "SHAPE_CURVE",
  [HWPTAG_SHAPE_COMPONENT_OLE]: "SHAPE_OLE",
  [HWPTAG_SHAPE_COMPONENT_PICTURE]: "SHAPE_PICTURE",
  [HWPTAG_SHAPE_COMPONENT_CONTAINER]: "SHAPE_CONTAINER",
  [HWPTAG_CTRL_DATA]: "CTRL_DATA",
  [HWPTAG_EQEDIT]: "EQEDIT",
  [HWPTAG_SHAPE_COMPONENT_TEXTART]: "SHAPE_TEXTART",
  [HWPTAG_FORM_OBJECT]: "FORM_OBJECT",
  [HWPTAG_MEMO_SHAPE]: "MEMO_SHAPE",
  [HWPTAG_MEMO_LIST]: "MEMO_LIST",
  [HWPTAG_FORBIDDEN_CHAR]: "FORBIDDEN_CHAR",
  [HWPTAG_CHART_DATA]: "CHART_DATA"
};
function tagName(tagId) {
  return TAG_NAMES[tagId] ?? "UNKNOWN";
}
var CTRL_NAMES = {
  [CTRL_SECTION_DEF]: "SectionDef",
  [CTRL_COLUMN_DEF]: "ColumnDef",
  [CTRL_TABLE]: "Table",
  [CTRL_EQUATION]: "Equation",
  [CTRL_GEN_SHAPE]: "GenShape",
  [CTRL_HEADER]: "Header",
  [CTRL_FOOTER]: "Footer",
  [CTRL_FOOTNOTE]: "Footnote",
  [CTRL_ENDNOTE]: "Endnote",
  [CTRL_AUTO_NUMBER]: "AutoNumber",
  [CTRL_NEW_NUMBER]: "NewNumber",
  [CTRL_PAGE_NUM_POS]: "PageNumPos",
  [CTRL_PAGE_HIDE]: "PageHide",
  [CTRL_INDEX_MARK]: "IndexMark",
  [CTRL_BOOKMARK]: "Bookmark",
  [CTRL_TCPS]: "Tcps",
  [CTRL_FORM]: "Form",
  [CTRL_CHAR_OVERLAP]: "CharOverlap",
  [CTRL_HIDDEN_COMMENT]: "HiddenComment"
};
function ctrlIdToString(id) {
  return String.fromCharCode(id >>> 24 & 255, id >>> 16 & 255, id >>> 8 & 255, id & 255);
}

// src/lib/hwp/record.ts
var RecordError = class extends Error {
  constructor(msg) {
    super(msg);
    this.name = "RecordError";
  }
};
function readAllRecords(data) {
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const records = [];
  let offset = 0;
  const end = data.byteLength;
  while (offset < end) {
    if (end - offset < 4) {
      break;
    }
    const header = view.getUint32(offset, true);
    offset += 4;
    const tagId = header & 1023;
    const level = header >>> 10 & 1023;
    let size = header >>> 20;
    if (size === 4095) {
      if (end - offset < 4) {
        throw new RecordError(`extended size \uD5E4\uB354 \uC911\uAC04 EOF (tag=${tagId})`);
      }
      size = view.getUint32(offset, true);
      offset += 4;
    }
    if (offset + size > end) {
      throw new RecordError(
        `\uB808\uCF54\uB4DC \uB370\uC774\uD130 \uBD80\uC871: tag=${tagId}/${tagName(tagId)}, \uD544\uC694=${size}, \uAC00\uC6A9=${end - offset}`
      );
    }
    const recordData = new Uint8Array(data.buffer, data.byteOffset + offset, size);
    offset += size;
    records.push({
      tagId,
      level,
      size,
      data: new Uint8Array(recordData)
      // 복사
    });
  }
  return records;
}

// src/lib/hwp/docInfo.ts
var DEFAULT_DOC_PROPS = {
  sectionCount: 1,
  pageStartNum: 1,
  footnoteStartNum: 1,
  endnoteStartNum: 1,
  pictureStartNum: 1,
  tableStartNum: 1,
  equationStartNum: 1
};
function parseDocInfo(data) {
  const records = readAllRecords(data);
  const binData = [];
  const fontFaces = Array.from({ length: 7 }, () => []);
  const charShapes = [];
  const paraShapes = [];
  const styles = [];
  const borderFills = [];
  const numberings = [];
  const bullets = [];
  const tabDefs = [];
  let docProps = { ...DEFAULT_DOC_PROPS };
  let idMappings = null;
  let currentLang = 0;
  const langConsumed = [0, 0, 0, 0, 0, 0, 0];
  for (const rec of records) {
    switch (rec.tagId) {
      case HWPTAG_DOCUMENT_PROPERTIES:
        docProps = parseDocumentProperties(rec.data);
        break;
      case HWPTAG_ID_MAPPINGS:
        idMappings = parseIdMappings(rec.data);
        break;
      case HWPTAG_BIN_DATA:
        binData.push(parseBinData(rec.data));
        break;
      case HWPTAG_FACE_NAME: {
        const font = parseFaceName(rec.data);
        if (idMappings) {
          while (currentLang < 7 && langConsumed[currentLang] >= idMappings.fontCounts[currentLang]) {
            currentLang++;
          }
          if (currentLang < 7) {
            fontFaces[currentLang].push(font);
            langConsumed[currentLang]++;
          } else {
            fontFaces[6].push(font);
          }
        } else {
          fontFaces[0].push(font);
        }
        break;
      }
      case HWPTAG_BORDER_FILL:
        borderFills.push(parseBorderFill(rec.data));
        break;
      case HWPTAG_CHAR_SHAPE:
        charShapes.push(parseCharShape(rec.data));
        break;
      case HWPTAG_TAB_DEF:
        tabDefs.push(parseTabDef(rec.data));
        break;
      case HWPTAG_NUMBERING:
        numberings.push(parseNumbering(rec.data));
        break;
      case HWPTAG_BULLET:
        bullets.push(parseBullet(rec.data));
        break;
      case HWPTAG_PARA_SHAPE:
        paraShapes.push(parseParaShape(rec.data));
        break;
      case HWPTAG_STYLE:
        styles.push(parseStyle(rec.data));
        break;
      default:
        break;
    }
  }
  return {
    docInfo: {
      fontFaces,
      charShapes,
      paraShapes,
      styles,
      binData,
      borderFills,
      numberings,
      bullets,
      tabDefs
    },
    docProperties: docProps
  };
}
function parseBorderFill(data) {
  const r = new ByteReader(data);
  const attr = r.remaining() >= 2 ? r.readU16() : 0;
  const readBorder = () => {
    if (r.remaining() < 6) {
      return { lineType: 1, widthIndex: 0, color: 0 };
    }
    const lineType = r.readU8();
    const widthIndex = r.readU8();
    const color = r.readColorRef();
    return { lineType, widthIndex, color };
  };
  const borders = [
    readBorder(),
    readBorder(),
    readBorder(),
    readBorder()
  ];
  let diagonal = { diagonalType: 0, widthIndex: 0, color: 0 };
  if (r.remaining() >= 6) {
    diagonal = {
      diagonalType: r.readU8(),
      widthIndex: r.readU8(),
      color: r.readColorRef()
    };
  }
  let fill;
  if (r.remaining() >= 4) {
    const fillType = r.readU32();
    if (fillType === 0) {
      if (r.remaining() >= 4) r.skip(4);
    } else if ((fillType & 1) !== 0) {
      if (r.remaining() >= 12) {
        fill = {
          backgroundColor: r.readColorRef(),
          patternColor: r.readColorRef(),
          patternType: r.readI32()
        };
      }
    }
  }
  return { attr, borders, diagonal, fill };
}
function parseTabDef(data) {
  const r = new ByteReader(data);
  const attr = r.remaining() >= 4 ? r.readU32() : 0;
  return {
    attr,
    autoTabLeft: (attr & 1) !== 0,
    autoTabRight: (attr & 2) !== 0
  };
}
function parseNumbering(data) {
  const r = new ByteReader(data);
  const levelFormats = ["", "", "", "", "", "", ""];
  for (let level = 0; level < 7; level++) {
    if (r.remaining() < 12) break;
    r.readU32();
    r.readI16();
    r.readI16();
    r.readU32();
    if (r.remaining() < 2) break;
    const formatLen = r.readU16();
    if (formatLen > 0 && r.remaining() >= formatLen * 2) {
      try {
        levelFormats[level] = r.readUtf16(formatLen);
      } catch {
      }
    }
  }
  const startNumber = r.remaining() >= 2 ? r.readU16() : 1;
  return { startNumber, levelFormats };
}
function parseBullet(data) {
  const r = new ByteReader(data);
  if (r.remaining() < 12) return { bulletChar: "\u25CF" };
  r.readU32();
  r.readI16();
  r.readI16();
  r.readU32();
  if (r.remaining() < 2) return { bulletChar: "\u25CF" };
  const bulletCharCode = r.readU16();
  const bulletChar = bulletCharCode > 0 ? String.fromCharCode(bulletCharCode) : "\u25CF";
  return { bulletChar };
}
function parseIdMappings(data) {
  const r = new ByteReader(data);
  const safe = (n) => r.remaining() >= 4 ? r.readU32() : n;
  return {
    binDataCount: safe(0),
    fontCounts: [safe(0), safe(0), safe(0), safe(0), safe(0), safe(0), safe(0)],
    borderFillCount: safe(0),
    charShapeCount: safe(0),
    tabDefCount: safe(0),
    numberingCount: safe(0),
    bulletCount: safe(0),
    paraShapeCount: safe(0),
    styleCount: safe(0)
  };
}
function parseDocumentProperties(data) {
  const r = new ByteReader(data);
  const safe = (n) => r.remaining() >= 2 ? r.readU16() : n;
  return {
    sectionCount: safe(1),
    pageStartNum: safe(1),
    footnoteStartNum: safe(1),
    endnoteStartNum: safe(1),
    pictureStartNum: safe(1),
    tableStartNum: safe(1),
    equationStartNum: safe(1)
  };
}
function parseBinData(data) {
  const r = new ByteReader(data);
  const attr = r.readU16();
  const typeBits = attr & 15;
  let type;
  switch (typeBits) {
    case 0:
      type = "link";
      break;
    case 1:
      type = "embedding";
      break;
    case 2:
      type = "storage";
      break;
    default:
      type = "link";
      break;
  }
  if (type === "link") {
    safeReadHwpString(r);
    safeReadHwpString(r);
    return { storageId: 0, type };
  }
  const storageId = r.remaining() >= 2 ? r.readU16() : 0;
  const extension = safeReadHwpString(r);
  return { storageId, extension, type };
}
function parseFaceName(data) {
  const r = new ByteReader(data);
  const attr = r.readU8();
  const name = safeReadHwpString(r) ?? "";
  let substituteName;
  if ((attr & 128) !== 0) {
    substituteName = safeReadHwpString(r);
  }
  return { name, substituteName };
}
function parseCharShape(data) {
  const r = new ByteReader(data);
  const fontIds = [];
  for (let i = 0; i < 7; i++) fontIds.push(r.readU16());
  for (let i = 0; i < 7; i++) r.readU8();
  for (let i = 0; i < 7; i++) r.readI8();
  for (let i = 0; i < 7; i++) r.readU8();
  for (let i = 0; i < 7; i++) r.readI8();
  const baseSize = r.readI32();
  const attr = r.readU32();
  r.readI8();
  r.readI8();
  const textColor = r.readColorRef();
  const underlineColor = r.readColorRef();
  const shadeColor = r.readColorRef();
  const shadowColor = r.readColorRef();
  return {
    faceNameIds: {
      hangul: fontIds[0],
      latin: fontIds[1],
      hanja: fontIds[2],
      japanese: fontIds[3],
      other: fontIds[4],
      symbol: fontIds[5],
      user: fontIds[6]
    },
    baseSize,
    property: attr,
    textColor,
    shadeColor,
    underlineColor,
    shadowColor,
    bold: (attr & 2) !== 0,
    italic: (attr & 1) !== 0,
    underline: (attr >>> 2 & 3) !== 0,
    strikeout: (attr >>> 18 & 7) > 1
  };
}
function parseParaShape(data) {
  const r = new ByteReader(data);
  const attr1 = r.readU32();
  const leftMargin = r.readI32();
  const rightMargin = r.readI32();
  const indent = r.readI32();
  const prevSpacing = r.readI32();
  const nextSpacing = r.readI32();
  const lineSpacing = r.readI32();
  const alignBits = attr1 >>> 2 & 7;
  let alignment;
  switch (alignBits) {
    case 0:
      alignment = "justify";
      break;
    case 1:
      alignment = "left";
      break;
    case 2:
      alignment = "right";
      break;
    case 3:
      alignment = "center";
      break;
    case 4:
      alignment = "distribute";
      break;
    case 5:
      alignment = "distributeSpace";
      break;
    default:
      alignment = "unknown";
  }
  return {
    alignment,
    property: attr1,
    leftMargin,
    rightMargin,
    indent,
    prevSpacing,
    nextSpacing,
    lineSpacing
  };
}
function parseStyle(data) {
  const r = new ByteReader(data);
  const name = safeReadHwpString(r) ?? "";
  const engName = safeReadHwpString(r);
  if (r.remaining() >= 3) {
    r.readU8();
    r.readU8();
    r.readU8();
  }
  const paraShapeId = r.remaining() >= 2 ? r.readU16() : 0;
  const charShapeId = r.remaining() >= 2 ? r.readU16() : 0;
  return { name, engName, paraShapeId, charShapeId };
}
function safeReadHwpString(r) {
  if (r.remaining() < 2) return void 0;
  try {
    return r.readHwpString();
  } catch {
    return void 0;
  }
}

// src/lib/hwp/control.ts
function parseCtrlHeader(ctrlHeader, children, parseParagraphList2) {
  if (ctrlHeader.data.byteLength < 4) {
    return { kind: "unknown", ctrlId: "" };
  }
  const r = new ByteReader(ctrlHeader.data);
  const ctrlIdRaw = r.readU32();
  const ctrlData = ctrlHeader.data.subarray(4);
  switch (ctrlIdRaw) {
    case CTRL_TABLE:
      return parseTableControl(ctrlHeader, children, parseParagraphList2);
    case CTRL_GEN_SHAPE:
      return parseGsoControl(ctrlHeader, children);
    case CTRL_HEADER:
      return {
        kind: "header",
        paragraphs: collectListHeaderParagraphs(ctrlHeader, children, parseParagraphList2)
      };
    case CTRL_FOOTER:
      return {
        kind: "footer",
        paragraphs: collectListHeaderParagraphs(ctrlHeader, children, parseParagraphList2)
      };
    case CTRL_FOOTNOTE:
      return {
        kind: "footnote",
        paragraphs: collectListHeaderParagraphs(ctrlHeader, children, parseParagraphList2)
      };
    case CTRL_EQUATION:
      return parseEquationControl(ctrlHeader, children);
    case CTRL_SECTION_DEF:
      return parseSectionDefControl(children);
    case CTRL_COLUMN_DEF:
      return parseColumnDefControl(ctrlData);
    default:
      if (isFieldCtrlId(ctrlIdRaw)) {
        return parseFieldControl(ctrlIdRaw, ctrlData);
      }
      return { kind: "unknown", ctrlId: ctrlIdToString(ctrlIdRaw) };
  }
}
function parseTableControl(ctrlHeader, children, parseParagraphList2) {
  const baseLevel = ctrlHeader.level;
  let rowCount = 0;
  let colCount = 0;
  const cells = [];
  let tableSeen = false;
  for (let i = 0; i < children.length; i++) {
    const r = children[i];
    if (r.level !== baseLevel + 1) continue;
    if (r.tagId === HWPTAG_TABLE) {
      tableSeen = true;
      const meta = parseTableMeta(r.data);
      rowCount = meta.rowCount;
      colCount = meta.colCount;
    } else if (r.tagId === HWPTAG_LIST_HEADER) {
      if (!tableSeen) continue;
      const cellMeta = parseCellMeta(r.data);
      const cellChildren = [];
      for (let j2 = i + 1; j2 < children.length; j2++) {
        const cr = children[j2];
        if (cr.level < baseLevel + 1) break;
        if (cr.level === baseLevel + 1) {
          if (cr.tagId === HWPTAG_LIST_HEADER || cr.tagId === HWPTAG_TABLE) break;
        }
        cellChildren.push(cr);
      }
      const cellParagraphs = parseParagraphList2(cellChildren, baseLevel + 1);
      cells.push({
        col: cellMeta.col,
        row: cellMeta.row,
        colSpan: cellMeta.colSpan,
        rowSpan: cellMeta.rowSpan,
        paragraphs: cellParagraphs,
        width: cellMeta.width,
        height: cellMeta.height,
        cellMargin: cellMeta.margin,
        // HWP 셀 borderFillID(1-based DocInfo 인덱스) → IR 0-based. 0/미파싱이면 undefined(빌더 defaultCellBf 폴백).
        borderFillId: cellMeta.borderFillId !== void 0 && cellMeta.borderFillId >= 1 ? cellMeta.borderFillId - 1 : void 0
      });
    }
  }
  return { kind: "table", rowCount, colCount, cells };
}
function parseColumnDefControl(data) {
  const r = new ByteReader(data);
  let colCount = 1;
  if (r.remaining() >= 2) {
    const attr = r.readU16();
    const c = attr >>> 2 & 255;
    if (c >= 1) colCount = c;
  }
  return { kind: "columnDef", colCount };
}
function parseTableMeta(data) {
  const r = new ByteReader(data);
  if (r.remaining() < 8) return { rowCount: 0, colCount: 0 };
  r.readU32();
  const rowCount = r.readU16();
  const colCount = r.readU16();
  return { rowCount, colCount };
}
function parseCellMeta(data) {
  const r = new ByteReader(data);
  if (r.remaining() < 8) return { col: 0, row: 0, colSpan: 1, rowSpan: 1 };
  r.readU16();
  r.readU32();
  r.readU16();
  if (r.remaining() < 8) return { col: 0, row: 0, colSpan: 1, rowSpan: 1 };
  const col = r.readU16();
  const row = r.readU16();
  const colSpan = r.readU16();
  const rowSpan = r.readU16();
  let width;
  let height;
  let margin;
  if (r.remaining() >= 8) {
    width = r.readU32();
    height = r.readU32();
  }
  if (r.remaining() >= 8) {
    margin = { left: r.readU16(), right: r.readU16(), top: r.readU16(), bottom: r.readU16() };
  }
  let borderFillId;
  if (r.remaining() >= 2) {
    borderFillId = r.readU16();
  }
  return {
    col,
    row,
    colSpan: colSpan === 0 ? 1 : colSpan,
    rowSpan: rowSpan === 0 ? 1 : rowSpan,
    width,
    height,
    margin,
    borderFillId
  };
}
function parseGsoControl(ctrlHeader, children) {
  const baseLevel = ctrlHeader.level;
  for (const r of children) {
    if (r.tagId === HWPTAG_SHAPE_COMPONENT_PICTURE && r.level <= baseLevel + 3) {
      const binDataId = parsePictureBinDataId(r.data);
      if (binDataId !== void 0) {
        return { kind: "picture", binDataId };
      }
    }
  }
  for (const r of children) {
    if (r.level > baseLevel + 3) continue;
    switch (r.tagId) {
      case HWPTAG_SHAPE_COMPONENT_LINE:
        return parseLineShape(r.data);
      case HWPTAG_SHAPE_COMPONENT_RECTANGLE:
        return { kind: "shape", shapeType: "rectangle" };
      case HWPTAG_SHAPE_COMPONENT_ELLIPSE:
        return { kind: "shape", shapeType: "ellipse" };
      case HWPTAG_SHAPE_COMPONENT_ARC:
        return { kind: "shape", shapeType: "arc" };
      case HWPTAG_SHAPE_COMPONENT_POLYGON:
        return { kind: "shape", shapeType: "polygon" };
      case HWPTAG_SHAPE_COMPONENT_CURVE:
        return { kind: "shape", shapeType: "curve" };
    }
  }
  return { kind: "unknown", ctrlId: "gso " };
}
function parseLineShape(data) {
  if (data.byteLength < 16) return { kind: "shape", shapeType: "line" };
  const r = new ByteReader(data);
  const x1 = r.readI32();
  const y1 = r.readI32();
  const x2 = r.readI32();
  const y2 = r.readI32();
  return { kind: "shape", shapeType: "line", x1, y1, x2, y2 };
}
function parseEquationControl(ctrlHeader, children) {
  for (const r of children) {
    if (r.tagId === HWPTAG_EQEDIT) {
      return { kind: "equation", script: extractEquationScript(r.data) };
    }
  }
  return { kind: "equation", script: "" };
}
function extractEquationScript(data) {
  const r = new ByteReader(data);
  if (r.remaining() < 4) return "";
  r.readU32();
  if (r.remaining() < 11) return "";
  r.skip(11);
  if (r.remaining() < 2) return "";
  const strLen = r.readU16();
  if (strLen === 0 || strLen > 1e4) return "";
  const need = strLen * 2;
  if (r.remaining() < need) return "";
  try {
    return r.readUtf16(strLen);
  } catch {
    return "";
  }
}
function parsePictureBinDataId(data) {
  const OFFSET = 4 + 4 + 4 + 16 + 16 + 16 + 8 + 1 + 1 + 1;
  if (data.byteLength < OFFSET + 2) return void 0;
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  return view.getUint16(OFFSET, true);
}
function parseSectionDefControl(children) {
  for (const r of children) {
    if (r.tagId === HWPTAG_PAGE_DEF) {
      return { kind: "sectionDef", pageDef: parsePageDef(r.data) };
    }
  }
  return { kind: "unknown", ctrlId: "secd" };
}
function parsePageDef(data) {
  const r = new ByteReader(data);
  const u = (fallback) => r.remaining() >= 4 ? r.readU32() : fallback;
  const width = u(59528);
  const height = u(84188);
  const left = u(8504);
  const right = u(8504);
  const top = u(5669);
  const bottom = u(4252);
  const header = u(4252);
  const footer = u(4252);
  const gutter = u(0);
  const attr = u(0);
  return {
    width,
    height,
    left,
    right,
    top,
    bottom,
    header,
    footer,
    gutter,
    landscape: (attr & 1) !== 0
  };
}
function collectListHeaderParagraphs(ctrlHeader, children, parseParagraphList2) {
  const baseLevel = ctrlHeader.level;
  const lhIdx = children.findIndex(
    (r) => r.tagId === HWPTAG_LIST_HEADER && r.level === baseLevel + 1
  );
  if (lhIdx < 0) return [];
  const subtree = [];
  for (let j2 = lhIdx + 1; j2 < children.length; j2++) {
    if (children[j2].level <= baseLevel + 1) break;
    subtree.push(children[j2]);
  }
  return parseParagraphList2(subtree, baseLevel + 2);
}
function parseFieldControl(ctrlIdRaw, ctrlData) {
  const id = ctrlIdToString(ctrlIdRaw);
  if (ctrlData.byteLength < 7) return { kind: "field", ctrlId: id };
  const r = new ByteReader(ctrlData);
  r.readU32();
  r.readU8();
  const commandLen = r.readU16();
  let command;
  if (commandLen > 0 && r.remaining() >= commandLen * 2) {
    try {
      command = r.readUtf16(commandLen);
    } catch {
      command = void 0;
    }
  }
  return { kind: "field", ctrlId: id, command };
}

// src/lib/hwp/bodyText.ts
function parseBodyTextSection(data) {
  const records = readAllRecords(data);
  const topLevel = records.length > 0 ? records[0].level : 0;
  const paragraphs = parseParagraphList(records, topLevel);
  const pageDef = extractPageDef(paragraphs);
  return pageDef ? { paragraphs, pageDef } : { paragraphs };
}
function extractPageDef(paragraphs) {
  for (const p of paragraphs) {
    for (const c of p.controls) {
      if (c.kind === "sectionDef") return c.pageDef;
    }
  }
  return void 0;
}
function parseParagraphList(records, baseLevel) {
  const paragraphs = [];
  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    if (rec.tagId !== HWPTAG_PARA_HEADER) continue;
    if (rec.level !== baseLevel) continue;
    let end = i + 1;
    while (end < records.length && records[end].level > baseLevel) end++;
    const paraRecords = records.slice(i, end);
    paragraphs.push(buildParagraph(paraRecords));
    i = end - 1;
  }
  return paragraphs;
}
function buildParagraph(records) {
  const header = records[0];
  const headerInfo = parseParaHeader(header.data);
  const baseLevel = header.level;
  let text = "";
  let charShapeChanges = [];
  const controls = [];
  for (let j2 = 1; j2 < records.length; j2++) {
    const r = records[j2];
    if (r.level !== baseLevel + 1) continue;
    switch (r.tagId) {
      case HWPTAG_PARA_TEXT: {
        text = parseParaText(r.data);
        break;
      }
      case HWPTAG_PARA_CHAR_SHAPE: {
        charShapeChanges = parseParaCharShape(r.data);
        break;
      }
      case HWPTAG_CTRL_HEADER: {
        const ctrlChildren = [];
        for (let k2 = j2 + 1; k2 < records.length; k2++) {
          if (records[k2].level <= baseLevel + 1) break;
          ctrlChildren.push(records[k2]);
        }
        const ctrl = parseCtrlHeader(r, ctrlChildren, parseParagraphList);
        controls.push(ctrl);
        break;
      }
      default:
        break;
    }
  }
  return {
    paraShapeId: headerInfo.paraShapeId,
    styleId: headerInfo.styleId,
    text,
    runs: buildRuns(text, charShapeChanges),
    controls
  };
}
function parseParaHeader(data) {
  const r = new ByteReader(data);
  const nCharsRaw = r.remaining() >= 4 ? r.readU32() : 0;
  const charCount = nCharsRaw & 2147483647;
  const controlMask = r.remaining() >= 4 ? r.readU32() : 0;
  const paraShapeId = r.remaining() >= 2 ? r.readU16() : 0;
  const styleId = r.remaining() >= 1 ? r.readU8() : 0;
  return { charCount, controlMask, paraShapeId, styleId };
}
function parseParaText(data) {
  let text = "";
  let pos = 0;
  const end = data.byteLength;
  while (pos + 1 < end) {
    const ch = data[pos] | data[pos + 1] << 8;
    if (ch === 0) {
      pos += 2;
    } else if (ch === 9) {
      text += "	";
      pos += 16;
    } else if (ch === 10) {
      text += "\n";
      pos += 2;
    } else if (ch === 13) {
      break;
    } else if (isExtendedCtrl(ch)) {
      pos += 16;
    } else if (ch < 32) {
      switch (ch) {
        case 24:
          text += " ";
          break;
        case 25:
          text += " ";
          break;
        case 30:
          text += "-";
          break;
        case 31:
          text += " ";
          break;
        default:
          break;
      }
      pos += 2;
    } else {
      if (ch >= 55296 && ch <= 56319 && pos + 3 < end) {
        const low = data[pos + 2] | data[pos + 3] << 8;
        if (low >= 56320 && low <= 57343) {
          text += String.fromCharCode(ch, low);
          pos += 4;
          continue;
        }
      }
      text += String.fromCharCode(ch);
      pos += 2;
    }
  }
  return text;
}
function isExtendedCtrl(ch) {
  return ch >= 1 && ch <= 8 || ch === 11 || ch === 12 || ch >= 14 && ch <= 23;
}
function parseParaCharShape(data) {
  const r = new ByteReader(data);
  const out = [];
  while (r.remaining() >= 8) {
    const charPos = r.readU32();
    const charShapeId = r.readU32();
    out.push({ charPos, charShapeId });
  }
  return out;
}
function buildRuns(text, changes) {
  if (text.length === 0) return [];
  if (changes.length === 0) return [{ charShapeId: 0, text }];
  const sorted = [...changes].sort((a, b2) => a.charPos - b2.charPos);
  const runs = [];
  for (let i = 0; i < sorted.length; i++) {
    const start = sorted[i].charPos;
    const stop = i + 1 < sorted.length ? sorted[i + 1].charPos : text.length;
    if (stop > start) {
      runs.push({ charShapeId: sorted[i].charShapeId, text: text.slice(start, stop) });
    }
  }
  return runs;
}

// src/lib/hwp/binData.ts
var CFB_MAGIC = [208, 207, 17, 224, 161, 177, 26, 225];
function loadBinDataContent(cfb, refs) {
  const out = /* @__PURE__ */ new Map();
  for (const ref of refs) {
    if (ref.type === "link") continue;
    const isStorage = ref.type === "storage";
    const ext = ref.extension ?? (isStorage ? "OLE" : "dat");
    const idHex = ref.storageId.toString(16).padStart(4, "0");
    const candidates = [
      `/BinData/BIN${idHex.toUpperCase()}.${ext}`,
      `/BinData/BIN${idHex.toLowerCase()}.${ext}`
    ];
    let bytes = null;
    for (const path of candidates) {
      bytes = cfb.readBinData(path);
      if (bytes) break;
    }
    if (!bytes) continue;
    if (isStorage && bytes.byteLength > 12) {
      const headIsCfb = bytes[0] === CFB_MAGIC[0] && bytes[1] === CFB_MAGIC[1] && bytes[2] === CFB_MAGIC[2] && bytes[3] === CFB_MAGIC[3];
      const cfbAt4 = bytes[4] === CFB_MAGIC[0] && bytes[5] === CFB_MAGIC[1] && bytes[6] === CFB_MAGIC[2] && bytes[7] === CFB_MAGIC[3];
      if (!headIsCfb && cfbAt4) {
        bytes = bytes.subarray(4);
      }
    }
    out.set(ref.storageId, { data: new Uint8Array(bytes), extension: ext });
  }
  return out;
}
function detectImageMime(extension) {
  const ext = extension.toLowerCase();
  if (ext === "png") return "image/png";
  if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
  if (ext === "gif") return "image/gif";
  if (ext === "bmp") return "image/bmp";
  if (ext === "webp") return "image/webp";
  if (ext === "svg") return "image/svg+xml";
  return "application/octet-stream";
}
function imagePixelSize(data) {
  const d = data;
  const n = d.length;
  const u16be = (p) => d[p] << 8 | d[p + 1];
  const u32be = (p) => d[p] * 16777216 + (d[p + 1] << 16) + (d[p + 2] << 8) + d[p + 3];
  const u16le = (p) => d[p] | d[p + 1] << 8;
  const u32le = (p) => d[p] + (d[p + 1] << 8) + (d[p + 2] << 16) + d[p + 3] * 16777216;
  if (n >= 24 && d[0] === 137 && d[1] === 80 && d[2] === 78 && d[3] === 71) {
    const w = u32be(16);
    const h = u32be(20);
    return w > 0 && h > 0 ? { w, h } : null;
  }
  if (n >= 10 && d[0] === 71 && d[1] === 73 && d[2] === 70 && d[3] === 56) {
    const w = u16le(6);
    const h = u16le(8);
    return w > 0 && h > 0 ? { w, h } : null;
  }
  if (n >= 26 && d[0] === 66 && d[1] === 77) {
    const w = u32le(18);
    const h = Math.abs(u32le(22) | 0);
    return w > 0 && h > 0 ? { w, h } : null;
  }
  if (n >= 4 && d[0] === 255 && d[1] === 216) {
    let p = 2;
    while (p + 1 < n) {
      if (d[p] !== 255) {
        p++;
        continue;
      }
      let m2 = d[p + 1];
      let q2 = p + 1;
      while (q2 < n && d[q2] === 255) q2++;
      if (q2 >= n) return null;
      m2 = d[q2];
      p = q2 - 1;
      if (m2 === 216 || m2 === 217) {
        p += 2;
        continue;
      }
      if (m2 === 1 || m2 >= 208 && m2 <= 215) {
        p += 2;
        continue;
      }
      if (m2 === 218) return null;
      if (p + 4 >= n) return null;
      const len = u16be(p + 2);
      if (len < 2) return null;
      if (m2 >= 192 && m2 <= 207 && m2 !== 196 && m2 !== 200 && m2 !== 204) {
        if (p + 9 > n) return null;
        const h = u16be(p + 5);
        const w = u16be(p + 7);
        return w > 0 && h > 0 ? { w, h } : null;
      }
      const next = p + 2 + len;
      if (next <= p) return null;
      p = next;
    }
    return null;
  }
  return null;
}

// src/lib/hwp/hwpxBuilder.ts
var import_jszip3 = __toESM(require_jszip_min(), 1);
var NS_OASIS_CONTAINER2 = "urn:oasis:names:tc:opendocument:xmlns:container";
var NS_OASIS_MANIFEST2 = "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0";
var LANG_NAMES = ["HANGUL", "LATIN", "HANJA", "JAPANESE", "OTHER", "SYMBOL", "USER"];
async function buildHwpxFromDocument(doc, options) {
  const zip = new import_jszip3.default();
  zip.file("mimetype", MIMETYPE, { compression: "STORE" });
  const binEntries = [];
  for (const [storageId, { data, extension }] of doc.binData) {
    const ext = extension;
    binEntries.push({
      id: `image${storageId}`,
      href: `BinData/image${storageId}.${ext}`,
      mediaType: detectImageMime(ext),
      data
    });
  }
  zip.file(
    "META-INF/container.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<container xmlns="${NS_OASIS_CONTAINER2}"><rootfiles><rootfile full-path="Contents/content.hpf" media-type="application/hwpml-package+xml"/></rootfiles></container>`
  );
  zip.file(
    "META-INF/manifest.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes" ?><odf:manifest xmlns:odf="${NS_OASIS_MANIFEST2}"/>`
  );
  const RDF_PKG = "http://www.hancom.co.kr/hwpml/2016/meta/pkg#";
  const rdfParts = [
    `<rdf:Description rdf:about=""><ns0:hasPart xmlns:ns0="${RDF_PKG}" rdf:resource="Contents/header.xml"/></rdf:Description>`,
    `<rdf:Description rdf:about="Contents/header.xml"><rdf:type rdf:resource="${RDF_PKG}HeaderFile"/></rdf:Description>`
  ];
  for (let i = 0; i < doc.sections.length; i++) {
    rdfParts.push(
      `<rdf:Description rdf:about=""><ns0:hasPart xmlns:ns0="${RDF_PKG}" rdf:resource="Contents/section${i}.xml"/></rdf:Description>`,
      `<rdf:Description rdf:about="Contents/section${i}.xml"><rdf:type rdf:resource="${RDF_PKG}SectionFile"/></rdf:Description>`
    );
  }
  rdfParts.push(`<rdf:Description rdf:about=""><rdf:type rdf:resource="${RDF_PKG}Document"/></rdf:Description>`);
  zip.file(
    "META-INF/container.rdf",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes" ?><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">` + rdfParts.join("") + `</rdf:RDF>`
  );
  const v2 = doc.header.version;
  zip.file(
    "version.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<hv:HCFVersion xmlns:hv="http://www.hancom.co.kr/hwpml/2011/version" tagetApplication="WORDPROCESSOR" major="${v2.major}" minor="${v2.minor}" micro="${v2.build}" buildNumber="${v2.revision}" os="1" application="hwp-convert"/>`
  );
  zip.file(
    "settings.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<ha:HWPApplicationSetting xmlns:ha="http://www.hancom.co.kr/hwpml/2011/app"><ha:CaretPosition ha:listIDRef="0" ha:paraIDRef="0" ha:pos="0"/></ha:HWPApplicationSetting>`
  );
  const opfManifest = [
    `<opf:item id="header" href="Contents/header.xml" media-type="application/xml"/>`
  ];
  for (const e of binEntries) {
    opfManifest.push(
      `<opf:item id="${e.id}" href="${e.href}" media-type="${e.mediaType}" isEmbeded="1"/>`
    );
  }
  for (let i = 0; i < doc.sections.length; i++) {
    opfManifest.push(
      `<opf:item id="section${i}" href="Contents/section${i}.xml" media-type="application/xml"/>`
    );
  }
  opfManifest.push(
    `<opf:item id="settings" href="settings.xml" media-type="application/xml"/>`
  );
  const spineRefs = `<opf:itemref idref="header" linear="yes"/>` + doc.sections.map((_2, i) => `<opf:itemref idref="section${i}" linear="yes"/>`).join("");
  zip.file(
    "Contents/content.hpf",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<opf:package ${OWPML_NS} version="" unique-identifier="" id=""><opf:metadata><dc:title>${escapeXml(options?.title ?? "")}</dc:title><dc:creator>${escapeXml(options?.creator ?? "")}</dc:creator><dc:format>application/hwpml-package+xml</dc:format></opf:metadata><opf:manifest>` + opfManifest.join("") + `</opf:manifest><opf:spine>` + spineRefs + `</opf:spine></opf:package>`
  );
  zip.file("Contents/header.xml", buildHeaderXmlFromDocInfo(doc.docInfo, doc.sections.length));
  layoutCharShapes = doc.docInfo.charShapes ?? [];
  layoutParaShapes = doc.docInfo.paraShapes ?? [];
  for (let i = 0; i < doc.sections.length; i++) {
    zip.file(`Contents/section${i}.xml`, buildSectionXml(doc.sections[i], binEntries, i));
  }
  for (const e of binEntries) {
    const lower = e.href.toLowerCase();
    const precompressed = /\.(jpe?g|png|gif)$/.test(lower);
    zip.file(e.href, e.data, precompressed ? { compression: "STORE" } : void 0);
  }
  zip.file("Preview/PrvText.txt", buildPrvText(doc));
  return await zip.generateAsync({ type: "uint8array", compression: "DEFLATE" });
}
function buildPrvText(doc) {
  const lines = [];
  for (const section of doc.sections) {
    for (const para of section.paragraphs) {
      collectPrvLines(para, lines);
    }
  }
  return lines.join("\r\n").slice(0, 2e3);
}
function collectPrvLines(para, lines) {
  if (para.text.length > 0) {
    lines.push(para.text);
  }
  for (const ctrl of para.controls) {
    if (ctrl.kind === "table") {
      const rows = Array.from({ length: ctrl.rowCount }, () => []);
      for (const cell of ctrl.cells) {
        if (cell.row >= 0 && cell.row < ctrl.rowCount) rows[cell.row].push(cell);
      }
      for (const row of rows) {
        row.sort((a, b2) => a.col - b2.col);
        const cellTexts = row.map((cell) => {
          const inner = cell.paragraphs.map((q2) => {
            const buf = [];
            collectPrvLines(q2, buf);
            return buf.join(" ");
          }).join(" ");
          return `<${inner} >`;
        });
        if (cellTexts.length > 0) lines.push(cellTexts.join(""));
      }
    } else if (ctrl.kind === "header" || ctrl.kind === "footer" || ctrl.kind === "footnote") {
      for (const q2 of ctrl.paragraphs) collectPrvLines(q2, lines);
    } else if (ctrl.kind === "equation" && ctrl.script.length > 0) {
      lines.push(ctrl.script);
    }
  }
}
function buildHeaderXmlFromDocInfo(docInfo, secCnt) {
  const fontfacesXml = buildFontfacesXml(docInfo.fontFaces);
  const borderFillsXml = buildBorderFillsXml(docInfo.borderFills);
  const charPropsXml = buildCharPropertiesXml(docInfo.charShapes);
  const tabDefsXml = buildTabDefsXml(docInfo.tabDefs);
  const numberingsXml = buildNumberingsXml(docInfo.numberings);
  const bulletsXml = buildBulletsXml(docInfo.bullets);
  const paraPropsXml = buildParaPropertiesXml(docInfo.paraShapes);
  const stylesXml = buildStylesXml(docInfo.styles);
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<hh:head ${OWPML_NS} version="1.5" secCnt="${Math.max(1, secCnt)}"><hh:beginNum page="1" footnote="1" endnote="1" pic="1" tbl="1" equation="1"/><hh:refList>` + fontfacesXml + borderFillsXml + charPropsXml + tabDefsXml + numberingsXml + bulletsXml + paraPropsXml + stylesXml + `</hh:refList>` + // 섹션별 secPr.memoShapeIDRef(1..secCnt) 가 참조하는 메모 모양 정의(실제 메모 없어도 한컴이 섹션마다 1개 보유).
  buildMemoPropertiesXml(Math.max(1, secCnt)) + // 한컴 정상 출력 모사: 레이아웃 엔진 버전(HWP201X) + 문서 옵션. trackchageConfig 는 flags 가
  // 파일마다 달라(하드코딩 위험) 제외. 이 블록은 한글 레이아웃 호환 모드를 정합시킨다.
  `<hh:compatibleDocument targetProgram="HWP201X"><hh:layoutCompatibility/></hh:compatibleDocument><hh:docOption><hh:linkinfo path="" pageInherit="0" footnoteInherit="0"/></hh:docOption></hh:head>`;
}
var RESERVED_BORDERFILLS = 2;
function buildMemoPropertiesXml(n) {
  const items = [];
  for (let i = 1; i <= n; i++) {
    items.push(
      `<hh:memoPr id="${i}" width="15590" lineWidth="1" lineType="SOLID" lineColor="#000000" fillColor="#CCFF99" activeColor="#FFFF99" memoType="NOMAL"/>`
    );
  }
  return `<hh:memoProperties itemCnt="${n}">${items.join("")}</hh:memoProperties>`;
}
function buildBorderFillsXml(borderFills) {
  const none = {
    attr: 0,
    borders: [
      { lineType: 0, widthIndex: 0, color: 0 },
      { lineType: 0, widthIndex: 0, color: 0 },
      { lineType: 0, widthIndex: 0, color: 0 },
      { lineType: 0, widthIndex: 0, color: 0 }
    ],
    diagonal: { diagonalType: 0, widthIndex: 0, color: 0 }
  };
  const items = [
    buildSingleBorderFillXml(1, none),
    // id 1: NONE
    buildSingleBorderFillXml(2, void 0)
    // id 2: SOLID(undefined 합성)
  ];
  borderFills.forEach((bf, k2) => items.push(buildSingleBorderFillXml(k2 + RESERVED_BORDERFILLS + 1, bf)));
  const cnt = RESERVED_BORDERFILLS + borderFills.length;
  return `<hh:borderFills itemCnt="${cnt}">${items.join("")}</hh:borderFills>`;
}
var BORDER_WIDTH_MM = [
  "0.1",
  "0.12",
  "0.15",
  "0.2",
  "0.25",
  "0.3",
  "0.4",
  "0.5",
  "0.6",
  "0.7",
  "1.0",
  "1.5",
  "2.0",
  "3.0",
  "4.0",
  "5.0"
];
var BORDER_LINE_TYPE_NAMES = [
  "NONE",
  "SOLID",
  "DASH",
  "DOT",
  "DASH_DOT",
  "DASH_DOT_DOT",
  "LONG_DASH",
  "CIRCLE",
  "DOUBLE",
  "THIN_THICK_DOUBLE",
  "THICK_THIN_DOUBLE",
  "THIN_THICK_THIN_TRIPLE",
  "WAVE",
  "DOUBLE_WAVE",
  "THICK_3D",
  "THICK_3D_REVERSE",
  "THIN_3D",
  "THIN_3D_REVERSE"
];
function lineTypeName(idx) {
  return BORDER_LINE_TYPE_NAMES[idx] ?? "SOLID";
}
function widthMm(idx) {
  return (BORDER_WIDTH_MM[idx] ?? "0.1") + " mm";
}
function buildBorderXml(tagName2, line) {
  if (!line) {
    return `<hh:${tagName2} type="SOLID" width="0.1 mm" color="#000000"/>`;
  }
  return `<hh:${tagName2} type="${lineTypeName(line.lineType)}" width="${widthMm(line.widthIndex)}" color="${colorBgrToHex(line.color)}"/>`;
}
function buildSingleBorderFillXml(id, bf) {
  const left = buildBorderXml("leftBorder", bf?.borders?.[0]);
  const right = buildBorderXml("rightBorder", bf?.borders?.[1]);
  const top = buildBorderXml("topBorder", bf?.borders?.[2]);
  const bottom = buildBorderXml("bottomBorder", bf?.borders?.[3]);
  const attr = bf?.attr ?? 0;
  const slashKind = attr >>> 2 & 7;
  const backSlashKind = attr >>> 5 & 7;
  const diagWidth = widthMm(bf?.diagonal?.widthIndex ?? 0);
  const diagColor = colorBgrToHex(bf?.diagonal?.color ?? 0);
  const slashType = slashKind !== 0 ? "SOLID" : "NONE";
  const backSlashType = backSlashKind !== 0 ? "SOLID" : "NONE";
  const hasDiag = slashKind !== 0 || backSlashKind !== 0;
  const diagonalEl = `<hh:diagonal type="${hasDiag ? "SOLID" : "NONE"}" width="${diagWidth}" color="${diagColor}"/>`;
  const fillEl = bf?.fill ? `<hc:fillBrush><hc:winBrush faceColor="${colorBgrToHex(bf.fill.backgroundColor)}" hatchColor="${colorBgrToHex(bf.fill.patternColor)}" hatchStyle="${bf.fill.patternType < 0 ? "NONE" : "HORIZONTAL"}" alpha="0"/></hc:fillBrush>` : "";
  return `<hh:borderFill id="${id}" threeD="${(attr & 1) !== 0 ? 1 : 0}" shadow="${(attr & 2) !== 0 ? 1 : 0}" centerLine="NONE" breakCellSeparateLine="0"><hh:slash type="${slashType}" Crooked="0" isCounter="0"/><hh:backSlash type="${backSlashType}" Crooked="0" isCounter="0"/>` + left + right + top + bottom + diagonalEl + fillEl + `</hh:borderFill>`;
}
function buildTabDefsXml(tabDefs) {
  const cnt = Math.max(1, tabDefs.length);
  const items = [];
  for (let i = 0; i < cnt; i++) {
    const td = tabDefs[i];
    const al = td?.autoTabLeft ?? true ? 1 : 0;
    const ar = td?.autoTabRight ?? true ? 1 : 0;
    items.push(
      `<hh:tabPr id="${i}" autoTabLeft="${al}" autoTabRight="${ar}"><hh:items itemCnt="0"/></hh:tabPr>`
    );
  }
  return `<hh:tabProperties itemCnt="${cnt}">${items.join("")}</hh:tabProperties>`;
}
function buildNumberingsXml(numberings) {
  if (numberings.length === 0) {
    return `<hh:numberings itemCnt="1"><hh:numbering id="0" start="1">` + Array.from({ length: 7 }).map(
      (_2, level) => `<hh:paraHead level="${level + 1}" start="1" numFormat="^${level + 1}." textOffsetType="PERCENT" textOffset="50" numberingChar="false" charPrIDRef="0"><hh:autoNumberFormat type="DIGIT" userChar="" prefixChar="" suffixChar="."/></hh:paraHead>`
    ).join("") + `</hh:numbering></hh:numberings>`;
  }
  const items = numberings.map(
    (n, idx) => `<hh:numbering id="${idx}" start="${n.startNumber}">` + n.levelFormats.map(
      (fmt, level) => `<hh:paraHead level="${level + 1}" start="1" numFormat="${escapeXml(fmt || "^" + (level + 1) + ".")}" textOffsetType="PERCENT" textOffset="50" numberingChar="false" charPrIDRef="0"><hh:autoNumberFormat type="DIGIT" userChar="" prefixChar="" suffixChar="."/></hh:paraHead>`
    ).join("") + `</hh:numbering>`
  ).join("");
  return `<hh:numberings itemCnt="${numberings.length}">${items}</hh:numberings>`;
}
function buildBulletsXml(bullets) {
  if (bullets.length === 0) {
    return `<hh:bullets itemCnt="1"><hh:bullet id="0" char="\u25CF" imageBullet="0" checkedChar="0"><hh:img bright="0" contrast="0" effect="REAL_PIC" binaryItemIDRef="0"/></hh:bullet></hh:bullets>`;
  }
  const items = bullets.map(
    (b2, idx) => `<hh:bullet id="${idx}" char="${escapeXml(b2.bulletChar)}" imageBullet="0" checkedChar="0"><hh:img bright="0" contrast="0" effect="REAL_PIC" binaryItemIDRef="0"/></hh:bullet>`
  ).join("");
  return `<hh:bullets itemCnt="${bullets.length}">${items}</hh:bullets>`;
}
function buildFontfacesXml(fontFaces) {
  const groups = [];
  for (let li = 0; li < 7; li++) {
    const fonts = fontFaces[li] ?? [];
    const lang = LANG_NAMES[li];
    const list = fonts.length > 0 ? fonts.map((f2, idx) => buildFontXml(idx, f2)).join("") : `<hh:font id="0" face="\uBC14\uD0D5" type="TTF" isEmbedded="0"/>`;
    const cnt = fonts.length > 0 ? fonts.length : 1;
    groups.push(
      `<hh:fontface lang="${lang}" fontCnt="${cnt}">${list}</hh:fontface>`
    );
  }
  return `<hh:fontfaces itemCnt="${groups.length}">${groups.join("")}</hh:fontfaces>`;
}
function buildFontXml(id, f2) {
  const subAttrs = f2.substituteName ? ` type="UNKNOWN" face="${escapeXml(f2.substituteName)}"` : "";
  const sub = f2.substituteName ? `<hh:substFont${subAttrs}/>` : "";
  return `<hh:font id="${id}" face="${escapeXml(f2.name)}" type="TTF" isEmbedded="0">${sub}</hh:font>`;
}
function buildCharPropertiesXml(charShapes) {
  if (charShapes.length === 0) {
    return `<hh:charProperties itemCnt="1"><hh:charPr id="0" height="1000" textColor="#000000" shadeColor="none" useFontSpace="0" useKerning="0" symMark="NONE" borderFillIDRef="1">` + defaultFontGroupXml() + `<hh:underline type="NONE" shape="SOLID" color="#000000"/><hh:strikeout shape="NONE" color="#000000"/><hh:outline type="NONE"/><hh:shadow type="NONE" color="#C0C0C0" offsetX="10" offsetY="10"/></hh:charPr></hh:charProperties>`;
  }
  const items = charShapes.map((cs, idx) => buildCharPrXml(idx, cs)).join("");
  return `<hh:charProperties itemCnt="${charShapes.length}">${items}</hh:charProperties>`;
}
function buildCharPrXml(id, cs) {
  const ids = cs.faceNameIds;
  const fontRef = `<hh:fontRef hangul="${ids.hangul}" latin="${ids.latin}" hanja="${ids.hanja}" japanese="${ids.japanese}" other="${ids.other}" symbol="${ids.symbol}" user="${ids.user}"/>`;
  const ratio = `<hh:ratio hangul="100" latin="100" hanja="100" japanese="100" other="100" symbol="100" user="100"/>`;
  const ls = cs.letterSpacing ?? 0;
  const spacing = `<hh:spacing hangul="${ls}" latin="${ls}" hanja="${ls}" japanese="${ls}" other="${ls}" symbol="${ls}" user="${ls}"/>`;
  const relSz = `<hh:relSz hangul="100" latin="100" hanja="100" japanese="100" other="100" symbol="100" user="100"/>`;
  const offset = `<hh:offset hangul="0" latin="0" hanja="0" japanese="0" other="0" symbol="0" user="0"/>`;
  const italic = cs.italic ? `<hh:italic/>` : "";
  const bold = cs.bold ? `<hh:bold/>` : "";
  const underline = `<hh:underline type="${cs.underline ? "BOTTOM" : "NONE"}" shape="SOLID" color="${colorBgrToHex(cs.underlineColor)}"/>`;
  const strikeout = `<hh:strikeout shape="${cs.strikeout ? "SOLID" : "NONE"}" color="${colorBgrToHex(cs.textColor)}"/>`;
  const outlineShadow = `<hh:outline type="NONE"/><hh:shadow type="NONE" color="#C0C0C0" offsetX="10" offsetY="10"/>`;
  const textColor = colorBgrToHex(cs.textColor);
  const shadeColor = cs.shadeColor === 16777215 || cs.shadeColor === 0 ? "none" : colorBgrToHex(cs.shadeColor);
  const charBfRef = cs.borderFillId !== void 0 ? cs.borderFillId + RESERVED_BORDERFILLS + 1 : 1;
  return `<hh:charPr id="${id}" height="${cs.baseSize}" textColor="${textColor}" shadeColor="${shadeColor}" useFontSpace="0" useKerning="0" symMark="NONE" borderFillIDRef="${charBfRef}">` + fontRef + ratio + spacing + relSz + offset + italic + bold + underline + strikeout + outlineShadow + `</hh:charPr>`;
}
function defaultFontGroupXml() {
  return `<hh:fontRef hangul="0" latin="0" hanja="0" japanese="0" other="0" symbol="0" user="0"/><hh:ratio hangul="100" latin="100" hanja="100" japanese="100" other="100" symbol="100" user="100"/><hh:spacing hangul="0" latin="0" hanja="0" japanese="0" other="0" symbol="0" user="0"/><hh:relSz hangul="100" latin="100" hanja="100" japanese="100" other="100" symbol="100" user="100"/><hh:offset hangul="0" latin="0" hanja="0" japanese="0" other="0" symbol="0" user="0"/>`;
}
function buildParaPropertiesXml(paraShapes) {
  if (paraShapes.length === 0) {
    return `<hh:paraProperties itemCnt="1"><hh:paraPr id="0" tabPrIDRef="0" condense="0" fontLineHeight="0" snapToGrid="0" suppressLineNumbers="0" checked="0"><hh:align horizontal="JUSTIFY" vertical="BASELINE"/><hh:heading type="NONE" idRef="0" level="0"/><hh:breakSetting breakLatinWord="KEEP_WORD" breakNonLatinWord="KEEP_WORD" widowOrphan="0" keepWithNext="0" keepLines="0" pageBreakBefore="0" lineWrap="BREAK"/><hh:autoSpacing eAsianEng="0" eAsianNum="0"/><hh:margin><hh:intent value="0"/><hh:left value="0"/><hh:right value="0"/><hh:prev value="0"/><hh:next value="0"/></hh:margin><hh:lineSpacing type="PERCENT" value="160" unit="HWPUNIT"/></hh:paraPr></hh:paraProperties>`;
  }
  const items = paraShapes.map((ps, idx) => buildParaPrXml(idx, ps)).join("");
  return `<hh:paraProperties itemCnt="${paraShapes.length}">${items}</hh:paraProperties>`;
}
function buildParaPrXml(id, ps) {
  const align = alignToOwpml(ps.alignment);
  const emittedBf = ps.borderFillIDRef !== void 0 ? ps.borderFillIDRef + RESERVED_BORDERFILLS + 1 : void 0;
  const bfRef = emittedBf !== void 0 ? ` borderFillIDRef="${emittedBf}"` : "";
  const borderChild = emittedBf !== void 0 ? `<hh:border borderFillIDRef="${emittedBf}" offsetLeft="0" offsetRight="0" offsetTop="0" offsetBottom="0" connect="0" ignoreMargin="0"/>` : "";
  return `<hh:paraPr id="${id}" tabPrIDRef="0" condense="0" fontLineHeight="0" snapToGrid="0" suppressLineNumbers="0" checked="0"${bfRef}><hh:align horizontal="${align}" vertical="BASELINE"/><hh:heading type="NONE" idRef="0" level="0"/><hh:breakSetting breakLatinWord="KEEP_WORD" breakNonLatinWord="KEEP_WORD" widowOrphan="0" keepWithNext="0" keepLines="0" pageBreakBefore="0" lineWrap="BREAK"/><hh:autoSpacing eAsianEng="0" eAsianNum="0"/><hh:margin><hh:intent value="${ps.indent}"/><hh:left value="${ps.leftMargin}"/><hh:right value="${ps.rightMargin}"/><hh:prev value="${ps.prevSpacing}"/><hh:next value="${ps.nextSpacing}"/></hh:margin><hh:lineSpacing type="PERCENT" value="${Math.max(0, ps.lineSpacing)}" unit="HWPUNIT"/>` + borderChild + `</hh:paraPr>`;
}
function buildStylesXml(styles) {
  if (styles.length === 0) {
    return `<hh:styles itemCnt="1"><hh:style id="0" type="PARA" name="\uBC14\uD0D5\uAE00" engName="Normal" paraPrIDRef="0" charPrIDRef="0" nextStyleIDRef="0" langID="1042" lockForm="0"/></hh:styles>`;
  }
  const items = styles.map(
    (s, idx) => `<hh:style id="${idx}" type="PARA" name="${escapeXml(s.name || "Style" + idx)}" engName="${escapeXml(s.engName ?? "")}" paraPrIDRef="${s.paraShapeId}" charPrIDRef="${s.charShapeId}" nextStyleIDRef="${idx}" langID="1042" lockForm="0"/>`
  ).join("");
  return `<hh:styles itemCnt="${styles.length}">${items}</hh:styles>`;
}
function colorBgrToHex(color) {
  const r = color & 255;
  const g = color >>> 8 & 255;
  const b2 = color >>> 16 & 255;
  return "#" + [r, g, b2].map((n) => n.toString(16).padStart(2, "0").toUpperCase()).join("");
}
function alignToOwpml(a) {
  switch (a) {
    case "left":
      return "LEFT";
    case "right":
      return "RIGHT";
    case "center":
      return "CENTER";
    case "justify":
      return "JUSTIFY";
    case "distribute":
      return "DISTRIBUTE";
    case "distributeSpace":
      return "DISTRIBUTE_SPACE";
    default:
      return "JUSTIFY";
  }
}
function buildSectionXml(section, binEntries, secIndex = 0) {
  const prevBodyWidth = currentBodyWidth;
  currentBodyWidth = bodyWidthOf(section.pageDef);
  try {
    return buildSectionXmlInner(section, binEntries, secIndex);
  } finally {
    currentBodyWidth = prevBodyWidth;
  }
}
function buildSectionXmlInner(section, binEntries, secIndex = 0) {
  let coldRemoved = false;
  const paragraphs = section.paragraphs.map((p) => {
    if (coldRemoved) return p;
    const ci = p.controls.findIndex((c) => c.kind === "columnDef");
    if (ci < 0) return p;
    coldRemoved = true;
    return { ...p, controls: p.controls.filter((_2, idx) => idx !== ci) };
  });
  const parts = [];
  const secRefs = { outline: secIndex + 1, memo: secIndex + 1 };
  parts.push(
    `<hp:p id="${makeParaId()}" paraPrIDRef="0" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0"><hp:run charPrIDRef="0">${buildSecPr(section.pageDef, secRefs)}</hp:run><hp:run charPrIDRef="0"><hp:t/></hp:run>` + DEFAULT_LINESEG + `</hp:p>`
  );
  for (const p of paragraphs) {
    parts.push(buildParagraphXml(p, binEntries));
    for (const ctrl of p.controls) {
      if (ctrl.kind === "header" || ctrl.kind === "footer" || ctrl.kind === "footnote") {
        for (const subPara of ctrl.paragraphs) {
          parts.push(buildParagraphXml(subPara, binEntries));
        }
      }
    }
  }
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<hs:sec ${OWPML_NS}>` + parts.join("") + `</hs:sec>`;
}
var layoutCharShapes = [];
var layoutParaShapes = [];
function buildLineSeg(boxHeight, textHeight, lineSpacing = 160) {
  const h = Math.max(1e3, Math.round(boxHeight));
  const baseline = Math.round(h * 0.85);
  const textH = Math.max(1e3, Math.round(textHeight));
  const spacing = Math.round(textH * Math.max(0, lineSpacing / 100 - 1));
  return `<hp:linesegarray><hp:lineseg textpos="0" vertpos="0" vertsize="${h}" textheight="${h}" baseline="${baseline}" spacing="${spacing}" horzpos="0" horzsize="${currentBodyWidth}" flags="393216"/></hp:linesegarray>`;
}
var TIGHT_ANCHOR_HEIGHT = 120;
function buildTightAnchorLineSeg() {
  const h = TIGHT_ANCHOR_HEIGHT;
  return `<hp:linesegarray><hp:lineseg textpos="0" vertpos="0" vertsize="${h}" textheight="${h}" baseline="${Math.round(
    h * 0.85
  )}" spacing="0" horzpos="0" horzsize="${currentBodyWidth}" flags="393216"/></hp:linesegarray>`;
}
function textBaseSize(p) {
  return p.runs.reduce(
    (m2, r) => Math.max(m2, layoutCharShapes[r.charShapeId]?.baseSize ?? 1e3),
    1e3
  );
}
function paragraphPicSizes(p, binEntries) {
  const out = [];
  for (const ctrl of p.controls) {
    if (ctrl.kind !== "picture") continue;
    const entry = findPictureEntry(binEntries, ctrl);
    if (!entry) continue;
    out.push(resolvePicSize(entry, ctrl, currentBodyWidth));
  }
  return out;
}
function paragraphBoxHeight(p, binEntries) {
  return paragraphPicSizes(p, binEntries).reduce(
    (m2, s) => Math.max(m2, s.h),
    textBaseSize(p)
  );
}
function isWideChar(cp) {
  return cp >= 4352 && cp <= 4447 || // 한글 자모
  cp >= 11904 && cp <= 42191 || // CJK 부수~한중일 통합~Yi
  cp >= 44032 && cp <= 55203 || // 한글 음절
  cp >= 63744 && cp <= 64255 || // CJK 호환 한자
  cp >= 65280 && cp <= 65376 || // 전각 영숫자/기호
  cp >= 65504 && cp <= 65510;
}
function fitsOneLine(p, extraWidth = 0) {
  const limit = currentBodyWidth * 0.95;
  let w = extraWidth;
  const measure = (text, charShapeId) => {
    const base = layoutCharShapes[charShapeId]?.baseSize ?? 1e3;
    for (const ch of text) {
      w += isWideChar(ch.codePointAt(0) ?? 0) ? base : base * 0.5;
      if (w > limit) return false;
    }
    return true;
  };
  if (p.runs.length > 0) {
    for (const r of p.runs) if (!measure(r.text, r.charShapeId)) return false;
  } else {
    if (!measure(p.text, 0)) return false;
  }
  return w <= limit;
}
function buildParagraphXml(p, binEntries) {
  const parts = [];
  if (p.runs.length > 0) {
    for (const run of p.runs) {
      parts.push(buildRunXml(run));
    }
  } else if (p.text.length > 0) {
    parts.push(buildRunXml({ charShapeId: 0, text: p.text }));
  }
  for (const ctrl of p.controls) {
    const xml = buildControlXml(ctrl, binEntries);
    if (xml) parts.push(xml);
  }
  if (parts.length === 0) {
    parts.push(`<hp:run charPrIDRef="0"/>`);
  }
  const lineSpacing = layoutParaShapes[p.paraShapeId]?.lineSpacing ?? 160;
  const isTableOnlyAnchor = p.tightTableAnchor === true && p.runs.length === 0 && p.text.length === 0 && p.controls.length > 0 && p.controls.every((c) => c.kind === "table");
  const picSizes = paragraphPicSizes(p, binEntries);
  const hasText = p.runs.length > 0 || p.text.length > 0;
  const emitLineSeg = picSizes.length === 0 ? fitsOneLine(p) : hasText ? fitsOneLine(p, picSizes.reduce((s, x2) => s + x2.w, 0)) : true;
  const lineSeg = !emitLineSeg ? "" : isTableOnlyAnchor ? buildTightAnchorLineSeg() : buildLineSeg(paragraphBoxHeight(p, binEntries), textBaseSize(p), lineSpacing);
  return `<hp:p id="${makeParaId()}" paraPrIDRef="${p.paraShapeId}" styleIDRef="${p.styleId}" pageBreak="0" columnBreak="0" merged="0">` + parts.join("") + // 1줄에 들어가는 문단만 단일 lineseg(채우기/테두리 박스 높이 보존). 한 줄 초과 가능 문단은
  // linesegarray 생략 → 한글이 줄바꿈 재계산(긴 산문·긴 배경색 문단의 검은 띠 겹침 방지).
  lineSeg + `</hp:p>`;
}
function buildRunXml(run) {
  return `<hp:run charPrIDRef="${run.charShapeId}"><hp:t>${escapeXml(run.text)}</hp:t></hp:run>`;
}
var PIC_WIDTH = 4e4;
var PIC_HEIGHT = 3e4;
function findPictureEntry(binEntries, ctrl) {
  return binEntries.find((b2) => b2.id === `image${ctrl.binDataId}`);
}
function resolvePicSize(entry, ctrl, maxWidth) {
  const MAX_W = maxWidth;
  const MAX_H = 7e4;
  const nat = imagePixelSize(entry.data);
  const ratio = nat && nat.w > 0 ? nat.h / nat.w : PIC_HEIGHT / PIC_WIDTH;
  const resolve = (d) => Math.round(d.pct ? d.v / 100 * MAX_W : d.v * 75);
  let w = ctrl?.width ? resolve(ctrl.width) : void 0;
  let h = ctrl?.height ? resolve(ctrl.height) : void 0;
  if (w !== void 0 && h === void 0) h = Math.round(w * ratio);
  else if (h !== void 0 && w === void 0) w = Math.round(h / (ratio || 1));
  if (w === void 0 && h === void 0) {
    if (nat && nat.w > 0 && nat.h > 0) {
      const ow = nat.w * 75;
      const oh = nat.h * 75;
      const s = Math.min(1, MAX_W / ow, MAX_H / oh);
      w = Math.round(ow * s);
      h = Math.round(oh * s);
    } else {
      w = PIC_WIDTH;
      h = PIC_HEIGHT;
    }
  }
  return { w: Math.max(1, w ?? PIC_WIDTH), h: Math.max(1, h ?? PIC_HEIGHT) };
}
function buildPicXml(entry, ctrl) {
  const { w, h } = resolvePicSize(entry, ctrl, currentBodyWidth);
  return `<hp:pic id="${makeParaId()}" zOrder="0" numberingType="PICTURE" textWrap="TOP_AND_BOTTOM" textFlow="BOTH_SIDES" lock="0" dropcapstyle="None" href="" groupLevel="0" instid="${makeParaId()}" reverse="0"><hp:offset x="0" y="0"/><hp:orgSz width="${w}" height="${h}"/><hp:curSz width="${w}" height="${h}"/><hp:flip horizontal="0" vertical="0"/><hp:rotationInfo angle="0" centerX="${w / 2 | 0}" centerY="${h / 2 | 0}" rotateimage="1"/><hp:renderingInfo><hc:transMatrix e1="1" e2="0" e3="0" e4="0" e5="1" e6="0"/><hc:scaMatrix e1="1" e2="0" e3="0" e4="0" e5="1" e6="0"/><hc:rotMatrix e1="1" e2="0" e3="0" e4="0" e5="1" e6="0"/></hp:renderingInfo><hc:img binaryItemIDRef="${entry.id}" bright="0" contrast="0" effect="REAL_PIC" alpha="0"/><hp:imgRect><hc:pt0 x="0" y="0"/><hc:pt1 x="${w}" y="0"/><hc:pt2 x="${w}" y="${h}"/><hc:pt3 x="0" y="${h}"/></hp:imgRect><hp:imgClip left="0" right="${w}" top="0" bottom="${h}"/><hp:inMargin left="0" right="0" top="0" bottom="0"/><hp:imgDim dimwidth="${w}" dimheight="${h}"/><hp:effects/><hp:sz width="${w}" widthRelTo="ABSOLUTE" height="${h}" heightRelTo="ABSOLUTE" protect="0"/><hp:pos treatAsChar="1" affectLSpacing="0" flowWithText="1" allowOverlap="0" holdAnchorAndSO="0" vertRelTo="PARA" horzRelTo="PARA" vertAlign="TOP" horzAlign="LEFT" vertOffset="0" horzOffset="0"/><hp:outMargin left="0" right="0" top="0" bottom="0"/></hp:pic>`;
}
function buildControlXml(ctrl, binEntries) {
  switch (ctrl.kind) {
    case "table":
      return `<hp:run charPrIDRef="0">${buildTableXml(ctrl, binEntries)}</hp:run>`;
    case "picture": {
      const entry = findPictureEntry(binEntries, ctrl);
      if (!entry) return "";
      return `<hp:run charPrIDRef="0">${buildPicXml(entry, ctrl)}<hp:t/></hp:run>`;
    }
    case "shape": {
      const tag = ctrl.shapeType === "line" ? "line" : ctrl.shapeType === "rectangle" ? "rect" : ctrl.shapeType === "ellipse" ? "ellipse" : ctrl.shapeType === "arc" ? "arc" : ctrl.shapeType === "polygon" ? "polygon" : "curve";
      const coords = ctrl.shapeType === "line" && ctrl.x1 !== void 0 ? `<hc:startPt x="${ctrl.x1}" y="${ctrl.y1 ?? 0}"/><hc:endPt x="${ctrl.x2 ?? 0}" y="${ctrl.y2 ?? 0}"/>` : "";
      return `<hp:run charPrIDRef="0"><hp:${tag}>${coords}</hp:${tag}></hp:run>`;
    }
    case "equation": {
      if (ctrl.script.length === 0) return "";
      return `<hp:run charPrIDRef="0"><hp:equation><hp:script>${escapeXml(ctrl.script)}</hp:script></hp:equation></hp:run>`;
    }
    case "columnDef": {
      const n = Math.max(1, ctrl.colCount);
      return `<hp:ctrl><hp:colPr id="" type="NEWSPAPER" layout="LEFT" colCount="${n}" sameSz="1" sameGap="0"/></hp:ctrl>`;
    }
    case "header":
    case "footer":
    case "footnote":
    case "field":
    case "sectionDef":
    // secPr 은 섹션 첫 문단에서 별도 합성 — 본문 중복 출력 금지
    case "unknown":
      return "";
  }
}
var DEFAULT_BODY_WIDTH = 42520;
var currentBodyWidth = DEFAULT_BODY_WIDTH;
function bodyWidthOf(pd) {
  if (!pd) return DEFAULT_BODY_WIDTH;
  const horiz = pd.landscape ? pd.height : pd.width;
  const w = horiz - pd.left - pd.right - pd.gutter;
  if (w > 0) return Math.floor(w);
  return horiz > 0 ? Math.floor(horiz) : DEFAULT_BODY_WIDTH;
}
var DEFAULT_ROW_HEIGHT = 2e3;
function computeTableColWidths(raw, colCount, fitContent = false, cellSpacing = 0) {
  const reserve = Math.max(0, cellSpacing) * colCount;
  const bodyW = Math.max(1, currentBodyWidth - reserve);
  const equal = () => Array(colCount).fill(Math.max(1, Math.floor(bodyW / colCount)));
  if (!raw || raw.length !== colCount) return equal();
  const sum = raw.reduce((a, b2) => a + b2, 0);
  if (sum <= 0) return equal();
  if (fitContent && sum <= bodyW) {
    return raw.map((w) => Math.max(1, Math.floor(w)));
  }
  const scaled = raw.map((w) => Math.max(1, Math.floor(w * bodyW / sum)));
  const used = scaled.reduce((a, b2) => a + b2, 0);
  scaled[colCount - 1] = Math.max(1, scaled[colCount - 1] + (bodyW - used));
  return scaled;
}
function buildTableXml(t, binEntries) {
  const colCount = Math.max(1, t.colCount);
  const rowCount = Math.max(1, t.rowCount);
  const colWidths = computeTableColWidths(t.colWidths, colCount, t.fitContent, t.cellSpacing ?? 0);
  const defaultCellBf = t.borderless ? 1 : 2;
  const hasRealW = t.cells.some((c) => c.width !== void 0);
  const hasRealH = t.cells.some((c) => c.height !== void 0);
  const colWidthsReal = Array.from({ length: colCount }, (_2, c) => colWidths[c] ?? 1);
  const rowHeights = Array.from({ length: rowCount }, () => DEFAULT_ROW_HEIGHT);
  for (const cell of t.cells) {
    if (hasRealW && cell.colSpan === 1 && cell.width !== void 0 && cell.col >= 0 && cell.col < colCount) {
      colWidthsReal[cell.col] = cell.width;
    }
    if (hasRealH && cell.rowSpan === 1 && cell.height !== void 0 && cell.row >= 0 && cell.row < rowCount) {
      rowHeights[cell.row] = cell.height;
    }
  }
  const tableW = hasRealW ? colWidthsReal.reduce((a, b2) => a + b2, 0) : colWidths.reduce((a, b2) => a + b2, 0);
  const tableH = hasRealH ? rowHeights.reduce((a, b2) => a + b2, 0) : DEFAULT_ROW_HEIGHT * rowCount;
  const rows = Array.from({ length: t.rowCount }, () => []);
  for (const cell of t.cells) {
    if (cell.row >= 0 && cell.row < t.rowCount) rows[cell.row].push(cell);
  }
  for (const row of rows) row.sort((a, b2) => a.col - b2.col);
  const cellLineWrap = t.fitContent ? "KEEP" : "BREAK";
  const subListAttrs = (vAlign) => `id="" textDirection="HORIZONTAL" lineWrap="${cellLineWrap}" vertAlign="${vAlign}" linkListIDRef="0" linkListNextIDRef="0" textWidth="0" textHeight="0" hasTextRef="0" hasNumRef="0"`;
  const cellSpacing = Math.max(0, t.cellSpacing ?? 0);
  const trXml = rows.map((row) => {
    const tcXml = row.map((cell) => {
      const cellInner = cell.paragraphs.map((q2) => buildParagraphXml(q2, binEntries)).join("");
      const colSpan = Math.max(1, cell.colSpan);
      const rowSpan = Math.max(1, cell.rowSpan);
      let cw = 0;
      for (let k2 = 0; k2 < colSpan; k2++) cw += colWidthsReal[cell.col + k2] ?? 0;
      if (cw <= 0) cw = colWidthsReal[0] ?? 1;
      let ch = 0;
      for (let k2 = 0; k2 < rowSpan; k2++) ch += rowHeights[cell.row + k2] ?? DEFAULT_ROW_HEIGHT;
      const inner = cellInner || `<hp:p id="${makeParaId()}" paraPrIDRef="0" styleIDRef="0"><hp:run charPrIDRef="0"/>${DEFAULT_LINESEG}</hp:p>`;
      const m2 = cell.cellMargin ?? { left: 510, right: 510, top: 141, bottom: 141 };
      return `<hp:tc name="" header="0" hasMargin="0" protect="0" editable="0" dirty="0" borderFillIDRef="${cell.borderFillId !== void 0 ? cell.borderFillId + RESERVED_BORDERFILLS + 1 : defaultCellBf}"><hp:subList ${subListAttrs(cell.vertAlign ?? "CENTER")}>${inner}</hp:subList><hp:cellAddr colAddr="${cell.col}" rowAddr="${cell.row}"/><hp:cellSpan colSpan="${colSpan}" rowSpan="${rowSpan}"/><hp:cellSz width="${cw}" height="${ch}"/><hp:cellMargin left="${m2.left}" right="${m2.right}" top="${m2.top}" bottom="${m2.bottom}"/></hp:tc>`;
    }).join("");
    return `<hp:tr>${tcXml}</hp:tr>`;
  }).join("");
  return `<hp:tbl id="${makeParaId()}" zOrder="0" numberingType="TABLE" textWrap="TOP_AND_BOTTOM" textFlow="BOTH_SIDES" lock="0" dropcapstyle="None" pageBreak="CELL" repeatHeader="1" rowCnt="${rowCount}" colCnt="${colCount}" cellSpacing="${cellSpacing}" borderFillIDRef="${t.borderless ? 1 : 2}" noAdjust="0"><hp:sz width="${tableW}" widthRelTo="ABSOLUTE" height="${tableH}" heightRelTo="ABSOLUTE" protect="0"/><hp:pos treatAsChar="1" affectLSpacing="0" flowWithText="1" allowOverlap="0" holdAnchorAndSO="0" vertRelTo="PARA" horzRelTo="COLUMN" vertAlign="TOP" horzAlign="LEFT" vertOffset="0" horzOffset="0"/><hp:outMargin left="283" right="283" top="283" bottom="283"/><hp:inMargin left="510" right="510" top="141" bottom="141"/>` + trXml + `</hp:tbl>`;
}

// src/lib/hwp/mdWriter.ts
function hwpDocumentToMarkdown(doc, options) {
  const blocks = [];
  for (const section of doc.sections) {
    for (const para of section.paragraphs) {
      const md = renderParagraph(para, doc, options);
      if (md.length > 0) blocks.push(md);
    }
  }
  return blocks.join("\n\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
function renderParagraph(p, doc, options) {
  const parts = [];
  if (p.runs.length > 0) {
    parts.push(renderRuns(p.runs, doc));
  } else if (p.text.length > 0) {
    parts.push(escapeMd2(p.text));
  }
  for (const ctrl of p.controls) {
    switch (ctrl.kind) {
      case "table":
        parts.push(renderTable(ctrl, doc, options));
        break;
      case "picture": {
        const md = renderPicture(ctrl.binDataId, doc, options);
        if (md) parts.push(md);
        break;
      }
      case "header":
      case "footer":
      case "footnote": {
        const inner = ctrl.paragraphs.map((q2) => renderParagraph(q2, doc, options)).filter((s) => s.length > 0).join("\n");
        if (inner) {
          parts.push(inner.split("\n").map((line) => `> ${line}`).join("\n"));
        }
        break;
      }
      case "equation":
        if (ctrl.script.length > 0) {
          parts.push("```\n" + ctrl.script + "\n```");
        }
        break;
      default:
        break;
    }
  }
  return parts.filter((s) => s.length > 0).join("\n\n");
}
function renderRuns(runs, doc) {
  const out = [];
  for (const run of runs) {
    if (run.text.length === 0) continue;
    const cs = doc.docInfo.charShapes[run.charShapeId];
    out.push(applyInlineStyle(escapeMd2(run.text), cs));
  }
  return out.join("");
}
function applyInlineStyle(text, cs) {
  if (!cs) return text;
  let s = text;
  if (cs.bold) s = `**${s}**`;
  if (cs.italic) s = `*${s}*`;
  return s;
}
function renderTable(t, doc, options) {
  if (t.rowCount === 0 || t.colCount === 0) return "";
  const grid = Array.from(
    { length: t.rowCount },
    () => new Array(t.colCount).fill(void 0)
  );
  for (const cell of t.cells) {
    if (cell.row >= 0 && cell.row < t.rowCount && cell.col >= 0 && cell.col < t.colCount) {
      for (let r = 0; r < cell.rowSpan; r++) {
        for (let c = 0; c < cell.colSpan; c++) {
          const ri = cell.row + r;
          const ci = cell.col + c;
          if (ri < t.rowCount && ci < t.colCount && !grid[ri][ci]) {
            grid[ri][ci] = cell;
          }
        }
      }
    }
  }
  const rows = [];
  for (const row of grid) {
    const cellTexts = row.map((cell) => {
      if (!cell) return "";
      const inner = cell.paragraphs.map((q2) => renderParagraph(q2, doc, options)).filter((s) => s.length > 0).join(" ").replace(/\n+/g, " ").replace(/\|/g, "\\|");
      return inner;
    });
    rows.push(cellTexts);
  }
  if (rows.length === 0) return "";
  const header = rows[0];
  const sep2 = header.map(() => "---");
  const body = rows.slice(1);
  const fmt = (cells) => `| ${cells.map((c) => c || " ").join(" | ")} |`;
  const lines = [];
  lines.push(fmt(header));
  lines.push(fmt(sep2));
  for (const row of body) lines.push(fmt(row));
  return lines.join("\n");
}
function renderPicture(binDataId, doc, options) {
  const entry = doc.binData.get(binDataId);
  if (!entry) return "";
  const ext = entry.extension.toLowerCase();
  const binPath = `BinData/image${binDataId}.${ext}`;
  if (options?.embedImages) {
    const mime = detectImageMime(ext);
    const b64 = bytesToBase64(entry.data);
    return `![](data:${mime};base64,${b64})`;
  }
  if (options?.imageSrcResolver) {
    return `![](${options.imageSrcResolver(binPath, binDataId)})`;
  }
  return `![](${binPath})`;
}
function bytesToBase64(bytes) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(bytes).toString("base64");
  }
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return globalThis.btoa?.(bin) ?? "";
}
function escapeMd2(text) {
  return text.replace(/\\/g, "\\\\").replace(/([*_`~])/g, "\\$1").replace(/^([#>])/gm, "\\$1");
}

// node_modules/marked/lib/marked.esm.js
function C() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var R = C();
function j(l3) {
  R = l3;
}
var z = { exec: () => null };
function A(l3) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
    return s || (s = l3(n), e[n] = s), s;
  };
}
function k(l3, e = "") {
  let t = typeof l3 == "string" ? l3 : l3.source, n = { replace: (s, r) => {
    let i = typeof r == "string" ? r : r.source;
    return i = i.replace(m.caret, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var Te = ((l3 = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + l3);
  } catch {
    return false;
  }
})();
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: A((l3) => new RegExp(`^ {0,${l3}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: A((l3) => new RegExp(`^ {0,${l3}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}(?:\`\`\`|~~~)`)), headingBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}#`)), htmlBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: A((l3) => new RegExp(`^ {0,${l3}}>`)) };
var Oe = /^(?:[ \t]*(?:\n|$))+/;
var we = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var ye = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var q = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Pe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var U = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ae = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Se = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
var _e = /^[^\n]+/;
var W = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var $e = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", W).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Le = k(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, U).getRegex();
var Q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var X = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Me = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", X).replace("tag", Q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var le = (l3) => k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", l3).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var ze = le(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
var Ee = le(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
var Ce = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ee).getRegex();
var J = { blockquote: Ce, code: we, def: $e, fences: ye, heading: Pe, hr: q, html: Me, lheading: ae, list: Le, newline: Oe, paragraph: ze, table: z, text: _e };
var se = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var Ae = { ...J, lheading: Se, table: se, paragraph: k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex() };
var Ie = { ...J, html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", X).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: z, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k(K).replace("hr", q).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ae).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Be = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var De = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var pe = /^( {2,}|\\)\n(?!\s*$)/;
var qe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _ = /[\p{P}\p{S}]/u;
var I = /[\s\p{P}\p{S}]/u;
var v = /[^\s\p{P}\p{S}]/u;
var ve = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, I).getRegex();
var He = /[\p{Pi}\p{Ps}"']/u;
var ue = /(?!~)[\p{P}\p{S}]/u;
var Ze = /(?!~)[\s\p{P}\p{S}]/u;
var Ge = /(?:[^\s\p{P}\p{S}]|~)/u;
var Qe = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Te ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var Ne = k(ce, "u").replace(/punct/g, _).getRegex();
var je = k(ce, "u").replace(/punct/g, ue).getRegex();
var Fe = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/;
var Ue = k(Fe, "u").replace(/openQuote/g, He).replace(/punct/g, _).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Ke = k(he, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var We = k(he, "gu").replace(/notPunctSpace/g, Ge).replace(/punctSpace/g, Ze).replace(/punct/g, ue).getRegex();
var Xe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)";
var Je = k(Xe, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var Ve = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var Ye = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)";
var et = k(Ye, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var tt = k(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, _).getRegex();
var nt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var rt = k(nt, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var st = k(/\\(punct)/, "gu").replace(/punct/g, _).getRegex();
var it = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var ot = k(X).replace("(?:-->|$)", "-->").getRegex();
var at = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var G = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/;
var lt = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var de = k(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", W).getRegex();
var ke = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", W).getRegex();
var pt = k("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex();
var ie = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var V = { _backpedal: z, anyPunctuation: st, autolink: it, blockSkip: Qe, br: pe, code: De, del: z, delLDelim: z, delRDelim: z, emStrongLDelim: Ne, emStrongRDelimAst: Ke, emStrongRDelimUnd: Ve, escape: Be, link: lt, nolink: ke, punctuation: ve, reflink: de, reflinkSearch: pt, tag: at, text: qe, url: z };
var ut = { ...V, emStrongLDelim: Ue, emStrongRDelimAst: Je, emStrongRDelimUnd: et, link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(), reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex() };
var F = { ...V, emStrongRDelimAst: We, emStrongLDelim: je, delLDelim: tt, delRDelim: rt, url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ie).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: k(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ie).getRegex() };
var ct = { ...F, br: k(pe).replace("{2,}", "*").getRegex(), text: k(F.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var H = { normal: J, gfm: Ae, pedantic: Ie };
var B = { normal: V, gfm: F, breaks: ct, pedantic: ut };
var ht = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (l3) => ht[l3];
function O(l3, e) {
  if (e) {
    if (m.escapeTest.test(l3)) return l3.replace(m.escapeReplace, ge);
  } else if (m.escapeTestNoEncode.test(l3)) return l3.replace(m.escapeReplaceNoEncode, ge);
  return l3;
}
function Y(l3) {
  try {
    l3 = encodeURI(l3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function ee(l3, e) {
  let t = l3.replace(m.findPipe, (r, i, o) => {
    let p = false, a = i;
    for (; --a >= 0 && o[a] === "\\"; ) p = !p;
    return p ? "|" : " |";
  }), n = t.split(m.splitPipe), s = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; s < n.length; s++) n[s] = n[s].trim().replace(m.slashPipe, "|");
  return n;
}
function $(l3, e, t) {
  let n = l3.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    let r = l3.charAt(n - s - 1);
    if (r === e && !t) s++;
    else if (r !== e && t) s++;
    else break;
  }
  return l3.slice(0, n - s);
}
function te(l3) {
  let e = l3.split(`
`), t = e.length - 1;
  for (; t >= 0 && m.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? l3 : e.slice(0, t + 1).join(`
`);
}
function fe(l3, e) {
  if (l3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < l3.length; n++) if (l3[n] === "\\") n++;
  else if (l3[n] === e[0]) t++;
  else if (l3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function me(l3, e = 0) {
  let t = e, n = "";
  for (let s of l3) if (s === "	") {
    let r = 4 - t % 4;
    n += " ".repeat(r), t += r;
  } else n += s, t++;
  return n;
}
function xe(l3, e, t, n, s) {
  let r = e.href, i = e.title || null, o = l3[1].replace(s.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let p = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t, href: r, title: i, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = false, p;
}
function dt(l3, e, t) {
  let n = l3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let s = n[1];
  return e.split(`
`).map((r) => {
    let i = r.match(t.other.beginningSpace);
    if (i === null) return r;
    let [o] = i;
    return o.length >= s.length ? r.slice(s.length) : r;
  }).join(`
`);
}
var y = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = e || R;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = this.options.pedantic ? t[0] : te(t[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n, codeBlockStyle: "indented", text: s };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], s = dt(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let s = $(n, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = s.trim());
      }
      return { type: "heading", raw: $(t[0], `
`), depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: $(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = $(t[0], `
`).split(`
`), s = "", r = "", i = [];
      for (; n.length > 0; ) {
        let o = false, p = [], a;
        for (a = 0; a < n.length; a++) if (this.rules.other.blockquoteStart.test(n[a])) p.push(n[a]), o = true;
        else if (!o) p.push(n[a]);
        else break;
        n = n.slice(a);
        let u = p.join(`
`), c = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${u}` : u, r = r ? `${r}
${c}` : c;
        let h = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, i, true), this.lexer.state.top = h, n.length === 0) break;
        let d = i.at(-1);
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          let T = d, g = n.join(`
`), w = T.raw + `
` + g.replace(this.rules.other.blockquoteSetextReplace2, ""), M = this.blockquote(w);
          i[i.length - 1] = M, s = `${s}
${g}`, r = r.substring(0, r.length - T.text.length) + M.text;
          break;
        } else if (d?.type === "list") {
          let T = d, g = T.raw + `
` + n.join(`
`), w = this.list(g);
          i[i.length - 1] = w, s = s.substring(0, s.length - d.raw.length) + w.raw, r = r.substring(0, r.length - T.raw.length) + w.raw, n = g.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: i, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), s = n.length > 1, r = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      let i = this.rules.other.listItemRegex(n), o = false;
      for (; e; ) {
        let a = false, u = "", c = "";
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let h = me(t[2].split(`
`, 1)[0], t[1].length), d = e.split(`
`, 1)[0], T = !h.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c = h.trimStart()) : T ? g = t[1].length + 1 : (g = h.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c = h.slice(g), g += t[1].length), T && this.rules.other.blankLine.test(d) && (u += d + `
`, e = e.substring(d.length + 1), a = true), !a) {
          let w = this.rules.other.nextBulletRegex(g), M = this.rules.other.hrRegex(g), ne = this.rules.other.fencesBeginRegex(g), re = this.rules.other.headingBeginRegex(g), be = this.rules.other.htmlBeginRegex(g), Re = this.rules.other.blockquoteBeginRegex(g);
          for (; e; ) {
            let N = e.split(`
`, 1)[0], D;
            if (d = N, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), D = d) : D = d.replace(this.rules.other.tabCharGlobal, "    "), ne.test(d) || re.test(d) || be.test(d) || Re.test(d) || w.test(d) || M.test(d)) break;
            if (D.search(this.rules.other.nonSpaceChar) >= g || !d.trim()) c += `
` + D.slice(g);
            else {
              if (T || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ne.test(h) || re.test(h) || M.test(h)) break;
              c += `
` + d;
            }
            T = !d.trim(), u += N + `
`, e = e.substring(N.length + 1), h = D.slice(g);
          }
        }
        r.loose || (o ? r.loose = true : this.rules.other.doubleBlankLine.test(u) && (o = true)), r.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(c), loose: false, text: c, tokens: [] }), r.raw += u;
      }
      let p = r.items.at(-1);
      if (p) p.raw = p.raw.trimEnd(), p.text = p.text.trimEnd();
      else return;
      r.raw = r.raw.trimEnd();
      for (let a of r.items) {
        this.lexer.state.top = false, a.tokens = this.lexer.blockTokens(a.text, []);
        let u = a.tokens[0];
        if (a.task && (u?.type === "text" || u?.type === "paragraph")) {
          a.text = a.text.replace(this.rules.other.listReplaceTask, ""), u.raw = u.raw.replace(this.rules.other.listReplaceTask, ""), u.text = u.text.replace(this.rules.other.listReplaceTask, "");
          for (let h = this.lexer.inlineQueue.length - 1; h >= 0; h--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)) {
            this.lexer.inlineQueue[h].src = this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let c = this.rules.other.listTaskCheckbox.exec(a.raw);
          if (c) {
            let h = { type: "checkbox", raw: c[0] + " ", checked: c[0] !== "[ ]" };
            a.checked = h.checked, r.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = h.raw + a.tokens[0].raw, a.tokens[0].text = h.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(h)) : a.tokens.unshift({ type: "paragraph", raw: h.raw, text: h.raw, tokens: [h] }) : a.tokens.unshift(h);
          }
        } else a.task && (a.task = false);
        if (!r.loose) {
          let c = a.tokens.filter((d) => d.type === "space"), h = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
          r.loose = h;
        }
      }
      if (r.loose) for (let a of r.items) {
        a.loose = true;
        for (let u of a.tokens) u.type === "text" && (u.type = "paragraph");
      }
      return r;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) {
      let n = te(t[0]);
      return { type: "html", block: true, raw: n, pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: n };
    }
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: $(t[0], `
`), href: s, title: r };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = ee(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: $(t[0], `
`), header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (let o of s) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
      for (let o = 0; o < n.length; o++) i.header.push({ text: n[o], tokens: this.lexer.inline(n[o]), header: true, align: i.align[o] });
      for (let o of r) i.rows.push(ee(o, i.header.length).map((p, a) => ({ text: p, tokens: this.lexer.inline(p), header: false, align: i.align[a] })));
      return i;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) {
      let n = t[1].trim();
      return { type: "heading", raw: $(t[0], `
`), depth: t[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let i = $(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 === 0) return;
      } else {
        let i = fe(t[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let p = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, p).trim(), t[3] = "";
        }
      }
      let s = t[2], r = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(s);
        i && (s = i[1], r = i[3]);
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), xe(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let s = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[s.toLowerCase()];
      if (!r) {
        let i = n[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return xe(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(s[1] || s[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let i = [...s[0]].length - 1, o, p, a = i, u = 0, c = s[0][0], h = n === c, d = c === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = d.exec(t)) !== null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
        if (p = [...o].length, s[3] || s[4]) {
          a += p;
          continue;
        } else if (s[5] || s[6]) {
          if (i % 3 && !((i + p) % 3)) {
            u += p;
            continue;
          }
          if (h) break;
        }
        if (a -= p, a > 0) continue;
        p = Math.min(p, p + a + u);
        let T = [...s[0]][0].length, g = e.slice(0, i + s.index + T + p);
        if (Math.min(i, p) % 2) {
          let M = g.slice(1, -1);
          return { type: "em", raw: g, text: M, tokens: this.lexer.inlineTokens(M) };
        }
        let w = g.slice(2, -2);
        return { type: "strong", raw: g, text: w, tokens: this.lexer.inlineTokens(w) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return s && r && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e, t, n = "") {
    let s = this.rules.inline.delLDelim.exec(e);
    if (!s) return;
    if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let i = [...s[0]].length - 1, o, p, a = i, u = this.rules.inline.delRDelim;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = u.exec(t)) !== null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o || (p = [...o].length, p !== i)) continue;
        if (s[3] || s[4]) {
          a += p;
          continue;
        }
        if (a -= p, a > 0) continue;
        p = Math.min(p, p + a);
        let c = [...s[0]][0].length, h = e.slice(0, i + s.index + c + p), d = h.slice(i, -i);
        return { type: "del", raw: h, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, s;
      if (t[2] === "@") n = t[0], s = "mailto:" + n;
      else {
        let r;
        do
          r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (r !== t[0]);
        n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
};
var x = class l {
  constructor(e) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "inlineQueue");
    __publicField(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: m, block: H.normal, inline: B.normal };
    this.options.pedantic ? (t.block = H.pedantic, t.inline = B.pedantic) : this.options.gfm && (t.block = H.gfm, this.options.breaks ? t.inline = B.breaks : t.inline = B.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: H, inline: B };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
    let s = 1 / 0;
    for (; e; ) {
      if (e.length < s) s = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let r;
      if (this.options.extensions?.block?.some((o) => (r = o.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        r.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.at(-1).src = o.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0, p = e.slice(1), a;
        this.options.extensions.startBlock.forEach((u) => {
          a = u.call({ lexer: this }, p), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
        }), o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let o = t.at(-1);
        n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    this.tokenizer.lexer = this;
    let n = e;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      o.length > 0 && (n = n.replace(this.tokenizer.rules.inline.reflinkSearch, (p) => o.includes(p.slice(p.lastIndexOf("[") + 1, -1)) ? "[" + "a".repeat(p.length - 2) + "]" : p));
    }
    n = n.replace(this.tokenizer.rules.inline.anyPunctuation, "++"), n = n.replace(this.tokenizer.rules.inline.blockSkip, (o, p, a) => {
      let u = a ? a.length : 0;
      return o.slice(0, u) + "[" + "a".repeat(o.length - u - 2) + "]";
    }), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let s = false, r = "", i = 1 / 0;
    for (; e; ) {
      if (e.length < i) i = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (r = ""), s = false;
      let o;
      if (this.options.extensions?.inline?.some((a) => (o = a.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let a = t.at(-1);
        o.type === "text" && a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, r)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e, n, r)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let p = e;
      if (this.options.extensions?.startInline) {
        let a = 1 / 0, u = e.slice(1), c;
        this.options.extensions.startInline.forEach((h) => {
          c = h.call({ lexer: this }, u), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
        }), a < 1 / 0 && a >= 0 && (p = e.substring(0, a + 1));
      }
      if (o = this.tokenizer.inlineText(p)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (r = o.raw.slice(-1)), s = true;
        let a = t.at(-1);
        a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t);
    else throw new Error(t);
  }
};
var P = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = e || R;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let s = (t || "").match(m.notSpaceStart)?.[0], r = e.replace(m.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + O(s) + '">' + (n ? r : O(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : O(r, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, s = "";
    for (let o = 0; o < e.items.length; o++) {
      let p = e.items[o];
      s += this.listitem(p);
    }
    let r = t ? "ol" : "ul", i = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + i + `>
` + s + "</" + r + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let r = 0; r < e.rows.length; r++) {
      let i = e.rows[r];
      n = "";
      for (let o = 0; o < i.length; o++) n += this.tablecell(i[o]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${O(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let s = this.parser.parseInline(n), r = Y(e);
    if (r === null) return s;
    e = r;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + O(t) + '"'), i += ">" + s + "</a>", i;
  }
  image({ href: e, title: t, text: n, tokens: s }) {
    s && (n = this.parser.parseInline(s, this.parser.textRenderer));
    let r = Y(e);
    if (r === null) return O(n);
    e = r;
    let i = `<img src="${e}" alt="${O(n)}"`;
    return t && (i += ` title="${O(t)}"`), i += ">", i;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : O(e.text);
  }
};
var L = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
};
var b = class l2 {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e || R, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L();
  }
  static parse(e, t) {
    return new l2(t).parse(e);
  }
  static parseInline(e, t) {
    return new l2(t).parseInline(e);
  }
  parse(e) {
    this.renderer.parser = this;
    let t = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let i = s, o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(i.type)) {
          t += o || "";
          continue;
        }
      }
      let r = s;
      switch (r.type) {
        case "space": {
          t += this.renderer.space(r);
          break;
        }
        case "hr": {
          t += this.renderer.hr(r);
          break;
        }
        case "heading": {
          t += this.renderer.heading(r);
          break;
        }
        case "code": {
          t += this.renderer.code(r);
          break;
        }
        case "table": {
          t += this.renderer.table(r);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(r);
          break;
        }
        case "list": {
          t += this.renderer.list(r);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(r);
          break;
        }
        case "html": {
          t += this.renderer.html(r);
          break;
        }
        case "def": {
          t += this.renderer.def(r);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(r);
          break;
        }
        case "text": {
          t += this.renderer.text(r);
          break;
        }
        default: {
          let i = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    this.renderer.parser = this;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (this.options.extensions?.renderers?.[r.type]) {
        let o = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (o !== false || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          n += o || "";
          continue;
        }
      }
      let i = r;
      switch (i.type) {
        case "escape": {
          n += t.text(i);
          break;
        }
        case "html": {
          n += t.html(i);
          break;
        }
        case "link": {
          n += t.link(i);
          break;
        }
        case "image": {
          n += t.image(i);
          break;
        }
        case "checkbox": {
          n += t.checkbox(i);
          break;
        }
        case "strong": {
          n += t.strong(i);
          break;
        }
        case "em": {
          n += t.em(i);
          break;
        }
        case "codespan": {
          n += t.codespan(i);
          break;
        }
        case "br": {
          n += t.br(i);
          break;
        }
        case "del": {
          n += t.del(i);
          break;
        }
        case "text": {
          n += t.text(i);
          break;
        }
        default: {
          let o = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
};
var _a;
var S = (_a = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = e || R;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer(e = this.block) {
    return e ? x.lex : x.lexInline;
  }
  provideParser(e = this.block) {
    return e ? b.parse : b.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), __publicField(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a);
var Z = class {
  constructor(...e) {
    __publicField(this, "defaults", C());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", b);
    __publicField(this, "Renderer", P);
    __publicField(this, "TextRenderer", L);
    __publicField(this, "Lexer", x);
    __publicField(this, "Tokenizer", y);
    __publicField(this, "Hooks", S);
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let s of e) switch (n = n.concat(t.call(this, s)), s.type) {
      case "table": {
        let r = s;
        for (let i of r.header) n = n.concat(this.walkTokens(i.tokens, t));
        for (let i of r.rows) for (let o of i) n = n.concat(this.walkTokens(o.tokens, t));
        break;
      }
      case "list": {
        let r = s;
        n = n.concat(this.walkTokens(r.items, t));
        break;
      }
      default: {
        let r = s;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((i) => {
          let o = r[i].flat(1 / 0);
          n = n.concat(this.walkTokens(o, t));
        }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let s = { ...n };
      if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let i = t.renderers[r.name];
          i ? t.renderers[r.name] = function(...o) {
            let p = r.renderer.apply(this, o);
            return p === false && (p = i.apply(this, o)), p;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i = t[r.level];
          i ? i.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new P(this.defaults);
        for (let i in n.renderer) {
          if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i)) continue;
          let o = i, p = n.renderer[o], a = r[o];
          r[o] = (...u) => {
            let c = p.apply(r, u);
            return c === false && (c = a.apply(r, u)), c || "";
          };
        }
        s.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new y(this.defaults);
        for (let i in n.tokenizer) {
          if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i)) continue;
          let o = i, p = n.tokenizer[o], a = r[o];
          r[o] = (...u) => {
            let c = p.apply(r, u);
            return c === false && (c = a.apply(r, u)), c;
          };
        }
        s.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new S();
        for (let i in n.hooks) {
          if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let o = i, p = n.hooks[o], a = r[o];
          S.passThroughHooks.has(i) ? r[o] = (u) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(i)) return (async () => {
              let h = await p.call(r, u);
              return a.call(r, h);
            })();
            let c = p.call(r, u);
            return a.call(r, c);
          } : r[o] = (...u) => {
            if (this.defaults.async) return (async () => {
              let h = await p.apply(r, u);
              return h === false && (h = await a.apply(r, u)), h;
            })();
            let c = p.apply(r, u);
            return c === false && (c = a.apply(r, u)), c;
          };
        }
        s.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, i = n.walkTokens;
        s.walkTokens = function(o) {
          let p = [];
          return p.push(i.call(this, o)), r && (p = p.concat(r.call(this, o))), p;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return x.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return b.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      let r = { ...s }, i = { ...this.defaults, ...r }, o = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === true && r.async === false) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
        let p = i.hooks ? await i.hooks.preprocess(n) : n, u = await (i.hooks ? await i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(p, i), c = i.hooks ? await i.hooks.processAllTokens(u) : u;
        i.walkTokens && await Promise.all(this.walkTokens(c, i.walkTokens));
        let d = await (i.hooks ? await i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(c, i);
        return i.hooks ? await i.hooks.postprocess(d) : d;
      })().catch(o);
      try {
        i.hooks && (n = i.hooks.preprocess(n));
        let a = (i.hooks ? i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, i);
        i.hooks && (a = i.hooks.processAllTokens(a)), i.walkTokens && this.walkTokens(a, i.walkTokens);
        let c = (i.hooks ? i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, i);
        return i.hooks && (c = i.hooks.postprocess(c)), c;
      } catch (p) {
        return o(p);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let s = "<p>An error occurred:</p><pre>" + O(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var E = new Z();
function f(l3, e) {
  return E.parse(l3, e);
}
f.options = f.setOptions = function(l3) {
  return E.setOptions(l3), f.defaults = E.defaults, j(f.defaults), f;
};
f.getDefaults = C;
f.defaults = R;
function kt(...l3) {
  return E.use(...l3), f.defaults = E.defaults, j(f.defaults), f;
}
f.use = kt;
f.walkTokens = function(l3, e) {
  return E.walkTokens(l3, e);
};
f.parseInline = E.parseInline;
f.Parser = b;
f.parser = b.parse;
f.Renderer = P;
f.TextRenderer = L;
f.Lexer = x;
f.lexer = x.lex;
f.Tokenizer = y;
f.Hooks = S;
f.parse = f;
var nn = f.options;
var rn = f.setOptions;
var sn = f.walkTokens;
var on = f.parseInline;
var ln = b.parse;
var pn = x.lex;

// src/lib/hwp/mdReader.ts
function markdownToHwpDocument(md, options) {
  const tokens = f.lexer(md);
  const ctx = {
    charShapeIds: /* @__PURE__ */ new Map(),
    binData: /* @__PURE__ */ new Map(),
    nextBinDataId: 1,
    imageResolver: options?.imageResolver
  };
  const charShapes = [defaultCharShape()];
  ctx.charShapeIds.set("default", 0);
  const paraShapes = [defaultParaShape()];
  const styles = [{ name: "\uBC14\uD0D5\uAE00", engName: "Normal", paraShapeId: 0, charShapeId: 0 }];
  const fontFaces = [
    [{ name: "\uD568\uCD08\uB86C\uBC14\uD0D5" }, { name: "\uB9D1\uC740 \uACE0\uB515" }, { name: "Courier New" }],
    [{ name: "Times New Roman" }],
    [],
    [],
    [],
    [],
    []
  ];
  const idBold = registerCharShape(charShapes, ctx, { ...defaultCharShape(), bold: true });
  const idItalic = registerCharShape(charShapes, ctx, { ...defaultCharShape(), italic: true });
  const idBoldItalic = registerCharShape(charShapes, ctx, { ...defaultCharShape(), bold: true, italic: true });
  const idH1 = registerCharShape(charShapes, ctx, { ...defaultCharShape(), bold: true, baseSize: 1800 });
  const idH2 = registerCharShape(charShapes, ctx, { ...defaultCharShape(), bold: true, baseSize: 1600 });
  const idH3 = registerCharShape(charShapes, ctx, { ...defaultCharShape(), bold: true, baseSize: 1400 });
  const idHmin = registerCharShape(charShapes, ctx, { ...defaultCharShape(), bold: true, baseSize: 1200 });
  const idMono = registerCharShape(charShapes, ctx, {
    ...defaultCharShape(),
    faceNameIds: { hangul: 2, latin: 2, hanja: 2, japanese: 2, other: 2, symbol: 2, user: 2 }
  });
  const headingShapeId = (depth) => depth === 1 ? idH1 : depth === 2 ? idH2 : depth === 3 ? idH3 : idHmin;
  const paragraphs = [];
  const visitTokens = (tks) => {
    for (const tk of tks) {
      paragraphs.push(...renderToken(tk, { idBold, idItalic, idBoldItalic, headingShapeId, idMono }, ctx, charShapes));
    }
  };
  visitTokens(tokens);
  return {
    header: defaultFileHeader(),
    docInfo: {
      fontFaces,
      charShapes,
      paraShapes,
      styles,
      binData: [],
      borderFills: [],
      numberings: [],
      bullets: [],
      tabDefs: []
    },
    sections: [{ paragraphs }],
    binData: ctx.binData
  };
}
function renderToken(tk, ids, ctx, charShapes) {
  switch (tk.type) {
    case "heading": {
      const t = tk;
      const csId = ids.headingShapeId(t.depth);
      const runs = inlineToRuns(t.tokens ?? [], ids, csId);
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: runsToText(runs),
          runs,
          controls: []
        }
      ];
    }
    case "paragraph": {
      const t = tk;
      const runs = inlineToRuns(t.tokens ?? [], ids, 0);
      const controls = [];
      const imageControls = collectImagesFromInline(t.tokens ?? [], ctx);
      controls.push(...imageControls);
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: runsToText(runs),
          runs,
          controls
        }
      ];
    }
    case "blockquote": {
      const t = tk;
      const inner = (t.tokens ?? []).flatMap(
        (sub) => renderToken(sub, ids, ctx, charShapes)
      );
      return inner.map((p) => ({
        ...p,
        text: `> ${p.text}`,
        runs: p.runs.length > 0 ? [{ charShapeId: p.runs[0].charShapeId, text: `> ${runsToText(p.runs)}` }] : []
      }));
    }
    case "list": {
      const t = tk;
      const out = [];
      let idx = t.start === "" ? 1 : Number(t.start) || 1;
      for (const item of t.items) {
        const prefix = t.ordered ? `${idx}. ` : "- ";
        const inner = (item.tokens ?? []).flatMap(
          (sub) => renderToken(sub, ids, ctx, charShapes)
        );
        if (inner.length === 0) {
          out.push({
            paraShapeId: 0,
            styleId: 0,
            text: prefix,
            runs: [{ charShapeId: 0, text: prefix }],
            controls: []
          });
        } else {
          const first = inner[0];
          const newText = prefix + first.text;
          const newRuns = [
            { charShapeId: 0, text: prefix },
            ...first.runs
          ];
          out.push({ ...first, text: newText, runs: newRuns });
          for (let i = 1; i < inner.length; i++) out.push(inner[i]);
        }
        idx++;
      }
      return out;
    }
    case "code": {
      const t = tk;
      const lines = t.text.split("\n");
      return lines.map((line) => ({
        paraShapeId: 0,
        styleId: 0,
        text: line,
        runs: line.length > 0 ? [{ charShapeId: ids.idMono, text: line }] : [],
        controls: []
      }));
    }
    case "table": {
      const t = tk;
      const rowCount = 1 + t.rows.length;
      const colCount = t.header.length;
      const cells = [];
      for (let c = 0; c < t.header.length; c++) {
        const cellTokens = t.header[c].tokens ?? [];
        const runs = inlineToRuns(cellTokens, ids, ids.idBold);
        cells.push({
          col: c,
          row: 0,
          colSpan: 1,
          rowSpan: 1,
          paragraphs: [
            {
              paraShapeId: 0,
              styleId: 0,
              text: runsToText(runs),
              runs,
              controls: []
            }
          ]
        });
      }
      for (let r = 0; r < t.rows.length; r++) {
        for (let c = 0; c < t.rows[r].length; c++) {
          const cellTokens = t.rows[r][c].tokens ?? [];
          const runs = inlineToRuns(cellTokens, ids, 0);
          cells.push({
            col: c,
            row: r + 1,
            colSpan: 1,
            rowSpan: 1,
            paragraphs: [
              {
                paraShapeId: 0,
                styleId: 0,
                text: runsToText(runs),
                runs,
                controls: []
              }
            ]
          });
        }
      }
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: "",
          runs: [],
          controls: [{ kind: "table", rowCount, colCount, cells }]
        }
      ];
    }
    case "hr":
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: "\u2500\u2500\u2500\u2500\u2500",
          runs: [{ charShapeId: 0, text: "\u2500\u2500\u2500\u2500\u2500" }],
          controls: []
        }
      ];
    case "space":
      return [];
    case "text": {
      const t = tk;
      const inlineTokens = t.tokens ?? [{ type: "text", text: t.text, raw: t.text }];
      const runs = inlineToRuns(inlineTokens, ids, 0);
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: runsToText(runs),
          runs,
          controls: []
        }
      ];
    }
    default:
      return [];
  }
}
function inlineToRuns(tokens, ids, baseCharShapeId) {
  const runs = [];
  for (const t of tokens) {
    walkInline(t, baseCharShapeId, ids, runs, false, false);
  }
  return mergeRuns(runs);
}
function walkInline(tk, baseId, ids, runs, bold, italic) {
  switch (tk.type) {
    case "text": {
      const t = tk;
      const text = t.text;
      if (t.tokens) {
        for (const sub of t.tokens) {
          walkInline(sub, baseId, ids, runs, bold, italic);
        }
      } else if (text.length > 0) {
        runs.push({ charShapeId: pickShapeId(baseId, ids, bold, italic), text: decodeEntities(text) });
      }
      break;
    }
    case "strong": {
      const t = tk;
      for (const sub of t.tokens ?? []) walkInline(sub, baseId, ids, runs, true, italic);
      break;
    }
    case "em": {
      const t = tk;
      for (const sub of t.tokens ?? []) walkInline(sub, baseId, ids, runs, bold, true);
      break;
    }
    case "codespan": {
      const t = tk;
      runs.push({ charShapeId: ids.idMono, text: decodeEntities(t.text) });
      break;
    }
    case "link": {
      const t = tk;
      for (const sub of t.tokens ?? []) walkInline(sub, baseId, ids, runs, bold, italic);
      break;
    }
    case "br":
      runs.push({ charShapeId: pickShapeId(baseId, ids, bold, italic), text: "\n" });
      break;
    case "del": {
      const t = tk;
      for (const sub of t.tokens ?? []) walkInline(sub, baseId, ids, runs, bold, italic);
      break;
    }
    case "image":
      runs.push({ charShapeId: baseId, text: tk.text });
      break;
    case "escape":
      runs.push({ charShapeId: pickShapeId(baseId, ids, bold, italic), text: tk.text });
      break;
    case "html":
      runs.push({ charShapeId: baseId, text: tk.text });
      break;
    default:
      break;
  }
}
function pickShapeId(baseId, ids, bold, italic) {
  if (bold && italic) return ids.idBoldItalic;
  if (bold) return ids.idBold;
  if (italic) return ids.idItalic;
  return baseId;
}
function mergeRuns(runs) {
  const out = [];
  for (const r of runs) {
    const last = out[out.length - 1];
    if (last && last.charShapeId === r.charShapeId) {
      last.text += r.text;
    } else {
      out.push({ ...r });
    }
  }
  return out;
}
function runsToText(runs) {
  return runs.map((r) => r.text).join("");
}
function decodeEntities(s) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}
function collectImagesFromInline(tokens, ctx) {
  const out = [];
  const visit = (tks) => {
    for (const tk of tks) {
      if (tk.type === "image") {
        const img = tk;
        const ctrl = imageTokenToControl(img.href, ctx);
        if (ctrl) out.push(ctrl);
      }
      const subTokens = tk.tokens;
      if (Array.isArray(subTokens)) visit(subTokens);
    }
  };
  visit(tokens);
  return out;
}
function imageTokenToControl(href, ctx) {
  const match = /^data:([^;]+);base64,(.*)$/i.exec(href);
  if (match) {
    const mime = match[1].toLowerCase();
    const ext = mime === "image/png" ? "png" : mime === "image/jpeg" ? "jpg" : mime === "image/gif" ? "gif" : mime === "image/bmp" ? "bmp" : mime === "image/webp" ? "webp" : "bin";
    let bytes;
    try {
      if (typeof Buffer !== "undefined") {
        bytes = new Uint8Array(Buffer.from(match[2], "base64"));
      } else {
        const bin = globalThis.atob?.(match[2]) ?? "";
        bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      }
    } catch {
      return null;
    }
    const id = ctx.nextBinDataId++;
    ctx.binData.set(id, { data: bytes, extension: ext });
    return { kind: "picture", binDataId: id };
  }
  const resolved = ctx.imageResolver?.(href);
  if (resolved && resolved.data.length > 0) {
    const id = ctx.nextBinDataId++;
    ctx.binData.set(id, { data: resolved.data, extension: resolved.extension.toLowerCase() });
    return { kind: "picture", binDataId: id };
  }
  return null;
}
function defaultCharShape() {
  return {
    faceNameIds: { hangul: 0, latin: 1, hanja: 0, japanese: 0, other: 0, symbol: 0, user: 0 },
    baseSize: 1e3,
    // 10pt
    property: 0,
    textColor: 0,
    shadeColor: 16777215,
    underlineColor: 0,
    shadowColor: 0,
    bold: false,
    italic: false,
    underline: false,
    strikeout: false
  };
}
function defaultParaShape() {
  return {
    alignment: "justify",
    property: 0,
    leftMargin: 0,
    rightMargin: 0,
    indent: 0,
    prevSpacing: 0,
    nextSpacing: 0,
    lineSpacing: 160
  };
}
function defaultFileHeader() {
  return {
    version: { major: 5, minor: 0, build: 6, revision: 0 },
    flags: {
      raw: 0,
      compressed: false,
      encrypted: false,
      distribution: false,
      script: false,
      drm: false,
      xmlTemplate: false,
      documentHistory: false,
      digitalSignature: false,
      publicKeyEncrypted: false,
      modifiedCertificate: false,
      prepareDistribution: false
    }
  };
}
function registerCharShape(shapes, ctx, cs) {
  const key = JSON.stringify(cs);
  const existing = ctx.charShapeIds.get(key);
  if (existing !== void 0) return existing;
  const id = shapes.length;
  shapes.push(cs);
  ctx.charShapeIds.set(key, id);
  return id;
}

// node_modules/entities/dist/decode-codepoint.js
var decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
function replaceCodePoint(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return decodeMap.get(codePoint) ?? codePoint;
}

// node_modules/entities/dist/internal/decode-shared.js
function decodeBase64(input) {
  const binary = atob(input);
  const evenLength = binary.length & ~1;
  const out = new Uint16Array(evenLength / 2);
  for (let index = 0, outIndex = 0; index < evenLength; index += 2) {
    const lo = binary.charCodeAt(index);
    const hi = binary.charCodeAt(index + 1);
    out[outIndex++] = lo | hi << 8;
  }
  return out;
}

// node_modules/entities/dist/generated/decode-data-html.js
var htmlDecodeTree = /* @__PURE__ */ decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

// node_modules/entities/dist/generated/decode-data-xml.js
var xmlDecodeTree = /* @__PURE__ */ decodeBase64("AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg");

// node_modules/entities/dist/internal/bin-trie-flags.js
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["FLAG13"] = 8192] = "FLAG13";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));

// node_modules/entities/dist/decode.js
var CharCodes;
(function(CharCodes3) {
  CharCodes3[CharCodes3["NUM"] = 35] = "NUM";
  CharCodes3[CharCodes3["SEMI"] = 59] = "SEMI";
  CharCodes3[CharCodes3["EQUALS"] = 61] = "EQUALS";
  CharCodes3[CharCodes3["ZERO"] = 48] = "ZERO";
  CharCodes3[CharCodes3["NINE"] = 57] = "NINE";
  CharCodes3[CharCodes3["LOWER_A"] = 97] = "LOWER_A";
  CharCodes3[CharCodes3["LOWER_F"] = 102] = "LOWER_F";
  CharCodes3[CharCodes3["LOWER_X"] = 120] = "LOWER_X";
  CharCodes3[CharCodes3["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes3[CharCodes3["UPPER_A"] = 65] = "UPPER_A";
  CharCodes3[CharCodes3["UPPER_F"] = 70] = "UPPER_F";
  CharCodes3[CharCodes3["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
var TO_LOWER_BIT = 32;
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
var EntityDecoder2 = class {
  constructor(decodeTree, emitCodePoint, errors) {
    __publicField(this, "decodeTree");
    __publicField(this, "emitCodePoint");
    __publicField(this, "errors");
    /** The current state of the decoder. */
    __publicField(this, "state", EntityDecoderState.EntityStart);
    /** Characters that were consumed while parsing an entity. */
    __publicField(this, "consumed", 1);
    /**
     * The result of the entity.
     *
     * Either the result index of a numeric entity, or the codepoint of a
     * numeric entity.
     */
    __publicField(this, "result", 0);
    /** The current index in the decode tree. */
    __publicField(this, "treeIndex", 0);
    /** The number of characters that were consumed in excess. */
    __publicField(this, "excess", 1);
    /** The mode in which the decoder is operating. */
    __publicField(this, "decodeMode", DecodingMode.Strict);
    /** The number of characters that have been consumed in the current run. */
    __publicField(this, "runConsumed", 0);
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
  }
  /**
   * Resets the instance to make it reusable.
   * @param decodeMode Entity decoding mode to use.
   */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
    this.runConsumed = 0;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(input, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (input.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(input, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(input, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(input, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(input, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(input, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(input, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(input, offset) {
    if (offset >= input.length) {
      return -1;
    }
    if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(input, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(input, offset);
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(input, offset) {
    while (offset < input.length) {
      const char = input.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        const digit = char <= CharCodes.NINE ? char - CharCodes.ZERO : (char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10;
        this.result = this.result * 16 + digit;
        this.consumed++;
        offset++;
      } else {
        return this.emitNumericEntity(char, 3);
      }
    }
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(input, offset) {
    while (offset < input.length) {
      const char = input.charCodeAt(offset);
      if (isNumber(char)) {
        this.result = this.result * 10 + (char - CharCodes.ZERO);
        this.consumed++;
        offset++;
      } else {
        return this.emitNumericEntity(char, 2);
      }
    }
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    if (this.consumed <= expectedLength) {
      this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(input, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    while (offset < input.length) {
      if (valueLength === 0 && (current & BinTrieFlags.FLAG13) !== 0) {
        const runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
        if (this.runConsumed === 0) {
          const firstChar = current & BinTrieFlags.JUMP_TABLE;
          if (input.charCodeAt(offset) !== firstChar) {
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          }
          offset++;
          this.excess++;
          this.runConsumed++;
        }
        while (this.runConsumed < runLength) {
          if (offset >= input.length) {
            return -1;
          }
          const charIndexInPacked = this.runConsumed - 1;
          const packedWord = decodeTree[this.treeIndex + 1 + (charIndexInPacked >> 1)];
          const expectedChar = charIndexInPacked % 2 === 0 ? packedWord & 255 : packedWord >> 8 & 255;
          if (input.charCodeAt(offset) !== expectedChar) {
            this.runConsumed = 0;
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          }
          offset++;
          this.excess++;
          this.runConsumed++;
        }
        this.runConsumed = 0;
        this.treeIndex += 1 + (runLength >> 1);
        current = decodeTree[this.treeIndex];
        valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      }
      if (offset >= input.length)
        break;
      const char = input.charCodeAt(offset);
      if (char === CharCodes.SEMI && valueLength !== 0 && (current & BinTrieFlags.FLAG13) !== 0) {
        return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
      }
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict && (current & BinTrieFlags.FLAG13) === 0) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
      offset++;
      this.excess++;
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    this.errors?.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13) : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   * @returns The number of characters consumed.
   */
  end() {
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      // Otherwise, emit a numeric entity if we have one.
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
};
function determineBranch(decodeTree, current, nodeIndex, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  const packedKeySlots = branchCount + 1 >> 1;
  let lo = 0;
  let hi = branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const slot = mid >> 1;
    const packed = decodeTree[nodeIndex + slot];
    const midKey = packed >> (mid & 1) * 8 & 255;
    if (midKey < char) {
      lo = mid + 1;
    } else if (midKey > char) {
      hi = mid - 1;
    } else {
      return decodeTree[nodeIndex + packedKeySlots + mid];
    }
  }
  return -1;
}

// node_modules/htmlparser2/dist/Tokenizer.js
var CharCodes2;
(function(CharCodes3) {
  CharCodes3[CharCodes3["Tab"] = 9] = "Tab";
  CharCodes3[CharCodes3["NewLine"] = 10] = "NewLine";
  CharCodes3[CharCodes3["FormFeed"] = 12] = "FormFeed";
  CharCodes3[CharCodes3["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes3[CharCodes3["Space"] = 32] = "Space";
  CharCodes3[CharCodes3["ExclamationMark"] = 33] = "ExclamationMark";
  CharCodes3[CharCodes3["Number"] = 35] = "Number";
  CharCodes3[CharCodes3["Amp"] = 38] = "Amp";
  CharCodes3[CharCodes3["SingleQuote"] = 39] = "SingleQuote";
  CharCodes3[CharCodes3["DoubleQuote"] = 34] = "DoubleQuote";
  CharCodes3[CharCodes3["Dash"] = 45] = "Dash";
  CharCodes3[CharCodes3["Slash"] = 47] = "Slash";
  CharCodes3[CharCodes3["Zero"] = 48] = "Zero";
  CharCodes3[CharCodes3["Nine"] = 57] = "Nine";
  CharCodes3[CharCodes3["Semi"] = 59] = "Semi";
  CharCodes3[CharCodes3["Lt"] = 60] = "Lt";
  CharCodes3[CharCodes3["Eq"] = 61] = "Eq";
  CharCodes3[CharCodes3["Gt"] = 62] = "Gt";
  CharCodes3[CharCodes3["Questionmark"] = 63] = "Questionmark";
  CharCodes3[CharCodes3["UpperA"] = 65] = "UpperA";
  CharCodes3[CharCodes3["LowerA"] = 97] = "LowerA";
  CharCodes3[CharCodes3["UpperF"] = 70] = "UpperF";
  CharCodes3[CharCodes3["LowerF"] = 102] = "LowerF";
  CharCodes3[CharCodes3["UpperZ"] = 90] = "UpperZ";
  CharCodes3[CharCodes3["LowerZ"] = 122] = "LowerZ";
  CharCodes3[CharCodes3["LowerX"] = 120] = "LowerX";
  CharCodes3[CharCodes3["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes2 || (CharCodes2 = {}));
var State;
(function(State2) {
  State2[State2["Text"] = 1] = "Text";
  State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
  State2[State2["InTagName"] = 3] = "InTagName";
  State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
  State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
  State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
  State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
  State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
  State2[State2["InAttributeName"] = 9] = "InAttributeName";
  State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
  State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
  State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
  State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
  State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
  State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
  State2[State2["InDeclaration"] = 16] = "InDeclaration";
  State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
  State2[State2["BeforeComment"] = 18] = "BeforeComment";
  State2[State2["CDATASequence"] = 19] = "CDATASequence";
  State2[State2["DeclarationSequence"] = 20] = "DeclarationSequence";
  State2[State2["InSpecialComment"] = 21] = "InSpecialComment";
  State2[State2["InCommentLike"] = 22] = "InCommentLike";
  State2[State2["SpecialStartSequence"] = 23] = "SpecialStartSequence";
  State2[State2["InSpecialTag"] = 24] = "InSpecialTag";
  State2[State2["InPlainText"] = 25] = "InPlainText";
  State2[State2["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace(c) {
  return c === CharCodes2.Space || c === CharCodes2.NewLine || c === CharCodes2.Tab || c === CharCodes2.FormFeed || c === CharCodes2.CarriageReturn;
}
function isEndOfTagSection(c) {
  return c === CharCodes2.Slash || c === CharCodes2.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
  return c >= CharCodes2.LowerA && c <= CharCodes2.LowerZ || c >= CharCodes2.UpperA && c <= CharCodes2.UpperZ;
}
var QuoteType;
(function(QuoteType2) {
  QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
  QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
  QuoteType2[QuoteType2["Single"] = 2] = "Single";
  QuoteType2[QuoteType2["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
var Sequences = {
  Empty: new Uint8Array(0),
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 33, 62]),
  // `--!>`
  Doctype: new Uint8Array([100, 111, 99, 116, 121, 112, 101]),
  // `doctype`
  IframeEnd: new Uint8Array([60, 47, 105, 102, 114, 97, 109, 101]),
  // `</iframe`
  NoembedEnd: new Uint8Array([
    60,
    47,
    110,
    111,
    101,
    109,
    98,
    101,
    100
  ]),
  // `</noembed`
  NoframesEnd: new Uint8Array([
    60,
    47,
    110,
    111,
    102,
    114,
    97,
    109,
    101,
    115
  ]),
  // `</noframes`
  Plaintext: new Uint8Array([
    60,
    47,
    112,
    108,
    97,
    105,
    110,
    116,
    101,
    120,
    116
  ]),
  // `</plaintext`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ]),
  // `</textarea`
  XmpEnd: new Uint8Array([60, 47, 120, 109, 112])
  // `</xmp`
};
var specialStartSequences = /* @__PURE__ */ new Map([
  [Sequences.IframeEnd[2], Sequences.IframeEnd],
  [Sequences.NoembedEnd[2], Sequences.NoembedEnd],
  [Sequences.Plaintext[2], Sequences.Plaintext],
  [Sequences.ScriptEnd[2], Sequences.ScriptEnd],
  [Sequences.TitleEnd[2], Sequences.TitleEnd],
  [Sequences.XmpEnd[2], Sequences.XmpEnd]
]);
var Tokenizer = class {
  constructor({ xmlMode = false, decodeEntities: decodeEntities2 = true, recognizeSelfClosing = xmlMode }, cbs) {
    __publicField(this, "cbs");
    /** The current state the tokenizer is in. */
    __publicField(this, "state", State.Text);
    /** The read buffer. */
    __publicField(this, "buffer", "");
    /** The beginning of the section that is currently being read. */
    __publicField(this, "sectionStart", 0);
    /** The index within the buffer that we are currently looking at. */
    __publicField(this, "index", 0);
    /** The start of the last entity. */
    __publicField(this, "entityStart", 0);
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
    __publicField(this, "baseState", State.Text);
    /** For special parsing behavior inside of script and style tags. */
    __publicField(this, "isSpecial", false);
    /** Indicates whether the tokenizer has been paused. */
    __publicField(this, "running", true);
    /** The offset of the current buffer. */
    __publicField(this, "offset", 0);
    __publicField(this, "xmlMode");
    __publicField(this, "decodeEntities");
    __publicField(this, "recognizeSelfClosing");
    __publicField(this, "entityDecoder");
    __publicField(this, "currentSequence", Sequences.Empty);
    __publicField(this, "sequenceIndex", 0);
    this.cbs = cbs;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities2;
    this.recognizeSelfClosing = recognizeSelfClosing;
    this.entityDecoder = new EntityDecoder2(xmlMode ? xmlDecodeTree : htmlDecodeTree, (cp, consumed) => this.emitCodePoint(cp, consumed));
  }
  reset() {
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = State.Text;
    this.isSpecial = false;
    this.currentSequence = Sequences.Empty;
    this.sequenceIndex = 0;
    this.running = true;
    this.offset = 0;
  }
  write(chunk) {
    this.offset += this.buffer.length;
    this.buffer = chunk;
    this.parse();
  }
  end() {
    if (this.running)
      this.finish();
  }
  pause() {
    this.running = false;
  }
  resume() {
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      this.parse();
    }
  }
  stateText(c) {
    if (c === CharCodes2.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes2.Lt)) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = State.BeforeTagName;
      this.sectionStart = this.index;
    } else if (this.decodeEntities && c === CharCodes2.Amp) {
      this.startEntity();
    }
  }
  enterTagBody() {
    if (this.currentSequence === Sequences.Plaintext) {
      this.currentSequence = Sequences.Empty;
      this.state = State.InPlainText;
    } else if (this.isSpecial) {
      this.state = State.InSpecialTag;
      this.sequenceIndex = 0;
    } else {
      this.state = State.Text;
    }
  }
  /**
   * Match the opening tag name against an HTML text-only tag sequence.
   *
   * Some tags share an initial prefix (`script`/`style`, `title`/`textarea`,
   * `noembed`/`noframes`), so we may switch to an alternate sequence at the
   * first distinguishing byte.  On a successful full match we fall back to
   * the normal tag-name state; a later `>` will enter raw-text, RCDATA, or
   * plaintext mode based on `currentSequence` / `isSpecial`.
   * @param c Current character code point.
   */
  stateSpecialStartSequence(c) {
    const lower = c | 32;
    if (this.sequenceIndex < this.currentSequence.length) {
      if (lower === this.currentSequence[this.sequenceIndex]) {
        this.sequenceIndex++;
        return;
      }
      if (this.sequenceIndex === 3) {
        if (this.currentSequence === Sequences.ScriptEnd && lower === Sequences.StyleEnd[3]) {
          this.currentSequence = Sequences.StyleEnd;
          this.sequenceIndex = 4;
          return;
        }
        if (this.currentSequence === Sequences.TitleEnd && lower === Sequences.TextareaEnd[3]) {
          this.currentSequence = Sequences.TextareaEnd;
          this.sequenceIndex = 4;
          return;
        }
      } else if (this.sequenceIndex === 4 && this.currentSequence === Sequences.NoembedEnd && lower === Sequences.NoframesEnd[4]) {
        this.currentSequence = Sequences.NoframesEnd;
        this.sequenceIndex = 5;
        return;
      }
    } else if (isEndOfTagSection(c)) {
      this.sequenceIndex = 0;
      this.state = State.InTagName;
      this.stateInTagName(c);
      return;
    }
    this.isSpecial = false;
    this.currentSequence = Sequences.Empty;
    this.sequenceIndex = 0;
    this.state = State.InTagName;
    this.stateInTagName(c);
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = State.InCommentLike;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      if (this.xmlMode) {
        this.state = State.InDeclaration;
        this.stateInDeclaration(c);
      } else {
        this.state = State.InSpecialComment;
        this.stateInSpecialComment(c);
      }
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   * @param c Current character code point.
   * @returns Whether the character was found.
   */
  fastForwardTo(c) {
    while (++this.index < this.buffer.length + this.offset) {
      if (this.buffer.charCodeAt(this.index - this.offset) === c) {
        return true;
      }
    }
    this.index = this.buffer.length + this.offset - 1;
    return false;
  }
  /**
   * Emit a comment token and return to the text state.
   * @param offset Number of characters in the end sequence that have already been matched.
   */
  emitComment(offset) {
    this.cbs.oncomment(this.sectionStart, this.index, offset);
    this.sequenceIndex = 0;
    this.sectionStart = this.index + 1;
    this.state = State.Text;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   * @param c Current character code point.
   */
  stateInCommentLike(c) {
    if (!this.xmlMode && this.currentSequence === Sequences.CommentEnd && this.sequenceIndex <= 1 && /*
     * We're still at the very start of the comment: the only
     * characters consumed since `<!--` are the dashes that
     * advanced sequenceIndex (0 for `<!-->`, 1 for `<!--->`).
     */
    this.index === this.sectionStart + this.sequenceIndex && c === CharCodes2.Gt) {
      this.emitComment(this.sequenceIndex);
    } else if (this.currentSequence === Sequences.CommentEnd && this.sequenceIndex === 2 && c === CharCodes2.Gt) {
      this.emitComment(2);
    } else if (this.currentSequence === Sequences.CommentEnd && this.sequenceIndex === this.currentSequence.length - 1 && c !== CharCodes2.Gt) {
      this.sequenceIndex = Number(c === CharCodes2.Dash);
    } else if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index, 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index, 3);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = State.Text;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   * @param c Current character code point.
   */
  isTagStartChar(c) {
    return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
  }
  /**
   * Scan raw-text / RCDATA content for the matching end tag.
   *
   * For RCDATA tags (`<title>`, `<textarea>`) entities are decoded inline.
   * For raw-text tags (`<script>`, `<style>`, etc.) we fast-forward to `<`.
   * @param c Current character code point.
   */
  stateInSpecialTag(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (isEndOfTagSection(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.isSpecial = false;
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd) {
        if (this.decodeEntities && c === CharCodes2.Amp) {
          this.startEntity();
        }
      } else if (this.fastForwardTo(CharCodes2.Lt)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === CharCodes2.Lt);
    }
  }
  stateBeforeTagName(c) {
    if (c === CharCodes2.ExclamationMark) {
      this.state = State.BeforeDeclaration;
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes2.Questionmark) {
      if (this.xmlMode) {
        this.state = State.InProcessingInstruction;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      } else {
        this.state = State.InSpecialComment;
        this.sectionStart = this.index;
      }
    } else if (this.isTagStartChar(c)) {
      this.sectionStart = this.index;
      const special = this.xmlMode || this.cbs.isInForeignContext?.() ? void 0 : specialStartSequences.get(c | 32);
      if (special === void 0) {
        this.state = State.InTagName;
      } else {
        this.isSpecial = true;
        this.currentSequence = special;
        this.sequenceIndex = 3;
        this.state = State.SpecialStartSequence;
      }
    } else if (c === CharCodes2.Slash) {
      this.state = State.BeforeClosingTagName;
    } else {
      this.state = State.Text;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    }
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace(c)) {
      if (this.xmlMode) {
      } else {
        this.state = State.InSpecialComment;
        this.sectionStart = this.index;
      }
    } else if (c === CharCodes2.Gt) {
      this.state = State.Text;
      if (!this.xmlMode) {
        this.sectionStart = this.index + 1;
      }
    } else {
      this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (isEndOfTagSection(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.AfterClosingTagName;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttributeName(c) {
    if (c === CharCodes2.Gt) {
      this.cbs.onopentagend(this.index);
      this.enterTagBody();
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes2.Slash) {
      this.state = State.InSelfClosingTag;
    } else if (!isWhitespace(c)) {
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  /**
   * Handle `/` before `>` in an opening tag.
   *
   * In HTML mode, text-only tags ignore the self-closing flag and still enter
   * their raw-text/RCDATA/plaintext state unless self-closing tags are being
   * recognized. In XML mode, or for ordinary tags, the tokenizer returns to
   * regular text parsing after emitting the self-closing callback.
   * @param c Current character code point.
   */
  stateInSelfClosingTag(c) {
    if (c === CharCodes2.Gt) {
      this.cbs.onselfclosingtag(this.index);
      this.sectionStart = this.index + 1;
      if (!this.recognizeSelfClosing) {
        this.enterTagBody();
        return;
      }
      this.state = State.Text;
      this.isSpecial = false;
      this.currentSequence = Sequences.Empty;
    } else if (!isWhitespace(c)) {
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    }
  }
  stateInAttributeName(c) {
    if (c === CharCodes2.Eq || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.sectionStart = this.index;
      this.state = State.AfterAttributeName;
      this.stateAfterAttributeName(c);
    }
  }
  stateAfterAttributeName(c) {
    if (c === CharCodes2.Eq) {
      this.state = State.BeforeAttributeValue;
    } else if (c === CharCodes2.Slash || c === CharCodes2.Gt) {
      this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateBeforeAttributeValue(c) {
    if (c === CharCodes2.DoubleQuote) {
      this.state = State.InAttributeValueDq;
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes2.SingleQuote) {
      this.state = State.InAttributeValueSq;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this.index;
      this.state = State.InAttributeValueNq;
      this.stateInAttributeValueNoQuotes(c);
    }
  }
  handleInAttributeValue(c, quote) {
    if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(quote === CharCodes2.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
      this.state = State.BeforeAttributeName;
    } else if (this.decodeEntities && c === CharCodes2.Amp) {
      this.startEntity();
    }
  }
  stateInAttributeValueDoubleQuotes(c) {
    this.handleInAttributeValue(c, CharCodes2.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(c) {
    this.handleInAttributeValue(c, CharCodes2.SingleQuote);
  }
  stateInAttributeValueNoQuotes(c) {
    if (isWhitespace(c) || c === CharCodes2.Gt) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(QuoteType.Unquoted, this.index);
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    } else if (this.decodeEntities && c === CharCodes2.Amp) {
      this.startEntity();
    }
  }
  /**
   * Distinguish between CDATA, declarations, HTML comments, and HTML bogus
   * comments after `<!`.
   *
   * In HTML mode, only real comments and doctypes stay on declaration paths;
   * everything else becomes a bogus comment terminated by the next `>`.
   * @param c Current character code point.
   */
  stateBeforeDeclaration(c) {
    if (c === CharCodes2.OpeningSquareBracket) {
      this.state = State.CDATASequence;
      this.sequenceIndex = 0;
    } else if (this.xmlMode) {
      this.state = c === CharCodes2.Dash ? State.BeforeComment : State.InDeclaration;
    } else if ((c | 32) === Sequences.Doctype[0]) {
      this.state = State.DeclarationSequence;
      this.currentSequence = Sequences.Doctype;
      this.sequenceIndex = 1;
    } else if (c === CharCodes2.Gt) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes2.Dash) {
      this.state = State.BeforeComment;
    } else {
      this.state = State.InSpecialComment;
    }
  }
  /**
   * Continue matching `doctype` after `<!d`.
   *
   * A full `doctype` match stays on the declaration path; any other name falls
   * back to an HTML bogus comment, which matches browser behavior for
   * non-doctype `<!...>` constructs.
   * @param c Current character code point.
   */
  stateDeclarationSequence(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      this.state = State.InDeclaration;
      this.stateInDeclaration(c);
    } else if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (c === CharCodes2.Gt) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    } else {
      this.state = State.InSpecialComment;
    }
  }
  stateInDeclaration(c) {
    if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
      this.cbs.ondeclaration(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  /**
   * XML processing instructions (`<?...?>`).
   *
   * In HTML mode `<?` is routed to `InSpecialComment` instead, so this
   * state is only reachable in XML mode.
   * @param c Current character code point.
   */
  stateInProcessingInstruction(c) {
    if (c === CharCodes2.Questionmark) {
      this.sequenceIndex = 1;
    } else if (c === CharCodes2.Gt && this.sequenceIndex === 1) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index - 1);
      this.sequenceIndex = 0;
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    } else {
      this.sequenceIndex = Number(this.fastForwardTo(CharCodes2.Questionmark));
    }
  }
  stateBeforeComment(c) {
    if (c === CharCodes2.Dash) {
      this.state = State.InCommentLike;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 0;
      this.sectionStart = this.index + 1;
    } else if (this.xmlMode) {
      this.state = State.InDeclaration;
    } else if (c === CharCodes2.Gt) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    } else {
      this.state = State.InSpecialComment;
    }
  }
  stateInSpecialComment(c) {
    if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  startEntity() {
    this.baseState = this.state;
    this.state = State.InEntity;
    this.entityStart = this.index;
    this.entityDecoder.startEntity(this.xmlMode ? DecodingMode.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? DecodingMode.Legacy : DecodingMode.Attribute);
  }
  stateInEntity() {
    const indexInBuffer = this.index - this.offset;
    const length = this.entityDecoder.write(this.buffer, indexInBuffer);
    if (length >= 0) {
      this.state = this.baseState;
      if (length === 0) {
        this.index -= 1;
      }
    } else {
      if (indexInBuffer < this.buffer.length && this.buffer.charCodeAt(indexInBuffer) === CharCodes2.Amp) {
        this.state = this.baseState;
        this.index -= 1;
        return;
      }
      this.index = this.offset + this.buffer.length - 1;
    }
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.running && this.sectionStart !== this.index) {
      if (this.state === State.Text || this.state === State.InPlainText || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    while (this.shouldContinue()) {
      const c = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case State.Text: {
          this.stateText(c);
          break;
        }
        case State.InPlainText: {
          this.index = this.buffer.length + this.offset - 1;
          break;
        }
        case State.SpecialStartSequence: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case State.InSpecialTag: {
          this.stateInSpecialTag(c);
          break;
        }
        case State.CDATASequence: {
          this.stateCDATASequence(c);
          break;
        }
        case State.DeclarationSequence: {
          this.stateDeclarationSequence(c);
          break;
        }
        case State.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(c);
          break;
        }
        case State.InAttributeName: {
          this.stateInAttributeName(c);
          break;
        }
        case State.InCommentLike: {
          this.stateInCommentLike(c);
          break;
        }
        case State.InSpecialComment: {
          this.stateInSpecialComment(c);
          break;
        }
        case State.BeforeAttributeName: {
          this.stateBeforeAttributeName(c);
          break;
        }
        case State.InTagName: {
          this.stateInTagName(c);
          break;
        }
        case State.InClosingTagName: {
          this.stateInClosingTagName(c);
          break;
        }
        case State.BeforeTagName: {
          this.stateBeforeTagName(c);
          break;
        }
        case State.AfterAttributeName: {
          this.stateAfterAttributeName(c);
          break;
        }
        case State.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(c);
          break;
        }
        case State.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(c);
          break;
        }
        case State.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case State.AfterClosingTagName: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case State.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(c);
          break;
        }
        case State.InSelfClosingTag: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case State.InDeclaration: {
          this.stateInDeclaration(c);
          break;
        }
        case State.BeforeDeclaration: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case State.BeforeComment: {
          this.stateBeforeComment(c);
          break;
        }
        case State.InProcessingInstruction: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case State.InEntity: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    if (this.state === State.InEntity) {
      this.entityDecoder.end();
      this.state = this.baseState;
    }
    this.handleTrailingData();
    this.cbs.onend();
  }
  handleTrailingCommentLikeData(endIndex) {
    if (this.state !== State.InCommentLike) {
      return false;
    }
    if (this.currentSequence === Sequences.CdataEnd) {
      if (this.xmlMode) {
        if (this.sectionStart < endIndex) {
          this.cbs.oncdata(this.sectionStart, endIndex, 0);
        }
      } else {
        const cdataStart = this.sectionStart - Sequences.Cdata.length - 1;
        this.cbs.oncomment(cdataStart, endIndex, 0);
      }
    } else {
      const offset = this.xmlMode ? 0 : Math.min(this.sequenceIndex, Sequences.CommentEnd.length - 1);
      this.cbs.oncomment(this.sectionStart, endIndex, offset);
    }
    return true;
  }
  handleTrailingMarkupDeclaration(endIndex) {
    if (this.xmlMode) {
      switch (this.state) {
        case State.InSpecialComment:
        case State.BeforeComment:
        case State.CDATASequence:
        case State.DeclarationSequence:
        case State.InDeclaration: {
          this.cbs.ontext(this.sectionStart, endIndex);
          return true;
        }
        default: {
          return false;
        }
      }
    }
    switch (this.state) {
      case State.BeforeDeclaration:
      case State.InSpecialComment:
      case State.BeforeComment:
      case State.CDATASequence: {
        this.cbs.oncomment(this.sectionStart, endIndex, 0);
        return true;
      }
      case State.DeclarationSequence: {
        if (this.sequenceIndex !== Sequences.Doctype.length) {
          this.cbs.oncomment(this.sectionStart, endIndex, 0);
        }
        return true;
      }
      case State.InDeclaration: {
        return true;
      }
      default: {
        return false;
      }
    }
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length + this.offset;
    if (this.handleTrailingCommentLikeData(endIndex) || this.handleTrailingMarkupDeclaration(endIndex)) {
      return;
    }
    if (this.sectionStart >= endIndex) {
      return;
    }
    switch (this.state) {
      case State.InTagName:
      case State.BeforeAttributeName:
      case State.BeforeAttributeValue:
      case State.AfterAttributeName:
      case State.InAttributeName:
      case State.InAttributeValueSq:
      case State.InAttributeValueDq:
      case State.InAttributeValueNq:
      case State.InClosingTagName: {
        break;
      }
      default: {
        this.cbs.ontext(this.sectionStart, endIndex);
      }
    }
  }
  emitCodePoint(cp, consumed) {
    if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
      if (this.sectionStart < this.entityStart) {
        this.cbs.onattribdata(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + consumed;
      this.index = this.sectionStart - 1;
      this.cbs.onattribentity(cp);
    } else {
      if (this.sectionStart < this.entityStart) {
        this.cbs.ontext(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + consumed;
      this.index = this.sectionStart - 1;
      this.cbs.ontextentity(cp, this.sectionStart);
    }
  }
};

// node_modules/htmlparser2/dist/Parser.js
var { fromCodePoint } = String;
var formTags = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
var pTag = /* @__PURE__ */ new Set(["p"]);
var headingTags = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6", "p"]);
var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
var openImpliesClose = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["a", /* @__PURE__ */ new Set(["a"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", pTag],
  ["h1", headingTags],
  ["h2", headingTags],
  ["h3", headingTags],
  ["h4", headingTags],
  ["h5", headingTags],
  ["h6", headingTags],
  ["select", formTags],
  ["input", formTags],
  ["output", formTags],
  ["button", formTags],
  ["datalist", formTags],
  ["textarea", formTags],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", ddtTags],
  ["dt", ddtTags],
  ["address", pTag],
  ["article", pTag],
  ["aside", pTag],
  ["blockquote", pTag],
  ["details", pTag],
  ["div", pTag],
  ["dl", pTag],
  ["fieldset", pTag],
  ["figcaption", pTag],
  ["figure", pTag],
  ["footer", pTag],
  ["form", pTag],
  ["header", pTag],
  ["hr", pTag],
  ["main", pTag],
  ["nav", pTag],
  ["ol", pTag],
  ["pre", pTag],
  ["section", pTag],
  ["table", pTag],
  ["ul", pTag],
  ["rt", rtpTags],
  ["rp", rtpTags],
  ["tbody", tableSectionTags],
  ["tfoot", tableSectionTags]
]);
var DOCUMENT_TYPE = "doctype";
var voidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
var htmlIntegrationElements = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var svgTagNameAdjustments = /* @__PURE__ */ new Map([
  ["altglyph", "altGlyph"],
  ["altglyphdef", "altGlyphDef"],
  ["altglyphitem", "altGlyphItem"],
  ["animatecolor", "animateColor"],
  ["animatemotion", "animateMotion"],
  ["animatetransform", "animateTransform"],
  ["clippath", "clipPath"],
  ["feblend", "feBlend"],
  ["fecolormatrix", "feColorMatrix"],
  ["fecomponenttransfer", "feComponentTransfer"],
  ["fecomposite", "feComposite"],
  ["feconvolvematrix", "feConvolveMatrix"],
  ["fediffuselighting", "feDiffuseLighting"],
  ["fedisplacementmap", "feDisplacementMap"],
  ["fedistantlight", "feDistantLight"],
  ["fedropshadow", "feDropShadow"],
  ["feflood", "feFlood"],
  ["fefunca", "feFuncA"],
  ["fefuncb", "feFuncB"],
  ["fefuncg", "feFuncG"],
  ["fefuncr", "feFuncR"],
  ["fegaussianblur", "feGaussianBlur"],
  ["feimage", "feImage"],
  ["femerge", "feMerge"],
  ["femergenode", "feMergeNode"],
  ["femorphology", "feMorphology"],
  ["feoffset", "feOffset"],
  ["fepointlight", "fePointLight"],
  ["fespecularlighting", "feSpecularLighting"],
  ["fespotlight", "feSpotLight"],
  ["fetile", "feTile"],
  ["feturbulence", "feTurbulence"],
  ["foreignobject", "foreignObject"],
  ["glyphref", "glyphRef"],
  ["lineargradient", "linearGradient"],
  ["radialgradient", "radialGradient"],
  ["textpath", "textPath"]
]);
var ForeignContext;
(function(ForeignContext2) {
  ForeignContext2[ForeignContext2["None"] = 0] = "None";
  ForeignContext2[ForeignContext2["Svg"] = 1] = "Svg";
  ForeignContext2[ForeignContext2["MathML"] = 2] = "MathML";
})(ForeignContext || (ForeignContext = {}));
var reNameEnd = /\s|\//;
var Parser = class {
  constructor(cbs, options = {}) {
    __publicField(this, "options");
    /** The start index of the last event. */
    __publicField(this, "startIndex", 0);
    /** The end index of the last event. */
    __publicField(this, "endIndex", 0);
    /**
     * Store the start index of the current open tag,
     * so we can update the start index for attributes.
     */
    __publicField(this, "openTagStart", 0);
    __publicField(this, "tagname", "");
    __publicField(this, "attribname", "");
    __publicField(this, "attribvalue", "");
    __publicField(this, "attribs", null);
    __publicField(this, "stack", []);
    __publicField(this, "foreignContext");
    __publicField(this, "cbs");
    __publicField(this, "lowerCaseTagNames");
    __publicField(this, "lowerCaseAttributeNames");
    __publicField(this, "recognizeSelfClosing");
    /** We are parsing HTML. Inverse of the `xmlMode` option. */
    __publicField(this, "htmlMode");
    __publicField(this, "tokenizer");
    __publicField(this, "buffers", []);
    __publicField(this, "bufferOffset", 0);
    /** The index of the last written buffer. Used when resuming after a `pause()`. */
    __publicField(this, "writeIndex", 0);
    /** Indicates whether the parser has finished running / `.end` has been called. */
    __publicField(this, "ended", false);
    this.options = options;
    this.cbs = cbs ?? {};
    this.htmlMode = !this.options.xmlMode;
    this.lowerCaseTagNames = options.lowerCaseTags ?? this.htmlMode;
    this.lowerCaseAttributeNames = options.lowerCaseAttributeNames ?? this.htmlMode;
    this.recognizeSelfClosing = options.recognizeSelfClosing ?? !this.htmlMode;
    this.tokenizer = new (options.Tokenizer ?? Tokenizer)(this.options, this);
    this.foreignContext = [ForeignContext.None];
    this.cbs.onparserinit?.(this);
  }
  // Tokenizer event handlers
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  ontext(start, endIndex) {
    const data = this.getSlice(start, endIndex);
    this.endIndex = endIndex - 1;
    this.cbs.ontext?.(data);
    this.startIndex = endIndex;
  }
  /**
   * @param cp Current Unicode code point.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  ontextentity(cp, endIndex) {
    this.endIndex = endIndex - 1;
    this.cbs.ontext?.(fromCodePoint(cp));
    this.startIndex = endIndex;
  }
  /** @internal */
  isInForeignContext() {
    return this.foreignContext[0] !== ForeignContext.None;
  }
  /**
   * Checks if the current tag is a void element. Override this if you want
   * to specify your own additional void elements.
   * @param name Name of the pseudo selector.
   */
  isVoidElement(name) {
    return this.htmlMode && voidElements.has(name);
  }
  /**
   * Read a tag name from the buffer.
   *
   * When `lowerCaseTagNames` is enabled (the default in HTML mode), the name
   * is lowercased and may be adjusted for SVG casing or the `image` → `img`
   * alias.
   * @param start Start index of the tag name in the buffer.
   * @param endIndex End index of the tag name in the buffer.
   */
  readTagName(start, endIndex) {
    const name = this.lowerCaseTagNames ? this.getSlice(start, endIndex).toLowerCase() : this.getSlice(start, endIndex);
    if (!(this.lowerCaseTagNames && this.htmlMode)) {
      return name;
    }
    if (this.foreignContext[0] === ForeignContext.Svg) {
      return svgTagNameAdjustments.get(name) ?? name;
    }
    if (this.foreignContext.length > 1) {
      const adjusted = svgTagNameAdjustments.get(name);
      if (adjusted !== void 0 && this.stack.includes(adjusted)) {
        return adjusted;
      }
    }
    if (!this.isInForeignContext()) {
      return name === "image" ? "img" : name;
    }
    return name;
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onopentagname(start, endIndex) {
    this.endIndex = endIndex;
    this.emitOpenTag(this.readTagName(start, endIndex));
  }
  emitOpenTag(name) {
    this.openTagStart = this.startIndex;
    this.tagname = name;
    if (this.htmlMode && name === "form" && this.stack.includes("form")) {
      this.tagname = "";
      return;
    }
    const impliesClose = this.htmlMode && openImpliesClose.get(name);
    if (impliesClose) {
      while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
        this.popElement(true);
      }
    }
    if (!this.isVoidElement(name)) {
      this.stack.unshift(name);
      if (this.htmlMode) {
        if (name === "svg") {
          this.foreignContext.unshift(ForeignContext.Svg);
        } else if (name === "math") {
          this.foreignContext.unshift(ForeignContext.MathML);
        } else if (htmlIntegrationElements.has(name)) {
          this.foreignContext.unshift(ForeignContext.None);
        }
      }
    }
    this.cbs.onopentagname?.(name);
    if (this.cbs.onopentag)
      this.attribs = {};
  }
  endOpenTag(isImplied) {
    this.startIndex = this.openTagStart;
    if (this.attribs) {
      this.cbs.onopentag?.(this.tagname, this.attribs, isImplied);
      this.attribs = null;
    }
    if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
      this.cbs.onclosetag(this.tagname, true);
    }
    this.tagname = "";
  }
  /**
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onopentagend(endIndex) {
    this.endIndex = endIndex;
    this.endOpenTag(false);
    this.startIndex = endIndex + 1;
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onclosetag(start, endIndex) {
    this.endIndex = endIndex;
    const name = this.readTagName(start, endIndex);
    if (!this.isVoidElement(name)) {
      const pos = this.stack.indexOf(name);
      if (pos !== -1) {
        for (let index = 0; index < pos; index++) {
          this.popElement(true);
        }
        this.popElement(false);
      } else if (this.htmlMode && name === "p") {
        this.emitOpenTag("p");
        this.closeCurrentTag(true);
      }
    } else if (this.htmlMode && name === "br") {
      this.cbs.onopentagname?.("br");
      this.cbs.onopentag?.("br", {}, true);
      this.cbs.onclosetag?.("br", false);
    }
    this.startIndex = endIndex + 1;
  }
  /**
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onselfclosingtag(endIndex) {
    this.endIndex = endIndex;
    if (this.recognizeSelfClosing || this.isInForeignContext()) {
      this.closeCurrentTag(false);
      this.startIndex = endIndex + 1;
    } else {
      this.onopentagend(endIndex);
    }
  }
  /**
   * Pop the top element off the stack, emit a close event, and maintain
   * the foreign context stack.
   * @param implied Whether this close is implied (not from an explicit end tag).
   */
  popElement(implied) {
    const element = this.stack.shift();
    if (this.htmlMode && (foreignContextElements.has(element) || htmlIntegrationElements.has(element))) {
      this.foreignContext.shift();
    }
    this.cbs.onclosetag?.(element, implied);
  }
  closeCurrentTag(isOpenImplied) {
    const name = this.tagname;
    this.endOpenTag(isOpenImplied);
    if (this.stack[0] === name) {
      this.popElement(!isOpenImplied);
    }
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onattribname(start, endIndex) {
    this.startIndex = start;
    const name = this.getSlice(start, endIndex);
    this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onattribdata(start, endIndex) {
    this.attribvalue += this.getSlice(start, endIndex);
  }
  /**
   * @param cp Current Unicode code point.
   * @internal
   */
  onattribentity(cp) {
    this.attribvalue += fromCodePoint(cp);
  }
  /**
   * @param quote Quote type used for the current attribute.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onattribend(quote, endIndex) {
    this.endIndex = endIndex;
    this.cbs.onattribute?.(this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
    if (this.attribs && !Object.hasOwn(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribvalue = "";
  }
  getInstructionName(value) {
    const index = value.search(reNameEnd);
    let name = index < 0 ? value : value.substr(0, index);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    return name;
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  ondeclaration(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name = this.htmlMode ? this.lowerCaseTagNames ? DOCUMENT_TYPE : value.slice(0, DOCUMENT_TYPE.length) : this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @internal
   */
  onprocessinginstruction(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name = this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @param offset Offset applied when computing parser indices.
   * @internal
   */
  oncomment(start, endIndex, offset) {
    this.endIndex = endIndex;
    this.cbs.oncomment?.(this.getSlice(start, endIndex - offset));
    this.cbs.oncommentend?.();
    this.startIndex = endIndex + 1;
  }
  /**
   * @param start Start index for the current parser event.
   * @param endIndex End index for the current parser event.
   * @param offset Offset applied when computing parser indices.
   * @internal
   */
  oncdata(start, endIndex, offset) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex - offset);
    if (!this.htmlMode || this.options.recognizeCDATA) {
      this.cbs.oncdatastart?.();
      this.cbs.ontext?.(value);
      this.cbs.oncdataend?.();
    } else if (this.isInForeignContext()) {
      this.cbs.ontext?.(value);
    } else {
      this.cbs.oncomment?.(`[CDATA[${value}]]`);
      this.cbs.oncommentend?.();
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onend() {
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let index = 0; index < this.stack.length; index++) {
        this.cbs.onclosetag(this.stack[index], true);
      }
    }
    this.cbs.onend?.();
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    this.cbs.onreset?.();
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack.length = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    this.cbs.onparserinit?.(this);
    this.buffers.length = 0;
    this.foreignContext.length = 0;
    this.foreignContext.unshift(ForeignContext.None);
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   * @param data Document to parse.
   */
  parseComplete(data) {
    this.reset();
    this.end(data);
  }
  getSlice(start, end) {
    if (start === end) {
      return "";
    }
    while (start - this.bufferOffset >= this.buffers[0].length) {
      this.shiftBuffer();
    }
    let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
    while (end - this.bufferOffset > this.buffers[0].length) {
      this.shiftBuffer();
      slice += this.buffers[0].slice(0, end - this.bufferOffset);
    }
    return slice;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length;
    this.writeIndex--;
    this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   * @param chunk Chunk to parse.
   */
  write(chunk) {
    if (this.ended) {
      this.cbs.onerror?.(new Error(".write() after done!"));
      return;
    }
    this.buffers.push(chunk);
    if (this.tokenizer.running) {
      this.tokenizer.write(chunk);
      this.writeIndex++;
    }
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   * @param chunk Optional final chunk to parse.
   */
  end(chunk) {
    if (this.ended) {
      this.cbs.onerror?.(new Error(".end() after done!"));
      return;
    }
    if (chunk)
      this.write(chunk);
    this.ended = true;
    this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    this.tokenizer.resume();
    while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    }
    if (this.ended)
      this.tokenizer.end();
  }
};

// src/lib/hwp/htmlReader.ts
function parseToTree(html) {
  const root = { tag: "#root", attrs: {}, children: [], parent: null };
  let current = root;
  const voidTags = /* @__PURE__ */ new Set([
    "br",
    "img",
    "hr",
    "input",
    "meta",
    "link",
    "source",
    "track",
    "wbr",
    "col",
    "area",
    "base",
    "embed"
  ]);
  const skipTags = /* @__PURE__ */ new Set(["script", "style", "head", "noscript", "template"]);
  let inSkippedTag = 0;
  let inStyle = 0;
  const styleChunks = [];
  const parser = new Parser(
    {
      onopentag(name, attrs) {
        if (name === "style") inStyle++;
        if (skipTags.has(name)) {
          inSkippedTag++;
          return;
        }
        if (inSkippedTag > 0) return;
        const node = { tag: name, attrs, children: [], parent: current };
        current.children.push(node);
        if (!voidTags.has(name)) current = node;
      },
      ontext(text) {
        if (inStyle > 0) styleChunks.push(text);
        if (inSkippedTag > 0) return;
        current.children.push(text);
      },
      onclosetag(name) {
        if (name === "style") inStyle = Math.max(0, inStyle - 1);
        if (skipTags.has(name)) {
          inSkippedTag = Math.max(0, inSkippedTag - 1);
          return;
        }
        if (inSkippedTag > 0) return;
        if (voidTags.has(name)) return;
        if (current.tag === name && current.parent) {
          current = current.parent;
        }
      }
    },
    { decodeEntities: true, lowerCaseTags: true }
  );
  parser.write(html);
  parser.end();
  return { root, styleText: styleChunks.join("") };
}
function pxToHwpUnit(px) {
  return Math.round(px * 75);
}
function parseColorToHwp(v2) {
  const s = v2.trim().toLowerCase();
  let r, g, b2;
  const rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(s);
  if (rgb) {
    r = +rgb[1];
    g = +rgb[2];
    b2 = +rgb[3];
  } else {
    const hex = /^#([0-9a-f]{6})$/.exec(s) || /^#([0-9a-f]{3})$/.exec(s);
    if (!hex) return void 0;
    const h = hex[1].length === 3 ? hex[1].replace(/(.)/g, "$1$1") : hex[1];
    r = parseInt(h.slice(0, 2), 16);
    g = parseInt(h.slice(2, 4), 16);
    b2 = parseInt(h.slice(4, 6), 16);
  }
  return r & 255 | (g & 255) << 8 | (b2 & 255) << 16;
}
function inheritedFontPx(state) {
  return state.baseSize !== void 0 ? state.baseSize / 75 : void 0;
}
function parseInlineStyle(style, effectiveFontPx) {
  const out = {};
  if (!style) return out;
  let lineHeightRaw;
  let letterSpacingRaw;
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim().toLowerCase();
    const val = decl.slice(i + 1).trim();
    if (prop === "color") out.textColor = parseColorToHwp(val);
    else if (prop === "background-color" || prop === "background") {
      const c = parseColorToHwp(val);
      if (c !== void 0 && c !== 16777215) out.shadeColor = c;
    } else if (prop === "font-size") {
      const px = /([\d.]+)px/.exec(val);
      const pt2 = /([\d.]+)pt/.exec(val);
      if (px) out.baseSize = Math.round(parseFloat(px[1]) * 75);
      else if (pt2) out.baseSize = Math.round(parseFloat(pt2[1]) * 100);
    } else if (prop === "text-align") {
      const a = val.toLowerCase();
      if (a === "left") out.align = "left";
      else if (a === "right") out.align = "right";
      else if (a === "center") out.align = "center";
      else if (a === "justify") out.align = "justify";
    } else if (prop === "vertical-align") {
      const v2 = val.toLowerCase();
      if (v2 === "top") out.vAlign = "TOP";
      else if (v2 === "middle") out.vAlign = "CENTER";
      else if (v2 === "bottom") out.vAlign = "BOTTOM";
    } else if (prop === "line-height") lineHeightRaw = val;
    else if (prop === "letter-spacing") letterSpacingRaw = val;
  }
  const fontPx = out.baseSize !== void 0 ? out.baseSize / 75 : effectiveFontPx ?? 16;
  if (lineHeightRaw !== void 0) {
    const v2 = lineHeightRaw.toLowerCase();
    if (v2 !== "normal" && v2 !== "inherit" && v2 !== "") {
      const px = /^([\d.]+)px$/.exec(v2);
      const pct = /^([\d.]+)%$/.exec(v2);
      const num = /^([\d.]+)$/.exec(v2);
      let lhPct;
      if (num) lhPct = Math.round(parseFloat(num[1]) * 100);
      else if (pct) lhPct = Math.round(parseFloat(pct[1]));
      else if (px) lhPct = Math.round(parseFloat(px[1]) / fontPx * 100);
      if (lhPct !== void 0 && lhPct > 0) out.lineSpacing = lhPct;
    }
  }
  if (letterSpacingRaw !== void 0) {
    const v2 = letterSpacingRaw.toLowerCase();
    if (v2 !== "normal" && v2 !== "inherit" && v2 !== "") {
      const px = /^(-?[\d.]+)px$/.exec(v2);
      const em = /^(-?[\d.]+)em$/.exec(v2);
      let pctVal;
      if (em) pctVal = Math.round(parseFloat(em[1]) * 100);
      else if (px) pctVal = Math.round(parseFloat(px[1]) / fontPx * 100);
      if (pctVal !== void 0 && pctVal !== 0) out.letterSpacing = pctVal;
    }
  }
  return out;
}
function parsePaddingSides(style) {
  const out = {};
  if (!style) return out;
  const px = (v2) => {
    const m2 = /^([\d.]+)px$/.exec(v2.trim());
    if (m2) return pxToHwpUnit(parseFloat(m2[1]));
    return /^0$/.test(v2.trim()) ? 0 : void 0;
  };
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim().toLowerCase();
    const val = decl.slice(i + 1).trim();
    if (prop === "padding") {
      const t = val.split(/\s+/).map(px);
      if (t.length === 1) [out.top, out.right, out.bottom, out.left] = [t[0], t[0], t[0], t[0]];
      else if (t.length === 2) [out.top, out.right, out.bottom, out.left] = [t[0], t[1], t[0], t[1]];
      else if (t.length === 3) [out.top, out.right, out.bottom, out.left] = [t[0], t[1], t[2], t[1]];
      else if (t.length >= 4) [out.top, out.right, out.bottom, out.left] = [t[0], t[1], t[2], t[3]];
    } else if (prop === "padding-top") out.top = px(val);
    else if (prop === "padding-right") out.right = px(val);
    else if (prop === "padding-bottom") out.bottom = px(val);
    else if (prop === "padding-left") out.left = px(val);
  }
  return out;
}
function parsePadding(style) {
  const s = parsePaddingSides(style);
  if (s.top === void 0 && s.right === void 0 && s.bottom === void 0 && s.left === void 0) {
    return void 0;
  }
  return { left: s.left ?? 0, right: s.right ?? 0, top: s.top ?? 0, bottom: s.bottom ?? 0 };
}
function parseLayoutStyle(style) {
  if (!style) return null;
  let display;
  let flexDir;
  let gridCols;
  let gapHwp;
  const colGapPx = (v2) => {
    const toks = v2.split(/\s+/).filter(Boolean);
    const t = toks[1] ?? toks[0];
    const m2 = t ? /^([\d.]+)px$/.exec(t) : null;
    return m2 ? pxToHwpUnit(parseFloat(m2[1])) : void 0;
  };
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim().toLowerCase();
    const val = decl.slice(i + 1).trim().toLowerCase();
    if (prop === "display") display = val;
    else if (prop === "flex-direction") flexDir = val;
    else if (prop === "grid-template-columns") gridCols = val;
    else if (prop === "gap") gapHwp = colGapPx(val);
    else if (prop === "column-gap") gapHwp = colGapPx(val);
  }
  if (display === "grid") {
    const cols = gridCols ? gridCols.split(/\s+/).filter(Boolean) : [];
    if (cols.length < 2) return null;
    const templateColsHwp = cols.map((c) => {
      const m2 = /^([\d.]+)px$/.exec(c);
      return m2 ? Math.round(parseFloat(m2[1]) * 75) : null;
    });
    return { kind: "grid", templateColsHwp, gapHwp };
  }
  if (display === "flex" && (flexDir === void 0 || flexDir === "row")) {
    return { kind: "flexRow", gapHwp };
  }
  return null;
}
function parseCrossAlign(style) {
  if (!style) return void 0;
  let display;
  let flexDir;
  let alignItems;
  let justify;
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim().toLowerCase();
    const val = decl.slice(i + 1).trim().toLowerCase();
    if (prop === "display") display = val;
    else if (prop === "flex-direction") flexDir = val;
    else if (prop === "align-items") alignItems = val;
    else if (prop === "justify-content") justify = val;
  }
  if (display !== "flex") return void 0;
  const horiz = flexDir === "column" ? alignItems : justify;
  if (horiz === "flex-end" || horiz === "end" || horiz === "right") return "right";
  if (horiz === "center") return "center";
  return void 0;
}
var BORDER_WIDTH_MM_NUM = [
  0.1,
  0.12,
  0.15,
  0.2,
  0.25,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  1,
  1.5,
  2,
  3,
  4,
  5
];
function pxToWidthIndex(px) {
  if (!(px > 0)) return 0;
  const mm = px * 25.4 / 96;
  let best = 0;
  let bestD = Infinity;
  for (let i = 0; i < BORDER_WIDTH_MM_NUM.length; i++) {
    const d = Math.abs(BORDER_WIDTH_MM_NUM[i] - mm);
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  }
  return best;
}
function styleToLineType(s) {
  switch (s) {
    case "solid":
      return 1;
    case "dashed":
      return 2;
    case "dotted":
      return 3;
    case "double":
      return 8;
    default:
      return 0;
  }
}
function parseBorderStyle(style) {
  const all = {};
  const sides = {
    left: {},
    right: {},
    top: {},
    bottom: {}
  };
  const applyShorthand = (o, val) => {
    for (const tok of val.split(/\s+/).filter(Boolean)) {
      if (/^[\d.]+px$|^0$/.test(tok)) {
        const m2 = /([\d.]+)px/.exec(tok);
        o.w = m2 ? parseFloat(m2[1]) : 0;
      } else if (/^(solid|dashed|dotted|double|none|hidden)$/i.test(tok)) {
        o.s = tok.toLowerCase();
      } else {
        const c = parseColorToHwp(tok);
        if (c !== void 0) o.c = c;
      }
    }
  };
  if (style) {
    for (const decl of style.split(";")) {
      const i = decl.indexOf(":");
      if (i < 0) continue;
      const prop = decl.slice(0, i).trim().toLowerCase();
      const val = decl.slice(i + 1).trim();
      const sideM = /^border-(left|right|top|bottom)$/.exec(prop);
      const sidePropM = /^border-(left|right|top|bottom)-(width|style|color)$/.exec(prop);
      if (prop === "border") applyShorthand(all, val);
      else if (sideM) applyShorthand(sides[sideM[1]], val);
      else if (prop === "border-width") {
        const m2 = /([\d.]+)px/.exec(val);
        all.w = m2 ? parseFloat(m2[1]) : /^0$/.test(val) ? 0 : all.w;
      } else if (prop === "border-style") all.s = val.toLowerCase();
      else if (prop === "border-color") {
        const c = parseColorToHwp(val);
        if (c !== void 0) all.c = c;
      } else if (sidePropM) {
        const o = sides[sidePropM[1]];
        if (sidePropM[2] === "width") {
          const m2 = /([\d.]+)px/.exec(val);
          o.w = m2 ? parseFloat(m2[1]) : /^0$/.test(val) ? 0 : o.w;
        } else if (sidePropM[2] === "style") o.s = val.toLowerCase();
        else {
          const c = parseColorToHwp(val);
          if (c !== void 0) o.c = c;
        }
      }
    }
  }
  const none = () => ({ lineType: 0, widthIndex: 0, color: 0 });
  const build = (s) => {
    const w = s.w ?? all.w;
    const st2 = (s.s ?? all.s ?? "").toLowerCase();
    const c = s.c ?? all.c ?? 0;
    if (w === void 0 && st2 === "") return none();
    if (w !== void 0 && w <= 0) return none();
    if (st2 === "none" || st2 === "hidden") return none();
    const lineType = st2 === "" ? 1 : styleToLineType(st2) || 1;
    return { lineType, widthIndex: pxToWidthIndex(w ?? 1), color: c };
  };
  const borders = [
    build(sides.left),
    build(sides.right),
    build(sides.top),
    build(sides.bottom)
  ];
  const hasBorder = borders.some((b2) => b2.lineType > 0);
  return { borders, hasBorder };
}
var PAPER_SIZES = {
  A4: { width: 59528, height: 84186 },
  // 210×297 (기존 기본값 보존)
  A3: { width: 84189, height: 119055 },
  // 297×420
  A5: { width: 41953, height: 59528 },
  // 148×210
  B4: { width: 72850, height: 103181 },
  // JIS 257×364
  B5: { width: 51591, height: 72850 },
  // JIS 182×257
  Letter: { width: 61200, height: 79200 },
  // 8.5×11in
  Legal: { width: 61200, height: 100800 }
  // 8.5×14in
};
var A4_SHORT = PAPER_SIZES.A4.width;
var DEFAULT_PAGE_MARGIN = {
  left: 8504,
  right: 8504,
  top: 5668,
  bottom: 4252,
  header: 4252,
  footer: 4252,
  gutter: 0
};
var PAGE_CONTAINER_TAGS = /* @__PURE__ */ new Set(["div", "section", "article", "main", "body"]);
function elementChildren(node) {
  return node.children.filter((c) => typeof c !== "string");
}
function findPageContainer(root) {
  const top = elementChildren(root);
  const html = top.find((n) => n.tag === "html");
  const body = top.find((n) => n.tag === "body") ?? (html ? elementChildren(html).find((n) => n.tag === "body") : void 0);
  const scope = body ? elementChildren(body) : top;
  return scope.find((n) => PAGE_CONTAINER_TAGS.has(n.tag));
}
function parseContainerWidthHwp(style) {
  if (!style) return void 0;
  let maxW;
  let w;
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim().toLowerCase();
    const val = decl.slice(i + 1).trim();
    const m2 = /^([\d.]+)px$/.exec(val);
    const v2 = m2 ? pxToHwpUnit(parseFloat(m2[1])) : void 0;
    if (prop === "max-width") maxW = v2;
    else if (prop === "width") w = v2;
  }
  return maxW ?? w;
}
function mmToHwpUnit(mm) {
  return Math.round(mm * 7200 / 25.4);
}
function resolvePaperSize(size) {
  if (size === void 0) return { ...PAPER_SIZES.A4 };
  if (typeof size === "string") {
    const found = PAPER_SIZES[size];
    if (!found) {
      throw new Error(
        `\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC6A9\uC9C0 \uC885\uB958: "${size}". \uC0AC\uC6A9 \uAC00\uB2A5: ${Object.keys(PAPER_SIZES).join(", ")} \uB610\uB294 {width,height,unit} \uCEE4\uC2A4\uD140.`
      );
    }
    return { ...found };
  }
  const unit = size.unit ?? "mm";
  const conv = (v2) => unit === "mm" ? mmToHwpUnit(v2) : Math.round(v2);
  const width = conv(size.width);
  const height = conv(size.height);
  if (!(width > 0) || !(height > 0)) {
    throw new Error(`\uC6A9\uC9C0 \uCEE4\uC2A4\uD140 \uCE58\uC218\uB294 \uC591\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4: width=${size.width}, height=${size.height} (${unit}).`);
  }
  return { width, height };
}
function cssLenToMm(token) {
  const t = token.trim();
  if (/^0+(?:\.0+)?$/.test(t)) return 0;
  const m2 = /^([\d.]+)(mm|cm|in|pt|px)$/i.exec(t);
  if (!m2) return void 0;
  const v2 = parseFloat(m2[1]);
  switch (m2[2].toLowerCase()) {
    case "mm":
      return v2;
    case "cm":
      return v2 * 10;
    case "in":
      return v2 * 25.4;
    case "pt":
      return v2 * 25.4 / 72;
    case "px":
      return v2 * 25.4 / 96;
  }
  return void 0;
}
var PAPER_NAME_BY_LOWER = Object.fromEntries(
  Object.keys(PAPER_SIZES).map((n) => [n.toLowerCase(), n])
);
function parseAtPage(css) {
  if (!css) return void 0;
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out = {};
  const margins = {};
  let hasMargin = false;
  const setMargin = (side, mm) => {
    if (mm !== void 0) {
      margins[side] = mm;
      hasMargin = true;
    }
  };
  const re = /@page\s*\{([^{}]*)\}/gi;
  let block;
  let found = false;
  while ((block = re.exec(clean)) !== null) {
    found = true;
    for (const decl of block[1].split(";")) {
      const i = decl.indexOf(":");
      if (i < 0) continue;
      const prop = decl.slice(0, i).trim().toLowerCase();
      const val = decl.slice(i + 1).trim();
      if (!val) continue;
      if (prop === "size") {
        const lens = [];
        for (const tk of val.split(/\s+/)) {
          const low = tk.toLowerCase();
          if (low === "portrait" || low === "landscape") out.orientation = low;
          else if (low === "auto") continue;
          else if (PAPER_NAME_BY_LOWER[low]) out.size = PAPER_NAME_BY_LOWER[low];
          else {
            const mm = cssLenToMm(tk);
            if (mm !== void 0) lens.push(mm);
          }
        }
        if (lens.length >= 2) out.size = { width: lens[0], height: lens[1], unit: "mm" };
      } else if (prop === "margin") {
        const t = val.split(/\s+/).map(cssLenToMm);
        let top, right, bottom, left;
        if (t.length === 1) [top, right, bottom, left] = [t[0], t[0], t[0], t[0]];
        else if (t.length === 2) [top, right, bottom, left] = [t[0], t[1], t[0], t[1]];
        else if (t.length === 3) [top, right, bottom, left] = [t[0], t[1], t[2], t[1]];
        else [top, right, bottom, left] = [t[0], t[1], t[2], t[3]];
        setMargin("top", top);
        setMargin("right", right);
        setMargin("bottom", bottom);
        setMargin("left", left);
      } else if (prop === "margin-top") setMargin("top", cssLenToMm(val));
      else if (prop === "margin-right") setMargin("right", cssLenToMm(val));
      else if (prop === "margin-bottom") setMargin("bottom", cssLenToMm(val));
      else if (prop === "margin-left") setMargin("left", cssLenToMm(val));
    }
  }
  if (!found) return void 0;
  if (hasMargin) out.margins = margins;
  return out.size !== void 0 || out.orientation !== void 0 || out.margins !== void 0 ? out : void 0;
}
function mergePageOpt(api, css) {
  if (!api) return css;
  if (!css) return api;
  const am = api.margins;
  const cm = css.margins;
  const margins = am || cm ? {
    left: am?.left ?? cm?.left,
    right: am?.right ?? cm?.right,
    top: am?.top ?? cm?.top,
    bottom: am?.bottom ?? cm?.bottom,
    header: am?.header ?? cm?.header,
    footer: am?.footer ?? cm?.footer,
    gutter: am?.gutter ?? cm?.gutter
  } : void 0;
  return {
    size: api.size ?? css.size,
    orientation: api.orientation ?? css.orientation,
    margins
  };
}
function deriveHtmlPageDef(container, pageOpt) {
  const style = container?.attrs.style;
  const pad = parsePaddingSides(style);
  const bodyWidth = parseContainerWidthHwp(style);
  const hasPad = pad.left !== void 0 || pad.right !== void 0 || pad.top !== void 0 || pad.bottom !== void 0;
  const m2 = pageOpt?.margins;
  const hasMarginOpt = !!m2 && (m2.left !== void 0 || m2.right !== void 0 || m2.top !== void 0 || m2.bottom !== void 0 || m2.header !== void 0 || m2.footer !== void 0 || m2.gutter !== void 0);
  const hasOpt = !!pageOpt && (pageOpt.size !== void 0 || pageOpt.orientation !== void 0 || hasMarginOpt);
  if (!hasOpt && !hasPad && bodyWidth === void 0) return void 0;
  const paper = resolvePaperSize(pageOpt?.size);
  const optMm = (v2) => v2 === void 0 ? void 0 : mmToHwpUnit(v2);
  const left = optMm(m2?.left) ?? pad.left ?? DEFAULT_PAGE_MARGIN.left;
  const right = optMm(m2?.right) ?? pad.right ?? DEFAULT_PAGE_MARGIN.right;
  const top = optMm(m2?.top) ?? pad.top ?? DEFAULT_PAGE_MARGIN.top;
  const bottom = optMm(m2?.bottom) ?? pad.bottom ?? DEFAULT_PAGE_MARGIN.bottom;
  const header = optMm(m2?.header) ?? DEFAULT_PAGE_MARGIN.header;
  const footer = optMm(m2?.footer) ?? DEFAULT_PAGE_MARGIN.footer;
  const gutter = optMm(m2?.gutter) ?? DEFAULT_PAGE_MARGIN.gutter;
  const orientation = pageOpt?.orientation ?? "auto";
  let landscape;
  if (orientation === "portrait") landscape = false;
  else if (orientation === "landscape") landscape = true;
  else {
    const portraitUsable = paper.width - left - right;
    landscape = bodyWidth !== void 0 && bodyWidth > portraitUsable;
  }
  return {
    width: paper.width,
    height: paper.height,
    left,
    right,
    top,
    bottom,
    header,
    footer,
    gutter,
    landscape
  };
}
function htmlToHwpDocument(html, options) {
  const { root: tree, styleText } = parseToTree(html);
  const effPage = mergePageOpt(options?.page, parseAtPage(styleText));
  const ctx = {
    charShapeIds: /* @__PURE__ */ new Map(),
    binData: /* @__PURE__ */ new Map(),
    nextBinDataId: 1,
    imageResolver: options?.imageResolver,
    imageResolveCache: /* @__PURE__ */ new Map(),
    charShapes: [defaultCharShape2()],
    paraShapes: [defaultParaShape2()],
    paraShapeIds: /* @__PURE__ */ new Map([["default", 0]]),
    borderFills: [],
    // 커스텀 채우기만. 한컴 예약 기본(none/solid)은 빌더가 id 1·2 로 선두 출력.
    borderFillIds: /* @__PURE__ */ new Map()
  };
  ctx.charShapeIds.set("default", 0);
  const ids = {
    idDefault: 0,
    idBold: registerCharShape2(ctx, { ...defaultCharShape2(), bold: true }),
    idItalic: registerCharShape2(ctx, { ...defaultCharShape2(), italic: true }),
    idBoldItalic: registerCharShape2(ctx, { ...defaultCharShape2(), bold: true, italic: true }),
    idMono: registerCharShape2(ctx, {
      ...defaultCharShape2(),
      faceNameIds: { hangul: 2, latin: 2, hanja: 2, japanese: 2, other: 2, symbol: 2, user: 2 }
    }),
    idH1: registerCharShape2(ctx, { ...defaultCharShape2(), bold: true, baseSize: 1800 }),
    idH2: registerCharShape2(ctx, { ...defaultCharShape2(), bold: true, baseSize: 1600 }),
    idH3: registerCharShape2(ctx, { ...defaultCharShape2(), bold: true, baseSize: 1400 }),
    idHmin: registerCharShape2(ctx, { ...defaultCharShape2(), bold: true, baseSize: 1200 })
  };
  const paragraphs = [];
  const initialState = { bold: false, italic: false, mono: false };
  for (const child of tree.children) {
    paragraphs.push(...renderNode(child, ids, ctx, initialState, ""));
  }
  const filtered = paragraphs.filter(
    (p) => p.text.trim().length > 0 || p.controls.length > 0 || p.runs.some((r) => ctx.charShapes[r.charShapeId]?.borderFillId !== void 0)
  );
  const pageDef = deriveHtmlPageDef(findPageContainer(tree), effPage);
  return {
    header: defaultFileHeader2(),
    docInfo: {
      fontFaces: [
        [{ name: "\uD568\uCD08\uB86C\uBC14\uD0D5" }, { name: "\uB9D1\uC740 \uACE0\uB515" }, { name: "Courier New" }],
        [{ name: "Times New Roman" }],
        [],
        [],
        [],
        [],
        []
      ],
      charShapes: ctx.charShapes,
      paraShapes: ctx.paraShapes,
      styles: [{ name: "\uBC14\uD0D5\uAE00", engName: "Normal", paraShapeId: 0, charShapeId: 0 }],
      binData: [],
      borderFills: ctx.borderFills,
      numberings: [],
      bullets: [],
      tabDefs: []
    },
    sections: [{ paragraphs: filtered, ...pageDef ? { pageDef } : {} }],
    binData: ctx.binData
  };
}
function renderNode(node, ids, ctx, state, prefix) {
  if (typeof node === "string") {
    const text = collapseWhitespace(node);
    if (!text) return [];
    return [
      {
        paraShapeId: 0,
        styleId: 0,
        text: prefix + text,
        runs: prefix.length > 0 ? [
          { charShapeId: ids.idDefault, text: prefix },
          { charShapeId: pickInlineId(ids, state), text }
        ] : [{ charShapeId: pickInlineId(ids, state), text }],
        controls: []
      }
    ];
  }
  const tag = node.tag.toLowerCase();
  switch (tag) {
    case "div":
    case "section":
    case "article": {
      const incomingAlign = state.inheritAlign;
      const baseState = { ...state, inheritAlign: void 0 };
      const layout = parseLayoutStyle(node.attrs.style);
      if (layout && isLayoutMultiColumn(node, layout)) {
        return [collectDivColumnsAsParagraph(node, layout, ids, ctx, baseState)];
      }
      if (layout && isInlineWidthRow(node, layout)) {
        return [collectInlineSpansAsRowTable(node, layout, ids, ctx, baseState, incomingAlign)];
      }
      const crossAlign = parseCrossAlign(node.attrs.style);
      const childState = crossAlign ? { ...baseState, inheritAlign: crossAlign } : baseState;
      return renderNodeChildren(node, ids, ctx, childState, prefix);
    }
    case "p":
      return renderNodeChildren(node, ids, ctx, state, prefix);
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6": {
      const depth = Number(tag[1]);
      const headingSize = depth === 1 ? 1800 : depth === 2 ? 1600 : depth === 3 ? 1400 : 1200;
      const hStyle = parseInlineStyle(node.attrs.style, headingSize / 75);
      const baseShapeId = hStyle.textColor !== void 0 ? registerCharShape2(ctx, {
        ...defaultCharShape2(),
        bold: true,
        baseSize: headingSize,
        textColor: hStyle.textColor
      }) : depth === 1 ? ids.idH1 : depth === 2 ? ids.idH2 : depth === 3 ? ids.idH3 : ids.idHmin;
      const runs = collectInlineRuns(node, ids, ctx, state, baseShapeId);
      const text = runsToText2(runs);
      if (!text) return [];
      const hBfId = hStyle.shadeColor !== void 0 ? registerBorderFill(ctx, hStyle.shadeColor, false) : void 0;
      return [
        {
          paraShapeId: hStyle.align !== void 0 || hBfId !== void 0 || hStyle.lineSpacing !== void 0 ? registerParaShape(ctx, hStyle.align ?? "justify", hBfId, hStyle.lineSpacing) : 0,
          styleId: 0,
          text,
          runs,
          controls: []
        }
      ];
    }
    case "ul":
    case "ol": {
      const out = [];
      let idx = 1;
      for (const child of node.children) {
        if (typeof child === "string") continue;
        if (child.tag !== "li") continue;
        const liPrefix = tag === "ul" ? "- " : `${idx}. `;
        const inner = renderNodeChildren(child, ids, ctx, state, liPrefix);
        if (inner.length === 0) {
          out.push({
            paraShapeId: 0,
            styleId: 0,
            text: liPrefix,
            runs: [{ charShapeId: ids.idDefault, text: liPrefix }],
            controls: []
          });
        } else {
          out.push(...inner);
        }
        idx++;
      }
      return out;
    }
    case "blockquote": {
      const inner = renderNodeChildren(node, ids, ctx, state, "");
      return inner.map((p) => {
        const text = `> ${p.text}`;
        const runs = [
          { charShapeId: p.runs[0]?.charShapeId ?? ids.idDefault, text: "> " },
          ...p.runs
        ];
        return { ...p, text, runs };
      });
    }
    case "table": {
      return [collectTableParagraph(node, ids, ctx)];
    }
    case "br":
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: "",
          runs: [],
          controls: []
        }
      ];
    case "hr":
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: "\u2500\u2500\u2500\u2500\u2500",
          runs: [{ charShapeId: ids.idDefault, text: "\u2500\u2500\u2500\u2500\u2500" }],
          controls: []
        }
      ];
    case "pre": {
      const ps = parseInlineStyle(node.attrs.style, inheritedFontPx(state));
      const border = parseBorderStyle(node.attrs.style);
      const padding = parsePadding(node.attrs.style);
      const baseState = { bold: false, italic: false, mono: true };
      if (ps.baseSize !== void 0) baseState.baseSize = ps.baseSize;
      if (ps.textColor !== void 0) baseState.textColor = ps.textColor;
      const leftPara = registerParaShape(ctx, "left");
      const lines = extractPreLines(node, ids, ctx, baseState);
      const codeParas = (lines.length > 0 ? lines : [[]]).map((runs) => ({
        paraShapeId: leftPara,
        styleId: 0,
        text: runsToText2(runs),
        runs,
        controls: []
      }));
      const bg = ps.shadeColor;
      let borderFillId;
      if (border.hasBorder) borderFillId = registerBorderFillEx(ctx, border.borders, bg);
      else if (bg !== void 0) borderFillId = registerBorderFill(ctx, bg, false);
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: "",
          runs: [],
          controls: [
            {
              kind: "table",
              rowCount: 1,
              colCount: 1,
              borderless: !border.hasBorder,
              cells: [
                {
                  col: 0,
                  row: 0,
                  colSpan: 1,
                  rowSpan: 1,
                  borderFillId,
                  cellMargin: padding,
                  vertAlign: "TOP",
                  paragraphs: codeParas
                }
              ]
            }
          ]
        }
      ];
    }
    case "img": {
      const ctrl = imageNodeToControl(node, ctx);
      if (!ctrl) return [];
      return [
        {
          paraShapeId: 0,
          styleId: 0,
          text: "",
          runs: [],
          controls: [ctrl]
        }
      ];
    }
    case "html":
    case "body":
    case "main":
    case "header":
    case "footer":
    case "nav":
    case "aside":
    case "figure":
    case "figcaption":
      return renderNodeChildren(node, ids, ctx, state, prefix);
    default:
      return renderNodeChildren(node, ids, ctx, state, prefix);
  }
}
function renderNodeChildren(node, ids, ctx, state, prefix) {
  const ownFs = parseInlineStyle(node.attrs.style).baseSize;
  const childState = ownFs !== void 0 ? { ...state, baseSize: ownFs } : state;
  const allInline = node.children.every((c) => typeof c === "string" || isInlineTag(c.tag));
  if (allInline) {
    const runs = collectInlineRuns(node, ids, ctx, childState);
    const text = runsToText2(runs);
    const controls = collectInlineControls(node, ctx);
    if (!text && controls.length === 0) return [];
    const ownStyle = parseInlineStyle(node.attrs.style, inheritedFontPx(state));
    const align = ownStyle.align;
    const blockBg = !isInlineTag(node.tag) ? ownStyle.shadeColor : void 0;
    const bfId = blockBg !== void 0 ? registerBorderFill(ctx, blockBg, false) : void 0;
    return [
      {
        paraShapeId: align !== void 0 || bfId !== void 0 || ownStyle.lineSpacing !== void 0 ? registerParaShape(ctx, align ?? "justify", bfId, ownStyle.lineSpacing) : 0,
        styleId: 0,
        text: prefix + text,
        runs: prefix.length > 0 ? [{ charShapeId: ids.idDefault, text: prefix }, ...runs] : runs,
        controls
      }
    ];
  }
  const out = [];
  let blockPrefix = prefix;
  for (const child of node.children) {
    out.push(...renderNode(child, ids, ctx, childState, blockPrefix));
    blockPrefix = "";
  }
  return out;
}
function isInlineTag(tag) {
  return [
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "del",
    "ins",
    "img"
  ].includes(tag);
}
function collectInlineRuns(node, ids, ctx, state, baseId) {
  const runs = [];
  walkInline2(node, ids, ctx, state, runs, baseId ?? null);
  return mergeRuns2(runs);
}
function walkInline2(node, ids, ctx, state, runs, baseId) {
  if (typeof node === "string") {
    const text = collapseWhitespace(node);
    if (text.length === 0) return;
    runs.push({
      charShapeId: baseId !== null ? baseId : resolveInlineCharShape(ids, ctx, state),
      text
    });
    return;
  }
  const tag = node.tag.toLowerCase();
  if (tag === "img") {
    const alt = node.attrs.alt;
    if (alt && !canResolveImage(node, ctx)) {
      runs.push({ charShapeId: resolveInlineCharShape(ids, ctx, state), text: alt });
    }
    return;
  }
  if (tag === "br") {
    runs.push({ charShapeId: resolveInlineCharShape(ids, ctx, state), text: "\n" });
    return;
  }
  let nextState = state;
  if (tag === "strong" || tag === "b") nextState = { ...nextState, bold: true };
  if (tag === "em" || tag === "i") nextState = { ...nextState, italic: true };
  if (tag === "code" || tag === "samp" || tag === "kbd") nextState = { ...nextState, mono: true };
  const st2 = parseInlineStyle(node.attrs.style, inheritedFontPx(state));
  if (st2.textColor !== void 0) nextState = { ...nextState, textColor: st2.textColor };
  if (st2.shadeColor !== void 0 && isInlineTag(tag)) nextState = { ...nextState, shadeColor: st2.shadeColor };
  if (st2.baseSize !== void 0) nextState = { ...nextState, baseSize: st2.baseSize };
  if (st2.letterSpacing !== void 0) nextState = { ...nextState, letterSpacing: st2.letterSpacing };
  const ib = isInlineTag(tag) ? parseBorderStyle(node.attrs.style) : { hasBorder: false, borders: null };
  if (ib.hasBorder) {
    const bfId = registerBorderFillEx(ctx, ib.borders, void 0);
    if (bfId !== void 0) nextState = { ...nextState, borderFillId: bfId };
  }
  const before = runs.length;
  for (const child of node.children) {
    walkInline2(child, ids, ctx, nextState, runs, baseId);
  }
  if (ib.hasBorder && runs.length === before) {
    runs.push({ charShapeId: resolveInlineCharShape(ids, ctx, nextState), text: "\u3000\u3000" });
  }
}
function collectInlineControls(node, ctx) {
  const out = [];
  const visit = (n) => {
    if (typeof n === "string") return;
    if (n.tag === "img") {
      const ctrl = imageNodeToControl(n, ctx);
      if (ctrl) out.push(ctrl);
      return;
    }
    for (const c of n.children) visit(c);
  };
  if (node.tag === "img") {
    const ctrl = imageNodeToControl(node, ctx);
    return ctrl ? [ctrl] : [];
  }
  for (const c of node.children) visit(c);
  return out;
}
function isLayoutMultiColumn(node, layout) {
  const blockChildren = node.children.filter(
    (c) => typeof c !== "string" && !isInlineTag(c.tag)
  );
  if (blockChildren.length < 2) return false;
  const hasMeaningfulInline = node.children.some(
    (c) => typeof c === "string" ? collapseWhitespace(c).length > 0 : isInlineTag(c.tag)
  );
  if (hasMeaningfulInline) return false;
  if (layout.kind === "grid" && (layout.templateColsHwp?.length ?? 0) < 2) return false;
  return true;
}
function layoutColWidths(layout, cols) {
  const t = layout.templateColsHwp;
  if (layout.kind === "grid" && t && t.length === cols && t.every((v2) => v2 !== null && v2 > 0)) {
    return t;
  }
  return void 0;
}
function collectDivColumnsAsParagraph(container, layout, ids, ctx, state) {
  const blockChildren = container.children.filter(
    (c) => typeof c !== "string" && !isInlineTag(c.tag)
  );
  const cols = Math.max(
    1,
    layout.kind === "grid" ? layout.templateColsHwp?.length ?? blockChildren.length : blockChildren.length
  );
  const rows = Math.max(1, Math.ceil(blockChildren.length / cols));
  const emptyPara = () => ({
    paraShapeId: 0,
    styleId: 0,
    text: "",
    runs: [],
    controls: []
  });
  const cells = [];
  for (let idx = 0; idx < rows * cols; idx++) {
    const col = idx % cols;
    const row = Math.floor(idx / cols);
    const child = blockChildren[idx];
    const paragraphs = child ? renderNode(child, ids, ctx, state, "") : [];
    const border = child ? parseBorderStyle(child.attrs.style) : { hasBorder: false, borders: null };
    const borderFillId = border.hasBorder ? registerBorderFillEx(ctx, border.borders, void 0) : void 0;
    const cellMargin = child ? parsePadding(child.attrs.style) : void 0;
    const vertAlign = (child ? parseInlineStyle(child.attrs.style).vAlign : void 0) ?? "TOP";
    cells.push({
      col,
      row,
      colSpan: 1,
      rowSpan: 1,
      borderFillId,
      cellMargin,
      vertAlign,
      paragraphs: paragraphs.length > 0 ? paragraphs : [emptyPara()]
    });
  }
  return {
    paraShapeId: 0,
    styleId: 0,
    text: "",
    runs: [],
    tightTableAnchor: true,
    // HTML 표앵커: 표 위 빈 줄 최소화(빌더 Fix B)
    controls: [
      {
        kind: "table",
        rowCount: rows,
        colCount: cols,
        cells,
        colWidths: layoutColWidths(layout, cols),
        borderless: true,
        cellSpacing: layout.gapHwp
      }
    ]
  };
}
function cssProp(style, prop) {
  if (!style) return void 0;
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    if (decl.slice(0, i).trim().toLowerCase() === prop) return decl.slice(i + 1).trim();
  }
  return void 0;
}
function nodeText(node) {
  if (typeof node === "string") return node;
  let s = "";
  for (const c of node.children) s += nodeText(c);
  return s;
}
function isInlineWidthRow(node, layout) {
  if (layout.kind !== "flexRow" && layout.kind !== "grid") return false;
  if (node.children.some((c) => typeof c !== "string" && !isInlineTag(c.tag))) return false;
  if (node.children.some((c) => typeof c === "string" && c.trim().length > 0)) return false;
  const spans = node.children.filter(
    (c) => typeof c !== "string" && isInlineTag(c.tag) && c.tag.toLowerCase() !== "br"
  );
  if (spans.length < 2) return false;
  const hasWidth = spans.some((s) => {
    const w = parseLengthPxPct(cssProp(s.attrs.style, "width"));
    return w !== void 0 && !w.pct && w.v > 0;
  });
  const hasSeal = spans.some(
    (s) => parseBorderStyle(s.attrs.style).hasBorder && collapseWhitespace(nodeText(s)).length === 0
  );
  return hasWidth || hasSeal;
}
function hasBoldTag(node) {
  for (const c of node.children) {
    if (typeof c === "string") continue;
    const t = c.tag.toLowerCase();
    if (t === "strong" || t === "b") return true;
    if (hasBoldTag(c)) return true;
  }
  return false;
}
function estTextWidthHwp(span) {
  const text = nodeText(span);
  if (!text.trim()) return 0;
  const fontPx = parseLengthPxPct(cssProp(span.attrs.style, "font-size"))?.v ?? 16;
  const fw = cssProp(span.attrs.style, "font-weight");
  const bold = fw !== void 0 && (fw === "bold" || Number(fw) >= 600) || hasBoldTag(span);
  let w = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    w += code >= 4352 ? fontPx : fontPx * 0.55;
  }
  if (bold) w *= 1.08;
  return pxToHwpUnit(w);
}
function collectInlineSpansAsRowTable(container, layout, ids, ctx, state, incomingAlign) {
  const spans = container.children.filter(
    (c) => typeof c !== "string" && isInlineTag(c.tag) && c.tag.toLowerCase() !== "br"
  );
  const cols = Math.max(1, spans.length);
  const cellState = { ...state, inheritAlign: void 0 };
  const emptyPara = () => ({ paraShapeId: 0, styleId: 0, text: "", runs: [], controls: [] });
  const cellLs = parseInlineStyle(container.attrs.style, inheritedFontPx(state)).lineSpacing;
  const cellParaId = cellLs !== void 0 ? registerParaShape(ctx, "justify", void 0, cellLs) : 0;
  const cells = [];
  const colWidths = [];
  let allHaveWidth = true;
  spans.forEach((span, idx) => {
    const border = parseBorderStyle(span.attrs.style);
    const borderFillId = border.hasBorder ? registerBorderFillEx(ctx, border.borders, void 0) : void 0;
    const controls = collectInlineControls(span, ctx);
    const isEmptyBordered = border.hasBorder && controls.length === 0 && collapseWhitespace(nodeText(span)).length === 0;
    const runs = isEmptyBordered ? [] : collectInlineRuns(span, ids, ctx, cellState);
    const para = runs.length > 0 || controls.length > 0 ? { paraShapeId: cellParaId, styleId: 0, text: runsToText2(runs), runs, controls } : emptyPara();
    const w = parseLengthPxPct(cssProp(span.attrs.style, "width"));
    const designW = w && !w.pct && w.v > 0 ? pxToHwpUnit(w.v) : 0;
    const minW = isEmptyBordered ? 0 : estTextWidthHwp(span);
    const colW = Math.max(designW, minW);
    if (colW <= 0) allHaveWidth = false;
    colWidths.push(colW);
    cells.push({
      col: idx,
      row: 0,
      colSpan: 1,
      rowSpan: 1,
      borderFillId,
      cellMargin: { left: 0, right: 0, top: 0, bottom: 0 },
      vertAlign: "CENTER",
      paragraphs: [para]
    });
  });
  const rowAlign = incomingAlign ?? parseCrossAlign(container.attrs.style);
  const wrapParaId = rowAlign ? registerParaShape(ctx, rowAlign) : 0;
  return {
    paraShapeId: wrapParaId,
    styleId: 0,
    text: "",
    runs: [],
    tightTableAnchor: true,
    // HTML 표앵커: 표 위 빈 줄 최소화(빌더 Fix B)
    controls: [
      {
        kind: "table",
        rowCount: 1,
        colCount: cols,
        cells,
        colWidths: allHaveWidth ? colWidths : void 0,
        borderless: true,
        cellSpacing: layout.gapHwp,
        fitContent: true
      }
    ]
  };
}
function collectTableParagraph(table, ids, ctx) {
  const trs = [];
  const collectTrs = (n) => {
    for (const c of n.children) {
      if (typeof c === "string") continue;
      if (c.tag === "tr") trs.push(c);
      else if (c.tag === "thead" || c.tag === "tbody" || c.tag === "tfoot") collectTrs(c);
    }
  };
  collectTrs(table);
  const tableBorder = parseBorderStyle(table.attrs.style);
  let maxCols = 0;
  const occupied = /* @__PURE__ */ new Set();
  const tcs = [];
  for (let r = 0; r < trs.length; r++) {
    let col = 0;
    for (const c of trs[r].children) {
      if (typeof c === "string") continue;
      if (c.tag !== "td" && c.tag !== "th") continue;
      while (occupied.has(`${r},${col}`)) col++;
      const colSpan = Math.max(1, Number(c.attrs.colspan ?? "1") || 1);
      const rowSpan = Math.max(1, Number(c.attrs.rowspan ?? "1") || 1);
      tcs.push({ row: r, col, isHeader: c.tag === "th", node: c, colSpan, rowSpan });
      for (let dr = 0; dr < rowSpan; dr++) {
        for (let dc = 0; dc < colSpan; dc++) {
          occupied.add(`${r + dr},${col + dc}`);
        }
      }
      col += colSpan;
      if (col > maxCols) maxCols = col;
    }
  }
  const cells = tcs.map(({ row, col, isHeader, node, colSpan, rowSpan }) => {
    const runs = collectInlineRuns(node, ids, ctx, { bold: isHeader, italic: false, mono: false });
    const cellStyle = parseInlineStyle(node.attrs.style);
    const cellBg = cellStyle.shadeColor;
    const cb = parseBorderStyle(node.attrs.style);
    let borderFillId;
    if (cb.hasBorder) borderFillId = registerBorderFillEx(ctx, cb.borders, cellBg);
    else if (cellBg !== void 0) borderFillId = registerBorderFill(ctx, cellBg, false);
    else borderFillId = void 0;
    const cellMargin = parsePadding(node.attrs.style);
    const vertAlign = cellStyle.vAlign;
    const cellPid = cellStyle.align !== void 0 || cellStyle.lineSpacing !== void 0 ? registerParaShape(ctx, cellStyle.align ?? "justify", void 0, cellStyle.lineSpacing) : 0;
    return {
      col,
      row,
      colSpan,
      rowSpan,
      borderFillId,
      cellMargin,
      vertAlign,
      paragraphs: [
        {
          paraShapeId: cellPid,
          styleId: 0,
          text: runsToText2(runs),
          runs,
          // 24y: td/th 안 <img> 를 그림 컨트롤로 승격(종전 빈 배열 → BinData 등록조차 안 돼 유실).
          controls: collectInlineControls(node, ctx)
        }
      ]
    };
  });
  return {
    paraShapeId: 0,
    styleId: 0,
    text: "",
    runs: [],
    tightTableAnchor: true,
    // HTML 표앵커: 표 위 빈 줄 최소화(빌더 Fix B)
    controls: [
      { kind: "table", rowCount: trs.length, colCount: maxCols, cells, borderless: !tableBorder.hasBorder }
    ]
  };
}
function parseLengthPxPct(val) {
  if (!val) return void 0;
  const s = val.trim();
  let m2 = /^([\d.]+)px$/.exec(s);
  if (m2) return { v: parseFloat(m2[1]), pct: false };
  m2 = /^([\d.]+)%$/.exec(s);
  if (m2) return { v: parseFloat(m2[1]), pct: true };
  m2 = /^([\d.]+)$/.exec(s);
  if (m2) return { v: parseFloat(m2[1]), pct: false };
  return void 0;
}
function parseImgSize(node) {
  const style = node.attrs.style ?? "";
  const styleVal = (prop) => {
    for (const decl of style.split(";")) {
      const i = decl.indexOf(":");
      if (i < 0) continue;
      if (decl.slice(0, i).trim().toLowerCase() === prop) return decl.slice(i + 1).trim();
    }
    return void 0;
  };
  const width = parseLengthPxPct(styleVal("width")) ?? parseLengthPxPct(node.attrs.width);
  const height = parseLengthPxPct(styleVal("height")) ?? parseLengthPxPct(node.attrs.height);
  return { width, height };
}
function resolveImageSrc(src, ctx) {
  if (!src) return null;
  const hit = ctx.imageResolveCache.get(src);
  if (hit !== void 0) return hit;
  const resolved = ctx.imageResolver?.(src) ?? null;
  ctx.imageResolveCache.set(src, resolved);
  return resolved;
}
function canResolveImage(node, ctx) {
  const src = node.attrs.src ?? "";
  if (!src) return false;
  if (/^data:[^;]+;base64,/i.test(src)) return true;
  const resolved = resolveImageSrc(src, ctx);
  return !!resolved && resolved.data.length > 0;
}
function imageNodeToControl(node, ctx) {
  const src = node.attrs.src ?? "";
  const size = parseImgSize(node);
  const match = /^data:([^;]+);base64,(.*)$/i.exec(src);
  if (!match) {
    const resolved = resolveImageSrc(src, ctx);
    if (resolved && resolved.data.length > 0) {
      const id2 = ctx.nextBinDataId++;
      ctx.binData.set(id2, { data: resolved.data, extension: resolved.extension.toLowerCase() });
      return { kind: "picture", binDataId: id2, ...size };
    }
    return null;
  }
  const mime = match[1].toLowerCase();
  const ext = mime === "image/png" ? "png" : mime === "image/jpeg" ? "jpg" : mime === "image/gif" ? "gif" : mime === "image/bmp" ? "bmp" : "bin";
  let bytes;
  try {
    if (typeof Buffer !== "undefined") {
      bytes = new Uint8Array(Buffer.from(match[2], "base64"));
    } else {
      const bin = globalThis.atob?.(match[2]) ?? "";
      bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    }
  } catch {
    return null;
  }
  const id = ctx.nextBinDataId++;
  ctx.binData.set(id, { data: bytes, extension: ext });
  return { kind: "picture", binDataId: id, ...size };
}
function extractPreLines(node, ids, ctx, baseState) {
  const lines = [[]];
  const pushText = (text, state) => {
    const segs = text.split("\n");
    for (let i = 0; i < segs.length; i++) {
      if (i > 0) lines.push([]);
      if (segs[i].length > 0) {
        lines[lines.length - 1].push({
          charShapeId: resolveInlineCharShape(ids, ctx, state),
          text: segs[i]
        });
      }
    }
  };
  const visit = (n, state) => {
    if (typeof n === "string") {
      pushText(n, state);
      return;
    }
    const tag = n.tag.toLowerCase();
    if (tag === "br") {
      lines.push([]);
      return;
    }
    let next = state;
    if (tag === "strong" || tag === "b") next = { ...next, bold: true };
    if (tag === "em" || tag === "i") next = { ...next, italic: true };
    const st2 = parseInlineStyle(n.attrs.style);
    if (st2.textColor !== void 0) next = { ...next, textColor: st2.textColor };
    if (st2.baseSize !== void 0) next = { ...next, baseSize: st2.baseSize };
    for (const c of n.children) visit(c, next);
  };
  for (const c of node.children) visit(c, baseState);
  return lines;
}
function pickInlineId(ids, state) {
  if (state.mono) return ids.idMono;
  if (state.bold && state.italic) return ids.idBoldItalic;
  if (state.bold) return ids.idBold;
  if (state.italic) return ids.idItalic;
  return ids.idDefault;
}
function mergeRuns2(runs) {
  const out = [];
  for (const r of runs) {
    if (r.text.length === 0) continue;
    const last = out[out.length - 1];
    if (last && last.charShapeId === r.charShapeId) {
      last.text += r.text;
    } else {
      out.push({ ...r });
    }
  }
  return out;
}
function runsToText2(runs) {
  return runs.map((r) => r.text).join("");
}
function collapseWhitespace(s) {
  return s.replace(/[\s ]+/g, " ");
}
function defaultCharShape2() {
  return {
    faceNameIds: { hangul: 0, latin: 1, hanja: 0, japanese: 0, other: 0, symbol: 0, user: 0 },
    baseSize: 1e3,
    property: 0,
    textColor: 0,
    shadeColor: 16777215,
    underlineColor: 0,
    shadowColor: 0,
    bold: false,
    italic: false,
    underline: false,
    strikeout: false
  };
}
function defaultParaShape2() {
  return {
    alignment: "justify",
    property: 0,
    leftMargin: 0,
    rightMargin: 0,
    indent: 0,
    prevSpacing: 0,
    nextSpacing: 0,
    // HTML 경로 기본 줄간격: md·HWP·한글 native 와 통일해 160%(PM 결정 2026-06-28). CSS
    // line-height 명시 시 그 값으로 대체(registerParaShape lineSpacing 인자). 단일행 문단은
    // 빌더 lineseg 가 이 값을 spacing 으로 흘려 실제로 반영(buildLineSeg).
    lineSpacing: 160
  };
}
function registerBorderFill(ctx, fillColor, withBorders) {
  const key = `bf:${fillColor}:${withBorders ? 1 : 0}`;
  const existing = ctx.borderFillIds.get(key);
  if (existing !== void 0) return existing;
  const line = (lineType) => ({ lineType, widthIndex: 0, color: 0 });
  const b2 = withBorders ? line(1) : line(0);
  const id = ctx.borderFills.length;
  ctx.borderFills.push({
    attr: 0,
    borders: [{ ...b2 }, { ...b2 }, { ...b2 }, { ...b2 }],
    diagonal: { diagonalType: 0, widthIndex: 0, color: 0 },
    fill: { backgroundColor: fillColor, patternColor: 0, patternType: -1 }
  });
  ctx.borderFillIds.set(key, id);
  return id;
}
function registerBorderFillEx(ctx, borders, fillColor) {
  if (!borders && fillColor === void 0) return void 0;
  const b2 = borders ?? [0, 0, 0, 0].map(() => ({ lineType: 0, widthIndex: 0, color: 0 }));
  const key = `bfx:${b2.map((x2) => `${x2.lineType}-${x2.widthIndex}-${x2.color}`).join(",")}:${fillColor ?? "n"}`;
  const existing = ctx.borderFillIds.get(key);
  if (existing !== void 0) return existing;
  const id = ctx.borderFills.length;
  ctx.borderFills.push({
    attr: 0,
    borders: [{ ...b2[0] }, { ...b2[1] }, { ...b2[2] }, { ...b2[3] }],
    diagonal: { diagonalType: 0, widthIndex: 0, color: 0 },
    fill: fillColor !== void 0 ? { backgroundColor: fillColor, patternColor: 0, patternType: -1 } : void 0
  });
  ctx.borderFillIds.set(key, id);
  return id;
}
function defaultFileHeader2() {
  return {
    version: { major: 5, minor: 0, build: 6, revision: 0 },
    flags: {
      raw: 0,
      compressed: false,
      encrypted: false,
      distribution: false,
      script: false,
      drm: false,
      xmlTemplate: false,
      documentHistory: false,
      digitalSignature: false,
      publicKeyEncrypted: false,
      modifiedCertificate: false,
      prepareDistribution: false
    }
  };
}
function registerCharShape2(ctx, cs) {
  const key = JSON.stringify(cs);
  const existing = ctx.charShapeIds.get(key);
  if (existing !== void 0) return existing;
  const id = ctx.charShapes.length;
  ctx.charShapes.push(cs);
  ctx.charShapeIds.set(key, id);
  return id;
}
function registerParaShape(ctx, align, borderFillIDRef, lineSpacing) {
  const ls = lineSpacing !== void 0 && lineSpacing !== defaultParaShape2().lineSpacing ? lineSpacing : void 0;
  if (align === "justify" && borderFillIDRef === void 0 && ls === void 0) return 0;
  const key = `align:${align}|bf:${borderFillIDRef ?? "n"}|ls:${ls ?? "d"}`;
  const existing = ctx.paraShapeIds.get(key);
  if (existing !== void 0) return existing;
  const id = ctx.paraShapes.length;
  const ps = { ...defaultParaShape2(), alignment: align, borderFillIDRef };
  if (ls !== void 0) ps.lineSpacing = ls;
  ctx.paraShapes.push(ps);
  ctx.paraShapeIds.set(key, id);
  return id;
}
function resolveInlineCharShape(ids, ctx, state) {
  if (state.textColor === void 0 && state.shadeColor === void 0 && state.baseSize === void 0 && state.borderFillId === void 0 && state.letterSpacing === void 0) {
    return pickInlineId(ids, state);
  }
  const cs = defaultCharShape2();
  cs.bold = state.bold;
  cs.italic = state.italic;
  if (state.mono) {
    cs.faceNameIds = { hangul: 2, latin: 2, hanja: 2, japanese: 2, other: 2, symbol: 2, user: 2 };
  }
  if (state.textColor !== void 0) cs.textColor = state.textColor;
  if (state.shadeColor !== void 0) cs.shadeColor = state.shadeColor;
  if (state.baseSize !== void 0) cs.baseSize = state.baseSize;
  if (state.borderFillId !== void 0) cs.borderFillId = state.borderFillId;
  if (state.letterSpacing !== void 0) cs.letterSpacing = state.letterSpacing;
  return registerCharShape2(ctx, cs);
}

// src/lib/hwp/converter.ts
function hwpDocumentToText(doc, options) {
  const paraSep = options?.paragraphSeparator ?? "\n";
  const sectSep = options?.sectionSeparator ?? "\n\n";
  return doc.sections.map((s) => s.paragraphs.map((p) => flattenParagraphText(p)).join(paraSep)).join(sectSep);
}
function flattenParagraphText(p) {
  const parts = [];
  if (p.text.length > 0) parts.push(p.text);
  for (const ctrl of p.controls) {
    if (ctrl.kind === "table") {
      const cellTexts = ctrl.cells.map(
        (cell) => cell.paragraphs.map((q2) => flattenParagraphText(q2)).join("\n")
      );
      parts.push(cellTexts.join("\n"));
    } else if (ctrl.kind === "header" || ctrl.kind === "footer" || ctrl.kind === "footnote") {
      parts.push(ctrl.paragraphs.map((q2) => flattenParagraphText(q2)).join("\n"));
    } else if (ctrl.kind === "equation" && ctrl.script.length > 0) {
      parts.push(ctrl.script);
    }
  }
  return parts.join("\n");
}
async function hwpDocumentToHwpx(doc, options) {
  return await buildHwpxFromDocument(doc, options);
}

// src/lib/hwp/index.ts
var HwpUnsupportedError = class extends Error {
  constructor(msg) {
    super(msg);
    this.name = "HwpUnsupportedError";
  }
};
var HwpEncryptedError = class extends Error {
  constructor() {
    super("\uC554\uD638\uD654\uB41C HWP \uBB38\uC11C\uB294 \uD604\uC7AC \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
    this.name = "HwpEncryptedError";
  }
};
var HwpInvalidFormatError = class extends Error {
  constructor(msg = "\uC720\uD6A8\uD55C HWP 5.0 \uD30C\uC77C\uC774 \uC544\uB2D9\uB2C8\uB2E4.") {
    super(msg);
    this.name = "HwpInvalidFormatError";
  }
};
function detectFormat(data) {
  if (data.byteLength >= 8) {
    if (data[0] === 208 && data[1] === 207 && data[2] === 17 && data[3] === 224 && data[4] === 161 && data[5] === 177 && data[6] === 26 && data[7] === 225) {
      return "hwp";
    }
    if (data[0] === 80 && data[1] === 75 && data[2] === 3 && data[3] === 4) {
      return "hwpx";
    }
  }
  if (data.byteLength >= 17) {
    const sig = String.fromCharCode(...data.subarray(0, 17));
    if (sig === "HWP Document File") return "hwp3";
  }
  return "unknown";
}
function parseHwp(data) {
  const fmt = detectFormat(data);
  if (fmt === "hwp3") {
    throw new HwpUnsupportedError(
      "HWP 3.0 \uD3EC\uB9F7\uC740 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD55C\uCEF4\uC624\uD53C\uC2A4/LibreOffice \uC5D0\uC11C HWP 5.0 \uC73C\uB85C \uB2E4\uC2DC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694."
    );
  }
  if (fmt !== "hwp") {
    throw new HwpInvalidFormatError(`HWP 5.0(CFB) \uC2DC\uADF8\uB2C8\uCC98\uAC00 \uC544\uB2D9\uB2C8\uB2E4 (\uAC10\uC9C0: ${fmt}).`);
  }
  const cfb = new HwpCfbReader(data);
  const headerBytes = cfb.readFileHeader();
  const fileHeader = parseFileHeader(headerBytes);
  if (fileHeader.flags.encrypted) {
    throw new HwpEncryptedError();
  }
  if (!isVersionSupported(fileHeader.version)) {
    throw new HwpUnsupportedError(
      `\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 HWP \uBC84\uC804: ${versionToString(fileHeader.version)} (5.0 ~ 5.1 \uC9C0\uC6D0)`
    );
  }
  if (fileHeader.flags.distribution) {
    throw new HwpUnsupportedError(
      "\uBC30\uD3EC\uC6A9 \uBB38\uC11C(ViewText)\uB294 \uD604\uC7AC \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC77C\uBC18 HWP \uB85C \uC800\uC7A5 \uD6C4 \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."
    );
  }
  const compressed = fileHeader.flags.compressed;
  const docInfoBytes = cfb.readDocInfo(compressed);
  const { docInfo } = parseDocInfo(docInfoBytes);
  const sectionCount = cfb.sectionCount(false);
  const sections = [];
  for (let i = 0; i < sectionCount; i++) {
    const secBytes = cfb.readBodySection(i, compressed, false);
    if (!secBytes) continue;
    try {
      sections.push(parseBodyTextSection(secBytes));
    } catch {
      sections.push({ paragraphs: [] });
    }
  }
  const binData = loadBinDataContent(cfb, docInfo.binData);
  return {
    header: fileHeader,
    docInfo,
    sections,
    binData
  };
}
async function hwpToText(data, options) {
  const doc = parseHwp(data);
  return hwpDocumentToText(doc, options);
}
async function hwpToHwpx(data, options) {
  const doc = parseHwp(data);
  return await hwpDocumentToHwpx(doc, options);
}
async function hwpToMarkdown(data, options) {
  const doc = parseHwp(data);
  return hwpDocumentToMarkdown(doc, options);
}
async function markdownToHwpx(md, options) {
  const doc = markdownToHwpDocument(md, { imageResolver: options?.imageResolver });
  return await hwpDocumentToHwpx(doc, options);
}
async function htmlToHwpx(html, options) {
  const doc = htmlToHwpDocument(html, { imageResolver: options?.imageResolver, page: options?.page });
  return await hwpDocumentToHwpx(doc, options);
}
export {
  HwpEncryptedError,
  HwpInvalidFormatError,
  HwpUnsupportedError,
  HwpxEncryptedDocumentError,
  HwpxNotLoadedError,
  HwpxReader,
  HwpxWriter,
  InvalidHwpxFormatError,
  detectFormat,
  htmlToHwpDocument,
  htmlToHwpx,
  hwpDocumentToMarkdown,
  hwpToHwpx,
  hwpToMarkdown,
  hwpToText,
  isVersionSupported,
  markdownToHwpDocument,
  markdownToHwpx,
  parseFileHeader,
  parseHwp,
  versionToString
};
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)

cfb/cfb.js:
  (*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com *)

pako/dist/pako.esm.mjs:
  (*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) *)
*/
//# sourceMappingURL=hwp-convert.browser.mjs.map
