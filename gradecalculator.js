function calculateCurrentGrade(){
    var homeworkAverage= averageArray(document.getElementById("homework").value);
    var testsAverage= averageArray(document.getElementById("tests").value);
    var midtermAverage= averageArray(document.getElementById("midterm").value);
    var quizzesAverage= averageArray(document.getElementById("quizzes").value);
    var gradeArray=[];
    gradeArray.push(homeworkAverage,testsAverage,quizzesAverage,midtermAverage);
    var homeworkWeight=  parseInt(document.getElementById("homeworkWeight").value) / 100;
    var testsWeight=  parseInt(document.getElementById("testsWeight").value) / 100;
    var quizzesWeight=  parseInt(document.getElementById("quizzesWeight").value) / 100;
    var midtermWeight=  parseInt(document.getElementById("midtermWeight").value) / 100;
    if(isNaN(homeworkAverage)==true || isNaN(testsAverage)==true || isNaN(midtermAverage)== true || isNaN(quizzesAverage)== true){
        console.log("hi");
        document.getElementById("currentGrade").innerHTML= "Grades are numbers not letters";
        return;
    }
    var weightArray= [];
    var currentGrade=0;
    var weightSum = ((homeworkWeight + testsWeight + quizzesWeight + midtermWeight) * 100);
    weightArray.push(homeworkWeight,testsWeight,quizzesWeight,midtermWeight);
    for(var i=0; i< gradeArray.length;i++){
        currentGrade+=(gradeArray[i]*weightArray[i]);
    }
    if(weightSum >=100){
        document.getElementById("currentGrade").innerHTML= "Sorry, cannot calculate. You need to factor in your final.";
    }else {
        document.getElementById("currentGrade").innerHTML = "You current grade is " + (currentGrade / weightSum) * 100 + "%";
    }
    color(document.getElementById("Hw"),homeworkAverage);
    color(document.getElementById("Test"),testsAverage);
    color(document.getElementById("Midterms"),midtermAverage);
    color(document.getElementById("Quiz"),quizzesAverage);

    return currentGrade;
}

function averageArray(string){
    var sum = 0;
    var array= string.split(",");
    for (var i=0; i< array.length; i++){
        if(array[i]<0){
            return ("Cannot calculate a negative grade")
        }
        array[i] = parseInt(array[i]);
        sum += array[i];
    }
    return sum/array.length;
}

function calculateGradeNeeded(){
    var currentGrade= calculateCurrentGrade();
    var wantedGrade= (document.getElementById("wantedGrade").value);
    var weight= (document.getElementById("final").value);
    var finalGrade= ((wantedGrade - currentGrade) * (100-weight))/ weight;
    document.getElementById("finalGrade").innerHTML = "You would need to score a " + finalGrade;
}

function color (catagory , percentage){
    if (percentage > 89){
        catagory.style.background = "green";
    }
    if(percentage <=89 && percentage >=80){
        catagory.style.background = "blue";
    }
    if(percentage <= 79 && percentage >= 70){
        catagory.style.background = "yellow";
    }
    if(percentage <= 69 && percentage >= 60){
        catagory.style.background = "orange";
    }
    if(percentage <=59){
        catagory.style.background= "red";
    }
}
