/** @type {import('next').NextConfig} */



module.exports = {
  baseURL: process.env["BASE_URL"], 
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
}
