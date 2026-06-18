const now = new Date()

const greetingText = document.getElementById('greeting')

const user = "pa_loy"

const toggleBtn = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
}

if(now.getHours() < 12) {
    greetingText.innerHTML = `Good Morning, ${user}!`

} else if(now.getHours() < 18) {
    greetingText.innerHTML = `Good Afternoon, ${user}!`
} else {
    greetingText.innerHTML = `Good Evening, ${user}!`
}

function toggleSubmenu(){
    const submenu = document.querySelector('.submenu')
    submenu.classList.toggle('show')
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
    }
}

