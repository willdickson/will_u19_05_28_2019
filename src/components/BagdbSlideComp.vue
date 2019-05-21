<template>
  <div class="slide_comp">

    <h1> Bag Files & Bag Database </h1>

    </br> 
    <div class="padded">

      <ul>
        <li> 
          <b> ROS bag files </b> 
          <ul>
            <li> primary mechanism in ROS for data logging </li>
            <li> format for storing ROS message data (stuff published on topics)  </li>
            <li> stores images, timestamps, sensor data, strings, etc.  (anything which can be published) </li>
            <li> can be used for playback (useful for development) </li>
            <li> extensive tools for working w/ .bags (inspecting, reading, rebagging, etc.) </li>
          </ul>
        </li>
        </br> 
        <li> 
          <b> ROS bag database (by SRWI Robotics) </b> 
          <ul>
            <li> open source, docker container </li> 
            <li> automaticaly scans for new bag files </li> 
            <li> view images and image Streams </li> 
            <li> add user descriptions and tags </li> 
            <li> search by filename, keywoard, topic name and type, description, tags, etc.   </li>
            <li> <a href="http://131.215.25.168:8080"> A running example </a>  </li>
            <li> <a href="https://github.com/swri-robotics/bag-database"> https://github.com/swri-robotics/bag-database </a>  </li>

          </ul>
        </li>
      </ul>

      <!--
      <div class="row">
        <div class="column left">
          <h1> Bag Files & Bag Database </h1>
        </div>
        <div class="column right">
          <img src="../assets/ros_logo.png"/>
        </div>
      </div>
      --> 

    </div>

  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'bagdb',
  extends: BaseSlideComp,
  data() {
    return {}
  }, 
  methods: {
    onSpaceBar() {
      console.log('spacebar (bagdb');
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

