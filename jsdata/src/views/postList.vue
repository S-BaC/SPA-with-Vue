<template>
  <div v-for="post in posts">
    {{ post.body }}
    {{ snippet }}
  </div>
  <h1>
    {{data[0]}}
  </h1>
</template>

<script>
    import { computed, onMounted, onUnmounted, ref } from 'vue'

export default {
    props: ['posts'],
    setup(props){

        // Fetching Data
        const data = ref([])
        const load = async function(){
            let jsonData = await fetch('http://localhost:3000/jobs')
            if(jsonData.ok){
                data.value = await jsonData.json();
            }
        }
        load();

        // Lifecycle Hooks
        // onMounted(() => {
        //     console.log('Mounted');
        // })
        // onUnmounted(() => {
        //     console.log('unMounted');
        // })

        // Props
        const snippet = computed(()=>{
            return props.posts[0].body.substring(0,2);
        })
        return { snippet, data }
    }

}
</script>

<style>

</style> 