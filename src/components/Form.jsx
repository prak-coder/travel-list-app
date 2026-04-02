import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const arr = Array.from({ length: 20 }, (_, i) => i + 1);

  function handleSubmit(e) {
    e.preventDefault();
    //no descrip no item to be added
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItems(newItem);
    // console.log(items);
    //intial values
    setDescription("");
    setQuantity(1);
  }
  return (
    <form
      className="flex bg-amber-300 p-3 gap-2 justify-center"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 😊 Trip?</h3>
      <select
        className="border-white bg-amber-50 rounded-full"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {arr.map((n) => (
          <option value={n} key={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item.."
        className="bg-amber-50 rounded-full"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button className="bg-blue-300 p-2 rounded-2xl">Add</button>
    </form>
  );
}

export default Form;
