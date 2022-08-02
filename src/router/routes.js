
//懒加载后不需要引入

// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Error from '@/pages/Error'

// import Center from '@/pages/Center'
// import myOrder from '@/pages/Center/myOrder'
// import groupOrder from '@/pages/Center/groupOrder'

export default[
    {
        path:'/center',
        // component:Center,//非懒加载
        component:()=>import('@/pages/Center'),//路由懒加载
        meta:{showFooter:true,showHeader:true},
        children:[
            {
                path:'myorder',
                component:()=>import('@/pages/Center/myOrder'),//路由懒加载
                meta:{showFooter:true,showHeader:true},
            },
            {
                path:'grouporder',
                component:()=>import('@/pages/Center/groupOrder'),//路由懒加载
                meta:{showFooter:true,showHeader:true},
            },
            {
                path:'',
                redirect:'/center/myOrder'
            }
        ]

    },
    {
        path:'/error',
        component:()=>import('@/pages/Error'),//路由懒加载
        meta:{showFooter:false,showHeader:false}
    },
    {
        path:'/paysuccess',
        component:()=>import('@/pages/PaySuccess'),//路由懒加载
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/pay',
        component:()=>import('@/pages/Pay'),//路由懒加载
        meta:{showFooter:true,showHeader:true},
        beforeEnter: (to, from, next) => {
            if(from.path==('/trade')){
                next();
            }else{
                next(false)
            }
        }
    },
    {
        path:'/trade',
        component:()=>import('@/pages/Trade'),//路由懒加载
        meta:{showFooter:true,showHeader:true},
        beforeEnter: (to, from, next) => {
            if(from.path==('/shopcart')){
                next();
            }else{
                next(false)
            }
        }
    },
    {
        path:'/shopcart',
        component:()=>import('@/pages/ShopCart'),//路由懒加载
        meta:{showFooter:true,showHeader:true},
    },
    {
        path:'/addcartsuccess',
        component:()=>import('@/pages/AddCartSuccess'),//路由懒加载
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/detail/:skuid',
        component:()=>import('@/pages/Detail'),//路由懒加载
        meta:{showFooter:true,showHeader:true}
    },
    {
        path:'/home',
        component:()=>import('@/pages/Home'),//路由懒加载
        meta:{showFooter:true,showHeader:true}
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:()=>import('@/pages/Search'),//路由懒加载
        meta:{showFooter:true,showHeader:true},
        props($route){
            return{
                keyword:$route.params.keyword
            }
        }
    },
    {
        path:'/login',
        component:()=>import('@/pages/Login'),//路由懒加载
        meta:{showFooter:false,showHeader:true}
    },
    {
        path:'/register',
        component:()=>import('@/pages/Register'),//路由懒加载
        meta:{showFooter:false,showHeader:true}
    },
    //重定向
    {
        path:'/',
        redirect:'/home',
    },
]