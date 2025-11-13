export default async function handler(req, res) {
  const { pct = "All Regions", from = "2023-01-01", to = "2025-11-13" } = req.query;

  const apiUrl = `https://berkshire-map-api.onrender.com/data?pct=${encodeURIComponent(pct)}&from_date=${from}&to_date=${to}`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: "Basic " + btoa(process.env.API_USER + ":" + process.env.API_PASS)
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}