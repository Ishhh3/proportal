// Add logout functionality
document.getElementById('logoutButton').addEventListener('click', () => {
    // Clear user data from localStorage or sessionStorage
    localStorage.removeItem('loggedInUser');

    // Redirect to the login page
    window.location.href = 'login.html';
});

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

const username = document.querySelector('#studentName')
const stat1 = document.querySelector('.status')
const subjectCode = document.querySelectorAll('.subjectCode')
const subjectName = document.querySelectorAll('.subjectName')
const subjectTeacher = document.querySelectorAll('.subjectTeacher')
const subGrade1 = document.querySelector('#subgrade1')
const subGrade2 = document.querySelector('#subgrade2')
const subGrade3 = document.querySelector('#subgrade3')
const gwa1 = document.querySelector('#gwa1')

//loading page
window.addEventListener("load", () =>{
    getUsers()
})



function getUsers(){

    fetch("https://api-final-ql8i.onrender.com/info", {mode: "cors"})
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{


        data.forEach((element) =>{
            if (element.studentNumber === loggedInUser.username){
                username.innerHTML = `<h1 class="h1" id="studentName">${element.studentName}<br><span class="status">${element.status}</span></h1>`
                subGrade1.innerHTML = `<h6 id="subgrade1">${element.sub1}</h6>`
                if(Number(element.sub1)>=98||100<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">1.00</h6>`
                }else if(Number(element.sub1)>=95||97<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">1.25</h6>`
                }else if(Number(element.sub1)>=92||94<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">1.50</h6>`
                }else if(Number(element.sub1)>=89||91<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">1.75</h6>`
                }else if(Number(element.sub1)>=87||88<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">2.00</h6>`
                }else if(Number(element.sub1)>=84||86<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">2.25</h6>`
                }else if(Number(element.sub1)>=81||83<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">2.50</h6>`
                }else if(Number(element.sub1)>=78||80<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">2.75</h6>`
                }else if(Number(element.sub1)>=75||77<=Number(element.sub1)){
                    gwa1.innerHTML = `<h6 id="gwa1">3.00</h6>`
                }else{
                    gwa1.innerHTML = `<h6 id="gwa1">INC</h6>`
                }


                subGrade2.innerHTML = `<h6 id="subgrade2">${element.sub2}</h6>`
                if(Number(element.sub2)>=98||100<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">1.00</h6>`
                }else if(Number(element.sub2)>=95||97<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">1.25</h6>`
                }else if(Number(element.sub2)>=92||94<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">1.50</h6>`
                }else if(Number(element.sub2)>=89||91<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">1.75</h6>`
                }else if(Number(element.sub2)>=87||88<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">2.00</h6>`
                }else if(Number(element.sub2)>=84||86<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">2.25</h6>`
                }else if(Number(element.sub2)>=81||83<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">2.50</h6>`
                }else if(Number(element.sub2)>=78||80<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">2.75</h6>`
                }else if(Number(element.sub2)>=75||77<=Number(element.sub2)){
                    gwa2.innerHTML = `<h6 id="gwa2">3.00</h6>`
                }else{
                    gwa2.innerHTML = `<h6 id="gwa2">INC</h6>`
                }


                subGrade3.innerHTML = `<h6 id="subgrade3">${element.sub3}</h6>`
                if(Number(element.sub3)>=98||100<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">1.00</h6>`
                }else if(Number(element.sub3)>=95||97<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">1.25</h6>`
                }else if(Number(element.sub3)>=92||94<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">1.50</h6>`
                }else if(Number(element.sub3)>=89||91<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">1.75</h6>`
                }else if(Number(element.sub3)>=87||88<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">2.00</h6>`
                }else if(Number(element.sub3)>=84||86<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">2.25</h6>`
                }else if(Number(element.sub3)>=81||83<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">2.50</h6>`
                }else if(Number(element.sub3)>=78||80<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">2.75</h6>`
                }else if(Number(element.sub3)>=75||77<=Number(element.sub3)){
                    gwa3.innerHTML = `<h6 id="gwa3">3.00</h6>`
                }else{
                    gwa3.innerHTML = `<h6 id="gwa3">INC</h6>`
                }
            }
                   

        })
        


        fetch("https://api-final-ql8i.onrender.com/info/teacher", {mode: "cors"})
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{


        data.forEach((element, index) =>{
            subjectCode[index].innerHTML = `<p class="subjectCode">${element.subjectCode}</p>`
            subjectName[index].innerHTML = `<p class="subjectName">${element.subject}</p>`
            subjectTeacher[index].innerHTML = `<p class="subjectTeacher">Instructor: ${element.teacherName}</p>`

        })

        

    })
    .catch((error) =>{
        console.log(error)
    })









    })
    .catch((error) =>{
        console.log(error)
    })

}

