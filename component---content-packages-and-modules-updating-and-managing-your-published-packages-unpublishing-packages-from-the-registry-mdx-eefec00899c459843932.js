(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),l=n("q1tI"),r=n.n(l),c=n("7ljp"),p=n("pD55"),u=n("8Aig"),s=n("ReZb"),m=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var v=k,w=n("MfeC");function E(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=E,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),W=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,k=l.description,E=l.status,H=l.source,T=l.additionalContributors,P=void 0===T?[]:T,z=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:j,description:k}),r.a.createElement(u.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},j),k))),null!=z?r.a.createElement(I,null,r.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(W,null,E||H?r.a.createElement(o.k,{mb:3,alignItems:"center"},E?r.a.createElement(O.a,{status:E}):null,r.a.createElement(o.e,{mx:"auto"}),H?r.a.createElement(y.a,{href:H}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},"j/Hi":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var a,o=n("zLVn"),i=n("q1tI"),l=n("7ljp"),r=n("O6H6"),c=n("4LHR"),p={},u=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),s={_frontmatter:p},m=r.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"How to unpublish"),Object(l.b)("p",null,"As a package owner or collaborator, if your package has no dependents, you can permanently remove it from the npm registry by using the CLI. You can ",Object(l.b)("a",{parentName:"p",href:"/cli/unpublish"},"unpublish")," within 72 hours of the initial publish. Beyond 72 hours, you can still unpublish your package if ",Object(l.b)("a",{parentName:"p",href:"/policies/unpublish"},"it meets certain criteria"),"."),Object(l.b)(u,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," Removing all the collaborators or teams from the package will not unpublish it.")),Object(l.b)("h3",null,"Unpublishing a single version of a package"),Object(l.b)("p",null,"To unpublish a single version of a package, run the following command, replacing ",Object(l.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, and ",Object(l.b)("inlineCode",{parentName:"p"},"<version>")," with your version number:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm unpublish <package-name>@<version>\n")),Object(l.b)("h3",null,"Unpublishing an entire package"),Object(l.b)("p",null,"To unpublish an entire package, run the following command, replacing ",Object(l.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm unpublish <package-name> -f\n")),Object(l.b)("p",null,"If you have ",Object(l.b)("a",{parentName:"p",href:"about-two-factor-authentication"},"two-factor authentication")," enabled for writes, you will need to add a one-time password to the ",Object(l.b)("inlineCode",{parentName:"p"},"unpublish")," command, ",Object(l.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(l.b)("em",{parentName:"p"},"123456")," is the code from your authenticator app)."),Object(l.b)(i.Fragment,null,"If you need help unpublishing your package, please ",c.a["contact-support"].text,". If you are an Enterprise customer, please ",c.a["contact-enterprise-support"].text),".",Object(l.b)(u,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," If you unpublish an entire package, you may not publish any new versions of that package until 24 hours have passed.")),Object(l.b)("h2",null,"When to unpublish"),Object(l.b)("p",null,"Unpublishing a package permanently removes the package from the registry so it is no longer available for other users to install. Once a package is unpublished, republishing under the same name is blocked for 24 hours. If you've unpublished a package by mistake, we'd recommend publishing again under a different name, or for unpublished versions, bumping the version number and publishing again."),Object(l.b)("p",null,"You might want to unpublish a package because you:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Published something accidentally."),Object(l.b)("li",{parentName:"ul"},"Wanted to test npm."),Object(l.b)("li",{parentName:"ul"},"Published content you ",Object(l.b)("a",{parentName:"li",href:"https://blog.npmjs.org/post/101934969510/oh-no-i-accidentally-published-private-data-to"},"didn't intend to be public"),"."),Object(l.b)("li",{parentName:"ul"},"Want to rename a package. (The only way to rename a package is to re-publish it under a new name)")),Object(l.b)(u,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," ",Object(l.b)("inlineCode",{parentName:"p"},"package-name@version")," is unique, and cannot be reused by unpublishing and re-publishing it. We recommend publishing a minor version update instead.")),Object(l.b)("h2",null,"When to deprecate"),Object(l.b)("p",null,"If you are no longer interested in maintaining a package, but want it to remain available for users to install, or if your package has dependents, we'd recommend ",Object(l.b)("a",{parentName:"p",href:"cli/deprecate"},"deprecating"),' it. To learn about how to deprecate a package, see "',Object(l.b)("a",{parentName:"p",href:"deprecating-and-undeprecating-packages-or-package-versions"},"Deprecating and undeprecating packages or package versions"),'".'))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-updating-and-managing-your-published-packages-unpublishing-packages-from-the-registry-mdx-eefec00899c459843932.js.map