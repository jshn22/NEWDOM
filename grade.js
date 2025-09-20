const btn1 = document.getElementById('btn1');

function avrage(A){
    let total = A.reduce((sum, mark)=> sum += mark, 0)
    return total/A.length
}
btn1.addEventListener('click', (event) => {
    event.preventDefault();
    const marks = document.getElementById('input').value;
    const marks2 = marks.split(",").map((num)=> Number(num.trim()));
    console.log(marks2)
    const res = document.getElementById("result")
     let avg = avrage(marks2)
     let grade = ""
     if (avg >= 90){
        grade = "A"
     }else if(avg >=80){
        grade = "B"
     }else if(avg>=70){
        grade = "C"
     }else{
        grade = "F"
     }
     res.innerHTML = `Grade: <b>${grade}</b>`
})