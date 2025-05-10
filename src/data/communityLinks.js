// src/data/communityLinks.js
const communityLinks = [
  {
    name: "Chess.com Clubs & Forums",
    type: "Online Platform",
    link: "https://www.chess.com/clubs",
    description: "Join thousands of online clubs, participate in team matches, and discuss in active forums. The largest chess community online.",
    icon: "FaChess", // Placeholder for icon mapping
    tags: ["Forums", "Clubs", "Play Online", "News"]
  },
  {
    name: "Lichess Teams & Forum",
    type: "Online Platform",
    link: "https://lichess.org/team",
    description: "Create or join teams, participate in team battles, and engage in the Lichess forum. Free and open-source.",
    icon: "FaLiraSign",
    tags: ["Teams", "Forum", "Play Online", "Open Source"]
  },
  {
    name: "Reddit r/chess",
    type: "Online Forum",
    link: "https://www.reddit.com/r/chess/",
    description: "A large and active subreddit for chess news, discussions, memes, game analysis, and questions.",
    icon: "FaRedditAlien",
    tags: ["Discussion", "News", "Memes", "Q&A"]
  },
  {
    name: "Chess Stack Exchange",
    type: "Q&A Platform",
    link: "https://chess.stackexchange.com/",
    description: "A question and answer site for serious chess players, enthusiasts, and tournament participants. High-quality answers.",
    icon: "FaStackExchange",
    tags: ["Q&A", "Rules", "Theory", "Strategy"]
  },
  {
    name: "Twitch - Chess Directory",
    type: "Streaming Platform",
    link: "https://www.twitch.tv/directory/game/Chess",
    description: "Watch live streams from Grandmasters, International Masters, and popular chess entertainers. Interact via chat.",
    icon: "FaTwitch",
    tags: ["Live Streams", "Entertainment", "Education", "Pro Players"]
  },
  {
    name: "YouTube - Chess Channels",
    type: "Video Platform",
    link: "https://www.youtube.com/results?search_query=chess",
    description: "A vast resource for chess lessons, game analysis, tournament coverage, documentaries, and entertainment from countless creators.",
    icon: "FaYoutube",
    tags: ["Videos", "Lessons", "Analysis", "Documentaries"]
  },
  {
    name: "FIDE Online Arena",
    type: "Online Platform",
    link: "https://arena.myfide.net/",
    description: "The official FIDE platform for playing online rated games and earning FIDE Online Arena titles.",
    icon: "FaGlobeEurope", // Representing FIDE
    tags: ["Official FIDE", "Online Ratings", "Tournaments"]
  },
  {
    name: "Chessable Community",
    type: "Learning Platform",
    link: "https://www.chessable.com/discussion/", // General link, specific course forums exist
    description: "Discuss courses, share insights, and connect with authors and fellow learners on Chessable's platform.",
    icon: "FaBookReader",
    tags: ["Learning", "Courses", "Discussion"]
  },
  {
    name: "Local Chess Clubs (Search)",
    type: "Offline / Local",
    link: "https://www.google.com/search?q=local+chess+club+near+me", // Generic search link
    description: "Find over-the-board (OTB) chess clubs in your area for casual play, tournaments, and meeting local players. Use FIDE or national federation sites too.",
    icon: "FaMapMarkedAlt",
    tags: ["OTB Chess", "Local Clubs", "Tournaments"]
  },
  {
    name: "Discord Chess Servers (Search)",
    type: "Chat Platform",
    link: "https://disboard.org/servers/tag/chess", // Example Discord server listing
    description: "Join various Discord servers dedicated to chess for real-time chat, voice channels, game organization, and community.",
    icon: "FaDiscord",
    tags: ["Chat", "Real-time", "Community"]
  }
];

export default communityLinks;