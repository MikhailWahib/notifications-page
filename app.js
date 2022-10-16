const notificationsArr = document.querySelectorAll('.notification-card')
const circlesArr = document.querySelectorAll('.circle')
const markAllBtn = document.querySelector('#mark-all')
let notificationsCount = document.querySelector('#notifications-count').innerText

for(let i = 0 ; i < notificationsArr.length; i++) {
    let isActive = true
    notificationsArr[i].addEventListener('click', () => {
        if(isActive) {
            notificationsArr[i].classList.remove('new-notification')
            circlesArr[i].classList.remove('circle')
            notificationsCount -= 1
            document.querySelector('#notifications-count').innerText = notificationsCount
            isActive = false;
            console.log(notificationsCount);
        }
    })
    markAllBtn.addEventListener('click', () => {
        if(isActive) {
            notificationsArr[i].classList.remove('new-notification')
            circlesArr[i].classList.remove('circle')
            notificationsCount = 0
            document.querySelector('#notifications-count').innerText = notificationsCount
            isActive = false
        }
    })
}
