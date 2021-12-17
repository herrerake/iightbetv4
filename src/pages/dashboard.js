import { useEffect, useContext } from "react";
import Header from "../components/header";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";

export default function Dashboard() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  console.log("user", user);
  useEffect(() => {
    document.title = "iight Bet";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl mb-2">
          Yo {user.displayName}, welcome to iight Bet!
        </p>
        <p className="text-center mx-1">
          Thank you for making an account. Your gambling experience is about to
          seriously improve. Stayed tuned for updates.
        </p>
      </div>
    </div>
  );
}
