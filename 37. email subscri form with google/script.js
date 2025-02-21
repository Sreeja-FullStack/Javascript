const scriptURL = 'https://script.google.com/macros/s/AKfycbydIcJgb6ZNhncVsytDp7MXQPqA1pyURGA8AW1nv9ko1GoouiwtfCox--6k6GfrLW1K/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Thank you for Sunbscribing!"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })