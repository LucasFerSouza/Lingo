try {
  const pg = require('pg');
  const pkg = require('pg/package.json');
  console.log('pg require succeeded');
  console.log('pg exports:', Object.keys(pg).join(', '));
  console.log('pg version:', pkg.version);
  if (pg.Client) {
    console.log('Client exists');
  }
  process.exit(0);
} catch (err) {
  console.error('Error requiring pg:', err && err.stack ? err.stack : err);
  process.exit(1);
}
