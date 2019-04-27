## ABOUT
This is a platform for creating product pages. It uses Gatsby to build a static site, Netlify CMS to host the content and Netlify to build and deploy the site when there are changes.

The benefits of this setup are:

### Performance

Gatsby builds static resources and an html document for each route of the application. 
These static assets can be deployed on Netlify's Global CDN, resulting in a very low time to first meaningful paint when a user first visits a page. 
Additionally, once the page has loaded a React SPA is mounted in the background, which allows for even faster SPA transitions between pages (if other marketing pages were built with this platform).

### Reusability, extensibility and consistency

Specific pages are created using the Netlify CMS. This allows copy and even some design changes without development effort, allowing designers, copywriters and developers to work more independently. 
This platform could be extended to support more kinds of page content and the CMS could be extended with custom widgets (like a color picker) to allow even more flexibility in the kinds of pages that can be created. 
If all product pages were built on this same platform that would help ensure a consistency in design language as well.

### Final comments

Given more time I would use Jest, enzyme and enzyme's snapshot testing to unit test the React components that make up the platform. 
It would also be good to instrument the components with an analytics and experimentation platform (e.g. Optimizely) to track user engagement and perform experiments.

### Useful links

* The site is deployed at: https://netlify-marketing-demo2019.netlify.com
* You can access the CMS to modify or add new pages at: https://netlify-marketing-demo2019.netlify.com/admin
* The example Netlify Analytics product page is available at: https://netlify-marketing-demo2019.netlify.comproducts/analytics