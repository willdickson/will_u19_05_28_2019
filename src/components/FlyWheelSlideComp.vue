<template>
  <div class="slide_comp">
    <h1>
      Example Arena: FlyWheel 
    </h1>
    <p> w/ Annie Erickson </p>


    <div class="row">
      <div class="column left">
        </br>
        <img src='../assets/flywheel.gif' />
      </div>
      <div class="column right">

        <ul>
          <li> <b> 1D treadmill </b> 
            <ul>
              <li> absolute position via magnetic angle sensor (non-contact)</li>
              <li> closed loop optogenetic stimulus</li> 
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
