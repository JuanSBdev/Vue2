let moviesComp = {
    template : `<div>
        <h1 v-text="title"></h1>
        <img :src="cover"/>
        <p  v-text="synopsis" ></p>
        <button @click="toggleLike" v-text=" like ? 'favorita'  : 'agregar a favoritas'" ></button>
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
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'Esta descripcion no está disponible por lo tanto funciona un prop default' 

        },
        like: {
            type: Boolean,
            required: true,
            default(){
                return false
            } 
        }

    },
    methods: {

        toggleLike (){
           
            if(!this.like) {
                let movie = this.$parent.movies.find(m => m.id == this.id)
                movie.like = !this.like
                this.$parent.showLike = !this.like
                console.log('')
            }
            this.$emit('toggleLike', data)
        }
    },
    
}