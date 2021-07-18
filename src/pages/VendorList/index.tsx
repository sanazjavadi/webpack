import React from "react";

import { useSelector, useDispatch } from 'react-redux';

// VendorState: object  ( Vendors States )
// GetVendor: fn  ( Get Vendors from API )
import { vendorState, getVendor } from '../../reducers/vendor';

// Styles
import Styles from './vendorList.module.scss'

// Components
import VendorCard from '../../components/VendorCard'

//svg
import Loading from '../../svg/Loading'

const VendorList: React.FC = (props) => {

    const [page, setPage] = React.useState(1);
    const [vendors, setVendors] = React.useState([]);

    const loader = React.useRef(null);

    const { vendor, loading } = useSelector(vendorState);
    const dispatch = useDispatch();

    const handleObserver = React.useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
          console.log('111');
        }
      }, []);

      React.useEffect(() => {
        const option = {
          root: null,
          rootMargin: "20px",
          threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
      }, [handleObserver]);

      React.useEffect(() => {
         setVendors([...vendors, ...vendor])
      }, [vendor])




    React.useEffect(() => {
      dispatch(getVendor(page))
    }, [page])


    

    return (
        <div className={Styles.vendorList}>
            {(
                vendors.length ? (
                    vendors.map((vendor?: any) => <VendorCard data={vendor.data}  />)
                ) : (
                    <div className="mt-5"><Loading/></div>
                )
            ) }
            <div ref={loader} >
              <Loading/>
              </div>
        </div>
    )
}


export default VendorList;