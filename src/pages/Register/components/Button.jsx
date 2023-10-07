export default function Button({classN, onClick, text, children}) {
  return (
    <button className={classN} onClick={onClick}>
      {text}
      {children}
    </button>
  )
}