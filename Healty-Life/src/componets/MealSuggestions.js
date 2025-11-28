import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./MealSuggestions.css"

function MealSuggestionsPage() {
  const location = useLocation();
  const { age, gender, weight, height, activityLevel, calorieNeeds } = location.state || {};
  const [responseData, setResponseData] = useState(null); 
  if (!age || !gender || !weight || !height || !activityLevel || !calorieNeeds) {
    return (
      <div>
        <h2>Meal Suggestions</h2>
        <p>Error: Missing or invalid data</p>
      </div>
    );
  }

  const msg = `Generate meal suggestions that uses all the available calories for a full day tailored to a user's profile and make sure to put every items with there calories: Age: ${age}, Gender: ${gender}, Weight: ${weight}, Height: ${height}, Activity Level: ${activityLevel}, Calorie Needs: ${calorieNeeds} calories/day Breakfast , recipe name , recipe then Morning Snack , recipe name , recipe then  Lunch, recipe name , recipe then Afternoon Snack, recipe name , recipe then Dinner  recipe name , recipe then Evening Snack recipe name , recipe . the result of this will be outputed in one <p> tag "jsx react js"in so make sure to make it look good i have 
   .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
  
    h3 {
      color: #333;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  
    ul {
      list-style: none;
    }
    
    li {
      margin-bottom: 10px;
    }
    
   
    .total-calories {
      font-weight: bold;
      color: #E91E63; 
      margin-top: 20px;
    }
    
   
    .calorie-info {
      font-weight: bold;
      color: #009688; 
    }
     `;

  function send(msg) {
    fetch('http://127.0.0.1:5000/process-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: msg
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response from server:', data);
      setResponseData(data.content); 
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  }
  

  return (
    <div>
      <input type='button' onClick={() => send(msg)} value="Click me" />
      <div className='display'>
      <div className='Main-Container'>
        <div dangerouslySetInnerHTML={{ __html: responseData }} />
      </div>
      </div>
    </div>
  );
}

export default MealSuggestionsPage;
