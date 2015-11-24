(function(define) {
    (function() {
        ! function(e, t, n) {
            "use strict";
            var r, a, l, i = {
                    minHeight: 0,
                    elements: [],
                    percentage: !0,
                    userTiming: !0,
                    pixelDepth: !0
                },
                o = e(t),
                c = [],
                u = 0;
            e.scrollDepth = function(h) {
                function p(e, t, n, i) {
                    l ? (dataLayer.push({
                        event: "ScrollDistance",
                        eventCategory: "Scroll Depth",
                        eventAction: e,
                        eventLabel: t,
                        eventValue: 1,
                        eventNonInteraction: !0
                    }), h.pixelDepth && arguments.length > 2 && n > u && (u = n, dataLayer.push({
                        event: "ScrollDistance",
                        eventCategory: "Scroll Depth",
                        eventAction: "Pixel Depth",
                        eventLabel: f(n),
                        eventValue: 1,
                        eventNonInteraction: !0
                    })), h.userTiming && arguments.length > 3 && dataLayer.push({
                        event: "ScrollTiming",
                        eventCategory: "Scroll Depth",
                        eventAction: e,
                        eventLabel: t,
                        eventTiming: i
                    })) : (r && (ga("send", "event", "Scroll Depth", e, t, 1, {
                        nonInteraction: 1
                    }), h.pixelDepth && arguments.length > 2 && n > u && (u = n, ga("send", "event", "Scroll Depth", "Pixel Depth", f(n), 1, {
                        nonInteraction: 1
                    })), h.userTiming && arguments.length > 3 && ga("send", "timing", "Scroll Depth", e, i, t)), a && (_gaq.push(["_trackEvent", "Scroll Depth", e, t, 1, !0]), h.pixelDepth && arguments.length > 2 && n > u && (u = n, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", f(n), 1, !0])), h.userTiming && arguments.length > 3 && _gaq.push(["_trackTiming", "Scroll Depth", e, i, t, 100])))
                }

                function g(e) {
                    return {
                        "25%": parseInt(.25 * e, 10),
                        "50%": parseInt(.5 * e, 10),
                        "75%": parseInt(.75 * e, 10),
                        "100%": e - 5
                    }
                }

                function s(t, n, r) {
                    e.each(t, function(t, a) {
                        -1 === e.inArray(t, c) && n >= a && (p("Percentage", t, n, r), c.push(t))
                    })
                }

                function v(t, n, r) {
                    e.each(t, function(t, a) {
                        -1 === e.inArray(a, c) && e(a).length && n >= e(a).offset().top && (p("Elements", a, n, r), c.push(a))
                    })
                }

                function f(e) {
                    return (250 * Math.floor(e / 250)).toString()
                }

                function m(e, t) {
                    var n, r, a, l = null,
                        i = 0,
                        o = function() {
                            i = new Date, l = null, a = e.apply(n, r)
                        };
                    return function() {
                        var c = new Date;
                        i || (i = c);
                        var u = t - (c - i);
                        return n = this, r = arguments, 0 >= u ? (clearTimeout(l), l = null, i = c, a = e.apply(n, r)) : l || (l = setTimeout(o, u)), a
                    }
                }
                var D = +new Date;
                h = e.extend({}, i, h), e(n).height() < h.minHeight || ("function" == typeof ga && (r = !0), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (a = !0), "undefined" != typeof dataLayer && "function" == typeof dataLayer.push && (l = !0), p("Percentage", "Baseline"), o.on("scroll.scrollDepth", m(function() {
                    var r = e(n).height(),
                        a = t.innerHeight ? t.innerHeight : o.height(),
                        l = o.scrollTop() + a,
                        i = g(r),
                        u = +new Date - D;
                    return c.length >= 4 + h.elements.length ? void o.off("scroll.scrollDepth") : (h.elements && v(h.elements, l, u), void(h.percentage && s(i, l, u)))
                }, 500)))
            }
        }(jQuery, window, document);
        (function() {
            "use strict";
            var copyElements = "copy-elements";
            $("[data-" + copyElements + "]").each(function(index, el) {
                var $el = $(el);
                var elementsSelector = $el.data(copyElements);
                var elements = $(elementsSelector);
                $el.append(elements.clone())
            })
        })();
        (function() {
            "use strict";
            var running = false;
            var $window = $(window);
            var _refresh = function() {
                if ($window.width() > 700) {
                    $("[data-possible-scrollmation]").each(function() {
                        this.removeAttribute("data-possible-scrollmation");
                        new window.SectionScrollmation.ImageScrollmation({
                            el: this,
                            isBackground: false
                        })
                    })
                } else {}
            };
            var tick = function() {
                if (!running) {
                    window.requestAnimationFrame(_refresh)
                }
                running = true
            };
            _refresh();
            $window.on("resize", tick);
            $window.scroll()
        })();
        (function(ga) {
            "use strict";
            ga = ga || function() {};
            $(function() {
                var currentSectionNumber = false;
                $(".section:not(.section-header)").each(function(i) {
                    var $section = $(this);
                    $section.data("tracking", "true");
                    var scrollWatch = $section.scrollWatch();
                    scrollWatch.visibility = false;
                    scrollWatch.on("scroll", function(e) {
                        if (Math.abs(e.visibility) > .8 && currentSectionNumber !== i) {
                            currentSectionNumber = i;
                            if (this.data("tracking") === "true") {
                                var sectionNumber = i + 1 < 10 ? "0" + (i + 1) : i + 1;
                                var section = sectionNumber + "-" + this.attr("id");
                                ga("shorthand.send", "event", section, "scrolled")
                            }
                        }
                    })
                })
            })
        })(window.ga);
        window.videoPlayerEventBus = _.extend({}, Backbone.Events);

        function onPlayerStateChange(event) {
            "use strict";
            if (event.data === 1) {
                window.videoPlayerEventBus.trigger("play", event)
            }
        }(function() {
            "use strict";
            window.YoutubePlayerController = function(options) {
                _.bindAll(this);
                this.player = options.player;
                this.vent = options.vent;
                this.initialize()
            };
            window.YoutubePlayerController.prototype = {
                initialize: function() {
                    this.vent.on("play", this.onOtherVideoPlay)
                },
                onOtherVideoPlay: function(event) {
                    if (event.target !== this.player) {
                        this.player.pauseVideo()
                    }
                }
            }
        })();
        window.onYouTubePlayerAPIReady = function() {
            "use strict";
            return function() {
                var vent = {};
                _.extend(vent, Backbone.Events);
                var youtubeiFramesFound = $(".section-media-youtube iframe, .media-block-youtube iframe");
                if (youtubeiFramesFound) {
                    youtubeiFramesFound.each(function() {
                        var player = new window.YT.Player(this.id, {
                            events: {
                                onStateChange: onPlayerStateChange
                            }
                        });
                        new window.YoutubePlayerController({
                            player: player,
                            vent: window.videoPlayerEventBus
                        })
                    })
                }
            }
        }();
        (function() {
            "use strict";
            var youtubeiFramesFound = $(".section-media-youtube iframe, .media-block-youtube iframe");
            if (youtubeiFramesFound.length) {
                var tag = document.createElement("script");
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
            }
        })();
        (function($, videojs, Device) {
            "use strict";

            function VideoPlayerSection(options) {
                _.bindAll(this);
                this.$el = $(options.el);
                this.el = this.$el[0];
                this.$caption = this.$el.find("[data-video-player-caption]");
                this.$video = this.$el.find(".video-js");
                this.vent = options.vent;
                this.initialize()
            }
            VideoPlayerSection.prototype = {
                initialize: function() {
                    this.$el.addClass("is-not-playing is-inactive");
                    this.player = videojs(this.$video[0]);
                    this.player.ready(this.onVideoReady);
                    this.vent.on("play", this.onOtherVideoPlay);
                    if (Device.isiOS()) {
                        this.setupVideoScaler()
                    }
                    if (this.$el.hasClass("section-media-video")) {
                        this.$el.find(".video-js").css({
                            height: "100%",
                            width: "100%"
                        })
                    }
                },
                onOtherVideoPlay: function($videoSection) {
                    if (this.$el !== $videoSection) {
                        this.player.pause()
                    }
                },
                onVideoReady: function() {
                    this.player.on("pause", this.onVideoPause);
                    this.player.on("play", this.onVideoPlay);
                    this.player.on("useractive", this.onUserActive);
                    this.player.on("userinactive", this.onUserInactive)
                },
                onVideoPause: function() {
                    this.$el.addClass("is-not-playing")
                },
                onVideoPlay: function() {
                    this.vent.trigger("play", this.$el);
                    this.$el.removeClass("is-not-playing")
                },
                onUserActive: function() {
                    this.$el.removeClass("is-inactive")
                },
                onUserInactive: function() {
                    this.$el.addClass("is-inactive")
                },
                setupVideoScaler: function() {
                    this._scaleVideo();
                    $(window).on("resize orientationchange", this._scaleVideo)
                },
                _scaleVideo: function() {
                    fastdom.read(function() {
                        var sectionWidth = this.el.offsetWidth;
                        var videoRatio = Math.max(this.$video.data("ratio"), 1);
                        var $video = this.$el.find("video");
                        var videoHeight = sectionWidth / videoRatio;
                        if (!Shorthand.helpers.isPortrait()) {
                            videoHeight = this.el.offsetHeight
                        }
                        fastdom.write(function() {
                            $video.width(sectionWidth).height(videoHeight);
                            this.player.height(videoHeight)
                        }, this)
                    }, this)
                }
            };
            $("[data-video-player]").each(function() {
                new VideoPlayerSection({
                    el: this,
                    vent: window.videoPlayerEventBus
                })
            })
        })($, window.videojs, window.Device);
        (function(ViewportHeight, Device) {
            "use strict";

            function getFixedStoryElementHeight() {
                var viewportHeight = new ViewportHeight(document.body);
                return viewportHeight.getFixedElementsHeight()
            }
            $(function() {
                var $html = $("html, body");
                var $nav = $(".section-navigation");

                function activateItem($el) {
                    $nav.find(".active").removeClass("active");
                    $el.addClass("active")
                }

                function stick() {
                    $nav.addClass("stick")
                }

                function unstick() {
                    $nav.removeClass("stick")
                }

                function setProblemChildren(el, styles, problemChildren) {
                    _.each(styles, function(style) {
                        if (el.style[style.name] === style.original || style.original === "*" && el.style[style.name].length > 0) {
                            problemChildren.push({
                                el: el,
                                name: style.name,
                                original: el.style[style.name]
                            });
                            el.style[style.name] = style.replacement
                        }
                    })
                }

                function jumpingToTitle($targetSection) {
                    return $targetSection.hasClass("section-title")
                }

                function jumpToSection(event) {
                    event.preventDefault();
                    var $anchor = $(event.delegateTarget);
                    var navigationLinks = $("a[href^=#].section-navigator");
                    if ($anchor.data("currently-scrolling") !== true) {
                        navigationLinks.data("currently-scrolling", true);
                        var $targetSection = $($anchor.attr("href"));
                        var fixedElementHeight = getFixedStoryElementHeight();
                        var sectionTop = $targetSection.offset().top;
                        var scrollOffset = Math.ceil(sectionTop - fixedElementHeight);
                        if (jumpingToTitle($targetSection)) {
                            scrollOffset = 0
                        }
                        var $sections = $(".section");
                        if (Device.isMobile()) {
                            $sections.data("tracking", "true");
                            var items = document.getElementsByTagName("*");
                            var problemChildren = [];
                            var styles = [{
                                name: "position",
                                original: "fixed",
                                replacement: "absolute"
                            }, {
                                name: "-webkit-transform",
                                original: "*",
                                replacement: "none !important"
                            }];
                            for (var i = items.length; i--;) {
                                var el = items[i];
                                setProblemChildren(el, styles, problemChildren)
                            }
                            $html.scrollTop(scrollOffset);
                            _.defer(function() {
                                $anchor.blur();
                                _.each(problemChildren, function(problemChild) {
                                    problemChild.el.style[problemChild.name] = problemChild.original
                                });
                                navigationLinks.data("currently-scrolling", false)
                            })
                        } else {
                            $sections.data("tracking", "false");
                            $targetSection.data("tracking", "true");
                            $html.stop().animate({
                                scrollTop: scrollOffset
                            }, 1500).promise().done(function() {
                                $sections.data("tracking", "true");
                                navigationLinks.data("currently-scrolling", false);
                                activateItem($anchor);
                                $anchor.blur()
                            })
                        }
                    }
                }
                $(".sections-list .section").each(function() {
                    if (!Device.isMobile()) {
                        var $el = $(this);
                        var id = $el.attr("id");
                        var $navEl = $nav.find('[href="#' + id + '"]');
                        if ($navEl.length === 1) {
                            $el.scrollWatch().on("scroll", function(e) {
                                var visibility = Math.abs(e.visibility);
                                if (visibility > .8) {
                                    activateItem($navEl)
                                } else if (visibility === 0 && e.direction === "up" && $navEl.hasClass("active")) {
                                    activateItem($navEl.prev())
                                }
                            })
                        }
                    }
                });
                $(".section-header").scrollWatch().on("scroll", function(e) {
                    var visibility = Math.abs(e.visibility);
                    if (visibility > 0 || Device.isMobile() && !Device.isAndroidTablet()) {
                        unstick()
                    } else {
                        stick()
                    }
                });
                $("a[href^=#].section-navigator").on("click", jumpToSection)
            })
        })(window.ViewportHeight, window.Device);
        (function() {
            "use strict";

            function showWhenLoaded(video) {
                var events = ["loadeddata", "playing", "canplaythrough"];
                var showVideo = function() {
                    video.style.opacity = 1
                };
                for (var i in events) {
                    video.addEventListener(events[i], showVideo)
                }
            }

            function visibilityCheck(visibility, video) {
                if (visibility > .2) {
                    if (video.canPlayType) {
                        video.play()
                    }
                }
                if (visibility < .2) {
                    if (video.canPlayType) {
                        video.pause()
                    }
                }
            }

            function sectionInViewport($el, visibility) {
                var video = $el.find("video")[0];
                if (video) {
                    showWhenLoaded(video);
                    visibilityCheck(visibility, video)
                }
            }

            function backgroundScrollmationVideoInViewport($el, visibility) {
                if ($el[0].className.indexOf("active") !== -1) {
                    var video = $el.find("video")[0];
                    if (video) {
                        showWhenLoaded(video);
                        visibilityCheck(visibility, video)
                    }
                }
            }
            $(".section-text-over-media, .section-title").each(function() {
                $(this).scrollWatch().on("scroll", function(e) {
                    var visibility = Math.abs(e.visibility);
                    sectionInViewport($(this), visibility)
                })
            });
            $(".scrollmation-background-container [data-video-background-container]").each(function() {
                $(this).scrollWatch().on("scroll", function(e) {
                    var visibility = Math.abs(e.visibility);
                    backgroundScrollmationVideoInViewport($(this), visibility)
                })
            })
        })();
        (function($) {
            "use strict";
            var $window = $(window);

            function resizing(element) {
                var $el = $(element);
                var videoElement = $el.find(".video-js")[0];
                var mediaRatio = $el.data("mediaRatio");
                $window.on("resize", function() {
                    var parentWidth = $el.width();
                    videoElement.player.width(parentWidth);
                    videoElement.player.height(parentWidth / mediaRatio)
                })
            }
            $(function() {
                $("[data-scroll-video-player]").each(function() {
                    resizing(this)
                })
            })
        })($);
        (function() {
            "use strict";
            $(function() {
                function navigationToggle(e) {
                    $(".section-navigation").toggleClass("hide-when-small");
                    $(".navigation .menu-overlay").toggleClass("show-with-menu");
                    $(".section-header").toggleClass("menu-active");
                    document.body.height = document.documentElement.clientHeight + "px";
                    $("body").toggleClass("prevent-menu-scrolling");
                    e.preventDefault()
                }
                $(".small-menu a, .navigation .menu-overlay").on("click", function(e) {
                    navigationToggle(e)
                });
                $(".navigation .menu-overlay").on("touchstart", function(e) {
                    navigationToggle(e)
                });
                $(".section-navigation a").on("click", function(e) {
                    $(".section-navigation").addClass("hide-when-small");
                    $(".navigation .menu-overlay").removeClass("show-with-menu");
                    $("body").removeClass("prevent-menu-scrolling");
                    e.preventDefault()
                })
            })
        })();
        (function(Device, Shorthand) {
            "use strict";
            if (!Device.isMacRetinaChrome()) {
                return
            }
            var backgroundImages = document.getElementsByClassName("text-over-media-background-image");
            var isPortraitModeOn = Shorthand.helpers.isPortrait();
            var portraitBackgroundImages = _.filter(backgroundImages, function(image) {
                return image.dataset.portraitSrc && image.dataset.portraitSrc.length > 0
            });
            $(window).on("mousewheel scroll resize", function() {
                Shorthand.translateImages(backgroundImages)
            }).on("resize", function() {
                fastdom.read(function() {
                    var isPortrait = Shorthand.helpers.isPortrait();
                    if (isPortrait && !isPortraitModeOn) {
                        _.each(portraitBackgroundImages, function(image) {
                            fastdom.write(function() {
                                image.src = image.dataset.portraitSrc
                            })
                        });
                        isPortraitModeOn = true
                    } else if (!isPortrait && isPortraitModeOn) {
                        _.each(portraitBackgroundImages, function(image) {
                            fastdom.write(function() {
                                image.src = image.dataset.landscapeSrc
                            })
                        });
                        isPortraitModeOn = false
                    }
                })
            })
        })(window.Device, Shorthand)
    }).call(this)
})(false);
