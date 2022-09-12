import './movlist.scss'
import { ArrowBackIosOutline, ArrowForwardIosOutlined } from '@material-ui/icons'
import MovListItem from "../movlistitem/movlistitem.scss"
import { useState } from 'react'

const MovList = () => {
    const [isMoved, setIsMoved] = useState(false)
  return (
    <div className='mList'>
        <span className='mListTitle'>Continue to Watch</span>
        <div className='wrapper'>
            <ArrowBackIosOutline
                className="slideArrow left"
                style={{display: !isMoved && "none"}}
            />
            <div>
                <MovListItem idx={0}/>
            </div>
            <ArrowForwardIosOutlined
                className='slideArrow right'
            />
        </div>
    </div>
  )
}

export default MovList;