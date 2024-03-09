import Logo from '@/assets/images/logo.svg'

const Hero = () => (
  <>
    <div className='grid md:grid-cols-2'>
      <div>
        <img src={Logo} alt='' />
        <h1 className='font-bold text-heading-xl'>
          Body mass Index Calculator
        </h1>
        <p className='text-body-md text-darkBlue'>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      {/* HERO RIGHT */}
      <div></div>
    </div>
  </>
)

export default Hero
