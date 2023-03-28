/*
각각 card 에 상품명과 가격을 products 객체에서 데이터를 가져와 각각 다르게 표시해 준다
*/
//상품 , 가격 데이터 객체
const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
]

const title = document.querySelectorAll(".title");
const price = document.querySelectorAll(".price");

for(let i = 0; i < title.length; i++) {
        title[i].innerHTML = products[i].title;
        price[i].innerHTML = products[i].price;
        
}

//---------------------------------------------------------

const select = document.querySelectorAll(".form-select");
const sizeTitle = document.querySelector(".size-title");

const hadleClickOption = (event) => {
    if(event.target.value === "셔츠") {
        const option = [
        "<option>M</option>",
        "<option>L</option>",
        "<option>XL</option>",
        "<option>XXL</option>"];

        sizeTitle.classList.remove("hide");
        select[1].classList.remove("hide");
        select[1].innerHTML = option;
    }
    if(event.target.value === "바지") {
        const option = [
        "<option>28</option>",
        "<option>30</option>",
        "<option>32</option>"];
        sizeTitle.classList.remove("hide");
        select[1].classList.remove("hide");
        select[1].innerHTML = option;
    }
    if(event.target.value === "모자") {
        const option = [
        "<option>M</option>",
        "<option>L</option>",
        "<option>XL</option>"];
        sizeTitle.classList.remove("hide");
        select[1].classList.remove("hide");
        select[1].innerHTML = option;
    }
}
//select 태그는 input 과 유사한 속성을 가진 태그 이기 때문에 input , change 이벤트가 다 적용 된다.
select[0].addEventListener("input" , hadleClickOption);





