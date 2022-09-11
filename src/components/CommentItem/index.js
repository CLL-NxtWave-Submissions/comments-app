import './index.css'

const CommentItem = props => {
  const {itemData, likeActionHandler, deleteActionHandler} = props

  return (
    <div className="comment-item-container">
      <div className="comment-item-content-container"></div>
      <div className="comment-item-actions-container"></div>
    </div>
  )
}

export default CommentItem
