(function(define) {
    (function() {
        (function(window, undefined) {
            var readyList, rootjQuery, core_strundefined = typeof undefined,
                location = window.location,
                document = window.document,
                docElem = document.documentElement,
                _jQuery = window.jQuery,
                _$ = window.$,
                class2type = {},
                core_deletedIds = [],
                core_version = "1.10.2",
                core_concat = core_deletedIds.concat,
                core_push = core_deletedIds.push,
                core_slice = core_deletedIds.slice,
                core_indexOf = core_deletedIds.indexOf,
                core_toString = class2type.toString,
                core_hasOwn = class2type.hasOwnProperty,
                core_trim = core_version.trim,
                jQuery = function(selector, context) {
                    return new jQuery.fn.init(selector, context, rootjQuery)
                },
                core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                core_rnotwhite = /\S+/g,
                rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                rvalidchars = /^[\],:{}\s]*$/,
                rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
                rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                rmsPrefix = /^-ms-/,
                rdashAlpha = /-([\da-z])/gi,
                fcamelCase = function(all, letter) {
                    return letter.toUpperCase()
                },
                completed = function(event) {
                    if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
                        detach();
                        jQuery.ready()
                    }
                },
                detach = function() {
                    if (document.addEventListener) {
                        document.removeEventListener("DOMContentLoaded", completed, false);
                        window.removeEventListener("load", completed, false)
                    } else {
                        document.detachEvent("onreadystatechange", completed);
                        window.detachEvent("onload", completed)
                    }
                };
            jQuery.fn = jQuery.prototype = {
                jquery: core_version,
                constructor: jQuery,
                init: function(selector, context, rootjQuery) {
                    var match, elem;
                    if (!selector) {
                        return this
                    }
                    if (typeof selector === "string") {
                        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                            match = [null, selector, null]
                        } else {
                            match = rquickExpr.exec(selector)
                        }
                        if (match && (match[1] || !context)) {
                            if (match[1]) {
                                context = context instanceof jQuery ? context[0] : context;
                                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                    for (match in context) {
                                        if (jQuery.isFunction(this[match])) {
                                            this[match](context[match])
                                        } else {
                                            this.attr(match, context[match])
                                        }
                                    }
                                }
                                return this
                            } else {
                                elem = document.getElementById(match[2]);
                                if (elem && elem.parentNode) {
                                    if (elem.id !== match[2]) {
                                        return rootjQuery.find(selector)
                                    }
                                    this.length = 1;
                                    this[0] = elem
                                }
                                this.context = document;
                                this.selector = selector;
                                return this
                            }
                        } else if (!context || context.jquery) {
                            return (context || rootjQuery).find(selector)
                        } else {
                            return this.constructor(context).find(selector)
                        }
                    } else if (selector.nodeType) {
                        this.context = this[0] = selector;
                        this.length = 1;
                        return this
                    } else if (jQuery.isFunction(selector)) {
                        return rootjQuery.ready(selector)
                    }
                    if (selector.selector !== undefined) {
                        this.selector = selector.selector;
                        this.context = selector.context
                    }
                    return jQuery.makeArray(selector, this)
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return core_slice.call(this)
                },
                get: function(num) {
                    return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num]
                },
                pushStack: function(elems) {
                    var ret = jQuery.merge(this.constructor(), elems);
                    ret.prevObject = this;
                    ret.context = this.context;
                    return ret
                },
                each: function(callback, args) {
                    return jQuery.each(this, callback, args)
                },
                ready: function(fn) {
                    jQuery.ready.promise().done(fn);
                    return this
                },
                slice: function() {
                    return this.pushStack(core_slice.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(i) {
                    var len = this.length,
                        j = +i + (i < 0 ? len : 0);
                    return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
                },
                map: function(callback) {
                    return this.pushStack(jQuery.map(this, function(elem, i) {
                        return callback.call(elem, i, elem)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: core_push,
                sort: [].sort,
                splice: [].splice
            };
            jQuery.fn.init.prototype = jQuery.fn;
            jQuery.extend = jQuery.fn.extend = function() {
                var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
                    i = 1,
                    length = arguments.length,
                    deep = false;
                if (typeof target === "boolean") {
                    deep = target;
                    target = arguments[1] || {};
                    i = 2
                }
                if (typeof target !== "object" && !jQuery.isFunction(target)) {
                    target = {}
                }
                if (length === i) {
                    target = this;
                    --i
                }
                for (; i < length; i++) {
                    if ((options = arguments[i]) != null) {
                        for (name in options) {
                            src = target[name];
                            copy = options[name];
                            if (target === copy) {
                                continue
                            }
                            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                                if (copyIsArray) {
                                    copyIsArray = false;
                                    clone = src && jQuery.isArray(src) ? src : []
                                } else {
                                    clone = src && jQuery.isPlainObject(src) ? src : {}
                                }
                                target[name] = jQuery.extend(deep, clone, copy)
                            } else if (copy !== undefined) {
                                target[name] = copy
                            }
                        }
                    }
                }
                return target
            };
            jQuery.extend({
                expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
                noConflict: function(deep) {
                    if (window.$ === jQuery) {
                        window.$ = _$
                    }
                    if (deep && window.jQuery === jQuery) {
                        window.jQuery = _jQuery
                    }
                    return jQuery
                },
                isReady: false,
                readyWait: 1,
                holdReady: function(hold) {
                    if (hold) {
                        jQuery.readyWait++
                    } else {
                        jQuery.ready(true)
                    }
                },
                ready: function(wait) {
                    if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                        return
                    }
                    if (!document.body) {
                        return setTimeout(jQuery.ready)
                    }
                    jQuery.isReady = true;
                    if (wait !== true && --jQuery.readyWait > 0) {
                        return
                    }
                    readyList.resolveWith(document, [jQuery]);
                    if (jQuery.fn.trigger) {
                        jQuery(document).trigger("ready").off("ready")
                    }
                },
                isFunction: function(obj) {
                    return jQuery.type(obj) === "function"
                },
                isArray: Array.isArray || function(obj) {
                    return jQuery.type(obj) === "array"
                },
                isWindow: function(obj) {
                    return obj != null && obj == obj.window
                },
                isNumeric: function(obj) {
                    return !isNaN(parseFloat(obj)) && isFinite(obj)
                },
                type: function(obj) {
                    if (obj == null) {
                        return String(obj)
                    }
                    return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj
                },
                isPlainObject: function(obj) {
                    var key;
                    if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                        return false
                    }
                    try {
                        if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                            return false
                        }
                    } catch (e) {
                        return false
                    }
                    if (jQuery.support.ownLast) {
                        for (key in obj) {
                            return core_hasOwn.call(obj, key)
                        }
                    }
                    for (key in obj) {}
                    return key === undefined || core_hasOwn.call(obj, key)
                },
                isEmptyObject: function(obj) {
                    var name;
                    for (name in obj) {
                        return false
                    }
                    return true
                },
                error: function(msg) {
                    throw new Error(msg)
                },
                parseHTML: function(data, context, keepScripts) {
                    if (!data || typeof data !== "string") {
                        return null
                    }
                    if (typeof context === "boolean") {
                        keepScripts = context;
                        context = false
                    }
                    context = context || document;
                    var parsed = rsingleTag.exec(data),
                        scripts = !keepScripts && [];
                    if (parsed) {
                        return [context.createElement(parsed[1])]
                    }
                    parsed = jQuery.buildFragment([data], context, scripts);
                    if (scripts) {
                        jQuery(scripts).remove()
                    }
                    return jQuery.merge([], parsed.childNodes)
                },
                parseJSON: function(data) {
                    if (window.JSON && window.JSON.parse) {
                        return window.JSON.parse(data)
                    }
                    if (data === null) {
                        return data
                    }
                    if (typeof data === "string") {
                        data = jQuery.trim(data);
                        if (data) {
                            if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                                return new Function("return " + data)()
                            }
                        }
                    }
                    jQuery.error("Invalid JSON: " + data)
                },
                parseXML: function(data) {
                    var xml, tmp;
                    if (!data || typeof data !== "string") {
                        return null
                    }
                    try {
                        if (window.DOMParser) {
                            tmp = new DOMParser;
                            xml = tmp.parseFromString(data, "text/xml")
                        } else {
                            xml = new ActiveXObject("Microsoft.XMLDOM");
                            xml.async = "false";
                            xml.loadXML(data)
                        }
                    } catch (e) {
                        xml = undefined
                    }
                    if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                        jQuery.error("Invalid XML: " + data)
                    }
                    return xml
                },
                noop: function() {},
                globalEval: function(data) {
                    if (data && jQuery.trim(data)) {
                        (window.execScript || function(data) {
                            window["eval"].call(window, data)
                        })(data)
                    }
                },
                camelCase: function(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
                },
                nodeName: function(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
                },
                each: function(obj, callback, args) {
                    var value, i = 0,
                        length = obj.length,
                        isArray = isArraylike(obj);
                    if (args) {
                        if (isArray) {
                            for (; i < length; i++) {
                                value = callback.apply(obj[i], args);
                                if (value === false) {
                                    break
                                }
                            }
                        } else {
                            for (i in obj) {
                                value = callback.apply(obj[i], args);
                                if (value === false) {
                                    break
                                }
                            }
                        }
                    } else {
                        if (isArray) {
                            for (; i < length; i++) {
                                value = callback.call(obj[i], i, obj[i]);
                                if (value === false) {
                                    break
                                }
                            }
                        } else {
                            for (i in obj) {
                                value = callback.call(obj[i], i, obj[i]);
                                if (value === false) {
                                    break
                                }
                            }
                        }
                    }
                    return obj
                },
                trim: core_trim && !core_trim.call("﻿ ") ? function(text) {
                    return text == null ? "" : core_trim.call(text)
                } : function(text) {
                    return text == null ? "" : (text + "").replace(rtrim, "")
                },
                makeArray: function(arr, results) {
                    var ret = results || [];
                    if (arr != null) {
                        if (isArraylike(Object(arr))) {
                            jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                        } else {
                            core_push.call(ret, arr)
                        }
                    }
                    return ret
                },
                inArray: function(elem, arr, i) {
                    var len;
                    if (arr) {
                        if (core_indexOf) {
                            return core_indexOf.call(arr, elem, i)
                        }
                        len = arr.length;
                        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                        for (; i < len; i++) {
                            if (i in arr && arr[i] === elem) {
                                return i
                            }
                        }
                    }
                    return -1
                },
                merge: function(first, second) {
                    var l = second.length,
                        i = first.length,
                        j = 0;
                    if (typeof l === "number") {
                        for (; j < l; j++) {
                            first[i++] = second[j]
                        }
                    } else {
                        while (second[j] !== undefined) {
                            first[i++] = second[j++]
                        }
                    }
                    first.length = i;
                    return first
                },
                grep: function(elems, callback, inv) {
                    var retVal, ret = [],
                        i = 0,
                        length = elems.length;
                    inv = !!inv;
                    for (; i < length; i++) {
                        retVal = !!callback(elems[i], i);
                        if (inv !== retVal) {
                            ret.push(elems[i])
                        }
                    }
                    return ret
                },
                map: function(elems, callback, arg) {
                    var value, i = 0,
                        length = elems.length,
                        isArray = isArraylike(elems),
                        ret = [];
                    if (isArray) {
                        for (; i < length; i++) {
                            value = callback(elems[i], i, arg);
                            if (value != null) {
                                ret[ret.length] = value
                            }
                        }
                    } else {
                        for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (value != null) {
                                ret[ret.length] = value
                            }
                        }
                    }
                    return core_concat.apply([], ret)
                },
                guid: 1,
                proxy: function(fn, context) {
                    var args, proxy, tmp;
                    if (typeof context === "string") {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp
                    }
                    if (!jQuery.isFunction(fn)) {
                        return undefined
                    }
                    args = core_slice.call(arguments, 2);
                    proxy = function() {
                        return fn.apply(context || this, args.concat(core_slice.call(arguments)))
                    };
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy
                },
                access: function(elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0,
                        length = elems.length,
                        bulk = key == null;
                    if (jQuery.type(key) === "object") {
                        chainable = true;
                        for (i in key) {
                            jQuery.access(elems, fn, i, key[i], true, emptyGet, raw)
                        }
                    } else if (value !== undefined) {
                        chainable = true;
                        if (!jQuery.isFunction(value)) {
                            raw = true
                        }
                        if (bulk) {
                            if (raw) {
                                fn.call(elems, value);
                                fn = null
                            } else {
                                bulk = fn;
                                fn = function(elem, key, value) {
                                    return bulk.call(jQuery(elem), value)
                                }
                            }
                        }
                        if (fn) {
                            for (; i < length; i++) {
                                fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
                            }
                        }
                    }
                    return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(elem, options, callback, args) {
                    var ret, name, old = {};
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name]
                    }
                    ret = callback.apply(elem, args || []);
                    for (name in options) {
                        elem.style[name] = old[name]
                    }
                    return ret
                }
            });
            jQuery.ready.promise = function(obj) {
                if (!readyList) {
                    readyList = jQuery.Deferred();
                    if (document.readyState === "complete") {
                        setTimeout(jQuery.ready)
                    } else if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", completed, false);
                        window.addEventListener("load", completed, false)
                    } else {
                        document.attachEvent("onreadystatechange", completed);
                        window.attachEvent("onload", completed);
                        var top = false;
                        try {
                            top = window.frameElement == null && document.documentElement
                        } catch (e) {}
                        if (top && top.doScroll) {
                            (function doScrollCheck() {
                                if (!jQuery.isReady) {
                                    try {
                                        top.doScroll("left")
                                    } catch (e) {
                                        return setTimeout(doScrollCheck, 50)
                                    }
                                    detach();
                                    jQuery.ready()
                                }
                            })()
                        }
                    }
                }
                return readyList.promise(obj)
            };
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase()
            });

            function isArraylike(obj) {
                var length = obj.length,
                    type = jQuery.type(obj);
                if (jQuery.isWindow(obj)) {
                    return false
                }
                if (obj.nodeType === 1 && length) {
                    return true
                }
                return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj)
            }
            rootjQuery = jQuery(document);
            (function(window, undefined) {
                var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date,
                    preferredDoc = window.document,
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),
                    hasDuplicate = false,
                    sortOrder = function(a, b) {
                        if (a === b) {
                            hasDuplicate = true;
                            return 0
                        }
                        return 0
                    },
                    strundefined = typeof undefined,
                    MAX_NEGATIVE = 1 << 31,
                    hasOwn = {}.hasOwnProperty,
                    arr = [],
                    pop = arr.pop,
                    push_native = arr.push,
                    push = arr.push,
                    slice = arr.slice,
                    indexOf = arr.indexOf || function(elem) {
                        var i = 0,
                            len = this.length;
                        for (; i < len; i++) {
                            if (this[i] === elem) {
                                return i
                            }
                        }
                        return -1
                    },
                    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    whitespace = "[\\x20\\t\\r\\n\\f]",
                    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    identifier = characterEncoding.replace("w", "w#"),
                    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
                    pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
                    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                    rsibling = new RegExp(whitespace + "*[+~]"),
                    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),
                    rpseudo = new RegExp(pseudos),
                    ridentifier = new RegExp("^" + identifier + "$"),
                    matchExpr = {
                        ID: new RegExp("^#(" + characterEncoding + ")"),
                        CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
                        TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    },
                    rnative = /^[^{]+\{\s*\[native \w/,
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,
                    rescape = /'|\\/g,
                    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                    funescape = function(_, escaped, escapedWhitespace) {
                        var high = "0x" + escaped - 65536;
                        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
                    };
                try {
                    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                    arr[preferredDoc.childNodes.length].nodeType
                } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) {
                            push_native.apply(target, slice.call(els))
                        } : function(target, els) {
                            var j = target.length,
                                i = 0;
                            while (target[j++] = els[i++]) {}
                            target.length = j - 1
                        }
                    }
                }

                function Sizzle(selector, context, results, seed) {
                    var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context)
                    }
                    context = context || document;
                    results = results || [];
                    if (!selector || typeof selector !== "string") {
                        return results
                    }
                    if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                        return []
                    }
                    if (documentIsHTML && !seed) {
                        if (match = rquickExpr.exec(selector)) {
                            if (m = match[1]) {
                                if (nodeType === 9) {
                                    elem = context.getElementById(m);
                                    if (elem && elem.parentNode) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results
                                        }
                                    } else {
                                        return results
                                    }
                                } else {
                                    if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results
                            }
                        }
                        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            nid = old = expando;
                            newContext = context;
                            newSelector = nodeType === 9 && selector;
                            if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                                groups = tokenize(selector);
                                if (old = context.getAttribute("id")) {
                                    nid = old.replace(rescape, "\\$&")
                                } else {
                                    context.setAttribute("id", nid)
                                }
                                nid = "[id='" + nid + "'] ";
                                i = groups.length;
                                while (i--) {
                                    groups[i] = nid + toSelector(groups[i])
                                }
                                newContext = rsibling.test(selector) && context.parentNode || context;
                                newSelector = groups.join(",")
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results
                                } catch (qsaError) {} finally {
                                    if (!old) {
                                        context.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed)
                }

                function createCache() {
                    var keys = [];

                    function cache(key, value) {
                        if (keys.push(key += " ") > Expr.cacheLength) {
                            delete cache[keys.shift()]
                        }
                        return cache[key] = value
                    }
                    return cache
                }

                function markFunction(fn) {
                    fn[expando] = true;
                    return fn
                }

                function assert(fn) {
                    var div = document.createElement("div");
                    try {
                        return !!fn(div)
                    } catch (e) {
                        return false
                    } finally {
                        if (div.parentNode) {
                            div.parentNode.removeChild(div)
                        }
                        div = null
                    }
                }

                function addHandle(attrs, handler) {
                    var arr = attrs.split("|"),
                        i = attrs.length;
                    while (i--) {
                        Expr.attrHandle[arr[i]] = handler
                    }
                }

                function siblingCheck(a, b) {
                    var cur = b && a,
                        diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                    if (diff) {
                        return diff
                    }
                    if (cur) {
                        while (cur = cur.nextSibling) {
                            if (cur === b) {
                                return -1
                            }
                        }
                    }
                    return a ? 1 : -1
                }

                function createInputPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === type
                    }
                }

                function createButtonPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return (name === "input" || name === "button") && elem.type === type
                    }
                }

                function createPositionalPseudo(fn) {
                    return markFunction(function(argument) {
                        argument = +argument;
                        return markFunction(function(seed, matches) {
                            var j, matchIndexes = fn([], seed.length, argument),
                                i = matchIndexes.length;
                            while (i--) {
                                if (seed[j = matchIndexes[i]]) {
                                    seed[j] = !(matches[j] = seed[j])
                                }
                            }
                        })
                    })
                }
                isXML = Sizzle.isXML = function(elem) {
                    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                    return documentElement ? documentElement.nodeName !== "HTML" : false
                };
                support = Sizzle.support = {};
                setDocument = Sizzle.setDocument = function(node) {
                    var doc = node ? node.ownerDocument || node : preferredDoc,
                        parent = doc.defaultView;
                    if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                        return document
                    }
                    document = doc;
                    docElem = doc.documentElement;
                    documentIsHTML = !isXML(doc);
                    if (parent && parent.attachEvent && parent !== parent.top) {
                        parent.attachEvent("onbeforeunload", function() {
                            setDocument()
                        })
                    }
                    support.attributes = assert(function(div) {
                        div.className = "i";
                        return !div.getAttribute("className")
                    });
                    support.getElementsByTagName = assert(function(div) {
                        div.appendChild(doc.createComment(""));
                        return !div.getElementsByTagName("*").length
                    });
                    support.getElementsByClassName = assert(function(div) {
                        div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                        div.firstChild.className = "i";
                        return div.getElementsByClassName("i").length === 2
                    });
                    support.getById = assert(function(div) {
                        docElem.appendChild(div).id = expando;
                        return !doc.getElementsByName || !doc.getElementsByName(expando).length
                    });
                    if (support.getById) {
                        Expr.find["ID"] = function(id, context) {
                            if (typeof context.getElementById !== strundefined && documentIsHTML) {
                                var m = context.getElementById(id);
                                return m && m.parentNode ? [m] : []
                            }
                        };
                        Expr.filter["ID"] = function(id) {
                            var attrId = id.replace(runescape, funescape);
                            return function(elem) {
                                return elem.getAttribute("id") === attrId
                            }
                        }
                    } else {
                        delete Expr.find["ID"];
                        Expr.filter["ID"] = function(id) {
                            var attrId = id.replace(runescape, funescape);
                            return function(elem) {
                                var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                                return node && node.value === attrId
                            }
                        }
                    }
                    Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                        if (typeof context.getElementsByTagName !== strundefined) {
                            return context.getElementsByTagName(tag)
                        }
                    } : function(tag, context) {
                        var elem, tmp = [],
                            i = 0,
                            results = context.getElementsByTagName(tag);
                        if (tag === "*") {
                            while (elem = results[i++]) {
                                if (elem.nodeType === 1) {
                                    tmp.push(elem)
                                }
                            }
                            return tmp
                        }
                        return results
                    };
                    Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                        if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                            return context.getElementsByClassName(className)
                        }
                    };
                    rbuggyMatches = [];
                    rbuggyQSA = [];
                    if (support.qsa = rnative.test(doc.querySelectorAll)) {
                        assert(function(div) {
                            div.innerHTML = "<select><option selected=''></option></select>";
                            if (!div.querySelectorAll("[selected]").length) {
                                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                            }
                            if (!div.querySelectorAll(":checked").length) {
                                rbuggyQSA.push(":checked")
                            }
                        });
                        assert(function(div) {
                            var input = doc.createElement("input");
                            input.setAttribute("type", "hidden");
                            div.appendChild(input).setAttribute("t", "");
                            if (div.querySelectorAll("[t^='']").length) {
                                rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                            }
                            if (!div.querySelectorAll(":enabled").length) {
                                rbuggyQSA.push(":enabled", ":disabled")
                            }
                            div.querySelectorAll("*,:x");
                            rbuggyQSA.push(",.*:")
                        })
                    }
                    if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                        assert(function(div) {
                            support.disconnectedMatch = matches.call(div, "div");
                            matches.call(div, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos)
                        })
                    }
                    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                    contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
                    } : function(a, b) {
                        if (b) {
                            while (b = b.parentNode) {
                                if (b === a) {
                                    return true
                                }
                            }
                        }
                        return false
                    };
                    sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                        if (a === b) {
                            hasDuplicate = true;
                            return 0
                        }
                        var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                        if (compare) {
                            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                if (a === doc || contains(preferredDoc, a)) {
                                    return -1
                                }
                                if (b === doc || contains(preferredDoc, b)) {
                                    return 1
                                }
                                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
                            }
                            return compare & 4 ? -1 : 1
                        }
                        return a.compareDocumentPosition ? -1 : 1
                    } : function(a, b) {
                        var cur, i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];
                        if (a === b) {
                            hasDuplicate = true;
                            return 0
                        } else if (!aup || !bup) {
                            return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
                        } else if (aup === bup) {
                            return siblingCheck(a, b)
                        }
                        cur = a;
                        while (cur = cur.parentNode) {
                            ap.unshift(cur)
                        }
                        cur = b;
                        while (cur = cur.parentNode) {
                            bp.unshift(cur)
                        }
                        while (ap[i] === bp[i]) {
                            i++
                        }
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                    };
                    return doc
                };
                Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements)
                };
                Sizzle.matchesSelector = function(elem, expr) {
                    if ((elem.ownerDocument || elem) !== document) {
                        setDocument(elem)
                    }
                    expr = expr.replace(rattributeQuotes, "='$1']");
                    if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                        try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                                return ret
                            }
                        } catch (e) {}
                    }
                    return Sizzle(expr, document, null, [elem]).length > 0
                };
                Sizzle.contains = function(context, elem) {
                    if ((context.ownerDocument || context) !== document) {
                        setDocument(context)
                    }
                    return contains(context, elem)
                };
                Sizzle.attr = function(elem, name) {
                    if ((elem.ownerDocument || elem) !== document) {
                        setDocument(elem)
                    }
                    var fn = Expr.attrHandle[name.toLowerCase()],
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                    return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val
                };
                Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg)
                };
                Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [],
                        j = 0,
                        i = 0;
                    hasDuplicate = !support.detectDuplicates;
                    sortInput = !support.sortStable && results.slice(0);
                    results.sort(sortOrder);
                    if (hasDuplicate) {
                        while (elem = results[i++]) {
                            if (elem === results[i]) {
                                j = duplicates.push(i)
                            }
                        }
                        while (j--) {
                            results.splice(duplicates[j], 1)
                        }
                    }
                    return results
                };
                getText = Sizzle.getText = function(elem) {
                    var node, ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (!nodeType) {
                        for (; node = elem[i]; i++) {
                            ret += getText(node)
                        }
                    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                        if (typeof elem.textContent === "string") {
                            return elem.textContent
                        } else {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                ret += getText(elem)
                            }
                        }
                    } else if (nodeType === 3 || nodeType === 4) {
                        return elem.nodeValue
                    }
                    return ret
                };
                Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: true
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: true
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(match) {
                            match[1] = match[1].replace(runescape, funescape);
                            match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                            if (match[2] === "~=") {
                                match[3] = " " + match[3] + " "
                            }
                            return match.slice(0, 4)
                        },
                        CHILD: function(match) {
                            match[1] = match[1].toLowerCase();
                            if (match[1].slice(0, 3) === "nth") {
                                if (!match[3]) {
                                    Sizzle.error(match[0])
                                }
                                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                match[5] = +(match[7] + match[8] || match[3] === "odd")
                            } else if (match[3]) {
                                Sizzle.error(match[0])
                            }
                            return match
                        },
                        PSEUDO: function(match) {
                            var excess, unquoted = !match[5] && match[2];
                            if (matchExpr["CHILD"].test(match[0])) {
                                return null
                            }
                            if (match[3] && match[4] !== undefined) {
                                match[2] = match[4]
                            } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                match[0] = match[0].slice(0, excess);
                                match[2] = unquoted.slice(0, excess)
                            }
                            return match.slice(0, 3)
                        }
                    },
                    filter: {
                        TAG: function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return nodeNameSelector === "*" ? function() {
                                return true
                            } : function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                            }
                        },
                        CLASS: function(className) {
                            var pattern = classCache[className + " "];
                            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                if (result == null) {
                                    return operator === "!="
                                }
                                if (!operator) {
                                    return true
                                }
                                result += "";
                                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false
                            }
                        },
                        CHILD: function(type, what, argument, first, last) {
                            var simple = type.slice(0, 3) !== "nth",
                                forward = type.slice(-4) !== "last",
                                ofType = what === "of-type";
                            return first === 1 && last === 0 ? function(elem) {
                                return !!elem.parentNode
                            } : function(elem, context, xml) {
                                var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType;
                                if (parent) {
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while (node = node[dir]) {
                                                if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                    return false
                                                }
                                            }
                                            start = dir = type === "only" && !start && "nextSibling"
                                        }
                                        return true
                                    }
                                    start = [forward ? parent.firstChild : parent.lastChild];
                                    if (forward && useCache) {
                                        outerCache = parent[expando] || (parent[expando] = {});
                                        cache = outerCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = cache[0] === dirruns && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                outerCache[type] = [dirruns, nodeIndex, diff];
                                                break
                                            }
                                        }
                                    } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                        diff = cache[1]
                                    } else {
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    (node[expando] || (node[expando] = {}))[type] = [dirruns, diff]
                                                }
                                                if (node === elem) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    diff -= last;
                                    return diff === first || diff % first === 0 && diff / first >= 0
                                }
                            }
                        },
                        PSEUDO: function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            if (fn[expando]) {
                                return fn(argument)
                            }
                            if (fn.length > 1) {
                                args = [pseudo, pseudo, "", argument];
                                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                    var idx, matched = fn(seed, argument),
                                        i = matched.length;
                                    while (i--) {
                                        idx = indexOf.call(seed, matched[i]);
                                        seed[idx] = !(matches[idx] = matched[i])
                                    }
                                }) : function(elem) {
                                    return fn(elem, 0, args)
                                }
                            }
                            return fn
                        }
                    },
                    pseudos: {
                        not: markFunction(function(selector) {
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                                var elem, unmatched = matcher(seed, null, xml, []),
                                    i = seed.length;
                                while (i--) {
                                    if (elem = unmatched[i]) {
                                        seed[i] = !(matches[i] = elem)
                                    }
                                }
                            }) : function(elem, context, xml) {
                                input[0] = elem;
                                matcher(input, null, xml, results);
                                return !results.pop()
                            }
                        }),
                        has: markFunction(function(selector) {
                            return function(elem) {
                                return Sizzle(selector, elem).length > 0
                            }
                        }),
                        contains: markFunction(function(text) {
                            return function(elem) {
                                return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                            }
                        }),
                        lang: markFunction(function(lang) {
                            if (!ridentifier.test(lang || "")) {
                                Sizzle.error("unsupported lang: " + lang)
                            }
                            lang = lang.replace(runescape, funescape).toLowerCase();
                            return function(elem) {
                                var elemLang;
                                do {
                                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                        elemLang = elemLang.toLowerCase();
                                        return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                                    }
                                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                return false
                            }
                        }),
                        target: function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id
                        },
                        root: function(elem) {
                            return elem === docElem
                        },
                        focus: function(elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                        },
                        enabled: function(elem) {
                            return elem.disabled === false
                        },
                        disabled: function(elem) {
                            return elem.disabled === true
                        },
                        checked: function(elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
                        },
                        selected: function(elem) {
                            if (elem.parentNode) {
                                elem.parentNode.selectedIndex
                            }
                            return elem.selected === true
                        },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                                    return false
                                }
                            }
                            return true
                        },
                        parent: function(elem) {
                            return !Expr.pseudos["empty"](elem)
                        },
                        header: function(elem) {
                            return rheader.test(elem.nodeName)
                        },
                        input: function(elem) {
                            return rinputs.test(elem.nodeName)
                        },
                        button: function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === "button" || name === "button"
                        },
                        text: function(elem) {
                            var attr;
                            return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type)
                        },
                        first: createPositionalPseudo(function() {
                            return [0]
                        }),
                        last: createPositionalPseudo(function(matchIndexes, length) {
                            return [length - 1]
                        }),
                        eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                            return [argument < 0 ? argument + length : argument]
                        }),
                        even: createPositionalPseudo(function(matchIndexes, length) {
                            var i = 0;
                            for (; i < length; i += 2) {
                                matchIndexes.push(i)
                            }
                            return matchIndexes
                        }),
                        odd: createPositionalPseudo(function(matchIndexes, length) {
                            var i = 1;
                            for (; i < length; i += 2) {
                                matchIndexes.push(i)
                            }
                            return matchIndexes
                        }),
                        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument;
                            for (; --i >= 0;) {
                                matchIndexes.push(i)
                            }
                            return matchIndexes
                        }),
                        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument;
                            for (; ++i < length;) {
                                matchIndexes.push(i)
                            }
                            return matchIndexes
                        })
                    }
                };
                Expr.pseudos["nth"] = Expr.pseudos["eq"];
                for (i in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    }) {
                    Expr.pseudos[i] = createInputPseudo(i)
                }
                for (i in {
                        submit: true,
                        reset: true
                    }) {
                    Expr.pseudos[i] = createButtonPseudo(i)
                }

                function setFilters() {}
                setFilters.prototype = Expr.filters = Expr.pseudos;
                Expr.setFilters = new setFilters;

                function tokenize(selector, parseOnly) {
                    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                    if (cached) {
                        return parseOnly ? 0 : cached.slice(0)
                    }
                    soFar = selector;
                    groups = [];
                    preFilters = Expr.preFilter;
                    while (soFar) {
                        if (!matched || (match = rcomma.exec(soFar))) {
                            if (match) {
                                soFar = soFar.slice(match[0].length) || soFar
                            }
                            groups.push(tokens = [])
                        }
                        matched = false;
                        if (match = rcombinators.exec(soFar)) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: match[0].replace(rtrim, " ")
                            });
                            soFar = soFar.slice(matched.length)
                        }
                        for (type in Expr.filter) {
                            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length)
                            }
                        }
                        if (!matched) {
                            break
                        }
                    }
                    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
                }

                function toSelector(tokens) {
                    var i = 0,
                        len = tokens.length,
                        selector = "";
                    for (; i < len; i++) {
                        selector += tokens[i].value
                    }
                    return selector
                }

                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir,
                        checkNonElements = base && dir === "parentNode",
                        doneName = done++;
                    return combinator.first ? function(elem, context, xml) {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                return matcher(elem, context, xml)
                            }
                        }
                    } : function(elem, context, xml) {
                        var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                        if (xml) {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true
                                    }
                                }
                            }
                        } else {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {});
                                    if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                        if ((data = cache[1]) === true || data === cachedruns) {
                                            return data === true
                                        }
                                    } else {
                                        cache = outerCache[dir] = [dirkey];
                                        cache[1] = matcher(elem, context, xml) || cachedruns;
                                        if (cache[1] === true) {
                                            return true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                function elementMatcher(matchers) {
                    return matchers.length > 1 ? function(elem, context, xml) {
                        var i = matchers.length;
                        while (i--) {
                            if (!matchers[i](elem, context, xml)) {
                                return false
                            }
                        }
                        return true
                    } : matchers[0]
                }

                function condense(unmatched, map, filter, context, xml) {
                    var elem, newUnmatched = [],
                        i = 0,
                        len = unmatched.length,
                        mapped = map != null;
                    for (; i < len; i++) {
                        if (elem = unmatched[i]) {
                            if (!filter || filter(elem, context, xml)) {
                                newUnmatched.push(elem);
                                if (mapped) {
                                    map.push(i)
                                }
                            }
                        }
                    }
                    return newUnmatched
                }

                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    if (postFilter && !postFilter[expando]) {
                        postFilter = setMatcher(postFilter)
                    }
                    if (postFinder && !postFinder[expando]) {
                        postFinder = setMatcher(postFinder, postSelector)
                    }
                    return markFunction(function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [],
                            postMap = [],
                            preexisting = results.length,
                            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher) {
                            matcher(matcherIn, matcherOut, context, xml)
                        }
                        if (postFilter) {
                            temp = condense(matcherOut, postMap);
                            postFilter(temp, [], context, xml);
                            i = temp.length;
                            while (i--) {
                                if (elem = temp[i]) {
                                    matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                                }
                            }
                        }
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    temp = [];
                                    i = matcherOut.length;
                                    while (i--) {
                                        if (elem = matcherOut[i]) {
                                            temp.push(matcherIn[i] = elem)
                                        }
                                    }
                                    postFinder(null, matcherOut = [], temp, xml)
                                }
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                        seed[temp] = !(results[temp] = elem)
                                    }
                                }
                            }
                        } else {
                            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                            if (postFinder) {
                                postFinder(null, results, matcherOut, xml)
                            } else {
                                push.apply(results, matcherOut)
                            }
                        }
                    })
                }

                function matcherFromTokens(tokens) {
                    var checkContext, matcher, j, len = tokens.length,
                        leadingRelative = Expr.relative[tokens[0].type],
                        implicitRelative = leadingRelative || Expr.relative[" "],
                        i = leadingRelative ? 1 : 0,
                        matchContext = addCombinator(function(elem) {
                            return elem === checkContext
                        }, implicitRelative, true),
                        matchAnyContext = addCombinator(function(elem) {
                            return indexOf.call(checkContext, elem) > -1
                        }, implicitRelative, true),
                        matchers = [function(elem, context, xml) {
                            return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml))
                        }];
                    for (; i < len; i++) {
                        if (matcher = Expr.relative[tokens[i].type]) {
                            matchers = [addCombinator(elementMatcher(matchers), matcher)]
                        } else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (; j < len; j++) {
                                    if (Expr.relative[tokens[j].type]) {
                                        break
                                    }
                                }
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: tokens[i - 2].type === " " ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                            }
                            matchers.push(matcher)
                        }
                    }
                    return elementMatcher(matchers)
                }

                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var matcherCachedRuns = 0,
                        bySet = setMatchers.length > 0,
                        byElement = elementMatchers.length > 0,
                        superMatcher = function(seed, context, xml, results, expandContext) {
                            var elem, j, matcher, setMatched = [],
                                matchedCount = 0,
                                i = "0",
                                unmatched = seed && [],
                                outermost = expandContext != null,
                                contextBackup = outermostContext,
                                elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
                                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                            if (outermost) {
                                outermostContext = context !== document && context;
                                cachedruns = matcherCachedRuns
                            }
                            for (;
                                (elem = elems[i]) != null; i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    while (matcher = elementMatchers[j++]) {
                                        if (matcher(elem, context, xml)) {
                                            results.push(elem);
                                            break
                                        }
                                    }
                                    if (outermost) {
                                        dirruns = dirrunsUnique;
                                        cachedruns = ++matcherCachedRuns
                                    }
                                }
                                if (bySet) {
                                    if (elem = !matcher && elem) {
                                        matchedCount--
                                    }
                                    if (seed) {
                                        unmatched.push(elem)
                                    }
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while (matcher = setMatchers[j++]) {
                                    matcher(unmatched, setMatched, context, xml)
                                }
                                if (seed) {
                                    if (matchedCount > 0) {
                                        while (i--) {
                                            if (!(unmatched[i] || setMatched[i])) {
                                                setMatched[i] = pop.call(results)
                                            }
                                        }
                                    }
                                    setMatched = condense(setMatched)
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                                    Sizzle.uniqueSort(results)
                                }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup
                            }
                            return unmatched
                        };
                    return bySet ? markFunction(superMatcher) : superMatcher
                }
                compile = Sizzle.compile = function(selector, group) {
                    var i, setMatchers = [],
                        elementMatchers = [],
                        cached = compilerCache[selector + " "];
                    if (!cached) {
                        if (!group) {
                            group = tokenize(selector)
                        }
                        i = group.length;
                        while (i--) {
                            cached = matcherFromTokens(group[i]);
                            if (cached[expando]) {
                                setMatchers.push(cached)
                            } else {
                                elementMatchers.push(cached)
                            }
                        }
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers))
                    }
                    return cached
                };

                function multipleContexts(selector, contexts, results) {
                    var i = 0,
                        len = contexts.length;
                    for (; i < len; i++) {
                        Sizzle(selector, contexts[i], results)
                    }
                    return results
                }

                function select(selector, context, results, seed) {
                    var i, tokens, token, type, find, match = tokenize(selector);
                    if (!seed) {
                        if (match.length === 1) {
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) {
                                    return results
                                }
                                selector = selector.slice(tokens.shift().value.length)
                            }
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                if (Expr.relative[type = token.type]) {
                                    break
                                }
                                if (find = Expr.find[type]) {
                                    if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                                        tokens.splice(i, 1);
                                        selector = seed.length && toSelector(tokens);
                                        if (!selector) {
                                            push.apply(results, seed);
                                            return results
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    }
                    compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
                    return results
                }
                support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                support.detectDuplicates = hasDuplicate;
                setDocument();
                support.sortDetached = assert(function(div1) {
                    return div1.compareDocumentPosition(document.createElement("div")) & 1
                });
                if (!assert(function(div) {
                        div.innerHTML = "<a href='#'></a>";
                        return div.firstChild.getAttribute("href") === "#"
                    })) {
                    addHandle("type|href|height|width", function(elem, name, isXML) {
                        if (!isXML) {
                            return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
                        }
                    })
                }
                if (!support.attributes || !assert(function(div) {
                        div.innerHTML = "<input/>";
                        div.firstChild.setAttribute("value", "");
                        return div.firstChild.getAttribute("value") === ""
                    })) {
                    addHandle("value", function(elem, name, isXML) {
                        if (!isXML && elem.nodeName.toLowerCase() === "input") {
                            return elem.defaultValue
                        }
                    })
                }
                if (!assert(function(div) {
                        return div.getAttribute("disabled") == null
                    })) {
                    addHandle(booleans, function(elem, name, isXML) {
                        var val;
                        if (!isXML) {
                            return (val = elem.getAttributeNode(name)) && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null
                        }
                    })
                }
                jQuery.find = Sizzle;
                jQuery.expr = Sizzle.selectors;
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.unique = Sizzle.uniqueSort;
                jQuery.text = Sizzle.getText;
                jQuery.isXMLDoc = Sizzle.isXML;
                jQuery.contains = Sizzle.contains
            })(window);
            var optionsCache = {};

            function createOptions(options) {
                var object = optionsCache[options] = {};
                jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
                    object[flag] = true
                });
                return object
            }
            jQuery.Callbacks = function(options) {
                options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
                var firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
                    stack = !options.once && [],
                    fire = function(data) {
                        memory = options.memory && data;
                        fired = true;
                        firingIndex = firingStart || 0;
                        firingStart = 0;
                        firingLength = list.length;
                        firing = true;
                        for (; list && firingIndex < firingLength; firingIndex++) {
                            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                                memory = false;
                                break
                            }
                        }
                        firing = false;
                        if (list) {
                            if (stack) {
                                if (stack.length) {
                                    fire(stack.shift())
                                }
                            } else if (memory) {
                                list = []
                            } else {
                                self.disable()
                            }
                        }
                    },
                    self = {
                        add: function() {
                            if (list) {
                                var start = list.length;
                                (function add(args) {
                                    jQuery.each(args, function(_, arg) {
                                        var type = jQuery.type(arg);
                                        if (type === "function") {
                                            if (!options.unique || !self.has(arg)) {
                                                list.push(arg)
                                            }
                                        } else if (arg && arg.length && type !== "string") {
                                            add(arg)
                                        }
                                    })
                                })(arguments);
                                if (firing) {
                                    firingLength = list.length
                                } else if (memory) {
                                    firingStart = start;
                                    fire(memory)
                                }
                            }
                            return this
                        },
                        remove: function() {
                            if (list) {
                                jQuery.each(arguments, function(_, arg) {
                                    var index;
                                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                        list.splice(index, 1);
                                        if (firing) {
                                            if (index <= firingLength) {
                                                firingLength--
                                            }
                                            if (index <= firingIndex) {
                                                firingIndex--
                                            }
                                        }
                                    }
                                })
                            }
                            return this
                        },
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length)
                        },
                        empty: function() {
                            list = [];
                            firingLength = 0;
                            return this
                        },
                        disable: function() {
                            list = stack = memory = undefined;
                            return this
                        },
                        disabled: function() {
                            return !list
                        },
                        lock: function() {
                            stack = undefined;
                            if (!memory) {
                                self.disable()
                            }
                            return this
                        },
                        locked: function() {
                            return !stack
                        },
                        fireWith: function(context, args) {
                            if (list && (!fired || stack)) {
                                args = args || [];
                                args = [context, args.slice ? args.slice() : args];
                                if (firing) {
                                    stack.push(args)
                                } else {
                                    fire(args)
                                }
                            }
                            return this
                        },
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this
                        },
                        fired: function() {
                            return !!fired
                        }
                    };
                return self
            };
            jQuery.extend({
                Deferred: function(func) {
                    var tuples = [
                            ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", jQuery.Callbacks("memory")]
                        ],
                        state = "pending",
                        promise = {
                            state: function() {
                                return state
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this
                            },
                            then: function() {
                                var fns = arguments;
                                return jQuery.Deferred(function(newDefer) {
                                    jQuery.each(tuples, function(i, tuple) {
                                        var action = tuple[0],
                                            fn = jQuery.isFunction(fns[i]) && fns[i];
                                        deferred[tuple[1]](function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && jQuery.isFunction(returned.promise)) {
                                                returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
                                            } else {
                                                newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                            }
                                        })
                                    });
                                    fns = null
                                }).promise()
                            },
                            promise: function(obj) {
                                return obj != null ? jQuery.extend(obj, promise) : promise
                            }
                        },
                        deferred = {};
                    promise.pipe = promise.then;
                    jQuery.each(tuples, function(i, tuple) {
                        var list = tuple[2],
                            stateString = tuple[3];
                        promise[tuple[1]] = list.add;
                        if (stateString) {
                            list.add(function() {
                                state = stateString
                            }, tuples[i ^ 1][2].disable, tuples[2][2].lock)
                        }
                        deferred[tuple[0]] = function() {
                            deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                            return this
                        };
                        deferred[tuple[0] + "With"] = list.fireWith
                    });
                    promise.promise(deferred);
                    if (func) {
                        func.call(deferred, deferred)
                    }
                    return deferred
                },
                when: function(subordinate) {
                    var i = 0,
                        resolveValues = core_slice.call(arguments),
                        length = resolveValues.length,
                        remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
                        deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
                        updateFunc = function(i, contexts, values) {
                            return function(value) {
                                contexts[i] = this;
                                values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                                if (values === progressValues) {
                                    deferred.notifyWith(contexts, values)
                                } else if (!--remaining) {
                                    deferred.resolveWith(contexts, values)
                                }
                            }
                        },
                        progressValues, progressContexts, resolveContexts;
                    if (length > 1) {
                        progressValues = new Array(length);
                        progressContexts = new Array(length);
                        resolveContexts = new Array(length);
                        for (; i < length; i++) {
                            if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                                resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues))
                            } else {
                                --remaining
                            }
                        }
                    }
                    if (!remaining) {
                        deferred.resolveWith(resolveContexts, resolveValues)
                    }
                    return deferred.promise()
                }
            });
            jQuery.support = function(support) {
                var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
                div.setAttribute("className", "t");
                div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                all = div.getElementsByTagName("*") || [];
                a = div.getElementsByTagName("a")[0];
                if (!a || !a.style || !all.length) {
                    return support
                }
                select = document.createElement("select");
                opt = select.appendChild(document.createElement("option"));
                input = div.getElementsByTagName("input")[0];
                a.style.cssText = "top:1px;float:left;opacity:.5";
                support.getSetAttribute = div.className !== "t";
                support.leadingWhitespace = div.firstChild.nodeType === 3;
                support.tbody = !div.getElementsByTagName("tbody").length;
                support.htmlSerialize = !!div.getElementsByTagName("link").length;
                support.style = /top/.test(a.getAttribute("style"));
                support.hrefNormalized = a.getAttribute("href") === "/a";
                support.opacity = /^0.5/.test(a.style.opacity);
                support.cssFloat = !!a.style.cssFloat;
                support.checkOn = !!input.value;
                support.optSelected = opt.selected;
                support.enctype = !!document.createElement("form").enctype;
                support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
                support.inlineBlockNeedsLayout = false;
                support.shrinkWrapBlocks = false;
                support.pixelPosition = false;
                support.deleteExpando = true;
                support.noCloneEvent = true;
                support.reliableMarginRight = true;
                support.boxSizingReliable = true;
                input.checked = true;
                support.noCloneChecked = input.cloneNode(true).checked;
                select.disabled = true;
                support.optDisabled = !opt.disabled;
                try {
                    delete div.test
                } catch (e) {
                    support.deleteExpando = false
                }
                input = document.createElement("input");
                input.setAttribute("value", "");
                support.input = input.getAttribute("value") === "";
                input.value = "t";
                input.setAttribute("type", "radio");
                support.radioValue = input.value === "t";
                input.setAttribute("checked", "t");
                input.setAttribute("name", "t");
                fragment = document.createDocumentFragment();
                fragment.appendChild(input);
                support.appendChecked = input.checked;
                support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
                if (div.attachEvent) {
                    div.attachEvent("onclick", function() {
                        support.noCloneEvent = false
                    });
                    div.cloneNode(true).click()
                }
                for (i in {
                        submit: true,
                        change: true,
                        focusin: true
                    }) {
                    div.setAttribute(eventName = "on" + i, "t");
                    support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false
                }
                div.style.backgroundClip = "content-box";
                div.cloneNode(true).style.backgroundClip = "";
                support.clearCloneStyle = div.style.backgroundClip === "content-box";
                for (i in jQuery(support)) {
                    break
                }
                support.ownLast = i !== "0";
                jQuery(function() {
                    var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        body = document.getElementsByTagName("body")[0];
                    if (!body) {
                        return
                    }
                    container = document.createElement("div");
                    container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
                    body.appendChild(container).appendChild(div);
                    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                    tds = div.getElementsByTagName("td");
                    tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                    isSupported = tds[0].offsetHeight === 0;
                    tds[0].style.display = "";
                    tds[1].style.display = "none";
                    support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
                    div.innerHTML = "";
                    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                    jQuery.swap(body, body.style.zoom != null ? {
                        zoom: 1
                    } : {}, function() {
                        support.boxSizing = div.offsetWidth === 4
                    });
                    if (window.getComputedStyle) {
                        support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                        support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                            width: "4px"
                        }).width === "4px";
                        marginDiv = div.appendChild(document.createElement("div"));
                        marginDiv.style.cssText = div.style.cssText = divReset;
                        marginDiv.style.marginRight = marginDiv.style.width = "0";
                        div.style.width = "1px";
                        support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight)
                    }
                    if (typeof div.style.zoom !== core_strundefined) {
                        div.innerHTML = "";
                        div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                        support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                        div.style.display = "block";
                        div.innerHTML = "<div></div>";
                        div.firstChild.style.width = "5px";
                        support.shrinkWrapBlocks = div.offsetWidth !== 3;
                        if (support.inlineBlockNeedsLayout) {
                            body.style.zoom = 1
                        }
                    }
                    body.removeChild(container);
                    container = div = tds = marginDiv = null
                });
                all = select = fragment = opt = a = input = null;
                return support
            }({});
            var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                rmultiDash = /([A-Z])/g;

            function internalData(elem, name, data, pvt) {
                if (!jQuery.acceptData(elem)) {
                    return
                }
                var ret, thisCache, internalKey = jQuery.expando,
                    isNode = elem.nodeType,
                    cache = isNode ? jQuery.cache : elem,
                    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
                if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
                    return
                }
                if (!id) {
                    if (isNode) {
                        id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++
                    } else {
                        id = internalKey
                    }
                }
                if (!cache[id]) {
                    cache[id] = isNode ? {} : {
                        toJSON: jQuery.noop
                    }
                }
                if (typeof name === "object" || typeof name === "function") {
                    if (pvt) {
                        cache[id] = jQuery.extend(cache[id], name)
                    } else {
                        cache[id].data = jQuery.extend(cache[id].data, name)
                    }
                }
                thisCache = cache[id];
                if (!pvt) {
                    if (!thisCache.data) {
                        thisCache.data = {}
                    }
                    thisCache = thisCache.data
                }
                if (data !== undefined) {
                    thisCache[jQuery.camelCase(name)] = data
                }
                if (typeof name === "string") {
                    ret = thisCache[name];
                    if (ret == null) {
                        ret = thisCache[jQuery.camelCase(name)]
                    }
                } else {
                    ret = thisCache
                }
                return ret
            }

            function internalRemoveData(elem, name, pvt) {
                if (!jQuery.acceptData(elem)) {
                    return
                }
                var thisCache, i, isNode = elem.nodeType,
                    cache = isNode ? jQuery.cache : elem,
                    id = isNode ? elem[jQuery.expando] : jQuery.expando;
                if (!cache[id]) {
                    return
                }
                if (name) {
                    thisCache = pvt ? cache[id] : cache[id].data;
                    if (thisCache) {
                        if (!jQuery.isArray(name)) {
                            if (name in thisCache) {
                                name = [name]
                            } else {
                                name = jQuery.camelCase(name);
                                if (name in thisCache) {
                                    name = [name]
                                } else {
                                    name = name.split(" ")
                                }
                            }
                        } else {
                            name = name.concat(jQuery.map(name, jQuery.camelCase))
                        }
                        i = name.length;
                        while (i--) {
                            delete thisCache[name[i]]
                        }
                        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                            return
                        }
                    }
                }
                if (!pvt) {
                    delete cache[id].data;
                    if (!isEmptyDataObject(cache[id])) {
                        return
                    }
                }
                if (isNode) {
                    jQuery.cleanData([elem], true)
                } else if (jQuery.support.deleteExpando || cache != cache.window) {
                    delete cache[id]
                } else {
                    cache[id] = null
                }
            }
            jQuery.extend({
                cache: {},
                noData: {
                    applet: true,
                    embed: true,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(elem) {
                    elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
                    return !!elem && !isEmptyDataObject(elem)
                },
                data: function(elem, name, data) {
                    return internalData(elem, name, data)
                },
                removeData: function(elem, name) {
                    return internalRemoveData(elem, name)
                },
                _data: function(elem, name, data) {
                    return internalData(elem, name, data, true)
                },
                _removeData: function(elem, name) {
                    return internalRemoveData(elem, name, true)
                },
                acceptData: function(elem) {
                    if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                        return false
                    }
                    var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
                    return !noData || noData !== true && elem.getAttribute("classid") === noData
                }
            });
            jQuery.fn.extend({
                data: function(key, value) {
                    var attrs, name, data = null,
                        i = 0,
                        elem = this[0];
                    if (key === undefined) {
                        if (this.length) {
                            data = jQuery.data(elem);
                            if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                                attrs = elem.attributes;
                                for (; i < attrs.length; i++) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = jQuery.camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name])
                                    }
                                }
                                jQuery._data(elem, "parsedAttrs", true)
                            }
                        }
                        return data
                    }
                    if (typeof key === "object") {
                        return this.each(function() {
                            jQuery.data(this, key)
                        })
                    }
                    return arguments.length > 1 ? this.each(function() {
                        jQuery.data(this, key, value)
                    }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null
                },
                removeData: function(key) {
                    return this.each(function() {
                        jQuery.removeData(this, key)
                    })
                }
            });

            function dataAttr(elem, key, data) {
                if (data === undefined && elem.nodeType === 1) {
                    var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
                    data = elem.getAttribute(name);
                    if (typeof data === "string") {
                        try {
                            data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
                        } catch (e) {}
                        jQuery.data(elem, key, data)
                    } else {
                        data = undefined
                    }
                }
                return data
            }

            function isEmptyDataObject(obj) {
                var name;
                for (name in obj) {
                    if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                        continue
                    }
                    if (name !== "toJSON") {
                        return false
                    }
                }
                return true
            }
            jQuery.extend({
                queue: function(elem, type, data) {
                    var queue;
                    if (elem) {
                        type = (type || "fx") + "queue";
                        queue = jQuery._data(elem, type);
                        if (data) {
                            if (!queue || jQuery.isArray(data)) {
                                queue = jQuery._data(elem, type, jQuery.makeArray(data))
                            } else {
                                queue.push(data)
                            }
                        }
                        return queue || []
                    }
                },
                dequeue: function(elem, type) {
                    type = type || "fx";
                    var queue = jQuery.queue(elem, type),
                        startLength = queue.length,
                        fn = queue.shift(),
                        hooks = jQuery._queueHooks(elem, type),
                        next = function() {
                            jQuery.dequeue(elem, type)
                        };
                    if (fn === "inprogress") {
                        fn = queue.shift();
                        startLength--
                    }
                    if (fn) {
                        if (type === "fx") {
                            queue.unshift("inprogress")
                        }
                        delete hooks.stop;
                        fn.call(elem, next, hooks)
                    }
                    if (!startLength && hooks) {
                        hooks.empty.fire()
                    }
                },
                _queueHooks: function(elem, type) {
                    var key = type + "queueHooks";
                    return jQuery._data(elem, key) || jQuery._data(elem, key, {
                        empty: jQuery.Callbacks("once memory").add(function() {
                            jQuery._removeData(elem, type + "queue");
                            jQuery._removeData(elem, key)
                        })
                    })
                }
            });
            jQuery.fn.extend({
                queue: function(type, data) {
                    var setter = 2;
                    if (typeof type !== "string") {
                        data = type;
                        type = "fx";
                        setter--
                    }
                    if (arguments.length < setter) {
                        return jQuery.queue(this[0], type)
                    }
                    return data === undefined ? this : this.each(function() {
                        var queue = jQuery.queue(this, type, data);
                        jQuery._queueHooks(this, type);
                        if (type === "fx" && queue[0] !== "inprogress") {
                            jQuery.dequeue(this, type)
                        }
                    })
                },
                dequeue: function(type) {
                    return this.each(function() {
                        jQuery.dequeue(this, type)
                    })
                },
                delay: function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, function(next, hooks) {
                        var timeout = setTimeout(next, time);
                        hooks.stop = function() {
                            clearTimeout(timeout)
                        }
                    })
                },
                clearQueue: function(type) {
                    return this.queue(type || "fx", [])
                },
                promise: function(type, obj) {
                    var tmp, count = 1,
                        defer = jQuery.Deferred(),
                        elements = this,
                        i = this.length,
                        resolve = function() {
                            if (!--count) {
                                defer.resolveWith(elements, [elements])
                            }
                        };
                    if (typeof type !== "string") {
                        obj = type;
                        type = undefined
                    }
                    type = type || "fx";
                    while (i--) {
                        tmp = jQuery._data(elements[i], type + "queueHooks");
                        if (tmp && tmp.empty) {
                            count++;
                            tmp.empty.add(resolve)
                        }
                    }
                    resolve();
                    return defer.promise(obj)
                }
            });
            var nodeHook, boolHook, rclass = /[\t\r\n\f]/g,
                rreturn = /\r/g,
                rfocusable = /^(?:input|select|textarea|button|object)$/i,
                rclickable = /^(?:a|area)$/i,
                ruseDefault = /^(?:checked|selected)$/i,
                getSetAttribute = jQuery.support.getSetAttribute,
                getSetInput = jQuery.support.input;
            jQuery.fn.extend({
                attr: function(name, value) {
                    return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1)
                },
                removeAttr: function(name) {
                    return this.each(function() {
                        jQuery.removeAttr(this, name)
                    })
                },
                prop: function(name, value) {
                    return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1)
                },
                removeProp: function(name) {
                    name = jQuery.propFix[name] || name;
                    return this.each(function() {
                        try {
                            this[name] = undefined;
                            delete this[name]
                        } catch (e) {}
                    })
                },
                addClass: function(value) {
                    var classes, elem, cur, clazz, j, i = 0,
                        len = this.length,
                        proceed = typeof value === "string" && value;
                    if (jQuery.isFunction(value)) {
                        return this.each(function(j) {
                            jQuery(this).addClass(value.call(this, j, this.className))
                        })
                    }
                    if (proceed) {
                        classes = (value || "").match(core_rnotwhite) || [];
                        for (; i < len; i++) {
                            elem = this[i];
                            cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                            if (cur) {
                                j = 0;
                                while (clazz = classes[j++]) {
                                    if (cur.indexOf(" " + clazz + " ") < 0) {
                                        cur += clazz + " "
                                    }
                                }
                                elem.className = jQuery.trim(cur)
                            }
                        }
                    }
                    return this
                },
                removeClass: function(value) {
                    var classes, elem, cur, clazz, j, i = 0,
                        len = this.length,
                        proceed = arguments.length === 0 || typeof value === "string" && value;
                    if (jQuery.isFunction(value)) {
                        return this.each(function(j) {
                            jQuery(this).removeClass(value.call(this, j, this.className))
                        })
                    }
                    if (proceed) {
                        classes = (value || "").match(core_rnotwhite) || [];
                        for (; i < len; i++) {
                            elem = this[i];
                            cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                            if (cur) {
                                j = 0;
                                while (clazz = classes[j++]) {
                                    while (cur.indexOf(" " + clazz + " ") >= 0) {
                                        cur = cur.replace(" " + clazz + " ", " ")
                                    }
                                }
                                elem.className = value ? jQuery.trim(cur) : ""
                            }
                        }
                    }
                    return this
                },
                toggleClass: function(value, stateVal) {
                    var type = typeof value;
                    if (typeof stateVal === "boolean" && type === "string") {
                        return stateVal ? this.addClass(value) : this.removeClass(value)
                    }
                    if (jQuery.isFunction(value)) {
                        return this.each(function(i) {
                            jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
                        })
                    }
                    return this.each(function() {
                        if (type === "string") {
                            var className, i = 0,
                                self = jQuery(this),
                                classNames = value.match(core_rnotwhite) || [];
                            while (className = classNames[i++]) {
                                if (self.hasClass(className)) {
                                    self.removeClass(className)
                                } else {
                                    self.addClass(className)
                                }
                            }
                        } else if (type === core_strundefined || type === "boolean") {
                            if (this.className) {
                                jQuery._data(this, "__className__", this.className)
                            }
                            this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || ""
                        }
                    })
                },
                hasClass: function(selector) {
                    var className = " " + selector + " ",
                        i = 0,
                        l = this.length;
                    for (; i < l; i++) {
                        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                            return true
                        }
                    }
                    return false
                },
                val: function(value) {
                    var ret, hooks, isFunction, elem = this[0];
                    if (!arguments.length) {
                        if (elem) {
                            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                                return ret
                            }
                            ret = elem.value;
                            return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret
                        }
                        return
                    }
                    isFunction = jQuery.isFunction(value);
                    return this.each(function(i) {
                        var val;
                        if (this.nodeType !== 1) {
                            return
                        }
                        if (isFunction) {
                            val = value.call(this, i, jQuery(this).val())
                        } else {
                            val = value
                        }
                        if (val == null) {
                            val = ""
                        } else if (typeof val === "number") {
                            val += ""
                        } else if (jQuery.isArray(val)) {
                            val = jQuery.map(val, function(value) {
                                return value == null ? "" : value + ""
                            })
                        }
                        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                            this.value = val
                        }
                    })
                }
            });
            jQuery.extend({
                valHooks: {
                    option: {
                        get: function(elem) {
                            var val = jQuery.find.attr(elem, "value");
                            return val != null ? val : elem.text
                        }
                    },
                    select: {
                        get: function(elem) {
                            var value, option, options = elem.options,
                                index = elem.selectedIndex,
                                one = elem.type === "select-one" || index < 0,
                                values = one ? null : [],
                                max = one ? index + 1 : options.length,
                                i = index < 0 ? max : one ? index : 0;
                            for (; i < max; i++) {
                                option = options[i];
                                if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                    value = jQuery(option).val();
                                    if (one) {
                                        return value
                                    }
                                    values.push(value)
                                }
                            }
                            return values
                        },
                        set: function(elem, value) {
                            var optionSet, option, options = elem.options,
                                values = jQuery.makeArray(value),
                                i = options.length;
                            while (i--) {
                                option = options[i];
                                if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
                                    optionSet = true
                                }
                            }
                            if (!optionSet) {
                                elem.selectedIndex = -1
                            }
                            return values
                        }
                    }
                },
                attr: function(elem, name, value) {
                    var hooks, ret, nType = elem.nodeType;
                    if (!elem || nType === 3 || nType === 8 || nType === 2) {
                        return
                    }
                    if (typeof elem.getAttribute === core_strundefined) {
                        return jQuery.prop(elem, name, value)
                    }
                    if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                        name = name.toLowerCase();
                        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)
                    }
                    if (value !== undefined) {
                        if (value === null) {
                            jQuery.removeAttr(elem, name)
                        } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                            return ret
                        } else {
                            elem.setAttribute(name, value + "");
                            return value
                        }
                    } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                        return ret
                    } else {
                        ret = jQuery.find.attr(elem, name);
                        return ret == null ? undefined : ret
                    }
                },
                removeAttr: function(elem, value) {
                    var name, propName, i = 0,
                        attrNames = value && value.match(core_rnotwhite);
                    if (attrNames && elem.nodeType === 1) {
                        while (name = attrNames[i++]) {
                            propName = jQuery.propFix[name] || name;
                            if (jQuery.expr.match.bool.test(name)) {
                                if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                                    elem[propName] = false
                                } else {
                                    elem[jQuery.camelCase("default-" + name)] = elem[propName] = false
                                }
                            } else {
                                jQuery.attr(elem, name, "")
                            }
                            elem.removeAttribute(getSetAttribute ? name : propName)
                        }
                    }
                },
                attrHooks: {
                    type: {
                        set: function(elem, value) {
                            if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                                var val = elem.value;
                                elem.setAttribute("type", value);
                                if (val) {
                                    elem.value = val
                                }
                                return value
                            }
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(elem, name, value) {
                    var ret, hooks, notxml, nType = elem.nodeType;
                    if (!elem || nType === 3 || nType === 8 || nType === 2) {
                        return
                    }
                    notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
                    if (notxml) {
                        name = jQuery.propFix[name] || name;
                        hooks = jQuery.propHooks[name]
                    }
                    if (value !== undefined) {
                        return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value
                    } else {
                        return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name]
                    }
                },
                propHooks: {
                    tabIndex: {
                        get: function(elem) {
                            var tabindex = jQuery.find.attr(elem, "tabindex");
                            return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                        }
                    }
                }
            });
            boolHook = {
                set: function(elem, value, name) {
                    if (value === false) {
                        jQuery.removeAttr(elem, name)
                    } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name)
                    } else {
                        elem[jQuery.camelCase("default-" + name)] = elem[name] = true
                    }
                    return name
                }
            };
            jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
                var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
                jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
                    var fn = jQuery.expr.attrHandle[name],
                        ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
                    jQuery.expr.attrHandle[name] = fn;
                    return ret
                } : function(elem, name, isXML) {
                    return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null
                }
            });
            if (!getSetInput || !getSetAttribute) {
                jQuery.attrHooks.value = {
                    set: function(elem, value, name) {
                        if (jQuery.nodeName(elem, "input")) {
                            elem.defaultValue = value
                        } else {
                            return nodeHook && nodeHook.set(elem, value, name)
                        }
                    }
                }
            }
            if (!getSetAttribute) {
                nodeHook = {
                    set: function(elem, value, name) {
                        var ret = elem.getAttributeNode(name);
                        if (!ret) {
                            elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name))
                        }
                        ret.value = value += "";
                        return name === "value" || value === elem.getAttribute(name) ? value : undefined
                    }
                };
                jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function(elem, name, isXML) {
                    var ret;
                    return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null
                };
                jQuery.valHooks.button = {
                    get: function(elem, name) {
                        var ret = elem.getAttributeNode(name);
                        return ret && ret.specified ? ret.value : undefined
                    },
                    set: nodeHook.set
                };
                jQuery.attrHooks.contenteditable = {
                    set: function(elem, value, name) {
                        nodeHook.set(elem, value === "" ? false : value, name)
                    }
                };
                jQuery.each(["width", "height"], function(i, name) {
                    jQuery.attrHooks[name] = {
                        set: function(elem, value) {
                            if (value === "") {
                                elem.setAttribute(name, "auto");
                                return value
                            }
                        }
                    }
                })
            }
            if (!jQuery.support.hrefNormalized) {
                jQuery.each(["href", "src"], function(i, name) {
                    jQuery.propHooks[name] = {
                        get: function(elem) {
                            return elem.getAttribute(name, 4)
                        }
                    }
                })
            }
            if (!jQuery.support.style) {
                jQuery.attrHooks.style = {
                    get: function(elem) {
                        return elem.style.cssText || undefined
                    },
                    set: function(elem, value) {
                        return elem.style.cssText = value + ""
                    }
                }
            }
            if (!jQuery.support.optSelected) {
                jQuery.propHooks.selected = {
                    get: function(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) {
                                parent.parentNode.selectedIndex
                            }
                        }
                        return null
                    }
                }
            }
            jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                jQuery.propFix[this.toLowerCase()] = this
            });
            if (!jQuery.support.enctype) {
                jQuery.propFix.enctype = "encoding"
            }
            jQuery.each(["radio", "checkbox"], function() {
                jQuery.valHooks[this] = {
                    set: function(elem, value) {
                        if (jQuery.isArray(value)) {
                            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0
                        }
                    }
                };
                if (!jQuery.support.checkOn) {
                    jQuery.valHooks[this].get = function(elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value
                    }
                }
            });
            var rformElems = /^(?:input|select|textarea)$/i,
                rkeyEvent = /^key/,
                rmouseEvent = /^(?:mouse|contextmenu)|click/,
                rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
                rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

            function returnTrue() {
                return true
            }

            function returnFalse() {
                return false
            }

            function safeActiveElement() {
                try {
                    return document.activeElement
                } catch (err) {}
            }
            jQuery.event = {
                global: {},
                add: function(elem, types, handler, data, selector) {
                    var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
                    if (!elemData) {
                        return
                    }
                    if (handler.handler) {
                        handleObjIn = handler;
                        handler = handleObjIn.handler;
                        selector = handleObjIn.selector
                    }
                    if (!handler.guid) {
                        handler.guid = jQuery.guid++
                    }
                    if (!(events = elemData.events)) {
                        events = elemData.events = {}
                    }
                    if (!(eventHandle = elemData.handle)) {
                        eventHandle = elemData.handle = function(e) {
                            return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined
                        };
                        eventHandle.elem = elem
                    }
                    types = (types || "").match(core_rnotwhite) || [""];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort();
                        if (!type) {
                            continue
                        }
                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        special = jQuery.event.special[type] || {};
                        handleObj = jQuery.extend({
                            type: type,
                            origType: origType,
                            data: data,
                            handler: handler,
                            guid: handler.guid,
                            selector: selector,
                            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                            namespace: namespaces.join(".")
                        }, handleObjIn);
                        if (!(handlers = events[type])) {
                            handlers = events[type] = [];
                            handlers.delegateCount = 0;
                            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                                if (elem.addEventListener) {
                                    elem.addEventListener(type, eventHandle, false)
                                } else if (elem.attachEvent) {
                                    elem.attachEvent("on" + type, eventHandle)
                                }
                            }
                        }
                        if (special.add) {
                            special.add.call(elem, handleObj);
                            if (!handleObj.handler.guid) {
                                handleObj.handler.guid = handler.guid
                            }
                        }
                        if (selector) {
                            handlers.splice(handlers.delegateCount++, 0, handleObj)
                        } else {
                            handlers.push(handleObj)
                        }
                        jQuery.event.global[type] = true
                    }
                    elem = null
                },
                remove: function(elem, types, handler, selector, mappedTypes) {
                    var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
                    if (!elemData || !(events = elemData.events)) {
                        return
                    }
                    types = (types || "").match(core_rnotwhite) || [""];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort();
                        if (!type) {
                            for (type in events) {
                                jQuery.event.remove(elem, type + types[t], handler, selector, true)
                            }
                            continue
                        }
                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        handlers = events[type] || [];
                        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        origCount = j = handlers.length;
                        while (j--) {
                            handleObj = handlers[j];
                            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                                handlers.splice(j, 1);
                                if (handleObj.selector) {
                                    handlers.delegateCount--
                                }
                                if (special.remove) {
                                    special.remove.call(elem, handleObj)
                                }
                            }
                        }
                        if (origCount && !handlers.length) {
                            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                                jQuery.removeEvent(elem, type, elemData.handle)
                            }
                            delete events[type]
                        }
                    }
                    if (jQuery.isEmptyObject(events)) {
                        delete elemData.handle;
                        jQuery._removeData(elem, "events")
                    }
                },
                trigger: function(event, data, elem, onlyHandlers) {
                    var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
                        type = core_hasOwn.call(event, "type") ? event.type : event,
                        namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                    cur = tmp = elem = elem || document;
                    if (elem.nodeType === 3 || elem.nodeType === 8) {
                        return
                    }
                    if (rfocusMorph.test(type + jQuery.event.triggered)) {
                        return
                    }
                    if (type.indexOf(".") >= 0) {
                        namespaces = type.split(".");
                        type = namespaces.shift();
                        namespaces.sort()
                    }
                    ontype = type.indexOf(":") < 0 && "on" + type;
                    event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                    event.isTrigger = onlyHandlers ? 2 : 3;
                    event.namespace = namespaces.join(".");
                    event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    event.result = undefined;
                    if (!event.target) {
                        event.target = elem
                    }
                    data = data == null ? [event] : jQuery.makeArray(data, [event]);
                    special = jQuery.event.special[type] || {};
                    if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                        return
                    }
                    if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                        bubbleType = special.delegateType || type;
                        if (!rfocusMorph.test(bubbleType + type)) {
                            cur = cur.parentNode
                        }
                        for (; cur; cur = cur.parentNode) {
                            eventPath.push(cur);
                            tmp = cur
                        }
                        if (tmp === (elem.ownerDocument || document)) {
                            eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                        }
                    }
                    i = 0;
                    while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                        event.type = i > 1 ? bubbleType : special.bindType || type;
                        handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                        if (handle) {
                            handle.apply(cur, data)
                        }
                        handle = ontype && cur[ontype];
                        if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                            event.preventDefault()
                        }
                    }
                    event.type = type;
                    if (!onlyHandlers && !event.isDefaultPrevented()) {
                        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                            if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                                tmp = elem[ontype];
                                if (tmp) {
                                    elem[ontype] = null
                                }
                                jQuery.event.triggered = type;
                                try {
                                    elem[type]()
                                } catch (e) {}
                                jQuery.event.triggered = undefined;
                                if (tmp) {
                                    elem[ontype] = tmp
                                }
                            }
                        }
                    }
                    return event.result
                },
                dispatch: function(event) {
                    event = jQuery.event.fix(event);
                    var i, ret, handleObj, matched, j, handlerQueue = [],
                        args = core_slice.call(arguments),
                        handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                        special = jQuery.event.special[event.type] || {};
                    args[0] = event;
                    event.delegateTarget = this;
                    if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                        return
                    }
                    handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                    i = 0;
                    while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                        event.currentTarget = matched.elem;
                        j = 0;
                        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                            if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (ret !== undefined) {
                                    if ((event.result = ret) === false) {
                                        event.preventDefault();
                                        event.stopPropagation()
                                    }
                                }
                            }
                        }
                    }
                    if (special.postDispatch) {
                        special.postDispatch.call(this, event)
                    }
                    return event.result
                },
                handlers: function(event, handlers) {
                    var sel, handleObj, matches, i, handlerQueue = [],
                        delegateCount = handlers.delegateCount,
                        cur = event.target;
                    if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                        for (; cur != this; cur = cur.parentNode || this) {
                            if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                                matches = [];
                                for (i = 0; i < delegateCount; i++) {
                                    handleObj = handlers[i];
                                    sel = handleObj.selector + " ";
                                    if (matches[sel] === undefined) {
                                        matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length
                                    }
                                    if (matches[sel]) {
                                        matches.push(handleObj)
                                    }
                                }
                                if (matches.length) {
                                    handlerQueue.push({
                                        elem: cur,
                                        handlers: matches
                                    })
                                }
                            }
                        }
                    }
                    if (delegateCount < handlers.length) {
                        handlerQueue.push({
                            elem: this,
                            handlers: handlers.slice(delegateCount)
                        })
                    }
                    return handlerQueue
                },
                fix: function(event) {
                    if (event[jQuery.expando]) {
                        return event
                    }
                    var i, prop, copy, type = event.type,
                        originalEvent = event,
                        fixHook = this.fixHooks[type];
                    if (!fixHook) {
                        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}
                    }
                    copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                    event = new jQuery.Event(originalEvent);
                    i = copy.length;
                    while (i--) {
                        prop = copy[i];
                        event[prop] = originalEvent[prop]
                    }
                    if (!event.target) {
                        event.target = originalEvent.srcElement || document
                    }
                    if (event.target.nodeType === 3) {
                        event.target = event.target.parentNode
                    }
                    event.metaKey = !!event.metaKey;
                    return fixHook.filter ? fixHook.filter(event, originalEvent) : event
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(event, original) {
                        if (event.which == null) {
                            event.which = original.charCode != null ? original.charCode : original.keyCode
                        }
                        return event
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(event, original) {
                        var body, eventDoc, doc, button = original.button,
                            fromElement = original.fromElement;
                        if (event.pageX == null && original.clientX != null) {
                            eventDoc = event.target.ownerDocument || document;
                            doc = eventDoc.documentElement;
                            body = eventDoc.body;
                            event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                            event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
                        }
                        if (!event.relatedTarget && fromElement) {
                            event.relatedTarget = fromElement === event.target ? original.toElement : fromElement
                        }
                        if (!event.which && button !== undefined) {
                            event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0
                        }
                        return event
                    }
                },
                special: {
                    load: {
                        noBubble: true
                    },
                    focus: {
                        trigger: function() {
                            if (this !== safeActiveElement() && this.focus) {
                                try {
                                    this.focus();
                                    return false
                                } catch (e) {}
                            }
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === safeActiveElement() && this.blur) {
                                this.blur();
                                return false
                            }
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                                this.click();
                                return false
                            }
                        },
                        _default: function(event) {
                            return jQuery.nodeName(event.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(event) {
                            if (event.result !== undefined) {
                                event.originalEvent.returnValue = event.result
                            }
                        }
                    }
                },
                simulate: function(type, elem, event, bubble) {
                    var e = jQuery.extend(new jQuery.Event, event, {
                        type: type,
                        isSimulated: true,
                        originalEvent: {}
                    });
                    if (bubble) {
                        jQuery.event.trigger(e, null, elem)
                    } else {
                        jQuery.event.dispatch.call(elem, e)
                    }
                    if (e.isDefaultPrevented()) {
                        event.preventDefault()
                    }
                }
            };
            jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
                if (elem.removeEventListener) {
                    elem.removeEventListener(type, handle, false)
                }
            } : function(elem, type, handle) {
                var name = "on" + type;
                if (elem.detachEvent) {
                    if (typeof elem[name] === core_strundefined) {
                        elem[name] = null
                    }
                    elem.detachEvent(name, handle)
                }
            };
            jQuery.Event = function(src, props) {
                if (!(this instanceof jQuery.Event)) {
                    return new jQuery.Event(src, props)
                }
                if (src && src.type) {
                    this.originalEvent = src;
                    this.type = src.type;
                    this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse
                } else {
                    this.type = src
                }
                if (props) {
                    jQuery.extend(this, props)
                }
                this.timeStamp = src && src.timeStamp || jQuery.now();
                this[jQuery.expando] = true
            };
            jQuery.Event.prototype = {
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = returnTrue;
                    if (!e) {
                        return
                    }
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        e.returnValue = false
                    }
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = returnTrue;
                    if (!e) {
                        return
                    }
                    if (e.stopPropagation) {
                        e.stopPropagation()
                    }
                    e.cancelBubble = true
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = returnTrue;
                    this.stopPropagation()
                }
            };
            jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(orig, fix) {
                jQuery.event.special[orig] = {
                    delegateType: fix,
                    bindType: fix,
                    handle: function(event) {
                        var ret, target = this,
                            related = event.relatedTarget,
                            handleObj = event.handleObj;
                        if (!related || related !== target && !jQuery.contains(target, related)) {
                            event.type = handleObj.origType;
                            ret = handleObj.handler.apply(this, arguments);
                            event.type = fix
                        }
                        return ret
                    }
                }
            });
            if (!jQuery.support.submitBubbles) {
                jQuery.event.special.submit = {
                    setup: function() {
                        if (jQuery.nodeName(this, "form")) {
                            return false
                        }
                        jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                            var elem = e.target,
                                form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                            if (form && !jQuery._data(form, "submitBubbles")) {
                                jQuery.event.add(form, "submit._submit", function(event) {
                                    event._submit_bubble = true
                                });
                                jQuery._data(form, "submitBubbles", true)
                            }
                        })
                    },
                    postDispatch: function(event) {
                        if (event._submit_bubble) {
                            delete event._submit_bubble;
                            if (this.parentNode && !event.isTrigger) {
                                jQuery.event.simulate("submit", this.parentNode, event, true)
                            }
                        }
                    },
                    teardown: function() {
                        if (jQuery.nodeName(this, "form")) {
                            return false
                        }
                        jQuery.event.remove(this, "._submit")
                    }
                }
            }
            if (!jQuery.support.changeBubbles) {
                jQuery.event.special.change = {
                    setup: function() {
                        if (rformElems.test(this.nodeName)) {
                            if (this.type === "checkbox" || this.type === "radio") {
                                jQuery.event.add(this, "propertychange._change", function(event) {
                                    if (event.originalEvent.propertyName === "checked") {
                                        this._just_changed = true
                                    }
                                });
                                jQuery.event.add(this, "click._change", function(event) {
                                    if (this._just_changed && !event.isTrigger) {
                                        this._just_changed = false
                                    }
                                    jQuery.event.simulate("change", this, event, true)
                                })
                            }
                            return false
                        }
                        jQuery.event.add(this, "beforeactivate._change", function(e) {
                            var elem = e.target;
                            if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                                jQuery.event.add(elem, "change._change", function(event) {
                                    if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                        jQuery.event.simulate("change", this.parentNode, event, true)
                                    }
                                });
                                jQuery._data(elem, "changeBubbles", true)
                            }
                        })
                    },
                    handle: function(event) {
                        var elem = event.target;
                        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                            return event.handleObj.handler.apply(this, arguments)
                        }
                    },
                    teardown: function() {
                        jQuery.event.remove(this, "._change");
                        return !rformElems.test(this.nodeName)
                    }
                }
            }
            if (!jQuery.support.focusinBubbles) {
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(orig, fix) {
                    var attaches = 0,
                        handler = function(event) {
                            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true)
                        };
                    jQuery.event.special[fix] = {
                        setup: function() {
                            if (attaches++ === 0) {
                                document.addEventListener(orig, handler, true)
                            }
                        },
                        teardown: function() {
                            if (--attaches === 0) {
                                document.removeEventListener(orig, handler, true)
                            }
                        }
                    }
                })
            }
            jQuery.fn.extend({
                on: function(types, selector, data, fn, one) {
                    var type, origFn;
                    if (typeof types === "object") {
                        if (typeof selector !== "string") {
                            data = data || selector;
                            selector = undefined
                        }
                        for (type in types) {
                            this.on(type, selector, data, types[type], one)
                        }
                        return this
                    }
                    if (data == null && fn == null) {
                        fn = selector;
                        data = selector = undefined
                    } else if (fn == null) {
                        if (typeof selector === "string") {
                            fn = data;
                            data = undefined
                        } else {
                            fn = data;
                            data = selector;
                            selector = undefined
                        }
                    }
                    if (fn === false) {
                        fn = returnFalse
                    } else if (!fn) {
                        return this
                    }
                    if (one === 1) {
                        origFn = fn;
                        fn = function(event) {
                            jQuery().off(event);
                            return origFn.apply(this, arguments)
                        };
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
                    }
                    return this.each(function() {
                        jQuery.event.add(this, types, fn, data, selector)
                    })
                },
                one: function(types, selector, data, fn) {
                    return this.on(types, selector, data, fn, 1)
                },
                off: function(types, selector, fn) {
                    var handleObj, type;
                    if (types && types.preventDefault && types.handleObj) {
                        handleObj = types.handleObj;
                        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                        return this
                    }
                    if (typeof types === "object") {
                        for (type in types) {
                            this.off(type, selector, types[type])
                        }
                        return this
                    }
                    if (selector === false || typeof selector === "function") {
                        fn = selector;
                        selector = undefined
                    }
                    if (fn === false) {
                        fn = returnFalse
                    }
                    return this.each(function() {
                        jQuery.event.remove(this, types, fn, selector)
                    })
                },
                trigger: function(type, data) {
                    return this.each(function() {
                        jQuery.event.trigger(type, data, this)
                    })
                },
                triggerHandler: function(type, data) {
                    var elem = this[0];
                    if (elem) {
                        return jQuery.event.trigger(type, data, elem, true)
                    }
                }
            });
            var isSimple = /^.[^:#\[\.,]*$/,
                rparentsprev = /^(?:parents|prev(?:Until|All))/,
                rneedsContext = jQuery.expr.match.needsContext,
                guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
            jQuery.fn.extend({
                find: function(selector) {
                    var i, ret = [],
                        self = this,
                        len = self.length;
                    if (typeof selector !== "string") {
                        return this.pushStack(jQuery(selector).filter(function() {
                            for (i = 0; i < len; i++) {
                                if (jQuery.contains(self[i], this)) {
                                    return true
                                }
                            }
                        }))
                    }
                    for (i = 0; i < len; i++) {
                        jQuery.find(selector, self[i], ret)
                    }
                    ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                    ret.selector = this.selector ? this.selector + " " + selector : selector;
                    return ret
                },
                has: function(target) {
                    var i, targets = jQuery(target, this),
                        len = targets.length;
                    return this.filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(this, targets[i])) {
                                return true
                            }
                        }
                    })
                },
                not: function(selector) {
                    return this.pushStack(winnow(this, selector || [], true))
                },
                filter: function(selector) {
                    return this.pushStack(winnow(this, selector || [], false))
                },
                is: function(selector) {
                    return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length
                },
                closest: function(selectors, context) {
                    var cur, i = 0,
                        l = this.length,
                        ret = [],
                        pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                    for (; i < l; i++) {
                        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                            if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                                cur = ret.push(cur);
                                break
                            }
                        }
                    }
                    return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret)
                },
                index: function(elem) {
                    if (!elem) {
                        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    }
                    if (typeof elem === "string") {
                        return jQuery.inArray(this[0], jQuery(elem))
                    }
                    return jQuery.inArray(elem.jquery ? elem[0] : elem, this)
                },
                add: function(selector, context) {
                    var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
                        all = jQuery.merge(this.get(), set);
                    return this.pushStack(jQuery.unique(all))
                },
                addBack: function(selector) {
                    return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
                }
            });

            function sibling(cur, dir) {
                do {
                    cur = cur[dir]
                } while (cur && cur.nodeType !== 1);
                return cur
            }
            jQuery.each({
                parent: function(elem) {
                    var parent = elem.parentNode;
                    return parent && parent.nodeType !== 11 ? parent : null
                },
                parents: function(elem) {
                    return jQuery.dir(elem, "parentNode")
                },
                parentsUntil: function(elem, i, until) {
                    return jQuery.dir(elem, "parentNode", until)
                },
                next: function(elem) {
                    return sibling(elem, "nextSibling")
                },
                prev: function(elem) {
                    return sibling(elem, "previousSibling")
                },
                nextAll: function(elem) {
                    return jQuery.dir(elem, "nextSibling")
                },
                prevAll: function(elem) {
                    return jQuery.dir(elem, "previousSibling")
                },
                nextUntil: function(elem, i, until) {
                    return jQuery.dir(elem, "nextSibling", until)
                },
                prevUntil: function(elem, i, until) {
                    return jQuery.dir(elem, "previousSibling", until)
                },
                siblings: function(elem) {
                    return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
                },
                children: function(elem) {
                    return jQuery.sibling(elem.firstChild)
                },
                contents: function(elem) {
                    return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes)
                }
            }, function(name, fn) {
                jQuery.fn[name] = function(until, selector) {
                    var ret = jQuery.map(this, fn, until);
                    if (name.slice(-5) !== "Until") {
                        selector = until
                    }
                    if (selector && typeof selector === "string") {
                        ret = jQuery.filter(selector, ret)
                    }
                    if (this.length > 1) {
                        if (!guaranteedUnique[name]) {
                            ret = jQuery.unique(ret)
                        }
                        if (rparentsprev.test(name)) {
                            ret = ret.reverse()
                        }
                    }
                    return this.pushStack(ret)
                }
            });
            jQuery.extend({
                filter: function(expr, elems, not) {
                    var elem = elems[0];
                    if (not) {
                        expr = ":not(" + expr + ")"
                    }
                    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                        return elem.nodeType === 1
                    }))
                },
                dir: function(elem, dir, until) {
                    var matched = [],
                        cur = elem[dir];
                    while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                        if (cur.nodeType === 1) {
                            matched.push(cur)
                        }
                        cur = cur[dir]
                    }
                    return matched
                },
                sibling: function(n, elem) {
                    var r = [];
                    for (; n; n = n.nextSibling) {
                        if (n.nodeType === 1 && n !== elem) {
                            r.push(n)
                        }
                    }
                    return r
                }
            });

            function winnow(elements, qualifier, not) {
                if (jQuery.isFunction(qualifier)) {
                    return jQuery.grep(elements, function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not
                    })
                }
                if (qualifier.nodeType) {
                    return jQuery.grep(elements, function(elem) {
                        return elem === qualifier !== not
                    })
                }
                if (typeof qualifier === "string") {
                    if (isSimple.test(qualifier)) {
                        return jQuery.filter(qualifier, elements, not)
                    }
                    qualifier = jQuery.filter(qualifier, elements)
                }
                return jQuery.grep(elements, function(elem) {
                    return jQuery.inArray(elem, qualifier) >= 0 !== not
                })
            }

            function createSafeFragment(document) {
                var list = nodeNames.split("|"),
                    safeFrag = document.createDocumentFragment();
                if (safeFrag.createElement) {
                    while (list.length) {
                        safeFrag.createElement(list.pop())
                    }
                }
                return safeFrag
            }
            var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
                rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
                rleadingWhitespace = /^\s+/,
                rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                rtagName = /<([\w:]+)/,
                rtbody = /<tbody/i,
                rhtml = /<|&#?\w+;/,
                rnoInnerhtml = /<(?:script|style|link)/i,
                manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                rscriptType = /^$|\/(?:java|ecma)script/i,
                rscriptTypeMasked = /^true\/(.*)/,
                rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                wrapMap = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                safeFragment = createSafeFragment(document),
                fragmentDiv = safeFragment.appendChild(document.createElement("div"));
            wrapMap.optgroup = wrapMap.option;
            wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
            wrapMap.th = wrapMap.td;
            jQuery.fn.extend({
                text: function(value) {
                    return jQuery.access(this, function(value) {
                        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value))
                    }, null, value, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.appendChild(elem)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.insertBefore(elem, target.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this)
                        }
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this.nextSibling)
                        }
                    })
                },
                remove: function(selector, keepData) {
                    var elem, elems = selector ? jQuery.filter(selector, this) : this,
                        i = 0;
                    for (;
                        (elem = elems[i]) != null; i++) {
                        if (!keepData && elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem))
                        }
                        if (elem.parentNode) {
                            if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                                setGlobalEval(getAll(elem, "script"))
                            }
                            elem.parentNode.removeChild(elem)
                        }
                    }
                    return this
                },
                empty: function() {
                    var elem, i = 0;
                    for (;
                        (elem = this[i]) != null; i++) {
                        if (elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem, false))
                        }
                        while (elem.firstChild) {
                            elem.removeChild(elem.firstChild)
                        }
                        if (elem.options && jQuery.nodeName(elem, "select")) {
                            elem.options.length = 0
                        }
                    }
                    return this
                },
                clone: function(dataAndEvents, deepDataAndEvents) {
                    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                    return this.map(function() {
                        return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                    })
                },
                html: function(value) {
                    return jQuery.access(this, function(value) {
                        var elem = this[0] || {},
                            i = 0,
                            l = this.length;
                        if (value === undefined) {
                            return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined
                        }
                        if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                            value = value.replace(rxhtmlTag, "<$1></$2>");
                            try {
                                for (; i < l; i++) {
                                    elem = this[i] || {};
                                    if (elem.nodeType === 1) {
                                        jQuery.cleanData(getAll(elem, false));
                                        elem.innerHTML = value
                                    }
                                }
                                elem = 0
                            } catch (e) {}
                        }
                        if (elem) {
                            this.empty().append(value)
                        }
                    }, null, value, arguments.length)
                },
                replaceWith: function() {
                    var args = jQuery.map(this, function(elem) {
                            return [elem.nextSibling, elem.parentNode]
                        }),
                        i = 0;
                    this.domManip(arguments, function(elem) {
                        var next = args[i++],
                            parent = args[i++];
                        if (parent) {
                            if (next && next.parentNode !== parent) {
                                next = this.nextSibling
                            }
                            jQuery(this).remove();
                            parent.insertBefore(elem, next)
                        }
                    }, true);
                    return i ? this : this.remove()
                },
                detach: function(selector) {
                    return this.remove(selector, true)
                },
                domManip: function(args, callback, allowIntersection) {
                    args = core_concat.apply([], args);
                    var first, node, hasScripts, scripts, doc, fragment, i = 0,
                        l = this.length,
                        set = this,
                        iNoClone = l - 1,
                        value = args[0],
                        isFunction = jQuery.isFunction(value);
                    if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                        return this.each(function(index) {
                            var self = set.eq(index);
                            if (isFunction) {
                                args[0] = value.call(this, index, self.html())
                            }
                            self.domManip(args, callback, allowIntersection)
                        })
                    }
                    if (l) {
                        fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
                        first = fragment.firstChild;
                        if (fragment.childNodes.length === 1) {
                            fragment = first
                        }
                        if (first) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            for (; i < l; i++) {
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    if (hasScripts) {
                                        jQuery.merge(scripts, getAll(node, "script"))
                                    }
                                }
                                callback.call(this[i], node, i)
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                jQuery.map(scripts, restoreScript);
                                for (i = 0; i < hasScripts; i++) {
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                        if (node.src) {
                                            jQuery._evalUrl(node.src)
                                        } else {
                                            jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""))
                                        }
                                    }
                                }
                            }
                            fragment = first = null
                        }
                    }
                    return this
                }
            });

            function manipulationTarget(elem, content) {
                return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
            }

            function disableScript(elem) {
                elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
                return elem
            }

            function restoreScript(elem) {
                var match = rscriptTypeMasked.exec(elem.type);
                if (match) {
                    elem.type = match[1]
                } else {
                    elem.removeAttribute("type")
                }
                return elem
            }

            function setGlobalEval(elems, refElements) {
                var elem, i = 0;
                for (;
                    (elem = elems[i]) != null; i++) {
                    jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"))
                }
            }

            function cloneCopyEvent(src, dest) {
                if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
                    return
                }
                var type, i, l, oldData = jQuery._data(src),
                    curData = jQuery._data(dest, oldData),
                    events = oldData.events;
                if (events) {
                    delete curData.handle;
                    curData.events = {};
                    for (type in events) {
                        for (i = 0, l = events[type].length; i < l; i++) {
                            jQuery.event.add(dest, type, events[type][i])
                        }
                    }
                }
                if (curData.data) {
                    curData.data = jQuery.extend({}, curData.data)
                }
            }

            function fixCloneNodeIssues(src, dest) {
                var nodeName, e, data;
                if (dest.nodeType !== 1) {
                    return
                }
                nodeName = dest.nodeName.toLowerCase();
                if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
                    data = jQuery._data(dest);
                    for (e in data.events) {
                        jQuery.removeEvent(dest, e, data.handle)
                    }
                    dest.removeAttribute(jQuery.expando)
                }
                if (nodeName === "script" && dest.text !== src.text) {
                    disableScript(dest).text = src.text;
                    restoreScript(dest)
                } else if (nodeName === "object") {
                    if (dest.parentNode) {
                        dest.outerHTML = src.outerHTML
                    }
                    if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
                        dest.innerHTML = src.innerHTML
                    }
                } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
                    dest.defaultChecked = dest.checked = src.checked;
                    if (dest.value !== src.value) {
                        dest.value = src.value
                    }
                } else if (nodeName === "option") {
                    dest.defaultSelected = dest.selected = src.defaultSelected
                } else if (nodeName === "input" || nodeName === "textarea") {
                    dest.defaultValue = src.defaultValue
                }
            }
            jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(name, original) {
                jQuery.fn[name] = function(selector) {
                    var elems, i = 0,
                        ret = [],
                        insert = jQuery(selector),
                        last = insert.length - 1;
                    for (; i <= last; i++) {
                        elems = i === last ? this : this.clone(true);
                        jQuery(insert[i])[original](elems);
                        core_push.apply(ret, elems.get())
                    }
                    return this.pushStack(ret)
                }
            });

            function getAll(context, tag) {
                var elems, elem, i = 0,
                    found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
                if (!found) {
                    for (found = [], elems = context.childNodes || context;
                        (elem = elems[i]) != null; i++) {
                        if (!tag || jQuery.nodeName(elem, tag)) {
                            found.push(elem)
                        } else {
                            jQuery.merge(found, getAll(elem, tag))
                        }
                    }
                }
                return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
            }

            function fixDefaultChecked(elem) {
                if (manipulation_rcheckableType.test(elem.type)) {
                    elem.defaultChecked = elem.checked
                }
            }
            jQuery.extend({
                clone: function(elem, dataAndEvents, deepDataAndEvents) {
                    var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
                    if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                        clone = elem.cloneNode(true)
                    } else {
                        fragmentDiv.innerHTML = elem.outerHTML;
                        fragmentDiv.removeChild(clone = fragmentDiv.firstChild)
                    }
                    if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                        destElements = getAll(clone);
                        srcElements = getAll(elem);
                        for (i = 0;
                            (node = srcElements[i]) != null; ++i) {
                            if (destElements[i]) {
                                fixCloneNodeIssues(node, destElements[i])
                            }
                        }
                    }
                    if (dataAndEvents) {
                        if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0;
                                (node = srcElements[i]) != null; i++) {
                                cloneCopyEvent(node, destElements[i])
                            }
                        } else {
                            cloneCopyEvent(elem, clone)
                        }
                    }
                    destElements = getAll(clone, "script");
                    if (destElements.length > 0) {
                        setGlobalEval(destElements, !inPage && getAll(elem, "script"))
                    }
                    destElements = srcElements = node = null;
                    return clone
                },
                buildFragment: function(elems, context, scripts, selection) {
                    var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length,
                        safe = createSafeFragment(context),
                        nodes = [],
                        i = 0;
                    for (; i < l; i++) {
                        elem = elems[i];
                        if (elem || elem === 0) {
                            if (jQuery.type(elem) === "object") {
                                jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
                            } else if (!rhtml.test(elem)) {
                                nodes.push(context.createTextNode(elem))
                            } else {
                                tmp = tmp || safe.appendChild(context.createElement("div"));
                                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                                wrap = wrapMap[tag] || wrapMap._default;
                                tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                                j = wrap[0];
                                while (j--) {
                                    tmp = tmp.lastChild
                                }
                                if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                                    nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]))
                                }
                                if (!jQuery.support.tbody) {
                                    elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                                    j = elem && elem.childNodes.length;
                                    while (j--) {
                                        if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                            elem.removeChild(tbody)
                                        }
                                    }
                                }
                                jQuery.merge(nodes, tmp.childNodes);
                                tmp.textContent = "";
                                while (tmp.firstChild) {
                                    tmp.removeChild(tmp.firstChild)
                                }
                                tmp = safe.lastChild
                            }
                        }
                    }
                    if (tmp) {
                        safe.removeChild(tmp)
                    }
                    if (!jQuery.support.appendChecked) {
                        jQuery.grep(getAll(nodes, "input"), fixDefaultChecked)
                    }
                    i = 0;
                    while (elem = nodes[i++]) {
                        if (selection && jQuery.inArray(elem, selection) !== -1) {
                            continue
                        }
                        contains = jQuery.contains(elem.ownerDocument, elem);
                        tmp = getAll(safe.appendChild(elem), "script");
                        if (contains) {
                            setGlobalEval(tmp)
                        }
                        if (scripts) {
                            j = 0;
                            while (elem = tmp[j++]) {
                                if (rscriptType.test(elem.type || "")) {
                                    scripts.push(elem)
                                }
                            }
                        }
                    }
                    tmp = null;
                    return safe
                },
                cleanData: function(elems, acceptData) {
                    var elem, type, id, data, i = 0,
                        internalKey = jQuery.expando,
                        cache = jQuery.cache,
                        deleteExpando = jQuery.support.deleteExpando,
                        special = jQuery.event.special;
                    for (;
                        (elem = elems[i]) != null; i++) {
                        if (acceptData || jQuery.acceptData(elem)) {
                            id = elem[internalKey];
                            data = id && cache[id];
                            if (data) {
                                if (data.events) {
                                    for (type in data.events) {
                                        if (special[type]) {
                                            jQuery.event.remove(elem, type)
                                        } else {
                                            jQuery.removeEvent(elem, type, data.handle)
                                        }
                                    }
                                }
                                if (cache[id]) {
                                    delete cache[id];
                                    if (deleteExpando) {
                                        delete elem[internalKey]
                                    } else if (typeof elem.removeAttribute !== core_strundefined) {
                                        elem.removeAttribute(internalKey)
                                    } else {
                                        elem[internalKey] = null
                                    }
                                    core_deletedIds.push(id)
                                }
                            }
                        }
                    }
                },
                _evalUrl: function(url) {
                    return jQuery.ajax({
                        url: url,
                        type: "GET",
                        dataType: "script",
                        async: false,
                        global: false,
                        "throws": true
                    })
                }
            });
            jQuery.fn.extend({
                wrapAll: function(html) {
                    if (jQuery.isFunction(html)) {
                        return this.each(function(i) {
                            jQuery(this).wrapAll(html.call(this, i))
                        })
                    }
                    if (this[0]) {
                        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                        if (this[0].parentNode) {
                            wrap.insertBefore(this[0])
                        }
                        wrap.map(function() {
                            var elem = this;
                            while (elem.firstChild && elem.firstChild.nodeType === 1) {
                                elem = elem.firstChild
                            }
                            return elem
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(html) {
                    if (jQuery.isFunction(html)) {
                        return this.each(function(i) {
                            jQuery(this).wrapInner(html.call(this, i))
                        })
                    }
                    return this.each(function() {
                        var self = jQuery(this),
                            contents = self.contents();
                        if (contents.length) {
                            contents.wrapAll(html)
                        } else {
                            self.append(html)
                        }
                    })
                },
                wrap: function(html) {
                    var isFunction = jQuery.isFunction(html);
                    return this.each(function(i) {
                        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        if (!jQuery.nodeName(this, "body")) {
                            jQuery(this).replaceWith(this.childNodes)
                        }
                    }).end()
                }
            });
            var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i,
                ropacity = /opacity\s*=\s*([^)]*)/,
                rposition = /^(top|right|bottom|left)$/,
                rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                rmargin = /^margin/,
                rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
                rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
                rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
                elemdisplay = {
                    BODY: "block"
                },
                cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                cssNormalTransform = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                cssExpand = ["Top", "Right", "Bottom", "Left"],
                cssPrefixes = ["Webkit", "O", "Moz", "ms"];

            function vendorPropName(style, name) {
                if (name in style) {
                    return name
                }
                var capName = name.charAt(0).toUpperCase() + name.slice(1),
                    origName = name,
                    i = cssPrefixes.length;
                while (i--) {
                    name = cssPrefixes[i] + capName;
                    if (name in style) {
                        return name
                    }
                }
                return origName
            }

            function isHidden(elem, el) {
                elem = el || elem;
                return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem)
            }

            function showHide(elements, show) {
                var display, elem, hidden, values = [],
                    index = 0,
                    length = elements.length;
                for (; index < length; index++) {
                    elem = elements[index];
                    if (!elem.style) {
                        continue
                    }
                    values[index] = jQuery._data(elem, "olddisplay");
                    display = elem.style.display;
                    if (show) {
                        if (!values[index] && display === "none") {
                            elem.style.display = ""
                        }
                        if (elem.style.display === "" && isHidden(elem)) {
                            values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName))
                        }
                    } else {
                        if (!values[index]) {
                            hidden = isHidden(elem);
                            if (display && display !== "none" || !hidden) {
                                jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))
                            }
                        }
                    }
                }
                for (index = 0; index < length; index++) {
                    elem = elements[index];
                    if (!elem.style) {
                        continue
                    }
                    if (!show || elem.style.display === "none" || elem.style.display === "") {
                        elem.style.display = show ? values[index] || "" : "none"
                    }
                }
                return elements
            }
            jQuery.fn.extend({
                css: function(name, value) {
                    return jQuery.access(this, function(elem, name, value) {
                        var len, styles, map = {},
                            i = 0;
                        if (jQuery.isArray(name)) {
                            styles = getStyles(elem);
                            len = name.length;
                            for (; i < len; i++) {
                                map[name[i]] = jQuery.css(elem, name[i], false, styles)
                            }
                            return map
                        }
                        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                    }, name, value, arguments.length > 1)
                },
                show: function() {
                    return showHide(this, true)
                },
                hide: function() {
                    return showHide(this)
                },
                toggle: function(state) {
                    if (typeof state === "boolean") {
                        return state ? this.show() : this.hide()
                    }
                    return this.each(function() {
                        if (isHidden(this)) {
                            jQuery(this).show()
                        } else {
                            jQuery(this).hide()
                        }
                    })
                }
            });
            jQuery.extend({
                cssHooks: {
                    opacity: {
                        get: function(elem, computed) {
                            if (computed) {
                                var ret = curCSS(elem, "opacity");
                                return ret === "" ? "1" : ret
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: true,
                    fillOpacity: true,
                    fontWeight: true,
                    lineHeight: true,
                    opacity: true,
                    order: true,
                    orphans: true,
                    widows: true,
                    zIndex: true,
                    zoom: true
                },
                cssProps: {
                    "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(elem, name, value, extra) {
                    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                        return
                    }
                    var ret, type, hooks, origName = jQuery.camelCase(name),
                        style = elem.style;
                    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                    if (value !== undefined) {
                        type = typeof value;
                        if (type === "string" && (ret = rrelNum.exec(value))) {
                            value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                            type = "number"
                        }
                        if (value == null || type === "number" && isNaN(value)) {
                            return
                        }
                        if (type === "number" && !jQuery.cssNumber[origName]) {
                            value += "px"
                        }
                        if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                            style[name] = "inherit"
                        }
                        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                            try {
                                style[name] = value
                            } catch (e) {}
                        }
                    } else {
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                            return ret
                        }
                        return style[name]
                    }
                },
                css: function(elem, name, extra, styles) {
                    var num, val, hooks, origName = jQuery.camelCase(name);
                    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                    if (hooks && "get" in hooks) {
                        val = hooks.get(elem, true, extra)
                    }
                    if (val === undefined) {
                        val = curCSS(elem, name, styles)
                    }
                    if (val === "normal" && name in cssNormalTransform) {
                        val = cssNormalTransform[name]
                    }
                    if (extra === "" || extra) {
                        num = parseFloat(val);
                        return extra === true || jQuery.isNumeric(num) ? num || 0 : val
                    }
                    return val
                }
            });
            if (window.getComputedStyle) {
                getStyles = function(elem) {
                    return window.getComputedStyle(elem, null)
                };
                curCSS = function(elem, name, _computed) {
                    var width, minWidth, maxWidth, computed = _computed || getStyles(elem),
                        ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
                        style = elem.style;
                    if (computed) {
                        if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                            ret = jQuery.style(elem, name)
                        }
                        if (rnumnonpx.test(ret) && rmargin.test(name)) {
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth
                        }
                    }
                    return ret
                }
            } else if (document.documentElement.currentStyle) {
                getStyles = function(elem) {
                    return elem.currentStyle
                };
                curCSS = function(elem, name, _computed) {
                    var left, rs, rsLeft, computed = _computed || getStyles(elem),
                        ret = computed ? computed[name] : undefined,
                        style = elem.style;
                    if (ret == null && style && style[name]) {
                        ret = style[name]
                    }
                    if (rnumnonpx.test(ret) && !rposition.test(name)) {
                        left = style.left;
                        rs = elem.runtimeStyle;
                        rsLeft = rs && rs.left;
                        if (rsLeft) {
                            rs.left = elem.currentStyle.left
                        }
                        style.left = name === "fontSize" ? "1em" : ret;
                        ret = style.pixelLeft + "px";
                        style.left = left;
                        if (rsLeft) {
                            rs.left = rsLeft
                        }
                    }
                    return ret === "" ? "auto" : ret
                }
            }

            function setPositiveNumber(elem, value, subtract) {
                var matches = rnumsplit.exec(value);
                return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
            }

            function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
                var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
                    val = 0;
                for (; i < 4; i += 2) {
                    if (extra === "margin") {
                        val += jQuery.css(elem, extra + cssExpand[i], true, styles)
                    }
                    if (isBorderBox) {
                        if (extra === "content") {
                            val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles)
                        }
                        if (extra !== "margin") {
                            val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                        }
                    } else {
                        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                        if (extra !== "padding") {
                            val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                        }
                    }
                }
                return val
            }

            function getWidthOrHeight(elem, name, extra) {
                var valueIsBorderBox = true,
                    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
                    styles = getStyles(elem),
                    isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                if (val <= 0 || val == null) {
                    val = curCSS(elem, name, styles);
                    if (val < 0 || val == null) {
                        val = elem.style[name]
                    }
                    if (rnumnonpx.test(val)) {
                        return val
                    }
                    valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
                    val = parseFloat(val) || 0
                }
                return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
            }

            function css_defaultDisplay(nodeName) {
                var doc = document,
                    display = elemdisplay[nodeName];
                if (!display) {
                    display = actualDisplay(nodeName, doc);
                    if (display === "none" || !display) {
                        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                        doc.write("<!doctype html><html><body>");
                        doc.close();
                        display = actualDisplay(nodeName, doc);
                        iframe.detach()
                    }
                    elemdisplay[nodeName] = display
                }
                return display
            }

            function actualDisplay(name, doc) {
                var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                    display = jQuery.css(elem[0], "display");
                elem.remove();
                return display
            }
            jQuery.each(["height", "width"], function(i, name) {
                jQuery.cssHooks[name] = {
                    get: function(elem, computed, extra) {
                        if (computed) {
                            return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                                return getWidthOrHeight(elem, name, extra)
                            }) : getWidthOrHeight(elem, name, extra)
                        }
                    },
                    set: function(elem, value, extra) {
                        var styles = extra && getStyles(elem);
                        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0)
                    }
                }
            });
            if (!jQuery.support.opacity) {
                jQuery.cssHooks.opacity = {
                    get: function(elem, computed) {
                        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : ""
                    },
                    set: function(elem, value) {
                        var style = elem.style,
                            currentStyle = elem.currentStyle,
                            opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
                            filter = currentStyle && currentStyle.filter || style.filter || "";
                        style.zoom = 1;
                        if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                            style.removeAttribute("filter");
                            if (value === "" || currentStyle && !currentStyle.filter) {
                                return
                            }
                        }
                        style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity
                    }
                }
            }
            jQuery(function() {
                if (!jQuery.support.reliableMarginRight) {
                    jQuery.cssHooks.marginRight = {
                        get: function(elem, computed) {
                            if (computed) {
                                return jQuery.swap(elem, {
                                    display: "inline-block"
                                }, curCSS, [elem, "marginRight"])
                            }
                        }
                    }
                }
                if (!jQuery.support.pixelPosition && jQuery.fn.position) {
                    jQuery.each(["top", "left"], function(i, prop) {
                        jQuery.cssHooks[prop] = {
                            get: function(elem, computed) {
                                if (computed) {
                                    computed = curCSS(elem, prop);
                                    return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
                                }
                            }
                        }
                    })
                }
            });
            if (jQuery.expr && jQuery.expr.filters) {
                jQuery.expr.filters.hidden = function(elem) {
                    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none"
                };
                jQuery.expr.filters.visible = function(elem) {
                    return !jQuery.expr.filters.hidden(elem)
                }
            }
            jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                    expand: function(value) {
                        var i = 0,
                            expanded = {},
                            parts = typeof value === "string" ? value.split(" ") : [value];
                        for (; i < 4; i++) {
                            expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
                        }
                        return expanded
                    }
                };
                if (!rmargin.test(prefix)) {
                    jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
                }
            });
            var r20 = /%20/g,
                rbracket = /\[\]$/,
                rCRLF = /\r?\n/g,
                rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
                rsubmittable = /^(?:input|select|textarea|keygen)/i;
            jQuery.fn.extend({
                serialize: function() {
                    return jQuery.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var elements = jQuery.prop(this, "elements");
                        return elements ? jQuery.makeArray(elements) : this
                    }).filter(function() {
                        var type = this.type;
                        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type))
                    }).map(function(i, elem) {
                        var val = jQuery(this).val();
                        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            }
                        }) : {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        }
                    }).get()
                }
            });
            jQuery.param = function(a, traditional) {
                var prefix, s = [],
                    add = function(key, value) {
                        value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
                    };
                if (traditional === undefined) {
                    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
                }
                if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
                    jQuery.each(a, function() {
                        add(this.name, this.value)
                    })
                } else {
                    for (prefix in a) {
                        buildParams(prefix, a[prefix], traditional, add)
                    }
                }
                return s.join("&").replace(r20, "+")
            };

            function buildParams(prefix, obj, traditional, add) {
                var name;
                if (jQuery.isArray(obj)) {
                    jQuery.each(obj, function(i, v) {
                        if (traditional || rbracket.test(prefix)) {
                            add(prefix, v)
                        } else {
                            buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add)
                        }
                    })
                } else if (!traditional && jQuery.type(obj) === "object") {
                    for (name in obj) {
                        buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
                    }
                } else {
                    add(prefix, obj)
                }
            }
            jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
                jQuery.fn[name] = function(data, fn) {
                    return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
                }
            });
            jQuery.fn.extend({
                hover: function(fnOver, fnOut) {
                    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
                },
                bind: function(types, data, fn) {
                    return this.on(types, null, data, fn)
                },
                unbind: function(types, fn) {
                    return this.off(types, null, fn)
                },
                delegate: function(selector, types, data, fn) {
                    return this.on(types, selector, data, fn)
                },
                undelegate: function(selector, types, fn) {
                    return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
                }
            });
            var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(),
                ajax_rquery = /\?/,
                rhash = /#.*$/,
                rts = /([?&])_=[^&]*/,
                rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                rnoContent = /^(?:GET|HEAD)$/,
                rprotocol = /^\/\//,
                rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                _load = jQuery.fn.load,
                prefilters = {},
                transports = {},
                allTypes = "*/".concat("*");
            try {
                ajaxLocation = location.href
            } catch (e) {
                ajaxLocation = document.createElement("a");
                ajaxLocation.href = "";
                ajaxLocation = ajaxLocation.href
            }
            ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

            function addToPrefiltersOrTransports(structure) {
                return function(dataTypeExpression, func) {
                    if (typeof dataTypeExpression !== "string") {
                        func = dataTypeExpression;
                        dataTypeExpression = "*"
                    }
                    var dataType, i = 0,
                        dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
                    if (jQuery.isFunction(func)) {
                        while (dataType = dataTypes[i++]) {
                            if (dataType[0] === "+") {
                                dataType = dataType.slice(1) || "*";
                                (structure[dataType] = structure[dataType] || []).unshift(func)
                            } else {
                                (structure[dataType] = structure[dataType] || []).push(func)
                            }
                        }
                    }
                }
            }

            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                var inspected = {},
                    seekingTransport = structure === transports;

                function inspect(dataType) {
                    var selected;
                    inspected[dataType] = true;
                    jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                            options.dataTypes.unshift(dataTypeOrTransport);
                            inspect(dataTypeOrTransport);
                            return false
                        } else if (seekingTransport) {
                            return !(selected = dataTypeOrTransport)
                        }
                    });
                    return selected
                }
                return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
            }

            function ajaxExtend(target, src) {
                var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                for (key in src) {
                    if (src[key] !== undefined) {
                        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
                    }
                }
                if (deep) {
                    jQuery.extend(true, target, deep)
                }
                return target
            }
            jQuery.fn.load = function(url, params, callback) {
                if (typeof url !== "string" && _load) {
                    return _load.apply(this, arguments)
                }
                var selector, response, type, self = this,
                    off = url.indexOf(" ");
                if (off >= 0) {
                    selector = url.slice(off, url.length);
                    url = url.slice(0, off)
                }
                if (jQuery.isFunction(params)) {
                    callback = params;
                    params = undefined
                } else if (params && typeof params === "object") {
                    type = "POST"
                }
                if (self.length > 0) {
                    jQuery.ajax({
                        url: url,
                        type: type,
                        dataType: "html",
                        data: params
                    }).done(function(responseText) {
                        response = arguments;
                        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
                    }).complete(callback && function(jqXHR, status) {
                        self.each(callback, response || [jqXHR.responseText, status, jqXHR])
                    })
                }
                return this
            };
            jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
                jQuery.fn[type] = function(fn) {
                    return this.on(type, fn)
                }
            });
            jQuery.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ajaxLocation,
                    type: "GET",
                    isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": allTypes,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": true,
                        "text json": jQuery.parseJSON,
                        "text xml": jQuery.parseXML
                    },
                    flatOptions: {
                        url: true,
                        context: true
                    }
                },
                ajaxSetup: function(target, settings) {
                    return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
                },
                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports),
                ajax: function(url, options) {
                    if (typeof url === "object") {
                        options = url;
                        url = undefined
                    }
                    options = options || {};
                    var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
                        callbackContext = s.context || s,
                        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                        deferred = jQuery.Deferred(),
                        completeDeferred = jQuery.Callbacks("once memory"),
                        statusCode = s.statusCode || {},
                        requestHeaders = {},
                        requestHeadersNames = {},
                        state = 0,
                        strAbort = "canceled",
                        jqXHR = {
                            readyState: 0,
                            getResponseHeader: function(key) {
                                var match;
                                if (state === 2) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) {
                                            responseHeaders[match[1].toLowerCase()] = match[2]
                                        }
                                    }
                                    match = responseHeaders[key.toLowerCase()]
                                }
                                return match == null ? null : match
                            },
                            getAllResponseHeaders: function() {
                                return state === 2 ? responseHeadersString : null
                            },
                            setRequestHeader: function(name, value) {
                                var lname = name.toLowerCase();
                                if (!state) {
                                    name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                                    requestHeaders[name] = value
                                }
                                return this
                            },
                            overrideMimeType: function(type) {
                                if (!state) {
                                    s.mimeType = type
                                }
                                return this
                            },
                            statusCode: function(map) {
                                var code;
                                if (map) {
                                    if (state < 2) {
                                        for (code in map) {
                                            statusCode[code] = [statusCode[code], map[code]]
                                        }
                                    } else {
                                        jqXHR.always(map[jqXHR.status])
                                    }
                                }
                                return this
                            },
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) {
                                    transport.abort(finalText)
                                }
                                done(0, finalText);
                                return this
                            }
                        };
                    deferred.promise(jqXHR).complete = completeDeferred.add;
                    jqXHR.success = jqXHR.done;
                    jqXHR.error = jqXHR.fail;
                    s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
                    s.type = options.method || options.type || s.method || s.type;
                    s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
                    if (s.crossDomain == null) {
                        parts = rurl.exec(s.url.toLowerCase());
                        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))))
                    }
                    if (s.data && s.processData && typeof s.data !== "string") {
                        s.data = jQuery.param(s.data, s.traditional)
                    }
                    inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                    if (state === 2) {
                        return jqXHR
                    }
                    fireGlobals = s.global;
                    if (fireGlobals && jQuery.active++ === 0) {
                        jQuery.event.trigger("ajaxStart")
                    }
                    s.type = s.type.toUpperCase();
                    s.hasContent = !rnoContent.test(s.type);
                    cacheURL = s.url;
                    if (!s.hasContent) {
                        if (s.data) {
                            cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                            delete s.data
                        }
                        if (s.cache === false) {
                            s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++
                        }
                    }
                    if (s.ifModified) {
                        if (jQuery.lastModified[cacheURL]) {
                            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
                        }
                        if (jQuery.etag[cacheURL]) {
                            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
                        }
                    }
                    if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                        jqXHR.setRequestHeader("Content-Type", s.contentType)
                    }
                    jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                    for (i in s.headers) {
                        jqXHR.setRequestHeader(i, s.headers[i])
                    }
                    if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                        return jqXHR.abort()
                    }
                    strAbort = "abort";
                    for (i in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) {
                        jqXHR[i](s[i])
                    }
                    transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                    if (!transport) {
                        done(-1, "No Transport")
                    } else {
                        jqXHR.readyState = 1;
                        if (fireGlobals) {
                            globalEventContext.trigger("ajaxSend", [jqXHR, s])
                        }
                        if (s.async && s.timeout > 0) {
                            timeoutTimer = setTimeout(function() {
                                jqXHR.abort("timeout")
                            }, s.timeout)
                        }
                        try {
                            state = 1;
                            transport.send(requestHeaders, done)
                        } catch (e) {
                            if (state < 2) {
                                done(-1, e)
                            } else {
                                throw e
                            }
                        }
                    }

                    function done(status, nativeStatusText, responses, headers) {
                        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                        if (state === 2) {
                            return
                        }
                        state = 2;
                        if (timeoutTimer) {
                            clearTimeout(timeoutTimer)
                        }
                        transport = undefined;
                        responseHeadersString = headers || "";
                        jqXHR.readyState = status > 0 ? 4 : 0;
                        isSuccess = status >= 200 && status < 300 || status === 304;
                        if (responses) {
                            response = ajaxHandleResponses(s, jqXHR, responses)
                        }
                        response = ajaxConvert(s, response, jqXHR, isSuccess);
                        if (isSuccess) {
                            if (s.ifModified) {
                                modified = jqXHR.getResponseHeader("Last-Modified");
                                if (modified) {
                                    jQuery.lastModified[cacheURL] = modified
                                }
                                modified = jqXHR.getResponseHeader("etag");
                                if (modified) {
                                    jQuery.etag[cacheURL] = modified
                                }
                            }
                            if (status === 204 || s.type === "HEAD") {
                                statusText = "nocontent"
                            } else if (status === 304) {
                                statusText = "notmodified"
                            } else {
                                statusText = response.state;
                                success = response.data;
                                error = response.error;
                                isSuccess = !error
                            }
                        } else {
                            error = statusText;
                            if (status || !statusText) {
                                statusText = "error";
                                if (status < 0) {
                                    status = 0
                                }
                            }
                        }
                        jqXHR.status = status;
                        jqXHR.statusText = (nativeStatusText || statusText) + "";
                        if (isSuccess) {
                            deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
                        } else {
                            deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
                        }
                        jqXHR.statusCode(statusCode);
                        statusCode = undefined;
                        if (fireGlobals) {
                            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
                        }
                        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                        if (fireGlobals) {
                            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                            if (!--jQuery.active) {
                                jQuery.event.trigger("ajaxStop")
                            }
                        }
                    }
                    return jqXHR
                },
                getJSON: function(url, data, callback) {
                    return jQuery.get(url, data, callback, "json")
                },
                getScript: function(url, callback) {
                    return jQuery.get(url, undefined, callback, "script")
                }
            });
            jQuery.each(["get", "post"], function(i, method) {
                jQuery[method] = function(url, data, callback, type) {
                    if (jQuery.isFunction(data)) {
                        type = type || callback;
                        callback = data;
                        data = undefined
                    }
                    return jQuery.ajax({
                        url: url,
                        type: method,
                        dataType: type,
                        data: data,
                        success: callback
                    })
                }
            });

            function ajaxHandleResponses(s, jqXHR, responses) {
                var firstDataType, ct, finalDataType, type, contents = s.contents,
                    dataTypes = s.dataTypes;
                while (dataTypes[0] === "*") {
                    dataTypes.shift();
                    if (ct === undefined) {
                        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
                    }
                }
                if (ct) {
                    for (type in contents) {
                        if (contents[type] && contents[type].test(ct)) {
                            dataTypes.unshift(type);
                            break
                        }
                    }
                }
                if (dataTypes[0] in responses) {
                    finalDataType = dataTypes[0]
                } else {
                    for (type in responses) {
                        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                            finalDataType = type;
                            break
                        }
                        if (!firstDataType) {
                            firstDataType = type
                        }
                    }
                    finalDataType = finalDataType || firstDataType
                }
                if (finalDataType) {
                    if (finalDataType !== dataTypes[0]) {
                        dataTypes.unshift(finalDataType)
                    }
                    return responses[finalDataType]
                }
            }

            function ajaxConvert(s, response, jqXHR, isSuccess) {
                var conv2, current, conv, tmp, prev, converters = {},
                    dataTypes = s.dataTypes.slice();
                if (dataTypes[1]) {
                    for (conv in s.converters) {
                        converters[conv.toLowerCase()] = s.converters[conv]
                    }
                }
                current = dataTypes.shift();
                while (current) {
                    if (s.responseFields[current]) {
                        jqXHR[s.responseFields[current]] = response
                    }
                    if (!prev && isSuccess && s.dataFilter) {
                        response = s.dataFilter(response, s.dataType)
                    }
                    prev = current;
                    current = dataTypes.shift();
                    if (current) {
                        if (current === "*") {
                            current = prev
                        } else if (prev !== "*" && prev !== current) {
                            conv = converters[prev + " " + current] || converters["* " + current];
                            if (!conv) {
                                for (conv2 in converters) {
                                    tmp = conv2.split(" ");
                                    if (tmp[1] === current) {
                                        conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                        if (conv) {
                                            if (conv === true) {
                                                conv = converters[conv2]
                                            } else if (converters[conv2] !== true) {
                                                current = tmp[0];
                                                dataTypes.unshift(tmp[1])
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            if (conv !== true) {
                                if (conv && s["throws"]) {
                                    response = conv(response)
                                } else {
                                    try {
                                        response = conv(response)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: conv ? e : "No conversion from " + prev + " to " + current
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return {
                    state: "success",
                    data: response
                }
            }
            jQuery.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(text) {
                        jQuery.globalEval(text);
                        return text
                    }
                }
            });
            jQuery.ajaxPrefilter("script", function(s) {
                if (s.cache === undefined) {
                    s.cache = false
                }
                if (s.crossDomain) {
                    s.type = "GET";
                    s.global = false
                }
            });
            jQuery.ajaxTransport("script", function(s) {
                if (s.crossDomain) {
                    var script, head = document.head || jQuery("head")[0] || document.documentElement;
                    return {
                        send: function(_, callback) {
                            script = document.createElement("script");
                            script.async = true;
                            if (s.scriptCharset) {
                                script.charset = s.scriptCharset
                            }
                            script.src = s.url;
                            script.onload = script.onreadystatechange = function(_, isAbort) {
                                if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                                    script.onload = script.onreadystatechange = null;
                                    if (script.parentNode) {
                                        script.parentNode.removeChild(script)
                                    }
                                    script = null;
                                    if (!isAbort) {
                                        callback(200, "success")
                                    }
                                }
                            };
                            head.insertBefore(script, head.firstChild)
                        },
                        abort: function() {
                            if (script) {
                                script.onload(undefined, true)
                            }
                        }
                    }
                }
            });
            var oldCallbacks = [],
                rjsonp = /(=)\?(?=&|$)|\?\?/;
            jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
                    this[callback] = true;
                    return callback
                }
            });
            jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
                var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                if (jsonProp || s.dataTypes[0] === "jsonp") {
                    callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                    if (jsonProp) {
                        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
                    } else if (s.jsonp !== false) {
                        s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
                    }
                    s.converters["script json"] = function() {
                        if (!responseContainer) {
                            jQuery.error(callbackName + " was not called")
                        }
                        return responseContainer[0]
                    };
                    s.dataTypes[0] = "json";
                    overwritten = window[callbackName];
                    window[callbackName] = function() {
                        responseContainer = arguments
                    };
                    jqXHR.always(function() {
                        window[callbackName] = overwritten;
                        if (s[callbackName]) {
                            s.jsonpCallback = originalSettings.jsonpCallback;
                            oldCallbacks.push(callbackName)
                        }
                        if (responseContainer && jQuery.isFunction(overwritten)) {
                            overwritten(responseContainer[0])
                        }
                        responseContainer = overwritten = undefined
                    });
                    return "script"
                }
            });
            var xhrCallbacks, xhrSupported, xhrId = 0,
                xhrOnUnloadAbort = window.ActiveXObject && function() {
                    var key;
                    for (key in xhrCallbacks) {
                        xhrCallbacks[key](undefined, true)
                    }
                };

            function createStandardXHR() {
                try {
                    return new window.XMLHttpRequest
                } catch (e) {}
            }

            function createActiveXHR() {
                try {
                    return new window.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
                return !this.isLocal && createStandardXHR() || createActiveXHR()
            } : createStandardXHR;
            xhrSupported = jQuery.ajaxSettings.xhr();
            jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
            xhrSupported = jQuery.support.ajax = !!xhrSupported;
            if (xhrSupported) {
                jQuery.ajaxTransport(function(s) {
                    if (!s.crossDomain || jQuery.support.cors) {
                        var callback;
                        return {
                            send: function(headers, complete) {
                                var handle, i, xhr = s.xhr();
                                if (s.username) {
                                    xhr.open(s.type, s.url, s.async, s.username, s.password)
                                } else {
                                    xhr.open(s.type, s.url, s.async)
                                }
                                if (s.xhrFields) {
                                    for (i in s.xhrFields) {
                                        xhr[i] = s.xhrFields[i]
                                    }
                                }
                                if (s.mimeType && xhr.overrideMimeType) {
                                    xhr.overrideMimeType(s.mimeType)
                                }
                                if (!s.crossDomain && !headers["X-Requested-With"]) {
                                    headers["X-Requested-With"] = "XMLHttpRequest"
                                }
                                try {
                                    for (i in headers) {
                                        xhr.setRequestHeader(i, headers[i])
                                    }
                                } catch (err) {}
                                xhr.send(s.hasContent && s.data || null);
                                callback = function(_, isAbort) {
                                    var status, responseHeaders, statusText, responses;
                                    try {
                                        if (callback && (isAbort || xhr.readyState === 4)) {
                                            callback = undefined;
                                            if (handle) {
                                                xhr.onreadystatechange = jQuery.noop;
                                                if (xhrOnUnloadAbort) {
                                                    delete xhrCallbacks[handle]
                                                }
                                            }
                                            if (isAbort) {
                                                if (xhr.readyState !== 4) {
                                                    xhr.abort()
                                                }
                                            } else {
                                                responses = {};
                                                status = xhr.status;
                                                responseHeaders = xhr.getAllResponseHeaders();
                                                if (typeof xhr.responseText === "string") {
                                                    responses.text = xhr.responseText
                                                }
                                                try {
                                                    statusText = xhr.statusText
                                                } catch (e) {
                                                    statusText = ""
                                                }
                                                if (!status && s.isLocal && !s.crossDomain) {
                                                    status = responses.text ? 200 : 404
                                                } else if (status === 1223) {
                                                    status = 204
                                                }
                                            }
                                        }
                                    } catch (firefoxAccessException) {
                                        if (!isAbort) {
                                            complete(-1, firefoxAccessException)
                                        }
                                    }
                                    if (responses) {
                                        complete(status, statusText, responses, responseHeaders)
                                    }
                                };
                                if (!s.async) {
                                    callback()
                                } else if (xhr.readyState === 4) {
                                    setTimeout(callback)
                                } else {
                                    handle = ++xhrId;
                                    if (xhrOnUnloadAbort) {
                                        if (!xhrCallbacks) {
                                            xhrCallbacks = {};
                                            jQuery(window).unload(xhrOnUnloadAbort)
                                        }
                                        xhrCallbacks[handle] = callback
                                    }
                                    xhr.onreadystatechange = callback
                                }
                            },
                            abort: function() {
                                if (callback) {
                                    callback(undefined, true)
                                }
                            }
                        }
                    }
                })
            }
            var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
                rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
                rrun = /queueHooks$/,
                animationPrefilters = [defaultPrefilter],
                tweeners = {
                    "*": [function(prop, value) {
                        var tween = this.createTween(prop, value),
                            target = tween.cur(),
                            parts = rfxnum.exec(value),
                            unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                            start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
                            scale = 1,
                            maxIterations = 20;
                        if (start && start[3] !== unit) {
                            unit = unit || start[3];
                            parts = parts || [];
                            start = +target || 1;
                            do {
                                scale = scale || ".5";
                                start = start / scale;
                                jQuery.style(tween.elem, prop, start + unit)
                            } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations)
                        }
                        if (parts) {
                            start = tween.start = +start || +target || 0;
                            tween.unit = unit;
                            tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]
                        }
                        return tween
                    }]
                };

            function createFxNow() {
                setTimeout(function() {
                    fxNow = undefined
                });
                return fxNow = jQuery.now()
            }

            function createTween(value, prop, animation) {
                var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]),
                    index = 0,
                    length = collection.length;
                for (; index < length; index++) {
                    if (tween = collection[index].call(animation, prop, value)) {
                        return tween
                    }
                }
            }

            function Animation(elem, properties, options) {
                var result, stopped, index = 0,
                    length = animationPrefilters.length,
                    deferred = jQuery.Deferred().always(function() {
                        delete tick.elem
                    }),
                    tick = function() {
                        if (stopped) {
                            return false
                        }
                        var currentTime = fxNow || createFxNow(),
                            remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                            temp = remaining / animation.duration || 0,
                            percent = 1 - temp,
                            index = 0,
                            length = animation.tweens.length;
                        for (; index < length; index++) {
                            animation.tweens[index].run(percent)
                        }
                        deferred.notifyWith(elem, [animation, percent, remaining]);
                        if (percent < 1 && length) {
                            return remaining
                        } else {
                            deferred.resolveWith(elem, [animation]);
                            return false
                        }
                    },
                    animation = deferred.promise({
                        elem: elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {}
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween
                        },
                        stop: function(gotoEnd) {
                            var index = 0,
                                length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) {
                                return this
                            }
                            stopped = true;
                            for (; index < length; index++) {
                                animation.tweens[index].run(1)
                            }
                            if (gotoEnd) {
                                deferred.resolveWith(elem, [animation, gotoEnd])
                            } else {
                                deferred.rejectWith(elem, [animation, gotoEnd])
                            }
                            return this
                        }
                    }),
                    props = animation.props;
                propFilter(props, animation.opts.specialEasing);
                for (; index < length; index++) {
                    result = animationPrefilters[index].call(animation, elem, props, animation.opts);
                    if (result) {
                        return result
                    }
                }
                jQuery.map(props, createTween, animation);
                if (jQuery.isFunction(animation.opts.start)) {
                    animation.opts.start.call(elem, animation)
                }
                jQuery.fx.timer(jQuery.extend(tick, {
                    elem: elem,
                    anim: animation,
                    queue: animation.opts.queue
                }));
                return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
            }

            function propFilter(props, specialEasing) {
                var index, name, easing, value, hooks;
                for (index in props) {
                    name = jQuery.camelCase(index);
                    easing = specialEasing[name];
                    value = props[index];
                    if (jQuery.isArray(value)) {
                        easing = value[1];
                        value = props[index] = value[0]
                    }
                    if (index !== name) {
                        props[name] = value;
                        delete props[index]
                    }
                    hooks = jQuery.cssHooks[name];
                    if (hooks && "expand" in hooks) {
                        value = hooks.expand(value);
                        delete props[name];
                        for (index in value) {
                            if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing
                            }
                        }
                    } else {
                        specialEasing[name] = easing
                    }
                }
            }
            jQuery.Animation = jQuery.extend(Animation, {
                tweener: function(props, callback) {
                    if (jQuery.isFunction(props)) {
                        callback = props;
                        props = ["*"]
                    } else {
                        props = props.split(" ")
                    }
                    var prop, index = 0,
                        length = props.length;
                    for (; index < length; index++) {
                        prop = props[index];
                        tweeners[prop] = tweeners[prop] || [];
                        tweeners[prop].unshift(callback)
                    }
                },
                prefilter: function(callback, prepend) {
                    if (prepend) {
                        animationPrefilters.unshift(callback)
                    } else {
                        animationPrefilters.push(callback)
                    }
                }
            });

            function defaultPrefilter(elem, props, opts) {
                var prop, value, toggle, tween, hooks, oldfire, anim = this,
                    orig = {},
                    style = elem.style,
                    hidden = elem.nodeType && isHidden(elem),
                    dataShow = jQuery._data(elem, "fxshow");
                if (!opts.queue) {
                    hooks = jQuery._queueHooks(elem, "fx");
                    if (hooks.unqueued == null) {
                        hooks.unqueued = 0;
                        oldfire = hooks.empty.fire;
                        hooks.empty.fire = function() {
                            if (!hooks.unqueued) {
                                oldfire()
                            }
                        }
                    }
                    hooks.unqueued++;
                    anim.always(function() {
                        anim.always(function() {
                            hooks.unqueued--;
                            if (!jQuery.queue(elem, "fx").length) {
                                hooks.empty.fire()
                            }
                        })
                    })
                }
                if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
                    opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                    if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                        if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                            style.display = "inline-block"
                        } else {
                            style.zoom = 1
                        }
                    }
                }
                if (opts.overflow) {
                    style.overflow = "hidden";
                    if (!jQuery.support.shrinkWrapBlocks) {
                        anim.always(function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2]
                        })
                    }
                }
                for (prop in props) {
                    value = props[prop];
                    if (rfxtypes.exec(value)) {
                        delete props[prop];
                        toggle = toggle || value === "toggle";
                        if (value === (hidden ? "hide" : "show")) {
                            continue
                        }
                        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                    }
                }
                if (!jQuery.isEmptyObject(orig)) {
                    if (dataShow) {
                        if ("hidden" in dataShow) {
                            hidden = dataShow.hidden
                        }
                    } else {
                        dataShow = jQuery._data(elem, "fxshow", {})
                    }
                    if (toggle) {
                        dataShow.hidden = !hidden
                    }
                    if (hidden) {
                        jQuery(elem).show()
                    } else {
                        anim.done(function() {
                            jQuery(elem).hide()
                        })
                    }
                    anim.done(function() {
                        var prop;
                        jQuery._removeData(elem, "fxshow");
                        for (prop in orig) {
                            jQuery.style(elem, prop, orig[prop])
                        }
                    });
                    for (prop in orig) {
                        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = tween.start;
                            if (hidden) {
                                tween.end = tween.start;
                                tween.start = prop === "width" || prop === "height" ? 1 : 0
                            }
                        }
                    }
                }
            }

            function Tween(elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem, options, prop, end, easing)
            }
            jQuery.Tween = Tween;
            Tween.prototype = {
                constructor: Tween,
                init: function(elem, options, prop, end, easing, unit) {
                    this.elem = elem;
                    this.prop = prop;
                    this.easing = easing || "swing";
                    this.options = options;
                    this.start = this.now = this.cur();
                    this.end = end;
                    this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
                },
                cur: function() {
                    var hooks = Tween.propHooks[this.prop];
                    return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
                },
                run: function(percent) {
                    var eased, hooks = Tween.propHooks[this.prop];
                    if (this.options.duration) {
                        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
                    } else {
                        this.pos = eased = percent
                    }
                    this.now = (this.end - this.start) * eased + this.start;
                    if (this.options.step) {
                        this.options.step.call(this.elem, this.now, this)
                    }
                    if (hooks && hooks.set) {
                        hooks.set(this)
                    } else {
                        Tween.propHooks._default.set(this)
                    }
                    return this
                }
            };
            Tween.prototype.init.prototype = Tween.prototype;
            Tween.propHooks = {
                _default: {
                    get: function(tween) {
                        var result;
                        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                            return tween.elem[tween.prop]
                        }
                        result = jQuery.css(tween.elem, tween.prop, "");
                        return !result || result === "auto" ? 0 : result
                    },
                    set: function(tween) {
                        if (jQuery.fx.step[tween.prop]) {
                            jQuery.fx.step[tween.prop](tween)
                        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                        } else {
                            tween.elem[tween.prop] = tween.now
                        }
                    }
                }
            };
            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function(tween) {
                    if (tween.elem.nodeType && tween.elem.parentNode) {
                        tween.elem[tween.prop] = tween.now
                    }
                }
            };
            jQuery.each(["toggle", "show", "hide"], function(i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) {
                    return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback)
                }
            });
            jQuery.fn.extend({
                fadeTo: function(speed, to, easing, callback) {
                    return this.filter(isHidden).css("opacity", 0).show().end().animate({
                        opacity: to
                    }, speed, easing, callback)
                },
                animate: function(prop, speed, easing, callback) {
                    var empty = jQuery.isEmptyObject(prop),
                        optall = jQuery.speed(speed, easing, callback),
                        doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            if (empty || jQuery._data(this, "finish")) {
                                anim.stop(true)
                            }
                        };
                    doAnimation.finish = doAnimation;
                    return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
                },
                stop: function(type, clearQueue, gotoEnd) {
                    var stopQueue = function(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop;
                        stop(gotoEnd)
                    };
                    if (typeof type !== "string") {
                        gotoEnd = clearQueue;
                        clearQueue = type;
                        type = undefined
                    }
                    if (clearQueue && type !== false) {
                        this.queue(type || "fx", [])
                    }
                    return this.each(function() {
                        var dequeue = true,
                            index = type != null && type + "queueHooks",
                            timers = jQuery.timers,
                            data = jQuery._data(this);
                        if (index) {
                            if (data[index] && data[index].stop) {
                                stopQueue(data[index])
                            }
                        } else {
                            for (index in data) {
                                if (data[index] && data[index].stop && rrun.test(index)) {
                                    stopQueue(data[index])
                                }
                            }
                        }
                        for (index = timers.length; index--;) {
                            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1)
                            }
                        }
                        if (dequeue || !gotoEnd) {
                            jQuery.dequeue(this, type)
                        }
                    })
                },
                finish: function(type) {
                    if (type !== false) {
                        type = type || "fx"
                    }
                    return this.each(function() {
                        var index, data = jQuery._data(this),
                            queue = data[type + "queue"],
                            hooks = data[type + "queueHooks"],
                            timers = jQuery.timers,
                            length = queue ? queue.length : 0;
                        data.finish = true;
                        jQuery.queue(this, type, []);
                        if (hooks && hooks.stop) {
                            hooks.stop.call(this, true)
                        }
                        for (index = timers.length; index--;) {
                            if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1)
                            }
                        }
                        for (index = 0; index < length; index++) {
                            if (queue[index] && queue[index].finish) {
                                queue[index].finish.call(this)
                            }
                        }
                        delete data.finish
                    })
                }
            });

            function genFx(type, includeWidth) {
                var which, attrs = {
                        height: type
                    },
                    i = 0;
                includeWidth = includeWidth ? 1 : 0;
                for (; i < 4; i += 2 - includeWidth) {
                    which = cssExpand[i];
                    attrs["margin" + which] = attrs["padding" + which] = type
                }
                if (includeWidth) {
                    attrs.opacity = attrs.width = type
                }
                return attrs
            }
            jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(name, props) {
                jQuery.fn[name] = function(speed, easing, callback) {
                    return this.animate(props, speed, easing, callback)
                }
            });
            jQuery.speed = function(speed, easing, fn) {
                var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                    complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
                };
                opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
                if (opt.queue == null || opt.queue === true) {
                    opt.queue = "fx"
                }
                opt.old = opt.complete;
                opt.complete = function() {
                    if (jQuery.isFunction(opt.old)) {
                        opt.old.call(this)
                    }
                    if (opt.queue) {
                        jQuery.dequeue(this, opt.queue)
                    }
                };
                return opt
            };
            jQuery.easing = {
                linear: function(p) {
                    return p
                },
                swing: function(p) {
                    return .5 - Math.cos(p * Math.PI) / 2
                }
            };
            jQuery.timers = [];
            jQuery.fx = Tween.prototype.init;
            jQuery.fx.tick = function() {
                var timer, timers = jQuery.timers,
                    i = 0;
                fxNow = jQuery.now();
                for (; i < timers.length; i++) {
                    timer = timers[i];
                    if (!timer() && timers[i] === timer) {
                        timers.splice(i--, 1)
                    }
                }
                if (!timers.length) {
                    jQuery.fx.stop()
                }
                fxNow = undefined
            };
            jQuery.fx.timer = function(timer) {
                if (timer() && jQuery.timers.push(timer)) {
                    jQuery.fx.start()
                }
            };
            jQuery.fx.interval = 13;
            jQuery.fx.start = function() {
                if (!timerId) {
                    timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval)
                }
            };
            jQuery.fx.stop = function() {
                clearInterval(timerId);
                timerId = null
            };
            jQuery.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            jQuery.fx.step = {};
            if (jQuery.expr && jQuery.expr.filters) {
                jQuery.expr.filters.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, function(fn) {
                        return elem === fn.elem
                    }).length
                }
            }
            jQuery.fn.offset = function(options) {
                if (arguments.length) {
                    return options === undefined ? this : this.each(function(i) {
                        jQuery.offset.setOffset(this, options, i)
                    })
                }
                var docElem, win, box = {
                        top: 0,
                        left: 0
                    },
                    elem = this[0],
                    doc = elem && elem.ownerDocument;
                if (!doc) {
                    return
                }
                docElem = doc.documentElement;
                if (!jQuery.contains(docElem, elem)) {
                    return box
                }
                if (typeof elem.getBoundingClientRect !== core_strundefined) {
                    box = elem.getBoundingClientRect()
                }
                win = getWindow(doc);
                return {
                    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
                }
            };
            jQuery.offset = {
                setOffset: function(elem, options, i) {
                    var position = jQuery.css(elem, "position");
                    if (position === "static") {
                        elem.style.position = "relative"
                    }
                    var curElem = jQuery(elem),
                        curOffset = curElem.offset(),
                        curCSSTop = jQuery.css(elem, "top"),
                        curCSSLeft = jQuery.css(elem, "left"),
                        calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
                        props = {},
                        curPosition = {},
                        curTop, curLeft;
                    if (calculatePosition) {
                        curPosition = curElem.position();
                        curTop = curPosition.top;
                        curLeft = curPosition.left
                    } else {
                        curTop = parseFloat(curCSSTop) || 0;
                        curLeft = parseFloat(curCSSLeft) || 0
                    }
                    if (jQuery.isFunction(options)) {
                        options = options.call(elem, i, curOffset)
                    }
                    if (options.top != null) {
                        props.top = options.top - curOffset.top + curTop
                    }
                    if (options.left != null) {
                        props.left = options.left - curOffset.left + curLeft
                    }
                    if ("using" in options) {
                        options.using.call(elem, props)
                    } else {
                        curElem.css(props)
                    }
                }
            };
            jQuery.fn.extend({
                position: function() {
                    if (!this[0]) {
                        return
                    }
                    var offsetParent, offset, parentOffset = {
                            top: 0,
                            left: 0
                        },
                        elem = this[0];
                    if (jQuery.css(elem, "position") === "fixed") {
                        offset = elem.getBoundingClientRect()
                    } else {
                        offsetParent = this.offsetParent();
                        offset = this.offset();
                        if (!jQuery.nodeName(offsetParent[0], "html")) {
                            parentOffset = offsetParent.offset()
                        }
                        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)
                    }
                    return {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var offsetParent = this.offsetParent || docElem;
                        while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
                            offsetParent = offsetParent.offsetParent
                        }
                        return offsetParent || docElem
                    })
                }
            });
            jQuery.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(method, prop) {
                var top = /Y/.test(prop);
                jQuery.fn[method] = function(val) {
                    return jQuery.access(this, function(elem, method, val) {
                        var win = getWindow(elem);
                        if (val === undefined) {
                            return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method]
                        }
                        if (win) {
                            win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop())
                        } else {
                            elem[method] = val
                        }
                    }, method, val, arguments.length, null)
                }
            });

            function getWindow(elem) {
                return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false
            }
            jQuery.each({
                Height: "height",
                Width: "width"
            }, function(name, type) {
                jQuery.each({
                    padding: "inner" + name,
                    content: type,
                    "": "outer" + name
                }, function(defaultExtra, funcName) {
                    jQuery.fn[funcName] = function(margin, value) {
                        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                        return jQuery.access(this, function(elem, type, value) {
                            var doc;
                            if (jQuery.isWindow(elem)) {
                                return elem.document.documentElement["client" + name]
                            }
                            if (elem.nodeType === 9) {
                                doc = elem.documentElement;
                                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
                            }
                            return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                        }, type, chainable ? margin : undefined, chainable, null)
                    }
                })
            });
            jQuery.fn.size = function() {
                return this.length
            };
            jQuery.fn.andSelf = jQuery.fn.addBack;
            if (typeof module === "object" && module && typeof module.exports === "object") {
                module.exports = jQuery
            } else {
                window.jQuery = window.$ = jQuery;
                if (typeof define === "function" && define.amd) {
                    define("jquery", [], function() {
                        return jQuery
                    })
                }
            }
        })(window);
        (function() {
            var undefined;
            var idCounter = 0;
            var indicatorObject = {};
            var keyPrefix = +new Date + "";
            var reInterpolate = /<%=([\s\S]+?)%>/g;
            var reNoMatch = /($^)/;
            var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
            var argsClass = "[object Arguments]",
                arrayClass = "[object Array]",
                boolClass = "[object Boolean]",
                dateClass = "[object Date]",
                funcClass = "[object Function]",
                numberClass = "[object Number]",
                objectClass = "[object Object]",
                regexpClass = "[object RegExp]",
                stringClass = "[object String]";
            var objectTypes = {
                "boolean": false,
                "function": true,
                object: true,
                number: false,
                string: false,
                undefined: false
            };
            var stringEscapes = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            };
            var root = objectTypes[typeof window] && window || this;
            var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
            var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
            var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
            var freeGlobal = objectTypes[typeof global] && global;
            if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
                root = freeGlobal
            }

            function baseIndexOf(array, value, fromIndex) {
                var index = (fromIndex || 0) - 1,
                    length = array ? array.length : 0;
                while (++index < length) {
                    if (array[index] === value) {
                        return index
                    }
                }
                return -1
            }

            function compareAscending(a, b) {
                var ac = a.criteria,
                    bc = b.criteria,
                    index = -1,
                    length = ac.length;
                while (++index < length) {
                    var value = ac[index],
                        other = bc[index];
                    if (value !== other) {
                        if (value > other || typeof value == "undefined") {
                            return 1
                        }
                        if (value < other || typeof other == "undefined") {
                            return -1
                        }
                    }
                }
                return a.index - b.index
            }

            function escapeStringChar(match) {
                return "\\" + stringEscapes[match]
            }

            function slice(array, start, end) {
                start || (start = 0);
                if (typeof end == "undefined") {
                    end = array ? array.length : 0
                }
                var index = -1,
                    length = end - start || 0,
                    result = Array(length < 0 ? 0 : length);
                while (++index < length) {
                    result[index] = array[start + index]
                }
                return result
            }
            var arrayRef = [];
            var objectProto = Object.prototype;
            var oldDash = root._;
            var toString = objectProto.toString;
            var reNative = RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$");
            var ceil = Math.ceil,
                floor = Math.floor,
                hasOwnProperty = objectProto.hasOwnProperty,
                push = arrayRef.push,
                propertyIsEnumerable = objectProto.propertyIsEnumerable;
            var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
                nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
                nativeIsFinite = root.isFinite,
                nativeIsNaN = root.isNaN,
                nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
                nativeMax = Math.max,
                nativeMin = Math.min,
                nativeRandom = Math.random;

            function lodash(value) {
                return value instanceof lodash ? value : new lodashWrapper(value)
            }

            function lodashWrapper(value, chainAll) {
                this.__chain__ = !!chainAll;
                this.__wrapped__ = value
            }
            lodashWrapper.prototype = lodash.prototype;
            var support = {};
            (function() {
                var object = {
                    0: 1,
                    length: 1
                };
                support.spliceObjects = (arrayRef.splice.call(object, 0, 1), !object[0])
            })(1);
            lodash.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: reInterpolate,
                variable: ""
            };

            function baseBind(bindData) {
                var func = bindData[0],
                    partialArgs = bindData[2],
                    thisArg = bindData[4];

                function bound() {
                    if (partialArgs) {
                        var args = slice(partialArgs);
                        push.apply(args, arguments)
                    }
                    if (this instanceof bound) {
                        var thisBinding = baseCreate(func.prototype),
                            result = func.apply(thisBinding, args || arguments);
                        return isObject(result) ? result : thisBinding
                    }
                    return func.apply(thisArg, args || arguments)
                }
                return bound
            }

            function baseCreate(prototype, properties) {
                return isObject(prototype) ? nativeCreate(prototype) : {}
            }
            if (!nativeCreate) {
                baseCreate = function() {
                    function Object() {}
                    return function(prototype) {
                        if (isObject(prototype)) {
                            Object.prototype = prototype;
                            var result = new Object;
                            Object.prototype = null
                        }
                        return result || root.Object()
                    }
                }()
            }

            function baseCreateCallback(func, thisArg, argCount) {
                if (typeof func != "function") {
                    return identity
                }
                if (typeof thisArg == "undefined" || !("prototype" in func)) {
                    return func
                }
                switch (argCount) {
                    case 1:
                        return function(value) {
                            return func.call(thisArg, value)
                        };
                    case 2:
                        return function(a, b) {
                            return func.call(thisArg, a, b)
                        };
                    case 3:
                        return function(value, index, collection) {
                            return func.call(thisArg, value, index, collection)
                        };
                    case 4:
                        return function(accumulator, value, index, collection) {
                            return func.call(thisArg, accumulator, value, index, collection)
                        }
                }
                return bind(func, thisArg)
            }

            function baseCreateWrapper(bindData) {
                var func = bindData[0],
                    bitmask = bindData[1],
                    partialArgs = bindData[2],
                    partialRightArgs = bindData[3],
                    thisArg = bindData[4],
                    arity = bindData[5];
                var isBind = bitmask & 1,
                    isBindKey = bitmask & 2,
                    isCurry = bitmask & 4,
                    isCurryBound = bitmask & 8,
                    key = func;

                function bound() {
                    var thisBinding = isBind ? thisArg : this;
                    if (partialArgs) {
                        var args = slice(partialArgs);
                        push.apply(args, arguments)
                    }
                    if (partialRightArgs || isCurry) {
                        args || (args = slice(arguments));
                        if (partialRightArgs) {
                            push.apply(args, partialRightArgs)
                        }
                        if (isCurry && args.length < arity) {
                            bitmask |= 16 & ~32;
                            return baseCreateWrapper([func, isCurryBound ? bitmask : bitmask & ~3, args, null, thisArg, arity])
                        }
                    }
                    args || (args = arguments);
                    if (isBindKey) {
                        func = thisBinding[key]
                    }
                    if (this instanceof bound) {
                        thisBinding = baseCreate(func.prototype);
                        var result = func.apply(thisBinding, args);
                        return isObject(result) ? result : thisBinding
                    }
                    return func.apply(thisBinding, args)
                }
                return bound
            }

            function baseDifference(array, values) {
                var index = -1,
                    indexOf = getIndexOf(),
                    length = array ? array.length : 0,
                    result = [];
                while (++index < length) {
                    var value = array[index];
                    if (indexOf(values, value) < 0) {
                        result.push(value)
                    }
                }
                return result
            }

            function baseFlatten(array, isShallow, isStrict, fromIndex) {
                var index = (fromIndex || 0) - 1,
                    length = array ? array.length : 0,
                    result = [];
                while (++index < length) {
                    var value = array[index];
                    if (value && typeof value == "object" && typeof value.length == "number" && (isArray(value) || isArguments(value))) {
                        if (!isShallow) {
                            value = baseFlatten(value, isShallow, isStrict)
                        }
                        var valIndex = -1,
                            valLength = value.length,
                            resIndex = result.length;
                        result.length += valLength;
                        while (++valIndex < valLength) {
                            result[resIndex++] = value[valIndex]
                        }
                    } else if (!isStrict) {
                        result.push(value)
                    }
                }
                return result
            }

            function baseIsEqual(a, b, stackA, stackB) {
                if (a === b) {
                    return a !== 0 || 1 / a == 1 / b
                }
                var type = typeof a,
                    otherType = typeof b;
                if (a === a && !(a && objectTypes[type]) && !(b && objectTypes[otherType])) {
                    return false
                }
                if (a == null || b == null) {
                    return a === b
                }
                var className = toString.call(a),
                    otherClass = toString.call(b);
                if (className != otherClass) {
                    return false
                }
                switch (className) {
                    case boolClass:
                    case dateClass:
                        return +a == +b;
                    case numberClass:
                        return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
                    case regexpClass:
                    case stringClass:
                        return a == String(b)
                }
                var isArr = className == arrayClass;
                if (!isArr) {
                    var aWrapped = a instanceof lodash,
                        bWrapped = b instanceof lodash;
                    if (aWrapped || bWrapped) {
                        return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, stackA, stackB)
                    }
                    if (className != objectClass) {
                        return false
                    }
                    var ctorA = a.constructor,
                        ctorB = b.constructor;
                    if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) && "constructor" in a && "constructor" in b) {
                        return false
                    }
                }
                stackA || (stackA = []);
                stackB || (stackB = []);
                var length = stackA.length;
                while (length--) {
                    if (stackA[length] == a) {
                        return stackB[length] == b
                    }
                }
                var result = true,
                    size = 0;
                stackA.push(a);
                stackB.push(b);
                if (isArr) {
                    size = b.length;
                    result = size == a.length;
                    if (result) {
                        while (size--) {
                            if (!(result = baseIsEqual(a[size], b[size], stackA, stackB))) {
                                break
                            }
                        }
                    }
                } else {
                    forIn(b, function(value, key, b) {
                        if (hasOwnProperty.call(b, key)) {
                            size++;
                            return !(result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, stackA, stackB)) && indicatorObject
                        }
                    });
                    if (result) {
                        forIn(a, function(value, key, a) {
                            if (hasOwnProperty.call(a, key)) {
                                return !(result = --size > -1) && indicatorObject
                            }
                        })
                    }
                }
                stackA.pop();
                stackB.pop();
                return result
            }

            function baseRandom(min, max) {
                return min + floor(nativeRandom() * (max - min + 1))
            }

            function baseUniq(array, isSorted, callback) {
                var index = -1,
                    indexOf = getIndexOf(),
                    length = array ? array.length : 0,
                    result = [],
                    seen = callback ? [] : result;
                while (++index < length) {
                    var value = array[index],
                        computed = callback ? callback(value, index, array) : value;
                    if (isSorted ? !index || seen[seen.length - 1] !== computed : indexOf(seen, computed) < 0) {
                        if (callback) {
                            seen.push(computed)
                        }
                        result.push(value)
                    }
                }
                return result
            }

            function createAggregator(setter) {
                return function(collection, callback, thisArg) {
                    var result = {};
                    callback = createCallback(callback, thisArg, 3);
                    var index = -1,
                        length = collection ? collection.length : 0;
                    if (typeof length == "number") {
                        while (++index < length) {
                            var value = collection[index];
                            setter(result, value, callback(value, index, collection), collection)
                        }
                    } else {
                        forOwn(collection, function(value, key, collection) {
                            setter(result, value, callback(value, key, collection), collection)
                        })
                    }
                    return result
                }
            }

            function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
                var isBind = bitmask & 1,
                    isBindKey = bitmask & 2,
                    isCurry = bitmask & 4,
                    isCurryBound = bitmask & 8,
                    isPartial = bitmask & 16,
                    isPartialRight = bitmask & 32;
                if (!isBindKey && !isFunction(func)) {
                    throw new TypeError
                }
                if (isPartial && !partialArgs.length) {
                    bitmask &= ~16;
                    isPartial = partialArgs = false
                }
                if (isPartialRight && !partialRightArgs.length) {
                    bitmask &= ~32;
                    isPartialRight = partialRightArgs = false
                }
                var creater = bitmask == 1 || bitmask === 17 ? baseBind : baseCreateWrapper;
                return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity])
            }

            function escapeHtmlChar(match) {
                return htmlEscapes[match]
            }

            function getIndexOf() {
                var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
                return result
            }

            function isNative(value) {
                return typeof value == "function" && reNative.test(value)
            }

            function unescapeHtmlChar(match) {
                return htmlUnescapes[match]
            }

            function isArguments(value) {
                return value && typeof value == "object" && typeof value.length == "number" && toString.call(value) == argsClass || false
            }
            if (!isArguments(arguments)) {
                isArguments = function(value) {
                    return value && typeof value == "object" && typeof value.length == "number" && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee") || false
                }
            }
            var isArray = nativeIsArray || function(value) {
                return value && typeof value == "object" && typeof value.length == "number" && toString.call(value) == arrayClass || false
            };
            var shimKeys = function(object) {
                var index, iterable = object,
                    result = [];
                if (!iterable) return result;
                if (!objectTypes[typeof object]) return result;
                for (index in iterable) {
                    if (hasOwnProperty.call(iterable, index)) {
                        result.push(index)
                    }
                }
                return result
            };
            var keys = !nativeKeys ? shimKeys : function(object) {
                if (!isObject(object)) {
                    return []
                }
                return nativeKeys(object)
            };
            var htmlEscapes = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            };
            var htmlUnescapes = invert(htmlEscapes);
            var reEscapedHtml = RegExp("(" + keys(htmlUnescapes).join("|") + ")", "g"),
                reUnescapedHtml = RegExp("[" + keys(htmlEscapes).join("") + "]", "g");

            function assign(object) {
                if (!object) {
                    return object
                }
                for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
                    var iterable = arguments[argsIndex];
                    if (iterable) {
                        for (var key in iterable) {
                            object[key] = iterable[key]
                        }
                    }
                }
                return object
            }

            function clone(value) {
                return isObject(value) ? isArray(value) ? slice(value) : assign({}, value) : value
            }

            function defaults(object) {
                if (!object) {
                    return object
                }
                for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
                    var iterable = arguments[argsIndex];
                    if (iterable) {
                        for (var key in iterable) {
                            if (typeof object[key] == "undefined") {
                                object[key] = iterable[key]
                            }
                        }
                    }
                }
                return object
            }
            var forIn = function(collection, callback) {
                var index, iterable = collection,
                    result = iterable;
                if (!iterable) return result;
                if (!objectTypes[typeof iterable]) return result;
                for (index in iterable) {
                    if (callback(iterable[index], index, collection) === indicatorObject) return result
                }
                return result
            };
            var forOwn = function(collection, callback) {
                var index, iterable = collection,
                    result = iterable;
                if (!iterable) return result;
                if (!objectTypes[typeof iterable]) return result;
                for (index in iterable) {
                    if (hasOwnProperty.call(iterable, index)) {
                        if (callback(iterable[index], index, collection) === indicatorObject) return result
                    }
                }
                return result
            };

            function functions(object) {
                var result = [];
                forIn(object, function(value, key) {
                    if (isFunction(value)) {
                        result.push(key)
                    }
                });
                return result.sort()
            }

            function has(object, key) {
                return object ? hasOwnProperty.call(object, key) : false
            }

            function invert(object) {
                var index = -1,
                    props = keys(object),
                    length = props.length,
                    result = {};
                while (++index < length) {
                    var key = props[index];
                    result[object[key]] = key
                }
                return result
            }

            function isBoolean(value) {
                return value === true || value === false || value && typeof value == "object" && toString.call(value) == boolClass || false
            }

            function isDate(value) {
                return value && typeof value == "object" && toString.call(value) == dateClass || false
            }

            function isElement(value) {
                return value && value.nodeType === 1 || false
            }

            function isEmpty(value) {
                if (!value) {
                    return true
                }
                if (isArray(value) || isString(value)) {
                    return !value.length
                }
                for (var key in value) {
                    if (hasOwnProperty.call(value, key)) {
                        return false
                    }
                }
                return true
            }

            function isEqual(a, b) {
                return baseIsEqual(a, b)
            }

            function isFinite(value) {
                return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value))
            }

            function isFunction(value) {
                return typeof value == "function"
            }
            if (isFunction(/x/)) {
                isFunction = function(value) {
                    return typeof value == "function" && toString.call(value) == funcClass
                }
            }

            function isObject(value) {
                return !!(value && objectTypes[typeof value])
            }

            function isNaN(value) {
                return isNumber(value) && value != +value
            }

            function isNull(value) {
                return value === null
            }

            function isNumber(value) {
                return typeof value == "number" || value && typeof value == "object" && toString.call(value) == numberClass || false
            }

            function isRegExp(value) {
                return value && objectTypes[typeof value] && toString.call(value) == regexpClass || false
            }

            function isString(value) {
                return typeof value == "string" || value && typeof value == "object" && toString.call(value) == stringClass || false
            }

            function isUndefined(value) {
                return typeof value == "undefined"
            }

            function omit(object) {
                var props = [];
                forIn(object, function(value, key) {
                    props.push(key)
                });
                props = baseDifference(props, baseFlatten(arguments, true, false, 1));
                var index = -1,
                    length = props.length,
                    result = {};
                while (++index < length) {
                    var key = props[index];
                    result[key] = object[key]
                }
                return result
            }

            function pairs(object) {
                var index = -1,
                    props = keys(object),
                    length = props.length,
                    result = Array(length);
                while (++index < length) {
                    var key = props[index];
                    result[index] = [key, object[key]]
                }
                return result
            }

            function pick(object) {
                var index = -1,
                    props = baseFlatten(arguments, true, false, 1),
                    length = props.length,
                    result = {};
                while (++index < length) {
                    var key = props[index];
                    if (key in object) {
                        result[key] = object[key]
                    }
                }
                return result
            }

            function values(object) {
                var index = -1,
                    props = keys(object),
                    length = props.length,
                    result = Array(length);
                while (++index < length) {
                    result[index] = object[props[index]]
                }
                return result
            }

            function contains(collection, target) {
                var indexOf = getIndexOf(),
                    length = collection ? collection.length : 0,
                    result = false;
                if (length && typeof length == "number") {
                    result = indexOf(collection, target) > -1
                } else {
                    forOwn(collection, function(value) {
                        return (result = value === target) && indicatorObject
                    })
                }
                return result
            }
            var countBy = createAggregator(function(result, value, key) {
                hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1
            });

            function every(collection, callback, thisArg) {
                var result = true;
                callback = createCallback(callback, thisArg, 3);
                var index = -1,
                    length = collection ? collection.length : 0;
                if (typeof length == "number") {
                    while (++index < length) {
                        if (!(result = !!callback(collection[index], index, collection))) {
                            break
                        }
                    }
                } else {
                    forOwn(collection, function(value, index, collection) {
                        return !(result = !!callback(value, index, collection)) && indicatorObject
                    })
                }
                return result
            }

            function filter(collection, callback, thisArg) {
                var result = [];
                callback = createCallback(callback, thisArg, 3);
                var index = -1,
                    length = collection ? collection.length : 0;
                if (typeof length == "number") {
                    while (++index < length) {
                        var value = collection[index];
                        if (callback(value, index, collection)) {
                            result.push(value)
                        }
                    }
                } else {
                    forOwn(collection, function(value, index, collection) {
                        if (callback(value, index, collection)) {
                            result.push(value)
                        }
                    })
                }
                return result
            }

            function find(collection, callback, thisArg) {
                callback = createCallback(callback, thisArg, 3);
                var index = -1,
                    length = collection ? collection.length : 0;
                if (typeof length == "number") {
                    while (++index < length) {
                        var value = collection[index];
                        if (callback(value, index, collection)) {
                            return value
                        }
                    }
                } else {
                    var result;
                    forOwn(collection, function(value, index, collection) {
                        if (callback(value, index, collection)) {
                            result = value;
                            return indicatorObject
                        }
                    });
                    return result
                }
            }

            function findWhere(object, properties) {
                return where(object, properties, true)
            }

            function forEach(collection, callback, thisArg) {
                var index = -1,
                    length = collection ? collection.length : 0;
                callback = callback && typeof thisArg == "undefined" ? callback : baseCreateCallback(callback, thisArg, 3);
                if (typeof length == "number") {
                    while (++index < length) {
                        if (callback(collection[index], index, collection) === indicatorObject) {
                            break
                        }
                    }
                } else {
                    forOwn(collection, callback)
                }
            }

            function forEachRight(collection, callback) {
                var length = collection ? collection.length : 0;
                if (typeof length == "number") {
                    while (length--) {
                        if (callback(collection[length], length, collection) === false) {
                            break
                        }
                    }
                } else {
                    var props = keys(collection);
                    length = props.length;
                    forOwn(collection, function(value, key, collection) {
                        key = props ? props[--length] : --length;
                        return callback(collection[key], key, collection) === false && indicatorObject
                    })
                }
            }
            var groupBy = createAggregator(function(result, value, key) {
                (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value)
            });
            var indexBy = createAggregator(function(result, value, key) {
                result[key] = value
            });

            function invoke(collection, methodName) {
                var args = slice(arguments, 2),
                    index = -1,
                    isFunc = typeof methodName == "function",
                    length = collection ? collection.length : 0,
                    result = Array(typeof length == "number" ? length : 0);
                forEach(collection, function(value) {
                    result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args)
                });
                return result
            }

            function map(collection, callback, thisArg) {
                var index = -1,
                    length = collection ? collection.length : 0;
                callback = createCallback(callback, thisArg, 3);
                if (typeof length == "number") {
                    var result = Array(length);
                    while (++index < length) {
                        result[index] = callback(collection[index], index, collection)
                    }
                } else {
                    result = [];
                    forOwn(collection, function(value, key, collection) {
                        result[++index] = callback(value, key, collection)
                    })
                }
                return result
            }

            function max(collection, callback, thisArg) {
                var computed = -Infinity,
                    result = computed;
                if (typeof callback != "function" && thisArg && thisArg[callback] === collection) {
                    callback = null
                }
                var index = -1,
                    length = collection ? collection.length : 0;
                if (callback == null && typeof length == "number") {
                    while (++index < length) {
                        var value = collection[index];
                        if (value > result) {
                            result = value
                        }
                    }
                } else {
                    callback = createCallback(callback, thisArg, 3);
                    forEach(collection, function(value, index, collection) {
                        var current = callback(value, index, collection);
                        if (current > computed) {
                            computed = current;
                            result = value
                        }
                    })
                }
                return result
            }

            function min(collection, callback, thisArg) {
                var computed = Infinity,
                    result = computed;
                if (typeof callback != "function" && thisArg && thisArg[callback] === collection) {
                    callback = null
                }
                var index = -1,
                    length = collection ? collection.length : 0;
                if (callback == null && typeof length == "number") {
                    while (++index < length) {
                        var value = collection[index];
                        if (value < result) {
                            result = value
                        }
                    }
                } else {
                    callback = createCallback(callback, thisArg, 3);
                    forEach(collection, function(value, index, collection) {
                        var current = callback(value, index, collection);
                        if (current < computed) {
                            computed = current;
                            result = value
                        }
                    })
                }
                return result
            }
            var pluck = map;

            function reduce(collection, callback, accumulator, thisArg) {
                if (!collection) return accumulator;
                var noaccum = arguments.length < 3;
                callback = createCallback(callback, thisArg, 4);
                var index = -1,
                    length = collection.length;
                if (typeof length == "number") {
                    if (noaccum) {
                        accumulator = collection[++index]
                    }
                    while (++index < length) {
                        accumulator = callback(accumulator, collection[index], index, collection)
                    }
                } else {
                    forOwn(collection, function(value, index, collection) {
                        accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection)
                    })
                }
                return accumulator
            }

            function reduceRight(collection, callback, accumulator, thisArg) {
                var noaccum = arguments.length < 3;
                callback = createCallback(callback, thisArg, 4);
                forEachRight(collection, function(value, index, collection) {
                    accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection)
                });
                return accumulator
            }

            function reject(collection, callback, thisArg) {
                callback = createCallback(callback, thisArg, 3);
                return filter(collection, function(value, index, collection) {
                    return !callback(value, index, collection)
                })
            }

            function sample(collection, n, guard) {
                if (collection && typeof collection.length != "number") {
                    collection = values(collection)
                }
                if (n == null || guard) {
                    return collection ? collection[baseRandom(0, collection.length - 1)] : undefined
                }
                var result = shuffle(collection);
                result.length = nativeMin(nativeMax(0, n), result.length);
                return result
            }

            function shuffle(collection) {
                var index = -1,
                    length = collection ? collection.length : 0,
                    result = Array(typeof length == "number" ? length : 0);
                forEach(collection, function(value) {
                    var rand = baseRandom(0, ++index);
                    result[index] = result[rand];
                    result[rand] = value
                });
                return result
            }

            function size(collection) {
                var length = collection ? collection.length : 0;
                return typeof length == "number" ? length : keys(collection).length
            }

            function some(collection, callback, thisArg) {
                var result;
                callback = createCallback(callback, thisArg, 3);
                var index = -1,
                    length = collection ? collection.length : 0;
                if (typeof length == "number") {
                    while (++index < length) {
                        if (result = callback(collection[index], index, collection)) {
                            break
                        }
                    }
                } else {
                    forOwn(collection, function(value, index, collection) {
                        return (result = callback(value, index, collection)) && indicatorObject
                    })
                }
                return !!result
            }

            function sortBy(collection, callback, thisArg) {
                var index = -1,
                    length = collection ? collection.length : 0,
                    result = Array(typeof length == "number" ? length : 0);
                callback = createCallback(callback, thisArg, 3);
                forEach(collection, function(value, key, collection) {
                    result[++index] = {
                        criteria: [callback(value, key, collection)],
                        index: index,
                        value: value
                    }
                });
                length = result.length;
                result.sort(compareAscending);
                while (length--) {
                    result[length] = result[length].value
                }
                return result
            }

            function toArray(collection) {
                if (isArray(collection)) {
                    return slice(collection)
                }
                if (collection && typeof collection.length == "number") {
                    return map(collection)
                }
                return values(collection)
            }

            function where(collection, properties, first) {
                return first && isEmpty(properties) ? undefined : (first ? find : filter)(collection, properties)
            }

            function compact(array) {
                var index = -1,
                    length = array ? array.length : 0,
                    result = [];
                while (++index < length) {
                    var value = array[index];
                    if (value) {
                        result.push(value)
                    }
                }
                return result
            }

            function difference(array) {
                return baseDifference(array, baseFlatten(arguments, true, true, 1))
            }

            function first(array, callback, thisArg) {
                var n = 0,
                    length = array ? array.length : 0;
                if (typeof callback != "number" && callback != null) {
                    var index = -1;
                    callback = createCallback(callback, thisArg, 3);
                    while (++index < length && callback(array[index], index, array)) {
                        n++
                    }
                } else {
                    n = callback;
                    if (n == null || thisArg) {
                        return array ? array[0] : undefined
                    }
                }
                return slice(array, 0, nativeMin(nativeMax(0, n), length))
            }

            function flatten(array, isShallow) {
                return baseFlatten(array, isShallow)
            }

            function indexOf(array, value, fromIndex) {
                if (typeof fromIndex == "number") {
                    var length = array ? array.length : 0;
                    fromIndex = fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0
                } else if (fromIndex) {
                    var index = sortedIndex(array, value);
                    return array[index] === value ? index : -1
                }
                return baseIndexOf(array, value, fromIndex)
            }

            function initial(array, callback, thisArg) {
                var n = 0,
                    length = array ? array.length : 0;
                if (typeof callback != "number" && callback != null) {
                    var index = length;
                    callback = createCallback(callback, thisArg, 3);
                    while (index-- && callback(array[index], index, array)) {
                        n++
                    }
                } else {
                    n = callback == null || thisArg ? 1 : callback || n
                }
                return slice(array, 0, nativeMin(nativeMax(0, length - n), length))
            }

            function intersection() {
                var args = [],
                    argsIndex = -1,
                    argsLength = arguments.length;
                while (++argsIndex < argsLength) {
                    var value = arguments[argsIndex];
                    if (isArray(value) || isArguments(value)) {
                        args.push(value)
                    }
                }
                var array = args[0],
                    index = -1,
                    indexOf = getIndexOf(),
                    length = array ? array.length : 0,
                    result = [];
                outer: while (++index < length) {
                    value = array[index];
                    if (indexOf(result, value) < 0) {
                        var argsIndex = argsLength;
                        while (--argsIndex) {
                            if (indexOf(args[argsIndex], value) < 0) {
                                continue outer
                            }
                        }
                        result.push(value)
                    }
                }
                return result
            }

            function last(array, callback, thisArg) {
                var n = 0,
                    length = array ? array.length : 0;
                if (typeof callback != "number" && callback != null) {
                    var index = length;
                    callback = createCallback(callback, thisArg, 3);
                    while (index-- && callback(array[index], index, array)) {
                        n++
                    }
                } else {
                    n = callback;
                    if (n == null || thisArg) {
                        return array ? array[length - 1] : undefined
                    }
                }
                return slice(array, nativeMax(0, length - n))
            }

            function lastIndexOf(array, value, fromIndex) {
                var index = array ? array.length : 0;
                if (typeof fromIndex == "number") {
                    index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1
                }
                while (index--) {
                    if (array[index] === value) {
                        return index
                    }
                }
                return -1
            }

            function range(start, end, step) {
                start = +start || 0;
                step = +step || 1;
                if (end == null) {
                    end = start;
                    start = 0
                }
                var index = -1,
                    length = nativeMax(0, ceil((end - start) / step)),
                    result = Array(length);
                while (++index < length) {
                    result[index] = start;
                    start += step
                }
                return result
            }

            function rest(array, callback, thisArg) {
                if (typeof callback != "number" && callback != null) {
                    var n = 0,
                        index = -1,
                        length = array ? array.length : 0;
                    callback = createCallback(callback, thisArg, 3);
                    while (++index < length && callback(array[index], index, array)) {
                        n++
                    }
                } else {
                    n = callback == null || thisArg ? 1 : nativeMax(0, callback)
                }
                return slice(array, n)
            }

            function sortedIndex(array, value, callback, thisArg) {
                var low = 0,
                    high = array ? array.length : low;
                callback = callback ? createCallback(callback, thisArg, 1) : identity;
                value = callback(value);
                while (low < high) {
                    var mid = low + high >>> 1;
                    callback(array[mid]) < value ? low = mid + 1 : high = mid
                }
                return low
            }

            function union() {
                return baseUniq(baseFlatten(arguments, true, true))
            }

            function uniq(array, isSorted, callback, thisArg) {
                if (typeof isSorted != "boolean" && isSorted != null) {
                    thisArg = callback;
                    callback = typeof isSorted != "function" && thisArg && thisArg[isSorted] === array ? null : isSorted;
                    isSorted = false
                }
                if (callback != null) {
                    callback = createCallback(callback, thisArg, 3)
                }
                return baseUniq(array, isSorted, callback)
            }

            function without(array) {
                return baseDifference(array, slice(arguments, 1))
            }

            function zip() {
                var index = -1,
                    length = max(pluck(arguments, "length")),
                    result = Array(length < 0 ? 0 : length);
                while (++index < length) {
                    result[index] = pluck(arguments, index)
                }
                return result
            }

            function zipObject(keys, values) {
                var index = -1,
                    length = keys ? keys.length : 0,
                    result = {};
                if (!values && length && !isArray(keys[0])) {
                    values = []
                }
                while (++index < length) {
                    var key = keys[index];
                    if (values) {
                        result[key] = values[index]
                    } else if (key) {
                        result[key[0]] = key[1]
                    }
                }
                return result
            }

            function after(n, func) {
                if (!isFunction(func)) {
                    throw new TypeError
                }
                return function() {
                    if (--n < 1) {
                        return func.apply(this, arguments)
                    }
                }
            }

            function bind(func, thisArg) {
                return arguments.length > 2 ? createWrapper(func, 17, slice(arguments, 2), null, thisArg) : createWrapper(func, 1, null, null, thisArg)
            }

            function bindAll(object) {
                var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
                    index = -1,
                    length = funcs.length;
                while (++index < length) {
                    var key = funcs[index];
                    object[key] = createWrapper(object[key], 1, null, null, object)
                }
                return object
            }

            function compose() {
                var funcs = arguments,
                    length = funcs.length;
                while (length--) {
                    if (!isFunction(funcs[length])) {
                        throw new TypeError
                    }
                }
                return function() {
                    var args = arguments,
                        length = funcs.length;
                    while (length--) {
                        args = [funcs[length].apply(this, args)]
                    }
                    return args[0]
                }
            }

            function debounce(func, wait, options) {
                var args, maxTimeoutId, result, stamp, thisArg, timeoutId, trailingCall, lastCalled = 0,
                    maxWait = false,
                    trailing = true;
                if (!isFunction(func)) {
                    throw new TypeError
                }
                wait = nativeMax(0, wait) || 0;
                if (options === true) {
                    var leading = true;
                    trailing = false
                } else if (isObject(options)) {
                    leading = options.leading;
                    maxWait = "maxWait" in options && (nativeMax(wait, options.maxWait) || 0);
                    trailing = "trailing" in options ? options.trailing : trailing
                }
                var delayed = function() {
                    var remaining = wait - (now() - stamp);
                    if (remaining <= 0) {
                        if (maxTimeoutId) {
                            clearTimeout(maxTimeoutId)
                        }
                        var isCalled = trailingCall;
                        maxTimeoutId = timeoutId = trailingCall = undefined;
                        if (isCalled) {
                            lastCalled = now();
                            result = func.apply(thisArg, args);
                            if (!timeoutId && !maxTimeoutId) {
                                args = thisArg = null
                            }
                        }
                    } else {
                        timeoutId = setTimeout(delayed, remaining)
                    }
                };
                var maxDelayed = function() {
                    if (timeoutId) {
                        clearTimeout(timeoutId)
                    }
                    maxTimeoutId = timeoutId = trailingCall = undefined;
                    if (trailing || maxWait !== wait) {
                        lastCalled = now();
                        result = func.apply(thisArg, args);
                        if (!timeoutId && !maxTimeoutId) {
                            args = thisArg = null
                        }
                    }
                };
                return function() {
                    args = arguments;
                    stamp = now();
                    thisArg = this;
                    trailingCall = trailing && (timeoutId || !leading);
                    if (maxWait === false) {
                        var leadingCall = leading && !timeoutId
                    } else {
                        if (!maxTimeoutId && !leading) {
                            lastCalled = stamp
                        }
                        var remaining = maxWait - (stamp - lastCalled),
                            isCalled = remaining <= 0;
                        if (isCalled) {
                            if (maxTimeoutId) {
                                maxTimeoutId = clearTimeout(maxTimeoutId)
                            }
                            lastCalled = stamp;
                            result = func.apply(thisArg, args)
                        } else if (!maxTimeoutId) {
                            maxTimeoutId = setTimeout(maxDelayed, remaining)
                        }
                    }
                    if (isCalled && timeoutId) {
                        timeoutId = clearTimeout(timeoutId)
                    } else if (!timeoutId && wait !== maxWait) {
                        timeoutId = setTimeout(delayed, wait)
                    }
                    if (leadingCall) {
                        isCalled = true;
                        result = func.apply(thisArg, args)
                    }
                    if (isCalled && !timeoutId && !maxTimeoutId) {
                        args = thisArg = null
                    }
                    return result
                }
            }

            function defer(func) {
                if (!isFunction(func)) {
                    throw new TypeError
                }
                var args = slice(arguments, 1);
                return setTimeout(function() {
                    func.apply(undefined, args)
                }, 1)
            }

            function delay(func, wait) {
                if (!isFunction(func)) {
                    throw new TypeError
                }
                var args = slice(arguments, 2);
                return setTimeout(function() {
                    func.apply(undefined, args)
                }, wait)
            }

            function memoize(func, resolver) {
                var cache = {};
                return function() {
                    var key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];
                    return hasOwnProperty.call(cache, key) ? cache[key] : cache[key] = func.apply(this, arguments)
                }
            }

            function once(func) {
                var ran, result;
                if (!isFunction(func)) {
                    throw new TypeError
                }
                return function() {
                    if (ran) {
                        return result
                    }
                    ran = true;
                    result = func.apply(this, arguments);
                    func = null;
                    return result
                }
            }

            function partial(func) {
                return createWrapper(func, 16, slice(arguments, 1))
            }

            function throttle(func, wait, options) {
                var leading = true,
                    trailing = true;
                if (!isFunction(func)) {
                    throw new TypeError
                }
                if (options === false) {
                    leading = false
                } else if (isObject(options)) {
                    leading = "leading" in options ? options.leading : leading;
                    trailing = "trailing" in options ? options.trailing : trailing
                }
                options = {};
                options.leading = leading;
                options.maxWait = wait;
                options.trailing = trailing;
                return debounce(func, wait, options)
            }

            function wrap(value, wrapper) {
                return createWrapper(wrapper, 16, [value])
            }

            function createCallback(func, thisArg, argCount) {
                var type = typeof func;
                if (func == null || type == "function") {
                    return baseCreateCallback(func, thisArg, argCount)
                }
                if (type != "object") {
                    return property(func)
                }
                var props = keys(func);
                return function(object) {
                    var length = props.length,
                        result = false;
                    while (length--) {
                        if (!(result = object[props[length]] === func[props[length]])) {
                            break
                        }
                    }
                    return result
                }
            }

            function escape(string) {
                return string == null ? "" : String(string).replace(reUnescapedHtml, escapeHtmlChar)
            }

            function identity(value) {
                return value
            }

            function mixin(object) {
                forEach(functions(object), function(methodName) {
                    var func = lodash[methodName] = object[methodName];
                    lodash.prototype[methodName] = function() {
                        var args = [this.__wrapped__];
                        push.apply(args, arguments);
                        var result = func.apply(lodash, args);
                        return this.__chain__ ? new lodashWrapper(result, true) : result
                    }
                })
            }

            function noConflict() {
                root._ = oldDash;
                return this
            }

            function noop() {}
            var now = isNative(now = Date.now) && now || function() {
                return (new Date).getTime()
            };

            function property(key) {
                return function(object) {
                    return object[key]
                }
            }

            function random(min, max) {
                if (min == null && max == null) {
                    max = 1
                }
                min = +min || 0;
                if (max == null) {
                    max = min;
                    min = 0
                } else {
                    max = +max || 0
                }
                return min + floor(nativeRandom() * (max - min + 1))
            }

            function result(object, key) {
                if (object) {
                    var value = object[key];
                    return isFunction(value) ? object[key]() : value
                }
            }

            function template(text, data, options) {
                var _ = lodash,
                    settings = _.templateSettings;
                text = String(text || "");
                options = defaults({}, options, settings);
                var index = 0,
                    source = "__p += '",
                    variable = options.variable;
                var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + (options.interpolate || reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
                text.replace(reDelimiters, function(match, escapeValue, interpolateValue, evaluateValue, offset) {
                    source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                    if (escapeValue) {
                        source += "' +\n_.escape(" + escapeValue + ") +\n'"
                    }
                    if (evaluateValue) {
                        source += "';\n" + evaluateValue + ";\n__p += '"
                    }
                    if (interpolateValue) {
                        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"
                    }
                    index = offset + match.length;
                    return match
                });
                source += "';\n";
                if (!variable) {
                    variable = "obj";
                    source = "with (" + variable + " || {}) {\n" + source + "\n}\n"
                }
                source = "function(" + variable + ") {\n" + "var __t, __p = '', __j = Array.prototype.join;\n" + "function print() { __p += __j.call(arguments, '') }\n" + source + "return __p\n}";
                try {
                    var result = Function("_", "return " + source)(_)
                } catch (e) {
                    e.source = source;
                    throw e
                }
                if (data) {
                    return result(data)
                }
                result.source = source;
                return result
            }

            function times(n, callback, thisArg) {
                n = (n = +n) > -1 ? n : 0;
                var index = -1,
                    result = Array(n);
                callback = baseCreateCallback(callback, thisArg, 1);
                while (++index < n) {
                    result[index] = callback(index)
                }
                return result
            }

            function unescape(string) {
                return string == null ? "" : String(string).replace(reEscapedHtml, unescapeHtmlChar)
            }

            function uniqueId(prefix) {
                var id = ++idCounter + "";
                return prefix ? prefix + id : id
            }

            function chain(value) {
                value = new lodashWrapper(value);
                value.__chain__ = true;
                return value
            }

            function tap(value, interceptor) {
                interceptor(value);
                return value
            }

            function wrapperChain() {
                this.__chain__ = true;
                return this
            }

            function wrapperValueOf() {
                return this.__wrapped__
            }
            lodash.after = after;
            lodash.bind = bind;
            lodash.bindAll = bindAll;
            lodash.chain = chain;
            lodash.compact = compact;
            lodash.compose = compose;
            lodash.countBy = countBy;
            lodash.debounce = debounce;
            lodash.defaults = defaults;
            lodash.defer = defer;
            lodash.delay = delay;
            lodash.difference = difference;
            lodash.filter = filter;
            lodash.flatten = flatten;
            lodash.forEach = forEach;
            lodash.functions = functions;
            lodash.groupBy = groupBy;
            lodash.indexBy = indexBy;
            lodash.initial = initial;
            lodash.intersection = intersection;
            lodash.invert = invert;
            lodash.invoke = invoke;
            lodash.keys = keys;
            lodash.map = map;
            lodash.max = max;
            lodash.memoize = memoize;
            lodash.min = min;
            lodash.omit = omit;
            lodash.once = once;
            lodash.pairs = pairs;
            lodash.partial = partial;
            lodash.pick = pick;
            lodash.pluck = pluck;
            lodash.range = range;
            lodash.reject = reject;
            lodash.rest = rest;
            lodash.shuffle = shuffle;
            lodash.sortBy = sortBy;
            lodash.tap = tap;
            lodash.throttle = throttle;
            lodash.times = times;
            lodash.toArray = toArray;
            lodash.union = union;
            lodash.uniq = uniq;
            lodash.values = values;
            lodash.where = where;
            lodash.without = without;
            lodash.wrap = wrap;
            lodash.zip = zip;
            lodash.collect = map;
            lodash.drop = rest;
            lodash.each = forEach;
            lodash.extend = assign;
            lodash.methods = functions;
            lodash.object = zipObject;
            lodash.select = filter;
            lodash.tail = rest;
            lodash.unique = uniq;
            lodash.clone = clone;
            lodash.contains = contains;
            lodash.escape = escape;
            lodash.every = every;
            lodash.find = find;
            lodash.has = has;
            lodash.identity = identity;
            lodash.indexOf = indexOf;
            lodash.isArguments = isArguments;
            lodash.isArray = isArray;
            lodash.isBoolean = isBoolean;
            lodash.isDate = isDate;
            lodash.isElement = isElement;
            lodash.isEmpty = isEmpty;
            lodash.isEqual = isEqual;
            lodash.isFinite = isFinite;
            lodash.isFunction = isFunction;
            lodash.isNaN = isNaN;
            lodash.isNull = isNull;
            lodash.isNumber = isNumber;
            lodash.isObject = isObject;
            lodash.isRegExp = isRegExp;
            lodash.isString = isString;
            lodash.isUndefined = isUndefined;
            lodash.lastIndexOf = lastIndexOf;
            lodash.mixin = mixin;
            lodash.noConflict = noConflict;
            lodash.random = random;
            lodash.reduce = reduce;
            lodash.reduceRight = reduceRight;
            lodash.result = result;
            lodash.size = size;
            lodash.some = some;
            lodash.sortedIndex = sortedIndex;
            lodash.template = template;
            lodash.unescape = unescape;
            lodash.uniqueId = uniqueId;
            lodash.all = every;
            lodash.any = some;
            lodash.detect = find;
            lodash.findWhere = findWhere;
            lodash.foldl = reduce;
            lodash.foldr = reduceRight;
            lodash.include = contains;
            lodash.inject = reduce;
            lodash.first = first;
            lodash.last = last;
            lodash.sample = sample;
            lodash.take = first;
            lodash.head = first;
            mixin(lodash);
            lodash.VERSION = "2.4.1";
            lodash.prototype.chain = wrapperChain;
            lodash.prototype.value = wrapperValueOf;
            forEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(methodName) {
                var func = arrayRef[methodName];
                lodash.prototype[methodName] = function() {
                    var value = this.__wrapped__;
                    func.apply(value, arguments);
                    if (!support.spliceObjects && value.length === 0) {
                        delete value[0]
                    }
                    return this
                }
            });
            forEach(["concat", "join", "slice"], function(methodName) {
                var func = arrayRef[methodName];
                lodash.prototype[methodName] = function() {
                    var value = this.__wrapped__,
                        result = func.apply(value, arguments);
                    if (this.__chain__) {
                        result = new lodashWrapper(result);
                        result.__chain__ = true
                    }
                    return result
                }
            });
            if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
                root._ = lodash;
                define(function() {
                    return lodash
                })
            } else if (freeExports && freeModule) {
                if (moduleExports) {
                    (freeModule.exports = lodash)._ = lodash
                } else {
                    freeExports._ = lodash
                }
            } else {
                root._ = lodash
            }
        }).call(this);
        (function(factory) {
            if (typeof define === "function" && define.amd) {
                define(["jquery"], factory)
            } else if (typeof exports === "object") {
                module.exports = factory
            } else {
                factory(jQuery)
            }
        })(function($) {
            var toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                slice = Array.prototype.slice,
                nullLowestDeltaTimeout, lowestDelta;
            if ($.event.fixHooks) {
                for (var i = toFix.length; i;) {
                    $.event.fixHooks[toFix[--i]] = $.event.mouseHooks
                }
            }
            $.event.special.mousewheel = {
                version: "3.1.6",
                setup: function() {
                    if (this.addEventListener) {
                        for (var i = toBind.length; i;) {
                            this.addEventListener(toBind[--i], handler, false)
                        }
                    } else {
                        this.onmousewheel = handler
                    }
                },
                teardown: function() {
                    if (this.removeEventListener) {
                        for (var i = toBind.length; i;) {
                            this.removeEventListener(toBind[--i], handler, false)
                        }
                    } else {
                        this.onmousewheel = null
                    }
                }
            };
            $.fn.extend({
                mousewheel: function(fn) {
                    return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
                },
                unmousewheel: function(fn) {
                    return this.unbind("mousewheel", fn)
                }
            });

            function handler(event) {
                var orgEvent = event || window.event,
                    args = slice.call(arguments, 1),
                    delta = 0,
                    deltaX = 0,
                    deltaY = 0,
                    absDelta = 0;
                event = $.event.fix(orgEvent);
                event.type = "mousewheel";
                if ("detail" in orgEvent) {
                    deltaY = orgEvent.detail * -1
                }
                if ("wheelDelta" in orgEvent) {
                    deltaY = orgEvent.wheelDelta
                }
                if ("wheelDeltaY" in orgEvent) {
                    deltaY = orgEvent.wheelDeltaY
                }
                if ("wheelDeltaX" in orgEvent) {
                    deltaX = orgEvent.wheelDeltaX * -1
                }
                if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
                    deltaX = deltaY * -1;
                    deltaY = 0
                }
                delta = deltaY === 0 ? deltaX : deltaY;
                if ("deltaY" in orgEvent) {
                    deltaY = orgEvent.deltaY * -1;
                    delta = deltaY
                }
                if ("deltaX" in orgEvent) {
                    deltaX = orgEvent.deltaX;
                    if (deltaY === 0) {
                        delta = deltaX * -1
                    }
                }
                if (deltaY === 0 && deltaX === 0) {
                    return
                }
                absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
                if (!lowestDelta || absDelta < lowestDelta) {
                    lowestDelta = absDelta
                }
                delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
                deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
                deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);
                event.deltaX = deltaX;
                event.deltaY = deltaY;
                event.deltaFactor = lowestDelta;
                args.unshift(event, delta, deltaX, deltaY);
                if (nullLowestDeltaTimeout) {
                    clearTimeout(nullLowestDeltaTimeout)
                }
                nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
                return ($.event.dispatch || $.event.handle).apply(this, args)
            }

            function nullLowestDelta() {
                lowestDelta = null
            }
        });
        (function($, window) {
            "use strict";
            var POSITIONED = ["fixed", "relative", "absolute"];
            var WINDOW_EVENTS = "mousewheel resize";
            var $window = $(window);
            var ScrollWatch = function(el, options) {
                _.bindAll(this, "handleScroll", "onScroll");
                this.$el = $(el);
                this.el = this.$el[0];
                this.options = _.defaults(options || {}, {
                    watchOn: window
                });
                this.$watchOn = $(this.options.watchOn);
                this._prepareContainer();
                this.inViewport = false;
                this.callbacks = {
                    scrollin: $.Callbacks(),
                    scrollout: $.Callbacks(),
                    scroll: $.Callbacks()
                };
                this.listen()
            };
            ScrollWatch.prototype = {
                _prepareContainer: function() {
                    if (this.$watchOn[0] === window) {
                        return
                    }
                    var positioning = this.$watchOn.css("position");
                    var isPositioned = _.contains(POSITIONED, positioning);
                    if (!isPositioned) {
                        this.$watchOn.css("position", "relative")
                    }
                },
                listen: function() {
                    this.$watchOn.on("scroll", this.onScroll);
                    $window.on(WINDOW_EVENTS, this.onScroll)
                },
                destroy: function() {
                    this.$watchOn.off("scroll", this.onScroll);
                    $window.off(WINDOW_EVENTS, this.onScroll);
                    this.$el.data("scrollWatch", null)
                },
                on: function(event, options, callback, thisArg) {
                    if (_.isFunction(options)) {
                        thisArg = callback;
                        callback = options;
                        options = {}
                    }
                    options = _.extend({}, this.options, options);
                    callback = _.bind(callback, thisArg || this.$el);
                    if (options.delay) {
                        callback = this._createDelayedCallback(event, callback, options)
                    }
                    this.callbacks[event].add(callback);
                    this.$watchOn.scroll();
                    return this
                },
                _createDelayedCallback: function(event, cb, options) {
                    return function() {
                        var args = arguments;
                        _.delay(function() {
                            cb.apply(this, args)
                        }, options.delay)
                    }
                },
                handleScroll: function(force) {
                    var lastVisibility = this.visibility;
                    var visibility = this.isInViewport();
                    var currentOffset = this.$watchOn.scrollTop();
                    if (this.lastOffset === false) {
                        this.direction = false
                    } else {
                        this.direction = currentOffset > this.lastOffset ? "down" : "up"
                    }
                    this.lastOffset = currentOffset;
                    this.visibility = visibility;
                    if (!this.inViewport && visibility === 1) {
                        this.inViewport = true;
                        this.trigger("scrollin")
                    } else if (this.inViewport && visibility === 0) {
                        this.inViewport = false;
                        if (this.dfd) {
                            this.dfd.done(_.bind(this.trigger, this, "scrollout"))
                        } else {
                            this.trigger("scrollout")
                        }
                    }
                    if (visibility !== lastVisibility || force) {
                        this.trigger("scroll")
                    }
                    return this
                },
                onScroll: function(event) {
                    if (this.running) {
                        return
                    }
                    this.running = true;
                    this.originalEvent = event;
                    this.handleScroll();
                    this.running = false
                },
                trigger: function(event) {
                    if (event !== "scroll" && event === this.lastTriggered) {
                        return false
                    }
                    this.lastTriggered = event;
                    this.callbacks[event].fire({
                        direction: this.direction,
                        visibility: this.visibility,
                        originalEvent: this.originalEvent
                    })
                },
                _getOffsetTop: function() {
                    if (this.$watchOn[0] === window) {
                        return this.$el.offset().top
                    }
                    var el = this.el;
                    var offset = 0;
                    do {
                        offset += el.offsetTop;
                        el = el.offsetParent
                    } while (el && el !== this.$watchOn[0]);
                    return offset
                },
                isInViewport: function() {
                    var scrollTop = this.$watchOn.scrollTop();
                    var containerHeight = this.$watchOn.height();
                    var scrollBottom = scrollTop + containerHeight;
                    var elTop = this._getOffsetTop();
                    var elHeight = this.el.offsetHeight;
                    var elBottom = elTop + elHeight;
                    var elementIsBiggerThanContainer = elHeight >= containerHeight;
                    if (elementIsBiggerThanContainer && scrollTop >= elTop && scrollBottom <= elBottom) {
                        return 1
                    }
                    if (!elementIsBiggerThanContainer && elTop >= scrollTop && elBottom <= scrollBottom) {
                        return 1
                    }
                    if (elTop > scrollTop && elTop < scrollBottom && elBottom > scrollBottom) {
                        return (scrollBottom - elTop) / elHeight
                    }
                    if (elBottom > scrollTop && elBottom < scrollBottom) {
                        return (scrollTop - elBottom) / elHeight
                    }
                    return 0
                }
            };
            window.ScrollWatch = ScrollWatch;
            $.fn.scrollWatch = function(options) {
                var $this = $(this),
                    data = $this.data("scrollWatch");
                if (!data) {
                    $this.data("scrollWatch", data = new window.ScrollWatch(this, options))
                }
                return data
            }
        })(jQuery, window);
        (function($, window) {
            "use strict";
            var pluginName = "autoscale";
            var defaults = {
                mode: "fit",
                responsive: true,
                anchor: ""
            };
            var $window = $(window);

            function Autoscale(element, options) {
                this.el = element;
                this.$el = $(element);
                this.state = {};
                var dataOptions = {
                    mode: this.$el.data("autoscale"),
                    contentRatio: this.$el.data("autoscale-content-ratio"),
                    anchor: this.$el.data("autoscale-anchor")
                };
                this.options = $.extend({}, defaults, options, dataOptions);
                if (this.options.parent) {
                    this.$parent = $(this.options.parent)
                } else {
                    this.$parent = this.$el.parent()
                }
                this._defaults = defaults;
                this._name = pluginName;
                this.initialize()
            }
            Autoscale.prototype = {
                initialize: function() {
                    this.refresh();
                    this.refresh = $.proxy(this.refresh, this);
                    this.onResize = $.proxy(this.onResize, this);
                    if (this.options.responsive) {
                        this.raf = false;
                        $window.on("load resize", _.debounce(this.onResize, 80))
                    }
                },
                setOptions: function(options) {
                    _.extend(this.options, options)
                },
                _getContentRatio: function() {
                    if (this.options.contentRatio) {
                        return this.options.contentRatio
                    }
                    if (this.el.tagName === "VIDEO") {
                        return this.el.videoWidth / this.el.videoHeight
                    }
                    if (this.el.naturalWidth && this.el.naturalHeight) {
                        return this.el.naturalWidth / this.el.naturalHeight
                    }
                    return this.$el.width() / this.$el.height()
                },
                _calculateCoverSize: function(containerWidth, containerHeight, contentRatio) {
                    var containerRatio = containerWidth / containerHeight;
                    var height = 0;
                    var width = 0;
                    if (contentRatio <= containerRatio) {
                        width = containerWidth;
                        height = width / contentRatio
                    } else {
                        height = containerHeight;
                        width = height * contentRatio
                    }
                    return {
                        width: width,
                        height: height
                    }
                },
                _calculateFitSize: function(containerWidth, containerHeight, contentRatio) {
                    var containerRatio = containerWidth / containerHeight;
                    var height = 0;
                    var width = 0;
                    if (contentRatio >= containerRatio) {
                        width = containerWidth;
                        height = width / contentRatio
                    } else {
                        height = containerHeight;
                        width = height * contentRatio
                    }
                    return {
                        width: width,
                        height: height
                    }
                },
                refresh: function() {
                    fastdom.read(function() {
                        if (!this.$el.is(":visible")) {
                            return
                        }
                        var parentWidth = this.$parent.width();
                        var parentHeight = this.$parent.height();
                        var size = {
                            width: 0,
                            height: 0
                        };
                        if (this.options.mode === "cover") {
                            size = this._calculateCoverSize(parentWidth, parentHeight, this._getContentRatio())
                        } else if (this.options.mode === "fit") {
                            size = this._calculateFitSize(parentWidth, parentHeight, this._getContentRatio())
                        }
                        var css = {
                            top: "50%",
                            left: "50%",
                            width: size.width + "px",
                            height: size.height + "px",
                            marginLeft: -size.width / 2 + "px",
                            marginTop: -size.height / 2 + "px"
                        };
                        if (this.options.anchor === "right") {
                            css.marginLeft = "0";
                            css.right = "0";
                            css.left = "auto"
                        }
                        if (this.options.anchor === "left") {
                            css.marginLeft = "0";
                            css.right = "auto";
                            css.left = "0"
                        }
                        this.state.css = css
                    }, this);
                    fastdom.write(function() {
                        if (!this.state.css) {
                            this.raf = false;
                            return
                        }
                        this.$el.css(this.state.css);
                        this.$el.addClass("autoscale autoscale-background-cover");
                        this.$parent.addClass("autoscale-parent");
                        this.raf = false
                    }, this)
                },
                onResize: function() {
                    if (!this.raf) {
                        window.requestAnimationFrame(this.refresh)
                    }
                    this.raf = true
                }
            };
            $.fn[pluginName] = function autoscale(options) {
                return this.each(function() {
                    if (!$.data(this, "plugin_" + pluginName)) {
                        $.data(this, "plugin_" + pluginName, new Autoscale(this, options))
                    } else {
                        var as = $.data(this, "plugin_" + pluginName);
                        as.setOptions(options);
                        as.refresh()
                    }
                })
            };
            var run = function() {
                $("[data-autoscale]").autoscale()
            };
            $(run);
            $window.on("load", function() {
                run();
                fastdom.defer(run)
            })
        })(jQuery, window);
        (function(ViewportHeight) {
            "use strict";
            $.fn.viewportHeight = function(options) {
                return this.each(function() {
                    ViewportHeight.attachTo(this, options)
                })
            };
            ViewportHeight.refreshAll()
        })(window.ViewportHeight);
        (function($, window, document, undefined) {
            "use strict";
            var pluginName = "sticky";
            var $window = $(window);
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;

            function Sticky(element, options) {
                this.el = element;
                this.$el = $(element);
                options = options || {};
                var container = options.container || this.$el.data("sticky-element-container");
                this.$container = container ? this.$el.closest(container) : this.$el.parent();
                this.$stateElement = options.stateElement;
                this.options = $.extend({}, options);
                this._name = pluginName;
                this.initialize()
            }
            Sticky.prototype = {
                initialize: function() {
                    if (this.$stateElement) {
                        this.$stateElement.data("sticky-enabled", true)
                    }
                    this.$el.addClass("sticky-element sticky-top");
                    this.onResize = $.proxy(this.onResize, this);
                    this.listen()
                },
                listen: function() {
                    $window.on("resize", this.onResize);
                    this.$container.scrollWatch({
                        watchOn: this.options.watchOn
                    }).on("scroll", this.onScroll, this)
                },
                destroy: function() {
                    $window.off("resize", this.onResize);
                    this.$container.scrollWatch().destroy();
                    this.$el.removeClass("sticky-element sticky-top sticky-centered sticky-bottom")
                },
                refresh: function() {
                    this.$container.scrollWatch().handleScroll(true);
                    this.raf = false
                },
                onScroll: function(e) {
                    if (this.$stateElement && this.$stateElement.data("sticky-enabled") === false) {
                        this.unstick();
                        return
                    }
                    e = e || {};
                    var visibility = Math.abs(e.visibility);
                    var isTop = e.visibility > 0;
                    var isBottom = !isTop;
                    if (visibility === 1) {
                        this.stick()
                    } else if (visibility === 0) {
                        var stickTo = e.direction === "up" ? "top" : "bottom";
                        this.unstick(stickTo)
                    } else if (isTop) {
                        this.unstick("top")
                    } else if (isBottom) {
                        var elPercent = this.$el.outerHeight() / this.$container.height();
                        if (e.direction === "up" && visibility >= elPercent) {
                            this.stick()
                        } else {
                            this.unstick("bottom")
                        }
                    }
                },
                unstick: function(position) {
                    this.$el.removeClass("sticky-bottom sticky-centered sticky-top");
                    if (position) {
                        this.$el.addClass("sticky-" + position)
                    }
                },
                stick: function() {
                    this.$el.removeClass("sticky-top sticky-bottom").addClass("sticky-centered")
                },
                onResize: function() {
                    if (!this.raf) {
                        window.requestAnimationFrame($.proxy(this.refresh, this))
                    }
                    this.raf = true
                }
            };
            $.fn[pluginName] = function sticky(options) {
                return this.each(function() {
                    if (!$.data(this, "plugin_" + pluginName)) {
                        $.data(this, "plugin_" + pluginName, new Sticky(this, options))
                    }
                    $.data(this, "plugin_" + pluginName).onResize()
                })
            };
            $window.on("load", function() {
                $("[data-sticky-element]").sticky()
            })
        })(jQuery, window, document);
        (function() {
            var b = void 0,
                f = !0,
                h = null,
                l = !1;

            function m() {
                return function() {}
            }

            function p(a) {
                return function() {
                    return this[a]
                }
            }

            function s(a) {
                return function() {
                    return a
                }
            }
            var t;
            document.createElement("video");
            document.createElement("audio");
            document.createElement("track");

            function u(a, c, d) {
                if ("string" === typeof a) {
                    0 === a.indexOf("#") && (a = a.slice(1));
                    if (u.xa[a]) return u.xa[a];
                    a = u.w(a)
                }
                if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                return a.player || new u.s(a, c, d)
            }
            var v = u;
            window.Td = window.Ud = u;
            u.Tb = "4.3";
            u.Fc = "https:" == document.location.protocol ? "https://" : "http://";
            u.options = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                width: 300,
                height: 150,
                defaultVolume: 0,
                children: {
                    mediaLoader: {},
                    posterImage: {},
                    textTrackDisplay: {},
                    loadingSpinner: {},
                    bigPlayButton: {},
                    controlBar: {}
                },
                notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
            };
            "GENERATED_CDN_VSN" !== u.Tb && (v.options.flash.swf = u.Fc + "vjs.zencdn.net/" + u.Tb + "/video-js.swf");
            u.xa = {};
            u.la = u.CoreObject = m();
            u.la.extend = function(a) {
                var c, d;
                a = a || {};
                c = a.init || a.i || this.prototype.init || this.prototype.i || m();
                d = function() {
                    c.apply(this, arguments)
                };
                d.prototype = u.k.create(this.prototype);
                d.prototype.constructor = d;
                d.extend = u.la.extend;
                d.create = u.la.create;
                for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
                return d
            };
            u.la.create = function() {
                var a = u.k.create(this.prototype);
                this.apply(a, arguments);
                return a
            };
            u.d = function(a, c, d) {
                var e = u.getData(a);
                e.z || (e.z = {});
                e.z[c] || (e.z[c] = []);
                d.t || (d.t = u.t++);
                e.z[c].push(d);
                e.W || (e.disabled = l, e.W = function(c) {
                    if (!e.disabled) {
                        c = u.kc(c);
                        var d = e.z[c.type];
                        if (d)
                            for (var d = d.slice(0), k = 0, q = d.length; k < q && !c.pc(); k++) d[k].call(a, c)
                    }
                });
                1 == e.z[c].length && (document.addEventListener ? a.addEventListener(c, e.W, l) : document.attachEvent && a.attachEvent("on" + c, e.W))
            };
            u.o = function(a, c, d) {
                if (u.oc(a)) {
                    var e = u.getData(a);
                    if (e.z)
                        if (c) {
                            var g = e.z[c];
                            if (g) {
                                if (d) {
                                    if (d.t)
                                        for (e = 0; e < g.length; e++) g[e].t === d.t && g.splice(e--, 1)
                                } else e.z[c] = [];
                                u.gc(a, c)
                            }
                        } else
                            for (g in e.z) c = g, e.z[c] = [], u.gc(a, c)
                }
            };
            u.gc = function(a, c) {
                var d = u.getData(a);
                0 === d.z[c].length && (delete d.z[c], document.removeEventListener ? a.removeEventListener(c, d.W, l) : document.detachEvent && a.detachEvent("on" + c, d.W));
                u.Bb(d.z) && (delete d.z, delete d.W, delete d.disabled);
                u.Bb(d) && u.vc(a)
            };
            u.kc = function(a) {
                function c() {
                    return f
                }

                function d() {
                    return l
                }
                if (!a || !a.Cb) {
                    var e = a || window.event;
                    a = {};
                    for (var g in e) "layerX" !== g && "layerY" !== g && (a[g] = e[g]);
                    a.target || (a.target = a.srcElement || document);
                    a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
                    a.preventDefault = function() {
                        e.preventDefault && e.preventDefault();
                        a.returnValue = l;
                        a.Ab = c
                    };
                    a.Ab = d;
                    a.stopPropagation = function() {
                        e.stopPropagation && e.stopPropagation();
                        a.cancelBubble = f;
                        a.Cb = c
                    };
                    a.Cb = d;
                    a.stopImmediatePropagation = function() {
                        e.stopImmediatePropagation && e.stopImmediatePropagation();
                        a.pc = c;
                        a.stopPropagation()
                    };
                    a.pc = d;
                    if (a.clientX != h) {
                        g = document.documentElement;
                        var j = document.body;
                        a.pageX = a.clientX + (g && g.scrollLeft || j && j.scrollLeft || 0) - (g && g.clientLeft || j && j.clientLeft || 0);
                        a.pageY = a.clientY + (g && g.scrollTop || j && j.scrollTop || 0) - (g && g.clientTop || j && j.clientTop || 0)
                    }
                    a.which = a.charCode || a.keyCode;
                    a.button != h && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0)
                }
                return a
            };
            u.j = function(a, c) {
                var d = u.oc(a) ? u.getData(a) : {},
                    e = a.parentNode || a.ownerDocument;
                "string" === typeof c && (c = {
                    type: c,
                    target: a
                });
                c = u.kc(c);
                d.W && d.W.call(a, c);
                if (e && !c.Cb() && c.bubbles !== l) u.j(e, c);
                else if (!e && !c.Ab() && (d = u.getData(c.target), c.target[c.type])) {
                    d.disabled = f;
                    if ("function" === typeof c.target[c.type]) c.target[c.type]();
                    d.disabled = l
                }
                return !c.Ab()
            };
            u.U = function(a, c, d) {
                function e() {
                    u.o(a, c, e);
                    d.apply(this, arguments)
                }
                e.t = d.t = d.t || u.t++;
                u.d(a, c, e)
            };
            var w = Object.prototype.hasOwnProperty;
            u.e = function(a, c) {
                var d, e;
                d = document.createElement(a || "div");
                for (e in c) w.call(c, e) && (-1 !== e.indexOf("aria-") || "role" == e ? d.setAttribute(e, c[e]) : d[e] = c[e]);
                return d
            };
            u.$ = function(a) {
                return a.charAt(0).toUpperCase() + a.slice(1)
            };
            u.k = {};
            u.k.create = Object.create || function(a) {
                function c() {}
                c.prototype = a;
                return new c
            };
            u.k.ua = function(a, c, d) {
                for (var e in a) w.call(a, e) && c.call(d || this, e, a[e])
            };
            u.k.B = function(a, c) {
                if (!c) return a;
                for (var d in c) w.call(c, d) && (a[d] = c[d]);
                return a
            };
            u.k.ic = function(a, c) {
                var d, e, g;
                a = u.k.copy(a);
                for (d in c) w.call(c, d) && (e = a[d], g = c[d], a[d] = u.k.qc(e) && u.k.qc(g) ? u.k.ic(e, g) : c[d]);
                return a
            };
            u.k.copy = function(a) {
                return u.k.B({}, a)
            };
            u.k.qc = function(a) {
                return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
            };
            u.bind = function(a, c, d) {
                function e() {
                    return c.apply(a, arguments)
                }
                c.t || (c.t = u.t++);
                e.t = d ? d + "_" + c.t : c.t;
                return e
            };
            u.ra = {};
            u.t = 1;
            u.expando = "vdata" + (new Date).getTime();
            u.getData = function(a) {
                var c = a[u.expando];
                c || (c = a[u.expando] = u.t++, u.ra[c] = {});
                return u.ra[c]
            };
            u.oc = function(a) {
                a = a[u.expando];
                return !(!a || u.Bb(u.ra[a]))
            };
            u.vc = function(a) {
                var c = a[u.expando];
                if (c) {
                    delete u.ra[c];
                    try {
                        delete a[u.expando]
                    } catch (d) {
                        a.removeAttribute ? a.removeAttribute(u.expando) : a[u.expando] = h
                    }
                }
            };
            u.Bb = function(a) {
                for (var c in a)
                    if (a[c] !== h) return l;
                return f
            };
            u.n = function(a, c) {
                -1 == (" " + a.className + " ").indexOf(" " + c + " ") && (a.className = "" === a.className ? c : a.className + " " + c)
            };
            u.u = function(a, c) {
                var d, e;
                if (-1 != a.className.indexOf(c)) {
                    d = a.className.split(" ");
                    for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
                    a.className = d.join(" ")
                }
            };
            u.na = u.e("video");
            u.F = navigator.userAgent;
            u.Mc = /iPhone/i.test(u.F);
            u.Lc = /iPad/i.test(u.F);
            u.Nc = /iPod/i.test(u.F);
            u.Kc = u.Mc || u.Lc || u.Nc;
            var aa = u,
                x;
            var y = u.F.match(/OS (\d+)_/i);
            x = y && y[1] ? y[1] : b;
            aa.Fd = x;
            u.Ic = /Android/i.test(u.F);
            var ba = u,
                z;
            var A = u.F.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
                B, C;
            A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : h) : z = h;
            ba.Gc = z;
            u.Oc = u.Ic && /webkit/i.test(u.F) && 2.3 > u.Gc;
            u.Jc = /Firefox/i.test(u.F);
            u.Gd = /Chrome/i.test(u.F);
            u.ac = !!("ontouchstart" in window || window.Hc && document instanceof window.Hc);
            u.xb = function(a) {
                var c, d, e, g;
                c = {};
                if (a && a.attributes && 0 < a.attributes.length) {
                    d = a.attributes;
                    for (var j = d.length - 1; 0 <= j; j--) {
                        e = d[j].name;
                        g = d[j].value;
                        if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) g = g !== h ? f : l;
                        c[e] = g
                    }
                }
                return c
            };
            u.Kd = function(a, c) {
                var d = "";
                document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
                return d
            };
            u.zb = function(a, c) {
                c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
            };
            u.Pb = {};
            u.w = function(a) {
                0 === a.indexOf("#") && (a = a.slice(1));
                return document.getElementById(a)
            };
            u.La = function(a, c) {
                c = c || a;
                var d = Math.floor(a % 60),
                    e = Math.floor(a / 60 % 60),
                    g = Math.floor(a / 3600),
                    j = Math.floor(c / 60 % 60),
                    k = Math.floor(c / 3600);
                if (isNaN(a) || Infinity === a) g = e = d = "-";
                g = 0 < g || 0 < k ? g + ":" : "";
                return g + (((g || 10 <= j) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d)
            };
            u.Tc = function() {
                document.body.focus();
                document.onselectstart = s(l)
            };
            u.Bd = function() {
                document.onselectstart = s(f)
            };
            u.trim = function(a) {
                return (a + "").replace(/^\s+|\s+$/g, "")
            };
            u.round = function(a, c) {
                c || (c = 0);
                return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
            };
            u.tb = function(a, c) {
                return {
                    length: 1,
                    start: function() {
                        return a
                    },
                    end: function() {
                        return c
                    }
                }
            };
            u.get = function(a, c, d) {
                var e, g;
                "undefined" === typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (a) {}
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (c) {}
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP")
                    } catch (d) {}
                    throw Error("This browser does not support XMLHttpRequest.")
                });
                g = new XMLHttpRequest;
                try {
                    g.open("GET", a)
                } catch (j) {
                    d(j)
                }
                e = 0 === a.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http");
                g.onreadystatechange = function() {
                    4 === g.readyState && (200 === g.status || e && 0 === g.status ? c(g.responseText) : d && d())
                };
                try {
                    g.send()
                } catch (k) {
                    d && d(k)
                }
            };
            u.td = function(a) {
                try {
                    var c = window.localStorage || l;
                    c && (c.volume = a)
                } catch (d) {
                    22 == d.code || 1014 == d.code ? u.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? u.log("LocalStorage not allowed (VideoJS)", d) : u.log("LocalStorage Error (VideoJS)", d)
                }
            };
            u.mc = function(a) {
                a.match(/^https?:\/\//) || (a = u.e("div", {
                    innerHTML: '<a href="' + a + '">x</a>'
                }).firstChild.href);
                return a
            };
            u.log = function() {
                u.log.history = u.log.history || [];
                u.log.history.push(arguments);
                window.console && window.console.log(Array.prototype.slice.call(arguments))
            };
            u.ad = function(a) {
                var c, d;
                a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
                if (!c) return {
                    left: 0,
                    top: 0
                };
                a = document.documentElement;
                d = document.body;
                return {
                    left: c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0),
                    top: c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0)
                }
            };
            u.c = u.la.extend({
                i: function(a, c, d) {
                    this.b = a;
                    this.g = u.k.copy(this.g);
                    c = this.options(c);
                    this.Q = c.id || (c.el && c.el.id ? c.el.id : a.id() + "_component_" + u.t++);
                    this.gd = c.name || h;
                    this.a = c.el || this.e();
                    this.G = [];
                    this.qb = {};
                    this.V = {};
                    if ((a = this.g) && a.children) {
                        var e = this;
                        u.k.ua(a.children, function(a, c) {
                            c !== l && !c.loadEvent && (e[a] = e.Z(a, c))
                        })
                    }
                    this.L(d)
                }
            });
            t = u.c.prototype;
            t.D = function() {
                this.j("dispose");
                if (this.G)
                    for (var a = this.G.length - 1; 0 <= a; a--) this.G[a].D && this.G[a].D();
                this.V = this.qb = this.G = h;
                this.o();
                this.a.parentNode && this.a.parentNode.removeChild(this.a);
                u.vc(this.a);
                this.a = h
            };
            t.b = f;
            t.K = p("b");
            t.options = function(a) {
                return a === b ? this.g : this.g = u.k.ic(this.g, a)
            };
            t.e = function(a, c) {
                return u.e(a, c)
            };
            t.w = p("a");
            t.id = p("Q");
            t.name = p("gd");
            t.children = p("G");
            t.Z = function(a, c) {
                var d, e;
                "string" === typeof a ? (e = a, c = c || {}, d = c.componentClass || u.$(e), c.name = e, d = new window.videojs[d](this.b || this, c)) : d = a;
                this.G.push(d);
                "function" === typeof d.id && (this.qb[d.id()] = d);
                (e = e || d.name && d.name()) && (this.V[e] = d);
                "function" === typeof d.el && d.el() && (this.sa || this.a).appendChild(d.el());
                return d
            };
            t.removeChild = function(a) {
                "string" === typeof a && (a = this.V[a]);
                if (a && this.G) {
                    for (var c = l, d = this.G.length - 1; 0 <= d; d--)
                        if (this.G[d] === a) {
                            c = f;
                            this.G.splice(d, 1);
                            break
                        }
                    c && (this.qb[a.id] = h, this.V[a.name] = h, (c = a.w()) && c.parentNode === (this.sa || this.a) && (this.sa || this.a).removeChild(a.w()))
                }
            };
            t.T = s("");
            t.d = function(a, c) {
                u.d(this.a, a, u.bind(this, c));
                return this
            };
            t.o = function(a, c) {
                u.o(this.a, a, c);
                return this
            };
            t.U = function(a, c) {
                u.U(this.a, a, u.bind(this, c));
                return this
            };
            t.j = function(a, c) {
                u.j(this.a, a, c);
                return this
            };
            t.L = function(a) {
                a && (this.aa ? a.call(this) : (this.Sa === b && (this.Sa = []), this.Sa.push(a)));
                return this
            };
            t.Ua = function() {
                this.aa = f;
                var a = this.Sa;
                if (a && 0 < a.length) {
                    for (var c = 0, d = a.length; c < d; c++) a[c].call(this);
                    this.Sa = [];
                    this.j("ready")
                }
            };
            t.n = function(a) {
                u.n(this.a, a);
                return this
            };
            t.u = function(a) {
                u.u(this.a, a);
                return this
            };
            t.show = function() {
                this.a.style.display = "block";
                return this
            };
            t.C = function() {
                this.a.style.display = "none";
                return this
            };

            function D(a) {
                a.u("vjs-lock-showing")
            }
            t.disable = function() {
                this.C();
                this.show = m()
            };
            t.width = function(a, c) {
                return E(this, "width", a, c)
            };
            t.height = function(a, c) {
                return E(this, "height", a, c)
            };
            t.Xc = function(a, c) {
                return this.width(a, f).height(c)
            };

            function E(a, c, d, e) {
                if (d !== b) return a.a.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px", e || a.j("resize"), a;
                if (!a.a) return 0;
                d = a.a.style[c];
                e = d.indexOf("px");
                return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.a["offset" + u.$(c)], 10)
            }
            u.q = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    var d = l;
                    this.d("touchstart", function(a) {
                        a.preventDefault();
                        d = f
                    });
                    this.d("touchmove", function() {
                        d = l
                    });
                    var e = this;
                    this.d("touchend", function(a) {
                        d && e.p(a);
                        a.preventDefault()
                    });
                    this.d("click", this.p);
                    this.d("focus", this.Oa);
                    this.d("blur", this.Na)
                }
            });
            t = u.q.prototype;
            t.e = function(a, c) {
                c = u.k.B({
                    className: this.T(),
                    innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.qa || "Need Text") + "</span></div>",
                    qd: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                }, c);
                return u.c.prototype.e.call(this, a, c)
            };
            t.T = function() {
                return "vjs-control " + u.c.prototype.T.call(this)
            };
            t.p = m();
            t.Oa = function() {
                u.d(document, "keyup", u.bind(this, this.ba))
            };
            t.ba = function(a) {
                if (32 == a.which || 13 == a.which) a.preventDefault(), this.p()
            };
            t.Na = function() {
                u.o(document, "keyup", u.bind(this, this.ba))
            };
            u.O = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    this.Sc = this.V[this.g.barName];
                    this.handle = this.V[this.g.handleName];
                    a.d(this.tc, u.bind(this, this.update));
                    this.d("mousedown", this.Pa);
                    this.d("touchstart", this.Pa);
                    this.d("focus", this.Oa);
                    this.d("blur", this.Na);
                    this.d("click", this.p);
                    this.b.d("controlsvisible", u.bind(this, this.update));
                    a.L(u.bind(this, this.update));
                    this.P = {}
                }
            });
            t = u.O.prototype;
            t.e = function(a, c) {
                c = c || {};
                c.className += " vjs-slider";
                c = u.k.B({
                    qd: "slider",
                    "aria-valuenow": 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    tabIndex: 0
                }, c);
                return u.c.prototype.e.call(this, a, c)
            };
            t.Pa = function(a) {
                a.preventDefault();
                u.Tc();
                this.P.move = u.bind(this, this.Hb);
                this.P.end = u.bind(this, this.Ib);
                u.d(document, "mousemove", this.P.move);
                u.d(document, "mouseup", this.P.end);
                u.d(document, "touchmove", this.P.move);
                u.d(document, "touchend", this.P.end);
                this.Hb(a)
            };
            t.Ib = function() {
                u.Bd();
                u.o(document, "mousemove", this.P.move, l);
                u.o(document, "mouseup", this.P.end, l);
                u.o(document, "touchmove", this.P.move, l);
                u.o(document, "touchend", this.P.end, l);
                this.update()
            };
            t.update = function() {
                if (this.a) {
                    var a, c = this.yb(),
                        d = this.handle,
                        e = this.Sc;
                    isNaN(c) && (c = 0);
                    a = c;
                    if (d) {
                        a = this.a.offsetWidth;
                        var g = d.w().offsetWidth;
                        a = g ? g / a : 0;
                        c *= 1 - a;
                        a = c + a / 2;
                        d.w().style.left = u.round(100 * c, 2) + "%"
                    }
                    e.w().style.width = u.round(100 * a, 2) + "%"
                }
            };

            function F(a, c) {
                var d, e, g, j;
                d = a.a;
                e = u.ad(d);
                j = g = d.offsetWidth;
                d = a.handle;
                if (a.g.Cd) return j = e.top, e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY, d && (d = d.w().offsetHeight, j += d / 2, g -= d), Math.max(0, Math.min(1, (j - e + g) / g));
                g = e.left;
                e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
                d && (d = d.w().offsetWidth, g += d / 2, j -= d);
                return Math.max(0, Math.min(1, (e - g) / j))
            }
            t.Oa = function() {
                u.d(document, "keyup", u.bind(this, this.ba))
            };
            t.ba = function(a) {
                37 == a.which ? (a.preventDefault(), this.yc()) : 39 == a.which && (a.preventDefault(), this.zc())
            };
            t.Na = function() {
                u.o(document, "keyup", u.bind(this, this.ba))
            };
            t.p = function(a) {
                a.stopImmediatePropagation();
                a.preventDefault()
            };
            u.ea = u.c.extend();
            u.ea.prototype.defaultValue = 0;
            u.ea.prototype.e = function(a, c) {
                c = c || {};
                c.className += " vjs-slider-handle";
                c = u.k.B({
                    innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
                }, c);
                return u.c.prototype.e.call(this, "div", c)
            };
            u.ma = u.c.extend();

            function ca(a, c) {
                a.Z(c);
                c.d("click", u.bind(a, function() {
                    D(this)
                }))
            }
            u.ma.prototype.e = function() {
                var a = this.options().Vc || "ul";
                this.sa = u.e(a, {
                    className: "vjs-menu-content"
                });
                a = u.c.prototype.e.call(this, "div", {
                    append: this.sa,
                    className: "vjs-menu"
                });
                a.appendChild(this.sa);
                u.d(a, "click", function(a) {
                    a.preventDefault();
                    a.stopImmediatePropagation()
                });
                return a
            };
            u.N = u.q.extend({
                i: function(a, c) {
                    u.q.call(this, a, c);
                    this.selected(c.selected)
                }
            });
            u.N.prototype.e = function(a, c) {
                return u.q.prototype.e.call(this, "li", u.k.B({
                    className: "vjs-menu-item",
                    innerHTML: this.g.label
                }, c))
            };
            u.N.prototype.p = function() {
                this.selected(f)
            };
            u.N.prototype.selected = function(a) {
                a ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.u("vjs-selected"), this.a.setAttribute("aria-selected", l))
            };
            u.R = u.q.extend({
                i: function(a, c) {
                    u.q.call(this, a, c);
                    this.wa = this.Ka();
                    this.Z(this.wa);
                    this.I && 0 === this.I.length && this.C();
                    this.d("keyup", this.ba);
                    this.a.setAttribute("aria-haspopup", f);
                    this.a.setAttribute("role", "button")
                }
            });
            t = u.R.prototype;
            t.pa = l;
            t.Ka = function() {
                var a = new u.ma(this.b);
                this.options().title && a.w().appendChild(u.e("li", {
                    className: "vjs-menu-title",
                    innerHTML: u.$(this.A),
                    zd: -1
                }));
                if (this.I = this.createItems())
                    for (var c = 0; c < this.I.length; c++) ca(a, this.I[c]);
                return a
            };
            t.ta = m();
            t.T = function() {
                return this.className + " vjs-menu-button " + u.q.prototype.T.call(this)
            };
            t.Oa = m();
            t.Na = m();
            t.p = function() {
                this.U("mouseout", u.bind(this, function() {
                    D(this.wa);
                    this.a.blur()
                }));
                this.pa ? G(this) : H(this)
            };
            t.ba = function(a) {
                a.preventDefault();
                32 == a.which || 13 == a.which ? this.pa ? G(this) : H(this) : 27 == a.which && this.pa && G(this)
            };

            function H(a) {
                a.pa = f;
                a.wa.n("vjs-lock-showing");
                a.a.setAttribute("aria-pressed", f);
                a.I && 0 < a.I.length && a.I[0].w().focus()
            }

            function G(a) {
                a.pa = l;
                D(a.wa);
                a.a.setAttribute("aria-pressed", l)
            }
            u.s = u.c.extend({
                i: function(a, c, d) {
                    this.M = a;
                    c = u.k.B(da(a), c);
                    this.v = {};
                    this.uc = c.poster;
                    this.sb = c.controls;
                    a.controls = l;
                    u.c.call(this, this, c, d);
                    this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
                    this.U("play", function(a) {
                        u.j(this.a, {
                            type: "firstplay",
                            target: this.a
                        }) || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation())
                    });
                    this.d("ended", this.hd);
                    this.d("play", this.Kb);
                    this.d("firstplay", this.jd);
                    this.d("pause", this.Jb);
                    this.d("progress", this.ld);
                    this.d("durationchange", this.sc);
                    this.d("error", this.Gb);
                    this.d("fullscreenchange", this.kd);
                    u.xa[this.Q] = this;
                    c.plugins && u.k.ua(c.plugins, function(a, c) {
                        this[a](c)
                    }, this);
                    var e, g, j, k;
                    e = this.Mb;
                    a = function() {
                        e();
                        clearInterval(g);
                        g = setInterval(u.bind(this, e), 250)
                    };
                    c = function() {
                        e();
                        clearInterval(g)
                    };
                    this.d("mousedown", a);
                    this.d("mousemove", e);
                    this.d("mouseup", c);
                    this.d("keydown", e);
                    this.d("keyup", e);
                    this.d("touchstart", a);
                    this.d("touchmove", e);
                    this.d("touchend", c);
                    this.d("touchcancel", c);
                    j = setInterval(u.bind(this, function() {
                        this.ka && (this.ka = l, this.ja(f), clearTimeout(k), k = setTimeout(u.bind(this, function() {
                            this.ka || this.ja(l)
                        }), 2e3))
                    }), 250);
                    this.d("dispose", function() {
                        clearInterval(j);
                        clearTimeout(k)
                    })
                }
            });
            t = u.s.prototype;
            t.g = u.options;
            t.D = function() {
                this.j("dispose");
                this.o("dispose");
                u.xa[this.Q] = h;
                this.M && this.M.player && (this.M.player = h);
                this.a && this.a.player && (this.a.player = h);
                clearInterval(this.Ra);
                this.za();
                this.h && this.h.D();
                u.c.prototype.D.call(this)
            };

            function da(a) {
                var c = {
                    sources: [],
                    tracks: []
                };
                u.k.B(c, u.xb(a));
                if (a.hasChildNodes()) {
                    var d, e, g, j;
                    a = a.childNodes;
                    g = 0;
                    for (j = a.length; g < j; g++) d = a[g], e = d.nodeName.toLowerCase(), "source" === e ? c.sources.push(u.xb(d)) : "track" === e && c.tracks.push(u.xb(d))
                }
                return c
            }
            t.e = function() {
                var a = this.a = u.c.prototype.e.call(this, "div"),
                    c = this.M;
                c.removeAttribute("width");
                c.removeAttribute("height");
                if (c.hasChildNodes()) {
                    var d, e, g, j, k;
                    d = c.childNodes;
                    e = d.length;
                    for (k = []; e--;) g = d[e], j = g.nodeName.toLowerCase(), "track" === j && k.push(g);
                    for (d = 0; d < k.length; d++) c.removeChild(k[d])
                }
                c.id = c.id || "vjs_video_" + u.t++;
                a.id = c.id;
                a.className = c.className;
                c.id += "_html5_api";
                c.className = "vjs-tech";
                c.player = a.player = this;
                this.n("vjs-paused");
                this.width(this.g.width, f);
                this.height(this.g.height, f);
                c.parentNode && c.parentNode.insertBefore(a, c);
                u.zb(c, a);
                return a
            };

            function I(a, c, d) {
                a.h ? (a.aa = l, a.h.D(), a.Eb && (a.Eb = l, clearInterval(a.Ra)), a.Fb && J(a), a.h = l) : "Html5" !== c && a.M && (u.l.jc(a.M), a.M = h);
                a.ia = c;
                a.aa = l;
                var e = u.k.B({
                    source: d,
                    parentEl: a.a
                }, a.g[c.toLowerCase()]);
                d && (d.src == a.v.src && 0 < a.v.currentTime && (e.startTime = a.v.currentTime), a.v.src = d.src);
                a.h = new window.videojs[c](a, e);
                a.h.L(function() {
                    this.b.Ua();
                    if (!this.m.progressEvents) {
                        var a = this.b;
                        a.Eb = f;
                        a.Ra = setInterval(u.bind(a, function() {
                            this.v.lb < this.buffered().end(0) ? this.j("progress") : 1 == this.Ja() && (clearInterval(this.Ra), this.j("progress"))
                        }), 500);
                        a.h.U("progress", function() {
                            this.m.progressEvents = f;
                            var a = this.b;
                            a.Eb = l;
                            clearInterval(a.Ra)
                        })
                    }
                    this.m.timeupdateEvents || (a = this.b, a.Fb = f, a.d("play", a.Cc), a.d("pause", a.za), a.h.U("timeupdate", function() {
                        this.m.timeupdateEvents = f;
                        J(this.b)
                    }))
                })
            }

            function J(a) {
                a.Fb = l;
                a.za();
                a.o("play", a.Cc);
                a.o("pause", a.za)
            }
            t.Cc = function() {
                this.hc && this.za();
                this.hc = setInterval(u.bind(this, function() {
                    this.j("timeupdate")
                }), 250)
            };
            t.za = function() {
                clearInterval(this.hc)
            };
            t.Kb = function() {
                u.u(this.a, "vjs-paused");
                u.n(this.a, "vjs-playing")
            };
            t.jd = function() {
                this.g.starttime && this.currentTime(this.g.starttime);
                this.n("vjs-has-started")
            };
            t.Jb = function() {
                u.u(this.a, "vjs-playing");
                u.n(this.a, "vjs-paused")
            };
            t.ld = function() {
                1 == this.Ja() && this.j("loadedalldata")
            };
            t.hd = function() {
                this.g.loop && (this.currentTime(0), this.play())
            };
            t.sc = function() {
                this.duration(K(this, "duration"))
            };
            t.kd = function() {
                this.H ? this.n("vjs-fullscreen") : this.u("vjs-fullscreen")
            };
            t.Gb = function(a) {
                u.log("Video Error", a)
            };

            function L(a, c, d) {
                if (a.h && !a.h.aa) a.h.L(function() {
                    this[c](d)
                });
                else try {
                    a.h[c](d)
                } catch (e) {
                    throw u.log(e), e
                }
            }

            function K(a, c) {
                if (a.h && a.h.aa) try {
                    return a.h[c]()
                } catch (d) {
                    throw a.h[c] === b ? u.log("Video.js: " + c + " method not defined for " + a.ia + " playback technology.", d) : "TypeError" == d.name ? (u.log("Video.js: " + c + " unavailable on " + a.ia + " playback technology element.", d), a.h.aa = l) : u.log(d), d
                }
            }
            t.play = function() {
                L(this, "play");
                return this
            };
            t.pause = function() {
                L(this, "pause");
                return this
            };
            t.paused = function() {
                return K(this, "paused") === l ? l : f
            };
            t.currentTime = function(a) {
                return a !== b ? (this.v.rc = a, L(this, "setCurrentTime", a), this.Fb && this.j("timeupdate"), this) : this.v.currentTime = K(this, "currentTime") || 0
            };
            t.duration = function(a) {
                if (a !== b) return this.v.duration = parseFloat(a), this;
                this.v.duration === b && this.sc();
                return this.v.duration
            };
            t.buffered = function() {
                var a = K(this, "buffered"),
                    c = a.length - 1,
                    d = this.v.lb = this.v.lb || 0;
                a && 0 <= c && a.end(c) !== d && (d = a.end(c), this.v.lb = d);
                return u.tb(0, d)
            };
            t.Ja = function() {
                return this.duration() ? this.buffered().end(0) / this.duration() : 0
            };
            t.volume = function(a) {
                if (a !== b) return a = Math.max(0, Math.min(1, parseFloat(a))), this.v.volume = a, L(this, "setVolume", a), u.td(a), this;
                a = parseFloat(K(this, "volume"));
                return isNaN(a) ? 1 : a
            };
            t.muted = function(a) {
                return a !== b ? (L(this, "setMuted", a), this) : K(this, "muted") || l
            };
            t.Ta = function() {
                return K(this, "supportsFullScreen") || l
            };
            t.ya = function() {
                var a = u.Pb.ya;
                this.H = f;
                a ? (u.d(document, a.vb, u.bind(this, function(c) {
                    this.H = document[a.H];
                    this.H === l && u.o(document, a.vb, arguments.callee);
                    this.j("fullscreenchange")
                })), this.a[a.wc]()) : this.h.Ta() ? L(this, "enterFullScreen") : (this.cd = f, this.Yc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.lc)), document.documentElement.style.overflow = "hidden", u.n(document.body, "vjs-full-window"), this.j("enterFullWindow"), this.j("fullscreenchange"));
                return this
            };
            t.ob = function() {
                var a = u.Pb.ya;
                this.H = l;
                if (a) document[a.nb]();
                else this.h.Ta() ? L(this, "exitFullScreen") : (M(this), this.j("fullscreenchange"));
                return this
            };
            t.lc = function(a) {
                27 === a.keyCode && (this.H === f ? this.ob() : M(this))
            };

            function M(a) {
                a.cd = l;
                u.o(document, "keydown", a.lc);
                document.documentElement.style.overflow = a.Yc;
                u.u(document.body, "vjs-full-window");
                a.j("exitFullWindow")
            }
            t.src = function(a) {
                if (a instanceof Array) {
                    var c;
                    a: {
                        c = a;
                        for (var d = 0, e = this.g.techOrder; d < e.length; d++) {
                            var g = u.$(e[d]),
                                j = window.videojs[g];
                            if (j.isSupported())
                                for (var k = 0, q = c; k < q.length; k++) {
                                    var n = q[k];
                                    if (j.canPlaySource(n)) {
                                        c = {
                                            source: n,
                                            h: g
                                        };
                                        break a
                                    }
                                }
                        }
                        c = l
                    }
                    c ? (a = c.source, c = c.h, c == this.ia ? this.src(a) : I(this, c, a)) : this.a.appendChild(u.e("p", {
                        innerHTML: this.options().notSupportedMessage
                    }))
                } else a instanceof Object ? window.videojs[this.ia].canPlaySource(a) ? this.src(a.src) : this.src([a]) : (this.v.src = a, this.aa ? (L(this, "src", a), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play()) : this.L(function() {
                    this.src(a)
                }));
                return this
            };
            t.load = function() {
                L(this, "load");
                return this
            };
            t.currentSrc = function() {
                return K(this, "currentSrc") || this.v.src || ""
            };
            t.Qa = function(a) {
                return a !== b ? (L(this, "setPreload", a), this.g.preload = a, this) : K(this, "preload")
            };
            t.autoplay = function(a) {
                return a !== b ? (L(this, "setAutoplay", a), this.g.autoplay = a, this) : K(this, "autoplay")
            };
            t.loop = function(a) {
                return a !== b ? (L(this, "setLoop", a), this.g.loop = a, this) : K(this, "loop")
            };
            t.poster = function(a) {
                return a !== b ? (this.uc = a, this) : this.uc
            };
            t.controls = function(a) {
                return a !== b ? (a = !!a, this.sb !== a && ((this.sb = a) ? (this.u("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.j("controlsenabled")) : (this.u("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.sb
            };
            u.s.prototype.Sb;
            t = u.s.prototype;
            t.Rb = function(a) {
                return a !== b ? (a = !!a, this.Sb !== a && ((this.Sb = a) ? (this.n("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.u("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Sb
            };
            t.error = function() {
                return K(this, "error")
            };
            t.seeking = function() {
                return K(this, "seeking")
            };
            t.ka = f;
            t.Mb = function() {
                this.ka = f
            };
            t.Qb = f;
            t.ja = function(a) {
                return a !== b ? (a = !!a, a !== this.Qb && ((this.Qb = a) ? (this.ka = f, this.u("vjs-user-inactive"), this.n("vjs-user-active"), this.j("useractive")) : (this.ka = l, this.h.U("mousemove", function(a) {
                    a.stopPropagation();
                    a.preventDefault()
                }), this.u("vjs-user-active"), this.n("vjs-user-inactive"), this.j("userinactive"))), this) : this.Qb
            };
            var N, O, P;
            P = document.createElement("div");
            O = {};
            P.Hd !== b ? (O.wc = "requestFullscreen", O.nb = "exitFullscreen", O.vb = "fullscreenchange", O.H = "fullScreen") : (document.mozCancelFullScreen ? (N = "moz", O.H = N + "FullScreen") : (N = "webkit", O.H = N + "IsFullScreen"), P[N + "RequestFullScreen"] && (O.wc = N + "RequestFullScreen", O.nb = N + "CancelFullScreen"), O.vb = N + "fullscreenchange");
            document[O.nb] && (u.Pb.ya = O);
            u.Fa = u.c.extend();
            u.Fa.prototype.g = {
                Md: "play",
                children: {
                    playToggle: {},
                    currentTimeDisplay: {},
                    timeDivider: {},
                    durationDisplay: {},
                    remainingTimeDisplay: {},
                    progressControl: {},
                    fullscreenToggle: {},
                    volumeControl: {},
                    muteToggle: {}
                }
            };
            u.Fa.prototype.e = function() {
                return u.e("div", {
                    className: "vjs-control-bar"
                })
            };
            u.Yb = u.q.extend({
                i: function(a, c) {
                    u.q.call(this, a, c);
                    a.d("play", u.bind(this, this.Kb));
                    a.d("pause", u.bind(this, this.Jb))
                }
            });
            t = u.Yb.prototype;
            t.qa = "Play";
            t.T = function() {
                return "vjs-play-control " + u.q.prototype.T.call(this)
            };
            t.p = function() {
                this.b.paused() ? this.b.play() : this.b.pause()
            };
            t.Kb = function() {
                u.u(this.a, "vjs-paused");
                u.n(this.a, "vjs-playing");
                this.a.children[0].children[0].innerHTML = "Pause"
            };
            t.Jb = function() {
                u.u(this.a, "vjs-playing");
                u.n(this.a, "vjs-paused");
                this.a.children[0].children[0].innerHTML = "Play"
            };
            u.Ya = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    a.d("timeupdate", u.bind(this, this.Ca))
                }
            });
            u.Ya.prototype.e = function() {
                var a = u.c.prototype.e.call(this, "div", {
                    className: "vjs-current-time vjs-time-controls vjs-control"
                });
                this.content = u.e("div", {
                    className: "vjs-current-time-display",
                    innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
                    "aria-live": "off"
                });
                a.appendChild(u.e("div").appendChild(this.content));
                return a
            };
            u.Ya.prototype.Ca = function() {
                var a = this.b.Nb ? this.b.v.currentTime : this.b.currentTime();
                this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.La(a, this.b.duration())
            };
            u.Za = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    a.d("timeupdate", u.bind(this, this.Ca))
                }
            });
            u.Za.prototype.e = function() {
                var a = u.c.prototype.e.call(this, "div", {
                    className: "vjs-duration vjs-time-controls vjs-control"
                });
                this.content = u.e("div", {
                    className: "vjs-duration-display",
                    innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
                    "aria-live": "off"
                });
                a.appendChild(u.e("div").appendChild(this.content));
                return a
            };
            u.Za.prototype.Ca = function() {
                var a = this.b.duration();
                a && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.La(a))
            };
            u.cc = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c)
                }
            });
            u.cc.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-time-divider",
                    innerHTML: "<div><span>/</span></div>"
                })
            };
            u.fb = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    a.d("timeupdate", u.bind(this, this.Ca))
                }
            });
            u.fb.prototype.e = function() {
                var a = u.c.prototype.e.call(this, "div", {
                    className: "vjs-remaining-time vjs-time-controls vjs-control"
                });
                this.content = u.e("div", {
                    className: "vjs-remaining-time-display",
                    innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
                    "aria-live": "off"
                });
                a.appendChild(u.e("div").appendChild(this.content));
                return a
            };
            u.fb.prototype.Ca = function() {
                this.b.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.La(this.b.duration() - this.b.currentTime()))
            };
            u.Ga = u.q.extend({
                i: function(a, c) {
                    u.q.call(this, a, c)
                }
            });
            u.Ga.prototype.qa = "Fullscreen";
            u.Ga.prototype.T = function() {
                return "vjs-fullscreen-control " + u.q.prototype.T.call(this)
            };
            u.Ga.prototype.p = function() {
                this.b.H ? (this.b.ob(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.b.ya(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
            };
            u.eb = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c)
                }
            });
            u.eb.prototype.g = {
                children: {
                    seekBar: {}
                }
            };
            u.eb.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-progress-control vjs-control"
                })
            };
            u.Zb = u.O.extend({
                i: function(a, c) {
                    u.O.call(this, a, c);
                    a.d("timeupdate", u.bind(this, this.Ba));
                    a.L(u.bind(this, this.Ba))
                }
            });
            t = u.Zb.prototype;
            t.g = {
                children: {
                    loadProgressBar: {},
                    playProgressBar: {},
                    seekHandle: {}
                },
                barName: "playProgressBar",
                handleName: "seekHandle"
            };
            t.tc = "timeupdate";
            t.e = function() {
                return u.O.prototype.e.call(this, "div", {
                    className: "vjs-progress-holder",
                    "aria-label": "video progress bar"
                })
            };
            t.Ba = function() {
                var a = this.b.Nb ? this.b.v.currentTime : this.b.currentTime();
                this.a.setAttribute("aria-valuenow", u.round(100 * this.yb(), 2));
                this.a.setAttribute("aria-valuetext", u.La(a, this.b.duration()))
            };
            t.yb = function() {
                var a;
                "Flash" === this.b.ia && this.b.seeking() ? (a = this.b.v, a = a.rc ? a.rc : this.b.currentTime()) : a = this.b.currentTime();
                return a / this.b.duration()
            };
            t.Pa = function(a) {
                u.O.prototype.Pa.call(this, a);
                this.b.Nb = f;
                this.Dd = !this.b.paused();
                this.b.pause()
            };
            t.Hb = function(a) {
                a = F(this, a) * this.b.duration();
                a == this.b.duration() && (a -= .1);
                this.b.currentTime(a)
            };
            t.Ib = function(a) {
                u.O.prototype.Ib.call(this, a);
                this.b.Nb = l;
                this.Dd && this.b.play()
            };
            t.zc = function() {
                this.b.currentTime(this.b.currentTime() + 5)
            };
            t.yc = function() {
                this.b.currentTime(this.b.currentTime() - 5)
            };
            u.ab = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    a.d("progress", u.bind(this, this.update))
                }
            });
            u.ab.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-load-progress",
                    innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
                })
            };
            u.ab.prototype.update = function() {
                this.a.style && (this.a.style.width = u.round(100 * this.b.Ja(), 2) + "%")
            };
            u.Xb = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c)
                }
            });
            u.Xb.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-play-progress",
                    innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
                })
            };
            u.gb = u.ea.extend();
            u.gb.prototype.defaultValue = "00:00";
            u.gb.prototype.e = function() {
                return u.ea.prototype.e.call(this, "div", {
                    className: "vjs-seek-handle"
                })
            };
            u.ib = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    a.h && a.h.m && a.h.m.volumeControl === l && this.n("vjs-hidden");
                    a.d("loadstart", u.bind(this, function() {
                        a.h.m && a.h.m.volumeControl === l ? this.n("vjs-hidden") : this.u("vjs-hidden")
                    }))
                }
            });
            u.ib.prototype.g = {
                children: {
                    volumeBar: {}
                }
            };
            u.ib.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-volume-control vjs-control"
                })
            };
            u.hb = u.O.extend({
                i: function(a, c) {
                    u.O.call(this, a, c);
                    a.d("volumechange", u.bind(this, this.Ba));
                    a.L(u.bind(this, this.Ba));
                    setTimeout(u.bind(this, this.update), 0)
                }
            });
            t = u.hb.prototype;
            t.Ba = function() {
                this.a.setAttribute("aria-valuenow", u.round(100 * this.b.volume(), 2));
                this.a.setAttribute("aria-valuetext", u.round(100 * this.b.volume(), 2) + "%")
            };
            t.g = {
                children: {
                    volumeLevel: {},
                    volumeHandle: {}
                },
                barName: "volumeLevel",
                handleName: "volumeHandle"
            };
            t.tc = "volumechange";
            t.e = function() {
                return u.O.prototype.e.call(this, "div", {
                    className: "vjs-volume-bar",
                    "aria-label": "volume level"
                })
            };
            t.Hb = function(a) {
                this.b.muted() && this.b.muted(l);
                this.b.volume(F(this, a))
            };
            t.yb = function() {
                return this.b.muted() ? 0 : this.b.volume()
            };
            t.zc = function() {
                this.b.volume(this.b.volume() + .1)
            };
            t.yc = function() {
                this.b.volume(this.b.volume() - .1)
            };
            u.dc = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c)
                }
            });
            u.dc.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-volume-level",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            };
            u.jb = u.ea.extend();
            u.jb.prototype.defaultValue = "00:00";
            u.jb.prototype.e = function() {
                return u.ea.prototype.e.call(this, "div", {
                    className: "vjs-volume-handle"
                })
            };
            u.da = u.q.extend({
                i: function(a, c) {
                    u.q.call(this, a, c);
                    a.d("volumechange", u.bind(this, this.update));
                    a.h && a.h.m && a.h.m.volumeControl === l && this.n("vjs-hidden");
                    a.d("loadstart", u.bind(this, function() {
                        a.h.m && a.h.m.volumeControl === l ? this.n("vjs-hidden") : this.u("vjs-hidden")
                    }))
                }
            });
            u.da.prototype.e = function() {
                return u.q.prototype.e.call(this, "div", {
                    className: "vjs-mute-control vjs-control",
                    innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
                })
            };
            u.da.prototype.p = function() {
                this.b.muted(this.b.muted() ? l : f)
            };
            u.da.prototype.update = function() {
                var a = this.b.volume(),
                    c = 3;
                0 === a || this.b.muted() ? c = 0 : .33 > a ? c = 1 : .67 > a && (c = 2);
                this.b.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute");
                for (a = 0; 4 > a; a++) u.u(this.a, "vjs-vol-" + a);
                u.n(this.a, "vjs-vol-" + c)
            };
            u.oa = u.R.extend({
                i: function(a, c) {
                    u.R.call(this, a, c);
                    a.d("volumechange", u.bind(this, this.update));
                    a.h && a.h.m && a.h.m.Dc === l && this.n("vjs-hidden");
                    a.d("loadstart", u.bind(this, function() {
                        a.h.m && a.h.m.Dc === l ? this.n("vjs-hidden") : this.u("vjs-hidden")
                    }));
                    this.n("vjs-menu-button")
                }
            });
            u.oa.prototype.Ka = function() {
                var a = new u.ma(this.b, {
                        Vc: "div"
                    }),
                    c = new u.hb(this.b, u.k.B({
                        Cd: f
                    }, this.g.Vd));
                a.Z(c);
                return a
            };
            u.oa.prototype.p = function() {
                u.da.prototype.p.call(this);
                u.R.prototype.p.call(this)
            };
            u.oa.prototype.e = function() {
                return u.q.prototype.e.call(this, "div", {
                    className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                    innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
                })
            };
            u.oa.prototype.update = u.da.prototype.update;
            u.cb = u.q.extend({
                i: function(a, c) {
                    u.q.call(this, a, c);
                    (!a.poster() || !a.controls()) && this.C();
                    a.d("play", u.bind(this, this.C))
                }
            });
            u.cb.prototype.e = function() {
                var a = u.e("div", {
                        className: "vjs-poster",
                        tabIndex: -1
                    }),
                    c = this.b.poster();
                c && ("backgroundSize" in a.style ? a.style.backgroundImage = 'url("' + c + '")' : a.appendChild(u.e("img", {
                    src: c
                })));
                return a
            };
            u.cb.prototype.p = function() {
                this.K().controls() && this.b.play()
            };
            u.Wb = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    a.d("canplay", u.bind(this, this.C));
                    a.d("canplaythrough", u.bind(this, this.C));
                    a.d("playing", u.bind(this, this.C));
                    a.d("seeked", u.bind(this, this.C));
                    a.d("seeking", u.bind(this, this.show));
                    a.d("seeked", u.bind(this, this.C));
                    a.d("error", u.bind(this, this.show));
                    a.d("waiting", u.bind(this, this.show))
                }
            });
            u.Wb.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-loading-spinner"
                })
            };
            u.Wa = u.q.extend();
            u.Wa.prototype.e = function() {
                return u.q.prototype.e.call(this, "div", {
                    className: "vjs-big-play-button",
                    innerHTML: '<span aria-hidden="true"></span>',
                    "aria-label": "play video"
                })
            };
            u.Wa.prototype.p = function() {
                this.b.play()
            };
            u.r = u.c.extend({
                i: function(a, c, d) {
                    u.c.call(this, a, c, d);
                    var e, g;
                    g = this;
                    e = this.K();
                    a = function() {
                        if (e.controls() && !e.Rb()) {
                            var a, c;
                            g.d("mousedown", g.p);
                            g.d("touchstart", function(a) {
                                a.preventDefault();
                                a.stopPropagation();
                                c = this.b.ja()
                            });
                            a = function(a) {
                                a.stopPropagation();
                                c && this.b.Mb()
                            };
                            g.d("touchmove", a);
                            g.d("touchleave", a);
                            g.d("touchcancel", a);
                            g.d("touchend", a);
                            var d, n, r;
                            d = 0;
                            g.d("touchstart", function() {
                                d = (new Date).getTime();
                                r = f
                            });
                            a = function() {
                                r = l
                            };
                            g.d("touchmove", a);
                            g.d("touchleave", a);
                            g.d("touchcancel", a);
                            g.d("touchend", function() {
                                r === f && (n = (new Date).getTime() - d, 250 > n && this.j("tap"))
                            });
                            g.d("tap", g.md)
                        }
                    };
                    c = u.bind(g, g.pd);
                    this.L(a);
                    e.d("controlsenabled", a);
                    e.d("controlsdisabled", c)
                }
            });
            u.r.prototype.pd = function() {
                this.o("tap");
                this.o("touchstart");
                this.o("touchmove");
                this.o("touchleave");
                this.o("touchcancel");
                this.o("touchend");
                this.o("click");
                this.o("mousedown")
            };
            u.r.prototype.p = function(a) {
                0 === a.button && this.K().controls() && (this.K().paused() ? this.K().play() : this.K().pause())
            };
            u.r.prototype.md = function() {
                this.K().ja(!this.K().ja())
            };
            u.r.prototype.m = {
                volumeControl: f,
                fullscreenResize: l,
                progressEvents: l,
                timeupdateEvents: l
            };
            u.media = {};
            u.media.Va = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");

            function ea() {
                var a = u.media.Va[i];
                return function() {
                    throw Error('The "' + a + "\" method is not available on the playback technology's API")
                }
            }
            for (var i = u.media.Va.length - 1; 0 <= i; i--) u.r.prototype[u.media.Va[i]] = ea();
            u.l = u.r.extend({
                i: function(a, c, d) {
                    this.m.volumeControl = u.l.Uc();
                    this.m.movingMediaElementInDOM = !u.Kc;
                    this.m.fullscreenResize = f;
                    u.r.call(this, a, c, d);
                    (c = c.source) && this.a.currentSrc === c.src && 0 < this.a.networkState ? a.j("loadstart") : c && (this.a.src = c.src);
                    if (u.ac && a.options().nativeControlsForTouch !== l) {
                        var e, g, j, k;
                        e = this;
                        g = this.K();
                        c = g.controls();
                        e.a.controls = !!c;
                        j = function() {
                            e.a.controls = f
                        };
                        k = function() {
                            e.a.controls = l
                        };
                        g.d("controlsenabled", j);
                        g.d("controlsdisabled", k);
                        c = function() {
                            g.o("controlsenabled", j);
                            g.o("controlsdisabled", k)
                        };
                        e.d("dispose", c);
                        g.d("usingcustomcontrols", c);
                        g.Rb(f)
                    }
                    a.L(function() {
                        this.M && this.g.autoplay && this.paused() && (delete this.M.poster, this.play())
                    });
                    for (a = u.l.$a.length - 1; 0 <= a; a--) u.d(this.a, u.l.$a[a], u.bind(this.b, this.$c));
                    this.Ua()
                }
            });
            t = u.l.prototype;
            t.D = function() {
                u.r.prototype.D.call(this)
            };
            t.e = function() {
                var a = this.b,
                    c = a.M,
                    d;
                if (!c || this.m.movingMediaElementInDOM === l) c ? (d = c.cloneNode(l), u.l.jc(c), c = d, a.M = h) : c = u.e("video", {
                    id: a.id() + "_html5_api",
                    className: "vjs-tech"
                }), c.player = a, u.zb(c, a.w());
                d = ["autoplay", "preload", "loop", "muted"];
                for (var e = d.length - 1; 0 <= e; e--) {
                    var g = d[e];
                    a.g[g] !== h && (c[g] = a.g[g])
                }
                return c
            };
            t.$c = function(a) {
                this.j(a);
                a.stopPropagation()
            };
            t.play = function() {
                this.a.play()
            };
            t.pause = function() {
                this.a.pause()
            };
            t.paused = function() {
                return this.a.paused
            };
            t.currentTime = function() {
                return this.a.currentTime
            };
            t.sd = function(a) {
                try {
                    this.a.currentTime = a
                } catch (c) {
                    u.log(c, "Video is not ready. (Video.js)")
                }
            };
            t.duration = function() {
                return this.a.duration || 0
            };
            t.buffered = function() {
                return this.a.buffered
            };
            t.volume = function() {
                return this.a.volume
            };
            t.xd = function(a) {
                this.a.volume = a
            };
            t.muted = function() {
                return this.a.muted
            };
            t.vd = function(a) {
                this.a.muted = a
            };
            t.width = function() {
                return this.a.offsetWidth
            };
            t.height = function() {
                return this.a.offsetHeight
            };
            t.Ta = function() {
                return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(u.F) || !/Chrome|Mac OS X 10.5/.test(u.F)) ? f : l
            };
            t.src = function(a) {
                this.a.src = a
            };
            t.load = function() {
                this.a.load()
            };
            t.currentSrc = function() {
                return this.a.currentSrc
            };
            t.Qa = function() {
                return this.a.Qa
            };
            t.wd = function(a) {
                this.a.Qa = a
            };
            t.autoplay = function() {
                return this.a.autoplay
            };
            t.rd = function(a) {
                this.a.autoplay = a
            };
            t.controls = function() {
                return this.a.controls
            };
            t.loop = function() {
                return this.a.loop
            };
            t.ud = function(a) {
                this.a.loop = a
            };
            t.error = function() {
                return this.a.error
            };
            t.seeking = function() {
                return this.a.seeking
            };
            u.l.isSupported = function() {
                return !!u.na.canPlayType
            };
            u.l.mb = function(a) {
                try {
                    return !!u.na.canPlayType(a.type)
                } catch (c) {
                    return ""
                }
            };
            u.l.Uc = function() {
                var a = u.na.volume;
                u.na.volume = a / 2 + .1;
                return a !== u.na.volume
            };
            u.l.$a = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
            u.l.jc = function(a) {
                if (a) {
                    a.player = h;
                    for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
                    a.removeAttribute("src");
                    "function" === typeof a.load && a.load()
                }
            };
            u.Oc && (document.createElement("video").constructor.prototype.canPlayType = function(a) {
                return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
            });
            u.f = u.r.extend({
                i: function(a, c, d) {
                    u.r.call(this, a, c, d);
                    var e = c.source;
                    d = c.parentEl;
                    var g = this.a = u.e("div", {
                            id: a.id() + "_temp_flash"
                        }),
                        j = a.id() + "_flash_api";
                    a = a.g;
                    var k = u.k.B({
                            readyFunction: "videojs.Flash.onReady",
                            eventProxyFunction: "videojs.Flash.onEvent",
                            errorEventProxyFunction: "videojs.Flash.onError",
                            autoplay: a.autoplay,
                            preload: a.Qa,
                            loop: a.loop,
                            muted: a.muted
                        }, c.flashVars),
                        q = u.k.B({
                            wmode: "opaque",
                            bgcolor: "#000000"
                        }, c.params),
                        n = u.k.B({
                            id: j,
                            name: j,
                            "class": "vjs-tech"
                        }, c.attributes);
                    e && (e.type && u.f.ed(e.type) ? (a = u.f.Ac(e.src), k.rtmpConnection = encodeURIComponent(a.rb), k.rtmpStream = encodeURIComponent(a.Ob)) : k.src = encodeURIComponent(u.mc(e.src)));
                    u.zb(g, d);
                    c.startTime && this.L(function() {
                        this.load();
                        this.play();
                        this.currentTime(c.startTime)
                    });
                    if (c.iFrameMode === f && !u.Jc) {
                        var r = u.e("iframe", {
                            id: j + "_iframe",
                            name: j + "_iframe",
                            className: "vjs-tech",
                            scrolling: "no",
                            marginWidth: 0,
                            marginHeight: 0,
                            frameBorder: 0
                        });
                        k.readyFunction = "ready";
                        k.eventProxyFunction = "events";
                        k.errorEventProxyFunction = "errors";
                        u.d(r, "load", u.bind(this, function() {
                            var a, d = r.contentWindow;
                            a = r.contentDocument ? r.contentDocument : r.contentWindow.document;
                            a.write(u.f.nc(c.swf, k, q, n));
                            d.player = this.b;
                            d.ready = u.bind(this.b, function(c) {
                                var d = this.h;
                                d.a = a.getElementById(c);
                                u.f.pb(d)
                            });
                            d.events = u.bind(this.b, function(a, c) {
                                this && "flash" === this.ia && this.j(c)
                            });
                            d.errors = u.bind(this.b, function(a, c) {
                                u.log("Flash Error", c)
                            })
                        }));
                        g.parentNode.replaceChild(r, g)
                    } else u.f.Zc(c.swf, g, k, q, n)
                }
            });
            t = u.f.prototype;
            t.D = function() {
                u.r.prototype.D.call(this)
            };
            t.play = function() {
                this.a.vjs_play()
            };
            t.pause = function() {
                this.a.vjs_pause()
            };
            t.src = function(a) {
                u.f.dd(a) ? (a = u.f.Ac(a), this.Qd(a.rb), this.Rd(a.Ob)) : (a = u.mc(a), this.a.vjs_src(a));
                if (this.b.autoplay()) {
                    var c = this;
                    setTimeout(function() {
                        c.play()
                    }, 0)
                }
            };
            t.currentSrc = function() {
                var a = this.a.vjs_getProperty("currentSrc");
                if (a == h) {
                    var c = this.Od(),
                        d = this.Pd();
                    c && d && (a = u.f.yd(c, d))
                }
                return a
            };
            t.load = function() {
                this.a.vjs_load()
            };
            t.poster = function() {
                this.a.vjs_getProperty("poster")
            };
            t.buffered = function() {
                return u.tb(0, this.a.vjs_getProperty("buffered"))
            };
            t.Ta = s(l);
            var Q = u.f.prototype,
                R = "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
                S = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");

            function fa() {
                var a = R[T],
                    c = a.charAt(0).toUpperCase() + a.slice(1);
                Q["set" + c] = function(c) {
                    return this.a.vjs_setProperty(a, c)
                }
            }

            function U(a) {
                Q[a] = function() {
                    return this.a.vjs_getProperty(a)
                }
            }
            var T;
            for (T = 0; T < R.length; T++) U(R[T]), fa();
            for (T = 0; T < S.length; T++) U(S[T]);
            u.f.isSupported = function() {
                return 10 <= u.f.version()[0]
            };
            u.f.mb = function(a) {
                if (!a.type) return "";
                a = a.type.replace(/;.*/, "").toLowerCase();
                if (a in u.f.bd || a in u.f.Bc) return "maybe"
            };
            u.f.bd = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            };
            u.f.Bc = {
                "rtmp/mp4": "MP4",
                "rtmp/flv": "FLV"
            };
            u.f.onReady = function(a) {
                a = u.w(a);
                var c = a.player || a.parentNode.player,
                    d = c.h;
                a.player = c;
                d.a = a;
                u.f.pb(d)
            };
            u.f.pb = function(a) {
                a.w().vjs_getProperty ? a.Ua() : setTimeout(function() {
                    u.f.pb(a)
                }, 50)
            };
            u.f.onEvent = function(a, c) {
                u.w(a).player.j(c)
            };
            u.f.onError = function(a, c) {
                u.w(a).player.j("error");
                u.log("Flash Error", c, a)
            };
            u.f.version = function() {
                var a = "0,0,0";
                try {
                    a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (c) {
                    try {
                        navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (d) {}
                }
                return a.split(",")
            };
            u.f.Zc = function(a, c, d, e, g) {
                a = u.f.nc(a, d, e, g);
                a = u.e("div", {
                    innerHTML: a
                }).childNodes[0];
                d = c.parentNode;
                c.parentNode.replaceChild(a, c);
                var j = d.childNodes[0];
                setTimeout(function() {
                    j.style.display = "block"
                }, 1e3)
            };
            u.f.nc = function(a, c, d, e) {
                var g = "",
                    j = "",
                    k = "";
                c && u.k.ua(c, function(a, c) {
                    g += a + "=" + c + "&amp;"
                });
                d = u.k.B({
                    movie: a,
                    flashvars: g,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, d);
                u.k.ua(d, function(a, c) {
                    j += '<param name="' + a + '" value="' + c + '" />'
                });
                e = u.k.B({
                    data: a,
                    width: "100%",
                    height: "100%"
                }, e);
                u.k.ua(e, function(a, c) {
                    k += a + '="' + c + '" '
                });
                return '<object type="application/x-shockwave-flash"' + k + ">" + j + "</object>"
            };
            u.f.yd = function(a, c) {
                return a + "&" + c
            };
            u.f.Ac = function(a) {
                var c = {
                    rb: "",
                    Ob: ""
                };
                if (!a) return c;
                var d = a.indexOf("&"),
                    e; - 1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d && (d = e = a.length));
                c.rb = a.substring(0, d);
                c.Ob = a.substring(e, a.length);
                return c
            };
            u.f.ed = function(a) {
                return a in u.f.Bc
            };
            u.f.Qc = /^rtmp[set]?:\/\//i;
            u.f.dd = function(a) {
                return u.f.Qc.test(a)
            };
            u.Pc = u.c.extend({
                i: function(a, c, d) {
                    u.c.call(this, a, c, d);
                    if (!a.g.sources || 0 === a.g.sources.length) {
                        c = 0;
                        for (d = a.g.techOrder; c < d.length; c++) {
                            var e = u.$(d[c]),
                                g = window.videojs[e];
                            if (g && g.isSupported()) {
                                I(a, e);
                                break
                            }
                        }
                    } else a.src(a.g.sources)
                }
            });

            function V(a) {
                a.Aa = a.Aa || [];
                return a.Aa
            }

            function W(a, c, d) {
                for (var e = a.Aa, g = 0, j = e.length, k, q; g < j; g++) k = e[g], k.id() === c ? (k.show(), q = k) : d && k.J() == d && 0 < k.mode() && k.disable();
                (c = q ? q.J() : d ? d : l) && a.j(c + "trackchange")
            }
            u.X = u.c.extend({
                i: function(a, c) {
                    u.c.call(this, a, c);
                    this.Q = c.id || "vjs_" + c.kind + "_" + c.language + "_" + u.t++;
                    this.xc = c.src;
                    this.Wc = c["default"] || c.dflt;
                    this.Ad = c.title;
                    this.Ld = c.srclang;
                    this.fd = c.label;
                    this.fa = [];
                    this.ec = [];
                    this.ga = this.ha = 0;
                    this.b.d("fullscreenchange", u.bind(this, this.Rc))
                }
            });
            t = u.X.prototype;
            t.J = p("A");
            t.src = p("xc");
            t.ub = p("Wc");
            t.title = p("Ad");
            t.label = p("fd");
            t.readyState = p("ha");
            t.mode = p("ga");
            t.Rc = function() {
                this.a.style.fontSize = this.b.H ? 140 * (screen.width / this.b.width()) + "%" : ""
            };
            t.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-" + this.A + " vjs-text-track"
                })
            };
            t.show = function() {
                X(this);
                this.ga = 2;
                u.c.prototype.show.call(this)
            };
            t.C = function() {
                X(this);
                this.ga = 1;
                u.c.prototype.C.call(this)
            };
            t.disable = function() {
                2 == this.ga && this.C();
                this.b.o("timeupdate", u.bind(this, this.update, this.Q));
                this.b.o("ended", u.bind(this, this.reset, this.Q));
                this.reset();
                this.b.V.textTrackDisplay.removeChild(this);
                this.ga = 0
            };

            function X(a) {
                0 === a.ha && a.load();
                0 === a.ga && (a.b.d("timeupdate", u.bind(a, a.update, a.Q)), a.b.d("ended", u.bind(a, a.reset, a.Q)), ("captions" === a.A || "subtitles" === a.A) && a.b.V.textTrackDisplay.Z(a))
            }
            t.load = function() {
                0 === this.ha && (this.ha = 1, u.get(this.xc, u.bind(this, this.nd), u.bind(this, this.Gb)))
            };
            t.Gb = function(a) {
                this.error = a;
                this.ha = 3;
                this.j("error")
            };
            t.nd = function(a) {
                var c, d;
                a = a.split("\n");
                for (var e = "", g = 1, j = a.length; g < j; g++)
                    if (e = u.trim(a[g])) {
                        -1 == e.indexOf("-->") ? (c = e, e = u.trim(a[++g])) : c = this.fa.length;
                        c = {
                            id: c,
                            index: this.fa.length
                        };
                        d = e.split(" --> ");
                        c.startTime = Y(d[0]);
                        c.va = Y(d[1]);
                        for (d = []; a[++g] && (e = u.trim(a[g]));) d.push(e);
                        c.text = d.join("<br/>");
                        this.fa.push(c)
                    }
                this.ha = 2;
                this.j("loaded")
            };

            function Y(a) {
                var c = a.split(":");
                a = 0;
                var d, e, g;
                3 == c.length ? (d = c[0], e = c[1], c = c[2]) : (d = 0, e = c[0], c = c[1]);
                c = c.split(/\s+/);
                c = c.splice(0, 1)[0];
                c = c.split(/\.|,/);
                g = parseFloat(c[1]);
                c = c[0];
                a += 3600 * parseFloat(d);
                a += 60 * parseFloat(e);
                a += parseFloat(c);
                g && (a += g / 1e3);
                return a
            }
            t.update = function() {
                if (0 < this.fa.length) {
                    var a = this.b.currentTime();
                    if (this.Lb === b || a < this.Lb || this.Ma <= a) {
                        var c = this.fa,
                            d = this.b.duration(),
                            e = 0,
                            g = l,
                            j = [],
                            k, q, n, r;
                        a >= this.Ma || this.Ma === b ? r = this.wb !== b ? this.wb : 0 : (g = f, r = this.Db !== b ? this.Db : c.length - 1);
                        for (;;) {
                            n = c[r];
                            if (n.va <= a) e = Math.max(e, n.va), n.Ia && (n.Ia = l);
                            else if (a < n.startTime) {
                                if (d = Math.min(d, n.startTime), n.Ia && (n.Ia = l), !g) break
                            } else g ? (j.splice(0, 0, n), q === b && (q = r), k = r) : (j.push(n), k === b && (k = r), q = r), d = Math.min(d, n.va), e = Math.max(e, n.startTime), n.Ia = f;
                            if (g)
                                if (0 === r) break;
                                else r--;
                            else if (r === c.length - 1) break;
                            else r++
                        }
                        this.ec = j;
                        this.Ma = d;
                        this.Lb = e;
                        this.wb = k;
                        this.Db = q;
                        a = this.ec;
                        c = "";
                        d = 0;
                        for (e = a.length; d < e; d++) c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
                        this.a.innerHTML = c;
                        this.j("cuechange")
                    }
                }
            };
            t.reset = function() {
                this.Ma = 0;
                this.Lb = this.b.duration();
                this.Db = this.wb = 0
            };
            u.Ub = u.X.extend();
            u.Ub.prototype.A = "captions";
            u.$b = u.X.extend();
            u.$b.prototype.A = "subtitles";
            u.Vb = u.X.extend();
            u.Vb.prototype.A = "chapters";
            u.bc = u.c.extend({
                i: function(a, c, d) {
                    u.c.call(this, a, c, d);
                    if (a.g.tracks && 0 < a.g.tracks.length) {
                        c = this.b;
                        a = a.g.tracks;
                        var e;
                        for (d = 0; d < a.length; d++) {
                            e = a[d];
                            var g = c,
                                j = e.kind,
                                k = e.label,
                                q = e.language,
                                n = e;
                            e = g.Aa = g.Aa || [];
                            n = n || {};
                            n.kind = j;
                            n.label = k;
                            n.language = q;
                            j = u.$(j || "subtitles");
                            g = new window.videojs[j + "Track"](g, n);
                            e.push(g)
                        }
                    }
                }
            });
            u.bc.prototype.e = function() {
                return u.c.prototype.e.call(this, "div", {
                    className: "vjs-text-track-display"
                })
            };
            u.Y = u.N.extend({
                i: function(a, c) {
                    var d = this.ca = c.track;
                    c.label = d.label();
                    c.selected = d.ub();
                    u.N.call(this, a, c);
                    this.b.d(d.J() + "trackchange", u.bind(this, this.update))
                }
            });
            u.Y.prototype.p = function() {
                u.N.prototype.p.call(this);
                W(this.b, this.ca.Q, this.ca.J())
            };
            u.Y.prototype.update = function() {
                this.selected(2 == this.ca.mode())
            };
            u.bb = u.Y.extend({
                i: function(a, c) {
                    c.track = {
                        J: function() {
                            return c.kind
                        },
                        K: a,
                        label: function() {
                            return c.kind + " off"
                        },
                        ub: s(l),
                        mode: s(l)
                    };
                    u.Y.call(this, a, c);
                    this.selected(f)
                }
            });
            u.bb.prototype.p = function() {
                u.Y.prototype.p.call(this);
                W(this.b, this.ca.Q, this.ca.J())
            };
            u.bb.prototype.update = function() {
                for (var a = V(this.b), c = 0, d = a.length, e, g = f; c < d; c++) e = a[c], e.J() == this.ca.J() && 2 == e.mode() && (g = l);
                this.selected(g)
            };
            u.S = u.R.extend({
                i: function(a, c) {
                    u.R.call(this, a, c);
                    1 >= this.I.length && this.C()
                }
            });
            u.S.prototype.ta = function() {
                var a = [],
                    c;
                a.push(new u.bb(this.b, {
                    kind: this.A
                }));
                for (var d = 0; d < V(this.b).length; d++) c = V(this.b)[d], c.J() === this.A && a.push(new u.Y(this.b, {
                    track: c
                }));
                return a
            };
            u.Da = u.S.extend({
                i: function(a, c, d) {
                    u.S.call(this, a, c, d);
                    this.a.setAttribute("aria-label", "Captions Menu")
                }
            });
            u.Da.prototype.A = "captions";
            u.Da.prototype.qa = "Captions";
            u.Da.prototype.className = "vjs-captions-button";
            u.Ha = u.S.extend({
                i: function(a, c, d) {
                    u.S.call(this, a, c, d);
                    this.a.setAttribute("aria-label", "Subtitles Menu")
                }
            });
            u.Ha.prototype.A = "subtitles";
            u.Ha.prototype.qa = "Subtitles";
            u.Ha.prototype.className = "vjs-subtitles-button";
            u.Ea = u.S.extend({
                i: function(a, c, d) {
                    u.S.call(this, a, c, d);
                    this.a.setAttribute("aria-label", "Chapters Menu")
                }
            });
            t = u.Ea.prototype;
            t.A = "chapters";
            t.qa = "Chapters";
            t.className = "vjs-chapters-button";
            t.ta = function() {
                for (var a = [], c, d = 0; d < V(this.b).length; d++) c = V(this.b)[d], c.J() === this.A && a.push(new u.Y(this.b, {
                    track: c
                }));
                return a
            };
            t.Ka = function() {
                for (var a = V(this.b), c = 0, d = a.length, e, g, j = this.I = []; c < d; c++)
                    if (e = a[c], e.J() == this.A && e.ub()) {
                        if (2 > e.readyState()) {
                            this.Id = e;
                            e.d("loaded", u.bind(this, this.Ka));
                            return
                        }
                        g = e;
                        break
                    }
                a = this.wa = new u.ma(this.b);
                a.a.appendChild(u.e("li", {
                    className: "vjs-menu-title",
                    innerHTML: u.$(this.A),
                    zd: -1
                }));
                if (g) {
                    e = g.fa;
                    for (var k, c = 0, d = e.length; c < d; c++) k = e[c], k = new u.Xa(this.b, {
                        track: g,
                        cue: k
                    }), j.push(k), a.Z(k)
                }
                0 < this.I.length && this.show();
                return a
            };
            u.Xa = u.N.extend({
                i: function(a, c) {
                    var d = this.ca = c.track,
                        e = this.cue = c.cue,
                        g = a.currentTime();
                    c.label = e.text;
                    c.selected = e.startTime <= g && g < e.va;
                    u.N.call(this, a, c);
                    d.d("cuechange", u.bind(this, this.update))
                }
            });
            u.Xa.prototype.p = function() {
                u.N.prototype.p.call(this);
                this.b.currentTime(this.cue.startTime);
                this.update(this.cue.startTime)
            };
            u.Xa.prototype.update = function() {
                var a = this.cue,
                    c = this.b.currentTime();
                this.selected(a.startTime <= c && c < a.va)
            };
            u.k.B(u.Fa.prototype.g.children, {
                subtitlesButton: {},
                captionsButton: {},
                chaptersButton: {}
            });
            if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
            else {
                u.JSON = {};
                var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                u.JSON.parse = function(a, c) {
                    function d(a, e) {
                        var k, q, n = a[e];
                        if (n && "object" === typeof n)
                            for (k in n) Object.prototype.hasOwnProperty.call(n, k) && (q = d(n, k), q !== b ? n[k] = q : delete n[k]);
                        return c.call(a, e, n)
                    }
                    var e;
                    a = String(a);
                    Z.lastIndex = 0;
                    Z.test(a) && (a = a.replace(Z, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    }));
                    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
                        "": e
                    }, "") : e;
                    throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
                }
            }
            u.fc = function() {
                var a, c, d = document.getElementsByTagName("video");
                if (d && 0 < d.length)
                    for (var e = 0, g = d.length; e < g; e++)
                        if ((c = d[e]) && c.getAttribute) c.player === b && (a = c.getAttribute("data-setup"), a !== h && (a = u.JSON.parse(a || "{}"), v(c, a)));
                        else {
                            u.kb();
                            break
                        } else u.Ec || u.kb()
            };
            u.kb = function() {
                setTimeout(u.fc, 1)
            };
            "complete" === document.readyState ? u.Ec = f : u.U(window, "load", function() {
                u.Ec = f
            });
            u.kb();
            u.od = function(a, c) {
                u.s.prototype[a] = c
            };
            var ga = this;
            ga.Ed = f;

            function $(a, c) {
                var d = a.split("."),
                    e = ga;
                !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
                for (var g; d.length && (g = d.shift());) !d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
            }
            $("videojs", u);
            $("_V_", u);
            $("videojs.options", u.options);
            $("videojs.players", u.xa);
            $("videojs.TOUCH_ENABLED", u.ac);
            $("videojs.cache", u.ra);
            $("videojs.Component", u.c);
            u.c.prototype.player = u.c.prototype.K;
            u.c.prototype.dispose = u.c.prototype.D;
            u.c.prototype.createEl = u.c.prototype.e;
            u.c.prototype.el = u.c.prototype.w;
            u.c.prototype.addChild = u.c.prototype.Z;
            u.c.prototype.children = u.c.prototype.children;
            u.c.prototype.on = u.c.prototype.d;
            u.c.prototype.off = u.c.prototype.o;
            u.c.prototype.one = u.c.prototype.U;
            u.c.prototype.trigger = u.c.prototype.j;
            u.c.prototype.triggerReady = u.c.prototype.Ua;
            u.c.prototype.show = u.c.prototype.show;
            u.c.prototype.hide = u.c.prototype.C;
            u.c.prototype.width = u.c.prototype.width;
            u.c.prototype.height = u.c.prototype.height;
            u.c.prototype.dimensions = u.c.prototype.Xc;
            u.c.prototype.ready = u.c.prototype.L;
            u.c.prototype.addClass = u.c.prototype.n;
            u.c.prototype.removeClass = u.c.prototype.u;
            $("videojs.Player", u.s);
            u.s.prototype.dispose = u.s.prototype.D;
            u.s.prototype.requestFullScreen = u.s.prototype.ya;
            u.s.prototype.cancelFullScreen = u.s.prototype.ob;
            u.s.prototype.bufferedPercent = u.s.prototype.Ja;
            u.s.prototype.usingNativeControls = u.s.prototype.Rb;
            u.s.prototype.reportUserActivity = u.s.prototype.Mb;
            u.s.prototype.userActive = u.s.prototype.ja;
            $("videojs.MediaLoader", u.Pc);
            $("videojs.TextTrackDisplay", u.bc);
            $("videojs.ControlBar", u.Fa);
            $("videojs.Button", u.q);
            $("videojs.PlayToggle", u.Yb);
            $("videojs.FullscreenToggle", u.Ga);
            $("videojs.BigPlayButton", u.Wa);
            $("videojs.LoadingSpinner", u.Wb);
            $("videojs.CurrentTimeDisplay", u.Ya);
            $("videojs.DurationDisplay", u.Za);
            $("videojs.TimeDivider", u.cc);
            $("videojs.RemainingTimeDisplay", u.fb);
            $("videojs.Slider", u.O);
            $("videojs.ProgressControl", u.eb);
            $("videojs.SeekBar", u.Zb);
            $("videojs.LoadProgressBar", u.ab);
            $("videojs.PlayProgressBar", u.Xb);
            $("videojs.SeekHandle", u.gb);
            $("videojs.VolumeControl", u.ib);
            $("videojs.VolumeBar", u.hb);
            $("videojs.VolumeLevel", u.dc);
            $("videojs.VolumeMenuButton", u.oa);
            $("videojs.VolumeHandle", u.jb);
            $("videojs.MuteToggle", u.da);
            $("videojs.PosterImage", u.cb);
            $("videojs.Menu", u.ma);
            $("videojs.MenuItem", u.N);
            $("videojs.MenuButton", u.R);
            u.R.prototype.createItems = u.R.prototype.ta;
            u.S.prototype.createItems = u.S.prototype.ta;
            u.Ea.prototype.createItems = u.Ea.prototype.ta;
            $("videojs.SubtitlesButton", u.Ha);
            $("videojs.CaptionsButton", u.Da);
            $("videojs.ChaptersButton", u.Ea);
            $("videojs.MediaTechController", u.r);
            u.r.prototype.features = u.r.prototype.m;
            u.r.prototype.m.volumeControl = u.r.prototype.m.Dc;
            u.r.prototype.m.fullscreenResize = u.r.prototype.m.Jd;
            u.r.prototype.m.progressEvents = u.r.prototype.m.Nd;
            u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Sd;
            $("videojs.Html5", u.l);
            u.l.Events = u.l.$a;
            u.l.isSupported = u.l.isSupported;
            u.l.canPlaySource = u.l.mb;
            u.l.prototype.setCurrentTime = u.l.prototype.sd;
            u.l.prototype.setVolume = u.l.prototype.xd;
            u.l.prototype.setMuted = u.l.prototype.vd;
            u.l.prototype.setPreload = u.l.prototype.wd;
            u.l.prototype.setAutoplay = u.l.prototype.rd;
            u.l.prototype.setLoop = u.l.prototype.ud;
            $("videojs.Flash", u.f);
            u.f.isSupported = u.f.isSupported;
            u.f.canPlaySource = u.f.mb;
            u.f.onReady = u.f.onReady;
            $("videojs.TextTrack", u.X);
            u.X.prototype.label = u.X.prototype.label;
            $("videojs.CaptionsTrack", u.Ub);
            $("videojs.SubtitlesTrack", u.$b);
            $("videojs.ChaptersTrack", u.Vb);
            $("videojs.autoSetup", u.fc);
            $("videojs.plugin", u.od);
            $("videojs.createTimeRange", u.tb)
        })();
        (function() {
            var root = this;
            var previousBackbone = root.Backbone;
            var array = [];
            var push = array.push;
            var slice = array.slice;
            var splice = array.splice;
            var Backbone;
            if (typeof exports !== "undefined") {
                Backbone = exports
            } else {
                Backbone = root.Backbone = {}
            }
            Backbone.VERSION = "1.0.0";
            var _ = root._;
            if (!_ && typeof require !== "undefined") _ = require("underscore");
            Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;
            Backbone.noConflict = function() {
                root.Backbone = previousBackbone;
                return this
            };
            Backbone.emulateHTTP = false;
            Backbone.emulateJSON = false;
            var Events = Backbone.Events = {
                on: function(name, callback, context) {
                    if (!eventsApi(this, "on", name, [callback, context]) || !callback) return this;
                    this._events || (this._events = {});
                    var events = this._events[name] || (this._events[name] = []);
                    events.push({
                        callback: callback,
                        context: context,
                        ctx: context || this
                    });
                    return this
                },
                once: function(name, callback, context) {
                    if (!eventsApi(this, "once", name, [callback, context]) || !callback) return this;
                    var self = this;
                    var once = _.once(function() {
                        self.off(name, once);
                        callback.apply(this, arguments)
                    });
                    once._callback = callback;
                    return this.on(name, once, context)
                },
                off: function(name, callback, context) {
                    var retain, ev, events, names, i, l, j, k;
                    if (!this._events || !eventsApi(this, "off", name, [callback, context])) return this;
                    if (!name && !callback && !context) {
                        this._events = {};
                        return this
                    }
                    names = name ? [name] : _.keys(this._events);
                    for (i = 0, l = names.length; i < l; i++) {
                        name = names[i];
                        if (events = this._events[name]) {
                            this._events[name] = retain = [];
                            if (callback || context) {
                                for (j = 0, k = events.length; j < k; j++) {
                                    ev = events[j];
                                    if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
                                        retain.push(ev)
                                    }
                                }
                            }
                            if (!retain.length) delete this._events[name]
                        }
                    }
                    return this
                },
                trigger: function(name) {
                    if (!this._events) return this;
                    var args = slice.call(arguments, 1);
                    if (!eventsApi(this, "trigger", name, args)) return this;
                    var events = this._events[name];
                    var allEvents = this._events.all;
                    if (events) triggerEvents(events, args);
                    if (allEvents) triggerEvents(allEvents, arguments);
                    return this
                },
                stopListening: function(obj, name, callback) {
                    var listeners = this._listeners;
                    if (!listeners) return this;
                    var deleteListener = !name && !callback;
                    if (typeof name === "object") callback = this;
                    if (obj)(listeners = {})[obj._listenerId] = obj;
                    for (var id in listeners) {
                        listeners[id].off(name, callback, this);
                        if (deleteListener) delete this._listeners[id]
                    }
                    return this
                }
            };
            var eventSplitter = /\s+/;
            var eventsApi = function(obj, action, name, rest) {
                if (!name) return true;
                if (typeof name === "object") {
                    for (var key in name) {
                        obj[action].apply(obj, [key, name[key]].concat(rest))
                    }
                    return false
                }
                if (eventSplitter.test(name)) {
                    var names = name.split(eventSplitter);
                    for (var i = 0, l = names.length; i < l; i++) {
                        obj[action].apply(obj, [names[i]].concat(rest))
                    }
                    return false
                }
                return true
            };
            var triggerEvents = function(events, args) {
                var ev, i = -1,
                    l = events.length,
                    a1 = args[0],
                    a2 = args[1],
                    a3 = args[2];
                switch (args.length) {
                    case 0:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx);
                        return;
                    case 1:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1);
                        return;
                    case 2:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2);
                        return;
                    case 3:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                        return;
                    default:
                        while (++i < l)(ev = events[i]).callback.apply(ev.ctx, args)
                }
            };
            var listenMethods = {
                listenTo: "on",
                listenToOnce: "once"
            };
            _.each(listenMethods, function(implementation, method) {
                Events[method] = function(obj, name, callback) {
                    var listeners = this._listeners || (this._listeners = {});
                    var id = obj._listenerId || (obj._listenerId = _.uniqueId("l"));
                    listeners[id] = obj;
                    if (typeof name === "object") callback = this;
                    obj[implementation](name, callback, this);
                    return this
                }
            });
            Events.bind = Events.on;
            Events.unbind = Events.off;
            _.extend(Backbone, Events);
            var Model = Backbone.Model = function(attributes, options) {
                var defaults;
                var attrs = attributes || {};
                options || (options = {});
                this.cid = _.uniqueId("c");
                this.attributes = {};
                _.extend(this, _.pick(options, modelOptions));
                if (options.parse) attrs = this.parse(attrs, options) || {};
                if (defaults = _.result(this, "defaults")) {
                    attrs = _.defaults({}, attrs, defaults)
                }
                this.set(attrs, options);
                this.changed = {};
                this.initialize.apply(this, arguments)
            };
            var modelOptions = ["url", "urlRoot", "collection"];
            _.extend(Model.prototype, Events, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(options) {
                    return _.clone(this.attributes)
                },
                sync: function() {
                    return Backbone.sync.apply(this, arguments)
                },
                get: function(attr) {
                    return this.attributes[attr]
                },
                escape: function(attr) {
                    return _.escape(this.get(attr))
                },
                has: function(attr) {
                    return this.get(attr) != null
                },
                set: function(key, val, options) {
                    var attr, attrs, unset, changes, silent, changing, prev, current;
                    if (key == null) return this;
                    if (typeof key === "object") {
                        attrs = key;
                        options = val
                    } else {
                        (attrs = {})[key] = val
                    }
                    options || (options = {});
                    if (!this._validate(attrs, options)) return false;
                    unset = options.unset;
                    silent = options.silent;
                    changes = [];
                    changing = this._changing;
                    this._changing = true;
                    if (!changing) {
                        this._previousAttributes = _.clone(this.attributes);
                        this.changed = {}
                    }
                    current = this.attributes, prev = this._previousAttributes;
                    if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];
                    for (attr in attrs) {
                        val = attrs[attr];
                        if (!_.isEqual(current[attr], val)) changes.push(attr);
                        if (!_.isEqual(prev[attr], val)) {
                            this.changed[attr] = val
                        } else {
                            delete this.changed[attr]
                        }
                        unset ? delete current[attr] : current[attr] = val
                    }
                    if (!silent) {
                        if (changes.length) this._pending = true;
                        for (var i = 0, l = changes.length; i < l; i++) {
                            this.trigger("change:" + changes[i], this, current[changes[i]], options)
                        }
                    }
                    if (changing) return this;
                    if (!silent) {
                        while (this._pending) {
                            this._pending = false;
                            this.trigger("change", this, options)
                        }
                    }
                    this._pending = false;
                    this._changing = false;
                    return this
                },
                unset: function(attr, options) {
                    return this.set(attr, void 0, _.extend({}, options, {
                        unset: true
                    }))
                },
                clear: function(options) {
                    var attrs = {};
                    for (var key in this.attributes) attrs[key] = void 0;
                    return this.set(attrs, _.extend({}, options, {
                        unset: true
                    }))
                },
                hasChanged: function(attr) {
                    if (attr == null) return !_.isEmpty(this.changed);
                    return _.has(this.changed, attr)
                },
                changedAttributes: function(diff) {
                    if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
                    var val, changed = false;
                    var old = this._changing ? this._previousAttributes : this.attributes;
                    for (var attr in diff) {
                        if (_.isEqual(old[attr], val = diff[attr])) continue;
                        (changed || (changed = {}))[attr] = val
                    }
                    return changed
                },
                previous: function(attr) {
                    if (attr == null || !this._previousAttributes) return null;
                    return this._previousAttributes[attr]
                },
                previousAttributes: function() {
                    return _.clone(this._previousAttributes)
                },
                fetch: function(options) {
                    options = options ? _.clone(options) : {};
                    if (options.parse === void 0) options.parse = true;
                    var model = this;
                    var success = options.success;
                    options.success = function(resp) {
                        if (!model.set(model.parse(resp, options), options)) return false;
                        if (success) success(model, resp, options);
                        model.trigger("sync", model, resp, options)
                    };
                    wrapError(this, options);
                    return this.sync("read", this, options)
                },
                save: function(key, val, options) {
                    var attrs, method, xhr, attributes = this.attributes;
                    if (key == null || typeof key === "object") {
                        attrs = key;
                        options = val
                    } else {
                        (attrs = {})[key] = val
                    }
                    if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;
                    options = _.extend({
                        validate: true
                    }, options);
                    if (!this._validate(attrs, options)) return false;
                    if (attrs && options.wait) {
                        this.attributes = _.extend({}, attributes, attrs)
                    }
                    if (options.parse === void 0) options.parse = true;
                    var model = this;
                    var success = options.success;
                    options.success = function(resp) {
                        model.attributes = attributes;
                        var serverAttrs = model.parse(resp, options);
                        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
                        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                            return false
                        }
                        if (success) success(model, resp, options);
                        model.trigger("sync", model, resp, options)
                    };
                    wrapError(this, options);
                    method = this.isNew() ? "create" : options.patch ? "patch" : "update";
                    if (method === "patch") options.attrs = attrs;
                    xhr = this.sync(method, this, options);
                    if (attrs && options.wait) this.attributes = attributes;
                    return xhr
                },
                destroy: function(options) {
                    options = options ? _.clone(options) : {};
                    var model = this;
                    var success = options.success;
                    var destroy = function() {
                        model.trigger("destroy", model, model.collection, options)
                    };
                    options.success = function(resp) {
                        if (options.wait || model.isNew()) destroy();
                        if (success) success(model, resp, options);
                        if (!model.isNew()) model.trigger("sync", model, resp, options)
                    };
                    if (this.isNew()) {
                        options.success();
                        return false
                    }
                    wrapError(this, options);
                    var xhr = this.sync("delete", this, options);
                    if (!options.wait) destroy();
                    return xhr
                },
                url: function() {
                    var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
                    if (this.isNew()) return base;
                    return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
                },
                parse: function(resp, options) {
                    return resp
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return this.id == null
                },
                isValid: function(options) {
                    return this._validate({}, _.extend(options || {}, {
                        validate: true
                    }))
                },
                _validate: function(attrs, options) {
                    if (!options.validate || !this.validate) return true;
                    attrs = _.extend({}, this.attributes, attrs);
                    var error = this.validationError = this.validate(attrs, options) || null;
                    if (!error) return true;
                    this.trigger("invalid", this, error, _.extend(options || {}, {
                        validationError: error
                    }));
                    return false
                }
            });
            var modelMethods = ["keys", "values", "pairs", "invert", "pick", "omit"];
            _.each(modelMethods, function(method) {
                Model.prototype[method] = function() {
                    var args = slice.call(arguments);
                    args.unshift(this.attributes);
                    return _[method].apply(_, args)
                }
            });
            var Collection = Backbone.Collection = function(models, options) {
                options || (options = {});
                if (options.url) this.url = options.url;
                if (options.model) this.model = options.model;
                if (options.comparator !== void 0) this.comparator = options.comparator;
                this._reset();
                this.initialize.apply(this, arguments);
                if (models) this.reset(models, _.extend({
                    silent: true
                }, options))
            };
            var setOptions = {
                add: true,
                remove: true,
                merge: true
            };
            var addOptions = {
                add: true,
                merge: false,
                remove: false
            };
            _.extend(Collection.prototype, Events, {
                model: Model,
                initialize: function() {},
                toJSON: function(options) {
                    return this.map(function(model) {
                        return model.toJSON(options)
                    })
                },
                sync: function() {
                    return Backbone.sync.apply(this, arguments)
                },
                add: function(models, options) {
                    return this.set(models, _.defaults(options || {}, addOptions))
                },
                remove: function(models, options) {
                    models = _.isArray(models) ? models.slice() : [models];
                    options || (options = {});
                    var i, l, index, model;
                    for (i = 0, l = models.length; i < l; i++) {
                        model = this.get(models[i]);
                        if (!model) continue;
                        delete this._byId[model.id];
                        delete this._byId[model.cid];
                        index = this.indexOf(model);
                        this.models.splice(index, 1);
                        this.length--;
                        if (!options.silent) {
                            options.index = index;
                            model.trigger("remove", model, this, options)
                        }
                        this._removeReference(model)
                    }
                    return this
                },
                set: function(models, options) {
                    options = _.defaults(options || {}, setOptions);
                    if (options.parse) models = this.parse(models, options);
                    if (!_.isArray(models)) models = models ? [models] : [];
                    var i, l, model, attrs, existing, sort;
                    var at = options.at;
                    var sortable = this.comparator && at == null && options.sort !== false;
                    var sortAttr = _.isString(this.comparator) ? this.comparator : null;
                    var toAdd = [],
                        toRemove = [],
                        modelMap = {};
                    for (i = 0, l = models.length; i < l; i++) {
                        if (!(model = this._prepareModel(models[i], options))) continue;
                        if (existing = this.get(model)) {
                            if (options.remove) modelMap[existing.cid] = true;
                            if (options.merge) {
                                existing.set(model.attributes, options);
                                if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true
                            }
                        } else if (options.add) {
                            toAdd.push(model);
                            model.on("all", this._onModelEvent, this);
                            this._byId[model.cid] = model;
                            if (model.id != null) this._byId[model.id] = model
                        }
                    }
                    if (options.remove) {
                        for (i = 0, l = this.length; i < l; ++i) {
                            if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model)
                        }
                        if (toRemove.length) this.remove(toRemove, options)
                    }
                    if (toAdd.length) {
                        if (sortable) sort = true;
                        this.length += toAdd.length;
                        if (at != null) {
                            splice.apply(this.models, [at, 0].concat(toAdd))
                        } else {
                            push.apply(this.models, toAdd)
                        }
                    }
                    if (sort) this.sort({
                        silent: true
                    });
                    if (options.silent) return this;
                    for (i = 0, l = toAdd.length; i < l; i++) {
                        (model = toAdd[i]).trigger("add", model, this, options)
                    }
                    if (sort) this.trigger("sort", this, options);
                    return this
                },
                reset: function(models, options) {
                    options || (options = {});
                    for (var i = 0, l = this.models.length; i < l; i++) {
                        this._removeReference(this.models[i])
                    }
                    options.previousModels = this.models;
                    this._reset();
                    this.add(models, _.extend({
                        silent: true
                    }, options));
                    if (!options.silent) this.trigger("reset", this, options);
                    return this
                },
                push: function(model, options) {
                    model = this._prepareModel(model, options);
                    this.add(model, _.extend({
                        at: this.length
                    }, options));
                    return model
                },
                pop: function(options) {
                    var model = this.at(this.length - 1);
                    this.remove(model, options);
                    return model
                },
                unshift: function(model, options) {
                    model = this._prepareModel(model, options);
                    this.add(model, _.extend({
                        at: 0
                    }, options));
                    return model
                },
                shift: function(options) {
                    var model = this.at(0);
                    this.remove(model, options);
                    return model
                },
                slice: function(begin, end) {
                    return this.models.slice(begin, end)
                },
                get: function(obj) {
                    if (obj == null) return void 0;
                    return this._byId[obj.id != null ? obj.id : obj.cid || obj]
                },
                at: function(index) {
                    return this.models[index]
                },
                where: function(attrs, first) {
                    if (_.isEmpty(attrs)) return first ? void 0 : [];
                    return this[first ? "find" : "filter"](function(model) {
                        for (var key in attrs) {
                            if (attrs[key] !== model.get(key)) return false
                        }
                        return true
                    })
                },
                findWhere: function(attrs) {
                    return this.where(attrs, true)
                },
                sort: function(options) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    options || (options = {});
                    if (_.isString(this.comparator) || this.comparator.length === 1) {
                        this.models = this.sortBy(this.comparator, this)
                    } else {
                        this.models.sort(_.bind(this.comparator, this))
                    }
                    if (!options.silent) this.trigger("sort", this, options);
                    return this
                },
                sortedIndex: function(model, value, context) {
                    value || (value = this.comparator);
                    var iterator = _.isFunction(value) ? value : function(model) {
                        return model.get(value)
                    };
                    return _.sortedIndex(this.models, model, iterator, context)
                },
                pluck: function(attr) {
                    return _.invoke(this.models, "get", attr)
                },
                fetch: function(options) {
                    options = options ? _.clone(options) : {};
                    if (options.parse === void 0) options.parse = true;
                    var success = options.success;
                    var collection = this;
                    options.success = function(resp) {
                        var method = options.reset ? "reset" : "set";
                        collection[method](resp, options);
                        if (success) success(collection, resp, options);
                        collection.trigger("sync", collection, resp, options)
                    };
                    wrapError(this, options);
                    return this.sync("read", this, options)
                },
                create: function(model, options) {
                    options = options ? _.clone(options) : {};
                    if (!(model = this._prepareModel(model, options))) return false;
                    if (!options.wait) this.add(model, options);
                    var collection = this;
                    var success = options.success;
                    options.success = function(resp) {
                        if (options.wait) collection.add(model, options);
                        if (success) success(model, resp, options)
                    };
                    model.save(null, options);
                    return model
                },
                parse: function(resp, options) {
                    return resp
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0;
                    this.models = [];
                    this._byId = {}
                },
                _prepareModel: function(attrs, options) {
                    if (attrs instanceof Model) {
                        if (!attrs.collection) attrs.collection = this;
                        return attrs
                    }
                    options || (options = {});
                    options.collection = this;
                    var model = new this.model(attrs, options);
                    if (!model._validate(attrs, options)) {
                        this.trigger("invalid", this, attrs, options);
                        return false
                    }
                    return model
                },
                _removeReference: function(model) {
                    if (this === model.collection) delete model.collection;
                    model.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(event, model, collection, options) {
                    if ((event === "add" || event === "remove") && collection !== this) return;
                    if (event === "destroy") this.remove(model, options);
                    if (model && event === "change:" + model.idAttribute) {
                        delete this._byId[model.previous(model.idAttribute)];
                        if (model.id != null) this._byId[model.id] = model
                    }
                    this.trigger.apply(this, arguments)
                }
            });
            var methods = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
            _.each(methods, function(method) {
                Collection.prototype[method] = function() {
                    var args = slice.call(arguments);
                    args.unshift(this.models);
                    return _[method].apply(_, args)
                }
            });
            var attributeMethods = ["groupBy", "countBy", "sortBy"];
            _.each(attributeMethods, function(method) {
                Collection.prototype[method] = function(value, context) {
                    var iterator = _.isFunction(value) ? value : function(model) {
                        return model.get(value)
                    };
                    return _[method](this.models, iterator, context)
                }
            });
            var View = Backbone.View = function(options) {
                this.cid = _.uniqueId("view");
                this._configure(options || {});
                this._ensureElement();
                this.initialize.apply(this, arguments);
                this.delegateEvents()
            };
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;
            var viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            _.extend(View.prototype, Events, {
                tagName: "div",
                $: function(selector) {
                    return this.$el.find(selector)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    this.$el.remove();
                    this.stopListening();
                    return this
                },
                setElement: function(element, delegate) {
                    if (this.$el) this.undelegateEvents();
                    this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
                    this.el = this.$el[0];
                    if (delegate !== false) this.delegateEvents();
                    return this
                },
                delegateEvents: function(events) {
                    if (!(events || (events = _.result(this, "events")))) return this;
                    this.undelegateEvents();
                    for (var key in events) {
                        var method = events[key];
                        if (!_.isFunction(method)) method = this[events[key]];
                        if (!method) continue;
                        var match = key.match(delegateEventSplitter);
                        var eventName = match[1],
                            selector = match[2];
                        method = _.bind(method, this);
                        eventName += ".delegateEvents" + this.cid;
                        if (selector === "") {
                            this.$el.on(eventName, method)
                        } else {
                            this.$el.on(eventName, selector, method)
                        }
                    }
                    return this
                },
                undelegateEvents: function() {
                    this.$el.off(".delegateEvents" + this.cid);
                    return this
                },
                _configure: function(options) {
                    if (this.options) options = _.extend({}, _.result(this, "options"), options);
                    _.extend(this, _.pick(options, viewOptions));
                    this.options = options
                },
                _ensureElement: function() {
                    if (!this.el) {
                        var attrs = _.extend({}, _.result(this, "attributes"));
                        if (this.id) attrs.id = _.result(this, "id");
                        if (this.className) attrs["class"] = _.result(this, "className");
                        var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
                        this.setElement($el, false)
                    } else {
                        this.setElement(_.result(this, "el"), false)
                    }
                }
            });
            Backbone.sync = function(method, model, options) {
                var type = methodMap[method];
                _.defaults(options || (options = {}), {
                    emulateHTTP: Backbone.emulateHTTP,
                    emulateJSON: Backbone.emulateJSON
                });
                var params = {
                    type: type,
                    dataType: "json"
                };
                if (!options.url) {
                    params.url = _.result(model, "url") || urlError()
                }
                if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
                    params.contentType = "application/json";
                    params.data = JSON.stringify(options.attrs || model.toJSON(options))
                }
                if (options.emulateJSON) {
                    params.contentType = "application/x-www-form-urlencoded";
                    params.data = params.data ? {
                        model: params.data
                    } : {}
                }
                if (options.emulateHTTP && (type === "PUT" || type === "DELETE" || type === "PATCH")) {
                    params.type = "POST";
                    if (options.emulateJSON) params.data._method = type;
                    var beforeSend = options.beforeSend;
                    options.beforeSend = function(xhr) {
                        xhr.setRequestHeader("X-HTTP-Method-Override", type);
                        if (beforeSend) return beforeSend.apply(this, arguments)
                    }
                }
                if (params.type !== "GET" && !options.emulateJSON) {
                    params.processData = false
                }
                if (params.type === "PATCH" && window.ActiveXObject && !(window.external && window.external.msActiveXFilteringEnabled)) {
                    params.xhr = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                }
                var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
                model.trigger("request", model, xhr, options);
                return xhr
            };
            var methodMap = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
            Backbone.ajax = function() {
                return Backbone.$.ajax.apply(Backbone.$, arguments)
            };
            var Router = Backbone.Router = function(options) {
                options || (options = {});
                if (options.routes) this.routes = options.routes;
                this._bindRoutes();
                this.initialize.apply(this, arguments)
            };
            var optionalParam = /\((.*?)\)/g;
            var namedParam = /(\(\?)?:\w+/g;
            var splatParam = /\*\w+/g;
            var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            _.extend(Router.prototype, Events, {
                initialize: function() {},
                route: function(route, name, callback) {
                    if (!_.isRegExp(route)) route = this._routeToRegExp(route);
                    if (_.isFunction(name)) {
                        callback = name;
                        name = ""
                    }
                    if (!callback) callback = this[name];
                    var router = this;
                    Backbone.history.route(route, function(fragment) {
                        var args = router._extractParameters(route, fragment);
                        callback && callback.apply(router, args);
                        router.trigger.apply(router, ["route:" + name].concat(args));
                        router.trigger("route", name, args);
                        Backbone.history.trigger("route", router, name, args)
                    });
                    return this
                },
                navigate: function(fragment, options) {
                    Backbone.history.navigate(fragment, options);
                    return this
                },
                _bindRoutes: function() {
                    if (!this.routes) return;
                    this.routes = _.result(this, "routes");
                    var route, routes = _.keys(this.routes);
                    while ((route = routes.pop()) != null) {
                        this.route(route, this.routes[route])
                    }
                },
                _routeToRegExp: function(route) {
                    route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
                        return optional ? match : "([^/]+)"
                    }).replace(splatParam, "(.*?)");
                    return new RegExp("^" + route + "$")
                },
                _extractParameters: function(route, fragment) {
                    var params = route.exec(fragment).slice(1);
                    return _.map(params, function(param) {
                        return param ? decodeURIComponent(param) : null
                    })
                }
            });
            var History = Backbone.History = function() {
                this.handlers = [];
                _.bindAll(this, "checkUrl");
                if (typeof window !== "undefined") {
                    this.location = window.location;
                    this.history = window.history
                }
            };
            var routeStripper = /^[#\/]|\s+$/g;
            var rootStripper = /^\/+|\/+$/g;
            var isExplorer = /msie [\w.]+/;
            var trailingSlash = /\/$/;
            History.started = false;
            _.extend(History.prototype, Events, {
                interval: 50,
                getHash: function(window) {
                    var match = (window || this).location.href.match(/#(.*)$/);
                    return match ? match[1] : ""
                },
                getFragment: function(fragment, forcePushState) {
                    if (fragment == null) {
                        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                            fragment = this.location.pathname;
                            var root = this.root.replace(trailingSlash, "");
                            if (!fragment.indexOf(root)) fragment = fragment.substr(root.length)
                        } else {
                            fragment = this.getHash()
                        }
                    }
                    return fragment.replace(routeStripper, "")
                },
                start: function(options) {
                    if (History.started) throw new Error("Backbone.history has already been started");
                    History.started = true;
                    this.options = _.extend({}, {
                        root: "/"
                    }, this.options, options);
                    this.root = this.options.root;
                    this._wantsHashChange = this.options.hashChange !== false;
                    this._wantsPushState = !!this.options.pushState;
                    this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var fragment = this.getFragment();
                    var docMode = document.documentMode;
                    var oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
                    this.root = ("/" + this.root + "/").replace(rootStripper, "/");
                    if (oldIE && this._wantsHashChange) {
                        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                        this.navigate(fragment)
                    }
                    if (this._hasPushState) {
                        Backbone.$(window).on("popstate", this.checkUrl)
                    } else if (this._wantsHashChange && "onhashchange" in window && !oldIE) {
                        Backbone.$(window).on("hashchange", this.checkUrl)
                    } else if (this._wantsHashChange) {
                        this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
                    }
                    this.fragment = fragment;
                    var loc = this.location;
                    var atRoot = loc.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
                        this.fragment = this.getFragment(null, true);
                        this.location.replace(this.root + this.location.search + "#" + this.fragment);
                        return true
                    } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                        this.fragment = this.getHash().replace(routeStripper, "");
                        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search)
                    }
                    if (!this.options.silent) return this.loadUrl()
                },
                stop: function() {
                    Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
                    clearInterval(this._checkUrlInterval);
                    History.started = false
                },
                route: function(route, callback) {
                    this.handlers.unshift({
                        route: route,
                        callback: callback
                    })
                },
                checkUrl: function(e) {
                    var current = this.getFragment();
                    if (current === this.fragment && this.iframe) {
                        current = this.getFragment(this.getHash(this.iframe))
                    }
                    if (current === this.fragment) return false;
                    if (this.iframe) this.navigate(current);
                    this.loadUrl() || this.loadUrl(this.getHash())
                },
                loadUrl: function(fragmentOverride) {
                    var fragment = this.fragment = this.getFragment(fragmentOverride);
                    var matched = _.any(this.handlers, function(handler) {
                        if (handler.route.test(fragment)) {
                            handler.callback(fragment);
                            return true
                        }
                    });
                    return matched
                },
                navigate: function(fragment, options) {
                    if (!History.started) return false;
                    if (!options || options === true) options = {
                        trigger: options
                    };
                    fragment = this.getFragment(fragment || "");
                    if (this.fragment === fragment) return;
                    this.fragment = fragment;
                    var url = this.root + fragment;
                    if (this._hasPushState) {
                        this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url)
                    } else if (this._wantsHashChange) {
                        this._updateHash(this.location, fragment, options.replace);
                        if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
                            if (!options.replace) this.iframe.document.open().close();
                            this._updateHash(this.iframe.location, fragment, options.replace)
                        }
                    } else {
                        return this.location.assign(url)
                    }
                    if (options.trigger) this.loadUrl(fragment)
                },
                _updateHash: function(location, fragment, replace) {
                    if (replace) {
                        var href = location.href.replace(/(javascript:|#).*$/, "");
                        location.replace(href + "#" + fragment)
                    } else {
                        location.hash = "#" + fragment
                    }
                }
            });
            Backbone.history = new History;
            var extend = function(protoProps, staticProps) {
                var parent = this;
                var child;
                if (protoProps && _.has(protoProps, "constructor")) {
                    child = protoProps.constructor
                } else {
                    child = function() {
                        return parent.apply(this, arguments)
                    }
                }
                _.extend(child, parent, staticProps);
                var Surrogate = function() {
                    this.constructor = child
                };
                Surrogate.prototype = parent.prototype;
                child.prototype = new Surrogate;
                if (protoProps) _.extend(child.prototype, protoProps);
                child.__super__ = parent.prototype;
                return child
            };
            Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
            var urlError = function() {
                throw new Error('A "url" property or function must be specified')
            };
            var wrapError = function(model, options) {
                var error = options.error;
                options.error = function(resp) {
                    if (error) error(model, resp, options);
                    model.trigger("error", model, resp, options)
                }
            }
        }).call(this);
        Backbone.Wreqr = function(Backbone, Marionette, _) {
            "use strict";
            var Wreqr = {};
            Wreqr.Handlers = function(Backbone, _) {
                "use strict";
                var Handlers = function(options) {
                    this.options = options;
                    this._wreqrHandlers = {};
                    if (_.isFunction(this.initialize)) {
                        this.initialize(options)
                    }
                };
                Handlers.extend = Backbone.Model.extend;
                _.extend(Handlers.prototype, Backbone.Events, {
                    setHandlers: function(handlers) {
                        _.each(handlers, function(handler, name) {
                            var context = null;
                            if (_.isObject(handler) && !_.isFunction(handler)) {
                                context = handler.context;
                                handler = handler.callback
                            }
                            this.setHandler(name, handler, context)
                        }, this)
                    },
                    setHandler: function(name, handler, context) {
                        var config = {
                            callback: handler,
                            context: context
                        };
                        this._wreqrHandlers[name] = config;
                        this.trigger("handler:add", name, handler, context)
                    },
                    hasHandler: function(name) {
                        return !!this._wreqrHandlers[name]
                    },
                    getHandler: function(name) {
                        var config = this._wreqrHandlers[name];
                        if (!config) {
                            throw new Error("Handler not found for '" + name + "'")
                        }
                        return function() {
                            var args = Array.prototype.slice.apply(arguments);
                            return config.callback.apply(config.context, args)
                        }
                    },
                    removeHandler: function(name) {
                        delete this._wreqrHandlers[name]
                    },
                    removeAllHandlers: function() {
                        this._wreqrHandlers = {}
                    }
                });
                return Handlers
            }(Backbone, _);
            Wreqr.CommandStorage = function() {
                "use strict";
                var CommandStorage = function(options) {
                    this.options = options;
                    this._commands = {};
                    if (_.isFunction(this.initialize)) {
                        this.initialize(options)
                    }
                };
                _.extend(CommandStorage.prototype, Backbone.Events, {
                    getCommands: function(commandName) {
                        var commands = this._commands[commandName];
                        if (!commands) {
                            commands = {
                                command: commandName,
                                instances: []
                            };
                            this._commands[commandName] = commands
                        }
                        return commands
                    },
                    addCommand: function(commandName, args) {
                        var command = this.getCommands(commandName);
                        command.instances.push(args)
                    },
                    clearCommands: function(commandName) {
                        var command = this.getCommands(commandName);
                        command.instances = []
                    }
                });
                return CommandStorage
            }();
            Wreqr.Commands = function(Wreqr) {
                "use strict";
                return Wreqr.Handlers.extend({
                    storageType: Wreqr.CommandStorage,
                    constructor: function(options) {
                        this.options = options || {};
                        this._initializeStorage(this.options);
                        this.on("handler:add", this._executeCommands, this);
                        var args = Array.prototype.slice.call(arguments);
                        Wreqr.Handlers.prototype.constructor.apply(this, args)
                    },
                    execute: function(name, args) {
                        name = arguments[0];
                        args = Array.prototype.slice.call(arguments, 1);
                        if (this.hasHandler(name)) {
                            this.getHandler(name).apply(this, args)
                        } else {
                            this.storage.addCommand(name, args)
                        }
                    },
                    _executeCommands: function(name, handler, context) {
                        var command = this.storage.getCommands(name);
                        _.each(command.instances, function(args) {
                            handler.apply(context, args)
                        });
                        this.storage.clearCommands(name)
                    },
                    _initializeStorage: function(options) {
                        var storage;
                        var StorageType = options.storageType || this.storageType;
                        if (_.isFunction(StorageType)) {
                            storage = new StorageType
                        } else {
                            storage = StorageType
                        }
                        this.storage = storage
                    }
                })
            }(Wreqr);
            Wreqr.RequestResponse = function(Wreqr) {
                "use strict";
                return Wreqr.Handlers.extend({
                    request: function() {
                        var name = arguments[0];
                        var args = Array.prototype.slice.call(arguments, 1);
                        return this.getHandler(name).apply(this, args)
                    }
                })
            }(Wreqr);
            Wreqr.EventAggregator = function(Backbone, _) {
                "use strict";
                var EA = function() {};
                EA.extend = Backbone.Model.extend;
                _.extend(EA.prototype, Backbone.Events);
                return EA
            }(Backbone, _);
            return Wreqr
        }(Backbone, Backbone.Marionette, _);
        (function(root, name, factory) {
            var dep = root["jQuery"] || root["Zepto"] || root["ender"] || root["elo"];
            if (typeof module != "undefined" && module["exports"]) {
                module["exports"] = factory(dep)
            } else {
                root[name] = factory(dep)
            }
        })(this, "Response", function($) {
            if (typeof $ != "function") {
                try {
                    console.log("Response was unable to run due to missing dependency.")
                } catch (e) {}
            }
            var Response, root = this,
                name = "Response",
                old = root[name],
                initContentKey = "init" + name,
                win = window,
                doc = document,
                docElem = doc.documentElement,
                ready = $.domReady || $,
                $win = $(win),
                screen = win.screen,
                owns = {}.hasOwnProperty,
                slice = [].slice,
                concat = [].concat,
                nativeMap = [].map,
                isArray = Array.isArray || function(ukn) {
                    return ukn instanceof Array
                },
                map = nativeMap ? function(ob, fn, scope) {
                    return nativeMap.call(ob, fn, scope)
                } : function(ob, fn, scope) {
                    var i, l = ob.length,
                        ret = [];
                    for (i = 0; i < l; i++) {
                        i in ob && (ret[i] = fn.call(scope, ob[i], i, ob))
                    }
                    return ret
                },
                defaultBreakpoints = {
                    width: [0, 320, 481, 641, 961, 1025, 1281],
                    height: [0, 481],
                    ratio: [1, 1.5, 2]
                },
                Elemset, band, wave, device = {},
                propTests = {},
                isCustom = {},
                sets = {
                    all: []
                },
                suid = 1,
                screenW = screen.width,
                screenH = screen.height,
                screenMax = screenW > screenH ? screenW : screenH,
                screenMin = screenW + screenH - screenMax,
                deviceW = function() {
                    return screenW
                },
                deviceH = function() {
                    return screenH
                },
                regexFunkyPunc = /[^a-z0-9_\-\.]/gi,
                regexTrimPunc = /^[\W\s]+|[\W\s]+$|/g,
                regexCamels = /([a-z])([A-Z])/g,
                regexDashB4 = /-(.)/g,
                regexDataPrefix = /^data-(.+)$/,
                objectCreate = Object.create || function(proto) {
                    function Type() {}
                    Type.prototype = proto;
                    return new Type
                },
                namespaceIt = function(eventName, customNamespace) {
                    customNamespace = customNamespace || name;
                    return eventName.replace(regexTrimPunc, "") + "." + customNamespace.replace(regexTrimPunc, "")
                },
                event = {
                    allLoaded: namespaceIt("allLoaded"),
                    crossover: namespaceIt("crossover")
                },
                matchMedia = win.matchMedia || win.msMatchMedia,
                media = matchMedia || function() {
                    return {}
                },
                viewportW = function(win, docElem, mM) {
                    var client = docElem["clientWidth"],
                        inner = win["innerWidth"];
                    return mM && client < inner && true === mM("(min-width:" + inner + "px)")["matches"] ? function() {
                        return win["innerWidth"]
                    } : function() {
                        return docElem["clientWidth"]
                    }
                }(win, docElem, matchMedia),
                viewportH = function(win, docElem, mM) {
                    var client = docElem["clientHeight"],
                        inner = win["innerHeight"];
                    return mM && client < inner && true === mM("(min-height:" + inner + "px)")["matches"] ? function() {
                        return win["innerHeight"]
                    } : function() {
                        return docElem["clientHeight"]
                    }
                }(win, docElem, matchMedia);

            function doError(msg) {
                throw new TypeError(msg ? name + "." + msg : name)
            }

            function isNumber(item) {
                return typeof item == "number" && item === item
            }

            function ssvToArr(ukn) {
                return typeof ukn == "string" ? sift(ukn.split(" ")) : isArray(ukn) ? sift(ukn) : []
            }

            function each(ob, callback, scope) {
                if (null == ob) {
                    return ob
                }
                var i = 0,
                    len = ob.length;
                while (i < len) {
                    callback.call(scope || ob[i], ob[i], i++, ob)
                }
                return ob
            }

            function affix(arr, prefix, suffix) {
                var r = [],
                    l = arr.length,
                    i = 0,
                    v;
                prefix = prefix || "";
                suffix = suffix || "";
                while (i < l) {
                    v = arr[i++];
                    null == v || r.push(prefix + v + suffix)
                }
                return r
            }

            function sift(ob, fn, scope) {
                var l, u = 0,
                    i = 0,
                    v, ret = [],
                    invert, isF = typeof fn == "function";
                if (!ob) {
                    return ret
                }
                scope = (invert = true === scope) ? null : scope;
                for (l = ob.length; i < l; i++) {
                    v = ob[i];
                    invert === !(isF ? fn.call(scope, v, i, ob) : fn ? typeof v === fn : v) && (ret[u++] = v)
                }
                return ret
            }

            function merge(base, adds) {
                var k, l;
                if (!base || !adds) {
                    return base
                }
                if (typeof adds != "function" && isNumber(l = adds.length)) {
                    for (k = 0; k < l; k++) {
                        void 0 === adds[k] || (base[k] = adds[k])
                    }
                    base.length > k || (base.length = k)
                } else {
                    for (k in adds) {
                        owns.call(adds, k) && void 0 !== adds[k] && (base[k] = adds[k])
                    }
                }
                return base
            }

            function route(item, fn, scope) {
                if (null == item) {
                    return item
                }
                if (typeof item == "object" && !item.nodeType && isNumber(item.length)) {
                    each(item, fn, scope)
                } else {
                    fn.call(scope || item, item)
                }
                return item
            }

            function ranger(fn) {
                return function(min, max) {
                    var n = fn();
                    min = n >= (min || 0);
                    return max ? min && n <= max : min
                }
            }
            band = ranger(viewportW);
            wave = ranger(viewportH);
            device.band = ranger(deviceW);
            device.wave = ranger(deviceH);

            function dpr(decimal) {
                var dPR = win.devicePixelRatio;
                if (null == decimal) {
                    return dPR || (dpr(2) ? 2 : dpr(1.5) ? 1.5 : dpr(1) ? 1 : 0)
                }
                if (!isFinite(decimal)) {
                    return false
                }
                if (dPR && dPR > 0) {
                    return dPR >= decimal
                }
                decimal = "only all and (min--moz-device-pixel-ratio:" + decimal + ")";
                if (media(decimal).matches) {
                    return true
                }
                return !!media(decimal.replace("-moz-", "")).matches
            }

            function camelize(s) {
                return s.replace(regexDataPrefix, "$1").replace(regexDashB4, function(m, m1) {
                    return m1.toUpperCase()
                })
            }

            function datatize(s) {
                return "data-" + (s ? s.replace(regexDataPrefix, "$1").replace(regexCamels, "$1-$2").toLowerCase() : s)
            }

            function render(s) {
                var n;
                return !s || typeof s != "string" ? s : "true" === s ? true : "false" === s ? false : "undefined" === s ? n : "null" === s ? null : (n = parseFloat(s)) === +n ? n : s
            }

            function getNative(e) {
                return !e ? false : e.nodeType === 1 ? e : e[0] && e[0].nodeType === 1 ? e[0] : false
            }

            function datasetChainable(key, value) {
                var numOfArgs = arguments.length,
                    elem = getNative(this),
                    ret = {},
                    renderData = false,
                    n;
                if (numOfArgs) {
                    if (isArray(key)) {
                        renderData = true;
                        key = key[0]
                    }
                    if (typeof key === "string") {
                        key = datatize(key);
                        if (1 === numOfArgs) {
                            ret = elem.getAttribute(key);
                            return renderData ? render(ret) : ret
                        }
                        if (this === elem || 2 > (n = this.length || 1)) {
                            elem.setAttribute(key, value)
                        } else {
                            while (n--) {
                                if (n in this) {
                                    datasetChainable.apply(this[n], arguments)
                                }
                            }
                        }
                    } else if (key instanceof Object) {
                        for (n in key) {
                            key.hasOwnProperty(n) && datasetChainable.call(this, n, key[n])
                        }
                    }
                    return this
                }
                if (elem.dataset && DOMStringMap) {
                    return elem.dataset
                }
                each(elem.attributes, function(a) {
                    if (a && (n = String(a.name).match(regexDataPrefix))) {
                        ret[camelize(n[1])] = a.value
                    }
                });
                return ret
            }

            function deletesChainable(keys) {
                if (this && typeof keys === "string") {
                    keys = ssvToArr(keys);
                    route(this, function(el) {
                        each(keys, function(key) {
                            if (key) {
                                el.removeAttribute(datatize(key))
                            }
                        })
                    })
                }
                return this
            }

            function dataset(elem, key, value) {
                return datasetChainable.apply(elem, slice.call(arguments, 1))
            }

            function deletes(elem, keys) {
                return deletesChainable.call(elem, keys)
            }

            function selectify(keys) {
                var k, r = [],
                    i = 0,
                    l = keys.length;
                while (i < l) {
                    (k = keys[i++]) && r.push("[" + datatize(k.replace(regexTrimPunc, "").replace(".", "\\.")) + "]")
                }
                return r.join()
            }

            function target(keys) {
                return $(selectify(ssvToArr(keys)))
            }

            function scrollX() {
                return window.pageXOffset || docElem.scrollLeft
            }

            function scrollY() {
                return window.pageYOffset || docElem.scrollTop
            }

            function rectangle(el, verge) {
                var r = el.getBoundingClientRect ? el.getBoundingClientRect() : {};
                verge = typeof verge == "number" ? verge || 0 : 0;
                return {
                    top: (r.top || 0) - verge,
                    left: (r.left || 0) - verge,
                    bottom: (r.bottom || 0) + verge,
                    right: (r.right || 0) + verge
                }
            }

            function inX(elem, verge) {
                var r = rectangle(getNative(elem), verge);
                return !!r && r.right >= 0 && r.left <= viewportW()
            }

            function inY(elem, verge) {
                var r = rectangle(getNative(elem), verge);
                return !!r && r.bottom >= 0 && r.top <= viewportH()
            }

            function inViewport(elem, verge) {
                var r = rectangle(getNative(elem), verge);
                return !!r && r.bottom >= 0 && r.top <= viewportH() && r.right >= 0 && r.left <= viewportW()
            }

            function detectMode(elem) {
                var srcElems = {
                        img: 1,
                        input: 1,
                        source: 3,
                        embed: 3,
                        track: 3,
                        iframe: 5,
                        audio: 5,
                        video: 5,
                        script: 5
                    },
                    modeID = srcElems[elem.nodeName.toLowerCase()] || -1;
                return 4 > modeID ? modeID : null != elem.getAttribute("src") ? 5 : -5
            }

            function store($elems, key, source) {
                var valToStore;
                if (!$elems || null == key) {
                    doError("store")
                }
                source = typeof source == "string" && source;
                route($elems, function(el) {
                    if (source) {
                        valToStore = el.getAttribute(source)
                    } else if (0 < detectMode(el)) {
                        valToStore = el.getAttribute("src")
                    } else {
                        valToStore = el.innerHTML
                    }
                    null == valToStore ? deletes(el, key) : dataset(el, key, valToStore)
                });
                return Response
            }

            function access(elem, keys) {
                var ret = [];
                elem && keys && each(ssvToArr(keys), function(k, i) {
                    ret.push(dataset(elem, k))
                }, elem);
                return ret
            }

            function addTest(prop, fn) {
                if (typeof prop == "string" && typeof fn == "function") {
                    propTests[prop] = fn;
                    isCustom[prop] = 1
                }
                return Response
            }
            Elemset = function() {
                var crossover = event.crossover,
                    min = Math.min;

                function sanitize(key) {
                    return typeof key == "string" ? key.toLowerCase().replace(regexFunkyPunc, "") : ""
                }
                return {
                    $e: 0,
                    mode: 0,
                    breakpoints: null,
                    prefix: null,
                    prop: "width",
                    keys: [],
                    dynamic: null,
                    custom: 0,
                    values: [],
                    fn: 0,
                    verge: null,
                    newValue: 0,
                    currValue: 1,
                    aka: null,
                    lazy: null,
                    i: 0,
                    uid: null,
                    reset: function() {
                        var subjects = this.breakpoints,
                            i = subjects.length,
                            tempIndex = 0;
                        while (!tempIndex && i--) {
                            this.fn(subjects[i]) && (tempIndex = i)
                        }
                        if (tempIndex !== this.i) {
                            $win.trigger(crossover).trigger(this.prop + crossover);
                            this.i = tempIndex || 0
                        }
                        return this
                    },
                    configure: function(options) {
                        merge(this, options);
                        var i, prefix, aliases, aliasKeys, isNumeric = true,
                            arr, prop = this.prop;
                        this.uid = suid++;
                        this.verge = isFinite(this.verge) ? this.verge : min(screenMax, 500);
                        this.fn = propTests[prop] || doError("create @fn");
                        if (typeof this.dynamic != "boolean") {
                            this.dynamic = !!("device" !== prop.substring(0, 6))
                        }
                        this.custom = isCustom[prop];
                        prefix = this.prefix ? sift(map(ssvToArr(this.prefix), sanitize)) : ["min-" + prop + "-"];
                        aliases = 1 < prefix.length ? prefix.slice(1) : 0;
                        this.prefix = prefix[0];
                        arr = this.breakpoints;
                        if (isArray(arr)) {
                            each(arr, function(v) {
                                if (!v && v !== 0) {
                                    throw "invalid breakpoint"
                                }
                                isNumeric = isNumeric && isFinite(v)
                            });
                            arr = isNumeric ? arr.sort(function(a, b) {
                                return a - b
                            }) : arr;
                            arr.length || doError("create @breakpoints")
                        } else {
                            arr = defaultBreakpoints[prop] || defaultBreakpoints[prop.split("-").pop()] || doError("create @prop")
                        }
                        this.breakpoints = isNumeric ? sift(arr, function(n) {
                            return n <= screenMax
                        }) : arr;
                        this.keys = affix(this.breakpoints, this.prefix);
                        this.aka = null;
                        if (aliases) {
                            aliasKeys = [];
                            i = aliases.length;
                            while (i--) {
                                aliasKeys.push(affix(this.breakpoints, aliases[i]))
                            }
                            this.aka = aliasKeys;
                            this.keys = concat.apply(this.keys, aliasKeys)
                        }
                        sets.all = sets.all.concat(sets[this.uid] = this.keys);
                        return this
                    },
                    target: function() {
                        this.$e = $(selectify(sets[this.uid]));
                        store(this.$e, initContentKey);
                        this.keys.push(initContentKey);
                        return this
                    },
                    decideValue: function() {
                        var val = null,
                            subjects = this.breakpoints,
                            sL = subjects.length,
                            i = sL;
                        while (val == null && i--) {
                            this.fn(subjects[i]) && (val = this.values[i])
                        }
                        this.newValue = typeof val === "string" ? val : this.values[sL];
                        return this
                    },
                    prepareData: function(elem) {
                        this.$e = $(elem);
                        this.mode = detectMode(elem);
                        this.values = access(this.$e, this.keys);
                        if (this.aka) {
                            var i = this.aka.length;
                            while (i--) {
                                this.values = merge(this.values, access(this.$e, this.aka[i]))
                            }
                        }
                        return this.decideValue()
                    },
                    updateDOM: function() {
                        if (this.currValue === this.newValue) {
                            return this
                        }
                        this.currValue = this.newValue;
                        if (0 < this.mode) {
                            this.$e[0].setAttribute("src", this.newValue)
                        } else if (null == this.newValue) {
                            this.$e.empty && this.$e.empty()
                        } else {
                            if (this.$e.html) {
                                this.$e.html(this.newValue)
                            } else {
                                this.$e.empty && this.$e.empty();
                                this.$e[0].innerHTML = this.newValue
                            }
                        }
                        return this
                    }
                }
            }();
            propTests["width"] = band;
            propTests["height"] = wave;
            propTests["device-width"] = device.band;
            propTests["device-height"] = device.wave;
            propTests["device-pixel-ratio"] = dpr;

            function resize(fn) {
                $win.on("resize", fn);
                return Response
            }

            function crossover(prop, fn) {
                var temp, eventToFire, eventCrossover = event.crossover;
                if (typeof prop == "function") {
                    temp = fn;
                    fn = prop;
                    prop = temp
                }
                eventToFire = prop ? "" + prop + eventCrossover : eventCrossover;
                $win.on(eventToFire, fn);
                return Response
            }

            function action(fnOrArr) {
                route(fnOrArr, function(fn) {
                    ready(fn);
                    resize(fn)
                });
                return Response
            }

            function create(args) {
                route(args, function(options) {
                    typeof options == "object" || doError("create @args");
                    var elemset = objectCreate(Elemset).configure(options),
                        lowestNonZeroBP, verge = elemset.verge,
                        breakpoints = elemset.breakpoints,
                        scrollName = namespaceIt("scroll"),
                        resizeName = namespaceIt("resize");
                    if (!breakpoints.length) {
                        return
                    }
                    lowestNonZeroBP = breakpoints[0] || breakpoints[1] || false;
                    ready(function() {
                        var allLoaded = event.allLoaded,
                            lazy = !!elemset.lazy;
                        each(elemset.target().$e, function(el, i) {
                            elemset[i] = objectCreate(elemset).prepareData(el);
                            if (!lazy || inViewport(elemset[i].$e, verge)) {
                                elemset[i].updateDOM()
                            }
                        });

                        function resizeHandler() {
                            elemset.reset();
                            each(elemset.$e, function(el, i) {
                                elemset[i].decideValue().updateDOM()
                            }).trigger(allLoaded)
                        }
                        if (elemset.dynamic && (elemset.custom || lowestNonZeroBP < screenMax)) {
                            resize(resizeHandler, resizeName)
                        }
                        if (!lazy) {
                            return
                        }

                        function scrollHandler() {
                            each(elemset.$e, function(el, i) {
                                if (inViewport(elemset[i].$e, verge)) {
                                    elemset[i].updateDOM()
                                }
                            })
                        }
                        $win.on(scrollName, scrollHandler);
                        elemset.$e.one(allLoaded, function() {
                            $win.off(scrollName, scrollHandler)
                        })
                    })
                });
                return Response
            }

            function noConflict(callback) {
                if (root[name] === Response) {
                    root[name] = old
                }
                if (typeof callback == "function") {
                    callback.call(root, Response)
                }
                return Response
            }

            function exposeAreaFilters(engine, proto, force) {
                each(["inX", "inY", "inViewport"], function(methodName) {
                    (force || !proto[methodName]) && (proto[methodName] = function(verge, invert) {
                        return engine(sift(this, function(el) {
                            return !!el && !invert === Response[methodName](el, verge)
                        }))
                    })
                })
            }

            function bridge(host, force) {
                if (typeof host == "function" && host.fn) {
                    if (force || void 0 === host.fn.dataset) {
                        host.fn.dataset = datasetChainable
                    }
                    if (force || void 0 === host.fn.deletes) {
                        host.fn.deletes = deletesChainable
                    }
                    exposeAreaFilters(host, host.fn, force)
                }
                return Response
            }

            function chain(host, force) {
                host = arguments.length ? host : $;
                return bridge(host, force)
            }
            Response = {
                deviceMin: function() {
                    return screenMin
                },
                deviceMax: function() {
                    return screenMax
                },
                noConflict: noConflict,
                chain: chain,
                bridge: bridge,
                create: create,
                addTest: addTest,
                datatize: datatize,
                camelize: camelize,
                render: render,
                store: store,
                access: access,
                target: target,
                object: objectCreate,
                crossover: crossover,
                action: action,
                resize: resize,
                ready: ready,
                affix: affix,
                sift: sift,
                dpr: dpr,
                deletes: deletes,
                scrollX: scrollX,
                scrollY: scrollY,
                deviceW: deviceW,
                deviceH: deviceH,
                device: device,
                inX: inX,
                inY: inY,
                route: route,
                merge: merge,
                media: media,
                wave: wave,
                band: band,
                map: map,
                each: each,
                inViewport: inViewport,
                dataset: dataset,
                viewportH: viewportH,
                viewportW: viewportW
            };
            ready(function() {
                var nativeJSONParse, customData = dataset(doc.body, "responsejs");
                if (customData) {
                    nativeJSONParse = !!win.JSON && JSON.parse;
                    if (nativeJSONParse) {
                        customData = nativeJSONParse(customData)
                    } else if ($.parseJSON) {
                        customData = $.parseJSON(customData)
                    }
                    customData && customData.create && create(customData.create)
                }
                docElem.className = docElem.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs "
            });
            return Response
        });
        (function($, window, undefined) {
            "use strict";
            $.fn.backstretch = function(images, options) {
                if (images === undefined || images.length === 0) {
                    $.error("No images were supplied for Backstretch")
                }
                if ($(window).scrollTop() === 0) {
                    window.scrollTo(0, 0)
                }
                return this.each(function() {
                    var $this = $(this),
                        obj = $this.data("backstretch");
                    if (obj) {
                        if (typeof images == "string" && typeof obj[images] == "function") {
                            obj[images](options);
                            return
                        }
                        options = $.extend(obj.options, options);
                        obj.destroy(true)
                    }
                    obj = new Backstretch(this, images, options);
                    $this.data("backstretch", obj)
                })
            };
            $.backstretch = function(images, options) {
                return $("body").backstretch(images, options).data("backstretch")
            };
            $.expr[":"].backstretch = function(elem) {
                return $(elem).data("backstretch") !== undefined
            };
            $.fn.backstretch.defaults = {
                centeredX: true,
                centeredY: true,
                duration: 5e3,
                fade: 0
            };
            var styles = {
                wrap: {
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: -999999
                },
                img: {
                    position: "absolute",
                    display: "none",
                    margin: 0,
                    padding: 0,
                    border: "none",
                    width: "auto",
                    height: "auto",
                    maxHeight: "none",
                    maxWidth: "none",
                    zIndex: -999999
                }
            };
            var Backstretch = function(container, images, options) {
                this.options = $.extend({}, $.fn.backstretch.defaults, options || {});
                this.images = $.isArray(images) ? images : [images];
                $.each(this.images, function() {
                    $("<img />")[0].src = this
                });
                this.isBody = container === document.body;
                this.$container = $(container);
                this.$root = this.isBody ? supportsFixedPosition ? $(window) : $(document) : this.$container;
                var $existing = this.$container.children(".backstretch").first();
                this.$wrap = $existing.length ? $existing : $('<div class="backstretch"></div>').css(styles.wrap).appendTo(this.$container);
                if (!this.isBody) {
                    var position = this.$container.css("position"),
                        zIndex = this.$container.css("zIndex");
                    this.$container.css({
                        position: position === "static" ? "relative" : position,
                        zIndex: zIndex === "auto" ? 0 : zIndex,
                        background: "none"
                    });
                    this.$wrap.css({
                        zIndex: -999998
                    })
                }
                this.$wrap.css({
                    position: this.isBody && supportsFixedPosition ? "fixed" : "absolute"
                });
                this.index = 0;
                this.show(this.index);
                $(window).on("resize.backstretch", $.proxy(this.resize, this)).on("orientationchange.backstretch", $.proxy(function() {
                    if (this.isBody && window.pageYOffset === 0) {
                        window.scrollTo(0, 1);
                        this.resize()
                    }
                }, this))
            };
            Backstretch.prototype = {
                resize: function() {
                    try {
                        var bgCSS = {
                                left: 0,
                                top: 0
                            },
                            rootWidth = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                            bgWidth = rootWidth,
                            rootHeight = this.isBody ? window.innerHeight ? window.innerHeight : this.$root.height() : this.$root.innerHeight(),
                            bgHeight = bgWidth / this.$img.data("ratio"),
                            bgOffset;
                        if (bgHeight >= rootHeight) {
                            bgOffset = (bgHeight - rootHeight) / 2;
                            if (this.options.centeredY) {
                                bgCSS.top = "-" + bgOffset + "px"
                            }
                        } else {
                            bgHeight = rootHeight;
                            bgWidth = bgHeight * this.$img.data("ratio");
                            bgOffset = (bgWidth - rootWidth) / 2;
                            if (this.options.centeredX) {
                                bgCSS.left = "-" + bgOffset + "px"
                            }
                        }
                        this.$wrap.css({
                            width: rootWidth,
                            height: rootHeight
                        }).find("img:not(.deleteable)").css({
                            width: bgWidth,
                            height: bgHeight
                        }).css(bgCSS)
                    } catch (err) {}
                    return this
                },
                show: function(newIndex) {
                    if (Math.abs(newIndex) > this.images.length - 1) {
                        return
                    }
                    var self = this,
                        oldImage = self.$wrap.find("img").addClass("deleteable"),
                        evtOptions = {
                            relatedTarget: self.$container[0]
                        };
                    self.$container.trigger($.Event("backstretch.before", evtOptions), [self, newIndex]);
                    this.index = newIndex;
                    clearInterval(self.interval);
                    self.$img = $("<img />").css(styles.img).bind("load", function(e) {
                        var imgWidth = this.width || $(e.target).width(),
                            imgHeight = this.height || $(e.target).height();
                        $(this).data("ratio", imgWidth / imgHeight);
                        $(this).fadeIn(self.options.speed || self.options.fade, function() {
                            oldImage.remove();
                            if (!self.paused) {
                                self.cycle()
                            }
                            $(["after", "show"]).each(function() {
                                self.$container.trigger($.Event("backstretch." + this, evtOptions), [self, newIndex])
                            })
                        });
                        self.resize()
                    }).appendTo(self.$wrap);
                    self.$img.attr("src", self.images[newIndex]);
                    return self
                },
                next: function() {
                    return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
                },
                prev: function() {
                    return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1)
                },
                pause: function() {
                    this.paused = true;
                    return this
                },
                resume: function() {
                    this.paused = false;
                    this.next();
                    return this
                },
                cycle: function() {
                    if (this.images.length > 1) {
                        clearInterval(this.interval);
                        this.interval = setInterval($.proxy(function() {
                            if (!this.paused) {
                                this.next()
                            }
                        }, this), this.options.duration)
                    }
                    return this
                },
                destroy: function(preserveBackground) {
                    $(window).off("resize.backstretch orientationchange.backstretch");
                    clearInterval(this.interval);
                    if (!preserveBackground) {
                        this.$wrap.remove()
                    }
                    this.$container.removeData("backstretch")
                }
            };
            var supportsFixedPosition = function() {
                var ua = navigator.userAgent,
                    platform = navigator.platform,
                    wkmatch = ua.match(/AppleWebKit\/([0-9]+)/),
                    wkversion = !!wkmatch && wkmatch[1],
                    ffmatch = ua.match(/Fennec\/([0-9]+)/),
                    ffversion = !!ffmatch && ffmatch[1],
                    operammobilematch = ua.match(/Opera Mobi\/([0-9]+)/),
                    omversion = !!operammobilematch && operammobilematch[1],
                    iematch = ua.match(/MSIE ([0-9]+)/),
                    ieversion = !!iematch && iematch[1];
                return !((platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1 || platform.indexOf("iPod") > -1) && wkversion && wkversion < 534 || window.operamini && {}.toString.call(window.operamini) === "[object OperaMini]" || operammobilematch && omversion < 7458 || ua.indexOf("Android") > -1 && wkversion && wkversion < 533 || ffversion && ffversion < 6 || "palmGetResource" in window && wkversion && wkversion < 534 || ua.indexOf("MeeGo") > -1 && ua.indexOf("NokiaBrowser/8.5.0") > -1 || ieversion && ieversion <= 6)
            }()
        })(jQuery, window);
        (function(window, documentElement) {
            "use strict";
            var SectionScrollmation = window.SectionScrollmation = {};
            SectionScrollmation.ImageScrollmation = Backbone.View.extend({
                initialize: function(options) {
                    _.bindAll(this);
                    this.ui = {
                        container: options.container || $(this.$el.data("scrollmation-container")),
                        window: $(window),
                        text: this.$el.find(".scrollmation-text")
                    };
                    this.isBackground = options.isBackground;
                    this.appVent = new Backbone.Wreqr.RequestResponse;
                    this.isTabletDevice = this._isTabletDevice();
                    this.ui.slidesContainer = this.$el.find("[data-scrollmation-slides]");
                    if (this.isBackground && this.isTabletDevice) {
                        if (this.$el.find(".background-overlay").length === 0) {
                            this.$el.append('<div class="background-overlay"></div>')
                        }
                        this.ui.overlay = this.$el.find(".background-overlay");
                        this._prepareSlideShow();
                        if (!this.images.length) {
                            return
                        }
                    } else {
                        this.$el.addClass("scrollmation");
                        this._prepareSlides();
                        if (!this.slides) {
                            return
                        }
                    }
                    this.listen();
                    this.running = false
                },
                _prepareSlideShow: function() {
                    this.$el.addClass("tablet-only");
                    this.ui.slidesContainer.hide();
                    this.images = _.compact(_.map(this.ui.slidesContainer.find("[data-scrollmation-slide]"), function(el) {
                        return el.tagName.toLowerCase() === "div" ? el.getElementsByTagName("img")[0].src : el.src
                    }));
                    if (!this.images.length) {
                        return
                    }
                    this._initBackstretch()
                },
                _initBackstretch: function() {
                    if (this.backstretchInstance && this.backstretchInstance.images) {
                        return
                    }
                    this.backstretchInstance = $("body").data("backstretch");
                    this.$backstretch = $(".backstretch");
                    if (!this.backstretchInstance) {
                        this.backstretchInstance = $("body").backstretch(this.images, {
                            duration: 5e3,
                            fade: 500
                        });
                        this.backstretchInstance.backstretch("pause")
                    } else {
                        this.backstretchInstance.images = _.union(this.backstretchInstance.images, this.images)
                    }
                    this.$backstretch.css("position", "absolute").hide();
                    $(window).on("backstretch.before", $.proxy(this._hideOverlay, this))
                },
                _hideOverlay: function(e, instance, index) {
                    if (!(this.backstretchInstance && _.isArray(this.backstretchInstance.images))) {
                        return
                    }
                    var currentImage = this.backstretchInstance.images[index];
                    if (_.contains(this.images, currentImage) && this.ui.overlay.is(":visible")) {
                        this.ui.overlay.fadeOut(500, "linear")
                    }
                },
                _switchIfVisible: function() {
                    if (!(this.backstretchInstance && this.backstretchInstance.images)) {
                        this._initBackstretch()
                    }
                    var top = $(window).scrollTop();
                    var fold = $(window).height() + top;
                    var middle = $(window).height() / 2 + top;
                    var elTop = this.ui.container.offset().top;
                    var elHeight = this.ui.container.height();
                    var elBottom = elTop + elHeight;
                    var topAboveMiddle = elTop <= middle;
                    var bottomBelowMiddle = elBottom > middle;
                    var belowTheFold = fold <= this.ui.container.offset().top;
                    var aboveTheTop = top >= this.ui.container.offset().top + this.ui.container.height();
                    if (!belowTheFold && !aboveTheTop) {
                        var percent = this.getScrollPercentage();
                        var image = this.getImageAtPercentage(percent);
                        var index = _.indexOf(this.backstretchInstance.images, image);
                        if (topAboveMiddle && bottomBelowMiddle) {
                            if (this.backstretchInstance.index !== index || index === 0 || this.ui.overlay.is(":visible")) {
                                this.$backstretch.data("in-view", this.$el.attr("id")).css("position", "fixed").show();
                                this.backstretchInstance.show(index)
                            }
                        } else if (this.ui.overlay.not(":visible")) {
                            this.ui.overlay.fadeIn(500)
                        }
                    } else {
                        if (this.$backstretch.data("in-view") === this.$el.attr("id")) {
                            this.$backstretch.data("in-view", null);
                            this.$backstretch.css("position", "absolute").hide()
                        }
                    }
                },
                _isTabletDevice: function() {
                    return /iPad/i.test(navigator.userAgent || navigator.vendor || window.opera) || /Android/i.test(navigator.userAgent || navigator.vendor || window.opera) && !/Mobile/i.test(navigator.userAgent || navigator.vendor || window.opera)
                },
                listen: function() {
                    this.listenTo(this.appVent, "scrollmation:slide:activate", this._toggleActivation);
                    this.ui.window.on("resize scroll mousewheel", this.tick)
                },
                destroy: function() {
                    this.ui.window.off("resize scroll mousewheel", this.tick);
                    Backbone.View.prototype.destroy.apply(this, arguments)
                },
                _toggleActivation: function(slideToActivate) {
                    if ($.inArray(slideToActivate, this.slides) !== -1) {
                        $.each(this.slides, function(index, slide) {
                            if (slide) {
                                if (slideToActivate === slide) {
                                    slide.activate()
                                } else {
                                    slide.deactivate()
                                }
                            }
                        })
                    }
                },
                tick: function() {
                    if (!this.running) {
                        window.requestAnimationFrame(this._refresh)
                    }
                    this.running = true
                },
                _refresh: function() {
                    if (this.isBackground && this.isTabletDevice) {
                        this._switchIfVisible()
                    } else {
                        var windowHeight = documentElement.clientHeight;
                        if (this.lastWindowHeight !== windowHeight) {
                            fastdom.write(function() {
                                this.ui.slidesContainer.css("height", windowHeight + "px");
                                this.lastWindowHeight = windowHeight
                            }, this)
                        }
                        this.stickyCheck();
                        fastdom.read(function() {
                            var scrollPercentage = this.scrollPercentage = this.getScrollPercentage();
                            var slideToActivate = this.getSlideAtPercentage(scrollPercentage);
                            if (slideToActivate && slideToActivate !== this.activeSlide) {
                                if (!this.activeSlide || this.activeSlide.mediaType === "image" || !this.activeSlide.isFullScreen) {
                                    fastdom.write(function() {
                                        this.appVent.trigger("scrollmation:slide:activate", slideToActivate);
                                        this.activeSlide = slideToActivate
                                    }, this)
                                }
                            }
                        }, this)
                    }
                    this.running = false
                },
                stickyCheck: function() {
                    fastdom.read(function() {
                        var textHeight = Math.floor(this.ui.text[0].getBoundingClientRect().height);
                        var sectionHeight = Math.floor(this.el.getBoundingClientRect().height);
                        var sticky = this.ui.slidesContainer.data("plugin_sticky");
                        var isShortText = textHeight < sectionHeight;
                        if (sticky && isShortText) {
                            fastdom.runBatch();
                            this.disableSticky()
                        } else if (!isShortText && !sticky) {
                            this.enableSticky()
                        }
                        if (isShortText) {
                            this.trigger("shortTextMode:enabled")
                        } else {
                            this.trigger("shortTextMode:disabled")
                        }
                    }, this)
                },
                enableSticky: function() {
                    this.ui.slidesContainer.sticky({
                        container: this.ui.container,
                        watchOn: window
                    })
                },
                disableSticky: function() {
                    var sticky = this.ui.slidesContainer.data("plugin_sticky");
                    sticky.destroy();
                    this.ui.slidesContainer.data("plugin_sticky", false)
                },
                getScrollPercentage: function() {
                    var absoluteScrollTop = this.ui.window.scrollTop();
                    var viewportHeight = this.ui.window.height();
                    var containerHeight = this.ui.container[0].clientHeight;
                    var relativeScrollTop = absoluteScrollTop - this.ui.container.offset().top;
                    var scrollPercentage = relativeScrollTop / Math.max(1, containerHeight - viewportHeight);
                    scrollPercentage = Math.max(0, scrollPercentage);
                    scrollPercentage = Math.min(1, scrollPercentage);
                    return scrollPercentage
                },
                getSlideAtPercentage: function(percent) {
                    var slideSize = 1 / this.slides.length;
                    return _.find(this.slides, function(slide, i) {
                        var slidePercentage = (i + 1) * slideSize;
                        return slidePercentage >= percent
                    }, this)
                },
                getImageAtPercentage: function(percent) {
                    var imageSize = 1 / this.images.length;
                    return _.find(this.images, function(image, i) {
                        var imagePercentage = (i + 1) * imageSize;
                        return imagePercentage >= percent
                    }, this)
                },
                _prepareSlides: function() {
                    this.prepareSlides();
                    this.ui.window.resize()
                },
                prepareSlides: function() {
                    this.slides = this.ui.slidesContainer.find("[data-scrollmation-slide]").map(this._makeSlide).get()
                },
                render: function() {
                    this._refresh()
                },
                getContentRatio: function() {
                    return this.$el.data("scrollmation-content-ratio")
                },
                _makeSlide: function(i, media) {
                    var tagName = media.tagName.toLowerCase();
                    if (tagName === "div" || tagName === "img" || $(media).find("img").length !== 0) {
                        return new SectionScrollmation.ImageSlide({
                            el: media,
                            isBackground: this.isBackground
                        })
                    } else {
                        return new SectionScrollmation.TwoColumnVideoSlide({
                            el: media
                        })
                    }
                }
            });
            SectionScrollmation.ImageSlide = Backbone.View.extend({
                className: "scrollmation-slide",
                activeClass: "active",
                mediaType: "image",
                initialize: function() {
                    this.$el.addClass(this.className);
                    _.bindAll(this);
                    this._autoscale()
                },
                activate: function() {
                    this._autoscale();
                    this.$el.addClass(this.activeClass)
                },
                deactivate: function() {
                    this.$el.removeClass(this.activeClass)
                },
                _autoscale: function() {
                    if (this.options.isBackground) {
                        this.$el.autoscale({
                            mode: "cover"
                        })
                    }
                }
            });
            SectionScrollmation.TwoColumnVideoSlide = SectionScrollmation.ImageSlide.extend({
                mediaType: "video",
                isFullScreen: false,
                initialize: function() {
                    SectionScrollmation.ImageSlide.prototype.initialize.apply(this, arguments);
                    this.videoJsElement = videojs(this.$el.find(".video-js").get(0));
                    this.videoJsElement.on("fullscreenchange", this.onFullScreenChange)
                },
                onFullScreenChange: function() {
                    this.isFullScreen = this.videoJsElement.isFullScreen
                }
            });
            $("[data-scrollmation]").each(function() {
                var $el = $(this);
                new SectionScrollmation.ImageScrollmation({
                    el: $el,
                    isBackground: $el.data("scrollmation") === "background"
                })
            })
        })(window, document.documentElement);
        (function($, Shorthand) {
            "use strict";
            Shorthand.helpers.transitionEnd = function() {
                var el = document.createElement("bootstrap");
                var transEndEventNames = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                var name;
                for (name in transEndEventNames) {
                    if (el.style[name] !== undefined) {
                        return transEndEventNames[name]
                    }
                }
            }()
        })($, Shorthand);
        (function() {
            "use strict";
            $(function() {
                var running = false;
                var $window = $(window);
                var width = 0;
                var _refresh = function() {
                    fastdom.read(function() {
                        if (Modernizr.mq("only all") && $window.width() > 1e3) {
                            width = $(".scrollmation-two-column:not(.hide) .secondary-column").width();
                            fastdom.write(function() {
                                $(".scrollmation-two-column .scrollmation-slides").each(function() {
                                    $(this).css("width", width !== 0 ? width : "")
                                })
                            })
                        }
                    });
                    running = false
                };
                var tick = function() {
                    if (!running) {
                        window.requestAnimationFrame(_refresh)
                    }
                    running = true
                };
                $window.on("load", tick);
                $window.on("resize", tick)
            })
        })();
        (function($, Device, undefined) {
            "use strict";

            function processVideoBackground(section) {
                var $section = $(section);
                var $video = $section.find("video");
                if (!Modernizr.video) {
                    return
                }
                $video.show();
                _.delay(function() {
                    $section.addClass("show-background")
                }, 2e3)
            }
            $(function() {
                if (Device.isMobile()) {
                    $("#story-body .section-text-over-image").css("background-attachment", "scroll")
                } else {
                    $(".section-text-over-media:has(video)").each(function() {
                        processVideoBackground(this)
                    })
                }
            })
        })($, window.Device)
    }).call(this)
})(false);
