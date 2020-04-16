<template>
  <div>
    HelloWorld的子组件 <br/>
    <button @click="minus">num-1</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default{
    computed:{
      ...mapState(['num'])
    },
    methods:{
      ...mapMutations(['minus'])
    }
  }
</script>

<style>
</style>
