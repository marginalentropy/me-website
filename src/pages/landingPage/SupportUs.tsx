import { CheckCircleIcon } from "@heroicons/react/20/solid";

const type = [
  {
    name: "Donate",
    id: "tier-basic",
    href: "#",
    price: { monthly: "$15", annually: "$12" },
    description:
      "All proceeds go directly into running and operating our free classes. Donations help ensure there are enough laptops for each student to use for class.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Donate Hardware",
    id: "tier-essential",
    href: "#",
    price: { monthly: "$30", annually: "$24" },
    description:
      "Directly give away new or old computers and laptops for us to use in class.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Volunteer",
    id: "tier-growth",
    href: "#",
    price: { monthly: "$60", annually: "$48" },
    description:
      "Interested in utilizing your skills? Contact us .",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

export const SupportUs = () => {
  return (
    <div className="bg-white pt-16 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2> */}
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Support Us
          </p>
        </div>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {type.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14 ">
                <h3
                  id={tier.id}
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {tier.description}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
