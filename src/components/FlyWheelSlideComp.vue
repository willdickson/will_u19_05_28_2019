<template>
  <div class="slide_comp">
    <h1>
      FlyWheel (ROS Package)
    </h1>
    <p> w/ Annie Erickson </p>

    </br> 

    <div class="row">
      <div class="column left">
        </br>
        <img src='../assets/flywheel.gif' />
      </div>
      <div class="column right">

        <ul>
          <li> <b> Walking Arena  (1D Fictrac) </b> 
            <ul>
              <li> absolute position via magnetic angle sensor (non-contact)</li>
              <li> virtual food stimulus via LED</li> 
            </ul>
          </li>
          </br> 
          <li> <b> Reusable Components </b> 
            <ul>
              <li> em3242_angle_sensor: absolute position sensor (ROS Package) </li>
              <li> led_pwm: control of stimulus LEDs  (ROS Package) </li>
            </ul>
          </li>
        </ul>
        <a href="https://github.com/willdickson/flywheel_ros"a>https://github.com/willdickson/flywheel_ros</a>
        </br>
        <a href="https://github.com/willdickson/flywheel_cad"a>https://github.com/willdickson/flywheel_cad</a>
      </div>
    </div>
    </br>
    </br>
    <img width="60%" src="../assets/flywheel_rosgraph_2.png"/>
  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'flywheel',
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
  width: 50%;
}

.right {
  text-align: left;
  width: 50%;
}

</style>
