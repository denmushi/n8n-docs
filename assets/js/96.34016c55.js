(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1007:function(t,e,o){t.exports=o.p+"assets/img/workflow.97c1e350.png"},1008:function(t,e,o){t.exports=o.p+"assets/img/Yourls_node.5a7995e5.png"},1009:function(t,e,o){t.exports=o.p+"assets/img/Yourls1_node.c4301d29.png"},1462:function(t,e,o){"use strict";o.r(e);var s=o(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"yourls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yourls"}},[t._v("#")]),t._v(" Yourls")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://yourls.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yourls"),s("OutboundLink")],1),t._v(" is a free and open-source software that allows you to run your URL shortening service.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),s("p",[t._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Yourls/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("URL")]),t._v(" "),s("ul",[s("li",[t._v("Expand a URL")]),t._v(" "),s("li",[t._v("Shorten a URL")]),t._v(" "),s("li",[t._v("Get stats about one short URL")])])]),t._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("p",[t._v("This workflow allows you to create a short URL and get the statistics of the URL. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/815",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),s("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("Yourls")])])]),t._v(" "),s("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1007),alt:"A workflow with the Yourls node"}})]),t._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),s("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),s("h3",{attrs:{id:"_2-yourls-node-shorten-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-yourls-node-shorten-url"}},[t._v("#")]),t._v(" 2. Yourls node (shorten: url)")]),t._v(" "),s("p",[t._v("This node will create  a short URL for the link we specify.")]),t._v(" "),s("ol",[s("li",[t._v("First of all, you'll have to enter credentials for the Yourls node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Yourls/"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("li",[t._v("Enter the URL that you want to shorten in the "),s("em",[s("strong",[t._v("URL")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Add Field")])]),t._v(" and select 'Title'.")]),t._v(" "),s("li",[t._v("Enter a title in the "),s("em",[s("strong",[t._v("Title")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),s("p",[t._v("In the screenshot below, you will notice that the node creates a short URL for the URL you specified.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1008),alt:"Using the Yourls node to create short URL"}})]),t._v(" "),s("h3",{attrs:{id:"_3-yourls1-node-stats-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-yourls1-node-stats-url"}},[t._v("#")]),t._v(" 3. Yourls1 node (stats: url)")]),t._v(" "),s("p",[t._v("This node will give us the statistics of the short URL that we specify. We will get the statistics for the URL that we created in the previous step.")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),s("li",[t._v("Select 'Stats' from the "),s("em",[s("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("Short URL")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Yourls > Output Data > JSON > shorturl. You can also add the following expression: "),s("code",[t._v('{{$node["Yourls"].json["shorturl"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[t._v("In the screenshot below, you will notice that the node gives us the statistics of the short URL that we created in the previous node.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1009),alt:"Using the Yourls node to get the statistics of a short URL"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);