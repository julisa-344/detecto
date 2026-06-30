import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SITE } from '@/config/constants'
import { getPageSEO, type PageSEO } from '@/config/seo'

interface SEOProps extends Partial<PageSEO> {
  /** JSON-LD structured data (objeto u array). Se serializa con JSON.stringify. */
  jsonLd?: object | object[]
  /** Sobrescribe el path detectado por useLocation (raro). */
  path?: string
}

/**
 * Componente SEO genérico. Úsalo como primer hijo de cada Page para inyectar
 * meta tags dinámicos (title, description, OG, Twitter, canonical, JSON-LD).
 *
 * @example
 * <SEO title="..." description="..." />
 * <SEO jsonLd={{ '@context': 'https://schema.org', '@type': 'MedicalBusiness', ... }} />
 */
export default function SEO({
  title,
  description,
  image,
  canonical,
  ogType,
  noindex,
  jsonLd,
  path,
}: SEOProps) {
  const location = useLocation()
  const currentPath = path ?? location.pathname
  const base = getPageSEO(currentPath)

  const finalTitle = title ?? base.title
  const finalDescription = description ?? base.description
  const finalImage = image ?? base.image
  const finalCanonical = `${SITE.url}${canonical ?? base.canonical ?? currentPath}`
  const finalOgType = ogType ?? base.ogType ?? 'website'
  const isNoindex = noindex ?? base.noindex ?? false

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      {/* Canonical */}
      <link rel="canonical" href={finalCanonical} />

      {/* Robots */}
      {isNoindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={finalOgType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:locale" content={SITE.defaultLocale} />
      <meta property="og:site_name" content={SITE.fullName} />
      {finalImage && <meta property="og:image" content={finalImage} />}
      {finalImage && <meta property="og:image:width" content="1200" />}
      {finalImage && <meta property="og:image:height" content="630" />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {finalImage && <meta name="twitter:image" content={finalImage} />}

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
