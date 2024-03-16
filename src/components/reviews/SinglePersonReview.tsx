import zachLinkedInPic from "../../assets/zach-linkedin-pic.jpg";

const review = {
  content: `An excellent class and phenomenal teachers, thanks for all you do to help educate and empower the next generation(s)!`,
  author: "Zachary Bohnstedt (Parent)",
  avatarSrc: zachLinkedInPic,
  avatarUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7072917277733519360?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7072917277733519360%2C7072952406308761601%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287072952406308761601%2Curn%3Ali%3Aactivity%3A7072917277733519360%29",
};

export const SinglePersonReview = () => {
  return (
    <div className=" flex bg-neutral p-8">
      <div className="mx-auto flex max-w-7xl items-center">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <a href={review.avatarUrl}>
              <img src={review.avatarSrc} alt={`${review.author}.`} />
            </a>
          </div>
        </div>
        <div className="flex-col px-4">
          <div className="">
            <h4 className="text-sm font-bold text-neutral-content">
              {review.author}
            </h4>
          </div>
          <div
            className="italic text-neutral-content"
            dangerouslySetInnerHTML={{ __html: review.content }}
          />
        </div>
      </div>
    </div>
  );
};
