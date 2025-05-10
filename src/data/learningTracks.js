// src/data/learningTracks.js
const tracks = [
  {
    level: "Absolute Beginner (Under 1000 Elo)",
    description: "Learn the rules, how pieces move, basic checkmates, and fundamental tactical motifs like forks and pins. Start playing full games!",
    icon: "FaBaby",
    resources: [
      { type: "Platform", title: "Lichess Learn - Chess Basics", link: "https://lichess.org/learn#/", details: "Interactive lessons on piece movement and rules." },
      { type: "Platform", title: "Chess.com - New To Chess?", link: "https://www.chess.com/learn-how-to-play-chess", details: "Comprehensive guide for new players." },
      { type: "Video", title: "GothamChess - How to Play Chess | Absolute Beginner's Guide", link: "https://www.youtube.com/watch?v=OCSbzArwB10", details: "Engaging video tutorial." },
      { type: "Book", title: "Bobby Fischer Teaches Chess by Bobby Fischer", link: "https://www.amazon.com/Bobby-Fischer-Teaches-Chess/dp/0553263153", details: "Programmed learning classic, good for checkmates." },
      { type: "Practice", title: "Lichess Puzzles - Mate in 1", link: "https://lichess.org/training/mateIn1", details: "Practice basic checkmating patterns." }
    ]
  },
  {
    level: "Novice Player (1000-1400 Elo)",
    description: "Focus on opening principles (control center, develop pieces, king safety), common tactical patterns, basic endgame concepts (king opposition, rook endgames), and analyzing your own games.",
    icon: "FaChild",
    resources: [
      { type: "Book", title: "Logical Chess: Move by Move by Irving Chernev", link: "https://www.amazon.com/Logical-Chess-Move-Irving-Chernev/dp/0713484640", details: "Explains the reasoning behind every move in master games." },
      { type: "Course", title: "Chessable - Smithy's Opening Fundamentals", link: "https://www.chessable.com/smithys-opening-fundamentals/course/2Fundamentals/", details: "Free course on opening principles." },
      { type: "Video", title: "ChessBrah - Habits Series (Climbing the Rating Ladder)", link: "https://www.youtube.com/playlist?list=PL8N8j2e7RpPnpqbISqi1SJ9_wrnNU3rEm", details: "Focuses on good habits for different rating levels." },
      { type: "Practice", title: "Chess.com Puzzles", link: "https://www.chess.com/puzzles", details: "Wide range of tactical puzzles." },
      { type: "Article", title: "Lichess Study - Basic Endgames", link: "https://lichess.org/study/series/basic-endgames/y033nEwV", details: "Learn key endgame positions." }
    ]
  },
  {
    level: "Intermediate Player (1400-1800 Elo)",
    description: "Develop a consistent opening repertoire, deepen tactical understanding (combinations, sacrifices), study positional chess (pawn structures, piece activity), and more complex endgames.",
    icon: "FaUserGraduate",
    resources: [
      { type: "Book", title: "My System by Aron Nimzowitsch", link: "https://www.amazon.com/My-System-Aron-Nimzowitsch/dp/1880673851", details: "A classic on positional chess." },
      { type: "Book", title: "Silman's Complete Endgame Course by Jeremy Silman", link: "https://www.amazon.com/Silmans-Complete-Endgame-Course-Beginner/dp/1890085103", details: "Endgame study structured by rating level." },
      { type: "Platform", title: "ChessTempo - Tactics Training", link: "https://chesstempo.com/chess-tactics.html", details: "Advanced tactics training with ratings." },
      { type: "Video", title: "Daniel Naroditsky Speedruns", link: "https://www.youtube.com/playlist?list=PLT1F2nOxLHOcmi_n3T21A7f-sDCYd9_53", details: "Watch a GM explain thought processes in real-time." }, // Corrected the link and details
      { type: "Course", title: "Chessable - 100 Endgames You Must Know by Jesus de la Villa", link: "https://www.chessable.com/100-endgames-you-must-know/course/5193/", details: "Essential endgame knowledge." }
    ] // Added closing brace and comma
  },
  {
    level: "Advanced Player (1800-2200 Elo)",
    description: "Master advanced strategic concepts, complex middlegame planning, deep opening theory, and sophisticated endgame technique. Focus on tournament preparation and psychological aspects.",
    icon: "FaChessKnight",
    resources: [
      { type: "Book", title: "Dvoretsky's Endgame Manual by Mark Dvoretsky", link: "https://www.amazon.com/Dvoretskys-Endgame-Manual-Mark-Dvoretsky/dp/1949859182", details: "The definitive endgame guide for strong players." },
      { type: "Book", title: "Understanding Chess Middlegames by John Nunn", link: "https://www.amazon.com/Understanding-Chess-Middlegames-John-Nunn/dp/1906454272", details: "Explains key middlegame structures and plans." },
      { type: "Video", title: "Saint Louis Chess Club Lectures", link: "https://www.youtube.com/user/STLChessClub/playlists", details: "High-level lectures by GMs and IMs." },
      { type: "Database", title: "ChessBase or Lichess Opening Explorer", link: "https://lichess.org/opening", details: "Explore opening variations and statistics." },
      { type: "Platform", title: "Aimchess Training", link: "https://aimchess.com/", details: "AI-powered personalized training." }
    ]
  },
  {
    level: "Expert / Aspiring Professional (2200+ Elo)",
    description: "Refine all aspects of your game, work with a coach, build a professional opening repertoire, compete in strong tournaments, and strive for FIDE titles (FM, IM, GM).",
    icon: "FaCrown",
    resources: [
      { type: "Coaching", title: "Find a FIDE Certified Trainer", link: "https://ratings.fide.com/fide_arbiters_trainers.phtml?title=FT", details: "Work with qualified coaches for personalized improvement." },
      { type: "Book", title: "Grandmaster Preparation Series by Jacob Aagaard", link: "https://www.qualitychess.co.uk/docs/14/grandmaster_preparation_series/", details: "Challenging books for serious improvement." },
      { type: "Software", title: "ChessBase 17 / Fritz", link: "https://en.chessbase.com/", details: "Professional database and analysis software." },
      { type: "Tournament", title: "FIDE Calendar", link: "https://www.fide.com/calendar", details: "Find international tournaments to gain norms and experience." },
      { type: "Resource", title: "FIDE Handbook - Title Regulations", link: "https://handbook.fide.com/chapter/B01RegulationsForTitles", details: "Understand the requirements for FIDE titles." }
    ]
  }
];

export default tracks;