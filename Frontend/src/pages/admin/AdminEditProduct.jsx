import { React, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProductApi, updateProductAPI } from '../../apis/Api'
import { toast } from 'react-toastify'

const AdminEditProduct = () => {

// recieve product id from URl
const {id} = useParams()
// navigator
const navigate = useNavigate()

// use effect to fetch product details 
useEffect(()=>{
  //API call
  getSingleProductApi(id).then((res)=>{
    console.log(res.data)
    setProductName(res.data.product.productName)
    setProductPrice(res.data.product.productPrice)
    setProductCategory(res.data.product.productCategory)
    setProductDescription(res.data.product.productDescription)
    setOldImage(res.data.product.productImageUrl)
  })
},[id])


  //  make useState 
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const [productImage, setProductImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const[oldImage, setOldImage] = useState('')



  // functio for image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0] //files not file
    setProductImage(file)
    setPreviewImage(URL.createObjectURL(file))
  }

  // Make Function for Button
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(productName,productPrice,productCategory,productDescription)
    console.log(previewImage)

    // make a fom data
    const formData = new FormData();
    formData.append('productName', productName)
    formData.append('productPrice', productPrice)
    formData.append('productCategory', productCategory)
    formData.append('productDescription', productDescription)
    formData.append('productImage', productImage)

    // making api call
    updateProductAPI(id,formData).then((res)=>{
      if(res.data.success == true){
        toast.success(res.data.message)
        navigate('/admin/dashboard')
      }
      else{
        toast.error(res.data.message)
      }
    }).catch(err=>{
      toast.error("Server Error")
    })

  }

  return (
    <>
      <h2 className='m-4'>Updating Product for <span className="text-danger" />{productName}</h2>
      <div className='d-flex m-4 gap-4'>
        <div className="">
          <form>
            <label>Product Name</label>
            <input value={productName} onChange={(e) => setProductName(e.target.value)} type="text" className='form-control mb-2' placeholder='Enter product name' />

            <label>Product Price</label>
            <input value={productPrice}  onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter product price' />

            <label>Product Category</label>
            <select value={productCategory}  onChange={(e) => setProductCategory(e.target.value)} className='form-control mb-2'>
              <option value="Flower">Flower</option>
              <option value="Cake">Cake</option>
              <option value="Gift">Gift</option>
            </select>

            <label>Product Description</label>
            <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} name="" id="" cols="3" rows="3" className='form-control' placeholder='Enter description'></textarea>

            <label>Product Image</label>
            <input onChange={handleImageUpload} type="file" className='form-control mb-2' />

            <button onClick={handleSubmit} className='btn btn-primary w-100 mt-2'>Update Product</button>

          </form>
        </div>
        <div >
          <h6>Old Image</h6>
          <img src={oldImage} height={200} width={200} alt="" />
          <hr/>
        {
          previewImage && <>
            <h6 className='mt-3'> New Image</h6>
          <img src={previewImage} className='object-fit-cover rounded-3 ' height={200} width={200} alt="" />
          </>
        }
        </div>
      </div>
    </>
  )
}

export default AdminEditProduct