document.getElementById('updateForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const grade = document.getElementById('grade').value;

    try {
        const response = await fetch('https://api-final-ql8i.onrender.com/info/user', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, grade }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
    }
});