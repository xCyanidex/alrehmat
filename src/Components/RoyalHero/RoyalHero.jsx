const imageFiles = [
	"Al Rehmat Residencia (2)_page-0001.jpg",
	"Al Rehmat Residencia (2)_page-0002.jpg",
	"Al Rehmat Residencia (2)_page-0003.jpg",
	"Al Rehmat Residencia (2)_page-0004.jpg",
	"Al Rehmat Residencia (2)_page-0005.jpg",
	"Al Rehmat Residencia (2)_page-0006.jpg",
	"Al Rehmat Residencia (2)_page-0007.jpg",
	"Al Rehmat Residencia (2)_page-0008.jpg",
	"Al Rehmat Residencia (2)_page-0009.jpg",
	"Al Rehmat Residencia (2)_page-0010.jpg",
	"Al Rehmat Residencia (2)_page-0011.jpg",
	"Al Rehmat Residencia (2)_page-0012.jpg",
	"Al Rehmat Residencia (2)_page-0013.jpg",
	"Al Rehmat Residencia (2)_page-0014.jpg",
	"Al Rehmat Residencia (2)_page-0015.jpg",
	"Al Rehmat Residencia (2)_page-0016.jpg",
]

const RoyalHero = () => {
	return (
		<section className="w-full flex justify-center  md:pt-24 lg:pt-32 pt-[6rem]">
			<div className="container space-y-10 xl:space-y-16">
				<div className="flex flex-col items-center justify-evenly">
					{imageFiles.map((img, index) => (
						<div
							key={index}
							className="animate-fade-up animate-once animate-ease-in animate-fill-forwards"
						>
							<img
								src={`/royal/royalImages/${img}`}
								alt={`Royal Image ${index + 1}`}
								className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-scale-down"
							/>
						</div>
					))}
				</div>

				{/* <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div className="animate-fade-right animate-once animate-ease-in animate-fill-forwards">
            <h1
              style={{ color: "black" }}
              className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]"
            >
              Discover Your Dream Home at Our Luxurious Housing Scheme
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4 animate-fade-left animate-once animate-ease-in animate-fill-forwards">
            <p
              style={{ color: "black" }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            >
              Nestled in a prime location, our housing scheme offers a perfect
              blend of modern amenities and serene living. Explore our range of
              stunning homes and find your ideal sanctuary.
            </p>
            <ScrollLink
              style={{ backgroundColor: "#CBA664", color: "white" }}
              to="plot-section"
              smooth={true}
              duration={500}
              className=" cursor-pointer  hover:animate-wiggle-more hover:animate-infinite hover:animate-ease-in-out  inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  duration-300 "
            >
              Explore Plots
            </ScrollLink>
          </div>
        </div>
        <img
          src={royal1}
          width="1270"
          height="500"
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover animate-fade-up animate-once animate-ease-in animate-fill-forwards"
        /> */}
			</div>
		</section>
	)
}

export default RoyalHero
