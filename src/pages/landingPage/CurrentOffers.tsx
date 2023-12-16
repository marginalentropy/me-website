const posts = [
  {
    id: 1,
    title: "Minecraft Coding",
    description:
      "Use Minecraft education edition to teach programming using code blocks and python. For kids and teenagers.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "April 6th - June 29th, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Robotics",
    description:
      "Hands on learning with robots. Assemble and program the robots. For kids and teenagers.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
];

export const CurrentOffers = () => {
  return (
    <div className="mx-auto flex max-w-2xl lg:max-w-7xl p-16">
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
                    {/* <span className="badge badge-lg ml-4 bg-base-200 border-base-300">New</span> */}
                  </h2>

                  <time dateTime={post.datetime} className="">
                    {post.date}
                  </time>

                  <p>{post.description}</p>

                  <div className="card-actions justify-end">
                    <button className="btn-primary btn">Learn More</button>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
