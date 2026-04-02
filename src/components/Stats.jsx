function Stats({ items }) {
  if (!items.length)
    return (
      <p>
        <em>Start adding some items to your packaging list</em>
      </p>
    );
  const numItems = items.length;
  let count = 0;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="text-center p-8">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
