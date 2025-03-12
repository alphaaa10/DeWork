import Form from 'next/form'
import ResetButton from './resetButton'
import { Search } from 'lucide-react'
const SearchForm = ({query}) => {

    return(
        <Form action='/' scroll={false} className='search-form'>
            <input 
                name="query"
                defaultValue={query}
                className='search-input'
                placeholder='Find a Talent' 
            />

            <div className='flex gap-2'>
                {query && <ResetButton/> }

                <button type='submit' className='search-btn text-white'>
                    <Search className= "size-6"/>
                </button>
            </div>

        </Form>
    )
}

export default SearchForm