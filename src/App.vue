<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/images/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="(item, index ) in events" :key="index">
      <h1>{{ item.event }}</h1>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: () => ({
    events: []
  }),
  async created() {
    try {
      const { data } = await axios.get(`http://localhost:8080/dito-questions/events.json`)
      this.events = data.events
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
