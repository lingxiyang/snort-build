var dn = Object.defineProperty;
var wn = (r, e, t) => e in r ? dn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ae = (r, e, t) => (wn(r, typeof e != "symbol" ? e + "" : e, t), t);
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// @__NO_SIDE_EFFECTS__
function gn(...r) {
  const e = (s, i) => (o) => s(i(o)), t = Array.from(r).reverse().reduce((s, i) => s ? e(s, i.encode) : i.encode, void 0), n = r.reduce((s, i) => s ? e(s, i.decode) : i.decode, void 0);
  return { encode: t, decode: n };
}
// @__NO_SIDE_EFFECTS__
function pn(r) {
  return {
    encode: (e) => {
      if (!Array.isArray(e) || e.length && typeof e[0] != "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return e.map((t) => {
        if (t < 0 || t >= r.length)
          throw new Error(`Digit index outside alphabet: ${t} (alphabet: ${r.length})`);
        return r[t];
      });
    },
    decode: (e) => {
      if (!Array.isArray(e) || e.length && typeof e[0] != "string")
        throw new Error("alphabet.decode input should be array of strings");
      return e.map((t) => {
        if (typeof t != "string")
          throw new Error(`alphabet.decode: not string element=${t}`);
        const n = r.indexOf(t);
        if (n === -1)
          throw new Error(`Unknown letter: "${t}". Allowed: ${r}`);
        return n;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yn(r = "") {
  if (typeof r != "string")
    throw new Error("join separator should be string");
  return {
    encode: (e) => {
      if (!Array.isArray(e) || e.length && typeof e[0] != "string")
        throw new Error("join.encode input should be array of strings");
      for (let t of e)
        if (typeof t != "string")
          throw new Error(`join.encode: non-string input=${t}`);
      return e.join(r);
    },
    decode: (e) => {
      if (typeof e != "string")
        throw new Error("join.decode input should be string");
      return e.split(r);
    }
  };
}
const xr = /* @__NO_SIDE_EFFECTS__ */ (r, e) => e ? /* @__PURE__ */ xr(e, r % e) : r, ze = /* @__NO_SIDE_EFFECTS__ */ (r, e) => r + (e - /* @__PURE__ */ xr(r, e));
// @__NO_SIDE_EFFECTS__
function Ut(r, e, t, n) {
  if (!Array.isArray(r))
    throw new Error("convertRadix2: data should be array");
  if (e <= 0 || e > 32)
    throw new Error(`convertRadix2: wrong from=${e}`);
  if (t <= 0 || t > 32)
    throw new Error(`convertRadix2: wrong to=${t}`);
  if (/* @__PURE__ */ ze(e, t) > 32)
    throw new Error(`convertRadix2: carry overflow from=${e} to=${t} carryBits=${/* @__PURE__ */ ze(e, t)}`);
  let s = 0, i = 0;
  const o = 2 ** t - 1, a = [];
  for (const c of r) {
    if (c >= 2 ** e)
      throw new Error(`convertRadix2: invalid data word=${c} from=${e}`);
    if (s = s << e | c, i + e > 32)
      throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);
    for (i += e; i >= t; i -= t)
      a.push((s >> i - t & o) >>> 0);
    s &= 2 ** i - 1;
  }
  if (s = s << t - i & o, !n && i >= e)
    throw new Error("Excess padding");
  if (!n && s)
    throw new Error(`Non-zero padding: ${s}`);
  return n && i > 0 && a.push(s >>> 0), a;
}
// @__NO_SIDE_EFFECTS__
function bn(r, e = !1) {
  if (r <= 0 || r > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (/* @__PURE__ */ ze(8, r) > 32 || /* @__PURE__ */ ze(r, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (t) => {
      if (!(t instanceof Uint8Array))
        throw new Error("radix2.encode input should be Uint8Array");
      return /* @__PURE__ */ Ut(Array.from(t), 8, r, !e);
    },
    decode: (t) => {
      if (!Array.isArray(t) || t.length && typeof t[0] != "number")
        throw new Error("radix2.decode input should be array of strings");
      return Uint8Array.from(/* @__PURE__ */ Ut(t, r, 8, e));
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tr(r) {
  if (typeof r != "function")
    throw new Error("unsafeWrapper fn should be function");
  return function(...e) {
    try {
      return r.apply(null, e);
    } catch {
    }
  };
}
const Rt = /* @__PURE__ */ gn(/* @__PURE__ */ pn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), /* @__PURE__ */ yn("")), rr = [996825010, 642813549, 513874426, 1027748829, 705979059];
// @__NO_SIDE_EFFECTS__
function ke(r) {
  const e = r >> 25;
  let t = (r & 33554431) << 5;
  for (let n = 0; n < rr.length; n++)
    (e >> n & 1) === 1 && (t ^= rr[n]);
  return t;
}
// @__NO_SIDE_EFFECTS__
function nr(r, e, t = 1) {
  const n = r.length;
  let s = 1;
  for (let i = 0; i < n; i++) {
    const o = r.charCodeAt(i);
    if (o < 33 || o > 126)
      throw new Error(`Invalid prefix (${r})`);
    s = /* @__PURE__ */ ke(s) ^ o >> 5;
  }
  s = /* @__PURE__ */ ke(s);
  for (let i = 0; i < n; i++)
    s = /* @__PURE__ */ ke(s) ^ r.charCodeAt(i) & 31;
  for (let i of e)
    s = /* @__PURE__ */ ke(s) ^ i;
  for (let i = 0; i < 6; i++)
    s = /* @__PURE__ */ ke(s);
  return s ^= t, Rt.encode(/* @__PURE__ */ Ut([s % 2 ** 30], 30, 5, !1));
}
// @__NO_SIDE_EFFECTS__
function mn(r) {
  const e = r === "bech32" ? 1 : 734539939, t = /* @__PURE__ */ bn(5), n = t.decode, s = t.encode, i = /* @__PURE__ */ tr(n);
  function o(u, l, p = 90) {
    if (typeof u != "string")
      throw new Error(`bech32.encode prefix should be string, not ${typeof u}`);
    if (!Array.isArray(l) || l.length && typeof l[0] != "number")
      throw new Error(`bech32.encode words should be array of numbers, not ${typeof l}`);
    const S = u.length + 7 + l.length;
    if (p !== !1 && S > p)
      throw new TypeError(`Length ${S} exceeds limit ${p}`);
    const C = u.toLowerCase(), m = /* @__PURE__ */ nr(C, l, e);
    return `${C}1${Rt.encode(l)}${m}`;
  }
  function a(u, l = 90) {
    if (typeof u != "string")
      throw new Error(`bech32.decode input should be string, not ${typeof u}`);
    if (u.length < 8 || l !== !1 && u.length > l)
      throw new TypeError(`Wrong string length: ${u.length} (${u}). Expected (8..${l})`);
    const p = u.toLowerCase();
    if (u !== p && u !== u.toUpperCase())
      throw new Error("String must be lowercase or uppercase");
    u = p;
    const S = u.lastIndexOf("1");
    if (S === 0 || S === -1)
      throw new Error('Letter "1" must be present between prefix and data only');
    const C = u.slice(0, S), m = u.slice(S + 1);
    if (m.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const b = Rt.decode(m).slice(0, -6), B = /* @__PURE__ */ nr(C, b, e);
    if (!m.endsWith(B))
      throw new Error(`Invalid checksum in ${u}: expected "${B}"`);
    return { prefix: C, words: b };
  }
  const c = /* @__PURE__ */ tr(a);
  function h(u) {
    const { prefix: l, words: p } = a(u, !1);
    return { prefix: l, words: p, bytes: n(p) };
  }
  return { encode: o, decode: a, decodeToBytes: h, decodeUnsafe: c, fromWords: n, fromWordsUnsafe: i, toWords: s };
}
const te = /* @__PURE__ */ mn("bech32");
function En(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Lt = { exports: {} }, ht, sr;
function vn() {
  if (sr)
    return ht;
  sr = 1;
  var r = 1e3, e = r * 60, t = e * 60, n = t * 24, s = n * 7, i = n * 365.25;
  ht = function(u, l) {
    l = l || {};
    var p = typeof u;
    if (p === "string" && u.length > 0)
      return o(u);
    if (p === "number" && isFinite(u))
      return l.long ? c(u) : a(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function o(u) {
    if (u = String(u), !(u.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        u
      );
      if (l) {
        var p = parseFloat(l[1]), S = (l[2] || "ms").toLowerCase();
        switch (S) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * i;
          case "weeks":
          case "week":
          case "w":
            return p * s;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function a(u) {
    var l = Math.abs(u);
    return l >= n ? Math.round(u / n) + "d" : l >= t ? Math.round(u / t) + "h" : l >= e ? Math.round(u / e) + "m" : l >= r ? Math.round(u / r) + "s" : u + "ms";
  }
  function c(u) {
    var l = Math.abs(u);
    return l >= n ? h(u, l, n, "day") : l >= t ? h(u, l, t, "hour") : l >= e ? h(u, l, e, "minute") : l >= r ? h(u, l, r, "second") : u + " ms";
  }
  function h(u, l, p, S) {
    var C = l >= p * 1.5;
    return Math.round(u / p) + " " + S + (C ? "s" : "");
  }
  return ht;
}
function xn(r) {
  t.debug = t, t.default = t, t.coerce = c, t.disable = i, t.enable = s, t.enabled = o, t.humanize = vn(), t.destroy = h, Object.keys(r).forEach((u) => {
    t[u] = r[u];
  }), t.names = [], t.skips = [], t.formatters = {};
  function e(u) {
    let l = 0;
    for (let p = 0; p < u.length; p++)
      l = (l << 5) - l + u.charCodeAt(p), l |= 0;
    return t.colors[Math.abs(l) % t.colors.length];
  }
  t.selectColor = e;
  function t(u) {
    let l, p = null, S, C;
    function m(...b) {
      if (!m.enabled)
        return;
      const B = m, N = Number(/* @__PURE__ */ new Date()), v = N - (l || N);
      B.diff = v, B.prev = l, B.curr = N, l = N, b[0] = t.coerce(b[0]), typeof b[0] != "string" && b.unshift("%O");
      let T = 0;
      b[0] = b[0].replace(/%([a-zA-Z%])/g, (U, x) => {
        if (U === "%%")
          return "%";
        T++;
        const A = t.formatters[x];
        if (typeof A == "function") {
          const D = b[T];
          U = A.call(B, D), b.splice(T, 1), T--;
        }
        return U;
      }), t.formatArgs.call(B, b), (B.log || t.log).apply(B, b);
    }
    return m.namespace = u, m.useColors = t.useColors(), m.color = t.selectColor(u), m.extend = n, m.destroy = t.destroy, Object.defineProperty(m, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (S !== t.namespaces && (S = t.namespaces, C = t.enabled(u)), C),
      set: (b) => {
        p = b;
      }
    }), typeof t.init == "function" && t.init(m), m;
  }
  function n(u, l) {
    const p = t(this.namespace + (typeof l > "u" ? ":" : l) + u);
    return p.log = this.log, p;
  }
  function s(u) {
    t.save(u), t.namespaces = u, t.names = [], t.skips = [];
    let l;
    const p = (typeof u == "string" ? u : "").split(/[\s,]+/), S = p.length;
    for (l = 0; l < S; l++)
      p[l] && (u = p[l].replace(/\*/g, ".*?"), u[0] === "-" ? t.skips.push(new RegExp("^" + u.slice(1) + "$")) : t.names.push(new RegExp("^" + u + "$")));
  }
  function i() {
    const u = [
      ...t.names.map(a),
      ...t.skips.map(a).map((l) => "-" + l)
    ].join(",");
    return t.enable(""), u;
  }
  function o(u) {
    if (u[u.length - 1] === "*")
      return !0;
    let l, p;
    for (l = 0, p = t.skips.length; l < p; l++)
      if (t.skips[l].test(u))
        return !1;
    for (l = 0, p = t.names.length; l < p; l++)
      if (t.names[l].test(u))
        return !0;
    return !1;
  }
  function a(u) {
    return u.toString().substring(2, u.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function c(u) {
    return u instanceof Error ? u.stack || u.message : u;
  }
  function h() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return t.enable(t.load()), t;
}
var Cn = xn;
(function(r, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = t, e.storage = o(), e.destroy = (() => {
    let c = !1;
    return () => {
      c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function t() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(c) {
    if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + r.exports.humanize(this.diff), !this.useColors)
      return;
    const h = "color: " + this.color;
    c.splice(1, 0, h, "color: inherit");
    let u = 0, l = 0;
    c[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (u++, p === "%c" && (l = u));
    }), c.splice(l, 0, h);
  }
  e.log = console.debug || console.log || (() => {
  });
  function s(c) {
    try {
      c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let c;
    try {
      c = e.storage.getItem("debug");
    } catch {
    }
    return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  r.exports = Cn(e);
  const { formatters: a } = r.exports;
  a.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(Lt, Lt.exports);
var Bn = Lt.exports;
const Cr = /* @__PURE__ */ En(Bn);
var An = { exports: {} };
(function(r) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (t = !1));
  function s(c, h, u) {
    this.fn = c, this.context = h, this.once = u || !1;
  }
  function i(c, h, u, l, p) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var S = new s(u, l || c, p), C = t ? t + h : h;
    return c._events[C] ? c._events[C].fn ? c._events[C] = [c._events[C], S] : c._events[C].push(S) : (c._events[C] = S, c._eventsCount++), c;
  }
  function o(c, h) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[h];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], u, l;
    if (this._eventsCount === 0)
      return h;
    for (l in u = this._events)
      e.call(u, l) && h.push(t ? l.slice(1) : l);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(u)) : h;
  }, a.prototype.listeners = function(h) {
    var u = t ? t + h : h, l = this._events[u];
    if (!l)
      return [];
    if (l.fn)
      return [l.fn];
    for (var p = 0, S = l.length, C = new Array(S); p < S; p++)
      C[p] = l[p].fn;
    return C;
  }, a.prototype.listenerCount = function(h) {
    var u = t ? t + h : h, l = this._events[u];
    return l ? l.fn ? 1 : l.length : 0;
  }, a.prototype.emit = function(h, u, l, p, S, C) {
    var m = t ? t + h : h;
    if (!this._events[m])
      return !1;
    var b = this._events[m], B = arguments.length, N, v;
    if (b.fn) {
      switch (b.once && this.removeListener(h, b.fn, void 0, !0), B) {
        case 1:
          return b.fn.call(b.context), !0;
        case 2:
          return b.fn.call(b.context, u), !0;
        case 3:
          return b.fn.call(b.context, u, l), !0;
        case 4:
          return b.fn.call(b.context, u, l, p), !0;
        case 5:
          return b.fn.call(b.context, u, l, p, S), !0;
        case 6:
          return b.fn.call(b.context, u, l, p, S, C), !0;
      }
      for (v = 1, N = new Array(B - 1); v < B; v++)
        N[v - 1] = arguments[v];
      b.fn.apply(b.context, N);
    } else {
      var T = b.length, I;
      for (v = 0; v < T; v++)
        switch (b[v].once && this.removeListener(h, b[v].fn, void 0, !0), B) {
          case 1:
            b[v].fn.call(b[v].context);
            break;
          case 2:
            b[v].fn.call(b[v].context, u);
            break;
          case 3:
            b[v].fn.call(b[v].context, u, l);
            break;
          case 4:
            b[v].fn.call(b[v].context, u, l, p);
            break;
          default:
            if (!N)
              for (I = 1, N = new Array(B - 1); I < B; I++)
                N[I - 1] = arguments[I];
            b[v].fn.apply(b[v].context, N);
        }
    }
    return !0;
  }, a.prototype.on = function(h, u, l) {
    return i(this, h, u, l, !1);
  }, a.prototype.once = function(h, u, l) {
    return i(this, h, u, l, !0);
  }, a.prototype.removeListener = function(h, u, l, p) {
    var S = t ? t + h : h;
    if (!this._events[S])
      return this;
    if (!u)
      return o(this, S), this;
    var C = this._events[S];
    if (C.fn)
      C.fn === u && (!p || C.once) && (!l || C.context === l) && o(this, S);
    else {
      for (var m = 0, b = [], B = C.length; m < B; m++)
        (C[m].fn !== u || p && !C[m].once || l && C[m].context !== l) && b.push(C[m]);
      b.length ? this._events[S] = b.length === 1 ? b[0] : b : o(this, S);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var u;
    return h ? (u = t ? t + h : h, this._events[u] && o(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = t, a.EventEmitter = a, r.exports = a;
})(An);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Br = BigInt(0), nt = BigInt(1), Un = BigInt(2), st = (r) => r instanceof Uint8Array, Rn = /* @__PURE__ */ Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, "0"));
function re(r) {
  if (!st(r))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < r.length; t++)
    e += Rn[r[t]];
  return e;
}
function Ar(r) {
  const e = r.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function _t(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return BigInt(r === "" ? "0" : `0x${r}`);
}
function ne(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  const e = r.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const t = new Uint8Array(e / 2);
  for (let n = 0; n < t.length; n++) {
    const s = n * 2, i = r.slice(s, s + 2), o = Number.parseInt(i, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    t[n] = o;
  }
  return t;
}
function Q(r) {
  return _t(re(r));
}
function Ht(r) {
  if (!st(r))
    throw new Error("Uint8Array expected");
  return _t(re(Uint8Array.from(r).reverse()));
}
function Ee(r, e) {
  return ne(r.toString(16).padStart(e * 2, "0"));
}
function Vt(r, e) {
  return Ee(r, e).reverse();
}
function Ln(r) {
  return ne(Ar(r));
}
function J(r, e, t) {
  let n;
  if (typeof e == "string")
    try {
      n = ne(e);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${e}". Cause: ${i}`);
    }
  else if (st(e))
    n = Uint8Array.from(e);
  else
    throw new Error(`${r} must be hex string or Uint8Array`);
  const s = n.length;
  if (typeof t == "number" && s !== t)
    throw new Error(`${r} expected ${t} bytes, got ${s}`);
  return n;
}
function Ae(...r) {
  const e = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let t = 0;
  return r.forEach((n) => {
    if (!st(n))
      throw new Error("Uint8Array expected");
    e.set(n, t), t += n.length;
  }), e;
}
function Sn(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function In(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Tn(r) {
  let e;
  for (e = 0; r > Br; r >>= nt, e += 1)
    ;
  return e;
}
function kn(r, e) {
  return r >> BigInt(e) & nt;
}
const Nn = (r, e, t) => r | (t ? nt : Br) << BigInt(e), Zt = (r) => (Un << BigInt(r - 1)) - nt, ft = (r) => new Uint8Array(r), ir = (r) => Uint8Array.from(r);
function Ur(r, e, t) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof t != "function")
    throw new Error("hmacFn must be a function");
  let n = ft(r), s = ft(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, a = (...l) => t(s, n, ...l), c = (l = ft()) => {
    s = a(ir([0]), l), n = a(), l.length !== 0 && (s = a(ir([1]), l), n = a());
  }, h = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let l = 0;
    const p = [];
    for (; l < e; ) {
      n = a();
      const S = n.slice();
      p.push(S), l += n.length;
    }
    return Ae(...p);
  };
  return (l, p) => {
    o(), c(l);
    let S;
    for (; !(S = p(h())); )
      c();
    return o(), S;
  };
}
const Dn = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || r instanceof Uint8Array,
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, e) => e.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function qe(r, e, t = {}) {
  const n = (s, i, o) => {
    const a = Dn[i];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const c = r[s];
    if (!(o && c === void 0) && !a(c, r))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
  };
  for (const [s, i] of Object.entries(e))
    n(s, i, !1);
  for (const [s, i] of Object.entries(t))
    n(s, i, !0);
  return r;
}
const Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: kn,
  bitLen: Tn,
  bitMask: Zt,
  bitSet: Nn,
  bytesToHex: re,
  bytesToNumberBE: Q,
  bytesToNumberLE: Ht,
  concatBytes: Ae,
  createHmacDrbg: Ur,
  ensureBytes: J,
  equalBytes: Sn,
  hexToBytes: ne,
  hexToNumber: _t,
  numberToBytesBE: Ee,
  numberToBytesLE: Vt,
  numberToHexUnpadded: Ar,
  numberToVarBytesBE: Ln,
  utf8ToBytes: In,
  validateObject: qe
}, Symbol.toStringTag, { value: "Module" }));
function or(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function Rr(r, ...e) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${r.length}`);
}
function On(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  or(r.outputLen), or(r.blockLen);
}
function Ge(r, e = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function Pn(r, e) {
  Rr(r);
  const t = e.outputLen;
  if (r.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const dt = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const zt = (r) => r instanceof Uint8Array, wt = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), ce = (r, e) => r << 32 - e | r >>> e, jn = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!jn)
  throw new Error("Non little-endian hardware is not supported");
const Mn = /* @__PURE__ */ Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, "0"));
function Wn(r) {
  if (!zt(r))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < r.length; t++)
    e += Mn[r[t]];
  return e;
}
function qn(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Gt(r) {
  if (typeof r == "string" && (r = qn(r)), !zt(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function _n(...r) {
  const e = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let t = 0;
  return r.forEach((n) => {
    if (!zt(n))
      throw new Error("Uint8Array expected");
    e.set(n, t), t += n.length;
  }), e;
}
class Lr {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Hn(r) {
  const e = (n) => r().update(Gt(n)).digest(), t = r();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => r(), e;
}
function Sr(r = 32) {
  if (dt && typeof dt.getRandomValues == "function")
    return dt.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
function Vn(r, e, t, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(e, t, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(t >> s & i), a = Number(t & i), c = n ? 4 : 0, h = n ? 0 : 4;
  r.setUint32(e + c, o, n), r.setUint32(e + h, a, n);
}
class Zn extends Lr {
  constructor(e, t, n, s) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = wt(this.buffer);
  }
  update(e) {
    Ge(this);
    const { view: t, buffer: n, blockLen: s } = this;
    e = Gt(e);
    const i = e.length;
    for (let o = 0; o < i; ) {
      const a = Math.min(s - this.pos, i - o);
      if (a === s) {
        const c = wt(e);
        for (; s <= i - o; o += s)
          this.process(c, o);
        continue;
      }
      n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Ge(this), Pn(e, this), this.finished = !0;
    const { buffer: t, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    t[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(n, 0), o = 0);
    for (let l = o; l < s; l++)
      t[l] = 0;
    Vn(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = wt(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = c / 4, u = this.get();
    if (h > u.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < h; l++)
      a.setUint32(4 * l, u[l], i);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const n = e.slice(0, t);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: n, length: s, finished: i, destroyed: o, pos: a } = this;
    return e.length = s, e.pos = a, e.finished = i, e.destroyed = o, s % t && e.buffer.set(n), e;
  }
}
const zn = (r, e, t) => r & e ^ ~r & t, Gn = (r, e, t) => r & e ^ r & t ^ e & t, Yn = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), ge = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), pe = /* @__PURE__ */ new Uint32Array(64);
class Jn extends Zn {
  constructor() {
    super(64, 32, 8, !1), this.A = ge[0] | 0, this.B = ge[1] | 0, this.C = ge[2] | 0, this.D = ge[3] | 0, this.E = ge[4] | 0, this.F = ge[5] | 0, this.G = ge[6] | 0, this.H = ge[7] | 0;
  }
  get() {
    const { A: e, B: t, C: n, D: s, E: i, F: o, G: a, H: c } = this;
    return [e, t, n, s, i, o, a, c];
  }
  // prettier-ignore
  set(e, t, n, s, i, o, a, c) {
    this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, t) {
    for (let l = 0; l < 16; l++, t += 4)
      pe[l] = e.getUint32(t, !1);
    for (let l = 16; l < 64; l++) {
      const p = pe[l - 15], S = pe[l - 2], C = ce(p, 7) ^ ce(p, 18) ^ p >>> 3, m = ce(S, 17) ^ ce(S, 19) ^ S >>> 10;
      pe[l] = m + pe[l - 7] + C + pe[l - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: a, F: c, G: h, H: u } = this;
    for (let l = 0; l < 64; l++) {
      const p = ce(a, 6) ^ ce(a, 11) ^ ce(a, 25), S = u + p + zn(a, c, h) + Yn[l] + pe[l] | 0, m = (ce(n, 2) ^ ce(n, 13) ^ ce(n, 22)) + Gn(n, s, i) | 0;
      u = h, h = c, c = a, a = o + S | 0, o = i, i = s, s = n, n = S + m | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, h = h + this.G | 0, u = u + this.H | 0, this.set(n, s, i, o, a, c, h, u);
  }
  roundClean() {
    pe.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Me = /* @__PURE__ */ Hn(() => new Jn());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Z = BigInt(0), q = BigInt(1), Ce = BigInt(2), Kn = BigInt(3), St = BigInt(4), ar = BigInt(5), cr = BigInt(8);
BigInt(9);
BigInt(16);
function z(r, e) {
  const t = r % e;
  return t >= Z ? t : e + t;
}
function Qn(r, e, t) {
  if (t <= Z || e < Z)
    throw new Error("Expected power/modulo > 0");
  if (t === q)
    return Z;
  let n = q;
  for (; e > Z; )
    e & q && (n = n * r % t), r = r * r % t, e >>= q;
  return n;
}
function X(r, e, t) {
  let n = r;
  for (; e-- > Z; )
    n *= n, n %= t;
  return n;
}
function It(r, e) {
  if (r === Z || e <= Z)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${e}`);
  let t = z(r, e), n = e, s = Z, i = q;
  for (; t !== Z; ) {
    const a = n / t, c = n % t, h = s - i * a;
    n = t, t = c, s = i, i = h;
  }
  if (n !== q)
    throw new Error("invert: does not exist");
  return z(s, e);
}
function Xn(r) {
  const e = (r - q) / Ce;
  let t, n, s;
  for (t = r - q, n = 0; t % Ce === Z; t /= Ce, n++)
    ;
  for (s = Ce; s < r && Qn(s, e, r) !== r - q; s++)
    ;
  if (n === 1) {
    const o = (r + q) / St;
    return function(c, h) {
      const u = c.pow(h, o);
      if (!c.eql(c.sqr(u), h))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  const i = (t + q) / Ce;
  return function(a, c) {
    if (a.pow(c, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let h = n, u = a.pow(a.mul(a.ONE, s), t), l = a.pow(c, i), p = a.pow(c, t);
    for (; !a.eql(p, a.ONE); ) {
      if (a.eql(p, a.ZERO))
        return a.ZERO;
      let S = 1;
      for (let m = a.sqr(p); S < h && !a.eql(m, a.ONE); S++)
        m = a.sqr(m);
      const C = a.pow(u, q << BigInt(h - S - 1));
      u = a.sqr(C), l = a.mul(l, C), p = a.mul(p, u), h = S;
    }
    return l;
  };
}
function $n(r) {
  if (r % St === Kn) {
    const e = (r + q) / St;
    return function(n, s) {
      const i = n.pow(s, e);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % cr === ar) {
    const e = (r - ar) / cr;
    return function(n, s) {
      const i = n.mul(s, Ce), o = n.pow(i, e), a = n.mul(s, o), c = n.mul(n.mul(a, Ce), o), h = n.mul(a, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(h), s))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  return Xn(r);
}
const es = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function ts(r) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = es.reduce((n, s) => (n[s] = "function", n), e);
  return qe(r, t);
}
function rs(r, e, t) {
  if (t < Z)
    throw new Error("Expected power > 0");
  if (t === Z)
    return r.ONE;
  if (t === q)
    return e;
  let n = r.ONE, s = e;
  for (; t > Z; )
    t & q && (n = r.mul(n, s)), s = r.sqr(s), t >>= q;
  return n;
}
function ns(r, e) {
  const t = new Array(e.length), n = e.reduce((i, o, a) => r.is0(o) ? i : (t[a] = i, r.mul(i, o)), r.ONE), s = r.inv(n);
  return e.reduceRight((i, o, a) => r.is0(o) ? i : (t[a] = r.mul(i, t[a]), r.mul(i, o)), s), t;
}
function Ir(r, e) {
  const t = e !== void 0 ? e : r.toString(2).length, n = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: n };
}
function ss(r, e, t = !1, n = {}) {
  if (r <= Z)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: s, nByteLength: i } = Ir(r, e);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = $n(r), a = Object.freeze({
    ORDER: r,
    BITS: s,
    BYTES: i,
    MASK: Zt(s),
    ZERO: Z,
    ONE: q,
    create: (c) => z(c, r),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return Z <= c && c < r;
    },
    is0: (c) => c === Z,
    isOdd: (c) => (c & q) === q,
    neg: (c) => z(-c, r),
    eql: (c, h) => c === h,
    sqr: (c) => z(c * c, r),
    add: (c, h) => z(c + h, r),
    sub: (c, h) => z(c - h, r),
    mul: (c, h) => z(c * h, r),
    pow: (c, h) => rs(a, c, h),
    div: (c, h) => z(c * It(h, r), r),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, h) => c + h,
    subN: (c, h) => c - h,
    mulN: (c, h) => c * h,
    inv: (c) => It(c, r),
    sqrt: n.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => ns(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, h, u) => u ? h : c,
    toBytes: (c) => t ? Vt(c, i) : Ee(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return t ? Ht(c) : Q(c);
    }
  });
  return Object.freeze(a);
}
function Tr(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const e = r.toString(2).length;
  return Math.ceil(e / 8);
}
function kr(r) {
  const e = Tr(r);
  return e + Math.ceil(e / 2);
}
function is(r, e, t = !1) {
  const n = r.length, s = Tr(e), i = kr(e);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const o = t ? Q(r) : Ht(r), a = z(o, e - q) + q;
  return t ? Vt(a, s) : Ee(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const os = BigInt(0), gt = BigInt(1);
function as(r, e) {
  const t = (s, i) => {
    const o = i.negate();
    return s ? o : i;
  }, n = (s) => {
    const i = Math.ceil(e / s) + 1, o = 2 ** (s - 1);
    return { windows: i, windowSize: o };
  };
  return {
    constTimeNegate: t,
    // non-const time multiplication ladder
    unsafeLadder(s, i) {
      let o = r.ZERO, a = s;
      for (; i > os; )
        i & gt && (o = o.add(a)), a = a.double(), i >>= gt;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, i) {
      const { windows: o, windowSize: a } = n(i), c = [];
      let h = s, u = h;
      for (let l = 0; l < o; l++) {
        u = h, c.push(u);
        for (let p = 1; p < a; p++)
          u = u.add(h), c.push(u);
        h = u.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, i, o) {
      const { windows: a, windowSize: c } = n(s);
      let h = r.ZERO, u = r.BASE;
      const l = BigInt(2 ** s - 1), p = 2 ** s, S = BigInt(s);
      for (let C = 0; C < a; C++) {
        const m = C * c;
        let b = Number(o & l);
        o >>= S, b > c && (b -= p, o += gt);
        const B = m, N = m + Math.abs(b) - 1, v = C % 2 !== 0, T = b < 0;
        b === 0 ? u = u.add(t(v, i[B])) : h = h.add(t(T, i[N]));
      }
      return { p: h, f: u };
    },
    wNAFCached(s, i, o, a) {
      const c = s._WINDOW_SIZE || 1;
      let h = i.get(s);
      return h || (h = this.precomputeWindow(s, c), c !== 1 && i.set(s, a(h))), this.wNAF(c, h, o);
    }
  };
}
function Nr(r) {
  return ts(r.Fp), qe(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Ir(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function cs(r) {
  const e = Nr(r);
  qe(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: t, Fp: n, a: s } = e;
  if (t) {
    if (!n.eql(s, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof t != "object" || typeof t.beta != "bigint" || typeof t.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: ls, hexToBytes: us } = Fn, Be = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  _parseInt(r) {
    const { Err: e } = Be;
    if (r.length < 2 || r[0] !== 2)
      throw new e("Invalid signature integer tag");
    const t = r[1], n = r.subarray(2, t + 2);
    if (!t || n.length !== t)
      throw new e("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new e("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new e("Invalid signature integer: unnecessary leading zero");
    return { d: ls(n), l: r.subarray(t + 2) };
  },
  toSig(r) {
    const { Err: e } = Be, t = typeof r == "string" ? us(r) : r;
    if (!(t instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = t.length;
    if (n < 2 || t[0] != 48)
      throw new e("Invalid signature tag");
    if (t[1] !== n - 2)
      throw new e("Invalid signature: incorrect length");
    const { d: s, l: i } = Be._parseInt(t.subarray(2)), { d: o, l: a } = Be._parseInt(i);
    if (a.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: s, s: o };
  },
  hexFromSig(r) {
    const e = (h) => Number.parseInt(h[0], 16) & 8 ? "00" + h : h, t = (h) => {
      const u = h.toString(16);
      return u.length & 1 ? `0${u}` : u;
    }, n = e(t(r.s)), s = e(t(r.r)), i = n.length / 2, o = s.length / 2, a = t(i), c = t(o);
    return `30${t(o + i + 4)}02${c}${s}02${a}${n}`;
  }
}, de = BigInt(0), ee = BigInt(1);
BigInt(2);
const lr = BigInt(3);
BigInt(4);
function hs(r) {
  const e = cs(r), { Fp: t } = e, n = e.toBytes || ((C, m, b) => {
    const B = m.toAffine();
    return Ae(Uint8Array.from([4]), t.toBytes(B.x), t.toBytes(B.y));
  }), s = e.fromBytes || ((C) => {
    const m = C.subarray(1), b = t.fromBytes(m.subarray(0, t.BYTES)), B = t.fromBytes(m.subarray(t.BYTES, 2 * t.BYTES));
    return { x: b, y: B };
  });
  function i(C) {
    const { a: m, b } = e, B = t.sqr(C), N = t.mul(B, C);
    return t.add(t.add(N, t.mul(C, m)), b);
  }
  if (!t.eql(t.sqr(e.Gy), i(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(C) {
    return typeof C == "bigint" && de < C && C < e.n;
  }
  function a(C) {
    if (!o(C))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(C) {
    const { allowedPrivateKeyLengths: m, nByteLength: b, wrapPrivateKey: B, n: N } = e;
    if (m && typeof C != "bigint") {
      if (C instanceof Uint8Array && (C = re(C)), typeof C != "string" || !m.includes(C.length))
        throw new Error("Invalid key");
      C = C.padStart(b * 2, "0");
    }
    let v;
    try {
      v = typeof C == "bigint" ? C : Q(J("private key", C, b));
    } catch {
      throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof C}`);
    }
    return B && (v = z(v, N)), a(v), v;
  }
  const h = /* @__PURE__ */ new Map();
  function u(C) {
    if (!(C instanceof l))
      throw new Error("ProjectivePoint expected");
  }
  class l {
    constructor(m, b, B) {
      if (this.px = m, this.py = b, this.pz = B, m == null || !t.isValid(m))
        throw new Error("x required");
      if (b == null || !t.isValid(b))
        throw new Error("y required");
      if (B == null || !t.isValid(B))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(m) {
      const { x: b, y: B } = m || {};
      if (!m || !t.isValid(b) || !t.isValid(B))
        throw new Error("invalid affine point");
      if (m instanceof l)
        throw new Error("projective point not allowed");
      const N = (v) => t.eql(v, t.ZERO);
      return N(b) && N(B) ? l.ZERO : new l(b, B, t.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(m) {
      const b = t.invertBatch(m.map((B) => B.pz));
      return m.map((B, N) => B.toAffine(b[N])).map(l.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(m) {
      const b = l.fromAffine(s(J("pointHex", m)));
      return b.assertValidity(), b;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(m) {
      return l.BASE.multiply(c(m));
    }
    // "Private method", don't use it directly
    _setWindowSize(m) {
      this._WINDOW_SIZE = m, h.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !t.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: m, y: b } = this.toAffine();
      if (!t.isValid(m) || !t.isValid(b))
        throw new Error("bad point: x or y not FE");
      const B = t.sqr(b), N = i(m);
      if (!t.eql(B, N))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: m } = this.toAffine();
      if (t.isOdd)
        return !t.isOdd(m);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(m) {
      u(m);
      const { px: b, py: B, pz: N } = this, { px: v, py: T, pz: I } = m, U = t.eql(t.mul(b, I), t.mul(v, N)), x = t.eql(t.mul(B, I), t.mul(T, N));
      return U && x;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new l(this.px, t.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: m, b } = e, B = t.mul(b, lr), { px: N, py: v, pz: T } = this;
      let I = t.ZERO, U = t.ZERO, x = t.ZERO, A = t.mul(N, N), D = t.mul(v, v), k = t.mul(T, T), d = t.mul(N, v);
      return d = t.add(d, d), x = t.mul(N, T), x = t.add(x, x), I = t.mul(m, x), U = t.mul(B, k), U = t.add(I, U), I = t.sub(D, U), U = t.add(D, U), U = t.mul(I, U), I = t.mul(d, I), x = t.mul(B, x), k = t.mul(m, k), d = t.sub(A, k), d = t.mul(m, d), d = t.add(d, x), x = t.add(A, A), A = t.add(x, A), A = t.add(A, k), A = t.mul(A, d), U = t.add(U, A), k = t.mul(v, T), k = t.add(k, k), A = t.mul(k, d), I = t.sub(I, A), x = t.mul(k, D), x = t.add(x, x), x = t.add(x, x), new l(I, U, x);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(m) {
      u(m);
      const { px: b, py: B, pz: N } = this, { px: v, py: T, pz: I } = m;
      let U = t.ZERO, x = t.ZERO, A = t.ZERO;
      const D = e.a, k = t.mul(e.b, lr);
      let d = t.mul(b, v), g = t.mul(B, T), y = t.mul(N, I), L = t.add(b, B), f = t.add(v, T);
      L = t.mul(L, f), f = t.add(d, g), L = t.sub(L, f), f = t.add(b, N);
      let w = t.add(v, I);
      return f = t.mul(f, w), w = t.add(d, y), f = t.sub(f, w), w = t.add(B, N), U = t.add(T, I), w = t.mul(w, U), U = t.add(g, y), w = t.sub(w, U), A = t.mul(D, f), U = t.mul(k, y), A = t.add(U, A), U = t.sub(g, A), A = t.add(g, A), x = t.mul(U, A), g = t.add(d, d), g = t.add(g, d), y = t.mul(D, y), f = t.mul(k, f), g = t.add(g, y), y = t.sub(d, y), y = t.mul(D, y), f = t.add(f, y), d = t.mul(g, f), x = t.add(x, d), d = t.mul(w, f), U = t.mul(L, U), U = t.sub(U, d), d = t.mul(L, g), A = t.mul(w, A), A = t.add(A, d), new l(U, x, A);
    }
    subtract(m) {
      return this.add(m.negate());
    }
    is0() {
      return this.equals(l.ZERO);
    }
    wNAF(m) {
      return S.wNAFCached(this, h, m, (b) => {
        const B = t.invertBatch(b.map((N) => N.pz));
        return b.map((N, v) => N.toAffine(B[v])).map(l.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(m) {
      const b = l.ZERO;
      if (m === de)
        return b;
      if (a(m), m === ee)
        return this;
      const { endo: B } = e;
      if (!B)
        return S.unsafeLadder(this, m);
      let { k1neg: N, k1: v, k2neg: T, k2: I } = B.splitScalar(m), U = b, x = b, A = this;
      for (; v > de || I > de; )
        v & ee && (U = U.add(A)), I & ee && (x = x.add(A)), A = A.double(), v >>= ee, I >>= ee;
      return N && (U = U.negate()), T && (x = x.negate()), x = new l(t.mul(x.px, B.beta), x.py, x.pz), U.add(x);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(m) {
      a(m);
      let b = m, B, N;
      const { endo: v } = e;
      if (v) {
        const { k1neg: T, k1: I, k2neg: U, k2: x } = v.splitScalar(b);
        let { p: A, f: D } = this.wNAF(I), { p: k, f: d } = this.wNAF(x);
        A = S.constTimeNegate(T, A), k = S.constTimeNegate(U, k), k = new l(t.mul(k.px, v.beta), k.py, k.pz), B = A.add(k), N = D.add(d);
      } else {
        const { p: T, f: I } = this.wNAF(b);
        B = T, N = I;
      }
      return l.normalizeZ([B, N])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(m, b, B) {
      const N = l.BASE, v = (I, U) => U === de || U === ee || !I.equals(N) ? I.multiplyUnsafe(U) : I.multiply(U), T = v(this, b).add(v(m, B));
      return T.is0() ? void 0 : T;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(m) {
      const { px: b, py: B, pz: N } = this, v = this.is0();
      m == null && (m = v ? t.ONE : t.inv(N));
      const T = t.mul(b, m), I = t.mul(B, m), U = t.mul(N, m);
      if (v)
        return { x: t.ZERO, y: t.ZERO };
      if (!t.eql(U, t.ONE))
        throw new Error("invZ was invalid");
      return { x: T, y: I };
    }
    isTorsionFree() {
      const { h: m, isTorsionFree: b } = e;
      if (m === ee)
        return !0;
      if (b)
        return b(l, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: m, clearCofactor: b } = e;
      return m === ee ? this : b ? b(l, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(m = !0) {
      return this.assertValidity(), n(l, this, m);
    }
    toHex(m = !0) {
      return re(this.toRawBytes(m));
    }
  }
  l.BASE = new l(e.Gx, e.Gy, t.ONE), l.ZERO = new l(t.ZERO, t.ONE, t.ZERO);
  const p = e.nBitLength, S = as(l, e.endo ? Math.ceil(p / 2) : p);
  return {
    CURVE: e,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function fs(r) {
  const e = Nr(r);
  return qe(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function ds(r) {
  const e = fs(r), { Fp: t, n } = e, s = t.BYTES + 1, i = 2 * t.BYTES + 1;
  function o(f) {
    return de < f && f < t.ORDER;
  }
  function a(f) {
    return z(f, n);
  }
  function c(f) {
    return It(f, n);
  }
  const { ProjectivePoint: h, normPrivateKeyToScalar: u, weierstrassEquation: l, isWithinCurveOrder: p } = hs({
    ...e,
    toBytes(f, w, E) {
      const R = w.toAffine(), O = t.toBytes(R.x), W = Ae;
      return E ? W(Uint8Array.from([w.hasEvenY() ? 2 : 3]), O) : W(Uint8Array.from([4]), O, t.toBytes(R.y));
    },
    fromBytes(f) {
      const w = f.length, E = f[0], R = f.subarray(1);
      if (w === s && (E === 2 || E === 3)) {
        const O = Q(R);
        if (!o(O))
          throw new Error("Point is not on curve");
        const W = l(O);
        let P = t.sqrt(W);
        const M = (P & ee) === ee;
        return (E & 1) === 1 !== M && (P = t.neg(P)), { x: O, y: P };
      } else if (w === i && E === 4) {
        const O = t.fromBytes(R.subarray(0, t.BYTES)), W = t.fromBytes(R.subarray(t.BYTES, 2 * t.BYTES));
        return { x: O, y: W };
      } else
        throw new Error(`Point of length ${w} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), S = (f) => re(Ee(f, e.nByteLength));
  function C(f) {
    const w = n >> ee;
    return f > w;
  }
  function m(f) {
    return C(f) ? a(-f) : f;
  }
  const b = (f, w, E) => Q(f.slice(w, E));
  class B {
    constructor(w, E, R) {
      this.r = w, this.s = E, this.recovery = R, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(w) {
      const E = e.nByteLength;
      return w = J("compactSignature", w, E * 2), new B(b(w, 0, E), b(w, E, 2 * E));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(w) {
      const { r: E, s: R } = Be.toSig(J("DER", w));
      return new B(E, R);
    }
    assertValidity() {
      if (!p(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!p(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(w) {
      return new B(this.r, this.s, w);
    }
    recoverPublicKey(w) {
      const { r: E, s: R, recovery: O } = this, W = x(J("msgHash", w));
      if (O == null || ![0, 1, 2, 3].includes(O))
        throw new Error("recovery id invalid");
      const P = O === 2 || O === 3 ? E + e.n : E;
      if (P >= t.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const M = O & 1 ? "03" : "02", V = h.fromHex(M + S(P)), G = c(P), le = a(-W * G), ue = a(R * G), se = h.BASE.multiplyAndAddUnsafe(V, le, ue);
      if (!se)
        throw new Error("point at infinify");
      return se.assertValidity(), se;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return C(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new B(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return ne(this.toDERHex());
    }
    toDERHex() {
      return Be.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return ne(this.toCompactHex());
    }
    toCompactHex() {
      return S(this.r) + S(this.s);
    }
  }
  const N = {
    isValidPrivateKey(f) {
      try {
        return u(f), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const f = kr(e.n);
      return is(e.randomBytes(f), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(f = 8, w = h.BASE) {
      return w._setWindowSize(f), w.multiply(BigInt(3)), w;
    }
  };
  function v(f, w = !0) {
    return h.fromPrivateKey(f).toRawBytes(w);
  }
  function T(f) {
    const w = f instanceof Uint8Array, E = typeof f == "string", R = (w || E) && f.length;
    return w ? R === s || R === i : E ? R === 2 * s || R === 2 * i : f instanceof h;
  }
  function I(f, w, E = !0) {
    if (T(f))
      throw new Error("first arg must be private key");
    if (!T(w))
      throw new Error("second arg must be public key");
    return h.fromHex(w).multiply(u(f)).toRawBytes(E);
  }
  const U = e.bits2int || function(f) {
    const w = Q(f), E = f.length * 8 - e.nBitLength;
    return E > 0 ? w >> BigInt(E) : w;
  }, x = e.bits2int_modN || function(f) {
    return a(U(f));
  }, A = Zt(e.nBitLength);
  function D(f) {
    if (typeof f != "bigint")
      throw new Error("bigint expected");
    if (!(de <= f && f < A))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return Ee(f, e.nByteLength);
  }
  function k(f, w, E = d) {
    if (["recovered", "canonical"].some((xe) => xe in E))
      throw new Error("sign() legacy options not supported");
    const { hash: R, randomBytes: O } = e;
    let { lowS: W, prehash: P, extraEntropy: M } = E;
    W == null && (W = !0), f = J("msgHash", f), P && (f = J("prehashed msgHash", R(f)));
    const V = x(f), G = u(w), le = [D(G), D(V)];
    if (M != null) {
      const xe = M === !0 ? O(t.BYTES) : M;
      le.push(J("extraEntropy", xe));
    }
    const ue = Ae(...le), se = V;
    function Ue(xe) {
      const Re = U(xe);
      if (!p(Re))
        return;
      const Xt = c(Re), Le = h.BASE.multiply(Re).toAffine(), ie = a(Le.x);
      if (ie === de)
        return;
      const Se = a(Xt * a(se + ie * G));
      if (Se === de)
        return;
      let $t = (Le.x === ie ? 0 : 2) | Number(Le.y & ee), er = Se;
      return W && C(Se) && (er = m(Se), $t ^= 1), new B(ie, er, $t);
    }
    return { seed: ue, k2sig: Ue };
  }
  const d = { lowS: e.lowS, prehash: !1 }, g = { lowS: e.lowS, prehash: !1 };
  function y(f, w, E = d) {
    const { seed: R, k2sig: O } = k(f, w, E), W = e;
    return Ur(W.hash.outputLen, W.nByteLength, W.hmac)(R, O);
  }
  h.BASE._setWindowSize(8);
  function L(f, w, E, R = g) {
    var Le;
    const O = f;
    if (w = J("msgHash", w), E = J("publicKey", E), "strict" in R)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: W, prehash: P } = R;
    let M, V;
    try {
      if (typeof O == "string" || O instanceof Uint8Array)
        try {
          M = B.fromDER(O);
        } catch (ie) {
          if (!(ie instanceof Be.Err))
            throw ie;
          M = B.fromCompact(O);
        }
      else if (typeof O == "object" && typeof O.r == "bigint" && typeof O.s == "bigint") {
        const { r: ie, s: Se } = O;
        M = new B(ie, Se);
      } else
        throw new Error("PARSE");
      V = h.fromHex(E);
    } catch (ie) {
      if (ie.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (W && M.hasHighS())
      return !1;
    P && (w = e.hash(w));
    const { r: G, s: le } = M, ue = x(w), se = c(le), Ue = a(ue * se), xe = a(G * se), Re = (Le = h.BASE.multiplyAndAddUnsafe(V, Ue, xe)) == null ? void 0 : Le.toAffine();
    return Re ? a(Re.x) === G : !1;
  }
  return {
    CURVE: e,
    getPublicKey: v,
    getSharedSecret: I,
    sign: y,
    verify: L,
    ProjectivePoint: h,
    Signature: B,
    utils: N
  };
}
class Dr extends Lr {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, On(e);
    const n = Gt(t);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? e.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = e.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(e) {
    return Ge(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Ge(this), Rr(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: t, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = s, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Fr = (r, e, t) => new Dr(r, e).update(t).digest();
Fr.create = (r, e) => new Dr(r, e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ws(r) {
  return {
    hash: r,
    hmac: (e, ...t) => Fr(r, e, _n(...t)),
    randomBytes: Sr
  };
}
function gs(r, e) {
  const t = (n) => ds({ ...r, ...ws(n) });
  return Object.freeze({ ...t(e), create: t });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const it = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Ye = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Or = BigInt(1), Je = BigInt(2), ur = (r, e) => (r + e / Je) / e;
function Pr(r) {
  const e = it, t = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), h = r * r * r % e, u = h * h * r % e, l = X(u, t, e) * u % e, p = X(l, t, e) * u % e, S = X(p, Je, e) * h % e, C = X(S, s, e) * S % e, m = X(C, i, e) * C % e, b = X(m, a, e) * m % e, B = X(b, c, e) * b % e, N = X(B, a, e) * m % e, v = X(N, t, e) * u % e, T = X(v, o, e) * C % e, I = X(T, n, e) * h % e, U = X(I, Je, e);
  if (!Tt.eql(Tt.sqr(U), r))
    throw new Error("Cannot find square root");
  return U;
}
const Tt = ss(it, void 0, void 0, { sqrt: Pr }), Yt = gs({
  a: BigInt(0),
  b: BigInt(7),
  Fp: Tt,
  n: Ye,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const e = Ye, t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -Or * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = t, o = BigInt("0x100000000000000000000000000000000"), a = ur(i * r, e), c = ur(-n * r, e);
      let h = z(r - a * t - c * s, e), u = z(-a * n - c * i, e);
      const l = h > o, p = u > o;
      if (l && (h = e - h), p && (u = e - u), h > o || u > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: l, k1: h, k2neg: p, k2: u };
    }
  }
}, Me), ot = BigInt(0), jr = (r) => typeof r == "bigint" && ot < r && r < it, ps = (r) => typeof r == "bigint" && ot < r && r < Ye, hr = {};
function Ke(r, ...e) {
  let t = hr[r];
  if (t === void 0) {
    const n = Me(Uint8Array.from(r, (s) => s.charCodeAt(0)));
    t = Ae(n, n), hr[r] = t;
  }
  return Me(Ae(t, ...e));
}
const Jt = (r) => r.toRawBytes(!0).slice(1), kt = (r) => Ee(r, 32), pt = (r) => z(r, it), We = (r) => z(r, Ye), Kt = Yt.ProjectivePoint, ys = (r, e, t) => Kt.BASE.multiplyAndAddUnsafe(r, e, t);
function Nt(r) {
  let e = Yt.utils.normPrivateKeyToScalar(r), t = Kt.fromPrivateKey(e);
  return { scalar: t.hasEvenY() ? e : We(-e), bytes: Jt(t) };
}
function Mr(r) {
  if (!jr(r))
    throw new Error("bad x: need 0 < x < p");
  const e = pt(r * r), t = pt(e * r + BigInt(7));
  let n = Pr(t);
  n % Je !== ot && (n = pt(-n));
  const s = new Kt(r, n, Or);
  return s.assertValidity(), s;
}
function Wr(...r) {
  return We(Q(Ke("BIP0340/challenge", ...r)));
}
function bs(r) {
  return Nt(r).bytes;
}
function ms(r, e, t = Sr(32)) {
  const n = J("message", r), { bytes: s, scalar: i } = Nt(e), o = J("auxRand", t, 32), a = kt(i ^ Q(Ke("BIP0340/aux", o))), c = Ke("BIP0340/nonce", a, s, n), h = We(Q(c));
  if (h === ot)
    throw new Error("sign failed: k is zero");
  const { bytes: u, scalar: l } = Nt(h), p = Wr(u, s, n), S = new Uint8Array(64);
  if (S.set(u, 0), S.set(kt(We(l + p * i)), 32), !qr(S, n, s))
    throw new Error("sign: Invalid signature produced");
  return S;
}
function qr(r, e, t) {
  const n = J("signature", r, 64), s = J("message", e), i = J("publicKey", t, 32);
  try {
    const o = Mr(Q(i)), a = Q(n.subarray(0, 32));
    if (!jr(a))
      return !1;
    const c = Q(n.subarray(32, 64));
    if (!ps(c))
      return !1;
    const h = Wr(kt(a), Jt(o), s), u = ys(o, c, We(-h));
    return !(!u || !u.hasEvenY() || u.toAffine().x !== a);
  } catch {
    return !1;
  }
}
const Ve = /* @__PURE__ */ (() => ({
  getPublicKey: bs,
  sign: ms,
  verify: qr,
  utils: {
    randomPrivateKey: Yt.utils.randomPrivateKey,
    lift_x: Mr,
    pointToBytes: Jt,
    numberToBytesBE: Ee,
    bytesToNumberBE: Q,
    taggedHash: Ke,
    mod: z
  }
}))();
function be(r) {
  if (r == null)
    throw new Error("missing value");
  return r;
}
function Es(r, e) {
  if (typeof e != "string" || e.length === 0 || e.length % 2 !== 0)
    return "";
  try {
    const t = ne(e);
    return te.encode(r, te.toWords(t));
  } catch (t) {
    return console.warn("Invalid hex", e, t), "";
  }
}
function vs() {
  return Math.floor(xs() / 1e3);
}
function xs() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const Cs = (r) => re(Me(r));
function Bs(r) {
  return re(Ve.getPublicKey(r));
}
function fr(r) {
  const e = te.decode(r, 1e3), t = te.fromWords(e.words);
  return re(Uint8Array.from(t));
}
function As(r) {
  return r.filter((e) => e != null).map((e) => be(e));
}
function Us() {
  return !("navigator" in globalThis && globalThis.navigator.onLine);
}
function _r(r) {
  return [...r].map((e) => e.charCodeAt(0)).every((e) => e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 || e <= 122);
}
async function Hr(r, e = 200) {
  for (; r && r.length > 0; ) {
    const t = r.shift();
    if (t)
      try {
        const n = await t.next();
        t.resolve(n);
      } catch (n) {
        t.reject(n);
      }
  }
  setTimeout(() => Hr(r, e), e);
}
var Rs = {};
(function(r) {
  /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(r, "__esModule", { value: !0 }), r.bytes = r.stringToBytes = r.str = r.bytesToString = r.hex = r.utf8 = r.bech32m = r.bech32 = r.base58check = r.base58xmr = r.base58xrp = r.base58flickr = r.base58 = r.base64url = r.base64 = r.base32crockford = r.base32hex = r.base32 = r.base16 = r.utils = r.assertNumber = void 0;
  function e(d) {
    if (!Number.isSafeInteger(d))
      throw new Error(`Wrong integer: ${d}`);
  }
  r.assertNumber = e;
  function t(...d) {
    const g = (f, w) => (E) => f(w(E)), y = Array.from(d).reverse().reduce((f, w) => f ? g(f, w.encode) : w.encode, void 0), L = d.reduce((f, w) => f ? g(f, w.decode) : w.decode, void 0);
    return { encode: y, decode: L };
  }
  function n(d) {
    return {
      encode: (g) => {
        if (!Array.isArray(g) || g.length && typeof g[0] != "number")
          throw new Error("alphabet.encode input should be an array of numbers");
        return g.map((y) => {
          if (e(y), y < 0 || y >= d.length)
            throw new Error(`Digit index outside alphabet: ${y} (alphabet: ${d.length})`);
          return d[y];
        });
      },
      decode: (g) => {
        if (!Array.isArray(g) || g.length && typeof g[0] != "string")
          throw new Error("alphabet.decode input should be array of strings");
        return g.map((y) => {
          if (typeof y != "string")
            throw new Error(`alphabet.decode: not string element=${y}`);
          const L = d.indexOf(y);
          if (L === -1)
            throw new Error(`Unknown letter: "${y}". Allowed: ${d}`);
          return L;
        });
      }
    };
  }
  function s(d = "") {
    if (typeof d != "string")
      throw new Error("join separator should be string");
    return {
      encode: (g) => {
        if (!Array.isArray(g) || g.length && typeof g[0] != "string")
          throw new Error("join.encode input should be array of strings");
        for (let y of g)
          if (typeof y != "string")
            throw new Error(`join.encode: non-string input=${y}`);
        return g.join(d);
      },
      decode: (g) => {
        if (typeof g != "string")
          throw new Error("join.decode input should be string");
        return g.split(d);
      }
    };
  }
  function i(d, g = "=") {
    if (e(d), typeof g != "string")
      throw new Error("padding chr should be string");
    return {
      encode(y) {
        if (!Array.isArray(y) || y.length && typeof y[0] != "string")
          throw new Error("padding.encode input should be array of strings");
        for (let L of y)
          if (typeof L != "string")
            throw new Error(`padding.encode: non-string input=${L}`);
        for (; y.length * d % 8; )
          y.push(g);
        return y;
      },
      decode(y) {
        if (!Array.isArray(y) || y.length && typeof y[0] != "string")
          throw new Error("padding.encode input should be array of strings");
        for (let f of y)
          if (typeof f != "string")
            throw new Error(`padding.decode: non-string input=${f}`);
        let L = y.length;
        if (L * d % 8)
          throw new Error("Invalid padding: string should have whole number of bytes");
        for (; L > 0 && y[L - 1] === g; L--)
          if (!((L - 1) * d % 8))
            throw new Error("Invalid padding: string has too much padding");
        return y.slice(0, L);
      }
    };
  }
  function o(d) {
    if (typeof d != "function")
      throw new Error("normalize fn should be function");
    return { encode: (g) => g, decode: (g) => d(g) };
  }
  function a(d, g, y) {
    if (g < 2)
      throw new Error(`convertRadix: wrong from=${g}, base cannot be less than 2`);
    if (y < 2)
      throw new Error(`convertRadix: wrong to=${y}, base cannot be less than 2`);
    if (!Array.isArray(d))
      throw new Error("convertRadix: data should be array");
    if (!d.length)
      return [];
    let L = 0;
    const f = [], w = Array.from(d);
    for (w.forEach((E) => {
      if (e(E), E < 0 || E >= g)
        throw new Error(`Wrong integer: ${E}`);
    }); ; ) {
      let E = 0, R = !0;
      for (let O = L; O < w.length; O++) {
        const W = w[O], P = g * E + W;
        if (!Number.isSafeInteger(P) || g * E / g !== E || P - W !== g * E)
          throw new Error("convertRadix: carry overflow");
        if (E = P % y, w[O] = Math.floor(P / y), !Number.isSafeInteger(w[O]) || w[O] * y + E !== P)
          throw new Error("convertRadix: carry overflow");
        if (R)
          w[O] ? R = !1 : L = O;
        else
          continue;
      }
      if (f.push(E), R)
        break;
    }
    for (let E = 0; E < d.length - 1 && d[E] === 0; E++)
      f.push(0);
    return f.reverse();
  }
  const c = (d, g) => g ? c(g, d % g) : d, h = (d, g) => d + (g - c(d, g));
  function u(d, g, y, L) {
    if (!Array.isArray(d))
      throw new Error("convertRadix2: data should be array");
    if (g <= 0 || g > 32)
      throw new Error(`convertRadix2: wrong from=${g}`);
    if (y <= 0 || y > 32)
      throw new Error(`convertRadix2: wrong to=${y}`);
    if (h(g, y) > 32)
      throw new Error(`convertRadix2: carry overflow from=${g} to=${y} carryBits=${h(g, y)}`);
    let f = 0, w = 0;
    const E = 2 ** y - 1, R = [];
    for (const O of d) {
      if (e(O), O >= 2 ** g)
        throw new Error(`convertRadix2: invalid data word=${O} from=${g}`);
      if (f = f << g | O, w + g > 32)
        throw new Error(`convertRadix2: carry overflow pos=${w} from=${g}`);
      for (w += g; w >= y; w -= y)
        R.push((f >> w - y & E) >>> 0);
      f &= 2 ** w - 1;
    }
    if (f = f << y - w & E, !L && w >= g)
      throw new Error("Excess padding");
    if (!L && f)
      throw new Error(`Non-zero padding: ${f}`);
    return L && w > 0 && R.push(f >>> 0), R;
  }
  function l(d) {
    return e(d), {
      encode: (g) => {
        if (!(g instanceof Uint8Array))
          throw new Error("radix.encode input should be Uint8Array");
        return a(Array.from(g), 2 ** 8, d);
      },
      decode: (g) => {
        if (!Array.isArray(g) || g.length && typeof g[0] != "number")
          throw new Error("radix.decode input should be array of strings");
        return Uint8Array.from(a(g, d, 2 ** 8));
      }
    };
  }
  function p(d, g = !1) {
    if (e(d), d <= 0 || d > 32)
      throw new Error("radix2: bits should be in (0..32]");
    if (h(8, d) > 32 || h(d, 8) > 32)
      throw new Error("radix2: carry overflow");
    return {
      encode: (y) => {
        if (!(y instanceof Uint8Array))
          throw new Error("radix2.encode input should be Uint8Array");
        return u(Array.from(y), 8, d, !g);
      },
      decode: (y) => {
        if (!Array.isArray(y) || y.length && typeof y[0] != "number")
          throw new Error("radix2.decode input should be array of strings");
        return Uint8Array.from(u(y, d, 8, g));
      }
    };
  }
  function S(d) {
    if (typeof d != "function")
      throw new Error("unsafeWrapper fn should be function");
    return function(...g) {
      try {
        return d.apply(null, g);
      } catch {
      }
    };
  }
  function C(d, g) {
    if (e(d), typeof g != "function")
      throw new Error("checksum fn should be function");
    return {
      encode(y) {
        if (!(y instanceof Uint8Array))
          throw new Error("checksum.encode: input should be Uint8Array");
        const L = g(y).slice(0, d), f = new Uint8Array(y.length + d);
        return f.set(y), f.set(L, y.length), f;
      },
      decode(y) {
        if (!(y instanceof Uint8Array))
          throw new Error("checksum.decode: input should be Uint8Array");
        const L = y.slice(0, -d), f = g(L).slice(0, d), w = y.slice(-d);
        for (let E = 0; E < d; E++)
          if (f[E] !== w[E])
            throw new Error("Invalid checksum");
        return L;
      }
    };
  }
  r.utils = { alphabet: n, chain: t, checksum: C, radix: l, radix2: p, join: s, padding: i }, r.base16 = t(p(4), n("0123456789ABCDEF"), s("")), r.base32 = t(p(5), n("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), i(5), s("")), r.base32hex = t(p(5), n("0123456789ABCDEFGHIJKLMNOPQRSTUV"), i(5), s("")), r.base32crockford = t(p(5), n("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), s(""), o((d) => d.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))), r.base64 = t(p(6), n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), i(6), s("")), r.base64url = t(p(6), n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), i(6), s(""));
  const m = (d) => t(l(58), n(d), s(""));
  r.base58 = m("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), r.base58flickr = m("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), r.base58xrp = m("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
  const b = [0, 2, 3, 5, 6, 7, 9, 10, 11];
  r.base58xmr = {
    encode(d) {
      let g = "";
      for (let y = 0; y < d.length; y += 8) {
        const L = d.subarray(y, y + 8);
        g += r.base58.encode(L).padStart(b[L.length], "1");
      }
      return g;
    },
    decode(d) {
      let g = [];
      for (let y = 0; y < d.length; y += 11) {
        const L = d.slice(y, y + 11), f = b.indexOf(L.length), w = r.base58.decode(L);
        for (let E = 0; E < w.length - f; E++)
          if (w[E] !== 0)
            throw new Error("base58xmr: wrong padding");
        g = g.concat(Array.from(w.slice(w.length - f)));
      }
      return Uint8Array.from(g);
    }
  };
  const B = (d) => t(C(4, (g) => d(d(g))), r.base58);
  r.base58check = B;
  const N = t(n("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), s("")), v = [996825010, 642813549, 513874426, 1027748829, 705979059];
  function T(d) {
    const g = d >> 25;
    let y = (d & 33554431) << 5;
    for (let L = 0; L < v.length; L++)
      (g >> L & 1) === 1 && (y ^= v[L]);
    return y;
  }
  function I(d, g, y = 1) {
    const L = d.length;
    let f = 1;
    for (let w = 0; w < L; w++) {
      const E = d.charCodeAt(w);
      if (E < 33 || E > 126)
        throw new Error(`Invalid prefix (${d})`);
      f = T(f) ^ E >> 5;
    }
    f = T(f);
    for (let w = 0; w < L; w++)
      f = T(f) ^ d.charCodeAt(w) & 31;
    for (let w of g)
      f = T(f) ^ w;
    for (let w = 0; w < 6; w++)
      f = T(f);
    return f ^= y, N.encode(u([f % 2 ** 30], 30, 5, !1));
  }
  function U(d) {
    const g = d === "bech32" ? 1 : 734539939, y = p(5), L = y.decode, f = y.encode, w = S(L);
    function E(P, M, V = 90) {
      if (typeof P != "string")
        throw new Error(`bech32.encode prefix should be string, not ${typeof P}`);
      if (!Array.isArray(M) || M.length && typeof M[0] != "number")
        throw new Error(`bech32.encode words should be array of numbers, not ${typeof M}`);
      const G = P.length + 7 + M.length;
      if (V !== !1 && G > V)
        throw new TypeError(`Length ${G} exceeds limit ${V}`);
      return P = P.toLowerCase(), `${P}1${N.encode(M)}${I(P, M, g)}`;
    }
    function R(P, M = 90) {
      if (typeof P != "string")
        throw new Error(`bech32.decode input should be string, not ${typeof P}`);
      if (P.length < 8 || M !== !1 && P.length > M)
        throw new TypeError(`Wrong string length: ${P.length} (${P}). Expected (8..${M})`);
      const V = P.toLowerCase();
      if (P !== V && P !== P.toUpperCase())
        throw new Error("String must be lowercase or uppercase");
      P = V;
      const G = P.lastIndexOf("1");
      if (G === 0 || G === -1)
        throw new Error('Letter "1" must be present between prefix and data only');
      const le = P.slice(0, G), ue = P.slice(G + 1);
      if (ue.length < 6)
        throw new Error("Data must be at least 6 characters long");
      const se = N.decode(ue).slice(0, -6), Ue = I(le, se, g);
      if (!ue.endsWith(Ue))
        throw new Error(`Invalid checksum in ${P}: expected "${Ue}"`);
      return { prefix: le, words: se };
    }
    const O = S(R);
    function W(P) {
      const { prefix: M, words: V } = R(P, !1);
      return { prefix: M, words: V, bytes: L(V) };
    }
    return { encode: E, decode: R, decodeToBytes: W, decodeUnsafe: O, fromWords: L, fromWordsUnsafe: w, toWords: f };
  }
  r.bech32 = U("bech32"), r.bech32m = U("bech32m"), r.utf8 = {
    encode: (d) => new TextDecoder().decode(d),
    decode: (d) => new TextEncoder().encode(d)
  }, r.hex = t(p(4), n("0123456789abcdef"), s(""), o((d) => {
    if (typeof d != "string" || d.length % 2)
      throw new TypeError(`hex.decode: expected string, got ${typeof d} with length ${d.length}`);
    return d.toLowerCase();
  }));
  const x = {
    utf8: r.utf8,
    hex: r.hex,
    base16: r.base16,
    base32: r.base32,
    base64: r.base64,
    base64url: r.base64url,
    base58: r.base58,
    base58xmr: r.base58xmr
  }, A = `Invalid encoding type. Available types: ${Object.keys(x).join(", ")}`, D = (d, g) => {
    if (typeof d != "string" || !x.hasOwnProperty(d))
      throw new TypeError(A);
    if (!(g instanceof Uint8Array))
      throw new TypeError("bytesToString() expects Uint8Array");
    return x[d].encode(g);
  };
  r.bytesToString = D, r.str = r.bytesToString;
  const k = (d, g) => {
    if (!x.hasOwnProperty(d))
      throw new TypeError(A);
    if (typeof g != "string")
      throw new TypeError("stringToBytes() expects string");
    return x[d].decode(g);
  };
  r.stringToBytes = k, r.bytes = r.stringToBytes;
})(Rs);
BigInt(1e3), BigInt(1e6), BigInt(1e9), BigInt(1e12);
BigInt("2100000000000000000");
BigInt(1e11);
const dr = {
  payment_hash: 1,
  payment_secret: 16,
  description: 13,
  payee: 19,
  description_hash: 23,
  // commit to longer descriptions (used by lnurl-pay)
  expiry: 6,
  // default: 3600 (1 hour)
  min_final_cltv_expiry: 24,
  // default: 9
  fallback_address: 9,
  route_hint: 3,
  // for extra routing info (private etc.)
  feature_bits: 5,
  metadata: 27
};
for (let r = 0, e = Object.keys(dr); r < e.length; r++)
  e[r], dr[e[r]].toString();
function Dt(r, e) {
  const t = r.tags.find((n) => n[0] === e);
  return t && t[1];
}
Cr("OutboxModel");
var Vr = /* @__PURE__ */ ((r) => (r[r.Unknown = -1] = "Unknown", r[r.SetMetadata = 0] = "SetMetadata", r[r.TextNote = 1] = "TextNote", r[r.RecommendServer = 2] = "RecommendServer", r[r.ContactList = 3] = "ContactList", r[r.DirectMessage = 4] = "DirectMessage", r[r.Deletion = 5] = "Deletion", r[r.Repost = 6] = "Repost", r[r.Reaction = 7] = "Reaction", r[r.BadgeAward = 8] = "BadgeAward", r[r.SimpleChatMessage = 9] = "SimpleChatMessage", r[r.SealedRumor = 13] = "SealedRumor", r[r.ChatRumor = 14] = "ChatRumor", r[r.PublicChatChannel = 40] = "PublicChatChannel", r[r.PublicChatMetadata = 41] = "PublicChatMetadata", r[r.PublicChatMessage = 42] = "PublicChatMessage", r[r.PublicChatMuteMessage = 43] = "PublicChatMuteMessage", r[r.PublicChatMuteUser = 44] = "PublicChatMuteUser", r[r.SnortSubscriptions = 1e3] = "SnortSubscriptions", r[r.Polls = 6969] = "Polls", r[r.GiftWrap = 1059] = "GiftWrap", r[r.FileHeader = 1063] = "FileHeader", r[r.Relays = 10002] = "Relays", r[r.Ephemeral = 2e4] = "Ephemeral", r[r.Auth = 22242] = "Auth", r[r.MuteList = 1e4] = "MuteList", r[r.PinList = 10001] = "PinList", r[r.BookmarksList = 10003] = "BookmarksList", r[r.CommunitiesList = 10004] = "CommunitiesList", r[r.PublicChatsList = 10005] = "PublicChatsList", r[r.BlockedRelaysList = 10006] = "BlockedRelaysList", r[r.SearchRelaysList = 10007] = "SearchRelaysList", r[r.InterestsList = 10015] = "InterestsList", r[r.EmojisList = 10030] = "EmojisList", r[r.FollowSet = 3e4] = "FollowSet", r[r.RelaySet = 30002] = "RelaySet", r[r.BookmarkSet = 30003] = "BookmarkSet", r[r.CurationSet = 30004] = "CurationSet", r[r.InterestSet = 30015] = "InterestSet", r[r.EmojiSet = 30030] = "EmojiSet", r[r.Badge = 30009] = "Badge", r[r.ProfileBadges = 30008] = "ProfileBadges", r[r.LongFormTextNote = 30023] = "LongFormTextNote", r[r.AppData = 30078] = "AppData", r[r.LiveEvent = 30311] = "LiveEvent", r[r.UserStatus = 30315] = "UserStatus", r[r.ZapstrTrack = 31337] = "ZapstrTrack", r[r.SimpleChatMetadata = 39e3] = "SimpleChatMetadata", r[r.ZapRequest = 9734] = "ZapRequest", r[r.ZapReceipt = 9735] = "ZapReceipt", r[r.HttpAuthentication = 27235] = "HttpAuthentication", r))(Vr || {});
const yt = Vr, oe = class oe {
  static id(e) {
    if (e.startsWith("npub"))
      throw new Error("use hex instead of npub " + e);
    const t = oe.strToUniqueId.get(e);
    if (t)
      return t;
    const n = oe.currentUniqueId++;
    return oe.strToUniqueId.set(e, n), oe.uniqueIdToStr.set(n, e), n;
  }
  static str(e) {
    const t = oe.uniqueIdToStr.get(e);
    if (!t)
      throw new Error("pub: invalid id " + e);
    return t;
  }
  static has(e) {
    return oe.strToUniqueId.has(e);
  }
};
ae(oe, "strToUniqueId", /* @__PURE__ */ new Map()), ae(oe, "uniqueIdToStr", /* @__PURE__ */ new Map()), ae(oe, "currentUniqueId", 0);
let Qe = oe;
const bt = Qe.str, $ = Qe.id;
class Ls {
  constructor(e) {
    ae(this, "root");
    ae(this, "followDistanceByUser", /* @__PURE__ */ new Map());
    ae(this, "usersByFollowDistance", /* @__PURE__ */ new Map());
    ae(this, "followedByUser", /* @__PURE__ */ new Map());
    ae(this, "followersByUser", /* @__PURE__ */ new Map());
    ae(this, "latestFollowEventTimestamps", /* @__PURE__ */ new Map());
    this.root = $(e), this.followDistanceByUser.set(this.root, 0), this.usersByFollowDistance.set(0, /* @__PURE__ */ new Set([this.root]));
  }
  setRoot(e) {
    const t = $(e);
    if (t === this.root)
      return;
    this.root = t, this.followDistanceByUser.clear(), this.usersByFollowDistance.clear(), this.followDistanceByUser.set(this.root, 0), this.usersByFollowDistance.set(0, /* @__PURE__ */ new Set([this.root]));
    const n = [this.root];
    for (; n.length > 0; ) {
      const s = n.shift(), i = this.followDistanceByUser.get(s), o = this.followersByUser.get(s) || /* @__PURE__ */ new Set();
      for (const a of o)
        if (!this.followDistanceByUser.has(a)) {
          const c = i + 1;
          this.followDistanceByUser.set(a, c), this.usersByFollowDistance.has(c) || this.usersByFollowDistance.set(c, /* @__PURE__ */ new Set()), this.usersByFollowDistance.get(c).add(a), n.push(a);
        }
    }
  }
  handleFollowEvent(e) {
    try {
      const t = $(e.pubkey), n = e.created_at, s = this.latestFollowEventTimestamps.get(t);
      if (s && n <= s)
        return;
      this.latestFollowEventTimestamps.set(t, n);
      const i = /* @__PURE__ */ new Set();
      for (const a of e.tags)
        if (a[0] === "p") {
          const c = $(a[1]);
          c !== t && i.add(c);
        }
      const o = this.followedByUser.get(t) || /* @__PURE__ */ new Set();
      for (const a of o)
        i.has(a) || this.removeFollower(a, t);
      for (const a of i)
        this.addFollower(a, t);
    } catch {
    }
  }
  isFollowing(e, t) {
    var i;
    const n = $(t), s = $(e);
    return !!((i = this.followedByUser.get(s)) != null && i.has(n));
  }
  getFollowDistance(e) {
    try {
      const t = $(e);
      if (t === this.root)
        return 0;
      const n = this.followDistanceByUser.get(t);
      return n === void 0 ? 1e3 : n;
    } catch {
      return 1e3;
    }
  }
  addUserByFollowDistance(e, t) {
    var n, s;
    this.usersByFollowDistance.has(e) || this.usersByFollowDistance.set(e, /* @__PURE__ */ new Set()), (n = this.usersByFollowDistance.get(e)) == null || n.add(t);
    for (const i of this.usersByFollowDistance.keys())
      i > e && ((s = this.usersByFollowDistance.get(i)) == null || s.delete(t));
  }
  addFollower(e, t) {
    var n, s, i;
    if (typeof e != "number" || typeof t != "number")
      throw new Error("Invalid user id");
    if (this.followersByUser.has(e) || this.followersByUser.set(e, /* @__PURE__ */ new Set()), (n = this.followersByUser.get(e)) == null || n.add(t), this.followedByUser.has(t) || this.followedByUser.set(t, /* @__PURE__ */ new Set()), e !== this.root) {
      let o;
      if (t === this.root)
        o = 1, this.addUserByFollowDistance(o, e), this.followDistanceByUser.set(e, o);
      else {
        const a = this.followDistanceByUser.get(e), c = this.followDistanceByUser.get(t);
        o = c && c + 1, (a === void 0 || o && o < a) && (this.followDistanceByUser.set(e, o), this.addUserByFollowDistance(o, e));
      }
    }
    (s = this.followedByUser.get(t)) == null || s.add(e), (i = this.followedByUser.get(this.root)) != null && i.has(t);
  }
  removeFollower(e, t) {
    var s, i;
    if ((s = this.followersByUser.get(e)) == null || s.delete(t), (i = this.followedByUser.get(t)) == null || i.delete(e), e === this.root)
      return;
    let n = 1 / 0;
    for (const o of this.followersByUser.get(e) || []) {
      const a = this.followDistanceByUser.get(o);
      a !== void 0 && a + 1 < n && (n = a + 1);
    }
    n === 1 / 0 ? this.followDistanceByUser.delete(e) : this.followDistanceByUser.set(e, n);
  }
  // TODO subscription methods for followersByUser and followedByUser. and maybe messagesByTime. and replies
  followerCount(e) {
    var n;
    const t = $(e);
    return ((n = this.followersByUser.get(t)) == null ? void 0 : n.size) ?? 0;
  }
  followedByFriendsCount(e) {
    var s;
    let t = 0;
    const n = $(e);
    for (const i of this.followersByUser.get(n) ?? [])
      (s = this.followedByUser.get(this.root)) != null && s.has(i) && t++;
    return t;
  }
  followedByFriends(e) {
    var s;
    const t = $(e), n = /* @__PURE__ */ new Set();
    for (const i of this.followersByUser.get(t) ?? [])
      (s = this.followedByUser.get(this.root)) != null && s.has(i) && n.add(bt(i));
    return n;
  }
  getFollowedByUser(e, t = !1) {
    const n = $(e), s = /* @__PURE__ */ new Set();
    for (const i of this.followedByUser.get(n) || [])
      s.add(bt(i));
    return t && s.add(e), s;
  }
  getFollowersByUser(e) {
    const t = $(e), n = /* @__PURE__ */ new Set();
    for (const s of this.followersByUser.get(t) || [])
      n.add(bt(s));
    return n;
  }
}
new Ls("");
var F = /* @__PURE__ */ ((r) => (r.PublicKey = "npub", r.PrivateKey = "nsec", r.Note = "note", r.Profile = "nprofile", r.Event = "nevent", r.Relay = "nrelay", r.Address = "naddr", r.Req = "nreq", r))(F || {}), Te = /* @__PURE__ */ ((r) => (r[r.Special = 0] = "Special", r[r.Relay = 1] = "Relay", r[r.Author = 2] = "Author", r[r.Kind = 3] = "Kind", r))(Te || {});
function Zr(r, e, t, n, s) {
  const i = new TextEncoder(), o = r === "naddr" ? i.encode(e) : ne(e), a = [0, o.length, ...o], c = (t == null ? void 0 : t.map((l) => {
    const p = i.encode(l);
    return [1, p.length, ...p];
  }).flat()) ?? [], h = s ? [2, 32, ...ne(s)] : [], u = n ? [3, 4, ...new Uint8Array(new Uint32Array([n]).buffer).reverse()] : [];
  return te.encode(r, te.toWords(new Uint8Array([...a, ...c, ...h, ...u])), 1e3);
}
function Ss(r, ...e) {
  const t = new TextEncoder(), n = [];
  for (const s of e)
    switch (s.type) {
      case 0: {
        const i = r === "naddr" || r === "nreq" ? t.encode(s.value) : ne(s.value);
        n.push(0, i.length, ...i);
        break;
      }
      case 1: {
        const i = t.encode(s.value);
        n.push(1, i.length, ...i);
        break;
      }
      case 2: {
        if (s.value.length !== 64)
          throw new Error("Author must be 32 bytes");
        n.push(2, 32, ...ne(s.value));
        break;
      }
      case 3: {
        if (typeof s.value != "number")
          throw new Error("Kind must be a number");
        n.push(3, 4, ...new Uint8Array(new Uint32Array([s.value]).buffer).reverse());
        break;
      }
    }
  return te.encode(r, te.toWords(new Uint8Array(n)), 1e3);
}
function Is(r) {
  const e = te.decode(r, 1e3), t = te.fromWords(e.words), n = [];
  let s = 0;
  for (; s < t.length; ) {
    const i = t[s], o = t[s + 1], a = t.slice(s + 2, s + 2 + o);
    n.push({
      type: i,
      length: o,
      value: Ts(i, e.prefix, new Uint8Array(a))
    }), s += 2 + o;
  }
  return n;
}
function Ts(r, e, t) {
  switch (r) {
    case 0:
      return e === "naddr" || e === "nreq" ? new TextDecoder().decode(t) : re(t);
    case 2:
      return re(t);
    case 3:
      return new Uint32Array(new Uint8Array(t.reverse()).buffer)[0];
    case 1:
      return new TextDecoder().decode(t);
  }
}
function ks(r, e) {
  let t = 0, n = r.tags.findIndex((s) => s[0] === "nonce");
  n === -1 && (n = r.tags.length, r.tags.push(["nonce", t.toString(), e.toString()]));
  do
    r.tags[n][1] = (++t).toString(), r.id = Ns(r);
  while (Ds(r.id) < e);
  return r;
}
function Ns(r) {
  const e = [0, r.pubkey, r.created_at, r.kind, r.tags, r.content];
  return Wn(Me(JSON.stringify(e)));
}
function Ds(r) {
  let e = 0;
  for (let t = 0; t < r.length; t++) {
    const n = parseInt(r[t], 16);
    if (n === 0)
      e += 4;
    else {
      e += Math.clz32(n) - 28;
      break;
    }
  }
  return e;
}
class Xe {
  /**
   * Get the pub key of the creator of this event NIP-26
   */
  static getRootPubKey(e) {
    const t = e.tags.find((n) => n[0] === "delegation");
    return t != null && t[1] ? t[1] : e.pubkey;
  }
  /**
   * Sign this message with a private key
   */
  static sign(e, t) {
    e.pubkey = Bs(t), e.id = this.createId(e);
    const n = Ve.sign(e.id, t);
    if (e.sig = re(n), !Ve.verify(e.sig, e.id, e.pubkey))
      throw new Error("Signing failed");
    return e;
  }
  /**
   * Check the signature of this message
   * @returns True if valid signature
   */
  static verify(e) {
    var s;
    if ((((s = e.sig) == null ? void 0 : s.length) ?? 0) < 64)
      return !1;
    const t = this.createId(e);
    return Ve.verify(e.sig, t, e.pubkey);
  }
  static createId(e) {
    const t = [0, e.pubkey, e.created_at, e.kind, e.tags, e.content];
    return Cs(JSON.stringify(t));
  }
  /**
   * Mine POW for an event (NIP-13)
   */
  static minePow(e, t) {
    return ks(e, t);
  }
  /**
   * Create a new event for a specific pubkey
   */
  static forPubKey(e, t) {
    return {
      pubkey: e,
      kind: t,
      created_at: vs(),
      content: "",
      tags: [],
      id: "",
      sig: ""
    };
  }
  static parseTag(e) {
    if (e.length < 1)
      throw new Error("Invalid tag, must have more than 2 items");
    const t = {
      key: e[0],
      value: e[1]
    };
    switch (t.key) {
      case "a":
      case "e": {
        t.relay = e.length > 2 ? e[2] : void 0, t.marker = e.length > 3 ? e[3] : void 0;
        break;
      }
    }
    return t;
  }
  static extractThread(e) {
    const t = {
      mentions: [],
      pubKeys: []
    }, n = e.tags.filter((s) => s[0] === "e" || s[0] === "a").map((s) => Xe.parseTag(s));
    if (n.length > 0)
      if (!n.some((i) => i.marker))
        t.root = n[0], t.root.marker = "root", n.length > 1 && (t.replyTo = n[n.length - 1], t.replyTo.marker = "reply"), n.length > 2 && (t.mentions = n.slice(1, -1), t.mentions.forEach((i) => i.marker = "mention"));
      else {
        const i = n.find((a) => a.marker === "root"), o = n.find((a) => a.marker === "reply");
        t.root = i, t.replyTo = o, t.mentions = n.filter((a) => a.marker === "mention");
      }
    else
      return;
    return t.pubKeys = Array.from(new Set(e.tags.filter((s) => s[0] === "p").map((s) => s[1]))), t;
  }
  /**
   * Assign props if undefined
   */
  static fixupEvent(e) {
    e.tags ?? (e.tags = []), e.created_at ?? (e.created_at = 0), e.content ?? (e.content = ""), e.id ?? (e.id = ""), e.kind ?? (e.kind = 0), e.pubkey ?? (e.pubkey = ""), e.sig ?? (e.sig = "");
  }
  static getType(e) {
    const t = [0, 3, 41];
    return e >= 3e4 && e < 4e4 ? 2 : e >= 1e4 && e < 2e4 || t.includes(e) ? 1 : 0;
  }
  static isValid(e) {
    return !(Xe.getType(e.kind) === 2 && !Dt(e, "d"));
  }
}
class H {
  constructor(e, t, n, s, i) {
    if (this.type = e, this.id = t, this.kind = n, this.author = s, this.relays = i, e !== F.Address && !_r(t))
      throw new Error("ID must be hex");
  }
  encode(e) {
    try {
      let t = this.type === F.Address ? this.type : e ?? this.type;
      return t === F.Note || t === F.PrivateKey || t === F.PublicKey ? Es(t, this.id) : Zr(t, this.id, this.relays, this.kind, this.author);
    } catch (t) {
      throw console.error("Invalid data", this, t), t;
    }
  }
  toEventTag(e) {
    const t = this.relays ? [this.relays[0]] : [];
    if (e && (t.length === 0 && t.push(""), t.push(e)), this.type === F.PublicKey || this.type === F.Profile)
      return ["p", this.id, ...t];
    if (this.type === F.Note || this.type === F.Event)
      return ["e", this.id, ...t];
    if (this.type === F.Address)
      return ["a", `${this.kind}:${this.author}:${this.id}`, ...t];
  }
  matchesEvent(e) {
    if (this.type === F.Address) {
      const t = Dt(e, "d");
      if (t && t === this.id && be(this.author) === e.pubkey && be(this.kind) === e.kind)
        return !0;
    } else if (this.type === F.Event || this.type === F.Note)
      return this.id === e.id;
    return !1;
  }
  /**
   * Is the supplied event a reply to this link
   */
  isReplyToThis(e) {
    if ([yt.Reaction, yt.Repost, yt.ZapReceipt].includes(e.kind)) {
      const n = e.tags.findLast((s) => s[0] === "e" || s[0] === "a");
      if (!n)
        return !1;
      if (n[0] === "e" && n[1] === this.id && (this.type === F.Event || this.type === F.Note))
        return !0;
      if (n[0] === "a" && this.type === F.Address) {
        const [s, i, o] = n[1].split(":");
        if (Number(s) === this.kind && i === this.author && o === this.id)
          return !0;
      }
    } else {
      const n = Xe.extractThread(e);
      if (!n || !n.root)
        return !1;
      if (n.root.key === "e" && n.root.value === this.id && (this.type === F.Event || this.type === F.Note))
        return !0;
      if (n.root.key === "a" && this.type === F.Address) {
        const [s, i, o] = be(n.root.value).split(":");
        if (Number(s) === this.kind && i === this.author && o === this.id)
          return !0;
      }
    }
    return !1;
  }
  /**
   * Does the supplied event contain a tag matching this link
   */
  referencesThis(e) {
    for (const t of e.tags) {
      if (t[0] === "e" && t[1] === this.id && (this.type === F.Event || this.type === F.Note))
        return !0;
      if (t[0] === "a" && this.type === F.Address) {
        const [n, s, i] = t[1].split(":");
        if (Number(n) === this.kind && s === this.author && i === this.id)
          return !0;
      }
      if (t[0] === "p" && (this.type === F.Profile || this.type === F.PublicKey) && this.id === t[1])
        return !0;
    }
    return !1;
  }
  equals(e) {
    e.type === this.type && (this.type, F.Address);
  }
  static fromThreadTag(e) {
    const t = e.relay ? [e.relay] : void 0;
    switch (e.key) {
      case "e":
        return new H(F.Event, be(e.value), void 0, void 0, t);
      case "p":
        return new H(F.Profile, be(e.value), void 0, void 0, t);
      case "a": {
        const [n, s, i] = be(e.value).split(":");
        return new H(F.Address, i, Number(n), s, t);
      }
    }
    throw new Error(`Unknown tag kind ${e.key}`);
  }
  static fromTag(e) {
    const t = e.length > 2 ? [e[2]] : void 0;
    switch (e[0]) {
      case "e":
        return new H(F.Event, e[1], void 0, void 0, t);
      case "p":
        return new H(F.Profile, e[1], void 0, void 0, t);
      case "a": {
        const [n, s, i] = e[1].split(":");
        return new H(F.Address, i, Number(n), s, t);
      }
    }
    throw new Error(`Unknown tag kind ${e[0]}`);
  }
  static fromTags(e) {
    return As(
      e.map((t) => {
        try {
          return H.fromTag(t);
        } catch {
        }
      })
    );
  }
  static fromEvent(e) {
    const t = "relays" in e ? e.relays : void 0;
    if (e.kind >= 3e4 && e.kind < 4e4) {
      const n = be(Dt(e, "d"));
      return new H(F.Address, n, e.kind, e.pubkey, t);
    }
    return new H(F.Event, e.id, e.kind, e.pubkey, t);
  }
}
function Fs(r, e) {
  try {
    return Ps(r, e);
  } catch {
    return;
  }
}
function Os(r) {
  var t;
  let e = r.startsWith("web+nostr:") || r.startsWith("nostr:") ? r.split(":")[1] : r;
  return e = ((t = e.match(/(n(?:pub|profile|event|ote|addr|req)1[acdefghjklmnpqrstuvwxyz023456789]+)/)) == null ? void 0 : t[0]) ?? e, e;
}
function Ps(r, e) {
  var s, i, o;
  const t = Os(r), n = (a) => t.startsWith(a);
  if (n(F.PublicKey)) {
    const a = fr(t);
    if (a.length !== 64)
      throw new Error("Invalid nostr link, must contain 32 byte id");
    return new H(F.PublicKey, a);
  } else if (n(F.Note)) {
    const a = fr(t);
    if (a.length !== 64)
      throw new Error("Invalid nostr link, must contain 32 byte id");
    return new H(F.Note, a);
  } else if (n(F.Profile) || n(F.Event) || n(F.Address) || n(F.Req)) {
    const a = Is(t), c = (s = a.find((p) => p.type === Te.Special)) == null ? void 0 : s.value, h = a.filter((p) => p.type === Te.Relay).map((p) => p.value), u = (i = a.find((p) => p.type === Te.Author)) == null ? void 0 : i.value, l = (o = a.find((p) => p.type === Te.Kind)) == null ? void 0 : o.value;
    if (n(F.Profile)) {
      if (c.length !== 64)
        throw new Error("Invalid nostr link, must contain 32 byte id");
      return new H(F.Profile, c, l, u, h);
    } else if (n(F.Event)) {
      if (c.length !== 64)
        throw new Error("Invalid nostr link, must contain 32 byte id");
      return new H(F.Event, c, l, u, h);
    } else {
      if (n(F.Address))
        return new H(F.Address, c, l, u, h);
      if (n(F.Req))
        return new H(F.Req, c);
    }
  } else if (e)
    return new H(e, r);
  throw new Error("Invalid nostr link");
}
const js = [];
Hr(js);
Cr("zaps");
var at = {}, j = {}, zr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  function e(a, c) {
    var h = a >>> 16 & 65535, u = a & 65535, l = c >>> 16 & 65535, p = c & 65535;
    return u * p + (h * p + u * l << 16 >>> 0) | 0;
  }
  r.mul = Math.imul || e;
  function t(a, c) {
    return a + c | 0;
  }
  r.add = t;
  function n(a, c) {
    return a - c | 0;
  }
  r.sub = n;
  function s(a, c) {
    return a << c | a >>> 32 - c;
  }
  r.rotl = s;
  function i(a, c) {
    return a << 32 - c | a >>> c;
  }
  r.rotr = i;
  function o(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  r.isInteger = Number.isInteger || o, r.MAX_SAFE_INTEGER = 9007199254740991, r.isSafeInteger = function(a) {
    return r.isInteger(a) && a >= -r.MAX_SAFE_INTEGER && a <= r.MAX_SAFE_INTEGER;
  };
})(zr);
Object.defineProperty(j, "__esModule", { value: !0 });
var Gr = zr;
function Ms(r, e) {
  return e === void 0 && (e = 0), (r[e + 0] << 8 | r[e + 1]) << 16 >> 16;
}
j.readInt16BE = Ms;
function Ws(r, e) {
  return e === void 0 && (e = 0), (r[e + 0] << 8 | r[e + 1]) >>> 0;
}
j.readUint16BE = Ws;
function qs(r, e) {
  return e === void 0 && (e = 0), (r[e + 1] << 8 | r[e]) << 16 >> 16;
}
j.readInt16LE = qs;
function _s(r, e) {
  return e === void 0 && (e = 0), (r[e + 1] << 8 | r[e]) >>> 0;
}
j.readUint16LE = _s;
function Yr(r, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = r >>> 8, e[t + 1] = r >>> 0, e;
}
j.writeUint16BE = Yr;
j.writeInt16BE = Yr;
function Jr(r, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = r >>> 0, e[t + 1] = r >>> 8, e;
}
j.writeUint16LE = Jr;
j.writeInt16LE = Jr;
function Ft(r, e) {
  return e === void 0 && (e = 0), r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3];
}
j.readInt32BE = Ft;
function Ot(r, e) {
  return e === void 0 && (e = 0), (r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]) >>> 0;
}
j.readUint32BE = Ot;
function Pt(r, e) {
  return e === void 0 && (e = 0), r[e + 3] << 24 | r[e + 2] << 16 | r[e + 1] << 8 | r[e];
}
j.readInt32LE = Pt;
function jt(r, e) {
  return e === void 0 && (e = 0), (r[e + 3] << 24 | r[e + 2] << 16 | r[e + 1] << 8 | r[e]) >>> 0;
}
j.readUint32LE = jt;
function $e(r, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = r >>> 24, e[t + 1] = r >>> 16, e[t + 2] = r >>> 8, e[t + 3] = r >>> 0, e;
}
j.writeUint32BE = $e;
j.writeInt32BE = $e;
function et(r, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = r >>> 0, e[t + 1] = r >>> 8, e[t + 2] = r >>> 16, e[t + 3] = r >>> 24, e;
}
j.writeUint32LE = et;
j.writeInt32LE = et;
function Hs(r, e) {
  e === void 0 && (e = 0);
  var t = Ft(r, e), n = Ft(r, e + 4);
  return t * 4294967296 + n - (n >> 31) * 4294967296;
}
j.readInt64BE = Hs;
function Vs(r, e) {
  e === void 0 && (e = 0);
  var t = Ot(r, e), n = Ot(r, e + 4);
  return t * 4294967296 + n;
}
j.readUint64BE = Vs;
function Zs(r, e) {
  e === void 0 && (e = 0);
  var t = Pt(r, e), n = Pt(r, e + 4);
  return n * 4294967296 + t - (t >> 31) * 4294967296;
}
j.readInt64LE = Zs;
function zs(r, e) {
  e === void 0 && (e = 0);
  var t = jt(r, e), n = jt(r, e + 4);
  return n * 4294967296 + t;
}
j.readUint64LE = zs;
function Kr(r, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), $e(r / 4294967296 >>> 0, e, t), $e(r >>> 0, e, t + 4), e;
}
j.writeUint64BE = Kr;
j.writeInt64BE = Kr;
function Qr(r, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), et(r >>> 0, e, t), et(r / 4294967296 >>> 0, e, t + 4), e;
}
j.writeUint64LE = Qr;
j.writeInt64LE = Qr;
function Gs(r, e, t) {
  if (t === void 0 && (t = 0), r % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r / 8 + t - 1; i >= t; i--)
    n += e[i] * s, s *= 256;
  return n;
}
j.readUintBE = Gs;
function Ys(r, e, t) {
  if (t === void 0 && (t = 0), r % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t; i < t + r / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
j.readUintLE = Ys;
function Js(r, e, t, n) {
  if (t === void 0 && (t = new Uint8Array(r / 8)), n === void 0 && (n = 0), r % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Gr.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = r / 8 + n - 1; i >= n; i--)
    t[i] = e / s & 255, s *= 256;
  return t;
}
j.writeUintBE = Js;
function Ks(r, e, t, n) {
  if (t === void 0 && (t = new Uint8Array(r / 8)), n === void 0 && (n = 0), r % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Gr.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + r / 8; i++)
    t[i] = e / s & 255, s *= 256;
  return t;
}
j.writeUintLE = Ks;
function Qs(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e);
}
j.readFloat32BE = Qs;
function Xs(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e, !0);
}
j.readFloat32LE = Xs;
function $s(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e);
}
j.readFloat64BE = $s;
function ei(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e, !0);
}
j.readFloat64LE = ei;
function ti(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(t, r), e;
}
j.writeFloat32BE = ti;
function ri(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(t, r, !0), e;
}
j.writeFloat32LE = ri;
function ni(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(t, r), e;
}
j.writeFloat64BE = ni;
function si(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(t, r, !0), e;
}
j.writeFloat64LE = si;
var ct = {};
Object.defineProperty(ct, "__esModule", { value: !0 });
function ii(r) {
  for (var e = 0; e < r.length; e++)
    r[e] = 0;
  return r;
}
ct.wipe = ii;
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
var Y = j, Mt = ct, oi = 20;
function ai(r, e, t) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, o = 1797285236, a = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], c = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], h = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], u = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], l = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], p = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], S = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], C = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], m = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], b = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], B = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], N = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], v = n, T = s, I = i, U = o, x = a, A = c, D = h, k = u, d = l, g = p, y = S, L = C, f = m, w = b, E = B, R = N, O = 0; O < oi; O += 2)
    v = v + x | 0, f ^= v, f = f >>> 32 - 16 | f << 16, d = d + f | 0, x ^= d, x = x >>> 32 - 12 | x << 12, T = T + A | 0, w ^= T, w = w >>> 32 - 16 | w << 16, g = g + w | 0, A ^= g, A = A >>> 32 - 12 | A << 12, I = I + D | 0, E ^= I, E = E >>> 32 - 16 | E << 16, y = y + E | 0, D ^= y, D = D >>> 32 - 12 | D << 12, U = U + k | 0, R ^= U, R = R >>> 32 - 16 | R << 16, L = L + R | 0, k ^= L, k = k >>> 32 - 12 | k << 12, I = I + D | 0, E ^= I, E = E >>> 32 - 8 | E << 8, y = y + E | 0, D ^= y, D = D >>> 32 - 7 | D << 7, U = U + k | 0, R ^= U, R = R >>> 32 - 8 | R << 8, L = L + R | 0, k ^= L, k = k >>> 32 - 7 | k << 7, T = T + A | 0, w ^= T, w = w >>> 32 - 8 | w << 8, g = g + w | 0, A ^= g, A = A >>> 32 - 7 | A << 7, v = v + x | 0, f ^= v, f = f >>> 32 - 8 | f << 8, d = d + f | 0, x ^= d, x = x >>> 32 - 7 | x << 7, v = v + A | 0, R ^= v, R = R >>> 32 - 16 | R << 16, y = y + R | 0, A ^= y, A = A >>> 32 - 12 | A << 12, T = T + D | 0, f ^= T, f = f >>> 32 - 16 | f << 16, L = L + f | 0, D ^= L, D = D >>> 32 - 12 | D << 12, I = I + k | 0, w ^= I, w = w >>> 32 - 16 | w << 16, d = d + w | 0, k ^= d, k = k >>> 32 - 12 | k << 12, U = U + x | 0, E ^= U, E = E >>> 32 - 16 | E << 16, g = g + E | 0, x ^= g, x = x >>> 32 - 12 | x << 12, I = I + k | 0, w ^= I, w = w >>> 32 - 8 | w << 8, d = d + w | 0, k ^= d, k = k >>> 32 - 7 | k << 7, U = U + x | 0, E ^= U, E = E >>> 32 - 8 | E << 8, g = g + E | 0, x ^= g, x = x >>> 32 - 7 | x << 7, T = T + D | 0, f ^= T, f = f >>> 32 - 8 | f << 8, L = L + f | 0, D ^= L, D = D >>> 32 - 7 | D << 7, v = v + A | 0, R ^= v, R = R >>> 32 - 8 | R << 8, y = y + R | 0, A ^= y, A = A >>> 32 - 7 | A << 7;
  Y.writeUint32LE(v + n | 0, r, 0), Y.writeUint32LE(T + s | 0, r, 4), Y.writeUint32LE(I + i | 0, r, 8), Y.writeUint32LE(U + o | 0, r, 12), Y.writeUint32LE(x + a | 0, r, 16), Y.writeUint32LE(A + c | 0, r, 20), Y.writeUint32LE(D + h | 0, r, 24), Y.writeUint32LE(k + u | 0, r, 28), Y.writeUint32LE(d + l | 0, r, 32), Y.writeUint32LE(g + p | 0, r, 36), Y.writeUint32LE(y + S | 0, r, 40), Y.writeUint32LE(L + C | 0, r, 44), Y.writeUint32LE(f + m | 0, r, 48), Y.writeUint32LE(w + b | 0, r, 52), Y.writeUint32LE(E + B | 0, r, 56), Y.writeUint32LE(R + N | 0, r, 60);
}
function Xr(r, e, t, n, s) {
  if (s === void 0 && (s = 0), r.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var i, o;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    i = new Uint8Array(16), o = i.length - e.length, i.set(e, o);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    i = e, o = s;
  }
  for (var a = new Uint8Array(64), c = 0; c < t.length; c += 64) {
    ai(a, i, r);
    for (var h = c; h < c + 64 && h < t.length; h++)
      n[h] = t[h] ^ a[h - c];
    li(i, 0, o);
  }
  return Mt.wipe(a), s === 0 && Mt.wipe(i), n;
}
lt.streamXOR = Xr;
function ci(r, e, t, n) {
  return n === void 0 && (n = 0), Mt.wipe(t), Xr(r, e, t, t, n);
}
lt.stream = ci;
function li(r, e, t) {
  for (var n = 1; t--; )
    n = n + (r[e] & 255) | 0, r[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
Object.defineProperty(at, "__esModule", { value: !0 });
var ye = j, $r = ct, ui = lt, hi = 20;
function en(r, e, t, n) {
  if (e.length !== 24)
    throw new Error("XChaCha20 nonce must be 24 bytes");
  var s = tn(r, e.subarray(0, 16), new Uint8Array(32)), i = new Uint8Array(12);
  i.set(e.subarray(16), 4);
  var o = ui.streamXOR(s, i, t, n);
  return $r.wipe(s), o;
}
at.streamXOR = en;
function fi(r, e, t) {
  return $r.wipe(t), en(r, e, t, t);
}
at.stream = fi;
function tn(r, e, t) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], u = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], l = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], S = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], C = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], m = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], b = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], B = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], N = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], v = n, T = s, I = i, U = o, x = a, A = c, D = h, k = u, d = l, g = p, y = S, L = C, f = m, w = b, E = B, R = N, O = 0; O < hi; O += 2)
    v = v + x | 0, f ^= v, f = f >>> 32 - 16 | f << 16, d = d + f | 0, x ^= d, x = x >>> 32 - 12 | x << 12, T = T + A | 0, w ^= T, w = w >>> 32 - 16 | w << 16, g = g + w | 0, A ^= g, A = A >>> 32 - 12 | A << 12, I = I + D | 0, E ^= I, E = E >>> 32 - 16 | E << 16, y = y + E | 0, D ^= y, D = D >>> 32 - 12 | D << 12, U = U + k | 0, R ^= U, R = R >>> 32 - 16 | R << 16, L = L + R | 0, k ^= L, k = k >>> 32 - 12 | k << 12, I = I + D | 0, E ^= I, E = E >>> 32 - 8 | E << 8, y = y + E | 0, D ^= y, D = D >>> 32 - 7 | D << 7, U = U + k | 0, R ^= U, R = R >>> 32 - 8 | R << 8, L = L + R | 0, k ^= L, k = k >>> 32 - 7 | k << 7, T = T + A | 0, w ^= T, w = w >>> 32 - 8 | w << 8, g = g + w | 0, A ^= g, A = A >>> 32 - 7 | A << 7, v = v + x | 0, f ^= v, f = f >>> 32 - 8 | f << 8, d = d + f | 0, x ^= d, x = x >>> 32 - 7 | x << 7, v = v + A | 0, R ^= v, R = R >>> 32 - 16 | R << 16, y = y + R | 0, A ^= y, A = A >>> 32 - 12 | A << 12, T = T + D | 0, f ^= T, f = f >>> 32 - 16 | f << 16, L = L + f | 0, D ^= L, D = D >>> 32 - 12 | D << 12, I = I + k | 0, w ^= I, w = w >>> 32 - 16 | w << 16, d = d + w | 0, k ^= d, k = k >>> 32 - 12 | k << 12, U = U + x | 0, E ^= U, E = E >>> 32 - 16 | E << 16, g = g + E | 0, x ^= g, x = x >>> 32 - 12 | x << 12, I = I + k | 0, w ^= I, w = w >>> 32 - 8 | w << 8, d = d + w | 0, k ^= d, k = k >>> 32 - 7 | k << 7, U = U + x | 0, E ^= U, E = E >>> 32 - 8 | E << 8, g = g + E | 0, x ^= g, x = x >>> 32 - 7 | x << 7, T = T + D | 0, f ^= T, f = f >>> 32 - 8 | f << 8, L = L + f | 0, D ^= L, D = D >>> 32 - 7 | D << 7, v = v + A | 0, R ^= v, R = R >>> 32 - 8 | R << 8, y = y + R | 0, A ^= y, A = A >>> 32 - 7 | A << 7;
  return ye.writeUint32LE(v, t, 0), ye.writeUint32LE(T, t, 4), ye.writeUint32LE(I, t, 8), ye.writeUint32LE(U, t, 12), ye.writeUint32LE(f, t, 16), ye.writeUint32LE(w, t, 20), ye.writeUint32LE(E, t, 24), ye.writeUint32LE(R, t, 28), t;
}
at.hchacha = tn;
const mt = new Intl.NumberFormat("en", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});
function di(r) {
  return r < 2e3 ? r : r < 1e6 ? `${mt.format(r / 1e3)}K` : r < 1e9 ? `${mt.format(r / 1e6)}M` : `${mt.format(r / 1e9)}G`;
}
const wi = "data:image/webp;base64,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", gi = 60 * 60, pi = gi * 24;
function yi(r, e) {
  if (typeof e != "string" || e.length === 0 || e.length % 2 !== 0 || !_r(e))
    return "";
  try {
    if (r === F.Note || r === F.PrivateKey || r === F.PublicKey) {
      const t = ne(e);
      return te.encode(r, te.toWords(t));
    } else
      return Zr(r, e);
  } catch (t) {
    return console.warn("Invalid hex", e, t), "";
  }
}
function bi(r) {
  return Us() ? wi : `https://robohash.v0l.io/${r ?? "missing"}.png${vi() ? "?set=set2" : ""}`;
}
const mi = (/* @__PURE__ */ new Date()).getFullYear(), Ei = (r, e) => {
  const t = /* @__PURE__ */ new Date(), n = (r.getTime() - t.getTime()) / (pi * 1e3);
  return n >= 0 && n <= e || t.getDate() === r.getDate() && t.getMonth() === r.getMonth();
}, vi = () => {
  const r = new Date(mi, 9, 31);
  return Ei(r, 7);
};
try {
  self["workbox:core:6.5.4"] && _();
} catch {
}
const xi = (r, ...e) => {
  let t = r;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, Ci = xi;
let ve = class extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const n = Ci(e, t);
    super(n), this.name = e, this.details = t;
  }
};
const Bi = /* @__PURE__ */ new Set(), he = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, Et = (r) => [he.prefix, r, he.suffix].filter((e) => e && e.length > 0).join("-"), Ai = (r) => {
  for (const e of Object.keys(he))
    r(e);
}, Ui = {
  updateDetails: (r) => {
    Ai((e) => {
      typeof r[e] == "string" && (he[e] = r[e]);
    });
  },
  getGoogleAnalyticsName: (r) => r || Et(he.googleAnalytics),
  getPrecacheName: (r) => r || Et(he.precache),
  getPrefix: () => he.prefix,
  getRuntimeName: (r) => r || Et(he.runtime),
  getSuffix: () => he.suffix
};
function wr(r, e) {
  const t = new URL(r);
  for (const n of e)
    t.searchParams.delete(n);
  return t.href;
}
async function Ri(r, e, t, n) {
  const s = wr(e.url, t);
  if (e.url === s)
    return r.match(e, n);
  const i = Object.assign(Object.assign({}, n), { ignoreSearch: !0 }), o = await r.keys(e, i);
  for (const a of o) {
    const c = wr(a.url, t);
    if (s === c)
      return r.match(a, n);
  }
}
let Li = class {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
};
async function Si() {
  for (const r of Bi)
    await r();
}
const Ii = (r) => new URL(String(r), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function Ti(r) {
  return new Promise((e) => setTimeout(e, r));
}
function ki() {
  self.addEventListener("activate", () => self.clients.claim());
}
try {
  self["workbox:routing:6.5.4"] && _();
} catch {
}
const rn = "GET", tt = (r) => r && typeof r == "object" ? r : { handle: r };
let Ze = class {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, n = rn) {
    this.handler = tt(t), this.match = e, this.method = n;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = tt(e);
  }
}, Ni = class extends Ze {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, n) {
    const s = ({ url: i }) => {
      const o = e.exec(i.href);
      if (o && !(i.origin !== location.origin && o.index !== 0))
        return o.slice(1);
    };
    super(s, t, n);
  }
}, Di = class {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, n = this.handleRequest({ request: t, event: e });
      n && e.respondWith(n);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data, n = Promise.all(t.urlsToCache.map((s) => {
          typeof s == "string" && (s = [s]);
          const i = new Request(...s);
          return this.handleRequest({ request: i, event: e });
        }));
        e.waitUntil(n), e.ports && e.ports[0] && n.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: t }) {
    const n = new URL(e.url, location.href);
    if (!n.protocol.startsWith("http"))
      return;
    const s = n.origin === location.origin, { params: i, route: o } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: s,
      url: n
    });
    let a = o && o.handler;
    const c = e.method;
    if (!a && this._defaultHandlerMap.has(c) && (a = this._defaultHandlerMap.get(c)), !a)
      return;
    let h;
    try {
      h = a.handle({ url: n, request: e, event: t, params: i });
    } catch (l) {
      h = Promise.reject(l);
    }
    const u = o && o.catchHandler;
    return h instanceof Promise && (this._catchHandler || u) && (h = h.catch(async (l) => {
      if (u)
        try {
          return await u.handle({ url: n, request: e, event: t, params: i });
        } catch (p) {
          p instanceof Error && (l = p);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: n, request: e, event: t });
      throw l;
    })), h;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: n, event: s }) {
    const i = this._routes.get(n.method) || [];
    for (const o of i) {
      let a;
      const c = o.match({ url: e, sameOrigin: t, request: n, event: s });
      if (c)
        return a = c, (Array.isArray(a) && a.length === 0 || c.constructor === Object && // eslint-disable-line
        Object.keys(c).length === 0 || typeof c == "boolean") && (a = void 0), { route: o, params: a };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = rn) {
    this._defaultHandlerMap.set(t, tt(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = tt(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new ve("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new ve("unregister-route-route-not-registered");
  }
}, Ne;
const Fi = () => (Ne || (Ne = new Di(), Ne.addFetchListener(), Ne.addCacheListener()), Ne);
function nn(r, e, t) {
  let n;
  if (typeof r == "string") {
    const i = new URL(r, location.href), o = ({ url: a }) => a.href === i.href;
    n = new Ze(o, e, t);
  } else if (r instanceof RegExp)
    n = new Ni(r, e, t);
  else if (typeof r == "function")
    n = new Ze(r, e, t);
  else if (r instanceof Ze)
    n = r;
  else
    throw new ve("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return Fi().registerRoute(n), n;
}
try {
  self["workbox:strategies:6.5.4"] && _();
} catch {
}
function _e(r) {
  return typeof r == "string" ? new Request(r) : r;
}
let Oi = class {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new Li(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const n of this._plugins)
      this._pluginStateMap.set(n, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let n = _e(e);
    if (n.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const o = await t.preloadResponse;
      if (o)
        return o;
    }
    const s = this.hasCallback("fetchDidFail") ? n.clone() : null;
    try {
      for (const o of this.iterateCallbacks("requestWillFetch"))
        n = await o({ request: n.clone(), event: t });
    } catch (o) {
      if (o instanceof Error)
        throw new ve("plugin-error-request-will-fetch", {
          thrownErrorMessage: o.message
        });
    }
    const i = n.clone();
    try {
      let o;
      o = await fetch(n, n.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const a of this.iterateCallbacks("fetchDidSucceed"))
        o = await a({
          event: t,
          request: i,
          response: o
        });
      return o;
    } catch (o) {
      throw s && await this.runCallbacks("fetchDidFail", {
        error: o,
        event: t,
        originalRequest: s.clone(),
        request: i.clone()
      }), o;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), n = t.clone();
    return this.waitUntil(this.cachePut(e, n)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = _e(e);
    let n;
    const { cacheName: s, matchOptions: i } = this._strategy, o = await this.getCacheKey(t, "read"), a = Object.assign(Object.assign({}, i), { cacheName: s });
    n = await caches.match(o, a);
    for (const c of this.iterateCallbacks("cachedResponseWillBeUsed"))
      n = await c({
        cacheName: s,
        matchOptions: i,
        cachedResponse: n,
        request: o,
        event: this.event
      }) || void 0;
    return n;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const n = _e(e);
    await Ti(0);
    const s = await this.getCacheKey(n, "write");
    if (!t)
      throw new ve("cache-put-with-no-response", {
        url: Ii(s.url)
      });
    const i = await this._ensureResponseSafeToCache(t);
    if (!i)
      return !1;
    const { cacheName: o, matchOptions: a } = this._strategy, c = await self.caches.open(o), h = this.hasCallback("cacheDidUpdate"), u = h ? await Ri(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      c,
      s.clone(),
      ["__WB_REVISION__"],
      a
    ) : null;
    try {
      await c.put(s, h ? i.clone() : i);
    } catch (l) {
      if (l instanceof Error)
        throw l.name === "QuotaExceededError" && await Si(), l;
    }
    for (const l of this.iterateCallbacks("cacheDidUpdate"))
      await l({
        cacheName: o,
        oldResponse: u,
        newResponse: i.clone(),
        request: s,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const n = `${e.url} | ${t}`;
    if (!this._cacheKeys[n]) {
      let s = e;
      for (const i of this.iterateCallbacks("cacheKeyWillBeUsed"))
        s = _e(await i({
          mode: t,
          request: s,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[n] = s;
    }
    return this._cacheKeys[n];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const n of this.iterateCallbacks(e))
      await n(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const n = this._pluginStateMap.get(t);
        yield (i) => {
          const o = Object.assign(Object.assign({}, i), { state: n });
          return t[e](o);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let t = e, n = !1;
    for (const s of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await s({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, n = !0, !t)
        break;
    return n || t && t.status !== 200 && (t = void 0), t;
  }
}, sn = class {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = Ui.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, n = typeof e.request == "string" ? new Request(e.request) : e.request, s = "params" in e ? e.params : void 0, i = new Oi(this, { event: t, request: n, params: s }), o = this._getResponse(i, n, t), a = this._awaitComplete(o, i, n, t);
    return [o, a];
  }
  async _getResponse(e, t, n) {
    await e.runCallbacks("handlerWillStart", { event: n, request: t });
    let s;
    try {
      if (s = await this._handle(t, e), !s || s.type === "error")
        throw new ve("no-response", { url: t.url });
    } catch (i) {
      if (i instanceof Error) {
        for (const o of e.iterateCallbacks("handlerDidError"))
          if (s = await o({ error: i, event: n, request: t }), s)
            break;
      }
      if (!s)
        throw i;
    }
    for (const i of e.iterateCallbacks("handlerWillRespond"))
      s = await i({ event: n, request: t, response: s });
    return s;
  }
  async _awaitComplete(e, t, n, s) {
    let i, o;
    try {
      i = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: s,
        request: n,
        response: i
      }), await t.doneWaiting();
    } catch (a) {
      a instanceof Error && (o = a);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: s,
      request: n,
      response: i,
      error: o
    }), t.destroy(), o)
      throw o;
  }
};
class Pi extends sn {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    let n = await t.cacheMatch(e), s;
    if (!n)
      try {
        n = await t.fetchAndCachePut(e);
      } catch (i) {
        i instanceof Error && (s = i);
      }
    if (!n)
      throw new ve("no-response", { url: e.url, error: s });
    return n;
  }
}
const ji = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response: r }) => r.status === 200 || r.status === 0 ? r : null
};
class Mi extends sn {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(ji);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const n = t.fetchAndCachePut(e).catch(() => {
    });
    t.waitUntil(n);
    let s = await t.cacheMatch(e), i;
    if (!s)
      try {
        s = await n;
      } catch (o) {
        o instanceof Error && (i = o);
      }
    if (!s)
      throw new ve("no-response", { url: e.url, error: i });
    return s;
  }
}
try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const Wi = (r, ...e) => {
  let t = r;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, qi = Wi;
class K extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const n = qi(e, t);
    super(n), this.name = e, this.details = t;
  }
}
const fe = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, vt = (r) => [fe.prefix, r, fe.suffix].filter((e) => e && e.length > 0).join("-"), _i = (r) => {
  for (const e of Object.keys(fe))
    r(e);
}, ut = {
  updateDetails: (r) => {
    _i((e) => {
      typeof r[e] == "string" && (fe[e] = r[e]);
    });
  },
  getGoogleAnalyticsName: (r) => r || vt(fe.googleAnalytics),
  getPrecacheName: (r) => r || vt(fe.precache),
  getPrefix: () => fe.prefix,
  getRuntimeName: (r) => r || vt(fe.runtime),
  getSuffix: () => fe.suffix
};
function gr(r, e) {
  const t = e();
  return r.waitUntil(t), t;
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch {
}
const Hi = "__WB_REVISION__";
function Vi(r) {
  if (!r)
    throw new K("add-to-cache-list-unexpected-type", { entry: r });
  if (typeof r == "string") {
    const i = new URL(r, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const { revision: e, url: t } = r;
  if (!t)
    throw new K("add-to-cache-list-unexpected-type", { entry: r });
  if (!e) {
    const i = new URL(t, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const n = new URL(t, location.href), s = new URL(t, location.href);
  return n.searchParams.set(Hi, e), {
    cacheKey: n.href,
    url: s.href
  };
}
class Zi {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: n }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const s = t.originalRequest.url;
        n ? this.notUpdatedURLs.push(s) : this.updatedURLs.push(s);
      }
      return n;
    };
  }
}
class zi {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: n }) => {
      const s = (n == null ? void 0 : n.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return s ? new Request(s, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
let De;
function Gi() {
  if (De === void 0) {
    const r = new Response("");
    if ("body" in r)
      try {
        new Response(r.body), De = !0;
      } catch {
        De = !1;
      }
    De = !1;
  }
  return De;
}
async function Yi(r, e) {
  let t = null;
  if (r.url && (t = new URL(r.url).origin), t !== self.location.origin)
    throw new K("cross-origin-copy-response", { origin: t });
  const n = r.clone(), s = {
    headers: new Headers(n.headers),
    status: n.status,
    statusText: n.statusText
  }, i = e ? e(s) : s, o = Gi() ? n.body : await n.blob();
  return new Response(o, i);
}
const Ji = (r) => new URL(String(r), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function pr(r, e) {
  const t = new URL(r);
  for (const n of e)
    t.searchParams.delete(n);
  return t.href;
}
async function Ki(r, e, t, n) {
  const s = pr(e.url, t);
  if (e.url === s)
    return r.match(e, n);
  const i = Object.assign(Object.assign({}, n), { ignoreSearch: !0 }), o = await r.keys(e, i);
  for (const a of o) {
    const c = pr(a.url, t);
    if (s === c)
      return r.match(a, n);
  }
}
class Qi {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
const on = /* @__PURE__ */ new Set();
async function Xi() {
  for (const r of on)
    await r();
}
function $i(r) {
  return new Promise((e) => setTimeout(e, r));
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function He(r) {
  return typeof r == "string" ? new Request(r) : r;
}
class eo {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new Qi(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const n of this._plugins)
      this._pluginStateMap.set(n, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let n = He(e);
    if (n.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const o = await t.preloadResponse;
      if (o)
        return o;
    }
    const s = this.hasCallback("fetchDidFail") ? n.clone() : null;
    try {
      for (const o of this.iterateCallbacks("requestWillFetch"))
        n = await o({ request: n.clone(), event: t });
    } catch (o) {
      if (o instanceof Error)
        throw new K("plugin-error-request-will-fetch", {
          thrownErrorMessage: o.message
        });
    }
    const i = n.clone();
    try {
      let o;
      o = await fetch(n, n.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const a of this.iterateCallbacks("fetchDidSucceed"))
        o = await a({
          event: t,
          request: i,
          response: o
        });
      return o;
    } catch (o) {
      throw s && await this.runCallbacks("fetchDidFail", {
        error: o,
        event: t,
        originalRequest: s.clone(),
        request: i.clone()
      }), o;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), n = t.clone();
    return this.waitUntil(this.cachePut(e, n)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = He(e);
    let n;
    const { cacheName: s, matchOptions: i } = this._strategy, o = await this.getCacheKey(t, "read"), a = Object.assign(Object.assign({}, i), { cacheName: s });
    n = await caches.match(o, a);
    for (const c of this.iterateCallbacks("cachedResponseWillBeUsed"))
      n = await c({
        cacheName: s,
        matchOptions: i,
        cachedResponse: n,
        request: o,
        event: this.event
      }) || void 0;
    return n;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const n = He(e);
    await $i(0);
    const s = await this.getCacheKey(n, "write");
    if (!t)
      throw new K("cache-put-with-no-response", {
        url: Ji(s.url)
      });
    const i = await this._ensureResponseSafeToCache(t);
    if (!i)
      return !1;
    const { cacheName: o, matchOptions: a } = this._strategy, c = await self.caches.open(o), h = this.hasCallback("cacheDidUpdate"), u = h ? await Ki(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      c,
      s.clone(),
      ["__WB_REVISION__"],
      a
    ) : null;
    try {
      await c.put(s, h ? i.clone() : i);
    } catch (l) {
      if (l instanceof Error)
        throw l.name === "QuotaExceededError" && await Xi(), l;
    }
    for (const l of this.iterateCallbacks("cacheDidUpdate"))
      await l({
        cacheName: o,
        oldResponse: u,
        newResponse: i.clone(),
        request: s,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const n = `${e.url} | ${t}`;
    if (!this._cacheKeys[n]) {
      let s = e;
      for (const i of this.iterateCallbacks("cacheKeyWillBeUsed"))
        s = He(await i({
          mode: t,
          request: s,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[n] = s;
    }
    return this._cacheKeys[n];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const n of this.iterateCallbacks(e))
      await n(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const n = this._pluginStateMap.get(t);
        yield (i) => {
          const o = Object.assign(Object.assign({}, i), { state: n });
          return t[e](o);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let t = e, n = !1;
    for (const s of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await s({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, n = !0, !t)
        break;
    return n || t && t.status !== 200 && (t = void 0), t;
  }
}
class to {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = ut.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, n = typeof e.request == "string" ? new Request(e.request) : e.request, s = "params" in e ? e.params : void 0, i = new eo(this, { event: t, request: n, params: s }), o = this._getResponse(i, n, t), a = this._awaitComplete(o, i, n, t);
    return [o, a];
  }
  async _getResponse(e, t, n) {
    await e.runCallbacks("handlerWillStart", { event: n, request: t });
    let s;
    try {
      if (s = await this._handle(t, e), !s || s.type === "error")
        throw new K("no-response", { url: t.url });
    } catch (i) {
      if (i instanceof Error) {
        for (const o of e.iterateCallbacks("handlerDidError"))
          if (s = await o({ error: i, event: n, request: t }), s)
            break;
      }
      if (!s)
        throw i;
    }
    for (const i of e.iterateCallbacks("handlerWillRespond"))
      s = await i({ event: n, request: t, response: s });
    return s;
  }
  async _awaitComplete(e, t, n, s) {
    let i, o;
    try {
      i = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: s,
        request: n,
        response: i
      }), await t.doneWaiting();
    } catch (a) {
      a instanceof Error && (o = a);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: s,
      request: n,
      response: i,
      error: o
    }), t.destroy(), o)
      throw o;
  }
}
class me extends to {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = ut.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(me.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const n = await t.cacheMatch(e);
    return n || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let n;
    const s = t.params || {};
    if (this._fallbackToNetwork) {
      const i = s.integrity, o = e.integrity, a = !o || o === i;
      n = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? o || i : void 0
      })), i && a && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, n.clone()));
    } else
      throw new K("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    return n;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const n = await t.fetch(e);
    if (!await t.cachePut(e, n.clone()))
      throw new K("bad-precaching-response", {
        url: e.url,
        status: n.status
      });
    return n;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [n, s] of this.plugins.entries())
      s !== me.copyRedirectedCacheableResponsesPlugin && (s === me.defaultPrecacheCacheabilityPlugin && (e = n), s.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(me.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
me.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: r }) {
    return !r || r.status >= 400 ? null : r;
  }
};
me.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: r }) {
    return r.redirected ? await Yi(r) : r;
  }
};
class ro {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: n = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new me({
      cacheName: ut.getPrecacheName(e),
      plugins: [
        ...t,
        new zi({ precacheController: this })
      ],
      fallbackToNetwork: n
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    const t = [];
    for (const n of e) {
      typeof n == "string" ? t.push(n) : n && n.revision === void 0 && t.push(n.url);
      const { cacheKey: s, url: i } = Vi(n), o = typeof n != "string" && n.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(i) && this._urlsToCacheKeys.get(i) !== s)
        throw new K("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(i),
          secondEntry: s
        });
      if (typeof n != "string" && n.integrity) {
        if (this._cacheKeysToIntegrities.has(s) && this._cacheKeysToIntegrities.get(s) !== n.integrity)
          throw new K("add-to-cache-list-conflicting-integrities", {
            url: i
          });
        this._cacheKeysToIntegrities.set(s, n.integrity);
      }
      if (this._urlsToCacheKeys.set(i, s), this._urlsToCacheModes.set(i, o), t.length > 0) {
        const a = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(a);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return gr(e, async () => {
      const t = new Zi();
      this.strategy.plugins.push(t);
      for (const [i, o] of this._urlsToCacheKeys) {
        const a = this._cacheKeysToIntegrities.get(o), c = this._urlsToCacheModes.get(i), h = new Request(i, {
          integrity: a,
          cache: c,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: o },
          request: h,
          event: e
        }));
      }
      const { updatedURLs: n, notUpdatedURLs: s } = t;
      return { updatedURLs: n, notUpdatedURLs: s };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return gr(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), n = await t.keys(), s = new Set(this._urlsToCacheKeys.values()), i = [];
      for (const o of n)
        s.has(o.url) || (await t.delete(o), i.push(o.url));
      return { deletedURLs: i };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, n = this.getCacheKeyForURL(t);
    if (n)
      return (await self.caches.open(this.strategy.cacheName)).match(n);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new K("non-precached-url", { url: e });
    return (n) => (n.request = new Request(e), n.params = Object.assign({ cacheKey: t }, n.params), this.strategy.handle(n));
  }
}
let xt;
const an = () => (xt || (xt = new ro()), xt);
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const cn = "GET", rt = (r) => r && typeof r == "object" ? r : { handle: r };
class je {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, n = cn) {
    this.handler = rt(t), this.match = e, this.method = n;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = rt(e);
  }
}
class no extends je {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, n) {
    const s = ({ url: i }) => {
      const o = e.exec(i.href);
      if (o && !(i.origin !== location.origin && o.index !== 0))
        return o.slice(1);
    };
    super(s, t, n);
  }
}
class so {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, n = this.handleRequest({ request: t, event: e });
      n && e.respondWith(n);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data, n = Promise.all(t.urlsToCache.map((s) => {
          typeof s == "string" && (s = [s]);
          const i = new Request(...s);
          return this.handleRequest({ request: i, event: e });
        }));
        e.waitUntil(n), e.ports && e.ports[0] && n.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: t }) {
    const n = new URL(e.url, location.href);
    if (!n.protocol.startsWith("http"))
      return;
    const s = n.origin === location.origin, { params: i, route: o } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: s,
      url: n
    });
    let a = o && o.handler;
    const c = e.method;
    if (!a && this._defaultHandlerMap.has(c) && (a = this._defaultHandlerMap.get(c)), !a)
      return;
    let h;
    try {
      h = a.handle({ url: n, request: e, event: t, params: i });
    } catch (l) {
      h = Promise.reject(l);
    }
    const u = o && o.catchHandler;
    return h instanceof Promise && (this._catchHandler || u) && (h = h.catch(async (l) => {
      if (u)
        try {
          return await u.handle({ url: n, request: e, event: t, params: i });
        } catch (p) {
          p instanceof Error && (l = p);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: n, request: e, event: t });
      throw l;
    })), h;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: n, event: s }) {
    const i = this._routes.get(n.method) || [];
    for (const o of i) {
      let a;
      const c = o.match({ url: e, sameOrigin: t, request: n, event: s });
      if (c)
        return a = c, (Array.isArray(a) && a.length === 0 || c.constructor === Object && // eslint-disable-line
        Object.keys(c).length === 0 || typeof c == "boolean") && (a = void 0), { route: o, params: a };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = cn) {
    this._defaultHandlerMap.set(t, rt(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = rt(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new K("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new K("unregister-route-route-not-registered");
  }
}
let Fe;
const io = () => (Fe || (Fe = new so(), Fe.addFetchListener(), Fe.addCacheListener()), Fe);
function oo(r, e, t) {
  let n;
  if (typeof r == "string") {
    const i = new URL(r, location.href), o = ({ url: a }) => a.href === i.href;
    n = new je(o, e, t);
  } else if (r instanceof RegExp)
    n = new no(r, e, t);
  else if (typeof r == "function")
    n = new je(r, e, t);
  else if (r instanceof je)
    n = r;
  else
    throw new K("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return io().registerRoute(n), n;
}
function ao(r, e = []) {
  for (const t of [...r.searchParams.keys()])
    e.some((n) => n.test(t)) && r.searchParams.delete(t);
  return r;
}
function* co(r, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: n = !0, urlManipulation: s } = {}) {
  const i = new URL(r, location.href);
  i.hash = "", yield i.href;
  const o = ao(i, e);
  if (yield o.href, t && o.pathname.endsWith("/")) {
    const a = new URL(o.href);
    a.pathname += t, yield a.href;
  }
  if (n) {
    const a = new URL(o.href);
    a.pathname += ".html", yield a.href;
  }
  if (s) {
    const a = s({ url: i });
    for (const c of a)
      yield c.href;
  }
}
class lo extends je {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, t) {
    const n = ({ request: s }) => {
      const i = e.getURLsToCacheKeys();
      for (const o of co(s.url, t)) {
        const a = i.get(o);
        if (a) {
          const c = e.getIntegrityForCacheKey(a);
          return { cacheKey: a, integrity: c };
        }
      }
    };
    super(n, e.strategy);
  }
}
function uo(r) {
  const e = an(), t = new lo(e, r);
  oo(t);
}
function ho(r) {
  an().precache(r);
}
function fo(r, e) {
  ho(r), uo(e);
}
function ln(r) {
  r.then(() => {
  });
}
const wo = (r, e) => e.some((t) => r instanceof t);
let yr, br;
function go() {
  return yr || (yr = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function po() {
  return br || (br = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const un = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap();
function yo(r) {
  const e = new Promise((t, n) => {
    const s = () => {
      r.removeEventListener("success", i), r.removeEventListener("error", o);
    }, i = () => {
      t(we(r.result)), s();
    }, o = () => {
      n(r.error), s();
    };
    r.addEventListener("success", i), r.addEventListener("error", o);
  });
  return e.then((t) => {
    t instanceof IDBCursor && un.set(t, r);
  }).catch(() => {
  }), Qt.set(e, r), e;
}
function bo(r) {
  if (Wt.has(r))
    return;
  const e = new Promise((t, n) => {
    const s = () => {
      r.removeEventListener("complete", i), r.removeEventListener("error", o), r.removeEventListener("abort", o);
    }, i = () => {
      t(), s();
    }, o = () => {
      n(r.error || new DOMException("AbortError", "AbortError")), s();
    };
    r.addEventListener("complete", i), r.addEventListener("error", o), r.addEventListener("abort", o);
  });
  Wt.set(r, e);
}
let qt = {
  get(r, e, t) {
    if (r instanceof IDBTransaction) {
      if (e === "done")
        return Wt.get(r);
      if (e === "objectStoreNames")
        return r.objectStoreNames || hn.get(r);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return we(r[e]);
  },
  set(r, e, t) {
    return r[e] = t, !0;
  },
  has(r, e) {
    return r instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in r;
  }
};
function mo(r) {
  qt = r(qt);
}
function Eo(r) {
  return r === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const n = r.call(Bt(this), e, ...t);
    return hn.set(n, e.sort ? e.sort() : [e]), we(n);
  } : po().includes(r) ? function(...e) {
    return r.apply(Bt(this), e), we(un.get(this));
  } : function(...e) {
    return we(r.apply(Bt(this), e));
  };
}
function vo(r) {
  return typeof r == "function" ? Eo(r) : (r instanceof IDBTransaction && bo(r), wo(r, go()) ? new Proxy(r, qt) : r);
}
function we(r) {
  if (r instanceof IDBRequest)
    return yo(r);
  if (Ct.has(r))
    return Ct.get(r);
  const e = vo(r);
  return e !== r && (Ct.set(r, e), Qt.set(e, r)), e;
}
const Bt = (r) => Qt.get(r);
function xo(r, e, { blocked: t, upgrade: n, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(r, e), a = we(o);
  return n && o.addEventListener("upgradeneeded", (c) => {
    n(we(o.result), c.oldVersion, c.newVersion, we(o.transaction), c);
  }), t && o.addEventListener("blocked", (c) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    c.oldVersion,
    c.newVersion,
    c
  )), a.then((c) => {
    i && c.addEventListener("close", () => i()), s && c.addEventListener("versionchange", (h) => s(h.oldVersion, h.newVersion, h));
  }).catch(() => {
  }), a;
}
function Co(r, { blocked: e } = {}) {
  const t = indexedDB.deleteDatabase(r);
  return e && t.addEventListener("blocked", (n) => e(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    n.oldVersion,
    n
  )), we(t).then(() => {
  });
}
const Bo = ["get", "getKey", "getAll", "getAllKeys", "count"], Ao = ["put", "add", "delete", "clear"], At = /* @__PURE__ */ new Map();
function mr(r, e) {
  if (!(r instanceof IDBDatabase && !(e in r) && typeof e == "string"))
    return;
  if (At.get(e))
    return At.get(e);
  const t = e.replace(/FromIndex$/, ""), n = e !== t, s = Ao.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (n ? IDBIndex : IDBObjectStore).prototype) || !(s || Bo.includes(t))
  )
    return;
  const i = async function(o, ...a) {
    const c = this.transaction(o, s ? "readwrite" : "readonly");
    let h = c.store;
    return n && (h = h.index(a.shift())), (await Promise.all([
      h[t](...a),
      s && c.done
    ]))[0];
  };
  return At.set(e, i), i;
}
mo((r) => ({
  ...r,
  get: (e, t, n) => mr(e, t) || r.get(e, t, n),
  has: (e, t) => !!mr(e, t) || r.has(e, t)
}));
try {
  self["workbox:expiration:7.0.0"] && _();
} catch {
}
const Uo = "workbox-expiration", Oe = "cache-entries", Er = (r) => {
  const e = new URL(r, location.href);
  return e.hash = "", e.href;
};
class Ro {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(e) {
    this._db = null, this._cacheName = e;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(e) {
    const t = e.createObjectStore(Oe, { keyPath: "id" });
    t.createIndex("cacheName", "cacheName", { unique: !1 }), t.createIndex("timestamp", "timestamp", { unique: !1 });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(e) {
    this._upgradeDb(e), this._cacheName && Co(this._cacheName);
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(e, t) {
    e = Er(e);
    const n = {
      url: e,
      timestamp: t,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(e)
    }, i = (await this.getDb()).transaction(Oe, "readwrite", {
      durability: "relaxed"
    });
    await i.store.put(n), await i.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(e) {
    const n = await (await this.getDb()).get(Oe, this._getId(e));
    return n == null ? void 0 : n.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(e, t) {
    const n = await this.getDb();
    let s = await n.transaction(Oe).store.index("timestamp").openCursor(null, "prev");
    const i = [];
    let o = 0;
    for (; s; ) {
      const c = s.value;
      c.cacheName === this._cacheName && (e && c.timestamp < e || t && o >= t ? i.push(s.value) : o++), s = await s.continue();
    }
    const a = [];
    for (const c of i)
      await n.delete(Oe, c.id), a.push(c.url);
    return a;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(e) {
    return this._cacheName + "|" + Er(e);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await xo(Uo, 1, {
      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
    })), this._db;
  }
}
class Lo {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(e, t = {}) {
    this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new Ro(e);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = !0;
      return;
    }
    this._isRunning = !0;
    const e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0, t = await this._timestampModel.expireEntries(e, this._maxEntries), n = await self.caches.open(this._cacheName);
    for (const s of t)
      await n.delete(s, this._matchOptions);
    this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, ln(this.expireEntries()));
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(e) {
    await this._timestampModel.setTimestamp(e, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(e) {
    if (this._maxAgeSeconds) {
      const t = await this._timestampModel.getTimestamp(e), n = Date.now() - this._maxAgeSeconds * 1e3;
      return t !== void 0 ? t < n : !0;
    } else
      return !1;
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0);
  }
}
function So(r) {
  on.add(r);
}
class fn {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(e = {}) {
    this.cachedResponseWillBeUsed = async ({ event: t, request: n, cacheName: s, cachedResponse: i }) => {
      if (!i)
        return null;
      const o = this._isResponseDateFresh(i), a = this._getCacheExpiration(s);
      ln(a.expireEntries());
      const c = a.updateTimestamp(n.url);
      if (t)
        try {
          t.waitUntil(c);
        } catch {
        }
      return o ? i : null;
    }, this.cacheDidUpdate = async ({ cacheName: t, request: n }) => {
      const s = this._getCacheExpiration(t);
      await s.updateTimestamp(n.url), await s.expireEntries();
    }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = /* @__PURE__ */ new Map(), e.purgeOnQuotaError && So(() => this.deleteCacheAndMetadata());
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(e) {
    if (e === ut.getRuntimeName())
      throw new K("expire-custom-caches-only");
    let t = this._cacheExpirations.get(e);
    return t || (t = new Lo(e, this._config), this._cacheExpirations.set(e, t)), t;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(e) {
    if (!this._maxAgeSeconds)
      return !0;
    const t = this._getDateHeaderTimestamp(e);
    if (t === null)
      return !0;
    const n = Date.now();
    return t >= n - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(e) {
    if (!e.headers.has("date"))
      return null;
    const t = e.headers.get("date"), s = new Date(t).getTime();
    return isNaN(s) ? null : s;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [e, t] of this._cacheExpirations)
      await self.caches.delete(e), await t.delete();
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
var Io = { appName: "Snort", appNameCapitalized: "Snort", appTitle: "Snort - Nostr", hostname: "snort.social", nip05Domain: "snort.social", favicon: "public/favicon.ico", appleTouchIconUrl: "/nostrich_512.png", navLogo: null, publicDir: "public/snort", httpCache: "", animalNamePlaceholders: !1, defaultZapPoolFee: 1, features: { analytics: !0, subscriptions: !0, deck: !0, zapPool: !0, notificationGraph: !0, communityLeaders: !0 }, signUp: { moderation: !0, defaultFollows: ["npub1sn0rtcjcf543gj4wsg7fa59s700d5ztys5ctj0g69g2x6802npjqhjjtws"] }, media: { bypassImgProxyError: !1, preferLargeMedia: !0 }, communityLeaders: { list: "naddr1qq4xc6tnw3ez6vp58y6rywpjxckngdtyxukngwr9vckkze33vcknzcnrxcenje35xqmn2cczyp3lucccm3v9s087z6qslpkap8schltk427zfgqgrn3g2menq5zw6qcyqqq82vqprpmhxue69uhhyetvv9ujuumwdae8gtnnda3kjctv7rajfl" }, noteCreatorToast: !0, hideFromNavbar: ["/graph"], deckSubKind: 1, eventLinkPrefix: "nevent", profileLinkPrefix: "nprofile", defaultRelays: { "wss://relay.nostrassets.com/": { read: !0, write: !0 }, "wss://relay.damus.io/": { read: !0, write: !1 } } };
fo([{"revision":null,"url":"assets/ar_SA-VL-mgzJs.js"},{"revision":null,"url":"assets/Cashu-Jjd-QWgU.js"},{"revision":null,"url":"assets/CashuWallet-jfLTjSPb.js"},{"revision":null,"url":"assets/de_DE-09fcbR3w.js"},{"revision":null,"url":"assets/emoji-en-US-z1Xo37Ih.js"},{"revision":null,"url":"assets/es_ES-gmfqpRff.js"},{"revision":null,"url":"assets/fa_IR-5sidTsvg.js"},{"revision":null,"url":"assets/fi_FI-j_lLoQsP.js"},{"revision":null,"url":"assets/fr_FR-CoKAhYjb.js"},{"revision":null,"url":"assets/hr_HR-6xpci_RL.js"},{"revision":null,"url":"assets/hu_HU-0QwxEpqa.js"},{"revision":null,"url":"assets/id_ID-iFmh1cy7.js"},{"revision":null,"url":"assets/index-frcgozw0.js"},{"revision":null,"url":"assets/index-JOoWkfhP.css"},{"revision":null,"url":"assets/Invite-Odrt0rP5.js"},{"revision":null,"url":"assets/it_IT-g52QdBC4.js"},{"revision":null,"url":"assets/ja_JP-oO4nqBlv.js"},{"revision":null,"url":"assets/LNCWallet-8WDTVg8A.js"},{"revision":null,"url":"assets/nl_NL--9Xa0LOK.js"},{"revision":null,"url":"assets/NotificationChart-S2zCmL2w.js"},{"revision":null,"url":"assets/ordinal-lviChniW.js"},{"revision":null,"url":"assets/pow-worker-Aa_uJeqt.js"},{"revision":null,"url":"assets/pt_BR-L0nz6zZg.js"},{"revision":null,"url":"assets/react-force-graph-3d-IQ8ebYJd.js"},{"revision":null,"url":"assets/ru_RU-rR1SyUJt.js"},{"revision":null,"url":"assets/sv_SE-f8KppEye.js"},{"revision":null,"url":"assets/sw_KE-qtXZ28n2.js"},{"revision":null,"url":"assets/ta_IN-X_t_vbcS.js"},{"revision":null,"url":"assets/th_TH--768Qao2.js"},{"revision":null,"url":"assets/three.module-vwdX4w43.js"},{"revision":null,"url":"assets/zh_CN-BQqc3gcE.js"},{"revision":null,"url":"assets/zh_TW-9yEFJ3MN.js"},{"revision":"926d7ca62caaf13b4d446148ef2ed762","url":"index.html"},{"revision":"38013143dc2183340ede8bc1c5124507","url":"registerSW.js"},{"revision":"db82a00621d528f70c212ce9e438937f","url":"manifest.webmanifest"}]);
ki();
nn(
  ({ url: r }) => r.pathname.endsWith("/.well-known/nostr.json"),
  new Mi({
    cacheName: "nostr-json-cache",
    plugins: [new fn({ maxAgeSeconds: 4 * 60 * 60 })]
  })
);
nn(
  // Match any image request regardless of the origin
  ({ request: r }) => r.destination === "image",
  new Pi({
    cacheName: "image-cache",
    plugins: [
      new fn({
        maxEntries: 100
      })
    ]
  })
);
self.addEventListener("message", (r) => {
  r.data && r.data.type === "SKIP_WAITING" && self.skipWaiting();
});
self.addEventListener("install", (r) => {
  r.waitUntil(
    caches.keys().then((e) => Promise.all(
      e.map((t) => (console.debug("Deleting cache: ", t), caches.delete(t)))
    ))
  ), self.skipWaiting();
});
self.addEventListener("notificationclick", (r) => {
  const e = r.notification.tag, t = JSON.parse(r.notification.data);
  r.waitUntil(
    (async () => {
      const n = await self.clients.matchAll({ type: "window" }), s = () => {
        if (t.type === 3 || t.type === 2) {
          const i = t.data;
          if (i.event)
            return `/${new H(F.Note, i.event).encode()}`;
        } else if (t.type == 5) {
          const i = t.data;
          return `/messages/${Ss("chat4", {
            type: Te.Author,
            value: i.author.pubkey,
            length: 32
          })}`;
        }
        return `/${new H(F.Note, e).encode()}`;
      };
      for (const i of n)
        if (i.url === s() && "focus" in i)
          return i.focus();
      if (self.clients.openWindow)
        return self.clients.openWindow(s());
    })()
  );
});
self.addEventListener("push", async (r) => {
  var t;
  console.debug(r);
  const e = (t = r.data) == null ? void 0 : t.json();
  if (console.debug(e), e)
    switch (e.type) {
      case 1: {
        const n = e.data;
        await self.registration.showNotification(`${Ie(n.author)} replied`, Pe(e));
        break;
      }
      case 2: {
        const n = e.data;
        await self.registration.showNotification(`${Ie(n.author)} reacted`, Pe(e));
        break;
      }
      case 3: {
        const n = e.data;
        await self.registration.showNotification(
          `${Ie(n.author)} zapped${n.amount ? ` ${di(n.amount)} sats` : ""}`,
          Pe(e)
        );
        break;
      }
      case 4: {
        const n = e.data;
        await self.registration.showNotification(
          `${Ie(n.author)} reposted`,
          Pe(e)
        );
        break;
      }
      case 5: {
        const n = e.data;
        await self.registration.showNotification(
          `${Ie(n.author)} sent you a DM`,
          Pe(e)
        );
        break;
      }
    }
});
const vr = /(nostr:n(?:pub|profile|event|ote|addr)1[acdefghjklmnpqrstuvwxyz023456789]+)/g;
function To(r, e) {
  return r.split(vr).map((t) => {
    if (vr.test(t)) {
      const n = Fs(t);
      if ((n == null ? void 0 : n.type) === F.PublicKey || (n == null ? void 0 : n.type) === F.Profile) {
        const s = e.find((i) => i.pubkey === n.id);
        return `@${Ie(s ?? { pubkey: n.id })}`;
      }
    }
    return t;
  }).join("");
}
function Ie(r) {
  var e;
  return (((e = r.name) == null ? void 0 : e.length) ?? 0) > 0 ? r.name : yi("npub", r.pubkey).slice(0, 12);
}
function Pe(r) {
  const e = r.data, n = {
    body: (() => r.type === 1 ? ("mentions" in e ? To(e.content, e.mentions) : e.content).substring(0, 250) : r.type === 2 ? e.content === "+" ? "💜" : e.content === "-" ? "👎" : e.content : r.type === 5 || r.type === 4 ? "" : e.content.substring(0, 250))(),
    icon: e.author.avatar ?? bi(e.author.pubkey),
    badge: `${location.protocol}//${location.hostname}${Io.appleTouchIconUrl}`,
    timestamp: e.created_at * 1e3,
    tag: e.id,
    data: JSON.stringify(r)
  };
  return console.debug(n), n;
}
