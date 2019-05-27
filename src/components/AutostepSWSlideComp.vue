<template>
  <div class="slide_comp">

    <h1>
      Example Component: Autostep Firmware/Software
    </h1>

    <div class="padded">
      <div class="row">
        <div class="left">
        <p> 
          <b> Repository: <a href="https://github.com/flyloops/autostep">https://github.com/flyloops/autostep</a> </b>
        </p>
        <ul>
          <li> firmware: C++ for teensy3.2 (32-bit ARM MCU), program w/ Arduino IDE + teensyduino addon</li>
          <li> software: implements serial API w/ python & javascript libraries </li>
          <li> webapp GUI configuration tool </li>
          <li> stand alone - does not have ROS dependency  </li>
        </ul>
        </div>
      </div>
    </div>

    </br>

    <img src="../assets/autostep_webapp.png"/>

  </div>

</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'autostep_sw',
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
  padding-top: 0%;
  padding-left: 20%;
  padding-right: 10%;
  padding-bottom: 0%;
  text-align: left;
}


.row {
  display: flex;
}

.column {
  float: left;
}

.left {
  width: 100%;
}

.right {
  text-align: left;
  width: 0%;
}

</style>
