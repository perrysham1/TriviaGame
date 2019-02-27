$(document).ready(function() {
    // set counters
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;
    var timer = 20;

    
    // list questions
    var trivia = [{
        q1: "What is the largest bone in the human body?",
        o1: ["Humerus", "Femur", "Vertebrae", "Radius"],
        a1: "Humerus"
    },{
        q2: "What is removed during a cholecystectomy?",
        o2: ["Pancreas", "Appendix", "Colon", "Gallbladder"],
        a2: "Gallbladder"
    },{
        q3: "Where is your buccal cavity?",
        o3: ["Mouth", "Colon", "Ear", "Nose"],
        a3: "Mouth"
    },{
        q4: "What does a sphygmomanometer measure?",
        o4: ["Blood pressure", "Cholesterol", "Blood glucose levels", "Sodium levels"],
        a4: "Blood pressure"
    },{
        q5: "What is varicella better known as?",
        o5: ["The flu", "Measles", "Chicken Pox", "Polio"],
        a5: "Chicken Pox"
    },{
        q6: "What part of the body does atherosclerosis affect?",
        o6: ["Heart", "Lungs", "Veins", "Arteries"],
        a6: "Arteries"
    },{
        q7: "Creutzfeldt-Jakob disease is the human variant of what disease?",
        o7: ["Swine flu", "Mad cow disease", "Avian flu", "Monkeypox"],
        a7: "Mad cow disease"
    },{
        q8: "What is the top leading cause of death in the US?",
        o8: ["Heart disease", "Cancer", "Car accidents", "Stroke"],
        a8: "Heart disease"
    },{
        q9: "What does the field of bariatrics focus on?",
        o9: ["Barium", "Sleep", "Lung pressure", "Obesity"],
        a9: "Obesity"
    },{
        q10: "What part of the body is used during mastication?",
        o10: ["Genitals", "Jaw", "Large intestine", "Small intestine"],
        a10: "Jaw"
    }];

    // initially hides option box
    $("#optionBox").hide();

    // display and ask questions
    $("#btn1").click(function(){
        $("#btn1").hide();
        $("#question").append(trivia[0]["q1"]);
        $("#optionBox").show();
        $("#option1").append(trivia[0]["o1"][0]);
        $("#option2").append(trivia[0]["o1"][1]);
        $("#option3").append(trivia[0]["o1"][2]);
        $("#option4").append(trivia[0]["o1"][3]);
        startTimer;
    });

    var userGuess = $("#option1").val();
    console.log(userGuess);

    // set timer function
    function countDown(){
        $("#timer").text("Time: " + timer);
        if(timer === 0){
            timer.stopTimer();
            $("#timer").empty();
        }
    }

    function startTimer(){
        $("#timer").text("Time: " + timer);
        setInterval(countDown, 10000);
    }

    function stopTimer(){
        clearInterval();
    }
    
    // correct or incorrect answer

    // reset
    function startGame() {
        var correct = 0;
        var incorrect = 0;
        var unAnswered = 0;
        var timer = 20;
        clearInterval(triviaQuestions.timer);
    
    }
    

});