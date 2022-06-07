<template>
  <form v-on:submit.prevent="submit">
      <label for="email">Email</label>
      <input type="email" name = "email" v-model="email">
      <label for="password">password</label>
      <input type="password" name = "password" v-model="password">
      <p>{{pwdErr}}</p>
      <label>Role</label>
      <select v-model="role">
          <option value="dev">Developer</option>
          <option value="des">Designer</option>
      </select>
      <br>

      <div class="terms">
          <input type="checkbox" v-model="terms">
          <label for="">Accept terms</label>
      </div>

      <div>
          <input type="checkbox" v-model="opt" value="car">
          <label for="">Car</label>
          <input type="checkbox" v-model="opt" value="airplane">
          <label for="">Airplane</label>
          <input type="checkbox" v-model="opt" value="boat">
          <label for="">Boat</label>
      </div>

    <div class="skills">
          <input type="text" v-model="tempSkill" @keyup='addSkill'>
          <label for="">Skills</label>
    </div>

    <div class="submit">
        <button> Submit </button>
    </div>

  </form>
  <p>{{email}} {{password}} {{terms}}</p>
  <p v-if="opt">{{opt}}</p>
  <p v-for="skill in skills" :key="skill" @click="remove">{{skill}}</p>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            role: '',
            terms: true,
            opt: [],
            skills: [],
            tempSkill: '',
            pwdErr: ''

        }
    },
    methods: {
        addSkill(e){
            if(e.key === "Enter" && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)) 
                    this.skills.push(this.tempSkill);
                this.tempSkill = '';
                
            }
        },
        remove(e){
            let index = this.skills.indexOf(e.target.textContent);
            this.skills.splice(index, 1);
            // this.skills.filter(skill => skill !== e.target.textContent);
        },
        submit(){
            if(this.password.length < 5){
                this.pwdErr = 'Not enough'
            } else {
                this.pwdErr = '';
                console.log('form submitted');
            }
        }
    }
}
</script>

<style scoped>
    form{
        padding:10px;
        background-color: #eee;
    }
    label, input, .terms{
        padding: 5px;
    }
</style>