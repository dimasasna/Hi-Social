const ListProgram = ({ t }) => {
  return (
    <section className="bg-sky-200 rounded-lg w-40  md:w-48  lg:w-72 h-12 md:h-14 lg:h-20 flex justify-center items-center hover:text-white hover:bg-blue-500 active:bg-blue-600 cursor-pointer">
      <p className=" text-center text-xs md:text-sm lg:text-xl">{t}</p>
    </section>
  );
};
// w-40  md:w-48  lg:w-[292px]
export default ListProgram;
