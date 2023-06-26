import Link from "next/link";

export default function Article() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
      </div>
      <Link
        className="text-blue-600 hover:underline"
        href="https://en.wikipedia.org/wiki/Bangladesh"
        target="_blank"
      >
        Source: https://en.wikipedia.org/wiki/Bangladesh
      </Link>
      <div className="max-w-prose text-white">
        Bangladesh (/ˌbæŋɡləˈdɛʃ, ˌbɑːŋ-/;[16] Bengali: বাংলাদেশ, pronounced
        [ˈbaŋlaˌdeʃ] (listen)), officially the People's Republic of Bangladesh,
        is a country in South Asia. It is the eighth-most-populous country in
        the world, with a population of around 169 million people in an area of
        148,460 square kilometres (57,320 sq mi).[11] Bangladesh is among the
        most densely populated countries in the world, and shares land borders
        with India to the west, north, and east, and Myanmar to the southeast;
        to the south it has a coastline along the Bay of Bengal. It is narrowly
        separated from Bhutan and Nepal by the Siliguri Corridor; and from China
        by the Indian state of Sikkim in the north. Dhaka, the capital and
        largest city, is the nation's political, financial and cultural centre.
        Chittagong, the second-largest city, is the busiest port on the Bay of
        Bengal. The official language is Bengali, one of the easternmost
        branches of the Indo-European language family. Bangladesh forms the
        sovereign part of the historic and ethnolinguistic region of Bengal,
        which was divided during the Partition of India in 1947.[17] The country
        has a Bengali Muslim majority. Ancient Bengal was known as Gangaridai
        and was a bastion of pre-Islamic kingdoms. Muslim conquests after 1204
        heralded the sultanate and Mughal periods, during which an independent
        Bengal Sultanate and a wealthy Mughal Bengal transformed the region into
        an important centre of regional affairs, trade, and diplomacy. After
        1757, Bengal's administrative jurisdiction reached its greatest extent
        under the Bengal Presidency of the British Empire. The creation of
        Eastern Bengal and Assam in 1905 set a precedent for the emergence of
        Bangladesh. In 1940, the first Prime Minister of Bengal A. K. Fazlul Huq
        supported the Lahore Resolution. Before the partition of Bengal, a
        Bengali sovereign state was first proposed by premier H. S. Suhrawardy.
        A referendum and the announcement of the Radcliffe Line established the
        present-day territorial boundary of Bangladesh. In 1947, East Bengal
        became the most populous province in the Dominion of Pakistan. It was
        renamed as East Pakistan, with Dhaka becoming the country's legislative
        capital. The Bengali Language Movement in 1952; the East Bengali
        legislative election, 1954; the 1958 Pakistani coup d'état; the six
        point movement of 1966; and the 1970 Pakistani general election resulted
        in the rise of Bengali nationalism and pro-democracy movements in East
        Pakistan. The refusal of the Pakistani military junta to transfer power
        to the Awami League led by Sheikh Mujibur Rahman led to the Bangladesh
        Liberation War in 1971, in which the Mukti Bahini aided by India waged a
        successful armed revolution. The conflict saw the 1971 Bangladesh
        genocide and the massacre of pro-independence Bengali civilians,
        including intellectuals. The new state of Bangladesh became the first
        constitutionally secular state in South Asia in 1972.[18] Islam was
        declared the state religion in 1988.[19][20][21] In 2010, the Bangladesh
        Supreme Court reaffirmed secular principles in the constitution.[22] A
        middle power in the Indo-Pacific,[23] Bangladesh is home to the
        sixth-most spoken language in the world, the third-largest
        Muslim-majority population in the world, and the second-largest economy
        in South Asia. It maintains the third-largest military in the region and
        the largest contributor of personnel to UN peacekeeping operations.[24]
        Bangladesh is a unitary parliamentary republic based on the Westminster
        system. Bengalis make up 99% of the total population of Bangladesh.[25]
        The country consists of eight divisions, 64 districts and 495
        subdistricts, as well as the world's largest mangrove forest. It hosts
        one of the largest refugee populations in the world due to the Rohingya
        genocide.[26] Bangladesh faces many challenges, particularly corruption,
        political instability, overpopulation and effects of climate change.
        Bangladesh has been a leader within the Climate Vulnerable Forum. It
        hosts the headquarters of BIMSTEC. It is a founding member of SAARC, as
        well as a member of the Organisation of Islamic Cooperation and the
        Commonwealth of Nations.
      </div>
    </>
  );
}
