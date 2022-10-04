import { PageHome } from "components/pages/PageHome";
import { getLayout } from "components/layouts/site-layout";

export default function Home() {
  return (
    <>
      <PageHome />
    </>
  );
}

Home.getLayout = getLayout;