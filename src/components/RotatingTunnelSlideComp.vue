<template>
  <div class="slide_comp">
    <h1>
      Rotating Wind Tunnel (ROS Package)
    </h1>
    <p> Francesca Ponce </p>
    <div class="row">
    <div class="column left">
      <img src='../assets/rotating_tunnel_drawing.png' />
      </br>
      </br>
      <img src='../assets/rotating_tunnel_480.gif' />
    </div>
    <div class="column right">
      <p> <b> Resusable components </b> </p>
      <ul>
        <li> autostep: motion control (ROS Package)</li>
        <li> led_panels: (ROS Package) S. Safarik</li>
        <li> alicat_ros: flow control (ROS Package) </li>
        <li> magnotether: (ROS Package) </li>
        <li> find_fly_angle: (Python Library) </li>
      </ul>
        <p >
          <a href="https://github.com/willdickson/virtual_desert"a>https://github.com/willdickson/virtual_desert</a>
        </p>
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
  width: 60%;
}

.right {
  text-align: left;
  width: 40%;
}

</style>
