let directiveShow = {
    template:`<div>
    <h3 v-show="!mostrar +1" v-text="title"></h3>
    <h3 v-show="mostrar"v-html="message"> </h3>
    </div>`,
    data(){
        return{
            title: 'directiva v-show',
            message:'<b>Hola desde directives vshow</b>',
            mostrar: 1
        }
            
    }
}