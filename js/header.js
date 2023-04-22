'use strict'

function controlMobileNav(isOpening) {
  const elMobileNav = document.querySelector('.main-nav')
  const elMobileMenu = document.querySelector('.main-menu')
  const elBarsIcon = document.querySelector('.fa-bars')
  const elXmarkIcon = document.querySelector('.fa-xmark')

  if (isOpening) {
    elMobileNav.classList.add('fixed')
    elMobileMenu.classList.remove('hidden')
    elBarsIcon.classList.add('hidden')
    elXmarkIcon.classList.remove('hidden')
  } else {
    elMobileNav.classList.remove('fixed')
    elMobileMenu.classList.add('hidden')
    elBarsIcon.classList.remove('hidden')
    elXmarkIcon.classList.add('hidden')

    const elJournalMenu = document.querySelector('.main-menu-journal .sub-menu')
    const elChevronUp = document.querySelector('.fa-chevron-up')
    const elChevronDown = document.querySelector('.fa-chevron-down')
    elJournalMenu.classList.add('hidden')
    elChevronUp.classList.remove('hidden')
    elChevronDown.classList.add('hidden')
  }
}

function controlJournalClick() {
  const elJournalMenu = document.querySelector('.main-menu-journal .sub-menu')
  const elChevronUp = document.querySelector('.fa-chevron-up')
  const elChevronDown = document.querySelector('.fa-chevron-down')
  elJournalMenu.classList.toggle('hidden')
  elChevronUp.classList.toggle('hidden')
  elChevronDown.classList.toggle('hidden')
}
