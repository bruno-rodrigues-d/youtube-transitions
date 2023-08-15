const renderChunk = ({timestamp, text}) => `
  <div class="chunk">
    <time class='flex'>${getMinutes(timestamp)}</time>
    <p>
      ${groupedText(text, timestamp)}
    </p>
  </div>
`

function getMinutes(timestamp) {
  return '00:00'
}

function groupedText(text, timestamp) {
  return text;
}

export function renderText({chunks}) {
  const formattedTranscription = chunks.map(renderChunk).join('');
  document.querySelector('.transcription .content').innerHTML = formattedTranscription;
}