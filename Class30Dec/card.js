const jsonButton = document.querySelector('#generate');
const setup = document.querySelector('#setupValue');
const punchline = document.querySelector('#punchline');
const mainDiv = document.querySelector('#mainDiv');
const type1 = document.querySelector('#type');
const userId = document.querySelector('#user-points');

const url ="https://official-joke-api.appspot.com/random_joke";
function generateJson()
{
const xhr = new XMLHttpRequest();
xhr.responseType="json";
xhr.onload=()=>{
  renderResponse(xhr.response);
}
xhr.open("GET",url);
xhr.send();
}

// Display formatted data
const renderResponse = (jsonResponse) => {
  //const jsonSelection = Math.floor(Math.random() * 10);
  formatJson(jsonResponse);
};

// Change button text
const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};
// Format returned promise data
const formatJson = (resJson) => {
    mainDiv.style.display="block";
    setup.innerHTML = resJson.setup;
    punchline.innerHTML = resJson.punchline;
     type1.innerHTML = ` ${resJson.type}`;
     userId.innerHTML=resJson.id;
    let mystring;
  //let mystring  = `ip = ${resJson.setup} <br/> hostname = ${resJson.hostname} <br/> city = ${resJson.city}  <br/> region = ${resJson.region}  <br/> country = ${resJson.country} <br/> loc = ${resJson.loc}  <br/> org = ${resJson.org}  <br/> postal = ${resJson.postal} <br/> timezone = ${resJson.timezone}  <br/> readme = ${resJson.readme}`;
  return mystring;
};
const generateJson2 = async () => {
  try {
    const response = await fetch(url);
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};
async function post_data(params) {
  try {
    const response1 = await fetch("https://httpbin.org/post",
    {
      method:"POST",
      body: JSON.stringify({name:"Dhanashree",age:4})
    })
    if(response1.ok)
    {
      const jsonResponse = await response1.json();
     display.innerHTML = `<pre>${JSON.stringify(jsonResponse.data)}</pre>`;
    }
  } catch (error) {
    console.log(error);
  }
  
}
function generateJson3() { 
    fetch(url).then(response=>
    { 
      if(response.ok){
      return response.json();

    }
  }, networkError=>console.log("error"))
    .then(jsonResponse=>{
    
      renderResponse(jsonResponse);
      
    }
  )
};

function generateJson4() { 
    fetch("https://official-joke-api.appspot.com/random_joke").then(response=>
    { 
      if(response.ok){
      return response.json();

    }
  }, networkError=>console.log("error"))
    .then(jsonResponse=>{
    
      display.innerHTML = `<pre>${JSON.stringify(jsonResponse)}</pre>`;
      
    }
  )
};

// Listen for click on button
jsonButton.addEventListener('click', generateJson3);
//jsonPostButton.addEventListener('click', post_data);
