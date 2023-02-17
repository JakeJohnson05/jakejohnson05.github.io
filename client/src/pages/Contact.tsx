import { Formik } from 'formik';
import * as Yup from 'yup';

const contactSchema = Yup.object({
  name: Yup.string().required().max(80),
  email: Yup.string().email().required().max(320),
  message: Yup.string().required().max(500),
});

export default (props: any) => {
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
      ></Formik>
    </div>
  );
};
