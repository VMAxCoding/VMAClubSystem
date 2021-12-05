const routes = [
  {
    name: 'Index',
    path: '/',
    component: () => import('src/pages/Index.vue'),
  },
  {
    name: 'ClubCenter',
    path: '/club',
    component: () => import('src/pages/Club/Center'),
    meta: {
      needAuth: true,
    },
  },
  {
    name: 'ClubDetail',
    path: '/club/:id',
    component: () => import('pages/Club/Detail'),
    meta: {
      needAuth: true,
    },
  },
  {
    name: 'UserCenter',
    path: '/me',
    component: () => import('pages/UserCenter.vue'),
    meta: {
      needAuth: true,
    },
  },
  {
    name: 'Help',
    path: '/help',
    component: () => import('pages/Help.vue'),
  },
  {
    name: 'Sign',
    path: '/login',
    component: () => import('pages/Sign.vue'),
    meta: {
      showFooter: false,
      showHeader: false,
      showBRB: false,
    },
  },
  {
    name: '404',
    path: '/:catchAll(.*)*',
    component: () => import('pages/404.vue'),
    meta: {
      showFooter: false,
      showHeader: false,
      showBRB: false,
    },
  },
];

export default routes;
