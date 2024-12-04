(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".sp-result-message{padding:20px 0;text-align:center;font-weight:700;color:#999}.sp-container{min-width:300px;display:inline-flex;overflow:hidden;flex-direction:column;font-family:Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}.sp-message{display:flex;align-items:center;padding:10px 0;background-color:#e4eaee;color:#000;flex-grow:1}.sp-message .bi-chat-left-dots{font-size:1.2rem;margin:0 1rem}.sp-message .sp-message-body{font-size:14px;line-height:1;flex-wrap:wrap;max-width:15rem}.sp-message-slide-enter-active,.sp-message-slide-leave-active{transition:opacity .3s}.sp-message-slide-enter,.sp-message-slide-leave-to{opacity:0}.sp-message-slide-enter-to,.sp-message-slide-leave{opacity:1}.sp-icon{width:1em;height:1em}.sp-icon.sp-icon-small{font-size:1rem}.sp-icon.sp-icon-medium{font-size:1.3rem}.sp-circle-btn{width:20px;height:20px;font-size:14px;line-height:1;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;color:#aaa;transition:all .3s ease;border-radius:50%}.sp-circle-btn:hover{color:#000}.sp-circle-btn.sp-circle-btn--disabled,.sp-circle-btn.sp-circle-btn--disabled:hover{cursor:default;color:#eee}.sp-circle-btn.sp-circle-btn--small{width:16px;height:16px;font-size:12px}.sp-circle-btn.sp-circle-btn--large{width:28px;height:28px;font-size:16px}.animate-down-enter-from,.animate-down-leave-to{transform:scale(.95);opacity:0}.animate-down-enter-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-down-leave-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-enter-from,.animate-up-leave-to{transform:scale(.95);opacity:0}.animate-up-enter-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-leave-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-dropdown-trigger{display:inline-flex}.v-dropdown-trigger.v-dropdown-trigger--full-width{display:flex}.v-dropdown-container{-webkit-font-smoothing:subpixel-antialiased;backface-visibility:hidden;display:inline-flex;margin:0;padding:0;position:absolute;top:0;left:0;border:1px solid #D6D7D7;box-sizing:border-box;background-color:#fff;border-radius:.3rem;overflow:hidden;z-index:3000;will-change:opacity,transform,top,left;box-shadow:0 15px 25px #0003}.v-dropdown-container.v-dropdown-no-border{border:0;border-radius:.5rem;box-shadow:0 10px 30px #0006}.sp-search{display:flex;align-items:center;padding:.5rem 0;transition:all .3s ease}.sp-search .sp-search-container{display:flex;align-items:center;flex-grow:1;padding:0;padding-left:.7rem;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input{border:0;border-radius:50rem;background-color:transparent;margin-left:5px;font-size:14px;line-height:1.43;padding:4px 6px;box-sizing:border-box;outline:none!important;color:#333;font-weight:600;flex-grow:1;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input.sp-search-input--rtl{direction:rtl}.sp-search .sp-search-container .sp-search-input::-moz-placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-search-input::placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-icon-loading{opacity:.5}.sp-search .sp-search-container .bi-search,.sp-search .sp-search-container .bi-x-lg{transition:all .3s ease;color:#aaa}.sp-search .sp-search-container .bi-search.sp-search-in-focus,.sp-search .sp-search-container .bi-x-lg.sp-search-in-focus{color:#000}.sp-search .sp-search-container .bi-x-lg{cursor:pointer}.sp-search .sp-search-container .bi-x-lg:hover{color:#000}.sp-search .sp-search-control{display:inline-flex;transition:all .3s ease;padding:0 .5rem}.sp-list{min-width:300px;max-height:320px;overflow-y:auto;padding:0 .3rem;transition:all .3s ease}.sp-list .sp-list-item{display:flex;align-items:center;justify-content:space-between;line-height:1.43;font-size:14px;text-align:left;overflow:hidden;white-space:nowrap;margin:0;padding:.25rem .5rem;color:#666;cursor:pointer;transition:all .2s ease}.sp-list .sp-list-item.sp-over{background-color:#f6f8fa!important;color:#000!important;border-radius:.4rem}.sp-list .sp-list-item.sp-selected{color:#ccc;cursor:default}.sp-list .sp-list-item.sp-rtl{direction:rtl;text-align:right}.sp-table{padding:0 .3rem;min-width:300px;max-height:320px;overflow-y:auto}.sp-table table{width:100%;border-spacing:0}.sp-table table td,.sp-table table th{font-size:14px;line-height:1.43;border:0!important}.sp-table table th{padding:0 8px 5px;font-weight:600;font-size:15px;color:#333;text-align:left}.sp-table table td{padding:.25rem .5rem;color:#666;cursor:pointer}.sp-table table tbody tr.sp-over td{background-color:#f6f8fa!important;color:#000!important}.sp-table table tbody tr.sp-over td:first-child{border-top-left-radius:.4rem;border-bottom-left-radius:.4rem}.sp-table table tbody tr.sp-over td:last-child{border-top-right-radius:.4rem;border-bottom-right-radius:.4rem}.sp-table table tbody tr.sp-selected td{color:#ccc;cursor:default}.sp-table table thead .sp-rtl th,.sp-table table tbody .sp-rtl td{direction:rtl;text-align:right}.sp-pagination{display:flex;justify-content:space-between;align-items:center;padding:5px 10px}.sp-pagination .sp-page-info{line-height:1;color:#0000004d;font-size:14px;font-weight:600;margin-right:10px}.sp-pagination .sp-page-control{padding:0;margin:0}.sp-pagination .sp-page-control .sp-page-button{display:inline-flex}.sp-pagination .sp-page-control .sp-page-button a{display:inline-flex;padding:7px;font-size:14px;color:#333;text-decoration:none;cursor:pointer;line-height:1;background:transparent;transition:all .3s ease;border-radius:.6rem}.sp-pagination .sp-page-control .sp-page-button a:hover{color:#000;background-color:#f1f1f1}.sp-pagination .sp-page-control .sp-page-button.sp-page-disabled a{color:#ddd;font-weight:400;background-color:transparent;cursor:default}.sp-trigger-container{display:flex;align-items:center;justify-content:space-between;flex-grow:1;padding:6px 12px 6px 6px;background-color:#fff;border:1px solid #ddd;border-radius:.3rem;font-size:14px;line-height:1.42857143;outline:0!important;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s ease}.sp-trigger-container:hover{border:1px solid #aaa}.sp-trigger-container.sp-disabled,.sp-trigger-container.sp-disabled:hover{border:1px solid #eee;background-color:#eee;cursor:default;color:#aaa}.sp-trigger-container.sp-disabled .sp-select,.sp-trigger-container.sp-disabled .sp-chips,.sp-trigger-container.sp-disabled:hover .sp-select,.sp-trigger-container.sp-disabled:hover .sp-chips{color:#aaa;background-color:#eee}.sp-trigger-container.sp-disabled .sp-chip,.sp-trigger-container.sp-disabled:hover .sp-chip{background-color:#d6d6d6!important;color:#666!important}.sp-trigger-container .bi-chevron-down{transition:transform .2s ease;margin-left:.5rem;font-size:1rem;color:#666}.sp-trigger-container.sp-opened{box-shadow:3px 2px 6px #0000004d;border:1px solid #666;color:#000}.sp-trigger-container.sp-opened .bi-chevron-down{transform:rotate(180deg)}.sp-trigger-container.sp-opened:hover{border:1px solid #666}.sp-trigger-container .sp-placeholder{color:#aaa;padding:5px;line-height:1}.sp-trigger-container .sp-trigger{display:flex;align-items:center;flex-wrap:wrap}.sp-trigger-container .sp-trigger.sp-select{justify-content:space-between;flex-grow:1}.sp-trigger-container .sp-trigger.sp-select .sp-select-content{padding:5px;line-height:1.143;color:#666}.sp-trigger-container .sp-trigger.sp-chips{gap:.5rem}.sp-trigger-container .sp-trigger .sp-chip{border-radius:.3rem;background-color:#eee;color:#666;display:inline-flex;align-items:center;padding:5px 7px;transition:all .2s ease}.sp-trigger-container .sp-trigger .sp-chip--body{display:inline-flex;line-height:1.143;margin-right:5px}.sp-trigger-container .sp-trigger .sp-chip:hover{background-color:#f7f7f7;color:#000}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { ref as b, computed as F, watch as J, onMounted as he, provide as z, nextTick as ne, inject as B, defineComponent as G, reactive as de, onBeforeUnmount as He, onUnmounted as Ve, withDirectives as je, h as r, vShow as Re, Teleport as Ue, Transition as me, openBlock as k, createElementBlock as N, createElementVNode as A, mergeProps as le, toRef as ve } from "vue";
const [
  oe,
  ae,
  re,
  ie,
  we,
  ye
] = [
  37,
  38,
  39,
  40,
  13,
  27
], Ge = [oe, ae, re, ie, we, ye], R = -1, be = 0, Ze = 0, j = 1, We = 10, Se = "first", Q = "previous", ee = "next", Ce = "last", _ = "page_num", P = "page_count", I = "row_count", x = "max_select_limit", $ = "selected_count", [
  Ke,
  K,
  Xe,
  Ye,
  qe,
  Je,
  Qe,
  et,
  tt,
  nt,
  lt,
  ot,
  at,
  rt
] = [
  "zh-chs",
  "en",
  "ja",
  "ar",
  "es",
  "de",
  "ro",
  "ru",
  "fr",
  "pt-br",
  "pl",
  "nl",
  "zh-cht",
  "tr"
], W = {
  [Ke]: {
    // Chinese
    next: "下一页",
    prev: "上一页",
    first: "首页",
    last: "尾页",
    pageInfo: `第 ${_}/${P} 页(共 ${I} 条记录)`,
    notFound: "无查询结果",
    clear: "清除内容",
    clearAll: "清除全部已选择项目",
    maxSelected: `最多只能选择 ${x} 个项目`,
    placeholder: "请选择一个项目",
    selectedCount: `已选择 ${$} 个项目`,
    search: "搜索"
  },
  [K]: {
    // English
    next: "Next page",
    prev: "Previous page",
    first: "First page",
    last: "Last page",
    pageInfo: `Page ${_} of ${P} (${I} records)`,
    notFound: "Data not found",
    clear: "Clear content",
    clearAll: "Clear all selected",
    maxSelected: `You can only select up to ${x} items`,
    placeholder: "Select an option",
    selectedCount: `${$} items selected`,
    search: "Search"
  },
  [Xe]: {
    // Japanese
    next: "次へ",
    prev: "前へ",
    first: "最初のページへ",
    last: "最後のページへ",
    pageInfo: `${_}/${P} 件 (全 ${I} つ記録)`,
    notFound: "(0 件)",
    clear: "コンテンツをクリアする",
    clearAll: "選択した項目をクリアする",
    maxSelected: `最多で ${x} のプロジェクトを選ぶことしかできません`,
    placeholder: "プロジェクトを選択してください",
    selectedCount: `${$} アイテムが選択されました`,
    search: "検索"
  },
  [Ye]: {
    // Arabic
    next: "التالي",
    prev: "السابق",
    first: "الاول",
    last: "الأخير",
    pageInfo: `صفحة ${_}/${P} (${I} سجلات)`,
    notFound: "لا يوجد نتائج",
    clear: "محو المحتوى",
    clearAll: "إلغاء التحديد",
    maxSelected: `يمكنك فقط تحديد (${x}) عناصر`,
    placeholder: "رجاء حدد الخيار",
    selectedCount: `تم تحديد (${$}) عناصر`,
    search: "يبحث"
  },
  [qe]: {
    // Spanish
    next: "Siguiente página",
    prev: "Pagina anterior",
    first: "Primera página",
    last: "última página",
    pageInfo: `Página ${_}/${P} (${I} registros)`,
    notFound: "no encontrado",
    clear: "Borrar contenido",
    clearAll: "Borrar todo lo seleccionado",
    maxSelected: `Solo puedes seleccionar hasta ${x} items`,
    placeholder: "Seleccione una opción",
    selectedCount: `${$} items Seleccionado`,
    search: "Buscar"
  },
  [Je]: {
    // German
    next: "Nächste Seite",
    prev: "Vorherige Seite",
    first: "Erste Seite",
    last: "Letzte Seite",
    pageInfo: `Seite ${_}/${P} (${I} Einträge)`,
    notFound: "Nicht gefunden",
    clear: "Inhalt löschen",
    clearAll: "Alle ausgewählten löschen",
    maxSelected: `Sie können nur bis zu ${x} Elemente auswählen`,
    placeholder: "Wählen",
    selectedCount: `${$} Elemente ausgewählt`,
    search: "Suchen"
  },
  [Qe]: {
    // Romanian
    next: "Pagina următoare",
    prev: "Pagina precedentă",
    first: "Prima pagină",
    last: "Ultima pagină",
    pageInfo: `Pagina ${_}/${P} (${I} înregistrări)`,
    notFound: "nu a fost găsit",
    clear: "Șterge conținutul",
    clearAll: "Șterge înregistrările selectate",
    maxSelected: `Poți selecta până la ${x} înregistrări`,
    placeholder: "Selectează o înregistrare",
    selectedCount: `${$} înregistrări selectate`,
    search: "Căutare"
  },
  [et]: {
    // Russian
    next: "Вперед",
    prev: "Назад",
    first: "В начало",
    last: "В конец",
    pageInfo: `${_} - ${P} / ${I}`,
    notFound: "Нет данных",
    clear: "Очистить",
    clearAll: "Очистить выбранное",
    maxSelected: `Нельзя выбрать более ${x} значений`,
    placeholder: "Выберите значение",
    selectedCount: `${$} - выбрано`,
    search: "Поиск"
  },
  [tt]: {
    // French
    next: "Page suivante",
    prev: "Page précédente",
    first: "Première page",
    last: "Dernière page",
    pageInfo: `Page ${_}/${P} (${I} lignes)`,
    notFound: "Aucun résultat",
    clear: "Effacer",
    clearAll: "Tout déselectionner",
    maxSelected: `Vous ne pouvez pas sélectionner plus de ${x} élements`,
    placeholder: "Sélectionnez une option",
    selectedCount: `${$} éléments sélectionnés`,
    search: "Recherche"
  },
  [nt]: {
    // Portuguese-Brazil
    next: "Página seguinte",
    prev: "Página anterior",
    first: "Primera página",
    last: "Última página",
    pageInfo: `Página ${_}/${P} (${I} registros)`,
    notFound: "não encontrado",
    clear: "Apagar conteúdo",
    clearAll: "Apagar itens selecionados",
    maxSelected: `Máximo permitido ${x} itens`,
    placeholder: "Selecione uma opção",
    selectedCount: `${$} itens selecionados`,
    search: "Procurar"
  },
  [lt]: {
    // Polish
    next: "Następna",
    prev: "Poprzednia",
    first: "Pierwsza",
    last: "Ostatnia",
    pageInfo: `Strona ${_}/${P} (${I} rekordów)`,
    notFound: "Nic nie znaleziono",
    clear: "Wyczyść",
    clearAll: "Usuń wszystkie zaznaczone",
    maxSelected: `Możesz zaznaczyć maksymalnie ${x}`,
    placeholder: "Wybierz z listy",
    selectedCount: `${$} zaznaczonych`,
    search: "Szukaj"
  },
  [ot]: {
    // Dutch
    next: "Volgende pagina",
    prev: "Vorige pagina",
    first: "Eerste pagina",
    last: "Laatste pagina",
    pageInfo: `Pagina ${_}/${P} (${I} items)`,
    notFound: "Niet gevonden",
    clear: "Wissen",
    clearAll: "Wis selectie",
    maxSelected: `Je kunt maar ${x} items selecteren`,
    placeholder: "Kies een optie",
    selectedCount: `${$} Items geselecteerd`,
    search: "Zoekopdracht"
  },
  [at]: {
    // Traditional Chinese
    next: "下一頁",
    prev: "上一頁",
    first: "首頁",
    last: "尾頁",
    pageInfo: `第 ${_}/${P} 頁(共 ${I} 條記錄)`,
    notFound: "無查詢結果",
    clear: "清除內容",
    clearAll: "清除全部已選擇項目",
    maxSelected: `最多只能選擇 ${x} 個項目`,
    placeholder: "請選擇一個項目",
    selectedCount: `已選擇 ${$} 個項目`,
    search: "搜索"
  },
  [rt]: {
    // Turkish
    next: "Sonraki",
    prev: "Önceki",
    first: "İlk",
    last: "Son",
    pageInfo: "Sayfa page_num/page_count ( row_count kayıt )",
    notFound: "Bulunamadı",
    clear: "İçeriği temizle",
    clearAll: "Tüm seçilenleri bırak",
    maxSelected: "Sadece max_selected_limit kadar seçim yapabilirsin.",
    placeholder: "Seçim yapınız.",
    selectedCount: "selected_count seçildi.",
    search: "Aramak"
  }
};
function it(e) {
  if (!e)
    return W[K];
  const t = String(e).toLowerCase();
  return Object.hasOwn(W, t) ? W[t] : W[K];
}
function se(e = 3e3) {
  let t;
  return (n) => {
    clearTimeout(t), t = setTimeout(n, e);
  };
}
function U(e) {
  return !e || !Object.hasOwn(e, "multiple") ? !1 : typeof e.multiple == "boolean" ? e.multiple : e.multiple === "";
}
function st(e) {
  return [ae, ie].includes(e);
}
function ct(e) {
  return [oe, re].includes(e);
}
function ut(e) {
  return we === e;
}
function dt(e) {
  return ye === e;
}
function gt(e) {
  e && e.focus({ preventScroll: !0 });
}
function te(e) {
  return Array.isArray(e) ? !e.length : !0;
}
function _e(e) {
  return typeof e == "string" ? e : typeof e == "number" ? `${e}px` : "";
}
const Pe = () => ({
  list: { type: Array, default: void 0 },
  highlightIndex: { type: Number, default: R }
}), Ie = () => ["select", "set-highlight"];
function ft(e, t) {
  const n = b([]), i = F(() => {
    var s;
    return (s = n.value) == null ? void 0 : s.length;
  });
  function o(s) {
    var f;
    return (f = n.value) != null && f.length ? n.value.some((h) => h[e.keyProp] === s[e.keyProp]) : !1;
  }
  function a(s) {
    var f;
    return !((f = n.value) != null && f.length) || typeof s > "u" ? !1 : n.value.some((h) => h[e.keyProp] === s);
  }
  function u(s) {
    var h;
    const f = new Set(s);
    return f.size !== ((h = n.value) == null ? void 0 : h.length) ? !1 : Array.from(f).every(a);
  }
  function d(s) {
    if (!o(s)) {
      if (e.multiple) {
        g([...n.value, s]);
        return;
      }
      g([s]);
    }
  }
  function c() {
    t("remove", n.value), g(e.multiple ? [] : null);
  }
  function l(s) {
    t("remove", [s]), g(
      n.value.filter((f) => f[e.keyProp] !== s[e.keyProp])
    );
  }
  function g(s, f = !0) {
    n.value = s, f && t("update:modelValue", s == null ? void 0 : s.map((h) => h[e.keyProp])), t("selection-change", s);
  }
  return {
    selected: n,
    selectedCount: i,
    isItemSelected: o,
    selectItem: d,
    removeItem: l,
    removeAll: c,
    setSelected: g,
    isKeysEqualToSelected: u
  };
}
function pt(e, t, n) {
  const i = b(R);
  function o(l) {
    i.value = l;
  }
  function a() {
    i.value !== R && i.value !== 0 && (i.value -= 1);
  }
  function u() {
    te(n.value) || i.value !== n.value.length - 1 && (i.value += 1);
  }
  function d(l) {
    if (l === ae)
      return a();
    if (l === ie)
      return u();
  }
  function c() {
    return i.value !== R;
  }
  return {
    highlightIndex: i,
    setItemHighlight: o,
    highlightNavigation: d,
    isSomeRowHighlight: c
  };
}
function ge(e) {
  return Ge.includes(e);
}
function xe() {
  return {
    /**
     * binding selected item keys, it must be match 'keyProp' option value
     */
    modelValue: { type: Array, default: void 0 },
    placeholder: { type: String, default: "" },
    /** multiple selection */
    multiple: { type: Boolean, default: !1 },
    language: { type: String, default: K },
    /**
     * specify property to be key field, the value will return by v-model
     */
    keyProp: { type: String, default: "id" },
    /**
     * specify property to display in data row
     */
    labelProp: { type: [String, Function], default: "name" },
    pageSize: { type: Number, default: We },
    /**
     * maximum number of selection, set 0 to unlimited
     * depend on `multiple` prop set to true
     */
    max: { type: Number, default: be, validator: (e) => e >= 0 },
    /**
     * pagination bar
     */
    pagination: { type: Boolean, default: !0 },
    /**
     * text written from right to left
     */
    rtl: { type: Boolean, default: !1 },
    /**
     * the width of drop down menu
     */
    width: { type: [String, Number], default: void 0 },
    /** debounce delay when typing, in milliseconds */
    debounce: { type: Number, default: 300 },
    fetchDataOnMount: { type: Boolean, default: !1 }
  };
}
function $e() {
  return {
    disabled: { type: Boolean, default: !1 },
    /** Add custom class to trigger container, work on dropdown selection mode */
    customTriggerClass: { type: String, default: "" },
    /** Add custom class to dropdown container, work on dropdown selection mode */
    customContainerClass: { type: String, default: "" }
  };
}
function Ae() {
  return [
    "update:modelValue",
    "fetch-data",
    "fetch-selected-data",
    "selection-change",
    "remove",
    "close-dropdown",
    "adjust-dropdown"
  ];
}
function ht(e, t) {
  const n = it(e.language), {
    selected: i,
    selectedCount: o,
    isItemSelected: a,
    removeAll: u,
    removeItem: d,
    selectItem: c,
    setSelected: l,
    isKeysEqualToSelected: g
  } = ft(e, t), s = b(""), f = b(""), h = b(j), C = b(0), S = b([]), v = b(!1), T = se(), O = () => te(S.value), w = (m) => {
    if (!m || !Object.keys(m).length)
      return "";
    switch (typeof e.labelProp) {
      case "string":
        return m[e.labelProp];
      case "function":
        return e.labelProp(m);
    }
  }, p = (m) => {
    if (e.max === be)
      return c(m);
    if (i.value.length === e.max) {
      f.value = n.maxSelected.replace(x, e.max), T(() => {
        f.value = "";
      });
      return;
    }
    c(m);
  }, E = () => {
    v.value = !0;
    const m = {
      search: s.value,
      pageNumber: h.value,
      pageSize: e.pagination ? e.pageSize : Ze
    };
    t("fetch-data", m, (M, V) => {
      Array.isArray(M) && (S.value = M, C.value = typeof V == "number" ? V : 0, ne(() => {
        v.value = !1;
      }));
    });
  }, L = () => {
    const { modelValue: m } = e;
    if (Array.isArray(m)) {
      if (!e.multiple && m.length > 1) {
        console.warn('Invalid prop: Only one key can be passed to prop "modelValue/v-model" in single selection mode({ multiple: false }).');
        return;
      }
      if (!m.length) {
        l([], !1);
        return;
      }
      g(m) || t("fetch-selected-data", m, (M) => {
        Array.isArray(M) && l(M, m.length !== M.length);
      });
    }
  };
  return J(s, () => {
    h.value = j, E();
  }), J(() => e.modelValue, L), he(() => {
    e.fetchDataOnMount && E(), te(e.modelValue) || L();
  }), z("keyProp", e.keyProp), z("rtl", e.rtl), z("pageSize", e.pageSize), z("debounce", e.debounce), z("multiple", e.multiple), z("loading", v), z("language", n), z("renderCell", w), z("isItemSelected", a), z("selectedCount", o), z("removeAll", u), z("removeItem", d), {
    selected: i,
    query: s,
    message: f,
    currentPage: h,
    totalRows: C,
    lang: n,
    list: S,
    renderCell: w,
    isDataEmpty: O,
    isItemSelected: a,
    selectedCount: o,
    selectItem: p,
    removeAll: u,
    removeItem: d,
    fetchData: E
  };
}
function H() {
  return {
    keyProp: B("keyProp"),
    renderCell: B("renderCell"),
    rtl: B("rtl"),
    isItemSelected: B("isItemSelected"),
    pageSize: B("pageSize"),
    language: B("language"),
    debounce: B("debounce"),
    multiple: B("multiple"),
    loading: B("loading"),
    selectedCount: B("selectedCount"),
    removeAll: B("removeAll"),
    removeItem: B("removeItem")
  };
}
function mt(e, t, n, i) {
  const o = F(() => Math.ceil(n.value / e.pageSize)), a = F(() => t.value === j), u = F(() => t.value === o.value), d = F(
    () => i.pageInfo.replace(_, t.value).replace(P, o.value).replace(I, n.value)
  ), c = function(s) {
    switch (s) {
      case Se:
        return j;
      case Q:
        return t.value - 1;
      case ee:
        return t.value + 1;
      case Ce:
        return o.value;
    }
  }, l = function(s) {
    let f = c(s);
    typeof f > "u" || (f < j && (f = j), f > o.value && (f = o.value), f !== t.value && (t.value = f));
  };
  return {
    paginationInfo: d,
    isFirstPage: a,
    isLastPage: u,
    switchPage: l,
    pagingNavigation: (s) => {
      if (s === oe)
        return l(Q);
      if (s === re)
        return l(ee);
    }
  };
}
function vt() {
  const e = window.pageXOffset !== void 0, t = (document.compatMode || "") === "CSS1Compat";
  return {
    x: e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop
  };
}
function wt(e) {
  return window.getComputedStyle(e).display === "none";
}
function fe(e) {
  if (wt(e)) {
    e.style.visibility = "hidden", e.style.display = "inline-block";
    const t = e.getBoundingClientRect();
    return e.style.visibility = "visible", e.style.display = "none", t;
  }
  return e.getBoundingClientRect();
}
const Te = "click", yt = "hover", bt = "contextmenu", pe = 150, q = 5;
function St(e, t) {
  return typeof e.animated == "string" ? e.animated : e.animated ? t.value ? "animate-up" : "animate-down" : "";
}
function ce(e) {
  return {
    isTriggerByClick: e.trigger === Te,
    isTriggerByHover: e.trigger === yt,
    isTriggerByContextmenu: e.trigger === bt
  };
}
function Ct(e, t, n, i) {
  const { isTriggerByContextmenu: o } = ce(e), a = window.pageYOffset, u = document.documentElement.clientHeight, d = o ? t : n.top + a;
  let c = o ? t : n.top + n.height + q + a, l = !1, g = !1, s = !1;
  return c + i.height > a + u && (l = !0), d - q - i.height < a && (g = !0), !g && l && (c = d - q - i.height, s = !0), { dropUp: s, top: c };
}
function _t(e, t, n, i) {
  const { isTriggerByContextmenu: o } = ce(e), a = window.pageXOffset, u = document.documentElement.clientWidth, d = o ? 0 : n.width, c = o ? t : n.left + a, l = c + d / 2 - i.width / 2, g = c + d - i.width;
  switch (e.align) {
    case "left":
      return c + i.width > a + u ? g : c;
    case "center":
      return l + i.width > a + u ? g : g < a ? c : l;
    case "right":
      return g < a ? c : g;
  }
}
function Pt(e) {
  const t = vt();
  return {
    x: e.pageX || e.clientX + t.x,
    y: e.pageY || e.clientY + t.y
  };
}
function It(e) {
  return [
    "v-dropdown-container",
    e.border || "v-dropdown-no-border",
    e.customContainerClass && e.customContainerClass
  ];
}
function xt(e) {
  return [
    "v-dropdown-trigger",
    e.fullWidth && "v-dropdown-trigger--full-width",
    e.customTriggerClass && e.customTriggerClass
  ];
}
const $t = G({
  name: "VDropdown",
  props: {
    /** Container show up alignment direction */
    align: { type: String, default: "left" },
    border: { type: Boolean, default: !0 },
    /**
     * Toggle display / close dropdown container
     */
    toggle: { type: Boolean, default: !0 },
    /** Manual control the display and hiding of dropdown */
    manual: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    /**
     * Open / close dropdown animation
     *
     * {boolean}
     * - true: use default animation
     * - false: don't display animation
     * {string} customized animation class-name
     */
    animated: { type: [String, Boolean], default: !0 },
    /**
     * The width of dropdown container
     * min-width: 80
     */
    width: { type: Number, default: void 0 },
    /**
     * Trigger container display type
     * - false: inline-block
     * - true: block
     */
    fullWidth: { type: Boolean, default: !1 },
    /**
     * Dropdown trigger method
     * - `click` default
     * - `hover`
     * - `contextmenu`
     */
    trigger: { type: String, default: Te },
    /** Add custom class to trigger */
    customTriggerClass: { type: String, default: "" },
    /** Add custom class to container */
    customContainerClass: { type: String, default: "" }
  },
  emits: ["visible-change"],
  setup(e, { slots: t, emit: n, expose: i }) {
    const o = b(!1), a = de({ top: "", left: "", width: "" }), u = de({ x: null, y: null }), d = b(!1), c = b(null), l = b(null), g = b(null), {
      isTriggerByClick: s,
      isTriggerByHover: f,
      isTriggerByContextmenu: h
    } = ce(e);
    J(o, (w) => n("visible-change", w));
    function C() {
      e.disabled || ("trigger" in t && T(), f ? (window.clearTimeout(c.value), c.value = window.setTimeout(() => {
        o.value = !0;
      }, pe)) : o.value = !0);
    }
    function S(w = !1) {
      e.disabled || !e.toggle && !w || (f ? (window.clearTimeout(c.value), c.value = window.setTimeout(() => {
        o.value = !1;
      }, pe)) : o.value = !1);
    }
    function v() {
      o.value ? S() : C();
    }
    function T() {
      const w = fe(l.value), p = fe(g.value), E = Ct(e, u.y, w, p), L = _t(e, u.x, w, p);
      d.value = E.dropUp, a.top = `${E.top}px`, a.left = `${L}px`;
    }
    function O(w) {
      if (!o.value)
        return;
      const p = w.composedPath().some((E) => E === l.value);
      p && !e.toggle && !h || (!p || p && h) && S(!0);
    }
    return he(() => {
      typeof e.width < "u" && (a.width = e.width + "px"), document.body.addEventListener("mousedown", O);
    }), He(() => {
      document.body.removeEventListener("mousedown", O), g.value && g.value.remove();
    }), Ve(() => {
      l.value && l.value.remove();
    }), i({
      display: C,
      close: S,
      toggleVisible: v,
      adjust: T,
      container: g,
      visible: o
    }), () => {
      const w = [];
      "trigger" in t && w.push(t.trigger({
        visible: o,
        disabled: e.disabled
      }));
      const p = {
        class: It(e),
        style: a,
        ref: g,
        // do not close dropdown container when
        // do some operations in that
        onMousedown: (m) => m.stopPropagation()
      };
      f && (p.onMouseenter = C, p.onMouseleave = S);
      const E = je(
        r("div", p, t.default && t.default()),
        [[Re, o.value]]
      );
      w.push(
        r(Ue, { to: "body" }, [
          r(me, { name: St(e, d) }, () => [E])
        ])
      );
      const L = {
        class: xt(e),
        ref: l
      };
      return f ? (L.onMouseenter = C, L.onMouseleave = S) : s ? L.onClick = (m) => {
        e.manual || (m.stopPropagation(), v());
      } : h && (L.onContextmenu = (m) => {
        if (e.manual)
          return;
        m.stopPropagation(), m.preventDefault();
        const M = Pt(m);
        u.x = M.x, u.y = M.y, C();
      }), r("div", L, w);
    };
  }
});
const Z = {
  name: "SelectPageCircleButton",
  props: {
    size: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 },
    bgColor: { type: String, default: "transparent" },
    hoverBgColor: { type: String, default: "#f1f1f1" }
  },
  setup(e, { slots: t }) {
    const n = b(""), i = F(() => ({
      "sp-circle-btn--disabled": e.disabled,
      "sp-circle-btn--small": e.size === "small",
      "sp-circle-btn--large": e.size === "large"
    })), o = F(() => ({
      "font-size": e.fontSize,
      "background-color": e.disabled ? "transparent" : n.value
    }));
    return () => {
      const a = {
        class: ["sp-circle-btn", i.value],
        style: o.value,
        onMouseenter() {
          n.value = e.hoverBgColor;
        },
        onMouseleave() {
          n.value = e.bgColor;
        }
      };
      return r("div", a, t.default && t.default());
    };
  }
}, D = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, At = {}, Tt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-search",
  viewBox: "0 0 16 16"
};
function Ot(e, t) {
  return k(), N("svg", Tt, t[0] || (t[0] = [
    A("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }, null, -1)
  ]));
}
const Et = /* @__PURE__ */ D(At, [["render", Ot]]), Lt = {}, zt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-x-lg",
  viewBox: "0 0 16 16"
};
function Bt(e, t) {
  return k(), N("svg", zt, t[0] || (t[0] = [
    A("path", { d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" }, null, -1)
  ]));
}
const X = /* @__PURE__ */ D(Lt, [["render", Bt]]), Mt = {}, kt = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  class: "sp-icon sp-icon-loading"
};
function Nt(e, t) {
  return k(), N("svg", kt, t[0] || (t[0] = [
    A("path", {
      d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
      opacity: ".25"
    }, null, -1),
    A("path", { d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" }, [
      A("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        dur: "0.75s",
        values: "0 12 12;360 12 12",
        repeatCount: "indefinite"
      })
    ], -1)
  ]));
}
const Dt = /* @__PURE__ */ D(Mt, [["render", Nt]]), Ft = {
  props: {
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue", "keyboard-operation"],
  setup(e, { emit: t, expose: n }) {
    const { rtl: i, debounce: o, loading: a, language: u, selectedCount: d, multiple: c } = H(), l = b(!1), g = b(), s = se(o), f = F(() => !c || !d.value ? u.search : u.selectedCount.replace($, d.value)), h = () => gt(g.value);
    return n({ focus: h }), () => {
      const S = [
        F(() => a.value ? r(Dt) : r(Et, { class: l.value ? "sp-search-in-focus" : "" })).value,
        r("input", {
          type: "text",
          autocomplete: "off",
          value: e.modelValue.trim(),
          class: {
            "sp-search-input": !0,
            "sp-search-input--rtl": i
          },
          placeholder: f.value,
          onKeydown: (v) => {
            v.stopPropagation(), ge(v.keyCode) && t("keyboard-operation", v.keyCode);
          },
          onFocus: () => {
            l.value = !0;
          },
          onBlur: () => {
            l.value = !1;
          },
          onInput: (v) => {
            ge(v.keyCode) || s(() => {
              t("update:modelValue", v.target.value.trim());
            });
          },
          ref: g
        })
      ];
      if (e.modelValue.trim()) {
        const v = {
          onClick() {
            t("update:modelValue", ""), h();
          }
        };
        S.push(
          r(Z, v, () => r(X))
        );
      }
      return r("div", { class: "sp-search-container" }, S);
    };
  }
}, Ht = {}, Vt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-trash3",
  viewBox: "0 0 16 16"
};
function jt(e, t) {
  return k(), N("svg", Vt, t[0] || (t[0] = [
    A("path", { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" }, null, -1)
  ]));
}
const Rt = /* @__PURE__ */ D(Ht, [["render", jt]]), Ut = {
  setup() {
    const { selectedCount: e, removeAll: t, language: n } = H();
    return () => {
      const i = [], o = {
        title: n.clearAll,
        size: "large",
        // bgColor: '#f1f1f1',
        // hoverBgColor: '#ddd',
        disabled: !e.value,
        onClick: t
      };
      return i.push(
        r(Z, o, () => r(Rt))
      ), r("div", { class: "sp-search-control" }, i);
    };
  }
};
const Gt = {
  props: {
    data: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { renderCell: n, rtl: i, removeItem: o } = H();
    return () => {
      const a = n(e.data), u = {
        class: {
          "sp-list-item": !0,
          "sp-over": !e.isSelected && e.isHover,
          "sp-selected": e.isSelected,
          "sp-rtl": i
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, d = [
        r("div", { title: a, innerHTML: a })
      ];
      if (e.isSelected) {
        const c = {
          onClick: (l) => {
            l.stopPropagation(), o(e.data);
          }
        };
        d.push(
          r(Z, c, () => r(X))
        );
      }
      return r("div", u, d);
    };
  }
}, Zt = {
  name: "SelectPageList",
  props: Pe(),
  emits: Ie(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, keyProp: i } = H();
    return () => {
      const o = e.list.map((u, d) => r(Gt, {
        key: u[i],
        data: u,
        isHover: e.highlightIndex === d,
        isSelected: n(u),
        onSelect: () => t("select", u),
        onHover: () => t("set-highlight", d)
      }));
      return r("div", {
        class: "sp-list",
        onMouseleave: () => t("set-highlight", R)
      }, o);
    };
  }
};
const Wt = {
  props: {
    columns: { type: Object, default: void 0 },
    row: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { row: n } = e, { rtl: i } = H(), o = (a) => {
      if (!n || !Object.keys(n).length || !(a != null && a.data))
        return "";
      switch (typeof a.data) {
        case "string":
          return n[a.data];
        case "function":
          return a.data(n);
      }
    };
    return () => {
      const a = {
        class: {
          "sp-over": !e.isSelected && e.isHover,
          "sp-selected": e.isSelected,
          "sp-rtl": i
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, u = e.columns.map((d, c) => {
        const l = {
          key: c,
          innerHTML: o(d)
        };
        return Object.hasOwn(d, "width") && (l.style = { width: _e(d.width) }), r("td", l);
      });
      return r("tr", a, u);
    };
  }
}, Kt = {
  name: "SelectPageTable",
  props: {
    ...Pe(),
    columns: { type: Array, default: void 0 }
  },
  emits: Ie(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, rtl: i, keyProp: o } = H();
    return () => {
      const a = e.columns.map((c) => r("th", c.title)), u = e.list.map((c, l) => r(Wt, {
        key: c[o],
        row: c,
        columns: e.columns,
        isHover: e.highlightIndex === l,
        isSelected: n(c),
        onSelect: () => t("select", c),
        onHover: () => t("set-highlight", l)
      })), d = r("table", [
        // table thead
        r("thead", r("tr", { class: { "sp-rtl": i } }, a)),
        // table tbody
        r("tbody", { onMouseleave: () => t("set-highlight", R) }, u)
      ]);
      return r("div", { class: "sp-table" }, d);
    };
  }
};
const Xt = {}, Yt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-left",
  viewBox: "0 0 16 16"
};
function qt(e, t) {
  return k(), N("svg", Yt, t[0] || (t[0] = [
    A("path", {
      "fill-rule": "evenodd",
      d: "M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
    }, null, -1)
  ]));
}
const Jt = /* @__PURE__ */ D(Xt, [["render", qt]]), Qt = {}, en = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-left",
  viewBox: "0 0 16 16"
};
function tn(e, t) {
  return k(), N("svg", en, t[0] || (t[0] = [
    A("path", {
      "fill-rule": "evenodd",
      d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    }, null, -1)
  ]));
}
const nn = /* @__PURE__ */ D(Qt, [["render", tn]]), ln = {}, on = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-right",
  viewBox: "0 0 16 16"
};
function an(e, t) {
  return k(), N("svg", on, t[0] || (t[0] = [
    A("path", {
      "fill-rule": "evenodd",
      d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ]));
}
const rn = /* @__PURE__ */ D(ln, [["render", an]]), sn = {}, cn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-right",
  viewBox: "0 0 16 16"
};
function un(e, t) {
  return k(), N("svg", cn, t[0] || (t[0] = [
    A("path", {
      "fill-rule": "evenodd",
      d: "M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
    }, null, -1)
  ]));
}
const dn = /* @__PURE__ */ D(sn, [["render", un]]), gn = {
  name: "SelectPagePagination",
  props: {
    pageInfo: { type: String, default: "" },
    isFirstPage: { type: Boolean, default: !0 },
    isLastPage: { type: Boolean, default: !1 }
  },
  emits: ["page-change"],
  setup(e, { emit: t }) {
    const { language: n } = H();
    return () => {
      const o = [
        { action: Se, title: n.first, disabled: e.isFirstPage, icon: Jt },
        { action: Q, title: n.prev, disabled: e.isFirstPage, icon: nn },
        { action: ee, title: n.next, disabled: e.isLastPage, icon: rn },
        { action: Ce, title: n.last, disabled: e.isLastPage, icon: dn }
      ].map((a) => {
        const u = {
          href: "javascript:void(0)",
          onClick: () => t("page-change", a.action)
        }, d = [{ "sp-page-disabled": a.disabled }, "sp-page-button"];
        return r("div", { class: d, title: a.title }, [
          r("a", u, r(a.icon))
        ]);
      });
      return r("div", { class: "sp-pagination" }, [
        r("div", { class: "sp-page-info" }, e.pageInfo),
        r("div", { class: "sp-page-control" }, o)
      ]);
    };
  }
}, fn = {}, pn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chat-left-dots",
  viewBox: "0 0 16 16"
};
function hn(e, t) {
  return k(), N("svg", pn, t[0] || (t[0] = [
    A("path", { d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, null, -1),
    A("path", { d: "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)
  ]));
}
const mn = /* @__PURE__ */ D(fn, [["render", hn]]);
function Oe(e, t) {
  const {
    lang: n,
    selected: i,
    query: o,
    message: a,
    currentPage: u,
    totalRows: d,
    list: c,
    isDataEmpty: l,
    selectItem: g,
    fetchData: s,
    renderCell: f,
    removeAll: h,
    removeItem: C
  } = ht(e, t), {
    highlightIndex: S,
    setItemHighlight: v,
    highlightNavigation: T,
    isSomeRowHighlight: O
  } = pt(e, t, c), {
    paginationInfo: w,
    isFirstPage: p,
    isLastPage: E,
    switchPage: L,
    pagingNavigation: m
  } = mt(e, u, d, n), M = se(e.debounce), V = b(), Me = () => {
    V.value && V.value.focus();
  }, ke = () => r("div", { class: "sp-search" }, [
    r(Ft, {
      ref: V,
      modelValue: o.value,
      "onUpdate:modelValue"(y) {
        o.value = y;
      },
      onKeyboardOperation: (y) => {
        if (st(y))
          return T(y);
        if (ct(y)) {
          m(y), M(s);
          return;
        }
        if (ut(y))
          return O() ? g(c.value[S.value]) : void 0;
        dt(y) && t("close-dropdown");
      }
    }),
    r(Ut)
  ]), Ne = () => {
    const y = [];
    return a.value && y.push(
      r("div", { class: "sp-message" }, [
        r(mn),
        r("div", { class: "sp-message-body", innerHTML: a.value })
      ])
    ), r(me, {
      name: "sp-message-slide",
      appear: !0,
      onEnter: () => t("adjust-dropdown"),
      onAfterLeave: () => t("adjust-dropdown")
    }, () => y);
  }, De = () => l() ? ue() : r(Zt, {
    list: c.value,
    highlightIndex: S.value,
    onSelect: (y) => g(y),
    onSetHighlight: (y) => v(y)
  }), Fe = () => l() ? ue() : r(Kt, {
    list: c.value,
    columns: e.columns,
    highlightIndex: S.value,
    onSelect: (y) => g(y),
    onSetHighlight: (y) => v(y)
  }), ue = () => r("div", { class: "sp-result-message" }, n.notFound);
  return {
    selected: i,
    query: o,
    message: a,
    currentPage: u,
    lang: n,
    renderCell: f,
    removeAll: h,
    removeItem: C,
    setSearchFocus: Me,
    renderSearch: ke,
    renderMessage: Ne,
    renderList: De,
    renderTable: Fe,
    renderPagination: () => {
      if (e.pagination)
        return r(gn, {
          pageInfo: w.value,
          isFirstPage: p.value,
          isLastPage: E.value,
          onPageChange(y) {
            L(y), s();
          }
        });
    },
    renderContainer: (y) => {
      const Y = { class: "sp-container" };
      return e.width && (Y.style = { width: _e(e.width) }), r("div", Y, y);
    },
    fetchData: s
  };
}
function Ee(e) {
  const t = b(!1), n = b();
  function i() {
    n.value && n.value.close();
  }
  function o() {
    n.value && n.value.adjust();
  }
  function a(u, d, c) {
    const l = {
      ref: n,
      border: !1,
      fullWidth: !0,
      disabled: e.disabled,
      customTriggerClass: e == null ? void 0 : e.customTriggerClass,
      customContainerClass: e == null ? void 0 : e.customContainerClass,
      onVisibleChange(g) {
        t.value = g;
      }
    };
    return r($t, le(l, u), {
      trigger: () => d,
      default: () => c
    });
  }
  return {
    visible: t,
    dropdownRef: n,
    renderDropdown: a,
    closeDropdown: i,
    adjustDropdown: o
  };
}
const vn = G({
  name: "SelectPageListCore",
  props: {
    ...xe()
  },
  emits: Ae(),
  setup(e, { emit: t, expose: n }) {
    const {
      selected: i,
      lang: o,
      renderCell: a,
      removeAll: u,
      removeItem: d,
      setSearchFocus: c,
      renderSearch: l,
      renderMessage: g,
      renderList: s,
      renderPagination: f,
      renderContainer: h,
      fetchData: C
    } = Oe(e, t);
    return n({
      selected: i,
      lang: o,
      renderCell: a,
      removeAll: u,
      removeItem: d,
      setSearchFocus: c,
      fetchData: C
    }), () => h([
      l(),
      g(),
      s(),
      f()
    ]);
  }
});
const wn = {}, yn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-down",
  viewBox: "0 0 16 16"
};
function bn(e, t) {
  return k(), N("svg", yn, t[0] || (t[0] = [
    A("path", {
      "fill-rule": "evenodd",
      d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ]));
}
const Sn = /* @__PURE__ */ D(wn, [["render", bn]]), Le = {
  props: {
    dropdownVisible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    lang: { type: Object, default: void 0 }
  },
  setup(e, { slots: t }) {
    return () => {
      var o;
      const n = [];
      Object.hasOwn(t, "default") ? n.push(t.default()) : n.push(
        r("div", { class: "sp-placeholder" }, e.placeholder || ((o = e.lang) == null ? void 0 : o.placeholder))
      ), n.push(r(Sn));
      const i = {
        class: {
          "sp-trigger-container": !0,
          "sp-opened": e.dropdownVisible,
          "sp-disabled": e.disabled
        }
      };
      return r("div", i, n);
    };
  }
}, ze = {
  name: "SelectPageSelect",
  props: {
    selected: { type: Object, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    lang: { type: Object, default: void 0 },
    renderCell: { type: Function, default: void 0 }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = ve(e, "selected");
    return () => {
      var o, a;
      if (!((o = n.value) != null && o.length))
        return;
      const i = [
        r("div", { class: "sp-select-content", innerHTML: e.renderCell(n.value[0]) })
      ];
      if ((a = n.value) != null && a.length && !e.disabled) {
        const u = {
          title: e.lang.clear,
          onClick: (d) => {
            d.stopPropagation(), t("remove");
          }
        };
        i.push(
          r(Z, u, () => r(X))
        );
      }
      return r("div", { class: "sp-trigger sp-select" }, i);
    };
  }
}, Be = {
  name: "SelectPageChips",
  props: {
    selected: { type: Object, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    renderCell: { type: Function, default: void 0 }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = ve(e, "selected");
    return () => {
      const i = n.value.map((o, a) => {
        const u = [
          r("div", { class: "sp-chip--body", innerHTML: e.renderCell(o) })
        ];
        if (!e.disabled) {
          const d = {
            size: "small",
            hoverBgColor: "#ccc",
            onClick: (c) => {
              c.stopPropagation(), t("remove", o);
            }
          };
          u.push(
            r(Z, d, () => r(X))
          );
        }
        return r("div", { class: "sp-chip", key: a }, u);
      });
      return r("div", { class: "sp-trigger sp-chips" }, i);
    };
  }
}, xn = G({
  name: "SelectPageList",
  inheritAttrs: !1,
  props: {
    ...$e()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n, expose: i }) {
    const {
      visible: o,
      adjustDropdown: a,
      closeDropdown: u,
      renderDropdown: d
    } = Ee(e), c = b([]), l = b();
    return i({
      removeItem: (g) => {
        var s;
        return (s = l.value) == null ? void 0 : s.removeItem(g);
      },
      removeAll: () => {
        var g;
        return (g = l.value) == null ? void 0 : g.removeAll();
      }
    }), () => {
      var v, T, O, w;
      const g = {
        selected: c,
        disabled: e.disabled,
        lang: (v = l == null ? void 0 : l.value) == null ? void 0 : v.lang,
        renderCell: (T = l == null ? void 0 : l.value) == null ? void 0 : T.renderCell,
        onRemove(p) {
          U(n) ? l.value.removeItem(p) : l.value.removeAll();
        }
      }, s = (O = c.value) != null && O.length ? () => r(U(n) ? Be : ze, g) : void 0, f = {
        dropdownVisible: o.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (w = l == null ? void 0 : l.value) == null ? void 0 : w.lang
      }, h = r(Le, f, s);
      return d(
        {
          onVisibleChange: (p) => {
            t("visible-change", p), p && ne(() => {
              s === void 0 && l.value.fetchData(), l.value.setSearchFocus();
            });
          }
        },
        h,
        r(vn, le({
          ref: l,
          onAdjustDropdown: a,
          onCloseDropdown: u,
          onSelectionChange(p) {
            c.value = p, !U(n) && (p != null && p.length) && u();
          }
        }, n))
      );
    };
  }
}), Cn = G({
  name: "SelectPageTableCore",
  props: {
    ...xe(),
    /**
     * table column settings
     */
    columns: { type: Array, default: void 0 }
  },
  emits: Ae(),
  setup(e, { emit: t, expose: n }) {
    const {
      selected: i,
      lang: o,
      removeAll: a,
      removeItem: u,
      setSearchFocus: d,
      renderCell: c,
      renderSearch: l,
      renderMessage: g,
      renderTable: s,
      renderPagination: f,
      renderContainer: h,
      fetchData: C
    } = Oe(e, t);
    return n({
      selected: i,
      lang: o,
      renderCell: c,
      removeAll: a,
      removeItem: u,
      setSearchFocus: d,
      fetchData: C
    }), () => h([
      l(),
      g(),
      s(),
      f()
    ]);
  }
}), $n = G({
  name: "SelectPageTable",
  inheritAttrs: !1,
  props: {
    ...$e()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n, expose: i }) {
    const {
      visible: o,
      adjustDropdown: a,
      closeDropdown: u,
      renderDropdown: d
    } = Ee(e), c = b([]), l = b();
    return i({
      removeItem: (g) => {
        var s;
        return (s = l.value) == null ? void 0 : s.removeItem(g);
      },
      removeAll: () => {
        var g;
        return (g = l.value) == null ? void 0 : g.removeAll();
      }
    }), () => {
      var v, T, O, w;
      const g = {
        selected: c,
        disabled: e.disabled,
        lang: (v = l == null ? void 0 : l.value) == null ? void 0 : v.lang,
        renderCell: (T = l == null ? void 0 : l.value) == null ? void 0 : T.renderCell,
        onRemove(p) {
          U(n) ? l.value.removeItem(p) : l.value.removeAll();
        }
      }, s = (O = c.value) != null && O.length ? () => r(U(n) ? Be : ze, g) : void 0, f = {
        dropdownVisible: o.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (w = l == null ? void 0 : l.value) == null ? void 0 : w.lang
      }, h = r(Le, f, s);
      return d(
        {
          onVisibleChange: (p) => {
            t("visible-change", p), p && ne(() => {
              s === void 0 && l.value.fetchData(), l.value.setSearchFocus();
            });
          }
        },
        h,
        r(Cn, le({
          ref: l,
          onAdjustDropdown: a,
          onCloseDropdown: u,
          onSelectionChange(p) {
            c.value = p, !U(n) && (p != null && p.length) && u();
          }
        }, n))
      );
    };
  }
});
export {
  xn as SelectPageList,
  vn as SelectPageListCore,
  $n as SelectPageTable,
  Cn as SelectPageTableCore
};
