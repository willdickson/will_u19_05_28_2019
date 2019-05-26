<template>
  <div class="slide_comp">
    <div class="padded">
      <div class="row">
        <div class="column left">
          <h1> Experimental Arenas = Robots  </h1>
        </div>
        <div class="column right">
          <img src="../assets/ros_logo.png"/>
        </div>
      </div>

    </div>
    <div class="padded">
      <ul>
        <li> log data </li>
        <li> perform actions e.g. light/motion stimulus (open or closed loop) </li>
        <li> ROS packages are reusable components </li>
        <li> chain nodes (from packages)  to produce processing pipelines </li>
        <li> existing packages: Kinefly & led_panels (S. Safarik), multi_tracker (F. Van Breugel) </li>
      </ul>
    </div>

    </br>

    <!-- <img width="25%" src="../assets/robot_image.png" /> -->
    <img width="35%" src="../assets/robot_fetch.gif" />

  </div>
</template>


<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'ros',
  extends: BaseSlideComp,
  data() {
    return {}
  }, 
  methods: {
    onSpaceBar() {
      console.log('spacebar (ros');
    },
  },
}

</script>

<style scoped>

ul {
  line-height: 1.6;
}

li {
  display: list;
  text-align: left;
}

.padded {
  padding-top: 0%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 0%;
}

.text_left {
  text-align: left;
}

.row {
  display: flex;
}

.column {
  float: left;
}

.left {
  padding-left: 0px;
  width: 85%;
}

.right {
  padding-top: 60px;
  padding-left: 15px;
  padding-right: 0px;
  width: 15%;
}



</style>

