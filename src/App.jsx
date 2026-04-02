import Form from "./components/Form";
import Logo from "./components/Logo";
import PackagingList from "./components/PackagingList";
import Item from "./components/Item";
import Stats from "./components/Stats";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems(() => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handleClearList() {
    const confirmation = window.confirm(
      "Are you sure you want to delete all items",
    );
    if (confirmation) {
      setItems([]);
    }
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
        items={items}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// function Logo() {}
// function Form() {}
// function Item() {}
// function PackagingList() {}
// function Stats() {}
