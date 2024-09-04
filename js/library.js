!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k)) return (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w;
        },
        O = function () {
          (w = (0, h.default)()), j();
        },
        M = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        S = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && p.default.mobile()) ||
            ("phone" === e && p.default.phone()) ||
            ("tablet" === e && p.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        _ = function (e) {
          (x = i(x, e)), (w = (0, h.default)());
          var t = document.all && !window.atob;
          return S(x.disable) || t
            ? M()
            : (x.disableMutationObserver ||
                d.default.isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (x.disableMutationObserver = !0)),
              document.querySelector("body").setAttribute("data-aos-easing", x.easing),
              document.querySelector("body").setAttribute("data-aos-duration", x.duration),
              document.querySelector("body").setAttribute("data-aos-delay", x.delay),
              "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1
                ? j(!0)
                : "load" === x.startEvent
                ? window.addEventListener(x.startEvent, function () {
                    j(!0);
                  })
                : document.addEventListener(x.startEvent, function () {
                    j(!0);
                  }),
              window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)),
              window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)),
              window.addEventListener(
                "scroll",
                (0, u.default)(function () {
                  (0, b.default)(w, x.once);
                }, x.throttleDelay)
              ),
              x.disableMutationObserver || d.default.ready("[data-aos]", O),
              w);
        };
      e.exports = { init: _, refresh: j, refreshHard: O };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(f, t)), M ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return S ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function f() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
          }
          function d(e) {
            return (h = void 0), _ && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(f, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(f, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((M = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (_ = "trailing" in n ? !!n.trailing : _)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (
            i(o) && ((r = "leading" in o ? !!o.leading : r), (a = "trailing" in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }
        function r(e) {
          return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
        }
        function a(e) {
          return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || (r(e) && k.call(e) == d);
        }
        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return f;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
        }
        var c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g =
            "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(f, t)), M ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return S ? x(i, y - o) : i;
          }
          function s(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function f() {
            var e = j();
            return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
          }
          function d(e) {
            return (h = void 0), _ && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = s(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(f, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(f, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((M = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (_ = "trailing" in n ? !!n.trailing : _)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
        }
        function r(e) {
          return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || (i(e) && w.call(e) == f);
        }
        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return s;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
        }
        var u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y =
            "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      "use strict";
      function n(e) {
        var t = void 0,
          o = void 0,
          i = void 0;
        for (t = 0; t < e.length; t += 1) {
          if (((o = e[t]), o.dataset && o.dataset.aos)) return !0;
          if ((i = o.children && n(o.children))) return !0;
        }
        return !1;
      }
      function o() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function i() {
        return !!o();
      }
      function r(e, t) {
        var n = window.document,
          i = o(),
          r = new i(a);
        (u = t), r.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
      }
      function a(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              o = Array.prototype.slice.call(e.removedNodes),
              i = t.concat(o);
            if (n(i)) return u();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = function () {};
      t.default = { isSupported: i, ready: r };
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new s();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof o &&
              ("false" === o || (!n && "true" !== o)) &&
              e.node.classList.remove("aos-animate");
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"), (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              n += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n += e.offsetHeight;
              break;
            case "top-center":
              n += i / 2;
              break;
            case "bottom-center":
              n += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              n += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              n += i;
              break;
            case "bottom-top":
              n += e.offsetHeight + i;
              break;
            case "center-top":
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll("[data-aos]")),
          Array.prototype.map.call(e, function (e) {
            return { node: e };
          })
        );
      };
      t.default = n;
    },
  ]);
});

/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (n.anime = e());
})(this, function () {
  "use strict";
  var n = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0,
    },
    e = { duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0 },
    r = [
      "translateX",
      "translateY",
      "translateZ",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
      "skew",
      "skewX",
      "skewY",
      "perspective",
    ],
    t = { CSS: {}, springs: {} };
  function a(n, e, r) {
    return Math.min(Math.max(n, e), r);
  }
  function o(n, e) {
    return n.indexOf(e) > -1;
  }
  function u(n, e) {
    return n.apply(null, e);
  }
  var i = {
    arr: function (n) {
      return Array.isArray(n);
    },
    obj: function (n) {
      return o(Object.prototype.toString.call(n), "Object");
    },
    pth: function (n) {
      return i.obj(n) && n.hasOwnProperty("totalLength");
    },
    svg: function (n) {
      return n instanceof SVGElement;
    },
    inp: function (n) {
      return n instanceof HTMLInputElement;
    },
    dom: function (n) {
      return n.nodeType || i.svg(n);
    },
    str: function (n) {
      return "string" == typeof n;
    },
    fnc: function (n) {
      return "function" == typeof n;
    },
    und: function (n) {
      return void 0 === n;
    },
    hex: function (n) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
    },
    rgb: function (n) {
      return /^rgb/.test(n);
    },
    hsl: function (n) {
      return /^hsl/.test(n);
    },
    col: function (n) {
      return i.hex(n) || i.rgb(n) || i.hsl(n);
    },
    key: function (r) {
      return !n.hasOwnProperty(r) && !e.hasOwnProperty(r) && "targets" !== r && "keyframes" !== r;
    },
  };
  function c(n) {
    var e = /\(([^)]+)\)/.exec(n);
    return e
      ? e[1].split(",").map(function (n) {
          return parseFloat(n);
        })
      : [];
  }
  function s(n, e) {
    var r = c(n),
      o = a(i.und(r[0]) ? 1 : r[0], 0.1, 100),
      u = a(i.und(r[1]) ? 100 : r[1], 0.1, 100),
      s = a(i.und(r[2]) ? 10 : r[2], 0.1, 100),
      f = a(i.und(r[3]) ? 0 : r[3], 0.1, 100),
      l = Math.sqrt(u / o),
      d = s / (2 * Math.sqrt(u * o)),
      p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
      h = 1,
      v = d < 1 ? (d * l - f) / p : -f + l;
    function g(n) {
      var r = e ? (e * n) / 1e3 : n;
      return (
        (r =
          d < 1 ? Math.exp(-r * d * l) * (h * Math.cos(p * r) + v * Math.sin(p * r)) : (h + v * r) * Math.exp(-r * l)),
        0 === n || 1 === n ? n : 1 - r
      );
    }
    return e
      ? g
      : function () {
          var e = t.springs[n];
          if (e) return e;
          for (var r = 0, a = 0; ; )
            if (1 === g((r += 1 / 6))) {
              if (++a >= 16) break;
            } else a = 0;
          var o = r * (1 / 6) * 1e3;
          return (t.springs[n] = o), o;
        };
  }
  function f(n) {
    return (
      void 0 === n && (n = 10),
      function (e) {
        return Math.round(e * n) * (1 / n);
      }
    );
  }
  var l,
    d,
    p = (function () {
      var n = 11,
        e = 1 / (n - 1);
      function r(n, e) {
        return 1 - 3 * e + 3 * n;
      }
      function t(n, e) {
        return 3 * e - 6 * n;
      }
      function a(n) {
        return 3 * n;
      }
      function o(n, e, o) {
        return ((r(e, o) * n + t(e, o)) * n + a(e)) * n;
      }
      function u(n, e, o) {
        return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e);
      }
      return function (r, t, a, i) {
        if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
          var c = new Float32Array(n);
          if (r !== t || a !== i) for (var s = 0; s < n; ++s) c[s] = o(s * e, r, a);
          return function (n) {
            return r === t && a === i ? n : 0 === n || 1 === n ? n : o(f(n), t, i);
          };
        }
        function f(t) {
          for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= t; ++s) i += e;
          var l = i + ((t - c[--s]) / (c[s + 1] - c[s])) * e,
            d = u(l, r, a);
          return d >= 0.001
            ? (function (n, e, r, t) {
                for (var a = 0; a < 4; ++a) {
                  var i = u(e, r, t);
                  if (0 === i) return e;
                  e -= (o(e, r, t) - n) / i;
                }
                return e;
              })(t, l, r, a)
            : 0 === d
            ? l
            : (function (n, e, r, t, a) {
                for (
                  var u, i, c = 0;
                  (u = o((i = e + (r - e) / 2), t, a) - n) > 0 ? (r = i) : (e = i), Math.abs(u) > 1e-7 && ++c < 10;

                );
                return i;
              })(t, i, i + e, r, a);
        }
      };
    })(),
    h =
      ((l = {
        linear: function () {
          return function (n) {
            return n;
          };
        },
      }),
      (d = {
        Sine: function () {
          return function (n) {
            return 1 - Math.cos((n * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n);
          };
        },
        Back: function () {
          return function (n) {
            return n * n * (3 * n - 2);
          };
        },
        Bounce: function () {
          return function (n) {
            for (var e, r = 4; n < ((e = Math.pow(2, --r)) - 1) / 11; );
            return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2);
          };
        },
        Elastic: function (n, e) {
          void 0 === n && (n = 1), void 0 === e && (e = 0.5);
          var r = a(n, 1, 10),
            t = a(e, 0.1, 2);
          return function (n) {
            return 0 === n || 1 === n
              ? n
              : -r *
                  Math.pow(2, 10 * (n - 1)) *
                  Math.sin(((n - 1 - (t / (2 * Math.PI)) * Math.asin(1 / r)) * (2 * Math.PI)) / t);
          };
        },
      }),
      ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (n, e) {
        d[n] = function () {
          return function (n) {
            return Math.pow(n, e + 2);
          };
        };
      }),
      Object.keys(d).forEach(function (n) {
        var e = d[n];
        (l["easeIn" + n] = e),
          (l["easeOut" + n] = function (n, r) {
            return function (t) {
              return 1 - e(n, r)(1 - t);
            };
          }),
          (l["easeInOut" + n] = function (n, r) {
            return function (t) {
              return t < 0.5 ? e(n, r)(2 * t) / 2 : 1 - e(n, r)(-2 * t + 2) / 2;
            };
          });
      }),
      l);
  function v(n, e) {
    if (i.fnc(n)) return n;
    var r = n.split("(")[0],
      t = h[r],
      a = c(n);
    switch (r) {
      case "spring":
        return s(n, e);
      case "cubicBezier":
        return u(p, a);
      case "steps":
        return u(f, a);
      default:
        return u(t, a);
    }
  }
  function g(n) {
    try {
      return document.querySelectorAll(n);
    } catch (n) {
      return;
    }
  }
  function m(n, e) {
    for (var r = n.length, t = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < r; o++)
      if (o in n) {
        var u = n[o];
        e.call(t, u, o, n) && a.push(u);
      }
    return a;
  }
  function y(n) {
    return n.reduce(function (n, e) {
      return n.concat(i.arr(e) ? y(e) : e);
    }, []);
  }
  function b(n) {
    return i.arr(n)
      ? n
      : (i.str(n) && (n = g(n) || n), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n]);
  }
  function M(n, e) {
    return n.some(function (n) {
      return n === e;
    });
  }
  function x(n) {
    var e = {};
    for (var r in n) e[r] = n[r];
    return e;
  }
  function w(n, e) {
    var r = x(n);
    for (var t in n) r[t] = e.hasOwnProperty(t) ? e[t] : n[t];
    return r;
  }
  function k(n, e) {
    var r = x(n);
    for (var t in e) r[t] = i.und(n[t]) ? e[t] : n[t];
    return r;
  }
  function O(n) {
    return i.rgb(n)
      ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = n)))
        ? "rgba(" + r[1] + ",1)"
        : e
      : i.hex(n)
      ? ((t = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, r, t) {
          return e + e + r + r + t + t;
        })),
        (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)),
        "rgba(" + parseInt(a[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)")
      : i.hsl(n)
      ? (function (n) {
          var e,
            r,
            t,
            a =
              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
            o = parseInt(a[1], 10) / 360,
            u = parseInt(a[2], 10) / 100,
            i = parseInt(a[3], 10) / 100,
            c = a[4] || 1;
          function s(n, e, r) {
            return (
              r < 0 && (r += 1),
              r > 1 && (r -= 1),
              r < 1 / 6 ? n + 6 * (e - n) * r : r < 0.5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n
            );
          }
          if (0 == u) e = r = t = i;
          else {
            var f = i < 0.5 ? i * (1 + u) : i + u - i * u,
              l = 2 * i - f;
            (e = s(l, f, o + 1 / 3)), (r = s(l, f, o)), (t = s(l, f, o - 1 / 3));
          }
          return "rgba(" + 255 * e + "," + 255 * r + "," + 255 * t + "," + c + ")";
        })(n)
      : void 0;
    var e, r, t, a;
  }
  function C(n) {
    var e =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        n
      );
    if (e) return e[1];
  }
  function B(n, e) {
    return i.fnc(n) ? n(e.target, e.id, e.total) : n;
  }
  function P(n, e) {
    return n.getAttribute(e);
  }
  function I(n, e, r) {
    if (M([r, "deg", "rad", "turn"], C(e))) return e;
    var a = t.CSS[e + r];
    if (!i.und(a)) return a;
    var o = document.createElement(n.tagName),
      u = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
    u.appendChild(o), (o.style.position = "absolute"), (o.style.width = 100 + r);
    var c = 100 / o.offsetWidth;
    u.removeChild(o);
    var s = c * parseFloat(e);
    return (t.CSS[e + r] = s), s;
  }
  function T(n, e, r) {
    if (e in n.style) {
      var t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || "0";
      return r ? I(n, a, r) : a;
    }
  }
  function D(n, e) {
    return i.dom(n) && !i.inp(n) && (P(n, e) || (i.svg(n) && n[e]))
      ? "attribute"
      : i.dom(n) && M(r, e)
      ? "transform"
      : i.dom(n) && "transform" !== e && T(n, e)
      ? "css"
      : null != n[e]
      ? "object"
      : void 0;
  }
  function E(n) {
    if (i.dom(n)) {
      for (var e, r = n.style.transform || "", t = /(\w+)\(([^)]*)\)/g, a = new Map(); (e = t.exec(r)); )
        a.set(e[1], e[2]);
      return a;
    }
  }
  function F(n, e, r, t) {
    var a,
      u = o(e, "scale")
        ? 1
        : 0 + (o((a = e), "translate") || "perspective" === a ? "px" : o(a, "rotate") || o(a, "skew") ? "deg" : void 0),
      i = E(n).get(e) || u;
    return r && (r.transforms.list.set(e, i), (r.transforms.last = e)), t ? I(n, i, t) : i;
  }
  function N(n, e, r, t) {
    switch (D(n, e)) {
      case "transform":
        return F(n, e, t, r);
      case "css":
        return T(n, e, r);
      case "attribute":
        return P(n, e);
      default:
        return n[e] || 0;
    }
  }
  function A(n, e) {
    var r = /^(\*=|\+=|-=)/.exec(n);
    if (!r) return n;
    var t = C(n) || 0,
      a = parseFloat(e),
      o = parseFloat(n.replace(r[0], ""));
    switch (r[0][0]) {
      case "+":
        return a + o + t;
      case "-":
        return a - o + t;
      case "*":
        return a * o + t;
    }
  }
  function L(n, e) {
    if (i.col(n)) return O(n);
    if (/\s/g.test(n)) return n;
    var r = C(n),
      t = r ? n.substr(0, n.length - r.length) : n;
    return e ? t + e : t;
  }
  function j(n, e) {
    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
  }
  function S(n) {
    for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
      var o = r.getItem(a);
      a > 0 && (t += j(e, o)), (e = o);
    }
    return t;
  }
  function q(n) {
    if (n.getTotalLength) return n.getTotalLength();
    switch (n.tagName.toLowerCase()) {
      case "circle":
        return (o = n), 2 * Math.PI * P(o, "r");
      case "rect":
        return 2 * P((a = n), "width") + 2 * P(a, "height");
      case "line":
        return j({ x: P((t = n), "x1"), y: P(t, "y1") }, { x: P(t, "x2"), y: P(t, "y2") });
      case "polyline":
        return S(n);
      case "polygon":
        return (r = (e = n).points), S(e) + j(r.getItem(r.numberOfItems - 1), r.getItem(0));
    }
    var e, r, t, a, o;
  }
  function $(n, e) {
    var r = e || {},
      t =
        r.el ||
        (function (n) {
          for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode); ) e = e.parentNode;
          return e;
        })(n),
      a = t.getBoundingClientRect(),
      o = P(t, "viewBox"),
      u = a.width,
      c = a.height,
      s = r.viewBox || (o ? o.split(" ") : [0, 0, u, c]);
    return { el: t, viewBox: s, x: s[0] / 1, y: s[1] / 1, w: u / s[2], h: c / s[3] };
  }
  function X(n, e) {
    function r(r) {
      void 0 === r && (r = 0);
      var t = e + r >= 1 ? e + r : 0;
      return n.el.getPointAtLength(t);
    }
    var t = $(n.el, n.svg),
      a = r(),
      o = r(-1),
      u = r(1);
    switch (n.property) {
      case "x":
        return (a.x - t.x) * t.w;
      case "y":
        return (a.y - t.y) * t.h;
      case "angle":
        return (180 * Math.atan2(u.y - o.y, u.x - o.x)) / Math.PI;
    }
  }
  function Y(n, e) {
    var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      t = L(i.pth(n) ? n.totalLength : n, e) + "";
    return {
      original: t,
      numbers: t.match(r) ? t.match(r).map(Number) : [0],
      strings: i.str(n) || e ? t.split(r) : [],
    };
  }
  function Z(n) {
    return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function (n, e, r) {
      return r.indexOf(n) === e;
    });
  }
  function Q(n) {
    var e = Z(n);
    return e.map(function (n, r) {
      return { target: n, id: r, total: e.length, transforms: { list: E(n) } };
    });
  }
  function V(n, e) {
    var r = x(e);
    if ((/^spring/.test(r.easing) && (r.duration = s(r.easing)), i.arr(n))) {
      var t = n.length;
      2 === t && !i.obj(n[0]) ? (n = { value: n }) : i.fnc(e.duration) || (r.duration = e.duration / t);
    }
    var a = i.arr(n) ? n : [n];
    return a
      .map(function (n, r) {
        var t = i.obj(n) && !i.pth(n) ? n : { value: n };
        return (
          i.und(t.delay) && (t.delay = r ? 0 : e.delay),
          i.und(t.endDelay) && (t.endDelay = r === a.length - 1 ? e.endDelay : 0),
          t
        );
      })
      .map(function (n) {
        return k(n, r);
      });
  }
  function z(n, e) {
    var r = [],
      t = e.keyframes;
    for (var a in (t &&
      (e = k(
        (function (n) {
          for (
            var e = m(
                y(
                  n.map(function (n) {
                    return Object.keys(n);
                  })
                ),
                function (n) {
                  return i.key(n);
                }
              ).reduce(function (n, e) {
                return n.indexOf(e) < 0 && n.push(e), n;
              }, []),
              r = {},
              t = function (t) {
                var a = e[t];
                r[a] = n.map(function (n) {
                  var e = {};
                  for (var r in n) i.key(r) ? r == a && (e.value = n[r]) : (e[r] = n[r]);
                  return e;
                });
              },
              a = 0;
            a < e.length;
            a++
          )
            t(a);
          return r;
        })(t),
        e
      )),
    e))
      i.key(a) && r.push({ name: a, tweens: V(e[a], n) });
    return r;
  }
  function H(n, e) {
    var r;
    return n.tweens.map(function (t) {
      var a = (function (n, e) {
          var r = {};
          for (var t in n) {
            var a = B(n[t], e);
            i.arr(a) &&
              1 ===
                (a = a.map(function (n) {
                  return B(n, e);
                })).length &&
              (a = a[0]),
              (r[t] = a);
          }
          return (r.duration = parseFloat(r.duration)), (r.delay = parseFloat(r.delay)), r;
        })(t, e),
        o = a.value,
        u = i.arr(o) ? o[1] : o,
        c = C(u),
        s = N(e.target, n.name, c, e),
        f = r ? r.to.original : s,
        l = i.arr(o) ? o[0] : f,
        d = C(l) || C(s),
        p = c || d;
      return (
        i.und(u) && (u = f),
        (a.from = Y(l, p)),
        (a.to = Y(A(u, l), p)),
        (a.start = r ? r.end : 0),
        (a.end = a.start + a.delay + a.duration + a.endDelay),
        (a.easing = v(a.easing, a.duration)),
        (a.isPath = i.pth(o)),
        (a.isColor = i.col(a.from.original)),
        a.isColor && (a.round = 1),
        (r = a),
        a
      );
    });
  }
  var G = {
    css: function (n, e, r) {
      return (n.style[e] = r);
    },
    attribute: function (n, e, r) {
      return n.setAttribute(e, r);
    },
    object: function (n, e, r) {
      return (n[e] = r);
    },
    transform: function (n, e, r, t, a) {
      if ((t.list.set(e, r), e === t.last || a)) {
        var o = "";
        t.list.forEach(function (n, e) {
          o += e + "(" + n + ") ";
        }),
          (n.style.transform = o);
      }
    },
  };
  function R(n, e) {
    Q(n).forEach(function (n) {
      for (var r in e) {
        var t = B(e[r], n),
          a = n.target,
          o = C(t),
          u = N(a, r, o, n),
          i = A(L(t, o || C(u)), u),
          c = D(a, r);
        G[c](a, r, i, n.transforms, !0);
      }
    });
  }
  function W(n, e) {
    return m(
      y(
        n.map(function (n) {
          return e.map(function (e) {
            return (function (n, e) {
              var r = D(n.target, e.name);
              if (r) {
                var t = H(e, n),
                  a = t[t.length - 1];
                return {
                  type: r,
                  property: e.name,
                  animatable: n,
                  tweens: t,
                  duration: a.end,
                  delay: t[0].delay,
                  endDelay: a.endDelay,
                };
              }
            })(n, e);
          });
        })
      ),
      function (n) {
        return !i.und(n);
      }
    );
  }
  function J(n, e) {
    var r = n.length,
      t = function (n) {
        return n.timelineOffset ? n.timelineOffset : 0;
      },
      a = {};
    return (
      (a.duration = r
        ? Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration;
            })
          )
        : e.duration),
      (a.delay = r
        ? Math.min.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.delay;
            })
          )
        : e.delay),
      (a.endDelay = r
        ? a.duration -
          Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration - n.endDelay;
            })
          )
        : e.endDelay),
      a
    );
  }
  var K = 0;
  var U,
    _ = [],
    nn = [],
    en = (function () {
      function n() {
        U = requestAnimationFrame(e);
      }
      function e(e) {
        var r = _.length;
        if (r) {
          for (var t = 0; t < r; ) {
            var a = _[t];
            if (a.paused) {
              var o = _.indexOf(a);
              o > -1 && (_.splice(o, 1), (r = _.length));
            } else a.tick(e);
            t++;
          }
          n();
        } else U = cancelAnimationFrame(U);
      }
      return n;
    })();
  function rn(r) {
    void 0 === r && (r = {});
    var t,
      o = 0,
      u = 0,
      i = 0,
      c = 0,
      s = null;
    function f(n) {
      var e =
        window.Promise &&
        new Promise(function (n) {
          return (s = n);
        });
      return (n.finished = e), e;
    }
    var l,
      d,
      p,
      h,
      v,
      g,
      y,
      b,
      M =
        ((d = w(n, (l = r))),
        (p = w(e, l)),
        (h = z(p, l)),
        (v = Q(l.targets)),
        (g = W(v, h)),
        (y = J(g, p)),
        (b = K),
        K++,
        k(d, {
          id: b,
          children: [],
          animatables: v,
          animations: g,
          duration: y.duration,
          delay: y.delay,
          endDelay: y.endDelay,
        }));
    f(M);
    function x() {
      var n = M.direction;
      "alternate" !== n && (M.direction = "normal" !== n ? "normal" : "reverse"),
        (M.reversed = !M.reversed),
        t.forEach(function (n) {
          return (n.reversed = M.reversed);
        });
    }
    function O(n) {
      return M.reversed ? M.duration - n : n;
    }
    function C() {
      (o = 0), (u = O(M.currentTime) * (1 / rn.speed));
    }
    function B(n, e) {
      e && e.seek(n - e.timelineOffset);
    }
    function P(n) {
      for (var e = 0, r = M.animations, t = r.length; e < t; ) {
        var o = r[e],
          u = o.animatable,
          i = o.tweens,
          c = i.length - 1,
          s = i[c];
        c &&
          (s =
            m(i, function (e) {
              return n < e.end;
            })[0] || s);
        for (
          var f = a(n - s.start - s.delay, 0, s.duration) / s.duration,
            l = isNaN(f) ? 1 : s.easing(f),
            d = s.to.strings,
            p = s.round,
            h = [],
            v = s.to.numbers.length,
            g = void 0,
            y = 0;
          y < v;
          y++
        ) {
          var b = void 0,
            x = s.to.numbers[y],
            w = s.from.numbers[y] || 0;
          (b = s.isPath ? X(s.value, l * x) : w + l * (x - w)),
            p && ((s.isColor && y > 2) || (b = Math.round(b * p) / p)),
            h.push(b);
        }
        var k = d.length;
        if (k) {
          g = d[0];
          for (var O = 0; O < k; O++) {
            d[O];
            var C = d[O + 1],
              B = h[O];
            isNaN(B) || (g += C ? B + C : B + " ");
          }
        } else g = h[0];
        G[o.type](u.target, o.property, g, u.transforms), (o.currentValue = g), e++;
      }
    }
    function I(n) {
      M[n] && !M.passThrough && M[n](M);
    }
    function T(n) {
      var e = M.duration,
        r = M.delay,
        l = e - M.endDelay,
        d = O(n);
      (M.progress = a((d / e) * 100, 0, 100)),
        (M.reversePlayback = d < M.currentTime),
        t &&
          (function (n) {
            if (M.reversePlayback) for (var e = c; e--; ) B(n, t[e]);
            else for (var r = 0; r < c; r++) B(n, t[r]);
          })(d),
        !M.began && M.currentTime > 0 && ((M.began = !0), I("begin")),
        !M.loopBegan && M.currentTime > 0 && ((M.loopBegan = !0), I("loopBegin")),
        d <= r && 0 !== M.currentTime && P(0),
        ((d >= l && M.currentTime !== e) || !e) && P(e),
        d > r && d < l
          ? (M.changeBegan || ((M.changeBegan = !0), (M.changeCompleted = !1), I("changeBegin")), I("change"), P(d))
          : M.changeBegan && ((M.changeCompleted = !0), (M.changeBegan = !1), I("changeComplete")),
        (M.currentTime = a(d, 0, e)),
        M.began && I("update"),
        n >= e &&
          ((u = 0),
          M.remaining && !0 !== M.remaining && M.remaining--,
          M.remaining
            ? ((o = i), I("loopComplete"), (M.loopBegan = !1), "alternate" === M.direction && x())
            : ((M.paused = !0),
              M.completed ||
                ((M.completed = !0),
                I("loopComplete"),
                I("complete"),
                !M.passThrough && "Promise" in window && (s(), f(M)))));
    }
    return (
      (M.reset = function () {
        var n = M.direction;
        (M.passThrough = !1),
          (M.currentTime = 0),
          (M.progress = 0),
          (M.paused = !0),
          (M.began = !1),
          (M.loopBegan = !1),
          (M.changeBegan = !1),
          (M.completed = !1),
          (M.changeCompleted = !1),
          (M.reversePlayback = !1),
          (M.reversed = "reverse" === n),
          (M.remaining = M.loop),
          (t = M.children);
        for (var e = (c = t.length); e--; ) M.children[e].reset();
        ((M.reversed && !0 !== M.loop) || ("alternate" === n && 1 === M.loop)) && M.remaining++,
          P(M.reversed ? M.duration : 0);
      }),
      (M.set = function (n, e) {
        return R(n, e), M;
      }),
      (M.tick = function (n) {
        (i = n), o || (o = i), T((i + (u - o)) * rn.speed);
      }),
      (M.seek = function (n) {
        T(O(n));
      }),
      (M.pause = function () {
        (M.paused = !0), C();
      }),
      (M.play = function () {
        M.paused && (M.completed && M.reset(), (M.paused = !1), _.push(M), C(), U || en());
      }),
      (M.reverse = function () {
        x(), C();
      }),
      (M.restart = function () {
        M.reset(), M.play();
      }),
      M.reset(),
      M.autoplay && M.play(),
      M
    );
  }
  function tn(n, e) {
    for (var r = e.length; r--; ) M(n, e[r].animatable.target) && e.splice(r, 1);
  }
  return (
    "undefined" != typeof document &&
      document.addEventListener("visibilitychange", function () {
        document.hidden
          ? (_.forEach(function (n) {
              return n.pause();
            }),
            (nn = _.slice(0)),
            (rn.running = _ = []))
          : nn.forEach(function (n) {
              return n.play();
            });
      }),
    (rn.version = "3.1.0"),
    (rn.speed = 1),
    (rn.running = _),
    (rn.remove = function (n) {
      for (var e = Z(n), r = _.length; r--; ) {
        var t = _[r],
          a = t.animations,
          o = t.children;
        tn(e, a);
        for (var u = o.length; u--; ) {
          var i = o[u],
            c = i.animations;
          tn(e, c), c.length || i.children.length || o.splice(u, 1);
        }
        a.length || o.length || t.pause();
      }
    }),
    (rn.get = N),
    (rn.set = R),
    (rn.convertPx = I),
    (rn.path = function (n, e) {
      var r = i.str(n) ? g(n)[0] : n,
        t = e || 100;
      return function (n) {
        return { property: n, el: r, svg: $(r), totalLength: q(r) * (t / 100) };
      };
    }),
    (rn.setDashoffset = function (n) {
      var e = q(n);
      return n.setAttribute("stroke-dasharray", e), e;
    }),
    (rn.stagger = function (n, e) {
      void 0 === e && (e = {});
      var r = e.direction || "normal",
        t = e.easing ? v(e.easing) : null,
        a = e.grid,
        o = e.axis,
        u = e.from || 0,
        c = "first" === u,
        s = "center" === u,
        f = "last" === u,
        l = i.arr(n),
        d = l ? parseFloat(n[0]) : parseFloat(n),
        p = l ? parseFloat(n[1]) : 0,
        h = C(l ? n[1] : n) || 0,
        g = e.start || 0 + (l ? d : 0),
        m = [],
        y = 0;
      return function (n, e, i) {
        if ((c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length)) {
          for (var v = 0; v < i; v++) {
            if (a) {
              var b = s ? (a[0] - 1) / 2 : u % a[0],
                M = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                x = b - (v % a[0]),
                w = M - Math.floor(v / a[0]),
                k = Math.sqrt(x * x + w * w);
              "x" === o && (k = -x), "y" === o && (k = -w), m.push(k);
            } else m.push(Math.abs(u - v));
            y = Math.max.apply(Math, m);
          }
          t &&
            (m = m.map(function (n) {
              return t(n / y) * y;
            })),
            "reverse" === r &&
              (m = m.map(function (n) {
                return o ? (n < 0 ? -1 * n : -n) : Math.abs(y - n);
              }));
        }
        return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h;
      };
    }),
    (rn.timeline = function (n) {
      void 0 === n && (n = {});
      var r = rn(n);
      return (
        (r.duration = 0),
        (r.add = function (t, a) {
          var o = _.indexOf(r),
            u = r.children;
          function c(n) {
            n.passThrough = !0;
          }
          o > -1 && _.splice(o, 1);
          for (var s = 0; s < u.length; s++) c(u[s]);
          var f = k(t, w(e, n));
          f.targets = f.targets || n.targets;
          var l = r.duration;
          (f.autoplay = !1),
            (f.direction = r.direction),
            (f.timelineOffset = i.und(a) ? l : A(a, l)),
            c(r),
            r.seek(f.timelineOffset);
          var d = rn(f);
          c(d), u.push(d);
          var p = J(u, n);
          return (
            (r.delay = p.delay),
            (r.endDelay = p.endDelay),
            (r.duration = p.duration),
            r.seek(0),
            r.reset(),
            r.autoplay && r.play(),
            r
          );
        }),
        r
      );
    }),
    (rn.easing = v),
    (rn.penner = h),
    (rn.random = function (n, e) {
      return Math.floor(Math.random() * (e - n + 1)) + n;
    }),
    rn
  );
});
