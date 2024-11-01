import React from "react";
import { Paper } from "@mui/material";
import moment from "moment"; // Assuming you have a formatDate utility function

interface SubscriptionListProps {
  subscriptions: {
    name: string;
    cost: string;
    billingDate: string;
  }[];
}

// Format date
const formatDate = (dateString: string) => {
  return moment(dateString, "YYYY-MM-DD").format("DD/MM/YYYY");
};

const SubscriptionList: React.FC<SubscriptionListProps> = ({
  subscriptions,
}) => {
  return (
    <Paper sx={{ margin: 2 }}>
      {subscriptions.map((subscription, index) => (
        <div className="p-3" key={index}>
          <h3>{subscription.name}</h3>
          <p>Cost: RM {subscription.cost}</p>
          <p>Next Billing Date: {formatDate(subscription.billingDate)}</p>
        </div>
      ))}
    </Paper>
  );
};

export default SubscriptionList;
