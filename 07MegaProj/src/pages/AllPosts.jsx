import React, { useState, useEffect } from 'react'
import databaseService from '../appwrite/databaseService'
import { Container, PostCard } from '../components'

const AllPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
            const response = databaseService.listDocuments([])
            .then((posts)=>{
                if (posts) {
                    setPosts(posts.documents)
                }
            })

    }, [])


  return (
    <div>
         <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts