

// eslint-disable-next-line no-unused-vars
const apiConfig = {
baseUrl: 'https://api.themoviedb.org/3/',
apiKey:'1429cd880b533a59863929143f75170d',

originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
w500Image:(imgPath)=>`https://image.tmdb.org/t/w500/${imgPath}`,
}
export default apiConfig

