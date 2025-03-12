'use client'
import Link from 'next/link'
import { X } from 'lucide-react'

const resetButton = () => {

    const reset = () => {
        const form = document.querySelector(".search-form")
        if(form) form.reset()
    }

    return(
        <button type="reset" onClick={reset}>
            <Link href='/' className="search-btn text-white">
                <X className='size-6'/>
            </Link>
        </button>
    )
}

export default resetButton