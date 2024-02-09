import { Container } from '../../Container';

export const Section = ({ children, bg, bgImg }) => {
  return (
    <div
      className="py-8"
      style={{ 
        backgroundColor: bg ? 'rgb(20, 20, 20)' : 'transparent' ,
        backgroundImage: bgImg ? `url(${bgImg})` : null,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container>{children}</Container>
    </div>
  );
};
