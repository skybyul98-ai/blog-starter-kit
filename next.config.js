/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 최적화
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // 압축
  compress: true,
  
  // 성능
  poweredByHeader: false,
  
  // 정적 생성
  staticPageGenerationTimeout: 60,
};

module.exports = nextConfig;
