<template>
  <div class="slide_comp">
    <h1>
      Rockafly (ROS Package) 
    </h1>
    <p>  w/ Bradley Dickerson & Kellan Moorse </p>

    <div class="row">
      <div class="column left">
        <img src='../assets/rockafly_w_annotation.png' />
      </div>
      <div class="column right">
        </br>
        <ul>
          <li>  
            <b> Mechanosensory stimulus (angular velocity)</b>
            <ul>
              <li> rotation about yaw, pitch & roll </li>
              <li> one axis at a time - different tether for each axis</li>
              <li> open and closed loop </li>
            </ul>
          </li>
          </br>
          <li>
            <b> Reusable Components </b> 
            <ul>
              <li> autostep: motion control (ROS Package) </li>
              <li> image_stabilizer: (ROS Package)</li>
              <li> rkf_mask (Ros Package) K. Moorse </li>
              <li> kinefly (ROS Package) S. Safarik </li>
              <li> LED backlight driver (hardware) </li>
              <li> IR backlight ring (hardware) </li> 
            </ul>
          </li>
        </ul>

        <p>
          <a href="https://github.com/willdickson/rockafly_launch"a>https://github.com/willdickson/rockafly_launch</a>
          </br>
          <a href="https://github.com/willdickson/rockafly_mechanics"a>https://github.com/willdickson/rockafly_mechanics</a>
        </p>

      </div>
    </div>
    <img src="../assets/rockafly_rosgraph.png" />
  </div>
</template>

<script>

import BaseSlideComp from './BaseSlideComp.vue'

export default {
  name: 'rockafly',
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
  padding-left: 50px;
  width: 60%;
}

.right {
  padding-right: 50px;
  text-align: left;
  width: 40%;
}

</style>

