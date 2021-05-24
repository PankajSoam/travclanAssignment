import React from 'react';

function TableHeader(){
    return(
        <div>
            <h3 className="inLine name name-header">Name</h3>
            <h3 className="inLine email">Email</h3>
            <h3 className="inLine phone">Phone</h3>
            <h3 className="inLine premium">Premium</h3>
            <h3 className="inLine bid">Max/Min Bid</h3>
        </div>
    );
}

export default TableHeader;