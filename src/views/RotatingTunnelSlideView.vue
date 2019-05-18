<template>
  <div class="slide_view">
    <RotatingTunnelSlideComp/>
  </div>
</template>

<script>

// @ is an alias to /src
import RotatingTunnelSlideComp from '@/components/RotatingTunnelSlideComp.vue'

export default {
  name: 'RotatingTunnelSlideView',
  components: {
    RotatingTunnelSlideComp,
  }
}

</script>
