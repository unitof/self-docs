---
title: How to Get a CryptoPunk and Lose It, and Feel Shame At All Ends
subtitle: 'A foray into the worlds of crypto wealth & theft'
---

Two weeks ago I got annoyed enough at Monotype for [Helvetica The NFT](https://www.monotype.com/NFT) that I joined a [Zoom lecture](https://lu.ma/75b2r30l) about it and watched Benjamin Jones, Charles Nix, and the ghost of Lance Wyman talk about designing motion graphics for nobody/anybody/The Chain/etc.

I am still not entirely sure what _The_ NFT is and I hope [Juan Villanueva](http://www.juankafka.com) is doing okay. At the end we were slipped a link to [freenft.knownunknown.com](https://freenft.knownunknown.com), where on and off Amtrak WiFi I wrestled with switching networks, wrapping ETH, exchaning wrapped ETH for whatever MATIC is, on whatever Polygon wants to be, and somehow ended up with [four](https://opensea.io/assets/matic/0xd93a0cd586ea702fab8c98723efccbd403c15c0e/0). If you want one let me know.

In the wrestling I unearthed a long-forgotten wallet with a private key I thought I'd long ago lost. I happily regained access to [some CryptoKitties I thought were stuck in the Ether since 2017](https://www.cryptokitties.co/profile/0x5b68ee14964c2dddd36e5471f02008008876a3d0), and scrolling down was surprised to find I owned [CryptoPunk #1484](https://cryptopunks.app/cryptopunks/details/1484).

On March 9, 2019 at 05:31:39 PM UTC, a time when most were blessed with not having opinions on the fungibility of tokens and I remember being vaguely FOMO-type curious, I put in a lowball bid of `0.05 ETH` for the cheapest and most boring Punk I could find with a mustache like my own, and promptly forgot all about it.

Looking at my calendar and photo library, it must have been from my apartment—two hours later I have photos from walk I remember taking uptown, where I found an uncashed $2,000 check on the sidewalk around 23rd St. I voided it and mailed to the bearer's address, who a week later anonymously sent one of those wine & cheese gift baskets by mail. Zero-trust in the corporeal world.

❦

Every crypto crash & resurge in the past I hit at the exact wrong time. Starting the day after BTC hit $1,000 on a Black Friday while I was in high school I set an auto-buy for $1 USD worth of Bitcoin every day. I sold the 2.TK BTC it'd saved in March 2016 for $TK to pay a past-due tuition bill.

Since circa Super Bowl 2021 have been especially suspicious how eagerly those who have gotten or expect their returns in this universe now are bent on convincing every cool suburban dad in the country to join in, never promising but certainly implying that somehow everybody who touches this stuff is all going to "make it." Zero-trust, decentralized, self-balanced, but trust our product, use our platform, and don't worry if you don't understand how it works.

❦

Nine months, a new laptop, uninstalled wallets, and buried passphrases later, my bid was apparently accepted [on Dececember 28, 2019](https://cryptopunks.app/cryptopunks/details/1484). In raw crypto contracts—and this is the genuinely fascinating and cool thing about this world—there are no accounts, no customer service, no notifications. Some anonymous miner moved a few bits that associated `punkIndex 1484` with my address, and like many things in this world, I did the best possible thing by not knowing nor noticing nor touching it for 3 years.

Until I noticed it in my wallet on the Amtrak, September 2022.

I felt dissonant for having timed something so perfectly in this world I am also suspicious of, felt icky for suddenly having something worth lifechanging amounts of money I didn't exactly earn, felt pride for getting into something early and timing my forgetfulness just right, felt lucky, felt excited to maybe actually buy a home.

I knew enough to know even the least "rare" punks were selling around $80,000 USD, and that I wanted some help from trusted others to sell smartly. I told three people, started preparing to sell, and planning for smart money handling. Two weeks later, I was tricked into giving CryptoPunk #1484 away for free.

I feel terrible for being so easily fooled, and for letting down the few people who knew about my lucky break, and were helping me figure out what to do with it. Despise me for naively having this thing, despise me for naively losing it, here is the story.

## The Scam

If you have an account on opensea.io, you often get weird assets transferred to you for free. Especially if you own something valuable. Some of these are probably artists looking for attention. Most are scams. Here was the one that got me:

1. [500 identical "MeeKicks" NFT assets](https://opensea.io/collection/the-green-meekicks-collectors-item) (designed to trick users into thinking they were a unique edition of 20,000) were minted on OpenSea.io by the address [`0xD46b47843B59b818d134Ceeb849D8C7c8456CceE`](https://etherscan.io/address/0xD46b47843B59b818d134Ceeb849D8C7c8456CceE).

2. Editions of those NFTs were transferred to wallets of users holding valuable NFT assets, [such as my my own](https://opensea.io/assets/ethereum/0xf4dc041f22c4d34a2f94653c9613949922ca6c4b/47).

3. [Increasing offers](https://opensea.io/assets/ethereum/0xf4dc041f22c4d34a2f94653c9613949922ca6c4b/47) were made via OpenSea.io from the address `0x5C73679641cc7a8f7d9EE70F167bae97772f6996`.

   It's unclear to me if any of these offers would even go through if accepted. When I tried to accept any of them, I get an "Missing or invalid parameters" due to something misconfigured gas limits, according to console logs. The offers may be designed to cause errors like this.

4. The offers (as designed) got my attention and I looked into what the "MeeKicks" asset was, which had a description prominently linking to the URL **meekicks.app**. (NOTE: tread carefully, do not connect any wallet.)

5. That website had a "connect wallet" button. I clicked it thinking it couldn't do any harm without me seeing what it was about to do. When I clicked it it asked me to approve a gas limit, which I knew was suspicious, but it did not occur to me that might be doing something with _another asset entirely_. Mistaken thinking: DNS domain scoping has nothing to do with contract approval.

6. I set a very low gas limit thinking this would be somehow safer, and approved. This is where I tripped. Of course, I had approved a transaction crafted specifically to transfer CryptoPunk #1484 to the scammer.

7. A few hours later, the transaction was approved, and my asset was [transferred to `0x113a78fb02e67875f781b5b4427730dd7c70ae2d`](https://etherscan.io/tx/0x8b6689272ff38e7229bda52115d4968d2d0026d151b284f7f54cd50f98d01a57)

8. I quickly reached out to OpenSea to mark the asset stolen so it would be less likely to be resold, and around 4:00pm Eastern [they did](https://opensea.io/assets/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1484), giving me 7 days to submit a police report in order to keep the warning permanently.

9. 5 hours later, Punk #1484 was [transferred to `0x1871b1d732b65d0ae0aa3a10045e90eecfd66955`](https://etherscan.io/tx/0xc650dbb9395f9c889a94eb194d3575ddf99dce0c28771f6fb82f90bbe428899d).

10. 30 minutes later, it was [sold for 240 ETH (approx. $327,835.20 USD at the time) to `0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685`](https://etherscan.io/tx/0xae95f082a133d7d13c05784f37500428fb8f04226904813fae1b69cfda8da2e5), an address associated with:

    - the ENS domain [`PunksOTH.eth`](https://app.ens.domains/name/punksotc.eth/details)
    - the Twitter account [@punksotc](https://twitter.com/punksotc)
    - the Discord username `punksOTC#4941`
    - the [OpenSea profile punksOTC](https://opensea.io/punksOTC)

11. I've filed two FBI IC3 reports and filed an intake call with the NYC FBI field office, to see if this might qualify as art theft. Fun call, feel silly. We'll see. OpenSea accepted the reports as a police report and the flag on CryptoPunk #1484 is now permanent until it is reclaimed, or I rescind my report.

12. I found [at least two victims of the same scam](https://etherscan.io/token/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb?a=0x113a78fb02e67875f781b5b4427730dd7c70ae2d):

    - [CryptoPunk #8800](https://cryptopunks.app/cryptopunks/details/8800) from [cryptokkie.eth](https://opensea.io/Cryptokkie.eth?tab=activity), with a [tweet](https://twitter.com/cryptokkie/status/1575124213379305475)
    - [CryptoPunk #5293](https://cryptopunks.app/cryptopunks/details/5293) from [knowndistance.eth](https://opensea.io/knowndistance.eth?tab=activity)

13. I DM'd PunksOTC on Twitter to let them know #1484 was stolen. No response.

This reluctant post is to disclose how these scams work. Not looking forward to whatever identities it grants me: despised for having this thing, despised for stupidly losing it.

This relucant post is to explain technically how these things work, and how they don't. Glad I experienced it firsthand.

Those designing this Web3 world: if you truly want it to grow, [be mindful of those less experienced than you](https://overcast.fm/+sEeWoNP1w/37:08).


## Proposed Fixes

1. Etherscan maintains what seems to me to be a pretty solid database of suspcious addresses. Wallets should query that and throw up warnings when transacting with one of them.

2. There must be some more user-friendly UI to present what a transaction payload is about to _do_. My guard was down because Brave Wallet said no ETH would be transferred, which falsely assured me nothing of value was being moved. I wish my wallet had told me what `0xf8aa2685035502296983030d4094b47e3cd837ddf8e4c57f05d70ab865de6e193bbb80b8448b72a2ec000000000000000000000000113a78fb02e67875f781b5b4427730dd7c70ae2d00000000000000000000000000000000000000000000000000000000000005cc25a0f74a48c7b037ef5a8f86aa49f88f7e9b8f27fedbc9a9dd9d329650da9ae9b97aa058a3bb7946a65508fbfbe9f9d8a90a8c2fd0bdf8962d4849788b755acabcbe5f` meant to my future.

3. Color-code transactions. Based on value, potential for hidden payloads, I don't know. But there are clearly ways to detect this stuff. If you want your guard rails off, you can turn them off.

4. I'm sure OpenSea can do more to auto-detect these types of fraudulent assets, transfers, and offers.


## Some Thoughts

An NFT is not an art genre. It's barely a medium. I guess it's sort of an editioning practice. What seems unique about NFTs over any other hyped-up art trend is a large subset of culture who didn't usually spend much time thinking about art markets suddenly have strong opinions. My guess is whatever you feel toward NFTs, you'll feel the same witnessing the actual trading floors of high-value tangible art. Go to a Phillips or Sotheby's auction; you can [just walk in](https://www.phillips.com/calendar). It's an odd experience.

Or the Armory Show, where I once saw a drunk museum buyer get scolded politely for walking into sculture, as the gallerist tried to figure out if her interaction made it more valuable or less, and if she was about to buy.

Crypto art, built on massively distributed systems where everyone processing your transactions is incentivized do exactly what you ask no matter how fraudulent the demand, feel a bit like a Sotheby's auction where if you grab the painting from the block you can keep it. Then again: I suppose if that happened I'd root for the new folk hero.


## Where Are They Now

[CryptoPunk #1484](https://cryptopunks.app/cryptopunks/details/1484) is still owned by [PunksOTC](https://cryptopunks.app/cryptopunks/accountinfo?account=0x0232d1083e970f0c78f56202b9a666b526fa379f), under the subdomain [`2.punksotc.eth`](https://app.ens.domains/name/2.punksotc.eth/details). They seem to be [lowering their asking price on a schedule](https://cryptopunks.app/cryptopunks/details/1484).

The primary lead on scammers' idenity is probably the domain `meekicks.app`. WHOIS doesn't point to much beyond `registrar.eu` & OVH.

I'm okay. Ashamed and whiplashed but now have a wild story. For having been aware this before it became a cultural touchstone, for owning something worth more money than I've ever had, for losing it so clumsily, for letting down [the people](https://twitter.com/SamEwen/status/1577747247693021210) who were helping me, and who its sale may have helped.

I [made a collection](TK) to celebrate this all, for me and the other two MeeKicks scammees. Welcome to the club. I'll be hanging with the smokers outside the emergency exit, talking about other things.
