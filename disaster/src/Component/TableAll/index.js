import React, {useContext} from "react";
import MaterialTable from "material-table";


export const TableAll = (props) => {

  const handleSelection = () => {
    
    props.data[0].messageTo = props.messageTo;
    alert(props.data[0].messageTo);
  }

  return (
    <div>
      <MaterialTable title={props.messageTo} data={props.data} columns={props.columns} options={
        {
          search: false,
          paging: false,
          selection: true,
          headerStyle: {
            backgroundColor: '#84221C',
            color: '#FFF'
          }
        }
      }
      onSelectionChange={(rowData) => handleSelection()}
       />
    </div>
  );
};