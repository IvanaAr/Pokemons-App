import React, {useState}  from 'react';
import './js.css'

const Js = () =>{
    const [factors, setFactors] = useState([]);
    const [num, setNum] = useState('');

     const getFactorial = (e) =>{
         e.preventDefault();
         const factors = [];
         let num = document.getElementById('number').value;
         setNum(num)
         for (let i = 2; i <= num; i++){
             if (num % i === 0 ){
                 num = num / i;
                 factors.push(i);
             }
         }
         return setFactors(factors);
     };

    return (
        <div className='main_form'>
            <h1> Factorial Calculator </h1>
            <form className='form'>
            <input type='number' id="number"/>
            <button onClick={getFactorial}>Calculate</button>
            </form>

            <h3> Prime factors of number: {num}</h3>
            <div>
                <div className="factors">
                <div className="factor">
                <div>Factors: </div>
                {factors.map((num, index) => {
                  return  <li key={index}>{num}</li>
                })}
            </div>
                <div className="factor">
                    <div>Largest prime factor: </div>
                    <li>{factors[factors.length -1]}</li>
                </div>
            </div>
            </div>
        </div>
    )
};
export default Js;
