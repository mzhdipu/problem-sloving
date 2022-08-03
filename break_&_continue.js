// Write a code for loop from 30 to 86 but when loop value 44 break the loop 

for(i = 30; i < 86; i++){

    console.log(i)

    if(i == 44){
        break;
    }
}


// Write a code for loop from 30 to 86 but when loop value 55 just skip thie value the loop 

for(j = 30; j < 86; j++){

    if(j == 55){
        continue;
    }

    console.log(j)
}