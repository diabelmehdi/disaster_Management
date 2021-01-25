import React, { useEffect, useState, useContext } from "react";
import "./Style.css";
import { TableAll } from "src/Component/TableAll";
import allData from "src/Component/TableAll/allData";
import allColumns from "src/Component/TableAll/allColumns";
import victimsColumns from "src/Component/TableAll/victimsColumns";
import sosColumns from "src/Component/TableAll/sosColumns";
import VictimService from "src/Component/ApiService/VictimService";
import SosService from "src/Component/ApiService/SosService";
import { ThemeContext } from "src/Component/LoginRescue/AppRescue";

export const ButtonTable = (props) => {
  const [buttonClicked, setButtonClicked] = useState("Type of Emergency");
  const [tableName, setTableName] = useState(allData);
  const [sosTable, setSosTable] = useState([]);
  const [victimTable, setVictimTable] = useState([]);
  const [tableColumns, setTableColumns] = useState(allColumns);

  const {victims,setDataVictims} = useContext(ThemeContext);
   

  const buttonPressed = (e) => {
    switch (e.target.name) {
      case "All":
        setButtonClicked("All");
        setTableColumns(allColumns);
        setTableName(allData);
        console.log(victims)
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
  };
  useEffect(() => {
    VictimService.getVictims().then((response) => {
      setVictimTable(response.data);
      setDataVictims(response.data);
      
      
    });

    SosService.getSos().then((response) => {
      setSosTable(response.data);
    });
  }, []);

  return (
    <div>
      <div class="multi-button">
        <button name="Victims" onClick={buttonPressed}>
          Victims
        </button>
        <button name="All" onClick={buttonPressed}>
          All
        </button>
        <button name="SOS" onClick={buttonPressed}>
          SOS
        </button>
      </div>
      <TableAll
        isClicked={buttonClicked}
        data={tableName}
        columns={tableColumns}
        messageTo={props.messageTo}
      />
    </div>
  );
};
