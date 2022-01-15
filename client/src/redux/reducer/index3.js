const initialState={
    dogs:[],
    allDog:[], 
    temperaments:[], 
    detail:[],
  }
  
  export default function rootReducer(state=initialState,action){
  switch (action.type){
      case "GET_DOGS":
          return{
              ...state,
             dogs:action.payload,
             allDog:action.payload
         }
  
          case 'FILTER_BY_TEMPERAMENTS':
            const allDog = state.allDog;
            const filteredDogs = allDog.filter((el) =>
              el.Temperament?.includes(action.payload)
            );
            case 'FILTER_CREATED':
              const allDogsCreated = state.allDog;
              const createdFilter = action.payload === "created" ? allDogsCreated.filter(e => e.created) : 
              allDogsCreated.filter(e => !e.created) ;
              return {
              ...state,
              dogs: action.payload === 'All' ? allDogsCreated : createdFilter 
            };
      
          case 'ORDER_BREEDS':
       
            if (action.payload === 'weight_min') {
              let sortedArr  = state.dogs.sort(function (a,b) {
                  if(a.weight_min > b.weight_min) {
                      return -1;
                  }
                  if(b.weight_min > a.weight_min) {
                      return 1;
                  }
                  return 0;
              }) 
              return {
                  ...state,
                  dogs: sortedArr
              }            
          } else {
              let sortedArr  = action.payload === 'asc' ?
                  state.dogs.sort(function (a,b) {
                  if(a.name > b.name) {
                      return 1;
                  }
                  if(b.name > a.name) {
                      return -1;
                  }
                  return 0;
                  }) :
                  state.dogs.sort(function (a,b) {
                  if(a.name > b.name) {
                      return -1;
                  }
                  if(b.name > a.name) {
                      return 1;
                  }
                  return 0;
                  })
              return {
                  ...state,
                  dogs: sortedArr
              }
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
                    
                  case 'ORDER_WEIGHT':
                    
  
                  default:
                          return state;
               }
             }   
           