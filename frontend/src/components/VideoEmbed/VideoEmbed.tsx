import { useState } from "react";
import styles from "./VideoEmbed.module.css";
import type { VideoEmbedProps } from "./VideoEmbed.types.ts";

const VideoEmbed = ({ videoId, start, title, thumbnail, caption, className }: VideoEmbedProps) => {
    const [playing, setPlaying] = useState(false);
    const params = new URLSearchParams({ autoplay: "1", rel: "0" });
    if (start) params.set("start", String(start));

    return (
        <figure className={[styles.video, className].filter(Boolean).join(" ")}>
            <div className={styles.player}>
                {playing ? (
                    <iframe
                        className={styles.frame}
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}`}
                        title={title}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
                    />
                ) : (
                    <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
                        <img className={styles.thumbnail} src={thumbnail} alt="" />
                        <span className={styles.play} aria-hidden="true">
                            <span className="material-symbols-rounded">play_arrow</span>
                        </span>
                        <span className={styles.badge} aria-hidden="true">
                            <span className="material-symbols-rounded">smart_display</span>
                            YouTube
                        </span>
                    </button>
                )}
            </div>
            {caption && (
                <figcaption className={styles.caption}>
                    <span className="material-symbols-rounded" aria-hidden="true">
                        play_circle
                    </span>
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default VideoEmbed;
