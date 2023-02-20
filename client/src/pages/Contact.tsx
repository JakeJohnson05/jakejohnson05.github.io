import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../components/TextField';

const contactSchema = Yup.object({
  name: Yup.string().required().max(80),
  email: Yup.string().email().required().max(320),
  message: Yup.string().required().max(500),
});

export default () => {
  return (
    <div>
      <h1>CONTACT</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        validationSchema={contactSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name">{TextField.title('Name')}</Field>
            <Field name="email">{TextField.title('Email')}</Field>
            <Field name="message">{TextField.title('Message')}</Field>
          </Form>
        )}
      </Formik>
    </div>
  );
};
