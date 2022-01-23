import axios from 'axios'
export const GET_DOGS = "get_dogs"

/* export  function getDogs(){
    return async function(dispatch){
        var json=await axios.get('http://localhost:3001/Dogs')
       
    return dispatch({
        type:'GET_DOGS',
        payload:json.data
    })
}
} */

export function getDogs() {
    return async function (dispatch) {
        return axios
            .get('http://localhost:3001/Dogs')
            .then((res) => {
                dispatch({
                    type: 'GET_DOGS',
                    payload: res.data
                });
            })
            .catch((err) => {
                return err;
            });
    };
}


export function filterByWeight(payload) {
    return {
        type: 'FILTER_BY_WEIGHT',
        payload
    }
}
export function filterByTemperaments(payload) {
    return {
        type: 'FILTER_BY_TEMPERAMENTS',
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }

}


export function OrderByBreeds(payload) {
    return {
        type: 'ORDER_BREEDS',
        payload
    }

}

export function OrderByWeigh_Asc(payload) {
    return {
        type: 'ORDER_BY_WEIGHT_ASC',
        payload
    }

} 

/* export function OrderByWeigh_Max_to_Min(payload) {
    /* console.log('yo soy el payload de weight', payload) 
    return {
        type: 'ORDER_BY_WEIGHT_MAX_TO_MIN',
        payload
    }
   
} */

export function OrderByHeight(payload) {
    return {
        type: 'ORDER_BY_HEIGHT',
        payload
    }

}

/* export  function getNameDogs(name){
    return async function(dispatch){
        try{
        var json=await axios.get('http://localhost:3001/Dogs?name='+ name)
    
    return dispatch({
        type:'GET_NAME_DOGS',
        payload:json.data
    })
}catch(error){
    console.log(error)
}
}
}
 */
export function getNameDogs(name) {
    return function (dispatch) {
        return axios
            .get('http://localhost:3001/Dogs?name=' + name)
            .then((res) => {
                dispatch({
                    type: 'GET_NAME_DOGS'
                    , payload: res.data
                });
            })
            .catch((err) => {
                return err;
            });
    };
}




export function getTemperaments() {
    /*  return async function(dispatch){
         var json=await axios.get('http://localhost:3001/Temperaments')
         /* console.log('yo soy el json del temperaments para crear el dog', json) */
    /*
    return dispatch({
        type:'GET_TEMPERAMENTS',
        payload:json.data
    })
}
} */

    return function (dispatch) {
        return axios
            .get("http://localhost:3001/Temperaments/")
            .then((res) => {
                dispatch({
                    type: 'GET_TEMPERAMENTS',
                    payload: res.data
                });
            })
            .catch((err) => {
                return err;
            });
    };
}



export function postDogs(payload) {
    return async function (dispatch) {
        var json = await axios.post('http://localhost:3001/Dogs', payload)
        return json;
    }
}



/* export function getDetail(id){
    
    return async function(dispatch){
        try{
        var json=await axios.get('http://localhost:3001/Dogs/'+id)
        console.log('yo soy el json de detail', json)
     return dispatch({
        type:'GET_DETAILS',
        payload:json.data
    })
}catch(error){
    console.log(error)
}
}
} */

export function getDetail(id) {
    return function (dispatch) {
        axios
            .get('http://localhost:3001/Dogs/' + id)
            .then((res) => {
                dispatch({
                    type: 'GET_DETAILS'
                    , payload: res.data
                });
            })
            .catch((err) => {
                return err;
            });
    };
}


export function byOrderLife(payload) {
    return {
        type: 'ORDER_LIFE',
        payload
    }
}

/* export function byOrderWeight(payload) {
    return {
        type: 'ORDER_WIFE',
        payload
    }
} */

export function deleteDog(id) {
    return function (dispatch) {
        axios
            .get('http://localhost:3001/Dogs/delete/' + id)
            .then((res) => {
                dispatch({
                    type: 'DELETE_DOGS'
                    , payload: res.data
                });
            })
            .catch((err) => {
                return err;
            });
    };
}


export function reset() {
    return {
        type: 'RESET'
    }
}