Project Overview: Description of the application and its purpose.
File Structure: Overview of the directory structure and file purpose.
Setup Instructions: How to clone the repository, install dependencies, and run the project.
Usage: How to navigate the application and its features.
Algorithm: High-level description of the algorithm used to process and visualize the data:
Load CSV files using a custom parser.
Parse and handle various date formats.
Display tournament brackets, match details, and team rosters.
Future Enhancements: Potential features like search/filter functionality and responsive design.
2. Components
Header.js: Displays the header section with navigation links.
Footer.js: Displays the footer with additional information or links.
MatchBracket.js: Visualizes the bracket of all matches, showing the progression of the tournament.
MatchDetails.js: Displays details for a selected match, including team formations and match results.
TeamDetails.js: Displays the roster of players for a selected team.
PlayerList.js: Shows a list of players with their details and statistics.
3. Data Processing
csvParser.js: Custom CSV parser to read and parse CSV files. Handle different date formats here.
dateUtils.js: Utility functions to handle and format dates.
dataLoader.js: Functions to load CSV data, parse it, and prepare it for use in the application.