<template>
  <div class="slide_comp">
    <h1>
     Path Integration, Puzzleboxes, ...
    </h1>
    <p> w/ Amir Behbahani & Roman Corfas </p>

    <div class="row">
      <div class="column left">
        <b> Example Tracking Region </b>
        </br>
        </br>
        <img src="../assets/amir_walking.gif" />
        <div style="margin-left:20%;text-align:left;">
          <p>
            <a href="https://github.com/willdickson/path_integration_multi"a>https://github.com/willdickson/path_integration_multi</a>
            </br>
            <a href="https://github.com/willdickson/path_integration_multi_launch"a>https://github.com/willdickson/path_integration_multi_launch</a>
            </br>
            <a href="https://github.com/willdickson/pathint_arena_3x3_stim_grid"a>https://github.com/willdickson/pathint_arena_3x3_stim_grid</a>
            </br>
            <a href="https://github.com/willdickson/puzzleboxes"a>https://github.com/willdickson/puzzleboxes</a>
          </p>
        </div>
      </div>
      <div class="column right">
        <ul> 
          <li> <b> Multi-region walking arenas</b>
            <ul>
              <li> position of flies tracked (realtime)</li>
              <li> apply stimulus when classifier conditions met, e.g. virtual food </li>
            </ul>
          </li>
          </br>
          <li> <b> Reusable components </b>

            <ul>
              <li> multi_tracker: (ROS Package), Floris. Van Breugel </li>
              <li> led_pwm: 6-channel LED PWM, (ROS Package)</li>
              <li> led_pwm_tlc5947: 24-channel LED PWM, (hardware, firmware, ROS Package)</li>
            </ul>
            
          </li>
        </ul>


      </div>
    </div>

    </br>
    </br>

     ROS graph for Path Integration arena 
    <img width="90%" src="../assets/pathint_rosgraph_2.png" />
    </br>
  </div>

</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'walkingarena',
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
