
export const getDeliverablesData = async (session, business_problem, tech_stack, time_constraint, resource_constraints) => {
    const API_BASE_URL = process.env.REACT_APP_DELIVERABLES_API || "";
    console.log("url" + API_BASE_URL);
    if (!API_BASE_URL) {
        console.error("DELIVERABLES_API environment variable is not set.");
        return {"status": "error", "message": "DELIVERABLES_API environment variable is not set."};
    }

    try{
        const openai_response = await fetch(API_BASE_URL + "/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "session": session || "default_session",
            "business_problem": business_problem || "test_business_problem",
            "tech_stack": tech_stack || "",
            "time_constraint": time_constraint || "",
            "resource_constraints": resource_constraints || ""
        })
    });
    return await openai_response.json();
    }catch(error){
        console.error("Error fetching data from Deliverables API:", error);
        return {"status": "error", "message": "Failed to fetch data from Deliverables API"};
    }
}   