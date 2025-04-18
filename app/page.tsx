import Image from "next/image"
import Link from "next/link"
import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 md:px-6 lg:px-8 h-16 flex items-center">
        <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#4255ff] text-3xl font-bold">
              Quizlet
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <button className="flex items-center text-gray-700 font-medium px-2 py-1 hover:bg-gray-100 rounded">
                Study tools
                <ChevronDown className="ml-1 h-5 w-5" />
              </button>
              <button className="flex items-center text-gray-700 font-medium px-2 py-1 hover:bg-gray-100 rounded">
                Subjects
                <ChevronDown className="ml-1 h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for practice tests"
                className="w-full bg-gray-100 border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#4255ff] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center text-[#4255ff] font-medium">
              <Plus className="mr-1 h-5 w-5" />
              Create
            </button>
            <button className="bg-[#4255ff] text-white font-bold py-2 px-6 rounded-full hover:bg-[#3a4ce0]">
              Log in
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-12 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How do you want to study?</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Master whatever you're learning with Quizlet's interactive flashcards, practice tests, and study activities.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-[#4255ff] text-white font-bold py-3 px-8 rounded-full hover:bg-[#3a4ce0] text-lg">
              Sign up for free
            </button>
            <Link href="#" className="text-[#4255ff] font-medium hover:underline">
              I'm a teacher
            </Link>
          </div>
        </section>

        {/* Study Methods Cards - Carousel */}
        <section className="px-4 md:px-6 lg:px-8 mb-16 relative">
          <div className="max-w-[1280px] mx-auto overflow-hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {/* Learn Card */}
              <div className="min-w-[280px] md:min-w-[300px] rounded-lg overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#8fe8ff] py-6 px-8">
                  <h2 className="text-2xl font-bold">Learn</h2>
                </div>
                <div className="bg-white border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl">la pintura</div>
                    <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Art"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Study Guides Card */}
              <div className="min-w-[280px] md:min-w-[300px] rounded-lg overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#f0b6ff] py-6 px-8">
                  <h2 className="text-2xl font-bold">Study Guides</h2>
                </div>
                <div className="bg-white border border-gray-200 p-4">
                  <div className="mb-2">
                    <div className="text-xl font-medium">Greek art</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 bg-[#8854c0] rounded-full"></div>
                      <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex gap-4">
                      <button className="text-sm font-medium border-b-2 border-[#4255ff] text-[#4255ff] pb-2">
                        Outline
                      </button>
                      <button className="text-sm font-medium text-gray-500 pb-2">Quick reference</button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="font-medium text-sm">Key dates</div>
                    <div className="mt-2 text-sm">
                      <div className="flex items-center py-2">
                        <div className="text-gray-700">Dark Age of</div>
                      </div>
                      <div className="flex items-center py-2">
                        <div className="text-gray-700">Collapse of Mycenaean pal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flashcards Card */}
              <div className="min-w-[280px] md:min-w-[300px] rounded-lg overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#4255ff] py-6 px-8 text-white">
                  <h2 className="text-2xl font-bold">Flashcards</h2>
                </div>
                <div className="bg-white border border-gray-200 p-4 flex items-center justify-center">
                  <div className="w-64 h-40 bg-white shadow-lg rounded-lg transform rotate-3 relative">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="text-lg">superior</div>
                      <div className="text-lg">vena cava</div>
                    </div>
                    <Image
                      src="/images/heart.png"
                      alt="Heart anatomy"
                      width={100}
                      height={100}
                      className="absolute right-2 bottom-2"
                    />
                  </div>
                </div>
              </div>

              {/* Practice Tests Card */}
              <div className="min-w-[280px] md:min-w-[300px] rounded-lg overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#ffcd1f] py-6 px-8">
                  <h2 className="text-2xl font-bold">Practice Tests</h2>
                </div>
                <div className="bg-white border border-gray-200 p-4">
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Score</div>
                      <div className="text-xl font-bold">84%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Results</div>
                      <div className="text-xl font-bold">76/90</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Total time</div>
                      <div className="text-xl font-bold">70m</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-sm font-medium">1.</div>
                      <div className="h-2 w-32 bg-gray-200 rounded-full"></div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-red-500">×</div>
                      <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <div className="text-sm">A.</div>
                      <div className="h-2 w-24 bg-red-200 rounded-full"></div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="opacity-0">×</div>
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                      <div className="text-sm">B.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="min-w-[280px] md:min-w-[300px] rounded-lg overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#8fe8ff] py-6 px-8">
                  <h2 className="text-2xl font-bold">Learn</h2>
                </div>
                <div className="bg-white border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl">la pintura</div>
                    <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Art"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Study Guides Card (Repeat) */}
              <div className="min-w-[280px] md:min-w-[300px] rounded-lg overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#f0b6ff] py-6 px-8">
                  <h2 className="text-2xl font-bold">Study Guides</h2>
                </div>
                <div className="bg-white border border-gray-200 p-4">
                  <div className="mb-2">
                    <div className="text-xl font-medium">Greek art</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 bg-[#8854c0] rounded-full"></div>
                      <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-4 gap-4">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="text-lg font-medium">1/2</div>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* App Promo Section */}
        <section className="px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Every class, every test, one ultimate study app</h2>
              <p className="text-lg mb-8">
                Create your own flashcards or find sets made by teachers, students, and experts. Study them anytime,
                anywhere with our free app.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#">
                  <Image
                    src="/images/apple-store.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="h-[42px] w-auto"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/google-play.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="h-[42px] w-auto"
                  />
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/app-preview.png"
                alt="Quizlet app preview"
                width={500}
                height={400}
                className="w-400 h- rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Study Guide Section */}
        <section className="px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/study-guide.png"
                alt="Study guide example"
                width={500}
                height={400}
                className="w-300 h-auto rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Make class material instantly studiable</h2>
              <p className="text-lg mb-8">
                Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.
              </p>
              <button className="bg-[#4255ff] text-white font-bold py-3 px-8 rounded-full hover:bg-[#3a4ce0]">
                Try it out
              </button>
            </div>
          </div>
        </section>

        {/* Test Prep Section */}
        <section className="px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Test prep for any subject</h2>
              <p className="text-lg mb-8">
                Memorize anything with personalized practice tests and study sessions in Learn. 98% of students say
                Quizlet has improved their understanding.
              </p>
              <button className="bg-[#4255ff] text-white font-bold py-3 px-8 rounded-full hover:bg-[#3a4ce0]">
                Get started
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#8fe8ff] p-6 rounded-lg">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 bg-gray-50 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#4255ff] flex items-center justify-center">
                      <div className="w-6 h-6 text-white flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 8V12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 16H12.01"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-xl font-medium">Learn</div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-2xl font-medium">Tree</div>
                      <Image
                        src="/images/tree.png"
                        alt="Tree"
                        width={100}
                        height={100}
                        className="w-24 h-24 object-contain"
                      />
                    </div>

                    <div className="text-green-500 text-xl font-medium mb-4">Awesome!</div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border rounded-md p-3">
                        <div className="text-center">Tierra</div>
                      </div>
                      <div className="border rounded-md p-3">
                        <div className="text-center">Hoja</div>
                      </div>
                      <div className="border rounded-md p-3">
                        <div className="text-center">Raíz</div>
                      </div>
                      <div className="border border-green-500 bg-green-50 rounded-md p-3 flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <div className="text-center">Árbol</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="px-4 md:px-6 lg:px-8 py-16 bg-[#f6f7fb]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-lg font-medium text-gray-700 mb-2">TEACHERS</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower your students</h2>
              <p className="text-lg mb-8">
                Help every student confidently learn anything. With free flashcard sets, study modes, and in-class games
                like Quizlet Live, you can instantly create a more engaged classroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#4255ff] text-white font-bold py-3 px-8 rounded-full hover:bg-[#3a4ce0]">
                  Sign up as a teacher
                </button>
                <Link href="#" className="text-[#4255ff] font-medium hover:underline flex items-center justify-center">
                  See how teachers use Quizlet
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/teacher-classroom.png"
                alt="Teacher with students"
                width={500}
                height={500}
                className="w-auto h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Popular Flashcard Sets */}
        <section className="px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular flashcard sets</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium mb-4">Integumentary IV</h3>
                <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-6">15 terms</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="User"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-600">zuleyma_moraless</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium mb-4">Physical Science - Sound Waves</h3>
                <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-6">18 terms</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="User"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-600">pinkponygirl</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium mb-4">NCLEX Practice Questions Exam 1</h3>
                <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-6">40 terms</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full overflow-hidden flex items-center justify-center text-white text-xs font-bold">
                    J
                  </div>
                  <div className="text-sm text-gray-600">J_Nav</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border border-gray-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium mb-4">Grade 5G - WMC Test #3</h3>
                <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-6">30 terms</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="User"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-600">huntk-gt</div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="border border-gray-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium mb-4">10.5.8 PQ NSF</h3>
                <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-6">10 terms</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="User"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-600">t3l3canada</div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="border border-gray-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium mb-4">Reconstrucción</h3>
                <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-6">16 terms</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-pink-500 rounded-full overflow-hidden flex items-center justify-center text-white text-xs font-bold">
                    J
                  </div>
                  <div className="text-sm text-gray-600">jmueble</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-8 gap-4">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="text-lg font-medium">1/5</div>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-4 md:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-4">About us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    About Quizlet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    How Quizlet works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Advertise with us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">For students</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Flashcards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Test
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Modern Learning Lab
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Quizlet Plus
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Study Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Pomodoro timer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">For teachers</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Live
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Be the Change
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Quizlet Plus for teachers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Honor code
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Community guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Ad and Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Quizlet for Schools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Parents
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Language</h3>
              <div className="flex items-center gap-2 mb-8">
                <div className="text-gray-600">English (USA)</div>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
                <Image src="/images/qr-code.png" alt="QR Code" width={120} height={120} className="w-full h-auto" />
                <div className="text-center mt-2 text-sm font-medium">Get the app</div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-medium text-lg mb-4">Country</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-3">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                United States
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Canada
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                United Kingdom
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Australia
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                New Zealand
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Germany
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                France
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Spain
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Italy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Japan
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                South Korea
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                India
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                China
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Mexico
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-3 mt-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Sweden
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Netherlands
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Switzerland
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Brazil
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Poland
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Turkey
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Ukraine
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Taiwan
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Vietnam
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Indonesia
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Philippines
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Russia
              </Link>
            </div>
            <p className="mt-10 pt-8 text-center text-xl text-gray-600">
              Clone Coded by{' '}
              <a
                href="https://github.com/lhcee3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline hover:text-gray-900"
              >
                Aneesh
              </a>
            </p>
            <div className="flex justify-end mt-8">
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
