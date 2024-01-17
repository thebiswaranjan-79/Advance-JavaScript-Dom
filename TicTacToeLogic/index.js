document.addEventListener("DOMContentLoaded", ()=>{

    let outer = document.getElementById("outer");
    let chance = false; // When chance is false we put 0 , when chance is trur we put X

    let arr = Array(9).fill(undefined);

    outer.addEventListener("click", (e)=>{
        // console.log(e.target)// This is called Event Delegation 
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        // console.log(cellNumber);
        if(cell.getAttribute("data-clicked")){
            return;
        }
        cell.setAttribute("data-clicked", "true");

        if(chance == true){
            cell.textContent = "X";
            arr[cellNumber] = "X";
            winningCombo("X");
        }else{
            cell.textContent = "O";
            arr[cellNumber] = "O";
            winningCombo("O");
        }
       
        chance = !chance;// toggle Chance
    })

    function winningCombo(char){

        let result = document.getElementById("result");

                         // This is For Rows 

        if(arr[0] == char && arr[1] == char && arr[2] == char){
            // the 0th row is aving the Char 
            result.textContent = `${char} wins`;
        }
        else if(arr[3] == char && arr[4] == char && arr[5] == char){
            // the 1st row is aving the Char 
            result.textContent = `${char} wins`;
        }
        else if(arr[6] == char && arr[7] == char && arr[8] == char){
            // the 2nd row is aving the Char 
            result.textContent = `${char} wins`;
        }

                        // This is For the Column


        else if(arr[0] == char && arr[3] == char && arr[6] == char){
            // the 0th COl is aving the Char 
            result.textContent = `${char} wins`;
        }else if(arr[1] == char && arr[4] == char && arr[7] == char){
            // the 1st COl is aving the Char 
            result.textContent = `${char} wins`;
        }else if(arr[2] == char && arr[5] == char && arr[8] == char){
            // the 0th COl is aving the Char 
            result.textContent = `${char} wins`;
        }

                      // Now for the 2 diagonals

        else if(arr[1] == char && arr[4] == char && arr[8] == char){
            // the 0th COl is aving the Char 
            result.textContent = `${char} wins`;
        }else if(arr[2] == char && arr[4] == char && arr[6] == char){
            // the 0th COl is aving the Char 
            result.textContent = `${char} wins`;
        }
    }
});