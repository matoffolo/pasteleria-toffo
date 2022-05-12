import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Order from '../Order/Order'

const OrderContainer = () => {
    const { id } = useParams()

    const [ticket, setTicket] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(ticket)

    useEffect(() => {
        const db = getFirestore();
        const ticketRef = doc(db, 'orders', id)

        getDoc(ticketRef)
            .then(res => {
                setTicket({ id: res.id, ...res.data() })
            })
            .finally((() => setLoading(false)))
    }, [id])

    return (
        <>
            {loading ? <Spinner />
                :
                (ticket ?
                    <>
                        <Order
                            ticket={ticket}
                            id={id}
                        /> </> : <div>TU ORDEN NO EXISTE</div>)}
        </>
    )
}

export default OrderContainer