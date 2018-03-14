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
        isValid: (value) => { return value.length > 2 && value.length < 10 },
        label: "Password",
        name: "password",
        type: "password",
        value: "",
      },
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
