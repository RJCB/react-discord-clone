import { HashtagIcon } from '@heroicons/react/outline'
import React from 'react'

const Channel = ({ doc }) => {
    const setChannel = () => {

    }
    return (
        <div className="font-medium flex items-center cursor-pointer hover:bg-discord_channelHoverBg p-1 rounded-md hover:text-white">
            <HashtagIcon className="h-5 mr-2" onClick={setChannel} />
            {doc.data().channelName}
        </div>
    )
}

export default Channel