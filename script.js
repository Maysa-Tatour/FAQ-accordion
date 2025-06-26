const toggles= document.querySelectorAll('.toggle');
const answers= document.querySelectorAll('.answer');

toggles.forEach((btn , index)=>{
    btn.addEventListener('click' , ()=>{
        const answer= answers[index];
        const img=btn.querySelector('img');

        answer.classList.toggle('active');

        if(answer.classList.contains('active')){
            img.src='images/icon-minus.svg';
            img.alt='close';
        } else {
            img.src='images/icon-plus.svg';
            img.alt='open';
        }


    });
});