
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '/indexPage', component: () => import('pages/IndexPage.vue') },
      { path: 'listaAnimales',
      name: 'listaAnimales',
      component: () => import('pages/listaAnimales.vue')
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('pages/index.vue')

      }
    ],
  },
]

export default routes