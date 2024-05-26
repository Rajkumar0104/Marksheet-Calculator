function calculateTotalMarks() {
      const mathMarks = parseInt(document.getElementById('math-marks').value);
      const englishMarks = parseInt(document.getElementById('english-marks').value);
      const scienceMarks = parseInt(document.getElementById('science-marks').value);
      const socialScienceMarks = parseInt(document.getElementById('social-science-marks').value);
    
      const totalMarks = mathMarks + englishMarks + scienceMarks + socialScienceMarks;
      const percentage = (totalMarks / 400) * 100;
      const grade = getGrade(percentage);
    
      document.getElementById('total-marks').innerText = `Total Marks: ${totalMarks}`;
      document.getElementById('grade').innerText = `Grade: ${grade}`;
    }
    
    function getGrade(percentage) {
      if (percentage >= 89 && percentage <= 100) {
          return 'A+';
      } else if (percentage >= 80) {
          return 'A';
      } else if (percentage >= 70) {
          return 'B';
      } else if (percentage >= 60) {
          return 'C';
      } else {
          return 'F';
      }
    }