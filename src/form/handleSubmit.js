import { SubmissionError } from 'redux-form'

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

export default function handleSubmit(values) {

  if (!values.firstName) {
    throw new SubmissionError({
      firstName: 'Field is required!',
      _error: 'Registration failed!'
    })
  } else if (!values.firstName.match(/^[a-z ,.'-]+$/i)) {
    throw new SubmissionError({
      firstName: 'Invalid first name',
      _error: 'Registration failed!'
    })
  }
  if (!values.lastName) {
    throw new SubmissionError({
      lastName: 'Field is required!',
      _error: 'Registration failed!'
    })
  } else if (!values.lastName.match(/^[a-z ,.'-]+$/i)) {
    throw new SubmissionError({
      lastName: 'Invalid last name',
      _error: 'Registration failed!'
    })
  }
  if (!values.email) {
    throw new SubmissionError({
      email: 'Field is required!',
      _error: 'Registration failed!'
    })
  } else if (!validateEmail(values.email)) {
    throw new SubmissionError({
      email: 'Invalid email address',
      _error: 'Registration failed!'
    })
  }
  else {
    window.alert(`Form data:\n\n${JSON.stringify(values, null, 2)}`)
  }
}