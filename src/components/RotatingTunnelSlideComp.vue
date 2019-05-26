<template>
  <div class="slide_comp">
    <h1>
      Example Arena: Virtual Desert - Rotating Wind Tunnel
    </h1>
    <p> w/ Francesca Ponce </p>
    <div class="row">
        <div class="column left">
          </br>
          <img src='../assets/rotating_tunnel_480.gif' />
          </br> 
          <a href="https://github.com/willdickson/virtual_desert"a>https://github.com/willdickson/virtual_desert</a>
        </div>
        <div class="column right">
          <ul>
            <li> <b> Combined Mechanosensory + Visual Stimulus </b> 
              <ul>
                <li> frictionless yaw rotation (magnetic tether) 
                <li> controlled air flow velocity and orientation (rotating tunnel)  </li>
                <li> virtual ventral optic flow (LED panels display)  </li>
                <li> virtual "sun" (LED  strip) </li>
              </ul>
            </li>
            <li> <b> Reusable components </b> 
              <ul>
                <li> autostep: motion control (ROS Package)</li>
                <li> magnotether: (ROS Package) </li>
                <li> alicat_ros: flow control (ROS Package) </li>
                <li> basic_led_strip (ROS Package) </li> 
                <li> led_panels: (ROS Package) S. Safarik</li>
                <li> find_fly_angle: (Python Library) </li>
              </ul>
            </li>
          </ul>
        </div>
    </div>
      <img src="../assets/rqt_graph_vdesert.png"/>
      <!-- <img src='../assets/rotating_tunnel_drawing.png' /> -->
  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'rotatingtunnel',
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

.row {
  display: flex;
}

.column {
  float: left;
}

.left {
  width: 40%;
}

.right {
  width: 60%;
  text-align: left;
}


</style>
