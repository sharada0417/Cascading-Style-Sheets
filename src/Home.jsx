import React from 'react'
import myImage1 from './assets/1.webp';
import myImage2 from './assets/2.webp';

const Home = () => {
  return (
    <div>
    {/* Header */}
    <div className="container mx-auto px-10 text-center text-3xl bg-gray-400 py-4">
    <b> Cascading Style Sheets</b>
    </div>
    <div className="container mx-auto px-4  text-xm bg-gray-90 py-4">
    <b><i>Cascading Style Sheets (CSS)</i></b> is a styling language used to define the visual appearance and layout of web pages. It allows developers to separate the content (HTML) from the design (CSS), which enhances maintainability, flexibility, and reusability across multiple pages. CSS controls various aspects of page design, including layout, colors, fonts, spacing, and positioning. It works by associating style rules with HTML elements to create a cohesive, user-friendly experience. CSS can be applied in three ways: inline, internal, and external, providing versatility in how styles are managed and organized.CSS can be categorized into various types based on its structure, purpose, and how it's applied to web projects. Two commonly discussed categories are Semantic CSS and Utility CSS.
    </div>
    {/* Cards */}
    <div className="container mx-auto px-4 bg-gray-100 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-">Semantic CSS</h2>
            <p className="text-gray-600">
            Semantic CSS is the practice of writing styles that align with the meaning or purpose of HTML elements, rather than focusing purely on appearance. It emphasizes clarity and readability by giving descriptive names to classes and IDs based on the content or functionality of the elements they style. This approach helps improve maintainability, accessibility, and reusability in web development.<br/>
            <br/>
            <section class="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 class="text-xm font-semibold text-gray-800 mb-4">Key Points of Semantic CSS</h2>
            <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
             <li>
            <strong>Descriptive Naming:</strong> Class and ID names are chosen based on the role or function of the element 
            (e.g., <code class="text-blue-600">header</code>, <code class="text-blue-600">footer</code>, <code class="text-blue-600">button</code>).
            </li>
             <li>
                <strong>Clear Structure:</strong> Styles are applied to elements according to their semantic meaning in the content, 
                 promoting a logical structure.
             </li>
             <li>
              <strong>Improved Accessibility:</strong> Semantic CSS enhances the understanding of content for both developers 
                 and assistive technologies (e.g., <code class="text-blue-600">screen readers</code>).
            </li>
            </ul>
            <br/>
            <img 
             src={myImage1} 
             alt="My Image" 
            className="mx-auto rounded-lg shadow-lg w-full max-w-[250px] h-auto"
            />
            </section>
            <br/>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                 Why Use Semantic CSS?
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-sm">
            <li>
            <strong>Readability:</strong> Makes code easier to understand for both developers and designers.
            </li>
            <li className="mt-2">
            <strong>Maintainability:</strong> Easier to update and manage code as the styles reflect the structure of the page.
            </li>
            <li className="mt-2">
            <strong>Scalability:</strong> Semantic CSS is more adaptable to larger projects because it focuses on the role of elements rather than specific visual styles.
            </li>
            </ul>
    
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Utility CSS</h2>
            <div>
            <p className="text-gray-600">
            Utility CSS refers to a design approach that uses small, single-purpose classes to apply styles directly to HTML elements. Instead of creating custom CSS for every component, you can combine utility classes to style elements quickly and consistently.
            Utility CSS frameworks, like Tailwind CSS, provide pre-defined utility classes for styling properties such as margin, padding, colors, borders, typography, and more.<br/>
            <br/>
            <section class="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 class="text-xm font-semibold text-gray-800 mb-4">Advantages of Utility CSS</h2>
            <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>
              <strong>Speed: </strong>Quickly style elements without writing additional CSS.
            </li>
            <li>
              <strong>Consistency: </strong> Ensures uniform design across the application.
            </li>
             <li>
              <strong>Small CSS Files: </strong>  Reduces the need for lengthy custom stylesheets.
            </li>
            <li>
              <strong>Flexibility: </strong>  Allows combining classes for unique designs without overriding CSS.
            </li>
            </ul>
            <br/>
            <img 
             src={myImage2} 
             alt="My Image" 
            className="mx-auto rounded-lg shadow-lg w-full max-w-[250px] h-[130px]"
            />
            </section>
            <br/>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                  When to Use Utility CSS?
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-sm">
            <li>
            When you need to style elements quickly without creating custom CSS.
            </li>
            <li className="mt-2">
            For projects that require a consistent design system.
            </li>
            <li className="mt-2">
            When you want to reduce the size and complexity of CSS files.
            </li>
            </ul>
            <br/>
            <p className="text-gray-500 text-sm">
            Utility CSS is especially useful for small projects, prototyping, or when using frameworks like Tailwind CSS.
            </p>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Home
