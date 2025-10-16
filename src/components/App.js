import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemsData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemsData);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
      />
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
