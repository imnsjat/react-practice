
const Body = ({items}) => {

    const categories = {
        electronics: [],
        skincare: [],
        clothing: []
      };
    
      items.forEach(item => {
        if (categories[item.category]) {
          categories[item.category].push(item);
        }
      });


    return(
        <>
              {Object.keys(categories).map(category => (
  <div key={category}>
    <h3>{category}</h3>
    <ul>
      {categories[category].map(item => (
        <li key={item.id}>
          ID: {item.id}, Amount: {item.amount}, Name: {item.name}
        </li>
      ))}
    </ul>
  </div>
))}
            
           
        </>


    )
}

export default Body ;