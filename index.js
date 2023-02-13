// problem: create a function that returns even numbers from 2 to 12
  /*
    > generate numbers from 0-13
    >filter out odd numbers
    > return even numbers
  */

    // the funciton below

    function evens (a,b) {
        let outputEven = [];
        let outputOdd = [];
        for(let i=0; i<a; i++){  // generates numbers
            if((i%2) == b) { // filter out odd number
                console.log(i);
               outputEven.push(i);
            }
            else{
                outputOdd.push(i);
            }
        }
        return {outputEven, outputOdd}
    }
const {outputEven, outputOdd} = evens(10,0);
    console.log(outputOdd);

    function greeting(a) {
        return a;
    }

    console.log(greeting('good Afternoon inside this afternoon!'));

    // create a funciton that verifies a userId from Localstorage
    /*
        > get input from user
        > loop through all the avaible userId
        > get all the keys
        > get all the values
        > check if input from user corresponds to any value in the localStorate
        > grant accesss or deny access

    */

        let getForm = document.querySelector('.username');
        let getUserInput = document.querySelector('.username input');
        let getErr= document.querySelector('.err');
        // console.log(getErr);

        getForm.addEventListener('submit', (e)=> {
            e.preventDefault(e);
            console.log(getUserInput.value);
           let userState= verifyId(String(getUserInput.value));
           if(userState == null) {
            getErr.innerHTML='Wrong User Name. Please try Again!';
           }
           else{
            getErr.innerHTML='';
           }
           console.log(userState);
            getForm.reset();
        });


        // store a username in localStorate
        localStorage.setItem('username1','chilemathy');
        // get username1 from localstorage
        console.log(localStorage.getItem('username1'));


   function verifyId (a) {
    let state =null;
         //  loop function
         for(let i=0; i<100; i++){
            let keyz= localStorage.key(i);
            let valuez= localStorage.getItem(keyz);
            // console.log(valuez);
            if(valuez == a) {
                console.log('userId found');
                console.log('access granted !!');
                state=true;
            }

            if(localStorage.key(i) == null){
                break;
            }
        }
        return state;
   }

//    verifyId('chilemathy');

/*
Problem: write a pseudo Algorithm that generates any lenght of even and odd numbers.
  > generate any length of numbers
  > filter out the even and odd numbers
  > return even and odd numbers

*/

function evenOdd(a) {
    let even=[], odd=[];
    for(let i=0; i< a; i++) { // generating any length of numbers
        if((i%2) == 0) { // filtering out even numbers
            // it's even
            even.push(i);
        }
        else{ // filtering out odd numbers
            //  it's odd
            odd.push(i);
        }
    }

    return {even, odd} // returnin even and odd numbers
}

let {even,odd} = evenOdd(100); // distructuring an array

console.log(even);
console.log(odd);

/*
Problem: write a pseudo Algorithm that verifies the values in localStorate
 based on key names from 1 to infinity
  
 > loop through all the keys
   > get all the keys with id 1 to infinity
   > check if key values matches the expected value
> return values


*/

function verifyValueBasedOnId(a,b) {
    let matchedId = [0]; let allId=[];

    for(let i=0; i< 100; i++) {
        let keys = localStorage.key(i);
        let intendedValue = localStorage.getItem(keys);
        let intendedValueId= localStorage.getItem(String(a).concat(i));
        let lastFoundId = localStorage.getItem(String(a).concat(i));
       if(String(intendedValueId) === b ) {
        console.log('user found !!!!');
        matchedId.push(i);
        console.log(i);
       }
       

       if(lastFoundId != null) {
        // console.log('found n are: ', lastFoundId);
        allId.push(i);
       }



        if(keys == null) {
            break;
        }
    }
    // console.log(allId[allId.length - 1]);
    let last = allId[allId.length - 1];
    return {matchedId, last};
}

localStorage.setItem('n', 'london');
localStorage.setItem('n1', 'london');
localStorage.setItem('n2', 'chelsea');
let {matchedId, last} = verifyValueBasedOnId('n', 'london');
console.log('matchedId : ', matchedId);
console.log('last user id was : ', last);
console.log('save new user with id of : ', last+1);