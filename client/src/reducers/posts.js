export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'DELETE':
      return posts.filter((post) => post.id !== action.payload)
    case 'CREATE':
      return [...posts, action.payload]
    default:
      return posts
  }
}
