import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

const SearchYouTubeVideo = ({name}) => {

    const [videoId, setVideoId] = useState("");
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            const item = YoutubeSearch();
            console.log('ok');
        }
    }, []);

    const YoutubeSearch = async () => {
        const abortCtrl = new AbortController();
        const timeout = setTimeout(() => abortCtrl.abort(), 10000);
        let res;

        try {
            res = await axios.get(`https://www.googleapis.com/youtube/v3/search`,
                {
                    signal: abortCtrl.signal,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    params: {
                        part: "snippet",
                        q: name,
                        maxResults: 1,
                        type: "video",
                        key: "AIzaSyCp814viDX87DANnIYs8o2SsWwtwPxOMvY"
                    }
                });
            console.log(res);
        } catch {

        } finally {
            clearTimeout(timeout);
        }

        return res.data.items;
    }

    return (
        <></>
    );
}

export default SearchYouTubeVideo;
