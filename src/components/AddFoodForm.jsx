import { useState } from "react";
import { Divider, Input } from 'antd';


function AddFoodForm(props) {
    const {recepies, addNewRecepie} = props

    const [name, setName] = useState(" ");
    const [image, setImage] = useState(" ");
    const [calories, setCalories] = useState(" ");
    const [servings, setServings] = useState(" ");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecepie = {name, image, calories, servings}
        addNewRecepie(newRecepie)
        setName("");
        setImage("");
        setCalories("");
        setServings("");
        
    }

  return (
    <form onSubmit={ handleSubmit }>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />

      <label>Image</label>
      <Input value={image} type="text" onChange={(event) => setImage(event.target.value)} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={(event) => setCalories(event.target.value)} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={(event) => setServings(event.target.value)} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;