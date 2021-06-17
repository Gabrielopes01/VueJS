import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-bfa11-default-rtdb.firebaseio.com/'
// axios.defaults.headers.commom['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-bfa11-default-rtdb.firebaseio.com/',
            headers: {
                get: {
                    "Authorization": 'abc123'
                }
            }
        })

        //Intercepção de pedidos ao site
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        //Intercepção de respostas do site
        Vue.prototype.$http.interceptors.response.use(res => {
            const arr = []
            for(let chave in res.data) {
                arr.push({ id: chave, ...res.data[chave] })
            }
            
            res.data = arr
            return res
        }, error => Promise.reject(error)) //Caso haja erros
    }
})