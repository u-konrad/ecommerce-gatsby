import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa"

const data = [
  {
    id: 0,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.twitter.com",
    name:'Facebook'
  },
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
    name:'LinkedIn'

  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.twitter.com",
    name:'Github'

  },
]

export default data
