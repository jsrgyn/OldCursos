//https://blog.rocketseat.com.br/estrategias-pdf-em-nodejs/
//https://www.npmjs.com/package/pdfkit
//https://github.com/blikblum/pdfkit-webpack-example
//https://www.andronio.me/2017/09/02/pdfkit-tables/
//const PDFDocument = require('pdfkit');
const fs = require('fs');
//const PDFDocument = require('pdfkit');
const PDFDocument = require('./pdfkit-tables');
const blobStream  = require('blob-stream');

// Create a document
const doc = new PDFDocument();

// pipe the document to a blob
const stream = doc.pipe(blobStream());

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));
 
// Embed a font, set the font size, and render some text
doc.font('fonts/PalatinoBold.ttf')
   .fontSize(25)
   .text('Some text with an embedded font!', 100, 100);
 
// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image('path/to/image.png', {
   fit: [250, 300],
   align: 'center',
   valign: 'center'
});

// Add another page
doc.addPage()
   .fontSize(25)
   .text('Here is some vector graphics...', 100, 100);

// Draw a triangle
doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill("#FF3300");
 
// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc.scale(0.6)
   .translate(470, -380)
   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
   .fill('red', 'even-odd')
   .restore();
 
// Add some text with annotations
doc.addPage()
   .fillColor("blue")
   .text('Here is a link!', 100, 100)
   .underline(100, 100, 160, 27, {color: "#0000FF"})
   .link(100, 100, 160, 27, 'http://google.com/');

doc.addPage()
  .fontSize(12);

const table0 = {
  headers: ['Word', 'Comment', 'Summary'],
  rows: [
      ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
      ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
  ]
};

doc.table(table0, {
  prepareHeader: () => doc.font('Helvetica-Bold'),
  prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
});

const table1 = {
  headers: ['Country', 'Conversion rate', 'Trend'],
  rows: [
      ['Switzerland', '12%', '+1.12%'],
      ['France', '67%', '-0.98%'],
      ['England', '33%', '+4.44%']
  ]
};

doc.moveDown().table(table1, 100, 350, { width: 300 });
 
// Finalize PDF file
doc.end();
// end and display the document in the iframe to the right
//doc.end();
//stream.on('finish', function() {
//  iframe.src = stream.toBlobURL('application/pdf');
//})


//stream.on('finish', function() {
    // get a blob you can do whatever you like with
    //const blob = stream.toBlob('application/pdf');
   
    // or get a blob URL for display in the browser
    //const url = stream.toBlobURL('application/pdf');
    //iframe.src = url;

    //console.log(url);
  //});

  //stream.on('finish', function() {
    //iframe.src = stream.toBlobURL('application/pdf');
  //});

 /*
var PDFDocument = require('pdfkit').default;
var blobStream = require('blob-stream');
var ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');
//import './register-files'
require('./register-files');

 var lorem =
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, elementum a rhoncus ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae tincidunt ultricies, eros odio dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\nMauris at ante tellus. Vestibulum a metus lectus. Praesent tempor purus a lacus blandit eget gravida ante hendrerit. Cras et eros metus. Sed commodo malesuada eros, vitae interdum augue semper quis. Fusce id magna nunc. Curabitur sollicitudin placerat semper. Cras et mi neque, a dignissim risus. Nulla venenatis porta lacus, vel rhoncus lectus tempor vitae. Duis sagittis venenatis rutrum. Curabitur tempor massa tortor.';

function makePDF(PDFDocument, blobStream, lorem, iframe) {
 // create a document and pipe to a blob
 var doc = new PDFDocument();
 var stream = doc.pipe(blobStream());

 doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf')

 // draw some text
 doc.fontSize(25).text('Here is some vector graphics...', 100, 80);

 // some vector graphics
 doc
   .save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill('#FF3300');

 doc.circle(280, 200, 50).fill('#6600FF');

 // an SVG path
 doc
   .scale(0.6)
   .translate(470, 130)
   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
   .fill('red', 'even-odd')
   .restore();

 // and some justified text wrapped into columns
 doc
   .font('Roboto')
   .text('And here is some wrapped text...', 100, 300)
   .fontSize(13)
   .moveDown()
   .text(lorem, {
     width: 412,
     align: 'justify',
     indent: 30,
     columns: 2,
     height: 300,
     ellipsis: true
   });

 doc.addPage();

 doc
   .fontSize(25)
   .text('And an image...')  
   .image('images/bee.png')

 // end and display the document in the iframe to the right
 doc.end();
 stream.on('finish', function() {
   iframe.src = stream.toBlobURL('application/pdf');
 });
}

var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/javascript');
editor.setValue(
  makePDF
    .toString()
    .split('\n')
    .slice(1, -1)
    .join('\n')
    .replace(/^  /gm, '')
);
editor
  .getSession()
  .getSelection()
  .clearSelection();

var iframe = document.querySelector('iframe');
makePDF(PDFDocument, blobStream, lorem, iframe);

editor.getSession().on('change', function() {
  try {
    var fn = new Function(
      'PDFDocument',
      'blobStream',
      'lorem',
      'iframe',
      editor.getValue()
    );
    fn(PDFDocument, blobStream, lorem, iframe);
  } catch (e) {
    console.log(e);
  }
});
*/