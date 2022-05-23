import React from 'react'

function card(props) {
    return (
        <div className='col-lg-3 md-3'>
            <div class="card" style={{width: "13rem"}}>
              <img  src="..g/pic/1.jpg" alt="Card image cap" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{props.product.name}</h5>
                  <p class="card-text">{props.product. text}</p>
                 <h5 class="card-text">Price:{props.product.price}</h5>
                  <button class="btn btn-primary" onClick={()=>props.handleCart(props.product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default card
