<template>
  <div class="slide_view">
    <OverviewSlideComp/>
  </div>
</template>

<script>

// @ is an alias to /src
import OverviewSlideComp from '@/components/OverviewSlideComp.vue'

export default {
  name: 'OverviewSlideView',
  components: {
    OverviewSlideComp,
  }
}

</script>
