<template>
  <div class="todolist-board flex-horizon flex-start">
    <template v-for="panel in panels" :key="panel">
      <div class="wrapper">
	<todolist-panel :cards="panel.cards"/>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
 import {Vue, Options, Prop} from 'vue-property-decorator'
 import TodoListPanel from '@/components/TodoListPanel.vue'

 @Options ({
   components: {
     'todolist-panel': TodoListPanel
   }
 })
 export default class TodoListBoard extends Vue {
   @Prop ()
   panels: Array<todoListPanel> = [
     {
       cards: [
	 {isdone: false, text: 'hello'},
	 {isdone: false, text: 'world'},
	 {isdone: false, text: 'fuck'},
	 {isdone: true,  text: 'you'},
       ]
     },

     {
       cards: [
	 {isdone: false, text: 'hello'},
	 {isdone: false, text: 'world'},
	 {isdone: false, text: 'fuck'},
	 {isdone: true,  text: 'you'},
       ]
     },

     {
       cards: [
	 {isdone: false, text: 'hello'},
	 {isdone: false, text: 'world'},
	 {isdone: false, text: 'fuck'},
	 {isdone: true,  text: 'you'},
       ]
     },

   ]
 }
</script>

<style scoped>
 .flex-horizon.flex-start {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
 }

 .wrapper {
   margin: 0 3px 0 3px;
 }
</style>