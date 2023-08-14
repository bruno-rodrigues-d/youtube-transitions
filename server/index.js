import express from 'express';
import cors from 'cors';
import { downloader } from './download-video';

const app = express();
app.use(cors());

app.get('/audio', async (req, res) => {
  const videoId = req.query.v

  try {
    await downloader(videoId);

    return res.send('ok');
  } catch (error) {
    console.log(error);
    return res.send(videoId);
  }
})

app.listen(3333, () => console.log('Server up!'))