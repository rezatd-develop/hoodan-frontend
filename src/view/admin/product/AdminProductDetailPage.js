'use client'

import HoPrimaryButton from "@/components/button/HoPrimaryButton";
import HoTable from "@/components/table/HoTable";
import { enumerations } from "@/resources/enums/enumerations";
import { EditAdminOrderDetailService, RemoveAdminOrderService } from "@/services/Api's/admin/order/adminOrderApiRoutes";
import { EditAdminProductDetailService, GetAdminProductDetailService } from "@/services/Api's/admin/product/adminProductApiRoutes";
import { translateOrderStatus } from "@/utilities/CommonHelper";
import { useEffect, useState } from "react";
import LabelBox from '../../../components/labelbox/LabelBox';
import HoTextField from "@/components/textfield/HoTextField";

export default function AdminProductDetailPage() {
    const [productDetails, setProductDetails] = useState(null);
    const [selected, setSelected] = ([]);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [classSeries, setClassSeries] = useState(null);
    const [primaryDescription, setPrimaryDescription] = useState(null);
    const [secondDescription, setSecondDescription] = useState(null);
    const [thirdDescription, setThirdDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [FaqOneKey, setFaqOneKey] = useState(null);
    const [FaqOneValue, setFaqOneValue] = useState(null);
    const [FaqTwoKey, setFaqTwoKey] = useState(null);
    const [FaqTwoValue, setFaqTwoValue] = useState(null);
    const [FaqThreeKey, setFaqThreeKey] = useState(null);
    const [FaqThreeValue, setFaqThreeValue] = useState(null);
    const [FaqFourKey, setFaqFourKey] = useState(null);
    const [FaqFourValue, setFaqFourValue] = useState(null);
    const [detailOneKey, setdetailOneKey] = useState(null);
    const [detailOneValue, setDetailOneValue] = useState(null);
    const [detailTwoKey, setDetailTwoKey] = useState(null);
    const [detailTwoValue, setDetailTwoValue] = useState(null);
    const [detailThreeKey, setDetailThreeKey] = useState(null);
    const [detailThreeValue, setDetailThreeValue] = useState(null);
    const [mainDescription, setMainDescription] = useState(null);
    const [author, setAuthor] = useState(null);
    const [categories, setCategories] = useState(null);
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);

    const columns = [
        { id: 'productId', label: 'Product Id', width: 70 },
        { id: 'productTitle', label: 'Product Title', width: 150 },
        { id: 'productPrice', label: 'Product Price', width: 70 },
        { id: 'quantity', label: 'qantity', width: 150 },
    ];

    useEffect(() => {
        const productId = window?.location.pathname.split("/").pop();
        GetAdminProductDetailService({ productId: productId }, getAdminProductDetailCallback)
    }, [])

    const getAdminProductDetailCallback = (data) => {
        if (!!data?.title) {
            setProductDetails(data);
            setTitle(data?.title);
            setDescription(data?.description)
            setClassSeries(data?.classSeries)
            setPrimaryDescription(data?.primaryDescription)
            setSecondDescription(data?.secondDescription)
            setThirdDescription(data?.thirdDescription)
            setPrice(data?.price)
            setFaqOneKey(data?.FaqOneKey)
            setFaqOneValue(data?.FaqOneValue)
            setFaqTwoKey(data?.FaqTwoKey)
            setFaqTwoValue(data?.FaqTwoValue)
            setFaqThreeKey(data?.FaqThreeKey)
            setFaqThreeValue(data?.FaqThreeValue)
            setFaqFourKey(data?.FaqFourKey)
            setFaqFourValue(data?.FaqFourValue)
            setdetailOneKey(data?.detailOneKey)
            setDetailOneValue(data?.detailOneValue)
            setDetailTwoKey(data?.detailTwoKey)
            setDetailTwoValue(data?.detailTwoValue)
            setDetailThreeKey(data?.detailThreeKey)
            setDetailThreeValue(data?.detailThreeValue)
            setMainDescription(data?.mainDescription)
            setAuthor(data?.author)
            setCategories(data?.categories)
            setContent(data?.content)
        }
    }

    const saveProductClicked = async () => {
        const productId = window?.location.pathname.split("/").pop();
        const formData = new FormData();

        formData.append("productId", productId);
        formData.append("update", JSON.stringify({
            title,
            description,
            price,
            classSeries,
            primaryDescription,
            secondDescription,
            thirdDescription,
            FaqOneKey,
            FaqOneValue,
            FaqTwoKey,
            FaqTwoValue,
            FaqThreeKey,
            FaqThreeValue,
            FaqFourKey,
            FaqFourValue,
            detailOneKey,
            detailOneValue,
            detailTwoKey,
            detailTwoValue,
            detailThreeKey,
            detailThreeValue,
            mainDescription,
            author,
            categories,
            content
        }));
        formData.append("image", image);
        
        EditAdminProductDetailService(formData, editAdminProductDetailCallback);

    };

    const editAdminProductDetailCallback = (data) => console.log('***data', data);

    const deleteProductClicked = () => {
        let params = {
            productId: window?.location.pathname.split("/").pop()
        };
        RemoveAdminProductService(params, removeAdminProductCallback)
    };

    const removeAdminProductCallback = (data) => !data?.hasError && window.location.reload();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected Image:", file); // ✅ Debugging
            setImage(file);
        }
    };


    return <div className="p-3 p-lg-4 p-md-4 p-sm-3 rounded rounded-3 border border-dark mx-3 w-100">

        <div className="mb-3 fw-bold w-auto">Information</div>
        <div className="d-flex">
            <LabelBox keyLabel='Product Id' valueLabel={productDetails?.productId} />
            <LabelBox keyLabel='Product Name' valueLabel={productDetails?.title} />
            <LabelBox keyLabel='Product Price' valueLabel={productDetails?.price} />
            <LabelBox keyLabel='Publish Date' valueLabel={new Date(productDetails?.publishDate).toLocaleString()} />
        </div>

        <div className="mt-5 mb-4 fw-bold w-auto">Edit Product</div>
        <div className="row d-flex">
            <div className="col-12 mb-3">
                <label className="form-label">Upload Image</label>
                <input type="file" className="form-control" onChange={handleImageUpload} />
            </div>
            <div className="col-4 mb-3">
                <HoTextField onChange={(data) => setTitle(data)} label='Title' value={title} className='w-100' />
            </div>
            <div className="col-12 mb-3">
                <HoTextField onChange={(data) => setDescription(data)} label='Description' value={description} className='w-100' />
            </div>
            <div className="col-3 mb-3">
                <HoTextField onChange={(data) => setClassSeries(data)} label='Class Series' value={classSeries} className='w-100' />
            </div>
            <div className="col-9 mb-3">
                <HoTextField onChange={(data) => setPrimaryDescription(data)} label='Primary Description' value={primaryDescription} className='w-100' />
            </div>
            <div className="col-6 mb-3">
                <HoTextField onChange={(data) => setSecondDescription(data)} label='Second Description' value={secondDescription} className='w-100' />
            </div>
            <div className="col-6 mb-3">
                <HoTextField onChange={(data) => setThirdDescription(data)} label='Third Description' value={thirdDescription} className='w-100' />
            </div>
            <div className="col-3 mb-3">
                <HoTextField onChange={(data) => setPrice(data)} label='Price' value={price} className='w-100' />
            </div>
            <div className="d-flex row mb-3">
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqOneKey(data)} label='Faq One Question' value={FaqOneKey} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqOneValue(data)} label='Faq One Answer' value={FaqOneValue} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqTwoKey(data)} label='Faq Two Question' value={FaqTwoKey} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqTwoValue(data)} label='Faq Two Answer' value={FaqTwoValue} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqThreeKey(data)} label='Faq Three Question' value={FaqThreeKey} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqThreeValue(data)} label='Faq Three Answer' value={FaqThreeValue} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqFourKey(data)} label='Faq One Question' value={FaqFourKey} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setFaqFourValue(data)} label='Faq One Answer' value={FaqFourValue} className='w-100' />
                </div>
            </div>
            <div className="d-flex row">
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setdetailOneKey(data)} label='Detail One Question' value={detailOneKey} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setDetailOneValue(data)} label='Detail One Answer' value={detailOneValue} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setDetailTwoKey(data)} label='Detail Two Question' value={detailTwoKey} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setDetailTwoValue(data)} label='Detail Two Answer' value={detailTwoValue} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setDetailThreeKey(data)} label='Detail Three Question' value={detailThreeKey} className='w-100' />
                </div>
                <div className="col-6 mb-3">
                    <HoTextField onChange={(data) => setDetailThreeValue(data)} label='Detail Three Answer' value={detailThreeValue} className='w-100' />
                </div>
            </div>
            <div className="col-12 mb-3">
                <HoTextField onChange={(data) => setMainDescription(data)} label='Main Description' value={mainDescription} className='w-100' />
            </div>
            <div className="col-6 mb-3">
                <HoTextField onChange={(data) => setAuthor(data)} label='Author' value={author} className='w-100' />
            </div>
            <div className="col-6 mb-3">
                <HoTextField onChange={(data) => setCategories(data)} label='Categories' value={categories} className='w-100' />
            </div>
            <div className="col-12 mb-3">
                <HoTextField onChange={(data) => setContent(data)} label='Content' value={content} className='w-100' />
            </div>
            <HoPrimaryButton onClick={saveProductClicked} className='mt-2 me-2 py-3 bg-primary w-auto'>Save Changes</HoPrimaryButton>
        </div>
        <div className="mb-3 fw-bold w-auto my-4">Actions</div>
        <div>
            <div className="fw-bold font-size-15">Delete Order</div>
            <HoPrimaryButton onClick={deleteProductClicked} className='mt-2 me-2 bg-danger'>Delete Order</HoPrimaryButton>
        </div>
    </div>
}
