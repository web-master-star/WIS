import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    mode: 'history',
    routes: [

        // Admin
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../AdminPage/Dashboard.vue'),
        },
        {
            path: '/login',
            meta: {layout: 'userpages'},
            name: 'login',
            component: () => import('../AdminPage/UserPages/Login.vue'),
        },
        {
            path: '/signup',
            meta: {layout: 'userpages'},
            name: 'signup',
            component: () => import('../AdminPage/UserPages/Signup.vue'),
        },
        {
            path: '/userprofile',
            name: 'userprofile',
            component: () => import('../AdminPage/UserPages/UserProfile.vue'),
        },
        {
            path: '/companyprofile',
            name: 'companyprofile',
            component: () => import('../AdminPage/UserPages/CompanyProfile.vue'),
        },
        {
            path: '/job-post',
            name: 'jobpost',
            component: () => import('../AdminPage/UserPages/JobPost.vue'),
        },
        {
            path: '/job-list',
            name: 'joblist',
            component: () => import('../AdminPage/UserPages/JobList.vue'),
        },
        {
            path: '/applicant-list',
            name: 'applicantlist',
            component: () => import('../AdminPage/UserPages/ApplicantList.vue'),
        },

    ]
})
