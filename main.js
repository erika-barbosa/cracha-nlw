const LinksSocialMedia = {
  github: 'erika-barbosa',
  youtube: 'channel/UCVuUKLEmjpJA55LEnkM0Z8A',
  facebook: 'maykbrito',
  instagram: 'er_barbosa',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      titlePage.textContent = data.name + ' - DoWhile 2021'
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}
getGithubProfileInfos()
