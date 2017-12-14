/**
 * Very basic NEXUS parser
 *
 * Supports TREES block
 *
 */
'use strict'
var n = {}
n.parse = function (s) {
  if (!isNexus(s)) {
    return
  }
  let sentences = getSentences(s)
  console.log('Sentences', sentences)
  let blocks = readBlocks(sentences)
  console.log('ReadBlocks', blocks)
  let parsed = parseBlocks(blocks)
  console.log('ParsedBlocks', parsed)
}

function isNexus (s) {
  return s.startsWith('#NEXUS')
}
function getSentences (s) {
  return s.replace('#NEXUS', '')  // discard the first #NEXUS marker at the file
          .replace(/\[((?:.*?|\n))*?\]/gm, '')  // strip comments
          .split(';')             // split the document into sentences
          .map((x) => x.trim())   // remove trailing and starting whitespace at the end of each element
          .filter((x) => x.length > 0) // remove empty sentences from the array
}
/* function splitSentences (arr) {
  arr.map((x) => {
    var parts = x.split(/[\r\n]+/).map(x => x.trim())
  })
} */
function isBlockStart (str) {
  return str.startsWith('Begin ')
}
function isBlockEnd (str) {
  return str.startsWith('End')
}
function getBlockKeyword (str) {
  return str.split(' ')[1]
}
function isCommand (str) {
  let word = str.split(' ')[0]
  return ['tree', 'Translate'].indexOf(word) !== -1
}
function readBlocks (arr) {
  // var tree = {}
  var blocks = []
  for (var i = 0; i < arr.length; i++) {
    let e = arr[i]
    // begin [keyword];
    if (isBlockStart(e)) {
      let block = {
        lines: [],
        commands: [],
        keyword: getBlockKeyword(e)
      }
      blocks.push(block)
      i++
      e = arr[i]
      while (!isBlockEnd(e) && i < arr.length) {
        block.lines.push(e)
        i++
        e = arr[i]
      }
    }
  }
  return blocks
}
function parseBlocks (arr) {
  for (var i = 0; i < arr.length; i++) {
    let block = arr[i]
    let lines = block.lines
    for (let k = 0; k < lines.length; k++) {
      let line = lines[k]
      if (isCommand(line)) {
        let command = parseCommand(line)
        console.log(command)
      }
    }
  }
  return arr
}
function parseCommand (line) {
  let name = line.split(' ')[0]
  switch (name) {
    case 'Translate':
      break
  }
}
module.exports = n
