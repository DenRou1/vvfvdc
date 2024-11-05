console.log("Hello!");
let p, y;
function f() {
    p && (clearInterval(p),
    p = null);
    const s = n.get("freeCoinsState");
    !s.timeLeft || s.claimable || (y = Date.now() + s.timeLeft,
    p = setInterval(async () => {
        if (Date.now() > y) {
            clearInterval(p),
            p = null,
            n.set("freeCoinsState", await v()),
            f();
            return
        }
        const t = D(y - Date.now());
        n.set("freeCoinCountdownString", t)
    }
    , 1e3))
}
function D(s) {
    const a = Math.floor(s / 36e5)
      , l = Math.floor((s - a * 36e5) / 6e4)
      , d = Math.round((s - a * 36e5 - l * 6e4) / 1e3);
    return `${a} hour${a === 1 ? "" : "s"}, ${l} minute${l === 1 ? "" : "s"} and ${d} second${d === 1 ? "" : "s"}`
}
async function E(s) {
    n.set("freeCoinsState", {
        loading: !0,
        claimable: !1
    });
    const t = await b("/freeCoins", {
        method: "POST",
        body: JSON.stringify({
            hCaptchaResponse: s
        })
    });
    if (t.error)
        return m("Error!", t.message, "error"),
        n.set("freeCoinsState", await v()),
        f();
    if (!t.success)
        return n.set("freeCoinsState", t),
        f(),
        m({
            title: "Already claimed!",
            text: "You have already claimed your daily 10 free coin gift for today, come back tomorrow!",
            icon: "error"
        });
    m({
        title: "Success!",
        text: `You claimed a free coin! You have claimed ${t.coinsClaimed}/10 of your daily free coins.`,
        icon: "success"
    });
    const o = n.get("user");
    o.coins += 1,
    n.set("user", o),
    n.set("freeCoinsState", t),
    f()
}
async function v() {
    return b("/freeCoinsStatus")
}
async function h(s) {
    m({
        title: "Preparing order...",
        button: !1
    });
    const t = await b("/payments/create-order", {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify({
            package: s,
            method: "stripe"
        })
    });
    if (t.error)
        return m({
            title: "Error preparing payment!",
            text: t.message,
            icon: "error"
        });
    m({
        title: "Sending to checkout page...",
        button: !1
    }),
    window.location.replace(t.url)
}
async function H(s, t) {
    return await (await fetch("https://advertise.bot-hosting.net/bot-hosting", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            MAX_WIDTH: s,
            MAX_HEIGHT: t
        })
    })).json()
}
async function N(s) {
    const t = document.getElementById(s)
      , o = await H(336, 280);
    if (o.message || !o.data)
        return window.nitroAds.createAd(s, {
            refreshTime: 30,
            report: {
                enabled: !0,
                wording: "Report Ad",
                position: "fixed-bottom-right"
            },
            renderVisibleOnly: !0
        }),
        null;
    const i = document.createElement("a");
    i.href = `https://advertise.bot-hosting.net/bot-hosting/${o.data.id}/${DataManager.get("user").id}/click`,
    i.target = "_blank";
    const a = document.createElement("img");
    a.src = "https://advertise.bot-hosting.net/" + o.data.PathToImage;
    const [l,d] = o.data.adSizePixels.split("x");
    return a.height = +d,
    a.width = +l,
    i.appendChild(a),
    t.appendChild(i),
    () => fetch(`https://advertise.bot-hosting.net/bot-hosting/${o.data.id}/${DataManager.get("user").id}/view`)
}
const T = {
    name: "Ad",
    data() {
        var s;
        return {
            config: (s = n.get("config")) != null ? s : null,
            adMounted: !1,
            onView: null
        }
    },
    async mounted() {
        n.bind(this),
        await this.mountAd()
    },
    unmounted() {
        n.unbind(this)
    },
    watch: {
        config() {
            this.mountAd()
        }
    },
    methods: {
        async mountAd() {
            this.adMounted || (this.config !== null && this.config.flags.BH_ADS ? (this.adMounted = !0,
            this.onView = await N("ad-placement")) : this.config !== null && (window.nitroAds.createAd("ad-placement", {
                refreshTime: 30,
                report: {
                    enabled: !0,
                    wording: "Report Ad",
                    position: "fixed-bottom-right"
                },
                renderVisibleOnly: !0
            }),
            this.adMounted = !0))
        },
        view() {
            this.onView && this.onView()
        }
    }
}
  , Y = {
    id: "ad-placement"
};
function V(s, t, o, i, a, l) {
    return r(),
    c("div", Y)
}
var $ = P(T, [["render", V]]);
const O = {
    class: "form"
}
  , R = {
    class: "container"
}
  , L = {
    class: "maintitle"
}
  , j = w("You have ")
  , J = w(" coins")
  , U = {
    class: "earnBox"
}
  , q = e("h1", {
    class: "maintitle"
}, "FREE COINS", -1)
  , K = e("h4", null, "You can claim 10 free coins for your servers every day.", -1)
  , X = {
    key: 1
}
  , z = {
    key: 0,
    id: "myProgress"
}
  , F = e("div", {
    id: "myBar"
}, "0%", -1)
  , G = [F]
  , W = {
    key: 1
}
  , Q = {
    key: 2,
    class: "btn green",
    type: "submit",
    disabled: ""
}
  , Z = {
    key: 2
}
  , x = {
    style: {
        color: "red"
    }
}
  , ee = e("button", {
    class: "btn green",
    type: "submit",
    disabled: ""
}, "You are on cooldown!", -1)
  , te = e("br", null, null, -1)
  , se = e("br", null, null, -1)
  , oe = e("h1", {
    class: "maintitle"
}, "BUY COINS \u{1F680}", -1)
  , ne = e("br", null, null, -1)
  , ie = {
    class: "promos"
}
  , ae = {
    class: "promo"
}
  , re = e("div", {
    class: "deal"
}, [e("span", null, "Starter Pack"), e("span", null, "100 coins")], -1)
  , le = e("span", {
    class: "price"
}, "$1", -1)
  , ce = e("ul", {
    class: "features"
}, [e("li", null, "Host Your Discord Bots \u{1F916}"), e("li", null, [e("del", null, "Premium Support \u{1F451}")]), e("li", null, [e("del", null, "Premium Node \u{1F680}")])], -1)
  , de = {
    class: "paypal-btn"
}
  , ue = {
    class: "promo scale"
}
  , pe = e("div", {
    class: "deal"
}, [e("span", null, "Classic Pack"), e("span", null, "300 coins (+50 bonus)")], -1)
  , me = e("span", {
    class: "price"
}, "$3", -1)
  , he = e("ul", {
    class: "features"
}, [e("li", null, "Host Your Discord Bots \u{1F916}"), e("li", null, "Premium Support \u{1F451}"), e("li", null, "Premium Node \u{1F680}")], -1)
  , fe = {
    class: "paypal-btn"
}
  , _e = {
    class: "promo"
}
  , ge = e("div", {
    class: "deal"
}, [e("span", null, "Boost Pack"), e("span", null, "500 coins (+100 bonus)")], -1)
  , ye = e("span", {
    class: "price"
}, "$5", -1)
  , be = e("ul", {
    class: "features"
}, [e("li", null, "Host Your Discord Bots \u{1F916}"), e("li", null, "Premium Support \u{1F451}"), e("li", null, "Premium Node \u{1F680}")], -1)
  , ve = {
    class: "paypal-btn"
}
  , Se = {
    class: "promos"
}
  , Ce = {
    class: "promo"
}
  , we = e("div", {
    class: "deal"
}, [e("span", null, "Mega Pack"), e("span", null, "1000 coins (+200 bonus)")], -1)
  , ke = e("span", {
    class: "price"
}, "$10", -1)
  , $e = e("ul", {
    class: "features"
}, [e("li", null, "Host Your Discord Bots \u{1F916}"), e("li", null, "Premium Support \u{1F451}"), e("li", null, "Premium Node \u{1F680}")], -1)
  , Pe = {
    class: "paypal-btn"
}
  , Be = {
    class: "promo"
}
  , Ie = e("div", {
    class: "deal"
}, [e("span", null, "Super Pack"), e("span", null, "2000 coins (+400 bonus)")], -1)
  , Ae = e("span", {
    class: "price"
}, "$20", -1)
  , Me = e("ul", {
    class: "features"
}, [e("li", null, "Host Your Discord Bots \u{1F916}"), e("li", null, "Premium Support \u{1F451}"), e("li", null, "Premium Node \u{1F680}")], -1)
  , De = {
    class: "paypal-btn"
}
  , Ee = {
    id: "adModal",
    class: "modal",
    style: {}
}
  , He = {
    class: "modal-content"
}
  , Ne = e("span", {
    class: "close"
}, "\xD7", -1)
  , Te = e("h1", null, "Advertisement", -1)
  , Ye = e("p", null, "These advertisements help pay for this service", -1);
