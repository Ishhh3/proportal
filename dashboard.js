// Add logout functionality
document.getElementById('logoutButton').addEventListener('click', () => {
    // Clear user data from localStorage or sessionStorage
    localStorage.removeItem('loggedInUser');

    // Redirect to the login page
    window.location.href = 'login.html';
});

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

const username = document.querySelector('#studentName')
const stat = document.querySelector('.status')
const studentFullName = document.querySelector('#studentFullName')
const studentNumber = document.querySelector('#studentNumber')
const studentCourse = document.querySelector('#studentCourse')
const studentDepartment = document.querySelector('#studentDepartment')
const studentYear = document.querySelector('#studentYear')


//loading page
window.addEventListener("load", () =>{
    getUsers()
})



function getUsers(){
    let html=""

    fetch("https://api-final-ql8i.onrender.com/info", {mode: "cors"})
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{
        data.forEach((element) =>{
            if (element.studentNumber === loggedInUser.username){
                username.innerHTML = `<h1 class="h1" id="studentName">${element.studentName}<br><span class="status">${element.status}</span></h1>`
                studentFullName.innerText = `${element.studentName}`
                studentNumber.innerText = `${element.studentNumber}`
                studentCourse.innerText = `${element.course}`
                studentDepartment.innerText = `${element.department}`
                studentYear.innerText = `${element.currentyear}`
            }
            

        })

    })
    .catch((error) =>{
        console.log(error)
    })

}

