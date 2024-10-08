// const langSec=document.querySelector('.languageSection');
// const buttons=document.querySelectorAll('a');
// const textTitle=document.querySelector('.title');
// const textDesc=document.querySelector('.description');
// buttons.forEach(button=>{
//     button.addEventListener('click',()=>{
//         langSec.querySelector('.active').classList.remove('active');
//         button.classList.add('active');
//         const attr=button.getAttribute('language');
//         textTitle.textContent=data[attr].title;
//         textDesc.textContent=data[attr].description;
//     })
// });
// const data={
//     "english":{
//         "title":"this is english",
//         "description":" this is english decription"
//     },
//     "తెలుగు":{
//         "title":"మీరు ఎలా ఉన్నారు",
//         "description":"మీ కుటుంబం ఎలా ఉంది"
//     },
   
// }
const langSec = document.querySelector('.languageSection');
const selectBox = document.getElementById('languageSelect');
const textTitle = document.querySelector('.title');
const textDesc = document.querySelector('.description');

selectBox.addEventListener('change', () => {
  const selectedLanguage = selectBox.value;
  textTitle.textContent = data[selectedLanguage].title;
  textDesc.textContent = data[selectedLanguage].description;
});

const data = {
  "english": {
    "title": "this is english",
    "description": "this is english description"
  },
  "తెలుగు": {
    "title": "మీరు ఎలా ఉన్నారు",
    "description": "మీ కుటుంబం ఎలా ఉంది"
  }
};
