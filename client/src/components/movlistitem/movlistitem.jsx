import './movlistitem.scss'
import { PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'

export default function MovListItem({idx}){
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className='movlistitem'
            style={{left: isHovered && idx * 225 -50 + idx * 2.5}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
            src=''
            alt=''
            />

        </div>
    )
}