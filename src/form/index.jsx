import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { CustomField } from './Field';
import BankAccount from './../components/add-bank-account';
import myHandleSubmit from './handleSubmit';
import { addBankAccount } from '../actions/FormActions';
import './styles.css';


const Form = ({ handleSubmit, bankAccounts, addBankAccount }) => {
  return (
    <div className="formContainer">
      <h1 className="formTitle">Register Account</h1>
      <form className="form" onSubmit={handleSubmit(myHandleSubmit)}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              className="inputField"
              name="firstName"
              component={CustomField}
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              className="inputField"
              name="lastName"
              component={CustomField}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              className="inputField"
              name="email"
              component={CustomField}
              type="text"
              placeholder="e-mail"
            />
          </div>
        </div>
        <h2>Bank Accounts</h2>
        {
          bankAccounts.map(id => <BankAccount id={id} key={id} />)
        }
        <div className="textCenter">
          <button onClick={addBankAccount} className="button addAccountButton">+ Add Bank Account</button>
        </div>
        <div className="textRight">
          <input className="button submitButton" type="submit" value="Submit!" />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  bankAccounts: state.bankAccounts,
});

const mapDispatchToProps = ({
  addBankAccount,
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);
const withForm = reduxForm({ form: 'registration_form' });

export default withRedux(withForm(Form));
