import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';
const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [files, setFiles] = useState("")
    const [redirect, setRedirect] = useState(false)

    const createNewpost = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title)
        data.set("summary", summary)
        data.set("content", content)
        data.set("file", files[0])
        const response = await fetch("http://localhost:3000/post", {
            method: "POST",
            body: data,
            credentials: "include"
        })
        if (response.ok) {
            setRedirect(true)
        }
    }
    if (redirect) {
        return <Navigate to={"/"} />
    }
    return (
        <form onSubmit={createNewpost}>
            <input
                type='title'
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type='summary'
                placeholder="Summary"
                value={summary}
                onChange={e => setSummary(e.target.value)}
            />
            <input
                type='file'
                // value={files}
                onChange={e => setFiles(e.target.files)}
            />
            <Editor value={content} onChange={setContent} />
            <button
                style={{ marginTop: "5px" }}
            >
                Create Post
            </button>
        </form>
    )
}

export default CreatePage