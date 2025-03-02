document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById('loginForm')

    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData)

        try {
            const response = await fetch('/api/sessions/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)

            })
            if (data.ok) {
                document.cookie = 'coderCookie=${data.token}; path=/;'
                window.location.href = "/"
            } else {

                console.log(data);
            }
        } catch (e) {
            console.log(e);
        }

    })
})
