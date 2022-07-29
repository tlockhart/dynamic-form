import React, { useEffect, useState } from "react";
import Modal from "../components/global/templates/Modal";
import Select from "../components/global/inputs/CustomSelect";
import ComponentsRenderer from "../components/global/templates/ComponentsRenderer";
import NewSearch from "../components/global/inputs/NewSearch";
import SearchFilterAction from "../components/global/inputs/SearchFilterAction";

function Home(props) {
  // constants
  const data = [
    {
      id: "0",
      label: "Jane Doe",
      value: "JaneDoe@hotmail.com",
    },
    {
      id: "1",
      label: "John Doe",
      value: "JohnDoe@hotmail.com",
    },
  ];

  const defaultValues = data[0];

  // state
  const [emailContacts, setEmailContacts] = useState(data);
  const [showUserModal, setShowUserModal] = useState(false);
  // set value for default selection
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    console.log("UseEffect Email Contacts:", emailContacts);
    console.log("UseEffect selectedValues:", selectedValues);
  }, []);

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
    console.log("HandleChange NewSelectedValues:", selectedValues)
  };

  const retrieveSelectedContacts = (data) => {
    console.log("retreiveSelectecContacts:", data);
  };

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
 
  // Default Input components to display on form
  const SearchFilter = (
    <SearchFilterAction 
      type="searchFilter"
      data={emailContacts} 
    />);

  const Selector = (
    <Select
      type="selector"
      defaultValues={defaultValues}
      options={emailContacts}
      retrieveSelections={retrieveSelectedContacts}
      handleChange={handleChange}
      values={selectedValues}
    />);

    // In react components are rendered with functions
  const getSearchFilter = () => SearchFilter;
  const getSelector = () => Selector
  const components = [
    getSelector,
    getSearchFilter
  ];

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
            components={components} />
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
