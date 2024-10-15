import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';

type AppendDataRequestBody = {
  spreadsheetId: string;
  range: string;
  values: string[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { spreadsheetId, range, values } = req.body as AppendDataRequestBody;

      // Load the credentials (service account JSON)
      const credentialsPath = path.join(process.cwd(), 'secret.json');
      const credentials = JSON.parse(await fs.readFile(credentialsPath, 'utf8'));

      // Authorize the client
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      // Append data to the Google Sheet
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [values],
        },
      });

      res.status(200).json({ message: 'Data appended successfully', response });
    } catch (error) {
      console.error('Error appending data:', error);
      res.status(500).json({ message: 'Failed to append data', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
