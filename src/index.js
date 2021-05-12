// console.log('%c HI', 'color: firebrick')

// const dogContainer = document.getElementById('dog-image-container')

// fetch('https://dog.ceo/api/breeds/image/random/4')
// .then((res) => res.json())
// .then((myData) => {
//     myData.message.forEach(element => {
//         dogContainer.innerHTML = `<img src=${element}/>`
//     });
// })

console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    fetchBreeds()

    let dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change', filteredBreeds)
})


//!Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const fetchImages = () => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => data.message.forEach(url => renderImage(url)))
}

const renderImage = (url) => {
    let imageDiv = document.querySelector('#dog-image-container')
    let img = document.createElement('img')

    img.src = url

    imageDiv.appendChild(img)
}

//!Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = [];



const fetchBreeds = () => {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        for (breed in data.message){
            if(data.message[breed].length === 0){
                allBreeds.push(breed)
    
            } else {
                for(variation of data.message[breed]){
                    allBreeds.push(`${variation} ${breed}`)
                }
            }
            //allBreeds.push(breed)
        }
        renderBreeds(allBreads)
    })
}



//!Challenge 3

const renderBreeds = (breeds) => {
    breeds.forEach(breed => {


        let breedUl = document.querySelector('#dog-breeds')
        let li = document.createElement('li')

        li.innerText = breed

        breedUl.appendChild(li)

        li.addEventListener('click', changeColor)
    })
}

const changeColor = event => {
    event.target.style.color = colorChangeHelper()

}

const colorChangeHelper = () => {
    const colorArray = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'voilet',
    ];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
};

//!Challenge 4

const filterBreeds = event =>{
    let breedUl = document.querySelector('#dog-breeds')

    let filteredBreeds = allBreeds.filter(breed => breed[0] === event.target.value)

    breedUl.innerHTML = ''

    renderBreeds(filteredBreeds)
}