<template>
  <div class="slide_comp">
    <h1>
      Rockafly (ROS Package) 
    </h1>
    <p>  Bradley Dickerson & Kellan Moorse </p>

    <div class="row">
      <div class="column left">
        <img src='../assets/rockafly.png' />
      </div>
      <div class="column right">
        </br>
        <p> <b> Reusable Components </b> </p>

        <ul>
          <li> autostep: motion control (ROS Package) </li>
          <li> image_stabilizer: (ROS Package)</li>
          <li> kinefly (ROS Package) S. Safarik </li>
          <li> LED backlight driver (hardware) </li>
          <li> IR backlight ring (hardware) </li> 
        </ul>

        <p >
          <a href="https://github.com/willdickson/rockafly_launch"a>https://github.com/willdickson/rockafly_launch</a>
          </br>
          <a href="https://github.com/willdickson/rockafly_mechanics"a>https://github.com/willdickson/rockafly_mechanics</a>
        </p>

      </div>
    </div>


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

