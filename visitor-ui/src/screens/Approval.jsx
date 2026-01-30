import { useState } from "react";

function Approval({ setStep, visitId }) {
  const [status, setStatus] = useState("waiting");

  return (
    <div>
      {status === "waiting" && (
        <>
          <h2>Waiting for approval...</h2>
          <p>Visit ID: {visitId}</p>

          {/* TEMP button to simulate approval */}
          <button onClick={() => setStatus("approved")}>
            Approve (Simulate)
          </button>
        </>
      )}

      {status === "approved" && (
        <>
          <h2>Approved ✅</h2>
          <button onClick={() => setStep("success")}>
            Proceed
          </button>
        </>
      )}
    </div>
  );
}

export default Approval;
