const posts = [
  {
    id: 1,
    title: "Minecraft Coding",
    href: "#",
    description:
      "Use Minecraft education edition to teach programming using code blocks and python. ",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "April 6th - June 29th, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Robotics",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export const CurrentOffers = () => {
  return (
    <div className="mx-auto flex max-w-2xl lg:max-w-7xl p-10">
      <div className="">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Current Programs
          </h2>
          <p className="mt-2 text-lg leading-8 ">
            For kids and teenagers.
          </p>

          <div className="mt-8 space-y-12">
            {posts.map((post) => (
              <div className="card lg:card-side">
                <figure className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 ">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </figure>

                <div className="card-body px-0 py-4 lg:py-0 lg:pl-4 ">
                  <h2 className="card-title">
                    {post.title}
                    <span className="badge badge-lg ml-4 bg-base-200 border-base-300">New</span>
                  </h2>

                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>

                  <p>{post.description}</p>

                  <div className="card-actions justify-end">
                    <button className="btn-primary btn">Listen</button>
                  </div>
                </div>
                
              </div>
              // <div
              //   key={post.id}
              //   className="relative isolate flex flex-col border-b lg:flex-row"
              // >
              //   <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              //     <img
              //       src={post.imageUrl}
              //       alt=""
              //       className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              //     />
              //     <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              //   </div>

              //   <article className="prose py-4 lg:py-0 lg:pl-4 flex flex-col">
              //     <h2 className="mb-0">
              //       Heading
              //       <span className="badge badge-lg ml-4">New</span>
              //     </h2>

              //     <time dateTime={post.datetime} className="text-gray-500">
              //       {post.date}
              //     </time>
              //     <p className="mt-2">{post.description}</p>
              //     <div className="h-auto">
              //       <button className="btn">Button</button>
              //     </div>
              //   </article>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
