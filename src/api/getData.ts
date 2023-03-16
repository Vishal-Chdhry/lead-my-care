import express from 'express';
const X2JS = require('x2js');

const router = express.Router();

router.get<{}, any>('/', (req, res) => {
  let param = req.query.search;
  param = param?.toString().split(' ').join('+');
  let x2js = new X2JS();

  fetch(`https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term=${param}`)
    .then(r => r.text())
    .then(xml => {
      console.log(x2js.xml2js(xml));
      return x2js.xml2js(xml);
    })
    .then(r => {
      console.log(JSON.stringify(r));
      res.json(r);
    });
});

export default router;
