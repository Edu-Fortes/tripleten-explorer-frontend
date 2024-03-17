import authorImg from '../../images/author.jpg';

export default function Author() {
  return (
    <section className='author'>
      <figure>
        <img
          src={authorImg}
          alt='Foto do autor desta página'
          className='author__image'
        />
      </figure>
      <div className='author__text'>
        <h2 className='author__title'>Sobre o autor</h2>
        <p>
          Esse bloco descreve o autor do projeto. Aqui você deve indicar seu
          nome, o que você faz e quais tecnologias de desenvolvedor você
          conhece.
        </p>
        <p>
          Você também pode falar sobre sua experiência com o Practicum, o que
          aprendeu lá e como pode ajudar clientes em potencial.
        </p>
      </div>
    </section>
  );
}
