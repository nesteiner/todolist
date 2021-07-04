<template>
  <div class="todolist-card flex-horizon border-radius box-shadow">
    <span class="checkbox center padding">
      <input type="checkbox" :checked="isdone" @click="click"/>
    </span>

    <div class="content padding flex">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
 import {Vue} from 'vue-class-component'
 import {Prop, Model} from 'vue-property-decorator'

 export default class TodoListCard extends Vue {
   @Prop(String)
   text = 'hello world'

   @Prop()
   isdone = false

   click(): void {
     this.$emit('update:isdone', !this.isdone)
   }

 }
</script>

<style scoped>
 .todolist-card {
   width: 200px;
 }

 .center {
   display: flex;
   justify-content: center;
   align-items: center;
 }

 .flex, .flex-horizon {
   display: flex;
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