
Vue.component ('hello-1', {
    template:`<header>
            <ul>
                <li >
                    <a href="login.html" class="btn" >

                        <button class=" btn " style="background-color: transparent ;" alt="log-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            <i class="bi bi-person-circle">Cuenta</i>

                    </button>
                    </a>
                </li>
                <li>
            </ul>
    </header>`,
    data(){
        return{
            title: 'Hola desde Vue hello',
            message: 'mensaje heo' 
        }
            
    }
})

