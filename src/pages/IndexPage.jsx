import React from 'react'
import Post from "../Post"
import { useEffect, useState } from 'react'
const IndexPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/post").then(resposne => {
            resposne.json().then(posts => {
                setPosts(posts)
            })
        })
    }, [])
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    )
}

export default IndexPage