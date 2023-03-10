import { CURRENT_USER_POSTS_UPDATE } from '../constants'

const initialState = {
  currentUserPosts: null,
  loaded: false
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_POSTS_UPDATE: return { ...state, currentUserPosts: action.currentUserPosts, loaded: action.loaded }
    default: return state
  }
}
