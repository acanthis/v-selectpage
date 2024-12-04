(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".sp-result-message{padding:20px 0;text-align:center;font-weight:700;color:#999}.sp-container{min-width:300px;display:inline-flex;overflow:hidden;flex-direction:column;font-family:Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}.sp-message{display:flex;align-items:center;padding:10px 0;background-color:#e4eaee;color:#000;flex-grow:1}.sp-message .bi-chat-left-dots{font-size:1.2rem;margin:0 1rem}.sp-message .sp-message-body{font-size:14px;line-height:1;flex-wrap:wrap;max-width:15rem}.sp-message-slide-enter-active,.sp-message-slide-leave-active{transition:opacity .3s}.sp-message-slide-enter,.sp-message-slide-leave-to{opacity:0}.sp-message-slide-enter-to,.sp-message-slide-leave{opacity:1}.sp-icon{width:1em;height:1em}.sp-icon.sp-icon-small{font-size:1rem}.sp-icon.sp-icon-medium{font-size:1.3rem}.sp-circle-btn{width:20px;height:20px;font-size:14px;line-height:1;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;color:#aaa;transition:all .3s ease;border-radius:50%}.sp-circle-btn:hover{color:#000}.sp-circle-btn.sp-circle-btn--disabled,.sp-circle-btn.sp-circle-btn--disabled:hover{cursor:default;color:#eee}.sp-circle-btn.sp-circle-btn--small{width:16px;height:16px;font-size:12px}.sp-circle-btn.sp-circle-btn--large{width:28px;height:28px;font-size:16px}.animate-down-enter-from,.animate-down-leave-to{transform:scale(.95);opacity:0}.animate-down-enter-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-down-leave-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-enter-from,.animate-up-leave-to{transform:scale(.95);opacity:0}.animate-up-enter-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-leave-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-dropdown-trigger{display:inline-flex}.v-dropdown-trigger.v-dropdown-trigger--full-width{display:flex}.v-dropdown-container{-webkit-font-smoothing:subpixel-antialiased;backface-visibility:hidden;display:inline-flex;margin:0;padding:0;position:absolute;top:0;left:0;border:1px solid #D6D7D7;box-sizing:border-box;background-color:#fff;border-radius:.3rem;overflow:hidden;z-index:3000;will-change:opacity,transform,top,left;box-shadow:0 15px 25px #0003}.v-dropdown-container.v-dropdown-no-border{border:0;border-radius:.5rem;box-shadow:0 10px 30px #0006}.sp-search{display:flex;align-items:center;padding:.5rem 0;transition:all .3s ease}.sp-search .sp-search-container{display:flex;align-items:center;flex-grow:1;padding:0;padding-left:.7rem;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input{border:0;border-radius:50rem;background-color:transparent;margin-left:5px;font-size:14px;line-height:1.43;padding:4px 6px;box-sizing:border-box;outline:none!important;color:#333;font-weight:600;flex-grow:1;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input.sp-search-input--rtl{direction:rtl}.sp-search .sp-search-container .sp-search-input::-moz-placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-search-input::placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-icon-loading{opacity:.5}.sp-search .sp-search-container .bi-search,.sp-search .sp-search-container .bi-x-lg{transition:all .3s ease;color:#aaa}.sp-search .sp-search-container .bi-search.sp-search-in-focus,.sp-search .sp-search-container .bi-x-lg.sp-search-in-focus{color:#000}.sp-search .sp-search-container .bi-x-lg{cursor:pointer}.sp-search .sp-search-container .bi-x-lg:hover{color:#000}.sp-search .sp-search-control{display:inline-flex;transition:all .3s ease;padding:0 .5rem}.sp-list{min-width:300px;max-height:320px;overflow-y:auto;padding:0 .3rem;transition:all .3s ease}.sp-list .sp-list-item{display:flex;align-items:center;justify-content:space-between;line-height:1.43;font-size:14px;text-align:left;overflow:hidden;white-space:nowrap;margin:0;padding:.25rem .5rem;color:#666;cursor:pointer;transition:all .2s ease}.sp-list .sp-list-item.sp-over{background-color:#f6f8fa!important;color:#000!important;border-radius:.4rem}.sp-list .sp-list-item.sp-selected{color:#ccc;cursor:default}.sp-list .sp-list-item.sp-rtl{direction:rtl;text-align:right}.sp-table{padding:0 .3rem;min-width:300px;max-height:320px;overflow-y:auto}.sp-table table{width:100%;border-spacing:0}.sp-table table td,.sp-table table th{font-size:14px;line-height:1.43;border:0!important}.sp-table table th{padding:0 8px 5px;font-weight:600;font-size:15px;color:#333;text-align:left}.sp-table table td{padding:.25rem .5rem;color:#666;cursor:pointer}.sp-table table tbody tr.sp-over td{background-color:#f6f8fa!important;color:#000!important}.sp-table table tbody tr.sp-over td:first-child{border-top-left-radius:.4rem;border-bottom-left-radius:.4rem}.sp-table table tbody tr.sp-over td:last-child{border-top-right-radius:.4rem;border-bottom-right-radius:.4rem}.sp-table table tbody tr.sp-selected td{color:#ccc;cursor:default}.sp-table table thead .sp-rtl th,.sp-table table tbody .sp-rtl td{direction:rtl;text-align:right}.sp-pagination{display:flex;justify-content:space-between;align-items:center;padding:5px 10px}.sp-pagination .sp-page-info{line-height:1;color:#0000004d;font-size:14px;font-weight:600;margin-right:10px}.sp-pagination .sp-page-control{padding:0;margin:0}.sp-pagination .sp-page-control .sp-page-button{display:inline-flex}.sp-pagination .sp-page-control .sp-page-button a{display:inline-flex;padding:7px;font-size:14px;color:#333;text-decoration:none;cursor:pointer;line-height:1;background:transparent;transition:all .3s ease;border-radius:.6rem}.sp-pagination .sp-page-control .sp-page-button a:hover{color:#000;background-color:#f1f1f1}.sp-pagination .sp-page-control .sp-page-button.sp-page-disabled a{color:#ddd;font-weight:400;background-color:transparent;cursor:default}.sp-trigger-container{display:flex;align-items:center;justify-content:space-between;flex-grow:1;padding:6px 12px 6px 6px;background-color:#fff;border:1px solid #ddd;border-radius:.3rem;font-size:14px;line-height:1.42857143;outline:0!important;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s ease}.sp-trigger-container:hover{border:1px solid #aaa}.sp-trigger-container.sp-disabled,.sp-trigger-container.sp-disabled:hover{border:1px solid #eee;background-color:#eee;cursor:default;color:#aaa}.sp-trigger-container.sp-disabled .sp-select,.sp-trigger-container.sp-disabled .sp-chips,.sp-trigger-container.sp-disabled:hover .sp-select,.sp-trigger-container.sp-disabled:hover .sp-chips{color:#aaa;background-color:#eee}.sp-trigger-container.sp-disabled .sp-chip,.sp-trigger-container.sp-disabled:hover .sp-chip{background-color:#d6d6d6!important;color:#666!important}.sp-trigger-container .bi-chevron-down{transition:transform .2s ease;margin-left:.5rem;font-size:1rem;color:#666}.sp-trigger-container.sp-opened{box-shadow:3px 2px 6px #0000004d;border:1px solid #666;color:#000}.sp-trigger-container.sp-opened .bi-chevron-down{transform:rotate(180deg)}.sp-trigger-container.sp-opened:hover{border:1px solid #666}.sp-trigger-container .sp-placeholder{color:#aaa;padding:5px;line-height:1}.sp-trigger-container .sp-trigger{display:flex;align-items:center;flex-wrap:wrap}.sp-trigger-container .sp-trigger.sp-select{justify-content:space-between;flex-grow:1}.sp-trigger-container .sp-trigger.sp-select .sp-select-content{padding:5px;line-height:1.143;color:#666}.sp-trigger-container .sp-trigger.sp-chips{gap:.5rem}.sp-trigger-container .sp-trigger .sp-chip{border-radius:.3rem;background-color:#eee;color:#666;display:inline-flex;align-items:center;padding:5px 7px;transition:all .2s ease}.sp-trigger-container .sp-trigger .sp-chip--body{display:inline-flex;line-height:1.143;margin-right:5px}.sp-trigger-container .sp-trigger .sp-chip:hover{background-color:#f7f7f7;color:#000}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { ref as y, computed as F, watch as le, onMounted as ve, provide as E, nextTick as X, inject as D, defineComponent as U, reactive as ge, onBeforeUnmount as Ve, onUnmounted as je, withDirectives as Re, h as i, vShow as Ue, Teleport as Ge, Transition as me, openBlock as M, createElementBlock as k, createElementVNode as T, mergeProps as ae, toRef as we } from "vue";
const [
  oe,
  ie,
  re,
  se,
  ye,
  be
] = [
  37,
  38,
  39,
  40,
  13,
  27
], Ze = [oe, ie, re, se, ye, be], j = -1, Se = 0, We = 0, V = 1, Ke = 10, Ce = "first", ee = "previous", te = "next", _e = "last", _ = "page_num", P = "page_count", I = "row_count", x = "max_select_limit", $ = "selected_count", [
  Xe,
  K,
  Ye,
  qe,
  Je,
  Qe,
  et,
  tt,
  nt,
  lt,
  at,
  ot,
  it,
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
  [Xe]: {
    // Chinese
    next: "下一页",
    prev: "上一页",
    first: "首页",
    last: "尾页",
    pageInfo: `第 ${_}/${P} 页(共 ${I} 条记录)`,
    notFound: "无查询结果",
    loadingData: "Loading data...",
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
    loadingData: "Loading data...",
    clear: "Clear content",
    clearAll: "Clear all selected",
    maxSelected: `You can only select up to ${x} items`,
    placeholder: "Select an option",
    selectedCount: `${$} items selected`,
    search: "Search"
  },
  [Ye]: {
    // Japanese
    next: "次へ",
    prev: "前へ",
    first: "最初のページへ",
    last: "最後のページへ",
    pageInfo: `${_}/${P} 件 (全 ${I} つ記録)`,
    notFound: "(0 件)",
    loadingData: "Loading data...",
    clear: "コンテンツをクリアする",
    clearAll: "選択した項目をクリアする",
    maxSelected: `最多で ${x} のプロジェクトを選ぶことしかできません`,
    placeholder: "プロジェクトを選択してください",
    selectedCount: `${$} アイテムが選択されました`,
    search: "検索"
  },
  [qe]: {
    // Arabic
    next: "التالي",
    prev: "السابق",
    first: "الاول",
    last: "الأخير",
    pageInfo: `صفحة ${_}/${P} (${I} سجلات)`,
    notFound: "لا يوجد نتائج",
    loadingData: "Loading data...",
    clear: "محو المحتوى",
    clearAll: "إلغاء التحديد",
    maxSelected: `يمكنك فقط تحديد (${x}) عناصر`,
    placeholder: "رجاء حدد الخيار",
    selectedCount: `تم تحديد (${$}) عناصر`,
    search: "يبحث"
  },
  [Je]: {
    // Spanish
    next: "Siguiente página",
    prev: "Pagina anterior",
    first: "Primera página",
    last: "última página",
    pageInfo: `Página ${_}/${P} (${I} registros)`,
    notFound: "no encontrado",
    loadingData: "Loading data...",
    clear: "Borrar contenido",
    clearAll: "Borrar todo lo seleccionado",
    maxSelected: `Solo puedes seleccionar hasta ${x} items`,
    placeholder: "Seleccione una opción",
    selectedCount: `${$} items Seleccionado`,
    search: "Buscar"
  },
  [Qe]: {
    // German
    next: "Nächste Seite",
    prev: "Vorherige Seite",
    first: "Erste Seite",
    last: "Letzte Seite",
    pageInfo: `Seite ${_}/${P} (${I} Einträge)`,
    notFound: "Nicht gefunden",
    loadingData: "Loading data...",
    clear: "Inhalt löschen",
    clearAll: "Alle ausgewählten löschen",
    maxSelected: `Sie können nur bis zu ${x} Elemente auswählen`,
    placeholder: "Wählen",
    selectedCount: `${$} Elemente ausgewählt`,
    search: "Suchen"
  },
  [et]: {
    // Romanian
    next: "Pagina următoare",
    prev: "Pagina precedentă",
    first: "Prima pagină",
    last: "Ultima pagină",
    pageInfo: `Pagina ${_}/${P} (${I} înregistrări)`,
    notFound: "nu a fost găsit",
    loadingData: "Loading data...",
    clear: "Șterge conținutul",
    clearAll: "Șterge înregistrările selectate",
    maxSelected: `Poți selecta până la ${x} înregistrări`,
    placeholder: "Selectează o înregistrare",
    selectedCount: `${$} înregistrări selectate`,
    search: "Căutare"
  },
  [tt]: {
    // Russian
    next: "Вперед",
    prev: "Назад",
    first: "В начало",
    last: "В конец",
    pageInfo: `${_} - ${P} / ${I}`,
    notFound: "Нет данных",
    loadingData: "Загрузка данных...",
    clear: "Очистить",
    clearAll: "Очистить выбранное",
    maxSelected: `Нельзя выбрать более ${x} значений`,
    placeholder: "Выберите значение",
    selectedCount: `${$} - выбрано`,
    search: "Поиск"
  },
  [nt]: {
    // French
    next: "Page suivante",
    prev: "Page précédente",
    first: "Première page",
    last: "Dernière page",
    pageInfo: `Page ${_}/${P} (${I} lignes)`,
    notFound: "Aucun résultat",
    loadingData: "Loading data...",
    clear: "Effacer",
    clearAll: "Tout déselectionner",
    maxSelected: `Vous ne pouvez pas sélectionner plus de ${x} élements`,
    placeholder: "Sélectionnez une option",
    selectedCount: `${$} éléments sélectionnés`,
    search: "Recherche"
  },
  [lt]: {
    // Portuguese-Brazil
    next: "Página seguinte",
    prev: "Página anterior",
    first: "Primera página",
    last: "Última página",
    pageInfo: `Página ${_}/${P} (${I} registros)`,
    notFound: "não encontrado",
    loadingData: "Loading data...",
    clear: "Apagar conteúdo",
    clearAll: "Apagar itens selecionados",
    maxSelected: `Máximo permitido ${x} itens`,
    placeholder: "Selecione uma opção",
    selectedCount: `${$} itens selecionados`,
    search: "Procurar"
  },
  [at]: {
    // Polish
    next: "Następna",
    prev: "Poprzednia",
    first: "Pierwsza",
    last: "Ostatnia",
    pageInfo: `Strona ${_}/${P} (${I} rekordów)`,
    notFound: "Nic nie znaleziono",
    loadingData: "Loading data...",
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
    loadingData: "Loading data...",
    clear: "Wissen",
    clearAll: "Wis selectie",
    maxSelected: `Je kunt maar ${x} items selecteren`,
    placeholder: "Kies een optie",
    selectedCount: `${$} Items geselecteerd`,
    search: "Zoekopdracht"
  },
  [it]: {
    // Traditional Chinese
    next: "下一頁",
    prev: "上一頁",
    first: "首頁",
    last: "尾頁",
    pageInfo: `第 ${_}/${P} 頁(共 ${I} 條記錄)`,
    notFound: "無查詢結果",
    loadingData: "Loading data...",
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
    loadingData: "Loading data...",
    clear: "İçeriği temizle",
    clearAll: "Tüm seçilenleri bırak",
    maxSelected: "Sadece max_selected_limit kadar seçim yapabilirsin.",
    placeholder: "Seçim yapınız.",
    selectedCount: "selected_count seçildi.",
    search: "Aramak"
  }
};
function st(e) {
  if (!e)
    return W[K];
  const t = String(e).toLowerCase();
  return Object.hasOwn(W, t) ? W[t] : W[K];
}
function ce(e = 3e3) {
  let t;
  return (n) => {
    clearTimeout(t), t = setTimeout(n, e);
  };
}
function R(e) {
  return !e || !Object.hasOwn(e, "multiple") ? !1 : typeof e.multiple == "boolean" ? e.multiple : e.multiple === "";
}
function ct(e) {
  return [ie, se].includes(e);
}
function ut(e) {
  return [oe, re].includes(e);
}
function dt(e) {
  return ye === e;
}
function gt(e) {
  return be === e;
}
function ft(e) {
  e && e.focus({ preventScroll: !0 });
}
function ne(e) {
  return Array.isArray(e) ? !e.length : !0;
}
function Pe(e) {
  return typeof e == "string" ? e : typeof e == "number" ? `${e}px` : "";
}
const Ie = () => ({
  list: { type: Array, default: void 0 },
  highlightIndex: { type: Number, default: j }
}), xe = () => ["select", "set-highlight"];
function pt(e, t) {
  const n = y([]), r = F(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.length;
  });
  function a(c) {
    var f;
    return (f = n.value) != null && f.length ? n.value.some((h) => h[e.keyProp] === c[e.keyProp]) : !1;
  }
  function o(c) {
    var f;
    return !((f = n.value) != null && f.length) || typeof c > "u" ? !1 : n.value.some((h) => h[e.keyProp] === c);
  }
  function u(c) {
    var h;
    const f = new Set(c);
    return f.size !== ((h = n.value) == null ? void 0 : h.length) ? !1 : Array.from(f).every(o);
  }
  function d(c) {
    if (!a(c)) {
      if (e.multiple) {
        g([...n.value, c]);
        return;
      }
      g([c]);
    }
  }
  function s() {
    t("remove", n.value), g(e.multiple ? [] : null);
  }
  function l(c) {
    t("remove", [c]), g(
      n.value.filter((f) => f[e.keyProp] !== c[e.keyProp])
    );
  }
  function g(c, f = !0) {
    n.value = c, f && t("update:modelValue", c == null ? void 0 : c.map((h) => h[e.keyProp])), t("selection-change", c);
  }
  return {
    selected: n,
    selectedCount: r,
    isItemSelected: a,
    selectItem: d,
    removeItem: l,
    removeAll: s,
    setSelected: g,
    isKeysEqualToSelected: u
  };
}
function ht(e, t, n) {
  const r = y(j);
  function a(l) {
    r.value = l;
  }
  function o() {
    r.value !== j && r.value !== 0 && (r.value -= 1);
  }
  function u() {
    ne(n.value) || r.value !== n.value.length - 1 && (r.value += 1);
  }
  function d(l) {
    if (l === ie)
      return o();
    if (l === se)
      return u();
  }
  function s() {
    return r.value !== j;
  }
  return {
    highlightIndex: r,
    setItemHighlight: a,
    highlightNavigation: d,
    isSomeRowHighlight: s
  };
}
function fe(e) {
  return Ze.includes(e);
}
function $e() {
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
    pageSize: { type: Number, default: Ke },
    /**
     * maximum number of selection, set 0 to unlimited
     * depend on `multiple` prop set to true
     */
    max: { type: Number, default: Se, validator: (e) => e >= 0 },
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
function Ae() {
  return {
    disabled: { type: Boolean, default: !1 },
    /** Add custom class to trigger container, work on dropdown selection mode */
    customTriggerClass: { type: String, default: "" },
    /** Add custom class to dropdown container, work on dropdown selection mode */
    customContainerClass: { type: String, default: "" }
  };
}
function Te() {
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
function vt(e, t) {
  const n = st(e.language), {
    selected: r,
    selectedCount: a,
    isItemSelected: o,
    removeAll: u,
    removeItem: d,
    selectItem: s,
    setSelected: l,
    isKeysEqualToSelected: g
  } = pt(e, t), c = y(""), f = y(""), h = y(V), S = y(0), C = y([]), v = y(!1), A = ce(), L = () => ne(C.value), b = (m) => {
    if (!m || !Object.keys(m).length)
      return "";
    switch (typeof e.labelProp) {
      case "string":
        return m[e.labelProp];
      case "function":
        return e.labelProp(m);
    }
  }, p = (m) => {
    if (e.max === Se)
      return s(m);
    if (e.multiple && r.value.length === e.max) {
      f.value = n.maxSelected.replace(x, e.max), A(() => {
        f.value = "";
      });
      return;
    }
    s(m);
  }, O = () => {
    v.value = !0;
    const m = {
      search: c.value,
      pageNumber: h.value,
      pageSize: e.pagination ? e.pageSize : We
    };
    t("fetch-data", m, (B, Z) => {
      Array.isArray(B) && (C.value = B, S.value = typeof Z == "number" ? Z : 0, X(() => {
        v.value = !1;
      }));
    });
  }, z = () => {
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
      g(m) || t("fetch-selected-data", m, (B) => {
        Array.isArray(B) && l(B, m.length !== B.length);
      });
    }
  };
  return le(c, () => {
    h.value = V, O();
  }), ve(() => {
    e.fetchDataOnMount && O(), ne(e.modelValue) || z();
  }), E("keyProp", e.keyProp), E("rtl", e.rtl), E("pageSize", e.pageSize), E("debounce", e.debounce), E("multiple", e.multiple), E("loading", v), E("language", n), E("renderCell", b), E("isItemSelected", o), E("selectedCount", a), E("removeAll", u), E("removeItem", d), {
    selected: r,
    query: c,
    message: f,
    currentPage: h,
    totalRows: S,
    lang: n,
    list: C,
    loading: v,
    renderCell: b,
    isDataEmpty: L,
    isItemSelected: o,
    selectedCount: a,
    selectItem: p,
    removeAll: u,
    removeItem: d,
    fetchData: O
  };
}
function H() {
  return {
    keyProp: D("keyProp"),
    renderCell: D("renderCell"),
    rtl: D("rtl"),
    isItemSelected: D("isItemSelected"),
    pageSize: D("pageSize"),
    language: D("language"),
    debounce: D("debounce"),
    multiple: D("multiple"),
    loading: D("loading"),
    selectedCount: D("selectedCount"),
    removeAll: D("removeAll"),
    removeItem: D("removeItem")
  };
}
function mt(e, t, n, r) {
  const a = F(() => Math.ceil(n.value / e.pageSize)), o = F(() => t.value === V), u = F(() => t.value === a.value), d = F(
    () => r.pageInfo.replace(_, t.value).replace(P, a.value).replace(I, n.value)
  ), s = function(c) {
    switch (c) {
      case Ce:
        return V;
      case ee:
        return t.value - 1;
      case te:
        return t.value + 1;
      case _e:
        return a.value;
    }
  }, l = function(c) {
    let f = s(c);
    typeof f > "u" || (f < V && (f = V), f > a.value && (f = a.value), f !== t.value && (t.value = f));
  };
  return {
    paginationInfo: d,
    isFirstPage: o,
    isLastPage: u,
    switchPage: l,
    pagingNavigation: (c) => {
      if (c === oe)
        return l(ee);
      if (c === re)
        return l(te);
    }
  };
}
function wt() {
  const e = window.pageXOffset !== void 0, t = (document.compatMode || "") === "CSS1Compat";
  return {
    x: e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop
  };
}
function yt(e) {
  return window.getComputedStyle(e).display === "none";
}
function pe(e) {
  if (yt(e)) {
    e.style.visibility = "hidden", e.style.display = "inline-block";
    const t = e.getBoundingClientRect();
    return e.style.visibility = "visible", e.style.display = "none", t;
  }
  return e.getBoundingClientRect();
}
const Le = "click", bt = "hover", St = "contextmenu", he = 150, Q = 5;
function Ct(e, t) {
  return typeof e.animated == "string" ? e.animated : e.animated ? t.value ? "animate-up" : "animate-down" : "";
}
function ue(e) {
  return {
    isTriggerByClick: e.trigger === Le,
    isTriggerByHover: e.trigger === bt,
    isTriggerByContextmenu: e.trigger === St
  };
}
function _t(e, t, n, r) {
  const { isTriggerByContextmenu: a } = ue(e), o = window.pageYOffset, u = document.documentElement.clientHeight, d = a ? t : n.top + o;
  let s = a ? t : n.top + n.height + Q + o, l = !1, g = !1, c = !1;
  return s + r.height > o + u && (l = !0), d - Q - r.height < o && (g = !0), !g && l && (s = d - Q - r.height, c = !0), { dropUp: c, top: s };
}
function Pt(e, t, n, r) {
  const { isTriggerByContextmenu: a } = ue(e), o = window.pageXOffset, u = document.documentElement.clientWidth, d = a ? 0 : n.width, s = a ? t : n.left + o, l = s + d / 2 - r.width / 2, g = s + d - r.width;
  switch (e.align) {
    case "left":
      return s + r.width > o + u ? g : s;
    case "center":
      return l + r.width > o + u ? g : g < o ? s : l;
    case "right":
      return g < o ? s : g;
  }
}
function It(e) {
  const t = wt();
  return {
    x: e.pageX || e.clientX + t.x,
    y: e.pageY || e.clientY + t.y
  };
}
function xt(e) {
  return [
    "v-dropdown-container",
    e.border || "v-dropdown-no-border",
    e.customContainerClass && e.customContainerClass
  ];
}
function $t(e) {
  return [
    "v-dropdown-trigger",
    e.fullWidth && "v-dropdown-trigger--full-width",
    e.customTriggerClass && e.customTriggerClass
  ];
}
const At = U({
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
    trigger: { type: String, default: Le },
    /** Add custom class to trigger */
    customTriggerClass: { type: String, default: "" },
    /** Add custom class to container */
    customContainerClass: { type: String, default: "" }
  },
  emits: ["visible-change"],
  setup(e, { slots: t, emit: n, expose: r }) {
    const a = y(!1), o = ge({ top: "", left: "", width: "" }), u = ge({ x: null, y: null }), d = y(!1), s = y(null), l = y(null), g = y(null), {
      isTriggerByClick: c,
      isTriggerByHover: f,
      isTriggerByContextmenu: h
    } = ue(e);
    le(a, (b) => n("visible-change", b));
    function S() {
      e.disabled || ("trigger" in t && A(), f ? (window.clearTimeout(s.value), s.value = window.setTimeout(() => {
        a.value = !0;
      }, he)) : a.value = !0);
    }
    function C(b = !1) {
      e.disabled || !e.toggle && !b || (f ? (window.clearTimeout(s.value), s.value = window.setTimeout(() => {
        a.value = !1;
      }, he)) : a.value = !1);
    }
    function v() {
      a.value ? C() : S();
    }
    function A() {
      const b = pe(l.value), p = pe(g.value), O = _t(e, u.y, b, p), z = Pt(e, u.x, b, p);
      d.value = O.dropUp, o.top = `${O.top}px`, o.left = `${z}px`;
    }
    function L(b) {
      if (!a.value)
        return;
      const p = b.composedPath().some((O) => O === l.value);
      p && !e.toggle && !h || (!p || p && h) && C(!0);
    }
    return ve(() => {
      typeof e.width < "u" && (o.width = e.width + "px"), document.body.addEventListener("mousedown", L);
    }), Ve(() => {
      document.body.removeEventListener("mousedown", L), g.value && g.value.remove();
    }), je(() => {
      l.value && l.value.remove();
    }), r({
      display: S,
      close: C,
      toggleVisible: v,
      adjust: A,
      container: g,
      visible: a
    }), () => {
      const b = [];
      "trigger" in t && b.push(t.trigger({
        visible: a,
        disabled: e.disabled
      }));
      const p = {
        class: xt(e),
        style: o,
        ref: g,
        // do not close dropdown container when
        // do some operations in that
        onMousedown: (m) => m.stopPropagation()
      };
      f && (p.onMouseenter = S, p.onMouseleave = C);
      const O = Re(
        i("div", p, t.default && t.default()),
        [[Ue, a.value]]
      );
      b.push(
        i(Ge, { to: "body" }, [
          i(me, { name: Ct(e, d) }, () => [O])
        ])
      );
      const z = {
        class: $t(e),
        ref: l
      };
      return f ? (z.onMouseenter = S, z.onMouseleave = C) : c ? z.onClick = (m) => {
        e.manual || (m.stopPropagation(), v());
      } : h && (z.onContextmenu = (m) => {
        if (e.manual)
          return;
        m.stopPropagation(), m.preventDefault();
        const B = It(m);
        u.x = B.x, u.y = B.y, S();
      }), i("div", z, b);
    };
  }
});
const G = {
  name: "SelectPageCircleButton",
  props: {
    size: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 },
    bgColor: { type: String, default: "transparent" },
    hoverBgColor: { type: String, default: "#f1f1f1" }
  },
  setup(e, { slots: t }) {
    const n = y(""), r = F(() => ({
      "sp-circle-btn--disabled": e.disabled,
      "sp-circle-btn--small": e.size === "small",
      "sp-circle-btn--large": e.size === "large"
    })), a = F(() => ({
      "font-size": e.fontSize,
      "background-color": e.disabled ? "transparent" : n.value
    }));
    return () => {
      const o = {
        class: ["sp-circle-btn", r.value],
        style: a.value,
        onMouseenter() {
          n.value = e.hoverBgColor;
        },
        onMouseleave() {
          n.value = e.bgColor;
        }
      };
      return i("div", o, t.default && t.default());
    };
  }
}, N = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Tt = {}, Lt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-search",
  viewBox: "0 0 16 16"
};
function Ot(e, t) {
  return M(), k("svg", Lt, t[0] || (t[0] = [
    T("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }, null, -1)
  ]));
}
const Et = /* @__PURE__ */ N(Tt, [["render", Ot]]), Dt = {}, zt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-x-lg",
  viewBox: "0 0 16 16"
};
function Bt(e, t) {
  return M(), k("svg", zt, t[0] || (t[0] = [
    T("path", { d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" }, null, -1)
  ]));
}
const Y = /* @__PURE__ */ N(Dt, [["render", Bt]]), Mt = {}, kt = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  class: "sp-icon sp-icon-loading"
};
function Nt(e, t) {
  return M(), k("svg", kt, t[0] || (t[0] = [
    T("path", {
      d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
      opacity: ".25"
    }, null, -1),
    T("path", { d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" }, [
      T("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        dur: "0.75s",
        values: "0 12 12;360 12 12",
        repeatCount: "indefinite"
      })
    ], -1)
  ]));
}
const Ft = /* @__PURE__ */ N(Mt, [["render", Nt]]), Ht = {
  props: {
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue", "keyboard-operation"],
  setup(e, { emit: t, expose: n }) {
    const { rtl: r, debounce: a, loading: o, language: u, selectedCount: d, multiple: s } = H(), l = y(!1), g = y(), c = ce(a), f = F(() => !s || !d.value ? u.search : u.selectedCount.replace($, d.value)), h = () => ft(g.value);
    return n({ focus: h }), () => {
      const C = [
        F(() => o.value ? i(Ft) : i(Et, { class: l.value ? "sp-search-in-focus" : "" })).value,
        i("input", {
          type: "text",
          autocomplete: "off",
          value: e.modelValue.trim(),
          class: {
            "sp-search-input": !0,
            "sp-search-input--rtl": r
          },
          disabled: o.value,
          placeholder: f.value,
          onKeydown: (v) => {
            v.stopPropagation(), fe(v.keyCode) && t("keyboard-operation", v.keyCode);
          },
          onFocus: () => {
            l.value = !0;
          },
          onBlur: () => {
            l.value = !1;
          },
          onInput: (v) => {
            fe(v.keyCode) || c(() => {
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
        C.push(
          i(G, v, () => i(Y))
        );
      }
      return i("div", { class: "sp-search-container" }, C);
    };
  }
}, Vt = {}, jt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-trash3",
  viewBox: "0 0 16 16"
};
function Rt(e, t) {
  return M(), k("svg", jt, t[0] || (t[0] = [
    T("path", { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" }, null, -1)
  ]));
}
const Ut = /* @__PURE__ */ N(Vt, [["render", Rt]]), Gt = {
  setup() {
    const { selectedCount: e, removeAll: t, language: n } = H();
    return () => {
      const r = [], a = {
        title: n.clearAll,
        size: "large",
        // bgColor: '#f1f1f1',
        // hoverBgColor: '#ddd',
        disabled: !e.value,
        onClick: t
      };
      return r.push(
        i(G, a, () => i(Ut))
      ), i("div", { class: "sp-search-control" }, r);
    };
  }
};
const Zt = {
  props: {
    data: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { renderCell: n, rtl: r, removeItem: a } = H();
    return () => {
      const o = n(e.data), u = {
        class: {
          "sp-list-item": !0,
          "sp-over": !e.isSelected && e.isHover,
          "sp-selected": e.isSelected,
          "sp-rtl": r
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, d = [
        i("div", { title: o, innerHTML: o })
      ];
      if (e.isSelected) {
        const s = {
          onClick: (l) => {
            l.stopPropagation(), a(e.data);
          }
        };
        d.push(
          i(G, s, () => i(Y))
        );
      }
      return i("div", u, d);
    };
  }
}, Wt = {
  name: "SelectPageList",
  props: Ie(),
  emits: xe(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, keyProp: r } = H();
    return () => {
      const a = e.list.map((u, d) => i(Zt, {
        key: u[r],
        data: u,
        isHover: e.highlightIndex === d,
        isSelected: n(u),
        onSelect: () => t("select", u),
        onHover: () => t("set-highlight", d)
      }));
      return i("div", {
        class: "sp-list",
        onMouseleave: () => t("set-highlight", j)
      }, a);
    };
  }
};
const Kt = {
  props: {
    columns: { type: Object, default: void 0 },
    row: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { row: n } = e, { rtl: r } = H(), a = (o) => {
      if (!n || !Object.keys(n).length || !(o != null && o.data))
        return "";
      switch (typeof o.data) {
        case "string":
          return n[o.data];
        case "function":
          return o.data(n);
      }
    };
    return () => {
      const o = {
        class: {
          "sp-over": !e.isSelected && e.isHover,
          "sp-selected": e.isSelected,
          "sp-rtl": r
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, u = e.columns.map((d, s) => {
        const l = {
          key: s,
          innerHTML: a(d)
        };
        return Object.hasOwn(d, "width") && (l.style = { width: Pe(d.width) }), i("td", l);
      });
      return i("tr", o, u);
    };
  }
}, Xt = {
  name: "SelectPageTable",
  props: {
    ...Ie(),
    columns: { type: Array, default: void 0 }
  },
  emits: xe(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, rtl: r, keyProp: a } = H();
    return () => {
      const o = e.columns.map((s) => i("th", s.title)), u = e.list.map((s, l) => i(Kt, {
        key: s[a],
        row: s,
        columns: e.columns,
        isHover: e.highlightIndex === l,
        isSelected: n(s),
        onSelect: () => t("select", s),
        onHover: () => t("set-highlight", l)
      })), d = i("table", [
        // table thead
        i("thead", i("tr", { class: { "sp-rtl": r } }, o)),
        // table tbody
        i("tbody", { onMouseleave: () => t("set-highlight", j) }, u)
      ]);
      return i("div", { class: "sp-table" }, d);
    };
  }
};
const Yt = {}, qt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-left",
  viewBox: "0 0 16 16"
};
function Jt(e, t) {
  return M(), k("svg", qt, t[0] || (t[0] = [
    T("path", {
      "fill-rule": "evenodd",
      d: "M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
    }, null, -1)
  ]));
}
const Qt = /* @__PURE__ */ N(Yt, [["render", Jt]]), en = {}, tn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-left",
  viewBox: "0 0 16 16"
};
function nn(e, t) {
  return M(), k("svg", tn, t[0] || (t[0] = [
    T("path", {
      "fill-rule": "evenodd",
      d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    }, null, -1)
  ]));
}
const ln = /* @__PURE__ */ N(en, [["render", nn]]), an = {}, on = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-right",
  viewBox: "0 0 16 16"
};
function rn(e, t) {
  return M(), k("svg", on, t[0] || (t[0] = [
    T("path", {
      "fill-rule": "evenodd",
      d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ]));
}
const sn = /* @__PURE__ */ N(an, [["render", rn]]), cn = {}, un = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-right",
  viewBox: "0 0 16 16"
};
function dn(e, t) {
  return M(), k("svg", un, t[0] || (t[0] = [
    T("path", {
      "fill-rule": "evenodd",
      d: "M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
    }, null, -1)
  ]));
}
const gn = /* @__PURE__ */ N(cn, [["render", dn]]), fn = {
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
      const a = [
        { action: Ce, title: n.first, disabled: e.isFirstPage, icon: Qt },
        { action: ee, title: n.prev, disabled: e.isFirstPage, icon: ln },
        { action: te, title: n.next, disabled: e.isLastPage, icon: sn },
        { action: _e, title: n.last, disabled: e.isLastPage, icon: gn }
      ].map((o) => {
        const u = {
          href: "javascript:void(0)",
          onClick: () => t("page-change", o.action)
        }, d = [{ "sp-page-disabled": o.disabled }, "sp-page-button"];
        return i("div", { class: d, title: o.title }, [
          i("a", u, i(o.icon))
        ]);
      });
      return i("div", { class: "sp-pagination" }, [
        i("div", { class: "sp-page-info" }, e.pageInfo),
        i("div", { class: "sp-page-control" }, a)
      ]);
    };
  }
}, pn = {}, hn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chat-left-dots",
  viewBox: "0 0 16 16"
};
function vn(e, t) {
  return M(), k("svg", hn, t[0] || (t[0] = [
    T("path", { d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, null, -1),
    T("path", { d: "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)
  ]));
}
const mn = /* @__PURE__ */ N(pn, [["render", vn]]);
function Oe(e, t) {
  const {
    lang: n,
    selected: r,
    query: a,
    message: o,
    currentPage: u,
    totalRows: d,
    list: s,
    loading: l,
    isDataEmpty: g,
    selectItem: c,
    fetchData: f,
    renderCell: h,
    removeAll: S,
    removeItem: C
  } = vt(e, t), {
    highlightIndex: v,
    setItemHighlight: A,
    highlightNavigation: L,
    isSomeRowHighlight: b
  } = ht(e, t, s), {
    paginationInfo: p,
    isFirstPage: O,
    isLastPage: z,
    switchPage: m,
    pagingNavigation: B
  } = mt(e, u, d, n), Z = ce(e.debounce), q = y();
  le(l, (w) => {
    w || X(() => q.value && q.value.focus());
  });
  const Me = () => {
  }, ke = () => i("div", { class: "sp-search" }, [
    i(Ht, {
      ref: q,
      modelValue: a.value,
      "onUpdate:modelValue"(w) {
        a.value = w;
      },
      onKeyboardOperation: (w) => {
        if (ct(w))
          return L(w);
        if (ut(w)) {
          B(w), Z(f);
          return;
        }
        if (dt(w))
          return b() ? c(s.value[v.value]) : void 0;
        gt(w) && t("close-dropdown");
      }
    }),
    i(Gt)
  ]), Ne = () => {
    const w = [];
    return o.value && w.push(
      i("div", { class: "sp-message" }, [
        i(mn),
        i("div", { class: "sp-message-body", innerHTML: o.value })
      ])
    ), i(me, {
      name: "sp-message-slide",
      appear: !0,
      onEnter: () => t("adjust-dropdown"),
      onAfterLeave: () => t("adjust-dropdown")
    }, () => w);
  }, Fe = () => g() ? de() : i(Wt, {
    list: s.value,
    highlightIndex: v.value,
    onSelect: (w) => c(w),
    onSetHighlight: (w) => A(w)
  }), He = () => g() ? de() : i(Xt, {
    list: s.value,
    columns: e.columns,
    highlightIndex: v.value,
    onSelect: (w) => c(w),
    onSetHighlight: (w) => A(w)
  }), de = () => i("div", { class: "sp-result-message" }, l.value ? "" : n.notFound);
  return {
    selected: r,
    query: a,
    message: o,
    currentPage: u,
    lang: n,
    renderCell: h,
    removeAll: S,
    removeItem: C,
    setSearchFocus: Me,
    renderSearch: ke,
    renderMessage: Ne,
    renderList: Fe,
    renderTable: He,
    renderPagination: () => {
      if (e.pagination)
        return i(fn, {
          pageInfo: p.value,
          isFirstPage: O.value,
          isLastPage: z.value,
          onPageChange(w) {
            m(w), f();
          }
        });
    },
    renderContainer: (w) => {
      const J = y({
        class: {
          "sp-container": !0,
          "sp-loading": l.value
        }
      });
      return e.width && (J.value.style = { width: Pe(e.width) }), i("div", J.value, w);
    },
    fetchData: f
  };
}
function Ee(e) {
  const t = y(!1), n = y();
  function r() {
    n.value && n.value.close();
  }
  function a() {
    n.value && n.value.adjust();
  }
  function o(u, d, s) {
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
    return i(At, ae(l, u), {
      trigger: () => d,
      default: () => s
    });
  }
  return {
    visible: t,
    dropdownRef: n,
    renderDropdown: o,
    closeDropdown: r,
    adjustDropdown: a
  };
}
const wn = U({
  name: "SelectPageListCore",
  props: {
    ...$e()
  },
  emits: Te(),
  setup(e, { emit: t, expose: n }) {
    const {
      selected: r,
      lang: a,
      renderCell: o,
      removeAll: u,
      removeItem: d,
      setSearchFocus: s,
      renderSearch: l,
      renderMessage: g,
      renderList: c,
      renderPagination: f,
      renderContainer: h,
      fetchData: S
    } = Oe(e, t);
    return n({
      selected: r,
      lang: a,
      renderCell: o,
      removeAll: u,
      removeItem: d,
      setSearchFocus: s,
      fetchData: S
    }), () => h([
      l(),
      g(),
      c(),
      f()
    ]);
  }
});
const yn = {}, bn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-down",
  viewBox: "0 0 16 16"
};
function Sn(e, t) {
  return M(), k("svg", bn, t[0] || (t[0] = [
    T("path", {
      "fill-rule": "evenodd",
      d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ]));
}
const Cn = /* @__PURE__ */ N(yn, [["render", Sn]]), De = {
  props: {
    dropdownVisible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    lang: { type: Object, default: void 0 }
  },
  setup(e, { slots: t }) {
    return () => {
      var a;
      const n = [];
      Object.hasOwn(t, "default") ? n.push(t.default()) : n.push(
        i("div", { class: "sp-placeholder" }, e.placeholder || ((a = e.lang) == null ? void 0 : a.placeholder))
      ), n.push(i(Cn));
      const r = {
        class: {
          "sp-trigger-container": !0,
          "sp-opened": e.dropdownVisible,
          "sp-disabled": e.disabled
        }
      };
      return i("div", r, n);
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
    const n = we(e, "selected");
    return () => {
      var a, o;
      if (!((a = n.value) != null && a.length))
        return;
      const r = [
        i("div", { class: "sp-select-content", innerHTML: e.renderCell(n.value[0]) })
      ];
      if ((o = n.value) != null && o.length && !e.disabled) {
        const u = {
          title: e.lang.clear,
          onClick: (d) => {
            d.stopPropagation(), t("remove");
          }
        };
        r.push(
          i(G, u, () => i(Y))
        );
      }
      return i("div", { class: "sp-trigger sp-select" }, r);
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
    const n = we(e, "selected");
    return () => {
      const r = n.value.map((a, o) => {
        const u = [
          i("div", { class: "sp-chip--body", innerHTML: e.renderCell(a) })
        ];
        if (!e.disabled) {
          const d = {
            size: "small",
            hoverBgColor: "#ccc",
            onClick: (s) => {
              s.stopPropagation(), t("remove", a);
            }
          };
          u.push(
            i(G, d, () => i(Y))
          );
        }
        return i("div", { class: "sp-chip", key: o }, u);
      });
      return i("div", { class: "sp-trigger sp-chips" }, r);
    };
  }
}, $n = U({
  name: "SelectPageList",
  inheritAttrs: !1,
  props: {
    ...Ae()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n, expose: r }) {
    const {
      visible: a,
      adjustDropdown: o,
      closeDropdown: u,
      renderDropdown: d
    } = Ee(e), s = y([]), l = y();
    return r({
      removeItem: (g) => {
        var c;
        return (c = l.value) == null ? void 0 : c.removeItem(g);
      },
      removeAll: () => {
        var g;
        return (g = l.value) == null ? void 0 : g.removeAll();
      }
    }), () => {
      var v, A, L, b;
      const g = {
        selected: s,
        disabled: e.disabled,
        lang: (v = l == null ? void 0 : l.value) == null ? void 0 : v.lang,
        renderCell: (A = l == null ? void 0 : l.value) == null ? void 0 : A.renderCell,
        onRemove(p) {
          R(n) ? l.value.removeItem(p) : l.value.removeAll();
        }
      }, c = (L = s.value) != null && L.length ? () => i(R(n) ? Be : ze, g) : void 0, f = {
        dropdownVisible: a.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (b = l == null ? void 0 : l.value) == null ? void 0 : b.lang
      }, h = i(De, f, c);
      return d(
        {
          onVisibleChange: (p) => {
            t("visible-change", p), p && X(() => {
              (c === void 0 || s.value) && l.value.fetchData(), l.value.setSearchFocus();
            });
          }
        },
        h,
        i(wn, ae({
          ref: l,
          onAdjustDropdown: o,
          onCloseDropdown: u,
          onSelectionChange(p) {
            s.value = p, !R(n) && (p != null && p.length) && u();
          }
        }, n))
      );
    };
  }
}), _n = U({
  name: "SelectPageTableCore",
  props: {
    ...$e(),
    /**
     * table column settings
     */
    columns: { type: Array, default: void 0 }
  },
  emits: Te(),
  setup(e, { emit: t, expose: n }) {
    const {
      selected: r,
      lang: a,
      removeAll: o,
      removeItem: u,
      setSearchFocus: d,
      renderCell: s,
      renderSearch: l,
      renderMessage: g,
      renderTable: c,
      renderPagination: f,
      renderContainer: h,
      fetchData: S
    } = Oe(e, t);
    return n({
      selected: r,
      lang: a,
      renderCell: s,
      removeAll: o,
      removeItem: u,
      setSearchFocus: d,
      fetchData: S
    }), () => h([
      l(),
      g(),
      c(),
      f()
    ]);
  }
}), An = U({
  name: "SelectPageTable",
  inheritAttrs: !1,
  props: {
    ...Ae()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n, expose: r }) {
    const {
      visible: a,
      adjustDropdown: o,
      closeDropdown: u,
      renderDropdown: d
    } = Ee(e), s = y([]), l = y();
    return r({
      removeItem: (g) => {
        var c;
        return (c = l.value) == null ? void 0 : c.removeItem(g);
      },
      removeAll: () => {
        var g;
        return (g = l.value) == null ? void 0 : g.removeAll();
      }
    }), () => {
      var v, A, L, b;
      const g = {
        selected: s,
        disabled: e.disabled,
        lang: (v = l == null ? void 0 : l.value) == null ? void 0 : v.lang,
        renderCell: (A = l == null ? void 0 : l.value) == null ? void 0 : A.renderCell,
        onRemove(p) {
          R(n) ? l.value.removeItem(p) : l.value.removeAll();
        }
      }, c = (L = s.value) != null && L.length ? () => i(R(n) ? Be : ze, g) : void 0, f = {
        dropdownVisible: a.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (b = l == null ? void 0 : l.value) == null ? void 0 : b.lang
      }, h = i(De, f, c);
      return d(
        {
          onVisibleChange: (p) => {
            t("visible-change", p), p && X(() => {
              l.value.fetchData(), l.value.setSearchFocus();
            });
          }
        },
        h,
        i(_n, ae({
          ref: l,
          onAdjustDropdown: o,
          onCloseDropdown: u,
          onSelectionChange(p) {
            s.value = p, !R(n) && (p != null && p.length) && u();
          }
        }, n))
      );
    };
  }
});
export {
  $n as SelectPageList,
  wn as SelectPageListCore,
  An as SelectPageTable,
  _n as SelectPageTableCore
};
