<template>
  <div class="slide_comp">

    <h1>
      Example Component: Autostep ROS Package 
    </h1>

    <div class="padded">
      <div class="row">
        <div class="left">
        <p> 
          <b> Repository:  <a href="https://github.com/flyloops/autostep_ros">https://github.com/flyloops/autostep_ros</a> </b>
        </p>
        <ul>
          <li>
            ROS node provides interface via ProxyServices 
            <ul>
              <li>
                motion commands - setup, enable/release, moveTo, moveBy, run, etc. 
              </li>
            </ul>
          </li>
          <li>
            optional GUI provides convenient user interface 
            <ul>
              <li>
                pre-experiment zeroing & positioning, temporary stops, adjustments, etc. 
              </li> 
            </ul>
          </li>
          <li>
            realtime information published on <em> /motion_data </em> topic  
            <ul>
              <li> timestamp, position, velocity, setpoint, angle sensor data  </li>
            </ul>
          </li>
          <li>
            if tracking mode enabled =>  realtime tracking of trajectory published on <em> /tracking_data </em> topic
          </li>
        </ul>
        </div>
      </div>
    </div>

    <img src="../assets/proxy_app_screenshot.png"/>

      <!--
        <li>
          <ul>
            <li> 
            PCB Designs for connecting to 
            <a href="https://www.pjrc.com/teensy/teensy31.html"> teensy 3.2 </a> and 
            <a href="">Arduino Nano </a> to the <a href="https://www.sparkfun.com/products/13752">Sparkfun Autodriver</a>  
            </li>
            <li> 
              <a href="http://kicad-pcb.org/"> KiCad </a> 
              design files, gerber files, bill-of-materials 
            </li>
          </ul>
        </li>
        <li>  
          <a href="https://github.com/willdickson/autostep">https://github.com/willdickson/autostep</a>
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
      -->


  </div>

</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'autostep_ros',
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
