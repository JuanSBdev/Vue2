let directiveHtml = {
    
        template:`<div>
        <h3 v-text="title"> </h3>
        <h3 v-html="message"> </h3>
        </div>`,
        data(){
            return{
                title: 'directivas con vue2',
                message:'<b>Hola desde directives HTML</b>'

            }
                
        }
    }
