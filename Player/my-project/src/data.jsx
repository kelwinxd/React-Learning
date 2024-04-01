// Importa todos os arquivos de áudio da pasta 'Audios' dinamicamente
const importAll = requireContext => requireContext.keys().map(requireContext);
const audioFiles = importAll(require.context('./Audios', false, /\.mp3$/));

// Cria o array de objetos com os detalhes de cada áudio
export const audioData = audioFiles.map(audio => ({
  title: audio.default.replace('.mp3', ''), // Usa o nome do arquivo como título (sem a extensão)
  url: audio.default,
}));
 console.log(audioData)