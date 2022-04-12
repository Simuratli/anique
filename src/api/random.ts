export const getRandomQuote = async () => {
    let response = await fetch('https://animechan.vercel.app/api/random');
    let quote = response ? response.json() : "Error"
    return quote
}