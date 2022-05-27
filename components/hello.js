Vue.component ('hello-1', {
    template:`<header>
    <h1> {{ title }} </h1>
    <h3> {{message}} </h3>
    </header>`,
    data(){
        return{
            title: 'Hola desde Vue hello',
            message: 'mensaje heo' 
        }
            
    }
})