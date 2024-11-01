import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import moment from "moment";
import SubscriptionDialog from "./Subscription/SubscriptionDialog";
import SubscriptionList from "./Subscription/SubscriptionList";
import "../App.css";

interface SubscriptionData {
  name: string;
  cost: string;
  billingDate: string;
}

export default function Subscription() {
  const [subscriptions, setSubscriptions] = useState<SubscriptionData[]>(() => {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : [];
  });
  const [open, setOpen] = useState(false);
  const [newSubscription, setNewSubscription] = useState<SubscriptionData>({
    name: "",
    cost: "",
    billingDate: moment().format("YYYY-MM-DD"),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewSubscription((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubscription = () => {
    setSubscriptions((prev) => [...prev, newSubscription]);
    handleClose();
  };

  const removeAllSubscriptions = () => {
    setSubscriptions([]);
    localStorage.removeItem("items");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(subscriptions));
  }, [subscriptions]);

  const isFormValid = Boolean(
    newSubscription.name && newSubscription.cost && newSubscription.billingDate
  );

  return (
    <>
      <h1 className="m-3">Subscriptions Tracker</h1>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" onClick={handleClickOpen}>
          Add
        </Button>
        <Button variant="contained" onClick={removeAllSubscriptions}>
          Remove All
        </Button>
      </Stack>
      <SubscriptionDialog
        open={open}
        handleClose={handleClose}
        newSubscription={newSubscription}
        handleChange={handleChange}
        handleAddSubscription={handleAddSubscription}
        isFormValid={isFormValid}
      />
      <SubscriptionList subscriptions={subscriptions} />
    </>
  );
}
