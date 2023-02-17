import { Container, Link } from '@mui/material';
import Button from '../components/Button';

interface HomeProps {}

export default (props: HomeProps) => {
  return (
    <Container>
      <Button text="Hey There" />
      <Link href="/contact">Contact</Link>
    </Container>
  );
};
