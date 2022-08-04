import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, onChangePage, currentPage, portionSize = 50 }) => {
    let pages = Math.ceil(totalItemsCount / pageSize);
    let pagesArr = [];
    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i);
    }

    let portionCount = Math.ceil(pages/portionSize);
    let [currentPortion, setPortion] = useState(1);
    let startPortion = currentPortion*portionSize - (portionSize-1);
    let endPortion = currentPortion*portionSize;

    return <>
        
        <div  >
            {currentPortion > 1 && <button onClick={() => setPortion(currentPortion - 1)}>prev</button>}
            {pagesArr.filter(page => {
                return page >= startPortion && page <= endPortion
            }).map(p => {
                return <span className={currentPage === p && s.selectedPage} 
                    key={p} onClick={() => onChangePage(p)} > {p}</span>
            })
            }
            {currentPortion < portionCount && <button onClick={() => setPortion(currentPortion +1 )}>next</button>}
        </div>
    </>
}
export default Paginator;