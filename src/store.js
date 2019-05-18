import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slideOrder: [
      'intro',
      'overview',
      'ros',
      'rockafly',
      'rotatingtunnel',
      'flywheel',
      'walkingarena',
    ],

  }, // state

  mutations: {

  }, // mutations

  actions: {

  }, // actions

  getters: {

    nextSlide: (state) => (currSlide) => {
      let currIndex = state.slideOrder.indexOf(currSlide)
      let nextIndex = currIndex
      if (currIndex < state.slideOrder.length-1) {
        nextIndex = currIndex + 1
      } 
      return state.slideOrder[nextIndex]
    }, 

    prevSlide: (state) => (currSlide) => { 
      let currIndex = state.slideOrder.indexOf(currSlide)
      let prevIndex = currIndex
      if (currIndex > 0) {
        prevIndex  = currIndex - 1
      }
      return state.slideOrder[prevIndex]; 
    },

  }, // getters

})
