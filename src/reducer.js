export const initialState = {
  id: 'login',
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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE": {
      const { name, value } = action.payload
      return {
        ...state,
        elements: state.elements.map( el => (el.name === name ? { ...el, value } : el))
      }
    }
    default:
      return state
  }
}

export default reducer
