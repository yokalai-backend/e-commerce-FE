export default function Card() {
  const cardEx = {
    name: "A very elegant shoes with a very expensive price buy now and get the special discount!",
    price: 2000,
    rate: 4.3,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3xWFGcDjCPy751UK0o9NTejgYoacMp4B0pXQAEQq1h4H8FOnu2VpbigcHXd-O3vW8irHOvFB9Ret-LoiyhVtT7GDquzsdEbhOYorQbqXSAqi5OXwCoeK-_UM",
  };
  return (
    <div>
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={cardEx.image}
        alt=""
      />
    </div>
  );
}
