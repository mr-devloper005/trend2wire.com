import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press release delivery, and newsroom visibility',
      description: 'Explore media distribution posts, campaign updates, press release coverage, and publication-ready announcements.',
      openGraphTitle: 'Media distribution and newsroom visibility',
      openGraphDescription: 'Discover distributed media, brand announcements, campaign updates, and press-ready content.',
      keywords: ['media distribution', 'press release distribution', 'newsroom visibility', 'brand announcements'],
    },
    hero: {
      badge: 'Fast, reliable, media-ready distribution',
      title: ['Delivering media coverage', 'across every digital route.'],
      description: 'Plan, publish, and discover press releases, brand announcements, syndication updates, and newsroom-ready stories from one focused media distribution hub.',
      primaryCta: { label: 'Browse distribution posts', href: '/media-distribution' },
      secondaryCta: { label: 'Create campaign brief', href: '/create' },
      searchPlaceholder: 'Search releases, brands, campaigns, and topics',
      focusLabel: 'Media lanes',
      featureCardBadge: 'distribution desk',
      featureCardTitle: 'Live media updates keep every campaign moving.',
      featureCardDescription: 'Real posts from your publishing feed shape the homepage while the layout stays consistent and easy to scan.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for publishing teams that need visibility, clarity, and speed.',
      paragraphs: [
        'This site brings distributed announcements, media updates, campaign briefs, and supporting resources into one clear publishing surface.',
        'Instead of scattering releases across disconnected pages, the platform keeps each update easy to search, scan, and open from any device.',
        'Whether someone starts with a release, media asset, listing, or resource page, they can keep discovering related distribution content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Media-first homepage with fast access to active distribution posts.',
        'Connected sections for releases, visuals, listings, resources, and profiles.',
        'Clear browsing rhythm designed for editors, clients, and campaign teams.',
        'Lightweight interactions that keep every page fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Move from announcement to audience with one connected media surface.',
      description: 'Browse distributed releases, coverage updates, media assets, listings, and resources through one clearer visual system.',
      primaryCta: { label: 'Browse Media Distribution', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About Us',
    title: 'A distribution desk for brands, releases, and newsroom visibility.',
    description: `${slot4BrandConfig.siteName} helps teams organize media distribution posts, campaign updates, press coverage, and publishing assets in one trusted destination.`,
    paragraphs: [
      'Instead of splitting announcements, coverage, and supporting material into disconnected pages, the platform keeps related media distribution content easy to move through.',
      'Whether someone starts with a release, listing, image post, or resource page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Distribution-first experience',
        description: 'We prioritize clarity, pacing, and structure so media teams can publish, browse, and discover without noise.',
      },
      {
        title: 'Connected campaign surfaces',
        description: 'Releases, visual posts, listings, resources, and profiles stay connected so campaign discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful media updates faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'We are here to support your media distribution needs.',
    description: 'Tell us what you are planning to publish, promote, syndicate, or improve. We will route your request to the right media distribution lane.',
    formTitle: 'Submit a distribution request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, coverage, visuals, and resources faster.',
      description: 'Use keywords, categories, and content types to discover real published posts from every active media distribution section.',
      placeholder: 'Search by release, campaign, category, or title',
    },
    resultsTitle: 'Latest media distribution content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a media distribution post.',
      description: 'Use your account to open the publishing workspace and create releases, campaign updates, media assets, and distribution resources.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create media distribution content for every active section.',
      description: 'Choose the content type, add campaign details, and prepare a clean post with links, summary, media assets, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your media desk.',
      description: 'Login to continue browsing distribution updates, managing submissions, and creating campaign-ready media posts.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing media.',
      description: 'Create an account to access the publishing workspace, save details, and submit media distribution content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
