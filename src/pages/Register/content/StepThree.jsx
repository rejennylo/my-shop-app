import InputGroup from '../components/InputGroup';
import { useContext } from 'react';
import { FormDataContext } from '../FormDataContext';

export default function StepThree() {

  const { formThreeData, handleInputChange } = useContext(FormDataContext);

  return (
      <form className='col col-12'>
        <h3 className='form-title'>付款資訊</h3>
        <section className='form-body col col-12'>
          <div className='col col-12 gap'>
            <InputGroup label='持卡人姓名'>
              <input className='input-info' type="text" placeholder="John Doe" name='cardName' value={formThreeData.cardName} onChange={handleInputChange} />
            </InputGroup>
          </div>
          <div className='col col-12 gap'>
            <InputGroup label='卡號'>
              <input className='input-info' type="text" placeholder="1111 2222 3333 4444" name='cardNumber' value={formThreeData.cardNumber} onChange={handleInputChange} />
            </InputGroup>
          </div>
          <div className='col col-12 gap'>
            <InputGroup label='有效期限'>
              <input className='input-info' type="text" placeholder="MM/YY" name='expiryDate' value={formThreeData.expiryDate} onChange={handleInputChange} />
            </InputGroup>
            <InputGroup label='CVC/CCV'>
              <input className='input-info' type="text" placeholder="123" name='CVC' value={formThreeData.CVC} onChange={handleInputChange} />
            </InputGroup>
          </div>
        </section>
      </form>
  )
}