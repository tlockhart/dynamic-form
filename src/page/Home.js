import React, { useEffect, useState } from "react";
import Modal from "../components/global/templates/Modal";
import Select from "../components/global/inputs/CustomSelect";

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

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    console.log("HandleChangeCalled:", e);
    setSelectedValues(
      Array.isArray(e)
        ? e.map((x) => {
            // setDisplayValue
            return x;
          })
        : []
    );
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

  // Render Emails
  const renderEmails = () => {
    return selectedValues.map((item, index) => {
      console.log("Item:", item, "; Index:", index);
      return index < selectedValues.length - 1 ? item.value + ", " : item.value;
    });
  };

  // default Input components to display on form
  const getUserSelector = () => (
    <Select
      type="selector"
      defaultValues={defaultValues}
      options={emailContacts}
      retrieveSelections={retrieveSelectedContacts}
      handleChange={handleChange}
      values={selectedValues}
    />
  );

  useEffect(() => {
    console.log("Email Contacts:", emailContacts);
  }, []);

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
          handleCloseModal={() => setShowUserModal(false)}
          handleSendData={retrieveSelectedContacts}
          handleSubmit={handleSubmit}
        >
          {getUserSelector()}
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
