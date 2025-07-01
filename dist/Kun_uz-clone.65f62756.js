'use strict';
// ============= VARIABLES =============
const langBtn = document.getElementById('langBtn');
const langList = document.querySelector('.lang__list');
const menuBtn = document.querySelector('.menu__btn');
const openBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
// ============= VARIABLES END =============
// ============= LANG BUTTON =============
langBtn.addEventListener('click', ()=>{
    langList.classList.toggle('hidden');
});
langList.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        langBtn.querySelector('span').textContent = e.target.textContent;
        langList.classList.add('hidden');
    }
});
// ============= LANG BUTTON END =============
// ============= MENU BUTTON =============
menuBtn.addEventListener('click', ()=>{
    openBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
});
// ============= MENU BUTTON END =============
// ============= SEARCH BUTTON =============
searchBtn.addEventListener('click', ()=>{
    searchInput.classList.toggle('search__input-active');
});
searchBtn.addEventListener('click', ()=>{
    searchInput.value = '';
}); // ============= SEARCH BUTTON END =============

//# sourceMappingURL=Kun_uz-clone.65f62756.js.map
