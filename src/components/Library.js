import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, setIsPlaying, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <div className="head">
                <h2>Library</h2>
            </div>
            <div className="library-songs">
                {songs.map((song) => (<LibrarySong setSongs={setSongs} setIsPlaying={setIsPlaying} songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id} audioRef={audioRef} />))}
            </div>
        </div>
    )
}


export default Library;