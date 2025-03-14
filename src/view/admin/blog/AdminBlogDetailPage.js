'use client'

import HoPrimaryButton from "@/components/button/HoPrimaryButton";
import { CreateAdminBlogService, EditAdminBlogDetailService, GetAdminBlogDetailService, RemoveAdminBlogService } from "../../../services/Api's/admin/blog/adminBlogApiRoutes";
import { useEffect, useState } from "react";
import LabelBox from '../../../components/labelbox/LabelBox';
import HoTextField from "@/components/textfield/HoTextField";
import HoTextEditor from '../../../components/textEditor/HoTextEditor';
import { useRouter } from "next/navigation";

export default function AdminBlogDetailPage() {
    const [blogDetails, setBlogDetails] = useState(null);
    const [title, setTitle] = useState(blogDetails?.title || '');
    const [author, setAuthor] = useState(blogDetails?.author || '')
    const [description, setDescription] = useState(blogDetails?.description || '');
    const [categories, setCategories] = useState(blogDetails?.categories || '');
    const [hasBlogId, setHasBlogId] = useState(false);
    const [textEditorContent, setTextEditorContent] = useState(blogDetails?.content || '');
    const [image, setImage] = useState(null);
    const [blogId, setBlogId] = useState(blogDetails?.id || '');
    const router = useRouter()

    const textEditorContentChanged = (data) => setTextEditorContent(data)

    useEffect(() => {
        const blogId = window?.location.pathname.split("/").pop();
        typeof blogId === 'number' && setHasBlogId(true);
        GetAdminBlogDetailService({ blogId: blogId }, getAdminBlogDetailCallback)
    }, [])

    const getAdminBlogDetailCallback = (data) => {
        if (!!data?.id) {
            setBlogDetails(data);
            setTitle(data?.title)
            setAuthor(data?.author);
            setTextEditorContent(data?.content);
            setDescription(data?.description);
            setCategories(data?.categories);
            setBlogId(data?.id)
        }
    }

    const deleteOrderClicked = () => {
        let params = {
            orderId: window?.location.pathname.split("/").pop()
        };
        RemoveAdminBlogService(params, removeAdminBlogCallback)
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const saveBlogClicked = () => {
        const userBlogId = hasBlogId ? window?.location.pathname.split("/").pop() : blogId;
        const formData = new FormData();

        formData.append("blogId", userBlogId);
        formData.append("update", JSON.stringify({
            author,
            categories,
            description,
            title,
            content: textEditorContent,
        }));

        if (image) formData.append("image", image);

        if (hasBlogId) EditAdminBlogDetailService(formData, editAdminProductDetailCallback)
        else CreateAdminBlogService(formData, editAdminProductDetailCallback)
    };


    const editAdminProductDetailCallback = (data) => data?.successfulOperation && router.push('/admin/blogs')

    const removeAdminBlogCallback = (data) => data?.successfulOperation && router.push('admin/blogs')

    return <div className="p-3 p-lg-4 p-md-4 p-sm-3 rounded rounded-3 border border-dark mx-3 w-100">

        <div className="mb-3 fw-bold w-auto">Information</div>
        <div className="d-flex">
            <LabelBox keyLabel='Blog Id' valueLabel={blogDetails?.id} />
            <LabelBox keyLabel='Title' valueLabel={blogDetails?.title} />
            <LabelBox keyLabel='PublishDate' valueLabel={new Date(blogDetails?.publishDate).toLocaleString()} />
            <LabelBox keyLabel='Categories' valueLabel={blogDetails?.categories} />

        </div>
        <div>
            <div className="fw-bold w-auto mb-4 mt-5">
                Fields
            </div>
            <div className="row d-flex">
                <div className="col-12 mb-3">
                    <label className="form-label">Upload Image</label>
                    <input type="file" className="form-control" onChange={handleImageUpload} />
                </div>
                {!hasBlogId &&
                    <div className="col-2 mb-3">
                        <HoTextField onChange={(data) => setBlogId(data)} label='Blog Id' value={blogId} className='w-100' />
                    </div>
                }
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setTitle(data)} label='Title' value={title} className='w-100' />
                </div>
                <div className="col-3 mb-3">
                    <HoTextField onChange={(data) => setAuthor(data)} label='Author' value={author} className='w-100' />
                </div>
                <div className="col-3 mb-3">
                    <HoTextField onChange={(data) => setCategories(data)} label='Categories' value={categories} className='w-100' />
                </div>
                <div className="col-12 mb-3">
                    <HoTextField onChange={(data) => setDescription(data)} label='description' value={description} className='w-100' />
                </div>
            </div>
        </div>

        <HoTextEditor initialValue={textEditorContent} contentChanged={textEditorContentChanged} />

        <div className="mb-3 fw-bold w-auto my-4">Actions</div>
        <div className="d-flex">
            <div>
                <div className="fw-bold font-size-15">Save Blog</div>
                <HoPrimaryButton onClick={saveBlogClicked} className='mt-2 me-2 bg-primary'>Save Blog</HoPrimaryButton>
            </div>
            {hasBlogId &&
                <div className="d-flex">
                    <div>
                        <div className="fw-bold font-size-15">Delete Blog</div>
                        <HoPrimaryButton onClick={deleteOrderClicked} className='mt-2 me-2 bg-danger'>Delete Blog</HoPrimaryButton>
                    </div>
                </div>
            }
        </div>

    </div>
}
