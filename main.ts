const fetchJson = async () => {  
    const data = await fetch("https://images-api.nasa.gov/search?q=hubble")
    const jsonResponse :Array<any> = await data.json();
    console.log(jsonResponse); 
       

}
fetchJson();