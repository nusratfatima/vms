import { useEffect } from "react";
import { getLatestVisit } from "../api/visits";

function Waiting({ approved }) {

  useEffect(() => {
    const timer = setInterval(async () => {
      const data = await getLatestVisit();
      if (data.status === "APPROVED") {
        approved(data.qr_code_url);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Waiting for approval…</h2>
    </div>
  );
}

export default Waiting;
