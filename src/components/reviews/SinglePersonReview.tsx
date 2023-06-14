const review = {
  content: `
    <p>An excellent class and phenomenal teachers, thanks for all you do to help educate and empower the next generation(s)!</p>
  `,
  author: "Zachary Bohnstedt (Parent):",
  avatarSrc:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};

export const SinglePersonReview = () => {
  return (
    <div className="flex items-center bg-base-200 p-8 ">
      {/* <a href="https://www.linkedin.com" className="mx-auto"> */}
      <img
        src={review.avatarSrc}
        alt={`${review.author}.`}
        className="h-14 w-14 rounded-full"
      />
      {/* </a> */}
      <div className="flex-col px-4">
        <div className="">
          <h4 className="text-sm font-bold text-base-content">
            {review.author}
          </h4>
        </div>
        <div
          className="text-base italic text-base-content "
          dangerouslySetInnerHTML={{ __html: review.content }}
        />
      </div>
    </div>
  );
};
