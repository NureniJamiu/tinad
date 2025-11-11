/**
 * Seed script for Site Settings
 * 
 * This script creates a single site settings document in Sanity.
 * Run with: node seed-site-settings.js
 * 
 * Note: You'll need to manually upload the hero images and background music
 * through the Sanity Studio UI after running this script.
 */

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env.local' });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  useCdn: false,
  token: process.env.VITE_SANITY_TOKEN,
  apiVersion: '2024-01-01',
});

async function seedSiteSettings() {
  console.log('🌱 Seeding Site Settings...\n');

  try {
    // Check if site settings already exist
    const existing = await client.fetch(`*[_type == "siteSettings"][0]`);
    
    if (existing) {
      console.log('✅ Site Settings already exist!');
      console.log('   Document ID:', existing._id);
      console.log('\n📝 To update:');
      console.log('   1. Go to your Sanity Studio');
      console.log('   2. Navigate to "Site Settings"');
      console.log('   3. Upload 3 hero images');
      console.log('   4. Upload background music file');
      return;
    }

    // Create site settings document
    const siteSettings = {
      _type: 'siteSettings',
      title: 'Site Settings',
    };

    const result = await client.create(siteSettings);
    
    console.log('✅ Site Settings document created!');
    console.log('   Document ID:', result._id);
    console.log('\n📝 Next steps:');
    console.log('   1. Go to your Sanity Studio');
    console.log('   2. Navigate to "Site Settings"');
    console.log('   3. Upload 3 hero images');
    console.log('   4. Upload background music file (MP3 recommended)');
    console.log('\n💡 The hero images will appear on the homepage');
    console.log('💡 The background music will play automatically on the site');
    
  } catch (error) {
    console.error('❌ Error seeding site settings:', error.message);
    process.exit(1);
  }
}

seedSiteSettings();
