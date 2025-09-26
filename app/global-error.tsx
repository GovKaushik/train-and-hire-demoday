'use client'

export default function GlobalError({
  error
}: {
  error: Error & { digest?: string }
}) {
  return (
    <html>
      <body>
        <h2>App error</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{error?.message}</pre>
      </body>
    </html>
  )
}