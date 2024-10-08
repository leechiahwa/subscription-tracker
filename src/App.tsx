import { useState } from "react";
import { Button } from "@mui/material";
import "./App.css";
import Subscription from "./components/Subscription";

function App() {
  const [subscription, setSubscription] = useState<JSX.Element[]>([]);
  const handleAddSubscription = () => {
    console.log("Add Subscription");
    setSubscription([
      ...subscription,
      <Subscription key={subscription.length} />,
    ]);
  };

  return (
    <>
      <h1>Your Subscription Tracker </h1>
      <Button variant="contained" onClick={handleAddSubscription}>
        New subscription
      </Button>
      <div>
        {subscription.map((subscription, index) => (
          <div key={index}>{subscription}</div>
        ))}
      </div>
    </>
  );
}

export default App;
