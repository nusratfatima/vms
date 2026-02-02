import { QRCodeCanvas } from "qrcode.react";

export default function ShowQR() {
  // Try getting real invite from storage
  let invite = JSON.parse(localStorage.getItem("latestInvite"));

  // Fallback dummy data for frontend testing
  if (!invite) {
    invite = {
      name: "Test Visitor",
      mobile: "+91 9876543210",
      host: "Admin Host",
      organization: "Galaxy Corp",
      checkInTime: new Date().toLocaleString(),
      id: "TEMP-" + Math.floor(Math.random() * 100000),
    };
  }

  // This becomes the QR content
  const qrData = JSON.stringify({
    id: invite.id,
    name: invite.name,
    mobile: invite.mobile,
  });

  return (
    <>
      <style>{`
        .page {
          min-height: 100vh;
          background: #f1f5f9;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          font-family: system-ui, sans-serif;
        }

        .pass {
          background: white;
          width: 720px;
          border-radius: 14px;
          padding: 24px 32px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
          border: 1px solid #e2e8f0;
        }

        .header {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .sub {
          color: #64748b;
          margin-bottom: 20px;
        }

        .content {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .details {
          flex: 1;
          font-size: 15px;
          line-height: 1.7;
        }

        .details b {
          font-weight: 600;
        }

        .signatures {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          font-size: 14px;
          color: #555;
        }

        .sign-line {
          border-top: 1px solid #999;
          width: 200px;
          text-align: center;
          padding-top: 6px;
        }

        .actions {
          text-align: right;
          margin-top: 20px;
        }

        button {
          padding: 8px 14px;
          margin-left: 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }

        .print-btn {
          background: #0b5ed7;
          color: white;
        }

        .skip-btn {
          background: #e2e8f0;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .pass, .pass * {
            visibility: visible;
          }
          .pass {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
          }
          .actions {
            display: none;
          }
        }
      `}</style>

      <div className="page">
        <div className="pass">
          <div className="header">Entry Pass</div>
          <div className="sub">Please show this at security</div>

          <div className="content">
            <QRCodeCanvas value={qrData} size={150} />

            <div className="details">
              <div><b>Name:</b> {invite.name}</div>
              <div><b>Mobile:</b> {invite.mobile}</div>
              <div><b>Host:</b> {invite.host}</div>
              <div><b>Organization:</b> {invite.organization}</div>
              <div><b>Check In:</b> {invite.checkInTime}</div>
            </div>
          </div>

          <div className="signatures">
            <div className="sign-line">Sign of the Visitor</div>
            <div className="sign-line">Sign of Security</div>
          </div>

          <div className="actions">
            <button className="skip-btn" onClick={() => window.history.back()}>
              Skip
            </button>
            <button className="print-btn" onClick={() => window.print()}>
              Print
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
