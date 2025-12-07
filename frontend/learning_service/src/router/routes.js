const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        redirect: '/input',
      },
      { path: '/input', component: () => import('pages/IndexPage.vue') },
      { path: '/messages', component: () => import('pages/MessagesPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
