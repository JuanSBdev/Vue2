
Vue.component ('vued', {
    
    template:`<div>
    <h1 v-text="title"> </h1>
    <h3> asd </h3>
    <a :href="link.href">A</a>
    <d-html></d-html>
    <d-show/>
    <d-if/>
    <d-f/>
    <d-on/>
    <directiveModel/>
    <directiveSlot/>

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
        'd-html': directiveHtml,
        'd-show': directiveShow,
        'd-if': directiveIf,
        'd-f':directiveFor,
        'd-on': directiveOn,
        directiveModel,
        directiveSlot,
    }
})