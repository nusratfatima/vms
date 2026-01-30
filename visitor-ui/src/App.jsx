import { useState } from "react";
import Checkin from "./Checkin";
import Approval from "./Approval";
import Success from "./Success";

function App() {
  const [step, setStep] = useState("checkin");
  const [visitId, setVisitId] = useState(null);

  return (
    <>
      {step === "checkin" && (
        <Checkin
          setStep={setStep}
          setVisitId={setVisitId}
        />
      )}

      {step === "approval" && (
        <Approval
          visitId={visitId}
          setStep={setStep}
        />
      )}

      {step === "success" && <Success />}
    </>
  );
}

export default App;
