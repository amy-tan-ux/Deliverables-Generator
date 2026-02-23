import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { deliveryPlanMock } from "../mockData";

const DeliveryPlan = () => {
  const data = deliveryPlanMock;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body1" paragraph>
        {data.summary}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Dependencies
      </Typography>
      <Typography variant="body1" paragraph>
        {data.dependencies}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Risks & Mitigation
      </Typography>
      <Typography variant="body1">
        {data["risks-mitigation"]}
      </Typography>
    </Box>
  );
};

export default DeliveryPlan;
