export default function InputGroup({label, children}) {
  return (
    <div className='input-group grow'>
      <div className='input-label'>{label}</div>
      {children}
    </div>
  )
}