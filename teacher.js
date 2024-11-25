document.getElementById('logoutButton').addEventListener('click', () => {
    // Clear user data from localStorage or sessionStorage
    localStorage.removeItem('loggedInTeacher');

    // Redirect to the login page
    window.location.href = 'login.html';
});

const loggedInTeacher = JSON.parse(localStorage.getItem('loggedInTeacher'))
const username = document.querySelector('#username')
const teacherName = document.querySelector('#teacherName')
const teacherNumber = document.querySelector('#teacherNumber')
const teacherSub = document.querySelector('#teacherSub')
const teacherDepartment = document.querySelector('#teacherDepartment')
const sub = document.querySelector('#teacherSubject')


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
                teacherName.innerHTML = `<h5 id="teacherName">${element.teacherName}</h5>`
                teacherNumber.innerText = element.teacherNumber
                teacherSub.innerText = element.subject
                teacherDepartment.innerText = element.department
                sub.innerText = element.subject
            }
            

        })

    })
    .catch((error) =>{
        console.log(error)
    })

}