function Ve() {
    const s = document.getElementById("adModal")
      , t = document.getElementsByClassName("close")[0];
    s.style.display = "block",
    t.onclick = function() {
        s.style.display = "none"
    }
    ,
    window.onclick = function(o) {
        o.target == s && (s.style.display = "none")
    }
}
const Oe = {
    components: {
        LoadingSpinner: k,
        Ad: $
    },
    data() {
        var s, t, o;
        return {
            freeCoinsState: (s = n.get("freeCoinsState")) != null ? s : {
                loading: !0,
                claimable: !1
            },
            user: n.get("user"),
            config: (t = n.get("config")) != null ? t : {},
            freeCoinCountdownString: (o = n.get("freeCoinCountdownString")) != null ? o : "Loading...",
            progressBar: !1,
            captchaSolved: !1,
            onView: null
        }
    },
    async mounted() {
        n.bind(this),
        n.get("config") || n.set("config", await A());
        const s = await v();
        n.set("freeCoinsState", s),
        f();
        const t = await I();
        t.error || n.set("user", t)
    },
    unmounted() {
        n.unbind(this)
    },
    methods: {
        captchaCompleted() {
            this.captchaSolved = !0
        },
        captchaExpired() {
            this.captchaSolved = !1
        },
        loadEarnCoin: function() {
            let s;
            if (this.freeCoinsState.captcha && (s = hcaptcha.getResponse(),
            !s && (s = document.querySelector("iframe").getAttribute("data-hcaptcha-response"),
            !s)))
                return;
            this.progressBar = !0,
            this.captchaSolved = !1;
            var t = 0;
            const o = this;
            function i() {
                if (t == 0) {
                    let d = function() {
                        var g = document.getElementById("myBar");
                        a >= 1 ? (clearInterval(l),
                        E(s),
                        o.progressBar = !1,
                        g.style.width = "0%",
                        t = 0) : (a++,
                        g.style.width = a + "%",
                        g.innerHTML = a + "%")
                    };
                    t = 1;
                    var a = 0
                      , l = setInterval(d, 145)
                }
            }
            i(),
            Ve(),
            this.$refs.adRef.view()
        }
    }
}
  , Je = Object.assign(Oe, {
    setup(s) {
        return (t, o) => (r(),
        c("main", null, [e("div", O, [e("div", R, [e("h1", L, [j, e("span", null, S(t.user.coins), 1), J]), e("div", U, [q, K, !t.freeCoinsState || t.freeCoinsState.loading ? (r(),
        C(k, {
            key: 0
        })) : _("", !0), t.freeCoinsState && t.freeCoinsState.claimable && !t.freeCoinsState.loading ? (r(),
        c("div", X, [t.progressBar ? (r(),
        c("div", z, G)) : (r(),
        c("div", W, [t.config.hCaptchaSiteKey && t.freeCoinsState.captcha ? (r(),
        C(u(M), {
            key: 0,
            sitekey: t.config.hCaptchaSiteKey,
            "data-theme": "dark",
            onVerify: o[0] || (o[0] = i => t.captchaCompleted()),
            onExpired: o[1] || (o[1] = i => t.captchaExpired())
        }, null, 8, ["sitekey"])) : _("", !0), t.captchaSolved || !t.freeCoinsState.captcha ? (r(),
        c("button", {
            key: 1,
            class: "btn green",
            type: "submit",
            onClick: o[2] || (o[2] = i => t.loadEarnCoin())
        }, "Click here to claim one free coin!")) : (r(),
        c("button", Q, "Complete the captcha to claim coins!"))]))])) : _("", !0), t.freeCoinsState && !t.freeCoinsState.claimable && !t.freeCoinsState.loading ? (r(),
        c("div", Z, [e("p", x, "You can claim free coins again in: " + S(t.freeCoinCountdownString), 1), ee])) : _("", !0), te]), se, oe, ne, e("div", ie, [e("div", ae, [re, le, ce, e("div", de, [e("button", {
            type: "submit",
            class: "promo-btn",
            name: "offer1",
            onClick: o[3] || (o[3] = i => u(h)("starter"))
        }, "Purchase")])]), e("div", ue, [pe, me, he, e("div", fe, [e("button", {
            type: "submit",
            class: "promo-btn",
            name: "offer2",
            onClick: o[4] || (o[4] = i => u(h)("classic"))
        }, "Purchase")])]), e("div", _e, [ge, ye, be, e("div", ve, [e("button", {
            type: "submit",
            class: "promo-btn",
            name: "offer3",
            onClick: o[5] || (o[5] = i => u(h)("boost"))
        }, "Purchase")])])]), e("div", Se, [e("div", Ce, [we, ke, $e, e("div", Pe, [e("button", {
            type: "submit",
            class: "promo-btn",
            name: "offer4",
            onClick: o[6] || (o[6] = i => u(h)("mega"))
        }, "Purchase")])]), e("div", Be, [Ie, Ae, Me, e("div", De, [e("button", {
            type: "submit",
            class: "promo-btn",
            name: "offer5",
            onClick: o[7] || (o[7] = i => u(h)("super"))
        }, "Purchase")])])])])]), e("div", Ee, [e("div", He, [Ne, Te, Ye, B($, {
            ref: "adRef"
        }, null, 512)])])]))
    }
});
export {Je as default};
