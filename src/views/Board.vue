<template>
  <div class="board flex">
    <todolist-board />
  </div>
</template>

<script lang="ts">
 import {Vue, Options} from 'vue-property-decorator'

 import TodoListBoard from '@/components/TodoListBoard.vue'

 @Options ({
   components: {
     'todolist-board': TodoListBoard
   }
 })
 export default class Board extends Vue {

 }
</script> 