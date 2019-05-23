<template>
  <div class="slide_comp">
    </br>
    <h1>
      Intrumentation & Software Core 
    </h1>
    <h1>
      Activities
    </h1>
    <canvas name="webgl_fluid_sim"> </canvas>


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

