const posts = [
    {
        id: 1,
        title: 'First Post',
        description: 'asjhdajsgd'

    },
    {
        id: 2,
        title: 'Second Post',
        description: 'asjhdajsgd'

    },
    {
        id: 3,
        title: 'Third Post',
        description: 'asjhdajsgd'
    }
]


export const addPost = (newPost) => {
    posts.push(newPost)
    console.log(posts)
}

export const getPosts = () => {
    return posts
}