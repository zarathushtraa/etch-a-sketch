const container = document.querySelector('.container');
container.setAttribute('style', 'height: 800px;    width: 800px;    margin: auto;    display: flex; border: 8px solid black');



for (let i = 0; i<16;i++){
    const leader = document.createElement('div');

    leader.classList.add(`leader`);
    
    container.appendChild(leader);
    leader.setAttribute('style','display: flex; flex-direction: column; min-width: 8px; min-height: 8px;background-color: white; flex: 1');

    
    for(let j=0; j<16; j++){
        const branch = document.createElement('div');
        branch.classList.add(`branch`);
        
        leader.appendChild(branch);
        branch.setAttribute('style','min-height: 8px; min-width: 8px;flex: 1');
        branch.addEventListener('mouseover',()=>branch.style.backgroundColor = 'black');

    };
    
};
const leaders = document.querySelectorAll('.leader');



const sizeButton = document.createElement('button');
sizeButton.textContent = 'Resize sketch';
sizeButton.addEventListener('click',() => {
    let size = prompt("Enter a new size up to 100");
    readjustSize(size)});
sizeButton.setAttribute('style','height: 20px; width: 150px');
document.body.insertBefore (sizeButton,container);

/*const scndButton = document.createElement('button');
scndButton.textContent = 'Restart sketch';
sizeButton.addEventListener('click', ()=>{
    const branches = document.querySelectorAll('.branch');
    for (const branch of branches){
        branch.style.backgroundColor = 'white';
    };
});
scndButton.setAttribute('style','height: 20px; width: 150px');
document.body.insertBefore (scndButton,container);
*/


function readjustSize (desiredSize) {
    if (desiredSize <16 || desiredSize >100) return alert('Please, give me a number between 16 and 100 :)');
    const leaders = document.querySelectorAll('.leader');

    for (const leader of leaders){;
    container.removeChild(leader);
    }

    for (i = 0; i<desiredSize;i++){
        const leader = document.createElement('div');
        leader.classList.add("leader");
        leader.setAttribute('style','display: flex; flex-direction: column; min-width: 8px; min-height: 8px; flex: 1');
        container.appendChild(leader);

        
        for(let j=0; j<desiredSize; j++){
            const branch = document.createElement('div');
            branch.classList.add("branch");
            branch.setAttribute('style','min-height: 8px;; min-width: 8px;flex: 1');
            leader.appendChild(branch);
            branch.addEventListener('mouseover',()=>branch.style.backgroundColor = 'black');
            

        };
    };
    
}