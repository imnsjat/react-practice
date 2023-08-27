// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Body from './components/body';
import {useState , useEffect} from 'react';


function App() {
  
  const [content , setContent]= useState({ id:'' , amount :'' , name :'', category :''});

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    const newItem = {
      id: content.id,
      amount: content.amount,
      name: content.name,
      category: content.category
    };
    setItems([...items, newItem]);

  }
  const handleInputChange = (event)=>{
    // const {id , amount , name , category} = event.target;
    const { name, value } = event.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value
    }));
    // setContent((prevContent)=>{
    //   {...prevContent , }
    // })

  }
  return (
    <>
    <Header content={content} onFormSubmit={handleFormSubmit} onChangeInput={handleInputChange}  />
    <Body items={items} />
    </>
  );
}

export default App;
