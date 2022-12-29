## Next js file structure
### Components
 Here are the React component which could be reused in multiple pages or are complex enough to move them to another file and test them individually.

Each file should have a default export with a single component, inside the file there could be multiple components though. The file name must use kebab-case.
Each component here should have at least an snapshot tests, the test file should be in this same folder
    
       1.  Layout
        Next.js doesn’t come with a built-in “layout” system.
        Layouts are used to wrap your Templates and provide them with 
        the components which will be displayed by default in a specific
        layout. For example, you would include the Footer and the Header 
        in a default layout.

        // components/layout.js
        import Navbar from './navbar'
        import Footer from './footer'

        export default function Layout({ children }) {
        return (
         <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
          )
         }

       2. Hompepage
          Here home page need to create.
          In Next.js, a Homepage is a React Component exported from a .js, 
          .jsx, .ts, or .tsx file in the pages directory. Each Component
          can be imported as per requirement.
          Example: If you create Component/Homepage.js that exports a React component
           like below:

                 export default function Homepage() {
                  return <div>About</div>
         }
      
       3. Navbar
         Similary , here Navbar is created and exported by .js , .ts,.tsx , .jsx in the
         pages directory

    
###  Node modules
   The node_modules folder contains libraries downloaded from npm. You shouldn't push it 
   to github (you should even add it to your .gitignore), bacause everyone who clones your
   repository can download it themselves (based on your package.json).

###  Pages

All the routes of your Next.js application will be placed in this directory. For each route,
you will have a separate file, which is named as the route. So for example the file about.tsx
in the pages directory would create the following route: https://whateverurl.com/about. You 
will get more information about the routing in the official documentation from Next.js.

Routing: Introduction | Next.js
Next.js has a file-system based router built on the concept of pages. When a file is added to 
the pages directory it's automatically ava ilable as a route.
                 [Read More about Routing](https://nextjs.org/docs/routing/introduction)

By default, I added five pages to the directory. The 404.js is most likely self-explaining.
To display a custom error page in case of a 5XX HTTP error you can use the _error.js file.
 The app.tsx is basically the homepage of your app.
         
       1. app.tsx
        This folder contains the code used to start a Next.js page.
        As a Next.js app grows, it contains more and more code within pages/_app,
        to such a point where it’s difficult to understand all that is happening there.  
        The goal of this folder is to centralize all the business logic executed by pages/_app,
        while keeping it organized and maintenable. 
        
        This folder contains global styles and “page bootstraps” that are used to initialize the client
        and server, distinctively. It also contains constants used thorough the app.

        import '../styles/global/globals.css'
        import type { AppProps } from 'next/app'

         export default function App({ Component, pageProps }: AppProps)
            {
               return <Component {...pageProps} />
            }

       2. 404.js file  
         It's a well-designed, simple page, but what if you want to add your own branding and linking to it?
         Well, luckily for you, they thought of that, and it's as simple as adding a 404.js file inside of 
         your pages/ directory. Here's a quick example of what you could do:
         // 404.js
         import Link from 'next/link'
         export default function FourOhFour()
         {
         return
              <>
          <h1>404 - Page Not Found</h1>
          <Link href="/">
              <a>Go back home</a>
         </Link>
              </>
         }
           Because this is just like any other page component in Next.js, you can add whatever styling,
           links, data,or copy you'd like.For other errors, you can do the exact same thing with an 
          _error.js file in the pages/ directory! The 404 error is special because it is always statically      generated, but the others rely on the server.
        
        3. error.js
            The _document.js is a special file which will only be used Server Side to render the basic
            HTML of the   application. The _error.js is a special file which will be used to customize 
            the Next.js error page.

        4. _document.js 
             The _document.js is a special file which will only be used Server Side to render the basic
             HTML of the application.

        5. _api.tsx
            Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint 
            instead of a page. They are server-side 
            only bundles and won't increase your client-side bundle size.
            For example, the following API route pages/api/login.js returns a json response with a status code of 200:
            export default function handler(req, res)
            {
                 res.status(200).json({ name: 'John Doe' })
            }

        
  ### Public
         Next.js uses this directory to statically serve files like the robots.txt or
         the favicon.ico. You will get more information on how to include 
         these files in the official docs.   
 ###  Styles
 The styles directory is an addition to the scss files you have in each component directory. I like to place all my global and componentlevel styles like variables or utilities in this directory.
 You may use a different approach for your application styling, so feel free to customize or remove this directory.
     
      1.Global.css

       To add a stylesheet to your application, import the CSS file within pages/_app.js.
       For example, consider the following stylesheet named styles.css:
      
       body
        {
         font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica','Arial', sans-serif;
         padding: 20px 20px 60px;
         max-width: 680px;
         margin: 0 auto;
         }

      2. componentlevel.css

          Next.js supports CSS Modules using the [name].module.css file naming convention.
          CSS Modules locally scope CSS by automatically creating a unique class name. This
          allows you to use the same CSS class name in different files without worrying about
          collisions.This behavior makes CSS Modules the ideal way to include component-level CSS.
          CSS Module files can be imported anywhere in your application.

            1. Home.module.js
            2. about.module.js
           
         Example:
         import React from 'react'
         import styles from '../styles/componentlevel/Home.module.css'
         function Homepage()
         {
         return (
                      <div>
                           <p>This my Homepage</p>
                      </div>
                 )
         }

         export default Homepage

### .eslintrc.json
 ESLint is designed to be flexible and configurable for your use case. You can turn off every rule and run only
 with basic syntax validation or mix and match the bundled rules and your custom rules to fit the needs of your project
### .gitignore
The .gitignore file is a text file that tells Git which files or folders to ignore in a project.
A local .gitignore file is usually placed in the root directory of a project. You can also create a global .gitignore file
and any entries in that file will be ignored in all of your Git repositories.
To create a local .gitignore file, create a text file and name it .gitignore (remember to include the . at the beginning).
Then edit this file as needed. Each new line should list an additional file or folder that you want Git to ignore.

The entries in this file can also follow a matching pattern.

    1.  * is used as a wildcard match

    2.  / is used to ignore pathnames relative to the .gitignore file
   
    3.   # is used to add comments to a .gitignore file
### .next-env.d.ts
A file named next-env.d.ts will be created in the root of your project. This file ensures Next.js types are picked up by the
 TypeScript compiler.You cannot remove it, however, you can edit it 
###  next.config.js
For custom advanced configuration of Next.js, you can create a next.config.js or next.config.mjs file in the root of your project
directory (next to package.json). next.config.js is a regular Node.js module, not a JSON file. It gets used by the Next.js server 
and build phases, and it's not included in the browser build.
  Take a look at the following next.config.js example:

    /**
    * @type {import('next').NextConfig}
    */
    const nextConfig = 
      {
         /* config options here */
      }

    module.exports = nextConfig
###  package-lock.json
package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json.
It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of
intermediate dependency updates.
###  package.json
The package. json file is the heart of any Next project. It records important metadata about a project which is required before publishing 
to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point
 to our package.
###  README.md
You can add a README file to a repository to communicate important information about your project. A README, along with a repository license
citation file, contribution guidelines, and a code of conduct, communicates expectations for your project and helps you manage contributions.

###  tsconfig.json
tsconfig.json file is a file of JSON format which allows us to point the root level files and different compiler options to setup that require 
to compile a TypeScript based projects. The existence of this file in a project specifies that the given directory is the TypeScript project folder root. 
The tsconfig.json file mainly consists of the information for the following:
    
    1. CompilerOptions
    2. CompileOnSave
    3. Files
    4. Include
    5. Exclude