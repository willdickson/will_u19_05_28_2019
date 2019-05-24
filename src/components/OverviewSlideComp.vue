<template>
  <div class="slide_comp">
    <h1> Overview </h1>
    <div class="padded">
      <ul>
        <li>
          <b> ROS software framework/middleware </b>
          <ul>
            <li> instruments as robots  </li>
            <li> .bag files and .bag database</li>
          </ul>
        </li>
        </br>
        <li>
          <b> Selected Arenas (ROS Packages) </b>  - highlighting reusable components
          <ul>
            <li> Rockafly </li>
            <li> Rotating Wind Tunnel </li>
            <li> FlyWheel </li>
            <li> Walking Arenas: Path Integration & Puzzleboxes </li>
          </ul>
        </li>
        </br>
        <li>
          <b> Reusable hardware/software components </b>
          <ul>
            <li> Example component: Autostep (motion control) </li>
            <li> Currently available components </li>
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

