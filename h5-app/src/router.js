import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('./components/home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/report',
    component: () => import('./components/report'),
    meta: {
      title: '报告'
    }
  },
  {
    path: '/meeting',
    component: () => import('./components/meeting'),
    meta: {
      title: '会议'
    }
  },
  {
    path: '/mine',
    component: () => import('./components/mine'),
    meta: {
      title: '我的'
    }
  },
];

const router = new Router({ routes });

export { router };