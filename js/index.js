// import Main from '../components/main.vue'
var HomePage = {
    template:"#homepage"
}
var Project = {
    template:"#project"
}

var router = new VueRouter({
    //设置路由规则
    routes: [
        {path:"/",component:HomePage},
        {path:"/project",component:Project}
    ]
})
var vm = new Vue({
    el: "#app",
    data() {
        return {
            msg: '我爱vue'
        }
    },
    methods: {

    },
    components: {
        HomePage,
        Project
    },
    router:router
})

$(function(){
    $(".navbar-nav>li").on("click",function(){
        // alert("sdf")
        $(this).addClass("active").siblings("li").removeClass("active");
    })
})
