<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs">
      <router-link :to="{name: 'jobDetails', params: {id: job.id}}">
          <h2>{{job.title}}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'jobs',
    data(){
        return {
            jobs: [
                {title: 'doctor', id:1, description: 'cool one'},
                {title: 'engineer', id:2, description: 'nice'},
                {title: 'dentist', id:3, description: 'a great profession'}
            ]
        }
    }
}
</script>

<style>

</style>