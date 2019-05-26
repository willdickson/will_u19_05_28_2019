<template>
  <div class="slide_comp">

    <div class="padded">
      <div class="row">
        <div class="column header_left">
          <h1> Bag Files </h1>
        </div>
        <div class="column header_right">
          <img src="../assets/ros_logo.png"/>
        </div>
      </div>
    </div>

    <div class="padded">
      <p style="text-align:left;">
      <b> Data logged as ROS bag files </b> 
      </p>
      <ul>
        <!-- <li> primary mechanism for data logging in ROS </li> --> 
        <li> 
          <div class="row">
            <div class="column li_left">
              standard format for storing message data 
            </div>
            <div class="column li_right">
              - stuff published on ROS topics  
            </div>
          </div>
        </li>
        <li> 
          <div class="row">
            <div class="column li_left">
              images, timestamps, sensor data, strings, etc.   
            </div>
            <div class="column li_right">
              - anything that can be published on a topic
            </div>
          </div>
        </li>

        <li> 
          <div class="row">
            <div class="column li_left">
              can record and playback to/from bag files 
            </div>
            <div class="column li_right">
              - useful during development 
            </div>
          </div>
        </li>
        <li> 
          <div class="row">
            <div class="column li_left">
              lots of tools for working with bag files  
            </div>
            <div class="column li_right">
              - rqt_bag, command line, libraries c++, python, js, matlab, etc. 
            </div>
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'bagfile',
  extends: BaseSlideComp,
  data() {
    return {}
  }, 
  methods: {
    onSpaceBar() {
      console.log('spacebar (bagfile');
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
  padding-left: 15%;
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

.header_left {
  padding-left: 0px;
  width: 85%;
}

.header_right {
  padding-top: 60px;
  padding-left: 15px;
  padding-right: 0px;
  width: 15%;
}

.li_left {
  text-align: left;
  width: 40%;
}

.li_right {
  text-align: left;
}



</style>

