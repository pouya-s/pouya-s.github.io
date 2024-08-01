/*
	Name: Pouya Shahrdami
	File: main.js
	Date: 29-07-2024
	Assignment 5 part 1
*/
// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function () {
    let showHideText = showHideBtn.textContent;
    if (showHideText === 'Show comments') {
        showHideBtn.textContent = 'Hide comments';
        commentWrapper.style.display = 'block';
    } else {
        showHideBtn.textContent = 'Show comments';
        commentWrapper.style.display = 'none';
    }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function (e) {
    e.preventDefault();
    submitComment();
};

function submitComment() {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
}

const transcribe_btn = document.querySelector('.transcribe-button');
const transcribe_text = document.querySelector('.transcribe-text');
transcribe_text.style.display = 'none'
transcribe_btn.addEventListener('click', e => {
    if (transcribe_text.style.display === "none") {
        transcribe_text.style.display = "block";
        transcribe_text.textContent = 'This isn\'t really an audio fact file about bears, but it is an audio file that you can transcribe.';
    } else {
        transcribe_text.style.display = "none";
    }
})