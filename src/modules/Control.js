import { h } from 'vue'

import { useInject } from '../core/data'

import CircleButton from '../components/CircleButton'
import IconTrash from '../icons/IconTrash.vue'
import IconRefresh from '@/icons/IconRefresh.vue';

export default {
  setup () {
    const { selectedCount, removeAll, language, fetchData } = useInject()

    return () => {
      const items = []

      const optionForTrash = {
        title: language.clearAll,
        size: 'large',
        // bgColor: '#f1f1f1',
        // hoverBgColor: '#ddd',
        disabled: !selectedCount.value,
        onClick: removeAll
      }
      const optionForRefresh = {
        title: language.fetchData,
        size: 'large',
        onClick: fetchData
      }

      items.push(
          h(CircleButton, optionForRefresh, () => h(IconRefresh))
      )

      items.push(
        h(CircleButton, optionForTrash, () => h(IconTrash))
      )

      return h('div', { class: 'sp-search-control' }, items)
    }
  }
}
