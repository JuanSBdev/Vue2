Vue.component ('saludar-comp', {
    
    template:`        <div @click.self="upps">
    <h1 v-html="title"></h1>
    <button @click="saludar"> Saludar </button>
</div>
`,
    data(){
        return{
            title: 'Saludo para ti',
            nombre: 'Pepe',
            pais: 'Argentina',
            clickAfuera:'No diste click al boton',
        }
            
    },
    methods: {
        upps (){
            alert(this.clickAfuera)
        },
        saludar () {
            alert(`Hola mi nombre es ${this.nombre} y soy de ${this.pais} `)
        }
    }
})