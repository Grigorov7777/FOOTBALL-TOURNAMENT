// Parse various date formats
export function parseDate(dateStr) {
  const formats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'];
  for (const format of formats) {
      const date = moment(dateStr, format, true);
      if (date.isValid()) return date.toDate();
  }
  return null; // Or handle invalid date case
}
