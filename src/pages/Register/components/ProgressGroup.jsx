export default function ProgressGroup({label,number}) {
  return (
    <span className='progress-group'>
      <span className='progress-icon'>
        <span className='text'>{number}</span>
      </span>
      <span className='progress-label'>{label}</span>
    </span>
  )
}