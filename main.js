
//1

function func(string,valueToReplace,valueToReplaceWith) {
    return string.split("").map(x => {
        if(x === valueToReplace){
            return valueToReplaceWith
        }else{
            return x ;
        }
    }).join("");
}

console.log(func("Lia","L","G"))

// 2 


function funcTwo(string) {
    return string.trim().split(" ").map(x => {
        x = x[0].toUpperCase() + x.slice(1)
        return x;
    }).join(" ");
}
console.log(funcTwo("  welcome home, this is me   "))


// 3 
function funcThree (users){
    return users.sort((a,b) => a.age - b.age);
}

console.log(funcThree([
    {name: "luka", age: 40},
    {name: "Givi", age: 25},
    {name: "Irine", age: 35}
]));

