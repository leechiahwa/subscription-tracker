import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import SubscriptionForm from "./SubscriptionForm";

interface SubscriptionDialogProps {
  open: boolean;
  handleClose: () => void;
  newSubscription: {
    name: string;
    cost: string;
    billingDate: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddSubscription: () => void;
  isFormValid: boolean;
}

const SubscriptionDialog: React.FC<SubscriptionDialogProps> = ({
  open,
  handleClose,
  newSubscription,
  handleChange,
  handleAddSubscription,
  isFormValid,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Subscription</DialogTitle>
      <SubscriptionForm
        newSubscription={newSubscription}
        handleChange={handleChange}
        handleAddSubscription={handleAddSubscription}
        handleClose={handleClose}
        isFormValid={isFormValid}
      />
    </Dialog>
  );
};

export default SubscriptionDialog;
