import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import New from '@/components/New.vue'
import Past from '@/components/Past.vue'
import Comment from '@/components/Comment.vue'
import Ask from '@/components/Ask.vue'
import Show from '@/components/Show.vue'
import Job from '@/components/Job.vue'
import Submit from '@/components/Submit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/newest',
    name: 'New',
    component: New
  },
  {
    path: '/front',
    name: 'Past',
    component: Past
  },
  {
    path: '/newcomments',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/ask',
    name: 'Ask',
    component: Ask
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/jobs',
    name: 'Job',
    component: Job
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
