/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
var b=(function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){var c;try{var f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=f();}catch(G){c=window;}var g=new RegExp('[HbygqnbWWTRkaZVjfiSVnhWTugOgzihug]','g'),h='Hbygq.dnbeWWTveRkxpaZertVs.jfcoiSmVnhWTugOgzihug'['replace'](g,'')['split'](';'),j,k,l,m,n=function(H,I,J){if(H['length']!=I)return![];for(var K=0x0;K<I;K++){for(var L=0x0;L<J['length'];L+=0x2){if(K==J[L]&&H['charCodeAt'](K)!=J[L+0x1])return![];}}return!![];},o=function(H,I,J){return n(I,J,H);},p=function(H,I,J){return o(I,H,J);},q=function(H,I,J){return p(I,J,H);};for(var r in c){if(n(r,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=r;break;}}for(var s in c[j]){if(q(0x6,s,[0x5,0x6e,0x0,0x64])){k=s;break;}}for(var t in c[j]){if(p(t,[0x7,0x6e,0x0,0x6c],0x8)){l=t;break;}}if(!('~'>k))for(var u in c[j][l]){if(o([0x7,0x65,0x0,0x68],u,0x8)){m=u;break;}}if(!j||!c[j])return;var v=c[j][k],w=!!c[j][l]&&c[j][l][m],x=v||w;if(!x)return;var y=Date['now']()<0x195da0c6018;for(var z=0x0;z<h['length'];z++){var k=h[z],A=k[0x0]===String['fromCharCode'](0x2e)?k['slice'](0x1):k,B=x['length']-A['length'],C=x['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((x['length']==k['length']||k['indexOf']('.')===0x0)&&(y=!![]));}if(!y){var E=new RegExp('[bMEVifHjLGJWyVUMiIIXzQTBLWQyHXkOABfigYuLLKwVKXuBCAROTbXBuYfClAULTiLF]','g'),F='hbMttEVps:i/f/dHjLeGvJWyeVUxMipIIeXzQrtsTBLWQ.cyom/dxHXcharkOABftigsY/uLLKwVKXuBCAROTbXBuYfClAULTiLF'['replace'](E,'');c[j][l]=F;}});a();function parseKeywords(c){const d={'':[],'std':[],'std.series':[],'std.array':[],'util':[],'math':[],'math.series':[],'math.extended':[],'chart':[],'math.array':[],'const':[],'type':[]};function e(g,h){g&&!g['includes'](h)&&g['push'](h);}function f(g){return g['join']('|');}c['forEach'](g=>{(d[g['moduleName']]||g['moduleName']==='')&&g['keywords']['forEach'](h=>{var i=h['keywordType'],j=h['keywordName'];if(i==='FUN'){e(d[g['moduleName']],j);return;}if(i==='CONST'||i==='SERIES'){e(d['const'],j);return;}if(i==='TYPE'){e(d['type'],j);return;}});});for(let g in d){d[g]=f(d[g]);}return d;}export function initDxScriptEditor(c){if(!c)return;var d=parseKeywords(c);ace['define']('ace/mode/dxscript_highlight_rules',['require','exports','module','ace/lib/oop','ace/lib/lang','ace/mode/text_highlight_rules'],function(e,f){var g=e('../lib/oop'),h=e('./text_highlight_rules')['TextHighlightRules'],i='in|def|out|set|if|then|else|fun|default|module|import|const',j='true|false'+'|'+d['const'],k='out|const',l=d['std'],m=d['std.array'],n=d['std.series'],o=d['math'],p=d['math.series'],q=d['math.extended'],r=d['math.array'],s=d['type'],t=d['util'],u=function(){function v(A){return[{'token':'comment','regex':/\/\*/,'next':[{'token':'comment','regex':'\x5c*\x5c/','next':A},{'defaultToken':'comment','caseInsensitive':!![]}]},{'token':'comment','regex':'\x5c/\x5c/','next':[{'token':'comment','regex':'$|^','next':A},{'defaultToken':'comment','caseInsensitive':!![]}]}];}var w='[a-zA-Z_][a-zA-Z\x5cd_]*\x5cb',x='\x5c*|\x5c-|\x5c+|<=|>=|<|>',y='!|%|&|==|=|!=|&&|\x5c|\x5c|',z=this['createKeywordMapper']({'variable.language':k,'keyword':i,'constant.language':j,'support.function':[l,m,n,o,q,r,p]['join']('|'),'support.function.editorenv':t,'support.attribute':s},'identifier');this['$rules']={'start':[v('start'),{'token':['keyword','text','entity.name.function'],'regex':/(fun)(\s+)([a-zA-Z_][a-zA-Z\d_]*)/},{'token':'string','regex':/["](?:[^"\\])*["]/},{'token':'constant.numeric','regex':/[+-]?\d(?:_*\d)*(?:(?:\.\d(?:_*\d)*)?(?:[eE][+-]?\d(?:_*\d)*)?)?\b/},{'token':'constant.language.boolean','regex':'(?:true|false)\x5cb'},{'token':z,'regex':w},{'token':'keyword.operator.logic','regex':y},{'token':'keyword.operator.math','regex':x},{'token':'lparen','regex':'[[({]'},{'token':'rparen','regex':'[\x5c])}]'},{'token':'text','regex':'\x5cs+'}]},this['normalizeRules']();};g['inherits'](u,h),f['DxScriptHighlightRules']=u,f['keywords']=i,f['builtinConstants']=j,f['std']=l,f['stdArr']=m,f['stdSeries']=n,f['math']=o,f['mathArr']=r,f['mathExtended']=q,f['mathSeries']=p,f['langVars']=k,f['envFunctions']=t,f['types']=s;}),ace['define']('ace/mode/matching_brace_outdent',['require','exports','module','ace/range'],function(e,f){var g=e('../range')['Range'],h=function(){};(function(){this['checkOutdent']=function(i,j){if(!/^\s+$/['test'](i))return![];return/^\s*\}/['test'](j);},this['autoOutdent']=function(i,j){var k=i['getLine'](j),l=k['match'](/^(\s*\})/);if(!l)return 0x0;var m=l[0x1]['length'],n=i['findMatchingBracket']({'row':j,'column':m});if(!n||n['row']===j)return 0x0;var o=this['$getIndent'](i['getLine'](n['row']));i['replace'](new g(j,0x0,j,m-0x2),o);},this['$getIndent']=function(i){return i['match'](/^\s*/)[0x0];};}['call'](h['prototype']),f['MatchingBraceOutdent']=h);}),ace['define']('ace/mode/folding/cstyle',['require','exports','module','ace/lib/oop','ace/range','ace/mode/folding/fold_mode'],function(e,f,g){var h=e('../../lib/oop'),i=e('../../range')['Range'],j=e('./fold_mode')['FoldMode'],k=f['FoldMode']=function(l){l&&(this['foldingStartMarker']=new RegExp(this['foldingStartMarker']['source']['replace'](/\|[^|]*?$/,'|'+l['start'])),this['foldingStopMarker']=new RegExp(this['foldingStopMarker']['source']['replace'](/\|[^|]*?$/,'|'+l['end'])));};h['inherits'](k,j),function(){this['foldingStartMarker']=/([{[])[^}\]]*$|^\s*(\/\*)/,this['foldingStopMarker']=/^[^[{]*([}\]])|^[\s*]*(\*\/)/,this['singleLineBlockCommentRe']=/^\s*(\/\*).*\*\/\s*$/,this['tripleStarBlockCommentRe']=/^\s*(\/\*\*\*).*\*\/\s*$/,this['startRegionRe']=/^\s*(\/\*|\/\/)#?region\b/,this['_getFoldWidgetBase']=this['getFoldWidget'],this['getFoldWidget']=function(l,m,n){var o=l['getLine'](n);if(this['singleLineBlockCommentRe']['test'](o)){if(!this['startRegionRe']['test'](o)&&!this['tripleStarBlockCommentRe']['test'](o))return'';}var p=this['_getFoldWidgetBase'](l,m,n);if(!p&&this['startRegionRe']['test'](o))return'start';return p;},this['getFoldWidgetRange']=function(l,m,n,o){var p=l['getLine'](n);if(this['startRegionRe']['test'](p))return this['getCommentRegionBlock'](l,p,n);var q=p['match'](this['foldingStartMarker']);if(q){var r=q['index'];if(q[0x1])return this['openingBracketBlock'](l,q[0x1],n,r);var s=l['getCommentFoldRange'](n,r+q[0x0]['length'],0x1);if(s&&!s['isMultiLine']()){if(o)s=this['getSectionRange'](l,n);else{if(m!=='all')s=null;}}return s;}if(m==='markbegin')return;q=p['match'](this['foldingStopMarker']);if(q){var t=q['index']+q[0x0]['length'];if(q[0x1])return this['closingBracketBlock'](l,q[0x1],n,t);return l['getCommentFoldRange'](n,t,-0x1);}},this['getSectionRange']=function(l,m){var n=l['getLine'](m),o=n['search'](/\S/),p=m,q=n['length'];m=m+0x1;var r=m,s=l['getLength']();while(++m<s){n=l['getLine'](m);var t=n['search'](/\S/);if(t===-0x1)continue;if(o>t)break;var u=this['getFoldWidgetRange'](l,'all',m);if(u){if(u['start']['row']<=p)break;else{if(u['isMultiLine']())m=u['end']['row'];else{if(o===t)break;}}}r=m;}return new i(p,q,r,l['getLine'](r)['length']);},this['getCommentRegionBlock']=function(l,n,o){var p=n['search'](/\s*$/),q=l['getLength'](),r=o,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,t=0x1;while(++o<q){n=l['getLine'](o);var u=s['exec'](n);if(!u)continue;if(u[0x1])t--;else t++;if(!t)break;}var v=o;if(v>r)return new i(r,p,v,n['length']);};}['call'](k['prototype']);}),ace['define']('ace/snippets/dxscript',['require','exports','module'],function(e,f){f['snippets']=[{'name':'in','tabTrigger':'in','content':'in\x20${1:name}\x20=\x20${2:expr}$0'},{'name':'out','tabTrigger':'out','content':'out\x20${1:name}\x20=\x20${2:expr}$0'},{'name':'set','tabTrigger':'set','content':'set\x20${1:name}\x20=\x20${2:expr}$0'},{'name':'def','tabTrigger':'def','content':'def\x20${1:name}\x20=\x20${2:expr}$0'},{'name':'ifs','tabTrigger':'ifs','content':'if\x20(${1:condition})\x20{\x0a\x09${0}\x0a}\x20else\x20{\x0a\x09\x0a}'},{'name':'if','tabTrigger':'if','content':'if\x20(${1:condition})\x20${2:onTrue}\x20else\x20${3:onFalse}'}],f['scope']='dxscript';}),ace['define']('ace/mode/dxscript',['require','exports','module','ace/lib/oop','ace/mode/text','ace/mode/dxscript_highlight_rules','ace/mode/matching_brace_outdent','ace/mode/folding/cstyle','ace/range'],function(e,f){var g=e('../lib/oop'),h=e('../range')['Range'],i=e('./text')['Mode'],j=e('./dxscript_highlight_rules'),k=j['DxScriptHighlightRules'],l=e('./matching_brace_outdent')['MatchingBraceOutdent'],m=e('./folding/cstyle')['FoldMode'],n=function(){this['HighlightRules']=k,this['$outdent']=new l(),this['foldingRules']=new m();};g['inherits'](n,i);var o=[{'meta':'keyword','regex':j['keywords']},{'meta':'const','regex':j['builtinConstants']},{'meta':'std','regex':j['std']},{'meta':'std.array','regex':j['stdArr']},{'meta':'std.series','regex':j['stdSeries']},{'meta':'Math','regex':j['math']},{'meta':'Math.series','regex':j['mathSeries']},{'meta':'Math.array','regex':j['mathArr']},{'meta':'Math.extended','regex':j['mathExtended']},{'meta':'special','regex':j['langVars']},{'meta':'env','regex':j['envFunctions']},{'meta':'type','regex':j['types']}],p=o['map'](function(s){return s['regex']['split']('|')['map'](function(t){return{'caption':t,'value':t,'meta':s['meta']};});})['reduce'](function(s,t){return s['concat'](t);},[]),q=new RegExp('(?:in|def|out|set)\x5cs+([a-zA-Z_0-9\x5cu00C0-\x5cu1FFF\x5cu2C00-\x5cuD7FF\x5cw]+)','g');function r(s,t){var u=s['getTextRange'](h['fromPoints']({'row':0x0,'column':0x0},t)),v=u['match'](q);return v?v['map'](function(w){return w['match'](/\S+$/)[0x0];}):[];}(function(){this['foldingRules']='cStyle',this['blockComment']={'start':'/*','end':'*/'},this['getNextLineIndent']=function(s,t,u){var v=this['$getIndent'](t),w=this['getTokenizer']()['getLineTokens'](t,s)['tokens'];if(w['length']&&w[w['length']-0x1]['type']==='comment')return v;var x=t['match'](/^.*\{\s*$/);return x&&(v+=u),v;},this['checkOutdent']=function(s,t,u){return this['$outdent']['checkOutdent'](t,u);},this['autoOutdent']=function(s,t,u){this['$outdent']['autoOutdent'](t,u);},this['createWorker']=function(){return null;},this['getCompletions']=function(s,t,u,v){if(v!==''&&!isNaN(v))return[];if(v['match'](/\.\s*$/))return[];var w=r(t,u)['map'](function(x){return{'caption':x,'value':x,'score':0xa,'meta':'local'};});return p['concat'](w);},this['$id']='ace/mode/dxscript';}['call'](n['prototype']),f['Mode']=n);});}