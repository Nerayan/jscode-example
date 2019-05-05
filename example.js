window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab');
  let info = document.querySelector('.info-header');
  let tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContant(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for(let i = 0; i < tab.length; i++ ) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContant(i);
          break;
        }
      }
    }
  })

  let deadline = '2019-04-23';

  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let sec = Math.floor((t/1000) % 60);
    let min = Math.floor((t/1000/60) % 60);
    let hour = Math.floor((t/(1000*60*60)));

    return {
      'total' : t,
      'hours' : hour,
      'minutes' : min,
      'seconds' : sec
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id);
    let hours = timer.querySelector('.hours');
    let minutes = timer.querySelector('.minutes');
    let seconds = timer.querySelector('.seconds');
    let timeInterval = setInterval(updateTimer, 1000)

    function updateTimer() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total < 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setClock('timer', deadline)


  let overlay = document.querySelector('.overlay');
  let close = document.querySelector('.popup-close');
  let more = document.querySelector('.more');
  let moreTab = [...document.querySelectorAll('.description-btn')];
  let popButtons = moreTab.concat(more);

  popButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    })
  })

  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = 'auto';
  })

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = 'auto';
  })
})