<template>
  <div class="todolist-card flex-horizon border-radius box-shadow">
    <span class="checkbox flex-horizon center padding">
      <input type="checkbox"
	     :value="isdone"
	     @click="toggle">
    </span>

    <div class="content padding flex-horizon">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
 import {Vue} from 'vue-class-component'
 import {Prop} from 'vue-property-decorator'

 export default class TodoListCard extends Vue {
   @Prop (String)
   text = 'hello world'
   
   @Prop (Boolean)
   isdone = false
   
   toggle (): void {
     this.isdone = !this.isdone
   }
 }
</script>

<style scoped>
 .todolist-card {
   width: 200px;
 }

 .flex-horizon {
   display: flex;
   flex-direction: row;
 }

 .center {
   justify-content: center;
   align-items: center;
 }
 
 .box-shadow {
   box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.5);
 }

 .border-radius {
   border-radius: 4px;
 }

 span.padding {
   padding: 10px 10px 10px 10px;
 }

 div.padding {
   padding: 10px 0 10px 0;
 }
</style>