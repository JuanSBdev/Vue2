let directiveOnce = {
    template:`<div>
    <h3 v-text="title" v-once></h3>
    <h3 v-html="message"> </h3>
    </div>`,
    data(){
        return{
            title: 'directiva V-ONCE',
            message:'<b>Welcome from v-once. This thing wont change and Vue won´t ask </b>',
        }
            
    }
}