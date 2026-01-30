import { useState } from "react";
import Checkin from "./screens/Checkin";
import Approval from "./screens/Approval";
import Success from "./screens/Success";

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
