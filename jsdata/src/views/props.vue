<template>
  <h1>Props</h1>
  <post-list :posts = "posts" />
</template>

<script>
// import postList from '../components/postList.vue';
import { ref } from 'vue'
import postList from './postList.vue'

export default {
    name: 'props',
    components: { postList },
    setup() {
        const posts = ref ([
            { title: 'blog 1', body: '1 thing'},
            { title: 'blog 2', body: '2 or more things here'}
        ])

        return { posts }
    }
}
</script>

<style>

</style>