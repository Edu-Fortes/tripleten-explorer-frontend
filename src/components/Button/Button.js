export default function Button({ label, classMod, onClick, isLogged }) {
  return (
    <button
      type='submit'
      className={`button button__${classMod}`}
      onClick={onClick}
    >
      {label}
      {classMod === 'crystal' && isLogged && (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10 6H6v12h4v2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v2Zm7.586 7-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586Z'
            fill='#fff'
          />
        </svg>
      )}
    </button>
  );
}
