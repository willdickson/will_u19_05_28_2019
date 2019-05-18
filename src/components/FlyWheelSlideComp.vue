<template>
  <div class="slide_comp">
    <h1>
      FlyWheel (ROS Package)
    </h1>
    <p> Annie Erickson </p>
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
  width: 60%;
}

.right {
  text-align: left;
  width: 40%;
}

</style>
