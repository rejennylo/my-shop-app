export default function Button({classN, onClick, type, text, children}) {
  return (
    <button className={classN} onClick={onClick} type={type}>
      {text}
      {children}
    </button>
  )
}