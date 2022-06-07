<template>
    <div>
        <p>Reaction time: {{speed}} ms.</p>
        <p class="grade">{{grade}}</p>
    </div>
</template>

<script>
export default {
    props: ['countNum', 'timeGiven'],
    data(){
        return{
            gradeArr: ['Incredible', 'Super Fast', 'Snail Pace']
        }
    },
    computed: {
        speed: function(){
            return this.countNum === 0? 0 : parseInt(this.timeGiven/this.countNum);
        },
        grade: function(){
            let index = Math.floor((this.timeGiven/this.countNum)/200);
            if(index > 2) index = 2;
            return this.gradeArr[index];
        }
    }
}
</script>

<style scoped>
    div{
        text-align: center;
        color:teal;
        font-weight: 600;
        margin-top: 100px;
    }
    .grade{
        font-size: 2rem;
    }
</style>