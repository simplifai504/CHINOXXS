import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Star,
  Heart,
  ChevronRight,
  MessageSquare,
} from "lucide-react"
import ChatBox from "@/components/ChatBox"
import VideoMedia from "@/components/VideoMedia"
import Link from "next/link"
import { MemeCarousel } from "@/components/meme-carousel"

const characters = [
  {
    index: 1,
    name: "Peter Lynch"
  },
  {
    index: 2,
    name: "Jerome Powell"
  },
  {
    index: 3,
    name: "George Soros"
  },
]

const buttons = [
  {
    text: "Index Rings",
    prev: "Zoom Out",
    next: "Zoom In"
  },
  {
    text: "Insider Leak Circle",
    prev: "Front Run",
    next: "Exit Pump"
  },
  {
    text: "Meme ETF Syndicate",
    prev: "Ape In",
    next: "Take Profit"
  },
]

export default function Home() {



  return (
    <div className="min-h-screen bg-[#0a0a14] text-[#c8e3ff] font-pixel overflow-x-hidden">
      {/* Background pattern overlay */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0000ff 0px, #0000ff 2px, transparent 2px, transparent 16px), repeating-linear-gradient(135deg, #0000ff 0px, #0000ff 2px, transparent 2px, transparent 16px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main container */}
      <div className="w-full grid grid-cols-5 relative z-10 ">
        <div className="flex flex-col gap-4 ml-2">
          <div className="flex w-full">
            <img className="w-1/2" src="./memes/1.gif" alt="" />
            <img className="w-1/2" src="./memes/3.png" alt="" />
          </div>
          <img src="./memes/2.png" alt="" />
          <img className="w-full" src="./memes/5.jpeg" alt="" />
          <img src="./memes/4.png" alt="" />
          <img src="./memes/6.png" alt="" />
          {/* <img className="w-full" src="./memes/7.jpeg" alt="" /> */}
          <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md relative overflow-hidden">
            <h2 className="text-sm bg-gradient-to-r from-[#000066] to-[#0033cc] p-3">NSDΞX — The People’s Nasdaq</h2>
            <div className="p-3 text-xs">
              <p>
                You were born into debt, raised on inflation, and priced out of the dream. NSDΞX is the counterspell.NSDΞX is a corrupted ticker in the Nasdaq mainframe.
              </p>
            </div>
            <video controls>
              <source src="./video-2.mp4" />
            </video>
          </div>
        </div>
        <div className="col-span-3 w-full px-2">
          {/* Header Banner */}
          <header className="mt-4 mb-6 relative">
            <div className="relative h-40 sm:h-48 md:h-56 bg-[url('/banner.png')] bg-cover bg-center rounded-md overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'url("/placeholder.svg?height=200&width=200")',
                  backgroundSize: "100px 100px",
                }}
              ></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                {/* <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_5px_#00ccff] tracking-wider">
                CYBER NOSTALGIA
              </h1> */}
                <div className="flex justify-center mt-2 space-x-2">
                  <Sparkles className="h-5 w-5 text-[#00ccff] animate-pulse" />
                  <Star className="h-5 w-5 text-[#ffcc00] animate-pulse" />
                  <Sparkles className="h-5 w-5 text-[#00ccff] animate-pulse" />
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 h-8 w-8 border-t-2 border-l-2 border-[#99ccff]"></div>
              <div className="absolute top-2 right-2 h-8 w-8 border-t-2 border-r-2 border-[#99ccff]"></div>
              <div className="absolute bottom-2 left-2 h-8 w-8 border-b-2 border-l-2 border-[#99ccff]"></div>
              <div className="absolute bottom-2 right-2 h-8 w-8 border-b-2 border-r-2 border-[#99ccff]"></div>
            </div>

            {/* Marquee text below banner */}
            <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md mt-2 py-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-[#33ccff] mx-4">★彡 Welcome to my cyber realm! 彡★</span>
                <span className="text-[#ff99cc] mx-4">★彡 Last updated: 06/10/2025 彡★</span>
                <span className="text-[#33ccff] mx-4">★彡 Best viewed in 800x600 彡★</span>
                <span className="text-[#ff99cc] mx-4">★彡 Sign my guestbook! 彡★</span>
                <span className="text-[#ff99cc] mx-4">FYWFZEqVSETeYi2MZKehJqBd5N1p688PZsUnq6Fspump</span>

              </div>
            </div>
          </header>

          {/* Main 3-column layout */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-4">
              {/* Navigation Menu */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-3 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">Navigation</span>
                </div>
                <div className="mt-6 space-y-2">
                  {["about", "blog", "sources", "archive"].map((item) => (
                    <Button
                      key={item}
                      variant="outline"
                      className="w-full bg-[#000044] border-[#3366cc] hover:bg-[#0033aa] text-[#99ccff] justify-start group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-[#33ccff] group-hover:text-white" />
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Button>
                  ))}
                </div>

                {/* Decorative lace border */}
                <div className="absolute -bottom-3 left-0 right-0 h-3 overflow-hidden">
                  <div
                    className="w-full h-6 bg-[#3366cc]"
                    style={{
                      maskImage: "radial-gradient(circle at 6px 3px, transparent 5px, #fff 6px)",
                      maskSize: "12px 6px",
                      maskRepeat: "repeat-x",
                    }}
                  ></div>
                </div>
              </div>

              {/* Status Box */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-3 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">Status</span>
                </div>
                <div className="mt-6 space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span>Blocks Parsed:</span>
                    <span className="text-[#33ccff]">690,069</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Nodes:</span>
                    <span className="text-[#33ccff]">1 (you) </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sentiment:</span>
                    <span className="text-[#ff99cc]">Dangerously Long</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Now playing:</span>
                    <span className="text-[#33ccff]">Vitalik&apos;s Lullaby (remixed by Sam Bankrun)</span>
                  </div>
                </div>
              </div>

              {/* Pixel Doll */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-3 flex flex-col items-center gap-4">
                <div className="text-center text-xs font-bold text-[#ff99cc]">Make memes, not war</div>
                <div className="bg-[#000044] border border-[#3366cc] relative">
                  {/* This would be a pixel doll image */}
                    <MemeCarousel />
                </div>
                <Link href='/meme-gen' className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[16px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground rounded-md h-10 px-4 py-0 text-[#ff99cc] bg-[#000066] border-[#3366cc] hover:bg-[#0033aa]">Let’s meme!</Link>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 space-y-4">
              {/* Welcome Section */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-4 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">✦ Welcome to the NSDΞX Nexus ✦</span>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-[#99ccff]">
                    You’ve just logged into a lost corner of the market. <br /> <br />
                    NSDΞX isn’t just an index. It’s a signal.
                    It doesn’t track coins — it tracks conviction.
                    Scroll through the data,  and see if you can piece together what really happened. <br /> <br />
                    This might be your last sync with the index Solana tried to forget.
                  </p>

                  {/* ASCII Art Box */}
                  <div className="bg-[#000044] border border-[#3366cc] p-2 font-mono text-xs text-[#33ccff] whitespace-pre overflow-x-auto">
                    {`  /\\_/\\  
 ( o.o ) 
  > ^ <  
 Cyber Cat
 says hi!`}
 <p className="text-xl">FYWFZEqVSETeYi2MZKehJqBd5N1p688PZsUnq6Fspump</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["y2k", "cyber", "nostalgic", "pixel art", "anime"].map((tag) => (
                      <Badge key={tag} className="bg-[#0033aa] text-[#99ccff] hover:bg-[#0044cc]">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Updates Section */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-4 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">Latest Updates</span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { date: "06/10/2025", title: "🔺NSDΞX surpasses 9999 as traders enter “fully delusional” phase, analysts celebrate by minting JPEGs" },
                    { date: "06/09/2025", title: "📉Volatility Angel spotted mid-dump on Solana. Market halts for 6 blocks in silence." },
                    { date: "06/08/2025", title: '🌕New prophecy leaked: “Ξ will align with 42069 before next CPI print.” Federal Reserve refuses to comment.' },
                  ].map((update, idx) => (
                    <div key={idx} className="flex gap-2">
                      <div className="text-[#ff99cc] text-xs">[{update.date}]</div>
                      <div className="text-[#99ccff]">{update.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Character Illustrations */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-4 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">Best Traders</span>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {
                    characters.map((c, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-[#000044] border border-[#3366cc] relative">
                          <Image
                            src={`./character/${c.index}.png`}
                            alt={`Character ${i}`}
                            width={100}
                            height={100}
                            className="pixelated"
                          />
                        </div>

                        <div className="mt-1 text-center text-xs text-[#ff99cc]"> {c.name} </div>
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* Styled Text Box */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-4 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">About Me</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="bg-[#000044] border border-[#3366cc] p-3 text-[#99ccff] relative">
                    <p>
                      I'm just a fucking dude on the trenches with a soft spot for financial myths and broken charts.
                      SPX6900 showed us that even indexes can lie. NSDΞX? It dreams in candlesticks.
                    </p>
                    <p className="mt-2">Ξ Tune in to the echoes of market depth.</p>

                    {/* Decorative corner elements */}
                    <div className="absolute top-1 left-1 h-4 w-4 border-t border-l border-[#99ccff]"></div>
                    <div className="absolute top-1 right-1 h-4 w-4 border-t border-r border-[#99ccff]"></div>
                    <div className="absolute bottom-1 left-1 h-4 w-4 border-b border-l border-[#99ccff]"></div>
                    <div className="absolute bottom-1 right-1 h-4 w-4 border-b border-r border-[#99ccff]"></div>
                  </div>
                </div>
              </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-4">
              {/* User Profile Card */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-3 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">Profile</span>
                </div>
                <div className="mt-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#000044] border-2 border-[#3366cc] overflow-hidden flex items-center justify-center">
                    <img src="/profile.png" alt="" />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-[#ff99cc] font-bold">WarrenB69</div>
                    <div className="text-xs text-[#99ccff]">Level 88 Market Oracle</div>
                  </div>
                  <Separator className="my-2 bg-[#3366cc]" />
                  <div className="w-full text-xs space-y-1">
                    <div className="flex justify-between">
                      <span>
                        Joined:
                      </span>
                      <span className="text-[#33ccff]">08/30/1930</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        <MessageSquare className="inline h-3 w-3 mr-1" />
                        Posts:
                      </span>
                      <span className="text-[#33ccff]">51,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>
                        <Heart className="inline h-3 w-3 mr-1" />
                        Kudos:
                      </span>
                      <div className="text-[#33ccff]">infinite ∞</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Rings */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-3 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">Index Rings</span>
                </div>
                <div className="mt-6 space-y-2">
                  {buttons.map((ring, idx) => (
                    <div key={idx} className="bg-[#000044] border border-[#3366cc] p-2 text-center">
                      <div className="text-xs text-[#ff99cc] font-bold">{ring.text}</div>
                      <div className="flex justify-center gap-2 mt-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 px-2 py-0 text-[#99ccff] bg-[#000066] border-[#3366cc] hover:bg-[#0033aa]"
                        >
                          {ring.prev}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 px-2 py-0 text-[#99ccff] bg-[#000066] border-[#3366cc] hover:bg-[#0033aa]"
                        >
                          {ring.next}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Box */}
              <ChatBox></ChatBox>

              {/* Fanlistings */}
              <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md p-3 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#000066] to-[#0033cc] flex items-center px-2">
                  <span className="text-xs font-bold text-white">Fanlistings</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-[#000044] border border-[#3366cc] p-1 flex items-center justify-center">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Image
                          src={`/listing/${i}.png`}
                          alt={`Fanlisting ${i}`}
                          width={40}
                          height={40}
                          className="pixelated"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

        </div>
        <div className="flex flex-col gap-4">
          <video controls>
            <source src="./memes/8.mp4" />
          </video>
          <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md relative overflow-hidden">
            <h2 className="text-sm bg-gradient-to-r from-[#000066] to-[#0033cc] p-3">Elon Musk Crashes FOMC Meeting with a Green Candle NFT</h2>
            <div className="p-3 text-xs">
              <p>
                During a closed-door Federal Reserve meeting, Elon Musk burst in holding a golden USB stick and shouted:
                "This is the ultimate candle!" <br /> <br />
                The USB contained an animated NFT of a green candlestick extending infinitely, accompanied by a looping lo-fi Dogecoin beat. <br /> <br />
                Jerome Powell called for an emergency recess. Witnesses claim he was heard whispering, "This is… pure financial art." <br /> <br />
                The NFT is now trading on Solana for 69.69 $NSDΞX.
              </p>
            </div>
            <img src="./news/1.png" alt="" />
          </div>
          <div className="bg-[#000033] border-2 border-[#3366cc] rounded-md relative overflow-hidden">
            <h2 className="text-sm bg-gradient-to-r from-[#000066] to-[#0033cc] p-3">New Metric Shakes Wall Street: “Faith-to-Asset Ratio”</h2>
            <div className="p-3 text-xs">
              <p>
                A group of alternative analysts has launched the first-ever “Faith-to-Asset Ratio”, a metric that measures how much blind belief is holding up the price of an asset.
              </p>
            </div>
            <img src="./news/2.png" alt="" />
          </div>
        </div>
      </div>
      {/* Footer styled like PSP screen */}
      <VideoMedia></VideoMedia>
    </div>
  )
}
