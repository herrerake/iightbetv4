import { useEffect, useContext } from "react";
import Header from "../components/header";
import SignUpForm from "../components/sign-up-form";
// import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";

export default function Dashboard() {
  //   const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.title = "iight Bet";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div>
        {user ? (
          <div>
            <p className="text-center text-2xl mb-2">
              👑 {user.displayName} 👑 <br /> welcome to iight Bet!
            </p>{" "}
            <p className="text-center mx-1">
              Thank you for making an account. Your gambling experience is about
              to seriously improve. Stayed tuned for updates.
            </p>
          </div>
        ) : (
          <SignUpForm />
        )}
      </div>
    </div>
  );
}
