let directiveSlot = {
    template:`<div>
    <h3 v-text="title"></h3>
    <button-comp>
        
    </button-comp>
    </div>`,
    data(){
        return{
            title: 'directiva v-sslot',
        }
            
    },
    components: {
        buttonComp,
    }
}