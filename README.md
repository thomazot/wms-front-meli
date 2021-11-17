# MercadoLivre WMS Front End Test

In this test we will build an item review area.

It will contain two pages:

- Login page
- Item review page

<hr />
<br />

🖥️ **Login page**

Implement a login page with a form to login, it doesn't have to actually log you in or do any checks, but things like e-mail validation are appreciated!

🖥️ **Item overview page**

This will show some items that will be populated by the [Meli API](https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br).

The following should be true for this page:

- All the items will be displayed here
- Should have a search bar to [find specific items](https://api.mercadolibre.com/sites/MLA/search?q=​:query)
- The item have to be shown with the data in a user-friendly way
- Each item can be favorited or unfavorited
- Each item can be rated
- Should have a sidebar showing [all the categories](https://api.mercadolibre.com/sites/MLB/categories)

<br />

🔴 **Important**

- Building a back-end to this test is optional.
- You can use _any framework/library to build the front-end_

🖊️ **Evaluation Criteria**

- The app must run.
- You must open a pull request
- Your app is lean and mean (small files that make the page look good).
- You implemented a proper grid.
- Your app is responsive.
- Your app is well structured.
- You implemented the rating functionality without using a third-party library.

<br />

🎁 **Bonus points**

- You wrote unit tests.
- You wrote server side code instead of using a utility application like http-server.
- You implement actual endpoints to request the item data.
- You implemented actual authentication
- Good luck, and have fun! 🎉

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [PlopJS](https://plopjs.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `generate`: generate template components ex: `yarn generate [name component]` or `npm run generate [name component]`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
