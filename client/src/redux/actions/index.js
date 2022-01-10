import axios from 'axios'
export const GET_DOGS="get_dogs"

export  function getDogs(){
    return async function(dispatch){
        var json=await axios.get('http://localhost:3001/Dogs')
        
    
    return dispatch({
        type:'GET_DOGS',
        payload:json.data
    })
}
}

export function filterByWeight(payload){
    return{
        type:'FILTER_BY_WEIGHT',
        payload
    }
}
export function filterByTemperaments(payload){
    console.log('yo soy get del filtro de temeprementos', payload)
    return{
        type:'FILTER_BY_TEMPERAMENTS',
        payload
    }
}

export function filterCreated(payload){
    return{
        type:'FILTER_CREATED',
        payload
    }

}


export function OrderByBreeds(payload){
    return{
        type:'ORDER_BREEDS',
        payload
    }

}

export function OrderByWeigh_Min_to_Max(payload){
     console.log('yo soy el payload de weight', payload)
    return{
        type:'ORDER_BY_WEIGHT_MIN_TO_MAX',
        payload
    } 

}

export function OrderByWeigh_Max_to_Min(payload){
    console.log('yo soy el payload de weight', payload)
   return{
       type:'ORDER_BY_WEIGHT_MAX_TO_MIN',
       payload
   } 

}

export  function getNameDogs(name){
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

export  function getTemperaments(){
    return async function(dispatch){
        var json=await axios.get('http://localhost:3001/Temperaments')
        console.log('yo soy el json del temperaments para crear el dog', json)
    
    return dispatch({
        type:'GET_TEMPERAMENTS',
        payload:json.data
    })
}
}


export  function postDogs(payload){
    return async function(dispatch){
        var json=await axios.post('http://localhost:3001/Dogs',payload)
         return json;
}
}

export function getDetail(id){
    
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
}