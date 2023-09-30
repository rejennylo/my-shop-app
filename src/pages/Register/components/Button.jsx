export default function Button({classN, text, children}) {
  return (
    <button className={classN}>
      {text}
      {children}
    </button>
  )
}