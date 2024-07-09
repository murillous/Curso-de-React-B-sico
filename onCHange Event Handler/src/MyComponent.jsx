// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of a input changes

import React, {useState} from "react";

const style = {width: "30px"}

function MyComponent(){
    
    const [name, setName] = useState("Convidado");
    const [quantity, setQuantity] = useState(0);
    const [text, setText] = useState("");
    const [payment, setPayment] = useState("");
    const [status, setStatus] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleTextChange(event){
        setText(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    
    function hanldeStatusChange(event){
        setStatus(event.target.value)
    }
    
    return(<div>

                <input type="text" value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input type="number" value={quantity} onChange={handleQuantityChange} style={style} />
                <p>Quantity: {quantity}</p>

                <textarea value={text} onChange={handleTextChange}
                placeholder="Instruções para entrega"/>
                <p>Comment: {text}</p>

               

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select a payment</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">GiftCard</option>
                </select>
                <p>Payment: {payment}</p>
                
                <label>
                    <input type="radio" value="pickUp"
                                checked={status === "pickUp"}
                                onChange={hanldeStatusChange}/>
                    
                    Pick Up
                </label><br/>
                
                <label>
                    <input type="radio" value="delivered"
                            checked={status === "delivered"}
                            onChange={hanldeStatusChange}/>
                    Delivered
                </label>
        
        </div>);
}

export default MyComponent;