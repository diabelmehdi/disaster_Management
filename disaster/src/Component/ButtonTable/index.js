import React, { useEffect, useState } from "react";
import "./Style.css"
import { TableAll } from "../TableAll";
import allData from "../TableAll/allData";
import allColumns from "../TableAll/allColumns";
import victimsColumns from "../TableAll/victimsColumns";
import sosColumns from "../TableAll/sosColumns";
import VictimService from "src/ApiService/VictimService";
import SosService from "src/ApiService/SosService";




export const ButtonTable = (props) => {
  const [buttonClicked, setButtonClicked] = useState("Type of Emergency");
  const [tableName, setTableName] = useState(allData);
  const [sosTable, setSosTable] = useState([]);
  const [victimTable, setVictimTable] = useState([]);
  const [tableColumns, setTableColumns] = useState(allColumns);

  const buttonPressed = (e) => {
    switch (e.target.name) {
      case "All":
        setButtonClicked(props.messageTo);
        setTableColumns(allColumns);
        setTableName(allData);
        break;
      case "Victims":
        setButtonClicked("Victims");
        setTableColumns(victimsColumns);
        setTableName(victimTable);
        break;
      case "SOS":
        setButtonClicked("SOS");
        setTableColumns(sosColumns);
        setTableName(sosTable);
        break;
      default:
        setButtonClicked("All");
        setTableColumns(allColumns);
        setTableName(allData);

    }
  }
  useEffect(() => {
    VictimService.getVictims().then(response => {
      setVictimTable(response.data);

    });

    SosService.getSos().then(response => {
      setSosTable(response.data);
    });

  }, []
  );


  return (
    <div>
      <div class="multi-button">
        <button name="Victims" onClick={buttonPressed}>Victims</button>
        <button name="All" onClick={buttonPressed}>All</button>
        <button name="SOS" onClick={buttonPressed}>SOS</button>
      </div>
      <TableAll isClicked={buttonClicked}
        data={tableName}
        columns={tableColumns}
        messageTo={props.messageTo}

      />
    </div>
  );
}