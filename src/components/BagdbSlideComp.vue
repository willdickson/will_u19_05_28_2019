<template>
  <div class="slide_comp">

    <div class="padded">
      <div class="row">
        <div class="column left">
          <h1> ROS, Bag files &  Bag Database </h1>
        </div>
        <div class="column right">
          <img src="../assets/ros_logo.png"/>
        </div>
      </div>
    </div>

    <div class="padded">

      <ul>
        <li> 
          <b> Experimental rigs are ROS systems (Robots) </b>  
          <ul>
            <li> log data </li>
            <li> perform actions e.g. light/motion stimulus (open or closed loop) </li>
            <li> ROS packages are reusable components </li>
            <li> chain components to produce processing pipelines </li>
            <li> existing packages: Kinefly & led_panels (S. Safarik), multi_tracker (F. Van Breugel) </li>
          </ul>
        </li>
        </br>
        <li> 
          <b> Data logged as ROS .bag files </b> 
          <ul>
            <!-- <li> primary mechanism for data logging in ROS </li> --> 
            <li> standard format for storing message data in single file (stuff published on topics)  </li>
            <li> can store images, timestamps, sensor data, strings, etc.  (anything which can be published) </li>
            <li> can be used for playback (useful for development) </li>
            <li> extensive tools e.g. python rosbag library, rosbag.js, etc. (inspecting, reading, rebagging, etc.) </li>
          </ul>
        </li>
        </br> 
        <li> 
          <b> Organizing & Sharing Data - ROS bag database (by SWRI Robotics) </b> 
          <ul>
            <li> open source, docker container </li> 
            <li> automatically scans for new bag files </li> 
            <li> view images and image Streams </li> 
            <li> add user descriptions and tags </li> 
            <li> search by filename, keyword, topic name and type, description, tags, etc.   </li>
            <li> source code <a href="https://github.com/swri-robotics/bag-database"> https://github.com/swri-robotics/bag-database </a>  </li>
            <li> <a href="http://131.215.25.168:8080"> example database </a>  </li>
          </ul>
        </li>
      </ul>

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

