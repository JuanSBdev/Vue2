let movieFav = {
    template: `
    <div v-if="!show" class="movieFavWrapper">
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
        let $element = document.getElementById(`fav-${this._uid}`)
        $element.addEventListener('animationend', function () {
            vm.$emit('update:show', false)
        })
    }
}}