import axios from "axios";

const livrosAPI = axios.create({baseURL: "http://localhost:1980/livros"})

function getLivros() {
    const response = livrosAPI.get('/')

    return response.data

}

export{
    getLivros,
}