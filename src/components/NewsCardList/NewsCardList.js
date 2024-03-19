export default function NewsCardList({ children }) {
  return (
    <section className='results'>
      <h2 className='results__title'>Procurar resultados</h2>
      {children}
    </section>
  );
}
