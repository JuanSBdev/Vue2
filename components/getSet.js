
Vue.component ('c-getset', {
    template:`<div>
    
    <h1 v-text="title"></h1>
    <h3 v-text="message"></h3>
    <p>{{ fullName}}  {{ age }} </p>

    </div>`,
    data(){
        return{
            title: 'computed get set',
            message: '',
            user:{
                name: 'Jhony',
                last: 'Rain',
                year:'1996'
            }
        }
            
    },
    computed: {
        fullName (){
            return ` Nombre  completo : ${this.user.name}  ${this.user.last} born in ${this.user.year}`
        },
        age (){
             let dia = new Date()

            return  `Hoy tiene ${dia.getFullYear() - this.user.year} años de edad ` 
        }
    }
})

