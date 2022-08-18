import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer bg-red border-t ">
        <div className="container  mx-auto bg-red-500">
          <div className="flex flex-wrap items-center justify-between py-4 mx-auto gap-4  text-gray-800 font-semibold">
            <div className="first">
              <p className="text-skin-white">© Copyright Free Content, Inc.</p>
            </div>

            <div className="">
              <p>© 2022 E_Artisan, Org.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
