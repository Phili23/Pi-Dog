/* 
  function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }



  /* 

function handleOrderByWeigh(e) {
  console.log('y ordenado por peso minimo', e.target.value)
  /* dispatch(OrderByWeigh_Min(e.target.value)) */
 /*  e.preventDefault();
  setCurrentPage(1)
  switch (e.target.value) {
    case "DESC":
        allDogs = allDogs.sort((b, a) => {
          if (a.life_span > b.life_span) return 1;
          if (a.life_span < b.life_span) return -1;
          return 0;
        });
       
      case "ASC":
        allDogs = allDogs.sort((a, b) => {
          if (a.life_span > b.life_span) return 1;
          if (a.life_span < b.life_span) return -1;
          return 0;
        });
     
      case "weight_min_Asc":
        allDogs = allDogs.sort((a, b) => {
          if (Number(a.weight_min) > Number(b.weight_min)) return 1;
          if (Number(a.weight_min) < Number(b.weight_min)) return -1;
          return 0;
        });
        case "weight_min_Desc":
        allDogs = allDogs.sort((b, a) => {
          if (Number(a.weight_min) > Number(b.weight_min)) return 1;
          if (Number(a.weight_min) < Number(b.weight_min)) return -1;
          return 0;
        });
        
       
       
       case "life_span-Asc":
        allDogs = allDogs.sort((a, b) => {
          if (Number(a.life_span) > Number(b.life_spaan)) return 1;
          if (Number(a.life_span) < Number(b.life_span)) return -1;
          return 0;
        });
        case "life_span_Desc":
        alldogs = allDogs.sort((b, a) => {
          if (Number(a.life_span) > Number(b.life_span)) return 1;
          if (Number(a.life_span) < Number(b.life_span)) return -1;
          return 0;
        });
 
      default:
        break;
    }
  
  
  setWeight(`Ordenado ${e.target.value}`)
  } 
 */ 