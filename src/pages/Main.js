// import "./styles.css";
import { useState, useEffect } from "react";
// import Form from './components/Form.js'

export default function Main() {
    const [card, setCard] = useState("");
    const [validity, setValidity] = useState(null);
  
    const handleChange = (event) => {
      setCard(event.target.value);
    };
  
    const validateCard = (passedCard) => {
      let card = passedCard.split("").reverse().join("");
  
      let sum = 0;
  
      for (let i = 0; i < card.length; i++) {
        if (i % 2 !== 0) {
          let new_value = parseInt(card[i]) * 2;
  
          if (new_value >= 10) {
            let string_value = new_value.toString();
            let new_value_sum = 0;
            for (let j = 0; j < string_value.length; j++) {
              new_value_sum += parseInt(string_value[j]);
            }
            sum += new_value_sum;
          } else {
            sum += new_value;
          }
        } else {
          // console.log(card[i])
          sum += parseInt(card[i]);
        }
      }
  
      if (sum % 10 === 0) {
        // console.log("valid")
        return true;
      } else {
        return false;
        // console.log("not valid")
      }
    };
    const handleCardValidation = (event) => {
      //keeps form from refreshing itself
      event.preventDefault();
      setValidity(validateCard(card));
    };
    return (
      <>
        
  
        <div class="container">
          <form onSubmit={handleCardValidation}>
            <input
              className="card-number"
              type="text"
              onChange={handleChange}
              value={card}
            />
            <input className="submit-button" type="submit" value="Submit" />
            {card ? (
              validity ? (
                <p>valid.</p>
              ) : (
                <p>not valid.</p>
              )
            ) : (
              <p>Please Enter A Card Number</p>
            )}
          </form>
        </div>
      </>
    );
  }