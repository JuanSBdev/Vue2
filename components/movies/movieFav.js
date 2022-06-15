let movieFav = {
    template: `
    <div v-show="show" class="movieFavWrapper">
        <div :id = "'fav-'+ _uid"  >
        </div>
    </div>
    `,
    props: {
        show: {
            type: Boolean,
            default () {
                return false
            }
        },

    mounted (){
        let vm = this
        let $element = document.getElementById(`fav-${this._uid}` )
        console.log($element)

        $element.addEventListener('animationend', function(){
            vm.$emit('hideFav', false)
        })
    }
}}