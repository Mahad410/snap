const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('menu');
const side_comp = document.getElementById('side_main_comp');
const side_feat = document.getElementById('side_main_feat');
const sub_menu_comp = document.getElementById('sub_menu_comp');
const sub_menu_feat = document.getElementById('sub_menu_feat');
const main_feat = document.getElementById('main_feat');
const main_comp = document.getElementById('main_comp');
const main_sub_feat = document.getElementById('main_sub_menu_feat');
const main_sub_comp = document.getElementById('main_sub_menu_comp');
openMenu.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
})
closeMenu.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)';
})

side_comp.addEventListener('click', () => {
    sub_menu_comp.classList.toggle('hide_side_feature');
    side_comp.children[0].classList.toggle('rotate');
    side_feat.children[0].classList.remove('rotate');
    side_comp.classList.toggle('active');
    side_feat.classList.remove('active');
    sub_menu_feat.classList.add('hide_side_feature');
})

side_feat.addEventListener('click', () => {
    sub_menu_feat.classList.toggle('hide_side_feature');
    side_feat.children[0].classList.toggle('rotate');
    side_comp.children[0].classList.remove('rotate');
    side_feat.classList.toggle('active');
    side_comp.classList.remove('active');
    sub_menu_comp.classList.add('hide_side_feature');
})

main_feat.addEventListener('click', () => {
    main_sub_feat.classList.toggle('hide_side_feature');
    main_feat.children[0].classList.toggle('rotate');
    main_comp.children[0].classList.remove('rotate');
    main_feat.classList.toggle('active');
    main_comp.classList.remove('active');
    main_sub_comp.classList.add('hide_side_feature');
})
main_comp.addEventListener('click', () => {
    main_sub_comp.classList.toggle('hide_side_feature');
    main_comp.children[0].classList.toggle('rotate');
    main_feat.children[0].classList.remove('rotate');
    main_comp.classList.toggle('active');
    main_feat.classList.remove('active');
    main_sub_feat.classList.add('hide_side_feature');
})