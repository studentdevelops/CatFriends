import React from 'react';
const Cards = ({ img, name, email }) => {
  return (
    <div className="card">
      <div> <img src={`https://robohash.org/${img}?set=set4`} alt={`cat ${img}`} width="300" height="400"></img> </div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default Cards;
