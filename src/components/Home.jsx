function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-10 pb-24">
      <div className="mb-12 flex flex-col lg:flex-row lg:items-start lg:gap-12 gap-10">
        <div className="w-full lg:w-3/5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Building Modern Web Experiences with React & JavaScript.
          </h1>
          <div className="h-[3px] w-10 bg-purple-500 rounded-full mb-3"></div>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
            My name is isack bahati, as a passionate self-taught Front-End
            Developer, I specialize in creating intuitive and responsive user
            interfaces using React, HTML, JavaScript, and Tailwind CSS. I'm
            driven by a desire to build impactful web applications and am
            actively expanding my skills towards becoming a Full-Stack
            Developer.
          </p>
        </div>

        <div className="w-full lg:w-2/5 mt-4 lg:mt-8 mb-10 lg:mb-16">
          <div className="relative mx-auto w-full max-w-sm pb-40 sm:pb-44">
            <figure className="ml-1 sm:ml-0 w-[82%] rotate-[-1deg] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:-rotate-2">
              <img
                src="/isack@grandpa.webp"
                alt="at grandpa's house"
                className="block w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </figure>

            <figure className="absolute right-1 sm:right-0 top-[70%] w-[76%] rotate-[1.5deg] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:rotate-0">
              <img
                src="/isack@musomabeach.webp"
                alt="at musoma beach"
                className="block w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
