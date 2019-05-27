<template>
  <div class="slide_comp">

    <div class="padded">
      <div class="row">
        <div class="column left">
          <h1> Bag Database (SWRI Robotics)</h1>
        </div>
        <div class="column right">
          <img src="../assets/ros_logo.png"/>
        </div>
      </div>
    </div>

    <div class="padded">
      <p style="text-align:left">
      <b> Tool for organizing & sharing data  </b> 
      &nbsp 
      <a href="https://github.com/swri-robotics/bag-database">https://github.com/swri-robotics/bag-database</a>  
       &nbsp 
      <a href="http://131.215.25.168:8080"> demo </a>
      </p>
      <ul>
        <li> open source, docker container </li> 
        <li> automatically scans for new .bag files </li> 
        <li> view/stream images  </li> 
        <li> add metadata, descriptions, tags </li> 
        <li> search by filename, keyword, topic name and type, description, tags, etc.   </li>
        <!-- 
        <li> <a href="http://131.215.25.168:8080"> example </a>  </li>
        --> 
      </ul>
    </div>

    <img src="../assets/bag_database_screenshot_2_scaled.png"/>

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

