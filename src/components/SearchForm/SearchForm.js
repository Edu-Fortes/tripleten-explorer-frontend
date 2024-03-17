export default function SeachForm({ children }) {
  return (
    <form className='frm-search'>
      <input
        type='text'
        name='search-news'
        placeholder='Inserir tema'
        className='frm-search__input'
        required
      />
      {children}
    </form>
  );
}
