const enterDOM = document.querySelector('.enter');
const btnDOM = document.querySelector('.btn');
const searchDOM = document.getElementById('search');
const listDOM = document.querySelector('#list');




btnDOM.addEventListener('click', () => {
    const value = enterDOM.value;
    if (value.trim() !== '') {
        listDOM.append(Object.assign(document.createElement('li'), { textContent: value }));
    } else {
        alert('Enter country');
        return;
    }
});


searchDOM.addEventListener('keyup', search);

function search() {
    const searchValue = searchDOM.value;
    const countryList = listDOM.querySelectorAll('li');
    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].textContent.toLowerCase().includes(searchValue)) {
            countryList[i].style.display = "";
        } else {
            countryList[i].style.display = "none";
        }
    }
}