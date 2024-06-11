import React, { useEffect, useState } from 'react'

const SearchPage = () => {
    //fetch tutor if getRole = parent
    //fetch post if getRole = tutor
    const [searchTerm, setSearchTerm] = useState('')
    const [showClient, setShowClient] = useState([
        {name : 'hello'},
        {name : 'dumbo'},
        {name : 'hell'}
    ])
    const [displaySearch, setDisplaySearch] = useState([])
    //useEffect to update showClient
    //i nid to fix the code, display and actual array nid to have a new useState

    useEffect(() => {
        console.log(displaySearch)
      }, [displaySearch])

    function handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase()
        setSearchTerm(searchTerm)
        const output = showClient.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm)
        })
        console.log(searchTerm)
        setDisplaySearch(output)
       // console.log(displaySearch)
    }
  return (
    <div>
      <input 
      placeholder='for u to search'
      type='search'
      value={searchTerm}
      onChange={handleSearch}/>
    </div>
  )
}

export default SearchPage
