//if-else condition statement
let number=-7
if(number > 0){
    console.log(`${number} is a postive number`)
}
else if(number < 0){
    console.log(`${number} is a negative number`)
}
else{
    console.log(`${number} is a even number`)
}
//switch-case statements
let day = 5

switch(day){
    case 1:
        console.log(`${day} Monday`);
        break
    case 2:
        console.log(`${day} Tuesday`);
        break
    case 3:
        console.log(`${day} wednesday`);
        break
    case 4:
        console.log(`${day} Thursday`);
        break
    case 5:
        console.log(`${day} Friday`);
        break
    case 6:
        console.log(`${day} Saturday`);
        break
    case 7:
        console.log(`${day} Sunday`);
        break
}
//ternary operator
let age = 17
let ageshould =(age>18)? 'Adult' : 'Minor'
console.log(ageshould)

// for loop print 1 to 10
for(i=1;i<=10;i++){
    console.log(i)
}
// reverse loop 10 to 1
for(i=10;i>=1;i--){
    console.log(i)
}

/**
 * output:
 * -7 is a negative number
5 Friday
Minor
1
2
3
4
5
6
7
8
9
10
10
9
8
7
6
5
4
3
2
1
 */
