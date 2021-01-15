console.log('%c HI', 'color: firebrick')
let state = 0; 
function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(json => addImages(json));
}

function addImages(json) {
    // console.log(json['message']);
   const dogImage = document.querySelector('#dog-image-container')
   json['message'].forEach(function(url) {
        let newImage = document.createElement('img')
        newImage.src = url;
        dogImage.appendChild(newImage)
   });
   
} 

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => addBreeds(json));
}

function addBreeds(json) {
    const dogBreed = document.querySelector('#dog-breeds')
    dogBreed.innerHTML = ""
    if (state === 0) {
        Object.keys(json['message']).forEach(function(breed){
            let newBreed = document.createElement('li')
            newBreed.innerText = breed
            newBreed.addEventListener('click', function(){
                newBreed.setAttribute("style", "color:blue");
            })
        dogBreed.appendChild(newBreed)
        })    
        state = 1
    } else {
        let o = document.querySelector('#breed-dropdown') 
        let c = o.value
        Object.keys(json['message']).forEach(function(breed){
            if (breed.startsWith(c))
            let newBreed = document.createElement('li')
            newBreed.innerText = breed
        }
    }
   
}

function dropFilter() {
    const dropDown = document.querySelector('#breed-dropdown') 
    
}

function dropListener() {
    document.querySelector('#breed-dropdown') 
    
}



document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    fetchBreeds()
}) 