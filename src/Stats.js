export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <fotter className="stats">
      <em>
        {percentage === 100
          ? "Ready to go!!"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </fotter>
  );
}
