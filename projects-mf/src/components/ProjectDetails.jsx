import VerizonDetails from "./VerizonDetails";
import MyEdioDetails from "./MyEdioDetails";
import InternetBankingDetails from "./InternetBankingDetails";
import HealthManagerDetails from "./HealthManagerDetails";

function ProjectDetails({
  selectedProject,
  onBack,
}) {
  switch (selectedProject) {
    case "Verizon Telecommunications Platform":
      return (
        <VerizonDetails onBack={onBack} />
      );

    case "MyEdio E-Learning Platform":
      return (
        <MyEdioDetails onBack={onBack} />
      );

    case "Internet Banking System":
      return (
        <InternetBankingDetails
          onBack={onBack}
        />
      );

    case "Health Manager":
      return (
        <HealthManagerDetails
          onBack={onBack}
        />
      );

    default:
      return null;
  }
}

export default ProjectDetails;