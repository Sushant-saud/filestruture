
## Heading level 2 Overview of Folder structure

#### Heading level 4 app:
Contains code (components, business logic, types) that is being used by 
the special pages/_app.tsx Next.js file.

#### Heading level 4 Component: 
  Contains everything that cannot be categorized as a module. See documentation below.

#### Heading level 4 layouts: 
layouts folder
Next.js doesn’t come with a built-in “layout” system.

Next Right Now doesn’t enforce any layout organization, but we do provide guidance for it.

 Remember, if the layout organization doesn’t fit your needs, you’re free to do it completely differently! 
A layout is composed of elements (Components, utils, etc.) that are used in several pages through your app. Layouts change the meta components that are used by several pages.

For instance, Next Right Now comes built-in with the following layouts:

core
default
demo
CORE LAYOUT
The core is a bit particular. It’s meant to contain code shared between several layouts.

For instance, you might have a Nav component that displays some links in the home page, and other links once connected. If the business logic behind the Nav component is very different, you might prefer to use 2 different components.

But, if the business logic is similar and only the links themselves are different, you might prefer to avoid code duplication and have one core/components/Nav component that is being configured differently by the other layouts.

That’s the purpose of the core folder, to contain such components that are used by other layouts.

 Although components are the most common way to share code between layouts, you might also need to share ways to fetch data or share page properties. Those are also good and valid use-cases for using the core folder. 
DEFAULT LAYOUT
The default layout is not actively used by Next Right Now, only the page template files use it.

It’s an easy-to-get-started layout containing only the minimal stuff, and it’s meant to be customized to fit your needs.

 You might also want to rename it to something that makes more sense to you, don’t hesitate to do so! 
DEMO LAYOUT
The demo layout is used by the NRN demo pages.

 Most people who use Next Right Now as a boilerplate eventually get rid of it, we did (on our private fork). 
It’s great to show how to build various pages, and can be used as an inspiration. It’ll be most useful at the beginning, when you learn how to build your own pages.

It’s also a good example on how to use layouts, and why they’re interesting!

For instance, the demo layout customises the Nav, but uses the same Footer as those in the core layout.

ADDING MORE LAYOUTS?
You can definitely add more layouts!

Keep in mind a layout’s purpose is to:

Show different pages similarly (same navigation menu, footer, etc.)
Prepare pageProps similarly for different pages (fetching content from a data source, etc.)
Their goal is to reduce code duplication and increase maintainability of your app. Use them as you see fit!

 Usually, a website with an admin section (behind authentication) would use a different layout for the admin part of th
<!-- Contains the layouts used by pages. 
core: Contains reusable/extendable code (components, business logic, data fetching) used by other layouts.
default: Default layout that comes built-in with the strict minimum components (Nav, Footer). If you use NRN as a boilerplate, that’s the layout you should get started with!
demo: Layout used by the Next Right Now demo pages. All those pages under /demo use the demo layout, which contains a custom Nav showing links to each example, and a left menu for easier navigation through the demo.
modules: Contains related pieces of code (components, types, utils) grouped together. See documentation below.
core: Contains built-in modules included with the NRN preset you selected. They are being separated from other modules by default, so you can locate your own code faster.
pages: Contains Next.js pages and api folder.
stories: Contains Storybook stories.
app folder
This folder contains the code used to start a Next.js page.

 As a Next.js app grows, it contains more and more code within pages/_app, to such a point where it’s difficult to understand all that is happening there. The goal of this folder is to centralize all the business logic executed by pages/_app, while keeping it organized and maintenable. 
This folder contains global styles and “page bootstraps” that are used to initialize the client and server, distinctively. It also contains constants used thorough the app.

Read more about “Application Bootstrap”.

common folder
The common folder is meant to be a simple and quick way for developers to write code, without having to think about to modularize it.

Basically, you should write your code in common if:

You’re building a very simple app.
You’re not familiar with modules or not familiar with the existing code.
You’re in a hurry and just want to do something quickly.
You don’t know if what you’re working on is a module, or might become one in the future.
You don’t care about using a modular design approach.
You don’t want to think about building a module yet.
You’re unsure about whether using a module or using the common folder.
Etc.
Whether you use common or modules folder does not matter. Not really. Don’t stress yourself about “doing it the right way”, there is no “right way”.

Modules are meant to group related code together so that it’s easier to reason about. It won’t change anything if all your code is in common, you can always split it into modules once you feel it’s useful.

 In the end of the day, it doesn’t matter if you’re using a module or common, what matters is you find your code quickly, and the organization makes sense to you (and your team). Don’t fight with yourself about it, don’t waste time, just do what feels right. Worst case scenario, you’ll change it later.  -->
layouts folder
Next.js doesn’t come with a built-in “layout” system.

