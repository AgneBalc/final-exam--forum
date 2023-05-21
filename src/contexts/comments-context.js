import { createContext, useEffect, useReducer } from "react";

const CommentsContext = createContext();

const COMMENTS_ACTIONS = {
  GET: 'get_all_comments',
  ADD: 'add_new_comments',
  EDIT: 'edit_comment',
  DELETE: 'delete_comment',
}

const commentsReducer = (state, action) => {
  switch (action.type) {
    case COMMENTS_ACTIONS.GET:
      return action.data;
    case COMMENTS_ACTIONS.ADD:
      fetch('http://localhost:8080/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.comment)
      });
      return [action.comment, ...state];
    case COMMENTS_ACTIONS.EDIT:
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          fetch(`http://localhost:8080/comments/${action.comment.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: action.comment.text,
              wasEdited: true
            })
          });
          return {
            ...comment,
            text: action.comment.text,
            wasEdited: true
          }
        } else {
          return comment;
        };
      });
    case COMMENTS_ACTIONS.DELETE:
      fetch(`http://localhost:8080/comments/${action.id}`, {
        method: 'DELETE'
      });
      return state.filter(comment => comment.id !== action.id);
    default:
      return state;
  }
}

const CommentsProvider = ({ children }) => {
  const [comments, dispatchComments] = useReducer(commentsReducer, []);

  useEffect(() => {
    fetch('http://localhost:8080/comments')
      .then(res => res.json())
      .then(data => dispatchComments({
        type: COMMENTS_ACTIONS.GET,
        data,
      }))
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        dispatchComments
      }}
    >
      {children}
    </CommentsContext.Provider>
  )
};

export default CommentsContext;
export { CommentsProvider };