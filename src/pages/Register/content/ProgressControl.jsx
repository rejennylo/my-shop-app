import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import rightArrow from '../../../assets/icons/right-arrow.svg';
import leftArrow from '../../../assets/icons/left-arrow.svg';

export default function ProgressControl({pageIndex, handlePrev, handleNext}) {
  const innerButtonGroup = () => {
    if( pageIndex === 0 ){
      return (
        <ButtonGroup phase='address'>
          <Button classN='next' onClick={handleNext} text='下一步'>
            <img src={rightArrow} />
          </Button>
        </ButtonGroup>
      )
    }else if ( pageIndex === 1 ){
      return (
        <ButtonGroup phase='shipping'>
          <Button classN='prev' onClick={handlePrev} text='上一步'>
            <img src={leftArrow} />
          </Button>
          <Button classN='next' onClick={handleNext} text='下一步'>
            <img src={rightArrow} />
          </Button>
        </ButtonGroup>
      )
    }else if ( pageIndex === 2 ){
      return (
        <ButtonGroup phase='credit-card'>
          <Button classN='prev' onClick={handlePrev} text='上一步'>
            <img src={leftArrow} />
          </Button>
          <Button classN='next' text='確定下單'>
            <img src={rightArrow} />
          </Button>
        </ButtonGroup>
      )
    }
  };
  return (
    <section className='progress-control-container col col-lg-6 col-sm-12'>
      {innerButtonGroup()}
    </section>
  )
};