
const Blog = () => {
    return (
        <div className="container my-10 bg-slate-100 p-5">
            <div>
                <h2 className="font-bold text-xl ">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="font-bold">Access Token:</p>
                <p className="font-serif">An access token is like a special pass that lets you get into secret places, like websites or apps. It proves that you are allowed to go there. It proves that someone is who they say they are, but only for a short amount of time, usually just a few minutes or hours. Access tokens are given by a server or provider after you have confirmed who you are.</p>
                <p className="font-bold">Access Token:</p>
                <p className="font-serif">A refresh token is a special code that can get a new permission code when the old one doesn't work anymore. Refresh tokens last longer than access tokens and are used to keep a session going. The client-side application keeps them very safe.</p>
                <br />
                <p className="font-serif">When a user logs in and gets a special code called access token and another code called refresh token, the access token is used to access things that are kept private. The access token is like a key that is put in a special part of requests to check if the user is really who they say they are and if they have permission to do what they are asking to do. Access tokens don't last for very long so that if someone else tries to use them, they won't be able to get in and do bad things.
                </p>
                <p className="font-serif">
                    1. Storage on the client-side:
                    Both the access token and refresh token should be securely stored on the client-side to prevent unauthorized access. Best practices include:

                    <p className="font-bold">1.Storing them in an HTTP-only secure cookie:

                    </p>
                    <span className="font-serif">This way makes sure that the codes are sent to the server automatically, but they are not shown to the JavaScript code. It keeps you safe from attacks called cross-site scripting (XSS).</span>
                    <p className="font-bold">2. Using browser storage mechanisms:</p>
                    <span className="font-serif">We can keep the small things called "tokens" in your web browser using storage like localStorage or sessionStorage. You need to use safety measures to prevent harmful attacks on your website, like cross-site scripting. Remember that if someone gets into the code on your computer, they could steal your tokens.
                    </span>
                    <p className="font-bold">3. Using a dedicated token management library:</p>
                    <span>Several tools for websites and apps save and protect codes called tokens that grant access to user accounts. These libraries use good ways of doing things and protection to keep the tokens safe.</span>
                </p>

            </div>

            <div>
                <h2 className="font-bold text-xl mt-5 mb-2">
                    2. Compare SQL and NoSQL databases?
                </h2>
                <p className="font-serif">
                    SQL databases are commonly used for applications that require complex transactions, strict data consistency, and structured data models. They are suitable for applications such as financial systems, e-commerce platforms, and content management systems.</p>
                <br />
                <p className="font-serif">NoSQL databases are well-suited for applications with large amounts of unstructured or semi-structured data, high scalability requirements, and flexible data models. They are commonly used in scenarios such as real-time analytics, social networks, content caching, and IoT applications.</p>
            </div>

            <div>
                <h2 className="font-bold text-xl mt-5 mb-2">3. What is express js? What is Nest JS?</h2>
                <p className="font-serif">

                    Express.js is a simple tool for making websites with Node.js. This helps make web applications and APIs easily and with a lot of flexibility. Express.js is a tool that helps you make server-side applications. It makes it easy to manage requests and decide where they should go. It also helps you add extra features to your servers, like error-handling and authentication, without having to write everything from scratch.
                </p>
                <br />
                <p className="font-serif">

                    Nest.js is a tool for creating computer programs that run on servers using Node.js. It can be easily adjusted to handle larger quantities of data, and is made up of different parts that can be added or removed as needed. It uses TypeScript and is influenced by Angular's way of organizing code, making it easier to keep the code organized and maintained. Nest.js makes coding easier by providing helpful tools like injection, markers, and support for key features like checking, security, and joining with a database. It provides a strong base for making big and powerful computer programs that can handle a lot of users at once.
                </p>
            </div>

            <div>
                <h2 className="font-bold text-xl mt-5 mb-2">4. What is MongoDB aggregate and how does it work?</h2>
                <p className="font-serif">

                    MongoDB's aggregate is a framework for performing advanced data operations on collections of documents. It uses a pipeline approach with multiple stages, each stage applying specific operators to manipulate and compute data. The result is a transformed and aggregated set of documents based on the specified operations, allowing for complex data manipulations and computations.
                </p>
            </div>

        </div>
    );
};

export default Blog;