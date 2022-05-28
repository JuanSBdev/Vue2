
Vue.component ('vued', {
    template:`<div>
    <h1 v-text="title"> </h1>
    <h3> asd </h3>
    <a :href="link.href">A</a>
    <d-html></d-html>
    </div>`,
    data(){
        return{
            title: 'directivas con vue',
            link: {
                href: "https://nfybamnh.lucusvirtual.es/",
                title: 'Directiuv'
            }
        }
            
    },
    components: {
        'd-html': directiveHtml
    }
})