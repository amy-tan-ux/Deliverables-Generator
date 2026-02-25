import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SolutionArchitecture from "./SolutionArchitecture";
import { technicalDesignPlanMock } from "../mockData";

const TechnicalDesignPlan = ({deliverables}) => {
  const data = technicalDesignPlanMock;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body1" paragraph>
        {data.summary}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Tech Stack
      </Typography>
      <Box component="ul" sx={{ pl: 2, mb: 2 }}>
        {data.tech.map((item, index) => (
          <Typography key={index} component="li" variant="body2">
            <strong>{item.type}:</strong> {item.name}
          </Typography>
        ))}
      </Box>

      <Typography variant="h6" gutterBottom>
        API Design
      </Typography>
      {data["api-design"].map((api, index) => (
        <Box key={index} sx={{ mb: 2, pl: 1, borderLeft: 1, borderColor: "divider" }}>
          <Typography variant="subtitle2">{api.endpoint}</Typography>
          <Typography variant="body2">{api["endpoint-description"]}</Typography>
          <Typography variant="caption" display="block">
            Payload: {api["payload-format"]}
          </Typography>
          <Typography variant="caption" display="block">
            Response: {api["response-body-format"]}
          </Typography>
        </Box>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Technical Diagrams
      </Typography>
      <SolutionArchitecture />
    </Box>
  );
};

export default TechnicalDesignPlan;
