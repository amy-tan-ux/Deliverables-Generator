import DataDesignPlan from "./DataDesignPlan";
import DeliveryPlan from "./DeliveryPlan";
import ProblemRequirements from "./ProblemRequirements";
import TechnicalDesignPlan from "./TechnicalDesignPlan";

const BusinessProposal = () => {
    return (
    <div>
        {/* Display Full Business Proposal*/}
        Full Business Proposal
        <ProblemRequirements/>
        <TechnicalDesignPlan/>
        <DataDesignPlan/>
        <DeliveryPlan/>
    </div>
      );
};


export default BusinessProposal;