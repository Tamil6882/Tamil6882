import React from 'react'

function carditems(props) {
    
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{props.item .name}</div>
                {props.item.price}
            </div>
            <button class=" btn badge bg-danger rounded-pill" onClick={() =>{props.handleRemoveCart(props.item)}}>X</button>
        </li>
    )
}

export default carditems