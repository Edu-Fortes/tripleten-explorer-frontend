export default function Button({ label, kind, onClick }) {
  return (
    <button
      type='button'
      className={`button button__${kind}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
