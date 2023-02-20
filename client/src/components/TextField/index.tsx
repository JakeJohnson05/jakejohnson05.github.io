import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';
import { FieldProps } from 'formik';
import { useCallback, useMemo } from 'react';
import './TextField.sass';

const StyledTextField = styled(MuiTextField)<MuiTextFieldProps>(
  ({ theme }) => ({})
);

const capitalizeFirstLetter = (text = '') =>
  text[0].toUpperCase() + text.substring(1);

export interface TextFieldProps extends FieldProps<string> {
  title: string;
}

const TextField = (props: TextFieldProps) => {
  const textTitle = useMemo(
    () => props.title || capitalizeFirstLetter(props.field.name),
    [props.field.name, props.title]
  );

  const setValue = useCallback(
    (value: string) => props.form.setFieldValue(props.field.name, value),
    [props.field.name, props.form]
  );

  return (
    <Container>
      <Input
        title={textTitle}
        error={props.meta.error}
        isTouched={props.form.touched[props.field.name] as boolean}
        setValue={setValue}
        value={props.field.value}
      />
    </Container>
  );
};

TextField.title = (title: string) => (props: FieldProps<string>) =>
  <TextField title={title} {...props} />;

interface InputProps {
  title: string;
  value: string;
  error?: string;
  isTouched: boolean;
  setValue: (v: string) => void;
}

const Input = (props: InputProps) => {
  console.log('props:', props);
  return (
    <input
      className="textField"
      placeholder={props.title}
      type="text"
      value={props.value || ''}
      onChange={(event) => props.setValue(event.target.value)}
    />
  );
};

export default TextField;
