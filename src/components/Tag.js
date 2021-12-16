export default {
  name: 'SelectPageTag',
  props: {
    picked: Array,
    disabled: Boolean,
    placeholder: String,
    isLoading: Boolean,
  },
  data () {
    return {
      loadingWrapperClass: 'sp-input-loading',
    }
  },
  inject: ['i18n', 'renderCell'],
  render (h) {
    const tags = []
    if (this.picked.length) {
      this.picked.forEach((val, index) => {
        const tag = []
        // tag content
        tag.push(h('span', {
          domProps: {
            innerHTML: this.renderCell(val)
          }
        }))
        // close button in the tag
        if (!this.disabled) {
          tag.push(h('div', {
            class: 'tag-close',
            attrs: {
              title: this.i18n.clear
            },
            on: {
              click: e => {
                e.stopPropagation()
                this.remove(index)
              }
            }
          }, [
              h('svg', { attrs: {width: 10,  height: 10, xmlns: 'http://www.w3.org/2000/svg'}}, [
                  h('path', { attrs: {d: 'M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z'}})
              ]),
          ])
        )}
        tags.push(h('span', { class: 'sp-selected-tag', key: index }, tag))
      })
    } else {
      // display placeholder message when there is no tag
      tags.push(h('span', { class: 'sp-placeholder' }, this.placeholder))
    }

    return h('div', {
      class: {
        'sp-base sp-inputs': true,
        [this.loadingWrapperClass]: this.isLoading,
      },
    }, tags)
  },
  methods: {
    remove (index) {
      this.$emit('remove', index)
    }
  }
}
