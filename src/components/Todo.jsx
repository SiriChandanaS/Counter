import React from 'react'
import { useState } from 'react';
const Todo = () => {

    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setDisplayValue([...displayValue, inputValue]);
        setInputValue('');
    };


    return (

        <div>
            <div className='todoli'>
                <h1>To-Do list</h1>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleButtonClick}>Display</button>
                <br></br><br></br>
                <div style={{}} id='tabledata'>
                    <table style={{ border: "2px solid black", marginLeft: "auto", marginRight: "auto" }}>
                        <th>
                            <tr>
                                <th style={{ border: "2px solid black" }}>Index</th>
                            </tr>
                        </th>
                        <th>
                            <tr style={{ textAlign: "center", width: "100%" }}>
                                <th style={{ border: "2px solid black", marginLeft: "auto", marginRight: "auto" }}>Data</th>
                            </tr>
                        </th>

                        <tbody>
                            {displayValue.map((item, index) => (
                                <tr key={index} >
                                    <td style={{ border: "2px solid violet" }}>{index + 1}</td>
                                    <td style={{ border: "2px solid green" }}>{item}</td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                

            </div>
        </div>
    )
}

export default Todo