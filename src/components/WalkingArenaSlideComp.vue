<template>
  <div class="slide_comp">
    <h1>
      Walking Arenas: Path Integration & Puzzleboxes 
    </h1>
    <p> Amir Behbahani & Roman Corfas </p>
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
  width: 60%;
}

.right {
  text-align: left;
  width: 40%;
}

</style>
