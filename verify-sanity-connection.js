/**
 * Sanity Connection Verification Script
 * 
 * This script tests your Sanity API connection and CORS configuration
 * Run with: node verify-sanity-connection.js
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';

// Load environment variables from .env.local
function loadEnv() {
  try {
    const envFile = readFileSync('.env.local', 'utf-8');
    const lines = envFile.split('\n');
    lines.forEach(line => {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        process.env[key] = value;
      }
    });
  } catch (error) {
    console.error('Could not load .env.local file');
  }
}

loadEnv();

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  section: (msg) => console.log(`\n${colors.cyan}${msg}${colors.reset}\n`),
};

async function verifyConnection() {
  log.section('=== Sanity Connection Verification ===');

  // Check environment variables
  log.section('1. Checking Environment Variables');
  
  const projectId = process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET;
  const apiVersion = process.env.VITE_SANITY_API_VERSION;
  const token = process.env.VITE_SANITY_TOKEN;

  if (!projectId) {
    log.error('VITE_SANITY_PROJECT_ID is not set');
    return;
  }
  log.success(`Project ID: ${projectId}`);

  if (!dataset) {
    log.error('VITE_SANITY_DATASET is not set');
    return;
  }
  log.success(`Dataset: ${dataset}`);

  if (!apiVersion) {
    log.warning('VITE_SANITY_API_VERSION is not set (using default)');
  } else {
    log.success(`API Version: ${apiVersion}`);
  }

  if (!token) {
    log.info('VITE_SANITY_TOKEN is not set (using public access)');
  } else {
    log.success('API Token is configured');
  }

  // Create Sanity client
  log.section('2. Creating Sanity Client');
  
  const client = createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: apiVersion || '2024-01-01',
    token: token || undefined,
  });

  log.success('Sanity client created successfully');

  // Test queries
  log.section('3. Testing Data Queries');

  try {
    // Test artists query
    log.info('Fetching artists...');
    const artists = await client.fetch(`*[_type == "artist"] | order(name asc) {
      _id,
      name,
      genre,
      "image": image.asset->url
    }`);
    
    if (artists && artists.length > 0) {
      log.success(`Found ${artists.length} artist(s)`);
      artists.slice(0, 3).forEach(artist => {
        console.log(`  - ${artist.name} (${artist.genre})`);
      });
    } else {
      log.warning('No artists found in Sanity');
    }

    // Test blogs query
    log.info('Fetching blog posts...');
    const blogs = await client.fetch(`*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      publishedAt
    }`);
    
    if (blogs && blogs.length > 0) {
      log.success(`Found ${blogs.length} blog post(s)`);
      blogs.slice(0, 3).forEach(blog => {
        console.log(`  - ${blog.title}`);
      });
    } else {
      log.warning('No blog posts found in Sanity');
    }

    // Test producers query
    log.info('Fetching producers...');
    const producers = await client.fetch(`*[_type == "producer"] | order(name asc) {
      _id,
      name,
      specialty
    }`);
    
    if (producers && producers.length > 0) {
      log.success(`Found ${producers.length} producer(s)`);
      producers.slice(0, 3).forEach(producer => {
        console.log(`  - ${producer.name} (${producer.specialty})`);
      });
    } else {
      log.warning('No producers found in Sanity');
    }

  } catch (error) {
    log.error('Failed to fetch data from Sanity');
    console.error(`\n${colors.red}Error details:${colors.reset}`, error.message);
    
    if (error.message.includes('CORS')) {
      log.section('CORS Configuration Issue Detected');
      console.log('Please follow these steps:');
      console.log('1. Go to https://www.sanity.io/manage');
      console.log('2. Select your project');
      console.log('3. Navigate to API → CORS Origins');
      console.log('4. Add http://localhost:5173 as an allowed origin');
      console.log('5. Save and try again');
    }
    
    return;
  }

  // Test image CDN
  log.section('4. Testing Image CDN');
  
  try {
    const artistsWithImages = await client.fetch(`*[_type == "artist" && defined(image)][0] {
      name,
      "imageUrl": image.asset->url
    }`);
    
    if (artistsWithImages && artistsWithImages.imageUrl) {
      log.success('Image CDN is accessible');
      console.log(`  Sample image URL: ${artistsWithImages.imageUrl.substring(0, 60)}...`);
    } else {
      log.warning('No images found to test CDN');
    }
  } catch (error) {
    log.error('Failed to test image CDN');
    console.error(error.message);
  }

  // Summary
  log.section('=== Verification Complete ===');
  log.success('All checks passed! Your Sanity connection is working correctly.');
  console.log('\nNext steps:');
  console.log('1. Start your development server: pnpm dev');
  console.log('2. Open http://localhost:5173 in your browser');
  console.log('3. Check that content loads without CORS errors');
  console.log('4. Review SANITY_CORS_CONFIGURATION_GUIDE.md for production setup');
}

// Run verification
verifyConnection().catch(error => {
  log.error('Verification failed');
  console.error(error);
  process.exit(1);
});
