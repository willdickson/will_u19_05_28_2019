<template>
  <div class="slide_comp">

  </div>
</template>

<script>
export default {

  name: 'base',

  props: {},

  methods: {

    keyHandler(event) {

      let slideNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

      switch(event.key) {

        case 'p':
        case 'ArrowLeft':
          this.gotoPrevSlide()
          break

        case 'n':
        case 'ArrowRight': 
          this.gotoNextSlide()
          break

        case ' ':
          this.onSpaceBar()
          break

      }

      if (slideNumbers.includes(event.key)) {
          let index = parseInt(event.key,10)
          this.gotoSlideByIndex(index)
      }
    },

    gotoNextSlide() { 
      let nextSlide = this.$store.getters.nextSlide(this.$options.name)
      console.log('nextSlide = ' + nextSlide)
      this.$router.push(nextSlide)
    },

    gotoPrevSlide() {
      let prevSlide = this.$store.getters.prevSlide(this.$options.name)
      console.log('prevSlide = ' + prevSlide)
      this.$router.push(prevSlide)
    },

    gotoSlideByIndex(index) {
      console.log('goto slide number: ' + index)
      if ((index >= 0) && (index < this.$store.state.slideOrder.length)) {
        let slide = this.$store.state.slideOrder[index];
        console.log('slide ' + slide)
        this.$router.push(slide)
      }
    },

    onSpaceBar() {
      console.log('spacebar (base) ')
    },

    addKeyHandler() {
      window.addEventListener('keydown', this.keyHandler);
    },

    removeKeyHandler() {
      window.removeEventListener('keydown', this.keyHandler);
    },
  },

  created() {
    this.addKeyHandler()
  },
  destroyed() {
    this.removeKeyHandler()
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
