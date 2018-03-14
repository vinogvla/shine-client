export const initialState = [

  {
    id: '/login',
    elements: [
      {
        isValid: (value) => { return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) },
        label: "Email",
        name: "email",
        type: "email",
        value: "",
      },
      {
        isValid: (value) => { return value.length > 2 && value.length < 10 },
        label: "Password",
        name: "password",
        type: "password",
        value: "",
      },
    ]
  },
  {
    id: '/order',
    elements: [
      {
        maxLength: 21,
        label: "Patient",
        name: "PATIENT",
        value: ""
      },
      {
        isValid: (value) => ( value.length > 0 && value.length < 22 ),
        label: "PO#",
        name: "JOB",
        value: ""
      },
      {
        isValid: (value) => ( /R|L|B/.test(value) ),
        label: "EYE",
        maxLength: 1,
        name: "DO",
        value: "RLB",
      },
      {
        label: "City",
        name: "city",
        type: "select",
        value: ""
      }
    ]
  }
]

const forms = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE": {
      const { name, value } = action.payload
      console.log(state)
      console.log(action)
      return state.map(form => (form.id === action.payload.form ? {
        ...form,
        elements: form.elements.map( el => (el.name === name ? { ...el, value } : el))
      } : form))
    }
    default:
      return state
  }
}

export default forms
