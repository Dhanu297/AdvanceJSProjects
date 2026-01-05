// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const submit1 = document.querySelector('#submit1');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint  = url + wordQuery;
   fetch(endpoint,{ cache: 'no-cache' }).then(response=>{
    if(response.ok)
    {
        return response.json();
    } 
    throw new Error('Request failed!');   
   },networkError => {console.log(networkError.message);}).then(jsonResponse =>
  {
    //renderRawResponse(jsonResponse);
    renderResponse(jsonResponse);
  })

   
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// Information to reach API

const queryParams = 'rel_jja=';

// Selecting page elements


// Asynchronous function
// Code goes here
const getSuggestions1  = async()=>
{
   const wordQuery = inputField.value;
  const endpoint  = url + queryParams + wordQuery;
  try
  {
      const response = await fetch(endpoint,{ cache: 'no-cache' });
      if(response.ok)
      {
         const jsonResponse = await response.json();
         renderResponse(jsonResponse);
      } 
  }
  catch(error)
  {
    console.log(error);
  }
}

// Clear previous results and display results to webpage
const displaySuggestions1 = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions1();
}
submit1.addEventListener('click', displaySuggestions1);


