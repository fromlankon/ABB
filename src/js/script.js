const language = document.querySelector('.language');
const lagnuageSelect = document.querySelector('.languageSelect');
const chevDown = document.querySelector('.chevDown');

language.addEventListener('click', function(){
    if(lagnuageSelect.style.display == "block")
        lagnuageSelect.style.display = "none"
        else{
            lagnuageSelect.style.display = "block"
        } 
})

language.addEventListener('click', function(){
    if(chevDown.style.transform == "rotate(-180deg)")
        chevDown.style.transform = "rotate(0deg)"
            else{
                chevDown.style.transform = "rotate(-180deg)"
            }
})