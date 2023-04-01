const run = () => {
    document.getElementById("navbar").classList.toggle("show")
}
const enable = (tab) => {
    var tablinks = document.getElementsByClassName("tab-link")
    var tabcontents = document.getElementsByClassName("tab-content")
    console.log(event.currentTarget)
    for (link of tablinks) {
        link.classList.remove("active")
    }
    for (content of tabcontents) {
        content.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tab).classList.add("active")
}

/* Counter  */
const percent = () => {
    var str = ``
    for (let i = 1; i <= 100; i++) {
    str += `
    ${i}% {
      counter-increment: count ${i};
    }`
    }
    return str
}
var storestr = percent() // storing counter keyframes in a variable to access it while accessing dom
var counter = `
.tab p:hover + span::before{
    content: counter(count);
    animation: counter 2s linear forwards normal;
    counter-reset: count 0;
  }
  @keyframes counter{
    ${storestr}
  }
`
/* Media querry */
const devicewidth = () => {
  var str = ''
  for (let i = 150; i<=3800; i=i+100)
  {
    str += `@media screen and (min-width: ${i}px){
      html{
          font-size: ${(i/950)*100}%;
      }
  }
  `
  }
  return str
}
var storestr = devicewidth()

/* Main CSS  */
document.head.innerHTML += `<style> ${counter} ${storestr} </style>`

/* Adding scroll animation */
const observer = new IntersectionObserver((entries) => 
{
  entries.forEach((entry)=> 
  {
    console.log(entry)
    if(entry.isIntersecting)
    {
      entry.target.classList.add("show")
      entry.target.classList.remove("hidden")
    }
    else
    {
      entry.target.classList.remove("show")
      entry.target.classList.add("hidden")
    }
  })
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=> observer.observe(el))