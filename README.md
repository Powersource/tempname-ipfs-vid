# Tempname-ipfs-vid
Please send name suggestions. Please.

A completely decentralized alternative to e.g. YouTube and torrent sites, inspired by OpenBazaar

## Basic early tech
It's going to use electron, webpack, ipfs and ipns using js-ipfs, bittorrent (for "legacy" video) using probably webtorrent.

## Planned stages, rough order
- [ ] Implement a basic streaming video player for videos hosted on ipfs. Only top level videos so far.
- [ ] Also support bittorrent videos. Probably going to have to support finding the video file in the dir.
- [ ] Allow pinning of videos (so you can seed more than the one that is playing atm).
- [ ] Add ability to publish your list of pinned videos as a json file on your ipns address.
- [ ] Allow setting pinned videos as private, stopping them from being published.
- [ ] Allow seeing people's json as a pseudo-webpage, maybe markdown for the description.
- [ ] Let people pin/follow ipns addresses.
- [ ] The list of followed addresses should also be able to be published (including setting ones to private if you want).
- [ ] Ping peers to check if they have the json file, if so display them in a list of suggested "channels".
- [ ] Check addresses you follow and peers recursively to discover which videos are popular. (this is getting confusing, maybe draw it up)
- [ ] Probably some more that I forgot.

## Non-goals
- It shouldn't aim to be useful for listening to music, watching images or whatever else. Videos are relatively bulky but simple and don't require as many features as e.g. music players do. If this is a success I'll gladly start another project specifically made for music.