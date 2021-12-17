import { useEffect } from "react";
import Header from "../components/header";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - iight Bet";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Coming Soon, stay tuned!</p>
      </div>
    </div>
  );
}
