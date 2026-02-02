const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const upsertLink = (rel: string, href: string) => {
  const selector = `link[rel="${rel}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export interface SeoPayload {
  title: string
  description: string
  url: string
  image: string
  type?: 'website' | 'article'
  lang?: string
}

export const applySeo = ({ title, description, url, image, type = 'website', lang }: SeoPayload) => {
  if (lang) {
    document.documentElement.lang = lang
  }

  document.title = title
  upsertMeta('name', 'description', description)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:image', image)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:type', type)
  upsertMeta('property', 'twitter:title', title)
  upsertMeta('property', 'twitter:description', description)
  upsertMeta('property', 'twitter:image', image)
  upsertMeta('property', 'twitter:card', 'summary_large_image')
  upsertLink('canonical', url)
}
