<template>
  <div class="slide_comp">
    <h1> Overview </h1>
    <div class="padded">
      <ul>
        <li>
          <b> Software framework (ROS) </b>
          <ul>
            <li> arena/instruments as robots  </li>
            <li> bag files </li> 
            <li> bag database</li>
          </ul>
        </li>
        </br>
        <li>
          <b> Example Arenas </b>  - highlight reusable components (ROS Packages)
          <ul>
            <li> Virtual Desert - rotating wind tunnel </li>
            <li> FlyWheel </li>
          </ul>
        </li>
        </br>
        <li>
          <b> Reusable hardware/software components </b>
          <ul>
            <li> hardware, firmware/software, ROS Packages </li>
            <li> sharing: github, pypi, oshpark, thingiverse  </li>
            <li> example component: Autostep (motion control) </li>
            <li> table of currently available components </li>
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