Next Right Now doesn’t enforce any layout organization, but we do provide guidance for it.

 Remember, if the layout organization doesn’t fit your needs, you’re free to do it completely differently! 
A layout is composed of elements (Components, utils, etc.) that are used in several pages through your app. Layouts change the meta components that are used by several pages.

For instance, Next Right Now comes built-in with the following layouts:

core
default
demo
CORE LAYOUT
The core is a bit particular. It’s meant to contain code shared between several layouts.

For instance, you might have a Nav component that displays some links in the home page, and other links once connected. If the business logic behind the Nav component is very different, you might prefer to use 2 different components.

But, if the business logic is similar and only the links themselves are different, you might prefer to avoid code duplication and have one core/components/Nav component that is being configured differently by the other layouts.

That’s the purpose of the core folder, to contain such components that are used by other layouts.

 Although components are the most common way to share code between layouts, you might also need to share ways to fetch data or share page properties. Those are also good and valid use-cases for using the core folder. 
DEFAULT LAYOUT
The default layout is not actively used by Next Right Now, only the page template files use it.

It’s an easy-to-get-started layout containing only the minimal stuff, and it’s meant to be customized to fit your needs.

 You might also want to rename it to something that makes more sense to you, don’t hesitate to do so! 
DEMO LAYOUT
The demo layout is used by the NRN demo pages.

 Most people who use Next Right Now as a boilerplate eventually get rid of it, we did (on our private fork). 
It’s great to show how to build various pages, and can be used as an inspiration. It’ll be most useful at the beginning, when you learn how to build your own pages.

It’s also a good example on how to use layouts, and why they’re interesting!

For instance, the demo layout customises the Nav, but uses the same Footer as those in the core layout.

ADDING MORE LAYOUTS?
You can definitely add more layouts!

Keep in mind a layout’s purpose is to:

Show different pages similarly (same navigation menu, footer, etc.)
Prepare pageProps similarly for different pages (fetching content from a data source, etc.)
Their goal is to reduce code duplication and increase maintainability of your app. Use them as you see fit!

 Usually, a website with an admin section (behind authentication) would use a different layout for the admin part of the site. 
modules folder
Modules are and advanced way of organizing your code base.

 Modules within src/modules/core are modules built-in with Next Right Now. You should create your own modules in src/ or src/modules. Either is fine, it’s a matter of taste/opinion. Some people might prefer to add them to src/ directly and use module paths aliases. 
Modules don’t change how code is compiled or anything like that, they’re purely a way to organize your code, so it’s easier to reason/maintain.

You should group code together into a module if:

You feel like it’ll improve the understanding or maintainability of the code.
You now understand (from experience) what is that feature you built a few weeks ago and why it would be beneficial to have a dedicated module for it.
You have related code splattered all over common (components, utils, hooks, etc.), and it feels like all those pieces should be grouped together.
Modules are the natural evolution of “big” apps. Actually, your app doesn’t need to be “big” (what’s “big” anyway?).

 Do you remember those days when we had our code divided between js and css folders?
When React/Angular/Vue came out, they changed the way we build UI by introducing the concept of “Components”, where JS and CSS code lives together, as a unified Component with all related code within the component folder.

NRN “modules” hold a very similar role. 
Here is how we decide (at Unly) if we should use a module:

It should be composed of, at least, 2 different entities.
Entities are: Types, Components, Utilities, Hooks, Contexts, etc.
We know the module is small now, but it’s going to grow soon.
Exceptionally, if it’s related to a 3rd party (e.g: modules/sentry), it can be a module.
Exceptionally, if we feel like it should be a module, then we go for it (it doesn’t really matter anyway!).
WHY USING A MODULAR DESIGN PATTERN?
Modules are a different way of organizing your source code, in a very different way compared to the well-known MVC design pattern.

While MVC (and many other) design pattern groups code together based on “role” of each file, our approach is different and groups related code together.

MVC is very simple to understand because you don’t have to think about it, it’s very intuitive, at first. Therefore, it’s beginner-friendly.

But, it doesn’t scale.

When you reach a dozen different features, all that code is grouped together (e.g: “Components”) even though it’s not related to each other. On the other hand, when a developer wants to do something, it’s often related to a “feature”. But, the code related to the feature is splattered in many folders and sub-folders because of the MVC pattern.

This makes it much harder to locate the code, and doesn’t give an overview of all the related pieces.

That’s why we provide a modular design pattern, for those who wishes to use it. Although, the commons folder uses an MVC-ish design pattern: You split your files based on their utility (components, etc.). That’s because it’s just simpler to comprehend and reason about, at the beginning.

 In the end, Next Right Now doesn’t enforce anything.
You’re free to use what we recommend (common and modules) or do everything in common, or everything in modules, or something entirely different if you wish to!

Eventually, do what feels right for you, and that’s what really matters. 
pages folder
The pages folder is handled by Next.js as explained in their documentation.