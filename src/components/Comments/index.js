import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

export default class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  onAddComment = addCommentEvent => {
    addCommentEvent.preventDefault()

    this.setState(prevCommentsState => {
      const {name, comment, commentsList} = prevCommentsState

      const newComment = {
        commentId: uuidv4(),
        authorName: name,
        postedComment: comment,
        creationDateTime: new Date(),
        isLiked: false,
      }

      const updatedCommentsList = [...commentsList, newComment]
      const updatedCommentsState = {
        name: '',
        comment: '',
        commentsList: updatedCommentsList,
      }

      return updatedCommentsState
    })
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="comments-app-bg-container">
        <div className="comments-content-container">
          <h1 className="comments-header">Comments</h1>
          <div className="top-img-and-form-container">
            <img
              className="comments-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
            <form
              className="form-content-container"
              onSubmit={this.onAddComment}
            >
              <p className="form-header">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="form-input"
                placeholder="Your Name"
                value={name}
                onChange={this.onNameChange}
              />
              <textarea
                className="form-textarea"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onCommentChange}
              />
              <button type="submit" className="form-submit-button">
                Add Comment
              </button>
            </form>
          </div>
          <hr />
          <div className="comments-container">
            <div className="comments-count-container">
              <p className="comments-count">{commentsList.length}</p>
              <p className="comments-header">Comments</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
