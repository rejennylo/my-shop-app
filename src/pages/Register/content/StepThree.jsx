import InputGroup from '../components/InputGroup'

export default function StepThree() {
  return (
      <from className='col col-12'>
        <h3 className='form-title'>付款資訊</h3>
        <section className='form-body col col-12'>
          
          <div className='col col-12 gap'>
            <InputGroup label='持卡人姓名'>
              <input className='input-info' type="text" placeholder="John Doe" />
            </InputGroup>
          </div>
          <div className='col col-12 gap'>
            <InputGroup label='卡號'>
              <input className='input-info' type="text" placeholder="1111 2222 3333 4444" />
            </InputGroup>
          </div>
          <div className='col col-12 gap'>
            <InputGroup label='有效期限'>
              <input className='input-info' type="text" placeholder="MM/YY" />
            </InputGroup>
            <InputGroup label='CVC/CCV'>
              <input className='input-info' type="text" placeholder="123" />
            </InputGroup>
          </div>
        </section>
      </from>
  )
}