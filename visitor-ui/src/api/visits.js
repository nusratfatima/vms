const BASE_URL = "http://127.0.0.1:8000/api/visits";

export async function checkIn(data) {
  const res = await fetch(`${BASE_URL}/checkin/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getLatestVisit() {
  const res = await fetch(`${BASE_URL}/latest/`);
  return res.json();
}

export async function checkoutVisit(token) {
  const res = await fetch(`${BASE_URL}/verify-qr/?token=${token}`);
  return res.json();
}
