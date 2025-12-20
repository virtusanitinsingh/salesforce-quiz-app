const fs = require('fs');

// Create a simple gradient PNG using canvas
// We'll use a data URI and convert it to binary

// Create SVG that we can reference directly
const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grad1)"/>
  <text x="250" y="160" font-size="72" font-weight="bold" fill="white" font-family="Arial, sans-serif">Salesforce</text>
  <text x="250" y="240" font-size="64" font-weight="bold" fill="white" font-family="Arial, sans-serif">Agentforce Quiz</text>
  <text x="100" y="340" font-size="36" fill="rgba(255,255,255,0.95)" font-family="Arial, sans-serif">120+ Practice Questions</text>
  <text x="100" y="400" font-size="32" fill="rgba(255,255,255,0.85)" font-family="Arial, sans-serif">Master Certification with Microlearning</text>
  <circle cx="150" cy="120" r="60" fill="rgba(255,255,255,0.2)"/>
  <text x="150" y="135" font-size="80" text-anchor="middle" fill="white">⚡</text>
</svg>`;

fs.writeFileSync('og-image.svg', svgContent);
console.log('✅ SVG image created');
