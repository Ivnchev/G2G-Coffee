import './LastCoffee.css'
import { useState, useEffect } from 'react'

const LastCoffee = ({
    lastOrder
}) => {

    const [time, setTime] = useState({
        time: 0,
        minutes: 0
    })


    useEffect(() => {
        const currentTime = new Date(lastOrder.createdAt)

        setTime(s => ({ hours: currentTime.getHours(), minutes: currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes() }))

    }, [lastOrder.createdAt])


    return (
        <article className="coffee-timer">
            {
                lastOrder
                    ? <div className="profile-coffee-taimer">
                        <h2>Last Order: </h2>
                        <div className="coffee-inner-wrapper">
                            <div className="ordered-coffee-timer">
                                <h2>{lastOrder?.product?.type} {lastOrder?.product?.title}</h2>
                            </div>
                            <div className="profile-coffee-taimer-wrapper">
                                <div className="coffee-taimer-minutes">
                                    <h2>{time.hours || '00'}</h2>
                                </div>
                                <div className="coffee-taimer-dots">
                                    <h2>:</h2>
                                </div>
                                <div className="coffee-taimer-seconds">
                                    <h2>{time.minutes || '00'}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </article>
    )
}


export default LastCoffee