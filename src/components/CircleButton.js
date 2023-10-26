import { ref, computed, h } from 'vue'

export default {
  name: 'SelectPageCircleButton',
  props: {
    size: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },
  setup (props, { slots }) {
    const backgroundColor = ref('')

    const classes = computed(() => ({
      'sp-circle-btn--disabled': props.disabled,
      'sp-circle-btn--small': props.size === 'small',
      'sp-circle-btn--large': props.size === 'large'
    }))
    const styles = computed(() => ({
      'font-size': props.fontSize,
    }))

    return () => {
      const option = {
        class: ['sp-circle-btn', classes.value],
        style: styles.value,
      }
      return h('div', option, slots.default && slots.default())
    }
  }
}
