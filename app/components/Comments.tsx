import { useEffect, useState } from 'react'

const Comments = () => {
  const [comments, setComments] = useState<Array<string>>([])
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleDisplayComments = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://json.typicode.com/comments')
        if (!response.ok) {
          throw new Error('Error getting a response')
        }
        const data = await response.json()
        setComments(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }
    handleDisplayComments()
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className='fetchedComments'></div>
      {comments.length === 0 ? (
        <p>You have no comments</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className='comment'>
            {comment}
          </div>
        ))
      )}
    </div>
  )
}

export default Comments
