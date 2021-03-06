const container = document.querySelector('.container');

let inputs = JSON.parse(localStorage.getItem('inputs')); 



let output = `<tr>          
<td colspan="2">Full Name</td>
<td>${inputs.fname}</td>
</tr>
<tr>
<td colspan="2">Email</td>
<td>${inputs.email}</td>
</tr>
<tr>
<td colspan="2">From</td>
<td>${inputs.from}</td>
</tr>
<tr>
<td colspan="2">To</td>
<td>${inputs.to}</td>
</tr>
<tr>
<td colspan="2">Date</td>
<td> ${inputs.date}</td>
</tr>
<tr>
<td colspan="2">Adult</td>
<td>${inputs.adult}</td>
</tr>
<tr>
<td colspan="2">Student</td>
<td>${inputs.student}</td>
</tr>
<tr>
<td colspan="2">Senior</td>
<td>${inputs.senior}</td>
</tr>
<tr>
<td colspan="2">Chils</td>
<td>${inputs.child}</td>
</tr>`

 container.innerHTML = output;

