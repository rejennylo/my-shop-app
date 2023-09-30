import ProgressGroup from '../components/ProgressGroup'

export default function StepProgress() {
  return(
    <section className='progress-container col col-12'>
      <ProgressGroup 
      number='1'
      label='寄送地址'/>
      <span className='progress-bar' data-order='1'></span>
      <ProgressGroup 
      number='2'
      label='運送方式'/>
      <span className='progress-bar' data-order='2'></span>
      <ProgressGroup 
      number='3'
      label='付款資訊'/>
    </section>
  )
}