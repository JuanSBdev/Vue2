let directiveModel = {
    template:`<div>
                <h1 v-html="title"></h1>
                <p v-text="message" />
                <input type="text" v-model="inputText"/>
                
                <h2>tipo checkbox</h2>
                <label>
                    <input type="checkbox" v-model="checked"/>
                    Activado
                </label>
                <h2>Peliculas</h2>
                <label v-for="(pelicula, key) in peliculas" :key="key">
                    <input :value="pelicula" type="checkbox" v-model="favoritas"/>
                    {{pelicula}}
                </label>
                <div >
                    <ul v-show="favoritas.length > 0">
                        <li v-for="(pelicula, key) in favoritas" :key="key"  v-html="pelicula"></li>
                    </ul>
                    <ul></ul>
                </div>`,
    data(){
        return{
            title: '<b>Directive v-model</b>',
            message: 'Hola desde vmodel directive',
            inputText: ' valor inicial de v-model',
            checked: false,
            favoritas: [],
            peliculas: [
                'aquaman', 'spiderman', 'batman', 'ella'
            ]
        }
            
    }
    
}
