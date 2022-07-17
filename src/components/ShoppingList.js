import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddElement }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(userInput){
    setSearchTerm(userInput)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) 


  function handleNewItemSubmit(data){
    onAddElement(data)
  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItemSubmit} />
      <Filter onCategoryChange={handleCategoryChange} entry={searchTerm} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
