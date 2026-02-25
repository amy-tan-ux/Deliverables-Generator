import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ProblemRequirements = ({ deliverables = {} }) => {

  console.log("ProblemRequirements received deliverables inside component:", deliverables);
  const execSummary = deliverables?.["problem_requirements"]["executive-summary"] ?? "";
  console.log("Extracted executive summary:", execSummary);
  const problemDef  = deliverables?.["problem_requirements"]["problem-definition"] ?? "";
  console.log("Extracted problem definition:", problemDef);
  const problemReqs = Array.isArray(deliverables?.["problem_requirements"]["problem-requirements"])
    ? deliverables["problem_requirements"]["problem-requirements"]
    : []; // fallback to empty array to avoid .map crash
  console.log("Extracted problem requirements:", problemReqs);
  const techSolution = deliverables?.["problem_requirements"]["technical-solution"] ?? "";
  console.log("Extracted technical solution:", techSolution);
  const isSolutionObj =  typeof techSolution === "string" ? false : true;  
  const techSolutionArray = isSolutionObj ? Object.entries(techSolution).map(
                                            ([key, value]) => ({
                                              type: key,
                                              name: Array.isArray(value) ? value.join(", ") : String(value)
                                            })
                                          ) : [];



  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Executive Summary
      </Typography>
      <Typography variant="body1" paragraph>
        {execSummary}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Problem Definition
      </Typography>
      <Typography variant="body1" paragraph>
        {problemDef}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Functional Requirements
      </Typography>
      {problemReqs.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No requirements available.
        </Typography>
      ) : (
        problemReqs.map((req, index) => (
          <Box key={index} component="ul" sx={{ pl: 2, mb: 2 }}>
            <Typography variant="body2" component="li">{String(req)}</Typography>
          </Box>
        ))
      )}

      <Typography variant="h6" gutterBottom>
        Technical Solution
      </Typography>
      {!isSolutionObj && <Typography variant="body1" paragraph>
        {techSolution}
      </Typography>}
      {isSolutionObj && <Box component="ul" sx={{ pl: 2, mb: 2 }}>
        {techSolutionArray.map((item, index) => (
          <Typography key={index} component="li" variant="body2">
            <strong>{item.type}:</strong> {item.name}
          </Typography>
        ))}
      </Box>}
    </Box>
  );
};

export default ProblemRequirements;
