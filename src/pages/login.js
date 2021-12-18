import { useEffect } from "react";
import SignUpForm from "../components/sign-up-form";
import Header from "../components/header";

export default function Login() {
  useEffect(() => {
    document.title = "Login - iight Bet";
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-md items-center h-screen">
        <SignUpForm />
      </div>
    </>
  );
}
