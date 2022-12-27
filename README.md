### Src

The src folder contains all the source files for your Next.js app .It’s where you should write most of your cod

### Overview Folder structure

**App:** Contains code (components, business logic, types) that is being used <br> 
 by the special pages/\_app.tsx Next.js file.<br> 
**Common:** Contains everything that cannot be categorized as a module.<br> 
**Layouts:** Contains the layouts used by pages.<br> 

    1.  Core:
    Contains reusable/extendable code (components, business logic,
    <br> data fetching) used by other layouts.
     2.  Default:
    Default layout that comes built-in with the strict minimum components
    <br> (Nav, Footer). If you use NRN as a boilerplate, that’s the layout 
    <br>you should get started with!
     3.  demo:
    Layout used by the Next Right Now demo pages. All those pages under /demo 
    <br>use the demo layout, which contains a custom Nav showing links to each 
    <br>example, and a left menu for easier navigation through the demo.<br>
**modules:** Contains related pieces of code (components, types, utils) group 

    <br>1.  Core:
    Contains built-in modules included with the NRN preset you selected. They are 
    <br>being separated from other modules by default, so you can locate your own 
    <br>code faster.<br>
**pages:**Contains Next.js pages and api folder.