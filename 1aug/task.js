const elementById = document.getElementById('uniqueElement');
elementById.style.backgroundColor = 'lightblue';
elementById.style.fontSize = '30px';
elementById.style.fontStyle= "italic bold 20px ";
const elementsByClassName = document.getElementsByClassName('class1');
for (let i = 0; i < elementsByClassName.length; i++) {
    elementsByClassName[i].style.color = 'red';
}

const elementsByTagName = document.getElementsByTagName('p');
for (let i = 0; i < elementsByTagName.length; i++) {
    elementsByTagName[i].style.border = '2px solid green';
}
const elementByQuerySelector = document.querySelector('.container .element');
elementByQuerySelector.style.fontStyle = 'italic';
elementByQuerySelector.style.fontSize='20px';


const elementsByQuerySelectorAll = document.querySelectorAll('.item');
elementsByQuerySelectorAll.forEach(element => {
    element.style.margin = '80px';
    element.style.backgroundColor='black';
    element.style.color='white';
    element.style.fontSize='15px';


});

const uniqueElementAboutMe = document.getElementById('uniqueElementAboutMe');
uniqueElementAboutMe.style.backgroundColor = 'lightgreen';
uniqueElementAboutMe.style.padding = '20px';
uniqueElementAboutMe.style.border = '5px dashed black';
uniqueElementAboutMe.style.fontFamily = 'Arial, sans-serif';