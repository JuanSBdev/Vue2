let directiveShow = {
    template:`<div>
    <h3 v-html="message"> </h3>
    </div>`,
    data(){
        return{
            title: 'directivas con vue2',
            message:'<b>Hola desde directives Show</b>'

        }
            
    }
}