import React, { use } from "react";
import styles from "./StreamID.module.css";
import { useContext, useEffect } from "react";
import modifyContext from "../../../state/modify-context";
function StreamID({ items, folderName }) {
  const format7e = folderName == "7eresultocr";
  const format4c = folderName == "4cresultocr";
  const format4h = folderName == "4hresultocr";
  const format6e = folderName == "6eresultocr";
  const format5a = folderName == "5aresultocr";
  const formatTe = folderName == "teresultocr";

  // const modifyCtx = useContext(modifyContext);
  // const updateItem = modifyCtx.updateItem;
  // const updateFolderName = modifyCtx.updateFolderName;

  // useEffect(() => {
  //   updateItem(items);
  //   updateFolderName(folderName);
  // }, []);

  const watershedCode =
    // 4C, 4H, 6E: Watershed code
    // 5A: Watershed Code
    // 7E: RAB code
    items["Watershed Code"] || items["Watershed code"] || items["RAB code"];

  const gazettedName =
    //4C,4H,6E,5A,7E:Gazetted name
    items["Gazetted name"];

  const firstLocalName =
    //4C,4H,7E :  First local name
    //5A: 1st Local name
    //6E: Local name
    items["First local name"] || items["Local name"] || items["1st Local name"];

  const secondLocalName =
    //4C, 7E: Second local name
    //4H, 6E: none
    //5A: 2nd local name
    items["Second local name"] || items["2st Local name"];

  const flowsInto =
    //4C: Flows Into
    //4H, 6E, 5A, 7E: Flows into
    items["Flows Into"] || items["Flows into"];

  return (
    <div className={styles.StreamBox}>
      <div className={styles.title}>STREAM IDENTIFICATION</div>
      <table className={styles.myTable}>
        <tbody>
          <tr>
            <td>Watershed Code:</td>
            <td className={watershedCode[1] ? "" : styles.isRed}>
              {watershedCode}
            </td>
          </tr>
          <tr>
            <td>Gazetted Name:</td>
            <td className={gazettedName[1] ? "" : styles.isRed}>
              {gazettedName}
            </td>
          </tr>
          <tr>
            <td>First Local Name:</td>
            <td className={firstLocalName[1] ? "" : styles.isRed}>
              {firstLocalName}
            </td>
          </tr>
          <tr>
            <td>Second Local Name:</td>
            <td className={secondLocalName[1] ? "" : styles.isRed}>
              {secondLocalName}
            </td>
          </tr>
          <tr>
            <td>Flows Into:</td>
            <td className={flowsInto[1] ? "" : styles.isRed}>{flowsInto}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StreamID;
