const Card = ({ title, desc, imgUrl }) => {
  return (
    <div className="bg-slate-200 p-5 rounded-2xl">
      <img src={imgUrl} alt="web1" className="rounded-lg" />
      <h6 className="font-medium text-xl mt-5">{title}</h6>
      <p className="font-light">{desc}</p>
    </div>
  );
};

export default Card;
