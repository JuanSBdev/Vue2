
Vue.component ('vued', {
    template:`<div>
    <h1> {{ title }} </h1>
    <h3> asd </h3>
    <a :href="link.href">A</a>
    </div>`,
    data(){
        return{
            link: {
                href: "https://nfybamnh.lucusvirtual.es/",
                title: 'asdasd'
            }
        }
            
    }
})