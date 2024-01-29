import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg text-center">
              {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Newly Added Books
              </h1> */}
              <p className="mt-4 text-3xl text-gray-500">
                <span className=" text-2xl font-bold font-serif"> &quot;</span>A
                room without books is like a body without a soul.{" "}
                <span className=" text-2xl font-bold font-serif"> &quot;</span>
              </p>

              <span className="text-xs font-light">
                - Marcus Tullius Cicero
              </span>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            src="https://i.ibb.co/34zSZ5X/The-5-AM-Club-by-Robin-Sharma.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://i.ibb.co/CtC3g65/The-Alchemist-by-Paulo-Coelho.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://i.ibb.co/Ns1BJYd/Think-and-Grow-Rich-by-Napoleon-Hill.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://i.ibb.co/wY84rVM/The-Power-of-Positive-Thinking-by-Norman-Vincent-Peale.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://i.ibb.co/KsCrjFq/How-to-Win-Friends-and-Influence-People-by-Dale-Carnegie.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://i.ibb.co/L5pDD7Q/The-7-Habits-of-Highly-Effective-People-by-Stephen-Covey.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://i.ibb.co/1LvVmTD/Atomic-Habits-by-James-Clear.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// https://i.ibb.co/VvvHZc2/Don-Quixote-by-Miguel-de-Cervantes.jpg
//
//
//
//
//
//
//
