import { Layout } from "../../components/layouts/Layout";
import { SinglePersonReview } from "../../components/reviews/SinglePersonReview";
import { CoreTenants } from "./CoreTenants";
import { CurrentOffers } from "./CurrentOffers";
import { Hero } from "./Hero";
import { SupportUs } from "./SupportUs";
import { TeamSection } from "./TeamSection";

export const LandingPage = () => {
  return (
    <Layout>
      <Hero />

      <SinglePersonReview />

      <CoreTenants />

      <CurrentOffers />

      <TeamSection />

      <SupportUs />
    </Layout>
  );
};
