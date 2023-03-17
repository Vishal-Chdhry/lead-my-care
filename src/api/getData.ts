import express from 'express';
import X2JS from 'x2js';
import {keywordExtract} from '../utils/extractor';

const router = express.Router();

router.get<{}, any>('/', (req, res) => {
  let query = req.query.search;
  query = query?.toString();
  if (query === undefined) {
    res.json('please provide the question in search query paramteter');
  }
  const param = keywordExtract(query as string).join('+');

  const x2js = new X2JS();

  fetch(`https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term=${param}`)
    .then(r => r.text())
    .then(xml => x2js.xml2js(xml))
    .then(r => res.json(r.nlmSearchResult.list.document[0]));
});

export default router;
