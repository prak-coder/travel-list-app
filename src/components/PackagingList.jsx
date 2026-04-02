import { useState } from "react";
import Item from "./Item";

function PackagingList({ items, onDeleteItem, onPackedItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
    console.log(sortedItems);
  }

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="my-10">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onPackedItem={onPackedItem}
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-3 justify-center">
        <select
          className="border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={onClearList}
          className="bg-red-400 text-white rounded px-2"
        >
          Clear list
        </button>
      </div>
    </>
  );
}

export default PackagingList;
