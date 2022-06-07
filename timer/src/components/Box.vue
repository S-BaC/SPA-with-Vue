<template>
    <div @click="count"></div>
</template>

<script>
export default {
    methods: {
        count(){
            this.$emit('countUp');
        }
    }
}
</script>

<style scoped>
    div{
        height:30px;
        width:30px;
        margin:auto;
        margin-top: 30px;
        padding:10px;
        background-color: teal;
    }
</style>