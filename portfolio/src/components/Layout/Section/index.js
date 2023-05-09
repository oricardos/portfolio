import { Container } from '../../Container';

export const Section = ({ children, bg }) => {
  return (
    <div
      className="py-8"
      style={{ backgroundColor: bg ? 'rgb(20, 20, 20)' : null }}
    >
      <Container>{children}</Container>
    </div>
  );
};
