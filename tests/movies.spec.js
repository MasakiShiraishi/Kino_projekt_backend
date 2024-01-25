import { expect, test } from "@jest/globals";
import request from "supertest";
import app from "../static/app";

test("Encanto page shows title of movie", async () => {
  const response = await request(app)
    .get("/filmer/movies/2")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("Encanto");
});

test('Get information for a specific movie', async () => {
  const movieId = 4; 
  const response = await request(app).get(`/filmer/movies/${movieId}`)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text).toContain('Min granne Totoro'); 
  expect(response.text).toContain('https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'); 
});

test('Display the list of movies', async () => {
  const response = await request(app).get('/filmer')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text).toContain('Pulp Fiction');
  expect(response.text).toContain('Encanto');
});


 
test('Render error page for non-existing movie', async () => { 
  const nonExistingMovieId = 10; 
  const response = await request('https://plankton-app-xhkom.ondigitalocean.app')
    .get(`/movies/${nonExistingMovieId}`)
    .expect(404);

  console.log(response.text);  // Log the entire response body for inspection
  // Check for the presence of 'Not Found' in the response text
  expect(response.text).toContain('Not Found');
});