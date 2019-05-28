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
