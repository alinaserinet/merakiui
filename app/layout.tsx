import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'merakiui',
    description:
        'Tailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode 🚀 ☄️.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
