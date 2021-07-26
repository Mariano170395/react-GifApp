import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  //Para poder escribir en el input y que se hagan cambios en el state
  const handleInputChange = (e) => {
    // console.log(e.target.value) esta ruta es importante, aqui se guardan los cambios
    setInputValue(e.target.value);
  };

  //Evento con Enter
  const handleSubmit = (e) => {
    e.preventDefault(); //Hace que los cambios sean inmediatos
    console.log("submit hecho");
    if (inputValue.trim().length > 2) { //debe tener mas de dos caracteres
      setCategories((cats) => [ inputValue, ...cats]); //Hace que lo que escribas se ponga como categoria
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>{inputValue}</h1> */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};


//PropTypes

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}