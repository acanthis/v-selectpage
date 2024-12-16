import { h } from 'vue'

import '../styles/trigger.sass'

import IconChevronDown from '../icons/IconChevronDown.vue'
import IconLoading from '../icons/IconLoading.vue'

export default {
  props: {
    dropdownVisible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    lang: { type: Object, default: undefined }
  },
  setup (props, { slots }) {
    return () => {
      const items = []

      if (Object.hasOwn(slots, 'default')) {
        items.push(slots.default())
      } else {
        // slot default content(placeholder)
        items.push(
          h('div', { class: 'sp-placeholder' }, props.placeholder || props.lang?.placeholder)
        )
      }

      const loadingOptions = {
        style: {
          'display': props.loading ? 'block' : 'none',
          'fill': '#9f9f9f',
          'margin-right': '-5px',
          'margin-left': '5px',
        }
      }

      const loadingChevronOptions = {
        style: {
          'display': props.loading ? 'none' : 'inherit',
        }
      }

      items.push(h(IconChevronDown, loadingChevronOptions))
      items.push(h(IconLoading, loadingOptions))

      const btnOption = {
        class: {
          'sp-trigger-container': true,
          'sp-opened': props.dropdownVisible,
          'sp-disabled': props.disabled
        }
      }

      return h('div', btnOption, items)
    }
  }
}
