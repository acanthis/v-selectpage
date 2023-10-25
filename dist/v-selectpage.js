(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".sp-result-message{padding:20px 0;text-align:center;font-weight:700;color:#999}.sp-container{min-width:300px;display:inline-flex;overflow:hidden;flex-direction:column;font-family:Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}.sp-message{display:flex;align-items:center;padding:10px 0;background-color:#e4eaee;color:#000;flex-grow:1}.sp-message .bi-chat-left-dots{font-size:1.2rem;margin:0 1rem}.sp-message .sp-message-body{font-size:14px;line-height:1;flex-wrap:wrap;max-width:15rem}.sp-message-slide-enter-active,.sp-message-slide-leave-active{transition:opacity .3s}.sp-message-slide-enter,.sp-message-slide-leave-to{opacity:0}.sp-message-slide-enter-to,.sp-message-slide-leave{opacity:1}.sp-icon{width:1em;height:1em}.sp-icon.sp-icon-small{font-size:1rem}.sp-icon.sp-icon-medium{font-size:1.3rem}.sp-circle-btn{width:20px;height:20px;font-size:14px;line-height:1;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;color:#aaa;transition:all .3s ease;border-radius:50%}.sp-circle-btn:hover{color:#000}.sp-circle-btn.sp-circle-btn--disabled,.sp-circle-btn.sp-circle-btn--disabled:hover{cursor:default;color:#eee}.sp-circle-btn.sp-circle-btn--small{width:16px;height:16px;font-size:12px}.sp-circle-btn.sp-circle-btn--large{width:28px;height:28px;font-size:16px}.sp-search{display:flex;align-items:center;padding:.5rem 0;transition:all .3s ease}.sp-search .sp-search-container{display:flex;align-items:center;flex-grow:1;padding:0;padding-left:.7rem;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input{border:0;border-radius:50rem;background-color:transparent;margin-left:5px;font-size:14px;line-height:1.43;padding:4px 6px;box-sizing:border-box;outline:none!important;color:#333;font-weight:600;flex-grow:1;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input.sp-search-input--rtl{direction:rtl}.sp-search .sp-search-container .sp-search-input::-moz-placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-search-input::placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-icon-loading{opacity:.5}.sp-search .sp-search-container .bi-search,.sp-search .sp-search-container .bi-x-lg{transition:all .3s ease;color:#aaa}.sp-search .sp-search-container .bi-search.sp-search-in-focus,.sp-search .sp-search-container .bi-x-lg.sp-search-in-focus{color:#000}.sp-search .sp-search-container .bi-x-lg{cursor:pointer}.sp-search .sp-search-container .bi-x-lg:hover{color:#000}.sp-search .sp-search-control{display:inline-flex;transition:all .3s ease;padding:0 .5rem}.sp-list{min-width:300px;max-height:320px;overflow-y:auto;padding:0 .3rem;transition:all .3s ease}.sp-list .sp-list-item{display:flex;align-items:center;justify-content:space-between;line-height:1.43;font-size:14px;text-align:left;overflow:hidden;white-space:nowrap;margin:0;padding:.25rem .5rem;color:#666;cursor:pointer;transition:all .2s ease}.sp-list .sp-list-item.sp-over{background-color:#f6f8fa!important;color:#000!important;border-radius:.4rem}.sp-list .sp-list-item.sp-selected{color:#ccc;cursor:default}.sp-list .sp-list-item.sp-rtl{direction:rtl;text-align:right}.sp-table{padding:0 .3rem;min-width:300px;max-height:320px;overflow-y:auto}.sp-table table{width:100%;border-spacing:0}.sp-table table td,.sp-table table th{font-size:14px;line-height:1.43;border:0!important}.sp-table table th{padding:0 8px 5px;font-weight:600;font-size:15px;color:#333;text-align:left}.sp-table table td{padding:.25rem .5rem;color:#666;cursor:pointer}.sp-table table tbody tr.sp-over td{background-color:#f6f8fa!important;color:#000!important}.sp-table table tbody tr.sp-over td:first-child{border-top-left-radius:.4rem;border-bottom-left-radius:.4rem}.sp-table table tbody tr.sp-over td:last-child{border-top-right-radius:.4rem;border-bottom-right-radius:.4rem}.sp-table table tbody tr.sp-selected td{color:#ccc;cursor:default}.sp-table table thead .sp-rtl th,.sp-table table tbody .sp-rtl td{direction:rtl;text-align:right}.sp-pagination{display:flex;justify-content:space-between;align-items:center;padding:5px 10px}.sp-pagination .sp-page-info{line-height:1;color:#0000004d;font-size:14px;font-weight:600;margin-right:10px}.sp-pagination .sp-page-control{padding:0;margin:0}.sp-pagination .sp-page-control .sp-page-button{display:inline-flex}.sp-pagination .sp-page-control .sp-page-button a{display:inline-flex;padding:7px;font-size:14px;color:#333;text-decoration:none;cursor:pointer;line-height:1;background:transparent;transition:all .3s ease;border-radius:.6rem}.sp-pagination .sp-page-control .sp-page-button a:hover{color:#000;background-color:#f1f1f1}.sp-pagination .sp-page-control .sp-page-button.sp-page-disabled a{color:#ddd;font-weight:400;background-color:transparent;cursor:default}.sp-trigger-container{display:flex;align-items:center;justify-content:space-between;flex-grow:1;padding:6px 12px 6px 6px;background-color:#fff;border:1px solid #ddd;border-radius:.3rem;font-size:14px;line-height:1.42857143;outline:0!important;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s ease}.sp-trigger-container:hover{border:1px solid #aaa}.sp-trigger-container.sp-disabled,.sp-trigger-container.sp-disabled:hover{border:1px solid #eee;background-color:#eee;cursor:default;color:#aaa}.sp-trigger-container.sp-disabled .sp-select,.sp-trigger-container.sp-disabled .sp-chips,.sp-trigger-container.sp-disabled:hover .sp-select,.sp-trigger-container.sp-disabled:hover .sp-chips{color:#aaa;background-color:#eee}.sp-trigger-container.sp-disabled .sp-chip,.sp-trigger-container.sp-disabled:hover .sp-chip{background-color:#d6d6d6!important;color:#666!important}.sp-trigger-container .bi-chevron-down{transition:transform .2s ease;margin-left:.5rem;font-size:1rem;color:#666}.sp-trigger-container.sp-opened{box-shadow:3px 2px 6px #0000004d;border:1px solid #666;color:#000}.sp-trigger-container.sp-opened .bi-chevron-down{transform:rotate(180deg)}.sp-trigger-container.sp-opened:hover{border:1px solid #666}.sp-trigger-container .sp-placeholder{color:#aaa;padding:5px;line-height:1}.sp-trigger-container .sp-trigger{display:flex;align-items:center;flex-wrap:wrap}.sp-trigger-container .sp-trigger.sp-select{justify-content:space-between;flex-grow:1}.sp-trigger-container .sp-trigger.sp-select .sp-select-content{padding:5px;line-height:1.143;color:#666}.sp-trigger-container .sp-trigger.sp-chips{gap:.5rem}.sp-trigger-container .sp-trigger .sp-chip{border-radius:.3rem;background-color:#eee;color:#666;display:inline-flex;align-items:center;padding:5px 7px;transition:all .2s ease}.sp-trigger-container .sp-trigger .sp-chip--body{display:inline-flex;line-height:1.143;margin-right:5px}.sp-trigger-container .sp-trigger .sp-chip:hover{background-color:#f7f7f7;color:#000}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { ref as v, computed as F, watch as J, onMounted as he, provide as k, nextTick as ne, inject as B, defineComponent as Z, reactive as de, onBeforeUnmount as He, onUnmounted as Ve, withDirectives as je, h as i, vShow as Re, Teleport as Ue, Transition as me, openBlock as M, createElementBlock as N, createElementVNode as T, mergeProps as oe, toRef as ve } from "vue";
const [
  le,
  ae,
  ie,
  re,
  be,
  ye
] = [
  37,
  38,
  39,
  40,
  13,
  27
], Ze = [le, ae, ie, re, be, ye], R = -1, we = 0, Ge = 0, j = 1, We = 10, _e = "first", Q = "previous", ee = "next", Se = "last", C = "page_num", $ = "page_count", x = "row_count", P = "max_select_limit", I = "selected_count", [
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
  ot,
  lt,
  at,
  it
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
    pageInfo: `第 ${C}/${$} 页(共 ${x} 条记录)`,
    notFound: "无查询结果",
    clear: "清除内容",
    clearAll: "清除全部已选择项目",
    maxSelected: `最多只能选择 ${P} 个项目`,
    placeholder: "请选择一个项目",
    selectedCount: `已选择 ${I} 个项目`,
    search: "搜索"
  },
  [K]: {
    // English
    next: "Next page",
    prev: "Previous page",
    first: "First page",
    last: "Last page",
    pageInfo: `Page ${C} of ${$} (${x} records)`,
    notFound: "Data not found",
    clear: "Clear content",
    clearAll: "Clear all selected",
    maxSelected: `You can only select up to ${P} items`,
    placeholder: "Select an option",
    selectedCount: `${I} items selected`,
    search: "Search"
  },
  [Xe]: {
    // Japanese
    next: "次へ",
    prev: "前へ",
    first: "最初のページへ",
    last: "最後のページへ",
    pageInfo: `${C}/${$} 件 (全 ${x} つ記録)`,
    notFound: "(0 件)",
    clear: "コンテンツをクリアする",
    clearAll: "選択した項目をクリアする",
    maxSelected: `最多で ${P} のプロジェクトを選ぶことしかできません`,
    placeholder: "プロジェクトを選択してください",
    selectedCount: `${I} アイテムが選択されました`,
    search: "検索"
  },
  [Ye]: {
    // Arabic
    next: "التالي",
    prev: "السابق",
    first: "الاول",
    last: "الأخير",
    pageInfo: `صفحة ${C}/${$} (${x} سجلات)`,
    notFound: "لا يوجد نتائج",
    clear: "محو المحتوى",
    clearAll: "إلغاء التحديد",
    maxSelected: `يمكنك فقط تحديد (${P}) عناصر`,
    placeholder: "رجاء حدد الخيار",
    selectedCount: `تم تحديد (${I}) عناصر`,
    search: "يبحث"
  },
  [qe]: {
    // Spanish
    next: "Siguiente página",
    prev: "Pagina anterior",
    first: "Primera página",
    last: "última página",
    pageInfo: `Página ${C}/${$} (${x} registros)`,
    notFound: "no encontrado",
    clear: "Borrar contenido",
    clearAll: "Borrar todo lo seleccionado",
    maxSelected: `Solo puedes seleccionar hasta ${P} items`,
    placeholder: "Seleccione una opción",
    selectedCount: `${I} items Seleccionado`,
    search: "Buscar"
  },
  [Je]: {
    // German
    next: "Nächste Seite",
    prev: "Vorherige Seite",
    first: "Erste Seite",
    last: "Letzte Seite",
    pageInfo: `Seite ${C}/${$} (${x} Einträge)`,
    notFound: "Nicht gefunden",
    clear: "Inhalt löschen",
    clearAll: "Alle ausgewählten löschen",
    maxSelected: `Sie können nur bis zu ${P} Elemente auswählen`,
    placeholder: "Wählen",
    selectedCount: `${I} Elemente ausgewählt`,
    search: "Suchen"
  },
  [Qe]: {
    // Romanian
    next: "Pagina următoare",
    prev: "Pagina precedentă",
    first: "Prima pagină",
    last: "Ultima pagină",
    pageInfo: `Pagina ${C}/${$} (${x} înregistrări)`,
    notFound: "nu a fost găsit",
    clear: "Șterge conținutul",
    clearAll: "Șterge înregistrările selectate",
    maxSelected: `Poți selecta până la ${P} înregistrări`,
    placeholder: "Selectează o înregistrare",
    selectedCount: `${I} înregistrări selectate`,
    search: "Căutare"
  },
  [et]: {
    // Russian
    next: "Вперед",
    prev: "Назад",
    first: "В начало",
    last: "В конец",
    pageInfo: `Стр. ${C}/${$} (всего - ${x})`,
    notFound: "Нет данных",
    clear: "Очистить",
    clearAll: "Очистить выбранное",
    maxSelected: `Нельзя выбрать более ${P} значений`,
    placeholder: "Выберите значение",
    selectedCount: `${I} - выбрано`,
    search: "Поиск"
  },
  [tt]: {
    // French
    next: "Page suivante",
    prev: "Page précédente",
    first: "Première page",
    last: "Dernière page",
    pageInfo: `Page ${C}/${$} (${x} lignes)`,
    notFound: "Aucun résultat",
    clear: "Effacer",
    clearAll: "Tout déselectionner",
    maxSelected: `Vous ne pouvez pas sélectionner plus de ${P} élements`,
    placeholder: "Sélectionnez une option",
    selectedCount: `${I} éléments sélectionnés`,
    search: "Recherche"
  },
  [nt]: {
    // Portuguese-Brazil
    next: "Página seguinte",
    prev: "Página anterior",
    first: "Primera página",
    last: "Última página",
    pageInfo: `Página ${C}/${$} (${x} registros)`,
    notFound: "não encontrado",
    clear: "Apagar conteúdo",
    clearAll: "Apagar itens selecionados",
    maxSelected: `Máximo permitido ${P} itens`,
    placeholder: "Selecione uma opção",
    selectedCount: `${I} itens selecionados`,
    search: "Procurar"
  },
  [ot]: {
    // Polish
    next: "Następna",
    prev: "Poprzednia",
    first: "Pierwsza",
    last: "Ostatnia",
    pageInfo: `Strona ${C}/${$} (${x} rekordów)`,
    notFound: "Nic nie znaleziono",
    clear: "Wyczyść",
    clearAll: "Usuń wszystkie zaznaczone",
    maxSelected: `Możesz zaznaczyć maksymalnie ${P}`,
    placeholder: "Wybierz z listy",
    selectedCount: `${I} zaznaczonych`,
    search: "Szukaj"
  },
  [lt]: {
    // Dutch
    next: "Volgende pagina",
    prev: "Vorige pagina",
    first: "Eerste pagina",
    last: "Laatste pagina",
    pageInfo: `Pagina ${C}/${$} (${x} items)`,
    notFound: "Niet gevonden",
    clear: "Wissen",
    clearAll: "Wis selectie",
    maxSelected: `Je kunt maar ${P} items selecteren`,
    placeholder: "Kies een optie",
    selectedCount: `${I} Items geselecteerd`,
    search: "Zoekopdracht"
  },
  [at]: {
    // Traditional Chinese
    next: "下一頁",
    prev: "上一頁",
    first: "首頁",
    last: "尾頁",
    pageInfo: `第 ${C}/${$} 頁(共 ${x} 條記錄)`,
    notFound: "無查詢結果",
    clear: "清除內容",
    clearAll: "清除全部已選擇項目",
    maxSelected: `最多只能選擇 ${P} 個項目`,
    placeholder: "請選擇一個項目",
    selectedCount: `已選擇 ${I} 個項目`,
    search: "搜索"
  },
  [it]: {
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
function rt(e) {
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
  return [ae, re].includes(e);
}
function ct(e) {
  return [le, ie].includes(e);
}
function ut(e) {
  return be === e;
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
function Ce(e) {
  return typeof e == "string" ? e : typeof e == "number" ? `${e}px` : "";
}
const $e = () => ({
  list: { type: Array, default: void 0 },
  highlightIndex: { type: Number, default: R }
}), xe = () => ["select", "set-highlight"];
function pt(e, t) {
  const n = v([]), r = F(() => n.value.length);
  function l(d) {
    return n.value.length ? n.value.some((p) => p[e.keyProp] === d[e.keyProp]) : !1;
  }
  function a(d) {
    return !n.value.length || typeof d > "u" ? !1 : n.value.some((p) => p[e.keyProp] === d);
  }
  function c(d) {
    const p = new Set(d);
    return p.size !== n.value.length ? !1 : Array.from(p).every(a);
  }
  function s(d) {
    if (!l(d)) {
      if (e.multiple) {
        g([...n.value, d]);
        return;
      }
      g([d]);
    }
  }
  function o() {
    t("remove", n.value), g([]);
  }
  function u(d) {
    t("remove", [d]), g(
      n.value.filter((p) => p[e.keyProp] !== d[e.keyProp])
    );
  }
  function g(d, p = !0) {
    n.value = d, p && t("update:modelValue", d.map((w) => w[e.keyProp])), t("selection-change", d);
  }
  return {
    selected: n,
    selectedCount: r,
    isItemSelected: l,
    selectItem: s,
    removeItem: u,
    removeAll: o,
    setSelected: g,
    isKeysEqualToSelected: c
  };
}
function ft(e, t, n) {
  const r = v(R);
  function l(u) {
    r.value = u;
  }
  function a() {
    r.value !== R && r.value !== 0 && (r.value -= 1);
  }
  function c() {
    te(n.value) || r.value !== n.value.length - 1 && (r.value += 1);
  }
  function s(u) {
    if (u === ae)
      return a();
    if (u === re)
      return c();
  }
  function o() {
    return r.value !== R;
  }
  return {
    highlightIndex: r,
    setItemHighlight: l,
    highlightNavigation: s,
    isSomeRowHighlight: o
  };
}
function ge(e) {
  return Ze.includes(e);
}
function Pe() {
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
    max: { type: Number, default: we, validator: (e) => e >= 0 },
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
    debounce: { type: Number, default: 300 }
  };
}
function Ie() {
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
  const n = rt(e.language), {
    selected: r,
    selectedCount: l,
    isItemSelected: a,
    removeAll: c,
    removeItem: s,
    selectItem: o,
    setSelected: u,
    isKeysEqualToSelected: g
  } = pt(e, t), d = v(""), p = v(""), w = v(j), A = v(0), b = v([]), h = v(!1), O = se(), y = () => te(b.value), _ = (f) => {
    if (!f || !Object.keys(f).length)
      return "";
    switch (typeof e.labelProp) {
      case "string":
        return f[e.labelProp];
      case "function":
        return e.labelProp(f);
    }
  }, S = (f) => {
    if (e.max === we)
      return o(f);
    if (r.value.length === e.max) {
      p.value = n.maxSelected.replace(P, e.max), O(() => {
        p.value = "";
      });
      return;
    }
    o(f);
  }, z = () => {
    h.value = !0;
    const f = {
      search: d.value,
      pageNumber: w.value,
      pageSize: e.pagination ? e.pageSize : Ge
    };
    t("fetch-data", f, (E, V) => {
      Array.isArray(E) && (b.value = E, A.value = typeof V == "number" ? V : 0, ne(() => {
        h.value = !1;
      }));
    });
  }, L = () => {
    const { modelValue: f } = e;
    if (Array.isArray(f)) {
      if (!e.multiple && f.length > 1) {
        console.warn('Invalid prop: Only one key can be passed to prop "modelValue/v-model" in single selection mode({ multiple: false }).');
        return;
      }
      f.length && (g(f) || t("fetch-selected-data", f, (E) => {
        Array.isArray(E) && u(E, f.length !== E.length);
      }));
    }
  };
  return J(d, () => {
    w.value = j, z();
  }), J(() => e.modelValue, L), he(() => {
    z(), te(e.modelValue) || L();
  }), k("keyProp", e.keyProp), k("rtl", e.rtl), k("pageSize", e.pageSize), k("debounce", e.debounce), k("multiple", e.multiple), k("loading", h), k("language", n), k("renderCell", _), k("isItemSelected", a), k("selectedCount", l), k("removeAll", c), k("removeItem", s), {
    selected: r,
    query: d,
    message: p,
    currentPage: w,
    totalRows: A,
    lang: n,
    list: b,
    renderCell: _,
    isDataEmpty: y,
    isItemSelected: a,
    selectedCount: l,
    selectItem: S,
    removeAll: c,
    removeItem: s,
    fetchData: z
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
function mt(e, t, n, r) {
  const l = F(() => Math.ceil(n.value / e.pageSize)), a = F(() => t.value === j), c = F(() => t.value === l.value), s = F(
    () => r.pageInfo.replace(C, t.value).replace($, l.value).replace(x, n.value)
  ), o = function(d) {
    switch (d) {
      case _e:
        return j;
      case Q:
        return t.value - 1;
      case ee:
        return t.value + 1;
      case Se:
        return l.value;
    }
  }, u = function(d) {
    let p = o(d);
    typeof p > "u" || (p < j && (p = j), p > l.value && (p = l.value), p !== t.value && (t.value = p));
  };
  return {
    paginationInfo: s,
    isFirstPage: a,
    isLastPage: c,
    switchPage: u,
    pagingNavigation: (d) => {
      if (d === le)
        return u(Q);
      if (d === ie)
        return u(ee);
    }
  };
}
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".animate-down-enter-from,.animate-down-leave-to{transform:scale(.95);opacity:0}.animate-down-enter-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-down-leave-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-enter-from,.animate-up-leave-to{transform:scale(.95);opacity:0}.animate-up-enter-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-leave-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-dropdown-trigger{display:inline-flex}.v-dropdown-trigger.v-dropdown-trigger--full-width{display:flex}.v-dropdown-container{-webkit-font-smoothing:subpixel-antialiased;backface-visibility:hidden;display:inline-flex;margin:0;padding:0;position:absolute;top:0;left:0;border:1px solid #D6D7D7;box-sizing:border-box;background-color:#fff;border-radius:.3rem;overflow:hidden;z-index:3000;will-change:opacity,transform,top,left;box-shadow:0 15px 25px #0003}.v-dropdown-container.v-dropdown-no-border{border:0;border-radius:.5rem;box-shadow:0 10px 30px #0006}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
function vt() {
  const e = window.pageXOffset !== void 0, t = (document.compatMode || "") === "CSS1Compat";
  return {
    x: e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop
  };
}
function bt(e) {
  return window.getComputedStyle(e).display === "none";
}
function pe(e) {
  if (bt(e)) {
    e.style.visibility = "hidden", e.style.display = "inline-block";
    const t = e.getBoundingClientRect();
    return e.style.visibility = "visible", e.style.display = "none", t;
  }
  return e.getBoundingClientRect();
}
const Te = "click", yt = "hover", wt = "contextmenu", fe = 150, q = 5;
function _t(e, t) {
  return typeof e.animated == "string" ? e.animated : e.animated ? t.value ? "animate-up" : "animate-down" : "";
}
function ce(e) {
  return {
    isTriggerByClick: e.trigger === Te,
    isTriggerByHover: e.trigger === yt,
    isTriggerByContextmenu: e.trigger === wt
  };
}
function St(e, t, n, r) {
  const { isTriggerByContextmenu: l } = ce(e), a = window.pageYOffset, c = document.documentElement.clientHeight, s = l ? t : n.top + a;
  let o = l ? t : n.top + n.height + q + a, u = !1, g = !1, d = !1;
  return o + r.height > a + c && (u = !0), s - q - r.height < a && (g = !0), !g && u && (o = s - q - r.height, d = !0), { dropUp: d, top: o };
}
function Ct(e, t, n, r) {
  const { isTriggerByContextmenu: l } = ce(e), a = window.pageXOffset, c = document.documentElement.clientWidth, s = l ? 0 : n.width, o = l ? t : n.left + a, u = o + s / 2 - r.width / 2, g = o + s - r.width;
  switch (e.align) {
    case "left":
      return o + r.width > a + c ? g : o;
    case "center":
      return u + r.width > a + c ? g : g < a ? o : u;
    case "right":
      return g < a ? o : g;
  }
}
function $t(e) {
  const t = vt();
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
function Pt(e) {
  return [
    "v-dropdown-trigger",
    e.fullWidth && "v-dropdown-trigger--full-width",
    e.customTriggerClass && e.customTriggerClass
  ];
}
const It = Z({
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
  setup(e, { slots: t, emit: n, expose: r }) {
    const l = v(!1), a = de({ top: "", left: "", width: "" }), c = de({ x: null, y: null }), s = v(!1), o = v(null), u = v(null), g = v(null), {
      isTriggerByClick: d,
      isTriggerByHover: p,
      isTriggerByContextmenu: w
    } = ce(e);
    J(l, (_) => n("visible-change", _));
    function A() {
      e.disabled || ("trigger" in t && O(), p ? (window.clearTimeout(o.value), o.value = window.setTimeout(() => {
        l.value = !0;
      }, fe)) : l.value = !0);
    }
    function b(_ = !1) {
      e.disabled || !e.toggle && !_ || (p ? (window.clearTimeout(o.value), o.value = window.setTimeout(() => {
        l.value = !1;
      }, fe)) : l.value = !1);
    }
    function h() {
      l.value ? b() : A();
    }
    function O() {
      const _ = pe(u.value), S = pe(g.value), z = St(e, c.y, _, S), L = Ct(e, c.x, _, S);
      s.value = z.dropUp, a.top = `${z.top}px`, a.left = `${L}px`;
    }
    function y(_) {
      if (!l.value)
        return;
      const S = _.composedPath().some((z) => z === u.value);
      S && !e.toggle && !w || (!S || S && w) && b(!0);
    }
    return he(() => {
      typeof e.width < "u" && (a.width = e.width + "px"), document.body.addEventListener("mousedown", y);
    }), He(() => {
      document.body.removeEventListener("mousedown", y), g.value && g.value.remove();
    }), Ve(() => {
      u.value && u.value.remove();
    }), r({
      display: A,
      close: b,
      toggleVisible: h,
      adjust: O,
      container: g,
      visible: l
    }), () => {
      const _ = [];
      "trigger" in t && _.push(t.trigger({
        visible: l,
        disabled: e.disabled
      }));
      const S = {
        class: xt(e),
        style: a,
        ref: g,
        // do not close dropdown container when
        // do some operations in that
        onMousedown: (f) => f.stopPropagation()
      };
      p && (S.onMouseenter = A, S.onMouseleave = b);
      const z = je(
        i("div", S, t.default && t.default()),
        [[Re, l.value]]
      );
      _.push(
        i(Ue, { to: "body" }, [
          i(me, { name: _t(e, s) }, () => [z])
        ])
      );
      const L = {
        class: Pt(e),
        ref: u
      };
      return p ? (L.onMouseenter = A, L.onMouseleave = b) : d ? L.onClick = (f) => {
        e.manual || (f.stopPropagation(), h());
      } : w && (L.onContextmenu = (f) => {
        if (e.manual)
          return;
        f.stopPropagation(), f.preventDefault();
        const E = $t(f);
        c.x = E.x, c.y = E.y, A();
      }), i("div", L, _);
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
    const n = v(""), r = F(() => ({
      "sp-circle-btn--disabled": e.disabled,
      "sp-circle-btn--small": e.size === "small",
      "sp-circle-btn--large": e.size === "large"
    })), l = F(() => ({
      "font-size": e.fontSize,
      "background-color": e.disabled ? "transparent" : n.value
    }));
    return () => {
      const a = {
        class: ["sp-circle-btn", r.value],
        style: l.value,
        onMouseenter() {
          n.value = e.hoverBgColor;
        },
        onMouseleave() {
          n.value = e.bgColor;
        }
      };
      return i("div", a, t.default && t.default());
    };
  }
}, D = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, l] of t)
    n[r] = l;
  return n;
}, At = {}, Tt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-search",
  viewBox: "0 0 16 16"
}, Ot = /* @__PURE__ */ T("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }, null, -1), zt = [
  Ot
];
function Lt(e, t) {
  return M(), N("svg", Tt, zt);
}
const kt = /* @__PURE__ */ D(At, [["render", Lt]]), Bt = {}, Et = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-x-lg",
  viewBox: "0 0 16 16"
}, Mt = /* @__PURE__ */ T("path", { d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" }, null, -1), Nt = [
  Mt
];
function Dt(e, t) {
  return M(), N("svg", Et, Nt);
}
const X = /* @__PURE__ */ D(Bt, [["render", Dt]]), Ft = {}, Ht = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  class: "sp-icon sp-icon-loading"
}, Vt = /* @__PURE__ */ T("path", {
  d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
  opacity: ".25"
}, null, -1), jt = /* @__PURE__ */ T("path", { d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" }, [
  /* @__PURE__ */ T("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    dur: "0.75s",
    values: "0 12 12;360 12 12",
    repeatCount: "indefinite"
  })
], -1), Rt = [
  Vt,
  jt
];
function Ut(e, t) {
  return M(), N("svg", Ht, Rt);
}
const Zt = /* @__PURE__ */ D(Ft, [["render", Ut]]), Gt = {
  props: {
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue", "keyboard-operation"],
  setup(e, { emit: t, expose: n }) {
    const { rtl: r, debounce: l, loading: a, language: c, selectedCount: s, multiple: o } = H(), u = v(!1), g = v(), d = se(l), p = F(() => !o || !s.value ? c.search : c.selectedCount.replace(I, s.value)), w = () => gt(g.value);
    return n({ focus: w }), () => {
      const b = [
        F(() => a.value ? i(Zt) : i(kt, { class: u.value ? "sp-search-in-focus" : "" })).value,
        i("input", {
          type: "text",
          autocomplete: "off",
          value: e.modelValue.trim(),
          class: {
            "sp-search-input": !0,
            "sp-search-input--rtl": r
          },
          placeholder: p.value,
          onKeydown: (h) => {
            h.stopPropagation(), ge(h.keyCode) && t("keyboard-operation", h.keyCode);
          },
          onFocus: () => {
            u.value = !0;
          },
          onBlur: () => {
            u.value = !1;
          },
          onInput: (h) => {
            ge(h.keyCode) || d(() => {
              t("update:modelValue", h.target.value.trim());
            });
          },
          ref: g
        })
      ];
      if (e.modelValue.trim()) {
        const h = {
          onClick() {
            t("update:modelValue", ""), w();
          }
        };
        b.push(
          i(G, h, () => i(X))
        );
      }
      return i("div", { class: "sp-search-container" }, b);
    };
  }
}, Wt = {}, Kt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-trash3",
  viewBox: "0 0 16 16"
}, Xt = /* @__PURE__ */ T("path", { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" }, null, -1), Yt = [
  Xt
];
function qt(e, t) {
  return M(), N("svg", Kt, Yt);
}
const Jt = /* @__PURE__ */ D(Wt, [["render", qt]]), Qt = {
  setup() {
    const { selectedCount: e, removeAll: t, language: n } = H();
    return () => {
      const r = [], l = {
        title: n.clearAll,
        size: "large",
        // bgColor: '#f1f1f1',
        // hoverBgColor: '#ddd',
        disabled: !e.value,
        onClick: t
      };
      return r.push(
        i(G, l, () => i(Jt))
      ), i("div", { class: "sp-search-control" }, r);
    };
  }
};
const en = {
  props: {
    data: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { renderCell: n, rtl: r, removeItem: l } = H();
    return () => {
      const a = n(e.data), c = {
        class: {
          "sp-list-item": !0,
          "sp-over": !e.isSelected && e.isHover,
          "sp-selected": e.isSelected,
          "sp-rtl": r
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, s = [
        i("div", { title: a, innerHTML: a })
      ];
      if (e.isSelected) {
        const o = {
          onClick: (u) => {
            u.stopPropagation(), l(e.data);
          }
        };
        s.push(
          i(G, o, () => i(X))
        );
      }
      return i("div", c, s);
    };
  }
}, tn = {
  name: "SelectPageList",
  props: $e(),
  emits: xe(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, keyProp: r } = H();
    return () => {
      const l = e.list.map((c, s) => i(en, {
        key: c[r],
        data: c,
        isHover: e.highlightIndex === s,
        isSelected: n(c),
        onSelect: () => t("select", c),
        onHover: () => t("set-highlight", s)
      }));
      return i("div", {
        class: "sp-list",
        onMouseleave: () => t("set-highlight", R)
      }, l);
    };
  }
};
const nn = {
  props: {
    columns: { type: Object, default: void 0 },
    row: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { row: n } = e, { rtl: r } = H(), l = (a) => {
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
          "sp-rtl": r
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, c = e.columns.map((s, o) => {
        const u = {
          key: o,
          innerHTML: l(s)
        };
        return Object.hasOwn(s, "width") && (u.style = { width: Ce(s.width) }), i("td", u);
      });
      return i("tr", a, c);
    };
  }
}, on = {
  name: "SelectPageTable",
  props: {
    ...$e(),
    columns: { type: Array, default: void 0 }
  },
  emits: xe(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, rtl: r, keyProp: l } = H();
    return () => {
      const a = e.columns.map((o) => i("th", o.title)), c = e.list.map((o, u) => i(nn, {
        key: o[l],
        row: o,
        columns: e.columns,
        isHover: e.highlightIndex === u,
        isSelected: n(o),
        onSelect: () => t("select", o),
        onHover: () => t("set-highlight", u)
      })), s = i("table", [
        // table thead
        i("thead", i("tr", { class: { "sp-rtl": r } }, a)),
        // table tbody
        i("tbody", { onMouseleave: () => t("set-highlight", R) }, c)
      ]);
      return i("div", { class: "sp-table" }, s);
    };
  }
};
const ln = {}, an = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-left",
  viewBox: "0 0 16 16"
}, rn = /* @__PURE__ */ T("path", {
  "fill-rule": "evenodd",
  d: "M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
}, null, -1), sn = [
  rn
];
function cn(e, t) {
  return M(), N("svg", an, sn);
}
const un = /* @__PURE__ */ D(ln, [["render", cn]]), dn = {}, gn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-left",
  viewBox: "0 0 16 16"
}, pn = /* @__PURE__ */ T("path", {
  "fill-rule": "evenodd",
  d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
}, null, -1), fn = [
  pn
];
function hn(e, t) {
  return M(), N("svg", gn, fn);
}
const mn = /* @__PURE__ */ D(dn, [["render", hn]]), vn = {}, bn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-right",
  viewBox: "0 0 16 16"
}, yn = /* @__PURE__ */ T("path", {
  "fill-rule": "evenodd",
  d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
}, null, -1), wn = [
  yn
];
function _n(e, t) {
  return M(), N("svg", bn, wn);
}
const Sn = /* @__PURE__ */ D(vn, [["render", _n]]), Cn = {}, $n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-right",
  viewBox: "0 0 16 16"
}, xn = /* @__PURE__ */ T("path", {
  "fill-rule": "evenodd",
  d: "M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
}, null, -1), Pn = [
  xn
];
function In(e, t) {
  return M(), N("svg", $n, Pn);
}
const An = /* @__PURE__ */ D(Cn, [["render", In]]), Tn = {
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
      const l = [
        { action: _e, title: n.first, disabled: e.isFirstPage, icon: un },
        { action: Q, title: n.prev, disabled: e.isFirstPage, icon: mn },
        { action: ee, title: n.next, disabled: e.isLastPage, icon: Sn },
        { action: Se, title: n.last, disabled: e.isLastPage, icon: An }
      ].map((a) => {
        const c = {
          href: "javascript:void(0)",
          onClick: () => t("page-change", a.action)
        }, s = [{ "sp-page-disabled": a.disabled }, "sp-page-button"];
        return i("div", { class: s, title: a.title }, [
          i("a", c, i(a.icon))
        ]);
      });
      return i("div", { class: "sp-pagination" }, [
        i("div", { class: "sp-page-info" }, e.pageInfo),
        i("div", { class: "sp-page-control" }, l)
      ]);
    };
  }
}, On = {}, zn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chat-left-dots",
  viewBox: "0 0 16 16"
}, Ln = /* @__PURE__ */ T("path", { d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, null, -1), kn = /* @__PURE__ */ T("path", { d: "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1), Bn = [
  Ln,
  kn
];
function En(e, t) {
  return M(), N("svg", zn, Bn);
}
const Mn = /* @__PURE__ */ D(On, [["render", En]]);
function Oe(e, t) {
  const {
    lang: n,
    selected: r,
    query: l,
    message: a,
    currentPage: c,
    totalRows: s,
    list: o,
    isDataEmpty: u,
    selectItem: g,
    fetchData: d,
    renderCell: p,
    removeAll: w,
    removeItem: A
  } = ht(e, t), {
    highlightIndex: b,
    setItemHighlight: h,
    highlightNavigation: O,
    isSomeRowHighlight: y
  } = ft(e, t, o), {
    paginationInfo: _,
    isFirstPage: S,
    isLastPage: z,
    switchPage: L,
    pagingNavigation: f
  } = mt(e, c, s, n), E = se(e.debounce), V = v(), Ee = () => {
    V.value && V.value.focus();
  }, Me = () => i("div", { class: "sp-search" }, [
    i(Gt, {
      ref: V,
      modelValue: l.value,
      "onUpdate:modelValue"(m) {
        l.value = m;
      },
      onKeyboardOperation: (m) => {
        if (st(m))
          return O(m);
        if (ct(m)) {
          f(m), E(d);
          return;
        }
        if (ut(m))
          return y() ? g(o.value[b.value]) : void 0;
        dt(m) && t("close-dropdown");
      }
    }),
    i(Qt)
  ]), Ne = () => {
    const m = [];
    return a.value && m.push(
      i("div", { class: "sp-message" }, [
        i(Mn),
        i("div", { class: "sp-message-body", innerHTML: a.value })
      ])
    ), i(me, {
      name: "sp-message-slide",
      appear: !0,
      onEnter: () => t("adjust-dropdown"),
      onAfterLeave: () => t("adjust-dropdown")
    }, () => m);
  }, De = () => u() ? ue() : i(tn, {
    list: o.value,
    highlightIndex: b.value,
    onSelect: (m) => g(m),
    onSetHighlight: (m) => h(m)
  }), Fe = () => u() ? ue() : i(on, {
    list: o.value,
    columns: e.columns,
    highlightIndex: b.value,
    onSelect: (m) => g(m),
    onSetHighlight: (m) => h(m)
  }), ue = () => i("div", { class: "sp-result-message" }, n.notFound);
  return {
    selected: r,
    query: l,
    message: a,
    currentPage: c,
    lang: n,
    renderCell: p,
    removeAll: w,
    removeItem: A,
    setSearchFocus: Ee,
    renderSearch: Me,
    renderMessage: Ne,
    renderList: De,
    renderTable: Fe,
    renderPagination: () => {
      if (e.pagination)
        return i(Tn, {
          pageInfo: _.value,
          isFirstPage: S.value,
          isLastPage: z.value,
          onPageChange(m) {
            L(m), d();
          }
        });
    },
    renderContainer: (m) => {
      const Y = { class: "sp-container" };
      return e.width && (Y.style = { width: Ce(e.width) }), i("div", Y, m);
    }
  };
}
function ze(e) {
  const t = v(!1), n = v();
  function r() {
    n.value && n.value.close();
  }
  function l() {
    n.value && n.value.adjust();
  }
  function a(c, s, o) {
    const u = {
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
    return i(It, oe(u, c), {
      trigger: () => s,
      default: () => o
    });
  }
  return {
    visible: t,
    dropdownRef: n,
    renderDropdown: a,
    closeDropdown: r,
    adjustDropdown: l
  };
}
const Nn = Z({
  name: "SelectPageListCore",
  props: {
    ...Pe()
  },
  emits: Ae(),
  setup(e, { emit: t, expose: n }) {
    const {
      selected: r,
      lang: l,
      renderCell: a,
      removeAll: c,
      removeItem: s,
      setSearchFocus: o,
      renderSearch: u,
      renderMessage: g,
      renderList: d,
      renderPagination: p,
      renderContainer: w
    } = Oe(e, t);
    return n({
      selected: r,
      lang: l,
      renderCell: a,
      removeAll: c,
      removeItem: s,
      setSearchFocus: o
    }), () => w([
      u(),
      g(),
      d(),
      p()
    ]);
  }
});
const Dn = {}, Fn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-down",
  viewBox: "0 0 16 16"
}, Hn = /* @__PURE__ */ T("path", {
  "fill-rule": "evenodd",
  d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
}, null, -1), Vn = [
  Hn
];
function jn(e, t) {
  return M(), N("svg", Fn, Vn);
}
const Rn = /* @__PURE__ */ D(Dn, [["render", jn]]), Le = {
  props: {
    dropdownVisible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    lang: { type: Object, default: void 0 }
  },
  setup(e, { slots: t }) {
    return () => {
      var l;
      const n = [];
      Object.hasOwn(t, "default") ? n.push(t.default()) : n.push(
        i("div", { class: "sp-placeholder" }, e.placeholder || ((l = e.lang) == null ? void 0 : l.placeholder))
      ), n.push(i(Rn));
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
}, ke = {
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
      var l, a;
      if (!((l = n.value) != null && l.length))
        return;
      const r = [
        i("div", { class: "sp-select-content", innerHTML: e.renderCell(n.value[0]) })
      ];
      if ((a = n.value) != null && a.length && !e.disabled) {
        const c = {
          title: e.lang.clear,
          onClick: (s) => {
            s.stopPropagation(), t("remove");
          }
        };
        r.push(
          i(G, c, () => i(X))
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
    const n = ve(e, "selected");
    return () => {
      const r = n.value.map((l, a) => {
        const c = [
          i("div", { class: "sp-chip--body", innerHTML: e.renderCell(l) })
        ];
        if (!e.disabled) {
          const s = {
            size: "small",
            hoverBgColor: "#ccc",
            onClick: (o) => {
              o.stopPropagation(), t("remove", l);
            }
          };
          c.push(
            i(G, s, () => i(X))
          );
        }
        return i("div", { class: "sp-chip", key: a }, c);
      });
      return i("div", { class: "sp-trigger sp-chips" }, r);
    };
  }
}, Kn = Z({
  name: "SelectPageList",
  inheritAttrs: !1,
  props: {
    ...Ie()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n }) {
    const {
      visible: r,
      adjustDropdown: l,
      closeDropdown: a,
      renderDropdown: c
    } = ze(e), s = v([]), o = v(null);
    return () => {
      var b, h, O;
      const u = {
        selected: s,
        disabled: e.disabled,
        lang: (b = o == null ? void 0 : o.value) == null ? void 0 : b.lang,
        renderCell: (h = o == null ? void 0 : o.value) == null ? void 0 : h.renderCell,
        onRemove(y) {
          U(n) ? o.value.removeItem(y) : o.value.removeAll();
        }
      }, g = s.value.length ? () => i(U(n) ? Be : ke, u) : void 0, d = {
        dropdownVisible: r.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (O = o == null ? void 0 : o.value) == null ? void 0 : O.lang
      }, p = i(Le, d, g);
      return c(
        {
          onVisibleChange: (y) => {
            t("visible-change", y), y && ne(() => {
              o.value.setSearchFocus();
            });
          }
        },
        p,
        i(Nn, oe({
          ref: o,
          onAdjustDropdown: l,
          onCloseDropdown: a,
          onSelectionChange(y) {
            s.value = y, !U(n) && y.length && a();
          }
        }, n))
      );
    };
  }
}), Un = Z({
  name: "SelectPageTableCore",
  props: {
    ...Pe(),
    /**
     * table column settings
     */
    columns: { type: Array, default: void 0 }
  },
  emits: Ae(),
  setup(e, { emit: t, expose: n }) {
    const {
      selected: r,
      lang: l,
      removeAll: a,
      removeItem: c,
      setSearchFocus: s,
      renderCell: o,
      renderSearch: u,
      renderMessage: g,
      renderTable: d,
      renderPagination: p,
      renderContainer: w
    } = Oe(e, t);
    return n({
      selected: r,
      lang: l,
      renderCell: o,
      removeAll: a,
      removeItem: c,
      setSearchFocus: s
    }), () => w([
      u(),
      g(),
      d(),
      p()
    ]);
  }
}), Xn = Z({
  name: "SelectPageTable",
  inheritAttrs: !1,
  props: {
    ...Ie()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n }) {
    const {
      visible: r,
      adjustDropdown: l,
      closeDropdown: a,
      renderDropdown: c
    } = ze(e), s = v([]), o = v(null);
    return () => {
      var b, h, O;
      const u = {
        selected: s,
        disabled: e.disabled,
        lang: (b = o == null ? void 0 : o.value) == null ? void 0 : b.lang,
        renderCell: (h = o == null ? void 0 : o.value) == null ? void 0 : h.renderCell,
        onRemove(y) {
          U(n) ? o.value.removeItem(y) : o.value.removeAll();
        }
      }, g = s.value.length ? () => i(U(n) ? Be : ke, u) : void 0, d = {
        dropdownVisible: r.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (O = o == null ? void 0 : o.value) == null ? void 0 : O.lang
      }, p = i(Le, d, g);
      return c(
        {
          onVisibleChange: (y) => {
            t("visible-change", y), y && ne(() => {
              o.value.setSearchFocus();
            });
          }
        },
        p,
        i(Un, oe({
          ref: o,
          onAdjustDropdown: l,
          onCloseDropdown: a,
          onSelectionChange(y) {
            s.value = y, !U(n) && y.length && a();
          }
        }, n))
      );
    };
  }
});
export {
  Kn as SelectPageList,
  Nn as SelectPageListCore,
  Xn as SelectPageTable,
  Un as SelectPageTableCore
};
