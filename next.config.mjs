/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    eslint: {
        ignoreDuringBuilds: true,
    }, 
    styleComponents: true, // swc에 styled-components 지원 활성화
    output: 'standalone', // 빌드 결과물을 standalone 모드로 생성
}

export default nextConfig