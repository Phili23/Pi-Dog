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
            case "FILTER_BY_WEIGHT":
                if(action.payload === 'Asc'){
                    return{
                      ...state,
                      dogs: state.dogs.sort((a,b) => a.weight[0] - b.weight[0])
                    }
                  } else if(action.payload === 'Desc') {
                    return{
                      ...state,
                      dogs: state.dogs.sort((a,b) => b.weight[0] - a.weight[0])
                    } 
                  } else {
                      return {
                        ...state, 
                        dogs:[...state.dogs].sort((a,b) =>  a.name.localeCompare(b.name))
                      }
                  }
                case 'FILTER_CREATED':
                    
             
                  const createdFilter = action.payload === "created" ? state.allDogs.filter(e => e.created) : 
                 state.allDogs.filter(e => !e.created) ;
                  return {
                  ...state,
                  dogs:  action.payload === 'All' ? state.allDogs : createdFilter
                  }

                case 'ORDER_BY_BREEDS':
                  
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
                
                    case 'ORDER_BY_WEIGHT':
                      let sortedArrWeight = action.payload === 'asc' ? 
                      state.dogs.sort(function (a, b){
                        // let num1 = a.weight_metric.split(" - ");
                        // let num2 = b.weight_metric.split(" - ");
                          return b.weight_min - a.weight_min;
                      }) :
                      state.dogs.sort(function(a, b){
                        // let num1 = a.weight_metric.split(" - ");
                        // let num2 = b.weight_metric.split(" - ");
                          return a.weight_min - b.weight_min;
                      })
                      return{
                      ...state,
                      dogs: sortedArrWeight
                      }
                   case 'GET_NAME_DOGS':
                            return{
                                ...state,
                                dogs:action.payload,
                              }
                    case 'GET_TEMPERAMENTS':
                     
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

