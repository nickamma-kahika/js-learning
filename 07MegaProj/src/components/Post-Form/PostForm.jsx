import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'  
import { Button, Input, Select, RTE } from '../index'
import databaseService from '../../appwrite/databaseService'
import bucketService from '../../appwrite/storageService'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authService from '../../appwrite/authService'

const PostForm = ({ post }) => {

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues : {
            title: post?.title || "",
            slug : post?.slug || "",
            content : post?.content || "",
            status : post?.status || "active"
        }
    })

    // let user = '';
    // useEffect(()=>{
    //     authService.getCurrentUser()
    //     .then((userData)=>{
    //         if(userData){
    //             user = userData
    //         }
    //     })
    // },[])
    // console.log(user.$id)

    const navigate = useNavigate()

    const userData = useSelector((state)=> state.auth.userData)

    const submit = async(data)=>{
        if(post){
            const file = data.image[0] ? bucketService.uploadFile(data.image[0]) : null

            if(file){
                bucketService.deleteFile(post.featuredImage)
            }
            const dbPost = await databaseService.updateDocument(post.$id , {
                ...data,
                featuredImage : file ? file.$id : undefined
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else{
            const file = bucketService.uploadFile(data.image[0])
            console.log(file)

            if(file) {
                const  fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await databaseService.createDocument({
                    ...data,
                    userID: userData.$id
                })

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value === "string"){
            const slug = value.toLowerCase().replace(/\s/g, "-")
            setValue("slug", slug)
            return slug;
        }
        return '';
    }, [])

    useEffect(()=>{
        const subscription = watch((value, {name})=>{
            if(name === "title"){
                setValue('slug', slugTransform(value.title, {shouldValidate : true}))
            }
        })


        return ()=>{
            subscription.unsubscribe()
        }
    },[watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm