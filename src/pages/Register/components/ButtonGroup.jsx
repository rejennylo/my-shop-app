export default function ButtonGroup({phase, children}) {
  return (
    <section className='button-group col col-12' data-phase={phase}>
      {children}
    </section>
  )
}