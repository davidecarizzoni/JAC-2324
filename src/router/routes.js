const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/posts',
    children: [
      { path: 'counter', component: () => import('pages/CounterDemo.vue') },
      { path: 'posts', component: () => import('pages/Posts.vue') },
      { path: 'posts/:postId', component: () => import('pages/PostsDetail.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
