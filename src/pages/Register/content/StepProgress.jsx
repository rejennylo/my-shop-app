import ProgressGroup from '../components/ProgressGroup';

export default function StepProgress({ pageIndex }) {
  return(
    <section className='progress-container col col-12'>
      <ProgressGroup 
      id='0'
      number='1'
      label='寄送地址'
      pageIndex={pageIndex}
      />
      <span className={`progress-bar ${pageIndex >= 0 ? 'circle-full' : 'circle-line'}`} data-order='1'></span>
      <ProgressGroup 
      id='1'
      number='2'
      label='運送方式'
      pageIndex={pageIndex}
      />
      <span className={`progress-bar ${pageIndex >= 1 ? 'circle-full' : 'circle-line'}`} data-order='2'></span>
      <ProgressGroup 
      id='2'
      number='3'
      label='付款資訊'
      pageIndex={pageIndex}
      />
    </section>
  )
}