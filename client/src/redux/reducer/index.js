const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  detail: [],
  reset:[],
  currentPage1:[]

}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload
      }
    //ordenamientos ALfaabetico
    case 'ORDER_BREEDS':
      const orderName = action.payload === 'Asc' ?
        state.dogs.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
          }
          return 0;
        }) :
        state.dogs.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      return {
        ...state,
        dogs: orderName
      }
    //Ordenamiento por años de vida
    case 'ORDER_LIFE':

      const orderNameL = action.payload === 'Asc' ?
        state.dogs.sort(function (a, b) {
          if (a.life_span.toLowerCase() > b.life_span.toLowerCase()) {
            return 1;
          }
          if (b.life_span.toLowerCase() > a.life_span.toLowerCase()) {
            return -1;
          }
          return 0;
        }) :
        state.dogs.sort(function (b, a) {
          if (a.life_span.toLowerCase() > b.life_span.toLowerCase()) {
            return -1;
          }
          if (b.life_span.toLowerCase() > a.life_span.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      console.log('yo soy del heght', orderNameL)
      return {
        ...state,
        dogs: orderNameL
      };
    //ordenamiento por peso

    //ordenamiento por estatura
    case 'ORDER_BY_HEIGHT':

      const orderNameH = action.payload === 'Asc' ?
        state.dogs.sort(function (a, b) {
          if (a.height_min.toLowerCase() > b.height_min.toLowerCase()) {
            return 1;
          }
          if (b.height_min.toLowerCase() > a.height_min.toLowerCase()) {
            return -1;
          }
          return 0;
        }) :
        state.dogs.sort(function (a, b) {
          if (a.height_min.toLowerCase() > b.height_min.toLowerCase()) {
            return -1;
          }
          if (b.height_min.toLowerCase() > a.height_min.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      return {
        ...state,
        dogs: orderNameH
      };

    //ordenamiento por creados
    case 'FILTER_CREATED':
      /* const allDogs=state.allDogs  */
      const createdFilter = action.payload === 'created' ? state.allDogs.filter(i => i.created) :
        state.allDogs.filter(el => !el.created)
      return {
        ...state,
        dogs: action.payload === 'All' ? state.allDogs : createdFilter
      }

    case 'FILTER_BY_TEMPERAMENTS':
      var dogsF = state.allDogs; // 
      var tempFilter = [];

      if (action.payload === "All") {
        tempFilter = dogsF;
      } else {
        for (let i = 0; i < dogsF.length; i++) {
          if (dogsF[i].Temperament) {
            var temp = dogsF[i].Temperament;
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


    case 'ORDER_BY_WEIGHT_ASC':
      let sortedArrWeight = action.payload === 'Asc' ?
        state.dogs.sort(function (a, b) {
          return a.weight_min - b.weight_min;
        }) : state.dogs.sort(function (a, b) {
          return b.weight_min - a.weight_min;
        })
      return {
        ...state,
        dogs: sortedArrWeight
      }

    case 'GET_NAME_DOGS':
      return {
        ...state,
        dogs: action.payload,
      }
    case 'GET_TEMPERAMENTS':

      return {
        ...state,
        temperaments: action.payload,
      }

    case 'POST_DOGS':

      return {
        ...state,
      }
    case 'GET_DETAILS':

      return {
        ...state,
        detail: action.payload
      }

    case 'DELETE_DOGS':
      console.log('yo soy el delete,',action.payload)
      return {
        ...state
      }

       case 'NEXT_PAGE':
        return {
          ...state,
          dogs:action.payload
         
        };
  
      case 'PREV_PAGE':
        return {
          ...state,
          dogs:action.payload
          
        }
              case 'RESET':
        return {
          ...state,
          dogs: [],
        
        };
    default:
      return state;
  }
}


