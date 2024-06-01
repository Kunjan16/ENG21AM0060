import React, { useEffect, useState } from 'react'
import { getProductListAPI } from '../../service/api';



const Register = () => {

  const [productList, setProductList] = useState([]);

  const getProductList = () => {
    getProductListAPI().then((res) => {

      if (res && res) {
        console.log(res)
        setProductList(res)
      }

    }, (error) => { })
  }

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">

          {productList.length > 0 && productList.map((res, ind) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" key={ind}>
              <div className="custom-media">
                <div className="custom-media-body">
                  <h3>{res.productName}</h3>
                  <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                    <div><span className="price">{res.price}</span></div>
                    <div><span className='link_text'>View </span></div>
                  </div>
                  <div>
                    rating : {res.rating}
                  </div>
                  <div>
                    discount: {res.discount}
                  </div>
                  <div>
                    availability: {res.availability}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Register;