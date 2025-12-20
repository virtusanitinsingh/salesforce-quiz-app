const fs = require('fs');
const path = require('path');

// Create a simple PNG using Node.js canvas if available, otherwise use a data URI approach
// For now, we'll create an SVG that's guaranteed to work

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background Gradient -->
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#grad1)"/>
  
  <!-- Lightning Bolt -->
  <g transform="translate(100, 80)">
    <text x="0" y="80" font-size="100" fill="white">⚡</text>
  </g>
  
  <!-- Main Title -->
  <text x="250" y="160" font-size="72" font-weight="bold" fill="white" font-family="Arial, sans-serif">
    Salesforce
  </text>
  
  <!-- Subtitle -->
  <text x="250" y="240" font-size="64" font-weight="bold" fill="white" font-family="Arial, sans-serif">
    Agentforce Quiz
  </text>
  
  <!-- Description -->
  <text x="100" y="340" font-size="36" fill="rgba(255,255,255,0.95)" font-family="Arial, sans-serif">
    120+ Practice Questions
  </text>
  
  <text x="100" y="400" font-size="32" fill="rgba(255,255,255,0.85)" font-family="Arial, sans-serif">
    Master Certification with Microlearning
  </text>
  
  <!-- Badge -->
  <rect x="100" y="490" width="400" height="80" fill="rgba(255,255,255,0.15)" rx="10" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
  <text x="300" y="545" font-size="32" fill="white" font-weight="bold" font-family="Arial, sans-serif" text-anchor="middle">
    Mobile-First Learning Platform
  </text>
</svg>`;

fs.writeFileSync(path.join(__dirname, 'og-image.svg'), svgContent);
console.log('OG image generated successfully!');
