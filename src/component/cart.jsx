/* eslint-disable react/prop-types */


export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    return(
        <>
        <aside className="block col=1">
            <h2>Cart Items</h2>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((item)=>(
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">{item.qty}x ${item.price.toFixed(2)}</div>
            </div>
        ))}
        </aside>
        </>
    )
}