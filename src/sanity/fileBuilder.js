import { client } from './client'

/**
 * Get file URL from Sanity file asset reference
 * @param {Object} fileAsset - Sanity file asset reference
 * @returns {string} File URL
 */
export function getFileUrl(fileAsset) {
  if (!fileAsset?.asset?._ref) return ''
  
  const projectId = client.config().projectId
  const dataset = client.config().dataset
  const ref = fileAsset.asset._ref
  
  // Extract file ID and extension from reference
  // Format: file-{id}-{extension}
  const [, id, extension] = ref.match(/^file-(.+)-(\w+)$/) || []
  
  if (!id || !extension) return ''
  
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
}
