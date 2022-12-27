### Src

The src folder contains all the source files for your Next.js app .It’s where you should write most of your cod

### Overview Folder structure

**App:** Contains code (components, business logic, types) that is being used  
 by the special pages/\_app.tsx Next.js file.
**Common:** Contains everything that cannot be categorized as a module.
**Layouts:** Contains the layouts used by pages.

    1.  Core
    Contains reusable/extendable code (components, business logic, data fetching) used by other layouts.
     3.  Default
    Default layout that comes built-in with the strict minimum components (Nav, Footer). If you use NRN as a boilerplate, that’s the layout you should get started with!
     5.  demo
    Layout used by the Next Right Now demo pages. All those pages under /demo use the demo layout, which contains a custom Nav showing links to each example, and a left menu for easier navigation through the dem 
   

**modules:** Contains related pieces of code (components, types, utils) group

    1.  Core:
    Contains built-in modules included with the NRN preset you selected. They are being separated from other modules by default, so you can locate your own code faster.
   

**pages:**Contains Next.js pages and api folder.