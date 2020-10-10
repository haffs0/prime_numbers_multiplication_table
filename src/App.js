import React, { useState } from 'react';
import Row from './Row';
import './App.css';

const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [arraysOfPrimeNumbers, setArraysOfPrimeNumbers] = useState({
    data: [],
  })
  const [arrayOfNumbers, setArrayOfNumbers] = useState([])

  const primeNumbers = []

  const isPrime = (num) => {
    let isPrime = true;
    if (num > 1) {
      for(let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      return isPrime;
    }
  }
  const getPrimeNumber = (num) => {
    const numToUse = num -1
    for(let i = 2; primeNumbers.length <= numToUse; i++) {
      if (isPrime(i)) primeNumbers.push(i)
    }
    primeNumbersMultiplication()
    return primeNumbers
  }

  const primeNumbersMultiplication = () => {
    const arraysOfNumbers = primeNumbers.map((a1) => {
      let currentArray = []
      currentArray.push(a1)
      primeNumbers.forEach((a2) => currentArray.push(a1 * a2))
      return currentArray;
    })
    setArraysOfPrimeNumbers({data: arraysOfPrimeNumbers.data.concat(arraysOfNumbers)})
    return arraysOfNumbers
  }

  const removeItem = (index) => {
    const result = arraysOfPrimeNumbers.data.pop()
    setArraysOfPrimeNumbers({data: result})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const arrayCopy = [...arraysOfPrimeNumbers.data]
    arrayCopy.forEach((arr, i) => removeItem(i))
    const numOfPrime = parseInt(inputValue.trim(), 10)
    const result = getPrimeNumber(numOfPrime)
    setArrayOfNumbers([...result])
    setInputValue('')
  }

  const handleDisplayTable = () => {
    return(
      <table>
          <thead>
            <tr className="thead">
              {arrayOfNumbers && <th></th>}
              {arrayOfNumbers.map((prime, index) => <th key={index}>{prime}</th>)}
            </tr>
          </thead>
          <tbody>
            {arraysOfPrimeNumbers.data.map((arrayOfPrimeNum, index) => <Row key={index} primeNumber={arrayOfPrimeNum}/> )}
          </tbody>
        </table>
    )
  }
  
  return (
    <div className="container">
      <div style={{marginBottom: '20px',}}>
        <form onSubmit={handleOnSubmit}>
          <label>Please enter the number of prime numbers you want to form a multiplication table with</label><br/>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <input type="submit" value="Result"/>
        </form>
      </div>
      {arraysOfPrimeNumbers.data.length === 0 ? '' : handleDisplayTable()}
    </div>
  );
}

export default App;
