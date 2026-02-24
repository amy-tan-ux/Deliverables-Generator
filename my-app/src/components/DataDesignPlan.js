import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { dataDesignPlanMock } from "../mockData";

const DataDesignPlan = () => {
  const data = dataDesignPlanMock;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body1" paragraph>
        {data.summary}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Data Schema
      </Typography>
      {data["data-schema"].map((schema, index) => (
        <Box key={index} sx={{ mb: 2, pl: 1, borderLeft: 2, borderColor: "primary.main" }}>
          <Typography variant="subtitle1">
            {schema["db-name"]} / {schema["table-name"]}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {schema["table-description"]}
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            {schema.columns.map((col, colIndex) => (
              <Typography key={colIndex} component="li" variant="body2">
                {col.col}: <code>{col.type}</code>
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DataDesignPlan;
