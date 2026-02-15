(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974],
    {
        6449: (e, t, s) => {
            "use strict";
            s.d(t, { A: () => i, r: () => n });
            var a = s(95155),
                l = s(12115);
            let r = (0, l.createContext)(void 0);
            function n(e) {
                let { children: t } = e,
                    [s, n] = (0, l.useState)(null),
                    [i, o] = (0, l.useState)(null),
                    [c, d] = (0, l.useState)(0.7),
                    [x, m] = (0, l.useState)(!0),
                    u = (0, l.useRef)(null);
                return (
                    (0, l.useEffect)(() => {
                        !x &&
                            u.current &&
                            (u.current.stop(), n(null), o(null), (u.current = null));
                    }, [x]),
                    (0, a.jsx)(r.Provider, {
                        value: {
                            currentPlayingId: s,
                            currentTrack: i,
                            volume: c,
                            isSoundEnabled: x,
                            setCurrentPlayingId: n,
                            setCurrentTrack: o,
                            setVolume: d,
                            setIsSoundEnabled: m,
                            playTrack: (e) => {
                                (u.current && u.current.stop(), o(e), n(e.id));
                            },
                            pauseTrack: () => {
                                (u.current && u.current.stop(), n(null));
                            },
                            stopTrack: () => {
                                (u.current && u.current.stop(),
                                    n(null),
                                    o(null),
                                    (u.current = null));
                            },
                            setCurrentSound: (e) => {
                                u.current = e;
                            },
                        },
                        children: t,
                    })
                );
            }
            function i() {
                let e = (0, l.useContext)(r);
                if (void 0 === e)
                    throw Error("useAlbumContext must be used within an AlbumProvider");
                return e;
            }
        },
        7676: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 22558));
        },
        11647: (e, t, s) => {
            "use strict";
            s.d(t, { E: () => i });
            var a = s(95155);
            s(12115);
            var l = s(92885),
                r = s(64269);
            let n = (0, l.F)(
                "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-fit",
                {
                    variants: {
                        variant: {
                            default:
                                "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                            secondary:
                                "border-secondary bg-secondary/40 text-secondary-foreground hover:bg-secondary/80",
                            destructive:
                                "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                            outline: "text-foreground",
                        },
                    },
                    defaultVariants: { variant: "default" },
                },
            );
            function i(e) {
                let { className: t, variant: s, ...l } = e;
                return (0, a.jsx)("div", {
                    className: (0, r.cn)(n({ variant: s }), t),
                    ...l,
                });
            }
        },
        22558: (e, t, s) => {
            "use strict";
            (s.r(t), s.d(t, { default: () => F }));
            var a = s(95155),
                l = s(12115),
                r = s(15239),
                n = s(85897),
                i = s(52619),
                o = s.n(i),
                c = s(90987);
            function d(e) {
                let {
                    imageUrl: t,
                    title: s,
                    rotation: l = 0,
                    alt: n = "Book Cover",
                    width: i = 140,
                    height: o = 200,
                    backCoverColor: d = "#01060f",
                } = e,
                    x = 0.2 * i,
                    m = 0.875 * i,
                    u = 0.95 * o;
                return (0, a.jsxs)(c.jc, {
                    openDelay: 150,
                    closeDelay: 150,
                    children: [
                        (0, a.jsx)(c.d0, {
                            asChild: !0,
                            children: (0, a.jsxs)("div", {
                                className:
                                    "relative [transform-style:preserve-3d] [transform:rotateY(0deg)] origin-left transition-transform duration-300 ease-out animate-[init_1s_ease_1] hover:[transform:rotateY(-20deg)_scale(1.03)_translateX(-2px)] focus:[transform:rotateY(-20deg)_scale(1.03)_translateX(-2px)]",
                                style: { width: i, height: o },
                                children: [
                                    (0, a.jsx)(r.default, {
                                        src: t,
                                        alt: n,
                                        width: i,
                                        height: o,
                                        priority: !0,
                                        unoptimized: !0,
                                        className:
                                            "pointer-events-none absolute inset-0 rounded-r-sm rounded-l-[3px] [transform:translateZ(22.5px)] bg-[#01060f] [box-shadow:rgba(0,0,0,0.02)_0px_1px_1px_0px,rgba(0,0,0,0.1)_0px_4px_8px_-4px,rgba(0,0,0,0.03)_0px_16px_24px_-8px] object-cover",
                                    }),
                                    (0, a.jsx)("div", {
                                        className:
                                            "absolute left-0 top-[1px] mt-1 bg-gradient-to-r from-white via-[#f9f9f9] to-white",
                                        style: {
                                            width: x,
                                            height: u,
                                            transform: "translateX(".concat(m, "px) rotateY(90deg)"),
                                        },
                                    }),
                                    (0, a.jsx)("div", {
                                        className:
                                            "absolute inset-0 rounded-r-sm [transform:translateZ(-22.5px)] ".concat(
                                                d,
                                                " shadow-md",
                                            ),
                                        style: { width: i, height: o },
                                    }),
                                ],
                            }),
                        }),
                        (0, a.jsx)(c.Et, {
                            sideOffset: 20,
                            className:
                                "[animation:none] transition-none !duration-0 [animation-duration:0s] [transition-duration:0s]",
                            style: {
                                transform: "rotate(".concat(l + 4, "deg)"),
                                animationDuration: "0s",
                                transitionDuration: "0s",
                            },
                            children: (0, a.jsx)("p", {
                                className: "font-medium text-sm",
                                children: s,
                            }),
                        }),
                    ],
                });
            }
            d.displayName = "Book";
            var x = s(18344),
                m = s(38541),
                u = s(53350),
                f = s(63933);
            let h = (0, l.forwardRef)((e, t) => {
                let { children: s, constraintsRef: r, onFirstDrag: n } = e,
                    [i, o] = (0, l.useState)(!1),
                    [c, d] = (0, l.useState)(!1);
                (0, x.s)();
                let h = (0, m.m)(),
                    [g, p] = (0, l.useState)({ x: 0, y: 0 }),
                    v = (0, u.d)(0),
                    b = (0, u.d)(0),
                    w = (0, l.useRef)(null);
                return (
                    (0, l.useEffect)(() => {
                        let e = w.current;
                        if (!e) return;
                        let t = (e) => {
                            if (Math.abs(e.deltaX) > 0 || 0 === e.deltaMode) {
                                e.preventDefault();
                                let t = -(0.8 * e.deltaX),
                                    s = -(0.8 * e.deltaY),
                                    a = v.get(),
                                    l = b.get(),
                                    i = a + t,
                                    o = l + s;
                                if (r.current && w.current) {
                                    let e = r.current.getBoundingClientRect(),
                                        t = w.current.getBoundingClientRect(),
                                        s = {
                                            left: -(e.width - t.width) / 2,
                                            right: (e.width - t.width) / 2,
                                            top: -(e.height - t.height) / 2,
                                            bottom: (e.height - t.height) / 2,
                                        },
                                        a = Math.max(s.left, Math.min(s.right, i)),
                                        l = Math.max(s.top, Math.min(s.bottom, o));
                                    (v.set(a), b.set(l));
                                } else (v.set(i), b.set(o));
                                c || (d(!0), null == n || n());
                            }
                        };
                        return (
                            e.addEventListener("wheel", t, { passive: !1 }),
                            () => {
                                e.removeEventListener("wheel", t);
                            }
                        );
                    }, [v, b, r, c, n]),
                    (0, l.useImperativeHandle)(t, () => ({
                        startDrag: (e) => {
                            h.start(e);
                        },
                    })),
                    (0, a.jsx)(f.P.div, {
                        ref: w,
                        drag: !0,
                        dragListener: !1,
                        dragControls: h,
                        dragConstraints: r,
                        dragElastic: 0,
                        dragMomentum: !1,
                        dragTransition: { power: 0.2, timeConstant: 100 },
                        onDragStart: () => {
                            (o(!0), c || (d(!0), null == n || n()));
                        },
                        onDragEnd: (e, t) => {
                            o(!1);
                        },
                        onPointerDown: (e) => {
                            let t = e.target,
                                s = "CANVAS" === t.tagName,
                                a = t.closest("[data-no-drag]"),
                                l = t.closest("[data-draggable-card]");
                            s || a || l || h.start(e);
                        },
                        className: "cursor-move touch-none w-dvw h-dvh",
                        style: { x: v, y: b },
                        whileHover: { cursor: "auto" },
                        children: s,
                    })
                );
            });
            h.displayName = "DraggableWrapper";
            var g = s(64269),
                p = s(11688),
                v = s(68640),
                b = s(63754),
                w = s(92145),
                j = s(29515),
                y = s(65369),
                N = s(66160);
            let k = (e) => {
                let { className: t, children: s } = e,
                    r = (0, p.d)(0),
                    n = (0, p.d)(0),
                    i = (0, l.useRef)(null),
                    o = (0, v.E)(),
                    [c, d] = (0, l.useState)({ top: 0, left: 0, right: 0, bottom: 0 }),
                    x = (0, b.V)(r),
                    m = (0, b.V)(n),
                    u = { stiffness: 100, damping: 20, mass: 0.5 },
                    f = (0, w.z)((0, j.G)(n, [-300, 300], [25, -25]), u),
                    h = (0, w.z)((0, j.G)(r, [-300, 300], [-25, 25]), u),
                    k = (0, w.z)((0, j.G)(r, [-300, 0, 300], [0.8, 1, 0.8]), u),
                    C = (0, w.z)((0, j.G)(r, [-300, 0, 300], [0.2, 0, 0.2]), u);
                return (
                    (0, l.useEffect)(() => {
                        let e = () => {
                            d({
                                top: -window.innerHeight / 2,
                                left: -window.innerWidth / 2,
                                right: window.innerWidth / 2,
                                bottom: window.innerHeight / 2,
                            });
                        };
                        return (
                            e(),
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, []),
                    (0, a.jsxs)(y.P.div, {
                        ref: i,
                        drag: !0,
                        dragConstraints: c,
                        dragElastic: 0.1,
                        dragSnapToOrigin: !0,
                        "data-draggable-card": !0,
                        onDragStart: () => {
                            document.body.style.cursor = "grabbing";
                        },
                        onDragEnd: (e, t) => {
                            ((document.body.style.cursor = "default"),
                                o.start({
                                    rotateX: 0,
                                    rotateY: 0,
                                    transition: { type: "spring", ...u },
                                }));
                            let s = x.get(),
                                a = m.get(),
                                l = Math.min(0.8, Math.sqrt(s * s + a * a) / 1e3);
                            ((0, N.i)(t.point.x, t.point.x + 0.3 * s, {
                                duration: 0.8,
                                ease: [0.2, 0, 0, 1],
                                bounce: l,
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                                mass: 0.8,
                            }),
                                (0, N.i)(t.point.y, t.point.y + 0.3 * a, {
                                    duration: 0.8,
                                    ease: [0.2, 0, 0, 1],
                                    bounce: l,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 15,
                                    mass: 0.8,
                                }));
                        },
                        style: {
                            rotateX: f,
                            rotateY: h,
                            opacity: k,
                            willChange: "transform",
                        },
                        animate: o,
                        whileHover: { scale: 1.02 },
                        onMouseMove: (e) => {
                            var t, s;
                            let { clientX: a, clientY: l } = e,
                                {
                                    width: o,
                                    height: c,
                                    left: d,
                                    top: x,
                                } = null !=
                                    (s =
                                        null == (t = i.current)
                                            ? void 0
                                            : t.getBoundingClientRect())
                                        ? s
                                        : { width: 0, height: 0, left: 0, top: 0 };
                            (r.set(a - (d + o / 2)), n.set(l - (x + c / 2)));
                        },
                        onMouseLeave: () => {
                            (r.set(0), n.set(0));
                        },
                        className: (0, g.cn)(
                            "relative w-fit h-fit overflow-hidden rounded-md bg-neutral-100 shadow-2xl transform-3d dark:bg-neutral-900",
                            t,
                        ),
                        children: [
                            s,
                            (0, a.jsx)(y.P.div, {
                                style: { opacity: C },
                                className:
                                    "pointer-events-none absolute inset-0 bg-white select-none",
                            }),
                        ],
                    })
                );
            },
                C = (e) => {
                    let { className: t, children: s, ...l } = e;
                    return (0, a.jsx)("div", {
                        className: (0, g.cn)("", t),
                        ...l,
                        children: s,
                    });
                };
            var E = s(11647);
            let L = () => {
                let [e, t] = (0, l.useState)(0),
                    [s, r] = (0, l.useState)(0),
                    [n, i] = (0, l.useState)(0),
                    [o, c] = (0, l.useState)(0),
                    [d, x] = (0, l.useState)(0),
                    [m, u] = (0, l.useState)(0),
                    [f, h] = (0, l.useState)({ hours: !1, minutes: !1, seconds: !1 });
                (0, l.useEffect)(() => {
                    let s = () => {
                        h({ seconds: !1, minutes: !1, hours: !1 });
                        let s = new Date(),
                            a = s.getSeconds(),
                            l = s.getMinutes(),
                            n = s.getHours(),
                            o = a !== e,
                            d = o && 59 === a,
                            m = d && 59 === l;
                        ((o || d || m) &&
                            setTimeout(() => {
                                h({ seconds: o, minutes: d, hours: m });
                            }, 10),
                            t(a),
                            r(l),
                            i(n));
                        let f = 59 === a ? (l + 1) % 60 : l,
                            g = 59 === a && 59 === l ? (n + 1) % 24 : n;
                        (c((a + 1) % 60), x(f), u(g));
                    };
                    s();
                    let a = setInterval(s, 1e3);
                    return () => clearInterval(a);
                }, [e]);
                let g = (e, t, s) => {
                    let l = (e) => (e < 10 ? "0".concat(e) : "".concat(e));
                    return (0, a.jsxs)("div", {
                        className: "relative w-[96px] h-[96px] rounded-lg ",
                        children: [
                            (0, a.jsxs)("div", {
                                className:
                                    " absolute top-0 flip-container w-full h-1/2 items-start z-10 rounded-lg ",
                                children: [
                                    (0, a.jsx)("div", {
                                        className:
                                            "clip-path-top-digit absolute z-10 class-test bg-component w-full rounded-lg font-mono text-6xl text-center  ".concat(
                                                s ? "animate-flip-top" : "opacity-0",
                                            ),
                                        children: l(t),
                                    }),
                                    (0, a.jsx)("div", {
                                        className:
                                            "clip-path-bottom-digit absolute z-20 class-test bg-component w-full rounded-lg font-mono text-6xl text-center ".concat(
                                                s ? "animate-flip-bottom" : "opacity-0",
                                            ),
                                        children: l(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className:
                                    "clip-path-top-digit absolute z-1 bg-component w-full flex items-center justify-center rounded-lg font-mono text-6xl text-center ",
                                children: l(s ? e : t),
                            }),
                            (0, a.jsx)("div", {
                                className:
                                    "clip-path-bottom-digit absolute z-1 bg-component w-full flex items-center justify-center rounded-lg font-mono text-6xl text-center",
                                children: l(t),
                            }),
                        ],
                    });
                };
                return (0, a.jsx)("div", {
                    className:
                        "relative flex items-center justify-center w-full h-full rounded-lg overflow-hidden",
                    children: (0, a.jsxs)("div", {
                        className: "relative z-10 flex items-center justify-center gap-8",
                        children: [
                            g(m, n, f.hours),
                            g(d, s, f.minutes),
                            g(o, e, f.seconds),
                        ],
                    }),
                });
            },
                P = (e) => {
                    let { x: t, y: s, name: l, style: r, ...n } = e,
                        i = "number" == typeof t && "number" == typeof s;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(f.P.div, {
                            className: "absolute z-50 h-4 w-4 rounded-full",
                            style: {
                                top: i ? void 0 : s,
                                left: i ? void 0 : t,
                                pointerEvents: "none",
                                ...r,
                            },
                            initial: { scale: 1, opacity: 1, x: i ? t : 0, y: i ? s : 0 },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                x: i
                                    ? [
                                        t,
                                        t + 120,
                                        t + 80,
                                        t - 50,
                                        t - 150,
                                        t + 30,
                                        t + 200,
                                        t - 80,
                                        t + 40,
                                        t,
                                    ]
                                    : 0,
                                y: i
                                    ? [
                                        s,
                                        s - 60,
                                        s + 30,
                                        s - 90,
                                        s + 20,
                                        s + 80,
                                        s - 40,
                                        s + 60,
                                        s - 20,
                                        s,
                                    ]
                                    : 0,
                            },
                            transition: {
                                duration: 12,
                                repeat: 1 / 0,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                times: [0, 0.1, 0.25, 0.35, 0.5, 0.6, 0.75, 0.85, 0.95, 1],
                            },
                            exit: { scale: 0, opacity: 0 },
                            children: [
                                (0, a.jsx)("svg", {
                                    width: "22",
                                    height: "25",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsxs)("g", {
                                        filter: "url(#a)",
                                        children: [
                                            (0, a.jsx)("path", {
                                                d: "M7.5 18 5 5l11 6.5-5.5 1.5-3 5Z",
                                                fill: "#007FFF",
                                            }),
                                            (0, a.jsx)("path", {
                                                d: "M5.254 4.57 4.3 4.005l.209 1.09 2.5 13 .247 1.284.673-1.122 2.896-4.828 5.307-1.447 1.14-.31-1.018-.603-11-6.5Z",
                                                stroke: "#fff",
                                                strokeLinecap: "square",
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className:
                                        "w-fit rounded-full bg-sky-500 px-2 py-1 text-white",
                                    children: l || "Anuja",
                                }),
                            ],
                        }),
                    });
                };
            var _ = s(86259),
                S = s(3998),
                M = s(74464);
            let D = (0, l.forwardRef)((e, t) => {
                let { className: s, style: r } = e,
                    n = (0, l.useRef)(null),
                    i = (0, l.useRef)(null),
                    [o, c] = (0, l.useState)("#CC5DE8"),
                    [d, x] = (0, l.useState)(8),
                    [m, u] = (0, l.useState)(!1),
                    [f, h] = (0, l.useState)([]),
                    [g, p] = (0, l.useState)([
                        {
                            points: [
                                { x: 8.69, y: 166.55, t: 0 },
                                { x: 36.24, y: 151.24, t: 10 },
                                { x: 61.34, y: 131.55, t: 20 },
                                { x: 89.82, y: 98.03, t: 30 },
                                { x: 109.2, y: 75.15, t: 40 },
                                { x: 119.63, y: 49.02, t: 50 },
                                { x: 120.12, y: 31, t: 60 },
                                { x: 120.37, y: 17.6, t: 70 },
                                { x: 113.84, y: 7.44, t: 80 },
                                { x: 101.76, y: 7.44, t: 90 },
                                { x: 88.36, y: 7.44, t: 100 },
                                { x: 79.92, y: 17.6, t: 110 },
                                { x: 74.71, y: 40.94, t: 120 },
                                { x: 69.01, y: 66.58, t: 130 },
                                { x: 64.79, y: 96, t: 140 },
                                { x: 54.12, y: 190.36, t: 150 },
                                { x: 55.16, y: 181.14, t: 0 },
                                { x: 60.63, y: 133.11, t: 10 },
                                { x: 81.41, y: 98.05, t: 20 },
                                { x: 107.96, y: 98.05, t: 30 },
                                { x: 123.84, y: 98.05, t: 40 },
                                { x: 133.94, y: 110.7, t: 50 },
                                { x: 131.07, y: 128.82, t: 60 },
                                { x: 129.46, y: 139.49, t: 70 },
                                { x: 127.59, y: 150.41, t: 80 },
                                { x: 125.41, y: 163.06, t: 90 },
                                { x: 122.87, y: 178.94, t: 100 },
                                { x: 130.13, y: 191.35, t: 110 },
                                { x: 152.12, y: 191.35, t: 120 },
                                { x: 184.2, y: 191.35, t: 130 },
                                { x: 219.19, y: 173.52, t: 140 },
                                { x: 237.1, y: 145.92, t: 150 },
                                { x: 243.2, y: 136.51, t: 160 },
                                { x: 245.68, y: 128.07, t: 170 },
                                { x: 245.93, y: 119.88, t: 180 },
                                { x: 246.18, y: 105, t: 190 },
                                { x: 237.74, y: 93.83, t: 200 },
                                { x: 222.85, y: 93.83, t: 210 },
                                { x: 203.99, y: 93.83, t: 220 },
                                { x: 189.6, y: 115.17, t: 230 },
                                { x: 189.6, y: 142.47, t: 240 },
                                { x: 189.6, y: 171.75, t: 250 },
                                { x: 205.48, y: 192.34, t: 260 },
                                { x: 239.21, y: 192.34, t: 270 },
                                { x: 285.07, y: 192.34, t: 280 },
                                { x: 335.86, y: 137.29, t: 290 },
                                { x: 359.2, y: 75.86, t: 300 },
                                { x: 365.79, y: 58.51, t: 310 },
                                { x: 368.26, y: 42.41, t: 320 },
                                { x: 368.26, y: 31.15, t: 330 },
                                { x: 368.26, y: 17.81, t: 340 },
                                { x: 364.04, y: 7.56, t: 350 },
                                { x: 352.13, y: 7.56, t: 360 },
                                { x: 340.47, y: 7.56, t: 370 },
                                { x: 332.78, y: 16.61, t: 380 },
                                { x: 325.83, y: 30.91, t: 390 },
                                { x: 317.69, y: 47.5, t: 400 },
                                { x: 311.67, y: 71.42, t: 410 },
                                { x: 309.2, y: 98.45, t: 420 },
                                { x: 303, y: 166.3, t: 430 },
                                { x: 316.9, y: 191.35, t: 440 },
                                { x: 349.94, y: 191.35, t: 450 },
                                { x: 390, y: 191.35, t: 460 },
                                { x: 434.54, y: 135.53, t: 470 },
                                { x: 457.29, y: 75.67, t: 480 },
                                { x: 463.8, y: 58.51, t: 490 },
                                { x: 466.28, y: 42.41, t: 500 },
                                { x: 466.28, y: 31.15, t: 510 },
                                { x: 466.28, y: 17.81, t: 520 },
                                { x: 462.06, y: 7.56, t: 530 },
                                { x: 450.15, y: 7.56, t: 540 },
                                { x: 438.48, y: 7.56, t: 550 },
                                { x: 430.79, y: 16.61, t: 560 },
                                { x: 423.84, y: 30.91, t: 570 },
                                { x: 415.7, y: 47.5, t: 580 },
                                { x: 409.68, y: 71.42, t: 590 },
                                { x: 407.22, y: 98.45, t: 600 },
                                { x: 401.02, y: 166.3, t: 610 },
                                { x: 414.91, y: 191.35, t: 620 },
                                { x: 444.42, y: 191.35, t: 630 },
                                { x: 473.87, y: 191.35, t: 640 },
                                { x: 489.88, y: 165.67, t: 650 },
                                { x: 499.47, y: 138.4, t: 660 },
                                { x: 508.96, y: 111.45, t: 670 },
                                { x: 520.62, y: 94.82, t: 680 },
                                { x: 544.94, y: 94.82, t: 690 },
                                { x: 565.04, y: 94.82, t: 700 },
                                { x: 580.92, y: 109.71, t: 710 },
                                { x: 580.92, y: 137.75, t: 720 },
                                { x: 580.92, y: 168.77, t: 730 },
                                { x: 560.79, y: 192.09, t: 740 },
                                { x: 535.36, y: 192.34, t: 750 },
                                { x: 512.98, y: 192.59, t: 760 },
                                { x: 498.29, y: 174.48, t: 770 },
                                { x: 499.77, y: 147.18, t: 780 },
                                { x: 501.51, y: 116.91, t: 790 },
                                { x: 519.87, y: 94.82, t: 800 },
                                { x: 543.94, y: 94.82, t: 810 },
                                { x: 557.84, y: 94.82, t: 820 },
                                { x: 569.51, y: 101, t: 830 },
                                { x: 578.68, y: 107.73, t: 840 },
                                { x: 603.55, y: 125.87, t: 850 },
                                { x: 622.71, y: 114.66, t: 860 },
                                { x: 630.05, y: 96.72, t: 870 },
                            ].map((e) => ({ x: 0.4 * e.x + 55, y: 0.4 * e.y + 130, t: e.t })),
                            color: "#597BD5",
                            strokeWidth: 8,
                        },
                    ]),
                    [v, b] = (0, l.useState)(0),
                    [w, j] = (0, l.useState)(0.65),
                    [y, N] = (0, l.useState)(50),
                    [k, C] = (0, l.useState)(20),
                    E = (0, l.useRef)(),
                    L = [
                        "#69DB7C",
                        "#4DABF7",
                        "#CC5DE8",
                        "#FF6B6B",
                        "#FFD43B",
                        "#51CF66",
                        "#F59E0B",
                    ],
                    [P, _] = (0, l.useState)(!1),
                    [D, A] = (0, l.useState)(!1),
                    [z, R] = (0, l.useState)(0),
                    [F, Y] = (0, l.useState)(!1),
                    B = (0, l.useRef)(),
                    T = (0, l.useCallback)(
                        (e, t, s) => {
                            if (w <= 0) return { x: e, y: t };
                            let a =
                                Math.sin(e * y + 0.01 * s) *
                                Math.sin(t * y * 0.5 + 0.02 * s) *
                                w,
                                l =
                                    Math.sin(t * y + 0.015 * s) *
                                    Math.sin(e * y * 0.5 + 0.025 * s) *
                                    w;
                            return { x: e + a, y: t + l };
                        },
                        [w, y],
                    ),
                    I = (0, l.useCallback)(
                        (e) => {
                            let t,
                                s,
                                a = i.current;
                            if (!a) return { x: 0, y: 0, t: 0 };
                            let l = a.getBoundingClientRect();
                            if ("touches" in e && e.touches.length > 0)
                                ((t = e.touches[0].clientX), (s = e.touches[0].clientY));
                            else {
                                if (!("clientX" in e)) return { x: 0, y: 0, t: 0 };
                                ((t = e.clientX), (s = e.clientY));
                            }
                            let r = t - l.left,
                                n = s - l.top,
                                o = l.width / 2,
                                c = l.height / 2,
                                d = (2 * Math.PI) / 180,
                                x = r - o,
                                m = n - c;
                            return {
                                x: x * Math.cos(d) - m * Math.sin(d) + o - 6,
                                y: x * Math.sin(d) + m * Math.cos(d) + c - 6,
                                t: Date.now() - v,
                            };
                        },
                        [v],
                    ),
                    U = (0, l.useCallback)(
                        (e) => {
                            (h([]),
                                b(Date.now()),
                                h([{ ...I(e), t: 0 }]),
                                u(!0),
                                e.preventDefault(),
                                e.stopPropagation());
                        },
                        [I],
                    ),
                    H = (0, l.useCallback)(
                        (e) => {
                            if (!m) return;
                            let t = I(e);
                            (h((e) => [...e, t]), e.preventDefault(), e.stopPropagation());
                        },
                        [m, I],
                    ),
                    W = (0, l.useCallback)(() => {
                        if (m) {
                            if ((u(!1), f.length > 0)) {
                                let e = { points: [...f], color: o, strokeWidth: d };
                                p((t) => [...t, e]);
                            }
                            h([]);
                        }
                    }, [m, f, o, d]),
                    X = (0, l.useCallback)(() => {
                        let e = i.current;
                        if (!e) return;
                        let t = e.getContext("2d");
                        if (t) {
                            t.clearRect(0, 0, e.width, e.height);
                            for (let e = 0; e < g.length; e++) {
                                let s = g[e],
                                    a = 0 === e ? Math.min(z, s.points.length) : s.points.length;
                                if (!(a <= 0)) {
                                    if (
                                        (t.save(),
                                            (t.strokeStyle = s.color),
                                            (t.lineWidth = s.strokeWidth),
                                            (t.lineCap = "round"),
                                            (t.lineJoin = "round"),
                                            1 === a)
                                    ) {
                                        ((t.fillStyle = s.color), t.beginPath());
                                        let e = s.points[0],
                                            a = T(e.x, e.y, k);
                                        (t.arc(a.x, a.y, s.strokeWidth / 2, 0, 2 * Math.PI),
                                            t.fill());
                                    } else if (a > 1) {
                                        t.beginPath();
                                        let e = s.points[0],
                                            l = T(e.x, e.y, k);
                                        t.moveTo(l.x, l.y);
                                        for (let e = 1; e < a; e++) {
                                            let a = s.points[e],
                                                l = T(a.x, a.y, k);
                                            t.lineTo(l.x, l.y);
                                        }
                                        t.stroke();
                                    }
                                    t.restore();
                                }
                            }
                        }
                    }, [g, T, k, z]),
                    q = (0, l.useCallback)(() => {
                        let e = i.current;
                        if (!e) return;
                        let t = e.getContext("2d");
                        if (t && (X(), 0 !== f.length)) {
                            if (
                                (t.save(),
                                    (t.strokeStyle = o),
                                    (t.lineWidth = d),
                                    (t.lineCap = "round"),
                                    (t.lineJoin = "round"),
                                    1 === f.length)
                            ) {
                                ((t.fillStyle = o), t.beginPath());
                                let e = f[0],
                                    s = T(e.x, e.y, k);
                                (t.arc(s.x, s.y, d / 2, 0, 2 * Math.PI), t.fill());
                            } else {
                                t.beginPath();
                                let e = f[0],
                                    s = T(e.x, e.y, k);
                                t.moveTo(s.x, s.y);
                                for (let e = 1; e < f.length; e++) {
                                    let s = f[e],
                                        a = T(s.x, s.y, k);
                                    t.lineTo(a.x, a.y);
                                }
                                t.stroke();
                            }
                            t.restore();
                        }
                    }, [f, o, d, T, k, X]),
                    O = (0, l.useCallback)(() => {
                        E.current && cancelAnimationFrame(E.current);
                        let e = () => {
                            (C((e) => e + 25),
                                (g.length > 0 || m) && (m ? q() : X()),
                                (E.current = requestAnimationFrame(e)));
                        };
                        E.current = requestAnimationFrame(e);
                    }, [g.length, m, q, X]),
                    G = (0, l.useCallback)(() => {
                        var e;
                        if (F) return;
                        (Y(!0), R(0));
                        let t = (null == (e = g[0]) ? void 0 : e.points.length) || 0,
                            s = 0;
                        (B.current && clearInterval(B.current),
                            (B.current = setInterval(() => {
                                (R(++s), s >= t && (clearInterval(B.current), Y(!1)));
                            }, 50)));
                    }, [F, g]);
                return (
                    (0, l.useEffect)(() => {
                        let e = i.current;
                        if (!e) return;
                        let t = e.getContext("2d");
                        if (!t) return;
                        e.getBoundingClientRect();
                        let s = window.devicePixelRatio || 1;
                        ((e.width = 360 * s),
                            (e.height = 360 * s),
                            t.scale(s, s),
                            (e.style.width = "360px"),
                            (e.style.height = "360px"));
                        let a = (e) => {
                            (e.stopPropagation(), U(e));
                        },
                            l = (e) => {
                                (e.stopPropagation(), H(e));
                            },
                            r = () => W(),
                            n = () => W(),
                            o = (e) => {
                                (e.preventDefault(), e.stopPropagation(), U(e));
                            },
                            c = (e) => {
                                (e.preventDefault(), e.stopPropagation(), H(e));
                            },
                            d = (e) => {
                                (e.preventDefault(), e.stopPropagation(), W());
                            };
                        return (
                            e.addEventListener("mousedown", a),
                            e.addEventListener("mousemove", l),
                            e.addEventListener("mouseup", r),
                            e.addEventListener("mouseleave", n),
                            e.addEventListener("touchstart", o, { passive: !1 }),
                            e.addEventListener("touchmove", c, { passive: !1 }),
                            e.addEventListener("touchend", d, { passive: !1 }),
                            O(),
                            () => {
                                (e.removeEventListener("mousedown", a),
                                    e.removeEventListener("mousemove", l),
                                    e.removeEventListener("mouseup", r),
                                    e.removeEventListener("mouseleave", n),
                                    e.removeEventListener("touchstart", o),
                                    e.removeEventListener("touchmove", c),
                                    e.removeEventListener("touchend", d),
                                    E.current && cancelAnimationFrame(E.current));
                            }
                        );
                    }, [U, H, W, O]),
                    (0, l.useImperativeHandle)(
                        t,
                        () => ({ startHelloAnimation: G, getElement: () => n.current }),
                        [G],
                    ),
                    (0, a.jsx)("div", {
                        ref: n,
                        className: "w-full h-full",
                        children: (0, a.jsxs)("div", {
                            className:
                                "relative w-full h-full mx-auto border border-4 border-[#CEB990] bg-[#ECDDC0] rounded-lg ",
                            children: [
                                (0, a.jsx)("canvas", {
                                    ref: i,
                                    className:
                                        "absolute top-0 left-0 cursor-crosshair w-full h-full",
                                    style: { touchAction: "none" },
                                }),
                                (0, a.jsxs)("div", {
                                    className:
                                        "absolute bottom-4 left-4 right-4 h-10 flex gap-2 justify-end pointer-events-none transition-all duration-300\n            }",
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: "flex gap-2 items-center pointer-events-auto",
                                            children: (0, a.jsx)(S.$, {
                                                onClick: () => {
                                                    (p([]), h([]));
                                                },
                                                variant: "ghost",
                                                className:
                                                    'group size-10 p-1.5 bg-white hover:bg-white hover:scale-110 transition-transform"',
                                                children: (0, a.jsx)(M.Z8, {
                                                    className: "text-black group-hover:text-gray-600",
                                                }),
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "flex gap-2 items-center pointer-events-auto",
                                            children: (0, a.jsx)(S.$, {
                                                onClick: () => {
                                                    (_(!P), A(!P));
                                                },
                                                variant: "ghost",
                                                className:
                                                    "border border-white border-4 hover:scale-110 transition-transform",
                                                style: { backgroundColor: o },
                                            }),
                                        }),
                                    ],
                                }),
                                P &&
                                (0, a.jsx)("div", {
                                    className: "absolute bottom-16 right-4 pointer-events-auto",
                                    children: (0, a.jsx)("div", {
                                        className: "flex flex-col gap-2 items-center",
                                        children: L.filter((e) => e !== o).map((e, t) =>
                                            (0, a.jsx)(
                                                "button",
                                                {
                                                    onClick: () => {
                                                        (c(e), _(!1), A(!1));
                                                    },
                                                    className:
                                                        "w-10 h-10 rounded-md border border-white border-4 cursor-pointer hover:scale-110 transition-all duration-300 animate-in slide-in-from-bottom opacity-0 ease-in",
                                                    style: {
                                                        backgroundColor: e,
                                                        animationDelay: "".concat(
                                                            (L.length - 1 - t) * 60,
                                                            "ms",
                                                        ),
                                                        animationFillMode: "forwards",
                                                    },
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
            D.displayName = "TurbulenceCanvas";
            var A = s(77883);
            function z() {
                return (0, a.jsx)("div", {
                    className: "relative group",
                    children: (0, a.jsx)("div", {
                        className:
                            "relative w-full h-full overflow-hidden rounded-2xl overflow-hidden shadow-lg select-none cursor-none bg-black",
                        children: (0, a.jsx)("img", {
                            src: "./images/image_27.png",
                            alt: "Logo variation 1",
                            className:
                                "w-full h-full object-contain transition-all select-none duration-150 ease-out",
                            draggable: !1,
                        }),
                    }),
                });
            }
            let R = (e) => {
                let {
                    width: t,
                    height: s,
                    minScratchPercentage: r = 50,
                    onComplete: n,
                    children: i,
                    className: o,
                } = e,
                    c = (0, l.useRef)(null),
                    [d, m] = (0, l.useState)(!1),
                    [u, h] = (0, l.useState)(!1),
                    p = (0, x.s)();
                ((0, l.useEffect)(() => {
                    let e = c.current,
                        t =
                            null == e
                                ? void 0
                                : e.getContext("2d", { willReadFrequently: !0 });
                    if (e && t) {
                        let s = new Image();
                        ((s.onload = () => {
                            t.drawImage(s, 0, 0, e.width, e.height);
                        }),
                            (s.src = "/about-me/chess-avatar/chess-cover.png"));
                    }
                }, []),
                    (0, l.useEffect)(() => {
                        let e = () => {
                            if (u) return;
                            let e = c.current,
                                t =
                                    null == e
                                        ? void 0
                                        : e.getContext("2d", { willReadFrequently: !0 });
                            if (e && t) {
                                let s = t.getImageData(0, 0, e.width, e.height).data,
                                    a = s.length / 4,
                                    l = 0;
                                for (let e = 3; e < s.length; e += 4) 0 === s[e] && l++;
                                (l / a) * 100 >= r &&
                                    (h(!0),
                                        t.clearRect(0, 0, e.width, e.height),
                                        e &&
                                        ((e.style.pointerEvents = "none"),
                                            (e.style.opacity = "0")),
                                        p.start({
                                            scale: [1, 1.5, 1],
                                            rotate: [0, 10, -10, 10, -10, 0],
                                            transition: { duration: 0.5 },
                                        }),
                                        n && n());
                            }
                        },
                            t = (e) => {
                                d && v(e.clientX, e.clientY);
                            },
                            s = (e) => {
                                if (!d) return;
                                let t = e.touches[0];
                                v(t.clientX, t.clientY);
                            },
                            a = () => {
                                (m(!1), e());
                            },
                            l = () => {
                                (m(!1), e());
                            };
                        return (
                            document.addEventListener("mousedown", t),
                            document.addEventListener("mousemove", t),
                            document.addEventListener("touchstart", s),
                            document.addEventListener("touchmove", s),
                            document.addEventListener("mouseup", a),
                            document.addEventListener("touchend", l),
                            document.addEventListener("touchcancel", l),
                            () => {
                                (document.removeEventListener("mousedown", t),
                                    document.removeEventListener("mousemove", t),
                                    document.removeEventListener("touchstart", s),
                                    document.removeEventListener("touchmove", s),
                                    document.removeEventListener("mouseup", a),
                                    document.removeEventListener("touchend", l),
                                    document.removeEventListener("touchcancel", l));
                            }
                        );
                    }, [d, u, r, n, p]));
                let v = (e, t) => {
                    let s = c.current,
                        a =
                            null == s
                                ? void 0
                                : s.getContext("2d", { willReadFrequently: !0 });
                    if (s && a) {
                        let l = s.getBoundingClientRect(),
                            r = e - l.left + 16,
                            n = t - l.top + 16;
                        ((a.globalCompositeOperation = "destination-out"),
                            a.beginPath(),
                            a.arc(r, n, 15, 0, 2 * Math.PI),
                            a.fill());
                    }
                };
                return (0, a.jsxs)(f.P.div, {
                    className: (0, g.cn)("relative select-none ", o),
                    style: {
                        width: t,
                        height: s,
                        cursor: "url('/about-me/cursor.svg'), auto",
                    },
                    animate: p,
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: c,
                            width: t,
                            height: s,
                            className: "z-10 absolute left-0 top-0 rounded-lg",
                            onMouseDown: () => m(!0),
                            onTouchStart: () => m(!0),
                        }),
                        i,
                    ],
                });
            };
            function F() {
                let e = (0, l.useRef)(null),
                    t = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    var s;
                    let a = new IntersectionObserver(
                        (s) => {
                            let [a] = s;
                            a.isIntersecting &&
                                !t.current &&
                                e.current &&
                                ((t.current = !0), e.current.startHelloAnimation());
                        },
                        { root: null, rootMargin: "0px", threshold: 0.4 },
                    ),
                        l = null == (s = e.current) ? void 0 : s.getElement();
                    return (
                        l && a.observe(l),
                        () => {
                            l && a.unobserve(l);
                        }
                    );
                }, []);
                let s = (0, l.useRef)(null),
                    i = (0, l.useRef)(null);
                return (0, a.jsx)("main", {
                    className: "w-full h-full fixed select-none scrollbar-none",
                    children: (0, a.jsx)("div", {
                        ref: s,
                        className:
                            "absolute flex items-center justify-center w-[3200px] h-[2760px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
                        children: (0, a.jsxs)(h, {
                            ref: i,
                            constraintsRef: s,
                            children: [
                                (0, a.jsxs)("div", {
                                    id: "mat-texture",
                                    className:
                                        "absolute overflow-hidden rounded-lg border-[4px] border-[#94BDE6] bg-[#2A6DB0] w-[3200px] h-[2760px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] shadow-lg bg-linear-grid bg-[size:16px_16px] bg-[position:12px_12px]",
                                    children: [
                                        (0, a.jsx)("div", {
                                            id: "window",
                                            style: { backgroundImage: "url('images/Layer-window.png')" },
                                            className:
                                                " z-10 opacity-[0.6] absolute w-full h-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-cover",
                                        }),
                                        (0, a.jsx)("div", {
                                            id: "lines",
                                            className:
                                                "absolute w-full h-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-linear-big-grid bg-[size:80px_80px] bg-[position:-4px_-4px]",
                                        }),
                                        (0, a.jsx)("div", {
                                            id: "diagonal-lines",
                                            className:
                                                "absolute w-full h-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-diagonal-grid bg-[size:80px_80px] bg-[position:-2.5px_-2.5px]",
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className:
                                        "absolute orchestration grid gap-4 grid-cols-[repeat(8,360px)] grid-rows-[repeat(7,360px)] w-[2992px] h-[2620px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                    children: [
                                        (0, a.jsx)("div", {
                                            className:
                                                "z-[-1] w-[2992px] h-[2240px] pointer-events-none",
                                        }),
                                        (0, a.jsx)(P, {
                                            style: { "--stagger": 14 },
                                            x: 1800,
                                            y: 1e3,
                                            name: "Anuja",
                                        }),
                                        (0, a.jsx)(r.default, {
                                            draggable: "false",
                                            loading: "lazy",
                                            style: { "--stagger": 10 },
                                            className:
                                                "select-none relative w-40 col-start-6 row-start-4 right-[60px] rotate-[-18deg] right-[230px] bottom-[80px] ",
                                            width: 600,
                                            height: 600,
                                            unoptimized: !0,
                                            src: "images/image_2.png",
                                            alt: "Profile example",
                                        }),
                                        (0, a.jsx)(r.default, {
                                            style: { "--stagger": 36 },
                                            draggable: "false",
                                            loading: "lazy",
                                            className:
                                                "shadow-lg select-none relative col-start-7 row-start-1 right-[60px] rotate-[9deg] left-[400px]",
                                            width: 160,
                                            height: 159,
                                            unoptimized: !0,
                                            src: "images/image.png",
                                            alt: "Profile example",
                                        }),
                                        (0, a.jsx)("div", {
                                            className:
                                                "orchestration select-none flex flex-col gap-2 relative rounded-lg w-[90vw] max-w-[100vw] col-start-4 row-start-4 col-span-2 row-span-2 left-1/2 -translate-x-1/2 bottom-[170px] sm:w-[568px] sm:left-[80px] sm:translate-x-0 sm:bottom-[220px] shadow-lg h-fit",
                                            children: (0, a.jsxs)("div", {
                                                style: { "--stagger": 1 },
                                                className:
                                                    "select-none flex flex-col gap-2 sm:gap-4 bg-component relative rounded-lg w-full max-w-[100vw] col-span-2 row-span-2 sm:w-[568px] shadow-lg p-6 h-fit ",
                                                children: [
                                                    (0, a.jsxs)("div", {
                                                        className: "flex gap-3 items-center ",
                                                        children: [
                                                            (0, a.jsxs)(n.eu, {
                                                                className: "size-12 sm:size-14",
                                                                children: [
                                                                    (0, a.jsx)(n.BK, {
                                                                        src: "./images/Imad.jpeg",
                                                                        alt: "Anuja Imad",
                                                                    }),
                                                                    (0, a.jsx)(n.q5, { children: "AI" }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("div", {
                                                                className:
                                                                    "flex flex-1 justify-between items-center",
                                                                children: [
                                                                    (0, a.jsxs)("div", {
                                                                        className: "flex flex-col",
                                                                        children: [
                                                                            (0, a.jsx)("p", {
                                                                                className:
                                                                                    "text-base sm:text-xl font-medium",
                                                                                children: " Anuja Imad ",
                                                                            }),
                                                                            (0, a.jsx)("p", {
                                                                                className:
                                                                                    "text-base font-medium text-muted-foreground",
                                                                                children:
                                                                                    " Developer ∘ Designer ∘ Founder ",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    (0, a.jsx)("div", {
                                                                        className: "sm:size-10 size-8",
                                                                        children: (0, a.jsx)("svg", {
                                                                            width: "100%",
                                                                            height: "100%",
                                                                            viewBox: "0 0 170 170",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: (0, a.jsx)("path", {
                                                                                fillRule: "evenodd",
                                                                                clipRule: "evenodd",
                                                                                d: "M48.984 57.6266C39.1262 37.9349 47.1632 14.0126 66.9347 4.19468C86.7063 -5.62326 110.726 2.38104 120.584 22.0727L165.788 112.373C175.646 132.065 167.609 155.987 147.838 165.805C128.066 175.623 104.047 167.619 94.1889 147.927L48.984 57.6266ZM112.699 38.9242C112.699 54.1243 100.327 66.4465 85.0649 66.4465C69.8029 66.4465 57.4306 54.1243 57.4306 38.9242C57.4306 23.7239 69.8029 11.4016 85.0649 11.4016C100.327 11.4016 112.699 23.7239 112.699 38.9242ZM4.2117 112.373L28.0668 64.7207L72.2659 153.625L72.3337 153.634C61.0496 169.079 39.8972 174.612 22.1623 165.805C2.3907 155.987 -5.64607 132.065 4.2117 112.373Z",
                                                                                fill: "currentColor",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                        className: "flex flex-col gap-4",
                                                        children: [
                                                            (0, a.jsxs)("span", {
                                                                className:
                                                                    "text-sm sm:text-base leading-relaxed",
                                                                children: [
                                                                    "Welcome to ",
                                                                    (0, a.jsx)("em", {
                                                                        children: "my space on the internet.",
                                                                    }),
                                                                    " I'm a designer who crafts interactions that spark joy, delight, and a sense of magic in users.",
                                                                ],
                                                            }),
                                                            (0, a.jsx)("p", {
                                                                className:
                                                                    "hidden sm:inline text-sm sm:text-base",
                                                                children:
                                                                    "Growing up, I spent hours playing Street Fighter, Donkey Kong, and Super Mario in a Super Nintendo with my dad, and somewhere between levels, I developed high expectations for how interactions should feel. ",
                                                            }),
                                                            (0, a.jsx)("p", {
                                                                className:
                                                                    "text-sm sm:text-base leading-relaxed",
                                                                children:
                                                                    "Have fun exploring my portfolio, and feel free to connect below.",
                                                            }),
                                                            (0, a.jsxs)("div", {
                                                                className: "flex flex-row gap-4",
                                                                children: [
                                                                    (0, a.jsx)(S.$, {
                                                                        asChild: !0,
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        className: "gap-2",
                                                                        children: (0, a.jsxs)(o(), {
                                                                            href: "https://x.com/anujaimad",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: [
                                                                                (0, a.jsx)(M.KK, {
                                                                                    className: "w-5 h-5",
                                                                                }),
                                                                                (0, a.jsx)("span", {
                                                                                    className: "hidden sm:inline",
                                                                                    children: "Twitter ",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(S.$, {
                                                                        asChild: !0,
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        className: "gap-2",
                                                                        children: (0, a.jsxs)(o(), {
                                                                            href: "https://www.linkedin.com/in/anujaimad/",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: [
                                                                                (0, a.jsx)(M.v8, {
                                                                                    className: "w-5 h-5",
                                                                                }),
                                                                                (0, a.jsx)("span", {
                                                                                    className: "hidden sm:inline",
                                                                                    children: "Linkedin  ",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(S.$, {
                                                                        asChild: !0,
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        className: "gap-2",
                                                                        children: (0, a.jsxs)(o(), {
                                                                            href: "https://github.com/anujaimad",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: [
                                                                                (0, a.jsx)(M.Cp, {
                                                                                    className: "w-5 h-5",
                                                                                }),
                                                                                (0, a.jsx)("span", {
                                                                                    className: "hidden sm:inline",
                                                                                    children: " GitHub  ",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(S.$, {
                                                                        asChild: !0,
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        className: "gap-2",
                                                                        children: (0, a.jsxs)(o(), {
                                                                            href: "mailto:1mad@mail.com",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: [
                                                                                (0, a.jsx)(M.gE, {
                                                                                    className: "w-5 h-5",
                                                                                }),
                                                                                (0, a.jsx)("span", {
                                                                                    className: "hidden sm:inline",
                                                                                    children: " Mail  ",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsx)(_.Separator, {
                                                        className:
                                                            "grow my-1.5 sm:my-2 shrink mix-blend-multiply dark:mix-blend-lighten bg-transparent border-t-[1px] border-dashed",
                                                    }),
                                                    (0, a.jsxs)("ul", {
                                                        className: "flex flex-col gap-4",
                                                        children: [
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#1798D5] flex-none",
                                                                    }),
                                                                    (0, a.jsxs)("div", {
                                                                        className:
                                                                            "flex flex-row w-full justify-between sm:items-center gap-4",
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm sm:text-base font-medium",
                                                                                        children: " BSc in MIS (special) ",
                                                                                    }),
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm text-muted-foreground",
                                                                                        children: " NSBM Green University ",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(E.E, {
                                                                                variant: "secondary",
                                                                                className:
                                                                                    "tabular text-xs font-normal text-muted-foreground w-fit",
                                                                                children: "2024 – Present",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block size-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#00A868] flex-none",
                                                                    }),
                                                                    (0, a.jsxs)("div", {
                                                                        className:
                                                                            "flex flex-row w-full justify-between sm:items-center gap-4",
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm sm:text-base font-medium",
                                                                                        children:
                                                                                            " HD in Cyber Security & Ethical Hacking ",
                                                                                    }),
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm text-muted-foreground",
                                                                                        children: " SICT Campus ",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(E.E, {
                                                                                variant: "secondary",
                                                                                className:
                                                                                    "tabular text-xs font-normal text-muted-foreground w-fit",
                                                                                children: "2023 - 2024",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#65A300] flex-none",
                                                                    }),
                                                                    (0, a.jsxs)("div", {
                                                                        className:
                                                                            "flex flex-row w-full justify-between sm:items-center gap-4",
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm sm:text-base font-medium",
                                                                                        children: " HD in ICT ",
                                                                                    }),
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm text-muted-foreground",
                                                                                        children:
                                                                                            " SLTCA Vocational Training Institute ",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(E.E, {
                                                                                variant: "secondary",
                                                                                className:
                                                                                    "tabular text-xs font-normal text-muted-foreground w-fit",
                                                                                children: "2023 - 2024",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#FF530A] flex-none",
                                                                    }),
                                                                    (0, a.jsxs)("div", {
                                                                        className:
                                                                            "flex flex-row w-full justify-between sm:items-center gap-4",
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm sm:text-base font-medium",
                                                                                        children: " CC in AI/ML Engineer ",
                                                                                    }),
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm text-muted-foreground",
                                                                                        children: " SLIIT ",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(E.E, {
                                                                                variant: "secondary",
                                                                                className:
                                                                                    "tabular text-xs font-normal text-muted-foreground w-fit",
                                                                                children: "2023",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#2E5BAA] flex-none",
                                                                    }),
                                                                    (0, a.jsxs)("div", {
                                                                        className:
                                                                            "flex flex-row w-full justify-between sm:items-center gap-4",
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: "flex flex-col ",
                                                                                children: [
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm sm:text-base font-medium",
                                                                                        children: " CC in Python ",
                                                                                    }),
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm text-muted-foreground",
                                                                                        children:
                                                                                            " University of Moratuwa ",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(E.E, {
                                                                                variant: "secondary",
                                                                                className:
                                                                                    "tabular text-xs font-normal text-muted-foreground w-fit",
                                                                                children: "2023",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 39 },
                                            className:
                                                "select-none flex flex-col gap-2 relative rounded-lg w-[90vw] max-w-[100vw] col-start-4 row-start-7 col-span-2 row-span-2 left-1/2 -translate-x-1/2 sm:w-[568px] sm:left-[80px] sm:translate-x-0 bottom-[480px] shadow-lg h-fit",
                                            children: (0, a.jsxs)("div", {
                                                className:
                                                    "select-none flex flex-col gap-4 bg-component relative rounded-lg w-full max-w-[100vw] col-span-2 row-span-2 sm:w-[568px] shadow-lg p-6 h-fit ",
                                                children: [
                                                    (0, a.jsx)("p", {
                                                        className: "font-medium",
                                                        children: "Projects",
                                                    }),
                                                    (0, a.jsxs)("ul", {
                                                        className: "flex flex-col gap-4",
                                                        children: [
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#1474FF] flex-none",
                                                                    }),
                                                                    (0, a.jsx)("div", {
                                                                        className: "w-full flex flex-col gap-4",
                                                                        children: (0, a.jsxs)("div", {
                                                                            className:
                                                                                "flex flex-row w-full justify-between gap-8 items-center justify-center",
                                                                            children: [
                                                                                (0, a.jsxs)("div", {
                                                                                    className: "flex flex-col ",
                                                                                    children: [
                                                                                        (0, a.jsx)("span", {
                                                                                            className: "font-medium",
                                                                                            children: " AAYU ",
                                                                                        }),
                                                                                        (0, a.jsx)("span", {
                                                                                            className:
                                                                                                "text-sm text-muted-foreground",
                                                                                            children:
                                                                                                " Childhood Cancer Application ",
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                (0, a.jsx)(E.E, {
                                                                                    variant: "secondary",
                                                                                    className:
                                                                                        "shrink-0 tabular text-xs font-normal text-muted-foreground ",
                                                                                    children: "2026",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#404040] flex-none",
                                                                    }),
                                                                    (0, a.jsx)("div", {
                                                                        className: "w-full flex flex-col gap-4",
                                                                        children: (0, a.jsxs)("div", {
                                                                            className:
                                                                                "flex flex-row w-full justify-between gap-4 items-center justify-center",
                                                                            children: [
                                                                                (0, a.jsxs)("div", {
                                                                                    className: "flex flex-col ",
                                                                                    children: [
                                                                                        (0, a.jsx)("span", {
                                                                                            className: "font-medium",
                                                                                            children: " Downie ",
                                                                                        }),
                                                                                        (0, a.jsx)("span", {
                                                                                            className:
                                                                                                "text-sm text-muted-foreground",
                                                                                            children:
                                                                                                " Download Manager Application ",
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                (0, a.jsx)(E.E, {
                                                                                    variant: "secondary",
                                                                                    className:
                                                                                        "shrink-0 tabular text-xs font-normal text-muted-foreground ",
                                                                                    children: "2025",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#F78B1F] flex-none",
                                                                    }),
                                                                    (0, a.jsx)("div", {
                                                                        className: "w-full flex flex-col gap-4",
                                                                        children: (0, a.jsxs)("div", {
                                                                            className:
                                                                                "flex flex-row w-full justify-between gap-8 items-center justify-center",
                                                                            children: [
                                                                                (0, a.jsx)("div", {
                                                                                    className: "flex flex-col",
                                                                                    children: (0, a.jsxs)("div", {
                                                                                        className: "flex flex-col ",
                                                                                        children: [
                                                                                            (0, a.jsx)("span", {
                                                                                                className: "font-medium",
                                                                                                children: " M LEARN ",
                                                                                            }),
                                                                                            (0, a.jsx)("span", {
                                                                                                className:
                                                                                                    "text-sm text-muted-foreground",
                                                                                                children:
                                                                                                    " Advanced AI ChatBot ",
                                                                                            }),
                                                                                        ],
                                                                                    }),
                                                                                }),
                                                                                (0, a.jsx)(E.E, {
                                                                                    variant: "secondary",
                                                                                    className:
                                                                                        "shrink-0 tabular text-xs font-normal text-muted-foreground ",
                                                                                    children: "2024",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, a.jsxs)("li", {
                                                                className:
                                                                    "flex flex-row gap-4 inline-flex items-center justify-center",
                                                                children: [
                                                                    (0, a.jsx)("div", {
                                                                        className:
                                                                            "hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm bg-[#F15A24] flex-none",
                                                                    }),
                                                                    (0, a.jsxs)("div", {
                                                                        className:
                                                                            "flex flex-row w-full justify-between gap-8 items-center justify-center",
                                                                        children: [
                                                                            (0, a.jsxs)("div", {
                                                                                className: "flex flex-col ",
                                                                                children: [
                                                                                    (0, a.jsx)("span", {
                                                                                        className: "font-medium",
                                                                                        children: " Area 51 ",
                                                                                    }),
                                                                                    (0, a.jsx)("span", {
                                                                                        className:
                                                                                            "text-sm text-muted-foreground",
                                                                                        children: " Virtual Projectsal Platform ",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, a.jsx)(E.E, {
                                                                                variant: "secondary",
                                                                                className:
                                                                                    "shrink-0 tabular text-xs font-normal text-muted-foreground ",
                                                                                children: "2023 - 2024",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 9 },
                                            className:
                                                "select-none relative col-start-3 row-start-2 w-[360px] h-[360px] right-[320px] top-[200px] rotate-[-2deg]",
                                            "data-no-drag": !0,
                                            children: (0, a.jsx)(D, {
                                                ref: e,
                                                className: "!rounded-2xl bg-white cursor-pointer",
                                                style: { animation: "wiggle 0.07s ease infinite" },
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 13 },
                                            className:
                                                "select-none relative col-start-4 row-start-3 w-[300px] h-[300px] shadow-2xl rounded-2xl overflow-hidden right-[120px] bottom-[260px] rotate-[4deg] ",
                                            children: (0, a.jsx)(z, {}),
                                        }),
                                        (0, a.jsxs)("svg", {
                                            style: { "--stagger": 40 },
                                            className:
                                                "select-none border-white border-4 rounded-lg relative row-start-5 col-start-8 top-[140px] left-[140px]",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            width: "100",
                                            height: "100",
                                            viewBox: "0 0 512 512",
                                            children: [
                                                (0, a.jsx)("rect", {
                                                    className: "rounded-lg",
                                                    fill: "#3178c6",
                                                    height: "512",
                                                    width: "512",
                                                }),
                                                (0, a.jsx)("path", {
                                                    clipRule: "evenodd",
                                                    d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z",
                                                    fill: "#fff",
                                                    fillRule: "evenodd",
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(r.default, {
                                            style: { "--stagger": 8 },
                                            draggable: "false",
                                            loading: "lazy",
                                            className:
                                                "pointer-events-none select-none relative col-start-4 row-start-5 right-[200px] top-[200px]",
                                            width: 92,
                                            height: 80,
                                            unoptimized: !0,
                                            src: "images/image_1.png",
                                            alt: "Profile example",
                                        }),
                                        (0, a.jsx)(r.default, {
                                            style: { "--stagger": 14 },
                                            draggable: "false",
                                            loading: "lazy",
                                            className:
                                                "rotate-[10deg] pointer-events-none select-none relative col-start-8 row-start-6 right-[240px]",
                                            width: 321,
                                            height: 86,
                                            unoptimized: !0,
                                            src: "images/image_6.png",
                                            alt: "Profile example",
                                        }),
                                        (0, a.jsx)(r.default, {
                                            style: { "--stagger": 16 },
                                            draggable: "false",
                                            loading: "lazy",
                                            className:
                                                "select-none pointer-events-none relative col-start-7 row-start-6 top-[200px] right-[160px]",
                                            width: 160,
                                            height: 142,
                                            unoptimized: !0,
                                            src: "images/image_3.png",
                                            alt: "Profile example",
                                        }),
                                        (0, a.jsx)(r.default, {
                                            style: { "--stagger": 11 },
                                            draggable: "false",
                                            loading: "lazy",
                                            className:
                                                "select-none pointer-events-none relative col-start-3 row-start-6 bottom-[140px] right-[240px] rotate-[36deg]",
                                            width: 98,
                                            height: 160,
                                            unoptimized: !0,
                                            src: "images/image_7.png",
                                            alt: "Profile example",
                                        }),
                                        (0, a.jsxs)("svg", {
                                            style: { "--stagger": 15 },
                                            className:
                                                "select-none relative left-[140px] col-start-7 row-start-7 top-[200px] border-4 border-white rounded-lg",
                                            width: "127",
                                            height: "57",
                                            viewBox: "0 0 138 57",
                                            "aria-label": "MDX",
                                            role: "img",
                                            children: [
                                                (0, a.jsx)("rect", {
                                                    height: "55.5",
                                                    rx: "4.5",
                                                    width: "136.5",
                                                    x: ".75",
                                                    y: ".75",
                                                }),
                                                (0, a.jsxs)("g", {
                                                    fill: "none",
                                                    stroke: "#fff",
                                                    strokeWidth: "6",
                                                    children: [
                                                        (0, a.jsx)("path", {
                                                            d: "M16.5 44V19L30.25 32.75l14-14v25",
                                                        }),
                                                        (0, a.jsx)("path", { d: "M70.5 40V10.75" }),
                                                        (0, a.jsx)("path", {
                                                            d: "M57 27.25L70.5 40.75l13.5-13.5",
                                                        }),
                                                        (0, a.jsx)("path", {
                                                            d: "M122.5 41.24L93.25 12M93.5 41.25L122.75 12",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        [
                                            {
                                                id: 1,
                                                unoptimized: !0,
                                                src: "./images/imad1.jpeg",
                                                alt: "Profile example",
                                                className:
                                                    "relative max-w-[100vw] col-start-3 row-start-4 w-fit h-fit col-span-1",
                                                rotate: "rotate-[14deg]",
                                                position: "bottom-[160px] left-[100px]",
                                                caption: "Exploring new places",
                                            },
                                            {
                                                id: 2,
                                                unoptimized: !0,
                                                src: "./images/imad3.jpeg",
                                                alt: "Profile example",
                                                className:
                                                    "relative max-w-[100vw] col-start-3 row-start-5 w-fit h-fit col-span-1",
                                                rotate: "rotate-[-12deg]",
                                                position: "bottom-[160px] left-[240px]",
                                                caption: "Coffee & design",
                                            },
                                            {
                                                id: 3,
                                                unoptimized: !0,
                                                src: "./images/imad4.jpeg",
                                                alt: "Profile example",
                                                className:
                                                    "relative max-w-[100vw] col-start-6 row-start-4 w-fit h-fit col-span-1",
                                                rotate: "rotate-[2deg]",
                                                position: "bottom-[180px] left-[80px]",
                                                caption: "Weekend adventures",
                                            },
                                            {
                                                id: 4,
                                                unoptimized: !0,
                                                src: "./images/imad2.jpeg",
                                                alt: "Profile example",
                                                className:
                                                    "relative max-w-[100vw] col-start-6 row-start-5 w-fit h-fit col-span-1",
                                                rotate: "rotate-[8deg]",
                                                position: "bottom-[200px] right-[70px]",
                                                caption: "Creative moments",
                                            },
                                        ].map((e) =>
                                            (0, a.jsx)(
                                                C,
                                                {
                                                    className: ""
                                                        .concat(e.className, " ")
                                                        .concat(e.rotate, " ")
                                                        .concat(e.position),
                                                    style: { "--stagger": e.id + 2 },
                                                    children: (0, a.jsx)(k, {
                                                        children: (0, a.jsx)("div", {
                                                            className:
                                                                "select-none max-w-[190px] pb-10 bg-white p-2 shadow-lg",
                                                            children: (0, a.jsx)("img", {
                                                                src: e.src,
                                                                alt: e.alt,
                                                                width: 223,
                                                                height: 254,
                                                                className: "pointer-events-none",
                                                            }),
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 12 },
                                            className:
                                                "select-none col-start-7 col-span-2 h-fit row-start-5 w-[360px] flex rotate-[4deg]",
                                            children: (0, a.jsx)("div", {
                                                className:
                                                    "w-[600px] h-[200px] flex items-center justify-center",
                                                children: (0, a.jsx)("div", {
                                                    className:
                                                        "relative flex items-center justify-center gap-8 w-full h-full p-8 rounded-lg overflow-hidden",
                                                    children: (0, a.jsx)(L, {}),
                                                }),
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 17 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-3 row-start-1 rotate-[14deg] top-[180px] left-[240px] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_13.png",
                                                width: 165,
                                                height: 201,
                                                backCoverColor: "bg-[#EB1C24]",
                                                title: "Japanese Design",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 19 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-6 rounded-lg row-start-2 top-[80px] left-[130px]",
                                            "data-no-drag": !0,
                                            children: (0, a.jsx)(R, {
                                                width: 360,
                                                height: 360,
                                                children: (0, a.jsxs)(o(), {
                                                    onPointerDown: (e) => e.stopPropagation(),
                                                    href: "/chess",
                                                    className:
                                                        "group relative w-full h-full rounded-lg bg-black flex flex-col gap-4 items-center justify-center overflow-hidden",
                                                    children: [
                                                        (0, a.jsx)(r.default, {
                                                            unoptimized: !0,
                                                            draggable: "false",
                                                            className: "rounded-lg absolute bottom-0 left-0",
                                                            unoptimized: !0,
                                                            src: "images/background.svg",
                                                            width: 360,
                                                            height: 360,
                                                            alt: "Horse",
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className:
                                                                "scrolling-text-top absolute top-4 w-[400%] flex",
                                                            children: (0, a.jsx)("span", {
                                                                className:
                                                                    "text-[110px] text-white font-bold whitespace-nowrap",
                                                                children:
                                                                    "PLAY PLAY PLAY PLAY PLAY PLAY PLAY PLAY ",
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className:
                                                                "scrolling-text-bottom absolute bottom-4 w-[400%] flex",
                                                            children: (0, a.jsx)("span", {
                                                                className:
                                                                    "text-[110px] text-white font-bold whitespace-nowrap rotate-180",
                                                                children:
                                                                    "PLAY PLAY PLAY PLAY PLAY PLAY PLAY PLAY ",
                                                            }),
                                                        }),
                                                        (0, a.jsx)(r.default, {
                                                            unoptimized: !0,
                                                            draggable: "false",
                                                            className: " rounded-lg absolute top-0 left-0",
                                                            unoptimized: !0,
                                                            src: "images/chess-poster.svg",
                                                            width: 177,
                                                            height: 172,
                                                            alt: "",
                                                        }),
                                                        (0, a.jsx)(r.default, {
                                                            unoptimized: !0,
                                                            draggable: "false",
                                                            className:
                                                                " rounded-lg absolute bottom-0 right-0",
                                                            unoptimized: !0,
                                                            src: "images/king-chess-poster.svg",
                                                            width: 224,
                                                            height: 233,
                                                            alt: "",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 20 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-5 row-start-2 top-[200px] left-[130px] rotate-[75deg] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_12.png",
                                                width: 133,
                                                height: 201,
                                                backCoverColor: "bg-[#E32A24]",
                                                title: "Logo Modernism",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 21 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-2 row-start-4 rotate-[6deg] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_1.jpg",
                                                width: 135,
                                                height: 198,
                                                backCoverColor: "bg-[#F1855A]",
                                                title: "Graphic Design Visionaries",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 22 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-4 row-start-2 rotate-[-16deg] top-[10px] left-[320px] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_4.jpg",
                                                width: 135,
                                                height: 200,
                                                backCoverColor: "bg-[#2D469B]",
                                                title: "The Making of Prince of Persia",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 23 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-1 row-start-5 rotate-[12deg] left-[140px] top-[200px] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_5.jpg",
                                                width: 130,
                                                height: 198,
                                                backCoverColor: "bg-[#CA2528]",
                                                title: "Creativity Inc.",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 24 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-6 row-start-6 rotate-[-14deg] left-[140px] bottom-[80px] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_3.jpg",
                                                width: 145,
                                                height: 198,
                                                backCoverColor: "bg-[#F03800]",
                                                title: "Dieter Rams",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 9 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-7 row-start-4 rotate-[18deg] left-[120px] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_2.jpg",
                                                width: 136,
                                                height: 199,
                                                backCoverColor: "bg-[#ED6626]",
                                                title: "Grid Systems",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 25 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-4 row-start-6 rotate-[-12deg] top-[280px] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_18.jpg",
                                                width: 128,
                                                height: 197,
                                                backCoverColor: "bg-[#FFF20C]",
                                                title: "Weapons of Math Destruction",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 26 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-6 row-start-7 rotate-[8deg] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_10.png",
                                                width: 137,
                                                height: 194,
                                                backCoverColor: "bg-[#0A0A0A]",
                                                title: "Elden Ring",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 27 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-3 row-start-6 rotate-[-18deg] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_14.jpg",
                                                width: 143,
                                                height: 198,
                                                backCoverColor: "bg-[#485556]",
                                                title: "NieR: Art",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 28 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-1 row-start-3 rotate-[10deg] left-[140px] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_6.jpg",
                                                width: 143,
                                                height: 201,
                                                backCoverColor: "bg-[#1983FC]",
                                                title: "Mega Man",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 29 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-3 row-start-7 rotate-[-6deg] [perspective:600px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_11.png",
                                                width: 143,
                                                height: 202,
                                                backCoverColor: "bg-[#E1D2BC]",
                                                title: "Monster Hunter",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 30 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-7 row-start-2 rotate-[14deg] left-[380px]",
                                            children: (0, a.jsx)(d, {
                                                href: "/book1.jpg",
                                                imageUrl: "images/image_7.jpg",
                                                width: 160,
                                                height: 208,
                                                backCoverColor: "bg-[#f2f2f2]",
                                                title: "Made in Japan",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 31 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-5 row-start-1 rotate-[8deg] top-[80px]",
                                            children: (0, a.jsx)(A.Y, {
                                                albumCover: "images/image_11.jpg",
                                                albumTitle: "Clube da Esquina",
                                                artist: "Milton Nascimento",
                                                musicFile: "about-me/songs/clube-da-esquina.mp3",
                                                size: "md",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 32 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-2 row-start-1 rotate-[-8deg] top-[200px]",
                                            children: (0, a.jsx)(A.Y, {
                                                albumCover: "images/image_17.jpg",
                                                albumTitle: "Super Eurobeat Collection",
                                                artist: "Initial D",
                                                musicFile: "about-me/songs/initial-d.mp3",
                                                size: "md",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 33 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-8 row-start-4 rotate-[8deg] left-[100px] bottom-[120px]",
                                            children: (0, a.jsx)(A.Y, {
                                                albumCover: "images/image_10.jpg",
                                                albumTitle: "Scenery",
                                                artist: "Ryo Fukui",
                                                musicFile: "about-me/songs/scenery.mp3",
                                                size: "md",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 34 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-7 row-start-7 rotate-[8deg] left-[240px] bottom-[120px]",
                                            children: (0, a.jsx)(A.Y, {
                                                albumCover: "images/image_9.png",
                                                albumTitle: "Silk Sonic",
                                                artist: "Bruno Mars & Anderson .Paak",
                                                musicFile: "about-me/songs/door-open.mp3",
                                                size: "md",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 35 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-2 row-start-7 rotate-[8deg] bottom-[120px]",
                                            children: (0, a.jsx)(A.Y, {
                                                albumCover: "./images/image_15.png",
                                                albumTitle: "Elis & Tom",
                                                artist: "Elis Regina & Tom Jobim",
                                                musicFile: "about-me/songs/aguas-de-marco.mp3",
                                                size: "md",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 7 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-3 row-start-5 rotate-[8deg] right-[140px] bottom-[120px]",
                                            children: (0, a.jsx)(A.Y, {
                                                albumCover: "images/image_20.jpg",
                                                albumTitle: "Tank!",
                                                artist: "Cowboy Bebop",
                                                musicFile: "about-me/songs/bebop.mp3",
                                                size: "md",
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { "--stagger": 36 },
                                            className:
                                                "select-none w-fit h-fit relative col-start-7 row-start-1 rotate-[8deg] right-[160px] top-[80px] ",
                                            children: (0, a.jsx)(A.Y, {
                                                albumCover: "images/image_9.jpg",
                                                albumTitle: "Shiki no Uta",
                                                artist: "Nujabes",
                                                musicFile: "about-me/songs/shiki-no-uta.mp3",
                                                size: "md",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
        },
        77883: (e, t, s) => {
            "use strict";
            s.d(t, { AlbumProvider: () => o.r, Y: () => x });
            var a = s(95155),
                l = s(12115),
                r = s(63933),
                n = s(56341),
                i = s(64269),
                o = s(6449),
                c = s(90987),
                d = s(15239);
            let x = l.forwardRef((e, t) => {
                let {
                    className: s,
                    albumCover: x,
                    albumTitle: m,
                    artist: u,
                    musicFile: f,
                    size: h = "md",
                    ...g
                } = e,
                    {
                        currentPlayingId: p,
                        setCurrentPlayingId: v,
                        setCurrentTrack: b,
                        setCurrentSound: w,
                        volume: j,
                        isSoundEnabled: y,
                    } = (0, o.A)(),
                    N = (0, l.useMemo)(
                        () =>
                            ""
                                .concat(m, "-")
                                .concat(u, "-")
                                .concat(f)
                                .replace(/\s+/g, "-")
                                .toLowerCase(),
                        [m, u, f],
                    ),
                    k = p === N,
                    [C, { stop: E }] = (0, n.A)(y ? f : "", {
                        volume: j,
                        soundEnabled: y,
                        onend: () => {
                            (v(null), b(null), w(null));
                        },
                    });
                return (
                    (0, l.useEffect)(() => {
                        k && w({ play: C, stop: E });
                    }, [k, C, E, w]),
                    (0, l.useEffect)(() => {
                        p !== N && null !== p && E();
                    }, [p, N, E]),
                    (0, l.useEffect)(() => {
                        !y && k && (E(), v(null), b(null), w(null));
                    }, [y, k, E, v, b, w]),
                    (0, a.jsx)("div", {
                        ref: t,
                        className: (0, i.cn)(
                            "relative cursor-pointer select-none",
                            { sm: "w-32 h-32", md: "w-48 h-48", lg: "w-64 h-64" }[h],
                            s,
                        ),
                        onClick: () => {
                            k
                                ? (E(), v(null), b(null))
                                : y &&
                                (p && E(),
                                    C(),
                                    v(N),
                                    b({
                                        id: N,
                                        albumTitle: m,
                                        artist: u,
                                        albumCover: x,
                                        musicFile: f,
                                    }));
                        },
                        ...g,
                        children: (0, a.jsxs)("div", {
                            className: "relative w-full h-full",
                            children: [
                                (0, a.jsxs)(r.P.div, {
                                    className:
                                        "absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl",
                                    animate: { rotate: 360 * !!k },
                                    transition: {
                                        duration: 3,
                                        repeat: k ? 1 / 0 : 0,
                                        ease: "linear",
                                    },
                                    children: [
                                        (0, a.jsx)("div", {
                                            className:
                                                "absolute inset-2 rounded-full border border-gray-700/30",
                                        }),
                                        (0, a.jsx)("div", {
                                            className:
                                                "absolute inset-4 rounded-full border border-gray-700/20",
                                        }),
                                        (0, a.jsx)("div", {
                                            className:
                                                "absolute inset-6 rounded-full border border-gray-700/20",
                                        }),
                                        (0, a.jsx)("div", {
                                            className:
                                                "absolute inset-8 rounded-full border border-gray-700/20",
                                        }),
                                        (0, a.jsxs)("div", {
                                            className:
                                                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-red-800 overflow-hidden border-2 border-red-900",
                                            children: [
                                                (0, a.jsx)(d.default, {
                                                    src: x,
                                                    alt: "".concat(m, " center"),
                                                    className: "w-full h-full object-cover",
                                                    width: 80,
                                                    height: 80,
                                                    unoptimized: !0,
                                                }),
                                                (0, a.jsx)("div", {
                                                    className:
                                                        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/50",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)(c.jc, {
                                    openDelay: 150,
                                    closeDelay: 150,
                                    children: [
                                        (0, a.jsx)(c.d0, {
                                            asChild: !0,
                                            children: (0, a.jsxs)(r.P.div, {
                                                className:
                                                    "absolute inset-0 rounded-lg overflow-hidden shadow-lg",
                                                initial: { x: 0 },
                                                animate: { x: k ? "45%" : 0 },
                                                transition: { duration: 0.6, ease: "easeInOut" },
                                                children: [
                                                    (0, a.jsx)(d.default, {
                                                        src: x,
                                                        alt: "".concat(m, " by ").concat(u),
                                                        className: "w-full h-full object-cover",
                                                        width: 216,
                                                        height: 216,
                                                        unoptimized: !0,
                                                    }),
                                                    (0, a.jsx)(r.P.div, {
                                                        className: "absolute inset-0 bg-black/20",
                                                        initial: { opacity: 0 },
                                                        animate: { opacity: +!!k },
                                                        transition: { duration: 0.3 },
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)(c.Et, {
                                            sideOffset: 8,
                                            children: (0, a.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    (0, a.jsx)("p", {
                                                        className: "font-medium",
                                                        children: m,
                                                    }),
                                                    (0, a.jsx)("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: u,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
            x.displayName = "Album";
        },
        85897: (e, t, s) => {
            "use strict";
            s.d(t, { BK: () => o, eu: () => i, q5: () => c });
            var a = s(95155),
                l = s(12115),
                r = s(14057),
                n = s(64269);
            let i = l.forwardRef((e, t) => {
                let { className: s, ...l } = e;
                return (0, a.jsx)(r.bL, {
                    ref: t,
                    className: (0, n.cn)(
                        "relative flex h-24 w-24 shrink-0 overflow-hidden rounded-full",
                        s,
                    ),
                    ...l,
                });
            });
            i.displayName = r.bL.displayName;
            let o = l.forwardRef((e, t) => {
                let { className: s, ...l } = e;
                return (0, a.jsx)(r._V, {
                    ref: t,
                    className: (0, n.cn)("aspect-square h-full w-full", s),
                    ...l,
                });
            });
            o.displayName = r._V.displayName;
            let c = l.forwardRef((e, t) => {
                let { className: s, ...l } = e;
                return (0, a.jsx)(r.H4, {
                    ref: t,
                    className: (0, n.cn)(
                        "flex h-full w-full items-center justify-center rounded-full bg-muted",
                        s,
                    ),
                    ...l,
                });
            });
            c.displayName = r.H4.displayName;
        },
        86259: (e, t, s) => {
            "use strict";
            s.d(t, { Separator: () => i });
            var a = s(95155),
                l = s(12115),
                r = s(47321),
                n = s(64269);
            let i = l.forwardRef((e, t) => {
                let {
                    className: s,
                    orientation: l = "horizontal",
                    decorative: i = !0,
                    ...o
                } = e;
                return (0, a.jsx)(r.b, {
                    ref: t,
                    decorative: i,
                    orientation: l,
                    className: (0, n.cn)(
                        "shrink-0 bg-border",
                        "horizontal" === l ? "h-[1px] w-full" : "h-full w-[1px]",
                        s,
                    ),
                    ...o,
                });
            });
            i.displayName = r.b.displayName;
        },
        90987: (e, t, s) => {
            "use strict";
            s.d(t, { Et: () => c, d0: () => o, jc: () => i });
            var a = s(95155),
                l = s(12115),
                r = s(81141),
                n = s(64269);
            let i = r.bL,
                o = r.l9,
                c = l.forwardRef((e, t) => {
                    let {
                        className: s,
                        align: l = "center",
                        sideOffset: i = 4,
                        ...o
                    } = e;
                    return (0, a.jsx)(r.UC, {
                        ref: t,
                        align: l,
                        sideOffset: i,
                        className: (0, n.cn)(
                            "z-50 w-fit rounded-md border bg-component p-2 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            s,
                        ),
                        ...o,
                    });
                });
            c.displayName = r.UC.displayName;
        },
    },
    (e) => {
        (e.O(
            0,
            [1356, 4909, 2619, 3933, 7831, 9993, 9450, 3319, 8441, 1255, 7358],
            () => e((e.s = 7676)),
        ),
            (_N_E = e.O()));
    },
]);
