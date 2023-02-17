import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface ButtonProps {
  text: string;
}

const Button = styled(MuiButton)``;

export default (props: ButtonProps) => {
  return <Button>{props.text}</Button>;
};
