import { Link } from 'react-router-dom';
import './VideoListing.css';

export default function VideoListing({ video }) {
    const videoId = video.id.toString(); // Convert video.id to a string

    return (
        <article className="video">
            <Link to={`/videoShow/${videoId}`}>
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            </Link>
                <h3 className="title">{video.snippet.title}</h3>
            <p className="description">{video.snippet.title}</p>
        </article>
    );
}