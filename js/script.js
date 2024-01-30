function showNavbar() {
    let navicon = document.querySelector('.side-navbar');
    navicon.style.left = '0';
}
function hideNavbar() {
    let navicon = document.querySelector('.side-navbar');
    navicon.style.left = '-50%';
}

var productCont = document.querySelector('.product-lists');
var enteredText = document.querySelector('#search-ID');
var productDetail = productCont.querySelectorAll('.product-list-img');
var heartIcons = document.querySelectorAll('.hearticon');
heartIcons.forEach( (heartIcon)=> {
    heartIcon.addEventListener('click',function(event) {
        heartIcon.classList.toggle('heart-btn');
    })
});
enteredText.addEventListener('keyup',function(event) {
    var enteredText = event.target.value.toLowerCase();

    for(i=0;i<productDetail.length;i++) {
        
        var searchValue = productDetail[i].querySelector('h3').textContent;
        if(searchValue.toLowerCase().indexOf(enteredText)<0) {
            productDetail[i].style.display = 'none'
        } else {
            productDetail[i].style.display = 'block' 
        }
    }
})

var productBox = document.querySelectorAll('.product-list-img');
var orderButton = document.querySelectorAll('button')
orderButton.forEach((btn)=> {
    btn.addEventListener('click',function(event) {
        alert('Please login first;after that,you will be able to order the product.')
    })
})

let form=document.querySelector('form')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let mobile=document.querySelector('#mobile')
form.addEventListener('submit',function(event){
    event.preventDefault();
    alert('Please Fill Details');
})






