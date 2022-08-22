import { HomePage } from "components/home/HomePage";
import { getLayout } from "components/layout";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

Home.getLayout = getLayout;
