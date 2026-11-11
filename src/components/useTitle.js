import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { profile } from '../data.js'

const SITE = 'https://www.kurttristan.me'

// Finds (or creates) a <meta>/<link> tag in <head>.
function headTag(tag, attr, value) {
  let el = document.head.querySelector(`${tag}[${attr}="${value}"]`)
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  return el
}

// Sets the tab title, search description and canonical address for the current page.
// Pass index: false for pages Google shouldn't list (like the 404 page).
export default function useTitle(page, { description, index = true } = {}) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = page ? `${page} — ${profile.name}` : `${profile.name} — Portfolio`

    const desc = headTag('meta', 'name', 'description')
    if (!desc.dataset.default) desc.dataset.default = desc.content
    desc.content = description || desc.dataset.default

    const canonical = headTag('link', 'rel', 'canonical')
    canonical.href = SITE + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))

    const robots = headTag('meta', 'name', 'robots')
    robots.content = index ? 'index, follow' : 'noindex'
  }, [page, description, index, pathname])
}
