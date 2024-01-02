!(function (e, t) {
  if ("function" == typeof define && define.amd)
    define("Waline", ["exports"], t);
  else if ("undefined" != typeof exports) t(exports);
  else {
    var n = { exports: {} };
    t(n.exports), (e.Waline = n.exports);
  }
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
      ? self
      : this,
  function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.version =
        e.pageviewCount =
        e.init =
        e.defaultLocales =
        e.commentCount =
        e.UserList =
        e.RecentComments =
          void 0);
    const t = ["nick", "mail", "link"],
      n = (e) => e.filter((e) => t.includes(e)),
      r = ["//npm.onmicrosoft.cn/@waline/emojis@1.1.0/weibo"],
      l = "en-US",
      i = (e) =>
        new Promise((t, n) => {
          if (e.size > 128e3)
            return n(new Error("File too large! File size limit 128KB"));
          const r = new FileReader();
          r.readAsDataURL(e),
            (r.onload = () => {
              var e;
              return t(
                (null === (e = r.result) || void 0 === e
                  ? void 0
                  : e.toString()) || "",
              );
            }),
            (r.onerror = n);
        }),
      o = (e) =>
        !0 === e
          ? '<p class="wl-tex">Tex is not available in preview</p>'
          : '<span class="wl-tex">Tex is not available in preview</span>',
      s = (e) => {
        const t = async function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return fetch(
            `https://api.giphy.com/v1/gifs/${t}?${new URLSearchParams({
              lang: e,
              limit: "20",
              rating: "g",
              api_key: "6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",
              ...n,
            }).toString()}`,
          )
            .then((e) => e.json())
            .then((e) => {
              let { data: t } = e;
              return t.map((e) => ({
                title: e.title,
                src: e.images.downsized_medium.url,
              }));
            });
        };
        return {
          search: (e) => t("search", { q: e, offset: "0" }),
          default: () => t("trending", {}),
          more: function (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return t("search", { q: e, offset: n.toString() });
          },
        };
      },
      a = [
        "//npm.onmicrosoft.cn/@waline/emojis/tieba/tieba_agree.png",
        "//npm.onmicrosoft.cn/@waline/emojis/tieba/tieba_look_down.png",
        "//npm.onmicrosoft.cn/@waline/emojis/tieba/tieba_sunglasses.png",
        "//npm.onmicrosoft.cn/@waline/emojis/tieba/tieba_pick_nose.png",
        "//npm.onmicrosoft.cn/@waline/emojis/tieba/tieba_awkward.png",
        "//npm.onmicrosoft.cn/@waline/emojis/tieba/tieba_sleep.png",
      ],
      c = new RegExp(
        `(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,
        "gmi",
      ),
      u = [
        "23AC69",
        "91C132",
        "F19726",
        "E8552D",
        "1AAB8E",
        "E1147F",
        "2980C1",
        "1BA1E6",
        "9FA0A0",
        "F19726",
        "E30B20",
        "E30B20",
        "A3338B",
      ],
      p = {},
      d = (e) => {
        let t = 0;
        return e.replace(c, (e, n, r) => {
          if (r) return `<span style="color: slategray">${r}</span>`;
          if ("<" === n) return "&lt;";
          let l;
          p[n] ? (l = p[n]) : ((l = u[t]), (p[n] = l));
          const i = `<span style="color: #${l}">${n}</span>`;
          return (t = ++t % u.length), i;
        });
      },
      h = [
        "nick",
        "nickError",
        "mail",
        "mailError",
        "link",
        "optional",
        "placeholder",
        "sofa",
        "submit",
        "like",
        "cancelLike",
        "reply",
        "cancelReply",
        "comment",
        "refresh",
        "more",
        "preview",
        "emoji",
        "uploadImage",
        "seconds",
        "minutes",
        "hours",
        "days",
        "now",
        "uploading",
        "login",
        "logout",
        "admin",
        "sticky",
        "word",
        "wordHint",
        "anonymous",
        "level0",
        "level1",
        "level2",
        "level3",
        "level4",
        "level5",
        "gif",
        "gifSearchPlaceholder",
        "profile",
        "approved",
        "waiting",
        "spam",
        "unsticky",
        "oldest",
        "latest",
        "hottest",
        "reactionTitle",
      ],
      f = (e) => Object.fromEntries(e.map((e, t) => [h[t], e]));
    var g = f([
        "NickName",
        "NickName cannot be less than 3 bytes.",
        "E-Mail",
        "Please confirm your email address.",
        "Website",
        "Optional",
        "Comment here...",
        "No comment yet.",
        "Submit",
        "Like",
        "Cancel like",
        "Reply",
        "Cancel reply",
        "Comments",
        "Refresh",
        "Load More...",
        "Preview",
        "Emoji",
        "Upload Image",
        "seconds ago",
        "minutes ago",
        "hours ago",
        "days ago",
        "just now",
        "Uploading",
        "Login",
        "logout",
        "Admin",
        "Sticky",
        "Words",
        "Please input comments between $0 and $1 words!\n Current word number: $2",
        "Anonymous",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Search GIF",
        "Profile",
        "Approved",
        "Waiting",
        "Spam",
        "Unsticky",
        "Oldest",
        "Latest",
        "Hottest",
        "What do you think?",
      ]),
      m = f([
        "ニックネーム",
        "3バイト以上のニックネームをご入力ください.",
        "メールアドレス",
        "メールアドレスをご確認ください.",
        "サイト",
        "オプション",
        "ここにコメント",
        "コメントしましょう~",
        "提出する",
        "Like",
        "Cancel like",
        "返信する",
        "キャンセル",
        "コメント",
        "更新",
        "さらに読み込む",
        "プレビュー",
        "絵文字",
        "画像をアップロード",
        "秒前",
        "分前",
        "時間前",
        "日前",
        "たっだ今",
        "アップロード",
        "ログインする",
        "ログアウト",
        "管理者",
        "トップに置く",
        "ワード",
        "コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2",
        "匿名",
        "うえにん",
        "なかにん",
        "しもおし",
        "特にしもおし",
        "かげ",
        "なぬし",
        "GIF",
        "探す GIF",
        "個人情報",
        "承認済み",
        "待っている",
        "スパム",
        "べたつかない",
        "逆順",
        "正順",
        "人気順",
        "どう思いますか？",
      ]),
      v = f([
        "昵称",
        "昵称不能少于3个字符",
        "邮箱",
        "请填写正确的邮件地址",
        "网址",
        "可选",
        "欢迎评论",
        "来发评论吧~",
        "提交",
        "喜欢",
        "取消喜欢",
        "回复",
        "取消回复",
        "评论",
        "刷新",
        "加载更多...",
        "预览",
        "表情",
        "上传图片",
        "秒前",
        "分钟前",
        "小时前",
        "天前",
        "刚刚",
        "正在上传",
        "登录",
        "退出",
        "博主",
        "置顶",
        "字",
        "评论字数应在 $0 到 $1 字之间！\n当前字数：$2",
        "匿名",
        "潜水",
        "冒泡",
        "吐槽",
        "活跃",
        "话痨",
        "传说",
        "表情包",
        "搜索表情包",
        "个人资料",
        "通过",
        "待审核",
        "垃圾",
        "取消置顶",
        "按倒序",
        "按正序",
        "按热度",
        "你认为这篇文章怎么样？",
      ]),
      y = f([
        "暱稱",
        "暱稱不能少於3個字元",
        "郵箱",
        "請填寫正確的郵件地址",
        "網址",
        "可選",
        "歡迎評論",
        "來發評論吧~",
        "提交",
        "喜歡",
        "取消喜歡",
        "回覆",
        "取消回覆",
        "評論",
        "刷新",
        "載入更多...",
        "預覽",
        "表情",
        "上傳圖片",
        "秒前",
        "分鐘前",
        "小時前",
        "天前",
        "剛剛",
        "正在上傳",
        "登錄",
        "退出",
        "博主",
        "置頂",
        "字",
        "評論字數應在 $0 到 $1 字之間！\n當前字數：$2",
        "匿名",
        "潛水",
        "冒泡",
        "吐槽",
        "活躍",
        "話癆",
        "傳說",
        "表情包",
        "搜索表情包",
        "個人資料",
        "通過",
        "待審核",
        "垃圾",
        "取消置頂",
        "按倒序",
        "按正序",
        "按熱度",
        "你認為這篇文章怎麼樣？",
      ]),
      b = f([
        "Apelido",
        "Apelido não pode ser menor que 3 bytes.",
        "E-Mail",
        "Por favor, confirme seu endereço de e-mail.",
        "Website",
        "Opcional",
        "Comente aqui...",
        "Nenhum comentário, ainda.",
        "Enviar",
        "Like",
        "Cancel like",
        "Responder",
        "Cancelar resposta",
        "Comentários",
        "Refrescar",
        "Carregar Mais...",
        "Visualizar",
        "Emoji",
        "Enviar Imagem",
        "segundos atrás",
        "minutos atrás",
        "horas atrás",
        "dias atrás",
        "agora mesmo",
        "Enviando",
        "Entrar",
        "Sair",
        "Admin",
        "Sticky",
        "Palavras",
        "Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2",
        "Anônimo",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Pesquisar GIF",
        "informação pessoal",
        "Aprovado",
        "Espera",
        "Spam",
        "Unsticky",
        "Mais velho",
        "Mais recentes",
        "Mais quente",
        "O que você acha?",
      ]),
      w = f([
        "Псевдоним",
        "Никнейм не может быть меньше 3 байт.",
        "Эл. адрес",
        "Пожалуйста, подтвердите адрес вашей электронной почты.",
        "Веб-сайт",
        "Необязательный",
        "Комментарий здесь...",
        "Пока нет комментариев.",
        "Отправить",
        "Like",
        "Cancel like",
        "Отвечать",
        "Отменить ответ",
        "Комментарии",
        "Обновить",
        "Загрузи больше...",
        "Превью",
        "эмодзи",
        "Загрузить изображение",
        "секунд назад",
        "несколько минут назад",
        "несколько часов назад",
        "дней назад",
        "прямо сейчас",
        "Загрузка",
        "Авторизоваться",
        "Выход из системы",
        "Админ",
        "Липкий",
        "Слова",
        "Пожалуйста, введите комментарии от $0 до $1 слов!\nНомер текущего слова: $2",
        "Анонимный",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Поиск GIF",
        "Персональные данные",
        "Одобренный",
        "Ожидающий",
        "Спам",
        "Нелипкий",
        "самый старый",
        "последний",
        "самый горячий",
        "Что вы думаете?",
      ]);
    const k = {
        zh: v,
        "zh-cn": v,
        "zh-CN": v,
        "zh-tw": y,
        "zh-TW": y,
        en: g,
        "en-US": g,
        "en-us": g,
        jp: m,
        ja: m,
        "jp-jp": m,
        "jp-JP": m,
        "pt-br": b,
        "pt-BR": b,
        ru: w,
        "ru-ru": w,
        "ru-RU": w,
      },
      x = { "Content-Type": "application/json" },
      _ = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("object" == typeof e && e.errno)
          throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);
        return e;
      },
      $ = (e) => {
        let { serverURL: t, lang: n, paths: r, type: l, signal: i } = e;
        return fetch(
          `${t}/article?path=${encodeURIComponent(
            r.join(","),
          )}&type=${encodeURIComponent(l.join(","))}&lang=${n}`,
          { signal: i },
        ).then((e) => e.json());
      },
      C = (e) => {
        let { serverURL: t, lang: n, path: r, type: l, action: i } = e;
        return fetch(`${t}/article?lang=${n}`, {
          method: "POST",
          headers: x,
          body: JSON.stringify({ path: r, type: l, action: i }),
        }).then((e) => e.json());
      },
      S = (e) => {
        let { serverURL: t, lang: n, token: r, objectId: l, comment: i } = e;
        return fetch(`${t}/comment/${l}?lang=${n}`, {
          method: "PUT",
          headers: { ...x, Authorization: `Bearer ${r}` },
          body: JSON.stringify(i),
        })
          .then((e) => e.json())
          .then((e) => _(e, "Update comment"));
      },
      E = (e) => {
        try {
          e = decodeURI(e);
        } catch (e) {}
        return e;
      },
      R = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.replace(/\/$/u, "");
      },
      A = (e) => /^(https?:)?\/\//.test(e),
      I = (e) => {
        const t = R(e);
        return A(t) ? t : `https://${t}`;
      },
      L = (e) => (Array.isArray(e) ? e : !!e && [0, e]),
      z = (e, t) => ("function" == typeof e ? e : !1 !== e && t),
      O =
        "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",
      j = (e, t) => {
        let n = e.toString();
        for (; n.length < t; ) n = "0" + n;
        return n;
      };
    function T(e, t) {
      const n = Object.create(null),
        r = e.split(",");
      for (let e = 0; e < r.length; e++) n[r[e]] = !0;
      return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
    }
    function U(e) {
      if (ie(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const r = e[n],
            l = ue(r) ? N(r) : U(r);
          if (l) for (const e in l) t[e] = l[e];
        }
        return t;
      }
      return ue(e) || de(e) ? e : void 0;
    }
    e.defaultLocales = k;
    const P = /;(?![^(]*\))/g,
      M = /:([^]+)/,
      F = /\/\*.*?\*\//gs;
    function N(e) {
      const t = {};
      return (
        e
          .replace(F, "")
          .split(P)
          .forEach((e) => {
            if (e) {
              const n = e.split(M);
              n.length > 1 && (t[n[0].trim()] = n[1].trim());
            }
          }),
        t
      );
    }
    function V(e) {
      let t = "";
      if (ue(e)) t = e;
      else if (ie(e))
        for (let n = 0; n < e.length; n++) {
          const r = V(e[n]);
          r && (t += r + " ");
        }
      else if (de(e)) for (const n in e) e[n] && (t += n + " ");
      return t.trim();
    }
    const D = T(
      "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    );
    function B(e) {
      return !!e || "" === e;
    }
    function H(e, t) {
      if (e === t) return !0;
      let n = ae(e),
        r = ae(t);
      if (n || r) return !(!n || !r) && e.getTime() === t.getTime();
      if (((n = pe(e)), (r = pe(t)), n || r)) return e === t;
      if (((n = ie(e)), (r = ie(t)), n || r))
        return (
          !(!n || !r) &&
          (function (e, t) {
            if (e.length !== t.length) return !1;
            let n = !0;
            for (let r = 0; n && r < e.length; r++) n = H(e[r], t[r]);
            return n;
          })(e, t)
        );
      if (((n = de(e)), (r = de(t)), n || r)) {
        if (!n || !r) return !1;
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (const n in e) {
          const r = e.hasOwnProperty(n),
            l = t.hasOwnProperty(n);
          if ((r && !l) || (!r && l) || !H(e[n], t[n])) return !1;
        }
      }
      return String(e) === String(t);
    }
    function W(e, t) {
      return e.findIndex((e) => H(e, t));
    }
    const q = (e) =>
        ue(e)
          ? e
          : null == e
            ? ""
            : ie(e) || (de(e) && (e.toString === fe || !ce(e.toString)))
              ? JSON.stringify(e, Z, 2)
              : String(e),
      Z = (e, t) =>
        t && t.__v_isRef
          ? Z(e, t.value)
          : oe(t)
            ? {
                [`Map(${t.size})`]: [...t.entries()].reduce((e, t) => {
                  let [n, r] = t;
                  return (e[`${n} =>`] = r), e;
                }, {}),
              }
            : se(t)
              ? { [`Set(${t.size})`]: [...t.values()] }
              : !de(t) || ie(t) || me(t)
                ? t
                : String(t),
      Q = {},
      K = [],
      G = () => {},
      J = () => !1,
      X = /^on[^a-z]/,
      Y = (e) => X.test(e),
      ee = (e) => e.startsWith("onUpdate:"),
      te = Object.assign,
      ne = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      },
      re = Object.prototype.hasOwnProperty,
      le = (e, t) => re.call(e, t),
      ie = Array.isArray,
      oe = (e) => "[object Map]" === ge(e),
      se = (e) => "[object Set]" === ge(e),
      ae = (e) => "[object Date]" === ge(e),
      ce = (e) => "function" == typeof e,
      ue = (e) => "string" == typeof e,
      pe = (e) => "symbol" == typeof e,
      de = (e) => null !== e && "object" == typeof e,
      he = (e) => de(e) && ce(e.then) && ce(e.catch),
      fe = Object.prototype.toString,
      ge = (e) => fe.call(e),
      me = (e) => "[object Object]" === ge(e),
      ve = (e) =>
        ue(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
      ye = T(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
      ),
      be = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      },
      we = /-(\w)/g,
      ke = be((e) => e.replace(we, (e, t) => (t ? t.toUpperCase() : ""))),
      xe = /\B([A-Z])/g,
      _e = be((e) => e.replace(xe, "-$1").toLowerCase()),
      $e = be((e) => e.charAt(0).toUpperCase() + e.slice(1)),
      Ce = be((e) => (e ? `on${$e(e)}` : "")),
      Se = (e, t) => !Object.is(e, t),
      Ee = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t);
      },
      Re = (e, t, n) => {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          value: n,
        });
      },
      Ae = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };
    let Ie, Le;
    class ze {
      constructor() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.detached = e),
          (this.active = !0),
          (this.effects = []),
          (this.cleanups = []),
          (this.parent = Le),
          !e &&
            Le &&
            (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1);
      }
      run(e) {
        if (this.active) {
          const t = Le;
          try {
            return (Le = this), e();
          } finally {
            Le = t;
          }
        }
      }
      on() {
        Le = this;
      }
      off() {
        Le = this.parent;
      }
      stop(e) {
        if (this.active) {
          let t, n;
          for (t = 0, n = this.effects.length; t < n; t++)
            this.effects[t].stop();
          for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
          if (this.scopes)
            for (t = 0, n = this.scopes.length; t < n; t++)
              this.scopes[t].stop(!0);
          if (!this.detached && this.parent && !e) {
            const e = this.parent.scopes.pop();
            e &&
              e !== this &&
              ((this.parent.scopes[this.index] = e), (e.index = this.index));
          }
          (this.parent = void 0), (this.active = !1);
        }
      }
    }
    const Oe = (e) => {
        const t = new Set(e);
        return (t.w = 0), (t.n = 0), t;
      },
      je = (e) => (e.w & Fe) > 0,
      Te = (e) => (e.n & Fe) > 0,
      Ue = new WeakMap();
    let Pe,
      Me = 0,
      Fe = 1;
    const Ne = Symbol(""),
      Ve = Symbol("");
    class De {
      constructor(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = arguments.length > 2 ? arguments[2] : void 0;
        (this.fn = e),
          (this.scheduler = t),
          (this.active = !0),
          (this.deps = []),
          (this.parent = void 0),
          (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Le;
            t && t.active && t.effects.push(e);
          })(this, n);
      }
      run() {
        if (!this.active) return this.fn();
        let e = Pe,
          t = He;
        for (; e; ) {
          if (e === this) return;
          e = e.parent;
        }
        try {
          return (
            (this.parent = Pe),
            (Pe = this),
            (He = !0),
            (Fe = 1 << ++Me),
            Me <= 30
              ? ((e) => {
                  let { deps: t } = e;
                  if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= Fe;
                })(this)
              : Be(this),
            this.fn()
          );
        } finally {
          Me <= 30 &&
            ((e) => {
              const { deps: t } = e;
              if (t.length) {
                let n = 0;
                for (let r = 0; r < t.length; r++) {
                  const l = t[r];
                  je(l) && !Te(l) ? l.delete(e) : (t[n++] = l),
                    (l.w &= ~Fe),
                    (l.n &= ~Fe);
                }
                t.length = n;
              }
            })(this),
            (Fe = 1 << --Me),
            (Pe = this.parent),
            (He = t),
            (this.parent = void 0),
            this.deferStop && this.stop();
        }
      }
      stop() {
        Pe === this
          ? (this.deferStop = !0)
          : this.active &&
            (Be(this), this.onStop && this.onStop(), (this.active = !1));
      }
    }
    function Be(e) {
      const { deps: t } = e;
      if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0;
      }
    }
    let He = !0;
    const We = [];
    function qe() {
      We.push(He), (He = !1);
    }
    function Ze() {
      const e = We.pop();
      He = void 0 === e || e;
    }
    function Qe(e, t, n) {
      if (He && Pe) {
        let t = Ue.get(e);
        t || Ue.set(e, (t = new Map()));
        let r = t.get(n);
        r || t.set(n, (r = Oe())), Ke(r);
      }
    }
    function Ke(e, t) {
      let n = !1;
      Me <= 30 ? Te(e) || ((e.n |= Fe), (n = !je(e))) : (n = !e.has(Pe)),
        n && (e.add(Pe), Pe.deps.push(e));
    }
    function Ge(e, t, n, r, l, i) {
      const o = Ue.get(e);
      if (!o) return;
      let s = [];
      if ("clear" === t) s = [...o.values()];
      else if ("length" === n && ie(e)) {
        const e = Ae(r);
        o.forEach((t, n) => {
          ("length" === n || n >= e) && s.push(t);
        });
      } else
        switch ((void 0 !== n && s.push(o.get(n)), t)) {
          case "add":
            ie(e)
              ? ve(n) && s.push(o.get("length"))
              : (s.push(o.get(Ne)), oe(e) && s.push(o.get(Ve)));
            break;
          case "delete":
            ie(e) || (s.push(o.get(Ne)), oe(e) && s.push(o.get(Ve)));
            break;
          case "set":
            oe(e) && s.push(o.get(Ne));
        }
      if (1 === s.length) s[0] && Je(s[0]);
      else {
        const e = [];
        for (const t of s) t && e.push(...t);
        Je(Oe(e));
      }
    }
    function Je(e, t) {
      const n = ie(e) ? e : [...e];
      for (const e of n) e.computed && Xe(e);
      for (const e of n) e.computed || Xe(e);
    }
    function Xe(e, t) {
      (e !== Pe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
    }
    const Ye = T("__proto__,__v_isRef,__isVue"),
      et = new Set(
        Object.getOwnPropertyNames(Symbol)
          .filter((e) => "arguments" !== e && "caller" !== e)
          .map((e) => Symbol[e])
          .filter(pe),
      ),
      tt = it(),
      nt = it(!1, !0),
      rt = it(!0),
      lt = (function () {
        const e = {};
        return (
          ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
            e[t] = function () {
              const e = Vt(this);
              for (let t = 0, n = this.length; t < n; t++) Qe(e, 0, t + "");
              for (
                var n = arguments.length, r = new Array(n), l = 0;
                l < n;
                l++
              )
                r[l] = arguments[l];
              const i = e[t](...r);
              return -1 === i || !1 === i ? e[t](...r.map(Vt)) : i;
            };
          }),
          ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            e[t] = function () {
              qe();
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              const l = Vt(this)[t].apply(this, n);
              return Ze(), l;
            };
          }),
          e
        );
      })();
    function it() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return function (n, r, l) {
        if ("__v_isReactive" === r) return !e;
        if ("__v_isReadonly" === r) return e;
        if ("__v_isShallow" === r) return t;
        if ("__v_raw" === r && l === (e ? (t ? Ot : zt) : t ? Lt : It).get(n))
          return n;
        const i = ie(n);
        if (!e && i && le(lt, r)) return Reflect.get(lt, r, l);
        const o = Reflect.get(n, r, l);
        return (pe(r) ? et.has(r) : Ye(r))
          ? o
          : (e || Qe(n, 0, r),
            t
              ? o
              : Zt(o)
                ? i && ve(r)
                  ? o
                  : o.value
                : de(o)
                  ? e
                    ? Tt(o)
                    : jt(o)
                  : o);
      };
    }
    function ot() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return function (t, n, r, l) {
        let i = t[n];
        if (Mt(i) && Zt(i) && !Zt(r)) return !1;
        if (
          !e &&
          (Ft(r) || Mt(r) || ((i = Vt(i)), (r = Vt(r))),
          !ie(t) && Zt(i) && !Zt(r))
        )
          return (i.value = r), !0;
        const o = ie(t) && ve(n) ? Number(n) < t.length : le(t, n),
          s = Reflect.set(t, n, r, l);
        return (
          t === Vt(l) &&
            (o ? Se(r, i) && Ge(t, "set", n, r) : Ge(t, "add", n, r)),
          s
        );
      };
    }
    const st = {
        get: tt,
        set: ot(),
        deleteProperty: function (e, t) {
          const n = le(e, t),
            r = Reflect.deleteProperty(e, t);
          return r && n && Ge(e, "delete", t, void 0), r;
        },
        has: function (e, t) {
          const n = Reflect.has(e, t);
          return (pe(t) && et.has(t)) || Qe(e, 0, t), n;
        },
        ownKeys: function (e) {
          return Qe(e, 0, ie(e) ? "length" : Ne), Reflect.ownKeys(e);
        },
      },
      at = { get: rt, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
      ct = te({}, st, { get: nt, set: ot(!0) }),
      ut = (e) => e,
      pt = (e) => Reflect.getPrototypeOf(e);
    function dt(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const l = Vt((e = e.__v_raw)),
        i = Vt(t);
      n || (t !== i && Qe(l, 0, t), Qe(l, 0, i));
      const { has: o } = pt(l),
        s = r ? ut : n ? Ht : Bt;
      return o.call(l, t)
        ? s(e.get(t))
        : o.call(l, i)
          ? s(e.get(i))
          : void (e !== l && e.get(t));
    }
    function ht(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const n = this.__v_raw,
        r = Vt(n),
        l = Vt(e);
      return (
        t || (e !== l && Qe(r, 0, e), Qe(r, 0, l)),
        e === l ? n.has(e) : n.has(e) || n.has(l)
      );
    }
    function ft(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (e = e.__v_raw), !t && Qe(Vt(e), 0, Ne), Reflect.get(e, "size", e);
    }
    function gt(e) {
      e = Vt(e);
      const t = Vt(this);
      return pt(t).has.call(t, e) || (t.add(e), Ge(t, "add", e, e)), this;
    }
    function mt(e, t) {
      t = Vt(t);
      const n = Vt(this),
        { has: r, get: l } = pt(n);
      let i = r.call(n, e);
      i || ((e = Vt(e)), (i = r.call(n, e)));
      const o = l.call(n, e);
      return (
        n.set(e, t),
        i ? Se(t, o) && Ge(n, "set", e, t) : Ge(n, "add", e, t),
        this
      );
    }
    function vt(e) {
      const t = Vt(this),
        { has: n, get: r } = pt(t);
      let l = n.call(t, e);
      l || ((e = Vt(e)), (l = n.call(t, e))), r && r.call(t, e);
      const i = t.delete(e);
      return l && Ge(t, "delete", e, void 0), i;
    }
    function yt() {
      const e = Vt(this),
        t = 0 !== e.size,
        n = e.clear();
      return t && Ge(e, "clear", void 0, void 0), n;
    }
    function bt(e, t) {
      return function (n, r) {
        const l = this,
          i = l.__v_raw,
          o = Vt(i),
          s = t ? ut : e ? Ht : Bt;
        return (
          !e && Qe(o, 0, Ne), i.forEach((e, t) => n.call(r, s(e), s(t), l))
        );
      };
    }
    function wt(e, t, n) {
      return function () {
        const r = this.__v_raw,
          l = Vt(r),
          i = oe(l),
          o = "entries" === e || (e === Symbol.iterator && i),
          s = "keys" === e && i,
          a = r[e](...arguments),
          c = n ? ut : t ? Ht : Bt;
        return (
          !t && Qe(l, 0, s ? Ve : Ne),
          {
            next() {
              const { value: e, done: t } = a.next();
              return t
                ? { value: e, done: t }
                : { value: o ? [c(e[0]), c(e[1])] : c(e), done: t };
            },
            [Symbol.iterator]() {
              return this;
            },
          }
        );
      };
    }
    function kt(e) {
      return function () {
        return "delete" !== e && this;
      };
    }
    const [xt, _t, $t, Ct] = (function () {
      const e = {
          get(e) {
            return dt(this, e);
          },
          get size() {
            return ft(this);
          },
          has: ht,
          add: gt,
          set: mt,
          delete: vt,
          clear: yt,
          forEach: bt(!1, !1),
        },
        t = {
          get(e) {
            return dt(this, e, !1, !0);
          },
          get size() {
            return ft(this);
          },
          has: ht,
          add: gt,
          set: mt,
          delete: vt,
          clear: yt,
          forEach: bt(!1, !0),
        },
        n = {
          get(e) {
            return dt(this, e, !0);
          },
          get size() {
            return ft(this, !0);
          },
          has(e) {
            return ht.call(this, e, !0);
          },
          add: kt("add"),
          set: kt("set"),
          delete: kt("delete"),
          clear: kt("clear"),
          forEach: bt(!0, !1),
        },
        r = {
          get(e) {
            return dt(this, e, !0, !0);
          },
          get size() {
            return ft(this, !0);
          },
          has(e) {
            return ht.call(this, e, !0);
          },
          add: kt("add"),
          set: kt("set"),
          delete: kt("delete"),
          clear: kt("clear"),
          forEach: bt(!0, !0),
        };
      return (
        ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
          (e[l] = wt(l, !1, !1)),
            (n[l] = wt(l, !0, !1)),
            (t[l] = wt(l, !1, !0)),
            (r[l] = wt(l, !0, !0));
        }),
        [e, n, t, r]
      );
    })();
    function St(e, t) {
      const n = t ? (e ? Ct : $t) : e ? _t : xt;
      return (t, r, l) =>
        "__v_isReactive" === r
          ? !e
          : "__v_isReadonly" === r
            ? e
            : "__v_raw" === r
              ? t
              : Reflect.get(le(n, r) && r in t ? n : t, r, l);
    }
    const Et = { get: St(!1, !1) },
      Rt = { get: St(!1, !0) },
      At = { get: St(!0, !1) },
      It = new WeakMap(),
      Lt = new WeakMap(),
      zt = new WeakMap(),
      Ot = new WeakMap();
    function jt(e) {
      return Mt(e) ? e : Ut(e, !1, st, Et, It);
    }
    function Tt(e) {
      return Ut(e, !0, at, At, zt);
    }
    function Ut(e, t, n, r, l) {
      if (!de(e)) return e;
      if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
      const i = l.get(e);
      if (i) return i;
      const o = (function (e) {
        return e.__v_skip || !Object.isExtensible(e)
          ? 0
          : (function (e) {
              switch (e) {
                case "Object":
                case "Array":
                  return 1;
                case "Map":
                case "Set":
                case "WeakMap":
                case "WeakSet":
                  return 2;
                default:
                  return 0;
              }
            })(((e) => ge(e).slice(8, -1))(e));
      })(e);
      if (0 === o) return e;
      const s = new Proxy(e, 2 === o ? r : n);
      return l.set(e, s), s;
    }
    function Pt(e) {
      return Mt(e) ? Pt(e.__v_raw) : !(!e || !e.__v_isReactive);
    }
    function Mt(e) {
      return !(!e || !e.__v_isReadonly);
    }
    function Ft(e) {
      return !(!e || !e.__v_isShallow);
    }
    function Nt(e) {
      return Pt(e) || Mt(e);
    }
    function Vt(e) {
      const t = e && e.__v_raw;
      return t ? Vt(t) : e;
    }
    function Dt(e) {
      return Re(e, "__v_skip", !0), e;
    }
    const Bt = (e) => (de(e) ? jt(e) : e),
      Ht = (e) => (de(e) ? Tt(e) : e);
    function Wt(e) {
      He && Pe && Ke((e = Vt(e)).dep || (e.dep = Oe()));
    }
    function qt(e, t) {
      (e = Vt(e)).dep && Je(e.dep);
    }
    function Zt(e) {
      return !(!e || !0 !== e.__v_isRef);
    }
    function Qt(e) {
      return Gt(e, !1);
    }
    function Kt(e) {
      return Gt(e, !0);
    }
    function Gt(e, t) {
      return Zt(e) ? e : new Jt(e, t);
    }
    class Jt {
      constructor(e, t) {
        (this.__v_isShallow = t),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this._rawValue = t ? e : Vt(e)),
          (this._value = t ? e : Bt(e));
      }
      get value() {
        return Wt(this), this._value;
      }
      set value(e) {
        const t = this.__v_isShallow || Ft(e) || Mt(e);
        (e = t ? e : Vt(e)),
          Se(e, this._rawValue) &&
            ((this._rawValue = e), (this._value = t ? e : Bt(e)), qt(this));
      }
    }
    function Xt(e) {
      return Zt(e) ? e.value : e;
    }
    const Yt = {
      get: (e, t, n) => Xt(Reflect.get(e, t, n)),
      set: (e, t, n, r) => {
        const l = e[t];
        return Zt(l) && !Zt(n) ? ((l.value = n), !0) : Reflect.set(e, t, n, r);
      },
    };
    function en(e) {
      return Pt(e) ? e : new Proxy(e, Yt);
    }
    var tn;
    class nn {
      constructor(e, t, n, r) {
        (this._setter = t),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this[tn] = !1),
          (this._dirty = !0),
          (this.effect = new De(e, () => {
            this._dirty || ((this._dirty = !0), qt(this));
          })),
          (this.effect.computed = this),
          (this.effect.active = this._cacheable = !r),
          (this.__v_isReadonly = n);
      }
      get value() {
        const e = Vt(this);
        return (
          Wt(e),
          (!e._dirty && e._cacheable) ||
            ((e._dirty = !1), (e._value = e.effect.run())),
          e._value
        );
      }
      set value(e) {
        this._setter(e);
      }
    }
    function rn(e, t, n, r) {
      let l;
      try {
        l = r ? e(...r) : e();
      } catch (e) {
        on(e, t, n);
      }
      return l;
    }
    function ln(e, t, n, r) {
      if (ce(e)) {
        const l = rn(e, t, n, r);
        return (
          l &&
            he(l) &&
            l.catch((e) => {
              on(e, t, n);
            }),
          l
        );
      }
      const l = [];
      for (let i = 0; i < e.length; i++) l.push(ln(e[i], t, n, r));
      return l;
    }
    function on(e, t, n) {
      let r =
        !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if ((t && t.vnode, t)) {
        let r = t.parent;
        const l = t.proxy,
          i = n;
        for (; r; ) {
          const t = r.ec;
          if (t)
            for (let n = 0; n < t.length; n++) if (!1 === t[n](e, l, i)) return;
          r = r.parent;
        }
        const o = t.appContext.config.errorHandler;
        if (o) return void rn(o, null, 10, [e, l, i]);
      }
      !(function (e, t, n) {
        console.error(e);
      })(e, 0, 0, r);
    }
    tn = "__v_isReadonly";
    let sn = !1,
      an = !1;
    const cn = [];
    let un = 0;
    const pn = [];
    let dn = null,
      hn = 0;
    const fn = Promise.resolve();
    let gn = null;
    function mn(e) {
      const t = gn || fn;
      return e ? t.then(this ? e.bind(this) : e) : t;
    }
    function vn(e) {
      (cn.length && cn.includes(e, sn && e.allowRecurse ? un + 1 : un)) ||
        (null == e.id
          ? cn.push(e)
          : cn.splice(
              (function (e) {
                let t = un + 1,
                  n = cn.length;
                for (; t < n; ) {
                  const r = (t + n) >>> 1;
                  kn(cn[r]) < e ? (t = r + 1) : (n = r);
                }
                return t;
              })(e.id),
              0,
              e,
            ),
        yn());
    }
    function yn() {
      sn || an || ((an = !0), (gn = fn.then(_n)));
    }
    function bn(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : sn
            ? un + 1
            : 0;
      for (; t < cn.length; t++) {
        const e = cn[t];
        e && e.pre && (cn.splice(t, 1), t--, e());
      }
    }
    function wn(e) {
      if (pn.length) {
        const e = [...new Set(pn)];
        if (((pn.length = 0), dn)) return void dn.push(...e);
        for (
          dn = e, dn.sort((e, t) => kn(e) - kn(t)), hn = 0;
          hn < dn.length;
          hn++
        )
          dn[hn]();
        (dn = null), (hn = 0);
      }
    }
    const kn = (e) => (null == e.id ? 1 / 0 : e.id),
      xn = (e, t) => {
        const n = kn(e) - kn(t);
        if (0 === n) {
          if (e.pre && !t.pre) return -1;
          if (t.pre && !e.pre) return 1;
        }
        return n;
      };
    function _n(e) {
      (an = !1), (sn = !0), cn.sort(xn);
      try {
        for (un = 0; un < cn.length; un++) {
          const e = cn[un];
          e && !1 !== e.active && rn(e, null, 14);
        }
      } finally {
        (un = 0),
          (cn.length = 0),
          wn(),
          (sn = !1),
          (gn = null),
          (cn.length || pn.length) && _n();
      }
    }
    function $n(e, t) {
      if (e.isUnmounted) return;
      const n = e.vnode.props || Q;
      for (
        var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), i = 2;
        i < r;
        i++
      )
        l[i - 2] = arguments[i];
      let o = l;
      const s = t.startsWith("update:"),
        a = s && t.slice(7);
      if (a && a in n) {
        const e = `${"modelValue" === a ? "model" : a}Modifiers`,
          { number: t, trim: r } = n[e] || Q;
        r && (o = l.map((e) => (ue(e) ? e.trim() : e))), t && (o = l.map(Ae));
      }
      let c,
        u = n[(c = Ce(t))] || n[(c = Ce(ke(t)))];
      !u && s && (u = n[(c = Ce(_e(t)))]), u && ln(u, e, 6, o);
      const p = n[c + "Once"];
      if (p) {
        if (e.emitted) {
          if (e.emitted[c]) return;
        } else e.emitted = {};
        (e.emitted[c] = !0), ln(p, e, 6, o);
      }
    }
    function Cn(e, t) {
      const n = t.emitsCache,
        r = n.get(e);
      if (void 0 !== r) return r;
      const l = e.emits;
      let i = {};
      return l
        ? (ie(l) ? l.forEach((e) => (i[e] = null)) : te(i, l),
          de(e) && n.set(e, i),
          i)
        : (de(e) && n.set(e, null), null);
    }
    function Sn(e, t) {
      return (
        !(!e || !Y(t)) &&
        ((t = t.slice(2).replace(/Once$/, "")),
        le(e, t[0].toLowerCase() + t.slice(1)) || le(e, _e(t)) || le(e, t))
      );
    }
    let En = null,
      Rn = null;
    function An(e) {
      const t = En;
      return (En = e), (Rn = (e && e.type.__scopeId) || null), t;
    }
    function In(e) {
      const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: l,
        props: i,
        propsOptions: [o],
        slots: s,
        attrs: a,
        emit: c,
        render: u,
        renderCache: p,
        data: d,
        setupState: h,
        ctx: f,
        inheritAttrs: g,
      } = e;
      let m, v;
      const y = An(e);
      try {
        if (4 & n.shapeFlag) {
          const e = l || r;
          (m = Wr(u.call(e, e, p, i, h, d, f))), (v = a);
        } else {
          const e = t;
          (m = Wr(
            e.length > 1 ? e(i, { attrs: a, slots: s, emit: c }) : e(i, null),
          )),
            (v = t.props ? a : Ln(a));
        }
      } catch (t) {
        (Er.length = 0), on(t, e, 1), (m = Vr(Cr));
      }
      let b = m;
      if (v && !1 !== g) {
        const e = Object.keys(v),
          { shapeFlag: t } = b;
        e.length &&
          7 & t &&
          (o && e.some(ee) && (v = zn(v, o)), (b = Dr(b, v)));
      }
      return (
        n.dirs &&
          ((b = Dr(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
        n.transition && (b.transition = n.transition),
        (m = b),
        An(y),
        m
      );
    }
    const Ln = (e) => {
        let t;
        for (const n in e)
          ("class" === n || "style" === n || Y(n)) &&
            ((t || (t = {}))[n] = e[n]);
        return t;
      },
      zn = (e, t) => {
        const n = {};
        for (const r in e) (ee(r) && r.slice(9) in t) || (n[r] = e[r]);
        return n;
      };
    function On(e, t, n) {
      const r = Object.keys(t);
      if (r.length !== Object.keys(e).length) return !0;
      for (let l = 0; l < r.length; l++) {
        const i = r[l];
        if (t[i] !== e[i] && !Sn(n, i)) return !0;
      }
      return !1;
    }
    function jn(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = Jr || En;
      if (r) {
        const l =
          null == r.parent
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides;
        if (l && e in l) return l[e];
        if (arguments.length > 1) return n && ce(t) ? t.call(r.proxy) : t;
      }
    }
    function Tn(e, t) {
      return Mn(e, null, t);
    }
    const Un = {};
    function Pn(e, t, n) {
      return Mn(e, t, n);
    }
    function Mn(e, t) {
      let {
        immediate: n,
        deep: r,
        flush: l,
        onTrack: i,
        onTrigger: o,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Q;
      const s = Jr;
      let a,
        c,
        u = !1,
        p = !1;
      if (
        (Zt(e)
          ? ((a = () => e.value), (u = Ft(e)))
          : Pt(e)
            ? ((a = () => e), (r = !0))
            : ie(e)
              ? ((p = !0),
                (u = e.some((e) => Pt(e) || Ft(e))),
                (a = () =>
                  e.map((e) =>
                    Zt(e)
                      ? e.value
                      : Pt(e)
                        ? Fn(e)
                        : ce(e)
                          ? rn(e, s, 2)
                          : void 0,
                  )))
              : (a = ce(e)
                  ? t
                    ? () => rn(e, s, 2)
                    : () => {
                        if (!s || !s.isUnmounted)
                          return c && c(), ln(e, s, 3, [h]);
                      }
                  : G),
        t && r)
      ) {
        const e = a;
        a = () => Fn(e());
      }
      let d,
        h = (e) => {
          c = v.onStop = () => {
            rn(e, s, 4);
          };
        };
      if (tl) {
        if (
          ((h = G),
          t ? n && ln(t, s, 3, [a(), p ? [] : void 0, h]) : a(),
          "sync" !== l)
        )
          return G;
        {
          const e = al();
          d = e.__watcherHandles || (e.__watcherHandles = []);
        }
      }
      let f = p ? new Array(e.length).fill(Un) : Un;
      const g = () => {
        if (v.active)
          if (t) {
            const e = v.run();
            (r || u || (p ? e.some((e, t) => Se(e, f[t])) : Se(e, f))) &&
              (c && c(),
              ln(t, s, 3, [
                e,
                f === Un ? void 0 : p && f[0] === Un ? [] : f,
                h,
              ]),
              (f = e));
          } else v.run();
      };
      let m;
      (g.allowRecurse = !!t),
        "sync" === l
          ? (m = g)
          : "post" === l
            ? (m = () => br(g, s && s.suspense))
            : ((g.pre = !0), s && (g.id = s.uid), (m = () => vn(g)));
      const v = new De(a, m);
      t
        ? n
          ? g()
          : (f = v.run())
        : "post" === l
          ? br(v.run.bind(v), s && s.suspense)
          : v.run();
      const y = () => {
        v.stop(), s && s.scope && ne(s.scope.effects, v);
      };
      return d && d.push(y), y;
    }
    function Fn(e, t) {
      if (!de(e) || e.__v_skip) return e;
      if ((t = t || new Set()).has(e)) return e;
      if ((t.add(e), Zt(e))) Fn(e.value, t);
      else if (ie(e)) for (let n = 0; n < e.length; n++) Fn(e[n], t);
      else if (se(e) || oe(e))
        e.forEach((e) => {
          Fn(e, t);
        });
      else if (me(e)) for (const n in e) Fn(e[n], t);
      return e;
    }
    function Nn(e) {
      return ce(e) ? { setup: e, name: e.name } : e;
    }
    const Vn = (e) => !!e.type.__asyncLoader,
      Dn = (e) =>
        function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jr;
          return (
            (!tl || "sp" === e) &&
            (function (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Jr,
                r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
              if (n) {
                const l = n[e] || (n[e] = []),
                  i =
                    t.__weh ||
                    (t.__weh = function () {
                      if (n.isUnmounted) return;
                      qe(), Xr(n);
                      for (
                        var r = arguments.length, l = new Array(r), i = 0;
                        i < r;
                        i++
                      )
                        l[i] = arguments[i];
                      const o = ln(t, n, e, l);
                      return Yr(), Ze(), o;
                    });
                return r ? l.unshift(i) : l.push(i), i;
              }
            })(
              e,
              function () {
                return t(...arguments);
              },
              n,
            )
          );
        },
      Bn = Dn("m"),
      Hn = Dn("bum"),
      Wn = Dn("um");
    function qn(e, t) {
      const n = En;
      if (null === n) return e;
      const r = ll(n) || n.proxy,
        l = e.dirs || (e.dirs = []);
      for (let e = 0; e < t.length; e++) {
        let [n, i, o, s = Q] = t[e];
        n &&
          (ce(n) && (n = { mounted: n, updated: n }),
          n.deep && Fn(i),
          l.push({
            dir: n,
            instance: r,
            value: i,
            oldValue: void 0,
            arg: o,
            modifiers: s,
          }));
      }
      return e;
    }
    function Zn(e, t, n, r) {
      const l = e.dirs,
        i = t && t.dirs;
      for (let o = 0; o < l.length; o++) {
        const s = l[o];
        i && (s.oldValue = i[o].value);
        let a = s.dir[r];
        a && (qe(), ln(a, n, 8, [e.el, s, e, t]), Ze());
      }
    }
    const Qn = "components";
    const Kn = Symbol();
    function Gn(e, t) {
      return e && (e[t] || e[ke(t)] || e[$e(ke(t))]);
    }
    function Jn(e, t, n, r) {
      let l;
      const i = n && n[r];
      if (ie(e) || ue(e)) {
        l = new Array(e.length);
        for (let n = 0, r = e.length; n < r; n++)
          l[n] = t(e[n], n, void 0, i && i[n]);
      } else if ("number" == typeof e) {
        l = new Array(e);
        for (let n = 0; n < e; n++) l[n] = t(n + 1, n, void 0, i && i[n]);
      } else if (de(e))
        if (e[Symbol.iterator])
          l = Array.from(e, (e, n) => t(e, n, void 0, i && i[n]));
        else {
          const n = Object.keys(e);
          l = new Array(n.length);
          for (let r = 0, o = n.length; r < o; r++) {
            const o = n[r];
            l[r] = t(e[o], o, r, i && i[r]);
          }
        }
      else l = [];
      return n && (n[r] = l), l;
    }
    const Xn = (e) => (e ? (el(e) ? ll(e) || e.proxy : Xn(e.parent)) : null),
      Yn = te(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Xn(e.parent),
        $root: (e) => Xn(e.root),
        $emit: (e) => e.emit,
        $options: (e) => e.type,
        $forceUpdate: (e) => e.f || (e.f = () => vn(e.update)),
        $nextTick: (e) => e.n || (e.n = mn.bind(e.proxy)),
        $watch: (e) => G,
      }),
      er = (e, t) => e !== Q && !e.__isScriptSetup && le(e, t),
      tr = {
        get(e, t) {
          let { _: n } = e;
          const {
            ctx: r,
            setupState: l,
            data: i,
            props: o,
            accessCache: s,
            type: a,
            appContext: c,
          } = n;
          let u;
          if ("$" !== t[0]) {
            const e = s[t];
            if (void 0 !== e)
              switch (e) {
                case 1:
                  return l[t];
                case 2:
                  return i[t];
                case 4:
                  return r[t];
                case 3:
                  return o[t];
              }
            else {
              if (er(l, t)) return (s[t] = 1), l[t];
              if (i !== Q && le(i, t)) return (s[t] = 2), i[t];
              if ((u = n.propsOptions[0]) && le(u, t)) return (s[t] = 3), o[t];
              if (r !== Q && le(r, t)) return (s[t] = 4), r[t];
              s[t] = 0;
            }
          }
          const p = Yn[t];
          let d, h;
          return p
            ? ("$attrs" === t && Qe(n, 0, t), p(n))
            : (d = a.__cssModules) && (d = d[t])
              ? d
              : r !== Q && le(r, t)
                ? ((s[t] = 4), r[t])
                : ((h = c.config.globalProperties), le(h, t) ? h[t] : void 0);
        },
        set(e, t, n) {
          let { _: r } = e;
          const { data: l, setupState: i, ctx: o } = r;
          return er(i, t)
            ? ((i[t] = n), !0)
            : l !== Q && le(l, t)
              ? ((l[t] = n), !0)
              : !(
                  le(r.props, t) ||
                  ("$" === t[0] && t.slice(1) in r) ||
                  ((o[t] = n), 0)
                );
        },
        has(e, t) {
          let n,
            {
              _: {
                data: r,
                setupState: l,
                accessCache: i,
                ctx: o,
                appContext: s,
                propsOptions: a,
              },
            } = e;
          return (
            !!i[t] ||
            (r !== Q && le(r, t)) ||
            er(l, t) ||
            ((n = a[0]) && le(n, t)) ||
            le(o, t) ||
            le(Yn, t) ||
            le(s.config.globalProperties, t)
          );
        },
        defineProperty(e, t, n) {
          return (
            null != n.get
              ? (e._.accessCache[t] = 0)
              : le(n, "value") && this.set(e, t, n.value, null),
            Reflect.defineProperty(e, t, n)
          );
        },
      };
    function nr(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const l = {},
        i = {};
      Re(i, Pr, 1), (e.propsDefaults = Object.create(null)), rr(e, t, l, i);
      for (const t in e.propsOptions[0]) t in l || (l[t] = void 0);
      n
        ? (e.props = r ? l : Ut(l, !1, ct, Rt, Lt))
        : e.type.props
          ? (e.props = l)
          : (e.props = i),
        (e.attrs = i);
    }
    function rr(e, t, n, r) {
      const [l, i] = e.propsOptions;
      let o,
        s = !1;
      if (t)
        for (let a in t) {
          if (ye(a)) continue;
          const c = t[a];
          let u;
          l && le(l, (u = ke(a)))
            ? i && i.includes(u)
              ? ((o || (o = {}))[u] = c)
              : (n[u] = c)
            : Sn(e.emitsOptions, a) ||
              (a in r && c === r[a]) ||
              ((r[a] = c), (s = !0));
        }
      if (i) {
        const t = Vt(n),
          r = o || Q;
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          n[s] = lr(l, t, s, r[s], e, !le(r, s));
        }
      }
      return s;
    }
    function lr(e, t, n, r, l, i) {
      const o = e[n];
      if (null != o) {
        const e = le(o, "default");
        if (e && void 0 === r) {
          const e = o.default;
          if (o.type !== Function && ce(e)) {
            const { propsDefaults: i } = l;
            n in i ? (r = i[n]) : (Xr(l), (r = i[n] = e.call(null, t)), Yr());
          } else r = e;
        }
        o[0] &&
          (i && !e ? (r = !1) : !o[1] || ("" !== r && r !== _e(n)) || (r = !0));
      }
      return r;
    }
    function ir(e, t) {
      const n = t.propsCache,
        r = n.get(e);
      if (r) return r;
      const l = e.props,
        i = {},
        o = [];
      if (!l) return de(e) && n.set(e, K), K;
      if (ie(l))
        for (let e = 0; e < l.length; e++) {
          const t = ke(l[e]);
          or(t) && (i[t] = Q);
        }
      else if (l)
        for (const e in l) {
          const t = ke(e);
          if (or(t)) {
            const n = l[e],
              r = (i[t] = ie(n) || ce(n) ? { type: n } : Object.assign({}, n));
            if (r) {
              const e = cr(Boolean, r.type),
                n = cr(String, r.type);
              (r[0] = e > -1),
                (r[1] = n < 0 || e < n),
                (e > -1 || le(r, "default")) && o.push(t);
            }
          }
        }
      const s = [i, o];
      return de(e) && n.set(e, s), s;
    }
    function or(e) {
      return "$" !== e[0];
    }
    function sr(e) {
      const t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : null === e ? "null" : "";
    }
    function ar(e, t) {
      return sr(e) === sr(t);
    }
    function cr(e, t) {
      return ie(t) ? t.findIndex((t) => ar(t, e)) : ce(t) && ar(t, e) ? 0 : -1;
    }
    const ur = (e) => "_" === e[0] || "$stable" === e,
      pr = (e) => (ie(e) ? e.map(Wr) : [Wr(e)]),
      dr = (e, t, n) => {
        if (t._n) return t;
        const r = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : En;
          if (!t) return e;
          if (e._n) return e;
          const n = function () {
            n._d && Lr(-1);
            const r = An(t);
            let l;
            try {
              l = e(...arguments);
            } finally {
              An(r), n._d && Lr(1);
            }
            return l;
          };
          return (n._n = !0), (n._c = !0), (n._d = !0), n;
        })(function () {
          return pr(t(...arguments));
        }, n);
        return (r._c = !1), r;
      },
      hr = (e, t, n) => {
        const r = e._ctx;
        for (const n in e) {
          if (ur(n)) continue;
          const l = e[n];
          if (ce(l)) t[n] = dr(0, l, r);
          else if (null != l) {
            const e = pr(l);
            t[n] = () => e;
          }
        }
      },
      fr = (e, t) => {
        const n = pr(t);
        e.slots.default = () => n;
      };
    function gr() {
      return {
        app: null,
        config: {
          isNativeTag: J,
          performance: !1,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
      };
    }
    let mr = 0;
    function vr(e, t) {
      return function (n) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        ce(n) || (n = Object.assign({}, n)), null == r || de(r) || (r = null);
        const l = gr(),
          i = new Set();
        let o = !1;
        const s = (l.app = {
          _uid: mr++,
          _component: n,
          _props: r,
          _container: null,
          _context: l,
          _instance: null,
          version: cl,
          get config() {
            return l.config;
          },
          set config(e) {},
          use: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return (
              i.has(e) ||
                (e && ce(e.install)
                  ? (i.add(e), e.install(s, ...n))
                  : ce(e) && (i.add(e), e(s, ...n))),
              s
            );
          },
          mixin: (e) => s,
          component: (e, t) =>
            t ? ((l.components[e] = t), s) : l.components[e],
          directive: (e, t) =>
            t ? ((l.directives[e] = t), s) : l.directives[e],
          mount(i, a, c) {
            if (!o) {
              const u = Vr(n, r);
              return (
                (u.appContext = l),
                a && t ? t(u, i) : e(u, i, c),
                (o = !0),
                (s._container = i),
                (i.__vue_app__ = s),
                ll(u.component) || u.component.proxy
              );
            }
          },
          unmount() {
            o && (e(null, s._container), delete s._container.__vue_app__);
          },
          provide: (e, t) => ((l.provides[e] = t), s),
        });
        return s;
      };
    }
    function yr(e, t, n, r) {
      let l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (ie(e))
        return void e.forEach((e, i) =>
          yr(e, t && (ie(t) ? t[i] : t), n, r, l),
        );
      if (Vn(r) && !l) return;
      const i = 4 & r.shapeFlag ? ll(r.component) || r.component.proxy : r.el,
        o = l ? null : i,
        { i: s, r: a } = e,
        c = t && t.r,
        u = s.refs === Q ? (s.refs = {}) : s.refs,
        p = s.setupState;
      if (
        (null != c &&
          c !== a &&
          (ue(c)
            ? ((u[c] = null), le(p, c) && (p[c] = null))
            : Zt(c) && (c.value = null)),
        ce(a))
      )
        rn(a, s, 12, [o, u]);
      else {
        const t = ue(a),
          r = Zt(a);
        if (t || r) {
          const s = () => {
            if (e.f) {
              const n = t ? (le(p, a) ? p[a] : u[a]) : a.value;
              l
                ? ie(n) && ne(n, i)
                : ie(n)
                  ? n.includes(i) || n.push(i)
                  : t
                    ? ((u[a] = [i]), le(p, a) && (p[a] = u[a]))
                    : ((a.value = [i]), e.k && (u[e.k] = a.value));
            } else
              t
                ? ((u[a] = o), le(p, a) && (p[a] = o))
                : r && ((a.value = o), e.k && (u[e.k] = o));
          };
          o ? ((s.id = -1), br(s, n)) : s();
        }
      }
    }
    const br = function (e, t) {
      var n;
      t && t.pendingBranch
        ? ie(e)
          ? t.effects.push(...e)
          : t.effects.push(e)
        : (ie((n = e))
            ? pn.push(...n)
            : (dn && dn.includes(n, n.allowRecurse ? hn + 1 : hn)) ||
              pn.push(n),
          yn());
    };
    function wr(e) {
      return (function (e, t) {
        (
          Ie ||
          (Ie =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : "undefined" != typeof global
                    ? global
                    : {})
        ).__VUE__ = !0;
        const {
            insert: n,
            remove: r,
            patchProp: l,
            createElement: i,
            createText: o,
            createComment: s,
            setText: a,
            setElementText: c,
            parentNode: u,
            nextSibling: p,
            setScopeId: d = G,
            insertStaticContent: h,
          } = e,
          f = function (e, t, n) {
            let r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null,
              l =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : null,
              i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : null,
              o =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              s =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : null,
              a =
                arguments.length > 8 && void 0 !== arguments[8]
                  ? arguments[8]
                  : !!t.dynamicChildren;
            if (e === t) return;
            e && !Ur(e, t) && ((r = V(e)), U(e, l, i, !0), (e = null)),
              -2 === t.patchFlag && ((a = !1), (t.dynamicChildren = null));
            const { type: c, ref: u, shapeFlag: p } = t;
            switch (c) {
              case $r:
                g(e, t, n, r);
                break;
              case Cr:
                m(e, t, n, r);
                break;
              case Sr:
                null == e && v(t, n, r, o);
                break;
              case _r:
                S(e, t, n, r, l, i, o, s, a);
                break;
              default:
                1 & p
                  ? b(e, t, n, r, l, i, o, s, a)
                  : 6 & p
                    ? E(e, t, n, r, l, i, o, s, a)
                    : (64 & p || 128 & p) &&
                      c.process(e, t, n, r, l, i, o, s, a, B);
            }
            null != u && l && yr(u, e && e.ref, i, t || e, !t);
          },
          g = (e, t, r, l) => {
            if (null == e) n((t.el = o(t.children)), r, l);
            else {
              const n = (t.el = e.el);
              t.children !== e.children && a(n, t.children);
            }
          },
          m = (e, t, r, l) => {
            null == e ? n((t.el = s(t.children || "")), r, l) : (t.el = e.el);
          },
          v = (e, t, n, r) => {
            [e.el, e.anchor] = h(e.children, t, n, r, e.el, e.anchor);
          },
          y = (e, t, r) => {
            let l,
              { el: i, anchor: o } = e;
            for (; i && i !== o; ) (l = p(i)), n(i, t, r), (i = l);
            n(o, t, r);
          },
          b = (e, t, n, r, l, i, o, s, a) => {
            (o = o || "svg" === t.type),
              null == e ? w(t, n, r, l, i, o, s, a) : _(e, t, l, i, o, s, a);
          },
          w = (e, t, r, o, s, a, u, p) => {
            let d, h;
            const {
              type: f,
              props: g,
              shapeFlag: m,
              transition: v,
              dirs: y,
            } = e;
            if (
              ((d = e.el = i(e.type, a, g && g.is, g)),
              8 & m
                ? c(d, e.children)
                : 16 & m &&
                  x(
                    e.children,
                    d,
                    null,
                    o,
                    s,
                    a && "foreignObject" !== f,
                    u,
                    p,
                  ),
              y && Zn(e, null, o, "created"),
              g)
            ) {
              for (const t in g)
                "value" === t ||
                  ye(t) ||
                  l(d, t, null, g[t], a, e.children, o, s, N);
              "value" in g && l(d, "value", null, g.value),
                (h = g.onVnodeBeforeMount) && Qr(h, o, e);
            }
            k(d, e, e.scopeId, u, o), y && Zn(e, null, o, "beforeMount");
            const b = (!s || (s && !s.pendingBranch)) && v && !v.persisted;
            b && v.beforeEnter(d),
              n(d, t, r),
              ((h = g && g.onVnodeMounted) || b || y) &&
                br(() => {
                  h && Qr(h, o, e),
                    b && v.enter(d),
                    y && Zn(e, null, o, "mounted");
                }, s);
          },
          k = (e, t, n, r, l) => {
            if ((n && d(e, n), r))
              for (let t = 0; t < r.length; t++) d(e, r[t]);
            if (l && t === l.subTree) {
              const t = l.vnode;
              k(e, t, t.scopeId, t.slotScopeIds, l.parent);
            }
          },
          x = function (e, t, n, r, l, i, o, s) {
            let a =
              arguments.length > 8 && void 0 !== arguments[8]
                ? arguments[8]
                : 0;
            for (let c = a; c < e.length; c++) {
              const a = (e[c] = s ? qr(e[c]) : Wr(e[c]));
              f(null, a, t, n, r, l, i, o, s);
            }
          },
          _ = (e, t, n, r, i, o, s) => {
            const a = (t.el = e.el);
            let { patchFlag: u, dynamicChildren: p, dirs: d } = t;
            u |= 16 & e.patchFlag;
            const h = e.props || Q,
              f = t.props || Q;
            let g;
            n && kr(n, !1),
              (g = f.onVnodeBeforeUpdate) && Qr(g, n, t, e),
              d && Zn(t, e, n, "beforeUpdate"),
              n && kr(n, !0);
            const m = i && "foreignObject" !== t.type;
            if (
              (p
                ? $(e.dynamicChildren, p, a, n, r, m, o)
                : s || z(e, t, a, null, n, r, m, o, !1),
              u > 0)
            ) {
              if (16 & u) C(a, t, h, f, n, r, i);
              else if (
                (2 & u &&
                  h.class !== f.class &&
                  l(a, "class", null, f.class, i),
                4 & u && l(a, "style", h.style, f.style, i),
                8 & u)
              ) {
                const o = t.dynamicProps;
                for (let t = 0; t < o.length; t++) {
                  const s = o[t],
                    c = h[s],
                    u = f[s];
                  (u === c && "value" !== s) ||
                    l(a, s, c, u, i, e.children, n, r, N);
                }
              }
              1 & u && e.children !== t.children && c(a, t.children);
            } else s || null != p || C(a, t, h, f, n, r, i);
            ((g = f.onVnodeUpdated) || d) &&
              br(() => {
                g && Qr(g, n, t, e), d && Zn(t, e, n, "updated");
              }, r);
          },
          $ = (e, t, n, r, l, i, o) => {
            for (let s = 0; s < t.length; s++) {
              const a = e[s],
                c = t[s],
                p =
                  a.el && (a.type === _r || !Ur(a, c) || 70 & a.shapeFlag)
                    ? u(a.el)
                    : n;
              f(a, c, p, null, r, l, i, o, !0);
            }
          },
          C = (e, t, n, r, i, o, s) => {
            if (n !== r) {
              if (n !== Q)
                for (const a in n)
                  ye(a) ||
                    a in r ||
                    l(e, a, n[a], null, s, t.children, i, o, N);
              for (const a in r) {
                if (ye(a)) continue;
                const c = r[a],
                  u = n[a];
                c !== u &&
                  "value" !== a &&
                  l(e, a, u, c, s, t.children, i, o, N);
              }
              "value" in r && l(e, "value", n.value, r.value);
            }
          },
          S = (e, t, r, l, i, s, a, c, u) => {
            const p = (t.el = e ? e.el : o("")),
              d = (t.anchor = e ? e.anchor : o(""));
            let { patchFlag: h, dynamicChildren: f, slotScopeIds: g } = t;
            g && (c = c ? c.concat(g) : g),
              null == e
                ? (n(p, r, l), n(d, r, l), x(t.children, r, d, i, s, a, c, u))
                : h > 0 && 64 & h && f && e.dynamicChildren
                  ? ($(e.dynamicChildren, f, r, i, s, a, c),
                    (null != t.key || (i && t === i.subTree)) && xr(e, t, !0))
                  : z(e, t, r, d, i, s, a, c, u);
          },
          E = (e, t, n, r, l, i, o, s, a) => {
            (t.slotScopeIds = s),
              null == e
                ? 512 & t.shapeFlag
                  ? l.ctx.activate(t, n, r, o, a)
                  : R(t, n, r, l, i, o, a)
                : A(e, t, a);
          },
          R = (e, t, n, r, l, i, o) => {
            const s = (e.component = (function (e, t, n) {
              const r = e.type,
                l = (t ? t.appContext : e.appContext) || Kr,
                i = {
                  uid: Gr++,
                  vnode: e,
                  type: r,
                  parent: t,
                  appContext: l,
                  root: null,
                  next: null,
                  subTree: null,
                  effect: null,
                  update: null,
                  scope: new ze(!0),
                  render: null,
                  proxy: null,
                  exposed: null,
                  exposeProxy: null,
                  withProxy: null,
                  provides: t ? t.provides : Object.create(l.provides),
                  accessCache: null,
                  renderCache: [],
                  components: null,
                  directives: null,
                  propsOptions: ir(r, l),
                  emitsOptions: Cn(r, l),
                  emit: null,
                  emitted: null,
                  propsDefaults: Q,
                  inheritAttrs: r.inheritAttrs,
                  ctx: Q,
                  data: Q,
                  props: Q,
                  attrs: Q,
                  slots: Q,
                  refs: Q,
                  setupState: Q,
                  setupContext: null,
                  suspense: n,
                  suspenseId: n ? n.pendingId : 0,
                  asyncDep: null,
                  asyncResolved: !1,
                  isMounted: !1,
                  isUnmounted: !1,
                  isDeactivated: !1,
                  bc: null,
                  c: null,
                  bm: null,
                  m: null,
                  bu: null,
                  u: null,
                  um: null,
                  bum: null,
                  da: null,
                  a: null,
                  rtg: null,
                  rtc: null,
                  ec: null,
                  sp: null,
                };
              return (
                (i.ctx = { _: i }),
                (i.root = t ? t.root : i),
                (i.emit = $n.bind(null, i)),
                e.ce && e.ce(i),
                i
              );
            })(e, r, l));
            if (
              (e.type.__isKeepAlive && (s.ctx.renderer = B),
              (function (e) {
                let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                tl = t;
                const { props: n, children: r } = e.vnode,
                  l = el(e);
                nr(e, n, l, t),
                  ((e, t) => {
                    if (32 & e.vnode.shapeFlag) {
                      const n = t._;
                      n
                        ? ((e.slots = Vt(t)), Re(t, "_", n))
                        : hr(t, (e.slots = {}));
                    } else (e.slots = {}), t && fr(e, t);
                    Re(e.slots, Pr, 1);
                  })(e, r);
                l &&
                  (function (e, t) {
                    const n = e.type;
                    (e.accessCache = Object.create(null)),
                      (e.proxy = Dt(new Proxy(e.ctx, tr)));
                    const { setup: r } = n;
                    if (r) {
                      const n = (e.setupContext =
                        r.length > 1
                          ? (function (e) {
                              let t;
                              return {
                                get attrs() {
                                  return (
                                    t ||
                                    (t = (function (e) {
                                      return new Proxy(e.attrs, {
                                        get: (t, n) => (
                                          Qe(e, 0, "$attrs"), t[n]
                                        ),
                                      });
                                    })(e))
                                  );
                                },
                                slots: e.slots,
                                emit: e.emit,
                                expose: (t) => {
                                  e.exposed = t || {};
                                },
                              };
                            })(e)
                          : null);
                      Xr(e), qe();
                      const l = rn(r, e, 0, [e.props, n]);
                      if ((Ze(), Yr(), he(l))) {
                        if ((l.then(Yr, Yr), t))
                          return l
                            .then((n) => {
                              nl(e, n, t);
                            })
                            .catch((t) => {
                              on(t, e, 0);
                            });
                        e.asyncDep = l;
                      } else nl(e, l, t);
                    } else rl(e, t);
                  })(e, t);
                tl = !1;
              })(s),
              s.asyncDep)
            ) {
              if ((l && l.registerDep(s, I), !e.el)) {
                const e = (s.subTree = Vr(Cr));
                m(null, e, t, n);
              }
            } else I(s, e, t, n, l, i, o);
          },
          A = (e, t, n) => {
            const r = (t.component = e.component);
            if (
              (function (e, t, n) {
                const { props: r, children: l, component: i } = e,
                  { props: o, children: s, patchFlag: a } = t,
                  c = i.emitsOptions;
                if (t.dirs || t.transition) return !0;
                if (!(n && a >= 0))
                  return (
                    !((!l && !s) || (s && s.$stable)) ||
                    (r !== o && (r ? !o || On(r, o, c) : !!o))
                  );
                if (1024 & a) return !0;
                if (16 & a) return r ? On(r, o, c) : !!o;
                if (8 & a) {
                  const e = t.dynamicProps;
                  for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (o[n] !== r[n] && !Sn(c, n)) return !0;
                  }
                }
                return !1;
              })(e, t, n)
            ) {
              if (r.asyncDep && !r.asyncResolved) return void L(r, t, n);
              (r.next = t),
                (function (e) {
                  const t = cn.indexOf(e);
                  t > un && cn.splice(t, 1);
                })(r.update),
                r.update();
            } else (t.el = e.el), (r.vnode = t);
          },
          I = (e, t, n, r, l, i, o) => {
            const s = (e.effect = new De(
                () => {
                  if (e.isMounted) {
                    let t,
                      { next: n, bu: r, u: s, parent: a, vnode: c } = e,
                      p = n;
                    kr(e, !1),
                      n ? ((n.el = c.el), L(e, n, o)) : (n = c),
                      r && Ee(r),
                      (t = n.props && n.props.onVnodeBeforeUpdate) &&
                        Qr(t, a, n, c),
                      kr(e, !0);
                    const d = In(e),
                      h = e.subTree;
                    (e.subTree = d),
                      f(h, d, u(h.el), V(h), e, l, i),
                      (n.el = d.el),
                      null === p &&
                        (function (e, t) {
                          let { vnode: n, parent: r } = e;
                          for (; r && r.subTree === n; )
                            ((n = r.vnode).el = t), (r = r.parent);
                        })(e, d.el),
                      s && br(s, l),
                      (t = n.props && n.props.onVnodeUpdated) &&
                        br(() => Qr(t, a, n, c), l);
                  } else {
                    let o;
                    const { el: s, props: a } = t,
                      { bm: c, m: u, parent: p } = e,
                      d = Vn(t);
                    if (
                      (kr(e, !1),
                      c && Ee(c),
                      !d && (o = a && a.onVnodeBeforeMount) && Qr(o, p, t),
                      kr(e, !0),
                      s && W)
                    ) {
                      const n = () => {
                        (e.subTree = In(e)), W(s, e.subTree, e, l, null);
                      };
                      d
                        ? t.type
                            .__asyncLoader()
                            .then(() => !e.isUnmounted && n())
                        : n();
                    } else {
                      const o = (e.subTree = In(e));
                      f(null, o, n, r, e, l, i), (t.el = o.el);
                    }
                    if ((u && br(u, l), !d && (o = a && a.onVnodeMounted))) {
                      const e = t;
                      br(() => Qr(o, p, e), l);
                    }
                    (256 & t.shapeFlag ||
                      (p && Vn(p.vnode) && 256 & p.vnode.shapeFlag)) &&
                      e.a &&
                      br(e.a, l),
                      (e.isMounted = !0),
                      (t = n = r = null);
                  }
                },
                () => vn(a),
                e.scope,
              )),
              a = (e.update = () => s.run());
            (a.id = e.uid), kr(e, !0), a();
          },
          L = (e, t, n) => {
            t.component = e;
            const r = e.vnode.props;
            (e.vnode = t),
              (e.next = null),
              (function (e, t, n, r) {
                const {
                    props: l,
                    attrs: i,
                    vnode: { patchFlag: o },
                  } = e,
                  s = Vt(l),
                  [a] = e.propsOptions;
                let c = !1;
                if (!(r || o > 0) || 16 & o) {
                  let r;
                  rr(e, t, l, i) && (c = !0);
                  for (const i in s)
                    (t && (le(t, i) || ((r = _e(i)) !== i && le(t, r)))) ||
                      (a
                        ? !n ||
                          (void 0 === n[i] && void 0 === n[r]) ||
                          (l[i] = lr(a, s, i, void 0, e, !0))
                        : delete l[i]);
                  if (i !== s)
                    for (const e in i)
                      (t && le(t, e)) || (delete i[e], (c = !0));
                } else if (8 & o) {
                  const n = e.vnode.dynamicProps;
                  for (let r = 0; r < n.length; r++) {
                    let o = n[r];
                    if (Sn(e.emitsOptions, o)) continue;
                    const u = t[o];
                    if (a)
                      if (le(i, o)) u !== i[o] && ((i[o] = u), (c = !0));
                      else {
                        const t = ke(o);
                        l[t] = lr(a, s, t, u, e, !1);
                      }
                    else u !== i[o] && ((i[o] = u), (c = !0));
                  }
                }
                c && Ge(e, "set", "$attrs");
              })(e, t.props, r, n),
              ((e, t, n) => {
                const { vnode: r, slots: l } = e;
                let i = !0,
                  o = Q;
                if (32 & r.shapeFlag) {
                  const e = t._;
                  e
                    ? n && 1 === e
                      ? (i = !1)
                      : (te(l, t), n || 1 !== e || delete l._)
                    : ((i = !t.$stable), hr(t, l)),
                    (o = t);
                } else t && (fr(e, t), (o = { default: 1 }));
                if (i) for (const e in l) ur(e) || e in o || delete l[e];
              })(e, t.children, n),
              qe(),
              bn(),
              Ze();
          },
          z = function (e, t, n, r, l, i, o, s) {
            let a =
              arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
            const u = e && e.children,
              p = e ? e.shapeFlag : 0,
              d = t.children,
              { patchFlag: h, shapeFlag: f } = t;
            if (h > 0) {
              if (128 & h) return void j(u, d, n, r, l, i, o, s, a);
              if (256 & h) return void O(u, d, n, r, l, i, o, s, a);
            }
            8 & f
              ? (16 & p && N(u, l, i), d !== u && c(n, d))
              : 16 & p
                ? 16 & f
                  ? j(u, d, n, r, l, i, o, s, a)
                  : N(u, l, i, !0)
                : (8 & p && c(n, ""), 16 & f && x(d, n, r, l, i, o, s, a));
          },
          O = (e, t, n, r, l, i, o, s, a) => {
            t = t || K;
            const c = (e = e || K).length,
              u = t.length,
              p = Math.min(c, u);
            let d;
            for (d = 0; d < p; d++) {
              const r = (t[d] = a ? qr(t[d]) : Wr(t[d]));
              f(e[d], r, n, null, l, i, o, s, a);
            }
            c > u ? N(e, l, i, !0, !1, p) : x(t, n, r, l, i, o, s, a, p);
          },
          j = (e, t, n, r, l, i, o, s, a) => {
            let c = 0;
            const u = t.length;
            let p = e.length - 1,
              d = u - 1;
            for (; c <= p && c <= d; ) {
              const r = e[c],
                u = (t[c] = a ? qr(t[c]) : Wr(t[c]));
              if (!Ur(r, u)) break;
              f(r, u, n, null, l, i, o, s, a), c++;
            }
            for (; c <= p && c <= d; ) {
              const r = e[p],
                c = (t[d] = a ? qr(t[d]) : Wr(t[d]));
              if (!Ur(r, c)) break;
              f(r, c, n, null, l, i, o, s, a), p--, d--;
            }
            if (c > p) {
              if (c <= d) {
                const e = d + 1,
                  p = e < u ? t[e].el : r;
                for (; c <= d; )
                  f(
                    null,
                    (t[c] = a ? qr(t[c]) : Wr(t[c])),
                    n,
                    p,
                    l,
                    i,
                    o,
                    s,
                    a,
                  ),
                    c++;
              }
            } else if (c > d) for (; c <= p; ) U(e[c], l, i, !0), c++;
            else {
              const h = c,
                g = c,
                m = new Map();
              for (c = g; c <= d; c++) {
                const e = (t[c] = a ? qr(t[c]) : Wr(t[c]));
                null != e.key && m.set(e.key, c);
              }
              let v,
                y = 0;
              const b = d - g + 1;
              let w = !1,
                k = 0;
              const x = new Array(b);
              for (c = 0; c < b; c++) x[c] = 0;
              for (c = h; c <= p; c++) {
                const r = e[c];
                if (y >= b) {
                  U(r, l, i, !0);
                  continue;
                }
                let u;
                if (null != r.key) u = m.get(r.key);
                else
                  for (v = g; v <= d; v++)
                    if (0 === x[v - g] && Ur(r, t[v])) {
                      u = v;
                      break;
                    }
                void 0 === u
                  ? U(r, l, i, !0)
                  : ((x[u - g] = c + 1),
                    u >= k ? (k = u) : (w = !0),
                    f(r, t[u], n, null, l, i, o, s, a),
                    y++);
              }
              const _ = w
                ? (function (e) {
                    const t = e.slice(),
                      n = [0];
                    let r, l, i, o, s;
                    const a = e.length;
                    for (r = 0; r < a; r++) {
                      const a = e[r];
                      if (0 !== a) {
                        if (((l = n[n.length - 1]), e[l] < a)) {
                          (t[r] = l), n.push(r);
                          continue;
                        }
                        for (i = 0, o = n.length - 1; i < o; )
                          (s = (i + o) >> 1),
                            e[n[s]] < a ? (i = s + 1) : (o = s);
                        a < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
                      }
                    }
                    for (i = n.length, o = n[i - 1]; i-- > 0; )
                      (n[i] = o), (o = t[o]);
                    return n;
                  })(x)
                : K;
              for (v = _.length - 1, c = b - 1; c >= 0; c--) {
                const e = g + c,
                  p = t[e],
                  d = e + 1 < u ? t[e + 1].el : r;
                0 === x[c]
                  ? f(null, p, n, d, l, i, o, s, a)
                  : w && (v < 0 || c !== _[v] ? T(p, n, d, 2) : v--);
              }
            }
          },
          T = function (e, t, r, l) {
            let i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null;
            const {
              el: o,
              type: s,
              transition: a,
              children: c,
              shapeFlag: u,
            } = e;
            if (6 & u) T(e.component.subTree, t, r, l);
            else if (128 & u) e.suspense.move(t, r, l);
            else if (64 & u) s.move(e, t, r, B);
            else if (s !== _r)
              if (s !== Sr)
                if (2 !== l && 1 & u && a)
                  if (0 === l)
                    a.beforeEnter(o), n(o, t, r), br(() => a.enter(o), i);
                  else {
                    const { leave: e, delayLeave: l, afterLeave: i } = a,
                      s = () => n(o, t, r),
                      c = () => {
                        e(o, () => {
                          s(), i && i();
                        });
                      };
                    l ? l(o, s, c) : c();
                  }
                else n(o, t, r);
              else y(e, t, r);
            else {
              n(o, t, r);
              for (let e = 0; e < c.length; e++) T(c[e], t, r, l);
              n(e.anchor, t, r);
            }
          },
          U = function (e, t, n) {
            let r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              l =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            const {
              type: i,
              props: o,
              ref: s,
              children: a,
              dynamicChildren: c,
              shapeFlag: u,
              patchFlag: p,
              dirs: d,
            } = e;
            if ((null != s && yr(s, null, n, e, !0), 256 & u))
              return void t.ctx.deactivate(e);
            const h = 1 & u && d,
              f = !Vn(e);
            let g;
            if ((f && (g = o && o.onVnodeBeforeUnmount) && Qr(g, t, e), 6 & u))
              F(e.component, n, r);
            else {
              if (128 & u) return void e.suspense.unmount(n, r);
              h && Zn(e, null, t, "beforeUnmount"),
                64 & u
                  ? e.type.remove(e, t, n, l, B, r)
                  : c && (i !== _r || (p > 0 && 64 & p))
                    ? N(c, t, n, !1, !0)
                    : ((i === _r && 384 & p) || (!l && 16 & u)) && N(a, t, n),
                r && P(e);
            }
            ((f && (g = o && o.onVnodeUnmounted)) || h) &&
              br(() => {
                g && Qr(g, t, e), h && Zn(e, null, t, "unmounted");
              }, n);
          },
          P = (e) => {
            const { type: t, el: n, anchor: l, transition: i } = e;
            if (t === _r) return void M(n, l);
            if (t === Sr)
              return void ((e) => {
                let t,
                  { el: n, anchor: l } = e;
                for (; n && n !== l; ) (t = p(n)), r(n), (n = t);
                r(l);
              })(e);
            const o = () => {
              r(n), i && !i.persisted && i.afterLeave && i.afterLeave();
            };
            if (1 & e.shapeFlag && i && !i.persisted) {
              const { leave: t, delayLeave: r } = i,
                l = () => t(n, o);
              r ? r(e.el, o, l) : l();
            } else o();
          },
          M = (e, t) => {
            let n;
            for (; e !== t; ) (n = p(e)), r(e), (e = n);
            r(t);
          },
          F = (e, t, n) => {
            const { bum: r, scope: l, update: i, subTree: o, um: s } = e;
            r && Ee(r),
              l.stop(),
              i && ((i.active = !1), U(o, e, t, n)),
              s && br(s, t),
              br(() => {
                e.isUnmounted = !0;
              }, t),
              t &&
                t.pendingBranch &&
                !t.isUnmounted &&
                e.asyncDep &&
                !e.asyncResolved &&
                e.suspenseId === t.pendingId &&
                (t.deps--, 0 === t.deps && t.resolve());
          },
          N = function (e, t, n) {
            let r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              l =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0;
            for (let o = i; o < e.length; o++) U(e[o], t, n, r, l);
          },
          V = (e) =>
            6 & e.shapeFlag
              ? V(e.component.subTree)
              : 128 & e.shapeFlag
                ? e.suspense.next()
                : p(e.anchor || e.el),
          D = (e, t, n) => {
            null == e
              ? t._vnode && U(t._vnode, null, null, !0)
              : f(t._vnode || null, e, t, null, null, null, n),
              bn(),
              wn(),
              (t._vnode = e);
          },
          B = {
            p: f,
            um: U,
            m: T,
            r: P,
            mt: R,
            mc: x,
            pc: z,
            pbc: $,
            n: V,
            o: e,
          };
        let H, W;
        return { render: D, hydrate: H, createApp: vr(D, H) };
      })(e);
    }
    function kr(e, t) {
      let { effect: n, update: r } = e;
      n.allowRecurse = r.allowRecurse = t;
    }
    function xr(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = e.children,
        l = t.children;
      if (ie(r) && ie(l))
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          let i = l[e];
          1 & i.shapeFlag &&
            !i.dynamicChildren &&
            ((i.patchFlag <= 0 || 32 === i.patchFlag) &&
              ((i = l[e] = qr(l[e])), (i.el = t.el)),
            n || xr(t, i)),
            i.type === $r && (i.el = t.el);
        }
    }
    const _r = Symbol(void 0),
      $r = Symbol(void 0),
      Cr = Symbol(void 0),
      Sr = Symbol(void 0),
      Er = [];
    let Rr = null;
    function Ar() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      Er.push((Rr = e ? null : []));
    }
    let Ir = 1;
    function Lr(e) {
      Ir += e;
    }
    function zr(e) {
      return (
        (e.dynamicChildren = Ir > 0 ? Rr || K : null),
        Er.pop(),
        (Rr = Er[Er.length - 1] || null),
        Ir > 0 && Rr && Rr.push(e),
        e
      );
    }
    function Or(e, t, n, r, l, i) {
      return zr(Nr(e, t, n, r, l, i, !0));
    }
    function jr(e, t, n, r, l) {
      return zr(Vr(e, t, n, r, l, !0));
    }
    function Tr(e) {
      return !!e && !0 === e.__v_isVNode;
    }
    function Ur(e, t) {
      return e.type === t.type && e.key === t.key;
    }
    const Pr = "__vInternal",
      Mr = (e) => {
        let { key: t } = e;
        return null != t ? t : null;
      },
      Fr = (e) => {
        let { ref: t, ref_key: n, ref_for: r } = e;
        return null != t
          ? ue(t) || Zt(t) || ce(t)
            ? { i: En, r: t, k: n, f: !!r }
            : t
          : null;
      };
    function Nr(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        l =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        i =
          arguments.length > 5 && void 0 !== arguments[5]
            ? arguments[5]
            : e === _r
              ? 0
              : 1,
        o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Mr(t),
        ref: t && Fr(t),
        scopeId: Rn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: l,
        dynamicChildren: null,
        appContext: null,
        ctx: En,
      };
      return (
        s
          ? (Zr(a, n), 128 & i && e.normalize(a))
          : n && (a.shapeFlag |= ue(n) ? 8 : 16),
        Ir > 0 &&
          !o &&
          Rr &&
          (a.patchFlag > 0 || 6 & i) &&
          32 !== a.patchFlag &&
          Rr.push(a),
        a
      );
    }
    const Vr = function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        l =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (((e && e !== Kn) || (e = Cr), Tr(e))) {
        const r = Dr(e, t, !0);
        return (
          n && Zr(r, n),
          Ir > 0 &&
            !i &&
            Rr &&
            (6 & r.shapeFlag ? (Rr[Rr.indexOf(e)] = r) : Rr.push(r)),
          (r.patchFlag |= -2),
          r
        );
      }
      var o;
      if ((ce((o = e)) && "__vccOpts" in o && (e = e.__vccOpts), t)) {
        t = (function (e) {
          return e ? (Nt(e) || Pr in e ? te({}, e) : e) : null;
        })(t);
        let { class: e, style: n } = t;
        e && !ue(e) && (t.class = V(e)),
          de(n) && (Nt(n) && !ie(n) && (n = te({}, n)), (t.style = U(n)));
      }
      const s = ue(e)
        ? 1
        : ((e) => e.__isSuspense)(e)
          ? 128
          : ((e) => e.__isTeleport)(e)
            ? 64
            : de(e)
              ? 4
              : ce(e)
                ? 2
                : 0;
      return Nr(e, t, n, r, l, s, i, !0);
    };
    function Dr(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const { props: r, ref: l, patchFlag: i, children: o } = e,
        s = t
          ? (function () {
              const e = {};
              for (let t = 0; t < arguments.length; t++) {
                const n =
                  t < 0 || arguments.length <= t ? void 0 : arguments[t];
                for (const t in n)
                  if ("class" === t)
                    e.class !== n.class && (e.class = V([e.class, n.class]));
                  else if ("style" === t) e.style = U([e.style, n.style]);
                  else if (Y(t)) {
                    const r = e[t],
                      l = n[t];
                    !l ||
                      r === l ||
                      (ie(r) && r.includes(l)) ||
                      (e[t] = r ? [].concat(r, l) : l);
                  } else "" !== t && (e[t] = n[t]);
              }
              return e;
            })(r || {}, t)
          : r;
      return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: s,
        key: s && Mr(s),
        ref:
          t && t.ref
            ? n && l
              ? ie(l)
                ? l.concat(Fr(t))
                : [l, Fr(t)]
              : Fr(t)
            : l,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== _r ? (-1 === i ? 16 : 16 | i) : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Dr(e.ssContent),
        ssFallback: e.ssFallback && Dr(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
      };
    }
    function Br() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return Vr($r, null, e, t);
    }
    function Hr() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return t ? (Ar(), jr(Cr, null, e)) : Vr(Cr, null, e);
    }
    function Wr(e) {
      return null == e || "boolean" == typeof e
        ? Vr(Cr)
        : ie(e)
          ? Vr(_r, null, e.slice())
          : "object" == typeof e
            ? qr(e)
            : Vr($r, null, String(e));
    }
    function qr(e) {
      return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : Dr(e);
    }
    function Zr(e, t) {
      let n = 0;
      const { shapeFlag: r } = e;
      if (null == t) t = null;
      else if (ie(t)) n = 16;
      else if ("object" == typeof t) {
        if (65 & r) {
          const n = t.default;
          return void (
            n && (n._c && (n._d = !1), Zr(e, n()), n._c && (n._d = !0))
          );
        }
        {
          n = 32;
          const r = t._;
          r || Pr in t
            ? 3 === r &&
              En &&
              (1 === En.slots._
                ? (t._ = 1)
                : ((t._ = 2), (e.patchFlag |= 1024)))
            : (t._ctx = En);
        }
      } else
        ce(t)
          ? ((t = { default: t, _ctx: En }), (n = 32))
          : ((t = String(t)), 64 & r ? ((n = 16), (t = [Br(t)])) : (n = 8));
      (e.children = t), (e.shapeFlag |= n);
    }
    function Qr(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      ln(e, t, 7, [n, r]);
    }
    const Kr = gr();
    let Gr = 0,
      Jr = null;
    const Xr = (e) => {
        (Jr = e), e.scope.on();
      },
      Yr = () => {
        Jr && Jr.scope.off(), (Jr = null);
      };
    function el(e) {
      return 4 & e.vnode.shapeFlag;
    }
    let tl = !1;
    function nl(e, t, n) {
      ce(t)
        ? e.type.__ssrInlineRender
          ? (e.ssrRender = t)
          : (e.render = t)
        : de(t) && (e.setupState = en(t)),
        rl(e, n);
    }
    function rl(e, t, n) {
      const r = e.type;
      e.render || (e.render = r.render || G);
    }
    function ll(e) {
      if (e.exposed)
        return (
          e.exposeProxy ||
          (e.exposeProxy = new Proxy(en(Dt(e.exposed)), {
            get: (t, n) => (n in t ? t[n] : n in Yn ? Yn[n](e) : void 0),
            has: (e, t) => t in e || t in Yn,
          }))
        );
    }
    const il = (e, t) =>
      (function (e, t) {
        let n,
          r,
          l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const i = ce(e);
        return (
          i ? ((n = e), (r = G)) : ((n = e.get), (r = e.set)),
          new nn(n, r, i || !r, l)
        );
      })(e, 0, tl);
    function ol(e, t, n) {
      const r = arguments.length;
      return 2 === r
        ? de(t) && !ie(t)
          ? Tr(t)
            ? Vr(e, null, [t])
            : Vr(e, t)
          : Vr(e, null, t)
        : (r > 3
            ? (n = Array.prototype.slice.call(arguments, 2))
            : 3 === r && Tr(n) && (n = [n]),
          Vr(e, t, n));
    }
    const sl = Symbol(""),
      al = () => jn(sl),
      cl = "3.2.45",
      ul = "undefined" != typeof document ? document : null,
      pl = ul && ul.createElement("template"),
      dl = {
        insert: (e, t, n) => {
          t.insertBefore(e, n || null);
        },
        remove: (e) => {
          const t = e.parentNode;
          t && t.removeChild(e);
        },
        createElement: (e, t, n, r) => {
          const l = t
            ? ul.createElementNS("http://www.w3.org/2000/svg", e)
            : ul.createElement(e, n ? { is: n } : void 0);
          return (
            "select" === e &&
              r &&
              null != r.multiple &&
              l.setAttribute("multiple", r.multiple),
            l
          );
        },
        createText: (e) => ul.createTextNode(e),
        createComment: (e) => ul.createComment(e),
        setText: (e, t) => {
          e.nodeValue = t;
        },
        setElementText: (e, t) => {
          e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => ul.querySelector(e),
        setScopeId(e, t) {
          e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, r, l, i) {
          const o = n ? n.previousSibling : t.lastChild;
          if (l && (l === i || l.nextSibling))
            for (
              ;
              t.insertBefore(l.cloneNode(!0), n),
                l !== i && (l = l.nextSibling);

            );
          else {
            pl.innerHTML = r ? `<svg>${e}</svg>` : e;
            const l = pl.content;
            if (r) {
              const e = l.firstChild;
              for (; e.firstChild; ) l.appendChild(e.firstChild);
              l.removeChild(e);
            }
            t.insertBefore(l, n);
          }
          return [
            o ? o.nextSibling : t.firstChild,
            n ? n.previousSibling : t.lastChild,
          ];
        },
      },
      hl = /\s*!important$/;
    function fl(e, t, n) {
      if (ie(n)) n.forEach((n) => fl(e, t, n));
      else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
      else {
        const r = (function (e, t) {
          const n = ml[t];
          if (n) return n;
          let r = ke(t);
          if ("filter" !== r && r in e) return (ml[t] = r);
          r = $e(r);
          for (let n = 0; n < gl.length; n++) {
            const l = gl[n] + r;
            if (l in e) return (ml[t] = l);
          }
          return t;
        })(e, t);
        hl.test(n)
          ? e.setProperty(_e(r), n.replace(hl, ""), "important")
          : (e[r] = n);
      }
    }
    const gl = ["Webkit", "Moz", "ms"],
      ml = {},
      vl = "http://www.w3.org/1999/xlink";
    function yl(e, t, n, r) {
      e.addEventListener(t, n, r);
    }
    function bl(e, t, n, r) {
      let l =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const i = e._vei || (e._vei = {}),
        o = i[t];
      if (r && o) o.value = r;
      else {
        const [n, s] = (function (e) {
          let t;
          if (wl.test(e)) {
            let n;
            for (t = {}; (n = e.match(wl)); )
              (e = e.slice(0, e.length - n[0].length)),
                (t[n[0].toLowerCase()] = !0);
          }
          return [":" === e[2] ? e.slice(3) : _e(e.slice(2)), t];
        })(t);
        if (r) {
          const o = (i[t] = (function (e, t) {
            const n = (e) => {
              if (e._vts) {
                if (e._vts <= n.attached) return;
              } else e._vts = Date.now();
              ln(
                (function (e, t) {
                  if (ie(t)) {
                    const n = e.stopImmediatePropagation;
                    return (
                      (e.stopImmediatePropagation = () => {
                        n.call(e), (e._stopped = !0);
                      }),
                      t.map((e) => (t) => !t._stopped && e && e(t))
                    );
                  }
                  return t;
                })(e, n.value),
                t,
                5,
                [e],
              );
            };
            return (
              (n.value = e),
              (n.attached = kl || (xl.then(() => (kl = 0)), (kl = Date.now()))),
              n
            );
          })(r, l));
          yl(e, n, o, s);
        } else
          o &&
            ((function (e, t, n, r) {
              e.removeEventListener(t, n, r);
            })(e, n, o, s),
            (i[t] = void 0));
      }
    }
    const wl = /(?:Once|Passive|Capture)$/;
    let kl = 0;
    const xl = Promise.resolve(),
      _l = /^on[a-z]/,
      $l = (e) => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ie(t) ? (e) => Ee(t, e) : t;
      };
    function Cl(e) {
      e.target.composing = !0;
    }
    function Sl(e) {
      const t = e.target;
      t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
    }
    const El = {
        created(e, t, n) {
          let {
            modifiers: { lazy: r, trim: l, number: i },
          } = t;
          e._assign = $l(n);
          const o = i || (n.props && "number" === n.props.type);
          yl(e, r ? "change" : "input", (t) => {
            if (t.target.composing) return;
            let n = e.value;
            l && (n = n.trim()), o && (n = Ae(n)), e._assign(n);
          }),
            l &&
              yl(e, "change", () => {
                e.value = e.value.trim();
              }),
            r ||
              (yl(e, "compositionstart", Cl),
              yl(e, "compositionend", Sl),
              yl(e, "change", Sl));
        },
        mounted(e, t) {
          let { value: n } = t;
          e.value = null == n ? "" : n;
        },
        beforeUpdate(e, t, n) {
          let {
            value: r,
            modifiers: { lazy: l, trim: i, number: o },
          } = t;
          if (((e._assign = $l(n)), e.composing)) return;
          if (document.activeElement === e && "range" !== e.type) {
            if (l) return;
            if (i && e.value.trim() === r) return;
            if ((o || "number" === e.type) && Ae(e.value) === r) return;
          }
          const s = null == r ? "" : r;
          e.value !== s && (e.value = s);
        },
      },
      Rl = {
        deep: !0,
        created(e, t, n) {
          (e._assign = $l(n)),
            yl(e, "change", () => {
              const t = e._modelValue,
                n = Ol(e),
                r = e.checked,
                l = e._assign;
              if (ie(t)) {
                const e = W(t, n),
                  i = -1 !== e;
                if (r && !i) l(t.concat(n));
                else if (!r && i) {
                  const n = [...t];
                  n.splice(e, 1), l(n);
                }
              } else if (se(t)) {
                const e = new Set(t);
                r ? e.add(n) : e.delete(n), l(e);
              } else l(jl(e, r));
            });
        },
        mounted: Al,
        beforeUpdate(e, t, n) {
          (e._assign = $l(n)), Al(e, t, n);
        },
      };
    function Al(e, t, n) {
      let { value: r, oldValue: l } = t;
      (e._modelValue = r),
        ie(r)
          ? (e.checked = W(r, n.props.value) > -1)
          : se(r)
            ? (e.checked = r.has(n.props.value))
            : r !== l && (e.checked = H(r, jl(e, !0)));
    }
    const Il = {
        created(e, t, n) {
          let { value: r } = t;
          (e.checked = H(r, n.props.value)),
            (e._assign = $l(n)),
            yl(e, "change", () => {
              e._assign(Ol(e));
            });
        },
        beforeUpdate(e, t, n) {
          let { value: r, oldValue: l } = t;
          (e._assign = $l(n)), r !== l && (e.checked = H(r, n.props.value));
        },
      },
      Ll = {
        deep: !0,
        created(e, t, n) {
          let {
            value: r,
            modifiers: { number: l },
          } = t;
          const i = se(r);
          yl(e, "change", () => {
            const t = Array.prototype.filter
              .call(e.options, (e) => e.selected)
              .map((e) => (l ? Ae(Ol(e)) : Ol(e)));
            e._assign(e.multiple ? (i ? new Set(t) : t) : t[0]);
          }),
            (e._assign = $l(n));
        },
        mounted(e, t) {
          let { value: n } = t;
          zl(e, n);
        },
        beforeUpdate(e, t, n) {
          e._assign = $l(n);
        },
        updated(e, t) {
          let { value: n } = t;
          zl(e, n);
        },
      };
    function zl(e, t) {
      const n = e.multiple;
      if (!n || ie(t) || se(t)) {
        for (let r = 0, l = e.options.length; r < l; r++) {
          const l = e.options[r],
            i = Ol(l);
          if (n) ie(t) ? (l.selected = W(t, i) > -1) : (l.selected = t.has(i));
          else if (H(Ol(l), t))
            return void (e.selectedIndex !== r && (e.selectedIndex = r));
        }
        n || -1 === e.selectedIndex || (e.selectedIndex = -1);
      }
    }
    function Ol(e) {
      return "_value" in e ? e._value : e.value;
    }
    function jl(e, t) {
      const n = t ? "_trueValue" : "_falseValue";
      return n in e ? e[n] : t;
    }
    const Tl = {
      created(e, t, n) {
        Ul(e, t, n, null, "created");
      },
      mounted(e, t, n) {
        Ul(e, t, n, null, "mounted");
      },
      beforeUpdate(e, t, n, r) {
        Ul(e, t, n, r, "beforeUpdate");
      },
      updated(e, t, n, r) {
        Ul(e, t, n, r, "updated");
      },
    };
    function Ul(e, t, n, r, l) {
      const i = (function (e, t) {
        switch (e) {
          case "SELECT":
            return Ll;
          case "TEXTAREA":
            return El;
          default:
            switch (t) {
              case "checkbox":
                return Rl;
              case "radio":
                return Il;
              default:
                return El;
            }
        }
      })(e.tagName, n.props && n.props.type)[l];
      i && i(e, t, n, r);
    }
    const Pl = {
      beforeMount(e, t, n) {
        let { value: r } = t,
          { transition: l } = n;
        (e._vod = "none" === e.style.display ? "" : e.style.display),
          l && r ? l.beforeEnter(e) : Ml(e, r);
      },
      mounted(e, t, n) {
        let { value: r } = t,
          { transition: l } = n;
        l && r && l.enter(e);
      },
      updated(e, t, n) {
        let { value: r, oldValue: l } = t,
          { transition: i } = n;
        !r != !l &&
          (i
            ? r
              ? (i.beforeEnter(e), Ml(e, !0), i.enter(e))
              : i.leave(e, () => {
                  Ml(e, !1);
                })
            : Ml(e, r));
      },
      beforeUnmount(e, t) {
        let { value: n } = t;
        Ml(e, n);
      },
    };
    function Ml(e, t) {
      e.style.display = t ? e._vod : "none";
    }
    const Fl = te(
      {
        patchProp: function (e, t, n, r) {
          let l =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = arguments.length > 5 ? arguments[5] : void 0,
            o = arguments.length > 6 ? arguments[6] : void 0,
            s = arguments.length > 7 ? arguments[7] : void 0,
            a = arguments.length > 8 ? arguments[8] : void 0;
          "class" === t
            ? (function (e, t, n) {
                const r = e._vtc;
                r && (t = (t ? [t, ...r] : [...r]).join(" ")),
                  null == t
                    ? e.removeAttribute("class")
                    : n
                      ? e.setAttribute("class", t)
                      : (e.className = t);
              })(e, r, l)
            : "style" === t
              ? (function (e, t, n) {
                  const r = e.style,
                    l = ue(n);
                  if (n && !l) {
                    for (const e in n) fl(r, e, n[e]);
                    if (t && !ue(t))
                      for (const e in t) null == n[e] && fl(r, e, "");
                  } else {
                    const i = r.display;
                    l
                      ? t !== n && (r.cssText = n)
                      : t && e.removeAttribute("style"),
                      "_vod" in e && (r.display = i);
                  }
                })(e, n, r)
              : Y(t)
                ? ee(t) || bl(e, t, 0, r, o)
                : (
                      "." === t[0]
                        ? ((t = t.slice(1)), 1)
                        : "^" === t[0]
                          ? ((t = t.slice(1)), 0)
                          : (function (e, t, n, r) {
                              return r
                                ? "innerHTML" === t ||
                                    "textContent" === t ||
                                    !!(t in e && _l.test(t) && ce(n))
                                : "spellcheck" !== t &&
                                    "draggable" !== t &&
                                    "translate" !== t &&
                                    "form" !== t &&
                                    ("list" !== t || "INPUT" !== e.tagName) &&
                                    ("type" !== t ||
                                      "TEXTAREA" !== e.tagName) &&
                                    (!_l.test(t) || !ue(n)) &&
                                    t in e;
                            })(e, t, r, l)
                    )
                  ? (function (e, t, n, r, l, i, o) {
                      if ("innerHTML" === t || "textContent" === t)
                        return (
                          r && o(r, l, i), void (e[t] = null == n ? "" : n)
                        );
                      if (
                        "value" === t &&
                        "PROGRESS" !== e.tagName &&
                        !e.tagName.includes("-")
                      ) {
                        e._value = n;
                        const r = null == n ? "" : n;
                        return (
                          (e.value === r && "OPTION" !== e.tagName) ||
                            (e.value = r),
                          void (null == n && e.removeAttribute(t))
                        );
                      }
                      let s = !1;
                      if ("" === n || null == n) {
                        const r = typeof e[t];
                        "boolean" === r
                          ? (n = B(n))
                          : null == n && "string" === r
                            ? ((n = ""), (s = !0))
                            : "number" === r && ((n = 0), (s = !0));
                      }
                      try {
                        e[t] = n;
                      } catch (e) {}
                      s && e.removeAttribute(t);
                    })(e, t, r, i, o, s, a)
                  : ("true-value" === t
                      ? (e._trueValue = r)
                      : "false-value" === t && (e._falseValue = r),
                    (function (e, t, n, r, l) {
                      if (r && t.startsWith("xlink:"))
                        null == n
                          ? e.removeAttributeNS(vl, t.slice(6, t.length))
                          : e.setAttributeNS(vl, t, n);
                      else {
                        const r = D(t);
                        null == n || (r && !B(n))
                          ? e.removeAttribute(t)
                          : e.setAttribute(t, r ? "" : n);
                      }
                    })(e, t, r, l));
        },
      },
      dl,
    );
    let Nl;
    const Vl = "undefined" != typeof window,
      Dl = (e) => "function" == typeof e,
      Bl = () => {};
    function Hl(e) {
      return "function" == typeof e ? e() : Xt(e);
    }
    function Wl(e, t) {
      return function () {
        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
          r[l] = arguments[l];
        return new Promise((n, l) => {
          Promise.resolve(
            e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }),
          )
            .then(n)
            .catch(l);
        });
      };
    }
    const ql = (e) => e();
    function Zl(e) {
      return (
        !!Le &&
        ((function (e) {
          Le && Le.cleanups.push(e);
        })(e),
        !0)
      );
    }
    function Ql(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      Jr || En ? Bn(e) : t ? e() : mn(e);
    }
    var Kl = Object.getOwnPropertySymbols,
      Gl = Object.prototype.hasOwnProperty,
      Jl = Object.prototype.propertyIsEnumerable;
    function Xl(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const r = n,
        { eventFilter: l = ql } = r,
        i = ((e, t) => {
          var n = {};
          for (var r in e) Gl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && Kl)
            for (var r of Kl(e))
              t.indexOf(r) < 0 && Jl.call(e, r) && (n[r] = e[r]);
          return n;
        })(r, ["eventFilter"]);
      return Pn(e, Wl(l, t), i);
    }
    var Yl = Object.defineProperty,
      ei = Object.defineProperties,
      ti = Object.getOwnPropertyDescriptors,
      ni = Object.getOwnPropertySymbols,
      ri = Object.prototype.hasOwnProperty,
      li = Object.prototype.propertyIsEnumerable,
      ii = (e, t, n) =>
        t in e
          ? Yl(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
    function oi(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const r = n,
        { eventFilter: l } = r,
        i = ((e, t) => {
          var n = {};
          for (var r in e) ri.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && ni)
            for (var r of ni(e))
              t.indexOf(r) < 0 && li.call(e, r) && (n[r] = e[r]);
          return n;
        })(r, ["eventFilter"]),
        {
          eventFilter: o,
          pause: s,
          resume: a,
          isActive: c,
        } = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ql;
          const t = Qt(!0);
          return {
            isActive: t,
            pause: function () {
              t.value = !1;
            },
            resume: function () {
              t.value = !0;
            },
            eventFilter: function () {
              t.value && e(...arguments);
            },
          };
        })(l),
        u = Xl(
          e,
          t,
          ((e, t) => ei(e, ti(t)))(
            ((e, t) => {
              for (var n in t || (t = {})) ri.call(t, n) && ii(e, n, t[n]);
              if (ni) for (var n of ni(t)) li.call(t, n) && ii(e, n, t[n]);
              return e;
            })({}, i),
            { eventFilter: o },
          ),
        );
      return { stop: u, pause: s, resume: a, isActive: c };
    }
    const si = Vl ? window : void 0,
      ai = Vl ? window.document : void 0;
    function ci() {
      let e, t, n, r;
      for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
        i[o] = arguments[o];
      if (
        ("string" == typeof i[0] || Array.isArray(i[0])
          ? (([t, n, r] = i), (e = si))
          : ([e, t, n, r] = i),
        !e)
      )
        return Bl;
      Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
      const s = [],
        a = () => {
          s.forEach((e) => e()), (s.length = 0);
        },
        c = Pn(
          () =>
            (function (e) {
              var t;
              const n = Hl(e);
              return null != (t = null == n ? void 0 : n.$el) ? t : n;
            })(e),
          (e) => {
            a(),
              e &&
                s.push(
                  ...t.flatMap((t) =>
                    n.map((n) =>
                      ((e, t, n) => (
                        e.addEventListener(t, n, r),
                        () => e.removeEventListener(t, n, r)
                      ))(e, t, n),
                    ),
                  ),
                );
          },
          { immediate: !0, flush: "post" },
        ),
        u = () => {
          c(), a();
        };
      return Zl(u), u;
    }
    Vl && window.navigator, Vl && window.location;
    const ui =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
                ? self
                : {},
      pi = "__vueuse_ssr_handlers__";
    ui[pi] = ui[pi] || {};
    const di = ui[pi];
    var hi = Object.defineProperty,
      fi = Object.getOwnPropertySymbols,
      gi = Object.prototype.hasOwnProperty,
      mi = Object.prototype.propertyIsEnumerable,
      vi = (e, t, n) =>
        t in e
          ? hi(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      yi = (e, t) => {
        for (var n in t || (t = {})) gi.call(t, n) && vi(e, n, t[n]);
        if (fi) for (var n of fi(t)) mi.call(t, n) && vi(e, n, t[n]);
        return e;
      };
    const bi = {
      boolean: { read: (e) => "true" === e, write: (e) => String(e) },
      object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
      number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
      any: { read: (e) => e, write: (e) => String(e) },
      string: { read: (e) => e, write: (e) => String(e) },
      map: {
        read: (e) => new Map(JSON.parse(e)),
        write: (e) => JSON.stringify(Array.from(e.entries())),
      },
      set: {
        read: (e) => new Set(JSON.parse(e)),
        write: (e) => JSON.stringify(Array.from(e)),
      },
      date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
    };
    function wi(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var l;
      const {
          flush: i = "pre",
          deep: o = !0,
          listenToStorageChanges: s = !0,
          writeDefaults: a = !0,
          mergeDefaults: c = !1,
          shallow: u,
          window: p = si,
          eventFilter: d,
          onError: h = (e) => {
            console.error(e);
          },
        } = r,
        f = (u ? Kt : Qt)(t);
      if (!n)
        try {
          n = (
            di.getDefaultStorage ||
            (() => {
              var e;
              return null == (e = si) ? void 0 : e.localStorage;
            })
          )();
        } catch (e) {
          h(e);
        }
      if (!n) return f;
      const g = Hl(t),
        m = (function (e) {
          return null == e
            ? "any"
            : e instanceof Set
              ? "set"
              : e instanceof Map
                ? "map"
                : e instanceof Date
                  ? "date"
                  : "boolean" == typeof e
                    ? "boolean"
                    : "string" == typeof e
                      ? "string"
                      : "object" == typeof e
                        ? "object"
                        : Number.isNaN(e)
                          ? "any"
                          : "number";
        })(g),
        v = null != (l = r.serializer) ? l : bi[m],
        { pause: y, resume: b } = oi(
          f,
          () =>
            (function (t) {
              try {
                if (null == t) n.removeItem(e);
                else {
                  const r = v.write(t),
                    l = n.getItem(e);
                  l !== r &&
                    (n.setItem(e, r),
                    p &&
                      (null == p ||
                        p.dispatchEvent(
                          new StorageEvent("storage", {
                            key: e,
                            oldValue: l,
                            newValue: r,
                            storageArea: n,
                          }),
                        )));
                }
              } catch (e) {
                h(e);
              }
            })(f.value),
          { flush: i, deep: o, eventFilter: d },
        );
      return p && s && ci(p, "storage", w), w(), f;
      function w(t) {
        if (!t || t.storageArea === n)
          if (t && null == t.key) f.value = g;
          else if (!t || t.key === e) {
            y();
            try {
              f.value = (function (t) {
                const r = t ? t.newValue : n.getItem(e);
                if (null == r)
                  return a && null !== g && n.setItem(e, v.write(g)), g;
                if (!t && c) {
                  const e = v.read(r);
                  return Dl(c)
                    ? c(e, g)
                    : "object" !== m || Array.isArray(e)
                      ? e
                      : yi(yi({}, g), e);
                }
                return "string" != typeof r ? r : v.read(r);
              })(t);
            } catch (e) {
              h(e);
            } finally {
              t ? mn(b) : b();
            }
          }
      }
    }
    var ki,
      xi,
      _i = Object.defineProperty,
      $i = Object.getOwnPropertySymbols,
      Ci = Object.prototype.hasOwnProperty,
      Si = Object.prototype.propertyIsEnumerable,
      Ei = (e, t, n) =>
        t in e
          ? _i(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
    ((xi = ki || (ki = {})).UP = "UP"),
      (xi.RIGHT = "RIGHT"),
      (xi.DOWN = "DOWN"),
      (xi.LEFT = "LEFT"),
      (xi.NONE = "NONE");
    let Ri = 0;
    var Ai = Object.defineProperty,
      Ii = Object.getOwnPropertySymbols,
      Li = Object.prototype.hasOwnProperty,
      zi = Object.prototype.propertyIsEnumerable,
      Oi = (e, t, n) =>
        t in e
          ? Ai(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
    ((e, t) => {
      for (var n in t || (t = {})) Li.call(t, n) && Oi(e, n, t[n]);
      if (Ii) for (var n of Ii(t)) zi.call(t, n) && Oi(e, n, t[n]);
    })(
      {
        linear: function (e) {
          return e;
        },
      },
      {
        easeInSine: [0.12, 0, 0.39, 0],
        easeOutSine: [0.61, 1, 0.88, 1],
        easeInOutSine: [0.37, 0, 0.63, 1],
        easeInQuad: [0.11, 0, 0.5, 0],
        easeOutQuad: [0.5, 1, 0.89, 1],
        easeInOutQuad: [0.45, 0, 0.55, 1],
        easeInCubic: [0.32, 0, 0.67, 0],
        easeOutCubic: [0.33, 1, 0.68, 1],
        easeInOutCubic: [0.65, 0, 0.35, 1],
        easeInQuart: [0.5, 0, 0.75, 0],
        easeOutQuart: [0.25, 1, 0.5, 1],
        easeInOutQuart: [0.76, 0, 0.24, 1],
        easeInQuint: [0.64, 0, 0.78, 0],
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1],
        easeInExpo: [0.7, 0, 0.84, 0],
        easeOutExpo: [0.16, 1, 0.3, 1],
        easeInOutExpo: [0.87, 0, 0.13, 1],
        easeInCirc: [0.55, 0, 1, 0.45],
        easeOutCirc: [0, 0.55, 0.45, 1],
        easeInOutCirc: [0.85, 0, 0.15, 1],
        easeInBack: [0.36, 0, 0.66, -0.56],
        easeOutBack: [0.34, 1.56, 0.64, 1],
        easeInOutBack: [0.68, -0.6, 0.32, 1.6],
      },
    );
    const ji = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        return `${t ? `${t}/` : ""}${n}${e}${r ? `.${r}` : ""}`;
      },
      Ti = (e) => {
        "AbortError" !== e.name && console.error(e.message);
      },
      Ui = (e) =>
        e instanceof HTMLElement
          ? e
          : "string" == typeof e
            ? document.querySelector(e)
            : null,
      Pi = (e) => e.type.includes("image"),
      Mi = (e) => {
        const t = Array.from(e).find(Pi);
        return t ? t.getAsFile() : null;
      };
    let Fi = {
      async: !1,
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
    const Ni = /[&<>"']/,
      Vi = new RegExp(Ni.source, "g"),
      Di = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
      Bi = new RegExp(Di.source, "g"),
      Hi = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      Wi = (e) => Hi[e];
    function qi(e, t) {
      if (t) {
        if (Ni.test(e)) return e.replace(Vi, Wi);
      } else if (Di.test(e)) return e.replace(Bi, Wi);
      return e;
    }
    const Zi = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function Qi(e) {
      return e.replace(Zi, (e, t) =>
        "colon" === (t = t.toLowerCase())
          ? ":"
          : "#" === t.charAt(0)
            ? "x" === t.charAt(1)
              ? String.fromCharCode(parseInt(t.substring(2), 16))
              : String.fromCharCode(+t.substring(1))
            : "",
      );
    }
    const Ki = /(^|[^\[])\^/g;
    function Gi(e, t) {
      (e = "string" == typeof e ? e : e.source), (t = t || "");
      const n = {
        replace: (t, r) => (
          (r = (r = r.source || r).replace(Ki, "$1")), (e = e.replace(t, r)), n
        ),
        getRegex: () => new RegExp(e, t),
      };
      return n;
    }
    const Ji = /[^\w:]/g,
      Xi = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function Yi(e, t, n) {
      if (e) {
        let t;
        try {
          t = decodeURIComponent(Qi(n)).replace(Ji, "").toLowerCase();
        } catch (e) {
          return null;
        }
        if (
          0 === t.indexOf("javascript:") ||
          0 === t.indexOf("vbscript:") ||
          0 === t.indexOf("data:")
        )
          return null;
      }
      t &&
        !Xi.test(n) &&
        (n = (function (e, t) {
          eo[" " + e] ||
            (to.test(e)
              ? (eo[" " + e] = e + "/")
              : (eo[" " + e] = so(e, "/", !0)));
          const n = -1 === (e = eo[" " + e]).indexOf(":");
          return "//" === t.substring(0, 2)
            ? n
              ? t
              : e.replace(no, "$1") + t
            : "/" === t.charAt(0)
              ? n
                ? t
                : e.replace(ro, "$1") + t
              : e + t;
        })(t, n));
      try {
        n = encodeURI(n).replace(/%25/g, "%");
      } catch (e) {
        return null;
      }
      return n;
    }
    const eo = {},
      to = /^[^:]+:\/*[^/]*$/,
      no = /^([^:]+:)[\s\S]*$/,
      ro = /^([^:]+:\/*[^/]*)[\s\S]*$/,
      lo = { exec: function () {} };
    function io(e) {
      let t,
        n,
        r = 1;
      for (; r < arguments.length; r++)
        for (n in ((t = arguments[r]), t))
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function oo(e, t) {
      const n = e
        .replace(/\|/g, (e, t, n) => {
          let r = !1,
            l = t;
          for (; --l >= 0 && "\\" === n[l]; ) r = !r;
          return r ? "|" : " |";
        })
        .split(/ \|/);
      let r = 0;
      if (
        (n[0].trim() || n.shift(),
        n.length > 0 && !n[n.length - 1].trim() && n.pop(),
        n.length > t)
      )
        n.splice(t);
      else for (; n.length < t; ) n.push("");
      for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
      return n;
    }
    function so(e, t, n) {
      const r = e.length;
      if (0 === r) return "";
      let l = 0;
      for (; l < r; ) {
        const i = e.charAt(r - l - 1);
        if (i !== t || n) {
          if (i === t || !n) break;
          l++;
        } else l++;
      }
      return e.slice(0, r - l);
    }
    function ao(e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options",
        );
    }
    function co(e, t) {
      if (t < 1) return "";
      let n = "";
      for (; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
      return n + e;
    }
    function uo(e, t, n, r) {
      const l = t.href,
        i = t.title ? qi(t.title) : null,
        o = e[1].replace(/\\([\[\]])/g, "$1");
      if ("!" !== e[0].charAt(0)) {
        r.state.inLink = !0;
        const e = {
          type: "link",
          raw: n,
          href: l,
          title: i,
          text: o,
          tokens: r.inlineTokens(o),
        };
        return (r.state.inLink = !1), e;
      }
      return { type: "image", raw: n, href: l, title: i, text: qi(o) };
    }
    class po {
      constructor(e) {
        this.options = e || Fi;
      }
      space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return { type: "space", raw: t[0] };
      }
      code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
          const e = t[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: t[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic ? e : so(e, "\n"),
          };
        }
      }
      fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
          const e = t[0],
            n = (function (e, t) {
              const n = e.match(/^(\s+)(?:```)/);
              if (null === n) return t;
              const r = n[1];
              return t
                .split("\n")
                .map((e) => {
                  const t = e.match(/^\s+/);
                  if (null === t) return e;
                  const [n] = t;
                  return n.length >= r.length ? e.slice(r.length) : e;
                })
                .join("\n");
            })(e, t[3] || "");
          return {
            type: "code",
            raw: e,
            lang: t[2]
              ? t[2].trim().replace(this.rules.inline._escapes, "$1")
              : t[2],
            text: n,
          };
        }
      }
      heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
          let e = t[2].trim();
          if (/#$/.test(e)) {
            const t = so(e, "#");
            this.options.pedantic
              ? (e = t.trim())
              : (t && !/ $/.test(t)) || (e = t.trim());
          }
          return {
            type: "heading",
            raw: t[0],
            depth: t[1].length,
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t) return { type: "hr", raw: t[0] };
      }
      blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
          const e = t[0].replace(/^ *>[ \t]?/gm, ""),
            n = this.lexer.state.top;
          this.lexer.state.top = !0;
          const r = this.lexer.blockTokens(e);
          return (
            (this.lexer.state.top = n),
            { type: "blockquote", raw: t[0], tokens: r, text: e }
          );
        }
      }
      list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
          let n,
            r,
            l,
            i,
            o,
            s,
            a,
            c,
            u,
            p,
            d,
            h,
            f = t[1].trim();
          const g = f.length > 1,
            m = {
              type: "list",
              raw: "",
              ordered: g,
              start: g ? +f.slice(0, -1) : "",
              loose: !1,
              items: [],
            };
          (f = g ? `\\d{1,9}\\${f.slice(-1)}` : `\\${f}`),
            this.options.pedantic && (f = g ? f : "[*+-]");
          const v = new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);
          for (
            ;
            e && ((h = !1), (t = v.exec(e))) && !this.rules.block.hr.test(e);

          ) {
            if (
              ((n = t[0]),
              (e = e.substring(n.length)),
              (c = t[2]
                .split("\n", 1)[0]
                .replace(/^\t+/, (e) => " ".repeat(3 * e.length))),
              (u = e.split("\n", 1)[0]),
              this.options.pedantic
                ? ((i = 2), (d = c.trimLeft()))
                : ((i = t[2].search(/[^ ]/)),
                  (i = i > 4 ? 1 : i),
                  (d = c.slice(i)),
                  (i += t[1].length)),
              (s = !1),
              !c &&
                /^ *$/.test(u) &&
                ((n += u + "\n"), (e = e.substring(u.length + 1)), (h = !0)),
              !h)
            ) {
              const t = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    i - 1,
                  )}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`,
                ),
                r = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    i - 1,
                  )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
                ),
                l = new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`),
                o = new RegExp(`^ {0,${Math.min(3, i - 1)}}#`);
              for (
                ;
                e &&
                ((p = e.split("\n", 1)[0]),
                (u = p),
                this.options.pedantic &&
                  (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                !l.test(u)) &&
                !o.test(u) &&
                !t.test(u) &&
                !r.test(e);

              ) {
                if (u.search(/[^ ]/) >= i || !u.trim()) d += "\n" + u.slice(i);
                else {
                  if (s) break;
                  if (c.search(/[^ ]/) >= 4) break;
                  if (l.test(c)) break;
                  if (o.test(c)) break;
                  if (r.test(c)) break;
                  d += "\n" + u;
                }
                s || u.trim() || (s = !0),
                  (n += p + "\n"),
                  (e = e.substring(p.length + 1)),
                  (c = u.slice(i));
              }
            }
            m.loose || (a ? (m.loose = !0) : /\n *\n *$/.test(n) && (a = !0)),
              this.options.gfm &&
                ((r = /^\[[ xX]\] /.exec(d)),
                r &&
                  ((l = "[ ] " !== r[0]), (d = d.replace(/^\[[ xX]\] +/, "")))),
              m.items.push({
                type: "list_item",
                raw: n,
                task: !!r,
                checked: l,
                loose: !1,
                text: d,
              }),
              (m.raw += n);
          }
          (m.items[m.items.length - 1].raw = n.trimRight()),
            (m.items[m.items.length - 1].text = d.trimRight()),
            (m.raw = m.raw.trimRight());
          const y = m.items.length;
          for (o = 0; o < y; o++)
            if (
              ((this.lexer.state.top = !1),
              (m.items[o].tokens = this.lexer.blockTokens(m.items[o].text, [])),
              !m.loose)
            ) {
              const e = m.items[o].tokens.filter((e) => "space" === e.type),
                t = e.length > 0 && e.some((e) => /\n.*\n/.test(e.raw));
              m.loose = t;
            }
          if (m.loose) for (o = 0; o < y; o++) m.items[o].loose = !0;
          return m;
        }
      }
      html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) {
          const e = {
            type: "html",
            raw: t[0],
            pre:
              !this.options.sanitizer &&
              ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
            text: t[0],
          };
          if (this.options.sanitize) {
            const n = this.options.sanitizer
              ? this.options.sanitizer(t[0])
              : qi(t[0]);
            (e.type = "paragraph"),
              (e.text = n),
              (e.tokens = this.lexer.inline(n));
          }
          return e;
        }
      }
      def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
          const e = t[1].toLowerCase().replace(/\s+/g, " "),
            n = t[2]
              ? t[2]
                  .replace(/^<(.*)>$/, "$1")
                  .replace(this.rules.inline._escapes, "$1")
              : "",
            r = t[3]
              ? t[3]
                  .substring(1, t[3].length - 1)
                  .replace(this.rules.inline._escapes, "$1")
              : t[3];
          return { type: "def", tag: e, raw: t[0], href: n, title: r };
        }
      }
      table(e) {
        const t = this.rules.block.table.exec(e);
        if (t) {
          const e = {
            type: "table",
            header: oo(t[1]).map((e) => ({ text: e })),
            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows:
              t[3] && t[3].trim()
                ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                : [],
          };
          if (e.header.length === e.align.length) {
            e.raw = t[0];
            let n,
              r,
              l,
              i,
              o = e.align.length;
            for (n = 0; n < o; n++)
              /^ *-+: *$/.test(e.align[n])
                ? (e.align[n] = "right")
                : /^ *:-+: *$/.test(e.align[n])
                  ? (e.align[n] = "center")
                  : /^ *:-+ *$/.test(e.align[n])
                    ? (e.align[n] = "left")
                    : (e.align[n] = null);
            for (o = e.rows.length, n = 0; n < o; n++)
              e.rows[n] = oo(e.rows[n], e.header.length).map((e) => ({
                text: e,
              }));
            for (o = e.header.length, r = 0; r < o; r++)
              e.header[r].tokens = this.lexer.inline(e.header[r].text);
            for (o = e.rows.length, r = 0; r < o; r++)
              for (i = e.rows[r], l = 0; l < i.length; l++)
                i[l].tokens = this.lexer.inline(i[l].text);
            return e;
          }
        }
      }
      lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t)
          return {
            type: "heading",
            raw: t[0],
            depth: "=" === t[2].charAt(0) ? 1 : 2,
            text: t[1],
            tokens: this.lexer.inline(t[1]),
          };
      }
      paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
          const e =
            "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
          return {
            type: "paragraph",
            raw: t[0],
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      text(e) {
        const t = this.rules.block.text.exec(e);
        if (t)
          return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0]),
          };
      }
      escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t) return { type: "escape", raw: t[0], text: qi(t[1]) };
      }
      tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t)
          return (
            !this.lexer.state.inLink && /^<a /i.test(t[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink &&
                /^<\/a>/i.test(t[0]) &&
                (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock &&
            /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: this.options.sanitize ? "text" : "html",
              raw: t[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : qi(t[0])
                : t[0],
            }
          );
      }
      link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
          const e = t[2].trim();
          if (!this.options.pedantic && /^</.test(e)) {
            if (!/>$/.test(e)) return;
            const t = so(e.slice(0, -1), "\\");
            if ((e.length - t.length) % 2 == 0) return;
          } else {
            const e = (function (e, t) {
              if (-1 === e.indexOf(t[1])) return -1;
              const n = e.length;
              let r = 0,
                l = 0;
              for (; l < n; l++)
                if ("\\" === e[l]) l++;
                else if (e[l] === t[0]) r++;
                else if (e[l] === t[1] && (r--, r < 0)) return l;
              return -1;
            })(t[2], "()");
            if (e > -1) {
              const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
              (t[2] = t[2].substring(0, e)),
                (t[0] = t[0].substring(0, n).trim()),
                (t[3] = "");
            }
          }
          let n = t[2],
            r = "";
          if (this.options.pedantic) {
            const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
            e && ((n = e[1]), (r = e[3]));
          } else r = t[3] ? t[3].slice(1, -1) : "";
          return (
            (n = n.trim()),
            /^</.test(n) &&
              (n =
                this.options.pedantic && !/>$/.test(e)
                  ? n.slice(1)
                  : n.slice(1, -1)),
            uo(
              t,
              {
                href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
                title: r ? r.replace(this.rules.inline._escapes, "$1") : r,
              },
              t[0],
              this.lexer,
            )
          );
        }
      }
      reflink(e, t) {
        let n;
        if (
          (n = this.rules.inline.reflink.exec(e)) ||
          (n = this.rules.inline.nolink.exec(e))
        ) {
          let e = (n[2] || n[1]).replace(/\s+/g, " ");
          if (((e = t[e.toLowerCase()]), !e)) {
            const e = n[0].charAt(0);
            return { type: "text", raw: e, text: e };
          }
          return uo(n, e, n[0], this.lexer);
        }
      }
      emStrong(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = this.rules.inline.emStrong.lDelim.exec(e);
        if (!r) return;
        if (r[3] && n.match(/[\p{L}\p{N}]/u)) return;
        const l = r[1] || r[2] || "";
        if (!l || (l && ("" === n || this.rules.inline.punctuation.exec(n)))) {
          const n = r[0].length - 1;
          let l,
            i,
            o = n,
            s = 0;
          const a =
            "*" === r[0][0]
              ? this.rules.inline.emStrong.rDelimAst
              : this.rules.inline.emStrong.rDelimUnd;
          for (
            a.lastIndex = 0, t = t.slice(-1 * e.length + n);
            null != (r = a.exec(t));

          ) {
            if (((l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !l))
              continue;
            if (((i = l.length), r[3] || r[4])) {
              o += i;
              continue;
            }
            if ((r[5] || r[6]) && n % 3 && !((n + i) % 3)) {
              s += i;
              continue;
            }
            if (((o -= i), o > 0)) continue;
            i = Math.min(i, i + o + s);
            const t = e.slice(0, n + r.index + (r[0].length - l.length) + i);
            if (Math.min(n, i) % 2) {
              const e = t.slice(1, -1);
              return {
                type: "em",
                raw: t,
                text: e,
                tokens: this.lexer.inlineTokens(e),
              };
            }
            const a = t.slice(2, -2);
            return {
              type: "strong",
              raw: t,
              text: a,
              tokens: this.lexer.inlineTokens(a),
            };
          }
        }
      }
      codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
          let e = t[2].replace(/\n/g, " ");
          const n = /[^ ]/.test(e),
            r = /^ /.test(e) && / $/.test(e);
          return (
            n && r && (e = e.substring(1, e.length - 1)),
            (e = qi(e, !0)),
            { type: "codespan", raw: t[0], text: e }
          );
        }
      }
      br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t) return { type: "br", raw: t[0] };
      }
      del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t)
          return {
            type: "del",
            raw: t[0],
            text: t[2],
            tokens: this.lexer.inlineTokens(t[2]),
          };
      }
      autolink(e, t) {
        const n = this.rules.inline.autolink.exec(e);
        if (n) {
          let e, r;
          return (
            "@" === n[2]
              ? ((e = qi(this.options.mangle ? t(n[1]) : n[1])),
                (r = "mailto:" + e))
              : ((e = qi(n[1])), (r = e)),
            {
              type: "link",
              raw: n[0],
              text: e,
              href: r,
              tokens: [{ type: "text", raw: e, text: e }],
            }
          );
        }
      }
      url(e, t) {
        let n;
        if ((n = this.rules.inline.url.exec(e))) {
          let e, r;
          if ("@" === n[2])
            (e = qi(this.options.mangle ? t(n[0]) : n[0])), (r = "mailto:" + e);
          else {
            let t;
            do {
              (t = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
            } while (t !== n[0]);
            (e = qi(n[0])), (r = "www." === n[1] ? "http://" + n[0] : n[0]);
          }
          return {
            type: "link",
            raw: n[0],
            text: e,
            href: r,
            tokens: [{ type: "text", raw: e, text: e }],
          };
        }
      }
      inlineText(e, t) {
        const n = this.rules.inline.text.exec(e);
        if (n) {
          let e;
          return (
            (e = this.lexer.state.inRawBlock
              ? this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(n[0])
                  : qi(n[0])
                : n[0]
              : qi(this.options.smartypants ? t(n[0]) : n[0])),
            { type: "text", raw: n[0], text: e }
          );
        }
      }
    }
    const ho = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: lo,
      lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
    (ho.def = Gi(ho.def)
      .replace("label", ho._label)
      .replace("title", ho._title)
      .getRegex()),
      (ho.bullet = /(?:[*+-]|\d{1,9}[.)])/),
      (ho.listItemStart = Gi(/^( *)(bull) */)
        .replace("bull", ho.bullet)
        .getRegex()),
      (ho.list = Gi(ho.list)
        .replace(/bull/g, ho.bullet)
        .replace(
          "hr",
          "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))",
        )
        .replace("def", "\\n+(?=" + ho.def.source + ")")
        .getRegex()),
      (ho._tag =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
      (ho._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
      (ho.html = Gi(ho.html, "i")
        .replace("comment", ho._comment)
        .replace("tag", ho._tag)
        .replace(
          "attribute",
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
        )
        .getRegex()),
      (ho.paragraph = Gi(ho._paragraph)
        .replace("hr", ho.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace(
          "html",
          "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
        )
        .replace("tag", ho._tag)
        .getRegex()),
      (ho.blockquote = Gi(ho.blockquote)
        .replace("paragraph", ho.paragraph)
        .getRegex()),
      (ho.normal = io({}, ho)),
      (ho.gfm = io({}, ho.normal, {
        table:
          "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
      })),
      (ho.gfm.table = Gi(ho.gfm.table)
        .replace("hr", ho.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("blockquote", " {0,3}>")
        .replace("code", " {4}[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace(
          "html",
          "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
        )
        .replace("tag", ho._tag)
        .getRegex()),
      (ho.gfm.paragraph = Gi(ho._paragraph)
        .replace("hr", ho.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("|lheading", "")
        .replace("table", ho.gfm.table)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace(
          "html",
          "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
        )
        .replace("tag", ho._tag)
        .getRegex()),
      (ho.pedantic = io({}, ho.normal, {
        html: Gi(
          "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
        )
          .replace("comment", ho._comment)
          .replace(
            /tag/g,
            "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: lo,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: Gi(ho.normal._paragraph)
          .replace("hr", ho.hr)
          .replace("heading", " *#{1,6} *[^\n]")
          .replace("lheading", ho.lheading)
          .replace("blockquote", " {0,3}>")
          .replace("|fences", "")
          .replace("|list", "")
          .replace("|html", "")
          .getRegex(),
      }));
    const fo = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: lo,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(ref)\]/,
      nolink: /^!?\[(ref)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst:
          /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
        rDelimUnd:
          /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: lo,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/,
    };
    function go(e) {
      return e
        .replace(/---/g, "—")
        .replace(/--/g, "–")
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
        .replace(/'/g, "’")
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
        .replace(/"/g, "”")
        .replace(/\.{3}/g, "…");
    }
    function mo(e) {
      let t,
        n,
        r = "";
      const l = e.length;
      for (t = 0; t < l; t++)
        (n = e.charCodeAt(t)),
          Math.random() > 0.5 && (n = "x" + n.toString(16)),
          (r += "&#" + n + ";");
      return r;
    }
    (fo._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
      (fo.punctuation = Gi(fo.punctuation)
        .replace(/punctuation/g, fo._punctuation)
        .getRegex()),
      (fo.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
      (fo.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
      (fo._comment = Gi(ho._comment)
        .replace("(?:--\x3e|$)", "--\x3e")
        .getRegex()),
      (fo.emStrong.lDelim = Gi(fo.emStrong.lDelim)
        .replace(/punct/g, fo._punctuation)
        .getRegex()),
      (fo.emStrong.rDelimAst = Gi(fo.emStrong.rDelimAst, "g")
        .replace(/punct/g, fo._punctuation)
        .getRegex()),
      (fo.emStrong.rDelimUnd = Gi(fo.emStrong.rDelimUnd, "g")
        .replace(/punct/g, fo._punctuation)
        .getRegex()),
      (fo._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
      (fo._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
      (fo._email =
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
      (fo.autolink = Gi(fo.autolink)
        .replace("scheme", fo._scheme)
        .replace("email", fo._email)
        .getRegex()),
      (fo._attribute =
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
      (fo.tag = Gi(fo.tag)
        .replace("comment", fo._comment)
        .replace("attribute", fo._attribute)
        .getRegex()),
      (fo._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (fo._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
      (fo._title =
        /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
      (fo.link = Gi(fo.link)
        .replace("label", fo._label)
        .replace("href", fo._href)
        .replace("title", fo._title)
        .getRegex()),
      (fo.reflink = Gi(fo.reflink)
        .replace("label", fo._label)
        .replace("ref", ho._label)
        .getRegex()),
      (fo.nolink = Gi(fo.nolink).replace("ref", ho._label).getRegex()),
      (fo.reflinkSearch = Gi(fo.reflinkSearch, "g")
        .replace("reflink", fo.reflink)
        .replace("nolink", fo.nolink)
        .getRegex()),
      (fo.normal = io({}, fo)),
      (fo.pedantic = io({}, fo.normal, {
        strong: {
          start: /^__|\*\*/,
          middle:
            /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g,
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g,
        },
        link: Gi(/^!?\[(label)\]\((.*?)\)/)
          .replace("label", fo._label)
          .getRegex(),
        reflink: Gi(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace("label", fo._label)
          .getRegex(),
      })),
      (fo.gfm = io({}, fo.normal, {
        escape: Gi(fo.escape).replace("])", "~|])").getRegex(),
        _extended_email:
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal:
          /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      })),
      (fo.gfm.url = Gi(fo.gfm.url, "i")
        .replace("email", fo.gfm._extended_email)
        .getRegex()),
      (fo.breaks = io({}, fo.gfm, {
        br: Gi(fo.br).replace("{2,}", "*").getRegex(),
        text: Gi(fo.gfm.text)
          .replace("\\b_", "\\b_| {2,}\\n")
          .replace(/\{2,\}/g, "*")
          .getRegex(),
      }));
    class vo {
      constructor(e) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || Fi),
          (this.options.tokenizer = this.options.tokenizer || new po()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
        const t = { block: ho.normal, inline: fo.normal };
        this.options.pedantic
          ? ((t.block = ho.pedantic), (t.inline = fo.pedantic))
          : this.options.gfm &&
            ((t.block = ho.gfm),
            this.options.breaks ? (t.inline = fo.breaks) : (t.inline = fo.gfm)),
          (this.tokenizer.rules = t);
      }
      static get rules() {
        return { block: ho, inline: fo };
      }
      static lex(e, t) {
        return new vo(t).lex(e);
      }
      static lexInline(e, t) {
        return new vo(t).inlineTokens(e);
      }
      lex(e) {
        let t;
        for (
          e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens);
          (t = this.inlineQueue.shift());

        )
          this.inlineTokens(t.src, t.tokens);
        return this.tokens;
      }
      blockTokens(e) {
        let t,
          n,
          r,
          l,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (
          e = this.options.pedantic
            ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
            : e.replace(
                /^( *)(\t+)/gm,
                (e, t, n) => t + "    ".repeat(n.length),
              );
          e;

        )
          if (
            !(
              this.options.extensions &&
              this.options.extensions.block &&
              this.options.extensions.block.some(
                (n) =>
                  !!(t = n.call({ lexer: this }, e, i)) &&
                  ((e = e.substring(t.raw.length)), i.push(t), !0),
              )
            )
          )
            if ((t = this.tokenizer.space(e)))
              (e = e.substring(t.raw.length)),
                1 === t.raw.length && i.length > 0
                  ? (i[i.length - 1].raw += "\n")
                  : i.push(t);
            else if ((t = this.tokenizer.code(e)))
              (e = e.substring(t.raw.length)),
                (n = i[i.length - 1]),
                !n || ("paragraph" !== n.type && "text" !== n.type)
                  ? i.push(t)
                  : ((n.raw += "\n" + t.raw),
                    (n.text += "\n" + t.text),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      n.text));
            else if ((t = this.tokenizer.fences(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.heading(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.hr(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.blockquote(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.list(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.html(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.def(e)))
              (e = e.substring(t.raw.length)),
                (n = i[i.length - 1]),
                !n || ("paragraph" !== n.type && "text" !== n.type)
                  ? this.tokens.links[t.tag] ||
                    (this.tokens.links[t.tag] = {
                      href: t.href,
                      title: t.title,
                    })
                  : ((n.raw += "\n" + t.raw),
                    (n.text += "\n" + t.raw),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      n.text));
            else if ((t = this.tokenizer.table(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else if ((t = this.tokenizer.lheading(e)))
              (e = e.substring(t.raw.length)), i.push(t);
            else {
              if (
                ((r = e),
                this.options.extensions && this.options.extensions.startBlock)
              ) {
                let t = 1 / 0;
                const n = e.slice(1);
                let l;
                this.options.extensions.startBlock.forEach(function (e) {
                  (l = e.call({ lexer: this }, n)),
                    "number" == typeof l && l >= 0 && (t = Math.min(t, l));
                }),
                  t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
              }
              if (this.state.top && (t = this.tokenizer.paragraph(r)))
                (n = i[i.length - 1]),
                  l && "paragraph" === n.type
                    ? ((n.raw += "\n" + t.raw),
                      (n.text += "\n" + t.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : i.push(t),
                  (l = r.length !== e.length),
                  (e = e.substring(t.raw.length));
              else if ((t = this.tokenizer.text(e)))
                (e = e.substring(t.raw.length)),
                  (n = i[i.length - 1]),
                  n && "text" === n.type
                    ? ((n.raw += "\n" + t.raw),
                      (n.text += "\n" + t.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : i.push(t);
              else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw new Error(t);
              }
            }
        return (this.state.top = !0), i;
      }
      inline(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return this.inlineQueue.push({ src: e, tokens: t }), t;
      }
      inlineTokens(e) {
        let t,
          n,
          r,
          l,
          i,
          o,
          s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          a = e;
        if (this.tokens.links) {
          const e = Object.keys(this.tokens.links);
          if (e.length > 0)
            for (
              ;
              null != (l = this.tokenizer.rules.inline.reflinkSearch.exec(a));

            )
              e.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) &&
                (a =
                  a.slice(0, l.index) +
                  "[" +
                  co("a", l[0].length - 2) +
                  "]" +
                  a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (l = this.tokenizer.rules.inline.blockSkip.exec(a)); )
          a =
            a.slice(0, l.index) +
            "[" +
            co("a", l[0].length - 2) +
            "]" +
            a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (l = this.tokenizer.rules.inline.escapedEmSt.exec(a)); )
          (a =
            a.slice(0, l.index + l[0].length - 2) +
            "++" +
            a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
            this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
        for (; e; )
          if (
            (i || (o = ""),
            (i = !1),
            !(
              this.options.extensions &&
              this.options.extensions.inline &&
              this.options.extensions.inline.some(
                (n) =>
                  !!(t = n.call({ lexer: this }, e, s)) &&
                  ((e = e.substring(t.raw.length)), s.push(t), !0),
              )
            ))
          )
            if ((t = this.tokenizer.escape(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.tag(e)))
              (e = e.substring(t.raw.length)),
                (n = s[s.length - 1]),
                n && "text" === t.type && "text" === n.type
                  ? ((n.raw += t.raw), (n.text += t.text))
                  : s.push(t);
            else if ((t = this.tokenizer.link(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.reflink(e, this.tokens.links)))
              (e = e.substring(t.raw.length)),
                (n = s[s.length - 1]),
                n && "text" === t.type && "text" === n.type
                  ? ((n.raw += t.raw), (n.text += t.text))
                  : s.push(t);
            else if ((t = this.tokenizer.emStrong(e, a, o)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.codespan(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.br(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.del(e)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.autolink(e, mo)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if (this.state.inLink || !(t = this.tokenizer.url(e, mo))) {
              if (
                ((r = e),
                this.options.extensions && this.options.extensions.startInline)
              ) {
                let t = 1 / 0;
                const n = e.slice(1);
                let l;
                this.options.extensions.startInline.forEach(function (e) {
                  (l = e.call({ lexer: this }, n)),
                    "number" == typeof l && l >= 0 && (t = Math.min(t, l));
                }),
                  t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
              }
              if ((t = this.tokenizer.inlineText(r, go)))
                (e = e.substring(t.raw.length)),
                  "_" !== t.raw.slice(-1) && (o = t.raw.slice(-1)),
                  (i = !0),
                  (n = s[s.length - 1]),
                  n && "text" === n.type
                    ? ((n.raw += t.raw), (n.text += t.text))
                    : s.push(t);
              else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw new Error(t);
              }
            } else (e = e.substring(t.raw.length)), s.push(t);
        return s;
      }
    }
    class yo {
      constructor(e) {
        this.options = e || Fi;
      }
      code(e, t, n) {
        const r = (t || "").match(/\S*/)[0];
        if (this.options.highlight) {
          const t = this.options.highlight(e, r);
          null != t && t !== e && ((n = !0), (e = t));
        }
        return (
          (e = e.replace(/\n$/, "") + "\n"),
          r
            ? '<pre><code class="' +
              this.options.langPrefix +
              qi(r) +
              '">' +
              (n ? e : qi(e, !0)) +
              "</code></pre>\n"
            : "<pre><code>" + (n ? e : qi(e, !0)) + "</code></pre>\n"
        );
      }
      blockquote(e) {
        return `<blockquote>\n${e}</blockquote>\n`;
      }
      html(e) {
        return e;
      }
      heading(e, t, n, r) {
        return this.options.headerIds
          ? `<h${t} id="${
              this.options.headerPrefix + r.slug(n)
            }">${e}</h${t}>\n`
          : `<h${t}>${e}</h${t}>\n`;
      }
      hr() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }
      list(e, t, n) {
        const r = t ? "ol" : "ul";
        return (
          "<" +
          r +
          (t && 1 !== n ? ' start="' + n + '"' : "") +
          ">\n" +
          e +
          "</" +
          r +
          ">\n"
        );
      }
      listitem(e) {
        return `<li>${e}</li>\n`;
      }
      checkbox(e) {
        return (
          "<input " +
          (e ? 'checked="" ' : "") +
          'disabled="" type="checkbox"' +
          (this.options.xhtml ? " /" : "") +
          "> "
        );
      }
      paragraph(e) {
        return `<p>${e}</p>\n`;
      }
      table(e, t) {
        return (
          t && (t = `<tbody>${t}</tbody>`),
          "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
        );
      }
      tablerow(e) {
        return `<tr>\n${e}</tr>\n`;
      }
      tablecell(e, t) {
        const n = t.header ? "th" : "td";
        return (
          (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`
        );
      }
      strong(e) {
        return `<strong>${e}</strong>`;
      }
      em(e) {
        return `<em>${e}</em>`;
      }
      codespan(e) {
        return `<code>${e}</code>`;
      }
      br() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }
      del(e) {
        return `<del>${e}</del>`;
      }
      link(e, t, n) {
        if (null === (e = Yi(this.options.sanitize, this.options.baseUrl, e)))
          return n;
        let r = '<a href="' + e + '"';
        return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>"), r;
      }
      image(e, t, n) {
        if (null === (e = Yi(this.options.sanitize, this.options.baseUrl, e)))
          return n;
        let r = `<img src="${e}" alt="${n}"`;
        return (
          t && (r += ` title="${t}"`), (r += this.options.xhtml ? "/>" : ">"), r
        );
      }
      text(e) {
        return e;
      }
    }
    class bo {
      strong(e) {
        return e;
      }
      em(e) {
        return e;
      }
      codespan(e) {
        return e;
      }
      del(e) {
        return e;
      }
      html(e) {
        return e;
      }
      text(e) {
        return e;
      }
      link(e, t, n) {
        return "" + n;
      }
      image(e, t, n) {
        return "" + n;
      }
      br() {
        return "";
      }
    }
    class wo {
      constructor() {
        this.seen = {};
      }
      serialize(e) {
        return e
          .toLowerCase()
          .trim()
          .replace(/<[!\/a-z].*?>/gi, "")
          .replace(
            /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
            "",
          )
          .replace(/\s/g, "-");
      }
      getNextSafeSlug(e, t) {
        let n = e,
          r = 0;
        if (this.seen.hasOwnProperty(n)) {
          r = this.seen[e];
          do {
            r++, (n = e + "-" + r);
          } while (this.seen.hasOwnProperty(n));
        }
        return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
      }
      slug(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = this.serialize(e);
        return this.getNextSafeSlug(n, t.dryrun);
      }
    }
    class ko {
      constructor(e) {
        (this.options = e || Fi),
          (this.options.renderer = this.options.renderer || new yo()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new bo()),
          (this.slugger = new wo());
      }
      static parse(e, t) {
        return new ko(t).parse(e);
      }
      static parseInline(e, t) {
        return new ko(t).parseInline(e);
      }
      parse(e) {
        let t,
          n,
          r,
          l,
          i,
          o,
          s,
          a,
          c,
          u,
          p,
          d,
          h,
          f,
          g,
          m,
          v,
          y,
          b,
          w =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          k = "";
        const x = e.length;
        for (t = 0; t < x; t++)
          if (
            ((u = e[t]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[u.type] &&
              ((b = this.options.extensions.renderers[u.type].call(
                { parser: this },
                u,
              )),
              !1 !== b ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(u.type)))
          )
            k += b || "";
          else
            switch (u.type) {
              case "space":
                continue;
              case "hr":
                k += this.renderer.hr();
                continue;
              case "heading":
                k += this.renderer.heading(
                  this.parseInline(u.tokens),
                  u.depth,
                  Qi(this.parseInline(u.tokens, this.textRenderer)),
                  this.slugger,
                );
                continue;
              case "code":
                k += this.renderer.code(u.text, u.lang, u.escaped);
                continue;
              case "table":
                for (a = "", s = "", l = u.header.length, n = 0; n < l; n++)
                  s += this.renderer.tablecell(
                    this.parseInline(u.header[n].tokens),
                    { header: !0, align: u.align[n] },
                  );
                for (
                  a += this.renderer.tablerow(s),
                    c = "",
                    l = u.rows.length,
                    n = 0;
                  n < l;
                  n++
                ) {
                  for (o = u.rows[n], s = "", i = o.length, r = 0; r < i; r++)
                    s += this.renderer.tablecell(
                      this.parseInline(o[r].tokens),
                      { header: !1, align: u.align[r] },
                    );
                  c += this.renderer.tablerow(s);
                }
                k += this.renderer.table(a, c);
                continue;
              case "blockquote":
                (c = this.parse(u.tokens)), (k += this.renderer.blockquote(c));
                continue;
              case "list":
                for (
                  p = u.ordered,
                    d = u.start,
                    h = u.loose,
                    l = u.items.length,
                    c = "",
                    n = 0;
                  n < l;
                  n++
                )
                  (g = u.items[n]),
                    (m = g.checked),
                    (v = g.task),
                    (f = ""),
                    g.task &&
                      ((y = this.renderer.checkbox(m)),
                      h
                        ? g.tokens.length > 0 &&
                          "paragraph" === g.tokens[0].type
                          ? ((g.tokens[0].text = y + " " + g.tokens[0].text),
                            g.tokens[0].tokens &&
                              g.tokens[0].tokens.length > 0 &&
                              "text" === g.tokens[0].tokens[0].type &&
                              (g.tokens[0].tokens[0].text =
                                y + " " + g.tokens[0].tokens[0].text))
                          : g.tokens.unshift({ type: "text", text: y })
                        : (f += y)),
                    (f += this.parse(g.tokens, h)),
                    (c += this.renderer.listitem(f, v, m));
                k += this.renderer.list(c, p, d);
                continue;
              case "html":
                k += this.renderer.html(u.text);
                continue;
              case "paragraph":
                k += this.renderer.paragraph(this.parseInline(u.tokens));
                continue;
              case "text":
                for (
                  c = u.tokens ? this.parseInline(u.tokens) : u.text;
                  t + 1 < x && "text" === e[t + 1].type;

                )
                  (u = e[++t]),
                    (c +=
                      "\n" + (u.tokens ? this.parseInline(u.tokens) : u.text));
                k += w ? this.renderer.paragraph(c) : c;
                continue;
              default: {
                const e = 'Token with "' + u.type + '" type was not found.';
                if (this.options.silent) return void console.error(e);
                throw new Error(e);
              }
            }
        return k;
      }
      parseInline(e, t) {
        t = t || this.renderer;
        let n,
          r,
          l,
          i = "";
        const o = e.length;
        for (n = 0; n < o; n++)
          if (
            ((r = e[n]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[r.type] &&
              ((l = this.options.extensions.renderers[r.type].call(
                { parser: this },
                r,
              )),
              !1 !== l ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(r.type)))
          )
            i += l || "";
          else
            switch (r.type) {
              case "escape":
              case "text":
                i += t.text(r.text);
                break;
              case "html":
                i += t.html(r.text);
                break;
              case "link":
                i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                break;
              case "image":
                i += t.image(r.href, r.title, r.text);
                break;
              case "strong":
                i += t.strong(this.parseInline(r.tokens, t));
                break;
              case "em":
                i += t.em(this.parseInline(r.tokens, t));
                break;
              case "codespan":
                i += t.codespan(r.text);
                break;
              case "br":
                i += t.br();
                break;
              case "del":
                i += t.del(this.parseInline(r.tokens, t));
                break;
              default: {
                const e = 'Token with "' + r.type + '" type was not found.';
                if (this.options.silent) return void console.error(e);
                throw new Error(e);
              }
            }
        return i;
      }
    }
    function xo(e, t, n) {
      if (null == e)
        throw new Error("marked(): input parameter is undefined or null");
      if ("string" != typeof e)
        throw new Error(
          "marked(): input parameter is of type " +
            Object.prototype.toString.call(e) +
            ", string expected",
        );
      if (
        ("function" == typeof t && ((n = t), (t = null)),
        ao((t = io({}, xo.defaults, t || {}))),
        n)
      ) {
        const r = t.highlight;
        let l;
        try {
          l = vo.lex(e, t);
        } catch (e) {
          return n(e);
        }
        const i = function (e) {
          let i;
          if (!e)
            try {
              t.walkTokens && xo.walkTokens(l, t.walkTokens),
                (i = ko.parse(l, t));
            } catch (t) {
              e = t;
            }
          return (t.highlight = r), e ? n(e) : n(null, i);
        };
        if (!r || r.length < 3) return i();
        if ((delete t.highlight, !l.length)) return i();
        let o = 0;
        return (
          xo.walkTokens(l, function (e) {
            "code" === e.type &&
              (o++,
              setTimeout(() => {
                r(e.text, e.lang, function (t, n) {
                  if (t) return i(t);
                  null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                    o--,
                    0 === o && i();
                });
              }, 0));
          }),
          void (0 === o && i())
        );
      }
      function r(e) {
        if (
          ((e.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          t.silent)
        )
          return (
            "<p>An error occurred:</p><pre>" + qi(e.message + "", !0) + "</pre>"
          );
        throw e;
      }
      try {
        const n = vo.lex(e, t);
        if (t.walkTokens) {
          if (t.async)
            return Promise.all(xo.walkTokens(n, t.walkTokens))
              .then(() => ko.parse(n, t))
              .catch(r);
          xo.walkTokens(n, t.walkTokens);
        }
        return ko.parse(n, t);
      } catch (e) {
        r(e);
      }
    }
    (xo.options = xo.setOptions =
      function (e) {
        var t;
        return io(xo.defaults, e), (t = xo.defaults), (Fi = t), xo;
      }),
      (xo.getDefaults = function () {
        return {
          async: !1,
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        };
      }),
      (xo.defaults = Fi),
      (xo.use = function () {
        const e = xo.defaults.extensions || { renderers: {}, childTokens: {} };
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        n.forEach((t) => {
          const n = io({}, t);
          if (
            ((n.async = xo.defaults.async || n.async),
            t.extensions &&
              (t.extensions.forEach((t) => {
                if (!t.name) throw new Error("extension name required");
                if (t.renderer) {
                  const n = e.renderers[t.name];
                  e.renderers[t.name] = n
                    ? function () {
                        for (
                          var e = arguments.length, r = new Array(e), l = 0;
                          l < e;
                          l++
                        )
                          r[l] = arguments[l];
                        let i = t.renderer.apply(this, r);
                        return !1 === i && (i = n.apply(this, r)), i;
                      }
                    : t.renderer;
                }
                if (t.tokenizer) {
                  if (!t.level || ("block" !== t.level && "inline" !== t.level))
                    throw new Error(
                      "extension level must be 'block' or 'inline'",
                    );
                  e[t.level]
                    ? e[t.level].unshift(t.tokenizer)
                    : (e[t.level] = [t.tokenizer]),
                    t.start &&
                      ("block" === t.level
                        ? e.startBlock
                          ? e.startBlock.push(t.start)
                          : (e.startBlock = [t.start])
                        : "inline" === t.level &&
                          (e.startInline
                            ? e.startInline.push(t.start)
                            : (e.startInline = [t.start])));
                }
                t.childTokens && (e.childTokens[t.name] = t.childTokens);
              }),
              (n.extensions = e)),
            t.renderer)
          ) {
            const e = xo.defaults.renderer || new yo();
            for (const n in t.renderer) {
              const r = e[n];
              e[n] = function () {
                for (
                  var l = arguments.length, i = new Array(l), o = 0;
                  o < l;
                  o++
                )
                  i[o] = arguments[o];
                let s = t.renderer[n].apply(e, i);
                return !1 === s && (s = r.apply(e, i)), s;
              };
            }
            n.renderer = e;
          }
          if (t.tokenizer) {
            const e = xo.defaults.tokenizer || new po();
            for (const n in t.tokenizer) {
              const r = e[n];
              e[n] = function () {
                for (
                  var l = arguments.length, i = new Array(l), o = 0;
                  o < l;
                  o++
                )
                  i[o] = arguments[o];
                let s = t.tokenizer[n].apply(e, i);
                return !1 === s && (s = r.apply(e, i)), s;
              };
            }
            n.tokenizer = e;
          }
          if (t.walkTokens) {
            const e = xo.defaults.walkTokens;
            n.walkTokens = function (n) {
              let r = [];
              return (
                r.push(t.walkTokens.call(this, n)),
                e && (r = r.concat(e.call(this, n))),
                r
              );
            };
          }
          xo.setOptions(n);
        });
      }),
      (xo.walkTokens = function (e, t) {
        let n = [];
        for (const r of e)
          switch (((n = n.concat(t.call(xo, r))), r.type)) {
            case "table":
              for (const e of r.header)
                n = n.concat(xo.walkTokens(e.tokens, t));
              for (const e of r.rows)
                for (const r of e) n = n.concat(xo.walkTokens(r.tokens, t));
              break;
            case "list":
              n = n.concat(xo.walkTokens(r.items, t));
              break;
            default:
              xo.defaults.extensions &&
              xo.defaults.extensions.childTokens &&
              xo.defaults.extensions.childTokens[r.type]
                ? xo.defaults.extensions.childTokens[r.type].forEach(
                    function (e) {
                      n = n.concat(xo.walkTokens(r[e], t));
                    },
                  )
                : r.tokens && (n = n.concat(xo.walkTokens(r.tokens, t)));
          }
        return n;
      }),
      (xo.parseInline = function (e, t) {
        if (null == e)
          throw new Error(
            "marked.parseInline(): input parameter is undefined or null",
          );
        if ("string" != typeof e)
          throw new Error(
            "marked.parseInline(): input parameter is of type " +
              Object.prototype.toString.call(e) +
              ", string expected",
          );
        ao((t = io({}, xo.defaults, t || {})));
        try {
          const n = vo.lexInline(e, t);
          return (
            t.walkTokens && xo.walkTokens(n, t.walkTokens), ko.parseInline(n, t)
          );
        } catch (e) {
          if (
            ((e.message +=
              "\nPlease report this to https://github.com/markedjs/marked."),
            t.silent)
          )
            return (
              "<p>An error occurred:</p><pre>" +
              qi(e.message + "", !0) +
              "</pre>"
            );
          throw e;
        }
      }),
      (xo.Parser = ko),
      (xo.parser = ko.parse),
      (xo.Renderer = yo),
      (xo.TextRenderer = bo),
      (xo.Lexer = vo),
      (xo.lexer = vo.lex),
      (xo.Tokenizer = po),
      (xo.Slugger = wo),
      (xo.parse = xo);
    const _o = /\$.*?\$/,
      $o = /^\$(.*?)\$/,
      Co = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,
      So = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.replace(/:(.+?):/g, (e, n) =>
          t[n] ? `<img class="wl-emoji" src="${t[n]}" alt="${n}">` : e,
        );
      },
      Eo = (e) => e.dataset.path || e.getAttribute("id"),
      Ro = (e) => {
        let {
          serverURL: t,
          path: n = window.location.pathname,
          selector: r = ".waline-comment-count",
          lang: l = navigator.language,
        } = e;
        const i = new AbortController(),
          o = document.querySelectorAll(r);
        return (
          o.length &&
            ((e) => {
              let { serverURL: t, lang: n, paths: r, signal: l } = e;
              return fetch(
                `${t}/comment?type=count&url=${encodeURIComponent(
                  r.join(","),
                )}&lang=${n}`,
                { signal: l },
              )
                .then((e) => e.json())
                .then((e) => (Array.isArray(e) ? e : [e]));
            })({
              serverURL: I(t),
              paths: Array.from(o).map((e) =>
                E(e.dataset.path || e.getAttribute("id") || n),
              ),
              lang: l,
              signal: i.signal,
            })
              .then((e) => {
                o.forEach((t, n) => {
                  t.innerText = e[n].toString();
                });
              })
              .catch(Ti),
          i.abort.bind(i)
        );
      },
      Ao = (e) => {
        let { size: t } = e;
        return ol(
          "svg",
          {
            class: "wl-close-icon",
            viewBox: "0 0 1024 1024",
            width: t,
            height: t,
          },
          [
            ol("path", {
              d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
              fill: "currentColor",
            }),
            ol("path", {
              d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
              fill: "#888",
            }),
          ],
        );
      },
      Io = () =>
        ol(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          ol("path", {
            d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
            fill: "red",
          }),
        ),
      Lo = () =>
        ol(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          ol("path", {
            d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
            fill: "currentColor",
          }),
        ),
      zo = () =>
        ol("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
          ol("path", {
            d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
            fill: "currentColor",
          }),
          ol("path", {
            d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
            fill: "currentColor",
          }),
        ]),
      Oo = (e) => {
        let { active: t = !1 } = e;
        return ol(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          [
            ol("path", {
              d:
                "M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z" +
                (t
                  ? ""
                  : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),
              fill: t ? "red" : "currentColor",
            }),
          ],
        );
      },
      jo = () =>
        ol("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
          ol("path", {
            d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
            fill: "currentColor",
          }),
          ol("path", {
            d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
            fill: "currentColor",
          }),
        ]),
      To = () =>
        ol(
          "svg",
          { width: "16", height: "16", ariaHidden: "true" },
          ol("path", {
            d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
            fill: "currentColor",
          }),
        ),
      Uo = () =>
        ol(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          ol("path", {
            d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
            fill: "currentColor",
          }),
        ),
      Po = () =>
        ol(
          "svg",
          { viewBox: "0 0 1024 1024", width: "24", height: "24" },
          ol("path", {
            d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",
            fill: "currentColor",
          }),
        ),
      Mo = () =>
        ol(
          "svg",
          {
            class: "verified-icon",
            viewBox: "0 0 1024 1024",
            width: "14",
            height: "14",
          },
          ol("path", {
            d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
            fill: "#27ae60",
          }),
        ),
      Fo = (e) => {
        let { size: t } = e;
        return ol(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
          },
          ol(
            "circle",
            {
              cx: 50,
              cy: 50,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "4",
              r: "40",
              "stroke-dasharray": "85 30",
            },
            ol("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              repeatCount: "indefinite",
              dur: "1s",
              values: "0 50 50;360 50 50",
              keyTimes: "0;1",
            }),
          ),
        );
      },
      No = () =>
        ol(
          "svg",
          { width: 24, height: 24, fill: "currentcolor", viewBox: "0 0 24 24" },
          [
            ol("path", {
              style: "transform: translateY(0.5px)",
              d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z",
            }),
            ol("path", {
              d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z",
            }),
          ],
        );
    e.commentCount = Ro;
    let Vo = null;
    const Do = () => Vo || (Vo = wi("WALINE_LIKE", []));
    let Bo = null;
    var Ho =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
                ? self
                : {},
      Wo = {},
      qo = {},
      Zo = {},
      Qo =
        (Ho && Ho.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (l, i) {
            function o(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? l(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      Ko =
        (Ho && Ho.__generator) ||
        function (e, t) {
          var n,
            r,
            l,
            i,
            o = {
              label: 0,
              sent: function () {
                if (1 & l[0]) throw l[1];
                return l[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (l =
                          2 & i[0]
                            ? r.return
                            : i[0]
                              ? r.throw || ((l = r.return) && l.call(r), 0)
                              : r.next) &&
                        !(l = l.call(r, i[1])).done)
                    )
                      return l;
                    switch (((r = 0), l && (i = [2 & i[0], l.value]), i[0])) {
                      case 0:
                      case 1:
                        l = i;
                        break;
                      case 4:
                        return o.label++, { value: i[1], done: !1 };
                      case 5:
                        o.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (l = (l = o.trys).length > 0 && l[l.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0])
                          )
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!l || (i[1] > l[0] && i[1] < l[3]))
                        ) {
                          o.label = i[1];
                          break;
                        }
                        if (6 === i[0] && o.label < l[1]) {
                          (o.label = l[1]), (l = i);
                          break;
                        }
                        if (l && o.label < l[2]) {
                          (o.label = l[2]), o.ops.push(i);
                          break;
                        }
                        l[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    i = t.call(e, o);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = l = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        };
    Object.defineProperty(Zo, "__esModule", { value: !0 }),
      (Zo.ReCaptchaInstance = void 0);
    var Go = (function () {
      function e(e, t, n) {
        (this.siteKey = e),
          (this.recaptchaID = t),
          (this.recaptcha = n),
          (this.styleContainer = null);
      }
      return (
        (e.prototype.execute = function (e) {
          return Qo(this, void 0, void 0, function () {
            return Ko(this, function (t) {
              return [
                2,
                this.recaptcha.enterprise
                  ? this.recaptcha.enterprise.execute(this.recaptchaID, {
                      action: e,
                    })
                  : this.recaptcha.execute(this.recaptchaID, { action: e }),
              ];
            });
          });
        }),
        (e.prototype.getSiteKey = function () {
          return this.siteKey;
        }),
        (e.prototype.hideBadge = function () {
          null === this.styleContainer &&
            ((this.styleContainer = document.createElement("style")),
            (this.styleContainer.innerHTML =
              ".grecaptcha-badge{visibility:hidden !important;}"),
            document.head.appendChild(this.styleContainer));
        }),
        (e.prototype.showBadge = function () {
          null !== this.styleContainer &&
            (document.head.removeChild(this.styleContainer),
            (this.styleContainer = null));
        }),
        e
      );
    })();
    (Zo.ReCaptchaInstance = Go),
      Object.defineProperty(qo, "__esModule", { value: !0 }),
      (qo.getInstance = qo.load = void 0);
    var Jo,
      Xo = Zo;
    !(function (e) {
      (e[(e.NOT_LOADED = 0)] = "NOT_LOADED"),
        (e[(e.LOADING = 1)] = "LOADING"),
        (e[(e.LOADED = 2)] = "LOADED");
    })(Jo || (Jo = {}));
    var Yo = (function () {
      function e() {}
      return (
        (e.load = function (t, n) {
          if ((void 0 === n && (n = {}), "undefined" == typeof document))
            return Promise.reject(
              new Error("This is a library for the browser!"),
            );
          if (e.getLoadingState() === Jo.LOADED)
            return e.instance.getSiteKey() === t
              ? Promise.resolve(e.instance)
              : Promise.reject(
                  new Error(
                    "reCAPTCHA already loaded with different site key!",
                  ),
                );
          if (e.getLoadingState() === Jo.LOADING)
            return t !== e.instanceSiteKey
              ? Promise.reject(
                  new Error(
                    "reCAPTCHA already loaded with different site key!",
                  ),
                )
              : new Promise(function (t, n) {
                  e.successfulLoadingConsumers.push(function (e) {
                    return t(e);
                  }),
                    e.errorLoadingRunnable.push(function (e) {
                      return n(e);
                    });
                });
          (e.instanceSiteKey = t), e.setLoadingState(Jo.LOADING);
          var r = new e();
          return new Promise(function (l, i) {
            r.loadScript(
              t,
              n.useRecaptchaNet || !1,
              n.useEnterprise || !1,
              n.renderParameters ? n.renderParameters : {},
              n.customUrl,
            )
              .then(function () {
                e.setLoadingState(Jo.LOADED);
                var i = r.doExplicitRender(
                    grecaptcha,
                    t,
                    n.explicitRenderParameters
                      ? n.explicitRenderParameters
                      : {},
                    n.useEnterprise || !1,
                  ),
                  o = new Xo.ReCaptchaInstance(t, i, grecaptcha);
                e.successfulLoadingConsumers.forEach(function (e) {
                  return e(o);
                }),
                  (e.successfulLoadingConsumers = []),
                  n.autoHideBadge && o.hideBadge(),
                  (e.instance = o),
                  l(o);
              })
              .catch(function (t) {
                e.errorLoadingRunnable.forEach(function (e) {
                  return e(t);
                }),
                  (e.errorLoadingRunnable = []),
                  i(t);
              });
          });
        }),
        (e.getInstance = function () {
          return e.instance;
        }),
        (e.setLoadingState = function (t) {
          e.loadingState = t;
        }),
        (e.getLoadingState = function () {
          return null === e.loadingState ? Jo.NOT_LOADED : e.loadingState;
        }),
        (e.prototype.loadScript = function (t, n, r, l, i) {
          var o = this;
          void 0 === n && (n = !1),
            void 0 === r && (r = !1),
            void 0 === l && (l = {}),
            void 0 === i && (i = "");
          var s = document.createElement("script");
          s.setAttribute("recaptcha-v3-script", "");
          var a = "https://www.google.com/recaptcha/api.js";
          n &&
            (a = r
              ? "https://recaptcha.net/recaptcha/enterprise.js"
              : "https://recaptcha.net/recaptcha/api.js"),
            r && (a = "https://www.google.com/recaptcha/enterprise.js"),
            i && (a = i),
            l.render && (l.render = void 0);
          var c = this.buildQueryString(l);
          return (
            (s.src = a + "?render=explicit" + c),
            new Promise(function (t, n) {
              s.addEventListener(
                "load",
                o.waitForScriptToLoad(function () {
                  t(s);
                }, r),
                !1,
              ),
                (s.onerror = function (t) {
                  e.setLoadingState(Jo.NOT_LOADED), n(t);
                }),
                document.head.appendChild(s);
            })
          );
        }),
        (e.prototype.buildQueryString = function (e) {
          return Object.keys(e).length < 1
            ? ""
            : "&" +
                Object.keys(e)
                  .filter(function (t) {
                    return !!e[t];
                  })
                  .map(function (t) {
                    return t + "=" + e[t];
                  })
                  .join("&");
        }),
        (e.prototype.waitForScriptToLoad = function (t, n) {
          var r = this;
          return function () {
            void 0 === window.grecaptcha
              ? setTimeout(function () {
                  r.waitForScriptToLoad(t, n);
                }, e.SCRIPT_LOAD_DELAY)
              : n
                ? window.grecaptcha.enterprise.ready(function () {
                    t();
                  })
                : window.grecaptcha.ready(function () {
                    t();
                  });
          };
        }),
        (e.prototype.doExplicitRender = function (e, t, n, r) {
          var l = {
            sitekey: t,
            badge: n.badge,
            size: n.size,
            tabindex: n.tabindex,
          };
          return n.container
            ? r
              ? e.enterprise.render(n.container, l)
              : e.render(n.container, l)
            : r
              ? e.enterprise.render(l)
              : e.render(l);
        }),
        (e.loadingState = null),
        (e.instance = null),
        (e.instanceSiteKey = null),
        (e.successfulLoadingConsumers = []),
        (e.errorLoadingRunnable = []),
        (e.SCRIPT_LOAD_DELAY = 25),
        e
      );
    })();
    (qo.load = Yo.load),
      (qo.getInstance = Yo.getInstance),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ReCaptchaInstance = e.getInstance = e.load = void 0);
        var t = qo;
        Object.defineProperty(e, "load", {
          enumerable: !0,
          get: function () {
            return t.load;
          },
        }),
          Object.defineProperty(e, "getInstance", {
            enumerable: !0,
            get: function () {
              return t.getInstance;
            },
          });
        var n = Zo;
        Object.defineProperty(e, "ReCaptchaInstance", {
          enumerable: !0,
          get: function () {
            return n.ReCaptchaInstance;
          },
        });
      })(Wo);
    const es = {};
    let ts = null;
    const ns = () => ts ?? (ts = wi("WALINE_USER", {})),
      rs = { key: 0, class: "wl-reaction" },
      ls = ["textContent"],
      is = { class: "reaction-list" },
      os = ["onClick"],
      ss = { class: "reaction-img" },
      as = ["src", "alt"],
      cs = ["textContent"],
      us = ["textContent"];
    var ps,
      ds,
      hs = Nn({
        __name: "ArticleReaction",
        setup(e, t) {
          let { expose: n } = t;
          n();
          const r = Bo ?? (Bo = wi("WALINE_REACTION", {})),
            l = jn("config"),
            i = Qt(-1),
            o = Qt([]),
            s = il(() => l.value.locale),
            a = il(() => l.value.reaction.length > 0),
            c = il(() => {
              const { reaction: e, path: t } = l.value;
              return e.map((e, n) => ({
                icon: e,
                desc: s.value[`reaction${n}`],
                active: r.value[t] === n,
              }));
            });
          let u;
          return (
            Bn(() => {
              Pn(
                () => [l.value.serverURL, l.value.path],
                () => {
                  (async () => {
                    if (a.value) {
                      const {
                          serverURL: e,
                          lang: t,
                          path: n,
                          reaction: r,
                        } = l.value,
                        i = new AbortController();
                      u = i.abort.bind(i);
                      const s = await $({
                        serverURL: e,
                        lang: t,
                        paths: [n],
                        type: r.map((e, t) => `reaction${t}`),
                        signal: i.signal,
                      });
                      if (Array.isArray(s) || "number" == typeof s) return;
                      o.value = r.map((e, t) => s[`reaction${t}`]);
                    }
                  })();
                },
                { immediate: !0 },
              );
            }),
            Wn(() => {
              var e;
              return null === (e = u) || void 0 === e ? void 0 : e();
            }),
            (e, t) =>
              Xt(c).length
                ? (Ar(),
                  Or("div", rs, [
                    Nr(
                      "div",
                      {
                        class: "reaction-title",
                        textContent: q(Xt(s).reactionTitle),
                      },
                      null,
                      8,
                      ls,
                    ),
                    Nr("ul", is, [
                      (Ar(!0),
                      Or(
                        _r,
                        null,
                        Jn(Xt(c), (e, t) => {
                          let { active: n, icon: s, desc: a } = e;
                          return (
                            Ar(),
                            Or(
                              "li",
                              {
                                key: t,
                                class: V(["reaction-item", { active: n }]),
                                onClick: (e) =>
                                  (async (e) => {
                                    if (-1 === i.value) {
                                      const {
                                          serverURL: t,
                                          lang: n,
                                          path: s,
                                        } = l.value,
                                        a = r.value[s];
                                      (i.value = e),
                                        void 0 !== a &&
                                          (await C({
                                            serverURL: t,
                                            lang: n,
                                            path: s,
                                            type: `reaction${a}`,
                                            action: "desc",
                                          }),
                                          (o.value[a] = Math.max(
                                            o.value[a] - 1,
                                            0,
                                          ))),
                                        a !== e &&
                                          (await C({
                                            serverURL: t,
                                            lang: n,
                                            path: s,
                                            type: `reaction${e}`,
                                          }),
                                          (o.value[e] = (o.value[e] || 0) + 1)),
                                        a === e
                                          ? delete r.value[s]
                                          : (r.value[s] = e),
                                        (i.value = -1);
                                    }
                                  })(t),
                              },
                              [
                                Nr("div", ss, [
                                  Nr("img", { src: s, alt: a }, null, 8, as),
                                  i.value === t
                                    ? (Ar(),
                                      jr(Xt(Fo), {
                                        key: 0,
                                        class: "reaction-loading",
                                      }))
                                    : (Ar(),
                                      Or(
                                        "div",
                                        {
                                          key: 1,
                                          class: "reaction-votes",
                                          textContent: q(o.value[t] || 0),
                                        },
                                        null,
                                        8,
                                        cs,
                                      )),
                                ]),
                                Nr(
                                  "div",
                                  { class: "reaction-text", textContent: q(a) },
                                  null,
                                  8,
                                  us,
                                ),
                              ],
                              10,
                              os,
                            )
                          );
                        }),
                        128,
                      )),
                    ]),
                  ]))
                : Hr("v-if", !0)
          );
        },
      }),
      fs = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [e, r] of t) n[e] = r;
        return n;
      },
      gs = fs(hs, [["__file", "ArticleReaction.vue"]]),
      ms =
        "function" == typeof Map
          ? new Map()
          : ((ps = []),
            (ds = []),
            {
              has: function (e) {
                return ps.indexOf(e) > -1;
              },
              get: function (e) {
                return ds[ps.indexOf(e)];
              },
              set: function (e, t) {
                -1 === ps.indexOf(e) && (ps.push(e), ds.push(t));
              },
              delete: function (e) {
                var t = ps.indexOf(e);
                t > -1 && (ps.splice(t, 1), ds.splice(t, 1));
              },
            }),
      vs = function (e) {
        return new Event(e, { bubbles: !0 });
      };
    try {
      new Event("test");
    } catch (ps) {
      vs = function (e) {
        var t = document.createEvent("Event");
        return t.initEvent(e, !0, !1), t;
      };
    }
    function ys(e) {
      var t = ms.get(e);
      t && t.destroy();
    }
    function bs(e) {
      var t = ms.get(e);
      t && t.update();
    }
    var ws = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle
      ? (((ws = function (e) {
          return e;
        }).destroy = function (e) {
          return e;
        }),
        (ws.update = function (e) {
          return e;
        }))
      : (((ws = function (e, t) {
          return (
            e &&
              Array.prototype.forEach.call(e.length ? e : [e], function (e) {
                return (function (e) {
                  if (
                    e &&
                    e.nodeName &&
                    "TEXTAREA" === e.nodeName &&
                    !ms.has(e)
                  ) {
                    var t,
                      n = null,
                      r = null,
                      l = null,
                      i = function () {
                        e.clientWidth !== r && c();
                      },
                      o = function (t) {
                        window.removeEventListener("resize", i, !1),
                          e.removeEventListener("input", c, !1),
                          e.removeEventListener("keyup", c, !1),
                          e.removeEventListener("autosize:destroy", o, !1),
                          e.removeEventListener("autosize:update", c, !1),
                          Object.keys(t).forEach(function (n) {
                            e.style[n] = t[n];
                          }),
                          ms.delete(e);
                      }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap,
                      });
                    e.addEventListener("autosize:destroy", o, !1),
                      "onpropertychange" in e &&
                        "oninput" in e &&
                        e.addEventListener("keyup", c, !1),
                      window.addEventListener("resize", i, !1),
                      e.addEventListener("input", c, !1),
                      e.addEventListener("autosize:update", c, !1),
                      (e.style.overflowX = "hidden"),
                      (e.style.wordWrap = "break-word"),
                      ms.set(e, { destroy: o, update: c }),
                      "vertical" ===
                      (t = window.getComputedStyle(e, null)).resize
                        ? (e.style.resize = "none")
                        : "both" === t.resize &&
                          (e.style.resize = "horizontal"),
                      (n =
                        "content-box" === t.boxSizing
                          ? -(
                              parseFloat(t.paddingTop) +
                              parseFloat(t.paddingBottom)
                            )
                          : parseFloat(t.borderTopWidth) +
                            parseFloat(t.borderBottomWidth)),
                      isNaN(n) && (n = 0),
                      c();
                  }
                  function s(t) {
                    var n = e.style.width;
                    (e.style.width = "0px"),
                      (e.style.width = n),
                      (e.style.overflowY = t);
                  }
                  function a() {
                    if (0 !== e.scrollHeight) {
                      var t = (function (e) {
                        for (
                          var t = [];
                          e && e.parentNode && e.parentNode instanceof Element;

                        )
                          e.parentNode.scrollTop &&
                            ((e.parentNode.style.scrollBehavior = "auto"),
                            t.push([e.parentNode, e.parentNode.scrollTop])),
                            (e = e.parentNode);
                        return function () {
                          return t.forEach(function (e) {
                            var t = e[0];
                            (t.scrollTop = e[1]),
                              (t.style.scrollBehavior = null);
                          });
                        };
                      })(e);
                      (e.style.height = ""),
                        (e.style.height = e.scrollHeight + n + "px"),
                        (r = e.clientWidth),
                        t();
                    }
                  }
                  function c() {
                    a();
                    var t = Math.round(parseFloat(e.style.height)),
                      n = window.getComputedStyle(e, null),
                      r =
                        "content-box" === n.boxSizing
                          ? Math.round(parseFloat(n.height))
                          : e.offsetHeight;
                    if (
                      (r < t
                        ? "hidden" === n.overflowY &&
                          (s("scroll"),
                          a(),
                          (r =
                            "content-box" === n.boxSizing
                              ? Math.round(
                                  parseFloat(
                                    window.getComputedStyle(e, null).height,
                                  ),
                                )
                              : e.offsetHeight))
                        : "hidden" !== n.overflowY &&
                          (s("hidden"),
                          a(),
                          (r =
                            "content-box" === n.boxSizing
                              ? Math.round(
                                  parseFloat(
                                    window.getComputedStyle(e, null).height,
                                  ),
                                )
                              : e.offsetHeight)),
                      l !== r)
                    ) {
                      l = r;
                      var i = vs("autosize:resized");
                      try {
                        e.dispatchEvent(i);
                      } catch (e) {}
                    }
                  }
                })(e);
              }),
            e
          );
        }).destroy = function (e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], ys), e;
        }),
        (ws.update = function (e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], bs), e;
        }));
    var ks = ws;
    const xs = ["data-index"],
      _s = ["src", "title", "onClick"];
    var $s = Nn({
        __name: "ImageWall",
        props: {
          items: { default: () => [] },
          columnWidth: { default: 300 },
          gap: { default: 0 },
        },
        emits: ["insert"],
        setup(e, t) {
          let { expose: n } = t;
          const r = e;
          n();
          let l = null;
          const i = Qt(null),
            o = Qt({}),
            s = Qt([]),
            a = () => {
              const e = Math.floor(
                (i.value.getBoundingClientRect().width + r.gap) /
                  (r.columnWidth + r.gap),
              );
              return e > 0 ? e : 1;
            },
            c = async (e) => {
              var t;
              if (e >= r.items.length) return;
              await mn();
              const n = Array.from(
                (null === (t = i.value) || void 0 === t
                  ? void 0
                  : t.children) || [],
              ).reduce((e, t) =>
                t.getBoundingClientRect().height <
                e.getBoundingClientRect().height
                  ? t
                  : e,
              );
              s.value[Number(n.dataset.index)].push(e), await c(e + 1);
            },
            u = async function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (s.value.length === a() && !e) return;
              var t;
              s.value = ((t = a()), new Array(t).fill(null).map(() => []));
              const n = window.scrollY;
              await c(0), window.scrollTo({ top: n });
            },
            p = (e) => {
              o.value[e.target.src] = !0;
            };
          return (
            Bn(() => {
              u(!0),
                (l = new ResizeObserver(() => {
                  u();
                })),
                l.observe(i.value),
                Pn(
                  () => [r.items],
                  () => {
                    (o.value = {}), u(!0);
                  },
                ),
                Pn(
                  () => [r.columnWidth, r.gap],
                  () => {
                    u();
                  },
                );
            }),
            Hn(() => l.unobserve(i.value)),
            (t, n) => (
              Ar(),
              Or(
                "div",
                {
                  ref_key: "wall",
                  ref: i,
                  class: "wl-gallery",
                  style: U({ gap: `${e.gap}px` }),
                },
                [
                  (Ar(!0),
                  Or(
                    _r,
                    null,
                    Jn(
                      s.value,
                      (n, r) => (
                        Ar(),
                        Or(
                          "div",
                          {
                            key: r,
                            class: "wl-gallery-column",
                            "data-index": r,
                            style: U({ gap: `${e.gap}px` }),
                          },
                          [
                            (Ar(!0),
                            Or(
                              _r,
                              null,
                              Jn(
                                n,
                                (n) => (
                                  Ar(),
                                  Or(
                                    _r,
                                    { key: n },
                                    [
                                      o.value[e.items[n].src]
                                        ? Hr("v-if", !0)
                                        : (Ar(),
                                          jr(Xt(Fo), {
                                            key: 0,
                                            size: 36,
                                            style: { margin: "20px auto" },
                                          })),
                                      Nr(
                                        "img",
                                        {
                                          class: "wl-gallery-item",
                                          src: e.items[n].src,
                                          title: e.items[n].title,
                                          loading: "lazy",
                                          onLoad: p,
                                          onClick: (r) =>
                                            t.$emit(
                                              "insert",
                                              `![](${e.items[n].src})`,
                                            ),
                                        },
                                        null,
                                        40,
                                        _s,
                                      ),
                                    ],
                                    64,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ],
                          12,
                          xs,
                        )
                      ),
                    ),
                    128,
                  )),
                ],
                4,
              )
            )
          );
        },
      }),
      Cs = fs($s, [["__file", "ImageWall.vue"]]);
    const Ss = { class: "wl-comment" },
      Es = { key: 0, class: "wl-login-info" },
      Rs = { class: "wl-avatar" },
      As = ["title"],
      Is = ["title"],
      Ls = ["src"],
      zs = ["title", "textContent"],
      Os = { class: "wl-panel" },
      js = ["for", "textContent"],
      Ts = ["id", "onUpdate:modelValue", "name", "type"],
      Us = ["placeholder"],
      Ps = { class: "wl-preview" },
      Ms = Nr("hr", null, null, -1),
      Fs = ["innerHTML"],
      Ns = { class: "wl-footer" },
      Vs = { class: "wl-actions" },
      Ds = {
        href: "https://guides.github.com/features/mastering-markdown/",
        title: "Markdown Guide",
        "aria-label": "Markdown is supported",
        class: "wl-action",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      Bs = ["title"],
      Hs = ["title"],
      Ws = ["title"],
      qs = ["title"],
      Zs = { class: "wl-info" },
      Qs = { class: "wl-text-number" },
      Ks = { key: 0 },
      Gs = ["textContent"],
      Js = ["textContent"],
      Xs = ["disabled"],
      Ys = ["placeholder"],
      ea = { key: 0, class: "wl-loading" },
      ta = { key: 0, class: "wl-tab-wrapper" },
      na = ["title", "onClick"],
      ra = ["src", "alt"],
      la = { key: 0, class: "wl-tabs" },
      ia = ["onClick"],
      oa = ["src", "alt", "title"],
      sa = ["title"];
    var aa = Nn({
        __name: "CommentBox",
        props: {
          edit: { default: null },
          rootId: { default: "" },
          replyId: { default: "" },
          replyUser: { default: "" },
        },
        emits: ["log", "cancelEdit", "cancelReply", "submit"],
        setup(e, t) {
          let { expose: n, emit: r } = t;
          const l = e;
          n();
          const i = jn("config"),
            o = wi("WALINE_COMMENT_BOX_EDITOR", ""),
            s = wi("WALINE_USER_META", { nick: "", mail: "", link: "" }),
            a = ns(),
            c = Qt({}),
            u = Qt(null),
            p = Qt(null),
            d = Qt(null),
            h = Qt(null),
            f = Qt(null),
            g = Qt(null),
            m = Qt(null),
            v = Qt({ tabs: [], map: {} }),
            y = Qt(0),
            b = Qt(!1),
            w = Qt(!1),
            k = Qt(!1),
            x = Qt(""),
            _ = Qt(0),
            $ = jt({ loading: !0, list: [] }),
            C = Qt(0),
            E = Qt(!1),
            A = Qt(""),
            I = Qt(!1),
            L = il(() => i.value.locale),
            z = il(() => {
              var e;
              return Boolean(
                null === (e = a.value) || void 0 === e ? void 0 : e.token,
              );
            }),
            O = il(() => !1 !== i.value.imageUploader),
            j = (e) => {
              const t = u.value,
                n = t.selectionStart,
                r = t.selectionEnd || 0,
                l = t.scrollTop;
              (o.value =
                t.value.substring(0, n) +
                e +
                t.value.substring(r, t.value.length)),
                t.focus(),
                (t.selectionStart = n + e.length),
                (t.selectionEnd = n + e.length),
                (t.scrollTop = l);
            },
            T = (e) => {
              const t = e.key;
              (e.ctrlKey || e.metaKey) && "Enter" === t && N();
            },
            U = (e) => {
              const t = `![${i.value.locale.uploading} ${e.name}]()`;
              return (
                j(t),
                Promise.resolve()
                  .then(() => i.value.imageUploader(e))
                  .then((n) => {
                    o.value = o.value.replace(t, `\r\n![${e.name}](${n})`);
                  })
                  .catch((e) => {
                    alert(e.message), (o.value = o.value.replace(t, ""));
                  })
              );
            },
            P = (e) => {
              var t;
              if (null !== (t = e.dataTransfer) && void 0 !== t && t.items) {
                const t = Mi(e.dataTransfer.items);
                t && O.value && (U(t), e.preventDefault());
              }
            },
            M = (e) => {
              if (e.clipboardData) {
                const t = Mi(e.clipboardData.items);
                t && O.value && U(t);
              }
            },
            F = () => {
              const e = p.value;
              e.files &&
                O.value &&
                U(e.files[0]).then(() => {
                  e.value = "";
                });
            },
            N = async () => {
              var e, t;
              const {
                serverURL: n,
                lang: p,
                login: d,
                wordLimit: h,
                requiredMeta: f,
              } = i.value;
              let g = "";
              i.value.recaptchaV3Key &&
                (g = await ((e) => {
                  const t =
                    es[e] ??
                    (es[e] = Wo.load(e, {
                      useRecaptchaNet: !0,
                      autoHideBadge: !0,
                    }));
                  return { execute: (e) => t.then((t) => t.execute(e)) };
                })(i.value.recaptchaV3Key).execute("social"));
              const m = {
                comment: A.value,
                nick: s.value.nick,
                mail: s.value.mail,
                link: s.value.link,
                ua: navigator.userAgent,
                url: i.value.path,
                recaptchaV3: g,
              };
              if (null !== (e = a.value) && void 0 !== e && e.token)
                (m.nick = a.value.display_name),
                  (m.mail = a.value.email),
                  (m.link = a.value.url);
              else {
                var y, b, w;
                if ("force" === d) return;
                if (f.indexOf("nick") > -1 && !m.nick)
                  return (
                    null !== (y = c.value.nick) && void 0 !== y && y.focus(),
                    alert(L.value.nickError)
                  );
                if (
                  (f.indexOf("mail") > -1 && !m.mail) ||
                  (m.mail &&
                    !/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(
                      m.mail,
                    ))
                )
                  return (
                    null !== (b = c.value.mail) && void 0 !== b && b.focus(),
                    alert(L.value.mailError)
                  );
                if (!m.comment)
                  return void (
                    null === (w = u.value) ||
                    void 0 === w ||
                    w.focus()
                  );
                m.nick || (m.nick = L.value.anonymous);
              }
              if (!E.value)
                return alert(
                  L.value.wordHint
                    .replace("$0", h[0].toString())
                    .replace("$1", h[1].toString())
                    .replace("$2", _.value.toString()),
                );
              (m.comment = So(m.comment, v.value.map)),
                l.replyId &&
                  l.rootId &&
                  ((m.pid = l.replyId),
                  (m.rid = l.rootId),
                  (m.at = l.replyUser)),
                (I.value = !0);
              const k = {
                serverURL: n,
                lang: p,
                token:
                  null === (t = a.value) || void 0 === t ? void 0 : t.token,
                comment: m,
              };
              (l.edit
                ? S({ objectId: l.edit.objectId, ...k })
                : ((e) => {
                    let { serverURL: t, lang: n, token: r, comment: l } = e;
                    const i = { "Content-Type": "application/json" };
                    return (
                      r && (i.Authorization = `Bearer ${r}`),
                      fetch(`${t}/comment?lang=${n}`, {
                        method: "POST",
                        headers: i,
                        body: JSON.stringify(l),
                      }).then((e) => e.json())
                    );
                  })(k)
              )
                .then((e) => {
                  var t;
                  if (((I.value = !1), e.errmsg)) return alert(e.errmsg);
                  r("submit", e.data),
                    (o.value = ""),
                    (x.value = ""),
                    l.replyId && r("cancelReply"),
                    (null === (t = l.edit) || void 0 === t
                      ? void 0
                      : t.objectId) && r("cancelEdit");
                })
                .catch((e) => {
                  (I.value = !1), alert(e.message);
                });
            },
            D = (e) => {
              e.preventDefault();
              const { lang: t, serverURL: n } = i.value;
              ((e) => {
                let { lang: t, serverURL: n } = e;
                const r = (window.innerWidth - 450) / 2,
                  l = (window.innerHeight - 450) / 2,
                  i = window.open(
                    `${n}/ui/login?lng=${encodeURIComponent(t)}`,
                    "_blank",
                    `width=450,height=450,left=${r},top=${l},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`,
                  );
                return (
                  null != i &&
                    i.postMessage({ type: "TOKEN", data: null }, "*"),
                  new Promise((e) => {
                    const t = (n) => {
                      let { data: r } = n;
                      r &&
                        "object" == typeof r &&
                        "userInfo" === r.type &&
                        r.data.token &&
                        (null != i && i.close(),
                        window.removeEventListener("message", t),
                        e(r.data));
                    };
                    window.addEventListener("message", t);
                  })
                );
              })({ serverURL: n, lang: t }).then((e) => {
                (a.value = e),
                  (e.remember ? localStorage : sessionStorage).setItem(
                    "WALINE_USER",
                    JSON.stringify(e),
                  ),
                  r("log");
              });
            },
            B = () => {
              (a.value = {}),
                localStorage.setItem("WALINE_USER", "null"),
                sessionStorage.setItem("WALINE_USER", "null"),
                r("log");
            },
            H = (e) => {
              var t;
              e.preventDefault();
              const { lang: n, serverURL: r } = i.value,
                l = (window.innerWidth - 800) / 2,
                o = (window.innerHeight - 800) / 2,
                s = new URLSearchParams({ lng: n, token: a.value.token });
              null ===
                (t = window.open(
                  `${r}/ui/profile?${s.toString()}`,
                  "_blank",
                  `width=800,height=800,left=${l},top=${o},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`,
                )) ||
                void 0 === t ||
                t.postMessage({ type: "TOKEN", data: a.value.token }, "*");
            },
            W = (e) => {
              var t, n, r, l;
              (null !== (t = d.value) &&
                void 0 !== t &&
                t.contains(e.target)) ||
                (null !== (n = h.value) &&
                  void 0 !== n &&
                  n.contains(e.target)) ||
                (b.value = !1),
                (null === (r = f.value) || void 0 === r
                  ? void 0
                  : r.contains(e.target)) ||
                  (null === (l = g.value) || void 0 === l
                    ? void 0
                    : l.contains(e.target)) ||
                  (w.value = !1);
            },
            Z = async (e) => {
              var t;
              const {
                  scrollTop: n,
                  clientHeight: r,
                  scrollHeight: l,
                } = e.target,
                o = (r + n) / l,
                s = i.value.search,
                a =
                  (null === (t = m.value) || void 0 === t ? void 0 : t.value) ||
                  "";
              o < 0.9 ||
                $.loading ||
                (($.loading = !0),
                ($.list = [
                  ...$.list,
                  ...(s.more && $.list.length
                    ? await s.more(a, $.list.length)
                    : await s.search(a)),
                ]),
                ($.loading = !1),
                setTimeout(() => {
                  e.target.scrollTop = n;
                }, 50));
            },
            Q = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 200,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              return Wl(
                (function (e) {
                  let t,
                    n,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    l = Bl;
                  const i = (e) => {
                    clearTimeout(e), l(), (l = Bl);
                  };
                  return (o) => {
                    const s = Hl(e),
                      a = Hl(r.maxWait);
                    return (
                      t && i(t),
                      s <= 0 || (void 0 !== a && a <= 0)
                        ? (n && (i(n), (n = null)), Promise.resolve(o()))
                        : new Promise((e, c) => {
                            (l = r.rejectOnCancel ? c : e),
                              a &&
                                !n &&
                                (n = setTimeout(() => {
                                  t && i(t), (n = null), e(o());
                                }, a)),
                              (t = setTimeout(() => {
                                n && i(n), (n = null), e(o());
                              }, s));
                          })
                    );
                  };
                })(t, n),
                e,
              );
            })((e) => {
              ($.list = []), Z(e);
            }, 300);
          Pn(
            [i, _],
            (e) => {
              let [t, n] = e;
              const { wordLimit: r } = t;
              r
                ? n < r[0] && 0 !== r[0]
                  ? ((C.value = r[0]), (E.value = !1))
                  : n > r[1]
                    ? ((C.value = r[1]), (E.value = !1))
                    : ((C.value = r[1]), (E.value = !0))
                : ((C.value = 0), (E.value = !0));
            },
            { immediate: !0 },
          );
          const K = (e) => {
            let { data: t } = e;
            t &&
              "profile" === t.type &&
              ((a.value = { ...a.value, ...t.data }),
              [localStorage, sessionStorage]
                .filter((e) => e.getItem("WALINE_USER"))
                .forEach((e) => e.setItem("WALINE_USER", JSON.stringify(a))));
          };
          return (
            Bn(() => {
              var e;
              document.body.addEventListener("click", W),
                window.addEventListener("message", K),
                null !== (e = l.edit) &&
                  void 0 !== e &&
                  e.objectId &&
                  (o.value = l.edit.orig),
                Pn(w, async (e) => {
                  if (!e) return;
                  const t = i.value.search;
                  m.value && (m.value.value = ""),
                    ($.loading = !0),
                    ($.list = t.default
                      ? await t.default()
                      : await t.search("")),
                    ($.loading = !1);
                }),
                Pn(
                  () => o.value,
                  (e) => {
                    const { highlighter: t, texRenderer: n } = i.value;
                    (A.value = e),
                      (x.value = ((e, t) => {
                        let { emojiMap: n, highlighter: r, texRenderer: l } = t;
                        if (
                          (xo.setOptions({
                            highlight: r || void 0,
                            breaks: !0,
                            smartLists: !0,
                            smartypants: !0,
                          }),
                          l)
                        ) {
                          const e = ((e) => [
                            {
                              name: "blockMath",
                              level: "block",
                              tokenizer(t) {
                                const n = Co.exec(t);
                                if (null !== n)
                                  return {
                                    type: "html",
                                    raw: n[0],
                                    text: e(!0, n[1]),
                                  };
                              },
                            },
                            {
                              name: "inlineMath",
                              level: "inline",
                              start(e) {
                                const t = e.search(_o);
                                return -1 !== t ? t : e.length;
                              },
                              tokenizer(t) {
                                const n = $o.exec(t);
                                if (null !== n)
                                  return {
                                    type: "html",
                                    raw: n[0],
                                    text: e(!1, n[1]),
                                  };
                              },
                            },
                          ])(l);
                          xo.use({ extensions: e });
                        }
                        return xo.parse(So(e, n));
                      })(e, {
                        emojiMap: v.value.map,
                        highlighter: t,
                        texRenderer: n,
                      })),
                      (_.value = ((e) =>
                        ((e) => e.match(/[\w\d\s\u00C0-\u024F]+/giu) || [])(
                          e,
                        ).reduce(
                          (e, t) =>
                            e +
                            ("" === t.trim()
                              ? 0
                              : t.trim().split(/\s+/u).length),
                          0,
                        ) +
                        ((e) => e.match(/[\u4E00-\u9FA5]/gu) || [])(e).length)(
                        e,
                      )),
                      e ? ks(u.value) : ks.destroy(u.value);
                  },
                  { immediate: !0 },
                ),
                Pn(
                  () => i.value.emoji,
                  (e) => {
                    return ((t = e),
                    Promise.all(
                      t.map((e) =>
                        "string" == typeof e
                          ? ((e) => {
                              const t = wi("WALINE_EMOJI", {}),
                                n = Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(e));
                              if (n) {
                                const n = t.value[e];
                                if (n) return Promise.resolve(n);
                              }
                              return fetch(`${e}/info.json`)
                                .then((e) => e.json())
                                .then((r) => {
                                  const l = { folder: e, ...r };
                                  return n && (t.value[e] = l), l;
                                });
                            })(R(e))
                          : Promise.resolve(e),
                      ),
                    ).then((e) => {
                      const t = { tabs: [], map: {} };
                      return (
                        e.forEach((e) => {
                          const {
                            name: n,
                            folder: r,
                            icon: l,
                            prefix: i,
                            type: o,
                            items: s,
                          } = e;
                          t.tabs.push({
                            name: n,
                            icon: ji(l, r, i, o),
                            items: s.map((e) => {
                              const n = `${i || ""}${e}`;
                              return (t.map[n] = ji(e, r, i, o)), n;
                            }),
                          });
                        }),
                        t
                      );
                    })).then((e) => {
                      v.value = e;
                    });
                    var t;
                  },
                  { immediate: !0 },
                );
            }),
            Wn(() => {
              document.body.removeEventListener("click", W),
                window.removeEventListener("message", K);
            }),
            (t, n) => {
              var r, l;
              return (
                Ar(),
                Or("div", Ss, [
                  "disable" === Xt(i).login ||
                  !Xt(z) ||
                  (null !== (r = e.edit) && void 0 !== r && r.objectId)
                    ? Hr("v-if", !0)
                    : (Ar(),
                      Or("div", Es, [
                        Nr("div", Rs, [
                          Nr(
                            "button",
                            {
                              type: "submit",
                              class: "wl-logout-btn",
                              title: Xt(L).logout,
                              onClick: B,
                            },
                            [Vr(Xt(Ao), { size: 14 })],
                            8,
                            As,
                          ),
                          Nr(
                            "a",
                            {
                              href: "#",
                              class: "wl-login-nick",
                              "aria-label": "Profile",
                              title: Xt(L).profile,
                              onClick: H,
                            },
                            [
                              Nr(
                                "img",
                                { src: Xt(a).avatar, alt: "avatar" },
                                null,
                                8,
                                Ls,
                              ),
                            ],
                            8,
                            Is,
                          ),
                        ]),
                        Nr(
                          "a",
                          {
                            href: "#",
                            class: "wl-login-nick",
                            "aria-label": "Profile",
                            title: Xt(L).profile,
                            onClick: H,
                            textContent: q(Xt(a).display_name),
                          },
                          null,
                          8,
                          zs,
                        ),
                      ])),
                  Nr("div", Os, [
                    "force" !== Xt(i).login && Xt(i).meta.length && !Xt(z)
                      ? (Ar(),
                        Or(
                          "div",
                          {
                            key: 0,
                            class: V(["wl-header", `item${Xt(i).meta.length}`]),
                          },
                          [
                            (Ar(!0),
                            Or(
                              _r,
                              null,
                              Jn(
                                Xt(i).meta,
                                (e) => (
                                  Ar(),
                                  Or(
                                    "div",
                                    { key: e, class: "wl-header-item" },
                                    [
                                      Nr(
                                        "label",
                                        {
                                          for: `wl-${e}`,
                                          textContent: q(
                                            Xt(L)[e] +
                                              (Xt(i).requiredMeta.includes(e) ||
                                              !Xt(i).requiredMeta.length
                                                ? ""
                                                : `(${Xt(L).optional})`),
                                          ),
                                        },
                                        null,
                                        8,
                                        js,
                                      ),
                                      qn(
                                        Nr(
                                          "input",
                                          {
                                            id: `wl-${e}`,
                                            ref_for: !0,
                                            ref: (t) => {
                                              t && (c.value[e] = t);
                                            },
                                            "onUpdate:modelValue": (t) =>
                                              (Xt(s)[e] = t),
                                            class: V(["wl-input", `wl-${e}`]),
                                            name: e,
                                            type:
                                              "mail" === e ? "email" : "text",
                                          },
                                          null,
                                          10,
                                          Ts,
                                        ),
                                        [[Tl, Xt(s)[e]]],
                                      ),
                                    ],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ],
                          2,
                        ))
                      : Hr("v-if", !0),
                    qn(
                      Nr(
                        "textarea",
                        {
                          id: "wl-edit",
                          ref_key: "editorRef",
                          ref: u,
                          "onUpdate:modelValue":
                            n[0] ||
                            (n[0] = (e) => (Zt(o) ? (o.value = e) : null)),
                          class: "wl-editor",
                          placeholder: e.replyUser
                            ? `@${e.replyUser}`
                            : Xt(L).placeholder,
                          onKeydown: T,
                          onDrop: P,
                          onPaste: M,
                        },
                        null,
                        40,
                        Us,
                      ),
                      [[El, Xt(o)]],
                    ),
                    qn(
                      Nr(
                        "div",
                        Ps,
                        [
                          Ms,
                          Nr("h4", null, q(Xt(L).preview) + ":", 1),
                          Nr(
                            "div",
                            { class: "wl-content", innerHTML: x.value },
                            null,
                            8,
                            Fs,
                          ),
                        ],
                        512,
                      ),
                      [[Pl, k.value]],
                    ),
                    Nr("div", Ns, [
                      Nr("div", Vs, [
                        Nr("a", Ds, [Vr(Xt(To))]),
                        qn(
                          Nr(
                            "button",
                            {
                              ref_key: "emojiButtonRef",
                              ref: d,
                              type: "button",
                              class: V(["wl-action", { active: b.value }]),
                              title: Xt(L).emoji,
                              onClick:
                                n[1] || (n[1] = (e) => (b.value = !b.value)),
                            },
                            [Vr(Xt(Lo))],
                            10,
                            Bs,
                          ),
                          [[Pl, v.value.tabs.length]],
                        ),
                        Xt(i).search
                          ? (Ar(),
                            Or(
                              "button",
                              {
                                key: 0,
                                ref_key: "gifButtonRef",
                                ref: f,
                                type: "button",
                                class: V(["wl-action", { active: w.value }]),
                                title: Xt(L).gif,
                                onClick:
                                  n[2] || (n[2] = (e) => (w.value = !w.value)),
                              },
                              [Vr(Xt(No))],
                              10,
                              Hs,
                            ))
                          : Hr("v-if", !0),
                        Nr(
                          "input",
                          {
                            id: "wl-image-upload",
                            ref_key: "imageUploadRef",
                            ref: p,
                            class: "upload",
                            type: "file",
                            accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
                            onChange: F,
                          },
                          null,
                          544,
                        ),
                        Xt(O)
                          ? (Ar(),
                            Or(
                              "label",
                              {
                                key: 1,
                                for: "wl-image-upload",
                                class: "wl-action",
                                title: Xt(L).uploadImage,
                              },
                              [Vr(Xt(zo))],
                              8,
                              Ws,
                            ))
                          : Hr("v-if", !0),
                        Nr(
                          "button",
                          {
                            type: "button",
                            class: V(["wl-action", { active: k.value }]),
                            title: Xt(L).preview,
                            onClick:
                              n[3] || (n[3] = (e) => (k.value = !k.value)),
                          },
                          [Vr(Xt(jo))],
                          10,
                          qs,
                        ),
                      ]),
                      Nr("div", Zs, [
                        Nr("div", Qs, [
                          Br(q(_.value) + " ", 1),
                          Xt(i).wordLimit
                            ? (Ar(),
                              Or("span", Ks, [
                                Br("  /  "),
                                Nr(
                                  "span",
                                  {
                                    class: V({ illegal: !E.value }),
                                    textContent: q(C.value),
                                  },
                                  null,
                                  10,
                                  Gs,
                                ),
                              ]))
                            : Hr("v-if", !0),
                          Br("  " + q(Xt(L).word), 1),
                        ]),
                        "disable" === Xt(i).login || Xt(z)
                          ? Hr("v-if", !0)
                          : (Ar(),
                            Or(
                              "button",
                              {
                                key: 0,
                                type: "button",
                                class: "wl-btn",
                                onClick: D,
                                textContent: q(Xt(L).login),
                              },
                              null,
                              8,
                              Js,
                            )),
                        "force" !== Xt(i).login || Xt(z)
                          ? (Ar(),
                            Or(
                              "button",
                              {
                                key: 1,
                                type: "submit",
                                class: "primary wl-btn",
                                title: "Cmd|Ctrl + Enter",
                                disabled: I.value,
                                onClick: N,
                              },
                              [
                                I.value
                                  ? (Ar(), jr(Xt(Fo), { key: 0, size: 16 }))
                                  : (Ar(),
                                    Or(
                                      _r,
                                      { key: 1 },
                                      [Br(q(Xt(L).submit), 1)],
                                      64,
                                    )),
                              ],
                              8,
                              Xs,
                            ))
                          : Hr("v-if", !0),
                      ]),
                      Nr(
                        "div",
                        {
                          ref_key: "gifPopupRef",
                          ref: g,
                          class: V(["wl-gif-popup", { display: w.value }]),
                        },
                        [
                          Nr(
                            "input",
                            {
                              ref_key: "gifSearchInputRef",
                              ref: m,
                              type: "text",
                              placeholder: Xt(L).gifSearchPlaceholder,
                              onInput:
                                n[4] ||
                                (n[4] = function () {
                                  return Xt(Q) && Xt(Q)(...arguments);
                                }),
                            },
                            null,
                            40,
                            Ys,
                          ),
                          Vr(
                            Cs,
                            {
                              items: $.list,
                              "column-width": 200,
                              gap: 6,
                              onInsert: n[5] || (n[5] = (e) => j(e)),
                              onScroll: Z,
                            },
                            null,
                            8,
                            ["items"],
                          ),
                          $.loading
                            ? (Ar(), Or("div", ea, [Vr(Xt(Fo), { size: 30 })]))
                            : Hr("v-if", !0),
                        ],
                        2,
                      ),
                      Nr(
                        "div",
                        {
                          ref_key: "emojiPopupRef",
                          ref: h,
                          class: V(["wl-emoji-popup", { display: b.value }]),
                        },
                        [
                          (Ar(!0),
                          Or(
                            _r,
                            null,
                            Jn(
                              v.value.tabs,
                              (e, t) => (
                                Ar(),
                                Or(
                                  _r,
                                  { key: e.name },
                                  [
                                    t === y.value
                                      ? (Ar(),
                                        Or("div", ta, [
                                          (Ar(!0),
                                          Or(
                                            _r,
                                            null,
                                            Jn(
                                              e.items,
                                              (e) => (
                                                Ar(),
                                                Or(
                                                  "button",
                                                  {
                                                    key: e,
                                                    type: "button",
                                                    title: e,
                                                    onClick: (t) => j(`:${e}:`),
                                                  },
                                                  [
                                                    b.value
                                                      ? (Ar(),
                                                        Or(
                                                          "img",
                                                          {
                                                            key: 0,
                                                            class: "wl-emoji",
                                                            src: v.value.map[e],
                                                            alt: e,
                                                            loading: "lazy",
                                                            referrerPolicy:
                                                              "no-referrer",
                                                          },
                                                          null,
                                                          8,
                                                          ra,
                                                        ))
                                                      : Hr("v-if", !0),
                                                  ],
                                                  8,
                                                  na,
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ]))
                                      : Hr("v-if", !0),
                                  ],
                                  64,
                                )
                              ),
                            ),
                            128,
                          )),
                          v.value.tabs.length > 1
                            ? (Ar(),
                              Or("div", la, [
                                (Ar(!0),
                                Or(
                                  _r,
                                  null,
                                  Jn(
                                    v.value.tabs,
                                    (e, t) => (
                                      Ar(),
                                      Or(
                                        "button",
                                        {
                                          key: e.name,
                                          type: "button",
                                          class: V([
                                            "wl-tab",
                                            { active: y.value === t },
                                          ]),
                                          onClick: (e) => (y.value = t),
                                        },
                                        [
                                          Nr(
                                            "img",
                                            {
                                              class: "wl-emoji",
                                              src: e.icon,
                                              alt: e.name,
                                              title: e.name,
                                              loading: "lazy",
                                              referrerPolicy: "no-referrer",
                                            },
                                            null,
                                            8,
                                            oa,
                                          ),
                                        ],
                                        10,
                                        ia,
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]))
                            : Hr("v-if", !0),
                        ],
                        2,
                      ),
                    ]),
                  ]),
                  e.replyId ||
                  (null !== (l = e.edit) && void 0 !== l && l.objectId)
                    ? (Ar(),
                      Or(
                        "button",
                        {
                          key: 1,
                          type: "button",
                          class: "wl-close",
                          title: Xt(L).cancelReply,
                          onClick:
                            n[6] ||
                            (n[6] = (n) =>
                              t.$emit(
                                e.replyId ? "cancelReply" : "cancelEdit",
                              )),
                        },
                        [Vr(Xt(Ao), { size: 24 })],
                        8,
                        sa,
                      ))
                    : Hr("v-if", !0),
                ])
              );
            }
          );
        },
      }),
      ca = fs(aa, [["__file", "CommentBox.vue"]]);
    const ua = ["id"],
      pa = { class: "wl-user", "aria-hidden": "true" },
      da = ["src"],
      ha = { class: "wl-card" },
      fa = { class: "wl-head" },
      ga = ["href"],
      ma = { key: 1, class: "wl-nick" },
      va = ["textContent"],
      ya = ["textContent"],
      ba = ["textContent"],
      wa = ["textContent"],
      ka = ["textContent"],
      xa = { class: "wl-comment-actions" },
      _a = ["title"],
      $a = ["textContent"],
      Ca = ["title"],
      Sa = { class: "wl-meta", "aria-hidden": "true" },
      Ea = ["data-value", "textContent"],
      Ra = ["data-value", "textContent"],
      Aa = ["data-value", "textContent"],
      Ia = ["innerHTML"],
      La = { key: 1, class: "wl-admin-actions" },
      za = { class: "wl-comment-status" },
      Oa = ["disabled", "onClick", "textContent"],
      ja = { key: 3, class: "wl-quote" };
    var Ta = fs(
      Nn({
        __name: "CommentCard",
        props: {
          comment: null,
          edit: { default: null },
          rootId: null,
          reply: { default: null },
        },
        emits: [
          "log",
          "submit",
          "delete",
          "edit",
          "like",
          "status",
          "sticky",
          "reply",
        ],
        setup(e) {
          const t = e,
            n = ["approved", "waiting", "spam"],
            r = jn("config"),
            l = Do(),
            i = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              const {
                  controls: t = !1,
                  interval: n = "requestAnimationFrame",
                } = e,
                r = Qt(new Date()),
                l = () => (r.value = new Date()),
                i =
                  "requestAnimationFrame" === n
                    ? (function (e) {
                        let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        const { immediate: n = !0, window: r = si } = t,
                          l = Qt(!1);
                        let i = 0,
                          o = null;
                        function s(t) {
                          l.value &&
                            r &&
                            (e({ delta: t - i, timestamp: t }),
                            (i = t),
                            (o = r.requestAnimationFrame(s)));
                        }
                        function a() {
                          !l.value &&
                            r &&
                            ((l.value = !0), (o = r.requestAnimationFrame(s)));
                        }
                        function c() {
                          (l.value = !1),
                            null != o &&
                              r &&
                              (r.cancelAnimationFrame(o), (o = null));
                        }
                        return (
                          n && a(), Zl(c), { isActive: l, pause: c, resume: a }
                        );
                      })(l, { immediate: !0 })
                    : (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 1e3,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        const { immediate: r = !0, immediateCallback: l = !1 } =
                          n;
                        let i = null;
                        const o = Qt(!1);
                        function s() {
                          i && (clearInterval(i), (i = null));
                        }
                        function a() {
                          (o.value = !1), s();
                        }
                        function c() {
                          Xt(t) <= 0 ||
                            ((o.value = !0),
                            l && e(),
                            s(),
                            (i = setInterval(e, Hl(t))));
                        }
                        return (
                          r && Vl && c(),
                          (Zt(t) || Dl(t)) &&
                            Zl(
                              Pn(t, () => {
                                o.value && Vl && c();
                              }),
                            ),
                          Zl(a),
                          { isActive: o, pause: a, resume: c }
                        );
                      })(l, n, { immediate: !0 });
              return t
                ? ((e, t) => {
                    for (var n in t || (t = {}))
                      Ci.call(t, n) && Ei(e, n, t[n]);
                    if ($i)
                      for (var n of $i(t)) Si.call(t, n) && Ei(e, n, t[n]);
                    return e;
                  })({ now: r }, i)
                : r;
            })(),
            o = ns(),
            s = il(() => r.value.locale),
            a = il(() => {
              const { link: e } = t.comment;
              return e ? (A(e) ? e : `https://${e}`) : "";
            }),
            c = il(() => l.value.includes(t.comment.objectId)),
            u = il(() =>
              ((e, t, n) => {
                if (!e) return "";
                const r =
                    "string" == typeof e
                      ? new Date(
                          -1 !== e.indexOf(" ") ? e.replace(/-/g, "/") : e,
                        )
                      : e,
                  l = t.getTime() - r.getTime(),
                  i = Math.floor(l / 864e5);
                if (0 === i) {
                  const e = l % 864e5,
                    t = Math.floor(e / 36e5);
                  if (0 === t) {
                    const t = e % 36e5,
                      r = Math.floor(t / 6e4);
                    if (0 === r) {
                      const e = t % 6e4;
                      return `${Math.round(e / 1e3)} ${n.seconds}`;
                    }
                    return `${r} ${n.minutes}`;
                  }
                  return `${t} ${n.hours}`;
                }
                return i < 0
                  ? n.now
                  : i < 8
                    ? `${i} ${n.days}`
                    : ((e) => {
                        const t = j(e.getDate(), 2),
                          n = j(e.getMonth() + 1, 2);
                        return `${j(e.getFullYear(), 2)}-${n}-${t}`;
                      })(r);
              })(t.comment.insertedAt, i.value, s.value),
            ),
            p = il(() => "administrator" === o.value.type),
            d = il(
              () => t.comment.user_id && o.value.objectId === t.comment.user_id,
            ),
            h = il(() => {
              var e;
              return (
                t.comment.objectId ===
                (null === (e = t.reply) || void 0 === e ? void 0 : e.objectId)
              );
            }),
            f = il(() => {
              var e;
              return (
                t.comment.objectId ===
                (null === (e = t.edit) || void 0 === e ? void 0 : e.objectId)
              );
            });
          return (t, r) => {
            var l;
            const i = (function (e, t) {
              return (
                (function (e, t) {
                  let n =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  const r = En || Jr;
                  if (r) {
                    const l = r.type;
                    if (e === Qn) {
                      const e = (function (e) {
                        let t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                        return ce(e)
                          ? e.displayName || e.name
                          : e.name || (t && e.__name);
                      })(l, !1);
                      if (e && (e === t || e === ke(t) || e === $e(ke(t))))
                        return l;
                    }
                    const i = Gn(r[e] || l[e], t) || Gn(r.appContext[e], t);
                    return !i && n ? l : i;
                  }
                })(Qn, e, !0, t) || e
              );
            })("CommentCard", !0);
            return (
              Ar(),
              Or(
                "div",
                { id: e.comment.objectId, class: "wl-item" },
                [
                  Nr("div", pa, [
                    e.comment.avatar
                      ? (Ar(),
                        Or(
                          "img",
                          { key: 0, src: e.comment.avatar },
                          null,
                          8,
                          da,
                        ))
                      : Hr("v-if", !0),
                    e.comment.type
                      ? (Ar(), jr(Xt(Mo), { key: 1 }))
                      : Hr("v-if", !0),
                  ]),
                  Nr("div", ha, [
                    Nr("div", fa, [
                      Xt(a)
                        ? (Ar(),
                          Or(
                            "a",
                            {
                              key: 0,
                              class: "wl-nick",
                              href: Xt(a),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            q(e.comment.nick),
                            9,
                            ga,
                          ))
                        : (Ar(), Or("span", ma, q(e.comment.nick), 1)),
                      "administrator" === e.comment.type
                        ? (Ar(),
                          Or(
                            "span",
                            {
                              key: 2,
                              class: "wl-badge",
                              textContent: q(Xt(s).admin),
                            },
                            null,
                            8,
                            va,
                          ))
                        : Hr("v-if", !0),
                      e.comment.label
                        ? (Ar(),
                          Or(
                            "span",
                            {
                              key: 3,
                              class: "wl-badge",
                              textContent: q(e.comment.label),
                            },
                            null,
                            8,
                            ya,
                          ))
                        : Hr("v-if", !0),
                      e.comment.sticky
                        ? (Ar(),
                          Or(
                            "span",
                            {
                              key: 4,
                              class: "wl-badge",
                              textContent: q(Xt(s).sticky),
                            },
                            null,
                            8,
                            ba,
                          ))
                        : Hr("v-if", !0),
                      void 0 !== e.comment.level && e.comment.level >= 0
                        ? (Ar(),
                          Or(
                            "span",
                            {
                              key: 5,
                              class: V(`wl-badge level${e.comment.level}`),
                              textContent: q(
                                Xt(s)[`level${e.comment.level}`] ||
                                  `Level ${e.comment.level}`,
                              ),
                            },
                            null,
                            10,
                            wa,
                          ))
                        : Hr("v-if", !0),
                      Nr(
                        "span",
                        { class: "wl-time", textContent: q(Xt(u)) },
                        null,
                        8,
                        ka,
                      ),
                      Nr("div", xa, [
                        Xt(p) || Xt(d)
                          ? (Ar(),
                            Or(
                              "button",
                              {
                                key: 0,
                                type: "button",
                                class: "wl-edit",
                                onClick:
                                  r[0] ||
                                  (r[0] = () => t.$emit("edit", e.comment)),
                              },
                              [Vr(Xt(Po))],
                            ))
                          : Hr("v-if", !0),
                        Xt(p) || Xt(d)
                          ? (Ar(),
                            Or(
                              "button",
                              {
                                key: 1,
                                type: "button",
                                class: "wl-delete",
                                onClick:
                                  r[1] ||
                                  (r[1] = (n) => t.$emit("delete", e.comment)),
                              },
                              [Vr(Xt(Io))],
                            ))
                          : Hr("v-if", !0),
                        Nr(
                          "button",
                          {
                            type: "button",
                            class: "wl-like",
                            title: Xt(c) ? Xt(s).cancelLike : Xt(s).like,
                            onClick:
                              r[2] ||
                              (r[2] = (n) => t.$emit("like", e.comment)),
                          },
                          [
                            Vr(Xt(Oo), { active: Xt(c) }, null, 8, ["active"]),
                            "like" in e.comment
                              ? (Ar(),
                                Or(
                                  "span",
                                  { key: 0, textContent: q(e.comment.like) },
                                  null,
                                  8,
                                  $a,
                                ))
                              : Hr("v-if", !0),
                          ],
                          8,
                          _a,
                        ),
                        Nr(
                          "button",
                          {
                            type: "button",
                            class: V(["wl-reply", { active: Xt(h) }]),
                            title: Xt(h) ? Xt(s).cancelReply : Xt(s).reply,
                            onClick:
                              r[3] ||
                              (r[3] = (n) =>
                                t.$emit("reply", Xt(h) ? null : e.comment)),
                          },
                          [Vr(Xt(Uo))],
                          10,
                          Ca,
                        ),
                      ]),
                    ]),
                    Nr("div", Sa, [
                      e.comment.addr
                        ? (Ar(),
                          Or(
                            "span",
                            {
                              key: 0,
                              class: "wl-addr",
                              "data-value": e.comment.addr,
                              textContent: q(e.comment.addr),
                            },
                            null,
                            8,
                            Ea,
                          ))
                        : Hr("v-if", !0),
                      e.comment.browser
                        ? (Ar(),
                          Or(
                            "span",
                            {
                              key: 1,
                              class: "wl-browser",
                              "data-value": e.comment.browser,
                              textContent: q(e.comment.browser),
                            },
                            null,
                            8,
                            Ra,
                          ))
                        : Hr("v-if", !0),
                      e.comment.os
                        ? (Ar(),
                          Or(
                            "span",
                            {
                              key: 2,
                              class: "wl-os",
                              "data-value": e.comment.os,
                              textContent: q(e.comment.os),
                            },
                            null,
                            8,
                            Aa,
                          ))
                        : Hr("v-if", !0),
                    ]),
                    Xt(f)
                      ? Hr("v-if", !0)
                      : (Ar(),
                        Or(
                          "div",
                          {
                            key: 0,
                            class: "wl-content",
                            innerHTML: e.comment.comment,
                          },
                          null,
                          8,
                          Ia,
                        )),
                    Xt(p) && !Xt(f)
                      ? (Ar(),
                        Or("div", La, [
                          Nr("span", za, [
                            (Ar(),
                            Or(
                              _r,
                              null,
                              Jn(n, (n) =>
                                Nr(
                                  "button",
                                  {
                                    key: n,
                                    type: "submit",
                                    class: V(`wl-btn wl-${n}`),
                                    disabled: e.comment.status === n,
                                    onClick: (r) =>
                                      t.$emit("status", {
                                        status: n,
                                        comment: e.comment,
                                      }),
                                    textContent: q(Xt(s)[n]),
                                  },
                                  null,
                                  10,
                                  Oa,
                                ),
                              ),
                              64,
                            )),
                          ]),
                          Xt(p) && !e.comment.rid
                            ? (Ar(),
                              Or(
                                "button",
                                {
                                  key: 0,
                                  type: "submit",
                                  class: "wl-btn wl-sticky",
                                  onClick:
                                    r[4] ||
                                    (r[4] = (n) =>
                                      t.$emit("sticky", e.comment)),
                                },
                                q(
                                  e.comment.sticky
                                    ? Xt(s).unsticky
                                    : Xt(s).sticky,
                                ),
                                1,
                              ))
                            : Hr("v-if", !0),
                        ]))
                      : Hr("v-if", !0),
                    Xt(h) || Xt(f)
                      ? (Ar(),
                        Or(
                          "div",
                          {
                            key: 2,
                            class: V({
                              "wl-reply-wrapper": Xt(h),
                              "wl-edit-wrapper": Xt(f),
                            }),
                          },
                          [
                            Vr(
                              ca,
                              {
                                edit: e.edit,
                                "reply-id":
                                  null === (l = e.reply) || void 0 === l
                                    ? void 0
                                    : l.objectId,
                                "reply-user": e.comment.nick,
                                "root-id": e.rootId,
                                onLog: r[5] || (r[5] = (e) => t.$emit("log")),
                                onCancelReply:
                                  r[6] ||
                                  (r[6] = (e) => t.$emit("reply", null)),
                                onCancelEdit:
                                  r[7] || (r[7] = (e) => t.$emit("edit", null)),
                                onSubmit:
                                  r[8] || (r[8] = (e) => t.$emit("submit", e)),
                              },
                              null,
                              8,
                              ["edit", "reply-id", "reply-user", "root-id"],
                            ),
                          ],
                          2,
                        ))
                      : Hr("v-if", !0),
                    e.comment.children
                      ? (Ar(),
                        Or("div", ja, [
                          (Ar(!0),
                          Or(
                            _r,
                            null,
                            Jn(
                              e.comment.children,
                              (n) => (
                                Ar(),
                                jr(
                                  i,
                                  {
                                    key: n.objectId,
                                    comment: n,
                                    reply: e.reply,
                                    edit: e.edit,
                                    "root-id": e.rootId,
                                    onLog:
                                      r[9] || (r[9] = (e) => t.$emit("log")),
                                    onDelete:
                                      r[10] ||
                                      (r[10] = (e) => t.$emit("delete", e)),
                                    onEdit:
                                      r[11] ||
                                      (r[11] = (e) => t.$emit("edit", e)),
                                    onLike:
                                      r[12] ||
                                      (r[12] = (e) => t.$emit("like", e)),
                                    onReply:
                                      r[13] ||
                                      (r[13] = (e) => t.$emit("reply", e)),
                                    onStatus:
                                      r[14] ||
                                      (r[14] = (e) => t.$emit("status", e)),
                                    onSticky:
                                      r[15] ||
                                      (r[15] = (e) => t.$emit("sticky", e)),
                                    onSubmit:
                                      r[16] ||
                                      (r[16] = (e) => t.$emit("submit", e)),
                                  },
                                  null,
                                  8,
                                  ["comment", "reply", "edit", "root-id"],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : Hr("v-if", !0),
                  ]),
                ],
                8,
                ua,
              )
            );
          };
        },
      }),
      [["__file", "CommentCard.vue"]],
    );
    const Ua = "2.14.5",
      Pa = { "data-waline": "" },
      Ma = { class: "wl-meta-head" },
      Fa = { class: "wl-count" },
      Na = ["textContent"],
      Va = { class: "wl-sort" },
      Da = ["onClick"],
      Ba = { class: "wl-cards" },
      Ha = { key: 1, class: "wl-operation" },
      Wa = ["textContent"],
      qa = { key: 0, class: "wl-loading" },
      Za = ["textContent"],
      Qa = { key: 2, class: "wl-operation" },
      Ka = ["textContent"],
      Ga = { key: 3, class: "wl-power" },
      Ja = Nr(
        "a",
        {
          href: "https://github.com/walinejs/waline",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        " Waline ",
        -1,
      );
    e.version = Ua;
    var Xa = Nn({
        __name: "WalineComment",
        props: [
          "serverURL",
          "path",
          "meta",
          "requiredMeta",
          "dark",
          "commentSorting",
          "lang",
          "locale",
          "pageSize",
          "wordLimit",
          "emoji",
          "login",
          "highlighter",
          "texRenderer",
          "imageUploader",
          "search",
          "copyright",
          "recaptchaV3Key",
          "reaction",
        ],
        setup(e) {
          const t = e,
            c = {
              latest: "insertedAt_desc",
              oldest: "insertedAt_asc",
              hottest: "like_desc",
            },
            u = Object.keys(c),
            p = ns(),
            h = Do(),
            f = Qt("loading"),
            g = Qt(0),
            m = Qt(1),
            v = Qt(0),
            y = il(() =>
              ((e) => {
                let {
                  serverURL: t,
                  path: c = location.pathname,
                  lang: u = "undefined" == typeof navigator
                    ? "en-US"
                    : navigator.language,
                  locale: p,
                  emoji: h = r,
                  meta: f = ["nick", "mail", "link"],
                  requiredMeta: g = [],
                  dark: m = !1,
                  pageSize: v = 10,
                  wordLimit: y,
                  imageUploader: b,
                  highlighter: w,
                  texRenderer: x,
                  copyright: _ = !0,
                  login: $ = "enable",
                  search: C,
                  reaction: S,
                  recaptchaV3Key: R = "",
                  commentSorting: A = "latest",
                  ...O
                } = e;
                return {
                  serverURL: I(t),
                  path: E(c),
                  locale: {
                    ...(k[u] || k[l]),
                    ...("object" == typeof p ? p : {}),
                  },
                  wordLimit: L(y),
                  meta: n(f),
                  requiredMeta: n(g),
                  imageUploader: z(b, i),
                  highlighter: z(w, d),
                  texRenderer: z(x, o),
                  lang: Object.keys(k).includes(u) ? u : "en-US",
                  dark: m,
                  emoji: "boolean" == typeof h ? (h ? r : []) : h,
                  pageSize: v,
                  login: $,
                  copyright: _,
                  search: !1 !== C && ("object" == typeof C ? C : s(u)),
                  recaptchaV3Key: R,
                  reaction: Array.isArray(S) ? S : !0 === S ? a : [],
                  commentSorting: A,
                  ...O,
                };
              })(t),
            ),
            b = Qt(y.value.commentSorting),
            w = Qt([]),
            x = Qt(null),
            $ = Qt(null),
            C = il(() => {
              return "string" == typeof (e = y.value.dark)
                ? "auto" === e
                  ? `@media(prefers-color-scheme:dark){body${O}}`
                  : `${e}${O}`
                : !0 === e
                  ? `:root${O}`
                  : "";
              var e;
            }),
            R = il(() => y.value.locale);
          let A;
          !(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const n = Qt(!1),
              {
                document: r = ai,
                immediate: l = !0,
                manual: i = !1,
                id: o = "vueuse_styletag_" + ++Ri,
              } = t,
              s = Qt(e);
            let a = () => {};
            const c = () => {
                if (!r) return;
                const e = r.getElementById(o) || r.createElement("style");
                e.isConnected ||
                  ((e.type = "text/css"),
                  (e.id = o),
                  t.media && (e.media = t.media),
                  r.head.appendChild(e)),
                  n.value ||
                    ((a = Pn(
                      s,
                      (t) => {
                        e.textContent = t;
                      },
                      { immediate: !0 },
                    )),
                    (n.value = !0));
              },
              u = () => {
                r &&
                  n.value &&
                  (a(),
                  r.head.removeChild(r.getElementById(o)),
                  (n.value = !1));
              };
            l && !i && Ql(c), i || Zl(u), Tt(n);
          })(C);
          const j = (e) => {
              var t, n;
              const { serverURL: r, path: l, pageSize: i } = y.value,
                o = new AbortController();
              (f.value = "loading"),
                null !== (t = A) && void 0 !== t && t(),
                ((e) => {
                  let {
                    serverURL: t,
                    lang: n,
                    path: r,
                    page: l,
                    pageSize: i,
                    sortBy: o,
                    signal: s,
                    token: a,
                  } = e;
                  const c = {};
                  return (
                    a && (c.Authorization = `Bearer ${a}`),
                    fetch(
                      `${t}/comment?path=${encodeURIComponent(
                        r,
                      )}&pageSize=${i}&page=${l}&lang=${n}&sortBy=${o}`,
                      { signal: s, headers: c },
                    )
                      .then((e) => e.json())
                      .then((e) => _(e, "Get comment data"))
                  );
                })({
                  serverURL: r,
                  lang: y.value.lang,
                  path: l,
                  pageSize: i,
                  sortBy: c[b.value],
                  page: e,
                  signal: o.signal,
                  token:
                    null === (n = p.value) || void 0 === n ? void 0 : n.token,
                })
                  .then((t) => {
                    (f.value = "success"),
                      (g.value = t.count),
                      w.value.push(...t.data),
                      (m.value = e),
                      (v.value = t.totalPages);
                  })
                  .catch((e) => {
                    "AbortError" !== e.name &&
                      (console.error(e.message), (f.value = "error"));
                  }),
                (A = o.abort.bind(o));
            },
            T = () => j(m.value + 1),
            U = () => {
              (g.value = 0), (w.value = []), j(1);
            },
            P = (e) => {
              x.value = e;
            },
            M = (e) => {
              $.value = e;
            },
            F = (e) => {
              if ($.value)
                ($.value.comment = e.comment), ($.value.orig = e.orig);
              else if (e.rid) {
                const t = w.value.find((t) => {
                  let { objectId: n } = t;
                  return n === e.rid;
                });
                if (!t) return;
                Array.isArray(t.children) || (t.children = []),
                  t.children.push(e);
              } else w.value.unshift(e);
            },
            N = async (e) => {
              var t;
              let { comment: n, status: r } = e;
              if (n.status === r) return;
              const { serverURL: l, lang: i } = y.value;
              await S({
                serverURL: l,
                lang: i,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                objectId: n.objectId,
                comment: { status: r },
              }),
                (n.status = r);
            },
            D = async (e) => {
              var t;
              if (e.rid) return;
              const { serverURL: n, lang: r } = y.value;
              await S({
                serverURL: n,
                lang: r,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                objectId: e.objectId,
                comment: { sticky: e.sticky ? 0 : 1 },
              }),
                (e.sticky = !e.sticky);
            },
            B = async (e) => {
              var t;
              let { objectId: n } = e;
              if (!confirm("Are you sure you want to delete this comment?"))
                return;
              const { serverURL: r, lang: l } = y.value;
              await ((e) => {
                let { serverURL: t, lang: n, token: r, objectId: l } = e;
                return fetch(`${t}/comment/${l}?lang=${n}`, {
                  method: "DELETE",
                  headers: { Authorization: `Bearer ${r}` },
                })
                  .then((e) => e.json())
                  .then((e) => _(e, "Delete comment"));
              })({
                serverURL: r,
                lang: l,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                objectId: n,
              }),
                w.value.some((e, t) =>
                  e.objectId === n
                    ? ((w.value = w.value.filter((e, n) => n !== t)), !0)
                    : e.children.some(
                        (r, l) =>
                          r.objectId === n &&
                          ((w.value[t].children = e.children.filter(
                            (e, t) => t !== l,
                          )),
                          !0),
                      ),
                );
            },
            H = async (e) => {
              var t;
              const { serverURL: n, lang: r } = y.value,
                { objectId: l } = e,
                i = h.value.includes(l);
              await S({
                serverURL: n,
                lang: r,
                objectId: l,
                token:
                  null === (t = p.value) || void 0 === t ? void 0 : t.token,
                comment: { like: !i },
              }),
                i
                  ? (h.value = h.value.filter((e) => e !== l))
                  : ((h.value = [...h.value, l]),
                    h.value.length > 50 && (h.value = h.value.slice(-50))),
                (e.like = (e.like || 0) + (i ? -1 : 1));
            };
          return (
            (function (e, t) {
              if (Jr) {
                let e = Jr.provides;
                const n = Jr.parent && Jr.parent.provides;
                n === e && (e = Jr.provides = Object.create(n)), (e.config = t);
              }
            })(0, y),
            Bn(() => {
              Pn(
                () => [t.serverURL, t.path],
                () => U(),
                { immediate: !0 },
              );
            }),
            Wn(() => {
              var e;
              return null === (e = A) || void 0 === e ? void 0 : e();
            }),
            (e, t) => (
              Ar(),
              Or("div", Pa, [
                Vr(gs),
                x.value
                  ? Hr("v-if", !0)
                  : (Ar(), jr(ca, { key: 0, onLog: U, onSubmit: F })),
                Nr("div", Ma, [
                  Nr("div", Fa, [
                    g.value
                      ? (Ar(),
                        Or(
                          "span",
                          { key: 0, class: "wl-num", textContent: q(g.value) },
                          null,
                          8,
                          Na,
                        ))
                      : Hr("v-if", !0),
                    Br(" " + q(Xt(R).comment), 1),
                  ]),
                  Nr("ul", Va, [
                    (Ar(!0),
                    Or(
                      _r,
                      null,
                      Jn(
                        Xt(u),
                        (e) => (
                          Ar(),
                          Or(
                            "li",
                            {
                              key: e,
                              class: V([e === b.value ? "active" : ""]),
                              onClick: (t) =>
                                ((e) => {
                                  b.value !== e && ((b.value = e), U());
                                })(e),
                            },
                            q(Xt(R)[e]),
                            11,
                            Da,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                Nr("div", Ba, [
                  (Ar(!0),
                  Or(
                    _r,
                    null,
                    Jn(
                      w.value,
                      (e) => (
                        Ar(),
                        jr(
                          Ta,
                          {
                            key: e.objectId,
                            "root-id": e.objectId,
                            comment: e,
                            reply: x.value,
                            edit: $.value,
                            onLog: U,
                            onReply: P,
                            onEdit: M,
                            onSubmit: F,
                            onStatus: N,
                            onDelete: B,
                            onSticky: D,
                            onLike: H,
                          },
                          null,
                          8,
                          ["root-id", "comment", "reply", "edit"],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                "error" === f.value
                  ? (Ar(),
                    Or("div", Ha, [
                      Nr(
                        "button",
                        {
                          type: "button",
                          class: "wl-btn",
                          onClick: U,
                          textContent: q(Xt(R).refresh),
                        },
                        null,
                        8,
                        Wa,
                      ),
                    ]))
                  : (Ar(),
                    Or(
                      _r,
                      { key: 2 },
                      [
                        "loading" === f.value
                          ? (Ar(), Or("div", qa, [Vr(Xt(Fo), { size: 30 })]))
                          : w.value.length
                            ? m.value < v.value
                              ? (Ar(),
                                Or("div", Qa, [
                                  Nr(
                                    "button",
                                    {
                                      type: "button",
                                      class: "wl-btn",
                                      onClick: T,
                                      textContent: q(Xt(R).more),
                                    },
                                    null,
                                    8,
                                    Ka,
                                  ),
                                ]))
                              : Hr("v-if", !0)
                            : (Ar(),
                              Or(
                                "div",
                                {
                                  key: 1,
                                  class: "wl-empty",
                                  textContent: q(Xt(R).sofa),
                                },
                                null,
                                8,
                                Za,
                              )),
                      ],
                      64,
                    )),
                Xt(y).copyright
                  ? (Ar(),
                    Or("div", Ga, [
                      Br(" Powered by "),
                      Ja,
                      Br(" v" + q(Xt(Ua)), 1),
                    ]))
                  : Hr("v-if", !0),
              ])
            )
          );
        },
      }),
      Ya = fs(Xa, [["__file", "WalineComment.vue"]]);
    const ec = (e, t) => {
        t.forEach((t, n) => {
          t.innerText = e[n].toString();
        });
      },
      tc = (e) => {
        let {
          serverURL: t,
          path: n = window.location.pathname,
          selector: r = ".waline-pageview-count",
          update: l = !0,
          lang: i = navigator.language,
        } = e;
        const o = new AbortController(),
          s = Array.from(document.querySelectorAll(r)),
          a = (e) => {
            const t = Eo(e);
            return null !== t && n !== t;
          },
          c = (e) =>
            ((e) => {
              let { serverURL: t, lang: n, paths: r, signal: l } = e;
              return $({
                serverURL: t,
                lang: n,
                paths: r,
                type: ["time"],
                signal: l,
              }).then((e) => (Array.isArray(e) ? e : [e]));
            })({
              serverURL: I(t),
              paths: e.map((e) => Eo(e) || n),
              lang: i,
              signal: o.signal,
            })
              .then((t) => ec(t, e))
              .catch(Ti);
        if (l) {
          const e = s.filter((e) => !a(e)),
            r = s.filter(a);
          ((u = { serverURL: I(t), path: n, lang: i }),
          C({ ...u, type: "time", action: "inc" })).then((t) =>
            ec(new Array(e.length).fill(t), e),
          ),
            r.length && c(r);
        } else c(s);
        var u;
        return o.abort.bind(o);
      };
    (e.UserList = (e) => {
      let {
        el: t,
        serverURL: n,
        count: r,
        locale: i,
        lang: o = navigator.language,
        mode: s = "list",
      } = e;
      const a = Ui(t),
        c = new AbortController();
      return ((e) => {
        let { serverURL: t, signal: n, pageSize: r, lang: l } = e;
        return fetch(`${t}/user?pageSize=${r}&lang=${l}`, { signal: n })
          .then((e) => e.json())
          .then((e) => _(e, "user list"))
          .then((e) => e.data);
      })({ serverURL: n, pageSize: r, lang: o, signal: c.signal }).then((e) =>
        a && e.length
          ? ((i = { ...(k[o] || k[l]), ...("object" == typeof i ? i : {}) }),
            (a.innerHTML = `<ul class="wl-user-${s}">${e
              .map((e, t) =>
                [
                  `<li class="wl-user-item" aria-label="${e.nick}">`,
                  e.link && `<a href="${e.link}" target="_blank">`,
                  '<div class="wl-user-avatar">',
                  `<img src="${e.avatar}" alt="${e.nick}">`,
                  `<span class="wl-user-badge">${t + 1}</span>`,
                  "</div>",
                  '<div class="wl-user-meta">',
                  '<div class="wl-user-name">',
                  e.nick,
                  e.level &&
                    `<span class="wl-badge">${
                      i ? i[`level${e.level}`] : `Level ${e.level}`
                    }</span>`,
                  e.label && `<span class="wl-badge">${e.label}</span>`,
                  "</div>",
                  e.link && e.link,
                  "</div>",
                  e.link && "</a>",
                  "</li>",
                ]
                  .filter((e) => e)
                  .join(""),
              )
              .join("")}</ul>`),
            {
              users: e,
              destroy: () => {
                c.abort(), (a.innerHTML = "");
              },
            })
          : { users: e, destroy: () => c.abort() },
      );
    }),
      (e.RecentComments = (e) => {
        var t;
        let { el: n, serverURL: r, count: l, lang: i = navigator.language } = e;
        const o = ns(),
          s = Ui(n),
          a = new AbortController();
        return ((e) => {
          let { serverURL: t, lang: n, count: r, signal: l, token: i } = e;
          const o = {};
          return (
            i && (o.Authorization = `Bearer ${i}`),
            fetch(`${t}/comment?type=recent&count=${r}&lang=${n}`, {
              signal: l,
              headers: o,
            }).then((e) => e.json())
          );
        })({
          serverURL: r,
          count: l,
          lang: i,
          signal: a.signal,
          token: null === (t = o.value) || void 0 === t ? void 0 : t.token,
        }).then((e) =>
          s && e.length
            ? ((s.innerHTML = `<ul class="wl-recent-list">${e
                .map(
                  (e) =>
                    `<li class="wl-recent-item"><a href="${e.url}">${e.nick}</a>：${e.comment}</li>`,
                )
                .join("")}</ul>`),
              {
                comments: e,
                destroy: () => {
                  a.abort(), (s.innerHTML = "");
                },
              })
            : { comments: e, destroy: () => a.abort() },
        );
      }),
      (e.init = (e) => {
        let {
          el: t = "#waline",
          path: n = window.location.pathname,
          comment: r = !1,
          pageview: l = !1,
          ...i
        } = e;
        const o = t ? Ui(t) : null;
        if (t && !o)
          throw new Error("Option 'el' do not match any domElement!");
        if (!i.serverURL) throw new Error("Option 'serverURL' is missing!");
        const s = jt({ ...i }),
          a = jt({ comment: r, pageview: l, path: n }),
          c = o
            ? (function () {
                const e = (Nl || (Nl = wr(Fl))).createApp(...arguments),
                  { mount: t } = e;
                return (
                  (e.mount = (n) => {
                    const r = (function (e) {
                      return ue(e) ? document.querySelector(e) : e;
                    })(n);
                    if (!r) return;
                    const l = e._component;
                    ce(l) ||
                      l.render ||
                      l.template ||
                      (l.template = r.innerHTML),
                      (r.innerHTML = "");
                    const i = t(r, !1, r instanceof SVGElement);
                    return (
                      r instanceof Element &&
                        (r.removeAttribute("v-cloak"),
                        r.setAttribute("data-v-app", "")),
                      i
                    );
                  }),
                  e
                );
              })(() => ol(Ya, { path: a.path, ...s }))
            : null;
        c && c.mount(o);
        const u = Tn(() => {
            a.comment &&
              Ro({
                serverURL: s.serverURL,
                path: a.path,
                selector: "string" == typeof a.comment ? a.comment : void 0,
              });
          }),
          p = Tn(() => {
            a.pageview &&
              tc({
                serverURL: s.serverURL,
                path: a.path,
                selector: "string" == typeof a.pageview ? a.pageview : void 0,
              });
          });
        return {
          el: o,
          update: function () {
            let {
              comment: e,
              pageview: t,
              path: n = window.location.pathname,
              ...r
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            Object.entries(r).forEach((e) => {
              let [t, n] = e;
              s[t] = n;
            }),
              (a.path = n),
              void 0 !== e && (a.comment = e),
              void 0 !== t && (a.pageview = t);
          },
          destroy: () => {
            null != c && c.unmount(), u(), p();
          },
        };
      }),
      (e.pageviewCount = tc);
  },
);
