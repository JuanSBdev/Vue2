let directiveFor = {
    template:`<div>
    <h2 v-if="mostrar" v-html="title"></h2>
    <h2 v-html="message"></h2>
    <h3>Lista con array</h3>
    <ul>
        <li v-for="(color, index) in list" :key="index" v-text="color"></li>
    </ul>
    <h3>Lista con objetos</h3>
    <ul>
    <li v-for="(item,  key, index) in object_list" :key="index" >
    {{ key }}: {{item}}
    </li>
</ul>
<h2>Lista de array con objetos</h2>
<ul>
    <li v-for="(item,  index) in other_list" >
    nombre: {{item.name}} <br/> edad: {{ item.edad}} <br/> Sobrenombre: {{ item.nick}}
    </li>
</ul>
    </div>`,
    data(){
        return{
            title: '<b>Desde For</b>',
            message: 'From For',
            list: [ 'red', 'rot', 'rouge', 'rojo', 'vermelho'],
            object_list : {
                name: 'Shawn',
                last_name: 'jeremis',
                nick: 'gg',
            },
            other_list:[
                {
                    name:'Jose',
                    surname: 'peprez',
                    edad:'23',
                    nick: 'asd'
                },
                {
                    name:'Jais',
                    surname: 'prez',
                    edad:'25',
                    nick:'asd2'
                },
                {
                    name:'Jace',
                    surname: 'pepr',
                    edad: 32
                }
            ]
        }
            
    }
}
