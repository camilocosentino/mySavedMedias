// Replace CLIENT_ID and REDIRECT_URI with your own values

// const REDIRECT_URI = 'https://camilocosentino.github.io/landingpage-asincrona/'
const REDIRECT_URI = 'https://camilocosentino.github.io/mySavedMedias/'
let accessToken;
let igButton = document.querySelector(".fa-instagram")



const loginWithIG = async() => {
    // Redirect the user to the Instagram login page
     window.location.href = 
    `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=user_profile`;
    console.log("volvimo a la web");
    // After the user logs in and grants permission, they will be redirected back to your website with a code parameter in the URL
    const code =  new URLSearchParams(window.location.search).get('code')
    
    console.log(code);
    
    // Use the code to obtain an access token
    // const response = await fetch(`https://api.instagram.com/oauth/access_token`, {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: new URLSearchParams({
    //     client_id: CLIENT_ID,
    //     client_secret: CLIENT_SECRET,
    //     redirect_uri: REDIRECT_URI,
    //     code: code,
    //     grant_type: 'authorization_code'
    //     })
    // })
    
    // let data = response.json()

    // accessToken = data.access_token

    // console.log(accessToken)
}

igButton.addEventListener("click", loginWithIG)
