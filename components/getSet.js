
Vue.component ('c-getset', {
    template:`<div>
    
    <h1 v-text="title"></h1>
    <p>Hola soy {{ fullName }} </p>

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
        fullName: {
            get (){
                return ` ${this.user.name}  ${this.user.last} `
            },
            set (newValue){
                let name2 = newValue.split(' ')
                
                this.user.name = name2[0]
                this.user.last = name2[1]
            }
        },
    }
})

