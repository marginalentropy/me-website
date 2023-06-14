import { Layout } from "../../components/layouts/Layout";
import { SinglePersonReview } from "../../components/reviews/SinglePersonReview";
import { CoreTenants } from "./CoreTenants";
import { Hero } from "./Hero";

export const LandingPage = () => {
  return (
    <Layout>
      <Hero />

      <SinglePersonReview />

      <CoreTenants />
    </Layout>
  );
};
