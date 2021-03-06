import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>안녕하세요, 저는</span> <br />
        " 나상민 "<span style={{ color: "white" }}> 입니다.</span>
      </div>
      <div className="h1 code mt-4 mb-3">function myinfo(){"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        let result;
        <br />try {"{"}
        <br />&nbsp;&nbsp;&nbsp; result = {"{"}
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name: ' SANGMIN NA ',
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; age: ' 30 ',
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; job: ' frontend developer ',
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; develop skill: ' javascript, react, node.js ... '
        <br />&nbsp;&nbsp;&nbsp; {"};"}
        <br />{"}"}catch (error) {"{"}
        <br />&nbsp;&nbsp;&nbsp; console.log(error);
        <br />{"}"}
        <br />return result;
        <br />
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/Mr404Found">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/sumanth.zero7">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/Mr404Found">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.youtube.com/channel/UCw0FDIL-HpcfzEZrjcQwhMQ"
        >
          <Youtube />
        </a>
        <a className="mr-5 icon" href="mailto://contactmr404here@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
