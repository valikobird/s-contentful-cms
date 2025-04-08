import heroImg from './assets/hero-zone.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eius
            deleniti dignissimos ducimus exercitationem minima, quae pariatur
            labore possimus nihil aspernatur odit dolores velit modi voluptas
            temporibus adipisci soluta quaerat?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
