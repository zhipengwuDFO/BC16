import React from "react";
import styles from "./TeForm.module.css";
import StreamID from "./StreamID";
import Area from "./Area";
import Dates from "./Dates";
import SpawningTable from "./SpawningTable";
import UnusualCon from "./UnusualCon";
import AdditionalCmt from "./AdditionalCmt";
import Signature from "./Signature";

const TeForm = ({ items, folderName }) => {
  return (
    <>
      <div className={styles.headerBox}>
        <div className={styles.streamID}>
          <StreamID folderName={folderName} items={items} />
        </div>
        <div className={styles.areaDates}>
          <Area items={items} folderName={folderName} />
          <Dates items={items} folderName={folderName} />
        </div>
      </div>
      <SpawningTable items={items} folderName={folderName} />

      <UnusualCon items={items} folderName={folderName} />


      <AdditionalCmt items={items} folderName={folderName} />
      <Signature items={items} folderName={folderName} />
    </>
  );
};

export default TeForm;
