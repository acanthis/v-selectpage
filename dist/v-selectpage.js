(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".sp-result-message{padding:20px 0;text-align:center;font-weight:700;color:#999}.sp-container{min-width:300px;display:inline-flex;overflow:hidden;flex-direction:column;font-family:Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}.sp-message{display:flex;align-items:center;padding:10px 0;background-color:#e4eaee;color:#000;flex-grow:1}.sp-message .bi-chat-left-dots{font-size:1.2rem;margin:0 1rem}.sp-message .sp-message-body{font-size:14px;line-height:1;flex-wrap:wrap;max-width:15rem}.sp-message-slide-enter-active,.sp-message-slide-leave-active{transition:opacity .3s}.sp-message-slide-enter,.sp-message-slide-leave-to{opacity:0}.sp-message-slide-enter-to,.sp-message-slide-leave{opacity:1}.sp-icon{width:1em;height:1em}.sp-icon.sp-icon-small{font-size:1rem}.sp-icon.sp-icon-medium{font-size:1.3rem}.sp-circle-btn{width:20px;height:20px;font-size:14px;line-height:1;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;color:#aaa;transition:all .3s ease;border-radius:50%}.sp-circle-btn:hover{color:#000}.sp-circle-btn.sp-circle-btn--disabled,.sp-circle-btn.sp-circle-btn--disabled:hover{cursor:default;color:#eee}.sp-circle-btn.sp-circle-btn--small{width:16px;height:16px;font-size:12px}.sp-circle-btn.sp-circle-btn--large{width:28px;height:28px;font-size:16px}.animate-down-enter-from,.animate-down-leave-to{transform:scale(.95);opacity:0}.animate-down-enter-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-down-leave-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-enter-from,.animate-up-leave-to{transform:scale(.95);opacity:0}.animate-up-enter-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-leave-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-dropdown-trigger{display:inline-flex}.v-dropdown-trigger.v-dropdown-trigger--full-width{display:flex}.v-dropdown-container{-webkit-font-smoothing:subpixel-antialiased;backface-visibility:hidden;display:inline-flex;margin:0;padding:0;position:absolute;top:0;left:0;border:1px solid #D6D7D7;box-sizing:border-box;background-color:#fff;border-radius:.3rem;overflow:hidden;z-index:3000;will-change:opacity,transform,top,left;box-shadow:0 15px 25px #0003}.v-dropdown-container.v-dropdown-no-border{border:0;border-radius:.5rem;box-shadow:0 10px 30px #0006}.sp-search{display:flex;align-items:center;padding:.5rem 0;transition:all .3s ease}.sp-search .sp-search-container{display:flex;align-items:center;flex-grow:1;padding:0;padding-left:.7rem;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input{border:0;border-radius:50rem;background-color:transparent;margin-left:5px;font-size:14px;line-height:1.43;padding:4px 6px;box-sizing:border-box;outline:none!important;color:#333;font-weight:600;flex-grow:1;transition:all .3s ease}.sp-search .sp-search-container .sp-search-input.sp-search-input--rtl{direction:rtl}.sp-search .sp-search-container .sp-search-input::-moz-placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-search-input::placeholder{color:#aaa;font-weight:500}.sp-search .sp-search-container .sp-icon-loading{opacity:.5}.sp-search .sp-search-container .bi-search,.sp-search .sp-search-container .bi-x-lg{transition:all .3s ease;color:#aaa}.sp-search .sp-search-container .bi-search.sp-search-in-focus,.sp-search .sp-search-container .bi-x-lg.sp-search-in-focus{color:#000}.sp-search .sp-search-container .bi-x-lg{cursor:pointer}.sp-search .sp-search-container .bi-x-lg:hover{color:#000}.sp-search .sp-search-control{display:inline-flex;transition:all .3s ease;padding:0 .5rem}.sp-list{min-width:300px;max-height:320px;overflow-y:auto;padding:0 .3rem;transition:all .3s ease}.sp-list .sp-list-item{display:flex;align-items:center;justify-content:space-between;line-height:1.43;font-size:14px;text-align:left;overflow:hidden;white-space:nowrap;margin:0;padding:.25rem .5rem;color:#666;cursor:pointer;transition:all .2s ease}.sp-list .sp-list-item.sp-over{background-color:#f6f8fa!important;color:#000!important;border-radius:.4rem}.sp-list .sp-list-item.sp-selected{color:#ccc;cursor:default}.sp-list .sp-list-item.sp-rtl{direction:rtl;text-align:right}.sp-table{padding:0 .3rem;min-width:300px;max-height:320px;overflow-y:auto}.sp-table table{width:100%;border-spacing:0}.sp-table table td,.sp-table table th{font-size:14px;line-height:1.43;border:0!important}.sp-table table th{padding:0 8px 5px;font-weight:600;font-size:15px;color:#333;text-align:left}.sp-table table td{padding:.25rem .5rem;color:#666;cursor:pointer}.sp-table table tbody tr.sp-over td{background-color:#f6f8fa!important;color:#000!important}.sp-table table tbody tr.sp-over td:first-child{border-top-left-radius:.4rem;border-bottom-left-radius:.4rem}.sp-table table tbody tr.sp-over td:last-child{border-top-right-radius:.4rem;border-bottom-right-radius:.4rem}.sp-table table tbody tr.sp-selected td{color:#ccc;cursor:default}.sp-table table thead .sp-rtl th,.sp-table table tbody .sp-rtl td{direction:rtl;text-align:right}.sp-pagination{display:flex;justify-content:space-between;align-items:center;padding:5px 10px}.sp-pagination .sp-page-info{line-height:1;color:#0000004d;font-size:14px;font-weight:600;margin-right:10px}.sp-pagination .sp-page-control{padding:0;margin:0}.sp-pagination .sp-page-control .sp-page-button{display:inline-flex}.sp-pagination .sp-page-control .sp-page-button a{display:inline-flex;padding:7px;font-size:14px;color:#333;text-decoration:none;cursor:pointer;line-height:1;background:transparent;transition:all .3s ease;border-radius:.6rem}.sp-pagination .sp-page-control .sp-page-button a:hover{color:#000;background-color:#f1f1f1}.sp-pagination .sp-page-control .sp-page-button.sp-page-disabled a{color:#ddd;font-weight:400;background-color:transparent;cursor:default}.sp-trigger-container{display:flex;align-items:center;justify-content:space-between;flex-grow:1;padding:6px 12px 6px 6px;background-color:#fff;border:1px solid #ddd;border-radius:.3rem;font-size:14px;line-height:1.42857143;outline:0!important;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s ease}.sp-trigger-container:hover{border:1px solid #aaa}.sp-trigger-container.sp-disabled,.sp-trigger-container.sp-disabled:hover{border:1px solid #eee;background-color:#eee;cursor:default;color:#aaa}.sp-trigger-container.sp-disabled .sp-select,.sp-trigger-container.sp-disabled .sp-chips,.sp-trigger-container.sp-disabled:hover .sp-select,.sp-trigger-container.sp-disabled:hover .sp-chips{color:#aaa;background-color:#eee}.sp-trigger-container.sp-disabled .sp-chip,.sp-trigger-container.sp-disabled:hover .sp-chip{background-color:#d6d6d6!important;color:#666!important}.sp-trigger-container .bi-chevron-down{transition:transform .2s ease;margin-left:.5rem;font-size:1rem;color:#666}.sp-trigger-container.sp-opened{box-shadow:3px 2px 6px #0000004d;border:1px solid #666;color:#000}.sp-trigger-container.sp-opened .bi-chevron-down{transform:rotate(180deg)}.sp-trigger-container.sp-opened:hover{border:1px solid #666}.sp-trigger-container .sp-placeholder{color:#aaa;padding:5px;line-height:1}.sp-trigger-container .sp-trigger{display:flex;align-items:center;flex-wrap:wrap}.sp-trigger-container .sp-trigger.sp-select{justify-content:space-between;flex-grow:1}.sp-trigger-container .sp-trigger.sp-select .sp-select-content{padding:5px;line-height:1.143;color:#666}.sp-trigger-container .sp-trigger.sp-chips{gap:.5rem}.sp-trigger-container .sp-trigger .sp-chip{border-radius:.3rem;background-color:#eee;color:#666;display:inline-flex;align-items:center;padding:5px 7px;transition:all .2s ease}.sp-trigger-container .sp-trigger .sp-chip--body{display:inline-flex;line-height:1.143;margin-right:5px}.sp-trigger-container .sp-trigger .sp-chip:hover{background-color:#f7f7f7;color:#000}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { ref as y, computed as R, watch as X, onMounted as pe, provide as E, nextTick as q, inject as z, defineComponent as W, reactive as de, onBeforeUnmount as Ve, onUnmounted as je, withDirectives as Ue, h as i, vShow as Ge, Teleport as Ze, Transition as ve, openBlock as M, createElementBlock as k, createElementVNode as L, mergeProps as le, toRef as me } from "vue";
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
], We = [ae, oe, ie, re, we, ye], j = -1, be = 0, Ke = 0, V = 1, Xe = 10, Se = "first", te = "previous", ne = "next", Ce = "last", I = "page_num", $ = "page_count", A = "row_count", T = "max_select_limit", D = "selected_count", [
  Ye,
  Y,
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
  rt,
  st
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
  [Ye]: {
    // Chinese
    next: "下一页",
    prev: "上一页",
    first: "首页",
    last: "尾页",
    pageInfo: `第 ${I}/${$} 页(共 ${A} 条记录)`,
    notFound: "无查询结果",
    loadingData: "Loading data...",
    clear: "清除内容",
    clearAll: "清除全部已选择项目",
    fetchData: "Refresh data",
    maxSelected: `最多只能选择 ${T} 个项目`,
    placeholder: "请选择一个项目",
    selectedCount: `已选择 ${D} 个项目`,
    search: "搜索"
  },
  [Y]: {
    // English
    next: "Next page",
    prev: "Previous page",
    first: "First page",
    last: "Last page",
    pageInfo: `Page ${I} of ${$} (${A} records)`,
    notFound: "Data not found",
    loadingData: "Loading data...",
    clear: "Clear content",
    clearAll: "Clear all selected",
    fetchData: "Refresh data",
    maxSelected: `You can only select up to ${T} items`,
    placeholder: "Select an option",
    selectedCount: `${D} items selected`,
    search: "Search"
  },
  [qe]: {
    // Japanese
    next: "次へ",
    prev: "前へ",
    first: "最初のページへ",
    last: "最後のページへ",
    pageInfo: `${I}/${$} 件 (全 ${A} つ記録)`,
    notFound: "(0 件)",
    loadingData: "Loading data...",
    clear: "コンテンツをクリアする",
    clearAll: "選択した項目をクリアする",
    fetchData: "Refresh data",
    maxSelected: `最多で ${T} のプロジェクトを選ぶことしかできません`,
    placeholder: "プロジェクトを選択してください",
    selectedCount: `${D} アイテムが選択されました`,
    search: "検索"
  },
  [Je]: {
    // Arabic
    next: "التالي",
    prev: "السابق",
    first: "الاول",
    last: "الأخير",
    pageInfo: `صفحة ${I}/${$} (${A} سجلات)`,
    notFound: "لا يوجد نتائج",
    loadingData: "Loading data...",
    clear: "محو المحتوى",
    clearAll: "إلغاء التحديد",
    fetchData: "Refresh data",
    maxSelected: `يمكنك فقط تحديد (${T}) عناصر`,
    placeholder: "رجاء حدد الخيار",
    selectedCount: `تم تحديد (${D}) عناصر`,
    search: "يبحث"
  },
  [Qe]: {
    // Spanish
    next: "Siguiente página",
    prev: "Pagina anterior",
    first: "Primera página",
    last: "última página",
    pageInfo: `Página ${I}/${$} (${A} registros)`,
    notFound: "no encontrado",
    loadingData: "Loading data...",
    clear: "Borrar contenido",
    clearAll: "Borrar todo lo seleccionado",
    fetchData: "Refresh data",
    maxSelected: `Solo puedes seleccionar hasta ${T} items`,
    placeholder: "Seleccione una opción",
    selectedCount: `${D} items Seleccionado`,
    search: "Buscar"
  },
  [et]: {
    // German
    next: "Nächste Seite",
    prev: "Vorherige Seite",
    first: "Erste Seite",
    last: "Letzte Seite",
    pageInfo: `Seite ${I}/${$} (${A} Einträge)`,
    notFound: "Nicht gefunden",
    loadingData: "Loading data...",
    clear: "Inhalt löschen",
    clearAll: "Alle ausgewählten löschen",
    fetchData: "Refresh data",
    maxSelected: `Sie können nur bis zu ${T} Elemente auswählen`,
    placeholder: "Wählen",
    selectedCount: `${D} Elemente ausgewählt`,
    search: "Suchen"
  },
  [tt]: {
    // Romanian
    next: "Pagina următoare",
    prev: "Pagina precedentă",
    first: "Prima pagină",
    last: "Ultima pagină",
    pageInfo: `Pagina ${I}/${$} (${A} înregistrări)`,
    notFound: "nu a fost găsit",
    loadingData: "Loading data...",
    clear: "Șterge conținutul",
    clearAll: "Șterge înregistrările selectate",
    fetchData: "Refresh data",
    maxSelected: `Poți selecta până la ${T} înregistrări`,
    placeholder: "Selectează o înregistrare",
    selectedCount: `${D} înregistrări selectate`,
    search: "Căutare"
  },
  [nt]: {
    // Russian
    next: "Вперед",
    prev: "Назад",
    first: "В начало",
    last: "В конец",
    pageInfo: `${I} - ${$} / ${A}`,
    notFound: "Нет данных",
    loadingData: "Загрузка данных...",
    clear: "Очистить",
    clearAll: "Очистить выбранное",
    fetchData: "Обновить данные",
    maxSelected: `Нельзя выбрать более ${T} значений`,
    placeholder: "Выберите значение",
    selectedCount: `${D} - выбрано`,
    search: "Поиск"
  },
  [lt]: {
    // French
    next: "Page suivante",
    prev: "Page précédente",
    first: "Première page",
    last: "Dernière page",
    pageInfo: `Page ${I}/${$} (${A} lignes)`,
    notFound: "Aucun résultat",
    loadingData: "Loading data...",
    clear: "Effacer",
    clearAll: "Tout déselectionner",
    fetchData: "Refresh data",
    maxSelected: `Vous ne pouvez pas sélectionner plus de ${T} élements`,
    placeholder: "Sélectionnez une option",
    selectedCount: `${D} éléments sélectionnés`,
    search: "Recherche"
  },
  [at]: {
    // Portuguese-Brazil
    next: "Página seguinte",
    prev: "Página anterior",
    first: "Primera página",
    last: "Última página",
    pageInfo: `Página ${I}/${$} (${A} registros)`,
    notFound: "não encontrado",
    loadingData: "Loading data...",
    clear: "Apagar conteúdo",
    clearAll: "Apagar itens selecionados",
    fetchData: "Refresh data",
    maxSelected: `Máximo permitido ${T} itens`,
    placeholder: "Selecione uma opção",
    selectedCount: `${D} itens selecionados`,
    search: "Procurar"
  },
  [ot]: {
    // Polish
    next: "Następna",
    prev: "Poprzednia",
    first: "Pierwsza",
    last: "Ostatnia",
    pageInfo: `Strona ${I}/${$} (${A} rekordów)`,
    notFound: "Nic nie znaleziono",
    loadingData: "Loading data...",
    clear: "Wyczyść",
    clearAll: "Usuń wszystkie zaznaczone",
    fetchData: "Refresh data",
    maxSelected: `Możesz zaznaczyć maksymalnie ${T}`,
    placeholder: "Wybierz z listy",
    selectedCount: `${D} zaznaczonych`,
    search: "Szukaj"
  },
  [it]: {
    // Dutch
    next: "Volgende pagina",
    prev: "Vorige pagina",
    first: "Eerste pagina",
    last: "Laatste pagina",
    pageInfo: `Pagina ${I}/${$} (${A} items)`,
    notFound: "Niet gevonden",
    loadingData: "Loading data...",
    clear: "Wissen",
    clearAll: "Wis selectie",
    fetchData: "Refresh data",
    maxSelected: `Je kunt maar ${T} items selecteren`,
    placeholder: "Kies een optie",
    selectedCount: `${D} Items geselecteerd`,
    search: "Zoekopdracht"
  },
  [rt]: {
    // Traditional Chinese
    next: "下一頁",
    prev: "上一頁",
    first: "首頁",
    last: "尾頁",
    pageInfo: `第 ${I}/${$} 頁(共 ${A} 條記錄)`,
    notFound: "無查詢結果",
    loadingData: "Loading data...",
    clear: "清除內容",
    clearAll: "清除全部已選擇項目",
    fetchData: "Refresh data",
    maxSelected: `最多只能選擇 ${T} 個項目`,
    placeholder: "請選擇一個項目",
    selectedCount: `已選擇 ${D} 個項目`,
    search: "搜索"
  },
  [st]: {
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
function ct(e) {
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
function ut(e) {
  return [oe, re].includes(e);
}
function dt(e) {
  return [ae, ie].includes(e);
}
function gt(e) {
  return we === e;
}
function ft(e) {
  return ye === e;
}
function ht(e) {
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
function pt(e, t) {
  const n = y([]), s = R(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.length;
  });
  function o(r) {
    var g;
    return (g = n.value) != null && g.length ? n.value.some((h) => h[e.keyProp] === r[e.keyProp]) : !1;
  }
  function a(r) {
    var g;
    return !((g = n.value) != null && g.length) || typeof r > "u" ? !1 : n.value.some((h) => h[e.keyProp] === r);
  }
  function u(r) {
    var g, h, v;
    if (e.multiple) {
      const b = new Set(r);
      return b.size !== ((g = n.value) == null ? void 0 : g.length) ? !1 : Array.from(b).every(a);
    } else if ((h = n.value) != null && h.length)
      return (r == null ? void 0 : r.toString()) === ((v = n.value[0][e.keyProp]) == null ? void 0 : v.toString());
  }
  function d(r) {
    if (!o(r)) {
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
        t("update:modelValue", (r == null ? void 0 : r.map((v) => v[e.keyProp])) || null);
      else {
        const v = ((h = r == null ? void 0 : r[0]) == null ? void 0 : h[e.keyProp]) ?? null;
        v ? t("update:modelValue", e.convertValueToString ? v.toString() : v) : t("update:modelValue", null);
      }
    t("selection-change", r);
  }
  return {
    selected: n,
    selectedCount: s,
    isItemSelected: o,
    selectItem: d,
    removeItem: l,
    removeAll: c,
    setSelected: f,
    isKeysEqualToSelected: u
  };
}
function vt(e, t, n) {
  const s = y(j);
  function o(l) {
    s.value = l;
  }
  function a() {
    s.value !== j && s.value !== 0 && (s.value -= 1);
  }
  function u() {
    _e(n.value) || s.value !== n.value.length - 1 && (s.value += 1);
  }
  function d(l) {
    if (l === oe)
      return a();
    if (l === re)
      return u();
  }
  function c() {
    return s.value !== j;
  }
  return {
    highlightIndex: s,
    setItemHighlight: o,
    highlightNavigation: d,
    isSomeRowHighlight: c
  };
}
function ge(e) {
  return We.includes(e);
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
    pageSize: { type: Number, default: Xe },
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
function mt(e, t) {
  const n = ct(e.language), {
    selected: s,
    selectedCount: o,
    isItemSelected: a,
    removeAll: u,
    removeItem: d,
    selectItem: c,
    setSelected: l,
    isKeysEqualToSelected: f
  } = pt(e, t), r = y(""), g = y(""), h = y(V), v = y(0), b = y([]), p = y(!1), O = se(), B = () => _e(b.value), S = (C) => {
    if (!C || !Object.keys(C).length)
      return "";
    switch (typeof e.labelProp) {
      case "string":
        return C[e.labelProp];
      case "function":
        return e.labelProp(C);
    }
  }, x = (C) => {
    var P;
    if (e.max === be)
      return c(C);
    if (e.multiple && ((P = s.value) == null ? void 0 : P.length) === e.max) {
      g.value = n.maxSelected.replace(T, e.max), O(() => {
        g.value = "";
      });
      return;
    }
    c(C);
  }, m = () => {
    p.value = !0;
    const C = {
      search: r.value,
      pageNumber: h.value,
      pageSize: e.pagination ? e.pageSize : Ke
    };
    t("fetch-data", C, (P, F) => {
      Array.isArray(P) && (b.value = P, v.value = typeof F == "number" ? F : 0, q(() => {
        p.value = !1;
      }));
    });
  }, _ = () => {
    const { modelValue: C } = e;
    let P = C;
    if (e.multiple)
      if (Array.isArray(P)) {
        if (!P.length) {
          l(null, !1), p.value = !1;
          return;
        }
      } else if (P)
        typeof P == "string" ? P = P.split(",") : P = [C];
      else
        return;
    else if (!P) {
      l(null, !1), p.value = !1;
      return;
    }
    f(P) || (p.value = !0, t("fetch-selected-data", P, (F) => {
      p.value = !1, !(e.multiple && !Array.isArray(F)) && l(F, C.length !== F.length);
    }));
  };
  return X(r, () => {
    h.value = V, m();
  }), X(() => e.modelValue, _), pe(() => {
    e.fetchDataOnMount && m(), _();
  }), E("keyProp", e.keyProp), E("rtl", e.rtl), E("pageSize", e.pageSize), E("debounce", e.debounce), E("multiple", e.multiple), E("loading", p), E("language", n), E("renderCell", S), E("isItemSelected", a), E("selectedCount", o), E("removeAll", u), E("removeItem", d), E("fetchData", m), {
    selected: s,
    query: r,
    message: g,
    currentPage: h,
    totalRows: v,
    lang: n,
    list: b,
    loading: p,
    renderCell: S,
    isDataEmpty: B,
    isItemSelected: a,
    selectedCount: o,
    selectItem: x,
    removeAll: u,
    removeItem: d,
    fetchData: m
  };
}
function H() {
  return {
    keyProp: z("keyProp"),
    renderCell: z("renderCell"),
    rtl: z("rtl"),
    isItemSelected: z("isItemSelected"),
    pageSize: z("pageSize"),
    language: z("language"),
    debounce: z("debounce"),
    multiple: z("multiple"),
    loading: z("loading"),
    selectedCount: z("selectedCount"),
    removeAll: z("removeAll"),
    removeItem: z("removeItem"),
    fetchData: z("fetchData")
  };
}
function wt(e, t, n, s) {
  const o = R(() => Math.ceil(n.value / e.pageSize)), a = R(() => t.value === V), u = R(() => t.value === o.value), d = R(
    () => s.pageInfo.replace(I, t.value).replace($, o.value).replace(A, n.value)
  ), c = function(r) {
    switch (r) {
      case Se:
        return V;
      case te:
        return t.value - 1;
      case ne:
        return t.value + 1;
      case Ce:
        return o.value;
    }
  }, l = function(r) {
    let g = c(r);
    typeof g > "u" || (g < V && (g = V), g > o.value && (g = o.value), g !== t.value && (t.value = g));
  };
  return {
    paginationInfo: d,
    isFirstPage: a,
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
function yt() {
  const e = window.pageXOffset !== void 0, t = (document.compatMode || "") === "CSS1Compat";
  return {
    x: e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop
  };
}
function bt(e) {
  return window.getComputedStyle(e).display === "none";
}
function fe(e) {
  if (bt(e)) {
    e.style.visibility = "hidden", e.style.display = "inline-block";
    const t = e.getBoundingClientRect();
    return e.style.visibility = "visible", e.style.display = "none", t;
  }
  return e.getBoundingClientRect();
}
const De = "click", St = "hover", Ct = "contextmenu", he = 150, ee = 5;
function _t(e, t) {
  return typeof e.animated == "string" ? e.animated : e.animated ? t.value ? "animate-up" : "animate-down" : "";
}
function ce(e) {
  return {
    isTriggerByClick: e.trigger === De,
    isTriggerByHover: e.trigger === St,
    isTriggerByContextmenu: e.trigger === Ct
  };
}
function Pt(e, t, n, s) {
  const { isTriggerByContextmenu: o } = ce(e), a = window.pageYOffset, u = document.documentElement.clientHeight, d = o ? t : n.top + a;
  let c = o ? t : n.top + n.height + ee + a, l = !1, f = !1, r = !1;
  return c + s.height > a + u && (l = !0), d - ee - s.height < a && (f = !0), !f && l && (c = d - ee - s.height, r = !0), { dropUp: r, top: c };
}
function xt(e, t, n, s) {
  const { isTriggerByContextmenu: o } = ce(e), a = window.pageXOffset, u = document.documentElement.clientWidth, d = o ? 0 : n.width, c = o ? t : n.left + a, l = c + d / 2 - s.width / 2, f = c + d - s.width;
  switch (e.align) {
    case "left":
      return c + s.width > a + u ? f : c;
    case "center":
      return l + s.width > a + u ? f : f < a ? c : l;
    case "right":
      return f < a ? c : f;
  }
}
function It(e) {
  const t = yt();
  return {
    x: e.pageX || e.clientX + t.x,
    y: e.pageY || e.clientY + t.y
  };
}
function $t(e) {
  return [
    "v-dropdown-container",
    e.border || "v-dropdown-no-border",
    e.customContainerClass && e.customContainerClass
  ];
}
function At(e) {
  return [
    "v-dropdown-trigger",
    e.fullWidth && "v-dropdown-trigger--full-width",
    e.customTriggerClass && e.customTriggerClass
  ];
}
const Tt = W({
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
    const o = y(!1), a = de({ top: "", left: "", width: "" }), u = de({ x: null, y: null }), d = y(!1), c = y(null), l = y(null), f = y(null), {
      isTriggerByClick: r,
      isTriggerByHover: g,
      isTriggerByContextmenu: h
    } = ce(e);
    X(o, (S) => n("visible-change", S));
    function v() {
      e.disabled || ("trigger" in t && O(), g ? (window.clearTimeout(c.value), c.value = window.setTimeout(() => {
        o.value = !0;
      }, he)) : o.value = !0);
    }
    function b(S = !1) {
      e.disabled || !e.toggle && !S || (g ? (window.clearTimeout(c.value), c.value = window.setTimeout(() => {
        o.value = !1;
      }, he)) : o.value = !1);
    }
    function p() {
      o.value ? b() : v();
    }
    function O() {
      const S = fe(l.value), x = fe(f.value), m = Pt(e, u.y, S, x), _ = xt(e, u.x, S, x);
      d.value = m.dropUp, a.top = `${m.top}px`, a.left = `${_}px`;
    }
    function B(S) {
      if (!o.value)
        return;
      const x = S.composedPath().some((m) => m === l.value);
      x && !e.toggle && !h || (!x || x && h) && b(!0);
    }
    return pe(() => {
      typeof e.width < "u" && (a.width = e.width + "px"), document.body.addEventListener("mousedown", B);
    }), Ve(() => {
      document.body.removeEventListener("mousedown", B), f.value && f.value.remove();
    }), je(() => {
      l.value && l.value.remove();
    }), s({
      display: v,
      close: b,
      toggleVisible: p,
      adjust: O,
      container: f,
      visible: o
    }), () => {
      const S = [];
      "trigger" in t && S.push(t.trigger({
        visible: o,
        disabled: e.disabled
      }));
      const x = {
        class: $t(e),
        style: a,
        ref: f,
        // do not close dropdown container when
        // do some operations in that
        onMousedown: (C) => C.stopPropagation()
      };
      g && (x.onMouseenter = v, x.onMouseleave = b);
      const m = Ue(
        i("div", x, t.default && t.default()),
        [[Ge, o.value]]
      );
      S.push(
        i(Ze, { to: "body" }, [
          i(ve, { name: _t(e, d) }, () => [m])
        ])
      );
      const _ = {
        class: At(e),
        ref: l
      };
      return g ? (_.onMouseenter = v, _.onMouseleave = b) : r ? _.onClick = (C) => {
        e.manual || (C.stopPropagation(), p());
      } : h && (_.onContextmenu = (C) => {
        if (e.manual)
          return;
        C.stopPropagation(), C.preventDefault();
        const P = It(C);
        u.x = P.x, u.y = P.y, v();
      }), i("div", _, S);
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
    })), o = R(() => ({
      "font-size": e.fontSize,
      "background-color": e.disabled ? "transparent" : n.value
    }));
    return () => {
      const a = {
        class: ["sp-circle-btn", s.value],
        style: o.value,
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
}, N = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Dt = {}, Lt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-search",
  viewBox: "0 0 16 16"
};
function Ot(e, t) {
  return M(), k("svg", Lt, [...t[0] || (t[0] = [
    L("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }, null, -1)
  ])]);
}
const Et = /* @__PURE__ */ N(Dt, [["render", Ot]]), zt = {}, Bt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "sp-icon bi bi-x-lg",
  viewBox: "0 0 16 16"
};
function Mt(e, t) {
  return M(), k("svg", Bt, [...t[0] || (t[0] = [
    L("path", { d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" }, null, -1)
  ])]);
}
const J = /* @__PURE__ */ N(zt, [["render", Mt]]), kt = {}, Nt = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  class: "sp-icon sp-icon-loading"
};
function Rt(e, t) {
  return M(), k("svg", Nt, [...t[0] || (t[0] = [
    L("path", {
      d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
      opacity: ".25"
    }, null, -1),
    L("path", { d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" }, [
      L("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        dur: "0.75s",
        values: "0 12 12;360 12 12",
        repeatCount: "indefinite"
      })
    ], -1)
  ])]);
}
const Le = /* @__PURE__ */ N(kt, [["render", Rt]]), Ft = {
  props: {
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue", "keyboard-operation"],
  setup(e, { emit: t, expose: n }) {
    const { rtl: s, debounce: o, loading: a, language: u, selectedCount: d, multiple: c } = H(), l = y(!1), f = y(), r = se(o), g = R(() => !c || !d.value ? u.search : u.selectedCount.replace(D, d.value)), h = () => ht(f.value);
    return n({ focus: h }), () => {
      const b = [
        R(() => a.value ? i(Le) : i(Et, { class: l.value ? "sp-search-in-focus" : "" })).value,
        i("input", {
          type: "text",
          autocomplete: "off",
          value: e.modelValue.trim(),
          class: {
            "sp-search-input": !0,
            "sp-search-input--rtl": s
          },
          disabled: a.value,
          placeholder: g.value,
          onKeydown: (p) => {
            p.stopPropagation(), ge(p.keyCode) && t("keyboard-operation", p.keyCode);
          },
          onFocus: () => {
            l.value = !0;
          },
          onBlur: () => {
            l.value = !1;
          },
          onInput: (p) => {
            ge(p.keyCode) || r(() => {
              t("update:modelValue", p.target.value.trim());
            });
          },
          ref: f
        })
      ];
      if (e.modelValue.trim()) {
        const p = {
          onClick() {
            t("update:modelValue", ""), h();
          }
        };
        b.push(
          i(G, p, () => i(J))
        );
      }
      return i("div", { class: "sp-search-container" }, b);
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
  return M(), k("svg", Vt, [...t[0] || (t[0] = [
    L("path", { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" }, null, -1)
  ])]);
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
  return M(), k("svg", Zt, [...t[0] || (t[0] = [
    L("path", { d: "M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z" }, null, -1)
  ])]);
}
const Kt = /* @__PURE__ */ N(Gt, [["render", Wt]]), Xt = {
  setup() {
    const { selectedCount: e, removeAll: t, language: n, fetchData: s } = H();
    return () => {
      const o = [], a = {
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
      return o.push(
        i(G, u, () => i(Kt))
      ), o.push(
        i(G, a, () => i(Ut))
      ), i("div", { class: "sp-search-control" }, o);
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
    const { renderCell: n, rtl: s, removeItem: o } = H();
    return () => {
      const a = n(e.data), u = {
        class: {
          "sp-list-item": !0,
          "sp-over": !e.isSelected && e.isHover,
          "sp-selected": e.isSelected,
          "sp-rtl": s
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, d = [
        i("div", { title: a, innerHTML: a })
      ];
      if (e.isSelected) {
        const c = {
          onClick: (l) => {
            l.stopPropagation(), o(e.data);
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
      const o = e.list.map((u, d) => i(Yt, {
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
      }, o);
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
    const { row: n } = e, { rtl: s } = H(), o = (a) => {
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
          "sp-rtl": s
        },
        onClick: () => t("select"),
        onMouseenter: () => t("hover")
      }, u = e.columns.map((d, c) => {
        const l = {
          key: c,
          innerHTML: o(d)
        };
        return Object.hasOwn(d, "width") && (l.style = { width: Pe(d.width) }), i("td", l);
      });
      return i("tr", a, u);
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
    const { isItemSelected: n, rtl: s, keyProp: o } = H();
    return () => {
      const a = e.columns.map((c) => i("th", c.title)), u = e.list.map((c, l) => i(Jt, {
        key: c[o],
        row: c,
        columns: e.columns,
        isHover: e.highlightIndex === l,
        isSelected: n(c),
        onSelect: () => t("select", c),
        onHover: () => t("set-highlight", l)
      })), d = i("table", [
        // table thead
        i("thead", i("tr", { class: { "sp-rtl": s } }, a)),
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
  return M(), k("svg", tn, [...t[0] || (t[0] = [
    L("path", {
      "fill-rule": "evenodd",
      d: "M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
    }, null, -1)
  ])]);
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
  return M(), k("svg", on, [...t[0] || (t[0] = [
    L("path", {
      "fill-rule": "evenodd",
      d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    }, null, -1)
  ])]);
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
  return M(), k("svg", un, [...t[0] || (t[0] = [
    L("path", {
      "fill-rule": "evenodd",
      d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ])]);
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
  return M(), k("svg", hn, [...t[0] || (t[0] = [
    L("path", {
      "fill-rule": "evenodd",
      d: "M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
    }, null, -1)
  ])]);
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
      const o = [
        { action: Se, title: n.first, disabled: e.isFirstPage, icon: ln },
        { action: te, title: n.prev, disabled: e.isFirstPage, icon: sn },
        { action: ne, title: n.next, disabled: e.isLastPage, icon: gn },
        { action: Ce, title: n.last, disabled: e.isLastPage, icon: vn }
      ].map((a) => {
        const u = {
          href: "#",
          onClick: (c) => {
            c.preventDefault(), !a.disabled && t("page-change", a.action);
          }
        }, d = [{ "sp-page-disabled": a.disabled }, "sp-page-button"];
        return i("div", { class: d, title: a.title }, [
          i("a", u, i(a.icon))
        ]);
      });
      return i("div", { class: "sp-pagination" }, [
        i("div", { class: "sp-page-info" }, e.pageInfo),
        i("div", { class: "sp-page-control" }, o)
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
  return M(), k("svg", yn, [...t[0] || (t[0] = [
    L("path", { d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, null, -1),
    L("path", { d: "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)
  ])]);
}
const Sn = /* @__PURE__ */ N(wn, [["render", bn]]);
function Oe(e, t) {
  const {
    lang: n,
    selected: s,
    query: o,
    message: a,
    currentPage: u,
    totalRows: d,
    list: c,
    loading: l,
    isDataEmpty: f,
    selectItem: r,
    fetchData: g,
    renderCell: h,
    removeAll: v,
    removeItem: b
  } = mt(e, t), {
    highlightIndex: p,
    setItemHighlight: O,
    highlightNavigation: B,
    isSomeRowHighlight: S
  } = vt(e, t, c), {
    paginationInfo: x,
    isFirstPage: m,
    isLastPage: _,
    switchPage: C,
    pagingNavigation: P
  } = wt(e, u, d, n), F = se(e.debounce), Z = y();
  X(l, (w) => {
    w || q(() => Z.value && Z.value.focus());
  });
  const ke = () => {
    Z.value && Z.value.focus();
  }, Ne = () => i("div", { class: "sp-search" }, [
    i(Ft, {
      ref: Z,
      modelValue: o.value,
      "onUpdate:modelValue"(w) {
        o.value = w;
      },
      onKeyboardOperation: (w) => {
        if (ut(w))
          return B(w);
        if (dt(w)) {
          P(w), F(g);
          return;
        }
        if (gt(w))
          return S() ? r(c.value[p.value]) : void 0;
        ft(w) && t("close-dropdown");
      }
    }),
    i(Xt)
  ]), Re = () => {
    const w = [];
    return a.value && w.push(
      i("div", { class: "sp-message" }, [
        i(Sn),
        i("div", { class: "sp-message-body", innerHTML: a.value })
      ])
    ), i(ve, {
      name: "sp-message-slide",
      appear: !0,
      onEnter: () => t("adjust-dropdown"),
      onAfterLeave: () => t("adjust-dropdown")
    }, () => w);
  }, Fe = () => f() ? ue() : i(qt, {
    list: c.value,
    highlightIndex: p.value,
    onSelect: (w) => r(w),
    onSetHighlight: (w) => O(w)
  }), He = () => f() ? ue() : i(Qt, {
    list: c.value,
    columns: e.columns,
    highlightIndex: p.value,
    onSelect: (w) => r(w),
    onSetHighlight: (w) => O(w)
  }), ue = () => i("div", { class: "sp-result-message" }, l.value ? "" : n.notFound);
  return {
    selected: s,
    query: o,
    message: a,
    currentPage: u,
    lang: n,
    loading: l,
    renderCell: h,
    removeAll: v,
    removeItem: b,
    setSearchFocus: ke,
    renderSearch: Ne,
    renderMessage: Re,
    renderList: Fe,
    renderTable: He,
    renderPagination: () => {
      if (e.pagination)
        return i(mn, {
          pageInfo: x.value,
          isFirstPage: m.value,
          isLastPage: _.value,
          onPageChange(w) {
            C(w), g();
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
function Ee(e) {
  const t = y(!1), n = y();
  function s() {
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
      onVisibleChange(f) {
        t.value = f;
      }
    };
    return i(Tt, le(l, u), {
      trigger: () => d,
      default: () => c
    });
  }
  return {
    visible: t,
    dropdownRef: n,
    renderDropdown: a,
    closeDropdown: s,
    adjustDropdown: o
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
      lang: o,
      loading: a,
      renderCell: u,
      removeAll: d,
      removeItem: c,
      setSearchFocus: l,
      renderSearch: f,
      renderMessage: r,
      renderList: g,
      renderPagination: h,
      renderContainer: v,
      fetchData: b
    } = Oe(e, t);
    return n({
      selected: s,
      lang: o,
      loading: a,
      renderCell: u,
      removeAll: d,
      removeItem: c,
      setSearchFocus: l,
      fetchData: b
    }), () => v([
      f(),
      r(),
      g(),
      h()
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
  return M(), k("svg", Pn, [...t[0] || (t[0] = [
    L("path", {
      "fill-rule": "evenodd",
      d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    }, null, -1)
  ])]);
}
const In = /* @__PURE__ */ N(_n, [["render", xn]]), ze = {
  props: {
    dropdownVisible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    lang: { type: Object, default: void 0 }
  },
  setup(e, { slots: t }) {
    return () => {
      var u;
      const n = [];
      Object.hasOwn(t, "default") ? n.push(t.default()) : n.push(
        i("div", { class: "sp-placeholder" }, e.placeholder || ((u = e.lang) == null ? void 0 : u.placeholder))
      );
      const s = {
        style: {
          display: e.loading ? "block" : "none",
          fill: "#9f9f9f",
          "margin-right": "-5px",
          "margin-left": "5px"
        }
      }, o = {
        style: {
          display: e.loading ? "none" : "inherit"
        }
      };
      n.push(i(In, o)), n.push(i(Le, s));
      const a = {
        class: {
          "sp-trigger-container": !0,
          "sp-opened": e.dropdownVisible,
          "sp-disabled": e.disabled
        }
      };
      return i("div", a, n);
    };
  }
}, Be = {
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
      var o, a;
      if (!((o = n.value) != null && o.length))
        return;
      const s = [
        i("div", { class: "sp-select-content", innerHTML: e.renderCell(n.value[0]) })
      ];
      if ((a = n.value) != null && a.length && !e.disabled) {
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
}, Me = {
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
      const s = n.value.map((o, a) => {
        const u = [
          i("div", { class: "sp-chip--body", innerHTML: e.renderCell(o) })
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
            i(G, d, () => i(J))
          );
        }
        return i("div", { class: "sp-chip", key: a }, u);
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
      visible: o,
      adjustDropdown: a,
      closeDropdown: u,
      renderDropdown: d
    } = Ee(e), c = y([]), l = y();
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
      var p, O, B, S, x;
      const f = {
        selected: c,
        disabled: e.disabled,
        lang: (p = l == null ? void 0 : l.value) == null ? void 0 : p.lang,
        renderCell: (O = l == null ? void 0 : l.value) == null ? void 0 : O.renderCell,
        onRemove(m) {
          U(n) ? l.value.removeItem(m) : l.value.removeAll();
        }
      }, r = (B = c.value) != null && B.length ? () => i(U(n) ? Me : Be, f) : void 0, g = {
        dropdownVisible: o.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (S = l == null ? void 0 : l.value) == null ? void 0 : S.lang,
        loading: (x = l == null ? void 0 : l.value) == null ? void 0 : x.loading
      }, h = i(ze, g, r);
      return d(
        {
          onVisibleChange: (m) => {
            t("visible-change", m), m && q(() => {
              l.value.fetchData(), l.value.setSearchFocus();
            });
          }
        },
        h,
        i(Cn, le({
          ref: l,
          onAdjustDropdown: a,
          onCloseDropdown: u,
          onSelectionChange(m) {
            c.value = m, !U(n) && (m != null && m.length) && u();
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
      lang: o,
      loading: a,
      removeAll: u,
      removeItem: d,
      setSearchFocus: c,
      renderCell: l,
      renderSearch: f,
      renderMessage: r,
      renderTable: g,
      renderPagination: h,
      renderContainer: v,
      fetchData: b
    } = Oe(e, t);
    return n({
      selected: s,
      lang: o,
      loading: a,
      renderCell: l,
      removeAll: u,
      removeItem: d,
      setSearchFocus: c,
      fetchData: b
    }), () => v([
      f(),
      r(),
      g(),
      h()
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
      visible: o,
      adjustDropdown: a,
      closeDropdown: u,
      renderDropdown: d
    } = Ee(e), c = y([]), l = y(), f = y(!1);
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
      var O, B, S, x, m;
      const r = {
        selected: c,
        disabled: e.disabled,
        lang: (O = l == null ? void 0 : l.value) == null ? void 0 : O.lang,
        renderCell: (B = l == null ? void 0 : l.value) == null ? void 0 : B.renderCell,
        onRemove(_) {
          U(n) ? l.value.removeItem(_) : l.value.removeAll();
        }
      }, g = (S = c.value) != null && S.length ? () => i(U(n) ? Me : Be, r) : void 0, h = {
        dropdownVisible: o.value,
        disabled: e.disabled,
        placeholder: n.placeholder,
        lang: (x = l == null ? void 0 : l.value) == null ? void 0 : x.lang,
        loading: (m = l == null ? void 0 : l.value) == null ? void 0 : m.loading
      }, v = i(ze, h, g);
      return d(
        {
          onVisibleChange: (_) => {
            t("visible-change", _), _ && q(() => {
              f.value || (f.value = !0, l.value.fetchData()), l.value.setSearchFocus();
            });
          }
        },
        v,
        i($n, le({
          ref: l,
          onAdjustDropdown: a,
          onCloseDropdown: u,
          onSelectionChange(_) {
            c.value = _, !U(n) && (_ != null && _.length) && u();
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
