const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function getSheetsClient() {
  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}


// Replace with your Sheet ID
const SPREADSHEET_ID = '1n_i1vzWmzOe1-2pXZV6Pre95aFrAjxcaayIZHlCbv44';

// Email and phone validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}

app.post('/submit', async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  if (!isValidPhone(phone)) {
    return res.status(400).json({ error: 'Phone must be 10 digits' });
  }

  try {
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:D',
      valueInputOption: 'RAW',
      resource: {
        values: [[name, email, phone, new Date().toISOString()]],
      },
    });

    res.json({ success: true, message: 'Data stored successfully' });
  } catch (err) {
    console.error('Google Sheets API error:', err);
    res.status(500).json({ error: 'Failed to store data' });
  }
});


app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
