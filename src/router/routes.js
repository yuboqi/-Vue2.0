import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
export default[
    {
        path:'/pay',
        component:Pay,
        meta:{showFooter:true}
    },
    {
        path:'/trade',
        component:Trade,
        meta:{showFooter:true}
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{showFooter:true}
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{showFooter:true}
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{showFooter:true}
    },
    {
        path:'/home',
        component:Home,
        meta:{showFooter:true}
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        meta:{showFooter:true},
        props($route){
            return{
                keyword:$route.params.keyword
            }
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{showFooter:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{showFooter:false}
    },
    //重定向
    {
        path:'/',
        redirect:'/home',
    },
]