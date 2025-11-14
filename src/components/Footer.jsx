import React from 'react'

const Footer = () => {
  return (
    <div className="mt-4 px-6 lg:px-12">
      <div className="border-t-[1px] py-3 border-[#202020] flex justify-between">
        <p className="text-sm text-gray-400">
          Designed by{" "}
          <a href="https://domstack.vercel.app" className="text-white font-semibold">
            Dominion
          </a>
        </p>
        <p className="text-sm font-semibold text-white">
          © All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer