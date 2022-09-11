import './index.css'

const CommentItem = props => {
  const {itemData, likeActionHandler, deleteActionHandler} = props

  const {
    commentId,
    authorName,
    postedComment,
    creationDateTime,
    isLiked,
    backgroundColorClassName,
  } = itemData

  return (
    <div className="comment-item-container">
      <div className="comment-item-content-container"></div>
      <div className="comment-item-actions-container"></div>
    </div>
  )
}

export default CommentItem
