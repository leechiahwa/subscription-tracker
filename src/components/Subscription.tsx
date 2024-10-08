import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export default function Subscription() {
  return (
    <Paper sx={{ bgcolor: "pink", padding: 3}}>
      <div className="container">
        <p className="title">Subscription</p>
        <TextField fullWidth margin="normal"label="Subscription name" id="subscription-name" />
      </div>
      <div className="container">
        <p className="title">Subscription price</p>
        <TextField fullWidth margin="normal" label="Subscription price" id="subscription-price" />
      </div>
    </Paper>
  );
}
