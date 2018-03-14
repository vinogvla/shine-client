import React from 'react'
import { connect } from 'react-redux'
import Element from './Element'
import { changeValue } from '../actions'

const Form = (props) => {

  const handleChange = (e) => {
    props.changeValue({
      form: props.id,
      name: e.target.name,
      value: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const isValid = () => (
    !props.elements.map(el=>el.isValid(el.value)).includes(false)
  )

  return (
    <form onSubmit={handleSubmit}>
      { props.elements.map(el =>
          <Element key={el.name} {...el} handleChange={handleChange} />
      ) }
    <p>form is { isValid() ? "valid" : "invalid" }</p>
    </form>
  )
}

export default connect(
  state => (state),
  { changeValue }
)(Form)
