import React from 'react';

const Pagination = ({totalPosts,postsPerPage,setCurrentPage}) => {
    let pages = [];

    for( var i=1; i< Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }


    return (
        
        <div>{pages.map(page=>{
            return <button className="buttonend" key={page} onClick={()=>setCurrentPage(page)}>{page}</button>})}</div>
    )
}

export default Pagination;