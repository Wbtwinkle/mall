import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Profile = () => import('../views/profile/Profile');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;