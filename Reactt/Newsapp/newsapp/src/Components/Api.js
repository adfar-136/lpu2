const articles = [
  {
    status: "ok",
    totalResults: 35,
    articles: [
      {
        source: { id: null, name: "Euronews" },
        author: null,
        title:
          "Ukraine corruption scandal: US promises 'rigorous monitoring' of aid - Euronews",
        description:
          "But Washington says it has no evidence American assistance has been diverted.",
        url: "https://www.euronews.com/2023/01/24/ukraine-corruption-scandal-string-of-officials-resign-in-kyiv",
        urlToImage:
          "https://static.euronews.com/articles/stories/07/33/26/66/1000x563_cmsv2_c93afc52-4473-5d24-93c2-9f30dc915d84-7332666.jpg",
        publishedAt: "2023-01-25T07:41:15Z",
        content:
          "The United States vowed to tightly monitor how Ukraine spends billions of dollars of aid on Tuesday, following a damaging corruption scandal that led to a string of resignations in Kyiv. \r\nWhile Wash… [+3289 chars]",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Nouran Salahieh, Stella Chan, Eric Levenson",
        title:
          "11 victims of Monterey Park mass shooting ranged in age from 57 to 76 years old, coroner says - CNN",
        description:
          "As investigators work to determine a motive in the mass shooting that killed 11 people and injured nine others at a dance studio in Monterey Park, California, the community now faces a long road to recovery, mayor said.",
        url: "https://www.cnn.com/2023/01/24/us/monterey-park-california-mass-shooting-tuesday/index.html",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/230124153647-01-monterey-park-vigil.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2023-01-25T06:39:00Z",
        content:
          "All 11 victims of the mass shooting at a dance studio on Lunar New Year in Monterey Park, California, were between the ages of 57 and 76, the LA County Coroner Medical Examiners Office said in a stat… [+8233 chars]",
      },
      {
        source: { id: "the-washington-post", name: "The Washington Post" },
        author: "Mariana Alfaro, Marianna Sotomayor",
        title:
          "McCarthy blocks Democrats Schiff, Swalwell from intelligence committee - The Washington Post",
        description:
          "« Hakeem Jeffries has 200 other people who can serve on that committee, » House Speaker Kevin McCarthy said after noting that the move wasn't « political. »",
        url: "https://www.washingtonpost.com/politics/2023/01/24/mccarthy-will-block-democrats-schiff-eric-swalwell-intelligence-committee/",
        urlToImage:
          "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/01-25-2023/t_2c85c75e311a4c9fa9034243a3df4c97_name_ECHERBLLC23NG2FX4TMVI7A6UQ_scaled.jpg&w=1440",
        publishedAt: "2023-01-25T03:47:00Z",
        content:
          "Comment on this story\r\nHouse Speaker Kevin McCarthy (R-Calif.) said Tuesday he will block Reps. Adam B. Schiff and Eric Swalwell from serving on the House Intelligence Committee, days after House Min… [+3240 chars]",
      },
      {
        source: { id: "cbs-news", name: "CBS News" },
        author: null,
        title:
          'Justin Roiland dropped from "Rick and Morty" by Adult Swim following domestic violence charges - CBS News',
        description:
          "Justin Roiland co-created the animated sci-fi sitcom and has voiced its two title characters.",
        url: "https://www.cbsnews.com/news/justin-roiland-rick-and-morty-adult-swim-cuts-ties-following-domestic-violence-charges/",
        urlToImage:
          "https://assets2.cbsnewsstatic.com/hub/i/r/2023/01/25/c2fc696e-a2f3-480d-b3f3-b7deb5795055/thumbnail/1200x630/571f787772c5e3db1262a9da16d8dcf1/gettyimages-888461318.jpg",
        publishedAt: "2023-01-25T03:14:00Z",
        content:
          'Adult Swim has cut ties with Justin Roiland, the co-creator of the popular animated series "Rick and Morty," after he was charged with domestic violence earlier this month.\r\nAdult Swim has "ended its… [+1460 chars]',
      },
      {
        source: { id: null, name: "YouTube" },
        author: null,
        title: "LIVE | 5 More Hours of Snow to Go - 5NEWS",
        description:
          "Snow continues to come down tonight. Tap to see where the heaviest bands are located with the 5NEWS Weather Team, and see how much more you may get.",
        url: "https://www.youtube.com/watch?v=qzuaamgbi2g",
        urlToImage: "https://i.ytimg.com/vi/qzuaamgbi2g/hqdefault.jpg",
        publishedAt: "2023-01-25T02:39:20Z",
        content: null,
      },
      {
        source: { id: null, name: "YouTube" },
        author: null,
        title:
          "Riley Keough 'Grateful' to Have Final Time With Mom Lisa Marie Presley Memorialized - Entertainment Tonight",
        description:
          "Riley Keough reveals she's 'grateful' the last time she saw her mom, Lisa Marie Presley, before her untimely death was captured in a photograph. The 33-year-...",
        url: "https://www.youtube.com/watch?v=jb7t8ZYQ1gQ",
        urlToImage: "https://i.ytimg.com/vi/jb7t8ZYQ1gQ/maxresdefault.jpg",
        publishedAt: "2023-01-25T02:30:14Z",
        content: null,
      },
      {
        source: { id: "associated-press", name: "Associated Press" },
        author: "Jennifer Sinco Kelleher",
        title:
          "Hearing underway in effort to free Hawaii man for '91 murder - The Associated Press",
        description:
          "HONOLULU (AP) — A judge on Tuesday ordered a man released from prison immediately after his attorneys presented new evidence and argued that he didn’t commit the crimes he was convicted of and spent more than 20 years locked up for: the 1991 murder, kidnappin…",
        url: "https://apnews.com/e6d329d53227186c5f52e890a5d4a99c",
        urlToImage:
          "https://storage.googleapis.com/afs-prod/media/8a05f425a9c642199e06c50f1d5c6846/3000.webp",
        publishedAt: "2023-01-25T00:45:00Z",
        content:
          "HONOLULU (AP) A judge on Tuesday ordered a man released from prison immediately after his attorneys presented new evidence and argued that he didnt commit the crimes he was convicted of and spent mor… [+6834 chars]",
      },
      {
        source: { id: null, name: "The Athletic" },
        author: "Jay Morrison",
        title:
          "How the Bengals schemed Ja’Marr Chase to fluster the Bills - The Athletic",
        description:
          "The receiver is always a premium weapon, but where he showed up in formations created matchup issues for Buffalo.",
        url: "https://theathletic.com/4122347/2023/01/24/jamarr-chase-bengals-bills-zac-taylor/",
        urlToImage:
          "https://cdn.theathletic.com/app/uploads/2023/01/24183715/GettyImages-1458568635-1024x683.jpg",
        publishedAt: "2023-01-25T00:42:29Z",
        content:
          "CINCINNATI Standing at his locker last week, a few days removed from his teams 24-17 wild-card victory against the Ravens, Bengals wide receiver JaMarr Chase was lauding coach Zac Taylor for a game p… [+11221 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "These Republicans will serve on panels to probe COVID-19, ‘weaponization’ of government - The Hill",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMigAFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL2hvdXNlLzM4MjkxNDYtdGhlc2UtcmVwdWJsaWNhbnMtd2lsbC1zZXJ2ZS1vbi1wYW5lbHMtdG8tcHJvYmUtY292aWQtMTktd2VhcG9uaXphdGlvbi1vZi1nb3Zlcm5tZW50L9IBhAFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL2hvdXNlLzM4MjkxNDYtdGhlc2UtcmVwdWJsaWNhbnMtd2lsbC1zZXJ2ZS1vbi1wYW5lbHMtdG8tcHJvYmUtY292aWQtMTktd2VhcG9uaXphdGlvbi1vZi1nb3Zlcm5tZW50L2FtcC8?oc=5",
        urlToImage: null,
        publishedAt: "2023-01-25T00:19:00Z",
        content: null,
      },
      {
        source: { id: null, name: "BBC News" },
        author: "https://www.facebook.com/bbcnews",
        title: "Amazon strikes: Workers claim robots are treated better - BBC",
        description:
          "As Amazon's first ever UK strike gets under way, staff in Coventry tell the BBC why they are walking out.",
        url: "https://www.bbc.com/news/business-64384287",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/B3E1/production/_128394064_amazonworkers.jpg",
        publishedAt: "2023-01-25T00:00:42Z",
        content:
          "Amazon workers are staging the first ever UK strike against the online giant on Wednesday in a protest over pay.\r\nMembers of the GMB union are walking out at Amazon's Coventry warehouse over what the… [+6571 chars]",
      },
      {
        source: { id: "ars-technica", name: "Ars Technica" },
        author: "Beth Mole",
        title:
          "As egg prices soar, the deadliest bird flu outbreak in US history drags on - Ars Technica",
        description:
          "Risk to humans is low, but epidemiologists fear a future pandemic by such a flu.",
        url: "https://arstechnica.com/science/2023/01/as-egg-prices-soar-the-bloodiest-bird-flu-outbreak-in-us-history-drags-on/",
        urlToImage:
          "https://cdn.arstechnica.net/wp-content/uploads/2023/01/GettyImages-1237516676-760x380.jpeg",
        publishedAt: "2023-01-24T23:52:02Z",
        content:
          "Enlarge/ Chicken eggs are disposed of at a quarantined farm in Israel's northern Moshav (village) of Margaliot on January 3, 2022. \r\n29 with 0 posters participating\r\nThe ongoing bird flu outbreak in … [+4733 chars]",
      },
      {
        source: { id: null, name: "The Intercept" },
        author: "Murtaza Hussain, Ryan Grim",
        title:
          "Elon Musk Removes BBC Doc at Request of India PM Modi - The Intercept",
        description:
          "Officials from India’s ruling right-wing party said American tech companies like Twitter and YouTube complied with demands to remove the documentary.",
        url: "https://theintercept.com/2023/01/24/twitter-elon-musk-modi-india-bbc/",
        urlToImage:
          "https://theintercept.imgix.net/wp-uploads/sites/1/2023/01/GettyImages-1246273459-modi-BBC-elon.jpg?auto=compress%2Cformat&q=90&fit=crop&w=1200&h=800",
        publishedAt: "2023-01-24T23:51:00Z",
        content:
          "Twitter and YouTube\r\n censored a report critical of Indian Prime Minister Narendra Modi in coordination with the government of India. Officials called for the Big Tech companies to take action agains… [+7160 chars]",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "",
        title:
          "'I am the problem. It's me': Senators quote Taylor Swift during Ticketmaster hearing - CNN",
        description:
          "During a hearing on the live entertainment ticketing industry, senators and witnesses leaned heavily on Taylor Swift's lyrics to make their points. The hearing came about after Ticketmaster mishandled selling Swift's concert tickets in November.",
        url: "https://www.cnn.com/videos/business/2023/01/24/taylor-swift-ticketmaster-hearing-senators-quote-lyrics-contd-orig-ht.cnn-business",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/230124175057-taylor-swift-ticketmaster.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2023-01-24T23:43:29Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "BMW M3 CS (2024) - pictures, information & specs - NetCarShow.com",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMiKmh0dHBzOi8vd3d3Lm5ldGNhcnNob3cuY29tL2Jtdy8yMDI0LW0zX2NzL9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2023-01-24T23:35:21Z",
        content: null,
      },
      {
        source: { id: null, name: "Sports Illustrated" },
        author: "Nick Selbe",
        title:
          "Scott Rolen Elected to Baseball Hall of Fame in One-Player BBWAA Class - Sports Illustrated",
        description:
          "For the second consecutive year, the BBWAA elected just one player to the Hall of Fame.",
        url: "https://www.si.com/mlb/2023/01/24/scott-rolen-elected-2023-baseball-hall-of-fame-cooperstown",
        urlToImage:
          "https://www.si.com/.image/t_share/MTk1Mzk4NzcyODk1Nzg2NzQy/scott-rolen-1.jpg",
        publishedAt: "2023-01-24T23:29:22Z",
        content:
          "A year after electing just one player—David Ortiz—in the 2022 Baseball Hall of Fame class, the Baseball Writers’ Association of America has chosen just one player yet again.\r\nThird baseman Scott Role… [+1486 chars]",
      },
      {
        source: { id: null, name: "CBS Sports" },
        author: "",
        title:
          "Baseball Hall of Fame voting: 10 newcomers to the 2024 ballot, including Adrián Beltré and Joe Mauer - CBS Sports",
        description:
          "We know about the holdover candidates, but who is set to join them on the 2024 Hall of Fame ballot?",
        url: "https://www.cbssports.com/mlb/news/baseball-hall-of-fame-voting-10-newcomers-to-the-2024-ballot-including-adrian-beltre-and-joe-mauer/",
        urlToImage:
          "https://sportshub.cbsistatic.com/i/r/2023/01/21/3005028b-3605-489c-b6ba-1511344d2a24/thumbnail/1200x675/dd8be0489d56b223e50685e91901f9bc/beltre-getty.png",
        publishedAt: "2023-01-24T23:24:00Z",
        content:
          "The dust has settled on the 2023 Baseball Hall of Fame vote. With eyes on next season, we can already start working up the ballot. \r\nScott Rolen has gained induction into the Hall of Fame with 76.3 p… [+8337 chars]",
      },
      {
        source: { id: null, name: "East Idaho News" },
        author: "Kalama Hines, EastIdahoNews.com",
        title:
          "Fundraiser launched to help mother of boy killed in dog attack in Fort Hall - East Idaho News",
        description:
          "POCATELLO — A fundraiser has been launched supporting a woman who lost her son and was sent to the emergency room following a brutal dog attack Saturday. The GoFundMe was launched Monday afternoon by a friend of Emily Islas, one of two victims of the attack b…",
        url: "https://www.eastidahonews.com/2023/01/fundraiser-launched-to-help-mother-of-boy-killed-in-dog-attack-in-fort-hall/",
        urlToImage:
          "https://s3-us-west-2.amazonaws.com/assets.eastidahonews.com/wp-content/uploads/2023/01/Islas.jpg",
        publishedAt: "2023-01-24T23:16:00Z",
        content:
          "POCATELLO — A fundraiser has been launched supporting a woman who lost her son and was sent to the emergency room following a brutal dog attack Saturday. \r\nThe GoFundMe was launched Monday afternoon … [+1667 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "Senator calls for investigation into egg price gouging - The Hill",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMidWh0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5L2VxdWlsaWJyaXVtLXN1c3RhaW5hYmlsaXR5LzM4MjkwMzgtc2VuYXRvci1jYWxscy1mb3ItaW52ZXN0aWdhdGlvbi1pbnRvLWVnZy1wcmljZS1nb3VnaW5nL9IBeWh0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5L2VxdWlsaWJyaXVtLXN1c3RhaW5hYmlsaXR5LzM4MjkwMzgtc2VuYXRvci1jYWxscy1mb3ItaW52ZXN0aWdhdGlvbi1pbnRvLWVnZy1wcmljZS1nb3VnaW5nL2FtcC8?oc=5",
        urlToImage: null,
        publishedAt: "2023-01-24T22:52:00Z",
        content: null,
      },
      {
        source: { id: null, name: "YouTube" },
        author: null,
        title:
          "Microsoft earnings are 'better than feared' amid tech sector trends: Analyst - Yahoo Finance",
        description:
          "#Microsoft #Microsoftearnings #ChatGPTRBC Capital Markets Software Equity Analyst Rishi Jaluria joins Yahoo Finance Live anchors to break down Microsoft's la...",
        url: "https://www.youtube.com/watch?v=SH2E_5k2t-Q",
        urlToImage: "https://i.ytimg.com/vi/SH2E_5k2t-Q/maxresdefault.jpg",
        publishedAt: "2023-01-24T22:40:25Z",
        content: null,
      },
      {
        source: { id: null, name: "DW (English)" },
        author: "Deutsche Welle",
        title:
          "'Doomsday Clock' moves closer to midnight amid Ukraine war - DW (English)",
        description:
          'A group of scientists and security experts have moved their "Doomsday Clock" to 90 seconds to midnight, their most pessimistic prognosis yet. They published their statement in Russian and Ukrainian for the first time.',
        url: "https://www.dw.com/en/doomsday-clock-moves-closer-to-midnight-amid-ukraine-war/a-64503629",
        urlToImage: "https://static.dw.com/image/64503700_6.jpg",
        publishedAt: "2023-01-24T21:42:33Z",
        content:
          'The Bulletin of the Atomic Scientists on Tuesday set its symbolic "Doomsday Clock"\r\n closer to midnight than ever before, noting threats of nuclear war, disease and climate volatility had been exacer… [+5342 chars]',
      },
    ],
  },
];
