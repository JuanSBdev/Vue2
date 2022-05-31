let directiveIf = {
    template:`<div>
    <h3 v-if="user.permissions && !user.vip" v-html="message"> </h3>
    <h3 v-else-if="user.permissions && user.vip" v-html="messageVip"> </h3>
    <h3 v-else-if="user.permissions"  v-html="message"></h3>
    <h3 v-else v-html="messageNo"></h3>
    </div>`,
    data(){
        return{
            title: 'directiva v-if',
            message:'<b> Tiene permiso </b>',
            messageVip: 'el cliente es VIP',
            messageNo: 'No tiene permisos',
            mostrar: true,
            user: {
                permissions: 1,
                vip: 1
            }
        }
            
    }
}
