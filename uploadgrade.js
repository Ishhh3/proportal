document.getElementById('logoutButton').addEventListener('click', () => {
    // Clear user data from localStorage or sessionStorage
    localStorage.removeItem('loggedInTeacher');

    // Redirect to the login page
    window.location.href = 'login.html';
});

const loggedInTeacher = JSON.parse(localStorage.getItem('loggedInTeacher'))
const username = document.querySelector('#username')

const studentNumber1 = document.querySelector('.student-number1')
const studentNumber2 = document.querySelector('.student-number2')
const studentNumber3 = document.querySelector('.student-number3')
const studentNumber4 = document.querySelector('.student-number4')
const studentNumber5 = document.querySelector('.student-number5')

let id = ""

const studentName1 = document.querySelector('.studentName1')
const studentName2 = document.querySelector('.studentName2')
const studentName3 = document.querySelector('.studentName3')
const studentName4 = document.querySelector('.studentName4')
const studentName5 = document.querySelector('.studentName5')

const studentCourse1 = document.querySelector('.studentCourse1')
const studentCourse2 = document.querySelector('.studentCourse2')
const studentCourse3 = document.querySelector('.studentCourse3')
const studentCourse4 = document.querySelector('.studentCourse4')
const studentCourse5 = document.querySelector('.studentCourse5')

const studentYear1 = document.querySelector('.studentYear1')
const studentYear2 = document.querySelector('.studentYear2')
const studentYear3 = document.querySelector('.studentYear3')
const studentYear4 = document.querySelector('.studentYear4')
const studentYear5 = document.querySelector('.studentYear5')

const bbtn1 = document.querySelector('.bbtn1')
const bbtn2 = document.querySelector('.bbtn2')
const bbtn3 = document.querySelector('.bbtn3')
const bbtn4 = document.querySelector('.bbtn4')
const bbtn5 = document.querySelector('.bbtn5')

const subc = document.querySelector('#subc')


window.addEventListener("load", () =>{
    getUsers()
})



function getUsers(){

    fetch("https://api-final-ql8i.onrender.com/info/teacher", {mode: "cors"})
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{

        data.forEach((element) =>{
            if (element.teacherNumber === loggedInTeacher.username){

                username.innerHTML = `<h1 class="h1" id="username">${element.teacherName}<br><span class="status">Teacher</span></h1>`
                subc.innerHTML = `${element.subjectCode} | ${element.sectionCode}`  
            }
            

        })




        fetch("https://api-final-ql8i.onrender.com/info", {mode: "cors"})
        
        .then((response) =>{
            return response.json()
        })
        .then((data)=>{
            studentNumber1.innerText = data[0].studentNumber
            studentNumber2.innerText = data[1].studentNumber
            studentNumber3.innerText = data[2].studentNumber
            studentNumber4.innerText = data[3].studentNumber
            studentNumber5.innerText = data[4].studentNumber
            id = data[0].studentNumber

            studentName1.innerText = data[0].studentName
            studentName2.innerText = data[1].studentName
            studentName3.innerText = data[2].studentName
            studentName4.innerText = data[3].studentName
            studentName5.innerText = data[4].studentName

            studentCourse1.innerText = data[0].course
            studentCourse2.innerText = data[1].course
            studentCourse3.innerText = data[2].course
            studentCourse4.innerText = data[3].course
            studentCourse5.innerText = data[4].course

            studentYear1.innerText = data[0].currentyear
            studentYear2.innerText = data[1].currentyear
            studentYear3.innerText = data[2].currentyear
            studentYear4.innerText = data[3].currentyear
            studentYear5.innerText = data[4].currentyear

    
        })
        .catch((error) =>{
            console.log(error)
        })

    })
    .catch((error) =>{
        console.log(error)
    })





}

