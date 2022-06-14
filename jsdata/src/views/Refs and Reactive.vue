<template>
  <h1>Refs</h1>
  <p>{{one.name}} is {{one.age}} years old.</p>
  <button @click="updateAge">Update Age</button>

    <h1>Reactive</h1>
    <p>{{two.name}} is {{two.age}} years old.</p>
    <button @click="updateName">Update Name</button>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    // For reactive, '.value' is not required. However, it cannot be used with primitive values.

    name: 'Reactive',
    setup() {
        const one = ref({name: 'morgan', age: 30});
        const two = reactive({name: 'luigi', age: 10});

        const updateAge = () => {
            one.value.age += 20;
        }

        const updateName = () => {
            two.name = 'mario';
        }

        return { one, updateAge, two, updateName }
    }
}
</script>

<style>

</style>