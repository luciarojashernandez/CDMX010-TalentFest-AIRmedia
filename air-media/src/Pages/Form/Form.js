import React, { Fragment } from "react";
import FormNav from "../../Components/FormNav/FormNav";
import {Link} from 'react-router-dom'
import {
  FormBtns,
  FormRequestBtn,
  FormPickUpBtn,
} from "./FormElements";
import SubmissionForm from '../../Components/OrderForms/SubmissionForm/SubmissionForm'
import FormToCollect from '../../Components/OrderForms/FormToCollect/FormToCollect'

function Form() {

  const condition = true;

  return (
    <Fragment>
      <FormNav />
      <FormBtns>
        {condition ?<FormRequestBtn>Solicitar envio</FormRequestBtn>
        :<FormPickUpBtn>Recoger pedido</FormPickUpBtn>}
      </FormBtns>
      {/* <SubmissionForm /> */}
      {/* <FormToCollect /> */}
    </Fragment>
  );
}
export default Form;
