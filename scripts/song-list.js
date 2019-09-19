{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-numer">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${player.prettyTime(song.duration)}</td>
      </tr>
      `);

    song.element.on('click', event => {
      helper.playPauseAndUpdate(song);
      $('button#play-pause').attr('playState', player.playState);
    });

      $('#song-list').append(song.element); //this wraps the css element and applies it to the table
  });
}
