import "./App.css";
import UserRequestForm from "./components/UserRequestForm";
import BusinessProposal from "./components/BusinessProposal";
import {getDeliverablesData} from "./scripts/IDeliverablesAPIService";
import {useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

function App() {
// Deliverables
const [deliverables, setDeliverables] = useState({});
const [isInitLoading, setIsInitLLoading] = useState(true);
const [showErrorMessage, setShowErrorMessage] = useState(false);
const [showAuthMessage, setShowAuthMessage] = useState(false);
const [showProposal, setShowProposal] = useState(false);
const [sessionCode, setSessionCode] = useState(null);
const [businessProblem, setBusinessProblem] = useState("");
const [techStack, setTechStack] = useState("");
const [timeConstraint, setTimeConstraint] = useState("");
const [resourceConstraints, setResourceConstraints] = useState("");


useEffect(() => {
    // get/set sessionCode
    const params = new URLSearchParams(window.location.search); // Check for parameters
    const paramsSessionCode = params.get('session'); // Retrieve session parameter if there is one

    if (paramsSessionCode) {
      setSessionCode(paramsSessionCode);
      console.log(paramsSessionCode);
    } else{ // Fail: show default
      setIsInitLLoading(false);
    }}, []);

useEffect(() => {
  if (deliverables && Object.keys(deliverables).length > 0) {
    console.log("Deliverables state committed:", deliverables);
     setShowProposal(true);
  }
}, [deliverables]);


const generateDeliverable = async (e) => {
          e.preventDefault();
          try {
            const response = await getDeliverablesData(sessionCode, // session
                                                        businessProblem, // business_problem 
                                                        techStack, // tech_stack
                                                        timeConstraint, // time_constraint
                                                        resourceConstraints); // resource_constraints
            console.log("Received response from Deliverables API:", response);
            if (response.status === "error") {
              console.error("Error from Deliverables API:", response.message);
              setShowErrorMessage(true);
              return;
            }
            if(response.error && response.error.toLowerCase().includes("unauthorized")){
              setShowAuthMessage(true);
              return;
            } 
            setShowErrorMessage(false);
            setShowAuthMessage(false);
            setDeliverables(response);
          } catch (error) {
            console.error("Error saving messages:", error);
          }
        };

        ///////
const [errors, setErrors] = useState({});
const [submitting, setSubmitting] = useState(false);

const validate = () => {
  const e = {};
    if (!businessProblem.trim()) e.businessProblem = "Please describe the business problem or product.";
    if (techStack.length > 500) e.techStack = "Tech stack is too long (max 500 chars).";
    if (timeConstraint.length > 200) e.timeConstraint = "Time constraint is too long (max 200 chars).";
    if (resourceConstraints.length > 500) e.resourceConstraints = "Resource constraints are too long (max 500 chars).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      business_problem: businessProblem.trim(),
      tech_stack: techStack.trim(),
      time_constraint: timeConstraint.trim(),
      resource_constraints: resourceConstraints.trim(),
    };

    try {
      setSubmitting(true);
      await generateDeliverable(e);
    } finally {
      setSubmitting(false);
    }
  };

return (
     <div className="App">
       {showAuthMessage && <Typography variant="h5" sx={{ mb: 2 }} style={{ backgroundColor: "yellow" }}>
        You do not have permission to view this page. Please contact your administrator for a valid session url.
      </Typography>}
      {showErrorMessage && <Typography variant="h5" sx={{ mb: 2 }} style={{ backgroundColor: "yellow" }}>
        Error Ecountered. Please try again later.
      </Typography>}
      <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "0 auto", textAlign: "left", height: "auto", padding: "20px" }}>
          <h2>Describe Your Product / Business Problem</h2>

          <label htmlFor="businessProblem" style={{ display: "block", marginTop: 12 }}>
            Technical Business Problem / Product<span style={{ color: "crimson" }}>*</span>
          </label>
          <textarea
            id="businessProblem"
            placeholder="e.g., Build an intake portal for insurance patients to submit claims and track status"
            value={businessProblem}
            onChange={(e) => setBusinessProblem(e.target.value)}
            rows={4}
            required
            style={{ width: "100%" }}
          />
          {errors.businessProblem && (
            <div style={{ color: "crimson", fontSize: 12 }}>{errors.businessProblem}</div>
          )}

          <label htmlFor="techStack" style={{ display: "block", marginTop: 12 }}>
            Tech Stack
          </label>
          <input
            id="techStack"
            type="text"
            placeholder="e.g., React, Flask, Azure App Service, PostgreSQL"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            style={{ width: "100%" }}
            maxLength={500}
          />
          {errors.techStack && <div style={{ color: "crimson", fontSize: 12 }}>{errors.techStack}</div>}

          <label htmlFor="timeConstraint" style={{ display: "block", marginTop: 12 }}>
            Time Constraint
          </label>
          <input
            id="timeConstraint"
            type="text"
            placeholder="e.g., MVP in 4 weeks"
            value={timeConstraint}
            onChange={(e) => setTimeConstraint(e.target.value)}
            style={{ width: "100%" }}
            maxLength={200}
          />
          {errors.timeConstraint && (
            <div style={{ color: "crimson", fontSize: 12 }}>{errors.timeConstraint}</div>
          )}

          <label htmlFor="resourceConstraints" style={{ display: "block", marginTop: 12 }}>
            Resource Constraints
          </label>
          <textarea
            id="resourceConstraints"
            placeholder="e.g., 2 engineers, limited GPU budget, existing CRM must be used"
            value={resourceConstraints}
            onChange={(e) => setResourceConstraints(e.target.value)}
            rows={3}
            style={{ width: "100%" }}
            maxLength={500}
          />
          {errors.resourceConstraints && (
            <div style={{ color: "crimson", fontSize: 12 }}>{errors.resourceConstraints}</div>
          )}

          <div style={{ marginTop: 16 }}>
            <button type="submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Generate Proposal"}
            </button>
          </div>
      </form>
      {/* <UserRequestForm /> */}
      {/* create input form to take input requirements from users  */}
      {showProposal && <BusinessProposal deliverables={deliverables} />}
      <footer style={{ marginTop: 40, padding: 20, backgroundColor: "#eee", textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          &copy; 2026 AI HACKATHON. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
