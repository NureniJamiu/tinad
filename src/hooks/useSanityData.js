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
      
      const result = await client.fetch(query, params)
      
      if (result === undefined || result === null) {
        setData([])
      } else {
        setData(result)
      }
    } catch (err) {
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
    fetchData()
  }, [fetchData])

  return { data, loading, error, retry }
}
