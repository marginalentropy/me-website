import { NavBar } from "./navBar/NavBar";


export const Page = () => {

  return (
    <div className="bg-white">
      <NavBar />

      <main>
        <div className="relative isolate">
          
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Lowering the barrier to technology for marginalized
                    communities.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Our Mission is to work towards remedying the diversity gap
                    in technology through accessibility, education, and empathy.
                  </p>
                  {/* <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  </div> */}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
