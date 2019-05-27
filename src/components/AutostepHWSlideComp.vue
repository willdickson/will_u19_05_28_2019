<template>

  <div class="slide_comp">

    <h1>
      Example Component: Autostep Hardware
    </h1>


    <div class="padded">
      <div class="row">
        <div class="left">
          <b> Connects microcontroller (SPI) to stepper driver IC L6470 </b>
          </br>
          </br>
          <b> Contents </b>
          <ul>
            <li> Design Files (<a href="http://kicad-pcb.org/">KiCad</a>) </li>
            <li> Gerber Files </li>
            <li> Bill of Materials</li>
          </ul>
        </div>
        <div class="right">
          </br>
          </br>
          </br>
          <b> Repositories </b>
          <ul>
            <li> 
              <a href="https://github.com/flyloops/teensy_to_autodriver">https://github.com/flyloops/teensy_to_autodriver</a> 
            </li>
            <li>
              <a href="https://github.com/willdickson/nano_to_autodriver">https://github.com/willdickson/nano_to_autodriver</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <img src="../assets/autostep_hardware.png"/>





  </div>

</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'autostep_hw',
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
  padding-top: 1%;
  padding-left: 18%;
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
  width: 50%;
}

.right {
  text-align: left;
  width: 50%;
}

</style>
