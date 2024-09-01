function StaticFooter() {
  return (
    <>
      <div className="w-full absolute bottom-0 left-0 bg-black text-white py-2 justify-center items-center">
        <div className="text-sm flex flex-row gap-[100px] justify-center">
          <p className="flex flex-row items-center text-white text-bold justify-center">
            &copy; 2024 , All rights reserved by CardWave.in.
          </p>
        </div>
      </div>
    </>
  );
}

export default StaticFooter;
