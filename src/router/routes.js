import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Error from '@/pages/Error'
export default[
    {
        path:'/error',
        component:Error,
        meta:{showFooter:false,showHeader:false}
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/pay',
        component:Pay,
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/trade',
        component:Trade,
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/home',
        component:Home,
        meta:{showFooter:true,showHeader:true}
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        meta:{showFooter:true,showHeader:true},
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