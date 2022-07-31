import React from 'react';
import s from './New_post.module.css';
import { Field, reduxForm } from 'redux-form';
import {required, maxLength} from '../../../../utils/validators/validators';
import {Textarea} from '../../../../support/formControl/formControl';

function New_post(props) {

  const onSubmit = (formData) => {
    props.onAddPost(formData);
  }

  return (
    <div className={s.newPost} >
      <h3>New post</h3>
      <AddMessageFormRedax onSubmit={onSubmit} />
    </div>

  );
}

const maxLength10 = maxLength(10);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <Field component= {Textarea} placeholder='Введите текст' name='message' validate={[required, maxLength10]}/><br />
      <button >add post</button>
    </form>
  )
}

const AddMessageFormRedax = reduxForm({ form: 'AddMessageForm' })(AddMessageForm);

export default New_post;