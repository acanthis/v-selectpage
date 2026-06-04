import { defineComponent } from 'vue'

import { selectPageProps, selectPageEmits } from './core/data'
import { useRender } from './core/render'

export default defineComponent({
  name: 'SelectPageListCore',
  props: {
    ...selectPageProps()
  },
  emits: selectPageEmits(),
  setup (props, { emit, expose }) {
    const {
      selected,
      lang,
      loading,
      renderCell,
      removeAll,
      removeItem,
      setSearchFocus,
      renderSearch,
      renderMessage,
      renderList,
      renderPagination,
      renderContainer,
      fetchData
    } = useRender(props, emit)

    expose({
      selected,
      lang,
      loading,
      renderCell,
      removeAll,
      removeItem,
      setSearchFocus,
      fetchData
    })

    return () => renderContainer([
      renderSearch(),
      renderMessage(),
      renderList(),
      renderPagination()
    ])
  }
})
