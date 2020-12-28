import { createGlobalStyle } from 'styled-components';

//  这个是为了全局生效
export const GlobalStyleFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1608904584434'); /* IE9 */
  src: url('./iconfont.eot?t=1608904584434#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAABsQAAALAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBTIFRATYCJAMICwYABCAFhG0HMxv6BciemjwJSEmgWPxjxiAFIETwtR+67+6CqBBVJhZIEqhoAiHjQHHHd3yFrjLVrKv/vP5lrhBT6cyCSg7OT7WJo7D2ddKs2dNhaoeNheudxenzRhxOm0CBzAfKcY6hURdgvDXQsQYFEnCBhN4wvXwNQYNwmECjAZVYG7XN3SBMwUcF4tpsnABhBa+isES9UNuwsIhXNerTc3rDi/t+/DMf9SQ1GS/ZPa2ZBtqfASIlP1SLTgwBbzkz2DIy5gCFOGyMbgsUjBaoMRpkBDhWYfAzVZXRi6NqBPvreH4z6IPcZ+Ip/qPmJ1Bg9yLgZNIFlI722Ja7bZ/a5+vz+3sevF6P8t4zum3KPd4er7/vye/jGw9sp1zclR8cJl95sxeTWPfbByepxsPL/ex9pvfGyaxlzwNDQX+9o4MD/2W094pjYy2U208/XFUKtmCsuK+hLfBts6Wt/j1ws0lUMMLCJUONdUMFG6ERjenbo/HsS3YNmPTV+w1vcZaU2wM/E3rtEgy0AKq/+S2n/dbf+NKusVjl//rIAn40tz85d/W3GGYH6k9uC34ib2BVCQVckZ6Gi2zJYi5DQmPoUOHOTl9TlT13nAz1eu7bXqc/Q1ZvjFioc6jRZAG16i2j0ay65U26EIGiNGDGGkBod42k1Xdk7d6JhfqJGr2+Uas9MhodR+KGTSbiIsJA0ARF03ByAZqnnA4sDTTCF3Yi44xtguQFjt6LCGMOQB6bW07UIQciS0xhZo18SjHExGmHteA4ZLM5oYs4LWiKsk2UuuQcDm56EXvKaQcR1hHIBAqZBk1aAJlNcXLApj4VUfl8J8Rohs0E0lEx4OyFEAxz7xAPG3cAsU7qGFTxKM8wZhnxURQGYYSTHVQL+iE2Nk6Qq7mfBTKFYjNNCLvIcUQtPFTK3l5u/7sN0IirUghL1vDkmVUUMRQA') format('woff2'),
  url('./iconfont.woff?t=1608904584434') format('woff'),
  url('./iconfont.ttf?t=1608904584434') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1608904584434#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

