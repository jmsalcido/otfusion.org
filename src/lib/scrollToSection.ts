export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const pendingScrollKey = 'otfusion_pending_scroll_section'

export const rememberScrollSection = (sectionId: string) => {
  window.sessionStorage.setItem(pendingScrollKey, sectionId)
}

export const consumeRememberedScrollSection = () => {
  const sectionId = window.sessionStorage.getItem(pendingScrollKey)
  window.sessionStorage.removeItem(pendingScrollKey)
  return sectionId
}
