import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import "./App.css";

interface SubscriptionData {
  name: string;
  cost: string;
  billingDate: string;
}

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [subscriptions, setSubscriptions] = useState<SubscriptionData[]>(() => {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : [];
  });
  const [open, setOpen] = useState(false); // State to control the dialog
  const [newSubscription, setNewSubscription] = useState<SubscriptionData>({
    name: "",
    cost: "",
    billingDate: "",
  });

  // Function to handle opening the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  const removeAllSubscriptions = () => {
    setSubscriptions([]);
    localStorage.removeItem("items");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(subscriptions));
  }, [subscriptions]);

  // Function to handle adding the new subscription
  const handleAddSubscription = () => {
    setSubscriptions([...subscriptions, newSubscription]);
    handleClose(); // Close the dialog after adding
    setNewSubscription({ name: "", cost: "", billingDate: "" }); // Clear input fields
  };

  // Handle changes in the input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSubscription({ ...newSubscription, [name]: value });
  };

  // Function to remove a subscription
  const handleRemoveSubscription = (indexToRemove: number) => {
    // Filter out the subscription by index
    setSubscriptions(
      subscriptions.filter((_, index) => index !== indexToRemove)
    );
  };

  // Function to edit a subscription
  const handleEditSubscription = () => {
    console.log("Edit");
  };

  return (
    <>
      <h1>Your Subscription Tracker</h1>
      <Button variant="contained" onClick={handleClickOpen}>
        New Subscription
      </Button>
      <Button variant="contained" onClick={removeAllSubscriptions}>
        Reset
      </Button>
      {/* Dialog for adding a new subscription */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Subscription</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Subscription Name"
            type="text"
            fullWidth
            value={newSubscription.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="cost"
            label="Cost"
            type="text"
            fullWidth
            value={newSubscription.cost}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="billingDate"
            label="Billing Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={newSubscription.billingDate}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddSubscription}>Add</Button>
        </DialogActions>
      </Dialog>
      <div>
        {subscriptions.map((subscription, index) => (
          <div key={index}>
            <h3>{subscription.name}</h3>
            <p>Cost: RM {subscription.cost}</p>
            <p>Billing Date: {subscription.billingDate}</p>
            {/* Edit Button */}
            <Button
              variant="outlined"
              color="primary"
              onClick={handleEditSubscription}
            >
              Edit
            </Button>
            {/* Remove Button */}
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleRemoveSubscription(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
