$(document).ready(function() {
    // set counters
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;
    var timer = 20;

    
    // list questions
    var triviaQuestions = {
        q1: "What is the largest bone in the human body?",
        q2: "What is removed during a cholecystectomy?",
        q3: "Where is your buccal cavity?",
        q4: "What does a sphygmomanometer measure?",
        q5: "What is varicella better known as?",
        q6: "What part of the body does atherosclerosis affect?",
        q7: "Creutzfeldt-Jakob disease is the human variant of what disease?",
        q8: "What is the top leading cause of death in the US?",
        q9: "What does the field of bariatrics focus on?",
        q10: "What part of the body is used during mastication?"
    }

    var triviaOptions = {
        q1: {
            a: "Humerus",
            b: "Femur",
            c: "Vertebrae",
            d: "Radius"
        },
        q2: {
            a: "Pancreas",
            b: "Appendix",
            c: "Colon",
            d: "Gallbladder"
        },
        q3: {
            a: "Mouth",
            b: "Colon",
            c: "Ear",
            d: "Nose"
        },
        q4: {
            a: "Blood Pressure",
            b: "Cholesterol",
            c: "Blood glucose levels",
            d: "Sodium levels"
        },
        q5: {
            a: "The flu",
            b: "Measles",
            c: "Chicken Pox",
            d: "Polio"
        },
        q6: {
            a: "Heart",
            b: "Lungs",
            c: "Veins",
            d: "Arteries"
        },
        q7: {
            a: "Swine flu",
            b: "Mad cow disease",
            c: "Avian flu",
            d: "Monkeypox"
        },
        q8: {
            a: "Heart disease",
            b: "Cancer",
            c: "Car accidents",
            d: "Stroke"
        },
        q9: {
            a: "Barium",
            b: "Sleep",
            c: "Lung pressure",
            d: "Obesity"
        },
        q10: {
            a: "Genitals",
            b: "Mouth",
            c: "Large intestine",
            d: "Small intestine"
        }
    }

    var triviaAnswers = {
        q1: "a",
        q2: "d",
        q3: "a",
        q4: "a",
        q5: "c",
        q6: "d",
        q7: "b",
        q8: "a",
        q9: "d",
        q10: "b"
    }

    // display and loop through questions
    $("#btn1").click(function(){
        $("#btn1").hide();
    });
    console.log("#btn1");

    function nextQuestion() {
        

    }

    // set timer
    $("#timer").text(triviaAnswers.timer);


    // correct or incorrect answer
    


    // reset
    function startGame() {
        var correct = 0;
        var incorrect = 0;
        var unAnswered = 0;
        var timer = 20;
        clearInterval(triviaQuestions.timer);
    
    }
    console.log(startGame);
    

});