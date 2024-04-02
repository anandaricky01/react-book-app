
const Book = (props) => {
    const { img, title, author, id } = props;
    
    return (
      <article className="p-3 rounded bg-white grid grid-cols-2">
        <img className="rounded" src={img} alt={title} />
        <div className="text-start">
          <p className="my-3 text-xl">{title}</p>
          <p className="self-end">{author}</p>
        </div>
      </article>
    );
  };

  export default Book