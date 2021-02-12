import React, { useContext, useState } from "react";
import MaterialTable from "material-table";
import VictimService from "../ApiService/VictimService";
import SosService from "../ApiService/SosService";
import { MessageContext } from "../LoginRescue/AppRescue";

export const TableAll = (props) => {
  const [selectedRow, setSelectedRow] = useState(null)
  const {message} = useContext(MessageContext)

  const handleSelection = (selectedRow, id) => {
    

    setSelectedRow(selectedRow)
    if (props.dataType === "Victims") {
      var victim = {
        "messageToVictim": message
      }
      VictimService.updateVictim(victim, props.data.length - id).then(res => {
      });
    } else if (props.dataType === "SOS") {
      var sos = {
        "messageToSOS": message
      }
      SosService.updateSOS(sos, props.data.length - id).then(res => {
      });
    }
  }

    return (
      <div>
        <MaterialTable title={props.messageTo} data={props.data} columns={props.columns} options={
          {
            search: false,
            paging: false,
            selection: props.selectionAllowed,
            headerStyle: {
              backgroundColor: 'blue',
              color: '#FFF'
            },
            rowStyle: rowData => {
              let selected =
                selectedRow &&
                selectedRow.tableData.id === rowData.tableData.id;
              return {
                backgroundColor: selected ? "blue" : "#FFF",
                color: selected ? "#e0dd1f !important" : "#000"
              };
            }
          }
        }
          onRowClick={(evt, selectedRow) => handleSelection(selectedRow, selectedRow.tableData.id)}
        />
      </div>
    );
  };