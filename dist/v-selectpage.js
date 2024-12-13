(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".sp-result-message{padding:20px 0;text-align:center;font-weight:700;color:#999}.sp-container{min-width:300px;display:inline-flex;overflow:hidden;flex-direction:column;font-family:Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}.sp-message{display:flex;align-items:center;padding:10px 0;background-color:#e4eaee;color:#000;flex-grow:1}.sp-message .bi-chat-left-dots{font-size:1.2rem;margin:0 1rem}.sp-message .sp-message-body{font-size:14px;line-height:1;flex-wrap:wrap;max-width:15rem}.sp-message-slide-enter-active,.sp-message-slide-leave-active{transition:opacity .3s}.sp-message-slide-enter,.sp-message-slide-leave-to{opacity:0}.sp-message-slide-enter-to,.sp-message-slide-leave{opacity:1}.sp-icon{width:1em;height:1em}.sp-icon.sp-icon-small{font-size:1rem}.sp-icon.sp-icon-medium{font-size:1.3rem}.sp-circle-btn{width:20px;height:20px;font-size:14px;line-height:1;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;color:#aaa;transition:all .3s ease;border-radius:50%}.sp-circle-btn:hover{color:#000}.sp-circle-btn.sp-circle-btn--disabled,.sp-circle-btn.sp-circle-btn--disabled:hover{cursor:default;color:#eee}.sp-circle-btn.sp-circle-btn--small{width:16px;height:16px;font-size:12px}.sp-circle-btn.sp-circle-btn--large{width:28px;height:28px;font-size:16px}.animate-down-enter-from,.animate-down-leave-to{transform:scale(.95);opacity:0}.animate-down-enter-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-down-leave-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-enter-from,.animate-up-leave-to{transform:scale(.95);opacity:0}.animate-up-enter-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-leave-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-dropdown-trigger{display:inline-flex}.v-dropdown-trigger.v-dropdown-trigger--full-width{display:flex}.v-dropdown-container{-webkit-font-smoothing:subpixel-antialiased;backface-visibility:hidden;display:inline-flex;margin:0;padding:0;position:absolute;top:0;left:0;border:1px solid #D6D7D7;box-sizing:border-box;background-color:#fff;border-radius:.3rem;overflow:hidden;z-index:3000;will-change:opacity,transform,top,left;box-shadow:0 15px 25px #0003}.v-dropdown-container.v-dropdown-no-border{border:0;border-radius:.5rem;box-shadow:0 10px 30px #0006}.sp-search{display:flex;align-items:center;padding:.5rem 0;transition:all .3s ease}.sp-search .sp-search-container{display:flex;align-items:center;flex-grow:1;padding:0;padding-left:.7rem;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input{border:0;border-radius:50rem;background-color:transparent;margin-left:5px;font-size:14px;line-height:1.43;padding:4px 6px;box-sizing:border-box;outline:none!important;color:#333;font-weight:600;flex-grow:1;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input.sp-search-input--rtl{direction:rtl}.sp-search .sp-search-container .sp-search-input::-moz-placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-search-input::placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-icon-loading{opacity:.5}.sp-search .sp-search-container .bi-search,.sp-search .sp-search-container .bi-x-lg{transition:all .3s ease;color:#aaa}.sp-search .sp-search-container .bi-search.sp-search-in-focus,.sp-search .sp-search-container .bi-x-lg.sp-search-in-focus{color:#000}.sp-search .sp-search-container .bi-x-lg{cursor:pointer}.sp-search .sp-search-container .bi-x-lg:hover{color:#000}.sp-search .sp-search-control{display:inline-flex;transition:all .3s ease;padding:0 .5rem}.sp-list{min-width:300px;max-height:320px;overflow-y:auto;padding:0 .3rem;transition:all .3s ease}.sp-list .sp-list-item{display:flex;align-items:center;justify-content:space-between;line-height:1.43;font-size:14px;text-align:left;overflow:hidden;white-space:nowrap;margin:0;padding:.25rem .5rem;color:#666;cursor:pointer;transition:all .2s ease}.sp-list .sp-list-item.sp-over{background-color:#f6f8fa!important;color:#000!important;border-radius:.4rem}.sp-list .sp-list-item.sp-selected{color:#ccc;cursor:default}.sp-list .sp-list-item.sp-rtl{direction:rtl;text-align:right}.sp-table{padding:0 .3rem;min-width:300px;max-height:320px;overflow-y:auto}.sp-table table{width:100%;border-spacing:0}.sp-table table td,.sp-table table th{font-size:14px;line-height:1.43;border:0!important}.sp-table table th{padding:0 8px 5px;font-weight:600;font-size:15px;color:#333;text-align:left}.sp-table table td{padding:.25rem .5rem;color:#666;cursor:pointer}.sp-table table tbody tr.sp-over td{background-color:#f6f8fa!important;color:#000!important}.sp-table table tbody tr.sp-over td:first-child{border-top-left-radius:.4rem;border-bottom-left-radius:.4rem}.sp-table table tbody tr.sp-over td:last-child{border-top-right-radius:.4rem;border-bottom-right-radius:.4rem}.sp-table table tbody tr.sp-selected td{color:#ccc;cursor:default}.sp-table table thead .sp-rtl th,.sp-table table tbody .sp-rtl td{direction:rtl;text-align:right}.sp-pagination{display:flex;justify-content:space-between;align-items:center;padding:5px 10px}.sp-pagination .sp-page-info{line-height:1;color:#0000004d;font-size:14px;font-weight:600;margin-right:10px}.sp-pagination .sp-page-control{padding:0;margin:0}.sp-pagination .sp-page-control .sp-page-button{display:inline-flex}.sp-pagination .sp-page-control .sp-page-button a{display:inline-flex;padding:7px;font-size:14px;color:#333;text-decoration:none;cursor:pointer;line-height:1;background:transparent;transition:all .3s ease;border-radius:.6rem}.sp-pagination .sp-page-control .sp-page-button a:hover{color:#000;background-color:#f1f1f1}.sp-pagination .sp-page-control .sp-page-button.sp-page-disabled a{color:#ddd;font-weight:400;background-color:transparent;cursor:default}.sp-trigger-container{display:flex;align-items:center;justify-content:space-between;flex-grow:1;padding:6px 12px 6px 6px;background-color:#fff;border:1px solid #ddd;border-radius:.3rem;font-size:14px;line-height:1.42857143;outline:0!important;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s ease}.sp-trigger-container:hover{border:1px solid #aaa}.sp-trigger-container.sp-disabled,.sp-trigger-container.sp-disabled:hover{border:1px solid #eee;background-color:#eee;cursor:default;color:#aaa}.sp-trigger-container.sp-disabled .sp-select,.sp-trigger-container.sp-disabled .sp-chips,.sp-trigger-container.sp-disabled:hover .sp-select,.sp-trigger-container.sp-disabled:hover .sp-chips{color:#aaa;background-color:#eee}.sp-trigger-container.sp-disabled .sp-chip,.sp-trigger-container.sp-disabled:hover .sp-chip{background-color:#d6d6d6!important;color:#666!important}.sp-trigger-container .bi-chevron-down{transition:transform .2s ease;margin-left:.5rem;font-size:1rem;color:#666}.sp-trigger-container.sp-opened{box-shadow:3px 2px 6px #0000004d;border:1px solid #666;color:#000}.sp-trigger-container.sp-opened .bi-chevron-down{transform:rotate(180deg)}.sp-trigger-container.sp-opened:hover{border:1px solid #666}.sp-trigger-container .sp-placeholder{color:#aaa;padding:5px;line-height:1}.sp-trigger-container .sp-trigger{display:flex;align-items:center;flex-wrap:wrap}.sp-trigger-container .sp-trigger.sp-select{justify-content:space-between;flex-grow:1}.sp-trigger-container .sp-trigger.sp-select .sp-select-content{padding:5px;line-height:1.143;color:#666}.sp-trigger-container .sp-trigger.sp-chips{gap:.5rem}.sp-trigger-container .sp-trigger .sp-chip{border-radius:.3rem;background-color:#eee;color:#666;display:inline-flex;align-items:center;padding:5px 7px;transition:all .2s ease}.sp-trigger-container .sp-trigger .sp-chip--body{display:inline-flex;line-height:1.143;margin-right:5px}.sp-trigger-container .sp-trigger .sp-chip:hover{background-color:#f7f7f7;color:#000}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { ref as y, computed as R, watch as X, onMounted as pe, provide as O, nextTick as q, inject as E, defineComponent as W, reactive as de, onBeforeUnmount as He, onUnmounted as Ve, withDirectives as je, h as i, vShow as Ue, Teleport as Ge, Transition as ve, openBlock as M, createElementBlock as k, createElementVNode as D, mergeProps as le, toRef as me } from "vue";
const [
  ae,
  oe,
  ie,
  re,
  we,
  ye
] = [
  37,
  38,
  39,
  40,
  13,
  27
], Ze = [ae, oe, ie, re, we, ye], j = -1, be = 0, We = 0, V = 1, Ke = 10, Se = "first", te = "previous", ne = "next", Ce = "last", x = "page_num", I = "page_count", $ = "row_count", A = "max_select_limit", T = "selected_count", [
  Xe,
  Y,
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
], K = {
  [Xe]: {
    // Chinese
    next: "下一页",
    prev: "上一页",
    first: "首页",
    last: "尾页",
    pageInfo: `第 ${x}/${I} 页(共 ${$} 条记录)`,
    notFound: "无查询结果",
    loadingData: "Loading data...",
    clear: "清除内容",
    clearAll: "清除全部已选择项目",
    fetchData: "Refresh data",
    maxSelected: `最多只能选择 ${A} 个项目`,
    placeholder: "请选择一个项目",
    selectedCount: `已选择 ${T} 个项目`,
    search: "搜索"
  },
  [Y]: {
    // English
    next: "Next page",
    prev: "Previous page",
    first: "First page",
    last: "Last page",
    pageInfo: `Page ${x} of ${I} (${$} records)`,
    notFound: "Data not found",
    loadingData: "Loading data...",
    clear: "Clear content",
    clearAll: "Clear all selected",
    fetchData: "Refresh data",
    maxSelected: `You can only select up to ${A} items`,
    placeholder: "Select an option",
    selectedCount: `${T} items selected`,
    search: "Search"
  },
  [Ye]: {
    // Japanese
    next: "次へ",
    prev: "前へ",
    first: "最初のページへ",
    last: "最後のページへ",
    pageInfo: `${x}/${I} 件 (全 ${$} つ記録)`,
    notFound: "(0 件)",
    loadingData: "Loading data...",
    clear: "コンテンツをクリアする",
    clearAll: "選択した項目をクリアする",
    fetchData: "Refresh data",
    maxSelected: `最多で ${A} のプロジェクトを選ぶことしかできません`,
    placeholder: "プロジェクトを選択してください",
    selectedCount: `${T} アイテムが選択されました`,
    search: "検索"
  },
  [qe]: {
    // Arabic
    next: "التالي",
    prev: "السابق",
    first: "الاول",
    last: "الأخير",
    pageInfo: `صفحة ${x}/${I} (${$} سجلات)`,
    notFound: "لا يوجد نتائج",
    loadingData: "Loading data...",
    clear: "محو المحتوى",
    clearAll: "إلغاء التحديد",
    fetchData: "Refresh data",
    maxSelected: `يمكنك فقط تحديد (${A}) عناصر`,
    placeholder: "رجاء حدد الخيار",
    selectedCount: `تم تحديد (${T}) عناصر`,
    search: "يبحث"
  },
  [Je]: {
    // Spanish
    next: "Siguiente página",
    prev: "Pagina anterior",
    first: "Primera página",
    last: "última página",
    pageInfo: `Página ${x}/${I} (${$} registros)`,
    notFound: "no encontrado",
    loadingData: "Loading data...",
    clear: "Borrar contenido",
    clearAll: "Borrar todo lo seleccionado",
    fetchData: "Refresh data",
    maxSelected: `Solo puedes seleccionar hasta ${A} items`,
    placeholder: "Seleccione una opción",
    selectedCount: `${T} items Seleccionado`,
    search: "Buscar"
  },
  [Qe]: {
    // German
    next: "Nächste Seite",
    prev: "Vorherige Seite",
    first: "Erste Seite",
    last: "Letzte Seite",
    pageInfo: `Seite ${x}/${I} (${$} Einträge)`,
    notFound: "Nicht gefunden",
    loadingData: "Loading data...",
    clear: "Inhalt löschen",
    clearAll: "Alle ausgewählten löschen",
    fetchData: "Refresh data",
    maxSelected: `Sie können nur bis zu ${A} Elemente auswählen`,
    placeholder: "Wählen",
    selectedCount: `${T} Elemente ausgewählt`,
    search: "Suchen"
  },
  [et]: {
    // Romanian
    next: "Pagina următoare",
    prev: "Pagina precedentă",
    first: "Prima pagină",
    last: "Ultima pagină",
    pageInfo: `Pagina ${x}/${I} (${$} înregistrări)`,
    notFound: "nu a fost găsit",
    loadingData: "Loading data...",
    clear: "Șterge conținutul",
    clearAll: "Șterge înregistrările selectate",
    fetchData: "Refresh data",
    maxSelected: `Poți selecta până la ${A} înregistrări`,
    placeholder: "Selectează o înregistrare",
    selectedCount: `${T} înregistrări selectate`,
    search: "Căutare"
  },
  [tt]: {
    // Russian
    next: "Вперед",
    prev: "Назад",
    first: "В начало",
    last: "В конец",
    pageInfo: `${x} - ${I} / ${$}`,
    notFound: "Нет данных",
    loadingData: "Загрузка данных...",
    clear: "Очистить",
    clearAll: "Очистить выбранное",
    fetchData: "Обновить данные",
    maxSelected: `Нельзя выбрать более ${A} значений`,
    placeholder: "Выберите значение",
    selectedCount: `${T} - выбрано`,
    search: "Поиск"
  },
  [nt]: {
    // French
    next: "Page suivante",
    prev: "Page précédente",
    first: "Première page",
    last: "Dernière page",
    pageInfo: `Page ${x}/${I} (${$} lignes)`,
    notFound: "Aucun résultat",
    loadingData: "Loading data...",
    clear: "Effacer",
    clearAll: "Tout déselectionner",
    fetchData: "Refresh data",
    maxSelected: `Vous ne pouvez pas sélectionner plus de ${A} élements`,
    placeholder: "Sélectionnez une option",
    selectedCount: `${T} éléments sélectionnés`,
    search: "Recherche"
  },
  [lt]: {
    // Portuguese-Brazil
    next: "Página seguinte",
    prev: "Página anterior",
    first: "Primera página",
    last: "Última página",
    pageInfo: `Página ${x}/${I} (${$} registros)`,
    notFound: "não encontrado",
    loadingData: "Loading data...",
    clear: "Apagar conteúdo",
    clearAll: "Apagar itens selecionados",
    fetchData: "Refresh data",
    maxSelected: `Máximo permitido ${A} itens`,
    placeholder: "Selecione uma opção",
    selectedCount: `${T} itens selecionados`,
    search: "Procurar"
  },
  [at]: {
    // Polish
    next: "Następna",
    prev: "Poprzednia",
    first: "Pierwsza",
    last: "Ostatnia",
    pageInfo: `Strona ${x}/${I} (${$} rekordów)`,
    notFound: "Nic nie znaleziono",
    loadingData: "Loading data...",
    clear: "Wyczyść",
    clearAll: "Usuń wszystkie zaznaczone",
    fetchData: "Refresh data",
    maxSelected: `Możesz zaznaczyć maksymalnie ${A}`,
    placeholder: "Wybierz z listy",
    selectedCount: `${T} zaznaczonych`,
    search: "Szukaj"
  },
  [ot]: {
    // Dutch
    next: "Volgende pagina",
    prev: "Vorige pagina",
    first: "Eerste pagina",
    last: "Laatste pagina",
    pageInfo: `Pagina ${x}/${I} (${$} items)`,
    notFound: "Niet gevonden",
    loadingData: "Loading data...",
    clear: "Wissen",
    clearAll: "Wis selectie",
    fetchData: "Refresh data",
    maxSelected: `Je kunt maar ${A} items selecteren`,
    placeholder: "Kies een optie",
    selectedCount: `${T} Items geselecteerd`,
    search: "Zoekopdracht"
  },
  [it]: {
    // Traditional Chinese
    next: "下一頁",
    prev: "上一頁",
    first: "首頁",
    last: "尾頁",
    pageInfo: `第 ${x}/${I} 頁(共 ${$} 條記錄)`,
    notFound: "無查詢結果",
    loadingData: "Loading data...",
    clear: "清除內容",
    clearAll: "清除全部已選擇項目",
    fetchData: "Refresh data",
    maxSelected: `最多只能選擇 ${A} 個項目`,
    placeholder: "請選擇一個項目",
    selectedCount: `已選擇 ${T} 個項目`,
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
    fetchData: "Refresh data",
    maxSelected: "Sadece max_selected_limit kadar seçim yapabilirsin.",
    placeholder: "Seçim yapınız.",
    selectedCount: "selected_count seçildi.",
    search: "Aramak"
  }
};
function st(e) {
  if (!e)
    return K[Y];
  const t = String(e).toLowerCase();
  return Object.hasOwn(K, t) ? K[t] : K[Y];
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
function ct(e) {
  return [oe, re].includes(e);
}
function ut(e) {
  return [ae, ie].includes(e);
}
function dt(e) {
  return we === e;
}
function gt(e) {
  return ye === e;
}
function ft(e) {
  e && e.focus({ preventScroll: !0 });
}
function _e(e) {
  return Array.isArray(e) ? !e.length : !0;
}
function Pe(e) {
  return typeof e == "string" ? e : typeof e == "number" ? `${e}px` : "";
}
const xe = () => ({
  list: { type: Array, default: void 0 },
  highlightIndex: { type: Number, default: j }
}), Ie = () => ["select", "set-highlight"];
function ht(e, t) {
  const n = y([]), s = R(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.length;
  });
  function a(r) {
    var g;
    return (g = n.value) != null && g.length ? n.value.some((h) => h[e.keyProp] === r[e.keyProp]) : !1;
  }
  function o(r) {
    var g;
    return !((g = n.value) != null && g.length) || typeof r > "u" ? !1 : n.value.some((h) => h[e.keyProp] === r);
  }
  function u(r) {
    var g, h, p;
    if (e.multiple) {
      const _ = new Set(r);
      return _.size !== ((g = n.value) == null ? void 0 : g.length) ? !1 : Array.from(_).every(o);
    } else if ((h = n.value) != null && h.length)
      return (r == null ? void 0 : r.toString()) === ((p = n.value[0][e.keyProp]) == null ? void 0 : p.toString());
  }
  function d(r) {
    if (!a(r)) {
      if (e.multiple && n.value) {
        f([...n.value, r]);
        return;
      }
      f([r]);
    }
  }
  function c() {
    t("remove", n.value), f(null);
  }
  function l(r) {
    var g;
    t("remove", [r]), ((g = n.value) == null ? void 0 : g.length) === 1 ? f(null) : f(
      n.value.filter((h) => h[e.keyProp] !== r[e.keyProp])
    );
  }
  function f(r, g = !0) {
    var h;
    if (n.value = r, g)
      if (e.multiple)
        t("update:modelValue", (r == null ? void 0 : r.map((p) => p[e.keyProp])) || null);
      else {
        const p = ((h = r == null ? void 0 : r[0]) == null ? void 0 : h[e.keyProp]) ?? null;
        p ? t("update:modelValue", e.convertValueToString ? p.toString() : p) : t("update:modelValue", null);
      }
    t("selection-change", r);
  }
  return {
    selected: n,
    selectedCount: s,
    isItemSelected: a,
    selectItem: d,
    removeItem: l,
    removeAll: c,
    setSelected: f,
    isKeysEqualToSelected: u
  };
}
function pt(e, t, n) {
  const s = y(j);
  function a(l) {
    s.value = l;
  }
  function o() {
    s.value !== j && s.value !== 0 && (s.value -= 1);
  }
  function u() {
    _e(n.value) || s.value !== n.value.length - 1 && (s.value += 1);
  }
  function d(l) {
    if (l === oe)
      return o();
    if (l === re)
      return u();
  }
  function c() {
    return s.value !== j;
  }
  return {
    highlightIndex: s,
    setItemHighlight: a,
    highlightNavigation: d,
    isSomeRowHighlight: c
  };
}
function ge(e) {
  return Ze.includes(e);
}
function $e() {
  return {
    /**
     * binding selected item keys, it must be match 'keyProp' option value
     */
    modelValue: { type: [Array, Number, String], default: null },
    placeholder: { type: String, default: "" },
    /** multiple selection */
    multiple: { type: Boolean, default: !1 },
    language: { type: String, default: Y },
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
    max: { type: Number, default: be, validator: (e) => e >= 0 },
    /**
     * pagination bar
     */
    pagination: { type: Boolean, default: !0 },
    /**
     * text written from right to left
     */
    rtl: { type: Boolean, default: !1 },
    convertValueToString: { type: Boolean, default: !0 },
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
    selected: s,
    selectedCount: a,
    isItemSelected: o,
    removeAll: u,
    removeItem: d,
    selectItem: c,
    setSelected: l,
    isKeysEqualToSelected: f
  } = ht(e, t), r = y(""), g = y(""), h = y(V), p = y(0), _ = y([]), b = y(!1), L = se(), z = () => _e(_.value), S = (m) => {
    if (!m || !Object.keys(m).length)
      return "";
    switch (typeof e.labelProp) {
      case "string":
        return m[e.labelProp];
      case "function":
        return e.labelProp(m);
    }
  }, v = (m) => {
    var P;
    if (e.max === be)
      return c(m);
    if (e.multiple && ((P = s.value) == null ? void 0 : P.length) === e.max) {
      g.value = n.maxSelected.replace(A, e.max), L(() => {
        g.value = "";
      });
      return;
    }
    c(m);
  }, C = () => {
    b.value = !0;
    const m = {
      search: r.value,
      pageNumber: h.value,
      pageSize: e.pagination ? e.pageSize : We
    };
    t("fetch-data", m, (P, F) => {
      Array.isArray(P) && (_.value = P, p.value = typeof F == "number" ? F : 0, q(() => {
        b.value = !1;
      }));
    });
  }, B = () => {
    const { modelValue: m } = e;
    let P = m;
    if (e.multiple)
      if (Array.isArray(m)) {
        if (!m.length) {
          l(null, !1);
          return;
        }
      } else
        m && (P = [m]);
    else if (!m) {
      l(null, !1);
      return;
    }
    f(P) || t("fetch-selected-data", P, (F) => {
      e.multiple && !Array.isArray(F) || l(F, m.length !== F.length);
    });
  };
  return X(r, () => {
    h.value = V, C();
  }), X(() => e.modelValue, B), pe(() => {
    e.fetchDataOnMount && C(), B();
  }), O("keyProp", e.keyProp), O("rtl", e.rtl), O("pageSize", e.pageSize), O("debounce", e.debounce), O("multiple", e.multiple), O("loading", b), O("language", n), O("renderCell", S), O("isItemSelected", o), O("selectedCount", a), O("removeAll", u), O("removeItem", d), O("fetchData", C), {
    selected: s,
    query: r,
    message: g,
    currentPage: h,
    totalRows: p,
    lang: n,
    list: _,
    loading: b,
    renderCell: S,
    isDataEmpty: z,
    isItemSelected: o,
    selectedCount: a,
    selectItem: v,
    removeAll: u,
    removeItem: d,
    fetchData: C
  };
}
function H() {
  return {
    keyProp: E("keyProp"),
    renderCell: E("renderCell"),
    rtl: E("rtl"),
    isItemSelected: E("isItemSelected"),
    pageSize: E("pageSize"),
    language: E("language"),
    debounce: E("debounce"),
    multiple: E("multiple"),
    loading: E("loading"),
    selectedCount: E("selectedCount"),
    removeAll: E("removeAll"),
    removeItem: E("removeItem"),
    fetchData: E("fetchData")
  };
}
function mt(e, t, n, s) {
  const a = R(() => Math.ceil(n.value / e.pageSize)), o = R(() => t.value === V), u = R(() => t.value === a.value), d = R(
    () => s.pageInfo.replace(x, t.value).replace(I, a.value).replace($, n.value)
  ), c = function(r) {
    switch (r) {
      case Se:
        return V;
      case te:
        return t.value - 1;
      case ne:
        return t.value + 1;
      case Ce:
        return a.value;
    }
  }, l = function(r) {
    let g = c(r);
    typeof g > "u" || (g < V && (g = V), g > a.value && (g = a.value), g !== t.value && (t.value = g));
  };
  return {
    paginationInfo: d,
    isFirstPage: o,
    isLastPage: u,
    switchPage: l,
    pagingNavigation: (r) => {
      if (r === ae)
        return l(te);
      if (r === ie)
        return l(ne);
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
function fe(e) {
  if (yt(e)) {
    e.style.visibility = "hidden", e.style.display = "inline-block";
    const t = e.getBoundingClientRect();
    return e.style.visibility = "visible", e.style.display = "none", t;
  }
  return e.getBoundingClientRect();
}
const De = "click", bt = "hover", St = "contextmenu", he = 150, ee = 5;
function Ct(e, t) {
  return typeof e.animated == "string" ? e.animated : e.animated ? t.value ? "animate-up" : "animate-down" : "";
}
function ce(e) {
  return {
    isTriggerByClick: e.trigger === De,
    isTriggerByHover: e.trigger === bt,
    isTriggerByContextmenu: e.trigger === St
  };
}
function _t(e, t, n, s) {
  const { isTriggerByContextmenu: a } = ce(e), o = window.pageYOffset, u = document.documentElement.clientHeight, d = a ? t : n.top + o;
  let c = a ? t : n.top + n.height + ee + o, l = !1, f = !1, r = !1;
  return c + s.height > o + u && (l = !0), d - ee - s.height < o && (f = !0), !f && l && (c = d - ee - s.height, r = !0), { dropUp: r, top: c };
}
function Pt(e, t, n, s) {
  const { isTriggerByContextmenu: a } = ce(e), o = window.pageXOffset, u = document.documentElement.clientWidth, d = a ? 0 : n.width, c = a ? t : n.left + o, l = c + d / 2 - s.width / 2, f = c + d - s.width;
  switch (e.align) {
    case "left":
      return c + s.width > o + u ? f : c;
    case "center":
      return l + s.width > o + u ? f : f < o ? c : l;
    case "right":
      return f < o ? c : f;
  }
}
function xt(e) {
  const t = wt();
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
function $t(e) {
  return [
    "v-dropdown-trigger",
    e.fullWidth && "v-dropdown-trigger--full-width",
    e.customTriggerClass && e.customTriggerClass
  ];
}
const At = W({
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
    trigger: { type: String, default: De },
    /** Add custom class to trigger */
    customTriggerClass: { type: String, default: "" },
    /** Add custom class to container */
    customContainerClass: { type: String, default: "" }
  },
  emits: ["visible-change"],
  setup(e, { slots: t, emit: n, expose: s }) {
    const a = y(!1), o = de({ top: "", left: "", width: "" }), u = de({ x: null, y: null }), d = y(!1), c = y(null), l = y(null), f = y(null), {
      isTriggerByClick: r,
      isTriggerByHover: g,
      isTriggerByContextmenu: h
    } = ce(e);
    X(a, (S) => n("visible-change", S));
    function p() {
      e.disabled || ("trigger" in t && L(), g ? (window.clearTimeout(c.value), c.value = window.setTimeout(() => {
        a.value = !0;
      }, he)) : a.value = !0);
    }
    function _(S = !1) {
      e.disabled || !e.toggle && !S || (g ? (window.clearTimeout(c.value), c.value = window.setTimeout(() => {
        a.value = !1;
      }, he)) : a.value = !1);
    }
    function b() {
      a.value ? _() : p();
    }
    function L() {
      const S = fe(l.value), v = fe(f.value), C = _t(e, u.y, S, v), B = Pt(e, u.x, S, v);
      d.value = C.dropUp, o.top = `${C.top}px`, o.left = `${B}px`;
    }
    function z(S) {
      if (!a.value)
        return;
      const v = S.composedPath().some((C) => C === l.value);
      v && !e.toggle && !h || (!v || v && h) && _(!0);
    }
    return pe(() => {
      typeof e.width < "u" && (o.width = e.width + "px"), document.body.addEventListener("mousedown", z);
    }), He(() => {
      document.body.removeEventListener("mousedown", z), f.value && f.value.remove();
    }), Ve(() => {
      l.value && l.value.remove();
    }), s({
      display: p,
      close: _,
      toggleVisible: b,
      adjust: L,
      container: f,
      visible: a
    }), () => {
      const S = [];
      "trigger" in t && S.push(t.trigger({
        visible: a,
        disabled: e.disabled
      }));
      const v = {
        class: It(e),
        style: o,
        ref: f,
        // do not close dropdown container when
        // do some operations in that
        onMousedown: (m) => m.stopPropagation()
      };
      g && (v.onMouseenter = p, v.onMouseleave = _);
      const C = je(
        i("div", v, t.default && t.default()),
        [[Ue, a.value]]
      );
      S.push(
        i(Ge, { to: "body" }, [
          i(ve, { name: Ct(e, d) }, () => [C])
        ])
      );
      const B = {
        class: $t(e),
        ref: l
      };
      return g ? (B.onMouseenter = p, B.onMouseleave = _) : r ? B.onClick = (m) => {
        e.manual || (m.stopPropagation(), b());
      } : h && (B.onContextmenu = (m) => {
        if (e.manual)
          return;
        m.stopPropagation(), m.preventDefault();
        const P = xt(m);
        u.x = P.x, u.y = P.y, p();
      }), i("div", B, S);
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
    const n = y(""), s = R(() => ({
      "sp-circle-btn--disabled": e.disabled,
      "sp-circle-btn--small": e.size === "small",
      "sp-circle-btn--large": e.size === "large"
    })), a = R(() => ({
      "font-size": e.fontSize,
      "background-color": e.disabled ? "transparent" : n.value
    }));
    return () => {
      const o = {
        class: ["sp-circle-btn", s.value],
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
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, Tt = {}, Dt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-search",
  viewBox: "0 0 16 16"
};
function Lt(e, t) {
  return M(), k("svg", Dt, t[0] || (t[0] = [
    D("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }, null, -1)
  ]));
}
const Ot = /* @__PURE__ */ N(Tt, [["render", Lt]]), Et = {}, zt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-x-lg",
  viewBox: "0 0 16 16"
};
function Bt(e, t) {
  return M(), k("svg", zt, t[0] || (t[0] = [
    D("path", { d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" }, null, -1)
  ]));
}
const J = /* @__PURE__ */ N(Et, [["render", Bt]]), Mt = {}, kt = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  class: "sp-icon sp-icon-loading"
};
function Nt(e, t) {
  return M(), k("svg", kt, t[0] || (t[0] = [
    D("path", {
      d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
      opacity: ".25"
    }, null, -1),
    D("path", { d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" }, [
      D("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        dur: "0.75s",
        values: "0 12 12;360 12 12",
        repeatCount: "indefinite"
      })
    ], -1)
  ]));
}
const Rt = /* @__PURE__ */ N(Mt, [["render", Nt]]), Ft = {
  props: {
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue", "keyboard-operation"],
  setup(e, { emit: t, expose: n }) {
    const { rtl: s, debounce: a, loading: o, language: u, selectedCount: d, multiple: c } = H(), l = y(!1), f = y(), r = se(a), g = R(() => !c || !d.value ? u.search : u.selectedCount.replace(T, d.value)), h = () => ft(f.value);
    return n({ focus: h }), () => {
      const _ = [
        R(() => o.value ? i(Rt) : i(Ot, { class: l.value ? "sp-search-in-focus" : "" })).value,
        i("input", {
          type: "text",
          autocomplete: "off",
          value: e.modelValue.trim(),
          class: {
            "sp-search-input": !0,
            "sp-search-input--rtl": s
          },
          disabled: o.value,
          placeholder: g.value,
          onKeydown: (b) => {
            b.stopPropagation(), ge(b.keyCode) && t("keyboard-operation", b.keyCode);
          },
          onFocus: () => {
            l.value = !0;
          },
          onBlur: () => {
            l.value = !1;
          },
          onInput: (b) => {
            ge(b.keyCode) || r(() => {
              t("update:modelValue", b.target.value.trim());
            });
          },
          ref: f
        })
      ];
      if (e.modelValue.trim()) {
        const b = {
          onClick() {
            t("update:modelValue", ""), h();
          }
        };
        _.push(
          i(G, b, () => i(J))
        );
      }
      return i("div", { class: "sp-search-container" }, _);
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
  return M(), k("svg", Vt, t[0] || (t[0] = [
    D("path", { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" }, null, -1)
  ]));
}
const Ut = /* @__PURE__ */ N(Ht, [["render", jt]]), Gt = {}, Zt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-refresh6",
  viewBox: "0 0 24 24"
};
function Wt(e, t) {
  return M(), k("svg", Zt, t[0] || (t[0] = [
    D("path", { d: "M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z" }, null, -1)
  ]));
}
const Kt = /* @__PURE__ */ N(Gt, [["render", Wt]]), Xt = {
  setup() {
    const { selectedCount: e, removeAll: t, language: n, fetchData: s } = H();
    return () => {
      const a = [], o = {
        title: n.clearAll,
        size: "large",
        // bgColor: '#f1f1f1',
        // hoverBgColor: '#ddd',
        disabled: !e.value,
        onClick: t
      }, u = {
        title: n.fetchData,
        size: "large",
        onClick: s
      };
      return a.push(
        i(G, u, () => i(Kt))
      ), a.push(
        i(G, o, () => i(Ut))
      ), i("div", { class: "sp-search-control" }, a);
    };
  }
};
const Yt = {
  props: {
    data: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { renderCell: n, rtl: s, removeItem: a } = H();
    return () => {
      const o = n(e.data), u = {
        class: {
          "sp-list-item": !0,
          "sp-over": !e.isSelected && e.isHover,
          "sp-selected": e.isSelected,
          "sp-rtl": s
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, d = [
        i("div", { title: o, innerHTML: o })
      ];
      if (e.isSelected) {
        const c = {
          onClick: (l) => {
            l.stopPropagation(), a(e.data);
          }
        };
        d.push(
          i(G, c, () => i(J))
        );
      }
      return i("div", u, d);
    };
  }
}, qt = {
  name: "SelectPageList",
  props: xe(),
  emits: Ie(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, keyProp: s } = H();
    return () => {
      const a = e.list.map((u, d) => i(Yt, {
        key: u[s],
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
const Jt = {
  props: {
    columns: { type: Object, default: void 0 },
    row: { type: Object, default: void 0 },
    isHover: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 }
  },
  emits: ["select", "hover"],
  setup(e, { emit: t }) {
    const { row: n } = e, { rtl: s } = H(), a = (o) => {
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
          "sp-rtl": s
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, u = e.columns.map((d, c) => {
        const l = {
          key: c,
          innerHTML: a(d)
        };
        return Object.hasOwn(d, "width") && (l.style = { width: Pe(d.width) }), i("td", l);
      });
      return i("tr", o, u);
    };
  }
}, Qt = {
  name: "SelectPageTable",
  props: {
    ...xe(),
    columns: { type: Array, default: void 0 }
  },
  emits: Ie(),
  setup(e, { emit: t }) {
    const { isItemSelected: n, rtl: s, keyProp: a } = H();
    return () => {
      const o = e.columns.map((c) => i("th", c.title)), u = e.list.map((c, l) => i(Jt, {
        key: c[a],
        row: c,
        columns: e.columns,
        isHover: e.highlightIndex === l,
        isSelected: n(c),
        onSelect: () => t("select", c),
        onHover: () => t("set-highlight", l)
      })), d = i("table", [
        // table thead
        i("thead", i("tr", { class: { "sp-rtl": s } }, o)),
        // table tbody
        i("tbody", { onMouseleave: () => t("set-highlight", j) }, u)
      ]);
      return i("div", { class: "sp-table" }, d);
    };
  }
};
const en = {}, tn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-left",
  viewBox: "0 0 16 16"
};
function nn(e, t) {
  return M(), k("svg", tn, t[0] || (t[0] = [
    D("path", {
      "fill-rule": "evenodd",
      d: "M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
    }, null, -1)
  ]));
}
const ln = /* @__PURE__ */ N(en, [["render", nn]]), an = {}, on = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-left",
  viewBox: "0 0 16 16"
};
function rn(e, t) {
  return M(), k("svg", on, t[0] || (t[0] = [
    D("path", {
      "fill-rule": "evenodd",
      d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    }, null, -1)
  ]));
}
const sn = /* @__PURE__ */ N(an, [["render", rn]]), cn = {}, un = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-right",
  viewBox: "0 0 16 16"
};
function dn(e, t) {
  return M(), k("svg", un, t[0] || (t[0] = [
    D("path", {
      "fill-rule": "evenodd",
      d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ]));
}
const gn = /* @__PURE__ */ N(cn, [["render", dn]]), fn = {}, hn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-bar-right",
  viewBox: "0 0 16 16"
};
function pn(e, t) {
  return M(), k("svg", hn, t[0] || (t[0] = [
    D("path", {
      "fill-rule": "evenodd",
      d: "M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
    }, null, -1)
  ]));
}
const vn = /* @__PURE__ */ N(fn, [["render", pn]]), mn = {
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
        { action: Se, title: n.first, disabled: e.isFirstPage, icon: ln },
        { action: te, title: n.prev, disabled: e.isFirstPage, icon: sn },
        { action: ne, title: n.next, disabled: e.isLastPage, icon: gn },
        { action: Ce, title: n.last, disabled: e.isLastPage, icon: vn }
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
}, wn = {}, yn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chat-left-dots",
  viewBox: "0 0 16 16"
};
function bn(e, t) {
  return M(), k("svg", yn, t[0] || (t[0] = [
    D("path", { d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, null, -1),
    D("path", { d: "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)
  ]));
}
const Sn = /* @__PURE__ */ N(wn, [["render", bn]]);
function Le(e, t) {
  const {
    lang: n,
    selected: s,
    query: a,
    message: o,
    currentPage: u,
    totalRows: d,
    list: c,
    loading: l,
    isDataEmpty: f,
    selectItem: r,
    fetchData: g,
    renderCell: h,
    removeAll: p,
    removeItem: _
  } = vt(e, t), {
    highlightIndex: b,
    setItemHighlight: L,
    highlightNavigation: z,
    isSomeRowHighlight: S
  } = pt(e, t, c), {
    paginationInfo: v,
    isFirstPage: C,
    isLastPage: B,
    switchPage: m,
    pagingNavigation: P
  } = mt(e, u, d, n), F = se(e.debounce), Z = y();
  X(l, (w) => {
    w || q(() => Z.value && Z.value.focus());
  });
  const Me = () => {
    Z.value && Z.value.focus();
  }, ke = () => i("div", { class: "sp-search" }, [
    i(Ft, {
      ref: Z,
      modelValue: a.value,
      "onUpdate:modelValue"(w) {
        a.value = w;
      },
      onKeyboardOperation: (w) => {
        if (ct(w))
          return z(w);
        if (ut(w)) {
          P(w), F(g);
          return;
        }
        if (dt(w))
          return S() ? r(c.value[b.value]) : void 0;
        gt(w) && t("close-dropdown");
      }
    }),
    i(Xt)
  ]), Ne = () => {
    const w = [];
    return o.value && w.push(
      i("div", { class: "sp-message" }, [
        i(Sn),
        i("div", { class: "sp-message-body", innerHTML: o.value })
      ])
    ), i(ve, {
      name: "sp-message-slide",
      appear: !0,
      onEnter: () => t("adjust-dropdown"),
      onAfterLeave: () => t("adjust-dropdown")
    }, () => w);
  }, Re = () => f() ? ue() : i(qt, {
    list: c.value,
    highlightIndex: b.value,
    onSelect: (w) => r(w),
    onSetHighlight: (w) => L(w)
  }), Fe = () => f() ? ue() : i(Qt, {
    list: c.value,
    columns: e.columns,
    highlightIndex: b.value,
    onSelect: (w) => r(w),
    onSetHighlight: (w) => L(w)
  }), ue = () => i("div", { class: "sp-result-message" }, l.value ? "" : n.notFound);
  return {
    selected: s,
    query: a,
    message: o,
    currentPage: u,
    lang: n,
    renderCell: h,
    removeAll: p,
    removeItem: _,
    setSearchFocus: Me,
    renderSearch: ke,
    renderMessage: Ne,
    renderList: Re,
    renderTable: Fe,
    renderPagination: () => {
      if (e.pagination)
        return i(mn, {
          pageInfo: v.value,
          isFirstPage: C.value,
          isLastPage: B.value,
          onPageChange(w) {
            m(w), g();
          }
        });
    },
    renderContainer: (w) => {
      const Q = y({
        class: {
          "sp-container": !0,
          "sp-loading": l.value
        }
      });
      return e.width && (Q.value.style = { width: Pe(e.width) }), i("div", Q.value, w);
    },
    fetchData: g
  };
}
function Oe(e) {
  const t = y(!1), n = y();
  function s() {
    n.value && n.value.close();
  }
  function a() {
    n.value && n.value.adjust();
  }
  function o(u, d, c) {
    const l = {
      ref: n,
      border: !1,
      fullWidth: !0,
      disabled: e.disabled,
      customTriggerClass: e == null ? void 0 : e.customTriggerClass,
      customContainerClass: e == null ? void 0 : e.customContainerClass,
      onVisibleChange(f) {
        t.value = f;
      }
    };
    return i(At, le(l, u), {
      trigger: () => d,
      default: () => c
    });
  }
  return {
    visible: t,
    dropdownRef: n,
    renderDropdown: o,
    closeDropdown: s,
    adjustDropdown: a
  };
}
const Cn = W({
  name: "SelectPageListCore",
  props: {
    ...$e()
  },
  emits: Te(),
  setup(e, { emit: t, expose: n }) {
    const {
      selected: s,
      lang: a,
      renderCell: o,
      removeAll: u,
      removeItem: d,
      setSearchFocus: c,
      renderSearch: l,
      renderMessage: f,
      renderList: r,
      renderPagination: g,
      renderContainer: h,
      fetchData: p
    } = Le(e, t);
    return n({
      selected: s,
      lang: a,
      renderCell: o,
      removeAll: u,
      removeItem: d,
      setSearchFocus: c,
      fetchData: p
    }), () => h([
      l(),
      f(),
      r(),
      g()
    ]);
  }
});
const _n = {}, Pn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-chevron-down",
  viewBox: "0 0 16 16"
};
function xn(e, t) {
  return M(), k("svg", Pn, t[0] || (t[0] = [
    D("path", {
      "fill-rule": "evenodd",
      d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ]));
}
const In = /* @__PURE__ */ N(_n, [["render", xn]]), Ee = {
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
      ), n.push(i(In));
      const s = {
        class: {
          "sp-trigger-container": !0,
          "sp-opened": e.dropdownVisible,
          "sp-disabled": e.disabled
        }
      };
      return i("div", s, n);
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
    const n = me(e, "selected");
    return () => {
      var a, o;
      if (!((a = n.value) != null && a.length))
        return;
      const s = [
        i("div", { class: "sp-select-content", innerHTML: e.renderCell(n.value[0]) })
      ];
      if ((o = n.value) != null && o.length && !e.disabled) {
        const u = {
          title: e.lang.clear,
          onClick: (d) => {
            d.stopPropagation(), t("remove");
          }
        };
        s.push(
          i(G, u, () => i(J))
        );
      }
      return i("div", { class: "sp-trigger sp-select" }, s);
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
    const n = me(e, "selected");
    return () => {
      const s = n.value.map((a, o) => {
        const u = [
          i("div", { class: "sp-chip--body", innerHTML: e.renderCell(a) })
        ];
        if (!e.disabled) {
          const d = {
            size: "small",
            hoverBgColor: "#ccc",
            onClick: (c) => {
              c.stopPropagation(), t("remove", a);
            }
          };
          u.push(
            i(G, d, () => i(J))
          );
        }
        return i("div", { class: "sp-chip", key: o }, u);
      });
      return i("div", { class: "sp-trigger sp-chips" }, s);
    };
  }
}, Ln = W({
  name: "SelectPageList",
  inheritAttrs: !1,
  props: {
    ...Ae()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n, expose: s }) {
    const {
      visible: a,
      adjustDropdown: o,
      closeDropdown: u,
      renderDropdown: d
    } = Oe(e), c = y([]), l = y();
    return s({
      removeItem: (f) => {
        var r;
        return (r = l.value) == null ? void 0 : r.removeItem(f);
      },
      removeAll: () => {
        var f;
        return (f = l.value) == null ? void 0 : f.removeAll();
      }
    }), () => {
      var b, L, z, S;
      const f = {
        selected: c,
        disabled: e.disabled,
        lang: (b = l == null ? void 0 : l.value) == null ? void 0 : b.lang,
        renderCell: (L = l == null ? void 0 : l.value) == null ? void 0 : L.renderCell,
        onRemove(v) {
          U(n) ? l.value.removeItem(v) : l.value.removeAll();
        }
      }, r = (z = c.value) != null && z.length ? () => i(U(n) ? Be : ze, f) : void 0, g = {
        dropdownVisible: a.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (S = l == null ? void 0 : l.value) == null ? void 0 : S.lang
      }, h = i(Ee, g, r);
      return d(
        {
          onVisibleChange: (v) => {
            t("visible-change", v), v && q(() => {
              l.value.fetchData(), l.value.setSearchFocus();
            });
          }
        },
        h,
        i(Cn, le({
          ref: l,
          onAdjustDropdown: o,
          onCloseDropdown: u,
          onSelectionChange(v) {
            c.value = v, !U(n) && (v != null && v.length) && u();
          }
        }, n))
      );
    };
  }
}), $n = W({
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
      selected: s,
      lang: a,
      removeAll: o,
      removeItem: u,
      setSearchFocus: d,
      renderCell: c,
      renderSearch: l,
      renderMessage: f,
      renderTable: r,
      renderPagination: g,
      renderContainer: h,
      fetchData: p
    } = Le(e, t);
    return n({
      selected: s,
      lang: a,
      renderCell: c,
      removeAll: o,
      removeItem: u,
      setSearchFocus: d,
      fetchData: p
    }), () => h([
      l(),
      f(),
      r(),
      g()
    ]);
  }
}), On = W({
  name: "SelectPageTable",
  inheritAttrs: !1,
  props: {
    ...Ae()
  },
  emits: ["visible-change"],
  setup(e, { emit: t, attrs: n, expose: s }) {
    const {
      visible: a,
      adjustDropdown: o,
      closeDropdown: u,
      renderDropdown: d
    } = Oe(e), c = y([]), l = y(), f = y(!1);
    return s({
      removeItem: (r) => {
        var g;
        return (g = l.value) == null ? void 0 : g.removeItem(r);
      },
      removeAll: () => {
        var r;
        return (r = l.value) == null ? void 0 : r.removeAll();
      }
    }), () => {
      var L, z, S, v;
      const r = {
        selected: c,
        disabled: e.disabled,
        lang: (L = l == null ? void 0 : l.value) == null ? void 0 : L.lang,
        renderCell: (z = l == null ? void 0 : l.value) == null ? void 0 : z.renderCell,
        onRemove(C) {
          U(n) ? l.value.removeItem(C) : l.value.removeAll();
        }
      }, g = (S = c.value) != null && S.length ? () => i(U(n) ? Be : ze, r) : void 0, h = {
        dropdownVisible: a.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (v = l == null ? void 0 : l.value) == null ? void 0 : v.lang
      }, p = i(Ee, h, g);
      return d(
        {
          onVisibleChange: (C) => {
            t("visible-change", C), C && q(() => {
              f.value || (f.value = !0, l.value.fetchData()), l.value.setSearchFocus();
            });
          }
        },
        p,
        i($n, le({
          ref: l,
          onAdjustDropdown: o,
          onCloseDropdown: u,
          onSelectionChange(C) {
            c.value = C, !U(n) && (C != null && C.length) && u();
          }
        }, n))
      );
    };
  }
});
export {
  Ln as SelectPageList,
  Cn as SelectPageListCore,
  On as SelectPageTable,
  $n as SelectPageTableCore
};
