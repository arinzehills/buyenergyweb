import React from 'react'
import './Loader.css'
function Loader({description}) {
  return (
        <>
        <div className="loader-section">
            <div className="loadingio-spinner-dual-ball-0u3lotnxmhxr">
                <div className="ldio-nf8mvbby44">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {description && <div className="loader-text"><h3>{description}</h3></div>}
        </div>
       
        </>
  )
}

export default Loader