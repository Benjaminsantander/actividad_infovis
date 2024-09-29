import yt_dlp

def downloader(link, nombre):
    ydl_opts = {
        'format': 'bestaudio',
        'outtmpl': nombre + ".mp3"
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([link])
    print('Download successful!')

downloader("https://www.youtube.com/watch?v=IaIc-7GPHlY&ab_channel=Haatchii", "Crying Lightning".replace(" ", "_"))
downloader("https://www.youtube.com/watch?v=bpOSxM0rNPM&ab_channel=OfficialArcticMonkeys", "Do I Wanna Know".replace(" ", "_"))
downloader("https://www.youtube.com/watch?v=CYpn8yUnX_c&ab_channel=ArcticMonkeys-Topic", "I Bet You Look Good On The Dancefloor".replace(" ", "_"))
downloader("https://www.youtube.com/watch?v=FY5CAz6S9kE&ab_channel=OfficialArcticMonkeys", "There’d Better Be A Mirrorball".replace(" ", "_"))
downloader("https://www.youtube.com/watch?v=zKJrrMIsghI&ab_channel=OfficialArcticMonkeys", "Four Out Of Five".replace(" ", "_"))
downloader("https://www.youtube.com/watch?v=h1vYbHHhqYE&ab_channel=OfficialArcticMonkeys", "Don't Sit Down 'Cause I've Moved Your Chair".replace(" ", "_"))
downloader("https://www.youtube.com/watch?v=uR3bNrIg9eE&ab_channel=JRust", "Brianstorm".replace(" ", "_"))

