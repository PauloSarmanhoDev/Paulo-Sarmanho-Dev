(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
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
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ku = {
    exports: {}
}
  , ro = {}
  , Xu = {
    exports: {}
}
  , U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr = Symbol.for("react.element")
  , If = Symbol.for("react.portal")
  , Df = Symbol.for("react.fragment")
  , Ff = Symbol.for("react.strict_mode")
  , Hf = Symbol.for("react.profiler")
  , Uf = Symbol.for("react.provider")
  , Bf = Symbol.for("react.context")
  , bf = Symbol.for("react.forward_ref")
  , Vf = Symbol.for("react.suspense")
  , Wf = Symbol.for("react.memo")
  , Qf = Symbol.for("react.lazy")
  , hs = Symbol.iterator;
function Yf(e) {
    return e === null || typeof e != "object" ? null : (e = hs && e[hs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var qu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Zu = Object.assign
  , Ju = {};
function Yn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ju,
    this.updater = n || qu
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Yn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ec() {}
ec.prototype = Yn.prototype;
function sa(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ju,
    this.updater = n || qu
}
var ua = sa.prototype = new ec;
ua.constructor = sa;
Zu(ua, Yn.prototype);
ua.isPureReactComponent = !0;
var vs = Array.isArray
  , tc = Object.prototype.hasOwnProperty
  , ca = {
    current: null
}
  , nc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function rc(e, t, n) {
    var r, i = {}, o = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            tc.call(t, r) && !nc.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Fr,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: ca.current
    }
}
function Gf(e, t) {
    return {
        $$typeof: Fr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function da(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Fr
}
function Kf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var gs = /\/+/g;
function Lo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Kf("" + e.key) : t.toString(36)
}
function hi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Fr:
            case If:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + Lo(l, 0) : r,
        vs(i) ? (n = "",
        e != null && (n = e.replace(gs, "$&/") + "/"),
        hi(i, t, n, "", function(u) {
            return u
        })) : i != null && (da(i) && (i = Gf(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(gs, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    vs(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var s = r + Lo(o, a);
            l += hi(o, t, n, s, i)
        }
    else if (s = Yf(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            s = r + Lo(o, a++),
            l += hi(o, t, n, s, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function Qr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return hi(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Xf(e) {
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
var Re = {
    current: null
}
  , vi = {
    transition: null
}
  , qf = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: vi,
    ReactCurrentOwner: ca
};
U.Children = {
    map: Qr,
    forEach: function(e, t, n) {
        Qr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Qr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Qr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!da(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
U.Component = Yn;
U.Fragment = Df;
U.Profiler = Hf;
U.PureComponent = sa;
U.StrictMode = Ff;
U.Suspense = Vf;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
U.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Zu({}, e.props)
      , i = e.key
      , o = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        l = ca.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            tc.call(t, s) && !nc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Fr,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
}
;
U.createContext = function(e) {
    return e = {
        $$typeof: Bf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Uf,
        _context: e
    },
    e.Consumer = e
}
;
U.createElement = rc;
U.createFactory = function(e) {
    var t = rc.bind(null, e);
    return t.type = e,
    t
}
;
U.createRef = function() {
    return {
        current: null
    }
}
;
U.forwardRef = function(e) {
    return {
        $$typeof: bf,
        render: e
    }
}
;
U.isValidElement = da;
U.lazy = function(e) {
    return {
        $$typeof: Qf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Xf
    }
}
;
U.memo = function(e, t) {
    return {
        $$typeof: Wf,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
U.startTransition = function(e) {
    var t = vi.transition;
    vi.transition = {};
    try {
        e()
    } finally {
        vi.transition = t
    }
}
;
U.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
U.useCallback = function(e, t) {
    return Re.current.useCallback(e, t)
}
;
U.useContext = function(e) {
    return Re.current.useContext(e)
}
;
U.useDebugValue = function() {}
;
U.useDeferredValue = function(e) {
    return Re.current.useDeferredValue(e)
}
;
U.useEffect = function(e, t) {
    return Re.current.useEffect(e, t)
}
;
U.useId = function() {
    return Re.current.useId()
}
;
U.useImperativeHandle = function(e, t, n) {
    return Re.current.useImperativeHandle(e, t, n)
}
;
U.useInsertionEffect = function(e, t) {
    return Re.current.useInsertionEffect(e, t)
}
;
U.useLayoutEffect = function(e, t) {
    return Re.current.useLayoutEffect(e, t)
}
;
U.useMemo = function(e, t) {
    return Re.current.useMemo(e, t)
}
;
U.useReducer = function(e, t, n) {
    return Re.current.useReducer(e, t, n)
}
;
U.useRef = function(e) {
    return Re.current.useRef(e)
}
;
U.useState = function(e) {
    return Re.current.useState(e)
}
;
U.useSyncExternalStore = function(e, t, n) {
    return Re.current.useSyncExternalStore(e, t, n)
}
;
U.useTransition = function() {
    return Re.current.useTransition()
}
;
U.version = "18.2.0";
Xu.exports = U;
var He = Xu.exports;
const Ye = Dr(He);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zf = He
  , Jf = Symbol.for("react.element")
  , ep = Symbol.for("react.fragment")
  , tp = Object.prototype.hasOwnProperty
  , np = Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , rp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ic(e, t, n) {
    var r, i = {}, o = null, l = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        tp.call(t, r) && !rp.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Jf,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: np.current
    }
}
ro.Fragment = ep;
ro.jsx = ic;
ro.jsxs = ic;
Ku.exports = ro;
var d = Ku.exports
  , ul = {}
  , oc = {
    exports: {}
}
  , Xe = {}
  , lc = {
    exports: {}
}
  , ac = {};
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
    function t(z, $) {
        var R = z.length;
        z.push($);
        e: for (; 0 < R; ) {
            var X = R - 1 >>> 1
              , P = z[X];
            if (0 < i(P, $))
                z[X] = $,
                z[R] = P,
                R = X;
            else
                break e
        }
    }
    function n(z) {
        return z.length === 0 ? null : z[0]
    }
    function r(z) {
        if (z.length === 0)
            return null;
        var $ = z[0]
          , R = z.pop();
        if (R !== $) {
            z[0] = R;
            e: for (var X = 0, P = z.length, O = P >>> 1; X < O; ) {
                var L = 2 * (X + 1) - 1
                  , A = z[L]
                  , g = L + 1
                  , B = z[g];
                if (0 > i(A, R))
                    g < P && 0 > i(B, A) ? (z[X] = B,
                    z[g] = R,
                    X = g) : (z[X] = A,
                    z[L] = R,
                    X = L);
                else if (g < P && 0 > i(B, R))
                    z[X] = B,
                    z[g] = R,
                    X = g;
                else
                    break e
            }
        }
        return $
    }
    function i(z, $) {
        var R = z.sortIndex - $.sortIndex;
        return R !== 0 ? R : z.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date
          , a = l.now();
        e.unstable_now = function() {
            return l.now() - a
        }
    }
    var s = []
      , u = []
      , m = 1
      , h = null
      , v = 3
      , x = !1
      , w = !1
      , S = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(z) {
        for (var $ = n(u); $ !== null; ) {
            if ($.callback === null)
                r(u);
            else if ($.startTime <= z)
                r(u),
                $.sortIndex = $.expirationTime,
                t(s, $);
            else
                break;
            $ = n(u)
        }
    }
    function y(z) {
        if (S = !1,
        p(z),
        !w)
            if (n(s) !== null)
                w = !0,
                wt(C);
            else {
                var $ = n(u);
                $ !== null && Le(y, $.startTime - z)
            }
    }
    function C(z, $) {
        w = !1,
        S && (S = !1,
        f(_),
        _ = -1),
        x = !0;
        var R = v;
        try {
            for (p($),
            h = n(s); h !== null && (!(h.expirationTime > $) || z && !pe()); ) {
                var X = h.callback;
                if (typeof X == "function") {
                    h.callback = null,
                    v = h.priorityLevel;
                    var P = X(h.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof P == "function" ? h.callback = P : h === n(s) && r(s),
                    p($)
                } else
                    r(s);
                h = n(s)
            }
            if (h !== null)
                var O = !0;
            else {
                var L = n(u);
                L !== null && Le(y, L.startTime - $),
                O = !1
            }
            return O
        } finally {
            h = null,
            v = R,
            x = !1
        }
    }
    var k = !1
      , E = null
      , _ = -1
      , H = 5
      , I = -1;
    function pe() {
        return !(e.unstable_now() - I < H)
    }
    function ce() {
        if (E !== null) {
            var z = e.unstable_now();
            I = z;
            var $ = !0;
            try {
                $ = E(!0, z)
            } finally {
                $ ? ge() : (k = !1,
                E = null)
            }
        } else
            k = !1
    }
    var ge;
    if (typeof c == "function")
        ge = function() {
            c(ce)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Ve = new MessageChannel
          , Ee = Ve.port2;
        Ve.port1.onmessage = ce,
        ge = function() {
            Ee.postMessage(null)
        }
    } else
        ge = function() {
            T(ce, 0)
        }
        ;
    function wt(z) {
        E = z,
        k || (k = !0,
        ge())
    }
    function Le(z, $) {
        _ = T(function() {
            z(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(z) {
        z.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        wt(C))
    }
    ,
    e.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < z ? Math.floor(1e3 / z) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return v
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(z) {
        switch (v) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = v
        }
        var R = v;
        v = $;
        try {
            return z()
        } finally {
            v = R
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(z, $) {
        switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            z = 3
        }
        var R = v;
        v = z;
        try {
            return $()
        } finally {
            v = R
        }
    }
    ,
    e.unstable_scheduleCallback = function(z, $, R) {
        var X = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? X + R : X) : R = X,
        z) {
        case 1:
            var P = -1;
            break;
        case 2:
            P = 250;
            break;
        case 5:
            P = 1073741823;
            break;
        case 4:
            P = 1e4;
            break;
        default:
            P = 5e3
        }
        return P = R + P,
        z = {
            id: m++,
            callback: $,
            priorityLevel: z,
            startTime: R,
            expirationTime: P,
            sortIndex: -1
        },
        R > X ? (z.sortIndex = R,
        t(u, z),
        n(s) === null && z === n(u) && (S ? (f(_),
        _ = -1) : S = !0,
        Le(y, R - X))) : (z.sortIndex = P,
        t(s, z),
        w || x || (w = !0,
        wt(C))),
        z
    }
    ,
    e.unstable_shouldYield = pe,
    e.unstable_wrapCallback = function(z) {
        var $ = v;
        return function() {
            var R = v;
            v = $;
            try {
                return z.apply(this, arguments)
            } finally {
                v = R
            }
        }
    }
}
)(ac);
lc.exports = ac;
var ip = lc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sc = He
  , Ke = ip;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var uc = new Set
  , xr = {};
function gn(e, t) {
    Fn(e, t),
    Fn(e + "Capture", t)
}
function Fn(e, t) {
    for (xr[e] = t,
    e = 0; e < t.length; e++)
        uc.add(t[e])
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , cl = Object.prototype.hasOwnProperty
  , op = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ys = {}
  , ws = {};
function lp(e) {
    return cl.call(ws, e) ? !0 : cl.call(ys, e) ? !1 : op.test(e) ? ws[e] = !0 : (ys[e] = !0,
    !1)
}
function ap(e, t, n, r) {
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
function sp(e, t, n, r) {
    if (t === null || typeof t > "u" || ap(e, t, n, r))
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
function Ae(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = l
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Ae(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Ae(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Ae(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Ae(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new Ae(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Ae(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var fa = /[\-:]([a-z])/g;
function pa(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(fa, pa);
    Ce[t] = new Ae(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(fa, pa);
    Ce[t] = new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(fa, pa);
    Ce[t] = new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ma(e, t, n, r) {
    var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sp(t, n, i, r) && (n = null),
    r || i === null ? lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Tt = sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Yr = Symbol.for("react.element")
  , xn = Symbol.for("react.portal")
  , kn = Symbol.for("react.fragment")
  , ha = Symbol.for("react.strict_mode")
  , dl = Symbol.for("react.profiler")
  , cc = Symbol.for("react.provider")
  , dc = Symbol.for("react.context")
  , va = Symbol.for("react.forward_ref")
  , fl = Symbol.for("react.suspense")
  , pl = Symbol.for("react.suspense_list")
  , ga = Symbol.for("react.memo")
  , Mt = Symbol.for("react.lazy")
  , fc = Symbol.for("react.offscreen")
  , xs = Symbol.iterator;
function Zn(e) {
    return e === null || typeof e != "object" ? null : (e = xs && e[xs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var re = Object.assign, Mo;
function lr(e) {
    if (Mo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Mo = t && t[1] || ""
        }
    return `
` + Mo + e
}
var $o = !1;
function Ro(e, t) {
    if (!e || $o)
        return "";
    $o = !0;
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
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a]; )
                a--;
            for (; 1 <= l && 0 <= a; l--,
            a--)
                if (i[l] !== o[a]) {
                    if (l !== 1 || a !== 1)
                        do
                            if (l--,
                            a--,
                            0 > a || i[l] !== o[a]) {
                                var s = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= l && 0 <= a);
                    break
                }
        }
    } finally {
        $o = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? lr(e) : ""
}
function up(e) {
    switch (e.tag) {
    case 5:
        return lr(e.type);
    case 16:
        return lr("Lazy");
    case 13:
        return lr("Suspense");
    case 19:
        return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ro(e.type, !1),
        e;
    case 11:
        return e = Ro(e.type.render, !1),
        e;
    case 1:
        return e = Ro(e.type, !0),
        e;
    default:
        return ""
    }
}
function ml(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case kn:
        return "Fragment";
    case xn:
        return "Portal";
    case dl:
        return "Profiler";
    case ha:
        return "StrictMode";
    case fl:
        return "Suspense";
    case pl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case dc:
            return (e.displayName || "Context") + ".Consumer";
        case cc:
            return (e._context.displayName || "Context") + ".Provider";
        case va:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ga:
            return t = e.displayName || null,
            t !== null ? t : ml(e.type) || "Memo";
        case Mt:
            t = e._payload,
            e = e._init;
            try {
                return ml(e(t))
            } catch {}
        }
    return null
}
function cp(e) {
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
        return ml(t);
    case 8:
        return t === ha ? "StrictMode" : "Mode";
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
function qt(e) {
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
function pc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function dp(e) {
    var t = pc(e) ? "checked" : "value"
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
            set: function(l) {
                r = "" + l,
                o.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Gr(e) {
    e._valueTracker || (e._valueTracker = dp(e))
}
function mc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = pc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Pi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function hl(e, t) {
    var n = t.checked;
    return re({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ks(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = qt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function hc(e, t) {
    t = t.checked,
    t != null && ma(e, "checked", t, !1)
}
function vl(e, t) {
    hc(e, t);
    var n = qt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? gl(e, t.type, n) : t.hasOwnProperty("defaultValue") && gl(e, t.type, qt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ss(e, t, n) {
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
function gl(e, t, n) {
    (t !== "number" || Pi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ar = Array.isArray;
function Mn(e, t, n, r) {
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
        for (n = "" + qt(n),
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
function yl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return re({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Cs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (ar(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: qt(n)
    }
}
function vc(e, t) {
    var n = qt(t.value)
      , r = qt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function js(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function gc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function wl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Kr, yc = function(e) {
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
        for (Kr = Kr || document.createElement("div"),
        Kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Kr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function kr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var cr = {
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
  , fp = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
    fp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        cr[t] = cr[e]
    })
});
function wc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px"
}
function xc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = wc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var pp = re({
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
function xl(e, t) {
    if (t) {
        if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function kl(e, t) {
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
var Sl = null;
function ya(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Cl = null
  , $n = null
  , Rn = null;
function Es(e) {
    if (e = Br(e)) {
        if (typeof Cl != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = so(t),
        Cl(e.stateNode, e.type, t))
    }
}
function kc(e) {
    $n ? Rn ? Rn.push(e) : Rn = [e] : $n = e
}
function Sc() {
    if ($n) {
        var e = $n
          , t = Rn;
        if (Rn = $n = null,
        Es(e),
        t)
            for (e = 0; e < t.length; e++)
                Es(t[e])
    }
}
function Cc(e, t) {
    return e(t)
}
function jc() {}
var Ao = !1;
function Ec(e, t, n) {
    if (Ao)
        return e(t, n);
    Ao = !0;
    try {
        return Cc(e, t, n)
    } finally {
        Ao = !1,
        ($n !== null || Rn !== null) && (jc(),
        Sc())
    }
}
function Sr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = so(n);
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
        throw Error(j(231, t, typeof n));
    return n
}
var jl = !1;
if (_t)
    try {
        var Jn = {};
        Object.defineProperty(Jn, "passive", {
            get: function() {
                jl = !0
            }
        }),
        window.addEventListener("test", Jn, Jn),
        window.removeEventListener("test", Jn, Jn)
    } catch {
        jl = !1
    }
function mp(e, t, n, r, i, o, l, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (m) {
        this.onError(m)
    }
}
var dr = !1
  , Ti = null
  , Oi = !1
  , El = null
  , hp = {
    onError: function(e) {
        dr = !0,
        Ti = e
    }
};
function vp(e, t, n, r, i, o, l, a, s) {
    dr = !1,
    Ti = null,
    mp.apply(hp, arguments)
}
function gp(e, t, n, r, i, o, l, a, s) {
    if (vp.apply(this, arguments),
    dr) {
        if (dr) {
            var u = Ti;
            dr = !1,
            Ti = null
        } else
            throw Error(j(198));
        Oi || (Oi = !0,
        El = u)
    }
}
function yn(e) {
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
function _c(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function _s(e) {
    if (yn(e) !== e)
        throw Error(j(188))
}
function yp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = yn(e),
        t === null)
            throw Error(j(188));
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
                    return _s(i),
                    e;
                if (o === r)
                    return _s(i),
                    t;
                o = o.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var l = !1, a = i.child; a; ) {
                if (a === n) {
                    l = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    l = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!l) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        l = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        l = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!l)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function zc(e) {
    return e = yp(e),
    e !== null ? Nc(e) : null
}
function Nc(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Nc(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Pc = Ke.unstable_scheduleCallback
  , zs = Ke.unstable_cancelCallback
  , wp = Ke.unstable_shouldYield
  , xp = Ke.unstable_requestPaint
  , se = Ke.unstable_now
  , kp = Ke.unstable_getCurrentPriorityLevel
  , wa = Ke.unstable_ImmediatePriority
  , Tc = Ke.unstable_UserBlockingPriority
  , Li = Ke.unstable_NormalPriority
  , Sp = Ke.unstable_LowPriority
  , Oc = Ke.unstable_IdlePriority
  , io = null
  , gt = null;
function Cp(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
        try {
            gt.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var ct = Math.clz32 ? Math.clz32 : _p
  , jp = Math.log
  , Ep = Math.LN2;
function _p(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (jp(e) / Ep | 0) | 0
}
var Xr = 64
  , qr = 4194304;
function sr(e) {
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
function Mi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var a = l & ~i;
        a !== 0 ? r = sr(a) : (o &= l,
        o !== 0 && (r = sr(o)))
    } else
        l = n & ~i,
        l !== 0 ? r = sr(l) : o !== 0 && (r = sr(o));
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
            n = 31 - ct(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function zp(e, t) {
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
function Np(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var l = 31 - ct(o)
          , a = 1 << l
          , s = i[l];
        s === -1 ? (!(a & n) || a & r) && (i[l] = zp(a, t)) : s <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function _l(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Lc() {
    var e = Xr;
    return Xr <<= 1,
    !(Xr & 4194240) && (Xr = 64),
    e
}
function Io(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Hr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - ct(t),
    e[t] = n
}
function Pp(e, t) {
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
        var i = 31 - ct(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function xa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - ct(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var G = 0;
function Mc(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var $c, ka, Rc, Ac, Ic, zl = !1, Zr = [], Ht = null, Ut = null, Bt = null, Cr = new Map, jr = new Map, Rt = [], Tp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ns(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ht = null;
        break;
    case "dragenter":
    case "dragleave":
        Ut = null;
        break;
    case "mouseover":
    case "mouseout":
        Bt = null;
        break;
    case "pointerover":
    case "pointerout":
        Cr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        jr.delete(t.pointerId)
    }
}
function er(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Br(t),
    t !== null && ka(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Op(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ht = er(Ht, e, t, n, r, i),
        !0;
    case "dragenter":
        return Ut = er(Ut, e, t, n, r, i),
        !0;
    case "mouseover":
        return Bt = er(Bt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Cr.set(o, er(Cr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        jr.set(o, er(jr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Dc(e) {
    var t = ln(e.target);
    if (t !== null) {
        var n = yn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = _c(n),
                t !== null) {
                    e.blockedOn = t,
                    Ic(e.priority, function() {
                        Rc(n)
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
function gi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Sl = r,
            n.target.dispatchEvent(r),
            Sl = null
        } else
            return t = Br(n),
            t !== null && ka(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ps(e, t, n) {
    gi(e) && n.delete(t)
}
function Lp() {
    zl = !1,
    Ht !== null && gi(Ht) && (Ht = null),
    Ut !== null && gi(Ut) && (Ut = null),
    Bt !== null && gi(Bt) && (Bt = null),
    Cr.forEach(Ps),
    jr.forEach(Ps)
}
function tr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    zl || (zl = !0,
    Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Lp)))
}
function Er(e) {
    function t(i) {
        return tr(i, e)
    }
    if (0 < Zr.length) {
        tr(Zr[0], e);
        for (var n = 1; n < Zr.length; n++) {
            var r = Zr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ht !== null && tr(Ht, e),
    Ut !== null && tr(Ut, e),
    Bt !== null && tr(Bt, e),
    Cr.forEach(t),
    jr.forEach(t),
    n = 0; n < Rt.length; n++)
        r = Rt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && (n = Rt[0],
    n.blockedOn === null); )
        Dc(n),
        n.blockedOn === null && Rt.shift()
}
var An = Tt.ReactCurrentBatchConfig
  , $i = !0;
function Mp(e, t, n, r) {
    var i = G
      , o = An.transition;
    An.transition = null;
    try {
        G = 1,
        Sa(e, t, n, r)
    } finally {
        G = i,
        An.transition = o
    }
}
function $p(e, t, n, r) {
    var i = G
      , o = An.transition;
    An.transition = null;
    try {
        G = 4,
        Sa(e, t, n, r)
    } finally {
        G = i,
        An.transition = o
    }
}
function Sa(e, t, n, r) {
    if ($i) {
        var i = Nl(e, t, n, r);
        if (i === null)
            Yo(e, t, r, Ri, n),
            Ns(e, r);
        else if (Op(i, e, t, n, r))
            r.stopPropagation();
        else if (Ns(e, r),
        t & 4 && -1 < Tp.indexOf(e)) {
            for (; i !== null; ) {
                var o = Br(i);
                if (o !== null && $c(o),
                o = Nl(e, t, n, r),
                o === null && Yo(e, t, r, Ri, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Yo(e, t, r, null, n)
    }
}
var Ri = null;
function Nl(e, t, n, r) {
    if (Ri = null,
    e = ya(r),
    e = ln(e),
    e !== null)
        if (t = yn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = _c(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ri = e,
    null
}
function Fc(e) {
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
        switch (kp()) {
        case wa:
            return 1;
        case Tc:
            return 4;
        case Li:
        case Sp:
            return 16;
        case Oc:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Dt = null
  , Ca = null
  , yi = null;
function Hc() {
    if (yi)
        return yi;
    var e, t = Ca, n = t.length, r, i = "value"in Dt ? Dt.value : Dt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
        ;
    return yi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function wi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Jr() {
    return !0
}
function Ts() {
    return !1
}
function qe(e) {
    function t(n, r, i, o, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Jr : Ts,
        this.isPropagationStopped = Ts,
        this
    }
    return re(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Jr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Jr)
        },
        persist: function() {},
        isPersistent: Jr
    }),
    t
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ja = qe(Gn), Ur = re({}, Gn, {
    view: 0,
    detail: 0
}), Rp = qe(Ur), Do, Fo, nr, oo = re({}, Ur, {
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
    getModifierState: Ea,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (Do = e.screenX - nr.screenX,
        Fo = e.screenY - nr.screenY) : Fo = Do = 0,
        nr = e),
        Do)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Fo
    }
}), Os = qe(oo), Ap = re({}, oo, {
    dataTransfer: 0
}), Ip = qe(Ap), Dp = re({}, Ur, {
    relatedTarget: 0
}), Ho = qe(Dp), Fp = re({}, Gn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Hp = qe(Fp), Up = re({}, Gn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Bp = qe(Up), bp = re({}, Gn, {
    data: 0
}), Ls = qe(bp), Vp = {
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
}, Wp = {
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
}, Qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Yp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qp[e]) ? !!t[e] : !1
}
function Ea() {
    return Yp
}
var Gp = re({}, Ur, {
    key: function(e) {
        if (e.key) {
            var t = Vp[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = wi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wp[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ea,
    charCode: function(e) {
        return e.type === "keypress" ? wi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? wi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Kp = qe(Gp)
  , Xp = re({}, oo, {
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
  , Ms = qe(Xp)
  , qp = re({}, Ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ea
})
  , Zp = qe(qp)
  , Jp = re({}, Gn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , e1 = qe(Jp)
  , t1 = re({}, oo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , n1 = qe(t1)
  , r1 = [9, 13, 27, 32]
  , _a = _t && "CompositionEvent"in window
  , fr = null;
_t && "documentMode"in document && (fr = document.documentMode);
var i1 = _t && "TextEvent"in window && !fr
  , Uc = _t && (!_a || fr && 8 < fr && 11 >= fr)
  , $s = String.fromCharCode(32)
  , Rs = !1;
function Bc(e, t) {
    switch (e) {
    case "keyup":
        return r1.indexOf(t.keyCode) !== -1;
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
function bc(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Sn = !1;
function o1(e, t) {
    switch (e) {
    case "compositionend":
        return bc(t);
    case "keypress":
        return t.which !== 32 ? null : (Rs = !0,
        $s);
    case "textInput":
        return e = t.data,
        e === $s && Rs ? null : e;
    default:
        return null
    }
}
function l1(e, t) {
    if (Sn)
        return e === "compositionend" || !_a && Bc(e, t) ? (e = Hc(),
        yi = Ca = Dt = null,
        Sn = !1,
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
        return Uc && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var a1 = {
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
function As(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!a1[e.type] : t === "textarea"
}
function Vc(e, t, n, r) {
    kc(r),
    t = Ai(t, "onChange"),
    0 < t.length && (n = new ja("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var pr = null
  , _r = null;
function s1(e) {
    td(e, 0)
}
function lo(e) {
    var t = En(e);
    if (mc(t))
        return e
}
function u1(e, t) {
    if (e === "change")
        return t
}
var Wc = !1;
if (_t) {
    var Uo;
    if (_t) {
        var Bo = "oninput"in document;
        if (!Bo) {
            var Is = document.createElement("div");
            Is.setAttribute("oninput", "return;"),
            Bo = typeof Is.oninput == "function"
        }
        Uo = Bo
    } else
        Uo = !1;
    Wc = Uo && (!document.documentMode || 9 < document.documentMode)
}
function Ds() {
    pr && (pr.detachEvent("onpropertychange", Qc),
    _r = pr = null)
}
function Qc(e) {
    if (e.propertyName === "value" && lo(_r)) {
        var t = [];
        Vc(t, _r, e, ya(e)),
        Ec(s1, t)
    }
}
function c1(e, t, n) {
    e === "focusin" ? (Ds(),
    pr = t,
    _r = n,
    pr.attachEvent("onpropertychange", Qc)) : e === "focusout" && Ds()
}
function d1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return lo(_r)
}
function f1(e, t) {
    if (e === "click")
        return lo(t)
}
function p1(e, t) {
    if (e === "input" || e === "change")
        return lo(t)
}
function m1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ft = typeof Object.is == "function" ? Object.is : m1;
function zr(e, t) {
    if (ft(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!cl.call(t, i) || !ft(e[i], t[i]))
            return !1
    }
    return !0
}
function Fs(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Hs(e, t) {
    var n = Fs(e);
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
        n = Fs(n)
    }
}
function Yc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Gc() {
    for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Pi(e.document)
    }
    return t
}
function za(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function h1(e) {
    var t = Gc()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
        if (r !== null && za(n)) {
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
                i = Hs(n, o);
                var l = Hs(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
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
var v1 = _t && "documentMode"in document && 11 >= document.documentMode
  , Cn = null
  , Pl = null
  , mr = null
  , Tl = !1;
function Us(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Tl || Cn == null || Cn !== Pi(r) || (r = Cn,
    "selectionStart"in r && za(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    mr && zr(mr, r) || (mr = r,
    r = Ai(Pl, "onSelect"),
    0 < r.length && (t = new ja("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Cn)))
}
function ei(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var jn = {
    animationend: ei("Animation", "AnimationEnd"),
    animationiteration: ei("Animation", "AnimationIteration"),
    animationstart: ei("Animation", "AnimationStart"),
    transitionend: ei("Transition", "TransitionEnd")
}
  , bo = {}
  , Kc = {};
_t && (Kc = document.createElement("div").style,
"AnimationEvent"in window || (delete jn.animationend.animation,
delete jn.animationiteration.animation,
delete jn.animationstart.animation),
"TransitionEvent"in window || delete jn.transitionend.transition);
function ao(e) {
    if (bo[e])
        return bo[e];
    if (!jn[e])
        return e;
    var t = jn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Kc)
            return bo[e] = t[n];
    return e
}
var Xc = ao("animationend")
  , qc = ao("animationiteration")
  , Zc = ao("animationstart")
  , Jc = ao("transitionend")
  , ed = new Map
  , Bs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Jt(e, t) {
    ed.set(e, t),
    gn(t, [e])
}
for (var Vo = 0; Vo < Bs.length; Vo++) {
    var Wo = Bs[Vo]
      , g1 = Wo.toLowerCase()
      , y1 = Wo[0].toUpperCase() + Wo.slice(1);
    Jt(g1, "on" + y1)
}
Jt(Xc, "onAnimationEnd");
Jt(qc, "onAnimationIteration");
Jt(Zc, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Jc, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , w1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function bs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    gp(r, t, void 0, e),
    e.currentTarget = null
}
function td(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var a = r[l]
                      , s = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    bs(i, a, u),
                    o = s
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (a = r[l],
                    s = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    bs(i, a, u),
                    o = s
                }
        }
    }
    if (Oi)
        throw e = El,
        Oi = !1,
        El = null,
        e
}
function Z(e, t) {
    var n = t[Rl];
    n === void 0 && (n = t[Rl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (nd(t, e, 2, !1),
    n.add(r))
}
function Qo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    nd(n, e, r, t)
}
var ti = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
    if (!e[ti]) {
        e[ti] = !0,
        uc.forEach(function(n) {
            n !== "selectionchange" && (w1.has(n) || Qo(n, !1, e),
            Qo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ti] || (t[ti] = !0,
        Qo("selectionchange", !1, t))
    }
}
function nd(e, t, n, r) {
    switch (Fc(t)) {
    case 1:
        var i = Mp;
        break;
    case 4:
        i = $p;
        break;
    default:
        i = Sa
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !jl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Yo(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var s = l.tag;
                        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo,
                        s === i || s.nodeType === 8 && s.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; a !== null; ) {
                    if (l = ln(a),
                    l === null)
                        return;
                    if (s = l.tag,
                    s === 5 || s === 6) {
                        r = o = l;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Ec(function() {
        var u = o
          , m = ya(n)
          , h = [];
        e: {
            var v = ed.get(e);
            if (v !== void 0) {
                var x = ja
                  , w = e;
                switch (e) {
                case "keypress":
                    if (wi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = Kp;
                    break;
                case "focusin":
                    w = "focus",
                    x = Ho;
                    break;
                case "focusout":
                    w = "blur",
                    x = Ho;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Ho;
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
                    x = Os;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = Ip;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = Zp;
                    break;
                case Xc:
                case qc:
                case Zc:
                    x = Hp;
                    break;
                case Jc:
                    x = e1;
                    break;
                case "scroll":
                    x = Rp;
                    break;
                case "wheel":
                    x = n1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = Bp;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = Ms
                }
                var S = (t & 4) !== 0
                  , T = !S && e === "scroll"
                  , f = S ? v !== null ? v + "Capture" : null : v;
                S = [];
                for (var c = u, p; c !== null; ) {
                    p = c;
                    var y = p.stateNode;
                    if (p.tag === 5 && y !== null && (p = y,
                    f !== null && (y = Sr(c, f),
                    y != null && S.push(Pr(c, y, p)))),
                    T)
                        break;
                    c = c.return
                }
                0 < S.length && (v = new x(v,w,null,n,m),
                h.push({
                    event: v,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                v && n !== Sl && (w = n.relatedTarget || n.fromElement) && (ln(w) || w[zt]))
                    break e;
                if ((x || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = u,
                w = w ? ln(w) : null,
                w !== null && (T = yn(w),
                w !== T || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = u),
                x !== w)) {
                    if (S = Os,
                    y = "onMouseLeave",
                    f = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (S = Ms,
                    y = "onPointerLeave",
                    f = "onPointerEnter",
                    c = "pointer"),
                    T = x == null ? v : En(x),
                    p = w == null ? v : En(w),
                    v = new S(y,c + "leave",x,n,m),
                    v.target = T,
                    v.relatedTarget = p,
                    y = null,
                    ln(m) === u && (S = new S(f,c + "enter",w,n,m),
                    S.target = p,
                    S.relatedTarget = T,
                    y = S),
                    T = y,
                    x && w)
                        t: {
                            for (S = x,
                            f = w,
                            c = 0,
                            p = S; p; p = wn(p))
                                c++;
                            for (p = 0,
                            y = f; y; y = wn(y))
                                p++;
                            for (; 0 < c - p; )
                                S = wn(S),
                                c--;
                            for (; 0 < p - c; )
                                f = wn(f),
                                p--;
                            for (; c--; ) {
                                if (S === f || f !== null && S === f.alternate)
                                    break t;
                                S = wn(S),
                                f = wn(f)
                            }
                            S = null
                        }
                    else
                        S = null;
                    x !== null && Vs(h, v, x, S, !1),
                    w !== null && T !== null && Vs(h, T, w, S, !0)
                }
            }
            e: {
                if (v = u ? En(u) : window,
                x = v.nodeName && v.nodeName.toLowerCase(),
                x === "select" || x === "input" && v.type === "file")
                    var C = u1;
                else if (As(v))
                    if (Wc)
                        C = p1;
                    else {
                        C = d1;
                        var k = c1
                    }
                else
                    (x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (C = f1);
                if (C && (C = C(e, u))) {
                    Vc(h, C, n, m);
                    break e
                }
                k && k(e, v, u),
                e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && gl(v, "number", v.value)
            }
            switch (k = u ? En(u) : window,
            e) {
            case "focusin":
                (As(k) || k.contentEditable === "true") && (Cn = k,
                Pl = u,
                mr = null);
                break;
            case "focusout":
                mr = Pl = Cn = null;
                break;
            case "mousedown":
                Tl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Tl = !1,
                Us(h, n, m);
                break;
            case "selectionchange":
                if (v1)
                    break;
            case "keydown":
            case "keyup":
                Us(h, n, m)
            }
            var E;
            if (_a)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                Sn ? Bc(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (Uc && n.locale !== "ko" && (Sn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Sn && (E = Hc()) : (Dt = m,
            Ca = "value"in Dt ? Dt.value : Dt.textContent,
            Sn = !0)),
            k = Ai(u, _),
            0 < k.length && (_ = new Ls(_,e,null,n,m),
            h.push({
                event: _,
                listeners: k
            }),
            E ? _.data = E : (E = bc(n),
            E !== null && (_.data = E)))),
            (E = i1 ? o1(e, n) : l1(e, n)) && (u = Ai(u, "onBeforeInput"),
            0 < u.length && (m = new Ls("onBeforeInput","beforeinput",null,n,m),
            h.push({
                event: m,
                listeners: u
            }),
            m.data = E))
        }
        td(h, t)
    })
}
function Pr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ai(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Sr(e, n),
        o != null && r.unshift(Pr(e, o, i)),
        o = Sr(e, t),
        o != null && r.push(Pr(e, o, i))),
        e = e.return
    }
    return r
}
function wn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Vs(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (s = Sr(n, o),
        s != null && l.unshift(Pr(n, s, a))) : i || (s = Sr(n, o),
        s != null && l.push(Pr(n, s, a)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var x1 = /\r\n?/g
  , k1 = /\u0000|\uFFFD/g;
function Ws(e) {
    return (typeof e == "string" ? e : "" + e).replace(x1, `
`).replace(k1, "")
}
function ni(e, t, n) {
    if (t = Ws(t),
    Ws(e) !== t && n)
        throw Error(j(425))
}
function Ii() {}
var Ol = null
  , Ll = null;
function Ml(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var $l = typeof setTimeout == "function" ? setTimeout : void 0
  , S1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Qs = typeof Promise == "function" ? Promise : void 0
  , C1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qs < "u" ? function(e) {
    return Qs.resolve(null).then(e).catch(j1)
}
: $l;
function j1(e) {
    setTimeout(function() {
        throw e
    })
}
function Go(e, t) {
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
                    Er(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Er(t)
}
function bt(e) {
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
function Ys(e) {
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
var Kn = Math.random().toString(36).slice(2)
  , ht = "__reactFiber$" + Kn
  , Tr = "__reactProps$" + Kn
  , zt = "__reactContainer$" + Kn
  , Rl = "__reactEvents$" + Kn
  , E1 = "__reactListeners$" + Kn
  , _1 = "__reactHandles$" + Kn;
function ln(e) {
    var t = e[ht];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[zt] || n[ht]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Ys(e); e !== null; ) {
                    if (n = e[ht])
                        return n;
                    e = Ys(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Br(e) {
    return e = e[ht] || e[zt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function En(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function so(e) {
    return e[Tr] || null
}
var Al = []
  , _n = -1;
function en(e) {
    return {
        current: e
    }
}
function J(e) {
    0 > _n || (e.current = Al[_n],
    Al[_n] = null,
    _n--)
}
function q(e, t) {
    _n++,
    Al[_n] = e.current,
    e.current = t
}
var Zt = {}
  , Te = en(Zt)
  , Ue = en(!1)
  , dn = Zt;
function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Zt;
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
function Be(e) {
    return e = e.childContextTypes,
    e != null
}
function Di() {
    J(Ue),
    J(Te)
}
function Gs(e, t, n) {
    if (Te.current !== Zt)
        throw Error(j(168));
    q(Te, t),
    q(Ue, n)
}
function rd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(j(108, cp(e) || "Unknown", i));
    return re({}, n, r)
}
function Fi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt,
    dn = Te.current,
    q(Te, e),
    q(Ue, Ue.current),
    !0
}
function Ks(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = rd(e, t, dn),
    r.__reactInternalMemoizedMergedChildContext = e,
    J(Ue),
    J(Te),
    q(Te, e)) : J(Ue),
    q(Ue, n)
}
var kt = null
  , uo = !1
  , Ko = !1;
function id(e) {
    kt === null ? kt = [e] : kt.push(e)
}
function z1(e) {
    uo = !0,
    id(e)
}
function tn() {
    if (!Ko && kt !== null) {
        Ko = !0;
        var e = 0
          , t = G;
        try {
            var n = kt;
            for (G = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            kt = null,
            uo = !1
        } catch (i) {
            throw kt !== null && (kt = kt.slice(e + 1)),
            Pc(wa, tn),
            i
        } finally {
            G = t,
            Ko = !1
        }
    }
    return null
}
var zn = []
  , Nn = 0
  , Hi = null
  , Ui = 0
  , Je = []
  , et = 0
  , fn = null
  , Ct = 1
  , jt = "";
function nn(e, t) {
    zn[Nn++] = Ui,
    zn[Nn++] = Hi,
    Hi = e,
    Ui = t
}
function od(e, t, n) {
    Je[et++] = Ct,
    Je[et++] = jt,
    Je[et++] = fn,
    fn = e;
    var r = Ct;
    e = jt;
    var i = 32 - ct(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - ct(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        Ct = 1 << 32 - ct(t) + i | n << i | r,
        jt = o + e
    } else
        Ct = 1 << o | n << i | r,
        jt = e
}
function Na(e) {
    e.return !== null && (nn(e, 1),
    od(e, 1, 0))
}
function Pa(e) {
    for (; e === Hi; )
        Hi = zn[--Nn],
        zn[Nn] = null,
        Ui = zn[--Nn],
        zn[Nn] = null;
    for (; e === fn; )
        fn = Je[--et],
        Je[et] = null,
        jt = Je[--et],
        Je[et] = null,
        Ct = Je[--et],
        Je[et] = null
}
var Ge = null
  , Qe = null
  , ee = !1
  , ut = null;
function ld(e, t) {
    var n = tt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Xs(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Qe = bt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Qe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = fn !== null ? {
            id: Ct,
            overflow: jt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = tt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ge = e,
        Qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Il(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Dl(e) {
    if (ee) {
        var t = Qe;
        if (t) {
            var n = t;
            if (!Xs(e, t)) {
                if (Il(e))
                    throw Error(j(418));
                t = bt(n.nextSibling);
                var r = Ge;
                t && Xs(e, t) ? ld(r, n) : (e.flags = e.flags & -4097 | 2,
                ee = !1,
                Ge = e)
            }
        } else {
            if (Il(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            ee = !1,
            Ge = e
        }
    }
}
function qs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ge = e
}
function ri(e) {
    if (e !== Ge)
        return !1;
    if (!ee)
        return qs(e),
        ee = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ml(e.type, e.memoizedProps)),
    t && (t = Qe)) {
        if (Il(e))
            throw ad(),
            Error(j(418));
        for (; t; )
            ld(e, t),
            t = bt(t.nextSibling)
    }
    if (qs(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Qe = bt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Qe = null
        }
    } else
        Qe = Ge ? bt(e.stateNode.nextSibling) : null;
    return !0
}
function ad() {
    for (var e = Qe; e; )
        e = bt(e.nextSibling)
}
function Un() {
    Qe = Ge = null,
    ee = !1
}
function Ta(e) {
    ut === null ? ut = [e] : ut.push(e)
}
var N1 = Tt.ReactCurrentBatchConfig;
function at(e, t) {
    if (e && e.defaultProps) {
        t = re({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Bi = en(null)
  , bi = null
  , Pn = null
  , Oa = null;
function La() {
    Oa = Pn = bi = null
}
function Ma(e) {
    var t = Bi.current;
    J(Bi),
    e._currentValue = t
}
function Fl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function In(e, t) {
    bi = e,
    Oa = Pn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0),
    e.firstContext = null)
}
function rt(e) {
    var t = e._currentValue;
    if (Oa !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Pn === null) {
            if (bi === null)
                throw Error(j(308));
            Pn = e,
            bi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Pn = Pn.next = e;
    return t
}
var an = null;
function $a(e) {
    an === null ? an = [e] : an.push(e)
}
function sd(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    $a(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Nt(e, r)
}
function Nt(e, t) {
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
var $t = !1;
function Ra(e) {
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
function ud(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Et(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    b & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Nt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    $a(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Nt(e, n)
}
function xi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xa(e, n)
    }
}
function Zs(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l,
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
function Vi(e, t, n, r) {
    var i = e.updateQueue;
    $t = !1;
    var o = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var s = a
          , u = s.next;
        s.next = null,
        l === null ? o = u : l.next = u,
        l = s;
        var m = e.alternate;
        m !== null && (m = m.updateQueue,
        a = m.lastBaseUpdate,
        a !== l && (a === null ? m.firstBaseUpdate = u : a.next = u,
        m.lastBaseUpdate = s))
    }
    if (o !== null) {
        var h = i.baseState;
        l = 0,
        m = u = s = null,
        a = o;
        do {
            var v = a.lane
              , x = a.eventTime;
            if ((r & v) === v) {
                m !== null && (m = m.next = {
                    eventTime: x,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e
                      , S = a;
                    switch (v = t,
                    x = n,
                    S.tag) {
                    case 1:
                        if (w = S.payload,
                        typeof w == "function") {
                            h = w.call(x, h, v);
                            break e
                        }
                        h = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = S.payload,
                        v = typeof w == "function" ? w.call(x, h, v) : w,
                        v == null)
                            break e;
                        h = re({}, h, v);
                        break e;
                    case 2:
                        $t = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                v = i.effects,
                v === null ? i.effects = [a] : v.push(a))
            } else
                x = {
                    eventTime: x,
                    lane: v,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                m === null ? (u = m = x,
                s = h) : m = m.next = x,
                l |= v;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                v = a,
                a = v.next,
                v.next = null,
                i.lastBaseUpdate = v,
                i.shared.pending = null
            }
        } while (1);
        if (m === null && (s = h),
        i.baseState = s,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = m,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        mn |= l,
        e.lanes = l,
        e.memoizedState = h
    }
}
function Js(e, t, n) {
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
                    throw Error(j(191, i));
                i.call(r)
            }
        }
}
var cd = new sc.Component().refs;
function Hl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : re({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var co = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? yn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = $e()
          , i = Qt(e)
          , o = Et(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Vt(e, o, i),
        t !== null && (dt(t, e, i, r),
        xi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = $e()
          , i = Qt(e)
          , o = Et(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Vt(e, o, i),
        t !== null && (dt(t, e, i, r),
        xi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = $e()
          , r = Qt(e)
          , i = Et(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Vt(e, i, r),
        t !== null && (dt(t, e, r, n),
        xi(t, e, r))
    }
};
function eu(e, t, n, r, i, o, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, o) : !0
}
function dd(e, t, n) {
    var r = !1
      , i = Zt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = rt(o) : (i = Be(t) ? dn : Te.current,
    r = t.contextTypes,
    o = (r = r != null) ? Hn(e, i) : Zt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = co,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function tu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && co.enqueueReplaceState(t, t.state, null)
}
function Ul(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = cd,
    Ra(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = rt(o) : (o = Be(t) ? dn : Te.current,
    i.context = Hn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Hl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && co.enqueueReplaceState(i, i.state, null),
    Vi(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function rr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var a = i.refs;
                a === cd && (a = i.refs = {}),
                l === null ? delete a[o] : a[o] = l
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function ii(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function nu(e) {
    var t = e._init;
    return t(e._payload)
}
function fd(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c],
            f.flags |= 16) : p.push(c)
        }
    }
    function n(f, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(f, c),
            c = c.sibling;
        return null
    }
    function r(f, c) {
        for (f = new Map; c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
            c = c.sibling;
        return f
    }
    function i(f, c) {
        return f = Yt(f, c),
        f.index = 0,
        f.sibling = null,
        f
    }
    function o(f, c, p) {
        return f.index = p,
        e ? (p = f.alternate,
        p !== null ? (p = p.index,
        p < c ? (f.flags |= 2,
        c) : p) : (f.flags |= 2,
        c)) : (f.flags |= 1048576,
        c)
    }
    function l(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function a(f, c, p, y) {
        return c === null || c.tag !== 6 ? (c = nl(p, f.mode, y),
        c.return = f,
        c) : (c = i(c, p),
        c.return = f,
        c)
    }
    function s(f, c, p, y) {
        var C = p.type;
        return C === kn ? m(f, c, p.props.children, y, p.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && nu(C) === c.type) ? (y = i(c, p.props),
        y.ref = rr(f, c, p),
        y.return = f,
        y) : (y = _i(p.type, p.key, p.props, null, f.mode, y),
        y.ref = rr(f, c, p),
        y.return = f,
        y)
    }
    function u(f, c, p, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = rl(p, f.mode, y),
        c.return = f,
        c) : (c = i(c, p.children || []),
        c.return = f,
        c)
    }
    function m(f, c, p, y, C) {
        return c === null || c.tag !== 7 ? (c = cn(p, f.mode, y, C),
        c.return = f,
        c) : (c = i(c, p),
        c.return = f,
        c)
    }
    function h(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = nl("" + c, f.mode, p),
            c.return = f,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Yr:
                return p = _i(c.type, c.key, c.props, null, f.mode, p),
                p.ref = rr(f, null, c),
                p.return = f,
                p;
            case xn:
                return c = rl(c, f.mode, p),
                c.return = f,
                c;
            case Mt:
                var y = c._init;
                return h(f, y(c._payload), p)
            }
            if (ar(c) || Zn(c))
                return c = cn(c, f.mode, p, null),
                c.return = f,
                c;
            ii(f, c)
        }
        return null
    }
    function v(f, c, p, y) {
        var C = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return C !== null ? null : a(f, c, "" + p, y);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Yr:
                return p.key === C ? s(f, c, p, y) : null;
            case xn:
                return p.key === C ? u(f, c, p, y) : null;
            case Mt:
                return C = p._init,
                v(f, c, C(p._payload), y)
            }
            if (ar(p) || Zn(p))
                return C !== null ? null : m(f, c, p, y, null);
            ii(f, p)
        }
        return null
    }
    function x(f, c, p, y, C) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return f = f.get(p) || null,
            a(c, f, "" + y, C);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Yr:
                return f = f.get(y.key === null ? p : y.key) || null,
                s(c, f, y, C);
            case xn:
                return f = f.get(y.key === null ? p : y.key) || null,
                u(c, f, y, C);
            case Mt:
                var k = y._init;
                return x(f, c, p, k(y._payload), C)
            }
            if (ar(y) || Zn(y))
                return f = f.get(p) || null,
                m(c, f, y, C, null);
            ii(c, y)
        }
        return null
    }
    function w(f, c, p, y) {
        for (var C = null, k = null, E = c, _ = c = 0, H = null; E !== null && _ < p.length; _++) {
            E.index > _ ? (H = E,
            E = null) : H = E.sibling;
            var I = v(f, E, p[_], y);
            if (I === null) {
                E === null && (E = H);
                break
            }
            e && E && I.alternate === null && t(f, E),
            c = o(I, c, _),
            k === null ? C = I : k.sibling = I,
            k = I,
            E = H
        }
        if (_ === p.length)
            return n(f, E),
            ee && nn(f, _),
            C;
        if (E === null) {
            for (; _ < p.length; _++)
                E = h(f, p[_], y),
                E !== null && (c = o(E, c, _),
                k === null ? C = E : k.sibling = E,
                k = E);
            return ee && nn(f, _),
            C
        }
        for (E = r(f, E); _ < p.length; _++)
            H = x(E, f, _, p[_], y),
            H !== null && (e && H.alternate !== null && E.delete(H.key === null ? _ : H.key),
            c = o(H, c, _),
            k === null ? C = H : k.sibling = H,
            k = H);
        return e && E.forEach(function(pe) {
            return t(f, pe)
        }),
        ee && nn(f, _),
        C
    }
    function S(f, c, p, y) {
        var C = Zn(p);
        if (typeof C != "function")
            throw Error(j(150));
        if (p = C.call(p),
        p == null)
            throw Error(j(151));
        for (var k = C = null, E = c, _ = c = 0, H = null, I = p.next(); E !== null && !I.done; _++,
        I = p.next()) {
            E.index > _ ? (H = E,
            E = null) : H = E.sibling;
            var pe = v(f, E, I.value, y);
            if (pe === null) {
                E === null && (E = H);
                break
            }
            e && E && pe.alternate === null && t(f, E),
            c = o(pe, c, _),
            k === null ? C = pe : k.sibling = pe,
            k = pe,
            E = H
        }
        if (I.done)
            return n(f, E),
            ee && nn(f, _),
            C;
        if (E === null) {
            for (; !I.done; _++,
            I = p.next())
                I = h(f, I.value, y),
                I !== null && (c = o(I, c, _),
                k === null ? C = I : k.sibling = I,
                k = I);
            return ee && nn(f, _),
            C
        }
        for (E = r(f, E); !I.done; _++,
        I = p.next())
            I = x(E, f, _, I.value, y),
            I !== null && (e && I.alternate !== null && E.delete(I.key === null ? _ : I.key),
            c = o(I, c, _),
            k === null ? C = I : k.sibling = I,
            k = I);
        return e && E.forEach(function(ce) {
            return t(f, ce)
        }),
        ee && nn(f, _),
        C
    }
    function T(f, c, p, y) {
        if (typeof p == "object" && p !== null && p.type === kn && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Yr:
                e: {
                    for (var C = p.key, k = c; k !== null; ) {
                        if (k.key === C) {
                            if (C = p.type,
                            C === kn) {
                                if (k.tag === 7) {
                                    n(f, k.sibling),
                                    c = i(k, p.props.children),
                                    c.return = f,
                                    f = c;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && nu(C) === k.type) {
                                n(f, k.sibling),
                                c = i(k, p.props),
                                c.ref = rr(f, k, p),
                                c.return = f,
                                f = c;
                                break e
                            }
                            n(f, k);
                            break
                        } else
                            t(f, k);
                        k = k.sibling
                    }
                    p.type === kn ? (c = cn(p.props.children, f.mode, y, p.key),
                    c.return = f,
                    f = c) : (y = _i(p.type, p.key, p.props, null, f.mode, y),
                    y.ref = rr(f, c, p),
                    y.return = f,
                    f = y)
                }
                return l(f);
            case xn:
                e: {
                    for (k = p.key; c !== null; ) {
                        if (c.key === k)
                            if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                n(f, c.sibling),
                                c = i(c, p.children || []),
                                c.return = f,
                                f = c;
                                break e
                            } else {
                                n(f, c);
                                break
                            }
                        else
                            t(f, c);
                        c = c.sibling
                    }
                    c = rl(p, f.mode, y),
                    c.return = f,
                    f = c
                }
                return l(f);
            case Mt:
                return k = p._init,
                T(f, c, k(p._payload), y)
            }
            if (ar(p))
                return w(f, c, p, y);
            if (Zn(p))
                return S(f, c, p, y);
            ii(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        c !== null && c.tag === 6 ? (n(f, c.sibling),
        c = i(c, p),
        c.return = f,
        f = c) : (n(f, c),
        c = nl(p, f.mode, y),
        c.return = f,
        f = c),
        l(f)) : n(f, c)
    }
    return T
}
var Bn = fd(!0)
  , pd = fd(!1)
  , br = {}
  , yt = en(br)
  , Or = en(br)
  , Lr = en(br);
function sn(e) {
    if (e === br)
        throw Error(j(174));
    return e
}
function Aa(e, t) {
    switch (q(Lr, t),
    q(Or, e),
    q(yt, br),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = wl(t, e)
    }
    J(yt),
    q(yt, t)
}
function bn() {
    J(yt),
    J(Or),
    J(Lr)
}
function md(e) {
    sn(Lr.current);
    var t = sn(yt.current)
      , n = wl(t, e.type);
    t !== n && (q(Or, e),
    q(yt, n))
}
function Ia(e) {
    Or.current === e && (J(yt),
    J(Or))
}
var te = en(0);
function Wi(e) {
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
var Xo = [];
function Da() {
    for (var e = 0; e < Xo.length; e++)
        Xo[e]._workInProgressVersionPrimary = null;
    Xo.length = 0
}
var ki = Tt.ReactCurrentDispatcher
  , qo = Tt.ReactCurrentBatchConfig
  , pn = 0
  , ne = null
  , de = null
  , me = null
  , Qi = !1
  , hr = !1
  , Mr = 0
  , P1 = 0;
function ze() {
    throw Error(j(321))
}
function Fa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ft(e[n], t[n]))
            return !1;
    return !0
}
function Ha(e, t, n, r, i, o) {
    if (pn = o,
    ne = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ki.current = e === null || e.memoizedState === null ? M1 : $1,
    e = n(r, i),
    hr) {
        o = 0;
        do {
            if (hr = !1,
            Mr = 0,
            25 <= o)
                throw Error(j(301));
            o += 1,
            me = de = null,
            t.updateQueue = null,
            ki.current = R1,
            e = n(r, i)
        } while (hr)
    }
    if (ki.current = Yi,
    t = de !== null && de.next !== null,
    pn = 0,
    me = de = ne = null,
    Qi = !1,
    t)
        throw Error(j(300));
    return e
}
function Ua() {
    var e = Mr !== 0;
    return Mr = 0,
    e
}
function mt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return me === null ? ne.memoizedState = me = e : me = me.next = e,
    me
}
function it() {
    if (de === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = de.next;
    var t = me === null ? ne.memoizedState : me.next;
    if (t !== null)
        me = t,
        de = e;
    else {
        if (e === null)
            throw Error(j(310));
        de = e,
        e = {
            memoizedState: de.memoizedState,
            baseState: de.baseState,
            baseQueue: de.baseQueue,
            queue: de.queue,
            next: null
        },
        me === null ? ne.memoizedState = me = e : me = me.next = e
    }
    return me
}
function $r(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Zo(e) {
    var t = it()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = de
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next,
            o.next = l
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = l = null
          , s = null
          , u = o;
        do {
            var m = u.lane;
            if ((pn & m) === m)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var h = {
                    lane: m,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = h,
                l = r) : s = s.next = h,
                ne.lanes |= m,
                mn |= m
            }
            u = u.next
        } while (u !== null && u !== o);
        s === null ? l = r : s.next = a,
        ft(r, t.memoizedState) || (Fe = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            ne.lanes |= o,
            mn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Jo(e) {
    var t = it()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            o = e(o, l.action),
            l = l.next;
        while (l !== i);
        ft(o, t.memoizedState) || (Fe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function hd() {}
function vd(e, t) {
    var n = ne
      , r = it()
      , i = t()
      , o = !ft(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Fe = !0),
    r = r.queue,
    Ba(wd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Rr(9, yd.bind(null, n, r, i, t), void 0, null),
        he === null)
            throw Error(j(349));
        pn & 30 || gd(n, t, i)
    }
    return i
}
function gd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ne.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function yd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    xd(t) && kd(e)
}
function wd(e, t, n) {
    return n(function() {
        xd(t) && kd(e)
    })
}
function xd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ft(e, n)
    } catch {
        return !0
    }
}
function kd(e) {
    var t = Nt(e, 1);
    t !== null && dt(t, e, 1, -1)
}
function ru(e) {
    var t = mt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $r,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = L1.bind(null, ne, e),
    [t.memoizedState, e]
}
function Rr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ne.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Sd() {
    return it().memoizedState
}
function Si(e, t, n, r) {
    var i = mt();
    ne.flags |= e,
    i.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r)
}
function fo(e, t, n, r) {
    var i = it();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (de !== null) {
        var l = de.memoizedState;
        if (o = l.destroy,
        r !== null && Fa(r, l.deps)) {
            i.memoizedState = Rr(t, n, o, r);
            return
        }
    }
    ne.flags |= e,
    i.memoizedState = Rr(1 | t, n, o, r)
}
function iu(e, t) {
    return Si(8390656, 8, e, t)
}
function Ba(e, t) {
    return fo(2048, 8, e, t)
}
function Cd(e, t) {
    return fo(4, 2, e, t)
}
function jd(e, t) {
    return fo(4, 4, e, t)
}
function Ed(e, t) {
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
function _d(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    fo(4, 4, Ed.bind(null, t, e), n)
}
function ba() {}
function zd(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Nd(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Pd(e, t, n) {
    return pn & 21 ? (ft(n, t) || (n = Lc(),
    ne.lanes |= n,
    mn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Fe = !0),
    e.memoizedState = n)
}
function T1(e, t) {
    var n = G;
    G = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = qo.transition;
    qo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        G = n,
        qo.transition = r
    }
}
function Td() {
    return it().memoizedState
}
function O1(e, t, n) {
    var r = Qt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Od(e))
        Ld(t, n);
    else if (n = sd(e, t, n, r),
    n !== null) {
        var i = $e();
        dt(n, e, r, i),
        Md(n, t, r)
    }
}
function L1(e, t, n) {
    var r = Qt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Od(e))
        Ld(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var l = t.lastRenderedState
                  , a = o(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                ft(a, l)) {
                    var s = t.interleaved;
                    s === null ? (i.next = i,
                    $a(t)) : (i.next = s.next,
                    s.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = sd(e, t, i, r),
        n !== null && (i = $e(),
        dt(n, e, r, i),
        Md(n, t, r))
    }
}
function Od(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne
}
function Ld(e, t) {
    hr = Qi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Md(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xa(e, n)
    }
}
var Yi = {
    readContext: rt,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1
}
  , M1 = {
    readContext: rt,
    useCallback: function(e, t) {
        return mt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: rt,
    useEffect: iu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Si(4194308, 4, Ed.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Si(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Si(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = mt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = mt();
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
        e = e.dispatch = O1.bind(null, ne, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = mt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ru,
    useDebugValue: ba,
    useDeferredValue: function(e) {
        return mt().memoizedState = e
    },
    useTransition: function() {
        var e = ru(!1)
          , t = e[0];
        return e = T1.bind(null, e[1]),
        mt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ne
          , i = mt();
        if (ee) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            he === null)
                throw Error(j(349));
            pn & 30 || gd(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        iu(wd.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Rr(9, yd.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = mt()
          , t = he.identifierPrefix;
        if (ee) {
            var n = jt
              , r = Ct;
            n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Mr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = P1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , $1 = {
    readContext: rt,
    useCallback: zd,
    useContext: rt,
    useEffect: Ba,
    useImperativeHandle: _d,
    useInsertionEffect: Cd,
    useLayoutEffect: jd,
    useMemo: Nd,
    useReducer: Zo,
    useRef: Sd,
    useState: function() {
        return Zo($r)
    },
    useDebugValue: ba,
    useDeferredValue: function(e) {
        var t = it();
        return Pd(t, de.memoizedState, e)
    },
    useTransition: function() {
        var e = Zo($r)[0]
          , t = it().memoizedState;
        return [e, t]
    },
    useMutableSource: hd,
    useSyncExternalStore: vd,
    useId: Td,
    unstable_isNewReconciler: !1
}
  , R1 = {
    readContext: rt,
    useCallback: zd,
    useContext: rt,
    useEffect: Ba,
    useImperativeHandle: _d,
    useInsertionEffect: Cd,
    useLayoutEffect: jd,
    useMemo: Nd,
    useReducer: Jo,
    useRef: Sd,
    useState: function() {
        return Jo($r)
    },
    useDebugValue: ba,
    useDeferredValue: function(e) {
        var t = it();
        return de === null ? t.memoizedState = e : Pd(t, de.memoizedState, e)
    },
    useTransition: function() {
        var e = Jo($r)[0]
          , t = it().memoizedState;
        return [e, t]
    },
    useMutableSource: hd,
    useSyncExternalStore: vd,
    useId: Td,
    unstable_isNewReconciler: !1
};
function Vn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += up(r),
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
function el(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Bl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var A1 = typeof WeakMap == "function" ? WeakMap : Map;
function $d(e, t, n) {
    n = Et(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ki || (Ki = !0,
        Zl = r),
        Bl(e, t)
    }
    ,
    n
}
function Rd(e, t, n) {
    n = Et(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Bl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Bl(e, t),
        typeof r != "function" && (Wt === null ? Wt = new Set([this]) : Wt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function ou(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new A1;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = X1.bind(null, e, t, n),
    t.then(e, e))
}
function lu(e) {
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
function au(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1),
    t.tag = 2,
    Vt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var I1 = Tt.ReactCurrentOwner
  , Fe = !1;
function Me(e, t, n, r) {
    t.child = e === null ? pd(t, null, n, r) : Bn(t, e.child, n, r)
}
function su(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return In(t, i),
    r = Ha(e, t, n, r, o, i),
    n = Ua(),
    e !== null && !Fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Pt(e, t, i)) : (ee && n && Na(t),
    t.flags |= 1,
    Me(e, t, r, i),
    t.child)
}
function uu(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !qa(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Ad(e, t, o, r, i)) : (e = _i(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : zr,
        n(l, r) && e.ref === t.ref)
            return Pt(e, t, i)
    }
    return t.flags |= 1,
    e = Yt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Ad(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (zr(o, r) && e.ref === t.ref)
            if (Fe = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Fe = !0);
            else
                return t.lanes = e.lanes,
                Pt(e, t, i)
    }
    return bl(e, t, n, r, i)
}
function Id(e, t, n) {
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
            q(On, We),
            We |= n;
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
                q(On, We),
                We |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            q(On, We),
            We |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        q(On, We),
        We |= r;
    return Me(e, t, i, n),
    t.child
}
function Dd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function bl(e, t, n, r, i) {
    var o = Be(n) ? dn : Te.current;
    return o = Hn(t, o),
    In(t, i),
    n = Ha(e, t, n, r, o, i),
    r = Ua(),
    e !== null && !Fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Pt(e, t, i)) : (ee && r && Na(t),
    t.flags |= 1,
    Me(e, t, n, i),
    t.child)
}
function cu(e, t, n, r, i) {
    if (Be(n)) {
        var o = !0;
        Fi(t)
    } else
        o = !1;
    if (In(t, i),
    t.stateNode === null)
        Ci(e, t),
        dd(t, n, r),
        Ul(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , a = t.memoizedProps;
        l.props = a;
        var s = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = rt(u) : (u = Be(n) ? dn : Te.current,
        u = Hn(t, u));
        var m = n.getDerivedStateFromProps
          , h = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && tu(t, l, r, u),
        $t = !1;
        var v = t.memoizedState;
        l.state = v,
        Vi(t, r, l, i),
        s = t.memoizedState,
        a !== r || v !== s || Ue.current || $t ? (typeof m == "function" && (Hl(t, n, m, r),
        s = t.memoizedState),
        (a = $t || eu(t, n, a, r, v, s, u)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        l.props = r,
        l.state = s,
        l.context = u,
        r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        ud(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : at(t.type, a),
        l.props = u,
        h = t.pendingProps,
        v = l.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = rt(s) : (s = Be(n) ? dn : Te.current,
        s = Hn(t, s));
        var x = n.getDerivedStateFromProps;
        (m = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== h || v !== s) && tu(t, l, r, s),
        $t = !1,
        v = t.memoizedState,
        l.state = v,
        Vi(t, r, l, i);
        var w = t.memoizedState;
        a !== h || v !== w || Ue.current || $t ? (typeof x == "function" && (Hl(t, n, x, r),
        w = t.memoizedState),
        (u = $t || eu(t, n, u, r, v, w, s) || !1) ? (m || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, s),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, s)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        l.props = r,
        l.state = w,
        l.context = s,
        r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Vl(e, t, n, r, o, i)
}
function Vl(e, t, n, r, i, o) {
    Dd(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && Ks(t, n, !1),
        Pt(e, t, o);
    r = t.stateNode,
    I1.current = t;
    var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Bn(t, e.child, null, o),
    t.child = Bn(t, null, a, o)) : Me(e, t, a, o),
    t.memoizedState = r.state,
    i && Ks(t, n, !0),
    t.child
}
function Fd(e) {
    var t = e.stateNode;
    t.pendingContext ? Gs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gs(e, t.context, !1),
    Aa(e, t.containerInfo)
}
function du(e, t, n, r, i) {
    return Un(),
    Ta(i),
    t.flags |= 256,
    Me(e, t, n, r),
    t.child
}
var Wl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ql(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Hd(e, t, n) {
    var r = t.pendingProps, i = te.current, o = !1, l = (t.flags & 128) !== 0, a;
    if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    q(te, i & 1),
    e === null)
        return Dl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = l) : o = ho(l, r, 0, null),
        e = cn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Ql(n),
        t.memoizedState = Wl,
        e) : Va(t, l));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return D1(e, t, l, r, a, i, n);
    if (o) {
        o = r.fallback,
        l = t.mode,
        i = e.child,
        a = i.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = Yt(i, s),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = Yt(a, o) : (o = cn(o, l, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        l = e.child.memoizedState,
        l = l === null ? Ql(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        o.memoizedState = l,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Wl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Yt(o, {
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
function Va(e, t) {
    return t = ho({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function oi(e, t, n, r) {
    return r !== null && Ta(r),
    Bn(t, e.child, null, n),
    e = Va(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function D1(e, t, n, r, i, o, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = el(Error(j(422))),
        oi(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = ho({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = cn(o, i, l, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Bn(t, e.child, null, l),
        t.child.memoizedState = Ql(l),
        t.memoizedState = Wl,
        o);
    if (!(t.mode & 1))
        return oi(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(j(419)),
        r = el(o, r, void 0),
        oi(e, t, l, r)
    }
    if (a = (l & e.childLanes) !== 0,
    Fe || a) {
        if (r = he,
        r !== null) {
            switch (l & -l) {
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
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Nt(e, i),
            dt(r, e, i, -1))
        }
        return Xa(),
        r = el(Error(j(421))),
        oi(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = q1.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Qe = bt(i.nextSibling),
    Ge = t,
    ee = !0,
    ut = null,
    e !== null && (Je[et++] = Ct,
    Je[et++] = jt,
    Je[et++] = fn,
    Ct = e.id,
    jt = e.overflow,
    fn = t),
    t = Va(t, r.children),
    t.flags |= 4096,
    t)
}
function fu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Fl(e.return, t, n)
}
function tl(e, t, n, r, i) {
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
function Ud(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Me(e, t, r.children, n),
    r = te.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && fu(e, n, t);
                else if (e.tag === 19)
                    fu(e, n, t);
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
    if (q(te, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Wi(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            tl(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Wi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            tl(t, !0, n, null, o);
            break;
        case "together":
            tl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ci(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    mn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Yt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Yt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function F1(e, t, n) {
    switch (t.tag) {
    case 3:
        Fd(t),
        Un();
        break;
    case 5:
        md(t);
        break;
    case 1:
        Be(t.type) && Fi(t);
        break;
    case 4:
        Aa(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        q(Bi, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (q(te, te.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Hd(e, t, n) : (q(te, te.current & 1),
            e = Pt(e, t, n),
            e !== null ? e.sibling : null);
        q(te, te.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ud(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        q(te, te.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Id(e, t, n)
    }
    return Pt(e, t, n)
}
var Bd, Yl, bd, Vd;
Bd = function(e, t) {
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
Yl = function() {}
;
bd = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        sn(yt.current);
        var o = null;
        switch (n) {
        case "input":
            i = hl(e, i),
            r = hl(e, r),
            o = [];
            break;
        case "select":
            i = re({}, i, {
                value: void 0
            }),
            r = re({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = yl(e, i),
            r = yl(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ii)
        }
        xl(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (l in a)
                        a.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (l in a)
                            !a.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in s)
                            s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}),
                            n[l] = s[l])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (o = o || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xr.hasOwnProperty(u) ? (s != null && u === "onScroll" && Z("scroll", e),
                    o || a === s || (o = [])) : (o = o || []).push(u, s))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Vd = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ir(e, t) {
    if (!ee)
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
function Ne(e) {
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
function H1(e, t, n) {
    var r = t.pendingProps;
    switch (Pa(t),
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
        return Ne(t),
        null;
    case 1:
        return Be(t.type) && Di(),
        Ne(t),
        null;
    case 3:
        return r = t.stateNode,
        bn(),
        J(Ue),
        J(Te),
        Da(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ri(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ut !== null && (ta(ut),
        ut = null))),
        Yl(e, t),
        Ne(t),
        null;
    case 5:
        Ia(t);
        var i = sn(Lr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            bd(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Ne(t),
                null
            }
            if (e = sn(yt.current),
            ri(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[ht] = t,
                r[Tr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Z("cancel", r),
                    Z("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Z("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < ur.length; i++)
                        Z(ur[i], r);
                    break;
                case "source":
                    Z("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Z("error", r),
                    Z("load", r);
                    break;
                case "details":
                    Z("toggle", r);
                    break;
                case "input":
                    ks(r, o),
                    Z("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    Z("invalid", r);
                    break;
                case "textarea":
                    Cs(r, o),
                    Z("invalid", r)
                }
                xl(n, o),
                i = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var a = o[l];
                        l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ni(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ni(r.textContent, a, e),
                        i = ["children", "" + a]) : xr.hasOwnProperty(l) && a != null && l === "onScroll" && Z("scroll", r)
                    }
                switch (n) {
                case "input":
                    Gr(r),
                    Ss(r, o, !0);
                    break;
                case "textarea":
                    Gr(r),
                    js(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Ii)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = gc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[ht] = t,
                e[Tr] = r,
                Bd(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = kl(n, r),
                    n) {
                    case "dialog":
                        Z("cancel", e),
                        Z("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Z("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < ur.length; i++)
                            Z(ur[i], e);
                        i = r;
                        break;
                    case "source":
                        Z("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Z("error", e),
                        Z("load", e),
                        i = r;
                        break;
                    case "details":
                        Z("toggle", e),
                        i = r;
                        break;
                    case "input":
                        ks(e, r),
                        i = hl(e, r),
                        Z("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = re({}, r, {
                            value: void 0
                        }),
                        Z("invalid", e);
                        break;
                    case "textarea":
                        Cs(e, r),
                        i = yl(e, r),
                        Z("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    xl(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var s = a[o];
                            o === "style" ? xc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && yc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && kr(e, s) : typeof s == "number" && kr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (xr.hasOwnProperty(o) ? s != null && o === "onScroll" && Z("scroll", e) : s != null && ma(e, o, s, l))
                        }
                    switch (n) {
                    case "input":
                        Gr(e),
                        Ss(e, r, !1);
                        break;
                    case "textarea":
                        Gr(e),
                        js(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + qt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Mn(e, !!r.multiple, o, !1) : r.defaultValue != null && Mn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Ii)
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
        return Ne(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Vd(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = sn(Lr.current),
            sn(yt.current),
            ri(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ht] = t,
                (o = r.nodeValue !== n) && (e = Ge,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ni(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ni(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ht] = t,
                t.stateNode = r
        }
        return Ne(t),
        null;
    case 13:
        if (J(te),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ee && Qe !== null && t.mode & 1 && !(t.flags & 128))
                ad(),
                Un(),
                t.flags |= 98560,
                o = !1;
            else if (o = ri(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(j(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(j(317));
                    o[ht] = t
                } else
                    Un(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ne(t),
                o = !1
            } else
                ut !== null && (ta(ut),
                ut = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || te.current & 1 ? fe === 0 && (fe = 3) : Xa())),
        t.updateQueue !== null && (t.flags |= 4),
        Ne(t),
        null);
    case 4:
        return bn(),
        Yl(e, t),
        e === null && Nr(t.stateNode.containerInfo),
        Ne(t),
        null;
    case 10:
        return Ma(t.type._context),
        Ne(t),
        null;
    case 17:
        return Be(t.type) && Di(),
        Ne(t),
        null;
    case 19:
        if (J(te),
        o = t.memoizedState,
        o === null)
            return Ne(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = o.rendering,
        l === null)
            if (r)
                ir(o, !1);
            else {
                if (fe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = Wi(e),
                        l !== null) {
                            for (t.flags |= 128,
                            ir(o, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                l = o.alternate,
                                l === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                e = l.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return q(te, te.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && se() > Wn && (t.flags |= 128,
                r = !0,
                ir(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Wi(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ir(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !l.alternate && !ee)
                        return Ne(t),
                        null
                } else
                    2 * se() - o.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ir(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = o.last,
            n !== null ? n.sibling = l : t.child = l,
            o.last = l)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = se(),
        t.sibling = null,
        n = te.current,
        q(te, r ? n & 1 | 2 : n & 1),
        t) : (Ne(t),
        null);
    case 22:
    case 23:
        return Ka(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? We & 1073741824 && (Ne(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function U1(e, t) {
    switch (Pa(t),
    t.tag) {
    case 1:
        return Be(t.type) && Di(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return bn(),
        J(Ue),
        J(Te),
        Da(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ia(t),
        null;
    case 13:
        if (J(te),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Un()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return J(te),
        null;
    case 4:
        return bn(),
        null;
    case 10:
        return Ma(t.type._context),
        null;
    case 22:
    case 23:
        return Ka(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var li = !1
  , Pe = !1
  , B1 = typeof WeakSet == "function" ? WeakSet : Set
  , M = null;
function Tn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                le(e, t, r)
            }
        else
            n.current = null
}
function Gl(e, t, n) {
    try {
        n()
    } catch (r) {
        le(e, t, r)
    }
}
var pu = !1;
function b1(e, t) {
    if (Ol = $i,
    e = Gc(),
    za(e)) {
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
                    var l = 0
                      , a = -1
                      , s = -1
                      , u = 0
                      , m = 0
                      , h = e
                      , v = null;
                    t: for (; ; ) {
                        for (var x; h !== n || i !== 0 && h.nodeType !== 3 || (a = l + i),
                        h !== o || r !== 0 && h.nodeType !== 3 || (s = l + r),
                        h.nodeType === 3 && (l += h.nodeValue.length),
                        (x = h.firstChild) !== null; )
                            v = h,
                            h = x;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (v === n && ++u === i && (a = l),
                            v === o && ++m === r && (s = l),
                            (x = h.nextSibling) !== null)
                                break;
                            h = v,
                            v = h.parentNode
                        }
                        h = x
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
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
    for (Ll = {
        focusedElem: e,
        selectionRange: n
    },
    $i = !1,
    M = t; M !== null; )
        if (t = M,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            M = e;
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var S = w.memoizedProps
                                  , T = w.memoizedState
                                  , f = t.stateNode
                                  , c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : at(t.type, S), T);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (y) {
                    le(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    M = e;
                    break
                }
                M = t.return
            }
    return w = pu,
    pu = !1,
    w
}
function vr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Gl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function po(e, t) {
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
function Kl(e) {
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
function Wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Wd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ht],
    delete t[Tr],
    delete t[Rl],
    delete t[E1],
    delete t[_1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Qd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function mu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Qd(e.return))
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
function Xl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ii));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Xl(e, t, n),
        e = e.sibling; e !== null; )
            Xl(e, t, n),
            e = e.sibling
}
function ql(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ql(e, t, n),
        e = e.sibling; e !== null; )
            ql(e, t, n),
            e = e.sibling
}
var ke = null
  , st = !1;
function Lt(e, t, n) {
    for (n = n.child; n !== null; )
        Yd(e, t, n),
        n = n.sibling
}
function Yd(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
        try {
            gt.onCommitFiberUnmount(io, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Pe || Tn(n, t);
    case 6:
        var r = ke
          , i = st;
        ke = null,
        Lt(e, t, n),
        ke = r,
        st = i,
        ke !== null && (st ? (e = ke,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
        break;
    case 18:
        ke !== null && (st ? (e = ke,
        n = n.stateNode,
        e.nodeType === 8 ? Go(e.parentNode, n) : e.nodeType === 1 && Go(e, n),
        Er(e)) : Go(ke, n.stateNode));
        break;
    case 4:
        r = ke,
        i = st,
        ke = n.stateNode.containerInfo,
        st = !0,
        Lt(e, t, n),
        ke = r,
        st = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , l = o.destroy;
                o = o.tag,
                l !== void 0 && (o & 2 || o & 4) && Gl(n, t, l),
                i = i.next
            } while (i !== r)
        }
        Lt(e, t, n);
        break;
    case 1:
        if (!Pe && (Tn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                le(n, t, a)
            }
        Lt(e, t, n);
        break;
    case 21:
        Lt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null,
        Lt(e, t, n),
        Pe = r) : Lt(e, t, n);
        break;
    default:
        Lt(e, t, n)
    }
}
function hu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new B1),
        t.forEach(function(r) {
            var i = Z1.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function lt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , l = t
                  , a = l;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ke = a.stateNode,
                        st = !1;
                        break e;
                    case 3:
                        ke = a.stateNode.containerInfo,
                        st = !0;
                        break e;
                    case 4:
                        ke = a.stateNode.containerInfo,
                        st = !0;
                        break e
                    }
                    a = a.return
                }
                if (ke === null)
                    throw Error(j(160));
                Yd(o, l, i),
                ke = null,
                st = !1;
                var s = i.alternate;
                s !== null && (s.return = null),
                i.return = null
            } catch (u) {
                le(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Gd(t, e),
            t = t.sibling
}
function Gd(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (lt(t, e),
        pt(e),
        r & 4) {
            try {
                vr(3, e, e.return),
                po(3, e)
            } catch (S) {
                le(e, e.return, S)
            }
            try {
                vr(5, e, e.return)
            } catch (S) {
                le(e, e.return, S)
            }
        }
        break;
    case 1:
        lt(t, e),
        pt(e),
        r & 512 && n !== null && Tn(n, n.return);
        break;
    case 5:
        if (lt(t, e),
        pt(e),
        r & 512 && n !== null && Tn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                kr(i, "")
            } catch (S) {
                le(e, e.return, S)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , l = n !== null ? n.memoizedProps : o
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && hc(i, o),
                    kl(a, l);
                    var u = kl(a, o);
                    for (l = 0; l < s.length; l += 2) {
                        var m = s[l]
                          , h = s[l + 1];
                        m === "style" ? xc(i, h) : m === "dangerouslySetInnerHTML" ? yc(i, h) : m === "children" ? kr(i, h) : ma(i, m, h, u)
                    }
                    switch (a) {
                    case "input":
                        vl(i, o);
                        break;
                    case "textarea":
                        vc(i, o);
                        break;
                    case "select":
                        var v = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var x = o.value;
                        x != null ? Mn(i, !!o.multiple, x, !1) : v !== !!o.multiple && (o.defaultValue != null ? Mn(i, !!o.multiple, o.defaultValue, !0) : Mn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Tr] = o
                } catch (S) {
                    le(e, e.return, S)
                }
        }
        break;
    case 6:
        if (lt(t, e),
        pt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (S) {
                le(e, e.return, S)
            }
        }
        break;
    case 3:
        if (lt(t, e),
        pt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Er(t.containerInfo)
            } catch (S) {
                le(e, e.return, S)
            }
        break;
    case 4:
        lt(t, e),
        pt(e);
        break;
    case 13:
        lt(t, e),
        pt(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ya = se())),
        r & 4 && hu(e);
        break;
    case 22:
        if (m = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Pe = (u = Pe) || m,
        lt(t, e),
        Pe = u) : lt(t, e),
        pt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !m && e.mode & 1)
                for (M = e,
                m = e.child; m !== null; ) {
                    for (h = M = m; M !== null; ) {
                        switch (v = M,
                        x = v.child,
                        v.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            vr(4, v, v.return);
                            break;
                        case 1:
                            Tn(v, v.return);
                            var w = v.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = v,
                                n = v.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (S) {
                                    le(r, n, S)
                                }
                            }
                            break;
                        case 5:
                            Tn(v, v.return);
                            break;
                        case 22:
                            if (v.memoizedState !== null) {
                                gu(h);
                                continue
                            }
                        }
                        x !== null ? (x.return = v,
                        M = x) : gu(h)
                    }
                    m = m.sibling
                }
            e: for (m = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (m === null) {
                        m = h;
                        try {
                            i = h.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode,
                            s = h.memoizedProps.style,
                            l = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = wc("display", l))
                        } catch (S) {
                            le(e, e.return, S)
                        }
                    }
                } else if (h.tag === 6) {
                    if (m === null)
                        try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (S) {
                            le(e, e.return, S)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    m === h && (m = null),
                    h = h.return
                }
                m === h && (m = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        lt(t, e),
        pt(e),
        r & 4 && hu(e);
        break;
    case 21:
        break;
    default:
        lt(t, e),
        pt(e)
    }
}
function pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Qd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (kr(i, ""),
                r.flags &= -33);
                var o = mu(e);
                ql(e, o, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , a = mu(e);
                Xl(e, a, l);
                break;
            default:
                throw Error(j(161))
            }
        } catch (s) {
            le(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function V1(e, t, n) {
    M = e,
    Kd(e)
}
function Kd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var i = M
          , o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || li;
            if (!l) {
                var a = i.alternate
                  , s = a !== null && a.memoizedState !== null || Pe;
                a = li;
                var u = Pe;
                if (li = l,
                (Pe = s) && !u)
                    for (M = i; M !== null; )
                        l = M,
                        s = l.child,
                        l.tag === 22 && l.memoizedState !== null ? yu(i) : s !== null ? (s.return = l,
                        M = s) : yu(i);
                for (; o !== null; )
                    M = o,
                    Kd(o),
                    o = o.sibling;
                M = i,
                li = a,
                Pe = u
            }
            vu(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            M = o) : vu(e)
    }
}
function vu(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pe || po(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Js(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Js(t, l, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var m = u.memoizedState;
                                if (m !== null) {
                                    var h = m.dehydrated;
                                    h !== null && Er(h)
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
                        throw Error(j(163))
                    }
                Pe || t.flags & 512 && Kl(t)
            } catch (v) {
                le(t, t.return, v)
            }
        }
        if (t === e) {
            M = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function gu(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function yu(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    po(4, t)
                } catch (s) {
                    le(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        le(t, i, s)
                    }
                }
                var o = t.return;
                try {
                    Kl(t)
                } catch (s) {
                    le(t, o, s)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Kl(t)
                } catch (s) {
                    le(t, l, s)
                }
            }
        } catch (s) {
            le(t, t.return, s)
        }
        if (t === e) {
            M = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            M = a;
            break
        }
        M = t.return
    }
}
var W1 = Math.ceil
  , Gi = Tt.ReactCurrentDispatcher
  , Wa = Tt.ReactCurrentOwner
  , nt = Tt.ReactCurrentBatchConfig
  , b = 0
  , he = null
  , ue = null
  , Se = 0
  , We = 0
  , On = en(0)
  , fe = 0
  , Ar = null
  , mn = 0
  , mo = 0
  , Qa = 0
  , gr = null
  , De = null
  , Ya = 0
  , Wn = 1 / 0
  , xt = null
  , Ki = !1
  , Zl = null
  , Wt = null
  , ai = !1
  , Ft = null
  , Xi = 0
  , yr = 0
  , Jl = null
  , ji = -1
  , Ei = 0;
function $e() {
    return b & 6 ? se() : ji !== -1 ? ji : ji = se()
}
function Qt(e) {
    return e.mode & 1 ? b & 2 && Se !== 0 ? Se & -Se : N1.transition !== null ? (Ei === 0 && (Ei = Lc()),
    Ei) : (e = G,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Fc(e.type)),
    e) : 1
}
function dt(e, t, n, r) {
    if (50 < yr)
        throw yr = 0,
        Jl = null,
        Error(j(185));
    Hr(e, n, r),
    (!(b & 2) || e !== he) && (e === he && (!(b & 2) && (mo |= n),
    fe === 4 && At(e, Se)),
    be(e, r),
    n === 1 && b === 0 && !(t.mode & 1) && (Wn = se() + 500,
    uo && tn()))
}
function be(e, t) {
    var n = e.callbackNode;
    Np(e, t);
    var r = Mi(e, e === he ? Se : 0);
    if (r === 0)
        n !== null && zs(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && zs(n),
        t === 1)
            e.tag === 0 ? z1(wu.bind(null, e)) : id(wu.bind(null, e)),
            C1(function() {
                !(b & 6) && tn()
            }),
            n = null;
        else {
            switch (Mc(r)) {
            case 1:
                n = wa;
                break;
            case 4:
                n = Tc;
                break;
            case 16:
                n = Li;
                break;
            case 536870912:
                n = Oc;
                break;
            default:
                n = Li
            }
            n = rf(n, Xd.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Xd(e, t) {
    if (ji = -1,
    Ei = 0,
    b & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n)
        return null;
    var r = Mi(e, e === he ? Se : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = qi(e, r);
    else {
        t = r;
        var i = b;
        b |= 2;
        var o = Zd();
        (he !== e || Se !== t) && (xt = null,
        Wn = se() + 500,
        un(e, t));
        do
            try {
                G1();
                break
            } catch (a) {
                qd(e, a)
            }
        while (1);
        La(),
        Gi.current = o,
        b = i,
        ue !== null ? t = 0 : (he = null,
        Se = 0,
        t = fe)
    }
    if (t !== 0) {
        if (t === 2 && (i = _l(e),
        i !== 0 && (r = i,
        t = ea(e, i))),
        t === 1)
            throw n = Ar,
            un(e, 0),
            At(e, r),
            be(e, se()),
            n;
        if (t === 6)
            At(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Q1(i) && (t = qi(e, r),
            t === 2 && (o = _l(e),
            o !== 0 && (r = o,
            t = ea(e, o))),
            t === 1))
                throw n = Ar,
                un(e, 0),
                At(e, r),
                be(e, se()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                rn(e, De, xt);
                break;
            case 3:
                if (At(e, r),
                (r & 130023424) === r && (t = Ya + 500 - se(),
                10 < t)) {
                    if (Mi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        $e(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = $l(rn.bind(null, e, De, xt), t);
                    break
                }
                rn(e, De, xt);
                break;
            case 4:
                if (At(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - ct(r);
                    o = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~o
                }
                if (r = i,
                r = se() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * W1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = $l(rn.bind(null, e, De, xt), r);
                    break
                }
                rn(e, De, xt);
                break;
            case 5:
                rn(e, De, xt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return be(e, se()),
    e.callbackNode === n ? Xd.bind(null, e) : null
}
function ea(e, t) {
    var n = gr;
    return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    e = qi(e, t),
    e !== 2 && (t = De,
    De = n,
    t !== null && ta(t)),
    e
}
function ta(e) {
    De === null ? De = e : De.push.apply(De, e)
}
function Q1(e) {
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
                        if (!ft(o(), i))
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
function At(e, t) {
    for (t &= ~Qa,
    t &= ~mo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ct(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function wu(e) {
    if (b & 6)
        throw Error(j(327));
    Dn();
    var t = Mi(e, 0);
    if (!(t & 1))
        return be(e, se()),
        null;
    var n = qi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = _l(e);
        r !== 0 && (t = r,
        n = ea(e, r))
    }
    if (n === 1)
        throw n = Ar,
        un(e, 0),
        At(e, t),
        be(e, se()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    rn(e, De, xt),
    be(e, se()),
    null
}
function Ga(e, t) {
    var n = b;
    b |= 1;
    try {
        return e(t)
    } finally {
        b = n,
        b === 0 && (Wn = se() + 500,
        uo && tn())
    }
}
function hn(e) {
    Ft !== null && Ft.tag === 0 && !(b & 6) && Dn();
    var t = b;
    b |= 1;
    var n = nt.transition
      , r = G;
    try {
        if (nt.transition = null,
        G = 1,
        e)
            return e()
    } finally {
        G = r,
        nt.transition = n,
        b = t,
        !(b & 6) && tn()
    }
}
function Ka() {
    We = On.current,
    J(On)
}
function un(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    S1(n)),
    ue !== null)
        for (n = ue.return; n !== null; ) {
            var r = n;
            switch (Pa(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Di();
                break;
            case 3:
                bn(),
                J(Ue),
                J(Te),
                Da();
                break;
            case 5:
                Ia(r);
                break;
            case 4:
                bn();
                break;
            case 13:
                J(te);
                break;
            case 19:
                J(te);
                break;
            case 10:
                Ma(r.type._context);
                break;
            case 22:
            case 23:
                Ka()
            }
            n = n.return
        }
    if (he = e,
    ue = e = Yt(e.current, null),
    Se = We = t,
    fe = 0,
    Ar = null,
    Qa = mo = mn = 0,
    De = gr = null,
    an !== null) {
        for (t = 0; t < an.length; t++)
            if (n = an[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i,
                    r.next = l
                }
                n.pending = r
            }
        an = null
    }
    return e
}
function qd(e, t) {
    do {
        var n = ue;
        try {
            if (La(),
            ki.current = Yi,
            Qi) {
                for (var r = ne.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Qi = !1
            }
            if (pn = 0,
            me = de = ne = null,
            hr = !1,
            Mr = 0,
            Wa.current = null,
            n === null || n.return === null) {
                fe = 1,
                Ar = t,
                ue = null;
                break
            }
            e: {
                var o = e
                  , l = n.return
                  , a = n
                  , s = t;
                if (t = Se,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , m = a
                      , h = m.tag;
                    if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var v = m.alternate;
                        v ? (m.updateQueue = v.updateQueue,
                        m.memoizedState = v.memoizedState,
                        m.lanes = v.lanes) : (m.updateQueue = null,
                        m.memoizedState = null)
                    }
                    var x = lu(l);
                    if (x !== null) {
                        x.flags &= -257,
                        au(x, l, a, o, t),
                        x.mode & 1 && ou(o, u, t),
                        t = x,
                        s = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var S = new Set;
                            S.add(s),
                            t.updateQueue = S
                        } else
                            w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ou(o, u, t),
                            Xa();
                            break e
                        }
                        s = Error(j(426))
                    }
                } else if (ee && a.mode & 1) {
                    var T = lu(l);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        au(T, l, a, o, t),
                        Ta(Vn(s, a));
                        break e
                    }
                }
                o = s = Vn(s, a),
                fe !== 4 && (fe = 2),
                gr === null ? gr = [o] : gr.push(o),
                o = l;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var f = $d(o, s, t);
                        Zs(o, f);
                        break e;
                    case 1:
                        a = s;
                        var c = o.type
                          , p = o.stateNode;
                        if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Wt === null || !Wt.has(p)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var y = Rd(o, a, t);
                            Zs(o, y);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            ef(n)
        } catch (C) {
            t = C,
            ue === n && n !== null && (ue = n = n.return);
            continue
        }
        break
    } while (1)
}
function Zd() {
    var e = Gi.current;
    return Gi.current = Yi,
    e === null ? Yi : e
}
function Xa() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    he === null || !(mn & 268435455) && !(mo & 268435455) || At(he, Se)
}
function qi(e, t) {
    var n = b;
    b |= 2;
    var r = Zd();
    (he !== e || Se !== t) && (xt = null,
    un(e, t));
    do
        try {
            Y1();
            break
        } catch (i) {
            qd(e, i)
        }
    while (1);
    if (La(),
    b = n,
    Gi.current = r,
    ue !== null)
        throw Error(j(261));
    return he = null,
    Se = 0,
    fe
}
function Y1() {
    for (; ue !== null; )
        Jd(ue)
}
function G1() {
    for (; ue !== null && !wp(); )
        Jd(ue)
}
function Jd(e) {
    var t = nf(e.alternate, e, We);
    e.memoizedProps = e.pendingProps,
    t === null ? ef(e) : ue = t,
    Wa.current = null
}
function ef(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = U1(n, t),
            n !== null) {
                n.flags &= 32767,
                ue = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                fe = 6,
                ue = null;
                return
            }
        } else if (n = H1(n, t, We),
        n !== null) {
            ue = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ue = t;
            return
        }
        ue = t = e
    } while (t !== null);
    fe === 0 && (fe = 5)
}
function rn(e, t, n) {
    var r = G
      , i = nt.transition;
    try {
        nt.transition = null,
        G = 1,
        K1(e, t, n, r)
    } finally {
        nt.transition = i,
        G = r
    }
    return null
}
function K1(e, t, n, r) {
    do
        Dn();
    while (Ft !== null);
    if (b & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Pp(e, o),
    e === he && (ue = he = null,
    Se = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ai || (ai = !0,
    rf(Li, function() {
        return Dn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = nt.transition,
        nt.transition = null;
        var l = G;
        G = 1;
        var a = b;
        b |= 4,
        Wa.current = null,
        b1(e, n),
        Gd(n, e),
        h1(Ll),
        $i = !!Ol,
        Ll = Ol = null,
        e.current = n,
        V1(n),
        xp(),
        b = a,
        G = l,
        nt.transition = o
    } else
        e.current = n;
    if (ai && (ai = !1,
    Ft = e,
    Xi = i),
    o = e.pendingLanes,
    o === 0 && (Wt = null),
    Cp(n.stateNode),
    be(e, se()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Ki)
        throw Ki = !1,
        e = Zl,
        Zl = null,
        e;
    return Xi & 1 && e.tag !== 0 && Dn(),
    o = e.pendingLanes,
    o & 1 ? e === Jl ? yr++ : (yr = 0,
    Jl = e) : yr = 0,
    tn(),
    null
}
function Dn() {
    if (Ft !== null) {
        var e = Mc(Xi)
          , t = nt.transition
          , n = G;
        try {
            if (nt.transition = null,
            G = 16 > e ? 16 : e,
            Ft === null)
                var r = !1;
            else {
                if (e = Ft,
                Ft = null,
                Xi = 0,
                b & 6)
                    throw Error(j(331));
                var i = b;
                for (b |= 4,
                M = e.current; M !== null; ) {
                    var o = M
                      , l = o.child;
                    if (M.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (M = u; M !== null; ) {
                                    var m = M;
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vr(8, m, o)
                                    }
                                    var h = m.child;
                                    if (h !== null)
                                        h.return = m,
                                        M = h;
                                    else
                                        for (; M !== null; ) {
                                            m = M;
                                            var v = m.sibling
                                              , x = m.return;
                                            if (Wd(m),
                                            m === u) {
                                                M = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = x,
                                                M = v;
                                                break
                                            }
                                            M = x
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var S = w.child;
                                if (S !== null) {
                                    w.child = null;
                                    do {
                                        var T = S.sibling;
                                        S.sibling = null,
                                        S = T
                                    } while (S !== null)
                                }
                            }
                            M = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        l.return = o,
                        M = l;
                    else
                        e: for (; M !== null; ) {
                            if (o = M,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    vr(9, o, o.return)
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return,
                                M = f;
                                break e
                            }
                            M = o.return
                        }
                }
                var c = e.current;
                for (M = c; M !== null; ) {
                    l = M;
                    var p = l.child;
                    if (l.subtreeFlags & 2064 && p !== null)
                        p.return = l,
                        M = p;
                    else
                        e: for (l = c; M !== null; ) {
                            if (a = M,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        po(9, a)
                                    }
                                } catch (C) {
                                    le(a, a.return, C)
                                }
                            if (a === l) {
                                M = null;
                                break e
                            }
                            var y = a.sibling;
                            if (y !== null) {
                                y.return = a.return,
                                M = y;
                                break e
                            }
                            M = a.return
                        }
                }
                if (b = i,
                tn(),
                gt && typeof gt.onPostCommitFiberRoot == "function")
                    try {
                        gt.onPostCommitFiberRoot(io, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            G = n,
            nt.transition = t
        }
    }
    return !1
}
function xu(e, t, n) {
    t = Vn(n, t),
    t = $d(e, t, 1),
    e = Vt(e, t, 1),
    t = $e(),
    e !== null && (Hr(e, 1, t),
    be(e, t))
}
function le(e, t, n) {
    if (e.tag === 3)
        xu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                xu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
                    e = Vn(n, e),
                    e = Rd(t, e, 1),
                    t = Vt(t, e, 1),
                    e = $e(),
                    t !== null && (Hr(t, 1, e),
                    be(t, e));
                    break
                }
            }
            t = t.return
        }
}
function X1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = $e(),
    e.pingedLanes |= e.suspendedLanes & n,
    he === e && (Se & n) === n && (fe === 4 || fe === 3 && (Se & 130023424) === Se && 500 > se() - Ya ? un(e, 0) : Qa |= n),
    be(e, t)
}
function tf(e, t) {
    t === 0 && (e.mode & 1 ? (t = qr,
    qr <<= 1,
    !(qr & 130023424) && (qr = 4194304)) : t = 1);
    var n = $e();
    e = Nt(e, t),
    e !== null && (Hr(e, t, n),
    be(e, n))
}
function q1(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    tf(e, n)
}
function Z1(e, t) {
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
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    tf(e, n)
}
var nf;
nf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ue.current)
            Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Fe = !1,
                F1(e, t, n);
            Fe = !!(e.flags & 131072)
        }
    else
        Fe = !1,
        ee && t.flags & 1048576 && od(t, Ui, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ci(e, t),
        e = t.pendingProps;
        var i = Hn(t, Te.current);
        In(t, n),
        i = Ha(null, t, r, e, i, n);
        var o = Ua();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Be(r) ? (o = !0,
        Fi(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Ra(t),
        i.updater = co,
        t.stateNode = i,
        i._reactInternals = t,
        Ul(t, r, e, n),
        t = Vl(null, t, r, !0, o, n)) : (t.tag = 0,
        ee && o && Na(t),
        Me(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ci(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = e0(r),
            e = at(r, e),
            i) {
            case 0:
                t = bl(null, t, r, e, n);
                break e;
            case 1:
                t = cu(null, t, r, e, n);
                break e;
            case 11:
                t = su(null, t, r, e, n);
                break e;
            case 14:
                t = uu(null, t, r, at(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : at(r, i),
        bl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : at(r, i),
        cu(e, t, r, i, n);
    case 3:
        e: {
            if (Fd(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            ud(e, t),
            Vi(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Vn(Error(j(423)), t),
                    t = du(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Vn(Error(j(424)), t),
                    t = du(e, t, r, n, i);
                    break e
                } else
                    for (Qe = bt(t.stateNode.containerInfo.firstChild),
                    Ge = t,
                    ee = !0,
                    ut = null,
                    n = pd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Un(),
                r === i) {
                    t = Pt(e, t, n);
                    break e
                }
                Me(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return md(t),
        e === null && Dl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        l = i.children,
        Ml(r, i) ? l = null : o !== null && Ml(r, o) && (t.flags |= 32),
        Dd(e, t),
        Me(e, t, l, n),
        t.child;
    case 6:
        return e === null && Dl(t),
        null;
    case 13:
        return Hd(e, t, n);
    case 4:
        return Aa(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Bn(t, null, r, n) : Me(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : at(r, i),
        su(e, t, r, i, n);
    case 7:
        return Me(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            l = i.value,
            q(Bi, r._currentValue),
            r._currentValue = l,
            o !== null)
                if (ft(o.value, l)) {
                    if (o.children === i.children && !Ue.current) {
                        t = Pt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            l = o.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = Et(-1, n & -n),
                                        s.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var m = u.pending;
                                            m === null ? s.next = s : (s.next = m.next,
                                            m.next = s),
                                            u.pending = s
                                        }
                                    }
                                    o.lanes |= n,
                                    s = o.alternate,
                                    s !== null && (s.lanes |= n),
                                    Fl(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return,
                            l === null)
                                throw Error(j(341));
                            l.lanes |= n,
                            a = l.alternate,
                            a !== null && (a.lanes |= n),
                            Fl(l, n, t),
                            l = o.sibling
                        } else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (o = l.sibling,
                                o !== null) {
                                    o.return = l.return,
                                    l = o;
                                    break
                                }
                                l = l.return
                            }
                        o = l
                    }
            Me(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        In(t, n),
        i = rt(i),
        r = r(i),
        t.flags |= 1,
        Me(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = at(r, t.pendingProps),
        i = at(r.type, i),
        uu(e, t, r, i, n);
    case 15:
        return Ad(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : at(r, i),
        Ci(e, t),
        t.tag = 1,
        Be(r) ? (e = !0,
        Fi(t)) : e = !1,
        In(t, n),
        dd(t, r, i),
        Ul(t, r, i, n),
        Vl(null, t, r, !0, e, n);
    case 19:
        return Ud(e, t, n);
    case 22:
        return Id(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function rf(e, t) {
    return Pc(e, t)
}
function J1(e, t, n, r) {
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
function tt(e, t, n, r) {
    return new J1(e,t,n,r)
}
function qa(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function e0(e) {
    if (typeof e == "function")
        return qa(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === va)
            return 11;
        if (e === ga)
            return 14
    }
    return 2
}
function Yt(e, t) {
    var n = e.alternate;
    return n === null ? (n = tt(e.tag, t, e.key, e.mode),
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
function _i(e, t, n, r, i, o) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        qa(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case kn:
            return cn(n.children, i, o, t);
        case ha:
            l = 8,
            i |= 8;
            break;
        case dl:
            return e = tt(12, n, t, i | 2),
            e.elementType = dl,
            e.lanes = o,
            e;
        case fl:
            return e = tt(13, n, t, i),
            e.elementType = fl,
            e.lanes = o,
            e;
        case pl:
            return e = tt(19, n, t, i),
            e.elementType = pl,
            e.lanes = o,
            e;
        case fc:
            return ho(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case cc:
                    l = 10;
                    break e;
                case dc:
                    l = 9;
                    break e;
                case va:
                    l = 11;
                    break e;
                case ga:
                    l = 14;
                    break e;
                case Mt:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = tt(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function cn(e, t, n, r) {
    return e = tt(7, e, r, t),
    e.lanes = n,
    e
}
function ho(e, t, n, r) {
    return e = tt(22, e, r, t),
    e.elementType = fc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function nl(e, t, n) {
    return e = tt(6, e, null, t),
    e.lanes = n,
    e
}
function rl(e, t, n) {
    return t = tt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function t0(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Io(0),
    this.expirationTimes = Io(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Io(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Za(e, t, n, r, i, o, l, a, s) {
    return e = new t0(e,t,n,a,s),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = tt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ra(o),
    e
}
function n0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: xn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function of(e) {
    if (!e)
        return Zt;
    e = e._reactInternals;
    e: {
        if (yn(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Be(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Be(n))
            return rd(e, n, t)
    }
    return t
}
function lf(e, t, n, r, i, o, l, a, s) {
    return e = Za(n, r, !0, e, i, o, l, a, s),
    e.context = of(null),
    n = e.current,
    r = $e(),
    i = Qt(n),
    o = Et(r, i),
    o.callback = t ?? null,
    Vt(n, o, i),
    e.current.lanes = i,
    Hr(e, i, r),
    be(e, r),
    e
}
function vo(e, t, n, r) {
    var i = t.current
      , o = $e()
      , l = Qt(i);
    return n = of(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Et(o, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Vt(i, t, l),
    e !== null && (dt(e, i, l, o),
    xi(e, i, l)),
    l
}
function Zi(e) {
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
function ku(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Ja(e, t) {
    ku(e, t),
    (e = e.alternate) && ku(e, t)
}
function r0() {
    return null
}
var af = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function es(e) {
    this._internalRoot = e
}
go.prototype.render = es.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    vo(e, t, null, null)
}
;
go.prototype.unmount = es.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hn(function() {
            vo(null, e, null, null)
        }),
        t[zt] = null
    }
}
;
function go(e) {
    this._internalRoot = e
}
go.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ac();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
            ;
        Rt.splice(n, 0, e),
        n === 0 && Dc(e)
    }
}
;
function ts(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function yo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Su() {}
function i0(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Zi(l);
                o.call(u)
            }
        }
        var l = lf(t, r, e, 0, null, !1, !1, "", Su);
        return e._reactRootContainer = l,
        e[zt] = l.current,
        Nr(e.nodeType === 8 ? e.parentNode : e),
        hn(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Zi(s);
            a.call(u)
        }
    }
    var s = Za(e, 0, !1, null, null, !1, !1, "", Su);
    return e._reactRootContainer = s,
    e[zt] = s.current,
    Nr(e.nodeType === 8 ? e.parentNode : e),
    hn(function() {
        vo(t, s, n, r)
    }),
    s
}
function wo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var s = Zi(l);
                a.call(s)
            }
        }
        vo(t, l, e, i)
    } else
        l = i0(n, t, e, i, r);
    return Zi(l)
}
$c = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = sr(t.pendingLanes);
            n !== 0 && (xa(t, n | 1),
            be(t, se()),
            !(b & 6) && (Wn = se() + 500,
            tn()))
        }
        break;
    case 13:
        hn(function() {
            var r = Nt(e, 1);
            if (r !== null) {
                var i = $e();
                dt(r, e, 1, i)
            }
        }),
        Ja(e, 1)
    }
}
;
ka = function(e) {
    if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
            var n = $e();
            dt(t, e, 134217728, n)
        }
        Ja(e, 134217728)
    }
}
;
Rc = function(e) {
    if (e.tag === 13) {
        var t = Qt(e)
          , n = Nt(e, t);
        if (n !== null) {
            var r = $e();
            dt(n, e, t, r)
        }
        Ja(e, t)
    }
}
;
Ac = function() {
    return G
}
;
Ic = function(e, t) {
    var n = G;
    try {
        return G = e,
        t()
    } finally {
        G = n
    }
}
;
Cl = function(e, t, n) {
    switch (t) {
    case "input":
        if (vl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = so(r);
                    if (!i)
                        throw Error(j(90));
                    mc(r),
                    vl(r, i)
                }
            }
        }
        break;
    case "textarea":
        vc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Mn(e, !!n.multiple, t, !1)
    }
}
;
Cc = Ga;
jc = hn;
var o0 = {
    usingClientEntryPoint: !1,
    Events: [Br, En, so, kc, Sc, Ga]
}
  , or = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , l0 = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zc(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: or.findFiberByHostInstance || r0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!si.isDisabled && si.supportsFiber)
        try {
            io = si.inject(l0),
            gt = si
        } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0;
Xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ts(t))
        throw Error(j(200));
    return n0(e, t, null, n)
}
;
Xe.createRoot = function(e, t) {
    if (!ts(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , i = af;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Za(e, 1, !1, null, null, n, !1, r, i),
    e[zt] = t.current,
    Nr(e.nodeType === 8 ? e.parentNode : e),
    new es(t)
}
;
Xe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = zc(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Xe.flushSync = function(e) {
    return hn(e)
}
;
Xe.hydrate = function(e, t, n) {
    if (!yo(t))
        throw Error(j(200));
    return wo(null, e, t, !0, n)
}
;
Xe.hydrateRoot = function(e, t, n) {
    if (!ts(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , l = af;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = lf(t, null, e, 1, n ?? null, i, !1, o, l),
    e[zt] = t.current,
    Nr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new go(t)
}
;
Xe.render = function(e, t, n) {
    if (!yo(t))
        throw Error(j(200));
    return wo(null, e, t, !1, n)
}
;
Xe.unmountComponentAtNode = function(e) {
    if (!yo(e))
        throw Error(j(40));
    return e._reactRootContainer ? (hn(function() {
        wo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[zt] = null
        })
    }),
    !0) : !1
}
;
Xe.unstable_batchedUpdates = Ga;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!yo(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return wo(e, t, n, !1, r)
}
;
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function sf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf)
        } catch (e) {
            console.error(e)
        }
}
sf(),
oc.exports = Xe;
var a0 = oc.exports
  , Cu = a0;
ul.createRoot = Cu.createRoot,
ul.hydrateRoot = Cu.hydrateRoot;
var uf = {
    exports: {}
}
  , K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve = typeof Symbol == "function" && Symbol.for
  , ns = ve ? Symbol.for("react.element") : 60103
  , rs = ve ? Symbol.for("react.portal") : 60106
  , xo = ve ? Symbol.for("react.fragment") : 60107
  , ko = ve ? Symbol.for("react.strict_mode") : 60108
  , So = ve ? Symbol.for("react.profiler") : 60114
  , Co = ve ? Symbol.for("react.provider") : 60109
  , jo = ve ? Symbol.for("react.context") : 60110
  , is = ve ? Symbol.for("react.async_mode") : 60111
  , Eo = ve ? Symbol.for("react.concurrent_mode") : 60111
  , _o = ve ? Symbol.for("react.forward_ref") : 60112
  , zo = ve ? Symbol.for("react.suspense") : 60113
  , s0 = ve ? Symbol.for("react.suspense_list") : 60120
  , No = ve ? Symbol.for("react.memo") : 60115
  , Po = ve ? Symbol.for("react.lazy") : 60116
  , u0 = ve ? Symbol.for("react.block") : 60121
  , c0 = ve ? Symbol.for("react.fundamental") : 60117
  , d0 = ve ? Symbol.for("react.responder") : 60118
  , f0 = ve ? Symbol.for("react.scope") : 60119;
function Ze(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case ns:
            switch (e = e.type,
            e) {
            case is:
            case Eo:
            case xo:
            case So:
            case ko:
            case zo:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case jo:
                case _o:
                case Po:
                case No:
                case Co:
                    return e;
                default:
                    return t
                }
            }
        case rs:
            return t
        }
    }
}
function cf(e) {
    return Ze(e) === Eo
}
K.AsyncMode = is;
K.ConcurrentMode = Eo;
K.ContextConsumer = jo;
K.ContextProvider = Co;
K.Element = ns;
K.ForwardRef = _o;
K.Fragment = xo;
K.Lazy = Po;
K.Memo = No;
K.Portal = rs;
K.Profiler = So;
K.StrictMode = ko;
K.Suspense = zo;
K.isAsyncMode = function(e) {
    return cf(e) || Ze(e) === is
}
;
K.isConcurrentMode = cf;
K.isContextConsumer = function(e) {
    return Ze(e) === jo
}
;
K.isContextProvider = function(e) {
    return Ze(e) === Co
}
;
K.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ns
}
;
K.isForwardRef = function(e) {
    return Ze(e) === _o
}
;
K.isFragment = function(e) {
    return Ze(e) === xo
}
;
K.isLazy = function(e) {
    return Ze(e) === Po
}
;
K.isMemo = function(e) {
    return Ze(e) === No
}
;
K.isPortal = function(e) {
    return Ze(e) === rs
}
;
K.isProfiler = function(e) {
    return Ze(e) === So
}
;
K.isStrictMode = function(e) {
    return Ze(e) === ko
}
;
K.isSuspense = function(e) {
    return Ze(e) === zo
}
;
K.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === xo || e === Eo || e === So || e === ko || e === zo || e === s0 || typeof e == "object" && e !== null && (e.$$typeof === Po || e.$$typeof === No || e.$$typeof === Co || e.$$typeof === jo || e.$$typeof === _o || e.$$typeof === c0 || e.$$typeof === d0 || e.$$typeof === f0 || e.$$typeof === u0)
}
;
K.typeOf = Ze;
uf.exports = K;
var os = uf.exports;
function p0(e) {
    function t(P, O, L, A, g) {
        for (var B = 0, N = 0, ie = 0, W = 0, Y, F, ye = 0, Ie = 0, V, _e = V = Y = 0, Q = 0, we = 0, Xn = 0, xe = 0, Wr = L.length, qn = Wr - 1, ot, D = "", ae = "", To = "", Oo = "", Ot; Q < Wr; ) {
            if (F = L.charCodeAt(Q),
            Q === qn && N + W + ie + B !== 0 && (N !== 0 && (F = N === 47 ? 10 : 47),
            W = ie = B = 0,
            Wr++,
            qn++),
            N + W + ie + B === 0) {
                if (Q === qn && (0 < we && (D = D.replace(v, "")),
                0 < D.trim().length)) {
                    switch (F) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                        break;
                    default:
                        D += L.charAt(Q)
                    }
                    F = 59
                }
                switch (F) {
                case 123:
                    for (D = D.trim(),
                    Y = D.charCodeAt(0),
                    V = 1,
                    xe = ++Q; Q < Wr; ) {
                        switch (F = L.charCodeAt(Q)) {
                        case 123:
                            V++;
                            break;
                        case 125:
                            V--;
                            break;
                        case 47:
                            switch (F = L.charCodeAt(Q + 1)) {
                            case 42:
                            case 47:
                                e: {
                                    for (_e = Q + 1; _e < qn; ++_e)
                                        switch (L.charCodeAt(_e)) {
                                        case 47:
                                            if (F === 42 && L.charCodeAt(_e - 1) === 42 && Q + 2 !== _e) {
                                                Q = _e + 1;
                                                break e
                                            }
                                            break;
                                        case 10:
                                            if (F === 47) {
                                                Q = _e + 1;
                                                break e
                                            }
                                        }
                                    Q = _e
                                }
                            }
                            break;
                        case 91:
                            F++;
                        case 40:
                            F++;
                        case 34:
                        case 39:
                            for (; Q++ < qn && L.charCodeAt(Q) !== F; )
                                ;
                        }
                        if (V === 0)
                            break;
                        Q++
                    }
                    switch (V = L.substring(xe, Q),
                    Y === 0 && (Y = (D = D.replace(h, "").trim()).charCodeAt(0)),
                    Y) {
                    case 64:
                        switch (0 < we && (D = D.replace(v, "")),
                        F = D.charCodeAt(1),
                        F) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                            we = O;
                            break;
                        default:
                            we = wt
                        }
                        if (V = t(O, we, V, F, g + 1),
                        xe = V.length,
                        0 < z && (we = n(wt, D, Xn),
                        Ot = a(3, V, we, O, ge, ce, xe, F, g, A),
                        D = we.join(""),
                        Ot !== void 0 && (xe = (V = Ot.trim()).length) === 0 && (F = 0,
                        V = "")),
                        0 < xe)
                            switch (F) {
                            case 115:
                                D = D.replace(k, l);
                            case 100:
                            case 109:
                            case 45:
                                V = D + "{" + V + "}";
                                break;
                            case 107:
                                D = D.replace(c, "$1 $2"),
                                V = D + "{" + V + "}",
                                V = Ee === 1 || Ee === 2 && o("@" + V, 3) ? "@-webkit-" + V + "@" + V : "@" + V;
                                break;
                            default:
                                V = D + V,
                                A === 112 && (V = (ae += V,
                                ""))
                            }
                        else
                            V = "";
                        break;
                    default:
                        V = t(O, n(O, D, Xn), V, A, g + 1)
                    }
                    To += V,
                    V = Xn = we = _e = Y = 0,
                    D = "",
                    F = L.charCodeAt(++Q);
                    break;
                case 125:
                case 59:
                    if (D = (0 < we ? D.replace(v, "") : D).trim(),
                    1 < (xe = D.length))
                        switch (_e === 0 && (Y = D.charCodeAt(0),
                        Y === 45 || 96 < Y && 123 > Y) && (xe = (D = D.replace(" ", ":")).length),
                        0 < z && (Ot = a(1, D, O, P, ge, ce, ae.length, A, g, A)) !== void 0 && (xe = (D = Ot.trim()).length) === 0 && (D = "\0\0"),
                        Y = D.charCodeAt(0),
                        F = D.charCodeAt(1),
                        Y) {
                        case 0:
                            break;
                        case 64:
                            if (F === 105 || F === 99) {
                                Oo += D + L.charAt(Q);
                                break
                            }
                        default:
                            D.charCodeAt(xe - 1) !== 58 && (ae += i(D, Y, F, D.charCodeAt(2)))
                        }
                    Xn = we = _e = Y = 0,
                    D = "",
                    F = L.charCodeAt(++Q)
                }
            }
            switch (F) {
            case 13:
            case 10:
                N === 47 ? N = 0 : 1 + Y === 0 && A !== 107 && 0 < D.length && (we = 1,
                D += "\0"),
                0 < z * R && a(0, D, O, P, ge, ce, ae.length, A, g, A),
                ce = 1,
                ge++;
                break;
            case 59:
            case 125:
                if (N + W + ie + B === 0) {
                    ce++;
                    break
                }
            default:
                switch (ce++,
                ot = L.charAt(Q),
                F) {
                case 9:
                case 32:
                    if (W + B + N === 0)
                        switch (ye) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                            ot = "";
                            break;
                        default:
                            F !== 32 && (ot = " ")
                        }
                    break;
                case 0:
                    ot = "\\0";
                    break;
                case 12:
                    ot = "\\f";
                    break;
                case 11:
                    ot = "\\v";
                    break;
                case 38:
                    W + N + B === 0 && (we = Xn = 1,
                    ot = "\f" + ot);
                    break;
                case 108:
                    if (W + N + B + Ve === 0 && 0 < _e)
                        switch (Q - _e) {
                        case 2:
                            ye === 112 && L.charCodeAt(Q - 3) === 58 && (Ve = ye);
                        case 8:
                            Ie === 111 && (Ve = Ie)
                        }
                    break;
                case 58:
                    W + N + B === 0 && (_e = Q);
                    break;
                case 44:
                    N + ie + W + B === 0 && (we = 1,
                    ot += "\r");
                    break;
                case 34:
                case 39:
                    N === 0 && (W = W === F ? 0 : W === 0 ? F : W);
                    break;
                case 91:
                    W + N + ie === 0 && B++;
                    break;
                case 93:
                    W + N + ie === 0 && B--;
                    break;
                case 41:
                    W + N + B === 0 && ie--;
                    break;
                case 40:
                    if (W + N + B === 0) {
                        if (Y === 0)
                            switch (2 * ye + 3 * Ie) {
                            case 533:
                                break;
                            default:
                                Y = 1
                            }
                        ie++
                    }
                    break;
                case 64:
                    N + ie + W + B + _e + V === 0 && (V = 1);
                    break;
                case 42:
                case 47:
                    if (!(0 < W + B + ie))
                        switch (N) {
                        case 0:
                            switch (2 * F + 3 * L.charCodeAt(Q + 1)) {
                            case 235:
                                N = 47;
                                break;
                            case 220:
                                xe = Q,
                                N = 42
                            }
                            break;
                        case 42:
                            F === 47 && ye === 42 && xe + 2 !== Q && (L.charCodeAt(xe + 2) === 33 && (ae += L.substring(xe, Q + 1)),
                            ot = "",
                            N = 0)
                        }
                }
                N === 0 && (D += ot)
            }
            Ie = ye,
            ye = F,
            Q++
        }
        if (xe = ae.length,
        0 < xe) {
            if (we = O,
            0 < z && (Ot = a(2, ae, we, P, ge, ce, xe, A, g, A),
            Ot !== void 0 && (ae = Ot).length === 0))
                return Oo + ae + To;
            if (ae = we.join(",") + "{" + ae + "}",
            Ee * Ve !== 0) {
                switch (Ee !== 2 || o(ae, 2) || (Ve = 0),
                Ve) {
                case 111:
                    ae = ae.replace(y, ":-moz-$1") + ae;
                    break;
                case 112:
                    ae = ae.replace(p, "::-webkit-input-$1") + ae.replace(p, "::-moz-$1") + ae.replace(p, ":-ms-input-$1") + ae
                }
                Ve = 0
            }
        }
        return Oo + ae + To
    }
    function n(P, O, L) {
        var A = O.trim().split(T);
        O = A;
        var g = A.length
          , B = P.length;
        switch (B) {
        case 0:
        case 1:
            var N = 0;
            for (P = B === 0 ? "" : P[0] + " "; N < g; ++N)
                O[N] = r(P, O[N], L).trim();
            break;
        default:
            var ie = N = 0;
            for (O = []; N < g; ++N)
                for (var W = 0; W < B; ++W)
                    O[ie++] = r(P[W] + " ", A[N], L).trim()
        }
        return O
    }
    function r(P, O, L) {
        var A = O.charCodeAt(0);
        switch (33 > A && (A = (O = O.trim()).charCodeAt(0)),
        A) {
        case 38:
            return O.replace(f, "$1" + P.trim());
        case 58:
            return P.trim() + O.replace(f, "$1" + P.trim());
        default:
            if (0 < 1 * L && 0 < O.indexOf("\f"))
                return O.replace(f, (P.charCodeAt(0) === 58 ? "" : "$1") + P.trim())
        }
        return P + O
    }
    function i(P, O, L, A) {
        var g = P + ";"
          , B = 2 * O + 3 * L + 4 * A;
        if (B === 944) {
            P = g.indexOf(":", 9) + 1;
            var N = g.substring(P, g.length - 1).trim();
            return N = g.substring(0, P).trim() + N + ";",
            Ee === 1 || Ee === 2 && o(N, 1) ? "-webkit-" + N + N : N
        }
        if (Ee === 0 || Ee === 2 && !o(g, 1))
            return g;
        switch (B) {
        case 1015:
            return g.charCodeAt(10) === 97 ? "-webkit-" + g + g : g;
        case 951:
            return g.charCodeAt(3) === 116 ? "-webkit-" + g + g : g;
        case 963:
            return g.charCodeAt(5) === 110 ? "-webkit-" + g + g : g;
        case 1009:
            if (g.charCodeAt(4) !== 100)
                break;
        case 969:
        case 942:
            return "-webkit-" + g + g;
        case 978:
            return "-webkit-" + g + "-moz-" + g + g;
        case 1019:
        case 983:
            return "-webkit-" + g + "-moz-" + g + "-ms-" + g + g;
        case 883:
            if (g.charCodeAt(8) === 45)
                return "-webkit-" + g + g;
            if (0 < g.indexOf("image-set(", 11))
                return g.replace(pe, "$1-webkit-$2") + g;
            break;
        case 932:
            if (g.charCodeAt(4) === 45)
                switch (g.charCodeAt(5)) {
                case 103:
                    return "-webkit-box-" + g.replace("-grow", "") + "-webkit-" + g + "-ms-" + g.replace("grow", "positive") + g;
                case 115:
                    return "-webkit-" + g + "-ms-" + g.replace("shrink", "negative") + g;
                case 98:
                    return "-webkit-" + g + "-ms-" + g.replace("basis", "preferred-size") + g
                }
            return "-webkit-" + g + "-ms-" + g + g;
        case 964:
            return "-webkit-" + g + "-ms-flex-" + g + g;
        case 1023:
            if (g.charCodeAt(8) !== 99)
                break;
            return N = g.substring(g.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"),
            "-webkit-box-pack" + N + "-webkit-" + g + "-ms-flex-pack" + N + g;
        case 1005:
            return w.test(g) ? g.replace(x, ":-webkit-") + g.replace(x, ":-moz-") + g : g;
        case 1e3:
            switch (N = g.substring(13).trim(),
            O = N.indexOf("-") + 1,
            N.charCodeAt(0) + N.charCodeAt(O)) {
            case 226:
                N = g.replace(C, "tb");
                break;
            case 232:
                N = g.replace(C, "tb-rl");
                break;
            case 220:
                N = g.replace(C, "lr");
                break;
            default:
                return g
            }
            return "-webkit-" + g + "-ms-" + N + g;
        case 1017:
            if (g.indexOf("sticky", 9) === -1)
                break;
        case 975:
            switch (O = (g = P).length - 10,
            N = (g.charCodeAt(O) === 33 ? g.substring(0, O) : g).substring(P.indexOf(":", 7) + 1).trim(),
            B = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
            case 203:
                if (111 > N.charCodeAt(8))
                    break;
            case 115:
                g = g.replace(N, "-webkit-" + N) + ";" + g;
                break;
            case 207:
            case 102:
                g = g.replace(N, "-webkit-" + (102 < B ? "inline-" : "") + "box") + ";" + g.replace(N, "-webkit-" + N) + ";" + g.replace(N, "-ms-" + N + "box") + ";" + g
            }
            return g + ";";
        case 938:
            if (g.charCodeAt(5) === 45)
                switch (g.charCodeAt(6)) {
                case 105:
                    return N = g.replace("-items", ""),
                    "-webkit-" + g + "-webkit-box-" + N + "-ms-flex-" + N + g;
                case 115:
                    return "-webkit-" + g + "-ms-flex-item-" + g.replace(_, "") + g;
                default:
                    return "-webkit-" + g + "-ms-flex-line-pack" + g.replace("align-content", "").replace(_, "") + g
                }
            break;
        case 973:
        case 989:
            if (g.charCodeAt(3) !== 45 || g.charCodeAt(4) === 122)
                break;
        case 931:
        case 953:
            if (I.test(P) === !0)
                return (N = P.substring(P.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(P.replace("stretch", "fill-available"), O, L, A).replace(":fill-available", ":stretch") : g.replace(N, "-webkit-" + N) + g.replace(N, "-moz-" + N.replace("fill-", "")) + g;
            break;
        case 962:
            if (g = "-webkit-" + g + (g.charCodeAt(5) === 102 ? "-ms-" + g : "") + g,
            L + A === 211 && g.charCodeAt(13) === 105 && 0 < g.indexOf("transform", 10))
                return g.substring(0, g.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + g
        }
        return g
    }
    function o(P, O) {
        var L = P.indexOf(O === 1 ? ":" : "{")
          , A = P.substring(0, O !== 3 ? L : 10);
        return L = P.substring(L + 1, P.length - 1),
        $(O !== 2 ? A : A.replace(H, "$1"), L, O)
    }
    function l(P, O) {
        var L = i(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
        return L !== O + ";" ? L.replace(E, " or ($1)").substring(4) : "(" + O + ")"
    }
    function a(P, O, L, A, g, B, N, ie, W, Y) {
        for (var F = 0, ye = O, Ie; F < z; ++F)
            switch (Ie = Le[F].call(m, P, ye, L, A, g, B, N, ie, W, Y)) {
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                ye = Ie
            }
        if (ye !== O)
            return ye
    }
    function s(P) {
        switch (P) {
        case void 0:
        case null:
            z = Le.length = 0;
            break;
        default:
            if (typeof P == "function")
                Le[z++] = P;
            else if (typeof P == "object")
                for (var O = 0, L = P.length; O < L; ++O)
                    s(P[O]);
            else
                R = !!P | 0
        }
        return s
    }
    function u(P) {
        return P = P.prefix,
        P !== void 0 && ($ = null,
        P ? typeof P != "function" ? Ee = 1 : (Ee = 2,
        $ = P) : Ee = 0),
        u
    }
    function m(P, O) {
        var L = P;
        if (33 > L.charCodeAt(0) && (L = L.trim()),
        X = L,
        L = [X],
        0 < z) {
            var A = a(-1, O, L, L, ge, ce, 0, 0, 0, 0);
            A !== void 0 && typeof A == "string" && (O = A)
        }
        var g = t(wt, L, O, 0, 0);
        return 0 < z && (A = a(-2, g, L, L, ge, ce, g.length, 0, 0, 0),
        A !== void 0 && (g = A)),
        X = "",
        Ve = 0,
        ce = ge = 1,
        g
    }
    var h = /^\0+/g
      , v = /[\0\r\f]/g
      , x = /: */g
      , w = /zoo|gra/
      , S = /([,: ])(transform)/g
      , T = /,\r+?/g
      , f = /([\t\r\n ])*\f?&/g
      , c = /@(k\w+)\s*(\S*)\s*/
      , p = /::(place)/g
      , y = /:(read-only)/g
      , C = /[svh]\w+-[tblr]{2}/
      , k = /\(\s*(.*)\s*\)/g
      , E = /([\s\S]*?);/g
      , _ = /-self|flex-/g
      , H = /[^]*?(:[rp][el]a[\w-]+)[^]*/
      , I = /stretch|:\s*\w+\-(?:conte|avail)/
      , pe = /([^-])(image-set\()/
      , ce = 1
      , ge = 1
      , Ve = 0
      , Ee = 1
      , wt = []
      , Le = []
      , z = 0
      , $ = null
      , R = 0
      , X = "";
    return m.use = s,
    m.set = u,
    e !== void 0 && u(e),
    m
}
var m0 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
function h0(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)),
        t[n]
    }
}
var v0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
  , ju = h0(function(e) {
    return v0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
})
  , ls = os
  , g0 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , y0 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , w0 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , df = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , as = {};
as[ls.ForwardRef] = w0;
as[ls.Memo] = df;
function Eu(e) {
    return ls.isMemo(e) ? df : as[e.$$typeof] || g0
}
var x0 = Object.defineProperty
  , k0 = Object.getOwnPropertyNames
  , _u = Object.getOwnPropertySymbols
  , S0 = Object.getOwnPropertyDescriptor
  , C0 = Object.getPrototypeOf
  , zu = Object.prototype;
function ff(e, t, n) {
    if (typeof t != "string") {
        if (zu) {
            var r = C0(t);
            r && r !== zu && ff(e, r, n)
        }
        var i = k0(t);
        _u && (i = i.concat(_u(t)));
        for (var o = Eu(e), l = Eu(t), a = 0; a < i.length; ++a) {
            var s = i[a];
            if (!y0[s] && !(n && n[s]) && !(l && l[s]) && !(o && o[s])) {
                var u = S0(t, s);
                try {
                    x0(e, s, u)
                } catch {}
            }
        }
    }
    return e
}
var j0 = ff;
const E0 = Dr(j0);
function vt() {
    return (vt = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ).apply(this, arguments)
}
var Nu = function(e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
        n.push(t[r], e[r + 1]);
    return n
}
  , na = function(e) {
    return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !os.typeOf(e)
}
  , Ji = Object.freeze([])
  , Gt = Object.freeze({});
function Ir(e) {
    return typeof e == "function"
}
function Pu(e) {
    return e.displayName || e.name || "Component"
}
function ss(e) {
    return e && typeof e.styledComponentId == "string"
}
var Qn = typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled"
  , us = typeof window < "u" && "HTMLElement"in window
  , _0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" && {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY))
  , z0 = {};
function Vr(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
}
var N0 = function() {
    function e(n) {
        this.groupSizes = new Uint32Array(512),
        this.length = 512,
        this.tag = n
    }
    var t = e.prototype;
    return t.indexOfGroup = function(n) {
        for (var r = 0, i = 0; i < n; i++)
            r += this.groupSizes[i];
        return r
    }
    ,
    t.insertRules = function(n, r) {
        if (n >= this.groupSizes.length) {
            for (var i = this.groupSizes, o = i.length, l = o; n >= l; )
                (l <<= 1) < 0 && Vr(16, "" + n);
            this.groupSizes = new Uint32Array(l),
            this.groupSizes.set(i),
            this.length = l;
            for (var a = o; a < l; a++)
                this.groupSizes[a] = 0
        }
        for (var s = this.indexOfGroup(n + 1), u = 0, m = r.length; u < m; u++)
            this.tag.insertRule(s, r[u]) && (this.groupSizes[n]++,
            s++)
    }
    ,
    t.clearGroup = function(n) {
        if (n < this.length) {
            var r = this.groupSizes[n]
              , i = this.indexOfGroup(n)
              , o = i + r;
            this.groupSizes[n] = 0;
            for (var l = i; l < o; l++)
                this.tag.deleteRule(i)
        }
    }
    ,
    t.getGroup = function(n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0)
            return r;
        for (var i = this.groupSizes[n], o = this.indexOfGroup(n), l = o + i, a = o; a < l; a++)
            r += this.tag.getRule(a) + `/*!sc*/
`;
        return r
    }
    ,
    e
}()
  , zi = new Map
  , eo = new Map
  , wr = 1
  , ui = function(e) {
    if (zi.has(e))
        return zi.get(e);
    for (; eo.has(wr); )
        wr++;
    var t = wr++;
    return zi.set(e, t),
    eo.set(t, e),
    t
}
  , P0 = function(e) {
    return eo.get(e)
}
  , T0 = function(e, t) {
    t >= wr && (wr = t + 1),
    zi.set(e, t),
    eo.set(t, e)
}
  , O0 = "style[" + Qn + '][data-styled-version="5.3.10"]'
  , L0 = new RegExp("^" + Qn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  , M0 = function(e, t, n) {
    for (var r, i = n.split(","), o = 0, l = i.length; o < l; o++)
        (r = i[o]) && e.registerName(t, r)
}
  , $0 = function(e, t) {
    for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], i = 0, o = n.length; i < o; i++) {
        var l = n[i].trim();
        if (l) {
            var a = l.match(L0);
            if (a) {
                var s = 0 | parseInt(a[1], 10)
                  , u = a[2];
                s !== 0 && (T0(u, s),
                M0(e, u, a[3]),
                e.getTag().insertRules(s, r)),
                r.length = 0
            } else
                r.push(l)
        }
    }
}
  , R0 = function() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
  , pf = function(e) {
    var t = document.head
      , n = e || t
      , r = document.createElement("style")
      , i = function(a) {
        for (var s = a.childNodes, u = s.length; u >= 0; u--) {
            var m = s[u];
            if (m && m.nodeType === 1 && m.hasAttribute(Qn))
                return m
        }
    }(n)
      , o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Qn, "active"),
    r.setAttribute("data-styled-version", "5.3.10");
    var l = R0();
    return l && r.setAttribute("nonce", l),
    n.insertBefore(r, o),
    r
}
  , A0 = function() {
    function e(n) {
        var r = this.element = pf(n);
        r.appendChild(document.createTextNode("")),
        this.sheet = function(i) {
            if (i.sheet)
                return i.sheet;
            for (var o = document.styleSheets, l = 0, a = o.length; l < a; l++) {
                var s = o[l];
                if (s.ownerNode === i)
                    return s
            }
            Vr(17)
        }(r),
        this.length = 0
    }
    var t = e.prototype;
    return t.insertRule = function(n, r) {
        try {
            return this.sheet.insertRule(r, n),
            this.length++,
            !0
        } catch {
            return !1
        }
    }
    ,
    t.deleteRule = function(n) {
        this.sheet.deleteRule(n),
        this.length--
    }
    ,
    t.getRule = function(n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : ""
    }
    ,
    e
}()
  , I0 = function() {
    function e(n) {
        var r = this.element = pf(n);
        this.nodes = r.childNodes,
        this.length = 0
    }
    var t = e.prototype;
    return t.insertRule = function(n, r) {
        if (n <= this.length && n >= 0) {
            var i = document.createTextNode(r)
              , o = this.nodes[n];
            return this.element.insertBefore(i, o || null),
            this.length++,
            !0
        }
        return !1
    }
    ,
    t.deleteRule = function(n) {
        this.element.removeChild(this.nodes[n]),
        this.length--
    }
    ,
    t.getRule = function(n) {
        return n < this.length ? this.nodes[n].textContent : ""
    }
    ,
    e
}()
  , D0 = function() {
    function e(n) {
        this.rules = [],
        this.length = 0
    }
    var t = e.prototype;
    return t.insertRule = function(n, r) {
        return n <= this.length && (this.rules.splice(n, 0, r),
        this.length++,
        !0)
    }
    ,
    t.deleteRule = function(n) {
        this.rules.splice(n, 1),
        this.length--
    }
    ,
    t.getRule = function(n) {
        return n < this.length ? this.rules[n] : ""
    }
    ,
    e
}()
  , Tu = us
  , F0 = {
    isServer: !us,
    useCSSOMInjection: !_0
}
  , to = function() {
    function e(n, r, i) {
        n === void 0 && (n = Gt),
        r === void 0 && (r = {}),
        this.options = vt({}, F0, {}, n),
        this.gs = r,
        this.names = new Map(i),
        this.server = !!n.isServer,
        !this.server && us && Tu && (Tu = !1,
        function(o) {
            for (var l = document.querySelectorAll(O0), a = 0, s = l.length; a < s; a++) {
                var u = l[a];
                u && u.getAttribute(Qn) !== "active" && ($0(o, u),
                u.parentNode && u.parentNode.removeChild(u))
            }
        }(this))
    }
    e.registerId = function(n) {
        return ui(n)
    }
    ;
    var t = e.prototype;
    return t.reconstructWithOptions = function(n, r) {
        return r === void 0 && (r = !0),
        new e(vt({}, this.options, {}, n),this.gs,r && this.names || void 0)
    }
    ,
    t.allocateGSInstance = function(n) {
        return this.gs[n] = (this.gs[n] || 0) + 1
    }
    ,
    t.getTag = function() {
        return this.tag || (this.tag = (i = (r = this.options).isServer,
        o = r.useCSSOMInjection,
        l = r.target,
        n = i ? new D0(l) : o ? new A0(l) : new I0(l),
        new N0(n)));
        var n, r, i, o, l
    }
    ,
    t.hasNameForId = function(n, r) {
        return this.names.has(n) && this.names.get(n).has(r)
    }
    ,
    t.registerName = function(n, r) {
        if (ui(n),
        this.names.has(n))
            this.names.get(n).add(r);
        else {
            var i = new Set;
            i.add(r),
            this.names.set(n, i)
        }
    }
    ,
    t.insertRules = function(n, r, i) {
        this.registerName(n, r),
        this.getTag().insertRules(ui(n), i)
    }
    ,
    t.clearNames = function(n) {
        this.names.has(n) && this.names.get(n).clear()
    }
    ,
    t.clearRules = function(n) {
        this.getTag().clearGroup(ui(n)),
        this.clearNames(n)
    }
    ,
    t.clearTag = function() {
        this.tag = void 0
    }
    ,
    t.toString = function() {
        return function(n) {
            for (var r = n.getTag(), i = r.length, o = "", l = 0; l < i; l++) {
                var a = P0(l);
                if (a !== void 0) {
                    var s = n.names.get(a)
                      , u = r.getGroup(l);
                    if (s && u && s.size) {
                        var m = Qn + ".g" + l + '[id="' + a + '"]'
                          , h = "";
                        s !== void 0 && s.forEach(function(v) {
                            v.length > 0 && (h += v + ",")
                        }),
                        o += "" + u + m + '{content:"' + h + `"}/*!sc*/
`
                    }
                }
            }
            return o
        }(this)
    }
    ,
    e
}()
  , H0 = /(a)(d)/gi
  , Ou = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97))
};
function ra(e) {
    var t, n = "";
    for (t = Math.abs(e); t > 52; t = t / 52 | 0)
        n = Ou(t % 52) + n;
    return (Ou(t % 52) + n).replace(H0, "$1-$2")
}
var Ln = function(e, t) {
    for (var n = t.length; n; )
        e = 33 * e ^ t.charCodeAt(--n);
    return e
}
  , mf = function(e) {
    return Ln(5381, e)
};
function hf(e) {
    for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (Ir(n) && !ss(n))
            return !1
    }
    return !0
}
var U0 = mf("5.3.10")
  , B0 = function() {
    function e(t, n, r) {
        this.rules = t,
        this.staticRulesId = "",
        this.isStatic = (r === void 0 || r.isStatic) && hf(t),
        this.componentId = n,
        this.baseHash = Ln(U0, n),
        this.baseStyle = r,
        to.registerId(n)
    }
    return e.prototype.generateAndInjectStyles = function(t, n, r) {
        var i = this.componentId
          , o = [];
        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
        this.isStatic && !r.hash)
            if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
                o.push(this.staticRulesId);
            else {
                var l = vn(this.rules, t, n, r).join("")
                  , a = ra(Ln(this.baseHash, l) >>> 0);
                if (!n.hasNameForId(i, a)) {
                    var s = r(l, "." + a, void 0, i);
                    n.insertRules(i, a, s)
                }
                o.push(a),
                this.staticRulesId = a
            }
        else {
            for (var u = this.rules.length, m = Ln(this.baseHash, r.hash), h = "", v = 0; v < u; v++) {
                var x = this.rules[v];
                if (typeof x == "string")
                    h += x;
                else if (x) {
                    var w = vn(x, t, n, r)
                      , S = Array.isArray(w) ? w.join("") : w;
                    m = Ln(m, S + v),
                    h += S
                }
            }
            if (h) {
                var T = ra(m >>> 0);
                if (!n.hasNameForId(i, T)) {
                    var f = r(h, "." + T, void 0, i);
                    n.insertRules(i, T, f)
                }
                o.push(T)
            }
        }
        return o.join(" ")
    }
    ,
    e
}()
  , b0 = /^\s*\/\/.*$/gm
  , V0 = [":", "[", ".", "#"];
function W0(e) {
    var t, n, r, i, o = e === void 0 ? Gt : e, l = o.options, a = l === void 0 ? Gt : l, s = o.plugins, u = s === void 0 ? Ji : s, m = new p0(a), h = [], v = function(S) {
        function T(f) {
            if (f)
                try {
                    S(f + "}")
                } catch {}
        }
        return function(f, c, p, y, C, k, E, _, H, I) {
            switch (f) {
            case 1:
                if (H === 0 && c.charCodeAt(0) === 64)
                    return S(c + ";"),
                    "";
                break;
            case 2:
                if (_ === 0)
                    return c + "/*|*/";
                break;
            case 3:
                switch (_) {
                case 102:
                case 112:
                    return S(p[0] + c),
                    "";
                default:
                    return c + (I === 0 ? "/*|*/" : "")
                }
            case -2:
                c.split("/*|*/}").forEach(T)
            }
        }
    }(function(S) {
        h.push(S)
    }), x = function(S, T, f) {
        return T === 0 && V0.indexOf(f[n.length]) !== -1 || f.match(i) ? S : "." + t
    };
    function w(S, T, f, c) {
        c === void 0 && (c = "&");
        var p = S.replace(b0, "")
          , y = T && f ? f + " " + T + " { " + p + " }" : p;
        return t = c,
        n = T,
        r = new RegExp("\\" + n + "\\b","g"),
        i = new RegExp("(\\" + n + "\\b){2,}"),
        m(f || !T ? "" : T, y)
    }
    return m.use([].concat(u, [function(S, T, f) {
        S === 2 && f.length && f[0].lastIndexOf(n) > 0 && (f[0] = f[0].replace(r, x))
    }
    , v, function(S) {
        if (S === -2) {
            var T = h;
            return h = [],
            T
        }
    }
    ])),
    w.hash = u.length ? u.reduce(function(S, T) {
        return T.name || Vr(15),
        Ln(S, T.name)
    }, 5381).toString() : "",
    w
}
var vf = Ye.createContext();
vf.Consumer;
var gf = Ye.createContext()
  , Q0 = (gf.Consumer,
new to)
  , ia = W0();
function yf() {
    return He.useContext(vf) || Q0
}
function wf() {
    return He.useContext(gf) || ia
}
var xf = function() {
    function e(t, n) {
        var r = this;
        this.inject = function(i, o) {
            o === void 0 && (o = ia);
            var l = r.name + o.hash;
            i.hasNameForId(r.id, l) || i.insertRules(r.id, l, o(r.rules, l, "@keyframes"))
        }
        ,
        this.toString = function() {
            return Vr(12, String(r.name))
        }
        ,
        this.name = t,
        this.id = "sc-keyframes-" + t,
        this.rules = n
    }
    return e.prototype.getName = function(t) {
        return t === void 0 && (t = ia),
        this.name + t.hash
    }
    ,
    e
}()
  , Y0 = /([A-Z])/
  , G0 = /([A-Z])/g
  , K0 = /^ms-/
  , X0 = function(e) {
    return "-" + e.toLowerCase()
};
function Lu(e) {
    return Y0.test(e) ? e.replace(G0, X0).replace(K0, "-ms-") : e
}
var Mu = function(e) {
    return e == null || e === !1 || e === ""
};
function vn(e, t, n, r) {
    if (Array.isArray(e)) {
        for (var i, o = [], l = 0, a = e.length; l < a; l += 1)
            (i = vn(e[l], t, n, r)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
        return o
    }
    if (Mu(e))
        return "";
    if (ss(e))
        return "." + e.styledComponentId;
    if (Ir(e)) {
        if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t)
            return e;
        var s = e(t);
        return vn(s, t, n, r)
    }
    var u;
    return e instanceof xf ? n ? (e.inject(n, r),
    e.getName(r)) : e : na(e) ? function m(h, v) {
        var x, w, S = [];
        for (var T in h)
            h.hasOwnProperty(T) && !Mu(h[T]) && (Array.isArray(h[T]) && h[T].isCss || Ir(h[T]) ? S.push(Lu(T) + ":", h[T], ";") : na(h[T]) ? S.push.apply(S, m(h[T], T)) : S.push(Lu(T) + ": " + (x = T,
            (w = h[T]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || x in m0 || x.startsWith("--") ? String(w).trim() : w + "px") + ";"));
        return v ? [v + " {"].concat(S, ["}"]) : S
    }(e) : e.toString()
}
var $u = function(e) {
    return Array.isArray(e) && (e.isCss = !0),
    e
};
function cs(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    return Ir(e) || na(e) ? $u(vn(Nu(Ji, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : $u(vn(Nu(e, n)))
}
var kf = function(e, t, n) {
    return n === void 0 && (n = Gt),
    e.theme !== n.theme && e.theme || t || n.theme
}
  , q0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
  , Z0 = /(^-|-$)/g;
function il(e) {
    return e.replace(q0, "-").replace(Z0, "")
}
var ds = function(e) {
    return ra(mf(e) >>> 0)
};
function ci(e) {
    return typeof e == "string" && !0
}
var oa = function(e) {
    return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e)
}
  , J0 = function(e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype"
};
function em(e, t, n) {
    var r = e[n];
    oa(t) && oa(r) ? Sf(r, t) : e[n] = t
}
function Sf(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    for (var i = 0, o = n; i < o.length; i++) {
        var l = o[i];
        if (oa(l))
            for (var a in l)
                J0(a) && em(e, l[a], a)
    }
    return e
}
var fs = Ye.createContext();
fs.Consumer;
var ol = {};
function Cf(e, t, n) {
    var r = ss(e)
      , i = !ci(e)
      , o = t.attrs
      , l = o === void 0 ? Ji : o
      , a = t.componentId
      , s = a === void 0 ? function(c, p) {
        var y = typeof c != "string" ? "sc" : il(c);
        ol[y] = (ol[y] || 0) + 1;
        var C = y + "-" + ds("5.3.10" + y + ol[y]);
        return p ? p + "-" + C : C
    }(t.displayName, t.parentComponentId) : a
      , u = t.displayName
      , m = u === void 0 ? function(c) {
        return ci(c) ? "styled." + c : "Styled(" + Pu(c) + ")"
    }(e) : u
      , h = t.displayName && t.componentId ? il(t.displayName) + "-" + t.componentId : t.componentId || s
      , v = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l
      , x = t.shouldForwardProp;
    r && e.shouldForwardProp && (x = t.shouldForwardProp ? function(c, p, y) {
        return e.shouldForwardProp(c, p, y) && t.shouldForwardProp(c, p, y)
    }
    : e.shouldForwardProp);
    var w, S = new B0(n,h,r ? e.componentStyle : void 0), T = S.isStatic && l.length === 0, f = function(c, p) {
        return function(y, C, k, E) {
            var _ = y.attrs
              , H = y.componentStyle
              , I = y.defaultProps
              , pe = y.foldedComponentIds
              , ce = y.shouldForwardProp
              , ge = y.styledComponentId
              , Ve = y.target
              , Ee = function(A, g, B) {
                A === void 0 && (A = Gt);
                var N = vt({}, g, {
                    theme: A
                })
                  , ie = {};
                return B.forEach(function(W) {
                    var Y, F, ye, Ie = W;
                    for (Y in Ir(Ie) && (Ie = Ie(N)),
                    Ie)
                        N[Y] = ie[Y] = Y === "className" ? (F = ie[Y],
                        ye = Ie[Y],
                        F && ye ? F + " " + ye : F || ye) : Ie[Y]
                }),
                [N, ie]
            }(kf(C, He.useContext(fs), I) || Gt, C, _)
              , wt = Ee[0]
              , Le = Ee[1]
              , z = function(A, g, B, N) {
                var ie = yf()
                  , W = wf()
                  , Y = g ? A.generateAndInjectStyles(Gt, ie, W) : A.generateAndInjectStyles(B, ie, W);
                return Y
            }(H, E, wt)
              , $ = k
              , R = Le.$as || C.$as || Le.as || C.as || Ve
              , X = ci(R)
              , P = Le !== C ? vt({}, C, {}, Le) : C
              , O = {};
            for (var L in P)
                L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? O.as = P[L] : (ce ? ce(L, ju, R) : !X || ju(L)) && (O[L] = P[L]));
            return C.style && Le.style !== C.style && (O.style = vt({}, C.style, {}, Le.style)),
            O.className = Array.prototype.concat(pe, ge, z !== ge ? z : null, C.className, Le.className).filter(Boolean).join(" "),
            O.ref = $,
            He.createElement(R, O)
        }(w, c, p, T)
    };
    return f.displayName = m,
    (w = Ye.forwardRef(f)).attrs = v,
    w.componentStyle = S,
    w.displayName = m,
    w.shouldForwardProp = x,
    w.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ji,
    w.styledComponentId = h,
    w.target = r ? e.target : e,
    w.withComponent = function(c) {
        var p = t.componentId
          , y = function(k, E) {
            if (k == null)
                return {};
            var _, H, I = {}, pe = Object.keys(k);
            for (H = 0; H < pe.length; H++)
                _ = pe[H],
                E.indexOf(_) >= 0 || (I[_] = k[_]);
            return I
        }(t, ["componentId"])
          , C = p && p + "-" + (ci(c) ? c : il(Pu(c)));
        return Cf(c, vt({}, y, {
            attrs: v,
            componentId: C
        }), n)
    }
    ,
    Object.defineProperty(w, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(c) {
            this._foldedDefaultProps = r ? Sf({}, e.defaultProps, c) : c
        }
    }),
    Object.defineProperty(w, "toString", {
        value: function() {
            return "." + w.styledComponentId
        }
    }),
    i && E0(w, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }),
    w
}
var la = function(e) {
    return function t(n, r, i) {
        if (i === void 0 && (i = Gt),
        !os.isValidElementType(r))
            return Vr(1, String(r));
        var o = function() {
            return n(r, i, cs.apply(void 0, arguments))
        };
        return o.withConfig = function(l) {
            return t(n, r, vt({}, i, {}, l))
        }
        ,
        o.attrs = function(l) {
            return t(n, r, vt({}, i, {
                attrs: Array.prototype.concat(i.attrs, l).filter(Boolean)
            }))
        }
        ,
        o
    }(Cf, e)
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
    la[e] = la(e)
});
var tm = function() {
    function e(n, r) {
        this.rules = n,
        this.componentId = r,
        this.isStatic = hf(n),
        to.registerId(this.componentId + 1)
    }
    var t = e.prototype;
    return t.createStyles = function(n, r, i, o) {
        var l = o(vn(this.rules, r, i, o).join(""), "")
          , a = this.componentId + n;
        i.insertRules(a, a, l)
    }
    ,
    t.removeStyles = function(n, r) {
        r.clearRules(this.componentId + n)
    }
    ,
    t.renderStyles = function(n, r, i, o) {
        n > 2 && to.registerId(this.componentId + n),
        this.removeStyles(n, i),
        this.createStyles(n, r, i, o)
    }
    ,
    e
}();
function nm(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    var i = cs.apply(void 0, [e].concat(n))
      , o = "sc-global-" + ds(JSON.stringify(i))
      , l = new tm(i,o);
    function a(u) {
        var m = yf()
          , h = wf()
          , v = He.useContext(fs)
          , x = He.useRef(m.allocateGSInstance(o)).current;
        return m.server && s(x, u, m, v, h),
        He.useLayoutEffect(function() {
            if (!m.server)
                return s(x, u, m, v, h),
                function() {
                    return l.removeStyles(x, m)
                }
        }, [x, u, m, v, h]),
        null
    }
    function s(u, m, h, v, x) {
        if (l.isStatic)
            l.renderStyles(u, z0, h, x);
        else {
            var w = vt({}, m, {
                theme: kf(m, v, a.defaultProps)
            });
            l.renderStyles(u, w, h, x)
        }
    }
    return Ye.memo(a)
}
function ps(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    var i = cs.apply(void 0, [e].concat(n)).join("")
      , o = ds(i);
    return new xf(o,i)
}
const je = la
  , rm = nm`
    *{
        font-family: 'Poppins';
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: 0;
    }
    h1{
      font-family: 'Boldstrom' !important;
    }
    html, body{
        overflow-x: hidden;
        width: 100%;
    }
    a{
        text-decoration: none;
    }
    .display-flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }

  @font-face {
    font-family: 'Whopa';
    src: url('/public/fonts/Whoopass-m95.ttf') format('truetype');
  }

  @font-face {
  font-family: 'Sigana';
  src: url('/public/fonts/FontsFree-Net-calcio-demo-400.ttf') format('truetype');
  }

  @font-face {
  font-family: 'BOLDS';
  src: url('/public/fonts/BoldstromD.otf') format('OpenType');
  }


::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}




`
  , im = je.section`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`
  , om = ps`
  20% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(182, 89, 248, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  20% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(91, 233, 91, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  40% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(217, 229, 79, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  60% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(192, 72, 72, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  80% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(187, 71, 135, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  100% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(71, 127, 187, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
`
  , lm = je.header`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(71, 127, 187, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );

  background-size: 100%;
  background-position: center;

  transition: 0.4s ease;
  animation: ${om} 4s ease infinite;
  animation-play-state: ${e=>e.isAnimating ? "running" : "paused"};

  #info {
    color: rgba(130, 167, 255, 1);
    text-transform: uppercase;
    margin-top: 20px;
    font-weight: bolder;
  }
`
  , am = je.div`
  text-align: center;
  h1 {
    line-height: 0.8;
    font-size: 140px;
    color: white;
    letter-spacing: 0px;
  }

  p {
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 55px;
    }
  }
`;
var jf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Ru = Ye.createContext && Ye.createContext(jf)
  , Kt = globalThis && globalThis.__assign || function() {
    return Kt = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }
    ,
    Kt.apply(this, arguments)
}
  , sm = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
;
function Ef(e) {
    return e && e.map(function(t, n) {
        return Ye.createElement(t.tag, Kt({
            key: n
        }, t.attr), Ef(t.child))
    })
}
function Oe(e) {
    return function(t) {
        return Ye.createElement(um, Kt({
            attr: Kt({}, e.attr)
        }, t), Ef(e.child))
    }
}
function um(e) {
    var t = function(n) {
        var r = e.attr, i = e.size, o = e.title, l = sm(e, ["attr", "size", "title"]), a = i || n.size || "1em", s;
        return n.className && (s = n.className),
        e.className && (s = (s ? s + " " : "") + e.className),
        Ye.createElement("svg", Kt({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, l, {
            className: s,
            style: Kt(Kt({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && Ye.createElement("title", null, o), e.children)
    };
    return Ru !== void 0 ? Ye.createElement(Ru.Consumer, null, function(n) {
        return t(n)
    }) : t(jf)
}
function cm(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"
            }
        }]
    })(e)
}
ps`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
`;
const dm = ps`
  0% {
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
  0%{
    transform: translateY(0);
    opacity: 1;
  }
`
  , fm = je.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  p {
    color: white;
    font-size: 10px;
    font-weight: 300;
    margin-top: 5px;
  }
`
  , pm = je.div`
  width: 20px;
  height: 40px;
  border: 1px solid white;
  border-radius: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
  , mm = je.div`
  width: 2px;
  background: white;
  height: 8px;
  border-radius: 10px;

  margin-top: 5px;

  animation: ${dm} 2s ease infinite;
  animation-delay: 1s;
`
  , hm = ()=>{
    const e = ()=>{
        window.scroll({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }
    ;
    return d.jsx(fm, {
        onClick: e,
        children: d.jsx(pm, {
            children: d.jsx(mm, {})
        })
    })
}
  , vm = je.nav`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10px;

  z-index: 99999999;

  a {
    margin: 0 8px;
    color: white;
    font-weight: 300;

    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: 0.4s ease;
    padding-bottom: 2px;

    :hover {
      border-bottom-color: white;

      .container-header {
        background-position: 120%;
      }
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 15px;
    }
  }
`
  , gm = ({handleHoverLink: e, handleLeaveLink: t})=>{
    const n = r=>{
        const o = document.getElementById(r).getBoundingClientRect()
          , l = window.pageYOffset || document.documentElement.scrollTop
          , a = o.top + l;
        window.scrollTo({
            top: a,
            behavior: "smooth"
        })
    }
    ;
    return d.jsxs(vm, {
        children: [d.jsx("a", {
            onClick: ()=>n("about"),
            onMouseEnter: e,
            onMouseLeave: t,
            children: "Sobre"
        }), d.jsx("a", {
            onClick: ()=>n("projects"),
            onMouseEnter: e,
            onMouseLeave: t,
            children: "Projetos"
        }), d.jsx("a", {
            onClick: ()=>n("skills"),
            onMouseEnter: e,
            onMouseLeave: t,
            children: "Habilidades"
        }), d.jsx("a", {
            onClick: ()=>n("services"),
            onMouseEnter: e,
            onMouseLeave: t,
            children: "Serviços"
        }), d.jsx("a", {
            onClick: ()=>n("contact"),
            onMouseEnter: e,
            onMouseLeave: t,
            children: "Contato"
        })]
    })
}
  , ym = ()=>{
    const e = He.useRef(null)
      , [t,n] = He.useState(!1)
      , r = ()=>{
        e.current && (e.current.style.backgroundSize = "150%")
    }
      , i = ()=>{
        e.current && (e.current.style.backgroundSize = "100%")
    }
      , o = ()=>{
        e.current && (e.current.style.backgroundSize = "120%")
    }
      , l = ()=>{
        e.current && (e.current.style.backgroundSize = "100%")
    }
    ;
    return d.jsxs(lm, {
        ref: e,
        isAnimating: t,
        children: [d.jsx(gm, {
            handleHoverLink: o,
            handleLeaveLink: l
        }), d.jsxs(am, {
            onMouseEnter: r,
            onMouseLeave: i,
            onTouchStart: r,
            onTouchEnd: i,
            className: "content-header",
            children: [d.jsx("p", {
                children: "OI 👋, EU SOU"
            }), d.jsxs("div", {
                className: "text",
                children: [d.jsx("h1", {
                    children: "PAULO"
                }), d.jsx("h1", {
                    children: "SARMANHO"
                })]
            }), d.jsx("p", {
                id: "info",
                children: "Desenvolvedor Full Stack"
            })]
        }), d.jsx(hm, {})]
    })
}
  , wm = je.section`
  width: 100%;

  background: rgb(202, 210, 255);
  background: linear-gradient(
    0deg,
    rgba(202, 210, 255, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-top: 90px;
  padding-bottom: 53px;

  h1 {
    color: rgba(110, 147, 227, 1);
    font-size: 80px;
    line-height: 0.9;
    font-weight: bolder;
    text-transform: uppercase;
  }

  #title_info {
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 65px;
    }
  }
`
  , xm = je.div`
  width: 90%;
  z-index: 9;

  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  grid-template-columns: 1fr 1fr;
  grid-gap: 22px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`
  , km = je.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 999999999999999;

  background: rgb(3, 8, 16);
  border-radius: 8px;

  color: rgba(71, 127, 187, 1);

  h2 {
    z-index: 999999999999999;
    text-transform: uppercase;
  }

  position: relative;

  .icons {
    font-size: 15px;
    color: white;

    margin-left: 15px;

    svg {
      margin-right: 5px;
    }
  }

  p {
    opacity: 0.8;
    text-align: start;
  }

  margin: 0 9px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;

    border-radius: 8px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .title {
    width: 95%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 14px;
  }

  padding-bottom: 10px;

  #desc {
    font-size: 13px;
    font-weight: 300;
    text-align: start;
  }

  .info {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;

    #repo {
      display: none;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;

      button + button {
        margin-left: 5px;
      }

      button {
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 3px;
        cursor: pointer;

        background-color: transparent;
        border: 1px solid rgb(225, 214, 255);
        color: rgb(225, 214, 255);

        padding: 5px 10px;
        height: 40px;

        transition: 0.4s ease;

        #repo {
          color: rgb(225, 214, 255);
        }

        :hover {
          background-color: rgb(225, 214, 255);
          color: rgb(22, 22, 22);
          border-radius: 5px;

          #repo {
            color: rgb(22, 22, 22);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: auto;

    #repo {
      display: block !important;
      color: rgb(225, 214, 255);
    }

    #desc {
      margin-right: 5px;
    }

    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    
        border-radius: 8px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    .buttons {
      flex-direction: column;

      width: 100%;
      button {
        width: 100%;
        margin-left: 0 !important;
      }

      button + button {
        margin-top: 5px;
      }

      svg {
        display: none;
      }
    }
  }
`;
function Sm(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 13h5"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 8v8"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"
            }
        }]
    })(e)
}
function Cm(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7.5 7.5c3.5 -1 5.5 -1 9 0"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7 16.5c3.5 1 6.5 1 10 0"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"
            }
        }]
    })(e)
}
function ms(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            }
        }]
    })(e)
}
function jm(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 4l-4 4l-4 -4"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 6.5l8 7.5l8 -7.5"
            }
        }]
    })(e)
}
function _f(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 11l0 5"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 8l0 .01"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 16l0 -5"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 16v-3a2 2 0 0 0 -4 0"
            }
        }]
    })(e)
}
function Em(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
            }
        }]
    })(e)
}
function _m(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 3v4a1 1 0 0 0 1 1h4"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
            }
        }]
    })(e)
}
const di = ({imgsrc: e, title: t, techs: n, desc: r, links: i})=>{
    const o = ()=>{
        window.open(i[1], "_blank")
    }
      , l = ()=>{
        window.open(i[0], "_blank")
    }
    ;
    return d.jsxs(km, {
        "data-aos": "fade-up",
        children: [d.jsx("img", {
            src: e
        }), d.jsxs("div", {
            className: "title",
            children: [d.jsx("h2", {
                children: t
            }), d.jsx("div", {
                className: "icons",
                children: n
            })]
        }), d.jsxs("div", {
            className: "info",
            children: [d.jsx("p", {
                id: "desc",
                children: r
            }), d.jsxs("div", {
                className: "buttons",
                children: [d.jsx("button", {
                    onClick: ()=>o(),
                    children: "Ver Projeto"
                }), d.jsxs("button", {
                    onClick: ()=>l(),
                    children: [d.jsx(ms, {}), d.jsx("p", {
                        id: "repo",
                        children: "Repositorio"
                    })]
                })]
            })]
        })]
    })
}
;
var zf = "Expected a function"
  , Au = 0 / 0
  , zm = "[object Symbol]"
  , Nm = /^\s+|\s+$/g
  , Pm = /^[-+]0x[0-9a-f]+$/i
  , Tm = /^0b[01]+$/i
  , Om = /^0o[0-7]+$/i
  , Lm = parseInt
  , Mm = typeof It == "object" && It && It.Object === Object && It
  , $m = typeof self == "object" && self && self.Object === Object && self
  , Rm = Mm || $m || Function("return this")()
  , Am = Object.prototype
  , Im = Am.toString
  , Dm = Math.max
  , Fm = Math.min
  , ll = function() {
    return Rm.Date.now()
};
function Hm(e, t, n) {
    var r, i, o, l, a, s, u = 0, m = !1, h = !1, v = !0;
    if (typeof e != "function")
        throw new TypeError(zf);
    t = Iu(t) || 0,
    no(n) && (m = !!n.leading,
    h = "maxWait"in n,
    o = h ? Dm(Iu(n.maxWait) || 0, t) : o,
    v = "trailing"in n ? !!n.trailing : v);
    function x(k) {
        var E = r
          , _ = i;
        return r = i = void 0,
        u = k,
        l = e.apply(_, E),
        l
    }
    function w(k) {
        return u = k,
        a = setTimeout(f, t),
        m ? x(k) : l
    }
    function S(k) {
        var E = k - s
          , _ = k - u
          , H = t - E;
        return h ? Fm(H, o - _) : H
    }
    function T(k) {
        var E = k - s
          , _ = k - u;
        return s === void 0 || E >= t || E < 0 || h && _ >= o
    }
    function f() {
        var k = ll();
        if (T(k))
            return c(k);
        a = setTimeout(f, S(k))
    }
    function c(k) {
        return a = void 0,
        v && r ? x(k) : (r = i = void 0,
        l)
    }
    function p() {
        a !== void 0 && clearTimeout(a),
        u = 0,
        r = s = i = a = void 0
    }
    function y() {
        return a === void 0 ? l : c(ll())
    }
    function C() {
        var k = ll()
          , E = T(k);
        if (r = arguments,
        i = this,
        s = k,
        E) {
            if (a === void 0)
                return w(s);
            if (h)
                return a = setTimeout(f, t),
                x(s)
        }
        return a === void 0 && (a = setTimeout(f, t)),
        l
    }
    return C.cancel = p,
    C.flush = y,
    C
}
function Um(e, t, n) {
    var r = !0
      , i = !0;
    if (typeof e != "function")
        throw new TypeError(zf);
    return no(n) && (r = "leading"in n ? !!n.leading : r,
    i = "trailing"in n ? !!n.trailing : i),
    Hm(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}
function no(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}
function Bm(e) {
    return !!e && typeof e == "object"
}
function bm(e) {
    return typeof e == "symbol" || Bm(e) && Im.call(e) == zm
}
function Iu(e) {
    if (typeof e == "number")
        return e;
    if (bm(e))
        return Au;
    if (no(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = no(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = e.replace(Nm, "");
    var n = Tm.test(e);
    return n || Om.test(e) ? Lm(e.slice(2), n ? 2 : 8) : Pm.test(e) ? Au : +e
}
var Vm = Um;
const Wm = Dr(Vm);
var Qm = "Expected a function"
  , Du = 0 / 0
  , Ym = "[object Symbol]"
  , Gm = /^\s+|\s+$/g
  , Km = /^[-+]0x[0-9a-f]+$/i
  , Xm = /^0b[01]+$/i
  , qm = /^0o[0-7]+$/i
  , Zm = parseInt
  , Jm = typeof It == "object" && It && It.Object === Object && It
  , eh = typeof self == "object" && self && self.Object === Object && self
  , th = Jm || eh || Function("return this")()
  , nh = Object.prototype
  , rh = nh.toString
  , ih = Math.max
  , oh = Math.min
  , al = function() {
    return th.Date.now()
};
function lh(e, t, n) {
    var r, i, o, l, a, s, u = 0, m = !1, h = !1, v = !0;
    if (typeof e != "function")
        throw new TypeError(Qm);
    t = Fu(t) || 0,
    aa(n) && (m = !!n.leading,
    h = "maxWait"in n,
    o = h ? ih(Fu(n.maxWait) || 0, t) : o,
    v = "trailing"in n ? !!n.trailing : v);
    function x(k) {
        var E = r
          , _ = i;
        return r = i = void 0,
        u = k,
        l = e.apply(_, E),
        l
    }
    function w(k) {
        return u = k,
        a = setTimeout(f, t),
        m ? x(k) : l
    }
    function S(k) {
        var E = k - s
          , _ = k - u
          , H = t - E;
        return h ? oh(H, o - _) : H
    }
    function T(k) {
        var E = k - s
          , _ = k - u;
        return s === void 0 || E >= t || E < 0 || h && _ >= o
    }
    function f() {
        var k = al();
        if (T(k))
            return c(k);
        a = setTimeout(f, S(k))
    }
    function c(k) {
        return a = void 0,
        v && r ? x(k) : (r = i = void 0,
        l)
    }
    function p() {
        a !== void 0 && clearTimeout(a),
        u = 0,
        r = s = i = a = void 0
    }
    function y() {
        return a === void 0 ? l : c(al())
    }
    function C() {
        var k = al()
          , E = T(k);
        if (r = arguments,
        i = this,
        s = k,
        E) {
            if (a === void 0)
                return w(s);
            if (h)
                return a = setTimeout(f, t),
                x(s)
        }
        return a === void 0 && (a = setTimeout(f, t)),
        l
    }
    return C.cancel = p,
    C.flush = y,
    C
}
function aa(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}
function ah(e) {
    return !!e && typeof e == "object"
}
function sh(e) {
    return typeof e == "symbol" || ah(e) && rh.call(e) == Ym
}
function Fu(e) {
    if (typeof e == "number")
        return e;
    if (sh(e))
        return Du;
    if (aa(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = aa(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = e.replace(Gm, "");
    var n = Xm.test(e);
    return n || qm.test(e) ? Zm(e.slice(2), n ? 2 : 8) : Km.test(e) ? Du : +e
}
var uh = lh;
const Hu = Dr(uh);
var Nf = function() {};
function Pf(e) {
    var t = void 0
      , n = void 0
      , r = void 0;
    for (t = 0; t < e.length; t += 1)
        if (n = e[t],
        n.dataset && n.dataset.aos || (r = n.children && Pf(n.children),
        r))
            return !0;
    return !1
}
function ch(e) {
    e && e.forEach(function(t) {
        var n = Array.prototype.slice.call(t.addedNodes)
          , r = Array.prototype.slice.call(t.removedNodes)
          , i = n.concat(r);
        if (Pf(i))
            return Nf()
    })
}
function Tf() {
    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
}
function dh() {
    return !!Tf()
}
function fh(e, t) {
    var n = window.document
      , r = Tf()
      , i = new r(ch);
    Nf = t,
    i.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
    })
}
var Uu = {
    isSupported: dh,
    ready: fh
}
  , ph = function(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
  , mh = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , hh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , vh = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
  , gh = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
  , yh = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
  , wh = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function Bu() {
    return navigator.userAgent || navigator.vendor || window.opera || ""
}
var xh = function() {
    function e() {
        ph(this, e)
    }
    return mh(e, [{
        key: "phone",
        value: function() {
            var n = Bu();
            return !!(vh.test(n) || gh.test(n.substr(0, 4)))
        }
    }, {
        key: "mobile",
        value: function() {
            var n = Bu();
            return !!(yh.test(n) || wh.test(n.substr(0, 4)))
        }
    }, {
        key: "tablet",
        value: function() {
            return this.mobile() && !this.phone()
        }
    }, {
        key: "ie11",
        value: function() {
            return "-ms-scroll-limit"in document.documentElement.style && "-ms-ime-align"in document.documentElement.style
        }
    }]),
    e
}()
  , Ni = new xh
  , kh = function(t, n) {
    return n && n.forEach(function(r) {
        return t.classList.add(r)
    })
}
  , Sh = function(t, n) {
    return n && n.forEach(function(r) {
        return t.classList.remove(r)
    })
}
  , fi = function(t, n) {
    var r = void 0;
    return Ni.ie11() ? (r = document.createEvent("CustomEvent"),
    r.initCustomEvent(t, !0, !0, {
        detail: n
    })) : r = new CustomEvent(t,{
        detail: n
    }),
    document.dispatchEvent(r)
}
  , Ch = function(t, n) {
    var r = t.options
      , i = t.position
      , o = t.node;
    t.data;
    var l = function() {
        t.animated && (Sh(o, r.animatedClassNames),
        fi("aos:out", o),
        t.options.id && fi("aos:in:" + t.options.id, o),
        t.animated = !1)
    }
      , a = function() {
        t.animated || (kh(o, r.animatedClassNames),
        fi("aos:in", o),
        t.options.id && fi("aos:in:" + t.options.id, o),
        t.animated = !0)
    };
    r.mirror && n >= i.out && !r.once ? l() : n >= i.in ? a() : t.animated && !r.once && l()
}
  , bu = function(t) {
    return t.forEach(function(n, r) {
        return Ch(n, window.pageYOffset)
    })
}
  , Of = function(t) {
    for (var n = 0, r = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
        n += t.offsetLeft - (t.tagName != "BODY" ? t.scrollLeft : 0),
        r += t.offsetTop - (t.tagName != "BODY" ? t.scrollTop : 0),
        t = t.offsetParent;
    return {
        top: r,
        left: n
    }
}
  , Xt = function(e, t, n) {
    var r = e.getAttribute("data-aos-" + t);
    if (typeof r < "u") {
        if (r === "true")
            return !0;
        if (r === "false")
            return !1
    }
    return r || n
}
  , jh = function(t, n, r) {
    var i = window.innerHeight
      , o = Xt(t, "anchor")
      , l = Xt(t, "anchor-placement")
      , a = Number(Xt(t, "offset", l ? 0 : n))
      , s = l || r
      , u = t;
    o && document.querySelectorAll(o) && (u = document.querySelectorAll(o)[0]);
    var m = Of(u).top - i;
    switch (s) {
    case "top-bottom":
        break;
    case "center-bottom":
        m += u.offsetHeight / 2;
        break;
    case "bottom-bottom":
        m += u.offsetHeight;
        break;
    case "top-center":
        m += i / 2;
        break;
    case "center-center":
        m += i / 2 + u.offsetHeight / 2;
        break;
    case "bottom-center":
        m += i / 2 + u.offsetHeight;
        break;
    case "top-top":
        m += i;
        break;
    case "bottom-top":
        m += i + u.offsetHeight;
        break;
    case "center-top":
        m += i + u.offsetHeight / 2;
        break
    }
    return m + a
}
  , Eh = function(t, n) {
    var r = Xt(t, "anchor")
      , i = Xt(t, "offset", n)
      , o = t;
    r && document.querySelectorAll(r) && (o = document.querySelectorAll(r)[0]);
    var l = Of(o).top;
    return l + o.offsetHeight - i
}
  , _h = function(t, n) {
    return t.forEach(function(r, i) {
        var o = Xt(r.node, "mirror", n.mirror)
          , l = Xt(r.node, "once", n.once)
          , a = Xt(r.node, "id")
          , s = n.useClassNames && r.node.getAttribute("data-aos")
          , u = [n.animatedClassName].concat(s ? s.split(" ") : []).filter(function(m) {
            return typeof m == "string"
        });
        n.initClassName && r.node.classList.add(n.initClassName),
        r.position = {
            in: jh(r.node, n.offset, n.anchorPlacement),
            out: o && Eh(r.node, n.offset)
        },
        r.options = {
            once: l,
            mirror: o,
            animatedClassNames: u,
            id: a
        }
    }),
    t
}
  , Lf = function() {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function(t) {
        return {
            node: t
        }
    })
}
  , St = []
  , Vu = !1
  , oe = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50
}
  , Mf = function() {
    return document.all && !window.atob
}
  , zh = function() {
    return St = _h(St, oe),
    bu(St),
    window.addEventListener("scroll", Wm(function() {
        bu(St, oe.once)
    }, oe.throttleDelay)),
    St
}
  , on = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    t && (Vu = !0),
    Vu && zh()
}
  , $f = function() {
    if (St = Lf(),
    Af(oe.disable) || Mf())
        return Rf();
    on()
}
  , Rf = function() {
    St.forEach(function(t, n) {
        t.node.removeAttribute("data-aos"),
        t.node.removeAttribute("data-aos-easing"),
        t.node.removeAttribute("data-aos-duration"),
        t.node.removeAttribute("data-aos-delay"),
        oe.initClassName && t.node.classList.remove(oe.initClassName),
        oe.animatedClassName && t.node.classList.remove(oe.animatedClassName)
    })
}
  , Af = function(t) {
    return t === !0 || t === "mobile" && Ni.mobile() || t === "phone" && Ni.phone() || t === "tablet" && Ni.tablet() || typeof t == "function" && t() === !0
}
  , Nh = function(t) {
    return oe = hh(oe, t),
    St = Lf(),
    !oe.disableMutationObserver && !Uu.isSupported() && (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
    oe.disableMutationObserver = !0),
    oe.disableMutationObserver || Uu.ready("[data-aos]", $f),
    Af(oe.disable) || Mf() ? Rf() : (document.querySelector("body").setAttribute("data-aos-easing", oe.easing),
    document.querySelector("body").setAttribute("data-aos-duration", oe.duration),
    document.querySelector("body").setAttribute("data-aos-delay", oe.delay),
    ["DOMContentLoaded", "load"].indexOf(oe.startEvent) === -1 ? document.addEventListener(oe.startEvent, function() {
        on(!0)
    }) : window.addEventListener("load", function() {
        on(!0)
    }),
    oe.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 && on(!0),
    window.addEventListener("resize", Hu(on, oe.debounceDelay, !0)),
    window.addEventListener("orientationchange", Hu(on, oe.debounceDelay, !0)),
    St)
}
  , Ph = {
    init: Nh,
    refresh: on,
    refreshHard: $f
};
function Wu(e) {
    return Oe({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "title",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
            }
        }]
    })(e)
}
function pi(e) {
    return Oe({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "title",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            }
        }]
    })(e)
}
function mi(e) {
    return Oe({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "title",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"
            }
        }]
    })(e)
}
function Qu(e) {
    return Oe({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "title",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            }
        }]
    })(e)
}
const Th = ()=>(He.useEffect(()=>{
    Ph.init({
        duration: 2e3
    })
}
, []),
d.jsxs(wm, {
    id: "projects",
    children: [d.jsx("h1", {
        children: "PROJETOS"
    }), d.jsx("p", {
        id: "title_info",
        children: "Confira alguns dos meus projetos"
    }), d.jsxs(xm, {
        children: [d.jsx(di, {
            imgsrc: "/images/PZ.png",
            title: "Site de Pizzaria",
            links: ["https://github.com/PauloSarmanhoDev/pizzaria", "https://pizzaria-do-paulo.netlify.app/"],
            techs: d.jsxs(d.Fragment, {
                children: [d.jsx(pi, {}), " ", d.jsx(mi, {}), " ", d.jsx(Qu, {})]
            }),
            desc: "Site fictício de uma pizzaria om informações sobre ela."
        }), d.jsx(di, {
            imgsrc: "/images/CH.png",
            title: "Cripto Hoje",
            links: ["https://github.com/PauloSarmanhoDev/cotacao-cripto", "https://criptoshoje.netlify.app/"],
            techs: d.jsxs(d.Fragment, {
                children: [d.jsx(pi, {}), " ", d.jsx(mi, {}), " ", d.jsx(Wu, {})]
            }),
            desc: "Um site que exibe a cotação de cripto moedas em tempo real usando uma API."
        }), d.jsx(di, {
            imgsrc: "/images/CRUD.png",
            title: "CRUD",
            links: ["https://github.com/PauloSarmanhoDev/Lista-de-clientes-localstorage", "https://lista-de-clientes-localstorage-paulo.netlify.app/"],
            techs: d.jsxs(d.Fragment, {
                children: [d.jsx(pi, {}), " ", d.jsx(mi, {}), " ", d.jsx(Qu, {})]
            }),
            desc: "Crud usando com funcionalidades de inserção, edição e exclusão."
        }), d.jsx(di, {
            imgsrc: "/images/PMDR.png",
            title: "Pomodoro",
            links: ["https://github.com/PauloSarmanhoDev/pomodoro", "https://pomodoro-paulo.netlify.app/"],
            techs: d.jsxs(d.Fragment, {
                children: [d.jsx(pi, {}), " ", d.jsx(mi, {}), " ", d.jsx(Wu, {})]
            }),
            desc: "Site da ferramenta de gerenciamento de tempo. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos. ."
        }), d.jsx(di, {
            imgsrc: "/images/FB.png",
            title: "Flappy Bird clone",
            links: ["https://github.com/PauloSarmanhoDev/Flappy-Bird", "https://flappybird-clone-paulo.netlify.app/"],
            techs: d.jsxs(d.Fragment, {
                children: [d.jsx(pi, {}), " ", d.jsx(mi, {}), " ", d.jsx(Wu, {})]
            }),
            desc: "Estudo que fiz como forma de aprendizagem recriando o jogo flappy bird o mais fiel possível."
        }), d.jsx(di, {
            imgsrc: "",
            title: "Mais projetos",
            links: ["", ""],
            techs: d.jsxs(d.Fragment, {
                children: [d.jsx(pi, {}), " ", d.jsx(mi, {}), " ", d.jsx(Wu, {})]
            }),
            desc: "Veja meus outros projetos."
        })]
    })]
}))
  , Oh = je.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: white;

  #a5 {
    width: 100%;
    height: 3px;
    background-color: ${e=>e.colored};
    margin-top: 3px;
  }
`
  , sl = ({color: e})=>d.jsx(Oh, {
    colored: e,
    children: d.jsx("div", {
        id: "a5"
    })
})
  , Lh = je.section`
  width: 100%;
  height: 110vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-bottom: 40px;

  z-index: 9999999999999999;

  background-color: rgba(11, 11, 11, 1);

  padding-top: 30px;

  h1 {
    color: rgba(71, 127, 187, 1);
    font-size: 80px;
    line-height: 1.1;
    font-weight: bolder;
    text-transform: uppercase;
  }

  #title_info {
    margin-bottom: 70px;
    color: #f5f5f5;
  }

  @media (max-width: 768px) {
    height: auto;

    h1 {
      font-size: 65px;
    }
  }
`
  , Mh = je.section`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  gap: 40px;

  .item {
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    text-align: center;

    svg {
      color: rgba(70, 107, 187, 1);
      fill: rgba(70, 107, 187, 1);

      font-size: 40px;
    }

    h2 {
      color: rgba(57, 157, 237, 1);
    }

    p {
      color: #f5f5f5;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
function $h(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"
            }
        }]
    })(e)
}
function Rh(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20.97 7.27a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44l-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"
            }
        }]
    })(e)
}
function Ah(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M744 64H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H288V136h448v752z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M288 888h448V136H288v752zm224-142c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M472 786a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"
            }
        }]
    })(e)
}
function Ih(e) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M595.344 64.72h.176-.176zm0 0l-72.207 379.377 261.584.88L428.657 959.28l72.208-417.376-261.568-.912zm.049-63.999c-1.728 0-3.455.063-5.151.19-11.296.913-18.785 4.689-27.664 10.657a64.304 64.304 0 0 0-13.392 11.936 56.688 56.688 0 0 0-3.297 4.288L187.281 502.4c-14.16 19.408-16.24 45.025-5.36 66.433 10.864 21.408 32.832 34.976 56.912 35.152l184.736 1.344-58.08 342.192c-5.52 29.408 10.16 58.72 37.76 70.528a64.19 64.19 0 0 0 25.391 5.216c20.112 0 36.64-9.408 49.041-26.4L836.737 482.56c14.16-19.409 16.225-45.057 5.36-66.433-10.864-21.408-32.832-34.977-56.912-35.152l-184.736-.32 57.456-300.88a62.46 62.46 0 0 0 1.825-15.056c0-34.624-27.569-62.848-62.065-63.968-.767-.032-1.52-.032-2.271-.032z"
            }
        }]
    })(e)
}
const Dh = ()=>d.jsxs(Lh, {
    id: "services",
    children: [d.jsx("h1", {
        children: "Serviços"
    }), d.jsx("p", {
        id: "title_info",
        children: "Um pouco dos serviços que tenho a oferecer!"
    }), d.jsxs(Mh, {
        children: [d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx($h, {}), d.jsx("h2", {
                children: "Desenvolvimento de Site"
            }), d.jsx("p", {
                children: "Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React ou Vue.js."
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx(Rh, {}), d.jsx("h2", {
                children: "UI/UX Designer"
            }), d.jsx("p", {
                children: "Crio layouts e designs atraentes para interfaces de usuário, garantindo uma experiência visualmente agradável e intuitiva."
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx(Ah, {}), d.jsx("h2", {
                children: "Desenvolvimento de Mobile"
            }), d.jsx("p", {
                children: "Com Flutter ou React Native, Crio aplicativos móveis nativos ou híbridos para iOS, Android e Web."
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx(Sm, {}), d.jsx("h2", {
                children: "Desenvolvimento de APIs"
            }), d.jsx("p", {
                children: "Projeto APIs para permitir a comunicação entre diferentes sistemas, fornecendo acesso a dados e funcionalidades específicas."
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx(cm, {}), d.jsx("h2", {
                children: "Integração de sistemas"
            }), d.jsx("p", {
                children: "Integro diferentes sistemas e tecnologias, garantindo a comunicação eficiente e a transferência de dados entre eles."
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx(Ih, {}), d.jsx("h2", {
                children: "Consultoria em tecnologia"
            }), d.jsx("p", {
                children: "Ofereço consultoria para ajudar os clientes a tomar decisões estratégicas em relação às tecnologias, arquiteturas."
            })]
        })]
    })]
})
  , Fh = je.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    color: rgba(71, 127, 187, 1);
    font-size: 80px;
    line-height: 0.9;
    font-weight: bolder;
    text-transform: uppercase;
  }

  #title_info {
    margin-bottom: 70px;
  }

  z-index: 9999999999999999;

  background-color: rgba(202, 210, 255, 1);
  position: relative;
  padding-top: 20px;

  .techs {
    img {
      height: 70px;
    }

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 45px;

    .item {
      margin-left: 25px;

      width: 70px;
      p {
        font-size: xx-small;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;

        transition: 0.4s ease;

        color: rgba(11, 11, 11, 1);
      }

      :hover {
        p {
          transform: scale(1.07);
          background-color: rgba(71, 127, 187, 1);
          color: white;
        }
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
    }
    .techs + .techs {
      margin-top: 10px !important;
    }
    .techs {
      width: 100%;
      flex-wrap: wrap;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;

        flex-direction: column;
        margin-bottom: 30px;
        p {
          text-align: center;
        }
      }
      img {
        height: 45px;
      }
    }
  }
`
  , Hh = ()=>d.jsxs(Fh, {
    id: "skills",
    children: [d.jsx("h1", {
        children: "Habilidades"
    }), d.jsx("p", {
        id: "title_info",
        children: "Algumas das tecnologias que eu utilizo"
        }), d.jsxs("div", {
        className: "techs",
        children: [
            d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            }), d.jsx("p", {
                children: "Html"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            }), d.jsx("p", {
                children: "Css"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            }), d.jsx("p", {
                children: "JAVASCRIPT"           
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            }), d.jsx("p", {
                children: "Typescript"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            }), d.jsx("p", {
                children: "React"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor"
            }), d.jsx("p", {
                children: "Angular"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://icongr.am/devicon/dot-net-original-wordmark.svg?size=128&color=currentColor"
            }), d.jsx("p", {
                children: ".Net"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "/images/flutter-icon.png"
            }), d.jsx("p", {
                children: "Flutter"
            })]
        })]


    }), d.jsxs("div", {
        className: "techs",
        children: [d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            }), d.jsx("p", {
                children: "Node"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            }), d.jsx("p", {
                children: "MongoDb"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            }), d.jsx("p", {
                children: "firebase"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            }), d.jsx("p", {
                children: "mysql"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            }), d.jsx("p", {
                children: "Figma"
            })]
        }), d.jsxs("div", {
            className: "item",
            "data-aos": "fade-up",
            children: [d.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            }), d.jsx("p", {
                children: "github"
            })]
        

        })]
    })]
})
  , Uh = je.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  button {
    width: 50%;
    height: 55px;

    border-radius: 5px;
    color: rgba(101, 157, 237, 1);
    background-color: rgba(71, 127, 187, 1);

    margin: 30px 0;
    cursor: pointer;
  }

  h1 {
    color: rgba(71, 127, 187, 1);
    font-size: 80px;
    line-height: 0.9;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .links {
    width: 60%;

    font-weight: 300;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 0;
    border-radius: 5px;

    nav {
      margin-top: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  a {
    font-size: 50px;
    margin: 0 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(0, 0, 0, 0.3);

    padding: 10px 19px;
    border-radius: 5px;

    font-size: 50px;

    cursor: pointer;
    transition: 0.4s ease;

    :hover {
      background-color: rgba(20, 20, 20, 1);
      color: rgba(101, 157, 237, 1);
    }

    :active {
      color: rgba(160, 255, 109, 1);
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  .text {
    text-align: start;
    margin-left: 5px;

    white-space: nowrap;
  }

  #title_info {
    margin-bottom: 20px;
    width: 60%;
    text-align: center;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 65px;
      text-align: center;
    }
    #title_info {
      width: 85%;
      margin-top: 5px;
    }

    height: auto;

    padding-top: 60px;

    nav {
      flex-direction: column;

      a {
        min-width: 100%;
        margin-bottom: 8px;
        margin-right: 0 !important;
        justify-content: flex-start !important;

        background-color: transparent;
        color: rgba(20, 20, 20, 1);
      }
    }
  }
`;
var Bh = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
        return function() {}
        ;
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
        n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
        t.blur();
        break;
    default:
        t = null;
        break
    }
    return e.removeAllRanges(),
    function() {
        e.type === "Caret" && e.removeAllRanges(),
        e.rangeCount || n.forEach(function(i) {
            e.addRange(i)
        }),
        t && t.focus()
    }
}
  , bh = Bh
  , Yu = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
}
  , Vh = "Copy to clipboard: #{key}, Enter";
function Wh(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t)
}
function Qh(e, t) {
    var n, r, i, o, l, a, s = !1;
    t || (t = {}),
    n = t.debug || !1;
    try {
        i = bh(),
        o = document.createRange(),
        l = document.getSelection(),
        a = document.createElement("span"),
        a.textContent = e,
        a.ariaHidden = "true",
        a.style.all = "unset",
        a.style.position = "fixed",
        a.style.top = 0,
        a.style.clip = "rect(0, 0, 0, 0)",
        a.style.whiteSpace = "pre",
        a.style.webkitUserSelect = "text",
        a.style.MozUserSelect = "text",
        a.style.msUserSelect = "text",
        a.style.userSelect = "text",
        a.addEventListener("copy", function(m) {
            if (m.stopPropagation(),
            t.format)
                if (m.preventDefault(),
                typeof m.clipboardData > "u") {
                    n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                    var h = Yu[t.format] || Yu.default;
                    window.clipboardData.setData(h, e)
                } else
                    m.clipboardData.clearData(),
                    m.clipboardData.setData(t.format, e);
            t.onCopy && (m.preventDefault(),
            t.onCopy(m.clipboardData))
        }),
        document.body.appendChild(a),
        o.selectNodeContents(a),
        l.addRange(o);
        var u = document.execCommand("copy");
        if (!u)
            throw new Error("copy command was unsuccessful");
        s = !0
    } catch (m) {
        n && console.error("unable to copy using execCommand: ", m),
        n && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(t.format || "text", e),
            t.onCopy && t.onCopy(window.clipboardData),
            s = !0
        } catch (h) {
            n && console.error("unable to copy using clipboardData: ", h),
            n && console.error("falling back to prompt"),
            r = Wh("message"in t ? t.message : Vh),
            window.prompt(r, e)
        }
    } finally {
        l && (typeof l.removeRange == "function" ? l.removeRange(o) : l.removeAllRanges()),
        a && document.body.removeChild(a),
        i()
    }
    return s
}
var Yh = Qh;
const Gu = Dr(Yh)
  , Gh = ()=>{
    const e = ()=>{
        Gu("paulodetarso99@live.com")
    }
      , t = ()=>{
        Gu("paulojapa54")
    }
      , n = ()=>{
        const o = "5591989505392"
          , a = encodeURIComponent("Olá, Estou precisando de um freelancer...")
          , s = `https://api.whatsapp.com/send?phone=${o}&text=${a}`;
        window.open(s, "_blank")
    }
      , r = ()=>{
        const o = "https://www.linkedin.com/in/paulo-de-tarso-sarmanho/";
        window.open(o, "_blank")
    }
      , i = ()=>{
        const o = "https://github.com/PauloSarmanhoDev";
        window.open(o, "_blank")
    }
    ;
    return d.jsxs(Uh, {
        id: "contact",
        children: [d.jsx("h1", {
            "data-aos": "fade-up",
            children: "Entre em Contato"
        }), d.jsx("p", {
            "data-aos": "fade-up",
            id: "title_info",
            children: "Será um prazer receber uma mensagem sua. Envie sua proposta, questionamentos ou ideias. Farei o meu melhor para respondê-lo(a) o quanto antes!"
        }), d.jsx("div", {
            className: "links",
            children: d.jsxs("nav", {
                "data-aos": "fade-up",
                children: [d.jsxs("a", {
                    onClick: ()=>e(),
                    children: [d.jsx(jm, {}), d.jsxs("div", {
                        className: "text",
                        children: [d.jsx("h2", {
                            children: "Email"
                        }), d.jsx("p", {
                            children: "Enviar um Email"
                        })]
                    })]
                }), d.jsxs("a", {
                    onClick: ()=>i(),
                    children: [d.jsx(ms, {}), d.jsxs("div", {
                        className: "text",
                        children: [d.jsx("h2", {
                            children: "Github"
                        }), d.jsx("p", {
                            children: "Clique para ver"
                        })]
                    })]
                }), d.jsxs("a", {
                    onClick: ()=>t(),
                    children: [d.jsx(Cm, {}), d.jsxs("div", {
                        className: "text",
                        children: [d.jsx("h2", {
                            children: "Discord"
                        }), d.jsx("p", {
                            children: "Copiar usuário"
                        })]
                    })]
                }), d.jsxs("a", {
                    onClick: ()=>r(),
                    children: [d.jsx(_f, {}), d.jsxs("div", {
                        className: "text",
                        children: [d.jsx("h2", {
                            children: "Linkedin"
                        }), d.jsx("p", {
                            children: "Clique para ver"
                        })]
                    })]
                }), d.jsxs("a", {
                    onClick: ()=>n(),
                    children: [d.jsx(Em, {}), d.jsxs("div", {
                        className: "text",
                        children: [d.jsx("h2", {
                            children: "Whatsapp"
                        }), d.jsx("p", {
                            children: "Mandar mensagem"
                        })]
                    })]
                })]
            })
        })]
    })
}
  , Kh = je.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(13, 13, 13, 1);
  margin-top: 2px;

  padding: 10px 0;
  color: white;
`
  , Xh = ()=>d.jsx(Kh, {
    children: d.jsx("span", {
        children: "© 2023 Paulo Sarmanho. All rights reserved."
    })
})
  , qh = je.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-top: 30px;

  h1 {
    color: rgba(71, 127, 187, 1);
    font-size: 80px;
    line-height: 0.9;
    font-weight: bolder;
    text-transform: uppercase;

    text-align: center;

    margin-bottom: 24px;
  }

  .links {
    font-size: 50px;

    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 30px;

      border: 1px solid rgba(0, 50, 100, 1);

      padding: 10px 19px;
      border-radius: 5px;

      font-size: 50px;

      cursor: pointer;
      transition: 0.4s ease;

      :hover {
        backgrorgba(101, 157, 237, 1);
      }

      h2 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }

      .text {
        text-align: start;
        margin-left: 5px;

        white-space: nowrap;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 94%;

    img {
      transition: 0.4s ease;
      width: 530px;

      :hover {
        transform: scale(1.07);
      }
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;
      width: inherit;
    }

    p {
      font-size: 18px;
      line-height: 1.3;

      text-align: center;
    }

    #p2 {
      margin-top: 9px;
    }
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }

    a {
      font-style: normal;
      text-decoration: none;
    }

    height: auto;

    button {
      min-width: 100%;
      margin-bottom: 8px;
      margin-right: 0 !important;
      justify-content: flex-start !important;

      background-color: transparent;
      color: rgba(20, 20, 20, 1);
    }

    .content {
      width: 94%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info {
      width: 100%;
    }

    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: -webkit-fill-available;
    }

    .links {
      width: 100%;

      flex-direction: column;
    }
  }
`
  , Zh = ()=>{
    const t = ()=>{
        const n = "https://github.com/PauloSarmanhoDev";
        window.open(n, "_blank")
    }
      , e = ()=>{
        const n = "https://www.linkedin.com/in/paulo-de-tarso-sarmanho/";
        window.open(n, "_blank")
    }
      , g = ()=>{
        const href = "/documents/Paulo Sarmanho Dev.pdf";
        window.location.href = href;
    }
    ;
    return d.jsx(qh, {
        id: "about",
        "data-aos": "fade-up",
        children: d.jsxs("div", {
            className: "content",
            children: [d.jsx("img", {
                src: "/images/16541248521.png"
            }), d.jsxs("div", {
                "data-aos": "fade-up",
                className: "info",
                children: [d.jsx("h1", {
                    "data-aos": "fade-up",
                    children: "Sobre Mim"
                }), d.jsx("p", {
                    "data-aos": "fade-up",
                    children: "Olá! Meu nome é Paulo Sarmanho. e tenho 24 anos. Trabalho como desenvolvedor web, especializado em JavaScript, React e TypeScript. Além disso, também tenho experiência em desenvolvimento de backend com Node.js, java e criação de APIs."
                }), d.jsx("p", {
                    id: "p2",
                    "data-aos": "fade-up",
                    children: "Há um ano, comecei a trabalhar como desenvolvedor e freelancer, oferecendo meus serviços de desenvolvimento web. Durante esse tempo, tive a oportunidade de aprimorar minhas habilidades técnicas e adquirir um vasto conhecimento sobre as melhores práticas de desenvolvimento."
                }), d.jsxs("div", {
                    "data-aos": "fade-up",
                    className: "links",
                    children: [
                        d.jsxs("button", {
                            onClick: ()=>e(),
                            children: [d.jsx(_f, {}), d.jsxs("div", {
                                className: "text",
                                children: [d.jsx("h2", {
                                    children: "Linkedin"
                                }), d.jsx("p", {
                                    children: "Clique para ver"
                                })]
                            })]
                        }), 
                        d.jsxs("button", {
                        onClick: ()=>t(),
                        children: [d.jsx(ms, {}), d.jsxs("div", {
                            className: "text",
                            children: [d.jsx("h2", {
                                children: "Github"
                            }), d.jsx("p", {
                                children: "Clique para ver"
                            })]
                        })]
                    }),                      
                        d.jsxs("button", {
                        onClick: ()=>g(),
                        children: [d.jsx(_m, {}), d.jsxs("div", {
                            className: "text",
                            children: [d.jsx("h2", {
                                children: "Curriculo"
                            }), d.jsx("p", {
                                children: "Clique para baixar"
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
  , Jh = ()=>d.jsxs(im, {
    children: [d.jsx(ym, {}), d.jsx(sl, {
        color: "rgba(71, 127, 187, 1)"
    }), d.jsx(Zh, {}), d.jsx(Th, {}), d.jsx(Hh, {}), d.jsx(Dh, {}), d.jsx(sl, {
        color: "rgba(13, 13, 13, 1)"
    }), d.jsx(Gh, {}), d.jsx(sl, {
        color: "rgba(13, 13, 13, 1)"
    }), d.jsx(Xh, {})]
});
function ev() {
    return d.jsxs(He.Fragment, {
        children: [d.jsx(rm, {}), d.jsx(Jh, {})]
    })
}
ul.createRoot(document.getElementById("root")).render(d.jsx(Ye.StrictMode, {
    children: d.jsx(ev, {})
}));
