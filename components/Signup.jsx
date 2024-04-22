import React from "react";

const Signup = () => {
  return (
    <div id="signup" className="w-full p-4 mx-auto">
      <div className="py-16">
        <h2 className="uppercase tracking-widest text-xl text-[#5651e5] underline">
          Volunteer sign up / Become a member
        </h2>

        {/*form-container*/}
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form method="POST" action="">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="text-sm uppercase py-2">Name</label>
                  <input
                    className="rounded-lg border-2 p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm uppercase py-2">Phone Number</label>
                  <input
                    type="text"
                    name="text"
                    className="rounded-lg border-2 p-3 flex border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="text-sm uppercase py-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="rounded-lg border-2 p-3 flex border-gray-300"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="text-sm uppercase py-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="rounded-lg border-2 p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm uppercase py-2">age</label>
                  <select className="rounded-lg border-2 p-3 flex border-gray-300">
                    <option>0-3 years</option>
                    <option>3-6 years</option>
                    <option>6-9 years</option>
                    <option>9-12 years</option>
                    <option>12-15 years</option>
                    <option>15-18 years</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
