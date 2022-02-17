import ApeAndre from "assets/img/team/ape_andre.png"
import ApeAttila from "assets/img/team/ape_attila.jpg"
import ApeCasper from "assets/img/team/ape_casper.png"
import ApeDavid from "assets/img/team/ape_david.jpg"
import ApeEnrique from "assets/img/team/ape_enrique.png"
import ApeFrank from "assets/img/team/ape_frank.png"
import ApeLeon from "assets/img/team/ape_leon.jpg"
import ApeLeona from "assets/img/team/ape_leona.jpg"
import ApeMaestro from "assets/img/team/ape_maestro.png"
import ApeMilton from "assets/img/team/ape_milton.png"
import ApeOmar from "assets/img/team/ape_omar.png"
import ApeSilvan from "assets/img/team/ape_silvan.jpg"
import ApeWill from "assets/img/team/ape_will.jpg"
import { SocialType } from "libs/enums"
import { openLink } from "libs/functions"
import { SocialInterface, TeamInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Wrapper from "utils/wrapper/Wrapper"

const HomeTeam = () => {
  const [open, setOpen] = useState(false)

  const [team] = useState<TeamInterface[]>([
    {
      name: "Silvan Schwarz",
      title: "Visionary Manifestor",
      avatar: ApeSilvan,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/silvanschwarz/"
        }
      ]
    },
    {
      name: "Frank Schwarz",
      title: "Captain Navigator",
      avatar: ApeFrank,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/frank-schwarz-b1489348/"
        }
      ]
    },
    {
      name: "David Schwarz",
      title: "Executive Consultant",
      avatar: ApeDavid,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/davidschwarzmarketing/ "
        }
      ]
    },
    {
      name: "Willie Watson",
      title: "Investor Networker",
      avatar: ApeWill,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/willie-watson-61669590/"
        }
      ]
    },
    {
      name: "Leon Rabten",
      title: "Kingdom of Bhutan's Ape Gorilla NFT Ambassador",
      avatar: ApeLeon,
      socials: []
    },
    {
      name: "Leona Choden Wangchuk",
      title: "Kingdom of Bhutan's Ape Gorilla NFT Ambassador",
      avatar: ApeLeona,
      socials: []
    },
    {
      name: "Attila Korkmaz",
      title: "Master Artist",
      avatar: ApeAttila,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/attila-korkmaz-2649a322a/"
        }
      ]
    },
    {
      name: "Martijn Vermeulen",
      title: "Executive Webmaster",
      avatar: ApeMaestro,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/martijn-vermeulen-6643a817a/"
        }
      ]
    },
    {
      name: "Andre Luiz Costa",
      title: "Senior Blockchain Engineer",
      avatar: ApeAndre,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/andre-queiroz-costa-b5abb31b6/ "
        }
      ]
    },
    {
      name: "Enrique Martinez",
      title: "Grandfather Master Blockchain Expert Consultant",
      avatar: ApeEnrique,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/enrique-martinez-b9903314/"
        }
      ]
    },
    {
      name: "Omar Talovic",
      title: "UI/UX Designer",
      avatar: ApeOmar,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/otalovic/"
        }
      ]
    },
    {
      name: "Jack Milton",
      title: "PR Manager",
      avatar: ApeMilton,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/jackmiltons/"
        }
      ]
    },
    {
      name: "Casper Sanders",
      title: "NFT Analyst",
      avatar: ApeCasper,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/---casper---sanders---/"
        }
      ]
    }
  ])

  return (
    <>
      <div className="relative my-40 w-full bg-white px-20 sm:my-60 sm:px-30">
        <div className="xl::h-[calc(100%+240px)] absolute top-[50%] left-[50%] h-[calc(100%+140px)] w-screen translate-x-[-50%] translate-y-[-50%] transform bg-white"></div>
        <div className="relative grid w-full grid-cols-1 gap-40 md:gap-80 lg:gap-120">
          <div className="flex w-full justify-center">
            <div className="grid w-[700px] max-w-full grid-cols-1 gap-30">
              <div className="font-azo md:text-56 w-full text-center text-24 leading-[110%] text-green sm:text-36 lg:text-[80px]">
                MEET THE APE GORILLA TEAM
              </div>
              <div className="w-full text-center text-14 text-green-60 sm:text-16 md:text-18">
                We are most proud to be part of the Ape Gorilla Project and are
                happy to bring the community together, and empower them with
                opportunities, knowledge, and network through technology and
                art.
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="paused flex w-max animate-roll-left">
              {new Array(4).fill(1).map((entry: number, key: number) => (
                <div className="flex space-x-10" key={key}>
                  {team.map((person: TeamInterface, key: number) => (
                    <div className="w-[280px]" key={key}>
                      <div className="mb-24 flex w-full justify-center">
                        <div className="w-[240px]">
                          <img
                            src={person.avatar}
                            alt=""
                            className="w-full rounded-[40px] border-[3px] border-white"
                          />
                        </div>
                      </div>
                      <div className="font-azo mb-10 w-full text-center text-18 text-green sm:text-24">
                        {person.name}
                      </div>
                      <div className="font-regular mb-24 w-full text-center text-14 text-green-60 sm:text-18">
                        {person.title}
                      </div>
                      <div className="flex w-full items-center justify-center gap-12">
                        {person.socials.map(
                          (social: SocialInterface, ke: number) => (
                            <button
                              onClick={(e) => openLink(e, social.link)}
                              className="group flex h-50 w-50 items-center justify-center rounded-full bg-green-10 transition-all duration-300 hover:bg-green"
                              key={ke}
                            >
                              {
                                {
                                  [SocialType.Instagram]: (
                                    <FaInstagram className="text-18 text-green transition-all duration-300 group-hover:text-white" />
                                  ),
                                  [SocialType.Linkedin]: (
                                    <FaLinkedin className="text-18 text-green transition-all duration-300 group-hover:text-white" />
                                  ),
                                  [SocialType.Twitter]: (
                                    <FaTwitter className="text-18 text-green transition-all duration-300 group-hover:text-white" />
                                  )
                                }[social.type]
                              }
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden w-full justify-center">
            <div className="grid w-[940px] max-w-full grid-cols-2 gap-16 sm:gap-30 lg:grid-cols-3 2xl:gap-x-80 2xl:gap-y-50">
              {team
                .filter(
                  (person: TeamInterface, key: number) =>
                    open || (!open && key < 3)
                )
                .map((person: TeamInterface, key: number) => (
                  <div className="w-full" key={key}>
                    <div className="mb-24 flex w-full justify-center">
                      <div className="w-[240px]">
                        <img
                          src={person.avatar}
                          alt=""
                          className="w-full rounded-[40px] border-[3px] border-white"
                        />
                      </div>
                    </div>
                    <div className="font-azo mb-10 w-full text-center text-18 text-green sm:text-24">
                      {person.name}
                    </div>
                    <div className="font-regular mb-24 w-full text-center text-14 text-green-60 sm:text-18">
                      {person.title}
                    </div>
                    <div className="flex w-full items-center justify-center gap-12">
                      {person.socials.map(
                        (social: SocialInterface, ke: number) => (
                          <button
                            onClick={(e) => openLink(e, social.link)}
                            className="group flex h-50 w-50 items-center justify-center rounded-full bg-green-10 transition-all duration-300 hover:bg-green"
                            key={ke}
                          >
                            {
                              {
                                [SocialType.Instagram]: (
                                  <FaInstagram className="text-18 text-green transition-all duration-300 group-hover:text-white" />
                                ),
                                [SocialType.Linkedin]: (
                                  <FaLinkedin className="text-18 text-green transition-all duration-300 group-hover:text-white" />
                                ),
                                [SocialType.Twitter]: (
                                  <FaTwitter className="text-18 text-green transition-all duration-300 group-hover:text-white" />
                                )
                              }[social.type]
                            }
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Wrapper open={!open}>
            <div className="hidden w-full justify-center">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center gap-10"
              >
                <div className="font-azo text-24 text-green-light">
                  {open ? "CLOSE TEAM SECTION" : "SEE THE ENTIRE TEAM"}
                </div>
              </button>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default HomeTeam
