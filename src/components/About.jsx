const About = () => {
  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <p className='font-general text-sm uppercase md:text-[10px]'>
          Welcome to Zentry
        </p>

        <div className='about-subtext'>
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className='text-gray-500'>
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'>
          <img
            src='img/about.webp'
            alt='Background'
            className='absolute left-0 top-0 size-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default About