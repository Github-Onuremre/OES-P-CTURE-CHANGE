import React from "react";
import data from "../helper/data";

const List = ({filterData}) => {



  return (
    <>
      {filterData.map(({image,name,email,age,id}) => {

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
