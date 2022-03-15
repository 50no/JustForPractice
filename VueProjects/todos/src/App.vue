<template>
  <div>
    <h1>App 根组件</h1>
    <TodoList :todolist="todolist"></TodoList>
  </div>
</template>

<script>
import TodoList from "./components/todo-list/TodoList.vue"

export default {
  name:'MyApp',
  data(){
   return {
     todolist: [
       {id: 1, task: "go to work at 7:00", done: false},
       {id: 2, task: "have lunch at 11:30", done: false},
       {id: 3, task: "go home at 5:00", done: true}
     ]
   }
  },
  components: {
    "TodoList": TodoList
  }
}
</script>

<style lang="less" scoped>

</style>
 