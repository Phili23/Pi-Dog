const initialState={
    dogs:[],
    allDogs:[], 
    temperaments:[], 
    detail:[]
  
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
              const orderWeight = action.payload === 'asc' ?
            
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
              console.log('yos oy order weig del reducer',orderWeight)
              return {
                  ...state,
                  dogs: orderWeight
              }
                case 'FILTER_CREATED':
                    
                  const createdFilter = action.payload === 'Created' ? state.allDogs.filter(i => i.created) : 
                  state.allDogs.filter(i => !i.created)
                  return {
                      ...state,
                      dogs: action.payload === 'All' ? state.allDogs : createdFilter
                  }

                case 'FILTER_BY_TEMPERAMENTS':
                  /* https://github.com/SebastianDelescabe/PI-Videogames-FT15a/blob/main/client/src/components/Filters/GenreFilter.jsx */
                 /*  https://github.com/nelsonosorio3/PI-Doggo/blob/b3886666f82fa0d69c3c07bf7fcb860ed8c7020a/client/src/reducer/index.js */
                  
                
                 return{
                  ...state,
                  dogs: state.allDogs.filter(allDogs => allDogs?.temperaments?.includes(action.payload.temperament))
                }
         


                
                    case 'ORDER_BY_WEIGHT_MIN_TO_MAX':
                      return{
                        ...state,
                        dogs: [...state.dogs].sort((element1, element2) => (Number(element1.weight.split("-")[0]) - Number(element2.weight.split("-")[0])) )
                      }

                      case 'ORDER_BY_WEIGHT_MAX_TO_MIN':
                       return{
                          ...state,
                          dogs: [...state.dogs].sort((element1, element2) => (Number(element2.weight.split("-")[0]) - Number(element1.weight.split("-")[0])))
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

