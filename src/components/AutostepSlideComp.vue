<template>
  <div class="slide_comp">

    <h1>
      Example Component: Autostep
    </h1>

    <div class="padded">

      <b> High-level motion control  </b>
      <ul>
        <li> open and close loop (proscribed trajectories, trajectory tracking, etc.)   </li>
        <li> python & javascript libraries with motion primatives, e.g., enable, release, move to (postion), run at (velocity), etc.  </li>
        <li> software limits for position, velocity, and acceleration  </li>
        <li> optional sensor feedback (EM3242 angle sensor) </li>
        <li> ROS Pacakge. Autostep node provides access to motion primatives set via service proxies. </li>
      </ul>


      <b> Repositories </b>
      <ul>
        <li> 
          <a href="https://github.com/willdickson/teensy_to_autodriver">https://github.com/willdickson/teensy_to_autodriver</a> 
        </li>
        <li>
          <a href="https://github.com/willdickson/nano_to_autodriver">https://github.com/willdickson/nano_to_autodriver</a>
          <ul>
            <li> PCB Designs for connecting to <a href="https://www.pjrc.com/teensy/teensy31.html"> teensy 3.2 </a> and <a href="">Arduino Nano </a> to the <a href="https://www.sparkfun.com/products/13752">Sparkfun Autodriver</a>  </li>
            <li> <a href="http://kicad-pcb.org/"> KiCad </a> design files, gerber files, bill-of-materials </li>
          </ul>
        </li>
        <li>  <a href="https://github.com/willdickson/autostep">https://github.com/willdickson/autostep</a>
          <ul>
            <li> firmware (C++), for teensy 3.2 with L6470 motor driver IC</li>
            <li> python library  (no ROS dependency) </li>
            <li> node.js library (no ROS dependency) </li>  
            <li> webap GUI (no ROS dependecy)  </li>  
            <li> <a href=""> documentation (Sphinx + autodoc) </a>  </li>
          </ul>
        </li>
        <li>  <a href="https://github.com/willdickson/autostep_ros">https://github.com/willdickson/autostep_ros</a> 
          <ul>
            <li> Autostep ROS package. ROS node, launch files and message/service definitions </li>
            <li> Autostep Proxy GUI.  Provides user interface for easy motor configuration, e.g. zeroing, etc.   </li>
          </ul>
        </li> 
      </ul>

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
  padding-top: 1.5%;
  padding-left: 20%;
  padding-right: 10%;
  padding-bottom: 10%;
  text-align: left;
}


.row {
  display: flex;
}

.column {
  float: left;
}

.left {
  width: 50%;
}

.right {
  text-align: left;
  width: 50%;
}

</style>
