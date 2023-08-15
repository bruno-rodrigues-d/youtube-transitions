import axios from 'axios';
import { startLoading, stopLoading, loadingMessage } from './loading'
import { renderText } from './render';
import { transcribeAudio } from './transcribe';
import { getVideoId, loadVideo } from './youtube-api';


const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    loadingMessage('Iniciando a aplicação');
    startLoading();

    const formData = new FormData(form);
    const url = formData.get('url');

    await loadVideo(url);

    loadingMessage('Baixando e convertendo o vídeo!');
    await axios.get('http://localhost:3333/audio?v=' + getVideoId(url))
  
    const data = await transcribeAudio();
    renderText(data);
    console.log(data);
  } catch (error) {
    console.log('[SUBMIT_ERROR]', error);
  } finally {
    stopLoading();
  }
});