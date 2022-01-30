// National University of Bangladesh Grading System and GPA/CGPA Count System

/*
80% Above Letter Grade: A+  Grade Point: 4.00
75% to less than 80% Letter Grade: A  Grade Point: 3.75
70% to less than 75% Letter Grade: A-  Grade Point: 3.50
65% to less than 70% Letter Grade: B+  Grade Point: 3.25
60% to less than 65% Letter Grade: B  Grade Point: 3.00
55% to less than 60% Letter Grade: B-  Grade Point: 2.75
50% to less than 55% Letter Grade: C+  Grade Point: 2.50
45% to less than 50% Letter Grade: C  Grade Point: 2.25
40% to less than 45% Letter Grade: D  Grade Point: 2.00
<40% (less than 40%) Letter Grade: F  Grade Point: 0.00
*/


function getResultGrade(n){
    let result = n;
    if(result >= 80 && result <= 100){
        console.log('You Got a ' + " : " + " Letter Grade: " + " A+ " +  " & " + " Grade Point: " + " 4.00")
    }
    else if( result >= 75 && result <= 80){
        console.log('You Got a ' + " : " + " Letter Grade: " + " A " +  " & " + " Grade Point: " + " 3.75")
    }
    else if( result >= 70 && result <= 75){
        console.log('You Got a ' + " : " + " Letter Grade: " + " A- " + " & " +  " Grade Point: " + " 3.50")
    }
    else if( result >= 65 && result <= 70){
        console.log('You Got a ' + " : " + " Letter Grade: " + " B+ " + " & " +  " Grade Point: " + " 3.25")
    }
    else if( result >= 60 && result <= 65){
        console.log('You Got a ' + " : " + " Letter Grade: " + " B " +  " & " + " Grade Point: " + " 3.00")
    }
    else if( result >= 55 && result <= 60){
        console.log('You Got a ' + " : " + " Letter Grade: " + " B- " + " & " +  " Grade Point: " + " 2.75")
    }
    else if( result >= 50 && result <= 55){
        console.log('You Got a ' + " : " + " Letter Grade: " + " C+ " + " & " +  " Grade Point: " + " 2.50")
    }
    else if( result >= 45 && result <= 50){
        console.log('You Got a ' + " : " + " Letter Grade: " + " C " + " & " +  " Grade Point: " + " 2.25")
    }
    else if( result >= 40 && result <= 45){
        console.log('You Got a ' + " : " + " Letter Grade: " + " D " + " & " +  " Grade Point: " + " 2.00")
    }
    else{
        console.log('You Got a ' + " : " + " Letter Grade: " + " F " + " & " +  " Grade Point: " + " 0.00" + "" + " Try To Again And Carry On!")
    }
   
}

getResultGrade(60)