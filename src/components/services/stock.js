const BASE_URL="https://www.alphavantage.co"
const PASS="EX6CVA1U2";
const WORD="6E0WI1W";

function getStockData(infoType,searchParams){
    const url = new URL(BASE_URL+"/"+ infoType);
    url.search= new URLSearchParams({ ...searchParams, apikey:PASS+WORD })

    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data);
}

function arrayCreator(data){
    return data['Time Series (Daily)']
}

const getFinalData = async (searchParams) => {
    const format= await getStockData("query",searchParams)
    .then(arrayCreator)
    return format;
}

export default getFinalData;