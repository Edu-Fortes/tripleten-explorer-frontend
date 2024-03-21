import Button from '../Button/Button';

export default function NewsCardList({ children }) {
  return (
    <section className='results'>
      <h2 className='results__title'>Procurar resultados</h2>
      <ul className='results__cards'>{children}</ul>
      <div className='results__button'>
        <Button label='Mostrar mais' classMod='show' />
      </div>
    </section>
  );
}
