require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL not found in environment or .env");
  process.exit(1);
}

const sql = neon(url);

(async () => {
  try {
    const rows = await sql`SELECT table_schema, table_name
       FROM information_schema.tables
       WHERE table_name = 'courses'
       ORDER BY table_schema, table_name;`;

    if (!rows || rows.length === 0) {
      console.log('No rows found for table "courses".');
    } else {
      console.log("Found rows:");
      console.log(JSON.stringify(rows, null, 2));
    }
  } catch (err) {
    console.error("Error querying database:", err);
    process.exit(1);
  }
})();
