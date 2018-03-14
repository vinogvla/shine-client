import { combineReducers } from 'redux'
import forms, { initialState as formsInitialState } from './forms'

export const initialState = {
  forms: formsInitialState
}

export default combineReducers({
  forms
})
