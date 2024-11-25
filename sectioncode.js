document.getElementById('logoutButton').addEventListener('click', () => {
    // Clear user data from localStorage or sessionStorage
    localStorage.removeItem('loggedInTeacher');

    // Redirect to the login page
    window.location.href = 'login.html';
});

const loggedInTeacher = JSON.parse(localStorage.getItem('loggedInTeacher'))
const username = document.querySelector('#username')
const sectionCode = document.querySelector('#sectionCode')


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
                sectionCode.innerText = element.sectionCode
            }
            

        })

    })
    .catch((error) =>{
        console.log(error)
    })

}