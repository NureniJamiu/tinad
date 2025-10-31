# Error Handling Test Scenarios

This document outlines the error scenarios that have been implemented and how to test them.

## Implemented Error Handling

### 1. Network Errors
**Scenario**: Network connection fails or Sanity API is unreachable
**Implementation**: 
- Enhanced error logging in `useSanityData` hook
- User-friendly message: "Network error. Please check your connection."
- Retry button available via `ErrorFallback` component

**Test**: 
- Disconnect network while loading
- Block Sanity API domain in browser DevTools

### 2. Authentication Errors (401/403)
**Scenario**: Invalid or missing API token
**Implementation**:
- Detects 401/403 status codes
- User-friendly message: "Authentication error. Please contact support."
- Console logs full error details for debugging

**Test**:
- Use invalid VITE_SANITY_TOKEN in .env.local
- Remove token entirely

### 3. Content Not Found (404)
**Scenario**: Requested content doesn't exist
**Implementation**:
- Detects 404 status code
- User-friendly message: "Content not found."
- Graceful fallback to empty state

**Test**:
- Query for non-existent document ID
- Use invalid dataset name

### 4. Server Errors (500+)
**Scenario**: Sanity server error
**Implementation**:
- Detects 500+ status codes
- User-friendly message: "Server error. Please try again later."
- Retry functionality available

**Test**:
- Simulate server error (difficult without backend control)

### 5. Null/Undefined Data
**Scenario**: Query returns null or undefined
**Implementation**:
- Hook converts null/undefined to empty array
- Components check for empty arrays and show "No content available" message
- Console warning logged

**Test**:
- Query empty dataset
- Use query that returns no results

### 6. Missing Images
**Scenario**: Image URL is invalid or image fails to load
**Implementation**:
- `imageBuilder` functions return empty string for null/undefined
- Card components show fallback icon/gradient when no image
- `onError` handlers log failed image loads and hide broken images

**Test**:
- Create content without images
- Use invalid image references
- Block image CDN in DevTools

### 7. Missing Required Fields
**Scenario**: Content missing name, title, or other required fields
**Implementation**:
- All card components use fallback values:
  - `name || 'Unknown Artist'`
  - `title || 'Untitled Post'`
  - `description || 'No description available'`
- Prevents undefined/null rendering errors

**Test**:
- Create content with missing fields in Sanity Studio
- Manually edit query to exclude fields

## Components with Error Handling

### ErrorFallback Component
- Reusable error UI component
- Props: `error`, `retry`, `title`, `className`
- Displays error message and retry button
- Consistent styling across all error states

### useSanityData Hook
- Enhanced error logging with context
- User-friendly error messages
- Retry functionality
- Null/undefined data handling
- Console logging for debugging

### Card Components
All card components now include:
- Null/undefined prop handling with fallbacks
- Image error handling with `onError`
- Fallback UI when images missing
- Safe rendering of all text fields

## Console Logging

All Sanity operations now log to console:
- `[Sanity] Fetching data with query:` - Query start
- `[Sanity] Successfully fetched data:` - Success with item count
- `[Sanity] Query returned null or undefined:` - Warning for null data
- `[Sanity] Fetch error:` - Detailed error object
- `[Sanity] Retrying fetch...` - Retry attempt
- `[ArtistCard] Image failed to load:` - Image load failure
- `[ProducerCard] Image failed to load:` - Image load failure
- `[BlogDisplayCard] Image failed to load:` - Image load failure
- `[ArtistDisplayCard] Top/Bottom image failed to load:` - Image load failure

## Testing Checklist

- [x] Network failure handling
- [x] Invalid API token handling
- [x] Empty dataset handling
- [x] Missing image handling
- [x] Missing required fields handling
- [x] Retry functionality
- [x] Console logging for debugging
- [x] Consistent error UI across components
- [x] Graceful degradation for all error types

## Manual Testing Steps

1. **Test Network Error**:
   ```bash
   # In browser DevTools Network tab, set throttling to "Offline"
   # Refresh page and observe error handling
   ```

2. **Test Missing Images**:
   - Create artist/producer/blog in Sanity without uploading images
   - Verify fallback icons/gradients display

3. **Test Empty Data**:
   - Use empty Sanity dataset
   - Verify "No content available" messages display

4. **Test Retry Functionality**:
   - Trigger any error state
   - Click "Try Again" button
   - Verify data refetches

5. **Test Console Logging**:
   - Open browser console
   - Navigate through pages
   - Verify all Sanity operations are logged
   - Trigger errors and verify detailed error logs

## Requirements Coverage

This implementation satisfies:
- **Requirement 6.3**: Error handling with user-friendly messages
- **Requirement 6.4**: Graceful handling of null/undefined data
- All components handle errors consistently
- Retry functionality implemented
- Comprehensive console logging for debugging
