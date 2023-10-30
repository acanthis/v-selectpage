import { ref, h, defineComponent, mergeProps, nextTick } from 'vue'

import {dropdownProps} from './core/data';
import {useDropdown} from './core/render';
import { isMultiple } from './core/helper'

import SelectPageListCore from './SelectPageListCore'
import Trigger from './modules/Trigger'
import FormElementSelect from './modules/FormElementSelect'
import FormElementChips from './modules/FormElementChips'

export default defineComponent({
  name: 'SelectPageList',
  inheritAttrs: false,
  props: {
    ...dropdownProps()
  },
  emits: ['visible-change'],
  setup (props, { emit, expose, attrs }) {
    const {
      visible,
      adjustDropdown,
      closeDropdown,
      renderDropdown
    } = useDropdown(props)

    const removeAll = () => {
      selectedItems.value = null
      core.value.removeAll()
    }

    expose({
      removeAll,
    })

    const selectedItems = ref([])
    const core = ref(null)

    return () => {
      const elementOption = {
        selected: selectedItems,
        disabled: props.disabled,
        lang: core?.value?.lang,
        renderCell: core?.value?.renderCell,
        onRemove (row) {
          if (isMultiple(attrs)) {
            core.value.removeItem(row)
          } else {
            core.value.removeAll()
          }
        }
      }
      const selectedContents = selectedItems.value?.length
        ? () => h(isMultiple(attrs) ? FormElementChips : FormElementSelect, elementOption)
        : undefined

      const triggerOption = {
        dropdownVisible: visible.value,
        disabled: props.disabled,
        placeholder: attrs.placeholder,
        isMultiple: isMultiple(attrs),
        lang: core?.value?.lang
      }
      const dropdownTrigger = h(Trigger, triggerOption, selectedContents)

      const coreOption = {
        ref: core,
        onAdjustDropdown: adjustDropdown,
        onCloseDropdown: closeDropdown,
        onSelectionChange (data) {
          selectedItems.value = data
          // close dropdown when item selected in single selection mode
          if (!isMultiple(attrs) && data && data.length) {
            closeDropdown()
          }
        }
      }

      const dropdownOption = {
        onVisibleChange: val => {
          emit('visible-change', val)
          if (!val) return

          nextTick(() => {
            core.value.setSearchFocus()
          })
        }
      }
      return renderDropdown(
        dropdownOption,
        dropdownTrigger,
        h(SelectPageListCore, mergeProps(coreOption, attrs))
      )
    }
  }
})
