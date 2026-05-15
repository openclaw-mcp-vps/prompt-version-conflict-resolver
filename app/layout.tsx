import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Conflict Resolver — Merge AI Prompt Changes Safely',
  description: 'Git-like conflict resolution for AI prompts. Detect conflicts, get A/B test suggestions, and collaborate safely with your prompt engineering team.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="18ffc6be-b446-4b5a-b51c-8b3d0580015a"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
