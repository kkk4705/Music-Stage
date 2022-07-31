require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const artistRouter = require('./routes/artist-page.router');
const listArtist = require('./routers/listArtist');
// const upload = require('./routers/upload');

const app = express();
app.use(cors());
const PORT = 3030 || 3001;

app.use(express.static(path.join(__dirname, 'music')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'blabla', // Секретное слово для шифрования, может быть любым
  store: new FileStore(),
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.use('/listArtist', listArtist);
// app.use('/upload', upload);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
