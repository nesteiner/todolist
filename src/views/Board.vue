<template>
  <div class="board flex">
    <todolist-board />
  </div>
</template>

<script lang="ts">
 import {Vue, Options, Watch} from 'vue-property-decorator'

 import TodoListPanel from '@/components/TodoListPanel.vue'
 import TodoListBoard from '@/components/TodoListBoard.vue'

 @Options ({
   components: {
     'todolist-board': TodoListBoard,
     'todolist-panel': TodoListPanel,
   }
 })
 export default class Board extends Vue {
   checked = true
}
</script> 