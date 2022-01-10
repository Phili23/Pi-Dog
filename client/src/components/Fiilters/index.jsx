import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTemperaments} from '../../actions'


export default function Filters() {

    /* const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperament)
    const [temps, setTemps] = useState('All')

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    function handleTemperamentFilter(e) { 
        setTemps(e.target.value)
        dispatch(getTemperaments(e.target.value))
    }

    return (
        <div>
            
            <select value={temps} onChange={(e) => handleTemperamentFilter(e)}>
                        <option value="All">All</option>
                        {temperaments.map((t, idx) => {
                            return <option key={idx} value={t}>{t}</option>
                        })}
                    </select>
        </div>
    ) */
} 