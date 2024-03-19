export default function Button({ label, classMod, onClick }) {
  return (
    <button
      type='submit'
      className={`button button__${classMod}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
