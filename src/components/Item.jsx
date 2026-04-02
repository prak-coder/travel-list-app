function Item({ item, onDeleteItem, onPackedItem }) {
  return (
    <li className="bg-pink-300 inline m-1.5 " key={item.id}>
      <input
        type="checkbox"
        value={item.id}
        onChange={() => onPackedItem(item.id)}
      />
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
