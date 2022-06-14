<template>
  <h1>Hello World</h1>
  <p ref="p">{{ name }} and {{ title }} and {{age}}</p>
  <button @click="handleClick">Click This</button>
  <input type="text" v-model="name">
  <button @click="age++"> Age up</button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup(){

    //  Javascript code.
    //  'this' keyword unavailable.
    console.log("hello world");

    const p = ref(null);

    let name = ref('morgan');
    let title = ref('web dev');
    let age = ref(10);


    const handleClick = function () {
      console.log('clicked');
      // console.log(p.value);
      name.value ='mario';
    }

    return { name, title, age, handleClick, p }
  }
}
</script>

<style>

</style>