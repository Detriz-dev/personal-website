/** Click-to-play YouTube embed: shows a local thumbnail, loads the player (youtube-nocookie) only after a click. */
export type VideoEmbedProps = {
    /** YouTube video id, e.g. "0dfB1SiJtPY". */
    videoId: string;
    /** Start time in seconds. */
    start?: number;
    /** Video title; used for the play button label and the iframe title. */
    title: string;
    /** Local thumbnail URL (no request to YouTube before the click). */
    thumbnail: string;
    /** Caption under the video, e.g. title and source. */
    caption?: string;
    className?: string;
};
