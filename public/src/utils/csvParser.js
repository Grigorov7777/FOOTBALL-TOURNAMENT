// Simple CSV parser
export function parseCSV(data) {
  const rows = data.trim().split('\n');
  const headers = rows.shift().split(',');
  return rows.map(row => {
      const values = row.split(',');
      const obj = {};
      headers.forEach((header, index) => {
          obj[header] = values[index];
      });
      return obj;
  });
}
