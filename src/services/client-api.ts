import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "f6600fe6690f4f2ab38ce5b9f14d7805"
    }
})