import React, { useState } from "react";

const InputSearch = ({ setSearchLocation }) => {
  const searchLocation = (e) => {
    e.preventDefault();
    setSearchLocation(e.target.children[0].value);
  };

  const click = () => {};

  return (
    <form onSubmit={searchLocation}>
      <input type="text" className="bars" placeholder="Ingrese Numero del ID" />
      <button className="buton">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default InputSearch;
