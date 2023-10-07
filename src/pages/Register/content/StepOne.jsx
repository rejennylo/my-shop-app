import { genders, cities } from '../../../data';
import InputGroup from '../components/InputGroup';

export default function StepOne() {
  return (
      <from className='col col-12'>
        <h3 className='form-title'>寄送地址</h3>
        <section className='form-body col col-12'>
          <div className='col col-12 gap'>
            <InputGroup label='稱謂'>
              <div className='select-container'>
                <select defaultValue="mr">
                  {genders.map(gender => <option key={gender.value} value={gender.value}>{gender.sex}</option>)}
                </select>
              </div>
            </InputGroup>
            <InputGroup label='姓名'>
              <input className='input-info' type="text" placeholder="請輸入姓名" />
            </InputGroup>
          </div>
          <div className='col col-12 gap'>
            <InputGroup label='電話'>
              <input className='input-info' type="tel" placeholder="請輸入行動電話" />
            </InputGroup>
            <InputGroup label='Email'>
              <input className='input-info' type="email" placeholder="請輸入電子郵件" />
            </InputGroup>
          </div>
          <div className='col col-12 gap'>
            <InputGroup label='縣市'>
              <div className='select-container'>
                <select required>
                  {cities.map(city => <option key={city.id} value={city.id}>{city.name}</option>)}
                </select>
              </div>
            </InputGroup>
            <InputGroup label='地址'>
              <input className='input-info' type="email" placeholder="請輸入地址" />
            </InputGroup>
          </div>
        </section>
      </from>
  )
}