import { Card, Col, Button } from 'antd';
import { useState } from 'react';

function FoodBox(props) {
    const {recepies} = props

   


    return (    <div> 
                    {recepies.map(recepie => (
                        <Col key={recepie.id}>
                            <Card
                                title={recepie.name}
                                style={{ width: 230, height: 300, margin: 10 }}
                                >
                                <img src={recepie.image} height={60} alt="food" />
                                <p>Calories: {recepie.calories}</p>
                                <p>Servings: {recepie.servings}</p>
                                <p>
                                    <b>Total Calories: {recepie.calories} * {recepie.servings} </b> kcal
                                </p>
                                <Button type="primary"> Delete </Button>
                            </Card>
                        </Col>
                    ))}
                </div>

    );
  }



  
export default FoodBox;