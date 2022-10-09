import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../Components/Product';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/ProductActions';
import { listTopSellers } from '../Actions/UserActions';
import { Link } from 'react-router-dom';





export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    let isMount = true
    if(isMount){
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    
    }
    return() =>{
      isMount = false;
    }
    }, [dispatch]);
  return (
    <div>
      <h2>Fashion trends at a glance</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel className='carousel-size' showArrows autoPlay showThumbs={false}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )}
     

      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products?.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products?.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
      
    </div>
 
    
  );
}
