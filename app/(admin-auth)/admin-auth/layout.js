export const metadata = {
  title: 'Admin authentication',
  description: 'only admin can login from this page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
