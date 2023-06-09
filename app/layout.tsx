import './globals.css'

export const metadata = {
  title: 'NetFlight',
  description: 'Generated by create next app',
  icons: {
    icon: '/images/NetFlight_logo.svg',
  },
  keywords: ['Next.js', 'Aviation', 'NetFlight'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
