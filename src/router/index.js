import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import jiao from '@/components/jiao'
import yan from '@/components/yan'
import chan from '@/components/chan'
import jing from '@/components/jing'
import xin from '@/components/xin'
import hey from '@/components/hey'
import hey1 from '@/components/hey1'
import xian from '@/components/xian'
import shi from '@/components/shi'
import zhu from '@/components/zhu'
import qian from '@/components/qian'
import zuo from '@/components/zuo'
import xianxia from '@/components/xianxia'
import si from '@/components/si'
import si1 from '@/components/si1'
import si2 from '@/components/si2'
import si3 from '@/components/si3'
import si4 from '@/components/si4'
import si5 from '@/components/si5'
import si6 from '@/components/si6'
import si7 from '@/components/si7'
import si8 from '@/components/si8'
import si9 from '@/components/si9'
import IT from '@/components/IT'
import siren from '@/components/siren'
import shixun from '@/components/shixun'
import xin1 from '@/components/xin1'
import xin2 from '@/components/xin2'
import xin3 from '@/components/xin3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/jiao',
    name: 'jiao',
    component: jiao
  },
  {
    path: '/yan',
    name: 'yan',
    component: yan
  },
  {
    path: '/chan',
    name: 'chan',
    component: chan
  },
  {
    path: '/jing',
    name: 'jing',
    component: jing
  },
  {
    path: '/xin',
    name: 'xin',
    component: xin
  },
  {
    path: '/hey',
    name: 'hey',
    component: hey
  },
  {
    path: '/hey1',
    name: 'hey1',
    component: hey1
  },
  {
    path: '/xian',
    name: 'xian',
    component: xian
  },
  {
    path: '/shi',
    name: 'shi',
    component: shi
  },
  {
    path: '/zhu',
    name: 'zhu',
    component: zhu
  },
  {
    path: '/qian',
    name: 'qian',
    component: qian
  },
  {
    path: '/zuo',
    name: 'zuo',
    component: zuo
  },
  {
    path: '/xianxia',
    name: 'xianxia',
    component: xianxia
  },
  {
    path: '/',
    redirect: '/deng'
  },
  {
    path: '/si',
    name: 'si',
    component: si
  },
  {
    path: '/si1',
    name: 'si1',
    component: si1
  },
  {
    path: '/si2',
    name: 'si2',
    component: si2
  },
  {
    path: '/si3',
    name: 'si3',
    component: si3
  },
  {
    path: '/si4',
    name: 'si4',
    component: si4
  },
  {
    path: '/si5',
    name: 'si5',
    component: si5
  },
  {
    path: '/si6',
    name: 'si6',
    component: si6
  },
  {
    path: '/si7',
    name: 'si7',
    component: si7
  },
  {
    path: '/si8',
    name: 'si8',
    component: si8
  },
  {
    path: '/si9',
    name: 'si9',
    component: si9
  },
  {
    path: '/IT',
    name: 'IT',
    component: IT
  },
  {
    path: '/siren',
    name: 'siren',
    component: siren
  },
  {
    path: '/shixun',
    name: 'shixun',
    component: shixun
  },
  {
    path: '/xin1',
    name: 'xin1',
    component: xin1
  },
  {
    path: '/xin2',
    name: 'xin2',
    component: xin2
  },
  {
    path: '/xin3',
    name: 'xin3',
    component: xin3
  }
]
var router = new VueRouter({
  routes
})
export default router
