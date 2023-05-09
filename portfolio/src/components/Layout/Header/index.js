import { Container } from '../../Container';
import { Logo } from '../../Logo';
import { Menu } from '../Menu';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.__header}>
      <Container>
        <div className="flex justify-between items-center h-16 min-h-full w-full">
          <Logo />
          <Menu />
        </div>
      </Container>
    </div>
  );
};
