import React, { useContext, useState } from "react";
import swal from 'sweetalert';
import MessageIcon from '@material-ui/icons/Message';
import MaterialTable from "material-table";
import VictimService from "../ApiService/VictimService";
import { MessageContext } from "../LoginRescue/AppRescue";

export const TableAll = (props) => {
  const {message} = useContext(MessageContext)

  const handleSelection = (username) => {

      var victim = {
        "messageToVictim": message
      }

      VictimService.updateVictim(victim,username).then(res => {
        swal("Success!", `Your message "${message}" was sent to the user ${username}!`, "success");
        
      });
  }

    return (
      <div>
        <MaterialTable title={props.dataType} data={props.data} columns={props.columns} options={
          {
            search: false,
            paging: false,
            actions: props.selectionAllowed,
            selection: false,
            headerStyle: {
              backgroundColor: 'blue',
              color: '#FFF'
            }
          }
        }
        actions={[
        { disabled: props.dataType == "All" || props.dataType == "SOS" , 
          icon: () => <MessageIcon />,
          tooltip: 'Send Message',
          isFreeAction: false,
          onClick: (event, rowData) => handleSelection(rowData.username)
        }
      ]}
          
        />
      </div>
    );
  };