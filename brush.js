var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  var keywords = 'break case catch class continue ' +
    'default delete do else enum export extends false  ' +
    'for from as function if implements import in instanceof ' +
    'interface let new null package private protected ' +
    'static return super switch ' +
    'this throw true try typeof var while with yield';

  this.regexList = [
    {
      regex: /"([^\\"\n]|\\.)*"(?=:)/,
      css: 'string'
    },
    {
      regex: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/g,
      css: 'number'
    },
    {
      regex: /"([^\\"\n]|\\.)*"/g,
      css: 'value'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    }
    ];

  this.forHtmlScript(regexLib.scriptScriptTags);
}

Brush.prototype = new BrushBase();
Brush.aliases = ['json'];
module.exports = Brush;