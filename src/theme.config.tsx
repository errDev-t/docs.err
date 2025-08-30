import React from 'react'
import {DocsThemeConfig, ThemeSwitch, useConfig} from "nextra-theme-docs";
import { useRouter } from 'next/router'

const ORGANIZATION_NAME = process.env.NEXT_PUBLIC_ORZANIZATION_NAME || "errDev-t";
const REPO = "https://github.com/errDev-t/docs.err"

const config: DocsThemeConfig = {
  logo: <img src="/ERRLOGO.png" alt="err logo" width="48" height="44" />,
  project: {
    link: REPO,
  },
  chat: {
    link: 'https://dsc.gg/errdev',
  },
  docsRepositoryBase: 'https://github.com',
  toc: {
    backToTop: true,
  },
  footer: {
    text: `© 2025 ${ORGANIZATION_NAME}`,
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  themeSwitch: {
    component: null  // Hide the theme switch from sidebar
  },
  navbar: {
      extraContent: () => {
          return <ThemeSwitch />;  // Add theme switch on the navbar
      },
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    const { title: pageTitle } = useConfig()
    return {
      additionalLinkTags: [
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml',
        }
      ],
      title: asPath !== '/' ? `${pageTitle} - errDev-t` : 'errDev-t',
    }
  },
}

export default config
