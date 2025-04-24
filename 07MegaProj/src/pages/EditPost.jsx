import React, { useState, useEffect } from 'react'
import databaseService from '../appwrite/databaseService'
import { Container, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'


const EditPost = () => {

    const [post, setPost] = useState([])
    const {slug} = useParams
    const navigate = useNavigate()

    useEffect(()=>{
        databaseService.getDocument(slug)
        .then((post)=>{
            if(post){
                setPost(post)
                navigate(`/posts/${post.slug}`)
            }else{
                navigate('/')
            }
        })
    }, [slug, navigate])
 
  return post ? (
    <div>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost