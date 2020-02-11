console.log(`I'm ready!`);
// Iteration 1: Names and Input
let hacker1='Francisco'
let hacker2='Tomas'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
if(hacker1.length===hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let telegramType=""
for (let i=0; i<hacker2.length; i++){
    telegramType+=hacker2[i].toUpperCase() + " ";
}
console.log(telegramType)


function writeBackwords(string){
let writtenBackwords="";
for (let i=string.length; i>=1; i--){
    writtenBackwords+=string[i-1]+"";
}
console.log(writtenBackwords)
}
writeBackwords(hacker2)

if(hacker1<hacker2){
    console.log("The Driver's name goes first")
} else if(hacker2<hacker1){
    console.log("The navigator's name goes first")
} else {
if(hacker1===hacker2){
    console.log("What? Do you both have the same names?")
}
}

// #Bonus Time 
const paragraph1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et convallis felis, non iaculis ligula. Aliquam quis nibh a sapien aliquet ullamcorper non vehicula orci. Etiam gravida eros quis viverra ornare. Suspendisse ut posuere ipsum. Sed semper enim ex, quis feugiat lectus gravida ac. Nullam ligula magna, pretium non diam ac, bibendum consequat urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nunc est, egestas quis massa eget, gravida ullamcorper risus. Aenean convallis urna in vestibulum ullamcorper. Nulla ornare lorem ac lorem aliquam, at feugiat arcu hendrerit.
// Phasellus finibus odio eu augue mattis, sit amet pharetra dui suscipit. Fusce id felis a justo posuere varius. Cras eget fermentum diam. Donec aliquet, augue vitae auctor feugiat, eros justo dignissim odio, ut auctor mauris arcu congue mauris. Morbi blandit orci quis magna congue, sed ultrices turpis convallis. Nunc gravida scelerisque auctor. Nunc convallis cursus eros, non rutrum augue ullamcorper quis. Morbi semper a ex non viverra. Proin at nulla sed erat auctor interdum id vitae arcu. Morbi molestie magna nec elementum posuere. Integer in elit nec leo lobortis mattis ut id mi. Quisque imperdiet commodo nunc, eu pulvinar justo hendrerit nec. Nullam imperdiet ex a finibus auctor. Nulla facilisi.
Suspendisse molestie tortor neque, nec varius turpis imperdiet non. Suspendisse sit amet ornare purus. Suspendisse potenti. Vestibulum feugiat aliquam aliquet. Donec sed massa molestie, aliquet justo in, posuere lorem. Cras consequat at odio in condimentum. Donec vel maximus orci. Aenean in dignissim risus, in luctus turpis. Etiam quis metus urna. Suspendisse convallis eros enim, vel ultricies massa pulvinar at. Integer placerat mauris at sagittis pretium. Vestibulum consequat posuere risus vitae varius. Vivamus nisl lectus, mattis non sapien in, volutpat fermentum eros. Sed elementum, ligula ut facilisis tincidunt, odio mi pharetra nulla, maximus sagittis nunc sem in lacus. Cras ultricies dapibus lorem non vestibulum.`

let wordCount=0;
let latinWordCount=0;

for (let i=0; i<paragraph1.length;i++){
    if(paragraph1[i]===" "){
        wordCount++
    }
    if(paragraph1[i]==="e" && paragraph1[i+1]==="t"){
        latinWordCount++
    }
}
console.log(wordCount)
console.log(latinWordCount)
let phraseToCheck='random'


// function checkIfPalindrome(word){
// for(let i=0; i<word.length;i++){
// if
// }
// }
// //     for (let i=string.length; i>=1; i--){
// //         writtenBackwords+=string[i-1]+"";
// //         break;
// //     }
// // }
// // //     continue;
// // //     }
// // // if(word[i]!== word[-i])

// // //     }
// // // }

// // checkIfPalindrome(phraseToCheck)

