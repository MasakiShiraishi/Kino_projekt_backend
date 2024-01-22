import express from 'express';
import { engine } from 'express-handlebars';
import fs from 'fs/promises';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

const MENU = [
  {
    label: 'Index',
    link: '/',
  },
  {
          label: 'Filmer',
          link: '/filmer',
        },
  {
    label: 'Om oss',
    link: '/about-us',
  },
  {
    label: 'Evenemang',
    link: '/event',
  },
  {
          label: 'English',
          link: '/english',
        },

];

async function renderPage(response, page) {
  const currentPath = (page == 'index')? '/' : `/${page}`;

  response.render(page, {
    menuItems: MENU.map(item => {
      return {
        active: currentPath == item.link,
        label: item.label,
        link: item.link,
      };
    })
  });
}
app.use('/assets', express.static('assets'));

app.get('/', async (request, response) => {
  renderPage(response, 'index');
});
app.get('/filmer', async (request, response) => {
          renderPage(response, 'filmer');
        });

app.get('/about-us', async (request, response) => {
  renderPage(response, 'about-us');
});

app.get('/event', async (request, response) => {
  renderPage(response, 'event');
});

// app.get('/tickets', async (request, response) => {
//           renderPage(response, 'Biljetter');
//         });

        app.get('/english', async (request, response) => {
          renderPage(response, 'English');
        });


app.use('/static', express.static('./static'));

app.listen(3080);

// app.use((err, req, res, next) => {
//           console.error(err.stack);
//           res.status(500).send('Internal Server Error');
//         });
        
//         app.listen(3080, () => {
//           console.log('Server is running on http://localhost:3080');
//         });