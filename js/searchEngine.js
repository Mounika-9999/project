const product=[
    {
        id:'1',
        image:'images/amruthaDharaOne.jpeg',
        title:'Amruth Dhara',
        price:'233',
        description:'Relieves Stomach Pain | Bloating | Belching | Gas | Vomiting |Diarrhea | Cold | Cough | Body Pains.',
        pageLink:'/AmruthaDhara.html'

    },
    
    {
        id:'2',
        image:'images/GauDantManjanSeven.jpeg',
        title:'Gau-Dant Manjan Tooth Powder',
        price:'343',
        description:'oral & dental problems | inflammation of gums | bleeding gums.',
        pageLink:'/GauDantManjanToothPowder.html'

    },
    {
        id:'3',
        image:'images/gauDharaOne.jpeg',
        title:'Gau Dhara Universal Pain Relief Oil',
        price:'343',
        description:'Cold | Headache | Burns & all kinds of pain',
        pageLink:'/GauDharaUniversalPainReliefOil.html'

    },
    {
        id:'4',
        image:'images/gomayadiTailamOne.jpeg',
        title:'Gomayadi Tailam Ear Drops',
        price:'223',
        description:'Ear-related infections | boils | sores & for pain relief in ear |reducing side effects of radiation caused by mobile phones.',
        pageLink:'/GomayadiTailamEarDrops.html'

    },
    {
        id:'5',
        image:'images/panchgavyaGhruthamOne.jpeg',
        title:'Panchagavya Ghrutam Nasal Drops',
        price:'123',
        description:'Fever | Sinus | Migraine | Headache | Nerve Weakness | Snoring |Jaundice | Brain & Liver problems.',
pageLink:'/PanchagavyaGhrutam.html'
    },
    {
        id:'6',
        image:'images/SahajaKunkumaOne.jpeg',
        title:'Sahaja Kunkuma',
        price:'253',
        description:'Dharana is auspicious & Mangal Dayakam',
        pageLink:'/SahajaKunkuma.html'

    }
]
const categories=[...new Set(product.map((item)=>{return item}))]

document.getElementById('searchBar').addEventListener('keyup',(e)=>{
    const searchData=e.target.value.toLowerCase();
    const filterData=categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem=(items)=>{
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image,title,price,description,pageLink}=item;
        return(
         

    `<a href="/project${pageLink}">

      <div class="card cardProducts col-sm-6 col-md-3 col-lg-4">
        <img
          class="card-img-top"
          src=${image}
          alt="Card image cap"
        />
        <div class="card-body">
          <div class="card-title card-title-products">${title}</div>
          <div class="usesOfProducts">
            ${description}
          </div>
          <div class="productPrice">₹ ${price}.00</div>
        </div>
        <div class="footer">
          <div class="orderNowButton">
            <button class="btn btn-success">Order Now</button>
          </div>
        </div>
      </div>
    </a>`
        )
    }).join('')
};
displayItem(categories);
        