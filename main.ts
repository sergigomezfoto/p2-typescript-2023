const fetchJson = async () => {
    const result = await fetch('https://www.freetogame.com/api/games');
    const jsonResponse :Array<any> = await result.json();
     console.log(jsonResponse.length); 

}

fetchJson();