export default function CharacterClass({ value, onClose, defaultAttrValues }) {
  return (
    <div className="modal">
      <h4>{value}</h4>
      <div className="modal-values">
        <div> Strength : {defaultAttrValues.Strength}</div>
        <div> Dexterity : {defaultAttrValues.Dexterity}</div>
        <div> Constitution : {defaultAttrValues.Constitution}</div>
        <div> Intelligence : {defaultAttrValues.Intelligence}</div>
        <div> Wisdom : {defaultAttrValues.Wisdom}</div>
        <div> Charisma : {defaultAttrValues.Charisma}</div>
      </div>
      <button className="md-close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
