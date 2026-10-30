import { useEffect } from 'react'

type PageMetadataProps = {
  title: string
  path: string
  description?: string
  image?: string
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

function PageMetadata({
  title,
  path,
  description = 'Boutique accommodation at Brooks Cottage in Pretoria, South Africa.',
  image = '/hero_bg.webp',
}: PageMetadataProps) {
  useEffect(() => {
    const fullTitle = `${title} | Brooks Cottage`
    const canonicalUrl = new URL(path, window.location.origin).toString()
    const imageUrl = new URL(image, window.location.origin).toString()

    document.title = fullTitle
    updateMetaTag('meta[property="og:title"]', { property: 'og:title' }, fullTitle)
    updateMetaTag('meta[name="description"]', { name: 'description' }, description)
    updateMetaTag('meta[property="og:description"]', { property: 'og:description' }, description)
    updateMetaTag('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl)
    updateMetaTag('meta[property="og:image"]', { property: 'og:image' }, imageUrl)
    updateMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, fullTitle)
    updateMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
    updateMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl)
    updateMetaTag('meta[name="author"]', { name: 'author' }, 'SKYRHX | A Creative Studio')
    updateMetaTag('meta[name="designer"]', { name: 'designer' }, 'SKYRHX | A Creative Studio')
    updateMetaTag('meta[name="generator"]', { name: 'generator' }, 'SKYRHX | A Creative Studio')

    let authorLink = document.head.querySelector<HTMLLinkElement>('link[rel="author"]')
    if (!authorLink) {
      authorLink = document.createElement('link')
      authorLink.rel = 'author'
      document.head.append(authorLink)
    }
    authorLink.href = 'https://skyrhxstudio.com'

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }, [description, image, path, title])

  return null
}

export default PageMetadata
