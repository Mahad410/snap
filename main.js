const feature = document.getElementById('feature');
const company = document.getElementById('company');
const drop_feat = document.getElementById('drop_feature');
const drop_comp = document.getElementById('drop_comp');
const drop_img_feat = document.getElementById('drop_img_feat');
const drop_img_comp = document.getElementById('drop_img_comp');
feature.addEventListener('click',
    ()=>{
        if(feature.lastElementChild.classList.contains('drop_menu')){
            drop_feat.classList.toggle('active');
            drop_comp.classList.remove('active');
            feature.lastElementChild.classList.toggle('drop_menu_hide');
            feature.lastElementChild.classList.add('opacity');
            company.lastElementChild.classList.add('drop_menu_hide');
            drop_img_feat.classList.toggle('rotate');
            drop_img_comp.classList.remove('rotate');
        }
        else{
            return false
        }
    })

company.addEventListener('click',
    ()=>{
        if(company.lastElementChild.classList.contains('drop_menu')){
            drop_comp.classList.toggle('active');
            drop_feat.classList.remove('active');
            company.lastElementChild.classList.toggle('drop_menu_hide');
            company.lastElementChild.classList.add('opacity');
            feature.lastElementChild.classList.add('drop_menu_hide');
            drop_img_comp.classList.toggle('rotate');
            drop_img_feat.classList.remove('rotate');
        }
        else{
            return false;
        }

    })