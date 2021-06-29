export default {
  render (h) {
    const child = []
    child.push(this.buildCaller(h))
    child.push(this.buildHeader(h))
    child.push(this.buildSearch(h))
    child.push(this.buildMessage(h))
    child.push(this.buildContent(h))
    child.push(this.buildPagination(h))

    return h('v-dropdown', {
      props: {
        'full-width': true,
        width: this.width,
        isError: this.isError,
        disabled: this.disabled,
        isLoading: this.isLoadingData,
        border: false,
        align: this.rtl ? 'right' : 'left'
      },
      class: 'v-selectpage',
      on: {
        show: this.showChange
      },
      ref: 'drop'
    }, child)
  },
  methods: {
    /**
     * select panel
     */
    buildCaller (h) {
      const input = []
      const openIndicator = [h('path', {attrs: {d: 'M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z'}})]
      const inputAttrs = {
        props: {
          disabled: this.disabled,
          placeholder: this.placeholderString,
          picked: this.picked
        },
        on: {
          remove: this.remove
        }
      }
      input.push(h(this.multiple ? 'sp-tag' : 'sp-select', inputAttrs))
      input.push(h('div', {
        class: {
          'sp-button': true,
          open: this.show
        }
      }, [
          h('svg', { class: {'open-indicator': true}, attrs: {xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 10, role: 'presentation'}}, openIndicator)
      ]))
      return h('template', { slot: 'caller'}, [
        h('div', { class: this.inputClasses }, input)
      ])
    },
    /**
     * header bar
     */
    buildHeader (h) {
      const header = []
      header.push(h('span', { domProps: { innerHTML: this.headerTitle }, class: 'sp-header-title' }))
      const genBtn = (title, btnClass, iconClass, event) => {
        return h('button', {
          attrs: {
            type: 'button',
            title: title
          },
          class: btnClass,
          on: { click: () => { event() } }
        }, [
          h('i', { class: `sp-iconfont ${iconClass}` })
        ])
      }

      if (this.multiple) {
        header.push(genBtn(this.i18n.select_all, 'sp-select-all-btn', 'sp-icon-select-all', () => { this.pickPage() }))
        header.push(genBtn(this.i18n.unselect_all, 'sp-remove-all-btn', 'sp-icon-unselect-all', () => { this.pickPage(false) }))
      }
      header.push(genBtn(this.i18n.clear_all, 'sp-clear-all-btn', 'sp-icon-clear', this.remove))
      header.push(genBtn(this.i18n.close_btn, 'sp-close-btn', 'sp-icon-close', this.close))

      return h('div', { class: 'sp-header' }, header)
    },
    /**
     * search bar
     */
    buildSearch (h) {
      return h('div', { class: 'sp-search' }, [
        h('input', {
          attrs: {
            type: 'text',
            autocomplete: 'off',
            value: this.search.trim()
          },
          class: {
            'sp-search-input': true,
            'sp-search-input--rtl': this.rtl
          },
          on: {
            keyup: e => this.processKey(e),
            keydown: e => {
              e.stopPropagation()
              this.processControl(e)
            },
            input: e => {
              this.search = e.target.value
            }
          },
          ref: 'search'
        })
      ])
    },
    buildMessage (h) {
      const child = []
      if (this.message) {
        child.push(h('div', { class: 'sp-message' }, [
          h('i', { class: 'sp-iconfont sp-icon-warning' }),
          h('span', { domProps: { innerHTML: this.message } })
        ]))
      }

      return h('transition', {
        props: {
          name: 'sp-message-slide',
          appear: true
        },
        on: {
          enter: () => this.adjust(),
          'after-leave': () => this.adjust()
        }
      }, child)
    },
    buildContent (h) {
      const child = []
      if (this.list.length) {
        const contentAttrs = {
          // directives: [{name: 'show', value: this.list.length}],
          props: {
            list: this.list,
            picked: this.picked
          },
          model: {
            value: this.highlight,
            callback: value => {
              this.highlight = value
            }
          },
          on: {
            select: row => this.selectItem(row)
          }
        }
        if (this.tbColumns && this.tbColumns.length) {
          // multiple columns(table) mode
          contentAttrs.props['tb-columns'] = this.tbColumns
          child.push(h('sp-table', contentAttrs))
        } else {
          // single column(list) mode
          child.push(h('sp-list', contentAttrs))
        }
      } else {
        // no result message
        child.push(h('div', { class: 'sp-result-message' }, this.i18n.not_found))
      }
      return h('div', { class: 'sp-result-area' }, child)
    },
    /**
     * pagination bar
     */
    buildPagination (h) {
      if (this.pagination) {
        return h('sp-page', {
          props: {
            'total-row': this.totalRows,
            'page-size': this.pageSize,
            'from': this.from || 0,
            'to': this.to || 0,
          },
          model: {
            value: this.pageNumber,
            callback: value => {
              this.pageNumber = value
            }
          },
          ref: 'page'
        })
      }
    }
  }
}
