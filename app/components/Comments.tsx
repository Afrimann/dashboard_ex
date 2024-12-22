import { useEffect, useState } from 'react'

const Comments = () => {
  const [comments, setComments] = useState<Array<string>>([
    'You have a good product'
  ])
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
      } catch (error: any) {
        setError(error.message)
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
