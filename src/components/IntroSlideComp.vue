<template>
  <div class="slide_comp">
    </br>
    <h1>
      Intrumentation & Software Core Activities 
    </h1>
    <img width="60%"src="../assets/ball_machining.gif"/>
  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'intro',
  extends: BaseSlideComp,
  data() {
    return {
      message: 'hello',
    }
  }, 
  methods: {
    onSpaceBar() {
      console.log('spacebar (intro)');
    },
  },
}

</script>

