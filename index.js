'use script';

const tab = document.querySelector('.operationsTab');
console.log(tab);

tab.addEventListener('click',function(e){
    e.preventDefault();
    const clicked = e.target.closest('.tabBtn');
    const selectedContent = document.querySelector(`.content${clicked.dataset.tab}`);
    document.querySelectorAll('.content').forEach(function(con){
    con.classList.add('hidden');
    con.classList.remove('active');
    });
    selectedContent.classList.remove('hidden');
    selectedContent.classList.add('active');

});
