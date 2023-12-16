import { DonateButton } from "../../components/DonateButton";

export const Hero = () => {
  return (
    <div className="hero bg-base-200 py-24">
      <div className="hero-content text-center">
        <article className="prose max-w-md">
          <h1 className="font-bold">
            Reducing Technology Barriers for Marginalized Communities
          </h1>
          <p className="text-lg">
            Our Mission is to work towards remedying the diversity gap in
            technology through accessibility, education, and empathy.
          </p>
          <DonateButton />
        </article>
      </div>
    </div>
  );
};
