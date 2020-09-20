import { rest } from 'msw';
import response1 from './response-1.json';
import response2 from './response-2.json';
import response3 from './response-3.json';
import response4 from './response-4.json';
import response5 from './response-5.json';

const responseMap = {
  initial: response1,
  t3_f807cu: response2,
  t3_f1r3pr: response3,
  t3_i51dz8: response4,
  t3_eifs0j: response5,
};

const getJSONResponse = (req) => {
  const after = req.url.searchParams.get('after');
  return responseMap[after || 'initial'];
};

const handlers = [
  rest.get('https://www.reddit.com/r/lessthan500/top.json?t=year&limit=100', (req, res, ctx) => {
    const posts = getJSONResponse(req);

    if (req.url.searchParams.get('after') === 't3_f1r3pr') {
      posts.data.after = null;
      posts.data.children = posts.data.children.slice(0, 70);
    }

    return res(ctx.status(200), ctx.json(posts));
  }),
  rest.get('https://www.reddit.com/r/failed/top.json?t=year&limit=100', (req, res, ctx) => res(ctx.status(500), ctx.json({ errorMessage: 'Internal server error' }))),
  rest.get('https://www.reddit.com/*', (req, res, ctx) => res(ctx.status(200), ctx.json(getJSONResponse(req)))),
];

export default handlers;
