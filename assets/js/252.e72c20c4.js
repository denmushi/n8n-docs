(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1300:function(e,t,a){"use strict";a.r(t);var o=a(25),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"set"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" Set")]),e._v(" "),o("p",[e._v("The Set node allows you to set workflow data. This node can set completely new data as well as overwrite data that already exists. This node is crucial in workflows which expect incoming data from previous nodes, such as when inserting values to Google Sheets or databases.")]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to assign values to variables using the Set node. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/526",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following two nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("Set")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(578),alt:"A workflow with the Set node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-set-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),o("ol",[o("li",[e._v("Click on the "),o("em",[e._v("Add Value")]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("number")]),e._v("in the "),o("em",[e._v("Name")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter the value for the above field in the "),o("em",[e._v("Value")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[e._v("Add Value")]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("string")]),e._v("in the "),o("em",[e._v("Name")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter the value for the above field in the "),o("em",[e._v("Value")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[e._v("Add Value")]),e._v(" button and select 'Boolean' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("boolean")]),e._v("in the "),o("em",[e._v("Name")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Toggle the value for the above field in the "),o("em",[e._v("Value")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])]),e._v(" "),o("h2",{attrs:{id:"node-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),o("h3",{attrs:{id:"keep-only-set"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keep-only-set"}},[e._v("#")]),e._v(" Keep Only Set")]),e._v(" "),o("p",[e._v("There's an option to toggle the "),o("em",[e._v("Keep Only Set")]),e._v(" field. Setting this to true ensures that only the values set on this node should be kept, and the values from all the previous nodes are removed.")]),e._v(" "),o("h3",{attrs:{id:"dot-notation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dot-notation"}},[e._v("#")]),e._v(" Dot Notation")]),e._v(" "),o("p",[e._v("By default, the node follows the dot notation for the "),o("em",[e._v("Name")]),e._v(" field. That means if you set the name in the "),o("em",[e._v("Name")]),e._v(" field as "),o("code",[e._v("number.one")]),e._v(" and the value in the "),o("em",[e._v("Value")]),e._v(" field as "),o("code",[e._v("20")]),e._v(", the resulting JSON would look like the following:")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"number"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"one"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("You can deactivate this behaviour by clicking on the "),o("em",[e._v("Add Option")]),e._v(" button and setting the "),o("em",[e._v("Dot Notion")]),e._v(" field to off. Now the resulting JSON would look like the following:")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"number.one"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/building-an-expense-tracking-app-in-10-minutes-74b0cececc90",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building an expense tracking app in 10 minutes 📱"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/effortless-video-collaboration-with-whereby-mattermost-and-n8n-8fc397feb9cb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Effortless video collaboration with Whereby, Mattermost, and n8n 📹"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/smart-factory-automation-using-iot-and-sensor-data-with-n8n-27675de9943b",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart Factory Automation using IoT and Sensor Data with n8n 🏭"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports},578:function(e,t,a){e.exports=a.p+"assets/img/workflow.4f4ca090.png"}}]);