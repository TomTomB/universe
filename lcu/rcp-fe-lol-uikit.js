(function (e) {
  function t(i) {
    if (o[i]) return o[i].exports;
    var a = (o[i] = { i: i, l: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
  }
  var o = {};
  return (
    (t.m = e),
    (t.c = o),
    (t.d = function (e, o, i) {
      t.o(e, o) ||
        Object.defineProperty(e, o, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (t.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return t.d(o, 'a', o), o;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = '/fe/lol-uikit/'),
    t((t.s = 140))
  );
})([
  function (e, t, o) {
    function i() {
      return a
        ? a
        : (l(
            'The `provider` object has not been set, please do so by calling the `init` method.',
          ),
          null);
    }
    let a;
    const n = o(27),
      r = n('provider-proxy:warn'),
      l = n('provider-proxy:error');
    n.enable('provider-proxy:*');
    e.exports = {
      init: function (e, t) {
        return (a = e), this.add(t);
      },
      _getValue: function (e, t) {
        let o;
        return (
          'function' == typeof t
            ? ((o = t(a)),
              !o &&
                r('The function for key ' + e + ' returned a falsy value: ', o))
            : 'string' == typeof t
            ? ((o = a.get(t)),
              !o &&
                r(
                  'The provider `get` invocation for the key ' +
                    e +
                    ' returned a falsy value: ',
                  o,
                ))
            : 'object' == typeof t && (o = t),
          o
        );
      },
      add: function (e) {
        e = e || {};
        const t = [],
          o = this;
        return (
          Object.keys(e).forEach(function (i) {
            const a = e[i],
              n = o._getValue(i, a);
            n && n.then
              ? (n.then(function (e) {
                  e ||
                    r(
                      'The promise for the key ' +
                        i +
                        ' resolved with a falsy value: ',
                      e,
                    ),
                    o._addValue(i, e);
                }),
                t.push(n))
              : o._addValue(i, n);
          }),
          Promise.all(t)
        );
      },
      _addValue: function (e, t) {
        this[e] = t;
      },
      provider: function () {
        return (
          l(
            'The function `provider` has been deprecated, please use `getProvider`',
            new Error().stack,
          ),
          i()
        );
      },
      getProvider: function () {
        return i();
      },
    };
  },
  function (e) {
    function t(e, t) {
      var i = e[1] || '',
        a = e[3];
      if (!a) return i;
      if (t && 'function' == typeof btoa) {
        var n = o(a),
          r = a.sources.map(function (e) {
            return '/*# sourceURL=' + a.sourceRoot + e + ' */';
          });
        return [i].concat(r).concat([n]).join('\n');
      }
      return [i].join('\n');
    }
    function o(e) {
      var t = btoa(unescape(encodeURIComponent(JSON.stringify(e))));
      return (
        '/*# ' +
        ('sourceMappingURL=data:application/json;charset=utf-8;base64,' + t) +
        ' */'
      );
    }
    e.exports = function (e) {
      var o = [];
      return (
        (o.toString = function () {
          return this.map(function (o) {
            var i = t(o, e);
            return o[2] ? '@media ' + o[2] + '{' + i + '}' : i;
          }).join('');
        }),
        (o.i = function (e, t) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var a = {}, n = 0, i; n < this.length; n++)
            (i = this[n][0]), 'number' == typeof i && (a[i] = !0);
          for (n = 0; n < e.length; n++) {
            var r = e[n];
            ('number' == typeof r[0] && a[r[0]]) ||
              (t && !r[2]
                ? (r[2] = t)
                : t && (r[2] = '(' + r[2] + ') and (' + t + ')'),
              o.push(r));
          }
        }),
        o
      );
    };
  },
  function (e) {
    var t = (e.exports = { version: '2.6.5' });
    'number' == typeof __e && (__e = t);
  },
  function (e, t, o) {
    var i = o(4),
      a = o(2),
      n = o(21),
      r = o(22),
      l = o(24),
      s = 'prototype',
      d = function (e, t, o) {
        var p = e & d.F,
          c = e & d.G,
          u = e & d.S,
          g = e & d.P,
          m = e & d.B,
          h = e & d.W,
          b = c ? a : a[t] || (a[t] = {}),
          f = b[s],
          y = c ? i : u ? i[t] : (i[t] || {})[s],
          v,
          x,
          k;
        for (v in (c && (o = t), o))
          (x = !p && y && void 0 !== y[v]),
            (x && l(b, v)) ||
              ((k = x ? y[v] : o[v]),
              (b[v] =
                c && 'function' != typeof y[v]
                  ? o[v]
                  : m && x
                  ? n(k, i)
                  : h && y[v] == k
                  ? (function (e) {
                      var t = function (t, o, i) {
                        if (this instanceof e) {
                          switch (arguments.length) {
                            case 0:
                              return new e();
                            case 1:
                              return new e(t);
                            case 2:
                              return new e(t, o);
                          }
                          return new e(t, o, i);
                        }
                        return e.apply(this, arguments);
                      };
                      return (t[s] = e[s]), t;
                    })(k)
                  : g && 'function' == typeof k
                  ? n(Function.call, k)
                  : k),
              g &&
                (((b.virtual || (b.virtual = {}))[v] = k),
                e & d.R && f && !f[v] && r(f, v, k)));
      };
    (d.F = 1),
      (d.G = 2),
      (d.S = 4),
      (d.P = 8),
      (d.B = 16),
      (d.W = 32),
      (d.U = 64),
      (d.R = 128),
      (e.exports = d);
  },
  function (e) {
    var t = (e.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')());
    'number' == typeof __g && (__g = t);
  },
  function (e, t, o) {
    e.exports = { default: o(163), __esModule: !0 };
  },
  function (e, t, o) {
    var i = o(73)('wks'),
      a = o(53),
      n = o(4).Symbol,
      r = 'function' == typeof n,
      l = (e.exports = function (e) {
        return i[e] || (i[e] = (r && n[e]) || (r ? n : a)('Symbol.' + e));
      });
    l.store = i;
  },
  function (e, t) {
    'use strict';
    function o(e) {
      return window.testsSandbox
        ? '/fe/rcp-fe-lol-uikit/' + e
        : '/fe/lol-uikit/' + e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    const i = {
      arrowButtonHover: o('sfx-uikit-arrow-button-hover.ogg'),
      arrowButtonClick: o('sfx-uikit-arrow-button-click.ogg'),
      clickGeneric: o('sfx-uikit-click-generic.ogg'),
      closeButtonHover: o('sfx-uikit-button-circlegold-hover.ogg'),
      closeButtonClick: o('sfx-uikit-button-circlex-click.ogg'),
      dropdownOptionSelect: o('sfx-uikit-dropdown-select.ogg'),
      dropdownClick: o('sfx-uikit-dropdown-click.ogg'),
      dialogCelebrationIntro: o('sfx-celebrate-notif-intro.ogg'),
      dialogCelebrationReceive: o('sfx-celebrate-receive-generic.ogg'),
      dialogCelebrationClick: o('sfx-uikit-button-gold-click.ogg'),
      dialogCelebrationHover: o('sfx-uikit-button-gold-hover.ogg'),
      flatCheckBoxClick: o('sfx-uikit-checkbox-click.ogg'),
      flatButtonHover: o('sfx-uikit-button-gold-hover.ogg'),
      flatButtonClick: o('sfx-uikit-button-gold-click.ogg'),
      focus: o('sfx-uikit-generic-click-small.ogg'),
      primaryMagicButtonHover: o('sfx-uikit-magic-button-hover.ogg'),
      primaryMagicButtonClick: o('sfx-uikit-magic-button-click.ogg'),
      purchaseButtonHover: o('sfx-purchase-button-hover.ogg'),
      purchaseButtonClick: o('sfx-purchase-button-click.ogg'),
      navClick: o('sfx-nav-button-text-click.ogg'),
      radioInputClick: o('sfx-uikit-radio-click.ogg'),
      rewardToast: o('sfx-uikit-reward-toast.ogg'),
      subnavClick: o('sfx-uikit-text-click-small.ogg'),
      vignetteIntro: o('sfx-vignette-celebration-intro.ogg'),
      vignetteOutro: o('sfx-vignette-celebration-outro.ogg'),
    };
    t.default = i;
  },
  function (e) {
    e.exports = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e;
    };
  },
  function (e, t) {
    var o = Math.max,
      i,
      a;
    (function (t, o) {
      'object' == typeof e && 'object' == typeof e.exports
        ? (e.exports = t.document
            ? o(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error('jQuery requires a window with a document');
                return o(e);
              })
        : o(t);
    })('undefined' == typeof window ? this : window, function (n, r) {
      function l(e) {
        var t = 'length' in e && e.length,
          o = ae.type(e);
        return (
          !('function' === o || ae.isWindow(e)) &&
          (!!(1 === e.nodeType && t) ||
            'array' === o ||
            0 === t ||
            ('number' == typeof t && 0 < t && t - 1 in e))
        );
      }
      function s(e, t, o) {
        if (ae.isFunction(t))
          return ae.grep(e, function (e, a) {
            return !!t.call(e, a, e) !== o;
          });
        if (t.nodeType)
          return ae.grep(e, function (e) {
            return (e === t) !== o;
          });
        if ('string' == typeof t) {
          if (ue.test(t)) return ae.filter(t, e, o);
          t = ae.filter(t, e);
        }
        return ae.grep(e, function (e) {
          return 0 <= Z.call(t, e) !== o;
        });
      }
      function d(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      function p(e) {
        var t = (ve[e] = {});
        return (
          ae.each(e.match(ye) || [], function (e, o) {
            t[o] = !0;
          }),
          t
        );
      }
      function c() {
        oe.removeEventListener('DOMContentLoaded', c, !1),
          n.removeEventListener('load', c, !1),
          ae.ready();
      }
      function u() {
        Object.defineProperty((this.cache = {}), 0, {
          get: function () {
            return {};
          },
        }),
          (this.expando = ae.expando + u.uid++);
      }
      function g(e, t, o) {
        var i;
        if (void 0 === o && 1 === e.nodeType)
          if (
            ((i = 'data-' + t.replace(Ee, '-$1').toLowerCase()),
            (o = e.getAttribute(i)),
            'string' == typeof o)
          ) {
            try {
              o =
                'true' === o ||
                ('false' !== o &&
                  ('null' === o
                    ? null
                    : +o + '' === o
                    ? +o
                    : _e.test(o)
                    ? ae.parseJSON(o)
                    : o));
            } catch (t) {}
            we.set(e, t, o);
          } else o = void 0;
        return o;
      }
      function m() {
        return !0;
      }
      function h() {
        return !1;
      }
      function b() {
        try {
          return oe.activeElement;
        } catch (e) {}
      }
      function f(e, t) {
        return ae.nodeName(e, 'table') &&
          ae.nodeName(11 === t.nodeType ? t.firstChild : t, 'tr')
          ? e.getElementsByTagName('tbody')[0] ||
              e.appendChild(e.ownerDocument.createElement('tbody'))
          : e;
      }
      function y(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
      }
      function v(e) {
        var t = We.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
      }
      function x(e, t) {
        for (var o = 0, i = e.length; o < i; o++)
          Ae.set(e[o], 'globalEval', !t || Ae.get(t[o], 'globalEval'));
      }
      function k(e, t) {
        var o, i, a, n, r, l, s, d;
        if (1 === t.nodeType) {
          if (
            Ae.hasData(e) &&
            ((n = Ae.access(e)), (r = Ae.set(t, n)), (d = n.events), d)
          )
            for (a in (delete r.handle, (r.events = {}), d))
              for (o = 0, i = d[a].length; o < i; o++)
                ae.event.add(t, a, d[a][o]);
          we.hasData(e) &&
            ((l = we.access(e)), (s = ae.extend({}, l)), we.set(t, s));
        }
      }
      function A(e, t) {
        var o = e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : [];
        return void 0 === t || (t && ae.nodeName(e, t)) ? ae.merge([e], o) : o;
      }
      function w(e, t) {
        var o = t.nodeName.toLowerCase();
        'input' === o && Le.test(e.type)
          ? (t.checked = e.checked)
          : ('input' === o || 'textarea' === o) &&
            (t.defaultValue = e.defaultValue);
      }
      function _(e, t) {
        var o = ae(t.createElement(e)).appendTo(t.body),
          i =
            n.getDefaultComputedStyle && (a = n.getDefaultComputedStyle(o[0]))
              ? a.display
              : ae.css(o[0], 'display'),
          a;
        return o.detach(), i;
      }
      function E(e) {
        var t = oe,
          o = Ye[e];
        return (
          o ||
            ((o = _(e, t)),
            ('none' === o || !o) &&
              ((Qe = (
                Qe || ae("<iframe frameborder='0' width='0' height='0'/>")
              ).appendTo(t.documentElement)),
              (t = Qe[0].contentDocument),
              t.write(),
              t.close(),
              (o = _(e, t)),
              Qe.detach()),
            (Ye[e] = o)),
          o
        );
      }
      function C(e, t, o) {
        var i = e.style,
          a,
          n,
          r,
          l;
        return (
          (o = o || Ue(e)),
          o && (l = o.getPropertyValue(t) || o[t]),
          o &&
            ('' === l &&
              !ae.contains(e.ownerDocument, e) &&
              (l = ae.style(e, t)),
            Xe.test(l) &&
              Ve.test(t) &&
              ((a = i.width),
              (n = i.minWidth),
              (r = i.maxWidth),
              (i.minWidth = i.maxWidth = i.width = l),
              (l = o.width),
              (i.width = a),
              (i.minWidth = n),
              (i.maxWidth = r))),
          void 0 === l ? l : l + ''
        );
      }
      function S(e, t) {
        return {
          get: function () {
            return e()
              ? void delete this.get
              : (this.get = t).apply(this, arguments);
          },
        };
      }
      function T(e, t) {
        if (t in e) return t;
        for (
          var o = t[0].toUpperCase() + t.slice(1), a = t, n = et.length;
          n--;

        )
          if (((t = et[n] + o), t in e)) return t;
        return a;
      }
      function L(e, t, i) {
        var a = Je.exec(t);
        return a ? o(0, a[1] - (i || 0)) + (a[2] || 'px') : t;
      }
      function M(e, t, o, a, n) {
        for (
          var r = o === (a ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
            i = 0;
          4 > r;
          r += 2
        )
          'margin' === o && (i += ae.css(e, o + Se[r], !0, n)),
            a
              ? ('content' === o && (i -= ae.css(e, 'padding' + Se[r], !0, n)),
                'margin' !== o &&
                  (i -= ae.css(e, 'border' + Se[r] + 'Width', !0, n)))
              : ((i += ae.css(e, 'padding' + Se[r], !0, n)),
                'padding' !== o &&
                  (i += ae.css(e, 'border' + Se[r] + 'Width', !0, n)));
        return i;
      }
      function N(e, t, o) {
        var i = !0,
          a = 'width' === t ? e.offsetWidth : e.offsetHeight,
          n = Ue(e),
          r = 'border-box' === ae.css(e, 'boxSizing', !1, n);
        if (0 >= a || null == a) {
          if (
            ((a = C(e, t, n)),
            (0 > a || null == a) && (a = e.style[t]),
            Xe.test(a))
          )
            return a;
          (i = r && (te.boxSizingReliable() || a === e.style[t])),
            (a = parseFloat(a) || 0);
        }
        return a + M(e, t, o || (r ? 'border' : 'content'), i, n) + 'px';
      }
      function P(e, t) {
        for (var o = [], i = 0, a = e.length, n, r, l; i < a; i++)
          ((r = e[i]), !!r.style) &&
            ((o[i] = Ae.get(r, 'olddisplay')),
            (n = r.style.display),
            t
              ? (!o[i] && 'none' === n && (r.style.display = ''),
                '' === r.style.display &&
                  Te(r) &&
                  (o[i] = Ae.access(r, 'olddisplay', E(r.nodeName))))
              : ((l = Te(r)),
                ('none' !== n || !l) &&
                  Ae.set(r, 'olddisplay', l ? n : ae.css(r, 'display'))));
        for (i = 0; i < a; i++)
          ((r = e[i]), !!r.style) &&
            ((t && 'none' !== r.style.display && '' !== r.style.display) ||
              (r.style.display = t ? o[i] || '' : 'none'));
        return e;
      }
      function O(e, t, o, i, a) {
        return new O.prototype.init(e, t, o, i, a);
      }
      function I() {
        return (
          setTimeout(function () {
            rt = void 0;
          }),
          (rt = ae.now())
        );
      }
      function D(e, t) {
        var o = 0,
          i = { height: e },
          a;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t)
          (a = Se[o]), (i['margin' + a] = i['padding' + a] = e);
        return t && (i.opacity = i.width = e), i;
      }
      function R(e, t, o) {
        for (
          var i = (nt[t] || []).concat(nt['*']), a = 0, n = i.length, r;
          a < n;
          a++
        )
          if ((r = i[a].call(o, t, e))) return r;
      }
      function H(e, t, o) {
        var i = this,
          a = {},
          n = e.style,
          r = e.nodeType && Te(e),
          l = Ae.get(e, 'fxshow'),
          s,
          d,
          p,
          c,
          u,
          g,
          m,
          h;
        for (s in (o.queue ||
          ((u = ae._queueHooks(e, 'fx')),
          null == u.unqueued &&
            ((u.unqueued = 0),
            (g = u.empty.fire),
            (u.empty.fire = function () {
              u.unqueued || g();
            })),
          u.unqueued++,
          i.always(function () {
            i.always(function () {
              u.unqueued--, ae.queue(e, 'fx').length || u.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ('height' in t || 'width' in t) &&
          ((o.overflow = [n.overflow, n.overflowX, n.overflowY]),
          (m = ae.css(e, 'display')),
          (h = 'none' === m ? Ae.get(e, 'olddisplay') || E(e.nodeName) : m),
          'inline' === h &&
            'none' === ae.css(e, 'float') &&
            (n.display = 'inline-block')),
        o.overflow &&
          ((n.overflow = 'hidden'),
          i.always(function () {
            (n.overflow = o.overflow[0]),
              (n.overflowX = o.overflow[1]),
              (n.overflowY = o.overflow[2]);
          })),
        t))
          if (((d = t[s]), tt.exec(d))) {
            if (
              (delete t[s],
              (p = p || 'toggle' === d),
              d === (r ? 'hide' : 'show'))
            )
              if ('show' === d && l && void 0 !== l[s]) r = !0;
              else continue;
            a[s] = (l && l[s]) || ae.style(e, s);
          } else m = void 0;
        if (!ae.isEmptyObject(a))
          for (s in (l
            ? 'hidden' in l && (r = l.hidden)
            : (l = Ae.access(e, 'fxshow', {})),
          p && (l.hidden = !r),
          r
            ? ae(e).show()
            : i.done(function () {
                ae(e).hide();
              }),
          i.done(function () {
            for (var t in (Ae.remove(e, 'fxshow'), a)) ae.style(e, t, a[t]);
          }),
          a))
            (c = R(r ? l[s] : 0, s, i)),
              s in l ||
                ((l[s] = c.start),
                r &&
                  ((c.end = c.start),
                  (c.start = 'width' === s || 'height' === s ? 1 : 0)));
        else 'inline' === ('none' === m ? E(e.nodeName) : m) && (n.display = m);
      }
      function z(e, t) {
        var o, i, a, n, r;
        for (o in e)
          if (
            ((i = ae.camelCase(o)),
            (a = t[i]),
            (n = e[o]),
            ae.isArray(n) && ((a = n[1]), (n = e[o] = n[0])),
            o != i && ((e[i] = n), delete e[o]),
            (r = ae.cssHooks[i]),
            r && 'expand' in r)
          )
            for (o in ((n = r.expand(n)), delete e[i], n))
              o in e || ((e[o] = n[o]), (t[o] = a));
          else t[i] = a;
      }
      function j(e, t, i) {
        var a = 0,
          n = at.length,
          r = ae.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (c) return !1;
            for (
              var t = rt || I(),
                i = o(0, s.startTime + s.duration - t),
                a = i / s.duration || 0,
                n = 1 - a,
                l = 0,
                d = s.tweens.length;
              l < d;
              l++
            )
              s.tweens[l].run(n);
            return (
              r.notifyWith(e, [s, n, i]),
              1 > n && d ? i : (r.resolveWith(e, [s]), !1)
            );
          },
          s = r.promise({
            elem: e,
            props: ae.extend({}, t),
            opts: ae.extend(!0, { specialEasing: {} }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: rt || I(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, o) {
              var i = ae.Tween(
                e,
                s.opts,
                t,
                o,
                s.opts.specialEasing[t] || s.opts.easing,
              );
              return s.tweens.push(i), i;
            },
            stop: function (t) {
              var o = 0,
                i = t ? s.tweens.length : 0;
              if (c) return this;
              for (c = !0; o < i; o++) s.tweens[o].run(1);
              return (
                t ? r.resolveWith(e, [s, t]) : r.rejectWith(e, [s, t]), this
              );
            },
          }),
          d = s.props,
          p,
          c;
        for (z(d, s.opts.specialEasing); a < n; a++)
          if (((p = at[a].call(s, e, d, s.opts)), p)) return p;
        return (
          ae.map(d, R, s),
          ae.isFunction(s.opts.start) && s.opts.start.call(e, s),
          ae.fx.timer(ae.extend(l, { elem: e, anim: s, queue: s.opts.queue })),
          s
            .progress(s.opts.progress)
            .done(s.opts.done, s.opts.complete)
            .fail(s.opts.fail)
            .always(s.opts.always)
        );
      }
      function B(e) {
        return function (t, o) {
          'string' != typeof t && ((o = t), (t = '*'));
          var a = 0,
            i = t.toLowerCase().match(ye) || [],
            n;
          if (ae.isFunction(o))
            for (; (n = i[a++]); )
              '+' === n[0]
                ? ((n = n.slice(1) || '*'), (e[n] = e[n] || []).unshift(o))
                : (e[n] = e[n] || []).push(o);
        };
      }
      function W(e, t, o, i) {
        function a(l) {
          var s;
          return (
            (n[l] = !0),
            ae.each(e[l] || [], function (e, l) {
              var d = l(t, o, i);
              return 'string' != typeof d || r || n[d]
                ? r
                  ? !(s = d)
                  : void 0
                : (t.dataTypes.unshift(d), a(d), !1);
            }),
            s
          );
        }
        var n = {},
          r = e === _t;
        return a(t.dataTypes[0]) || (!n['*'] && a('*'));
      }
      function F(e, t) {
        var o = ae.ajaxSettings.flatOptions || {},
          i,
          a;
        for (i in t) void 0 !== t[i] && ((o[i] ? e : a || (a = {}))[i] = t[i]);
        return a && ae.extend(!0, e, a), e;
      }
      function q(e, t, o) {
        for (var i = e.contents, a = e.dataTypes, n, r, l, s; '*' === a[0]; )
          a.shift(),
            void 0 === n &&
              (n = e.mimeType || t.getResponseHeader('Content-Type'));
        if (n)
          for (r in i)
            if (i[r] && i[r].test(n)) {
              a.unshift(r);
              break;
            }
        if (a[0] in o) l = a[0];
        else {
          for (r in o) {
            if (!a[0] || e.converters[r + ' ' + a[0]]) {
              l = r;
              break;
            }
            s || (s = r);
          }
          l = l || s;
        }
        return l ? (l !== a[0] && a.unshift(l), o[l]) : void 0;
      }
      function Y(e, t, o, i) {
        var a = {},
          n = e.dataTypes.slice(),
          r,
          l,
          s,
          d,
          p;
        if (n[1]) for (s in e.converters) a[s.toLowerCase()] = e.converters[s];
        for (l = n.shift(); l; )
          if (
            (e.responseFields[l] && (o[e.responseFields[l]] = t),
            !p && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (p = l),
            (l = n.shift()),
            l)
          )
            if ('*' === l) l = p;
            else if ('*' !== p && p != l) {
              if (((s = a[p + ' ' + l] || a['* ' + l]), !s))
                for (r in a)
                  if (
                    ((d = r.split(' ')),
                    d[1] === l &&
                      ((s = a[p + ' ' + d[0]] || a['* ' + d[0]]), s))
                  ) {
                    !0 === s
                      ? (s = a[r])
                      : !0 !== a[r] && ((l = d[0]), n.unshift(d[1]));
                    break;
                  }
              if (!0 !== s)
                if (s && e.throws) t = s(t);
                else
                  try {
                    t = s(t);
                  } catch (t) {
                    return {
                      state: 'parsererror',
                      error: s ? t : 'No conversion from ' + p + ' to ' + l,
                    };
                  }
            }
        return { state: 'success', data: t };
      }
      function V(e, t, o, a) {
        if (ae.isArray(t))
          ae.each(t, function (t, i) {
            o || Lt.test(e)
              ? a(e, i)
              : V(e + '[' + ('object' == typeof i ? t : '') + ']', i, o, a);
          });
        else if (!o && 'object' === ae.type(t))
          for (var i in t) V(e + '[' + i + ']', t[i], o, a);
        else a(e, t);
      }
      function X(e) {
        return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
      }
      var U = [],
        Q = U.slice,
        G = U.concat,
        J = U.push,
        Z = U.indexOf,
        K = {},
        $ = K.toString,
        ee = K.hasOwnProperty,
        te = {},
        oe = n.document,
        ie = '2.1.4',
        ae = function (e, t) {
          return new ae.fn.init(e, t);
        },
        ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        re = /^-ms-/,
        le = /-([\da-z])/gi,
        se = function (e, t) {
          return t.toUpperCase();
        };
      (ae.fn = ae.prototype =
        {
          jquery: ie,
          constructor: ae,
          selector: '',
          length: 0,
          toArray: function () {
            return Q.call(this);
          },
          get: function (e) {
            return null == e
              ? Q.call(this)
              : 0 > e
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = ae.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
          },
          each: function (e, t) {
            return ae.each(this, e, t);
          },
          map: function (e) {
            return this.pushStack(
              ae.map(this, function (t, o) {
                return e.call(t, o, t);
              }),
            );
          },
          slice: function () {
            return this.pushStack(Q.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              o = +e + (0 > e ? t : 0);
            return this.pushStack(0 <= o && o < t ? [this[o]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor(null);
          },
          push: J,
          sort: U.sort,
          splice: U.splice,
        }),
        (ae.extend = ae.fn.extend =
          function () {
            var e = arguments[0] || {},
              t = 1,
              o = arguments.length,
              i = !1,
              a,
              n,
              r,
              l,
              s,
              d;
            for (
              'boolean' == typeof e && ((i = e), (e = arguments[t] || {}), t++),
                'object' == typeof e || ae.isFunction(e) || (e = {}),
                t === o && ((e = this), t--);
              t < o;
              t++
            )
              if (null != (a = arguments[t]))
                for (n in a)
                  ((r = e[n]), (l = a[n]), e !== l) &&
                    (i && l && (ae.isPlainObject(l) || (s = ae.isArray(l)))
                      ? (s
                          ? ((s = !1), (d = r && ae.isArray(r) ? r : []))
                          : (d = r && ae.isPlainObject(r) ? r : {}),
                        (e[n] = ae.extend(i, d, l)))
                      : void 0 !== l && (e[n] = l));
            return e;
          }),
        ae.extend({
          expando: 'jQuery' + (ie + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isFunction: function (e) {
            return 'function' === ae.type(e);
          },
          isArray: Array.isArray,
          isWindow: function (e) {
            return null != e && e === e.window;
          },
          isNumeric: function (e) {
            return !ae.isArray(e) && 0 <= e - parseFloat(e) + 1;
          },
          isPlainObject: function (e) {
            return (
              !('object' !== ae.type(e) || e.nodeType || ae.isWindow(e)) &&
              (!e.constructor ||
                ee.call(e.constructor.prototype, 'isPrototypeOf'))
            );
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0;
          },
          type: function (e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
              ? K[$.call(e)] || 'object'
              : typeof e;
          },
          globalEval: function (e) {
            var t = eval,
              o;
            (e = ae.trim(e)),
              e &&
                (1 === e.indexOf('use strict')
                  ? ((o = oe.createElement('script')),
                    (o.text = e),
                    oe.head.appendChild(o).parentNode.removeChild(o))
                  : t(e));
          },
          camelCase: function (e) {
            return e.replace(re, 'ms-').replace(le, se);
          },
          nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          each: function (e, t, o) {
            var a = 0,
              i = e.length,
              n = l(e),
              r;
            if (o) {
              if (n) for (; a < i && ((r = t.apply(e[a], o)), !1 !== r); a++);
              else for (a in e) if (((r = t.apply(e[a], o)), !1 === r)) break;
            } else if (n)
              for (; a < i && ((r = t.call(e[a], a, e[a])), !1 !== r); a++);
            else
              for (a in e) if (((r = t.call(e[a], a, e[a])), !1 === r)) break;
            return e;
          },
          trim: function (e) {
            return null == e ? '' : (e + '').replace(ne, '');
          },
          makeArray: function (e, t) {
            var o = t || [];
            return (
              null != e &&
                (l(Object(e))
                  ? ae.merge(o, 'string' == typeof e ? [e] : e)
                  : J.call(o, e)),
              o
            );
          },
          inArray: function (e, t, o) {
            return null == t ? -1 : Z.call(t, e, o);
          },
          merge: function (e, t) {
            for (var o = +t.length, a = 0, n = e.length; a < o; a++)
              e[n++] = t[a];
            return (e.length = n), e;
          },
          grep: function (e, t, o) {
            for (var a = [], n = 0, i = e.length, r; n < i; n++)
              (r = !t(e[n], n)), r !== !o && a.push(e[n]);
            return a;
          },
          map: function (e, t, o) {
            var a = 0,
              i = e.length,
              n = l(e),
              r = [],
              s;
            if (n)
              for (; a < i; a++) (s = t(e[a], a, o)), null != s && r.push(s);
            else for (a in e) (s = t(e[a], a, o)), null != s && r.push(s);
            return G.apply([], r);
          },
          guid: 1,
          proxy: function (e, t) {
            var o, i, a;
            if (
              ('string' == typeof t && ((o = e[t]), (t = e), (e = o)),
              !!ae.isFunction(e))
            )
              return (
                (i = Q.call(arguments, 2)),
                (a = function () {
                  return e.apply(t || this, i.concat(Q.call(arguments)));
                }),
                (a.guid = e.guid = e.guid || ae.guid++),
                a
              );
          },
          now: Date.now,
          support: te,
        }),
        ae.each(
          [
            'Boolean',
            'Number',
            'String',
            'Function',
            'Array',
            'Date',
            'RegExp',
            'Object',
            'Error',
          ],
          function (e, t) {
            K['[object ' + t + ']'] = t.toLowerCase();
          },
        );
      var de = (function (e) {
        function t(e, t, o, a) {
          var n, r, l, s, d, i, p, u, m, h;
          if (
            ((t ? t.ownerDocument || t : A) !== fe && be(t),
            (t = t || fe),
            (o = o || []),
            (s = t.nodeType),
            'string' != typeof e || !e || (1 !== s && 9 !== s && 11 !== s))
          )
            return o;
          if (!a && ve) {
            if (11 !== s && (n = ee.exec(e)))
              if (!(l = n[1])) {
                if (n[2]) return I.apply(o, t.getElementsByTagName(e)), o;
                if ((l = n[3]) && le.getElementsByClassName)
                  return I.apply(o, t.getElementsByClassName(l)), o;
              } else if (9 === s) {
                if (((r = t.getElementById(l)), !(r && r.parentNode))) return o;
                if (r.id === l) return o.push(r), o;
              } else if (
                t.ownerDocument &&
                (r = t.ownerDocument.getElementById(l)) &&
                we(t, r) &&
                r.id === l
              )
                return o.push(r), o;
            if (le.qsa && (!xe || !xe.test(e))) {
              if (
                ((u = p = k),
                (m = t),
                (h = 1 !== s && e),
                1 === s && 'object' !== t.nodeName.toLowerCase())
              ) {
                for (
                  i = pe(e),
                    (p = t.getAttribute('id'))
                      ? (u = p.replace(oe, '\\$&'))
                      : t.setAttribute('id', u),
                    u = "[id='" + u + "'] ",
                    d = i.length;
                  d--;

                )
                  i[d] = u + g(i[d]);
                (m = (te.test(e) && c(t.parentNode)) || t), (h = i.join(','));
              }
              if (h)
                try {
                  return I.apply(o, m.querySelectorAll(h)), o;
                } catch (e) {
                } finally {
                  p || t.removeAttribute('id');
                }
            }
          }
          return ue(e.replace(Y, '$1'), t, o, a);
        }
        function o() {
          function e(o, i) {
            return (
              t.push(o + ' ') > se.cacheLength && delete e[t.shift()],
              (e[o + ' '] = i)
            );
          }
          var t = [];
          return e;
        }
        function a(e) {
          return (e[k] = !0), e;
        }
        function n(e) {
          var t = fe.createElement('div');
          try {
            return !!e(t);
          } catch (t) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function r(e, t) {
          for (var o = e.split('|'), a = e.length; a--; )
            se.attrHandle[o[a]] = t;
        }
        function l(e, t) {
          var o = t && e,
            i =
              o &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              (~t.sourceIndex || L) - (~e.sourceIndex || L);
          if (i) return i;
          if (o) for (; (o = o.nextSibling); ) if (o === t) return -1;
          return e ? 1 : -1;
        }
        function s(e) {
          return function (t) {
            var o = t.nodeName.toLowerCase();
            return 'input' === o && t.type === e;
          };
        }
        function d(e) {
          return function (t) {
            var o = t.nodeName.toLowerCase();
            return ('input' === o || 'button' === o) && t.type === e;
          };
        }
        function p(e) {
          return a(function (t) {
            return (
              (t = +t),
              a(function (o, a) {
                for (var n = e([], o.length, t), r = n.length, i; r--; )
                  o[(i = n[r])] && (o[i] = !(a[i] = o[i]));
              })
            );
          });
        }
        function c(e) {
          return e && 'undefined' != typeof e.getElementsByTagName && e;
        }
        function u() {}
        function g(e) {
          for (var t = 0, o = e.length, i = ''; t < o; t++) i += e[t].value;
          return i;
        }
        function m(e, t, o) {
          var i = t.dir,
            a = o && 'parentNode' === i,
            n = _++;
          return t.first
            ? function (t, o, n) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || a) return e(t, o, n);
              }
            : function (t, o, r) {
                var l = [w, n],
                  s,
                  d;
                if (r) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || a) && e(t, o, r)) return !0;
                } else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || a) {
                      if (
                        ((d = t[k] || (t[k] = {})),
                        (s = d[i]) && s[0] === w && s[1] === n)
                      )
                        return (l[2] = s[2]);
                      if (((d[i] = l), (l[2] = e(t, o, r)))) return !0;
                    }
              };
        }
        function h(e) {
          return 1 < e.length
            ? function (t, o, a) {
                for (var n = e.length; n--; ) if (!e[n](t, o, a)) return !1;
                return !0;
              }
            : e[0];
        }
        function b(e, o, a) {
          for (var n = 0, i = o.length; n < i; n++) t(e, o[n], a);
          return a;
        }
        function f(e, t, o, a, n) {
          for (var r = [], l = 0, i = e.length, s; l < i; l++)
            (s = e[l]) &&
              (!o || o(s, a, n)) &&
              (r.push(s), null != t && t.push(l));
          return r;
        }
        function y(e, t, o, n, r, i) {
          return (
            n && !n[k] && (n = y(n)),
            r && !r[k] && (r = y(r, i)),
            a(function (a, l, s, d) {
              var p = [],
                c = [],
                u = l.length,
                g = a || b(t || '*', s.nodeType ? [s] : s, []),
                m = e && (a || !t) ? f(g, p, e, s, d) : g,
                h = o ? (r || (a ? e : u || n) ? [] : l) : m,
                y,
                v,
                i;
              if ((o && o(m, h, s, d), n))
                for (y = f(h, c), n(y, [], s, d), v = y.length; v--; )
                  (i = y[v]) && (h[c[v]] = !(m[c[v]] = i));
              if (!a)
                (h = f(h === l ? h.splice(u, h.length) : h)),
                  r ? r(null, l, h, d) : I.apply(l, h);
              else if (r || e) {
                if (r) {
                  for (y = [], v = h.length; v--; )
                    (i = h[v]) && y.push((m[v] = i));
                  r(null, (h = []), y, d);
                }
                for (v = h.length; v--; )
                  (i = h[v]) &&
                    -1 < (y = r ? R(a, i) : p[v]) &&
                    (a[y] = !(l[y] = i));
              }
            })
          );
        }
        function v(e) {
          for (
            var t = e.length,
              o = se.relative[e[0].type],
              a = o || se.relative[' '],
              n = o ? 1 : 0,
              i = m(
                function (e) {
                  return e === s;
                },
                a,
                !0,
              ),
              r = m(
                function (e) {
                  return -1 < R(s, e);
                },
                a,
                !0,
              ),
              l = [
                function (e, t, a) {
                  var n =
                    (!o && (a || t !== ge)) ||
                    ((s = t).nodeType ? i(e, t, a) : r(e, t, a));
                  return (s = null), n;
                },
              ],
              s,
              d,
              p;
            n < t;
            n++
          )
            if ((d = se.relative[e[n].type])) l = [m(h(l), d)];
            else {
              if (
                ((d = se.filter[e[n].type].apply(null, e[n].matches)), d[k])
              ) {
                for (p = ++n; p < t && !se.relative[e[p].type]; p++);
                return y(
                  1 < n && h(l),
                  1 < n &&
                    g(
                      e
                        .slice(0, n - 1)
                        .concat({ value: ' ' === e[n - 2].type ? '*' : '' }),
                    ).replace(Y, '$1'),
                  d,
                  n < p && v(e.slice(n, p)),
                  p < t && v((e = e.slice(p))),
                  p < t && g(e),
                );
              }
              l.push(d);
            }
          return h(l);
        }
        function x(e, o) {
          var n = 0 < o.length,
            r = 0 < e.length,
            i = function (a, l, s, d, p) {
              var c = 0,
                u = '0',
                i = a && [],
                g = [],
                m = ge,
                h = a || (r && se.find.TAG('*', p)),
                b = (w += null == m ? 1 : Math.random() || 0.1),
                y = h.length,
                v,
                x,
                k;
              for (
                p && (ge = l !== fe && l);
                u !== y && null != (v = h[u]);
                u++
              ) {
                if (r && v) {
                  for (x = 0; (k = e[x++]); )
                    if (k(v, l, s)) {
                      d.push(v);
                      break;
                    }
                  p && (w = b);
                }
                n && ((v = !k && v) && c--, a && i.push(v));
              }
              if (((c += u), n && u !== c)) {
                for (x = 0; (k = o[x++]); ) k(i, g, l, s);
                if (a) {
                  if (0 < c) for (; u--; ) i[u] || g[u] || (g[u] = P.call(d));
                  g = f(g);
                }
                I.apply(d, g),
                  p &&
                    !a &&
                    0 < g.length &&
                    1 < c + o.length &&
                    t.uniqueSort(d);
              }
              return p && ((w = b), (ge = m)), i;
            };
          return n ? a(i) : i;
        }
        var k = 'sizzle' + 1 * new Date(),
          A = e.document,
          w = 0,
          _ = 0,
          E = o(),
          C = o(),
          S = o(),
          T = function (e, t) {
            return e === t && (he = !0), 0;
          },
          L = -2147483648,
          M = {}.hasOwnProperty,
          N = [],
          P = N.pop,
          O = N.push,
          I = N.push,
          D = N.slice,
          R = function (e, t) {
            for (var o = 0, i = e.length; o < i; o++) if (e[o] === t) return o;
            return -1;
          },
          H =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          z = '[\\x20\\t\\r\\n\\f]',
          j = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
          B = j.replace('w', 'w#'),
          W =
            '\\[' +
            z +
            '*(' +
            j +
            ')(?:' +
            z +
            '*([*^$|!~]?=)' +
            z +
            '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
            B +
            '))|)' +
            z +
            '*\\]',
          F =
            ':(' +
            j +
            ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
            W +
            ')*)|.*)\\)|)',
          q = /[\x20\t\r\n\f]+/g,
          Y = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
          V = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
          X = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
          U = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
          Q = new RegExp(F),
          G = new RegExp('^' + B + '$'),
          J = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: new RegExp('^(' + j.replace('w', 'w*') + ')'),
            ATTR: new RegExp('^' + W),
            PSEUDO: new RegExp('^' + F),
            CHILD:
              /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext:
              /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
          },
          Z = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          $ = /^[^{]+\{\s*\[native \w/,
          ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          te = /[+~]/,
          oe = /'|\\/g,
          ie = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
          ae = function (e, t, o) {
            var i = String.fromCharCode,
              a = '0x' + t - 65536;
            return a != a || o
              ? t
              : 0 > a
              ? i(a + 65536)
              : i(55296 | (a >> 10), 56320 | (1023 & a));
          },
          ne = function () {
            be();
          },
          re,
          le,
          se,
          de,
          i,
          pe,
          ce,
          ue,
          ge,
          me,
          he,
          be,
          fe,
          ye,
          ve,
          xe,
          ke,
          Ae,
          we;
        try {
          I.apply((N = D.call(A.childNodes)), A.childNodes),
            N[A.childNodes.length].nodeType;
        } catch (t) {
          I = {
            apply: N.length
              ? function (e, t) {
                  O.apply(e, D.call(t));
                }
              : function (e, t) {
                  for (var o = e.length, a = 0; (e[o++] = t[a++]); );
                  e.length = o - 1;
                },
          };
        }
        for (re in ((le = t.support = {}),
        (i = t.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && 'HTML' !== t.nodeName;
          }),
        (be = t.setDocument =
          function (e) {
            var t = e ? e.ownerDocument || e : A,
              o,
              a;
            return t !== fe && 9 === t.nodeType && t.documentElement
              ? ((fe = t),
                (ye = t.documentElement),
                (a = t.defaultView),
                a &&
                  a !== a.top &&
                  (a.addEventListener
                    ? a.addEventListener('unload', ne, !1)
                    : a.attachEvent && a.attachEvent('onunload', ne)),
                (ve = !i(t)),
                (le.attributes = n(function (e) {
                  return (e.className = 'i'), !e.getAttribute('className');
                })),
                (le.getElementsByTagName = n(function (e) {
                  return (
                    e.appendChild(t.createComment('')),
                    !e.getElementsByTagName('*').length
                  );
                })),
                (le.getElementsByClassName = $.test(t.getElementsByClassName)),
                (le.getById = n(function (e) {
                  return (
                    (ye.appendChild(e).id = k),
                    !t.getElementsByName || !t.getElementsByName(k).length
                  );
                })),
                le.getById
                  ? ((se.find.ID = function (e, t) {
                      if ('undefined' != typeof t.getElementById && ve) {
                        var o = t.getElementById(e);
                        return o && o.parentNode ? [o] : [];
                      }
                    }),
                    (se.filter.ID = function (e) {
                      var t = e.replace(ie, ae);
                      return function (e) {
                        return e.getAttribute('id') === t;
                      };
                    }))
                  : (delete se.find.ID,
                    (se.filter.ID = function (e) {
                      var t = e.replace(ie, ae);
                      return function (e) {
                        var o =
                          'undefined' != typeof e.getAttributeNode &&
                          e.getAttributeNode('id');
                        return o && o.value === t;
                      };
                    })),
                (se.find.TAG = le.getElementsByTagName
                  ? function (e, t) {
                      return 'undefined' == typeof t.getElementsByTagName
                        ? le.qsa
                          ? t.querySelectorAll(e)
                          : void 0
                        : t.getElementsByTagName(e);
                    }
                  : function (e, t) {
                      var o = [],
                        a = 0,
                        i = t.getElementsByTagName(e),
                        n;
                      if ('*' === e) {
                        for (; (n = i[a++]); ) 1 === n.nodeType && o.push(n);
                        return o;
                      }
                      return i;
                    }),
                (se.find.CLASS =
                  le.getElementsByClassName &&
                  function (e, t) {
                    if (ve) return t.getElementsByClassName(e);
                  }),
                (ke = []),
                (xe = []),
                (le.qsa = $.test(t.querySelectorAll)) &&
                  (n(function (e) {
                    (ye.appendChild(e).innerHTML =
                      "<a id='" +
                      k +
                      "'></a><select id='" +
                      k +
                      "-\f]' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        xe.push('[*^$]=' + z + '*(?:\'\'|"")'),
                      e.querySelectorAll('[selected]').length ||
                        xe.push('\\[' + z + '*(?:value|' + H + ')'),
                      e.querySelectorAll('[id~=' + k + '-]').length ||
                        xe.push('~='),
                      e.querySelectorAll(':checked').length ||
                        xe.push(':checked'),
                      e.querySelectorAll('a#' + k + '+*').length ||
                        xe.push('.#.+[+~]');
                  }),
                  n(function (e) {
                    var o = t.createElement('input');
                    o.setAttribute('type', 'hidden'),
                      e.appendChild(o).setAttribute('name', 'D'),
                      e.querySelectorAll('[name=d]').length &&
                        xe.push('name' + z + '*[*^$|!~]?='),
                      e.querySelectorAll(':enabled').length ||
                        xe.push(':enabled', ':disabled'),
                      e.querySelectorAll('*,:x'),
                      xe.push(',.*:');
                  })),
                (le.matchesSelector = $.test(
                  (Ae =
                    ye.matches ||
                    ye.webkitMatchesSelector ||
                    ye.mozMatchesSelector ||
                    ye.oMatchesSelector ||
                    ye.msMatchesSelector),
                )) &&
                  n(function (e) {
                    (le.disconnectedMatch = Ae.call(e, 'div')),
                      Ae.call(e, "[s!='']:x"),
                      ke.push('!=', F);
                  }),
                (xe = xe.length && new RegExp(xe.join('|'))),
                (ke = ke.length && new RegExp(ke.join('|'))),
                (o = $.test(ye.compareDocumentPosition)),
                (we =
                  o || $.test(ye.contains)
                    ? function (e, t) {
                        var o = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !!(
                            i &&
                            1 === i.nodeType &&
                            (o.contains
                              ? o.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (T = o
                  ? function (e, o) {
                      if (e === o) return (he = !0), 0;
                      var i =
                        !e.compareDocumentPosition - !o.compareDocumentPosition;
                      return i
                        ? i
                        : ((i =
                            (e.ownerDocument || e) === (o.ownerDocument || o)
                              ? e.compareDocumentPosition(o)
                              : 1),
                          1 & i ||
                          (!le.sortDetached &&
                            o.compareDocumentPosition(e) === i)
                            ? e === t || (e.ownerDocument === A && we(A, e))
                              ? -1
                              : o === t || (o.ownerDocument === A && we(A, o))
                              ? 1
                              : me
                              ? R(me, e) - R(me, o)
                              : 0
                            : 4 & i
                            ? -1
                            : 1);
                    }
                  : function (e, o) {
                      if (e === o) return (he = !0), 0;
                      var a = 0,
                        i = e.parentNode,
                        n = o.parentNode,
                        r = [e],
                        s = [o],
                        d;
                      if (!i || !n)
                        return e === t
                          ? -1
                          : o === t
                          ? 1
                          : i
                          ? -1
                          : n
                          ? 1
                          : me
                          ? R(me, e) - R(me, o)
                          : 0;
                      if (i === n) return l(e, o);
                      for (d = e; (d = d.parentNode); ) r.unshift(d);
                      for (d = o; (d = d.parentNode); ) s.unshift(d);
                      for (; r[a] === s[a]; ) a++;
                      return a
                        ? l(r[a], s[a])
                        : r[a] === A
                        ? -1
                        : s[a] === A
                        ? 1
                        : 0;
                    }),
                t)
              : fe;
          }),
        (t.matches = function (e, o) {
          return t(e, null, null, o);
        }),
        (t.matchesSelector = function (e, o) {
          if (
            ((e.ownerDocument || e) !== fe && be(e),
            (o = o.replace(U, "='$1']")),
            le.matchesSelector &&
              ve &&
              (!ke || !ke.test(o)) &&
              (!xe || !xe.test(o)))
          )
            try {
              var i = Ae.call(e, o);
              if (
                i ||
                le.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (t) {}
          return 0 < t(o, fe, null, [e]).length;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== fe && be(e), we(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== fe && be(e);
          var o = se.attrHandle[t.toLowerCase()],
            i =
              o && M.call(se.attrHandle, t.toLowerCase())
                ? o(e, t, !ve)
                : void 0;
          return void 0 === i
            ? le.attributes || !ve
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null
            : i;
        }),
        (t.error = function (e) {
          throw new Error('Syntax error, unrecognized expression: ' + e);
        }),
        (t.uniqueSort = function (e) {
          var t = [],
            o = 0,
            a = 0,
            i;
          if (
            ((he = !le.detectDuplicates),
            (me = !le.sortStable && e.slice(0)),
            e.sort(T),
            he)
          ) {
            for (; (i = e[a++]); ) i === e[a] && (o = t.push(a));
            for (; o--; ) e.splice(t[o], 1);
          }
          return (me = null), e;
        }),
        (de = t.getText =
          function (e) {
            var t = '',
              o = 0,
              i = e.nodeType,
              a;
            if (!i) for (; (a = e[o++]); ) t += de(a);
            else if (1 === i || 9 === i || 11 === i) {
              if ('string' == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) t += de(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
            return t;
          }),
        (se = t.selectors =
          {
            cacheLength: 50,
            createPseudo: a,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(ie, ae)),
                  (e[3] = (e[3] || e[4] || e[5] || '').replace(ie, ae)),
                  '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  'nth' === e[1].slice(0, 3)
                    ? (!e[3] && t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ('even' === e[3] || 'odd' === e[3]))),
                      (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t = !e[6] && e[2],
                  o;
                return J.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || '')
                      : t &&
                        Q.test(t) &&
                        (o = pe(t, !0)) &&
                        (o = t.indexOf(')', t.length - o) - t.length) &&
                        ((e[0] = e[0].slice(0, o)), (e[2] = t.slice(0, o))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(ie, ae).toLowerCase();
                return '*' === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = E[e + ' '];
                return (
                  t ||
                  ((t = new RegExp('(^|' + z + ')' + e + '(' + z + '|$)')) &&
                    E(e, function (e) {
                      return t.test(
                        ('string' == typeof e.className && e.className) ||
                          ('undefined' != typeof e.getAttribute &&
                            e.getAttribute('class')) ||
                          '',
                      );
                    }))
                );
              },
              ATTR: function (e, o, i) {
                return function (a) {
                  var n = t.attr(a, e);
                  return null == n
                    ? '!=' === o
                    : !o ||
                        ((n += ''),
                        '=' === o
                          ? n === i
                          : '!=' === o
                          ? n !== i
                          : '^=' === o
                          ? i && 0 === n.indexOf(i)
                          : '*=' === o
                          ? i && -1 < n.indexOf(i)
                          : '$=' === o
                          ? i && n.slice(-i.length) === i
                          : '~=' === o
                          ? -1 < (' ' + n.replace(q, ' ') + ' ').indexOf(i)
                          : '|=' == o &&
                            (n === i || n.slice(0, i.length + 1) === i + '-'));
                };
              },
              CHILD: function (e, t, o, i, a) {
                var n = 'nth' !== e.slice(0, 3),
                  r = 'last' !== e.slice(-4),
                  l = 'of-type' === t;
                return 1 === i && 0 === a
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, o, s) {
                      var d = n == r ? 'previousSibling' : 'nextSibling',
                        p = t.parentNode,
                        c = l && t.nodeName.toLowerCase(),
                        u = !s && !l,
                        g,
                        m,
                        h,
                        b,
                        f,
                        y;
                      if (p) {
                        if (n) {
                          for (; d; ) {
                            for (h = t; (h = h[d]); )
                              if (
                                l
                                  ? h.nodeName.toLowerCase() === c
                                  : 1 === h.nodeType
                              )
                                return !1;
                            y = d = 'only' === e && !y && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((y = [r ? p.firstChild : p.lastChild]), r && u)) {
                          for (
                            m = p[k] || (p[k] = {}),
                              g = m[e] || [],
                              f = g[0] === w && g[1],
                              b = g[0] === w && g[2],
                              h = f && p.childNodes[f];
                            (h = (++f && h && h[d]) || (b = f = 0) || y.pop());

                          )
                            if (1 === h.nodeType && ++b && h === t) {
                              m[e] = [w, f, b];
                              break;
                            }
                        } else if (
                          u &&
                          (g = (t[k] || (t[k] = {}))[e]) &&
                          g[0] === w
                        )
                          b = g[1];
                        else
                          for (
                            ;
                            (h =
                              (++f && h && h[d]) || (b = f = 0) || y.pop()) &&
                            !(
                              (l
                                ? h.nodeName.toLowerCase() === c
                                : 1 === h.nodeType) &&
                              ++b &&
                              (u && ((h[k] || (h[k] = {}))[e] = [w, b]),
                              h === t)
                            );

                          );
                        return (b -= a), b === i || (0 == b % i && 0 <= b / i);
                      }
                    };
              },
              PSEUDO: function (e, o) {
                var n =
                    se.pseudos[e] ||
                    se.setFilters[e.toLowerCase()] ||
                    t.error('unsupported pseudo: ' + e),
                  i;
                return n[k]
                  ? n(o)
                  : 1 < n.length
                  ? ((i = [e, e, '', o]),
                    se.setFilters.hasOwnProperty(e.toLowerCase())
                      ? a(function (e, t) {
                          for (var a = n(e, o), r = a.length, i; r--; )
                            (i = R(e, a[r])), (e[i] = !(t[i] = a[r]));
                        })
                      : function (e) {
                          return n(e, 0, i);
                        })
                  : n;
              },
            },
            pseudos: {
              not: a(function (e) {
                var t = [],
                  o = [],
                  n = ce(e.replace(Y, '$1'));
                return n[k]
                  ? a(function (e, t, o, a) {
                      for (var r = n(e, null, a, []), l = e.length, i; l--; )
                        (i = r[l]) && (e[l] = !(t[l] = i));
                    })
                  : function (e, i, a) {
                      return (
                        (t[0] = e), n(t, null, a, o), (t[0] = null), !o.pop()
                      );
                    };
              }),
              has: a(function (e) {
                return function (o) {
                  return 0 < t(e, o).length;
                };
              }),
              contains: a(function (e) {
                return (
                  (e = e.replace(ie, ae)),
                  function (t) {
                    return (
                      -1 < (t.textContent || t.innerText || de(t)).indexOf(e)
                    );
                  }
                );
              }),
              lang: a(function (e) {
                return (
                  G.test(e || '') || t.error('unsupported lang: ' + e),
                  (e = e.replace(ie, ae).toLowerCase()),
                  function (t) {
                    var o;
                    do
                      if (
                        (o = ve
                          ? t.lang
                          : t.getAttribute('xml:lang') ||
                            t.getAttribute('lang'))
                      )
                        return (
                          (o = o.toLowerCase()),
                          o === e || 0 === o.indexOf(e + '-')
                        );
                    while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var o = e.location && e.location.hash;
                return o && o.slice(1) === t.id;
              },
              root: function (e) {
                return e === ye;
              },
              focus: function (e) {
                return (
                  e === fe.activeElement &&
                  (!fe.hasFocus || fe.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return !1 === e.disabled;
              },
              disabled: function (e) {
                return !0 === e.disabled;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ('input' === t && !!e.checked) ||
                  ('option' === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (6 > e.nodeType) return !1;
                return !0;
              },
              parent: function (e) {
                return !se.pseudos.empty(e);
              },
              header: function (e) {
                return K.test(e.nodeName);
              },
              input: function (e) {
                return Z.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t && 'button' === e.type) || 'button' === t;
              },
              text: function (e) {
                var t;
                return (
                  'input' === e.nodeName.toLowerCase() &&
                  'text' === e.type &&
                  (null == (t = e.getAttribute('type')) ||
                    'text' === t.toLowerCase())
                );
              },
              first: p(function () {
                return [0];
              }),
              last: p(function (e, t) {
                return [t - 1];
              }),
              eq: p(function (e, t, o) {
                return [0 > o ? o + t : o];
              }),
              even: p(function (e, t) {
                for (var o = 0; o < t; o += 2) e.push(o);
                return e;
              }),
              odd: p(function (e, t) {
                for (var o = 1; o < t; o += 2) e.push(o);
                return e;
              }),
              lt: p(function (e, t, o) {
                for (var a = 0 > o ? o + t : o; 0 <= --a; ) e.push(a);
                return e;
              }),
              gt: p(function (e, t, o) {
                for (var a = 0 > o ? o + t : o; ++a < t; ) e.push(a);
                return e;
              }),
            },
          }),
        (se.pseudos.nth = se.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          se.pseudos[re] = s(re);
        for (re in { submit: !0, reset: !0 }) se.pseudos[re] = d(re);
        return (
          (u.prototype = se.filters = se.pseudos),
          (se.setFilters = new u()),
          (pe = t.tokenize =
            function (e, o) {
              var i = C[e + ' '],
                a,
                n,
                r,
                l,
                s,
                d,
                p;
              if (i) return o ? 0 : i.slice(0);
              for (s = e, d = [], p = se.preFilter; s; ) {
                for (l in ((!a || (n = V.exec(s))) &&
                  (n && (s = s.slice(n[0].length) || s), d.push((r = []))),
                (a = !1),
                (n = X.exec(s)) &&
                  ((a = n.shift()),
                  r.push({ value: a, type: n[0].replace(Y, ' ') }),
                  (s = s.slice(a.length))),
                se.filter))
                  (n = J[l].exec(s)) &&
                    (!p[l] || (n = p[l](n))) &&
                    ((a = n.shift()),
                    r.push({ value: a, type: l, matches: n }),
                    (s = s.slice(a.length)));
                if (!a) break;
              }
              return o ? s.length : s ? t.error(e) : C(e, d).slice(0);
            }),
          (ce = t.compile =
            function (e, t) {
              var o = [],
                a = [],
                n = S[e + ' '],
                r;
              if (!n) {
                for (t || (t = pe(e)), r = t.length; r--; )
                  (n = v(t[r])), n[k] ? o.push(n) : a.push(n);
                (n = S(e, x(a, o))), (n.selector = e);
              }
              return n;
            }),
          (ue = t.select =
            function (e, t, o, a) {
              var n = 'function' == typeof e && e,
                r = !a && pe((e = n.selector || e)),
                l,
                i,
                s,
                d,
                p;
              if (((o = o || []), 1 === r.length)) {
                if (
                  ((i = r[0] = r[0].slice(0)),
                  2 < i.length &&
                    'ID' === (s = i[0]).type &&
                    le.getById &&
                    9 === t.nodeType &&
                    ve &&
                    se.relative[i[1].type])
                ) {
                  if (
                    ((t = (se.find.ID(s.matches[0].replace(ie, ae), t) ||
                      [])[0]),
                    !t)
                  )
                    return o;
                  n && (t = t.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                for (
                  l = J.needsContext.test(e) ? 0 : i.length;
                  l-- && ((s = i[l]), !se.relative[(d = s.type)]);

                )
                  if (
                    (p = se.find[d]) &&
                    (a = p(
                      s.matches[0].replace(ie, ae),
                      (te.test(i[0].type) && c(t.parentNode)) || t,
                    ))
                  ) {
                    if ((i.splice(l, 1), (e = a.length && g(i)), !e))
                      return I.apply(o, a), o;
                    break;
                  }
              }
              return (
                (n || ce(e, r))(
                  a,
                  t,
                  !ve,
                  o,
                  (te.test(e) && c(t.parentNode)) || t,
                ),
                o
              );
            }),
          (le.sortStable = k.split('').sort(T).join('') === k),
          (le.detectDuplicates = !!he),
          be(),
          (le.sortDetached = n(function (e) {
            return 1 & e.compareDocumentPosition(fe.createElement('div'));
          })),
          n(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              '#' === e.firstChild.getAttribute('href')
            );
          }) ||
            r('type|href|height|width', function (e, t, o) {
              if (!o)
                return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
            }),
          (le.attributes &&
            n(function (e) {
              return (
                (e.innerHTML = '<input/>'),
                e.firstChild.setAttribute('value', ''),
                '' === e.firstChild.getAttribute('value')
              );
            })) ||
            r('value', function (e, t, o) {
              if (!o && 'input' === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          n(function (e) {
            return null == e.getAttribute('disabled');
          }) ||
            r(H, function (e, t, o) {
              var i;
              if (!o)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
            }),
          t
        );
      })(n);
      (ae.find = de),
        (ae.expr = de.selectors),
        (ae.expr[':'] = ae.expr.pseudos),
        (ae.unique = de.uniqueSort),
        (ae.text = de.getText),
        (ae.isXMLDoc = de.isXML),
        (ae.contains = de.contains);
      var pe = ae.expr.match.needsContext,
        ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ue = /^.[^:#\[\.,]*$/;
      (ae.filter = function (e, t, o) {
        var i = t[0];
        return (
          o && (e = ':not(' + e + ')'),
          1 === t.length && 1 === i.nodeType
            ? ae.find.matchesSelector(i, e)
              ? [i]
              : []
            : ae.find.matches(
                e,
                ae.grep(t, function (e) {
                  return 1 === e.nodeType;
                }),
              )
        );
      }),
        ae.fn.extend({
          find: function (e) {
            var t = this.length,
              o = [],
              a = this,
              n;
            if ('string' != typeof e)
              return this.pushStack(
                ae(e).filter(function () {
                  for (n = 0; n < t; n++)
                    if (ae.contains(a[n], this)) return !0;
                }),
              );
            for (n = 0; n < t; n++) ae.find(e, a[n], o);
            return (
              (o = this.pushStack(1 < t ? ae.unique(o) : o)),
              (o.selector = this.selector ? this.selector + ' ' + e : e),
              o
            );
          },
          filter: function (e) {
            return this.pushStack(s(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(s(this, e || [], !0));
          },
          is: function (e) {
            return !!s(
              this,
              'string' == typeof e && pe.test(e) ? ae(e) : e || [],
              !1,
            ).length;
          },
        });
      var ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = (ae.fn.init = function (e, t) {
          var o, i;
          if (!e) return this;
          if ('string' == typeof e) {
            if (
              ((o =
                '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
                  ? [null, e, null]
                  : ge.exec(e)),
              o && (o[1] || !t))
            ) {
              if (o[1]) {
                if (
                  ((t = t instanceof ae ? t[0] : t),
                  ae.merge(
                    this,
                    ae.parseHTML(
                      o[1],
                      t && t.nodeType ? t.ownerDocument || t : oe,
                      !0,
                    ),
                  ),
                  ce.test(o[1]) && ae.isPlainObject(t))
                )
                  for (o in t)
                    ae.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this;
              }
              return (
                (i = oe.getElementById(o[2])),
                i && i.parentNode && ((this.length = 1), (this[0] = i)),
                (this.context = oe),
                (this.selector = e),
                this
              );
            }
            return !t || t.jquery
              ? (t || he).find(e)
              : this.constructor(t).find(e);
          }
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : ae.isFunction(e)
            ? 'undefined' == typeof he.ready
              ? e(ae)
              : he.ready(e)
            : (void 0 !== e.selector &&
                ((this.selector = e.selector), (this.context = e.context)),
              ae.makeArray(e, this));
        }),
        he;
      (me.prototype = ae.fn), (he = ae(oe));
      var be = /^(?:parents|prev(?:Until|All))/,
        fe = { children: !0, contents: !0, next: !0, prev: !0 };
      ae.extend({
        dir: function (e, t, o) {
          for (var i = []; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (void 0 !== o && ae(e).is(o)) break;
              i.push(e);
            }
          return i;
        },
        sibling: function (e, t) {
          for (var o = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && o.push(e);
          return o;
        },
      }),
        ae.fn.extend({
          has: function (e) {
            var t = ae(e, this),
              o = t.length;
            return this.filter(function () {
              for (var e = 0; e < o; e++)
                if (ae.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            for (
              var o = 0,
                i = this.length,
                a = [],
                n =
                  pe.test(e) || 'string' != typeof e
                    ? ae(e, t || this.context)
                    : 0,
                r;
              o < i;
              o++
            )
              for (r = this[o]; r && r !== t; r = r.parentNode)
                if (
                  11 > r.nodeType &&
                  (n
                    ? -1 < n.index(r)
                    : 1 === r.nodeType && ae.find.matchesSelector(r, e))
                ) {
                  a.push(r);
                  break;
                }
            return this.pushStack(1 < a.length ? ae.unique(a) : a);
          },
          index: function (e) {
            return e
              ? 'string' == typeof e
                ? Z.call(ae(e), this[0])
                : Z.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(ae.unique(ae.merge(this.get(), ae(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e),
            );
          },
        }),
        ae.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return ae.dir(e, 'parentNode');
            },
            parentsUntil: function (e, t, o) {
              return ae.dir(e, 'parentNode', o);
            },
            next: function (e) {
              return d(e, 'nextSibling');
            },
            prev: function (e) {
              return d(e, 'previousSibling');
            },
            nextAll: function (e) {
              return ae.dir(e, 'nextSibling');
            },
            prevAll: function (e) {
              return ae.dir(e, 'previousSibling');
            },
            nextUntil: function (e, t, o) {
              return ae.dir(e, 'nextSibling', o);
            },
            prevUntil: function (e, t, o) {
              return ae.dir(e, 'previousSibling', o);
            },
            siblings: function (e) {
              return ae.sibling((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return ae.sibling(e.firstChild);
            },
            contents: function (e) {
              return e.contentDocument || ae.merge([], e.childNodes);
            },
          },
          function (e, t) {
            ae.fn[e] = function (o, i) {
              var a = ae.map(this, t, o);
              return (
                'Until' !== e.slice(-5) && (i = o),
                i && 'string' == typeof i && (a = ae.filter(i, a)),
                1 < this.length &&
                  (!fe[e] && ae.unique(a), be.test(e) && a.reverse()),
                this.pushStack(a)
              );
            };
          },
        );
      var ye = /\S+/g,
        ve = {};
      (ae.Callbacks = function (e) {
        e = 'string' == typeof e ? ve[e] || p(e) : ae.extend({}, e);
        var t = [],
          o = !e.once && [],
          i = function (p) {
            for (
              n = e.memory && p,
                r = !0,
                c = s || 0,
                s = 0,
                d = t.length,
                l = !0;
              t && c < d;
              c++
            )
              if (!1 === t[c].apply(p[0], p[1]) && e.stopOnFalse) {
                n = !1;
                break;
              }
            (l = !1),
              t && (o ? o.length && i(o.shift()) : n ? (t = []) : a.disable());
          },
          a = {
            add: function () {
              if (t) {
                var o = t.length;
                (function o(i) {
                  ae.each(i, function (i, n) {
                    var r = ae.type(n);
                    'function' === r
                      ? (!e.unique || !a.has(n)) && t.push(n)
                      : n && n.length && 'string' !== r && o(n);
                  });
                })(arguments),
                  l ? (d = t.length) : n && ((s = o), i(n));
              }
              return this;
            },
            remove: function () {
              return (
                t &&
                  ae.each(arguments, function (e, o) {
                    for (var i; -1 < (i = ae.inArray(o, t, i)); )
                      t.splice(i, 1), l && (i <= d && d--, i <= c && c--);
                  }),
                this
              );
            },
            has: function (e) {
              return e ? -1 < ae.inArray(e, t) : !!(t && t.length);
            },
            empty: function () {
              return (t = []), (d = 0), this;
            },
            disable: function () {
              return (t = o = n = void 0), this;
            },
            disabled: function () {
              return !t;
            },
            lock: function () {
              return (o = void 0), n || a.disable(), this;
            },
            locked: function () {
              return !o;
            },
            fireWith: function (e, a) {
              return (
                t &&
                  (!r || o) &&
                  ((a = a || []),
                  (a = [e, a.slice ? a.slice() : a]),
                  l ? o.push(a) : i(a)),
                this
              );
            },
            fire: function () {
              return a.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          },
          n,
          r,
          l,
          s,
          d,
          c;
        return a;
      }),
        ae.extend({
          Deferred: function (e) {
            var t = [
                ['resolve', 'done', ae.Callbacks('once memory'), 'resolved'],
                ['reject', 'fail', ae.Callbacks('once memory'), 'rejected'],
                ['notify', 'progress', ae.Callbacks('memory')],
              ],
              o = 'pending',
              a = {
                state: function () {
                  return o;
                },
                always: function () {
                  return n.done(arguments).fail(arguments), this;
                },
                then: function () {
                  var e = arguments;
                  return ae
                    .Deferred(function (o) {
                      ae.each(t, function (t, i) {
                        var r = ae.isFunction(e[t]) && e[t];
                        n[i[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && ae.isFunction(e.promise)
                            ? e
                                .promise()
                                .done(o.resolve)
                                .fail(o.reject)
                                .progress(o.notify)
                            : o[i[0] + 'With'](
                                this === a ? o.promise() : this,
                                r ? [e] : arguments,
                              );
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                promise: function (e) {
                  return null == e ? a : ae.extend(e, a);
                },
              },
              n = {};
            return (
              (a.pipe = a.then),
              ae.each(t, function (e, i) {
                var r = i[2],
                  l = i[3];
                (a[i[1]] = r.add),
                  l &&
                    r.add(
                      function () {
                        o = l;
                      },
                      t[1 ^ e][2].disable,
                      t[2][2].lock,
                    ),
                  (n[i[0]] = function () {
                    return (
                      n[i[0] + 'With'](this === n ? a : this, arguments), this
                    );
                  }),
                  (n[i[0] + 'With'] = r.fireWith);
              }),
              a.promise(n),
              e && e.call(n, n),
              n
            );
          },
          when: function (e) {
            var t = 0,
              o = Q.call(arguments),
              i = o.length,
              a = 1 !== i || (e && ae.isFunction(e.promise)) ? i : 0,
              n = 1 === a ? e : ae.Deferred(),
              r = function (e, t, o) {
                return function (i) {
                  (t[e] = this),
                    (o[e] = 1 < arguments.length ? Q.call(arguments) : i),
                    o === l ? n.notifyWith(t, o) : !--a && n.resolveWith(t, o);
                };
              },
              l,
              s,
              d;
            if (1 < i)
              for (l = Array(i), s = Array(i), d = Array(i); t < i; t++)
                o[t] && ae.isFunction(o[t].promise)
                  ? o[t]
                      .promise()
                      .done(r(t, d, o))
                      .fail(n.reject)
                      .progress(r(t, s, l))
                  : --a;
            return a || n.resolveWith(d, o), n.promise();
          },
        });
      var xe;
      (ae.fn.ready = function (e) {
        return ae.ready.promise().done(e), this;
      }),
        ae.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function (e) {
            e ? ae.readyWait++ : ae.ready(!0);
          },
          ready: function (e) {
            (!0 === e ? !--ae.readyWait : !ae.isReady) &&
              ((ae.isReady = !0),
              (!0 !== e && 0 < --ae.readyWait) ||
                (xe.resolveWith(oe, [ae]),
                ae.fn.triggerHandler &&
                  (ae(oe).triggerHandler('ready'), ae(oe).off('ready'))));
          },
        }),
        (ae.ready.promise = function (e) {
          return (
            xe ||
              ((xe = ae.Deferred()),
              'complete' === oe.readyState
                ? setTimeout(ae.ready)
                : (oe.addEventListener('DOMContentLoaded', c, !1),
                  n.addEventListener('load', c, !1))),
            xe.promise(e)
          );
        }),
        ae.ready.promise();
      var ke = (ae.access = function (e, t, o, a, n, r, l) {
        var s = 0,
          i = e.length,
          d = null == o;
        if ('object' === ae.type(o))
          for (s in ((n = !0), o)) ae.access(e, t, s, o[s], !0, r, l);
        else if (
          void 0 !== a &&
          ((n = !0),
          ae.isFunction(a) || (l = !0),
          d &&
            (l
              ? (t.call(e, a), (t = null))
              : ((d = t),
                (t = function (e, t, o) {
                  return d.call(ae(e), o);
                }))),
          t)
        )
          for (; s < i; s++) t(e[s], o, l ? a : a.call(e[s], s, t(e[s], o)));
        return n ? e : d ? t.call(e) : i ? t(e[0], o) : r;
      });
      (ae.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }),
        (u.uid = 1),
        (u.accepts = ae.acceptData),
        (u.prototype = {
          key: function (e) {
            if (!u.accepts(e)) return 0;
            var t = {},
              o = e[this.expando];
            if (!o) {
              o = u.uid++;
              try {
                (t[this.expando] = { value: o }), Object.defineProperties(e, t);
              } catch (i) {
                (t[this.expando] = o), ae.extend(e, t);
              }
            }
            return this.cache[o] || (this.cache[o] = {}), o;
          },
          set: function (e, t, o) {
            var i = this.key(e),
              a = this.cache[i],
              n;
            if ('string' == typeof t) a[t] = o;
            else if (ae.isEmptyObject(a)) ae.extend(this.cache[i], t);
            else for (n in t) a[n] = t[n];
            return a;
          },
          get: function (e, t) {
            var o = this.cache[this.key(e)];
            return void 0 === t ? o : o[t];
          },
          access: function (e, t, o) {
            var i;
            return void 0 === t || (t && 'string' == typeof t && void 0 === o)
              ? ((i = this.get(e, t)),
                void 0 === i ? this.get(e, ae.camelCase(t)) : i)
              : (this.set(e, t, o), void 0 === o ? t : o);
          },
          remove: function (e, t) {
            var o = this.key(e),
              a = this.cache[o],
              n,
              i,
              r;
            if (void 0 === t) this.cache[o] = {};
            else
              for (
                ae.isArray(t)
                  ? (i = t.concat(t.map(ae.camelCase)))
                  : ((r = ae.camelCase(t)),
                    (t in a)
                      ? (i = [t, r])
                      : ((i = r), (i = (i in a) ? [i] : i.match(ye) || []))),
                  n = i.length;
                n--;

              )
                delete a[i[n]];
          },
          hasData: function (e) {
            return !ae.isEmptyObject(this.cache[e[this.expando]] || {});
          },
          discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]];
          },
        });
      var Ae = new u(),
        we = new u(),
        _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
      ae.extend({
        hasData: function (e) {
          return we.hasData(e) || Ae.hasData(e);
        },
        data: function (e, t, o) {
          return we.access(e, t, o);
        },
        removeData: function (e, t) {
          we.remove(e, t);
        },
        _data: function (e, t, o) {
          return Ae.access(e, t, o);
        },
        _removeData: function (e, t) {
          Ae.remove(e, t);
        },
      }),
        ae.fn.extend({
          data: function (e, t) {
            var o = this[0],
              a = o && o.attributes,
              n,
              i,
              r;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = we.get(o)),
                1 === o.nodeType && !Ae.get(o, 'hasDataAttrs'))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    ((i = a[n].name),
                    0 === i.indexOf('data-') &&
                      ((i = ae.camelCase(i.slice(5))), g(o, i, r[i])));
                Ae.set(o, 'hasDataAttrs', !0);
              }
              return r;
            }
            return 'object' == typeof e
              ? this.each(function () {
                  we.set(this, e);
                })
              : ke(
                  this,
                  function (t) {
                    var i = ae.camelCase(e),
                      a;
                    return o && void 0 === t
                      ? ((a = we.get(o, e)), void 0 !== a)
                        ? a
                        : ((a = we.get(o, i)), void 0 !== a)
                        ? a
                        : ((a = g(o, i, void 0)), void 0 === a ? void 0 : a)
                      : void this.each(function () {
                          var o = we.get(this, i);
                          we.set(this, i, t),
                            -1 !== e.indexOf('-') &&
                              void 0 !== o &&
                              we.set(this, e, t);
                        });
                  },
                  null,
                  t,
                  1 < arguments.length,
                  null,
                  !0,
                );
          },
          removeData: function (e) {
            return this.each(function () {
              we.remove(this, e);
            });
          },
        }),
        ae.extend({
          queue: function (e, t, o) {
            var i;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (i = Ae.get(e, t)),
                o &&
                  (!i || ae.isArray(o)
                    ? (i = Ae.access(e, t, ae.makeArray(o)))
                    : i.push(o)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var o = ae.queue(e, t),
              i = o.length,
              a = o.shift(),
              n = ae._queueHooks(e, t),
              r = function () {
                ae.dequeue(e, t);
              };
            'inprogress' === a && ((a = o.shift()), i--),
              a &&
                ('fx' === t && o.unshift('inprogress'),
                delete n.stop,
                a.call(e, r, n)),
              !i && n && n.empty.fire();
          },
          _queueHooks: function (e, t) {
            var o = t + 'queueHooks';
            return (
              Ae.get(e, o) ||
              Ae.access(e, o, {
                empty: ae.Callbacks('once memory').add(function () {
                  Ae.remove(e, [t + 'queue', o]);
                }),
              })
            );
          },
        }),
        ae.fn.extend({
          queue: function (e, t) {
            var o = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), o--),
              arguments.length < o
                ? ae.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var o = ae.queue(this, e, t);
                    ae._queueHooks(this, e),
                      'fx' === e &&
                        'inprogress' !== o[0] &&
                        ae.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              ae.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', []);
          },
          promise: function (e, t) {
            var o = 1,
              a = ae.Deferred(),
              n = this,
              r = this.length,
              i = function () {
                --o || a.resolveWith(n, [n]);
              },
              l;
            for (
              'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
              r--;

            )
              (l = Ae.get(n[r], e + 'queueHooks')),
                l && l.empty && (o++, l.empty.add(i));
            return i(), a.promise(t);
          },
        });
      var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ['Top', 'Right', 'Bottom', 'Left'],
        Te = function (e, t) {
          return (
            (e = t || e),
            'none' === ae.css(e, 'display') || !ae.contains(e.ownerDocument, e)
          );
        },
        Le = /^(?:checkbox|radio)$/i;
      (function () {
        var e = oe.createDocumentFragment(),
          t = e.appendChild(oe.createElement('div')),
          o = oe.createElement('input');
        o.setAttribute('type', 'radio'),
          o.setAttribute('checked', 'checked'),
          o.setAttribute('name', 't'),
          t.appendChild(o),
          (te.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = '<textarea>x</textarea>'),
          (te.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
      })();
      var Me = 'undefined';
      te.focusinBubbles = 'onfocusin' in n;
      var Ne = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        Ie = /^([^.]*)(?:\.(.+)|)$/;
      (ae.event = {
        global: {},
        add: function (o, e, i, a, n) {
          var r = Ae.get(o),
            l,
            s,
            d,
            p,
            c,
            t,
            u,
            g,
            m,
            h,
            b;
          if (r)
            for (
              i.handler && ((l = i), (i = l.handler), (n = l.selector)),
                i.guid || (i.guid = ae.guid++),
                (p = r.events) || (p = r.events = {}),
                (s = r.handle) ||
                  (s = r.handle =
                    function (t) {
                      return typeof ae != Me && ae.event.triggered !== t.type
                        ? ae.event.dispatch.apply(o, arguments)
                        : void 0;
                    }),
                e = (e || '').match(ye) || [''],
                c = e.length;
              c--;

            )
              ((d = Ie.exec(e[c]) || []),
              (m = b = d[1]),
              (h = (d[2] || '').split('.').sort()),
              !!m) &&
                ((u = ae.event.special[m] || {}),
                (m = (n ? u.delegateType : u.bindType) || m),
                (u = ae.event.special[m] || {}),
                (t = ae.extend(
                  {
                    type: m,
                    origType: b,
                    data: a,
                    handler: i,
                    guid: i.guid,
                    selector: n,
                    needsContext: n && ae.expr.match.needsContext.test(n),
                    namespace: h.join('.'),
                  },
                  l,
                )),
                (g = p[m]) ||
                  ((g = p[m] = []),
                  (g.delegateCount = 0),
                  (!u.setup || !1 === u.setup.call(o, a, h, s)) &&
                    o.addEventListener &&
                    o.addEventListener(m, s, !1)),
                u.add &&
                  (u.add.call(o, t),
                  !t.handler.guid && (t.handler.guid = i.guid)),
                n ? g.splice(g.delegateCount++, 0, t) : g.push(t),
                (ae.event.global[m] = !0));
        },
        remove: function (e, o, i, a, n) {
          var r = Ae.hasData(e) && Ae.get(e),
            l,
            s,
            d,
            p,
            c,
            t,
            u,
            g,
            m,
            h,
            b;
          if (r && (p = r.events)) {
            for (o = (o || '').match(ye) || [''], c = o.length; c--; ) {
              if (
                ((d = Ie.exec(o[c]) || []),
                (m = b = d[1]),
                (h = (d[2] || '').split('.').sort()),
                !m)
              ) {
                for (m in p) ae.event.remove(e, m + o[c], i, a, !0);
                continue;
              }
              for (
                u = ae.event.special[m] || {},
                  m = (a ? u.delegateType : u.bindType) || m,
                  g = p[m] || [],
                  d =
                    d[2] &&
                    new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                  s = l = g.length;
                l--;

              )
                (t = g[l]),
                  (n || b === t.origType) &&
                    (!i || i.guid === t.guid) &&
                    (!d || d.test(t.namespace)) &&
                    (!a || a === t.selector || ('**' === a && t.selector)) &&
                    (g.splice(l, 1),
                    t.selector && g.delegateCount--,
                    u.remove && u.remove.call(e, t));
              s &&
                !g.length &&
                ((!u.teardown || !1 === u.teardown.call(e, h, r.handle)) &&
                  ae.removeEvent(e, m, r.handle),
                delete p[m]);
            }
            ae.isEmptyObject(p) && (delete r.handle, Ae.remove(e, 'events'));
          }
        },
        trigger: function (e, t, o, a) {
          var r = [o || oe],
            l = ee.call(e, 'type') ? e.type : e,
            s = ee.call(e, 'namespace') ? e.namespace.split('.') : [],
            d,
            i,
            p,
            c,
            u,
            g,
            m;
          if (
            ((i = p = o = o || oe), 3 !== o.nodeType && 8 !== o.nodeType) &&
            !Oe.test(l + ae.event.triggered) &&
            (0 <= l.indexOf('.') &&
              ((s = l.split('.')), (l = s.shift()), s.sort()),
            (u = 0 > l.indexOf(':') && 'on' + l),
            (e = e[ae.expando]
              ? e
              : new ae.Event(l, 'object' == typeof e && e)),
            (e.isTrigger = a ? 2 : 3),
            (e.namespace = s.join('.')),
            (e.namespace_re = e.namespace
              ? new RegExp('(^|\\.)' + s.join('\\.(?:.*\\.|)') + '(\\.|$)')
              : null),
            (e.result = void 0),
            e.target || (e.target = o),
            (t = null == t ? [e] : ae.makeArray(t, [e])),
            (m = ae.event.special[l] || {}),
            a || !m.trigger || !1 !== m.trigger.apply(o, t))
          ) {
            if (!a && !m.noBubble && !ae.isWindow(o)) {
              for (
                c = m.delegateType || l, Oe.test(c + l) || (i = i.parentNode);
                i;
                i = i.parentNode
              )
                r.push(i), (p = i);
              p === (o.ownerDocument || oe) &&
                r.push(p.defaultView || p.parentWindow || n);
            }
            for (d = 0; (i = r[d++]) && !e.isPropagationStopped(); )
              (e.type = 1 < d ? c : m.bindType || l),
                (g =
                  (Ae.get(i, 'events') || {})[e.type] && Ae.get(i, 'handle')),
                g && g.apply(i, t),
                (g = u && i[u]),
                g &&
                  g.apply &&
                  ae.acceptData(i) &&
                  ((e.result = g.apply(i, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = l),
              a ||
                e.isDefaultPrevented() ||
                (m._default && !1 !== m._default.apply(r.pop(), t)) ||
                !ae.acceptData(o) ||
                !u ||
                !ae.isFunction(o[l]) ||
                ae.isWindow(o) ||
                ((p = o[u]),
                p && (o[u] = null),
                (ae.event.triggered = l),
                o[l](),
                (ae.event.triggered = void 0),
                p && (o[u] = p)),
              e.result
            );
          }
        },
        dispatch: function (e) {
          e = ae.event.fix(e);
          var t = [],
            o = Q.call(arguments),
            a = (Ae.get(this, 'events') || {})[e.type] || [],
            n = ae.event.special[e.type] || {},
            r,
            i,
            l,
            s,
            d;
          if (
            ((o[0] = e),
            (e.delegateTarget = this),
            !(n.preDispatch && !1 === n.preDispatch.call(this, e)))
          ) {
            for (
              t = ae.event.handlers.call(this, e, a), r = 0;
              (s = t[r++]) && !e.isPropagationStopped();

            )
              for (
                e.currentTarget = s.elem, i = 0;
                (d = s.handlers[i++]) && !e.isImmediatePropagationStopped();

              )
                (!e.namespace_re || e.namespace_re.test(d.namespace)) &&
                  ((e.handleObj = d),
                  (e.data = d.data),
                  (l = (
                    (ae.event.special[d.origType] || {}).handle || d.handler
                  ).apply(s.elem, o)),
                  void 0 !== l &&
                    !1 === (e.result = l) &&
                    (e.preventDefault(), e.stopPropagation()));
            return n.postDispatch && n.postDispatch.call(this, e), e.result;
          }
        },
        handlers: function (e, t) {
          var o = [],
            a = t.delegateCount,
            n = e.target,
            r,
            i,
            l,
            s;
          if (a && n.nodeType && (!e.button || 'click' !== e.type))
            for (; n !== this; n = n.parentNode || this)
              if (!0 !== n.disabled || 'click' !== e.type) {
                for (i = [], r = 0; r < a; r++)
                  (s = t[r]),
                    (l = s.selector + ' '),
                    void 0 === i[l] &&
                      (i[l] = s.needsContext
                        ? 0 <= ae(l, this).index(n)
                        : ae.find(l, this, null, [n]).length),
                    i[l] && i.push(s);
                i.length && o.push({ elem: n, handlers: i });
              }
          return (
            a < t.length && o.push({ elem: this, handlers: t.slice(a) }), o
          );
        },
        props: [
          'altKey',
          'bubbles',
          'cancelable',
          'ctrlKey',
          'currentTarget',
          'eventPhase',
          'metaKey',
          'relatedTarget',
          'shiftKey',
          'target',
          'timeStamp',
          'view',
          'which',
        ],
        fixHooks: {},
        keyHooks: {
          props: ['char', 'charCode', 'key', 'keyCode'],
          filter: function (e, t) {
            return (
              null == e.which &&
                (e.which = null == t.charCode ? t.keyCode : t.charCode),
              e
            );
          },
        },
        mouseHooks: {
          props: [
            'button',
            'buttons',
            'clientX',
            'clientY',
            'offsetX',
            'offsetY',
            'pageX',
            'pageY',
            'screenX',
            'screenY',
            'toElement',
          ],
          filter: function (e, t) {
            var o = t.button,
              i,
              a,
              n;
            return (
              null == e.pageX &&
                null != t.clientX &&
                ((i = e.target.ownerDocument || oe),
                (a = i.documentElement),
                (n = i.body),
                (e.pageX =
                  t.clientX +
                  ((a && a.scrollLeft) || (n && n.scrollLeft) || 0) -
                  ((a && a.clientLeft) || (n && n.clientLeft) || 0)),
                (e.pageY =
                  t.clientY +
                  ((a && a.scrollTop) || (n && n.scrollTop) || 0) -
                  ((a && a.clientTop) || (n && n.clientTop) || 0))),
              e.which ||
                void 0 === o ||
                (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
              e
            );
          },
        },
        fix: function (e) {
          if (e[ae.expando]) return e;
          var t = e.type,
            o = e,
            a = this.fixHooks[t],
            n,
            i,
            r;
          for (
            a ||
              (this.fixHooks[t] = a =
                Pe.test(t) ? this.mouseHooks : Ne.test(t) ? this.keyHooks : {}),
              r = a.props ? this.props.concat(a.props) : this.props,
              e = new ae.Event(o),
              n = r.length;
            n--;

          )
            (i = r[n]), (e[i] = o[i]);
          return (
            e.target || (e.target = oe),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, o) : e
          );
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== b() && this.focus) return this.focus(), !1;
            },
            delegateType: 'focusin',
          },
          blur: {
            trigger: function () {
              if (this === b() && this.blur) return this.blur(), !1;
            },
            delegateType: 'focusout',
          },
          click: {
            trigger: function () {
              if (
                'checkbox' === this.type &&
                this.click &&
                ae.nodeName(this, 'input')
              )
                return this.click(), !1;
            },
            _default: function (e) {
              return ae.nodeName(e.target, 'a');
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
        simulate: function (t, o, i, a) {
          var n = ae.extend(new ae.Event(), i, {
            type: t,
            isSimulated: !0,
            originalEvent: {},
          });
          a ? ae.event.trigger(n, null, o) : ae.event.dispatch.call(o, n),
            n.isDefaultPrevented() && i.preventDefault();
        },
      }),
        (ae.removeEvent = function (e, t, o) {
          e.removeEventListener && e.removeEventListener(t, o, !1);
        }),
        (ae.Event = function (e, t) {
          return this instanceof ae.Event
            ? void (e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? m
                      : h))
                : (this.type = e),
              t && ae.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || ae.now()),
              (this[ae.expando] = !0))
            : new ae.Event(e, t);
        }),
        (ae.Event.prototype = {
          isDefaultPrevented: h,
          isPropagationStopped: h,
          isImmediatePropagationStopped: h,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = m),
              t && t.preventDefault && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = m),
              t && t.stopPropagation && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = m),
              t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        ae.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function (e, t) {
            ae.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var o = this,
                  i = e.relatedTarget,
                  a = e.handleObj,
                  n;
                return (
                  (i && (i === o || ae.contains(o, i))) ||
                    ((e.type = a.origType),
                    (n = a.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          },
        ),
        te.focusinBubbles ||
          ae.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var o = function (e) {
              ae.event.simulate(t, e.target, ae.event.fix(e), !0);
            };
            ae.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  a = Ae.access(i, t);
                a || i.addEventListener(e, o, !0),
                  Ae.access(i, t, (a || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  a = Ae.access(i, t) - 1;
                a
                  ? Ae.access(i, t, a)
                  : (i.removeEventListener(e, o, !0), Ae.remove(i, t));
              },
            };
          }),
        ae.fn.extend({
          on: function (e, t, o, i, a) {
            var n, r;
            if ('object' == typeof e) {
              for (r in ('string' != typeof t && ((o = o || t), (t = void 0)),
              e))
                this.on(r, t, o, e[r], a);
              return this;
            }
            if (
              (null == o && null == i
                ? ((i = t), (o = t = void 0))
                : null == i &&
                  ('string' == typeof t
                    ? ((i = o), (o = void 0))
                    : ((i = o), (o = t), (t = void 0))),
              !1 === i)
            )
              i = h;
            else if (!i) return this;
            return (
              1 === a &&
                ((n = i),
                (i = function (e) {
                  return ae().off(e), n.apply(this, arguments);
                }),
                (i.guid = n.guid || (n.guid = ae.guid++))),
              this.each(function () {
                ae.event.add(this, e, i, o, t);
              })
            );
          },
          one: function (e, t, o, i) {
            return this.on(e, t, o, i, 1);
          },
          off: function (e, t, o) {
            var i, a;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                ae(e.delegateTarget).off(
                  i.namespace ? i.origType + '.' + i.namespace : i.origType,
                  i.selector,
                  i.handler,
                ),
                this
              );
            if ('object' == typeof e) {
              for (a in e) this.off(a, t, e[a]);
              return this;
            }
            return (
              (!1 === t || 'function' == typeof t) && ((o = t), (t = void 0)),
              !1 === o && (o = h),
              this.each(function () {
                ae.event.remove(this, e, o, t);
              })
            );
          },
          trigger: function (e, t) {
            return this.each(function () {
              ae.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var o = this[0];
            if (o) return ae.event.trigger(e, t, o, !0);
          },
        });
      var De =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Re = /<([\w:]+)/,
        He = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Be = /^$|\/(?:java|ecma)script/i,
        We = /^true\/(.*)/,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        qe = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', ''],
        };
      (qe.optgroup = qe.option),
        (qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead),
        (qe.th = qe.td),
        ae.extend({
          clone: function (e, t, o) {
            var a = e.cloneNode(!0),
              n = ae.contains(e.ownerDocument, e),
              r,
              i,
              l,
              s;
            if (
              !te.noCloneChecked &&
              (1 === e.nodeType || 11 === e.nodeType) &&
              !ae.isXMLDoc(e)
            )
              for (s = A(a), l = A(e), ((r = 0), (i = l.length)); r < i; r++)
                w(l[r], s[r]);
            if (t)
              if (o)
                for (
                  l = l || A(e), s = s || A(a), ((r = 0), (i = l.length));
                  r < i;
                  r++
                )
                  k(l[r], s[r]);
              else k(e, a);
            return (
              (s = A(a, 'script')),
              0 < s.length && x(s, !n && A(e, 'script')),
              a
            );
          },
          buildFragment: function (e, t, o, a) {
            for (
              var n = t.createDocumentFragment(),
                r = [],
                s = 0,
                i = e.length,
                l,
                d,
                p,
                c,
                u,
                g;
              s < i;
              s++
            )
              if (((l = e[s]), l || 0 === l))
                if ('object' === ae.type(l)) ae.merge(r, l.nodeType ? [l] : l);
                else if (!He.test(l)) r.push(t.createTextNode(l));
                else {
                  for (
                    d = d || n.appendChild(t.createElement('div')),
                      p = (Re.exec(l) || ['', ''])[1].toLowerCase(),
                      c = qe[p] || qe._default,
                      d.innerHTML = c[1] + l.replace(De, '<$1></$2>') + c[2],
                      g = c[0];
                    g--;

                  )
                    d = d.lastChild;
                  ae.merge(r, d.childNodes),
                    (d = n.firstChild),
                    (d.textContent = '');
                }
            for (n.textContent = '', s = 0; (l = r[s++]); )
              if (
                !(a && -1 !== ae.inArray(l, a)) &&
                ((u = ae.contains(l.ownerDocument, l)),
                (d = A(n.appendChild(l), 'script')),
                u && x(d),
                o)
              )
                for (g = 0; (l = d[g++]); ) Be.test(l.type || '') && o.push(l);
            return n;
          },
          cleanData: function (e) {
            for (
              var t = ae.event.special, o = 0, i, a, n, r;
              void 0 !== (a = e[o]);
              o++
            ) {
              if (
                ae.acceptData(a) &&
                ((r = a[Ae.expando]), r && (i = Ae.cache[r]))
              ) {
                if (i.events)
                  for (n in i.events)
                    t[n]
                      ? ae.event.remove(a, n)
                      : ae.removeEvent(a, n, i.handle);
                Ae.cache[r] && delete Ae.cache[r];
              }
              delete we.cache[a[we.expando]];
            }
          },
        }),
        ae.fn.extend({
          text: function (e) {
            return ke(
              this,
              function (e) {
                return void 0 === e
                  ? ae.text(this)
                  : this.empty().each(function () {
                      (1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType) &&
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length,
            );
          },
          append: function () {
            return this.domManip(arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = f(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return this.domManip(arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = f(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return this.domManip(arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return this.domManip(arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          remove: function (e, t) {
            for (
              var o = e ? ae.filter(e, this) : this, a = 0, i;
              null != (i = o[a]);
              a++
            )
              t || 1 !== i.nodeType || ae.cleanData(A(i)),
                i.parentNode &&
                  (t && ae.contains(i.ownerDocument, i) && x(A(i, 'script')),
                  i.parentNode.removeChild(i));
            return this;
          },
          empty: function () {
            for (var e = 0, t; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (ae.cleanData(A(t, !1)), (t.textContent = ''));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return ae.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return ke(
              this,
              function (e) {
                var t = this[0] || {},
                  o = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  'string' == typeof e &&
                  !ze.test(e) &&
                  !qe[(Re.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = e.replace(De, '<$1></$2>');
                  try {
                    for (; o < i; o++)
                      (t = this[o] || {}),
                        1 === t.nodeType &&
                          (ae.cleanData(A(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (t) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length,
            );
          },
          replaceWith: function () {
            var e = arguments[0];
            return (
              this.domManip(arguments, function (t) {
                (e = this.parentNode),
                  ae.cleanData(A(this)),
                  e && e.replaceChild(t, this);
              }),
              e && (e.length || e.nodeType) ? this : this.remove()
            );
          },
          detach: function (e) {
            return this.remove(e, !0);
          },
          domManip: function (e, t) {
            e = G.apply([], e);
            var o = 0,
              i = this.length,
              a = this,
              n = e[0],
              r = ae.isFunction(n),
              l,
              s,
              d,
              p,
              c,
              u;
            if (
              r ||
              (1 < i && 'string' == typeof n && !te.checkClone && je.test(n))
            )
              return this.each(function (o) {
                var i = a.eq(o);
                r && (e[0] = n.call(this, o, i.html())), i.domManip(e, t);
              });
            if (
              i &&
              ((l = ae.buildFragment(e, this[0].ownerDocument, !1, this)),
              (s = l.firstChild),
              1 === l.childNodes.length && (l = s),
              s)
            ) {
              for (d = ae.map(A(l, 'script'), y), p = d.length; o < i; o++)
                (c = l),
                  o != i - 1 &&
                    ((c = ae.clone(c, !0, !0)),
                    p && ae.merge(d, A(c, 'script'))),
                  t.call(this[o], c, o);
              if (p)
                for (
                  u = d[d.length - 1].ownerDocument, ae.map(d, v), o = 0;
                  o < p;
                  o++
                )
                  (c = d[o]),
                    Be.test(c.type || '') &&
                      !Ae.access(c, 'globalEval') &&
                      ae.contains(u, c) &&
                      (c.src
                        ? ae._evalUrl && ae._evalUrl(c.src)
                        : ae.globalEval(c.textContent.replace(Fe, '')));
            }
            return this;
          },
        }),
        ae.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (e, t) {
            ae.fn[e] = function (e) {
              for (
                var o = [], a = ae(e), n = a.length - 1, r = 0, i;
                r <= n;
                r++
              )
                (i = r === n ? this : this.clone(!0)),
                  ae(a[r])[t](i),
                  J.apply(o, i.get());
              return this.pushStack(o);
            };
          },
        );
      var Ye = {},
        Ve = /^margin/,
        Xe = new RegExp('^(' + Ce + ')(?!px)[a-z%]+$', 'i'),
        Ue = function (e) {
          return e.ownerDocument.defaultView.opener
            ? e.ownerDocument.defaultView.getComputedStyle(e, null)
            : n.getComputedStyle(e, null);
        },
        Qe;
      (function () {
        function e() {
          (i.style.cssText =
            '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
            (i.innerHTML = ''),
            t.appendChild(o);
          var e = n.getComputedStyle(i, null);
          (a = '1%' !== e.top), (r = '4px' === e.width), t.removeChild(o);
        }
        var t = oe.documentElement,
          o = oe.createElement('div'),
          i = oe.createElement('div'),
          a,
          r;
        i.style &&
          ((i.style.backgroundClip = 'content-box'),
          (i.cloneNode(!0).style.backgroundClip = ''),
          (te.clearCloneStyle = 'content-box' === i.style.backgroundClip),
          (o.style.cssText =
            'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
          o.appendChild(i),
          n.getComputedStyle &&
            ae.extend(te, {
              pixelPosition: function () {
                return e(), a;
              },
              boxSizingReliable: function () {
                return null == r && e(), r;
              },
              reliableMarginRight: function () {
                var e = i.appendChild(oe.createElement('div')),
                  a;
                return (
                  (e.style.cssText = i.style.cssText =
                    '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
                  (e.style.marginRight = e.style.width = '0'),
                  (i.style.width = '1px'),
                  t.appendChild(o),
                  (a = !parseFloat(n.getComputedStyle(e, null).marginRight)),
                  t.removeChild(o),
                  i.removeChild(e),
                  a
                );
              },
            }));
      })(),
        (ae.swap = function (e, t, o, i) {
          var a = {},
            n,
            r;
          for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
          for (r in ((n = o.apply(e, i || [])), t)) e.style[r] = a[r];
          return n;
        });
      var Ge = /^(none|table(?!-c[ea]).+)/,
        Je = new RegExp('^(' + Ce + ')(.*)$', 'i'),
        Ze = new RegExp('^([+-])=(' + Ce + ')', 'i'),
        Ke = { position: 'absolute', visibility: 'hidden', display: 'block' },
        $e = { letterSpacing: '0', fontWeight: '400' },
        et = ['Webkit', 'O', 'Moz', 'ms'];
      ae.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var o = C(e, 'opacity');
                return '' === o ? '1' : o;
              }
            },
          },
        },
        cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: 'cssFloat' },
        style: function (e, t, o, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var a = ae.camelCase(t),
              n = e.style,
              r,
              l,
              s;
            if (
              ((t = ae.cssProps[a] || (ae.cssProps[a] = T(n, a))),
              (s = ae.cssHooks[t] || ae.cssHooks[a]),
              void 0 !== o)
            ) {
              if (
                ((l = typeof o),
                'string' === l &&
                  (r = Ze.exec(o)) &&
                  ((o = (r[1] + 1) * r[2] + parseFloat(ae.css(e, t))),
                  (l = 'number')),
                null == o || o !== o)
              )
                return;
              'number' !== l || ae.cssNumber[a] || (o += 'px'),
                te.clearCloneStyle ||
                  '' !== o ||
                  0 !== t.indexOf('background') ||
                  (n[t] = 'inherit'),
                (s && 'set' in s && void 0 === (o = s.set(e, o, i))) ||
                  (n[t] = o);
            } else
              return s && 'get' in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : n[t];
          }
        },
        css: function (e, t, o, i) {
          var a = ae.camelCase(t),
            n,
            r,
            l;
          return (
            (t = ae.cssProps[a] || (ae.cssProps[a] = T(e.style, a))),
            (l = ae.cssHooks[t] || ae.cssHooks[a]),
            l && 'get' in l && (n = l.get(e, !0, o)),
            void 0 === n && (n = C(e, t, i)),
            'normal' === n && t in $e && (n = $e[t]),
            '' === o || o
              ? ((r = parseFloat(n)), !0 === o || ae.isNumeric(r) ? r || 0 : n)
              : n
          );
        },
      }),
        ae.each(['height', 'width'], function (e, t) {
          ae.cssHooks[t] = {
            get: function (e, o, i) {
              if (o)
                return Ge.test(ae.css(e, 'display')) && 0 === e.offsetWidth
                  ? ae.swap(e, Ke, function () {
                      return N(e, t, i);
                    })
                  : N(e, t, i);
            },
            set: function (e, o, i) {
              var a = i && Ue(e);
              return L(
                e,
                o,
                i
                  ? M(
                      e,
                      t,
                      i,
                      'border-box' === ae.css(e, 'boxSizing', !1, a),
                      a,
                    )
                  : 0,
              );
            },
          };
        }),
        (ae.cssHooks.marginRight = S(te.reliableMarginRight, function (e, t) {
          if (t)
            return ae.swap(e, { display: 'inline-block' }, C, [
              e,
              'marginRight',
            ]);
        })),
        ae.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          (ae.cssHooks[e + t] = {
            expand: function (o) {
              for (
                var a = 0,
                  i = {},
                  n = 'string' == typeof o ? o.split(' ') : [o];
                4 > a;
                a++
              )
                i[e + Se[a] + t] = n[a] || n[a - 2] || n[0];
              return i;
            },
          }),
            Ve.test(e) || (ae.cssHooks[e + t].set = L);
        }),
        ae.fn.extend({
          css: function (e, t) {
            return ke(
              this,
              function (e, t, o) {
                var a = {},
                  n = 0,
                  i,
                  r;
                if (ae.isArray(t)) {
                  for (i = Ue(e), r = t.length; n < r; n++)
                    a[t[n]] = ae.css(e, t[n], !1, i);
                  return a;
                }
                return void 0 === o ? ae.css(e, t) : ae.style(e, t, o);
              },
              e,
              t,
              1 < arguments.length,
            );
          },
          show: function () {
            return P(this, !0);
          },
          hide: function () {
            return P(this);
          },
          toggle: function (e) {
            return 'boolean' == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  Te(this) ? ae(this).show() : ae(this).hide();
                });
          },
        }),
        (ae.Tween = O),
        (O.prototype = {
          constructor: O,
          init: function (e, t, o, i, a, n) {
            (this.elem = e),
              (this.prop = o),
              (this.easing = a || 'swing'),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = n || (ae.cssNumber[o] ? '' : 'px'));
          },
          cur: function () {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this);
          },
          run: function (e) {
            var t = O.propHooks[this.prop],
              o;
            return (
              (this.pos = this.options.duration
                ? (o = ae.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration,
                  ))
                : (o = e)),
              (this.now = (this.end - this.start) * o + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              t && t.set ? t.set(this) : O.propHooks._default.set(this),
              this
            );
          },
        }),
        (O.prototype.init.prototype = O.prototype),
        (O.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return null == e.elem[e.prop] ||
                (e.elem.style && null != e.elem.style[e.prop])
                ? ((t = ae.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0)
                : e.elem[e.prop];
            },
            set: function (e) {
              ae.fx.step[e.prop]
                ? ae.fx.step[e.prop](e)
                : e.elem.style &&
                  (null != e.elem.style[ae.cssProps[e.prop]] ||
                    ae.cssHooks[e.prop])
                ? ae.style(e.elem, e.prop, e.now + e.unit)
                : (e.elem[e.prop] = e.now);
            },
          },
        }),
        (O.propHooks.scrollTop = O.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (ae.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
        }),
        (ae.fx = O.prototype.init),
        (ae.fx.step = {});
      var tt = /^(?:toggle|show|hide)$/,
        ot = new RegExp('^(?:([+-])=|)(' + Ce + ')([a-z%]*)$', 'i'),
        it = /queueHooks$/,
        at = [H],
        nt = {
          '*': [
            function (e, t) {
              var o = this.createTween(e, t),
                i = o.cur(),
                a = ot.exec(t),
                n = (a && a[3]) || (ae.cssNumber[e] ? '' : 'px'),
                r =
                  (ae.cssNumber[e] || ('px' !== n && +i)) &&
                  ot.exec(ae.css(o.elem, e)),
                l = 1,
                s = 20;
              if (r && r[3] !== n) {
                (n = n || r[3]), (a = a || []), (r = +i || 1);
                do (l = l || '.5'), (r /= l), ae.style(o.elem, e, r + n);
                while (l != (l = o.cur() / i) && 1 != l && --s);
              }
              return (
                a &&
                  ((r = o.start = +r || +i || 0),
                  (o.unit = n),
                  (o.end = a[1] ? r + (a[1] + 1) * a[2] : +a[2])),
                o
              );
            },
          ],
        },
        rt,
        lt;
      (ae.Animation = ae.extend(j, {
        tweener: function (e, t) {
          ae.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '));
          for (var o = 0, i = e.length, a; o < i; o++)
            (a = e[o]), (nt[a] = nt[a] || []), nt[a].unshift(t);
        },
        prefilter: function (e, t) {
          t ? at.unshift(e) : at.push(e);
        },
      })),
        (ae.speed = function (e, t, o) {
          var i =
            e && 'object' == typeof e
              ? ae.extend({}, e)
              : {
                  complete: o || (!o && t) || (ae.isFunction(e) && e),
                  duration: e,
                  easing: (o && t) || (t && !ae.isFunction(t) && t),
                };
          return (
            (i.duration = ae.fx.off
              ? 0
              : 'number' == typeof i.duration
              ? i.duration
              : i.duration in ae.fx.speeds
              ? ae.fx.speeds[i.duration]
              : ae.fx.speeds._default),
            (null == i.queue || !0 === i.queue) && (i.queue = 'fx'),
            (i.old = i.complete),
            (i.complete = function () {
              ae.isFunction(i.old) && i.old.call(this),
                i.queue && ae.dequeue(this, i.queue);
            }),
            i
          );
        }),
        ae.fn.extend({
          fadeTo: function (e, t, o, i) {
            return this.filter(Te)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: t }, e, o, i);
          },
          animate: function (e, t, o, i) {
            var a = ae.isEmptyObject(e),
              n = ae.speed(t, o, i),
              r = function () {
                var t = j(this, ae.extend({}, e), n);
                (a || Ae.get(this, 'finish')) && t.stop(!0);
              };
            return (
              (r.finish = r),
              a || !1 === n.queue ? this.each(r) : this.queue(n.queue, r)
            );
          },
          stop: function (e, t, o) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(o);
            };
            return (
              'string' != typeof e && ((o = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || 'fx', []),
              this.each(function () {
                var t = !0,
                  a = null != e && e + 'queueHooks',
                  n = ae.timers,
                  r = Ae.get(this);
                if (a) r[a] && r[a].stop && i(r[a]);
                else for (a in r) r[a] && r[a].stop && it.test(a) && i(r[a]);
                for (a = n.length; a--; )
                  n[a].elem === this &&
                    (null == e || n[a].queue === e) &&
                    (n[a].anim.stop(o), (t = !1), n.splice(a, 1));
                (t || !o) && ae.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function () {
                var t = Ae.get(this),
                  o = t[e + 'queue'],
                  i = t[e + 'queueHooks'],
                  a = ae.timers,
                  n = o ? o.length : 0,
                  r;
                for (
                  t.finish = !0,
                    ae.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    r = a.length;
                  r--;

                )
                  a[r].elem === this &&
                    a[r].queue === e &&
                    (a[r].anim.stop(!0), a.splice(r, 1));
                for (r = 0; r < n; r++)
                  o[r] && o[r].finish && o[r].finish.call(this);
                delete t.finish;
              })
            );
          },
        }),
        ae.each(['toggle', 'show', 'hide'], function (e, t) {
          var o = ae.fn[t];
          ae.fn[t] = function (e, i, a) {
            return null == e || 'boolean' == typeof e
              ? o.apply(this, arguments)
              : this.animate(D(t, !0), e, i, a);
          };
        }),
        ae.each(
          {
            slideDown: D('show'),
            slideUp: D('hide'),
            slideToggle: D('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (e, t) {
            ae.fn[e] = function (e, o, i) {
              return this.animate(t, e, o, i);
            };
          },
        ),
        (ae.timers = []),
        (ae.fx.tick = function () {
          var e = 0,
            t = ae.timers,
            o;
          for (rt = ae.now(); e < t.length; e++)
            (o = t[e]), o() || t[e] !== o || t.splice(e--, 1);
          t.length || ae.fx.stop(), (rt = void 0);
        }),
        (ae.fx.timer = function (e) {
          ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop();
        }),
        (ae.fx.interval = 13),
        (ae.fx.start = function () {
          lt || (lt = setInterval(ae.fx.tick, ae.fx.interval));
        }),
        (ae.fx.stop = function () {
          clearInterval(lt), (lt = null);
        }),
        (ae.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (ae.fn.delay = function (e, t) {
          return (
            (e = ae.fx ? ae.fx.speeds[e] || e : e),
            (t = t || 'fx'),
            this.queue(t, function (t, o) {
              var i = setTimeout(t, e);
              o.stop = function () {
                clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = oe.createElement('input'),
            t = oe.createElement('select'),
            o = t.appendChild(oe.createElement('option'));
          (e.type = 'checkbox'),
            (te.checkOn = '' !== e.value),
            (te.optSelected = o.selected),
            (t.disabled = !0),
            (te.optDisabled = !o.disabled),
            (e = oe.createElement('input')),
            (e.value = 't'),
            (e.type = 'radio'),
            (te.radioValue = 't' === e.value);
        })();
      var st = ae.expr.attrHandle,
        dt,
        pt;
      ae.fn.extend({
        attr: function (e, t) {
          return ke(this, ae.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            ae.removeAttr(this, e);
          });
        },
      }),
        ae.extend({
          attr: function (e, t, o) {
            var i = e.nodeType,
              a,
              n;
            if (e && 3 !== i && 8 !== i && 2 !== i) {
              if (typeof e.getAttribute == Me) return ae.prop(e, t, o);
              if (
                ((1 === i && ae.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (a =
                    ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? pt : dt))),
                void 0 === o)
              )
                return a && 'get' in a && null !== (n = a.get(e, t))
                  ? n
                  : ((n = ae.find.attr(e, t)), null == n ? void 0 : n);
              if (null === o) ae.removeAttr(e, t);
              else
                return a && 'set' in a && void 0 !== (n = a.set(e, o, t))
                  ? n
                  : (e.setAttribute(t, o + ''), o);
            }
          },
          removeAttr: function (e, t) {
            var o = 0,
              i = t && t.match(ye),
              a,
              n;
            if (i && 1 === e.nodeType)
              for (; (a = i[o++]); )
                (n = ae.propFix[a] || a),
                  ae.expr.match.bool.test(a) && (e[n] = !1),
                  e.removeAttribute(a);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (
                  !te.radioValue &&
                  'radio' === t &&
                  ae.nodeName(e, 'input')
                ) {
                  var o = e.value;
                  return e.setAttribute('type', t), o && (e.value = o), t;
                }
              },
            },
          },
        }),
        (pt = {
          set: function (e, t, o) {
            return !1 === t ? ae.removeAttr(e, o) : e.setAttribute(o, o), o;
          },
        }),
        ae.each(ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var o = st[t] || ae.find.attr;
          st[t] = function (e, t, i) {
            var a, n;
            return (
              i ||
                ((n = st[t]),
                (st[t] = a),
                (a = null == o(e, t, i) ? null : t.toLowerCase()),
                (st[t] = n)),
              a
            );
          };
        });
      var ct = /^(?:input|select|textarea|button)$/i;
      ae.fn.extend({
        prop: function (e, t) {
          return ke(this, ae.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[ae.propFix[e] || e];
          });
        },
      }),
        ae.extend({
          propFix: { for: 'htmlFor', class: 'className' },
          prop: function (e, t, o) {
            var i = e.nodeType,
              a,
              n,
              r;
            if (e && 3 !== i && 8 !== i && 2 !== i)
              return (
                (r = 1 !== i || !ae.isXMLDoc(e)),
                r && ((t = ae.propFix[t] || t), (n = ae.propHooks[t])),
                void 0 === o
                  ? n && 'get' in n && null !== (a = n.get(e, t))
                    ? a
                    : e[t]
                  : n && 'set' in n && void 0 !== (a = n.set(e, o, t))
                  ? a
                  : (e[t] = o)
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                return e.hasAttribute('tabindex') ||
                  ct.test(e.nodeName) ||
                  e.href
                  ? e.tabIndex
                  : -1;
              },
            },
          },
        }),
        te.optSelected ||
          (ae.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
          }),
        ae.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function () {
            ae.propFix[this.toLowerCase()] = this;
          },
        );
      var ut = /[\t\r\n\f]/g;
      ae.fn.extend({
        addClass: function (e) {
          var t = 0,
            o = this.length,
            i,
            a,
            n,
            r,
            l,
            s;
          if (ae.isFunction(e))
            return this.each(function (t) {
              ae(this).addClass(e.call(this, t, this.className));
            });
          if ('string' == typeof e && e)
            for (i = (e || '').match(ye) || []; t < o; t++)
              if (
                ((a = this[t]),
                (n =
                  1 === a.nodeType &&
                  (a.className
                    ? (' ' + a.className + ' ').replace(ut, ' ')
                    : ' ')),
                n)
              ) {
                for (l = 0; (r = i[l++]); )
                  0 > n.indexOf(' ' + r + ' ') && (n += r + ' ');
                (s = ae.trim(n)), a.className !== s && (a.className = s);
              }
          return this;
        },
        removeClass: function (e) {
          var t = 0 === arguments.length || ('string' == typeof e && e),
            o = 0,
            i = this.length,
            a,
            n,
            r,
            l,
            s,
            d;
          if (ae.isFunction(e))
            return this.each(function (t) {
              ae(this).removeClass(e.call(this, t, this.className));
            });
          if (t)
            for (a = (e || '').match(ye) || []; o < i; o++)
              if (
                ((n = this[o]),
                (r =
                  1 === n.nodeType &&
                  (n.className
                    ? (' ' + n.className + ' ').replace(ut, ' ')
                    : '')),
                r)
              ) {
                for (s = 0; (l = a[s++]); )
                  for (; 0 <= r.indexOf(' ' + l + ' '); )
                    r = r.replace(' ' + l + ' ', ' ');
                (d = e ? ae.trim(r) : ''),
                  n.className !== d && (n.className = d);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var o = typeof e;
          return 'boolean' == typeof t && 'string' == o
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ae.isFunction(e)
            ? this.each(function (o) {
                ae(this).toggleClass(e.call(this, o, this.className, t), t);
              })
            : this.each(function () {
                if ('string' == o)
                  for (
                    var t = 0, i = ae(this), a = e.match(ye) || [], n;
                    (n = a[t++]);

                  )
                    i.hasClass(n) ? i.removeClass(n) : i.addClass(n);
                else
                  (o == Me || 'boolean' == o) &&
                    (this.className &&
                      Ae.set(this, '__className__', this.className),
                    (this.className =
                      this.className || !1 === e
                        ? ''
                        : Ae.get(this, '__className__') || ''));
              });
        },
        hasClass: function (e) {
          for (var t = 0, o = this.length; t < o; t++)
            if (
              1 === this[t].nodeType &&
              0 <=
                (' ' + this[t].className + ' ')
                  .replace(ut, ' ')
                  .indexOf(' ' + e + ' ')
            )
              return !0;
          return !1;
        },
      });
      var gt = /\r/g;
      ae.fn.extend({
        val: function (e) {
          var t = this[0],
            o,
            i,
            a;
          return arguments.length
            ? ((a = ae.isFunction(e)),
              this.each(function (t) {
                var i;
                1 !== this.nodeType ||
                  ((i = a ? e.call(this, t, ae(this).val()) : e),
                  null == i
                    ? (i = '')
                    : 'number' == typeof i
                    ? (i += '')
                    : ae.isArray(i) &&
                      (i = ae.map(i, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  (o =
                    ae.valHooks[this.type] ||
                    ae.valHooks[this.nodeName.toLowerCase()]),
                  (!o || !('set' in o) || void 0 === o.set(this, i, 'value')) &&
                    (this.value = i));
              }))
            : t
            ? ((o =
                ae.valHooks[t.type] || ae.valHooks[t.nodeName.toLowerCase()]),
              o && 'get' in o && void 0 !== (i = o.get(t, 'value')))
              ? i
              : ((i = t.value),
                'string' == typeof i ? i.replace(gt, '') : null == i ? '' : i)
            : void 0;
        },
      }),
        ae.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = ae.find.attr(e, 'value');
                return null == t ? ae.trim(ae.text(e)) : t;
              },
            },
            select: {
              get: function (e) {
                for (
                  var t = e.options,
                    o = e.selectedIndex,
                    a = 'select-one' === e.type || 0 > o,
                    n = a ? null : [],
                    r = a ? o + 1 : t.length,
                    l = 0 > o ? r : a ? o : 0,
                    i,
                    s;
                  l < r;
                  l++
                )
                  if (
                    ((s = t[l]),
                    (s.selected || l === o) &&
                      (te.optDisabled
                        ? !s.disabled
                        : null === s.getAttribute('disabled')) &&
                      (!s.parentNode.disabled ||
                        !ae.nodeName(s.parentNode, 'optgroup')))
                  ) {
                    if (((i = ae(s).val()), a)) return i;
                    n.push(i);
                  }
                return n;
              },
              set: function (e, t) {
                for (
                  var o = e.options, a = ae.makeArray(t), n = o.length, i, r;
                  n--;

                )
                  (r = o[n]),
                    (r.selected = 0 <= ae.inArray(r.value, a)) && (i = !0);
                return i || (e.selectedIndex = -1), a;
              },
            },
          },
        }),
        ae.each(['radio', 'checkbox'], function () {
          (ae.valHooks[this] = {
            set: function (e, t) {
              if (ae.isArray(t))
                return (e.checked = 0 <= ae.inArray(ae(e).val(), t));
            },
          }),
            te.checkOn ||
              (ae.valHooks[this].get = function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              });
        }),
        ae.each(
          [
            'blur',
            'focus',
            'focusin',
            'focusout',
            'load',
            'resize',
            'scroll',
            'unload',
            'click',
            'dblclick',
            'mousedown',
            'mouseup',
            'mousemove',
            'mouseover',
            'mouseout',
            'mouseenter',
            'mouseleave',
            'change',
            'select',
            'submit',
            'keydown',
            'keypress',
            'keyup',
            'error',
            'contextmenu',
          ],
          function (e, t) {
            ae.fn[t] = function (e, o) {
              return 0 < arguments.length
                ? this.on(t, null, e, o)
                : this.trigger(t);
            };
          },
        ),
        ae.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
          bind: function (e, t, o) {
            return this.on(e, null, t, o);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, o, i) {
            return this.on(t, e, o, i);
          },
          undelegate: function (e, t, o) {
            return 1 === arguments.length
              ? this.off(e, '**')
              : this.off(t, e || '**', o);
          },
        });
      var mt = ae.now(),
        ht = /\?/;
      (ae.parseJSON = function (e) {
        return JSON.parse(e + '');
      }),
        (ae.parseXML = function (e) {
          var t, o;
          if (!e || 'string' != typeof e) return null;
          try {
            (o = new DOMParser()), (t = o.parseFromString(e, 'text/xml'));
          } catch (o) {
            t = void 0;
          }
          return (
            (!t || t.getElementsByTagName('parsererror').length) &&
              ae.error('Invalid XML: ' + e),
            t
          );
        });
      var bt = /#.*$/,
        ft = /([?&])_=[^&]*/,
        yt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        xt = /^(?:GET|HEAD)$/,
        kt = /^\/\//,
        At = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        wt = {},
        _t = {},
        Et = '*/'.concat('*'),
        Ct = n.location.href,
        St = At.exec(Ct.toLowerCase()) || [];
      ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Ct,
          type: 'GET',
          isLocal: vt.test(St[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          accepts: {
            '*': Et,
            text: 'text/plain',
            html: 'text/html',
            xml: 'application/xml, text/xml',
            json: 'application/json, text/javascript',
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: 'responseXML',
            text: 'responseText',
            json: 'responseJSON',
          },
          converters: {
            '* text': String,
            'text html': !0,
            'text json': ae.parseJSON,
            'text xml': ae.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? F(F(e, ae.ajaxSettings), t) : F(ae.ajaxSettings, e);
        },
        ajaxPrefilter: B(wt),
        ajaxTransport: B(_t),
        ajax: function (e, t) {
          function o(e, t, o, i) {
            var p = t,
              c,
              g,
              y,
              x,
              A;
            2 === u ||
              ((u = 2),
              v && clearTimeout(v),
              (h = void 0),
              (f = i || ''),
              (m.readyState = 0 < e ? 4 : 0),
              (c = (200 <= e && 300 > e) || 304 === e),
              o && (x = q(a, m, o)),
              (x = Y(a, x, m, c)),
              c
                ? (a.ifModified &&
                    ((A = m.getResponseHeader('Last-Modified')),
                    A && (ae.lastModified[b] = A),
                    (A = m.getResponseHeader('etag')),
                    A && (ae.etag[b] = A)),
                  204 === e || 'HEAD' === a.type
                    ? (p = 'nocontent')
                    : 304 === e
                    ? (p = 'notmodified')
                    : ((p = x.state), (g = x.data), (y = x.error), (c = !y)))
                : ((y = p), (e || !p) && ((p = 'error'), 0 > e && (e = 0))),
              (m.status = e),
              (m.statusText = (t || p) + ''),
              c ? l.resolveWith(n, [g, p, m]) : l.rejectWith(n, [m, p, y]),
              m.statusCode(d),
              (d = void 0),
              k &&
                r.trigger(c ? 'ajaxSuccess' : 'ajaxError', [m, a, c ? g : y]),
              s.fireWith(n, [m, p]),
              k &&
                (r.trigger('ajaxComplete', [m, a]),
                !--ae.active && ae.event.trigger('ajaxStop')));
          }
          'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var a = ae.ajaxSetup({}, t),
            n = a.context || a,
            r = a.context && (n.nodeType || n.jquery) ? ae(n) : ae.event,
            l = ae.Deferred(),
            s = ae.Callbacks('once memory'),
            d = a.statusCode || {},
            p = {},
            c = {},
            u = 0,
            g = 'canceled',
            m = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 == u) {
                  if (!y)
                    for (y = {}; (t = yt.exec(f)); )
                      y[t[1].toLowerCase()] = t[2];
                  t = y[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 == u ? f : null;
              },
              setRequestHeader: function (e, t) {
                var o = e.toLowerCase();
                return u || ((e = c[o] = c[o] || e), (p[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return u || (a.mimeType = e), this;
              },
              statusCode: function (e) {
                if (e)
                  if (2 > u) for (var t in e) d[t] = [d[t], e[t]];
                  else m.always(e[m.status]);
                return this;
              },
              abort: function (e) {
                var t = e || g;
                return h && h.abort(t), o(0, t), this;
              },
            },
            h,
            b,
            f,
            y,
            v,
            x,
            k,
            A;
          if (
            ((l.promise(m).complete = s.add),
            (m.success = m.done),
            (m.error = m.fail),
            (a.url = ((e || a.url || Ct) + '')
              .replace(bt, '')
              .replace(kt, St[1] + '//')),
            (a.type = t.method || t.type || a.method || a.type),
            (a.dataTypes = ae
              .trim(a.dataType || '*')
              .toLowerCase()
              .match(ye) || ['']),
            null == a.crossDomain &&
              ((x = At.exec(a.url.toLowerCase())),
              (a.crossDomain = !!(
                x &&
                (x[1] !== St[1] ||
                  x[2] !== St[2] ||
                  (x[3] || ('http:' === x[1] ? '80' : '443')) !==
                    (St[3] || ('http:' === St[1] ? '80' : '443')))
              ))),
            a.data &&
              a.processData &&
              'string' != typeof a.data &&
              (a.data = ae.param(a.data, a.traditional)),
            W(wt, a, t, m),
            2 == u)
          )
            return m;
          for (A in ((k = ae.event && a.global),
          k && 0 == ae.active++ && ae.event.trigger('ajaxStart'),
          (a.type = a.type.toUpperCase()),
          (a.hasContent = !xt.test(a.type)),
          (b = a.url),
          a.hasContent ||
            (a.data &&
              ((b = a.url += (ht.test(b) ? '&' : '?') + a.data), delete a.data),
            !1 === a.cache &&
              (a.url = ft.test(b)
                ? b.replace(ft, '$1_=' + mt++)
                : b + (ht.test(b) ? '&' : '?') + '_=' + mt++)),
          a.ifModified &&
            (ae.lastModified[b] &&
              m.setRequestHeader('If-Modified-Since', ae.lastModified[b]),
            ae.etag[b] && m.setRequestHeader('If-None-Match', ae.etag[b])),
          ((a.data && a.hasContent && !1 !== a.contentType) || t.contentType) &&
            m.setRequestHeader('Content-Type', a.contentType),
          m.setRequestHeader(
            'Accept',
            a.dataTypes[0] && a.accepts[a.dataTypes[0]]
              ? a.accepts[a.dataTypes[0]] +
                  ('*' === a.dataTypes[0] ? '' : ', ' + Et + '; q=0.01')
              : a.accepts['*'],
          ),
          a.headers))
            m.setRequestHeader(A, a.headers[A]);
          if (a.beforeSend && (!1 === a.beforeSend.call(n, m, a) || 2 == u))
            return m.abort();
          for (A in ((g = 'abort'), { success: 1, error: 1, complete: 1 }))
            m[A](a[A]);
          if (((h = W(_t, a, t, m)), !h)) o(-1, 'No Transport');
          else {
            (m.readyState = 1),
              k && r.trigger('ajaxSend', [m, a]),
              a.async &&
                0 < a.timeout &&
                (v = setTimeout(function () {
                  m.abort('timeout');
                }, a.timeout));
            try {
              (u = 1), h.send(p, o);
            } catch (t) {
              if (2 > u) o(-1, t);
              else throw t;
            }
          }
          return m;
        },
        getJSON: function (e, t, o) {
          return ae.get(e, t, o, 'json');
        },
        getScript: function (e, t) {
          return ae.get(e, void 0, t, 'script');
        },
      }),
        ae.each(['get', 'post'], function (e, t) {
          ae[t] = function (e, o, i, a) {
            return (
              ae.isFunction(o) && ((a = a || i), (i = o), (o = void 0)),
              ae.ajax({ url: e, type: t, dataType: a, data: o, success: i })
            );
          };
        }),
        (ae._evalUrl = function (e) {
          return ae.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        ae.fn.extend({
          wrapAll: function (e) {
            var t;
            return ae.isFunction(e)
              ? this.each(function (t) {
                  ae(this).wrapAll(e.call(this, t));
                })
              : (this[0] &&
                  ((t = ae(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this);
          },
          wrapInner: function (e) {
            return ae.isFunction(e)
              ? this.each(function (t) {
                  ae(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = ae(this),
                    o = t.contents();
                  o.length ? o.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = ae.isFunction(e);
            return this.each(function (o) {
              ae(this).wrapAll(t ? e.call(this, o) : e);
            });
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                ae.nodeName(this, 'body') ||
                  ae(this).replaceWith(this.childNodes);
              })
              .end();
          },
        }),
        (ae.expr.filters.hidden = function (e) {
          return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
        }),
        (ae.expr.filters.visible = function (e) {
          return !ae.expr.filters.hidden(e);
        });
      var Tt = /%20/g,
        Lt = /\[\]$/,
        Mt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
      (ae.param = function (e, t) {
        var o = [],
          i = function (e, t) {
            (t = ae.isFunction(t) ? t() : null == t ? '' : t),
              (o[o.length] =
                encodeURIComponent(e) + '=' + encodeURIComponent(t));
          },
          a;
        if (
          (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional),
          ae.isArray(e) || (e.jquery && !ae.isPlainObject(e)))
        )
          ae.each(e, function () {
            i(this.name, this.value);
          });
        else for (a in e) V(a, e[a], t, i);
        return o.join('&').replace(Tt, '+');
      }),
        ae.fn.extend({
          serialize: function () {
            return ae.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = ae.prop(this, 'elements');
              return e ? ae.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !ae(this).is(':disabled') &&
                  Pt.test(this.nodeName) &&
                  !Nt.test(e) &&
                  (this.checked || !Le.test(e))
                );
              })
              .map(function (e, t) {
                var o = ae(this).val();
                return null == o
                  ? null
                  : ae.isArray(o)
                  ? ae.map(o, function (e) {
                      return { name: t.name, value: e.replace(Mt, '\r\n') };
                    })
                  : { name: t.name, value: o.replace(Mt, '\r\n') };
              })
              .get();
          },
        }),
        (ae.ajaxSettings.xhr = function () {
          try {
            return new XMLHttpRequest();
          } catch (t) {}
        });
      var Ot = 0,
        It = {},
        Dt = { 0: 200, 1223: 204 },
        Rt = ae.ajaxSettings.xhr();
      n.attachEvent &&
        n.attachEvent('onunload', function () {
          for (var e in It) It[e]();
        }),
        (te.cors = !!Rt && 'withCredentials' in Rt),
        (te.ajax = Rt = !!Rt),
        ae.ajaxTransport(function (e) {
          var t;
          if (te.cors || (Rt && !e.crossDomain))
            return {
              send: function (o, a) {
                var n = e.xhr(),
                  r = ++Ot,
                  l;
                if (
                  (n.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (l in e.xhrFields) n[l] = e.xhrFields[l];
                for (l in (e.mimeType &&
                  n.overrideMimeType &&
                  n.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o['X-Requested-With'] ||
                  (o['X-Requested-With'] = 'XMLHttpRequest'),
                o))
                  n.setRequestHeader(l, o[l]);
                (t = function (e) {
                  return function () {
                    t &&
                      (delete It[r],
                      (t = n.onload = n.onerror = null),
                      'abort' === e
                        ? n.abort()
                        : 'error' === e
                        ? a(n.status, n.statusText)
                        : a(
                            Dt[n.status] || n.status,
                            n.statusText,
                            'string' == typeof n.responseText
                              ? { text: n.responseText }
                              : void 0,
                            n.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (n.onload = t()),
                  (n.onerror = t('error')),
                  (t = It[r] = t('abort'));
                try {
                  n.send((e.hasContent && e.data) || null);
                } catch (o) {
                  if (t) throw o;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        ae.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /(?:java|ecma)script/ },
          converters: {
            'text script': function (e) {
              return ae.globalEval(e), e;
            },
          },
        }),
        ae.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = 'GET');
        }),
        ae.ajaxTransport('script', function (e) {
          if (e.crossDomain) {
            var t, o;
            return {
              send: function (i, a) {
                (t = ae('<script>')
                  .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (o = function (e) {
                      t.remove(),
                        (o = null),
                        e && a('error' === e.type ? 404 : 200, e.type);
                    }),
                  )),
                  oe.head.appendChild(t[0]);
              },
              abort: function () {
                o && o();
              },
            };
          }
        });
      var Ht = [],
        zt = /(=)\?(?=&|$)|\?\?/;
      ae.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var e = Ht.pop() || ae.expando + '_' + mt++;
          return (this[e] = !0), e;
        },
      }),
        ae.ajaxPrefilter('json jsonp', function (e, t, o) {
          var i =
              !1 !== e.jsonp &&
              (zt.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  !(e.contentType || '').indexOf(
                    'application/x-www-form-urlencoded',
                  ) &&
                  zt.test(e.data) &&
                  'data'),
            a,
            r,
            l;
          if (i || 'jsonp' === e.dataTypes[0])
            return (
              (a = e.jsonpCallback =
                ae.isFunction(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
              i
                ? (e[i] = e[i].replace(zt, '$1' + a))
                : !1 !== e.jsonp &&
                  (e.url += (ht.test(e.url) ? '&' : '?') + e.jsonp + '=' + a),
              (e.converters['script json'] = function () {
                return l || ae.error(a + ' was not called'), l[0];
              }),
              (e.dataTypes[0] = 'json'),
              (r = n[a]),
              (n[a] = function () {
                l = arguments;
              }),
              o.always(function () {
                (n[a] = r),
                  e[a] && ((e.jsonpCallback = t.jsonpCallback), Ht.push(a)),
                  l && ae.isFunction(r) && r(l[0]),
                  (l = r = void 0);
              }),
              'script'
            );
        }),
        (ae.parseHTML = function (e, t, o) {
          if (!e || 'string' != typeof e) return null;
          'boolean' == typeof t && ((o = t), (t = !1)), (t = t || oe);
          var i = ce.exec(e),
            a = !o && [];
          return i
            ? [t.createElement(i[1])]
            : ((i = ae.buildFragment([e], t, a)),
              a && a.length && ae(a).remove(),
              ae.merge([], i.childNodes));
        });
      var jt = ae.fn.load;
      (ae.fn.load = function (e, t, o) {
        if ('string' != typeof e && jt) return jt.apply(this, arguments);
        var i = this,
          a = e.indexOf(' '),
          n,
          r,
          l;
        return (
          0 <= a && ((n = ae.trim(e.slice(a))), (e = e.slice(0, a))),
          ae.isFunction(t)
            ? ((o = t), (t = void 0))
            : t && 'object' == typeof t && (r = 'POST'),
          0 < i.length &&
            ae
              .ajax({ url: e, type: r, dataType: 'html', data: t })
              .done(function (e) {
                (l = arguments),
                  i.html(n ? ae('<div>').append(ae.parseHTML(e)).find(n) : e);
              })
              .complete(
                o &&
                  function (e, t) {
                    i.each(o, l || [e.responseText, t, e]);
                  },
              ),
          this
        );
      }),
        ae.each(
          [
            'ajaxStart',
            'ajaxStop',
            'ajaxComplete',
            'ajaxError',
            'ajaxSuccess',
            'ajaxSend',
          ],
          function (e, t) {
            ae.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        (ae.expr.filters.animated = function (e) {
          return ae.grep(ae.timers, function (t) {
            return e === t.elem;
          }).length;
        });
      var Bt = n.document.documentElement;
      (ae.offset = {
        setOffset: function (e, t, o) {
          var i = ae.css(e, 'position'),
            a = ae(e),
            n = {},
            r,
            l,
            s,
            d,
            p,
            c,
            u;
          'static' === i && (e.style.position = 'relative'),
            (p = a.offset()),
            (s = ae.css(e, 'top')),
            (c = ae.css(e, 'left')),
            (u =
              ('absolute' === i || 'fixed' === i) &&
              -1 < (s + c).indexOf('auto')),
            u
              ? ((r = a.position()), (d = r.top), (l = r.left))
              : ((d = parseFloat(s) || 0), (l = parseFloat(c) || 0)),
            ae.isFunction(t) && (t = t.call(e, o, p)),
            null != t.top && (n.top = t.top - p.top + d),
            null != t.left && (n.left = t.left - p.left + l),
            'using' in t ? t.using.call(e, n) : a.css(n);
        },
      }),
        ae.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    ae.offset.setOffset(this, e, t);
                  });
            var t = this[0],
              o = { top: 0, left: 0 },
              i = t && t.ownerDocument,
              a,
              n;
            if (i)
              return ((a = i.documentElement), !ae.contains(a, t))
                ? o
                : (typeof t.getBoundingClientRect != Me &&
                    (o = t.getBoundingClientRect()),
                  (n = X(i)),
                  {
                    top: o.top + n.pageYOffset - a.clientTop,
                    left: o.left + n.pageXOffset - a.clientLeft,
                  });
          },
          position: function () {
            if (this[0]) {
              var e = this[0],
                t = { top: 0, left: 0 },
                o,
                i;
              return (
                'fixed' === ae.css(e, 'position')
                  ? (i = e.getBoundingClientRect())
                  : ((o = this.offsetParent()),
                    (i = this.offset()),
                    !ae.nodeName(o[0], 'html') && (t = o.offset()),
                    (t.top += ae.css(o[0], 'borderTopWidth', !0)),
                    (t.left += ae.css(o[0], 'borderLeftWidth', !0))),
                {
                  top: i.top - t.top - ae.css(e, 'marginTop', !0),
                  left: i.left - t.left - ae.css(e, 'marginLeft', !0),
                }
              );
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent || Bt;
                e &&
                !ae.nodeName(e, 'html') &&
                'static' === ae.css(e, 'position');

              )
                e = e.offsetParent;
              return e || Bt;
            });
          },
        }),
        ae.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (e, t) {
            var o = 'pageYOffset' === t;
            ae.fn[e] = function (i) {
              return ke(
                this,
                function (e, i, a) {
                  var r = X(e);
                  return void 0 === a
                    ? r
                      ? r[t]
                      : e[i]
                    : void (r
                        ? r.scrollTo(
                            o ? n.pageXOffset : a,
                            o ? a : n.pageYOffset,
                          )
                        : (e[i] = a));
                },
                e,
                i,
                arguments.length,
                null,
              );
            };
          },
        ),
        ae.each(['top', 'left'], function (e, t) {
          ae.cssHooks[t] = S(te.pixelPosition, function (e, o) {
            if (o)
              return (o = C(e, t)), Xe.test(o) ? ae(e).position()[t] + 'px' : o;
          });
        }),
        ae.each({ Height: 'height', Width: 'width' }, function (e, t) {
          ae.each(
            { padding: 'inner' + e, content: t, '': 'outer' + e },
            function (i, a) {
              ae.fn[a] = function (a, n) {
                var r = arguments.length && (i || 'boolean' != typeof a),
                  l = i || (!0 === a || !0 === n ? 'margin' : 'border');
                return ke(
                  this,
                  function (t, i, a) {
                    var n;
                    return ae.isWindow(t)
                      ? t.document.documentElement['client' + e]
                      : 9 === t.nodeType
                      ? ((n = t.documentElement),
                        o(
                          t.body['scroll' + e],
                          n['scroll' + e],
                          t.body['offset' + e],
                          n['offset' + e],
                          n['client' + e],
                        ))
                      : void 0 === a
                      ? ae.css(t, i, l)
                      : ae.style(t, i, a, l);
                  },
                  t,
                  r ? a : void 0,
                  r,
                  null,
                );
              };
            },
          );
        }),
        (ae.fn.size = function () {
          return this.length;
        }),
        (ae.fn.andSelf = ae.fn.addBack),
        (i = []),
        (a = function () {
          return ae;
        }.apply(t, i)),
        !(void 0 !== a && (e.exports = a));
      var Wt = n.jQuery,
        Ft = n.$;
      return (
        (ae.noConflict = function (e) {
          return (
            n.$ === ae && (n.$ = Ft),
            e && n.jQuery === ae && (n.jQuery = Wt),
            ae
          );
        }),
        typeof r == Me && (n.jQuery = n.$ = ae),
        ae
      );
    });
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      function t() {
        s.add(e, 'ps-focus');
      }
      function o() {
        s.remove(e, 'ps-focus');
      }
      var a = this;
      (a.settings = l.clone(d)),
        (a.containerWidth = null),
        (a.containerHeight = null),
        (a.contentWidth = null),
        (a.contentHeight = null),
        (a.isRtl = 'rtl' === p.css(e, 'direction')),
        (a.isNegativeScroll = (function () {
          var t = e.scrollLeft,
            o = null;
          return (
            (e.scrollLeft = -1), (o = 0 > e.scrollLeft), (e.scrollLeft = t), o
          );
        })()),
        (a.negativeScrollAdjustment = a.isNegativeScroll
          ? e.scrollWidth - e.clientWidth
          : 0),
        (a.event = new c()),
        (a.ownerDocument = e.ownerDocument || document),
        (a.scrollbarXRail = p.appendTo(p.e('div', 'ps-scrollbar-x-rail'), e)),
        (a.scrollbarX = p.appendTo(
          p.e('div', 'ps-scrollbar-x'),
          a.scrollbarXRail,
        )),
        a.scrollbarX.setAttribute('tabindex', 0),
        a.event.bind(a.scrollbarX, 'focus', t),
        a.event.bind(a.scrollbarX, 'blur', o),
        (a.scrollbarXActive = null),
        (a.scrollbarXWidth = null),
        (a.scrollbarXLeft = null),
        (a.scrollbarXBottom = l.toInt(p.css(a.scrollbarXRail, 'bottom'))),
        (a.isScrollbarXUsingBottom = a.scrollbarXBottom === a.scrollbarXBottom),
        (a.scrollbarXTop = a.isScrollbarXUsingBottom
          ? null
          : l.toInt(p.css(a.scrollbarXRail, 'top'))),
        (a.railBorderXWidth =
          l.toInt(p.css(a.scrollbarXRail, 'borderLeftWidth')) +
          l.toInt(p.css(a.scrollbarXRail, 'borderRightWidth'))),
        p.css(a.scrollbarXRail, 'display', 'block'),
        (a.railXMarginWidth =
          l.toInt(p.css(a.scrollbarXRail, 'marginLeft')) +
          l.toInt(p.css(a.scrollbarXRail, 'marginRight'))),
        p.css(a.scrollbarXRail, 'display', ''),
        (a.railXWidth = null),
        (a.railXRatio = null),
        (a.scrollbarYRail = p.appendTo(p.e('div', 'ps-scrollbar-y-rail'), e)),
        (a.scrollbarY = p.appendTo(
          p.e('div', 'ps-scrollbar-y'),
          a.scrollbarYRail,
        )),
        a.scrollbarY.setAttribute('tabindex', 0),
        a.event.bind(a.scrollbarY, 'focus', t),
        a.event.bind(a.scrollbarY, 'blur', o),
        (a.scrollbarYActive = null),
        (a.scrollbarYHeight = null),
        (a.scrollbarYTop = null),
        (a.scrollbarYRight = l.toInt(p.css(a.scrollbarYRail, 'right'))),
        (a.isScrollbarYUsingRight = a.scrollbarYRight === a.scrollbarYRight),
        (a.scrollbarYLeft = a.isScrollbarYUsingRight
          ? null
          : l.toInt(p.css(a.scrollbarYRail, 'left'))),
        (a.scrollbarYOuterWidth = a.isRtl ? l.outerWidth(a.scrollbarY) : null),
        (a.railBorderYWidth =
          l.toInt(p.css(a.scrollbarYRail, 'borderTopWidth')) +
          l.toInt(p.css(a.scrollbarYRail, 'borderBottomWidth'))),
        p.css(a.scrollbarYRail, 'display', 'block'),
        (a.railYMarginHeight =
          l.toInt(p.css(a.scrollbarYRail, 'marginTop')) +
          l.toInt(p.css(a.scrollbarYRail, 'marginBottom'))),
        p.css(a.scrollbarYRail, 'display', ''),
        (a.railYHeight = null),
        (a.railYRatio = null);
    }
    function a(e) {
      return e.getAttribute('data-ps-id');
    }
    function n(e, t) {
      e.setAttribute('data-ps-id', t);
    }
    function r(e) {
      e.removeAttribute('data-ps-id');
    }
    var l = o(19),
      s = o(64),
      d = o(303),
      p = o(33),
      c = o(304),
      u = o(305),
      g = {};
    (t.add = function (e) {
      var t = u();
      return n(e, t), (g[t] = new i(e)), g[t];
    }),
      (t.remove = function (e) {
        delete g[a(e)], r(e);
      }),
      (t.get = function (e) {
        return g[a(e)];
      });
  },
  function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.default = new (class {
      constructor() {
        this.subDoc = document;
      }
      set(e) {
        this.subDoc = e;
      }
      get() {
        return window.testsSandboxDoc || this.subDoc;
      }
    })();
  },
  function (e, t, o) {
    const i = o(154);
    e.exports = new i();
  },
  function (e, t, o) {
    e.exports = { default: o(175), __esModule: !0 };
  },
  function (e, t, o) {
    var i = o(15),
      a = o(95),
      n = o(69),
      r = Object.defineProperty;
    t.f = o(17)
      ? Object.defineProperty
      : function (e, t, o) {
          if ((i(e), (t = n(t, !0)), i(o), a))
            try {
              return r(e, t, o);
            } catch (t) {}
          if ('get' in o || 'set' in o)
            throw TypeError('Accessors not supported!');
          return 'value' in o && (e[t] = o.value), e;
        };
  },
  function (e, t, o) {
    var i = o(8);
    e.exports = function (e) {
      if (!i(e)) throw TypeError(e + ' is not an object!');
      return e;
    };
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(27),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = (0, a.default)('lol-uikit:layer-manager');
    n.log = a.default.consoleWrap('error');
    const r = o(9);
    class l {
      constructor() {
        (this._domNode = document.createElement('div')),
          (this._domNode.id = 'lol-uikit-layer-manager-wrapper');
      }
      get domNode() {
        if (!this._isAddedToDom) {
          const e = document.querySelector('#lol-uikit-layer-manager');
          e && (e.appendChild(this._domNode), (this._isAddedToDom = !0));
        }
        return this._domNode;
      }
      addListener(e, t) {
        this.domNode.addEventListener(e, t);
      }
      removeListener(e, t) {
        this.domNode.removeEventListener(e, t);
      }
      trigger(e, t = null) {
        if ('string' == typeof e) {
          const o = new CustomEvent(e, { detail: t });
          this.domNode.dispatchEvent(o);
        }
      }
      attachTo(e) {
        e instanceof r
          ? (n(
              '[DEPRECATED]: passing a string is no longer supported, pass a DOM Node instance',
            ),
            e.append(this.domNode))
          : 'string' == typeof e
          ? (n(
              '[DEPRECATED]: passing a string is no longer supported, pass a DOM Node instance',
            ),
            r(e).append(this.domNode))
          : e.appendChild(this.domNode);
      }
      getDomNode(e) {
        if (e)
          return e instanceof window.HTMLElement
            ? e
            : 'domNode' in e
            ? e.domNode
            : void 0;
      }
      addLayer(e) {
        e = this.getDomNode(e);
        e &&
          -1 === Array.prototype.slice.call(this.domNode.children).indexOf(e) &&
          (this.domNode.appendChild(e), this.trigger('change', { domNode: e }));
      }
      getLayer(e) {
        return (
          'number' != typeof e && (e = this.getLayerIndex(e)),
          0 > e ? void 0 : this.domNode.children[e]
        );
      }
      getLayerIndex(e) {
        if (((e = this.getDomNode(e)), !e)) return;
        let t = this.domNode.childNodes.indexOf(e);
        for (; -1 === t; ) {
          if (((e = e.parent), !e)) return -1;
          t = this.domNode.childNodes.indexOf(e);
        }
        return t;
      }
      insertLayer(e, t) {
        e = this.getDomNode(e);
        e &&
          (this.domNode.insertBefore(e, this.domNode.childNodes[t]),
          this.trigger('change', { domNode: e }));
      }
      insertToLayer(e, t) {
        if (((e = this.getDomNode(e)), !e)) return;
        for (; t > this.domNode.childNodes.length; )
          this.addLayer(document.createElement('div'));
        if (t === this.domNode.childNodes.length)
          return this.addLayer(e), void this.trigger('change', { domNode: e });
        let o = this.domNode.childNodes[t];
        if (!o.classList.contains('layer-group')) {
          const e = document.createElement('div');
          e.classList.add('layer-group'),
            this.domNode.insertBefore(e, o),
            this.domNode.removeChild(o),
            e.appendChild(o),
            (o = e);
        }
        o.appendChild(e), this.trigger('change', { domNode: e });
      }
      removeLayer(e) {
        if (e) {
          if (e.parentNode === this.domNode) this.domNode.removeChild(e);
          else if (e.parentNode && e.parentNode.parentNode === this.domNode) {
            const t = e.parentNode;
            t.removeChild(e),
              0 === t.childNodes.length && this.domNode.removeChild(t);
          }
          this.trigger('change', { domNode: e });
        }
      }
    }
    t.default = new l();
  },
  function (e, t, o) {
    e.exports = !o(23)(function () {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t, o) {
    e.exports = { default: o(234), __esModule: !0 };
  },
  function (e, t, o) {
    'use strict';
    var a = o(64),
      i = o(33),
      n = (t.toInt = function (e) {
        return parseInt(e, 10) || 0;
      }),
      r = (t.clone = function (e) {
        if (!e) return null;
        if (e.constructor === Array) return e.map(r);
        if ('object' == typeof e) {
          var t = {};
          for (var o in e) t[o] = r(e[o]);
          return t;
        }
        return e;
      });
    (t.extend = function (e, t) {
      var o = r(e);
      for (var i in t) o[i] = r(t[i]);
      return o;
    }),
      (t.isEditable = function (e) {
        return (
          i.matches(e, 'input,[contenteditable]') ||
          i.matches(e, 'select,[contenteditable]') ||
          i.matches(e, 'textarea,[contenteditable]') ||
          i.matches(e, 'button,[contenteditable]')
        );
      }),
      (t.removePsClasses = function (e) {
        for (var t = a.list(e), o = 0, i; o < t.length; o++)
          (i = t[o]), 0 === i.indexOf('ps-') && a.remove(e, i);
      }),
      (t.outerWidth = function (e) {
        return (
          n(i.css(e, 'width')) +
          n(i.css(e, 'paddingLeft')) +
          n(i.css(e, 'paddingRight')) +
          n(i.css(e, 'borderLeftWidth')) +
          n(i.css(e, 'borderRightWidth'))
        );
      }),
      (t.startScrolling = function (e, t) {
        a.add(e, 'ps-in-scrolling'),
          'undefined' == typeof t
            ? (a.add(e, 'ps-x'), a.add(e, 'ps-y'))
            : a.add(e, 'ps-' + t);
      }),
      (t.stopScrolling = function (e, t) {
        a.remove(e, 'ps-in-scrolling'),
          'undefined' == typeof t
            ? (a.remove(e, 'ps-x'), a.remove(e, 'ps-y'))
            : a.remove(e, 'ps-' + t);
      }),
      (t.env = {
        isWebKit: 'WebkitAppearance' in document.documentElement.style,
        supportsTouch:
          'ontouchstart' in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: null !== window.navigator.msMaxTouchPoints,
      });
  },
  function (e, t, o) {
    'use strict';
    function a(e, t) {
      return (
        e.settings.minScrollbarLength &&
          (t = Math.max(t, e.settings.minScrollbarLength)),
        e.settings.maxScrollbarLength &&
          (t = Math.min(t, e.settings.maxScrollbarLength)),
        t
      );
    }
    function n(e, t) {
      var o = { width: t.railXWidth };
      (o.left = t.isRtl
        ? t.negativeScrollAdjustment +
          e.scrollLeft +
          t.containerWidth -
          t.contentWidth
        : e.scrollLeft),
        t.isScrollbarXUsingBottom
          ? (o.bottom = t.scrollbarXBottom - e.scrollTop)
          : (o.top = t.scrollbarXTop + e.scrollTop),
        s.css(t.scrollbarXRail, o);
      var i = { top: e.scrollTop, height: t.railYHeight };
      t.isScrollbarYUsingRight
        ? t.isRtl
          ? (i.right =
              t.contentWidth -
              (t.negativeScrollAdjustment + e.scrollLeft) -
              t.scrollbarYRight -
              t.scrollbarYOuterWidth)
          : (i.right = t.scrollbarYRight - e.scrollLeft)
        : t.isRtl
        ? (i.left =
            t.negativeScrollAdjustment +
            e.scrollLeft +
            2 * t.containerWidth -
            t.contentWidth -
            t.scrollbarYLeft -
            t.scrollbarYOuterWidth)
        : (i.left = t.scrollbarYLeft + e.scrollLeft),
        s.css(t.scrollbarYRail, i),
        s.css(t.scrollbarX, {
          left: t.scrollbarXLeft,
          width: t.scrollbarXWidth - t.railBorderXWidth,
        }),
        s.css(t.scrollbarY, {
          top: t.scrollbarYTop,
          height: t.scrollbarYHeight - t.railBorderYWidth,
        });
    }
    var r = o(19),
      l = o(64),
      s = o(33),
      d = o(10),
      p = o(26);
    e.exports = function (e) {
      var t = d.get(e);
      (t.containerWidth = e.clientWidth),
        (t.containerHeight = e.clientHeight),
        (t.contentWidth = e.scrollWidth),
        (t.contentHeight = e.scrollHeight);
      var o;
      e.contains(t.scrollbarXRail) ||
        ((o = s.queryChildren(e, '.ps-scrollbar-x-rail')),
        0 < o.length &&
          o.forEach(function (e) {
            s.remove(e);
          }),
        s.appendTo(t.scrollbarXRail, e)),
        e.contains(t.scrollbarYRail) ||
          ((o = s.queryChildren(e, '.ps-scrollbar-y-rail')),
          0 < o.length &&
            o.forEach(function (e) {
              s.remove(e);
            }),
          s.appendTo(t.scrollbarYRail, e)),
        !t.settings.suppressScrollX &&
        t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
          ? ((t.scrollbarXActive = !0),
            (t.railXWidth = t.containerWidth - t.railXMarginWidth),
            (t.railXRatio = t.containerWidth / t.railXWidth),
            (t.scrollbarXWidth = a(
              t,
              r.toInt((t.railXWidth * t.containerWidth) / t.contentWidth),
            )),
            (t.scrollbarXLeft = r.toInt(
              ((t.negativeScrollAdjustment + e.scrollLeft) *
                (t.railXWidth - t.scrollbarXWidth)) /
                (t.contentWidth - t.containerWidth),
            )))
          : (t.scrollbarXActive = !1),
        !t.settings.suppressScrollY &&
        t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
          ? ((t.scrollbarYActive = !0),
            (t.railYHeight = t.containerHeight - t.railYMarginHeight),
            (t.railYRatio = t.containerHeight / t.railYHeight),
            (t.scrollbarYHeight = a(
              t,
              r.toInt((t.railYHeight * t.containerHeight) / t.contentHeight),
            )),
            (t.scrollbarYTop = r.toInt(
              (e.scrollTop * (t.railYHeight - t.scrollbarYHeight)) /
                (t.contentHeight - t.containerHeight),
            )))
          : (t.scrollbarYActive = !1),
        t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
          (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
        t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
          (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
        n(e, t),
        t.scrollbarXActive
          ? l.add(e, 'ps-active-x')
          : (l.remove(e, 'ps-active-x'),
            (t.scrollbarXWidth = 0),
            (t.scrollbarXLeft = 0),
            p(e, 'left', 0)),
        t.scrollbarYActive
          ? l.add(e, 'ps-active-y')
          : (l.remove(e, 'ps-active-y'),
            (t.scrollbarYHeight = 0),
            (t.scrollbarYTop = 0),
            p(e, 'top', 0));
    };
  },
  function (e, t, o) {
    var i = o(40);
    e.exports = function (e, t, o) {
      return (i(e), void 0 === t)
        ? e
        : 1 === o
        ? function (o) {
            return e.call(t, o);
          }
        : 2 === o
        ? function (o, i) {
            return e.call(t, o, i);
          }
        : 3 === o
        ? function (o, i, a) {
            return e.call(t, o, i, a);
          }
        : function () {
            return e.apply(t, arguments);
          };
    };
  },
  function (e, t, o) {
    var i = o(14),
      a = o(41);
    e.exports = o(17)
      ? function (e, t, o) {
          return i.f(e, t, a(1, o));
        }
      : function (e, t, o) {
          return (e[t] = o), e;
        };
  },
  function (e) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (t) {
        return !0;
      }
    };
  },
  function (e) {
    var t = {}.hasOwnProperty;
    e.exports = function (e, o) {
      return t.call(e, o);
    };
  },
  function (e, t, o) {
    e.exports = { default: o(201), __esModule: !0 };
  },
  function (e, t, o) {
    'use strict';
    var a = o(10),
      n = function (e) {
        var t = document.createEvent('Event');
        return t.initEvent(e, !0, !0), t;
      },
      r,
      l;
    e.exports = function (e, t, o) {
      if ('undefined' == typeof e)
        throw 'You must provide an element to the update-scroll function';
      if ('undefined' == typeof t)
        throw 'You must provide an axis to the update-scroll function';
      if ('undefined' == typeof o)
        throw 'You must provide a value to the update-scroll function';
      'top' === t &&
        0 >= o &&
        ((e.scrollTop = o = 0), e.dispatchEvent(n('ps-y-reach-start'))),
        'left' === t &&
          0 >= o &&
          ((e.scrollLeft = o = 0), e.dispatchEvent(n('ps-x-reach-start')));
      var s = a.get(e);
      'top' === t &&
        o >= s.contentHeight - s.containerHeight &&
        ((o = s.contentHeight - s.containerHeight),
        1 >= o - e.scrollTop ? (o = e.scrollTop) : (e.scrollTop = o),
        e.dispatchEvent(n('ps-y-reach-end'))),
        'left' === t &&
          o >= s.contentWidth - s.containerWidth &&
          ((o = s.contentWidth - s.containerWidth),
          1 >= o - e.scrollLeft ? (o = e.scrollLeft) : (e.scrollLeft = o),
          e.dispatchEvent(n('ps-x-reach-end'))),
        r || (r = e.scrollTop),
        l || (l = e.scrollLeft),
        'top' === t && o < r && e.dispatchEvent(n('ps-scroll-up')),
        'top' === t && o > r && e.dispatchEvent(n('ps-scroll-down')),
        'left' === t && o < l && e.dispatchEvent(n('ps-scroll-left')),
        'left' === t && o > l && e.dispatchEvent(n('ps-scroll-right')),
        'top' === t &&
          ((e.scrollTop = r = o), e.dispatchEvent(n('ps-scroll-y'))),
        'left' === t &&
          ((e.scrollLeft = l = o), e.dispatchEvent(n('ps-scroll-x')));
    };
  },
  function (e, t, o) {
    const i = o(141),
      a = /[&?]DEBUG(?:=([^&?#]*))?/,
      n = o(144),
      r = i.enable;
    i.enable = function (e) {
      if ('' === e) return r('');
      const t = i.load();
      return t && -1 < t.indexOf(e) ? void 0 : t ? r(t + ',' + e) : r(e);
    };
    const l = i.enabled;
    i.enabled = function (e) {
      return !!/:(error|warn)$/.test(e) || l(e);
    };
    const s = function (e) {
      return function () {
        return 'undefined' != typeof window && window.riot
          ? console[e](n.format.apply(n, arguments))
          : console[e].apply(console, arguments);
      };
    };
    if ('undefined' != typeof window) {
      const e = a.exec(window.location.href);
      e &&
        (i.disable('*'),
        i.enable(e[1]),
        i('riotclient-debug:internal')('Enabling DEBUG=' + e[1])),
        window.riot &&
          ((i.log = s('log')),
          (i.useColors = function () {
            return !1;
          }));
    }
    (e.exports = i), (e.exports.consoleWrap = s);
  },
  function (e, t, o) {
    var i = o(70),
      a = o(51);
    e.exports = function (e) {
      return i(a(e));
    };
  },
  function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.leftClickHandler = function (e, ...t) {
        return (o) => {
          if (0 === o.button) {
            const i = [o].concat(t);
            e(...i);
          }
        };
      });
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return s.has(e) || s.set(e, new d(e)), s.get(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(13),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a);
    (t.getChannel = i),
      (t.createSound = function (e, ...t) {
        return i(e).registerSound(...t);
      });
    var r = o(0);
    const l = (0, r.getProvider)().get('rcp-fe-audio'),
      s = new n.default();
    class d {
      constructor(e) {
        if (((this.channel = l.getChannel(e)), !this.channel))
          throw new RangeError(`Channel ${e} not found`);
        (this._readyQueue = []),
          (this._queueBusy = !1),
          (this._soundsByUrl = new n.default());
      }
      registerSound(e, ...t) {
        const o = this._soundsByUrl.get(e) || this.channel.createSound(e, ...t);
        return this._soundsByUrl.set(e, o), this.enqueueSoundForLoad(o), o;
      }
      enqueueSoundForLoad(e) {
        this._readyQueue.push(e), this._dequeue();
      }
      _dequeue() {
        if (this._queueBusy) return;
        const e = this._readyQueue.shift();
        if (e)
          return (
            (this._queueBusy = !0),
            e
              .ready()
              .then(() => this._shiftQueue())
              .catch(function (t) {
                const o = `UIKit failed to load an audio file: ${t.message} ${e.options.url}`;
                if (window.testsSandbox) throw new Error(o);
                else console.error(o);
              })
          );
      }
      _shiftQueue() {
        (this._queueBusy = !1), this._dequeue();
      }
    }
  },
  function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.isAttrTruthy = function (e, t) {
        return '' === t || t === e || 'true' === t;
      });
  },
  function (e) {
    e.exports = function (e) {
      return 'string' == typeof e
        ? (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
          /["'() \t\n]/.test(e)
            ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
            : e)
        : e;
    };
  },
  function (e) {
    'use strict';
    function t(e, t) {
      return window.getComputedStyle(e)[t];
    }
    function o(e, t, o) {
      return (
        'number' == typeof o && (o = o.toString() + 'px'), (e.style[t] = o), e
      );
    }
    function i(e, t) {
      for (var o in t) {
        var i = t[o];
        'number' == typeof i && (i = i.toString() + 'px'), (e.style[o] = i);
      }
      return e;
    }
    var a = {};
    (a.e = function (e, t) {
      var o = document.createElement(e);
      return (o.className = t), o;
    }),
      (a.appendTo = function (e, t) {
        return t.appendChild(e), e;
      }),
      (a.css = function (e, a, n) {
        return 'object' == typeof a
          ? i(e, a)
          : 'undefined' == typeof n
          ? t(e, a)
          : o(e, a, n);
      }),
      (a.matches = function (e, t) {
        if ('undefined' != typeof e.matches) return e.matches(t);
        return 'undefined' == typeof e.matchesSelector
          ? 'undefined' == typeof e.webkitMatchesSelector
            ? 'undefined' == typeof e.mozMatchesSelector
              ? 'undefined' == typeof e.msMatchesSelector
                ? void 0
                : e.msMatchesSelector(t)
              : e.mozMatchesSelector(t)
            : e.webkitMatchesSelector(t)
          : e.matchesSelector(t);
      }),
      (a.remove = function (e) {
        'undefined' == typeof e.remove
          ? e.parentNode && e.parentNode.removeChild(e)
          : e.remove();
      }),
      (a.queryChildren = function (e, t) {
        return Array.prototype.filter.call(e.childNodes, function (e) {
          return a.matches(e, t);
        });
      }),
      (e.exports = a);
  },
  function (e, t, o) {
    'use strict';
    var i = o(164)(!0);
    o(75)(
      String,
      'String',
      function (e) {
        (this._t = e + ''), (this._i = 0);
      },
      function () {
        var e = this._t,
          t = this._i,
          o;
        return t >= e.length
          ? { value: void 0, done: !0 }
          : ((o = i(e, t)), (this._i += o.length), { value: o, done: !1 });
      },
    );
  },
  function (e) {
    e.exports = {};
  },
  function (e, t, o) {
    o(167);
    for (
      var a = o(4),
        n = o(22),
        r = o(35),
        l = o(6)('toStringTag'),
        s =
          'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ',',
          ),
        d = 0;
      d < s.length;
      d++
    ) {
      var i = s[d],
        p = a[i],
        c = p && p.prototype;
      c && !c[l] && n(c, l, i), (r[i] = r.Array);
    }
  },
  function (e, t, o) {
    var i = o(21),
      a = o(100),
      n = o(101),
      r = o(15),
      l = o(52),
      s = o(77),
      d = {},
      p = {},
      t = (e.exports = function (e, t, o, c, u) {
        var g = u
            ? function () {
                return e;
              }
            : s(e),
          m = i(o, c, t ? 2 : 1),
          h = 0,
          b,
          f,
          y,
          v;
        if ('function' != typeof g) throw TypeError(e + ' is not iterable!');
        if (n(g)) {
          for (b = l(e.length); b > h; h++)
            if (
              ((v = t ? m(r((f = e[h]))[0], f[1]) : m(e[h])),
              v === d || v === p)
            )
              return v;
        } else
          for (y = g.call(e); !(f = y.next()).done; )
            if (((v = a(y, m, f.value, t)), v === d || v === p)) return v;
      });
    (t.BREAK = d), (t.RETURN = p);
  },
  function (e, t, o) {
    var i = o(53)('meta'),
      a = o(8),
      n = o(24),
      r = o(14).f,
      l = 0,
      s =
        Object.isExtensible ||
        function () {
          return !0;
        },
      d = !o(23)(function () {
        return s(Object.preventExtensions({}));
      }),
      p = function (e) {
        r(e, i, { value: { i: 'O' + ++l, w: {} } });
      },
      c = (e.exports = {
        KEY: i,
        NEED: !1,
        fastKey: function (e, t) {
          if (!a(e))
            return 'symbol' == typeof e
              ? e
              : ('string' == typeof e ? 'S' : 'P') + e;
          if (!n(e, i)) {
            if (!s(e)) return 'F';
            if (!t) return 'E';
            p(e);
          }
          return e[i].i;
        },
        getWeak: function (e, t) {
          if (!n(e, i)) {
            if (!s(e)) return !0;
            if (!t) return !1;
            p(e);
          }
          return e[i].w;
        },
        onFreeze: function (e) {
          return d && c.NEED && s(e) && !n(e, i) && p(e), e;
        },
      });
  },
  function (e, t, o) {
    var i = o(8);
    e.exports = function (e, t) {
      if (!i(e) || e._t !== t)
        throw TypeError('Incompatible receiver, ' + t + ' required!');
      return e;
    };
  },
  function (e) {
    e.exports = function (e) {
      if ('function' != typeof e) throw TypeError(e + ' is not a function!');
      return e;
    };
  },
  function (e) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, o) {
    var i = o(96),
      a = o(74);
    e.exports =
      Object.keys ||
      function (e) {
        return i(e, a);
      };
  },
  function (e) {
    var t = {}.toString;
    e.exports = function (e) {
      return t.call(e).slice(8, -1);
    };
  },
  function (e) {
    e.exports = !0;
  },
  function () {},
  function (e, t, o) {
    var i = o(14).f,
      a = o(24),
      n = o(6)('toStringTag');
    e.exports = function (e, t, o) {
      e &&
        !a((e = o ? e : e.prototype), n) &&
        i(e, n, { configurable: !0, value: t });
    };
  },
  function (e, t, o) {
    var i = o(51);
    e.exports = function (e) {
      return Object(i(e));
    };
  },
  function (e, t, o) {
    e.exports = { default: o(191), __esModule: !0 };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return (t.default = e), t;
    }
    var a = o(355),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a),
      r = o(88),
      l = i(r),
      s = o(129),
      d = i(s);
    e.exports = {
      rect: l.rect,
      point: l.point,
      elementRect: d.elementRect,
      relativePosition: d.elementRect,
      getPositioningStrategy(e) {
        return n.default[e];
      },
    };
  },
  function (e, t, o) {
    var i = o(15),
      a = o(151),
      n = o(74),
      r = o(72)('IE_PROTO'),
      l = function () {},
      s = 'prototype',
      d = function () {
        var e = o(68)('iframe'),
          t = n.length,
          i = '<',
          a = '>',
          r;
        for (
          e.style.display = 'none',
            o(97).appendChild(e),
            e.src = 'javascript:',
            r = e.contentWindow.document,
            r.open(),
            r.write(i + 'script' + a + 'document.F=Object' + i + '/script' + a),
            r.close(),
            d = r.F;
          t--;

        )
          delete d[s][n[t]];
        return d();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var o;
        return (
          null === e
            ? (o = d())
            : ((l[s] = i(e)), (o = new l()), (l[s] = null), (o[r] = e)),
          void 0 === t ? o : a(o, t)
        );
      };
  },
  function (e) {
    e.exports = function (e) {
      if (e == void 0) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function (e, t, o) {
    var i = o(71),
      a = Math.min;
    e.exports = function (e) {
      return 0 < e ? a(i(e), 9007199254740991) : 0;
    };
  },
  function (e) {
    var t = 0,
      o = Math.random();
    e.exports = function (e) {
      return 'Symbol('.concat(
        e === void 0 ? '' : e,
        ')_',
        (++t + o).toString(36),
      );
    };
  },
  function (e, t, o) {
    var i = o(43),
      a = o(6)('toStringTag'),
      n =
        'Arguments' ==
        i(
          (function () {
            return arguments;
          })(),
        ),
      r = function (e, t) {
        try {
          return e[t];
        } catch (t) {}
      };
    e.exports = function (e) {
      var t, o, l;
      return e === void 0
        ? 'Undefined'
        : null === e
        ? 'Null'
        : 'string' == typeof (o = r((t = Object(e)), a))
        ? o
        : n
        ? i(t)
        : 'Object' == (l = i(t)) && 'function' == typeof t.callee
        ? 'Arguments'
        : l;
    };
  },
  function (e) {
    e.exports = function (e, t, o, i) {
      if (!(e instanceof t) || (i !== void 0 && i in e))
        throw TypeError(o + ': incorrect invocation!');
      return e;
    };
  },
  function (e, t, o) {
    var i = o(22);
    e.exports = function (e, t, o) {
      for (var a in t) o && e[a] ? (e[a] = t[a]) : i(e, a, t[a]);
      return e;
    };
  },
  function (e, t, o) {
    var i = o(3),
      a = o(2),
      n = o(23);
    e.exports = function (e, t) {
      var o = (a.Object || {})[e] || Object[e],
        r = {};
      (r[e] = t(o)),
        i(
          i.S +
            i.F *
              n(function () {
                o(1);
              }),
          'Object',
          r,
        );
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(83),
      n = i(a),
      r = o(112),
      l = i(r);
    class s extends n.default {
      templateMarkup() {
        return o(205);
      }
      constructor() {
        super(),
          (this.matchString = 'state'),
          (this.state = this.getAttribute('state')),
          (this.statePromise = new l.default()),
          (this.parameterChangedHandlers = []);
      }
      connectedCallback() {
        super.connectedCallback(), this.activateState(), this.updateCase();
      }
      attributeChangedCallback(e, t, o) {
        super.attributeChangedCallback(e, t, o);
        t === o ||
          ('state' === e &&
            (this.hasAttribute('log') &&
              console.log(
                'uikit-state-machine: changing state from ',
                t,
                ' to ',
                o,
                this,
              ),
            this.activateState(o)),
          this.onParameterChanged(e, t, o));
      }
      onParameterChanged(e, t, o) {
        const a = this.parameterChangedHandlers.slice(0);
        for (let n = 0; n < a.length; n++) a[n](e, t, o);
      }
      subscribeParameterChanged(e) {
        -1 === this.parameterChangedHandlers.indexOf(e) &&
          this.parameterChangedHandlers.push(e);
      }
      unsubscribeParameterChanged(e) {
        const t = this.parameterChangedHandlers.indexOf(e);
        -1 !== t && this.parameterChangedHandlers.splice(t, 1);
      }
      isActive(e = void 0) {
        return (
          this.activeTransitionTokens !== void 0 &&
          (!e || -1 !== this.activeTransitionTokens.indexOf(e))
        );
      }
      deactivateState(e = this.state) {
        (this.activeTransitionTokens = void 0),
          this.getStateDescription(e).forEach((e) => {
            e.deactivate && e.deactivate();
          });
      }
      activateState(e = this.state) {
        e !== this.state && this.deactivateState(this.state), (this.state = e);
        let t = !1;
        const o = this.getStateDescription(e),
          a = [];
        this.activeTransitionTokens = a;
        for (let n = 0; n < o.length; n++) {
          if (t) return;
          const e = o[n],
            i = {};
          e.activate &&
            (a.push(i),
            e.activate((e) => {
              this.isActive(i) && ((t = !0), this.changeState(e));
            }));
        }
      }
      getStateDescription(e = this.state, t = !1) {
        if (((e = this.getState(e)), !e)) return [];
        const o = [];
        for (let a = 0; a < e.childNodes.length; a++) {
          const i = e.childNodes[a];
          i.activate && (!t || i.getNextState) && o.push(i);
        }
        return o;
      }
      getActiveConditions() {
        let e = [];
        return (
          (this.getStateDescription(this.state, !0) || []).forEach(function (
            t,
          ) {
            e = e.concat(t.getActiveConditions());
          }),
          e
        );
      }
      eagerPromise(e) {
        const t = this.statePromise,
          o = new l.default(e);
        (this.statePromise = o), t.then(o);
      }
      changeState(e) {
        this.deactivateState(),
          this.eagerPromise((t) => {
            const o = this.getState(e);
            o || console.error(new Error(`Invalid state "${e}"`)),
              o && o.hasAttribute('synchronous')
                ? t()
                : requestAnimationFrame(() => requestAnimationFrame(t)),
              this.setAttribute('state', e);
          });
      }
      getState(e = this.state) {
        return this.querySelector(
          ':scope > uikit-states > uikit-state[name="' + e + '"]',
        );
      }
      static getStateMachine(e) {
        for (; e; ) {
          if (e instanceof s) return e;
          e = e.parentNode;
        }
      }
    }
    (s.tagName = 'uikit-state-machine'), (t.default = s);
  },
  function (e, t, o) {
    e.exports = { default: o(196), __esModule: !0 };
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function (e, t) {
    'use strict';
    var o = Math.round;
    Object.defineProperty(t, '__esModule', { value: !0 });
    class i {
      constructor(e, t, o, i) {
        (this.left = e || 0),
          (this.top = t || 0),
          (this.width = o || 0),
          (this.height = i || 0);
      }
      get right() {
        return this.left + this.width;
      }
      set right(e) {
        this.left = e - this.width;
      }
      get bottom() {
        return this.top + this.height;
      }
      set bottom(e) {
        this.top = e - this.height;
      }
      fitWithin(e) {
        this.left < e.left && (this.left = e.left),
          this.top < e.top && (this.top = e.top),
          this.right > e.right && (this.right = e.right),
          this.bottom > e.bottom && (this.bottom = e.bottom);
      }
      centerWithin(e) {
        (this.left = o((e.width - this.width) / 2)),
          (this.top = o((e.height - this.height) / 2));
      }
      place(e, t) {
        return (
          (this.left = e.right),
          (this.top = e.top),
          t && this.flipToFit(t, e),
          this
        );
      }
      flipToFit(e, t) {
        t || (t = new i(this.left, this.top)),
          this.right > e.right && (this.right = t.left),
          this.bottom > e.bottom && (this.bottom = t.bottom);
      }
      static fromDOMRect(e) {
        return new i(e.left, e.top, e.width, e.height);
      }
    }
    t.default = i;
  },
  function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    t.Z_INDEX_CONSTANTS = {
      TOOLTIPS: 19e3,
      NOTIFICATIONS: 8e3,
      MODALS: 8500,
      DROPDOWNS: 2,
      SLIDER: 1,
      CONTEXT_MENUS: 10,
      CELEBRATIONS_TOAST: 9e3,
      CELEBRATIONS_VIGNETTE: 9001,
      CELEBRATIONS_MODAL: 9002,
    };
  },
  function (e, t, o) {
    e.exports = { default: o(281), __esModule: !0 };
  },
  function (e, t) {
    'use strict';
    function o(e, t) {
      var o = e.className.split(' ');
      0 > o.indexOf(t) && o.push(t), (e.className = o.join(' '));
    }
    function i(e, t) {
      var o = e.className.split(' '),
        i = o.indexOf(t);
      0 <= i && o.splice(i, 1), (e.className = o.join(' '));
    }
    (t.add = function (e, t) {
      e.classList ? e.classList.add(t) : o(e, t);
    }),
      (t.remove = function (e, t) {
        e.classList ? e.classList.remove(t) : i(e, t);
      }),
      (t.list = function (e) {
        return e.classList
          ? Array.prototype.slice.apply(e.classList)
          : e.className.split(' ');
      });
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(16),
      n = i(a),
      r = o(0),
      l = i(r),
      s = o(62);
    t.default = new (class {
      constructor() {
        (this.gameflowModalLock = !1),
          (this.lockAndLoadLock = !1),
          (this.type = 'Modal'),
          (this.eligibleModalQueue = []),
          (this.layer = this.createLayer()),
          this.addGameDataBinding(),
          this.addLockAndLoadListeners();
      }
      createLayer() {
        const e = document.createElement('div');
        return (
          e.classList.add('modal'),
          (e.style.position = 'absolute'),
          (e.style.left = '0'),
          (e.style.right = '0'),
          (e.style.top = '0'),
          (e.style.bottom = '0'),
          (e.style['z-index'] = s.Z_INDEX_CONSTANTS.MODALS),
          e
        );
      }
      showLayer() {
        n.default.addLayer(this.layer);
      }
      hideLayer() {
        n.default.removeLayer(this.layer);
      }
      getDOMNode(e) {
        return !e || r.Lodash.isEmpty(e) ? void 0 : e.domNode;
      }
      initializeDomNodes(e) {
        if ('Modal' === e.type) {
          if (!e.domNode) {
            const t = document.createElement('lol-uikit-full-page-backdrop');
            t.classList.add('backdrop'), (e.domNode = t);
          }
          e.children || (e.children = []);
          for (let t = 0; t < e.children.length; t++) {
            const o = e.children[t];
            if (
              ((o.owner = e.domNode),
              (o.ComponentFactory = o.ComponentFactory || e.ComponentFactory),
              !o.domNode)
            ) {
              const i = o.ComponentFactory.create(o);
              r.Lodash.isObject(i) && r.Lodash.assign(i, o),
                (e.children[t] = i);
            }
          }
        }
      }
      styleDOMNode(e) {
        (e.style.display = 'flex'),
          (e.style['align-items'] = 'center'),
          (e.style['justify-content'] = 'center'),
          (e.style.position = 'absolute'),
          (e.style.top = 0),
          (e.style.bottom = 0),
          (e.style.right = 0),
          (e.style.left = 0);
      }
      getModalsAndChildren() {
        const e = [];
        for (let t = this.eligibleModalQueue.slice(0); t.length; ) {
          const o = t[t.length - 1];
          e.push(o),
            t.splice(t.length - 1, 1),
            (t = t.concat(o.children || []));
        }
        return e;
      }
      getActiveModal() {
        const e = this.eligibleModalQueue.length && this.eligibleModalQueue[0];
        return e && this.isModalVisible(e) ? e : null;
      }
      getModalByDOMNode(e) {
        if (e) {
          const t = this.getModalsAndChildren(),
            o = t.map(function (e) {
              return e.domNode;
            });
          for (; e; ) {
            const i = o.indexOf(e);
            if (-1 !== i) return t[i];
            e = e.parentElement;
          }
        }
      }
      isModalVisible(e) {
        return (
          !!(this.layer && e.domNode) &&
          -1 !==
            Array.prototype.slice.call(this.layer.children).indexOf(e.domNode)
        );
      }
      showModal(e) {
        this.forceShowModal(e);
      }
      forceShowModal(e) {
        if (e) {
          if (
            (this._forceShowModal(e),
            this.isType(e) && e.children && e.children.length)
          ) {
            const t = e.children[0];
            (t.owner = e.domNode),
              (t.ComponentFactory = t.ComponentFactory || e.ComponentFactory),
              this._forceShowModal(t);
          }
          return e;
        }
      }
      _forceShowModal(e) {
        this.showLayer();
        let t;
        const o = this.getModalByDOMNode(e.owner);
        o
          ? (!o.children && (o.children = []),
            (t = o.children.indexOf(e)),
            -1 === t
              ? o.children.unshift(e)
              : 0 < t && (o.children.splice(t, 1), o.children.unshift(e)),
            this._forceShowModal(o))
          : ((t = this.eligibleModalQueue.indexOf(e)),
            -1 === t
              ? this.eligibleModalQueue.unshift(e)
              : 0 < t &&
                (this.eligibleModalQueue.splice(t, 1),
                this.eligibleModalQueue.unshift(e)));
        const a = this.getDOMNode(e);
        for (let t = 0; t < this.layer.children.length; t++)
          if (this.layer.children[t] === a) return;
        this.styleDOMNode(a),
          this.layer.appendChild(a),
          a.dispatchEvent(new Event('modalShow'));
      }
      removeModal(e, t) {
        let o = !1,
          a;
        if (!e) return !1;
        const i = this.getModalByDOMNode(e.owner);
        if (i) {
          if (
            (i.children || (i.children = []),
            (a = i.children.indexOf(e)),
            0 < a)
          )
            (o = !0), i.children.splice(a, 1), this.deleteModal(e, t);
          else if (
            0 === a &&
            ((o = !0),
            i.children.splice(a, 1),
            this.deleteModal(e, t),
            i.children.length)
          )
            return this.forceShowModal(i.children[0]), o;
          if (this.isType(i) && (!i.children || !i.children.length))
            return this.removeModal(i), o;
        } else
          (a = this.eligibleModalQueue.indexOf(e)),
            -1 !== a &&
              (this.eligibleModalQueue.splice(a, 1),
              this.deleteModal(e, t),
              (o = !0));
        if (
          ((a = Array.prototype.slice
            .call(this.layer.children)
            .indexOf(e.domNode)),
          -1 !== a)
        )
          for (let e = this.layer.children.length - 1; e >= a; e--)
            this.layer.removeChild(this.layer.children[e]);
        return (
          0 === this.layer.children.length &&
            this.displayNextNotificationIfEligible(),
          o
        );
      }
      remove(e, t) {
        return this.removeModal(e, t);
      }
      deleteModal(e, t) {
        return !!e && (t && t(e), e.onRemove && e.onRemove(), !0);
      }
      addGameDataBinding() {
        l.default.gameFlowBinding.addObserver(
          'v1/session',
          this,
          this.gameflowSessionHandler.bind(this),
        );
      }
      gameflowSessionHandler(e) {
        if (e) {
          const t = e.gameClient.running;
          (this.gameflowModalLock = t),
            t || this.displayNextNotificationIfEligible();
        } else this.gameflowModalLock = !1;
      }
      addLockAndLoadListeners() {
        const e = (0, r.getProvider)().get('rcp-fe-lol-lock-and-load');
        (this.lockAndLoadLock = e.getLockState()),
          e.addEventListener('lock', () => {
            this.lockAndLoadLock = !0;
          }),
          e.addEventListener('unlock', () => {
            (this.lockAndLoadLock = !1),
              this.displayNextNotificationIfEligible();
          });
      }
      prependModal(e) {
        const t = this._showModalWithParentIfParentExists(e);
        return t
          ? t
          : (-1 === this.eligibleModalQueue.indexOf(e) &&
              (this.eligibleModalQueue.splice(1, 0, e),
              this.displayNextNotificationIfEligible()),
            e);
      }
      appendModal(e) {
        const t = this._showModalWithParentIfParentExists(e);
        if (t) return t;
        const o = this.eligibleModalQueue.indexOf(e);
        return (
          -1 === o &&
            (this.eligibleModalQueue.push(e),
            this.displayNextNotificationIfEligible()),
          e
        );
      }
      _showModalWithParentIfParentExists(e) {
        const t = this.getModalByDOMNode(e.owner);
        return (
          !!t &&
          (t.children || (t.children = []),
          -1 === t.children.indexOf(e) &&
            (t.children.push(e),
            1 === t.children.length &&
              this.isModalVisible(t) &&
              this.forceShowModal(e)),
          e)
        );
      }
      shouldShowModal(e) {
        const t = this.gameflowModalLock || this.lockAndLoadLock;
        return (e && e.show) || !t;
      }
      displayNextNotificationIfEligible() {
        const e = this.eligibleModalQueue.length;
        for (let t = 0; t < e; t++) {
          const e = this.eligibleModalQueue[t];
          if (this.shouldShowModal(e)) return this.showModal(e);
        }
        this.hideLayer();
      }
      handleNotification(e) {
        return (
          this.initializeDomNodes(e),
          e && e.show
            ? this.forceShowModal(e)
            : e && e.prepend
            ? this.prependModal(e)
            : this.appendModal(e)
        );
      }
      isType(e) {
        return 'string' == typeof e ? this.type === e : this.type === e.type;
      }
    })();
  },
  function (e, t) {
    'use strict';
    function o(e = '', t = 'h6') {
      const o = l.createElement(t),
        i = l.createTextNode(e);
      return o.appendChild(i), o;
    }
    function i(e) {
      return e instanceof HTMLElement;
    }
    function a(e = '') {
      const t = l.createElement('p');
      return (
        'string' == typeof e ? (t.innerHTML = e) : i(e) && t.appendChild(e), t
      );
    }
    function n(e = '') {
      const t = l.createElement('hr');
      return (t.className = e), t;
    }
    function r(e, t = 'dialog-small', o = '') {
      if (e) {
        const i = l.createElement('lol-uikit-content-block');
        return (
          (i.className = o), i.setAttribute('type', t), i.appendChild(a(e)), i
        );
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t._createHeading = o),
      (t._createBody = a),
      (t._createDivider = n),
      (t.contentBlockDialogSimple = r);
    const l = window.testsSandboxDoc || window.document;
    t.default = {
      contentBlockNotification: function (e, t = '') {
        return r(e, 'notification', t);
      },
      contentBlockTooltipSystem: function (e, t = '') {
        return r(e, 'tooltip-system', t);
      },
      contentBlockTooltipAttention: function (e, t = '') {
        return r(e, 'attention', t);
      },
      contentBlockTooltip: function (e, t, i = 'tooltip-small', n = '') {
        const r = o(e, 'h6'),
          s = a(t),
          d = l.createElement('lol-uikit-content-block');
        return (
          (d.className = n),
          d.setAttribute('type', i),
          d.appendChild(r),
          d.appendChild(s),
          d
        );
      },
      contentBlockDialog: function (e, t, i = 'dialog-small', r = '') {
        const s = o(e, 'h4'),
          d = n('heading-spacer'),
          p = a(t),
          c = l.createElement('lol-uikit-content-block');
        return (
          (c.className = r),
          c.setAttribute('type', i),
          c.appendChild(s),
          c.appendChild(d),
          c.appendChild(p),
          c
        );
      },
      contentBlockDialogSimple: r,
      dialogButtonGroupSingleButton: function (e, t = 'button-ok') {
        const o = l.createElement('lol-uikit-flat-button-group');
        o.setAttribute('type', 'dialog-frame');
        const i = l.createElement('lol-uikit-flat-button');
        return (
          (i.className = t),
          i.setAttribute('tabindex', '0'),
          (i.innerText = e),
          o.appendChild(i),
          o
        );
      },
    };
  },
  function (e) {
    function t() {
      throw new Error('setTimeout has not been defined');
    }
    function o() {
      throw new Error('clearTimeout has not been defined');
    }
    function a(e) {
      if (p === setTimeout) return setTimeout(e, 0);
      if ((p === t || !p) && setTimeout)
        return (p = setTimeout), setTimeout(e, 0);
      try {
        return p(e, 0);
      } catch (t) {
        try {
          return p.call(null, e, 0);
        } catch (t) {
          return p.call(this, e, 0);
        }
      }
    }
    function i(e) {
      if (c === clearTimeout) return clearTimeout(e);
      if ((c === o || !c) && clearTimeout)
        return (c = clearTimeout), clearTimeout(e);
      try {
        return c(e);
      } catch (t) {
        try {
          return c.call(null, e);
        } catch (t) {
          return c.call(this, e);
        }
      }
    }
    function n() {
      g &&
        h &&
        ((g = !1), h.length ? (u = h.concat(u)) : (m = -1), u.length && r());
    }
    function r() {
      if (!g) {
        var e = a(n);
        g = !0;
        for (var t = u.length; t; ) {
          for (h = u, u = []; ++m < t; ) h && h[m].run();
          (m = -1), (t = u.length);
        }
        (h = null), (g = !1), i(e);
      }
    }
    function l(e, t) {
      (this.fun = e), (this.array = t);
    }
    function s() {}
    var d = (e.exports = {}),
      p,
      c;
    (function () {
      try {
        p = 'function' == typeof setTimeout ? setTimeout : t;
      } catch (o) {
        p = t;
      }
      try {
        c = 'function' == typeof clearTimeout ? clearTimeout : o;
      } catch (t) {
        c = o;
      }
    })();
    var u = [],
      g = !1,
      m = -1,
      h;
    (d.nextTick = function (e) {
      var t = Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
      u.push(new l(e, t)), 1 !== u.length || g || a(r);
    }),
      (l.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (d.title = 'browser'),
      (d.browser = !0),
      (d.env = {}),
      (d.argv = []),
      (d.version = ''),
      (d.versions = {}),
      (d.on = s),
      (d.addListener = s),
      (d.once = s),
      (d.off = s),
      (d.removeListener = s),
      (d.removeAllListeners = s),
      (d.emit = s),
      (d.prependListener = s),
      (d.prependOnceListener = s),
      (d.listeners = function () {
        return [];
      }),
      (d.binding = function () {
        throw new Error('process.binding is not supported');
      }),
      (d.cwd = function () {
        return '/';
      }),
      (d.chdir = function () {
        throw new Error('process.chdir is not supported');
      }),
      (d.umask = function () {
        return 0;
      });
  },
  function (e, t, o) {
    var i = o(8),
      a = o(4).document,
      n = i(a) && i(a.createElement);
    e.exports = function (e) {
      return n ? a.createElement(e) : {};
    };
  },
  function (e, t, o) {
    var i = o(8);
    e.exports = function (e, t) {
      if (!i(e)) return e;
      var o, a;
      if (t && 'function' == typeof (o = e.toString) && !i((a = o.call(e))))
        return a;
      if ('function' == typeof (o = e.valueOf) && !i((a = o.call(e)))) return a;
      if (!t && 'function' == typeof (o = e.toString) && !i((a = o.call(e))))
        return a;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t, o) {
    var i = o(43);
    e.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return 'String' == i(e) ? e.split('') : Object(e);
        };
  },
  function (e) {
    var t = Math.ceil,
      o = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (0 < e ? o : t)(e);
    };
  },
  function (e, t, o) {
    var i = o(73)('keys'),
      a = o(53);
    e.exports = function (e) {
      return i[e] || (i[e] = a(e));
    };
  },
  function (e, t, o) {
    var i = o(2),
      a = o(4),
      n = '__core-js_shared__',
      r = a[n] || (a[n] = {});
    (e.exports = function (e, t) {
      return r[e] || (r[e] = t === void 0 ? {} : t);
    })('versions', []).push({
      version: i.version,
      mode: o(44) ? 'pure' : 'global',
      copyright: '\xA9 2019 Denis Pushkarev (zloirock.ru)',
    });
  },
  function (e) {
    e.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ];
  },
  function (e, t, o) {
    'use strict';
    var i = o(44),
      a = o(3),
      n = o(76),
      r = o(22),
      l = o(35),
      s = o(165),
      d = o(46),
      p = o(166),
      c = o(6)('iterator'),
      u = !([].keys && 'next' in [].keys()),
      g = 'keys',
      m = 'values',
      h = function () {
        return this;
      };
    e.exports = function (e, t, o, b, f, y, v) {
      s(o, t, b);
      var x = function (e) {
          return !u && e in _
            ? _[e]
            : e === g
            ? function () {
                return new o(this, e);
              }
            : e === m
            ? function () {
                return new o(this, e);
              }
            : function () {
                return new o(this, e);
              };
        },
        k = t + ' Iterator',
        A = f == m,
        w = !1,
        _ = e.prototype,
        E = _[c] || _['@@iterator'] || (f && _[f]),
        C = E || x(f),
        S = f ? (A ? x('entries') : C) : void 0,
        T = 'Array' == t ? _.entries || E : E,
        L,
        M,
        N;
      if (
        (T &&
          ((N = p(T.call(new e()))),
          N !== Object.prototype &&
            N.next &&
            (d(N, k, !0), !i && 'function' != typeof N[c] && r(N, c, h))),
        A &&
          E &&
          E.name !== m &&
          ((w = !0),
          (C = function () {
            return E.call(this);
          })),
        (!i || v) && (u || w || !_[c]) && r(_, c, C),
        (l[t] = C),
        (l[k] = h),
        f)
      )
        if (((L = { values: A ? C : x(m), keys: y ? C : x(g), entries: S }), v))
          for (M in L) M in _ || n(_, M, L[M]);
        else a(a.P + a.F * (u || w), t, L);
      return L;
    };
  },
  function (e, t, o) {
    e.exports = o(22);
  },
  function (e, t, o) {
    var i = o(54),
      a = o(6)('iterator'),
      n = o(35);
    e.exports = o(2).getIteratorMethod = function (e) {
      if (e != void 0) return e[a] || e['@@iterator'] || n[i(e)];
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      var t, o;
      (this.promise = new e(function (e, i) {
        if (t !== void 0 || o !== void 0)
          throw TypeError('Bad Promise constructor');
        (t = e), (o = i);
      })),
        (this.resolve = a(t)),
        (this.reject = a(o));
    }
    var a = o(40);
    e.exports.f = function (e) {
      return new i(e);
    };
  },
  function (e, t, o) {
    'use strict';
    var i = o(4),
      a = o(3),
      n = o(38),
      r = o(23),
      l = o(22),
      s = o(56),
      d = o(37),
      p = o(55),
      c = o(8),
      u = o(46),
      g = o(14).f,
      m = o(80)(0),
      h = o(17);
    e.exports = function (e, t, o, b, f, y) {
      var v = i[e],
        x = v,
        k = f ? 'set' : 'add',
        A = x && x.prototype,
        w = {};
      return (
        h &&
        'function' == typeof x &&
        (y ||
          (A.forEach &&
            !r(function () {
              new x().entries().next();
            })))
          ? ((x = t(function (t, o) {
              p(t, x, e, '_c'),
                (t._c = new v()),
                void 0 != o && d(o, f, t[k], t);
            })),
            m(
              [
                'add',
                'clear',
                'delete',
                'forEach',
                'get',
                'has',
                'set',
                'keys',
                'values',
                'entries',
                'toJSON',
              ],
              function (e) {
                var t = 'add' == e || 'set' == e;
                e in A &&
                  !(y && 'clear' == e) &&
                  l(x.prototype, e, function (o, i) {
                    if ((p(this, x, e), t || !y || c(o))) {
                      var a = this._c[e](0 === o ? 0 : o, i);
                      return t ? this : a;
                    }
                  });
              },
            ),
            y ||
              g(x.prototype, 'size', {
                get: function () {
                  return this._c.size;
                },
              }))
          : ((x = b.getConstructor(t, e, f, k)),
            s(x.prototype, o),
            (n.NEED = !0)),
        u(x, e),
        (w[e] = x),
        a(a.G + a.W + a.F, w),
        y || b.setStrong(x, e, f),
        x
      );
    };
  },
  function (e, t, o) {
    var i = o(21),
      a = o(70),
      n = o(47),
      r = o(52),
      l = o(177);
    e.exports = function (e, t) {
      var o = 1 == e,
        s = 4 == e,
        d = 6 == e,
        p = t || l;
      return function (t, l, c) {
        for (
          var u = n(t),
            g = a(u),
            m = i(l, c, 3),
            h = r(g.length),
            b = 0,
            f = o ? p(t, h) : 2 == e ? p(t, 0) : void 0,
            y,
            v;
          h > b;
          b++
        )
          if ((5 == e || d || b in g) && ((y = g[b]), (v = m(y, b, u)), e))
            if (o) f[b] = v;
            else if (v)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return y;
                case 6:
                  return b;
                case 2:
                  f.push(y);
              }
            else if (s) return !1;
        return d ? -1 : 3 == e || s ? s : f;
      };
    };
  },
  function (e, t, o) {
    'use strict';
    var i = o(3);
    e.exports = function (e) {
      i(i.S, e, {
        of: function () {
          for (var e = arguments.length, t = Array(e); e--; )
            t[e] = arguments[e];
          return new this(t);
        },
      });
    };
  },
  function (e, t, o) {
    'use strict';
    var i = o(3),
      a = o(40),
      r = o(21),
      l = o(37);
    e.exports = function (e) {
      i(i.S, e, {
        from: function (e) {
          var t = arguments[1],
            o,
            i,
            s,
            n;
          return (a(this), (o = void 0 !== t), o && a(t), void 0 == e)
            ? new this()
            : ((i = []),
              o
                ? ((s = 0),
                  (n = r(t, arguments[2], 2)),
                  l(e, !1, function (e) {
                    i.push(n(e, s++));
                  }))
                : l(e, !1, i.push, i),
              new this(i));
        },
      });
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      const t = new g.default();
      this.removedElements.forEach((e) => {
        const o = this.elementStates.get(e);
        o && o.commentNode ? t.set(o.commentNode, e) : t.set({}, e);
      });
      for (let o = 0; o < e.length; o++) {
        const i = e[o],
          a = t.get(i);
        a && (t.delete(i), (e[o] = a));
      }
      return t;
    }
    function n(e, t) {
      const o = this.elementStates.get(e);
      t
        ? (e.style.display = o.initialDisplay)
        : ((o.initialDisplay = '' === e.style.display ? null : e.style.display),
          (e.style.display = 'none'));
    }
    function r(e, t) {
      const o = this.elementStates.get(e);
      t
        ? ((e.style.opacity = o.initialOpacity),
          (e.style.pointerEvents = o.initialPointerEvents))
        : ((o.initialOpacity = '' === e.style.opacity ? null : e.style.opacity),
          (o.initialPointerEvents =
            '' === e.style.pointerEvents ? null : e.style.pointerEvents),
          (e.style.opacity = '0'),
          (e.style.pointerEvents = 'none'));
    }
    function l(e, t) {
      const o = this.elementStates.get(e);
      let i = o.commentNode;
      const a = e.parentNode || (i && i.parentNode) || o.parent;
      if (((o.parent = a), t)) {
        if (!i) return;
        this.removedElements.splice(this.removedElements.indexOf(e), 1),
          a.insertBefore(e, i),
          a.removeChild(i),
          (o.commentNode = void 0);
      } else {
        if (!i) {
          let t = this.removedElements.indexOf(e);
          (t = -1 === t ? this.removedElements.indexOf(void 0) : t),
            (t = -1 === t ? this.removedElements.length : t),
            (this.removedElements[t] = e),
            (i = document.createComment(this.nodeId + '-' + t)),
            (o.commentNode = i);
        }
        a !== i.parentNode && (a.insertBefore(i, e), a.removeChild(e));
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var s = o(193),
      d = i(s),
      p = o(59),
      c = i(p),
      u = o(13),
      g = i(u),
      m = o(25),
      h = i(m),
      b = o(0);
    let f = 1;
    const y = 1,
      v = function () {
        let e = [];
        this.matchGroups.forEach(function (t) {
          e = e.concat((0, h.default)(t.childNodes));
        });
        const t = a.call(this, e);
        return (
          (e = e.concat((0, h.default)(t.values()))),
          e.filter(function (e) {
            return e.nodeType === y;
          })
        );
      },
      x = function (e) {
        this.cachedValue === e || ((this.cachedValue = e), this.updateCase());
      },
      k = function e(t, o = this.isVisible(t), i) {
        i = i || t.getAttribute('visibility') || this.defaultVisibility;
        let a = this.elementStates.get(t);
        if (!(a && a.method === i && a.visible === o))
          return (
            a ||
              ((a = { method: i, visible: o, parent: t.parentNode }),
              this.elementStates.set(t, a)),
            'hidden' === i
              ? n.call(this, t, o)
              : 'invisible' === i
              ? r.call(this, t, o)
              : 'removed' === i
              ? l.call(this, t, o)
              : void 0,
            (a.method === i || a.visible || e.call(this, t, !0, a.method),
            (a.visible = o),
            o)
          );
      };
    class A extends b.webComponents.ShadowElement {
      templateMarkup() {
        return o(204);
      }
      setAttribute(e, t) {
        const o = this.getAttribute(e);
        super.setAttribute(e, t), this.attributeChangedCallback(e, o, t);
      }
      constructor() {
        super(),
          (this.matchString =
            this.getAttribute('match-string') || this.matchString || 'value'),
          this.setMatchNumber(),
          (this.matchGroups = [this]),
          (this.defaultVisibility =
            this.getAttribute('default-visibility') ||
            this.defaultVisibility ||
            'hidden'),
          (this.overlapped = this.overlapped || !0),
          (this.elementStates = new c.default()),
          (this.removedElements = []),
          (this.nodeId = ++f),
          (this.visibleNodesChangedHandlers = []),
          x.call(this, this.getAttribute(this.matchString));
      }
      connectedCallback() {
        super.connectedCallback(),
          x.call(this, this.getAttribute(this.matchString));
      }
      attributeChangedCallback(e, t, o) {
        super.attributeChangedCallback(e, t, o);
        t === o ||
          (e === this.matchString
            ? x.call(this, o)
            : 'match-string' === e
            ? ((this.matchString = o), this.updateCase())
            : 'match-number' === e
            ? (this.setMatchNumber(o), this.updateCase())
            : 'default-visibility' == e &&
              ((this.defaultVisibility = o), this.updateCase()));
      }
      addWatchedDOMNode(e) {
        -1 !== this.matchGroups.indexOf(e) ||
          (this.matchGroups.push(e), this.updateCase());
      }
      removeWatchedDOMNode(e, t = !1) {
        const o = this.matchGroups.indexOf(e);
        if (-1 !== o) {
          this.matchGroups.splice(o, 1);
          for (let o = 0; o < e.childNodes.length; o++) {
            const i = e.childNodes[o],
              a = this.elementStates.get(i);
            !a || a.visible || t || k.call(this, i, !0, a.method),
              this.elementStates.delete(i);
          }
        }
      }
      getVisibleNodes(e = this.cachedValue, t = v.call(this)) {
        return (
          (t = t.filter((t) => this.isVisible(t, e))),
          t.filter((e, t) => t < this.matchNumber)
        );
      }
      onVisibleNodesChanged() {
        const e = this.visibleNodesChangedHandlers.slice(0);
        for (let t = 0; t < e.length; t++) e[t]();
      }
      subscribeVisibleNodesChanged(e) {
        -1 === this.visibleNodesChangedHandlers.indexOf(e) &&
          this.visibleNodesChangedHandlers.push(e);
      }
      unsubscribeVisibleNodesChanged(e) {
        const t = this.visibleNodesChangedHandlers.indexOf(e);
        -1 !== t && this.visibleNodesChangedHandlers.splice(t, 1);
      }
      updateCase() {
        const e = v.call(this),
          t = this.getVisibleNodes(this.cachedValue, e),
          o = b.Lodash.difference(e, t);
        if (this.overlapped) {
          for (let e = 0; e < t.length; e++) k.call(this, t[e], !0);
          for (let e = 0; e < o.length; e++) k.call(this, o[e], !1);
        } else {
          for (let e = 0; e < o.length; e++) k.call(this, o[e], !1);
          for (let e = 0; e < t.length; e++) k.call(this, t[e], !0);
        }
        this.onVisibleNodesChanged();
      }
      matches(e) {
        return (
          !(e.nodeType !== y) && e.hasAttribute('visible-' + this.matchString)
        );
      }
      isVisible(e, t = this.cachedValue) {
        const o = e.getAttribute('visible-' + this.matchString);
        if ('*' === o) return !0;
        else {
          const e = o && o.split(',');
          return e && -1 !== e.indexOf(t);
        }
      }
      setMatchNumber(e) {
        if (e === void 0 || null === e) {
          if (this.matchNumber !== void 0) return;
          (e = this.getAttribute('match-number')),
            null === e && (e = d.default);
        }
        this.matchNumber =
          'all' === e
            ? d.default
            : 'none' === e
            ? 0
            : 'any' === e
            ? 1
            : parseInt(e);
      }
    }
    (A.tagName = 'uikit-switch'), (t.default = A);
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.VideoTransitionMethods =
        t.VideoReadyStates =
        t.VideoPlaybackStates =
          void 0);
    var a = o(5),
      n = i(a),
      r = o(13),
      l = i(r),
      s = o(0),
      d = o(112),
      p = i(d),
      c = o(113),
      u = i(c);
    const g = ['autoplay', 'src', 'loop'],
      m = (t.VideoPlaybackStates = {
        Playing: 'Playing',
        Paused: 'Paused',
        Ended: 'Ended',
        Error: 'Error',
      }),
      h = (t.VideoReadyStates = {
        HAVE_NOTHING: 0,
        HAVE_METADATA: 1,
        HAVE_CURRENT_DATA: 2,
        HAVE_FUTURE_DATA: 3,
        HAVE_ENOUGH_DATA: 4,
      }),
      b = (t.VideoTransitionMethods = {
        Playing: 'play',
        Paused: 'pause',
        Ended: 'play',
        Unloading: 'unload',
        Preloading: 'preload',
      }),
      f = new l.default();
    class y extends s.webComponents.ShadowElement {
      templateMarkup() {
        return o(206);
      }
      static get observedAttributes() {
        return ['src', 'cache-name', 'loop', 'preload', 'autoplay'];
      }
      constructor() {
        super(),
          (this.stateChangedHandlers = []),
          (this.playbackState = m.Paused),
          (this.readyState = h.HAVE_NOTHING);
      }
      connectedCallback() {
        if (
          (super.connectedCallback(),
          this.hasAttribute('preload') && this.createVideoElement(),
          !!this._videoEl)
        )
          for (let e = 0; e < this.stateChangedHandlers.length; e++) {
            const t = f.get(this.stateChangedHandlers[e]);
            if (this.isPlaybackState(t)) {
              if (t === m.Playing) return void this._videoEl.play();
              break;
            }
          }
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this.unload(),
          this.playbackState !== m.Ended &&
            this.playbackState !== m.Paused &&
            this._changePlaybackState(m.Paused);
      }
      attributeChangedCallback(e, t, o) {
        super.attributeChangedCallback(e, t, o),
          ('preload' === e ||
            ('src' === e && this.srcResolved) ||
            (this._videoEl && -1 !== g.indexOf(e))) &&
            this.setVideoAttributes();
      }
      addStateChangedHandler(e, t = void 0) {
        -1 === this.stateChangedHandlers.indexOf(e)
          ? (this.stateChangedHandlers.push(e), f.set(e, t))
          : console.log('UIKITVIDEO: handler already added');
      }
      removeStateChangedHandler(e) {
        const t = this.stateChangedHandlers.indexOf(e);
        -1 !== t && (this.stateChangedHandlers.splice(t, 1), f.delete(e));
      }
      when(e, t, o) {
        const i = {};
        if (
          (t ||
            o ||
            (i.promise = new n.default(function (e, i) {
              (t = e), (o = i);
            })),
          this.matches(
            this.isPlaybackState(e) ? this.playbackState : this.readyState,
            e,
          ))
        )
          return t(), (i.cancel = function () {}), i;
        const a = (i, n, r) => {
          this.matches(i, e)
            ? (this.removeStateChangedHandler(a), t())
            : i === m.Error && (this.removeStateChangedHandler(a), o && o(r));
        };
        return (
          this.addStateChangedHandler(a, e),
          (i.cancel = () => {
            this.removeStateChangedHandler(a);
          }),
          i
        );
      }
      whenEager(e) {
        let t;
        const o = new p.default().then((o, i) => {
          t = this.when(e, o, i).cancel;
        });
        return (o.onCancel = t), o;
      }
      matches(e, t) {
        const o = this.isPlaybackState(e),
          i = this.isPlaybackState(t);
        return (
          !(o !== i) &&
          (o
            ? e === t
            : e === h.HAVE_NOTHING || t === h.HAVE_NOTHING
            ? e === t
            : e >= t)
        );
      }
      _changePlaybackState(e) {
        let t;
        if (
          e === m.Error &&
          ((t = { type: arguments[1], data: arguments[2] }),
          t.data.target && t.data.target.error)
        ) {
          if (
            4 === t.data.target.error.code &&
            '' === t.data.target.getAttribute('src')
          )
            return;
          if (2 === t.data.target.error.code) {
            const e = this._videoEl.currentTime;
            return (
              this._videoEl.load(),
              (this._videoEl.currentTime = e),
              void (this.playbackState === m.Playing && this._videoEl.play())
            );
          }
        }
        this._changeState(e, t);
      }
      _changeReadinessState() {
        this._changeState();
      }
      _changeState(e = this.playbackState, t = void 0) {
        const o = this.playbackState,
          i = this.readyState,
          a = (this._videoEl && this._videoEl.readyState) || h.HAVE_NOTHING;
        (this.readyState = a),
          (this.playbackState = e),
          a !== i && this._updateStateChangedHandlers(a, i),
          e !== o && this._updateStateChangedHandlers(e, o, t);
      }
      _updateStateChangedHandlers() {
        const e = this.stateChangedHandlers.slice(0);
        for (let t = 0; t < e.length; t++) e[t].apply(this, arguments);
      }
      preload(e = void 0, t = void 0) {
        let o = !1;
        const i = !1;
        return (
          e ||
            (o = new n.default(function (o, i) {
              (e = o), (t = i);
            })),
          p.default.chain.call(
            this,
            new p.default(() => this.createVideoElement())
              .then(
                () => (
                  (this._videoEl.playbackState !== m.Paused ||
                    0 !== this._videoEl.currentTime) &&
                    ((this._videoEl.currentTime = 0), this._videoEl.pause()),
                  this.playbackState === m.Ended &&
                    this._changePlaybackState(m.Paused),
                  this.whenEager(m.Paused)
                ),
              )
              .then(() =>
                this.readyState === h.HAVE_ENOUGH_DATA
                  ? void 0
                  : this.whenEager(h.HAVE_ENOUGH_DATA),
              )
              .then(() => {
                e();
              }),
          ),
          o
        );
      }
      playWithEndedCallback(e) {
        return this.play(void 0, void 0, e);
      }
      play(e = void 0, t = void 0, o = void 0) {
        let i;
        const a = !1;
        return (
          e ||
            (i = new n.default(function (o, i) {
              (e = o), (t = i);
            })),
          p.default.chain.call(
            this,
            new p.default(() => this.createVideoElement())
              .then((e, t) => {
                if (
                  (void 0 !== o && (this._videoEl.onended = o),
                  this.playbackState === m.Playing)
                )
                  return void e();
                const i = this._videoEl.play() || n.default.resolve();
                i.then(e).catch(t);
              })
              .then(() => this.whenEager(m.Playing))
              .then(() => {
                e();
              }),
          ),
          i
        );
      }
      playWithoutStopping(e = void 0) {
        const t = (e) =>
          !this._videoEl ||
          (e === m.Ended && this._videoEl.hasAttribute('loop'))
            ? void this.removeStateChangedHandler(t)
            : void (e === m.Paused && this.play());
        this.addStateChangedHandler(t), this.play(e);
      }
      pause(e = void 0, t = void 0) {
        let o;
        const i = !1;
        return (
          e ||
            (o = new n.default(function (o, i) {
              (e = o), (t = i);
            })),
          p.default.chain.call(
            this,
            new p.default(() => {
              if (this.playbackState === m.Paused || !this._videoEl);
              else if (this.playbackState === m.Ended)
                this._changePlaybackState(m.Paused);
              else return this._videoEl.pause(), this.whenEager(m.Paused);
            }).then(function () {
              e();
            }),
          ),
          o
        );
      }
      unload(e = void 0) {
        if (
          (this.statePromise &&
            (this.statePromise.cancel(), (this.statePromise = void 0)),
          this._videoEl)
        ) {
          this._videoEl.setAttribute('src', '');
          const e = this._videoEl;
          delete this._videoEl,
            (this.statePromise = void 0),
            (this.srcResolved = void 0);
          const t = this.getVideoCache();
          t.release(e), this._changeState(m.Paused);
        }
        return e ? void e() : n.default.resolve();
      }
      getVideoCache() {
        let e = u.default;
        const t = this.getAttribute('cache-name');
        return t && (e = e.createCache(t)), e;
      }
      isPlaybackState(e) {
        return 'string' == typeof e;
      }
      onPlaying() {
        this.hasAttribute('loop') &&
          this.playbackState === m.Playing &&
          this._changePlaybackState(m.Ended),
          this._changePlaybackState(m.Playing);
      }
      hasSrc() {
        return this.hasAttribute('src') && '' !== this.getAttribute('src');
      }
      createVideoElement() {
        if (this._videoEl) return this._videoEl;
        if (!this.hasSrc())
          return this.updateSrcPromise().then(
            this.createVideoElement.bind(this),
          );
        const e = this.getVideoCache(),
          t = this.getAttribute('src'),
          o = e.acquire(t, (e) => {
            e === this._videoEl && this.unload();
          });
        (o.onerror = this._changePlaybackState.bind(this, m.Error, 'onerror')),
          (o.onplaying = this.onPlaying.bind(this)),
          (o.onpause = this._changePlaybackState.bind(this, m.Paused)),
          (o.onended = this._changePlaybackState.bind(this, m.Ended));
        const i = this._changeReadinessState.bind(this);
        (o.onloadedmetadata = i),
          (o.oncanplay = i),
          (o.oncanplaythrough = i),
          (this._videoEl = o),
          this.setVideoAttributes();
        for (let e = this.children.length - 1; 0 <= e; e--)
          this.children[e] !== o && this.removeChild(this.children[e]);
        1 !== this.children.length && this.appendChild(o),
          this.updateSrcPromise();
        let a;
        return (
          o.error && o.load(),
          (a = o.paused ? m.Paused : m.Playing),
          this._changePlaybackState(a),
          this._videoEl
        );
      }
      setVideoAttributes() {
        if (!this._videoEl) return void this.createVideoElement();
        let e = !1;
        for (let t = 0; t < g.length; t++) {
          const o = g[t],
            i = this._videoEl.getAttribute(o),
            a = this.getAttribute(o);
          i !== a &&
            ('src' === o ? (e = !0) : this._videoEl.setAttribute(o, a));
        }
        e && (this.unload(), this.hasSrc() && this.createVideoElement());
      }
      updateSrcPromise() {
        const e = this.getAttribute('src');
        if (!e)
          this.srcResolved ||
            ((this.srcPromise = new p.default()),
            (this.srcPromise = this.srcPromise.then((e) => {
              this.srcResolved = e;
            })));
        else if (this.srcResolved) {
          const e = this.srcResolved;
          (this.srcResolved = void 0), e();
        }
        return this.srcPromise;
      }
      static detect(e) {
        return e.play && e.pause && e.unload;
      }
    }
    (y.tagName = 'uikit-video'), (t.default = y);
  },
  function (e) {
    e.exports =
      '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(354),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = o(12);
    t.default = new (class {
      assign(e, t, o, i = {}) {
        (i.ComponentFactory = i.ComponentFactory || n),
          this.unassign(e),
          a.default.registerTarget(e, t, o, i);
      }
      show(e) {
        a.default.showTooltip(e);
      }
      hide(e) {
        a.default.hideTooltip(e);
      }
      enable(e) {
        a.default.enableTooltip(e);
      }
      disable(e) {
        a.default.disableTooltip(e);
      }
      unassign(e) {
        a.default.unregisterTarget(e);
      }
      hideAll() {
        a.default.hideLayer();
      }
    })();
  },
  function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.point = function (e, t) {
        return { x: e, y: t, left: e, top: t };
      }),
      (t.rect = function (e, t, o, i) {
        return {
          x: e,
          y: t,
          w: o,
          h: i,
          width: o,
          height: i,
          top: t,
          left: e,
          right: e + o,
          bottom: t + i,
        };
      });
    const o = (t.top = 'top'),
      i = (t.bottom = 'bottom'),
      a = (t.left = 'left'),
      n = (t.right = 'right'),
      r = (t.center = 'center'),
      l = (t.opposites = { [a]: n, [n]: a, [o]: i, [i]: o });
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(13),
      n = i(a),
      r = o(0),
      l = o(49),
      s = i(l),
      d = o(90),
      p = i(d);
    const c = 100;
    t.default = new (class {
      constructor() {
        this._targets = new n.default();
      }
      _checkTargetPositions() {
        return 0 === this._targets.size
          ? void 0
          : p.default.getScreenInfo().then((e) => {
              this._targets.forEach((t, o) => {
                let i = s.default.elementRect(o);
                0 === i.width &&
                  0 === i.height &&
                  0 === i.top &&
                  0 === i.left &&
                  (i = !1);
                const a = 'hidden' !== window.getComputedStyle(o).visibility;
                (a &&
                  (r.Lodash.isEqual(i, t.position) ||
                    (e.zoomScale !== this._zoomScale && !1 !== i))) ||
                  t.callback(o, i),
                  (t.position = i);
              }),
                (this._zoomScale = e.zoomScale),
                (this.checkerLoop = window.setTimeout(
                  () => this._checkTargetPositions(),
                  c,
                ));
            });
      }
      addTarget(e, t) {
        return p.default.getScreenInfo().then((o) => {
          e.jquery && (e = e[0]),
            (this._zoomScale = o.zoomScale),
            this._targets.set(e, {
              callback: t,
              position: s.default.elementRect(e),
            }),
            1 === this._targets.size &&
              (this.checkerLoop = window.setTimeout(
                () => this._checkTargetPositions(),
                c,
              ));
        });
      }
      removeTarget(e) {
        this._targets.delete(e);
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.Screen = void 0);
    var a = o(91),
      n = i(a),
      r = o(5),
      l = i(r),
      s = o(61),
      d = i(s);
    class p {
      constructor() {
        const e = 'undefined' == typeof window.riotInvoke;
        this.getDataFn = e ? this.chromeScreenData : this.clientScreenData;
      }
      clientScreenData(e) {
        return new l.default(function (t, o) {
          window.riotInvoke({
            request: (0, n.default)({ name: e, params: [] }),
            onSuccess(e) {
              try {
                var i = JSON.parse(e);
                const o = i.result;
                t(JSON.parse(o));
              } catch (e) {
                o(e);
              }
            },
          });
        });
      }
      chromeScreenData(e) {
        if ('Window.ScreenData' === e)
          return l.default.resolve({
            screenX: window.screenX,
            screenY: window.screenY,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            screenAvailWidth: window.screen.availWidth,
            screenAvailHeight: window.screen.availHeight,
            screenAvailLeft: window.screen.availLeft,
            screenAvailTop: window.screen.availTop,
            windowWidth: window.outerWidth,
            windowHeight: window.outerHeight,
            windowActivated: !document.hidden,
            windowMinimized: document.hidden,
            zoomScale: window.devicePixelRatio,
          });
        if ('Window.GetValidWindowSizes' === e)
          return l.default.resolve([
            {
              width: window.screen.width,
              height: window.screen.height,
              selected: !0,
              scale: window.devicePixelRatio,
            },
          ]);
        throw 'Invalid invocation name';
      }
      getScreenInfo() {
        return this.getDataFn('Window.ScreenData');
      }
      getScreenRect() {
        return this.getScreenInfo().then(
          (e) => new d.default(0, 0, e.screenWidth, e.screenHeight),
        );
      }
      getScreenAvailableRect() {
        return this.getScreenInfo().then(
          (e) =>
            new d.default(
              e.screenAvailLeft,
              e.screenAvailTop,
              e.screenAvailWidth,
              e.screenAvailHeight,
            ),
        );
      }
      getWindowRect() {
        return this.getScreenInfo().then(
          (e) =>
            new d.default(e.screenX, e.screenY, e.windowWidth, e.windowHeight),
        );
      }
      getValidWindowSizes() {
        return this.getDataFn('Window.GetValidWindowSizes');
      }
    }
    (t.Screen = p), (t.default = new p());
  },
  function (e, t, o) {
    e.exports = { default: o(356), __esModule: !0 };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var a = o(372),
      n = i(a),
      r = o(63),
      l = i(r);
    t.default = (function () {
      function e(e, t) {
        var o = [],
          i = !0,
          a = !1,
          n = void 0;
        try {
          for (
            var r = (0, l.default)(e), s;
            !(i = (s = r.next()).done) &&
            (o.push(s.value), !(t && o.length === t));
            i = !0
          );
        } catch (e) {
          (a = !0), (n = e);
        } finally {
          try {
            !i && r['return'] && r['return']();
          } finally {
            if (a) throw n;
          }
        }
        return o;
      }
      return function (t, o) {
        if (Array.isArray(t)) return t;
        if ((0, n.default)(Object(t))) return e(t, o);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      };
    })();
  },
  function (e, t, o) {
    var i = o(4),
      a = o(2),
      n = o(44),
      r = o(136),
      l = o(14).f;
    e.exports = function (e) {
      var t = a.Symbol || (a.Symbol = n ? {} : i.Symbol || {});
      '_' == e.charAt(0) || e in t || l(t, e, { value: r.f(e) });
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a() {
      b ||
        (h.keys().forEach((e) => {
          n(h(e).default);
        }),
        (b = !0));
    }
    function n(e) {
      d.default.setFactory(e.registerAs, e.create);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = o(148),
      l = i(r),
      s = o(12),
      d = i(s),
      p = o(0);
    const c = (0, p.debug)('lol-uikit:warn');
    c.log = p.debug.consoleWrap('warn');
    const u = p.webComponents.registerCustomElementV1,
      g = [
        'shadow-element.js',
        'subdoc-proxy.js',
        'video-handler.js',
        'polygon-generator.js',
      ],
      m = o(155),
      h = o(382);
    let b = !1;
    t.default = {
      registerCustomElements: function (e = document) {
        if (e.isElementsRegistered) return;
        const t = function (e) {
          if (e.tagName)
            try {
              customElements.define(e.tagName, {
                prototype: (0, l.default)(e.prototype),
              });
            } catch (t) {}
        };
        m.keys().forEach((e) => {
          if (!g.find((t) => e.includes(t))) {
            const o = m(e).default;
            'function' == typeof o.prototype.createdCallback
              ? t(o)
              : 'function' == typeof o.prototype.connectedCallback && u(o);
          }
        }),
          (e.isElementsRegistered = !0);
      },
      registerComponents: a,
    };
  },
  function (e, t, o) {
    e.exports =
      !o(17) &&
      !o(23)(function () {
        return (
          7 !=
          Object.defineProperty(o(68)('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, o) {
    var a = o(24),
      n = o(28),
      r = o(152)(!1),
      i = o(72)('IE_PROTO');
    e.exports = function (e, t) {
      var o = n(e),
        l = 0,
        s = [],
        d;
      for (d in o) d != i && a(o, d) && s.push(d);
      for (; t.length > l; ) a(o, (d = t[l++])) && (~r(s, d) || s.push(d));
      return s;
    };
  },
  function (e, t, o) {
    var i = o(4).document;
    e.exports = i && i.documentElement;
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(5),
      n = i(a),
      r = o(29),
      l = o(30),
      s = o(31),
      d = o(0),
      p = o(9),
      c = i(p),
      u = o(7),
      g = i(u);
    const m = [
        {
          transform: 'translateZ(0) rotateX(-90deg) scale(.94)',
          opacity: 0,
          offset: 0,
        },
        {
          transform: 'translateZ(0) rotateX(-90deg) scale(.94)',
          opacity: 1,
          offset: 0.001,
        },
        {
          transform: 'translateZ(0) rotateX(0deg) scale(.94)',
          opacity: 1,
          offset: 1,
        },
      ],
      h = {
        duration: 333,
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
        iterations: 1,
      },
      b = [{ transform: 'scale(.94)' }, { transform: 'scale(1)' }],
      f = { duration: 133, easing: 'cubic-bezier(1,0,1,1)', iterations: 1 },
      y = [{ color: '#5b5a56' }, { color: '#f0e6d2' }],
      v = { duration: 500, easing: 'linear', iterations: 1 },
      x = [
        { textShadow: '0 0 4px 4px rgba(255, 255, 255, 1)', offset: 0 },
        { textShadow: '0 0 4px 4px rgba(255, 255, 255, .5)', offset: 0.78 },
        { textShadow: '0 0 4px 4px rgba(255, 255, 255, 0)', offset: 1 },
      ],
      k = { duration: 633, easing: 'linear', iterations: 1 },
      A = [
        {
          boxShadow:
            '0px 0px 5px 4px rgba(240, 230, 216, 0), 0px 0px 2px 1px rgba(240, 230, 216, 0) inset',
          offset: 0,
        },
        {
          boxShadow:
            '0px 0px 5px 4px rgba(240, 230, 216, 1), 0px 0px 2px 1px rgba(240, 230, 216, 1) inset',
          offset: 0.5,
        },
        {
          boxShadow:
            '0px 0px 5px 4px rgba(240, 230, 216, 0), 0px 0px 2px 1px rgba(240, 230, 216, 0) inset',
          offset: 1,
        },
      ],
      w = { duration: 633, easing: 'linear', iterations: 1 },
      _ = [
        {
          backgroundImage:
            'linear-gradient(to bottom, rgba(74,67,55,1) 0%, rgba(74,67,55,1) 27%, rgba(166,133,66,1) 100%)',
          opacity: 0,
          offset: 0,
        },
        {
          backgroundImage:
            'linear-gradient(to bottom, rgba(74,67,55,1) 0%, rgba(74,67,55,1) 27%, rgba(166,133,66,1) 100%)',
          opacity: 0,
          offset: 0.07,
        },
        {
          backgroundImage:
            'linear-gradient(to bottom, rgba(74,67,55,1) 0%, rgba(74,67,55,1) 27%, rgba(166,133,66,1) 100%)',
          opacity: 1,
          offset: 0.38,
        },
        {
          backgroundImage:
            'linear-gradient(to bottom, rgba(74,67,55,1) 0%, rgba(74,67,55,1) 27%, rgba(166,133,66,1) 100%)',
          opacity: 0,
          offset: 0.5,
        },
        {
          backgroundImage:
            'linear-gradient(to bottom, rgba(74,67,55,1) 0%, rgba(74,67,55,1) 27%, rgba(166,133,66,1) 100%)',
          opacity: 0,
          offset: 1,
        },
      ],
      E = { duration: 1333, easing: 'linear', iterations: 1 },
      C = [
        { opacity: 1, borderImageSlice: 1, offset: 0 },
        { opacity: 0, borderImageSlice: 1, offset: 0.53 },
        { opacity: 0, borderImageSlice: 1, offset: 1 },
      ],
      S = { duration: 933, easing: 'linear', iterations: 1 };
    class T extends d.webComponents.ShadowElement {
      templateMarkup() {
        return o(183);
      }
      stylesheetMarkup() {
        return o(184);
      }
      constructor() {
        super(),
          (this._hasPlayedIntro = !1),
          (this.mouseover = this.sendMouseEvent.bind(this, 'hover', 'hover')),
          (this.mouseout = this.sendMouseEvent.bind(this, 'out', 'idle')),
          (this.mousedown = (0, r.leftClickHandler)(
            this.sendMouseEvent.bind(this, 'down', 'down'),
          )),
          (this.click = (0, r.leftClickHandler)(
            this.sendMouseEvent.bind(this, 'click', 'click'),
          )),
          (this.onFocus = () => {
            this.setInteractionClass('hover');
          }),
          (this.onBlur = () => {
            this.setInteractionClass('idle');
          });
      }
      initIntroAnimation() {
        const e = (0, s.isAttrTruthy)(
          'intro-enabled',
          this.getAttribute('intro-enabled'),
        );
        !this.disabled && e && this.playIntro();
      }
      playIntro() {
        this._hasPlayedIntro ||
          (this.setInteractionClass('intro'),
          this.introAnimation().then(() => {
            this.setInteractionClass('idle');
          }),
          (this._hasPlayedIntro = !0));
      }
      initAnimation(e, t, o) {
        return function () {
          return new n.default(function (i) {
            e.animate(t, o).onfinish = function () {
              i();
            };
          });
        };
      }
      introAnimation() {
        const e = this.shadowRoot;
        return new n.default((t) => {
          const o = e.querySelector('.lol-uikit-flat-button');
          if (o) {
            const e = o.querySelector('.lol-uikit-flat-button-glow'),
              i = o.querySelector('.lol-uikit-flat-button-bg'),
              a = o.querySelector('.lol-uikit-flat-button-border-transition'),
              n = this.initAnimation(o, m, h),
              r = this.initAnimation(o, b, f),
              l = this.initAnimation(o, y, v),
              s = this.initAnimation(o, x, k),
              d = this.initAnimation(e, A, w),
              p = this.initAnimation(i, _, E),
              c = this.initAnimation(a, C, S);
            n().then(r),
              l(),
              s(),
              c(),
              d(),
              p().then(function () {
                t();
              });
          }
        });
      }
      _createSound(e) {
        return (0, l.createSound)('sfx-ui', e, { allowConcurrency: !1 });
      }
      addEventListeners() {
        const e = this.shadowRoot;
        e.addEventListener('mouseover', this.mouseover),
          e.addEventListener('mouseout', this.mouseout),
          e.addEventListener('mousedown', this.mousedown),
          e.addEventListener('click', this.click),
          this.addEventListener('focus', this.onFocus),
          this.addEventListener('blur', this.onBlur);
      }
      removeEventListeners() {
        const e = this.shadowRoot;
        e.removeEventListener('mouseover', this.mouseover),
          e.removeEventListener('mouseout', this.mouseout),
          e.removeEventListener('mousedown', this.mousedown),
          e.removeEventListener('click', this.click),
          this.removeEventListener('focus', this.onFocus),
          this.removeEventListener('blur', this.onBlur);
      }
      sendMouseEvent(e, t) {
        this.disabled ||
          (this.setInteractionClass(t),
          'click' === e &&
            (this.disableOnClick(),
            this._clickSound && this._clickSound.play()),
          'hover' === e && this._hoverSound && this._hoverSound.play());
      }
      disableOnClick() {
        this.removeEventListeners(),
          this.setInteractionClass('click'),
          window.setTimeout(
            function () {
              this.addEventListeners(),
                this.disabled
                  ? this.setInteractionClass()
                  : this.setInteractionClass('idle');
            }.bind(this),
            600,
          );
      }
      setInteractionClass(e) {
        const t = this.shadowRoot,
          o = t.querySelector('.lol-uikit-flat-button');
        null === o ||
          (this === document.activeElement && 'idle' === e && (e = 'hover'),
          ['intro', 'idle', 'hover', 'down', 'click'].forEach((e) => {
            o.classList.remove(e);
          }),
          e && o.classList.add(e));
      }
      connectedCallback() {
        super.connectedCallback(),
          (this.isAttached = !0),
          this.isType('next') ||
            setTimeout(() => {
              this.initIntroAnimation();
            }, 100),
          this.processAttributes({ event: 'connected' }),
          this.addEventListeners();
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          (this.isAttached = !1),
          this.processAttributes({ event: 'disconnected' }),
          this.removeEventListeners();
      }
      attributeChangedCallback() {
        super.attributeChangedCallback(),
          this.processAttributes({ event: 'changed' });
      }
      static get observedAttributes() {
        return [
          'disabled',
          'type',
          'remove-min-height',
          'primary',
          'hover-sfx-src',
          'click-sfx-src',
          'intro-enabled',
          'secondary',
          'remove-padding',
        ];
      }
      processAttributes(e) {
        super.processAttributes(), (e = e || {}), this.setCustomSounds();
        const t = this.$button().find('.lol-uikit-flat-button-content-wrapper');
        this.$button().toggleClass('primary', this.isPrimary()),
          this.$button().toggleClass('back', this.isType('back')),
          t.toggleClass('external', this.isType('external')),
          this.$button().toggleClass(
            'no-min-height',
            this.hasRemoveMinHeight(),
          ),
          this.$button().toggleClass('secondary', this.isSecondary()),
          this.$button().toggleClass('no-padding', this.hasRemovePadding()),
          this.setDisabledDisplay();
      }
      setCustomSounds() {
        const e = this.getAttribute('hover-sfx-src'),
          t = this.getAttribute('click-sfx-src'),
          o = e || g.default.flatButtonHover,
          i = t || g.default.flatButtonClick;
        (this._hoverSound = this._createSound(o)),
          (this._clickSound = this._createSound(i));
      }
      setDisabledDisplay() {
        this.$button().toggleClass('disabled', this.disabled),
          this.$buttonWrapper().toggleClass('disabled', this.disabled);
      }
      $root() {
        return (0, c.default)(this.shadowRoot);
      }
      $button() {
        return this.$root().find('.lol-uikit-flat-button');
      }
      $buttonWrapper() {
        return this.$root().find('.lol-uikit-flat-button-wrapper');
      }
      $buttonInner() {
        return this.$root().find('.lol-uikit-flat-button-inner');
      }
      isShowArrow(e) {
        return (
          this.isAttachedOrChanged(e) && this.isType('next') && !this.isSimple()
        );
      }
      isType(e) {
        const t = this.getAttribute('type');
        return !!!!(t && e) && t.toLowerCase() === e.toLowerCase();
      }
      isPrimary() {
        return (0, s.isAttrTruthy)('primary', this.getAttribute('primary'));
      }
      isSecondary() {
        return (0, s.isAttrTruthy)('secondary', this.getAttribute('secondary'));
      }
      hasRemoveMinHeight() {
        return (0, s.isAttrTruthy)(
          'remove-min-height',
          this.getAttribute('remove-min-height'),
        );
      }
      isAttachedOrChanged(e) {
        return 'attached' === e || ('changed' === e && this.isAttached);
      }
      isSimple() {
        return (0, s.isAttrTruthy)('simple', this.getAttribute('simple'));
      }
      width() {
        return this.shadowRoot.firstElementChild.offsetWidth;
      }
      hasRemovePadding() {
        return (0, s.isAttrTruthy)(
          'remove-padding',
          this.getAttribute('remove-padding'),
        );
      }
    }
    Object.defineProperty(T.prototype, 'disabled', {
      enumerable: !0,
      get: function () {
        return null !== this.getAttribute('disabled');
      },
      set: function (e) {
        switch (e) {
          case '':
          case 0:
          case !1:
          case null:
          case void 0:
            return void this.removeAttribute('disabled');
          default:
            if ('number' == typeof e && isNaN(e))
              return void this.removeAttribute('disabled');
            this.setAttribute('disabled', '');
        }
      },
    }),
      (T.tagName = 'lol-uikit-flat-button'),
      (t.default = T);
  },
  function (e) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  function (e, t, o) {
    var i = o(15);
    e.exports = function (t, e, o, a) {
      try {
        return a ? e(i(o)[0], o[1]) : e(o);
      } catch (o) {
        var n = t['return'];
        throw (void 0 !== n && i(n.call(t)), o);
      }
    };
  },
  function (e, t, o) {
    var i = o(35),
      a = o(6)('iterator'),
      n = Array.prototype;
    e.exports = function (e) {
      return e !== void 0 && (i.Array === e || n[a] === e);
    };
  },
  function (e, t, o) {
    var i = o(15),
      a = o(40),
      n = o(6)('species');
    e.exports = function (e, t) {
      var o = i(e).constructor,
        r;
      return o === void 0 || (r = i(o)[n]) == void 0 ? t : a(r);
    };
  },
  function (e, t, o) {
    var i = o(21),
      a = o(170),
      n = o(97),
      r = o(68),
      l = o(4),
      s = l.process,
      d = l.setImmediate,
      p = l.clearImmediate,
      c = l.MessageChannel,
      u = l.Dispatch,
      g = 0,
      m = {},
      h = 'onreadystatechange',
      b = function () {
        var e = +this;
        if (m.hasOwnProperty(e)) {
          var t = m[e];
          delete m[e], t();
        }
      },
      f = function (e) {
        b.call(e.data);
      },
      y,
      v,
      x;
    (d && p) ||
      ((d = function (e) {
        for (var t = [], o = 1; arguments.length > o; ) t.push(arguments[o++]);
        return (
          (m[++g] = function () {
            a('function' == typeof e ? e : Function(e), t);
          }),
          y(g),
          g
        );
      }),
      (p = function (e) {
        delete m[e];
      }),
      'process' == o(43)(s)
        ? (y = function (e) {
            s.nextTick(i(b, e, 1));
          })
        : u && u.now
        ? (y = function (e) {
            u.now(i(b, e, 1));
          })
        : c
        ? ((v = new c()),
          (x = v.port2),
          (v.port1.onmessage = f),
          (y = i(x.postMessage, x, 1)))
        : l.addEventListener &&
          'function' == typeof postMessage &&
          !l.importScripts
        ? ((y = function (e) {
            l.postMessage(e + '', '*');
          }),
          l.addEventListener('message', f, !1))
        : h in r('script')
        ? (y = function (e) {
            n.appendChild(r('script'))[h] = function () {
              n.removeChild(this), b.call(e);
            };
          })
        : (y = function (e) {
            setTimeout(i(b, e, 1), 0);
          })),
      (e.exports = { set: d, clear: p });
  },
  function (e) {
    e.exports = function (e) {
      try {
        return { e: !1, v: e() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function (e, t, o) {
    var i = o(15),
      a = o(8),
      n = o(78);
    e.exports = function (e, t) {
      if ((i(e), a(t) && t.constructor === e)) return t;
      var o = n.f(e),
        r = o.resolve;
      return r(t), o.promise;
    };
  },
  function (e, t, o) {
    'use strict';
    var i = o(4),
      a = o(2),
      n = o(14),
      r = o(17),
      l = o(6)('species');
    e.exports = function (e) {
      var t = 'function' == typeof a[e] ? a[e] : i[e];
      r &&
        t &&
        !t[l] &&
        n.f(t, l, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t, o) {
    var i = o(6)('iterator'),
      a = !1;
    try {
      var n = [7][i]();
      (n['return'] = function () {
        a = !0;
      }),
        Array.from(n, function () {
          throw 2;
        });
    } catch (t) {}
    e.exports = function (e, t) {
      if (!t && !a) return !1;
      var o = !1;
      try {
        var n = [7],
          r = n[i]();
        (r.next = function () {
          return { done: (o = !0) };
        }),
          (n[i] = function () {
            return r;
          }),
          e(n);
      } catch (t) {}
      return o;
    };
  },
  function (e, t, o) {
    'use strict';
    var i = o(14).f,
      a = o(50),
      n = o(56),
      r = o(21),
      l = o(55),
      s = o(37),
      d = o(75),
      p = o(99),
      c = o(106),
      u = o(17),
      g = o(38).fastKey,
      m = o(39),
      h = u ? '_s' : 'size',
      b = function (e, t) {
        var o = g(t),
          i;
        if ('F' !== o) return e._i[o];
        for (i = e._f; i; i = i.n) if (i.k == t) return i;
      };
    e.exports = {
      getConstructor: function (e, t, o, d) {
        var p = e(function (e, i) {
          l(e, p, t, '_i'),
            (e._t = t),
            (e._i = a(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[h] = 0),
            void 0 != i && s(i, o, e[d], e);
        });
        return (
          n(p.prototype, {
            clear: function () {
              for (var e = m(this, t), o = e._i, i = e._f; i; i = i.n)
                (i.r = !0), i.p && (i.p = i.p.n = void 0), delete o[i.i];
              (e._f = e._l = void 0), (e[h] = 0);
            },
            delete: function (e) {
              var o = m(this, t),
                i = b(o, e);
              if (i) {
                var a = i.n,
                  n = i.p;
                delete o._i[i.i],
                  (i.r = !0),
                  n && (n.n = a),
                  a && (a.p = n),
                  o._f == i && (o._f = a),
                  o._l == i && (o._l = n),
                  o[h]--;
              }
              return !!i;
            },
            forEach: function (e) {
              m(this, t);
              for (
                var o = r(e, 1 < arguments.length ? arguments[1] : void 0, 3),
                  i;
                (i = i ? i.n : this._f);

              )
                for (o(i.v, i.k, this); i && i.r; ) i = i.p;
            },
            has: function (e) {
              return !!b(m(this, t), e);
            },
          }),
          u &&
            i(p.prototype, 'size', {
              get: function () {
                return m(this, t)[h];
              },
            }),
          p
        );
      },
      def: function (e, t, o) {
        var i = b(e, t),
          a,
          n;
        return (
          i
            ? (i.v = o)
            : ((e._l = i =
                {
                  i: (n = g(t, !0)),
                  k: t,
                  v: o,
                  p: (a = e._l),
                  n: void 0,
                  r: !1,
                }),
              !e._f && (e._f = i),
              a && (a.n = i),
              e[h]++,
              'F' !== n && (e._i[n] = i)),
          e
        );
      },
      getEntry: b,
      setStrong: function (e, t, o) {
        d(
          e,
          t,
          function (e, o) {
            (this._t = m(e, t)), (this._k = o), (this._l = void 0);
          },
          function () {
            for (var e = this, t = e._k, o = e._l; o && o.r; ) o = o.p;
            return e._t && (e._l = o = o ? o.n : e._t._f)
              ? 'keys' == t
                ? p(0, o.k)
                : 'values' == t
                ? p(0, o.v)
                : p(0, [o.k, o.v])
              : ((e._t = void 0), p(1));
          },
          o ? 'entries' : 'values',
          !o,
          !0,
        ),
          c(t);
      },
    };
  },
  function (e, t, o) {
    var i = o(43);
    e.exports =
      Array.isArray ||
      function (e) {
        return 'Array' == i(e);
      };
  },
  function (e, t, o) {
    var i = o(54),
      a = o(180);
    e.exports = function (e) {
      return function () {
        if (i(this) != e) throw TypeError(e + "#toJSON isn't generic");
        return a(this);
      };
    };
  },
  function (e, t, o) {
    'use strict';
    var i = o(42),
      a = o(84),
      n = o(60),
      r = o(47),
      l = o(70),
      s = Object.assign;
    e.exports =
      !s ||
      o(23)(function () {
        var e = {},
          t = {},
          o = Symbol(),
          i = 'abcdefghijklmnopqrst';
        return (
          (e[o] = 7),
          i.split('').forEach(function (e) {
            t[e] = e;
          }),
          7 != s({}, e)[o] || Object.keys(s({}, t)).join('') != i
        );
      })
        ? function (e) {
            for (
              var t = r(e), o = arguments.length, s = 1, d = a.f, p = n.f;
              o > s;

            )
              for (
                var c = l(arguments[s++]),
                  u = d ? i(c).concat(d(c)) : i(c),
                  g = u.length,
                  m = 0,
                  h;
                g > m;

              )
                p.call(c, (h = u[m++])) && (t[h] = c[h]);
            return t;
          }
        : s;
  },
  function (e) {
    'use strict';
    const t = function (e) {
      (this.state = 'pending'),
        (this.nextPromises = []),
        (this.catchPromises = []),
        e ? (this.resolver = e) : this.resolve();
    };
    (t.prototype.handle = function () {
      if (this.resolver)
        if (this.resolver.length)
          this.resolver(
            (e) => {
              this.resolve(e);
            },
            (e) => {
              this.reject(e);
            },
          );
        else {
          let e;
          try {
            e = this.resolver();
          } catch (t) {
            return void this.reject(t);
          }
          this.resolve(e);
        }
    }),
      (t.prototype.then = function (e) {
        return (
          'function' == typeof e && (e = new t(e)),
          (e.parent = this),
          'resolved' === this.state
            ? this.nextPromises.length
              ? this.nextPromises.push(e)
              : e.handle()
            : this.nextPromises.push(e),
          e
        );
      }),
      (t.prototype.resolve = function (e) {
        if ('pending' === this.state)
          if (((this.parent = void 0), e && e.then))
            (this.resolver = function () {}), e.then(this);
          else
            for (this.state = 'resolved'; this.nextPromises.length; ) {
              const e = this.nextPromises.shift();
              e.handle();
            }
      }),
      (t.prototype.reject = function (e) {
        if ('pending' === this.state)
          for (
            this.parent = void 0, this.state = 'rejected';
            this.catchPromises.length;

          ) {
            const t = this.catchPromises.shift();
            t.handle(e);
          }
      }),
      (t.prototype.cancel = function () {
        if (
          (this.resolver && (this.resolver = void 0),
          this.onCancel && this.onCancel(),
          this.nextPromises)
        ) {
          const e = this.nextPromises;
          (this.nextPromises = []),
            e.forEach(function (e) {
              (e.parent = void 0), e.cancel();
            });
        }
        this.parent && this.parent.cancel();
      }),
      (t.chain = function (e) {
        let o = this.statePromise;
        o || (o = new t());
        let i, a;
        if (e instanceof t)
          for (a = e, i = e; a.parent && a.parent !== o; ) a = a.parent;
        else (i = new t(e)), (a = i);
        (this.statePromise = i), o.then(a);
      }),
      (e.exports = t);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.VideoCache =
        t.DefaultCacheSize =
        t.DefaultCacheMode =
        t.CacheModes =
          void 0);
    var i = o(25),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = function (e) {
        const t = document.createElement('video');
        return t.setAttribute('src', e), t.setAttribute('preload', 'auto'), t;
      },
      r = function (e, t) {
        (e.onstalled = null),
          (e.onerror = null),
          (e.onplaying = null),
          (e.onwaiting = null),
          (e.onpause = null),
          (e.onended = null),
          (e.onloadedmetadata = null),
          (e.oncanplay = null),
          (e.oncanplaythrough = null),
          e.parentNode && e.parentNode.removeChild(e),
          (0, a.default)(e.attributes).forEach(function (t) {
            'src' !== t.name && e.removeAttribute(t.name);
          }),
          t
            ? (e.src = '')
            : (e.error ? e.load() : (e.currentTime = 0),
              e.setAttribute('preload', 'auto'));
      },
      l = (t.CacheModes = { LRU: 'LRU', None: 'NONE' }),
      s = (t.DefaultCacheMode = l.LRU),
      d = (t.DefaultCacheSize = 64);
    class p {
      constructor(e) {
        (this.owner = void 0), (this.checkedOut = !1), (this.videoEl = n(e));
      }
      getUrl() {
        return this.videoEl.getAttribute('src');
      }
      isCheckedOut() {
        return this.checkedOut;
      }
      checkout(e) {
        (this.checkedOut = !0), (this.onRevoke = e);
      }
      setOwner(e) {
        return (this.owner = e), this;
      }
      clearOwner(e) {
        (this.owner = void 0),
          (this.checkedOut = !1),
          this.onRevoke &&
            (this.onRevoke(this.videoEl), (this.onRevoke = void 0)),
          r(this.videoEl, e),
          e && (this.videoEl = void 0);
      }
      isOwner(e) {
        return !this.owner || this.owner === e;
      }
      release(e) {
        this.clearOwner(e);
      }
    }
    class c {
      constructor(e = d, t = s, o = 'uikit-video-cache-unnamed', i = void 0) {
        (this.subCaches = {}),
          (this.cachedItems = []),
          (this.cacheMode = t),
          (this.cacheSize = e),
          (this.cacheName = o),
          (this.parent = i);
      }
      setCacheSize(e) {
        for (this.cacheSize = e; this.cachedItems.length > e; )
          if (!this._evict()) return;
      }
      _getCache(e) {
        return this.subCaches[e];
      }
      createCache(e, t = d, o = l.None) {
        let i = this._getCache(e);
        return i ? i : ((i = new c(t, o, e, this)), (this.subCaches[e] = i), i);
      }
      _getCachedItem(e) {
        for (let t = 0; t < this.cachedItems.length; t++) {
          const o = this.cachedItems[t];
          if (o.getUrl() === e && o.isOwner(this) && !o.isCheckedOut())
            return o;
        }
        return this.cache(e);
      }
      _touch(e) {
        const t = this.cachedItems.indexOf(e);
        -1 !== t && this.cachedItems.splice(t, 1), this.cachedItems.push(e);
      }
      acquire(e, t = void 0) {
        const o = this._getCachedItem(e);
        if (o.isOwner(this)) return this._touch(o), o.checkout(t), o.videoEl;
      }
      _evict() {
        return this.cacheMode === l.LRU
          ? this._evictLRU()
          : this.cacheMode === l.None;
      }
      _evictLRU() {
        for (let e = 0; e < this.cachedItems.length; e++) {
          const t = this.cachedItems[e];
          if (t.isOwner(this) && !t.isCheckedOut()) {
            const t = this.cachedItems.splice(e, 1)[0],
              o = !this.parent;
            return t.release(o), t;
          }
        }
      }
      cache(e) {
        if (!e) return;
        this.cachedItems.length >= this.cacheSize && this._evict();
        let t;
        return (
          (t = this.parent
            ? this.parent._getCachedItem(e)
            : 'string' == typeof e
            ? new p(e)
            : e),
          t.setOwner(this),
          this.cachedItems.push(t),
          t
        );
      }
      release() {
        if (0 < arguments.length)
          return this.releaseVideo.apply(this, arguments);
        for (let e = this.cachedItems.length; 0 <= e; e--) {
          const t = this.cachedItems[e];
          t && t.isOwner(this) && this.releaseVideo(t.videoEl);
        }
      }
      releaseVideo(e) {
        const t = this.cachedItems.find(function (t) {
          return t.videoEl === e;
        });
        if (!t) return;
        let o = !1,
          i = this;
        for (; i && (i.parent || i.cachedItems.length > i.cacheSize); ) {
          o = !i.parent;
          const e = i.cachedItems.indexOf(t);
          -1 !== e && i.cachedItems.splice(e, 1), (i = i.parent);
        }
        t.release(o);
      }
    }
    t.VideoCache = c;
    const u = new c(d, s, 'uikit-video-cache-global');
    t.default = u;
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(223);
      }
      static get observedAttributes() {
        return ['nonsimultaneous'];
      }
      activate(e) {
        (this.activeConditionTokens = []),
          (this.satisfiedConditions = []),
          (this.onConditionSatisfied = e);
        for (let t = 0; t < this.children.length; t++) {
          const e = { i: t };
          this.activeConditionTokens.push(e);
        }
        if (0 === this.activeConditionTokens.length) return void e();
        if (this.hasAttribute('nonsimultaneous')) {
          const t = this.activeConditionTokens.slice(0);
          for (let o = 0; o < this.children.length; o++) {
            const i = t[o],
              a = this.children[o];
            a.activate(() => {
              this.isActive(i) &&
                (this.activeConditionTokens.splice(
                  this.activeConditionTokens.indexOf(i),
                  1,
                ),
                0 === this.activeConditionTokens.length &&
                  (e(), this.deactivate()));
            });
          }
        } else this.validateSimultaneousConditions();
      }
      validateSimultaneousConditions(e) {
        return e && this.satisfiedConditions
          ? void (
              -1 === this.satisfiedConditions.indexOf(e) &&
              this.satisfiedConditions.push(e)
            )
          : void this.verificationLoop(e);
      }
      verificationLoop(e) {
        this.satisfiedConditions = e ? [e] : [];
        const t = this.activeConditionTokens,
          o = this.satisfiedConditions;
        for (let a = 0; a < this.children.length; a++) {
          const e = t[a],
            i = this.children[a];
          if (
            -1 === o.indexOf(i) &&
            (i.deactivate(),
            i.activate(() => {
              this.isActive(e) && this.validateSimultaneousConditions(i);
            }),
            -1 === o.indexOf(i))
          )
            break;
        }
        o.length === t.length &&
          (this.onConditionSatisfied(), this.deactivate()),
          (this.satisfiedConditions = void 0);
      }
      isActive(e) {
        return void 0 === e
          ? !!(this.activeConditionTokens && this.activeConditionTokens.length)
          : this.activeConditionTokens &&
              -1 !== this.activeConditionTokens.indexOf(e);
      }
      deactivate() {
        this.activeConditionTokens = void 0;
        for (let e = 0; e < this.children.length; e++) {
          const t = this.children[e];
          t.deactivate();
        }
      }
    }
    (a.tagName = 'uikit-condition-all'), (t.default = a);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(18),
      n = i(a),
      r = o(0),
      l = o(61),
      s = i(l),
      d = o(7),
      p = i(d);
    class c extends r.webComponents.ShadowElement {
      templateMarkup() {
        return o(236);
      }
      stylesheetMarkup() {
        return o(237);
      }
      constructor() {
        super(),
          (this.defaultOptions = {
            css: this.stylesheetMarkup(),
            menuClass: 'context-menu',
            rootMenuClass: 'context-menu-root',
            subMenuClass: null,
            openSubmenuClass: 'open',
          }),
          (this.itemCount = 0),
          (this.removed = !1),
          (this.handleFocusOut = this.handleFocusOut.bind(this)),
          (this.styleElement = this.shadowRoot.firstElementChild),
          (this.contextMenuElement = this.shadowRoot.lastElementChild),
          (this.menuItemTemplate = this.contextMenuElement.firstElementChild),
          this.menuItemTemplate.remove(),
          this.contextMenuElement.addEventListener(
            'click',
            this.handleClick.bind(this),
          ),
          this.contextMenuElement.addEventListener(
            'mouseover',
            this.handleMouseOver.bind(this),
          ),
          this.contextMenuElement.addEventListener(
            'mouseout',
            this.handleMouseOut.bind(this),
          );
      }
      connectedCallback() {
        super.connectedCallback(),
          (this.style.position = 'absolute'),
          (this.style.zIndex = '10000');
      }
      setOwner(e) {
        (this.parentContextMenu = e), (e.contextMenuChild = this);
      }
      setMenuItems(e) {
        this._setMenuItems(e, this.defaultOptions);
      }
      setCustomMenuItems(e, t) {
        this._setMenuItems(e, (0, n.default)({}, this.defaultOptions, t));
      }
      _setMenuItems(e, t) {
        (e = c.filterVisible(e)),
          (this.itemCount = e.length),
          (this.menuOptions = t),
          this._clearMenu(),
          this._setupMenu(e, t),
          this._setMenuCSS(t.css);
        for (let o = 0; o < e.length; o++) {
          const t = e[o],
            i = this.contextMenuElement.children[o];
          (i.item = t),
            i.classList.toggle(
              'disabled',
              t.disabled || t.notImplemented || !1,
            ),
            i.classList.toggle('not-implemented', !!t.notImplemented),
            i.classList.toggle('has-submenu', !!t.submenu),
            !t.element &&
              t.label &&
              ((i.textContent = t.label), t.class && i.classList.add(t.class));
        }
      }
      _clearMenu() {
        (this.contextMenuElement.className = 'context-menu'),
          (this.contextMenuElement.textContent = '');
      }
      _setupMenu(e, t) {
        this.contextMenuElement.classList.add(t.menuClass),
          !this.parentContextMenu && t.rootMenuClass
            ? this.contextMenuElement.classList.add(t.rootMenuClass)
            : this.parentContextMenu &&
              t.subMenuClass &&
              this.contextMenuElement.classList.add(t.subMenuClass),
          (this.openSubmenuClass = t.openSubmenuClass),
          this._setupMenuItems(e);
      }
      _setupMenuItems(e) {
        for (let t = 0; t < e.length; t++) {
          const o = e[t].element,
            i = e[t].label;
          if (o && o instanceof HTMLElement)
            this.contextMenuElement.appendChild(o);
          else if (i && 'string' == typeof i)
            this.contextMenuElement.appendChild(
              this.menuItemTemplate.cloneNode(!0),
            );
          else
            throw new Error(
              'Context menu items must have an element or label for each item',
            );
        }
      }
      _setMenuCSS(e) {
        this.styleElement.innerHTML !== e && (this.styleElement.innerHTML = e);
      }
      openAtEvent(e) {
        this.target = e.target;
        const t = e.target.ownerDocument.defaultView.frameElement,
          o = t ? t.ownerDocument : e.target.ownerDocument,
          i = o.defaultView;
        this.container = o.body;
        let a = e.pageX,
          n = e.pageY;
        if (
          (void 0 === a &&
            void 0 !== e.screenX &&
            ((a = e.screenX - i.screenX), (n = e.screenY - i.screenY)),
          t)
        ) {
          const e = t.getBoundingClientRect();
          (a += e.left), (n += e.top);
        }
        this.show(),
          this._placeMenu(i, new s.default(a, n)),
          (this.lastActiveElement = this.target.ownerDocument.activeElement),
          this.focus();
      }
      openAtRect(e) {
        this.show();
        const t = this.ownerDocument.defaultView;
        this._placeMenu(t, e), this.focus();
      }
      _placeMenu(e, t) {
        (this.style.left = ''), (this.style.top = '');
        const o = s.default.fromDOMRect(this.getBoundingClientRect()),
          i = new s.default(e.scrollX, e.scrollY, e.innerWidth, e.innerHeight);
        o.place(t, i),
          (this.style.left = o.left + 'px'),
          (this.style.top = o.top + 'px');
      }
      focus() {
        this.contextMenuElement.focus(),
          this.contextMenuElement.addEventListener(
            'blur',
            this.handleFocusOut.bind(this),
          );
      }
      contextMenuHasFocus() {
        const e =
          this.ownerDocument.activeElement.className.includes('context-menu');
        return e;
      }
      hasFocus(e) {
        const t = this.ownerDocument;
        return (
          t.hasFocus() && this.contextMenuElement.contains(e || t.activeElement)
        );
      }
      isOpen() {
        return !!this.parentNode && !this.removed;
      }
      getContainer() {
        const e = c.document;
        return (
          window.testsSandbox ||
          this.container ||
          (this.parentContextMenu && this.parentContextMenu.container) ||
          e.body
        );
      }
      show() {
        const e = this.getContainer();
        this.parentNode !== e && (e.appendChild(this), (this.removed = !1));
      }
      close() {
        this.contextMenuElement.removeEventListener(
          'blur',
          this.handleFocusOut.bind(this),
        ),
          this.contextMenuChild &&
            this.contextMenuChild.isOpen() &&
            this.contextMenuChild.close();
        this.isOpen() &&
          (this.contextMenuElement.dispatchEvent(
            new Event('closeContextMenu', { bubbles: !0 }),
          ),
          this.lastActiveElement && this.lastActiveElement.focus(),
          (this.target = null),
          (this.lastActiveElement = null),
          (this.removed = !0),
          this.contextMenuElement.removeEventListener(
            'click',
            this.handleClick.bind(this),
          ),
          this.contextMenuElement.removeEventListener(
            'mouseover',
            this.handleMouseOver.bind(this),
          ),
          this.contextMenuElement.removeEventListener(
            'mouseout',
            this.handleMouseOut.bind(this),
          ),
          this.remove());
      }
      handleFocusOut(e) {
        if (this.isOpen() && !this.openingSubmenu) {
          const t = this.hasFocus(e.relatedTarget),
            o = this.contextMenuChild && this.contextMenuChild.hasFocus(),
            i =
              this.parentContextMenu &&
              this.parentContextMenu === e.relatedTarget;
          t || o || (this.close(), !i && this.closeParent());
        }
      }
      handleClick(e) {
        const t = this._findItemRoot(e.target);
        if (t) {
          const o = t.item;
          return o.disabled
            ? void this.focus()
            : void (
                o &&
                (!o.noClickSound && this._playSound(),
                o.target
                  ? (this.itemAction(o),
                    this.contextMenuElement.focus(),
                    setTimeout(() => this.contextMenuElement.blur()))
                  : this.handleMouseOver(e))
              );
        }
      }
      itemAction(e) {
        'function' == typeof e.action
          ? e.action.apply(e.target, e.args)
          : e.target && 'function' == typeof e.target[e.action]
          ? e.target[e.action].apply(e.target, e.args)
          : e.target &&
            'function' == typeof e.target.send &&
            e.target.send.apply(e.target, [e.action].concat(e.args || []));
      }
      handleMouseOver(e) {
        const t = this._findItemRoot(e.target);
        if (
          (this.submenuCloseCheck(),
          t && this.contextMenuChild && !t.item.disabled)
        ) {
          const e = t.item;
          e.submenu
            ? this.openSubmenu(t)
            : this.contextMenuChild.isOpen() && this.closeSubmenuDelayed();
        }
      }
      submenuCloseCheck() {
        this.parentContextMenu && this.parentContextMenu.cancelSubmenuClose();
      }
      handleMouseOut(e) {
        const t = this._findItemRoot(e.target);
        if (t) {
          const e = t.item;
          e.submenu &&
            this.contextMenuChild &&
            this.contextMenuChild.isOpen() &&
            this.closeSubmenuDelayed();
        }
      }
      openSubmenu(e) {
        const t = e.item;
        if (e && t) {
          this.contextMenuChild.isOpen() && this.closeSubmenu(),
            (this.openingSubmenu = !0),
            this.cancelSubmenuClose(),
            setTimeout(() => (this.openingSubmenu = !1), 300),
            e.classList.add(this.openSubmenuClass),
            (this.contextMenuChild.openingElement = e),
            this.contextMenuChild._setMenuItems(t.submenu, this.menuOptions);
          const o = s.default.fromDOMRect(e.getBoundingClientRect());
          this.contextMenuChild.openAtRect(o);
        }
      }
      closeSubmenuDelayed() {
        this._closingSubmenu ||
          (this._closingSubmenu = setTimeout(
            this.closeSubmenu.bind(this),
            300,
          ));
      }
      closeSubmenu() {
        this.cancelSubmenuClose(),
          this.contextMenuChild &&
            (this.contextMenuChild.close(),
            (this._closingSubmenu = null),
            this.contextMenuChild.openingElement.classList.remove(
              this.openSubmenuClass,
            ),
            (this.contextMenuChild.openingElement = null),
            this.isOpen() && this.focus());
      }
      cancelSubmenuClose() {
        clearTimeout(this._closingSubmenu), (this._closingSubmenu = null);
      }
      closeParent() {
        this.parentContextMenu &&
          setTimeout(() => this.parentContextMenu.close());
      }
      _findItemRoot(e) {
        if (!e || e === this.contextMenuElement) return null;
        return e.item ? e : this._findItemRoot(e.parentElement);
      }
      _playSound() {
        (0, r.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .playSound(p.default.clickGeneric);
      }
      static filterVisible(e) {
        return e.filter(function (e) {
          return !e.hidden;
        });
      }
    }
    (t.default = c), (c.tagName = 'lol-uikit-context-menu');
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(0),
      n = o(9),
      r = i(n),
      l = o(7),
      s = i(l),
      d = o(31);
    class p extends a.webComponents.ShadowElement {
      templateMarkup() {
        return o(244);
      }
      stylesheetMarkup() {
        return o(245);
      }
      constructor() {
        super(),
          (this._optionSelectSound = this._createSound(
            s.default.dropdownOptionSelect,
          ));
      }
      connectedCallback() {
        super.connectedCallback();
        const e = this._ancestorDropdown();
        e &&
          ('LOL-UIKIT-FRAMED-DROPDOWN' === e.tagName
            ? this.classList.toggle('framed-dropdown-type', !0)
            : 'LOL-UIKIT-FLAT-DROPDOWN' === e.tagName &&
              this.classList.toggle('flat-dropdown-type', !0));
      }
      static get observedAttributes() {
        return ['selected', 'disabled', 'draggable', 'unselectable'];
      }
      processAttributes() {
        this._draggableCheck(),
          this._disableCheck(),
          this._unselectableCheck(),
          this._selectedCheck(),
          this._clickableCheck();
      }
      isSelected() {
        return (0, d.isAttrTruthy)('selected', this.getAttribute('selected'));
      }
      isDisabled() {
        return (0, d.isAttrTruthy)('disabled', this.getAttribute('disabled'));
      }
      isDraggable() {
        return (0, d.isAttrTruthy)('draggable', this.getAttribute('draggable'));
      }
      isUnselectable() {
        return (0, d.isAttrTruthy)(
          'unselectable',
          this.getAttribute('unselectable'),
        );
      }
      _ancestorDropdown() {
        return (0, r.default)(this).closest(
          'lol-uikit-framed-dropdown,lol-uikit-flat-dropdown',
        )[0];
      }
      _clickableCheck() {
        const e = !this.isDisabled() && !this.isUnselectable();
        e &&
          !this._clickHandlerAttached &&
          (this.addEventListener('click', this._handleClick),
          (this._clickHandlerAttached = !0)),
          !e &&
            this._clickHandlerAttached &&
            (this.removeEventListener('click', this._handleClick),
            (this._clickHandlerAttached = !1));
      }
      _draggableCheck() {
        const e = this.shadowRoot.querySelector('.ui-dropdown-option');
        this.isDraggable()
          ? e.setAttribute('draggable', !0)
          : e.removeAttribute('draggable');
      }
      _disableCheck() {
        const e = this.shadowRoot.querySelector('.ui-dropdown-option');
        if (this.isDisabled() && this.isSelected()) {
          this.removeAttribute('selected');
          const e = this._ancestorDropdown();
          e.dispatchEvent(new Event('reset'));
        }
        this.isDisabled()
          ? e.classList.add('ui-dropdown-option-disabled')
          : e.classList.remove('ui-dropdown-option-disabled');
      }
      _unselectableCheck() {
        const e = this.shadowRoot.querySelector('.ui-dropdown-option');
        if (this.isUnselectable() && this.isSelected()) {
          this.removeAttribute('selected');
          const e = this._ancestorDropdown();
          e.dispatchEvent(new Event('reset'));
        }
        this.isUnselectable()
          ? e.classList.add('ui-dropdown-option-unselectable')
          : e.classList.remove('ui-dropdown-option-unselectable');
      }
      _selectedCheck() {
        var e = this.shadowRoot.querySelector('.ui-dropdown-option');
        const t = e.classList;
        this.isSelected()
          ? t.add('ui-dropdown-option-selected')
          : t.remove('ui-dropdown-option-selected');
      }
      _handleClick(e) {
        0 < e.button ||
          (this._ancestorDropdown().selectOption(this),
          this._optionSelectSound.play());
      }
      playSound(e) {
        (0, a.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .playSound(e);
      }
      _createSound(e) {
        return (0, a.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .createSound(e, { allowConcurrency: !1 });
      }
    }
    (p.tagName = 'lol-uikit-dropdown-option'), (t.default = p);
  },
  function (e, t, o) {
    e.exports = o.p + 'dropdown-check.png';
  },
  function (e, t, o) {
    var i = o(60),
      a = o(41),
      n = o(28),
      r = o(69),
      l = o(24),
      s = o(95),
      d = Object.getOwnPropertyDescriptor;
    t.f = o(17)
      ? d
      : function (e, t) {
          if (((e = n(e)), (t = r(t, !0)), s))
            try {
              return d(e, t);
            } catch (t) {}
          return l(e, t) ? a(!i.f.call(e, t), e[t]) : void 0;
        };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = Math.floor;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(25),
      r = i(n),
      l = o(30),
      s = o(0),
      d = o(9),
      p = i(d),
      c = o(120),
      u = i(c),
      g = o(7),
      m = i(g),
      h = o(116),
      b = i(h),
      f = o(31);
    const y = ['close', 'keyup', 'mousedown', 'blur'];
    class v extends s.webComponents.ShadowElement {
      template() {
        throw new Error(
          'Must override this base class to get a dropdown element',
        );
      }
      constructor() {
        super(),
          (this.optionNodes = []),
          (this.selected = !1),
          (this.isDropdownOpen = !1),
          (this.updateSelectedRequired = !0),
          (this.currentElement = null),
          (this.shadowContentElement = null),
          (this.lightContentElement = null),
          (this._dropdownSound = this._createSound(m.default.dropdownClick)),
          (this._handleClick = this._handleClick.bind(this)),
          (this._handleKeyUp = this._handleKeyUp.bind(this)),
          (this._handleDOMChange = this._handleDOMChange.bind(this)),
          (this._refreshSelected = () => {
            this.refreshSelected();
          }),
          (this._handleClosableEvent = this._handleClosableEvent.bind(this));
      }
      connectedCallback() {
        super.connectedCallback();
        const e = this.getBoundingClientRect();
        (this._windowHeight = window.innerHeight),
          (this._windowScrollY = window.scrollY),
          (this._elementOffsetTop = e.top + this._windowScrollY),
          (this._offsetHeight = this.offsetHeight),
          this._findSelected(),
          this._updateSelected(),
          this._attachEvents(),
          this._updateClasses(),
          (0, u.default)(this).then(() => {
            this._checkOptionsRoom();
          }),
          (this.tabIndex = 0);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._detachEvents();
      }
      _descendantOptions(e = '') {
        const t = ['lol-uikit-dropdown-option']
          .map((o) => `${o}${e}`)
          .join(',');
        return (0, r.default)(this.querySelectorAll(t));
      }
      _makeSelected(e) {
        this._descendantOptions().forEach((t) => {
          t === e
            ? (t.removeAttribute('selected'), t.setAttribute('selected', !0))
            : t.removeAttribute('selected');
        }),
          (this.selected = e);
      }
      select(e) {
        const t = this._descendantOptions();
        for (let o = 0; o < t.length; o++) {
          const i = t[o],
            a = 'function' == typeof e ? e(i) : i.getAttribute('value') === e;
          if (!0 === a) return this.selectOption(i);
        }
      }
      selectOption(e) {
        if (e !== this.selected) {
          this._makeSelected(e);
          const t = new Event('selected', { composed: !0 });
          (t.selected = this.selected),
            this.dispatchEvent(t),
            this._updateSelected();
        }
        this._close();
      }
      refreshSelected() {
        (this.updateSelectedRequired = !0),
          this._findSelected(),
          this._updateSelected();
      }
      _checkOptionsRoom() {
        const e = this.shadowRoot.querySelector('.ui-dropdown'),
          t = this.shadowRoot.querySelector(
            '.ui-dropdown-options-container lol-uikit-scrollable',
          ),
          o = this.getAttribute('direction'),
          i = this._getTopOfDropdown(),
          a = this._getBottomOfDropdown();
        if ('upward' === o)
          return (
            e.classList.add('opens-upward'),
            void this._constrainHeightToTop(t, i)
          );
        if ('downward' === o) return void this._constrainHeightToBottom(t, a);
        const n = this._getWindowHeight();
        this._extendsBelowClient(t, a) && i >= n / 2
          ? (e.classList.add('opens-upward'), this._constrainHeightToTop(t, i))
          : (e.classList.remove('opens-upward'),
            this._constrainHeightToBottom(t, a));
      }
      _extendsBelowClient(e, t) {
        const o = this._getWindowHeight();
        return !!(t + e.offsetHeight > o);
      }
      _extendsAboveClient(e, t) {
        return !!(10 > t - e.offsetHeight);
      }
      _constrainHeightToTop(e, t) {
        if (this._extendsAboveClient(e, t)) {
          const o = a(t - 10);
          e.style.maxHeight = o + 'px';
        }
      }
      _constrainHeightToBottom(e, t) {
        const o = this._getWindowHeight();
        if (this._extendsBelowClient(e, t)) {
          const i = a(o - t - 10);
          e.style.maxHeight = i + 'px';
        }
      }
      _getWindowHeight() {
        return this._windowHeight - 10;
      }
      _getBottomOfDropdown() {
        return (
          this._windowScrollY + this._elementOffsetTop + this._offsetHeight
        );
      }
      _getTopOfDropdown() {
        return this._windowScrollY + this._elementOffsetTop;
      }
      _getOptionHeight(e) {
        return e.offsetHeight;
      }
      _findSelected() {
        const e = this._descendantOptions('[selected]')[0];
        if (e) return void (this.selected = e);
        const t = this._descendantOptions(
          ':not([unselectable]):not([disabled])',
        )[0];
        t && (t.setAttribute('selected', !0), (this.selected = t));
      }
      _updateSelected() {
        if (this.currentElement && this.updateSelectedRequired) {
          const e = this.getAttribute('staticDisplay');
          e
            ? ((this.updateSelectedRequired = !1),
              this.currentElement.innerText !== e &&
                (this.currentElement.innerText = e))
            : this.selected &&
              this.currentElement.innerHTML !== this.selected.innerHTML &&
              (this.currentElement.innerHTML = this.selected.innerHTML);
        }
      }
      _attachEvents() {
        const e = this.shadowRoot.querySelector('.ui-dropdown-current');
        e.addEventListener('click', this._handleClick),
          this.addEventListener('keyup', this._handleKeyUp),
          this.addEventListener('reset', this._refreshSelected),
          (this._observer = new MutationObserver(this._handleDOMChange)),
          this._observer.observe(this, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributes: !0,
            attributeOldValue: !0,
          });
      }
      _detachEvents() {
        const e = this.shadowRoot.querySelector('.ui-dropdown-current');
        e.removeEventListener('click', this._handleClick),
          this.removeEventListener('keyup', this._handleKeyUp),
          this.removeEventListener('reset', this._refreshSelected),
          this._observer.disconnect(),
          (this._observer = null);
      }
      _handleDOMChange(e) {
        let t, o, i;
        e.forEach((e) => {
          const a = e.attributeName,
            n = e.oldValue,
            l = e.target;
          if ('childList' === e.type) {
            const t = (0, r.default)(e.addedNodes);
            t.forEach((e) => {
              e instanceof b.default && e.getAttribute('selected') && (i = e);
            }),
              this._checkOptionsRoom();
          }
          'disabled' === a
            ? ((t = !(0, f.isAttrTruthy)('disabled', n)),
              (o = (0, f.isAttrTruthy)('disabled', l.getAttribute('disabled'))),
              this.isDropdownOpen && t && o && this._close())
            : 'selected' === a &&
              (0, f.isAttrTruthy)('selected', l.getAttribute('selected')) &&
              this._descendantOptions().forEach(function (e) {
                e !== l &&
                  e.getAttribute('selected') &&
                  e.removeAttribute('selected');
              });
        }),
          i &&
            this._descendantOptions().forEach(function (e) {
              e !== i &&
                e.getAttribute('selected') &&
                e.removeAttribute('selected');
            }),
          this._updateClasses(),
          this.refreshSelected();
      }
      _handleKeyUp(e) {
        (32 === e.keyCode || 13 === e.keyCode) && this._toggleDropdown();
      }
      _handleClick() {
        this._toggleDropdown();
      }
      _toggleDropdown() {
        this._isDisabled() ||
          (this.isDropdownOpen ? this._close() : this._open(),
          this._dropdownSound.play());
      }
      _createSound(e) {
        return (0, l.createSound)('sfx-ui', e, { allowConcurrency: !1 });
      }
      _handleClosableEvent(e = {}) {
        const t = this === e.target,
          o = 0 < (0, p.default)(this).has(e.target).length;
        t || o || this._close();
      }
      _open() {
        this._isDisabled() ||
          ((this.isDropdownOpen = !0),
          this.classList.add('active'),
          (0, p.default)(window).on(y.join(' '), this._handleClosableEvent),
          this._scrollToSelectedOption());
      }
      _close() {
        (this.isDropdownOpen = !1),
          this.classList.remove('active'),
          (0, p.default)(window).off(y.join(' '), this._handleClosableEvent);
      }
      _isDisabled() {
        return (0, f.isAttrTruthy)('disabled', this.getAttribute('disabled'));
      }
      _updateContentElement() {
        (this.isStylableContent = (0, f.isAttrTruthy)(
          'stylablecontent',
          this.getAttribute('stylablecontent'),
        )),
          this.isStylableContent && !this.lightContentElement
            ? ((this.lightContentElement = document.createElement('div')),
              this.lightContentElement.setAttribute(
                'slot',
                '.ui-dropdown-current-content.light',
              ),
              this.lightContentElement.classList.add(
                'ui-dropdown-current-content',
              ),
              this.lightContentElement.classList.add('light'),
              this.appendChild(this.lightContentElement))
            : !this.isStylableContent &&
              this.lightContentElement &&
              (this.removeChild(this.lightContentElement),
              (this.lightContentElement = null)),
          this.shadowContentElement ||
            (this.shadowContentElement = this.shadowRoot.querySelector(
              '.ui-dropdown-current-content',
            )),
          (this.currentElement = this.isStylableContent
            ? this.lightContentElement
            : this.shadowContentElement);
      }
      _updateClasses() {
        this.classList.toggle('disabled', this._isDisabled()),
          this._updateContentElement();
      }
      _scrollToSelectedOption() {
        const e = this.shadowRoot.querySelector('lol-uikit-scrollable');
        if (e && e.clientHeight < e.scrollHeight) {
          const t = this._descendantOptions()[0],
            o = this._descendantOptions('[selected]')[0];
          if (t && o) {
            const i = t.offsetTop,
              a = o.offsetTop;
            e.scrollTop = a - i;
          }
        }
      }
    }
    t.default = v;
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      const t = e.getBoundingClientRect();
      return 0 < t.width || 0 < t.height;
    }
    function a(e, t) {
      function o() {
        i(e) && ((0, s.removeResizeListener)(e, o), t(e));
      }
      (0, s.addResizeListener)(e, o);
    }
    function n(e, t) {
      e.classList.add('uikit-added-to-dom'),
        e.addEventListener('animationstart', function o(n) {
          'uikit-added-to-dom-animation' === n.animationName &&
            (n.stopPropagation(),
            n.preventDefault(),
            e.classList.remove('uikit-added-to-dom'),
            e.removeEventListener('animationstart', o),
            i(e) ? t(e) : a(e, t));
        });
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = o(5),
      l = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    (t.default = function (e) {
      return new l.default(function (t) {
        setTimeout(function () {
          i(e) ? t(e) : document.body.contains(e) ? a(e, t) : n(e, t);
        }, 0);
      });
    }),
      o(260);
    var s = o(261);
  },
  function (e, t, o) {
    e.exports = o.p + 'up-down-arrow.png';
  },
  function (e, t, o) {
    e.exports = o.p + 'up-down-arrow-locked.png';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(18),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = {
      limitRange: 508.63361717427733,
      fadeRange: 100,
      scale1: 1.4382054002858877,
      scale2: 1,
      scale3: 1,
      scale4: 1.1,
      speed: 0.2630863537108331,
    };
    t.default = class {
      constructor(e, t = {}, o = !0) {
        (this._elements = e),
          (this._config = (0, a.default)({}, n, t)),
          this._init(),
          o && this.play();
      }
      _init() {}
      play() {
        (this._isPlaying = !0), this._loop();
      }
      pause() {
        this._isPlaying = !1;
      }
      update() {}
      _loop() {
        this.update(),
          this._isPlaying && window.requestAnimationFrame(() => this._loop());
      }
      destroy() {
        this.pause();
      }
    };
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(18),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = function (e, t) {
      return e + Math.random() * (t - e);
    };
    t.default = class {
      constructor(e, t) {
        (this._element = e),
          (this._x = 0),
          (this._y = 0),
          (this._speed = 0.2 * n(5, 10)),
          (this._config = t);
      }
      update(e, t) {
        (this._x -= this._speed * this._config.speed),
          this._x < -this._config.limitRange &&
            (this._x += 2 * this._config.limitRange),
          this._updateCSS(e, t);
      }
      updateConfig(e) {
        (0, a.default)(this._config, e);
      }
      _updateCSS() {
        var e = this._config;
        const t = e.limitRange,
          o = e.fadeRange;
        this._element.style.transform = `translate(${this._x}px, ${this._y}px)`;
        let i = 1;
        const a = Math.abs(this._x);
        a > t - o && (i = 1 - (a - t + o) / o),
          (this._element.style.opacity = i);
      }
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(18),
      n = i(a),
      r = o(123),
      l = i(r),
      s = o(124),
      d = i(s);
    class p extends l.default {
      constructor(e, t, o = !0) {
        super(e, t, o);
      }
      _init() {
        this._layers = [];
        const e = -this._config.limitRange,
          t = (2 * this._config.limitRange) / this._elements.length;
        this._elements.forEach((o, i) => {
          const a = (({ limitRange: e, fadeRange: t, speed: o }) => ({
            limitRange: e,
            fadeRange: t,
            speed: o,
          }))(this._config);
          a.scale = this._config[`scale${i + 1}`];
          const n = new d.default(o, a);
          (n.x = e + i * t), this._layers.push(n);
        });
      }
      update() {
        this._layers.forEach((e) => e.update());
      }
      updateConfig(e) {
        (this._config = (0, n.default)(this._config, e)),
          this._layers.forEach((e, t) => {
            const o = (({ limitRange: e, fadeRange: t, speed: o }) => ({
              limitRange: e,
              fadeRange: t,
              speed: o,
            }))(this._config);
            (o.scale = this._config[`scale${t + 1}`]), e.updateConfig(o);
          });
      }
    }
    t.default = p;
  },
  function (e, t, o) {
    var i = o(3),
      a = o(51),
      n = o(23),
      r = o(86),
      l = '[' + r + ']',
      s = '\u200B\x85',
      d = RegExp('^' + l + l + '*'),
      p = RegExp(l + l + '*$'),
      c = function (e, t, o) {
        var a = {},
          l = n(function () {
            return !!r[e]() || s[e]() != s;
          }),
          d = (a[e] = l ? t(u) : r[e]);
        o && (a[o] = d), i(i.P + i.F * l, 'String', a);
      },
      u = (c.trim = function (e, t) {
        return (
          (e = a(e) + ''),
          1 & t && (e = e.replace(d, '')),
          2 & t && (e = e.replace(p, '')),
          e
        );
      });
    e.exports = c;
  },
  function (e, t) {
    'use strict';
    var o = Math.round;
    Object.defineProperty(t, '__esModule', { value: !0 });
    const a = Math.PI;
    t.default = class {
      constructor() {
        (this.startAngle = a / 2), (this.endAngle = (-3 / 2) * a);
      }
      setStartAngle(e) {
        (e || 0 === e) && (this.startAngle = this.convertAngle(e));
      }
      setEndAngle(e) {
        (e || 0 === e) && (this.endAngle = this.convertAngle(e));
      }
      convertAngle(e = 0) {
        return 'string' == typeof e && -1 < e.indexOf('rad')
          ? parseFloat(e)
          : (parseFloat(e) * a) / 180;
      }
      normalizeAngle(e = 0) {
        return ((e % (2 * a)) + 2 * a) % (2 * a);
      }
      getAngleFromPercent(e = {}) {
        const t = e.percent;
        var o = e.startAngle;
        const i = o === void 0 ? this.startAngle : o;
        var a = e.endAngle;
        const n = a === void 0 ? this.endAngle : a;
        return i + (n - i) * (t / 100);
      }
      getPointOnSquare(e = 0) {
        var t = Math.tan;
        e = this.normalizeAngle(e);
        let i, n;
        switch (!0) {
          case e < a / 4:
          case e >= (7 * a) / 4:
            (i = 100), (n = 50 - 50 * t(e));
            break;
          case e < (3 * a) / 4:
            (i = 50 + 50 / t(e)), (n = 0);
            break;
          case e < (5 * a) / 4:
            (i = 0), (n = 50 + 50 * t(e));
            break;
          case e < (7 * a) / 4:
            (i = 50 - 50 / t(e)), (n = 100);
        }
        return (i = o(10 * i) / 10), (n = o(10 * n) / 10), { xPos: i, yPos: n };
      }
      _calculatePolygonPoints(e) {
        const t = [{ xPos: 50, yPos: 50 }],
          o = this.startAngle,
          i = this.endAngle,
          n = this.getAngleFromPercent({
            startAngle: o,
            endAngle: i,
            percent: e,
          });
        t.push(this.getPointOnSquare(o));
        let r, l;
        if (n > o) {
          (r = Math.ceil((2 / a) * o - 0.5)), (l = (a / 4) * (2 * r + 1));
          for (let e = 0; 4 > e; e++) {
            const o = l + (e * a) / 2;
            if (o < n) t.push(this.getPointOnSquare(o));
            else break;
          }
        } else {
          (r = Math.floor((2 * o) / a - 0.5)), (l = (a / 4) * (2 * r + 1));
          for (let e = 0; 4 > e; e++) {
            const o = l - (e * a) / 2;
            if (o > n) t.push(this.getPointOnSquare(o));
            else break;
          }
        }
        return t.push(this.getPointOnSquare(n)), t;
      }
      generatePolygon(e) {
        const t = this._calculatePolygonPoints(e)
          .map(function (e) {
            return `${e.xPos}% ${e.yPos}%`;
          })
          .reduce(function (e, t) {
            return `${e}, ${t}`;
          });
        return `polygon(${t})`;
      }
    };
  },
  function (e, t) {
    'use strict';
    function o() {
      return i || (i = document.createElement('canvas')), i.getContext('2d');
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = o);
    let i = null;
  },
  function (e, t, o) {
    'use strict';
    function i() {
      return c.rect(
        window.pageXOffset,
        window.pageYOffset,
        window.innerWidth,
        window.innerHeight,
      );
    }
    function a(e) {
      return e ? (e.jquery ? e[0] : e) : null;
    }
    function n(e) {
      const t = a(e);
      if (t && t.getBoundingClientRect) {
        const t = a(e).getBoundingClientRect();
        return c.rect(
          t.left + window.pageXOffset,
          t.top + window.pageYOffset,
          t.width,
          t.height,
        );
      }
    }
    function r(e, t) {
      if (e === c.left) return t.left;
      return e === c.right
        ? t.right
        : e === c.center
        ? t.left + t.w / 2
        : void 0;
    }
    function l(e, t) {
      if (e === c.top) return t.top;
      return e === c.bottom
        ? t.bottom
        : e === c.center
        ? t.top + t.h / 2
        : void 0;
    }
    function s(e = 0, t = 0, o = e, a = t) {
      const n = i();
      return c.rect(e, t, n.width - (e + o), n.height - (t + a));
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getScreenRect = i),
      (t.unwrapped = a),
      (t.elementRect = n),
      (t.relativePosition = function (e, t) {
        const o = n(e),
          i = n(t);
        return c.point(i.x - o.x, i.y - o.y);
      }),
      (t.constrain = function (e, t, o) {
        return Math.min(e, Math.max(t, o));
      }),
      (t.getAnchorPosition = function (e, t, o) {
        const i = n(e),
          a = t.x,
          s = t.y,
          d = (o && o.x) || 0,
          p = (o && o.y) || 0,
          u = r(a, i),
          g = l(s, i);
        return c.point(u + d, g + p);
      }),
      (t._getAnchorX = r),
      (t._getAnchorY = l),
      (t.mirrorAnchor = function (e, t) {
        if (t) {
          const o = t.x,
            i = t.y;
          return {
            x: -1 === e.indexOf('x') ? o : c.opposites[o] || o,
            y: -1 === e.indexOf('y') ? i : c.opposites[i] || i,
          };
        }
      }),
      (t.paddedRect = s),
      (t.areaNameToCoords = function (e) {
        if ('safe-window' === e) return s(35, 35, 35, 35);
        if ('main-viewport' === e) return s(35, 80, 223, 35);
        if ('whole-window' === e) return s();
        if (d.Lodash.isArray(e)) {
          const t = e[1][0] - e[0][0],
            o = e[1][1] - e[0][1];
          return c.rect(e[0][0], e[0][1], t, o);
        }
        if ('number' == typeof e.x && 'number' == typeof e.width) return e;
        throw new Error(`We don't know what to do with restriction ${e}`);
      });
    var d = o(0),
      p = o(88),
      c = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t.default = e), t;
      })(p);
  },
  function (e, t, o) {
    'use strict';
    (function (e) {
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = o(13),
        n = i(a);
      t.elementDeprecated = function (t, o) {
        if ('production' !== e.env) {
          const e = t.tagName,
            i = d.has(e),
            a = d.get(e) || [];
          a.push(t),
            i || s('Element deprecation warning:', e, o, ' - usage list:', a),
            d.set(e, a);
        }
      };
      var r = o(27),
        l = i(r);
      const s = (0, l.default)('rcp-fe-lol-uikit:warn');
      s.log = l.default.consoleWrap('warn');
      const d = new n.default();
    }.call(t, o(67)));
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(132),
      n = i(a),
      r = o(27),
      l = i(r);
    const s = (0, l.default)('rcp-fe-lol-uikit:warn');
    s.log = l.default.consoleWrap('warn');
    const d = 'fade-in',
      p = 'fade-out',
      c = 'interupt',
      u = new n.default(),
      g = new n.default(),
      m = new n.default();
    t.default = class {
      constructor(e) {
        (this._video = e),
          (this._signalEnd = null),
          (this._done = !1),
          (this._animate = null),
          (this._boundHandleEnded = this._handleEnded.bind(this));
      }
      play() {
        this._addEventHandlers(),
          this.canPlay()
            ? this._handleReadyToPlay()
            : u.addVideoHandler(this, this.canPlay, this._handleReadyToPlay);
      }
      setSignalEnd(e) {
        this._signalEnd = e;
      }
      canPlay() {
        const e = this._video;
        return !!e && 3 < e.readyState;
      }
      _handleReadyToPlay() {
        u.removeVideoHandler(this);
        const e = this._video;
        e.autoplay || e.play();
        const t = e.parentElement,
          o = t && t.hasAttribute(d) ? t.getAttribute(d) : 300;
        (this._animate = e.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: this._convertToNumber(o),
          fill: 'both',
        })),
          this._animate.play(),
          e.loop ||
            this._isEnding() ||
            g.addVideoHandler(this, this._isEnding, this._handleEnding),
          e.loop ||
            this._hasEnded() ||
            m.addVideoHandler(this, this._hasEnded, this._handleEnded);
      }
      _addEventHandlers() {
        const e = this._video;
        e.addEventListener('ended', this._boundHandleEnded),
          e.addEventListener('error', this._boundHandleEnded),
          e.addEventListener('stalled', this._boundHandleEnded),
          e.addEventListener(c, this._boundHandleEnded);
      }
      _removeEventHandlers() {
        const e = this._video;
        e.removeEventListener('ended', this._boundHandleEnded),
          e.removeEventListener('error', this._boundHandleEnded),
          e.removeEventListener('stalled', this._boundHandleEnded),
          e.removeEventListener(c, this._boundHandleEnded);
      }
      _isEnding() {
        const e = this._video;
        return (
          !!e &&
          this._signalEnd &&
          e.duration - this._signalEnd <= e.currentTime
        );
      }
      _hasEnded() {
        const e = this._video;
        return !!e && (e.duration - 0.2 <= e.currentTime || isNaN(e.duration));
      }
      _handleEnding() {
        g.removeVideoHandler(this),
          this._signalEnd &&
            (this._video.dispatchEvent(new Event('signalEnd')),
            (this._signalEnd = null));
      }
      _handleEnded(e) {
        if (
          e &&
          'error' === e.type &&
          e.target.error &&
          3 === e.target.error.code
        )
          return void s.log(
            'lol-uikit-video threw error event:',
            e.target.error,
          );
        m.removeVideoHandler(this);
        this._video && (this._handleEnding(), this._clearVideo());
      }
      _clearVideo() {
        u.removeVideoHandler(this),
          g.removeVideoHandler(this),
          m.removeVideoHandler(this);
        const e = this._video;
        if (!this._done) {
          if (!this._animate) return void this._removeVideo();
          e.dispatchEvent(new Event('resolve'));
          const t = e.parentElement,
            o = t && t.hasAttribute(p) ? t.getAttribute(p) : 300;
          'finished' === this._animate.playState
            ? ((this._animate = e.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: this._convertToNumber(o),
                delay: this._convertToNumber(o) / 2,
                fill: 'both',
              })),
              this._animate.play())
            : this._animate.reverse(),
            (this._animate.onfinish = this._removeVideo.bind(this)),
            (this._done = !0);
        }
      }
      _removeVideo() {
        const e = this._video;
        e &&
          (this._removeEventHandlers(),
          (e.src = ''),
          e.parentElement && e.parentElement.removeChild(e),
          e.dispatchEvent(new Event('remove')),
          (this._video = null));
      }
      _convertToNumber(e) {
        if (!isNaN(e)) return parseInt(e);
        s(
          '<lol-uikit-video> attributes fade-in and fade-out must be millisecond integer values without "ms" or "s".Support for time values is deprecated.',
        );
        const t = e.match(/(\d+)/g);
        return parseInt(t[0]);
      }
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      h.add(e), 0 === f && (f = setInterval(r, b));
    }
    function n(e) {
      h.delete(e), 0 === h.size && (clearInterval(f), (f = 0));
    }
    function r() {
      h.forEach((e) => e());
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = o(63),
      s = i(l),
      d = o(92),
      p = i(d),
      c = o(13),
      u = i(c),
      g = o(375),
      m = i(g);
    const h = new m.default(),
      b = 100;
    let f = 0;
    t.default = class {
      constructor() {
        (this._videoHandlers = new u.default()),
          (this._boundTick = this._tick.bind(this));
      }
      addVideoHandler(e, t, o) {
        this._videoHandlers.set(e, { checkFunction: t, callbackFunction: o }),
          this._ensureClockRegistration();
      }
      removeVideoHandler(e) {
        this._videoHandlers.delete(e), this._ensureClockRegistration();
      }
      _tick() {
        var e = !0,
          t = !1,
          o = void 0;
        try {
          for (
            var i = (0, s.default)(this._videoHandlers), a;
            !(e = (a = i.next()).done);
            e = !0
          ) {
            const e = a.value;
            var n = (0, p.default)(e, 2);
            const t = n[0];
            var r = n[1];
            const o = r.checkFunction,
              i = r.callbackFunction,
              l = o.call(t);
            l && (this._videoHandlers.delete(t), i.call(t));
          }
        } catch (e) {
          (t = !0), (o = e);
        } finally {
          try {
            !e && i.return && i.return();
          } finally {
            if (t) throw o;
          }
        }
        this._ensureClockRegistration();
      }
      _ensureClockRegistration() {
        this._videoHandlers.size ? a(this._boundTick) : n(this._boundTick);
      }
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(18),
      n = i(a),
      r = o(16),
      l = i(r),
      s = o(0),
      d = o(7),
      p = i(d),
      c = o(62);
    const u = 400,
      g = { SLOW: 7e3, NORMAL: 4e3, FAST: 2e3, INFINITE: -1 };
    class m {
      constructor() {
        (this.currentIndex = -1),
          (this.toastStack = []),
          (this.BASE_LAYER_CLASS = 'lol-uikit-toast-celebration-layer'),
          (this.layer = this._createLayer(this.BASE_LAYER_CLASS)),
          (this.type = 'Toast'),
          (this.fadeOutDuration = u),
          (this._boundOnClickEvent = this._handleClickEvent.bind(this)),
          (this._boundOnDialogDismissEvent =
            this._handleDialogDismissEvent.bind(this));
      }
      static playSound(e) {
        return (0, s.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-notifications')
          .playSound(e);
      }
      isExistingToastCelebration(e) {
        if (e.id) {
          const t = this.toastStack.find((t) => t.id === e.id);
          if (t) return !0;
        }
        return !1;
      }
      handleToastCelebration(e) {
        if (e.type && !this.isExistingToastCelebration(e)) {
          const t = e.type,
            o = e.data ? e.data : {},
            i = e.ComponentFactory.create(t, o);
          i &&
            ((0, n.default)(e, i),
            (this.fadeOutDuration = e.data.animationsEnabled ? u : 0),
            this._addToastCelebration(e));
        }
      }
      remove(e, t) {
        const o = 'managed';
        if ((this._removeToastCelebration(e, o), t)) {
          t({ type: o });
        }
      }
      _createLayer(e) {
        const t = document.createElement('div');
        return (
          t.classList.add(e),
          (t.style['z-index'] = c.Z_INDEX_CONSTANTS.CELEBRATIONS_TOAST),
          t
        );
      }
      _showLayer() {
        this.layer.classList.remove('hidden'), l.default.addLayer(this.layer);
      }
      _hideLayer() {
        this.layer.classList.add('hidden'),
          (this.layer.innerHTML = ''),
          l.default.removeLayer(this.layer);
      }
      _getPipsContainerElement() {
        let e = this.layer.querySelector('.toast-celebration-pips');
        return (
          e ||
            ((e = document.createElement('ul')),
            e.classList.add('toast-celebration-pips', 'hidden'),
            this.layer
              .querySelector('.toast-celebration-background')
              .appendChild(e)),
          e
        );
      }
      _addToastCelebration(e) {
        this.toastStack.push(e), this._updateToastStack();
      }
      _updateToastStack() {
        1 < this.toastStack.length
          ? (this._showPips(), this._addPip())
          : 1 === this.toastStack.length &&
            (this.toastStack[0].position &&
              this._setLayerPosition(this.toastStack[0].position),
            this._displayNextToastCelebration());
      }
      _endCelebrationCeremony() {
        (this.currentIndex = -1), (this.toastStack = []), this._hideLayer();
      }
      _showPips() {
        const e = this._getPipsContainerElement();
        e.classList.remove('hidden');
      }
      _addPip() {
        const e = document.createElement('li');
        this._getPipsContainerElement().appendChild(e);
      }
      _removePipAtIndexAtIndex(e) {
        const t = this._getPipsContainerElement().querySelectorAll('li')[e];
        t && t.remove();
      }
      _markPipAsViewed(e) {
        const t = this._getPipsContainerElement().querySelectorAll('li')[e];
        t && (t.classList.remove('selected'), t.classList.add('viewed'));
      }
      _markPipAsSelected(e) {
        const t = this._getPipsContainerElement().querySelectorAll('li')[e];
        t && t.classList.add('selected');
      }
      _handleClickEvent() {
        const e = this.toastStack[this.currentIndex];
        e && e.onClick && e.onClick(),
          this._removeCurrentToastCelebration('dismissed');
      }
      _handleDialogDismissEvent() {
        this._removeCurrentToastCelebration('dismissed');
      }
      _removeToastCelebration(e, t) {
        e.onRemove && e.onRemove({ type: t });
        const o = e.ComponentFactory.getDOMNode(e),
          i = this.toastStack.indexOf(o);
        if (this.layer.contains(o)) {
          window.clearTimeout(this.currentToastTimeout),
            o.removeEventListener('click', this._boundOnClickEvent),
            o.removeEventListener(
              'dialogFrameDismissed',
              this._boundOnDialogDismissEvent,
            );
          let e = o;
          this.toastStack.length <= this.currentIndex + 1 && (e = this.layer),
            e.classList.add('fade-out'),
            e.style.setProperty(
              'animation-duration',
              this.fadeOutDuration + 'ms',
            ),
            window.setTimeout(() => {
              e.classList.remove('fade-out'),
                this.layer.contains(o) && this.layer.removeChild(o),
                this.toastStack.length > this.currentIndex + 1
                  ? this._displayNextToastCelebration()
                  : this._endCelebrationCeremony();
            }, this.fadeOutDuration);
        } else
          i > this.currentIndex &&
            (this.notificationStack.splice(i, 1), this._removePipAtIndex(i));
      }
      _removeCurrentToastCelebration(e) {
        const t = this.toastStack[this.currentIndex];
        t && this._removeToastCelebration(t, e);
      }
      _updatePips() {
        for (let e = 0; e < this.toastStack.length; e++)
          this._addPip(), e < this.currentIndex && this._markPipAsViewed(e);
        this._markPipAsSelected(this.currentIndex),
          1 < this.toastStack.length && this._showPips();
      }
      _displayNextToastCelebration() {
        this._showLayer(), (this.currentIndex += 1);
        const e = this.toastStack[this.currentIndex];
        if (e) {
          const t = e.ComponentFactory.getDOMNode(e);
          this.layer.appendChild(t), this._updatePips();
          const o = t.querySelector('.toast-celebration-body').offsetHeight;
          (t.querySelector('.toast-celebration-background').style.height =
            o + 'px'),
            e.data &&
              (!e.data.isMuted && m.playSound(p.default.rewardToast),
              t.addEventListener('click', this._boundOnClickEvent),
              t.addEventListener(
                'dialogFrameDismissed',
                this._boundOnDialogDismissEvent,
              ),
              this._getTime(e) !== g.INFINITE &&
                (this.currentToastTimeout = window.setTimeout(() => {
                  this._removeToastCelebration(e, 'timeout');
                }, this._getTime(e))));
        }
      }
      _getTime(e) {
        const t = 'string' == typeof e.timing ? e.timing.toUpperCase() : '';
        return g[t] || g.NORMAL;
      }
      _setLayerPosition(e) {
        e.x &&
          e.y &&
          ((this.layer.style.left = e.x + 'px'),
          (this.layer.style.top = e.y + 'px'));
      }
    }
    t.default = new m();
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0),
      a = o(16),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a);
    t.default = new (class {
      constructor() {
        (this.TOAST_SPEED = {
          A_VERY_LONG_TIME: 300000,
          SLOW: 7e3,
          NORMAL: 4e3,
          FAST: 2e3,
        }),
          (this.TOAST_POSITION = { LEFT: 'left', RIGHT: 'right' }),
          (this.MAX_TOASTS = 2),
          (this.BASE_CLASS = 'lol-uikit-toast-layer'),
          (this.notificationStack = []),
          (this.layer = this._createLayer()),
          (this.type = 'Toast');
      }
      handleNotification(e) {
        if (e.type) {
          const t = e.type,
            o = e.data ? e.data : {},
            a = e.ComponentFactory.create(t, o);
          i.Lodash.isObject(a) && i.Lodash.assign(e, a),
            this.notificationStack.push(e),
            this.notificationStack.length <= this.MAX_TOASTS &&
              this._displayToastNotification(e);
        }
      }
      remove(e, t) {
        this._removeToastNotification(e, 'managed', t);
      }
      _createLayer() {
        const e = document.createElement('div');
        return e.classList.add(this.BASE_CLASS), e;
      }
      _removeToastNotification(e, t, o) {
        const a = { type: t };
        o && o(a);
        const n = e.ComponentFactory.getDOMNode(e);
        let r = Array.prototype.indexOf.call(this.layer.childNodes, n);
        0 <= r &&
          (0, i.jQuery)(this.layer.childNodes[r]).fadeOut(
            function () {
              (r = Array.prototype.indexOf.call(this.layer.childNodes, n)),
                this.notificationStack[r] &&
                  this.notificationStack[r].onRemove &&
                  this.notificationStack[r].onRemove(a),
                -1 !== r &&
                  (this.notificationStack.splice(r, 1),
                  this.layer.removeChild(this.layer.childNodes[r])),
                this.notificationStack.length >= this.MAX_TOASTS &&
                  this._displayToastNotification(
                    this.notificationStack[this.MAX_TOASTS - 1],
                  ),
                0 === this.notificationStack.length && this._hideLayer();
            }.bind(this),
          );
      }
      _displayToastNotification(e) {
        1 === this.notificationStack.length && this._showLayer();
        const t = e.ComponentFactory.getDOMNode(e);
        (0, i.jQuery)(this.layer).addClass(this._setPosition(e)),
          (0, i.jQuery)(this.layer).append(t),
          (0, i.jQuery)(t).fadeIn(),
          e.data && e.data.dismissable
            ? (t.addEventListener('dialogFrameDismissed', () => {
                this._removeToastNotification(e, 'dismissed');
              }),
              window.setTimeout(() => {
                this._removeToastNotification(e, 'timeout');
              }, this._getTime(e)))
            : window.setTimeout(() => {
                this._removeToastNotification(e, 'timeout');
              }, this._getTime(e));
      }
      _showLayer() {
        n.default.addLayer(this.layer);
      }
      _hideLayer() {
        n.default.removeLayer(this.layer);
      }
      _getTime(e) {
        const t = i.Lodash.isString(e.timing) ? e.timing.toUpperCase() : '';
        return this.TOAST_SPEED[t] || this.TOAST_SPEED.NORMAL;
      }
      _setPosition(e) {
        const t = i.Lodash.isString(e.position) ? e.position.toUpperCase() : '';
        return (
          this.layer.classList.remove(
            this.TOAST_POSITION.LEFT,
            this.TOAST_POSITION.RIGHT,
          ),
          this.TOAST_POSITION[t] || this.TOAST_POSITION.LEFT
        );
      }
    })();
  },
  function (e, t, o) {
    e.exports = { default: o(394), __esModule: !0 };
  },
  function (e, t, o) {
    t.f = o(6);
  },
  function (e, t, o) {
    var i = o(28),
      a = o(138).f,
      n = {}.toString,
      r =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [],
      l = function (e) {
        try {
          return a(e);
        } catch (t) {
          return r.slice();
        }
      };
    e.exports.f = function (e) {
      return r && '[object Window]' == n.call(e) ? l(e) : a(i(e));
    };
  },
  function (e, t, o) {
    var i = o(96),
      a = o(74).concat('length', 'prototype');
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return i(e, a);
      };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(408),
      n = i(a),
      r = o(409),
      l = i(r),
      s = o(90),
      d = i(s);
    t.default = new (class {
      constructor() {
        const e = 'undefined' == typeof window.riotInvoke;
        this.WindowClass = e ? l.default : n.default;
      }
      create(e, t, o, i) {
        const a = this.WindowClass,
          n = new a(e, t, void 0, o, i),
          r = n.getNativeWindow();
        return (
          r &&
            r.requestAnimationFrame &&
            r.requestAnimationFrame(() =>
              n.linkStyles('/fe/lol-uikit/main.css'),
            ),
          n
        );
      }
      decorateNative(e) {
        const t = this.WindowClass,
          o = new t(null, e.name || 'decorated-window', e);
        return o;
      }
      getScreenInfo() {
        return d.default.getScreenInfo();
      }
      getScreenRect() {
        return d.default.getScreenRect();
      }
      getScreenAvailableRect() {
        return d.default.getScreenAvailableRect();
      }
      getWindowRect() {
        return d.default.getWindowRect();
      }
      getValidWindowSizes() {
        return d.default.getValidWindowSizes();
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = o(0),
      n = i(a),
      r = o(11),
      l = i(r);
    o(147);
    const s = document.currentScript.ownerDocument,
      d = window.getPluginAnnounceEventName('rcp-fe-lol-uikit');
    s.addEventListener(
      d,
      function (e) {
        const t = e.registrationHandler;
        l.default.set(s),
          t(function (e) {
            return n.default
              .init(e)
              .then(() =>
                n.default.add({
                  debug: (e) => e.get('rcp-fe-common-libs').getDebug(),
                  Lodash: (e) => e.get('rcp-fe-common-libs').getLodash(4),
                  jQuery: (e) => e.get('rcp-fe-common-libs').getJquery(2),
                  Lottie: (e) => e.get('rcp-fe-common-libs').getLottie(1),
                  componentFactory: (e) =>
                    e.get('rcp-fe-common-libs').getComponentFactory(1),
                  dataBinding: (e) =>
                    e
                      .get('rcp-fe-common-libs')
                      .getDataBinding('rcp-fe-lol-uikit'),
                  gsap: (e) => e.get('rcp-fe-common-libs').getGsap('1'),
                  socket: (e) => e.getSocket(),
                  htmlSanitizer: (e) =>
                    e.get('rcp-fe-common-libs').getHtmlSanitizer(1),
                  Audio: (e) => e.get('rcp-fe-audio'),
                  webComponents: (e) =>
                    e.get('rcp-fe-common-libs').getWebComponents(s),
                }),
              )
              .then(() => {
                n.default.debug.enable('lol-uikit:*');
                const e = n.default.dataBinding,
                  t = n.default.socket;
                (n.default.gameDataBinding = e('/lol-game-data', t)),
                  (n.default.gameFlowBinding = e('/lol-gameflow', t));
                const i = o(94).default;
                i.registerCustomElements(), i.registerComponents();
                const a = o(390).default;
                return a;
              });
          });
      },
      { once: !0 },
    );
  },
  function (e, t, o) {
    (function (i) {
      function a(e) {
        var o = this.useColors;
        if (
          ((e[0] =
            (o ? '%c' : '') +
            this.namespace +
            (o ? ' %c' : ' ') +
            e[0] +
            (o ? '%c ' : ' ') +
            '+' +
            t.humanize(this.diff)),
          !!o)
        ) {
          var i = 'color: ' + this.color;
          e.splice(1, 0, i, 'color: inherit');
          var a = 0,
            n = 0;
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            '%%' === e || (a++, '%c' === e && (n = a));
          }),
            e.splice(n, 0, i);
        }
      }
      function n(e) {
        try {
          null == e ? t.storage.removeItem('debug') : (t.storage.debug = e);
        } catch (t) {}
      }
      function r() {
        var e;
        try {
          e = t.storage.debug;
        } catch (t) {}
        return (
          !e && 'undefined' != typeof i && 'env' in i && (e = i.env.DEBUG), e
        );
      }
      (t = e.exports = o(142)),
        (t.log = function () {
          return (
            'object' == typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }),
        (t.formatArgs = a),
        (t.save = n),
        (t.load = r),
        (t.useColors = function () {
          return (
            !!(
              'undefined' != typeof window &&
              window.process &&
              'renderer' === window.process.type
            ) ||
            ('undefined' != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              31 <= parseInt(RegExp.$1, 10)) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          'undefined' != typeof chrome && 'undefined' != typeof chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (t) {}
              })()),
        (t.colors = [
          'lightseagreen',
          'forestgreen',
          'goldenrod',
          'dodgerblue',
          'darkorchid',
          'crimson',
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message;
          }
        }),
        t.enable(r());
    }.call(t, o(67)));
  },
  function (e, t, o) {
    function i(e) {
      var o = 0,
        a;
      for (a in e) (o = (o << 5) - o + e.charCodeAt(a)), (o |= 0);
      return t.colors[Math.abs(o) % t.colors.length];
    }
    function a(e) {
      function o() {
        if (o.enabled) {
          var e = o,
            a = +new Date(),
            n = a - (s || a);
          (e.diff = n), (e.prev = s), (e.curr = a), (s = a);
          for (var r = Array(arguments.length), l = 0; l < r.length; l++)
            r[l] = arguments[l];
          (r[0] = t.coerce(r[0])), 'string' != typeof r[0] && r.unshift('%O');
          var i = 0;
          (r[0] = r[0].replace(/%([a-zA-Z%])/g, function (o, a) {
            if ('%%' === o) return o;
            i++;
            var n = t.formatters[a];
            if ('function' == typeof n) {
              var l = r[i];
              (o = n.call(e, l)), r.splice(i, 1), i--;
            }
            return o;
          })),
            t.formatArgs.call(e, r);
          var d = o.log || t.log || console.log.bind(console);
          d.apply(e, r);
        }
      }
      return (
        (o.namespace = e),
        (o.enabled = t.enabled(e)),
        (o.useColors = t.useColors()),
        (o.color = i(e)),
        'function' == typeof t.init && t.init(o),
        o
      );
    }
    function n(e) {
      t.save(e), (t.names = []), (t.skips = []);
      for (
        var o = ('string' == typeof e ? e : '').split(/[\s,]+/),
          a = o.length,
          n = 0;
        n < a;
        n++
      )
        o[n] &&
          ((e = o[n].replace(/\*/g, '.*?')),
          '-' === e[0]
            ? t.skips.push(new RegExp('^' + e.substr(1) + '$'))
            : t.names.push(new RegExp('^' + e + '$')));
    }
    function r() {
      t.enable('');
    }
    function l(e) {
      var o, i;
      for (o = 0, i = t.skips.length; o < i; o++)
        if (t.skips[o].test(e)) return !1;
      for (o = 0, i = t.names.length; o < i; o++)
        if (t.names[o].test(e)) return !0;
      return !1;
    }
    (t = e.exports = a.debug = a['default'] = a),
      (t.coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
      (t.disable = r),
      (t.enable = n),
      (t.enabled = l),
      (t.humanize = o(143)),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
    var s;
  },
  function (e) {
    function t(e) {
      if (((e += ''), !(100 < e.length))) {
        var t =
          /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            e,
          );
        if (t) {
          var o = parseFloat(t[1]),
            i = (t[2] || 'ms').toLowerCase();
          return 'years' === i ||
            'year' === i ||
            'yrs' === i ||
            'yr' === i ||
            'y' === i
            ? o * u
            : 'weeks' === i || 'week' === i || 'w' === i
            ? o * d
            : 'days' === i || 'day' === i || 'd' === i
            ? o * c
            : 'hours' === i ||
              'hour' === i ||
              'hrs' === i ||
              'hr' === i ||
              'h' === i
            ? o * p
            : 'minutes' === i ||
              'minute' === i ||
              'mins' === i ||
              'min' === i ||
              'm' === i
            ? o * s
            : 'seconds' === i ||
              'second' === i ||
              'secs' === i ||
              'sec' === i ||
              's' === i
            ? o * l
            : 'milliseconds' === i ||
              'millisecond' === i ||
              'msecs' === i ||
              'msec' === i ||
              'ms' === i
            ? o
            : void 0;
        }
      }
    }
    function o(e) {
      var t = n(e);
      return t >= c
        ? r(e / c) + 'd'
        : t >= p
        ? r(e / p) + 'h'
        : t >= s
        ? r(e / s) + 'm'
        : t >= l
        ? r(e / l) + 's'
        : e + 'ms';
    }
    function i(e) {
      var t = n(e);
      return t >= c
        ? a(e, t, c, 'day')
        : t >= p
        ? a(e, t, p, 'hour')
        : t >= s
        ? a(e, t, s, 'minute')
        : t >= l
        ? a(e, t, l, 'second')
        : e + ' ms';
    }
    function a(e, t, o, i) {
      return r(e / o) + ' ' + i + (t >= 1.5 * o ? 's' : '');
    }
    var n = Math.abs,
      r = Math.round,
      l = 1e3,
      s = 60 * l,
      p = 60 * s,
      c = 24 * p,
      d = 7 * c,
      u = 365.25 * c;
    e.exports = function (e, a) {
      a = a || {};
      var n = typeof e;
      if ('string' == n && 0 < e.length) return t(e);
      if ('number' == n && !1 === isNaN(e)) return a.long ? i(e) : o(e);
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(e),
      );
    };
  },
  function (e, t, o) {
    (function (e) {
      function a(e, o) {
        var a = { seen: [], stylize: n };
        return (
          3 <= arguments.length && (a.depth = arguments[2]),
          4 <= arguments.length && (a.colors = arguments[3]),
          m(o) ? (a.showHidden = o) : o && t._extend(a, o),
          f(a.showHidden) && (a.showHidden = !1),
          f(a.depth) && (a.depth = 2),
          f(a.colors) && (a.colors = !1),
          f(a.customInspect) && (a.customInspect = !0),
          a.colors && (a.stylize = i),
          l(a, e, a.depth)
        );
      }
      function i(e, t) {
        var o = a.styles[t];
        return o
          ? '\x1B[' + a.colors[o][0] + 'm' + e + '\x1B[' + a.colors[o][1] + 'm'
          : e;
      }
      function n(e) {
        return e;
      }
      function r(e) {
        var t = {};
        return (
          e.forEach(function (e) {
            t[e] = !0;
          }),
          t
        );
      }
      function l(e, o, i) {
        if (
          e.customInspect &&
          o &&
          w(o.inspect) &&
          o.inspect !== t.inspect &&
          !(o.constructor && o.constructor.prototype === o)
        ) {
          var a = o.inspect(i, e);
          return y(a) || (a = l(e, a, i)), a;
        }
        var m = s(e, o);
        if (m) return m;
        var h = Object.keys(o),
          b = r(h);
        if (
          (e.showHidden && (h = Object.getOwnPropertyNames(o)),
          A(o) && (0 <= h.indexOf('message') || 0 <= h.indexOf('description')))
        )
          return d(o);
        if (0 === h.length) {
          if (w(o)) {
            var f = o.name ? ': ' + o.name : '';
            return e.stylize('[Function' + f + ']', 'special');
          }
          if (v(o))
            return e.stylize(RegExp.prototype.toString.call(o), 'regexp');
          if (x(o)) return e.stylize(Date.prototype.toString.call(o), 'date');
          if (A(o)) return d(o);
        }
        var k = '',
          _ = !1,
          E = ['{', '}'];
        if ((g(o) && ((_ = !0), (E = ['[', ']'])), w(o))) {
          var C = o.name ? ': ' + o.name : '';
          k = ' [Function' + C + ']';
        }
        if (
          (v(o) && (k = ' ' + RegExp.prototype.toString.call(o)),
          x(o) && (k = ' ' + Date.prototype.toUTCString.call(o)),
          A(o) && (k = ' ' + d(o)),
          0 === h.length && (!_ || 0 == o.length))
        )
          return E[0] + k + E[1];
        if (0 > i)
          return v(o)
            ? e.stylize(RegExp.prototype.toString.call(o), 'regexp')
            : e.stylize('[Object]', 'special');
        e.seen.push(o);
        var n;
        return (
          (n = _
            ? p(e, o, i, b, h)
            : h.map(function (t) {
                return c(e, o, i, b, t, _);
              })),
          e.seen.pop(),
          u(n, k, E)
        );
      }
      function s(e, t) {
        if (f(t)) return e.stylize('undefined', 'undefined');
        if (y(t)) {
          var o =
            "'" +
            JSON.stringify(t)
              .replace(/^"|"$/g, '')
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"') +
            "'";
          return e.stylize(o, 'string');
        }
        return b(t)
          ? e.stylize('' + t, 'number')
          : m(t)
          ? e.stylize('' + t, 'boolean')
          : h(t)
          ? e.stylize('null', 'null')
          : void 0;
      }
      function d(e) {
        return '[' + Error.prototype.toString.call(e) + ']';
      }
      function p(e, t, o, a, n) {
        for (var r = [], s = 0, i = t.length; s < i; ++s)
          S(t, s + '') ? r.push(c(e, t, o, a, s + '', !0)) : r.push('');
        return (
          n.forEach(function (i) {
            i.match(/^\d+$/) || r.push(c(e, t, o, a, i, !0));
          }),
          r
        );
      }
      function c(e, t, o, i, a, n) {
        var r, s, d;
        if (
          ((d = Object.getOwnPropertyDescriptor(t, a) || { value: t[a] }),
          d.get
            ? d.set
              ? (s = e.stylize('[Getter/Setter]', 'special'))
              : (s = e.stylize('[Getter]', 'special'))
            : d.set && (s = e.stylize('[Setter]', 'special')),
          S(i, a) || (r = '[' + a + ']'),
          s ||
            (0 > e.seen.indexOf(d.value)
              ? ((s = h(o) ? l(e, d.value, null) : l(e, d.value, o - 1)),
                -1 < s.indexOf('\n') &&
                  (n
                    ? (s = s
                        .split('\n')
                        .map(function (e) {
                          return '  ' + e;
                        })
                        .join('\n')
                        .substr(2))
                    : (s =
                        '\n' +
                        s
                          .split('\n')
                          .map(function (e) {
                            return '   ' + e;
                          })
                          .join('\n'))))
              : (s = e.stylize('[Circular]', 'special'))),
          f(r))
        ) {
          if (n && a.match(/^\d+$/)) return s;
          (r = JSON.stringify('' + a)),
            r.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((r = r.substr(1, r.length - 2)), (r = e.stylize(r, 'name')))
              : ((r = r
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (r = e.stylize(r, 'string')));
        }
        return r + ': ' + s;
      }
      function u(e, t, o) {
        var i = 0,
          a = e.reduce(function (e, t) {
            return (
              i++,
              0 <= t.indexOf('\n') && i++,
              e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
            );
          }, 0);
        return 60 < a
          ? o[0] +
              ('' === t ? '' : t + '\n ') +
              ' ' +
              e.join(',\n  ') +
              ' ' +
              o[1]
          : o[0] + t + ' ' + e.join(', ') + ' ' + o[1];
      }
      function g(e) {
        return Array.isArray(e);
      }
      function m(e) {
        return 'boolean' == typeof e;
      }
      function h(e) {
        return null === e;
      }
      function b(e) {
        return 'number' == typeof e;
      }
      function y(e) {
        return 'string' == typeof e;
      }
      function f(e) {
        return void 0 === e;
      }
      function v(e) {
        return k(e) && '[object RegExp]' === _(e);
      }
      function k(e) {
        return 'object' == typeof e && null !== e;
      }
      function x(e) {
        return k(e) && '[object Date]' === _(e);
      }
      function A(t) {
        return k(t) && ('[object Error]' === _(t) || t instanceof Error);
      }
      function w(e) {
        return 'function' == typeof e;
      }
      function _(e) {
        return Object.prototype.toString.call(e);
      }
      function E(e) {
        return 10 > e ? '0' + e.toString(10) : e.toString(10);
      }
      function C() {
        var e = new Date(),
          t = [E(e.getHours()), E(e.getMinutes()), E(e.getSeconds())].join(':');
        return [e.getDate(), O[e.getMonth()], t].join(' ');
      }
      function S(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function T(e, t) {
        if (!e) {
          var o = new Error('Promise was rejected with a falsy value');
          (o.reason = e), (e = o);
        }
        return t(e);
      }
      var L =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), o = {}, a = 0; a < t.length; a++)
              o[t[a]] = Object.getOwnPropertyDescriptor(e, t[a]);
            return o;
          },
        M = /%[sdj%]/g;
      (t.format = function (e) {
        if (!y(e)) {
          for (var t = [], o = 0; o < arguments.length; o++)
            t.push(a(arguments[o]));
          return t.join(' ');
        }
        for (
          var o = 1,
            i = arguments,
            n = i.length,
            r = (e + '').replace(M, function (e) {
              if ('%%' === e) return '%';
              if (o >= n) return e;
              switch (e) {
                case '%s':
                  return i[o++] + '';
                case '%d':
                  return +i[o++];
                case '%j':
                  try {
                    return JSON.stringify(i[o++]);
                  } catch (e) {
                    return '[Circular]';
                  }
                default:
                  return e;
              }
            }),
            l = i[o];
          o < n;
          l = i[++o]
        )
          r += h(l) || !k(l) ? ' ' + l : ' ' + a(l);
        return r;
      }),
        (t.deprecate = function (o, i) {
          function a() {
            if (!n) {
              if (e.throwDeprecation) throw new Error(i);
              else e.traceDeprecation ? console.trace(i) : console.error(i);
              n = !0;
            }
            return o.apply(this, arguments);
          }
          if ('undefined' != typeof e && !0 === e.noDeprecation) return o;
          if ('undefined' == typeof e)
            return function () {
              return t.deprecate(o, i).apply(this, arguments);
            };
          var n = !1;
          return a;
        });
      var N = {},
        P;
      (t.debuglog = function (o) {
        if (
          (f(P) && (P = e.env.NODE_DEBUG || ''), (o = o.toUpperCase()), !N[o])
        )
          if (new RegExp('\\b' + o + '\\b', 'i').test(P)) {
            var i = e.pid;
            N[o] = function () {
              var e = t.format.apply(t, arguments);
              console.error('%s %d: %s', o, i, e);
            };
          } else N[o] = function () {};
        return N[o];
      }),
        (t.inspect = a),
        (a.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (a.styles = {
          special: 'cyan',
          number: 'yellow',
          boolean: 'yellow',
          undefined: 'grey',
          null: 'bold',
          string: 'green',
          date: 'magenta',
          regexp: 'red',
        }),
        (t.isArray = g),
        (t.isBoolean = m),
        (t.isNull = h),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = b),
        (t.isString = y),
        (t.isSymbol = function (e) {
          return 'symbol' == typeof e;
        }),
        (t.isUndefined = f),
        (t.isRegExp = v),
        (t.isObject = k),
        (t.isDate = x),
        (t.isError = A),
        (t.isFunction = w),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            'boolean' == typeof e ||
            'number' == typeof e ||
            'string' == typeof e ||
            'symbol' == typeof e ||
            'undefined' == typeof e
          );
        }),
        (t.isBuffer = o(145));
      var O = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      (t.log = function () {
        console.log('%s - %s', C(), t.format.apply(t, arguments));
      }),
        (t.inherits = o(146)),
        (t._extend = function (e, t) {
          if (!t || !k(t)) return e;
          for (var o = Object.keys(t), a = o.length; a--; ) e[o[a]] = t[o[a]];
          return e;
        });
      var I =
        'undefined' == typeof Symbol ? void 0 : Symbol('util.promisify.custom');
      (t.promisify = function (e) {
        function t() {
          for (
            var o = new Promise(function (e, t) {
                (i = e), (r = t);
              }),
              a = [],
              n = 0,
              i,
              r;
            n < arguments.length;
            n++
          )
            a.push(arguments[n]);
          a.push(function (e, t) {
            e ? r(e) : i(t);
          });
          try {
            e.apply(this, a);
          } catch (e) {
            r(e);
          }
          return o;
        }
        if ('function' != typeof e)
          throw new TypeError(
            'The "original" argument must be of type Function',
          );
        if (I && e[I]) {
          var t = e[I];
          if ('function' != typeof t)
            throw new TypeError(
              'The "util.promisify.custom" argument must be of type Function',
            );
          return (
            Object.defineProperty(t, I, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          );
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          I &&
            Object.defineProperty(t, I, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, L(e))
        );
      }),
        (t.promisify.custom = I),
        (t.callbackify = function (t) {
          function o() {
            for (var o = [], a = 0; a < arguments.length; a++)
              o.push(arguments[a]);
            var i = o.pop();
            if ('function' != typeof i)
              throw new TypeError('The last argument must be of type Function');
            var n = this,
              r = function () {
                return i.apply(n, arguments);
              };
            t.apply(this, o).then(
              function (t) {
                e.nextTick(r, null, t);
              },
              function (t) {
                e.nextTick(T, t, r);
              },
            );
          }
          if ('function' != typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function',
            );
          return (
            Object.setPrototypeOf(o, Object.getPrototypeOf(t)),
            Object.defineProperties(o, L(t)),
            o
          );
        });
    }.call(t, o(67)));
  },
  function (e) {
    e.exports = function (e) {
      return (
        e &&
        'object' == typeof e &&
        'function' == typeof e.copy &&
        'function' == typeof e.fill &&
        'function' == typeof e.readUInt8
      );
    };
  },
  function (e) {
    e.exports =
      'function' == typeof Object.create
        ? function (e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          }
        : function (e, t) {
            e.super_ = t;
            var o = function () {};
            (o.prototype = t.prototype),
              (e.prototype = new o()),
              (e.prototype.constructor = e);
          };
  },
  function () {},
  function (e, t, o) {
    e.exports = { default: o(149), __esModule: !0 };
  },
  function (e, t, o) {
    o(150);
    var i = o(2).Object;
    e.exports = function (e, t) {
      return i.create(e, t);
    };
  },
  function (e, t, o) {
    var i = o(3);
    i(i.S, 'Object', { create: o(50) });
  },
  function (e, t, o) {
    var a = o(14),
      n = o(15),
      r = o(42);
    e.exports = o(17)
      ? Object.defineProperties
      : function (e, t) {
          n(e);
          for (var o = r(t), l = o.length, s = 0, i; l > s; )
            a.f(e, (i = o[s++]), t[i]);
          return e;
        };
  },
  function (e, t, o) {
    var i = o(28),
      a = o(52),
      n = o(153);
    e.exports = function (e) {
      return function (t, o, r) {
        var l = i(t),
          s = a(l.length),
          d = n(r, s),
          p;
        if (e && o != o) {
          for (; s > d; ) if (((p = l[d++]), p != p)) return !0;
        } else
          for (; s > d; d++)
            if ((e || d in l) && l[d] === o) return e || d || 0;
        return !e && -1;
      };
    };
  },
  function (e, t, o) {
    var i = o(71),
      a = Math.max,
      n = Math.min;
    e.exports = function (e, t) {
      return (e = i(e)), 0 > e ? a(e + t, 0) : n(e, t);
    };
  },
  function (e) {
    function t(e) {
      return n.has(e) || n.set(e, {}), n.get(e);
    }
    function o(e) {
      return null !== e && 'object' == typeof e;
    }
    function i(e) {
      return o(e) && e instanceof HTMLElement && 1 === e.nodeType;
    }
    const a = 'use_public_only',
      n = new WeakMap(),
      r = function () {
        this.factories = {};
      };
    (r.prototype.setFactory = function (e, t) {
      if (o(e)) {
        const o = 'Component';
        let i = e.name ? e.name : Object.keys(e)[0];
        (t = e.create ? e.create : e[i]),
          -1 !== i.indexOf(o, i.length - o.length) &&
            (i = i.substring(0, i.length - o.length)),
          (e = i);
      } else if ('function' == typeof e) {
        throw new Error(
          'ComponentFactory.setFactory: type needs to be an object or a string, not a function!',
        );
      }
      this.factories[e] = t;
    }),
      (r.prototype.setPrivateFactory = function (e, o) {
        const i = t(this);
        i[e] = o;
      }),
      (r.prototype.getFactory = function (e) {
        const t = this.getPublicFactory(e);
        return t ? t : this.getPrivateFactory(e);
      }),
      (r.prototype.getPublicFactory = function (e) {
        e instanceof Object && (e = e.type);
        const t = this.factories[e];
        return t;
      }),
      (r.prototype.getPrivateFactory = function (e) {
        e instanceof Object && (e = e.type);
        const o = t(this);
        return o[e];
      }),
      (r.prototype.getFactories = function () {
        return Object.assign({}, this.factories);
      }),
      (r.prototype.setUpstreamComponentFactory = function (e) {
        const t = e.getFactories();
        Object.keys(t).forEach(
          function (e) {
            this.setPrivateFactory(e, t[e]);
          }.bind(this),
        );
      }),
      (r.prototype.create = function (e, t, o) {
        if ('string' == typeof e) return this.createByName(e, t, o);
        if ('function' == typeof e) return e(t);
        if (i(e) || e.domNode) return e;
        const a = this.create(e.type, t ? t : e.data);
        return (
          (e.domNode = this.getDOMNode(a)),
          e.classNames &&
            e.classNames.forEach(function (t) {
              e.domNode.classList.add(t);
            }),
          a
        );
      }),
      (r.prototype.createByName = function (e, t, o) {
        const i = this.findFactory(e, o);
        return i ? this.create(i, t) : this.buildDummy(e);
      }),
      (r.prototype.findFactory = function (e, t) {
        return t === a ? this.getPublicFactory(e) : this.getFactory(e);
      }),
      (r.prototype.buildDummy = function (e) {
        let t = document.createElement('div');
        return (
          (t.innerHTML = 'not found: ' + e),
          1 === t.children.length && (t = t.children[0]),
          t
        );
      }),
      (r.prototype.getDOMNode = function (e) {
        if (e)
          return e instanceof HTMLElement || e instanceof Node
            ? e
            : e instanceof Object
            ? e.domNode
            : void 0;
      }),
      (r.prototype.exportable = function () {
        const e = this;
        return {
          create: function (t, o) {
            return e.create(t, o, a);
          },
          getFactories: function () {
            return e.getFactories.apply(e, arguments);
          },
        };
      }),
      (r.prototype.reset = function () {
        this.factories = {};
      }),
      (e.exports = r);
  },
  function (e, t, o) {
    function i(e) {
      return o(a(e));
    }
    function a(e) {
      var t = n[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t;
    }
    var n = {
      './animated-arrow-overlay/index.js': 156,
      './animated-border-overlay/index.js': 159,
      './arrow-button/index.js': 162,
      './backdrop-magic/index.js': 187,
      './behavior-media/index.js': 190,
      './champion-mastery-banner/index.js': 208,
      './champion-mastery-tooltip/index.js': 211,
      './champion-thumbnail/index.js': 214,
      './close-button/index.js': 217,
      './comet-border/index.js': 220,
      './condition-all/index.js': 114,
      './condition-any/index.js': 224,
      './condition-delay/index.js': 226,
      './condition-media/index.js': 228,
      './condition-parameter/index.js': 230,
      './content-block/index.js': 232,
      './context-menu/index.js': 115,
      './dialog-frame/index.js': 238,
      './dropdown-optgroup/index.js': 241,
      './dropdown-option/index.js': 116,
      './flat-button-group/index.js': 246,
      './flat-button-secondary/index.js': 249,
      './flat-button/index.js': 98,
      './flat-checkbox/index.js': 252,
      './flat-dropdown/index.js': 259,
      './flat-input/index.js': 264,
      './flat-textarea/index.js': 266,
      './flyout-frame/index.js': 269,
      './framed-dropdown/index.js': 274,
      './full-page-backdrop/index.js': 277,
      './game-data-markup/index.js': 280,
      './info-icon/index.js': 284,
      './lottie/index.js': 288,
      './navigation-bar/index.js': 290,
      './navigation-item/index.js': 293,
      './parallax-background/Animation.js': 123,
      './parallax-background/Layer.js': 124,
      './parallax-background/Parallax.js': 125,
      './parallax-background/index.js': 296,
      './perfect-scrollable/index.js': 299,
      './primary-magic-button/index.js': 319,
      './purchase-button/index.js': 322,
      './radial-progress/index.js': 325,
      './radial-progress/polygon-generator.js': 127,
      './radio-input-option/index.js': 332,
      './radio-input/index.js': 336,
      './resizing-text-field/canvas-singleton.js': 128,
      './resizing-text-field/index.js': 339,
      './scrollable/index.js': 345,
      './section-controller/index.js': 348,
      './slider/index.js': 350,
      './state-machine/index.js': 58,
      './subdoc-proxy.js': 11,
      './switch/index.js': 83,
      './themed-level-ring/index.js': 359,
      './tooltip/index.js': 362,
      './tooltipped-keyword/index.js': 365,
      './transition/index.js': 367,
      './uikit-video/index.js': 85,
      './video-state-machine/index.js': 369,
      './video/index.js': 371,
      './video/state-observer.js': 132,
      './video/video-handler.js': 131,
    };
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 155);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    const a = 'single-carot',
      n = 'state',
      r = 'click',
      l = 'hover',
      s = 'init';
    class d extends i.webComponents.ShadowElement {
      static get observedAttributes() {
        return [];
      }
      templateMarkup() {
        return o(157);
      }
      stylesheetMarkup() {
        return o(158);
      }
      constructor() {
        super(), this._stateTimeout;
      }
      connectedCallback() {
        super.connectedCallback(),
          this.redrawPath(),
          this._processStateChange();
      }
      attributeChangedCallback(e) {
        e === n ? this._processStateChange() : e == a && this.redrawPath();
      }
      width() {
        return this.offsetWidth;
      }
      redrawPath() {
        const e = this.shadowRoot,
          t = e.querySelector('#scalable-path');
        t.setAttribute('d', this._getPathString());
      }
      _getPathString() {
        const e = this.width() - 31,
          t = this.getAttribute(a),
          o = this.hasAttribute(a) && 'false' !== t;
        let i = `M0, 0 h${e} l15 16 l-15 16 H0 a21.461 21.461,0,0,0,8.4 -16,21.461 21.461,0,0,0,-8.4 -16 Z`;
        return o && (i = `M0, 0 h${e} l15 16 l-15 16 H0 0,0 Z`), i;
      }
      _processStateChange() {
        if (!this.hasAttribute('prevent-animation'))
          switch ((clearTimeout(this._stateTimeout), this.getAttribute(n))) {
            case s: {
              this._toggleAnimationClass(s),
                (this._stateTimeout = setTimeout(() => {
                  this._setToStatic();
                }, '750'));
              break;
            }
            case r: {
              this._toggleAnimationClass(r),
                (this._stateTimeout = setTimeout(() => {
                  this._setToStatic();
                }, '1500'));
              break;
            }
            case l: {
              this._toggleAnimationClass(l);
              break;
            }
            default:
              this._setToStatic();
          }
      }
      _toggleAnimationClass(e) {
        const t = this.shadowRoot,
          o = t.querySelector('#animated-arrow-overlay-wrapper');
        (o.className = ''), e && o.classList.add(e);
      }
      _setToStatic() {
        clearTimeout(this._stateTimeout),
          this._toggleAnimationClass(),
          (this._stateTimeout = setTimeout(() => {
            this._toggleAnimationClass('static');
          }, '500'));
      }
    }
    (d.tagName = 'lol-uikit-animated-arrow-overlay'), (t.default = d);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div id="animated-arrow-overlay-wrapper">\r\n    <svg id="path-defs" class="svg-container"\r\n      xmlns="http://www.w3.org/2000/svg"\r\n      xmlns:xlink="http://www.w3.org/1999/xlink"\r\n      x="0" y="0" width="100%" height="100%">\r\n\r\n      <defs>\r\n        <pattern id="noise-map" x="0" y="0" width="400" height="40" patternUnits="userSpaceOnUse">\r\n          <image xlink:href="/fe/lol-uikit/images/noise-tile-alpha-tint-large.png" x="0" y="0" width="400" height="40"></image>\r\n          <animate dur="20s" repeatCount="indefinite" attributeName="y" values="0;20;0"/>\r\n          <animate dur="40s" repeatCount="indefinite" attributeName="x" values="0;50;0;-50;0"/>\r\n        </pattern>\r\n        <pattern id="noise-map-offset" x="25%" y="0" width="400" height="40" patternUnits="userSpaceOnUse">\r\n          <image xlink:href="/fe/lol-uikit/images/noise-tile-alpha-tint-large.png" x="0" y="0" width="400" height="40"></image>\r\n          <animate dur="20s" repeatCount="indefinite" attributeName="y" values="0;20;0"/>\r\n          <animate dur="40s" repeatCount="indefinite" attributeName="x" values="25;75;25;-25;25"/>\r\n        </pattern>\r\n        <path id="scalable-path"\r\n          d="M0, 0" fill="none" stroke="#fff" stroke-width="2"/>\r\n        <mask id="mask-dashed-border" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">\r\n          <use xlink:href="#scalable-path" stroke-width="4" class="dashed-border"/>\r\n        </mask>\r\n        <mask id="mask-dashed-border-offset" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">\r\n          <use xlink:href="#scalable-path" stroke-width="4" class="dashed-border offset"/>\r\n        </mask>\r\n      </defs>\r\n    </svg>\r\n\r\n    <div id="animated-magic-container">\r\n      <svg id="animated-magic-low" class="svg-container"\r\n        xmlns="http://www.w3.org/2000/svg"\r\n        xmlns:xlink="http://www.w3.org/1999/xlink"\r\n        x="0" y="0" width="100%" height="100%">\r\n        <rect x="0" y="0" width="100%" height="100%" mask="url(#mask-dashed-border)" fill="url(#noise-map)"/>\r\n        <rect x="0" y="0" width="100%" height="100%" mask="url(#mask-dashed-border-offset)" fill="url(#noise-map-offset)"/>\r\n      </svg>\r\n      <svg id="animated-magic-high" class="svg-container"\r\n        xmlns="http://www.w3.org/2000/svg"\r\n        xmlns:xlink="http://www.w3.org/1999/xlink"\r\n        x="0" y="0" width="100%" height="100%">\r\n        <rect x="0" y="0" width="100%" height="100%" mask="url(#mask-dashed-border)" fill="url(#noise-map)"/>\r\n        <rect x="0" y="0" width="100%" height="100%" mask="url(#mask-dashed-border-offset)" fill="url(#noise-map-offset)"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  width: calc(100% + 16px);\n  height: calc(100% + 16px);\n  left: -8px;\n  top: -8px;\n  position: absolute;\n  cursor: default;\n  pointer-events: none;\n}\n:host[prevent-animation] #animated-arrow-overlay-wrapper {\n  display: none;\n}\n#animated-arrow-overlay-wrapper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n#animated-arrow-overlay-wrapper.static {\n  display: none;\n}\n#animated-arrow-overlay-wrapper.hover #path-defs .dashed-border,\n#animated-arrow-overlay-wrapper.hover #path-defs .dashed-border.offset {\n  animation-duration: 1500ms;\n}\n#animated-arrow-overlay-wrapper.hover #animated-magic-container {\n  opacity: 1;\n}\n#animated-arrow-overlay-wrapper.init #path-defs .dashed-border,\n#animated-arrow-overlay-wrapper.click #path-defs .dashed-border,\n#animated-arrow-overlay-wrapper.init #path-defs .dashed-border.offset,\n#animated-arrow-overlay-wrapper.click #path-defs .dashed-border.offset {\n  animation-duration: 750ms;\n}\n#animated-arrow-overlay-wrapper.init #animated-magic-container,\n#animated-arrow-overlay-wrapper.click #animated-magic-container {\n  opacity: 1;\n}\n#path-defs .dashed-border,\n#path-defs .dashed-border.offset {\n  stroke: #fff;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-duration: 0ms;\n}\n#path-defs .dashed-border {\n  stroke-dasharray: 50;\n  animation-name: dash-stroke;\n}\n#path-defs .dashed-border.offset {\n  stroke-dashoffset: -50;\n  animation-name: dash-stroke-offset;\n}\n#scalable-path {\n  transform: translate(8px, 8px);\n}\n#animated-magic-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 300ms linear;\n}\n#animated-magic-low {\n  filter: blur(2px) contrast(1.15);\n  -webkit-filter: blur(2px) contrast(1.15);\n  opacity: 0.75;\n}\n#animated-magic-high {\n  filter: blur(4px) contrast(1.35) brightness(1.5);\n  -webkit-filter: blur(4px) contrast(1.35) brightness(1.5);\n  opacity: 0.85;\n}\n.svg-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n@-moz-keyframes dash-stroke {\n  to {\n    stroke-dashoffset: -100;\n  }\n}\n@-webkit-keyframes dash-stroke {\n  to {\n    stroke-dashoffset: -100;\n  }\n}\n@-o-keyframes dash-stroke {\n  to {\n    stroke-dashoffset: -100;\n  }\n}\n@keyframes dash-stroke {\n  to {\n    stroke-dashoffset: -100;\n  }\n}\n@-moz-keyframes dash-stroke-offset {\n  to {\n    stroke-dashoffset: -150;\n  }\n}\n@-webkit-keyframes dash-stroke-offset {\n  to {\n    stroke-dashoffset: -150;\n  }\n}\n@-o-keyframes dash-stroke-offset {\n  to {\n    stroke-dashoffset: -150;\n  }\n}\n@keyframes dash-stroke-offset {\n  to {\n    stroke-dashoffset: -150;\n  }\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(160);
      }
      stylesheetMarkup() {
        return o(161);
      }
      static get observedAttributes() {
        return ['speed'];
      }
      processAttributes() {
        const e = this.shadowRoot,
          t = this.getAttribute('speed') || 3e4,
          o = e.querySelectorAll('.glow-content.scroll'),
          i = e.querySelectorAll('.glow-content.overlay');
        [].forEach.call(o, function (e) {
          e.style.animationDuration = t + 'ms';
        }),
          [].forEach.call(i, function (e) {
            e.style.animationDuration = t / 5 + 'ms, ' + t + 'ms';
          });
      }
    }
    (a.tagName = 'lol-uikit-animated-border-overlay'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n\r\n  <div class="animated-border-wrapper">\r\n    <div class="border-container">\r\n      <div class="blur-effect high">\r\n        <div class="glow-mask top">\r\n          <div class="glow-content scroll top"></div>\r\n          <div class="glow-content overlay top"></div>\r\n        </div>\r\n        <div class="glow-mask right">\r\n          <div class="glow-content scroll right"></div>\r\n          <div class="glow-content overlay right"></div>\r\n        </div>\r\n        <div class="glow-mask bottom">\r\n          <div class="glow-content scroll bottom"></div>\r\n          <div class="glow-content overlay bottom"></div>\r\n        </div>\r\n        <div class="glow-mask left">\r\n          <div class="glow-content scroll left"></div>\r\n          <div class="glow-content overlay left"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="blur-effect low">\r\n        <div class="glow-mask top">\r\n          <div class="glow-content scroll top"></div>\r\n          <div class="glow-content overlay top"></div>\r\n        </div>\r\n        <div class="glow-mask right">\r\n          <div class="glow-content scroll right"></div>\r\n          <div class="glow-content overlay right"></div>\r\n        </div>\r\n        <div class="glow-mask bottom">\r\n          <div class="glow-content scroll bottom"></div>\r\n          <div class="glow-content overlay bottom"></div>\r\n        </div>\r\n        <div class="glow-mask left">\r\n          <div class="glow-content scroll left"></div>\r\n          <div class="glow-content overlay left"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .animated-border-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box;\n  width: calc(100% + 12px);\n  height: calc(100% + 12px);\n  padding: 6px;\n  top: -6px;\n  left: -6px;\n}\n:host .animated-border-wrapper:lang(ar-ae) {\n  left: auto;\n  right: -6px;\n}\n:host .border-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n:host .blur-effect {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n:host .blur-effect.low {\n  -webkit-filter: blur(2px) contrast(1.15);\n  opacity: 0.75;\n}\n:host .blur-effect.high {\n  -webkit-filter: blur(4px) contrast(1.35);\n  opacity: 0.5;\n}\n:host .glow-mask {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n:host .glow-mask.top {\n  top: -2px;\n  left: -2px;\n  -webkit-mask-image: linear-gradient(to bottom, #000, #000 4px, transparent 4px, transparent);\n}\n:host .glow-mask.right {\n  top: -2px;\n  right: -2px;\n  -webkit-mask-image: linear-gradient(to left, #000, #000 4px, transparent 4px, transparent);\n}\n:host .glow-mask.bottom {\n  bottom: -2px;\n  right: -2px;\n  -webkit-mask-image: linear-gradient(to top, #000, #000 4px, transparent 4px, transparent);\n}\n:host .glow-mask.left {\n  bottom: -2px;\n  left: -2px;\n  -webkit-mask-image: linear-gradient(to right, #000, #000 4px, transparent 4px, transparent);\n}\n:host .glow-content {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-size: 200%;\n}\n:host .glow-content.scroll {\n  background-image: url("/fe/lol-uikit/images/noise-tile-alpha-tint-large.png");\n}\n:host .glow-content.overlay {\n  background-image: url("/fe/lol-uikit/images/noise-tile-alpha-tint-small.png");\n}\n:host .glow-content.top {\n  width: 200%;\n  transform: translateY(-50%) translateX(-25%);\n}\n:host .glow-content.bottom {\n  width: 200%;\n  transform: translateY(50%) translateX(-25%) rotate(180deg) scaleY(-1);\n}\n:host .glow-content.left {\n  transform: translateX(-50%) rotate(270deg) scaleY(-1);\n}\n:host .glow-content.right {\n  transform: translateX(50%) rotate(90deg) scaleY(-1);\n}\n:host(.intro) .glow-content.scroll,\n:host(.hover) .glow-content.scroll,\n:host(.down) .glow-content.scroll,\n:host(.click) .glow-content.scroll {\n  animation: borderNoiseScroll 30000ms linear infinite;\n}\n:host(.intro) .glow-content.overlay,\n:host(.hover) .glow-content.overlay,\n:host(.down) .glow-content.overlay,\n:host(.click) .glow-content.overlay {\n  animation: borderNoiseScroll 30000ms linear infinite;\n}\n@-moz-keyframes borderNoiseScroll {\n  0% {\n    background-position: 0 center;\n  }\n  100% {\n    background-position: -400% center;\n  }\n}\n@-webkit-keyframes borderNoiseScroll {\n  0% {\n    background-position: 0 center;\n  }\n  100% {\n    background-position: -400% center;\n  }\n}\n@-o-keyframes borderNoiseScroll {\n  0% {\n    background-position: 0 center;\n  }\n  100% {\n    background-position: -400% center;\n  }\n}\n@keyframes borderNoiseScroll {\n  0% {\n    background-position: 0 center;\n  }\n  100% {\n    background-position: -400% center;\n  }\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(98),
      n = i(a),
      r = o(30),
      l = o(7),
      s = i(l);
    class d extends n.default {
      templateMarkup() {
        return o(185);
      }
      stylesheetMarkup() {
        return o(186);
      }
      setCustomSounds() {
        const e = this.getAttribute('hover-sfx-src'),
          t = this.getAttribute('click-sfx-src'),
          o = e || s.default.arrowButtonHover,
          i = t || s.default.arrowButtonClick;
        (this._hoverSound = this._createSound(o)),
          (this._clickSound = this._createSound(i));
      }
      _createSound(e) {
        return (0, r.createSound)('sfx-ui', e, { allowConcurrency: !1 });
      }
      disableOnClick() {}
      static get observedAttributes() {
        return ['disabled', 'direction', 'click-sfx-src', 'hover-sfx-src'];
      }
      processAttributes() {
        this.$button() &&
          (this.$button()
            .removeClass('left right')
            .addClass(this.getDirection())
            .toggleClass('disabled', this.disabled),
          super.processAttributes());
      }
      $button() {
        return this.$root().find('.lol-uikit-arrow-button');
      }
      $buttonWrapper() {
        return this.$root().find('.lol-uikit-arrow-button-container');
      }
      $buttonInner() {
        return this.$root().find('.lol-uikit-arrow-button');
      }
      getDirection() {
        return this.getAttribute('direction') || 'right';
      }
      isDisabled() {
        return null !== this.getAttribute('disabled');
      }
    }
    (d.tagName = 'lol-uikit-arrow-button'), (t.default = d);
  },
  function (e, t, o) {
    o(45), o(34), o(36), o(169), o(173), o(174), (e.exports = o(2).Promise);
  },
  function (e, t, o) {
    var n = o(71),
      r = o(51);
    e.exports = function (e) {
      return function (t, o) {
        var d = r(t) + '',
          s = n(o),
          i = d.length,
          l,
          a;
        return 0 > s || s >= i
          ? e
            ? ''
            : void 0
          : ((l = d.charCodeAt(s)),
            55296 > l ||
            56319 < l ||
            s + 1 === i ||
            56320 > (a = d.charCodeAt(s + 1)) ||
            57343 < a
              ? e
                ? d.charAt(s)
                : l
              : e
              ? d.slice(s, s + 2)
              : ((l - 55296) << 10) + (a - 56320) + 65536);
      };
    };
  },
  function (e, t, o) {
    'use strict';
    var i = o(50),
      a = o(41),
      n = o(46),
      r = {};
    o(22)(r, o(6)('iterator'), function () {
      return this;
    }),
      (e.exports = function (e, t, o) {
        (e.prototype = i(r, { next: a(1, o) })), n(e, t + ' Iterator');
      });
  },
  function (e, t, o) {
    var i = o(24),
      a = o(47),
      n = o(72)('IE_PROTO'),
      r = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = a(e)),
          i(e, n)
            ? e[n]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? r
            : null
        );
      };
  },
  function (e, t, o) {
    'use strict';
    var i = o(168),
      a = o(99),
      n = o(35),
      r = o(28);
    (e.exports = o(75)(
      Array,
      'Array',
      function (e, t) {
        (this._t = r(e)), (this._i = 0), (this._k = t);
      },
      function () {
        var e = this._t,
          t = this._k,
          o = this._i++;
        return !e || o >= e.length
          ? ((this._t = void 0), a(1))
          : 'keys' == t
          ? a(0, o)
          : 'values' == t
          ? a(0, e[o])
          : a(0, [o, e[o]]);
      },
      'values',
    )),
      (n.Arguments = n.Array),
      i('keys'),
      i('values'),
      i('entries');
  },
  function (e) {
    e.exports = function () {};
  },
  function (e, t, o) {
    'use strict';
    var i = o(44),
      a = o(4),
      n = o(21),
      r = o(54),
      l = o(3),
      s = o(8),
      d = o(40),
      p = o(55),
      c = o(37),
      u = o(102),
      g = o(103).set,
      m = o(171)(),
      h = o(78),
      b = o(104),
      f = o(172),
      y = o(105),
      v = 'Promise',
      x = a.TypeError,
      k = a.process,
      A = k && k.versions,
      w = (A && A.v8) || '',
      _ = a[v],
      E = 'process' == r(k),
      C = function () {},
      S = (H = h.f),
      T = !!(function () {
        try {
          var e = _.resolve(1),
            t = ((e.constructor = {})[o(6)('species')] = function (e) {
              e(C, C);
            });
          return (
            (E || 'function' == typeof PromiseRejectionEvent) &&
            e.then(C) instanceof t &&
            0 !== w.indexOf('6.6') &&
            -1 === f.indexOf('Chrome/66')
          );
        } catch (t) {}
      })(),
      L = function (e) {
        var t;
        return !!(s(e) && 'function' == typeof (t = e.then)) && t;
      },
      M = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var o = e._c;
          m(function () {
            for (
              var a = e._v,
                n = 1 == e._s,
                r = 0,
                i = function (t) {
                  var o = n ? t.ok : t.fail,
                    i = t.resolve,
                    r = t.reject,
                    l = t.domain,
                    s,
                    d,
                    p;
                  try {
                    o
                      ? (!n && (2 == e._h && O(e), (e._h = 1)),
                        !0 === o
                          ? (s = a)
                          : (l && l.enter(),
                            (s = o(a)),
                            l && (l.exit(), (p = !0))),
                        s === t.promise
                          ? r(x('Promise-chain cycle'))
                          : (d = L(s))
                          ? d.call(s, i, r)
                          : i(s))
                      : r(a);
                  } catch (t) {
                    l && !p && l.exit(), r(t);
                  }
                };
              o.length > r;

            )
              i(o[r++]);
            (e._c = []), (e._n = !1), t && !e._h && N(e);
          });
        }
      },
      N = function (e) {
        g.call(a, function () {
          var t = e._v,
            o = P(e),
            i,
            n,
            r;
          if (
            (o &&
              ((i = b(function () {
                E
                  ? k.emit('unhandledRejection', t, e)
                  : (n = a.onunhandledrejection)
                  ? n({ promise: e, reason: t })
                  : (r = a.console) &&
                    r.error &&
                    r.error('Unhandled promise rejection', t);
              })),
              (e._h = E || P(e) ? 2 : 1)),
            (e._a = void 0),
            o && i.e)
          )
            throw i.v;
        });
      },
      P = function (e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      O = function (e) {
        g.call(a, function () {
          var t;
          E
            ? k.emit('rejectionHandled', e)
            : (t = a.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      I = function (e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          (t = t._w || t),
          (t._v = e),
          (t._s = 2),
          !t._a && (t._a = t._c.slice()),
          M(t, !0));
      },
      D = function (e) {
        var t = this,
          o;
        if (!t._d) {
          (t._d = !0), (t = t._w || t);
          try {
            if (t === e) throw x("Promise can't be resolved itself");
            (o = L(e))
              ? m(function () {
                  var i = { _w: t, _d: !1 };
                  try {
                    o.call(e, n(D, i, 1), n(I, i, 1));
                  } catch (t) {
                    I.call(i, t);
                  }
                })
              : ((t._v = e), (t._s = 1), M(t, !1));
          } catch (o) {
            I.call({ _w: t, _d: !1 }, o);
          }
        }
      },
      R,
      H,
      z,
      j;
    T ||
      ((_ = function (e) {
        p(this, _, v, '_h'), d(e), R.call(this);
        try {
          e(n(D, this, 1), n(I, this, 1));
        } catch (e) {
          I.call(this, e);
        }
      }),
      (R = function () {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }),
      (R.prototype = o(56)(_.prototype, {
        then: function (e, t) {
          var o = S(u(this, _));
          return (
            (o.ok = 'function' != typeof e || e),
            (o.fail = 'function' == typeof t && t),
            (o.domain = E ? k.domain : void 0),
            this._c.push(o),
            this._a && this._a.push(o),
            this._s && M(this, !1),
            o.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (z = function () {
        var e = new R();
        (this.promise = e),
          (this.resolve = n(D, e, 1)),
          (this.reject = n(I, e, 1));
      }),
      (h.f = S =
        function (e) {
          return e === _ || e === j ? new z(e) : H(e);
        })),
      l(l.G + l.W + l.F * !T, { Promise: _ }),
      o(46)(_, v),
      o(106)(v),
      (j = o(2)[v]),
      l(l.S + l.F * !T, v, {
        reject: function (e) {
          var t = S(this),
            o = t.reject;
          return o(e), t.promise;
        },
      }),
      l(l.S + l.F * (i || !T), v, {
        resolve: function (e) {
          return y(i && this === j ? _ : this, e);
        },
      }),
      l(
        l.S +
          l.F *
            !(
              T &&
              o(107)(function (e) {
                _.all(e)['catch'](C);
              })
            ),
        v,
        {
          all: function (e) {
            var t = this,
              o = S(t),
              i = o.resolve,
              a = o.reject,
              n = b(function () {
                var o = [],
                  n = 0,
                  r = 1;
                c(e, !1, function (e) {
                  var l = n++,
                    s = !1;
                  o.push(void 0),
                    r++,
                    t.resolve(e).then(function (e) {
                      s || ((s = !0), (o[l] = e), --r || i(o));
                    }, a);
                }),
                  --r || i(o);
              });
            return n.e && a(n.v), o.promise;
          },
          race: function (e) {
            var t = this,
              o = S(t),
              i = o.reject,
              a = b(function () {
                c(e, !1, function (e) {
                  t.resolve(e).then(o.resolve, i);
                });
              });
            return a.e && i(a.v), o.promise;
          },
        },
      );
  },
  function (e) {
    e.exports = function (e, t, o) {
      var i = o === void 0;
      switch (t.length) {
        case 0:
          return i ? e() : e.call(o);
        case 1:
          return i ? e(t[0]) : e.call(o, t[0]);
        case 2:
          return i ? e(t[0], t[1]) : e.call(o, t[0], t[1]);
        case 3:
          return i ? e(t[0], t[1], t[2]) : e.call(o, t[0], t[1], t[2]);
        case 4:
          return i
            ? e(t[0], t[1], t[2], t[3])
            : e.call(o, t[0], t[1], t[2], t[3]);
      }
      return e.apply(o, t);
    };
  },
  function (e, t, o) {
    var i = o(4),
      a = o(103).set,
      n = i.MutationObserver || i.WebKitMutationObserver,
      r = i.process,
      l = i.Promise,
      s = 'process' == o(43)(r);
    e.exports = function () {
      var e = function () {
          var e, i;
          for (s && (e = r.domain) && e.exit(); t; ) {
            (i = t.fn), (t = t.next);
            try {
              i();
            } catch (i) {
              throw (t ? d() : (o = void 0), i);
            }
          }
          (o = void 0), e && e.enter();
        },
        t,
        o,
        d;
      if (s)
        d = function () {
          r.nextTick(e);
        };
      else if (n && !(i.navigator && i.navigator.standalone)) {
        var p = !0,
          c = document.createTextNode('');
        new n(e).observe(c, { characterData: !0 }),
          (d = function () {
            c.data = p = !p;
          });
      } else if (l && l.resolve) {
        var u = l.resolve(void 0);
        d = function () {
          u.then(e);
        };
      } else
        d = function () {
          a.call(i, e);
        };
      return function (e) {
        var i = { fn: e, next: void 0 };
        o && (o.next = i), t || ((t = i), d()), (o = i);
      };
    };
  },
  function (e, t, o) {
    var i = o(4),
      a = i.navigator;
    e.exports = (a && a.userAgent) || '';
  },
  function (e, t, o) {
    'use strict';
    var i = o(3),
      a = o(2),
      n = o(4),
      r = o(102),
      l = o(105);
    i(i.P + i.R, 'Promise', {
      finally: function (t) {
        var o = r(this, a.Promise || n.Promise),
          e = 'function' == typeof t;
        return this.then(
          e
            ? function (e) {
                return l(o, t()).then(function () {
                  return e;
                });
              }
            : t,
          e
            ? function (i) {
                return l(o, t()).then(function () {
                  throw i;
                });
              }
            : t,
        );
      },
    });
  },
  function (e, t, o) {
    'use strict';
    var i = o(3),
      a = o(78),
      n = o(104);
    i(i.S, 'Promise', {
      try: function (e) {
        var t = a.f(this),
          o = n(e);
        return (o.e ? t.reject : t.resolve)(o.v), t.promise;
      },
    });
  },
  function (e, t, o) {
    o(45), o(34), o(36), o(176), o(179), o(181), o(182), (e.exports = o(2).Map);
  },
  function (e, t, o) {
    'use strict';
    var i = o(108),
      a = o(39),
      n = 'Map';
    e.exports = o(79)(
      n,
      function (e) {
        return function () {
          return e(this, 0 < arguments.length ? arguments[0] : void 0);
        };
      },
      {
        get: function (e) {
          var t = i.getEntry(a(this, n), e);
          return t && t.v;
        },
        set: function (e, t) {
          return i.def(a(this, n), 0 === e ? 0 : e, t);
        },
      },
      i,
      !0,
    );
  },
  function (e, t, o) {
    var i = o(178);
    e.exports = function (e, t) {
      return new (i(e))(t);
    };
  },
  function (e, t, o) {
    var i = o(8),
      a = o(109),
      n = o(6)('species');
    e.exports = function (e) {
      var t;
      return (
        a(e) &&
          ((t = e.constructor),
          'function' == typeof t &&
            (t === Array || a(t.prototype)) &&
            (t = void 0),
          i(t) && ((t = t[n]), null === t && (t = void 0))),
        void 0 === t ? Array : t
      );
    };
  },
  function (e, t, o) {
    var i = o(3);
    i(i.P + i.R, 'Map', { toJSON: o(110)('Map') });
  },
  function (e, t, o) {
    var i = o(37);
    e.exports = function (e, t) {
      var o = [];
      return i(e, !1, o.push, o, t), o;
    };
  },
  function (e, t, o) {
    o(81)('Map');
  },
  function (e, t, o) {
    o(82)('Map');
  },
  function (e) {
    e.exports =
      '<template>\r\n  <style>\r\n\t@keyframes hoverTextShadow {\r\n\t  0% {\r\n\t    text-shadow: 0 0 4px rgba(240, 230, 216, 1);\r\n\t  }\r\n\t  50% {\r\n\t    text-shadow: 0 0 4px rgba(240, 230, 216, .5);\r\n\t  }\r\n\t  100% {\r\n\t  \ttext-shadow: 0 0 4px rgba(240, 230, 216, 0);\r\n\t  }\r\n\t}\r\n\r\n\t@keyframes hoverGlow {\r\n\t  0% {\r\n\t    box-shadow: 0px 0px 5px 4px rgba(240, 230, 216, .5), 0px 0px 2px 1px rgba(240, 230, 216, .5) inset;\r\n\t  }\r\n\t  50% {\r\n\t    box-shadow: 0px 0px 5px 4px rgba(240, 230, 216, .3), 0px 0px 2px 1px rgba(240, 230, 216, .3) inset;\r\n\t  }\r\n\t  100% {\r\n\t    box-shadow: 0px 0px 5px 4px rgba(240, 230, 216, 0), 0px 0px 2px 1px rgba(240, 230, 216, 0) inset;\r\n\t  }\r\n\t}\r\n\r\n\t@keyframes clickFlare {\r\n\t  0% {\r\n\t    opacity: 0;\r\n\t  }\r\n\t  25% {\r\n\t    opacity: .6;\r\n\t  }\r\n\t  50% {\r\n\t    opacity: .3;\r\n\t  }\r\n\t  100% {\r\n\t    opacity: 0;\r\n\t  }\r\n\t}\r\n\r\n\t@keyframes clickScale {\r\n\t  from {\r\n\t  \ttransform: scale(.94);\r\n\t  }\r\n\r\n\t  to {\r\n\t\ttransform: scale(1.0);\r\n\t  }\r\n\t}\r\n\r\n\t@keyframes clickSheen {\r\n\t  from {\r\n\t    transform: translateY(-100%) rotate(0deg);\r\n\t  }\r\n\t  10% {\r\n\t   transform: translateY(-80%) rotate(-5deg);\r\n\t  }\r\n\t  to {\r\n\t    transform: translateY(100%) rotate(0deg);\r\n\t  }\r\n\t}\r\n  </style>\r\n  <div class="lol-uikit-flat-button-wrapper">\r\n    <div class="lol-uikit-flat-button-extra"></div>\r\n    <div class="lol-uikit-flat-button-inner">\r\n      <div class="lol-uikit-flat-button">\r\n      \t<div class="lol-uikit-flat-button-bg"></div>\r\n      \t<div class="lol-uikit-flat-button-border-idle"></div>\r\n      \t<div class="lol-uikit-flat-button-border-transition"></div>\r\n      \t<div class="lol-uikit-flat-button-flare"></div>\r\n      \t<div class="lol-uikit-flat-button-glow"></div>\r\n      \t<div class="lol-uikit-flat-button-sheen-wrapper">\r\n\t      <div class="lol-uikit-flat-button-sheen"></div>\r\n      \t</div>\r\n      \t<div class="lol-uikit-flat-button-content-wrapper">\r\n\t\t  <slot></slot>\r\n\t\t</div>\r\n      </div>\r\n    </div>\r\n\t<slot name="comet-border"></slot>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .lol-uikit-flat-button {\n  font-family: var(--font-display);\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper {\n  font-family: var(--font-body);\n}\n:host .lol-uikit-flat-button {\n  font-family: var(--font-display);\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper {\n  font-family: var(--font-body);\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper {\n  -webkit-user-select: none;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host .lol-uikit-flat-button {\n  text-transform: uppercase;\n}\n:host .lol-uikit-flat-button:lang(ko-kr),\n:host .lol-uikit-flat-button:lang(ja-jp),\n:host .lol-uikit-flat-button:lang(tr-tr),\n:host .lol-uikit-flat-button:lang(el-gr),\n:host .lol-uikit-flat-button:lang(th-th),\n:host .lol-uikit-flat-button:lang(zh-tw) {\n  text-transform: none;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper:lang(ja-jp) {\n  font-size: 13px;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  --flat-button-height: 100%;\n  --flat-button-min-height: 32px;\n  --flat-button-border-transition-opacity: 0;\n  --flat-button-glow-animation: initial;\n  --flat-button-bg-opacity: 0;\n  --flat-button-inner-height: 100%;\n  --flat-button-border-width: 2px;\n  --flat-button-border-offset: -2px;\n  --flat-button-disabled-color: #5c5b57;\n}\n:host .lol-uikit-flat-button {\n  color: #cdbe91;\n  font-size: var(--font-size, 14px);\n  font-family: var(--font-family, var(--font-display));\n  font-weight: bold;\n  letter-spacing: 1px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: center;\n  white-space: nowrap;\n  padding: 5px 1.3em;\n  height: var(--flat-button-height);\n  min-height: var(--flat-button-min-height);\n  cursor: pointer;\n  -webkit-user-select: none;\n  box-shadow: 0 0 1px 1px #010a13, inset 0 0 1px 1px #010a13;\n  background: #1e2328;\n  border: var(--flat-button-border-width) solid transparent;\n/* Flare Element - flare element used for click flare (note: actual image) */\n/* Glow Element - used for inner and outset glows for different states / transitions  */\n/* Border Element Idle - used for defaut border gradient on flat button */\n/* Border Element Transition - used for transitional border gradient for different states */\n/* Sheen Wrapper - used to wrap sheen animation and cleanly apply overflow hidden for the size of the button */\n/* Sheen Element - sheen element for transform */\n/* BG Element - used for BG Color Gradient for different states / transitions */\n/* State classes defined below are done so via JS in index.js by the `setInteractionClass` function */\n/* Intro State */\n/* Hover State - onmouseover */\n/* Down State - onmousedown */\n/* Click State - on click */\n/* Disabled - on disabled="true" */\n}\n:host .lol-uikit-flat-button * {\n  pointer-events: none;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-content-wrapper {\n  position: relative;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-content-wrapper:lang(ar-ae) {\n  direction: rtl;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-content-wrapper.external::after {\n  width: 9px;\n  height: 9px;\n  content: \'\';\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-mask: url("/fe/lol-uikit/images/external-link-mask.png") no-repeat;\n  -webkit-mask-size: contain;\n  background: #cdbe91;\n  margin-left: 5px;\n  margin-top: -5px;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-content-wrapper.external:lang(ar-ae)::after {\n  transform: scaleX(-1);\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-flare {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-flare:before {\n  content: \'\';\n  position: absolute;\n  top: -25px;\n  left: -25px;\n  width: 48px;\n  height: 48px;\n  opacity: 0;\n  background: transparent url("/fe/lol-uikit/images/sheen.png") top center no-repeat;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-flare:after {\n  content: \'\';\n  position: absolute;\n  bottom: -25px;\n  right: -25px;\n  width: 48px;\n  height: 48px;\n  opacity: 0;\n  background: transparent url("/fe/lol-uikit/images/sheen.png") top center no-repeat;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-glow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-filter: blur(4px);\n  animation: var(--flat-button-glow-animation);\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-border-idle {\n  position: absolute;\n  top: var(--flat-button-border-offset);\n  left: var(--flat-button-border-offset);\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  border: var(--flat-button-border-width) solid transparent;\n  border-image: linear-gradient(to top, #785b28 0%, #c89c3c 55%, #c8a355 71%, #c8aa6e 100%);\n  border-image-slice: 1;\n  transition: opacity 300ms linear;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-border-transition {\n  position: absolute;\n  top: var(--flat-button-border-offset);\n  left: var(--flat-button-border-offset);\n  width: 100%;\n  height: 100%;\n  opacity: var(--flat-button-border-transition-opacity);\n  border: var(--flat-button-border-width) solid transparent;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-sheen-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-sheen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  width: 100%;\n  height: 150%;\n  transform: translateY(-100%);\n  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 92%, rgba(255,255,255,0) 100%);\n  -webkit-filter: blur(2px);\n}\n:host .lol-uikit-flat-button .lol-uikit-flat-button-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 400ms cubic-bezier(0, 0, 0.33, 1);\n  opacity: var(--flat-button-bg-opacity);\n  background-image: linear-gradient(to bottom, #1e232a 0%, #1e232a 40%, rgba(118,97,51,0.8) 140%);\n}\n:host .lol-uikit-flat-button.intro .lol-uikit-flat-button-border-transition {\n  border-image: linear-gradient(to top, #fff 0%, #fff 33%, #fff 66%, #fff 100%);\n  border-image-slice: 1;\n}\n:host .lol-uikit-flat-button.hover {\n  color: #f0e6d2;\n  animation: 600ms cubic-bezier(0, 0, 0.33, 1) 1 hoverTextShadow;\n}\n:host .lol-uikit-flat-button.hover.disabled {\n  color: var(--flat-button-disabled-color);\n  animation: none;\n}\n:host .lol-uikit-flat-button.hover .lol-uikit-flat-button-border-transition {\n  opacity: 1;\n  border-image: linear-gradient(to top, #c89c3c 0%, #dcc188 50%, #e1c998 71%, #f0e6d8 100%);\n  border-image-slice: 1;\n}\n:host .lol-uikit-flat-button.hover .lol-uikit-flat-button-glow {\n  animation: 600ms cubic-bezier(0, 0, 0.33, 1) 1 hoverGlow;\n}\n:host .lol-uikit-flat-button.hover .lol-uikit-flat-button-bg {\n  opacity: 1;\n}\n:host .lol-uikit-flat-button.hover .lol-uikit-flat-button-content-wrapper.external::after {\n  background: #f0e6d2;\n}\n:host .lol-uikit-flat-button.down {\n  color: #5c5b57;\n  transition: color 100ms linear;\n  animation: none;\n}\n:host .lol-uikit-flat-button.down .lol-uikit-flat-button-bg {\n  opacity: 0;\n}\n:host .lol-uikit-flat-button.down .lol-uikit-flat-button-border-transition {\n  opacity: 1;\n  border-image: linear-gradient(to bottom, #463817 0%, #694f27 100%);\n  border-image-slice: 1;\n}\n:host .lol-uikit-flat-button.down .lol-uikit-flat-button-content-wrapper.external::after {\n  background: #5c5b57;\n}\n:host .lol-uikit-flat-button.click {\n  color: #e4e1d8;\n  border-image: linear-gradient(to top, #fff 0%, #fff 33%, #fff 66%, #fff 100%);\n  border-image-slice: 1;\n  animation: 130ms linear clickScale 1, 400ms linear 1 hoverTextShadow;\n}\n:host .lol-uikit-flat-button.click .lol-uikit-flat-button-border-transition {\n  border-image: linear-gradient(to top, #c89c3c 0%, #dcc188 50%, #e1c998 71%, #f0e6d8 100%);\n  border-image-slice: 1;\n  transition: opacity 400ms linear;\n  opacity: 1;\n}\n:host .lol-uikit-flat-button.click .lol-uikit-flat-button-glow {\n  animation: 600ms cubic-bezier(0, 0, 0.33, 1) hoverGlow 1;\n}\n:host .lol-uikit-flat-button.click .lol-uikit-flat-button-sheen {\n  animation: 330ms clickSheen 1 linear;\n}\n:host .lol-uikit-flat-button.click .lol-uikit-flat-button-bg {\n  opacity: 1;\n}\n:host .lol-uikit-flat-button.click .lol-uikit-flat-button-flare:before {\n  animation: 400ms cubic-bezier(0, 0, 0.33, 1) 0ms 1 clickFlare;\n}\n:host .lol-uikit-flat-button.click .lol-uikit-flat-button-flare:after {\n  animation: 400ms cubic-bezier(0, 0, 0.33, 1) 30ms 1 clickFlare;\n}\n:host .lol-uikit-flat-button.click .lol-uikit-flat-button-content-wrapper.external::after {\n  background: #e4e1d8;\n}\n:host .lol-uikit-flat-button.disabled {\n  cursor: default;\n  color: var(--flat-button-disabled-color);\n  background: #1e2328;\n  border: 2px solid var(--flat-button-disabled-color);\n  border-image: initial;\n  transition: all 300ms linear;\n}\n:host .lol-uikit-flat-button.disabled:hover {\n  cursor: default;\n  color: var(--flat-button-disabled-color);\n  background: #1e2328;\n  border-color: var(--flat-button-disabled-color);\n  border-image: initial;\n  background-image: initial;\n  animation: none;\n}\n:host .lol-uikit-flat-button.disabled .lol-uikit-flat-button-flare,\n:host .lol-uikit-flat-button.disabled .lol-uikit-flat-button-glow,\n:host .lol-uikit-flat-button.disabled .lol-uikit-flat-button-sheen-wrapper,\n:host .lol-uikit-flat-button.disabled .lol-uikit-flat-button-bg {\n  display: none;\n}\n:host .lol-uikit-flat-button.disabled .lol-uikit-flat-button-border-transition {\n  transition: opacity 300ms linear;\n  opacity: 0;\n}\n:host .lol-uikit-flat-button.disabled .lol-uikit-flat-button-border-idle {\n  opacity: 0;\n}\n:host .lol-uikit-flat-button.disabled .lol-uikit-flat-button-content-wrapper.external::after {\n  background: var(--flat-button-disabled-color);\n}\n:host .lol-uikit-flat-button.no-min-height {\n  min-height: 0;\n}\n:host .lol-uikit-flat-button.no-padding {\n  padding: 0 0;\n}\n:host .lol-uikit-flat-button.back {\n  background-image: url("/fe/lol-uikit/images/back.png");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n:host .lol-uikit-flat-button.back:hover {\n  background-image: url("/fe/lol-uikit/images/back-hover.png");\n}\n:host .lol-uikit-flat-button.back.disabled,\n:host .lol-uikit-flat-button.back:active {\n  background-image: url("/fe/lol-uikit/images/back-disabled.png");\n}\n.lol-uikit-flat-button-wrapper {\n  min-width: inherit;\n  width: inherit;\n  height: 100%;\n  position: relative;\n}\n.lol-uikit-flat-button-inner {\n  height: var(--flat-button-inner-height);\n}\n:host(:not([type=next]):not([type=purchase])) .primary:not(.back):not(.disabled) {\n  background: linear-gradient(to bottom, #5a401f 0%, #332717 100%);\n}\n:host(:not([type=next]):not([type=purchase])) .primary:not(.back):not(.disabled) .lol-uikit-flat-button-bg {\n  background: linear-gradient(to bottom, #604522 0%, #846745 100%);\n}\n:host(:not([type=next]):not([type=purchase])) .primary:not(.back):not(.disabled).down {\n  color: #785a28;\n  background: linear-gradient(to bottom, #362715 0%, #17130e 100%);\n}\n:host(:not([type=next]):not([type=purchase])) .primary:not(.back):not(.disabled).down .lol-uikit-flat-button-content-wrapper.external::after {\n  background: #785a28;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) {\n  border-width: 1px;\n  text-transform: none;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled).hover .lol-uikit-flat-button-content-wrapper {\n  color: #f0e6d2;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled).click .lol-uikit-flat-button-content-wrapper {\n  color: #e4e1d8;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled).down .lol-uikit-flat-button-content-wrapper {\n  color: #5c5b57;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-border-idle {\n  border-width: 1px;\n  top: -1px;\n  left: -1px;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-border-transition {\n  border-width: 1px;\n  top: -1px;\n  left: -1px;\n}\n:host(:not([type=next]):not([type=purchase])) .secondary:not(.disabled) .lol-uikit-flat-button-content-wrapper {\n  color: #cdbe91;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled) {\n  background: linear-gradient(to bottom, rgba(255,44,170,0.3) 0%, rgba(255,44,170,0) 100%), #1e2328;\n  color: #fde9f8;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled) .lol-uikit-flat-button-bg {\n  background: linear-gradient(to bottom, rgba(255,44,170,0.3) 0%, rgba(255,44,170,0) 100%), #1e2328;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled) .lol-uikit-flat-button-border-idle {\n  border-image: linear-gradient(to bottom, rgba(245,155,247,0.8) 0%, rgba(232,216,227,0.8) 0.01%, rgba(237,153,239,0.8) 100%);\n  border-image-slice: 1;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).hover {\n  color: #fde9f8;\n  background: linear-gradient(to bottom, rgba(255,44,170,0.5) 0%, rgba(255,44,170,0) 100%), #1e2328;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).hover .lol-uikit-flat-button-bg {\n  background: linear-gradient(to bottom, rgba(255,44,170,0.5) 0%, rgba(255,44,170,0) 100%), #1e2328;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).hover.disabled {\n  color: #fde9f8;\n  animation: none;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).hover .lol-uikit-flat-button-border-transition {\n  border-image: linear-gradient(to bottom, #f59bf7 0%, #e8d8e3 0.01%, #ed99ef 100%);\n  border-image-slice: 1;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).disabled {\n  color: #fde9f8;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).down {\n  color: #fde9f8;\n  background: linear-gradient(to bottom, rgba(255,44,170,0.2) 0%, rgba(255,44,170,0) 100%), #1e2328;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).down .lol-uikit-flat-button-bg {\n  background: linear-gradient(to bottom, rgba(255,44,170,0.2) 0%, rgba(255,44,170,0) 100%), #1e2328;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).down .lol-uikit-flat-button-border-transition {\n  border-image: linear-gradient(to bottom, rgba(245,155,247,0.4) 0%, rgba(232,216,227,0.4) 0.01%, rgba(237,153,239,0.4) 100%);\n  border-image-slice: 1;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).down .lol-uikit-flat-button-border-idle {\n  border-image: linear-gradient(to bottom, rgba(245,155,247,0.4) 0%, rgba(232,216,227,0.4) 0.01%, rgba(237,153,239,0.4) 100%);\n  border-image-slice: 1;\n}\n:host([type=purchase]:not([type=next])) .primary:not(.back):not(.disabled).down .lol-uikit-flat-button-content-wrapper.external::after {\n  background: #fde9f8;\n}\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-flare,\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-glow,\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-border-idle,\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-border-transition,\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-sheen-wrapper,\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-bg {\n  display: none;\n}\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-inner {\n  -webkit-clip-path: polygon(0% 0%, calc(100% - 17px) 0%, calc(100% - 1px) 50%, calc(100% - 17px) 100%, 0% 100%);\n}\n:host([type=next]) .lol-uikit-flat-button-wrapper .lol-uikit-flat-button-inner .lol-uikit-flat-button {\n  -webkit-clip-path: polygon(0% 0%, calc(100% - 19px) 0%, calc(100% - 4px) 50%, calc(100% - 19px) 100%, 0% 100%);\n}\n:host([type=next]) .lol-uikit-flat-button-wrapper:active .lol-uikit-flat-button-inner {\n  background: linear-gradient(to top, #005a82 0%, #08495f 50%, #0d404c 100%);\n}\n:host([type=next]) .lol-uikit-flat-button-wrapper:active .lol-uikit-flat-button-inner .lol-uikit-flat-button {\n  color: #005a82;\n}\n:host([type=next]) .lol-uikit-flat-button-wrapper.disabled .lol-uikit-flat-button-inner {\n  background: var(--flat-button-disabled-color);\n}\n:host([type=next]) .lol-uikit-flat-button-wrapper.disabled .lol-uikit-flat-button-inner .lol-uikit-flat-button {\n  color: var(--flat-button-disabled-color);\n  background: #1e2328;\n}\n:host([type=next]) .lol-uikit-flat-button-extra {\n  position: absolute;\n}\n:host([type=next]):host([box-outline]) .lol-uikit-flat-button-extra {\n  width: 20px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: 2px solid #0a323c;\n  border-left: 0;\n}\n:host([type=next]):host([box-outline]) .disabled .lol-uikit-flat-button-extra {\n  border: 2px solid #1e2328;\n}\n:host([type=next]) .lol-uikit-flat-button-inner {\n  position: relative;\n  background: linear-gradient(to top, #005a82 0%, #0596aa 50%, #08b1b2 100%);\n  padding: 2px 0 2px 2px;\n}\n:host([type=next]) .lol-uikit-flat-button-inner .lol-uikit-flat-button {\n  border: 0;\n  padding-right: 31px;\n  color: #a3c7c7;\n  min-height: 28px;\n  box-shadow: 0 0 1px 0px #010a13, inset 0 0 1px 1px #010a13;\n}\n:host([type=next]) .lol-uikit-flat-button-inner .lol-uikit-flat-button:hover {\n  color: #cdfafa;\n}\n:host([type=next]) .lol-uikit-flat-button-inner .lol-uikit-flat-button.click {\n  animation: none;\n}\n:host([type=next]) .lol-uikit-flat-button-inner:hover {\n  background: linear-gradient(to top, #3097c6 0%, #0ecaba 50%, #cdfafa 100%);\n}\n',
        '',
      ]);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-arrow-button">\r\n    <div class="arrow-button-container">\r\n      <div class="border-arrow-icon border-arrow-icon-disabled"></div>\r\n      <div class="border-arrow-icon border-arrow-icon-default"></div>\r\n      <div class="border-arrow-icon border-arrow-icon-hover"></div>\r\n      <div class="border-arrow-icon border-arrow-icon-clicked"></div>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  display: block;\n  height: 48px;\n  width: 48px;\n}\n:host .lol-uikit-arrow-button {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n:host .lol-uikit-arrow-button.left .arrow-button-container {\n  transform: rotateY(180deg);\n}\n:host .lol-uikit-arrow-button.disabled {\n  cursor: default;\n}\n:host .lol-uikit-arrow-button.disabled .arrow-button-container .border-arrow-icon {\n  opacity: 0;\n}\n:host .lol-uikit-arrow-button.disabled .arrow-button-container .border-arrow-icon-disabled {\n  opacity: 1;\n}\n:host .lol-uikit-arrow-button.disabled .arrow-button-container:hover .border-arrow-icon,\n:host .lol-uikit-arrow-button.disabled .arrow-button-container:active .border-arrow-icon {\n  opacity: 0;\n}\n:host .lol-uikit-arrow-button.disabled .arrow-button-container:hover .border-arrow-icon-disabled,\n:host .lol-uikit-arrow-button.disabled .arrow-button-container:active .border-arrow-icon-disabled {\n  opacity: 1;\n}\n:host .lol-uikit-arrow-button .arrow-button-container {\n  display: block;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n:host .lol-uikit-arrow-button .arrow-button-container .border-arrow-icon {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  transition: 0.3s all ease;\n  opacity: 0;\n}\n:host .lol-uikit-arrow-button .arrow-button-container .border-arrow-icon-default {\n  background-image: url("/fe/lol-uikit/images/border-arrow-up.png");\n  opacity: 1;\n}\n:host .lol-uikit-arrow-button .arrow-button-container .border-arrow-icon-hover {\n  background-image: url("/fe/lol-uikit/images/border-arrow-hover.png");\n}\n:host .lol-uikit-arrow-button .arrow-button-container .border-arrow-icon-clicked {\n  background-image: url("/fe/lol-uikit/images/border-arrow-click.png");\n}\n:host .lol-uikit-arrow-button .arrow-button-container .border-arrow-icon-disabled {\n  background-image: url("/fe/lol-uikit/images/border-arrow-disabled.png");\n  opacity: 1;\n  transition: none;\n}\n:host .lol-uikit-arrow-button .arrow-button-container:hover .border-arrow-icon {\n  opacity: 0;\n}\n:host .lol-uikit-arrow-button .arrow-button-container:hover .border-arrow-icon-hover {\n  opacity: 1;\n}\n:host .lol-uikit-arrow-button .arrow-button-container:active .border-arrow-icon {\n  opacity: 0;\n}\n:host .lol-uikit-arrow-button .arrow-button-container:active .border-arrow-icon-clicked {\n  opacity: 1;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(188);
      }
      stylesheetMarkup() {
        return o(189);
      }
    }
    (a.tagName = 'lol-uikit-backdrop-magic'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="wrapper">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        '/* make the backdrop element fill the parent element */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n:host .wrapper {\n  flex: 1 1 auto;\n  position: relative;\n  background-color: #000;\n  background-image: url("/fe/lol-static-assets/images/uikit/backdrop-magic/backdrop-magic.png");\n  background-repeat: no-repeat;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(48),
      n = i(a),
      r = o(58),
      l = i(r),
      s = o(85),
      d = i(s),
      p = o(0);
    const c = {};
    (0, n.default)(s.VideoTransitionMethods).forEach(function (e) {
      c[e.toLowerCase()] = s.VideoTransitionMethods[e];
    });
    class u extends p.webComponents.ShadowElement {
      templateMarkup() {
        return o(207);
      }
      static get observedAttributes() {
        return [
          'selector',
          'preloading',
          'playing',
          'paused',
          'unloading',
          'non-media-duration',
          'ended',
        ];
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.deactivate();
      }
      activate() {
        this.token = {};
        const e = this.getRequestedState(),
          t = this.getElements();
        for (let o = 0; o < t.length; o++) {
          const i = t[o];
          if (d.default.detect(i)) {
            if (i.playbackState.toLowerCase() === e) continue;
            i[c[e]]();
          }
        }
        this.attachSwitchChangeHandlers();
      }
      getRequestedState() {
        for (let e = 0; e < this.attributes.length; e++) {
          const t = this.attributes[e];
          if (t.name in c) return t.name;
        }
      }
      deactivate() {
        (this.token = void 0),
          this.removeSwitchChangeHandlers && this.removeSwitchChangeHandlers();
      }
      attachSwitchChangeHandlers() {
        const e = this.getSwitches(),
          t = this.token,
          o = () => {
            this.token === t && (this.deactivate(), this.activate());
          };
        for (let t = 0; t < e.length; t++) {
          const i = e[t];
          i.subscribeVisibleNodesChanged(o);
        }
        this.removeSwitchChangeHandlers && this.removeSwitchChangeHandlers(),
          (this.removeSwitchChangeHandlers = () => {
            for (let t = 0; t < e.length; t++) {
              const i = e[t];
              i.unsubscribeVisibleNodesChanged(o);
            }
          });
      }
      getSwitches() {
        const e = [],
          t = this.getSelectedElements();
        for (let o = 0, i; o < t.length; o++)
          for (i = t[o]; i && 'getVisibleNodes' in i; )
            e.push(i), (i = i.getVisibleNodes()[0]);
        return e;
      }
      getElements() {
        const e = this.getSelectedElements();
        for (let t = 0, o; t < e.length; t++) {
          for (o = e[t]; o && 'getVisibleNodes' in o; )
            o = o.getVisibleNodes()[0];
          e[t] = o;
        }
        return e.filter(function (e) {
          return e;
        });
      }
      getSelectedElements() {
        const e = l.default.getStateMachine(this),
          t = this.getAttribute('selector');
        let o;
        return (
          (o =
            t && '' !== t
              ? [e.querySelector(':scope ' + t)]
              : e.getVisibleNodes()),
          o
        );
      }
    }
    (u.tagName = 'uikit-behavior-media'), (t.default = u);
  },
  function (e, t, o) {
    o(192), (e.exports = o(2).Object.keys);
  },
  function (e, t, o) {
    var i = o(47),
      a = o(42);
    o(57)('keys', function () {
      return function (e) {
        return a(i(e));
      };
    });
  },
  function (e, t, o) {
    e.exports = { default: o(194), __esModule: !0 };
  },
  function (e, t, o) {
    o(195), (e.exports = 9007199254740991);
  },
  function (e, t, o) {
    var i = o(3);
    i(i.S, 'Number', { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  function (e, t, o) {
    o(45), o(36), o(197), o(199), o(200), (e.exports = o(2).WeakMap);
  },
  function (e, t, o) {
    'use strict';
    var i = o(4),
      a = o(80)(0),
      n = o(76),
      r = o(38),
      l = o(111),
      s = o(198),
      d = o(8),
      p = o(39),
      c = o(39),
      u = !i.ActiveXObject && 'ActiveXObject' in i,
      g = 'WeakMap',
      m = r.getWeak,
      h = Object.isExtensible,
      b = s.ufstore,
      f = function (e) {
        return function () {
          return e(this, 0 < arguments.length ? arguments[0] : void 0);
        };
      },
      y = {
        get: function (e) {
          if (d(e)) {
            var t = m(e);
            return !0 === t ? b(p(this, g)).get(e) : t ? t[this._i] : void 0;
          }
        },
        set: function (e, t) {
          return s.def(p(this, g), e, t);
        },
      },
      v = (e.exports = o(79)(g, f, y, s, !0, !0)),
      x;
    c &&
      u &&
      ((x = s.getConstructor(f, g)),
      l(x.prototype, y),
      (r.NEED = !0),
      a(['delete', 'has', 'get', 'set'], function (e) {
        var t = v.prototype,
          o = t[e];
        n(t, e, function (t, i) {
          if (d(t) && !h(t)) {
            this._f || (this._f = new x());
            var a = this._f[e](t, i);
            return 'set' == e ? this : a;
          }
          return o.call(this, t, i);
        });
      }));
  },
  function (e, t, o) {
    'use strict';
    var i = o(56),
      a = o(38).getWeak,
      n = o(15),
      r = o(8),
      l = o(55),
      s = o(37),
      d = o(80),
      p = o(24),
      c = o(39),
      u = d(5),
      g = d(6),
      m = 0,
      h = function (e) {
        return e._l || (e._l = new b());
      },
      b = function () {
        this.a = [];
      },
      f = function (e, t) {
        return u(e.a, function (e) {
          return e[0] === t;
        });
      };
    (b.prototype = {
      get: function (e) {
        var t = f(this, e);
        if (t) return t[1];
      },
      has: function (e) {
        return !!f(this, e);
      },
      set: function (e, t) {
        var o = f(this, e);
        o ? (o[1] = t) : this.a.push([e, t]);
      },
      delete: function (e) {
        var t = g(this.a, function (t) {
          return t[0] === e;
        });
        return ~t && this.a.splice(t, 1), !!~t;
      },
    }),
      (e.exports = {
        getConstructor: function (e, t, o, n) {
          var d = e(function (e, i) {
            l(e, d, t, '_i'),
              (e._t = t),
              (e._i = m++),
              (e._l = void 0),
              void 0 != i && s(i, o, e[n], e);
          });
          return (
            i(d.prototype, {
              delete: function (e) {
                if (!r(e)) return !1;
                var o = a(e);
                return !0 === o
                  ? h(c(this, t))['delete'](e)
                  : o && p(o, this._i) && delete o[this._i];
              },
              has: function (e) {
                if (!r(e)) return !1;
                var o = a(e);
                return !0 === o ? h(c(this, t)).has(e) : o && p(o, this._i);
              },
            }),
            d
          );
        },
        def: function (e, t, o) {
          var i = a(n(t), !0);
          return !0 === i ? h(e).set(t, o) : (i[e._i] = o), e;
        },
        ufstore: h,
      });
  },
  function (e, t, o) {
    o(81)('WeakMap');
  },
  function (e, t, o) {
    o(82)('WeakMap');
  },
  function (e, t, o) {
    o(34), o(202), (e.exports = o(2).Array.from);
  },
  function (e, t, o) {
    'use strict';
    var i = o(21),
      a = o(3),
      n = o(47),
      r = o(100),
      l = o(101),
      s = o(52),
      d = o(203),
      p = o(77);
    a(
      a.S +
        a.F *
          !o(107)(function (e) {
            Array.from(e);
          }),
      'Array',
      {
        from: function (e) {
          var t = n(e),
            o = 'function' == typeof this ? this : Array,
            a = arguments.length,
            c = 1 < a ? arguments[1] : void 0,
            u = void 0 !== c,
            g = 0,
            m = p(t),
            h,
            b,
            f,
            y;
          if (
            (u && (c = i(c, 2 < a ? arguments[2] : void 0, 2)),
            void 0 != m && !(o == Array && l(m)))
          )
            for (y = m.call(t), b = new o(); !(f = y.next()).done; g++)
              d(b, g, u ? r(y, c, [f.value, g], !0) : f.value);
          else
            for (h = s(t.length), b = new o(h); h > g; g++)
              d(b, g, u ? c(t[g], g) : t[g]);
          return (b.length = g), b;
        },
      },
    );
  },
  function (e, t, o) {
    'use strict';
    var i = o(14),
      a = o(41);
    e.exports = function (e, t, o) {
      t in e ? i.f(e, t, a(0, o)) : (e[t] = o);
    };
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e) {
    e.exports = '<template>\r\n    <slot></slot>\r\n</template>\r\n';
  },
  function (e) {
    e.exports = '<template>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      static get observedAttributes() {
        return ['level'];
      }
      templateMarkup() {
        return o(209);
      }
      stylesheetMarkup() {
        return o(210);
      }
    }
    (a.tagName = 'lol-uikit-champion-mastery-banner'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="banner-size">\r\n    <div class="champion-mastery-banner"></div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  display: block;\n}\n.banner-size {\n  position: relative;\n  padding-bottom: 158.730158730159%;\n}\n.champion-mastery-banner {\n  position: absolute;\n  width: 100%;\n  height: 124%;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 100% auto;\n  animation: banner-unfurl 0.3s;\n}\n:host(:not([level])) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-locked.png");\n  -webkit-filter: brightness(0.65);\n}\n:host([level]) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-0.png");\n}\n:host([level=\'1\']) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-1.png");\n}\n:host([level=\'2\']) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-2.png");\n}\n:host([level=\'3\']) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-3.png");\n}\n:host([level=\'4\']) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-4.png");\n}\n:host([level=\'5\']) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-5.png");\n}\n:host([level=\'6\']) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-6.png");\n}\n:host([level=\'7\']) .champion-mastery-banner {\n  background-image: url("/fe/lol-static-assets/images/uikit/champion-mastery-banner/mastery-banner-7.png");\n}\n@-moz-keyframes banner-unfurl {\n  from {\n    opacity: 0;\n    top: -8%;\n  }\n  to {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes banner-unfurl {\n  from {\n    opacity: 0;\n    top: -8%;\n  }\n  to {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-o-keyframes banner-unfurl {\n  from {\n    opacity: 0;\n    top: -8%;\n  }\n  to {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes banner-unfurl {\n  from {\n    opacity: 0;\n    top: -8%;\n  }\n  to {\n    opacity: 1;\n    top: 0;\n  }\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    const a = 'name',
      n = 'title',
      r = 'score',
      l = 'chest-status',
      s = 'chest-as-core';
    class d extends i.webComponents.ShadowElement {
      static get observedAttributes() {
        return [a, n, r, l, s];
      }
      templateMarkup() {
        return o(212);
      }
      stylesheetMarkup() {
        return o(213);
      }
      connectedCallback() {
        super.connectedCallback(),
          this.processName(),
          this.processTitle(),
          this.processScore(),
          this.processChestStatus(),
          this.processChestAsCore();
      }
      attributeChangedCallback(e) {
        this.shadowRoot &&
          (e === a
            ? this.processName()
            : e === n
            ? this.processTitle()
            : e === r
            ? this.processScore()
            : e === l
            ? this.processChestStatus()
            : e === s
            ? this.processChestAsCore()
            : void 0);
      }
      processName() {
        const e = this.getAttribute(a),
          t = this.shadowRoot.querySelector('.name');
        t.textContent = e || '';
      }
      processTitle() {
        const e = this.getAttribute(n),
          t = this.shadowRoot.querySelector('.title');
        t.textContent = e || '';
      }
      processScore() {
        const e = this.getAttribute(r),
          t = this.shadowRoot.querySelector('.score');
        t.textContent = e || '';
      }
      processChestStatus() {
        const e = this.getAttribute(l),
          t = this.shadowRoot.querySelector('.chest > .status');
        t.textContent = e || '';
      }
      processChestAsCore() {
        const e = this.getAttribute(s),
          t = this.shadowRoot.querySelector('.chest');
        null === e
          ? t.classList.remove('display-as-core')
          : t.classList.add('display-as-core');
      }
    }
    (d.tagName = 'lol-uikit-champion-mastery-tooltip'), (t.default = d);
  },
  function (e) {
    e.exports =
      '<template>\r\n\r\n  <slot name="lol-uikit-radial-progress"></slot>\r\n\r\n  <div class="info">\r\n    <h4 class="name"></h4>\r\n    <hr class="separator">\r\n    <div class="mastery">\r\n      <span class="score"></span>\r\n      <span class="title"></span>\r\n    </div>\r\n    <div class="chest">\r\n      <span class="status"></span>\r\n    </div>\r\n    <div class="detail">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        'h4,\n::slotted(h4) {\n  font-family: var(--font-display);\n}\n:host {\n  font-family: var(--font-body);\n}\n:host,\nh4,\n::slotted(h4) {\n  -webkit-user-select: none;\n}\n:host,\nh4,\n::slotted(h4) {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\nh4,\n::slotted(h4) {\n  text-transform: uppercase;\n}\nh4:lang(ko-kr),\n::slotted(h4):lang(ko-kr),\nh4:lang(ja-jp),\n::slotted(h4):lang(ja-jp),\nh4:lang(tr-tr),\n::slotted(h4):lang(tr-tr),\nh4:lang(el-gr),\n::slotted(h4):lang(el-gr),\nh4:lang(th-th),\n::slotted(h4):lang(th-th),\nh4:lang(zh-tw),\n::slotted(h4):lang(zh-tw) {\n  text-transform: none;\n}\nh4,\n::slotted(h4) {\n  color: #f0e6d2;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n}\nh4:lang(ar-ae),\n::slotted(h4):lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host:lang(ja-jp) {\n  font-size: 13px;\n}\n:host:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  --champion-mastery-tooltip-name-text-align: initial;\n  --champion-mastery-tooltip-name-width: initial;\n  --champion-mastery-tooltip-name-font-size: 18px;\n  --champion-mastery-tooltip-name-line-height: 22px;\n  --champion-mastery-tooltip-name-letter-spacing: 0.05em;\n  --champion-mastery-tooltip-separator-display: block;\n  --champion-mastery-tooltip-separator-width: initial;\n  --champion-mastery-tooltip-separator-margin: 0 40px 0 0;\n  --champion-mastery-tooltip-separator-margin-rtl: 0 0 0 40px;\n  --champion-mastery-tooltip-separator-background-color: #463714;\n  --champion-mastery-tooltip-separator-background-size: initial;\n  --champion-mastery-tooltip-mastery-justify-content: initial;\n  --champion-mastery-tooltip-mastery-flex-direction: initial;\n  --champion-mastery-tooltip-mastery-flex-wrap: initial;\n  --champion-mastery-tooltip-mastery-score-padding: 0 7px 0 23px;\n  --champion-mastery-tooltip-mastery-score-padding-rtl: 0 23px 0 7px;\n  --champion-mastery-tooltip-mastery-score-before-right: initial;\n  --champion-mastery-tooltip-mastery-title-display: initial;\n  --champion-mastery-tooltip-detail-text-align: initial;\n  --champion-mastery-tooltip-detail-direction: initial;\n}\n:host {\n  padding: 12px 18px 12px 12px;\n  min-width: 255px;\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n:host .name {\n  font-size: var(--champion-mastery-tooltip-name-font-size);\n  line-height: var(--champion-mastery-tooltip-name-line-height);\n  letter-spacing: var(--champion-mastery-tooltip-name-letter-spacing);\n  text-align: var(--champion-mastery-tooltip-name-text-align);\n  width: var(--champion-mastery-tooltip-name-width);\n}\n:host .separator {\n  display: var(--champion-mastery-tooltip-separator-display);\n  border: none;\n  width: var(--champion-mastery-tooltip-separator-width);\n  height: 1px;\n  margin: var(--champion-mastery-tooltip-separator-margin);\n  background-color: var(--champion-mastery-tooltip-separator-background-color);\n  background-size: var(--champion-mastery-tooltip-separator-background-size);\n}\n:host .separator:lang(ar-ae) {\n  margin: var(--champion-mastery-tooltip-separator-margin-rtl);\n}\n:host .mastery {\n  display: flex;\n  margin: 3px 0 0 0;\n  justify-content: var(--champion-mastery-tooltip-mastery-justify-content);\n  flex-direction: var(--champion-mastery-tooltip-mastery-flex-direction);\n  flex-wrap: var(--champion-mastery-tooltip-mastery-flex-wrap);\n}\n:host .mastery > .score {\n  padding: var(--champion-mastery-tooltip-mastery-score-padding);\n}\n:host .mastery > .score::before {\n  right: var(--champion-mastery-tooltip-mastery-score-before-right);\n  margin: 0 0 0 -25px;\n  content: \'\';\n  position: absolute;\n  width: 17px;\n  height: 14px;\n  background: url("/fe/lol-uikit/images/icon-champ-tooltip-mastery.png") center no-repeat;\n  background-size: 100%;\n}\n:host .mastery > .score:lang(ar-ae) {\n  padding: var(--champion-mastery-tooltip-mastery-score-padding-rtl);\n}\n:host .mastery > .score:lang(ar-ae)::before {\n  right: 45px;\n  margin: 0 -45px 0 0;\n}\n:host .mastery > .title {\n  display: var(--champion-mastery-tooltip-mastery-title-display);\n  flex: 1 100%;\n  text-align: right;\n}\n:host .mastery > .title:lang(ar-ae) {\n  text-align: left;\n}\n:host .mastery:lang(ar-ae) {\n  position: relative;\n}\n:host .chest {\n  display: none;\n}\n:host .detail {\n  margin-top: 3px;\n  text-align: var(--champion-mastery-tooltip-detail-text-align);\n  direction: var(--champion-mastery-tooltip-detail-direction);\n}\n:host(.separator-background-image) .separator {\n  background-image: url("/fe/lol-uikit/images/title_divider.png");\n}\n:host(:lang(ar-ae)) {\n  direction: rtl;\n}\nh4,\n::slotted(h4) {\n  margin: 0;\n}\n.info {\n  flex: 1 1 auto;\n}\n.info:lang {\n  direction: rtl;\n}\n:host([chest-acquired]) .chest {\n  display: block;\n  padding: 0 0 0 23px;\n}\n:host([chest-acquired]) .chest:before {\n  content: \'\';\n  position: absolute;\n  width: 21px;\n  height: 14px;\n  background: url("/fe/lol-uikit/images/icon-chest-acquired.png") center no-repeat;\n  background-size: 100%;\n  margin-left: -24px;\n}\n:host([chest-acquired]) .chest.display-as-core:before {\n  background: url("/fe/lol-uikit/images/icon-core-acquired.png") center no-repeat;\n  background-size: 100%;\n}\n:host([chest-acquired]) .chest:lang(ar-ae) {\n  position: relative;\n  padding: 0 23px 0 0;\n  margin-right: -5px;\n}\n:host([chest-acquired]) .chest:lang(ar-ae):before {\n  right: 0;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      static get observedAttributes() {
        return [
          'name',
          'simple',
          'locked',
          'rental',
          'free-to-play',
          'free-to-play-reward',
          'chest-acquired',
        ];
      }
      templateMarkup() {
        return o(215);
      }
      stylesheetMarkup() {
        return o(216);
      }
    }
    (a.tagName = 'lol-uikit-champion-thumbnail'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="champion-thumbnail">\r\n    <slot name="lol-uikit-champion-mastery-banner"></slot>\r\n    <div class="thumbnail-square">\r\n      <slot name="lol-uikit-thumbnail"></slot>\r\n    </div>\r\n    <div class="champion-achievements">\r\n      <div class="chest-acquired-frame"></div>\r\n    </div>\r\n    <div class="champion-availability"></div>\r\n    <slot />\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  font-family: var(--font-body);\n}\n:host {\n  -webkit-user-select: none;\n}\n:host {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.1em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host:lang(ja-jp) {\n  font-size: 13px;\n}\n:host:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.champion-thumbnail {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n:host([name])::after {\n  white-space: nowrap;\n  position: relative;\n  top: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: inline-block;\n  content: attr(name);\n}\n:host(:lang(ar-ae)) {\n  left: auto;\n  right: 50%;\n  transform: translateX(50%);\n}\n.thumbnail-square {\n  order: -1;\n  position: relative;\n}\n::slotted(.lol-uikit-thumbnail) {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n::slotted(.lol-uikit-thumbnail):not([disabled]):not([active=\'false\']):hover {\n  cursor: pointer;\n}\n:host([locked]) ::slotted(.lol-uikit-thumbnail:not(:hover)) img {\n  -webkit-filter: brightness(0.3);\n}\n::slotted(lol-uikit-champion-mastery-banner) {\n  margin: 0 2px 0 2px;\n}\n.champion-availability {\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  pointer-events: none;\n}\n:host([simple]) .champion-availability {\n  display: none;\n}\n:host([free-to-play-reward]) .champion-availability {\n  width: 27px;\n  height: 32px;\n  top: -10px;\n  right: -13px;\n  background-image: url("/fe/lol-uikit/images/icon-free-to-play-reward.png");\n}\n:host([free-to-play]) .champion-availability {\n  width: 38px;\n  height: 38px;\n  top: -12px;\n  right: -18px;\n  background-image: url("/fe/lol-uikit/images/icon-free-to-play.png");\n}\n:host([rental]) .champion-availability {\n  width: 43px;\n  height: 43px;\n  top: -14px;\n  right: -21px;\n  background-image: url("/fe/lol-uikit/images/icon-rental.png");\n}\n:host([locked]) .champion-availability {\n  width: 100%;\n  height: 30px;\n  margin-top: 100%;\n  top: -14px;\n  left: 0;\n  background-image: url("/fe/lol-uikit/images/icon-lock-small.png");\n}\n.champion-achievements {\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n}\n:host([chest-acquired]) .chest-acquired-frame {\n  width: 75px;\n  height: 75px;\n  margin-top: -6px;\n  margin-left: -4px;\n  background: url("/fe/lol-uikit/images/icon-chest-acquired-frame.png") no-repeat center;\n  background-size: contain;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(0),
      n = o(9),
      r = i(n),
      l = o(7),
      s = i(l);
    class d extends a.webComponents.ShadowElement {
      static get observedAttributes() {
        return [
          'arrow-left',
          'arrow-right',
          'refresh',
          'disabled',
          'click-sfx-src',
          'hover-sfx-src',
          'arrow',
        ];
      }
      templateMarkup() {
        return o(218);
      }
      stylesheetMarkup() {
        return o(219);
      }
      setCustomSounds() {
        const e = this.getAttribute('hover-sfx-src'),
          t = this.getAttribute('click-sfx-src'),
          o = e || s.default.closeButtonHover,
          i = t || s.default.closeButtonClick;
        (this._hoverSound = this._createSound(o)),
          (this._clickSound = this._createSound(i));
      }
      playSound(e) {
        e &&
          (0, a.getProvider)()
            .get('rcp-fe-audio')
            .getChannel('sfx-ui')
            .playSound(e);
      }
      _createSound(e) {
        return (0, a.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .createSound(e, { allowConcurrency: !1 });
      }
      handleEvent(e) {
        'MouseEvent' === e.constructor.name &&
          (this.isDisabled() ||
            ('mouseenter' === e.type && this._hoverSound
              ? this._hoverSound.play()
              : 'click' === e.type &&
                this._clickSound &&
                this._clickSound.play()));
      }
      isDisabled() {
        return null !== this.getAttribute('disabled');
      }
      constructor() {
        super(),
          this.addEventListener('click', this.dispatchCloseEvent),
          this.addEventListener('mouseenter', this),
          this.addEventListener('click', this);
      }
      processAttributes() {
        this.setCustomSounds(),
          this._disabledCheck(),
          this._handleArrowAttributes(),
          this._handleRefreshAttribute();
      }
      _handleRefreshAttribute() {
        const e = this._buttonElement();
        e &&
          (this.hasAttribute('refresh')
            ? e.addClass('refresh')
            : e.removeClass('refresh'));
      }
      _handleArrowAttributes() {
        const e = this._buttonElement();
        e &&
          (this.hasAttribute('arrow-left')
            ? (e.addClass('arrow'), e.addClass('arrow-left'))
            : this.hasAttribute('arrow-right')
            ? (e.addClass('arrow'), e.addClass('arrow-right'))
            : (e.removeClass('arrow'),
              e.removeClass('arrow-right'),
              e.removeClass('arrow-left')));
      }
      _disabledCheck() {
        const e = this._buttonElement();
        this.isDisabled() ? e.addClass('disabled') : e.removeClass('disabled');
      }
      _buttonElement() {
        return (0, r.default)(
          this.shadowRoot.querySelector('div.lol-uikit-close-button'),
        );
      }
      dispatchCloseEvent() {
        this.dispatchEvent(
          new Event('closeButtonClick', { bubbles: !0, composed: !0 }),
        );
      }
    }
    (d.tagName = 'lol-uikit-close-button'), (t.default = d);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-close-button">\r\n    <div class="contents">\r\n      <div class="close-icon x-icon"></div>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .lol-uikit-close-button {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: linear-gradient(to top, #463714 4%, #785a28 23%, #c89b3c 90%, #c8aa6e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n:host .contents {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #1e282d;\n  transition: box-shadow 150ms ease-out, color 150ms ease-out;\n}\n:host .close-icon {\n  width: 10px;\n  height: 10px;\n  transform: translate(7px, 7px);\n  -webkit-mask: url("/fe/lol-uikit/images/x-icon.png") no-repeat center;\n  -webkit-mask-size: 10px;\n  background-color: #cdbe91;\n}\n:host .lol-uikit-close-button.disabled,\n:host .lol-uikit-close-button.disabled:hover,\n:host .lol-uikit-close-button.disabled:active {\n  cursor: default;\n  background: none;\n  background-color: #5b5a56;\n}\n:host .lol-uikit-close-button.disabled .contents,\n:host .lol-uikit-close-button.disabled:hover .contents,\n:host .lol-uikit-close-button.disabled:active .contents {\n  background: none;\n  background-color: #1e282d;\n}\n:host .lol-uikit-close-button.disabled .close-icon,\n:host .lol-uikit-close-button.disabled:hover .close-icon,\n:host .lol-uikit-close-button.disabled:active .close-icon {\n  background-color: #5b5a56;\n}\n:host .lol-uikit-close-button:hover {\n  background: linear-gradient(to top, #c89b3c 0%, #f0e6d2 100%);\n}\n:host .lol-uikit-close-button:hover .contents {\n  background: linear-gradient(to top, #3c3c41 0%, #1e2328 100%);\n}\n:host .lol-uikit-close-button:hover .close-icon {\n  background-color: #f0e6d2;\n}\n:host .lol-uikit-close-button:active {\n  background: linear-gradient(to top, #785a28 0%, #463714 100%);\n}\n:host .lol-uikit-close-button:active .close-icon {\n  background-color: #785a28;\n}\n:host .lol-uikit-close-button:active .contents {\n  background: none;\n  background-color: #1e282d;\n}\n:host .lol-uikit-close-button.disabled .contents,\n:host .lol-uikit-close-button:active .contents {\n  box-shadow: none;\n  transition: none;\n}\n:host .lol-uikit-close-button.arrow {\n  width: 32px;\n  height: 32px;\n}\n:host .lol-uikit-close-button.arrow .contents {\n  width: 28px;\n  height: 28px;\n}\n:host .lol-uikit-close-button.arrow .contents .close-icon {\n  width: 7px;\n  height: 10px;\n  transform: translate(11px, 9px);\n  -webkit-mask: url("/fe/lol-uikit/images/arrow-right.png") no-repeat center;\n  -webkit-mask-size: 7px 10px;\n}\n:host .lol-uikit-close-button.arrow.arrow-left {\n  transform: scaleX(-1);\n}\n:host .lol-uikit-close-button.refresh {\n  width: 32px;\n  height: 32px;\n}\n:host .lol-uikit-close-button.refresh .contents {\n  width: 28px;\n  height: 28px;\n}\n:host .lol-uikit-close-button.refresh .contents .close-icon {\n  width: 20px;\n  height: 20px;\n  transform: translate(4px, 4px);\n  -webkit-mask: url("/fe/lol-uikit/images/refresh.png") no-repeat center;\n  -webkit-mask-size: 20px 20px;\n}\n:host([button-type="cog"]) .close-icon {\n  width: 24px;\n  height: 24px;\n  transform: translate(0px, 0px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_settings.png") no-repeat center;\n  -webkit-mask-size: 18px 18px;\n}\n:host([button-type="configure"]) .close-icon {\n  width: 20px;\n  height: 20px;\n  transform: translate(2px, 2px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_settings.png") no-repeat center;\n  -webkit-mask-size: 20px 20px;\n}\n:host([button-type="rename"]) .close-icon {\n  width: 15px;\n  height: 13px;\n  -webkit-mask: url("/fe/lol-uikit/images/icon_edit.png") no-repeat center;\n  -webkit-mask-size: 15px 13px;\n  transform: translate(5px, 5px);\n}\n:host([button-type="rename"]) .close-icon:lang(ar-ae) {\n  transform: translate(-5px, 5px);\n}\n:host([button-type="edit"]) .close-icon {\n  width: 13px;\n  height: 12px;\n  transform: translate(6px, 5px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_edit.png") no-repeat center;\n  -webkit-mask-size: 13px 12px;\n}\n:host([button-type="plus"]) .close-icon {\n  width: 10px;\n  height: 10px;\n  -webkit-mask: url("/fe/lol-uikit/images/icon_add.png") no-repeat center;\n  -webkit-mask-size: 10px 10px;\n  transform: translate(7px, 7px);\n}\n:host([button-type="plus"]) .close-icon:lang(ar-ae) {\n  transform: translate(-7px, 7px);\n}\n:host([button-type="delete"]) .close-icon {\n  width: 13px;\n  height: 15px;\n  -webkit-mask: url("/fe/lol-uikit/images/icon_delete.png") no-repeat center;\n  -webkit-mask-size: 13px 15px;\n  transform: translate(5px, 4px);\n}\n:host([button-type="delete"]) .close-icon:lang(ar-ae) {\n  transform: translate(-5px, 4px);\n}\n:host([button-type="next"]) .close-icon {\n  width: 17px;\n  height: 16px;\n  transform: translate(3px, 4px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_next.png");\n  -webkit-mask-size: 17px 16px;\n}\n:host([button-type="compare"]) .close-icon {\n  width: 24px;\n  height: 24px;\n  transform: translate(0px, 0px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_compare.png") no-repeat center;\n  -webkit-mask-size: 18px 18px;\n}\n:host([button-type="back"]) .close-icon {\n  width: 16px;\n  height: 16px;\n  transform: translate(4px, 4px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_back.png") no-repeat center;\n  -webkit-mask-size: 16px 16px;\n}\n:host([button-type="add"]) .close-icon {\n  width: 11px;\n  height: 11px;\n  transform: translate(7px, 6px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_plus.png") no-repeat center;\n  -webkit-mask-size: 11px 11px;\n}\n:host([button-type="add"]) .close-icon:lang(ar-ae) {\n  transform: translate(-6px, 6px);\n}\n:host([button-type="duplicate"]) .close-icon {\n  width: 20px;\n  height: 20px;\n  transform: translate(2px, 2px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_copy.png") no-repeat center;\n  -webkit-mask-size: 18px 18px;\n}\n:host([button-type="duplicate"]) .close-icon:lang(ar-ae) {\n  transform: translate(-2px, 2px);\n}\n:host([button-type="clear"]) .close-icon {\n  width: 17px;\n  height: 16px;\n  transform: translate(4px, 4px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_clearall.png") no-repeat center;\n  -webkit-mask-size: 17px 16px;\n}\n:host([button-type="clear"]) .close-icon:lang(ar-ae) {\n  transform: translate(-2px, 4px);\n}\n:host([button-type="export"]) .close-icon {\n  width: 17px;\n  height: 16px;\n  transform: translate(4px, 4px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_export.png") no-repeat center;\n  -webkit-mask-size: 14px 14px;\n}\n:host([button-type="export"]) .close-icon:lang(ar-ae) {\n  transform: translate(-3px, 3px);\n}\n:host([button-type="import"]) .close-icon {\n  width: 17px;\n  height: 16px;\n  transform: translate(4px, 4px);\n  -webkit-mask: url("/fe/lol-uikit/images/icon_import.png") no-repeat center;\n  -webkit-mask-size: 14px 14px;\n}\n:host([button-type="import"]) .close-icon:lang(ar-ae) {\n  transform: translate(-3px, 3px);\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(221);
      }
      stylesheetMarkup() {
        return o(222);
      }
      connectedCallback() {
        super.connectedCallback(), this.init();
      }
      init() {
        window.requestAnimationFrame(() => {
          const e = this.shadowRoot.getElementById('glow').style;
          e.removeProperty('--animation-name'),
            e.removeProperty('--width'),
            e.removeProperty('--height');
          var t = this.parentElement.getBoundingClientRect();
          const o = t.width,
            i = t.height;
          e.setProperty('--width', `${o}px`),
            e.setProperty('--height', `${i}px`),
            e.setProperty('--animation-name', 'animate-comet');
        });
      }
    }
    (t.default = a), (a.tagName = 'lol-uikit-comet-border');
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div id="glow">\r\n    <div id="top">\r\n      <div id="top-comet"></div>\r\n    </div>\r\n    <div id="bottom">\r\n      <div id="bottom-comet"></div>\r\n    </div>\r\n    <div id="left">\r\n      <div id="left-comet"></div>\r\n    </div>\r\n    <div id="right">\r\n      <div id="right-comet"></div>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  --border-color: transparent;\n  --border-width: 2px;\n  --comet-color: #f0e6d2;\n  --comet-length: 100px;\n  border: var(--border-width) solid var(--border-color);\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n#glow {\n  --animation-name: none;\n  --height: 0;\n  --width: 0;\n  height: 100%;\n  -webkit-filter: drop-shadow(0 0 1px var(--comet-color)) drop-shadow(0 0 1px var(--comet-color));\n}\n#top,\n#bottom,\n#left,\n#right {\n  overflow: hidden;\n  position: absolute;\n}\n#top,\n#bottom {\n  height: var(--border-width);\n  width: calc(100% + var(--border-width));\n}\n#top {\n  left: calc(var(--border-width) * -1);\n  top: calc(var(--border-width) * -1);\n}\n#bottom {\n  bottom: calc(var(--border-width) * -1);\n  transform: rotate(180deg);\n}\n#left,\n#right {\n  height: var(--border-width);\n  width: calc(var(--height) - var(--border-width));\n}\n#left {\n  right: calc(100% + var(--border-width) * 1);\n  transform: rotate(270deg);\n  transform-origin: 100% 0;\n}\n#right {\n  left: 100%;\n  top: calc(0% + var(--border-width) * -2);\n  transform: rotate(90deg);\n  transform-origin: 0 100%;\n}\n#left-comet,\n#right-comet,\n#top-comet,\n#bottom-comet {\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-name: var(--animation-name);\n  animation-timing-function: linear;\n  background-image: repeating-linear-gradient(270deg, transparent 0, var(--comet-color) 2px, transparent var(--comet-length), transparent calc(var(--width) + var(--height) - var(--border-width) * 2));\n  height: 100%;\n  position: absolute;\n  width: calc(var(--width) + var(--height) + var(--comet-length));\n}\n#left-comet,\n#right-comet {\n  right: 0;\n}\n#top-comet,\n#bottom-comet {\n  left: calc(var(--comet-length) * -1);\n}\n@-moz-keyframes animate-comet {\n  0% {\n    transform: translateX(0px);\n  }\n  100% {\n    transform: translateX(calc(var(--height) + var(--width) - var(--border-width) * 2));\n  }\n}\n@-webkit-keyframes animate-comet {\n  0% {\n    transform: translateX(0px);\n  }\n  100% {\n    transform: translateX(calc(var(--height) + var(--width) - var(--border-width) * 2));\n  }\n}\n@-o-keyframes animate-comet {\n  0% {\n    transform: translateX(0px);\n  }\n  100% {\n    transform: translateX(calc(var(--height) + var(--width) - var(--border-width) * 2));\n  }\n}\n@keyframes animate-comet {\n  0% {\n    transform: translateX(0px);\n  }\n  100% {\n    transform: translateX(calc(var(--height) + var(--width) - var(--border-width) * 2));\n  }\n}\n',
        '',
      ]);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(225);
      }
      activate(e) {
        const t = {};
        this.token = t;
        const o = () => {
          this.isActive(t) && (this.deactivate(), e());
        };
        for (let t = 0; t < this.children.length; t++) {
          if (!this.token) return;
          const e = this.children[t];
          e.activate(o);
        }
      }
      isActive(e = this.token) {
        return this.token === e && e !== void 0;
      }
      deactivate() {
        this.token = void 0;
        for (let e = 0; e < this.children.length; e++) {
          const t = this.children[e];
          t.deactivate();
        }
      }
    }
    (a.tagName = 'uikit-condition-any'), (t.default = a);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(227);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.deactivate();
      }
      static get observedAttributes() {
        return ['duration'];
      }
      activate(e) {
        this.info && this.deactivate();
        const t = { callback: e };
        (this.info = t),
          (t.timeoutId = setTimeout(() => {
            (t.timeoutId = void 0), this.onTimeout(t);
          }, this.getAttribute('duration')));
      }
      deactivate(e = this.info) {
        e &&
          (e.timeoutId && clearTimeout(e.timeoutId),
          e === this.info && (this.info = void 0));
      }
      isActive() {
        return this.info !== void 0;
      }
      onTimeout(e) {
        const t = this.info === e;
        this.deactivate(e), t && e.callback();
      }
    }
    (a.tagName = 'uikit-condition-delay'), (t.default = a);
  },
  function (e) {
    e.exports = '<template>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(48),
      n = i(a),
      r = o(58),
      l = i(r),
      s = o(85),
      d = o(0);
    const p = (0, n.default)(s.VideoPlaybackStates).map(function (e) {
      return s.VideoPlaybackStates[e];
    });
    class c extends d.webComponents.ShadowElement {
      templateMarkup() {
        return o(229);
      }
      static get observedAttributes() {
        return [
          'selector',
          'can-play',
          'ended',
          'non-media-duration',
          'playing',
          'paused',
          'unloaded',
        ];
      }
      activate(e) {
        this.deactivate(), (this.cancellations = []);
        const t = {};
        this.token = t;
        const o = () => {
            this.token === t && (e(), (this.token = void 0));
          },
          a = this.getElement();
        if ((this.attachSwitchChangeHandlers(), !a)) o();
        else if (!('when' in a)) {
          if (this.hasAttribute('non-media-duration')) {
            const e = setTimeout(function () {
              o();
            }, parseInt(this.getAttribute('non-media-duration')));
            this.cancellations.push(function () {
              clearTimeout(e);
            });
          } else o();
        } else if (this.hasAttribute('can-play'))
          a.preload(o, () => {
            this.token === t && (this.deactivate(), this.activate());
          });
        else if (this.hasAttribute('unloaded'))
          this.cancellations.push(
            a.when(s.VideoReadyStates.HAVE_NOTHING, o).cancel,
          );
        else
          for (let e = 0; e < p.length; e++) {
            const t = p[e];
            if (this.hasAttribute(t.toLowerCase()))
              return void this.cancellations.push(a.when(t, o).cancel);
          }
      }
      isActive() {
        return this.token !== void 0;
      }
      attachSwitchChangeHandlers() {
        const e = this.getSwitches(),
          t = this.token,
          o = () => {
            this.token === t && (this.deactivate(), this.activate());
          };
        for (let t = 0; t < e.length; t++) {
          const i = e[t];
          i.subscribeVisibleNodesChanged(o);
        }
        this.removeSwitchChangeHandlers && this.removeSwitchChangeHandlers(),
          (this.removeSwitchChangeHandlers = () => {
            for (let t = 0; t < e.length; t++) {
              const i = e[t];
              i.unsubscribeVisibleNodesChanged(o);
            }
          });
      }
      deactivate() {
        if (
          ((this.token = void 0),
          this.removeSwitchChangeHandlers && this.removeSwitchChangeHandlers(),
          !!this.cancellations)
        ) {
          for (let e = this.cancellations.length - 1; 0 <= e; e--)
            this.cancellations[e]();
          this.cancellations = void 0;
        }
      }
      getSwitches() {
        const e = [];
        for (let t = this.getSelectedElement(); t && 'getVisibleNodes' in t; )
          e.push(t), (t = t.getVisibleNodes()[0]);
        return e;
      }
      getElement() {
        let e = this.getSelectedElement();
        for (; e && 'getVisibleNodes' in e; ) e = e.getVisibleNodes()[0];
        return e;
      }
      getSelectedElement() {
        const e = l.default.getStateMachine(this),
          t = this.getAttribute('selector'),
          o = e.querySelector(':scope ' + t);
        return o;
      }
    }
    (c.tagName = 'uikit-condition-media'), (t.default = c);
  },
  function (e) {
    e.exports = '<template>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0),
      a = o(58),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a);
    class r extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(231);
      }
      static get observedAttributes() {
        return ['name', 'value', 'not-value'];
      }
      activate(e) {
        this.info && this.deactivate();
        const t = n.default.getStateMachine(this);
        if (!t)
          return void console.error(
            'could not find a state machine to attach to',
          );
        if (this.matches(t)) return void e();
        const o = { onConditionSatisfied: e, stateMachine: t };
        (o.handler = this.onParameterChanged.bind(this, o)),
          (this.info = o),
          t.subscribeParameterChanged(this.info.handler);
      }
      deactivate(e = this.info) {
        e &&
          (e.stateMachine.unsubscribeParameterChanged(e.handler),
          e === this.info && (this.info = void 0));
      }
      isActive() {
        return this.info !== void 0;
      }
      onParameterChanged(e, t, o, i) {
        return this.info === e
          ? void (
              t === this.getAttribute('name') &&
              this.matches(i) &&
              (e.onConditionSatisfied(), this.deactivate(e))
            )
          : void this.deactivate(e);
      }
      matches(e) {
        let t;
        return (
          (t =
            e instanceof n.default
              ? e.getAttribute(this.getAttribute('name'))
              : e),
          this.getAttribute('not-value')
            ? this.getAttribute('not-value') !== t
            : this.getAttribute('value') === t
        );
      }
    }
    (r.tagName = 'uikit-condition-parameter'), (t.default = r);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(233);
      }
    }
    (a.tagName = 'lol-uikit-content-block'), (t.default = a);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    o(235), (e.exports = o(2).Object.assign);
  },
  function (e, t, o) {
    var i = o(3);
    i(i.S + i.F, 'Object', { assign: o(111) });
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div tabindex="-1">\r\n    <div class="menu-item"></div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ".context-menu {\n  user-select: none;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  min-width: 127px;\n  width: auto;\n  z-index: 10;\n  box-sizing: border-box;\n  background-color: #010a13;\n  box-shadow: 0 0 1px #000, 0 0 1px #000;\n  -webkit-user-select: none;\n/* if the width is changed, also change moveNearBoundingRect in popout-window.js to account for border size in the\n   alignment of subcontext menus */\n  border-width: 2px;\n  border-style: solid;\n  border-image: linear-gradient(to bottom, #463714, #785a28) 1;\n}\n.context-menu:focus {\n  outline: none;\n}\n.context-menu .menu-item {\n  font: 12px 'LoL Body', Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  display: block;\n  outline: none;\n  min-width: 100%;\n  height: 29px;\n  line-height: 29px;\n  box-sizing: border-box;\n  border: none;\n  background: none;\n  color: #cdbe91;\n  white-space: nowrap;\n  overflow: visible;\n  text-overflow: ellipsis;\n  text-align: left;\n  cursor: default;\n  padding: 0 10px;\n}\n.context-menu .menu-item:lang(ar-ae) {\n  direction: rtl;\n  text-align: right;\n}\n.context-menu .menu-item.has-submenu {\n  position: relative;\n  padding-right: 23px;\n}\n.context-menu .menu-item.has-submenu:after {\n/* right-arrow */\n  content: '';\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  margin-top: -3px;\n  border: 3px solid transparent;\n  border-left-color: #cdbe91;\n}\n.context-menu .menu-item:hover {\n  color: #f0e6d2;\n  background: #1e2328;\n}\n.context-menu .menu-item:active {\n  color: #cdbe91;\n}\n.context-menu .menu-item.disabled,\n.context-menu .menu-item.disabled:hover,\n.context-menu .menu-item.disabled:active {\n  padding: 0 10px;\n  border-left-color: none;\n  border-right-color: none;\n  border-width: 0;\n  cursor: default;\n  color: #a09b8c;\n  background: none;\n  opacity: 0.55;\n/* to override the webkit-filter brightness in focus */\n  -webkit-filter: none;\n}\n.context-menu-root {\n  min-width: 131px;\n  width: auto;\n}\n",
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0),
      a = o(9),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a),
      r = o(62);
    class l extends i.webComponents.ShadowElement {
      static get observedAttributes() {
        return [
          'orientation',
          'appearance',
          'frame',
          'caret',
          'layer-position',
          'dismissable',
          'dismissable-type',
          'close-button',
        ];
      }
      templateMarkup() {
        return o(239);
      }
      stylesheetMarkup() {
        return o(240);
      }
      connectedCallback() {
        super.connectedCallback(),
          this.hasDismissableIcon() &&
            (0, n.default)(this.shadowRoot)
              .find('.lol-uikit-dialog-frame-toast-close-button')[0]
              .addEventListener('click', this.dispatchCloseEvent.bind(this)),
          this.hasDismissableButton() &&
            (0, n.default)(this.shadowRoot)
              .find('.lol-uikit-dialog-frame-close-button')[0]
              .addEventListener('click', this.dispatchCloseEvent.bind(this)),
          this.updateCssClasses();
      }
      processAttributes() {
        this.shadowRoot.parentElement && this.updateCssClasses();
      }
      updateCssClasses() {
        const e = (0, n.default)(this.shadowRoot).find(
          '.lol-uikit-dialog-frame',
        );
        e
          .removeClass('top bottom left right')
          .addClass(this.getOrientation())
          .removeClass('bordered borderless')
          .addClass(this.getFrame())
          .removeClass('enabled disabled')
          .addClass(this.getAppearance())
          .toggleClass('dismissable-icon', this.hasDismissableIcon())
          .toggleClass('dismissable-close-button', this.hasDismissableButton())
          .toggleClass(
            'dismissable-icon-background',
            this.hasDismissableIconBackground(),
          )
          .toggleClass('caret', this.hasCaret())
          .addClass(this.getCaretDirection())
          .toggleClass('node', this.hasNode())
          .addClass(this.getLayerPosition()),
          this.setZIndex();
      }
      getOrientation() {
        return this.getAttribute('orientation') || 'bottom';
      }
      getAppearance() {
        return this.getAttribute('appearance') || 'enabled';
      }
      hasCaret() {
        return this.hasAttribute('caret');
      }
      getFrame() {
        return this.getAttribute('frame') || 'bordered';
      }
      hasDismissableIcon() {
        return (
          'inside' === this.getAttribute('dismissable-type') &&
          (this.hasAttribute('dismissable') ||
            this.hasAttribute('close-button'))
        );
      }
      hasDismissableButton() {
        return (
          'inside' !== this.getAttribute('dismissable-type') &&
          (this.hasAttribute('dismissable') ||
            this.hasAttribute('close-button'))
        );
      }
      hasDismissableIconBackground() {
        return (
          this.hasDismissableIcon() &&
          this.hasAttribute('dismissable-icon-background')
        );
      }
      getCaretDirection() {
        return this.getAttribute('caret');
      }
      hasNode() {
        return this.hasAttribute('node');
      }
      getLayerPosition() {
        return this.getAttribute('layer-position') || 'default';
      }
      setZIndex() {
        const e = this.getLayerPosition();
        this.style.zIndex =
          'above-vignette' === e
            ? r.Z_INDEX_CONSTANTS.CELEBRATIONS_MODAL
            : 'above-menus' === e
            ? r.Z_INDEX_CONSTANTS.CONTEXT_MENUS
            : 0;
      }
      dispatchCloseEvent() {
        this.dispatchEvent(
          new Event('dialogFrameDismissed', { bubbles: !0, composed: !0 }),
        );
      }
    }
    (l.tagName = 'lol-uikit-dialog-frame'), (t.default = l);
  },
  function (e) {
    e.exports =
      '<template id="lol-uikit-template-dialog-frame">\r\n  <div class="lol-uikit-dialog-frame">\r\n    <div class="lol-uikit-dialog-frame-sub-border"></div>\r\n    <div class="content-wrapper">\r\n      <slot></slot>\r\n    </div>\r\n    <div class="lol-uikit-dialog-frame-toast-close-button"></div>\r\n    <div class="lol-uikit-dialog-frame-close-button">\r\n      <lol-uikit-close-button></lol-uikit-close-button>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .lol-uikit-dialog-frame.left,\n:host .lol-uikit-dialog-frame.right {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to right, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host .lol-uikit-dialog-frame.right {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to left, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host .lol-uikit-dialog-frame.top,\n:host .lol-uikit-dialog-frame.bottom {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to top, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host .lol-uikit-dialog-frame.top {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to bottom, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host .lol-uikit-dialog-frame.top.disabled,\n:host .lol-uikit-dialog-frame.bottom.disabled {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to top, #39393e 0, #1e282d 5px, #1e282d 100%) 1 stretch;\n}\n:host .lol-uikit-dialog-frame.top.disabled > .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.bottom.disabled > .lol-uikit-dialog-frame-sub-border::before {\n  top: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-horizontal-disabled.png");\n}\n:host .lol-uikit-dialog-frame.top.disabled > .lol-uikit-dialog-frame-sub-border::after,\n:host .lol-uikit-dialog-frame.bottom.disabled > .lol-uikit-dialog-frame-sub-border::after {\n  bottom: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-horizontal-disabled.png");\n}\n:host .lol-uikit-dialog-frame.top .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.bottom .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.top .lol-uikit-dialog-frame-sub-border::after,\n:host .lol-uikit-dialog-frame.bottom .lol-uikit-dialog-frame-sub-border::after {\n  left: 12px;\n  width: calc(100% - 24px);\n  height: 0;\n  border-width: 4px 4px 0 4px;\n  border-image-width: 4px 4px 0 4px;\n  border-image-slice: 4 4 0 4;\n  border-image-repeat: stretch;\n  border-style: solid;\n}\n:host .lol-uikit-dialog-frame.top .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.bottom .lol-uikit-dialog-frame-sub-border::before {\n  top: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-horizontal.png");\n}\n:host .lol-uikit-dialog-frame.top .lol-uikit-dialog-frame-sub-border::after,\n:host .lol-uikit-dialog-frame.bottom .lol-uikit-dialog-frame-sub-border::after {\n  bottom: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-horizontal.png");\n}\n:host .lol-uikit-dialog-frame.left.disabled,\n:host .lol-uikit-dialog-frame.right.disabled {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to right, #39393e 0, #1e282d 5px, #1e282d 100%) 1 stretch;\n}\n:host .lol-uikit-dialog-frame.left.disabled > .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.right.disabled > .lol-uikit-dialog-frame-sub-border::before {\n  left: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-vertical-disabled.png");\n}\n:host .lol-uikit-dialog-frame.left.disabled > .lol-uikit-dialog-frame-sub-border::after,\n:host .lol-uikit-dialog-frame.right.disabled > .lol-uikit-dialog-frame-sub-border::after {\n  right: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-vertical-disabled.png");\n}\n:host .lol-uikit-dialog-frame.left .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.right .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.left .lol-uikit-dialog-frame-sub-border::after,\n:host .lol-uikit-dialog-frame.right .lol-uikit-dialog-frame-sub-border::after {\n  top: 12px;\n  height: calc(100% - 24px);\n  width: 0;\n  border-width: 4px 4px 4px 0;\n  border-image-width: 4px 4px 4px 0;\n  border-image-slice: 4 4 4 0;\n  border-image-repeat: stretch;\n  border-style: solid;\n}\n:host .lol-uikit-dialog-frame.left .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame.right .lol-uikit-dialog-frame-sub-border::before {\n  left: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-vertical.png");\n}\n:host .lol-uikit-dialog-frame.left .lol-uikit-dialog-frame-sub-border::after,\n:host .lol-uikit-dialog-frame.right .lol-uikit-dialog-frame-sub-border::after {\n  right: -6px;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-vertical.png");\n}\nlol-uikit-dialog-frame {\n  z-index: 0;\n}\n:host .lol-uikit-dialog-frame {\n  position: relative;\n  background: #010a13;\n  box-shadow: 0 0 0 1px rgba(1,10,19,0.48);\n}\n:host .lol-uikit-dialog-frame::before {\n  content: \'\';\n  position: absolute;\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  top: -2px;\n  left: -2px;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);\n  pointer-events: none;\n}\n:host .lol-uikit-dialog-frame .lol-uikit-dialog-frame-sub-border::before,\n:host .lol-uikit-dialog-frame .lol-uikit-dialog-frame-sub-border::after {\n  content: \'\';\n  position: absolute;\n  display: flex;\n  box-sizing: border-box;\n}\n:host .lol-uikit-dialog-frame.top.disabled > .lol-uikit-dialog-frame-sub-border::before {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-horizontal-disabled.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.top.disabled > .lol-uikit-dialog-frame-sub-border::after {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-horizontal-disabled.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.top .lol-uikit-dialog-frame-sub-border::before {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-horizontal.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.top .lol-uikit-dialog-frame-sub-border::after {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-horizontal.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.right.disabled > .lol-uikit-dialog-frame-sub-border::before {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-vertical-disabled.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.right.disabled > .lol-uikit-dialog-frame-sub-border::after {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-vertical-disabled.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.right .lol-uikit-dialog-frame-sub-border::before {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-secondary-vertical.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.right .lol-uikit-dialog-frame-sub-border::after {\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-vertical.png");\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.borderless .lol-uikit-dialog-frame-sub-border {\n  display: none;\n}\n:host .lol-uikit-dialog-frame .lol-uikit-dialog-frame-close-button {\n  display: none;\n}\n:host .lol-uikit-dialog-frame .lol-uikit-dialog-frame-close-button lol-uikit-close-button {\n  z-index: 10000000;\n}\n:host .lol-uikit-dialog-frame .lol-uikit-dialog-frame-uikit-close-button {\n  display: none;\n}\n:host .lol-uikit-dialog-frame.dismissable-icon .lol-uikit-dialog-frame-toast-close-button {\n  display: block;\n  height: 24px;\n  width: 24px;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: url("/fe/lol-uikit/images/close.png"), rgba(0,0,0,0.5);\n  cursor: pointer;\n  border-radius: 4px;\n  background-size: 75% 75%, 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n:host .lol-uikit-dialog-frame.dismissable-icon .lol-uikit-dialog-frame-toast-close-button:lang(ar-ae) {\n  right: auto;\n  left: 8px;\n}\n:host .lol-uikit-dialog-frame.dismissable-icon .lol-uikit-dialog-frame-toast-close-button:hover {\n  background: url("/fe/lol-uikit/images/close.png"), rgba(10,20,40,0.5);\n  background-size: 75% 75%, 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n:host .lol-uikit-dialog-frame.dismissable-icon.dismissable-icon-background .lol-uikit-dialog-frame-toast-close-button {\n  width: 24px;\n  height: 24px;\n  top: 8px;\n  right: 8px;\n  background-color: #0a1428;\n  background-size: 18px 18px;\n  background-position: center;\n  border-radius: 2px;\n  opacity: 0.8;\n  transition: opacity 0.05s ease-in-out;\n}\n:host .lol-uikit-dialog-frame.dismissable-icon.dismissable-icon-background .lol-uikit-dialog-frame-toast-close-button:hover {\n  opacity: 1;\n}\n:host .lol-uikit-dialog-frame.dismissable-close-button .lol-uikit-dialog-frame-close-button {\n  display: block;\n}\n:host .lol-uikit-dialog-frame.dismissable-close-button .lol-uikit-dialog-frame-close-button::before {\n  content: \'\';\n  position: absolute;\n  width: 38px;\n  height: 68px;\n  top: -22px;\n  right: -22px;\n  background-image: url("/fe/lol-uikit/images/frame-button-close-top-down.png");\n  background-size: 38px 68px;\n}\n:host .lol-uikit-dialog-frame.dismissable-close-button .lol-uikit-dialog-frame-close-button:lang(ar-ae)::before {\n  right: auto;\n  left: -22px;\n}\n:host .lol-uikit-dialog-frame.dismissable-close-button .lol-uikit-dialog-frame-close-button lol-uikit-close-button {\n  display: block;\n  position: absolute;\n  top: -17px;\n  right: -17px;\n}\n:host .lol-uikit-dialog-frame.dismissable-close-button .lol-uikit-dialog-frame-close-button lol-uikit-close-button:lang(ar-ae) {\n  right: auto;\n  left: -17px;\n}\n:host .lol-uikit-dialog-frame.caret::after {\n  content: \'\';\n  position: absolute;\n  background: url("/fe/lol-uikit/images/caret.png") 50% no-repeat;\n}\n:host .lol-uikit-dialog-frame.caret.top::after {\n  height: 18px;\n  width: 100%;\n  top: -16px;\n  transform: rotate(180deg);\n}\n:host .lol-uikit-dialog-frame.caret.bottom::after {\n  height: 18px;\n  width: 100%;\n  bottom: -16px;\n}\n:host .lol-uikit-dialog-frame.caret.left::after {\n  height: 100%;\n  width: 32px;\n  top: 0;\n  left: -23px;\n  transform: rotate(90deg);\n}\n:host .lol-uikit-dialog-frame.caret.right::after {\n  height: 100%;\n  width: 32px;\n  top: 0;\n  right: -23px;\n  transform: rotate(-90deg);\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(242);
      }
      stylesheetMarkup() {
        return o(243);
      }
    }
    (a.tagName = 'lol-uikit-dropdown-optgroup'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="ui-dropdown-optgroup">\r\n    <div class="ui-dropdown-optgroup-header">\r\n      <slot name="lol-uikit-dropdown-optgroup-header"></slot>\r\n    </div>\r\n    <div class="ui-dropdown-options">\r\n      <slot name="lol-uikit-dropdown-option"></slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  font-family: var(--font-display);\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  -webkit-user-select: none;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  text-transform: uppercase;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(ko-kr),\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(ja-jp),\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(tr-tr),\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(el-gr),\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(th-th),\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(zh-tw) {\n  text-transform: none;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  text-transform: none;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  color: #f0e6d2;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: 0.075em;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(ja-jp) {\n  font-size: 13px;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  letter-spacing: 0.0375em;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  --dropdown-optgroup-header-font-size: 12px;\n}\n:host {\n  display: flex;\n  flex-direction: row;\n  background-color: #010a13;\n}\n:host .ui-dropdown-optgroup {\n  width: 100%;\n}\n:host .ui-dropdown-optgroup .ui-dropdown-optgroup-header {\n  font-size: var(--dropdown-optgroup-header-font-size);\n  padding: 0 10px;\n  color: #a09b8c;\n  height: 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n',
        '',
      ]);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="ui-dropdown-option"><slot></slot></div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    var i = o(32);
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host(.flat-dropdown-type) .ui-dropdown-option {\n  font-family: var(--font-display);\n}\n:host(.flat-dropdown-type) .ui-dropdown-option {\n  -webkit-user-select: none;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option {\n  text-transform: uppercase;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(ko-kr),\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(ja-jp),\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(tr-tr),\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(el-gr),\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(th-th),\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(zh-tw) {\n  text-transform: none;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option {\n  text-transform: none;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option {\n  color: #f0e6d2;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.075em;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option {\n  letter-spacing: 0.0375em;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  --dropdown-option-flat-height: 40px;\n  --dropdown-option-flat-font-weight: 700;\n  --dropdown-option-flat-overflow: visible;\n  --dropdown-option-flat-text-overflow: clip;\n  --dropdown-option-flat-white-space: inherit;\n  --dropdown-option-direction-rtl: rtl;\n  --dropdown-option-framed-line-height: 30px;\n  --dropdown-option-framed-white-space: nowrap;\n  --dropdown-option-framed-overflow-wrap: unset;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option {\n  height: var(--dropdown-option-flat-height);\n  font-weight: var(--dropdown-option-flat-font-weight);\n  overflow: var(--dropdown-option-flat-overflow);\n  text-overflow: var(--dropdown-option-flat-text-overflow);\n  white-space: var(--dropdown-option-flat-white-space);\n  color: #cdbe91;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  border-bottom: thin solid #1e2328;\n  padding: 0 10px;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option:lang(ar-ae) {\n  padding: 0 10px 0 30px;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option.ui-dropdown-option-disabled {\n  color: #888;\n  cursor: default;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option.ui-dropdown-option-disabled:hover {\n  color: #888;\n  background-color: rgba(30,35,40,0);\n}\n:host(.flat-dropdown-type) .ui-dropdown-option.ui-dropdown-option-unselectable {\n  border-bottom: none;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option.ui-dropdown-option-selected::after {\n  background: url(' +
          i(o(117)) +
          ") center no-repeat;\n  width: 14px;\n  height: 11px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n  content: '';\n}\n:host(.flat-dropdown-type) .ui-dropdown-option.ui-dropdown-option-selected:lang(ar-ae)::after {\n  right: auto;\n  left: 10px;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option:hover {\n  color: #f0e6d2;\n  background-color: #1e2328;\n}\n:host(.flat-dropdown-type) .ui-dropdown-option:active {\n  color: #463714;\n  background-color: rgba(30,35,40,0.5);\n}\n:host(.framed-dropdown-type) .ui-dropdown-option {\n  align-items: center;\n  border-top: thin solid #1f2123;\n  color: #cdbe91;\n  cursor: pointer;\n  display: block;\n  min-height: 30px;\n  line-height: var(--dropdown-option-framed-line-height);\n  margin: 0;\n  overflow: hidden;\n  padding: 2px 9px 2px 7px;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: var(--dropdown-option-framed-white-space);\n  overflow-wrap: var(--dropdown-option-framed-overflow-wrap);\n}\n:host(.framed-dropdown-type) .ui-dropdown-option:lang(ar-ae) {\n  direction: var(--dropdown-option-direction-rtl);\n}\n:host(.framed-dropdown-type) .ui-dropdown-option.ui-dropdown-option-disabled {\n  color: #888;\n  cursor: default;\n}\n:host(.framed-dropdown-type) .ui-dropdown-option.ui-dropdown-option-disabled:hover {\n  color: #888;\n  background-color: rgba(30,35,40,0);\n}\n:host(.framed-dropdown-type) .ui-dropdown-option.ui-dropdown-option-selected {\n  padding-right: 31px;\n}\n:host(.framed-dropdown-type) .ui-dropdown-option.ui-dropdown-option-selected:lang(ar-ae) {\n  padding-right: 7px;\n  padding-left: 31px;\n}\n:host(.framed-dropdown-type) .ui-dropdown-option.ui-dropdown-option-selected::after {\n  background: url(" +
          i(o(117)) +
          ") center no-repeat;\n  width: 14px;\n  height: 11px;\n  position: absolute;\n  right: 13px;\n  top: 50%;\n  transform: translate(0, -50%);\n  content: '';\n}\n:host(.framed-dropdown-type) .ui-dropdown-option.ui-dropdown-option-selected:lang(ar-ae)::after {\n  right: auto;\n  left: 13px;\n}\n:host(.framed-dropdown-type) .ui-dropdown-option:hover {\n  color: #f0e6d2;\n  background-color: #1e2328;\n}\n:host(.framed-dropdown-type) .ui-dropdown-option:active {\n  color: #463714;\n  background-color: rgba(30,35,40,0.5);\n}\n",
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(247);
      }
      stylesheetMarkup() {
        return o(248);
      }
    }
    (a.tagName = 'lol-uikit-flat-button-group'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-flat-button-group">\r\n    <slot></slot>\r\n  </div>\r\n</template>';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ":host {\n  --flat-button-group-background-color: #010a13;\n}\n:host {\n  display: inline-flex;\n}\n:host(:not([type=dialog-frame])) .lol-uikit-flat-button-group {\n  border: thin solid #32281e;\n  border-image: $gradient-palette_button-click 1;\n  background-color: var(--flat-button-group-background-color);\n  padding: 5px;\n  display: flex;\n}\n:host([type=dialog-frame]) .lol-uikit-flat-button-group {\n  position: relative;\n  background-color: var(--flat-button-group-background-color);\n  padding: 0 4px;\n  display: flex;\n}\n:host([type=dialog-frame]) .lol-uikit-flat-button-group::before,\n:host([type=dialog-frame]) .lol-uikit-flat-button-group::after {\n  content: '';\n  position: absolute;\n  height: 10px;\n}\n:host([type=dialog-frame]) .lol-uikit-flat-button-group::before {\n  left: 0;\n  bottom: 0;\n  border-right: 2px solid #614a1f;\n  border-top: 2px solid transparent;\n  height: 10px;\n}\n:host([type=dialog-frame]) .lol-uikit-flat-button-group::after {\n  right: 0;\n  bottom: 0;\n  border-left: 2px solid #614a1f;\n  border-top: 2px solid transparent;\n  height: 10px;\n}\n:host([type=window-popup]) .lol-uikit-flat-button-group {\n  border: none;\n  position: relative;\n  background-color: var(--flat-button-group-background-color);\n  padding: 0 4px;\n  display: flex;\n}\n:host([type=window-popup]) .lol-uikit-flat-button-group::before,\n:host([type=window-popup]) .lol-uikit-flat-button-group::after {\n  content: '';\n  position: absolute;\n  height: 10px;\n}\n:host([type=window-popup]) .lol-uikit-flat-button-group::before {\n  left: 0;\n  bottom: 0;\n  border-right: 2px solid #614a1f;\n  border-top: 2px solid transparent;\n  height: 10px;\n}\n:host([type=window-popup]) .lol-uikit-flat-button-group::after {\n  right: 0;\n  bottom: 0;\n  border-left: 2px solid #614a1f;\n  border-top: 2px solid transparent;\n  height: 10px;\n}\n",
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(5),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i),
      n = o(31),
      r = o(0);
    const l = 'default',
      s = 'over',
      d = 'down',
      p = 'click',
      c = 'disabled';
    class u extends r.webComponents.ShadowElement {
      templateMarkup() {
        return o(250);
      }
      stylesheetMarkup() {
        return o(251);
      }
      constructor() {
        super(),
          (this._mouseOverEvent = this._mouseover.bind(this)),
          (this._mouseOutEvent = this._mouseout.bind(this)),
          (this._mouseDownEvent = this._mousedown.bind(this)),
          (this._clickEvent = this._click.bind(this));
      }
      connectedCallback() {
        super.connectedCallback(), this._addMouseEvents();
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._removeMouseEvents();
      }
      static get observedAttributes() {
        return ['disabled'];
      }
      processAttributes() {
        this._disabledCheck();
      }
      _disabledCheck() {
        this.isDisabled()
          ? (this._removeMouseEvents(), this._setMouseClass(c))
          : (this._addMouseEvents(), this._setMouseClass(l));
      }
      isDisabled() {
        return (0, n.isAttrTruthy)('disabled', this.getAttribute('disabled'));
      }
      _addMouseEvents() {
        const e = this.shadowRoot;
        e &&
          (e.addEventListener('mouseover', this._mouseOverEvent),
          e.addEventListener('mouseout', this._mouseOutEvent),
          e.addEventListener('mousedown', this._mouseDownEvent),
          e.addEventListener('click', this._clickEvent));
      }
      _removeMouseEvents() {
        const e = this.shadowRoot;
        e &&
          (e.removeEventListener('mouseover', this._mouseOverEvent),
          e.removeEventListener('mouseout', this._mouseOutEvent),
          e.removeEventListener('mousedown', this._mouseDownEvent),
          e.removeEventListener('click', this._clickEvent));
      }
      _mouseover() {
        this._setMouseClass(s);
      }
      _mouseout() {
        this._setMouseClass(l);
      }
      _mousedown() {
        this._setMouseClass(d);
      }
      _click() {
        return (
          this._setMouseClass(p),
          this._mouseAnimationTimeout(u._clickAnimationDurationMs)
        );
      }
      _mouseAnimationTimeout(e) {
        return (
          this._removeMouseEvents(),
          new a.default((t) => {
            setTimeout(() => {
              this._disabledCheck(), t();
            }, e);
          })
        );
      }
      _setMouseClass(e) {
        const t = e || l,
          o = this.shadowRoot,
          i = o.querySelector('.lol-uikit-flat-button-secondary-wrapper'),
          a = o.querySelector('.button-frame-container');
        [l, s, d, p, c].forEach((e) => {
          if (e !== t) {
            const t = a.querySelector('.' + e);
            (t.style.opacity = 0), i.classList.remove(e);
          }
        });
        const n = a.querySelector('.' + t);
        (n.style.opacity = 1), i.classList.add(t);
      }
    }
    (u.tagName = 'lol-uikit-flat-button-secondary'),
      (u._clickAnimationDurationMs = 250),
      (t.default = u);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-flat-button-secondary-wrapper">\r\n    <div class="button-frame-container">\r\n      <div class="default"></div>\r\n      <div class="over"></div>\r\n      <div class="down click"></div>\r\n      <div class="disabled"></div>\r\n    </div>\r\n    <div class="lol-uikit-flat-button-secondary-content">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        '.lol-uikit-flat-button-secondary-wrapper .lol-uikit-flat-button-secondary-content {\n  font-family: var(--font-body);\n}\n.lol-uikit-flat-button-secondary-wrapper .lol-uikit-flat-button-secondary-content {\n  -webkit-user-select: none;\n}\n.lol-uikit-flat-button-secondary-wrapper .lol-uikit-flat-button-secondary-content {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.lol-uikit-flat-button-secondary-wrapper .lol-uikit-flat-button-secondary-content {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.lol-uikit-flat-button-secondary-wrapper .lol-uikit-flat-button-secondary-content:lang(ja-jp) {\n  font-size: 13px;\n}\n.lol-uikit-flat-button-secondary-wrapper .lol-uikit-flat-button-secondary-content:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  display: block;\n}\n.lol-uikit-flat-button-secondary-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 90px;\n  height: 100%;\n  min-height: 32px;\n  cursor: pointer;\n  -webkit-user-select: none;\n}\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .default,\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .over,\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .down,\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .disabled {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: #1e2328;\n  box-shadow: 0 0 1px 1px #010a13, inset 0 0 1px 1px #010a13;\n  border: thin solid transparent;\n  border-image-slice: 1;\n  opacity: 0;\n  transition: opacity 200ms linear;\n}\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .default {\n  opacity: 1;\n  border-image-source: linear-gradient(to top, #785b28 0%, #c89c3c 55%, #c8a355 71%, #c8aa6e 100%);\n}\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .over {\n  background: linear-gradient(to bottom, #1e232a 0%, #1e232a 40%, rgba(118,97,51,0.8) 140%);\n  border-image-source: linear-gradient(to top, #c89c3c 0%, #dcc188 50%, #e1c998 71%, #f0e6d8 100%);\n}\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .down,\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .click {\n  transition-duration: 100ms;\n  border-image-source: linear-gradient(to top, #6b5024, #463714);\n}\n.lol-uikit-flat-button-secondary-wrapper .button-frame-container .disabled {\n  border-color: #5c5b57;\n}\n.lol-uikit-flat-button-secondary-wrapper .lol-uikit-flat-button-secondary-content {\n  position: relative;\n  display: flex;\n  flex-basis: 100%;\n  align-items: center;\n  justify-content: center;\n  top: 1px;\n  padding: 1px 15px;\n  font-weight: 700;\n  white-space: nowrap;\n  color: transparent;\n  background-color: #cdbe91;\n  -webkit-background-clip: text;\n  transition: all 200ms linear;\n}\n.lol-uikit-flat-button-secondary-wrapper.over .lol-uikit-flat-button-secondary-content {\n  background-color: #f0e6d2;\n}\n.lol-uikit-flat-button-secondary-wrapper.down .lol-uikit-flat-button-secondary-content,\n.lol-uikit-flat-button-secondary-wrapper.click .lol-uikit-flat-button-secondary-content {\n  transition-duration: 100ms;\n  background-color: #785a28;\n}\n.lol-uikit-flat-button-secondary-wrapper.click {\n  pointer-events: none;\n}\n.lol-uikit-flat-button-secondary-wrapper.disabled {\n  pointer-events: none;\n}\n.lol-uikit-flat-button-secondary-wrapper.disabled .lol-uikit-flat-button-secondary-content {\n  background-color: #5c5b57;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(253),
      n = i(a),
      r = o(25),
      l = i(r),
      s = o(0),
      d = o(7),
      p = i(d);
    class c extends s.webComponents.ShadowElement {
      templateMarkup() {
        return o(256);
      }
      stylesheetMarkup() {
        return o(257);
      }
      connectedCallback() {
        super.connectedCallback(),
          (this._inputElementInitialized = !1),
          (this._labelElementInitialized = !1),
          (this.updateCheckedStateListener =
            this.updateCheckedStateListener ||
            this._updateCheckedState.bind(this)),
          (this.toggleCheckedStateListener =
            this.toggleCheckedStateListener ||
            this._toggleCheckedState.bind(this)),
          (this._initObserver = new MutationObserver(
            this._mutationCallback.bind(this),
          )),
          this._initObserver.observe(this, { childList: !0 });
        const e = this._getInput();
        e && this._initInputElement(e);
        const t = this._getLabel();
        t && this._initLabelElement(t),
          this.addEventListener('click', this.toggleCheckedStateListener);
      }
      _mutationCallback(e) {
        e.forEach((e) => {
          if ('childList' === e.type) {
            const t = (0, l.default)(e.addedNodes);
            t.forEach((e) => {
              'INPUT' === e.tagName && this._initInputElement(e),
                'LABEL' === e.tagName && this._initLabelElement(e);
            });
          }
        });
      }
      _initInputElement(e) {
        if (!this._inputElementInitialized) {
          const t = this,
            o = (0, n.default)(e.__proto__, 'checked'),
            i = o.set;
          (o.set = function (e) {
            i.call(this, e), t._updateCheckedState();
          }),
            Object.defineProperty(e, 'checked', o),
            e.addEventListener('change', this.updateCheckedStateListener),
            this._updateCheckedState(),
            e.addEventListener('click', (t) => {
              t.stopPropagation();
            }),
            this._setUpDisabledAttributeObserver(),
            (this._inputElementInitialized = !0);
        }
        this._inputElementInitialized &&
          this._labelElementInitialized &&
          this._initObserver.disconnect();
      }
      _initLabelElement(e) {
        this._labelElementInitialized ||
          (e.removeAttribute('for'), (this._labelElementInitialized = !0)),
          this._inputElementInitialized &&
            this._labelElementInitialized &&
            this._initObserver.disconnect();
      }
      _setUpDisabledAttributeObserver() {
        const e = this._getInput();
        if (e) {
          const t = new MutationObserver(
            this._observeDisabledAttribute.bind(this),
          );
          t.observe(e, { attributes: !0, attributeFilter: ['disabled'] }),
            (this.disabledAttributeObserver = t),
            this._observeDisabledAttribute();
        }
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        const e = this._getInput();
        e && e.removeEventListener('change', this.updateCheckedStateListener),
          this.disabledAttributeObserver &&
            this.disabledAttributeObserver.disconnect();
      }
      _getInput() {
        return this.querySelector('input');
      }
      _getLabel() {
        return this.querySelector('label');
      }
      _getSpan() {
        return this.shadowRoot.querySelector('span');
      }
      _toggleCheckedState() {
        const e = this._getInput();
        if ((e.click(), !e.disabled)) {
          const t = new Event('checkboxToggle', { bubbles: !0 });
          (t.checked = e), this.dispatchEvent(t), this._playClickSound();
        }
      }
      _updateCheckedState() {
        const e = this._getInput();
        e.checked
          ? this.classList.add('checked')
          : this.classList.remove('checked');
      }
      _observeDisabledAttribute() {
        const e = this._getInput();
        e && e.disabled
          ? this.classList.add('disabled')
          : this.classList.remove('disabled');
      }
      _playClickSound() {
        (0, s.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .playSound(p.default.flatCheckBoxClick);
      }
    }
    (c.tagName = 'lol-uikit-flat-checkbox'), (t.default = c);
  },
  function (e, t, o) {
    e.exports = { default: o(254), __esModule: !0 };
  },
  function (e, t, o) {
    o(255);
    var i = o(2).Object;
    e.exports = function (e, t) {
      return i.getOwnPropertyDescriptor(e, t);
    };
  },
  function (e, t, o) {
    var i = o(28),
      a = o(118).f;
    o(57)('getOwnPropertyDescriptor', function () {
      return function (e, t) {
        return a(i(e), t);
      };
    });
  },
  function (e) {
    e.exports =
      '<template>\r\n  <slot name="input"></slot>\r\n  <span class="checkbox-span"></span>\r\n  <slot name="label"></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    var i = o(32);
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host ::slotted(label) {\n  font-family: var(--font-body);\n}\n:host ::slotted(label) {\n  -webkit-user-select: none;\n}\n:host ::slotted(label) {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host ::slotted(label) {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.1em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host ::slotted(label):lang(ja-jp) {\n  font-size: 13px;\n}\n:host ::slotted(label):lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n:host ::slotted(input) {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n:host ::slotted(label) {\n  color: #a09b8c;\n  cursor: pointer;\n  margin: 1px 0 0 5px;\n}\n:host ::slotted(label):lang(ar-ae) {\n  direction: rtl;\n  margin: 1px 5px 0 0;\n}\n:host span.checkbox-span {\n  width: 14px;\n  height: 14px;\n  background: url(' +
          i(o(258)) +
          ') no-repeat;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n:host ::slotted(input:checked) + span.checkbox-span {\n  background-position-y: -14px;\n}\n:host(.checked) span.checkbox-span {\n  background-position-y: -28px;\n}\n:host(.checked:hover:not(.disabled)) span.checkbox-span {\n  background-position-y: -42px;\n}\n:host(.disabled) {\n  -webkit-filter: brightness(0.5);\n  cursor: default;\n}\n:host(.disabled) span.checkbox-span,\n:host(.disabled):hover span.checkbox-span {\n  cursor: default;\n}\n:host(.disabled) ::slotted(label) {\n  color: #a09b8c;\n  cursor: default;\n}\n:host(:not(.disabled)) ::slotted(input:focus) + ::slotted(label) {\n  color: #f0e6d2;\n}\n:host(:not(.disabled):hover) span.checkbox-span {\n  background-position-y: -14px;\n}\n:host(:not(.disabled):hover) ::slotted(label) {\n  color: #f0e6d2;\n}\n:host(:lang(ar-ae)) {\n  direction: rtl;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    e.exports = o.p + 'checkbox-spritesheet.png';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(119),
      n = i(a),
      r = o(11),
      l = i(r);
    class s extends n.default {
      templateMarkup() {
        return o(262);
      }
      stylesheetMarkup() {
        return o(263);
      }
      template() {
        return l.default
          .get()
          .getElementById('lol-uikit-template-flat-dropdown');
      }
    }
    (s.tagName = 'lol-uikit-flat-dropdown'), (t.default = s);
  },
  function () {},
  function (e, t, o) {
    'use strict';
    function i(t) {
      const e = t.target || t.srcElement;
      e.__resizeRAF__ && e.cancelAnimationFrame(e.__resizeRAF__),
        (e.__resizeRAF__ = e.requestAnimationFrame(function () {
          const o = e.__resizeTrigger__;
          o.__resizeListeners__.forEach(function (e) {
            e.call(o, t);
          });
        }));
    }
    function a() {
      (this.contentDocument.defaultView.__resizeTrigger__ =
        this.__resizeElement__),
        this.contentDocument.defaultView.addEventListener('resize', i);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.removeResizeListener = t.addResizeListener = void 0);
    var n = o(27),
      r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n);
    const l = (0, r.default)('rcp-fe-lol-uikit:warn');
    (l.log = r.default.consoleWrap('warn')),
      (t.addResizeListener = function (e, t) {
        if (!e.__resizeListeners__) {
          (e.__resizeListeners__ = []),
            'static' === getComputedStyle(e).position &&
              (l(
                'Calling addResizeListener on a DOM element with its CSS position property set to static will result in it automatically being changed to position: relative.',
              ),
              (e.style.position = 'relative'));
          const t = (e.__resizeTrigger__ = document.createElement('object'));
          t.setAttribute(
            'style',
            'display: block; position: absolute;top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;pointer-events: none; z-index: -1;',
          ),
            (t.__resizeElement__ = e),
            t.classList.add('uikit-resize-detection-helper'),
            (t.onload = a),
            (t.type = 'text/html'),
            (t.data = 'about:blank'),
            e.appendChild(t);
        }
        e.__resizeListeners__.push(t);
      }),
      (t.removeResizeListener = function (e, t) {
        e.__resizeListeners__ &&
          0 !== e.__resizeListeners__.length &&
          (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1),
          !e.__resizeListeners__.length &&
            (e.__resizeTrigger__.contentDocument.defaultView.removeEventListener(
              'resize',
              i,
            ),
            (e.__resizeTrigger__ = !e.removeChild(e.__resizeTrigger__))));
      });
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="ui-dropdown">\r\n    <div class="ui-dropdown-options-container">\r\n      <lol-uikit-scrollable>\r\n        <div class="ui-dropdown-ungrouped-options">\r\n          <slot name="lol-uikit-dropdown-option"></slot>\r\n        </div>\r\n        <div class="ui-dropdown-optgroups">\r\n          <slot name="lol-uikit-dropdown-optgroup"></slot>\r\n        </div>\r\n        <!--\r\n          This <slot> element used to invite in the host options list cannot include\r\n          the host\'s self-generated currently selected element (see base-dropdown.js\r\n          for the case where the stylablecontent attribute is set).\r\n        -->\r\n        <slot></slot>\r\n      </lol-uikit-scrollable>\r\n    </div>\r\n    <!-- \r\n      There\'s some subtlety in the way the slot elements are ordered and in the way\r\n      their invitations are triggered here. The currently selected element\r\n      must lie on top of the options list, otherwise when the options list is expanded,\r\n      the currently selected element will be covered up. This is why the \r\n      ui-dropdown-current section is AFTER the ui-dropdown-options-container section.\r\n    -->\r\n    <div class="ui-dropdown-current">\r\n      <div class="ui-dropdown-current-content shadow"></div>\r\n      <slot name=".ui-dropdown-current-content.light"></slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    var i = o(32);
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .ui-dropdown .ui-dropdown-current {\n  font-family: var(--font-display);\n}\n:host .ui-dropdown .ui-dropdown-current {\n  -webkit-user-select: none;\n}\n:host .ui-dropdown .ui-dropdown-current {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host .ui-dropdown .ui-dropdown-current {\n  text-transform: uppercase;\n}\n:host .ui-dropdown .ui-dropdown-current:lang(ko-kr),\n:host .ui-dropdown .ui-dropdown-current:lang(ja-jp),\n:host .ui-dropdown .ui-dropdown-current:lang(tr-tr),\n:host .ui-dropdown .ui-dropdown-current:lang(el-gr),\n:host .ui-dropdown .ui-dropdown-current:lang(th-th),\n:host .ui-dropdown .ui-dropdown-current:lang(zh-tw) {\n  text-transform: none;\n}\n:host .ui-dropdown .ui-dropdown-current {\n  color: #f0e6d2;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n}\n:host .ui-dropdown .ui-dropdown-current:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host(.active) .ui-dropdown .ui-dropdown-options-container {\n  border: thin solid transparent;\n  border-image: linear-gradient(to top, #695625, #463714) 1;\n}\n:host {\n  --flat-dropdown-current-height: 40px;\n  --flat-dropdown-scrollable-max-height: none;\n  --flat-dropdownactive-z-index: auto;\n  --flat-dropdownactive-max-width: none;\n  --flat-dropdownactive-current-display: flex;\n  --flat-dropdownactive-opens-upward-container-padding: 0 0 40px 0;\n  --flat-dropdownactive-opens-upward-container-margin: 0;\n  --flat-dropdown-current-content-display: block;\n  --flat-dropdown-current-content-max-width: none;\n  --flat-dropdown-current-content-text-transform: none;\n  --flat-dropdown-current-content-white-space: normal;\n  --flat-dropdown-current-content-text-overflow: clip;\n  --flat-dropdown-current-content-overflow: visible;\n  --flat-dropdown-current-content-color: #cdbe91;\n  --flat-dropdown-current-content-font-size: 18px;\n  --flat-dropdown-current-content-line-height: 22px;\n  --flat-dropdown-current-content-letter-spacing: 0.025em;\n  --flat-dropdown-direction-rtl: rtl;\n  --flat-dropdown-current-after-margin-rtl: 0 7px 0 0;\n}\n:host([stylablecontent]) .ui-dropdown-current-content.shadow {\n  display: none;\n}\n:host(:not([stylablecontent])) .ui-dropdown-current-content.light {\n  display: none;\n}\n:host .ui-dropdown-current-content,\n:host ::slotted(.ui-dropdown-current-content) {\n  display: var(--flat-dropdown-current-content-display);\n  max-width: var(--flat-dropdown-current-content-max-width);\n  text-transform: var(--flat-dropdown-current-content-text-transform);\n  white-space: var(--flat-dropdown-current-content-white-space);\n  text-overflow: var(--flat-dropdown-current-content-text-overflow);\n  overflow: var(--flat-dropdown-current-content-overflow);\n  color: var(--flat-dropdown-current-content-color);\n  font-size: var(--flat-dropdown-current-content-font-size);\n  line-height: var(--flat-dropdown-current-content-line-height);\n  letter-spacing: var(--flat-dropdown-current-letter-spacing);\n}\n:host {\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n  height: 40px;\n  outline: 0;\n}\n:host .ui-dropdown {\n  display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  user-select: none;\n  margin: 0;\n  width: 100%;\n  padding: 0;\n}\n:host .ui-dropdown:lang(ar-ae) {\n  direction: var(--flat-dropdown-direction-rtl);\n}\n:host .ui-dropdown .ui-dropdown-current {\n  display: flex;\n  flex-direction: row;\n  background: none;\n  position: absolute;\n  height: var(--flat-dropdown-current-height);\n  margin: 0;\n  align-items: center;\n  padding: 0 10px;\n  cursor: pointer;\n}\n:host .ui-dropdown .ui-dropdown-current:hover {\n  color: #f0e6d2;\n}\n:host .ui-dropdown .ui-dropdown-current:hover::after {\n  -webkit-filter: brightness(2.2);\n}\n:host .ui-dropdown .ui-dropdown-current::after {\n  content: \'\';\n  background: url(' +
          i(o(121)) +
          ') center no-repeat;\n  width: 13px;\n  height: 19px;\n  margin: 0 0 0 7px;\n}\n:host .ui-dropdown .ui-dropdown-current:lang(ar-ae)::after {\n  margin: var(--flat-dropdown-current-after-margin-rtl);\n}\n:host .ui-dropdown .ui-dropdown-options-container {\n  background-color: #010a13;\n  width: 100%;\n  opacity: 0;\n  position: absolute;\n  height: 0;\n  visibility: hidden;\n  transition: opacity 400ms;\n}\n:host .ui-dropdown .ui-dropdown-options-container lol-uikit-scrollable {\n  max-height: var(--flat-dropdown-scrollable-max-height);\n}\n:host .ui-dropdown.opens-upward .ui-dropdown-options-container {\n  bottom: 100%;\n  top: auto;\n  margin-bottom: -42px;\n}\n:host(.active) .ui-dropdown {\n  z-index: var(--flat-dropdownactive-z-index);\n  max-width: var(--flat-dropdownactive-max-width);\n}\n:host(.active) .ui-dropdown .ui-dropdown-current {\n  display: var(--flat-dropdownactive-current-display);\n  color: #785a28;\n}\n:host(.active) .ui-dropdown .ui-dropdown-current:hover {\n  color: #785a28;\n}\n:host(.active) .ui-dropdown .ui-dropdown-current:hover::after {\n  -webkit-filter: none;\n}\n:host(.active) .ui-dropdown .ui-dropdown-current::after {\n  background-image: url(' +
          i(o(122)) +
          ');\n}\n:host(.active) .ui-dropdown .ui-dropdown-options-container {\n  border-width: 2px;\n  padding-top: 40px;\n  width: 100%;\n  opacity: 1;\n  height: auto;\n  transition: opacity 400ms;\n  visibility: visible;\n}\n:host(.active) .ui-dropdown.opens-upward .ui-dropdown-options-container {\n  padding: var(--flat-dropdownactive-opens-upward-container-padding);\n  margin: var(--flat-dropdownactive-opens-upward-container-margin);\n}\n:host(.disabled) {\n  cursor: default;\n  pointer-events: none;\n}\n:host(.disabled) .ui-dropdown .ui-dropdown-current {\n  color: #3c3c41;\n}\n:host(.disabled) .ui-dropdown .ui-dropdown-current::after {\n  -webkit-filter: grayscale(100%);\n  opacity: 0.35;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(30),
      a = o(0),
      n = o(7),
      r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n);
    class l extends a.webComponents.ShadowElement {
      templateMarkup() {
        return o(265);
      }
      connectedCallback() {
        super.connectedCallback();
        const e = this.shadowRoot;
        (this.focusInEventHandler = this.focusInEventHandler.bind(this)),
          e.addEventListener('focusin', this.focusInEventHandler),
          (this._focusInSound = this._createSound(r.default.focus));
      }
      focusInEventHandler() {
        this._focusInSound && this._focusInSound.play();
      }
      _createSound(e) {
        return (0, i.createSound)('sfx-ui', e, { allowConcurrency: !1 });
      }
    }
    (l.tagName = 'lol-uikit-flat-input'), (t.default = l);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot><!-- input --></slot>\r\n</template>';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      static get observedAttributes() {
        return [];
      }
      templateMarkup() {
        return o(267);
      }
      stylesheetMarkup() {
        return o(268);
      }
    }
    (a.tagName = 'lol-uikit-flat-textarea'), (t.default = a);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot />\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host ::slotted(textarea) {\n  font-family: var(--font-body);\n}\n:host ::slotted(textarea) {\n  -webkit-user-select: none;\n}\n:host ::slotted(textarea) {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host ::slotted(textarea) {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host ::slotted(textarea):lang(ja-jp) {\n  font-size: 13px;\n}\n:host ::slotted(textarea):lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  display: block;\n}\n:host ::slotted(textarea) {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin-top: 2px;\n  font-size: 12px;\n  color: #f0e6d2;\n  border-color: #785a28;\n  border-width: 1px;\n  border-style: solid;\n  background-color: rgba(0,0,0,0.7);\n  vertical-align: middle;\n  padding: 8px 6px;\n  -webkit-appearance: none;\n  outline: none;\n  box-shadow: 0 0 0 1px rgba(0,0,0,0.25) inset, 0 0 0 1px rgba(0,0,0,0.25);\n  resize: none;\n}\n:host ::slotted(textarea):focus {\n  background: linear-gradient(to bottom, rgba(7,16,25,0.7), rgba(32,39,44,0.7));\n  border-image: linear-gradient(to bottom, #785a28, #c8aa6e) 1 stretch;\n}\n:host ::slotted(textarea):disabled {\n  background-color: #1e2328;\n  border-color: #3c3c41;\n}\n:host ::slotted(textarea)::-webkit-input-placeholder {\n  color: #a09b8c;\n  padding-left: 3px;\n  font-style: italic;\n}\n:host ::slotted(textarea)::-webkit-textfield-decoration-container {\n  position: relative;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(270);
      }
      stylesheetMarkup() {
        return o(271);
      }
      static get observedAttributes() {
        return [
          'orientation',
          'show',
          'animated',
          'caretless',
          'borderless',
          'caretoffset',
          'dismissable',
        ];
      }
      processAttributes() {
        this.processWrapper(), this.processBorders();
      }
      getOrientation() {
        return this.getAttribute('orientation') || 'bottom';
      }
      processWrapper() {
        const e = this.shadowRoot,
          t = e.querySelector('.lol-uikit-flyout-frame-wrapper'),
          o = this.getOrientation(),
          i = this.getAttribute('show') || 'true';
        t &&
          (t.classList.remove('top', 'bottom', 'left', 'right'),
          t.classList.add(o),
          this.setClosable(),
          'true' === i
            ? (t.classList.remove('idle', 'animation', 'closing'),
              this.setAnimated())
            : t.classList.contains('idle') &&
              (t.classList.remove('idle'), t.classList.add('closing')));
      }
      isVertical() {
        const e = this.getOrientation();
        return 'top' === e || 'bottom' === e;
      }
      isHorizontal() {
        const e = this.getOrientation();
        return 'left' === e || 'right' === e;
      }
      isAnimated() {
        const e = this.getAttribute('animated');
        return 'true' === e;
      }
      processBorders() {
        const e = this.shadowRoot.querySelector('.caret'),
          t = this.shadowRoot.querySelector('.border'),
          o = this.shadowRoot.querySelector('.sub-border');
        if (e && t && o) {
          const i = 'true' === this.getAttribute('caretless'),
            a = 'true' === this.getAttribute('borderless');
          if (
            ((e.style.visibility = i ? 'hidden' : 'visible'),
            (t.style.visibility = a ? 'hidden' : 'visible'),
            (o.style.visibility = a || i ? 'hidden' : 'visible'),
            !i)
          ) {
            const t = parseInt(this.getAttribute('caretoffset')) || 0;
            (e.style.left = null),
              (e.style.top = null),
              this.isVertical()
                ? (e.style.left = t + 'px')
                : this.isHorizontal() && (e.style.top = t + 'px');
          }
        }
      }
      setClosable() {
        const e = this.shadowRoot,
          t = this.getAttribute('dismissable'),
          o = e.querySelector('.lol-uikit-flyout-frame-wrapper');
        o.classList.remove('close-button'),
          'true' === t && o.classList.add('close-button');
      }
      setAnimated() {
        const e = this.shadowRoot,
          t = e.querySelector('.lol-uikit-flyout-frame-wrapper');
        this.isAnimated()
          ? t.classList.add('animation')
          : t.classList.remove('animation'),
          setTimeout(function () {
            t.classList.add('idle');
          }, 50);
      }
    }
    (a.tagName = 'lol-uikit-flyout-frame'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-flyout-frame-wrapper">\r\n    <div class="border"></div>\r\n    <div class="sub-border"></div>\r\n    <div class="caret"></div>\r\n    <div class="lol-uikit-flyout-frame">\r\n      <slot></slot>\r\n    </div>\r\n    <div class="close-button-container">\r\n      <lol-uikit-close-button/>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    var i = o(32);
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ":host .lol-uikit-flyout-frame-wrapper.right .border {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to right, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .border {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to left, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .border {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to top, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host .lol-uikit-flyout-frame-wrapper.bottom .border {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to bottom, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host {\n  pointer-events: all;\n}\n:host .lol-uikit-flyout-frame-wrapper {\n  position: relative;\n  transition: 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99);\n}\n:host .lol-uikit-flyout-frame-wrapper .border {\n  position: absolute;\n  box-sizing: border-box;\n  background-color: #010a13;\n  box-shadow: 0 0 0 1px rgba(1,10,19,0.48);\n  transition: 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99);\n}\n:host .lol-uikit-flyout-frame-wrapper .border::before {\n  content: '';\n  position: absolute;\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  top: -2px;\n  left: -2px;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);\n  pointer-events: none;\n}\n:host .lol-uikit-flyout-frame-wrapper .sub-border {\n  position: absolute;\n  display: flex;\n  box-sizing: border-box;\n  transition: 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99);\n}\n:host .lol-uikit-flyout-frame-wrapper .sub-border::before {\n  content: '';\n  position: absolute;\n}\n:host .lol-uikit-flyout-frame-wrapper .close-button-container {\n  display: none;\n}\n:host .lol-uikit-flyout-frame-wrapper.close-button .close-button-container {\n  display: block;\n}\n:host .lol-uikit-flyout-frame-wrapper.close-button .close-button-container::before {\n  content: '';\n  position: absolute;\n  width: 38px;\n  height: 68px;\n  top: -20px;\n  right: -20px;\n  background-image: url(\"/fe/lol-uikit/images/frame-button-close-top-down.png\");\n  background-size: 38px 68px;\n}\n:host .lol-uikit-flyout-frame-wrapper.close-button .close-button-container lol-uikit-close-button {\n  display: block;\n  position: absolute;\n  top: -15px;\n  right: -15px;\n}\n:host .lol-uikit-flyout-frame-wrapper .caret {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  transition: top 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99) ease, left 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99) ease, right 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99) ease, bottom 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99) ease;\n}\n:host .lol-uikit-flyout-frame-wrapper .caret::before {\n  content: '';\n  position: absolute;\n  width: 24px;\n  height: 16px;\n  background-image: url(" +
          i(o(272)) +
          ');\n  background-size: initial;\n  background-position: -312px;\n  background-repeat: no-repeat;\n}\n:host .lol-uikit-flyout-frame-wrapper .lol-uikit-flyout-frame {\n  position: relative;\n  display: flex;\n  -webkit-mask-image: linear-gradient(to left, #000, #000);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  padding: 2px;\n  box-sizing: border-box;\n  transition: 250ms all cubic-bezier(0.02, 0.85, 0.08, 0.99), 300ms opacity linear;\n}\n:host .lol-uikit-flyout-frame-wrapper .lol-uikit-flyout-frame:lang(ar-ae) {\n  direction: rtl;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .border,\n:host .lol-uikit-flyout-frame-wrapper.bottom .border {\n  width: 100%;\n  height: 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .sub-border,\n:host .lol-uikit-flyout-frame-wrapper.bottom .sub-border {\n  left: 8px;\n  width: calc(100% - 16px);\n  height: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .sub-border::before,\n:host .lol-uikit-flyout-frame-wrapper.bottom .sub-border::before {\n  width: calc(100% - 8px);\n  height: 0;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-horizontal.png");\n  border-width: 4px 4px 0 4px;\n  border-image-width: 4px 4px 0 4px;\n  border-image-slice: 4 4 0 4;\n  border-image-repeat: stretch;\n  border-style: solid;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .caret,\n:host .lol-uikit-flyout-frame-wrapper.bottom .caret {\n  width: 100%;\n  height: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .caret::before,\n:host .lol-uikit-flyout-frame-wrapper.bottom .caret::before {\n  left: calc(50% - 12px);\n  transform-origin: center center;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .lol-uikit-flyout-frame,\n:host .lol-uikit-flyout-frame-wrapper.bottom .lol-uikit-flyout-frame {\n  -webkit-mask-size: 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .border,\n:host .lol-uikit-flyout-frame-wrapper.right .border {\n  width: 100%;\n  height: 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .sub-border,\n:host .lol-uikit-flyout-frame-wrapper.right .sub-border {\n  width: 0;\n  height: calc(100% - 16px);\n  top: 8px;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .sub-border::before,\n:host .lol-uikit-flyout-frame-wrapper.right .sub-border::before {\n  height: calc(100% - 8px);\n  width: 0;\n  border-image-source: url("/fe/lol-uikit/images/sub-border-primary-vertical.png");\n  border-width: 4px 4px 4px 0;\n  border-image-width: 4px 4px 4px 0;\n  border-image-slice: 4 4 4 0;\n  border-image-repeat: stretch;\n  border-style: solid;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .caret,\n:host .lol-uikit-flyout-frame-wrapper.right .caret {\n  width: 0;\n  height: 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .caret::before,\n:host .lol-uikit-flyout-frame-wrapper.right .caret::before {\n  top: calc(50% + 12px);\n}\n:host .lol-uikit-flyout-frame-wrapper.left .lol-uikit-flyout-frame,\n:host .lol-uikit-flyout-frame-wrapper.right .lol-uikit-flyout-frame {\n  -webkit-mask-size: 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.bottom .sub-border {\n  top: 0;\n  transform: rotate(180deg);\n}\n:host .lol-uikit-flyout-frame-wrapper.bottom .caret {\n  top: 3px;\n}\n:host .lol-uikit-flyout-frame-wrapper.bottom .caret::before {\n  bottom: 0;\n  transform: rotate(180deg);\n}\n:host .lol-uikit-flyout-frame-wrapper.top .sub-border {\n  bottom: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.top .caret {\n  bottom: 3px;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .sub-border {\n  right: -4px;\n  transform: rotate(180deg);\n}\n:host .lol-uikit-flyout-frame-wrapper.left .caret {\n  right: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.left .caret::before {\n  left: -3px;\n  transform-origin: top left;\n  transform: rotate(270deg);\n}\n:host .lol-uikit-flyout-frame-wrapper.right .sub-border {\n  left: -4px;\n}\n:host .lol-uikit-flyout-frame-wrapper.right .caret {\n  left: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.right .caret::before {\n  right: -3px;\n  transform-origin: top right;\n  transform: rotate(90deg);\n}\n:host .lol-uikit-flyout-frame-wrapper.animation .caret::before {\n  background-position: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.top .border,\n:host .lol-uikit-flyout-frame-wrapper.animation.bottom .border {\n  width: 50%;\n  left: 25%;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.top .sub-border,\n:host .lol-uikit-flyout-frame-wrapper.animation.bottom .sub-border {\n  width: 30%;\n  left: calc(33% + 8px);\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.top .lol-uikit-flyout-frame,\n:host .lol-uikit-flyout-frame-wrapper.animation.bottom .lol-uikit-flyout-frame {\n  -webkit-mask-size: 50% 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.left .border,\n:host .lol-uikit-flyout-frame-wrapper.animation.right .border {\n  height: 50%;\n  top: 25%;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.left .sub-border,\n:host .lol-uikit-flyout-frame-wrapper.animation.right .sub-border {\n  height: 30%;\n  top: calc(33% + 8px);\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.left .lol-uikit-flyout-frame,\n:host .lol-uikit-flyout-frame-wrapper.animation.right .lol-uikit-flyout-frame {\n  opacity: 0;\n  -webkit-mask-size: 100% 50%;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle .border {\n  width: 100%;\n  height: 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle .caret::before {\n  animation: caretIntro 433ms steps(13, end) forwards;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle .lol-uikit-flyout-frame {\n  opacity: 1;\n  -webkit-mask-size: 100% 100%;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.top,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.bottom {\n  top: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.top .border,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.bottom .border,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.top border-glow,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.bottom border-glow {\n  left: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.top .sub-border,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.bottom .sub-border {\n  width: calc(100% - 16px);\n  left: 8px;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.left,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.right {\n  left: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.left .border,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.right .border,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.left border-glow,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.right border-glow {\n  top: 0;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.left .sub-border,\n:host .lol-uikit-flyout-frame-wrapper.animation.idle.right .sub-border {\n  height: calc(100% - 16px);\n  top: 8px;\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.closing .border,\n:host .lol-uikit-flyout-frame-wrapper.animation.closing .sub-border,\n:host .lol-uikit-flyout-frame-wrapper.animation.closing .lol-uikit-flyout-frame {\n  transition: 133ms all cubic-bezier(1, 0, 1, 1);\n}\n:host .lol-uikit-flyout-frame-wrapper.animation.closing .caret::before {\n  background-image: url(' +
          i(o(273)) +
          ');\n  animation: caretOutro 133ms steps(4, end) forwards;\n  transition: background 0;\n}\n@-moz-keyframes caretIntro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -312px;\n  }\n}\n@-webkit-keyframes caretIntro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -312px;\n  }\n}\n@-o-keyframes caretIntro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -312px;\n  }\n}\n@keyframes caretIntro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -312px;\n  }\n}\n@-moz-keyframes caretOutro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -96px;\n  }\n}\n@-webkit-keyframes caretOutro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -96px;\n  }\n}\n@-o-keyframes caretOutro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -96px;\n  }\n}\n@keyframes caretOutro {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -96px;\n  }\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    e.exports = o.p + 'pointer-intro-01.png';
  },
  function (e, t, o) {
    e.exports = o.p + 'pointer-outro-01.png';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(119),
      n = i(a),
      r = o(11),
      l = i(r);
    class s extends n.default {
      templateMarkup() {
        return o(275);
      }
      stylesheetMarkup() {
        return o(276);
      }
      template() {
        return l.default
          .get()
          .getElementById('lol-uikit-template-framed-dropdown');
      }
    }
    (s.tagName = 'lol-uikit-framed-dropdown'), (t.default = s);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="ui-dropdown">\r\n    <dt class="ui-dropdown-current">\r\n      <div class="ui-dropdown-current-content shadow"></div>\r\n      <slot name=".ui-dropdown-current-content.light"></slot>\r\n    </dt>\r\n    <dd class="ui-dropdown-options-container">\r\n      <ul class="ui-dropdown-options">\r\n        <lol-uikit-scrollable>\r\n          <slot name="lol-uikit-dropdown-option"></slot>\r\n        </lol-uikit-scrollable>\r\n      </ul>\r\n    </dd>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    var i = o(32);
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .ui-dropdown {\n  font-family: var(--font-body);\n}\n:host .ui-dropdown {\n  -webkit-user-select: none;\n}\n:host .ui-dropdown {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host .ui-dropdown {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host .ui-dropdown:lang(ja-jp) {\n  font-size: 13px;\n}\n:host .ui-dropdown:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host .ui-dropdown dt.ui-dropdown-current {\n  border: thin solid transparent;\n  border-image: linear-gradient(to top, #695625 0%, #a9852d 23%, #b88d35 93%, #c8aa6e 100%) 1;\n}\n:host(:not(.active):hover) dt.ui-dropdown-current,\n:host(:not(.active):focus) dt.ui-dropdown-current {\n  border: thin solid transparent;\n  border-image: linear-gradient(to top, #c89b3c, #f0e6d2) 1;\n}\n:host .ui-dropdown dd.ui-dropdown-options-container {\n  border: thin solid transparent;\n  border-image: linear-gradient(to top, #695625, #463714) 1;\n}\n:host {\n  --framed-dropdown-scrollable-max-height: 150px;\n  --framed-dropdown-current-content-padding: 0 20px 0 7px;\n  --framed-dropdown-current-content-padding-rtl: 0 7px 0 20px;\n  --framed-dropdown-opens-upward-height: auto;\n  --framed-dropdown-options-container-width: 100%;\n  --framed-dropdown-direction-rtl: rtl;\n}\n:host([stylablecontent]) .ui-dropdown-current-content.shadow {\n  display: none;\n}\n:host(:not([stylablecontent])) .ui-dropdown-current-content.light {\n  display: none;\n}\n:host .ui-dropdown-current-content,\n:host .ui-dropdown-current-content.shadow {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: var(--framed-dropdown-current-content-padding);\n}\n:host .ui-dropdown-current-content .ui-dropdown-option-only,\n:host .ui-dropdown-current-content.shadow .ui-dropdown-option-only {\n  display: none;\n}\n:host .ui-dropdown-current-content:lang(ar-ae),\n:host .ui-dropdown-current-content.shadow:lang(ar-ae) {\n  padding: var(--framed-dropdown-current-content-padding-rtl);\n}\n:host {\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n  outline: 0;\n}\n:host .ui-dropdown {\n  display: inline-flex;\n  flex-direction: column;\n  position: relative;\n  user-select: none;\n  margin: 0;\n  cursor: pointer;\n  width: 100%;\n}\n:host .ui-dropdown:lang(ar-ae) {\n  direction: var(--framed-dropdown-direction-rtl);\n  text-align: right;\n}\n:host .ui-dropdown dt.ui-dropdown-current {\n  display: flex;\n  box-sizing: border-box;\n  padding-bottom: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 7px 5px;\n  align-items: center;\n  background-color: rgba(30,35,40,0.5);\n}\n:host .ui-dropdown dt.ui-dropdown-current::after {\n  background: url(' +
          i(o(121)) +
          ") center no-repeat;\n  width: 13px;\n  height: 18px;\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translate(0, -50%);\n  content: '';\n}\n:host .ui-dropdown dt.ui-dropdown-current:lang(ar-ae)::after {\n  right: auto;\n  left: 8px;\n}\n:host .ui-dropdown dd.ui-dropdown-options-container {\n  margin: 0;\n  opacity: 0;\n  display: flex;\n  padding: 0;\n  box-sizing: border-box;\n  width: var(--framed-dropdown-options-container-width);\n  position: absolute;\n  top: 100%;\n  max-height: 0;\n  transition: max-height 400ms;\n  z-index: 2;\n  overflow: hidden;\n  visibility: hidden;\n  background-color: rgba(30,35,40,0.5);\n}\n:host .ui-dropdown dd.ui-dropdown-options-container ul.ui-dropdown-options {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 100%;\n  background: #010a13;\n  height: 100%;\n}\n:host .ui-dropdown dd.ui-dropdown-options-container ul.ui-dropdown-options lol-uikit-scrollable {\n  max-height: var(--framed-dropdown-scrollable-max-height);\n}\n:host .ui-dropdown.opens-upward {\n  height: var(--framed-dropdown-opens-upward-height);\n}\n:host .ui-dropdown.opens-upward dd.ui-dropdown-options-container {\n  bottom: 100%;\n  top: auto;\n  margin-top: 1px;\n}\n:host(.disabled) {\n  cursor: default;\n  pointer-events: none;\n}\n:host(.disabled) .ui-dropdown dt.ui-dropdown-current {\n  border: thin solid #3c3c41;\n  color: #3c3c41;\n}\n:host(.disabled) .ui-dropdown dt.ui-dropdown-current::after {\n  -webkit-filter: grayscale(100%);\n  opacity: 0.35;\n}\n:host(.active) .ui-dropdown .ui-dropdown-current {\n  border: thin solid #463714;\n  color: #463714;\n}\n:host(.active) .ui-dropdown .ui-dropdown-current::after {\n  background-image: url(" +
          i(o(122)) +
          ');\n}\n:host(.active) .ui-dropdown dd.ui-dropdown-options-container {\n  opacity: 1;\n  max-height: 400px;\n  transition: max-height 400ms;\n  visibility: visible;\n}\n:host(:not(.active):hover) dt.ui-dropdown-current,\n:host(:not(.active):focus) dt.ui-dropdown-current {\n  background: linear-gradient(to top, rgba(88,83,66,0.5), rgba(30,35,40,0.5));\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(278);
      }
      stylesheetMarkup() {
        return o(279);
      }
      constructor() {
        super(),
          this.addEventListener('cutout', (e) => {
            const t = this.buildWebkitClipPath(e);
            this.style.webkitClipPath = t;
          });
      }
      buildWebkitClipPath(e) {
        return e && e.cutoutRect
          ? 'polygon(0 0, ' +
              e.cutoutRect.left +
              'px 0, ' +
              e.cutoutRect.left +
              'px ' +
              e.cutoutRect.bottom +
              'px, ' +
              e.cutoutRect.right +
              'px ' +
              e.cutoutRect.bottom +
              'px, ' +
              e.cutoutRect.right +
              'px ' +
              e.cutoutRect.top +
              'px, ' +
              e.cutoutRect.left +
              'px ' +
              e.cutoutRect.top +
              'px, ' +
              e.cutoutRect.left +
              'px 0, 100% 0, 100% 100%, 0 100%)'
          : null;
      }
    }
    (a.tagName = 'lol-uikit-full-page-backdrop'), (t.default = a);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8) 93%);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return (
        (e = e.replace(
          /<font color=['"](#?[a-z0-9]+)['"]>/gi,
          '<span style="color:$1;">',
        )),
        (e = e.replace(/<\/font>/g, '</span>')),
        e
      );
    }
    function a(e, t) {
      var o = !0,
        i = !1,
        a = void 0;
      try {
        for (var n = (0, r.default)(t), l; !(o = (l = n.next()).done); o = !0) {
          const t = l.value,
            o = new RegExp(`<(${t})>`, 'g');
          e = e.replace(o, '<span class="$1">');
          const i = new RegExp(`</${t}>`, 'g');
          e = e.replace(i, '</span>');
        }
      } catch (e) {
        (i = !0), (a = e);
      } finally {
        try {
          !o && n.return && n.return();
        } finally {
          if (i) throw a;
        }
      }
      return e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(63),
      r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n),
      l = o(0);
    const s = {
      item: function (e) {
        return (
          (e = i(e)),
          a(e, [
            'active',
            'aura',
            'consumable',
            'flavorText',
            'groupLimit',
            'levelLimit',
            'mana',
            'passive',
            'rules',
            'scaleLevel',
            'stats',
            'unique',
            'unlockedPassive',
          ])
        );
      },
    };
    class d extends l.webComponents.ShadowElement {
      templateMarkup() {
        return o(283);
      }
      connectedCallback() {
        this.processAttributes();
      }
      static get observedAttributes() {
        return ['type', 'markup'];
      }
      processAttributes() {
        const e = this.getAttribute('type');
        let t = this.getAttribute('markup');
        return e && t
          ? void (s[e] && (t = s[e](t)),
            (this.innerHTML = l.htmlSanitizer.sanitize(t)))
          : void (this.innerHTML = '');
      }
    }
    (d.tagName = 'lol-uikit-game-data-markup'), (t.default = d);
  },
  function (e, t, o) {
    o(36), o(34), (e.exports = o(282));
  },
  function (e, t, o) {
    var i = o(15),
      a = o(77);
    e.exports = o(2).getIterator = function (e) {
      var t = a(e);
      if ('function' != typeof t) throw TypeError(e + ' is not iterable!');
      return i(t.call(e));
    };
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(285);
      }
      stylesheetMarkup() {
        return o(286);
      }
    }
    (a.tagName = 'lol-uikit-info-icon'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-info-icon"></div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    var i = o(32);
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        '.lol-uikit-info-icon {\n  position: relative;\n  width: var(--uikit-info-icon-width, 18px);\n  height: var(--uikit-info-icon-height, 18px);\n  background-image: url(' +
          i(o(287)) +
          ');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    e.exports = o.p + 'info-icon.svg';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      return e.split('{{')[0].trim().toLowerCase().replace(/ /g, '-');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(5),
      r = i(n),
      l = o(9),
      s = i(l),
      d = o(0);
    const p = [
      'src',
      'image-path',
      'resize-to-fit',
      'loop',
      'autoplay',
      'gds-object-id',
      'errortext',
      'param-current-exp',
      'param-new-exp',
      'param-level-up',
      'param-twitch',
      'param-green',
      'param-blue',
      'param-purple',
      'text-tierlabel',
      'param-display-division-1',
      'param-display-division-2',
      'param-display-division-3',
      'param-display-division-4',
      'param-display-split-reward-1',
      'param-display-split-reward-2',
      'param-display-split-reward-3',
      'param-display-previous-division-1',
      'param-display-next-division-4',
      'param-display-next-division-1',
      'param-display-split-reward-1',
      'param-display-split-reward-2',
      'param-display-split-reward-3',
      'param-display-division-2-to-1',
      'param-display-division-3-to-2',
      'param-display-division-4-to-3',
      'param-display-split-reward-1',
      'param-display-split-reward-2',
      'param-display-split-reward-3',
      'param-checkbox-control-1',
      'param-current-level-progress',
      'param-previous-level-progress',
      'asset-segments',
      'param-effect-control-1',
      'param-effect-control-2',
    ];
    let c = null,
      u = null;
    class g extends d.webComponents.ShadowElement {
      static get observedAttributes() {
        return p;
      }
      templateMarkup() {
        return o(289);
      }
      constructor() {
        super(),
          (this.data = null),
          (this.animation = null),
          (this.animationParams = {}),
          (this.animationReplacementImages = {}),
          (this.animationReplacementText = {}),
          (this.noCache = !1),
          (this.onAnimationStart = null),
          (this.onAnimationComplete = null),
          this._reinitialize();
      }
      _reinitialize() {
        this.animation && this.animation.destroy(),
          (this.animation = null),
          (this.loadingStarted = !1),
          (this.loadingFinished = !1),
          (this.loadPromise = new r.default((e, t) => {
            (this.resolveLoadPromise = e), (this.rejectLoadPromise = t);
          }));
      }
      reloadAnimation() {
        if (this.loadingStarted && this.loadingFinished)
          return (
            this.animation && this.animation.destroy(),
            (this.animation = null),
            this._loadAnimation()
          );
      }
      _animationParameterChangedCallback(e, t) {
        let o = null;
        e.match(/^param-.+$/)
          ? (o = this.animationParams)
          : e.match(/^text-.+$/)
          ? (o = this.animationReplacementText)
          : e.match(/^asset-.+$/) && (o = this.animationReplacementImages);
        const i = e.match(/^(asset|param|text)-(.+)$/);
        if (i) {
          const e = i[2];
          return t ? (o[e] = t) : delete o[e], this.reloadAnimation();
        }
      }
      attributeChangedCallback(e, t, o) {
        return (
          super.attributeChangedCallback(),
          'src' === e
            ? void this._srcAttributeChanged(o)
            : this._animationParameterChangedCallback(e, o)
        );
      }
      _srcAttributeChanged(e) {
        this.loadingStarted &&
          !this.loadingFinished &&
          this.rejectLoadPromise('src changed before loading was complete'),
          this._reinitialize();
        e &&
          this._loadAnimationJson(e)
            .then(() => this._loadAnimation())
            .then(() => {
              this.resolveLoadPromise();
            });
      }
      _setAnimationParameter(e, t) {
        const o = this.data.layers.find(
          (e) => e.nm.toLowerCase() === 'animation control layer',
        );
        if (!o)
          throw new Error(
            'Lottie animation has no animation control layer, but had parameters passed to it: ' +
              this.getAttribute('src') +
              ', parameter is: ' +
              e +
              '=' +
              t,
          );
        const i = o.ef.filter((t) => a(t.nm) === e);
        i.length &&
          (t.match(/[0-9\.]+/) && (t = parseFloat(t)),
          i.forEach((o) => {
            const i = o.nm.match(/{{keyframe=([0-9]+)}}/),
              a = o.mn.match('Slider');
            if (a) {
              if ('number' != typeof t)
                throw new Error(
                  'Lottie animation parameter value for a slider is not numeric: ' +
                    this.getAttribute('src') +
                    ', parameter is: ' +
                    e +
                    '=' +
                    t,
                );
              if (i) {
                const e = parseInt(i[1], 10) - 1;
                0 < e && o.ef[0].v.k[e - 1].e && (o.ef[0].v.k[e - 1].e[0] = t),
                  o.ef[0].v.k[e].s && (o.ef[0].v.k[e].s[0] = t);
              } else o.ef[0].v.k = t;
            } else {
              if (i)
                throw new Error(
                  'Non-sliders in the control layer cannot have keyframes: ' +
                    this.getAttribute('src') +
                    ', parameter is: ' +
                    e +
                    '=' +
                    t,
                );
              o.ef[0].v.k = o.mn.match('Checkbox')
                ? 'false' !== t.toLowerCase() && 0 !== t
                  ? 1
                  : 0
                : t;
            }
          }));
      }
      _setText(e, t) {
        const o = this.data.layers.filter((t) => {
          const o = t.nm.match(/{{textKey=([a-zA-Z0-9\-_]+)}}/);
          return o && o[1] === e;
        });
        if (!o.length)
          throw new Error(
            'Lottie animation had text subsitution, but target layer is not found. ' +
              this.getAttribute('src') +
              ', textKey was: ' +
              e +
              '=' +
              t,
          );
        o.forEach((o) => {
          if (!o.t)
            throw new Error(
              'Lottie animation had text subsitution on a layer which is not a text layer. ' +
                this.getAttribute('src') +
                ', textKey was: ' +
                e +
                '=' +
                t,
            );
          o.t.d.k[0].s.t = t;
        });
      }
      _loadGenericAssetsData() {
        u ||
          (u = s.default
            .getJSON('/lol-game-data/assets/v1/generic-assets.json', (e) => {
              c = e;
            })
            .fail((e) => {
              throw ((u = null), new Error(e));
            }));
      }
      _setImagePaths() {
        const e = this.getAttribute('gds-object-id'),
          t = this.getAttribute('image-path'),
          o = (this.getAttribute('src').match(
            /^(\/fe\/lol-[^\/]+\/(assets\/)?)/,
          ) || [])[1],
          i = () => {
            this.data.layers.forEach((e) => {
              const t = a(e.nm);
              if (this.animationReplacementImages[t]) {
                const o = this.data.assets.find((t) => t.id === e.refId),
                  i = this.animationReplacementImages[t] + '_' + Math.random();
                this.data.assets.push({
                  id: i,
                  p: this.animationReplacementImages[t].match(/[^\/]+$/)[0],
                  u: this.animationReplacementImages[t].match(
                    /^(.*?)[^\/]+$/,
                  )[1],
                  w: o.w,
                  h: o.h,
                }),
                  (e.refId = i);
              }
            }),
              this.data.assets.forEach((i) => {
                if (
                  (i.p && (i.p = i.p.split('?')[0]),
                  e && c && c[e] && c[e][i.p])
                ) {
                  const t = c[e][i.p].match(/^(.*\/)(.*)$/);
                  (i.u = t[1]), (i.p = t[2]);
                } else
                  t
                    ? (i.u = t)
                    : 'images/' === i.u && (i.u = o + 'lottie/images/');
                this.noCache && (i.p = i.p + '?' + Math.random());
              });
          };
        return e ? u.then(i) : (i(), r.default.resolve());
      }
      _loadAnimationJson(e) {
        (this.loadingStarted = !0), (this.loadingFinished = !1);
        const t = e;
        return (
          this.classList.remove('loading-error'),
          s.default
            .getJSON(e, (e) => {
              t === this.getAttribute('src') &&
                ((this.data = e), (this.loadingFinished = !0));
            })
            .fail((e) => {
              t === this.getAttribute('src') &&
                ((this.data = null),
                (this.loadingFinished = !0),
                this.classList.add('loading-error'),
                this.rejectLoadPromise(e));
            })
        );
      }
      _loadAnimation() {
        if (this.data && !this.animation) {
          let e;
          this.classList.remove('rendering-error');
          try {
            d.Lodash.forEach(this.animationParams, (e, t) => {
              this._setAnimationParameter(t, e);
            }),
              d.Lodash.forEach(this.animationReplacementText, (e, t) => {
                this._setText(t, e);
              }),
              this.getAttribute('gds-object-id') &&
                this._loadGenericAssetsData(),
              (e = this._setImagePaths());
          } catch (t) {
            throw (
              (this.classList.add('rendering-error'),
              this.setAttribute(
                'errortext',
                'LOTTIE RENDERING ERROR: ' + t.message,
              ),
              t)
            );
          }
          return e.then(() => {
            const e = d.Lottie.loadAnimation({
              container: this.shadowRoot.querySelector(
                '.lottie-render-container',
              ),
              renderer: 'svg',
              loop: null !== this.getAttribute('loop'),
              autoplay:
                !(null !== this.getAttribute('autoplay')) ||
                'false' !== this.getAttribute('autoplay'),
              animationData: this.data,
            });
            (this.animation = e),
              e && this._addHooks(e),
              null === this.getAttribute('resize-to-fit') &&
                'false' !== this.getAttribute('resize-to-fit') &&
                ((this.shadowRoot.querySelector('svg').style.height = ''),
                (this.shadowRoot.querySelector('svg').style.width = ''));
          });
        }
      }
      _addHooks(e) {
        (e.onEnterFrame = () => {
          (e.onEnterFrame = null),
            this.onAnimationStart && this.onAnimationStart(e);
        }),
          (e.onComplete = () => {
            this.onAnimationComplete && this.onAnimationComplete();
          });
      }
      play() {
        this.loadPromise.then(() => {
          window.testsSandboxDoc &&
            window.testsSandbox &&
            this.animation.setSpeed(1e6),
            this.animation.play();
        });
      }
      pause() {
        this.animation.pause();
      }
      stop() {
        this.animation.stop();
      }
    }
    (g.tagName = 'lol-uikit-lottie'), (t.default = g);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <style>\r\n    .lottie-render-container {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n    }\r\n\r\n    :host([resize-to-fit]) .lottie-render-container {\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n  </style>\r\n  <div class="lottie-render-container"></div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(25),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i),
      n = o(0);
    const r = 'lol-uikit-navigation-item';
    class l extends n.webComponents.ShadowElement {
      static get observedAttributes() {
        return ['type', 'selectedindex', 'direction'];
      }
      templateMarkup() {
        return o(291);
      }
      stylesheetMarkup() {
        return o(292);
      }
      constructor() {
        super(),
          this.addEventListener(
            'lol-uikit-navigation-item-click-event',
            (e) => {
              const t = (0, a.default)(this.getElementsByTagName(r)),
                o = t.indexOf(e.target);
              this.setAttribute('selectedindex', o), e.stopPropagation();
            },
          );
      }
      connectedCallback() {
        super.connectedCallback(), this.processAttributes();
      }
      processAttributes() {
        if (this.shadowRoot.host.parentElement) {
          const e = this.shadowRoot,
            t = e.querySelector('.navigation-bar'),
            o = this.getAttribute('direction') || 'left';
          t &&
            !t.classList.contains(o) &&
            (t.classList.remove('up', 'down', 'left', 'right'),
            t.classList.add(o)),
            this.getAttribute('type') || this.setAttribute('type', 'nav-bar'),
            this.getAttribute('selectedindex') ||
              this.setAttribute('selectedindex', 0);
          const i = parseInt(this.getAttribute('selectedindex'));
          this._updateActiveItem(i);
        }
      }
      _updateActiveItem(e) {
        (0, a.default)(this.getElementsByTagName(r)).forEach(function (t, o) {
          o === e
            ? t.setAttribute('active', 'true')
            : t.removeAttribute('active');
        });
      }
    }
    (l.tagName = 'lol-uikit-navigation-bar'), (t.default = l);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <nav class="navigation-bar">\r\n    <slot></slot>\r\n  </nav>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host([type=nav-bar]) .navigation-bar {\n  font-family: var(--font-display);\n}\n:host([type=nav-bar]) .navigation-bar {\n  -webkit-user-select: none;\n}\n:host([type=nav-bar]) .navigation-bar {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host([type=nav-bar]) .navigation-bar {\n  text-transform: uppercase;\n}\n:host([type=nav-bar]) .navigation-bar:lang(ko-kr),\n:host([type=nav-bar]) .navigation-bar:lang(ja-jp),\n:host([type=nav-bar]) .navigation-bar:lang(tr-tr),\n:host([type=nav-bar]) .navigation-bar:lang(el-gr),\n:host([type=nav-bar]) .navigation-bar:lang(th-th),\n:host([type=nav-bar]) .navigation-bar:lang(zh-tw) {\n  text-transform: none;\n}\n:host([type=nav-bar]) .navigation-bar {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  color: #cdbe91;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host([type=nav-bar]) .navigation-bar.active {\n  position: relative;\n  color: #f0e6d2;\n}\n:host([type=nav-bar]) .navigation-bar:lang(ja-jp) {\n  font-size: 13px;\n}\n:host([type=nav-bar]) .navigation-bar:lang(zh-tw) {\n  font-size: 14px;\n}\n:host([type=nav-bar]) .navigation-bar:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host([type=nav-bar]) .navigation-bar {\n  font-family: var(--font-display);\n}\n.navigation-bar {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.navigation-bar.up,\n.navigation-bar.right {\n  justify-content: flex-end;\n}\n.navigation-bar.down,\n.navigation-bar.left {\n  justify-content: flex-start;\n}\n.navigation-bar.up {\n  flex-direction: column-reverse;\n}\n.navigation-bar.down {\n  flex-direction: column;\n}\n.navigation-bar.left {\n  flex-direction: row;\n}\n.navigation-bar.right {\n  flex-direction: row-reverse;\n}\n:host([type=nav-bar]) * {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n:host([type=nav-bar]) .navigation-bar {\n  justify-content: space-between;\n  align-items: center;\n  height: auto;\n  flex: 6;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(9),
      n = i(a),
      r = o(0),
      l = o(31),
      s = o(30),
      d = o(7),
      p = i(d);
    const c = 'active',
      u = 'disabled',
      g = [c, u, 'alert'],
      m = '.section-glow';
    class h extends r.webComponents.ShadowElement {
      static get observedAttributes() {
        return g;
      }
      templateMarkup() {
        return o(294);
      }
      stylesheetMarkup() {
        return o(295);
      }
      constructor() {
        super(),
          this._item,
          (this._mainElement = (0, n.default)(
            this.shadowRoot.querySelector('.section'),
          )),
          (this._navClickSound = this._createSound(p.default.navClick)),
          (this._subNavClickSound = this._createSound(p.default.subnavClick)),
          this.addEventListener('click', this._userClickedEvent.bind(this));
      }
      _handleMouseMove(e) {
        if (!this.isDisabled()) {
          const t = this.offsetWidth,
            o = this.shadowRoot.querySelector(m),
            i = t / 2,
            a = e.offsetX - i;
          (o.style.transform = `translateX(${a / 1.5}px)`),
            (o.style.opacity = 1.3 - Math.abs(a / i));
        }
      }
      _handleMouseOut() {
        if (!this.isDisabled()) {
          const e = this.shadowRoot.querySelector(m);
          e.style.opacity = 0;
        }
      }
      connectedCallback() {
        super.connectedCallback(),
          g.forEach((e) => {
            const t = this.getAttribute(e);
            this._addRemoveCssClass(e, (0, l.isAttrTruthy)(e, t));
          });
        const e = this.closest('lol-uikit-navigation-bar');
        e &&
          'nav-bar' === e.getAttribute('type') &&
          (this.addEventListener('mousemove', this._handleMouseMove.bind(this)),
          this.addEventListener('mouseout', this._handleMouseOut.bind(this)));
      }
      _createSound(e) {
        return (0, s.createSound)('sfx-ui', e, { allowConcurrency: !1 });
      }
      _userClickedEvent() {
        if (!this.isDisabled() && !this.isActive()) {
          const e = this.closest('lol-uikit-navigation-bar');
          (e && 'nav-bar-secondary' === e.getAttribute('type')) ||
          'tabbed' === e.getAttribute('type')
            ? this._subNavClickSound.play()
            : e &&
              'nav-bar' === e.getAttribute('type') &&
              this._navClickSound.play(),
            this.dispatchEvent(
              new CustomEvent('lol-uikit-navigation-item-click-event', {
                bubbles: !0,
                composed: !0,
                cancelable: !0,
                detail: { node: this },
              }),
            );
        }
      }
      attributeChangedCallback(e, t, o) {
        if (-1 !== g.indexOf(e)) {
          const i = (0, l.isAttrTruthy)(e, t),
            a = (0, l.isAttrTruthy)(e, o);
          !i && a
            ? this._addRemoveCssClass(e, !0)
            : i && !a && this._addRemoveCssClass(e, !1);
        }
      }
      _addRemoveCssClass(e, t) {
        t ? this._mainElement.addClass(e) : this._mainElement.removeClass(e),
          this.dispatchEvent(
            new CustomEvent(
              t
                ? 'lol-uikit-navigation-item-attr-set-event'
                : 'lol-uikit-navigation-item-attr-remove-event',
              {
                bubbles: !0,
                composed: !0,
                cancelable: !0,
                detail: { node: this, attr: e },
              },
            ),
          );
      }
      isActive() {
        return this._mainElement.hasClass(c);
      }
      isDisabled() {
        return this._mainElement.hasClass(u);
      }
    }
    (h.tagName = 'lol-uikit-navigation-item'), (t.default = h);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="section">\r\n    <span class="section-text">\r\n      <slot></slot>\r\n      <div class="alertImage"></div>\r\n    </span>\r\n    <div class="section-glow-container">\r\n      <div class="section-glow"></div>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ":host-context(lol-uikit-navigation-bar[type=nav-bar]) .section,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section,\n:host-context(lol-uikit-navigation-bar[type=tabbed]) {\n  font-family: var(--font-display);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section,\n:host-context(lol-uikit-navigation-bar[type=tabbed]) {\n  -webkit-user-select: none;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section,\n:host-context(lol-uikit-navigation-bar[type=tabbed]) {\n  font-kerning: normal;\n  -webkit-font-feature-settings: \"kern\" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {\n  text-transform: uppercase;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:lang(ko-kr),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(ko-kr),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:lang(ja-jp),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(ja-jp),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:lang(tr-tr),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(tr-tr),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:lang(el-gr),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(el-gr),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:lang(th-th),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(th-th),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:lang(zh-tw),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(zh-tw) {\n  text-transform: none;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.075em;\n  color: #cdbe91;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.active,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {\n  position: relative;\n  color: #f0e6d2;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:lang(ar-ae),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  color: #cdbe91;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {\n  position: relative;\n  color: #f0e6d2;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(ja-jp) {\n  font-size: 13px;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(zh-tw) {\n  font-size: 14px;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]) {\n  color: #c8aa6e;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.0325em;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):hover {\n  color: #f0e6d2;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):disabled,\n:host-context(lol-uikit-navigation-bar[type=tabbed]):disabled:hover,\n:host-context(lol-uikit-navigation-bar[type=tabbed])[disabled='true'],\n:host-context(lol-uikit-navigation-bar[type=tabbed])[disabled='true']:hover {\n  color: #5c5b57;\n  cursor: default;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):active {\n  color: #785a28;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) {\n  display: flex;\n  position: relative;\n  cursor: pointer;\n  min-width: 28px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]):last-of-type,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]):last-of-type {\n  margin-right: 0;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) *,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) * {\n  cursor: pointer;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  color: var(--default-color, #cdbe91);\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  outline: none;\n  transition: text-shadow 0.3s ease-in-out, background 1.5s;\n  width: 100%;\n  height: 100%;\n  min-height: 20px;\n  cursor: pointer;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section *,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section * {\n  cursor: pointer;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .alertImage,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section .alertImage {\n  display: none;\n  position: absolute;\n  right: 0px;\n  top: -5px;\n  background-color: var(--default-color, #cdbe91);\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.alert .alertImage,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.alert .alertImage {\n  display: block;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-text,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section .section-text {\n  padding: 0px 15px;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-text:lang(ar-ae),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section .section-text:lang(ar-ae) {\n  direction: rtl;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.active,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {\n  cursor: default;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.active::before,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active::before {\n  content: '';\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  top: -1px;\n  left: 0;\n  background-image: url(\"/fe/lol-uikit/images/nav-pointer.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  pointer-events: none;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:hover:not(.disabled),\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:hover:not(.disabled) {\n  color: var(--hover-color, #f0e6d2);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:hover:not(.disabled) .alertImage,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:hover:not(.disabled) .alertImage {\n  background-color: var(--hover-color, #f0e6d2);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.active,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {\n  color: var(--active-color, #f0e6d2);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.active .alertImage,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active .alertImage {\n  background-color: var(--active-color, #f0e6d2);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:not(.active):not(.disabled):active,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section:not(.active):not(.disabled):active {\n  color: var(--click-color, #c89b3c);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.disabled,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.disabled {\n  color: var(--disabled-color, #888);\n  cursor: default;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.disabled:hover,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.disabled:hover,\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.disabled.active,\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.disabled.active {\n  background: none;\n  text-shadow: none;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section .alertImage {\n  right: 5px;\n  top: -3px;\n  width: 6px;\n  height: 6px;\n  background-color: var(--default-color, #c89b3c);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active::before {\n  background-image: none;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active .section-glow {\n  height: 1px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 20px;\n  margin: 0;\n  background: linear-gradient(to left, transparent, #cdbe91, transparent);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section {\n  height: 79px;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.active {\n  background-image: linear-gradient(0deg, rgba(205,190,145,0.15) 0%, rgba(31,37,38,0) 55%);\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section::after {\n  content: '';\n  background-image: linear-gradient(0deg, rgba(205,190,145,0.2) 0%, rgba(31,37,38,0) 55%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  transition: opacity 0.4s ease-in;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section:not(.disabled):hover::after {\n  opacity: 1;\n  transition: opacity 0.1s ease-out;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-glow-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-glow {\n  width: 100%;\n  height: 90px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: url(\"/fe/lol-uikit/images/nav-highlight.png\") no-repeat;\n  background-position: bottom center;\n  background-size: 100% 32px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.1s;\n}\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-text:lang(ko-kr),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-text:lang(zh-tw),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-text:lang(zh-cn),\n:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section .section-text:lang(zh-my) {\n  font-size: 20px;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]) {\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  padding-left: 12px;\n  text-align: left;\n  line-height: 30px;\n  vertical-align: middle;\n  transition: 300ms color;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]) .section {\n  position: relative;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]) .section .alertImage {\n  display: none;\n  position: absolute;\n  right: -12px;\n  top: 0px;\n  background-color: var(--default-color, #cdbe91);\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]) .section.alert .alertImage {\n  display: block;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]) .section.active .alertImage {\n  background-color: var(--active-color, #f0e6d2);\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed])::before {\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 100%;\n  top: 0;\n  left: 1px;\n  background-image: linear-gradient(to bottom, #c89b3c, #c89b3c);\n  background-size: 100% 100%;\n  background-position: left center;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: 400ms opacity;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):host {\n  cursor: pointer;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):host([active]) {\n  color: #f0e6d2;\n  cursor: default;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):host([active])::before {\n  opacity: 1;\n}\n:host-context(lol-uikit-navigation-bar[type=tabbed]):host([disabled]) {\n  color: #1e2328;\n  cursor: default;\n}\n",
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(125),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i),
      n = o(0);
    const r = [
        '/fe/lol-uikit/images/parallax-smoke1.png',
        '/fe/lol-uikit/images/parallax-smoke2.png',
        '/fe/lol-uikit/images/parallax-smoke3.png',
        '/fe/lol-uikit/images/parallax-smoke4.png',
      ],
      l = 'parallax-layer';
    class s extends n.webComponents.ShadowElement {
      static get observedAttributes() {
        return [
          'animated',
          'parallax-config',
          'layer-image-paths',
          'background-path',
          'foreground-path',
        ];
      }
      templateMarkup() {
        return o(297);
      }
      stylesheetMarkup() {
        return o(298);
      }
      connectedCallback() {
        super.connectedCallback();
        const e = 'false' !== this.getAttribute('animated');
        this._animated = e;
        const t = JSON.parse(this.getAttribute('parallax-config'));
        this.parallaxConfig = t;
        const o = JSON.parse(this.getAttribute('layer-image-paths')) || r,
          i =
            this.getAttribute('background-path') ||
            '/fe/lol-uikit/images/parallax-smoke-background.png',
          n =
            this.getAttribute('foreground-path') ||
            '/fe/lol-uikit/images/parallax-smoke-foreground.png',
          l = this.shadowRoot.querySelector('.parallax-layer-container'),
          s = o.map((t) =>
            this.addParallaxLayer(l, t, 'parallax-background-layer', e),
          );
        this.setBackgroundPaths(l, n, i),
          (this._parallaxConfigObserver = new MutationObserver(() => {
            this.onParallaxConfigChanged();
          })),
          this._parallaxConfigObserver.observe(this, {
            attributeFilter: ['parallax-config'],
          }),
          (this._animatedObserver = new MutationObserver(() => {
            this.onAnimatedChanged();
          })),
          this._animatedObserver.observe(this, {
            attributeFilter: ['animated'],
          }),
          (this._parallax = new a.default(s, t, e));
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this._parallaxConfigObserver.disconnect(),
          this._animatedObserver.disconnect(),
          this._parallax.destroy(),
          this.removeAllParallaxLayers();
      }
      addParallaxLayer(e, t, o, i) {
        const a = document.createElement('div');
        return (
          a.classList.add(l),
          a.classList.add(o),
          (a.style.backgroundImage = `url(${t})`),
          a.setAttribute('animated', !!i),
          e.appendChild(a),
          a
        );
      }
      removeAllParallaxLayers() {
        const e = this.shadowRoot.querySelector('.parallax-layer-container'),
          t = this.shadowRoot.querySelectorAll('.' + l);
        for (let o = 0; o < t.length; o++) e.removeChild(t[o]);
      }
      setBackgroundPaths(e, t, o) {
        o && (e.style.backgroundImage = `url(${o})`),
          t && this.addParallaxLayer(e, t, 'parallax-foreground-layer');
      }
      onParallaxConfigChanged() {
        const e = JSON.parse(this.getAttribute('parallax-config'));
        this._parallax.updateConfig(e);
      }
      onAnimatedChanged() {
        const e = 'false' !== this.getAttribute('animated');
        this._animated !== e &&
          (e ? this._parallax.play() : this._parallax.pause(),
          (this._animated = e));
      }
    }
    (s.tagName = 'lol-uikit-parallax-background'), (t.default = s);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="parallax-layer-container">\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        'lol-uikit-parallax-background {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.parallax-layer-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  background-size: cover;\n  background-position-y: 100%;\n  background-repeat: no-repeat;\n}\n.parallax-layer-container .parallax-layer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-size: contain;\n  background-position-y: 100%;\n  backface-visibility: hidden;\n}\n.parallax-layer-container .parallax-background-layer {\n  background-repeat: no-repeat;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(0),
      n = o(300),
      r = i(n),
      l = o(315),
      s = i(l),
      d = o(316),
      p = i(d);
    class c extends a.webComponents.ShadowElement {
      static get observedAttributes() {
        return [];
      }
      templateMarkup() {
        return o(317);
      }
      stylesheetMarkup() {
        const e = o(318);
        return s.default + '\n' + e.toString();
      }
      connectedCallback() {
        if ((super.connectedCallback(), !this._initialized)) {
          this._initialized = !0;
          const e = this.shadowRoot.querySelector('.wrapper');
          r.default.initialize(e);
          const t = e.querySelector('.inner-wrapper');
          (0, p.default)(t, this.onElementResizeEvent);
        }
      }
      onElementResizeEvent() {
        if (this.shadowRoot) {
          const e = this.shadowRoot.querySelector('.wrapper');
          e && r.default.update(e);
        }
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        const e = this.shadowRoot.querySelector('.wrapper'),
          t = e.querySelector('.inner-wrapper');
        p.default.unbind(t, this.onElementResizeEvent),
          r.default.destroy(e),
          (this._initialized = !1);
      }
    }
    (c.tagName = 'lol-uikit-perfect-scrollable'), (t.default = c);
  },
  function (e, t, o) {
    'use strict';
    e.exports = o(301);
  },
  function (e, t, o) {
    'use strict';
    var i = o(302),
      a = o(306),
      n = o(314);
    e.exports = { initialize: a, update: n, destroy: i };
  },
  function (e, t, o) {
    'use strict';
    var a = o(19),
      n = o(33),
      r = o(10);
    e.exports = function (e) {
      var t = r.get(e);
      t &&
        (t.event.unbindAll(),
        n.remove(t.scrollbarX),
        n.remove(t.scrollbarY),
        n.remove(t.scrollbarXRail),
        n.remove(t.scrollbarYRail),
        a.removePsClasses(e),
        r.remove(e));
    };
  },
  function (e) {
    'use strict';
    e.exports = {
      handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch'],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1,
      theme: 'default',
    };
  },
  function (e) {
    'use strict';
    var t = function (e) {
      (this.element = e), (this.events = {});
    };
    (t.prototype.bind = function (e, t) {
      'undefined' == typeof this.events[e] && (this.events[e] = []),
        this.events[e].push(t),
        this.element.addEventListener(e, t, !1);
    }),
      (t.prototype.unbind = function (e, t) {
        this.events[e] = this.events[e].filter(function (o) {
          return (
            !!('undefined' != typeof t && o !== t) ||
            (this.element.removeEventListener(e, o, !1), !1)
          );
        }, this);
      }),
      (t.prototype.unbindAll = function () {
        for (var e in this.events) this.unbind(e);
      });
    var o = function () {
      this.eventElements = [];
    };
    (o.prototype.eventElement = function (e) {
      var o = this.eventElements.filter(function (t) {
        return t.element === e;
      })[0];
      return (
        'undefined' == typeof o && ((o = new t(e)), this.eventElements.push(o)),
        o
      );
    }),
      (o.prototype.bind = function (e, t, o) {
        this.eventElement(e).bind(t, o);
      }),
      (o.prototype.unbind = function (e, t, o) {
        this.eventElement(e).unbind(t, o);
      }),
      (o.prototype.unbindAll = function () {
        for (var e = 0; e < this.eventElements.length; e++)
          this.eventElements[e].unbindAll();
      }),
      (o.prototype.once = function (e, t, o) {
        var i = this.eventElement(e);
        i.bind(t, function a(n) {
          i.unbind(t, a), o(n);
        });
      }),
      (e.exports = o);
  },
  function (e) {
    'use strict';
    e.exports = (function () {
      function e() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      return function () {
        return (
          e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e()
        );
      };
    })();
  },
  function (e, t, o) {
    'use strict';
    var a = o(19),
      n = o(64),
      r = o(10),
      l = o(20),
      i = {
        'click-rail': o(307),
        'drag-scrollbar': o(308),
        keyboard: o(309),
        wheel: o(310),
        touch: o(311),
        selection: o(312),
      },
      s = o(313);
    e.exports = function (e, t) {
      (t = 'object' == typeof t ? t : {}), n.add(e, 'ps-container');
      var o = r.add(e);
      (o.settings = a.extend(o.settings, t)),
        n.add(e, 'ps-theme-' + o.settings.theme),
        o.settings.handlers.forEach(function (t) {
          i[t](e);
        }),
        s(e),
        l(e);
    };
  },
  function (e, t, o) {
    'use strict';
    function a(t, o) {
      function i(e) {
        return e.getBoundingClientRect();
      }
      var e = function (t) {
        t.stopPropagation();
      };
      o.event.bind(o.scrollbarY, 'click', e),
        o.event.bind(o.scrollbarYRail, 'click', function (a) {
          var e = a.pageY - window.pageYOffset - i(o.scrollbarYRail).top,
            n = e > o.scrollbarYTop ? 1 : -1;
          l(t, 'top', t.scrollTop + n * o.containerHeight),
            r(t),
            a.stopPropagation();
        }),
        o.event.bind(o.scrollbarX, 'click', e),
        o.event.bind(o.scrollbarXRail, 'click', function (a) {
          var e = a.pageX - window.pageXOffset - i(o.scrollbarXRail).left,
            n = e > o.scrollbarXLeft ? 1 : -1;
          l(t, 'left', t.scrollLeft + n * o.containerWidth),
            r(t),
            a.stopPropagation();
        });
    }
    var n = o(10),
      r = o(20),
      l = o(26);
    e.exports = function (e) {
      var t = n.get(e);
      a(e, t);
    };
  },
  function (e, t, o) {
    'use strict';
    function a(t, o) {
      function a(e) {
        var i = n + e * o.railXRatio,
          a =
            r(0, o.scrollbarXRail.getBoundingClientRect().left) +
            o.railXRatio * (o.railXWidth - o.scrollbarXWidth);
        o.scrollbarXLeft = 0 > i ? 0 : i > a ? a : i;
        var s =
          l.toInt(
            (o.scrollbarXLeft * (o.contentWidth - o.containerWidth)) /
              (o.containerWidth - o.railXRatio * o.scrollbarXWidth),
          ) - o.negativeScrollAdjustment;
        p(t, 'left', s);
      }
      var n = null,
        d = null,
        c = function (o) {
          a(o.pageX - d), i(t), o.stopPropagation(), o.preventDefault();
        },
        u = function () {
          l.stopScrolling(t, 'x'),
            o.event.unbind(o.ownerDocument, 'mousemove', c);
        };
      o.event.bind(o.scrollbarX, 'mousedown', function (i) {
        (d = i.pageX),
          (n = l.toInt(s.css(o.scrollbarX, 'left')) * o.railXRatio),
          l.startScrolling(t, 'x'),
          o.event.bind(o.ownerDocument, 'mousemove', c),
          o.event.once(o.ownerDocument, 'mouseup', u),
          i.stopPropagation(),
          i.preventDefault();
      });
    }
    function n(t, o) {
      function a(e) {
        var i = n + e * o.railYRatio,
          a =
            r(0, o.scrollbarYRail.getBoundingClientRect().top) +
            o.railYRatio * (o.railYHeight - o.scrollbarYHeight);
        o.scrollbarYTop = 0 > i ? 0 : i > a ? a : i;
        var s = l.toInt(
          (o.scrollbarYTop * (o.contentHeight - o.containerHeight)) /
            (o.containerHeight - o.railYRatio * o.scrollbarYHeight),
        );
        p(t, 'top', s);
      }
      var n = null,
        d = null,
        c = function (o) {
          a(o.pageY - d), i(t), o.stopPropagation(), o.preventDefault();
        },
        u = function () {
          l.stopScrolling(t, 'y'),
            o.event.unbind(o.ownerDocument, 'mousemove', c);
        };
      o.event.bind(o.scrollbarY, 'mousedown', function (i) {
        (d = i.pageY),
          (n = l.toInt(s.css(o.scrollbarY, 'top')) * o.railYRatio),
          l.startScrolling(t, 'y'),
          o.event.bind(o.ownerDocument, 'mousemove', c),
          o.event.once(o.ownerDocument, 'mouseup', u),
          i.stopPropagation(),
          i.preventDefault();
      });
    }
    var r = Math.max,
      l = o(19),
      s = o(33),
      d = o(10),
      i = o(20),
      p = o(26);
    e.exports = function (e) {
      var t = d.get(e);
      a(e, t), n(e, t);
    };
  },
  function (e, t, o) {
    'use strict';
    function a(t, o) {
      function a(e, i) {
        var a = t.scrollTop;
        if (0 === e) {
          if (!o.scrollbarYActive) return !1;
          if (
            (0 === a && 0 < i) ||
            (a >= o.contentHeight - o.containerHeight && 0 > i)
          )
            return !o.settings.wheelPropagation;
        }
        var n = t.scrollLeft;
        if (0 === i) {
          if (!o.scrollbarXActive) return !1;
          if (
            (0 === n && 0 > e) ||
            (n >= o.contentWidth - o.containerWidth && 0 < e)
          )
            return !o.settings.wheelPropagation;
        }
        return !0;
      }
      var r = !1;
      o.event.bind(t, 'mouseenter', function () {
        r = !0;
      }),
        o.event.bind(t, 'mouseleave', function () {
          r = !1;
        });
      var d = !1;
      o.event.bind(o.ownerDocument, 'keydown', function (p) {
        if (
          !(
            (p.isDefaultPrevented && p.isDefaultPrevented()) ||
            p.defaultPrevented
          )
        ) {
          var e =
            n.matches(o.scrollbarX, ':focus') ||
            n.matches(o.scrollbarY, ':focus');
          if (r || e) {
            var c = document.activeElement
              ? document.activeElement
              : o.ownerDocument.activeElement;
            if (c) {
              if ('IFRAME' === c.tagName) c = c.contentDocument.activeElement;
              else
                for (; c.shadowRoot && c.shadowRoot.activeElement; )
                  c = c.shadowRoot.activeElement;
              if (i.isEditable(c)) return;
            }
            var u = 0,
              g = 0;
            switch (p.which) {
              case 37:
                u = p.metaKey
                  ? -o.contentWidth
                  : p.altKey
                  ? -o.containerWidth
                  : -30;
                break;
              case 38:
                g = p.metaKey
                  ? o.contentHeight
                  : p.altKey
                  ? o.containerHeight
                  : 30;
                break;
              case 39:
                u = p.metaKey
                  ? o.contentWidth
                  : p.altKey
                  ? o.containerWidth
                  : 30;
                break;
              case 40:
                g = p.metaKey
                  ? -o.contentHeight
                  : p.altKey
                  ? -o.containerHeight
                  : -30;
                break;
              case 33:
                g = 90;
                break;
              case 32:
                g = p.shiftKey ? 90 : -90;
                break;
              case 34:
                g = -90;
                break;
              case 35:
                g = p.ctrlKey ? -o.contentHeight : -o.containerHeight;
                break;
              case 36:
                g = p.ctrlKey ? t.scrollTop : o.containerHeight;
                break;
              default:
                return;
            }
            s(t, 'top', t.scrollTop - g),
              s(t, 'left', t.scrollLeft + u),
              l(t),
              (d = a(u, g)),
              d && p.preventDefault();
          }
        }
      });
    }
    var i = o(19),
      n = o(33),
      r = o(10),
      l = o(20),
      s = o(26);
    e.exports = function (e) {
      var t = r.get(e);
      a(e, t);
    };
  },
  function (e, t, o) {
    'use strict';
    function a(t, o) {
      function i(e, i) {
        var a = t.scrollTop;
        if (0 === e) {
          if (!o.scrollbarYActive) return !1;
          if (
            (0 === a && 0 < i) ||
            (a >= o.contentHeight - o.containerHeight && 0 > i)
          )
            return !o.settings.wheelPropagation;
        }
        var n = t.scrollLeft;
        if (0 === i) {
          if (!o.scrollbarXActive) return !1;
          if (
            (0 === n && 0 > e) ||
            (n >= o.contentWidth - o.containerWidth && 0 < e)
          )
            return !o.settings.wheelPropagation;
        }
        return !0;
      }
      function a(t) {
        var e = t.deltaX,
          o = -1 * t.deltaY;
        return (
          ('undefined' == typeof e || 'undefined' == typeof o) &&
            ((e = (-1 * t.wheelDeltaX) / 6), (o = t.wheelDeltaY / 6)),
          t.deltaMode && 1 === t.deltaMode && ((e *= 10), (o *= 10)),
          e !== e && o !== o && ((e = 0), (o = t.wheelDelta)),
          t.shiftKey ? [-o, -e] : [e, o]
        );
      }
      function n(e, o) {
        var i = t.querySelector(
          'textarea:hover, select[multiple]:hover, .ps-child:hover',
        );
        if (i) {
          if (!window.getComputedStyle(i).overflow.match(/(scroll|auto)/))
            return !1;
          var a = i.scrollHeight - i.clientHeight;
          if (
            0 < a &&
            !(0 === i.scrollTop && 0 < o) &&
            !(i.scrollTop === a && 0 > o)
          )
            return !0;
          var n = i.scrollLeft - i.clientWidth;
          if (
            0 < n &&
            !(0 === i.scrollLeft && 0 > e) &&
            !(i.scrollLeft === n && 0 < e)
          )
            return !0;
        }
        return !1;
      }
      function e(d) {
        var e = a(d),
          p = e[0],
          c = e[1];
        n(p, c) ||
          ((s = !1),
          o.settings.useBothWheelAxes
            ? o.scrollbarYActive && !o.scrollbarXActive
              ? (c
                  ? l(t, 'top', t.scrollTop - c * o.settings.wheelSpeed)
                  : l(t, 'top', t.scrollTop + p * o.settings.wheelSpeed),
                (s = !0))
              : o.scrollbarXActive &&
                !o.scrollbarYActive &&
                (p
                  ? l(t, 'left', t.scrollLeft + p * o.settings.wheelSpeed)
                  : l(t, 'left', t.scrollLeft - c * o.settings.wheelSpeed),
                (s = !0))
            : (l(t, 'top', t.scrollTop - c * o.settings.wheelSpeed),
              l(t, 'left', t.scrollLeft + p * o.settings.wheelSpeed)),
          r(t),
          (s = s || i(p, c)),
          s && (d.stopPropagation(), d.preventDefault()));
      }
      var s = !1;
      'undefined' == typeof window.onwheel
        ? 'undefined' != typeof window.onmousewheel &&
          o.event.bind(t, 'mousewheel', e)
        : o.event.bind(t, 'wheel', e);
    }
    var n = o(10),
      r = o(20),
      l = o(26);
    e.exports = function (e) {
      var t = n.get(e);
      a(e, t);
    };
  },
  function (e, t, o) {
    'use strict';
    function a(e, t, o, a) {
      function r(o, i) {
        var a = e.scrollTop,
          r = e.scrollLeft,
          l = n(o),
          s = n(i);
        if (s > l) {
          if (
            (0 > i && a === t.contentHeight - t.containerHeight) ||
            (0 < i && 0 === a)
          )
            return !t.settings.swipePropagation;
        } else if (
          l > s &&
          ((0 > o && r === t.contentWidth - t.containerWidth) ||
            (0 < o && 0 === r))
        )
          return !t.settings.swipePropagation;
        return !0;
      }
      function d(t, o) {
        s(e, 'top', e.scrollTop - o), s(e, 'left', e.scrollLeft - t), i(e);
      }
      function p() {
        k = !0;
      }
      function c() {
        k = !1;
      }
      function u(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }
      function g(t) {
        return (
          !!(t.targetTouches && 1 === t.targetTouches.length) ||
          !!(
            t.pointerType &&
            'mouse' !== t.pointerType &&
            t.pointerType !== t.MSPOINTER_TYPE_MOUSE
          )
        );
      }
      function m(t) {
        if (g(t)) {
          A = !0;
          var e = u(t);
          (f.pageX = e.pageX),
            (f.pageY = e.pageY),
            (y = new Date().getTime()),
            null !== x && clearInterval(x),
            t.stopPropagation();
        }
      }
      function h(o) {
        if ((!A && t.settings.swipePropagation && m(o), !k && A && g(o))) {
          var e = u(o),
            i = { pageX: e.pageX, pageY: e.pageY },
            a = i.pageX - f.pageX,
            n = i.pageY - f.pageY;
          d(a, n), (f = i);
          var l = new Date().getTime(),
            s = l - y;
          0 < s && ((v.x = a / s), (v.y = n / s), (y = l)),
            r(a, n) && (o.stopPropagation(), o.preventDefault());
        }
      }
      function b() {
        !k &&
          A &&
          ((A = !1),
          clearInterval(x),
          (x = setInterval(function () {
            return l.get(e)
              ? v.x || v.y
                ? 0.01 > n(v.x) && 0.01 > n(v.y)
                  ? void clearInterval(x)
                  : void (d(30 * v.x, 30 * v.y), (v.x *= 0.8), (v.y *= 0.8))
                : void clearInterval(x)
              : void clearInterval(x);
          }, 10)));
      }
      var f = {},
        y = 0,
        v = {},
        x = null,
        k = !1,
        A = !1;
      o
        ? (t.event.bind(window, 'touchstart', p),
          t.event.bind(window, 'touchend', c),
          t.event.bind(e, 'touchstart', m),
          t.event.bind(e, 'touchmove', h),
          t.event.bind(e, 'touchend', b))
        : a &&
          (window.PointerEvent
            ? (t.event.bind(window, 'pointerdown', p),
              t.event.bind(window, 'pointerup', c),
              t.event.bind(e, 'pointerdown', m),
              t.event.bind(e, 'pointermove', h),
              t.event.bind(e, 'pointerup', b))
            : window.MSPointerEvent &&
              (t.event.bind(window, 'MSPointerDown', p),
              t.event.bind(window, 'MSPointerUp', c),
              t.event.bind(e, 'MSPointerDown', m),
              t.event.bind(e, 'MSPointerMove', h),
              t.event.bind(e, 'MSPointerUp', b)));
    }
    var n = Math.abs,
      r = o(19),
      l = o(10),
      i = o(20),
      s = o(26);
    e.exports = function (e) {
      if (r.env.supportsTouch || r.env.supportsIePointer) {
        var t = l.get(e);
        a(e, t, r.env.supportsTouch, r.env.supportsIePointer);
      }
    };
  },
  function (e, t, o) {
    'use strict';
    function a(t, e) {
      function o() {
        var e = window.getSelection
          ? window.getSelection()
          : document.getSelection
          ? document.getSelection()
          : '';
        return 0 === e.toString().length
          ? null
          : e.getRangeAt(0).commonAncestorContainer;
      }
      function a() {
        d ||
          (d = setInterval(function () {
            return n.get(t)
              ? void (l(t, 'top', t.scrollTop + p.top),
                l(t, 'left', t.scrollLeft + p.left),
                r(t))
              : void clearInterval(d);
          }, 50));
      }
      function s() {
        d && (clearInterval(d), (d = null)), i.stopScrolling(t);
      }
      var d = null,
        p = { top: 0, left: 0 },
        c = !1;
      e.event.bind(e.ownerDocument, 'selectionchange', function () {
        t.contains(o()) ? (c = !0) : ((c = !1), s());
      }),
        e.event.bind(window, 'mouseup', function () {
          c && ((c = !1), s());
        }),
        e.event.bind(window, 'keyup', function () {
          c && ((c = !1), s());
        }),
        e.event.bind(window, 'mousemove', function (o) {
          if (c) {
            var e = { x: o.pageX, y: o.pageY },
              n = {
                left: t.offsetLeft,
                right: t.offsetLeft + t.offsetWidth,
                top: t.offsetTop,
                bottom: t.offsetTop + t.offsetHeight,
              };
            e.x < n.left + 3
              ? ((p.left = -5), i.startScrolling(t, 'x'))
              : e.x > n.right - 3
              ? ((p.left = 5), i.startScrolling(t, 'x'))
              : (p.left = 0),
              e.y < n.top + 3
                ? ((p.top = 5 > n.top + 3 - e.y ? -5 : -20),
                  i.startScrolling(t, 'y'))
                : e.y > n.bottom - 3
                ? ((p.top = 5 > e.y - n.bottom + 3 ? 5 : 20),
                  i.startScrolling(t, 'y'))
                : (p.top = 0),
              0 === p.top && 0 === p.left ? s() : a();
          }
        });
    }
    var i = o(19),
      n = o(10),
      r = o(20),
      l = o(26);
    e.exports = function (e) {
      var t = n.get(e);
      a(e, t);
    };
  },
  function (e, t, o) {
    'use strict';
    function a(e, t) {
      t.event.bind(e, 'scroll', function () {
        i(e);
      });
    }
    var n = o(10),
      i = o(20);
    e.exports = function (e) {
      var t = n.get(e);
      a(e, t);
    };
  },
  function (e, t, o) {
    'use strict';
    var a = o(19),
      n = o(33),
      r = o(10),
      l = o(20),
      s = o(26);
    e.exports = function (e) {
      var t = r.get(e);
      t &&
        ((t.negativeScrollAdjustment = t.isNegativeScroll
          ? e.scrollWidth - e.clientWidth
          : 0),
        n.css(t.scrollbarXRail, 'display', 'block'),
        n.css(t.scrollbarYRail, 'display', 'block'),
        (t.railXMarginWidth =
          a.toInt(n.css(t.scrollbarXRail, 'marginLeft')) +
          a.toInt(n.css(t.scrollbarXRail, 'marginRight'))),
        (t.railYMarginHeight =
          a.toInt(n.css(t.scrollbarYRail, 'marginTop')) +
          a.toInt(n.css(t.scrollbarYRail, 'marginBottom'))),
        n.css(t.scrollbarXRail, 'display', 'none'),
        n.css(t.scrollbarYRail, 'display', 'none'),
        l(e),
        s(e, 'top', e.scrollTop),
        s(e, 'left', e.scrollLeft),
        n.css(t.scrollbarXRail, 'display', ''),
        n.css(t.scrollbarYRail, 'display', ''));
    };
  },
  function (e) {
    e.exports =
      '/* perfect-scrollbar v0.6.16 */\r\n.ps-container{-ms-touch-action:auto;touch-action:auto;overflow:hidden !important;-ms-overflow-style:none}@supports (-ms-overflow-style: none){.ps-container{overflow:auto !important}}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.ps-container{overflow:auto !important}}.ps-container.ps-active-x>.ps-scrollbar-x-rail,.ps-container.ps-active-y>.ps-scrollbar-y-rail{display:block;background-color:transparent}.ps-container.ps-in-scrolling.ps-x>.ps-scrollbar-x-rail{background-color:#eee;opacity:.9}.ps-container.ps-in-scrolling.ps-x>.ps-scrollbar-x-rail>.ps-scrollbar-x{background-color:#999;height:11px}.ps-container.ps-in-scrolling.ps-y>.ps-scrollbar-y-rail{background-color:#eee;opacity:.9}.ps-container.ps-in-scrolling.ps-y>.ps-scrollbar-y-rail>.ps-scrollbar-y{background-color:#999;width:11px}.ps-container>.ps-scrollbar-x-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear, opacity .2s linear;-o-transition:background-color .2s linear, opacity .2s linear;-moz-transition:background-color .2s linear, opacity .2s linear;transition:background-color .2s linear, opacity .2s linear;bottom:0px;height:15px}.ps-container>.ps-scrollbar-x-rail>.ps-scrollbar-x{position:absolute;background-color:#aaa;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;-o-transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;-moz-transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -webkit-border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;bottom:2px;height:6px}.ps-container>.ps-scrollbar-x-rail:hover>.ps-scrollbar-x,.ps-container>.ps-scrollbar-x-rail:active>.ps-scrollbar-x{height:11px}.ps-container>.ps-scrollbar-y-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear, opacity .2s linear;-o-transition:background-color .2s linear, opacity .2s linear;-moz-transition:background-color .2s linear, opacity .2s linear;transition:background-color .2s linear, opacity .2s linear;right:0;width:15px}.ps-container>.ps-scrollbar-y-rail>.ps-scrollbar-y{position:absolute;background-color:#aaa;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;-o-transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;-moz-transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;transition:background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -webkit-border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;right:2px;width:6px}.ps-container>.ps-scrollbar-y-rail:hover>.ps-scrollbar-y,.ps-container>.ps-scrollbar-y-rail:active>.ps-scrollbar-y{width:11px}.ps-container:hover.ps-in-scrolling.ps-x>.ps-scrollbar-x-rail{background-color:#eee;opacity:.9}.ps-container:hover.ps-in-scrolling.ps-x>.ps-scrollbar-x-rail>.ps-scrollbar-x{background-color:#999;height:11px}.ps-container:hover.ps-in-scrolling.ps-y>.ps-scrollbar-y-rail{background-color:#eee;opacity:.9}.ps-container:hover.ps-in-scrolling.ps-y>.ps-scrollbar-y-rail>.ps-scrollbar-y{background-color:#999;width:11px}.ps-container:hover>.ps-scrollbar-x-rail,.ps-container:hover>.ps-scrollbar-y-rail{opacity:.6}.ps-container:hover>.ps-scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps-container:hover>.ps-scrollbar-x-rail:hover>.ps-scrollbar-x{background-color:#999}.ps-container:hover>.ps-scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps-container:hover>.ps-scrollbar-y-rail:hover>.ps-scrollbar-y{background-color:#999}\r\n';
  },
  function (e, t) {
    function o(t) {
      var e = t.target || t.srcElement;
      e.__resizeRAF__ && cancelAnimationFrame(e.__resizeRAF__),
        (e.__resizeRAF__ = requestAnimationFrame(function () {
          var o = e.__resizeTrigger__,
            i = o && o.__resizeListeners__;
          i &&
            i.forEach(function (e) {
              e.call(o, t);
            });
        }));
    }
    var t = function (e, t) {
      function i() {
        (this.contentDocument.defaultView.__resizeTrigger__ =
          this.__resizeElement__),
          this.contentDocument.defaultView.addEventListener('resize', o);
      }
      var a = this,
        n = a.document,
        r = n.attachEvent,
        l;
      if (
        ('undefined' != typeof navigator &&
          (l =
            navigator.userAgent.match(/Trident/) ||
            navigator.userAgent.match(/Edge/)),
        !e.__resizeListeners__)
      )
        if (((e.__resizeListeners__ = []), r))
          (e.__resizeTrigger__ = e), e.attachEvent('onresize', o);
        else {
          'static' === getComputedStyle(e).position &&
            (e.style.position = 'relative');
          var s = (e.__resizeTrigger__ = n.createElement('object'));
          s.setAttribute(
            'style',
            'position: absolute; top: 0; left: 0; height: 100%; width: 100%; pointer-events: none; z-index: -1; opacity: 0;',
          ),
            s.setAttribute('class', 'resize-sensor'),
            s.setAttribute('tabindex', '-1'),
            (s.__resizeElement__ = e),
            (s.onload = i),
            (s.type = 'text/html'),
            l && e.appendChild(s),
            (s.data = 'about:blank'),
            l || e.appendChild(s);
        }
      e.__resizeListeners__.push(t);
    };
    (e.exports = 'undefined' == typeof window ? t : t.bind(window)),
      (e.exports.unbind = function (e, t) {
        var i = document.attachEvent,
          a = e.__resizeListeners__ || [];
        if (t) {
          var n = a.indexOf(t);
          -1 !== n && a.splice(n, 1);
        } else a = e.__resizeListeners__ = [];
        if (!a.length) {
          if (i) e.detachEvent('onresize', o);
          else if (e.__resizeTrigger__) {
            var r = e.__resizeTrigger__.contentDocument,
              l = r && r.defaultView;
            l &&
              (l.removeEventListener('resize', o), delete l.__resizeTrigger__),
              (e.__resizeTrigger__ = !e.removeChild(e.__resizeTrigger__));
          }
          delete e.__resizeListeners__;
        }
      });
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="wrapper use-for-higher-specificity">\r\n    <div class="inner-wrapper">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  display: flex;\n  flex-direction: column;\n}\n.wrapper {\n  flex: 1;\n  position: relative;\n}\n.ps-container .ps-scrollbar-y-rail .ps-scrollbar-y {\n  background-color: #785a28;\n  margin-right: 2px;\n  border: thin solid #000;\n}\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: transparent;\n}\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #463714;\n}\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: transparent;\n}\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #cdbe91;\n}\n.ps-container:hover > .ps-scrollbar-y-rail:hover {\n  background-color: transparent;\n}\n.ps-container:hover > .ps-scrollbar-y-rail:hover > .ps-scrollbar-y {\n  background-color: #cdbe91;\n}\n.ps-scrollbar-y-rail {\n  margin: 5px 0;\n}\n:host .wrapper .inner-wrapper {\n  overflow: hidden;\n}\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail .ps-scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail .ps-scrollbar-y:hover,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail:hover,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail .ps__scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail:hover .ps__scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y:hover,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y:hover,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail .ps-scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail .ps-scrollbar-y:hover,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail:hover .ps-scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail:hover .ps-scrollbar-y:hover,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y:hover,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y,\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y:hover {\n  width: 4px;\n  opacity: 1;\n  right: 2px;\n}\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail .ps-scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail .ps-scrollbar-y:hover:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail:hover:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail .ps__scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity .ps-scrollbar-y-rail:hover .ps__scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y:hover:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y:hover:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail .ps-scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail .ps-scrollbar-y:hover:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail:hover .ps-scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover .ps-scrollbar-y-rail:hover .ps-scrollbar-y:hover:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail .ps-scrollbar-y:hover:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y:lang(ar-ae),\n:host .wrapper.ps-container.ps-theme-default.use-for-higher-specificity:hover.ps--in-scrolling.ps--y .ps-scrollbar-y-rail:hover .ps-scrollbar-y:hover:lang(ar-ae) {\n  right: auto;\n  left: 2px;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(30),
      a = o(29),
      n = o(7),
      r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n),
      l = o(0);
    class s extends l.webComponents.ShadowElement {
      templateMarkup() {
        return o(320);
      }
      stylesheetMarkup() {
        return o(321);
      }
      constructor() {
        super(),
          (this._wasDisabled = !1),
          (this._hasPlayedIntro = !1),
          (this.mouseover = this.sendMouseEvent.bind(this, 'hover', 'hover')),
          (this.mouseout = this.sendMouseEvent.bind(this, 'out', 'idle')),
          (this.mouseup = this.sendMouseEvent.bind(this, 'up')),
          (this.mousedown = (0, a.leftClickHandler)(
            this.sendMouseEvent.bind(this, 'down', 'down'),
          )),
          (this.click = (0, a.leftClickHandler)(
            this.sendMouseEvent.bind(this, 'click', 'click'),
          ));
      }
      connectedCallback() {
        this.setMouseEvents(),
          s.initAnimationDelay
            ? setTimeout(this.initAnimation.bind(this), s.initAnimationDelay)
            : this.initAnimation();
      }
      disconnectedCallback() {
        this.removeMouseEvents();
      }
      static get observedAttributes() {
        return ['hover-sfx-src', 'click-sfx-src'];
      }
      attributeChangedCallback() {
        super.attributeChangedCallback(),
          this.processAttributes({ event: 'changed' });
      }
      _createSound(e) {
        return (0, i.createSound)('sfx-ui', e, { allowConcurrency: !1 });
      }
      processAttributes() {
        const e = this.shadowRoot,
          t = e.querySelector('.lol-uikit-primary-magic-button-wrapper'),
          o = this.getAttribute('hover-sfx-src'),
          i = this.getAttribute('click-sfx-src');
        this.setCustomSounds(o, i),
          this.disabled && !t.classList.contains('click')
            ? this.setInteractionClass('disabled')
            : (this.setInteractionClass('idle'),
              this._wasDisabled && this.playIntro()),
          (this._wasDisabled = this.disabled);
      }
      setCustomSounds(e, t) {
        const o = e || r.default.primaryMagicButtonHover,
          i = t || r.default.primaryMagicButtonClick;
        (this._hoverSound = this._createSound(o)),
          (this._clickSound = this._createSound(i));
      }
      initAnimation() {
        this.disabled || this.playIntro();
      }
      playIntro() {
        if (!this._hasPlayedIntro) {
          this.introTimer && clearTimeout(this.introTimer),
            this.setInteractionClass('intro'),
            (this.introTimer = setTimeout(() => {
              this.disabled || this.setInteractionClass('idle');
            }, 500)),
            (this._hasPlayedIntro = !0);
        }
      }
      setMouseEvents() {
        const e = this.shadowRoot;
        e.addEventListener('mouseover', this.mouseover),
          e.addEventListener('mouseout', this.mouseout),
          e.addEventListener('mouseup', this.mouseup),
          e.addEventListener('mousedown', this.mousedown),
          e.addEventListener('click', this.click);
      }
      removeMouseEvents() {
        const e = this.shadowRoot;
        e.removeEventListener('mouseover', this.mouseover),
          e.removeEventListener('mouseout', this.mouseout),
          e.removeEventListener('mouseup', this.mouseup),
          e.removeEventListener('mousedown', this.mousedown),
          e.removeEventListener('click', this.click);
      }
      sendMouseEvent(e, t) {
        this.disabled ||
          (this.introTimer && clearTimeout(this.introTimer),
          'string' == typeof t && this.setInteractionClass(t),
          'click' === e && (this.disableOnClick(), this._clickSound.play()),
          'hover' === e && this._hoverSound.play());
      }
      disableOnClick(e = 0) {
        function t() {
          this.setMouseEvents(),
            this.setInteractionClass(this.disabled ? 'disabled' : 'idle');
        }
        this.disabled ||
          ((e = e || 500),
          this.removeMouseEvents(),
          e ? window.setTimeout(t.bind(this), e) : t());
      }
      setInteractionClass(e) {
        const t = this.shadowRoot.querySelector(
            '.lol-uikit-primary-magic-button-wrapper',
          ),
          o = t.querySelector('lol-uikit-animated-border-overlay');
        ['intro', 'idle', 'hover', 'down', 'click', 'disabled'].forEach((i) => {
          i !== e && (t.classList.remove(i), o.classList.remove(i));
        }),
          e && (t.classList.add(e), o.classList.add(e));
      }
    }
    (s.initAnimationDelay = 100),
      Object.defineProperty(s.prototype, 'disabled', {
        enumerable: !0,
        get: function () {
          return this.hasAttribute('disabled');
        },
        set: function (e) {
          e
            ? this.setAttribute('disabled', 'disabled')
            : this.removeAttribute('disabled');
        },
      }),
      (s.tagName = 'lol-uikit-primary-magic-button'),
      (t.default = s);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <style>\r\n    @keyframes noiseScroll {\r\n      0%    { opacity: 1; background-position: 0 center; }\r\n      100%  { opacity: 1; background-position: -400% center; }\r\n    }\r\n\r\n    @keyframes noiseFade {\r\n      0%    { opacity: 1; }\r\n      10%   { opacity: 0; }\r\n      90%   { opacity: 0; }\r\n      100%  { opacity: 1; }\r\n    }\r\n\r\n    @keyframes radialEffectTransition {\r\n      0%    { top: -120px; }\r\n      100%  { top: 100%; }\r\n    }\r\n\r\n    @keyframes backgroundIntro {\r\n      0%    { box-shadow: inset 0 -10px 20px rgba(5, 150, 170, 0); }\r\n      30%   { box-shadow: inset 0 -10px 20px rgba(5, 150, 170, 0.5); }\r\n      100%  { box-shadow: inset 0 -10px 20px rgba(5, 150, 170, 0); }\r\n    }\r\n\r\n    @keyframes introText {\r\n      0%    { }\r\n      30%   { text-shadow: 0 0 0; }\r\n      50%   { text-shadow: 0 0 6px; }\r\n      60%   { text-shadow: 0 0 6px; }\r\n      100%  { text-shadow: 0 0 0; }\r\n    }\r\n\r\n    @keyframes backgroundClick {\r\n      0%    { box-shadow: inset 0 100px 0 rgba(5, 150, 170, 0); }\r\n      30%   { box-shadow: inset 0 100px 0 rgba(5, 150, 170, 0.5); }\r\n      100%  { box-shadow: inset 0 100px 0 rgba(5, 150, 170, 0.0); }\r\n    }\r\n\r\n    @keyframes runeMagicLeftSpriteSheetAnimation { /* 30 frames of 22px plus one null frame */\r\n      0%    { background-position-y: 22px; }\r\n      100%  { background-position-y: -660px; }\r\n    }\r\n    @keyframes runeMagicRightSpriteSheetAnimation { /* 30 frames of 22px plus one null frame */\r\n      0%    { background-position-y: 24px; }\r\n      100%  { background-position-y: -720px; }\r\n    }\r\n  </style>\r\n  <div class="lol-uikit-primary-magic-button-wrapper">\r\n    <div class="button-frame-idle"></div>\r\n    <div class="button-frame-interactive"></div>\r\n\r\n    <div class="left-rune-magic"></div>\r\n    <div class="right-rune-magic"></div>\r\n\r\n    <div class="radial-container">\r\n      <div class="radial-effect"></div>\r\n    </div>\r\n\r\n\r\n    <lol-uikit-animated-border-overlay\r\n      class="border-animation-container"\r\n      speed=15000>\r\n    </lol-uikit-animated-border-overlay>\r\n    <div class="lol-uikit-primary-magic-button">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ".lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button {\n  font-family: var(--font-display);\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button {\n  -webkit-user-select: none;\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button {\n  font-kerning: normal;\n  -webkit-font-feature-settings: \"kern\" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button {\n  text-transform: uppercase;\n}\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button:lang(ko-kr),\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button:lang(ja-jp),\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button:lang(tr-tr),\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button:lang(el-gr),\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button:lang(th-th),\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button:lang(zh-tw) {\n  text-transform: none;\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button {\n  color: #c8aa6e;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.0325em;\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button:hover {\n  color: #f0e6d2;\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button:disabled,\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button:disabled:hover,\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button[disabled='true'],\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button[disabled='true']:hover {\n  color: #5c5b57;\n  cursor: default;\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button:active {\n  color: #785a28;\n}\n:host {\n  height: 32px;\n}\n:host.disabled,\n:host[disabled=disabled],\n:host:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.lol-uikit-primary-magic-button-wrapper {\n  display: flex;\n  height: 100%;\n  position: relative;\n  min-width: inherit;\n  width: inherit;\n  cursor: pointer;\n}\n.lol-uikit-primary-magic-button-wrapper .lol-uikit-primary-magic-button {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  padding: 0 1.3em;\n  color: #3c3c41;\n  text-align: center;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  overflow: hidden;\n  transition: 300ms all linear;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle,\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  transition: 300ms all linear;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle::before,\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive::before,\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle::after,\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  box-shadow: 0 0 1px rgba(1,10,19,0.25), inset 0 0 1px rgba(1,10,19,0.25);\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle {\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle::before,\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle::after {\n  transition: 300ms all linear;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle::before {\n  opacity: 1;\n  border: 2px solid #3c3c41;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-idle::after {\n  opacity: 0;\n  border: 2px solid transparent;\n  border-image: linear-gradient(to top, #005a82 0%, #0596aa 44%, #0596aa 93%, #0ac8b9 100%) 2 stretch;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive::before,\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive::after {\n  transition: 300ms all linear;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive::before {\n  opacity: 1;\n  border: 3px solid;\n  border-image: linear-gradient(to top, #3295c7 0%, #0ac8b9 49%, #cdfafa 100%) 2 stretch;\n}\n.lol-uikit-primary-magic-button-wrapper .button-frame-interactive::after {\n  opacity: 0;\n  border: 2px solid transparent;\n  border-image: linear-gradient(to top, #005a82 0%, #005a82 83%, #005a82 100%) 2 stretch;\n}\n.lol-uikit-primary-magic-button-wrapper .radial-container {\n  display: block;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.lol-uikit-primary-magic-button-wrapper .radial-container .radial-effect {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 3px;\n  box-sizing: border-box;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to right, #000, #000);\n}\n.lol-uikit-primary-magic-button-wrapper .radial-container .radial-effect::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 120px;\n  top: -120px;\n  opacity: 0.1;\n  background-image: radial-gradient(ellipse closest-side, #a2ffff 40%, #6cfcff 60%, transparent 90%);\n  background-position: center;\n}\n.lol-uikit-primary-magic-button-wrapper .border-animation-container {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.01;\n  transition: 300ms opacity linear;\n  pointer-events: none;\n}\n.lol-uikit-primary-magic-button-wrapper .left-rune-magic,\n.lol-uikit-primary-magic-button-wrapper .right-rune-magic {\n  position: absolute;\n  pointer-events: inherit;\n  background-repeat: no-repeat;\n}\n.lol-uikit-primary-magic-button-wrapper .left-rune-magic {\n  width: 44px;\n  height: 22px;\n  left: 0;\n  bottom: 0;\n  background-image: url(\"/fe/lol-uikit/images/magic-button-left-runes-44x22-29F30F29F.png\");\n  background-position: 100px 100px;\n}\n.lol-uikit-primary-magic-button-wrapper .right-rune-magic {\n  width: 62px;\n  height: 22px;\n  right: 0;\n  top: 0;\n  background-image: url(\"/fe/lol-uikit/images/magic-button-right-runes-62x22-25F30F29F.png\");\n  background-position: 100px 100px;\n}\n.lol-uikit-primary-magic-button-wrapper.disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.lol-uikit-primary-magic-button-wrapper.disabled .lol-uikit-primary-magic-button {\n  color: #5c5b57;\n  font-size: 14px;\n  box-shadow: 0 0 1px 1px #010a13, inset 0 0 1px 1px #010a13;\n  background-color: #1e2328;\n  border: 2px solid #5c5b57;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .border-animation-container,\n.lol-uikit-primary-magic-button-wrapper.hover .border-animation-container,\n.lol-uikit-primary-magic-button-wrapper.click .border-animation-container {\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .radial-container .radial-effect,\n.lol-uikit-primary-magic-button-wrapper.hover .radial-container .radial-effect,\n.lol-uikit-primary-magic-button-wrapper.click .radial-container .radial-effect {\n  display: block;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .radial-container .radial-effect::after,\n.lol-uikit-primary-magic-button-wrapper.hover .radial-container .radial-effect::after,\n.lol-uikit-primary-magic-button-wrapper.click .radial-container .radial-effect::after {\n  animation: radialEffectTransition 700ms forwards ease-out;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .left-rune-magic,\n.lol-uikit-primary-magic-button-wrapper.hover .left-rune-magic,\n.lol-uikit-primary-magic-button-wrapper.click .left-rune-magic {\n  animation: runeMagicLeftSpriteSheetAnimation 500ms forwards steps(31);\n}\n.lol-uikit-primary-magic-button-wrapper.intro .right-rune-magic,\n.lol-uikit-primary-magic-button-wrapper.hover .right-rune-magic,\n.lol-uikit-primary-magic-button-wrapper.click .right-rune-magic {\n  animation: runeMagicRightSpriteSheetAnimation 500ms forwards steps(31);\n}\n.lol-uikit-primary-magic-button-wrapper.intro .button-frame-idle {\n  background-color: rgba(30,35,40,0.5);\n  animation: backgroundIntro 1000ms ease-out;\n  transition: 800ms all ease-out;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .button-frame-idle::before {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .button-frame-idle::after {\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .lol-uikit-primary-magic-button {\n  color: #a3c7c7;\n  transition: 800ms all ease-out;\n  animation: introText 700ms forwards ease-in;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .left-rune-magic {\n  background-position-x: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.intro .right-rune-magic {\n  background-position-x: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-idle {\n  opacity: 1;\n  background-color: rgba(30,35,40,0.5);\n}\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-idle::before,\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-idle::after {\n  transition: 300ms all linear;\n}\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-idle::before {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-idle::after {\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-interactive {\n  opacity: 0;\n  transition: 300ms all linear;\n}\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-interactive::before {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.idle .button-frame-interactive::after {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.idle .lol-uikit-primary-magic-button {\n  color: #a3c7c7;\n}\n.lol-uikit-primary-magic-button-wrapper.hover .button-frame-idle {\n  background-color: rgba(30,35,40,0.5);\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.hover .button-frame-interactive {\n  background-color: rgba(30,35,40,0.5);\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper.hover .button-frame-interactive::before,\n.lol-uikit-primary-magic-button-wrapper.hover .button-frame-interactive::after {\n  box-shadow: inset 0 -10px 20px rgba(5,150,170,0.5);\n}\n.lol-uikit-primary-magic-button-wrapper.hover .button-frame-interactive::before {\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper.hover .button-frame-interactive::after {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.hover .lol-uikit-primary-magic-button {\n  color: #cdfafa;\n}\n.lol-uikit-primary-magic-button-wrapper.hover .left-rune-magic {\n  background-position-x: -44px;\n}\n.lol-uikit-primary-magic-button-wrapper.hover .right-rune-magic {\n  background-position-x: -62px;\n}\n.lol-uikit-primary-magic-button-wrapper.click .button-frame-idle,\n.lol-uikit-primary-magic-button-wrapper.down .button-frame-idle {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.click .button-frame-interactive,\n.lol-uikit-primary-magic-button-wrapper.down .button-frame-interactive {\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper.click .button-frame-interactive::before,\n.lol-uikit-primary-magic-button-wrapper.down .button-frame-interactive::before,\n.lol-uikit-primary-magic-button-wrapper.click .button-frame-interactive::after,\n.lol-uikit-primary-magic-button-wrapper.down .button-frame-interactive::after {\n  box-shadow: inset 0 -10px 20px rgba(5,150,170,0);\n}\n.lol-uikit-primary-magic-button-wrapper.click .button-frame-interactive::before,\n.lol-uikit-primary-magic-button-wrapper.down .button-frame-interactive::before {\n  opacity: 0;\n}\n.lol-uikit-primary-magic-button-wrapper.click .button-frame-interactive::after,\n.lol-uikit-primary-magic-button-wrapper.down .button-frame-interactive::after {\n  opacity: 1;\n}\n.lol-uikit-primary-magic-button-wrapper.click .left-rune-magic,\n.lol-uikit-primary-magic-button-wrapper.down .left-rune-magic {\n  background-position-x: -88px;\n}\n.lol-uikit-primary-magic-button-wrapper.click .right-rune-magic,\n.lol-uikit-primary-magic-button-wrapper.down .right-rune-magic {\n  background-position-x: -124px;\n}\n.lol-uikit-primary-magic-button-wrapper.down .border-animation-container {\n  opacity: 0.5;\n}\n.lol-uikit-primary-magic-button-wrapper.down .button-frame-interactive {\n  box-shadow: inset 0 -10px 20px rgba(5,150,170,0.5);\n}\n.lol-uikit-primary-magic-button-wrapper.down .lol-uikit-primary-magic-button {\n  color: #005a82;\n}\n.lol-uikit-primary-magic-button-wrapper.click .button-frame-interactive {\n  animation: backgroundClick 800ms ease-out;\n}\n.lol-uikit-primary-magic-button-wrapper.click .lol-uikit-primary-magic-button {\n  transition: 500ms all ease-out;\n  color: #005a82;\n}\n",
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(29),
      n = o(30),
      r = o(31),
      l = o(0),
      s = o(9),
      d = i(s),
      p = o(7),
      c = i(p);
    class u extends l.webComponents.ShadowElement {
      static get observedAttributes() {
        return [
          'disabled',
          'rp',
          'be',
          'rp-value',
          'be-value',
          'hover-sfx-src',
          'click-sfx-src',
        ];
      }
      templateMarkup() {
        return o(323);
      }
      stylesheetMarkup() {
        return o(324);
      }
      constructor() {
        super(), this.setMouseEvents();
      }
      _createSound(e) {
        return (0, n.createSound)('sfx-ui', e, { allowConcurrency: !1 });
      }
      setMouseEvents() {
        const e = this.shadowRoot;
        (this.mouseover = this.sendMouseEvent.bind(this, 'hover', 'hover')),
          (this.mouseout = this.sendMouseEvent.bind(this, 'out', 'idle')),
          (this.mousedown = (0, a.leftClickHandler)(
            this.sendMouseEvent.bind(this, 'down', 'down'),
          )),
          (this.click = (0, a.leftClickHandler)(
            this.sendMouseEvent.bind(this, 'click', 'click'),
          )),
          e.addEventListener('mouseover', this.mouseover),
          e.addEventListener('mouseout', this.mouseout),
          e.addEventListener('mousedown', this.mousedown),
          e.addEventListener('click', this.click);
      }
      removeMouseEvents() {
        const e = this.shadowRoot;
        e.removeEventListener('mouseover', this.mouseover),
          e.removeEventListener('mouseout', this.mouseout),
          e.removeEventListener('mousedown', this.mousedown),
          e.removeEventListener('click', this.click);
      }
      sendMouseEvent(e, t) {
        this.disabled ||
          (this.setInteractionClass(t),
          'click' === e &&
            (this.disableOnClick(),
            this._clickSound && this._clickSound.play()),
          'hover' === e && this._hoverSound && this._hoverSound.play());
      }
      disableOnClick() {
        this.removeMouseEvents(),
          this.setInteractionClass('click'),
          window.setTimeout(
            function () {
              this.setMouseEvents(),
                this.disabled
                  ? this.setInteractionClass()
                  : this.setInteractionClass('idle');
            }.bind(this),
            600,
          );
      }
      setInteractionClass(e) {
        const t = this.shadowRoot,
          o = t.querySelector('.lol-uikit-purchase-button');
        null === o ||
          (['idle', 'hover', 'down', 'click'].forEach((e) => {
            o.classList.remove(e);
          }),
          e && o.classList.add(e));
      }
      connectedCallback() {
        super.connectedCallback(),
          (this.isAttached = !0),
          this.processAttributes({ event: 'attached' });
      }
      attributeChangedCallback() {
        super.attributeChangedCallback(),
          this.processAttributes({ event: 'changed' });
      }
      processAttributes(e) {
        super.processAttributes(),
          (e = e || {}),
          this.setCustomSounds(),
          this.$button().toggleClass('rp', this.hasRP()),
          this.$button().toggleClass('be', this.hasBE()),
          this.updateCurrencyValues(),
          this.setDisabledDisplay();
      }
      setCustomSounds() {
        const e = this.getAttribute('hover-sfx-src'),
          t = this.getAttribute('click-sfx-src'),
          o = e || c.default.purchaseButtonHover,
          i = t || c.default.purchaseButtonClick;
        (this._hoverSound = this._createSound(o)),
          (this._clickSound = this._createSound(i));
      }
      setDisabledDisplay() {
        this.$button().toggleClass('disabled', this.disabled),
          this.$buttonWrapper().toggleClass('disabled', this.disabled);
      }
      updateCurrencyValues() {
        this.$currencyValue('rp').text(this.getAttribute('rp-value')),
          this.$currencyValue('be').text(this.getAttribute('be-value'));
      }
      $root() {
        return (0, d.default)(this.shadowRoot);
      }
      $currencyValue(e) {
        return this.$root().find(
          `.lol-uikit-purchase-button-content-value.${e}`,
        );
      }
      $button() {
        return this.$root().find('.lol-uikit-purchase-button');
      }
      $buttonWrapper() {
        return this.$root().find('.lol-uikit-purchase-button-wrapper');
      }
      $buttonInner() {
        return this.$root().find('.lol-uikit-purchase-button-inner');
      }
      hasRP() {
        return (0, r.isAttrTruthy)('rp', this.getAttribute('rp'));
      }
      hasBE() {
        return (0, r.isAttrTruthy)('be', this.getAttribute('be'));
      }
      isAttachedOrChanged(e) {
        return 'attached' === e || ('changed' === e && this.isAttached);
      }
      width() {
        return this.shadowRoot.firstElementChild.offsetWidth;
      }
    }
    Object.defineProperty(u.prototype, 'disabled', {
      enumerable: !0,
      get: function () {
        return (0, r.isAttrTruthy)('disabled', this.getAttribute('disabled'));
      },
      set: function (e) {
        e
          ? this.setAttribute('disabled', 'disabled')
          : this.removeAttribute('disabled');
      },
    }),
      (u.tagName = 'lol-uikit-purchase-button'),
      (t.default = u);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-purchase-button-wrapper">\r\n    <div class="lol-uikit-purchase-button-inner">\r\n      <div class="lol-uikit-purchase-button">\r\n        <div class="lol-uikit-purchase-button-outer-border"></div>\r\n      \t<div class="lol-uikit-purchase-button-border-idle"></div>\r\n      \t<div class="lol-uikit-purchase-button-border-transition"></div>\r\n      \t<div class="lol-uikit-purchase-button-content-wrapper">\r\n          <span class="lol-uikit-purchase-button-content-icon rp"></span>\r\n          <p class="lol-uikit-purchase-button-content-value rp"></p>\r\n          <span class="lol-uikit-purchase-button-content-icon be">\r\n            <div class="be-icon"></div>\r\n          </span>\r\n          <p class="lol-uikit-purchase-button-content-value be"></p>\r\n          <slot />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        '.lol-uikit-purchase-button {\n  font-family: var(--font-display);\n}\n.lol-uikit-purchase-button {\n  font-family: var(--font-display);\n}\n.lol-uikit-purchase-button {\n  text-transform: uppercase;\n}\n.lol-uikit-purchase-button:lang(ko-kr),\n.lol-uikit-purchase-button:lang(ja-jp),\n.lol-uikit-purchase-button:lang(tr-tr),\n.lol-uikit-purchase-button:lang(el-gr),\n.lol-uikit-purchase-button:lang(th-th),\n.lol-uikit-purchase-button:lang(zh-tw) {\n  text-transform: none;\n}\n.lol-uikit-purchase-button-wrapper {\n  min-width: inherit;\n  width: inherit;\n  height: 100%;\n  box-shadow: 0 0 1px 1px #010a13;\n}\n.lol-uikit-purchase-button-inner {\n  height: 100%;\n}\n.lol-uikit-purchase-button {\n  color: #cdbe91;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: center;\n  white-space: nowrap;\n  padding: 5px 2.5em;\n  height: 100%;\n  min-height: 32px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  box-shadow: 0 0 0 2px #010a13, inset 0 0 0 1px rgba(1,10,19,0.35);\n  background: linear-gradient(to bottom, #25221b 0%, #433b2b 100%);\n  border: 2px solid transparent;\n/* Border Element Idle - used for defaut border gradient on purchase button */\n/* Border Element Transition - used for transitional border gradient for different states */\n/* State classes defined below are done so via JS in index.js by the `setInteractionClass` function */\n/* Hover State - onmouseover */\n/* Down State - onmousedown  */\n/* Click State - on click */\n/* Disabled - on disabled="true" */\n}\n.lol-uikit-purchase-button * {\n  pointer-events: none;\n}\n.lol-uikit-purchase-button .lol-uikit-purchase-button-outer-border {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  bottom: -5px;\n  left: -5px;\n  border: thin solid transparent;\n  border-image: linear-gradient(to bottom, #413722 4%, #5b4a25 23%, #907d53 88%, #5f5031 100%);\n  border-image-slice: 1;\n}\n.lol-uikit-purchase-button .lol-uikit-purchase-button-content-icon {\n  display: none;\n  position: relative;\n  top: 3px;\n  margin-right: 2px;\n}\n.lol-uikit-purchase-button .lol-uikit-purchase-button-content-icon.rp {\n  background: url("/fe/lol-static-assets/images/icon-rp-gradient-32.png") center center no-repeat;\n  width: 18px;\n  height: 18px;\n  background-size: contain;\n}\n.lol-uikit-purchase-button .lol-uikit-purchase-button-content-value {\n  display: none;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.lol-uikit-purchase-button .lol-uikit-purchase-button-border-idle {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  border: 2px solid transparent;\n  border-image: linear-gradient(to top, #785b28 0%, #c89c3c 55%, #c8a355 71%, #c8aa6e 100%);\n  border-image-slice: 1;\n  transition: opacity 300ms linear;\n}\n.lol-uikit-purchase-button .lol-uikit-purchase-button-border-transition {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border: 2px solid transparent;\n}\n.lol-uikit-purchase-button.rp {\n  padding: 4px 2.5em;\n}\n.lol-uikit-purchase-button.rp .lol-uikit-purchase-button-content-icon.rp {\n  display: inline-block;\n}\n.lol-uikit-purchase-button.rp .lol-uikit-purchase-button-content-value.rp {\n  display: inline-block;\n}\n.lol-uikit-purchase-button.be .lol-uikit-purchase-button-content-icon.be {\n  display: inline-block;\n}\n.lol-uikit-purchase-button.be .lol-uikit-purchase-button-content-icon.be .be-icon {\n  width: 15px;\n  height: 15px;\n  background-image: url("/fe/lol-uikit/images/store-be.png");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.lol-uikit-purchase-button.be .lol-uikit-purchase-button-content-value.be {\n  display: inline-block;\n}\n.lol-uikit-purchase-button.hover {\n  color: #f0e6d2;\n  background: linear-gradient(to bottom, #29251d 0%, #655431 100%);\n}\n.lol-uikit-purchase-button.hover.disabled {\n  color: #5c5b57;\n  animation: none;\n}\n.lol-uikit-purchase-button.down {\n  color: #a09b8c;\n}\n.lol-uikit-purchase-button.down .lol-uikit-purchase-button-outer-border {\n  border-image: none;\n  border-color: #413722;\n}\n.lol-uikit-purchase-button.down .lol-uikit-purchase-button-border-idle {\n  border-image: none;\n  border-color: #6a502b;\n}\n.lol-uikit-purchase-button.disabled {\n  cursor: default;\n  color: #5b5a56;\n  background: #1e2328;\n  border: 2px solid #5b5a56;\n  border-image: initial;\n  transition: all 300ms linear;\n}\n.lol-uikit-purchase-button.disabled .lol-uikit-purchase-button-outer-border {\n  border-image: none;\n  border-color: #5c5b57;\n}\n.lol-uikit-purchase-button.disabled .lol-uikit-purchase-button-border-transition {\n  transition: opacity 300ms linear;\n  opacity: 0;\n}\n.lol-uikit-purchase-button.disabled .lol-uikit-purchase-button-border-idle {\n  opacity: 0;\n}\n.lol-uikit-purchase-button.no-min-height {\n  min-height: 0;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = Math.abs;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(5),
      r = i(n),
      l = o(326),
      s = i(l),
      d = o(18),
      p = i(d),
      c = o(25),
      u = i(c),
      g = o(127),
      m = i(g),
      h = o(0);
    const b = 'summoner',
      f = 'champion',
      y = 'type',
      v = 'percent',
      x = 'start-angle',
      k = 'end-angle',
      A = [b, f, 'blue', 'pink', 'white', 'custom'],
      w = { percent: 0, animateFillDuration: 1, animateStartDelay: 0 };
    class _ extends h.webComponents.ShadowElement {
      templateMarkup() {
        return o(330);
      }
      stylesheetMarkup() {
        return o(331);
      }
      constructor() {
        super(),
          (this._type = b),
          (this._percent = 0),
          (this._mutationObserver = new MutationObserver(() => {
            this._triggerMaskGeneration();
          })),
          this._startMutationObserver();
      }
      _startMutationObserver() {
        this._mutationObserver.observe(this, {
          attributes: !0,
          childList: !0,
          subtree: !0,
          attributeFilter: ['percent'],
        });
      }
      static get observedAttributes() {
        return [y, v, x, k];
      }
      attributeChangedCallback(e, t, o) {
        e === y
          ? this._setType(o)
          : e === v
          ? (this._percent = this._sanitizePercent(o))
          : e === x
          ? this._polygonGen.setStartAngle(o)
          : e === k
          ? this._polygonGen.setEndAngle(o)
          : void 0;
        this._triggerMaskGeneration();
      }
      render() {
        super.render(),
          (this._polygonGen = new m.default()),
          (this._percent = this._sanitizePercent(this.getAttribute(v))),
          this._setType(this.getAttribute(y)),
          this._polygonGen.setStartAngle(this.getAttribute(x)),
          this._polygonGen.setEndAngle(this.getAttribute(k)),
          this._triggerMaskGeneration();
      }
      animateFill(e) {
        const t = (0, u.default)(this.querySelectorAll('div.middle')),
          o = [];
        return (
          t.forEach((t, i) => {
            const a = (0, p.default)({}, w, e[i] || {});
            o.push(a);
          }),
          this._triggerMaskGeneration(o)
        );
      }
      _setType(e) {
        return e && -1 !== A.indexOf(e)
          ? void ((this._type = e), this._setDefaultAngles())
          : void (this._type = b);
      }
      _setDefaultAngles() {
        this._type === f &&
          (!this.getAttribute(x) && this._polygonGen.setStartAngle('80deg'),
          !this.getAttribute(k) && this._polygonGen.setEndAngle('-260deg'));
      }
      _sanitizePercent(e) {
        return e
          ? ((e = (0, s.default)(e)),
            isNaN(e) ? 0 : Math.min(Math.max(e, 0), 100))
          : 0;
      }
      _triggerMaskGeneration(e = []) {
        const t = this.shadowRoot.querySelector('.middle-layer'),
          o = (0, u.default)(this.querySelectorAll('div.middle'));
        if (1 < o.length) {
          let i = 0,
            a = this._polygonGen.startAngle;
          const n = (3 * Math.PI) / 2 - this._polygonGen.startAngle,
            l = this._polygonGen.endAngle - this._polygonGen.startAngle,
            s = new r.default((r) => {
              const s = new h.gsap.TimelineLite({ paused: !0, onComplete: r });
              o.forEach((t, o) => {
                const r = +t.getAttribute(v),
                  d = new m.default();
                (d.startAngle = a), (d.endAngle = a + l);
                const p = d.generatePolygon(r);
                if (
                  ((t.style.position = 'absolute'),
                  (t.style.webkitClipPath = p),
                  e[o] && 0 < r)
                ) {
                  const a = t.querySelector('.mask-container.left-half img'),
                    d = t.querySelector('.mask-container.right-half img'),
                    p = e[o].animateFillDuration,
                    c = e[o].animateStartDelay;
                  this._animateFillPercent(s, a, d, i, r, l, n, p, c);
                }
                (a = d.getAngleFromPercent({ percent: r })), (i += r);
              }),
                (t.style.webkitClipPath = ''),
                s.play();
            });
          return s;
        }
        return (
          (t.style.webkitClipPath = this._polygonGen.generatePolygon(
            this._percent,
          )),
          r.default.resolve()
        );
      }
      _animateFillPercent(e, t, o, i, n, r, l, s, d) {
        if (50 >= i + n) {
          const o = (i / 100) * a(r) + l,
            p = ((i + n) / 100) * a(r) + l;
          e.fromTo(
            t,
            s,
            { rotation: `${o}rad` },
            { rotation: `${p}rad`, ease: 'Linear.easeNone' },
            `+=${d}`,
          );
        } else if (50 <= i) {
          const t = ((i - 50) / 100) * a(r),
            l = ((i + n - 50) / 100) * a(r);
          e.fromTo(
            o,
            s,
            { rotation: `${t}rad` },
            { rotation: `${l}rad`, ease: 'Linear.easeNone' },
            `+=${d}`,
          );
        } else {
          const p = (i / 100) * a(r) + l;
          e.fromTo(
            t,
            (s * (50 - i)) / n,
            { rotation: `${p}rad` },
            { rotation: 180, ease: 'Linear.easeNone' },
            `+=${d}`,
          );
          const c = ((i + n - 50) / 100) * a(r);
          e.fromTo(
            o,
            (s * (i + n - 50)) / n,
            { rotation: 0 },
            { rotation: `${c}rad`, ease: 'Linear.easeNone' },
            '+=0',
          );
        }
      }
    }
    (_.tagName = 'lol-uikit-radial-progress'), (t.default = _);
  },
  function (e, t, o) {
    e.exports = { default: o(327), __esModule: !0 };
  },
  function (e, t, o) {
    o(328), (e.exports = o(2).Number.parseFloat);
  },
  function (e, t, o) {
    var i = o(3),
      a = o(329);
    i(i.S + i.F * (Number.parseFloat != a), 'Number', { parseFloat: a });
  },
  function (e, t, o) {
    var i = o(4).parseFloat,
      a = o(126).trim;
    e.exports =
      1 / i(o(86) + '-0') == -Infinity
        ? i
        : function (e) {
            var t = a(e + '', 3),
              o = i(t);
            return 0 === o && '-' == t.charAt(0) ? -0 : o;
          };
  },
  function (e) {
    e.exports =
      '<template>\r\n  <!--\r\n    All elements for the radial progress are positioned as absolute\r\n    simulating a z-index superposition\r\n  -->\r\n\r\n  <!-- Contains all assets for the empty meter -->\r\n  <div class="bottom-layer">\r\n    <slot name="bottom"></slot>\r\n  </div>\r\n\r\n  <!--\r\n    Contains all assets that depends on the percentage\r\n    This layer will be affected by a mask that depends on the current percent\r\n  -->\r\n  <div class="middle-layer masked-layer">\r\n    <slot name="middle"></slot>\r\n  </div>\r\n\r\n  <!-- Anything that needs to be at the top -->\r\n  <div class="top-layer">\r\n    <slot name="top"></slot>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  display: inline-block;\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  min-width: 10px;\n  min-height: 10px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.bottom-layer,\n.middle-layer,\n.top-layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.bottom-layer,\n.middle-layer {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.masked-layer {\n  webkit-clip-path: none;\n  clip-path: none;\n}\n:host([type="summoner"]) .bottom-layer {\n  background-image: url("/fe/lol-uikit/images/empty-meter-summoner.png");\n}\n:host([type="summoner"]) .middle-layer {\n  background-image: url("/fe/lol-uikit/images/full-meter-summoner.png");\n}\n:host([type="champion"]) .bottom-layer {\n  background-image: url("/fe/lol-uikit/images/empty-meter-champion.png");\n}\n:host([type="champion"]) .middle-layer {\n  background-image: url("/fe/lol-uikit/images/full-meter-champion.png");\n}\n:host([type="blue"]) .bottom-layer {\n  background-image: url("/fe/lol-uikit/images/empty-meter-blue.png");\n}\n:host([type="blue"]) .middle-layer {\n  background-image: url("/fe/lol-uikit/images/full-meter-blue.png");\n}\n:host([type="pink"]) .bottom-layer {\n  background-image: url("/fe/lol-uikit/images/empty-meter-pink.png");\n}\n:host([type="pink"]) .middle-layer {\n  background-image: url("/fe/lol-uikit/images/full-meter-pink.png");\n}\n:host([type="white"]) .bottom-layer {\n  background-image: url("/fe/lol-uikit/images/empty-meter-white.png");\n}\n:host([type="white"]) .middle-layer {\n  background-image: url("/fe/lol-uikit/images/full-meter-white.png");\n}\n:host([type="custom"]) .bottom-layer {\n  background-image: none;\n}\n:host([type="custom"]) .middle-layer {\n  background-image: none;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    class a extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(333);
      }
      stylesheetMarkup() {
        return o(334);
      }
      constructor() {
        super(), this.addEventListener('click', this._handleClick);
      }
      static get observedAttributes() {
        return ['selected'];
      }
      processAttributes() {
        this._selectedCheck();
      }
      isSelected() {
        return null !== this.getAttribute('selected');
      }
      _selectedCheck() {
        const e = (0, i.jQuery)(this.shadowRoot.querySelector('li'));
        this.isSelected()
          ? (e.addClass('ui-radio-input-option-selected'),
            e.removeClass('ui-radio-input-option-unselected'))
          : (e.removeClass('ui-radio-input-option-selected'),
            e.addClass('ui-radio-input-option-unselected'));
      }
      _handleClick() {
        const e = (0, i.jQuery)(this).closest('lol-uikit-radio-input')[0];
        e.selectOption(this);
      }
    }
    (a.tagName = 'lol-uikit-radio-input-option'), (t.default = a);
  },
  function (e) {
    e.exports =
      '<template>\r\n    <li class="ui-radio-input-option"><slot></slot></li>\r\n</template>\r\n';
  },
  function (e, t, o) {
    var i = o(32);
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ":host {\n  --radio-input-option-hover-background-color: transparent;\n  --radio-input-option-padding: 0;\n}\n:host li.ui-radio-input-option {\n  padding: var(--radio-input-option-padding);\n  margin: 0;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  position: relative;\n  cursor: pointer;\n  color: #cdbe91;\n}\n:host li.ui-radio-input-option::before {\n  content: '';\n  width: 18px;\n  height: 18px;\n  margin-right: 7px;\n  background: url(" +
          i(o(335)) +
          ') center no-repeat;\n  background-position: 0px 0px;\n  background-size: 100%;\n}\n:host li.ui-radio-input-option:lang(ar-ae)::before {\n  margin: 0 0 0 7px;\n}\n:host li.ui-radio-input-option:hover {\n  color: #f0e6d2;\n  background-color: var(--radio-input-option-hover-background-color);\n}\n:host li.ui-radio-input-option.disabled {\n  color: #5c5b57;\n  cursor: default;\n}\n:host li.ui-radio-input-option:hover::before {\n  background-position: 0 -18px;\n}\n:host li.ui-radio-input-option:active::before {\n  background-position: 0 -36px;\n}\n:host li.ui-radio-input-option.disabled::before {\n  background-position: 0 -54px;\n}\n:host li.ui-radio-input-option.ui-radio-input-option-selected {\n  color: #f0e6d2;\n}\n:host li.ui-radio-input-option.ui-radio-input-option-selected::before {\n  background-position: 0 -72px;\n}\n:host li.ui-radio-input-option.ui-radio-input-option-selected:hover::before {\n  background-position: 0 -90px;\n}\n:host li.ui-radio-input-option.ui-radio-input-option-selected:active::before {\n  background-position: 0 -108px;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    e.exports = o.p + 'btn_icon.png';
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0),
      a = o(7),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a);
    class r extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(337);
      }
      stylesheetMarkup() {
        return o(338);
      }
      constructor() {
        super(),
          (this.optionNodes = []),
          (this.selected = !1),
          this._findSelected(),
          this._attachEvents();
      }
      selectOption(e) {
        if (e !== this.selected) {
          this.selected && this.selected.removeAttribute('selected'),
            e.setAttribute('selected', !0),
            (this.selected = e);
          const t = new Event('selected', { bubbles: !0 });
          (t.selected = this.selected),
            this.dispatchEvent(t),
            this._playClickSound();
        }
      }
      _findSelected() {
        const e = this.querySelector('lol-uikit-radio-input-option[selected]');
        e && (this.selected = e);
      }
      _attachEvents() {
        const e = new MutationObserver(this._handleDOMChange.bind(this));
        e.observe(this, { childList: !0 });
      }
      _handleDOMChange() {
        this._findSelected();
      }
      _playClickSound() {
        (0, i.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .playSound(n.default.radioInputClick);
      }
    }
    (r.tagName = 'lol-uikit-radio-input'), (t.default = r);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="ui-radio-input">\r\n    <ul class="ui-radio-input-options">\r\n      <slot></slot>\r\n    </ul>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host .ui-radio-input {\n  font-family: var(--font-body);\n}\n:host .ui-radio-input {\n  -webkit-user-select: none;\n}\n:host .ui-radio-input {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n:host .ui-radio-input {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.1em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n:host .ui-radio-input:lang(ja-jp) {\n  font-size: 13px;\n}\n:host .ui-radio-input:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n}\n:host .ui-radio-input {\n  display: inline-flex;\n  flex-direction: column;\n  position: relative;\n  user-select: none;\n  margin: 0;\n  cursor: pointer;\n  width: 100%;\n}\n:host .ui-radio-input ul.ui-radio-input-options {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 100%;\n  display: var(--display, inherit);\n  flex-direction: var(--flex-direction, inherit);\n  justify-content: var(--justify-content, inherit);\n  align-items: var(--justify-content, inherit);\n  flex-wrap: var(--flex-wrap, inherit);\n  text-transform: var(--text-transform);\n}\n:host(:lang(ar-ae)) {\n  direction: rtl;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(340),
      n = i(a),
      r = o(0),
      l = o(128),
      s = i(l);
    const d = 'data-max-width';
    class p extends r.webComponents.ShadowElement {
      static get observedAttributes() {
        return [d];
      }
      templateMarkup() {
        return o(344);
      }
      connectedCallback() {
        super.connectedCallback(),
          (this._maxWidth = (0, n.default)(this.getAttribute(d), 10)),
          (this._computedStyle = window.getComputedStyle(this, null)),
          (this._preferredFontSize = (0, n.default)(
            this._computedStyle.getPropertyValue('font-size'),
          )),
          (this._currentFontSize = this._preferredFontSize),
          (this._fontFamily =
            this._computedStyle.getPropertyValue('font-family')),
          (this._canvasContext = (0, s.default)()),
          (this._textContentObserver = new MutationObserver(() => {
            this.updateTextSize();
          })),
          this._textContentObserver.observe(this, {
            subtree: !0,
            childList: !0,
            characterData: !0,
          }),
          (this._maxWidthObserver = new MutationObserver(() => {
            this.onMaxWidthChanged();
          })),
          this._maxWidthObserver.observe(this, {
            attributeFilter: ['data-max-width'],
          }),
          this.updateTextSize();
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this._textContentObserver.disconnect(),
          this._maxWidthObserver.disconnect();
      }
      onMaxWidthChanged() {
        (this._maxWidth = (0, n.default)(this.getAttribute(d), 10)),
          (this.style.width = this._maxWidth + 'px'),
          this.updateTextSize();
      }
      updateTextSize() {
        const e =
            this.measureWidth(
              this._currentFontSize,
              this._fontFamily,
              this.textContent,
            ) > this._maxWidth,
          t = e || this._currentFontSize < this._preferredFontSize;
        t && this.resizeText();
      }
      measureWidth(e, t, o) {
        return (
          (this._canvasContext.font = `${e}px ${t}`),
          this._canvasContext.measureText(o).width
        );
      }
      calculateTextSizeThatFitsWidth(e, t, o, i) {
        let a = 10,
          n = e;
        for (; a < n; ) {
          const e = Math.ceil(0.5 * (a + n));
          o >= this.measureWidth(e, t, i) ? (a = e) : (n = e - 1);
        }
        return n;
      }
      resizeText() {
        (this._currentFontSize = this.calculateTextSizeThatFitsWidth(
          this._preferredFontSize,
          this._fontFamily,
          this._maxWidth,
          this.textContent,
        )),
          (this.style.fontSize = `${this._currentFontSize}px`);
      }
    }
    (p.tagName = 'lol-uikit-resizing-text-field'), (t.default = p);
  },
  function (e, t, o) {
    e.exports = { default: o(341), __esModule: !0 };
  },
  function (e, t, o) {
    o(342), (e.exports = o(2).Number.parseInt);
  },
  function (e, t, o) {
    var i = o(3),
      a = o(343);
    i(i.S + i.F * (Number.parseInt != a), 'Number', { parseInt: a });
  },
  function (e, t, o) {
    var i = o(4).parseInt,
      a = o(126).trim,
      n = o(86),
      r = /^[-+]?0[xX]/;
    e.exports =
      8 !== i(n + '08') || 22 !== i(n + '0x16')
        ? function (e, t) {
            var o = a(e + '', 3);
            return i(o, t >>> 0 || (r.test(o) ? 16 : 10));
          }
        : i;
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    var i = Math.abs;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(0),
      n = o(31);
    class r extends a.webComponents.ShadowElement {
      templateMarkup() {
        return o(346);
      }
      stylesheetMarkup() {
        return o(347);
      }
      constructor() {
        super(), (this.sideScrollWheel = this.sideScrollWheel.bind(this));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.addEventListener('scroll', this.updateScrollableAttributes);
        const e = (0, n.isAttrTruthy)(
          'side-scroll-wheel',
          this.getAttribute('side-scroll-wheel'),
        );
        e && this.addEventListener('wheel', this.sideScrollWheel);
      }
      static get observedAttributes() {
        return [
          'scrolled-bottom',
          'scrolled-top',
          'direction',
          'overflow-masks',
          'side-scroll-wheel',
        ];
      }
      attributeChangedCallback() {
        super.attributeChangedCallback(),
          this.getAttribute('scrolled-bottom') ||
            this.getAttribute('scrolled-top') ||
            (this.setAttribute('scrolled-bottom', !1),
            this.setAttribute('scrolled-top', !0));
      }
      updateScrollableAttributes() {
        const e = this.getAttribute('direction'),
          t = 'true' === this.getAttribute('scrolled-top'),
          o = 'true' === this.getAttribute('scrolled-bottom'),
          i = this.scrollTop,
          a = this.scrollLeft;
        let n = 0 === i,
          r = i + this.offsetHeight >= this.scrollHeight;
        'horizontal' === e &&
          ((n = 0 === a), (r = a + this.offsetWidth >= this.scrollWidth)),
          (t != n || o != r) &&
            (this.setAttribute('scrolled-top', n),
            this.setAttribute('scrolled-bottom', r),
            this.dispatchEvent(
              new CustomEvent('scroll-change', {
                detail: { scrolledTop: n, scrolledBottom: r },
              }),
            ));
      }
      sideScrollWheel(e) {
        const t = e.deltaX,
          o = e.deltaY,
          a = 0 <= i(o) && i(t) >= i(o);
        a || (this.scrollLeft += o);
      }
    }
    (r.tagName = 'lol-uikit-scrollable'), (t.default = r);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host::-webkit-scrollbar,\n:host ::-webkit-scrollbar {\n  width: 11px;\n  height: 11px;\n  background-color: transparent;\n}\n:host::-webkit-scrollbar-thumb,\n:host ::-webkit-scrollbar-thumb {\n  border: 3px solid transparent;\n  border-radius: 6px;\n  background-clip: padding-box;\n  min-height: 32px;\n  background-color: #785a28;\n}\n:host::-webkit-scrollbar-thumb:hover,\n:host ::-webkit-scrollbar-thumb:hover {\n  background-color: #c8aa6e;\n}\n:host::-webkit-scrollbar-thumb:active,\n:host ::-webkit-scrollbar-thumb:active {\n  background-color: #463714;\n}\n:host::-webkit-scrollbar-thumb:disabled,\n:host ::-webkit-scrollbar-thumb:disabled {\n  background-color: #a09b8c;\n}\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  transform: translateZ(0);\n}\n:host(:not([direction="horizontal"])[overflow-masks="enabled"][scrolled-top="false"][scrolled-bottom="true"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-top.png");\n  -webkit-mask-box-image-slice: 18 8 0 0 fill;\n}\n:host(:not([direction="horizontal"])[overflow-masks="enabled"][scrolled-top="true"][scrolled-bottom="false"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-bottom.png");\n  -webkit-mask-box-image-slice: 0 8 18 0 fill;\n}\n:host(:not([direction="horizontal"])[overflow-masks="enabled"][scrolled-top="false"][scrolled-bottom="false"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-both.png");\n  -webkit-mask-box-image-slice: 18 8 18 0 fill;\n}\n:host(:not([direction="horizontal"])[overflow-masks="bottom"][scrolled-top="true"][scrolled-bottom="false"],\n:not([direction="horizontal"])[overflow-masks="bottom"][scrolled-top="false"][scrolled-bottom="false"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-bottom.png");\n  -webkit-mask-box-image-slice: 0 8 18 0 fill;\n}\n:host(:lang(ar-ae)) {\n  direction: rtl;\n}\n:host([direction="horizontal"]) {\n  display: flex;\n}\n:host([direction="horizontal"][overflow-masks="enabled"][scrolled-top="false"][scrolled-bottom="true"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-left.png");\n/* top | right | bottom | left */\n  -webkit-mask-box-image-slice: 0 0 8 115 fill;\n}\n:host([direction="horizontal"][overflow-masks="enabled"][scrolled-top="true"][scrolled-bottom="false"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-right.png");\n  -webkit-mask-box-image-slice: 0 115 8 0 fill;\n}\n:host([direction="horizontal"][overflow-masks="enabled"][scrolled-top="false"][scrolled-bottom="false"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-both-horizontal.png");\n  -webkit-mask-box-image-slice: 0 115 8 115 fill;\n}\n:host([direction="horizontal"][overflow-masks="bottom"][scrolled-top="true"][scrolled-bottom="false"],\n[direction="horizontal"][overflow-masks="bottom"][scrolled-top="false"][scrolled-bottom="false"]) {\n  -webkit-mask-box-image-source: url("/fe/lol-static-assets/images/uikit/scrollable/scrollable-content-gradient-mask-right.png");\n  -webkit-mask-box-image-slice: 0 115 8 0 fill;\n}\n:host([show-on-hover="true"]) {\n  overflow: hidden;\n  padding-bottom: 11px;\n}\n:host([show-on-hover="true"]:hover) {\n  overflow: auto;\n  padding-bottom: 0;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.ANIMATION_EVENTS =
        t.ANIMATION_EVENT_FLOW =
        t.ANIMATION_KEYFRAME_MAPPING =
        t.ANIMATION_HIDE =
        t.ANIMATION_SHOW =
          void 0);
    var a = o(25),
      n = i(a),
      r = o(5),
      l = i(r),
      s = o(0);
    const d = (t.ANIMATION_SHOW = 'show'),
      p = (t.ANIMATION_HIDE = 'hide'),
      c = { opacity: 0, visbility: 'hidden' },
      u = { opacity: 0, visbility: 'visible' },
      g = { opacity: 0.75, visbility: 'visible' },
      m = { opacity: 1, visbility: 'visible' },
      h = (t.ANIMATION_KEYFRAME_MAPPING = {
        fade: {
          show: { duration: 500, frames: [c, u, m] },
          hide: { duration: 500, frames: [m, u, c] },
        },
        crossfade: {
          show: {
            duration: 500,
            frames: [c, g, m],
            easing: 'cubic-bezier(0, 0, 0, 1)',
          },
          hide: {
            duration: 500,
            frames: [m, g, c],
            easing: 'cubic-bezier(0, 0, 0, 1)',
          },
        },
      }),
      b = (t.ANIMATION_EVENT_FLOW = {
        show: { start: 'elementWillShow', end: 'elementShow' },
        hide: { start: 'elementWillHide', end: 'elementHide' },
      }),
      f = (t.ANIMATION_EVENTS = [
        'elementWillShow',
        'elementShow',
        'elementWillHide',
        'elementHide',
      ]),
      y = ['fade', 'crossfade', 'none'],
      v = 'fade',
      x = { bubbles: !0, cancelable: !0 };
    class k extends s.webComponents.ShadowElement {
      static get observedAttributes() {
        return ['animation', 'selected-item'];
      }
      templateMarkup() {
        return o(349);
      }
      constructor() {
        super(),
          this.preventEventPropagation(),
          (this.selectedAnimation = v),
          (this.selectedItem = null),
          (this.selectedItemId = null),
          (this.inProgressAnimation = l.default.resolve()),
          (this.mutationObserver = new MutationObserver(
            this.handleMutation.bind(this),
          ));
      }
      preventEventPropagation() {
        f.forEach((e) => {
          this.addEventListener(e, (e) => e.stopPropagation());
        });
      }
      handleMutation(e) {
        if (this.selectedItem) return;
        const t = this.getAttribute('selected-item');
        let o = null;
        e.some((e) =>
          (0, n.default)(e.addedNodes).some((e) => {
            if (
              'LOL-UIKIT-SECTION' === e.tagName &&
              e.getAttribute('section-id') === t
            )
              return (o = e), !0;
          }),
        ),
          o && this.setSectionActive(o);
      }
      setSectionActive(e) {
        (this.selectedItem = e),
          (this.selectedItemId = e.getAttribute('section-id')),
          this.selectedItem.classList.add('visible');
      }
      connectedCallback() {
        super.connectedCallback(),
          this._hideAllSections(),
          this.mutationObserver.observe(this, { childList: !0 }),
          (this.selectedAnimation = this.getAttribute('animation') || v),
          (this.inProgressAnimation = l.default.resolve());
        const e = this._getSectionElementById(
          this.getAttribute('selected-item'),
        );
        null !== e && this.setSectionActive(e);
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this._hideAllSections(),
          (this.selectedItem = null),
          (this.selectedItemId = null),
          (this.selectedAnimation = v),
          (this.inProgressAnimation = l.default.resolve()),
          this.mutationObserver.disconnect();
      }
      attributeChangedCallback(e, t, o) {
        if ('animation' === e) {
          if (0 > y.indexOf(o))
            return void this.setAttribute('animation', this.selectedAnimation);
          this.selectedAnimation = o;
        } else 'selected-item' === e && this._transitionSection(o);
      }
      _getSectionElementById(e) {
        return this.querySelector(`lol-uikit-section[section-id=${e}]`);
      }
      _transitionSection(e) {
        const t = this._getSectionElementById(e);
        if (t) {
          const o = this.selectedItem;
          t !== o &&
            this._animationFlow(o, p).then(
              () => (
                (this.selectedItem = t),
                (this.selectedItemId = e),
                this._animationFlow(t, d),
                null
              ),
            );
        }
      }
      _animationFlow(e, t) {
        if (!e) return l.default.resolve();
        e.dispatchEvent(new Event(b[t].start, x));
        let o;
        return (
          (o =
            'none' === this.selectedAnimation
              ? this._runAnimationNone(e, t)
              : 'crossfade' === this.selectedAnimation
              ? this._runAnimationCrossfade(e, t)
              : this._runAnimationFade(e, t)),
          (this.inProgressAnimation = o),
          o.then(() => (e.dispatchEvent(new Event(b[t].end, x)), null)),
          o
        );
      }
      _runAnimationNone(e, t) {
        return this._updateVisibility(e, t), l.default.resolve();
      }
      _runAnimationFade(e, t) {
        const o = h[this.selectedAnimation][t];
        return new l.default((i) => {
          const a = e.animate(o.frames, o.duration);
          a.onfinish = () => {
            this._updateVisibility(e, t), i();
          };
        });
      }
      _runAnimationCrossfade(e, t) {
        const o = h[this.selectedAnimation][t];
        return new l.default((i) => {
          e.animate(o.frames, o.duration);
          this._updateVisibility(e, t), i();
        });
      }
      _updateVisibility(e, t) {
        this._hideAllSections(), t === d && e.classList.add('visible');
      }
      _hideAllSections() {
        (0, n.default)(
          this.querySelectorAll(':scope > lol-uikit-section'),
        ).forEach((e) => e.classList.remove('visible'));
      }
    }
    (k.tagName = 'lol-uikit-section-controller'), (t.default = k);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = Math.round;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(351),
      r = i(n),
      l = o(13),
      s = i(l),
      d = o(87),
      p = i(d),
      c = o(0);
    const u = 'horizontal',
      g = {
        mouseOffsetAttribute: 'clientX',
        baseElementMoveRangeAttribute: 'width',
        baseElementOffsetAttribute: 'left',
        buttonBlockAttribute: 'width',
        buttonOffsetAttribute: 'left',
        fillOffsetAttribute: 'width',
        calcOffset(e, t) {
          return e - t;
        },
      },
      m = {
        mouseOffsetAttribute: 'clientY',
        baseElementMoveRangeAttribute: 'height',
        baseElementOffsetAttribute: 'bottom',
        buttonBlockAttribute: 'height',
        buttonOffsetAttribute: 'bottom',
        fillOffsetAttribute: 'height',
        calcOffset(e, t) {
          return t - e;
        },
      },
      h = new s.default();
    h.set(u, g), h.set('vertical', m);
    const b = 0,
      f = 100,
      y = 1,
      v = y,
      x = 'disabled',
      k = 'value';
    class A extends c.webComponents.ShadowElement {
      templateMarkup() {
        return o(357);
      }
      stylesheetMarkup() {
        return o(358);
      }
      constructor() {
        super(),
          (this._wrapperElement = this.shadowRoot.querySelector(
            'div.lol-uikit-slider-wrapper',
          )),
          (this._baseElement = this.shadowRoot.querySelector(
            'div.lol-uikit-slider-base',
          )),
          (this._buttonElement = this.shadowRoot.querySelector(
            'div.lol-uikit-slider-button',
          )),
          (this._fillElement = this.shadowRoot.querySelector(
            'div.lol-uikit-slider-fill',
          )),
          (this._mouseMoveHandler = this._mouseMoveHandler.bind(this)),
          (this._mouseUpHandler = this._mouseUpHandler.bind(this));
      }
      connectedCallback() {
        super.connectedCallback(),
          this._initProperties(),
          this._cleanAttributeObservers(),
          this._addAttributeObservers(),
          this._bindEventListeners(),
          this._moveSliderTo(this._getSliderButtonOffset(this.value));
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this._cleanAttributeObservers(),
          this._unbindEventListeners();
      }
      setTooltipContentDelegate(e) {
        if (null === e) this._tooltipContentDelegate = null;
        else if (c.Lodash.isFunction(e)) this._tooltipContentDelegate = e;
        else
          throw new Error(
            `Tooltip content delegate must be a function or null.`,
          );
      }
      _initProperties() {
        if (
          (this._normalizeOrientation(),
          (this.isPercentage = this._getBooleanAttribute('percentage')),
          this.isPercentage)
        )
          (this._min = b), (this._max = f), (this._step = y);
        else {
          if (
            ((this._min = this._getIntegerAttribute('min', b)),
            (this._max = this._getIntegerAttribute('max', f)),
            this._max <= this._min)
          )
            throw new Error(
              `Slider's max value (${this._max}) must be greater than min value (${this._min}).`,
            );
          (this._step = this._getIntegerAttribute('step', v)),
            0 >= this._step && (this._step = v);
        }
        this._initStepAttributes(),
          (this.value = this._getIntegerAttribute(k, this._min)),
          (this.disabled = this._getBooleanAttribute(x)),
          this.disabled && this._wrapperElement.classList.add('disabled'),
          this._initTooltipAttributes();
      }
      _initStepAttributes() {
        (this._halfBtnBlock =
          A.getComputedStyleAttribute(
            this._buttonElement,
            this._options.buttonBlockAttribute,
          ) / 2),
          (this._sliderValueRange = this._max - this._min),
          (this._stepCount = this._sliderValueRange / this._step),
          (this._maxOffset = this._getMaxOffset()),
          (this._stepOffset = this._maxOffset / this._stepCount);
      }
      _initTooltipAttributes() {
        (this._showTooltip = this._getBooleanAttribute('showTooltip', !0)),
          this._showTooltip && !this.disabled && this._assignTooltip(),
          (this._tooltipUnit = this.getAttribute('unit'));
      }
      _assignTooltip() {
        !this.disabled &&
          this._showTooltip &&
          p.default.assign(
            this._buttonElement,
            this._tooltipElement(),
            {},
            {
              targetAnchor: { x: 'center', y: 'top' },
              tooltipAnchor: { x: 'center', y: 'bottom' },
            },
          );
      }
      _tooltipElement() {
        return (
          this._tooltip ||
            (this._tooltip =
              this.shadowRoot.querySelector('lol-uikit-tooltip')),
          this._updateTooltipContent(),
          this._tooltip
        );
      }
      _addAttributeObservers() {
        this._observeAttribute(x, this._disabledAttributeObserver.bind(this)),
          this._observeAttribute(k, this._valueAttributeObserver.bind(this));
      }
      _observeAttribute(e, t) {
        const o = new MutationObserver(t);
        o.observe(this, { attributes: !0, attributeFilter: [e] }),
          this.attributeObservers.push(o);
      }
      _getMaxOffset() {
        const e = parseFloat(
            this._baseElement.getBoundingClientRect()[
              this._options.baseElementMoveRangeAttribute
            ],
          ),
          t = A.getComputedStyleAttribute(
            this._buttonElement,
            this._options.buttonBlockAttribute,
          );
        return e - t;
      }
      _disabledAttributeObserver() {
        (this.disabled = this._getBooleanAttribute(x)),
          this.disabled
            ? (this._wrapperElement.classList.add('disabled'),
              this._showTooltip && p.default.unassign(this._buttonElement))
            : (this._wrapperElement.classList.remove('disabled'),
              this._showTooltip && this._assignTooltip());
      }
      _valueAttributeObserver() {
        const e = this._getIntegerAttribute(k, this.value);
        this.value !== e &&
          ((this.value = e),
          this._moveSliderTo(this._getSliderButtonOffset(e)),
          this._updateTooltipContent());
      }
      _normalizeOrientation() {
        let e = this.getAttribute('orientation');
        (e = e && h.has(e.toLowerCase()) ? e.toLowerCase() : u),
          (this._options = h.get(e)),
          this._wrapperElement.classList.add(e);
      }
      _bindEventListeners() {
        (this._clickBaseElementListener = this._onClickBaseElement.bind(this)),
          this._baseElement.addEventListener(
            'click',
            this._clickBaseElementListener,
          ),
          this._buttonElement.addEventListener(
            'mousedown',
            function () {
              this.disabled ||
                (document.addEventListener('mousemove', this._mouseMoveHandler),
                document.addEventListener('mouseup', this._mouseUpHandler),
                this._dispatchSlideStartEvent());
            }.bind(this),
          );
      }
      _onClickBaseElement(t) {
        this._getBooleanAttribute('clickSet') &&
          this._updateSliderOnEvent(t) &&
          this._dispatchSlideChangeEvent();
      }
      _unbindEventListeners() {
        this._baseElement.removeEventListener(
          'click',
          this._mouseUpBaseElementListener,
        );
      }
      _mouseMoveHandler(e) {
        e.preventDefault(),
          this._updateSliderOnEvent(e) && this._dispatchSlideChangeEvent();
      }
      _updateSliderOnEvent(e) {
        const t = this._getOffset(e),
          o = this._getSliderValue(t),
          i = this.isPercentage ? t : this._getSliderButtonOffset(o);
        return (
          this._moveSliderTo(i), this.value !== o && ((this.value = o), !0)
        );
      }
      _moveSliderTo(e) {
        (this._buttonElement.style[this._options.buttonOffsetAttribute] =
          e + 'px'),
          (this._fillElement.style[this._options.fillOffsetAttribute] =
            e + 'px');
      }
      _getOffset(e) {
        let t =
          this._options.calcOffset(
            e[this._options.mouseOffsetAttribute],
            this._baseElement.getBoundingClientRect()[
              this._options.baseElementOffsetAttribute
            ],
          ) - this._halfBtnBlock;
        return (
          0 > t ? (t = 0) : t > this._maxOffset && (t = this._maxOffset), t
        );
      }
      _getSliderValue(e) {
        let t = 0;
        return (
          (t = this.isPercentage
            ? 0 === this._maxOffset
              ? 0
              : a((100 * e) / this._maxOffset)
            : 0 === this._stepOffset
            ? 0
            : a(e / this._stepOffset)),
          0 > t ? (t = 0) : t > this._stepCount && (t = this._stepCount),
          t * this._step + this._min
        );
      }
      _getSliderButtonOffset(e) {
        return this._stepOffset * ((e - this._min) / this._step);
      }
      _mouseUpHandler(e) {
        e.preventDefault(),
          document.removeEventListener('mousemove', this._mouseMoveHandler),
          document.removeEventListener('mouseup', this._mouseUpHandler),
          this._updateSliderOnEvent(e),
          this._dispatchSlideEndEvent();
      }
      _updateTooltipContent() {
        if (!this.disabled && this._showTooltip && this._tooltip) {
          let e = this._tooltipContentDelegate
            ? this._tooltipContentDelegate(this.value)
            : this._tooltipUnit
            ? `${this.value}${this._tooltipUnit}`
            : this.isPercentage
            ? `${this.value}%`
            : this.value;
          const t = this._tooltip.querySelector('p');
          t && (t.textContent = e);
        }
      }
      _cleanAttributeObservers() {
        this.attributeObservers &&
          this.attributeObservers.forEach((e) => e.disconnect()),
          (this.attributeObservers = []);
      }
      _dispatchSlideChangeEvent() {
        this._dispatchEventWithCurrentValue('change'),
          this._updateTooltipContent();
      }
      _dispatchSlideStartEvent() {
        this._dispatchEventWithCurrentValue('slideStart');
      }
      _dispatchSlideEndEvent() {
        this._dispatchEventWithCurrentValue('slideEnd');
      }
      _dispatchEventWithCurrentValue(e) {
        const t = new Event(e, { bubbles: !0 });
        (t.value = this.value), this.dispatchEvent(t);
      }
      _getBooleanAttribute(e, t = !1) {
        if (this.hasAttribute(e)) {
          const t = this.getAttribute(e).trim().toLowerCase();
          return '' === t || 'true' === t || t === e.toLowerCase();
        }
        return t;
      }
      _getIntegerAttribute(e, t) {
        const o = parseInt(this.getAttribute(e));
        return (0, r.default)(o) ? o : t;
      }
      static getComputedStyleAttribute(e, t) {
        return parseFloat(window.getComputedStyle(e)[t]);
      }
    }
    (A.tagName = 'lol-uikit-slider'), (t.default = A);
  },
  function (e, t, o) {
    e.exports = { default: o(352), __esModule: !0 };
  },
  function (e, t, o) {
    o(353), (e.exports = o(2).Number.isFinite);
  },
  function (e, t, o) {
    var i = o(3),
      a = o(4).isFinite;
    i(i.S, 'Number', {
      isFinite: function (e) {
        return 'number' == typeof e && a(e);
      },
    });
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e, t, o) {
      const i = new Event('positioned');
      return (i.offset = e), (i.targetRect = t), (i.tooltipRect = o), i;
    }
    function n(e) {
      if (A[e]) return A[e];
      if ('number' != typeof e) throw new Error(`Delay '${e}' is not a number`);
      else return e;
    }
    var r = Math.floor,
      l = o(13),
      s = i(l),
      d = o(59),
      p = i(d),
      c = o(16),
      u = i(c),
      g = o(0),
      m = o(49),
      h = i(m),
      b = o(89),
      f = i(b),
      y = o(27),
      v = i(y);
    const x = (0, v.default)('lol-uikit:error');
    x.log = v.default.consoleWrap('error');
    const k = 'linear',
      A = { short: 250, system: 450, long: 650 },
      w = {
        showEvent: 'mouseenter',
        hideEvent: 'mouseleave',
        targetAnchor: { x: 'right', y: 'center' },
        tooltipAnchor: null,
        showDelay: 'short',
        offset: { x: 0, y: 0 },
        positioningStrategy: 'flip',
        restrictArea: 'safe-window',
        transitionSpeed: 150,
      },
      _ = { showDelay: 'system' },
      E = { showEvent: 'mousedown', hideEvent: 'mousedown' },
      C = function () {
        (this.rootId = 'lol-uikit-tooltip-root'),
          (this.layer = this.createLayer()),
          (this.targets = new p.default()),
          (this.mutationObserver = new MutationObserver(
            this.handleMutation.bind(this),
          )),
          (this.lastPositioned = !1),
          (this.pendingTooltips = new s.default()),
          (this.tooltipVisible = !1),
          (this.lastTarget = null),
          (this.recentlyShowedTooltip = !1),
          u.default.addListener('change', this.handleLayerChange.bind(this));
      };
    (C.prototype.handleLayerChange = function (e) {
      const t = e.detail && e.detail.domNode;
      if (!(t && t.id === this.rootId)) {
        const e = this.lastTarget;
        this.tooltipVisible && e
          ? this.isOverlapping(t, e) && this.hideTooltip(e)
          : this.pendingTooltips.forEach((e, t) => {
              this.hideTooltip(t);
            });
      }
    }),
      (C.prototype.isOverlapping = function (e, t) {
        function o(e) {
          return e && 'function' == typeof e.getBoundingClientRect;
        }
        if (!o(e) || !o(t)) return !1;
        const i = e.getBoundingClientRect(),
          a = t.getBoundingClientRect();
        return !(
          i.right < a.left ||
          i.left > a.right ||
          i.bottom < a.top ||
          i.top > a.bottom
        );
      }),
      (C.prototype.createLayer = function () {
        const e = document.createElement('div');
        return e.classList.add('tooltip'), (e.id = this.rootId), e;
      }),
      (C.prototype.showLayer = function () {
        u.default.addLayer(this.layer);
      }),
      (C.prototype.hideLayer = function () {
        this.pendingTooltips.forEach((e, t) => {
          this.hideTooltip(t);
        });
        const e = this.lastTarget;
        this.hideTooltip(e), u.default.removeLayer(this.layer);
      }),
      (C.prototype.defaults = function (e) {
        return (
          'system' === e.type
            ? (e = g.Lodash.defaults(e, _))
            : 'attention' === e.type && (e = g.Lodash.defaults(e, E)),
          g.Lodash.defaults(e, w)
        );
      }),
      (C.prototype.registerTarget = function (e, t, o, i) {
        if (!e)
          return void x(
            'Attempted to register tooltip with invalid target:',
            e,
          );
        const a = this.defaults(i),
          n = {
            show: this.showTooltip.bind(this, e),
            hide: this.hideTooltip.bind(this, e),
            toggle: this.toggleTooltip.bind(this, e),
          };
        if (g.Lodash.isFunction(t)) {
          const o = t;
          t = function (t) {
            const a = o(e, t);
            return (
              i.type && a.setAttribute('type', i.type),
              i.caretPosition &&
                a.setAttribute('caret-position', i.caretPosition),
              i.tooltipPosition &&
                a.setAttribute('tooltip-position', i.tooltipPosition),
              a
            );
          };
        } else
          t instanceof HTMLElement &&
            (t.parentNode && t.parentNode.removeChild(t),
            i.type && t.setAttribute('type', i.type),
            i.caretPosition &&
              t.setAttribute('caret-position', i.caretPosition),
            i.tooltipPosition &&
              t.setAttribute('tooltip-position', i.tooltipPosition));
        this.targets.set(e, {
          renderer: t,
          data: o,
          options: a,
          eventHandlers: n,
          tooltipVisible: !1,
          tooltipEnabled: !0,
        }),
          (0, g.jQuery)(e).each(function () {
            a.showEvent === a.hideEvent
              ? this.addEventListener(a.showEvent, n.toggle)
              : (this.addEventListener(a.showEvent, n.show),
                this.addEventListener(a.hideEvent, n.hide));
          }),
          'attention' === i.type && n.show();
      }),
      (C.prototype.unregisterTarget = function (e) {
        const t = this.targets.get(e);
        t &&
          t.eventHandlers &&
          (t.eventHandlers.hide(),
          (0, g.jQuery)(e).each(function () {
            this.removeEventListener(t.options.showEvent, t.eventHandlers.show),
              this.removeEventListener(
                t.options.hideEvent,
                t.eventHandlers.hide,
              ),
              this.removeEventListener(
                t.options.showEvent,
                t.eventHandlers.toggle,
              ),
              this.removeEventListener(
                t.options.hideEvent,
                t.eventHandlers.toggle,
              );
          }),
          this.targets.delete(e));
      }),
      (C.prototype.positionElement = function (e, t) {
        (e.style.top = r(t.top) + 'px'), (e.style.left = r(t.left) + 'px');
      }),
      (C.prototype.positionTooltip = function (e, t) {
        const o = this.targets.get(e);
        if (!o || !o.hasOwnProperty('options'))
          return void x(
            'Attempted to position tooltip with invalid target:',
            o,
          );
        const i = o.options,
          n = h.default.getPositioningStrategy(i.positioningStrategy),
          r = {
            element: t,
            target: e,
            targetAnchor: i.targetAnchor,
            elementAnchor: i.tooltipAnchor,
            offset: i.offset,
            areaRestriction: i.restrictArea,
          },
          l = t;
        let s = n(r);
        if (!s) return;
        this.positionElement(l, s);
        let d = t.querySelector('lol-uikit-tooltip');
        if (
          (d ||
            (d = t.classList.contains('lol-uikit-tooltip-target')
              ? t
              : t.querySelector('.lol-uikit-tooltip-target')),
          (t = d || t.firstChild),
          !!t)
        ) {
          const o = h.default.elementRect(t),
            i = h.default.elementRect(e),
            d = h.default.relativePosition(e, this.layer);
          t.dispatchEvent(a(d, i, o)),
            (s = n(r)),
            s &&
              (this.positionElement(l, s),
              t.dispatchEvent(a(d, i, o)),
              (this.lastPositioned = { target: e, element: t }));
        }
      }),
      (C.prototype.handleMutation = function () {
        this.lastPositioned &&
          this.lastPositioned.hasOwnProperty('target') &&
          this.positionTooltip(
            this.lastPositioned.target,
            this.lastPositioned.element,
          );
      }),
      (C.prototype.toggleTooltip = function (e, t) {
        const o = this.targets.get(e);
        return this.layer.parentElement
          ? o.eventHandlers.hide(t)
          : o.eventHandlers.show(t);
      }),
      (C.prototype.prepareTooltip = function (e) {
        const t = this.targets.get(e);
        if (!t.domNode) {
          const o = t.options.ComponentFactory.create(t.renderer, t.data);
          if (
            ((t.domNode = document.createElement('div')),
            t.options.type && t.domNode.setAttribute('type', t.options.type),
            t.domNode.appendChild(t.options.ComponentFactory.getDOMNode(o)),
            o.renderPromise)
          )
            return (
              (o.renderPromise = o.renderPromise.then(
                this.displayTooltip.bind(this, e),
              )),
              'pending'
            );
        }
        this.mutationObserver.observe(t.domNode, {
          childList: !0,
          subtree: !0,
        });
      }),
      (C.prototype.displayTooltip = function (e) {
        if (
          (this.dispatchTargetEvent(e, 'tooltip:beforeDisplay'),
          !this.pendingTooltips.get(e))
        )
          return;
        const t = this.targets.get(e);
        if (!t) return;
        if (
          ((t.tooltipVisible = this.tooltipVisible = !0),
          (this.lastTarget = e),
          'pending' === this.prepareTooltip(e))
        )
          return;
        if (-1 === [].slice.call(this.layer.children).indexOf(t.domNode)) {
          for (let e = this.layer.childNodes.length - 1; 0 <= e; e--)
            'attention' !== this.layer.childNodes[e].getAttribute('type') &&
              this.layer.removeChild(this.layer.childNodes[e]);
          this.layer.appendChild(t.domNode);
        }
        this.showLayer(), this.positionTooltip(e, t.domNode);
        let o = t.options.transitionSpeed;
        this.recentlyShowedTooltip && (o = 0),
          (this.recentlyShowedTooltip = !0),
          (0, g.jQuery)(t.domNode)
            .animate({ opacity: 1 }, o, k)
            .promise()
            .done(() => {
              this.dispatchTargetEvent(e, 'tooltip:afterDisplay');
            });
        const i = t.options && t.options.willHideOnChange;
        this.hideOnChange(e, i), this.pendingTooltips.delete(e);
      }),
      (C.prototype.hideOnChange = function (e, t) {
        t || f.default.addTarget(e, () => this.hideTooltip(e));
      }),
      (C.prototype.showTooltip = function (e) {
        function t() {
          clearTimeout(this.recentlyShowedTimeout),
            this.displayTooltip(e),
            this.dispatchTargetEvent(e, 'tooltip:afterShow');
        }
        const o = this.targets.get(e);
        if (
          o.tooltipEnabled &&
          (this.dispatchTargetEvent(e, 'tooltip:beforeShow'),
          !this.pendingTooltips.get(e))
        ) {
          const i = this.recentlyShowedTooltip ? 0 : n(o.options.showDelay);
          this.pendingTooltips.set(e, setTimeout(t.bind(this), i));
        }
      }),
      (C.prototype.hideTooltip = function (e) {
        if (
          (this.dispatchTargetEvent(e, 'tooltip:beforeHide'),
          this.pendingTooltips.get(e))
        )
          clearTimeout(this.pendingTooltips.get(e)),
            this.pendingTooltips.delete(e),
            this.dispatchTargetEvent(e, 'tooltip:afterHide');
        else {
          f.default.removeTarget(e);
          const t = this.targets.get(e);
          (this.tooltipVisible = !1),
            (this.lastTarget = null),
            t &&
              t.domNode &&
              ((t.tooltipVisible = !1),
              (this.recentlyShowedTimeout = setTimeout(() => {
                this.recentlyShowedTooltip = !1;
              }, 500)),
              (0, g.jQuery)(t.domNode)
                .stop()
                .animate({ opacity: 0 }, t.options.transitionSpeed, k)
                .promise()
                .done(() => {
                  this.mutationObserver.disconnect(),
                    t.domNode.parentNode &&
                      t.domNode.parentNode.removeChild(t.domNode),
                    this.lastTarget ||
                      this.layer.childNodes.length ||
                      this.hideLayer(),
                    this.dispatchTargetEvent(e, 'tooltip:afterHide');
                }));
        }
      }),
      (C.prototype.enableTooltip = function (e) {
        const t = this.targets.get(e);
        t.tooltipEnabled = !0;
      }),
      (C.prototype.disableTooltip = function (e) {
        const t = this.targets.get(e);
        (t.tooltipEnabled = !1), this.hideTooltip(e);
      }),
      (C.prototype.dispatchTargetEvent = function (e, t) {
        e && 'function' == typeof e.dispatchEvent
          ? e.dispatchEvent(new Event(t))
          : e && 'function' == typeof e.trigger && e.trigger(t);
      }),
      (e.exports = new C());
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return (t.default = e), t;
    }
    function a(e) {
      const t = e.element,
        o = e.target,
        i = e.targetAnchor,
        a = e.elementAnchor,
        n = e.offset,
        r = e.areaRestriction,
        l = c.elementRect(t);
      if (l) {
        const e = c.elementRect(o);
        if (e) {
          const e = c.areaNameToCoords(r),
            s = c.getAnchorPosition(o, i, n),
            p = c.getAnchorPosition(t, a || c.mirrorAnchor('xy', i)),
            u = c.constrain(e.right - l.w, e.left, l.left + (s.x - p.x)),
            g = c.constrain(e.bottom - l.h, e.top, l.top + (s.y - p.y));
          return d.point(u, g);
        }
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(0),
      r = o(27),
      l = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      s = o(88),
      d = i(s),
      p = o(129),
      c = i(p);
    const u = (0, l.default)('lol-uikit:geom');
    t.default = {
      preserve: a,
      flip: function (e) {
        const t = e.element,
          o = e.target,
          i = e.offset,
          r = e.areaRestriction;
        let l = e.elementAnchor,
          s = e.targetAnchor;
        const p = c.elementRect(t);
        if (p) {
          const g = c.elementRect(o);
          if (g) {
            const g = c.getAnchorPosition(o, s, i),
              m = c.getAnchorPosition(t, l || c.mirrorAnchor('xy', s)),
              h = g.x - m.x,
              b = g.y - m.y,
              f = c.areaNameToCoords(r),
              y = {
                x: !!(
                  (p.left + h < f.left && s.x === d.left) ||
                  (p.right + h > f.right && s.x === d.right)
                ),
                y: !!(
                  (p.top + b < f.top && s.y === d.top) ||
                  (p.bottom + b > f.bottom && s.y === d.bottom)
                ),
              };
            n.Lodash.forEach(y, (e, t) => {
              !0 === e &&
                (u(
                  `Tooltip does not fit on screen. Mirroring in the ${t} axis`,
                ),
                (s = c.mirrorAnchor(t, s)),
                (l = c.mirrorAnchor(t, l)));
            });
            const v = n.Lodash.assign({}, e, {
              targetAnchor: s,
              elementAnchor: l,
              areaRestriction: f,
            });
            return a(v);
          }
        }
      },
    };
  },
  function (e, t, o) {
    var i = o(2),
      a = i.JSON || (i.JSON = { stringify: JSON.stringify });
    e.exports = function () {
      return a.stringify.apply(a, arguments);
    };
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-slider-wrapper">\r\n    <div class="lol-uikit-slider-base">\r\n      <div class="lol-uikit-slider-button"></div>\r\n      <div class="lol-uikit-slider-fill"></div>\r\n    </div>\r\n  </div>\r\n  <lol-uikit-tooltip>\r\n    <lol-uikit-content-block type="tooltip-system">\r\n      <p></p>\r\n    </lol-uikit-content-block>\r\n  </lol-uikit-tooltip>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ':host {\n  --slider-base-before-top: 14px;\n  --slider-btn-cursor: default;\n  --slider-btn-width: 30px;\n  --slider-btn-height: 30px;\n  --slider-btn-hover-background-position: 0 -30px;\n  --slider-btn-active-background-position: 0 -60px;\n  --slider-fill-top: 13px;\n}\n:host {\n  display: flex;\n  align-items: center;\n}\n:host .lol-uikit-slider-wrapper {\n  position: relative;\n  height: inherit;\n  width: inherit;\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-base {\n  height: inherit;\n  width: inherit;\n  position: absolute;\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-base:before {\n  content: \'\';\n  position: absolute;\n  top: var(--slider-base-before-top);\n  left: 0;\n  width: calc(100% - 2.5px);\n  height: 2px;\n  background: #1e2328;\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-fill {\n  background: linear-gradient(to left, #695625, #463714);\n  position: absolute;\n  height: 2px;\n  width: 0;\n  top: var(--slider-fill-top);\n  border: thin solid #010a13;\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-button {\n  cursor: var(--slider-btn-cursor);\n  width: var(--slider-btn-width);\n  height: var(--slider-btn-height);\n  background: url("/fe/lol-uikit/images/slider-btn.png") no-repeat top left;\n  background-size: 100%;\n  position: absolute;\n  top: 0px;\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-button:hover + .lol-uikit-slider-fill {\n  background: linear-gradient(to right, #785a28 0%, #c89b3c 56%, #c8aa6e 100%);\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-button:active + .lol-uikit-slider-fill {\n  background: linear-gradient(to right, #695625, #463714);\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-button:hover {\n  background-position: var(--slider-btn-hover-background-position);\n}\n:host .lol-uikit-slider-wrapper .lol-uikit-slider-button:active {\n  background-position: var(--slider-btn-active-background-position);\n}\n:host .lol-uikit-slider-wrapper.disabled .lol-uikit-slider-fill {\n  background: rgba(1,10,19,0.15);\n}\n:host .lol-uikit-slider-wrapper.disabled .lol-uikit-slider-button {\n  background-position: 0 -90px;\n}\n:host .lol-uikit-slider-wrapper.disabled .lol-uikit-slider-button:hover + .lol-uikit-slider-fill {\n  background: rgba(1,10,19,0.15);\n}\n:host .lol-uikit-slider-wrapper.disabled .lol-uikit-slider-button:active + .lol-uikit-slider-fill {\n  background: rgba(1,10,19,0.15);\n}\n:host .lol-uikit-slider-wrapper.disabled .lol-uikit-slider-button:hover {\n  background-position: 0 -90px;\n}\n:host .lol-uikit-slider-wrapper.disabled .lol-uikit-slider-button:active {\n  background-position: 0 -90px;\n}\n:host .lol-uikit-slider-wrapper.vertical .lol-uikit-slider-base:before {\n  top: 0px;\n  left: 15px;\n  bottom: 15px;\n  width: 2px;\n  height: calc(100% - 2.5px);\n  background: #1e2328;\n}\n:host .lol-uikit-slider-wrapper.vertical .lol-uikit-slider-fill {\n  background: linear-gradient(to top, #695625, #463714);\n  width: 2px;\n  height: 0;\n  bottom: 0px;\n  top: auto;\n  left: 14px;\n}\n:host .lol-uikit-slider-wrapper.vertical .lol-uikit-slider-button {\n  transform: rotate(90deg);\n  left: 0px;\n  bottom: 0px;\n  top: auto;\n}\n:host(:lang(ar-ae)) {\n  direction: ltr /*rtl:ignore*/;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0);
    const a = 'level',
      n = 'percent',
      r = 'fresh-percent',
      l = '.xp-meter-progress',
      s = 'has-fresh-xp';
    class d extends i.webComponents.ShadowElement {
      templateMarkup() {
        return o(360);
      }
      stylesheetMarkup() {
        return o(361);
      }
      static get observedAttributes() {
        return [a, n, r, 'simplified', 'social', 'solid'];
      }
      constructor() {
        super(),
          (this._theme = 1),
          (this._percent = 0),
          (this._freshPercent = 0);
      }
      attributeChangedCallback(e, t, o) {
        const i = this.shadowRoot.querySelector(l);
        if (e === a) {
          (this._theme = this._getThemeFromLevel(o)),
            i.setAttribute('theme', this._theme);
          const e = this.shadowRoot.querySelector('.level-text');
          e.textContent = o;
        } else
          e === n
            ? ((this._percent = +o),
              this.shadowRoot
                .querySelector('.middle.regular')
                .setAttribute('percent', this._percent))
            : e === r &&
              ((this._freshPercent = +o),
              this.shadowRoot
                .querySelector('.middle.fresh')
                .setAttribute('percent', this._freshPercent),
              null === o ? i.classList.remove(s) : i.classList.add(s));
      }
      animateFill(e) {
        const t = this.shadowRoot.querySelector(l),
          o = e[0].percent,
          i = e[1].percent;
        return (
          this.setAttribute(n, o),
          void 0 === i ? this.removeAttribute(r) : this.setAttribute(r, i),
          t.animateFill(e)
        );
      }
      activateGlow() {
        const e = this.shadowRoot.querySelector(l),
          t = e.querySelector('.mask-container.left-half img'),
          o = e.querySelector('.mask-container.right-half img');
        (t.style.transform = ''),
          (o.style.transform = ''),
          this.removeAttribute(r),
          this.setAttribute(n, 100);
      }
      _getThemeFromLevel(e) {
        if (1 <= e && 29 >= e) return 1;
        if (30 <= e && 49 >= e) return 2;
        else {
          const t = Math.floor(e / 25) + 1;
          return Math.min(t, 21);
        }
      }
    }
    (d.tagName = 'lol-uikit-themed-level-ring'), (t.default = d);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <lol-uikit-radial-progress class="xp-meter-progress" type="custom" start-angle="247" end-angle="-67">\r\n    <div slot="bottom" class="bottom">\r\n      <img class="unfilled-xp-ring" />\r\n    </div>\r\n    <div slot="middle" class="middle regular" percent="0">\r\n      <img class="filled-xp-ring" />\r\n      <div class="mask-container left-half">\r\n        <img class="unfilled-xp-ring mask" />\r\n      </div>\r\n      <div class="mask-container right-half">\r\n        <img class="unfilled-xp-ring mask" />\r\n      </div>\r\n    </div>\r\n    <div slot="middle" class="middle fresh" percent="0">\r\n      <img class="filled-xp-ring" />\r\n      <div class="mask-container left-half">\r\n        <img class="unfilled-xp-ring mask" />\r\n      </div>\r\n      <div class="mask-container right-half">\r\n        <img class="unfilled-xp-ring mask" />\r\n      </div>\r\n    </div>\r\n    <div slot="top" class="top">\r\n      <img class="level-ring-border" />\r\n      <div class="level-text"></div>\r\n    </div>\r\n  </lol-uikit-radial-progress>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        '.xp-meter-progress .level-text {\n  font-family: var(--font-display);\n}\n.xp-meter-progress .level-text {\n  -webkit-user-select: none;\n}\n.xp-meter-progress .level-text {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.xp-meter-progress .level-text {\n  text-transform: uppercase;\n}\n.xp-meter-progress .level-text:lang(ko-kr),\n.xp-meter-progress .level-text:lang(ja-jp),\n.xp-meter-progress .level-text:lang(tr-tr),\n.xp-meter-progress .level-text:lang(el-gr),\n.xp-meter-progress .level-text:lang(th-th),\n.xp-meter-progress .level-text:lang(zh-tw) {\n  text-transform: none;\n}\n.xp-meter-progress .level-text {\n  color: #f0e6d2;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.075em;\n}\n.xp-meter-progress .level-text:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  --themed-level-ring-level-text-font-size: 14px;\n  --themed-level-ring-level-text-font-weight: 700;\n  --themed-level-ring-level-text-line-height: 1.3;\n  --themed-level-ring-level-text-top: 86%;\n  --themed-level-ring-level-text-bottom: 2.5%;\n}\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.xp-meter-progress .bottom,\n.xp-meter-progress .middle,\n.xp-meter-progress .top {\n  width: 100%;\n  height: 100%;\n}\n.xp-meter-progress img {\n  height: 140%;\n  position: absolute;\n  top: -20%;\n  left: -20%;\n}\n.xp-meter-progress img.unfilled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/unfilled-ring.png");\n}\n.xp-meter-progress .middle .mask-container {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n}\n.xp-meter-progress .middle .mask-container.left-half {\n  left: 0;\n}\n.xp-meter-progress .middle .mask-container.left-half img {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/unfilled-ring-left.png");\n  transform-origin: center right;\n  transform: rotate(180deg);\n  left: initial;\n  right: 0;\n}\n.xp-meter-progress .middle .mask-container.right-half {\n  right: 0;\n}\n.xp-meter-progress .middle .mask-container.right-half img {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/unfilled-ring-right.png");\n  transform-origin: center left;\n  transform: rotate(180deg);\n  left: 0;\n}\n.xp-meter-progress[theme="1"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-1-ring.png");\n}\n.xp-meter-progress[theme="1"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-1-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="1"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-1-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="1"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="1"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="1"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="1"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-1-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="1"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="1"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="1"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-1-solid-border.png");\n}\n.xp-meter-progress[theme="2"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-2-ring.png");\n}\n.xp-meter-progress[theme="2"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-2-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="2"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-2-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="2"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="2"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="2"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="2"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-2-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="2"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="2"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="2"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-2-solid-border.png");\n}\n.xp-meter-progress[theme="3"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-3-ring.png");\n}\n.xp-meter-progress[theme="3"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-3-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="3"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-3-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="3"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="3"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="3"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="3"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-3-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="3"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="3"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="3"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-3-solid-border.png");\n}\n.xp-meter-progress[theme="4"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-4-ring.png");\n}\n.xp-meter-progress[theme="4"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-4-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="4"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-4-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="4"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="4"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="4"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="4"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-4-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="4"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="4"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="4"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-4-solid-border.png");\n}\n.xp-meter-progress[theme="5"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-5-ring.png");\n}\n.xp-meter-progress[theme="5"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-5-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="5"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-5-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="5"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="5"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="5"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="5"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-5-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="5"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="5"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="5"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-5-solid-border.png");\n}\n.xp-meter-progress[theme="6"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-6-ring.png");\n}\n.xp-meter-progress[theme="6"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-6-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="6"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-6-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="6"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="6"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="6"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="6"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-6-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="6"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="6"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="6"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-6-solid-border.png");\n}\n.xp-meter-progress[theme="7"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-7-ring.png");\n}\n.xp-meter-progress[theme="7"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-7-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="7"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-7-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="7"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="7"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="7"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="7"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-7-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="7"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="7"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="7"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-7-solid-border.png");\n}\n.xp-meter-progress[theme="8"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-8-ring.png");\n}\n.xp-meter-progress[theme="8"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-8-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="8"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-8-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="8"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="8"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="8"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="8"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-8-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="8"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="8"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="8"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-8-solid-border.png");\n}\n.xp-meter-progress[theme="9"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-9-ring.png");\n}\n.xp-meter-progress[theme="9"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-9-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="9"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-9-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="9"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="9"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="9"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="9"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-9-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="9"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="9"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="9"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-9-solid-border.png");\n}\n.xp-meter-progress[theme="10"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-10-ring.png");\n}\n.xp-meter-progress[theme="10"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-10-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="10"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-10-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="10"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="10"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="10"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="10"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-10-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="10"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="10"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="10"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-10-solid-border.png");\n}\n.xp-meter-progress[theme="11"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-11-ring.png");\n}\n.xp-meter-progress[theme="11"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-11-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="11"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-11-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="11"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="11"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="11"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="11"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-11-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="11"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="11"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="11"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-11-solid-border.png");\n}\n.xp-meter-progress[theme="12"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-12-ring.png");\n}\n.xp-meter-progress[theme="12"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-12-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="12"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-12-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="12"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="12"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="12"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="12"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-12-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="12"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="12"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="12"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-12-solid-border.png");\n}\n.xp-meter-progress[theme="13"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-13-ring.png");\n}\n.xp-meter-progress[theme="13"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-13-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="13"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-13-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="13"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="13"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="13"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="13"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-13-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="13"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="13"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="13"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-13-solid-border.png");\n}\n.xp-meter-progress[theme="14"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-14-ring.png");\n}\n.xp-meter-progress[theme="14"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-14-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="14"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-14-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="14"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="14"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="14"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="14"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-14-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="14"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="14"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="14"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-14-solid-border.png");\n}\n.xp-meter-progress[theme="15"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-15-ring.png");\n}\n.xp-meter-progress[theme="15"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-15-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="15"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-15-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="15"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="15"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="15"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="15"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-15-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="15"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="15"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="15"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-15-solid-border.png");\n}\n.xp-meter-progress[theme="16"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-16-ring.png");\n}\n.xp-meter-progress[theme="16"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-16-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="16"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-16-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="16"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="16"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="16"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="16"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-16-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="16"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="16"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="16"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-16-solid-border.png");\n}\n.xp-meter-progress[theme="17"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-17-ring.png");\n}\n.xp-meter-progress[theme="17"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-17-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="17"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-17-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="17"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="17"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="17"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="17"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-17-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="17"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="17"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="17"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-17-solid-border.png");\n}\n.xp-meter-progress[theme="18"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-18-ring.png");\n}\n.xp-meter-progress[theme="18"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-18-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="18"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-18-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="18"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="18"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="18"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="18"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-18-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="18"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="18"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="18"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-18-solid-border.png");\n}\n.xp-meter-progress[theme="19"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-19-ring.png");\n}\n.xp-meter-progress[theme="19"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-19-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="19"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-19-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="19"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="19"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="19"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="19"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-19-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="19"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="19"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="19"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-19-solid-border.png");\n}\n.xp-meter-progress[theme="20"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-20-ring.png");\n}\n.xp-meter-progress[theme="20"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-20-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="20"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-20-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="20"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="20"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="20"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="20"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-20-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="20"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="20"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="20"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-20-solid-border.png");\n}\n.xp-meter-progress[theme="21"] img.filled-xp-ring {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-21-ring.png");\n}\n.xp-meter-progress[theme="21"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-21-border.png");\n}\n:host([simplified]) .xp-meter-progress[theme="21"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-21-simplified-border.png");\n}\n:host([social]) .xp-meter-progress[theme="21"] img {\n  height: 160%;\n  top: -30%;\n  left: -30%;\n}\n:host([social]) .xp-meter-progress[theme="21"] img.filled-xp-ring,\n:host([social]) .xp-meter-progress[theme="21"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([social]) .xp-meter-progress[theme="21"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-21-social-border.png");\n}\n:host([solid]) .xp-meter-progress[theme="21"] img.filled-xp-ring,\n:host([solid]) .xp-meter-progress[theme="21"] img.unfilled-xp-ring {\n  display: none;\n}\n:host([solid]) .xp-meter-progress[theme="21"] img.level-ring-border {\n  content: url("/fe/lol-static-assets/images/uikit/themed-level-ring/theme-21-solid-border.png");\n}\n.xp-meter-progress.has-fresh-xp[theme="1"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(58%) hue-rotate(0deg) saturate(133%);\n}\n.xp-meter-progress.has-fresh-xp[theme="2"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(45%) hue-rotate(7deg) saturate(142%);\n}\n.xp-meter-progress.has-fresh-xp[theme="3"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(65%) hue-rotate(33deg) saturate(139%);\n}\n.xp-meter-progress.has-fresh-xp[theme="4"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(58%) hue-rotate(-34deg) saturate(148%);\n}\n.xp-meter-progress.has-fresh-xp[theme="5"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(53%) hue-rotate(11deg) saturate(111%);\n}\n.xp-meter-progress.has-fresh-xp[theme="6"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(50%) hue-rotate(30deg) saturate(119%);\n}\n.xp-meter-progress.has-fresh-xp[theme="7"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(51%) hue-rotate(18deg) saturate(143%);\n}\n.xp-meter-progress.has-fresh-xp[theme="8"] .regular img.filled-xp-ring {\n  -webkit-filter: brightness(42%) hue-rotate(-10deg) saturate(178%);\n}\n.xp-meter-progress .level-text {\n  font-size: var(--themed-level-ring-level-text-font-size);\n  font-weight: var(--themed-level-ring-level-text-font-weight);\n  line-height: var(--themed-level-ring-level-text-line-height);\n  top: var(--themed-level-ring-level-text-top);\n  bottom: var(--themed-level-ring-level-text-bottom);\n  color: #f0e6d2;\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n:host([simplified]) .xp-meter-progress .level-text {\n  display: none;\n}\n',
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    var i = Math.max;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(0);
    const n = function (e, t, o) {
        return i(t, Math.min(o, e));
      },
      r = function (e, t, o, a) {
        const r = i(0, (t - 2 * 24) / 2);
        return n(o + a / 2 - (e + t / 2), -r, r);
      };
    class l extends a.webComponents.ShadowElement {
      static get observedAttributes() {
        return [
          'caret-position',
          'tooltip-position',
          'type',
          'data-tooltip-position',
        ];
      }
      templateMarkup() {
        return o(363);
      }
      stylesheetMarkup() {
        return o(364);
      }
      connectedCallback() {
        super.connectedCallback(), this.addEventListener('positioned', this);
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this.removeEventListener('positioned', this);
      }
      handleEvent(e) {
        'positioned' === e.type &&
          (!this.shadowRoot && this.render(), this.onPositioned(e));
      }
      caretPosition() {
        return 'center' === this.getAttribute('caret-position')
          ? 'center'
          : 'auto';
      }
      tooltipPosition() {
        const e = this.getAttribute('tooltip-position');
        return 'left' === e || 'right' === e || 'bottom' === e || 'top' === e
          ? e
          : 'auto';
      }
      onPositioned(e) {
        const t = this.shadowRoot,
          o = t
            .querySelector('.lol-uikit-tooltip-container')
            .getBoundingClientRect(),
          i = e.targetRect;
        let n = this.tooltipPosition();
        if ('auto' === n) {
          const e = {
            right: o.left - i.right,
            left: i.left - o.right,
            top: i.top - o.bottom,
            bottom: o.top - i.bottom,
          };
          n = a.Lodash.reduce(
            e,
            function (t, o, i) {
              return !t || o > e[t] ? i : t;
            },
            void 0,
          );
        }
        this.setAttribute('data-tooltip-position', n),
          'auto' === this.caretPosition() && this._repositionCaret(n, o, i);
      }
      _repositionCaret(e, t, o) {
        const i = this.shadowRoot;
        let a = 0,
          n = 0;
        'left' === e || 'right' === e
          ? (a = r(t.top, t.height, o.top, o.h))
          : (n = r(t.left, t.width, o.left, o.w));
        const l = i.querySelector('.lol-uikit-tooltip-caret');
        (l.style.top = a ? 'calc(50% + ' + a + 'px)' : ''),
          (l.style.left = n ? 'calc(50% + ' + n + 'px)' : '');
      }
    }
    (l.tagName = 'lol-uikit-tooltip'), (t.default = l);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <div class="lol-uikit-tooltip-container">\r\n    <div class="lol-uikit-tooltip">\r\n      <slot />\r\n    </div>\r\n    <div class="lol-uikit-tooltip-sub-border"></div>\r\n    <div class="lol-uikit-tooltip-caret"></div>\r\n  </div>\r\n</template>\r\n';
  },
  function (e, t, o) {
    (t = e.exports = o(1)(!1)),
      t.push([
        e.i,
        ":host([data-tooltip-position='right']) .lol-uikit-tooltip {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to right, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host([data-tooltip-position='left']) .lol-uikit-tooltip {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to left, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to top, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip {\n  border: 2px solid transparent;\n  border-image: linear-gradient(to bottom, #614a1f 0, #463714 5px, #463714 100%) 1 stretch;\n}\n:host {\n  display: block;\n  color: #fff;\n}\n.lol-uikit-tooltip-container {\n  position: relative;\n  display: flex;\n}\n.lol-uikit-tooltip-container .lol-uikit-tooltip {\n  margin: 1px;\n  box-sizing: border-box;\n  flex: 1;\n  background-color: #010a13;\n  border-width: 2px;\n  box-shadow: 0 0 0 1px rgba(1,10,19,0.48);\n}\n.lol-uikit-tooltip-container .lol-uikit-tooltip::before {\n  content: '';\n  position: absolute;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  top: 1px;\n  left: 1px;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);\n  pointer-events: none;\n}\n.lol-uikit-tooltip-container .lol-uikit-tooltip-sub-border {\n  position: absolute;\n  display: flex;\n}\n.lol-uikit-tooltip-container .lol-uikit-tooltip-sub-border::before {\n  content: '';\n  position: absolute;\n}\n.lol-uikit-tooltip-container .lol-uikit-tooltip-caret {\n  position: absolute;\n  display: flex;\n}\n.lol-uikit-tooltip-container .lol-uikit-tooltip-caret::before {\n  content: '';\n  position: absolute;\n  width: 24px;\n  height: 15px;\n  background: url(\"/fe/lol-uikit/images/tooltip-caret.png\") center no-repeat;\n}\n:host([type='system']) .lol-uikit-tooltip-sub-border {\n  display: none;\n}\n:host([type='system']) .lol-uikit-tooltip-caret::before {\n  width: 16px;\n  height: 11px;\n  background: url(\"/fe/lol-uikit/images/tooltip-system-caret.png\") center no-repeat;\n}\n:host([type='system'][data-tooltip-position='right']) .lol-uikit-tooltip-caret::before,\n:host([type='system'][data-tooltip-position='left']) .lol-uikit-tooltip-caret::before {\n  top: calc(50% + 8px);\n}\n:host([type='system'][data-tooltip-position='top']) .lol-uikit-tooltip-caret::before,\n:host([type='system'][data-tooltip-position='bottom']) .lol-uikit-tooltip-caret::before {\n  left: calc(50% - 8px);\n}\n:host([type='attention']) {\n  color: #32281e;\n  cursor: pointer;\n}\n:host([type='attention']) .lol-uikit-tooltip-sub-border {\n  display: none;\n}\n:host([type='attention']) .lol-uikit-tooltip {\n  margin: 1px;\n  box-sizing: border-box;\n  flex: 1;\n  background-color: #c89b3c;\n  border: none;\n  padding-left: 44px;\n}\n:host([type='attention']) .lol-uikit-tooltip::after {\n  content: '';\n  position: absolute;\n  margin-top: -16px;\n  left: 12px;\n  top: 50%;\n  width: 32px;\n  height: 32px;\n  background: url(\"/fe/lol-uikit/images/attention-info.svg\") no-repeat;\n}\n:host([type='attention']) .lol-uikit-tooltip-caret {\n  position: absolute;\n  display: flex;\n}\n:host([type='attention']) .lol-uikit-tooltip-caret::before {\n  background: none;\n  border: 13px solid transparent;\n  width: 0;\n  height: 0;\n  border-top-width: 15px;\n  border-bottom-width: 15px;\n  border-top-color: #c89b3c;\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-sub-border,\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-sub-border {\n  top: 8px;\n  height: calc(100% - 16px);\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-sub-border::before,\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-sub-border::before {\n  height: calc(100% - 8px);\n  width: 0;\n  border-image-source: url(\"/fe/lol-uikit/images/tooltip-sub-border-vertical.png\");\n  border-width: 4px 4px 4px 0;\n  border-image-width: 4px 4px 4px 0;\n  border-image-slice: 4 4 4 0;\n  border-image-repeat: stretch;\n  border-style: solid;\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-caret,\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-caret {\n  top: 50%;\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-caret::before,\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-caret::before {\n  top: calc(50% + 12px);\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-sub-border,\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-sub-border {\n  left: 8px;\n  width: calc(100% - 16px);\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-sub-border::before,\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-sub-border::before {\n  width: calc(100% - 8px);\n  height: 0;\n  border-image-source: url(\"/fe/lol-uikit/images/tooltip-sub-border-horizontal.png\");\n  border-width: 4px 4px 0 4px;\n  border-image-width: 4px 4px 0 4px;\n  border-image-slice: 4 4 0 4;\n  border-image-repeat: stretch;\n  border-style: solid;\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-caret,\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-caret {\n  left: 50%;\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-caret::before,\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-caret::before {\n  left: calc(50% - 12px);\n  transform-origin: center center;\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-container {\n  margin: 0 0 0 13px;\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-sub-border {\n  left: -3px;\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-caret {\n  left: 0;\n}\n:host([data-tooltip-position='right']) .lol-uikit-tooltip-caret::before {\n  right: -3px;\n  transform-origin: top right;\n  transform: rotate(90deg);\n}\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-container {\n  margin: 0 13px 0 0;\n}\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-sub-border {\n  right: -3px;\n  transform: rotate(180deg);\n}\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-caret {\n  right: 0;\n}\n:host([data-tooltip-position='left']) .lol-uikit-tooltip-caret::before {\n  left: -3px;\n  transform-origin: top left;\n  transform: rotate(270deg);\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-container {\n  margin: 0 0 13px 0;\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-sub-border {\n  bottom: 1px;\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-caret {\n  bottom: 0;\n}\n:host([data-tooltip-position='top']) .lol-uikit-tooltip-caret::before {\n  top: -3px;\n}\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-container {\n  margin: 13px 0 0 0;\n}\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-sub-border {\n  top: 1px;\n  transform: rotate(180deg);\n}\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-caret {\n  top: 0;\n}\n:host([data-tooltip-position='bottom']) .lol-uikit-tooltip-caret::before {\n  bottom: -3px;\n  transform: rotate(180deg);\n}\n",
        '',
      ]);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(0),
      a = o(87),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a);
    class r extends i.webComponents.ShadowElement {
      static get observedAttributes() {
        return ['key', 'disabled'];
      }
      templateMarkup() {
        return o(366);
      }
      connectedCallback() {
        super.connectedCallback(),
          (this._tooltipAssigned = !1),
          (this._hovertipData = null);
        const e = this.getAttribute('key');
        this.handleKeyAttribute(e);
      }
      handleKeyAttribute(e) {
        e &&
          i.gameDataBinding
            .get('/assets/v1/hovertips.json')
            .then((e) => this._hovertipDataHandler(e));
      }
      _hovertipDataHandler(e) {
        const t = e ? e.find((e) => e.key === this.getAttribute('key')) : null;
        t
          ? (this.removeAttribute('disabled'), this._bindMouseoverHandler(t))
          : this.setAttribute('disabled', '');
      }
      _bindMouseoverHandler(e) {
        this.addEventListener('mouseover', () => {
          if (!this._tooltipAssigned && e) {
            n.default.assign(this, this._tooltipDOM(e.value), void 0, {
              targetAnchor: { x: 'center', y: 'top' },
              tooltipAnchor: { x: 'center', y: 'bottom' },
            }),
              (this._tooltipAssigned = !0),
              n.default.show(this);
          }
        });
      }
      _tooltipDOM(e) {
        if (!this._tooltip) {
          let e = this.querySelector('lol-uikit-tooltip');
          if (!e) {
            const t = this.shadowRoot.getElementById(
                'lol-uikit-template-keyword-tooltip',
              ),
              o = document.importNode(t.content, !0);
            this.appendChild(o), (e = this.querySelector('lol-uikit-tooltip'));
          }
          this._tooltip = e;
        }
        const t = this._tooltip.querySelector('p');
        return (t.textContent = e), this._tooltip;
      }
    }
    (r.tagName = 'lol-uikit-tooltipped-keyword'), (t.default = r);
  },
  function (e) {
    e.exports =
      '<template>\r\n  <slot></slot>\r\n\r\n  <template id="lol-uikit-template-keyword-tooltip"">\r\n    <lol-uikit-tooltip>\r\n      <lol-uikit-content-block type="tooltip-system">\r\n        <p class="keyword-tooltip-content"></p>\r\n      </lol-uikit-content-block>\r\n    </lol-uikit-tooltip>\r\n  </template>\r\n</template>';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(25),
      n = i(a),
      r = o(114),
      l = i(r);
    class s extends l.default {
      templateMarkup() {
        return o(368);
      }
      static get observedAttributes() {
        return ['next-state'];
      }
      attributeChangedCallback(e, t, o) {
        super.attributeChangedCallback(e, t, o);
      }
      activate(e) {
        this.isActive() && this.deactivate(),
          super.activate(() => {
            e(this.getNextState());
          });
      }
      deactivate() {
        super.deactivate();
      }
      getConditions() {
        return (0, n.default)(this.children);
      }
      getActiveConditions() {
        return this.getConditions().filter(function (e) {
          return e && e.isActive();
        });
      }
      getNextState() {
        return this.getAttribute('next-state');
      }
      static isTransition(e) {
        return e && e instanceof s;
      }
    }
    (s.tagName = 'uikit-transition'), (t.default = s);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(5),
      n = i(a),
      r = o(0),
      l = i(r),
      s = o(130);
    const d = l.default.webComponents,
      p = 'no-preserve-state',
      c = 'wait-for-end',
      u = 'start',
      g = 'done',
      m = 'signal',
      h = 'idle',
      b = 'outro',
      f = 'interupt',
      y = ['mousemove', 'scroll', 'keypress'];
    class v extends d.ShadowElement {
      templateMarkup() {
        return o(370);
      }
      constructor() {
        super(),
          (this.isAttached = !1),
          (0, s.elementDeprecated)(
            this,
            'This element is to be obsoleted in favor of uikit-state-machine and uikit-video, please see documentation for more info',
          ),
          (this._dispatchVideoEventStart = (e) =>
            this.dispatchVideoEvent('videoStateStart', e)),
          (this._dispatchVideoEventDone = (e) =>
            this.dispatchVideoEvent('videoStateDone', e)),
          (this._dispatchVideoEventSignal = (e) =>
            this.dispatchVideoEvent('videoStateSignal', e)),
          (this._setInactiveStateHandler = r.Lodash.debounce(
            () => this._setInactiveState(),
            '120000',
          )),
          (this._resumeVideosEvent = this._resumeVideos.bind(this));
      }
      static get observedAttributes() {
        return [p, c];
      }
      connectedCallback() {
        super.connectedCallback(),
          (this.isAttached = !0),
          this.dispatchEvent(new Event('attached')),
          this._setInactiveStateHandler(),
          this._addInactiveListeners();
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          (this.isAttached = !1),
          this.dispatchEvent(new Event('detached')),
          this._removeInactiveListeners();
      }
      dispatchEvent(e) {
        super.dispatchEvent(e);
        const t = this.getElementsByTagName('lol-uikit-video-group');
        for (let o = 0; o < t.length; o++) this.playGroupState(t[o], e);
      }
      playGroupState(e, t) {
        const o = e.querySelector(
          'lol-uikit-video-state[state=' + t.type + ']',
        );
        if (o) {
          const a = o.hasAttribute(p)
            ? e.querySelectorAll('lol-uikit-video-state')
            : e.querySelectorAll(
                'lol-uikit-video-state:not([state=' + t.type + '])',
              );
          if (t.type !== e.currentState || o.hasAttribute(p)) {
            e.currentState = t.type;
            for (let e = 0; e < a.length; e++) this.interuptAllVideos(a[e]);
            e.playPromise
              ? e.playPromise.then(
                  () => ((e.playPromise = this.playState(o)), null),
                )
              : (e.playPromise = this.playState(o));
          }
        }
      }
      playState(e) {
        const t = e.hasAttribute(c),
          o = e.querySelector('lol-uikit-video[type="' + 'intro' + '"]'),
          i = e.querySelector('lol-uikit-video[type="' + h + '"]'),
          a = e.querySelector('lol-uikit-video[type="' + b + '"]'),
          r = new n.default((e) => {
            t || e(),
              this.addVideoListeners(o),
              this.addVideoListeners(i),
              this.addVideoListeners(a),
              this._playVideo(o)
                .then((e) => (e === f ? void 0 : this._playVideo(i)))
                .then(() => this._playVideo(a))
                .then(() => {
                  this.removeVideoListeners(o),
                    this.removeVideoListeners(i),
                    this.removeVideoListeners(a),
                    e();
                });
          });
        return r;
      }
      addVideoListeners(e) {
        e &&
          (e.addEventListener(u, this._dispatchVideoEventStart),
          e.addEventListener(g, this._dispatchVideoEventDone),
          e.addEventListener(m, this._dispatchVideoEventSignal));
      }
      removeVideoListeners(e) {
        e &&
          (e.removeEventListener(u, this._dispatchVideoEventStart),
          e.removeEventListener(g, this._dispatchVideoEventDone),
          e.removeEventListener(m, this._dispatchVideoEventSignal));
      }
      _playVideo(e) {
        return e ? e.play() : n.default.resolve();
      }
      interuptAllVideos(e) {
        if (e) {
          const t = e.querySelectorAll('lol-uikit-video:not([type=' + b + '])');
          for (let e = 0; e < t.length; e++) t[e].dispatchEvent(new Event(f));
        }
      }
      dispatchVideoEvent(e, t) {
        const o = t.target,
          i = o.getAttribute('type'),
          a = o.parentElement.getAttribute('state'),
          n = o.hasAttribute('name') ? o.getAttribute('name') : '',
          r = new CustomEvent(e, { detail: { state: a, type: i, video: n } });
        this.dispatchEvent(r);
      }
      _addInputDetection(e) {
        y.forEach((t) => {
          window.addEventListener(t, e);
        });
      }
      _removeInputDetection(e) {
        y.forEach((t) => {
          window.removeEventListener(t, e);
        });
      }
      _addInactiveListeners() {
        this._addInputDetection(this._setInactiveStateHandler);
      }
      _removeInactiveListeners() {
        this._removeInputDetection(this._setInactiveStateHandler);
      }
      _addResumeListeners() {
        this._addInputDetection(this._resumeVideosEvent);
      }
      _removeResumeListeners() {
        this._removeInputDetection(this._resumeVideosEvent);
      }
      _resumeVideos() {
        this._removeResumeListeners();
        const e = this.querySelectorAll('lol-uikit-video[type="' + h + '"]');
        for (let t = 0; t < e.length; t++) e[t].resume();
      }
      _setInactiveState() {
        this._addResumeListeners();
        const e = this.querySelectorAll('lol-uikit-video[type="' + h + '"]');
        for (let t = 0; t < e.length; t++) e[t].pause();
      }
    }
    (v.tagName = 'lol-uikit-video-state-machine'), (t.default = v);
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(5),
      n = i(a),
      r = o(0),
      l = i(r),
      s = o(131),
      d = i(s),
      p = o(130);
    const c = l.default.webComponents,
      u = 'type',
      g = 'preload',
      m = 'signal-before-end',
      h = 'state',
      b = 'interupt',
      f = 'signalEnd',
      y = 'idle';
    class v extends c.ShadowElement {
      templateMarkup() {
        return o(381);
      }
      static get observedAttributes() {
        return ['fade-in', 'fade-out', 'src', u, g, m, 'alignment', h];
      }
      constructor() {
        super(),
          (0, p.elementDeprecated)(
            this,
            'This element is to be obsoleted in favor of uikit-state-machine and uikit-video, please see documentation for more info',
          ),
          this._video,
          (this._start = this._startHandler.bind(this)),
          (this._ended = this._endedHandler.bind(this)),
          (this._signalEnd = this._signalEndHandler.bind(this)),
          (this._dispose = this.dispose.bind(this)),
          (this._pause = this.pause.bind(this)),
          (this._resume = this.resume.bind(this)),
          this.addEventListener(b, this._dispose),
          this.addEventListener('pause', this._pause),
          this.addEventListener('resume', this._resume);
      }
      connectedCallback() {
        super.connectedCallback(),
          this.hasAttribute(g) && (this._video = this._createVideoElement());
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.disposeAll();
      }
      attributeChangedCallback(e, t, o) {
        super.attributeChangedCallback(arguments);
        const i = this._video;
        !i ||
          0 < i.played.length ||
          ('src' === e &&
            (o ? ((i.src = o), i.load()) : (i.pause(), (i.src = ''))),
          e === h ? (i.loop = o === y) : i.setAttribute(e, o));
      }
      play() {
        const e = new n.default((e) => {
          const t = this._video || this._createVideoElement();
          this._message = this.getAttribute(u);
          let o = new d.default(t);
          const i = () => {
            this._removeEventHandlers(t),
              this._endedHandler(),
              (this._video = null),
              e(this._message);
          };
          let a;
          const n = () => {
              a(), (o = null);
            },
            r = () => {
              a(),
                this._removeEventHandlers(t),
                (o = null),
                (this._video = null);
            };
          (a = () => {
            t.removeEventListener('resolve', i),
              t.removeEventListener('remove', n),
              t.removeEventListener('destroy', r);
          }),
            (() => {
              t.addEventListener('resolve', i),
                t.addEventListener('remove', n),
                t.addEventListener('destroy', r);
            })(),
            this._addEventHandlers(t),
            this.hasAttribute(g) || this.appendChild(t),
            o.setSignalEnd(this.getAttribute(m)),
            o.play();
        });
        return e;
      }
      pause() {
        const e = this.querySelectorAll('video');
        for (let t = 0; t < e.length; t++) {
          const o = e[t];
          !o.paused && 0 < o.currentTime && o.pause();
        }
      }
      resume() {
        const e = this.querySelectorAll('video');
        for (let t = 0; t < e.length; t++) {
          const o = e[t];
          o.paused && 0 < o.played.length && o.play();
        }
      }
      dispose() {
        this._message = b;
        const e = this.querySelectorAll('video');
        for (let t = 0; t < e.length; t++) {
          const o = e[t];
          (!this.hasAttribute(g) ||
            (this.hasAttribute(g) && 0 < o.played.length)) &&
            o.dispatchEvent(new Event(b));
        }
      }
      disposeAll() {
        const e = this.querySelectorAll('video');
        for (let t = 0; t < e.length; t++) {
          const o = e[t];
          o.pause(),
            o.dispatchEvent(new Event('destroy')),
            (o.src = ''),
            o.parentElement && o.parentElement.removeChild(o);
        }
      }
      _createVideoElement() {
        const e = this.hasAttribute('src') ? this.getAttribute('src') : '',
          t = this.hasAttribute('alignment')
            ? this.getAttribute('alignment')
            : '',
          o = this.getAttribute('type'),
          i = document.createElement('video');
        return (
          (i.className = 'lol-uikit-video-content'),
          (i.autoplay = !this.hasAttribute(g)),
          (i.loop = o === y),
          (i.src = e),
          t === 'center' && i.classList.add('lol-uikit-video-content-centered'),
          '' !== e && i.load(),
          this.hasAttribute(g) && this.appendChild(i),
          i
        );
      }
      _addEventHandlers(e) {
        e.addEventListener('play', this._start),
          e.addEventListener('ended', this._ended),
          e.addEventListener('error', this._ended),
          e.addEventListener('stalled', this._ended),
          e.addEventListener(f, this._signalEnd);
      }
      _removeEventHandlers(e) {
        e.removeEventListener('play', this._start),
          e.removeEventListener('ended', this._ended),
          e.removeEventListener('error', this._ended),
          e.removeEventListener('stalled', this._ended),
          e.removeEventListener(f, this._signalEnd);
      }
      _startHandler() {
        this.dispatchEvent(new Event('start'));
      }
      _endedHandler(e) {
        e && 'error' === e.type && 3 === e.target.error.code
          ? this.play()
          : this.dispatchEvent(new Event('done'));
      }
      _signalEndHandler() {
        this.dispatchEvent(new Event('signal'));
      }
    }
    (v.tagName = 'lol-uikit-video'), (t.default = v);
  },
  function (e, t, o) {
    e.exports = { default: o(373), __esModule: !0 };
  },
  function (e, t, o) {
    o(36), o(34), (e.exports = o(374));
  },
  function (e, t, o) {
    var i = o(54),
      a = o(6)('iterator'),
      n = o(35);
    e.exports = o(2).isIterable = function (e) {
      var t = Object(e);
      return t[a] !== void 0 || '@@iterator' in t || n.hasOwnProperty(i(t));
    };
  },
  function (e, t, o) {
    e.exports = { default: o(376), __esModule: !0 };
  },
  function (e, t, o) {
    o(45), o(34), o(36), o(377), o(378), o(379), o(380), (e.exports = o(2).Set);
  },
  function (e, t, o) {
    'use strict';
    var i = o(108),
      a = o(39),
      n = 'Set';
    e.exports = o(79)(
      n,
      function (e) {
        return function () {
          return e(this, 0 < arguments.length ? arguments[0] : void 0);
        };
      },
      {
        add: function (e) {
          return i.def(a(this, n), (e = 0 === e ? 0 : e), e);
        },
      },
      i,
    );
  },
  function (e, t, o) {
    var i = o(3);
    i(i.P + i.R, 'Set', { toJSON: o(110)('Set') });
  },
  function (e, t, o) {
    o(81)('Set');
  },
  function (e, t, o) {
    o(82)('Set');
  },
  function (e) {
    e.exports = '<template>\r\n  <slot></slot>\r\n</template>\r\n';
  },
  function (e, t, o) {
    function i(e) {
      return o(a(e));
    }
    function a(e) {
      var t = n[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t;
    }
    var n = {
      './dialog-alert/index.js': 383,
      './dialog-celebration/index.js': 384,
      './dialog-confirm/index.js': 385,
      './dialog-toast-celebration/index.js': 386,
      './dialog-toast/index.js': 387,
      './first-touch-modal/index.js': 388,
      './vignette-celebration/index.js': 389,
    };
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 382);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e, t) {
      let o = !0;
      return e && !1 === e[t] && (o = !1), o;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(5),
      r = i(n),
      l = o(11),
      s = i(l),
      d = o(9),
      p = i(d),
      c = o(65),
      u = i(c),
      g = o(66),
      m = i(g),
      h = o(29);
    const b = 'ok-button',
      f = 'close-button';
    class y {
      static template() {
        return s.default
          .get()
          .getElementById('lol-uikit-template-dialog-alert');
      }
      static create(e) {
        const t = (0, p.default)('<div />').addClass('dialog-alert');
        e && e.noDefaultPadding && t.attr('no-default-padding', '');
        let o = null;
        const i = e && 'string' == typeof e.okText && 0 < e.okText.length,
          n = e && e.dismissible,
          r = e && e.dismissibleType,
          l = e && e.onClose,
          s = a(e, 'enterEnabled');
        if (!1 === (i || n))
          throw new Error('either okText or dismissible is required');
        t.append(y.template().innerHTML);
        const d = t.find('lol-uikit-dialog-frame.dialog-frame');
        if (i) {
          const i = m.default.dialogButtonGroupSingleButton(e.okText);
          d.append(i),
            (o = t.find('lol-uikit-flat-button.button-ok')),
            (e.primaryButton || e.primaryButton === void 0) &&
              o.attr({ primary: !0 });
        }
        n && (0, p.default)(d).attr('close-button', ''),
          r && (0, p.default)(d).attr('dismissable-type', r),
          y._appendContents(t, e);
        const c = y._createModalObj(t, d, n, i, o, s, r, l);
        return c;
      }
      static _appendContents(e, t) {
        let o = t.contents ? t.contents : '';
        const i = e.find('.dialog-content');
        'string' == typeof o && (o = m.default.contentBlockDialogSimple(o)),
          i.append((0, p.default)(o));
      }
      static _createModalObj(e, t, o, i, a, n, l, s) {
        const d = { domNode: e[0] },
          p = i ? a.get(0) : null;
        return (
          (d.okPromise = new r.default((r) => {
            function l(e) {
              r(e), y._close(d);
            }
            if (
              (i &&
                (e.on('keydown', (e) => {
                  e.which === 13 && !p.disabled && n && l(b);
                }),
                a.on(
                  'click',
                  (0, h.leftClickHandler)(() => {
                    p.disabled || l(b);
                  }),
                )),
              o)
            ) {
              t.on('dialogFrameDismissed', () => {
                l(f);
              }),
                t.on('mousedown', () => !1);
              let o = !1;
              e.on('mousedown', () => {
                o = !1;
              }),
                e.on('mousemove', () => {
                  o = !0;
                }),
                e.on('mouseup', () => {
                  o || l(f);
                });
            }
          })),
          d.okPromise.then((e) => {
            s && 'function' == typeof s && s(e);
          }),
          i &&
            ((d.focusOkButton = function () {
              a.focus();
            }),
            (d.disableOkButton = function () {
              p.disabled = !0;
            }),
            (d.enableOkButton = function () {
              p.disabled = void 0;
            }),
            (d.clickOkButton = function () {
              p.dispatchEvent(new MouseEvent('click', { button: 0 }));
            })),
          d
        );
      }
      static _close(e) {
        u.default.remove(e);
      }
    }
    (y.registerAs = 'DialogAlert'),
      (y.tagName = 'lol-uikit-dialog-alert'),
      (t.default = y);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      return e instanceof HTMLElement;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(5),
      r = i(n),
      l = o(9),
      s = i(l),
      d = o(0),
      p = o(11),
      c = i(p),
      u = o(65),
      g = i(u),
      m = o(29),
      h = o(7),
      b = i(h);
    const f = c.default.get();
    class y {
      static playNotificationSound(e) {
        return (0, d.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-notifications')
          .playSound(e);
      }
      static playUISound(e) {
        return (0, d.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .playSound(e);
      }
      static template() {
        return f.getElementById('lol-uikit-template-dialog-celebration');
      }
      static create(e) {
        e.rewardContent &&
          !e.staticContent &&
          (e.staticContent = e.rewardContent);
        const o = f.createElement('div'),
          i = y.template(),
          t = f.importNode(i.content, !0);
        o.appendChild(t);
        const a = { domNode: o },
          n = y._appendRewardContentAndRetrieveDelay(o, e);
        return (
          y._appendTitleContent(o, e.titleContent),
          y._appendContent(o, e.content),
          y._appendButtonContent(o, a, e.okText, e.onClose),
          e.contentContainsPlayerInput && y._addPlayerInputContentClass(o),
          o.addEventListener(
            'modalShow',
            y._preloadAndTriggerAnimation.bind(null, {
              domNode: o,
              contentDelay: n,
              shouldPlayStaticAudio: 0 < n,
            }),
          ),
          a
        );
      }
      static _hideRewardContent(e) {
        (0, s.default)(e)
          .find('.dialog-celebration-container')
          .addClass('dialog-celebration-content-hidden');
      }
      static _appendRewardContentAndRetrieveDelay(e, t) {
        let o = t.contentDelay || 0;
        return (
          t.videoContent
            ? ((0, s.default)(e)
                .find('.dialog-celebration-container')
                .addClass('dialog-celebration-type-video'),
              y._appendRewardContentVideo(e, t.videoContent),
              0 < o && y._hideRewardContent(e))
            : ((o = 0), y._appendRewardContentStatic(e, t.staticContent)),
          o
        );
      }
      static _revealRewardContent(e) {
        (0, s.default)(e)
          .find('.dialog-celebration-container')
          .removeClass('dialog-celebration-content-hidden');
      }
      static _appendRewardContentStatic(e, t) {
        t &&
          (0, s.default)(e)
            .find('.dialog-celebration-reward')
            .addClass('dialog-celebration-reward-static')
            .append(t);
      }
      static _appendRewardContentVideo(e, t) {
        if (t) {
          const o = (0, s.default)(
            '<video src="/fe/lol-uikit/videos/celebration-bg-magic.webm"></video>',
          )
            .addClass('dialog-celebration-reward-bg-magic')
            .attr('loop', !0)
            .attr('autoplay', !0);
          (0, s.default)(e)
            .find('.dialog-celebration-reward')
            .addClass('dialog-celebration-reward-video')
            .before('<div class="dialog-celebration-reward-placeholder"></div>')
            .before(o)
            .append(t);
        }
      }
      static _appendTitleContent(e, t) {
        const o = (0, s.default)(e).find('.dialog-celebration-title');
        'string' == typeof t
          ? (o.html(t), o.addClass('dialog-celebration-title-default'))
          : a(t) && o.append(t);
      }
      static _appendContent(e, t) {
        const o = (0, s.default)(e).find('.dialog-celebration-body');
        'string' == typeof t
          ? (o.html(t), o.addClass('dialog-celebration-body-default'))
          : a(t) && o.append(t);
      }
      static _addPlayerInputContentClass(e) {
        const t = (0, s.default)(e).find('.dialog-celebration-body-container');
        t.addClass('dialog-celebration-player-input-body');
      }
      static _appendButtonContent(e, t, o, i) {
        const a = (0, s.default)(e).find('.dialog-celebration-ok-button');
        a.text(o),
          (t.okPromise = new r.default((e) => {
            function o() {
              e(), y._close(t);
            }
            a.on(
              'click',
              (0, m.leftClickHandler)(() => {
                y.playUISound(b.default.dialogCelebrationClick), o();
              }),
            ),
              a.on('mouseenter', () => {
                y.playUISound(b.default.dialogCelebrationHover, {
                  allowConcurrency: !1,
                });
              });
          })),
          t.okPromise.then(() => {
            i && 'function' == typeof i && i();
          });
      }
      static _preloadAndTriggerAnimation(e = {}) {
        const t = e.domNode,
          o = e.contentDelay,
          i = e.shouldPlayStaticAudio,
          a = t.querySelectorAll('img, video'),
          n = [];
        for (let t = 0; t < a.length; t++)
          !a[t].complete &&
            2 <= !a[t].readyState &&
            n.push(
              new r.default(function (e) {
                (a[t].onload = e),
                  (a[t].onloadeddata = e),
                  (a[t].onerror = e),
                  setTimeout(e, 5e3);
              }),
            );
        r.default.all(n).then(function () {
          (0, s.default)(t)
            .find('.dialog-celebration-container')
            .addClass('animate-dialog-celebration'),
            y.playNotificationSound(b.default.dialogCelebrationIntro),
            setTimeout(() => {
              i && y.playNotificationSound(b.default.dialogCelebrationReceive),
                t.dispatchEvent(new Event('rewardContentShowing')),
                setTimeout(() => {
                  y._revealRewardContent(t);
                }, o);
            }, 420);
        });
      }
      static _close(e) {
        const t = (0, s.default)(e.domNode).find(
          '.dialog-celebration-ok-button',
        );
        t.off('click'),
          t.off('mouseenter'),
          e.domNode.removeEventListener(
            'modalShow',
            y._preloadAndTriggerAnimation,
          ),
          g.default.remove(e);
      }
    }
    (y.registerAs = 'DialogCelebration'),
      (y.tagName = 'lol-uikit-dialog-celebration'),
      (t.default = y);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      let t = 0;
      const o = function (o) {
        t++,
          o.which === h &&
            (t >= e.length && (t = 0), e[t].focus(), o.preventDefault());
      };
      return (
        e.forEach((e) => e.addEventListener('keydown', o)),
        () => {
          e.forEach((e) => e.removeEventListener('keydown', o));
        }
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(5),
      r = i(n),
      l = o(92),
      s = i(l),
      d = o(11),
      p = i(d),
      c = o(65),
      u = i(c),
      g = o(66),
      m = o(29);
    const h = 9,
      b = 13,
      f = p.default.get();
    class y {
      static template() {
        return f.getElementById('lol-uikit-template-dialog-confirm');
      }
      static create(e) {
        const o = f.createElement('div');
        o.classList.add('dialog-confirm'),
          e && e.noDefaultPadding && o.setAttribute('no-default-padding', '');
        const i = y.template(),
          t = f.importNode(i.content, !0);
        o.appendChild(t), y._appendContents(o, e);
        var n = y._retrieveButtons(o, e),
          l = (0, s.default)(n, 3);
        const d = l[0],
          p = l[1],
          c = l[2],
          u = o.querySelector('lol-uikit-dialog-frame.dialog-frame'),
          g = { domNode: o },
          h = a([d, p]);
        return (
          o.addEventListener('modalShow', () => {
            c.focus();
          }),
          e &&
            e.closeButton &&
            (u.setAttribute('close-button', ''),
            !e.shouldKeepCancelButton && p.remove(),
            e.dismissibleType &&
              u.setAttribute('dismissable-type', e.dismissibleType)),
          (g.focusDefault = function () {
            c.focus();
          }),
          (g.enableAcceptButton = function () {
            d.disabled = void 0;
          }),
          (g.disableAcceptButton = function () {
            d.disabled = !0;
          }),
          (g._resolvePromiseHalted = function () {
            return !!d.disabled;
          }),
          (g.acceptPromise = new r.default((t, o) => {
            function i(e) {
              o(e), h(), y._close(g);
            }
            function a() {
              if (l && 'function' == typeof l) {
                const e = l();
                return 'boolean' == typeof e
                  ? r.default.resolve(e)
                  : 'object' == typeof e && 'function' == typeof e.then
                  ? e
                  : r.default.resolve(!0);
              }
              return r.default.resolve(!0);
            }
            function n() {
              t(), h(), y._close(g);
            }
            let l = null;
            e && e.acceptHandler && (l = e.acceptHandler),
              d.addEventListener('keydown', (e) => {
                e.which !== b ||
                  g._resolvePromiseHalted() ||
                  a().then((e) => {
                    e && n();
                  });
              }),
              d.addEventListener(
                'click',
                (0, m.leftClickHandler)(() => {
                  g._resolvePromiseHalted() ||
                    a().then((e) => {
                      e && n();
                    });
                }),
              ),
              u.addEventListener('closeButtonClick', () => {
                i('closeButtonClicked'), y._close(g);
              }),
              p.addEventListener('keydown', (e) => {
                e.which === b && i();
              }),
              p.addEventListener(
                'click',
                (0, m.leftClickHandler)(() => {
                  i();
                }),
              ),
              e &&
                e.closeButton &&
                u.addEventListener('dialogFrameDismissed', () => {
                  i();
                });
          })),
          g.acceptPromise
            .then(
              () => {
                e &&
                  e.onAccept &&
                  'function' == typeof e.onAccept &&
                  e.onAccept();
              },
              () => {
                e &&
                  e.onDecline &&
                  'function' == typeof e.onDecline &&
                  e.onDecline();
              },
            )
            .finally(() => {
              e && e.onClose && 'function' == typeof e.onClose && e.onClose();
            }),
          g
        );
      }
      static _appendContents(e, t) {
        let o = t.contents ? t.contents : '';
        o.jquery && (o = o[0]);
        const i = e.querySelector('.dialog-content');
        'string' == typeof o && (o = (0, g.contentBlockDialogSimple)(o)),
          o && i.appendChild(o);
      }
      static _retrieveButtons(e, t) {
        const o = t.acceptText ? t.acceptText : '',
          i = t.declineText ? t.declineText : '',
          a = e.querySelector('lol-uikit-flat-button.button-accept'),
          n = e.querySelector('lol-uikit-flat-button.button-decline');
        t.defaultTabIndex || (t.defaultTabIndex = 1);
        const r = e.querySelector(
          `lol-uikit-flat-button[tabindex="${t.defaultTabIndex}"]`,
        );
        return (
          t.acceptButtonType && a.setAttribute('type', t.acceptButtonType),
          (a.innerText = o),
          (n.innerText = i),
          t && t.primaryButton && 'decline' === t.primaryButton.toLowerCase()
            ? n.setAttribute('primary', !0)
            : (t && null === t.primaryButton) ||
              (((t &&
                ((t.primaryButton &&
                  'accept' === t.primaryButton.toLowerCase()) ||
                  (t.closeButton && !t.shouldKeepCancelButton))) ||
                !t.declineText) &&
                a.setAttribute('primary', !0)),
          [a, n, r]
        );
      }
      static _close(e) {
        u.default.remove(e);
      }
    }
    (y.registerAs = 'DialogConfirm'), (t.default = y);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(11),
      n = i(a),
      r = o(133),
      l = i(r);
    class s {
      static template() {
        return n.default
          .get()
          .getElementById('lol-uikit-template-dialog-toast-celebration');
      }
      static create(e) {
        const t = document.createElement('div');
        return (
          t.classList.add('dialog-toast-celebration'),
          (t.innerHTML = s.template().innerHTML),
          s._appendTitleContent(t, e.title),
          s._appendDetailsContent(t, e.details),
          s._appendImageAndIconContent(
            t,
            e.backgroundImageUrl,
            e.iconUrl,
            e.iconElement,
            e.scaleIcon,
          ),
          s._applyAnimationClass(t, e.animationsEnabled, e.isMuted),
          { domNode: t }
        );
      }
      static _appendTitleContent(e, t) {
        e.querySelector('.toast-celebration-title').innerHTML += t;
      }
      static _appendDetailsContent(e, t) {
        e.querySelector('.toast-celebration-details').innerHTML += t;
      }
      static _appendImageAndIconContent(e, t, o, i, a) {
        if (t) {
          e.querySelector(
            '.toast-celebration-reward-image',
          ).style.backgroundImage = 'url(' + t + ')';
        }
        if (o) {
          e.querySelector(
            '.toast-celebration-reward-icon',
          ).style.backgroundImage = 'url(' + o + ')';
        }
        i && e.querySelector('.toast-celebration-reward-icon').appendChild(i),
          a &&
            e
              .querySelector('.toast-celebration-reward-icon')
              .classList.add('scale');
      }
      static _applyAnimationClass(e, t, o) {
        t && e.classList.add('animate'), o && e.classList.add('muted');
      }
      static _close(e) {
        l.default.remove(e);
      }
    }
    (s.registerAs = 'DialogToastCelebration'), (t.default = s);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(11),
      n = i(a),
      r = o(9),
      l = i(r),
      s = o(134),
      d = i(s);
    class p {
      static template() {
        return n.default
          .get()
          .getElementById('lol-uikit-template-dialog-toast');
      }
      static create(e) {
        const t = (0, l.default)('<div></div>');
        t.addClass('dialog-toast'), t.append(p.template().innerHTML);
        const o = e.contents ? e.contents : '';
        return (
          t.find('.toast-content').append(o),
          (!e.dismissable || e.hideCloseButton) &&
            t.find('lol-uikit-dialog-frame').removeAttr('dismissable'),
          { domNode: t[0] }
        );
      }
      static _close(e) {
        d.default.remove(e);
      }
    }
    (p.registerAs = 'DialogToast'), (t.default = p);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(11),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = a.default.get();
    class r {
      static template() {
        const e = n.getElementById('lol-uikit-template-first-touch-modal');
        return e;
      }
      static create(e) {
        r._rootElement = n.createElement('div');
        const t = r._rootElement;
        t.classList.add('first-touch-modal');
        const o = r.template(),
          i = n.importNode(o.content, !0);
        t.appendChild(i);
        const a = t.querySelector('div.first-touch-title');
        r._appendTitleContent(a, e.titleImage, e.titleText, e.subtitleText);
        const l = t.querySelector('div.first-touch-features');
        r._populateFeatures(l, e.features);
        const s = t.querySelector('lol-uikit-flat-button.button-accept');
        return (
          r._applyButtonLabel(s, e.buttonLabel),
          r._addListeners(t, s),
          { domNode: t }
        );
      }
      static _appendTitleContent(e, t, o, i) {
        const a = e.querySelector('.title-image');
        a.setAttribute('src', t);
        const r = e.querySelector('.title-text');
        r.appendChild(n.createTextNode(o));
        const l = e.querySelector('.modal-subtitle');
        l.appendChild(n.createTextNode(i));
      }
      static _populateFeatures(e, t) {
        const o = e.children;
        for (let a = 0; a < o.length; a++) this._populateFeature(o[a], t[a]);
      }
      static _populateFeature(e, t) {
        const o = e.querySelector('.feature-image');
        o.setAttribute('src', t.image);
        const i = e.querySelector('.feature-title');
        i.appendChild(n.createTextNode(t.title));
        const a = e.querySelector('.feature-description');
        a.appendChild(n.createTextNode(t.description));
      }
      static _applyButtonLabel(e, t) {
        e.appendChild(n.createTextNode(t));
      }
      static _addListeners(e, t) {
        e.addEventListener('dialogFrameDismissed', r._onDismiss),
          t.addEventListener('click', r._onAccept);
      }
      static _cleanListeners() {
        const e = r._rootElement,
          t = e.querySelector('lol-uikit-flat-button.button-accept');
        e.removeEventListener('dialogFrameDismissed', r._onDismiss),
          t.removeEventListener('click', r._onAccept);
      }
      static _onAccept(e) {
        const t = r._rootElement;
        e.stopImmediatePropagation(), e.preventDefault(), r._cleanListeners(t);
        const o = new Event('firstTouchAccept', {
          bubbles: !0,
          cancelable: !0,
        });
        t.dispatchEvent(o);
      }
      static _onDismiss(e) {
        const t = r._rootElement;
        e.stopImmediatePropagation(), e.preventDefault(), r._cleanListeners(t);
        const o = new Event('firstTouchDismissed', {
          bubbles: !0,
          cancelable: !0,
        });
        t.dispatchEvent(o);
      }
    }
    (r.registerAs = 'FirstTouch'), (t.default = r);
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(11),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    class n {
      static template() {
        return a.default
          .get()
          .getElementById('lol-uikit-template-vignette-celebration');
      }
      static create() {
        const e = document.createElement('div');
        return (
          e.classList.add('vignette-celebration'),
          (e.innerHTML = n.template().innerHTML),
          { domNode: e }
        );
      }
    }
    (n.registerAs = 'VignetteCelebration'), (t.default = n);
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(87),
      n = i(a),
      r = o(391),
      l = i(r),
      s = o(392),
      d = i(s),
      p = o(393),
      c = i(p),
      u = o(400),
      g = i(u),
      m = o(401),
      h = i(m),
      b = o(403),
      f = i(b),
      y = o(404),
      v = i(y),
      x = o(406),
      k = i(x),
      A = o(139),
      w = i(A),
      _ = o(16),
      E = i(_),
      C = o(410),
      S = i(C),
      T = o(12),
      L = i(T),
      M = o(66),
      N = i(M),
      P = o(83),
      O = i(P),
      I = o(113),
      D = i(I),
      R = o(412),
      H = i(R);
    t.default = new (class {
      constructor() {
        this._summonerIconManager = null;
      }
      getContextMenuManager() {
        return g.default;
      }
      getContextualNotificationManager() {
        return h.default;
      }
      getModalManager() {
        return f.default;
      }
      getToastManager() {
        return l.default;
      }
      getToastCelebrationManager() {
        return d.default;
      }
      getVignetteCelebrationManager() {
        return c.default;
      }
      getPopoutManager() {
        return v.default;
      }
      getFlyoutManager() {
        return k.default;
      }
      getTooltipManager() {
        return n.default;
      }
      getWindowManager() {
        return w.default;
      }
      getLayerManager() {
        return E.default;
      }
      getLayerWindowManager() {
        return S.default;
      }
      getComponentFactory() {
        return L.default.exportable();
      }
      getTemplateHelper() {
        return N.default;
      }
      getVideoCache() {
        return D.default;
      }
      getSwitch() {
        return O.default;
      }
      getSummonerIconManager() {
        return (
          this._summonerIconManager ||
            (this._summonerIconManager = (0, H.default)()),
          this._summonerIconManager
        );
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(134),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = o(12);
    t.default = new (class {
      constructor() {
        (this.type = 'DialogToast'), (this.dismissableDefault = !0);
      }
      add(e) {
        (e.ComponentFactory = e.ComponentFactory || n),
          (e.type = e.type || this.type),
          (e.data = e.data || {}),
          e.data.dismissable === void 0 &&
            (e.data.dismissable = this.dismissableDefault),
          a.default.handleNotification(e);
      }
      remove(e, t) {
        (e.ComponentFactory = e.ComponentFactory || n),
          (e.type = e.type || this.type),
          a.default.remove(e, 'managed', t);
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(133),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i),
      n = o(0);
    const r = o(12),
      l = {
        type: 'DialogToastCelebration',
        ComponentFactory: r,
        id: '',
        data: {
          title: '',
          details: '',
          iconUrl: '',
          backgroundImageUrl: '',
          animationsEnabled: !0,
          audioEnabled: !0,
          isMuted: !1,
          scaleIcon: !0,
        },
        position: { x: 350, y: 520 },
      };
    t.default = new (class {
      constructor() {
        this.type = 'DialogToastCelebration';
      }
      add(e) {
        n.Lodash.defaultsDeep(e, l), a.default.handleToastCelebration(e);
      }
      remove(e, t) {
        n.Lodash.defaultsDeep(e, l), a.default.remove(e, t);
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(135),
      n = i(a),
      r = o(0),
      l = o(399),
      s = i(l);
    const d = o(12),
      p = {
        type: 'VignetteCelebration',
        ComponentFactory: d,
        id: null,
        data: {
          header: { title: '', titleSubtext: '' },
          backgroundImageUrl: '',
          nextButtonText: '',
          nextButtonEnabled: !0,
        },
        height: 'SMALL',
        timing: 'INFINITE',
        animationsEnabled: !0,
        onShow: null,
        onRemove: null,
        onVignetteClose: null,
        onVignetteWillClose: null,
        onClick: null,
        content: null,
        behindVignette: !1,
      };
    t.default = new (class {
      constructor() {
        this.type = 'VignetteCelebration';
      }
      add(e) {
        return (
          r.Lodash.defaultsDeep(e, p),
          e.id || (e.id = (0, n.default)()),
          s.default.handleCelebration(e),
          e
        );
      }
      remove(e, t) {
        s.default.remove(e, t);
      }
      update(e) {
        e.id && s.default.update(e);
      }
    })();
  },
  function (e, t, o) {
    o(395), o(45), o(397), o(398), (e.exports = o(2).Symbol);
  },
  function (e, t, o) {
    'use strict';
    var i = o(4),
      a = o(24),
      n = o(17),
      r = o(3),
      l = o(76),
      s = o(38).KEY,
      d = o(23),
      p = o(73),
      c = o(46),
      u = o(53),
      g = o(6),
      m = o(136),
      h = o(93),
      b = o(396),
      f = o(109),
      y = o(15),
      v = o(8),
      x = o(28),
      A = o(69),
      w = o(41),
      _ = o(50),
      E = o(137),
      C = o(118),
      S = o(14),
      T = o(42),
      L = C.f,
      M = S.f,
      N = E.f,
      P = i.Symbol,
      O = i.JSON,
      I = O && O.stringify,
      D = 'prototype',
      R = g('_hidden'),
      H = g('toPrimitive'),
      z = {}.propertyIsEnumerable,
      B = p('symbol-registry'),
      W = p('symbols'),
      F = p('op-symbols'),
      q = Object[D],
      Y = 'function' == typeof P,
      V = i.QObject,
      X = !V || !V[D] || !V[D].findChild,
      U =
        n &&
        d(function () {
          return (
            7 !=
            _(
              M({}, 'a', {
                get: function () {
                  return M(this, 'a', { value: 7 }).a;
                },
              }),
            ).a
          );
        })
          ? function (e, t, o) {
              var i = L(q, t);
              i && delete q[t], M(e, t, o), i && e !== q && M(q, t, i);
            }
          : M,
      Q = function (e) {
        var t = (W[e] = _(P[D]));
        return (t._k = e), t;
      },
      G =
        Y && 'symbol' == typeof P.iterator
          ? function (e) {
              return 'symbol' == typeof e;
            }
          : function (e) {
              return e instanceof P;
            },
      J = function (e, t, o) {
        return (
          e === q && J(F, t, o),
          y(e),
          (t = A(t, !0)),
          y(o),
          a(W, t)
            ? (o.enumerable
                ? (a(e, R) && e[R][t] && (e[R][t] = !1),
                  (o = _(o, { enumerable: w(0, !1) })))
                : (!a(e, R) && M(e, R, w(1, {})), (e[R][t] = !0)),
              U(e, t, o))
            : M(e, t, o)
        );
      },
      Z = function (e, t) {
        y(e);
        for (var o = b((t = x(t))), a = 0, i = o.length, n; i > a; )
          J(e, (n = o[a++]), t[n]);
        return e;
      },
      K = function (e) {
        var t = z.call(this, (e = A(e, !0)));
        return (
          (this !== q || !a(W, e) || a(F, e)) &&
          (!(t || !a(this, e) || !a(W, e) || (a(this, R) && this[R][e])) || t)
        );
      },
      $ = function (e, t) {
        if (((e = x(e)), (t = A(t, !0)), e !== q || !a(W, t) || a(F, t))) {
          var o = L(e, t);
          return (
            o && a(W, t) && !(a(e, R) && e[R][t]) && (o.enumerable = !0), o
          );
        }
      },
      ee = function (e) {
        for (var t = N(x(e)), o = [], n = 0, i; t.length > n; )
          a(W, (i = t[n++])) || i == R || i == s || o.push(i);
        return o;
      },
      te = function (e) {
        for (
          var t = e === q, o = N(t ? F : x(e)), n = [], r = 0, i;
          o.length > r;

        )
          a(W, (i = o[r++])) && (!t || a(q, i)) && n.push(W[i]);
        return n;
      };
    Y ||
      ((P = function () {
        if (this instanceof P) throw TypeError('Symbol is not a constructor!');
        var e = u(0 < arguments.length ? arguments[0] : void 0),
          t = function (o) {
            this === q && t.call(F, o),
              a(this, R) && a(this[R], e) && (this[R][e] = !1),
              U(this, e, w(1, o));
          };
        return n && X && U(q, e, { configurable: !0, set: t }), Q(e);
      }),
      l(P[D], 'toString', function () {
        return this._k;
      }),
      (C.f = $),
      (S.f = J),
      (o(138).f = E.f = ee),
      (o(60).f = K),
      (o(84).f = te),
      n && !o(44) && l(q, 'propertyIsEnumerable', K, !0),
      (m.f = function (e) {
        return Q(g(e));
      })),
      r(r.G + r.W + r.F * !Y, { Symbol: P });
    for (
      var oe = [
          'hasInstance',
          'isConcatSpreadable',
          'iterator',
          'match',
          'replace',
          'search',
          'species',
          'split',
          'toPrimitive',
          'toStringTag',
          'unscopables',
        ],
        ie = 0;
      oe.length > ie;

    )
      g(oe[ie++]);
    for (var j = T(g.store), ae = 0; j.length > ae; ) h(j[ae++]);
    r(r.S + r.F * !Y, 'Symbol', {
      for: function (e) {
        return a(B, (e += '')) ? B[e] : (B[e] = P(e));
      },
      keyFor: function (e) {
        if (!G(e)) throw TypeError(e + ' is not a symbol!');
        for (var t in B) if (B[t] === e) return t;
      },
      useSetter: function () {
        X = !0;
      },
      useSimple: function () {
        X = !1;
      },
    }),
      r(r.S + r.F * !Y, 'Object', {
        create: function (e, t) {
          return t === void 0 ? _(e) : Z(_(e), t);
        },
        defineProperty: J,
        defineProperties: Z,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: ee,
        getOwnPropertySymbols: te,
      }),
      O &&
        r(
          r.S +
            r.F *
              (!Y ||
                d(function () {
                  var e = P();
                  return (
                    '[null]' != I([e]) ||
                    '{}' != I({ a: e }) ||
                    '{}' != I(Object(e))
                  );
                })),
          'JSON',
          {
            stringify: function (e) {
              for (var t = [e], o = 1, i, a; arguments.length > o; )
                t.push(arguments[o++]);
              if (((a = i = t[1]), (v(i) || void 0 !== e) && !G(e)))
                return (
                  f(i) ||
                    (i = function (e, t) {
                      if (
                        ('function' == typeof a && (t = a.call(this, e, t)),
                        !G(t))
                      )
                        return t;
                    }),
                  (t[1] = i),
                  I.apply(O, t)
                );
            },
          },
        ),
      P[D][H] || o(22)(P[D], H, P[D].valueOf),
      c(P, 'Symbol'),
      c(Math, 'Math', !0),
      c(i.JSON, 'JSON', !0);
  },
  function (e, t, o) {
    var a = o(42),
      n = o(84),
      r = o(60);
    e.exports = function (e) {
      var t = a(e),
        o = n.f;
      if (o)
        for (var l = o(e), s = r.f, d = 0, i; l.length > d; )
          s.call(e, (i = l[d++])) && t.push(i);
      return t;
    };
  },
  function (e, t, o) {
    o(93)('asyncIterator');
  },
  function (e, t, o) {
    o(93)('observable');
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(48),
      n = i(a),
      r = o(5),
      l = i(r),
      s = o(16),
      d = i(s),
      p = o(12),
      c = i(p),
      u = o(0),
      g = o(29),
      m = o(62),
      h = o(7),
      b = i(h);
    const f = { SLOW: 3e4, NORMAL: 2e4, FAST: 1e4, INFINITE: -1 },
      y = { SMALL: 'small', MEDIUM: 'medium', LARGE: 'large', FULL: 'full' };
    t.default = new (class {
      constructor() {
        (this.currentIndex = -1),
          (this.celebrationQueue = []),
          (this.currentCelebration = null),
          (this.layer = this._createLayer(
            'lol-uikit-vignette-celebration-layer',
          )),
          (this.animationsEnabled = !1),
          (this._boundOnClickEvent = (0, g.leftClickHandler)(
            this._handleClickEvent.bind(this),
          )),
          (this.isEndingCeremony = !1);
      }
      handleCelebration(e) {
        !e ||
          this._findCelebration(e) ||
          (this._addCelebration(e),
          1 === this.celebrationQueue.length &&
            !this.isEndingCeremony &&
            this._startCelebrationCeremony());
      }
      remove(e, t) {
        const o = 'managed',
          i = this._findCelebration(e);
        if (i && (this._removeCelebration(i, o), t)) {
          t({ type: o });
        }
      }
      update(e) {
        if (e) {
          const t = this._findCelebration(e);
          if (t) {
            const o = u.Lodash.defaultsDeep(e, t);
            this._setCelebration(o),
              this.currentCelebration &&
                this.currentCelebration.id === o.id &&
                (this._setHeader(o),
                this._setBackground(o),
                this._setVignetteHeight(o),
                this._setButtonState(o),
                (this.currentCelebration = u.Lodash.cloneDeep(o)));
          }
        }
      }
      _findCelebration(e) {
        if (e && e.id) {
          const t = this.celebrationQueue.find((t) => t.id === e.id);
          if (t) return t;
        }
        return null;
      }
      _setCelebration(e) {
        if (e && e.id) {
          const t = this.celebrationQueue.findIndex((t) => t.id === e.id);
          -1 < t && (this.celebrationQueue[t] = e);
        }
      }
      _createLayer(e) {
        const t = document.createElement('div');
        return (
          t.classList.add(e),
          (t.style['z-index'] = m.Z_INDEX_CONSTANTS.CELEBRATIONS_VIGNETTE),
          t.addEventListener('keyup', this._keypressEventHandler.bind(this)),
          t
        );
      }
      _keypressEventHandler(t) {
        t.which === 32
          ? this._handleClickEvent(t)
          : t.which === 27 && this._removeAllCelebrations();
      }
      _showLayer() {
        d.default.addLayer(this.layer);
      }
      _hideLayer() {
        this.layer.removeEventListener('keypress', this._keypressEventHandler),
          (this.layer.innerHTML = ''),
          d.default.removeLayer(this.layer);
      }
      _addCelebration(e) {
        this.celebrationQueue.push(e);
      }
      _playUISound(e) {
        return (0, u.getProvider)()
          .get('rcp-fe-audio')
          .getChannel('sfx-ui')
          .playSound(e);
      }
      _waitForVideoStart(e) {
        const t = new l.default((t) => {
          function o() {
            e.removeEventListener('playing', o), t();
          }
          e || t(),
            e.addEventListener('playing', o),
            setTimeout(() => {
              o();
            }, 1e3);
        });
        return t;
      }
      _startCelebrationCeremony() {
        if (!this.celebrationQueue.length) return;
        this._showLayer();
        const e = c.default.create('VignetteCelebration');
        if (!e) return;
        this.layer.appendChild(e.domNode),
          this._setVignetteHeight(this.celebrationQueue[0]),
          this._setAnimationsEnabled(this.celebrationQueue[0]);
        const t = this.layer.querySelector('.footer-button');
        t && t.addEventListener('click', this._boundOnClickEvent);
        const o = this.layer.querySelector('.vignette-celebration'),
          i = this.layer.querySelector('.celebration-banners'),
          a = this.layer.querySelector('.celebration-intro-video');
        this._waitForVideoStart(a).then(() => {
          this._fadeIn(o, 0.4),
            this._playUISound(b.default.vignetteIntro),
            this._fadeIn(i, 0.2).then(() => {
              this._openBanners().then(() => {
                this._displayNextCelebration();
              });
            });
        });
      }
      _endCelebrationCeremony() {
        this.layer
          .querySelector('.footer-button')
          .removeEventListener('click', this._boundOnClickEvent),
          (this.isEndingCeremony = !0);
        const e = [],
          t = this.layer.querySelectorAll('.inner-contents');
        for (let o = 0; o < t.length; o++) e.push(this._fadeOut(t[o]));
        l.default.all(e).then(() => {
          this._playUISound(b.default.vignetteOutro),
            this._closeBanners().then(() => {
              const e = this.layer.querySelector('.vignette-celebration'),
                t = this.animationsEnabled ? 0.4 : 0;
              this._fadeOut(e, t).then(() => {
                this.currentIndex < this.celebrationQueue.length - 1 &&
                  this._startCelebrationCeremony(),
                  this._finalizeCelebrationCeremony();
              });
            });
        });
      }
      _finalizeCelebrationCeremony() {
        u.Lodash.forEach(this.celebrationQueue, (e) => {
          e.onVignetteClose && e.onVignetteClose();
        }),
          (this.celebrationQueue = []),
          (this.currentIndex = -1),
          (this.currentCelebration = null),
          (this.isEndingCeremony = !1),
          this._hideLayer();
      }
      _openBanners() {
        const e = this.layer.querySelector('.celebration-banners'),
          t = new l.default((t) => {
            if ((e || t(), !this.animationsEnabled))
              e.classList.remove('closed'), t();
            else {
              function o() {
                e.removeEventListener('transitionend', o), t();
              }
              e.addEventListener('transitionend', o),
                e.classList.remove('closed');
            }
          });
        return t;
      }
      _closeBanners() {
        const e = this.layer.querySelector('.celebration-banners'),
          t = new l.default((t) => {
            if (
              (e || t(),
              u.Lodash.forEach(this.celebrationQueue, (e) => {
                e.onVignetteWillClose && e.onVignetteWillClose();
              }),
              !this.animationsEnabled)
            )
              e.classList.add('closed'), t();
            else {
              function o() {
                e.removeEventListener('transitionend', o), t();
              }
              e.addEventListener('transitionend', o), e.classList.add('closed');
            }
          });
        return t;
      }
      _handleClickEvent(t) {
        const e =
          this.currentCelebration &&
          this.currentCelebration.data &&
          this.currentCelebration.data.nextButtonEnabled;
        e &&
          (this.currentCelebration.onClick
            ? this.currentCelebration.onClick(t)
            : this._removeCurrentCelebration('dismissed'));
      }
      _removeCelebration(e, t) {
        e.onRemove && e.onRemove({ type: t });
        const o = this.celebrationQueue.indexOf(e);
        this.currentIndex === o
          ? (window.clearTimeout(this.currentCelebrationTimeout),
            this.celebrationQueue.length > this.currentIndex + 1
              ? this._displayNextCelebration()
              : this._endCelebrationCeremony())
          : o > this.currentIndex && this.celebrationQueue.splice(o, 1);
      }
      _removeAllCelebrations() {
        for (let e = this.celebrationQueue.length - 1; 0 <= e; e--)
          this._removeCelebration(this.celebrationQueue[e], 'dismissed');
      }
      _removeCurrentCelebration(e) {
        const t = this.celebrationQueue[this.currentIndex];
        t && this._removeCelebration(t, e);
      }
      _displayNextCelebration() {
        this.currentIndex += 1;
        const e = this.celebrationQueue[this.currentIndex];
        e &&
          (this._setAnimationsEnabled(e),
          this._setHeader(e),
          this._setBackground(e),
          this._setContent(e),
          this._setVignetteHeight(e),
          this._setButtonState(e),
          e.onShow && e.onShow(),
          this._getTime(e) !== f.INFINITE &&
            (this.currentCelebrationTimeout = window.setTimeout(() => {
              this._removeCelebration(e, 'timeout');
            }, this._getTime(e))),
          (this.currentCelebration = u.Lodash.cloneDeep(e)));
      }
      _setContent(e) {
        if (!e.content) return;
        const t = e.behindVignette
          ? this.layer.querySelector('.celebration-background')
          : this.layer.querySelector('.celebration-content');
        if (t && e.content.domNode) {
          const o = function () {
            (t.innerHTML = ''), t.appendChild(e.content.domNode);
          };
          if (!this.currentCelebration) return o(), void this._fadeIn(t);
          this._fadeOutIn(t, o);
        }
      }
      _setVignetteHeight(e) {
        const t = this._getHeight(e);
        if (
          this.currentCelebration &&
          this._getHeight(this.currentCelebration) === t
        )
          return;
        const o = this.layer.querySelector('.celebration-banners');
        o.classList.add(t),
          (0, n.default)(y).map((e) => {
            y[e] !== t && o.classList.remove(y[e]);
          });
      }
      _setBackground(e) {
        const t = this.layer.querySelector('.celebration-background');
        if (
          !(
            this.currentCelebration &&
            this.currentCelebration.data.backgroundImageUrl ===
              e.data.backgroundImageUrl
          )
        ) {
          const o = function () {
            t.style.backgroundImage = 'url(' + e.data.backgroundImageUrl + ')';
          };
          return this.currentCelebration
            ? void this._fadeOutIn(t, o)
            : (o(), void this._fadeIn(t));
        }
      }
      _setAnimationsEnabled(e) {
        this.animationsEnabled = e.animationsEnabled;
        const t = this.layer.querySelector('.vignette-celebration');
        t &&
          (e.animationsEnabled
            ? t.classList.add('animate')
            : t.classList.remove('animate'));
      }
      _setHeader(e) {
        const t = e.data.header.title,
          o = e.data.header.titleSubtext,
          i = this.layer.querySelector('.celebration-header'),
          a = function () {
            (i.querySelector('.celebration-title-text').innerText = t),
              (i.querySelector('.celebration-title-subtext').innerText = o);
          };
        if (!this.currentCelebration) return a(), void this._fadeIn(i);
        let n = !0;
        (n =
          this._getHeight(this.currentCelebration) !== this._getHeight(e) ||
          this.currentCelebration.data.header.title !== t ||
          this.currentCelebration.data.header.titleSubtext !== o),
          n && this._fadeOutIn(i, a);
      }
      _setButtonState(e) {
        const t = e.data.nextButtonText,
          o = this.layer.querySelector('.footer-button-text'),
          i = function () {
            o.innerText = t;
          };
        if ('undefined' != typeof e.data.nextButtonEnabled) {
          const t = this.layer.querySelector('.footer-button');
          e.data.nextButtonEnabled
            ? t.removeAttribute('disabled')
            : t.setAttribute('disabled', '');
        }
        return this.currentCelebration
          ? void (
              (this.currentCelebration &&
                this.currentCelebration.data.nextButtonText ===
                  e.data.nextButtonText) ||
              this._fadeOutIn(o, i)
            )
          : (i(),
            void this._fadeIn(
              this.layer.querySelector('.footer-button-wrapper'),
            ));
      }
      _fadeOutIn(e, t, o = 0.4) {
        this._fadeOut(e, o).then(() => (t && t(), this._fadeIn(e, o)));
      }
      _fadeIn(e, t) {
        const o = new l.default((o) => {
          if ((e || o(), this.animationsEnabled)) {
            function i() {
              e.removeEventListener('animationend', i), o();
            }
            e.addEventListener('animationend', i),
              t && (e.style.animationDuration = t + 's');
          } else setTimeout(() => o(), t);
          e.classList.remove('fade-out'), e.classList.add('fade-in');
        });
        return o;
      }
      _fadeOut(e, t) {
        const o = new l.default((o) => {
          if ((e || o(), this.animationsEnabled)) {
            function i() {
              e.removeEventListener('animationend', i), o();
            }
            e.addEventListener('animationend', i),
              t && (e.style.animationDuration = t + 's');
          } else setTimeout(() => o(), t);
          e.classList.remove('fade-in'), e.classList.add('fade-out');
        });
        return o;
      }
      _getTime(e) {
        const t = 'string' == typeof e.timing ? e.timing.toUpperCase() : '';
        return f[t] || e.timing;
      }
      _getHeight(e) {
        let t = y.MEDIUM;
        return (
          e.height &&
            ((t = 'string' == typeof e.height ? e.height.toUpperCase() : ''),
            (t = y[t])),
          t
        );
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(115),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    class n {
      createMenus() {
        const e = n.document;
        'complete' === e.readyState
          ? this._createMenus()
          : e.addEventListener('DOMContentLoaded', this.createMenus.bind(this));
      }
      _createMenus() {
        const e = n.document;
        this.menu ||
          ((this.menu = e.createElement('lol-uikit-context-menu')),
          (this.subMenu = e.createElement('lol-uikit-context-menu')),
          this.subMenu.setOwner(this.menu));
      }
      setMenuItems(e) {
        this.menu && this.menu.setMenuItems(e);
      }
      setCustomMenuItems(e, t) {
        this.menu && this.menu.setCustomMenuItems(e, t);
      }
      filterVisible(e) {
        return a.default.filterVisible(e);
      }
      openAtEvent(e) {
        this.menu && this.menu.openAtEvent(e);
      }
      openAtRect(e) {
        this.menu && this.menu.openAtRect(e);
      }
      isMenuOpen() {
        return this.menu && this.menu.isOpen();
      }
      close() {
        this.menu && this.menu.close();
      }
      addCloseListener(e) {
        this.menu &&
          this.menu.contextMenuElement.addEventListener('closeContextMenu', e);
      }
      removeCloseListener(e) {
        this.menu &&
          this.menu.contextMenuElement.removeEventListener(
            'closeContextMenu',
            e,
          );
      }
      isTargetContainedBy(e) {
        return (
          !!(this.menu && this.menu.target) && e.contains(this.menu.target)
        );
      }
      isTargetConnected() {
        return (
          !!(this.menu && this.menu.target) && this.menu.target.isConnected
        );
      }
    }
    n.document = window.testsSandboxDoc
      ? window.testsSandboxDoc
      : window.document;
    const r = new n();
    r.createMenus(),
      (t.default = {
        setMenuItems: r.setMenuItems.bind(r),
        setCustomMenuItems: r.setCustomMenuItems.bind(r),
        filterVisible: r.filterVisible.bind(r),
        openAtEvent: r.openAtEvent.bind(r),
        openAtRect: r.openAtRect.bind(r),
        isMenuOpen: r.isMenuOpen.bind(r),
        close: r.close.bind(r),
        addCloseListener: r.addCloseListener.bind(r),
        removeCloseListener: r.removeCloseListener.bind(r),
        isTargetContainedBy: r.isTargetContainedBy.bind(r),
        isTargetConnected: r.isTargetConnected.bind(r),
      });
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(402),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    t.default = new (class {
      add(e, t) {
        return a.default.add(e, t);
      }
      remove(e) {
        a.default.remove(e);
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(135),
      n = i(a),
      r = o(5),
      l = i(r),
      s = o(18),
      d = i(s),
      p = o(13),
      c = i(p),
      u = o(12),
      g = i(u),
      m = o(16),
      h = i(m),
      b = o(66),
      f = i(b),
      y = o(89),
      v = i(y),
      x = o(49),
      k = i(x);
    const A = 'DEFAULT';
    t.default = new (class {
      constructor() {
        this.contextMap = new c.default();
      }
      add(e, t) {
        const o = this._computeDefaultOptions(t),
          i = this._createMetaNotification(e, o);
        return (
          o.dismissOtherNotifications && this._clearNotificationQueue(i.target),
          this._addNotificatonToQueue(i),
          this._processQueueState(i.target),
          {
            id: i.id,
            target: i.target,
            onRemove: i.onRemove,
            onCloseButtonClick: i.onCloseButtonClick,
          }
        );
      }
      remove(e) {
        const t = this._removeNotificationFromQueue(e);
        t && this._processQueueState(t.target);
      }
      _getLayer(e) {
        const t = document.createElement('div');
        return (
          e === A
            ? t.classList.add(
                'lol-uikit-contextual-notification-targetless-layer',
              )
            : t.classList.add(
                'lol-uikit-contextual-notification-targeted-layer',
              ),
          t
        );
      }
      _computeDefaultOptions(e = {}) {
        if (e.target) {
          if (!e.target.domNode instanceof Element)
            throw new Error(
              'ContextualNotificationController: target.domNode must be an HTMLElement in options',
            );
          if (e.position)
            throw new Error(
              'ContextualNotificationController: Cannot specific position for targeted notification',
            );
          const t = {
            orientation: 'top',
            anchor: { x: 'center', y: 'bottom' },
            offset: { x: 0, y: -20 },
            dismissable: !0,
            dismissOtherNotifications: !1,
            dismissOnTargetHide: !1,
          };
          return (
            (0, d.default)(t, e),
            t.target &&
              !t.target.anchor &&
              (t.target.anchor = { anchor: { x: 'center', y: 'top' } }.anchor),
            t
          );
        } else {
          const t = { dismissable: !0 };
          return (0, d.default)(t, e), t;
        }
      }
      _createMetaNotification(e, t) {
        let o = e;
        'string' == typeof o &&
          (o = f.default.contentBlockNotification(
            o,
            'lol-uikit-contextual-notification-content',
          ));
        let i;
        const a = new l.default((e) => {
          i = e;
        });
        let r;
        const s = new l.default((e) => {
            r = e;
          }),
          d = {
            id: (0, n.default)(),
            target: t.target ? t.target.domNode : A,
            displayed: !1,
            content: o,
            options: t,
            onRemove: s,
            resolveOnRemovePromise: r,
            onCloseButtonClick: a,
            resolveOnCloseButtonClickPromise: i,
          };
        return t.target && delete d.options.target.domNode, d;
      }
      _addNotificatonToQueue(e) {
        let t = this.contextMap.get(e.target);
        t || (t = { layer: null, queue: [] }),
          t.queue.push(e),
          this.contextMap.set(e.target, t);
      }
      _removeNotificationFromQueue(e) {
        const t = this.contextMap.get(e.target);
        if (!t) return;
        const o = t.queue.find(function (t) {
          return e.id === t.id;
        });
        if (o)
          return (
            (t.queue = t.queue.filter(function (e) {
              return e.id !== o.id;
            })),
            o.displayed && (h.default.removeLayer(t.layer), (t.layer = null)),
            0 === t.queue.length &&
              (this.contextMap.delete(o.target),
              v.default.removeTarget(o.target)),
            o.resolveOnRemovePromise(),
            o
          );
      }
      _clearNotificationQueue(e) {
        const t = this.contextMap.get(e);
        t &&
          t.queue &&
          t.queue.length &&
          (t.queue.forEach((e) => {
            t.layer &&
              e.displayed &&
              (h.default.removeLayer(t.layer), (t.layer = null)),
              e.resolveOnRemovePromise();
          }),
          this.contextMap.delete(e));
      }
      _processQueueState(e) {
        const t = this.contextMap.get(e);
        if (t) {
          const o = t.queue[0];
          o.displayed ||
            ((t.layer = this._getLayer(e)),
            o.target === A
              ? this._displayTargetlessNotification(o)
              : this._displayTargetedNotification(o));
        }
      }
      _displayTargetlessNotification(e) {
        const t = this.contextMap.get(e.target),
          o = g.default.create('DialogToast', {
            contents: e.content,
            dismissable: e.options.dismissable,
          }),
          i = g.default.getDOMNode(o);
        if (
          (i.addEventListener('dialogFrameDismissed', () => {
            e.resolveOnCloseButtonClickPromise(),
              this._removeNotificationFromQueue(e),
              this._processQueueState(e.target);
          }),
          t.layer.appendChild(i),
          h.default.insertLayer(t.layer, 0),
          (e.displayed = !0),
          e.options.position)
        ) {
          const o = e.options.position;
          (t.layer.style.position = 'absolute'),
            (t.layer.style.top = o.top ? o.top + 'px' : 'auto'),
            (t.layer.style.left = o.left ? o.left + 'px' : 'auto'),
            (t.layer.style.bottom = o.bottom ? o.bottom + 'px' : 'auto'),
            (t.layer.style.right = o.right ? o.right + 'px' : 'auto');
        }
      }
      _displayTargetedNotification(e) {
        const t = this.contextMap.get(e.target),
          o = document.createElement('lol-uikit-flyout-frame');
        o.addEventListener('closeButtonClick', () => {
          e.resolveOnCloseButtonClickPromise(),
            this._removeNotificationFromQueue(e),
            this._processQueueState(e.target);
        }),
          o.setAttribute('orientation', e.options.orientation),
          o.setAttribute('animated', !1),
          o.setAttribute('dismissable', e.options.dismissable),
          o.setAttribute('show', !0),
          (o.style.position = 'absolute'),
          o.appendChild(e.content),
          t.layer.appendChild(o),
          h.default.insertLayer(t.layer, 0),
          (e.displayed = !0),
          e.options.dismissOnTargetHide &&
            v.default.addTarget(e.target, () => {
              this.remove(e);
            }),
          this._setTargetedNotificationPosition(t.layer, {
            element: o,
            target: e.target,
            targetAnchor: e.options.target.anchor,
            elementAnchor: e.options.anchor,
            offset: e.options.offset,
            areaRestriction: 'whole-window',
          });
      }
      _setTargetedNotificationPosition(e, t) {
        const o = k.default.getPositioningStrategy('flip')(t);
        o &&
          ((e.style.position = 'absolute'),
          (e.style.top = o.top + 'px'),
          (e.style.left = o.left + 'px'),
          (e.style['z-index'] = 8e3));
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(65),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = o(12);
    t.default = new (class {
      constructor() {
        this.type = 'Modal';
      }
      add(e) {
        const t = {
            type: 'Modal',
            children: [e],
            show: e.show,
            prepend: e.prepend,
            owner: e.owner,
            ComponentFactory: e.ComponentFactory || n,
          },
          o = a.default.handleNotification(t);
        return o.children[0];
      }
      remove(e, t) {
        return a.default.remove(e, t);
      }
      getDOMNode(e) {
        e.type = e.type || this.type;
        const t = a.default.getDOMNode(e);
        return t
          ? t
          : (a.default.initializeDomNodes(e), a.default.getDOMNode(e));
      }
      getActiveModal() {
        const e = a.default.getActiveModal();
        return (e && e.children[0]) || null;
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = o(405),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = o(12);
    t.default = new (class {
      assign(e, t, o, i) {
        (i.ComponentFactory = i.ComponentFactory || n),
          this.unassign(e),
          a.default.registerTarget(e, t, o, i);
      }
      unassign(e) {
        a.default.unregisterTarget(e);
      }
      sendEvent() {}
      isActive() {
        return !1;
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = o(59),
      n = i(a),
      r = o(16),
      l = i(r),
      s = o(120),
      d = i(s),
      p = o(0),
      c = o(49),
      u = i(c);
    e.exports = new (class {
      constructor() {
        (this.targets = new n.default()),
          (this.layer = this.createLayer()),
          (this.popout = this.layer.querySelector('.popout'));
      }
      createLayer() {
        const e = document.createElement('lol-uikit-full-page-backdrop'),
          t = document.createElement('div');
        return (
          t.classList.add('popout'),
          (t.style.position = 'absolute'),
          (t.style.overflow = 'visible'),
          e.appendChild(t),
          e
        );
      }
      showLayer() {
        l.default.addLayer(this.layer);
      }
      hideLayer() {
        l.default.removeLayer(this.layer);
      }
      defaults(e) {
        return p.Lodash.defaults(e || {}, {
          showEvent: 'click',
          hideEvent: 'click',
          targetAnchor: { x: 'right', y: 'center' },
          anchor: null,
          offset: { x: 0, y: 0 },
          positioningStrategy: 'flip',
          restrictArea: 'safe-window',
        });
      }
      registerTarget(e, t, o, i) {
        const a = this.defaults(i),
          n = {
            show: this.showPopout.bind(this, e),
            hide: this.hidePopout.bind(this),
            toggle: this.togglePopout.bind(this, e),
          };
        p.Lodash.isFunction(t) && (t = p.Lodash.partial(t, e)),
          this.targets.set(e, {
            renderer: t,
            data: o,
            options: a,
            eventHandlers: n,
          }),
          (0, p.jQuery)(e).each(function () {
            a.showEvent === a.hideEvent
              ? this.addEventListener(a.showEvent, n.toggle)
              : (this.addEventListener(a.showEvent, n.show),
                this.addEventListener(a.hideEvent, n.hide));
          });
      }
      unregisterTarget(e) {
        const t = this.targets.get(e);
        t &&
          t.eventHandlers &&
          (t.eventHandlers.hide(),
          (0, p.jQuery)(e).each(function () {
            this.removeEventListener(t.options.showEvent, t.eventHandlers.show),
              this.removeEventListener(
                t.options.hideEvent,
                t.eventHandlers.hide,
              ),
              this.removeEventListener(
                t.options.showEvent,
                t.eventHandlers.toggle,
              ),
              this.removeEventListener(
                t.options.hideEvent,
                t.eventHandlers.toggle,
              );
          })),
          this.targets.delete(e);
      }
      positionPopout(e, t) {
        const o = this.targets.get(e),
          i = o.options,
          a = u.default.getPositioningStrategy(i.positioningStrategy),
          n = {
            element: t,
            target: e,
            targetAnchor: i.targetAnchor,
            elementAnchor: i.anchor,
            offset: i.offset,
            areaRestriction: i.restrictArea,
          },
          r = a(n);
        if (!r) return;
        (this.popout.style.top = r.top + 'px'),
          (this.popout.style.left = r.left + 'px');
        const l = u.default.elementRect(t),
          s = u.default.elementRect(e),
          d = u.default.relativePosition(e, this.popout),
          c = this;
        if (
          ((0, p.jQuery)(t).each(function () {
            this.dispatchEvent(c.getPositioningEvent(d, s, l));
          }),
          !1 !== i.backdropCutout)
        ) {
          const t = i.backdropCutout || e;
          this.layer.dispatchEvent(c.getCutoutEvent(u.default.elementRect(t)));
        }
      }
      togglePopout(e, t) {
        const o = this.targets.get(e);
        return this.layer.parentElement
          ? o.eventHandlers.hide(t)
          : o.eventHandlers.show(t);
      }
      showPopout(e) {
        const t = this.targets.get(e),
          o = function () {
            if (-1 === [].slice.call(this.popout.children).indexOf(t.domNode)) {
              for (; this.popout.firstChild; )
                this.popout.removeChild(this.popout.firstChild);
              this.popout.appendChild(t.domNode);
            }
            this.showLayer(e),
              (0, d.default)(t.domNode).then(
                function () {
                  this.positionPopout(e, t.domNode),
                    t.domNode.addEventListener(
                      'closeButtonClick',
                      t.eventHandlers.hide,
                    );
                }.bind(this),
              );
          }.bind(this);
        if (!t.domNode) {
          const e = t.options.ComponentFactory.create(t.renderer, t.data);
          if (
            ((t.domNode = t.options.ComponentFactory.getDOMNode(e)),
            e.renderPromise)
          )
            return void (e.renderPromise = e.renderPromise.then(o.bind(this)));
        }
        o();
      }
      dispatchNewEvent(e, t) {
        (0, p.jQuery)(e).each(function () {
          this.dispatchEvent(new Event(t));
        });
      }
      hidePopout() {
        this.hideLayer();
      }
      getPositioningEvent(e, t, o) {
        const i = new Event('positioned');
        return (i.offset = e), (i.targetRect = t), (i.rect = o), i;
      }
      getCutoutEvent(e) {
        const t = new Event('cutout');
        return (t.cutoutRect = e), t;
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    var i = o(407),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    const n = o(12);
    e.exports = {
      assignFlyout: function (e, t, o, i) {
        (i.ComponentFactory = i.ComponentFactory || n),
          this.unassignFlyout(e),
          a.default.registerTarget(e, t, o, i);
      },
      unassignFlyout: function (e) {
        a.default.unregisterTarget(e);
      },
      sendEvent: function (e, t) {
        a.default.dispatchNewEvent(e, t);
      },
      repositionCaret: function (e) {
        a.default.flyout && a.default.flyout.setAttribute('caretoffset', e);
      },
      isActive: function () {
        return !!a.default.layer.parentElement;
      },
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e, t, o) {
      const i = new Event('positioned');
      return (i.offset = e), (i.targetRect = t), (i.rect = o), i;
    }
    function n(e) {
      const t = new Event('cutout');
      return (t.cutoutRect = e), t;
    }
    var r = o(48),
      l = i(r),
      s = o(92),
      d = i(s),
      p = o(59),
      c = i(p),
      u = o(5),
      g = i(u),
      m = o(0),
      h = i(m),
      b = o(16),
      f = i(b),
      y = o(49),
      v = i(y),
      x = o(89),
      k = i(x);
    const A = function (e) {
        return new g.default(function (t) {
          (function o() {
            e.clientWidth ? t() : window.requestAnimationFrame(o);
          })();
        });
      },
      w = function (e) {
        document.addEventListener('keydown', (t) => {
          if (t && t.key === 'Escape') {
            const t = e();
            t && t.options.closeWhenEscapePressed && t.eventHandlers.hide();
          }
        });
      },
      _ = function () {
        (this.targets = new c.default()), (this.activeTarget = null);
        var e = this.createLayer(),
          t = (0, d.default)(e, 2);
        (this.layer = t[0]),
          (this.overlay = t[1]),
          (this.overlayEvents = []),
          (this.flyoutEvents = []),
          (this.flyout = this.layer.querySelector('.flyout'));
        w(
          (() =>
            this.activeTarget
              ? this.targets.get(this.activeTarget)
              : null).bind(this),
        );
      };
    (_.prototype.createLayer = function () {
      const e = document.createElement('lol-uikit-full-page-backdrop'),
        t = document.createElement('lol-uikit-flyout-frame'),
        o = document.createElement('lol-uikit-full-page-backdrop');
      return (
        e.classList.add('flyout-container'),
        (e.style.background = 'none'),
        (e.style.pointerEvents = 'none'),
        o.classList.add('flyout-overlay'),
        (o.style.background = 'none'),
        (o.style.pointerEvents = 'all'),
        t.classList.add('flyout'),
        (t.style.position = 'absolute'),
        (t.style.overflow = 'visible'),
        e.appendChild(o),
        e.appendChild(t),
        [e, o]
      );
    }),
      (_.prototype.showLayer = function () {
        this.flyout.setAttribute('show', !0), f.default.addLayer(this.layer);
      }),
      (_.prototype.hideLayer = function () {
        return (
          this.removeAllEventListeners(),
          this.flyout.setAttribute('show', !1),
          (this.delayedHideLayerPromise = new g.default((e) =>
            setTimeout(e, 133),
          ).then(() => {
            (this.delayedHideLayerPromise = null),
              f.default.removeLayer(this.layer);
          })),
          this.delayedHideLayerPromise
        );
      }),
      (_.prototype.defaults = function (e) {
        return m.Lodash.defaults(e || {}, {
          showEvent: 'click',
          hideEvent: 'click',
          targetAnchor: { x: 'right', y: 'center' },
          tooltipAnchor: { x: 'left', y: 'center' },
          anchor: null,
          offset: { x: 0, y: 0 },
          closeWhenOutsideClicked: !0,
          closeWhenInsideClicked: !1,
          closeWhenEscapePressed: !0,
          dimBackdrop: !1,
          domNode: null,
        });
      }),
      (_.prototype.registerTarget = function (e, t, o, i) {
        const a = this.defaults(i),
          n = {
            show: this.showFlyout.bind(this, e),
            hide: this.hideFlyout.bind(this, e),
            toggle: this.toggleFlyout.bind(this, e),
          };
        m.Lodash.isFunction(t) && (t = m.Lodash.partial(t, e)),
          this.targets.set(e, {
            renderer: t,
            data: o,
            options: a,
            eventHandlers: n,
            domNode: a.domNode,
          }),
          (0, m.jQuery)(e).each(function () {
            a.showEvent === a.hideEvent
              ? this.addEventListener(a.showEvent, n.toggle)
              : (this.addEventListener(a.showEvent, n.show),
                this.addEventListener(a.hideEvent, n.hide));
          });
      }),
      (_.prototype.unregisterTarget = function (e) {
        const t = this.targets.get(e);
        t &&
          t.eventHandlers &&
          (t.eventHandlers.hide(),
          (0, m.jQuery)(e).each(function () {
            this.removeEventListener(t.options.showEvent, t.eventHandlers.show),
              this.removeEventListener(
                t.options.hideEvent,
                t.eventHandlers.hide,
              ),
              this.removeEventListener(
                t.options.showEvent,
                t.eventHandlers.toggle,
              ),
              this.removeEventListener(
                t.options.hideEvent,
                t.eventHandlers.toggle,
              );
          }),
          this.targets.delete(e),
          t.potentialApp &&
            'function' == typeof t.potentialApp.onRemove &&
            t.potentialApp.onRemove());
      }),
      (_.prototype.dispatchNewEvent = function (e, t) {
        (0, m.jQuery)(e).each(function () {
          this.dispatchEvent(new Event(t));
        });
      }),
      (_.prototype.addOverlayEventListener = function (e, t) {
        this.overlay.addEventListener(e, t), this.overlayEvents.push([e, t]);
      }),
      (_.prototype.addFlyoutEventListener = function (e, t) {
        this.flyout.addEventListener(e, t), this.flyoutEvents.push([e, t]);
      }),
      (_.prototype.removeAllEventListeners = function () {
        for (; this.overlayEvents.length; )
          this.overlay.removeEventListener.apply(
            this.overlay,
            this.overlayEvents.pop(),
          );
        for (; this.flyoutEvents.length; )
          this.flyout.removeEventListener.apply(
            this.flyout,
            this.flyoutEvents.pop(),
          );
      }),
      (_.prototype.positionFlyout = function (e, t) {
        const o = this.targets.get(e),
          i = o.options,
          r = {
            element: t,
            target: e,
            targetAnchor: i.targetAnchor,
            elementAnchor: i.tooltipAnchor,
            offset: i.offset,
            areaRestriction: 'whole-window',
          },
          l = v.default.getPositioningStrategy('flip')(r);
        if (!l) return;
        (this.flyout.style.top = l.top + 'px'),
          (this.flyout.style.left = l.left + 'px');
        const s = v.default.elementRect(t),
          d = v.default.elementRect(e),
          p = v.default.relativePosition(e, this.flyout);
        if (
          ((0, m.jQuery)(t).each(function () {
            this.dispatchEvent(a(p, d, s));
          }),
          (this.layer.style.background = i.dimBackdrop ? null : 'none'),
          !1 !== i.backdropCutout)
        ) {
          const t = i.backdropCutout || e;
          this.overlay.dispatchEvent(n(v.default.elementRect(t)));
        } else this.overlay.dispatchEvent(n(null));
      }),
      (_.prototype.toggleFlyout = function (e, t) {
        const o = this.targets.get(e);
        return this.layer.parentElement
          ? o.eventHandlers.hide(t)
          : o.eventHandlers.show(t);
      }),
      (_.prototype.showFlyout = function (e) {
        const t = this.targets.get(e);
        this.delayedHideLayerPromise && (this.delayedHideLayerPromise = null);
        const o = function () {
          if (this.activeTarget !== e) {
            for (
              this.activeTarget &&
                (k.default.removeTarget(this.activeTarget),
                this.dispatchNewEvent(this.activeTarget, 'willHide')),
                this.flyout.firstChild && this.removeAllEventListeners();
              this.flyout.firstChild;

            )
              this.flyout.removeChild(this.flyout.firstChild);
            this.activeTarget &&
              this.dispatchNewEvent(this.activeTarget, 'didHide'),
              this.flyout.setAttribute('orientation', t.options.orientation),
              this.flyout.setAttribute('animated', t.options.animated),
              this.flyout.setAttribute('caretoffset', t.options.caretOffset),
              this.flyout.setAttribute('borderless', t.options.borderless),
              this.flyout.setAttribute('caretless', t.options.caretless),
              (this.flyout.style.top = '0px'),
              (this.flyout.style.left = '0px'),
              (this.activeTarget = e),
              this.flyout.appendChild(t.domNode);
          }
          this.showLayer(e),
            g.default
              .race([new g.default((e) => setTimeout(e, 500)), A(t.domNode)])
              .then(
                function () {
                  this.positionFlyout(e, t.domNode),
                    t.options.closeWhenOutsideClicked &&
                      this.addOverlayEventListener(
                        'click',
                        t.eventHandlers.hide,
                      ),
                    t.options.closeWhenInsideClicked &&
                      this.addFlyoutEventListener(
                        'click',
                        t.eventHandlers.hide,
                      ),
                    k.default.addTarget(e, () => {
                      this.hideFlyout(e);
                    }),
                    (0, l.default)(t.eventHandlers).forEach(
                      function (e) {
                        this.addOverlayEventListener(e, t.eventHandlers[e]);
                      }.bind(this),
                    );
                }.bind(this),
              );
        }.bind(this);
        if (!t.domNode) {
          const e = t.options.ComponentFactory.create(t.renderer, t.data);
          if (
            ((t.potentialApp = e),
            (t.domNode = t.options.ComponentFactory.getDOMNode(e)),
            e.renderPromise)
          )
            return void (e.renderPromise = e.renderPromise.then(o.bind(this)));
        }
        o(), this.dispatchNewEvent(e, 'didShow');
      }),
      (_.prototype.hideFlyout = function (e) {
        this.activeTarget !== e ||
          (this.layer.parentElement &&
            (k.default.removeTarget(e),
            this.dispatchNewEvent(e, 'willHide'),
            this.hideLayer().then(
              function () {
                for (; this.flyout.firstChild; )
                  this.flyout.removeChild(this.flyout.firstChild);
                this.dispatchNewEvent(e, 'didHide');
              }.bind(this),
            ),
            (this.activeTarget = null)));
      }),
      (e.exports = new _());
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e, t, o, i) {
      const a = i.parented ? 'about:blank?parented=1' : 'about:blank',
        r = n(i);
      return t || (o || window).open(a, e, r);
    }
    function n(e) {
      const t = u.Lodash.cloneDeep(A);
      for (const o in A) void 0 !== e[o] && (t[o] = e[o]);
      return (0, l.default)(t)
        .map((e) => e + '=' + t[e])
        .join(',');
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.MockedWindow = t.inChrome = void 0);
    var r = o(48),
      l = i(r),
      s = o(5),
      d = i(s),
      p = o(91),
      c = i(p),
      u = o(0),
      g = o(94),
      m = i(g),
      h = o(61),
      b = i(h),
      f = o(90),
      y = i(f);
    const v = window.testsSandboxDoc || window.document,
      x = (t.inChrome = 'undefined' == typeof window.riotInvoke),
      k = x
        ? {
            getRect(e) {
              return new b.default(
                e.scrollX,
                e.scrollY,
                e.innerWidth,
                e.innerHeight,
              );
            },
            getPointFromEvent: function (e) {
              let t = e.pageX,
                o = e.pageY;
              const i =
                e.target && e.target.ownerDocument.defaultView.frameElement;
              if (i) {
                const e = i.getBoundingClientRect();
                (t += e.left), (o += e.top);
              }
              return new b.default(t, o);
            },
          }
        : {
            getRect(e) {
              return new b.default(
                e.screen.availLeft,
                e.screen.availTop,
                e.screen.availWidth,
                e.screen.availHeight,
              );
            },
            getPointFromEvent: function (e) {
              return new b.default(e.screenX, e.screenY);
            },
          },
      A = { left: 0, top: 0, width: 100, height: 100 };
    class w {
      constructor(e, t = '', o, i, a = {}) {
        this.init(e, t, o, i, a);
      }
      init(e, t, o, i, n) {
        (this._window = a(t, o, i, n)),
          this._initValues(n),
          n.showInTaskbar || this.invoke('Window.RemoveFromTaskbar'),
          this.invoke('Window.Hide');
        const r = this._window,
          l = r.document;
        this.initStyles(),
          m.default.registerCustomElements(l),
          e ? this.setContent(e) : (this._element = r.document.body),
          r.addEventListener('keydown', function (e) {
            (e.ctrlKey || e.metaKey) &&
              e.altKey &&
              73 === e.keyCode &&
              r.riotInvoke({
                request: (0, c.default)({
                  name: 'Window.ShowDevTools',
                  params: [],
                }),
              });
          }),
          r.addEventListener('unload', () => this.cleanupStyles());
      }
      _initValues(e) {
        (this.width = e.width || 0),
          (this.height = e.height || 0),
          (this.visible = !1),
          (this.dragEnabled = !0),
          (this.resizeEnabled = !1),
          (this.minimizeSync = !1);
      }
      initStyles() {
        const e = this._window.document,
          t = e.querySelector('head'),
          o = e.createElement('base');
        o.setAttribute('href', v.baseURI), t.appendChild(o);
        const i = e.createElement('style');
        (i.type = 'text/css'),
          (i.innerHTML =
            'html,body{height:100%; margin: 0; overflow: hidden;}'),
          t.appendChild(i);
        const a = (0, u.getProvider)().get('rcp-fe-lol-typekit');
        a.registerDocument(e);
      }
      cleanupStyles() {
        const e = (0, u.getProvider)().get('rcp-fe-lol-typekit'),
          t = this._window.document;
        e.unregisterDocument(t);
      }
      getNativeWindow() {
        return this._window;
      }
      setDragEnabled(e) {
        return (
          (this.dragEnabled = e),
          this.invoke('Mouse.SetDragEnabled', this.dragEnabled)
        );
      }
      setResizeEnabled(e) {
        if (this.resizeEnabled !== e) {
          if (e) {
            const e = this._window.document,
              t = this._window.document.body,
              o = e.createElement('div');
            o.setAttribute('id', 'window-resize-element'),
              (o.style.width = '20px'),
              (o.style.height = '20px'),
              (o.style.cursor = 'nwse-resize'),
              (o.style.position = 'fixed'),
              (o.style.bottom = 0),
              (o.style.right = 0),
              (o.style.zIndex = 1e3),
              t.appendChild(o);
          } else {
            const e = this._window.document.querySelector(
              '#window-resize-element',
            );
            e && this._window.document.body.removeChild(e);
          }
          return (
            (this.resizeEnabled = e),
            this.invoke('Mouse.SetResizeEnabled', this.resizeEnabled)
          );
        }
      }
      setResizeBounds(e, t, o, i) {
        return d.default.all([
          this.invoke('Mouse.SetResizeBounds', e, t, o, i),
          this.invoke('Window.SetResizeBounds', e, t, o, i),
        ]);
      }
      setMinimizeSync(e) {
        return (
          (this.minimizeSync = e),
          this.invoke('Window.SyncMinimize', this.minimizeSync)
        );
      }
      setContent(e) {
        if (!e) return d.default.resolve();
        const t = this._window.document.body;
        return (
          (t.innerHTML = ''),
          (this._element = e),
          t.appendChild(e),
          this.autosize()
        );
      }
      removeContent() {
        if (this._element) {
          const e = this._window.document.body;
          (e.innerHTML = ''), this._element.remove(), (this._element = null);
        }
      }
      addStyles(e) {
        const t = this._window.document,
          o = t.head,
          i = t.createElement('style');
        (i.type = 'text/css'),
          i.appendChild(t.createTextNode(e)),
          o.appendChild(i);
      }
      linkStyles(e) {
        const t = this._window.document,
          o = t.head,
          i = t.createElement('link');
        (i.rel = 'stylesheet'), (i.href = e), o.appendChild(i);
      }
      show() {
        const e = new CustomEvent('showing', { cancelable: !0 });
        return (this._element.dispatchEvent(e), e.defaultPrevented)
          ? d.default.resolve(!1)
          : ((this.visible = !0),
            this.invoke('Window.Show').then(
              () => (this._element.dispatchEvent(new CustomEvent('show')), !0),
            ));
      }
      hide() {
        const e = new CustomEvent('hiding', { cancelable: !0 });
        return (this._element.dispatchEvent(e), e.defaultPrevented)
          ? d.default.resolve(!1)
          : ((this.visible = !1),
            this.invoke('Window.Hide').then(
              () => (this._element.dispatchEvent(new CustomEvent('hide')), !0),
            ));
      }
      minimize() {
        return this.invoke('Window.Minimize');
      }
      restore() {
        return this.invoke('Window.Restore');
      }
      close() {
        return (
          this._element.dispatchEvent(new CustomEvent('closing')),
          (this.visible = !1),
          this._window.close(),
          this._element.dispatchEvent(new CustomEvent('close')),
          !0
        );
      }
      closed() {
        return this._window.closed;
      }
      moveTo(e, t) {
        return this.invoke('Window.MoveTo', e, t);
      }
      resizeTo(e, t) {
        return (
          (this.width = e),
          (this.height = t),
          this.invoke('Window.ResizeTo', e, t)
        );
      }
      autosize() {
        return (
          (this._element.style.position = 'absolute'),
          (this.width = this._element.offsetWidth),
          (this.height = this._element.offsetHeight),
          (this._element.style.position = ''),
          this.invoke('Window.ResizeTo', this.width, this.height)
        );
      }
      activate() {
        return this.invoke('Window.Activate');
      }
      setDragBarHeight(e) {
        return this.invoke('Mouse.SetDragBarHeight', e);
      }
      setTitle(e) {
        return this.invoke('Window.SetTitle', e);
      }
      invoke(e) {
        const t = Array.prototype.slice.call(arguments, 1);
        return new d.default((o) => {
          this._window.riotInvoke({
            request: (0, c.default)({ name: e, params: t }),
            onSuccess: o,
          });
        });
      }
      getWindowInfo() {
        return this._window.riotInvoke
          ? this.invoke('Window.ScreenData').then((e) =>
              JSON.parse(JSON.parse(e).result),
            )
          : d.default.resolve({
              screenX: window.screenX,
              screenY: window.screenY,
              screenWidth: window.screen.width,
              screenHeight: window.screen.height,
              screenAvailWidth: window.screen.availWidth,
              screenAvailHeight: window.screen.availHeight,
              screenAvailLeft: window.screen.availLeft,
              screenAvailTop: window.screen.availTop,
              windowWidth: window.outerWidth,
              windowHeight: window.outerHeight,
              windowActivated: !v.hidden,
              windowMinimized: v.hidden,
              zoomScale: window.devicePixelRatio,
            });
      }
      getWindowRect() {
        return this.getWindowInfo().then(
          (e) =>
            new b.default(e.screenX, e.screenY, e.windowWidth, e.windowHeight),
        );
      }
      center() {
        const e = new b.default(0, 0, this.width, this.height);
        return (
          e.centerWithin(k.getRect(this._window)), this.moveTo(e.left, e.top)
        );
      }
      centerWithinParent() {
        return this.invoke('Window.CenterWithinParent');
      }
      centerWithinMainWindow() {
        return y.default.getScreenInfo().then((e) => {
          const t = e.zoomScale,
            o = new b.default(0, 0, this.width * t, this.height * t),
            i = new b.default(
              e.screenX,
              e.screenY,
              e.windowWidth,
              e.windowHeight,
            );
          o.centerWithin(i),
            (o.left += e.screenX),
            (o.top += e.screenY),
            this.moveTo(o.left, o.top);
        });
      }
      moveNearMouseClick(e) {
        const t = k.getPointFromEvent(e),
          o = new b.default(0, 0, this.width, this.height);
        return o.place(t, k.getRect(this._window)), this.moveTo(o.left, o.top);
      }
      moveNearBoundingRect(e) {
        const t = new b.default(0, 0, this.width, this.height);
        return t.place(e, k.getRect(this._window)), this.moveTo(t.left, t.top);
      }
      postMessage(e) {
        this._window.postMessage(e, '*');
      }
      addListener(e, t) {
        this._window.addEventListener(e, t);
      }
      removeListener(e, t) {
        this._window.removeEventListener(e, t);
      }
      static getElementRectFromEvent(e, t) {
        const o = t.screenX - t.clientX,
          i = t.screenY - t.clientY,
          a = e.ownerDocument.defaultView,
          n = e.getBoundingClientRect(),
          r = x ? a.scrollX : o,
          l = x ? a.scrollY : i;
        return new b.default(n.left + r, n.top + l, n.width, n.height);
      }
    }
    t.default = w;
    class _ extends w {
      init(e) {
        (this._element = v.createElement('div')), e && this.setContent(e);
        const t = this._element.style;
        (t.position = 'absolute'),
          (t.zIndex = 100),
          (this._dragBarHeight = 5),
          (this.visible = !1),
          (this.onMouseDown = this.onMouseDown.bind(this)),
          (this.onMouseMove = this.onMouseMove.bind(this)),
          (this.onMouseUp = this.onMouseUp.bind(this)),
          this._element.addEventListener('mousedown', this.onMouseDown),
          (this._window = window);
      }
      setContent(e) {
        (this._element.textContent = ''), this._element.appendChild(e);
      }
      get width() {
        return this._element.offsetWidth;
      }
      get height() {
        return this._element.offsetHeight;
      }
      show() {
        return super
          .show()
          .then((e) => (e ? v.body.appendChild(this._element) : null));
      }
      hide() {
        return super.hide().then((e) => (e ? this._element.remove() : null));
      }
      moveTo(e, t) {
        return (
          (this._element.style.left = e + 'px'),
          (this._element.style.top = t + 'px'),
          d.default.resolve()
        );
      }
      resizeTo(e, t) {
        return (
          (this._element.style.width = e + 'px'),
          (this._element.style.height = t + 'px'),
          d.default.resolve()
        );
      }
      autosize() {
        return (
          (this._element.style.width = ''),
          (this._element.style.height = ''),
          d.default.resolve()
        );
      }
      activate() {
        return window.focus(), d.default.resolve();
      }
      setDragBarHeight(e) {
        return (this._dragBarHeight = e), d.default.resolve();
      }
      onMouseDown(e) {
        0 === e.button &&
          e.offsetY <= this._dragBarHeight &&
          (e.preventDefault(),
          (this._mouseOffset = { x: -e.offsetX, y: -e.offsetY }),
          v.addEventListener('mousemove', this.onMouseMove),
          v.addEventListener('mouseup', this.onMouseUp));
      }
      onMouseMove(e) {
        if (0 !== e.button) this.onMouseUp();
        else {
          const t = new b.default(
            e.pageX + this._mouseOffset.x,
            e.pageY + this._mouseOffset.y,
            this.width,
            this.height,
          );
          t.fitWithin(this.container.dimensions), this.moveTo(t.left, t.top);
        }
      }
      onMouseUp() {
        v.removeEventListener('mouseup', this.onMouseUp),
          v.removeEventListener('mousemove', this.onMouseMove);
      }
      invoke() {
        return d.default.resolve();
      }
    }
    t.MockedWindow = _;
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(18),
      n = i(a),
      r = o(5),
      l = i(r),
      s = o(61),
      d = i(s);
    const p = {
      get rect() {
        return new d.default(
          window.scrollX,
          window.scrollY,
          window.innerWidth,
          window.innerHeight,
        );
      },
      getPointFromEvent: function (e) {
        return new d.default(e.pageX, e.pageY);
      },
    };
    class c {
      constructor(e) {
        (this._element = document.createElement('div')), this.setContent(e);
        const t = this._element.style;
        (t.position = 'absolute'),
          (t.zIndex = 100),
          (this._dragBarHeight = 5),
          (this.visible = !1),
          (this._closed = !1),
          (this.onMouseDown = this.onMouseDown.bind(this)),
          (this.onMouseMove = this.onMouseMove.bind(this)),
          (this.onMouseUp = this.onMouseUp.bind(this)),
          this._element.addEventListener('mousedown', this.onMouseDown);
      }
      get width() {
        return this._element.offsetWidth;
      }
      get height() {
        return this._element.offsetHeight;
      }
      setContent(e) {
        e &&
          ((this._element.innerHTML = ''),
          this._element.appendChild(e),
          this.autosize());
      }
      addStyles(e) {
        var t = document;
        const o = t.head,
          i = document.createElement('style');
        (i.type = 'text/css'),
          i.appendChild(document.createTextNode(e)),
          o.appendChild(i);
      }
      linkStyles(e) {
        var t = document;
        const o = t.head,
          i = document.createElement('link');
        (i.rel = 'stylesheet'), (i.href = e), o.appendChild(i);
      }
      show() {
        const e = window.testsSandbox || document.body,
          t = new CustomEvent('showing', { cancelable: !0 });
        return (
          (this._element.dispatchEvent(t), !t.defaultPrevented) &&
          ((this.visible = !0),
          e.appendChild(this._element),
          this._element.dispatchEvent(new CustomEvent('show')),
          !0)
        );
      }
      hide() {
        const e = new CustomEvent('hiding', { cancelable: !0 });
        return (
          (this._element.dispatchEvent(e), !e.defaultPrevented) &&
          ((this.visible = !1),
          this._element.remove(),
          this._element.dispatchEvent(new CustomEvent('hide')),
          !0)
        );
      }
      close() {
        return (
          this._element.dispatchEvent(new CustomEvent('closing')),
          (this._closed = !0),
          (this.visible = !1),
          this._element.remove(),
          this._element.dispatchEvent(new CustomEvent('close')),
          !0
        );
      }
      closed() {
        return this._closed;
      }
      moveTo(e, t) {
        (this._element.style.left = e + 'px'),
          (this._element.style.top = t + 'px');
      }
      resizeTo(e, t) {
        (this._element.style.width = e + 'px'),
          (this._element.style.height = t + 'px');
      }
      autosize() {
        (this._element.style.width = ''), (this._element.style.height = '');
      }
      activate() {
        window.focus();
      }
      setDragBarHeight(e) {
        this._dragBarHeight = e;
      }
      center() {
        const e = new d.default(0, 0, this.width, this.height);
        e.centerWithin(p.rect), this.moveTo(e.left, e.top);
      }
      centerWithinMainWindow() {
        return new l.default((e) => {
          this.center(), e();
        });
      }
      getNativeWindow() {
        return {
          requestAnimationFrame: function (e) {
            e();
          },
        };
      }
      moveNearMouseClick(e) {
        const t = p.getPointFromEvent(e),
          o = new d.default(0, 0, this.width, this.height);
        o.place(t, p.rect), this.moveTo(o.left, o.top);
      }
      moveNearBoundingRect(e) {
        const t = new d.default(0, 0, this.width, this.height);
        t.place(e, p.rect), this.moveTo(t.left, t.top);
      }
      onMouseDown(e) {
        let t = window.getComputedStyle(this._element).getPropertyValue('top');
        (t = parseInt(t) || 0),
          0 === e.button &&
            e.pageY - t <= this._dragBarHeight &&
            (e.preventDefault(),
            (this._mouseOffset = { x: -e.offsetX, y: -e.offsetY }),
            document.addEventListener('mousemove', this.onMouseMove),
            document.addEventListener('mouseup', this.onMouseUp));
      }
      onMouseMove(e) {
        if (0 !== e.button) this.onMouseUp();
        else {
          const t = new d.default(
            e.pageX + this._mouseOffset.x,
            e.pageY + this._mouseOffset.y,
            this.width,
            this.height,
          );
          t.fitWithin(p.rect), this.moveTo(t.left, t.top);
        }
      }
      onMouseUp() {
        document.removeEventListener('mouseup', this.onMouseUp),
          document.removeEventListener('mousemove', this.onMouseMove);
      }
      postMessage(e) {
        const t = new CustomEvent('message');
        (0, n.default)(t, { source: window, data: e }),
          this._element.dispatchEvent(t);
      }
      addListener(e, t) {
        this._element.addEventListener(e, t);
      }
      removeListener(e, t) {
        this._element.removeEventListener(e, t);
      }
    }
    t.default = c;
  },
  function (e, t, o) {
    'use strict';
    var i = o(411),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    e.exports = {
      registerLayerWindow: function (e, t, o, i) {
        a.default.registerLayerWindow(e, t, o, i);
      },
      destroy: function (e) {
        a.default.destroy(e);
      },
      close: function (e) {
        a.default.close(e);
      },
      openLayer: function (e) {
        a.default.openLayer(e);
      },
      closeLayer: function (e) {
        a.default.closeLayer(e);
      },
      attach: function (e) {
        a.default.attach(e);
      },
      detach: function (e) {
        a.default.detach(e);
      },
      toggleLayerOpenClose: function (e) {
        a.default.toggleLayerOpenClose(e);
      },
      toggleDetachAttach: function (e) {
        a.default.toggleDetachAttach(e);
      },
      minimizeWindow: function (e) {
        a.default.minimizeWindow(e);
      },
      flash: function (e) {
        a.default.flash(e);
      },
      elongateLayer: function (e, t) {
        a.default.elongateLayer(e, t);
      },
      getWindowRectPromise: function () {
        return a.default.getWindowRectPromise();
      },
    };
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = o(18),
      n = i(a),
      r = o(5),
      l = i(r),
      s = o(91),
      d = i(s),
      p = o(13),
      c = i(p),
      u = o(0),
      g = i(u),
      m = o(16),
      h = i(m),
      b = o(139),
      f = i(b);
    const y = { left: -10, top: -10 };
    t.default = new (class {
      constructor() {
        (this._layerManager = h.default),
          (this._windowManager = f.default),
          (this._layerWindowMap = new c.default()),
          (this._zoomScale = 1),
          (this._error = g.default.debug('lol-uikit:layer-window-controller')),
          (this._error.log = g.default.debug.consoleWrap('error')),
          this._setupDatabindingObservers();
      }
      registerLayerWindow(e, t, o, i) {
        if (!e)
          return (
            this._error(
              'LayerWindowController cannot register without a name!',
            ),
            !1
          );
        if (!t)
          return (
            this._error(
              'LayerWindowController cannot register without options!',
            ),
            !1
          );
        const a = this._getInfo(e);
        if (a)
          if (a.container !== o || a.content !== i) this.destroy(e);
          else return !0;
        return (
          this._setInfo(e, {
            name: e,
            options: t,
            isDetached: !1,
            isOpen: !1,
            container: o,
            content: i,
            window: null,
            unloadListener: null,
          }),
          !0
        );
      }
      destroy(e) {
        const t = this._getInfo(e);
        t && (this.close(e), this._layerWindowMap.delete(e));
      }
      close(e) {
        const t = this._getInfo(e);
        t &&
          (t.isDetached
            ? ((t.isDetached = !1), this._closeWindow(t))
            : this.closeLayer(e));
      }
      openLayer(e) {
        const t = this._getInfo(e);
        t &&
          (t.isDetached
            ? this._focusWindow(t)
            : !t.isOpen &&
              ((t.isOpen = !0),
              this._addLayer(t),
              this._dispatchEvent(t, 'onLayerOpened')));
      }
      closeLayer(e) {
        const t = this._getInfo(e);
        return (
          !!t &&
          void (
            !t.isDetached &&
            t.isOpen &&
            ((t.isOpen = !1),
            this._removeLayer(t),
            this._dispatchEvent(t, 'onLayerClosed'))
          )
        );
      }
      attach(e) {
        const t = this._getInfo(e);
        !t ||
          (t.isDetached &&
            (this._closeWindow(t),
            (t.isDetached = !1),
            !this.isOpen && ((t.isOpen = !0), this._addLayer(t)),
            this._dispatchEvent(t, 'onWindowClosed')));
      }
      detach(e) {
        const t = this._getInfo(e);
        return (
          !!t &&
          void (
            !t.isDetached &&
            (t.isOpen && ((t.isOpen = !1), this._removeLayer(t)),
            (t.isDetached = !0),
            this._openWindow(t),
            this._dispatchEvent(t, 'onWindowOpened'))
          )
        );
      }
      toggleLayerOpenClose(e) {
        const t = this._getInfo(e);
        return (
          !!t &&
          void (t.isDetached
            ? this._focusWindow(t)
            : t.isOpen
            ? this.closeLayer(e)
            : this.openLayer(e))
        );
      }
      toggleDetachAttach(e) {
        const t = this._getInfo(e);
        return !!t && void (t.isDetached ? this.attach(e) : this.detach(e));
      }
      minimizeWindow(e) {
        const t = this._getInfo(e);
        return (
          !!t &&
          void (t.isDetached ? this._minimizeWindow(t) : this.closeLayer(e))
        );
      }
      flash(e) {
        const t = this._getInfo(e);
        if (!t) return !1;
        if (t.isDetached) this._flashWindow(t);
        else if (window.riotInvoke)
          return window.riotInvoke({
            request: (0, d.default)({ name: 'Window.Flash', params: [] }),
          });
      }
      elongateLayer(e, t) {
        const o = this._getInfo(e);
        if (!o) return !1;
        if (o.isOpen) {
          const e = this._prepareLayerStyles();
          (t = t < e.layerMinHeight ? e.layerMinHeight : t),
            (t = t > e.layerMaxHeight ? e.layerMaxHeight : t),
            (o.options.defaultHeight = t),
            (o.content.style.height = `${t}px`);
        }
      }
      getWindowRectPromise(e) {
        const t = this._getInfo(e);
        return t && t.isDetached
          ? t.window.getWindowRect()
          : l.default.resolve();
      }
      _getInfo(e) {
        return this._layerWindowMap.get(e);
      }
      _setInfo(e, t) {
        return this._layerWindowMap.set(e, t);
      }
      _setupDatabindingObservers() {
        const e = g.default.dataBinding,
          t = g.default.socket,
          o = e('/lol-settings', t);
        o.addObserver('/v1/local/video', this, (e) => {
          const t = e && e.data ? e.data.ZoomScale : this._zoomScale;
          t &&
            this._zoomScale !== t &&
            ((this._zoomScale = t), this._resizeOpenWindows());
        });
      }
      _resizeOpenWindows() {
        this._layerWindowMap.forEach(function (e) {
          e.isDetached && this._resizeWindow(e);
        });
      }
      _resizeWindow(e) {
        e.window.resizeEnabled &&
          e.window.setResizeBounds(
            e.window.minWidth * this._zoomScale,
            e.window.minHeight * this._zoomScale,
            screen.availWidth,
            screen.availHeight,
          );
      }
      _prepareLayerStyles(e) {
        return (0, n.default)(
          {
            layerMinHeight: 0,
            layerMaxHeight: 0,
            layerTop: null,
            layerRight: null,
            layerBottom: null,
            layerLeft: null,
          },
          e.options,
        );
      }
      _addLayer(e) {
        const t = this._prepareLayerStyles(e);
        (e.content.style.minHeight = this._inPixels(t.layerMinHeight)),
          (e.content.style.maxHeight = this._inPixels(t.layerMaxHeight)),
          (e.content.style.width = this._inPixels(t.defaultWidth)),
          (e.content.style.height = this._inPixels(t.defaultHeight)),
          (e.content.style.top = this._inPixels(t.layerTop)),
          (e.content.style.right = this._inPixels(t.layerRight)),
          (e.content.style.bottom = this._inPixels(t.layerBottom)),
          (e.content.style.left = this._inPixels(t.layerLeft)),
          this._layerManager.addLayer(e.content);
      }
      _removeLayer(e) {
        (e.lastValidLayerOffsets = {
          offsetLeft: e.content.offsetLeft,
          offsetTop: e.content.offsetTop,
          offsetWidth: e.content.offsetWidth,
          offsetHeight: e.content.offsetHeight,
        }),
          this._layerManager.removeLayer(e.content);
      }
      _prepareWindowStyles(e) {
        const t = {
          showInTaskbar: !0,
          windowWidth: e.options.defaultWidth,
          windowHeight: e.options.defaultHeight,
          windowMinWidth: 0,
          windowMinHeight: 0,
          windowLeft: window.screenLeft + y.left,
          windowTop: window.screenTop + y.top,
          resizable: !0,
          title: '',
          stylesheets: [],
        };
        if (e.lastValidLayerOffsets) {
          const o = e.lastValidLayerOffsets;
          (t.windowWidth = 0 < o.offsetWidth ? o.offsetWidth : t.windowWidth),
            (t.windowHeight =
              0 < o.offsetHeight ? o.offsetHeight : t.windowHeight),
            (t.windowLeft += 0 < o.offsetLeft ? o.offsetLeft : 0),
            (t.windowTop += 0 < o.offsetTop ? o.offsetTop : 0);
        }
        const o = (0, n.default)({}, e.options);
        return (
          void 0 !== o.windowLeft &&
            void 0 !== o.windowTop &&
            (o.windowLeft < screen.availLeft ||
            o.windowTop < screen.availTop ||
            o.windowWidth < o.windowMinWidth ||
            o.windowHeight < o.windowMinHeight ||
            o.windowWidth > screen.availWidth ||
            o.windowHeight > screen.availHeight
              ? (delete o.windowLeft,
                delete o.windowTop,
                delete o.windowWidth,
                delete o.windowHeight)
              : ((o.windowWidth /= this._zoomScale),
                (o.windowHeight /= this._zoomScale))),
          (0, n.default)(t, o)
        );
      }
      _openWindow(e) {
        const t = this._prepareWindowStyles(e);
        (e.window = this._windowManager.create(
          e.content,
          `layerWindow_${e.name}`,
          void 0,
          {
            left: t.windowLeft,
            top: t.windowTop,
            width: t.windowWidth,
            height: t.windowHeight,
          },
        )),
          e.content.classList.add('detached');
        const o = e.window._window,
          i = o.document;
        (i.body.style.overflow = 'hidden'),
          this._addStylesheets(t.stylesheets, i),
          e.window.resizeTo(t.windowWidth, t.windowHeight),
          e.window.moveTo(t.windowLeft, t.windowTop),
          e.window.show(),
          e.window.setDragBarHeight(48),
          t.resizable && (e.window.setResizeEnabled(!0), this._resizeWindow(e)),
          e.window.setTitle(t.title);
        (e.unloadListener = function () {
          this.attach(e.name);
        }.bind(this)),
          e.window.addListener('unload', e.unloadListener);
      }
      _addStylesheets(e, t) {
        const o = t.querySelector('head');
        e.forEach((e) => {
          const i = t.createElement('link');
          i.setAttribute('type', 'text/css'),
            i.setAttribute('rel', 'stylesheet'),
            i.setAttribute('href', e),
            o.appendChild(i);
        });
      }
      _closeWindow(e) {
        e.content.classList.remove('detached'),
          e.window &&
            (e.window.close(),
            e.window.removeContent(),
            e.window.removeListener('unload', e.unloadListener),
            (e.window = null));
      }
      _minimizeWindow(e) {
        e.window && e.window.minimize();
      }
      _focusWindow(e) {
        e.window &&
          (e.window.restore(), e.window.activate(), e.window._element.focus());
      }
      _flashWindow(e) {
        e.window && e.window.invoke('Window.Flash');
      }
      _inPixels(e) {
        return null !== e || void 0 !== e ? `${e}px` : '';
      }
      _dispatchEvent(e, t) {
        e.container.dispatchEvent(new CustomEvent(t));
      }
    })();
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.SummonerIconManager = t.DEFAULT_ICON_URL = void 0);
    var a = o(13),
      n = i(a);
    t.default = function () {
      return r.gameDataBinding
        .get('/assets/v1/summoner-icons.json')
        .then((e) => new p(e));
    };
    var r = o(0),
      l = o(413),
      s = i(l);
    const d = (t.DEFAULT_ICON_URL =
      'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QQYaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDA4MTQzMDktMGVhYS1lMTRiLTg3ZWItNzliZDViOGMwZDY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg3MzAzMTk0QkQ4QjExRUI5MDAzREE5MzQ4RUFERDlCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg3MzAzMTkzQkQ4QjExRUI5MDAzREE5MzQ4RUFERDlCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBSaWdodHM6VXNhZ2VUZXJtcz4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCIvPiA8L3JkZjpBbHQ+IDwveG1wUmlnaHRzOlVzYWdlVGVybXM+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5YmJkNDlkLWJkYmYtZDU0YS04MWIyLWNhYzkwYjk2MzVlOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MDgxNDMwOS0wZWFhLWUxNGItODdlYi03OWJkNWI4YzBkNjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7QBIUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwCAAACAAIAOEJJTQQlAAAAAAAQ/OEfici3yXgvNGI0B1h36//iDFhJQ0NfUFJPRklMRQABAQAADEhMaW5vAhAAAG1udHJSR0IgWFlaIAfOAAIACQAGADEAAGFjc3BNU0ZUAAAAAElFQyBzUkdCAAAAAAAAAAAAAAAAAAD21gABAAAAANMtSFAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNwcnQAAAFQAAAAM2Rlc2MAAAGEAAAAbHd0cHQAAAHwAAAAFGJrcHQAAAIEAAAAFHJYWVoAAAIYAAAAFGdYWVoAAAIsAAAAFGJYWVoAAAJAAAAAFGRtbmQAAAJUAAAAcGRtZGQAAALEAAAAiHZ1ZWQAAANMAAAAhnZpZXcAAAPUAAAAJGx1bWkAAAP4AAAAFG1lYXMAAAQMAAAAJHRlY2gAAAQwAAAADHJUUkMAAAQ8AAAIDGdUUkMAAAQ8AAAIDGJUUkMAAAQ8AAAIDHRleHQAAAAAQ29weXJpZ2h0IChjKSAxOTk4IEhld2xldHQtUGFja2FyZCBDb21wYW55AABkZXNjAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA81EAAQAAAAEWzFhZWiAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPZGVzYwAAAAAAAAAWSUVDIGh0dHA6Ly93d3cuaWVjLmNoAAAAAAAAAAAAAAAWSUVDIGh0dHA6Ly93d3cuaWVjLmNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRlc2MAAAAAAAAALklFQyA2MTk2Ni0yLjEgRGVmYXVsdCBSR0IgY29sb3VyIHNwYWNlIC0gc1JHQgAAAAAAAAAAAAAALklFQyA2MTk2Ni0yLjEgRGVmYXVsdCBSR0IgY29sb3VyIHNwYWNlIC0gc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAACxSZWZlcmVuY2UgVmlld2luZyBDb25kaXRpb24gaW4gSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdmlldwAAAAAAE6T+ABRfLgAQzxQAA+3MAAQTCwADXJ4AAAABWFlaIAAAAAAATAlWAFAAAABXH+dtZWFzAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAACjwAAAAJzaWcgAAAAAENSVCBjdXJ2AAAAAAAABAAAAAAFAAoADwAUABkAHgAjACgALQAyADcAOwBAAEUASgBPAFQAWQBeAGMAaABtAHIAdwB8AIEAhgCLAJAAlQCaAJ8ApACpAK4AsgC3ALwAwQDGAMsA0ADVANsA4ADlAOsA8AD2APsBAQEHAQ0BEwEZAR8BJQErATIBOAE+AUUBTAFSAVkBYAFnAW4BdQF8AYMBiwGSAZoBoQGpAbEBuQHBAckB0QHZAeEB6QHyAfoCAwIMAhQCHQImAi8COAJBAksCVAJdAmcCcQJ6AoQCjgKYAqICrAK2AsECywLVAuAC6wL1AwADCwMWAyEDLQM4A0MDTwNaA2YDcgN+A4oDlgOiA64DugPHA9MD4APsA/kEBgQTBCAELQQ7BEgEVQRjBHEEfgSMBJoEqAS2BMQE0wThBPAE/gUNBRwFKwU6BUkFWAVnBXcFhgWWBaYFtQXFBdUF5QX2BgYGFgYnBjcGSAZZBmoGewaMBp0GrwbABtEG4wb1BwcHGQcrBz0HTwdhB3QHhgeZB6wHvwfSB+UH+AgLCB8IMghGCFoIbgiCCJYIqgi+CNII5wj7CRAJJQk6CU8JZAl5CY8JpAm6Cc8J5Qn7ChEKJwo9ClQKagqBCpgKrgrFCtwK8wsLCyILOQtRC2kLgAuYC7ALyAvhC/kMEgwqDEMMXAx1DI4MpwzADNkM8w0NDSYNQA1aDXQNjg2pDcMN3g34DhMOLg5JDmQOfw6bDrYO0g7uDwkPJQ9BD14Peg+WD7MPzw/sEAkQJhBDEGEQfhCbELkQ1xD1ERMRMRFPEW0RjBGqEckR6BIHEiYSRRJkEoQSoxLDEuMTAxMjE0MTYxODE6QTxRPlFAYUJxRJFGoUixStFM4U8BUSFTQVVhV4FZsVvRXgFgMWJhZJFmwWjxayFtYW+hcdF0EXZReJF64X0hf3GBsYQBhlGIoYrxjVGPoZIBlFGWsZkRm3Gd0aBBoqGlEadxqeGsUa7BsUGzsbYxuKG7Ib2hwCHCocUhx7HKMczBz1HR4dRx1wHZkdwx3sHhYeQB5qHpQevh7pHxMfPh9pH5Qfvx/qIBUgQSBsIJggxCDwIRwhSCF1IaEhziH7IiciVSKCIq8i3SMKIzgjZiOUI8Ij8CQfJE0kfCSrJNolCSU4JWgllyXHJfcmJyZXJocmtyboJxgnSSd6J6sn3CgNKD8ocSiiKNQpBik4KWspnSnQKgIqNSpoKpsqzysCKzYraSudK9EsBSw5LG4soizXLQwtQS12Last4S4WLkwugi63Lu4vJC9aL5Evxy/+MDUwbDCkMNsxEjFKMYIxujHyMioyYzKbMtQzDTNGM38zuDPxNCs0ZTSeNNg1EzVNNYc1wjX9Njc2cjauNuk3JDdgN5w31zgUOFA4jDjIOQU5Qjl/Obw5+To2OnQ6sjrvOy07azuqO+g8JzxlPKQ84z0iPWE9oT3gPiA+YD6gPuA/IT9hP6I/4kAjQGRApkDnQSlBakGsQe5CMEJyQrVC90M6Q31DwEQDREdEikTORRJFVUWaRd5GIkZnRqtG8Ec1R3tHwEgFSEtIkUjXSR1JY0mpSfBKN0p9SsRLDEtTS5pL4kwqTHJMuk0CTUpNk03cTiVObk63TwBPSU+TT91QJ1BxULtRBlFQUZtR5lIxUnxSx1MTU19TqlP2VEJUj1TbVShVdVXCVg9WXFapVvdXRFeSV+BYL1h9WMtZGllpWbhaB1pWWqZa9VtFW5Vb5Vw1XIZc1l0nXXhdyV4aXmxevV8PX2Ffs2AFYFdgqmD8YU9homH1YklinGLwY0Njl2PrZEBklGTpZT1lkmXnZj1mkmboZz1nk2fpaD9olmjsaUNpmmnxakhqn2r3a09rp2v/bFdsr20IbWBtuW4SbmtuxG8eb3hv0XArcIZw4HE6cZVx8HJLcqZzAXNdc7h0FHRwdMx1KHWFdeF2Pnabdvh3VnezeBF4bnjMeSp5iXnnekZ6pXsEe2N7wnwhfIF84X1BfaF+AX5ifsJ/I3+Ef+WAR4CogQqBa4HNgjCCkoL0g1eDuoQdhICE44VHhauGDoZyhteHO4efiASIaYjOiTOJmYn+imSKyoswi5aL/IxjjMqNMY2Yjf+OZo7OjzaPnpAGkG6Q1pE/kaiSEZJ6kuOTTZO2lCCUipT0lV+VyZY0lp+XCpd1l+CYTJi4mSSZkJn8mmia1ZtCm6+cHJyJnPedZJ3SnkCerp8dn4uf+qBpoNihR6G2oiailqMGo3aj5qRWpMelOKWpphqmi6b9p26n4KhSqMSpN6mpqhyqj6sCq3Wr6axcrNCtRK24ri2uoa8Wr4uwALB1sOqxYLHWskuywrM4s660JbSctRO1irYBtnm28Ldot+C4WbjRuUq5wro7urW7LrunvCG8m70VvY++Cr6Evv+/er/1wHDA7MFnwePCX8Lbw1jD1MRRxM7FS8XIxkbGw8dBx7/IPci8yTrJuco4yrfLNsu2zDXMtc01zbXONs62zzfPuNA50LrRPNG+0j/SwdNE08bUSdTL1U7V0dZV1tjXXNfg2GTY6Nls2fHadtr724DcBdyK3RDdlt4c3qLfKd+v4DbgveFE4cziU+Lb42Pj6+Rz5PzlhOYN5pbnH+ep6DLovOlG6dDqW+rl63Dr++yG7RHtnO4o7rTvQO/M8Fjw5fFy8f/yjPMZ86f0NPTC9VD13vZt9vv3ivgZ+Kj5OPnH+lf65/t3/Af8mP0p/br+S/7c/23////uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIASwBLAMBEQACEQEDEQH/xACFAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDAggBAQEBAQAAAAAAAAAAAAAAAAACAwEQAAICAQIDBAYGCQUAAAAAAAABAgMEEQUhEgYxQVFhcYEiQhMUkaGxMlIH0WJygrLCI0MVwZIzYyQRAQEBAQEAAwEBAAAAAAAAAAABAhExIUFREgP/2gAMAwEAAhEDEQA/APyoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3w8LMzcmGLh0WZGTa9K6aouc5PyjHVg6n+z/lHZWo3dS5iwk+P+OxuW7KflN/8dXrbfkaTH6zv+n4mm3YuxbRTKjadpxqaprltsyIRyrrYvtVk7U+D8IpIufCL2+uPu/QPSG7808eMtizZe/SnbiSf61TfPD9x6eRNzK7NWIB1J0F1HsEfj5NCyNvb0huOK/i479Mlxg/KaTIubGk1KjhKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbdMfllm59VefvVr2va5rmrTjrlXx/6qnppF/jnovDUuY/Ua3+LF2+vbtoxpYmxYq2+iS5bbU+bJtX/bd95/sx0j5Gk+PGV+fXyA1AAe2NmZOLJyoscOZaTj2xkn3Si9YyXkx0R/f+genN7UrsHk2XdXx5Un8la/OK1lS/2dY+SJuZVTdisN72HdtkzXh7njyx7ktYa8YTj3TrmtYzi/FMzs41l655x0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANrbNr3DdM2rB2+ieTlXPSuqC1b8/JLvbOydct4tbpvonaOneW/LjXue+R0fM9J4uPL9SL4WzX4n7K7l3mkzxldWu1dfdfbK66bstm9ZTk9W2U4+NTganQ1AagNQBwfV6w83Be3bpjRztvbbVU+E65P36bF7VcvRwfejriturvy9y9oqluW2zln7K37V2i+NQ32RvguzymvZfl2Ges8a531DyFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAHR2HYs/fNyr2/CinZPWVlkuEK64/essl3RijsnXLeLe2nbNs2HBlgbSm3YtMzcJLS7Ifh+pX4QXr1ZrPhjb17ANQGoDUBqA1AagNQGoHpj5NuPZz1PRtOMotJxlF8HGUXwlF96Y6IP1v0NjfL273sVXw6q/a3DbY6v4Kf8Adp73V4r3fR2TrP3F519VXxm0AAAAAAAAAAAAAAAAAAAAAAAAAAAAT78sc+UMfcsGKjH4jqtnJJc8ox1XK5dvKm09PEvFZ7TTUtDOoDUBqA1AagNQGoDUBqBjUD6rzJ4knkwlyupSk9eKcUnzJp9qa4NAUffYrbrLFFQU5OXJFaRWr10S8EYt3mAAAAAAAAAAAAAAAAAAAAAAAAAAACUfl5fyb9KvXhdRZHTzjpP+UrPqd+LH1NGTPMA1AzqA1AagNQGoDUDHMBhsDn9QX/B2HcLNdGqJxT85+x/Mcvjs9VAZNgAAAAAAAAAAAAAAAAAAAAAAAAAAAHd6Iko9T4evf8RfTVI7n1OvFkZ+WsTByMtx51RW7HDXTXl7teJozjg4PX+z5ElDIjPFk/el7cPpjx+o5/SripHRkU31K2iyNtcuycGpJ+tHUvTmOhzANQHMA5gGoHM3PqPaNt1WTkJ2r+zX7c/oXZ6zlvHZLWlsnV+Pu+4SxKcedaUJWKyclxUdOHKl5+Jya6XPHr1nNLpjN8/hJeu2P6Brwz6qwzagAAAAAAAAAAAAAAAAAAAAAAAAAAAO30ZBz6mwku6U5P0Rrk39h3PqdeLG3SmV+0Z9MeM541vKvOMHL+U0rOKeMmzb2/dM/b7vi4l0qpe8l92XlKL4M7K5YsPp3qvG3WKpt0pzkuNfuz074a/YXNdZ3PHd1KcNTganR5ZOVRjUTvyLFXTWtZzl2I4IBv8A1rmZk5UYEpY+J2cy4WT9LXYvJEXTSZRltt6vi32slSV/lxTKW75V2ns040tX5znGK+0rKNpJ1nCU+mctr3HVJ+j4iX+pWvE59VeZtQAAAAAAAAAAAAAAAAAAAAAAAAAAAEn/AC9x/ib5Zc1wxseyevnLStfxlZ9TvxYdFkYWwlNawT9teMXwa+gtmqHd8Ce37plYU09ce2UFr3xT9l+tcTOxrK0zjr6rssqsjZXJwsg1KMlwaa7GgLQ6Y3z/AC2389miyqXyXpd77pfvGkvWWpx19TrgBWvVvUFm5ZkqKpaYWPJqtL35Lg5v/Qi1pmccAlQBYX5fYjo2bJy5JqWZdGEH4wpTb09Mp/UXlnr12d7x/mdj3GnTVvHnOK86tLP5Cr45PVSGTUAAAAAAAAAAAAAAAAAAAAAAAAAAABYnQu2yxNlnmWLlt3GXsa9vwam0n+9PX6C8xnr1IdSkuX1J0rT1BTG/GlGneqYqEIyekMmEfuxcnwjZFcIt8GuByzrs1xWeVi5OJkTx8mqVN9b5bKrE4yi13NMzavICT/l/fKG721a+zbTJtecGmn9pWU6WBzFs2nvORKnaM22HCcKZuLXc2tE/rFdipDJqASPpbo3L3mSyciTw9orel2ZJauT/AAUx9+f1LvKmep1riw+XHrrrx8Wv4OJjwVePVrrywXi++TfGT8S2bNdihNOS5o9k4+MXwkvWgKo37ap7Vu2ThS4xrlrTP8VcvahL1xaM7GsvXPOOgAAAAAAAAAAAAAAAAAAAAAAAAA6vTeyWbxuleNq4Y8F8TLtXuVR+8/S+xeZ2TrlvFnznW2lVBVUwioU1LshXBaRivQjRk+dQ6zqByut9yxpbBOvPpryr3pXhXT4W1y73Ga9pxUfdfA5qu5nyrEzaJX+XuPCW4ZeRKWkqaNIQ727JJa+pJlZTtOdS2bwz8eGTt+XjzlyRtosjzvsT5W0360HYqIyauv0pkbfj77jTz8avKobcVXbryKbXsSkl95KXc+B2Oa8WlkZd98k7Za8i5YQSUYxXhGK0UV6DRlx46h1jUOOJ1ls/+T2pZdMdc7bottLtsxtdZL01t83o18CdRWbxXBDQAAAAAAAAAAAAAAAAAAAAAAAANrbduydxzqcLGUXffLlhzyUI9mrbk+CSSELVn7ZtmFs23/IYclbObU83L00+LNdijrxVcO7x7TSTjK3r21OjOpwNTogPXGZO7d/l9f6eNCMUv1prmk/rRGl5R0lTsdKbjHB3mqU3pVdrTY+5KXY/VLQ7HNRZWpozcbqzcVh7NbFPS3J/o1ryl95/7Sa7mK2IaAFpbFmyy9nxcib1nKHLN+MoNxb+o0jKt7U6GoH1VdZTbG2t6Ti9V3r1rwAhvWXSuPjwnvG2csMKUl8zhtpSonN6ewn96uT7NOzsI1FZv0h5KwAAAAAAAAAAAAAAAAAAAAAAB91W2VWwtrfLZBqUZLua4oCzNn3SrcsGGRDRT+7dD8M12r9BpKzsb2ocZ1AyuLS8Toq3esl5O7Zd/dO2fL6E9F9RnWkaRx0AsTpjfYZ2ByXzSycWOlrb01glwn+kuVnYiPUm8vc9wc4N/LVawoXl3y/eJtXJxyTjoBPehshz2iylv/huenomk/tTLyjSQ6lJNTgxqBBusd5WVkrCplrRjv22uyVnY/8Ab2E6q8xGyVAAAAAAAAAAAAAAAAAAAAAAAAB09h3mza8xWcZY9mkb6/FeK80dlcs6sam6q6qFtUlOuaUoSXY0y2b7Ayno9V3cQKknJynKT7W236zNq+QAH1Gc468snHmWktHpqn3MD5AAAJh0BJ8mdH3U6n6/aRWUaS0pLGoHB6p39YOP8tRL/wBly7V7kH3+l9xy1UiBELYAAAAAAAAAAAAAAAAAAAAAAAAAACQ9LdQ/JWLEyZf+Sx+zJ/25Pv8A2X3nZU2Jyn3riu5lpfdfGyKfY2k/WHFTZFTpyLanwdc5QafjF6GbV5gAAAAAAmfQVTjiZt/4rK4Lw9lSb/iRWUaSjUpxzt73mna8V2S0lfPVU1eL8X5I5aSdV1kZF2TfO+6TnbY+aUn4kNHkAAAAAAAAAAAAAAAAAAAAAAAAAAAABKOmOpVSo4ObP+l2U3P3f1ZeX2FSpsTHm716ikK96rxfl9/y0lpC2Suh6LUp/ayL60njkHHQAAAAALE6Uxvl9gx21pLIlO9+hvkj9UC4i+tjdt3xttxnbc9ZvhVUu2T/AEeLFrkV5uGfk5+VLIyJazl2Luiu5LyIaNYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkXT/VM8RRxc1ueN2Qs7ZQ/TE7Km5b3WuLDJwsPdcdqyuC+XtnF6pxbc63/ABI7pzKHkrAAAAB7YeJdmZdOLSua2+cYQXnJ6AT7ed8wNnpjjVaW2UwjVRSn7sI8qlLw101Lt4zk6gednZObkSvyJ89kvoS8Eu5ENONcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzD3XLxaL8aLU8XJjyXUT4xfepLwlFrVNDrnGmHQAAAAbe3blkbfbO7G5Y5EoOELWtZQUlpJw8JacNQ5Y1pznOTnOTlKT1lJvVth18gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=');
    class p {
      constructor(e) {
        this._iconCache = e.reduce(
          (e, t) => ((0, s.default)(t), e.set(t.id, t), e),
          new n.default(),
        );
      }
      getIconByIdOrThrow(e) {
        if (this._iconCache.has(e)) return this._iconCache.get(e);
        throw new Error(`No summoner icon found with id ${e}.`);
      }
      getIconUrlById(e) {
        try {
          return this.getIconByIdOrThrow(e).imagePath;
        } catch (t) {
          return this.getDefaultIconUrl();
        }
      }
      getDefaultIconUrl() {
        return d;
      }
    }
    t.SummonerIconManager = p;
  },
  function (e, t, o) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      const t = (0, p.default)(e);
      var o = !0,
        i = !1,
        n = void 0;
      try {
        for (var l = (0, r.default)(t), d; !(o = (d = l.next()).done); o = !0) {
          const t = d.value,
            o = e[t];
          o && 'object' == typeof o && a(o);
        }
      } catch (e) {
        (i = !0), (n = e);
      } finally {
        try {
          !o && l.return && l.return();
        } finally {
          if (i) throw n;
        }
      }
      return (0, s.default)(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(63),
      r = i(n),
      l = o(414),
      s = i(l),
      d = o(417),
      p = i(d);
    t.default = a;
  },
  function (e, t, o) {
    e.exports = { default: o(415), __esModule: !0 };
  },
  function (e, t, o) {
    o(416), (e.exports = o(2).Object.freeze);
  },
  function (e, t, o) {
    var i = o(8),
      a = o(38).onFreeze;
    o(57)('freeze', function (e) {
      return function (t) {
        return e && i(t) ? e(a(t)) : t;
      };
    });
  },
  function (e, t, o) {
    e.exports = { default: o(418), __esModule: !0 };
  },
  function (e, t, o) {
    o(419);
    var i = o(2).Object;
    e.exports = function (e) {
      return i.getOwnPropertyNames(e);
    };
  },
  function (e, t, o) {
    o(57)('getOwnPropertyNames', function () {
      return o(137).f;
    });
  },
]);
