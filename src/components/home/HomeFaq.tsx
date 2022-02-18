import HomeQuestion from "components/home/HomeQuestion"
import { URL } from "libs/constants"
import { QuestionInterface } from "libs/interfaces"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const HomeFaq = () => {
  const [questions] = useState<QuestionInterface[]>([
    {
      question: "How much is an Ape Gorilla NFT?",
      answer: (
        <>
          The PRESALE price is 0.22 ETH + gas Fees. The PUBLIC SALES price is
          0.58 ETH + gas fees. You can qualify for our Presale and get on the{" "}
          <Link to={URL.WHITELIST} className="text-16 text-orange">
            whitelist
          </Link>
          .
        </>
      )
    },
    {
      question: "Where can I view my Ape Gorilla NFTs?",
      answer: (
        <>
          After you minted them, you can see them in your Opensea account or on
          the{" "}
          <Link to={URL.WHITELIST} className="text-16 text-orange">
            whitelist
          </Link>{" "}
          page
        </>
      )
    },
    {
      question: "Will there be a presale?",
      answer: <>Yes, and consists of 1,337 items.</>
    },
    {
      question: "When will we be able to mint Ape Gorilla NFTs?",
      answer: (
        <>
          We will be announcing the whitelist and Public sale dates soon! The
          priority is executing the roadmap and serve our community first!{" "}
        </>
      )
    },
    {
      question: "What can I do with my Ape Gorilla NFT?",
      answer: (
        <>
          ALOT! The Ape Gorilla NFT not only gives you the entry to an exciting
          networking community, which organizes events all around the world for
          its holders, but it also will be usable to access our physical club
          locations and VIP areas which are purchased by the Ape Gorilla Club.{" "}
        </>
      )
    },
    {
      question: "Are there secondary sale royalties?",
      answer: (
        <>
          Yes, the royalties are 10%, where 5% is exclusively reserved for the
          community and 5% is returned back to the founding team.
        </>
      )
    },
    {
      question: "Do I own the Ape Gorilla after minting it?",
      answer: (
        <>
          Yes, an NFT is a digital property. It is yours until you sell or give
          it to somebody as a present.
        </>
      )
    },
    {
      question: "How can I promote the project?",
      answer: (
        <>
          The best way to promote the project is by inviting people to the
          Discord channel. If you are an influencer and would like to work with
          us, write to us at support@apegorilla.com
        </>
      )
    }
  ])

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-100">
        <div className="flex w-full justify-center">
          <div className="grid w-[700px] max-w-full grid-cols-1 gap-30">
            <div className="font-azo md:text-56 w-full text-center text-24 leading-[110%] text-white sm:text-36">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <div className="w-full text-center text-14 text-white-60 sm:text-16 md:text-18">
              We strive to answer the most common question that our community is
              asking us. Feel free to join our Discord and we will explain
              everything in detail.
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-20">
          {questions.map((question: QuestionInterface, key: number) => (
            <HomeQuestion question={question} index={key} key={key} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeFaq
