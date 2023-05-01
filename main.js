const retrieveUserMedia = (accessToken) => {
  // Use the access token to retrieve the user's saved media
  fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url&access_token=${accessToken}`)
  .then(response => response.json())
  .then(data => {
    const media = data.data
    console.log(media)
    
    // Display the media to the user
    media.forEach(m => {
      const container = document.createElement('div')
      const img = document.createElement('img')
      img.src = m.media_url;
      container.appendChild(img);
      document.body.appendChild(container)
    })
  })
}

