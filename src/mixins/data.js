import lang from '../language'

export default {
  props: {
    /**
     * specify key to make list item selected, the must be match 'keyField' option value
     *
     * example:
     * single mode: '123'
     * multiple mode: '123, 124, 125'
     */
    value: [Number, String, Array],
    data: {
      type: [Array, String],
      required: true
    },
    /**
     * server side querying params
     */
    params: Object,
    /**
     * server side result format
     * @param resp [object] server side request result
     * @return [object] the formatted data
     */
    resultFormat: Function,
    title: {
      type: String,
      default: 'SelectPage'
    },
    placeholder: {
      type: String,
      default: ''
    },
    selectedData:  {
      type: Array,
      default: []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      default: 'ru'
    },
    /**
     * specify field to be key field, the value will return by v-model
     */
    keyField: {
      type: String,
      default: 'id'
    },
    /**
     * specify field to display
     */
    isSearchable: {
      type: Boolean,
      default: true,
    },
    showField: {
      type: [String, Function],
      default: 'name'
    },
    /**
     * table mode to show data, format sample:
     * title: [string] - the title content text,
     * data: [string|function] - specify column name to load data,
     * [
     *      {title: 'full name', data: function(row){ return row.lastName + ' ' + row.firstName; }},
     *      {title: 'age', data: 'age'},
     *      {title: 'birthday', data: function(row){ return someformat(row.birthday); }}
     * ]
     */
    tbColumns: Array,
    /**
     * sort config, use space to split field name and sort order
     * example: 'name desc'
     */
    sort: String,
    searchField: String,
    pageSize: {
      type: Number,
      default: 10
    },
    /**
     * max selected item limit, set 0 to unlimited
     */
    maxSelectLimit: {
      type: Number,
      default: 0
    },
    /**
     * pagination bar
     */
    pagination: {
      type: Boolean,
      default: true
    },
    /**
     * make row text and drop down container align to right
     */
    rtl: {
      type: Boolean,
      default: false
    },
    /**
     * the width of drop down menu
     */
    width: Number,
    widthByContent:  {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearSearchWhenClose: {
      type: Boolean,
      default: false
    },
    validationSearchContent: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      show: false,
      search: '',
      lastSearch: null,
      searchColumn: null,
      i18n: lang[this.language] || lang['ru'],
      message: '',
      highlight: -1,

      list: [],
      sortedList: null,
      picked: [],
      loadingData: false,
      validationSearchError: null,

      pageNumber: 1,
      totalRows: 0,
      pFrom: 1,
      pTo: 0,
    }
  },
  computed: {
    isLoadingData() {
      return this.loadingData
    },
    headerTitle () {
      const headerStr = this.i18n.items_selected
      const replace = val => headerStr.replace('selected_count', `<b>${val}</b>`)
      if (this.picked.length) {
        return this.multiple ? replace(this.picked.length) : this.getResults()
      } else {
        return this.title
      }
    },
    placeholderString () {
      return this.placeholder || this.i18n.placeholder
    },
    inputClasses () {
      return { 'sp-input-container': true, 'sp-open': this.show, 'sp-disabled': this.disabled }
    },
    keys () {
      if (!this.multiple) {
        if (this.picked[0]) {
          return this.picked[0][this.keyField] || null;
        }

         return null;
      }

      const pickedKeys = this.picked.map(value => value[this.keyField]);

      if (Array.isArray(pickedKeys) && pickedKeys.length === 0) {
        return null;
      }

      return pickedKeys;
    }
  },
  watch: {
    value (val) {
      // console.log('value:',val)
      // console.log('keys:',this.keys)
      if (val !== this.keys) {
        // console.log('value watch!')
        this.initSelection()
      }
    },
    data () {
      this.sortList()
      this.populate()
      if (this.picked.length) this.picked = []
      else this.initSelection()
    },
    picked (val) {
      if (this.message && this.maxSelectLimit && val.length < this.maxSelectLimit) this.message = ''
      this.$nextTick(() => {
        if (this.show) {
          this.adjust()
          this.inputFocus()
        } else {
          if (this.multiple && !val.length) {
            //this.$refs.drop.visible()
          }
        }
      })
      this.$emit('input', this.keys)
      this.$emit('values', (!this.multiple && 1 === val.length) ? this.picked.slice()[0] : this.picked.slice())
    },
    pageNumber (val, oldVal) {
      if (val !== oldVal) this.populate()
    },
    disabled (val) {
      if (val && this.show) this.close()
    }
  }
}
