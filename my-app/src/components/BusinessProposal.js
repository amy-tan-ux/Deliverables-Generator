import DataDesignPlan from "./DataDesignPlan";
import DeliveryPlan from "./DeliveryPlan";
import ProblemRequirements from "./ProblemRequirements";
import TechnicalDesignPlan from "./TechnicalDesignPlan";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BusinessProposal = ({deliverables}) => {
  const sections = [
    { id: "problem-requirements", title: "Problem & Requirements", Component: ProblemRequirements },
    //{ id: "technical-design", title: "Technical Design Plan", Component: TechnicalDesignPlan },
    { id: "data-design", title: "Data Design Plan", Component: DataDesignPlan },
    { id: "delivery-plan", title: "Delivery Plan", Component: DeliveryPlan },
  ];

  return (
    <Paper
      sx={{
        // bgcolor: "primary.main",
        py: 3,
        px: { xs: 2, sm: 4 },
        maxWidth: 800,
        mx: "auto",
      }}
    >
      <Box sx={{ px: { xs: 1, sm: 3 } }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Full Business Proposal
        </Typography>
        {sections.map(({ id, title, Component }) => (
          <Accordion key={id}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`${id}-content`}
              id={`${id}-header`}
            >
              <Typography component="span">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Component deliverables={deliverables} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
};

export default BusinessProposal;
