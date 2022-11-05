import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Order from '@/components/Order'
import OrderForm from '@/components/order/Form'
import SuccessMessage from '@/components/order/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/orders',
      name: 'orders',
      component: Order
    },
    {
      path: '/order-form',
      name: 'order-form',
      component: OrderForm
    },
    {
      path: '/success-message',
      name: 'success-message',
      component: SuccessMessage
    },
  ]
})
