export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
}

// Validate configuration
if (!sanityConfig.projectId) {
  console.error('Missing VITE_SANITY_PROJECT_ID environment variable')
}

if (!sanityConfig.dataset) {
  console.error('Missing VITE_SANITY_DATASET environment variable')
}
