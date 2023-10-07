import { useState } from 'react';
import StepOne from './content/StepOne';
import StepTwo from './content/StepTwo';
import StepThree from './content/StepThree';
import StepProgress from './content/StepProgress';
import ProgressControl from './content/ProgressControl';

export default function Register() {
  const [pageIndex,setPageIndex] = useState(0);

  const pages = [<StepOne />, <StepTwo />, <StepThree />];

  const handlePrev = () => {
    if ( pageIndex > 0 ) {
      setPageIndex( prev => prev - 1 );
    }
  };

  const handleNext = () => {
    if ( pageIndex < pages.length - 1 ) {
      setPageIndex( prev => prev + 1 );
    }
  };

  return (
    <>
      <StepProgress
      pageIndex={pageIndex}
      />
      <section className='form-container col col-12'>
      {pages[pageIndex]}
      </section>
      <ProgressControl
      pageIndex={pageIndex}
      handlePrev={handlePrev}
      handleNext={handleNext}
      />
    </>
  )
}