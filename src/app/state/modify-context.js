import { createContext, useState } from "react";

const modifyContext = createContext({
  item: {},
  folderName: "",
  updateItem: (item) => {},
  updateFolderName: (folderName) => {},
});

export function ModifyContextProvider({ children }) {
  const [item, setItem] = useState({});
  const [folderName, setFolderName] = useState("");

  function updateItem(item) {
    setItem(item);
  }

  function updateFolderName(folderName) {
    setFolderName(folderName);
  }

  const ctxValue = {
    item,
    updateItem: updateItem,
    folderName,
    updateFolderName: updateFolderName,
  };

  return (
    <modifyContext.Provider value={ctxValue}>{children}</modifyContext.Provider>
  );
}

export default modifyContext;
