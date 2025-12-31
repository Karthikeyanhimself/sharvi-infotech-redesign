'use client'
import { ReactLenis } from 'lenis/react'

function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        // FIX: Reduced duration from 1.5 to 0.8 for snappy, instant response
        <ReactLenis root options={{ lerp: 0.1, duration: 0.8, smoothWheel: true }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll