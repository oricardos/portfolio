import { Container } from '../../Container';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={`${style.footer} flex items-center justify-center mt-20`}>
      <Container>
        <p className="text-center">oricardos</p>
      </Container>
    </div>
  );
};
