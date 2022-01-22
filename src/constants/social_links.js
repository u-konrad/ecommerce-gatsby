import React from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare
} from "react-icons/fa"

const data = [
  {
    id: 0,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com",
    name:'Facebook'
  },
  {
    id: 1,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
    name:'Twitter'

  },
  {
    id: 3,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.youtube.com",
    name:'Github'

  },
]

export default data
