import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    channelId: null,
    channelName: null
}

export const channelSlice = createSlice({
    name: "channel",
    intialState,
    reducers: {
        setChannelInfo: (state, action) => {

        }
    }
}
);