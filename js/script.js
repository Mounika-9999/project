// ----------our team swiper-----------
const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabcursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // -----------products swiper----------
  const products = new Swiper(".product-slider-wrapper", {
    loop: true,
    grabcursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      
      768: {
        slidesPerView: 3,
      },
      992:{
        slidesPerView:4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });

//   --------------language selection--------------

const langSec = document.querySelector('.languageSection');
const selectBox = document.getElementById('languageSelect');
const textWebsiteName=document.querySelector('.websiteName');
const textNeedUs=document.querySelector('.needUs');
const textSearchProducts = document.querySelector('.searchProducts');
// -------------navbar
const textHome=document.querySelector('.home');
const textProducts=document.querySelector('.products');
const textAboutUs=document.querySelector('.aboutUs');
const textContactUs=document.querySelector('.contactUs');
const textVision=document.querySelector('.vision');
const textScroll=document.querySelector('.scroll');
// -------------products-----------
const textOurProducts=document.querySelector('.ourProducts');
const textDivyaDhara=document.querySelector('.divyaDhara');
const textGomayadhiThailam=document.querySelector('.gomayadhiThailam');
const textGoDantamanjan=document.querySelector('.goDantamanjan');
const textPanchgavyaGrutamu=document.querySelector('.panchgavyaGrutamu');
const textSahajaKumkuma=document.querySelector('.sahajaKumkuma');
const textAmruthaDhara=document.querySelector('.amruthaDhara');
const textPanchgavyaSoap=document.querySelector('.panchgavyaSoap');
const textNaturalFacePack=document.querySelector('.naturalFacePack');
const textViewAllProducts=document.querySelector('.viewAllProducts');
// -------------about cow feeding---------
const textFreeGrazing=document.querySelector('.freeGrazing');
const textFreeGrazingDefenition=document.querySelector('.freeGrazingDefenition');
const textColostrumFeeding=document.querySelector('.colostrumFeeding');
const textColostrumFeedingDefinition=document.querySelector('.colostrumFeedingDefinition');
const textOrganicAnimalFeed=document.querySelector('.organicAnimalFeed');
const textOrganicAnimalFeedDefinition=document.querySelector('.organicAnimalFeedDefinition');
// --------ourTeam--------
const textOurTeam=document.querySelector('.ourTeam');
const textMira=document.querySelector('.mira');
const textCeo=document.querySelector('.ceo');
const textDinesh=document.querySelector('.dinesh');
const textDirector=document.querySelector('.director');
const textSrinu=document.querySelector('.srinu');
const textPresident=document.querySelector('.president');
const textJansi=document.querySelector('.jansi');
const textCFO=document.querySelector('.cfo');
const textRahul=document.querySelector('.rahul');
const textCto=document.querySelector('.cto');
selectBox.addEventListener('change', () => {
  const selectedLanguage = selectBox.value;
  localStorage.setItem('selectedLanguage', selectedLanguage); // Save the selected language to localStorage

  // Update the language on the current page
  updateLanguage(selectedLanguage);

  // Append the selected language to the URL and navigate to the next page
  window.location.href = `products.html?lang=${selectedLanguage}`;
});

selectBox.addEventListener('change', () => {
  const selectedLanguage = selectBox.value;
  textWebsiteName.textContent=data[selectedLanguage].websiteName;
  textSearchProducts.placeholder = data[selectedLanguage].searchProducts;
  textHome.textContent = data[selectedLanguage].home;
  textProducts.textContent = data[selectedLanguage].products;
  textAboutUs.textContent = data[selectedLanguage].aboutUs;
  textContactUs.textContent=data[selectedLanguage].contactUs;
  textVision.textContent=data[selectedLanguage].vision;
  textScroll.textContent=data[selectedLanguage].scroll;
  textOurProducts.textContent=data[selectedLanguage].ourProducts;
  textDivyaDhara.textContent=data[selectedLanguage].divyaDhara;
  textGomayadhiThailam.textContent=data[selectedLanguage].gomayadhiThailam;
  textGoDantamanjan.textContent=data[selectedLanguage].goDantamanjan;
  textPanchgavyaGrutamu.textContent=data[selectedLanguage].panchgavyaGrutamu;
  textSahajaKumkuma.textContent=data[selectedLanguage].sahajaKumkuma;
  textAmruthaDhara.textContent=data[selectedLanguage].amruthaDhara;
  textPanchgavyaSoap.textContent=data[selectedLanguage].panchgavyaSoap;
  textNaturalFacePack.textContent=data[selectedLanguage].naturalFacePack;
  textViewAllProducts.textContent=data[selectedLanguage].viewAllProducts;
  // -------
  textFreeGrazing.textContent=data[selectedLanguage].freeGrazing;
  textFreeGrazingDefenition.textContent=data[selectedLanguage].freeGrazingDefenition;
  textColostrumFeeding.textContent=data[selectedLanguage].colostrumFeeding;
  textColostrumFeedingDefinition.textContent=data[selectedLanguage].colostrumFeedingDefinition;
textOrganicAnimalFeed.textContent=data[selectedLanguage].organicAnimalFeed;
textOrganicAnimalFeedDefinition.textContent=data[selectedLanguage].organicAnimalFeedDefinition;
// -----------
textOurTeam.textContent=data[selectedLanguage].ourTeam;
textMira.textContent=data[selectedLanguage].mira;
textCeo.textContent=data[selectedLanguage].ceo;
textDinesh.textContent=data[selectedLanguage].dinesh;
textDirector.textContent=data[selectedLanguage].director;
textSrinu.textContent=data[selectedLanguage].srinu;
textPresident.textContent=data[selectedLanguage].president;
textJansi.textContent=data[selectedLanguage].jansi;
textCFO.textContent=data[selectedLanguage].cfo;
textRahul.textContent=data[selectedLanguage].rahul;
textCto.textContent=data[selectedLanguage].cto;
});

const data = {
  "english": {
    "websiteName":"BRUNDHAVANAM",
    "searchProducts":"Search For Products",
    "home":"Home",
    "products":"Products",
    "aboutUs":"About Us",
    "contactUs":"Contact Us",
    "vision":"Vision",
    "scroll":"Gaumata is Viswa Mata. It gives everything, whatever required for this world. In turn it won’t expect anything from us. It’s our responsibility to save our mother, for the health and wealth of the mankind.",
    "ourProducts":"Our Products",
    "divyaDhara":"Divya Dhara Universal Pain Relief Oil",
    "gomayadhiThailam":"Gomayaadi Tailam Ear Drops",
    "goDantamanjan":"Go-Dantamanjan Tooth Powder",
    "panchgavyaGrutamu":"Panchgavya Grutamu Nasal Drops",
    "sahajaKumkuma":"Sahaja Kumkuma",
    "amruthaDhara":"Amrutha Dhara",
    "panchgavyaSoap":"Panchgavya Soap",
    "naturalFacePack":"Natural Face Pack",
    "viewAllProducts":"View All Products",

    "freeGrazing":"Free Grazing",
    "freeGrazingDefenition":"Yes there are benefits to free range feeding. The animals raised this way are more healthy with less fat in their tissues. Their tissues are monitored so sick stock are seperated out keeping them in a monitored area so contagion won't spread.",
"colostrumFeeding":"Colostrum Feeding",
"colostrumFeedingDefinition":" Colostrum is a white milky fluid that cattle produce during the first few days of delivery of the calf which is rich in antibodies,immunoglobulin, and other growth-promoting that helps the calves to fight against bacterial and viral diseases and helps in the development of the calves.",
   "organicAnimalFeed":"Organic Animal Feed" ,
   "organicAnimalFeedDefinition":"Organic animal feed is grown with no added synthetic pesticides,herbicides, or fertilisers.",
  
   "ourTeam":"Our Team",
   "mira":"Mira",
   "ceo":"Chief executive officer (CEO)",
   "dinesh":"Dinesh",
   "director":"Director",
   "srinu":"Srinu",
   "president":"President",
   "jansi":"Jansi",
   "cfo":"Chief financial officer (CFO)",
   "rahul":"Rahul",
"cto":"Chief technology officer (CTO)",

   

  },
  "తెలుగు": {
    "websiteName":"బృంధావనం",
    "searchProducts":"ఉత్పత్తుల కోసం శోధించండి...",
    "home":"హోమ్ పేజీ",
    "products":"ఉత్పత్తులు",
    "aboutUs":"మా గురించి",
    "contactUs":" సంప్రదించండి",
    "ourProducts":"మా ఉత్పత్తులు",
    "scroll":"గౌమాత విశ్వమాత. ఈ ప్రపంచానికి ఏది అవసరమో అది ప్రతిదీ ఇస్తుంది. క్రమంగా అది మన నుండి ఏమీ ఆశించదు.  మానవజాతి ఆరోగ్యం మరియు సంపద కోసం.మన గౌమాతను కాపాడుకోవడం మన బాధ్యత.",
    "vision":"దృష్టి",
    "divyaDhara":"దివ్య ధార యూనివర్సల్ పెయిన్ రిలీఫ్ ఆయిల్",
    "gomayadhiThailam":"గోమయాది తైలం చెవి చుక్కలు",
    "goDantamanjan":"గో-దంతమంజన్ టూత్ పౌడర్",
    "panchgavyaGrutamu":"పంచగవ్య గృతము నాసికా బిందువులు",
    "sahajaKumkuma":"సహజ కుంకుమ",
    "amruthaDhara":"అమృతధార",
    "panchgavyaSoap":"పంచగవ్యసబ్బు",
    "naturalFacePack":"సహజమైన ఫేస్ ప్యాక్",
    "viewAllProducts":"అన్ని ఉత్పత్తులను వీక్షించండి",

    "freeGrazing":"ఉచిత సాగు",
    "freeGrazingDefenition":"అవును, ఉచిత ఆహార ప్రయోజనాలు ఉన్నాయి. ఈ విధంగా పెరిగిన జంతువులు వాటి కణజాలాలలో కొవ్వు తక్కువగా ఉంటాయి. వారి కణజాలాలను పర్యవేక్షించడం వల్ల అనారోగ్య స్టాక్ ను పర్యవేక్షించడం జరుగుతుంది, తద్వారా అంటువ్యాధి వ్యాప్తి చెందదు",
"colostrumFeeding":"కోలోస్ట్రమ్ ఫీడింగ్",
"colostrumFeedingDefinition":"కొలొస్ట్రమ్ అనేది తెల్లటి పాలలాంటి ద్రవం, ఇది దూడను ప్రసవించిన మొదటి కొన్ని రోజులలో ఉత్పత్తి చేస్తుంది, ఇందులో యాంటీబాడీస్, ఇమ్యునోగ్లోబులిన్ మరియు ఇతర పెరుగుదల-ప్రోత్సహకాలు పుష్కలంగా ఉంటాయి, ఇది బాక్టీరియా మరియు వైరల్ వ్యాధులతో పోరాడటానికి మరియు దూడల పెరుగుదలకు సహాయపడుతుంది.",
"organicAnimalFeed":"సేంద్రీయ పశుగ్రాసం",
"organicAnimalFeedDefinition":"సేంద్రియ పశుగ్రాసాన్ని కృత్రిమ పురుగుమందులు, కలుపు సంహారకాలు లేదా ఎరువులు జోడించకుండా పెంచుతారు.",

"ourTeam":"మా బృంద సభ్యులు",
"mira":"మీరా",
"ceo":"చీఫ్ ఎగ్జిక్యూటివ్ ఆఫీసర్ (CEO)",
"dinesh":"దినేష్",
"director":"డైరెక్టర్",
"srinu":"శ్రీను",
"president":"అధ్యక్షుడు",
"jansi":"జాన్సీ",
"cfo":"ముఖ్య ఆర్థిక అధికారి (CFO)",
"rahul":"రాహుల్",
"cto":"చీఫ్ టెక్నాలజీ ఆఫీసర్ (CTO)",






    
  }
};

//   --------------language selection--------------
