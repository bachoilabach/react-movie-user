import axios from '../axious';

const getAllDirectors = (id)=>{
    return axios.get(`/api/director/get-all-directors?id=${id}`,{
        directorID: id
    })
}

export {
    getAllDirectors
}