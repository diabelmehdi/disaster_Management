import React, {useContext,useState} from "react";
import MaterialTable from "material-table";
import VictimService from "../ApiService/VictimService";


export const TableAll = (props) => {
  const [selectedRow,setSelectedRow] = useState(null)

  const handleSelection = (selectedRow,id) => {
    var victim = {
      "messageToVictim": "Lol"
    }
    setSelectedRow(selectedRow)
    VictimService.updateVictim(victim, props.data.length-id).then( res => {
      console.log(res.data)

    }
    );
  }

  return (
    <div>
      <MaterialTable title={props.messageTo} data={props.data} columns={props.columns} options={
        {
          search: false,
          paging: false,
          selection: true,
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
      onRowClick={(evt, selectedRow) => handleSelection(selectedRow,selectedRow.tableData.id)}
       />
    </div>
  );
};