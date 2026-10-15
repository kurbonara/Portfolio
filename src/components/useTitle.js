import { useEffect } from 'react'
import { profile } from '../data.js'

// Sets the browser tab title for the current page.
export default function useTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} — ${profile.name}` : `${profile.name} — Portfolio`
  }, [page])
}
