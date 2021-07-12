import React from "react";

const SelectCategories = ({ filterData }) => {
  return (
      <div>
<div>
    <h2>Sélectionnez un filtre</h2>
</div>
    <div className="select-categories-container">
      <input
        type="radio"
        name="category-hp-radio"
        id="all"
        defaultChecked
        onChange={filterData}
      />
      <label htmlFor="all">All</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="male"
        onChange={filterData}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="female"
        onChange={filterData}
      />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="Gryffindor"
        onChange={filterData}
      />
      <label htmlFor="Gryffindor">Gryffindor</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="Slytherin"
        onChange={filterData}
      />
      <label htmlFor="Slytherin">Slytherin</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="Hufflepuff"
        onChange={filterData}
      />
      <label htmlFor="Hufflepuff">Hufflepuff</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="Ravenclaw"
        onChange={filterData}
      />
      <label htmlFor="Ravenclaw">Ravenclaw</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="alive"
        onChange={filterData}
      />
      <label htmlFor="alive">living at the end of the books</label>
      <input
        type="radio"
        name="category-hp-radio"
        id="deceased"
        onChange={filterData}
      />
      <label htmlFor="deceased">dead at the end of the books</label>
    </div>
      </div>
  );
};

export default SelectCategories;
