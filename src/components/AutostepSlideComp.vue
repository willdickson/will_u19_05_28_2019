<template>
  <div class="slide_comp">

    <h1>
      Example Component: Autostep
    </h1>
    <div class="padded row">
      <div class="lef">
      <b> High-level motion control  </b>
      <ul>
        <li> open and closed loop - pre-planned trajectories, realtime motion tracking, etc.   </li>
        <li> optional position feedback via EM3242 angle sensor </li>
        <li> software limits for position, velocity, and acceleration  </li>
        <li> python & javascript software libraries for motion control</li> 
        <li> web app GUI for configuration and testing </li> 
        <li> ROS package for easy integration into experimental arenas.  </li>
      </ul>
      </div>
      <div class="right">
        <img src="../assets/steppers_scaled.png"/>
      </div>
    </div>
    <img src="../assets/autostep_diagram.png"/>
    </br>
    <div class="padded">
      <!--
      <ul>
        <li> <b> hardware </b> </li>
        <li> <b> firmware/software </b> </li>
        <li> <b> ROS Package </b> </li>
      </ul>
      -->
    </div>
  </div>

</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'autostep',
  extends: BaseSlideComp,
  data() {
    return {
    }
  },
}
</script>

<style scoped>

ul {
  line-height: 1.5;
}

li {
  display: list;
}

.padded {
  padding-top: 3%;
  padding-left: 10%;
  padding-right: 5%;
  padding-bottom: 5%;
  text-align: left;
}

.padded_center {
  padding-top: 20px;
  padding-left: 10%;
  padding-right: 5%;
  padding-bottom: 5%;
  text-align: center;
}


.row {
  display: flex;
}

.column {
  float: left;
}

.left {
  text-align: left;
  width: 70%;
}

.right {
  padding-left: 50px;
  width: 30%;
}

</style>
