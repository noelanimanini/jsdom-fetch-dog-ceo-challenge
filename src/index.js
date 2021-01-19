console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
let allDogs = []
// grabbed all the data from the API and we were able to say, 'for all the dogs, grab the dog object key, messages, and for each dog, run the function buildDogImages(dog). 

//DATA
let fetchAllDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogs => dogs.message.forEach(dog => buildDogImages(dog)))
}
fetchAllDogs(); 
fetchAllDogBreeds()


//DOM manipulation stuff 

function buildDogImages(dog) {
    let dogImageContainer = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = dog
    img.style.width = '200px'
    dogImageContainer.appendChild(img)
}

/* This marks the end of challenge 1. We were able to fetch all the data from this api, create a function to display the dog images to the DOM 
    we built out: 
                    fetchAllDogs()
                        -called fetchAllDogs()
                            let fetchAllDogs = () => {
                                    fetch("https://dog.ceo/api/breeds/image/random/4")
                                    .then(response => response.json())
                                    .then(dogs => dogs.message.forEach(dog => buildDogImages(dog)))
                                    }
                            fetchAllDogs(); 
                    buildDogImages()
                        function buildDogImages(dog) {
                        let dogImageContainer = document.querySelector('#dog-image-container')
                        let img = document.createElement('img')
                        img.src = dog
                        img.style.width = '200px'
                        dogImageContainer.appendChild(img)
                        }

1. we found the dog image container in the HTML file. 
2. we created the element 'img'. 
3. we appended 'src' to the img element and assigned it the parameter 'dog'
    -'src' is an attribute in javascript
4. we adjusted the image size to be appropriate 
5. we appended the img tag to the dogimagecontainer. */ 

//DATA
function fetchAllDogBreeds(dog) {
    fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {
        allDogs = Object.keys(breeds.message)
        allDogs.forEach(dog => renderDogBreeds(dog))
    })
}

//DOM
function renderDogBreeds(dog) {
    console.log(dog)
    let dogUl = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = dog 
    li.id = dog
    li.addEventListener('click', clickEvent)
    // li.addEventListener('click', (event) => clickEvent(event, li)) //added for the third challenge
    dogUl.appendChild(li)
}

/* This marks the end of challenge 2. This means that for the first deliverable for this challenge, 
on page load, we fetched all dog breeds using the fetch() method. This method grabbed all dogs from the url API, converted it into a JSON that is readable, then we created a dom response with the second .then. By doing so, we said, 'let allDogs equal the Object key's message
//DATA
function fetchAllDogBreeds(dog) {
    fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {
        let allDogs = Object.keys(breeds.message)
        allDogs.forEach(dog => renderDogBreeds(dog))
    })
}

//DOM
function renderDogBreeds(dog) {
    console.log(dog)
    let dogUl = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = dog 
    dogUl.appendChild(li)
}
*/
//event handler
function clickEvent(event) {
    let li = document.getElementById(event.target.id)
    li.style.color = 'pink'

}

/* The above has completed challenge 3. This means we added an event listener. 
li.addEventListener('click', (event) => clickEvent(event, li))
This means, we were able to say, on the event of a 'click', we want the text to change color for the li that was created for all breeds listed. 

This challenge we were able to chain and create an event handler to create a reponse to the event itself.*/


// challenge 4
function changeHandling(event) {
    console.log(event.target.value)
    // let dogBreeds = document.querySelector('#dog-breeds')
    // let filteredDogs = allDogs.filter(dog => dog.startsWith(event.target.value))
    // dogBreeds.innerHTML = ''
    // filteredDogs.forEach(dog => renderDogBreeds(dog))
}

// adding events
function addEventListeners() {
    let select = document.querySelector('select')
    select.addEventListener('change', changeHandling)
}
