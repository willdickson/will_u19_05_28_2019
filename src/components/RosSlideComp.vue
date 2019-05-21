<template>
  <div class="slide_comp">
    <div class="padded">
      <div class="row">
        <div class="column left">
          <h1> Robot Operating System </h1>
        </div>
        <div class="column right">
          <img src="../assets/ros_logo.png"/>
        </div>
      </div>
      <p class="text_left" > <b> Open source  robotics framework/middleware </b>  </p>
      <ul>
        <li> a system consists of a collection of nodes (programs)  </li>
        <li> communications via publisher/subscriber or proxy services </li>
        <li> software orgainzed into packages (reusable components) </li>
        <li> many pre-existing packages: cameras, sensors, image processing, etc. </li>
        <li> parameter server, launch files, logging data (.bag files) </li>
      </ul>
      <img src="../assets/rqt_graph_vdesert.png"/>
      <p class="text_left"> <b> Experimental Rigs are ROS Systems (Robots) </b> </p> 
      <ul>
        <li> perform actions e.g. light/motion stimulus (open or closed loop) </li>
        <li> ROS packages are reusable components </li>
        <li> chain components to produce processing pipelines </li>
        <li> existing packages: Kinefly & led_panels (S. Safarik), multi_tracker (F. Van Breugel) </li>
      </ul>
    </div>
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
  padding-bottom: 10%;
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

