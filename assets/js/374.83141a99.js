(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1114:function(n,t,a){"use strict";a.r(t);var e=a(25),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[n._v("#")]),n._v(" Quickstart")]),n._v(" "),a("p",[n._v("There are a couple of ways to get started with n8n.")]),n._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#sign-up-on-n8n-cloud"}},[n._v("Sign-up on n8n.cloud")])]),a("li",[a("a",{attrs:{href:"#give-it-a-spin-using-npx"}},[n._v("Give it a spin using npx")])]),a("li",[a("a",{attrs:{href:"#run-with-docker"}},[n._v("Run with Docker")])]),a("li",[a("a",{attrs:{href:"#install-with-npm"}},[n._v("Install with npm")])]),a("li",[a("a",{attrs:{href:"#post-installation-starting-n8n-with-tunnel"}},[n._v("Post installation: Starting n8n with tunnel")])])])]),a("p"),n._v(" "),a("h2",{attrs:{id:"sign-up-on-n8n-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-up-on-n8n-cloud"}},[n._v("#")]),n._v(" Sign-up on n8n.cloud")]),n._v(" "),a("p",[n._v("Sign-up for an "),a("a",{attrs:{href:"https://www.n8n.cloud/",target:"_blank",rel:"noopener noreferrer"}},[n._v("n8n.cloud"),a("OutboundLink")],1),n._v(" account.")]),n._v(" "),a("p",[n._v("While n8n.cloud and n8n are the same in terms of features, n8n.cloud provides certain conveniences such as:")]),n._v(" "),a("ul",[a("li",[n._v("Not having to set up and maintain your n8n instance")]),n._v(" "),a("li",[n._v("Managed OAuth for authentication")]),n._v(" "),a("li",[n._v("Easily upgrading to the newer n8n versions")])]),n._v(" "),a("h2",{attrs:{id:"give-it-a-spin-using-npx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#give-it-a-spin-using-npx"}},[n._v("#")]),n._v(" Give it a spin using npx")]),n._v(" "),a("p",[n._v("To spin up n8n using "),a("RouterLink",{attrs:{to:"/reference/glossary.html#npx"}},[n._v("npx")]),n._v(", you can run:")],1),n._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[n._v("npx n8n\n")])])]),a("p",[n._v("It will download everything that is needed to start n8n.")]),n._v(" "),a("p",[n._v("You can then access n8n by opening:\n"),a("a",{attrs:{href:"http://localhost:5678",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://localhost:5678"),a("OutboundLink")],1)]),n._v(" "),a("h2",{attrs:{id:"run-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-with-docker"}},[n._v("#")]),n._v(" Run with Docker")]),n._v(" "),a("p",[n._v("To play around with n8n, you can also start it using "),a("RouterLink",{attrs:{to:"/reference/glossary.html#docker"}},[n._v("Docker")]),n._v(":")],1),n._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[n._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n  --name n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("5678")]),n._v(":5678 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n  n8nio/n8n\n")])])]),a("p",[n._v("Be aware that all the data will be lost once the Docker container gets removed. To\npersist the data mount the "),a("code",[n._v("~/.n8n")]),n._v(" folder:")]),n._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[n._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n  --name n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("5678")]),n._v(":5678 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n  -v ~/.n8n:/home/node/.n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n  n8nio/n8n\n")])])]),a("p",[n._v("n8n also offers a Docker image for Raspberry Pi: "),a("code",[n._v("n8nio/n8n:latest-rpi")]),n._v(".")]),n._v(" "),a("p",[n._v("More information about the Docker setup can be found in the README file of the\n"),a("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/README.md",target:"_blank",rel:"noopener noreferrer"}},[n._v("Docker Image"),a("OutboundLink")],1),n._v(".")]),n._v(" "),a("p",[n._v("In case you run into issues, check out the "),a("RouterLink",{attrs:{to:"/reference/troubleshooting.html"}},[n._v("troubleshooting")]),n._v(" page or ask for help in the community "),a("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[n._v("forum"),a("OutboundLink")],1),n._v(".")],1),n._v(" "),a("h2",{attrs:{id:"install-with-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-with-npm"}},[n._v("#")]),n._v(" Install with npm")]),n._v(" "),a("p",[n._v("To install n8n globally using "),a("RouterLink",{attrs:{to:"/reference/glossary.html#npm"}},[n._v("npm")]),n._v(":")],1),n._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" n8n -g\n")])])]),a("p",[n._v("After the installation n8n can be started by typing in:")]),n._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[n._v("n8n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# or")]),n._v("\nn8n start\n")])])]),a("h2",{attrs:{id:"post-installation-starting-n8n-with-tunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-installation-starting-n8n-with-tunnel"}},[n._v("#")]),n._v(" Post installation: Starting n8n with tunnel")]),n._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[n._v("WARNING")]),n._v(" "),a("p",[n._v("This is only meant for local development and testing. It should not be used in production.")])]),n._v(" "),a("p",[a("strong",[n._v("Note:")]),n._v(" n8n.cloud users can skip this section.")]),n._v(" "),a("p",[n._v("To be able to use webhooks for trigger nodes of external services like GitHub, n8n has to be reachable from the web. To make that easy, n8n has a special tunnel service, which redirects requests from our servers to your local n8n instance (uses this code: "),a("a",{attrs:{href:"https://github.com/localtunnel/localtunnel",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/localtunnel/localtunnel"),a("OutboundLink")],1),n._v(").")]),n._v(" "),a("p",[n._v("If you've installed n8n using npm, start n8n with "),a("code",[n._v("--tunnel")])]),n._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[n._v("n8n start --tunnel\n")])])]),a("p",[n._v("If you're running n8n with Docker, start n8n with "),a("code",[n._v("--tunnel")])]),n._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[n._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\t--name n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\t-p "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("5678")]),n._v(":5678 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\t-v ~/.n8n:/home/node/.n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\tn8nio/n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\tn8n start --tunnel\n")])])]),a("p",[n._v("In case you run into issues, check out the "),a("RouterLink",{attrs:{to:"/reference/troubleshooting.html"}},[n._v("troubleshooting")]),n._v(" page or ask for help in the community "),a("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[n._v("forum"),a("OutboundLink")],1),n._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);