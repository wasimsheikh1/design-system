(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{800:function(e,n,a){__NEXT_REGISTER_PAGE("/Box",function(){return e.exports=a(801),{page:e.exports.default}})},801:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),m=a(15);function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components;o(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:n},r.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"box"}},r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h1",props:{href:"#box","aria-hidden":"true"}},r.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Box"),r.a.createElement(m.MDXTag,{name:"p",components:n},"Use the ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Box")," component to control width, margin, padding, and color."),r.a.createElement(m.MDXTag,{name:"p",components:n},"50% width"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box width={1/2} bg='blue'>\n  Box\n</Box>\n")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Padding of ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.space[3]")," (16px)"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={3} bg='blue'>\n  Box\n</Box>\n")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Margin of ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.space[2]")," (8px)"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box m={4} bg='blue'>\n  Box\n</Box>\n")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Color blue from the theme's color palette"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box color='blue'>\n  Box\n</Box>\n")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Background color green from the theme's color palette"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box bg='green'>\n  Box\n</Box>\n")),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"responsive-widths"}},r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#responsive-widths","aria-hidden":"true"}},r.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Responsive Widths"),r.a.createElement(m.MDXTag,{name:"p",components:n},"The ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," prop accepts an array value to set different widths at different breakpoints with a mobile-first approach."),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box\n  width={[\n    1,    // Sets width 100% at the smallest breakpoint\n    1/2,  // Sets width 50% at the next breakpoint\n    1/4,  // Sets width 25% at the next breakpoint\n  ]}\n  bg='gray'>\n  Hello\n</Box>\n")),r.a.createElement(m.MDXTag,{name:"p",components:n},"See ",r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jxnblk/styled-system"}},"styled-system")," for more documentation."),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"props"}},r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#props","aria-hidden":"true"}},r.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Props"),r.a.createElement(m.MDXTag,{name:"table",components:n},r.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"width")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets the width of the element")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"color")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets color based on the theme's color palette")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"bg")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets background-color based on the theme's color palette")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"m")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin based on the ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"theme.space")," scale")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mt")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-top")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mr")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-right")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mb")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-bottom")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ml")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-left")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mx")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-left and margin-right")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"my")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-top and margin-bottom")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"p")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets padding based on the ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"theme.space")," scale")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pt")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets padding-top")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pr")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets padding-right")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pb")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets padding-bottom")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pl")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets padding-left")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"px")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets padding-left and padding-right")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"py")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets padding-top and padding-bottom")))))}}},[[800,1,0]]]);