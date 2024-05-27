import axios from '../axious';

const getAllActors = (id)=>{
    return axios.get(`/api/actor/get-all-actors?id=${id}`,{
        actorID: id
    })
}

export {getAllActors}