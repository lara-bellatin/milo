// import { getLayout } from "components/layout";
// import { useRouter } from "next/router";

// export default function IndexPage() {
//   const router = useRouter();
//   router.push("/login");

//   return null;
// }

// IndexPage.getLayout = getLayout;
import LoginForm from "components/login/LoginForm";


export default function IndexPage() {
  return (<>
      <LoginForm />
    </>
    )
}