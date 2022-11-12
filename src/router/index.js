import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Order from '@/components/Order'
import OrderForm from '@/components/order/Form'
import OrderDetails from '@/components/order/Details'
import PrintPreview from '@/components/order/Preview'
import ScanQR from '@/components/order/ScanQR'

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
      path: '/print-preview',
      name: 'print-preview',
      component: PrintPreview
    },
    {
      path: '/scan-qrcode',
      name: 'scan-qrcode',
      component: ScanQR
    },
    {
      path: '/order-details',
      name: 'order-details',
      component: OrderDetails
    },
  ]
})
