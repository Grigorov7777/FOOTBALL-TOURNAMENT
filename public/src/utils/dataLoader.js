import { parseCSV } from './csvParser';
import { parseDate } from './dateUtils';

export async function loadData() {
    const players = await fetchCSV('data/players.csv');
    const teams = await fetchCSV('data/teams.csv');
    const matches = await fetchCSV('data/matches.csv');
    const records = await fetchCSV('data/records.csv');

    return {
        players: parseCSV(players),
        teams: parseCSV(teams),
        matches: parseCSV(matches),
        records: parseCSV(records)
    };
}

async function fetchCSV(filePath) {
    const response = await fetch(filePath);
    return response.text();
}
