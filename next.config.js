/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    nextConfig,
    images: { loader: "custom" },
    distDir: "out",
    output: "export",
}
