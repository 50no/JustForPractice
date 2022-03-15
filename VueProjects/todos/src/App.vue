<template>
  <div>
    <h1>App 根组件</h1>
    <TodoInput @add="onAddNewTask"></TodoInput>
    <TodoList :todolist="todolist" class="mt-2"></TodoList>
    <TodoButton></TodoButton>
  </div>
</template>

<script>
import TodoList from "./components/todo-list/TodoList.vue"
import TodoInput from './components/todo-input/TodoInput.vue'
import TodoButton from './components/todo-button/TodoButton.vue'

export default {
  name:'MyApp',
  data(){
   return {
     todolist: [
       {id: 1, task: "go to work at 7:00", done: false},
       {id: 2, task: "have lunch at 11:30", done: false},
       {id: 3, task: "go home at 5:00", done: true}
     ],
     nextId: 4
   }
  },
  components: {
    "TodoList": TodoList,
    TodoInput,
    TodoButton
  },
  methods: {
    onAddNewTask(taskName) {
      this.todolist.push({
      id: this.nextId,
      task: taskName,
      done: false
      })
      this.nextId += 1
    }
  }
}
</script>

<style lang="less" scoped>

</style>
 