const Shop=document.querySelector('.icon .hov');
const Bag=document.querySelector('.bags-hover');

Shop.onmousemove =() =>{
    Bag.classList.add('show');
  }
  document.onmouseup=(event)=>
      {
  
          Bag.classList.remove('show');
  
      }

    
function showCards(id, button) {
  // 1. إخفاء جميع الكروت
  const allCards = document.querySelectorAll('.cards-container');
  allCards.forEach(container => container.classList.remove('active'));

  // 2. إزالة تمييز الأزرار
  const allButtons = document.querySelectorAll('.button-container .button');
  allButtons.forEach(btn => btn.classList.remove('active'));

  // 3. عرض الكروت المرتبطة بالزر
  const selectedCards = document.getElementById(id);
  selectedCards.classList.add('active');

  // 4. تمييز الزر النشط
  button.classList.add('active');

}

// عرض الكروت الافتراضية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.button-container .button.active').click();
});




const sider =document.getElementById('sider');
const btnSider =document.getElementById('btn-sider');
btnSider.onclick= () => {
    if(btnSider.classList.contains('fa-chevron-down')){
        btnSider.classList.replace('fa-chevron-down','fa-chevron-up');
        sider.classList.add('show');
    } else {
        btnSider.classList.replace('fa-chevron-up','fa-chevron-down');
        sider.classList.remove('show');
    }
} 

const siderr=document.getElementById('siderr');
const btnSiderr =document.getElementById('btn-siderr');
btnSiderr.onclick= () => {
    if(btnSiderr.classList.contains('fa-chevron-down')){
        btnSiderr.classList.replace('fa-chevron-down','fa-chevron-up');
        siderr.classList.add('show');
    } else {
        btnSiderr.classList.replace('fa-chevron-up','fa-chevron-down');
        siderr.classList.remove('show');
    }
} 
const siderrr=document.getElementById('siderrr');
const btnSiderrr=document.getElementById('btn-siderrr');
btnSiderrr.onclick= () => {
    if(btnSiderrr.classList.contains('fa-chevron-down')){
        btnSiderrr.classList.replace('fa-chevron-down','fa-chevron-up');
        siderrr.classList.add('show');
    } else {
        btnSiderrr.classList.replace('fa-chevron-up','fa-chevron-down');
        siderrr.classList.remove('show');
    }
} 

const sider5=document.getElementById('sider5');
const btnSider5 =document.getElementById('btn-sider5');
btnSider5.onclick= () => {
    if(btnSider5.classList.contains('fa-chevron-down')){
        btnSider5.classList.replace('fa-chevron-down','fa-chevron-up');
        sider5.classList.add('show');
    } else {
        btnSider5.classList.replace('fa-chevron-up','fa-chevron-down');
        sider5.classList.remove('show');
    }
} 
const sider6=document.getElementById('sider6');
const btnSider6=document.getElementById('btn-sider6');
btnSider6.onclick= () => {
    if(btnSider6.classList.contains('fa-chevron-down')){
        btnSider6.classList.replace('fa-chevron-down','fa-chevron-up');
        sider6.classList.add('show');
    } else {
        btnSider6.classList.replace('fa-chevron-up','fa-chevron-down');
        sider6.classList.remove('show');
    }
} 
const sider7=document.getElementById('sider7');
const btnSider7=document.getElementById('btn-sider7');
btnSider7.onclick= () => {
    if(btnSider7.classList.contains('fa-chevron-down')){
        btnSider7.classList.replace('fa-chevron-down','fa-chevron-up');
        sider7.classList.add('show');
    } else {
        btnSider7.classList.replace('fa-chevron-up','fa-chevron-down');
        sider7.classList.remove('show');
    }
} 


const sider2=document.getElementById('sider2');
const btnSider2=document.getElementById('btn-sider2');
btnSider2.onclick= () => {
    if(btnSider2.classList.contains('fa-chevron-down')){
        btnSider2.classList.replace('fa-chevron-down','fa-chevron-up');
        sider2.classList.add('show');
    } 
    else {
        btnSider2.classList.replace('fa-chevron-up','fa-chevron-down');
        sider2.classList.remove('show');
    }
} 
const sider3=document.getElementById('sider3');
const btnSider3=document.getElementById('btn-sider3');
btnSider3.onclick= () => {
    if(btnSider3.classList.contains('fa-chevron-down')){
        btnSider3.classList.replace('fa-chevron-down','fa-chevron-up');
        sider3.classList.add('show');
    } 
    else {
        btnSider3.classList.replace('fa-chevron-up','fa-chevron-down');
        sider3.classList.remove('show');
    }
} 
const boxhide=document.getElementById('box-hide');
const asaider=document.getElementById('asaider');
asaider.onclick= () => {
      boxhide.classList.add('shoow');

    document.onmouseup=(event)=>
      {
          boxhide.classList.remove('shoow');
  
      }
} 





var mainImg=document.getElementById('main-img');
var images =document.querySelectorAll('.sub-image');

images.forEach((image)=>{
    image.addEventListener('click',()=>{
        mainImg.src=image.getAttribute('src');
    })
})


const sideer =document.getElementById('sideer');
const btnnSider =document.getElementById('btnn-sider');
btnnSider.onclick = () =>{
    if(btnnSider.classList.contains('fa-bars')){
        btnnSider.classList.replace('fa-bars','fa-close');
        sideer.classList.add('show');
}
else{
    btnnSider.classList.replace('fa-close','fa-bars');
    sideer.classList.remove('show');
}
}

let arrow = document.querySelector('.fa-arrow-up');
window.addEventListener('scroll', () => {
    arrow.classList.toggle('show', window.scrollY > 110);
});

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

