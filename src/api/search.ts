export const search = async (data: string) => {
    let responseForTitle = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${data}`);
    let responseForName = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${data}`);



    let quoteRelatedTitle = await responseForTitle.json()
    let quoteRelatedName = await responseForName.json()


    if (quoteRelatedTitle.error) {
        return quoteRelatedName
    } else {
        return quoteRelatedTitle
    }
}
