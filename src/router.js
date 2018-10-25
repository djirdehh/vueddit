import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import Topic from './views/topic/Topic.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/v/:topic',
      name: 'topic',
      component: Topic
    },
    {
      path: '/v/:topic/comments/:post',
      name: 'home',
      component: Home
    }
  ]
});
