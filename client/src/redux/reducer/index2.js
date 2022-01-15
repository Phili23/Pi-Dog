const initialState={
    dogs:[],
    allDogs:[], 
    temperaments:[], 
    detail:[],
    filter:[]
  
}

export default function rootReducer(state=initialState,action){
  switch (action.type){
      case "GET_DOGS":
          return{
              ...state,
              dogs:action.payload,
              allDogs:action.payload
          }
          case 'ORDER_BREEDS':
            const orderName = action.payload === 'asc' ?
          state.dogs.sort(function(a, b) {
              if(a.name > b.name) {
                  return 1;
              }
              if(b.name > a.name) {
                  return -1;
              }
              return 0;
          }) :
          state.dogs.sort(function(a, b) {
              if(a.name > b.name) {
                  return -1;
              }
              if(b.name > a.name) {
                  return 1;
              }
              return 0;
          });
          return {
              ...state,
              dogs: orderName
          }
             


              case 'FILTER_BY_TEMPERAMENTS':


                return{
                  ...state,
                  dogs: state.dogs.filter(dogs => dogs?.Temperament?.includes(action.payload.temperaments.toLowerCase()))
                }
              /*  
               var dogsF = state.allDogs; // siempre me traigo todos los dogs del estado inmutable
               var tempFilter = [];
         
               if (action.payload === "All") {
                 tempFilter = dogsF;
               } else {
                 for (let i = 0; i < dogsF.length; i++) {
                   if (dogsF[i].temperament) {
                     var temp = dogsF[i].temperament;
                     if (temp.includes(action.payload)) {
                       tempFilter.push(dogsF[i]);
                     }
                   }
                 }
               }
               return {
                ...state,
                dogs: tempFilter //guardo los dogs filtrados en el estado filtrado, no toco allDogs
              };
                  */ 
              
              /* https://github.com/Keltuzad29/PI-DOGS-FT15A/blob/main/client/src/reducer/index.js */
     
                  /* 
                    case 'ORDER_BY_WEIGHT_MiN_TO_MAX':
                      return{
                        ...state,
                         dogs:action.payload, 
                       /*  allDogs:action.payload */
                
                      /*  case 'ORDER_BY_WEIGHT_MAX_TO_MIN':
                  

                        return{
                          ...state,
                          dogs:action.payload,
                           /* allDogs:action.payload  
                      }  */
                 case 'GET_NAME_DOGS':
                          return{
                              ...state,
                              dogs:action.payload,
                            }
                  case 'GET_TEMPERAMENTS':
                   console.log('yo soy el action.payload del reducer',action.payload)
                              return{
                                  ...state,
                                  temperaments:action.payload,
                                }
                                
                  case 'POST_DOGS':
                    console.log('yo soy el payload del pots', action.payload)
                           return{
                                ...state,
                                 }
                  case 'GET_DETAILS':
                    
                    return{
                      ...state, 
                      detail:action.payload
                    }            
                  default:
                          return state;
               }
             }   
                 
               


        /*      https://github.com/rgcivit/PI-videogames/blob/main/client/src/componentes/Card.jsx */