function StaticFooter() {
  return (
    <>
      <div className="w-full absolute bottom-0 left-0 bg-black text-white py-2 justify-center items-center">
        <div className="flex flex-col justify-center">
          <p className="flex flex-row items-center justify-center">
            <img
              src="./src/assets/staticfooter.png"
              alt="CardWave Logo"
              className=" mb-2 w-6 h-6 m-[0.3rem]     "
            />
            <span> CardWave.in</span>{" "}
          </p>

          <p className="flex flex-row items-center text-[#424242] text-bold justify-center">
            &copy; 2024 , All rights reserved by CardWave.in.
          </p>
        </div>
      </div>
    </>
  );
}

export default StaticFooter;
