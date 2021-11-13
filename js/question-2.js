const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8f6b233ef9ab4918ae87b263a14f594a";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
        try {
            const response = await fetch(corsFix);

            const results = await response.json();
    
            resultsContainer.innerHTML = "";
    
            for (let i = 0; i < results.length; i++) {
                console.log(results[i].text);
        
                if (i === 8) {
                    break;
                }
        
                resultsContainer.innerHTML += `<div class="result">${results[i].text}</div>`;
    
            }
        } catch (error) {
            console.log("An error occurred");
            resultsContainer.innerHTML = displayError("An error occurred when calling the API");
        }
    }
    

   
    

makeApiCall();
