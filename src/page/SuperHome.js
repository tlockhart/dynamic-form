import React, { useEffect, useState } from "react";
import Modal from "../components/global/templates/Modal";
import Select from "../components/global/inputs/SuperCustomSelect";
import ComponentsRenderer from "../components/global/templates/ComponentsRenderer";
import NewSearch from "../components/global/inputs/NewSearch";
import SearchFilterAction from "../components/global/inputs/SearchFilterAction";
import { useBuildComponents } from "../components/global/hooks/useBuildComponents";

import data from "../utils/data";
import ReactUseForm from "../utils/ReactUseForm";
import { useForm } from "react-hook-form";
import SuperForm from "../components/global/templates/SuperForm";

function SuperHome(props) {
  const defaultValues = data[0];

  // state
  const [emailContacts, setEmailContacts] = useState(data);
  const [showUserModal, setShowUserModal] = useState(false);

  // set value for default selection
  const [selectedValues, setSelectedValues] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    // e.preventDefault();
    console.log("HandleChangeCalled:", e);
    setSelectedValues(e);
    console.log("HandleChange NewSelectedValues:", selectedValues);
  };

  const retrieveSelectedContacts = (data) => {
    console.log("retreiveSelectecContacts:", data);
  };

  //userForm
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm({
    defaultValues: {
    //   emailContacts: defaultValues,
      mail: emailContacts,
    },
    // resolver: yupResolver(email),
  });
  const componentDefinitions = [
    {
      name: Select,
      props: {
        name: "mail",
        type: "mail",
        defaultValues:
          selectedValues.length > 0 ? selectedValues : defaultValues,
        options: emailContacts,
        retrieveSelections: retrieveSelectedContacts,
        // handleChange: handleChange,
        // values: selectedValues,
        control: control,
        class: "selector-input",
        color: "blue",
      },
    },
    {
      name: SearchFilterAction,
      props: {
        type: "mail",
        data: emailContacts,
        class: "searchFilter-input",
        color: "hotpink",
      },
    },
  ];

  const [componentsArray, setComponentsArray] =
    useBuildComponents(componentDefinitions);

  useEffect(() => {
    console.log("UseEffect Email Contacts:", emailContacts);
    console.log("UseEffect selectedValues:", selectedValues);
    console.log("ShowUserModal:", showUserModal);
  }, []);


  {/*Create SuperComponent to be rendered*/}
  function withUseForm(WrappedComponent, data) {
    console.log("WrappedComponent:", WrappedComponent);
    console.log("data:", data);
    return ()=>{
      return (
      <ReactUseForm
        component={WrappedComponent}
      />
    );
  }
}

  console.log("ComponentsArray:", componentsArray[0]);
  const ComponentWithUseForm = withUseForm(componentsArray[0], emailContacts);

  // Render Emails
  const renderEmails = () => {
    console.log("selectedValues:", selectedValues);
    return selectedValues.mail?.map((item, index) => {
      console.log("Item:", item, "; Index:", index);
      return index < selectedValues.mail.length - 1 ? item.value + ", " : item.value;
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
      {showUserModal === true && componentsArray.length > 0
        ? <SuperForm
        handleSubmit={handleSubmit}
        submitForm={handleChange}
        errors={errors}

      >
      {ComponentWithUseForm()}
        
        </SuperForm>
        : null}
      <div>
        <b>Selected Value: </b>
        {renderEmails()}
      </div>
    </div>
  );
}

export default SuperHome;
