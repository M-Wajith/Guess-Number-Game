import React from "react";

function Result ({secretNum , term}){
    let result;


    if(term){
        if(term> secretNum){
            result = "Higher";
        }
        else if(term<secretNum){
            result = "Lower";
        }
        else if(term == secretNum){
            result = "Yeahhh! Correct Answer";
        }
        else{
            result = "Enter Valid Input";
        }
}
    


    return <h3>You Guessed : {result}</h3>
}
export default Result;