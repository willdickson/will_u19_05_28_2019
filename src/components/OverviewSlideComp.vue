<template>
  <div class="slide_comp">
    <h1> Overview </h1>
    <div class="padded">
      <ul>
        <li>
          <b> Software Framework - Robot Operating System (ROS) </b> 
          <ul>
            <li> arenas/instruments as robots  </li>
            <li> bag files </li> 
            <li> bag database</li>
          </ul>
        </li>
        </br>
        <li>
          <b> Example Arenas - highlight reusable components (ROS Packages) </b>
          <ul>
            <li> Virtual Desert - rotating wind tunnel </li>
            <li> FlyWheel </li>
          </ul>
        </li>
        </br>
        <li>
          <b> Example Component (Autostep) - focus on sharing </b>
          <ul>
            <li> hardware - CAD design files, gerber files, BOM</li>
            <li> firmware - software libraries,  utilities, etc. </li>
            <li> ROS Package </li>
          </ul>
        </li>
        </br>
        <li>
          <b> List of Available Components </b>
          <ul>
            <li> Github repositories </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'overview',
  extends: BaseSlideComp,
  data() {
    return {}
  }, 
  methods: {
    onSpaceBar() {
      console.log('spacebar (overview)');
    },
  },
}

</script>

<style scoped>

ul {
  line-height: 1.5;
}

li {
  display: list;
  text-align: left;
}

.padded {
  padding-top: 2%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 10%;
}


</style>

