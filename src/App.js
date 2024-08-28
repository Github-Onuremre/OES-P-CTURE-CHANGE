import React, { useState } from 'react';
import List from './components/List';
import data from './helper/data';
function App() {

const[number,setNumber]=useState(1);
const [filterData, setFilterData]=useState( data.slice(number -1, +5));


const prevHandler=()=>{
if(number>4){

const newNumber=number-5

setNumber(newNumber);

setFilterData(data.slice(newNumber -1,newNumber+4));

}}

const nextHandler=()=>{
if(number<16){
const newNumber=number+5
  setNumber(newNumber);

// console.log("tıklandı");

  setFilterData(data.slice(newNumber-1, newNumber+4));
}

};

// const filterData= data.slice(number -1, +5)
 
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {number} to {number+4})
        </h5>
        <List filterData={filterData}/>
        <div className='btns'>
          <button onClick={prevHandler} disabled={number<=5}>Prev</button>
          <button onClick={nextHandler} disabled={number>=16}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
