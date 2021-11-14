import './ProfileOrderedCard.css'


const ProfileOrderedCard = ({
    data
}) => {
    return ( 
        <div className="ordered-card-wrapper">
            <div className="ordered-card-container">
                <h1>{data.product?.title}</h1>
                <span>Ordered at: {new Date(data.createdAt).toLocaleDateString()}</span>
                {
                    data.estimateTime !== 'NA'
                        ? (
                            <p>Will be ready at: <span>{
                                new Date(new Date(data.createdAt).getTime() + Number(data.estimateTime) * 60000).toLocaleTimeString()
                            }</span></p>
                        )
                        : ''
                }
                <p>Quantity: {data.quantity}</p>
                <p className="bill">{data.paid ? 'Paid' : `Not Paid, Bill: ${data.bill} $.`} </p>
            </div>
        </div>
    )
}


export default ProfileOrderedCard