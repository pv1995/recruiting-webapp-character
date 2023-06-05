export default function Attribute({
  value,
  increment,
  decrement,
  attr_value,
  modifier_value,
  disable,
}) {
  return (
    <div className="att-value">
      <span>
        {value} : {attr_value}
      </span>
      <span>|</span>
      <span> Modifier : {modifier_value}</span>
      <span>
        <button
          disabled={disable}
          className="increment"
          onClick={() => increment(value)}
        >
          +
        </button>
        <button className="decrement" onClick={() => decrement(value)}>
          -
        </button>
      </span>
    </div>
  );
}
