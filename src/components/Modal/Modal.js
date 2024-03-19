import { Link } from 'react-router-dom';

export default function Modal({ children, isOpen, onClose }) {
  return (
    <section className={isOpen ? 'modal modal_opened' : 'modal'}>
      <Link to='/'>
        <button
          type='button'
          aria-label='closeButton'
          className='modal__close'
          onClick={onClose}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            fill='none'
          >
            <path
              fill='#fff'
              d='m22.357 20 8.821 8.821-2.357 2.357L18.35 20.707a1 1 0 0 1 0-1.414L28.82 8.82l2.357 2.357L22.357 20Z'
            />
            <path
              fill='#fff'
              d='M18.13 20 9.31 28.82l2.356 2.357 10.472-10.471a1 1 0 0 0 0-1.414L11.666 8.82 9.31 11.178 18.131 20Z'
            />
          </svg>
        </button>
      </Link>
      {children}
    </section>
  );
}
