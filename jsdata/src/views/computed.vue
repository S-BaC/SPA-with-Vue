<template>
  <h1>Computed Properties</h1>
  <input type="text" v-model="search">
  <p>{{search}}</p>
  <div v-for="name in names">
    {{name}}
  </div>
  <div v-for="name in matchingNames">
    {{name}}
  </div>
</template>

<script>
import {ref, computed, watch, watchEffect} from 'vue'

export default {
    name: 'Computed',
    setup(){
        const name = computed(()=>{
            return 'shaun';
        })

        const search = ref(null);

        const names = ref(['mario', 'luigi', 'morgan']);

        const stopWatching = watch(search, () => {
            console.log('watch function run');
        });     // When evoked, the function stops.

        const stopEffect = watchEffect(()=>{
            console.log('watch effect starts', search.value);
        });     // When evoked, the function stops.

        const matchingNames = computed (() => {
            return names.value.filter(name => name.includes(search.value));
        })

        return { names, search, matchingNames }
    }
}
</script>

<style>

</style>