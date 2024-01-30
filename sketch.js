const container = document.querySelector('.container');
container.setAttribute('style', 'height: 800px;    width: 800px;    margin: auto;    display: flex;    background-color: aquamarine');


for (let i = 0; i<16;i++){
    const leader = document.createElement('div');
    leader.classList.add("leader");
    leader.setAttribute('style','display: flex; flex-direction: column; min-width: 8px; min-height: 8px;background-color: grey; flex: 1');
    container.appendChild(leader);

    
    for(let j=0; j<16; j++){
        const branch = document.createElement('div');
        branch.classList.add("branch");
        branch.setAttribute('style','min-height: 8px;; min-width: 8px;flex: 1; border: 1px solid black')
        leader.appendChild(branch);
        

    };
};

function readjustSize (desiredSize) {
    
}