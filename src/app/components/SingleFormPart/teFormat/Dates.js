import React from "react";
import styles from "./Dates.module.css";
import { useContext, useEffect } from "react";
import modifyContext from "../../../state/modify-context";
const Dates = ({ items, folderName }) => {
  const format7e = folderName == "7eresultocr";
  const format4h = folderName == "4hresultocr";
  const format4c = folderName == "4cresultocr";

  // const modifyCtx = useContext(modifyContext);
  // const itemCtx = modifyCtx.item;
  // const folderNameCtx = modifyCtx.folderName;
  // console.log("itemCtx", itemCtx);
  // console.log("folderNameCtx", folderNameCtx);
  const dates =
    // 5A, 6E: Dates of inspection
    //4C: Date of inspection   array
    //4H: Dates of Inspection    array
    //7e: Inspection dates
    items["Dates of inspection"] ||
    items["Dates of Inspection"] ||
    items["Inspection dates"] ||
    items["Date of inspection"];

  const datesComment =
    //Dates of inspection (1)
    items["Dates of inspection (1)"];

  
  //Start date

  //End date

  return (
    <div className={styles.StreamBox}>
      <div className={styles.title}>DATES OF INSPECTION</div>
      <div className={styles.dates}>
        <>
          <div>
            {dates[0]
              ? dates.map((date, key) => (
                  <span key={key}>
                    <span className={date.Month[1] ? "" : styles.isRed}>
                      {date.Month[0]}
                    </span>
                    /
                    <span className={date.Day[1] ? "" : styles.isRed}>
                      {date.Day[0]}
                    </span>{" "}
                    <br />
                  </span>
                ))
              : ""}
          </div>
          <div className={datesComment[1] ? "" : styles.isRed}>
            {datesComment[0]}
          </div>
        </>
      </div>
    </div>
  );
};

export default Dates;
