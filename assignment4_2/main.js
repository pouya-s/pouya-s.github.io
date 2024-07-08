const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
const alt = ["pic 1", "pic 2", "pic 3", "pic 4", "pic 5"];
/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', a => {
        displayedImage.src = a.target.src;
        displayedImage.alt = a.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', e => {
    const btnclass = btn.getAttribute('class');
    if (btnclass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
})