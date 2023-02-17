import { useFormik } from 'formik';

export default (props: any) => {
  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>CONTACT</h1>
    </div>
  );
};
