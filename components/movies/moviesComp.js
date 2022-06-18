let movieComp = {
    template : `<div class="card">
                    <img :src="cover" class="card-img-top"/>
                        <div class="card-body">
                            <h1 class="card-title" v-text="title"></h1>

                            <p class="card-text" v-text="synopsis" ></p>
        
                            <button class="btn"
                            :class="{
                            'btn-dark': !like,
                            'btn-light': like
                                    }"
                            @click="toggleLike" v-text=" like ? 'favorita'  : 'agregar a favoritas'" ></button>
                        </div>
                </div>`,
    data(){
        return {
            className: {
                'btn-dark': true,
                'btn-like': false
            }
        }
    },
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
                this.$parent.showLike = this.like
                console.log('')
            }
            this.$emit('toggleLike', data)
        }
    },
    
}