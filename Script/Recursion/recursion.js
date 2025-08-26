// Recursing is something which repeat itself until their specific condition satisfied.


/*Containng two cases-
\
1. Base cases - it is the condition under whuch recurson ends
2. Recursive case - if the base case doesn't satisfied or met condition, the function call itseld till then*/


function showOrgChart(employee) {
  console.log(`${employee.name} - ${employee.position}`);
  employee.subordinates.forEach(showOrgChart);  // Recursive call
}

const orgChart = {
  name: 'Alice',
  position: 'CEO',
  subordinates: [{
    name: 'Bob',
    position: 'CTO',
    subordinates: [{
      name: 'Charlie',
      position: 'Engineer',
      subordinates: []
    }]
  }]
};

showOrgChart(orgChart);