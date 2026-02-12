import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  integrations: [
    starlight({
      title: 'UIBuilder',
      description: 'A visual drag-and-drop UI builder library with extensible components',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/coralstack/uibuilder',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'What is UIBuilder?', link: '/introduction/what-is-uibuilder/' },
            { label: 'Use Cases', link: '/introduction/use-cases/' },
            { label: 'Architecture', link: '/introduction/architecture/' },
          ],
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', link: '/getting-started/installation/' },
            { label: 'Quick Start', link: '/getting-started/quick-start/' },
            { label: 'Configuration', link: '/getting-started/configuration/' },
            { label: 'CLI', link: '/getting-started/cli/' },
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Built-in Components', link: '/components/built-in-components/' },
            { label: 'Creating Custom Components', link: '/components/creating-custom-components/' },
            { label: 'Zod Schemas', link: '/components/zod-schemas/' },
            { label: 'Slots & Children', link: '/components/slots-and-children/' },
          ],
        },
        {
          label: 'Editor',
          items: [
            { label: 'Canvas & Drag-and-Drop', link: '/editor/canvas-and-drag-and-drop/' },
            { label: 'Properties Panel', link: '/editor/properties-panel/' },
            { label: 'Outline Panel', link: '/editor/outline-panel/' },
            { label: 'Preview & Export', link: '/editor/preview-and-export/' },
            { label: 'AI Chat', link: '/editor/ai-chat/' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { label: 'Dashboard', link: '/examples/dashboard/' },
            { label: 'Landing Page', link: '/examples/landing-page/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'API Reference', link: '/reference/api-reference/' },
            { label: 'Configuration Reference', link: '/reference/configuration-reference/' },
            { label: 'Component API', link: '/reference/component-api/' },
          ],
        },
      ],
    }),
  ],
})
