const mock_return = {
    "problem-requirement": 
        {"executive-summary": "test_summary", 
            "problem-statement": "test_problemstatement", 
            "requirements": "test_requirement"},
    "technical-design":
        {"technical-solution":"",
            "architecture-diagram": {"bound1": [{"component-type": "db", "name": "test_name","tech":"Azure"},{"component-type": "db", "name": "test_name","tech":"Azure"}],
                                    "bound2": [{"component-type": "db", "name": "test_name","tech":"Azure"},{"component-type": "db", "name": "test_name","tech":"Azure"}]}},
    "data-design":
        {"data-schema": [{"table-name":"test-table","col-name":"testcol", "description":"testdescription", "type": "Bool"}]},
    "delivery-plan":
        [{"date":"", "milestone":"", "task":""}, {"date":"", "milestone":"", "task":""}, {"date":"", "milestone":"", "task":""}]}

export const getDeliverablesData = async (accessCode) => {
    // TODO: get data from Deliverables API (Interface)
    return mock_return
};