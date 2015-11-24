(function(define) {
    (function() {
        (function(window) {
            "use strict";
            window.Shorthand = {
                UI: {},
                helpers: {},
                Data: {}
            }
        })(window);
        (function(fastdom) {
            "use strict";
            var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(cb) {
                return window.setTimeout(cb, 1e3 / 60)
            };
            var caf = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || function(id) {
                window.clearTimeout(id)
            };

            function FastDom() {
                this.frames = [];
                this.lastId = 0;
                this.raf = raf;
                this.batch = {
                    hash: {},
                    read: [],
                    write: [],
                    mode: null
                }
            }
            FastDom.prototype.read = function(fn, ctx) {
                var job = this.add("read", fn, ctx);
                var id = job.id;
                this.batch.read.push(job.id);
                var doesntNeedFrame = this.batch.mode === "reading" || this.batch.scheduled;
                if (doesntNeedFrame) return id;
                this.scheduleBatch();
                return id
            };
            FastDom.prototype.write = function(fn, ctx) {
                var job = this.add("write", fn, ctx);
                var mode = this.batch.mode;
                var id = job.id;
                this.batch.write.push(job.id);
                var doesntNeedFrame = mode === "writing" || mode === "reading" || this.batch.scheduled;
                if (doesntNeedFrame) return id;
                this.scheduleBatch();
                return id
            };
            FastDom.prototype.defer = function(frame, fn, ctx) {
                if (typeof frame === "function") {
                    ctx = fn;
                    fn = frame;
                    frame = 1
                }
                var self = this;
                var index = frame - 1;
                return this.schedule(index, function() {
                    self.run({
                        fn: fn,
                        ctx: ctx
                    })
                })
            };
            FastDom.prototype.clear = function(id) {
                if (typeof id === "function") {
                    return this.clearFrame(id)
                }
                var job = this.batch.hash[id];
                if (!job) return;
                var list = this.batch[job.type];
                var index = list.indexOf(id);
                delete this.batch.hash[id];
                if (~index) list.splice(index, 1)
            };
            FastDom.prototype.clearFrame = function(frame) {
                var index = this.frames.indexOf(frame);
                if (~index) this.frames.splice(index, 1)
            };
            FastDom.prototype.scheduleBatch = function() {
                var self = this;
                this.schedule(0, function() {
                    self.batch.scheduled = false;
                    self.runBatch()
                });
                this.batch.scheduled = true
            };
            FastDom.prototype.uniqueId = function() {
                return ++this.lastId
            };
            FastDom.prototype.flush = function(list) {
                var id;
                while (id = list.shift()) {
                    this.run(this.batch.hash[id])
                }
            };
            FastDom.prototype.runBatch = function() {
                try {
                    this.batch.mode = "reading";
                    this.flush(this.batch.read);
                    this.batch.mode = "writing";
                    this.flush(this.batch.write);
                    this.batch.mode = null
                } catch (e) {
                    this.runBatch();
                    throw e
                }
            };
            FastDom.prototype.add = function(type, fn, ctx) {
                var id = this.uniqueId();
                return this.batch.hash[id] = {
                    id: id,
                    fn: fn,
                    ctx: ctx,
                    type: type
                }
            };
            FastDom.prototype.run = function(job) {
                var ctx = job.ctx || this;
                var fn = job.fn;
                delete this.batch.hash[job.id];
                if (!this.onError) {
                    return fn.call(ctx)
                }
                try {
                    fn.call(ctx)
                } catch (e) {
                    this.onError(e)
                }
            };
            FastDom.prototype.loop = function() {
                var self = this;
                var raf = this.raf;
                if (this.looping) return;
                raf(function frame() {
                    var fn = self.frames.shift();
                    if (!self.frames.length) {
                        self.looping = false
                    } else {
                        raf(frame)
                    }
                    if (fn) fn()
                });
                this.looping = true
            };
            FastDom.prototype.schedule = function(index, fn) {
                if (this.frames[index]) {
                    return this.schedule(index + 1, fn)
                }
                this.loop();
                return this.frames[index] = fn
            };
            fastdom = fastdom || new FastDom;
            if (typeof module !== "undefined" && module.exports) {
                module.exports = fastdom
            } else if (typeof define === "function" && define.amd) {
                define(function() {
                    return fastdom
                })
            } else {
                window["fastdom"] = fastdom
            }
        })(window.fastdom);
        window.Modernizr = function(a, b, c) {
                function C(a) {
                    j.cssText = a
                }

                function D(a, b) {
                    return C(m.join(a + ";") + (b || ""))
                }

                function E(a, b) {
                    return typeof a === b
                }

                function F(a, b) {
                    return !!~("" + a).indexOf(b)
                }

                function G(a, b) {
                    for (var d in a) {
                        var e = a[d];
                        if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
                    }
                    return !1
                }

                function H(a, b, d) {
                    for (var e in a) {
                        var f = b[a[e]];
                        if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
                    }
                    return !1
                }

                function I(a, b, c) {
                    var d = a.charAt(0).toUpperCase() + a.slice(1),
                        e = (a + " " + o.join(d + " ") + d).split(" ");
                    return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), H(e, b, c))
                }
                var d = "2.8.3",
                    e = {},
                    f = !0,
                    g = b.documentElement,
                    h = "modernizr",
                    i = b.createElement(h),
                    j = i.style,
                    k, l = {}.toString,
                    m = " -webkit- -moz- -o- -ms- ".split(" "),
                    n = "Webkit Moz O ms",
                    o = n.split(" "),
                    p = n.toLowerCase().split(" "),
                    q = {
                        svg: "http://www.w3.org/2000/svg"
                    },
                    r = {},
                    s = {},
                    t = {},
                    u = [],
                    v = u.slice,
                    w, x = function(a, c, d, e) {
                        var f, i, j, k, l = b.createElement("div"),
                            m = b.body,
                            n = m || b.createElement("body");
                        if (parseInt(d, 10))
                            while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
                    },
                    y = function(b) {
                        var c = a.matchMedia || a.msMatchMedia;
                        if (c) return c(b) && c(b).matches || !1;
                        var d;
                        return x("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
                            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
                        }), d
                    },
                    z = function() {
                        function d(d, e) {
                            e = e || b.createElement(a[d] || "div"), d = "on" + d;
                            var f = d in e;
                            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
                        }
                        var a = {
                            select: "input",
                            change: "input",
                            submit: "form",
                            reset: "form",
                            error: "img",
                            load: "img",
                            abort: "img"
                        };
                        return d
                    }(),
                    A = {}.hasOwnProperty,
                    B;
                !E(A, "undefined") && !E(A.call, "undefined") ? B = function(a, b) {
                    return A.call(a, b)
                } : B = function(a, b) {
                    return b in a && E(a.constructor.prototype[b], "undefined")
                }, Function.prototype.bind || (Function.prototype.bind = function(b) {
                    var c = this;
                    if (typeof c != "function") throw new TypeError;
                    var d = v.call(arguments, 1),
                        e = function() {
                            if (this instanceof e) {
                                var a = function() {};
                                a.prototype = c.prototype;
                                var f = new a,
                                    g = c.apply(f, d.concat(v.call(arguments)));
                                return Object(g) === g ? g : f
                            }
                            return c.apply(b, d.concat(v.call(arguments)))
                        };
                    return e
                }), r.touch = function() {
                    var c;
                    return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                        c = a.offsetTop === 9
                    }), c
                }, r.hashchange = function() {
                    return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
                }, r.history = function() {
                    return !!a.history && !!history.pushState
                }, r.borderimage = function() {
                    return I("borderImage")
                }, r.textshadow = function() {
                    return b.createElement("div").style.textShadow === ""
                }, r.cssanimations = function() {
                    return I("animationName")
                }, r.cssgradients = function() {
                    var a = "background-image:",
                        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                        c = "linear-gradient(left top,#9f9, white);";
                    return C((a + "-webkit- ".split(" ").join(b + a) + m.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient")
                }, r.cssreflections = function() {
                    return I("boxReflect")
                }, r.csstransforms = function() {
                    return !!I("transform")
                }, r.csstransforms3d = function() {
                    var a = !!I("perspective");
                    return a && "webkitPerspective" in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                        a = b.offsetLeft === 9 && b.offsetHeight === 3
                    }), a
                }, r.csstransitions = function() {
                    return I("transition")
                }, r.video = function() {
                    var a = b.createElement("video"),
                        c = !1;
                    try {
                        if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
                    } catch (d) {}
                    return c
                }, r.svg = function() {
                    return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
                }, r.inlinesvg = function() {
                    var a = b.createElement("div");
                    return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == q.svg
                }, r.smil = function() {
                    return !!b.createElementNS && /SVGAnimate/.test(l.call(b.createElementNS(q.svg, "animate")))
                }, r.svgclippaths = function() {
                    return !!b.createElementNS && /SVGClipPath/.test(l.call(b.createElementNS(q.svg, "clipPath")))
                };
                for (var J in r) B(r, J) && (w = J.toLowerCase(), e[w] = r[J](), u.push((e[w] ? "" : "no-") + w));
                return e.addTest = function(a, b) {
                        if (typeof a == "object")
                            for (var d in a) B(a, d) && e.addTest(d, a[d]);
                        else {
                            a = a.toLowerCase();
                            if (e[a] !== c) return e;
                            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                        }
                        return e
                    }, C(""), i = k = null,
                    function(a, b) {
                        function l(a, b) {
                            var c = a.createElement("p"),
                                d = a.getElementsByTagName("head")[0] || a.documentElement;
                            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                        }

                        function m() {
                            var a = s.elements;
                            return typeof a == "string" ? a.split(" ") : a
                        }

                        function n(a) {
                            var b = j[a[h]];
                            return b || (b = {}, i++, a[h] = i, j[i] = b), b
                        }

                        function o(a, c, d) {
                            c || (c = b);
                            if (k) return c.createElement(a);
                            d || (d = n(c));
                            var g;
                            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                        }

                        function p(a, c) {
                            a || (a = b);
                            if (k) return a.createDocumentFragment();
                            c = c || n(a);
                            var d = c.frag.cloneNode(),
                                e = 0,
                                f = m(),
                                g = f.length;
                            for (; e < g; e++) d.createElement(f[e]);
                            return d
                        }

                        function q(a, b) {
                            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                                return s.shivMethods ? o(c, a, b) : b.createElem(c)
                            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                            }) + ");return n}")(s, b.frag)
                        }

                        function r(a) {
                            a || (a = b);
                            var c = n(a);
                            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                        }
                        var c = "3.7.0",
                            d = a.html5 || {},
                            e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                            f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                            g, h = "_html5shiv",
                            i = 0,
                            j = {},
                            k;
                        (function() {
                            try {
                                var a = b.createElement("a");
                                a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                                    b.createElement("a");
                                    var a = b.createDocumentFragment();
                                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                                }()
                            } catch (c) {
                                g = !0, k = !0
                            }
                        })();
                        var s = {
                            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                            version: c,
                            shivCSS: d.shivCSS !== !1,
                            supportsUnknownElements: k,
                            shivMethods: d.shivMethods !== !1,
                            type: "default",
                            shivDocument: r,
                            createElement: o,
                            createDocumentFragment: p
                        };
                        a.html5 = s, r(b)
                    }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.mq = y, e.hasEvent = z, e.testProp = function(a) {
                        return G([a])
                    }, e.testAllProps = I, e.testStyles = x, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
            }(this, this.document),
            function(a, b, c) {
                function d(a) {
                    return "[object Function]" == o.call(a)
                }

                function e(a) {
                    return "string" == typeof a
                }

                function f() {}

                function g(a) {
                    return !a || "loaded" == a || "complete" == a || "uninitialized" == a
                }

                function h() {
                    var a = p.shift();
                    q = 1, a ? a.t ? m(function() {
                        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
                    }, 0) : (a(), h()) : q = 0
                }

                function i(a, c, d, e, f, i, j) {
                    function k(b) {
                        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                            "img" != a && m(function() {
                                t.removeChild(l)
                            }, 50);
                            for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                        }
                    }
                    var j = j || B.errorTimeout,
                        l = b.createElement(a),
                        o = 0,
                        r = 0,
                        u = {
                            t: d,
                            s: c,
                            e: f,
                            a: i,
                            x: j
                        };
                    1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                        k.call(this, r)
                    }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
                }

                function j(a, b, c, d, f) {
                    return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
                }

                function k() {
                    var a = B;
                    return a.loader = {
                        load: j,
                        i: 0
                    }, a
                }
                var l = b.documentElement,
                    m = a.setTimeout,
                    n = b.getElementsByTagName("script")[0],
                    o = {}.toString,
                    p = [],
                    q = 0,
                    r = "MozAppearance" in l.style,
                    s = r && !!b.createRange().compareNode,
                    t = s ? l : n.parentNode,
                    l = a.opera && "[object Opera]" == o.call(a.opera),
                    l = !!b.attachEvent && !l,
                    u = r ? "object" : l ? "script" : "img",
                    v = l ? "script" : u,
                    w = Array.isArray || function(a) {
                        return "[object Array]" == o.call(a)
                    },
                    x = [],
                    y = {},
                    z = {
                        timeout: function(a, b) {
                            return b.length && (a.timeout = b[0]), a
                        }
                    },
                    A, B;
                B = function(a) {
                    function b(a) {
                        var a = a.split("!"),
                            b = x.length,
                            c = a.pop(),
                            d = a.length,
                            c = {
                                url: c,
                                origUrl: c,
                                prefixes: a
                            },
                            e, f, g;
                        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                        for (f = 0; f < b; f++) c = x[f](c);
                        return c
                    }

                    function g(a, e, f, g, h) {
                        var i = b(a),
                            j = i.autoCallback;
                        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                            k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                        })))
                    }

                    function h(a, b) {
                        function c(a, c) {
                            if (a) {
                                if (e(a)) c || (j = function() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l()
                                }), g(a, j, b, 0, h);
                                else if (Object(a) === a)
                                    for (n in m = function() {
                                            var b = 0,
                                                c;
                                            for (c in a) a.hasOwnProperty(c) && b++;
                                            return b
                                        }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                        var a = [].slice.call(arguments);
                                        k.apply(this, a), l()
                                    } : j[n] = function(a) {
                                        return function() {
                                            var b = [].slice.call(arguments);
                                            a && a.apply(this, b), l()
                                        }
                                    }(k[n])), g(a[n], j, b, n, h))
                            } else !c && l()
                        }
                        var h = !!a.test,
                            i = a.load || a.both,
                            j = a.callback || f,
                            k = j,
                            l = a.complete || f,
                            m, n;
                        c(h ? a.yep : a.nope, !!i), i && c(i)
                    }
                    var i, j, l = this.yepnope.loader;
                    if (e(a)) g(a, 0, l, 0);
                    else if (w(a))
                        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
                    else Object(a) === a && h(a, l)
                }, B.addPrefix = function(a, b) {
                    z[a] = b
                }, B.addFilter = function(a) {
                    x.push(a)
                }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
                    b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
                }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
                    var k = b.createElement("script"),
                        l, o, e = e || B.errorTimeout;
                    k.src = a;
                    for (o in d) k.setAttribute(o, d[o]);
                    c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
                    }, m(function() {
                        l || (l = 1, c(1))
                    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
                }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
                    var e = b.createElement("link"),
                        j, c = i ? h : c || f;
                    e.href = a, e.rel = "stylesheet", e.type = "text/css";
                    for (j in d) e.setAttribute(j, d[j]);
                    g || (n.parentNode.insertBefore(e, n), m(c, 0))
                }
            }(this, document), Modernizr.load = function() {
                yepnope.apply(window, [].slice.call(arguments, 0))
            };
        (function(e) {
            function g(e, t, n, r) {
                for (var i, s = n.slice(), o = w(t, e), u = 0, a = s.length; u < a; u++) {
                    handler = s[u], typeof handler == "object" && typeof handler.handleEvent == "function" ? handler.handleEvent(o) : handler.call(e, o);
                    if (o.stoppedImmediatePropagation) break
                }
                return i = !o.stoppedPropagation, r && i && e.parentNode ? e.parentNode.dispatchEvent(o) : !o.defaultPrevented
            }

            function y(e, t) {
                return {
                    configurable: !0,
                    get: e,
                    set: t
                }
            }

            function b(e, t, n) {
                var r = f(t || e, n);
                u(e, "textContent", y(function() {
                    return r.get.call(this)
                }, function(e) {
                    r.set.call(this, e)
                }))
            }

            function w(e, t) {
                return e.currentTarget = t, e.eventPhase = e.target === e.currentTarget ? 2 : 3, e
            }

            function E(e, t) {
                var n = e.length;
                while (n-- && e[n] !== t);
                return n
            }

            function S() {
                if (this.tagName === "BR") return "\n";
                var e = this.firstChild,
                    t = [];
                while (e) e.nodeType !== 8 && e.nodeType !== 7 && t.push(e.textContent), e = e.nextSibling;
                return t.join("")
            }

            function x(e) {
                return e.nodeType !== 9 && document.documentElement.contains(e)
            }

            function T(e) {
                !n && d.test(document.readyState) && (n = !n, document.detachEvent(r, T), e = document.createEvent("Event"), e.initEvent(i, !0, !0), document.dispatchEvent(e))
            }

            function N(e) {
                var t;
                while (t = this.lastChild) this.removeChild(t);
                e != null && this.appendChild(document.createTextNode(e))
            }

            function C(t, n) {
                return n || (n = e.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = (new Date).getTime()), n
            }
            if (document.createEvent) return;
            var t = !0,
                n = !1,
                r = "onreadystatechange",
                i = "DOMContentLoaded",
                s = "__IE8__" + Math.random(),
                o = e.Object,
                u = o.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = o.defineProperties || function(t, n) {
                    for (var r in n)
                        if (l.call(n, r)) try {
                            u(t, r, n[r])
                        } catch (i) {
                            e.console && console.log(r + " failed on object:", t, i.message)
                        }
                },
                f = o.getOwnPropertyDescriptor,
                l = o.prototype.hasOwnProperty,
                c = e.Element.prototype,
                h = e.Text.prototype,
                p = /^[a-z]+$/,
                d = /loaded|complete/,
                v = {},
                m = document.createElement("div");
            b(e.HTMLCommentElement.prototype, c, "nodeValue"), b(e.HTMLScriptElement.prototype, null, "text"), b(h, null, "nodeValue"), b(e.HTMLTitleElement.prototype, null, "text"), u(e.HTMLStyleElement.prototype, "textContent", function(e) {
                return y(function() {
                    return e.get.call(this.styleSheet)
                }, function(t) {
                    e.set.call(this.styleSheet, t)
                })
            }(f(e.CSSStyleSheet.prototype, "cssText"))), a(c, {
                textContent: {
                    get: S,
                    set: N
                },
                firstElementChild: {
                    get: function() {
                        for (var e = this.childNodes || [], t = 0, n = e.length; t < n; t++)
                            if (e[t].nodeType == 1) return e[t]
                    }
                },
                lastElementChild: {
                    get: function() {
                        for (var e = this.childNodes || [], t = e.length; t--;)
                            if (e[t].nodeType == 1) return e[t]
                    }
                },
                previousElementSibling: {
                    get: function() {
                        var e = this.previousSibling;
                        while (e && e.nodeType != 1) e = e.previousSibling;
                        return e
                    }
                },
                nextElementSibling: {
                    get: function() {
                        var e = this.nextSibling;
                        while (e && e.nodeType != 1) e = e.nextSibling;
                        return e
                    }
                },
                childElementCount: {
                    get: function() {
                        for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += t[n].nodeType == 1);
                        return e
                    }
                },
                addEventListener: {
                    value: function(e, t, n) {
                        var r = this,
                            i = "on" + e,
                            o = r[s] || u(r, s, {
                                value: {}
                            })[s],
                            a = o[i] || (o[i] = {}),
                            f = a.h || (a.h = []),
                            c;
                        if (!l.call(a, "w")) {
                            a.w = function(e) {
                                return e[s] || g(r, C(r, e), f, !1)
                            };
                            if (!l.call(v, i))
                                if (p.test(e)) try {
                                    c = document.createEventObject(), c[s] = !0, r.nodeType != 9 && r.parentNode == null && m.appendChild(r), r.fireEvent(i, c), v[i] = !0
                                } catch (c) {
                                    v[i] = !1;
                                    while (m.hasChildNodes()) m.removeChild(m.firstChild)
                                } else v[i] = !1;
                                (a.n = v[i]) && r.attachEvent(i, a.w)
                        }
                        E(f, t) < 0 && f[n ? "unshift" : "push"](t)
                    }
                },
                dispatchEvent: {
                    value: function(e) {
                        var t = this,
                            n = "on" + e.type,
                            r = t[s],
                            i = r && r[n],
                            o = !!i,
                            u;
                        return e.target || (e.target = t), o ? i.n ? t.fireEvent(n, e) : g(t, e, i.h, !0) : (u = t.parentNode) ? u.dispatchEvent(e) : !0, !e.defaultPrevented
                    }
                },
                removeEventListener: {
                    value: function(e, t, n) {
                        var r = this,
                            i = "on" + e,
                            o = r[s],
                            u = o && o[i],
                            a = u && u.h,
                            f = a ? E(a, t) : -1; - 1 < f && a.splice(f, 1)
                    }
                }
            }), a(h, {
                addEventListener: {
                    value: c.addEventListener
                },
                dispatchEvent: {
                    value: c.dispatchEvent
                },
                removeEventListener: {
                    value: c.removeEventListener
                }
            }), a(e.XMLHttpRequest.prototype, {
                addEventListener: {
                    value: function(e, t, n) {
                        var r = this,
                            i = "on" + e,
                            o = r[s] || u(r, s, {
                                value: {}
                            })[s],
                            a = o[i] || (o[i] = {}),
                            f = a.h || (a.h = []);
                        E(f, t) < 0 && (r[i] || (r[i] = function() {
                            var t = document.createEvent("Event");
                            t.initEvent(e, !0, !0), r.dispatchEvent(t)
                        }), f[n ? "unshift" : "push"](t))
                    }
                },
                dispatchEvent: {
                    value: function(e) {
                        var t = this,
                            n = "on" + e.type,
                            r = t[s],
                            i = r && r[n],
                            o = !!i;
                        return o && (i.n ? t.fireEvent(n, e) : g(t, e, i.h, !0))
                    }
                },
                removeEventListener: {
                    value: c.removeEventListener
                }
            }), a(e.Event.prototype, {
                bubbles: {
                    value: !0,
                    writable: !0
                },
                cancelable: {
                    value: !0,
                    writable: !0
                },
                preventDefault: {
                    value: function() {
                        this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1)
                    }
                },
                stopPropagation: {
                    value: function() {
                        this.stoppedPropagation = !0, this.cancelBubble = !0
                    }
                },
                stopImmediatePropagation: {
                    value: function() {
                        this.stoppedImmediatePropagation = !0, this.stopPropagation()
                    }
                },
                initEvent: {
                    value: function(e, t, n) {
                        this.type = e, this.bubbles = !!t, this.cancelable = !!n, this.bubbles || this.stopPropagation()
                    }
                }
            }), a(e.HTMLDocument.prototype, {
                textContent: {
                    get: function() {
                        return this.nodeType === 11 ? S.call(this) : null
                    },
                    set: function(e) {
                        this.nodeType === 11 && N.call(this, e)
                    }
                },
                addEventListener: {
                    value: function(n, s, o) {
                        var u = this;
                        c.addEventListener.call(u, n, s, o), t && n === i && !d.test(u.readyState) && (t = !1, u.attachEvent(r, T), e == top && function a(e) {
                            try {
                                u.documentElement.doScroll("left"), T()
                            } catch (t) {
                                setTimeout(a, 50)
                            }
                        }())
                    }
                },
                dispatchEvent: {
                    value: c.dispatchEvent
                },
                removeEventListener: {
                    value: c.removeEventListener
                },
                createEvent: {
                    value: function(e) {
                        var t;
                        if (e !== "Event") throw new Error("unsupported " + e);
                        return t = document.createEventObject(), t.timeStamp = (new Date).getTime(), t
                    }
                }
            }), a(e.Window.prototype, {
                getComputedStyle: {
                    value: function() {
                        function i(e) {
                            this._ = e
                        }

                        function s() {}
                        var e = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,
                            t = /^(top|right|bottom|left)$/,
                            n = /\-([a-z])/g,
                            r = function(e, t) {
                                return t.toUpperCase()
                            };
                        return i.prototype.getPropertyValue = function(i) {
                                var s = this._,
                                    o = s.style,
                                    u = s.currentStyle,
                                    a = s.runtimeStyle,
                                    f, l, c;
                                return i = (i === "float" ? "style-float" : i).replace(n, r), f = u ? u[i] : o[i], e.test(f) && !t.test(i) && (l = o.left, c = a && a.left, c && (a.left = u.left), o.left = i === "fontSize" ? "1em" : f, f = o.pixelLeft + "px", o.left = l, c && (a.left = c)), f == null ? f : f + "" || "auto"
                            }, s.prototype.getPropertyValue = function() {
                                return null
                            },
                            function(e, t) {
                                return t ? new s(e) : new i(e)
                            }
                    }()
                },
                addEventListener: {
                    value: function(t, n, r) {
                        var i = e,
                            o = "on" + t,
                            u;
                        i[o] || (i[o] = function(e) {
                            return g(i, C(i, e), u, !1)
                        }), u = i[o][s] || (i[o][s] = []), E(u, n) < 0 && u[r ? "unshift" : "push"](n)
                    }
                },
                dispatchEvent: {
                    value: function(t) {
                        var n = e["on" + t.type];
                        return n ? n.call(e, t) !== !1 && !t.defaultPrevented : !0
                    }
                },
                removeEventListener: {
                    value: function(t, n, r) {
                        var i = "on" + t,
                            u = (e[i] || o)[s],
                            a = u ? E(u, n) : -1; - 1 < a && u.splice(a, 1)
                    }
                }
            })
        })(this);
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(cb) {
            window.setTimeout(function() {
                cb(+new Date)
            }, 1e3 / 60)
        };
        (function(window) {
            "use strict";
            var userAgent = function() {
                return navigator.userAgent || navigator.vendor || window.opera
            };
            var testUserAgent = function(pattern) {
                return pattern.test(userAgent())
            };
            var Device = window.Device = {
                isAndroid: function() {
                    return testUserAgent(/Android/i)
                },
                isAndroidPhone: function() {
                    return testUserAgent(/Android/i) && testUserAgent(/Mobile/i)
                },
                isAndroidTablet: function() {
                    return testUserAgent(/Android/i) && !testUserAgent(/Mobile/i)
                },
                isBlackBerry: function() {
                    return testUserAgent(/BlackBerry/i)
                },
                isiOS: function() {
                    return testUserAgent(/iP(hone|od|ad)/i)
                },
                iPhoneOSVersion: function() {
                    var userAgentStr = userAgent();
                    if (userAgentStr) {
                        var matches = userAgentStr.match(/(iPhone OS )((\d{1,2})*(_\d{1,2})*(_\d{1,2}))/);
                        if (matches && matches.length > 2) {
                            return matches[2]
                        }
                    }
                    return null
                },
                isiPhone: function() {
                    return testUserAgent(/iPhone/i)
                },
                isiPad: function() {
                    return testUserAgent(/iPad/i)
                },
                isOpera: function() {
                    return testUserAgent(/Opera M(obi|ini)/i)
                },
                isChrome: function() {
                    return !!window.chrome
                },
                isWindows: function() {
                    return testUserAgent(/IEMobile/i)
                },
                isMobile: function() {
                    return Device.isAndroid() || Device.isBlackBerry() || Device.isiOS() || Device.isOpera() || Device.isWindows()
                },
                isMac: function() {
                    return navigator.platform === "MacIntel"
                },
                isRetina: function() {
                    return window.devicePixelRatio >= 2
                },
                isMacRetinaChrome: function() {
                    return Device.isChrome() && Device.isMac() && Device.isRetina()
                }
            }
        })(window);
        (function(window, documentElement, Device, fastdom) {
            "use strict";

            function bind(func, thisValue) {
                return function() {
                    return func.apply(thisValue, arguments)
                }
            }

            function ViewportHeight(el, options) {
                this.el = el;
                this._registeredEventCallbacks = [];
                this.options = {};
                this.setOptions(options || {});
                this.isiPhone = Device.isiPhone();
                if (this.isiPhone) {
                    this.isiPhoneOSAfter81 = this.versionCompare("8_1_1", Device.iPhoneOSVersion()) < 0
                }
                this.isMobile = Device.isMobile();
                this.isDesktop = !this.isMobile;
                this.isiPad = Device.isiPad();
                this.isAndroidPhone = Device.isAndroidPhone();
                this.isAndroidTablet = Device.isAndroidTablet();
                this.initialize()
            }
            ViewportHeight._bind = bind;
            ViewportHeight.DEFAULTS = {
                property: "height",
                navigationSelector: ".section-navigation",
                headerSelector: ".section-header"
            };
            ViewportHeight.iPhone4And5SystemBarsHeight = 88;
            ViewportHeight.iPhone6And6PlusSystemBarsHeight = 44;
            ViewportHeight.iPhoneSystemBarPortraitHeight = 70;
            ViewportHeight.iPadSystemBarDifference = 24;
            ViewportHeight.androidPhoneSystemBarDifference = 56;
            ViewportHeight.androidTabletSystemBarDifference = 96;
            ViewportHeight.iPhone4And5TitleViewportHeight = 232;
            ViewportHeight.IPHONE_SYSTEM_BAR_ADJUSTMENTS = {
                232: ViewportHeight.iPhone4And5SystemBarsHeight,
                320: -ViewportHeight.iPhone4And5SystemBarsHeight,
                331: ViewportHeight.iPhone6And6PlusSystemBarsHeight,
                375: -ViewportHeight.iPhone6And6PlusSystemBarsHeight,
                370: ViewportHeight.iPhone6And6PlusSystemBarsHeight,
                414: -ViewportHeight.iPhone6And6PlusSystemBarsHeight
            };
            ViewportHeight.IPHONE_SYSTEM_BAR_HEIGHTS = {
                232: ViewportHeight.iPhone4And5SystemBarsHeight,
                331: ViewportHeight.iPhone6And6PlusSystemBarsHeight,
                370: ViewportHeight.iPhone6And6PlusSystemBarsHeight
            };
            ViewportHeight.getViewportHeight = function() {
                return window.innerHeight || documentElement.clientHeight
            };
            ViewportHeight.getViewportWidth = function() {
                return window.innerWidth || documentElement.clientWidth
            };
            ViewportHeight.prototype = {
                initialize: function() {
                    this.navigation = this._getNavigation();
                    this.header = this._getHeader();
                    this.registerWindowEvents(ViewportHeight._bind(this.handleResize, this));
                    this.refresh()
                },
                setOptions: function(options) {
                    var propertyAttrValue = this.el.getAttribute("data-viewport-height-property");
                    var ignoreOrientationAttrValue = this.el.getAttribute("data-viewport-height-ignore-orientation");
                    this.options = {};
                    for (var opt in ViewportHeight.DEFAULTS) {
                        if (ViewportHeight.DEFAULTS.hasOwnProperty(opt)) {
                            this.options[opt] = ViewportHeight.DEFAULTS[opt]
                        }
                    }
                    if ("property" in options) {
                        this.options.property = options.property
                    } else if (propertyAttrValue) {
                        this.options.property = propertyAttrValue
                    }
                    if ("ignoreOrientation" in options) {
                        this.options.ignoreOrientation = options.ignoreOrientation
                    } else if (ignoreOrientationAttrValue) {
                        this.options.ignoreOrientation = ignoreOrientationAttrValue
                    }
                    this.options.property = this._hyphensToCamelCase(this.options.property)
                },
                getAdjustedViewport: function(done) {
                    fastdom.read(function() {
                        var viewportHeight = ViewportHeight.getViewportHeight();
                        var viewportWidth = ViewportHeight.getViewportWidth();
                        if ("ignoreOrientation" in this.options) {
                            var viewportRatio = viewportWidth / viewportHeight;
                            if (this.options.ignoreOrientation === "portrait" && viewportRatio < 1) {
                                this.clear();
                                return
                            } else if (this.options.ignoreOrientation === "landscape" && viewportRatio >= 1) {
                                this.clear();
                                return
                            }
                        }
                        var fixedElementsHeight = this.getFixedElementsHeight();
                        var viewableViewportHeight = viewportHeight - fixedElementsHeight;
                        if (this.isiPhone) {
                            viewableViewportHeight += this._getiPhoneHeightAdjustment(viewportHeight)
                        } else if (this.isiPad) {
                            viewableViewportHeight += this._getiPadHeightAdjustment()
                        } else if (this.isDesktop) {
                            viewableViewportHeight += this._getDesktopHeightAdjustment()
                        } else if (this.isAndroidPhone) {
                            viewableViewportHeight += this._getAndroidPhoneHeightAdjustment()
                        } else if (this.isAndroidTablet) {
                            viewableViewportHeight += this._getAndroidTabletHeightAdjustment()
                        }
                        done(viewableViewportHeight, viewportWidth)
                    }, this)
                },
                registerWindowEvents: function(fn) {
                    window.addEventListener("resize", fn);
                    window.addEventListener("orientationchange", fn);
                    this._registeredEventCallbacks.push(fn)
                },
                removeWindowEvents: function() {
                    for (var i = 0, l = this._registeredEventCallbacks.length; i < l; i++) {
                        window.removeEventListener("resize", this._registeredEventCallbacks[i]);
                        window.removeEventListener("orientationchange", this._registeredEventCallbacks[i])
                    }
                },
                destroy: function() {
                    this.removeWindowEvents();
                    this.clear();
                    delete this.el.viewportHeight
                },
                handleResize: function() {
                    this.refresh()
                },
                refresh: function() {
                    this.getAdjustedViewport(bind(function(viewableViewportHeight, viewportWidth) {
                        if (this.isMobile && this.previousViewportWidth === viewportWidth) {
                            return
                        }
                        this.previousViewportWidth = viewportWidth;
                        fastdom.write(function() {
                            this.el.style[this.options.property] = viewableViewportHeight + "px"
                        }, this)
                    }, this))
                },
                clear: function() {
                    fastdom.write(function() {
                        this.previousViewportWidth = false;
                        this.el.style[this.options.property] = ""
                    }, this)
                },
                _getiPhoneHeightAdjustment: function(viewportHeight) {
                    var header = this._getHeader();
                    if (!header) {
                        return 0
                    }
                    if (this._isTitleSection()) {
                        if (this._getCSSValue(header, "position") !== "fixed" && this._getCSSValue(header, "display") !== "none") {
                            if (viewportHeight === ViewportHeight.iPhone4And5TitleViewportHeight) {
                                return this._getIphoneSystemBarAdjustmentValue(viewportHeight) - this._getElementHeight(header)
                            }
                            if (this.isiPhoneOSAfter81) {
                                return -this._getElementHeight(header)
                            }
                            return this._getIphoneSystemBarAdjustmentValue(viewportHeight) - this._getElementHeight(header)
                        }
                    } else {
                        if (this._getCSSValue(header, "position") !== "fixed" && this._getCSSValue(header, "display") !== "none") {
                            return this._getIphoneSystemBarsVisibleHeight(viewportHeight)
                        } else {
                            return ViewportHeight.iPhoneSystemBarPortraitHeight
                        }
                    }
                    return 0
                },
                _getIphoneSystemBarAdjustmentValue: function(viewportHeight) {
                    var systemBarAdjustmentValue = ViewportHeight.IPHONE_SYSTEM_BAR_ADJUSTMENTS[viewportHeight];
                    if (!systemBarAdjustmentValue) {
                        systemBarAdjustmentValue = 0
                    }
                    return systemBarAdjustmentValue
                },
                _getIphoneSystemBarsVisibleHeight: function(viewportHeight) {
                    var barDisplayHeight = ViewportHeight.IPHONE_SYSTEM_BAR_HEIGHTS[viewportHeight];
                    if (!barDisplayHeight) {
                        barDisplayHeight = 0
                    }
                    return barDisplayHeight
                },
                _getiPadHeightAdjustment: function() {
                    if (this._isTitleSection()) {
                        return 0
                    } else {
                        return ViewportHeight.iPadSystemBarDifference
                    }
                },
                _getAndroidPhoneHeightAdjustment: function() {
                    if (this._isTitleSection()) {
                        return 0
                    } else {
                        return ViewportHeight.androidPhoneSystemBarDifference
                    }
                },
                _getAndroidTabletHeightAdjustment: function() {
                    var header = this._getHeader();
                    if (this._isTitleSection() && header) {
                        var navigation = this._getNavigation();
                        if (this._getCSSValue(header, "display") !== "none" && this._getCSSValue(header, "position") !== "fixed") {
                            return this._titleLandscapeAdjustment(header, navigation)
                        }
                    } else {
                        return ViewportHeight.androidTabletSystemBarDifference
                    }
                    return 0
                },
                _getDesktopHeightAdjustment: function() {
                    var header = this._getHeader();
                    if (this._isTitleSection() && header) {
                        var navigation = this._getNavigation();
                        if (this._getCSSValue(header, "display") !== "none" && this._getCSSValue(header, "position") !== "fixed") {
                            return this._titleLandscapeAdjustment(header, navigation)
                        } else {
                            if (this._getCSSValue(header, "display") !== "none" && this._getCSSValue(header, "position") === "fixed") {
                                var topPageElement = 0;
                                if (!navigation) {
                                    topPageElement = -this._getElementHeight(header)
                                }
                                return topPageElement
                            }
                        }
                    }
                    return 0
                },
                _titleLandscapeAdjustment: function(header, navigation) {
                    var navHeight = 0;
                    if (navigation) {
                        navHeight = this._getElementHeight(navigation)
                    }
                    return -(this._getElementHeight(header) - navHeight)
                },
                _getNavigation: function() {
                    if (!this.navigation) {
                        this.navigation = document.querySelector(this.options.navigationSelector)
                    }
                    return this.navigation
                },
                _getHeader: function() {
                    if (!this.header) {
                        this.header = document.querySelector(this.options.headerSelector)
                    }
                    return this.header
                },
                _isTitleSection: function() {
                    return this.el.className.indexOf("section-title") !== -1
                },
                _hyphensToCamelCase: function(string) {
                    return string.replace(/\-([a-z])/gi, function(s, g1) {
                        return g1.toUpperCase()
                    })
                },
                getFixedElementsHeight: function() {
                    var header = this._getHeader();
                    var navigation = this._getNavigation();
                    if (!navigation || !header) {
                        return 0
                    }
                    if (this.isiPhone && this._getCSSValue(header, "position") !== "fixed" && this._getCSSValue(header, "display") !== "none") {
                        return 0
                    }
                    if (this._getCSSValue(header, "position") === "fixed") {
                        return this._getElementHeight(header)
                    }
                    if (this._getCSSValue(navigation, "display") !== "none") {
                        return this._getElementHeight(navigation)
                    }
                    return 0
                },
                _getCSSValue: function(el, property) {
                    if (window.getComputedStyle) {
                        return window.getComputedStyle(el)[property]
                    } else if (el.currentStyle) {
                        return el.currentStyle[property]
                    } else {
                        return null
                    }
                },
                _getElementHeight: function(el) {
                    return el.offsetHeight
                },
                versionCompare: function(v1, v2, options) {
                    if (!v1 || !v2) {
                        return
                    }
                    var lexicographical = options && options.lexicographical,
                        zeroExtend = options && options.zeroExtend,
                        v1parts = v1.split("_"),
                        v2parts = v2.split("_");

                    function isValidPart(x) {
                        return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x)
                    }
                    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
                        return NaN
                    }
                    if (zeroExtend) {
                        while (v1parts.length < v2parts.length) v1parts.push("0");
                        while (v2parts.length < v1parts.length) v2parts.push("0")
                    }
                    if (!lexicographical) {
                        v1parts = v1parts.map(Number);
                        v2parts = v2parts.map(Number)
                    }
                    for (var i = 0; i < v1parts.length; ++i) {
                        if (v2parts.length === i) {
                            return 1
                        }
                        if (v1parts[i] === v2parts[i]) {
                            continue
                        } else if (v1parts[i] > v2parts[i]) {
                            return 1
                        } else {
                            return -1
                        }
                    }
                    if (v1parts.length !== v2parts.length) {
                        return -1
                    }
                    return 0
                }
            };
            ViewportHeight.attachTo = function(el, options) {
                if (el.viewportHeight) {
                    el.viewportHeight.refresh()
                } else {
                    el.viewportHeight = new ViewportHeight(el, options)
                }
                return el.viewportHeight
            };
            ViewportHeight.refreshAll = function() {
                var elements = document.querySelectorAll("[data-viewport-height]");
                for (var i = 0, len = elements.length; i < len; i++) {
                    ViewportHeight.attachTo(elements[i])
                }
            };
            window.addEventListener("load", ViewportHeight.refreshAll);
            window.ViewportHeight = ViewportHeight
        })(window, document.documentElement, window.Device, window.fastdom);
        (function(win, doc) {
            "use strict";
            var VUnit = {
                settings: {
                    stylesheetId: "v-unit-sheet",
                    executionInterval: 100
                },
                viewportSize: {
                    height: 0,
                    width: 0
                },
                init: function() {
                    VUnit.viewportHasChanged();
                    VUnit.setViewportObserver()
                },
                setViewportObserver: function() {
                    return win.setInterval(VUnit.viewportHasChanged, VUnit.settings.executionInterval)
                },
                viewportHasChanged: function() {
                    var oldHeight = VUnit.viewportSize.height,
                        oldWidth = VUnit.viewportSize.width,
                        newDimensions = VUnit.viewportCalculator();
                    if (newDimensions.height != oldHeight || newDimensions.width != oldWidth) {
                        VUnit.generalHandler()
                    }
                },
                createStylesheet: function() {
                    var stylesheet = doc.createElement("style");
                    stylesheet.rel = "stylesheet";
                    stylesheet.type = "text/css";
                    stylesheet.id = VUnit.settings.stylesheetId;
                    return stylesheet
                },
                setStylesheetCSSRules: function(stylesheet) {
                    var viewportSize = VUnit.viewportCalculator();
                    var computedHeight = viewportSize.height / 100,
                        computedWidth = viewportSize.width / 100,
                        rules = "";
                    for (var i = 1; i <= 100; i++) {
                        rules += ".vh" + i + "{height:" + Math.round(computedHeight * i) + "px;}" + ".vw" + i + "{width:" + Math.round(computedWidth * i) + "px;}\n"
                    }
                    if (stylesheet.styleSheet) {
                        stylesheet.styleSheet.cssText = rules
                    } else {
                        stylesheet.appendChild(doc.createTextNode(rules))
                    }
                },
                appendStylesheetOnHead: function(stylesheet) {
                    var legacyStylesheet = doc.getElementById(VUnit.settings.stylesheetId),
                        head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
                    legacyStylesheet && head.removeChild(legacyStylesheet);
                    head.appendChild(stylesheet)
                },
                viewportCalculator: function() {
                    var viewportSize = {
                        height: doc.documentElement.clientHeight,
                        width: doc.documentElement.clientWidth
                    };
                    VUnit.viewportSize = viewportSize;
                    return viewportSize
                },
                generalHandler: function() {
                    var stylesheet = VUnit.createStylesheet();
                    VUnit.setStylesheetCSSRules(stylesheet);
                    VUnit.appendStylesheetOnHead(stylesheet)
                }
            };
            VUnit.init()
        })(window, document);
        (function(ViewportHeight, helpers) {
            "use strict";
            helpers.isPortrait = function isPortrait() {
                return ViewportHeight.getViewportHeight() > ViewportHeight.getViewportWidth()
            }
        })(ViewportHeight, Shorthand.helpers);
        (function(Shorthand, ViewportHeight) {
            "use strict";
            var viewportHeight = new ViewportHeight(document.createElement("div"));
            Shorthand.translateImage = function translateImage(image, offsetAdjustment) {
                fastdom.read(function() {
                    var offset = -image.parentElement.getBoundingClientRect().top;
                    offset += offsetAdjustment;
                    var translation = "translate3d(0, " + offset + "px, 0)";
                    fastdom.write(function() {
                        image.style.transform = translation
                    })
                })
            };
            Shorthand.translateImages = function translateImages(images) {
                var fixedElementHeight = viewportHeight.getFixedElementsHeight();
                _.each(images, function(image) {
                    Shorthand.translateImage(image, fixedElementHeight)
                })
            }
        })(Shorthand, ViewportHeight)
    }).call(this)
})(false);
