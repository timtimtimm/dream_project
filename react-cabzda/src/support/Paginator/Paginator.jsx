import React from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArr = [];
    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i);
       console.log('hello'); 
    }
    return <>
        
        <div  >
            {pagesArr.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    key={p} onClick={() => props.onChangePage(p)} > {p}</span>
            })
            }
        </div>
    </>
}
export default Paginator;