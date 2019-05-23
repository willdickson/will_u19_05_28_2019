<template>
  <div class="slide_comp">
    <h1> Overview </h1>
    <div class="padded">
      <ul>
        <li>
          <b> ROS software framework/middleware </b>
          <ul>
            <li> .bag files  </li>
            <li> .bag database </li>
          </ul>
        </li>
        </br>
        <li>
          <b> Selected Arenas (ROS Packages) </b>  - highlighting reusable components
          <ul>
            <li> Rockafly </li>
            <li> Rotating Wind Tunnel </li>
            <li> FlyWheel </li>
            <li> Walking Arenas: Path Integration & Puzzleboxes </li>
          </ul>
        </li>
        </br>
        <li>
          <b> Selected reusable hardware/software components </b>
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
  padding-top: 2%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 10%;
}


</style>

