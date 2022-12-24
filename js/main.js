let inputTextEl = document.querySelector('.input-container .input-food');
let saveBtnEl = document.querySelector('.input-container .input-button');
let formEl = document.querySelector('.food-container');
let noListEl = document.getElementById('no-list');
let foodListStatatics = document.getElementById('food-list-statastics');

handleFoodItem = (e)=>{
    let liEl = document.createElement('li');
    const divItem = document.createElement('div');
    const divRemoveBtn = document.createElement('div');
    divRemoveBtn.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>`;
    liEl.className = 'food-item';
    divItem.textContent = inputTextEl.value;
    liEl.append(divItem, divRemoveBtn)
    divRemoveBtn.setAttribute('onclick','removeItem(event)')
    formEl.append(liEl);
    inputTextEl.value = '';
    
    // set Local storage
    // localStorage.setItem('foodItems','my Value')
    localStorage.setItem('foodItems',[...JSON.parse(localStorage.getItem('foodItems') || '[]')]);
    refreshUI();
}


saveBtnEl.addEventListener('click',handleFoodItem)

// saveBtnEl.addEventListener('keyup',handleFoodItem)

inputTextEl.addEventListener('keyup',e=>{    
    if(e.key === 'Enter'){
        handleFoodItem();
    }else if(e.key === 'keyZ' && (e.ctrlKey || e.metaKey)){
        inputTextEl.textContent = ''
    }
     refreshUI();
});

function removeItem(event){
    let existingEl = event.target.parentNode.parentNode;
    existingEl.remove();
    refreshUI();
}
refreshUI();

function refreshUI(){    
    if (formEl.children.length > 0) {
        noListEl.hidden = true;
        foodListStatatics.hidden = false;
        foodListStatatics.innerText = `you Have ${formEl.children.length} list`;
    }else{
        noListEl.hidden = false;
        // foodListStatatics.innerText = `you Have ${formEl.children.length} list`;
        foodListStatatics.hidden = true;
    }
}

