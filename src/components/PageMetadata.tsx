import { useEffect } from 'react'

type PageMetadataProps = {
  title: string
  path: string
}

function updateMetaTag(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.append(element)
  }

  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value))
  element.content = content
}

function PageMetadata({ title, path }: PageMetadataProps) {
  useEffect(() => {
    const fullTitle = `${title} | Brooks Cottage`
    const canonicalUrl = new URL(path, window.location.origin).toString()

    document.title = fullTitle
    updateMetaTag('meta[name="description"]', { name: 'description' }, fullTitle)
    updateMetaTag('meta[property="og:title"]', { property: 'og:title' }, fullTitle)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }, [path, title])

  return null
}

export default PageMetadata
