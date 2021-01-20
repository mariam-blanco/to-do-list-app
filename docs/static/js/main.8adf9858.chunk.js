/* eslint-disable no-var */
/* eslint-disable spaced-comment */
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
      "use strict";
      n.r(t);
      var a = n(0),
        c = n(1),
        s = n.n(c),
        i = n(7),
        o = n.n(i),
        r = (n(14), n(6)),
        d = n(8),
        l = n(5),
        u =
          (n(15),
          n(16),
          function () {
            var e = new Date(),
              t = e.getDate(),
              n = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ][e.getDay()],
              c = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ][e.getMonth()];
            return Object(a.jsxs)("div", {
              className: "date",
              children: [
                Object(a.jsx)("div", {
                  className: "month-number",
                  children: t,
                }),
                Object(a.jsxs)("div", {
                  children: [
                    Object(a.jsx)("p", { className: "week-day", children: n }),
                    Object(a.jsx)("p", { className: "month", children: c }),
                  ],
                }),
              ],
            });
          }),
        j =
          (n(17),
          function (e) {
            var t = e.id,
              n = e.title,
              c = e.isCompleted,
              s = e.completeTask,
              i = e.removeTask,
              o = Object(a.jsx)("button", {
                onClick: function () {
                  i(t);
                },
                className: "btn-delete-task",
                type: "button",
                children: "\xd7",
              });
            return Object(a.jsxs)("li", {
              className: "todo-list-item".concat(c ? " completed" : ""),
              children: [
                Object(a.jsx)("span", {
                  onClick: function () {
                    s(t);
                  },
                  className: "icon ".concat(c ? "far fa-check-circle" : ""),
                }),
                Object(a.jsx)("p", { className: "task", children: n }),
                c && o,
              ],
            });
          }),
        b =
          (n(18),
          function (e) {
            var t = e.tasks,
              n = e.completeTask,
              c = e.removeTask;
            return Object(a.jsxs)("div", {
              className: "todo-list",
              children: [
                Object(a.jsx)(u, {}),
                Object(a.jsx)("ul", {
                  children: t.map(function (e) {
                    return Object(a.jsx)(
                      j,
                      {
                        id: e.id,
                        title: e.title,
                        isCompleted: e.isCompleted,
                        completeTask: n,
                        removeTask: c,
                      },
                      e.id
                    );
                  }),
                }),
              ],
            });
          }),
        m =
          (n(19),
          function (e) {
            var t = e.addNewTask,
              n = e.task,
              c = e.updateTasksList;
            return Object(a.jsxs)("form", {
              onSubmit: function (e) {
                e.preventDefault(), !n.title || c();
              },
              className: "add-task",
              children: [
                Object(a.jsx)("input", {
                  onChange: function (e) {
                    var n = e.target.value;
                    !n.length || t(n);
                  },
                  value: n.title || "",
                  name: "task",
                  type: "text",
                  placeholder: "Write a task",
                }),
                Object(a.jsx)("div", {
                  className: "btn-container",
                  children: Object(a.jsxs)("button", {
                    type: "submit",
                    className: "btn-add extended",
                    children: [
                      Object(a.jsx)("span", {
                        className: "icon-add",
                        children: "+",
                      }),
                      Object(a.jsx)("span", {
                        className: "label-add",
                        children: "ADD TASK",
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        O = function () {
          var e = JSON.parse(localStorage.getItem("dataStored")),
            t = Object(c.useState)({}),
            n = Object(l.a)(t, 2),
            s = n[0],
            i = n[1],
            o = Object(c.useState)(e || []),
            u = Object(l.a)(o, 2),
            j = u[0],
            O = u[1];
          Object(c.useEffect)(
            function () {
              localStorage.setItem("dataStored", JSON.stringify(j));
            },
            [j]
          );
          return Object(a.jsxs)("div", {
            className: "container",
            children: [
              Object(a.jsx)("div", {
                className: "header",
                children: Object(a.jsx)("h1", { children: "to-do list" }),
              }),
              Object(a.jsx)(b, {
                tasks: j,
                completeTask: function (e) {
                  O(
                    j.map(function (t) {
                      return t.id === e
                        ? Object(r.a)(
                            Object(r.a)({}, t),
                            {},
                            { isCompleted: !0 }
                          )
                        : t;
                    })
                  );
                },
                removeTask: function (e) {
                  var t = j.filter(function (t) {
                    return t.id !== e;
                  });
                  O(t);
                },
              }),
              Object(a.jsx)(m, {
                task: s,
                addNewTask: function (e) {
                  i({ id: Date.now(), title: e, isCompleted: !1 });
                },
                updateTasksList: function () {
                  O(function (e) {
                    return [].concat(Object(d.a)(e), [s]);
                  }),
                    i("");
                },
              }),
            ],
          });
        },
        f = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 21))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  c = t.getFCP,
                  s = t.getLCP,
                  i = t.getTTFB;
                n(e), a(e), c(e), s(e), i(e);
              });
        };
      o.a.render(
        Object(a.jsx)(s.a.StrictMode, { children: Object(a.jsx)(O, {}) }),
        document.getElementById("root")
      ),
        f();
    },
  ],
  [[20, 1, 2]],
]);
//# sourceMappingURL=main.8adf9858.chunk.js.map
