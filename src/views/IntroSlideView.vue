<template>
  <div class="slide_view">
    <IntroSlideComp/>
  </div>
</template>

<script>

// @ is an alias to /src
import IntroSlideComp from '@/components/IntroSlideComp.vue'

export default {
  name: 'IntroSlideView',
  components: {
    IntroSlideComp,
  }
}

</script>
