function generateGrade(marks) {
    if (marks>=0&&marks < 40) {
      console.log("E");
      console.log("Student's Grade is E");
  
    } 
    else if (marks > 40 && marks <= 49) {
      console.log("D");
      console.log("Student's Grade is D");
    } 
    else if (marks >= 49 && marks <= 59) {
      console.log("Student's Grade is C")
    } else if (marks >= 60 && marks <= 79) {
      console.log("Student's Grade is B")
    } else if (marks > 79 &&marks<=100) {
      console.log("Student's Grade is A");
    }else{
      console.log('no such grade')
    }
    return;
  }
  generateGrade(70);