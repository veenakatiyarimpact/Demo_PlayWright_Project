import { test } from '@playwright/test';


// Move zero
// Original array : [1,0,2,3,0,5]
// Final array : [1,5,3,2,0,0]

test('@Smoke Move Zero', async ({ page }) => {

  let age=[1,0,2,3,0,5];
  for (let i = 0 ; i< age.length; i++){
    let a = age[i];
    if(a == 0){
        for(let j = i+1; j< age.length; j++){
            let b = age[j];
            if(b != 0){
                let temp = b;
                age[j] = age[i];
                age[i] = temp;
            }

        }
    }
  }

  console.log("After : " + age);

});