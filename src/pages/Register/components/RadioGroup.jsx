export default function RadioGroup({id, text, period}) {
  return (
    <label className='radio-group col col-12'>
      <input className='radio-input' id={id} name='shipping' type="radio" />
      <div className='radio-info'>
        <div className='col col-12'>
          <div className={text}>{text}</div>
          <div className='price'></div>
        </div>
        <div className={{period} + ' col col-12'}>{period}</div>
      </div>
      <div className='radio-box-border'></div>
    </label>
  )
}