import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { dataDesignPlanMock } from "../mockData";

const DataDesignPlan = ({deliverables}) => {

  let isDataArray = false;
  let isDataObject = false;

  // Data architecture list [{column, table}]
  const schemaTables = deliverables?.["problem_requirements"]["data architecture"] ?? deliverables?.["problem_requirements"]["data-architecture"] ?? "";
  console.log("Extracted schema:", schemaTables);
  if (Array.isArray(schemaTables)) {
    console.log("Schema is an array:", schemaTables);
    isDataArray = true;
  }
   // Data architecture object {tables: {tableName, Columns}}}
  else{
    console.log("Schema is not an array:", schemaTables);
    isDataObject = true;
    isDataObject =  typeof schemaTables === "string" ? false : true;  
    const dataSchemaArray = isDataObject && schemaTables["tables"] ? Object.entries(schemaTables["tables"]).map(
                                            ([key, value]) => ({
                                              name: key,
                                              columns: Array.isArray(value["columns"]) ? 
                                                        value["columns"].map(col => col.name + " [" + col.type + "]").join(", ") : 
                                                        typeof value["columns"] === "string" ? 
                                                        String(value["columns"]):
                                                        Object.entries(value["columns"]).map(
                                                          ([key, value]) => ({
                                                            name: key,
                                                            columns: Array.isArray(value["columns"]) ? 
                                                                      value["columns"].map(col => col.name + " [" + col.type + "]").join(", ") :
                                                                      String(value["columns"])})
                                                        )
                                                      })
                                          ) : [];
    if (dataSchemaArray.length > 0) {
      console.log("Transformed data schema array:", dataSchemaArray);
    }
  }
  


  // const execSummary = deliverables?.["problem_requirements"]["executive-summary"] ?? "";
  // console.log("Extracted executive summary:", execSummary);
  // const problemDef  = deliverables?.["problem_requirements"]["problem-definition"] ?? "";
  // console.log("Extracted problem definition:", problemDef);
  // const problemReqs = Array.isArray(deliverables?.["problem_requirements"]["problem-requirements"])
  //   ? deliverables["problem_requirements"]["problem-requirements"]
  //   : []; // fallback to empty array to avoid .map crash
  // console.log("Extracted problem requirements:", problemReqs);


  return (
    <Box>
      {/* <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body1" paragraph>
        {data.summary}
      </Typography> */}

      <Typography variant="h6" gutterBottom>
        Data Schema
      </Typography>
      {!isDataArray && !isDataObject && <Typography variant="body2" color="text.secondary">
        {schemaTables}
      </Typography>}
      <Box component="ul" sx={{ pl: 2, mb: 2 }}>
        {isDataArray && schemaTables.map((item, index) => (
          <Typography key={index} component="li" variant="body2">
            <strong>{item.table}:</strong>
            <Box component="ul" sx={{ pl: 2, mb: 1 }}>
              {Array.isArray(item.columns) && item.columns.map((col, colIndex) => (
                <Typography key={colIndex} component="li" variant="body2">
                  {col.name} [{col.type?col.type:"Unknown"}]: <code>{col.description}</code>
                </Typography>
              ))}
            </Box>
          </Typography>
        ))}
      </Box>
      {isDataObject && schemaTables.tables && (
  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
    {Object.entries(schemaTables.tables).map(([tableName, tableObj]) => (
      <Box
        key={tableName}
        sx={{ mb: 2, pl: 1, borderLeft: 2, borderColor: "primary.main" }}
      >
        <Typography variant="subtitle1">
          Table: {tableName}
        </Typography>

        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          {/* columns is a dictionary: { colName: typeString } */}
          {tableObj?.columns && typeof tableObj.columns === "object" && !Array.isArray(tableObj.columns) ? (
            Object.entries(tableObj.columns).map(([colName, typeStr]) => (
              <Typography key={colName} component="li" variant="body2">
                <strong>{colName}</strong> [{String(typeStr)}]
              </Typography>
            ))
          ) : (
            <Typography component="li" variant="body2" color="text.secondary">
              {tableObj.columns}
            </Typography>
          )}
        </Box>
      </Box>
    ))}
  </Box>
)}
    </Box>
  );
};

export default DataDesignPlan;
