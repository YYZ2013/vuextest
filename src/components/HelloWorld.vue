<template>
  <div class="hello">
    <h2>从state中直接获取到的值：{{ this.$store.state.value }}</h2>
    <h2>从Getters中获取计算后的值：{{ this.$store.getters.getStateValue }}</h2>

    <p>value的值：{{ this.$store.state.value }}</p>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
    <br/>

    父组件Vuex:{{ num }} <br/>
    <button @click="add1">num+1</button>
    <p>-----------------------------------------------------------</p>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState(['num'])
  },
  methods:{
    addFun(){
      var n = 10
      this.$store.commit("add",n)
    },
    reductionFun(){
      this.$store.commit("reduction")
    },
    ...mapMutations(['add1'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
