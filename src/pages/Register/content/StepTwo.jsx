import RadioGroup from '../components/RadioGroup';

export default function StepTwo() {
  return (
    <form className='col col-12'>
      <h3 className='form-title'>運送方式</h3>
      <section className='form-body col col-12'>
        <RadioGroup 
        id='shipping-standard'
        text='標準運送'
        period='3~7 個工作天'/>
        <RadioGroup 
        id='shipping-dhl'
        text='DHL 貨運'
        period='48 小時內送達'/>
      </section>
    </form>
  )
}