import React from 'react'
import {LoaderIcon} from 'lucide-react'

const PageLoader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <LoaderIcon className='animate-spin h-12 w-12 text-white' />
    </div>
  )
}

export default PageLoader