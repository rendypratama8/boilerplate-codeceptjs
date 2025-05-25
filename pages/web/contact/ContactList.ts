const { I } = inject();

// Define your locators here //
const text = {
  page: "My Contacts",
  title: "//h1[normalize-space()='Contact List']",
  description:
    "//p[normalize-space()='Click on any contact to view the Contact Details']",
  table: {
    header: {
      name: "//th[normalize-space()='Name']",
      birthdate: "//th[normalize-space()='Birthdate']",
      email: "//th[normalize-space()='Email']",
      phone: "//th[normalize-space()='Phone']",
      address: "//th[normalize-space()='Address']",
      addressDetail:
        "//th[normalize-space()='City, State/Province, Postal Code']",
      country: "//th[normalize-space()='Country']",
    },
  },
};

const input = {
  firstName: "//input[@id='firstName']",
  lastName: "//input[@id='lastName']",
  birthDate: "//input[@id='birthdate']",
  email: "//input[@id='email']",
  phone: "//input[@id='phone']",
  street1: "//input[@id='street1']",
  street2: "//input[@id='street2']",
  city: "//input[@id='city']",
  stateProvince: "//input[@id='stateProvince']",
  postalCode: "//input[@id='postalCode']",
  country: "//input[@id='country']",
};

const button = {
  addContact: "//button[@id='add-contact']",
  editContact: "//button[@id='edit-contact']",
  deleteContact: "//button[@id='delete']",
  return: "//button[@id='return']",
  submit: "//button[@id='submit']",
  cancel: "//button[@id='cancel']",
};

const message = {
  success: {
    message: "",
  },
  failed: {
    message: "",
  },
};

export = {
  // LOCATORS //
  loc: {
    text,
    input,
    button,
    message,
  },

  // METHODS //
  
};
