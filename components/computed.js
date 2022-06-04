
Vue.component ('computed-1', {
    template:`<div>
    
    <h1 v-text="title"></h1>
    <h3 v-text="message"></h3>
    <p>{{ fullName}} </p>
    </div>`,
    data(){
        return{
            title: 'computed',
            message: 'utiliza menos memoria',
            user:{
                name: 'Jhony',
                last: 'Rain',
                year:'1996'
            }
        }
            
    },
    computed: {
        fullName (){
            return ` Nombre completo : ${this.user.name}  ${this.user.last} born in ${this.user.year}`
        }
    }
})

