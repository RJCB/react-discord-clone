import { ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import { CogIcon, MicrophoneIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Navigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import Channel from './Channel';
import Chat from './Chat';
import ServerIcon from './ServerIcon';

const Home = () => {
    const [user] = useAuthState(auth);
    const [channels] = useCollection(db.collection("channels"));//channels is added to db at line 18
    const discordIconUrl = "https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png";
    const serverIconUrl = "https://cdn.discordapp.com/icons/789490395298005052/2211b969de8152c53198f2ff890b3c33.png?size=256";
    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");
        if (channelName) {
            db.collection("channels").add({
                channelName: channelName
            })
        }
    }
    return (
        <>
            {!user && <Navigate to="/" />}
            <div className="flex h-screen">
                <div className="flex flex-col space-y-3 bg-discord_serverWrapperBg p-3 min-w-max">
                    <div className="server-default hover:bg-discord_purple">
                        <img src={discordIconUrl} alt="" className="h-5" />
                    </div>
                    <hr className="border-gray-700 border w-8 mx-auto" />
                    <ServerIcon image={serverIconUrl} />
                    <ServerIcon image={serverIconUrl} />
                    <ServerIcon image={serverIconUrl} />
                    <ServerIcon image={serverIconUrl} />
                    <div className="server-default hover:bg-discord_green group">
                        <PlusIcon className="text-discord_green h-7 group-hover:text-white" />
                    </div>
                </div>
                <div className="bg-discord_channelsBg flex flex-col min-w-max">
                    <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-discord_serverNameHoverBg cursor-pointer">React server<ChevronDownIcon className="h-5 ml-2" /></h2>
                    <div className="text-discord_channel flex-grow overflow-y-scroll scrollbar-hide">
                        <div className="flex items-center p-2 mb-2">
                            <ChevronDownIcon className="h-3 mr-2" />
                            <h4 className="font-semibold">Channels</h4>
                            <PlusIcon className="h-6 ml-auto cursor-pointer hover:text-white" onClick={handleAddChannel} />
                        </div>
                        <div className="flex flex-col space-y-2 px-2 mb-4">
                            {channels && channels.docs.map((doc) => {
                                return <Channel
                                    key={doc.id}
                                    id={doc.id}
                                    channelName={doc.data().channelName}/>
                            })}
                        </div>
                    </div>
                    <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
                        <div className="flex items-center space-x-1">
                            <img
                                src={user?.photoURL}
                                alt=""
                                className="h-10 rounded-full"
                                onClick={() => auth.signOut()}
                            />
                            <h4 className="text-white text-xs font-medium">
                                {user?.displayName}{" "}
                                <span className="text-[#b9bbbe] block">
                                    #{user?.uid.substring(0, 4)}
                                </span>
                            </h4>
                        </div>

                        <div className="text-gray-400 flex items-center">
                            <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                                <MicrophoneIcon className="h-5 icon " />
                            </div>
                            <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                                <PhoneIcon className="h-5 icon" />
                            </div>
                            <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                                <CogIcon className="h-5 icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#36393f] flex-grow">
                    <Chat />
                </div>
            </div>
        </>
    );
}

export default Home;