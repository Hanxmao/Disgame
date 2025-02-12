import axios from 'axios'

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"833aa126ddeb4e9bbd31731b6710b44e"
    }
})