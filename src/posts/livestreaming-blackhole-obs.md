---
layout: post
title: How to livestream a presentation with screen sharing and audio sharing 
excerpt: "with a Mac Book Air M1 in 2023 using OBS and Blackhole"
date: 2023-03-16
tags:
  - post
  - how-to

---

A brief overview of how to operate a live-stream in the year 2023 as noted in running [Full Stack DFW](https://www.fullstackdfw.com).


### Mix video with picture in picture
Yes, you would use [Twitch Studio](https://www.twitch.tv/broadcast/studio).  But why stop there.  

We use [OBS - Open Broadcast Software](https://obsproject.com/) for more control

Steps

- Install OBS
- Add a camera capture and a screen capture
- Start a virtual camera
- Setup a camera with circle mask
- Explore plugins
- Record

```bash
brew install obs
```

De-sign and resign, then restart your system to get the virtual camera to appear in Discord

See the compatibility guide here
https://obsproject.com/wiki/MacOS-Virtual-Camera-Compatibility-Guide

I gave up on zoom and follow for now.  Instead I use native zooming in OS X with my mouse.  But there are lots of fun scripts.

- See `Tools` > `Scripts`
- on Zoom and Track with Python https://www.youtube.com/watch?v=OUyPpol0yYo
- Lua Scripts https://github.com/rse/obs-scripts
- Hot Key https://github.com/SimonGZ/OBS-next-scene-hotkey
- Spotify Display https://github.com/RayPS/obs-spotify-mac


### Mix system audio for music and more
Bluetooth headsets are all fun and great until you learn about sample rates.

We use [blackhole](https://github.com/ExistentialAudio/BlackHole) (rip soundflower).  This always trips me up more than the video issues. Sample rates among other reasons.

Steps

- Install
```bash
brew install blackhole-16ch
```
- Route any app audio you want to Blackhole. Route any mics through an app to Blackhole (i.e. GarageBand, VCV Rack, Discord)
- In Sound settings, setup a Multi Device Output to allow monitoring.
![livestream audio 2](/livestream_audio_2.png)
- Setup an Aggregate Device input
![livestream audio 1](/livestream_audio_1.png)
- Set Aggregate Device as input and Multi-Output Device as ouput in any app you like (i.e. Discord, OBS)
![livestream audio 3](/livestream_audio_3.png)



### How to speak, i.e. what makes for a good talk

If you have an idle moment and you haven't seen it, you might enjoy Patrick Winston at MIT and his lecture on how to speak.  It was a pleasure to watch while working on my Legigram talk.

https://www.youtube.com/watch?v=Unzc731iCUY

Oh – and now I know he has a related book to follow up on this lecture – the piles grow.


### Slide formats

We don't have a standardized template.  I prefer using Marp but my co-host James has been converting me to Slidev (in part because it makes it easier to get picture-in-picture going – no OBS necessary if I remember correctly).

- https://marp.app/
- https://sli.dev/

We like PDFs for archiving.
