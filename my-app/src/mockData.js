/**
 * Mock data for deliverable components.
 * Mirrors the shape of backend endpoints:
 * - Problem & Requirements, Technical Design, Data Design, Delivery Plan
 */

export const problemRequirementsMock = {
  "executive-summary": "test-executive-summary",
  "problem-definition": "test-problem-definition",
  "functional-requirements": [
    {
      "user-story": "name of user story1",
      "description": "description of user story1",
      "acceptance-criteria": "acceptance criteria of story1"
    },
    {
      "user-story": "name of user story2",
      "description": "description of user story2",
      "acceptance-criteria": "acceptance criteria of story2"
    }
  ]
};

export const deliveryPlanMock = {
  summary:
    "sample delivery plan summary with scope per milestone, success criterias etc",
  dependencies: "sample dependencies and assumptions",
  "risks-mitigation": "sample risks and mitigation"
};

export const technicalDesignPlanMock = {
  summary: "sample technical plan",
  tech: [
    { type: "infrastructure", name: "azure web-apps" },
    { type: "db", name: "mongodb" }
  ],
  "api-design": [
    {
      endpoint: "endpoint",
      "endpoint-description": "description of endpoint",
      "payload-format": "sample payload-format",
      "response-body-format": "sample json of response"
    }
  ]
};

export const dataDesignPlanMock = {
  summary: "sample summary of data design",
  "data-schema": [
    {
      "db-name": "sample db name",
      "table-name": "sample table name",
      "table-description": "sample table description",
      columns: [{ col: "colname", type: "bool" }]
    }
  ]
};
