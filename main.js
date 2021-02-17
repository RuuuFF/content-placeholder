const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2600)

function getData() {
  header.innerHTML = `<img src="./images/notebook.png" alt="Notebook"/>`
  title.innerHTML = `Lorem ipsum dolor sit amet`
  excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo`
  profile_img.innerHTML = `<img src="./images/user.png" alt="Profile Image">`
  name.innerHTML = `Carlos Daniel`
  date.innerHTML = `Feb 02, 2021`
  
  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}