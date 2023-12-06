import { useState } from "react";
import { Form } from "./Form";
import { PackageList } from "./PackageList";
import { Logo } from "./Logo";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function resetItem() {
    const confirmd = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmd) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        resetItem={resetItem}
      />
      <Stats items={items} />
    </div>
  );
}
