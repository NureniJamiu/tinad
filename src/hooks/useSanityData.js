import { useState, useEffect, useCallback } from 'react'
import { client } from '../sanity/client'

/**
 * Custom hook for fetching data from Sanity with loading, error states, and retry functionality
 * @param {string} query - GROQ query string
 * @param {Object} params - Query parameters
 * @returns {Object} { data, loading, error, retry }
 */
export function useSanityData(query, params = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Log the query for debugging
      console.log('[Sanity] Fetching data with query:', query.substring(0, 100) + '...')
      
      const result = await client.fetch(query, params)
      
      // Validate result
      if (result === undefined || result === null) {
        console.warn('[Sanity] Query returned null or undefined:', query)
        setData([])
      } else {
        console.log('[Sanity] Successfully fetched data:', Array.isArray(result) ? `${result.length} items` : 'single item')
        setData(result)
      }
    } catch (err) {
      // Enhanced error logging
      console.error('[Sanity] Fetch error:', {
        message: err.message,
        query: query.substring(0, 100) + '...',
        params,
        stack: err.stack,
        statusCode: err.statusCode,
        details: err.details
      })
      
      // User-friendly error messages
      let errorMessage = 'Unable to load content'
      
      if (err.message.includes('network') || err.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your connection.'
      } else if (err.statusCode === 401 || err.statusCode === 403) {
        errorMessage = 'Authentication error. Please contact support.'
      } else if (err.statusCode === 404) {
        errorMessage = 'Content not found.'
      } else if (err.statusCode >= 500) {
        errorMessage = 'Server error. Please try again later.'
      }
      
      setError(errorMessage)
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [query, JSON.stringify(params)])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const retry = useCallback(() => {
    console.log('[Sanity] Retrying fetch...')
    fetchData()
  }, [fetchData])

  return { data, loading, error, retry }
}
