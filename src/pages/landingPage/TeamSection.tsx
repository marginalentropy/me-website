import jocelynn from "../../assets/Jocelynn.jpg";
import allison from "../../assets/Ally.jpg";
import emily from "../../assets/Emily.jpg";
import { LinkedIn } from "../../components/svg/LinkedIn";

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
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 ">
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
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight ">
                {person.name}
              </h3>
              <p className="text-sm leading-6 ">{person.role}</p>
              <p>{person.bio}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <LinkedIn href=""/>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
