let movieFav = {
    template: `
        <div v-show="show" class="movieFav-wrapper">
            <div :id="'fav-'+ _uid" class="movieFav">
                
            </div>
        </div>
    `,
    props: {
        show: {
            type: Boolean,
            default () {
                return true
            }
        },
        mounted(){
            let vm = this
            let $element = document.getElementById(`fav-${this._uid}`)
            $element.addEventListener('animationend', function() {
                vm.$emit('update:show', false)
            })
        }
    
},
    

}