(this["webpackJsonpto-do-list"] = this["webpackJsonpto-do-list"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      n.r(t);
      const c = n(0);
      const s = n(1);
      const a = n.n(s);
      const i = n(7);
      const o = n.n(i);
      const l = (n(14), n(6));
      const d = n(8);
      const r = n(5);
      const j =
        (n(15),
        n(16),
        function () {
          return Object(c.jsxs)("div", {
            className: "date",
            children: [
              Object(c.jsx)("div", {
                className: "month-number",
                children: "27",
              }),
              Object(c.jsxs)("div", {
                children: [
                  Object(c.jsx)("p", {
                    className: "week-day",
                    children: "Tuesday",
                  }),
                  Object(c.jsx)("p", {
                    className: "month",
                    children: "October",
                  }),
                ],
              }),
            ],
          });
        });
      const u =
        (n(17),
        function (e) {
          const t = e.id;
          const n = e.title;
          const s = e.isCompleted;
          const a = e.completeTask;
          const i = e.removeTask;
          const o = Object(c.jsx)("button", {
            onClick() {
              i(t);
            },
            className: "btn-delete-task",
            type: "button",
            children: "\xd7",
          });
          return Object(c.jsxs)("li", {
            className: "todo-list-item".concat(s ? " completed" : ""),
            children: [
              Object(c.jsx)("i", {
                onClick() {
                  a(t);
                },
                className: "icon ".concat(s ? "far fa-check-circle" : ""),
              }),
              Object(c.jsx)("p", { className: "task", children: n }),
              s && o,
            ],
          });
        });
      const b =
        (n(18),
        function (e) {
          const t = e.tasks;
          const n = e.completeTask;
          const s = e.removeTask;
          return Object(c.jsxs)("div", {
            className: "todo-list",
            children: [
              Object(c.jsx)(j, {}),
              Object(c.jsx)("ul", {
                children: t.map((e) =>
                  Object(c.jsx)(
                    u,
                    {
                      id: e.id,
                      title: e.title,
                      isCompleted: e.isCompleted,
                      completeTask: n,
                      removeTask: s,
                    },
                    e.id
                  )
                ),
              }),
            ],
          });
        });
      const m =
        (n(19),
        function (e) {
          const t = e.addNewTask;
          const n = e.task;
          const s = e.updateTasksList;
          return Object(c.jsxs)("form", {
            onSubmit(e) {
              e.preventDefault(), !n.title || s();
            },
            className: "add-task",
            children: [
              Object(c.jsx)("input", {
                onChange(e) {
                  const n = e.target.value;
                  !n.length || t(n);
                },
                value: n.title || "",
                name: "task",
                type: "text",
              }),
              Object(c.jsx)("div", {
                className: "btn-container",
                children: Object(c.jsxs)("button", {
                  type: "submit",
                  className: "btn-add extended",
                  children: [
                    Object(c.jsx)("span", {
                      className: "icon-add",
                      children: "+",
                    }),
                    Object(c.jsx)("span", {
                      className: "label-add",
                      children: "ADD TASK",
                    }),
                  ],
                }),
              }),
            ],
          });
        });
      const O = function () {
        const e = JSON.parse(localStorage.getItem("dataStored"));
        const t = Object(s.useState)({});
        const n = Object(r.a)(t, 2);
        const a = n[0];
        const i = n[1];
        const o = Object(s.useState)(e || []);
        const j = Object(r.a)(o, 2);
        const u = j[0];
        const O = j[1];
        Object(s.useEffect)(() => {
          localStorage.setItem("dataStored", JSON.stringify(u));
        }, [u]);
        return Object(c.jsxs)("div", {
          className: "container",
          children: [
            Object(c.jsx)("div", {
              className: "header",
              children: Object(c.jsx)("h1", { children: "to-do list" }),
            }),
            Object(c.jsx)(b, {
              tasks: u,
              completeTask(e) {
                O(
                  u.map((t, n, c) =>
                    t.id === e
                      ? Object(l.a)(Object(l.a)({}, t), {}, { isCompleted: !0 })
                      : t
                  )
                );
              },
              removeTask(e) {
                const t = u.filter((t) => t.id !== e);
                O(t);
              },
            }),
            Object(c.jsx)(m, {
              task: a,
              addNewTask(e) {
                i({ id: Date.now(), title: e, isCompleted: !1 });
              },
              updateTasksList() {
                O((e) => [].concat(Object(d.a)(e), [a])), i("");
              },
            }),
          ],
        });
      };
      const f = function (e) {
        e &&
          e instanceof Function &&
          n
            .e(3)
            .then(n.bind(null, 21))
            .then((t) => {
              const n = t.getCLS;
              const c = t.getFID;
              const s = t.getFCP;
              const a = t.getLCP;
              const i = t.getTTFB;
              n(e), c(e), s(e), a(e), i(e);
            });
      };
      o.a.render(
        Object(c.jsx)(a.a.StrictMode, { children: Object(c.jsx)(O, {}) }),
        document.getElementById("root")
      ),
        f();
    },
  ],
  [[20, 1, 2]],
]);
// # sourceMappingURL=main.7c0fea7a.chunk.js.map
