import StepOne from './content/StepOne'
import StepTwo from './content/StepTwo'
import StepThree from './content/StepThree'
import StepProgress from './content/StepProgress'
import ProgressControl from './content/ProgressControl'

export default function Register() {
  return (
    <>
      <StepProgress />
      <section className='form-container col col-12'>
        <StepOne />
        {/* <StepTwo /> */}
        {/* <StepThree /> */}
      </section>
      <ProgressControl />
    </>
  )
}