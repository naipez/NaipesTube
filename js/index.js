const search = document.querySelector('#search')
const videos = document.querySelectorAll('.video-container .video')

search.addEventListener('input', e => {
    const { value } = e.currentTarget

    videos.forEach(video => {
        const name = video.querySelector('p').innerText

        if (!name.toLowerCase().includes(value.toLowerCase())) {
            if (!video.classList.contains('disabled')) video.classList.add('disabled')

            return
        }

        if (video.classList.contains('disabled')) video.classList.remove('disabled')
    })
})