<template>
  <div class="slide_comp">
    <h1>
      Rotating Wind Tunnel - Virtual Desert (ROS Package)
    </h1>
    <p> w/ Francesca Ponce </p>
    <div class="row">
    <div class="column left">
      <img src='../assets/rotating_tunnel_drawing.png' />
      </br>
      </br>
      <img src='../assets/rotating_tunnel_480.gif' />
    </div>
    <div class="column right">
      </br> 
      <ul>
        <li> <b> Combined Mechanosensory + Visual Stimulus </b> 
          <ul>
            <li> magnetic tether (yaw rotation) </li>
            <li> controlled flow velocity and orientation  </li>
            <li> virtual ground (LED panels display)  </li>
            <li> virtual "sun" LED  strip </li>
          </ul>
        </li>
        </br>
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
        <p >
          <a href="https://github.com/willdickson/virtual_desert"a>https://github.com/willdickson/virtual_desert</a>
        </p>
    <img src="../assets/rqt_graph_vdesert.png"/>
    </div>
  </div>
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
  text-align: left;
  width: 60%;
}

</style>
