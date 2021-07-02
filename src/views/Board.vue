<template>
  <div class="board flex">
    <todolist-card text="fuck you" />
  </div>
</template>

<script lang="ts">
 import {Vue} from 'vue-class-component'
 import TodoListCard from '@/components/TodoListCard.vue'
 import {Options} from 'vue-property-decorator'

 @Options ({
   components: {
     'todolist-card': TodoListCard
   }
 })
 export default class Board extends Vue {

 }
</script> 