<template>
  <div class="todolist-panel flex-vertical flex-start align-center">
    <template v-for="(card, index) in cards" :key="index">
      <div class="wrapper">
	<todolist-card v-model:isdone="card.isdone" :text="card.text" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
 import {Vue, Prop, Options} from 'vue-property-decorator'
 import TodoListCard from '@/components/TodoListCard.vue'


 @Options ({
   components: {
     'todolist-card': TodoListCard
   }
 })
 export default class TodoListPanel extends Vue {
   @Prop ()
   cards: Array<todoListCard> = [
     {isdone: false, text: 'not done'},
     {isdone: false, text: 'not done'},
     {isdone: true,  text: 'done'},
   ]
 }
</script>

<style scoped>
 .todolist-panel {
   border: 1px solid blue;
   width: 250px;
   height: 900px;

   padding-top: 25px;
 }
 
 .flex-vertical.flex-start {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
 }

 .align-center {
   align-items: center;
 }

 .wrapper {
   margin-bottom: 5px;
 }
</style>