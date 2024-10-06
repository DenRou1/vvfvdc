var Eh = Object.defineProperty;
var wh = (e,t,n)=>t in e ? Eh(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var S = (e,t,n)=>wh(e, typeof t != "symbol" ? t + "" : t, n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sd(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var ad = {
    exports: {}
}
  , js = {}
  , ld = {
    exports: {}
}
  , H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi = Symbol.for("react.element")
  , xh = Symbol.for("react.portal")
  , Sh = Symbol.for("react.fragment")
  , Ch = Symbol.for("react.strict_mode")
  , _h = Symbol.for("react.profiler")
  , Rh = Symbol.for("react.provider")
  , Th = Symbol.for("react.context")
  , Ah = Symbol.for("react.forward_ref")
  , kh = Symbol.for("react.suspense")
  , Nh = Symbol.for("react.memo")
  , Mh = Symbol.for("react.lazy")
  , cu = Symbol.iterator;
function Lh(e) {
    return e === null || typeof e != "object" ? null : (e = cu && e[cu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var cd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , ud = Object.assign
  , fd = {};
function Hr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = fd,
    this.updater = n || cd
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Hr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function dd() {}
dd.prototype = Hr.prototype;
function ql(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = fd,
    this.updater = n || cd
}
var Xl = ql.prototype = new dd;
Xl.constructor = ql;
ud(Xl, Hr.prototype);
Xl.isPureReactComponent = !0;
var uu = Array.isArray
  , hd = Object.prototype.hasOwnProperty
  , Jl = {
    current: null
}
  , pd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function md(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            hd.call(t, r) && !pd.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Wi,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Jl.current
    }
}
function Ph(e, t) {
    return {
        $$typeof: Wi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ec(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Wi
}
function Ih(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var fu = /\/+/g;
function aa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ih("" + e.key) : t.toString(36)
}
function Po(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Wi:
            case xh:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + aa(s, 0) : r,
        uu(i) ? (n = "",
        e != null && (n = e.replace(fu, "$&/") + "/"),
        Po(i, t, n, "", function(c) {
            return c
        })) : i != null && (ec(i) && (i = Ph(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(fu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    uu(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + aa(o, a);
            s += Po(o, t, n, l, i)
        }
    else if (l = Lh(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + aa(o, a++),
            s += Po(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ao(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Po(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Bh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ue = {
    current: null
}
  , Io = {
    transition: null
}
  , Oh = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Io,
    ReactCurrentOwner: Jl
};
function gd() {
    throw Error("act(...) is not supported in production builds of React.")
}
H.Children = {
    map: ao,
    forEach: function(e, t, n) {
        ao(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ao(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ao(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ec(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
H.Component = Hr;
H.Fragment = Sh;
H.Profiler = _h;
H.PureComponent = ql;
H.StrictMode = Ch;
H.Suspense = kh;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh;
H.act = gd;
H.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ud({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = Jl.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            hd.call(t, l) && !pd.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++)
            a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: Wi,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
H.createContext = function(e) {
    return e = {
        $$typeof: Th,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Rh,
        _context: e
    },
    e.Consumer = e
}
;
H.createElement = md;
H.createFactory = function(e) {
    var t = md.bind(null, e);
    return t.type = e,
    t
}
;
H.createRef = function() {
    return {
        current: null
    }
}
;
H.forwardRef = function(e) {
    return {
        $$typeof: Ah,
        render: e
    }
}
;
H.isValidElement = ec;
H.lazy = function(e) {
    return {
        $$typeof: Mh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Bh
    }
}
;
H.memo = function(e, t) {
    return {
        $$typeof: Nh,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
H.startTransition = function(e) {
    var t = Io.transition;
    Io.transition = {};
    try {
        e()
    } finally {
        Io.transition = t
    }
}
;
H.unstable_act = gd;
H.useCallback = function(e, t) {
    return Ue.current.useCallback(e, t)
}
;
H.useContext = function(e) {
    return Ue.current.useContext(e)
}
;
H.useDebugValue = function() {}
;
H.useDeferredValue = function(e) {
    return Ue.current.useDeferredValue(e)
}
;
H.useEffect = function(e, t) {
    return Ue.current.useEffect(e, t)
}
;
H.useId = function() {
    return Ue.current.useId()
}
;
H.useImperativeHandle = function(e, t, n) {
    return Ue.current.useImperativeHandle(e, t, n)
}
;
H.useInsertionEffect = function(e, t) {
    return Ue.current.useInsertionEffect(e, t)
}
;
H.useLayoutEffect = function(e, t) {
    return Ue.current.useLayoutEffect(e, t)
}
;
H.useMemo = function(e, t) {
    return Ue.current.useMemo(e, t)
}
;
H.useReducer = function(e, t, n) {
    return Ue.current.useReducer(e, t, n)
}
;
H.useRef = function(e) {
    return Ue.current.useRef(e)
}
;
H.useState = function(e) {
    return Ue.current.useState(e)
}
;
H.useSyncExternalStore = function(e, t, n) {
    return Ue.current.useSyncExternalStore(e, t, n)
}
;
H.useTransition = function() {
    return Ue.current.useTransition()
}
;
H.version = "18.3.1";
ld.exports = H;
var M = ld.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh = M
  , Dh = Symbol.for("react.element")
  , jh = Symbol.for("react.fragment")
  , zh = Object.prototype.hasOwnProperty
  , Uh = Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , bh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function vd(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        zh.call(t, r) && !bh.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Dh,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Uh.current
    }
}
js.Fragment = jh;
js.jsx = vd;
js.jsxs = vd;
ad.exports = js;
var f = ad.exports
  , yd = {
    exports: {}
}
  , rt = {}
  , Ed = {
    exports: {}
}
  , wd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, U) {
        var b = P.length;
        P.push(U);
        e: for (; 0 < b; ) {
            var de = b - 1 >>> 1
              , _e = P[de];
            if (0 < i(_e, U))
                P[de] = U,
                P[b] = _e,
                b = de;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var U = P[0]
          , b = P.pop();
        if (b !== U) {
            P[0] = b;
            e: for (var de = 0, _e = P.length, oo = _e >>> 1; de < oo; ) {
                var An = 2 * (de + 1) - 1
                  , sa = P[An]
                  , kn = An + 1
                  , so = P[kn];
                if (0 > i(sa, b))
                    kn < _e && 0 > i(so, sa) ? (P[de] = so,
                    P[kn] = b,
                    de = kn) : (P[de] = sa,
                    P[An] = b,
                    de = An);
                else if (kn < _e && 0 > i(so, b))
                    P[de] = so,
                    P[kn] = b,
                    de = kn;
                else
                    break e
            }
        }
        return U
    }
    function i(P, U) {
        var b = P.sortIndex - U.sortIndex;
        return b !== 0 ? b : P.id - U.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , c = []
      , d = 1
      , m = null
      , p = 3
      , y = !1
      , h = !1
      , E = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(P) {
        for (var U = n(c); U !== null; ) {
            if (U.callback === null)
                r(c);
            else if (U.startTime <= P)
                r(c),
                U.sortIndex = U.expirationTime,
                t(l, U);
            else
                break;
            U = n(c)
        }
    }
    function _(P) {
        if (E = !1,
        w(P),
        !h)
            if (n(l) !== null)
                h = !0,
                K(C);
            else {
                var U = n(c);
                U !== null && ot(_, U.startTime - P)
            }
    }
    function C(P, U) {
        h = !1,
        E && (E = !1,
        g(k),
        k = -1),
        y = !0;
        var b = p;
        try {
            for (w(U),
            m = n(l); m !== null && (!(m.expirationTime > U) || P && !D()); ) {
                var de = m.callback;
                if (typeof de == "function") {
                    m.callback = null,
                    p = m.priorityLevel;
                    var _e = de(m.expirationTime <= U);
                    U = e.unstable_now(),
                    typeof _e == "function" ? m.callback = _e : m === n(l) && r(l),
                    w(U)
                } else
                    r(l);
                m = n(l)
            }
            if (m !== null)
                var oo = !0;
            else {
                var An = n(c);
                An !== null && ot(_, An.startTime - U),
                oo = !1
            }
            return oo
        } finally {
            m = null,
            p = b,
            y = !1
        }
    }
    var R = !1
      , T = null
      , k = -1
      , O = 5
      , N = -1;
    function D() {
        return !(e.unstable_now() - N < O)
    }
    function z() {
        if (T !== null) {
            var P = e.unstable_now();
            N = P;
            var U = !0;
            try {
                U = T(!0, P)
            } finally {
                U ? F() : (R = !1,
                T = null)
            }
        } else
            R = !1
    }
    var F;
    if (typeof v == "function")
        F = function() {
            v(z)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
          , Y = I.port2;
        I.port1.onmessage = z,
        F = function() {
            Y.postMessage(null)
        }
    } else
        F = function() {
            x(z, 0)
        }
        ;
    function K(P) {
        T = P,
        R || (R = !0,
        F())
    }
    function ot(P, U) {
        k = x(function() {
            P(e.unstable_now())
        }, U)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        h || y || (h = !0,
        K(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var U = 3;
            break;
        default:
            U = p
        }
        var b = p;
        p = U;
        try {
            return P()
        } finally {
            p = b
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, U) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var b = p;
        p = P;
        try {
            return U()
        } finally {
            p = b
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, U, b) {
        var de = e.unstable_now();
        switch (typeof b == "object" && b !== null ? (b = b.delay,
        b = typeof b == "number" && 0 < b ? de + b : de) : b = de,
        P) {
        case 1:
            var _e = -1;
            break;
        case 2:
            _e = 250;
            break;
        case 5:
            _e = 1073741823;
            break;
        case 4:
            _e = 1e4;
            break;
        default:
            _e = 5e3
        }
        return _e = b + _e,
        P = {
            id: d++,
            callback: U,
            priorityLevel: P,
            startTime: b,
            expirationTime: _e,
            sortIndex: -1
        },
        b > de ? (P.sortIndex = b,
        t(c, P),
        n(l) === null && P === n(c) && (E ? (g(k),
        k = -1) : E = !0,
        ot(_, b - de))) : (P.sortIndex = _e,
        t(l, P),
        h || y || (h = !0,
        K(C))),
        P
    }
    ,
    e.unstable_shouldYield = D,
    e.unstable_wrapCallback = function(P) {
        var U = p;
        return function() {
            var b = p;
            p = U;
            try {
                return P.apply(this, arguments)
            } finally {
                p = b
            }
        }
    }
}
)(wd);
Ed.exports = wd;
var Hh = Ed.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh = M
  , nt = Hh;
function L(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var xd = new Set
  , Ti = {};
function nr(e, t) {
    Pr(e, t),
    Pr(e + "Capture", t)
}
function Pr(e, t) {
    for (Ti[e] = t,
    e = 0; e < t.length; e++)
        xd.add(t[e])
}
var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , $a = Object.prototype.hasOwnProperty
  , Zh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , du = {}
  , hu = {};
function Gh(e) {
    return $a.call(hu, e) ? !0 : $a.call(du, e) ? !1 : Zh.test(e) ? hu[e] = !0 : (du[e] = !0,
    !1)
}
function $h(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Wh(e, t, n, r) {
    if (t === null || typeof t > "u" || $h(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function be(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ie[e] = new be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ie[t] = new be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ie[e] = new be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ie[e] = new be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ie[e] = new be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ie[e] = new be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ie[e] = new be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ie[e] = new be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ie[e] = new be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var tc = /[\-:]([a-z])/g;
function nc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(tc, nc);
    Ie[t] = new be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(tc, nc);
    Ie[t] = new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(tc, nc);
    Ie[t] = new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ie[e] = new be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ie.xlinkHref = new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ie[e] = new be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function rc(e, t, n, r) {
    var i = Ie.hasOwnProperty(t) ? Ie[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wh(t, n, i, r) && (n = null),
    r || i === null ? Gh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Yt = Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , lo = Symbol.for("react.element")
  , ur = Symbol.for("react.portal")
  , fr = Symbol.for("react.fragment")
  , ic = Symbol.for("react.strict_mode")
  , Wa = Symbol.for("react.profiler")
  , Sd = Symbol.for("react.provider")
  , Cd = Symbol.for("react.context")
  , oc = Symbol.for("react.forward_ref")
  , Qa = Symbol.for("react.suspense")
  , Ya = Symbol.for("react.suspense_list")
  , sc = Symbol.for("react.memo")
  , nn = Symbol.for("react.lazy")
  , _d = Symbol.for("react.offscreen")
  , pu = Symbol.iterator;
function Qr(e) {
    return e === null || typeof e != "object" ? null : (e = pu && e[pu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ae = Object.assign, la;
function si(e) {
    if (la === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            la = t && t[1] || ""
        }
    return `
` + la + e
}
var ca = !1;
function ua(e, t) {
    if (!e || ca)
        return "";
    ca = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        ca = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? si(e) : ""
}
function Qh(e) {
    switch (e.tag) {
    case 5:
        return si(e.type);
    case 16:
        return si("Lazy");
    case 13:
        return si("Suspense");
    case 19:
        return si("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ua(e.type, !1),
        e;
    case 11:
        return e = ua(e.type.render, !1),
        e;
    case 1:
        return e = ua(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ka(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case fr:
        return "Fragment";
    case ur:
        return "Portal";
    case Wa:
        return "Profiler";
    case ic:
        return "StrictMode";
    case Qa:
        return "Suspense";
    case Ya:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Cd:
            return (e.displayName || "Context") + ".Consumer";
        case Sd:
            return (e._context.displayName || "Context") + ".Provider";
        case oc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case sc:
            return t = e.displayName || null,
            t !== null ? t : Ka(e.type) || "Memo";
        case nn:
            t = e._payload,
            e = e._init;
            try {
                return Ka(e(t))
            } catch {}
        }
    return null
}
function Yh(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ka(t);
    case 8:
        return t === ic ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function En(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Rd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Kh(e) {
    var t = Rd(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function co(e) {
    e._valueTracker || (e._valueTracker = Kh(e))
}
function Td(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Rd(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Wo(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function qa(e, t) {
    var n = t.checked;
    return ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function mu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = En(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ad(e, t) {
    t = t.checked,
    t != null && rc(e, "checked", t, !1)
}
function Xa(e, t) {
    Ad(e, t);
    var n = En(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ja(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ja(e, t.type, En(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function gu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ja(e, t, n) {
    (t !== "number" || Wo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ai = Array.isArray;
function Rr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + En(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function el(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(L(91));
    return ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function vu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(L(92));
            if (ai(n)) {
                if (1 < n.length)
                    throw Error(L(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: En(n)
    }
}
function kd(e, t) {
    var n = En(t.value)
      , r = En(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function yu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Nd(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function tl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Nd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var uo, Md = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (uo = uo || document.createElement("div"),
        uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = uo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ai(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var di = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , qh = ["Webkit", "ms", "Moz", "O"];
Object.keys(di).forEach(function(e) {
    qh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        di[t] = di[e]
    })
});
function Ld(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || di.hasOwnProperty(e) && di[e] ? ("" + t).trim() : t + "px"
}
function Pd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Ld(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Xh = ae({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function nl(e, t) {
    if (t) {
        if (Xh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(L(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(L(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(L(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(L(62))
    }
}
function rl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var il = null;
function ac(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ol = null
  , Tr = null
  , Ar = null;
function Eu(e) {
    if (e = Ki(e)) {
        if (typeof ol != "function")
            throw Error(L(280));
        var t = e.stateNode;
        t && (t = Vs(t),
        ol(e.stateNode, e.type, t))
    }
}
function Id(e) {
    Tr ? Ar ? Ar.push(e) : Ar = [e] : Tr = e
}
function Bd() {
    if (Tr) {
        var e = Tr
          , t = Ar;
        if (Ar = Tr = null,
        Eu(e),
        t)
            for (e = 0; e < t.length; e++)
                Eu(t[e])
    }
}
function Od(e, t) {
    return e(t)
}
function Fd() {}
var fa = !1;
function Dd(e, t, n) {
    if (fa)
        return e(t, n);
    fa = !0;
    try {
        return Od(e, t, n)
    } finally {
        fa = !1,
        (Tr !== null || Ar !== null) && (Fd(),
        Bd())
    }
}
function ki(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Vs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(L(231, t, typeof n));
    return n
}
var sl = !1;
if (Zt)
    try {
        var Yr = {};
        Object.defineProperty(Yr, "passive", {
            get: function() {
                sl = !0
            }
        }),
        window.addEventListener("test", Yr, Yr),
        window.removeEventListener("test", Yr, Yr)
    } catch {
        sl = !1
    }
function Jh(e, t, n, r, i, o, s, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var hi = !1
  , Qo = null
  , Yo = !1
  , al = null
  , ep = {
    onError: function(e) {
        hi = !0,
        Qo = e
    }
};
function tp(e, t, n, r, i, o, s, a, l) {
    hi = !1,
    Qo = null,
    Jh.apply(ep, arguments)
}
function np(e, t, n, r, i, o, s, a, l) {
    if (tp.apply(this, arguments),
    hi) {
        if (hi) {
            var c = Qo;
            hi = !1,
            Qo = null
        } else
            throw Error(L(198));
        Yo || (Yo = !0,
        al = c)
    }
}
function rr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function jd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function wu(e) {
    if (rr(e) !== e)
        throw Error(L(188))
}
function rp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = rr(e),
        t === null)
            throw Error(L(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return wu(i),
                    e;
                if (o === r)
                    return wu(i),
                    t;
                o = o.sibling
            }
            throw Error(L(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(L(189))
            }
        }
        if (n.alternate !== r)
            throw Error(L(190))
    }
    if (n.tag !== 3)
        throw Error(L(188));
    return n.stateNode.current === n ? e : t
}
function zd(e) {
    return e = rp(e),
    e !== null ? Ud(e) : null
}
function Ud(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ud(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var bd = nt.unstable_scheduleCallback
  , xu = nt.unstable_cancelCallback
  , ip = nt.unstable_shouldYield
  , op = nt.unstable_requestPaint
  , pe = nt.unstable_now
  , sp = nt.unstable_getCurrentPriorityLevel
  , lc = nt.unstable_ImmediatePriority
  , Hd = nt.unstable_UserBlockingPriority
  , Ko = nt.unstable_NormalPriority
  , ap = nt.unstable_LowPriority
  , Vd = nt.unstable_IdlePriority
  , zs = null
  , Pt = null;
function lp(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function")
        try {
            Pt.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var xt = Math.clz32 ? Math.clz32 : fp
  , cp = Math.log
  , up = Math.LN2;
function fp(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (cp(e) / up | 0) | 0
}
var fo = 64
  , ho = 4194304;
function li(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function qo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = li(a) : (o &= s,
        o !== 0 && (r = li(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = li(s) : o !== 0 && (r = li(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - xt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function dp(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function hp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - xt(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = dp(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function ll(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Zd() {
    var e = fo;
    return fo <<= 1,
    !(fo & 4194240) && (fo = 64),
    e
}
function da(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Qi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - xt(t),
    e[t] = n
}
function pp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - xt(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function cc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - xt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var Q = 0;
function Gd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var $d, uc, Wd, Qd, Yd, cl = !1, po = [], fn = null, dn = null, hn = null, Ni = new Map, Mi = new Map, sn = [], mp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Su(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        fn = null;
        break;
    case "dragenter":
    case "dragleave":
        dn = null;
        break;
    case "mouseover":
    case "mouseout":
        hn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ni.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Mi.delete(t.pointerId)
    }
}
function Kr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Ki(t),
    t !== null && uc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function gp(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return fn = Kr(fn, e, t, n, r, i),
        !0;
    case "dragenter":
        return dn = Kr(dn, e, t, n, r, i),
        !0;
    case "mouseover":
        return hn = Kr(hn, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Ni.set(o, Kr(Ni.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Mi.set(o, Kr(Mi.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Kd(e) {
    var t = jn(e.target);
    if (t !== null) {
        var n = rr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = jd(n),
                t !== null) {
                    e.blockedOn = t,
                    Yd(e.priority, function() {
                        Wd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Bo(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            il = r,
            n.target.dispatchEvent(r),
            il = null
        } else
            return t = Ki(n),
            t !== null && uc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Cu(e, t, n) {
    Bo(e) && n.delete(t)
}
function vp() {
    cl = !1,
    fn !== null && Bo(fn) && (fn = null),
    dn !== null && Bo(dn) && (dn = null),
    hn !== null && Bo(hn) && (hn = null),
    Ni.forEach(Cu),
    Mi.forEach(Cu)
}
function qr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    cl || (cl = !0,
    nt.unstable_scheduleCallback(nt.unstable_NormalPriority, vp)))
}
function Li(e) {
    function t(i) {
        return qr(i, e)
    }
    if (0 < po.length) {
        qr(po[0], e);
        for (var n = 1; n < po.length; n++) {
            var r = po[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (fn !== null && qr(fn, e),
    dn !== null && qr(dn, e),
    hn !== null && qr(hn, e),
    Ni.forEach(t),
    Mi.forEach(t),
    n = 0; n < sn.length; n++)
        r = sn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && (n = sn[0],
    n.blockedOn === null); )
        Kd(n),
        n.blockedOn === null && sn.shift()
}
var kr = Yt.ReactCurrentBatchConfig
  , Xo = !0;
function yp(e, t, n, r) {
    var i = Q
      , o = kr.transition;
    kr.transition = null;
    try {
        Q = 1,
        fc(e, t, n, r)
    } finally {
        Q = i,
        kr.transition = o
    }
}
function Ep(e, t, n, r) {
    var i = Q
      , o = kr.transition;
    kr.transition = null;
    try {
        Q = 4,
        fc(e, t, n, r)
    } finally {
        Q = i,
        kr.transition = o
    }
}
function fc(e, t, n, r) {
    if (Xo) {
        var i = ul(e, t, n, r);
        if (i === null)
            Sa(e, t, r, Jo, n),
            Su(e, r);
        else if (gp(i, e, t, n, r))
            r.stopPropagation();
        else if (Su(e, r),
        t & 4 && -1 < mp.indexOf(e)) {
            for (; i !== null; ) {
                var o = Ki(i);
                if (o !== null && $d(o),
                o = ul(e, t, n, r),
                o === null && Sa(e, t, r, Jo, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Sa(e, t, r, null, n)
    }
}
var Jo = null;
function ul(e, t, n, r) {
    if (Jo = null,
    e = ac(r),
    e = jn(e),
    e !== null)
        if (t = rr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = jd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Jo = e,
    null
}
function qd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (sp()) {
        case lc:
            return 1;
        case Hd:
            return 4;
        case Ko:
        case ap:
            return 16;
        case Vd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ln = null
  , dc = null
  , Oo = null;
function Xd() {
    if (Oo)
        return Oo;
    var e, t = dc, n = t.length, r, i = "value"in ln ? ln.value : ln.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Oo = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Fo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function mo() {
    return !0
}
function _u() {
    return !1
}
function it(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? mo : _u,
        this.isPropagationStopped = _u,
        this
    }
    return ae(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = mo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = mo)
        },
        persist: function() {},
        isPersistent: mo
    }),
    t
}
var Vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, hc = it(Vr), Yi = ae({}, Vr, {
    view: 0,
    detail: 0
}), wp = it(Yi), ha, pa, Xr, Us = ae({}, Yi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Xr && (Xr && e.type === "mousemove" ? (ha = e.screenX - Xr.screenX,
        pa = e.screenY - Xr.screenY) : pa = ha = 0,
        Xr = e),
        ha)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : pa
    }
}), Ru = it(Us), xp = ae({}, Us, {
    dataTransfer: 0
}), Sp = it(xp), Cp = ae({}, Yi, {
    relatedTarget: 0
}), ma = it(Cp), _p = ae({}, Vr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Rp = it(_p), Tp = ae({}, Vr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Ap = it(Tp), kp = ae({}, Vr, {
    data: 0
}), Tu = it(kp), Np = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Mp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Lp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Pp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lp[e]) ? !!t[e] : !1
}
function pc() {
    return Pp
}
var Ip = ae({}, Yi, {
    key: function(e) {
        if (e.key) {
            var t = Np[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Fo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mp[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pc,
    charCode: function(e) {
        return e.type === "keypress" ? Fo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Bp = it(Ip)
  , Op = ae({}, Us, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Au = it(Op)
  , Fp = ae({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pc
})
  , Dp = it(Fp)
  , jp = ae({}, Vr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , zp = it(jp)
  , Up = ae({}, Us, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , bp = it(Up)
  , Hp = [9, 13, 27, 32]
  , mc = Zt && "CompositionEvent"in window
  , pi = null;
Zt && "documentMode"in document && (pi = document.documentMode);
var Vp = Zt && "TextEvent"in window && !pi
  , Jd = Zt && (!mc || pi && 8 < pi && 11 >= pi)
  , ku = " "
  , Nu = !1;
function e1(e, t) {
    switch (e) {
    case "keyup":
        return Hp.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function t1(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var dr = !1;
function Zp(e, t) {
    switch (e) {
    case "compositionend":
        return t1(t);
    case "keypress":
        return t.which !== 32 ? null : (Nu = !0,
        ku);
    case "textInput":
        return e = t.data,
        e === ku && Nu ? null : e;
    default:
        return null
    }
}
function Gp(e, t) {
    if (dr)
        return e === "compositionend" || !mc && e1(e, t) ? (e = Xd(),
        Oo = dc = ln = null,
        dr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Jd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var $p = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$p[e.type] : t === "textarea"
}
function n1(e, t, n, r) {
    Id(r),
    t = es(t, "onChange"),
    0 < t.length && (n = new hc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var mi = null
  , Pi = null;
function Wp(e) {
    h1(e, 0)
}
function bs(e) {
    var t = mr(e);
    if (Td(t))
        return e
}
function Qp(e, t) {
    if (e === "change")
        return t
}
var r1 = !1;
if (Zt) {
    var ga;
    if (Zt) {
        var va = "oninput"in document;
        if (!va) {
            var Lu = document.createElement("div");
            Lu.setAttribute("oninput", "return;"),
            va = typeof Lu.oninput == "function"
        }
        ga = va
    } else
        ga = !1;
    r1 = ga && (!document.documentMode || 9 < document.documentMode)
}
function Pu() {
    mi && (mi.detachEvent("onpropertychange", i1),
    Pi = mi = null)
}
function i1(e) {
    if (e.propertyName === "value" && bs(Pi)) {
        var t = [];
        n1(t, Pi, e, ac(e)),
        Dd(Wp, t)
    }
}
function Yp(e, t, n) {
    e === "focusin" ? (Pu(),
    mi = t,
    Pi = n,
    mi.attachEvent("onpropertychange", i1)) : e === "focusout" && Pu()
}
function Kp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return bs(Pi)
}
function qp(e, t) {
    if (e === "click")
        return bs(t)
}
function Xp(e, t) {
    if (e === "input" || e === "change")
        return bs(t)
}
function Jp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var _t = typeof Object.is == "function" ? Object.is : Jp;
function Ii(e, t) {
    if (_t(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!$a.call(t, i) || !_t(e[i], t[i]))
            return !1
    }
    return !0
}
function Iu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Bu(e, t) {
    var n = Iu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Iu(n)
    }
}
function o1(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? o1(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function s1() {
    for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Wo(e.document)
    }
    return t
}
function gc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function e2(e) {
    var t = s1()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && o1(n.ownerDocument.documentElement, n)) {
        if (r !== null && gc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Bu(n, o);
                var s = Bu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var t2 = Zt && "documentMode"in document && 11 >= document.documentMode
  , hr = null
  , fl = null
  , gi = null
  , dl = !1;
function Ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    dl || hr == null || hr !== Wo(r) || (r = hr,
    "selectionStart"in r && gc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    gi && Ii(gi, r) || (gi = r,
    r = es(fl, "onSelect"),
    0 < r.length && (t = new hc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = hr)))
}
function go(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var pr = {
    animationend: go("Animation", "AnimationEnd"),
    animationiteration: go("Animation", "AnimationIteration"),
    animationstart: go("Animation", "AnimationStart"),
    transitionend: go("Transition", "TransitionEnd")
}
  , ya = {}
  , a1 = {};
Zt && (a1 = document.createElement("div").style,
"AnimationEvent"in window || (delete pr.animationend.animation,
delete pr.animationiteration.animation,
delete pr.animationstart.animation),
"TransitionEvent"in window || delete pr.transitionend.transition);
function Hs(e) {
    if (ya[e])
        return ya[e];
    if (!pr[e])
        return e;
    var t = pr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in a1)
            return ya[e] = t[n];
    return e
}
var l1 = Hs("animationend")
  , c1 = Hs("animationiteration")
  , u1 = Hs("animationstart")
  , f1 = Hs("transitionend")
  , d1 = new Map
  , Fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Sn(e, t) {
    d1.set(e, t),
    nr(t, [e])
}
for (var Ea = 0; Ea < Fu.length; Ea++) {
    var wa = Fu[Ea]
      , n2 = wa.toLowerCase()
      , r2 = wa[0].toUpperCase() + wa.slice(1);
    Sn(n2, "on" + r2)
}
Sn(l1, "onAnimationEnd");
Sn(c1, "onAnimationIteration");
Sn(u1, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(f1, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , i2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));
function Du(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    np(r, t, void 0, e),
    e.currentTarget = null
}
function h1(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    Du(i, a, c),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    Du(i, a, c),
                    o = l
                }
        }
    }
    if (Yo)
        throw e = al,
        Yo = !1,
        al = null,
        e
}
function ee(e, t) {
    var n = t[vl];
    n === void 0 && (n = t[vl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (p1(t, e, 2, !1),
    n.add(r))
}
function xa(e, t, n) {
    var r = 0;
    t && (r |= 4),
    p1(n, e, r, t)
}
var vo = "_reactListening" + Math.random().toString(36).slice(2);
function Bi(e) {
    if (!e[vo]) {
        e[vo] = !0,
        xd.forEach(function(n) {
            n !== "selectionchange" && (i2.has(n) || xa(n, !1, e),
            xa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vo] || (t[vo] = !0,
        xa("selectionchange", !1, t))
    }
}
function p1(e, t, n, r) {
    switch (qd(t)) {
    case 1:
        var i = yp;
        break;
    case 4:
        i = Ep;
        break;
    default:
        i = fc
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !sl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Sa(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = jn(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Dd(function() {
        var c = o
          , d = ac(n)
          , m = [];
        e: {
            var p = d1.get(e);
            if (p !== void 0) {
                var y = hc
                  , h = e;
                switch (e) {
                case "keypress":
                    if (Fo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Bp;
                    break;
                case "focusin":
                    h = "focus",
                    y = ma;
                    break;
                case "focusout":
                    h = "blur",
                    y = ma;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = ma;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Ru;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = Sp;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Dp;
                    break;
                case l1:
                case c1:
                case u1:
                    y = Rp;
                    break;
                case f1:
                    y = zp;
                    break;
                case "scroll":
                    y = wp;
                    break;
                case "wheel":
                    y = bp;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Ap;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Au
                }
                var E = (t & 4) !== 0
                  , x = !E && e === "scroll"
                  , g = E ? p !== null ? p + "Capture" : null : p;
                E = [];
                for (var v = c, w; v !== null; ) {
                    w = v;
                    var _ = w.stateNode;
                    if (w.tag === 5 && _ !== null && (w = _,
                    g !== null && (_ = ki(v, g),
                    _ != null && E.push(Oi(v, _, w)))),
                    x)
                        break;
                    v = v.return
                }
                0 < E.length && (p = new y(p,h,null,n,d),
                m.push({
                    event: p,
                    listeners: E
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                p && n !== il && (h = n.relatedTarget || n.fromElement) && (jn(h) || h[Gt]))
                    break e;
                if ((y || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window,
                y ? (h = n.relatedTarget || n.toElement,
                y = c,
                h = h ? jn(h) : null,
                h !== null && (x = rr(h),
                h !== x || h.tag !== 5 && h.tag !== 6) && (h = null)) : (y = null,
                h = c),
                y !== h)) {
                    if (E = Ru,
                    _ = "onMouseLeave",
                    g = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (E = Au,
                    _ = "onPointerLeave",
                    g = "onPointerEnter",
                    v = "pointer"),
                    x = y == null ? p : mr(y),
                    w = h == null ? p : mr(h),
                    p = new E(_,v + "leave",y,n,d),
                    p.target = x,
                    p.relatedTarget = w,
                    _ = null,
                    jn(d) === c && (E = new E(g,v + "enter",h,n,d),
                    E.target = w,
                    E.relatedTarget = x,
                    _ = E),
                    x = _,
                    y && h)
                        t: {
                            for (E = y,
                            g = h,
                            v = 0,
                            w = E; w; w = sr(w))
                                v++;
                            for (w = 0,
                            _ = g; _; _ = sr(_))
                                w++;
                            for (; 0 < v - w; )
                                E = sr(E),
                                v--;
                            for (; 0 < w - v; )
                                g = sr(g),
                                w--;
                            for (; v--; ) {
                                if (E === g || g !== null && E === g.alternate)
                                    break t;
                                E = sr(E),
                                g = sr(g)
                            }
                            E = null
                        }
                    else
                        E = null;
                    y !== null && ju(m, p, y, E, !1),
                    h !== null && x !== null && ju(m, x, h, E, !0)
                }
            }
            e: {
                if (p = c ? mr(c) : window,
                y = p.nodeName && p.nodeName.toLowerCase(),
                y === "select" || y === "input" && p.type === "file")
                    var C = Qp;
                else if (Mu(p))
                    if (r1)
                        C = Xp;
                    else {
                        C = Kp;
                        var R = Yp
                    }
                else
                    (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = qp);
                if (C && (C = C(e, c))) {
                    n1(m, C, n, d);
                    break e
                }
                R && R(e, p, c),
                e === "focusout" && (R = p._wrapperState) && R.controlled && p.type === "number" && Ja(p, "number", p.value)
            }
            switch (R = c ? mr(c) : window,
            e) {
            case "focusin":
                (Mu(R) || R.contentEditable === "true") && (hr = R,
                fl = c,
                gi = null);
                break;
            case "focusout":
                gi = fl = hr = null;
                break;
            case "mousedown":
                dl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                dl = !1,
                Ou(m, n, d);
                break;
            case "selectionchange":
                if (t2)
                    break;
            case "keydown":
            case "keyup":
                Ou(m, n, d)
            }
            var T;
            if (mc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                dr ? e1(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Jd && n.locale !== "ko" && (dr || k !== "onCompositionStart" ? k === "onCompositionEnd" && dr && (T = Xd()) : (ln = d,
            dc = "value"in ln ? ln.value : ln.textContent,
            dr = !0)),
            R = es(c, k),
            0 < R.length && (k = new Tu(k,e,null,n,d),
            m.push({
                event: k,
                listeners: R
            }),
            T ? k.data = T : (T = t1(n),
            T !== null && (k.data = T)))),
            (T = Vp ? Zp(e, n) : Gp(e, n)) && (c = es(c, "onBeforeInput"),
            0 < c.length && (d = new Tu("onBeforeInput","beforeinput",null,n,d),
            m.push({
                event: d,
                listeners: c
            }),
            d.data = T))
        }
        h1(m, t)
    })
}
function Oi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function es(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = ki(e, n),
        o != null && r.unshift(Oi(e, o, i)),
        o = ki(e, t),
        o != null && r.push(Oi(e, o, i))),
        e = e.return
    }
    return r
}
function sr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ju(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        i ? (l = ki(n, o),
        l != null && s.unshift(Oi(n, l, a))) : i || (l = ki(n, o),
        l != null && s.push(Oi(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var o2 = /\r\n?/g
  , s2 = /\u0000|\uFFFD/g;
function zu(e) {
    return (typeof e == "string" ? e : "" + e).replace(o2, `
`).replace(s2, "")
}
function yo(e, t, n) {
    if (t = zu(t),
    zu(e) !== t && n)
        throw Error(L(425))
}
function ts() {}
var hl = null
  , pl = null;
function ml(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var gl = typeof setTimeout == "function" ? setTimeout : void 0
  , a2 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Uu = typeof Promise == "function" ? Promise : void 0
  , l2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uu < "u" ? function(e) {
    return Uu.resolve(null).then(e).catch(c2)
}
: gl;
function c2(e) {
    setTimeout(function() {
        throw e
    })
}
function Ca(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Li(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Li(t)
}
function pn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function bu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Zr = Math.random().toString(36).slice(2)
  , Mt = "__reactFiber$" + Zr
  , Fi = "__reactProps$" + Zr
  , Gt = "__reactContainer$" + Zr
  , vl = "__reactEvents$" + Zr
  , u2 = "__reactListeners$" + Zr
  , f2 = "__reactHandles$" + Zr;
function jn(e) {
    var t = e[Mt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Gt] || n[Mt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = bu(e); e !== null; ) {
                    if (n = e[Mt])
                        return n;
                    e = bu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ki(e) {
    return e = e[Mt] || e[Gt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function mr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(L(33))
}
function Vs(e) {
    return e[Fi] || null
}
var yl = []
  , gr = -1;
function Cn(e) {
    return {
        current: e
    }
}
function ne(e) {
    0 > gr || (e.current = yl[gr],
    yl[gr] = null,
    gr--)
}
function J(e, t) {
    gr++,
    yl[gr] = e.current,
    e.current = t
}
var wn = {}
  , De = Cn(wn)
  , Ze = Cn(!1)
  , Yn = wn;
function Ir(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ge(e) {
    return e = e.childContextTypes,
    e != null
}
function ns() {
    ne(Ze),
    ne(De)
}
function Hu(e, t, n) {
    if (De.current !== wn)
        throw Error(L(168));
    J(De, t),
    J(Ze, n)
}
function m1(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(L(108, Yh(e) || "Unknown", i));
    return ae({}, n, r)
}
function rs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn,
    Yn = De.current,
    J(De, e),
    J(Ze, Ze.current),
    !0
}
function Vu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(L(169));
    n ? (e = m1(e, t, Yn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ne(Ze),
    ne(De),
    J(De, e)) : ne(Ze),
    J(Ze, n)
}
var jt = null
  , Zs = !1
  , _a = !1;
function g1(e) {
    jt === null ? jt = [e] : jt.push(e)
}
function d2(e) {
    Zs = !0,
    g1(e)
}
function _n() {
    if (!_a && jt !== null) {
        _a = !0;
        var e = 0
          , t = Q;
        try {
            var n = jt;
            for (Q = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            jt = null,
            Zs = !1
        } catch (i) {
            throw jt !== null && (jt = jt.slice(e + 1)),
            bd(lc, _n),
            i
        } finally {
            Q = t,
            _a = !1
        }
    }
    return null
}
var vr = []
  , yr = 0
  , is = null
  , os = 0
  , at = []
  , lt = 0
  , Kn = null
  , Ut = 1
  , bt = "";
function Pn(e, t) {
    vr[yr++] = os,
    vr[yr++] = is,
    is = e,
    os = t
}
function v1(e, t, n) {
    at[lt++] = Ut,
    at[lt++] = bt,
    at[lt++] = Kn,
    Kn = e;
    var r = Ut;
    e = bt;
    var i = 32 - xt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - xt(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        Ut = 1 << 32 - xt(t) + i | n << i | r,
        bt = o + e
    } else
        Ut = 1 << o | n << i | r,
        bt = e
}
function vc(e) {
    e.return !== null && (Pn(e, 1),
    v1(e, 1, 0))
}
function yc(e) {
    for (; e === is; )
        is = vr[--yr],
        vr[yr] = null,
        os = vr[--yr],
        vr[yr] = null;
    for (; e === Kn; )
        Kn = at[--lt],
        at[lt] = null,
        bt = at[--lt],
        at[lt] = null,
        Ut = at[--lt],
        at[lt] = null
}
var et = null
  , Xe = null
  , re = !1
  , wt = null;
function y1(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Zu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        et = e,
        Xe = pn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        et = e,
        Xe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Kn !== null ? {
            id: Ut,
            overflow: bt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ut(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        et = e,
        Xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function El(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function wl(e) {
    if (re) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!Zu(e, t)) {
                if (El(e))
                    throw Error(L(418));
                t = pn(n.nextSibling);
                var r = et;
                t && Zu(e, t) ? y1(r, n) : (e.flags = e.flags & -4097 | 2,
                re = !1,
                et = e)
            }
        } else {
            if (El(e))
                throw Error(L(418));
            e.flags = e.flags & -4097 | 2,
            re = !1,
            et = e
        }
    }
}
function Gu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    et = e
}
function Eo(e) {
    if (e !== et)
        return !1;
    if (!re)
        return Gu(e),
        re = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ml(e.type, e.memoizedProps)),
    t && (t = Xe)) {
        if (El(e))
            throw E1(),
            Error(L(418));
        for (; t; )
            y1(e, t),
            t = pn(t.nextSibling)
    }
    if (Gu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(L(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = pn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = et ? pn(e.stateNode.nextSibling) : null;
    return !0
}
function E1() {
    for (var e = Xe; e; )
        e = pn(e.nextSibling)
}
function Br() {
    Xe = et = null,
    re = !1
}
function Ec(e) {
    wt === null ? wt = [e] : wt.push(e)
}
var h2 = Yt.ReactCurrentBatchConfig;
function Jr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(L(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(L(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(L(284));
        if (!n._owner)
            throw Error(L(290, e))
    }
    return e
}
function wo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function $u(e) {
    var t = e._init;
    return t(e._payload)
}
function w1(e) {
    function t(g, v) {
        if (e) {
            var w = g.deletions;
            w === null ? (g.deletions = [v],
            g.flags |= 16) : w.push(v)
        }
    }
    function n(g, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(g, v),
            v = v.sibling;
        return null
    }
    function r(g, v) {
        for (g = new Map; v !== null; )
            v.key !== null ? g.set(v.key, v) : g.set(v.index, v),
            v = v.sibling;
        return g
    }
    function i(g, v) {
        return g = yn(g, v),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, v, w) {
        return g.index = w,
        e ? (w = g.alternate,
        w !== null ? (w = w.index,
        w < v ? (g.flags |= 2,
        v) : w) : (g.flags |= 2,
        v)) : (g.flags |= 1048576,
        v)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, v, w, _) {
        return v === null || v.tag !== 6 ? (v = La(w, g.mode, _),
        v.return = g,
        v) : (v = i(v, w),
        v.return = g,
        v)
    }
    function l(g, v, w, _) {
        var C = w.type;
        return C === fr ? d(g, v, w.props.children, _, w.key) : v !== null && (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === nn && $u(C) === v.type) ? (_ = i(v, w.props),
        _.ref = Jr(g, v, w),
        _.return = g,
        _) : (_ = Vo(w.type, w.key, w.props, null, g.mode, _),
        _.ref = Jr(g, v, w),
        _.return = g,
        _)
    }
    function c(g, v, w, _) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== w.containerInfo || v.stateNode.implementation !== w.implementation ? (v = Pa(w, g.mode, _),
        v.return = g,
        v) : (v = i(v, w.children || []),
        v.return = g,
        v)
    }
    function d(g, v, w, _, C) {
        return v === null || v.tag !== 7 ? (v = Gn(w, g.mode, _, C),
        v.return = g,
        v) : (v = i(v, w),
        v.return = g,
        v)
    }
    function m(g, v, w) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = La("" + v, g.mode, w),
            v.return = g,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case lo:
                return w = Vo(v.type, v.key, v.props, null, g.mode, w),
                w.ref = Jr(g, null, v),
                w.return = g,
                w;
            case ur:
                return v = Pa(v, g.mode, w),
                v.return = g,
                v;
            case nn:
                var _ = v._init;
                return m(g, _(v._payload), w)
            }
            if (ai(v) || Qr(v))
                return v = Gn(v, g.mode, w, null),
                v.return = g,
                v;
            wo(g, v)
        }
        return null
    }
    function p(g, v, w, _) {
        var C = v !== null ? v.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return C !== null ? null : a(g, v, "" + w, _);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case lo:
                return w.key === C ? l(g, v, w, _) : null;
            case ur:
                return w.key === C ? c(g, v, w, _) : null;
            case nn:
                return C = w._init,
                p(g, v, C(w._payload), _)
            }
            if (ai(w) || Qr(w))
                return C !== null ? null : d(g, v, w, _, null);
            wo(g, w)
        }
        return null
    }
    function y(g, v, w, _, C) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return g = g.get(w) || null,
            a(v, g, "" + _, C);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case lo:
                return g = g.get(_.key === null ? w : _.key) || null,
                l(v, g, _, C);
            case ur:
                return g = g.get(_.key === null ? w : _.key) || null,
                c(v, g, _, C);
            case nn:
                var R = _._init;
                return y(g, v, w, R(_._payload), C)
            }
            if (ai(_) || Qr(_))
                return g = g.get(w) || null,
                d(v, g, _, C, null);
            wo(v, _)
        }
        return null
    }
    function h(g, v, w, _) {
        for (var C = null, R = null, T = v, k = v = 0, O = null; T !== null && k < w.length; k++) {
            T.index > k ? (O = T,
            T = null) : O = T.sibling;
            var N = p(g, T, w[k], _);
            if (N === null) {
                T === null && (T = O);
                break
            }
            e && T && N.alternate === null && t(g, T),
            v = o(N, v, k),
            R === null ? C = N : R.sibling = N,
            R = N,
            T = O
        }
        if (k === w.length)
            return n(g, T),
            re && Pn(g, k),
            C;
        if (T === null) {
            for (; k < w.length; k++)
                T = m(g, w[k], _),
                T !== null && (v = o(T, v, k),
                R === null ? C = T : R.sibling = T,
                R = T);
            return re && Pn(g, k),
            C
        }
        for (T = r(g, T); k < w.length; k++)
            O = y(T, g, k, w[k], _),
            O !== null && (e && O.alternate !== null && T.delete(O.key === null ? k : O.key),
            v = o(O, v, k),
            R === null ? C = O : R.sibling = O,
            R = O);
        return e && T.forEach(function(D) {
            return t(g, D)
        }),
        re && Pn(g, k),
        C
    }
    function E(g, v, w, _) {
        var C = Qr(w);
        if (typeof C != "function")
            throw Error(L(150));
        if (w = C.call(w),
        w == null)
            throw Error(L(151));
        for (var R = C = null, T = v, k = v = 0, O = null, N = w.next(); T !== null && !N.done; k++,
        N = w.next()) {
            T.index > k ? (O = T,
            T = null) : O = T.sibling;
            var D = p(g, T, N.value, _);
            if (D === null) {
                T === null && (T = O);
                break
            }
            e && T && D.alternate === null && t(g, T),
            v = o(D, v, k),
            R === null ? C = D : R.sibling = D,
            R = D,
            T = O
        }
        if (N.done)
            return n(g, T),
            re && Pn(g, k),
            C;
        if (T === null) {
            for (; !N.done; k++,
            N = w.next())
                N = m(g, N.value, _),
                N !== null && (v = o(N, v, k),
                R === null ? C = N : R.sibling = N,
                R = N);
            return re && Pn(g, k),
            C
        }
        for (T = r(g, T); !N.done; k++,
        N = w.next())
            N = y(T, g, k, N.value, _),
            N !== null && (e && N.alternate !== null && T.delete(N.key === null ? k : N.key),
            v = o(N, v, k),
            R === null ? C = N : R.sibling = N,
            R = N);
        return e && T.forEach(function(z) {
            return t(g, z)
        }),
        re && Pn(g, k),
        C
    }
    function x(g, v, w, _) {
        if (typeof w == "object" && w !== null && w.type === fr && w.key === null && (w = w.props.children),
        typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case lo:
                e: {
                    for (var C = w.key, R = v; R !== null; ) {
                        if (R.key === C) {
                            if (C = w.type,
                            C === fr) {
                                if (R.tag === 7) {
                                    n(g, R.sibling),
                                    v = i(R, w.props.children),
                                    v.return = g,
                                    g = v;
                                    break e
                                }
                            } else if (R.elementType === C || typeof C == "object" && C !== null && C.$$typeof === nn && $u(C) === R.type) {
                                n(g, R.sibling),
                                v = i(R, w.props),
                                v.ref = Jr(g, R, w),
                                v.return = g,
                                g = v;
                                break e
                            }
                            n(g, R);
                            break
                        } else
                            t(g, R);
                        R = R.sibling
                    }
                    w.type === fr ? (v = Gn(w.props.children, g.mode, _, w.key),
                    v.return = g,
                    g = v) : (_ = Vo(w.type, w.key, w.props, null, g.mode, _),
                    _.ref = Jr(g, v, w),
                    _.return = g,
                    g = _)
                }
                return s(g);
            case ur:
                e: {
                    for (R = w.key; v !== null; ) {
                        if (v.key === R)
                            if (v.tag === 4 && v.stateNode.containerInfo === w.containerInfo && v.stateNode.implementation === w.implementation) {
                                n(g, v.sibling),
                                v = i(v, w.children || []),
                                v.return = g,
                                g = v;
                                break e
                            } else {
                                n(g, v);
                                break
                            }
                        else
                            t(g, v);
                        v = v.sibling
                    }
                    v = Pa(w, g.mode, _),
                    v.return = g,
                    g = v
                }
                return s(g);
            case nn:
                return R = w._init,
                x(g, v, R(w._payload), _)
            }
            if (ai(w))
                return h(g, v, w, _);
            if (Qr(w))
                return E(g, v, w, _);
            wo(g, w)
        }
        return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w,
        v !== null && v.tag === 6 ? (n(g, v.sibling),
        v = i(v, w),
        v.return = g,
        g = v) : (n(g, v),
        v = La(w, g.mode, _),
        v.return = g,
        g = v),
        s(g)) : n(g, v)
    }
    return x
}
var Or = w1(!0)
  , x1 = w1(!1)
  , ss = Cn(null)
  , as = null
  , Er = null
  , wc = null;
function xc() {
    wc = Er = as = null
}
function Sc(e) {
    var t = ss.current;
    ne(ss),
    e._currentValue = t
}
function xl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Nr(e, t) {
    as = e,
    wc = Er = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0),
    e.firstContext = null)
}
function ht(e) {
    var t = e._currentValue;
    if (wc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Er === null) {
            if (as === null)
                throw Error(L(308));
            Er = e,
            as.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Er = Er.next = e;
    return t
}
var zn = null;
function Cc(e) {
    zn === null ? zn = [e] : zn.push(e)
}
function S1(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Cc(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    $t(e, r)
}
function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var rn = !1;
function _c(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function C1(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ht(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function mn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    G & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        $t(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Cc(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    $t(e, n)
}
function Do(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        cc(e, n)
    }
}
function Wu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ls(e, t, n, r) {
    var i = e.updateQueue;
    rn = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , c = l.next;
        l.next = null,
        s === null ? o = c : s.next = c,
        s = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== s && (a === null ? d.firstBaseUpdate = c : a.next = c,
        d.lastBaseUpdate = l))
    }
    if (o !== null) {
        var m = i.baseState;
        s = 0,
        d = c = l = null,
        a = o;
        do {
            var p = a.lane
              , y = a.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var h = e
                      , E = a;
                    switch (p = t,
                    y = n,
                    E.tag) {
                    case 1:
                        if (h = E.payload,
                        typeof h == "function") {
                            m = h.call(y, m, p);
                            break e
                        }
                        m = h;
                        break e;
                    case 3:
                        h.flags = h.flags & -65537 | 128;
                    case 0:
                        if (h = E.payload,
                        p = typeof h == "function" ? h.call(y, m, p) : h,
                        p == null)
                            break e;
                        m = ae({}, m, p);
                        break e;
                    case 2:
                        rn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                p = i.effects,
                p === null ? i.effects = [a] : p.push(a))
            } else
                y = {
                    eventTime: y,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (c = d = y,
                l = m) : d = d.next = y,
                s |= p;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                p = a,
                a = p.next,
                p.next = null,
                i.lastBaseUpdate = p,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = m),
        i.baseState = l,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        Xn |= s,
        e.lanes = s,
        e.memoizedState = m
    }
}
function Qu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(L(191, i));
                i.call(r)
            }
        }
}
var qi = {}
  , It = Cn(qi)
  , Di = Cn(qi)
  , ji = Cn(qi);
function Un(e) {
    if (e === qi)
        throw Error(L(174));
    return e
}
function Rc(e, t) {
    switch (J(ji, t),
    J(Di, e),
    J(It, qi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : tl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = tl(t, e)
    }
    ne(It),
    J(It, t)
}
function Fr() {
    ne(It),
    ne(Di),
    ne(ji)
}
function _1(e) {
    Un(ji.current);
    var t = Un(It.current)
      , n = tl(t, e.type);
    t !== n && (J(Di, e),
    J(It, n))
}
function Tc(e) {
    Di.current === e && (ne(It),
    ne(Di))
}
var ie = Cn(0);
function cs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ra = [];
function Ac() {
    for (var e = 0; e < Ra.length; e++)
        Ra[e]._workInProgressVersionPrimary = null;
    Ra.length = 0
}
var jo = Yt.ReactCurrentDispatcher
  , Ta = Yt.ReactCurrentBatchConfig
  , qn = 0
  , se = null
  , we = null
  , Te = null
  , us = !1
  , vi = !1
  , zi = 0
  , p2 = 0;
function Be() {
    throw Error(L(321))
}
function kc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!_t(e[n], t[n]))
            return !1;
    return !0
}
function Nc(e, t, n, r, i, o) {
    if (qn = o,
    se = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    jo.current = e === null || e.memoizedState === null ? y2 : E2,
    e = n(r, i),
    vi) {
        o = 0;
        do {
            if (vi = !1,
            zi = 0,
            25 <= o)
                throw Error(L(301));
            o += 1,
            Te = we = null,
            t.updateQueue = null,
            jo.current = w2,
            e = n(r, i)
        } while (vi)
    }
    if (jo.current = fs,
    t = we !== null && we.next !== null,
    qn = 0,
    Te = we = se = null,
    us = !1,
    t)
        throw Error(L(300));
    return e
}
function Mc() {
    var e = zi !== 0;
    return zi = 0,
    e
}
function Nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Te === null ? se.memoizedState = Te = e : Te = Te.next = e,
    Te
}
function pt() {
    if (we === null) {
        var e = se.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = we.next;
    var t = Te === null ? se.memoizedState : Te.next;
    if (t !== null)
        Te = t,
        we = e;
    else {
        if (e === null)
            throw Error(L(310));
        we = e,
        e = {
            memoizedState: we.memoizedState,
            baseState: we.baseState,
            baseQueue: we.baseQueue,
            queue: we.queue,
            next: null
        },
        Te === null ? se.memoizedState = Te = e : Te = Te.next = e
    }
    return Te
}
function Ui(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Aa(e) {
    var t = pt()
      , n = t.queue;
    if (n === null)
        throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = we
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , c = o;
        do {
            var d = c.lane;
            if ((qn & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var m = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = m,
                s = r) : l = l.next = m,
                se.lanes |= d,
                Xn |= d
            }
            c = c.next
        } while (c !== null && c !== o);
        l === null ? s = r : l.next = a,
        _t(r, t.memoizedState) || (Ve = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            se.lanes |= o,
            Xn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ka(e) {
    var t = pt()
      , n = t.queue;
    if (n === null)
        throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        _t(o, t.memoizedState) || (Ve = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function R1() {}
function T1(e, t) {
    var n = se
      , r = pt()
      , i = t()
      , o = !_t(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Ve = !0),
    r = r.queue,
    Lc(N1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Te !== null && Te.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        bi(9, k1.bind(null, n, r, i, t), void 0, null),
        ke === null)
            throw Error(L(349));
        qn & 30 || A1(n, t, i)
    }
    return i
}
function A1(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    se.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function k1(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    M1(t) && L1(e)
}
function N1(e, t, n) {
    return n(function() {
        M1(t) && L1(e)
    })
}
function M1(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !_t(e, n)
    } catch {
        return !0
    }
}
function L1(e) {
    var t = $t(e, 1);
    t !== null && St(t, e, 1, -1)
}
function Yu(e) {
    var t = Nt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ui,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = v2.bind(null, se, e),
    [t.memoizedState, e]
}
function bi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    se.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function P1() {
    return pt().memoizedState
}
function zo(e, t, n, r) {
    var i = Nt();
    se.flags |= e,
    i.memoizedState = bi(1 | t, n, void 0, r === void 0 ? null : r)
}
function Gs(e, t, n, r) {
    var i = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (we !== null) {
        var s = we.memoizedState;
        if (o = s.destroy,
        r !== null && kc(r, s.deps)) {
            i.memoizedState = bi(t, n, o, r);
            return
        }
    }
    se.flags |= e,
    i.memoizedState = bi(1 | t, n, o, r)
}
function Ku(e, t) {
    return zo(8390656, 8, e, t)
}
function Lc(e, t) {
    return Gs(2048, 8, e, t)
}
function I1(e, t) {
    return Gs(4, 2, e, t)
}
function B1(e, t) {
    return Gs(4, 4, e, t)
}
function O1(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function F1(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Gs(4, 4, O1.bind(null, t, e), n)
}
function Pc() {}
function D1(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && kc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function j1(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && kc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function z1(e, t, n) {
    return qn & 21 ? (_t(n, t) || (n = Zd(),
    se.lanes |= n,
    Xn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ve = !0),
    e.memoizedState = n)
}
function m2(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ta.transition;
    Ta.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Q = n,
        Ta.transition = r
    }
}
function U1() {
    return pt().memoizedState
}
function g2(e, t, n) {
    var r = vn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    b1(e))
        H1(t, n);
    else if (n = S1(e, t, n, r),
    n !== null) {
        var i = ze();
        St(n, e, r, i),
        V1(n, t, r)
    }
}
function v2(e, t, n) {
    var r = vn(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (b1(e))
        H1(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                _t(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Cc(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = S1(e, t, i, r),
        n !== null && (i = ze(),
        St(n, e, r, i),
        V1(n, t, r))
    }
}
function b1(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se
}
function H1(e, t) {
    vi = us = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function V1(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        cc(e, n)
    }
}
var fs = {
    readContext: ht,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1
}
  , y2 = {
    readContext: ht,
    useCallback: function(e, t) {
        return Nt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ht,
    useEffect: Ku,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        zo(4194308, 4, O1.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return zo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return zo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Nt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Nt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = g2.bind(null, se, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Nt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Yu,
    useDebugValue: Pc,
    useDeferredValue: function(e) {
        return Nt().memoizedState = e
    },
    useTransition: function() {
        var e = Yu(!1)
          , t = e[0];
        return e = m2.bind(null, e[1]),
        Nt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = se
          , i = Nt();
        if (re) {
            if (n === void 0)
                throw Error(L(407));
            n = n()
        } else {
            if (n = t(),
            ke === null)
                throw Error(L(349));
            qn & 30 || A1(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Ku(N1.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        bi(9, k1.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Nt()
          , t = ke.identifierPrefix;
        if (re) {
            var n = bt
              , r = Ut;
            n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = zi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = p2++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , E2 = {
    readContext: ht,
    useCallback: D1,
    useContext: ht,
    useEffect: Lc,
    useImperativeHandle: F1,
    useInsertionEffect: I1,
    useLayoutEffect: B1,
    useMemo: j1,
    useReducer: Aa,
    useRef: P1,
    useState: function() {
        return Aa(Ui)
    },
    useDebugValue: Pc,
    useDeferredValue: function(e) {
        var t = pt();
        return z1(t, we.memoizedState, e)
    },
    useTransition: function() {
        var e = Aa(Ui)[0]
          , t = pt().memoizedState;
        return [e, t]
    },
    useMutableSource: R1,
    useSyncExternalStore: T1,
    useId: U1,
    unstable_isNewReconciler: !1
}
  , w2 = {
    readContext: ht,
    useCallback: D1,
    useContext: ht,
    useEffect: Lc,
    useImperativeHandle: F1,
    useInsertionEffect: I1,
    useLayoutEffect: B1,
    useMemo: j1,
    useReducer: ka,
    useRef: P1,
    useState: function() {
        return ka(Ui)
    },
    useDebugValue: Pc,
    useDeferredValue: function(e) {
        var t = pt();
        return we === null ? t.memoizedState = e : z1(t, we.memoizedState, e)
    },
    useTransition: function() {
        var e = ka(Ui)[0]
          , t = pt().memoizedState;
        return [e, t]
    },
    useMutableSource: R1,
    useSyncExternalStore: T1,
    useId: U1,
    unstable_isNewReconciler: !1
};
function yt(e, t) {
    if (e && e.defaultProps) {
        t = ae({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Sl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ae({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var $s = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? rr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , i = vn(e)
          , o = Ht(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = mn(e, o, i),
        t !== null && (St(t, e, i, r),
        Do(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , i = vn(e)
          , o = Ht(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = mn(e, o, i),
        t !== null && (St(t, e, i, r),
        Do(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ze()
          , r = vn(e)
          , i = Ht(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = mn(e, i, r),
        t !== null && (St(t, e, r, n),
        Do(t, e, r))
    }
};
function qu(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ii(n, r) || !Ii(i, o) : !0
}
function Z1(e, t, n) {
    var r = !1
      , i = wn
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = ht(o) : (i = Ge(t) ? Yn : De.current,
    r = t.contextTypes,
    o = (r = r != null) ? Ir(e, i) : wn),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = $s,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Xu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $s.enqueueReplaceState(t, t.state, null)
}
function Cl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    _c(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ht(o) : (o = Ge(t) ? Yn : De.current,
    i.context = Ir(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Sl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && $s.enqueueReplaceState(i, i.state, null),
    ls(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Dr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Qh(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Na(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function _l(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var x2 = typeof WeakMap == "function" ? WeakMap : Map;
function G1(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        hs || (hs = !0,
        Bl = r),
        _l(e, t)
    }
    ,
    n
}
function $1(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            _l(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        _l(e, t),
        typeof r != "function" && (gn === null ? gn = new Set([this]) : gn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Ju(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new x2;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = O2.bind(null, e, t, n),
    t.then(e, e))
}
function ef(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function tf(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1),
    t.tag = 2,
    mn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var S2 = Yt.ReactCurrentOwner
  , Ve = !1;
function je(e, t, n, r) {
    t.child = e === null ? x1(t, null, n, r) : Or(t, e.child, n, r)
}
function nf(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Nr(t, i),
    r = Nc(e, t, n, r, o, i),
    n = Mc(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Wt(e, t, i)) : (re && n && vc(t),
    t.flags |= 1,
    je(e, t, r, i),
    t.child)
}
function rf(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Uc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        W1(e, t, o, r, i)) : (e = Vo(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ii,
        n(s, r) && e.ref === t.ref)
            return Wt(e, t, i)
    }
    return t.flags |= 1,
    e = yn(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function W1(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Ii(o, r) && e.ref === t.ref)
            if (Ve = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Ve = !0);
            else
                return t.lanes = e.lanes,
                Wt(e, t, i)
    }
    return Rl(e, t, n, r, i)
}
function Q1(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            J(xr, Ke),
            Ke |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                J(xr, Ke),
                Ke |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            J(xr, Ke),
            Ke |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        J(xr, Ke),
        Ke |= r;
    return je(e, t, i, n),
    t.child
}
function Y1(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Rl(e, t, n, r, i) {
    var o = Ge(n) ? Yn : De.current;
    return o = Ir(t, o),
    Nr(t, i),
    n = Nc(e, t, n, r, o, i),
    r = Mc(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Wt(e, t, i)) : (re && r && vc(t),
    t.flags |= 1,
    je(e, t, n, i),
    t.child)
}
function of(e, t, n, r, i) {
    if (Ge(n)) {
        var o = !0;
        rs(t)
    } else
        o = !1;
    if (Nr(t, i),
    t.stateNode === null)
        Uo(e, t),
        Z1(t, n, r),
        Cl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = ht(c) : (c = Ge(n) ? Yn : De.current,
        c = Ir(t, c));
        var d = n.getDerivedStateFromProps
          , m = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Xu(t, s, r, c),
        rn = !1;
        var p = t.memoizedState;
        s.state = p,
        ls(t, r, s, i),
        l = t.memoizedState,
        a !== r || p !== l || Ze.current || rn ? (typeof d == "function" && (Sl(t, n, d, r),
        l = t.memoizedState),
        (a = rn || qu(t, n, a, r, p, l, c)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = c,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        C1(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : yt(t.type, a),
        s.props = c,
        m = t.pendingProps,
        p = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = ht(l) : (l = Ge(n) ? Yn : De.current,
        l = Ir(t, l));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== m || p !== l) && Xu(t, s, r, l),
        rn = !1,
        p = t.memoizedState,
        s.state = p,
        ls(t, r, s, i);
        var h = t.memoizedState;
        a !== m || p !== h || Ze.current || rn ? (typeof y == "function" && (Sl(t, n, y, r),
        h = t.memoizedState),
        (c = rn || qu(t, n, c, r, p, h, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, h, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, h, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = h),
        s.props = r,
        s.state = h,
        s.context = l,
        r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Tl(e, t, n, r, o, i)
}
function Tl(e, t, n, r, i, o) {
    Y1(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Vu(t, n, !1),
        Wt(e, t, o);
    r = t.stateNode,
    S2.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Or(t, e.child, null, o),
    t.child = Or(t, null, a, o)) : je(e, t, a, o),
    t.memoizedState = r.state,
    i && Vu(t, n, !0),
    t.child
}
function K1(e) {
    var t = e.stateNode;
    t.pendingContext ? Hu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hu(e, t.context, !1),
    Rc(e, t.containerInfo)
}
function sf(e, t, n, r, i) {
    return Br(),
    Ec(i),
    t.flags |= 256,
    je(e, t, n, r),
    t.child
}
var Al = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function kl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function q1(e, t, n) {
    var r = t.pendingProps, i = ie.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    J(ie, i & 1),
    e === null)
        return wl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Ys(s, r, 0, null),
        e = Gn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = kl(n),
        t.memoizedState = Al,
        e) : Ic(t, s));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return C2(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = yn(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = yn(a, o) : (o = Gn(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? kl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Al,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = yn(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ic(e, t) {
    return t = Ys({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function xo(e, t, n, r) {
    return r !== null && Ec(r),
    Or(t, e.child, null, n),
    e = Ic(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function C2(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Na(Error(L(422))),
        xo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Ys({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Gn(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Or(t, e.child, null, s),
        t.child.memoizedState = kl(s),
        t.memoizedState = Al,
        o);
    if (!(t.mode & 1))
        return xo(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(L(419)),
        r = Na(o, r, void 0),
        xo(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Ve || a) {
        if (r = ke,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            $t(e, i),
            St(r, e, i, -1))
        }
        return zc(),
        r = Na(Error(L(421))),
        xo(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = F2.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Xe = pn(i.nextSibling),
    et = t,
    re = !0,
    wt = null,
    e !== null && (at[lt++] = Ut,
    at[lt++] = bt,
    at[lt++] = Kn,
    Ut = e.id,
    bt = e.overflow,
    Kn = t),
    t = Ic(t, r.children),
    t.flags |= 4096,
    t)
}
function af(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    xl(e.return, t, n)
}
function Ma(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function X1(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (je(e, t, r.children, n),
    r = ie.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && af(e, n, t);
                else if (e.tag === 19)
                    af(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (J(ie, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && cs(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Ma(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && cs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Ma(t, !0, n, null, o);
            break;
        case "together":
            Ma(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Uo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Wt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Xn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(L(153));
    if (t.child !== null) {
        for (e = t.child,
        n = yn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = yn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function _2(e, t, n) {
    switch (t.tag) {
    case 3:
        K1(t),
        Br();
        break;
    case 5:
        _1(t);
        break;
    case 1:
        Ge(t.type) && rs(t);
        break;
    case 4:
        Rc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        J(ss, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (J(ie, ie.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? q1(e, t, n) : (J(ie, ie.current & 1),
            e = Wt(e, t, n),
            e !== null ? e.sibling : null);
        J(ie, ie.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return X1(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        J(ie, ie.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Q1(e, t, n)
    }
    return Wt(e, t, n)
}
var J1, Nl, e0, t0;
J1 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Nl = function() {}
;
e0 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Un(It.current);
        var o = null;
        switch (n) {
        case "input":
            i = qa(e, i),
            r = qa(e, r),
            o = [];
            break;
        case "select":
            i = ae({}, i, {
                value: void 0
            }),
            r = ae({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = el(e, i),
            r = el(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ts)
        }
        nl(n, r);
        var s;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var a = i[c];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ti.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = i != null ? i[c] : void 0,
            r.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ti.hasOwnProperty(c) ? (l != null && c === "onScroll" && ee("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(c, l))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
t0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ei(e, t) {
    if (!re)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function R2(e, t, n) {
    var r = t.pendingProps;
    switch (yc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Oe(t),
        null;
    case 1:
        return Ge(t.type) && ns(),
        Oe(t),
        null;
    case 3:
        return r = t.stateNode,
        Fr(),
        ne(Ze),
        ne(De),
        Ac(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Eo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        wt !== null && (Dl(wt),
        wt = null))),
        Nl(e, t),
        Oe(t),
        null;
    case 5:
        Tc(t);
        var i = Un(ji.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            e0(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(L(166));
                return Oe(t),
                null
            }
            if (e = Un(It.current),
            Eo(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Mt] = t,
                r[Fi] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ee("cancel", r),
                    ee("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ee("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < ci.length; i++)
                        ee(ci[i], r);
                    break;
                case "source":
                    ee("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ee("error", r),
                    ee("load", r);
                    break;
                case "details":
                    ee("toggle", r);
                    break;
                case "input":
                    mu(r, o),
                    ee("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    ee("invalid", r);
                    break;
                case "textarea":
                    vu(r, o),
                    ee("invalid", r)
                }
                nl(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && yo(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && yo(r.textContent, a, e),
                        i = ["children", "" + a]) : Ti.hasOwnProperty(s) && a != null && s === "onScroll" && ee("scroll", r)
                    }
                switch (n) {
                case "input":
                    co(r),
                    gu(r, o, !0);
                    break;
                case "textarea":
                    co(r),
                    yu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ts)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Nd(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Mt] = t,
                e[Fi] = r,
                J1(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = rl(n, r),
                    n) {
                    case "dialog":
                        ee("cancel", e),
                        ee("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ee("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < ci.length; i++)
                            ee(ci[i], e);
                        i = r;
                        break;
                    case "source":
                        ee("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ee("error", e),
                        ee("load", e),
                        i = r;
                        break;
                    case "details":
                        ee("toggle", e),
                        i = r;
                        break;
                    case "input":
                        mu(e, r),
                        i = qa(e, r),
                        ee("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ae({}, r, {
                            value: void 0
                        }),
                        ee("invalid", e);
                        break;
                    case "textarea":
                        vu(e, r),
                        i = el(e, r),
                        ee("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    nl(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Pd(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Md(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ai(e, l) : typeof l == "number" && Ai(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ti.hasOwnProperty(o) ? l != null && o === "onScroll" && ee("scroll", e) : l != null && rc(e, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        co(e),
                        gu(e, r, !1);
                        break;
                    case "textarea":
                        co(e),
                        yu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + En(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Rr(e, !!r.multiple, o, !1) : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ts)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Oe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            t0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(L(166));
            if (n = Un(ji.current),
            Un(It.current),
            Eo(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Mt] = t,
                (o = r.nodeValue !== n) && (e = et,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        yo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && yo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Mt] = t,
                t.stateNode = r
        }
        return Oe(t),
        null;
    case 13:
        if (ne(ie),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (re && Xe !== null && t.mode & 1 && !(t.flags & 128))
                E1(),
                Br(),
                t.flags |= 98560,
                o = !1;
            else if (o = Eo(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(L(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(L(317));
                    o[Mt] = t
                } else
                    Br(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Oe(t),
                o = !1
            } else
                wt !== null && (Dl(wt),
                wt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ie.current & 1 ? Se === 0 && (Se = 3) : zc())),
        t.updateQueue !== null && (t.flags |= 4),
        Oe(t),
        null);
    case 4:
        return Fr(),
        Nl(e, t),
        e === null && Bi(t.stateNode.containerInfo),
        Oe(t),
        null;
    case 10:
        return Sc(t.type._context),
        Oe(t),
        null;
    case 17:
        return Ge(t.type) && ns(),
        Oe(t),
        null;
    case 19:
        if (ne(ie),
        o = t.memoizedState,
        o === null)
            return Oe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                ei(o, !1);
            else {
                if (Se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = cs(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ei(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return J(ie, ie.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && pe() > jr && (t.flags |= 128,
                r = !0,
                ei(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = cs(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ei(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !re)
                        return Oe(t),
                        null
                } else
                    2 * pe() - o.renderingStartTime > jr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ei(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = pe(),
        t.sibling = null,
        n = ie.current,
        J(ie, r ? n & 1 | 2 : n & 1),
        t) : (Oe(t),
        null);
    case 22:
    case 23:
        return jc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ke & 1073741824 && (Oe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(L(156, t.tag))
}
function T2(e, t) {
    switch (yc(t),
    t.tag) {
    case 1:
        return Ge(t.type) && ns(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Fr(),
        ne(Ze),
        ne(De),
        Ac(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Tc(t),
        null;
    case 13:
        if (ne(ie),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(L(340));
            Br()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ne(ie),
        null;
    case 4:
        return Fr(),
        null;
    case 10:
        return Sc(t.type._context),
        null;
    case 22:
    case 23:
        return jc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var So = !1
  , Fe = !1
  , A2 = typeof WeakSet == "function" ? WeakSet : Set
  , B = null;
function wr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ce(e, t, r)
            }
        else
            n.current = null
}
function Ml(e, t, n) {
    try {
        n()
    } catch (r) {
        ce(e, t, r)
    }
}
var lf = !1;
function k2(e, t) {
    if (hl = Xo,
    e = s1(),
    gc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , c = 0
                      , d = 0
                      , m = e
                      , p = null;
                    t: for (; ; ) {
                        for (var y; m !== n || i !== 0 && m.nodeType !== 3 || (a = s + i),
                        m !== o || r !== 0 && m.nodeType !== 3 || (l = s + r),
                        m.nodeType === 3 && (s += m.nodeValue.length),
                        (y = m.firstChild) !== null; )
                            p = m,
                            m = y;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (p === n && ++c === i && (a = s),
                            p === o && ++d === r && (l = s),
                            (y = m.nextSibling) !== null)
                                break;
                            m = p,
                            p = m.parentNode
                        }
                        m = y
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (pl = {
        focusedElem: e,
        selectionRange: n
    },
    Xo = !1,
    B = t; B !== null; )
        if (t = B,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            B = e;
        else
            for (; B !== null; ) {
                t = B;
                try {
                    var h = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (h !== null) {
                                var E = h.memoizedProps
                                  , x = h.memoizedState
                                  , g = t.stateNode
                                  , v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? E : yt(t.type, E), x);
                                g.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var w = t.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(L(163))
                        }
                } catch (_) {
                    ce(t, t.return, _)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    B = e;
                    break
                }
                B = t.return
            }
    return h = lf,
    lf = !1,
    h
}
function yi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Ml(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ws(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ll(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function n0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    n0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Mt],
    delete t[Fi],
    delete t[vl],
    delete t[u2],
    delete t[f2])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function r0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function cf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || r0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Pl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ts));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Pl(e, t, n),
        e = e.sibling; e !== null; )
            Pl(e, t, n),
            e = e.sibling
}
function Il(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Il(e, t, n),
        e = e.sibling; e !== null; )
            Il(e, t, n),
            e = e.sibling
}
var Ne = null
  , Et = !1;
function Kt(e, t, n) {
    for (n = n.child; n !== null; )
        i0(e, t, n),
        n = n.sibling
}
function i0(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
        try {
            Pt.onCommitFiberUnmount(zs, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Fe || wr(n, t);
    case 6:
        var r = Ne
          , i = Et;
        Ne = null,
        Kt(e, t, n),
        Ne = r,
        Et = i,
        Ne !== null && (Et ? (e = Ne,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
        break;
    case 18:
        Ne !== null && (Et ? (e = Ne,
        n = n.stateNode,
        e.nodeType === 8 ? Ca(e.parentNode, n) : e.nodeType === 1 && Ca(e, n),
        Li(e)) : Ca(Ne, n.stateNode));
        break;
    case 4:
        r = Ne,
        i = Et,
        Ne = n.stateNode.containerInfo,
        Et = !0,
        Kt(e, t, n),
        Ne = r,
        Et = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Fe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && Ml(n, t, s),
                i = i.next
            } while (i !== r)
        }
        Kt(e, t, n);
        break;
    case 1:
        if (!Fe && (wr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ce(n, t, a)
            }
        Kt(e, t, n);
        break;
    case 21:
        Kt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null,
        Kt(e, t, n),
        Fe = r) : Kt(e, t, n);
        break;
    default:
        Kt(e, t, n)
    }
}
function uf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new A2),
        t.forEach(function(r) {
            var i = D2.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ne = a.stateNode,
                        Et = !1;
                        break e;
                    case 3:
                        Ne = a.stateNode.containerInfo,
                        Et = !0;
                        break e;
                    case 4:
                        Ne = a.stateNode.containerInfo,
                        Et = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ne === null)
                    throw Error(L(160));
                i0(o, s, i),
                Ne = null,
                Et = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (c) {
                ce(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            o0(t, e),
            t = t.sibling
}
function o0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (mt(t, e),
        At(e),
        r & 4) {
            try {
                yi(3, e, e.return),
                Ws(3, e)
            } catch (E) {
                ce(e, e.return, E)
            }
            try {
                yi(5, e, e.return)
            } catch (E) {
                ce(e, e.return, E)
            }
        }
        break;
    case 1:
        mt(t, e),
        At(e),
        r & 512 && n !== null && wr(n, n.return);
        break;
    case 5:
        if (mt(t, e),
        At(e),
        r & 512 && n !== null && wr(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Ai(i, "")
            } catch (E) {
                ce(e, e.return, E)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && Ad(i, o),
                    rl(a, s);
                    var c = rl(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s]
                          , m = l[s + 1];
                        d === "style" ? Pd(i, m) : d === "dangerouslySetInnerHTML" ? Md(i, m) : d === "children" ? Ai(i, m) : rc(i, d, m, c)
                    }
                    switch (a) {
                    case "input":
                        Xa(i, o);
                        break;
                    case "textarea":
                        kd(i, o);
                        break;
                    case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var y = o.value;
                        y != null ? Rr(i, !!o.multiple, y, !1) : p !== !!o.multiple && (o.defaultValue != null ? Rr(i, !!o.multiple, o.defaultValue, !0) : Rr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Fi] = o
                } catch (E) {
                    ce(e, e.return, E)
                }
        }
        break;
    case 6:
        if (mt(t, e),
        At(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(L(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (E) {
                ce(e, e.return, E)
            }
        }
        break;
    case 3:
        if (mt(t, e),
        At(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Li(t.containerInfo)
            } catch (E) {
                ce(e, e.return, E)
            }
        break;
    case 4:
        mt(t, e),
        At(e);
        break;
    case 13:
        mt(t, e),
        At(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Fc = pe())),
        r & 4 && uf(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Fe = (c = Fe) || d,
        mt(t, e),
        Fe = c) : mt(t, e),
        At(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (B = e,
                d = e.child; d !== null; ) {
                    for (m = B = d; B !== null; ) {
                        switch (p = B,
                        y = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            yi(4, p, p.return);
                            break;
                        case 1:
                            wr(p, p.return);
                            var h = p.stateNode;
                            if (typeof h.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    h.props = t.memoizedProps,
                                    h.state = t.memoizedState,
                                    h.componentWillUnmount()
                                } catch (E) {
                                    ce(r, n, E)
                                }
                            }
                            break;
                        case 5:
                            wr(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                df(m);
                                continue
                            }
                        }
                        y !== null ? (y.return = p,
                        B = y) : df(m)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (d === null) {
                        d = m;
                        try {
                            i = m.stateNode,
                            c ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = m.stateNode,
                            l = m.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Ld("display", s))
                        } catch (E) {
                            ce(e, e.return, E)
                        }
                    }
                } else if (m.tag === 6) {
                    if (d === null)
                        try {
                            m.stateNode.nodeValue = c ? "" : m.memoizedProps
                        } catch (E) {
                            ce(e, e.return, E)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    d === m && (d = null),
                    m = m.return
                }
                d === m && (d = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        mt(t, e),
        At(e),
        r & 4 && uf(e);
        break;
    case 21:
        break;
    default:
        mt(t, e),
        At(e)
    }
}
function At(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (r0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(L(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ai(i, ""),
                r.flags &= -33);
                var o = cf(e);
                Il(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = cf(e);
                Pl(e, a, s);
                break;
            default:
                throw Error(L(161))
            }
        } catch (l) {
            ce(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function N2(e, t, n) {
    B = e,
    s0(e)
}
function s0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
        var i = B
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || So;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Fe;
                a = So;
                var c = Fe;
                if (So = s,
                (Fe = l) && !c)
                    for (B = i; B !== null; )
                        s = B,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? hf(i) : l !== null ? (l.return = s,
                        B = l) : hf(i);
                for (; o !== null; )
                    B = o,
                    s0(o),
                    o = o.sibling;
                B = i,
                So = a,
                Fe = c
            }
            ff(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            B = o) : ff(e)
    }
}
function ff(e) {
    for (; B !== null; ) {
        var t = B;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Fe || Ws(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Fe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Qu(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Qu(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var m = d.dehydrated;
                                    m !== null && Li(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(L(163))
                    }
                Fe || t.flags & 512 && Ll(t)
            } catch (p) {
                ce(t, t.return, p)
            }
        }
        if (t === e) {
            B = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            B = n;
            break
        }
        B = t.return
    }
}
function df(e) {
    for (; B !== null; ) {
        var t = B;
        if (t === e) {
            B = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            B = n;
            break
        }
        B = t.return
    }
}
function hf(e) {
    for (; B !== null; ) {
        var t = B;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ws(4, t)
                } catch (l) {
                    ce(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ce(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    Ll(t)
                } catch (l) {
                    ce(t, o, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Ll(t)
                } catch (l) {
                    ce(t, s, l)
                }
            }
        } catch (l) {
            ce(t, t.return, l)
        }
        if (t === e) {
            B = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            B = a;
            break
        }
        B = t.return
    }
}
var M2 = Math.ceil
  , ds = Yt.ReactCurrentDispatcher
  , Bc = Yt.ReactCurrentOwner
  , ft = Yt.ReactCurrentBatchConfig
  , G = 0
  , ke = null
  , ve = null
  , Pe = 0
  , Ke = 0
  , xr = Cn(0)
  , Se = 0
  , Hi = null
  , Xn = 0
  , Qs = 0
  , Oc = 0
  , Ei = null
  , He = null
  , Fc = 0
  , jr = 1 / 0
  , Ot = null
  , hs = !1
  , Bl = null
  , gn = null
  , Co = !1
  , cn = null
  , ps = 0
  , wi = 0
  , Ol = null
  , bo = -1
  , Ho = 0;
function ze() {
    return G & 6 ? pe() : bo !== -1 ? bo : bo = pe()
}
function vn(e) {
    return e.mode & 1 ? G & 2 && Pe !== 0 ? Pe & -Pe : h2.transition !== null ? (Ho === 0 && (Ho = Zd()),
    Ho) : (e = Q,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : qd(e.type)),
    e) : 1
}
function St(e, t, n, r) {
    if (50 < wi)
        throw wi = 0,
        Ol = null,
        Error(L(185));
    Qi(e, n, r),
    (!(G & 2) || e !== ke) && (e === ke && (!(G & 2) && (Qs |= n),
    Se === 4 && an(e, Pe)),
    $e(e, r),
    n === 1 && G === 0 && !(t.mode & 1) && (jr = pe() + 500,
    Zs && _n()))
}
function $e(e, t) {
    var n = e.callbackNode;
    hp(e, t);
    var r = qo(e, e === ke ? Pe : 0);
    if (r === 0)
        n !== null && xu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && xu(n),
        t === 1)
            e.tag === 0 ? d2(pf.bind(null, e)) : g1(pf.bind(null, e)),
            l2(function() {
                !(G & 6) && _n()
            }),
            n = null;
        else {
            switch (Gd(r)) {
            case 1:
                n = lc;
                break;
            case 4:
                n = Hd;
                break;
            case 16:
                n = Ko;
                break;
            case 536870912:
                n = Vd;
                break;
            default:
                n = Ko
            }
            n = p0(n, a0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function a0(e, t) {
    if (bo = -1,
    Ho = 0,
    G & 6)
        throw Error(L(327));
    var n = e.callbackNode;
    if (Mr() && e.callbackNode !== n)
        return null;
    var r = qo(e, e === ke ? Pe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ms(e, r);
    else {
        t = r;
        var i = G;
        G |= 2;
        var o = c0();
        (ke !== e || Pe !== t) && (Ot = null,
        jr = pe() + 500,
        Zn(e, t));
        do
            try {
                I2();
                break
            } catch (a) {
                l0(e, a)
            }
        while (!0);
        xc(),
        ds.current = o,
        G = i,
        ve !== null ? t = 0 : (ke = null,
        Pe = 0,
        t = Se)
    }
    if (t !== 0) {
        if (t === 2 && (i = ll(e),
        i !== 0 && (r = i,
        t = Fl(e, i))),
        t === 1)
            throw n = Hi,
            Zn(e, 0),
            an(e, r),
            $e(e, pe()),
            n;
        if (t === 6)
            an(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !L2(i) && (t = ms(e, r),
            t === 2 && (o = ll(e),
            o !== 0 && (r = o,
            t = Fl(e, o))),
            t === 1))
                throw n = Hi,
                Zn(e, 0),
                an(e, r),
                $e(e, pe()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(L(345));
            case 2:
                In(e, He, Ot);
                break;
            case 3:
                if (an(e, r),
                (r & 130023424) === r && (t = Fc + 500 - pe(),
                10 < t)) {
                    if (qo(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ze(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = gl(In.bind(null, e, He, Ot), t);
                    break
                }
                In(e, He, Ot);
                break;
            case 4:
                if (an(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - xt(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * M2(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = gl(In.bind(null, e, He, Ot), r);
                    break
                }
                In(e, He, Ot);
                break;
            case 5:
                In(e, He, Ot);
                break;
            default:
                throw Error(L(329))
            }
        }
    }
    return $e(e, pe()),
    e.callbackNode === n ? a0.bind(null, e) : null
}
function Fl(e, t) {
    var n = Ei;
    return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
    e = ms(e, t),
    e !== 2 && (t = He,
    He = n,
    t !== null && Dl(t)),
    e
}
function Dl(e) {
    He === null ? He = e : He.push.apply(He, e)
}
function L2(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!_t(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function an(e, t) {
    for (t &= ~Oc,
    t &= ~Qs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - xt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function pf(e) {
    if (G & 6)
        throw Error(L(327));
    Mr();
    var t = qo(e, 0);
    if (!(t & 1))
        return $e(e, pe()),
        null;
    var n = ms(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ll(e);
        r !== 0 && (t = r,
        n = Fl(e, r))
    }
    if (n === 1)
        throw n = Hi,
        Zn(e, 0),
        an(e, t),
        $e(e, pe()),
        n;
    if (n === 6)
        throw Error(L(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    In(e, He, Ot),
    $e(e, pe()),
    null
}
function Dc(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n,
        G === 0 && (jr = pe() + 500,
        Zs && _n())
    }
}
function Jn(e) {
    cn !== null && cn.tag === 0 && !(G & 6) && Mr();
    var t = G;
    G |= 1;
    var n = ft.transition
      , r = Q;
    try {
        if (ft.transition = null,
        Q = 1,
        e)
            return e()
    } finally {
        Q = r,
        ft.transition = n,
        G = t,
        !(G & 6) && _n()
    }
}
function jc() {
    Ke = xr.current,
    ne(xr)
}
function Zn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    a2(n)),
    ve !== null)
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch (yc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ns();
                break;
            case 3:
                Fr(),
                ne(Ze),
                ne(De),
                Ac();
                break;
            case 5:
                Tc(r);
                break;
            case 4:
                Fr();
                break;
            case 13:
                ne(ie);
                break;
            case 19:
                ne(ie);
                break;
            case 10:
                Sc(r.type._context);
                break;
            case 22:
            case 23:
                jc()
            }
            n = n.return
        }
    if (ke = e,
    ve = e = yn(e.current, null),
    Pe = Ke = t,
    Se = 0,
    Hi = null,
    Oc = Qs = Xn = 0,
    He = Ei = null,
    zn !== null) {
        for (t = 0; t < zn.length; t++)
            if (n = zn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        zn = null
    }
    return e
}
function l0(e, t) {
    do {
        var n = ve;
        try {
            if (xc(),
            jo.current = fs,
            us) {
                for (var r = se.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                us = !1
            }
            if (qn = 0,
            Te = we = se = null,
            vi = !1,
            zi = 0,
            Bc.current = null,
            n === null || n.return === null) {
                Se = 1,
                Hi = t,
                ve = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = Pe,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , d = a
                      , m = d.tag;
                    if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue,
                        d.memoizedState = p.memoizedState,
                        d.lanes = p.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = ef(s);
                    if (y !== null) {
                        y.flags &= -257,
                        tf(y, s, a, o, t),
                        y.mode & 1 && Ju(o, c, t),
                        t = y,
                        l = c;
                        var h = t.updateQueue;
                        if (h === null) {
                            var E = new Set;
                            E.add(l),
                            t.updateQueue = E
                        } else
                            h.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ju(o, c, t),
                            zc();
                            break e
                        }
                        l = Error(L(426))
                    }
                } else if (re && a.mode & 1) {
                    var x = ef(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        tf(x, s, a, o, t),
                        Ec(Dr(l, a));
                        break e
                    }
                }
                o = l = Dr(l, a),
                Se !== 4 && (Se = 2),
                Ei === null ? Ei = [o] : Ei.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = G1(o, l, t);
                        Wu(o, g);
                        break e;
                    case 1:
                        a = l;
                        var v = o.type
                          , w = o.stateNode;
                        if (!(o.flags & 128) && (typeof v.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (gn === null || !gn.has(w)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var _ = $1(o, a, t);
                            Wu(o, _);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            f0(n)
        } catch (C) {
            t = C,
            ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (!0)
}
function c0() {
    var e = ds.current;
    return ds.current = fs,
    e === null ? fs : e
}
function zc() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    ke === null || !(Xn & 268435455) && !(Qs & 268435455) || an(ke, Pe)
}
function ms(e, t) {
    var n = G;
    G |= 2;
    var r = c0();
    (ke !== e || Pe !== t) && (Ot = null,
    Zn(e, t));
    do
        try {
            P2();
            break
        } catch (i) {
            l0(e, i)
        }
    while (!0);
    if (xc(),
    G = n,
    ds.current = r,
    ve !== null)
        throw Error(L(261));
    return ke = null,
    Pe = 0,
    Se
}
function P2() {
    for (; ve !== null; )
        u0(ve)
}
function I2() {
    for (; ve !== null && !ip(); )
        u0(ve)
}
function u0(e) {
    var t = h0(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps,
    t === null ? f0(e) : ve = t,
    Bc.current = null
}
function f0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = T2(n, t),
            n !== null) {
                n.flags &= 32767,
                ve = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Se = 6,
                ve = null;
                return
            }
        } else if (n = R2(n, t, Ke),
        n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    Se === 0 && (Se = 5)
}
function In(e, t, n) {
    var r = Q
      , i = ft.transition;
    try {
        ft.transition = null,
        Q = 1,
        B2(e, t, n, r)
    } finally {
        ft.transition = i,
        Q = r
    }
    return null
}
function B2(e, t, n, r) {
    do
        Mr();
    while (cn !== null);
    if (G & 6)
        throw Error(L(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(L(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (pp(e, o),
    e === ke && (ve = ke = null,
    Pe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Co || (Co = !0,
    p0(Ko, function() {
        return Mr(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = ft.transition,
        ft.transition = null;
        var s = Q;
        Q = 1;
        var a = G;
        G |= 4,
        Bc.current = null,
        k2(e, n),
        o0(n, e),
        e2(pl),
        Xo = !!hl,
        pl = hl = null,
        e.current = n,
        N2(n),
        op(),
        G = a,
        Q = s,
        ft.transition = o
    } else
        e.current = n;
    if (Co && (Co = !1,
    cn = e,
    ps = i),
    o = e.pendingLanes,
    o === 0 && (gn = null),
    lp(n.stateNode),
    $e(e, pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (hs)
        throw hs = !1,
        e = Bl,
        Bl = null,
        e;
    return ps & 1 && e.tag !== 0 && Mr(),
    o = e.pendingLanes,
    o & 1 ? e === Ol ? wi++ : (wi = 0,
    Ol = e) : wi = 0,
    _n(),
    null
}
function Mr() {
    if (cn !== null) {
        var e = Gd(ps)
          , t = ft.transition
          , n = Q;
        try {
            if (ft.transition = null,
            Q = 16 > e ? 16 : e,
            cn === null)
                var r = !1;
            else {
                if (e = cn,
                cn = null,
                ps = 0,
                G & 6)
                    throw Error(L(331));
                var i = G;
                for (G |= 4,
                B = e.current; B !== null; ) {
                    var o = B
                      , s = o.child;
                    if (B.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (B = c; B !== null; ) {
                                    var d = B;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yi(8, d, o)
                                    }
                                    var m = d.child;
                                    if (m !== null)
                                        m.return = d,
                                        B = m;
                                    else
                                        for (; B !== null; ) {
                                            d = B;
                                            var p = d.sibling
                                              , y = d.return;
                                            if (n0(d),
                                            d === c) {
                                                B = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = y,
                                                B = p;
                                                break
                                            }
                                            B = y
                                        }
                                }
                            }
                            var h = o.alternate;
                            if (h !== null) {
                                var E = h.child;
                                if (E !== null) {
                                    h.child = null;
                                    do {
                                        var x = E.sibling;
                                        E.sibling = null,
                                        E = x
                                    } while (E !== null)
                                }
                            }
                            B = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        B = s;
                    else
                        e: for (; B !== null; ) {
                            if (o = B,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    yi(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                B = g;
                                break e
                            }
                            B = o.return
                        }
                }
                var v = e.current;
                for (B = v; B !== null; ) {
                    s = B;
                    var w = s.child;
                    if (s.subtreeFlags & 2064 && w !== null)
                        w.return = s,
                        B = w;
                    else
                        e: for (s = v; B !== null; ) {
                            if (a = B,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ws(9, a)
                                    }
                                } catch (C) {
                                    ce(a, a.return, C)
                                }
                            if (a === s) {
                                B = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                B = _;
                                break e
                            }
                            B = a.return
                        }
                }
                if (G = i,
                _n(),
                Pt && typeof Pt.onPostCommitFiberRoot == "function")
                    try {
                        Pt.onPostCommitFiberRoot(zs, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Q = n,
            ft.transition = t
        }
    }
    return !1
}
function mf(e, t, n) {
    t = Dr(n, t),
    t = G1(e, t, 1),
    e = mn(e, t, 1),
    t = ze(),
    e !== null && (Qi(e, 1, t),
    $e(e, t))
}
function ce(e, t, n) {
    if (e.tag === 3)
        mf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                mf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gn === null || !gn.has(r))) {
                    e = Dr(n, e),
                    e = $1(t, e, 1),
                    t = mn(t, e, 1),
                    e = ze(),
                    t !== null && (Qi(t, 1, e),
                    $e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function O2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ze(),
    e.pingedLanes |= e.suspendedLanes & n,
    ke === e && (Pe & n) === n && (Se === 4 || Se === 3 && (Pe & 130023424) === Pe && 500 > pe() - Fc ? Zn(e, 0) : Oc |= n),
    $e(e, t)
}
function d0(e, t) {
    t === 0 && (e.mode & 1 ? (t = ho,
    ho <<= 1,
    !(ho & 130023424) && (ho = 4194304)) : t = 1);
    var n = ze();
    e = $t(e, t),
    e !== null && (Qi(e, t, n),
    $e(e, n))
}
function F2(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    d0(e, n)
}
function D2(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(L(314))
    }
    r !== null && r.delete(t),
    d0(e, n)
}
var h0;
h0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current)
            Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ve = !1,
                _2(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else
        Ve = !1,
        re && t.flags & 1048576 && v1(t, os, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Uo(e, t),
        e = t.pendingProps;
        var i = Ir(t, De.current);
        Nr(t, n),
        i = Nc(null, t, r, e, i, n);
        var o = Mc();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ge(r) ? (o = !0,
        rs(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        _c(t),
        i.updater = $s,
        t.stateNode = i,
        i._reactInternals = t,
        Cl(t, r, e, n),
        t = Tl(null, t, r, !0, o, n)) : (t.tag = 0,
        re && o && vc(t),
        je(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Uo(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = z2(r),
            e = yt(r, e),
            i) {
            case 0:
                t = Rl(null, t, r, e, n);
                break e;
            case 1:
                t = of(null, t, r, e, n);
                break e;
            case 11:
                t = nf(null, t, r, e, n);
                break e;
            case 14:
                t = rf(null, t, r, yt(r.type, e), n);
                break e
            }
            throw Error(L(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : yt(r, i),
        Rl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : yt(r, i),
        of(e, t, r, i, n);
    case 3:
        e: {
            if (K1(t),
            e === null)
                throw Error(L(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            C1(e, t),
            ls(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Dr(Error(L(423)), t),
                    t = sf(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Dr(Error(L(424)), t),
                    t = sf(e, t, r, n, i);
                    break e
                } else
                    for (Xe = pn(t.stateNode.containerInfo.firstChild),
                    et = t,
                    re = !0,
                    wt = null,
                    n = x1(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Br(),
                r === i) {
                    t = Wt(e, t, n);
                    break e
                }
                je(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return _1(t),
        e === null && wl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        ml(r, i) ? s = null : o !== null && ml(r, o) && (t.flags |= 32),
        Y1(e, t),
        je(e, t, s, n),
        t.child;
    case 6:
        return e === null && wl(t),
        null;
    case 13:
        return q1(e, t, n);
    case 4:
        return Rc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Or(t, null, r, n) : je(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : yt(r, i),
        nf(e, t, r, i, n);
    case 7:
        return je(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return je(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return je(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            J(ss, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (_t(o.value, s)) {
                    if (o.children === i.children && !Ze.current) {
                        t = Wt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = Ht(-1, n & -n),
                                        l.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            c.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    xl(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(L(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            xl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            je(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Nr(t, n),
        i = ht(i),
        r = r(i),
        t.flags |= 1,
        je(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = yt(r, t.pendingProps),
        i = yt(r.type, i),
        rf(e, t, r, i, n);
    case 15:
        return W1(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : yt(r, i),
        Uo(e, t),
        t.tag = 1,
        Ge(r) ? (e = !0,
        rs(t)) : e = !1,
        Nr(t, n),
        Z1(t, r, i),
        Cl(t, r, i, n),
        Tl(null, t, r, !0, e, n);
    case 19:
        return X1(e, t, n);
    case 22:
        return Q1(e, t, n)
    }
    throw Error(L(156, t.tag))
}
;
function p0(e, t) {
    return bd(e, t)
}
function j2(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ut(e, t, n, r) {
    return new j2(e,t,n,r)
}
function Uc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function z2(e) {
    if (typeof e == "function")
        return Uc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === oc)
            return 11;
        if (e === sc)
            return 14
    }
    return 2
}
function yn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ut(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Vo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Uc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case fr:
            return Gn(n.children, i, o, t);
        case ic:
            s = 8,
            i |= 8;
            break;
        case Wa:
            return e = ut(12, n, t, i | 2),
            e.elementType = Wa,
            e.lanes = o,
            e;
        case Qa:
            return e = ut(13, n, t, i),
            e.elementType = Qa,
            e.lanes = o,
            e;
        case Ya:
            return e = ut(19, n, t, i),
            e.elementType = Ya,
            e.lanes = o,
            e;
        case _d:
            return Ys(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Sd:
                    s = 10;
                    break e;
                case Cd:
                    s = 9;
                    break e;
                case oc:
                    s = 11;
                    break e;
                case sc:
                    s = 14;
                    break e;
                case nn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(L(130, e == null ? e : typeof e, ""))
        }
    return t = ut(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Gn(e, t, n, r) {
    return e = ut(7, e, r, t),
    e.lanes = n,
    e
}
function Ys(e, t, n, r) {
    return e = ut(22, e, r, t),
    e.elementType = _d,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function La(e, t, n) {
    return e = ut(6, e, null, t),
    e.lanes = n,
    e
}
function Pa(e, t, n) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function U2(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = da(0),
    this.expirationTimes = da(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = da(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function bc(e, t, n, r, i, o, s, a, l) {
    return e = new U2(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = ut(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    _c(o),
    e
}
function b2(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ur,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function m0(e) {
    if (!e)
        return wn;
    e = e._reactInternals;
    e: {
        if (rr(e) !== e || e.tag !== 1)
            throw Error(L(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ge(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(L(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ge(n))
            return m1(e, n, t)
    }
    return t
}
function g0(e, t, n, r, i, o, s, a, l) {
    return e = bc(n, r, !0, e, i, o, s, a, l),
    e.context = m0(null),
    n = e.current,
    r = ze(),
    i = vn(n),
    o = Ht(r, i),
    o.callback = t ?? null,
    mn(n, o, i),
    e.current.lanes = i,
    Qi(e, i, r),
    $e(e, r),
    e
}
function Ks(e, t, n, r) {
    var i = t.current
      , o = ze()
      , s = vn(i);
    return n = m0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ht(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = mn(i, t, s),
    e !== null && (St(e, i, s, o),
    Do(e, i, s)),
    s
}
function gs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function gf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Hc(e, t) {
    gf(e, t),
    (e = e.alternate) && gf(e, t)
}
function H2() {
    return null
}
var v0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Vc(e) {
    this._internalRoot = e
}
qs.prototype.render = Vc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(L(409));
    Ks(e, t, null, null)
}
;
qs.prototype.unmount = Vc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Jn(function() {
            Ks(null, e, null, null)
        }),
        t[Gt] = null
    }
}
;
function qs(e) {
    this._internalRoot = e
}
qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Qd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++)
            ;
        sn.splice(n, 0, e),
        n === 0 && Kd(e)
    }
}
;
function Zc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function vf() {}
function V2(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = gs(s);
                o.call(c)
            }
        }
        var s = g0(t, r, e, 0, null, !1, !1, "", vf);
        return e._reactRootContainer = s,
        e[Gt] = s.current,
        Bi(e.nodeType === 8 ? e.parentNode : e),
        Jn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = gs(l);
            a.call(c)
        }
    }
    var l = bc(e, 0, !1, null, null, !1, !1, "", vf);
    return e._reactRootContainer = l,
    e[Gt] = l.current,
    Bi(e.nodeType === 8 ? e.parentNode : e),
    Jn(function() {
        Ks(t, l, n, r)
    }),
    l
}
function Js(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = gs(s);
                a.call(l)
            }
        }
        Ks(t, s, e, i)
    } else
        s = V2(n, t, e, i, r);
    return gs(s)
}
$d = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = li(t.pendingLanes);
            n !== 0 && (cc(t, n | 1),
            $e(t, pe()),
            !(G & 6) && (jr = pe() + 500,
            _n()))
        }
        break;
    case 13:
        Jn(function() {
            var r = $t(e, 1);
            if (r !== null) {
                var i = ze();
                St(r, e, 1, i)
            }
        }),
        Hc(e, 1)
    }
}
;
uc = function(e) {
    if (e.tag === 13) {
        var t = $t(e, 134217728);
        if (t !== null) {
            var n = ze();
            St(t, e, 134217728, n)
        }
        Hc(e, 134217728)
    }
}
;
Wd = function(e) {
    if (e.tag === 13) {
        var t = vn(e)
          , n = $t(e, t);
        if (n !== null) {
            var r = ze();
            St(n, e, t, r)
        }
        Hc(e, t)
    }
}
;
Qd = function() {
    return Q
}
;
Yd = function(e, t) {
    var n = Q;
    try {
        return Q = e,
        t()
    } finally {
        Q = n
    }
}
;
ol = function(e, t, n) {
    switch (t) {
    case "input":
        if (Xa(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Vs(r);
                    if (!i)
                        throw Error(L(90));
                    Td(r),
                    Xa(r, i)
                }
            }
        }
        break;
    case "textarea":
        kd(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Rr(e, !!n.multiple, t, !1)
    }
}
;
Od = Dc;
Fd = Jn;
var Z2 = {
    usingClientEntryPoint: !1,
    Events: [Ki, mr, Vs, Id, Bd, Dc]
}
  , ti = {
    findFiberByHostInstance: jn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , G2 = {
    bundleType: ti.bundleType,
    version: ti.version,
    rendererPackageName: ti.rendererPackageName,
    rendererConfig: ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ti.findFiberByHostInstance || H2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber)
        try {
            zs = _o.inject(G2),
            Pt = _o
        } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z2;
rt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zc(t))
        throw Error(L(200));
    return b2(e, t, null, n)
}
;
rt.createRoot = function(e, t) {
    if (!Zc(e))
        throw Error(L(299));
    var n = !1
      , r = ""
      , i = v0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = bc(e, 1, !1, null, null, n, !1, r, i),
    e[Gt] = t.current,
    Bi(e.nodeType === 8 ? e.parentNode : e),
    new Vc(t)
}
;
rt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","),
        Error(L(268, e)));
    return e = zd(t),
    e = e === null ? null : e.stateNode,
    e
}
;
rt.flushSync = function(e) {
    return Jn(e)
}
;
rt.hydrate = function(e, t, n) {
    if (!Xs(t))
        throw Error(L(200));
    return Js(null, e, t, !0, n)
}
;
rt.hydrateRoot = function(e, t, n) {
    if (!Zc(e))
        throw Error(L(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = v0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = g0(t, null, e, 1, n ?? null, i, !1, o, s),
    e[Gt] = t.current,
    Bi(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new qs(t)
}
;
rt.render = function(e, t, n) {
    if (!Xs(t))
        throw Error(L(200));
    return Js(null, e, t, !1, n)
}
;
rt.unmountComponentAtNode = function(e) {
    if (!Xs(e))
        throw Error(L(40));
    return e._reactRootContainer ? (Jn(function() {
        Js(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Gt] = null
        })
    }),
    !0) : !1
}
;
rt.unstable_batchedUpdates = Dc;
rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Xs(n))
        throw Error(L(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(L(38));
    return Js(e, t, n, !1, r)
}
;
rt.version = "18.3.1-next-f1338f8080-20240426";
function y0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0)
        } catch (e) {
            console.error(e)
        }
}
y0(),
yd.exports = rt;
var $2 = yd.exports, E0, yf = $2;
E0 = yf.createRoot,
yf.hydrateRoot;
function w0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = w0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Z() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = w0(e)) && (r && (r += " "),
        r += t);
    return r
}
const W2 = "_card_xz719_1"
  , Q2 = "_cardContent_xz719_4"
  , Y2 = "_button_xz719_8"
  , Ro = {
    card: W2,
    cardContent: Q2,
    button: Y2
};
var Ae = (e=>(e.Simple = "Simple",
e.Navigation = "Navigation",
e.Geometric = "Geometric",
e.GeometricExtendedBoolging = "GeometricExtendedBoolging",
e.DropItem = "DropItem",
e.DefaultModal = "DefaultModal",
e))(Ae || {})
  , ue = (e=>(e.Violet = "Violet",
e.VioletCircle = "VioletCircle",
e.VioletCircleWithPurpleBorder = "VioletCircleWithPurpleBorder",
e.VioletBright = "VioletBright",
e.VioletInvert = "VioletInvert",
e.Solid = "Solid",
e.Transparent = "Transparent",
e))(ue || {});
const Bn = 10
  , Je = {
    violet: "#8F00FF",
    controlViolet: "#665595",
    transparent: "transparent",
    white: "#B3BCCF",
    danger: "#E35C5C",
    green: "#52FA77",
    purple: "#BD00FF"
}
  , Ef = e=>e === ue.VioletCircleWithPurpleBorder ? Je.purple : e === ue.Solid ? Je.violet : e === ue.Transparent ? Je.purple : Je.violet
  , $ = ({clasName: e, commands: t, strokeWidth: n=1, stroke: r, fill: i, filter: o, index: s})=>{
    const a = t.join(" ")
      , l = a + (i || "") + (r || "") + (e || "") + (o || "") + (s || "0");
    return f.jsx("path", {
        d: a,
        fill: i,
        stroke: r,
        strokeWidth: n,
        className: e,
        filter: o
    }, l)
}
  , zr = (e,t,n,r,i,o)=>{
    const s = []
      , a = []
      , m = Math.floor(r / 2)
      , p = (o == null ? void 0 : o[0]) ?? m
      , y = (o == null ? void 0 : o[1]) ?? m;
    if (p > 0 && !i ? (a.push(`M ${e + 8 * t}, ${n + 8}`, `V ${n + p - 8}`),
    s.push(...oe(e + 8 * t, n + p / 2, 3), ...oe(e + 8 * t, n + p / 2 - 10, 2), ...oe(e + 8 * t, n + p / 2 + 10, 2))) : (a.push(`M ${e + 8 * t}, ${n + 8}`, `V ${n + r - 8}`),
    s.push(...oe(e + 8 * t, n + r / 2, 3), ...oe(e + 8 * t, n + r / 2 - 10, 2), ...oe(e + 8 * t, n + r / 2 + 10, 2))),
    y > 0) {
        for (let h = 0; h < 8; h++)
            a.push(`M ${e}, ${n + p + 4 * h}`, `L ${e - 4 * t}, ${n + p + 4 * (h + 1)}`);
        i || a.push(`M ${e + 8 * t}, ${n + p + 4}`, `V ${n + p + y - 4}`),
        s.push(`M ${e}, ${n + p + 4 * 8}`, `L ${e - 4 * t}, ${n + p + 4 * 9}`, `V ${n + p + y - 4 - 8}`, `L ${e}, ${n + p + y - 8}`, "Z")
    }
    return [s, a]
}
  , oe = (e,t,n)=>[`M ${e - n}, ${t}`, `L ${e}, ${t - n}`, `L ${e + n}, ${t}`, `L ${e}, ${t + n}`, "Z"]
  , K2 = (e,t,n,r,i)=>{
    const o = [];
    for (let p = 0; p < 8; p++)
        o.push(`M ${Math.floor(e + 38 + 5 + p * 4) + .5}, ${Math.floor(t + 8) + .5}`, `L ${Math.floor(e + 38 + p * 4) + .5}, ${Math.floor(t + 8 + 8 / 2) + .5}`, `L ${Math.floor(e + 38 + 5 + p * 4) + .5}, ${Math.floor(t + 8 + 8) + .5}`, `M ${Math.floor(n - 38 - 5 - p * 4) + .5}, ${Math.floor(t + 8) + .5}`, `L ${Math.floor(n - 38 - p * 4) + .5}, ${Math.floor(t + 8 + 8 / 2) + .5}`, `L ${Math.floor(n - 38 - 5 - p * 4) + .5}, ${Math.floor(t + 8 + 8) + .5}`);
    r.push($({
        commands: o,
        fill: "none",
        stroke: i
    }))
}
  , q2 = (e,{height: t, width: n},r)=>{
    switch (e) {
    case ue.Violet:
        return f.jsxs("linearGradient", {
            x1: "0",
            y1: "0",
            x2: "0",
            y2: t,
            id: `window_fill_${r}`,
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                offset: "0",
                stopColor: "#28003A",
                stopOpacity: .64
            }), f.jsx("stop", {
                offset: "100%",
                stopColor: "#28003A",
                stopOpacity: .64
            })]
        });
    case ue.VioletCircle:
    case ue.VioletCircleWithPurpleBorder:
        return f.jsxs("radialGradient", {
            id: `window_fill_${r}`,
            children: [f.jsx("stop", {
                offset: "0%",
                stopColor: "#370052"
            }), f.jsx("stop", {
                offset: "100%",
                stopColor: "#1C0029"
            })]
        });
    case ue.VioletBright:
        return f.jsxs("linearGradient", {
            x1: "0",
            y1: "0",
            x2: 0,
            y2: t,
            id: `window_fill_${r}`,
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                offset: "0%",
                stopColor: "#49014f"
            }), f.jsx("stop", {
                offset: "100%",
                stopColor: "#1f012d"
            })]
        });
    case ue.VioletInvert:
        return f.jsxs("linearGradient", {
            x1: "0",
            y1: 0,
            x2: "0",
            y2: t,
            id: `window_fill_${r}`,
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                offset: "0",
                stopColor: "#1E0D34"
            }), f.jsx("stop", {
                offset: "100%",
                stopColor: "#44147E"
            })]
        });
    case ue.Solid:
        return f.jsxs("linearGradient", {
            x1: "0",
            y1: 0,
            x2: "0",
            y2: t,
            id: `window_fill_${r}`,
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                offset: "0",
                stopColor: Je.violet
            }), f.jsx("stop", {
                offset: "100%",
                stopColor: Je.violet
            })]
        });
    case ue.Transparent:
        return f.jsxs("linearGradient", {
            id: `window_fill_${r}`,
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                offset: "0%",
                stopColor: "rgba(0, 0, 0, 0)"
            }), f.jsx("stop", {
                offset: "100%",
                stopColor: "rgba(0, 0, 0, 0)"
            })]
        });
    default:
        return null
    }
}
  , X2 = ({sx: e, ex: t, sy: n, ey: r, fillID: i, borderID: o})=>{
    const s = [];
    return s.push($({
        commands: [`M ${e + 12}, ${n}`, `H ${t - 12}`, `L ${t}, ${n + 12}`, `V ${r - 12}`, `L ${t - 12}, ${r}`, `H ${e + 12}`, `L ${e}, ${r - 12}`, `V ${e + 12}`, "Z"],
        fill: i,
        stroke: o
    })),
    s
}
  , J2 = ({sx: e, ex: t, sy: n, ey: r, width: i, height: o, fillID: s, borderID: a})=>{
    const l = []
      , y = e + 6
      , h = t - 6
      , E = n + 5
      , x = r
      , g = a.slice(5, -1)
      , v = [`M ${y + 20}, ${E}`, `H ${h - 20}`, `L ${h}, ${E + 20}`, `V ${x - 20}`, `L ${h - 20}, ${x}`, `H ${y + 20}`, `L ${y}, ${x - 20}`, `V ${y + 20}`, "Z"];
    return l.push($({
        commands: v,
        fill: s,
        stroke: a
    }), f.jsx("defs", {
        children: f.jsx("filter", {
            id: `filter-${g}`,
            width: "150%",
            height: "150%",
            x: "-25%",
            y: "-25%",
            xmlns: "http://www.w3.org/2000/svg",
            children: f.jsx("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "3"
            })
        })
    }, `${a}-navigation-defs`), $({
        commands: v,
        fill: Je.transparent,
        stroke: a,
        strokeWidth: 3,
        filter: `url(#filter-${g})`
    }), $({
        commands: [`M ${e}, ${n + 20 + 6}`, `V ${x - 20}`],
        fill: Je.transparent,
        stroke: a
    }), $({
        commands: [`M ${t}, ${n + 20 + 6}`, `V ${x - 20}`],
        fill: Je.transparent,
        stroke: a
    }), $({
        commands: [`M ${i / 2 - 80 / 2}, ${n}`, `H ${i / 2 + 80 / 2}`],
        fill: Je.transparent,
        stroke: a
    }), $({
        commands: oe(i / 2 - 80 / 2 - 3, n, .5),
        fill: a,
        stroke: a
    }), $({
        commands: oe(i / 2 + 80 / 2 + 3, n, .5),
        fill: a,
        stroke: a
    }), $({
        commands: oe(e, o / 2 + 6 / 2, 2),
        fill: a,
        stroke: a
    }), $({
        commands: oe(e, o / 2 + 6 / 2 - 6, 1),
        fill: a,
        stroke: a
    }), $({
        commands: oe(e, o / 2 + 6 / 2 + 6, 1),
        fill: a,
        stroke: a
    }), $({
        commands: oe(t, o / 2 + 6 / 2, 2),
        fill: a,
        stroke: a
    }), $({
        commands: oe(t, o / 2 + 6 / 2 - 6, 1),
        fill: a,
        stroke: a
    }), $({
        commands: oe(t, o / 2 + 6 / 2 + 6, 1),
        fill: a,
        stroke: a
    })),
    l
}
  , em = (e,{sx: t, sy: n, ex: r, ey: i, fillID: o, borderID: s})=>{
    const a = []
      , m = [`M ${t + 24}, ${n}`, `H ${t + 24 + 64}`, `H ${r - 24}`, `L ${r}, ${n + 24}`, `V ${i - 24}`, `L ${r - 24}, ${i}`, `H ${r - 24 - 64}`, `H ${t + 24}`, `L ${t}, ${i - 24}`, `V ${t + 24}`, "Z"];
    a.push($({
        commands: m,
        fill: o,
        stroke: s,
        index: 0
    }), $({
        commands: m,
        fill: o,
        stroke: s,
        index: 1
    }));
    const p = []
      , y = [];
    p.push(`M ${t}, ${i - 24}`, `V ${i - 24 + 3}`, `L ${t + 24 / 2 - 3}, ${i - 24 / 2}`, `H ${t + 24 / 2}`, "Z", `M ${t + 24 / 2}, ${i - 24 / 2}`, `H ${t + 24 / 2 + 3}`, `L ${t + 24 + 3}, ${i}`, `H ${t + 24}`, "Z", `M ${r}, ${i - 24}`, `V ${i - 24 + 3}`, `L ${r - 24 / 2 + 3}, ${i - 24 / 2}`, `H ${r - 24 / 2}`, "Z", `M ${r - 24 / 2}, ${i - 24 / 2}`, `H ${r - 24 / 2 - 3}`, `L ${r - 24 - 3}, ${i}`, `H ${r - 24}`, "Z");
    const h = Math.min(i - n - 24 * 2, 300)
      , E = _=>{
        if (_ === "left")
            switch (e) {
            case Ae.Geometric:
                return i - h - 24;
            default:
                return n + 24
            }
        else
            return n + 24
    }
      , [x,g] = zr(t, 1, E("left"), h)
      , [v,w] = zr(r, -1, E("right"), h);
    return p.push(...x, ...v),
    y.push(...g, ...w),
    p.length && a.push($({
        commands: p,
        fill: s
    })),
    y.length && a.push($({
        commands: y,
        fill: "none",
        stroke: s
    })),
    a
}
  , tm = ({sx: e, sy: t, ex: n, ey: r, fillID: i, borderID: o, width: s})=>{
    const a = [];
    a.push($({
        commands: [`M ${e + 24}, ${t}`, `H ${e + 24 + 64}`, `L ${e + 24 + 64 + 14}, ${t + 9}`, `H ${n - 24 - 64 - 14}`, `L ${n - 24 - 64}, ${t}`, `H ${n - 24}`, `L ${n}, ${t + 24}`, `V ${r - 24}`, `L ${n - 24}, ${r - 9}`, `H ${n - 24 - 64}`, `L ${n - 24 - 64 - 14}, ${r}`, `H ${e + 24 + 64 + 14}`, `L ${e + 24 + 64}, ${r - 9}`, `H ${e + 24}`, `L ${e}, ${r - 24}`, `V ${e + 24}`, "Z"],
        fill: i,
        stroke: o
    })),
    K2(e, t, n, a, o);
    const p = []
      , y = [];
    p.push(...oe(s / 2, r, 3), ...oe(s / 2 - 10, r, 2), ...oe(s / 2 + 10, r, 2), ...oe(s / 2, t + 9, 3), ...oe(s / 2 - 10, t + 9, 2), ...oe(s / 2 + 10, t + 9, 2));
    const h = Math.min(r - t - 24 * 2, 300)
      , [E,x] = zr(e, 1, t + 24, h, !0, [4, h])
      , [g,v] = zr(n, -1, t + 24, h, !0, [4, h]);
    return p.push(...E, ...g),
    y.push(...x, ...v),
    p.length && a.push($({
        commands: p,
        fill: o
    })),
    y.length && a.push($({
        commands: y,
        fill: "none",
        stroke: o
    })),
    a
}
  , nm = ({borderID: e, fillID: t, sx: n, ex: r, sy: i, ey: o, height: s})=>{
    const a = []
      , d = s * .6
      , m = n + 6
      , p = r - 6
      , y = (h,E)=>[`M ${h}, ${(s - d) / 2}`, `L ${E}, ${(s - d) / 2 - 1.5}`, `V ${d + (s - d) / 2 + 1.5}`, `L ${h}, ${d + (s - d) / 2}`, "Z"];
    return a.push($({
        commands: [`M ${m + 24}, ${i}`, `H ${p - 24}`, `L ${p}, ${i + 24}`, `V ${o - 24}`, `L ${p - 24}, ${o}`, `H ${m + 24}`, `L ${m}, ${o - 24}`, `V ${i + 24}`, "Z"],
        fill: t,
        stroke: e
    }), $({
        commands: y(n, n + 1),
        strokeWidth: 1,
        fill: e
    }), $({
        commands: y(r, r - 1),
        strokeWidth: 1,
        fill: e
    })),
    a
}
  , rm = ({sx: e, sy: t, ex: n, ey: r, fillID: i, borderID: o, width: s})=>{
    const a = []
      , y = [`M ${e + 24}, ${t}`, `H ${e + 24 + 64}`, `L ${e + 24 + 64 + 14}, ${t + 9}`, `H ${n - 24 - 64 - 14}`, `L ${n - 24 - 64}, ${t}`, `H ${n - 24}`, `L ${n}, ${t + 24}`, `V ${r - 24}`, `L ${n - 24}, ${r}`, `H ${n - 24 - 64}`, `L ${n - 24 - 64 - 14}, ${r - 9}`, `H ${e + 24 + 64 + 14}`, `L ${e + 24 + 64}, ${r}`, `H ${e + 24}`, `L ${e}, ${r - 24}`, `V ${e + 24}`, "Z"];
    a.push($({
        commands: y,
        fill: i,
        stroke: o
    }));
    const h = []
      , E = [];
    h.push(`M ${e}, ${r - 24}`, `V ${r - 24 + 3}`, `L ${e + 24 / 2 - 3}, ${r - 24 / 2}`, `H ${e + 24 / 2}`, "Z", `M ${e + 24 / 2}, ${r - 24 / 2}`, `H ${e + 24 / 2 + 3}`, `L ${e + 24 + 3}, ${r}`, `H ${e + 24}`, "Z", `M ${n}, ${r - 24}`, `V ${r - 24 + 3}`, `L ${n - 24 / 2 + 3}, ${r - 24 / 2}`, `H ${n - 24 / 2}`, "Z", `M ${n - 24 / 2}, ${r - 24 / 2}`, `H ${n - 24 / 2 - 3}`, `L ${n - 24 - 3}, ${r}`, `H ${n - 24}`, "Z");
    const x = Math.min(r - t - 24 * 2 - 120, 500)
      , [g,v] = zr(e, 1, r - x - 24, x)
      , [w,_] = zr(n, -1, t + 24, x);
    h.push(...g, ...w),
    E.push(...v, ..._),
    h.length && a.push($({
        commands: h,
        fill: o
    })),
    E.length && a.push($({
        commands: E,
        fill: "none",
        stroke: o
    }));
    const R = Math.min((n - 117 - 24 * 2) / 2, 64)
      , T = Math.min((n - e - R * 2 - 24 * 2 - Bn * 2) * .4, 103)
      , k = 7
      , O = 5
      , N = 1
      , D = Math.min(Math.floor(T / 2 / 5), 8);
    return ((F,I)=>{
        a.push($({
            commands: [`M ${s / 2 - T / 2}, ${F}`, `H ${s / 2 + T / 2}`, `L ${s / 2 + T / 2 - k}, ${I}`, `H ${s / 2 - T / 2 + k}`, "Z"],
            fill: Je.violet
        }));
        for (let Y = 1; Y <= D; Y++) {
            const K = [[k * Y - N, F], [k * Y], [k * (Y - 1), I], [k * (Y - 1) - N]]
              , ot = s / 2 - T / 2
              , P = s / 2 + T / 2;
            a.push($({
                commands: [`M ${ot - K[0][0]}, ${K[0][1]}`, `H ${ot - K[1][0]}`, `L ${ot - K[2][0]}, ${K[2][1]}`, `H ${ot - K[3][0]}`, "Z"],
                fill: Je.violet
            }), $({
                commands: [`M ${P + K[0][0]}, ${K[0][1]}`, `H ${P + K[1][0]}`, `L ${P + K[2][0]}, ${K[2][1]}`, `H ${P + K[3][0]}`, "Z"],
                fill: Je.violet
            }))
        }
    }
    )(r, r - O),
    a.push($({
        commands: [...oe(s / 2, r - 9, 2), ...oe(s / 2 - 8, r - 9, 1), ...oe(s / 2 + 8, r - 9, 1)],
        fill: o,
        stroke: o
    })),
    a
}
  , im = (e,t)=>{
    const n = [];
    switch (e) {
    case Ae.Simple:
        n.push(...X2(t));
        break;
    case Ae.Navigation:
        n.push(...J2(t));
        break;
    case Ae.Geometric:
        n.push(...em(e, t));
        break;
    case Ae.GeometricExtendedBoolging:
        n.push(...tm(t));
        break;
    case Ae.DropItem:
        n.push(...nm(t));
        break;
    case Ae.DefaultModal:
        n.push(...rm(t));
        break
    }
    return n
}
  , om = (e,t,n,r)=>{
    const {width: i, height: o} = t.getBoundingClientRect()
      , s = Math.floor(i) + Bn * 2
      , a = Math.floor(o) + Bn * 2
      , l = Bn + .5
      , c = Bn + .5
      , d = s - (Bn + .5)
      , m = a - (Bn + .5)
      , p = []
      , y = `url(#window_fill_${e})`
      , h = `url(#border_fill_${e})`
      , E = {
        width: s,
        height: a,
        sx: l,
        sy: c,
        ex: d,
        ey: m,
        fillID: y,
        borderID: h
    }
      , x = f.jsxs("linearGradient", {
        x1: "0",
        y1: "0",
        x2: "0",
        y2: a,
        id: `border_fill_${e}`,
        gradientUnits: "userSpaceOnUse",
        children: [f.jsx("stop", {
            offset: "0",
            stopColor: Ef(r)
        }), f.jsx("stop", {
            offset: "100%",
            stopColor: Ef(r)
        })]
    });
    return p.push(f.jsxs("defs", {
        children: [q2(r, E, e), x]
    }, y + h), ...im(n, E)),
    p
}
  , sm = "_svg_s2m71_1"
  , am = "_withShadowBorder_s2m71_10"
  , lm = "_border_s2m71_10"
  , cm = "_Green_s2m71_13"
  , um = "_WeaponExperience_s2m71_17"
  , To = {
    svg: sm,
    withShadowBorder: am,
    border: lm,
    Green: cm,
    WeaponExperience: um
}
  , fm = (e,t)=>{
    const n = M.useRef(null)
      , r = M.useCallback(()=>{
        n.current && (clearTimeout(n.current),
        n.current = null)
    }
    , []);
    return {
        debounced: M.useCallback((...o)=>{
            r(),
            n.current = setTimeout(()=>{
                e.call(null, ...o),
                n.current = null
            }
            , t)
        }
        , [r, t, e]),
        clearTimer: r
    }
}
;
function dm({wrapper: e, className: t, borderType: n, fillType: r, withShadowBorder: i, isDebounced: o=!0}) {
    const [s,a] = M.useState([])
      , l = M.useId().replace(/[^\da-z]+/gim, "")
      , c = M.useCallback(()=>{
        if (e.current) {
            const m = om(l, e.current, n ?? Ae.Simple, r ?? ue.Violet);
            a(m)
        }
    }
    , [n, r, l, e])
      , {debounced: d} = fm(c, 100);
    return M.useEffect(()=>{
        const m = new ResizeObserver(o ? d : c);
        return e.current && (m.observe(e.current),
        c()),
        ()=>{
            m.disconnect()
        }
    }
    , [e, o, d, c]),
    f.jsx("svg", {
        className: Z(To.svg, To[r ?? ue.Violet], To[n ?? Ae.Simple], i && To.withShadowBorder, t),
        children: s
    })
}
const Qt = ({children: e, className: t, classNameContent: n, borderType: r, fillType: i, as: o="div", withShadowBorder: s, isDebounced: a=!0, ...l})=>{
    const c = M.useRef(null)
      , d = dm({
        className: Ro.cardBackground,
        wrapper: c,
        borderType: r,
        fillType: i,
        withShadowBorder: s,
        isDebounced: a
    });
    return M.createElement(o, {
        ...l,
        className: Z(Ro.card, o === "button" && Ro.button, t),
        ref: c
    }, f.jsxs(f.Fragment, {
        children: [d, f.jsx("div", {
            className: Z(Ro.cardContent, n),
            children: e
        })]
    }))
}
  , hm = ()=>f.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    fill: "none",
    viewBox: "0 0 18 18",
    children: [f.jsx("path", {
        fill: "#FFDA57",
        d: "m9 0 8.25 4.5v9L9 18 .75 13.5v-9L9 0Z"
    }), f.jsx("path", {
        fill: "url(#paint0_linear_2119_17850)",
        fillRule: "evenodd",
        d: "M9 1.7 2.25 5.4v7.22L9 16.29l6.75-3.68V5.39L9 1.71Zm8.25 2.8L9 0 .75 4.5v9L9 18l8.25-4.5v-9Z",
        clipRule: "evenodd"
    }), f.jsx("path", {
        fill: "#36261B",
        fillRule: "evenodd",
        d: "m5.33 12 .1-.84h.01a1.65 1.65 0 0 0 .01-.25c0-.2 0-.47-.05-.83a8.97 8.97 0 0 0-.9-2.9l1.52-.61a10.35 10.35 0 0 1 1.05 3.47C7.55 9.54 8.17 9 8.17 6h1.66c0 3 .62 3.55 1.1 4.04l.01-.12c.1-.85.38-2.02 1.04-3.35l1.52.61a8.97 8.97 0 0 0-.95 3.73 3.5 3.5 0 0 0 .01.25l.1.84h-1.02l-.15-.02a3.27 3.27 0 0 1-1.73-.87c-.27-.27-.53-.6-.76-1.02-.23.42-.49.75-.76 1.01a3.27 3.27 0 0 1-1.88.9H5.33Z",
        clipRule: "evenodd"
    }), f.jsx("defs", {
        children: f.jsxs("linearGradient", {
            id: "paint0_linear_2119_17850",
            x1: "9",
            x2: "9",
            y1: "0",
            y2: "18",
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                stopColor: "#FFC861"
            }), f.jsx("stop", {
                offset: "1",
                stopColor: "#8A4602",
                stopOpacity: ".12"
            })]
        })
    })]
})
  , pm = ()=>f.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "13",
    fill: "none",
    viewBox: "0 0 12 13",
    children: [f.jsx("path", {
        stroke: "#FFE4F9",
        strokeLinejoin: "bevel",
        strokeWidth: "1.17",
        d: "M6 12a4.25 4.25 0 1 0 0-8.5A4.25 4.25 0 0 0 6 12Z"
    }), f.jsx("path", {
        stroke: "#FFE4F9",
        strokeLinecap: "square",
        strokeLinejoin: "bevel",
        strokeWidth: "1.17",
        d: "M4.5 1.44h3M6 5.75v2M8 7.75H6M6 2v1"
    })]
})
  , mm = ()=>f.jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: f.jsx("path", {
        d: "M20 26L10 16L20 6",
        stroke: "#BD00FF",
        strokeWidth: "1.5",
        strokeLinecap: "square",
        strokeLinejoin: "bevel"
    })
})
  , gm = ()=>f.jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: f.jsx("path", {
        d: "M20.7213 11.2793C21.9711 12.5295 22.6732 14.2249 22.6732 15.9927C22.6732 17.7604 21.9711 19.4558 20.7213 20.706M14.668 6.66602L8.0013 11.9993H2.66797V19.9993H8.0013L14.668 25.3327V6.66602Z",
        stroke: "#BD00FF",
        strokeWidth: "1.5",
        strokeLinecap: "square",
        strokeLinejoin: "round"
    })
})
  , vm = ()=>f.jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: f.jsx("path", {
        d: "M29.3346 11.9993L21.3346 19.9993M21.3346 11.9993L29.3346 19.9993M14.668 6.66602L8.0013 11.9993H2.66797V19.9993H8.0013L14.668 25.3327V6.66602Z",
        stroke: "#BD00FF",
        strokeWidth: "1.5",
        strokeLinecap: "square",
        strokeLinejoin: "round"
    })
})
  , ym = ({className: e, style: t})=>f.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "66",
    height: "5",
    viewBox: "0 0 66 5",
    fill: "none",
    className: e,
    style: t,
    children: [f.jsx("path", {
        d: "M40.5 -5.24521e-06L25.5 2.38419e-07V4L40.5 3.99999V-5.24521e-06Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M44.5 4L40.5 -4.76837e-07V4L44.5 4Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M25.5 0L21.5 4L25.5 4V0Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M43.5 -1.74846e-07L42.5 2.5828e-07L46.5 4L47.5 4L43.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M46.5 -1.74846e-07L45.5 2.5828e-07L49.5 4L50.5 4L46.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M49.5 -1.74846e-07L48.5 2.5828e-07L52.5 4L53.5 4L49.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M52.5 -1.74846e-07L51.5 2.5828e-07L55.5 4L56.5 4L52.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M55.5 -1.74846e-07L54.5 2.5828e-07L58.5 4L59.5 4L55.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M58.5 -1.74846e-07L57.5 2.5828e-07L61.5 4L62.5 4L58.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M61.5 -1.74846e-07L60.5 2.5828e-07L64.5 4L65.5 4L61.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M25.5 -1.74846e-07L26.5 2.5828e-07L22.5 4L21.5 4L25.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M22.5 -1.74846e-07L23.5 2.5828e-07L19.5 4L18.5 4L22.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M19.5 -1.74846e-07L20.5 2.5828e-07L16.5 4L15.5 4L19.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M16.5 -1.74846e-07L17.5 2.5828e-07L13.5 4L12.5 4L16.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M13.5 -1.74846e-07L14.5 2.5828e-07L10.5 4L9.5 4L13.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M10.5 -1.74846e-07L11.5 2.5828e-07L7.5 4L6.5 4L10.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M7.5 -1.74846e-07L8.5 2.5828e-07L4.5 4L3.5 4L7.5 -1.74846e-07Z",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M4.5 -1.74846e-07L5.5 2.5828e-07L1.5 4L0.5 4L4.5 -1.74846e-07Z",
        fill: "#BD00FF"
    })]
})
  , Em = ({className: e})=>f.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "123",
    height: "67",
    viewBox: "0 0 123 67",
    fill: "none",
    className: e,
    children: [f.jsxs("g", {
        filter: "url(#filter0_f_5381_908)",
        children: [f.jsxs("mask", {
            id: "mask0_5381_908",
            style: {
                maskType: "alpha"
            },
            maskUnits: "userSpaceOnUse",
            x: "4",
            y: "4",
            width: "115",
            height: "59",
            children: [f.jsx("rect", {
                width: "57",
                height: "59",
                transform: "matrix(1 0 0 -1 33 63)",
                fill: "url(#paint0_linear_5381_908)"
            }), f.jsx("path", {
                d: "M33 63H4L33 4V63Z",
                fill: "url(#paint1_linear_5381_908)"
            }), f.jsx("path", {
                d: "M90 63H119L90 4V63Z",
                fill: "url(#paint2_linear_5381_908)"
            })]
        }), f.jsx("g", {
            mask: "url(#mask0_5381_908)",
            children: f.jsx("g", {
                filter: "url(#filter1_b_5381_908)",
                children: f.jsx("path", {
                    d: "M4 63H119L103 4H20L4 63Z",
                    fill: "url(#paint3_linear_5381_908)"
                })
            })
        })]
    }), f.jsxs("defs", {
        children: [f.jsxs("filter", {
            id: "filter0_f_5381_908",
            x: "0",
            y: "0",
            width: "123",
            height: "67",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [f.jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), f.jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), f.jsx("feGaussianBlur", {
                stdDeviation: "2",
                result: "effect1_foregroundBlur_5381_908"
            })]
        }), f.jsxs("filter", {
            id: "filter1_b_5381_908",
            x: "-2",
            y: "-2",
            width: "127",
            height: "71",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [f.jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), f.jsx("feGaussianBlur", {
                in: "BackgroundImageFix",
                stdDeviation: "3"
            }), f.jsx("feComposite", {
                in2: "SourceAlpha",
                operator: "in",
                result: "effect1_backgroundBlur_5381_908"
            }), f.jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_backgroundBlur_5381_908",
                result: "shape"
            })]
        }), f.jsxs("linearGradient", {
            id: "paint0_linear_5381_908",
            x1: "28.5",
            y1: "0",
            x2: "28.5",
            y2: "59",
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                stopColor: "#D9D9D9",
                stopOpacity: "0"
            }), f.jsx("stop", {
                offset: "1",
                stopColor: "#D9D9D9"
            })]
        }), f.jsxs("linearGradient", {
            id: "paint1_linear_5381_908",
            x1: "18.5",
            y1: "63",
            x2: "18.5",
            y2: "4",
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                stopColor: "#D9D9D9",
                stopOpacity: "0"
            }), f.jsx("stop", {
                offset: "1",
                stopColor: "#D9D9D9"
            })]
        }), f.jsxs("linearGradient", {
            id: "paint2_linear_5381_908",
            x1: "104.5",
            y1: "63",
            x2: "104.5",
            y2: "4",
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                stopColor: "#D9D9D9",
                stopOpacity: "0"
            }), f.jsx("stop", {
                offset: "1",
                stopColor: "#D9D9D9"
            })]
        }), f.jsxs("linearGradient", {
            id: "paint3_linear_5381_908",
            x1: "4",
            y1: "30.7227",
            x2: "119",
            y2: "30.7227",
            gradientUnits: "userSpaceOnUse",
            children: [f.jsx("stop", {
                stopColor: "#7A04D7",
                stopOpacity: "0"
            }), f.jsx("stop", {
                offset: "0.515625",
                stopColor: "#74069B"
            }), f.jsx("stop", {
                offset: "1",
                stopColor: "#8F00FF",
                stopOpacity: "0"
            })]
        })]
    })]
})
  , wm = ({className: e})=>f.jsxs("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [f.jsx("path", {
        d: "M0.664062 8.20675C0.664062 4.88806 0.664062 3.22872 1.69505 2.19773C2.72603 1.16675 4.38538 1.16675 7.70406 1.16675H8.29073C11.6094 1.16675 13.2688 1.16675 14.2997 2.19773C15.3307 3.22872 15.3307 4.88806 15.3307 8.20675V8.79341C15.3307 12.1121 15.3307 13.7714 14.2997 14.8024C13.2688 15.8334 11.6094 15.8334 8.29073 15.8334H7.70406C4.38538 15.8334 2.72603 15.8334 1.69505 14.8024C0.664062 13.7714 0.664062 12.1121 0.664062 8.79341V8.20675Z",
        fill: "#0077FF"
    }), f.jsx("path", {
        d: "M8.46951 11.7329C5.12673 11.7329 3.22007 9.44126 3.14062 5.62793H4.81507C4.87007 8.42681 6.10449 9.61236 7.08226 9.85681V5.62793H8.65899V8.0418C9.62454 7.93791 10.6389 6.83793 10.9811 5.62793H12.5578C12.295 7.11905 11.195 8.21903 10.4128 8.67125C11.195 9.03792 12.4479 9.99736 12.9245 11.7329H11.1889C10.8161 10.5718 9.88732 9.67348 8.65899 9.55125V11.7329H8.46951Z",
        fill: "white"
    })]
})
  , xm = ()=>f.jsxs("svg", {
    width: "90",
    height: "8",
    viewBox: "0 0 90 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [f.jsxs("g", {
        filter: "url(#filter0_f_4127_40642)",
        children: [f.jsx("rect", {
            x: "16.2109",
            y: "3.35352",
            width: "59",
            height: "0.707069",
            fill: "#E323FC"
        }), f.jsx("rect", {
            x: "85.5859",
            y: "3.70703",
            width: "1",
            height: "1",
            transform: "rotate(-45 85.5859 3.70703)",
            fill: "#E323FC"
        }), f.jsx("rect", {
            x: "3.71094",
            y: "3",
            width: "1",
            height: "1",
            transform: "rotate(45 3.71094 3)",
            fill: "#E323FC"
        }), f.jsx("path", {
            d: "M83 3.70703L7 3.70703",
            stroke: "#E323FC",
            strokeWidth: "0.5"
        })]
    }), f.jsx("rect", {
        x: "16.2109",
        y: "3.35352",
        width: "59",
        height: "0.707069",
        fill: "#BD00FF"
    }), f.jsx("rect", {
        x: "85.5859",
        y: "3.70703",
        width: "1",
        height: "1",
        transform: "rotate(-45 85.5859 3.70703)",
        fill: "#BD00FF"
    }), f.jsx("rect", {
        x: "3.71094",
        y: "3",
        width: "1",
        height: "1",
        transform: "rotate(45 3.71094 3)",
        fill: "#BD00FF"
    }), f.jsx("path", {
        d: "M83 3.70703L7 3.70703",
        stroke: "#BD00FF",
        strokeWidth: "0.5"
    }), f.jsx("defs", {
        children: f.jsxs("filter", {
            id: "filter0_f_4127_40642",
            x: "0",
            y: "0",
            width: "90",
            height: "7.41431",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [f.jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), f.jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), f.jsx("feGaussianBlur", {
                stdDeviation: "1.5",
                result: "effect1_foregroundBlur_4127_40642"
            })]
        })
    })]
})
  , Sm = ()=>f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    children: f.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.50238 12.6341L3.5 8.50816L2 8.50903L2.00238 12.6344L2.00238 12.6346L2.00222 13.7479L2.00211 14.498H2.75222H7.9956V12.998H3.50233L3.50238 12.6346L3.50238 12.6341ZM3.50605 4.49805V4L10.0015 4V2.5H2.75605H2.00605L2.00605 3.25L2.00605 4.49805H3.50605ZM5.52595 9.02844L4.99561 8.49811L5.52594 7.96777L7.52597 5.96771L8.58664 7.02837L8.11695 7.49806L8.36724 7.74836L13.9955 7.74805L13.9955 9.24805L8.36669 9.24836L8.11697 9.49807L8.58662 9.9677L7.52598 11.0284L5.52595 9.02844Z",
        fill: "currentColor"
    })
})
  , Cm = ()=>f.jsxs("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [f.jsx("path", {
        d: "M33 19V17H31L25 24M15 19V17H17L23 24M15 29V31H17L17.8571 30M33 29V31H31L25 24M25 24L24 24L23 24M23 24L19.2987 28.3181",
        stroke: "white",
        strokeWidth: "2"
    }), f.jsx("path", {
        d: "M17 7.5L24 0.5L31 7.5",
        stroke: "white",
        strokeWidth: "0.6"
    }), f.jsx("path", {
        d: "M40.5 17L47.5 24L40.5 31",
        stroke: "white",
        strokeWidth: "0.6"
    }), f.jsx("path", {
        d: "M31 40.5L24 47.5L17 40.5",
        stroke: "white",
        strokeWidth: "0.6"
    }), f.jsx("path", {
        d: "M7.5 31L0.500002 24L7.5 17",
        stroke: "white",
        strokeWidth: "0.6"
    })]
})
  , _m = ()=>f.jsxs("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [f.jsx("path", {
        d: "M3 8.83333L3 6.5L10 6.5L10 11.5L10 13.5L3 13.5L3.00014 12.8263L3 11.1667",
        stroke: "white",
        strokeWidth: "1.5"
    }), f.jsx("path", {
        d: "M13 5.5L13 3.5L6 3.5M10 10.5L13 10.5L12.9998 8.16667",
        stroke: "white",
        strokeWidth: "1.5"
    })]
})
  , Rm = ()=>f.jsxs("svg", {
    width: "48",
    height: "31",
    viewBox: "0 0 48 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [f.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24.5734 13.9126C24.5734 13.4126 24.6567 13.49 25.0176 13.1308C25.434 12.7153 25.4895 12.7505 25.5728 11.87C25.7116 10.56 26.5791 10.7431 27.0441 11.6517C27.1829 11.9123 26.9539 12.356 27.3217 12.4335C27.7659 12.5321 28.0643 12.6026 27.9741 13.0886C27.8353 13.7999 26.7943 14.4409 28.2864 14.5325C28.9943 14.5677 28.5085 13.9549 28.7514 13.6872C29.0498 13.3703 29.494 13.7999 29.3899 14.0465C29.0151 14.9058 29.6536 15.6171 30.5003 15.0959C31.1388 14.7015 30.4795 14.6804 30.5697 14.1803C30.7085 13.4055 31.2429 12.68 31.8259 13.5605C32.6032 14.7226 32.8322 11.9686 33.4499 13.2576C33.5887 13.5393 33.5193 14.0112 33.6581 14.5184C33.9912 15.6594 35.2682 15.6031 35.3515 14.4409C35.5805 14.2155 35.4417 14.293 35.5111 14.0253C35.6152 13.6309 36.0802 14.3775 36.3231 13.6732C36.7673 12.3208 36.2329 12.8068 35.407 12.025C35.2335 11.856 35.3723 11.5953 35.4556 11.4404C35.7193 10.9896 35.8026 10.2994 35.525 10.243C35.2821 10.1867 35.1086 10.3134 35.1294 10.0176C35.1641 9.67953 35.2682 9.47527 34.9559 9.44005C34.7477 9.41892 34.5395 9.41892 34.4007 9.56684C34.2966 9.70066 34.2619 9.72179 34.1439 9.53162C33.9704 9.2851 33.9704 8.89771 34.1439 8.72867C34.2966 8.57371 34.5742 8.61597 34.7685 8.70754C34.9767 8.82023 34.595 8.98927 35.2543 9.02449C35.754 9.04562 36.1635 8.68641 35.7332 8.36945C35.407 8.10885 35.8859 7.87641 35.3723 7.90459C34.9906 7.90459 34.7824 7.96093 34.7824 7.52424C34.8032 6.83398 35.2821 7.60172 35.1086 6.89033C35.0392 6.57338 34.9212 6.19303 34.595 6.36207C34.4215 6.46068 34.248 6.53112 34.1092 6.71425C33.9565 6.91146 33.8177 6.92555 33.6234 6.58746C33.436 6.27051 33.4152 6.17894 33.8177 5.88312C34.1231 5.6366 34.1647 5.19991 33.9565 5.22104C33.5193 5.24217 32.4991 5.33373 32.4644 5.03791C32.4297 4.73504 32.3117 4.64348 31.8953 4.8266C31.7773 4.88295 31.6177 4.9393 31.5899 4.8266C31.4997 4.62234 31.5344 4.62234 31.2776 4.54487C30.7085 4.36174 30.7224 4.24904 31.3817 3.79826C31.5205 3.7067 31.7773 3.51653 31.4303 3.46018C31.2776 3.43905 31.0694 3.42496 31.0139 3.27705C30.9306 3.0094 30.8959 2.41071 30.5836 2.31914C29.9451 2.12897 30.1186 1.30489 29.9798 1.47393C29.8618 1.60775 29.959 1.86836 29.7369 1.54436C29.6675 1.43871 29.5634 1.32602 29.494 1.41758C29.2858 1.67819 29.3205 1.73454 29.0984 1.48802C28.8208 1.20628 28.1823 0.537153 28.0088 0.713238C27.8353 0.875237 27.7659 1.00906 27.6132 0.81889C27.2315 0.36811 27.3703 1.04428 26.8845 0.762542C26.7457 0.692108 26.593 0.5935 26.5375 0.706195C26.4195 0.896368 26.3848 1.00906 26.246 0.81889C26.1419 0.670978 26.1627 0.184981 25.9545 0.276545C25.6422 0.424458 25.1564 0.628717 25.3507 0.896368C25.8643 1.41758 25.1425 1.10063 24.8996 1.30489C24.5526 1.60775 24.622 1.26967 24.4346 0.628717C24.3444 0.34698 24.3305 0.0159384 24.1362 0.241328C24.039 0.36811 23.9835 0.424458 23.7753 0.424458C23.3242 0.445588 23.5324 0.57237 23.2062 0.61463C22.9147 0.628717 22.88 0.875237 22.7898 0.516022C22.4775 -0.660231 21.9084 0.558283 21.7349 0.445588C21.4781 0.297676 21.1103 1.04428 20.7216 0.501935C20.5828 0.311763 20.3538 0.107503 20.2497 0.445588C20.1664 0.762542 20.2705 0.987932 19.8749 0.966802C19.5418 0.952715 19.2503 1.49506 19.2642 1.81201L19.285 2.31914C19.2989 2.88262 18.2995 1.84723 17.7096 2.46705C17.196 3.03053 17.5222 2.72766 16.6547 2.99531C16.3771 3.08688 16.155 3.31227 16.3285 3.48131C16.4673 3.60809 16.5228 3.74192 16.2938 3.87574C16.0162 4.04478 15.5859 4.36174 15.8635 4.58008C16.0717 4.75617 16.2591 4.88295 15.9468 5.14356C15.6692 5.39008 15.3777 5.61547 15.0168 5.39008C14.6559 5.16469 13.9064 5.35486 13.9758 5.78451C14.0868 6.51703 13.8578 6.3832 13.2887 6.58746C12.4906 6.92555 12.5461 7.97502 12.9625 8.61597C13.1499 8.9118 13.1707 9.15832 12.56 9.13719C11.6994 9.11606 11.2344 9.10197 11.6994 10.4332C11.7827 10.6727 11.8521 10.8769 11.748 11.1587C11.3524 12.2152 12.4281 11.9686 12.4073 12.3067C12.4073 12.7153 12.3379 12.68 12.7335 12.8702C13.4969 13.2435 13.7745 13.8774 14.4963 13.6872C16.4881 13.2224 15.2736 15.5256 16.1411 14.8142C17.2307 13.9126 17.0433 15.4129 17.5708 14.8705C18.2856 14.1592 18.2162 15.0396 19.1254 14.8353C21.0825 14.4057 17.8345 12.5814 20.2011 12.5321C20.7008 12.511 20.6661 12.9054 21.0478 12.5673C22.4289 11.3277 23.0882 12.8491 23.2756 14.5888C23.4144 15.8425 23.227 17.2301 23.2409 17.8147C23.2617 18.3148 23.0882 18.2232 22.8453 18.6599C22.4775 19.2727 21.8737 20.1742 22.8106 19.8009C23.4144 19.5544 23.8516 20.0616 23.5324 20.2869C23.1715 20.5687 22.8939 20.2869 22.6024 20.4137C22.186 20.6039 21.3254 21.2589 21.721 20.7166C22.0819 20.2236 22.3456 19.9418 21.6516 20.3222C20.9317 20.7251 20.121 20.9314 19.2989 20.9209C18.6951 20.942 17.9386 20.9209 17.4181 20.9631C17.0919 20.9772 16.7449 21.1251 16.7588 21.2237C16.7588 21.2589 17.3487 21.435 17.4389 21.4632C18.2023 21.7449 18.6604 21.5055 19.5626 21.7449C20.0484 21.8788 20.4232 22.1394 20.909 21.9351C22.5816 21.2801 19.9235 22.9846 21.374 22.4C21.6655 22.2732 21.9986 22.1394 22.2207 22.1605C22.6857 22.1957 22.6371 22.7381 23.4144 22.3436C23.9835 22.0619 24.2958 21.597 25.087 21.4984C25.3854 21.4632 26.593 21.5195 26.7318 21.7661C26.8706 22.0126 27.058 22.3648 27.0441 22.0478C27.0233 21.7661 26.9886 21.4632 27.287 21.7308C27.4536 21.8717 27.634 22.083 27.8561 22.0267C28.2031 21.9562 28.099 21.6322 28.4391 21.597C28.7375 21.5618 29.0984 21.5407 29.3413 21.4491C29.5148 21.3787 29.723 21.2942 29.8757 21.3364C30.2574 21.428 30.535 21.6886 30.7571 21.4632C30.9306 21.2942 31.1041 21.2026 31.347 21.428C31.465 21.5407 31.6385 21.7097 31.6732 21.6393C31.7565 21.4843 31.7218 21.4984 31.9161 21.4984C32.3811 21.4984 32.8461 21.4984 33.3111 21.4843C33.9357 21.4843 33.6581 21.2942 34.0953 21.4843C34.1439 21.4632 34.3729 21.5055 34.4215 21.4843C34.595 21.428 34.4354 21.4491 34.3174 21.3153C34.2966 21.2942 34.0398 21.2589 34.0051 21.2237C33.6378 21.1303 33.2567 21.1065 32.8808 21.1533C32.6379 21.2026 32.4505 21.2026 32.2562 20.7307C32.1382 20.4349 31.9508 20.0968 31.6038 20.3222C31.465 20.4137 31.4511 20.4137 31.2082 20.301C30.8057 20.0827 31.0139 20.2658 30.6877 20.301C30.535 20.3222 30.3962 20.2447 30.2227 20.1742C29.7022 19.9489 29.8271 20.4912 29.5634 20.7518C29.3066 20.8856 28.7167 20.9983 28.6612 20.5123C28.6334 20.1954 28.7306 20.2447 28.3003 20.1602C27.7811 20.0239 27.2391 20.0023 26.711 20.0968C25.663 20.4912 24.6289 20.139 24.6081 18.6388C24.6081 18.0049 24.5734 16.3356 24.5734 15.6946C24.5526 15.0959 24.5734 14.4972 24.5734 13.9126ZM27.1621 20.5335L28.217 20.8856C28.4391 20.9209 28.3558 21.0335 28.1823 21.0969C28.099 21.111 27.9255 21.111 27.7867 21.1251C27.6743 21.1241 27.565 21.0872 27.4744 21.0195C27.3323 20.9226 27.1812 20.8401 27.0233 20.7729C26.7318 20.6039 26.8498 20.4208 27.1621 20.5264V20.5335ZM23.4977 11.6517C23.3103 12.0039 23.3103 12.0602 23.463 12.2645C23.6573 12.511 23.6018 12.8984 23.2895 12.4899C23.1923 12.3419 22.9425 12.1166 22.8245 11.9123C22.6718 11.6658 22.7204 11.6306 22.88 11.5601C23.0327 11.4826 23.0674 11.3277 23.1715 11.1798C23.3936 10.7713 23.8447 10.9544 23.4977 11.6517ZM24.7122 10.9333C25.1425 10.243 25.316 10.729 25.316 11.3136C25.2952 11.9264 25.3299 11.8912 25.0523 12.2293C24.8163 12.5321 24.622 12.3772 24.4693 12.1588C24.3097 11.9264 24.2056 11.6869 24.3097 11.4826C24.3652 11.384 24.6081 11.0882 24.7122 10.9333ZM33.2764 10.4332C33.3666 10.5036 33.3458 10.5247 33.2764 10.6022C33.2278 10.6586 33.2486 10.7149 33.2972 10.7713C33.4013 10.9121 33.3458 11.1587 33.2972 11.384C33.1931 11.8137 32.7281 11.4052 32.4644 11.1446C32.1868 10.8417 32.1868 10.9333 32.159 10.6163C32.1382 10.3768 32.3325 10.4473 32.506 10.6163C32.6934 10.8276 32.6448 10.898 32.7628 10.6022C32.8461 10.4332 33.1098 10.2994 33.2764 10.4332ZM28.3003 9.44005C27.9255 9.22875 27.8353 9.36258 27.523 9.44005C27.2315 9.51049 27.2176 9.30623 27.287 9.05971C27.3703 8.70754 27.4952 8.59484 27.7034 8.48215C28.0643 8.27084 28.0504 8.27084 28.0643 8.57371C28.0782 9.04562 28.3905 9.02449 28.564 8.85545C28.8069 8.64415 28.7861 8.59484 28.8902 8.29197C29.0984 7.71441 29.6883 7.90459 29.4801 8.29197C29.3413 8.55962 29.376 8.57371 29.5148 8.72867C29.841 9.04562 29.7022 8.5385 30.0978 8.9118C30.3962 9.1724 30.0284 9.26397 29.8063 9.36258C29.5981 9.45414 29.5981 9.47527 29.5495 9.62318C29.4801 9.81336 29.4246 9.75701 29.3066 9.66544C29.1678 9.55275 29.0984 9.66544 28.9943 9.80631C28.8763 9.9824 28.6126 9.73588 28.4252 9.55275C28.3909 9.50762 28.3485 9.46939 28.3003 9.44005ZM27.1135 5.80564C27.287 5.98877 27.5438 5.98877 27.7659 5.98877C27.9255 5.98877 27.9602 5.97468 27.8006 6.10147C27.6271 6.24938 27.8006 6.40433 27.9741 6.51703C28.335 6.74242 28.2031 6.96781 28.0643 7.29885C27.87 7.74963 27.7659 7.74963 27.3911 7.73554C26.94 7.73554 26.9886 7.69328 26.9053 7.29885C26.8012 6.85511 26.593 7.03824 26.593 6.59451C26.593 6.27051 26.7318 5.39712 27.1135 5.80564ZM16.1411 11.2573C16.3146 11.5179 16.2799 11.4615 16.2452 11.7785C16.2244 12.0602 16.2452 12.3419 16.0509 12.1729C15.9284 12.0616 15.819 11.9363 15.7247 11.7996C15.5859 11.5531 15.572 11.4263 15.69 11.2573C15.8774 11.0319 15.9815 11.0671 16.1411 11.2573ZM15.8427 8.96814C15.8427 9.32032 15.8427 9.32032 15.69 9.47527C15.572 9.58797 15.5026 9.64431 15.3777 9.70066C15.2389 9.7711 15.225 9.72179 15.1695 9.58797C15.1001 9.39779 15.1001 9.24988 15.0862 9.08084C15.0862 8.93293 15.0862 8.93293 15.1695 8.86954C15.2389 8.82023 15.225 8.70754 15.225 8.61597C15.2042 8.48215 15.2389 8.46102 15.2944 8.39058C15.4124 8.27789 15.5026 8.34832 15.5859 8.4258C15.8774 8.72867 15.8427 8.49623 15.8427 8.96814ZM20.9437 8.89771C20.5828 9.22875 20.2497 9.10197 20.1317 8.65119C20.0068 8.10885 20.4232 8.34832 20.5273 8.01728C20.7216 7.46789 19.9929 7.22842 20.9784 7.2425C21.4434 7.26363 21.8112 7.60172 21.4781 8.08772C21.1311 8.59484 21.839 8.5385 21.5128 8.87658C21.2213 9.21466 21.4295 8.44693 20.9437 8.89771ZM18.7437 4.13635C18.6049 3.79826 18.827 3.76305 18.5841 3.48131L18.5355 3.42496C18.4105 3.10801 18.3411 3.08688 18.5841 3.10801C19.0213 3.14322 18.8825 3.27705 19.0352 3.48131C19.2087 3.68557 19.1878 3.4954 19.3614 3.77713C19.5349 4.10113 19.4655 4.21383 19.2434 4.21383C18.8131 4.17156 18.9519 4.65756 18.7437 4.13635Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M2.17162 30.9001L0.304688 26.5312H1.90671L3.42675 30.2198H2.47436L4.03854 26.5312H5.50181L3.63488 30.9001H2.17162Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M7.96615 30.9999C7.60874 30.9999 7.27656 30.9438 6.96961 30.8314C6.66687 30.7191 6.40407 30.561 6.18121 30.3571C5.95836 30.149 5.78386 29.9056 5.65772 29.6269C5.53578 29.3481 5.47481 29.0443 5.47481 28.7156C5.47481 28.3828 5.53578 28.079 5.65772 27.8044C5.78386 27.5256 5.95836 27.2843 6.18121 27.0804C6.40407 26.8724 6.66687 26.7122 6.96961 26.5998C7.27656 26.4875 7.60874 26.4313 7.96615 26.4313C8.32776 26.4313 8.65994 26.4875 8.96268 26.5998C9.26543 26.7122 9.52823 26.8724 9.75108 27.0804C9.97394 27.2843 10.1463 27.5256 10.2683 27.8044C10.3944 28.079 10.4575 28.3828 10.4575 28.7156C10.4575 29.0443 10.3944 29.3481 10.2683 29.6269C10.1463 29.9056 9.97394 30.149 9.75108 30.3571C9.52823 30.561 9.26543 30.7191 8.96268 30.8314C8.65994 30.9438 8.32776 30.9999 7.96615 30.9999ZM7.96615 29.8078C8.10491 29.8078 8.23315 29.7829 8.35089 29.733C8.47283 29.683 8.57795 29.6123 8.66625 29.5208C8.75875 29.4251 8.83023 29.3106 8.88069 29.1775C8.93115 29.0402 8.95638 28.8862 8.95638 28.7156C8.95638 28.545 8.93115 28.3932 8.88069 28.26C8.83023 28.1227 8.75875 28.0083 8.66625 27.9168C8.57795 27.8211 8.47283 27.7482 8.35089 27.6983C8.23315 27.6484 8.10491 27.6234 7.96615 27.6234C7.82739 27.6234 7.69704 27.6484 7.5751 27.6983C7.45737 27.7482 7.35225 27.8211 7.25974 27.9168C7.17144 28.0083 7.10206 28.1227 7.05161 28.26C7.00115 28.3932 6.97592 28.545 6.97592 28.7156C6.97592 28.8862 7.00115 29.0402 7.05161 29.1775C7.10206 29.3106 7.17144 29.4251 7.25974 29.5208C7.35225 29.6123 7.45737 29.683 7.5751 29.733C7.69704 29.7829 7.82739 29.8078 7.96615 29.8078Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M10.8723 30.9001V29.9951L13.3321 27.1616L13.515 27.6733H10.9354V26.5312H14.8269V27.4362L12.3671 30.2697L12.1842 29.7579H14.9279V30.9001H10.8723Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M16.5395 30.9001L15.1267 26.5312H16.6593L17.8009 30.2198H17.0315L18.2424 26.5312H19.6111L20.7401 30.2198H20.0021L21.1942 26.5312H22.607L21.1942 30.9001H19.5985L18.6776 27.8793H19.1065L18.1352 30.9001H16.5395Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M25.2538 30.9999C24.8964 30.9999 24.5642 30.9438 24.2572 30.8314C23.9545 30.7191 23.6917 30.561 23.4688 30.3571C23.246 30.149 23.0715 29.9056 22.9453 29.6269C22.8234 29.3481 22.7624 29.0443 22.7624 28.7156C22.7624 28.3828 22.8234 28.079 22.9453 27.8044C23.0715 27.5256 23.246 27.2843 23.4688 27.0804C23.6917 26.8724 23.9545 26.7122 24.2572 26.5998C24.5642 26.4875 24.8964 26.4313 25.2538 26.4313C25.6154 26.4313 25.9476 26.4875 26.2503 26.5998C26.553 26.7122 26.8158 26.8724 27.0387 27.0804C27.2615 27.2843 27.4339 27.5256 27.5559 27.8044C27.682 28.079 27.7451 28.3828 27.7451 28.7156C27.7451 29.0443 27.682 29.3481 27.5559 29.6269C27.4339 29.9056 27.2615 30.149 27.0387 30.3571C26.8158 30.561 26.553 30.7191 26.2503 30.8314C25.9476 30.9438 25.6154 30.9999 25.2538 30.9999ZM25.2538 29.8078C25.3925 29.8078 25.5208 29.7829 25.6385 29.733C25.7604 29.683 25.8656 29.6123 25.9539 29.5208C26.0464 29.4251 26.1178 29.3106 26.1683 29.1775C26.2188 29.0402 26.244 28.8862 26.244 28.7156C26.244 28.545 26.2188 28.3932 26.1683 28.26C26.1178 28.1227 26.0464 28.0083 25.9539 27.9168C25.8656 27.8211 25.7604 27.7482 25.6385 27.6983C25.5208 27.6484 25.3925 27.6234 25.2538 27.6234C25.115 27.6234 24.9847 27.6484 24.8627 27.6983C24.745 27.7482 24.6399 27.8211 24.5474 27.9168C24.4591 28.0083 24.3897 28.1227 24.3392 28.26C24.2888 28.3932 24.2635 28.545 24.2635 28.7156C24.2635 28.8862 24.2888 29.0402 24.3392 29.1775C24.3897 29.3106 24.4591 29.4251 24.5474 29.5208C24.6399 29.6123 24.745 29.683 24.8627 29.733C24.9847 29.7829 25.115 29.8078 25.2538 29.8078Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M30.6632 30.9999C30.3058 30.9999 29.9736 30.9438 29.6666 30.8314C29.3639 30.7191 29.1011 30.561 28.8782 30.3571C28.6554 30.149 28.4809 29.9056 28.3547 29.6269C28.2328 29.3481 28.1718 29.0443 28.1718 28.7156C28.1718 28.3828 28.2328 28.079 28.3547 27.8044C28.4809 27.5256 28.6554 27.2843 28.8782 27.0804C29.1011 26.8724 29.3639 26.7122 29.6666 26.5998C29.9736 26.4875 30.3058 26.4313 30.6632 26.4313C31.0248 26.4313 31.357 26.4875 31.6597 26.5998C31.9624 26.7122 32.2252 26.8724 32.4481 27.0804C32.6709 27.2843 32.8433 27.5256 32.9653 27.8044C33.0914 28.079 33.1545 28.3828 33.1545 28.7156C33.1545 29.0443 33.0914 29.3481 32.9653 29.6269C32.8433 29.9056 32.6709 30.149 32.4481 30.3571C32.2252 30.561 31.9624 30.7191 31.6597 30.8314C31.357 30.9438 31.0248 30.9999 30.6632 30.9999ZM30.6632 29.8078C30.8019 29.8078 30.9302 29.7829 31.0479 29.733C31.1698 29.683 31.275 29.6123 31.3633 29.5208C31.4558 29.4251 31.5272 29.3106 31.5777 29.1775C31.6282 29.0402 31.6534 28.8862 31.6534 28.7156C31.6534 28.545 31.6282 28.3932 31.5777 28.26C31.5272 28.1227 31.4558 28.0083 31.3633 27.9168C31.275 27.8211 31.1698 27.7482 31.0479 27.6983C30.9302 27.6484 30.8019 27.6234 30.6632 27.6234C30.5244 27.6234 30.3941 27.6484 30.2721 27.6983C30.1544 27.7482 30.0493 27.8211 29.9568 27.9168C29.8685 28.0083 29.7991 28.1227 29.7486 28.26C29.6982 28.3932 29.6729 28.545 29.6729 28.7156C29.6729 28.8862 29.6982 29.0402 29.7486 29.1775C29.7991 29.3106 29.8685 29.4251 29.9568 29.5208C30.0493 29.6123 30.1544 29.683 30.2721 29.733C30.3941 29.7829 30.5244 29.8078 30.6632 29.8078Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M33.7578 30.9001V26.5312H35.9338C36.4258 26.5312 36.8589 26.6207 37.2331 26.7996C37.6073 26.9743 37.8995 27.224 38.1098 27.5485C38.32 27.8731 38.4251 28.26 38.4251 28.7094C38.4251 29.1629 38.32 29.554 38.1098 29.8827C37.8995 30.2073 37.6073 30.459 37.2331 30.6379C36.8589 30.8127 36.4258 30.9001 35.9338 30.9001H33.7578ZM35.2463 29.7517H35.8707C36.081 29.7517 36.2639 29.7122 36.4195 29.6331C36.5792 29.554 36.7033 29.4375 36.7916 29.2836C36.8799 29.1255 36.924 28.9341 36.924 28.7094C36.924 28.4889 36.8799 28.3016 36.7916 28.1477C36.7033 27.9937 36.5792 27.8772 36.4195 27.7982C36.2639 27.7191 36.081 27.6796 35.8707 27.6796H35.2463V29.7517Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M40.3941 28.1539H42.3619V29.2149H40.3941V28.1539ZM40.495 29.7891H42.7025V30.9001H39.0317V26.5312H42.6205V27.6421H40.495V29.7891Z",
        fill: "white"
    }), f.jsx("path", {
        d: "M43.3386 30.9001V26.5312H44.5622L46.8075 29.19H46.2399V26.5312H47.6906V30.9001H46.467L44.2216 28.2413H44.7892V30.9001H43.3386Z",
        fill: "white"
    })]
})
  , Me = {
    WoodCoin: hm,
    StopWatch: pm,
    ChevronLeft: mm,
    SoundEnabled: gm,
    SoundDisabled: vm,
    NavigationMark: ym,
    NavigationHighlight: Em,
    VK: wm,
    HorizontalRule: xm,
    Logout: Sm,
    Close: Cm,
    Share: _m,
    Logo: Rm
}
  , jl = {
    "header-xl": "_header-xl_1bvln_1",
    "header-l": "_header-l_1bvln_16",
    "header-m": "_header-m_1bvln_30",
    "header-ms": "_header-ms_1bvln_47",
    "header-s": "_header-s_1bvln_62",
    "header-xs": "_header-xs_1bvln_76",
    "header-xxs-mono": "_header-xxs-mono_1bvln_88",
    "text-xl": "_text-xl_1bvln_101",
    "text-l": "_text-l_1bvln_111",
    "text-m": "_text-m_1bvln_123",
    "text-s-mono": "_text-s-mono_1bvln_135",
    "control-xl": "_control-xl_1bvln_142",
    "control-l": "_control-l_1bvln_155",
    "control-m-upper": "_control-m-upper_1bvln_163",
    "control-s": "_control-s_1bvln_170",
    "control-xs-upper": "_control-xs-upper_1bvln_181",
    "control-xxs": "_control-xxs_1bvln_189",
    "control-xxs-upper": "_control-xxs-upper_1bvln_196",
    "display-l": "_display-l_1bvln_205",
    "display-xl": "_display-xl_1bvln_221",
    "display-xs": "_display-xs_1bvln_236"
}
  , V = M.forwardRef(({as: e="p", design: t="text-m", raw: n, className: r, children: i, ...o},s)=>M.createElement(e, {
    className: Z(jl.text, jl[t], r),
    ...o,
    ref: s,
    ...n && typeof i == "string" ? {
        dangerouslySetInnerHTML: {
            __html: i
        }
    } : {}
}, n ? null : i))
  , Ct = jl
  , Tm = "/tggame/assets/box-B-IFTjW3.png"
  , Am = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAAXNSR0IArs4c6QAAAUpQTFRFR3BM+/UB6M0B69QC+O4D2awB9eYF7dMB8tcA7uEA6MsB6MsB6MwB8N0B8N8B3bUB+/UB3bUB3rUB+vQB37cB+/YB+vMB+vQB+vQB4LsB57Qf5LAE67kz5rIT4q0B7LxB9c199c+G88p278FP67o79Mps8sdu6Lcp8MFa+NBd9ctN+dJh6LMp78Mt+9mR88li8sVe8sVn7r1L/d2d99F7985Y7r9H8MRU9MpE+dSF9s1T1ZQi46op/uGl+d9A7b8c9c1y78Fj2psn5rAx8ckw+NJK570C8cVB0YsJ/fE+1psB+NdC+eQ15bcDzo0l+dNr1JMD89Ij67kY4agE36Ml/elIx4Qh2qIC8dsF3qM23bMB6LNDwG8H+txS+usy67lI46s8wHkXtF8D/fsB/vk8+9lk6MYG69ADy4AI9t0ro0cAuWgHq1MBmjQAIUlJ+AAAABp0Uk5TAP0pQ/79/hAGAV/E4sTiqebIhKPfzoZptvFDQqX1AAAMqUlEQVR42u3a61fa6BYG8PECgnPO2Pu0JYgKyjWClEtUhnjhfhEIVbyBimhB6P//9Tx7vwlIhc5Mx651PsyTdBUSkl/2+25iV+Mv/+bf/INYLQsLFutPZyxzr9++ePH29eLCz61m7v2tnreLlp/HzL6euZ1pNe/umqWZ29v3c5afwyy8e3F7a777g3Nnhvl61vr8zsLvYObvPgHhfGLq3XNPleX3t2CazAyp4vzt7YvfF561B97O3M4nNwUwyiZTz9cVc9QDpe1Pn/6gRQ+/+bTdm7+defs8XTH7bmZmpnT3icKWsYrc9bD7/exztNrMjPluU2ewjl6Il5t3pzMz869n/2mrgWlubn6CNMzm2Bu8TZtnZl78gwa0LL4FU9zeRIbWtqJmMqqyOXKQ7SKoH21Ay9x7DEkvojNYcdbtbL2aQ6rLoHhBSKoQ9SO3Jcvs63kwlW1ElxCfvZo7uL66OMt1q/Yd1g1p29/DAe/nrH/zrvaOGD8ztHCixFxF/YgvAepj1FDwESR6Ok9dYf1brTY/b05HthFBYfVqhdzBRdRfiaysVO78WVRVUCvE0MKJpE/n51+8m/3rtxswxb1I5JFUURu53YsdMKuUCFGfc7mGHBkyq9uRyJ4C6q91hXXRYOAYVEQGc+3TmTGqLhuXE0FA1czz829B/elPNjA1714EElGrzNRzueu4319ZgTBGxQ5AZUGtYtGlKFNzlu//ZDOD2dlDIsNkl6u5M2Z0Z1OXViqVu7TjIFe1KRFSViORlcge4gP1vQacRQ+YT33rexSjJgWt9jnm9VfW2BkPuuIu7QJl90UQcjjryimueMptyTKHVjtVguvrkDiQfNRqYa/fvwfnCYRNa5W7ZlrazRW0IEYNjoDWgynuCuukJjDPn6aCcBC9pCAY+uJ419fYGafwbm11bY2pC6ZWDAdhyvzuiWSZNc9/8QWRoRTkjiZmYw1ZobF7LJGDrYgX1OFurqGuM8PBmeJfzObFJ9B782k8GGKJRy8oEbNDjO6sUlGGhdcjaGPD22SqLoMSDiX7xfzbwrdtbTbLoRBD5ATlenUXHe0NbsAxKhqGyZEDaR2UkqhW61nhrG/hqkPq6ZOS3pm/OOFAolBHM7O1tUHSCFplQsfIWSEJ2dpgCr2eRTmcUAglvbaOV/TafB8PUYhBR585vWD2hQNpQk14N6wI2d8KCqpgj5MCJ+S8N/9mGZ+i/5oz8bgoKV4uHITBhPb39zdIGjnjFG1iiJ0NfDyYbjazB4UyS0g8g0maAEFC1MbnuD9KzP7W1v4GAmqU8VEbl5hKJ+oqnD+DgllbwucP7nNwNDO0UPbW0L4rWIYG7cLKDsezAwklseOcArEk22L+oIcPQj3oBsr6sJ5tkdWVEcQZUelkyp4N6dDpBMgpJNXtje7rELLBQceuEbaelWscOWvQ67QfFwRHJFRMqjI7UyGW5Kzf59n3eOBghWRQhMXL+Q4nr4VgINjFECoChnioJJmcydDpEFLScc+oIkhrKzidSOy+c3dXwdK5dxrb0BSAkH3heJRkMQtnOiQkOU0QUaEQKXvBlLJnSI5avsLJ15yG4y+mg3trRJGDJZsspoQzESo7IRkQJRTa31gLymqt1OrFxRdqy1U7NiCHPqjxVqfTqsnBta0QQUg2mUwJJzYRijkRhrIM7YfiqnZf6yWbzVaKLhiQ1NOh454LG2ipYTCPO/maKuPSeHIJYmc6hAhIJFZP1Yp+/BBP9kJbQRobqZUUUKnkElMYbx3jE6BaNqdHREDO6ZCQHkHh6n3aTym2lC3KvjvfrFQgV5ItiaFgsXPnp6RT1fBjyPk9KDaExMVddKuKn1NCSYjH3Wn6Oc2Om6EQCuIoue7VCJKd34MQHXIyFL7u9lWv1+/3UkkhxKN2aCSxpjuaZx9bFCF7vWr75CI8qkg4kyEHSQYEKnx1fTKo73iZQklImCFOR/WEkFIeOxFfYXByfeVx0qIAEo5jGoQAKlJFgC7OjtrdlJdTLNF98KqWh0rx5mthbIh3kl5O6rJ9dEYlAeCK4EyHOAyFneHwFaDLthr1UtI0dh5X75gVrK3eFUpKd9K8O6oNLgFd4ThPGJAMZyJk/QbC5wnavRk0fF7KTqmI0XfnUQDHn8xLgHr5KDtKYXCzKyCnMwUIDkNfnlT0pexwOAwojBB0cNK+SUWjUZyq1/OEPCkugJPupDwefImwC8HInRxcA0K4opgB/ecb6FdAFB1yMnR9wGPHKZacnlip5TUSbZVinmwnyTt3tHb/iCEPDqWKmHG4JkE2l4BUrkhAZ0c3bfvOThRJl2RPKl8UKssdhSrk17764ObobFhRCRCY6RCHK+JcYJJO2lVlBwGUcpZKMI3stFrxWgcbsFeptk9oigSUAgRnOuRiiipycEU0dif9bmqH06sVW7j+UdKdZC8v9qW6fTFFHBmQgyNNhCSGYoDoY4DEJF3KOlQqFXfGkux0SvzCJ/cveeRIcnBFoqCpEOJgiHIlJqmv+nYo6aGjKEOpKSC1LaaI4nDoEE42HULUIkM4gKDdm77mQzBL/h2RVKGhS9FKFAqitelbBEjMMkMugsoTIZYcBOEvrogmqW1XfEborEr961c7YIQRRFkW3yJAWBlyIdMgt8SUgK5cDpeA+jaCRlEHX79iOIdh24BoHACVZOFMhRAB6aFJ+gZSbx4Gg4euPA71xRQ56ApdgFQBucv3T6D7byEcciEBurQpypBS1O5Du99vP+TUEaNkdYgZAXE90yA3U2MVHZ7tXtoVIz5Fg3ODtB+6Gt4asV3unh1eEGNAYKZBy25Eh6RH0I1mKIpc78M5OTo5gdS3yQaV1QSEGJD0fQgREMKDDKirKllasrI998DO7u4RSYOcJotdinoDCNfFxzDEjHsy9JEdt5ZOpiQ9F4eJaleTEVVrdAdfH/rkHByQ1H94GHTrmiojWnc3cUgILElKtXoaOdMhjpZKKpIRQJecPpr6YcDOGcLS4OHr10Fb7K8mDiVAFFcxX9OE83EyJCRNTSazI2j3EqejPOCcXM/Z9fUZ1wTd2HeJisiQkGypde+mTIeYkjLF46JDdw4TB932AIM0aPfB6E5CSES18aXCzHUPAF1IARwTS+Z7qoudwFPIyhBTkqwmj5uoiQ4DlMPp+peXN8Swc3h4eJ0giaibS9p7c0QQR2nmS/cuFzGBwOSK7AwF3GE5BSmN1sNnE593T7rd7gkp1AafE3AuUCkkULA4u9hOF5ZtHudbNTlMDAqaUNFLQHa9Jk82VTxmyk3QESUHhp0EGK7pM5oPltjHkCQXj/P5ZCrrJOYjYrdl3ljGoaWMyWY3KEdcFpQECKer7iLEkHMYkAKQEonPTMHCH1xBQE6DKdVScUeAymFoOfMrQ6MsZs7rkAwqBioJSnEncDZmhs5h4GIoIWJnQhKMTAwh7NTPM6++fQrxJtOwQRpS4aygZNRUOGhAAQMHF4vFkJiiEU0lBRN2gzEcWyPzYfbJc4hMubEMaUgFnFmVqCIoZOigHqxEJRCxR2ZGdcYeM/blAgp6+j+DS5nzBop6VJXbKetUIMEJcFAQOVj1rTpDPTBSUA6clwsTHuEsZTKmQn2MkpyqNqRodsbCA6gzGdmJPjMYpF5oZCY5PHpvMmWd4oxRKXfAHrAffhyDPrpTglGd0scAFlYEU858eGX5xTr5mcSrDxi/wjJThuWKaVqtdHycBPXYeMRoMZdeisFg1D4soZzJAT+79KF8XmBqZDmYyoMajQ6uXjIYh8tQOMtgyh+WZq1UznRrdqmM8WsQNbJcjrJKVC+lGZBmMC6HQNhhxlQuv/zzB5lWy9xLneLolEMaUcz08ripqWXJAYURwTSqjfPym0UwfwpZreiK8/MGUyMr4HCDauVbvZSqGozbAcEw7DZbo1ogZuGvP618BarADTjC3C6NqfxxSTCaKzBEcFHLdTDnH179vSf1s68+nJuYGgWU3Y4BbLVKPdWuudxkYDsQpF6tms7Pl6Yz07vi/NxUZWoUt2TXJPqnShmMzQgzucaPMJy5l5iqamEZVzyK5HRms3Gne8xfLhBDrQboB2IVVGMZGXEByRV4ZNiWwWByqNWsP/4LM9SABYMaeTT3Rho5TM6bV3qr/SiF25IJUwVqcsDk8IGlf/74n25LTNUnMdwDJuqB5whTDVBPGUyO6SWeGj4TZMFtyWTClNfHmAImx/QSPfCcsSwalL4IBj1gfVbHSl3xxmTClNQRYnINk+m5GaMrXplMaLJqoVDtguEeeHbIuC0RdXKSK4DBfeBnBQM4B4ryUmd+ojU7t7i4OCtuNz/Zslj+j3/P8H/lwFZ3Skv8bAAAAABJRU5ErkJggg=="
  , km = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAAXNSR0IArs4c6QAAAZtQTFRFAAAAUv//R///Sv//S///Sv//Sv//S///S///S///TP//TP//TP//TP//TP//Tf//TP//TP//TP//TP//S///TP//TP//TP//S///S///TP//U/v9n+3youjukOrwa/X4ee7zgerwT/7+hObsduftRvz9i93lZ+zzeOTrV/L2eeHoPfj7auPqQ/T4XObua97mTOvxeNbfNfP3PuvxSeXtY9nihMnbL+/0Ud7nac7ZOeLqJ+rwVNXeQtjhdsDUVc7ZIeTrf7nQJd/nQ9LbSc3XLdjiN9PdG9zleLHKN87YebG8TsPQQsjSjqW9LNHbFtfhX7bLMMrVe6fCOsPPFNHcNr/LZKfAEMzZdpy4MbzIHsPQDsfULbnFH77LKrTBCcLPGrrHPqi9XZm0C77Ma5GtG7TCCrvKC7jGG668C7TCDrG/Z4imOpyyGqm4C668V4uoCau6C6i2F6KxO4+nGZysBqS0VHybFpemBZ6uPIOdGJKhBJipIIuaPnqVSHSRBZKjG4eWSm6NG4KQBYqbCIOUF3qJCn2NDnSDDGx84SmA1AAAABx0Uk5TAAMIFCAvQFFld4WKjpGYn6assrW5v8XN2eXv/YTafBIAAA1JSURBVHja7JhrbxvJmUZP3bqqu9kkRfFijWV74XWwmcX+/58RZJFNFrOe9dgz9sQey7qREtldt4iUCPNjKDsOEOiQBfBLFQ+ft94iWTzwwAMPPPDAAw888MAD/1oIvhQhBCDIKfMVkNwboYx11WA8nU5nN0yn47qQ/6SECqmMVY6W/jUCAJHJqOVZl769UDFoWo1gOzmqCEBCihDOum8rJOSosakVAJE7siCTQRph2pN5/pZC5lD1Ws1ndNABIBKTNAi1CJ/CtxMqxsbFHRXNFq3wrTeYLM9P22/VZebQiAiA1jrcDNC3D102jR0dgBdq+LgS3yihSZUpAA1Bs4MtBqyutG2vWoOWn64u07dIyBUiAVoDGkDfPW0zAAfYUQ9COqxH6hsIiaEWW5W7mJBBkmzjbkAHLP1GQjq0B+ofKGRsWZVWF5VAJh24JUgkyKTrZugAKsAW/UOb1kZjzT3Qf99BqArk6jpHCXjDLTLJJJGUAweAA6C9UcrzmA69OAl8/YRk8ejZdNJ3RtV9J3bbYGOTUKOBsxbLHRYK0e+RzMHEfPUuE3bYuCqA6AraUyOIuTCABCBJTDPcurR8Cn3u6C6j9Gef/NcU2vSMKwCEhnDRSZCdqJBsqavGsqWdX47YoGDpF9JfnHRfs2TucNzf+gBRgPTArs+4lDewwTaAoEDFSNk/qMz00H5FoeK7QbdY4/UNJrQAhgxbRoOxBGDr5FoMHapQCg76Azcbu6/WZWoUryCBMD2LWEYt2OAtG0wzLDUQAJIkAeALoFuntMI5Jpwuv5JQoXJiw5NZIMorgcps2Po0AGgCSJDYohPGm7UPUUW3opGT6uf2q2xqMbMRAPHsaZHwb94YgQSfC3vrMysUEGGbEpxd1WbXGZZcvjmBlL54D6lKACCaicImsdIotgTqyVGpANRu0g7wOzqekmEzezp7NHXyC4WE4pZnPaLXy3OxY6TrwYGVEgClALQGsHgcG5zxeAOjoeslU5SHM/dlQpkN4tEB0HUXLUQAQxeoZ5NSgoSdkDTIoiOicLiVcsahGlUMnRZJ9oZPRuoLhES+toBojpUCxJUGlQEFejQbmt12V1sleqBcdCu4GQpVmlpltFTqYDA4OpD3F8pkADY7JbJYoMEAEUaz0XZeAnaVHKxdnANHpCwq3rZgpMaUg6ND9QUlyxLEo5kigrhYCshgoRw/qaHazpe7dUPizfY1qixcOl11fmvdTA/Ul+2hYqwUQLtsAQGt6c1+/3Q6HkDFFrkbksdj2DCqnbn40AIYCVAPnh6q+wtpxNEBRCL+VGs0GDucPXk6HI2awdhUO2tslfSo2+pQSmUufm07D3hpStyqdseH6n5CaljCaKKIgJhHB0GjD6ezoRNSN4N+0xt/Vtqp25ZerYz/NXaAxCiWpSiph8cTdR8hdeNiRrMSIHJ91QLo4dHTo8YGQEhb96vBdFABCZm4o8KDBHpOGd76Fg9IoAQEavjdRO8vpKfTPuZoXLsbCtRCR6j600m/tLpLAEhV1r1m7SR3FtKsNoajtc/7eex23mfHaF+hwchR+KFCbYz80uHGsyeTgRWEkAAEoKQr3U3pbpzSdqmRB7BFXWp/TVvALq5EDY/Gas9vezdyCDk/P1z0wBBPWlP16mmtLBnEsoHMLbJIEh8r76+BCHRA2RjQ1WH1WwTPFgeULCeszvcSUkMHFLzicOWUj/GyX/d7jVEmgYQuAySI2zXM1iniWLnKEbRUauyHi/n8mg5/d2AColxO5ld+n58f9mlfACGuHh/0HL77bzkZFUWJQCNBHCq2Pilsrz9SjK2Pq+sT2/fGusJUHXgfWXQXvuPR57ukgr/++SLvkZBzLtOh0e/8aqygd60UJJkJOknwCoA7H9YDJEp5Txx8erdUo0fDqgUwMGDkr657Km6NROhV87iPUGVkciuKqv0txLGif3o1UJ2KVrKhdSQAEhuXsFPC+OGtUeH96ePHSWm8AYMZHiwlQIZEq0JTy7hHl0kNknV7NdPFu5PI9PHHXzuxVJADQMwAcWd6IhG75Oe//c97Nzl6XIeXf3x/1XrpAV0XRZNIIESQ0ipUI+/1z1V29tj+9Msyzx5//KkVIScgkUME0JC2PjIRY7o+f/2nhR5Vzk3GbvGnH8+76wjYrJ0yyAQYkHuf1IItzjTPp+8/LBhPz35qQ8x3Ea0y2+kaQCa62M7P/vwy21HVONcMjmx+/Yf/9z7ilNM+a60LErfo/YRWgS2NtcfTj2/fvvqt3RglCIncJbGjTUpE2vnPf/jkynrQ5Bvc8OlwIH/+36UvYvCAkHRaggB0aNMeQuJ6ARgwKOVqd/zcnJ+7Xjp7dbUKKUMiZARoeReRhJjmr196rQYvHh19d8PR0fGLybNp+zoDLI0qBAWaW1YnYQ+h7M8Ab0imclpYN35yXJpmbM5/aNdGgfUASEhAAxG/eJcLxe+eHDXNoFlTTuvj2ekqEDGeDN22HdXJPLNH28d2WWM2RlaSLLc03fKH/6BOMmhaIyFogkwo1JIkTjtL/d1xucgoAEPdxYYIm4GQRVcEALE6D+zVZVeLBCb5ygohpNAaoChmz80Pi6ucckhthrT2kZoIUJAqXXNYqZ5SWimLxygN3gMRnBQUQAZ5frqnUDwHvDTGSQ0olDVQD8a/M78srtZViyElSdLroaF0StpLcGMpdI8AIfkKlU0x3xiBVxrQkCQn87SfUFgtwZCUNlKvIwJfuMGgN/ze/LjY7KM2k5CbgQKNcMDIIYRSAB4MYBOkSASiBECa7rxjP6F87QEqLSUbtME1daFU/0Xv1mgVIKUkAYQQoE1lOCgBWQERwChlPFukgADIi7OwpxB+njwYJwCEVOjWOIvWov/7yV9OViG2IWcgfV5FEd0BZFA9SB4JoEP0EHfuJGx7skj7CoVLD05tb8iFHnethhDAPZ6+OlnEeB3IbJAyAeiC2gEZoVz0ACjNdQS2kUEW5vrjin2FuFwauKuYFtL2nr97fZUyObX6ePryw6JdtYF8m1LKOcSgkQNCymSE2QTkAZPgc+OTKdr3p37/C6swf4JzbBFu7H784/EjR/An56flO2a6JWh0BgiEGLGpgpwkWchGhZzIwnNHREHKwMXbs3wPobOTY6dJbBBSO/1fH16dD93Fx276n+bkHWjNHYHYxjYYUquC1gKCrtaOfhk+TmqzU7Mkr9986thfiMvzIysNIAUWCLkbzN6+xU7GlvbyYuG1tIYIxPUWX6wu/PzEYUGDQgeg/fTKPhsWGk+MJB9TCG9++JTuc6Unmhff951F3QURaGPbroLWqr169fpCHv77sdNKQL64cVm2y8UyN8//re+s0kCg89dvXk1fHDirAUKIbdtevHp31nEfIeTw6PtJr9AaAZAJ6xokfHfy4y/zjJ7WTdsVFqONbRQv/7JCD0bPj2urgOjby9fnx8+qTa9ufFbLxbv/O19m7icE5fDmA/eUZZvR2uhv7dvPb9NmHMfxz/Pbv3DTUNowtglN82HqtAOXaqqEwqSp0w6bNE0FUSEkhApEQAuhkIiCEP8h/AFwoAfKz5Y6rePECXbsFNSegDbP5XnFyS3SW9/Hsg9+HLfXnr2IALCpCTjulMc5JUASPXm6A0CVfzxZUhS9rFv9dNROe5DKcjbWXr3d6nzD06Cdzs7zyg9TlpIcHLm4lZ4DcX51dkVZKp/l8+jbHKn2erh2csJDd2Pj9bGfPVsAXSBJ2tH6i5dhK8E34nZlurpQu9W4n2qsLF9bmKkUbfLE72fm56/X66vN1dX6nat/lJATpUoQBBVr8tT/i7VbK41GY6V2cW76uMVwEKgcD2b+XawtLy/fvLJQnZ5gGCDql9N/zV9aqjcH7t34c5JgiDEKQv1g9uzitVot/VswqXBwuH18erY6N1edCcqKomCnQecuLTUfpB436zf+qTDsIUrBqdnq7EzgS4oDRZUzdrTs2xyfuL+d/vvc5aW7DzKP6rfPf8exD1e269gco1D69cx/g6CHaVCzfv1CIPRu1xEMqS4ICMCBvkW0BhEmFQoEsEEF1RpECUeheCZEiOYgFFjCkGJK6F0yIgBP5UUEUADTOyEfjsRAkpd4mifUw1De4zJKdAYxtXeFLEJ1BomewieEA3xCaxC3kWPFFxxagxg+14cEk0RnEOWAB8BChgCKap0QI4CEAiIMMcV1BkE4yLjYxZjGIOojl2CXLTUGEWBfEaMag7goA3uiLI9oDELOjZAg51IwfUFSRci0kBYl6LcBSOsAgji+AuE2J+221wLctkImC7LU+PtOb/RBRI4Jz3GVI3dT3OxnG9/zY2834u5IN3gTLkrkiG8x5QCy5QJecS3aAvrvO5vhh60Pnd7IgpQvPebBhYKDAQk4NHSQCoEYnbC1GW7G3VEsGZdj1D4i4CKzDTjbDmKO7V525CTGPbcdvY7CuH/IE2K+LVwlivspw5CCFaVH+sFAR3QQJmFr6118uEHqhOoBarjltCAB8C726SNaf3O4S9Zd5/gS/ci8V2QYhmEYhmEYhmEYhmF8sY/piiyEqwcumwAAAABJRU5ErkJggg==";
var X = (e=>(e.Loading = "loading",
e.Menu = "menu",
e.Game = "game",
e.World = "world",
e.History = "history",
e.Results = "results",
e.DesktopWarning = "desktopWarning",
e))(X || {});
const Nm = 66
  , wf = [{
    image: {
        src: Tm,
        width: 24
    },
    text: "Игра",
    type: X.Menu
}, {
    image: {
        src: km,
        width: 36
    },
    text: "Мир VW",
    type: X.World
}, {
    image: {
        src: Am,
        width: 26
    },
    text: "История",
    type: X.History
}]
  , Mm = "_navigation_13ck7_1"
  , Lm = "_fadeOut_13ck7_13"
  , Pm = "_list_13ck7_18"
  , Im = "_item_13ck7_31"
  , Bm = "_imageWrap_13ck7_40"
  , Om = "_navigationHighlight_13ck7_49"
  , Fm = "_imageBackground_13ck7_58"
  , Dm = "_game_13ck7_65"
  , jm = "_world_13ck7_68"
  , zm = "_history_13ck7_71"
  , Um = "_image_13ck7_40"
  , bm = "_text_13ck7_79"
  , Hm = "_activeItem_13ck7_83"
  , Vm = "_navigationMark_13ck7_90"
  , st = {
    navigation: Mm,
    "fade-in": "_fade-in_13ck7_1",
    fadeOut: Lm,
    list: Pm,
    item: Im,
    imageWrap: Bm,
    navigationHighlight: Om,
    imageBackground: Fm,
    game: Dm,
    world: jm,
    history: zm,
    image: Um,
    text: bm,
    activeItem: Hm,
    navigationMark: Vm
}
  , xf = X.Loading
  , x0 = {
    screen: xf,
    nextScreen: xf,
    setScreen: ()=>{}
}
  , Rn = M.createContext(x0)
  , S0 = M.createContext(null)
  , C0 = M.createContext({
    enabled: localStorage.getItem("sound") !== "false",
    setEnabled: ()=>{}
})
  , _0 = {
    telegramData: null,
    isLogged: !1,
    nextGameAt: null,
    woodBalance: 0,
    avatarUrl: "",
    username: "",
    userId: null
}
  , ir = M.createContext(_0);
function Zm({activeScreen: e, onChange: t}) {
    const {nextScreen: n} = M.useContext(Rn)
      , r = M.useRef(null)
      , [i,o] = M.useState(0);
    return M.useEffect(()=>{
        const s = ()=>{
            const a = wf.findIndex(l=>l.type === e) || 0;
            if (r.current) {
                const l = r.current.getElementsByTagName("li")
                  , {left: c, width: d} = l[a].getBoundingClientRect()
                  , {left: m} = r.current.getBoundingClientRect();
                o(c - m + d / 2 - Nm / 2)
            } else
                o(-1e3)
        }
        ;
        return s(),
        window.addEventListener("resize", s),
        ()=>window.removeEventListener("resize", s)
    }
    , [e]),
    f.jsx("nav", {
        className: Z(st.navigation, n === X.Game && st.fadeOut),
        ref: r,
        children: f.jsxs(Qt, {
            isDebounced: !1,
            borderType: Ae.Navigation,
            fillType: ue.VioletCircleWithPurpleBorder,
            children: [f.jsx("ul", {
                className: st.list,
                children: wf.map(({image: s, text: a, type: l})=>f.jsx("li", {
                    children: f.jsxs("button", {
                        onClick: ()=>t(l),
                        className: Z(st.item, e === l && st.activeItem),
                        children: [f.jsx(Me.NavigationHighlight, {
                            className: st.navigationHighlight
                        }), f.jsxs("div", {
                            className: st.imageWrap,
                            children: [f.jsx("div", {
                                className: Z(st.imageBackground, st[l])
                            }), f.jsx("img", {
                                src: s.src,
                                width: s.width,
                                alt: "",
                                className: st.image
                            })]
                        }), f.jsx(V, {
                            design: "text-m",
                            className: st.text,
                            children: a
                        })]
                    })
                }, s.src))
            }), f.jsx(Me.NavigationMark, {
                className: st.navigationMark,
                style: {
                    transform: `translateX(${i}px)`
                }
            })]
        })
    })
}
const Gm = "_mainWrap_1jye1_1"
  , $m = {
    mainWrap: Gm
};
var Lt = 1e-6
  , Ce = typeof Float32Array < "u" ? Float32Array : Array
  , Sf = Math.random;
Math.hypot || (Math.hypot = function() {
    for (var e = 0, t = arguments.length; t--; )
        e += arguments[t] * arguments[t];
    return Math.sqrt(e)
}
);
function Gc() {
    var e = new Ce(9);
    return Ce != Float32Array && (e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[5] = 0,
    e[6] = 0,
    e[7] = 0),
    e[0] = 1,
    e[4] = 1,
    e[8] = 1,
    e
}
function Wm(e) {
    return e[0] = 1,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 1,
    e[5] = 0,
    e[6] = 0,
    e[7] = 0,
    e[8] = 1,
    e
}
function Qm(e, t, n) {
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3]
      , a = t[4]
      , l = t[5]
      , c = t[6]
      , d = t[7]
      , m = t[8]
      , p = n[0]
      , y = n[1]
      , h = n[2]
      , E = n[3]
      , x = n[4]
      , g = n[5]
      , v = n[6]
      , w = n[7]
      , _ = n[8];
    return e[0] = p * r + y * s + h * c,
    e[1] = p * i + y * a + h * d,
    e[2] = p * o + y * l + h * m,
    e[3] = E * r + x * s + g * c,
    e[4] = E * i + x * a + g * d,
    e[5] = E * o + x * l + g * m,
    e[6] = v * r + w * s + _ * c,
    e[7] = v * i + w * a + _ * d,
    e[8] = v * o + w * l + _ * m,
    e
}
function R0(e, t) {
    var n = t[0]
      , r = t[1]
      , i = t[2]
      , o = t[3]
      , s = t[4]
      , a = t[5]
      , l = t[6]
      , c = t[7]
      , d = t[8]
      , m = t[9]
      , p = t[10]
      , y = t[11]
      , h = t[12]
      , E = t[13]
      , x = t[14]
      , g = t[15]
      , v = n * a - r * s
      , w = n * l - i * s
      , _ = n * c - o * s
      , C = r * l - i * a
      , R = r * c - o * a
      , T = i * c - o * l
      , k = d * E - m * h
      , O = d * x - p * h
      , N = d * g - y * h
      , D = m * x - p * E
      , z = m * g - y * E
      , F = p * g - y * x
      , I = v * F - w * z + _ * D + C * N - R * O + T * k;
    return I ? (I = 1 / I,
    e[0] = (a * F - l * z + c * D) * I,
    e[1] = (l * N - s * F - c * O) * I,
    e[2] = (s * z - a * N + c * k) * I,
    e[3] = (i * z - r * F - o * D) * I,
    e[4] = (n * F - i * N + o * O) * I,
    e[5] = (r * N - n * z - o * k) * I,
    e[6] = (E * T - x * R + g * C) * I,
    e[7] = (x * _ - h * T - g * w) * I,
    e[8] = (h * R - E * _ + g * v) * I,
    e) : null
}
function qe() {
    var e = new Ce(16);
    return Ce != Float32Array && (e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0),
    e[0] = 1,
    e[5] = 1,
    e[10] = 1,
    e[15] = 1,
    e
}
function bn(e) {
    return e[0] = 1,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[5] = 1,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[10] = 1,
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    e
}
function Ym(e, t) {
    if (e === t) {
        var n = t[1]
          , r = t[2]
          , i = t[3]
          , o = t[6]
          , s = t[7]
          , a = t[11];
        e[1] = t[4],
        e[2] = t[8],
        e[3] = t[12],
        e[4] = n,
        e[6] = t[9],
        e[7] = t[13],
        e[8] = r,
        e[9] = o,
        e[11] = t[14],
        e[12] = i,
        e[13] = s,
        e[14] = a
    } else
        e[0] = t[0],
        e[1] = t[4],
        e[2] = t[8],
        e[3] = t[12],
        e[4] = t[1],
        e[5] = t[5],
        e[6] = t[9],
        e[7] = t[13],
        e[8] = t[2],
        e[9] = t[6],
        e[10] = t[10],
        e[11] = t[14],
        e[12] = t[3],
        e[13] = t[7],
        e[14] = t[11],
        e[15] = t[15];
    return e
}
function Cf(e, t) {
    var n = t[0]
      , r = t[1]
      , i = t[2]
      , o = t[3]
      , s = t[4]
      , a = t[5]
      , l = t[6]
      , c = t[7]
      , d = t[8]
      , m = t[9]
      , p = t[10]
      , y = t[11]
      , h = t[12]
      , E = t[13]
      , x = t[14]
      , g = t[15]
      , v = n * a - r * s
      , w = n * l - i * s
      , _ = n * c - o * s
      , C = r * l - i * a
      , R = r * c - o * a
      , T = i * c - o * l
      , k = d * E - m * h
      , O = d * x - p * h
      , N = d * g - y * h
      , D = m * x - p * E
      , z = m * g - y * E
      , F = p * g - y * x
      , I = v * F - w * z + _ * D + C * N - R * O + T * k;
    return I ? (I = 1 / I,
    e[0] = (a * F - l * z + c * D) * I,
    e[1] = (i * z - r * F - o * D) * I,
    e[2] = (E * T - x * R + g * C) * I,
    e[3] = (p * R - m * T - y * C) * I,
    e[4] = (l * N - s * F - c * O) * I,
    e[5] = (n * F - i * N + o * O) * I,
    e[6] = (x * _ - h * T - g * w) * I,
    e[7] = (d * T - p * _ + y * w) * I,
    e[8] = (s * z - a * N + c * k) * I,
    e[9] = (r * N - n * z - o * k) * I,
    e[10] = (h * R - E * _ + g * v) * I,
    e[11] = (m * _ - d * R - y * v) * I,
    e[12] = (a * O - s * D - l * k) * I,
    e[13] = (n * D - r * O + i * k) * I,
    e[14] = (E * w - h * C - x * v) * I,
    e[15] = (d * C - m * w + p * v) * I,
    e) : null
}
function xi(e, t, n) {
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3]
      , a = t[4]
      , l = t[5]
      , c = t[6]
      , d = t[7]
      , m = t[8]
      , p = t[9]
      , y = t[10]
      , h = t[11]
      , E = t[12]
      , x = t[13]
      , g = t[14]
      , v = t[15]
      , w = n[0]
      , _ = n[1]
      , C = n[2]
      , R = n[3];
    return e[0] = w * r + _ * a + C * m + R * E,
    e[1] = w * i + _ * l + C * p + R * x,
    e[2] = w * o + _ * c + C * y + R * g,
    e[3] = w * s + _ * d + C * h + R * v,
    w = n[4],
    _ = n[5],
    C = n[6],
    R = n[7],
    e[4] = w * r + _ * a + C * m + R * E,
    e[5] = w * i + _ * l + C * p + R * x,
    e[6] = w * o + _ * c + C * y + R * g,
    e[7] = w * s + _ * d + C * h + R * v,
    w = n[8],
    _ = n[9],
    C = n[10],
    R = n[11],
    e[8] = w * r + _ * a + C * m + R * E,
    e[9] = w * i + _ * l + C * p + R * x,
    e[10] = w * o + _ * c + C * y + R * g,
    e[11] = w * s + _ * d + C * h + R * v,
    w = n[12],
    _ = n[13],
    C = n[14],
    R = n[15],
    e[12] = w * r + _ * a + C * m + R * E,
    e[13] = w * i + _ * l + C * p + R * x,
    e[14] = w * o + _ * c + C * y + R * g,
    e[15] = w * s + _ * d + C * h + R * v,
    e
}
function Km(e, t) {
    return e[0] = 1,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[5] = 1,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[10] = 1,
    e[11] = 0,
    e[12] = t[0],
    e[13] = t[1],
    e[14] = t[2],
    e[15] = 1,
    e
}
function qm(e, t, n) {
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3]
      , a = r + r
      , l = i + i
      , c = o + o
      , d = r * a
      , m = r * l
      , p = r * c
      , y = i * l
      , h = i * c
      , E = o * c
      , x = s * a
      , g = s * l
      , v = s * c;
    return e[0] = 1 - (y + E),
    e[1] = m + v,
    e[2] = p - g,
    e[3] = 0,
    e[4] = m - v,
    e[5] = 1 - (d + E),
    e[6] = h + x,
    e[7] = 0,
    e[8] = p + g,
    e[9] = h - x,
    e[10] = 1 - (d + y),
    e[11] = 0,
    e[12] = n[0],
    e[13] = n[1],
    e[14] = n[2],
    e[15] = 1,
    e
}
function T0(e, t) {
    var n = t[0]
      , r = t[1]
      , i = t[2]
      , o = t[4]
      , s = t[5]
      , a = t[6]
      , l = t[8]
      , c = t[9]
      , d = t[10];
    return e[0] = Math.hypot(n, r, i),
    e[1] = Math.hypot(o, s, a),
    e[2] = Math.hypot(l, c, d),
    e
}
function Xm(e, t) {
    var n = new Ce(3);
    T0(n, t);
    var r = 1 / n[0]
      , i = 1 / n[1]
      , o = 1 / n[2]
      , s = t[0] * r
      , a = t[1] * i
      , l = t[2] * o
      , c = t[4] * r
      , d = t[5] * i
      , m = t[6] * o
      , p = t[8] * r
      , y = t[9] * i
      , h = t[10] * o
      , E = s + d + h
      , x = 0;
    return E > 0 ? (x = Math.sqrt(E + 1) * 2,
    e[3] = .25 * x,
    e[0] = (m - y) / x,
    e[1] = (p - l) / x,
    e[2] = (a - c) / x) : s > d && s > h ? (x = Math.sqrt(1 + s - d - h) * 2,
    e[3] = (m - y) / x,
    e[0] = .25 * x,
    e[1] = (a + c) / x,
    e[2] = (p + l) / x) : d > h ? (x = Math.sqrt(1 + d - s - h) * 2,
    e[3] = (p - l) / x,
    e[0] = (a + c) / x,
    e[1] = .25 * x,
    e[2] = (m + y) / x) : (x = Math.sqrt(1 + h - s - d) * 2,
    e[3] = (a - c) / x,
    e[0] = (p + l) / x,
    e[1] = (m + y) / x,
    e[2] = .25 * x),
    e
}
function Jm(e, t, n, r) {
    var i = t[0]
      , o = t[1]
      , s = t[2]
      , a = t[3]
      , l = i + i
      , c = o + o
      , d = s + s
      , m = i * l
      , p = i * c
      , y = i * d
      , h = o * c
      , E = o * d
      , x = s * d
      , g = a * l
      , v = a * c
      , w = a * d
      , _ = r[0]
      , C = r[1]
      , R = r[2];
    return e[0] = (1 - (h + x)) * _,
    e[1] = (p + w) * _,
    e[2] = (y - v) * _,
    e[3] = 0,
    e[4] = (p - w) * C,
    e[5] = (1 - (m + x)) * C,
    e[6] = (E + g) * C,
    e[7] = 0,
    e[8] = (y + v) * R,
    e[9] = (E - g) * R,
    e[10] = (1 - (m + h)) * R,
    e[11] = 0,
    e[12] = n[0],
    e[13] = n[1],
    e[14] = n[2],
    e[15] = 1,
    e
}
function eg(e, t, n, r, i) {
    var o = 1 / Math.tan(t / 2), s;
    return e[0] = o / n,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[5] = o,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[11] = -1,
    e[12] = 0,
    e[13] = 0,
    e[15] = 0,
    i != null && i !== 1 / 0 ? (s = 1 / (r - i),
    e[10] = (i + r) * s,
    e[14] = 2 * i * r * s) : (e[10] = -1,
    e[14] = -2 * r),
    e
}
var tg = eg;
function ng(e, t, n, r, i, o, s) {
    var a = 1 / (t - n)
      , l = 1 / (r - i)
      , c = 1 / (o - s);
    return e[0] = -2 * a,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e[4] = 0,
    e[5] = -2 * l,
    e[6] = 0,
    e[7] = 0,
    e[8] = 0,
    e[9] = 0,
    e[10] = 2 * c,
    e[11] = 0,
    e[12] = (t + n) * a,
    e[13] = (i + r) * l,
    e[14] = (s + o) * c,
    e[15] = 1,
    e
}
var rg = ng;
function Bt() {
    var e = new Ce(3);
    return Ce != Float32Array && (e[0] = 0,
    e[1] = 0,
    e[2] = 0),
    e
}
function dt(e) {
    var t = new Ce(3);
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t
}
function ig(e) {
    var t = e[0]
      , n = e[1]
      , r = e[2];
    return Math.hypot(t, n, r)
}
function me(e, t, n) {
    var r = new Ce(3);
    return r[0] = e,
    r[1] = t,
    r[2] = n,
    r
}
function un(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e
}
function og(e, t, n) {
    return e[0] = t[0] + n[0],
    e[1] = t[1] + n[1],
    e[2] = t[2] + n[2],
    e
}
function sg(e, t, n) {
    return e[0] = t[0] - n[0],
    e[1] = t[1] - n[1],
    e[2] = t[2] - n[2],
    e
}
function Si(e, t, n) {
    return e[0] = t[0] * n,
    e[1] = t[1] * n,
    e[2] = t[2] * n,
    e
}
function vs(e, t, n, r) {
    return e[0] = t[0] + n[0] * r,
    e[1] = t[1] + n[1] * r,
    e[2] = t[2] + n[2] * r,
    e
}
function ag(e, t) {
    var n = t[0] - e[0]
      , r = t[1] - e[1]
      , i = t[2] - e[2];
    return Math.hypot(n, r, i)
}
function A0(e, t) {
    var n = t[0] - e[0]
      , r = t[1] - e[1]
      , i = t[2] - e[2];
    return n * n + r * r + i * i
}
function $c(e, t) {
    var n = t[0]
      , r = t[1]
      , i = t[2]
      , o = n * n + r * r + i * i;
    return o > 0 && (o = 1 / Math.sqrt(o)),
    e[0] = t[0] * o,
    e[1] = t[1] * o,
    e[2] = t[2] * o,
    e
}
function k0(e, t) {
    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
}
function Ia(e, t, n) {
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = n[0]
      , a = n[1]
      , l = n[2];
    return e[0] = i * l - o * a,
    e[1] = o * s - r * l,
    e[2] = r * a - i * s,
    e
}
function lg(e, t) {
    t = t || 1;
    var n = Sf() * 2 * Math.PI
      , r = Sf() * 2 - 1
      , i = Math.sqrt(1 - r * r) * t;
    return e[0] = Math.cos(n) * i,
    e[1] = Math.sin(n) * i,
    e[2] = r * t,
    e
}
function N0(e, t, n) {
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = n[3] * r + n[7] * i + n[11] * o + n[15];
    return s = s || 1,
    e[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / s,
    e[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / s,
    e[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / s,
    e
}
function _f(e, t, n) {
    var r = n[0]
      , i = n[1]
      , o = n[2]
      , s = n[3]
      , a = t[0]
      , l = t[1]
      , c = t[2]
      , d = i * c - o * l
      , m = o * a - r * c
      , p = r * l - i * a
      , y = i * p - o * m
      , h = o * d - r * p
      , E = r * m - i * d
      , x = s * 2;
    return d *= x,
    m *= x,
    p *= x,
    y *= 2,
    h *= 2,
    E *= 2,
    e[0] = a + d + y,
    e[1] = l + m + h,
    e[2] = c + p + E,
    e
}
function Ci(e, t) {
    var n = e[0]
      , r = e[1]
      , i = e[2]
      , o = t[0]
      , s = t[1]
      , a = t[2];
    return Math.abs(n - o) <= Lt * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - s) <= Lt * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(i - a) <= Lt * Math.max(1, Math.abs(i), Math.abs(a))
}
var ys = sg
  , cg = ig;
(function() {
    var e = Bt();
    return function(t, n, r, i, o, s) {
        var a, l;
        for (n || (n = 3),
        r || (r = 0),
        i ? l = Math.min(i * n + r, t.length) : l = t.length,
        a = r; a < l; a += n)
            e[0] = t[a],
            e[1] = t[a + 1],
            e[2] = t[a + 2],
            o(e, e, s),
            t[a] = e[0],
            t[a + 1] = e[1],
            t[a + 2] = e[2];
        return t
    }
}
)();
function M0() {
    var e = new Ce(4);
    return Ce != Float32Array && (e[0] = 0,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0),
    e
}
function L0(e) {
    var t = new Ce(4);
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t
}
function zl(e, t, n, r) {
    var i = new Ce(4);
    return i[0] = e,
    i[1] = t,
    i[2] = n,
    i[3] = r,
    i
}
function P0(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e
}
function I0(e, t, n, r, i) {
    return e[0] = t,
    e[1] = n,
    e[2] = r,
    e[3] = i,
    e
}
function ug(e, t, n) {
    return e[0] = t[0] * n,
    e[1] = t[1] * n,
    e[2] = t[2] * n,
    e[3] = t[3] * n,
    e
}
function fg(e, t) {
    var n = t[0]
      , r = t[1]
      , i = t[2]
      , o = t[3]
      , s = n * n + r * r + i * i + o * o;
    return s > 0 && (s = 1 / Math.sqrt(s)),
    e[0] = n * s,
    e[1] = r * s,
    e[2] = i * s,
    e[3] = o * s,
    e
}
function Rf(e, t, n) {
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3];
    return e[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * s,
    e[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * s,
    e[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * s,
    e[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * s,
    e
}
function dg(e, t) {
    var n = e[0]
      , r = e[1]
      , i = e[2]
      , o = e[3]
      , s = t[0]
      , a = t[1]
      , l = t[2]
      , c = t[3];
    return Math.abs(n - s) <= Lt * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(r - a) <= Lt * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(i - l) <= Lt * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(o - c) <= Lt * Math.max(1, Math.abs(o), Math.abs(c))
}
(function() {
    var e = M0();
    return function(t, n, r, i, o, s) {
        var a, l;
        for (n || (n = 4),
        r || (r = 0),
        i ? l = Math.min(i * n + r, t.length) : l = t.length,
        a = r; a < l; a += n)
            e[0] = t[a],
            e[1] = t[a + 1],
            e[2] = t[a + 2],
            e[3] = t[a + 3],
            o(e, e, s),
            t[a] = e[0],
            t[a + 1] = e[1],
            t[a + 2] = e[2],
            t[a + 3] = e[3];
        return t
    }
}
)();
function Vi() {
    var e = new Ce(4);
    return Ce != Float32Array && (e[0] = 0,
    e[1] = 0,
    e[2] = 0),
    e[3] = 1,
    e
}
function hg(e, t, n) {
    n = n * .5;
    var r = Math.sin(n);
    return e[0] = r * t[0],
    e[1] = r * t[1],
    e[2] = r * t[2],
    e[3] = Math.cos(n),
    e
}
function pg(e, t, n) {
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3]
      , a = n[0]
      , l = n[1]
      , c = n[2]
      , d = n[3];
    return e[0] = r * d + s * a + i * c - o * l,
    e[1] = i * d + s * l + o * a - r * c,
    e[2] = o * d + s * c + r * l - i * a,
    e[3] = s * d - r * a - i * l - o * c,
    e
}
function mg(e, t, n) {
    n *= .5;
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3]
      , a = Math.sin(n)
      , l = Math.cos(n);
    return e[0] = r * l + s * a,
    e[1] = i * l + o * a,
    e[2] = o * l - i * a,
    e[3] = s * l - r * a,
    e
}
function gg(e, t, n) {
    n *= .5;
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3]
      , a = Math.sin(n)
      , l = Math.cos(n);
    return e[0] = r * l - o * a,
    e[1] = i * l + s * a,
    e[2] = o * l + r * a,
    e[3] = s * l - i * a,
    e
}
function vg(e, t, n) {
    n *= .5;
    var r = t[0]
      , i = t[1]
      , o = t[2]
      , s = t[3]
      , a = Math.sin(n)
      , l = Math.cos(n);
    return e[0] = r * l + i * a,
    e[1] = i * l - r * a,
    e[2] = o * l + s * a,
    e[3] = s * l - o * a,
    e
}
function Ba(e, t, n, r) {
    var i = t[0], o = t[1], s = t[2], a = t[3], l = n[0], c = n[1], d = n[2], m = n[3], p, y, h, E, x;
    return y = i * l + o * c + s * d + a * m,
    y < 0 && (y = -y,
    l = -l,
    c = -c,
    d = -d,
    m = -m),
    1 - y > Lt ? (p = Math.acos(y),
    h = Math.sin(p),
    E = Math.sin((1 - r) * p) / h,
    x = Math.sin(r * p) / h) : (E = 1 - r,
    x = r),
    e[0] = E * i + x * l,
    e[1] = E * o + x * c,
    e[2] = E * s + x * d,
    e[3] = E * a + x * m,
    e
}
function yg(e, t) {
    var n = t[0] + t[4] + t[8], r;
    if (n > 0)
        r = Math.sqrt(n + 1),
        e[3] = .5 * r,
        r = .5 / r,
        e[0] = (t[5] - t[7]) * r,
        e[1] = (t[6] - t[2]) * r,
        e[2] = (t[1] - t[3]) * r;
    else {
        var i = 0;
        t[4] > t[0] && (i = 1),
        t[8] > t[i * 3 + i] && (i = 2);
        var o = (i + 1) % 3
          , s = (i + 2) % 3;
        r = Math.sqrt(t[i * 3 + i] - t[o * 3 + o] - t[s * 3 + s] + 1),
        e[i] = .5 * r,
        r = .5 / r,
        e[3] = (t[o * 3 + s] - t[s * 3 + o]) * r,
        e[o] = (t[o * 3 + i] + t[i * 3 + o]) * r,
        e[s] = (t[s * 3 + i] + t[i * 3 + s]) * r
    }
    return e
}
var Eg = L0
  , wg = zl
  , Tf = P0
  , B0 = fg
  , xg = dg;
(function() {
    var e = Bt()
      , t = me(1, 0, 0)
      , n = me(0, 1, 0);
    return function(r, i, o) {
        var s = k0(i, o);
        return s < -.999999 ? (Ia(e, t, i),
        cg(e) < 1e-6 && Ia(e, n, i),
        $c(e, e),
        hg(r, e, Math.PI),
        r) : s > .999999 ? (r[0] = 0,
        r[1] = 0,
        r[2] = 0,
        r[3] = 1,
        r) : (Ia(e, i, o),
        r[0] = e[0],
        r[1] = e[1],
        r[2] = e[2],
        r[3] = 1 + s,
        B0(r, r))
    }
}
)();
(function() {
    var e = Vi()
      , t = Vi();
    return function(n, r, i, o, s, a) {
        return Ba(e, r, s, a),
        Ba(t, i, o, a),
        Ba(n, e, t, 2 * a * (1 - a)),
        n
    }
}
)();
(function() {
    var e = Gc();
    return function(t, n, r, i) {
        return e[0] = r[0],
        e[3] = r[1],
        e[6] = r[2],
        e[1] = i[0],
        e[4] = i[1],
        e[7] = i[2],
        e[2] = -n[0],
        e[5] = -n[1],
        e[8] = -n[2],
        B0(t, yg(t, e))
    }
}
)();
function Sg() {
    var e = new Ce(2);
    return Ce != Float32Array && (e[0] = 0,
    e[1] = 0),
    e
}
function O0(e) {
    var t = new Ce(2);
    return t[0] = e[0],
    t[1] = e[1],
    t
}
function Wc(e, t) {
    var n = new Ce(2);
    return n[0] = e,
    n[1] = t,
    n
}
function cr(e, t) {
    return e[0] = t[0],
    e[1] = t[1],
    e
}
function Af(e, t, n) {
    return e[0] = t,
    e[1] = n,
    e
}
function kf(e, t) {
    return e[0] = Math.floor(t[0]),
    e[1] = Math.floor(t[1]),
    e
}
function Nf(e, t, n) {
    return e[0] = t[0] * n,
    e[1] = t[1] * n,
    e
}
function Cg(e, t) {
    var n = e[0]
      , r = e[1]
      , i = t[0]
      , o = t[1];
    return Math.abs(n - i) <= Lt * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - o) <= Lt * Math.max(1, Math.abs(r), Math.abs(o))
}
(function() {
    var e = Sg();
    return function(t, n, r, i, o, s) {
        var a, l;
        for (n || (n = 2),
        r || (r = 0),
        i ? l = Math.min(i * n + r, t.length) : l = t.length,
        a = r; a < l; a += n)
            e[0] = t[a],
            e[1] = t[a + 1],
            o(e, e, s),
            t[a] = e[0],
            t[a + 1] = e[1];
        return t
    }
}
)();
function te(e, t, n) {
    return e + (t - e) * n
}
function Hn(e, t, n) {
    return xe((e - t) / (n - t))
}
function _g(e, t, n) {
    return Math.min(Math.max(e, t), n)
}
function xe(e) {
    return _g(e, 0, 1)
}
function F0(e, t) {
    let n = 0
      , r = e;
    return t !== void 0 && (n = e,
    r = t),
    Math.floor(Math.random() * (r - n)) + n
}
function Es(e) {
    const t = Math.PI / 180
      , n = Vi();
    return gg(n, n, e[1] * t),
    mg(n, n, e[0] * t),
    vg(n, n, e[2] * t),
    n
}
var On = (e=>(e[e.Flat = 0] = "Flat",
e[e.Positional = 1] = "Positional",
e[e.Music = 2] = "Music",
e))(On || {});
const Oa = [.7, 1, .3];
class W {
    static get musicNode() {
        return this.musicTarget
    }
    static get soundNode() {
        return this.soundTarget
    }
    static get effectsNode() {
        return this.effectTarget
    }
    static get time() {
        return this.context.currentTime
    }
    static get isActive() {
        return this.active
    }
    static get listener() {
        return this.context.listener
    }
    static get audioContext() {
        return this.context
    }
    static init() {
        if (this.context = new AudioContext,
        this.active = !1,
        this.context.state === "suspended") {
            const t = ()=>{
                this.context.resume().then(()=>{
                    console.debug("[AUDIO] Started"),
                    this.active = !0
                }
                ),
                window.removeEventListener("click", t),
                window.removeEventListener("keydown", t)
            }
            ;
            window.addEventListener("click", t),
            window.addEventListener("keydown", t)
        } else
            this.active = !0;
        this.musicTarget = this.context.createGain(),
        this.musicTarget.connect(this.context.destination),
        this.musicTarget.gain.value = .8,
        this.soundTarget = this.context.createGain(),
        this.soundTarget.connect(this.context.destination),
        this.soundTarget.gain.value = 1,
        this.reverbDryGain = this.context.createGain(),
        this.reverbWetGain = this.context.createGain(),
        this.reverbNode = this.context.createConvolver(),
        this.reverbDryGain.gain.value = .9,
        this.reverbWetGain.gain.value = .1,
        this.reverbNode = this.context.createConvolver(),
        this.reverbDryGain.connect(this.context.destination),
        this.reverbWetGain.connect(this.context.destination),
        this.reverbNode.connect(this.reverbWetGain),
        this.effectTarget = this.context.createGain(),
        this.effectTarget.connect(this.reverbDryGain),
        this.effectTarget.connect(this.reverbNode),
        this.effectTarget.gain.value = 1
    }
    static setReverb(t, n) {
        this.reverbNode.buffer = t,
        this.reverbDryGain.gain.value = xe(1 - n),
        this.reverbWetGain.gain.value = xe(n)
    }
    static decodeSoundData(t) {
        return this.context.decodeAudioData(t)
    }
    static createBufferSource() {
        return this.context.createBufferSource()
    }
    static createGain() {
        return this.context.createGain()
    }
    static createPositionalNode() {
        return this.context.createPanner()
    }
    static createPanner() {
        return this.context.createStereoPanner()
    }
    static update(t) {
        this.active && !this.suspended ? this.appearVolume = xe(this.appearVolume + .1 * t) : this.appearVolume = 0,
        this.soundEnabledVolume = xe(this.soundEnabledVolume + (this.soundEnabled ? .1 : -.1) * t),
        this.musicEnabledVolume = xe(this.musicEnabledVolume + (this.musicEnabled ? .1 : -.1) * t),
        this.updateChannels()
    }
    static suspend(t) {
        this.suspended = t,
        this.update(0)
    }
    static setVolume(t, n) {
        this.channelVolume[t] = xe(n)
    }
    static updateChannels() {
        this.musicTarget.gain.value = Oa[2] * this.appearVolume * this.channelVolume[2] * this.musicEnabledVolume,
        this.soundTarget.gain.value = Oa[0] * this.appearVolume * this.channelVolume[0] * this.soundEnabledVolume,
        this.effectTarget.gain.value = Oa[1] * this.appearVolume * this.channelVolume[1] * this.soundEnabledVolume
    }
}
S(W, "context"),
S(W, "musicTarget"),
S(W, "soundTarget"),
S(W, "effectTarget"),
S(W, "reverbDryGain"),
S(W, "reverbWetGain"),
S(W, "reverbNode"),
S(W, "active", !1),
S(W, "channelVolume", [1, 1, 1]),
S(W, "musicEnabledVolume", 1),
S(W, "soundEnabledVolume", 1),
S(W, "appearVolume", 0),
S(W, "suspended", !1),
S(W, "musicEnabled", !0),
S(W, "soundEnabled", !0);
var Vt = {}
  , Zi = {}
  , Qc = {}
  , Yc = {}
  , er = {}
  , or = {};
Object.defineProperty(or, "__esModule", {
    value: !0
});
or.StorageProxy = void 0;
or.StorageProxy = {
    Storage: null
};
var Gr = {};
Object.defineProperty(Gr, "__esModule", {
    value: !0
});
Gr.STORAGE_KEY = void 0;
Gr.STORAGE_KEY = "auth-tokens-".concat("production");
var Rg = fe && fe.__awaiter || function(e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, s) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (m) {
                s(m)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (m) {
                s(m)
            }
        }
        function c(d) {
            d.done ? o(d.value) : i(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
}
  , Tg = fe && fe.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, i, o, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s;
    function a(c) {
        return function(d) {
            return l([c, d])
        }
    }
    function l(c) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; s && (s = 0,
        c[0] && (n = 0)),
        n; )
            try {
                if (r = 1,
                i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i),
                0) : i.next) && !(o = o.call(i, c[1])).done)
                    return o;
                switch (i = 0,
                o && (c = [c[0] & 2, o.value]),
                c[0]) {
                case 0:
                case 1:
                    o = c;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    i = c[1],
                    c = [0];
                    continue;
                case 7:
                    c = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (o = n.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
                        n.label = c[1];
                        break
                    }
                    if (c[0] === 6 && n.label < o[1]) {
                        n.label = o[1],
                        o = c;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2],
                        n.ops.push(c);
                        break
                    }
                    o[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                c = t.call(e, n)
            } catch (d) {
                c = [6, d],
                i = 0
            } finally {
                r = o = 0
            }
        if (c[0] & 5)
            throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
;
Object.defineProperty(er, "__esModule", {
    value: !0
});
er.setAuthTokens = void 0;
var Ag = or
  , kg = Gr
  , Ng = function(e) {
    return Rg(void 0, void 0, void 0, function() {
        var t;
        return Tg(this, function(n) {
            switch (n.label) {
            case 0:
                return [4, (t = Ag.StorageProxy.Storage) === null || t === void 0 ? void 0 : t.set(kg.STORAGE_KEY, JSON.stringify(e))];
            case 1:
                return [2, n.sent()]
            }
        })
    })
};
er.setAuthTokens = Ng;
(function(e) {
    var t = fe && fe.__awaiter || function(p, y, h, E) {
        function x(g) {
            return g instanceof h ? g : new h(function(v) {
                v(g)
            }
            )
        }
        return new (h || (h = Promise))(function(g, v) {
            function w(R) {
                try {
                    C(E.next(R))
                } catch (T) {
                    v(T)
                }
            }
            function _(R) {
                try {
                    C(E.throw(R))
                } catch (T) {
                    v(T)
                }
            }
            function C(R) {
                R.done ? g(R.value) : x(R.value).then(w, _)
            }
            C((E = E.apply(p, y || [])).next())
        }
        )
    }
      , n = fe && fe.__generator || function(p, y) {
        var h = {
            label: 0,
            sent: function() {
                if (g[0] & 1)
                    throw g[1];
                return g[1]
            },
            trys: [],
            ops: []
        }, E, x, g, v;
        return v = {
            next: w(0),
            throw: w(1),
            return: w(2)
        },
        typeof Symbol == "function" && (v[Symbol.iterator] = function() {
            return this
        }
        ),
        v;
        function w(C) {
            return function(R) {
                return _([C, R])
            }
        }
        function _(C) {
            if (E)
                throw new TypeError("Generator is already executing.");
            for (; v && (v = 0,
            C[0] && (h = 0)),
            h; )
                try {
                    if (E = 1,
                    x && (g = C[0] & 2 ? x.return : C[0] ? x.throw || ((g = x.return) && g.call(x),
                    0) : x.next) && !(g = g.call(x, C[1])).done)
                        return g;
                    switch (x = 0,
                    g && (C = [C[0] & 2, g.value]),
                    C[0]) {
                    case 0:
                    case 1:
                        g = C;
                        break;
                    case 4:
                        return h.label++,
                        {
                            value: C[1],
                            done: !1
                        };
                    case 5:
                        h.label++,
                        x = C[1],
                        C = [0];
                        continue;
                    case 7:
                        C = h.ops.pop(),
                        h.trys.pop();
                        continue;
                    default:
                        if (g = h.trys,
                        !(g = g.length > 0 && g[g.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                            h = 0;
                            continue
                        }
                        if (C[0] === 3 && (!g || C[1] > g[0] && C[1] < g[3])) {
                            h.label = C[1];
                            break
                        }
                        if (C[0] === 6 && h.label < g[1]) {
                            h.label = g[1],
                            g = C;
                            break
                        }
                        if (g && h.label < g[2]) {
                            h.label = g[2],
                            h.ops.push(C);
                            break
                        }
                        g[2] && h.ops.pop(),
                        h.trys.pop();
                        continue
                    }
                    C = y.call(p, h)
                } catch (R) {
                    C = [6, R],
                    x = 0
                } finally {
                    E = g = 0
                }
            if (C[0] & 5)
                throw C[1];
            return {
                value: C[0] ? C[1] : void 0,
                done: !0
            }
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isLoggedIn = e.clearAuthTokens = e.getAccessToken = e.getRefreshToken = e.setAccessToken = void 0;
    var r = er
      , i = or
      , o = Gr
      , s = function() {
        return t(void 0, void 0, void 0, function() {
            var p, y;
            return n(this, function(h) {
                switch (h.label) {
                case 0:
                    return [4, (y = i.StorageProxy.Storage) === null || y === void 0 ? void 0 : y.get(o.STORAGE_KEY)];
                case 1:
                    if (p = h.sent(),
                    !p)
                        return [2];
                    try {
                        return [2, JSON.parse(p)]
                    } catch (E) {
                        if (E instanceof SyntaxError)
                            throw E.message = "Failed to parse auth tokens: ".concat(p),
                            E
                    }
                    return [2]
                }
            })
        })
    }
      , a = function(p) {
        return t(void 0, void 0, void 0, function() {
            var y;
            return n(this, function(h) {
                switch (h.label) {
                case 0:
                    return [4, s()];
                case 1:
                    if (y = h.sent(),
                    !y)
                        throw new Error("Unable to update access token since there are no tokens currently stored");
                    return y.accessToken = p,
                    [4, (0,
                    r.setAuthTokens)(y)];
                case 2:
                    return h.sent(),
                    [2]
                }
            })
        })
    };
    e.setAccessToken = a;
    var l = function() {
        return t(void 0, void 0, void 0, function() {
            var p;
            return n(this, function(y) {
                switch (y.label) {
                case 0:
                    return [4, s()];
                case 1:
                    return p = y.sent(),
                    [2, p ? p.refreshToken : void 0]
                }
            })
        })
    };
    e.getRefreshToken = l;
    var c = function() {
        return t(void 0, void 0, void 0, function() {
            var p;
            return n(this, function(y) {
                switch (y.label) {
                case 0:
                    return [4, s()];
                case 1:
                    return p = y.sent(),
                    [2, p ? p.accessToken : void 0]
                }
            })
        })
    };
    e.getAccessToken = c;
    var d = function() {
        return t(void 0, void 0, void 0, function() {
            var p;
            return n(this, function(y) {
                switch (y.label) {
                case 0:
                    return [4, (p = i.StorageProxy.Storage) === null || p === void 0 ? void 0 : p.remove(o.STORAGE_KEY)];
                case 1:
                    return [2, y.sent()]
                }
            })
        })
    };
    e.clearAuthTokens = d;
    var m = function() {
        return t(void 0, void 0, void 0, function() {
            var p;
            return n(this, function(y) {
                switch (y.label) {
                case 0:
                    return [4, (0,
                    e.getRefreshToken)()];
                case 1:
                    return p = y.sent(),
                    [2, !!p]
                }
            })
        })
    };
    e.isLoggedIn = m
}
)(Yc);
function D0(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Mg} = Object.prototype
  , {getPrototypeOf: Kc} = Object
  , ea = (e=>t=>{
    const n = Mg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Tt = e=>(e = e.toLowerCase(),
t=>ea(t) === e)
  , ta = e=>t=>typeof t === e
  , {isArray: $r} = Array
  , Gi = ta("undefined");
function Lg(e) {
    return e !== null && !Gi(e) && e.constructor !== null && !Gi(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const j0 = Tt("ArrayBuffer");
function Pg(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && j0(e.buffer),
    t
}
const Ig = ta("string")
  , tt = ta("function")
  , z0 = ta("number")
  , na = e=>e !== null && typeof e == "object"
  , Bg = e=>e === !0 || e === !1
  , Zo = e=>{
    if (ea(e) !== "object")
        return !1;
    const t = Kc(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Og = Tt("Date")
  , Fg = Tt("File")
  , Dg = Tt("Blob")
  , jg = Tt("FileList")
  , zg = e=>na(e) && tt(e.pipe)
  , Ug = e=>{
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = ea(e)) === "formdata" || t === "object" && tt(e.toString) && e.toString() === "[object FormData]"))
}
  , bg = Tt("URLSearchParams")
  , [Hg,Vg,Zg,Gg] = ["ReadableStream", "Request", "Response", "Headers"].map(Tt)
  , $g = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xi(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    $r(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = o.length;
        let a;
        for (r = 0; r < s; r++)
            a = o[r],
            t.call(null, e[a], a, e)
    }
}
function U0(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , b0 = e=>!Gi(e) && e !== Vn;
function Ul() {
    const {caseless: e} = b0(this) && this || {}
      , t = {}
      , n = (r,i)=>{
        const o = e && U0(t, i) || i;
        Zo(t[o]) && Zo(r) ? t[o] = Ul(t[o], r) : Zo(r) ? t[o] = Ul({}, r) : $r(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && Xi(arguments[r], n);
    return t
}
const Wg = (e,t,n,{allOwnKeys: r}={})=>(Xi(t, (i,o)=>{
    n && tt(i) ? e[o] = D0(i, n) : e[o] = i
}
, {
    allOwnKeys: r
}),
e)
  , Qg = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Yg = (e,t,n,r)=>{
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Kg = (e,t,n,r)=>{
    let i, o, s;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        o = i.length; o-- > 0; )
            s = i[o],
            (!r || r(s, e, t)) && !a[s] && (t[s] = e[s],
            a[s] = !0);
        e = n !== !1 && Kc(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , qg = (e,t,n)=>{
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , Xg = e=>{
    if (!e)
        return null;
    if ($r(e))
        return e;
    let t = e.length;
    if (!z0(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , Jg = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && Kc(Uint8Array))
  , e3 = (e,t)=>{
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1])
    }
}
  , t3 = (e,t)=>{
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , n3 = Tt("HTMLFormElement")
  , r3 = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , Mf = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
  , i3 = Tt("RegExp")
  , H0 = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Xi(n, (i,o)=>{
        let s;
        (s = t(i, o, e)) !== !1 && (r[o] = s || i)
    }
    ),
    Object.defineProperties(e, r)
}
  , o3 = e=>{
    H0(e, (t,n)=>{
        if (tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (tt(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , s3 = (e,t)=>{
    const n = {}
      , r = i=>{
        i.forEach(o=>{
            n[o] = !0
        }
        )
    }
    ;
    return $r(e) ? r(e) : r(String(e).split(t)),
    n
}
  , a3 = ()=>{}
  , l3 = (e,t)=>e != null && Number.isFinite(e = +e) ? e : t
  , Fa = "abcdefghijklmnopqrstuvwxyz"
  , Lf = "0123456789"
  , V0 = {
    DIGIT: Lf,
    ALPHA: Fa,
    ALPHA_DIGIT: Fa + Fa.toUpperCase() + Lf
}
  , c3 = (e=16,t=V0.ALPHA_DIGIT)=>{
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function u3(e) {
    return !!(e && tt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const f3 = e=>{
    const t = new Array(10)
      , n = (r,i)=>{
        if (na(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const o = $r(r) ? [] : {};
                return Xi(r, (s,a)=>{
                    const l = n(s, i + 1);
                    !Gi(l) && (o[a] = l)
                }
                ),
                t[i] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , d3 = Tt("AsyncFunction")
  , h3 = e=>e && (na(e) || tt(e)) && tt(e.then) && tt(e.catch)
  , Z0 = ((e,t)=>e ? setImmediate : t ? ((n,r)=>(Vn.addEventListener("message", ({source: i, data: o})=>{
    i === Vn && o === n && r.length && r.shift()()
}
, !1),
i=>{
    r.push(i),
    Vn.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n=>setTimeout(n))(typeof setImmediate == "function", tt(Vn.postMessage))
  , p3 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Vn) : typeof process < "u" && process.nextTick || Z0
  , A = {
    isArray: $r,
    isArrayBuffer: j0,
    isBuffer: Lg,
    isFormData: Ug,
    isArrayBufferView: Pg,
    isString: Ig,
    isNumber: z0,
    isBoolean: Bg,
    isObject: na,
    isPlainObject: Zo,
    isReadableStream: Hg,
    isRequest: Vg,
    isResponse: Zg,
    isHeaders: Gg,
    isUndefined: Gi,
    isDate: Og,
    isFile: Fg,
    isBlob: Dg,
    isRegExp: i3,
    isFunction: tt,
    isStream: zg,
    isURLSearchParams: bg,
    isTypedArray: Jg,
    isFileList: jg,
    forEach: Xi,
    merge: Ul,
    extend: Wg,
    trim: $g,
    stripBOM: Qg,
    inherits: Yg,
    toFlatObject: Kg,
    kindOf: ea,
    kindOfTest: Tt,
    endsWith: qg,
    toArray: Xg,
    forEachEntry: e3,
    matchAll: t3,
    isHTMLForm: n3,
    hasOwnProperty: Mf,
    hasOwnProp: Mf,
    reduceDescriptors: H0,
    freezeMethods: o3,
    toObjectSet: s3,
    toCamelCase: r3,
    noop: a3,
    toFiniteNumber: l3,
    findKey: U0,
    global: Vn,
    isContextDefined: b0,
    ALPHABET: V0,
    generateString: c3,
    isSpecCompliantForm: u3,
    toJSONObject: f3,
    isAsyncFn: d3,
    isThenable: h3,
    setImmediate: Z0,
    asap: p3
};
function j(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i,
    this.status = i.status ? i.status : null)
}
A.inherits(j, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: A.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const G0 = j.prototype
  , $0 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    $0[e] = {
        value: e
    }
}
);
Object.defineProperties(j, $0);
Object.defineProperty(G0, "isAxiosError", {
    value: !0
});
j.from = (e,t,n,r,i,o)=>{
    const s = Object.create(G0);
    return A.toFlatObject(e, s, function(l) {
        return l !== Error.prototype
    }, a=>a !== "isAxiosError"),
    j.call(s, e.message, t, n, r, i),
    s.cause = e,
    s.name = e.name,
    o && Object.assign(s, o),
    s
}
;
const m3 = null;
function bl(e) {
    return A.isPlainObject(e) || A.isArray(e)
}
function W0(e) {
    return A.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Pf(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = W0(i),
        !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function g3(e) {
    return A.isArray(e) && !e.some(bl)
}
const v3 = A.toFlatObject(A, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function ra(e, t, n) {
    if (!A.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = A.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(E, x) {
        return !A.isUndefined(x[E])
    });
    const r = n.metaTokens
      , i = n.visitor || d
      , o = n.dots
      , s = n.indexes
      , l = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
    if (!A.isFunction(i))
        throw new TypeError("visitor must be a function");
    function c(h) {
        if (h === null)
            return "";
        if (A.isDate(h))
            return h.toISOString();
        if (!l && A.isBlob(h))
            throw new j("Blob is not supported. Use a Buffer instead.");
        return A.isArrayBuffer(h) || A.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h
    }
    function d(h, E, x) {
        let g = h;
        if (h && !x && typeof h == "object") {
            if (A.endsWith(E, "{}"))
                E = r ? E : E.slice(0, -2),
                h = JSON.stringify(h);
            else if (A.isArray(h) && g3(h) || (A.isFileList(h) || A.endsWith(E, "[]")) && (g = A.toArray(h)))
                return E = W0(E),
                g.forEach(function(w, _) {
                    !(A.isUndefined(w) || w === null) && t.append(s === !0 ? Pf([E], _, o) : s === null ? E : E + "[]", c(w))
                }),
                !1
        }
        return bl(h) ? !0 : (t.append(Pf(x, E, o), c(h)),
        !1)
    }
    const m = []
      , p = Object.assign(v3, {
        defaultVisitor: d,
        convertValue: c,
        isVisitable: bl
    });
    function y(h, E) {
        if (!A.isUndefined(h)) {
            if (m.indexOf(h) !== -1)
                throw Error("Circular reference detected in " + E.join("."));
            m.push(h),
            A.forEach(h, function(g, v) {
                (!(A.isUndefined(g) || g === null) && i.call(t, g, A.isString(v) ? v.trim() : v, E, p)) === !0 && y(g, E ? E.concat(v) : [v])
            }),
            m.pop()
        }
    }
    if (!A.isObject(e))
        throw new TypeError("data must be an object");
    return y(e),
    t
}
function If(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function qc(e, t) {
    this._pairs = [],
    e && ra(e, this, t)
}
const Q0 = qc.prototype;
Q0.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Q0.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, If)
    }
    : If;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function y3(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Y0(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || y3
      , i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = A.isURLSearchParams(t) ? t.toString() : new qc(t,n).toString(r),
    o) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class Bf {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        A.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const K0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , E3 = typeof URLSearchParams < "u" ? URLSearchParams : qc
  , w3 = typeof FormData < "u" ? FormData : null
  , x3 = typeof Blob < "u" ? Blob : null
  , S3 = {
    isBrowser: !0,
    classes: {
        URLSearchParams: E3,
        FormData: w3,
        Blob: x3
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Xc = typeof window < "u" && typeof document < "u"
  , Hl = typeof navigator == "object" && navigator || void 0
  , C3 = Xc && (!Hl || ["ReactNative", "NativeScript", "NS"].indexOf(Hl.product) < 0)
  , _3 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , R3 = Xc && window.location.href || "http://localhost"
  , T3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Xc,
    hasStandardBrowserEnv: C3,
    hasStandardBrowserWebWorkerEnv: _3,
    navigator: Hl,
    origin: R3
}, Symbol.toStringTag, {
    value: "Module"
}))
  , We = {
    ...T3,
    ...S3
};
function A3(e, t) {
    return ra(e, new We.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return We.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function k3(e) {
    return A.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function N3(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function q0(e) {
    function t(n, r, i, o) {
        let s = n[o++];
        if (s === "__proto__")
            return !0;
        const a = Number.isFinite(+s)
          , l = o >= n.length;
        return s = !s && A.isArray(i) ? i.length : s,
        l ? (A.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r,
        !a) : ((!i[s] || !A.isObject(i[s])) && (i[s] = []),
        t(n, r, i[s], o) && A.isArray(i[s]) && (i[s] = N3(i[s])),
        !a)
    }
    if (A.isFormData(e) && A.isFunction(e.entries)) {
        const n = {};
        return A.forEachEntry(e, (r,i)=>{
            t(k3(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
function M3(e, t, n) {
    if (A.isString(e))
        try {
            return (t || JSON.parse)(e),
            A.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Ji = {
    transitional: K0,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , o = A.isObject(t);
        if (o && A.isHTMLForm(t) && (t = new FormData(t)),
        A.isFormData(t))
            return i ? JSON.stringify(q0(t)) : t;
        if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t))
            return t;
        if (A.isArrayBufferView(t))
            return t.buffer;
        if (A.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return A3(t, this.formSerializer).toString();
            if ((a = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return ra(a ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1),
        M3(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Ji.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (A.isResponse(t) || A.isReadableStream(t))
            return t;
        if (t && A.isString(t) && (r && !this.responseType || i)) {
            const s = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (s)
                    throw a.name === "SyntaxError" ? j.from(a, j.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: We.classes.FormData,
        Blob: We.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], e=>{
    Ji.headers[e] = {}
}
);
const L3 = A.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , P3 = e=>{
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(s) {
        i = s.indexOf(":"),
        n = s.substring(0, i).trim().toLowerCase(),
        r = s.substring(i + 1).trim(),
        !(!n || t[n] && L3[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Of = Symbol("internals");
function ni(e) {
    return e && String(e).trim().toLowerCase()
}
function Go(e) {
    return e === !1 || e == null ? e : A.isArray(e) ? e.map(Go) : String(e)
}
function I3(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const B3 = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Da(e, t, n, r, i) {
    if (A.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!A.isString(t)) {
        if (A.isString(r))
            return t.indexOf(r) !== -1;
        if (A.isRegExp(r))
            return r.test(t)
    }
}
function O3(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,r)=>n.toUpperCase() + r)
}
function F3(e, t) {
    const n = A.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r=>{
        Object.defineProperty(e, r + n, {
            value: function(i, o, s) {
                return this[r].call(this, t, i, o, s)
            },
            configurable: !0
        })
    }
    )
}
let Qe = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function o(a, l, c) {
            const d = ni(l);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const m = A.findKey(i, d);
            (!m || i[m] === void 0 || c === !0 || c === void 0 && i[m] !== !1) && (i[m || l] = Go(a))
        }
        const s = (a,l)=>A.forEach(a, (c,d)=>o(c, d, l));
        if (A.isPlainObject(t) || t instanceof this.constructor)
            s(t, n);
        else if (A.isString(t) && (t = t.trim()) && !B3(t))
            s(P3(t), n);
        else if (A.isHeaders(t))
            for (const [a,l] of t.entries())
                o(l, a, r);
        else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = ni(t),
        t) {
            const r = A.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return I3(i);
                if (A.isFunction(n))
                    return n.call(this, i, r);
                if (A.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = ni(t),
        t) {
            const r = A.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Da(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function o(s) {
            if (s = ni(s),
            s) {
                const a = A.findKey(r, s);
                a && (!n || Da(r, r[a], a, n)) && (delete r[a],
                i = !0)
            }
        }
        return A.isArray(t) ? t.forEach(o) : o(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || Da(this, this[o], o, t, !0)) && (delete this[o],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return A.forEach(this, (i,o)=>{
            const s = A.findKey(r, o);
            if (s) {
                n[s] = Go(i),
                delete n[o];
                return
            }
            const a = t ? O3(o) : String(o).trim();
            a !== o && delete n[o],
            n[a] = Go(i),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return A.forEach(this, (r,i)=>{
            r != null && r !== !1 && (n[i] = t && A.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i=>r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[Of] = this[Of] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function o(s) {
            const a = ni(s);
            r[a] || (F3(i, s),
            r[a] = !0)
        }
        return A.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
;
Qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(Qe.prototype, ({value: e},t)=>{
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: ()=>e,
        set(r) {
            this[n] = r
        }
    }
}
);
A.freezeMethods(Qe);
function ja(e, t) {
    const n = this || Ji
      , r = t || n
      , i = Qe.from(r.headers);
    let o = r.data;
    return A.forEach(e, function(a) {
        o = a.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
}
function X0(e) {
    return !!(e && e.__CANCEL__)
}
function Wr(e, t, n) {
    j.call(this, e ?? "canceled", j.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
A.inherits(Wr, j, {
    __CANCEL__: !0
});
function J0(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new j("Request failed with status code " + n.status,[j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function D3(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function j3(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, o = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const c = Date.now()
          , d = r[o];
        s || (s = c),
        n[i] = l,
        r[i] = c;
        let m = o
          , p = 0;
        for (; m !== i; )
            p += n[m++],
            m = m % e;
        if (i = (i + 1) % e,
        i === o && (o = (o + 1) % e),
        c - s < t)
            return;
        const y = d && c - d;
        return y ? Math.round(p * 1e3 / y) : void 0
    }
}
function z3(e, t) {
    let n = 0, r = 1e3 / t, i, o;
    const s = (c,d=Date.now())=>{
        n = d,
        i = null,
        o && (clearTimeout(o),
        o = null),
        e.apply(null, c)
    }
    ;
    return [(...c)=>{
        const d = Date.now()
          , m = d - n;
        m >= r ? s(c, d) : (i = c,
        o || (o = setTimeout(()=>{
            o = null,
            s(i)
        }
        , r - m)))
    }
    , ()=>i && s(i)]
}
const ws = (e,t,n=3)=>{
    let r = 0;
    const i = j3(50, 250);
    return z3(o=>{
        const s = o.loaded
          , a = o.lengthComputable ? o.total : void 0
          , l = s - r
          , c = i(l)
          , d = s <= a;
        r = s;
        const m = {
            loaded: s,
            total: a,
            progress: a ? s / a : void 0,
            bytes: l,
            rate: c || void 0,
            estimated: c && a && d ? (a - s) / c : void 0,
            event: o,
            lengthComputable: a != null,
            [t ? "download" : "upload"]: !0
        };
        e(m)
    }
    , n)
}
  , Ff = (e,t)=>{
    const n = e != null;
    return [r=>t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , Df = e=>(...t)=>A.asap(()=>e(...t))
  , U3 = We.hasStandardBrowserEnv ? function() {
    const t = We.navigator && /(msie|trident)/i.test(We.navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function i(o) {
        let s = o;
        return t && (n.setAttribute("href", s),
        s = n.href),
        n.setAttribute("href", s),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
    function(s) {
        const a = A.isString(s) ? i(s) : s;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , b3 = We.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
        const s = [e + "=" + encodeURIComponent(t)];
        A.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
        A.isString(r) && s.push("path=" + r),
        A.isString(i) && s.push("domain=" + i),
        o === !0 && s.push("secure"),
        document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function H3(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function V3(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function eh(e, t) {
    return e && !H3(t) ? V3(e, t) : t
}
const jf = e=>e instanceof Qe ? {
    ...e
} : e;
function tr(e, t) {
    t = t || {};
    const n = {};
    function r(c, d, m) {
        return A.isPlainObject(c) && A.isPlainObject(d) ? A.merge.call({
            caseless: m
        }, c, d) : A.isPlainObject(d) ? A.merge({}, d) : A.isArray(d) ? d.slice() : d
    }
    function i(c, d, m) {
        if (A.isUndefined(d)) {
            if (!A.isUndefined(c))
                return r(void 0, c, m)
        } else
            return r(c, d, m)
    }
    function o(c, d) {
        if (!A.isUndefined(d))
            return r(void 0, d)
    }
    function s(c, d) {
        if (A.isUndefined(d)) {
            if (!A.isUndefined(c))
                return r(void 0, c)
        } else
            return r(void 0, d)
    }
    function a(c, d, m) {
        if (m in t)
            return r(c, d);
        if (m in e)
            return r(void 0, c)
    }
    const l = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: a,
        headers: (c,d)=>i(jf(c), jf(d), !0)
    };
    return A.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
        const m = l[d] || i
          , p = m(e[d], t[d], d);
        A.isUndefined(p) && m !== a || (n[d] = p)
    }),
    n
}
const th = e=>{
    const t = tr({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: a} = t;
    t.headers = s = Qe.from(s),
    t.url = Y0(eh(t.baseURL, t.url), e.params, e.paramsSerializer),
    a && s.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
    let l;
    if (A.isFormData(n)) {
        if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
        else if ((l = s.getContentType()) !== !1) {
            const [c,...d] = l ? l.split(";").map(m=>m.trim()).filter(Boolean) : [];
            s.setContentType([c || "multipart/form-data", ...d].join("; "))
        }
    }
    if (We.hasStandardBrowserEnv && (r && A.isFunction(r) && (r = r(t)),
    r || r !== !1 && U3(t.url))) {
        const c = i && o && b3.read(o);
        c && s.set(i, c)
    }
    return t
}
  , Z3 = typeof XMLHttpRequest < "u"
  , G3 = Z3 && function(e) {
    return new Promise(function(n, r) {
        const i = th(e);
        let o = i.data;
        const s = Qe.from(i.headers).normalize();
        let {responseType: a, onUploadProgress: l, onDownloadProgress: c} = i, d, m, p, y, h;
        function E() {
            y && y(),
            h && h(),
            i.cancelToken && i.cancelToken.unsubscribe(d),
            i.signal && i.signal.removeEventListener("abort", d)
        }
        let x = new XMLHttpRequest;
        x.open(i.method.toUpperCase(), i.url, !0),
        x.timeout = i.timeout;
        function g() {
            if (!x)
                return;
            const w = Qe.from("getAllResponseHeaders"in x && x.getAllResponseHeaders())
              , C = {
                data: !a || a === "text" || a === "json" ? x.responseText : x.response,
                status: x.status,
                statusText: x.statusText,
                headers: w,
                config: e,
                request: x
            };
            J0(function(T) {
                n(T),
                E()
            }, function(T) {
                r(T),
                E()
            }, C),
            x = null
        }
        "onloadend"in x ? x.onloadend = g : x.onreadystatechange = function() {
            !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(g)
        }
        ,
        x.onabort = function() {
            x && (r(new j("Request aborted",j.ECONNABORTED,e,x)),
            x = null)
        }
        ,
        x.onerror = function() {
            r(new j("Network Error",j.ERR_NETWORK,e,x)),
            x = null
        }
        ,
        x.ontimeout = function() {
            let _ = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const C = i.transitional || K0;
            i.timeoutErrorMessage && (_ = i.timeoutErrorMessage),
            r(new j(_,C.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,e,x)),
            x = null
        }
        ,
        o === void 0 && s.setContentType(null),
        "setRequestHeader"in x && A.forEach(s.toJSON(), function(_, C) {
            x.setRequestHeader(C, _)
        }),
        A.isUndefined(i.withCredentials) || (x.withCredentials = !!i.withCredentials),
        a && a !== "json" && (x.responseType = i.responseType),
        c && ([p,h] = ws(c, !0),
        x.addEventListener("progress", p)),
        l && x.upload && ([m,y] = ws(l),
        x.upload.addEventListener("progress", m),
        x.upload.addEventListener("loadend", y)),
        (i.cancelToken || i.signal) && (d = w=>{
            x && (r(!w || w.type ? new Wr(null,e,x) : w),
            x.abort(),
            x = null)
        }
        ,
        i.cancelToken && i.cancelToken.subscribe(d),
        i.signal && (i.signal.aborted ? d() : i.signal.addEventListener("abort", d)));
        const v = D3(i.url);
        if (v && We.protocols.indexOf(v) === -1) {
            r(new j("Unsupported protocol " + v + ":",j.ERR_BAD_REQUEST,e));
            return
        }
        x.send(o || null)
    }
    )
}
  , $3 = (e,t)=>{
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, i;
        const o = function(c) {
            if (!i) {
                i = !0,
                a();
                const d = c instanceof Error ? c : this.reason;
                r.abort(d instanceof j ? d : new Wr(d instanceof Error ? d.message : d))
            }
        };
        let s = t && setTimeout(()=>{
            s = null,
            o(new j(`timeout ${t} of ms exceeded`,j.ETIMEDOUT))
        }
        , t);
        const a = ()=>{
            e && (s && clearTimeout(s),
            s = null,
            e.forEach(c=>{
                c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(c=>c.addEventListener("abort", o));
        const {signal: l} = r;
        return l.unsubscribe = ()=>A.asap(a),
        l
    }
}
  , W3 = function*(e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
        yield e;
        return
    }
    let r = 0, i;
    for (; r < n; )
        i = r + t,
        yield e.slice(r, i),
        r = i
}
  , Q3 = async function*(e, t) {
    for await(const n of Y3(e))
        yield*W3(n, t)
}
  , Y3 = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , zf = (e,t,n,r)=>{
    const i = Q3(e, t);
    let o = 0, s, a = l=>{
        s || (s = !0,
        r && r(l))
    }
    ;
    return new ReadableStream({
        async pull(l) {
            try {
                const {done: c, value: d} = await i.next();
                if (c) {
                    a(),
                    l.close();
                    return
                }
                let m = d.byteLength;
                if (n) {
                    let p = o += m;
                    n(p)
                }
                l.enqueue(new Uint8Array(d))
            } catch (c) {
                throw a(c),
                c
            }
        },
        cancel(l) {
            return a(l),
            i.return()
        }
    },{
        highWaterMark: 2
    })
}
  , ia = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , nh = ia && typeof ReadableStream == "function"
  , K3 = ia && (typeof TextEncoder == "function" ? (e=>t=>e.encode(t))(new TextEncoder) : async e=>new Uint8Array(await new Response(e).arrayBuffer()))
  , rh = (e,...t)=>{
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , q3 = nh && rh(()=>{
    let e = !1;
    const t = new Request(We.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , Uf = 64 * 1024
  , Vl = nh && rh(()=>A.isReadableStream(new Response("").body))
  , xs = {
    stream: Vl && (e=>e.body)
};
ia && (e=>{
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t=>{
        !xs[t] && (xs[t] = A.isFunction(e[t]) ? n=>n[t]() : (n,r)=>{
            throw new j(`Response type '${t}' is not supported`,j.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const X3 = async e=>{
    if (e == null)
        return 0;
    if (A.isBlob(e))
        return e.size;
    if (A.isSpecCompliantForm(e))
        return (await new Request(We.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (A.isArrayBufferView(e) || A.isArrayBuffer(e))
        return e.byteLength;
    if (A.isURLSearchParams(e) && (e = e + ""),
    A.isString(e))
        return (await K3(e)).byteLength
}
  , J3 = async(e,t)=>{
    const n = A.toFiniteNumber(e.getContentLength());
    return n ?? X3(t)
}
  , ev = ia && (async e=>{
    let {url: t, method: n, data: r, signal: i, cancelToken: o, timeout: s, onDownloadProgress: a, onUploadProgress: l, responseType: c, headers: d, withCredentials: m="same-origin", fetchOptions: p} = th(e);
    c = c ? (c + "").toLowerCase() : "text";
    let y = $3([i, o && o.toAbortSignal()], s), h;
    const E = y && y.unsubscribe && (()=>{
        y.unsubscribe()
    }
    );
    let x;
    try {
        if (l && q3 && n !== "get" && n !== "head" && (x = await J3(d, r)) !== 0) {
            let C = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), R;
            if (A.isFormData(r) && (R = C.headers.get("content-type")) && d.setContentType(R),
            C.body) {
                const [T,k] = Ff(x, ws(Df(l)));
                r = zf(C.body, Uf, T, k)
            }
        }
        A.isString(m) || (m = m ? "include" : "omit");
        const g = "credentials"in Request.prototype;
        h = new Request(t,{
            ...p,
            signal: y,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: g ? m : void 0
        });
        let v = await fetch(h);
        const w = Vl && (c === "stream" || c === "response");
        if (Vl && (a || w && E)) {
            const C = {};
            ["status", "statusText", "headers"].forEach(O=>{
                C[O] = v[O]
            }
            );
            const R = A.toFiniteNumber(v.headers.get("content-length"))
              , [T,k] = a && Ff(R, ws(Df(a), !0)) || [];
            v = new Response(zf(v.body, Uf, T, ()=>{
                k && k(),
                E && E()
            }
            ),C)
        }
        c = c || "text";
        let _ = await xs[A.findKey(xs, c) || "text"](v, e);
        return !w && E && E(),
        await new Promise((C,R)=>{
            J0(C, R, {
                data: _,
                headers: Qe.from(v.headers),
                status: v.status,
                statusText: v.statusText,
                config: e,
                request: h
            })
        }
        )
    } catch (g) {
        throw E && E(),
        g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(new j("Network Error",j.ERR_NETWORK,e,h), {
            cause: g.cause || g
        }) : j.from(g, g && g.code, e, h)
    }
}
)
  , Zl = {
    http: m3,
    xhr: G3,
    fetch: ev
};
A.forEach(Zl, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const bf = e=>`- ${e}`
  , tv = e=>A.isFunction(e) || e === null || e === !1
  , ih = {
    getAdapter: e=>{
        e = A.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const i = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let s;
            if (r = n,
            !tv(n) && (r = Zl[(s = String(n)).toLowerCase()],
            r === void 0))
                throw new j(`Unknown adapter '${s}'`);
            if (r)
                break;
            i[s || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(i).map(([a,l])=>`adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? o.length > 1 ? `since :
` + o.map(bf).join(`
`) : " " + bf(o[0]) : "as no adapter specified";
            throw new j("There is no suitable adapter to dispatch the request " + s,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: Zl
};
function za(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Wr(null,e)
}
function Hf(e) {
    return za(e),
    e.headers = Qe.from(e.headers),
    e.data = ja.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    ih.getAdapter(e.adapter || Ji.adapter)(e).then(function(r) {
        return za(e),
        r.data = ja.call(e, e.transformResponse, r),
        r.headers = Qe.from(r.headers),
        r
    }, function(r) {
        return X0(r) || (za(e),
        r && r.response && (r.response.data = ja.call(e, e.transformResponse, r.response),
        r.response.headers = Qe.from(r.response.headers))),
        Promise.reject(r)
    })
}
const oh = "1.7.7"
  , Jc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    Jc[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Vf = {};
Jc.transitional = function(t, n, r) {
    function i(o, s) {
        return "[Axios v" + oh + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
    }
    return (o,s,a)=>{
        if (t === !1)
            throw new j(i(s, " has been removed" + (n ? " in " + n : "")),j.ERR_DEPRECATED);
        return n && !Vf[s] && (Vf[s] = !0,
        console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, s, a) : !0
    }
}
;
function nv(e, t, n) {
    if (typeof e != "object")
        throw new j("options must be an object",j.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const o = r[i]
          , s = t[o];
        if (s) {
            const a = e[o]
              , l = a === void 0 || s(a, o, e);
            if (l !== !0)
                throw new j("option " + o + " must be " + l,j.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new j("Unknown option " + o,j.ERR_BAD_OPTION)
    }
}
const Gl = {
    assertOptions: nv,
    validators: Jc
}
  , qt = Gl.validators;
let $n = class {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Bf,
            response: new Bf
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = tr(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: o} = n;
        r !== void 0 && Gl.assertOptions(r, {
            silentJSONParsing: qt.transitional(qt.boolean),
            forcedJSONParsing: qt.transitional(qt.boolean),
            clarifyTimeoutError: qt.transitional(qt.boolean)
        }, !1),
        i != null && (A.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : Gl.assertOptions(i, {
            encode: qt.function,
            serialize: qt.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = o && A.merge(o.common, o[n.method]);
        o && A.forEach(["delete", "get", "head", "post", "put", "patch", "common"], h=>{
            delete o[h]
        }
        ),
        n.headers = Qe.concat(s, o);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(E) {
            typeof E.runWhen == "function" && E.runWhen(n) === !1 || (l = l && E.synchronous,
            a.unshift(E.fulfilled, E.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(E) {
            c.push(E.fulfilled, E.rejected)
        });
        let d, m = 0, p;
        if (!l) {
            const h = [Hf.bind(this), void 0];
            for (h.unshift.apply(h, a),
            h.push.apply(h, c),
            p = h.length,
            d = Promise.resolve(n); m < p; )
                d = d.then(h[m++], h[m++]);
            return d
        }
        p = a.length;
        let y = n;
        for (m = 0; m < p; ) {
            const h = a[m++]
              , E = a[m++];
            try {
                y = h(y)
            } catch (x) {
                E.call(this, x);
                break
            }
        }
        try {
            d = Hf.call(this, y)
        } catch (h) {
            return Promise.reject(h)
        }
        for (m = 0,
        p = c.length; m < p; )
            d = d.then(c[m++], c[m++]);
        return d
    }
    getUri(t) {
        t = tr(this.defaults, t);
        const n = eh(t.baseURL, t.url);
        return Y0(n, t.params, t.paramsSerializer)
    }
}
;
A.forEach(["delete", "get", "head", "options"], function(t) {
    $n.prototype[t] = function(n, r) {
        return this.request(tr(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
A.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, s, a) {
            return this.request(tr(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: s
            }))
        }
    }
    $n.prototype[t] = n(),
    $n.prototype[t + "Form"] = n(!0)
});
let rv = class sh {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(i=>{
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](i);
            r._listeners = null
        }
        ),
        this.promise.then = i=>{
            let o;
            const s = new Promise(a=>{
                r.subscribe(a),
                o = a
            }
            ).then(i);
            return s.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            s
        }
        ,
        t(function(o, s, a) {
            r.reason || (r.reason = new Wr(o,s,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r=>{
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = ()=>this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new sh(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
;
function iv(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function ov(e) {
    return A.isObject(e) && e.isAxiosError === !0
}
const $l = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries($l).forEach(([e,t])=>{
    $l[t] = e
}
);
function ah(e) {
    const t = new $n(e)
      , n = D0($n.prototype.request, t);
    return A.extend(n, $n.prototype, t, {
        allOwnKeys: !0
    }),
    A.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return ah(tr(e, i))
    }
    ,
    n
}
const le = ah(Ji);
le.Axios = $n;
le.CanceledError = Wr;
le.CancelToken = rv;
le.isCancel = X0;
le.VERSION = oh;
le.toFormData = ra;
le.AxiosError = j;
le.Cancel = le.CanceledError;
le.all = function(t) {
    return Promise.all(t)
}
;
le.spread = iv;
le.isAxiosError = ov;
le.mergeConfig = tr;
le.AxiosHeaders = Qe;
le.formToJSON = e=>q0(A.isHTMLForm(e) ? new FormData(e) : e);
le.getAdapter = ih.getAdapter;
le.HttpStatusCode = $l;
le.default = le;
const {Axios: sv, AxiosError: av, CanceledError: lv, isCancel: cv, CancelToken: uv, VERSION: fv, all: dv, Cancel: hv, isAxiosError: pv, spread: mv, toFormData: gv, AxiosHeaders: vv, HttpStatusCode: yv, formToJSON: Ev, getAdapter: wv, mergeConfig: xv} = le
  , Sv = Object.freeze(Object.defineProperty({
    __proto__: null,
    Axios: sv,
    AxiosError: av,
    AxiosHeaders: vv,
    Cancel: hv,
    CancelToken: uv,
    CanceledError: lv,
    HttpStatusCode: yv,
    VERSION: fv,
    all: dv,
    default: le,
    formToJSON: Ev,
    getAdapter: wv,
    isAxiosError: pv,
    isCancel: cv,
    mergeConfig: xv,
    spread: mv,
    toFormData: gv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Cv = sd(Sv);
function Wl(e) {
    this.message = e
}
Wl.prototype = new Error,
Wl.prototype.name = "InvalidCharacterError";
var Zf = typeof window < "u" && window.atob && window.atob.bind(window) || function(e) {
    var t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1)
        throw new Wl("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var n, r, i = 0, o = 0, s = ""; r = t.charAt(o++); ~r && (n = i % 4 ? 64 * n + r : r,
    i++ % 4) ? s += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0)
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
    return s
}
;
function _v(e) {
    var t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
    case 0:
        break;
    case 2:
        t += "==";
        break;
    case 3:
        t += "=";
        break;
    default:
        throw "Illegal base64url string!"
    }
    try {
        return function(n) {
            return decodeURIComponent(Zf(n).replace(/(.)/g, function(r, i) {
                var o = i.charCodeAt(0).toString(16).toUpperCase();
                return o.length < 2 && (o = "0" + o),
                "%" + o
            }))
        }(t)
    } catch {
        return Zf(t)
    }
}
function $i(e) {
    this.message = e
}
function Rv(e, t) {
    if (typeof e != "string")
        throw new $i("Invalid token specified");
    var n = (t = t || {}).header === !0 ? 0 : 1;
    try {
        return JSON.parse(_v(e.split(".")[n]))
    } catch (r) {
        throw new $i("Invalid token specified: " + r.message)
    }
}
$i.prototype = new Error,
$i.prototype.name = "InvalidTokenError";
const Tv = Object.freeze(Object.defineProperty({
    __proto__: null,
    InvalidTokenError: $i,
    default: Rv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Av = sd(Tv);
var eo = {}
  , to = {}
  , Ua = fe && fe.__awaiter || function(e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, s) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (m) {
                s(m)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (m) {
                s(m)
            }
        }
        function c(d) {
            d.done ? o(d.value) : i(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
}
  , ba = fe && fe.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, i, o, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s;
    function a(c) {
        return function(d) {
            return l([c, d])
        }
    }
    function l(c) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; s && (s = 0,
        c[0] && (n = 0)),
        n; )
            try {
                if (r = 1,
                i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i),
                0) : i.next) && !(o = o.call(i, c[1])).done)
                    return o;
                switch (i = 0,
                o && (c = [c[0] & 2, o.value]),
                c[0]) {
                case 0:
                case 1:
                    o = c;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    i = c[1],
                    c = [0];
                    continue;
                case 7:
                    c = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (o = n.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
                        n.label = c[1];
                        break
                    }
                    if (c[0] === 6 && n.label < o[1]) {
                        n.label = o[1],
                        o = c;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2],
                        n.ops.push(c);
                        break
                    }
                    o[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                c = t.call(e, n)
            } catch (d) {
                c = [6, d],
                i = 0
            } finally {
                r = o = 0
            }
        if (c[0] & 5)
            throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
;
Object.defineProperty(to, "__esModule", {
    value: !0
});
to.BrowserStorageService = void 0;
var kv = function() {
    function e(t) {
        this._storage = t
    }
    return e.prototype.remove = function(t) {
        return Ua(this, void 0, void 0, function() {
            return ba(this, function(n) {
                return this._storage.removeItem(t),
                [2]
            })
        })
    }
    ,
    e.prototype.get = function(t) {
        return Ua(this, void 0, void 0, function() {
            return ba(this, function(n) {
                return [2, this._storage.getItem(t)]
            })
        })
    }
    ,
    e.prototype.set = function(t, n) {
        return Ua(this, void 0, void 0, function() {
            return ba(this, function(r) {
                return this._storage.setItem(t, n),
                [2]
            })
        })
    }
    ,
    e
}();
to.BrowserStorageService = kv;
Object.defineProperty(eo, "__esModule", {
    value: !0
});
eo.getBrowserLocalStorage = void 0;
var Nv = to
  , Mv = function() {
    if (typeof window < "u")
        return new Nv.BrowserStorageService(window.localStorage)
};
eo.getBrowserLocalStorage = Mv;
var no = {};
Object.defineProperty(no, "__esModule", {
    value: !0
});
no.applyStorage = void 0;
var Lv = or
  , Pv = function(e) {
    e && (Lv.StorageProxy.Storage = e)
};
no.applyStorage = Pv;
var Ql = {
    exports: {}
};
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = 1e3
      , r = n * 60
      , i = r * 60
      , o = i * 24
      , s = o * 7
      , a = o * 365.25;
    function l(h, E) {
        try {
            if (typeof h == "string" && h.length > 0)
                return c(h);
            if (typeof h == "number" && isFinite(h))
                return E != null && E.long ? m(h) : d(h);
            throw new Error("Value is not a string or number.")
        } catch (x) {
            const g = y(x) ? `${x.message}. value=${JSON.stringify(h)}` : "An unknown error has occured.";
            throw new Error(g)
        }
    }
    function c(h) {
        if (h = String(h),
        h.length > 100)
            throw new Error("Value exceeds the maximum length of 100 characters.");
        const E = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(h);
        if (!E)
            return NaN;
        const x = parseFloat(E[1])
          , g = (E[2] || "ms").toLowerCase();
        switch (g) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return x * a;
        case "weeks":
        case "week":
        case "w":
            return x * s;
        case "days":
        case "day":
        case "d":
            return x * o;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return x * i;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return x * r;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return x * n;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return x;
        default:
            throw new Error(`The unit ${g} was matched, but no matching case exists.`)
        }
    }
    t.default = l;
    function d(h) {
        const E = Math.abs(h);
        return E >= o ? `${Math.round(h / o)}d` : E >= i ? `${Math.round(h / i)}h` : E >= r ? `${Math.round(h / r)}m` : E >= n ? `${Math.round(h / n)}s` : `${h}ms`
    }
    function m(h) {
        const E = Math.abs(h);
        return E >= o ? p(h, E, o, "day") : E >= i ? p(h, E, i, "hour") : E >= r ? p(h, E, r, "minute") : E >= n ? p(h, E, n, "second") : `${h} ms`
    }
    function p(h, E, x, g) {
        const v = E >= x * 1.5;
        return `${Math.round(h / x)} ${g}${v ? "s" : ""}`
    }
    function y(h) {
        return typeof h == "object" && h !== null && "message"in h
    }
    e.exports = t.default,
    e.exports.default = t.default
}
)(Ql, Ql.exports);
var Iv = Ql.exports;
(function(e) {
    var t = fe && fe.__awaiter || function(C, R, T, k) {
        function O(N) {
            return N instanceof T ? N : new T(function(D) {
                D(N)
            }
            )
        }
        return new (T || (T = Promise))(function(N, D) {
            function z(Y) {
                try {
                    I(k.next(Y))
                } catch (K) {
                    D(K)
                }
            }
            function F(Y) {
                try {
                    I(k.throw(Y))
                } catch (K) {
                    D(K)
                }
            }
            function I(Y) {
                Y.done ? N(Y.value) : O(Y.value).then(z, F)
            }
            I((k = k.apply(C, R || [])).next())
        }
        )
    }
      , n = fe && fe.__generator || function(C, R) {
        var T = {
            label: 0,
            sent: function() {
                if (N[0] & 1)
                    throw N[1];
                return N[1]
            },
            trys: [],
            ops: []
        }, k, O, N, D;
        return D = {
            next: z(0),
            throw: z(1),
            return: z(2)
        },
        typeof Symbol == "function" && (D[Symbol.iterator] = function() {
            return this
        }
        ),
        D;
        function z(I) {
            return function(Y) {
                return F([I, Y])
            }
        }
        function F(I) {
            if (k)
                throw new TypeError("Generator is already executing.");
            for (; D && (D = 0,
            I[0] && (T = 0)),
            T; )
                try {
                    if (k = 1,
                    O && (N = I[0] & 2 ? O.return : I[0] ? O.throw || ((N = O.return) && N.call(O),
                    0) : O.next) && !(N = N.call(O, I[1])).done)
                        return N;
                    switch (O = 0,
                    N && (I = [I[0] & 2, N.value]),
                    I[0]) {
                    case 0:
                    case 1:
                        N = I;
                        break;
                    case 4:
                        return T.label++,
                        {
                            value: I[1],
                            done: !1
                        };
                    case 5:
                        T.label++,
                        O = I[1],
                        I = [0];
                        continue;
                    case 7:
                        I = T.ops.pop(),
                        T.trys.pop();
                        continue;
                    default:
                        if (N = T.trys,
                        !(N = N.length > 0 && N[N.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                            T = 0;
                            continue
                        }
                        if (I[0] === 3 && (!N || I[1] > N[0] && I[1] < N[3])) {
                            T.label = I[1];
                            break
                        }
                        if (I[0] === 6 && T.label < N[1]) {
                            T.label = N[1],
                            N = I;
                            break
                        }
                        if (N && T.label < N[2]) {
                            T.label = N[2],
                            T.ops.push(I);
                            break
                        }
                        N[2] && T.ops.pop(),
                        T.trys.pop();
                        continue
                    }
                    I = R.call(C, T)
                } catch (Y) {
                    I = [6, Y],
                    O = 0
                } finally {
                    k = N = 0
                }
            if (I[0] & 5)
                throw I[1];
            return {
                value: I[0] ? I[1] : void 0,
                done: !0
            }
        }
    }
      , r = fe && fe.__importDefault || function(C) {
        return C && C.__esModule ? C : {
            default: C
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.authTokenInterceptor = e.refreshTokenIfNeeded = void 0;
    var i = Yc
      , o = er
      , s = r(Cv)
      , a = or
      , l = r(Av)
      , c = Gr
      , d = eo
      , m = no
      , p = r(Iv)
      , y = 10
      , h = void 0
      , E = function(C) {
        var R = (0,
        l.default)(C);
        return R.exp
    }
      , x = function(C) {
        var R = E(C);
        return R ? R - Date.now() / 1e3 : -1
    }
      , g = function(C) {
        if (!C)
            return !0;
        var R = x(C);
        return !R || R <= y
    }
      , v = function(C) {
        return t(void 0, void 0, void 0, function() {
            var R, T, k, O, N, D;
            return n(this, function(z) {
                switch (z.label) {
                case 0:
                    return [4, (0,
                    i.getRefreshToken)()];
                case 1:
                    if (R = z.sent(),
                    !R)
                        throw new Error("No refresh token available");
                    z.label = 2;
                case 2:
                    return z.trys.push([2, 8, , 11]),
                    [4, C(R)];
                case 3:
                    return T = z.sent(),
                    typeof T == "object" && (T != null && T.accessToken) ? [4, (0,
                    o.setAuthTokens)(T)] : [3, 5];
                case 4:
                    return z.sent(),
                    [2, T.accessToken];
                case 5:
                    return typeof T != "string" ? [3, 7] : [4, (0,
                    i.setAccessToken)(T)];
                case 6:
                    return z.sent(),
                    [2, T];
                case 7:
                    throw new Error("requestRefresh must either return a string or an object with an accessToken");
                case 8:
                    return k = z.sent(),
                    s.default.isAxiosError(k) ? (O = (N = k.response) === null || N === void 0 ? void 0 : N.status,
                    O === 401 || O === 422 ? [4, (D = a.StorageProxy.Storage) === null || D === void 0 ? void 0 : D.remove(c.STORAGE_KEY)] : [3, 10]) : [3, 10];
                case 9:
                    throw z.sent(),
                    new Error("Got ".concat(O, " on token refresh; clearing both auth tokens"));
                case 10:
                    throw k instanceof Error ? new Error("Failed to refresh auth token: ".concat(k.message)) : new Error("Failed to refresh auth token and failed to parse error");
                case 11:
                    return [2]
                }
            })
        })
    }
      , w = function(C) {
        return t(void 0, void 0, void 0, function() {
            var R;
            return n(this, function(T) {
                switch (T.label) {
                case 0:
                    return [4, (0,
                    i.getAccessToken)()];
                case 1:
                    return R = T.sent(),
                    !R || g(R) ? [4, v(C)] : [3, 3];
                case 2:
                    R = T.sent(),
                    T.label = 3;
                case 3:
                    return [2, R]
                }
            })
        })
    };
    e.refreshTokenIfNeeded = w;
    var _ = function(C) {
        var R = C.header
          , T = R === void 0 ? "Authorization" : R
          , k = C.headerPrefix
          , O = k === void 0 ? "Bearer " : k
          , N = C.requestRefresh
          , D = C.tokenExpireFudge
          , z = D === void 0 ? "10s" : D
          , F = C.getStorage
          , I = F === void 0 ? d.getBrowserLocalStorage : F;
        return y = (0,
        p.default)(typeof z == "string" ? z : "".concat(z, "s")) / 1e3,
        (0,
        m.applyStorage)(I()),
        function(Y) {
            return t(void 0, void 0, void 0, function() {
                var K, ot;
                return n(this, function(P) {
                    switch (P.label) {
                    case 0:
                        return [4, (0,
                        i.getRefreshToken)()];
                    case 1:
                        return P.sent() ? (K = void 0,
                        h ? [4, h] : [3, 3]) : [2, Y];
                    case 2:
                        K = P.sent(),
                        P.label = 3;
                    case 3:
                        if (K)
                            return [3, 7];
                        P.label = 4;
                    case 4:
                        return P.trys.push([4, 6, , 7]),
                        h = (0,
                        e.refreshTokenIfNeeded)(N),
                        [4, h];
                    case 5:
                        return K = P.sent(),
                        h = void 0,
                        [3, 7];
                    case 6:
                        if (ot = P.sent(),
                        h = void 0,
                        ot instanceof Error)
                            throw new Error("Unable to refresh access token for request due to token refresh error: ".concat(ot.message));
                        return [3, 7];
                    case 7:
                        return K && Y.headers && (Y.headers[T] = "".concat(O).concat(K)),
                        [2, Y]
                    }
                })
            })
        }
    };
    e.authTokenInterceptor = _
}
)(Qc);
Object.defineProperty(Zi, "__esModule", {
    value: !0
});
Zi.applyAuthTokenInterceptor = void 0;
var Bv = Qc
  , Ov = function(e, t) {
    if (!e.interceptors)
        throw new Error("invalid axios instance: ".concat(e));
    e.interceptors.request.use((0,
    Bv.authTokenInterceptor)(t))
};
Zi.applyAuthTokenInterceptor = Ov;
var oa = {};
Object.defineProperty(oa, "__esModule", {
    value: !0
});
oa.getBrowserSessionStorage = void 0;
var Fv = to
  , Dv = function() {
    if (typeof window < "u")
        return new Fv.BrowserStorageService(window.sessionStorage)
};
oa.getBrowserSessionStorage = Dv;
var lh = {};
Object.defineProperty(lh, "__esModule", {
    value: !0
});
var ch = {};
Object.defineProperty(ch, "__esModule", {
    value: !0
});
var uh = {};
Object.defineProperty(uh, "__esModule", {
    value: !0
});
(function(e) {
    var t = fe && fe.__createBinding || (Object.create ? function(i, o, s, a) {
        a === void 0 && (a = s);
        var l = Object.getOwnPropertyDescriptor(o, s);
        (!l || ("get"in l ? !o.__esModule : l.writable || l.configurable)) && (l = {
            enumerable: !0,
            get: function() {
                return o[s]
            }
        }),
        Object.defineProperty(i, a, l)
    }
    : function(i, o, s, a) {
        a === void 0 && (a = s),
        i[a] = o[s]
    }
    )
      , n = fe && fe.__exportStar || function(i, o) {
        for (var s in i)
            s !== "default" && !Object.prototype.hasOwnProperty.call(o, s) && t(o, i, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.useAuthTokenInterceptor = void 0;
    var r = Zi;
    e.useAuthTokenInterceptor = r.applyAuthTokenInterceptor,
    n(Yc, e),
    n(Qc, e),
    n(er, e),
    n(Zi, e),
    n(oa, e),
    n(eo, e),
    n(lh, e),
    n(ch, e),
    n(er, e),
    n(uh, e),
    n(no, e)
}
)(Vt);
class ui extends Error {
}
ui.prototype.name = "InvalidTokenError";
function jv(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function zv(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
    case 0:
        break;
    case 2:
        t += "==";
        break;
    case 3:
        t += "=";
        break;
    default:
        throw new Error("base64 string is not of the correct length")
    }
    try {
        return jv(t)
    } catch {
        return atob(t)
    }
}
function Uv(e, t) {
    if (typeof e != "string")
        throw new ui("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new ui(`Invalid token specified: missing part #${n + 1}`);
    let i;
    try {
        i = zv(r)
    } catch (o) {
        throw new ui(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(i)
    } catch (o) {
        throw new ui(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}
const bv = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Hv = (e=21)=>{
    let t = ""
      , n = crypto.getRandomValues(new Uint8Array(e));
    for (; e--; )
        t += bv[n[e] & 63];
    return t
}
;
const Vv = "https://pg.vozwooden.ru/b/woodify/v1"
  , fh = "https://pg.vozwooden.ru/tggame"
  , Ss = "public"
  , Cs = "https://id.vozwooden.ru/realms/vozwooden/protocol/openid-connect"
  , dh = "https://pg.vozwooden.ru"
  , Zv = "https://vozwooden.ru/"
  , hh = "https://t.me/woodify_bot/woodify"
  , Ur = le.create({
    baseURL: Vv
})
  , Gv = async e=>{
    try {
        return (await le.post(`${Cs}/token`, new URLSearchParams({
            grant_type: "refresh_token",
            client_id: Ss,
            refresh_token: e
        }), {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        })).data.access_token
    } catch {
        await tu()
    }
    throw new Error("Could not refresh token")
}
;
Vt.applyAuthTokenInterceptor(Ur, {
    requestRefresh: Gv,
    getStorage: Vt.getBrowserLocalStorage
});
const eu = e=>{
    const t = new URL(fh);
    t.searchParams.set("defaultScreen", e);
    const n = new URLSearchParams({
        response_type: "code",
        client_id: Ss,
        redirect_uri: t.toString(),
        scope: "openid profile email",
        state: Hv()
    });
    window.location.href = `${Cs}/auth?${n}`
}
  , tu = async()=>{
    await Vt.clearAuthTokens(),
    window.location.reload()
}
  , $v = {
    getTokens: (e,t)=>{
        const n = new URL(fh);
        return n.searchParams.set("defaultScreen", t),
        Ur.post(`${Cs}/token`, new URLSearchParams({
            redirect_uri: n.toString(),
            grant_type: "authorization_code",
            client_id: Ss,
            code: e
        }), {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        })
    }
    ,
    logout: async(e,t)=>{
        Ur.post(`${Cs}/logout`, new URLSearchParams({
            client_id: Ss,
            refresh_token: e
        }), {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${t}`
            }
        }).then(tu)
    }
}
  , Wv = {
    authTgUser: e=>Ur.post("/users", e),
    authWVUser: e=>Ur.put(`/users/${e}`)
}
  , Qv = {
    saveScore: e=>Ur.post("/game-results", e)
}
  , Sr = {
    keycloak: $v,
    users: Wv,
    game: Qv
}
  , Yv = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
  , zt = {
    inDay: 1e3 * 60 * 60 * 24,
    inHour: 1e3 * 60 * 60,
    inMinute: 1e3 * 60,
    inSecond: 1e3
}
  , Kv = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
  , Wn = (e,t)=>{
    if (!e)
        return "";
    const n = typeof e == "string" ? new Date(e) : e
      , {fullYear: r, month: i, day: o, hours: s, minutes: a, seconds: l} = {
        fullYear: n.getFullYear().toString(),
        month: n.getMonth(),
        day: n.getDate().toString(),
        hours: n.getHours().toString(),
        minutes: n.getMinutes().toString(),
        seconds: n.getSeconds().toString()
    };
    return t.replace(/YYYY/g, r).replace(/YY/g, r.slice(2)).replace(/MM/g, (i + 1).toString().padStart(2, "0")).replace(/M/g, (i + 1).toString()).replace(/monthD/g, Kv[i]).replace(/month/g, Yv[i]).replace(/DD/g, o.padStart(2, "0")).replace(/D/g, o).replace(/hh/g, s.padStart(2, "0")).replace(/h/g, s).replace(/mm/g, a.padStart(2, "0")).replace(/m/g, a).replace(/ss/g, l.padStart(2, "0")).replace(/s/g, l)
}
  , _s = e=>{
    const t = Math.trunc(e / zt.inHour)
      , n = Math.trunc((e - t * zt.inHour) / zt.inMinute)
      , r = Math.trunc((e - t * zt.inHour - n * zt.inMinute) / zt.inSecond);
    return (t ? [t, n, r] : [n, r]).map(o=>o.toString().padStart(2, "0")).join(":")
}
  , ph = 1e3 * 60 * 60 * 24
  , qv = e=>{
    if (!e)
        return null;
    const n = decodeURIComponent(e).split("&").map(i=>i.split("="))
      , r = Object.fromEntries(n);
    return r.user = JSON.parse(r.user),
    r
}
  , Xv = ()=>{
    var e, t, n;
    (n = (t = (e = window.Telegram) == null ? void 0 : e.WebApp) == null ? void 0 : t.close) == null || n.call(t)
}
  , Rs = 98547373;
window.metricsQueue = [];
window.clearMetricsQueue = ()=>{
    var e;
    if (window.metricsTimer && clearTimeout(window.metricsTimer),
    !window.ym)
        window.metricsTimer = setTimeout(()=>window.clearMetricsQueue(), 1e3);
    else
        for (window.metricsTimer = null; window.metricsQueue.length; )
            (e = window.metricsQueue.pop()) == null || e()
}
;
const Qn = ({target: e, params: t})=>{
    try {
        window.ym ? window.ym(Rs, "reachGoal", e, t) : (window.metricsQueue.push(()=>window.ym(Rs, "reachGoal", e, t)),
        window.clearMetricsQueue())
    } catch (n) {
        console.error(n)
    }
}
  , Jv = e=>{
    try {
        window.ym ? window.ym(Rs, "userParams", e) : (window.metricsQueue.push(()=>window.ym(Rs, "userParams", e)),
        window.clearMetricsQueue())
    } catch (t) {
        console.error(t)
    }
}
  , e4 = e=>{
    const t = localStorage.getItem("firstVisitOfDay")
      , n = t !== null ? new Date(JSON.parse(t)) : null
      , r = new Date;
    (!n || n.getDate() < r.getDate() || n.getMonth() < r.getMonth() || n.getFullYear() < r.getFullYear()) && Qn({
        target: "first-run-bot-in-day",
        params: {
            [e]: Wn(new Date, "DD.MM.YYYY hh:mm:ss")
        }
    }),
    localStorage.setItem("firstVisitOfDay", JSON.stringify(new Date().toISOString()))
}
  , t4 = e=>{
    const t = localStorage.getItem("lastActivity")
      , n = t !== null ? new Date(JSON.parse(t)) : null;
    (!n || Math.abs(n.getTime() - Date.now()) / zt.inHour >= 1) && Qn({
        target: "start-activity",
        params: {
            [e]: Wn(new Date, "DD.MM.YYYY hh:mm:ss")
        }
    }),
    localStorage.setItem("lastActivity", JSON.stringify(new Date().toISOString()))
}
  , n4 = ({children: e})=>{
    const {setScreen: t} = M.useContext(Rn)
      , [n,r] = M.useState(_0)
      , i = M.useMemo(()=>({
        ...n,
        setAuthContext: r
    }), [n])
      , o = (a,l)=>{
        a && Jv({
            UserID: a
        }),
        Qn({
            target: "run-bot",
            params: {
                [a || "null"]: Wn(new Date, "DD.MM.YYYY hh:mm:ss")
            }
        }),
        e4(a || "null"),
        t4(a || "null"),
        a && Qn({
            target: "cs-auth",
            params: {
                [a]: Wn(new Date, "DD.MM.YYYY hh:mm:ss")
            }
        }),
        l && a && Qn({
            target: "referral-auth",
            params: {
                [a]: Wn(new Date, "DD.MM.YYYY hh:mm:ss")
            }
        })
    }
      , s = async()=>{
        var R, T, k, O, N, D, z;
        (k = (T = (R = window.Telegram) == null ? void 0 : R.WebApp) == null ? void 0 : T.disableVerticalSwipes) == null || k.call(T);
        const a = qv((N = (O = window.Telegram) == null ? void 0 : O.WebApp) == null ? void 0 : N.initData)
          , l = (D = a == null ? void 0 : a.user) == null ? void 0 : D.id
          , c = await Vt.isLoggedIn()
          , d = new URLSearchParams(window.location.search)
          , m = d.get("code")
          , p = d.get("defaultScreen")
          , y = new URL(window.location.href);
        y.searchParams.delete("code"),
        y.searchParams.delete("state"),
        y.searchParams.delete("session_state"),
        window.history.replaceState(null, "", y);
        const h = p || X.Menu;
        if (!c && m) {
            try {
                const {data: F} = await Sr.keycloak.getTokens(m, h);
                await Vt.setAuthTokens({
                    accessToken: F.access_token,
                    refreshToken: F.refresh_token
                })
            } catch (F) {
                console.error(F)
            }
            window.location.reload();
            return
        }
        const E = new URL(window.location.href);
        E.searchParams.delete("defaultScreen"),
        window.history.replaceState(null, "", E);
        const x = {
            nextGameAt: null,
            userId: null,
            woodBalance: 0,
            avatarUrl: "",
            username: ""
        };
        let g = !1;
        if (c) {
            const F = (z = Uv(await Vt.getAccessToken() || "")) == null ? void 0 : z.sub;
            F && (x.userId = F)
        }
        if (a)
            try {
                const F = a.start_param ? atob(a.start_param) : null
                  , I = a.user.id.toString()
                  , {data: Y} = await Sr.users.authTgUser({
                    tgId: I,
                    refererTgId: !F || F === I ? null : F
                });
                x.nextGameAt = Y.nextGameAt ? `${Y.nextGameAt}Z` : x.nextGameAt,
                g = !!F
            } catch (F) {
                console.error(F)
            }
        if (c && l)
            try {
                const {data: F} = await Sr.users.authWVUser(l);
                x.nextGameAt = F.nextGameAt ? `${F.nextGameAt}Z` : x.nextGameAt,
                x.woodBalance = F.woodBalance,
                x.avatarUrl = F.avatarUrl,
                x.username = F.username
            } catch (F) {
                console.error(F)
            }
        const v = localStorage.getItem("SAVED_SCORE")
          , w = v ? JSON.parse(v) : null
          , _ = !!(w != null && w.score)
          , C = (w == null ? void 0 : w.savedTime) && Date.now() - new Date(w.savedTime).getTime() <= ph;
        if (_ && C)
            if (c && (a != null && a.user.id))
                try {
                    const {data: F} = await Sr.game.saveScore({
                        tgId: a.user.id.toString(),
                        score: w.score
                    });
                    localStorage.removeItem("SAVED_SCORE"),
                    x.nextGameAt = F.nextGameAt ? `${F.nextGameAt}Z` : x.nextGameAt,
                    x.woodBalance = F.woodBalance
                } catch (F) {
                    console.error(F)
                }
            else
                x.woodBalance = w.score;
        else
            localStorage.removeItem("SAVED_SCORE");
        o(x.userId, g),
        t(h),
        r(F=>({
            ...F,
            ...x,
            telegramData: a,
            isLogged: c
        }))
    }
    ;
    return M.useEffect(()=>{
        var l;
        const a = (l = window.Telegram) == null ? void 0 : l.WebApp.platform;
        a && [].includes(a) ? t(X.DesktopWarning) : s()
    }
    , []),
    f.jsx(ir.Provider, {
        value: i,
        children: e
    })
}
  , r4 = "_button_p2w65_1"
  , i4 = "_baseGradient_p2w65_39"
  , o4 = "_activeGradient_p2w65_39"
  , s4 = "_baseFill_p2w65_42"
  , a4 = "_extra_p2w65_55"
  , fi = {
    button: r4,
    baseGradient: i4,
    activeGradient: o4,
    baseFill: s4,
    extra: a4
}
  , l4 = 16
  , c4 = 9
  , u4 = 26
  , f4 = 33
  , d4 = 10
  , h4 = 6
  , p4 = 5;
function m4(e, t, n) {
    const r = e - 48
      , i = t - 48
      , o = l4
      , s = c4
      , a = u4 / 2
      , l = 2
      , c = f4
      , d = d4
      , m = h4
      , p = p4
      , y = 24
      , h = 24
      , E = [`M ${o + .5 + y}, ${.5 + h}`, `H ${r / 2 - a - s + y}`, `L ${r / 2 - a + h}, ${.5 + s + h}`, `H ${r / 2 + a + y}`, `L ${r / 2 + a + s + y}, ${.5 + h}`, `H ${r - o - .5 + y}`, `L ${r - .5 + y}, ${.5 + o + h}`, `V ${i - o - .5 - l + h}`, `L ${r - o - .5 + y}, ${i - .5 - l + h}`, `H ${.5 + o + y}`, `L ${.5 + y}, ${i - o - .5 - l + h}`, `V ${.5 + o + h}`, "Z"]
      , x = [`M ${c + y}, ${i - .5 + h}`, `L ${c + d + y}, ${i - .5 - m + h}`, `H ${r - c - d + y}`, `L ${r - c + y}, ${i - .5 + h}`, "Z"];
    if (!n)
        for (let g = 0; g < 4; g++)
            x.push(`M ${r / 2 - a - s - g * p + y}, ${s + .5 + h}`, `L ${r / 2 - a - s - p - g * p + y}, ${s + .5 - p + h}`, `M ${r / 2 + a + s + g * p + y}, ${s + .5 + h}`, `L ${r / 2 + a + s + p + g * p + y}, ${s + .5 - p + h}`);
    return {
        outline: E.join(" "),
        extra: x.join(" ")
    }
}
function g4(e=!1) {
    const t = M.useRef(null)
      , n = `btn_${M.useId().replace(/[^0-9a-zA-Z]+/gim, "")}`
      , [r,i] = M.useState({
        outline: "",
        extra: null
    });
    return M.useEffect(()=>{
        const o = t.current;
        if (o) {
            const s = new ResizeObserver(()=>{
                const {width: a, height: l} = o.getBoundingClientRect();
                i(m4(a, l, e))
            }
            );
            return s.observe(o),
            ()=>{
                s.disconnect()
            }
        }
    }
    , [e]),
    f.jsxs("svg", {
        ref: t,
        children: [f.jsxs("defs", {
            children: [f.jsx("filter", {
                id: `${n}_blur`,
                filterUnits: "objectBoundingBox",
                x: "-50%",
                y: "-50%",
                width: "200%",
                height: "200%",
                children: f.jsx("feGaussianBlur", {
                    stdDeviation: "8"
                })
            }), f.jsxs("linearGradient", {
                id: `${n}_fill`,
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 0,
                className: fi.baseFill,
                children: [f.jsx("stop", {
                    stopColor: "var(--button-base-start, #7A04D7)",
                    stopOpacity: 0,
                    offset: 0
                }), f.jsx("stop", {
                    stopColor: "var(--button-base-middle, #74069B)",
                    stopOpacity: 1,
                    offset: .5
                }), f.jsx("stop", {
                    stopColor: "var(--button-base-start, #7A04D7)",
                    stopOpacity: 0,
                    offset: 1
                })]
            }), f.jsxs("radialGradient", {
                id: `${n}_fill_h1`,
                children: [f.jsx("stop", {
                    stopColor: "#370052",
                    stopOpacity: .5,
                    offset: 0
                }), f.jsx("stop", {
                    stopColor: "#1C0029",
                    stopOpacity: 0,
                    offset: 1
                })]
            }), f.jsxs("linearGradient", {
                id: `${n}_fill_h2`,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                children: [f.jsx("stop", {
                    stopColor: "#FF00E5",
                    stopOpacity: .2,
                    offset: 0
                }), f.jsx("stop", {
                    stopColor: "#FF00E5",
                    stopOpacity: 0,
                    offset: 1
                })]
            })]
        }), f.jsx("path", {
            d: r.outline,
            stroke: "none",
            fill: `url(#${n}_fill)`,
            filter: `url(#${n}_blur)`,
            className: fi.baseGradient,
            style: {
                opacity: "var(--button-base-opacity, 1)"
            }
        }), f.jsxs("g", {
            filter: `url(#${n}_blur)`,
            className: fi.activeGradient,
            fill: "none",
            style: {
                opacity: "var(--button-active-opacity, 0)"
            },
            children: [f.jsx("path", {
                d: r.outline,
                stroke: "none",
                fill: `url(#${n}_fill_h1)`
            }), f.jsx("path", {
                d: r.outline,
                stroke: "none",
                fill: `url(#${n}_fill_h2)`
            })]
        }), f.jsx("path", {
            d: r.outline,
            stroke: "#BD00FF",
            fill: "none"
        }), r.extra && f.jsx("path", {
            d: r.extra,
            className: fi.extra,
            stroke: "#BD00FF",
            fill: "#BD00FF"
        })]
    })
}
function Tn({children: e, className: t, ...n}) {
    const r = g4(n.disabled);
    return f.jsxs("button", {
        className: Z(t, fi.button),
        ...n,
        children: [r, f.jsx("span", {
            children: e
        })]
    })
}
const v4 = "_mainLayout_1qex3_1"
  , y4 = "_fadeOut_1qex3_29"
  , Gf = {
    mainLayout: v4,
    "fade-in": "_fade-in_1qex3_1",
    fadeOut: y4
}
  , ro = ({children: e})=>{
    const {exiting: t} = M.useContext(Rn);
    return f.jsx("div", {
        className: Z(Gf.mainLayout, t && Gf.fadeOut),
        id: "main-layout",
        children: e
    })
}
  , E4 = "_desktopWarningPage_biono_1"
  , w4 = "_header_biono_7"
  , x4 = "_title_biono_13"
  , S4 = "_info_biono_22"
  , C4 = "_closeButton_biono_35"
  , ri = {
    desktopWarningPage: E4,
    header: w4,
    title: x4,
    info: S4,
    closeButton: C4
};
function _4() {
    return f.jsx(ro, {
        children: f.jsxs("div", {
            className: ri.desktopWarningPage,
            children: [f.jsxs("div", {
                className: ri.header,
                children: [f.jsx(Me.Logo, {}), f.jsx(V, {
                    className: ri.title,
                    children: "Woodify"
                })]
            }), f.jsxs("div", {
                className: ri.info,
                children: [f.jsx(V, {
                    children: "Дорогой друг"
                }), f.jsx(V, {
                    children: "В Woodify можно зайти только с мобильного телефона "
                })]
            }), f.jsx(Tn, {
                onClick: Xv,
                className: ri.closeButton,
                children: "Понятно"
            })]
        })
    })
}
const R4 = "_boxRate_hagsg_1"
  , T4 = "_rate_hagsg_7"
  , A4 = "_imageWrap_hagsg_12"
  , k4 = "_box_hagsg_1"
  , N4 = "_coin_hagsg_29"
  , Nn = {
    boxRate: R4,
    rate: T4,
    imageWrap: A4,
    box: k4,
    coin: N4
}
  , mh = "/tggame/assets/highlight-box-BcOzhK8x.png"
  , M4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACDCAMAAAB7n0MtAAAAAXNSR0IArs4c6QAAAH5QTFRFR3BM//8n//8U//8K//8H//8F//8E//8C//8C//8C//8C//8B//8B//8B//8B//8B/v0B9ekB+fAF+/YB69IA37gBpEsBumgHxXwR0JAm36Qt1ZQK2qMF47AG6LUh7Lw07b1I8cRe9Mpw9tCC/d2d+NFa9c1D+uc87tAP7dcBgiJORQAAACp0Uk5TAAEEBwwRFx0jKjE5QUpTXWuQ/M666//////////////////////////d2e7DtQAADIdJREFUeNrtm92y27gRhLtB6ufEe5FU1n7/57M3VdlkbeuHZCc6AKoLMyHLzl2qMjoiQErkfOgZgDwkhP/b/4ixL7yBIAC2AiTQtrB+yr4TEXb8L4ysnuhj9AoZq7ST7NzQ+AkUN3ncleieyb5GOxp8Nry+4gP8BIYd7sTIYaGF67qEtpCgiX8IpLtwc/rC4jf3zNbpRukZHPNH89EAhA/EH7QhJKRrzuUjI3vgU3BIWyFdKaV4xRi0MAR/QgkmAaPwhYUso3GostDWCWhFj3usnVuIiPBDxoHDWUIn/JGRcGqNMtQGG2N6vWzva4MiAcMy74I4/52aJByCUmzTgQ0kg3lsHSECD0W1Cqj4rVxVf6H+oZvQTHS1HhfdBZSOSfUFqCAVU8WINnFwmjkEorK6uRmiE1IAM4HLY7N7Y5hTACuOxTBEVRcdQByb7mJPDQ11lyKMYW9wBAlHt6pQF6PLvHosg4heUfygOueOEhbEOgycMSwyjNwwy2AOwziXBwjLMyRlKBNQtF3/QGJjZXFXcE1D85ic5iDJNDkfg39xkKOJHsNBKOvAyHMshZ1YjbSE3IAeF48hiYEB5zAmAhX97Wzo4WAtwDEjCDjpOFbpbWIeZZOrfQrIR9EQDke4lXGRpImW/e4Aie4gqEo4PRQdH3PEtHSpHYDwRUM4HBa7Vq1IKJMQgSC/odRVwK5I89W3GGFIRsJQDBiRIGAI+yhwdyAgNrTk2isJqRvj+VoJQ8gUGrrD7iDlt4ssxAiAjCAqhcZ70IOTKYIGFTPCmABtN9EITkv/ZQpfMcjtMU1KRWYxPMilUSL7TxSyDFC8WApC5L+jxMw5OSIoQEAeqhuPXdtV+EsxAVgKgFXQwBH+ZC4KGoYsJ2ar7SSjF6GPkAQ+fgG4yqctYySWQQ73EdFJeRQILyxEKcJfCGD60jAwOlJCycMHBYdX9p9FGEsj/LVHYf6CsuRoCEcgvsSgr01SIIyRlZiEjyvQbfs7IDuwzx0KX3RRDSJ0De4zRAQb/2YMAySOgaUN2nJ/j0ODODq3EvOGjwsxWEuNzQkRKISkhi/z4FOXI5Kdm4EE/lwcCBLNNBvD7jNHLw5OWg6FC6/wlY9bTyI9N6BcfEp6YaxusF9ZjfGqggonix0G1i7x6wqqvpYFOj9Upot6qpfpM8piLTJJWzYSinKvz0Lk1ysfl96dtC6az1gnPBZMc2lgKDVD7dYsO33ESqSOmVR45eOTaDZ9kz5gA4CCr8Q8g2of/QZuneMwMVC5swr/WQoW4tO6qUGU26YPWAlQDYPz5Ax9YWxQennh1PSwPZ60cyBeCCsodoTLXBGa28kYooDzZ3CV7H9XCgikwlVTyklimvRpW/p5rtxXnU9r+FdaE/8g/7Q2hTG9MvQpaE8Mv6s/pXwAaYqZ+LUnA6aKACJaAf9gmYtQbS6fuQSG3FEJgfBJPKdlDUX5dEf/2rpu5xPWvmoThemFMU3s69s/O0WECFdYCARRBvD88UaA04rpser0QmjdNFFgwvPRMETh8lmrs2IYtfoKBZACtZuU7ELMC7Wtms9YCP8bbwDW42nG41mmUhNje/vtMQjRdTBHeKACekHLMfOXCTUS+oAF9B2d8Ko8mPFYykQA8+PtyyL7T0nRcqL4Ymuoma3bup0+LAvog9h/PXQ1Lsv5w7oCwAJ8SkciOHgRMENOTX8/f/20zKdl/FgCCHZZnBnL/MttK7ArxbsIY6XU6JKwZSkEgKcl3Y/T9LIVXYjeoIVXHydEPUlOFFJ9o79N79oVfVzb56Klv/Bl1y39X7oRNlbVh02DnkXjp338CJuEM+i2qm/H8/nc1Fbk5jxxqdV0AyqaSMyIxnxzBKIeZ1STtjfhQYjAhhYMiicAesJGhTolp4aAXpZWDZzBKPZIarle1g0nifYhihu2Dbysqasx5IbcMdqWuVazDR1G0LltEzYBWwEFCdM6NYoLsAKP7X39bIogiatenWHSA6Pul9rg51beL6dOXXisbazZMAHLNle576xltLCVglDAjJiJhMYgaAUmqKrywpnqOFKFWAAHT4eBthVIgm2X5N4bwaX6P+FlE1bgDQDfhVgrGu6OZV0ekpTo98AE1cig2VvF2FQ/qYA9QaCeeTpIObFB5JPHsTQLmgtt6I0/V7kE+ii+G5TNlxKsEGT4aqvKNRdncCUAFZ1bQIBrz1EQlvNHlIBUIRTiEHoyhiHhQch3IKttOFHA4rtn9zRQZCVcFjB5znvJFGcQdxDiBcLSXqwdZGWLy8XOg0ObpS5JhUH9bI/6wYING3HCiTPnDRD4bCmBqoSk8SjcO0MUAyWvdFXOiTOwUSdq45N6/P6dWrhtC3UCeDzYZJPeIWRhmJI3B+XxIAE+8fL65F33O0968iRaQdXlsX+DFhD0LmPyhoBSgF5KAM8TTiBOXzfgfgdPPn8KFPFDJkAEUaDYO6zEQNAOr0fNwSeeeHx7spTtRfHgGSDpC5tdU5q6U8C9B3g2UcY61wutE06324Mky3b7jjMeeKeTBPHt4MEgByJJKBRHHQglbOv75APgHbrf/nHbatOL7r9/vwv3t6k1Td8hQODXlA9ZYGD2pjRg0r4F3K+1pSc97rhBNaEIiEW6gzfcMOFx0vOEa3gwaSFzh6NKGtpUXwlMuFQtlkmSABaS6NNNIEkETsApzZrR7gBA9usJ+rvaSSKRdYzECVudUkSiOiXYZ/PUHS4XfKebkhDsSXWcqNBZJxdfW3kXz1cI4FRdwg0H+QKpjbsStxpKRoSocvVeJPUeaOUdwgpdy4f4wpixsbBq2C7yyKYHiOsFEre27xdA0OiecQIKfQeRiPfM6uJyBVrDqCu2x5PYSrtCJfCsJJTA0xXQnVtzIP6x+m7R3j285j/fJKFB5l9EY1wF3Z9A2eZl5r8BZgpYygZgvhL83hGAjbfnhnjnKj4AoegZCQMHYYzzm+CnHHp7YWiZlxnLTL2DLPNSEb4VqcsAogsBmSVqARBe5Hg0nPMbBPqZ/ZuAmwAbhYAAgbenDu9ZheGIIR5BjjK/QewUoP4UMHh5IRDyKM/bIh3J4PvK9NO4yOHXO8ZVMLExIoIo6oWgJUkwMPSCFjk/exsTNGCowBjXjiAKFCTy+yqhS4AsBFwAbCC5f+TXTGMARXhhcHshoEZADeG2dI/xDnt6+APFySrHHOD8JoDG0AcB+EZKqNYRzBBzMkeje1ekGINhjvlNIo0BDmecDeWmBcgMUQi/PW1DR7e3QVqc+SoZY6K2jBDcZiH8OJD1bZakRqboGAXJNrznY2UI3vey0k/gDGCKlBheBzhfBGPU5sgIgcKVAFFrHqxEg+xwWAtg5kWk2guQwPsiHDGktASUp1v6nQOSnhFPPUPFhBBBAsOYFtT4hNgEUQgDdG5yugqk+I6gpSEEBiGlgxCezaI2ZpxiBooE9iiMMV+EFVNDSEoEBi/9ZYpK9zoPB66EgTJfANwW5clFMkgeoUxM9GdgASCAuDSDzzhp6uGOEsYwgscoZ8dBfmYZLGGYgSu7S5VwAU5V71P4VUiYy3GgRCvyVEvlzPDWMN3MnUCErG8mOZ5cZNMORshIv7trdiRDmMCeQy3MoAwYiSIlA/2w3h1TVC3ynLNc7GihgJGL2D3RSZimrTv1XckqGCBz+B38Ox4cZgsTdGcZk9OVnK1pDrtcilGGHAuPU6LAceK4KZhwKIatPzEnNAcMFOHEHCYPH2BQTOlA7XEk9/KIluby12qjAK0y8VMzheUyRCCJAbl7+sgaJgoPBK6lalAjNTl7N5Sn7cNHDOEA8zIBUPSFlTGiHgbx8D7MmHZiUoP7qHwmQDalIstgBjtlq9OSHovhou9IiEogwwrVpO7dQR5tfXSlxIiRycWPSYEsA2Dp8zEFpBl5x/6pMZYZgR2FamtsK9SQmJYHPngavlwejttBhaSDB+t4tT3+nIuQ3R54791JQQqXFPyxp88jPCoLM9F9KsteGfIZ2WSNBW+rRa96wkX2IDgR5O3KRBS8p+hJjUmNKrBlsRICMoTXBQ9cNhrx2LRTh3J7k9FIYFsdfppqm17vqUzRymCkDaR7Guv78HeahPfhwe9FjRSMjaDQuwMA9y8EsuYd2Wj+zWwry6HR7Xf3cs3VIzXM4LAkK+xtLqVFLBusg9WNCNliZlgea5tdBozxzM+gMfhjDDQzrRHZygMDaaet8MIg+2ZvrTZgIM9ttlvL133RGLBr4ieMwXdTmSFQBGmfg+aG8PpPE9DtcrO6Phwh+w4cksEakUcQ/wJ0V1N6Fd0q+QAAAABJRU5ErkJggg=="
  , nu = ({boxCount: e, woodCount: t, className: n})=>f.jsxs("div", {
    className: Z(Nn.boxRate, n),
    children: [f.jsxs("div", {
        className: Nn.rate,
        children: [e, f.jsx("div", {
            className: Z(Nn.imageWrap, Nn.box),
            children: f.jsx("img", {
                src: mh,
                alt: ""
            })
        })]
    }), "=", f.jsxs("div", {
        className: Nn.rate,
        children: [t, f.jsx("div", {
            className: Z(Nn.imageWrap, Nn.coin),
            children: f.jsx("img", {
                src: M4,
                alt: ""
            })
        })]
    })]
})
  , L4 = "_modalOverlay_key7b_1"
  , P4 = "_active_key7b_19"
  , I4 = "_card_key7b_23"
  , B4 = "_modal_key7b_1"
  , O4 = "_closeButton_key7b_32"
  , F4 = "_title_key7b_38"
  , ii = {
    modalOverlay: L4,
    active: P4,
    card: I4,
    modal: B4,
    closeButton: O4,
    title: F4
};
function ru({active: e, children: t, onClose: n, className: r, modalClassName: i}) {
    return f.jsx("div", {
        className: Z(ii.modalOverlay, e && ii.active),
        children: f.jsxs(Qt, {
            className: Z(ii.modal, i),
            classNameContent: ii.card__body,
            borderType: Ae.DefaultModal,
            fillType: ue.VioletBright,
            children: [f.jsx("button", {
                className: ii.closeButton,
                onClick: n,
                children: f.jsx(Me.Close, {})
            }), f.jsx("div", {
                className: r,
                children: t
            })]
        })
    })
}
const D4 = 1e3
  , j4 = "_timer_1e55g_1"
  , z4 = "_time_1e55g_1"
  , $f = {
    timer: j4,
    time: z4
}
  , iu = ({timeTo: e, remainingTime: t, onTimerEnd: n, className: r, timeCassName: i, active: o=!0})=>{
    const s = M.useRef(!1)
      , a = M.useRef()
      , [l,c] = M.useState(Date.now());
    M.useEffect(()=>{
        (e ? new Date(e).getTime() - l : 0) <= 0 && !s.current && (s.current = !0,
        n == null || n())
    }
    , [l, n, e]),
    M.useEffect(()=>{
        (e ? new Date(e).getTime() - Date.now() : 0) > 0 && (s.current = !1)
    }
    , [e, o]),
    M.useEffect(()=>{
        if (o) {
            const m = ()=>c(Date.now());
            return a.current = setInterval(m, D4),
            ()=>{
                a.current && clearTimeout(a.current)
            }
        }
    }
    , [o]);
    const d = e ? new Date(e).getTime() - l : t || 0;
    return d <= 0 ? f.jsx(f.Fragment, {
        children: _s(0)
    }) : f.jsxs("div", {
        className: Z($f.timer, r),
        children: [f.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [f.jsx("path", {
                d: "M12 22C16.6944 22 20.5 18.1944 20.5 13.5C20.5 8.8056 16.6944 5 12 5C7.3056 5 3.5 8.8056 3.5 13.5C3.5 18.1944 7.3056 22 12 22Z",
                stroke: "#FFE4F9",
                strokeWidth: "1.17475",
                strokeLinejoin: "bevel"
            }), f.jsx("path", {
                d: "M9 0.883789H15",
                stroke: "#FFE4F9",
                strokeWidth: "1.17475",
                strokeLinecap: "square",
                strokeLinejoin: "bevel"
            }), f.jsx("path", {
                d: "M12 9.5V13.5",
                stroke: "#FFE4F9",
                strokeWidth: "1.17475",
                strokeLinecap: "square",
                strokeLinejoin: "bevel"
            }), f.jsx("path", {
                d: "M16 13.5H12",
                stroke: "#FFE4F9",
                strokeWidth: "1.17475",
                strokeLinecap: "square",
                strokeLinejoin: "bevel"
            }), f.jsx("path", {
                d: "M12 2V4",
                stroke: "#FFE4F9",
                strokeWidth: "1.17475",
                strokeLinecap: "square",
                strokeLinejoin: "bevel"
            })]
        }), f.jsx("span", {
            className: i || $f.time,
            children: _s(d)
        })]
    })
}
  , U4 = "_pausePopUpModal_mv6l4_1"
  , b4 = "_pausePopUp_mv6l4_1"
  , H4 = "_title_mv6l4_16"
  , V4 = "_description_mv6l4_20"
  , Z4 = "_result_mv6l4_25"
  , G4 = "_resultTitle_mv6l4_32"
  , $4 = "_rate_mv6l4_37"
  , W4 = "_remainingTime_mv6l4_48"
  , Q4 = "_timer_mv6l4_55"
  , Y4 = "_continueButton_mv6l4_64"
  , K4 = "_exitButton_mv6l4_69"
  , gt = {
    pausePopUpModal: U4,
    pausePopUp: b4,
    title: H4,
    description: V4,
    result: Z4,
    resultTitle: G4,
    rate: $4,
    remainingTime: W4,
    timer: Q4,
    continueButton: Y4,
    exitButton: K4
}
  , br = e=>new Intl.NumberFormat("ru").format(e);
function q4({active: e, onContinue: t, onMenu: n, time: r, score: i}) {
    const {userId: o} = M.useContext(ir)
      , s = ()=>{
        Qn({
            target: "end-game",
            params: {
                [o || "null"]: {
                    [Wn(new Date, "DD.MM.YYYY hh:mm:ss")]: {
                        [_s((120 - r) * zt.inSecond)]: i
                    }
                }
            }
        }),
        n()
    }
    ;
    return f.jsxs(ru, {
        active: e,
        onClose: t,
        className: gt.pausePopUp,
        modalClassName: gt.pausePopUpModal,
        children: [f.jsx(V, {
            design: "header-l",
            as: "h3",
            className: gt.title,
            children: "Выход"
        }), f.jsx(V, {
            design: "text-m",
            className: gt.description,
            children: "Если ты выйдешь из игры, то потеряешь прогресс за сегодня"
        }), f.jsxs(Qt, {
            fillType: ue.Transparent,
            className: gt.result,
            children: [f.jsx(V, {
                design: "text-l",
                className: gt.resultTitle,
                children: "Твой прогресс за сегодня"
            }), f.jsx(nu, {
                boxCount: br(i),
                woodCount: br(i),
                className: gt.rate
            }), f.jsxs(V, {
                className: gt.remainingTime,
                children: ["Осталось:", " ", f.jsx(iu, {
                    active: !1,
                    remainingTime: r * 1e3,
                    className: gt.timer,
                    timeCassName: Ct["header-xxs-mono"]
                })]
            })]
        }), f.jsx(Tn, {
            onClick: ()=>t(),
            className: gt.continueButton,
            children: "Продолжить игру"
        }), f.jsx("button", {
            onClick: s,
            className: Z(Ct["control-s"], gt.exitButton),
            children: "Да, выйти"
        })]
    })
}
const Xt = 4
  , Jt = 16
  , Ao = 45
  , Ha = 8
  , en = 22
  , ko = 4
  , X4 = 7;
function J4(e, t) {
    const n = [`M ${Jt + .5}, ${.5}`, `H ${e - Jt - .5}`, `L ${e - .5}, ${Jt + .5}`, `V ${t - .5 - Jt}`, `L ${e - .5 - Jt}, ${t - .5}`, `H ${e / 2 + Ao}`, `L ${e / 2 + Ao - Ha}, ${t - Ha - .5}`, `H ${e / 2 - Ao + Ha}`, `L ${e / 2 - Ao}, ${t - .5}`, `H ${Jt + .5}`, `L ${.5}, ${t - Jt - .5}`, `V ${Jt + .5}`, "Z"]
      , r = [];
    for (let a = 0; a < X4; a++)
        r.push(`M ${e / 2 + en / 2 - 4 + (a + 1) * 3}, ${t - ko - .5}`, `L ${e / 2 + en / 2 + (a + 1) * 3}, ${t - .5}`, `M ${e / 2 - en / 2 + 4 - (a + 1) * 3}, ${t - ko - .5}`, `L ${e / 2 - en / 2 - (a + 1) * 3}, ${t - .5}`);
    r.push(`M ${e / 2 + en / 2 - 4}, ${t - ko - .5}`, `L ${e / 2 + en / 2}, ${t - .5}`, `H ${e / 2 - en / 2}`, `L ${e / 2 - en / 2 + 4}, ${t - ko - .5}`, "Z");
    const i = 80
      , o = 20
      , s = [`M ${Xt + .5}, ${.5}`, `H ${i - Xt - .5}`, `L ${i - .5}, ${Xt + .5}`, `V ${o - .5 - Xt}`, `L ${i - .5 - Xt}, ${o - .5}`, `H ${Xt + .5}`, `L ${.5}, ${o - .5 - Xt}`, `V ${Xt + .5}`, "Z"];
    return {
        outline: n.join(" "),
        extra: r.join(" "),
        timer: s.join(" ")
    }
}
const e5 = "_block_sztb0_1"
  , t5 = "_hidden_sztb0_7"
  , n5 = "_block__content_sztb0_17"
  , r5 = "_score_sztb0_45"
  , i5 = "_active_sztb0_59"
  , o5 = "_block__timer_sztb0_63"
  , s5 = "_background_sztb0_82"
  , Mn = {
    block: e5,
    hidden: t5,
    block__content: n5,
    score: r5,
    active: i5,
    block__timer: o5,
    background: s5
};
function a5({score: e, time: t, onPauseButton: n, visible: r}) {
    const [i,o] = M.useState({
        outline: "",
        extra: "",
        timer: ""
    })
      , [s,a] = M.useState(!1)
      , l = M.useRef(null)
      , c = M.useRef(null)
      , d = M.useMemo(()=>{
        const p = Math.floor(t / 60)
          , y = t % 60;
        return `${p.toString().padStart(2, "0")}:${y.toString().padStart(2, "0")}`
    }
    , [t])
      , m = M.useContext(C0);
    return M.useEffect(()=>{
        const p = l.current
          , y = c.current;
        if (p && y) {
            const h = new ResizeObserver(()=>{
                const {width: E, height: x} = p.getBoundingClientRect();
                o(J4(E, x))
            }
            );
            return h.observe(p),
            h.observe(y),
            ()=>{
                h.disconnect()
            }
        }
    }
    , []),
    M.useEffect(()=>{
        if (e !== 0) {
            a(!0);
            const p = setTimeout(()=>{
                a(!1)
            }
            , 10);
            return ()=>{
                clearTimeout(p)
            }
        }
    }
    , [e]),
    f.jsxs("div", {
        className: Z(Mn.block, !r && Mn.hidden),
        ref: l,
        children: [f.jsxs("svg", {
            children: [f.jsxs("defs", {
                children: [f.jsxs("linearGradient", {
                    id: "score_border",
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1,
                    children: [f.jsx("stop", {
                        stopColor: "#1E0D34",
                        offset: "0"
                    }), f.jsx("stop", {
                        stopColor: "#44147E",
                        offset: "1"
                    })]
                }), f.jsxs("radialGradient", {
                    id: "score_fill",
                    children: [f.jsx("stop", {
                        stopColor: "#370052",
                        offset: "0"
                    }), f.jsx("stop", {
                        stopColor: "#1C0029",
                        offset: "0.8"
                    })]
                })]
            }), f.jsx("path", {
                d: i.outline,
                fill: "url('#score_fill')",
                stroke: "url('#score_border')"
            }), f.jsx("path", {
                d: i.extra,
                fill: "#BD00FF",
                stroke: "#BD00FF"
            })]
        }), f.jsxs("div", {
            className: Mn.block__content,
            children: [f.jsx("button", {
                onClick: ()=>n(),
                children: f.jsx(Me.ChevronLeft, {})
            }), f.jsxs("div", {
                className: Z(Mn.score, s && Mn.active),
                children: [br(e) ?? 0, f.jsx(Me.WoodCoin, {})]
            }), f.jsx("button", {
                onClick: ()=>m.setEnabled(!m.enabled),
                children: m.enabled ? f.jsx(Me.SoundEnabled, {}) : f.jsx(Me.SoundDisabled, {})
            })]
        }), f.jsxs("div", {
            className: Mn.block__timer,
            ref: c,
            children: [f.jsx("svg", {
                className: Mn.background,
                children: f.jsx("path", {
                    d: i.timer,
                    fill: "#8F00FF",
                    stroke: "none"
                })
            }), f.jsx(Me.StopWatch, {}), f.jsx("span", {
                children: d
            })]
        })]
    })
}
const l5 = "/tggame/assets/game-Cv7km7I3.rcs"
  , c5 = "/tggame/assets/music-C8k99gf9.rcs";
class u5 {
    constructor() {
        S(this, "planes", []);
        for (let t = 0; t < 6; t++)
            this.planes[t] = M0()
    }
    rebuild(t, n) {
        const r = qe();
        xi(r, t, n),
        Ym(r, r);
        const i = this.extractPlanes(r);
        for (let o = 0; o < 6; o++)
            I0(this.planes[o], i[o][0], i[o][1], i[o][2], i[o][3]),
            ug(this.planes[o], this.planes[o], 1 / Math.hypot(i[o][0], i[o][1], i[o][2]))
    }
    sphereCoordsVisible(t, n) {
        const [r,i,o] = t;
        for (let s = 0; s < 6; s++) {
            const a = this.planes[s];
            if (r * a[0] + i * a[1] + o * a[2] + a[3] <= -n)
                return !1
        }
        return !0
    }
    sphereVisible(t) {
        return this.sphereCoordsVisible(t.center, t.radius)
    }
    extractPlanes(t, n=0, r=1) {
        return [[t[12] + t[0], t[13] + t[1], t[14] + t[2], t[15] + t[3]], [t[12] - t[0], t[13] - t[1], t[14] - t[2], t[15] - t[3]], [t[12] + t[4], t[13] + t[5], t[14] + t[6], t[15] + t[7]], [t[12] - t[4], t[13] - t[5], t[14] - t[6], t[15] - t[7]], [n * t[12] + t[8], n * t[13] + t[9], n * t[14] + t[10], n * t[15] + t[11]], [r * t[12] - t[8], r * t[13] - t[9], r * t[14] - t[10], r * t[15] - t[11]]]
    }
}
let $o, u;
const on = Wc(32, 32)
  , f5 = Wc(32, 32)
  , d5 = ()=>{
    const {width: t, height: n} = $o.getBoundingClientRect();
    $o.width = t * 1,
    $o.height = n * 1,
    Af(on, t * 1, n * 1),
    Af(f5, t, n)
}
  , h5 = (e,t=!1)=>{
    let n = null;
    const r = ["webgl2", "webgl", "experimental-webgl"];
    t && r.shift();
    for (const i of r)
        if (n = e.getContext(i, {
            alpha: !0,
            antialias: !1,
            depth: !1,
            powerPreference: "high-performance",
            premultipliedAlpha: !1,
            preserveDrawingBuffer: !1,
            stencil: !1
        }),
        n)
            break;
    n && (u = n),
    $o = e
}
;
var p5 = `#version 300 es
DEFINE_LIST;
#define gl_FragColor outColor
#define varying in
#define texture2D texture
precision highp float;

#ifdef OFFSCREEN_PASS
layout(location=0) out vec4 fragDiffuse;
layout(location=1) out vec4 fragPosition;
layout(location=2) out vec4 fragNormal;
layout(location=3) out vec4 fragDistance;
#else
out vec4 outColor;
#endif`
  , m5 = `#version 300 es
DEFINE_LIST;
precision highp float;

#define attribute in
#define varying out

uniform mat4 projMat;
uniform mat4 viewMat;
uniform mat4 modelMat;`;
const g5 = 5126
  , v5 = 35664
  , y5 = 35665
  , E5 = 35666
  , w5 = 5124
  , x5 = 35667
  , S5 = 35668
  , C5 = 35669
  , _5 = 35670
  , R5 = 35671
  , T5 = 35672
  , A5 = 35673
  , k5 = 35674
  , N5 = 35675
  , M5 = 35676
  , L5 = 35678
  , P5 = 35680
  , I5 = 35679
  , B5 = 35682
  , O5 = 5125
  , F5 = 36294
  , D5 = 36295
  , j5 = 36296
  , z5 = 36298
  , U5 = 36299
  , b5 = 36300
  , H5 = 36306
  , V5 = 36307
  , Z5 = 36308
  , Re = class Re {
    constructor(t, n, r) {
        S(this, "vertexCode");
        S(this, "fragmentCode");
        S(this, "vertexShader");
        S(this, "fragmentShader");
        S(this, "program");
        S(this, "uniforms", []);
        S(this, "uniformSetters");
        S(this, "attributes");
        S(this, "forceAttributes");
        S(this, "options");
        S(this, "modelMatrix");
        S(this, "textureQuota", []);
        S(this, "boundAttributes", []);
        S(this, "indexBuffer", null);
        const {defines: i, forceAttribIndices: o} = r ?? {};
        this.options = r ?? {},
        this.fragmentCode = t,
        this.vertexCode = n,
        this.modelMatrix = bn(qe()),
        this.uniforms = [],
        this.attributes = {},
        this.vertexShader = null,
        this.fragmentShader = null,
        this.program = null,
        this.forceAttributes = o ?? {},
        this.uniformSetters = {};
        try {
            this.vertexShader = this.createShader(this.prefixVertexCode(i ?? {}), u.VERTEX_SHADER),
            this.fragmentShader = this.createShader(this.prefixFragmentCode(i ?? {}), u.FRAGMENT_SHADER),
            this.program = this.createProgram(),
            u.useProgram(this.program);
            const s = u.getProgramParameter(this.program, u.ACTIVE_UNIFORMS);
            for (let l = 0; l < s; l++) {
                const c = u.getActiveUniform(this.program, l);
                c && this.uniforms.push({
                    name: c.name,
                    size: c.size,
                    type: c.type,
                    location: u.getUniformLocation(this.program, c.name)
                })
            }
            this.uniformSetters = this.parseUniformTree(this.uniforms);
            const a = u.getProgramParameter(this.program, u.ACTIVE_ATTRIBUTES);
            for (let l = 0; l < a; l++) {
                const c = u.getActiveAttrib(this.program, l);
                c && (this.attributes[c.name] = u.getAttribLocation(this.program, c.name))
            }
        } catch (s) {
            console.error(s)
        }
        u.useProgram(null)
    }
    static resetStats() {
        this.trianglesCount = 0,
        this.drawCallCount = 0
    }
    static getStats() {
        return [this.drawCallCount, this.trianglesCount]
    }
    static updateCamera(t, n) {
        this.viewMatrix = t,
        this.projMatrix = n
    }
    uniform(t) {
        const n = this.uniforms.find(r=>r.name === t);
        return n ? n.location : null
    }
    attribute(t) {
        return this.attributes[t] ?? -1
    }
    setBuffer(t, n, r, i, o=!1, s=0, a=0, l=!1, c=!1) {
        const d = this.attribute(t);
        d !== -1 && (u.enableVertexAttribArray(d),
        u.bindBuffer(u.ARRAY_BUFFER, n),
        l ? u.vertexAttribIPointer(d, r, i, s, a) : u.vertexAttribPointer(d, r, i, o, s, a),
        u.vertexAttribDivisor(d, c ? 1 : 0),
        this.boundAttributes.includes(d) || this.boundAttributes.push(d))
    }
    draw(t, n, r=u.TRIANGLES, i=u.UNSIGNED_SHORT, o=0, s=0) {
        t !== this.indexBuffer && (u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, t),
        this.indexBuffer = t),
        s > 0 ? (u.drawElementsInstanced(r, n, i, o, s),
        r === u.TRIANGLES && (Re.trianglesCount += n / 3 * s)) : (u.drawElements(r, n, i, o),
        r === u.TRIANGLES && (Re.trianglesCount += n / 3)),
        Re.drawCallCount++
    }
    drawArrays(t, n=u.TRIANGLES, r=0, i=0) {
        i > 0 ? (u.drawArraysInstanced(n, r, t, i),
        n === u.TRIANGLES && (Re.trianglesCount += t / 3 * i)) : (u.drawArrays(n, r, t),
        n === u.TRIANGLES && (Re.trianglesCount += t / 3)),
        Re.drawCallCount++
    }
    setTexture(t, n, r=u.TEXTURE_2D) {
        const i = this.uniforms.find(o=>o.name === t);
        i && this.bindTexture(i, n, r)
    }
    updateMatrix(t) {
        this.modelMatrix = t,
        Re.activeShader === this && u.uniformMatrix4fv(this.uniform("modelMat"), !1, this.modelMatrix)
    }
    bind() {
        Re.activeShader = this,
        u.useProgram(this.program),
        u.uniformMatrix4fv(this.uniform("projMat"), !1, Re.projMatrix),
        u.uniformMatrix4fv(this.uniform("viewMat"), !1, Re.viewMatrix),
        u.uniformMatrix4fv(this.uniform("modelMat"), !1, this.modelMatrix)
    }
    setUniforms(t) {
        this.setUniformTree({
            ...t
        }, this.uniformSetters)
    }
    unbind() {
        Re.activeShader = null;
        for (let t = this.textureQuota.length - 1; t >= 0; t--) {
            const n = this.textureQuota[t];
            u.activeTexture(u.TEXTURE0 + t),
            u.bindTexture(n.target, null)
        }
        for (const t of this.boundAttributes)
            u.disableVertexAttribArray(t);
        this.indexBuffer && (u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null),
        this.indexBuffer = null),
        u.useProgram(null),
        this.textureQuota.length = 0,
        this.boundAttributes.length = 0
    }
    createShader(t, n) {
        const r = u.createShader(n);
        if (!r)
            throw new Error("[Shader] Unable to allocate shader");
        if (u.shaderSource(r, t),
        u.compileShader(r),
        !u.getShaderParameter(r, u.COMPILE_STATUS))
            throw new Error(`[Shader] Unable to compile shader

${t}

${u.getShaderInfoLog(r)}`);
        return r
    }
    createProgram() {
        const t = u.createProgram();
        if (!t)
            throw new Error("[Shader] Unable to allocate shader program");
        if (u.attachShader(t, this.vertexShader),
        u.attachShader(t, this.fragmentShader),
        this.forceAttributes)
            for (const n in this.forceAttributes)
                n in this.forceAttributes && u.bindAttribLocation(t, this.forceAttributes[n], n);
        if (this.options.transformFeedbackVaryings && u.transformFeedbackVaryings(t, this.options.transformFeedbackVaryings, this.options.transformFeedbackSeparate ? u.SEPARATE_ATTRIBS : u.INTERLEAVED_ATTRIBS),
        u.linkProgram(t),
        u.validateProgram(t),
        !u.getProgramParameter(t, u.LINK_STATUS))
            throw new Error(`[Shader] Unable to link program

${u.getProgramInfoLog(t)}`);
        return t
    }
    prefixVertexCode(t) {
        return this.options.disablePrefix ? `#version 300 es
precision highp float;
${this.vertexCode}` : `${m5.replace("DEFINE_LIST;", this.buildDefines(t))}
${this.vertexCode}`
    }
    prefixFragmentCode(t) {
        return this.options.disablePrefix ? `#version 300 es
precision highp float;
${this.fragmentCode}` : `${p5.replace("DEFINE_LIST;", this.buildDefines(t))}
${this.fragmentCode}`
    }
    buildDefines(t) {
        const n = [];
        for (const r in t)
            t.hasOwnProperty(r) && n.push(`#define ${r} ${t[r]}`);
        return `${n.join(`
`)}
`
    }
    parseUniformTree(t, n="", r=0) {
        const i = {}
          , o = n.length > 0 ? t.filter(a=>a.name.startsWith(n)) : t
          , s = [];
        for (const a of o) {
            const l = n ? a.name.substring(n.length) : a.name
              , c = l.match(/^[a-z]([a-z0-9]+)?/gimu);
            if (c) {
                const d = c[0];
                if (!s.includes(d))
                    if (s.push(d),
                    d === l)
                        i[d] = this.getUniformSetter(a);
                    else if (l.substring(d.length, d.length + 1) === "[") {
                        let p = 0;
                        if (o.forEach(y=>{
                            if (y.name.substring(n.length).startsWith(d)) {
                                const h = Number(y.name.substring(d.length + n.length + 1, y.name.indexOf("]", d.length + n.length + 1)));
                                p = Math.max(p, h + 1)
                            }
                        }
                        ),
                        p === 1 && a.size !== 1)
                            i[d] = this.getUniformSetter(a);
                        else {
                            const y = [];
                            for (let h = 0; h < p; h++)
                                y.push(this.parseUniformTree(t, `${n}${d}[${h}].`, r + 1));
                            i[d] = y
                        }
                    } else
                        i[d] = this.parseUniformTree(t, `${n ? n + d : d}.`, r + 1)
            }
        }
        return i
    }
    getUniformSetter(t) {
        let n = null;
        switch (t.type) {
        case g5:
            n = {
                func: t.size > 1 ? u.uniform1fv : u.uniform1f,
                mat: !1,
                sampler: !1
            };
            break;
        case v5:
            n = {
                func: u.uniform2fv,
                mat: !1,
                sampler: !1
            };
            break;
        case y5:
            n = {
                func: u.uniform3fv,
                mat: !1,
                sampler: !1
            };
            break;
        case E5:
            n = {
                func: u.uniform4fv,
                mat: !1,
                sampler: !1
            };
            break;
        case w5:
        case _5:
            n = {
                func: t.size > 1 ? u.uniform1iv : u.uniform1i,
                mat: !1,
                sampler: !1
            };
            break;
        case x5:
        case R5:
            n = {
                func: u.uniform2iv,
                mat: !1,
                sampler: !1
            };
            break;
        case S5:
        case T5:
            n = {
                func: u.uniform3iv,
                mat: !1,
                sampler: !1
            };
            break;
        case C5:
        case A5:
            n = {
                func: u.uniform4iv,
                mat: !1,
                sampler: !1
            };
            break;
        case O5:
            n = {
                func: t.size > 1 ? u.uniform1uiv : u.uniform1ui,
                mat: !1,
                sampler: !1
            };
            break;
        case F5:
            n = {
                func: u.uniform2uiv,
                mat: !1,
                sampler: !1
            };
            break;
        case D5:
            n = {
                func: u.uniform3uiv,
                mat: !1,
                sampler: !1
            };
            break;
        case j5:
            n = {
                func: u.uniform4uiv,
                mat: !1,
                sampler: !1
            };
            break;
        case k5:
            n = {
                func: u.uniformMatrix2fv,
                mat: !0,
                sampler: !1
            };
            break;
        case N5:
            n = {
                func: u.uniformMatrix3fv,
                mat: !0,
                sampler: !1
            };
            break;
        case M5:
            n = {
                func: u.uniformMatrix4fv,
                mat: !0,
                sampler: !1
            };
            break;
        case L5:
        case B5:
        case z5:
        case H5:
            n = {
                func: u.uniform1i,
                mat: !1,
                sampler: u.TEXTURE_2D
            };
            break;
        case I5:
        case U5:
        case V5:
            n = {
                func: u.uniform1i,
                mat: !1,
                sampler: u.TEXTURE_3D
            };
            break;
        case P5:
        case b5:
        case Z5:
            n = {
                func: u.uniform1i,
                mat: !1,
                sampler: u.TEXTURE_CUBE_MAP
            };
            break;
        default:
            n = null;
            break
        }
        return n ? r=>{
            const {func: i, mat: o, sampler: s} = n;
            if (n) {
                const a = Array.isArray(r) ? r.flat() : r;
                if (o)
                    i.call(u, t.location, !1, a);
                else if (s !== !1) {
                    if (a instanceof WebGLTexture) {
                        const l = this.bindTexture(t, a, s);
                        i.call(u, t.location, l)
                    }
                } else
                    i.call(u, t.location, a)
            }
        }
        : ()=>{}
    }
    setUniformTree(t, n) {
        for (const r in t)
            if (t.hasOwnProperty(r) && n.hasOwnProperty(r)) {
                const i = n[r];
                if (typeof i == "function")
                    i(t[r]);
                else {
                    const o = t[r];
                    if (Array.isArray(i)) {
                        if (Array.isArray(o))
                            for (let s = 0; s < i.length; s++)
                                o[s] && this.setUniformTree(o[s], i[s])
                    } else
                        this.setUniformTree(o, i)
                }
            }
    }
    bindTexture(t, n, r=u.TEXTURE_2D) {
        let i = !0
          , o = this.textureQuota.findIndex(s=>s.texture === n && s.target === r && s.location === t);
        return o === -1 && (o = this.textureQuota.length,
        this.textureQuota.push({
            texture: n,
            target: r,
            location: t
        }),
        i = !1),
        i || (u.activeTexture(u.TEXTURE0 + o),
        u.bindTexture(r, n)),
        o
    }
}
;
S(Re, "drawCallCount", 0),
S(Re, "trianglesCount", 0),
S(Re, "activeShader", null),
S(Re, "viewMatrix", bn(qe())),
S(Re, "projMatrix", bn(qe()));
let ye = Re;
const G5 = qe();
class q {
    static get matrix() {
        return this.matrixDirty && this.updateMatrices(),
        this.cameraMatrix
    }
    static get projectionMatrix() {
        return this.matrixDirty && this.updateMatrices(),
        this.projMatrix
    }
    static get normalMatrix() {
        return this.matrixDirty && this.updateMatrices(),
        this.cameraNormalMatrix
    }
    static get position() {
        return me(this.localPosition[0], this.localPosition[1], this.localPosition[2])
    }
    static set position(t) {
        Ci(this.localPosition, t) || (un(this.localPosition, t),
        this.matrixDirty = !0)
    }
    static get rotation() {
        return me(this.localRotation[0], this.localRotation[1], this.localRotation[2])
    }
    static set rotation(t) {
        Ci(this.localRotation, t) || (un(this.localRotation, t),
        this.matrixDirty = !0)
    }
    static get zoom() {
        return this.camZoom
    }
    static set zoom(t) {
        this.camZoom !== t && (this.camZoom = t,
        this.updateProjectionMatrix())
    }
    static get perspectiveShift() {
        return O0(this.localPerspectiveShift)
    }
    static set perspectiveShift(t) {
        Cg(this.localPerspectiveShift, t) || (cr(this.localPerspectiveShift, t),
        this.updateProjectionMatrix())
    }
    static lookAt(t, n) {
        const r = ys(Bt(), n, t)
          , i = Math.hypot(r[2], r[0]);
        if (i > 0) {
            const o = Math.atan2(-r[0], -r[2]) * 180 / Math.PI
              , s = Math.atan2(r[1], i) * 180 / Math.PI;
            this.rotation = [s, o, 0]
        }
        this.position = t
    }
    static updateProjection(t) {
        this.aspect = t,
        this.updateProjectionMatrix()
    }
    static bindMatrices() {
        this.updateMatrices(),
        ye.updateCamera(this.viewMatrix, this.projMatrix)
    }
    static bindUIMatrices() {
        ye.updateCamera(G5, this.uiProjMatrix)
    }
    static projectRay(t) {
        this.updateMatrices();
        const n = t[0] * 2 - 1
          , r = t[1] * -2 + 1
          , i = zl(n, r, -1, 1)
          , o = zl(n, r, 1, 1)
          , s = qe();
        xi(s, this.projMatrix, this.viewMatrix),
        Cf(s, s),
        Rf(i, i, s),
        Rf(o, o, s);
        const a = me(i[0] / i[3], i[1] / i[3], i[2] / i[3])
          , l = me(o[0] / o[3], o[1] / o[3], o[2] / o[3]);
        return ys(l, l, a),
        $c(l, l),
        [a, l]
    }
    static projectToClip(t) {
        this.updateMatrices();
        const n = qe();
        xi(n, this.projMatrix, this.viewMatrix);
        const r = dt(t);
        return N0(r, r, n),
        r
    }
    static sphereVisible(t) {
        return this.updateMatrices(),
        this.frustum.sphereVisible(t)
    }
    static sphereCoordsVisible(t, n) {
        return this.updateMatrices(),
        this.frustum.sphereCoordsVisible(t, n)
    }
    static updateMatrices() {
        this.matrixDirty && (qm(this.cameraMatrix, Es(this.localRotation), this.localPosition),
        Cf(this.viewMatrix, this.cameraMatrix),
        R0(this.cameraNormalMatrix, this.viewMatrix),
        this.frustum.rebuild(this.projMatrix, this.viewMatrix),
        this.matrixDirty = !1)
    }
    static updateProjectionMatrix() {
        const t = qe();
        Km(t, me(this.localPerspectiveShift[0], this.localPerspectiveShift[1], 0)),
        tg(this.projMatrix, .7 / this.camZoom, this.aspect, .1, 400),
        xi(this.projMatrix, t, this.projMatrix);
        const n = 768
          , r = n * this.aspect;
        rg(this.uiProjMatrix, 0, r, n, 0, -1, 1),
        this.updateMatrices()
    }
}
S(q, "viewMatrix", bn(qe())),
S(q, "cameraMatrix", bn(qe())),
S(q, "cameraNormalMatrix", Wm(Gc())),
S(q, "projMatrix", bn(qe())),
S(q, "uiProjMatrix", bn(qe())),
S(q, "localPosition", me(0, 0, 0)),
S(q, "localRotation", me(0, 0, 0)),
S(q, "localPerspectiveShift", Wc(0, 0)),
S(q, "camZoom", 1),
S(q, "aspect", 1),
S(q, "frustum", new u5),
S(q, "matrixDirty", !0);
class ou {
    constructor(t, n=!0) {
        S(this, "pos", 0);
        S(this, "littleEndian", !0);
        S(this, "stream");
        this.littleEndian = n,
        this.pos = 0,
        this.stream = new DataView(t)
    }
    get buffer() {
        return this.stream.buffer
    }
    get offset() {
        return this.pos
    }
    set offset(t) {
        this.pos = t
    }
    get length() {
        return this.stream.byteLength
    }
    readByte() {
        return this.pos++,
        this.stream.getUint8(this.pos - 1)
    }
    readSignedByte() {
        return this.pos++,
        this.stream.getInt8(this.pos - 1)
    }
    readShort() {
        return this.pos += 2,
        this.stream.getUint16(this.pos - 2, this.littleEndian)
    }
    readSignedShort() {
        return this.pos += 2,
        this.stream.getInt16(this.pos - 2, this.littleEndian)
    }
    readInt() {
        return this.pos += 4,
        this.stream.getInt32(this.pos - 4, this.littleEndian)
    }
    readUInt() {
        return this.pos += 4,
        this.stream.getUint32(this.pos - 4, this.littleEndian)
    }
    readFloat() {
        return this.pos += 4,
        this.stream.getFloat32(this.pos - 4, this.littleEndian)
    }
    readVec3() {
        const t = this.readFloat()
          , n = this.readFloat()
          , r = this.readFloat();
        return me(t, n, r)
    }
    readQuat() {
        const t = this.readFloat()
          , n = this.readFloat()
          , r = this.readFloat()
          , i = this.readFloat();
        return wg(t, n, r, i)
    }
    readFixedString(t) {
        const n = [];
        for (let r = 0; r < t; r++) {
            const i = this.readByte();
            if (i === 0)
                break;
            n[r] = i
        }
        return n.length < t && (this.pos += t - n.length - 1),
        n.map(r=>String.fromCharCode(r)).join("")
    }
    readString() {
        const t = this.readShort();
        return this.readFixedString(t)
    }
    readBytes(t) {
        const n = [];
        for (let r = 0; r < t; r++)
            n.push(this.readByte());
        return n
    }
    readArrayBytes(t) {
        return this.pos += t,
        new Uint8Array(this.stream.buffer.slice(this.pos - t, this.pos))
    }
    readFloatBuffer(t) {
        const n = this.readArrayBytes(t * 4);
        return new Float32Array(n.buffer)
    }
    readUInt16Buffer(t) {
        const n = this.readArrayBytes(t * 2);
        return new Uint16Array(n.buffer)
    }
}
class ge {
    static get activeSounds() {
        return this.entries.length
    }
    static async preload() {
        const [t,n] = await Promise.all([this.loadSoundBank(l5), this.loadSoundBank(c5)]);
        this.cache = {
            Game: t,
            Music: n
        }
    }
    static getSound(t) {
        const [n,r] = t.split(".");
        return this.cache && this.cache[n] && this.cache[n][r] ? this.cache[n][r] : null
    }
    static play(t, n=!1, r) {
        return this.makeSound(t, On.Flat, n, r)
    }
    static playPositioned(t, n=!1, r) {
        return this.makeSound(t, On.Positional, n, r)
    }
    static playMusic(t, n=!1, r, i) {
        return this.makeSound(t, On.Music, n, r, i)
    }
    static makeSound(t, n, r=!1, i, o) {
        const s = (i ? i.position : null) ?? Bt()
          , a = (i ? i.volume : null) ?? 1
          , l = (i ? i.range : null) ?? 50
          , c = (i ? i.pan : null) ?? 0
          , d = (i ? i.speed : null) ?? 1
          , m = (i ? i.detune : null) ?? 0
          , p = W.createBufferSource();
        p.buffer = t,
        p.loop = r,
        p.playbackRate.value = d,
        p.detune.value = m;
        const y = W.createGain();
        y.gain.value = a;
        const h = W.createPanner();
        h.pan.value = c;
        let E = null;
        n === On.Positional && (E = W.createPositionalNode(),
        E.positionX.value = s[0],
        E.positionY.value = s[1],
        E.positionZ.value = s[2],
        E.distanceModel = "linear",
        E.maxDistance = l,
        E.panningModel = "equalpower"),
        p.connect(y),
        E ? (y.connect(E),
        E.connect(h)) : y.connect(h);
        let x = W.soundNode;
        switch (n) {
        case On.Positional:
            x = W.effectsNode;
            break;
        case On.Music:
            x = W.musicNode;
            break
        }
        o ? o(W.audioContext, h, x) : h.connect(x),
        p.start();
        const g = {
            position: s,
            volume: a,
            range: l,
            pan: c,
            speed: d,
            detune: m,
            ended: !1
        }
          , v = {
            state: g,
            duration: t.duration,
            startTime: W.time,
            loop: r,
            source: p,
            volumeNode: y,
            panNode: h,
            positionNode: E,
            ended: !1
        };
        return p.onended = ()=>{
            v.ended = !0,
            v.state.ended = !0
        }
        ,
        this.entries.push(v),
        g
    }
    static update() {
        const t = W.listener
          , n = q.position
          , r = Xm(Vi(), q.matrix)
          , i = me(0, 1, 0)
          , o = me(0, 0, -1);
        _f(i, i, r),
        _f(o, o, r),
        t.positionX ? (t.positionX.value = n[0],
        t.positionY.value = n[1],
        t.positionZ.value = n[2],
        t.forwardX.value = o[0],
        t.forwardY.value = o[1],
        t.forwardZ.value = o[2],
        t.upX.value = i[0],
        t.upY.value = i[1],
        t.upZ.value = i[2]) : (t.setPosition(n[0], n[1], n[2]),
        t.setOrientation(o[0], o[1], o[2], i[0], i[1], i[2]));
        const s = [];
        for (const a of this.entries)
            if (a.ended || a.state.ended)
                a.source.stop(),
                s.push(a);
            else {
                const l = a.state;
                a.volumeNode.gain.value = l.volume ?? 1,
                a.panNode.pan.value = l.pan ?? 0,
                a.source.playbackRate.value = l.speed ?? 1,
                a.source.detune.value = l.detune ?? 0,
                a.positionNode && (l.position && (a.positionNode.positionX.value = l.position[0],
                a.positionNode.positionY.value = l.position[1],
                a.positionNode.positionZ.value = l.position[2]),
                l.range && (a.positionNode.maxDistance = l.range))
            }
        for (const a of s) {
            const l = this.entries.indexOf(a);
            l !== -1 && this.entries.splice(l, 1)
        }
    }
    static async loadSoundBank(t) {
        const n = await fetch(t).then(a=>a.arrayBuffer())
          , r = {}
          , i = new ou(n);
        i.offset = 4;
        const o = i.readShort();
        for (let a = 0; a < o; a++) {
            const l = i.readString()
              , c = i.readInt();
            r[l] = i.readArrayBytes(c).buffer
        }
        const s = {};
        return await Promise.all(Object.entries(r).map(([a,l])=>W.decodeSoundData(l).then(c=>{
            s[a] = c
        }
        ).catch(()=>console.error(`[SOUND] Failed to decode ${a}`)))),
        s
    }
}
S(ge, "cache"),
S(ge, "entries", []);
function ct(e) {
    const t = me(e >> 16 & 255, e >> 8 & 255, e & 255);
    return Si(t, t, 1 / 255),
    t
}
const Le = {
    Pink: ct(16732927),
    Green: ct(7733074),
    Blue: ct(6356991),
    DarkBlue: ct(85),
    White: ct(16777215)
};
ct(394289);
var $5 = `varying vec4 vColor;
varying vec2 vPosition;

void main() {
    float range = pow(clamp(1.0 - length(vPosition), 0.0, 1.0), 2.0);
    gl_FragColor = vec4(vColor.rgb * vColor.a * range, 1.0);
}`
  , W5 = `attribute vec2 position;
attribute vec3 offset;
attribute vec3 color;
attribute float opacity;
attribute float scale;

varying vec4 vColor;
varying vec2 vPosition;

void main() {
    vec3 pos = vec3(position, 0.0) * scale + offset;
    vPosition = position;
    vColor = vec4(color, opacity);

    gl_Position = projMat * viewMat * modelMat * vec4(pos, 1.0);
}`;
class su {
    constructor(t, n) {
        S(this, "center");
        S(this, "radius");
        this.center = dt(t),
        this.radius = n
    }
    static fromPointCloud(t, n=0) {
        let r = 1 / 0
          , i = 1 / 0
          , o = 1 / 0
          , s = -1 / 0
          , a = -1 / 0
          , l = -1 / 0;
        for (let y = 0; y < t.length; y += n + 3)
            r = Math.min(r, t[y]),
            i = Math.min(i, t[y + 1]),
            o = Math.min(o, t[y + 2]),
            s = Math.max(s, t[y]),
            a = Math.max(a, t[y + 1]),
            l = Math.max(l, t[y + 2]);
        const c = r + (s - r) / 2
          , d = i + (a - i) / 2
          , m = o + (l - o) / 2
          , p = Math.hypot(s - c, a - d, l - m);
        return new su(me(c, d, m),p)
    }
}
class io {
    constructor(t="") {
        S(this, "localPosition");
        S(this, "localRotation");
        S(this, "localQuat");
        S(this, "localScale");
        S(this, "localMatrix");
        S(this, "localNormalMatrix");
        S(this, "localSphere");
        S(this, "localTransformedSphere");
        S(this, "localParent");
        S(this, "localChildren");
        S(this, "matrixDirty");
        this.name = t,
        this.localMatrix = qe(),
        this.localNormalMatrix = Gc(),
        this.localPosition = Bt(),
        this.localRotation = Bt(),
        this.localQuat = Vi(),
        this.localScale = me(1, 1, 1),
        this.localChildren = [],
        this.localParent = null,
        this.matrixDirty = !0,
        this.localSphere = null,
        this.localTransformedSphere = null
    }
    get position() {
        return dt(this.localPosition)
    }
    set position(t) {
        Ci(t, this.localPosition) || (un(this.localPosition, t),
        this.markAsDirty())
    }
    get rotation() {
        return dt(this.localRotation)
    }
    set rotation(t) {
        Ci(t, this.localRotation) || (un(this.localRotation, t),
        Tf(this.localQuat, Es(t)),
        this.markAsDirty())
    }
    get quaternion() {
        return Eg(this.localQuat)
    }
    set quaternion(t) {
        xg(t, this.localQuat) || (Tf(this.localQuat, t),
        this.markAsDirty())
    }
    get scale() {
        return this.localScale
    }
    set scale(t) {
        Ci(t, this.localScale) || (un(this.localScale, t),
        this.markAsDirty())
    }
    set unitScale(t) {
        this.scale = me(t, t, t)
    }
    get matrix() {
        return this.rebuildMatrices(),
        this.localMatrix
    }
    get normalMatrix() {
        return this.rebuildMatrices(),
        this.localNormalMatrix
    }
    get parent() {
        return this.localParent
    }
    set parent(t) {
        if (t !== this.localParent && t !== this) {
            if (this.localParent && (this.localParent.localChildren.splice(this.localParent.localChildren.indexOf(this), 1),
            this.localParent = null),
            t) {
                this.localParent = t,
                this.localParent.localChildren.push(this);
                let n = this.localParent;
                for (; n !== null; ) {
                    if (n === this)
                        throw new Error("Wrong parent");
                    n = n.localParent
                }
            }
            this.markAsDirty()
        }
    }
    get cullSphere() {
        return this.localSphere
    }
    set cullSphere(t) {
        this.localSphere !== t && (t ? (this.localSphere = t,
        this.localTransformedSphere = new su(me(0, 0, 0),1),
        this.markAsDirty()) : (this.localSphere = null,
        this.localTransformedSphere = null))
    }
    get transformedCullSphere() {
        return this.localTransformedSphere && this.rebuildMatrices(),
        this.localTransformedSphere
    }
    rebuildMatrices() {
        if (this.matrixDirty) {
            if (Jm(this.localMatrix, this.localQuat, this.localPosition, this.localScale),
            R0(this.localNormalMatrix, this.localMatrix),
            this.localParent && (xi(this.localMatrix, this.localParent.matrix, this.localMatrix),
            Qm(this.localNormalMatrix, this.localParent.normalMatrix, this.localNormalMatrix)),
            this.localSphere && this.localTransformedSphere) {
                const t = dt(this.localSphere.center);
                N0(t, t, this.localMatrix);
                const n = T0(Bt(), this.localMatrix)
                  , r = Math.max(Math.abs(n[0]), Math.abs(n[1]), Math.abs(n[2]));
                un(this.localTransformedSphere.center, t),
                this.localTransformedSphere.radius = this.localSphere.radius * r
            }
            this.matrixDirty = !1
        }
    }
    markAsDirty() {
        this.matrixDirty = !0;
        for (const t of this.localChildren)
            t.markAsDirty()
    }
}
function Rt(e, t=u.STATIC_DRAW) {
    const n = u.createBuffer();
    return au(n, e, t),
    n
}
function au(e, t, n=u.STATIC_DRAW) {
    u.bindBuffer(u.ARRAY_BUFFER, e),
    u.bufferData(u.ARRAY_BUFFER, t, n),
    u.bindBuffer(u.ARRAY_BUFFER, null)
}
function xn(e) {
    const t = u.createBuffer();
    return u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, t),
    u.bufferData(u.ELEMENT_ARRAY_BUFFER, e, u.STATIC_DRAW),
    u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null),
    t
}
function Q5(e, t=!0, n=!1) {
    const r = u.createTexture();
    return u.bindTexture(u.TEXTURE_2D, r),
    u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, e.width, e.height, 0, u.RGBA, u.UNSIGNED_BYTE, e),
    u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.REPEAT),
    u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.REPEAT),
    u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, n ? u.NEAREST : u.LINEAR),
    t ? (u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, n ? u.NEAREST_MIPMAP_LINEAR : u.LINEAR_MIPMAP_LINEAR),
    u.generateMipmap(u.TEXTURE_2D)) : u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, n ? u.NEAREST : u.LINEAR),
    u.bindTexture(u.TEXTURE_2D, null),
    r
}
async function gh(e, t=!0, n=!1) {
    return new Promise((r,i)=>{
        const o = new Image;
        o.crossOrigin = "anonymous",
        o.addEventListener("load", ()=>{
            r(Q5(o, t, n))
        }
        ),
        o.addEventListener("error", ()=>i()),
        o.src = e
    }
    )
}
var he = (e=>(e[e.Blue = 0] = "Blue",
e[e.Pink = 1] = "Pink",
e[e.Green = 2] = "Green",
e[e.TimeStop = 3] = "TimeStop",
e))(he || {});
class vh extends io {
    get baseUniforms() {
        return {
            viewNormalMat: q.normalMatrix,
            uCameraPosition: q.position,
            uAmbientLight: [0, 0, .2],
            uDirectionalLights: [{
                color: ct(16777215),
                position: [1, 1, .5],
                intensity: 1
            }, {
                color: ct(16777215),
                position: [-1, -1, .2],
                intensity: 1
            }, {
                color: ct(16777215),
                position: [-1, 1, .5],
                intensity: .2
            }],
            uDirectionalLightCount: 3
        }
    }
    static async preloadMesh(t, n, r, i) {
        const o = await fetch(t).then(y=>y.arrayBuffer())
          , s = new ou(o);
        s.offset += 4;
        const a = []
          , l = [];
        let c = 0;
        const d = s.readByte();
        for (let y = 0; y < d; y++) {
            const h = s.readString()
              , [E,x,g] = i(h)
              , v = s.readShort();
            for (let _ = 0; _ < v; _++) {
                const C = s.readFloat() * r
                  , R = s.readFloat() * r
                  , T = s.readFloat() * r
                  , k = s.readFloat()
                  , O = s.readFloat()
                  , N = s.readFloat();
                a.push(C, R, T, k, O, N, E, x, g)
            }
            const w = s.readShort();
            for (let _ = 0; _ < w * 3; _++)
                l.push(s.readShort() + c);
            c += v
        }
        const m = Rt(new Float32Array(a))
          , p = u.createVertexArray();
        return n.bind(),
        u.bindVertexArray(p),
        n.setBuffer("position", m, 3, u.FLOAT, !1, 36, 0),
        n.setBuffer("normal", m, 3, u.FLOAT, !1, 36, 12),
        n.setBuffer("material", m, 3, u.FLOAT, !1, 36, 24),
        u.bindVertexArray(null),
        n.unbind(),
        {
            vao: p,
            vertexBuffer: m,
            indexBuffer: xn(new Uint16Array(l)),
            indexCount: l.length
        }
    }
}
const Cr = class Cr {
    constructor() {
        S(this, "instanceBuffer");
        S(this, "instanceCount");
        S(this, "localEntries");
        S(this, "task");
        this.localEntries = [],
        this.instanceCount = 1,
        this.instanceBuffer = Rt(new Float32Array([]), u.DYNAMIC_DRAW),
        this.task = {
            callback: ()=>this.drawMesh()
        }
    }
    get entries() {
        return [...this.localEntries]
    }
    set entries(t) {
        this.localEntries.length = 0,
        this.localEntries.push(...t),
        this.instanceCount = t.length;
        const n = [];
        for (const r of t) {
            let i = Le.Blue;
            r.color === he.Green ? i = Le.Green : r.color === he.Pink ? i = Le.Pink : r.color === he.TimeStop && (i = Le.Blue),
            n.push(r.position[0], r.position[1], r.position[2], i[0], i[1], i[2], r.scale, r.opacity)
        }
        au(this.instanceBuffer, new Float32Array(n), u.DYNAMIC_DRAW)
    }
    static async preload() {
        this.vertexBuffer = Rt(new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1])),
        this.indexBuffer = xn(new Uint8Array([0, 2, 1, 1, 2, 3])),
        this.shader = new ye($5,W5)
    }
    render(t) {
        t.addTasks(this.task)
    }
    dispose() {
        u.deleteBuffer(this.instanceBuffer)
    }
    drawMesh() {
        const {shader: t, vertexBuffer: n, indexBuffer: r} = Cr;
        !t || this.entries.length === 0 || (u.disable(u.DEPTH_TEST),
        u.depthMask(!1),
        u.enable(u.BLEND),
        u.blendFunc(u.ONE, u.ONE),
        t.bind(),
        t.setBuffer("position", n, 2, u.FLOAT, !1),
        t.setBuffer("offset", this.instanceBuffer, 3, u.FLOAT, !1, 32, 0, !1, !0),
        t.setBuffer("color", this.instanceBuffer, 3, u.FLOAT, !1, 32, 12, !1, !0),
        t.setBuffer("scale", this.instanceBuffer, 1, u.FLOAT, !1, 32, 24, !1, !0),
        t.setBuffer("opacity", this.instanceBuffer, 1, u.FLOAT, !1, 32, 28, !1, !0),
        t.draw(r, 6, u.TRIANGLES, u.UNSIGNED_BYTE, 0, this.instanceCount),
        t.unbind(),
        u.disable(u.BLEND),
        u.depthMask(!0),
        u.enable(u.DEPTH_TEST))
    }
}
;
S(Cr, "vertexBuffer"),
S(Cr, "indexBuffer"),
S(Cr, "shader");
let Ts = Cr;
var As = `struct DirectionalLight {
    vec3 color;
    vec3 position;
    float intensity;
};

uniform vec3 uColor;
uniform vec3 uCameraPosition;

uniform vec3 uAmbientLight;
uniform DirectionalLight uDirectionalLights[8];
uniform int uDirectionalLightCount;

#ifdef APPEAR
uniform float uAppear;
#endif

varying vec3 vNormal;
varying vec3 vScreenNormal;
varying vec3 vMaterial;
varying vec3 vPosition;
varying vec3 vLocalPosition;

#ifdef APPEAR

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
#endif

void main() {
    vec3 color = vec3(0.0);

    color = mix(color, vec3(1.0), vMaterial.r);
    color = mix(color, uColor, vMaterial.g);

    vec3 light = uAmbientLight;
    vec3 viewDir = normalize(vPosition - uCameraPosition);
    for (int i = 0; i < uDirectionalLightCount; i++) {
        vec3 dir = normalize(uDirectionalLights[i].position);
        float ndotl = clamp(dot(dir, vNormal), 0.0, 1.0);
        float ldotv = clamp(dot(reflect(dir, vNormal), viewDir), 0.0, 1.0);
        ldotv = pow(ldotv, 32.0);
        light = light + (
            uDirectionalLights[i].color * ndotl +
            vec3(1.0) * ldotv
        ) * uDirectionalLights[i].intensity;
    }

    color = mix(color * light, color, vMaterial.b);

    float rim = smoothstep(0.1, 0.5, clamp(dot(-vScreenNormal, viewDir), 0.0, 1.0));
    color = mix(color, uColor, pow(1.0 -rim, 1.0));

    #ifdef APPEAR
    float factor = cnoise(vLocalPosition * 0.8) * 0.5 + 0.5;
    if (factor > uAppear) {
        discard;
    } else if (factor + 0.15 > uAppear) {
        color = vec3(1.0);
    }
    #endif

    gl_FragColor = vec4(color, 1.0);
}`
  , ks = `attribute vec3 position;
attribute vec3 normal;
attribute vec3 material;

uniform mat3 normalMat;
uniform mat3 viewNormalMat;

varying vec3 vNormal;
varying vec3 vScreenNormal;
varying vec3 vMaterial;
varying vec3 vPosition;
varying vec3 vLocalPosition;

void main() {
    vNormal = normalMat * normal;
    vScreenNormal = viewNormalMat * vNormal;
    vMaterial = material;
    vLocalPosition = position;

    vec4 globalPos =  modelMat * vec4(position, 1.0);
    vPosition = globalPos.xyz;

    gl_Position = projMat * viewMat * globalPos;
}`;
const Y5 = "/tggame/assets/crate-C3ydU7Hu.rc3"
  , Ft = class Ft extends vh {
    constructor(n) {
        super();
        S(this, "task");
        S(this, "appear");
        this.color = n,
        this.appear = 1,
        this.task = {
            callback: ()=>this.drawMesh()
        }
    }
    static async preload() {
        this.shader = new ye(As,ks),
        this.appearShader = new ye(As,ks,{
            defines: {
                APPEAR: "true"
            }
        });
        const {vao: n, vertexBuffer: r, indexBuffer: i, indexCount: o} = await this.preloadMesh(Y5, this.shader, .7, s=>{
            let a = 0
              , l = 0
              , c = 0;
            return s === "color" ? (l = 1,
            c = .3) : s === "glow" ? (l = 1,
            c = 1) : s === "grate" ? a = .8 : s === "handle" ? a = 1 : s === "black" && (a = .5),
            [a, l, c]
        }
        );
        this.vao = n,
        this.vertexBuffer = r,
        this.indexBuffer = i,
        this.indexCount = o
    }
    render(n) {
        n.addTasks(this.task)
    }
    dispose() {}
    drawMesh() {
        const {shader: n, appearShader: r, indexBuffer: i, indexCount: o, vao: s} = Ft
          , a = this.appear < 1 ? r : n;
        if (!a)
            return;
        let l = Le.Blue;
        this.color === he.Green ? l = Le.Green : this.color === he.Pink && (l = Le.Pink),
        a.updateMatrix(this.matrix),
        a.bind(),
        a.setUniforms({
            ...this.baseUniforms,
            normalMat: this.normalMatrix,
            uColor: l,
            uAppear: this.appear
        }),
        u.bindVertexArray(s),
        a.draw(i, o),
        u.bindVertexArray(null),
        a.unbind()
    }
}
;
S(Ft, "vertexBuffer"),
S(Ft, "indexBuffer"),
S(Ft, "indexCount"),
S(Ft, "shader"),
S(Ft, "appearShader"),
S(Ft, "vao");
let Ns = Ft;
const K5 = "/tggame/assets/crate_time-kUciCvBU.rc3"
  , Dt = class Dt extends vh {
    constructor() {
        super();
        S(this, "task");
        S(this, "appear");
        S(this, "color", he.TimeStop);
        this.appear = 1,
        this.task = {
            callback: ()=>this.drawMesh()
        }
    }
    static async preload() {
        this.shader = new ye(As,ks),
        this.appearShader = new ye(As,ks,{
            defines: {
                APPEAR: "true"
            }
        });
        const {vao: n, vertexBuffer: r, indexBuffer: i, indexCount: o} = await this.preloadMesh(K5, this.shader, .7, s=>{
            let a = 0
              , l = 0
              , c = 0;
            return s === "black" ? a = .5 : s === "blue" ? (l = .2,
            a = .6,
            c = .7) : s === "white" && (a = .8,
            c = .9),
            [a, l, c]
        }
        );
        this.vao = n,
        this.vertexBuffer = r,
        this.indexBuffer = i,
        this.indexCount = o
    }
    render(n) {
        n.addTasks(this.task)
    }
    dispose() {}
    drawMesh() {
        const {shader: n, appearShader: r, indexBuffer: i, indexCount: o, vao: s} = Dt
          , a = this.appear < 1 ? r : n;
        if (!a)
            return;
        const l = Le.DarkBlue;
        a.updateMatrix(this.matrix),
        a.bind(),
        a.setUniforms({
            ...this.baseUniforms,
            normalMat: this.normalMatrix,
            uColor: l,
            uAppear: this.appear
        }),
        u.bindVertexArray(s),
        a.draw(i, o),
        u.bindVertexArray(null),
        a.unbind()
    }
}
;
S(Dt, "vertexBuffer"),
S(Dt, "indexBuffer"),
S(Dt, "indexCount"),
S(Dt, "shader"),
S(Dt, "appearShader"),
S(Dt, "vao");
let Ms = Dt;
var _i = (e=>(e[e.Normal = 0] = "Normal",
e[e.Alpha = 1] = "Alpha",
e))(_i || {})
  , q5 = `uniform vec3 uDiffuse;
uniform float uAppear;

varying float vTime;
varying vec2 vUv;

void main() {
    vec3 color = mix(vec3(2.0), uDiffuse, smoothstep(0.0, 0.5, vTime));

    float factor = pow(1.0 - vTime, 2.0);
    float range = pow(clamp(1.0 - length(vUv), 0.0, 1.0), 2.0);
    gl_FragColor = vec4(color * range * factor * uAppear, 1.0);
}`
  , X5 = `attribute vec2 position;
attribute vec3 start;
attribute vec3 end;
attribute float time;

uniform float uTime;

varying float vTime;
varying vec2 vUv;

void main() {
    float t = min(uTime / time, 1.0);

    vec3 pos = vec3(position * 0.15, 0.0) + (modelMat * vec4(mix(start, end, 1.0 - pow(1.0 - t, 2.0)), 1.0)).xyz;
    vUv = position;
    vTime = t;

    gl_Position = projMat * viewMat * vec4(pos, 1.0);
}`;
const _r = class _r extends io {
    constructor(n) {
        super();
        S(this, "instanceBuffer");
        S(this, "instanceCount");
        S(this, "vao");
        S(this, "task");
        S(this, "time");
        S(this, "localAppear");
        this.color = n,
        this.time = 0,
        this.localAppear = 1;
        const r = F0(32, 128)
          , i = [];
        for (let o = 0; o < r; o++) {
            const s = me(te(-.84, .84, Math.random()), te(-.76, .76, Math.random()), te(-.84, .84, Math.random()))
              , a = lg(Bt(), 0);
            vs(a, a, s, te(3, 4, Math.random()));
            const l = te(.3, 1, Math.random());
            i.push(s[0], s[1], s[2], a[0], a[1], a[2], l)
        }
        this.vao = u.createVertexArray(),
        this.instanceBuffer = Rt(new Float32Array(i)),
        this.instanceCount = r,
        this.task = {
            callback: ()=>this.drawParticles(),
            pass: _i.Alpha
        }
    }
    get ended() {
        return this.time === 1
    }
    set appear(n) {
        this.localAppear = xe(n)
    }
    static async preload() {
        this.vertexBuffer = Rt(new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1])),
        this.indexBuffer = xn(new Uint8Array([0, 2, 1, 1, 2, 3])),
        this.shader = new ye(q5,X5)
    }
    update(n) {
        this.time = Math.min(this.time + .02 * n, 1)
    }
    render(n) {
        n.addTasks(this.task)
    }
    drawParticles() {
        const {shader: n, vertexBuffer: r, indexBuffer: i} = _r;
        if (!n)
            return;
        let o = Le.Blue;
        this.color === he.Green ? o = Le.Green : this.color === he.Pink && (o = Le.Pink),
        u.blendFunc(u.ONE, u.ONE),
        n.updateMatrix(this.matrix),
        n.bind(),
        n.setUniforms({
            uTime: this.time,
            uDiffuse: o,
            uAppear: this.localAppear
        }),
        n.setBuffer("position", r, 2, u.FLOAT),
        n.setBuffer("start", this.instanceBuffer, 3, u.FLOAT, !1, 28, 0, !1, !0),
        n.setBuffer("end", this.instanceBuffer, 3, u.FLOAT, !1, 28, 12, !1, !0),
        n.setBuffer("time", this.instanceBuffer, 1, u.FLOAT, !1, 28, 24, !1, !0),
        n.draw(i, 6, u.TRIANGLES, u.UNSIGNED_BYTE, 0, this.instanceCount),
        n.unbind(),
        u.blendFunc(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA)
    }
}
;
S(_r, "shader"),
S(_r, "vertexBuffer"),
S(_r, "indexBuffer");
let Ls = _r;
const yh = (e,t)=>e ** t
  , {sqrt: v6, sin: J5, cos: y6, PI: ey} = Math
  , ty = e=>e * e
  , Yl = e=>1 - (1 - e) * (1 - e)
  , Ps = e=>e < .5 ? 2 * e * e : 1 - yh(-2 * e + 2, 2) / 2
  , Wf = e=>e < .5 ? 4 * e * e * e : 1 - yh(-2 * e + 2, 3) / 2
  , ny = e=>J5(e * ey / 2)
  , No = me(0, 0, 0);
function ry(e, t, n, r, i) {
    ys(No, r, t);
    const o = k0(n, No);
    if (o < 0)
        return !1;
    vs(No, t, n, o);
    const s = A0(r, No)
      , a = i * i;
    return s > a ? !1 : (Si(e, n, o - Math.sqrt(a - s)),
    og(e, e, t),
    !0)
}
const Va = 8.2
  , Qf = -11
  , Yf = .15
  , Za = .19
  , kt = 5
  , Kf = 3;
class iy {
    constructor(t, n, r) {
        S(this, "entries");
        S(this, "visibleEntries");
        S(this, "crates");
        S(this, "crateGlow");
        S(this, "particles");
        S(this, "localAppear");
        this.onCrateScore = n,
        this.onTimeChange = r,
        this.entries = [],
        this.visibleEntries = [],
        this.crates = Array(4).fill(0).map(()=>[]),
        this.particles = [],
        this.crateGlow = new Ts,
        this.localAppear = 0;
        const i = t * Za * 60
          , o = 2.5
          , s = Math.floor(i / o)
          , a = 8
          , l = [];
        for (let m = 0; m < a; m++) {
            const p = s / a;
            l.push(Math.floor(p * m + Math.random() * p))
        }
        for (let m = 1; m < l.length; m++)
            l[m] - l[m - 1] < 10 && (l[m] += 10);
        for (let m = 0; m < s; m++) {
            let p = te(-kt, kt, Math.random());
            const y = Va + m * o + te(-o * .5, o * .5, Math.random());
            let h = te(-kt, kt, Math.random());
            const E = Math.hypot(p, h);
            E > kt && (p = p / E * kt,
            h = h / E * kt);
            const x = me(te(-1, 1, Math.random()), te(-1, 1, Math.random()), te(-1, 1, Math.random()))
              , g = dt(x);
            Si(g, g, Math.random() * 360);
            const v = Es(g);
            this.entries.push({
                position: [p, y, h],
                color: l.includes(m) ? he.TimeStop : F0(3),
                picked: !1,
                particleSpawned: !1,
                pickTimer: 1,
                entryTimer: 0,
                rotation: v,
                rotationDir: x
            })
        }
        let c = !1
          , d = 32;
        for (; !c; ) {
            if (d--,
            c = !0,
            d <= 0) {
                console.warn("[CHECK] Tries exceeded");
                break
            }
            for (const m of this.entries) {
                for (const y of this.entries)
                    if (m !== y) {
                        const h = ag(m.position, y.position);
                        if (h < Kf) {
                            const E = (Kf - h) * .6
                              , x = ys(Bt(), m.position, y.position);
                            $c(x, x),
                            vs(m.position, m.position, x, E),
                            vs(y.position, y.position, x, -E),
                            c = !1
                        }
                    }
                const p = Math.hypot(m.position[0], m.position[2]);
                p > kt && (m.position[0] = m.position[0] / p * kt,
                m.position[2] = m.position[2] / p * kt,
                c = !1)
            }
        }
    }
    set appear(t) {
        this.localAppear = xe(t);
        for (const n of this.particles)
            n.appear = t
    }
    get crateLights() {
        const t = [];
        for (let n = 0; n < this.visibleEntries.length; n++) {
            const r = this.visibleEntries[n]
              , i = this.entries[r]
              , o = Math.min(i.entryTimer, i.pickTimer);
            let s = Le.Blue;
            i.color === he.Green ? s = Le.Green : i.color === he.Pink && (s = Le.Pink),
            s = dt(s),
            Si(s, s, .75 * Yl(o)),
            t.push({
                position: i.position,
                color: s
            })
        }
        return t
    }
    click(t, n) {
        const [r,i] = q.projectRay([t, n]);
        let o = 1 / 0
          , s = -1;
        for (const a of this.visibleEntries) {
            const l = this.entries[a]
              , c = Bt();
            if (ry(c, r, i, l.position, 1.5) && !l.picked && l.entryTimer > .8) {
                const d = A0(r, c);
                d < o && (o = d,
                s = a)
            }
        }
        s !== -1 && this.clickEntry(s)
    }
    update(t, n) {
        const r = [];
        for (let s = 0; s < this.entries.length; s++) {
            const a = this.entries[s]
              , l = a.position[1] < Va && a.position[1] > Qf && (!a.picked || a.pickTimer > 0);
            if (a.position[1] -= Za * t * n,
            l) {
                const c = dt(a.rotationDir);
                Si(c, c, t * n * te(0, 1.5, a.pickTimer));
                const d = Es(c);
                pg(a.rotation, a.rotation, d);
                const m = Hn(a.position[1], Va, Qf);
                if (a.entryTimer = Hn(m, 0, Yf) * Hn(m, 1, 1 - Yf),
                a.picked && (a.pickTimer = Math.max(a.pickTimer - .05 * t, 0),
                !a.particleSpawned && a.pickTimer < .8)) {
                    const p = new Ls(a.color);
                    p.position = a.position,
                    p.quaternion = a.rotation,
                    this.particles.push(p),
                    a.particleSpawned = !0
                }
                this.visibleEntries.includes(s) || this.visibleEntries.push(s)
            } else
                this.visibleEntries.includes(s) && r.push(s)
        }
        for (const s of r) {
            const a = this.visibleEntries.indexOf(s);
            a !== -1 && this.visibleEntries.splice(a, 1)
        }
        const i = Array(4).fill(0);
        for (const s of this.visibleEntries)
            i[this.entries[s].color]++;
        for (let s = 0; s < i.length; s++)
            if (i[s] > this.crates[s].length) {
                const a = i[s] - this.crates[s].length;
                for (let l = 0; l < a; l++)
                    switch (s) {
                    case he.Blue:
                    case he.Pink:
                    case he.Green:
                        this.crates[s].push(new Ns(s));
                        break;
                    case he.TimeStop:
                        this.crates[s].push(new Ms);
                        break
                    }
            } else if (i[s] < this.crates.length) {
                const a = this.crates[s].length - i[s];
                for (let l = 0; l < a; l++) {
                    const c = this.crates[s].pop();
                    c && c.dispose()
                }
            }
        const o = [];
        for (const s of this.particles) {
            const a = s.position;
            a[1] -= Za * t * .5 * n,
            s.position = a,
            s.update(t),
            s.ended && o.push(s)
        }
        for (const s of o) {
            const a = this.particles.indexOf(s);
            a !== -1 && this.particles.splice(a, 1)
        }
    }
    render(t) {
        const n = []
          , r = []
          , i = Array(4).fill(0);
        for (let o = 0; o < this.visibleEntries.length; o++) {
            const s = this.visibleEntries[o]
              , a = this.entries[s]
              , l = i[a.color]
              , c = this.crates[a.color][l]
              , d = Math.min(a.entryTimer, a.pickTimer) * this.localAppear;
            i[a.color]++,
            c && (c.position = a.position,
            c.quaternion = a.rotation,
            c.unitScale = 1,
            c.appear = d,
            n.push(c),
            r.push({
                position: a.position,
                scale: (a.color === he.TimeStop ? te(2.7, 4, Math.sin((a.position[1] + a.position[0]) * 1.5) * .5 + .5) : 2.7) * te(1.5, 1, a.entryTimer),
                color: a.color,
                opacity: .75 * Yl(d)
            }))
        }
        this.crateGlow.entries = r,
        this.crateGlow.render(t);
        for (const o of n)
            o.render(t);
        for (const o of this.particles)
            o.render(t)
    }
    dispose() {
        this.crateGlow.dispose();
        for (const t of this.crates)
            for (const n of t)
                n.dispose();
        this.crates.length = 0
    }
    clickEntry(t) {
        const n = this.entries[t];
        n.picked = !0,
        this.onCrateScore(n.color, n.position);
        const r = ge.getSound("Game.CrateTone")
          , i = ge.getSound("Game.CrateBreak");
        if (r && i) {
            const o = [0, 7, 5, 3, -2]
              , s = Math.floor(Hn(n.position[0], -6, 6) * o.length);
            ge.play(r, !1, {
                detune: o[s] * 100,
                volume: .8
            }),
            ge.play(i, !1, {
                volume: 2,
                speed: 1
            })
        }
        if (n.color === he.TimeStop) {
            const o = ge.getSound("Game.ScreenFreeze");
            o && ge.play(o, !1, {
                volume: .4,
                speed: 1
            })
        }
    }
}
const oy = "/tggame/assets/ice_normal-Dg4vMLGL.jpg";
var qf = `struct CrateLight {
    vec3 position;
    vec3 color;
};

uniform sampler2D uLightMap;
uniform sampler2D uNormalMap;
uniform vec3 uCameraPosition;
uniform float uFreeze;
uniform vec3 uGlow;
uniform CrateLight uCrateLights[16];
uniform int uCrateLightCount;

#ifdef APPEAR
uniform float uAppear;
#endif

varying vec3 vNormal;
varying vec3 vMaterial;
varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vGlobalPos;

vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

#ifdef APPEAR

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
#endif

void main() {
    vec3 color = texture2D(uLightMap, vUv2).rgb;
    vec3 normalMap = texture2D(uNormalMap, vUv).rgb;
    vec3 normal = normalize(vNormal);

    color = hueShift(color, uFreeze * -1.0);

    vec3 vdir = normalize(uCameraPosition - vGlobalPos);
    for (int i = 0; i < uCrateLightCount; i++) {
        vec3 dir = normalize(vGlobalPos - uCrateLights[i].position);
        float l = pow(max(dot(reflect(dir, normal), vdir), 0.0), 32.0);
        color +=
            uCrateLights[i].color * l * vMaterial.b;
    }

    vec3 powColor = vec3(
        pow(color.r, 2.0),
        pow(color.g, 2.0),
        pow(color.b, 2.0)
    );
    color = mix(color, powColor, 0.3);
    color = mix(color, vec3(0.0), smoothstep(0.0, 35.0, vGlobalPos.z));
    color = mix(color, uGlow * 1.5, vMaterial.r);

    #ifdef APPEAR
    float factor = cnoise(vGlobalPos * 0.1) * 0.5 + 0.5;
    if (factor > uAppear) {
        discard;
    } else if (factor + 0.05 > uAppear) {
        color = vec3(1.0);
    }
    #endif

    gl_FragColor = vec4(color, 1.0);
}`
  , Xf = `attribute vec3 position;
attribute vec3 normal;
attribute vec3 material;
attribute vec2 uv;
attribute vec2 uv2;

uniform mat3 normalMat;

varying vec3 vNormal;
varying vec3 vMaterial;
varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vGlobalPos;

void main() {
    vNormal = normalize(normalMat * normal);
    vMaterial = material;
    vUv = uv;
    vUv2 = uv2;

    vec4 globalPos = modelMat * vec4(position, 1.0);
    vGlobalPos = globalPos.xyz;
    gl_Position = projMat * viewMat * globalPos;
}`;
const sy = "/tggame/assets/scene-Dy5-FuWz.rc3"
  , ay = "/tggame/assets/background_lightmap-vX1qy8FN.jpg";
var ly = `varying vec2 vUv;

const highp float NOISE_GRANULARITY = 0.5 / 255.0;

highp float random(highp vec2 coords) {
    return fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
    const vec3 CIRCLE_START = vec3(0.21568627450980393, 0, 0.3215686274509804);
    const vec3 CIRCLE_END = vec3(0.10980392156862745, 0, 0.1607843137254902);
    const vec3 LINEAR = vec3(0.0, 84.0 / 255.0, 246.0 / 255.0);

    vec4 color1 = vec4(mix(CIRCLE_START, CIRCLE_END, clamp(length(vUv), 0.0, 1.0)), 1.0);
    vec4 color2 = mix(vec4(LINEAR, 0.2), vec4(LINEAR, 0.0), 1.0 - (vUv.y * 0.5 + 0.5));
    vec4 final = vec4(color2.rgb * color2.a + color1.rgb * (1.0 - color2.a), 1.0);

    final.rgb += mix(-NOISE_GRANULARITY, NOISE_GRANULARITY, random(vUv));
    gl_FragColor = vec4(final.rgb, 1.0);
}`
  , cy = `in vec2 position;

varying vec2 vUv;

void main() {
    vUv = position;
    gl_Position = vec4(position, 0.0, 1.0);
}`;
const Ye = class Ye extends io {
    constructor() {
        super();
        S(this, "task");
        S(this, "localLights");
        S(this, "localAppear");
        S(this, "localFreeze");
        this.localLights = [],
        this.localAppear = .1,
        this.localFreeze = 0,
        this.task = {
            callback: ()=>this.drawMesh()
        }
    }
    set appear(n) {
        this.localAppear = xe(n)
    }
    set freeze(n) {
        this.localFreeze = xe(n)
    }
    set crateLights(n) {
        this.localLights.length = 0,
        n.length > 16 ? this.localLights.push(...n.slice(0, 16)) : this.localLights.push(...n)
    }
    static async preload() {
        [this.lightMap] = await Promise.all([gh(ay)]);
        const n = await fetch(sy).then(l=>l.arrayBuffer())
          , r = new ou(n);
        r.offset += 4;
        const i = []
          , o = [];
        let s = 0;
        const a = r.readByte();
        for (let l = 0; l < a; l++) {
            const c = r.readString()
              , d = c.startsWith("emit") ? 1 : 0
              , m = c.startsWith("emit") ? 0 : .2;
            let p = 1;
            c === "bg" ? p = .1 : c === "object" && (p = .4);
            const y = r.readShort();
            for (let E = 0; E < y; E++) {
                const x = r.readFloat()
                  , g = r.readFloat()
                  , v = r.readFloat()
                  , w = r.readFloat()
                  , _ = r.readFloat()
                  , C = r.readFloat()
                  , R = r.readFloat()
                  , T = r.readFloat()
                  , k = r.readFloat()
                  , O = r.readFloat();
                i.push(x, g, v, w, _, C, R, T, k, O, d, m, p)
            }
            const h = r.readShort();
            for (let E = 0; E < h * 3; E++)
                o.push(r.readShort() + s);
            s += y
        }
        this.vertexBuffer = Rt(new Float32Array(i)),
        this.indexBuffer = xn(new Uint16Array(o)),
        this.indexCount = o.length,
        this.quadVertexBuffer = Rt(new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1])),
        this.quadIndexBuffer = xn(new Uint8Array([0, 2, 1, 1, 2, 3])),
        this.shader = new ye(qf,Xf),
        this.appearShader = new ye(qf,Xf,{
            defines: {
                APPEAR: "true"
            }
        }),
        this.gradientShader = new ye(ly,cy),
        this.vao = u.createVertexArray(),
        this.shader.bind(),
        u.bindVertexArray(this.vao),
        this.shader.setBuffer("position", this.vertexBuffer, 3, u.FLOAT, !1, 52, 0),
        this.shader.setBuffer("normal", this.vertexBuffer, 3, u.FLOAT, !1, 52, 12),
        this.shader.setBuffer("uv", this.vertexBuffer, 2, u.FLOAT, !1, 52, 24),
        this.shader.setBuffer("uv2", this.vertexBuffer, 2, u.FLOAT, !1, 52, 32),
        this.shader.setBuffer("material", this.vertexBuffer, 3, u.FLOAT, !1, 52, 40),
        u.bindVertexArray(null),
        this.shader.unbind()
    }
    render(n) {
        n.addTasks(this.task)
    }
    drawMesh() {
        const {shader: n, appearShader: r, gradientShader: i, indexBuffer: o, indexCount: s, vao: a, lightMap: l, quadVertexBuffer: c, quadIndexBuffer: d} = Ye
          , m = this.localAppear < 1 ? r : n;
        m && (this.localAppear < 1 && (u.disable(u.DEPTH_TEST),
        u.depthMask(!1),
        i.bind(),
        i.setBuffer("position", c, 2, u.FLOAT),
        i.draw(d, 6, u.TRIANGLES, u.UNSIGNED_BYTE),
        i.unbind(),
        u.enable(u.DEPTH_TEST),
        u.depthMask(!0),
        this.localAppear === 0) || (m.updateMatrix(this.matrix),
        m.bind(),
        m.setUniforms({
            normalMat: this.normalMatrix,
            viewNormalMat: q.normalMatrix,
            uGlow: ct(16746751),
            uLightMap: l,
            uAppear: this.localAppear,
            uFreeze: this.localFreeze,
            uCameraPosition: q.position,
            uCrateLights: this.localLights,
            uCrateLightCount: this.localLights.length
        }),
        u.bindVertexArray(a),
        m.draw(o, s),
        u.bindVertexArray(null),
        m.unbind()))
    }
}
;
S(Ye, "lightMap"),
S(Ye, "quadVertexBuffer"),
S(Ye, "quadIndexBuffer"),
S(Ye, "vertexBuffer"),
S(Ye, "indexBuffer"),
S(Ye, "indexCount"),
S(Ye, "shader"),
S(Ye, "appearShader"),
S(Ye, "gradientShader"),
S(Ye, "vao");
let Is = Ye;
var uy = `uniform sampler2D uDiffuse;

varying vec2 vUv;
varying vec3 vColor;
varying float vTime;

void main() {
    vec3 color = vec3(vColor);
    color *= texture2D(uDiffuse, vec2(vUv.x, 1.0 - vUv.y)).rgb;
    color *= 1.0 - pow(vTime, 2.0);

    gl_FragColor = vec4(color, 1.0);
}`
  , fy = `attribute vec2 position;
attribute vec3 offset;
attribute vec3 color;
attribute float frame;
attribute float time;
attribute float direction;

varying vec2 vUv;
varying vec3 vColor;
varying float vTime;

void main() {
    vec3 pos = vec3(position * 0.5, 0.0) + offset + vec3(sin(time * 4.0) * direction * 0.3, time * 5.0, 0.0);
    vUv = (position * 0.5 + 0.5) * vec2(1.0, 0.5) + vec2(0.0, frame);
    vColor = color;
    vTime = time;

    gl_Position = projMat * viewMat * modelMat * vec4(pos, 1.0);
}`;
const Fn = class Fn extends io {
    constructor() {
        super();
        S(this, "instanceBuffer");
        S(this, "instanceCount");
        S(this, "task");
        S(this, "entries");
        this.entries = [],
        this.instanceBuffer = u.createBuffer(),
        this.instanceCount = 0,
        this.task = {
            callback: ()=>this.drawMesh()
        }
    }
    static async preload() {
        await document.fonts.load("500 4rem 'Resist Display'", "+-1"),
        await document.fonts.ready,
        this.scoreTexture = this.createTexture(),
        this.vertexBuffer = Rt(new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1])),
        this.indexBuffer = xn(new Uint8Array([0, 2, 1, 1, 2, 3])),
        this.shader = new ye(uy,fy)
    }
    update(n) {
        const r = [];
        for (const i of this.entries)
            i.time = Math.min(i.time + .02 * n, 1),
            i.time === 1 && r.push(i);
        for (const i of r)
            this.entries.splice(this.entries.indexOf(i), 1);
        if (this.instanceCount = this.entries.length,
        this.instanceCount > 0) {
            const i = [];
            for (const o of this.entries)
                i.push(o.position[0], o.position[1], o.position[2], o.color[0], o.color[1], o.color[2], o.frame, o.time, o.dir);
            au(this.instanceBuffer, new Float32Array(i), u.STREAM_DRAW)
        }
    }
    render(n) {
        n.addTasks(this.task)
    }
    dispose() {}
    placeScore(n, r, i=!1) {
        this.entries.push({
            position: dt(n),
            color: dt(r),
            time: 0,
            frame: i ? 0 : .5,
            dir: Math.random() >= .5 ? -1 : 1
        })
    }
    drawMesh() {
        if (this.instanceCount === 0)
            return;
        const {shader: n, vertexBuffer: r, indexBuffer: i, scoreTexture: o} = Fn;
        u.disable(u.DEPTH_TEST),
        u.depthMask(!1),
        u.enable(u.BLEND),
        u.blendFunc(u.ONE, u.ONE),
        n.updateMatrix(this.matrix),
        n.bind(),
        n.setUniforms({
            uDiffuse: o
        }),
        n.setBuffer("position", r, 2, u.FLOAT, !1),
        n.setBuffer("offset", this.instanceBuffer, 3, u.FLOAT, !1, 36, 0, !1, !0),
        n.setBuffer("color", this.instanceBuffer, 3, u.FLOAT, !1, 36, 12, !1, !0),
        n.setBuffer("frame", this.instanceBuffer, 1, u.FLOAT, !1, 36, 24, !1, !0),
        n.setBuffer("time", this.instanceBuffer, 1, u.FLOAT, !1, 36, 28, !1, !0),
        n.setBuffer("direction", this.instanceBuffer, 1, u.FLOAT, !1, 36, 32, !1, !0),
        n.draw(i, 6, u.TRIANGLES, u.UNSIGNED_BYTE, 0, this.instanceCount),
        n.unbind(),
        u.disable(u.BLEND),
        u.depthMask(!0),
        u.enable(u.DEPTH_TEST)
    }
    static createTexture() {
        const n = document.createElement("canvas");
        n.width = 64,
        n.height = 128;
        const r = n.getContext("2d");
        r.fillStyle = "#000",
        r.fillRect(0, 0, 64, 128),
        r.fillStyle = "#fff",
        r.font = "500 4rem 'Resist Display'",
        r.textAlign = "center",
        r.fillText("+1", 32, 64);
        const i = u.createTexture();
        return u.bindTexture(u.TEXTURE_2D, i),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.LINEAR),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR),
        u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, u.RGBA, u.UNSIGNED_BYTE, n),
        u.bindTexture(u.TEXTURE_2D, null),
        i
    }
}
;
S(Fn, "shader"),
S(Fn, "vertexBuffer"),
S(Fn, "indexBuffer"),
S(Fn, "scoreTexture");
let Bs = Fn;
var dy = `uniform vec3 uColor;
uniform float uAppear;
uniform float uFreeze;

varying vec2 vUv;

vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float horFactor = 1.0 - pow(abs(vUv.x), 3.0);
    float vertFactor = smoothstep(1.0, 0.8, abs(vUv.y));
    float centerFactor = pow(1.0 - clamp(length(vUv * vec2(1.0, 0.3)), 0.0, 1.0), 3.0);

    vec3 color = vec3(0.0);
    color += uColor * vertFactor * horFactor * 0.4;
    color += uColor * centerFactor * 0.4;
    color = hueShift(color, -0.8 * uFreeze);
    color *= 0.8;
    color *= uAppear;

    gl_FragColor = vec4(color, 1.0);
}`
  , hy = `attribute vec2 position;

uniform vec3 uScale;
uniform float uAppear;

varying vec2 vUv;

void main() {
    vec3 pos = vec3(position, 0.0) * uScale * vec3(uAppear, 1.0, 1.0);
    vUv = position;

    gl_Position = projMat * viewMat * modelMat * vec4(pos, 1.0);
}`
  , py = `uniform float uAppear;

varying float vTime;
varying vec2 vUv;

void main() {
    vec3 color = vec3(1.0);
    float alpha = smoothstep(0.0, 0.2, vTime) * (1.0 - smoothstep(0.8, 1.0, vTime));
    float ring = pow(1.0 - length(vUv), 6.0);

    color *= alpha;
    color *= ring;
    color *= 0.6;
    color *= uAppear;

    gl_FragColor = vec4(color, 1.0);
}`
  , my = `attribute vec2 position;
attribute vec3 start;
attribute vec3 end;
attribute float timeOffset;
attribute float scale;

uniform float uTime;
uniform float uScale;

varying vec2 vUv;
varying float vTime;

void main() {
    float time = min(fract(uTime + timeOffset) * 2.0, 1.0);
    vTime = time;
    vUv = position;

    vec3 pos = vec3(position, 0.0) * (uScale * scale);
    pos += mix(start, end, time);

    gl_Position = projMat * viewMat * modelMat * vec4(pos, 1.0);
}`;
const Dn = class Dn extends io {
    constructor() {
        super();
        S(this, "instanceBuffer");
        S(this, "instanceCount");
        S(this, "time");
        S(this, "task");
        S(this, "localAppear");
        S(this, "localFreeze");
        this.time = 0,
        this.localAppear = 1,
        this.localFreeze = 0;
        const n = []
          , r = 128;
        for (let i = 0; i < r; i++) {
            const o = Math.random() * Math.PI * 2
              , s = Math.random() * 5
              , a = Math.sin(o) * s
              , l = te(9, 10, Math.random())
              , c = Math.cos(o) * s
              , d = a
              , m = -te(5, 10, Math.random())
              , p = l
              , y = Math.random()
              , h = te(.2, 1, Math.random());
            n.push(a, l, c, d, m, p, y, h)
        }
        this.instanceBuffer = Rt(new Float32Array(n)),
        this.instanceCount = r,
        this.task = {
            callback: ()=>this.drawMesh()
        }
    }
    set appear(n) {
        this.localAppear = xe(n)
    }
    set freeze(n) {
        this.localFreeze = xe(n)
    }
    static async preload() {
        this.vertexBuffer = Rt(new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1])),
        this.indexBuffer = xn(new Uint8Array([0, 2, 1, 1, 2, 3])),
        this.pipeShader = new ye(dy,hy),
        this.particleShader = new ye(py,my)
    }
    update(n) {
        this.time = (this.time + .15 * n) % 100
    }
    render(n) {
        n.addTasks(this.task)
    }
    dispose() {}
    drawMesh() {
        const {vertexBuffer: n, indexBuffer: r, pipeShader: i, particleShader: o} = Dn;
        i && (u.disable(u.DEPTH_TEST),
        u.depthMask(!1),
        u.enable(u.BLEND),
        u.blendFunc(u.ONE, u.ONE),
        i.updateMatrix(this.matrix),
        i.bind(),
        i.setUniforms({
            uScale: [6, 10, 1],
            uColor: ct(9371903),
            uAppear: this.localAppear,
            uFreeze: this.localFreeze
        }),
        i.setBuffer("position", n, 2, u.FLOAT),
        i.draw(r, 6, u.TRIANGLES, u.UNSIGNED_BYTE),
        i.unbind(),
        o.updateMatrix(this.matrix),
        o.bind(),
        o.setUniforms({
            uTime: this.time / 100,
            uScale: .4,
            uAppear: this.localAppear
        }),
        o.setBuffer("position", n, 2, u.FLOAT),
        o.setBuffer("start", this.instanceBuffer, 3, u.FLOAT, !1, 32, 0, !1, !0),
        o.setBuffer("end", this.instanceBuffer, 3, u.FLOAT, !1, 32, 12, !1, !0),
        o.setBuffer("timeOffset", this.instanceBuffer, 1, u.FLOAT, !1, 32, 24, !1, !0),
        o.setBuffer("scale", this.instanceBuffer, 1, u.FLOAT, !1, 32, 28, !1, !0),
        o.draw(r, 6, u.TRIANGLES, u.UNSIGNED_BYTE, 0, this.instanceCount),
        o.unbind(),
        u.disable(u.BLEND),
        u.depthMask(!0),
        u.enable(u.DEPTH_TEST))
    }
}
;
S(Dn, "pipeShader"),
S(Dn, "particleShader"),
S(Dn, "vertexBuffer"),
S(Dn, "indexBuffer");
let Os = Dn;
class gy {
    resize(t, n) {}
    dispose() {}
}
class vy {
    constructor(t) {
        this.callback = t,
        this.handleMouse = this.handleMouse.bind(this),
        this.handleTouch = this.handleTouch.bind(this),
        window.addEventListener("mousedown", this.handleMouse),
        window.addEventListener("touchstart", this.handleTouch)
    }
    dispose() {
        window.removeEventListener("mousedown", this.handleMouse),
        window.removeEventListener("touchstart", this.handleTouch)
    }
    handleTouch(t) {
        t.changedTouches.length > 0 && this.handleCoords(t.changedTouches[0].clientX, t.changedTouches[0].clientY)
    }
    handleMouse(t) {
        this.handleCoords(t.clientX, t.clientY)
    }
    handleCoords(t, n) {
        const r = window.innerWidth
          , i = window.innerHeight;
        this.callback(t / r, n / i)
    }
}
const Ga = 120
  , Ds = class Ds extends gy {
    constructor(n) {
        super();
        S(this, "background");
        S(this, "pipeEffects");
        S(this, "crateManager");
        S(this, "clickHandler");
        S(this, "floatScore");
        S(this, "bob", 0);
        S(this, "score", 0);
        S(this, "secondsLeft");
        S(this, "secondsFlat");
        S(this, "pausedFactor");
        S(this, "paused");
        S(this, "state");
        S(this, "targetState");
        S(this, "stateTimer");
        S(this, "freezeTime");
        S(this, "freezeState");
        S(this, "music");
        S(this, "musicIntro");
        S(this, "exited");
        S(this, "playerExit");
        S(this, "soundFilters");
        this.callbacks = n,
        this.score = 0,
        this.background = new Is,
        this.floatScore = new Bs,
        this.secondsFlat = Ga,
        this.secondsLeft = Ga,
        this.freezeState = 0,
        this.freezeTime = 0,
        this.pausedFactor = 0,
        this.paused = !1,
        this.state = 0,
        this.targetState = 1,
        this.stateTimer = 0,
        this.exited = !1,
        this.playerExit = !1,
        this.soundFilters = [],
        this.crateManager = new iy(Ga,(i,o)=>{
            if (i === he.TimeStop)
                this.freezeTime = 2;
            else {
                let s = Le.Blue;
                i === he.Green ? s = Le.Green : i === he.Pink && (s = Le.Pink),
                this.score++,
                this.floatScore.placeScore(o, s),
                this.callbacks.setScore(this.score)
            }
        }
        ,i=>n.setTime(i)),
        this.callbacks.setScore(this.score),
        this.pipeEffects = new Os,
        this.clickHandler = new vy((i,o)=>{
            this.paused || this.crateManager.click(i, o)
        }
        ),
        this.background.unitScale = 8.4,
        this.background.position = [0, -14, 0],
        this.pipeEffects.position = [0, -2, 0],
        this.music = null,
        this.musicIntro = null,
        ge.play(ge.getSound("Game.TubeEnter"), !1, {
            volume: 1.5
        });
        const r = ge.getSound("Music.GameIntro");
        r && (this.musicIntro = ge.playMusic(r, !1, {}, (i,o,s)=>this.makeMusicChain(i, o, s)))
    }
    static async preload() {
        this.freezeVignetteTexture = await gh(oy)
    }
    update(n) {
        if (!this.paused && this.state === 1 && (this.freezeState = xe(this.freezeState + (this.freezeTime > 0 ? 2 : -1) * .02 * n),
        this.freezeTime = Math.max(0, this.freezeTime - n * .01667),
        this.secondsLeft = Math.max(0, this.secondsLeft - n * .01667 * (1 - this.freezeState)),
        Math.floor(this.secondsLeft) !== this.secondsFlat && (this.secondsFlat = Math.floor(this.secondsLeft),
        this.callbacks.setTime(this.secondsFlat))),
        this.secondsLeft === 0 && this.targetState !== 2 ? (this.targetState = 2,
        this.stateTimer = 0,
        this.callbacks.hideScore()) : this.state === 2 && (this.exited || (this.exited = !0,
        this.callbacks.navigate(this.playerExit ? null : this.score))),
        this.stateTimer = xe(this.stateTimer + .01 * n),
        this.targetState !== this.state && this.stateTimer === 1 && (this.state = this.targetState,
        this.stateTimer = 0),
        this.musicIntro && this.musicIntro.ended && !this.music) {
            const s = ge.getSound("Music.Game");
            s && (this.music = ge.playMusic(s, !0, {}, (a,l,c)=>this.makeMusicChain(a, l, c)))
        }
        if (this.music) {
            const s = this.freezeState;
            for (const a of this.soundFilters)
                a.wetGain.gain.value = s,
                a.dryGain.gain.value = 1 - a.wetGain.gain.value;
            this.music.speed = te(1, .7, Math.max(this.pausedFactor)),
            this.music.volume = te(.3, 1, 1 - this.pausedFactor) * (1 - this.getScreenState(2))
        }
        this.bob = (this.bob + .01 * n) % (Math.PI * 2),
        this.pausedFactor = xe(this.pausedFactor + .1 * (this.paused ? 1 : -.2) * n);
        const r = (1 - this.pausedFactor) * (this.state === 0 ? 0 : this.getScreenState(1));
        this.crateManager.update(n * r, Ps(xe(1 - this.freezeState))),
        this.pipeEffects.update(n * (1 - this.pausedFactor) * (1 - this.freezeState)),
        this.floatScore.update(n * r);
        const i = ty(this.getScreenState(0))
          , o = 1.5;
        q.zoom = o,
        q.lookAt([Math.sin(this.bob) * 2, 0, 40 * o - i * 40], [0, 0, 0])
    }
    render(n) {
        n.vignetteColor = ct(8956671),
        n.vignette = Yl(this.freezeState),
        n.vignetteDisplace = Ds.freezeVignetteTexture,
        n.clearColor = [0, 0, 0, 1];
        const r = this.getScreenState(1);
        this.background.appear = Ps(Hn(r, 0, .8)),
        this.background.freeze = this.freezeState,
        this.pipeEffects.appear = Wf(Hn(r, .4, 1)),
        this.pipeEffects.freeze = this.freezeState,
        this.crateManager.appear = Wf(Hn(r, .4, 1)),
        this.background.crateLights = this.crateManager.crateLights,
        this.background.render(n),
        this.pipeEffects.render(n),
        this.floatScore.render(n),
        this.crateManager.render(n)
    }
    resize(n, r) {
        super.resize(n, r),
        q.updateProjection(n / r)
    }
    setPaused(n) {
        this.paused = n
    }
    leaveGame() {
        this.targetState !== 2 && (this.targetState = 2,
        this.stateTimer = 0,
        this.playerExit = !0,
        this.callbacks.hideScore())
    }
    dispose() {
        super.dispose(),
        this.pipeEffects.dispose(),
        this.clickHandler.dispose(),
        this.crateManager.dispose(),
        this.music && (this.music.ended = !0,
        this.music = null),
        this.musicIntro && (this.musicIntro.ended = !0,
        this.musicIntro = null)
    }
    getScreenState(n) {
        if (this.targetState !== this.state) {
            if (this.state === n)
                return xe(1 - this.stateTimer);
            if (this.targetState === n)
                return xe(this.stateTimer)
        }
        return this.state === n ? 1 : 0
    }
    makeMusicChain(n, r, i) {
        const o = n.createGain()
          , s = n.createGain()
          , a = n.createBiquadFilter();
        o.gain.value = 1,
        s.gain.value = 0,
        a.type = "lowpass",
        a.frequency.value = 700,
        r.connect(o),
        r.connect(a),
        a.connect(s),
        o.connect(i),
        s.connect(i),
        this.soundFilters.push({
            dryGain: o,
            wetGain: s,
            filter: a
        })
    }
}
;
S(Ds, "freezeVignetteTexture");
let Fs = Ds;
const yy = "_page_b0tlo_1"
  , Ey = "_page__content_b0tlo_6"
  , wy = "_card_b0tlo_14"
  , Jf = {
    page: yy,
    page__content: Ey,
    card: wy
};
function xy(e, ...t) {
    const n = M.useRef(null)
      , r = M.useContext(S0);
    return M.useEffect(()=>{
        if (r) {
            const i = new e(...t);
            return n.current = i,
            r.setScreen(i),
            ()=>{
                n.current = null,
                r.setScreen(null)
            }
        }
    }
    , [r]),
    n
}
function Sy() {
    const [e,t] = M.useState(0)
      , [n,r] = M.useState(120)
      , [i,o] = M.useState(!1)
      , [s,a] = M.useState(!1)
      , l = M.useContext(Rn)
      , c = xy(Fs, {
        setScore: t,
        setTime: r,
        hideScore: ()=>a(!1),
        navigate: d=>{
            d !== null ? l.setScreen(X.Results, {
                score: d
            }) : l.setScreen(X.Menu)
        }
    });
    return M.useEffect(()=>{
        var d;
        (d = c.current) == null || d.setPaused(i)
    }
    , [i]),
    M.useEffect(()=>{
        setTimeout(()=>{
            a(!0)
        }
        , 500)
    }
    , []),
    f.jsx("div", {
        className: Jf.page,
        children: f.jsxs("div", {
            className: Jf.page__content,
            children: [f.jsx(a5, {
                score: e,
                time: n,
                onPauseButton: ()=>o(!0),
                visible: s
            }), f.jsx(q4, {
                active: i,
                score: e,
                time: n,
                onContinue: ()=>o(!1),
                onMenu: ()=>{
                    var d;
                    o(!1),
                    (d = c.current) == null || d.leaveGame()
                }
            })]
        })
    })
}
const Cy = "_historyPage_1rkoc_1"
  , _y = {
    historyPage: Cy
};
function Ry() {
    return f.jsx(ro, {
        children: f.jsxs("div", {
            className: _y.historyPage,
            children: [f.jsx(V, {
                design: "header-l",
                as: "h1",
                children: "История"
            }), f.jsx(V, {
                design: "text-l",
                children: "Этот раздел будет доступен позднее. Следи за нашими обновлениями"
            })]
        })
    })
}
const Ty = "_title_1r8u7_1"
  , Ay = "_list_1r8u7_6"
  , ed = {
    title: Ty,
    list: Ay
}
  , Lr = [f.jsx(f.Fragment, {
    children: "Тапай на цветные кейсы и получай вуды. А еще иногда могут выпадать часы — они замедлят время и можно натапать еще больше вудов"
}), f.jsx(f.Fragment, {
    children: "У тебя есть 2 минуты на игру. Если выйдешь раньше этого времени, заработанное потеряется. Каждые 24 часа время обновляется, и ты можешь играть снова"
}), f.jsxs(f.Fragment, {
    children: ["Накопленные вуды можно использовать для открытия кейсов с бесплатным оружием и голдой для Standoff2 в ", f.jsx("a", {
        href: dh,
        target: "_blank",
        rel: "noreferrer noopener",
        children: "VozWooden.Kollective"
    })]
})];
function ky({active: e, onClose: t}) {
    return f.jsxs(ru, {
        active: e,
        onClose: t,
        children: [f.jsx(V, {
            design: "header-l",
            as: "h3",
            className: ed.title,
            children: "Как играть"
        }), f.jsxs("ol", {
            className: Z(Ct["text-m"], ed.list),
            children: [f.jsxs("li", {
                children: [f.jsx(V, {
                    children: Lr[0]
                }), f.jsx(V, {
                    children: "1 кейс = 1 вуд"
                })]
            }), f.jsx("li", {
                children: Lr[1]
            }), f.jsx("li", {
                children: Lr[2]
            })]
        }), f.jsx(Tn, {
            onClick: t,
            children: "Понятно"
        })]
    })
}
const Ny = "_authorizedState_1eyp1_1"
  , My = "_timerDescription_1eyp1_6"
  , Ly = "_timer_1eyp1_6"
  , Py = "_description_1eyp1_16"
  , Iy = "_boxRate_1eyp1_20"
  , By = "_playButton_1eyp1_25"
  , Oy = "_rulesButton_1eyp1_29"
  , Fy = "_logoutButton_1eyp1_36"
  , tn = {
    authorizedState: Ny,
    timerDescription: My,
    timer: Ly,
    description: Py,
    boxRate: Iy,
    playButton: By,
    rulesButton: Oy,
    logoutButton: Fy
}
  , Dy = ()=>{
    const {setScreen: e} = M.useContext(Rn)
      , {nextGameAt: t} = M.useContext(ir)
      , [n,r] = M.useState(!1)
      , [i,o] = M.useState(t ? new Date(t).getTime() < Date.now() : !0)
      , s = async()=>{
        const a = await Vt.getRefreshToken()
          , l = await Vt.getAccessToken();
        a && l ? Sr.keycloak.logout(a, l) : tu()
    }
    ;
    return f.jsxs(f.Fragment, {
        children: [f.jsxs("div", {
            className: tn.authorizedState,
            children: [!i && f.jsxs(f.Fragment, {
                children: [f.jsx(V, {
                    design: "text-m",
                    className: tn.timerDescription,
                    children: "Новая игра будет доступна через:"
                }), f.jsx(iu, {
                    timeTo: t,
                    className: tn.timer,
                    onTimerEnd: ()=>o(!0)
                })]
            }), i && f.jsxs(f.Fragment, {
                children: [f.jsx(V, {
                    design: "text-l",
                    className: tn.description,
                    children: "Тапай цветные кейсы и получай за это вуды."
                }), f.jsx(nu, {
                    boxCount: 1,
                    woodCount: 1,
                    className: Z(Ct["text-l"], tn.boxRate)
                })]
            }), f.jsx(Tn, {
                onClick: ()=>e(X.Game),
                className: tn.playButton,
                disabled: !i,
                children: "Играть"
            }), f.jsx("button", {
                className: Z(Ct["display-xs"], tn.rulesButton),
                onClick: ()=>r(!0),
                children: "Правила игры"
            }), f.jsxs("button", {
                className: Z(Ct["control-s"], tn.logoutButton),
                onClick: s,
                children: [f.jsx(Me.Logout, {}), "Выйти из аккаунта"]
            })]
        }), f.jsx(ky, {
            active: n,
            onClose: ()=>r(!1)
        })]
    })
}
  , jy = "_unauthorizedState_1bcyj_1"
  , zy = "_description_1bcyj_5"
  , Uy = "_instructionBlock_1bcyj_14"
  , by = "_title_1bcyj_18"
  , Hy = "_instructionList_1bcyj_22"
  , Vy = "_instruction_1bcyj_14"
  , Zy = "_hr_1bcyj_37"
  , Gy = "_boxRate_1bcyj_43"
  , vt = {
    unauthorizedState: jy,
    description: zy,
    instructionBlock: Uy,
    title: by,
    instructionList: Hy,
    instruction: Vy,
    hr: Zy,
    boxRate: Gy
}
  , $y = "/tggame/assets/highlight-clock-e-H8IVpM.png"
  , Wy = "/tggame/assets/highlight-coins-Cc8WQE_M.png"
  , Qy = ()=>{
    const {setScreen: e} = M.useContext(Rn);
    return f.jsxs("div", {
        className: vt.unauthorizedState,
        children: [f.jsx(V, {
            design: "text-s-mono",
            className: vt.description,
            children: "Авторизируйся, чтобы войти в единый аккаунт сервисов VozWooden и сохранить заработанные вуды на свой счет"
        }), f.jsxs("div", {
            className: vt.instructionBlock,
            children: [f.jsx(V, {
                design: "header-m",
                className: vt.title,
                children: "Как играть"
            }), f.jsxs("ul", {
                className: vt.instructionList,
                children: [f.jsxs("li", {
                    className: vt.instruction,
                    children: [f.jsx("img", {
                        src: mh,
                        width: "100%",
                        alt: ""
                    }), f.jsxs("div", {
                        children: [f.jsx(V, {
                            design: "text-m",
                            children: Lr[0]
                        }), f.jsx(nu, {
                            boxCount: 1,
                            woodCount: 1,
                            className: Z(Ct["text-l"], vt.boxRate)
                        })]
                    })]
                }), f.jsx("li", {
                    className: vt.hr,
                    children: f.jsx(Me.HorizontalRule, {})
                }), f.jsxs("li", {
                    className: vt.instruction,
                    children: [f.jsx("img", {
                        src: $y,
                        width: "100%",
                        alt: ""
                    }), f.jsx(V, {
                        design: "text-m",
                        children: Lr[1]
                    })]
                }), f.jsx("li", {
                    className: vt.hr,
                    children: f.jsx(Me.HorizontalRule, {})
                }), f.jsxs("li", {
                    className: vt.instruction,
                    children: [f.jsx("img", {
                        src: Wy,
                        width: "100%",
                        alt: ""
                    }), f.jsx(V, {
                        design: "text-m",
                        children: Lr[2]
                    })]
                })]
            })]
        }), f.jsx(Tn, {
            onClick: ()=>e(X.Game),
            children: "Играть"
        })]
    })
}
  , Yy = "_hexagonBackground_8urkp_1"
  , Ky = {
    hexagonBackground: Yy
}
  , qy = ({variant: e})=>{
    const t = e === "md" ? "100" : "40"
      , n = e === "md" ? "116" : "46";
    return f.jsx("svg", {
        className: Ky.hexagonBackground,
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: n,
        viewBox: "0 0 100 116",
        fill: "none",
        children: f.jsx("path", {
            d: "M50 0.5L100 29.25V86.75L50 115.5L0 86.75V29.25L50 0.5Z",
            fill: "#8F00FF"
        })
    })
}
  , Xy = "_avatar_19zt7_1"
  , Jy = "_avatarHeader_19zt7_10"
  , e8 = "_avatarImageWrapper_19zt7_15"
  , t8 = "_avatarImage_19zt7_15"
  , n8 = "_glow_19zt7_30"
  , r8 = "_highlight_19zt7_37"
  , ar = {
    avatar: Xy,
    avatarHeader: Jy,
    avatarImageWrapper: e8,
    avatarImage: t8,
    glow: n8,
    highlight: r8
}
  , i8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABcCAIAAAB2saWBAAAABmJLR0QA/wD/AP+gvaeTAAANJklEQVR42u1cDYxUVxW+580s7PK37A8suyw/5Xft7gIL64IFWrCIRTQtEpuW1GJjagJJk5paG2OipqDRpAahrVrFYqNJa6RAkYJUbZUShAKtQENF/smWLV3YgrDLzm6Z49udefedc3/eezP705ruZDN5c+fNzDv3fPc73zn3vIVF4k7xSXo44hP26DO4z+A+g/+/H3EhsNd/FMgx9r7BvWmebUT02hTEsad+ACxDoI0h9qLl8R6zEywWGj4CIYbix9PDABYfQeSvwKBx7C6Du8WtrlGA3MPeEWDmCxfN52C3QBq7bKq8yI4FSUZSRxiBrlAhblCNRPnhLprdJQ+DCbR0pCuQRvu7+JGQFqRxC8QooCwF3KvBBIYcEUiwgxwenW8h9i5pAUgEcwyjemXZUC0GORnleHZMlgWkU9ayZ8/MtIeRQZqyN2QBaeRLm1qL/qrqKdJyrx6VZy3+ojFKRWFpToBIYUKAjcifMzIhIw9Lr4KH59QaTk287l4Q6lIEoVGaxcko45nnSRaT0fd2Zn7OYA0TDAv+7IMNDHFFQGYCI2AlI8Gzgm3sZkiDLxXTYKMjStQFDecZQRr9+UUa/ASbaNSmHrsN0p0YBu+ZMhZ48YOiWoG3hDTYk0PfKDR7WILIh7qG7Ug2O5HjRAo2CqhQwyFQLk0d6LIR7ePKRGir1xCZ6IV1o/BI8xPHtk9aJCxJryo6BILnVF/2Hm7Bk58SLBLPkj6jcnUIaSlyRyoNyV70CnU1opgRpd6BVo3hizAPSijPwcg5Rvga1mwGunrJGpYjksmBaw+IlgP6nyKIBWIMKMuKfCFgGLaDWBp4lAHOxhy9fnAiHI5UfoSyNKFoVHhYLlFvHJGnLhQCwYwdAGmKUl/0ED8LfkFAp0ePyVEgjSo/qQUAzbcoSYsSasCSjkcq1fh05bMUEJYi79KXZvYKqF9qU4aCqB3P8+D5kKkgQbKoAOUVRFrA9aBgsR68HwCetYG3dBHULMKe/mvH3lWBEnK8Va0EJORUh2jXXmbSgnQAlGIDZIylIoRymIxMXH4YtAdYlLMFyaq0Rk1aovUEzEZaguVAe0nZyyc8XYEGQxo9OpSkxbkKCaXJl+iJUH89m6RN2sNgkxmebPI9rHseycn8NEFeqpmTLUNCnlp5V6+4DpTwi5qGEzZzjWsYvG/kSx/AMOvqyURvgI2oIVJ6BOira7Ys+Usk+oQNkpPZIzZKjDXCDIQUjQBklUquBkbFQGRmmq7JZ9PzddfDiybOuGnlzx9wL6f2jqmX3v1g/rJbHMcZMCTvysWrwLMxy5pCCCx6gopnzIy0BJGQVC0iux4wlS8VyQUrnv7aF1d+LvXexNpxzZdbJs+aMPNL01MjO9e/tnvjvgM7D3kJA9L8ScpJztI0x0B6jkmEeafOEvM0BzPvcZc6gmhJ/q5QRmS4rllQVTmn4rZ7PlM+uTSAHRMticeXrDn4yiGhhhz0jGQjBM9JI5jRRF2xchXSBoM77ZQ2qzoEfAyr2HYPvv/SI/evuvv6tdabpozO6ReUnMVz4qNvHrl3y4HW5kRAdDAemIr+lnwYvVlRZo4yIZ08EvSNeGNTOvX2qtpF08CBYaOLG06+H3o17ow0X23VkCxklo+a/OC+VVWn4Na5f7GRYowlNhLaMu0kgVWBdjwGFw6aOr9yQs3YGZ+f4r4sGJHv/oUaPLQkf+EDtw0bVVg0suDEW6cVUUWVszcFKjPzkrVBcqkGe4B0TMDuGAcmmymwHXryXQ8temTDipoF1aFG/mDxE2WTRrgWpl4OGJz3qVkTz5+8UH+soflKC0/abOoFLZUzDIc0avTAlQtjEZqm05MffOKrX//JMv3HLpy52HT+sjJ4ufHajmdeVQbn33vL2r2rc3Jz6DfzqoBywcKCcNU6x5YVCisxBKjD9ItRk8tSL9sT7fTd7b/42+++t0n5/Hc3PrT8h195e9e/Ey1tcrCwtCAWc+bdMxsCfy7CpYLuYTo9YCEww1Rx6e+PT6od31h/qdOfjc9+5wX6Y4MKB869u065gtaWttVL1/10+TNbn9wpB9ta29d841f5xYOVi1GSYSMwNaICaiPMEHMVCa0E1VRMEpZxTXI5Wy5tcBkrFVevNjUXlxeGlEQR21vbd7+4f/rC6qHDh8jxhlMXHlu4+t2T74nOMKtRVFIP0cZx5KE4ViZGq1FYVZdA3/IOAEznu08zvzC9ZOywVFyNxR33WTfSFZWxeOyfmw8mmhMuM+f0z3GjdO7A/u5bNz688fjSNZPrxpeOK8kblLtn634tI9BfKm/ZzrGSlgHDQqUH40c6fqDpvQ/kt2/62Q7XAGpq8kay7Xrb86u27tl8cN+f3nr01tUvrdvJwkY8tnLt8qKyDly888ZxJd6imasM8dbyEYyNYB4G7U+XX8F/zt5tb85ZUjd0eEfUrZ5b4eYGqa94ZcOuvzy3+9ffeuHlX762Yt19lXMnuQv19T/uP32kfkxVedmEEt8JMcdlLNfymvnVJ/51pv74eQzL/pCpETA711QAQMteBIZuTXhzk0y0JlbUPrb04cUFJUNvXTpr2Kii1Bsuk21ZuyM1ca7qcpfrUyt/6y65poamgfl5r7/4xtyldb9ftenC2cZL55s+u2z2gvtudUk+nuMIXqmL8KcgPBmeLREDUkkP2x+UuYytjpFobXv+x1vcuWs41TiuetSoipHtiQ9dMCe9dPrU4XPlFaXNV6+nLPnzb/5+eNc7c7786dOHz/5j4z53ZPiYYtfgH92/bu/LBwJWJB+n8staBlBLPNgxH469fUWNbugngKhVHpObn9wOLNNIF/daWxIpOKTod/t6V3jgg1O+Xf+f8yma3bb+r6ePnjuy+2iSh0bqOhO/6ONJ5crjYRs9yqi6FcyLbKgXcchuvV9hTSaTTgwU2XTm7XPy0lyqO7zrKK9aoGWNBWw1YHjV0nNCshMejmaYhLMjtOYa4fsZwa9gykoAyhpY/wH9XGZK+lqC1W60tFYIlgDLd5NGlpaO1Tc3Q6uWSZFOJPTdvaTwC3eOsNbTUdlYTumTirrxrsES0p6XqEpnB5SBlOxfo7SkCKzyxNGAQFa1UTZJ6O4ZBRWw3UPWBCItT1VtZy6uqbm9CpOYl5/n5kPcZkCGUmPdI30a8tRFq8gDGot4w8VI4wJGVovT14TsrAQ0bAsiz5b966icXdH83+uXGi5Pm1dZNXtycXnR7DtrZy2efvzQ6bpF06bNu7m4rODssXqhVWqQlRx0FUnJjKZTSZV+q8VMPb/3nOyAuhWu1LGsBTCZMBeNKLj30SXDRw8bWjykbHzJkMLBLpj75ea477mWx3NiF85dfP9cY37xkLbWtoH5AwpHFDy36g8nDp85dvD4tSvNxjKV8UAwFCRtGy5QJeosBQ29IguW8h3tDFBqt+n5yh2YWz6htKJ2Qt0d090Uv6i04KlvPvvmq0ccB1xX9x/Qf8+2/Wm26yBM1DwsbKYKteJhqFoz6yo1g3UjbfU6u/OV/UQISFAFzzR19jK6kYAcbZ5H0/ZD3NJ2IIOKIyybvaBuCClxCPleDG3VCAin1JlCGCqyyGlZH5Fiw7q3hIHyOCnb7fgBbQRMG6bFIfSYT1I061+yudcepcxuD1zY0TbTlO18+wFy4xVdZWxnsIoh5PrX1CVlqxAbDyCjHg8qFcHiZLoVjLzZRe6M0yAn9P4lNG6Gq9YymaGvZNOBveUBgzI+ZYNbaZ+irgbiW0BLs7ythx+D2jwMliv7hqZ6PWbRxYOCbKmZGjB031KuQqHtDGNgW4siM43spQVkA43b94bDOvFM61a2lSDxrd7nyVJKsN/ooUCamyqEFoQ5LbM+2oh3RAR34iENtmh1NXgNCKpvgYlQJa8SWkOpkkgEr2dzhhzaShzS48HbsPzaFc/4lAxB8LCEGqSFkbbJhSreM7CX0VQynn3rIeuUAh51gLRbkB4HA2mhWjBBEdIR7yfY1FphyJwz6xQP74inbjT6VrB2U1C4ykRUIvjuSo29mMN1P2M0MGfQPqx3H3KuAtLni0augki/glmwl9J3GKV9OKrJnJnAszPYt2CSk8HLRzc12M8YvR1eRL/Jg9uGOj8Lv9cQhAXSYa2HqGlMgQbjhbFhSUT0sIj8MGFYKEiGwHsPQwmSN4LrUUoErGcRGdKYoc0qnolvBXmJIqyxNRjSlgXcJWtFFrfiocmZaOrf00NtREjr/lRkpi6zMjA4i/sVNd8ClxyCFD3ZjfEZQtqGbebnjA3O7r5U3l8ZJJ67CdJGP2fz6Mod4kjSIyE0iibV3MxYWjlAi8bufYNlCV4vXMnanVrED/Wwrj1MOiT7RxwzuGM96DLpbQki85vhteQJlQo+ZqDZetDDyqoGepMYUR2ZQpp5shv/p4Xorn9rodCskgxGFh76XT3d/89aeuRf0yC/SRyjpw894NLspWXWDs9cePTgo+f++VDAfspH+ej7j2l9BvcZ3Gdwn8Ef58f/AA4djwRxfVIkAAAAAElFTkSuQmCC"
  , o8 = "/tggame/assets/glow-CAEtf5Vt.png"
  , td = {
    VkEmptyAvatarSign: "ava=1",
    YandexCloudStorage: "storage.yandexcloud.net"
}
  , s8 = ({variant: e, url: t, className: n, showHighlight: r})=>{
    const i = e === "md"
      , o = i ? 90 : 36
      , s = i ? 101 : 41
      , a = M.useId()
      , l = t && (t.includes(td.VkEmptyAvatarSign) || t.includes(td.YandexCloudStorage));
    return f.jsxs("div", {
        className: Z(ar.avatar, !i && ar.avatarHeader, n),
        children: [f.jsx(qy, {
            variant: e
        }), f.jsx("div", {
            className: Z(ar.avatarImageWrapper, !i && ar.avatarImageWrapperHeader),
            children: f.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: s,
                viewBox: `0 0 ${o} ${s}`,
                fill: "none",
                className: ar.avatarImage,
                children: [i ? f.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M90 25.7983L45 0.953613L0 25.7983V63.0654H1.98785V75.2764L12.2467 81.2213L11.7954 82.0001L45 100.332L78.2046 82.0001L77.7533 81.2213L88.0122 75.2764V63.0654H90V25.7983Z",
                    fill: `url(#${a})`
                }) : f.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M36 10.9193L18 0.981384L0 10.9193V25.8261H1.98785V30.0232L5.49668 32.0565L4.71815 33.4L18 40.7329L31.2819 33.4L30.5033 32.0565L34.0122 30.0232V25.8261H36V10.9193Z",
                    fill: `url(#${a})`
                }), f.jsx("defs", {
                    children: f.jsx("pattern", {
                        id: a,
                        patternContentUnits: "userSpaceOnUse",
                        width: "1",
                        height: "1",
                        children: f.jsx("image", {
                            href: l ? t : i8,
                            width: "100%",
                            height: "100%",
                            preserveAspectRatio: "xMidYMid slice"
                        })
                    })
                })]
            })
        }), r && f.jsx("img", {
            src: o8,
            width: 150,
            height: 100,
            alt: "",
            className: ar.glow
        })]
    })
}
  , a8 = "_profileCard_1a6ux_1"
  , l8 = "_profileCardContent_1a6ux_9"
  , c8 = "_avatar_1a6ux_16"
  , u8 = "_username_1a6ux_23"
  , f8 = "_woodBalance_1a6ux_32"
  , d8 = "_authButton_1a6ux_38"
  , lr = {
    profileCard: a8,
    profileCardContent: l8,
    avatar: c8,
    username: u8,
    woodBalance: f8,
    authButton: d8
}
  , h8 = ()=>{
    const {isLogged: e, woodBalance: t, avatarUrl: n, username: r} = M.useContext(ir);
    return f.jsxs(Qt, {
        className: lr.profileCard,
        classNameContent: lr.profileCardContent,
        borderType: Ae.GeometricExtendedBoolging,
        fillType: ue.VioletBright,
        children: [f.jsx(s8, {
            variant: "md",
            className: lr.avatar,
            url: n,
            showHighlight: e
        }), e && f.jsx(V, {
            design: "header-ms",
            className: lr.username,
            children: r
        }), f.jsxs(V, {
            design: "header-m",
            className: lr.woodBalance,
            children: [br(t), " ", f.jsx(Me.WoodCoin, {})]
        }), !e && f.jsxs("button", {
            className: Z(Ct["control-s"], lr.authButton),
            onClick: ()=>eu(X.Menu),
            children: ["Авторизоваться", f.jsx(Me.VK, {})]
        })]
    })
}
  , p8 = "_menuPage_1mq2d_1"
  , m8 = {
    menuPage: p8
};
function g8() {
    const {isLogged: e} = M.useContext(ir);
    return f.jsx(ro, {
        children: f.jsxs("div", {
            className: m8.menuPage,
            children: [f.jsx(h8, {}), e ? f.jsx(Dy, {}) : f.jsx(Qy, {})]
        })
    })
}
const v8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAStSURBVHgBhVZJbytFEP56mfGMlywvy1NQEEHKKRx94gDyEQ4gEMrvifNPOHBKOMHhgeDg/AAfXy5EKHokRIkTknjJbL1QPYtjGwItl3tmurq+quqvqxt4oVlYlostZfGdpNu1fPqt7BftsAWrU+P5w+HC+Ft6/6jSQqlyiIPugZ3OZ+7H7DwAvRI+m06tDJPB3qB47pD0R33WbrVt1ffc9x7N6pYzD4o+B2AzAHOhOeOl4dYILIzB9ujzWQImt89Jbwc7IezZb0Bag40C2FELtrNBxl10DmRqnJV5q8x36clJB+x0AO6T0d1tsKsROM/A7rTTHGBNbFhzC6s/uLDxYNs4oJsNmArk0AXTraKxRc4PyfM98nx/UBivT8Bra+AyBh8F94LfrTLeKlxZErBmDDMQtzapabM0fK2fGjB7BHJMIPvHMLlx8p9XC0qI2Bj0GCgte+T5cAliIiEjDi8crXqhgB+MSSz8xMCPJH3312X9yRMh6TqH3NyNQZmF3H/LcnrlLy73PfCzC4jGMoQ3hogFvIRAljOIhKRaOssiq7xQK2+sa6qpAo0sa0JPNqF3I+g8iqMqioqS++D938HXWgQwgJxMIAPyUhLIiMeeUBC8EQgkgFHQWsba01ZJE6ZpChW2kNEctbMGjX5u3BHTSOe9y//BW6BNjIEPdquIMXVwwSCGUSw9HkgZpl7rK2wmQsnsJ3nNr4NYG9AaPEkp64a5OVu0fkOwGyLJSYfISRiyoC8cOZijYiMFi5rgITEnQSTqfsjjRurVv+DvBd/gE4LykwZOhkf4I72PTaKZzsyYJ6bJw7Sg9E1lk5qcUrRTdFtXwH0AJJxGeEg0opR9xjdbX8tPxYf2S8qq730OhEP8rL5nlzy2rIkmYvNAllby/dLBc+P5AndB61u0qy36W62GI5dyeBQR9+GBMQ+C1sKj55riqBFQqbnMV3Le7NKe6M0BzFWbs/zfPlL++MhqERqtYh29MdeTX9RJ9s78oC/x49Ovuhe9kdd6YrUhHUtu3pH8WSWj91yvZElRuBjSWscG17CDxq1tCN8ECbRiVrEbPxp/h3M+xBOr0/441tfsXsSesirVE81CbbRObftu3WBtvhhyVtrv9DpUV/o2DmBWausmjTXxHDqrGeUZZOkoTp6OcDn5Fu/iBxMp+ubG1msNVU+XlNvRZ87d1nPxc7VI2oJGedfute1pDJvRtm/pVT3xHpgXr+BBwyx5gWZZkVDGA5ukYxPwpla0B3QI8+qv12a4POP9QVGj+Ww42CiqYzw4M8kSdGhWslAh8zJkNYs0KYW8Sr1M52MqhE4eobeXoatalEfAXI0rqylj07OG0Y5mbkcvPxJDafPUUupXKZX0TJGwV6RkqNhZSoeidJ77F/bj4bbuU3rb/bbJjR+48lAUlimHZsp2DuLOg83BKZXsPeaAnOD9Qneb5PyKAAjElWrnORbPg6nHMy0HqU6zLlx9Ym6H96lKtun1NH7Wd6lsuwUlw8fHpPrseX56zx6bU+OLh7otDnV+BCuc2P2ZnsSN5TrV4T+9GOC/29xN4l8AyzH+j1vH/94qXgCrcurCnrsc5GlwJGEv+vw3mAvZX3VPXHgAAAAASUVORK5CYII=";
class lu {
    constructor(t) {
        S(this, "rafTime");
        S(this, "rafHandle");
        S(this, "handler");
        this.rafHandle = -1,
        this.rafTime = 0,
        this.handler = t,
        this.frame = this.frame.bind(this)
    }
    start() {
        this.stop(),
        this.rafTime = performance.now(),
        this.frame(this.rafTime)
    }
    stop() {
        this.rafHandle !== -1 && (cancelAnimationFrame(this.rafHandle),
        this.rafHandle = -1)
    }
    frame(t) {
        this.rafHandle = requestAnimationFrame(this.frame);
        const n = (t - this.rafTime) / 16.666;
        this.rafTime = t,
        this.handler(n)
    }
}
class y8 {
    constructor(t, n) {
        S(this, "STAR_COUNT", 16);
        S(this, "resizeObserver");
        S(this, "frameHandler");
        S(this, "size");
        S(this, "scale");
        S(this, "context");
        S(this, "time");
        S(this, "starImage");
        S(this, "stars");
        this.canvas = t,
        this.isIphone = n,
        this.size = [1, 1],
        this.scale = 1,
        this.time = 0,
        this.context = t.getContext("2d"),
        this.starImage = new Image,
        this.starImage.src = v8,
        this.stars = [];
        for (let r = 0; r < this.STAR_COUNT; r++)
            this.stars.push({
                time: Math.random(),
                direction: Math.random(),
                speed: te(.2, 1, Math.random()) * .005
            });
        this.resizeObserver = new ResizeObserver(()=>this.handleResize()),
        this.resizeObserver.observe(t),
        this.frameHandler = new lu(this.handleFrame.bind(this)),
        this.frameHandler.start()
    }
    dispose() {
        this.frameHandler.stop(),
        this.resizeObserver.disconnect()
    }
    handleFrame(t) {
        this.time += .1 * t;
        for (let n = 0; n < this.stars.length; n++) {
            const r = this.stars[n];
            r.time = Math.min(r.time + r.speed * t, 1),
            r.time >= 1 && (r.time = 0,
            r.direction = Math.random(),
            r.speed = te(.2, 1, Math.random()) * .005)
        }
        this.render()
    }
    handleResize() {
        const {width: t, height: n} = this.canvas.getBoundingClientRect();
        this.scale = window.devicePixelRatio,
        this.size[0] = t,
        this.size[1] = n,
        this.canvas.width = t * window.devicePixelRatio,
        this.canvas.height = n * window.devicePixelRatio,
        this.render()
    }
    render() {
        const t = this.context;
        if (!t)
            return;
        const [n,r] = this.size;
        t.resetTransform(),
        t.scale(this.scale, this.scale),
        t.clearRect(0, 0, n, r);
        const o = r * 1.1 * .5
          , s = 16
          , a = r * .6
          , l = Math.PI * 2 / s
          , c = 1.25;
        t.fillStyle = "#fff",
        t.save(),
        t.translate(n / 2, a),
        t.scale(c, 1);
        const d = t.createRadialGradient(0, 0, 0, 0, 0, o * 1.1);
        d.addColorStop(.3, "#E62AFF"),
        d.addColorStop(1, "transparent"),
        t.fillStyle = d,
        t.globalCompositeOperation = "screen",
        t.globalAlpha = .2,
        t.fillRect(-n / 2 / c, -r, n / c, r * 2),
        t.globalAlpha = .24,
        t.filter = "blur(10px)";
        const m = this.time * .1;
        t.beginPath();
        for (let x = 0; x < s; x++) {
            const g = x * l - m
              , [v,w] = this.coordsFromAngle(g, o);
            if (x === 0)
                t.moveTo(v, w);
            else {
                if (x % 2 === 1) {
                    const [_,C] = this.coordsFromAngle((x - .5) * l - m, o * .1);
                    t.lineTo(_, C)
                }
                t.lineTo(v, w)
            }
        }
        t.closePath(),
        t.fill(),
        t.restore(),
        t.save();
        const p = t.createLinearGradient(0, a, 0, r);
        p.addColorStop(0, "transparent"),
        p.addColorStop(.8, "#fff"),
        t.fillStyle = p,
        t.globalCompositeOperation = "destination-out",
        t.fillRect(0, a, n, r - a),
        t.restore();
        const y = n * .35
          , h = y * .35
          , E = h / 2;
        if (t.save(),
        this.isIphone || (t.translate(n / 2, a),
        t.fillStyle = "#f0f",
        t.globalCompositeOperation = "screen",
        t.globalAlpha = .5,
        t.filter = "blur(50px)",
        t.beginPath(),
        t.moveTo(-y / 2 + E, -h / 2),
        t.lineTo(y / 2 - E, -h / 2),
        t.quadraticCurveTo(y / 2, -h / 2, y / 2, 0),
        t.quadraticCurveTo(y / 2, h / 2, y / 2 - E, h / 2),
        t.lineTo(-y / 2 + E, h / 2),
        t.quadraticCurveTo(-y / 2, h / 2, -y / 2, 0),
        t.quadraticCurveTo(-y / 2, -h / 2, -y / 2 + E, -h / 2),
        t.fill()),
        t.restore(),
        t.save(),
        t.globalCompositeOperation = "screen",
        this.starImage.complete)
            for (const x of this.stars) {
                const g = te(.2, 1, ny(x.time)) * o
                  , v = te(-Math.PI * .55, Math.PI * .55, x.direction) + Math.PI
                  , w = Math.sin(x.time * Math.PI)
                  , [_,C] = this.coordsFromAngle(v, g);
                t.globalAlpha = w,
                t.drawImage(this.starImage, n / 2 + _ * c - this.starImage.width / 2, a + C - this.starImage.height / 2)
            }
        t.restore()
    }
    coordsFromAngle(t, n) {
        return [Math.sin(t) * n, Math.cos(t) * n]
    }
}
const E8 = "_block_1775x_1"
  , w8 = "_block__content_1775x_14"
  , x8 = "_float_1775x_1"
  , S8 = "_score_1775x_28"
  , C8 = "_coin_1775x_41"
  , Mo = {
    block: E8,
    block__content: w8,
    float: x8,
    score: S8,
    coin: C8
}
  , _8 = "/tggame/assets/coin_large-DzZ2BFCd.png";
function R8({score: e, active: t, onCountEnd: n}) {
    const [r,i] = M.useState(0)
      , o = M.useRef(null);
    return M.useEffect(()=>{
        const s = o.current;
        if (s) {
            const a = new y8(s,window.navigator.userAgent.toLowerCase().includes("iphone"));
            return ()=>{
                a.dispose()
            }
        }
    }
    , []),
    M.useEffect(()=>{
        if (t) {
            let s = 0
              , a = 0
              , l = 0
              , c = null;
            const d = setTimeout(()=>{
                const p = ge.getSound("Game.Coin");
                c = new lu(y=>{
                    s = Math.min(s + .01 * y, 1),
                    l = Math.max(l - .3 * y, 0),
                    i(s);
                    const h = Math.round(te(0, e, Ps(s)));
                    p && l === 0 && h !== a && (ge.play(p, !1, {
                        volume: .4
                    }),
                    l = 1,
                    a = h),
                    s === 1 && (n(),
                    c.stop())
                }
                ),
                c.start()
            }
            , 1e3)
              , m = ()=>{
                s < 1 && (clearTimeout(d),
                i(1),
                n(),
                c == null || c.stop())
            }
            ;
            return window.addEventListener("click", m),
            ()=>{
                c == null || c.stop(),
                clearTimeout(d),
                window.removeEventListener("click", m)
            }
        }
    }
    , [t, e]),
    f.jsxs("div", {
        className: Mo.block,
        children: [f.jsx("canvas", {
            ref: o
        }), f.jsxs("div", {
            className: Mo.block__content,
            children: [f.jsxs("span", {
                className: Mo.score,
                children: [br(e), f.jsx("em", {
                    children: br(Math.round(te(0, e, Ps(r))))
                })]
            }), f.jsx("div", {
                className: Mo.coin,
                children: f.jsx("img", {
                    src: _8,
                    alt: ""
                })
            })]
        })]
    })
}
const T8 = "_resultsPage_1deys_1"
  , A8 = "_resultsPage__notLogged_1deys_10"
  , k8 = "_resultsPage__content_1deys_13"
  , N8 = "_resultsPage__footer_1deys_23"
  , M8 = "_hidden_1deys_30"
  , L8 = "_vk_1deys_38"
  , P8 = "_high_1deys_49"
  , I8 = "_low_1deys_81"
  , B8 = "_resultsPage__title_1deys_87"
  , O8 = "_resultsPage__score_1deys_98"
  , F8 = "_resultsPage__nextTry_1deys_107"
  , D8 = "_timer_1deys_132"
  , j8 = "_copyNotification_1deys_136"
  , z8 = "_active_1deys_149"
  , U8 = "_copyNotificationContent_1deys_155"
  , Ee = {
    resultsPage: T8,
    resultsPage__notLogged: A8,
    resultsPage__content: k8,
    resultsPage__footer: N8,
    hidden: M8,
    vk: L8,
    high: P8,
    low: I8,
    resultsPage__title: B8,
    resultsPage__score: O8,
    resultsPage__nextTry: F8,
    timer: D8,
    copyNotification: j8,
    active: z8,
    copyNotificationContent: U8
};
function b8() {
    const e = M.useRef()
      , t = M.useContext(Rn)
      , {nextGameAt: n, isLogged: r, telegramData: i, setAuthContext: o, userId: s} = M.useContext(ir)
      , [a,l] = M.useState(!1)
      , [c,d] = M.useState(!1)
      , [m,p] = M.useState(!1)
      , y = t.extraData ? t.extraData.score : 0
      , h = new Date(Date.now() + ph).toISOString()
      , E = r && n || h;
    M.useEffect(()=>{
        const v = setTimeout(()=>{
            l(!0)
        }
        , 100);
        let w = null;
        const _ = ge.getSound("Music.Results");
        return _ && (w = ge.playMusic(_)),
        ()=>{
            w && (w.ended = !0),
            clearTimeout(v)
        }
    }
    , []),
    M.useEffect(()=>{
        m && (e.current && clearTimeout(e.current),
        e.current = setTimeout(()=>p(!1), 2e3))
    }
    , [m]),
    M.useEffect(()=>{
        var v, w;
        (v = t == null ? void 0 : t.extraData) != null && v.score && (Qn({
            target: "end-game",
            params: {
                [s || "null"]: {
                    [Wn(new Date, "DD.MM.YYYY hh:mm:ss")]: {
                        [_s(120 * zt.inSecond)]: y
                    }
                }
            }
        }),
        r && ((w = i == null ? void 0 : i.user) != null && w.id) ? Sr.game.saveScore({
            tgId: i.user.id.toString(),
            score: t.extraData.score
        }).then(({data: _})=>o == null ? void 0 : o(C=>({
            ...C,
            woodBalance: _.woodBalance,
            nextGameAt: _.nextGameAt ? `${_.nextGameAt}Z` : null
        }))) : localStorage.setItem("SAVED_SCORE", JSON.stringify({
            savedTime: new Date().toISOString(),
            score: t.extraData.score
        })))
    }
    , []);
    const x = ()=>{
        r ? t.setScreen(X.Menu) : eu(X.Menu)
    }
      , g = ()=>{
        i != null && i.user.id && navigator.clipboard.writeText(`${hh}?startapp=${window.btoa(i.user.id.toString())}`).then(()=>p(!0))
    }
    ;
    return f.jsxs(ro, {
        children: [f.jsxs("div", {
            className: Z(Ee.resultsPage, !r && Ee.resultsPage__notLogged),
            children: [f.jsxs("div", {
                className: Ee.resultsPage__content,
                children: [f.jsxs("div", {
                    className: Z(Ee.resultsPage__title, !a && Ee.hidden),
                    children: [f.jsx(V, {
                        design: "header-l",
                        as: "h1",
                        children: "Поздравляем!"
                    }), f.jsx(V, {
                        design: "text-l",
                        as: "p",
                        children: "Твой прогресс за сегодня"
                    })]
                }), f.jsx("div", {
                    className: Z(Ee.resultsPage__score, !a && Ee.hidden),
                    children: f.jsx(R8, {
                        score: y,
                        active: a,
                        onCountEnd: ()=>d(!0)
                    })
                }), f.jsxs("div", {
                    className: Z(Ee.resultsPage__nextTry, !c && Ee.hidden),
                    children: [f.jsx(V, {
                        design: "text-m",
                        children: "Новая игра будет доступна через:"
                    }), f.jsx(iu, {
                        timeTo: E,
                        className: Ee.timer
                    })]
                })]
            }), f.jsxs("div", {
                className: Z(Ee.resultsPage__footer, !c && Ee.hidden),
                children: [r && f.jsxs("div", {
                    className: Ee.high,
                    children: [f.jsxs(V, {
                        design: "text-m",
                        children: ["Поделись игрой с друзьями ", f.jsx("br", {}), "и получи 100 вудов в подарок"]
                    }), f.jsx("button", {
                        onClick: g,
                        children: f.jsxs(V, {
                            as: "span",
                            design: "control-s",
                            children: [f.jsx(Me.Share, {}), " Пригласить друга"]
                        })
                    })]
                }), f.jsx(Tn, {
                    onClick: x,
                    children: r ? "Закрыть" : f.jsxs("span", {
                        className: Ee.vk,
                        children: ["Авторизоваться", f.jsx(Me.VK, {})]
                    })
                }), !r && f.jsx("div", {
                    className: Ee.low,
                    children: f.jsxs(V, {
                        design: "text-s-mono",
                        children: ["Авторизируйся в течение 24 часов, ", f.jsx("br", {}), "чтобы сохранить заработанные вуды"]
                    })
                })]
            })]
        }), f.jsx(Qt, {
            borderType: Ae.Simple,
            fillType: ue.Solid,
            className: Z(Ct["header-xxs-mono"], Ee.copyNotification, m ? Ee.active : Ee.inactive),
            classNameContent: Ee.copyNotificationContent,
            children: "Ссылка скопирована"
        })]
    })
}
const H8 = "_title_1fg1y_1"
  , V8 = "_card_1fg1y_5"
  , Z8 = "_cardContent_1fg1y_20"
  , oi = {
    title: H8,
    card: V8,
    cardContent: Z8
}
  , G8 = "/tggame/assets/interesting-collective-DgnpYM5C.png"
  , $8 = "/tggame/assets/interesting-store-DWL0zIjn.png"
  , W8 = ()=>f.jsxs(f.Fragment, {
    children: [f.jsx(V, {
        design: "header-m",
        as: "h2",
        className: oi.title,
        children: "Интересное"
    }), f.jsxs(Qt, {
        className: oi.card,
        classNameContent: oi.cardContent,
        borderType: Ae.DropItem,
        fillType: ue.VioletInvert,
        children: [f.jsx("img", {
            src: G8,
            alt: "VozWooden.Kollective",
            width: "100%"
        }), f.jsxs(V, {
            children: ["Собирай оружие и получай призы за вуды в коллекции с ", f.jsx("a", {
                href: dh,
                target: "_blank",
                rel: "noreferrer noopener",
                children: "VozWooden.Kollective!"
            })]
        })]
    }), f.jsxs(Qt, {
        className: oi.card,
        classNameContent: oi.cardContent,
        borderType: Ae.DropItem,
        fillType: ue.VioletInvert,
        children: [f.jsx("img", {
            src: $8,
            alt: "Интернет-магазин",
            width: "100%"
        }), f.jsxs(V, {
            children: ["Покупай классное оружие VozWooden на", " ", f.jsx("a", {
                href: Zv,
                target: "_blank",
                rel: "noreferrer noopener",
                children: "vozwooden.ru"
            })]
        })]
    })]
})
  , Q8 = "_title_187um_1"
  , Y8 = "_description_187um_6"
  , K8 = "_authButton_187um_11"
  , q8 = "_icon_187um_18"
  , Lo = {
    title: Q8,
    description: Y8,
    authButton: K8,
    icon: q8
}
  , X8 = ({active: e, onClose: t})=>f.jsxs(ru, {
    active: e,
    onClose: t,
    children: [f.jsx(V, {
        design: "header-l",
        as: "h3",
        className: Lo.title,
        children: "Авторизуйся, чтобы отправить приглашение"
    }), f.jsx(V, {
        design: "text-m",
        className: Lo.description,
        children: "Только авторизованные пользователи могут отправлять приглашения друзьям и получать за это бонусы"
    }), f.jsxs(Tn, {
        className: Lo.authButton,
        onClick: ()=>eu(X.World),
        children: ["Авторизоваться ", f.jsx(Me.VK, {
            className: Lo.icon
        })]
    })]
})
  , J8 = "_referralBlock_1agqn_1"
  , e6 = "_title_1agqn_6"
  , t6 = "_list_1agqn_11"
  , n6 = "_copyNotification_1agqn_22"
  , r6 = "_active_1agqn_35"
  , i6 = "_copyNotificationContent_1agqn_41"
  , Ln = {
    referralBlock: J8,
    title: e6,
    list: t6,
    copyNotification: n6,
    active: r6,
    copyNotificationContent: i6
}
  , o6 = ()=>{
    const e = M.useRef(null)
      , {isLogged: t, telegramData: n} = M.useContext(ir)
      , [r,i] = M.useState(!1)
      , [o,s] = M.useState(!1);
    M.useEffect(()=>{
        r && (e.current && clearTimeout(e.current),
        e.current = setTimeout(()=>i(!1), 2e3))
    }
    , [r]),
    M.useEffect(()=>()=>{
        e.current && clearTimeout(e.current)
    }
    , []);
    const a = async()=>{
        const l = n == null ? void 0 : n.user.id;
        if (t && l)
            try {
                await navigator.clipboard.writeText(`${hh}?startapp=${window.btoa(l.toString())}`),
                i(!0)
            } catch (c) {
                console.error(c)
            }
        else
            s(!0)
    }
    ;
    return f.jsxs(f.Fragment, {
        children: [f.jsxs(Qt, {
            className: Ln.referralBlock,
            borderType: Ae.DropItem,
            fillType: ue.VioletInvert,
            children: [f.jsx(V, {
                design: "header-ms",
                className: Ln.title,
                children: "Приглашай друзей и получи бонус"
            }), f.jsxs("ol", {
                className: Z(Ct["text-m"], Ln.list),
                children: [f.jsx("li", {
                    children: "Нажми на кнопку «Пригласить друга» и отправь другу ссылку"
                }), f.jsx("li", {
                    children: "Как только друг авторизуется и начнет первую игру в Woodify, вы получите по 100 вудов каждый"
                }), f.jsx("li", {
                    children: "За каждые 100 вудов, выигранных твоим другом, ты будешь получать 1 вуд на свой счет"
                })]
            }), f.jsx(Tn, {
                onClick: a,
                children: "Пригласить друга"
            })]
        }), f.jsx(Qt, {
            borderType: Ae.Simple,
            fillType: ue.Solid,
            className: Z(Ct["header-xxs-mono"], Ln.copyNotification, r ? Ln.active : Ln.inactive),
            classNameContent: Ln.copyNotificationContent,
            children: "Ссылка скопирована"
        }), f.jsx(X8, {
            active: o,
            onClose: ()=>s(!1)
        })]
    })
}
  , s6 = "_worldPage_1h5hy_1"
  , a6 = "_title_1h5hy_6"
  , nd = {
    worldPage: s6,
    title: a6
};
function l6() {
    return f.jsx(ro, {
        children: f.jsxs("div", {
            className: nd.worldPage,
            children: [f.jsx(V, {
                design: "header-l",
                as: "h1",
                className: nd.title,
                children: "Мир VW"
            }), f.jsx(o6, {}), f.jsx(W8, {})]
        })
    })
}
const rd = {
    [X.Loading]: null,
    [X.Menu]: g8,
    [X.World]: l6,
    [X.History]: Ry,
    [X.Game]: Sy,
    [X.Results]: b8,
    [X.DesktopWarning]: _4
}
  , c6 = 500;
var u6 = `uniform sampler2D uDiffuse;
uniform sampler2D uOutline;
uniform sampler2D uGlow;
uniform sampler2D uDisplace;
uniform float uAspect;
uniform float uTime;
uniform vec2 uScreenSize;
uniform float uVignetteFactor;
uniform vec3 uVignetteColor;

varying vec2 vUv;

vec3 uchimura(vec3 x, float P, float a, float m, float l, float c, float b) {
    float l0 = ((P - m) * l) / a;
    float L0 = m - m / a;
    float L1 = m + (1.0 - m) / a;
    float S0 = m + l0;
    float S1 = m + a * l0;
    float C2 = (a * P) / (P - S1);
    float CP = -C2 / P;

    vec3 w0 = vec3(1.0 - smoothstep(0.0, m, x));
    vec3 w2 = vec3(step(m + l0, x));
    vec3 w1 = vec3(1.0 - w0 - w2);

    vec3 T = vec3(m * pow(x / m, vec3(c)) + b);
    vec3 S = vec3(P - (P - S1) * exp(CP * (x - S0)));
    vec3 L = vec3(m + a * (x - m));

    return T * w0 + L * w1 + S * w2;
}

vec3 uchimura(vec3 x) {
    const float P = 1.0;  
    const float a = 1.0;  
    const float m = 0.22; 
    const float l = 0.4;  
    const float c = 1.33; 
    const float b = 0.0;  

    return uchimura(x, P, a, m, l, c, b);
}

float uchimura(float x, float P, float a, float m, float l, float c, float b) {
    float l0 = ((P - m) * l) / a;
    float L0 = m - m / a;
    float L1 = m + (1.0 - m) / a;
    float S0 = m + l0;
    float S1 = m + a * l0;
    float C2 = (a * P) / (P - S1);
    float CP = -C2 / P;

    float w0 = 1.0 - smoothstep(0.0, m, x);
    float w2 = step(m + l0, x);
    float w1 = 1.0 - w0 - w2;

    float T = m * pow(x / m, c) + b;
    float S = P - (P - S1) * exp(CP * (x - S0));
    float L = m + a * (x - m);

    return T * w0 + L * w1 + S * w2;
}

float uchimura(float x) {
    const float P = 1.0;  
    const float a = 1.0;  
    const float m = 0.22; 
    const float l = 0.4;  
    const float c = 1.33; 
    const float b = 0.0;  

    return uchimura(x, P, a, m, l, c, b);
}

void main() {
    vec2 uvOffsetFactor = vec2(uScreenSize.x / uScreenSize.y, 1.0) * 0.05;
    float vignette = pow(clamp(distance(vUv, vec2(0.5)) * 1.7, 0.0, 1.0), 5.0);
    uvOffsetFactor *= vignette * uVignetteFactor;

    vec2 dispUv = vec2((vUv.x - 0.5) * (uScreenSize.x / uScreenSize.y) + 0.5, vUv.y);
    vec3 displace = texture2D(uDisplace, dispUv).rgb * 2.0 - 1.0;
    vec2 uv = vUv + displace.xy * uvOffsetFactor;

    vec4 diffuse = texture2D(uDiffuse, uv);
    vec3 glow = texture2D(uGlow, uv).rgb;

    diffuse.rgb += glow * mix(1.0, 1.3, uVignetteFactor);

    const vec3 lightDir = normalize(vec3(0.2, 0.5, 1.0));
    diffuse.rgb = mix(
        diffuse.rgb,
        uVignetteColor,
        vignette * uVignetteFactor * 0.2 * dot(lightDir, displace)
    );
    diffuse.rgb += vec3(1.0) * (pow(clamp(dot(displace, lightDir), 0.0, 1.0), 32.0)) * vignette * uVignetteFactor * 0.2;

    gl_FragColor = vec4(diffuse.rgb, diffuse.a);

}`
  , f6 = `attribute vec2 position;

varying vec2 vUv;

void main() {
    vUv = position;
    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}`
  , id = `uniform sampler2D uDiffuse;
uniform vec2 uResolution;
uniform vec2 uDirection;

#ifdef RANGED
uniform vec2 uRange;

float czm_luminance(vec3 rgb) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    return dot(rgb, W);
}
#endif

varying vec2 vUv;

vec4 rangedTexture(sampler2D image, vec2 uv) {
    vec4 color = texture2D(image, uv);
    #ifdef RANGED
    float luma = czm_luminance(color.rgb);
    color *= smoothstep(uRange.x, uRange.y, luma);
    #endif
    return color;
}

vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.411764705882353) * direction;
    vec2 off2 = vec2(3.2941176470588234) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;
    color += rangedTexture(image, uv) * 0.1964825501511404;
    color += rangedTexture(image, uv + (off1 / resolution)) * 0.2969069646728344;
    color += rangedTexture(image, uv - (off1 / resolution)) * 0.2969069646728344;
    color += rangedTexture(image, uv + (off2 / resolution)) * 0.09447039785044732;
    color += rangedTexture(image, uv - (off2 / resolution)) * 0.09447039785044732;
    color += rangedTexture(image, uv + (off3 / resolution)) * 0.010381362401148057;
    color += rangedTexture(image, uv - (off3 / resolution)) * 0.010381362401148057;
    return color;
}

void main() {
    outColor = blur13(uDiffuse, vUv, uResolution, uDirection);
}`
  , od = `attribute vec3 position;

varying vec2 vUv;

void main() {
    vUv = position.xy;
    gl_Position = vec4(position * 2.0 - 1.0, 1.0);
}`;
const Ri = class Ri {
    constructor(t) {
        S(this, "fps", 60);
        S(this, "fpsSamples", []);
        S(this, "quadVertexBuffer");
        S(this, "quadIndexBuffer");
        S(this, "sceneDiffuseTexture");
        S(this, "sceneDepthStencilTexture");
        S(this, "sceneGlowTexture");
        S(this, "sceneGlowAuxTexture");
        S(this, "composeShader");
        S(this, "glowShader");
        S(this, "glowShaderRanged");
        S(this, "sceneRenderBuffer");
        S(this, "sceneDepthRenderBuffer");
        S(this, "sceneMultisampleBuffer");
        S(this, "sceneBuffer");
        S(this, "glowBuffer");
        S(this, "glowAuxBuffer");
        S(this, "size", [32, 32]);
        S(this, "glowSize", [8, 8]);
        S(this, "clear", [0, 1, 0, 1]);
        S(this, "fogLocalDist", [100, 101]);
        S(this, "fogLocalColor", [0, 0, 0]);
        S(this, "localVignetteColor", [0, 0, 0]);
        S(this, "localVignetteFactor", 0);
        S(this, "localVignetteTexture", null);
        S(this, "renderList");
        S(this, "enableMSAA", !0);
        cr(this.size, t),
        cr(this.glowSize, t),
        Nf(this.glowSize, this.glowSize, .25),
        kf(this.glowSize, this.glowSize),
        this.composeShader = new ye(u6,f6),
        this.glowShader = new ye(id,od),
        this.glowShaderRanged = new ye(id,od,{
            defines: {
                RANGED: "true"
            }
        }),
        this.renderList = [],
        this.quadVertexBuffer = Rt(new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])),
        this.quadIndexBuffer = xn(new Uint8Array([0, 1, 2, 1, 3, 2])),
        this.sceneDiffuseTexture = this.createRenderTexture(this.size, u.RGBA8),
        this.sceneDepthStencilTexture = this.createRenderTexture(this.size, u.DEPTH24_STENCIL8),
        this.sceneGlowTexture = this.createRenderTexture(this.glowSize, u.RGBA8, !0),
        this.sceneGlowAuxTexture = this.createRenderTexture(this.glowSize, u.RGBA8, !0),
        this.sceneBuffer = u.createFramebuffer(),
        this.sceneMultisampleBuffer = u.createFramebuffer(),
        this.sceneRenderBuffer = u.createRenderbuffer(),
        this.sceneDepthRenderBuffer = u.createRenderbuffer(),
        this.glowBuffer = u.createFramebuffer(),
        this.glowAuxBuffer = u.createFramebuffer(),
        this.resize(on)
    }
    static get current() {
        return this.instance
    }
    get clearColor() {
        return L0(this.clear)
    }
    set clearColor(t) {
        P0(this.clear, t)
    }
    get fogDistance() {
        return O0(this.fogLocalDist)
    }
    set fogDistance(t) {
        cr(this.fogLocalDist, t)
    }
    get fogColor() {
        return dt(this.fogLocalColor)
    }
    set fogColor(t) {
        un(this.fogLocalColor, t)
    }
    get vignetteColor() {
        return dt(this.localVignetteColor)
    }
    set vignetteColor(t) {
        un(this.localVignetteColor, t)
    }
    get vignette() {
        return this.localVignetteFactor
    }
    set vignette(t) {
        this.localVignetteFactor = t
    }
    get vignetteDisplace() {
        return this.localVignetteTexture
    }
    set vignetteDisplace(t) {
        this.localVignetteTexture = t
    }
    resize(t) {
        cr(this.size, t),
        cr(this.glowSize, t),
        Nf(this.glowSize, this.glowSize, .25 / window.devicePixelRatio),
        kf(this.glowSize, this.glowSize);
        for (const n of [this.sceneDiffuseTexture, this.sceneDepthStencilTexture, this.sceneGlowTexture, this.sceneGlowAuxTexture])
            u.deleteTexture(n);
        this.sceneDiffuseTexture = this.createRenderTexture(this.size, u.RGBA8, !0),
        this.sceneDepthStencilTexture = this.createRenderTexture(this.size, u.DEPTH24_STENCIL8),
        this.sceneGlowTexture = this.createRenderTexture(this.glowSize, u.RGBA8, !0),
        this.sceneGlowAuxTexture = this.createRenderTexture(this.glowSize, u.RGBA8, !0),
        u.bindRenderbuffer(u.RENDERBUFFER, this.sceneRenderBuffer),
        u.renderbufferStorageMultisample(u.RENDERBUFFER, 4, u.RGBA8, t[0], t[1]),
        u.bindRenderbuffer(u.RENDERBUFFER, this.sceneDepthRenderBuffer),
        u.renderbufferStorageMultisample(u.RENDERBUFFER, 4, u.DEPTH24_STENCIL8, t[0], t[1]),
        u.bindFramebuffer(u.FRAMEBUFFER, this.sceneMultisampleBuffer),
        u.framebufferRenderbuffer(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.RENDERBUFFER, this.sceneRenderBuffer),
        u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_STENCIL_ATTACHMENT, u.RENDERBUFFER, this.sceneDepthRenderBuffer),
        u.bindFramebuffer(u.FRAMEBUFFER, this.sceneBuffer),
        u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, this.sceneDiffuseTexture, 0),
        u.framebufferTexture2D(u.FRAMEBUFFER, u.DEPTH_STENCIL_ATTACHMENT, u.TEXTURE_2D, this.sceneDepthStencilTexture, 0),
        u.bindFramebuffer(u.FRAMEBUFFER, this.glowBuffer),
        u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, this.sceneGlowTexture, 0),
        u.bindFramebuffer(u.FRAMEBUFFER, this.glowAuxBuffer),
        u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, this.sceneGlowAuxTexture, 0),
        u.bindFramebuffer(u.FRAMEBUFFER, null),
        u.bindRenderbuffer(u.RENDERBUFFER, null)
    }
    addTasks(...t) {
        this.renderList.push(...t)
    }
    getBaseUniforms() {
        return {
            uFogColor: this.fogLocalColor,
            uFogRange: this.fogLocalDist,
            uCameraPosition: q.position
        }
    }
    render(t) {
        const [n,r] = this.size;
        if (Ri.instance = this,
        this.fpsSamples.push(t),
        this.fpsSamples.length >= 16) {
            const c = this.fpsSamples.reduce((d,m)=>m + d, 0) / this.fpsSamples.length;
            this.fpsSamples.length = 0,
            this.fps = Math.round(1 / c * 60)
        }
        const i = []
          , o = [];
        for (const c of this.renderList)
            switch (c.pass ?? _i.Normal) {
            case _i.Normal:
                i.push(c);
                break;
            case _i.Alpha:
                o.push(c);
                break
            }
        this.renderList.length = 0,
        u.enable(u.DEPTH_TEST),
        u.depthFunc(u.LEQUAL),
        q.bindMatrices(),
        u.colorMask(!0, !0, !0, !0),
        u.bindFramebuffer(u.FRAMEBUFFER, this.enableMSAA ? this.sceneMultisampleBuffer : this.sceneBuffer),
        u.viewport(0, 0, n, r),
        u.clearColor(this.clear[0], this.clear[1], this.clear[2], this.clear[3]),
        u.enable(u.CULL_FACE),
        u.cullFace(u.BACK),
        u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT | u.STENCIL_BUFFER_BIT),
        ye.resetStats();
        for (const c of i)
            c.sphere && !q.sphereVisible(c.sphere) || c.callback();
        u.enable(u.BLEND),
        u.blendFunc(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA),
        u.depthMask(!1);
        for (const c of o)
            c.sphere && !q.sphereVisible(c.sphere) || c.callback();
        u.depthMask(!0),
        u.disable(u.BLEND),
        u.bindFramebuffer(u.FRAMEBUFFER, null),
        this.enableMSAA && (u.bindFramebuffer(u.READ_FRAMEBUFFER, this.sceneMultisampleBuffer),
        u.bindFramebuffer(u.DRAW_FRAMEBUFFER, this.sceneBuffer),
        u.blitFramebuffer(0, 0, on[0], on[1], 0, 0, on[0], on[1], u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT | u.STENCIL_BUFFER_BIT, u.NEAREST));
        {
            const [c,d] = this.glowSize
              , m = this.glowShader
              , p = this.glowShaderRanged;
            for (let y = 0; y < 2; y++) {
                u.bindFramebuffer(u.FRAMEBUFFER, this.glowAuxBuffer),
                u.viewport(0, 0, c, d),
                u.clearColor(0, 0, 0, 1),
                u.clear(u.COLOR_BUFFER_BIT);
                const h = y === 0 ? p : m;
                h.bind(),
                h.setBuffer("position", this.quadVertexBuffer, 2, u.FLOAT),
                h.setUniforms({
                    uResolution: this.glowSize,
                    uDiffuse: y === 0 ? this.sceneDiffuseTexture : this.sceneGlowTexture,
                    uDirection: [1, 0],
                    uRange: [.5, .9]
                }),
                h.draw(this.quadIndexBuffer, 6, u.TRIANGLES, u.UNSIGNED_BYTE),
                h.unbind(),
                u.bindFramebuffer(u.FRAMEBUFFER, this.glowBuffer),
                u.viewport(0, 0, c, d),
                u.clearColor(0, 0, 0, 1),
                u.clear(u.COLOR_BUFFER_BIT),
                m.bind(),
                m.setBuffer("position", this.quadVertexBuffer, 2, u.FLOAT),
                m.setUniforms({
                    uResolution: this.glowSize,
                    uDiffuse: this.sceneGlowAuxTexture,
                    uDirection: [0, 1]
                }),
                m.draw(this.quadIndexBuffer, 6, u.TRIANGLES, u.UNSIGNED_BYTE),
                m.unbind()
            }
        }
        const [s,a] = on
          , l = this.composeShader;
        u.bindFramebuffer(u.FRAMEBUFFER, null),
        u.viewport(0, 0, s, a),
        u.clearColor(0, 0, 0, 0),
        u.enable(u.BLEND),
        u.blendFunc(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA),
        u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT | u.STENCIL_BUFFER_BIT),
        l.bind(),
        l.setBuffer("position", this.quadVertexBuffer, 2, u.FLOAT),
        l.setUniforms({
            uDiffuse: this.sceneDiffuseTexture,
            uGlow: this.sceneGlowTexture,
            uDisplace: this.localVignetteTexture ? this.localVignetteTexture : 0,
            uAspect: n / r,
            uScreenSize: this.size,
            uTime: performance.now() * .01 % 1,
            uVignetteColor: this.localVignetteColor,
            uVignetteFactor: this.localVignetteFactor
        }),
        l.draw(this.quadIndexBuffer, 6, u.TRIANGLES, u.UNSIGNED_BYTE),
        l.unbind(),
        u.disable(u.BLEND),
        I0(this.clear, 0, 0, 0, 1),
        Ri.instance = null
    }
    createRenderTexture(t, n, r=!1) {
        const [i,o] = t
          , s = u.createTexture();
        return u.bindTexture(u.TEXTURE_2D, s),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, r ? u.LINEAR : u.NEAREST),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, r ? u.LINEAR : u.NEAREST),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
        u.texStorage2D(u.TEXTURE_2D, 1, n, i, o),
        u.bindTexture(u.TEXTURE_2D, null),
        s
    }
}
;
S(Ri, "instance", null);
let Kl = Ri;
class d6 {
    constructor(t) {
        S(this, "screen");
        S(this, "pipeline");
        S(this, "size");
        S(this, "resizeObserver");
        S(this, "frameHandler");
        this.canvas = t,
        h5(t),
        this.pipeline = new Kl([32, 32]),
        this.screen = null,
        t.style.visibility = "hidden",
        this.size = [32, 32],
        this.resizeObserver = new ResizeObserver(()=>this.handleResize()),
        this.resizeObserver.observe(t),
        this.frameHandler = new lu(this.handleFrame.bind(this)),
        this.handleMinimize = this.handleMinimize.bind(this),
        document.addEventListener("visibilitychange", this.handleMinimize),
        W.init()
    }
    setScreen(t) {
        this.screen && (this.screen.dispose(),
        this.screen = null,
        this.frameHandler.stop(),
        this.canvas.style.visibility = "hidden"),
        t && (this.screen = t,
        this.screen.resize(...this.size),
        this.frameHandler.start(),
        this.canvas.style.visibility = "visible")
    }
    dispose() {
        this.frameHandler.stop(),
        this.resizeObserver.disconnect(),
        document.removeEventListener("visibilitychange", this.handleMinimize)
    }
    async preload() {
        await Promise.all([Ns.preload(), Ms.preload(), Ts.preload(), Ls.preload(), Is.preload(), Os.preload(), Bs.preload(), Fs.preload(), ge.preload()])
    }
    handleResize() {
        d5();
        const [t,n] = on;
        this.size[0] = t,
        this.size[1] = n,
        this.pipeline.resize(this.size),
        this.screen && this.screen.resize(...this.size)
    }
    handleFrame(t) {
        this.screen && (this.screen.update(t),
        this.screen.render(this.pipeline)),
        this.pipeline.render(t),
        W.update(t),
        ge.update()
    }
    handleMinimize() {
        document.visibilityState === "visible" ? this.screen && this.frameHandler.start() : this.frameHandler.stop()
    }
}
function h6() {
    const e = M.useRef(!1)
      , [,t] = M.useState(!1)
      , [n,r] = M.useState(localStorage.getItem("sound") !== "false")
      , [i,o] = M.useState(x0)
      , [s,a] = M.useState(null)
      , l = M.useRef(null)
      , c = M.useRef(null)
      , d = i.screen in rd ? rd[i.screen] : null
      , m = M.useMemo(()=>({
        ...i,
        setScreen: (E,x)=>{
            E !== i.screen && !i.exiting && (o({
                ...i,
                nextScreen: E,
                exiting: !0
            }),
            setTimeout(()=>{
                o({
                    ...i,
                    extraData: x,
                    screen: E,
                    exiting: !1
                })
            }
            , c6))
        }
    }), [i])
      , p = M.useMemo(()=>({
        enabled: n,
        setEnabled: r
    }), [n]);
    M.useEffect(()=>{
        W.soundEnabled = n,
        W.musicEnabled = n,
        localStorage.setItem("sound", n ? "true" : "false")
    }
    , [n]),
    M.useEffect(()=>{
        const E = l.current;
        if (E) {
            const x = new d6(E);
            return x.preload().then(()=>{
                t(!0),
                a(x)
            }
            ),
            ()=>{
                x.dispose(),
                a(null)
            }
        }
    }
    , []),
    M.useEffect(()=>{
        if (!e.current) {
            e.current = !0;
            const E = document.createElement("script");
            E.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-TW7CKCZV');`;
            const x = document.createElement("noscript");
            x.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TW7CKCZV" height="0" width="0" style="display:none;visibility:hidden">',
            document.body.prepend(x),
            document.body.prepend(E)
        }
    }
    , []);
    const y = M.useMemo(()=>[X.Menu, X.World, X.History].includes(i.screen), [i])
      , h = E=>{
        setTimeout(()=>{
            var x;
            (x = c.current) == null || x.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
        , 600),
        m.setScreen(E)
    }
    ;
    return f.jsx(C0.Provider, {
        value: p,
        children: f.jsx(S0.Provider, {
            value: s,
            children: f.jsx(Rn.Provider, {
                value: m,
                children: f.jsx(n4, {
                    children: f.jsxs("div", {
                        className: $m.mainWrap,
                        children: [f.jsx("canvas", {
                            ref: l
                        }), f.jsx("div", {
                            ref: c,
                            children: d ? f.jsx(d, {}) : null
                        }), y && f.jsx(Zm, {
                            activeScreen: i.screen,
                            onChange: h
                        })]
                    })
                })
            })
        })
    })
}
E0(document.getElementById("root")).render(f.jsx(h6, {}));
