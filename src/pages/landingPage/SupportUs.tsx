import { DonateButton } from "../../components/DonateButton";

const type = [
  {
    name: "Donate Money",
    description:
      "Your generous contribution will enable us to provide accessible technology and valuable education within communities. Together, we can reduce the barriers and create equal opportunities for all. Donate now and make a meaningful impact.",
    buttonText: "Donate",
  },
  // {
  //   name: "Donate Hardware",
  //   description:
  //     "Have unused laptops or computer equipment lying around? Donate them to our non-profit. Your donated hardware will be refurbished and provided to individuals who lack access to essential digital resources. Donate your hardware today.",
  // },
  // {
  //   name: "Get Involved",
  //   description:
  //     "Whether you have technical expertise, a passion for teaching, or a desire to contribute your skills, we welcome individuals like you to get involved. Explore our volunteer opportunities and become a catalyst for change today.",
  // },
];

export const SupportUs = () => {
  return (
    <div className="pb-32 pt-16">
      <div className="prose mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" mx-auto max-w-4xl sm:text-center">
          <h1>Support Us</h1>
        </div>
        <div className="mt-10 flow-root">
          {/* <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-base-300  sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4"> */}
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-base-300  sm:mx-auto lg:mt-0 lg:divide-y-0">
            {type.map((tier, index) => (
              <div key={index} className="pt-8 lg:px-8 lg:pt-0 xl:px-14 ">
                <h2
                  id={index.toString()}
                  className="text-base font-semibold leading-7"
                >
                  {tier.name}
                </h2>
                <p className="text-sm leading-6">{tier.description}</p>
                <DonateButton className="btn-block mt-10"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
