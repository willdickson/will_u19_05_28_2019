import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import IntroSlideView from './views/IntroSlideView.vue'
import OverviewSlideView from './views/OverviewSlideView.vue'
import RosSlideView from './views/RosSlideView.vue'
import BagdbSlideView from './views/BagdbSlideView.vue'
import RockaFlySlideView from './views/RockaFlySlideView.vue'
import RotatingTunnelSlideView from './views/RotatingTunnelSlideView.vue'
import FlyWheelSlideView from './views/FlyWheelSlideView.vue'
import WalkingArenaSlideView from './views/WalkingArenaSlideView.vue'
import AutostepSlideView from './views/AutostepSlideView.vue'
import Components1SlideView from './views/Components1SlideView.vue'
import Components2SlideView from './views/Components2SlideView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: IntroSlideView,
    },
    {
      path: '/intro',
      name: 'intro',
      component: IntroSlideView,
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewSlideView,
    },
    {
      path: '/ros',
      name: 'ros',
      component: RosSlideView,
    },
    {
      path: '/bagdb',
      name: 'bagdb',
      component: BagdbSlideView,
    },
    {
      path: '/rockafly',
      name: 'rockafly',
      component: () => import('./views/RockaFlySlideView.vue')
    },
    {
      path: '/rotatingtunnel',
      name: 'rotatingtunnel',
      component: () => import('./views/RotatingTunnelSlideView.vue')
    },
    {
      path: '/flywheel',
      name: 'flywheel',
      component: () => import('./views/FlyWheelSlideView.vue')
    },
    {
      path: '/walkingarena',
      name: 'walkingarena',
      component: () => import('./views/WalkingArenaSlideView.vue')
    },
    {
      path: '/autostep',
      name: 'autostep',
      component: () => import('./views/AutostepSlideView.vue')
    },
    {
      path: '/components1',
      name: 'components1',
      component: () => import('./views/Components1SlideView.vue')
    },
    {
      path: '/components2',
      name: 'components2',
      component: () => import('./views/Components2SlideView.vue')
    },
  ]
})
