export default function ProgressGroup({ id, label, number, pageIndex }) {
  const progressGroup = () => {
    if( pageIndex >= id ) {
      return (
        <span className='progress-group'>
          <span className='progress-icon circle-full'>
            <span className='text'>{number}</span>
          </span>
          <span className='progress-label'>{label}</span>
        </span>
      )
    }else {
      return (
        <span className='progress-group'>
          <span className='progress-icon circle-line'>
            <span className='text'>{number}</span>
          </span>
          <span className='progress-label'>{label}</span>
        </span>
      )
    }
  }
  return progressGroup();
}