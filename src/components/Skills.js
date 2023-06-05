export default function Skills({
  value,
  increment,
  decrement,
  attribute,
  skill_value,
  modifier_value,
  disable,
}) {
  return (
    <div className="skill-value">
      <span>
        {value} : {skill_value}
      </span>
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
      <span>
        {" "}
        {attribute} Modifier : {modifier_value}
      </span>
    </div>
  );
}
