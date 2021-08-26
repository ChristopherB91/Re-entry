function jobsearch(){
    fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=4e16c244&app_key=2453fbaf0631f03cb9ec9dd46de45d5e&what=felony%20friendly`)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error))
}
function displayData(data){
    console.log(data)
    let reportList = document.getElementById('result')
    reportList.innerHTML = ' '
    for(let i = 0; i <=data.results.length; i++){
        let title = data.results[i].title;
        let description = data.results[i].description;
        let url = data.results[i].redirect_url
        
        reportList.innerHTML += `<br><li>${title} : ${description} | The url: ${url}</li>`
    }
}
