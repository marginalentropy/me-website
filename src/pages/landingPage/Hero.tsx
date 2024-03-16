import { DonateButton } from "../../components/DonateButton";
import mc1 from "../../assets/classes/MinecraftCoding1.png";
import mc2 from "../../assets/classes/MinecraftCoding2.png";
import mc3 from "../../assets/classes/MinecraftCoding3.png";
import robotics1 from "../../assets/classes/Robotics1.png"
import robotics2 from "../../assets/classes/Robotics2.png"

const GridPattern = () => {
  return (
    <svg
      className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-neutral [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-neutral">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          strokeWidth={0}
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
      />
    </svg>
  );
};

const ColorBlurBackground = () => {
  return (
    <div
      className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      aria-hidden="true"
    >
      <div
        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-secondary to-primary opacity-30"
        style={{
          clipPath:
            "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
        }}
      />
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-base-content  sm:text-6xl">
        Reducing Technology Barriers for Marginalized Communities
      </h1>
      <p className="mt-6 text-lg leading-8 text-neutral-content sm:max-w-md lg:max-w-none">
        Our Mission is to work towards remedying the diversity gap in technology
        through accessibility, education, and empathy.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <DonateButton />
      </div>
    </div>
  );
};

const FloatingImages = () => {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <div className="ml-auto w-32 flex-none space-y-8 pt-56 sm:ml-0 sm:pt-80  xl:order-none xl:pt-80">
        <div className="relative">
          <img
            src={mc1}
            alt=""
            className="aspect-[1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
      {/* Images */}
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-48 lg:pt-36">
        <div className="relative">
          <img
            src={robotics1}
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="relative">
          <img
            src={mc2}
            alt=""
            className="aspect-[1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
      <div className="w-44 flex-none space-y-8 pt-16 sm:pt-0">
        <div className="relative">
          <img
            src={robotics2}
            alt=""
            className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="relative">
          <img
            src={mc3}
            alt=""
            className="aspect-[1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    // <div className="hero bg-base-200 py-24">
    //   <div className="hero-content text-center">
    //     <article className="prose max-w-md">
    //       <h1 className="font-bold">
    //         Reducing Technology Barriers for Marginalized Communities
    //       </h1>
    //       <p className="text-lg">
    //         Our Mission is to work towards remedying the diversity gap in
    //         technology through accessibility, education, and empathy.
    //       </p>
    //       <DonateButton />
    //     </article>
    //   </div>
    // </div>
    <main>
      <div className="relative isolate">
        <GridPattern />
        <ColorBlurBackground />
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <Content />
              <FloatingImages />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
