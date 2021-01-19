(this["webpackJsonpto-do-list"] = this["webpackJsonpto-do-list"] || []).push([
  [3],
  {
    21(t, n, e) {
      e.r(n),
        e.d(n, "getCLS", () => v),
        e.d(n, "getFCP", () => g),
        e.d(n, "getFID", () => h),
        e.d(n, "getLCP", () => y),
        e.d(n, "getTTFB", () => F);
      let i;
      let a;
      const r = function () {
        return ""
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12);
      };
      const o = function (t) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return {
          name: t,
          value: n,
          delta: 0,
          entries: [],
          id: r(),
          isFinal: !1,
        };
      };
      const u = function (t, n) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            const e = new PerformanceObserver((t) => t.getEntries().map(n));
            return e.observe({ type: t, buffered: !0 }), e;
          }
        } catch (t) {}
      };
      let s = !1;
      let c = !1;
      const d = function (t) {
        s = !t.persisted;
      };
      const f = function () {
        addEventListener("pagehide", d),
          addEventListener("beforeunload", () => {});
      };
      const p = function (t) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        c || (f(), (c = !0)),
          addEventListener(
            "visibilitychange",
            (n) => {
              const e = n.timeStamp;
              document.visibilityState === "hidden" &&
                t({ timeStamp: e, isUnloading: s });
            },
            { capture: !0, once: n }
          );
      };
      const l = function (t, n, e, i) {
        let a;
        return function () {
          e && n.isFinal && e.disconnect(),
            n.value >= 0 &&
              (i || n.isFinal || document.visibilityState === "hidden") &&
              ((n.delta = n.value - (a || 0)),
              (n.delta || n.isFinal || void 0 === a) && (t(n), (a = n.value)));
        };
      };
      var v = function (t) {
        let n;
        const e =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const i = o("CLS", 0);
        const a = function (t) {
          t.hadRecentInput || ((i.value += t.value), i.entries.push(t), n());
        };
        const r = u("layout-shift", a);
        r &&
          ((n = l(t, i, r, e)),
          p((t) => {
            const e = t.isUnloading;
            r.takeRecords().map(a), e && (i.isFinal = !0), n();
          }));
      };
      const m = function () {
        return (
          void 0 === i &&
            ((i = document.visibilityState === "hidden" ? 0 : 1 / 0),
            p((t) => {
              const n = t.timeStamp;
              return (i = n);
            }, !0)),
          {
            get timeStamp() {
              return i;
            },
          }
        );
      };
      var g = function (t) {
        let n;
        const e = o("FCP");
        const i = m();
        const a = u("paint", (t) => {
          t.name === "first-contentful-paint" &&
            t.startTime < i.timeStamp &&
            ((e.value = t.startTime), (e.isFinal = !0), e.entries.push(t), n());
        });
        a && (n = l(t, e, a));
      };
      var h = function (t) {
        const n = o("FID");
        const e = m();
        const i = function (t) {
          t.startTime < e.timeStamp &&
            ((n.value = t.processingStart - t.startTime),
            n.entries.push(t),
            (n.isFinal = !0),
            r());
        };
        const a = u("first-input", i);
        var r = l(t, n, a);
        a
          ? p(() => {
              a.takeRecords().map(i), a.disconnect();
            }, !0)
          : window.perfMetrics &&
            window.perfMetrics.onFirstInputDelay &&
            window.perfMetrics.onFirstInputDelay((t, i) => {
              i.timeStamp < e.timeStamp &&
                ((n.value = t),
                (n.isFinal = !0),
                (n.entries = [
                  {
                    entryType: "first-input",
                    name: i.type,
                    target: i.target,
                    cancelable: i.cancelable,
                    startTime: i.timeStamp,
                    processingStart: i.timeStamp + t,
                  },
                ]),
                r());
            });
      };
      const S = function () {
        return (
          a ||
            (a = new Promise((t) =>
              ["scroll", "keydown", "pointerdown"].map((n) => {
                addEventListener(n, t, { once: !0, passive: !0, capture: !0 });
              })
            )),
          a
        );
      };
      var y = function (t) {
        let n;
        const e =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const i = o("LCP");
        const a = m();
        const r = function (t) {
          const e = t.startTime;
          e < a.timeStamp
            ? ((i.value = e), i.entries.push(t))
            : (i.isFinal = !0),
            n();
        };
        const s = u("largest-contentful-paint", r);
        if (s) {
          n = l(t, i, s, e);
          const c = function () {
            i.isFinal || (s.takeRecords().map(r), (i.isFinal = !0), n());
          };
          S().then(c), p(c, !0);
        }
      };
      var F = function (t) {
        let n;
        const e = o("TTFB");
        (n = function () {
          try {
            const n =
              performance.getEntriesByType("navigation")[0] ||
              (function () {
                const t = performance.timing;
                const n = { entryType: "navigation", startTime: 0 };
                for (const e in t)
                  e !== "navigationStart" &&
                    e !== "toJSON" &&
                    (n[e] = Math.max(t[e] - t.navigationStart, 0));
                return n;
              })();
            (e.value = e.delta = n.responseStart),
              (e.entries = [n]),
              (e.isFinal = !0),
              t(e);
          } catch (t) {}
        }),
          document.readyState === "complete"
            ? setTimeout(n, 0)
            : addEventListener("pageshow", n);
      };
    },
  },
]);
// # sourceMappingURL=3.f90203fc.chunk.js.map
