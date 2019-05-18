<template>
  <div class="slide_comp">
    <div class="padded">
      <ul>
        <li>
          <b> Software Systems Framework (ROS) </b>
        </li>
        <li>
          <b> Overview of Selected Arenas </b>  - highlighting reusable components
          <ul>
            <li> Rockafly </li>
            <li> Rotating Wind Tunnel </li>
            <li> FlyWheel </li>
            <li> Walking Arenas: Path Integration & Puzzleboxes </li>
          </ul>
        </li>
        </br>
        <li>
          <b> Reusable hardware/software components </b>
          <ul>
            <li> Autostep: motion control </li>
            <li> Stimulus LED control   </li>
            <li> LED Backlighting  </li>
            <li> Angular data: EM3242 non-contact sensor </li>
            <li> Fictrac (Richard Moore): redis pub/sub, ROS package, foam balls  </li>
            <li> and more ... </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'overview',
  extends: BaseSlideComp,
  data() {
    return {}
  }, 
  methods: {
    onSpaceBar() {
      console.log('spacebar (overview)');
    },
  },
}

</script>

<style scoped>

ul {
  line-height: 1.5;
}

li {
  display: list;
  text-align: left;
}

.padded {
  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 10%;
}


</style>

