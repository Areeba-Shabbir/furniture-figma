export const apiVersion =
<<<<<<< HEAD
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-20'
=======
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'
>>>>>>> 4513c20f29a0a5afe19f70c71ee35e0def8c3814

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
