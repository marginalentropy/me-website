const type = [
  {
    name: "Donate Money",
    description:
      "Help us bridge the technology divide for marginalized communities. Your generous contribution will enable us to provide accessible technology, valuable education, and promote empathy within these communities. Together, we can reduce the barriers and create equal opportunities for all. Donate now and make a meaningful impact.",
      buttonText: "Donate"
  },
  {
    name: "Donate Hardware",
    description:
      "Have unused laptops or computer equipment lying around? Donate them to our non-profit and help us empower marginalized communities through technology. Your donated hardware will be refurbished and provided to individuals who lack access to essential digital resources. By giving your old devices a new purpose, you can directly contribute to reducing technology barriers and enabling educational opportunities. Together, let's bridge the digital divide and make a difference. Donate your hardware today.",
  },
  {
    name: "Get Involved",
    description:
      "Looking to make a difference in the lives of marginalized communities through technology? Join our dedicated team and be a part of our mission to reduce technology barriers. Whether you have technical expertise, a passion for teaching, or a desire to contribute your skills, we welcome individuals like you to get involved. Together, we can create a more inclusive future by providing accessibility, education, and empathy to those who need it the most. Explore our volunteer opportunities and become a catalyst for change today.",
  },
];

export const SupportUs = () => {
  return (
    <div className="pb-32 pt-16">
      <div className="mx-auto prose max-w-7xl px-6 lg:px-8">
        <div className=" mx-auto max-w-4xl sm:text-center">
          <h1>
            Support Us
          </h1>
        </div>
        <div className="mt-10 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-base-300  sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {type.map((tier, index) => (
              <div key={index} className="pt-8 lg:px-8 lg:pt-0 xl:px-14 ">
                <h2
                  id={index.toString()}
                  className="text-base font-semibold leading-7"
                >
                  {tier.name}
                </h2>
                <p className="text-sm leading-6 text-gray-500">
                  {tier.description}
                </p>
                <a
                  href={"#"}
                  aria-describedby={index.toString()}
                  className="btn-primary btn-block btn mt-10 "
                >
                  Donate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
