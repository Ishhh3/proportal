//loading page
window.addEventListener("load", () =>{
    getUsers()
})

let studentno = ""
let studentpass = ""
let teacherno = ""
let teacherpass = ""

function getUsers(){

    fetch("https://api-final-ql8i.onrender.com/info", {mode: "cors"})
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{
        data.forEach((element) =>{
            studentno = element.studentNumber
            studentpass = element.password

            const users = [
                        { username: studentno, password: studentpass },
                    ];

                    // Check if the user is already logged in
                    if (localStorage.getItem('loggedInUser')) {
                        window.location.href = 'dashboard.html'; // Redirect to dashboard if logged in
                    }

                    document.getElementById('loginForm').addEventListener('submit', function (e) {
                        e.preventDefault(); // Prevent form from refreshing the page
                        const username = document.querySelector('#email').value;
                        const password = document.querySelector('#password').value;

                        // Simple front-end validation
                        if (username === "" || password === "") {
                            document.getElementById('message').innerText = "Please fill all fields";
                            return;
                        }

                        // Check user credentials
                        const user = users.find(user => user.username === username && user.password === password);
                        if (user) {
                            // Save user info to localStorage (acting as session)
                            localStorage.setItem('loggedInUser', JSON.stringify(user));

                            // Disable login button and show success message
                            document.getElementById('submit').disabled = true;
                            console.log("successful")
                            // Redirect to dashboard
                            setTimeout(() => {
                                window.location.href = 'dashboard.html';
                            }, 1000);
                        } else {
                            alert("Wrong password")
                        }
                    });



                    fetch("https://api-final-ql8i.onrender.com/info/teacher", {mode: "cors"})
                    .then((response) =>{
                        return response.json()
                    })
                    .then((data)=>{
                        data.forEach((element) =>{
                            teacherno = element.teacherNumber
                            teacherpass = element.password2

                            const users = [
                                        { username: teacherno, password: teacherpass },
                                    ];

                                    // Check if the user is already logged in
                                    if (localStorage.getItem('loggedInTeacher')) {
                                        window.location.href = 'teacher.html'; // Redirect to dashboard if logged in
                                    }

                                    document.getElementById('loginForm').addEventListener('submit', function (e) {
                                        e.preventDefault(); // Prevent form from refreshing the page
                                        const username = document.querySelector('#email').value;
                                        const password = document.querySelector('#password').value;

                                        // Simple front-end validation
                                        if (username === "" || password === "") {
                                            document.getElementById('message').innerText = "Please fill all fields";
                                            return;
                                        }

                                        // Check user credentials
                                        const user = users.find(user => user.username === username && user.password === password);
                                        if (user) {
                                            // Save user info to localStorage (acting as session)
                                            localStorage.setItem('loggedInTeacher', JSON.stringify(user));

                                            // Disable login button and show success message
                                            document.getElementById('submit').disabled = true;
                                            console.log("successful")
                                            // Redirect to dashboard
                                            setTimeout(() => {
                                                window.location.href = 'teacher.html';
                                            }, 1000);
                                        } else {
                                            alert("Wrong password")
                                        }
                                    });
                        })

                    })
                    .catch((error) =>{
                        console.log(error)
                    })















        })

    })
    .catch((error) =>{
        console.log(error)
    })

}

