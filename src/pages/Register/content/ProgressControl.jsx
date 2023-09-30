import ButtonGroup from '../components/ButtonGroup'
import Button from '../components/Button'
import rightArrow from '../../../assets/icons/right-arrow.svg'
import leftArrow from '../../../assets/icons/left-arrow.svg'

export default function ProgressControl() {
  return (
    <section className='progress-control-container col col-lg-6 col-sm-12'>
      <ButtonGroup phase='address'>
        <Button classN='next' text='下一步'>
          <img src={rightArrow} />
        </Button>
      </ButtonGroup>
      {/* <ButtonGroup phase='shipping'>
        <Button classN='prev' text='上一步'>
          <img src={leftArrow} />
        </Button>
        <Button classN='next' text='下一步'>
          <img src={rightArrow} />
        </Button>
      </ButtonGroup>
      <ButtonGroup phase='credit-card'>
        <Button classN='prev' text='上一步'>
          <img src={leftArrow} />
        </Button>
        <Button classN='next' text='確定下單'>
          <img src={rightArrow} />
        </Button>
      </ButtonGroup> */}
    </section>
  )
}