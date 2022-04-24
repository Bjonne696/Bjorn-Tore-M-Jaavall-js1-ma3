const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=923a0c06a5724484a42869e4583e9224";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
       
    
    
    
    try {
            const response = await fetch(corsFix);

            const data = await response.json();
            console.log(data);

            const facts = data.results;
    
            resultsContainer.innerHTML = "";
    
            for (let i = 0; i < facts.length; i++) {
        
        
                if (i === 8) {
                    break;
                }
        
                resultsContainer.innerHTML += `<div class="result">NAME: ${facts[i].name} RATING: ${facts[i].rating}! did not figure out how to count tags}</div>`;
    
            }
        } catch (error) {
            console.log("An error occurred");
            resultsContainer.innerHTML = alert("An error occurred when calling the API");
        }
    }
    

   
    

makeApiCall();