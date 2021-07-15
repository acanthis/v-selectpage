export default {
  name: 'SelectPageSelect',
  props: {
    picked: Array,
    disabled: Boolean,
    placeholder: String,
    isLoading: Boolean,
  },
  data () {
    return {
      loadingWrapperClass: 'sp-input-loading',
      loadingClass: 'v-select-container-loading',
    }
  },
  inject: ['i18n', 'renderCell'],
  render (h) {
    const children = []
    let result = null
    if (this.picked && this.picked.length) {
      result = h('span', { domProps: { innerHTML: this.renderCell(this.picked[0]) } })
    } else {
      result = h('span', { class: 'sp-placeholder' }, this.placeholder)
    }

    children.push(h('div', {
      class: {
        'sp-loading': true,
        [this.loadingClass]: this.isLoading,
      },
      attrs: {
        title: this.i18n.loading
      },
    }))

    children.push(h('div', {
      class: {
        'sp-base sp-input': true,
        [this.loadingWrapperClass]: this.isLoading,
      },
      ref: 'select'
    }, [result]))
    // clear button
    if (this.picked && this.picked.length && !this.disabled && !this.isLoading) {
      children.push(h('div', {
        class: 'sp-clear',
        attrs: {
          title: this.i18n.clear
        },
        on: {
          click: e => {
            e.stopPropagation()
            this.remove()
          }
        }
      }, [
        h('svg', { attrs: {width: 10,  height: 10, xmlns: 'http://www.w3.org/2000/svg'}}, [
          h('path', { attrs: {d: 'M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z'}})
        ]),
      ])
    )}
    return h('div', children)
  },
  methods: {
    remove () {
      this.$emit('remove')
    }
  }
}
