const initialState={
    dogs:[],
    allDogs:[]
  
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
                    
                    console.log('soy el array de reducer',state.dogs)
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
                    console.log('yo soy order de reducer',orderName)
                    return {
                        ...state,
                        dogs: orderName
                    }
                
                    case 'ORDER_BY_WEIGHT':
                        console.log('yo soy el payload de reducer weight',action.payload)
                        if(action.payload === 'asc'){
                            return{
                              ...state,
                              dogs: state.dogs.sort((a,b) => a.weight[0] - b.weight[0])
                            }
                          } else if(action.payload === 'desc') {
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

                          case 'GET_NAME_DOGS':
                            return{
                                ...state,
                                dogs:action.payload,
                              }
                        
             default:
                 return state;
                    }


                }   

