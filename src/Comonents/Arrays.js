import React from 'react'
export default function Arrays() {
const store=[[1,2,3,4],[5,6,7,8],[9,10,11,12]];
return(
    <div>
        {store.map((items) => {
            return (
            <ul>
                {
                  items.map((subItems) => {
                    return<li>{subItems}</li>
                  })}
                </ul>
            );
        })}
    </div>
);
}
