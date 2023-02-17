import { Container, Link } from '@mui/material';
import Button from '../components/Button';

export default (props: any) => {
  return (
    <Container>
      <Button text="Hey There" />
      <Link href="/contact">Contact</Link>
    </Container>
  );
};
