import React, { useEffect, useState } from "react";
import Modal from "../components/global/templates/Modal";
import Select from "../components/global/inputs/CustomSelect";
import ComponentsRenderer from "../components/global/templates/ComponentsRenderer";
import NewSearch from "../components/global/inputs/NewSearch";
import SearchFilterAction from "../components/global/inputs/SearchFilterAction";
import {useBuildComponents} from "../components/global/hooks/useBuildComponents";
import data from "../utils/data";

function Home(props) {
  

  const defaultValues = data[0];

  // state
  const [emailContacts, setEmailContacts] = useState(data);
  const [showUserModal, setShowUserModal] = useState(false);
  
  // set value for default selection
  const [selectedValues, setSelectedValues] = useState([]);
   
  // handle onChange event of the dropdown
   const handleChange = (e) => {
    console.log("HandleChangeCalled:", e);
    setSelectedValues(
      // Array.isArray(e)
      //   ? e.map((x) => {
      //       // setDisplayValue
      //       console.log("HandleChange:", x);
      //       return x;
      //     })
      //   :  []
      e
    );
    console.log("HandleChange NewSelectedValues:", selectedValues);
  };

  const retrieveSelectedContacts = (data) => {
    console.log("retreiveSelectecContacts:", data);
  };

  const componentDefinitions = [
    {
      name: Select,
      props: {
        type: "selector",
        defaultValues: selectedValues.length > 0 ? selectedValues : defaultValues,
        options: emailContacts,
        retrieveSelections: retrieveSelectedContacts,
        handleChange: handleChange,
        // values: selectedValues,
        class: "selector-input",
        color: "blue"
      }
    },
    {
      name: SearchFilterAction,
      props: {
        type: "searchFilter",
        data: emailContacts,
        class: "searchFilter-input",
        color: "hotpink"
      }
    }
  ];
  
  const [componentsArray, setComponentsArray] = useBuildComponents(componentDefinitions);

  
  useEffect(() => {
    console.log("UseEffect Email Contacts:", emailContacts);
    console.log("UseEffect selectedValues:", selectedValues);
  }, []);

 

  // Send the data to the backend and close modal
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit:", e);
    setShowUserModal(false);
    console.log("HandleSubmit: SelectedValues:", selectedValues);
    // reset Selected values
    setSelectedValues([]);
  };

  const handleClose = (e) => {
    e.preventDefault();
    //close modal
    setShowUserModal(false);
    // reset Selected values
    setSelectedValues([]);
  };

  // Render Emails
  const renderEmails = () => {
    return selectedValues.map((item, index) => {
      console.log("Item:", item, "; Index:", index);
      return index < selectedValues.length - 1 ? item.value + ", " : item.value;
    });
  };

  return (
    <div>
      Click to Show Form
      <div>
        <button type="button" onClick={() => setShowUserModal(true)}>
          Show Form
        </button>
      </div>
      {/*Display Modal*/}
      {showUserModal === true ? (
        // Display Modal
        <Modal
          header="Invite Contacts"
          handleCloseModal={handleClose}
          handleSendData={retrieveSelectedContacts}
          handleSubmit={handleSubmit}
        >
          <ComponentsRenderer
            components={componentsArray}
          />
        </Modal>
      ) : null}
      <div>
        <b>Selected Value: </b>
        {renderEmails()}
      </div>
    </div>
  );
}

export default Home;
