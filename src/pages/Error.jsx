import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
        <div className="error-container">
            <h1>nothing to see here</h1>
            <Link to='/react_cocktailDB' className='btn btn-primary'>
                go back to the homepage
            </Link>
        </div>
    </section>
  )
}

export default Error;