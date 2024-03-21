import { useContext, useState } from 'react';
import { IsLoggedContext } from '../../contexts/IsLogged';
import cardPhoto1 from '../../images/nature_dog.jpeg';

export default function NewsCard() {
  const [flagMarked, setFlagMarked] = useState(false);
  const isLogged = useContext(IsLoggedContext);
  function handleMarkedFlag() {
    if (isLogged) {
      setFlagMarked(!flagMarked);
    }
  }
  return (
    <li className='card'>
      <header className='card__header'>
        <span className='card__flag' onClick={handleMarkedFlag}>
          <svg
            width='24'
            height='24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {!flagMarked ? (
              <path
                className='card__flag-icon'
                d='M11.382 15.714 6 19.942V4h12v15.942l-5.382-4.228-.618-.486-.618.486Z'
                stroke='#B6BCBF'
                strokeWidth='2'
              />
            ) : (
              <path
                d='M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v18l-7-5.5L5 22V4Z'
                fill='#2F71E5'
              />
            )}
          </svg>
        </span>{' '}
        {!isLogged && (
          <span className='card__tooltip'>Entre para salvar os artigos</span>
        )}
      </header>
      <figure className='card__fig'>
        <img
          src={cardPhoto1}
          className='card__img'
          alt='Imagem de capa da notícia'
        />
      </figure>
      <div className='card__content'>
        <time className='card__time'>4 de novembro de 2020</time>
        <h2 className='card__title'>
          A natureza faz de você uma pessoa melhor
        </h2>
        <p>
          Desde que li o influente livro de Richard Louv, &quot;O Último Filho
          na Floresta&quot;, a ideia de ter um &quot;lugar para sentar&quot;
          especial me pegou de jeito. This advice, which Louv attributes to
          natureza...
        </p>
        <p className='card__cite'>treehugger</p>
      </div>
    </li>
  );
}
