function getResponse(input){
    if(input == "Hi" || input == "Hello" || input  == "hi" || input == "hello"){
        return "Happy to have you!, Go Ahead and ask something about me :-)";
    }
    else if(input == "Score in 10th"){
        return "10 CGPA";
    }
    else if(input == "Score in 12th"){
        return "89%";
    }
    else if(input == "Hobbies"){
        return "Have an endless list, but few of them are Playing Cricket, Gaming and Reading Books";
    }
    else if(input == "Why Web Development"){
        return "Because of immense interest and curiosity";
    }
    else if(input == "First Project"){
        return "IRCTC website clone";
    }
    else if(input == "Biggest Project"){
        return "Word Manipulation Site - 'TextPlay.io' with React.js";
    }
    else {
        return "Ask something else!";
    }
}