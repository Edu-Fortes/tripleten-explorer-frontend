export default function Hero({ children }) {
  return (
    <section className='hero'>
      <h2 className='hero__title'>O que está acontecendo no mundo?</h2>
      <p className='hero__subtitle'>
        Encontre as últimas notícias sobre qualquer tema e salve elas em sua
        conta pessoal
      </p>
      {children}
    </section>
  );
}
