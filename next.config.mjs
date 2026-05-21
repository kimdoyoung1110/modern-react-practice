/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    eslint: {
        ignoreDuringBuilds: true,
    }, 
    styleComponents: true, // swc에 styled-components 지원 활성화
}

export default nextConfig