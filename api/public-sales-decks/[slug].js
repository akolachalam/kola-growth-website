export default async function handler(req, res) {
  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({ error: "Missing slug" });
  }

  const supabaseUrl = (process.env.SUPABASE_URL || "").trim();
  const serviceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  const table = (process.env.PUBLIC_SALES_DECKS_TABLE || "public_sales_decks").trim();

  if (!supabaseUrl || !serviceKey) {
    return res.status(500).json({ error: "Supabase not configured" });
  }

  const params = new URLSearchParams({
    slug: `eq.${slug}`,
    select: "payload",
    limit: "1",
  });

  const url = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${table}?${params}`;

  try {
    const response = await fetch(url, {
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Supabase request failed" });
    }

    const rows = await response.json();
    if (!Array.isArray(rows) || rows.length === 0 || !rows[0].payload) {
      return res.status(404).json({ error: "Deck not found" });
    }

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json(rows[0].payload);
  } catch (err) {
    return res.status(502).json({ error: "Supabase request failed" });
  }
}
