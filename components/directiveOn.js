let directiveOn = {
    template:`<div>
    <h1 v-html="title"></h1>
    <button :class="'btn btn-dark'" v-on:click.stop="clic"> Clicka</button>
    <button :class="'btn btn-warning'" @click="comprar">Comprar</button>
    <div>
    <h2>Modificando vista y modelo</h2>
    <input type="text" :value="textInput" @keyup="updateDataTextInput"/> 
</div>
    </div>`,
    data(){
        return{
            title: '<b>Entradas Desde ON</b>',
            message: 'From On',
            clic_texto:'clickaste el botón',
            pelicula: 'La Pelicula',
            entradas: 5,
            textInput: 'Valor por defecto'
        }
            
    }, 
    methods:{
        clic (){
            alert(this.clic_texto)
        },
        comprar(){
            if( this.entradas > 0){
                this.entradas --,
                alert (`Compraste una entrada para ${this.pelicula}, quedan ${this.entradas} entradas` )
            }
            else alert ('Ya no hay entradas')
        },
        updateDataTextInput (event){
            this.textInput = event.target.value
        }
    }
}
