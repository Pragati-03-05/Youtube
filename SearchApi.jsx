
const SearchApi = async (url, pageDetails) => {
   

    const video_http = `https://www.googleapis.com/youtube/v3/${pageDetails}?`
    const api_key = 'AIzaSyARkti5vgY2xlNJtaCGn7s8Ca2gtVNStzY';
    const params = Object.assign({
        key: api_key,
        part: 'snippet',
        maxResults: 50,
        regionCode: 'IN'
    }, pageDetails === 'search' ? { q: url} : { chart: url })
    const res = await fetch(video_http + new URLSearchParams(params))
    const data = await res.json();

    return data;
}
export default SearchApi;