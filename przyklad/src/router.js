import Router from 'vue-router'
import Login from "@/components/Login";
import Profile from "@/components/Profile";
import notFound from "@/components/notFound";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/404',
        },
        {
            path: "/login",
            name: "loginPage",
            component: Login,
            beforeEnter: (to, from, next)=>{
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user) next();
                else next(false);
            },
        },
        {
            path: "/",
            name: "profilePage",
            component: Profile,
            beforeEnter: (to, from, next)=>{
                const user = JSON.parse(localStorage.getItem('user'));
                if(user)
                    next();
                else next('/login');
            },
        },
        {
            path: "/404",
            name: "notFoundPage",
            component: notFound,
        }
    ],
})

