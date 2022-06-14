<template>
  <div v-for="job in jobs">
    <h2>{{job.age}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[]
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message));
    }
}
</script>

<style>

</style>