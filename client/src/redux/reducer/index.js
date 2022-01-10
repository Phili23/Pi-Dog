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
                case 'FILTER_CREATED':
                  const allDogs=state.allDogs   
                  const createdFilter = action.payload === 'created' ? state.allDogs.filter(i => i.created) : 
                  state.allDogs.filter(el => !el.created)
                  return {
                      ...state,
                      dogs: action.payload === 'all' ? state.allDogs : createdFilter
                  }

                case 'FILTER_BY_TEMPERAMENTS':
                  /* https://github.com/SebastianDelescabe/PI-Videogames-FT15a/blob/main/client/src/components/Filters/GenreFilter.jsx */
                 /*  https://github.com/nelsonosorio3/PI-Doggo/blob/b3886666f82fa0d69c3c07bf7fcb860ed8c7020a/client/src/reducer/index.js */
                 /* const createdFilter2 = action.payload === 'temperament' ? state.allDogs.filter(i => i.created) : state.allDogs.filter(i => !i.created) */
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
                  dogs: tempFilter, //guardo los dogs filtrados en el estado filtrado, no toco allDogs
                };
                              
                    case 'ORDER_BY_WEIGHT_MIN_TO_MAX':
                      const orderName2 = action.payload === 'asc' ?
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
                          dogs: orderName2
                      }

                      case 'ORDER_BY_WEIGHT_MAX_TO_MIN':
                       return{
                          ...state,
                          dogs: [...state.dogs].reverse((element1, element2) => (Number(element2.weight.split("-")[0]) - Number(element1.weight.split("-")[0])))
                        } 
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

