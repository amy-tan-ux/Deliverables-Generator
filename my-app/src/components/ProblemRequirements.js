import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { problemRequirementsMock } from "../mockData";

const ProblemRequirements = () => {
  const data = problemRequirementsMock;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Executive Summary
      </Typography>
      <Typography variant="body1" paragraph>
        {data["executive-summary"]}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Problem Definition
      </Typography>
      <Typography variant="body1" paragraph>
        {data["problem-definition"]}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Functional Requirements
      </Typography>
      {data["functional-requirements"].map((req, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {req["user-story"]}
          </Typography>
          <Typography variant="body2">{req.description}</Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            Acceptance: {req["acceptance-criteria"]}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProblemRequirements;
