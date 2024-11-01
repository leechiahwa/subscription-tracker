import React from "react";
import { TextField, DialogContent, DialogActions, Button } from "@mui/material";

interface SubscriptionFormProps {
  newSubscription: {
    name: string;
    cost: string;
    billingDate: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddSubscription: () => void;
  handleClose: () => void;
  isFormValid: boolean;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  newSubscription,
  handleChange,
  handleAddSubscription,
  handleClose,
  isFormValid,
}) => {
  return (
    <>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
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
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={newSubscription.billingDate}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          type="submit"
          disabled={!isFormValid}
          onClick={handleAddSubscription}
        >
          Add
        </Button>
      </DialogActions>
    </>
  );
};

export default SubscriptionForm;
