let moviesComp = {
    template : `<div>
        <h1 v-text="title"></h1>
        <img :src="cover"/>
        <p v-text="synopsis"></p>
        <hr/>
    </div>`,
    props:{
        id: {
            type: Number,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        cover: {
            type: Image,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'Esta descripcion no está disponible por lo tanto funciona un prop default' 

        }

    }
    /*
    [
        'id',
        'synopsis',
        'title',
        'cover',
    ]
    */
}