import jocelynn from "../../assets/Jocelynn.jpg";
import allison from "../../assets/Ally.jpg";
import emily from "../../assets/Emily.jpg";

const people = [
  {
    name: "Jocelynn Hartwig",
    role: "President & Co-Founder | Minecraft Educator",
    imageUrl: jocelynn,
    bio: "Jocelynn is a cloud engineer by day and freelances custom web development on the side. She was inspired to found this philanthropy because she is passionate about increasing the amount of diversity in technology. She is a certified Minecraft Teacher and she cannot wait to teach more students about code and logic through Minecraft.",
    linkedinUrl: "https://www.linkedin.com/in/jocelynn23/",
  },
  {
    name: "Allison Ransom",
    role: "Secretary & Co-Founder | Minecraft Educator",
    imageUrl: allison,
    bio: "Allison Ransom has been in software engineering since 2009. She has held professional positions as an engineer, a mentor, and a leader. She truly has an engineer’s mind and a teacher’s heart. Her role within Marginal Entropy includes using her experience teaching others how to code to enrich students’ experience in our Minecraft Class. She also plays a strong role in our curriculum adaption, website design, and overall organization.",
    linkedinUrl: "https://www.linkedin.com/in/allison-ransom-1a1b8873/",
  },
  {
    name: "Emily Samoylov",
    role: "Treasurer & Co-Founder | Minecraft Educator",
    imageUrl: emily,
    bio: "Emily Samoylov is a builder in every sense of the word. She has built automation, websites, mobile apps, and incredible structures in Minecraft. She's also built up those around her with a willingness to teach, share knowledge, and always be an insightful friend. In Emily's professional life, she's a full-stack React and C# developer with two years of professional experience. In her personal life she loves video games, her cat, and keeping up on all things Linux. Emily was driven to help co-found Marginal Entropy from a love of Minecraft, her joy in learning and sharing new things, and her desire to bridge the gender gap in STEM.",
    linkedinUrl: "https://www.linkedin.com/in/emily-samoylov/",
  },
];

export const TeamSection = () => {
  return (
    <div className="bg-base-200 p-4 pt-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We are a group of technologists by trade, and educators at heart. We
            are incredibly grateful for the opportunity to use our professional
            skills to help bridge the diversity gap in technology.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="mx-auto h-56 w-56 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <p>{person.bio}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
