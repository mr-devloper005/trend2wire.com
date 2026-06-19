import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Media distribution platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Media distribution and newsroom visibility',
    primaryLinks: [
      { label: 'Media Distribution', href: '/media-distribution' },
      { label: 'Search Archive', href: '/search' },
      { label: 'Create', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Browse posts', href: '/media-distribution' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Newsroom updates and distributed media',
    description: 'A focused media distribution surface for announcements, press coverage, campaign updates, and publication-ready newsroom content.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Media Distribution', href: '/media-distribution' },
          { label: 'Search Archive', href: '/search' },
          { label: 'Create Post', href: '/create' },
          { label: 'Contact Desk', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for fast, flexible, and category-led media distribution.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
