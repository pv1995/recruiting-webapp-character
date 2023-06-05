/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CLASS_LIST } from "../consts.js";
import Attribute from "./Attribute";
import CharacterClass from "./CharacterClass";
import Modal from "./Modal";

function Character({ data, index, updateACharacterAttrs }) {
  const [showModal, setShowModal] = useState({
    display: false,
    content: null,
  });
  function show_default(class_name) {
    setShowModal({
      display: true,
      content: class_name,
    });
  }

  useEffect(() => {
    if (!data.isModifyAllowed) {
      window.alert("Total Attributes Cannot Be Above 70!");
    }
  }, [data.isModifyAllowed]);

  return (
    <>
      <div className="character-class">
        <h4>Character {index + 1}</h4>
        <div className="properties">
          <div className="attributes">
            <h4> ATTRIBUTES </h4>
            <ul>
              {Object.keys(data.attributes).map((key) => (
                <li key={key}>
                  <Attribute
                    value={key}
                    increment={() => updateACharacterAttrs(key, index, "add")}
                    decrement={() =>
                      updateACharacterAttrs(key, index, "subtract")
                    }
                    attr_value={data.attributes[key].attribute}
                    modifier_value={data.attributes[key].modifier}
                    disable={!data.isModifyAllowed}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="character-classes">
            {Object.keys(CLASS_LIST).map((c_name) => (
              <div
                key={c_name}
                className="class-values"
                id={c_name}
                style={{
                  backgroundColor: data.classes[c_name] ? "green" : "#282c34",
                }}
                onClick={() => show_default(c_name)}
              >
                <CharacterClass value={c_name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal.display &&
        createPortal(
          <Modal
            value={showModal.content}
            defaultAttrValues={CLASS_LIST[showModal.content]}
            onClose={() =>
              setShowModal({
                display: false,
                content: null,
              })
            }
          />,
          document.body
        )}
    </>
  );
}

export default Character;
