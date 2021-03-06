Vue.component ('prop-comp',{
    template:`
    <div class="container">
        <h1> Peliculas Props</h1>
        <div class="row" >
            <div class="col-12 col-sm-6 col-lg-3 center" v-for="(movie, key) in movies" :key="key">
                <movieComp 
                v-if="!showLike"
                :key="key"
                :id="movie.id"
                :synopsis="movie.synopsis"
                :cover="movie.cover"
                :title="movie.title"
                :like ="movie.like"
                @toggleLike = "onToggleLike"/>
            </div>
        </div>

            <movieFav  v-if="showLike" @hideFav="onHideFav" class="movieFav"></movieFav>
    </div>`,  
    data(){
        return {
            movies: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://i.pinimg.com/originals/b1/6f/43/b16f43aa809d644e45e056eb64eaf45e.jpg',
                    like: false
                }
            ],
            showLike: false
        }
    },
    components: {
        movieComp, movieFav,

    },
    methods: {
        onToggleLike(data){
            let movieLike = this.movies.find( movie => movie.id == data.id )
            movieLike.like = data.like
            //this.showLike = data.like

            //alert( `${  movieLike.like ? movieLike.title + ' ' +'agregada a favoritos' : movieLike.title + ' ' + 'quitada de favoritos' } ` )
        },
        onHideFav (show){
            this.showLike = show
        },
    }
    } )