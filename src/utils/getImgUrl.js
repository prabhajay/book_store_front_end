function getImgUrl(name)
{
    return new URL(`../assets/book/${name}`,import.meta.url)
}
export {getImgUrl}