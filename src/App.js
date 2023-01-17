import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [recepies, setRecepie] = useState(foods);
  
  


  const addNewRecepie = (newRecepie) => {
    const updatedRecepie = [...recepies, newRecepie];
   

    setRecepie(updatedRecepie);
   
  }


  return (
    <div className="App">
      <FoodBox recepies={recepies}/>
      <AddFoodForm recepies={recepies} addNewRecepie={addNewRecepie} />
    </div>
  );
}

export default App;
