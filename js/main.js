

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = 'var(--menu_text_color)'
      target2.style.display = 'none'
    });
    element.style.color = 'var(--menu_active_text_color)'
    target.style.display= 'flex'
  })
})

   document
     .getElementById("generate-button")
     .addEventListener("click", async () => {
       const longURL = document.getElementById("long-url").value;
       const accessToken = "YOUR_BITLY_TOKEN";    //get your token from bitly

       const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
         method: "POST",
         headers: {
           Authorization: `Bearer ${accessToken}`,
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ long_url: longURL }),
       });

       if (response.ok) {
         const data = await response.json();
         const shortURL = data.link;
         const shortenedUrlElement = document.getElementById("shortened-url");
         const shortUrlElement = document.getElementById("short-url");

         shortenedUrlElement.style.display = "block";
         shortUrlElement.href = shortURL;
         shortUrlElement.textContent = shortURL;
       } else {
         alert("Error generating short URL");
       }
     });