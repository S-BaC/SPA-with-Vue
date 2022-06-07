<template>
  <h1>Reaction Timer</h1>
  <button class="playBtn" @click="startGame">Play</button>
  <Box v-if="reactionBox" @countUp="count"/>
  <Panel v-if="resultPanel" :countNum = "countNum" :timeGiven = "timeGiven"/>
</template>

<script>
import Box from './components/Box.vue'
import Panel from './components/Panel.vue'

export default {
  name: 'App',
  data(){
    return {
      reactionBox: false,
      resultPanel: false,
      countNum: 0,
      timeGiven: 2000
    }
  },

  methods: {
    startGame(){
      this.countNum = 0;
      this.resultPanel = false;
      setTimeout(() => {
        this.reactionBox = true;
        setTimeout(() => {
          this.reactionBox = false;
          this.resultPanel = true;
        }, this.timeGiven);
      }, Math.random()*1000);
    },
    count(){
      this.countNum++;
    }
  },
  components: {
      Box, Panel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.playBtn{
  border-radius: 5px;
  background-color: teal;
  color:white;
}
</style>
