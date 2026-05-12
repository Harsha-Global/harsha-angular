const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const takenUsernames = ['admin', 'user', 'test', 'administrator'];

app.get('/api/check-username', (req, res) =>
{
  const username = req.query.username;

  setTimeout(() =>
  {
    const available = !takenUsernames.includes(username.toLowerCase());
    res.json({ available });
  }, 1000);
});

app.listen(3000, () =>
{
  console.log('Server running on http://localhost:3000');
});

