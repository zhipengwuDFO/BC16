import React, { useState } from "react";
import styles from "./EditableField.module.css";

const EditableField = ({ fieldName, fieldValue, isRed, handleChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  let stylingClass = "";
  switch (isRed) {
    case true:
      stylingClass = styles.isRed;
      break;
    case false:
      // No additional styling for false
      break;
    case 2:
      stylingClass = styles.isGreen;
      break;
    default:
      // Handle other cases if needed
      break;
  }
  return (
    <td
      className={stylingClass}
      onDoubleClick={() => setIsEditing(true)}
      onBlur={() => {
        setIsEditing(false);
      }}
    >
      {isEditing ? (
        <input
          type="text"
          name={fieldName}
          defaultValue={fieldValue}
          onBlur={() => setIsEditing(false)}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <span className={stylingClass}>{fieldValue}</span>
      )}
    </td>
  );
};

export default EditableField;
