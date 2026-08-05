import { Bell, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-8">

      <h2 className="text-2xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">
          <img src="https://i.pinimg.com/1200x/ca/e7/a8/cae7a8b38bcc9abb3046c39016615650.jpg"
          className="h-10 w-10"/>
            {/* yaha apni profile ke liye url paste krna h */}
          <span className="font-medium">
            Yashfeen
          </span>

          <ChevronDown size={18} />
        </div>

      </div>

    </div>
  );
}

export default Navbar;